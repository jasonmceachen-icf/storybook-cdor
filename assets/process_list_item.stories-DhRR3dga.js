import{p as c}from"./process_list_item-wnK96vmo.js";import{r as m}from"./twig-render-CbyoOSHZ.js";import"./_commonjsHelpers-C4iS2aBk.js";const g={title:"USWDS Base Subtheme/Process List Item",render:l=>m(c,l),argTypes:{heading:{control:"text"},heading_level:{control:"select",options:[2,3,4,5,6]},heading_link:{control:"text"},content:{control:"text"}}},e={args:{heading:"Start a process",heading_level:4,heading_link:"",content:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim.</p>"}},n={name:"Heading with Link",args:{heading:"Complete the online form",heading_level:4,heading_link:"https://example.com",content:"<p>Follow the link to access the online form and complete your application.</p>"}};var o,t,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    heading: 'Start a process',
    heading_level: 4,
    heading_link: '',
    content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim.</p>'
  }
}`,...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var a,r,s;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Heading with Link',
  args: {
    heading: 'Complete the online form',
    heading_level: 4,
    heading_link: 'https://example.com',
    content: '<p>Follow the link to access the online form and complete your application.</p>'
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const u=["Default","WithLink"];export{e as Default,n as WithLink,u as __namedExportsOrder,g as default};
