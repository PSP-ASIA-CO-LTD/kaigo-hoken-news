/**
 * Infographic canvas fullscreen.
 * Native Fullscreen API first (including webkit); CSS overlay fallback
 * when the API is missing or rejects (typical on iPhone Safari).
 */
(function () {
  'use strict';

  var ENTER_LABEL = 'Full screen';
  var EXIT_LABEL = 'Exit full screen';

  function fsElement() {
    return document.fullscreenElement || document.webkitFullscreenElement || null;
  }

  function nativeEnabled() {
    return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled);
  }

  function requestFs(el) {
    var fn = el.requestFullscreen || el.webkitRequestFullscreen || el.webkitRequestFullScreen;
    if (!fn) return Promise.reject(new Error('fullscreen unsupported'));
    try {
      var result = fn.call(el);
      return result && typeof result.then === 'function' ? result : Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  }

  function exitNativeFs() {
    var fn = document.exitFullscreen || document.webkitExitFullscreen || document.webkitCancelFullScreen;
    if (!fn) return Promise.resolve();
    try {
      var result = fn.call(document);
      return result && typeof result.then === 'function' ? result : Promise.resolve();
    } catch (err) {
      return Promise.resolve();
    }
  }

  function iconEnter() {
    return '<svg class="infographic-fs-icon infographic-fs-icon--enter" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 7.5V3h4.5M17 7.5V3h-4.5M3 12.5V17h4.5M17 12.5V17h-4.5"/></svg>';
  }

  function iconExit() {
    return '<svg class="infographic-fs-icon infographic-fs-icon--exit" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M7.5 3v4.5H3M12.5 3v4.5H17M7.5 17v-4.5H3M12.5 17v-4.5H17"/></svg>';
  }

  function createButton() {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'infographic-fs-btn';
    btn.setAttribute('aria-label', ENTER_LABEL);
    btn.setAttribute('aria-pressed', 'false');
    btn.innerHTML = iconEnter() + iconExit() + '<span class="infographic-fs-label">' + ENTER_LABEL + '</span>';
    return btn;
  }

  function setButtonState(btn, active) {
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    btn.setAttribute('aria-label', active ? EXIT_LABEL : ENTER_LABEL);
    var label = btn.querySelector('.infographic-fs-label');
    if (label) label.textContent = active ? EXIT_LABEL : ENTER_LABEL;
  }

  function initContainer(container) {
    var buttons = [];
    var canvases = container.querySelectorAll('.desktop-infographic, .mobile-infographic');
    if (!canvases.length) {
      canvases = container.querySelectorAll('.diagram-wrapper');
    }

    var savedScroll = 0;
    var overlayOn = false;

    function isActive() {
      return overlayOn || fsElement() === container;
    }

    function lockScroll(on) {
      document.documentElement.classList.toggle('infographic-fs-lock', on);
      document.body.classList.toggle('infographic-fs-lock', on);
    }

    function syncUi() {
      var active = isActive();
      container.classList.toggle('is-fs-active', active);
      container.classList.toggle('is-fs-overlay', overlayOn);
      container.setAttribute('data-infographic-fs', active ? (overlayOn ? 'overlay' : 'native') : 'off');
      buttons.forEach(function (btn) {
        setButtonState(btn, active);
      });
      lockScroll(overlayOn);
      if (!active) {
        window.scrollTo(0, savedScroll);
      }
    }

    function enterOverlay() {
      overlayOn = true;
      syncUi();
    }

    function exitOverlay() {
      if (!overlayOn) return;
      overlayOn = false;
      syncUi();
    }

    function enter() {
      if (isActive()) return;
      savedScroll = window.scrollY || window.pageYOffset || 0;
      if (nativeEnabled()) {
        requestFs(container).then(function () {
          if (fsElement() !== container) enterOverlay();
          else syncUi();
        }).catch(function () {
          enterOverlay();
        });
        return;
      }
      enterOverlay();
    }

    function exit() {
      if (overlayOn) {
        exitOverlay();
        return;
      }
      if (fsElement()) {
        exitNativeFs().then(syncUi).catch(syncUi);
        return;
      }
      syncUi();
    }

    function toggle() {
      if (isActive()) exit();
      else enter();
    }

    canvases.forEach(function (canvas) {
      var btn = createButton();
      canvas.insertBefore(btn, canvas.firstChild);
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        toggle();
      });
      buttons.push(btn);
    });

    if (!buttons.length) return;

    document.addEventListener('fullscreenchange', syncUi);
    document.addEventListener('webkitfullscreenchange', syncUi);

    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape' && e.key !== 'Esc') return;
      if (!isActive()) return;
      e.preventDefault();
      exit();
    }, true);
  }

  function boot() {
    document.querySelectorAll('.infographic-container').forEach(initContainer);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
