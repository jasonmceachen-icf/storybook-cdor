const a=`<div{{ attributes.addClass('usa-alert', 'usa-alert--' ~ type) }}>
  <div class="usa-alert__body">
    {% if not hide_icon %}
    <div class="alert-body__icon">
      <i class="ph ph-{{ icon|default('info') }}" aria-hidden="true"></i>
    </div>
    {% endif %}
    <div class="alert-body__content">
        {% if heading %}
          <h4 class="usa-alert__heading">{{ heading }}</h4>
        {% endif %}
      <div class="usa-alert__text"> {% block message %}{% endblock %}</div>
    </div>
  </div>
</div>
`;export{a};
