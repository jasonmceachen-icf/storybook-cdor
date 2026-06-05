const e=`<div{{ attributes.addClass('usa-alert', 'usa-alert--' ~ type) }}>
  <div class="usa-alert__body">
    {% if heading %}
      <h4 class="usa-alert__heading">{{ heading }}</h4>
    {% endif %}
    <div class="usa-alert__text"> {% block message %}{% endblock %}
      </div>
    </div>
  </div>

@Kathleen Griswold Thinking about storybook hosting options. Please find out who will be able to access the storybook sites:
The whole world (cdor.colorado.gov/storybook) *Jason's preference
Authenticated website users (cdor.colorado.gov/admin/storybook)
A small group using a password (could be any url)
…or something else, and we can get started.
`;export{e as a};
