import{r as m}from"./twig-render-CbyoOSHZ.js";import"./_commonjsHelpers-C4iS2aBk.js";const _=`{% set attributes = attributes|default(create_attribute()) %}
{% set background_classes = color ? color|split(' ') : [] %}
{% set normalized_position = icon_position|default('top') %}

{% if normalized_position == 'icon-card-left' %}
  {% set normalized_position = 'left' %}
{% elseif normalized_position == 'icon-card-right' %}
  {% set normalized_position = 'right' %}
{% elseif normalized_position == 'icon-card-top' %}
  {% set normalized_position = 'top' %}
{% endif %}

{% set card_classes = [
  'card-icon',
  'card-icon--position-' ~ normalized_position,
]|merge(background_classes) %}

{% set content %}
  <span class="card-icon__content">
    {% if icon %}
      <span class="card-icon__icon">{{ icon }}</span>
    {% endif %}

    {% if icon_text %}
      <span class="card-icon__text">{{ icon_text }}</span>
    {% endif %}
  </span>
{% endset %}

<div {{ attributes.addClass(card_classes) }}>
  {% if link %}
    <a class="card-icon__link" href="{{ link }}">
      {{ content }}
    </a>
  {% else %}
    {{ content }}
  {% endif %}
</div>
`,x={title:"USWDS Base Subtheme/Card Icon",render:f=>m(_,f),argTypes:{icon_text:{control:"text"},icon_position:{control:"select",options:["top","left","right"]},icon:{control:"text"},link:{control:"text"},color:{control:"text"}}},n={args:{icon_text:"Helpful information",icon_position:"top",icon:"fa-info-circle",link:"https://example.com/helpful-information",color:"bg-primary-lighter"}},o={name:"Icon Left",args:{icon_text:"Download the form",icon_position:"left",icon:"fa-file-pdf",link:"/documents/sample.pdf",color:""}},t={name:"No Link",args:{icon_text:"Static card",icon_position:"top",icon:"fa-info-circle",link:"",color:""}};var e,i,c;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    icon_text: 'Helpful information',
    icon_position: 'top',
    icon: 'fa-info-circle',
    link: 'https://example.com/helpful-information',
    color: 'bg-primary-lighter'
  }
}`,...(c=(i=n.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var r,a,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Icon Left',
  args: {
    icon_text: 'Download the form',
    icon_position: 'left',
    icon: 'fa-file-pdf',
    link: '/documents/sample.pdf',
    color: ''
  }
}`,...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var l,p,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'No Link',
  args: {
    icon_text: 'Static card',
    icon_position: 'top',
    icon: 'fa-info-circle',
    link: '',
    color: ''
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const k=["Default","IconLeft","NoLink"];export{n as Default,o as IconLeft,t as NoLink,k as __namedExportsOrder,x as default};
