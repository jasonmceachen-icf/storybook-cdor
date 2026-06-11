import{r as h}from"./twig-render-B8U2jPzV.js";import"./_commonjsHelpers-BosuxZz1.js";const m=`{#
  Card - Icon
  Horizontal navigational card: a fixed icon column on the left and a title on the
  right. The whole card is a single link.

  \`is_external\` is computed server-side in the paragraph adapter (from Drupal's
  Url object). External links append a small external-link glyph inline after the
  title and get the new-tab / screen-reader treatment; internal links show no
  trailing icon. The SDC never inspects the href itself.
#}
{% set attributes = attributes|default(create_attribute()) %}

{#
  TEMPORARY STOPGAP (remove after the Font Awesome -> Phosphor migration, SIPA
  icon-mapping ticket): legacy cards still store FA tokens (e.g. "fa-info-circle")
  that render blank here. A valid Phosphor value leads with the "ph" weight base
  or a "ph-" token, so fall back to "ph ph-triangle-dashed" for anything else.
#}
{% set icon_first = (icon|default('')|trim|split(' '))|first %}
{% set icon = (icon_first == 'ph' or icon_first starts with 'ph-') ? icon : 'ph ph-triangle-dashed' %}

{% set icon_col %}
  <span class="card-icon__icon-col">
    <i class="card-icon__icon {{ icon }}" aria-hidden="true"></i>
  </span>
{% endset %}

{% set body %}
  <span class="card-icon__body">
    <span class="card-icon__text">
      {%- if is_external -%}
        {# Keep the last word and the external-link glyph on the same line so the
           icon can never be orphaned onto a line of its own when the title wraps. #}
        {%- set words = icon_text|trim|split(' ') -%}
        {%- set head = words|slice(0, words|length - 1)|join(' ') -%}
        {%- if head is not empty %}{{ head }} {% endif -%}
        <span class="card-icon__nowrap">{{ words|last }}<i class="card-icon__external ph ph-arrow-square-out" aria-hidden="true"></i></span>
      {%- else -%}
        {{- icon_text -}}
      {%- endif -%}
    </span>
    {% if is_external %}<span class="usa-sr-only"> (opens in new window)</span>{% endif %}
  </span>
{% endset %}

<a {{ attributes.addClass('card-icon').setAttribute('href', link) }}{% if is_external %} target="_blank" rel="noopener noreferrer"{% endif %}>
  {{ icon_col }}
  {{ body }}
</a>
`,g={title:"USWDS Base Subtheme/Card Icon",render:f=>h(m,f),argTypes:{icon_text:{control:"text"},icon_position:{control:"select",options:["top","left","right"]},icon:{control:"text"},link:{control:"text"},color:{control:"text"}}},n={args:{icon_text:"Helpful information",icon_position:"top",icon:"fa-info-circle",link:"https://example.com/helpful-information",color:"bg-primary-lighter"}},e={name:"Icon Left",args:{icon_text:"Download the form",icon_position:"left",icon:"fa-file-pdf",link:"/documents/sample.pdf",color:""}},t={name:"No Link",args:{icon_text:"Static card",icon_position:"top",icon:"fa-info-circle",link:"",color:""}};var o,i,a;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    icon_text: 'Helpful information',
    icon_position: 'top',
    icon: 'fa-info-circle',
    link: 'https://example.com/helpful-information',
    color: 'bg-primary-lighter'
  }
}`,...(a=(i=n.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var r,s,c;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Icon Left',
  args: {
    icon_text: 'Download the form',
    icon_position: 'left',
    icon: 'fa-file-pdf',
    link: '/documents/sample.pdf',
    color: ''
  }
}`,...(c=(s=e.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var l,p,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'No Link',
  args: {
    icon_text: 'Static card',
    icon_position: 'top',
    icon: 'fa-info-circle',
    link: '',
    color: ''
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const x=["Default","IconLeft","NoLink"];export{n as Default,e as IconLeft,t as NoLink,x as __namedExportsOrder,g as default};
