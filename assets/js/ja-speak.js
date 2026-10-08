/**
 * Japanese term read-aloud and tooltips
 * 
 * Features:
 * - Web Speech API read-aloud (ja-JP voice, rate 0.85)
 * - WCAG 1.4.13 compliant tooltips (Escape to dismiss, hover-persistent)
 * - Feature detection: hides speaker buttons if unsupported
 * - Works on desktop and mobile Safari/Chrome
 */
(function() {
  'use strict';
  
  // ============================================
  // SPEECH SYNTHESIS
  // ============================================
  
  var synth = window.speechSynthesis;
  var jaVoice = null;
  var speechSupported = 'speechSynthesis' in window;
  
  if (!speechSupported) {
    document.querySelectorAll('.ja-speak-btn').forEach(function(btn) {
      btn.style.display = 'none';
    });
  }
  
  function loadVoices() {
    if (!speechSupported) return;
    var voices = synth.getVoices();
    for (var i = 0; i < voices.length; i++) {
      if (voices[i].lang.indexOf('ja') === 0) {
        jaVoice = voices[i];
        break;
      }
    }
  }
  
  loadVoices();
  if (speechSupported && synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = loadVoices;
  }
  
  function speak(text) {
    if (!speechSupported) return;
    synth.cancel();
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.85;
    utterance.pitch = 1;
    utterance.volume = 1;
    if (jaVoice) utterance.voice = jaVoice;
    synth.speak(utterance);
  }
  
  // Speaker button clicks
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.ja-speak-btn');
    if (btn) {
      e.preventDefault();
      e.stopPropagation();
      var text = btn.getAttribute('data-ja-text');
      if (text) speak(text);
    }
  });
  
  // Speaker button keyboard
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      var btn = e.target.closest('.ja-speak-btn');
      if (btn) {
        e.preventDefault();
        var text = btn.getAttribute('data-ja-text');
        if (text) speak(text);
      }
    }
  });
  
  // ============================================
  // TOOLTIPS (WCAG 1.4.13 compliant)
  // ============================================
  
  var activeTooltip = null;
  var tooltipTimeout = null;
  
  function createTooltip(wrapper) {
    var text = wrapper.getAttribute('data-tooltip');
    if (!text) return null;
    
    var tooltip = document.createElement('div');
    tooltip.className = 'ja-tooltip';
    tooltip.setAttribute('role', 'tooltip');
    tooltip.textContent = text;
    wrapper.appendChild(tooltip);
    
    // Position check - avoid overflow
    requestAnimationFrame(function() {
      var rect = tooltip.getBoundingClientRect();
      var wrapperRect = wrapper.getBoundingClientRect();
      
      // Check left overflow
      if (rect.left < 8) {
        tooltip.classList.add('tooltip-left');
      }
      // Check right overflow
      else if (rect.right > window.innerWidth - 8) {
        tooltip.classList.add('tooltip-right');
      }
    });
    
    return tooltip;
  }
  
  function showTooltip(wrapper) {
    if (activeTooltip && activeTooltip.parentElement !== wrapper) {
      hideTooltip(activeTooltip);
    }
    
    var tooltip = wrapper.querySelector('.ja-tooltip');
    if (!tooltip) {
      tooltip = createTooltip(wrapper);
    }
    if (tooltip) {
      clearTimeout(tooltipTimeout);
      tooltip.classList.add('visible');
      activeTooltip = tooltip;
    }
  }
  
  function hideTooltip(tooltip, immediate) {
    if (!tooltip) return;
    if (immediate) {
      tooltip.classList.remove('visible');
      activeTooltip = null;
    } else {
      tooltipTimeout = setTimeout(function() {
        tooltip.classList.remove('visible');
        if (activeTooltip === tooltip) activeTooltip = null;
      }, 150);
    }
  }
  
  // Mouse events
  document.addEventListener('mouseenter', function(e) {
    var wrapper = e.target.closest('.ja-term-wrapper[data-tooltip]');
    if (wrapper) showTooltip(wrapper);
  }, true);
  
  document.addEventListener('mouseleave', function(e) {
    var wrapper = e.target.closest('.ja-term-wrapper[data-tooltip]');
    if (wrapper) {
      var tooltip = wrapper.querySelector('.ja-tooltip');
      hideTooltip(tooltip);
    }
  }, true);
  
  // Keep tooltip visible when hovering the tooltip itself
  document.addEventListener('mouseenter', function(e) {
    if (e.target.classList && e.target.classList.contains('ja-tooltip')) {
      clearTimeout(tooltipTimeout);
    }
  }, true);
  
  document.addEventListener('mouseleave', function(e) {
    if (e.target.classList && e.target.classList.contains('ja-tooltip')) {
      hideTooltip(e.target);
    }
  }, true);
  
  // Focus events for keyboard users
  document.addEventListener('focusin', function(e) {
    var wrapper = e.target.closest('.ja-term-wrapper[data-tooltip]');
    if (wrapper) showTooltip(wrapper);
  });
  
  document.addEventListener('focusout', function(e) {
    var wrapper = e.target.closest('.ja-term-wrapper[data-tooltip]');
    if (wrapper) {
      var tooltip = wrapper.querySelector('.ja-tooltip');
      hideTooltip(tooltip);
    }
  });
  
  // Touch events for mobile
  document.addEventListener('touchstart', function(e) {
    var wrapper = e.target.closest('.ja-term-wrapper[data-tooltip]');
    if (wrapper) {
      e.preventDefault();
      showTooltip(wrapper);
    } else if (activeTooltip) {
      hideTooltip(activeTooltip, true);
    }
  }, { passive: false });
  
  // Escape to dismiss (WCAG 1.4.13)
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && activeTooltip) {
      hideTooltip(activeTooltip, true);
    }
  });
})();
