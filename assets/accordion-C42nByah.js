const t=`{% if bordered|default(false) %}
  {% set attributes = attributes.addClass('usa-accordion--bordered') %}
{% endif %}

{% if multiselect|default(false) %}
  {% set attributes = attributes.addClass('usa-accordion--multiselectable').setAttribute('data-allow-multiple', 'true') %}
{% endif %}

{% if expand_all|default(false) %}
  {% set attributes = attributes.setAttribute('data-expand-all-enabled', 'true') %}
{% endif %}

<div{{ attributes.addClass(['usa-accordion', 'co-accordion']) }}>
  {% if expand_all|default(false) %}
    <button
      class="usa-button margin-bottom-1"
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
