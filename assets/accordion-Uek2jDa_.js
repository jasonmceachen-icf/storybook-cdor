const t=`{% if width_class|default('') %}
  {% set attributes = attributes.addClass(width_class) %}
{% endif %}

{% if bordered|default(false) %}
  {% set attributes = attributes.addClass('usa-accordion--bordered') %}
{% endif %}

{% if multiselect|default(false) %}
  {% set attributes = attributes.addClass('usa-accordion--multiselectable').setAttribute('data-allow-multiple', 'true') %}
{% endif %}

{% if not show_indicators|default(true) %}
  {% set attributes = attributes.addClass('usa-accordion--no-indicators').setAttribute('data-show-indicators', 'false') %}
{% endif %}

{% if title_color|default('') %}
  {% set attributes = attributes.addClass(title_color) %}
{% endif %}

{% if expand_all|default(false) %}
  {% set attributes = attributes.setAttribute('data-expand-all-enabled', 'true') %}
{% endif %}

<div{{ attributes.addClass('usa-accordion') }}>
  {% if expand_all|default(false) %}
    <button
      class="usa-button usa-button--outline usa-button--sm margin-bottom-2"
      type="button"
      data-accordion-expand-all
      data-expand-label="{{ 'Expand all'|t }}"
      data-collapse-label="{{ 'Collapse all'|t }}"
    >
      {{ 'Expand all'|t }}
    </button>
  {% endif %}

  {% block content %}
    {{ content }}
  {% endblock %}
</div>
`;export{t as a};
