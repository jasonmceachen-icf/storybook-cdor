const s=`<ol{{ attributes.addClass('usa-process-list') }}>
  {% block items %}
    {{ items }}
  {% endblock %}
</ol>

`;export{s as p};
