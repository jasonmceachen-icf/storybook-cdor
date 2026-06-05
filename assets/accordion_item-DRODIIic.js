const t=`{% set item_id = item_id|default("accordion-item-" ~ random()) %}
{% set title = title|default('') %}
{% set heading_level = heading_level|default(2) %}
{% set title_color = title_color|default('') %}

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

{% if title_color %}
  {% set button_attributes = button_attributes.addClass(title_color) %}
{% endif %}

{% if not show_indicator|default(true) %}
  {% set button_attributes = button_attributes.addClass('usa-accordion__button--no-indicator') %}
{% endif %}

{% if opened %}
  {% set button_attributes = button_attributes.setAttribute('aria-expanded', 'true') %}
{% endif %}

<h{{ heading_level }} {{ attributes.addClass('usa-accordion__heading') }}>
  <button{{ button_attributes }}>
    {{ title }}
  </button>
</h{{ heading_level }}>
<div{{ content_attributes }} hidden>
  <div class="accordion-body">
    {% block content %}
      {{ content }}
    {% endblock %}
  </div>
</div>
`;export{t as a};
