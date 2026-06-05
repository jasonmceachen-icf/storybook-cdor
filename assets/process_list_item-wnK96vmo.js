const n=`{% set heading = heading|default('') %}
{% set heading_level = heading_level|default(4) %}
{% set heading_link = heading_link|default('') %}

<li{{ attributes.addClass('usa-process-list__item') }}>
  <h{{ heading_level }} class="usa-process-list__heading">
    {% if heading_link %}
      <a href="{{ heading_link }}">{{ heading }}</a>
    {% else %}
      {{ heading }}
    {% endif %}
  </h{{ heading_level }}>

  {% if content|default('') %}
    {% block content %}
      {{ content }}
    {% endblock %}
  {% endif %}
</li>
`;export{n as p};
