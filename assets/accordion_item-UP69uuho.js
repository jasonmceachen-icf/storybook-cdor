const t=`{% set item_id = item_id|default("accordion-item-" ~ random()) %}
{% set title = title|default('') %}

{% set button_attributes = create_attribute({
  'class': [
    'usa-accordion__button',
  ],
  'type': 'button',
  'aria-controls': 'heading--' ~ item_id,
  'aria-expanded': 'false'
}) %}

{% set content_attributes = create_attribute({
  'class': [
    'usa-accordion__content',
    'usa-prose',
  ],
  'id': 'heading--' ~ item_id
}) %}

{% if opened %}
  {% set button_attributes = button_attributes.setAttribute('aria-expanded', 'true') %}
{% endif %}

<h2 {{ attributes.addClass('usa-accordion__heading') }}>
  <button{{ button_attributes }}>
    <span class="usa-accordion__button-text">{{ title }}</span>
    <i class="ph ph-caret-down usa-accordion__icon" aria-hidden="true"></i>
  </button>
</h2>
<div{{ content_attributes }} hidden>
  <div class="accordion-body">
    {% block content %}
      {{ content }}
    {% endblock %}
  </div>
</div>
`;export{t as a};
