import{r as g}from"./twig-render-B8U2jPzV.js";import"./_commonjsHelpers-BosuxZz1.js";const p=`{% set attributes = attributes|default(create_attribute()) %}
{% set media_content %}{% block media %}{% endblock %}{% endset %}
{% set body_content %}{% block body %}{% endblock %}{% endset %}
{% set border_style = border_style|default('card_border') %}

<article {{ attributes.addClass(['usa-card', 'card-basic', 'card-basic--' ~ border_style|clean_class]) }}>
  <div class="usa-card__container">
    {% if title %}
      <div class="usa-card__header">
        <{{ title_tag }} class="usa-card__heading">{{ title }}</{{ title_tag }}>
      </div>
    {% endif %}

    {% if media_content|trim %}
      <div class="usa-card__media">
        <div class="usa-card__img">
          {{ media_content }}
        </div>
      </div>
    {% endif %}

    {% if body_content|trim %}
      <div class="usa-card__body">
        {{ body_content }}
      </div>
    {% endif %}

    {% if link_url and link_text %}
      <div class="usa-card__footer">
        <a href="{{ link_url }}" class="usa-button">{{ link_text }}</a>
      </div>
    {% endif %}
  </div>
</article>
`,h={title:"USWDS Base Subtheme/Card Basic",render:u=>g(p,u),argTypes:{title:{control:"text"},title_tag:{control:"select",options:["h2","h3","h4","p"]},link_url:{control:"text"},link_text:{control:"text"},border_style:{control:"select",options:["card_border","card_no-border","card_shadow"]},media:{control:"text"},body:{control:"text"}}},e={args:{title:"Card with Media",title_tag:"h4",link_url:"#",link_text:"Learn More",border_style:"card_border",media:'<img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image">',body:"<p>Efficiently restore corporate bandwidth for intuitive niches. Rapidiously extend principle-centered networks through intuitive customer service.</p>"}},t={name:"No Media",args:{title:"Text Only Card",title_tag:"h4",link_url:"#",link_text:"Read more",border_style:"card_border",media:"",body:"<p>A card without an image. Body copy only with a footer link.</p>"}},r={args:{title:"Shadow Card",title_tag:"h4",link_url:"#",link_text:"Learn More",border_style:"card_shadow",media:'<img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image">',body:"<p>Card with shadow border style applied.</p>"}};var a,i,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    title: 'Card with Media',
    title_tag: 'h4',
    link_url: '#',
    link_text: 'Learn More',
    border_style: 'card_border',
    media: '<img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image">',
    body: '<p>Efficiently restore corporate bandwidth for intuitive niches. Rapidiously extend principle-centered networks through intuitive customer service.</p>'
  }
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var d,o,s;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'No Media',
  args: {
    title: 'Text Only Card',
    title_tag: 'h4',
    link_url: '#',
    link_text: 'Read more',
    border_style: 'card_border',
    media: '',
    body: '<p>A card without an image. Body copy only with a footer link.</p>'
  }
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var l,c,_;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'Shadow Card',
    title_tag: 'h4',
    link_url: '#',
    link_text: 'Learn More',
    border_style: 'card_shadow',
    media: '<img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image">',
    body: '<p>Card with shadow border style applied.</p>'
  }
}`,...(_=(c=r.parameters)==null?void 0:c.docs)==null?void 0:_.source}}};const y=["Default","NoMedia","Shadow"];export{e as Default,t as NoMedia,r as Shadow,y as __namedExportsOrder,h as default};
