/**
 * @file
 * Mobile search-toggle behavior for the USWDS extended header.
 *
 * On mobile, the header's full search input is collapsed to a magnifying-
 * glass icon button. Tapping the icon expands the search form in a new row
 * between the branding row and the hamburger row; tapping again collapses
 * it. Same .usa-nav__secondary that desktop renders inline — no duplicate
 * DOM.
 *
 * USWDS doesn't ship this pattern, so we wire it here.
 */
(function (Drupal) {
  'use strict';

  Drupal.behaviors.coSipaSearchToggle = {
    attach: function (context) {
      const toggles = context.querySelectorAll
        ? context.querySelectorAll('.site-search-toggle')
        : [];

      toggles.forEach((toggle) => {
        if (toggle.dataset.searchToggleBound === 'true') {
          return;
        }
        toggle.dataset.searchToggleBound = 'true';

        const header = toggle.closest('.usa-header');
        if (!header) {
          return;
        }

        toggle.setAttribute('aria-expanded', 'false');

        toggle.addEventListener('click', () => {
          const isOpen = header.classList.toggle('search-open');
          toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

          if (isOpen) {
            // Move focus into the revealed search input so keyboard users
            // can start typing without an extra tab.
            const input = header.querySelector(
              '.usa-nav__secondary .usa-input:not([type="hidden"])'
            );
            if (input) {
              input.focus();
            }
          } else {
            // On collapse, return focus to the toggle so screen-reader users
            // aren't stranded somewhere else in the DOM.
            toggle.focus();
          }
        });
      });
    },
  };
})(Drupal);
