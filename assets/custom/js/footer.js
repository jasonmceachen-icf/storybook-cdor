/**
 * @file
 * Footer column accordion toggle (mobile).
 *
 * Below the tablet breakpoint, JS enhances footer columns into an accordion.
 * Desktop and no-JS users get ordinary open footer navigation; mobile users
 * with JS get collapsed columns by default.
 */
(function (Drupal) {
  'use strict';

  const mobileMediaQuery = window.matchMedia('(max-width: 639px)');
  const focusableSelector = 'a, button, input, select, textarea, [tabindex]';

  function getFooters(context) {
    const footers = [];
    if (context.matches && context.matches('.sipa-footer')) {
      footers.push(context);
    }
    if (context.querySelectorAll) {
      footers.push(...context.querySelectorAll('.sipa-footer'));
    }
    return footers;
  }

  function setFocusableState(wrapper, enabled) {
    if (!wrapper) {
      return;
    }

    wrapper.querySelectorAll(focusableSelector).forEach((element) => {
      if (enabled) {
        if (element.dataset.footerOriginalTabindex === undefined) {
          element.dataset.footerOriginalTabindex =
            element.getAttribute('tabindex') || '';
        }
        element.setAttribute('tabindex', '-1');
        return;
      }

      const originalTabindex = element.dataset.footerOriginalTabindex;
      if (originalTabindex === undefined) {
        return;
      }
      if (originalTabindex === '') {
        element.removeAttribute('tabindex');
      }
      else {
        element.setAttribute('tabindex', originalTabindex);
      }
      delete element.dataset.footerOriginalTabindex;
    });
  }

  function setColumnState(column, expanded, accordionEnabled) {
    const toggle = column.querySelector('.sipa-footer__column-toggle');
    const wrapper = column.querySelector('.sipa-footer__column-list-wrapper');
    const list = column.querySelector('.sipa-footer__column-list');

    if (!toggle || !wrapper || !list) {
      return;
    }

    if (!accordionEnabled) {
      column.classList.remove('is-expanded');
      toggle.hidden = true;
      toggle.removeAttribute('aria-controls');
      toggle.removeAttribute('aria-expanded');
      wrapper.removeAttribute('aria-hidden');
      wrapper.inert = false;
      setFocusableState(wrapper, false);
      return;
    }

    column.classList.toggle('is-expanded', expanded);
    toggle.hidden = false;
    toggle.setAttribute('aria-controls', list.id);
    toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    wrapper.setAttribute('aria-hidden', expanded ? 'false' : 'true');
    wrapper.inert = !expanded;
    setFocusableState(wrapper, !expanded);
  }

  function setAccordionMode(footer, enabled) {
    const wasEnabled = footer.classList.contains(
      'sipa-footer--accordion-enabled',
    );

    footer.classList.toggle('sipa-footer--accordion-enabled', enabled);

    footer.querySelectorAll('.sipa-footer__column').forEach((column) => {
      const expanded = enabled && wasEnabled
        ? column.classList.contains('is-expanded')
        : false;
      setColumnState(column, expanded, enabled);
    });
  }

  Drupal.behaviors.coSipaFooterAccordion = {
    attach: function (context) {
      getFooters(context).forEach((footer) => {
        if (footer.dataset.footerAccordionBound === 'true') {
          return;
        }
        footer.dataset.footerAccordionBound = 'true';

        footer.querySelectorAll('.sipa-footer__column-toggle').forEach((toggle) => {
          toggle.addEventListener('click', () => {
            if (!mobileMediaQuery.matches) {
              return;
            }

            const column = toggle.closest('.sipa-footer__column');
            if (!column) {
              return;
            }

            setColumnState(
              column,
              !column.classList.contains('is-expanded'),
              true,
            );
          });
        });

        const updateAccordionMode = () => {
          setAccordionMode(footer, mobileMediaQuery.matches);
        };

        updateAccordionMode();

        if (mobileMediaQuery.addEventListener) {
          mobileMediaQuery.addEventListener('change', updateAccordionMode);
        }
        else {
          mobileMediaQuery.addListener(updateAccordionMode);
        }
      });
    },
  };
})(Drupal);
