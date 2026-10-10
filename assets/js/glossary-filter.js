/**
 * Glossary country filter + term search.
 * Japan anchors stay #key / #letter-X. Thai hashes switch the Thailand panel.
 */
(function () {
  'use strict';

  var page = document.querySelector('.glossary-page');
  if (!page) return;

  var tabs = page.querySelectorAll('.glossary-filter-btn');
  var panels = page.querySelectorAll('.glossary-panel');
  var search = page.querySelector('#glossary-search');
  var japanIds = collectIds(page.querySelector('#glossary-japan'));
  var thaiIds = collectIds(page.querySelector('#glossary-thailand'));

  function collectIds(panel) {
    var ids = {};
    if (!panel) return ids;
    panel.querySelectorAll('[id]').forEach(function (el) {
      ids[el.id] = true;
    });
    return ids;
  }

  function countryForHash(hash) {
    if (!hash) return null;
    var id = hash.replace(/^#/, '');
    if (!id) return null;
    if (thaiIds[id]) return 'thailand';
    if (japanIds[id]) return 'japan';
    return null;
  }

  function setCountry(country, opts) {
    opts = opts || {};
    tabs.forEach(function (tab) {
      var on = tab.getAttribute('data-country') === country;
      tab.setAttribute('aria-selected', on ? 'true' : 'false');
      tab.classList.toggle('is-active', on);
    });
    panels.forEach(function (panel) {
      var on = panel.getAttribute('data-country') === country;
      panel.classList.toggle('is-active', on);
      if (on) {
        panel.removeAttribute('hidden');
      } else {
        panel.setAttribute('hidden', '');
      }
    });
    applySearch();
    if (opts.scrollId) {
      var target = document.getElementById(opts.scrollId);
      if (target) {
        target.scrollIntoView({ block: 'start' });
      }
    }
  }

  function activePanel() {
    return page.querySelector('.glossary-panel.is-active');
  }

  function applySearch() {
    var panel = activePanel();
    if (!panel) return;
    var q = search ? search.value.trim().toLowerCase() : '';
    var groups = panel.querySelectorAll('.glossary-letter');
    var visible = 0;

    panel.querySelectorAll('.glossary-entry').forEach(function (entry) {
      var hay = (entry.textContent || '').toLowerCase();
      var show = !q || hay.indexOf(q) !== -1;
      entry.hidden = !show;
      if (show) visible += 1;
    });

    groups.forEach(function (heading) {
      var list = heading.nextElementSibling;
      var any = false;
      if (list && list.classList.contains('glossary-list')) {
        list.querySelectorAll('.glossary-entry').forEach(function (entry) {
          if (!entry.hidden) any = true;
        });
        list.hidden = !any;
      }
      heading.hidden = !any;
    });

    panel.querySelectorAll('.glossary-nav a').forEach(function (link) {
      var id = (link.getAttribute('href') || '').replace(/^#/, '');
      var dest = id ? document.getElementById(id) : null;
      link.hidden = !!(q && dest && dest.hidden);
    });

    var countEl = page.querySelector(
      panel.getAttribute('data-country') === 'thailand'
        ? '[data-count-thailand]'
        : '[data-count-japan]'
    );
    if (countEl && q) {
      var label = panel.getAttribute('data-country') === 'thailand' ? 'Thai' : 'Japanese';
      countEl.textContent = visible + ' ' + label + ' terms';
    } else if (countEl) {
      var total =
        panel.getAttribute('data-country') === 'thailand'
          ? panel.querySelectorAll('.glossary-entry').length
          : panel.querySelectorAll('.glossary-entry').length;
      var label = panel.getAttribute('data-country') === 'thailand' ? 'Thai' : 'Japanese';
      countEl.textContent = total + ' ' + label + ' terms';
    }
  }

  function applyHash() {
    var id = (location.hash || '').replace(/^#/, '');
    var country = countryForHash(location.hash);
    if (country) {
      setCountry(country, { scrollId: id });
    }
  }

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      setCountry(tab.getAttribute('data-country'));
    });
  });

  if (search) {
    search.addEventListener('input', applySearch);
  }

  window.addEventListener('hashchange', applyHash);

  page.querySelectorAll('.glossary-nav a').forEach(function (link) {
    link.addEventListener('click', function () {
      var href = link.getAttribute('href') || '';
      var country = countryForHash(href);
      if (country) setCountry(country);
    });
  });

  applyHash();
  if (!page.querySelector('.glossary-panel.is-active')) {
    setCountry('japan');
  } else {
    applySearch();
  }
})();
