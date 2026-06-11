import{a as _}from"./accordion-C42nByah.js";import{a as b}from"./accordion_item-UP69uuho.js";import{r as o}from"./twig-render-B8U2jPzV.js";import"./_commonjsHelpers-BosuxZz1.js";const w=[{item_id:"acc-1",title:"First Amendment",heading_level:2,opened:!0,show_indicator:!0,content:"<p>Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.</p>"},{item_id:"acc-2",title:"Second Amendment",heading_level:2,opened:!1,show_indicator:!0,content:"<p>A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.</p>"},{item_id:"acc-3",title:"Third Amendment",heading_level:2,opened:!1,show_indicator:!0,content:"<p>No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.</p>"},{item_id:"acc-4",title:"Fourth Amendment",heading_level:2,opened:!1,show_indicator:!0,content:"<p>The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated.</p>"},{item_id:"acc-5",title:"Fifth Amendment",heading_level:2,opened:!1,show_indicator:!0,content:"<p>No person shall be held to answer for a capital, or otherwise infamous crime, unless on a presentment or indictment of a Grand Jury.</p>"}],v={title:"USWDS Base Subtheme/Accordion",render:({items:h,...u})=>{const f=h.map(g=>o(b,g)).join("");return o(_,{...u,content:f})},argTypes:{bordered:{control:"boolean"},multiselect:{control:"boolean"},expand_all:{control:"boolean"},show_indicators:{control:"boolean"},title_color:{control:"text"},width_class:{control:"text"},items:{control:!1}}},e={args:{bordered:!1,multiselect:!0,expand_all:!1,show_indicators:!0,title_color:"",width_class:"",items:w}},t={args:{...e.args,bordered:!0}},r={name:"Expand All",args:{...e.args,expand_all:!0,multiselect:!0}};var a,n,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    bordered: false,
    multiselect: true,
    expand_all: false,
    show_indicators: true,
    title_color: '',
    width_class: '',
    items: AMENDMENTS
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var i,l,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    bordered: true
  }
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,p,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Expand All',
  args: {
    ...Default.args,
    expand_all: true,
    multiselect: true
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const y=["Default","Bordered","WithExpandAll"];export{t as Bordered,e as Default,r as WithExpandAll,y as __namedExportsOrder,v as default};
