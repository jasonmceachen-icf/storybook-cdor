import{a as p}from"./alert-BE5deZwW.js";import{a as u}from"./accordion-Uek2jDa_.js";import{a as m}from"./accordion_item-DRODIIic.js";import{p as g}from"./process_list-eMMzM6dY.js";import{p as h}from"./process_list_item-wnK96vmo.js";import{r as e}from"./twig-render-CbyoOSHZ.js";import"./_commonjsHelpers-C4iS2aBk.js";const I={title:"USWDS Base Subtheme/Page",parameters:{layout:"fullscreen"}},n={render:()=>{const s=e(p,{type:"info",heading:"Stay informed",message:"<p>This page demonstrates the SIPA component library assembled into a representative page layout.</p>"}),r=[{heading:"Start your application",heading_level:4,heading_link:"",content:"<p>Review eligibility requirements and gather required documents before beginning.</p>"},{heading:"Complete the online form",heading_level:4,heading_link:"",content:"<p>Fill in your personal details and attach supporting documents through the secure portal.</p>"},{heading:"Submit and await confirmation",heading_level:4,heading_link:"",content:"<p>After submission, you will receive a confirmation email within 2 business days.</p>"}].map(t=>e(h,t)).join(""),l=e(g,{items:r}),c=[{item_id:"page-faq-1",title:"What documents do I need?",heading_level:3,opened:!0,show_indicator:!0,content:"<p>You will need a valid government-issued ID, proof of residency, and any relevant supporting documentation.</p>"},{item_id:"page-faq-2",title:"How long does processing take?",heading_level:3,opened:!1,show_indicator:!0,content:"<p>Processing typically takes 5-10 business days. You will be notified by email when your application is reviewed.</p>"},{item_id:"page-faq-3",title:"Who can I contact for help?",heading_level:3,opened:!1,show_indicator:!0,content:"<p>Contact our support team at support@example.gov or call 1-800-555-0100 during business hours.</p>"}].map(t=>e(m,t)).join(""),d=e(u,{bordered:!1,multiselect:!0,expand_all:!1,show_indicators:!0,title_color:"",width_class:"",content:c});return`
      <header class="usa-header usa-header--basic">
        <div class="usa-nav-container">
          <div class="usa-navbar">
            <div class="usa-logo">
              <em class="usa-logo__text">CO SIPA</em>
            </div>
          </div>
        </div>
      </header>

      <main class="usa-layout-docs usa-section" id="main-content">
        <div class="grid-container">
          ${s}
          <h1 class="margin-top-4">How to Apply</h1>
          <h2 class="margin-top-4">Application Steps</h2>
          ${l}
          <h2 class="margin-top-4">Frequently Asked Questions</h2>
          ${d}
        </div>
      </main>

      <footer class="usa-footer usa-footer--slim" role="contentinfo">
        <div class="grid-container usa-footer__return-to-top">
          <a href="#">Return to top</a>
        </div>
      </footer>
    `}};var o,a,i;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const alert = renderTwig(alertSource, {
      type: 'info',
      heading: 'Stay informed',
      message: '<p>This page demonstrates the SIPA component library assembled into a representative page layout.</p>'
    });
    const processItems = [{
      heading: 'Start your application',
      heading_level: 4,
      heading_link: '',
      content: '<p>Review eligibility requirements and gather required documents before beginning.</p>'
    }, {
      heading: 'Complete the online form',
      heading_level: 4,
      heading_link: '',
      content: '<p>Fill in your personal details and attach supporting documents through the secure portal.</p>'
    }, {
      heading: 'Submit and await confirmation',
      heading_level: 4,
      heading_link: '',
      content: '<p>After submission, you will receive a confirmation email within 2 business days.</p>'
    }].map(step => renderTwig(processListItemSource, step)).join('');
    const processList = renderTwig(processListSource, {
      items: processItems
    });
    const accordionItems = [{
      item_id: 'page-faq-1',
      title: 'What documents do I need?',
      heading_level: 3,
      opened: true,
      show_indicator: true,
      content: '<p>You will need a valid government-issued ID, proof of residency, and any relevant supporting documentation.</p>'
    }, {
      item_id: 'page-faq-2',
      title: 'How long does processing take?',
      heading_level: 3,
      opened: false,
      show_indicator: true,
      content: '<p>Processing typically takes 5-10 business days. You will be notified by email when your application is reviewed.</p>'
    }, {
      item_id: 'page-faq-3',
      title: 'Who can I contact for help?',
      heading_level: 3,
      opened: false,
      show_indicator: true,
      content: '<p>Contact our support team at support@example.gov or call 1-800-555-0100 during business hours.</p>'
    }].map(item => renderTwig(accordionItemSource, item)).join('');
    const accordion = renderTwig(accordionSource, {
      bordered: false,
      multiselect: true,
      expand_all: false,
      show_indicators: true,
      title_color: '',
      width_class: '',
      content: accordionItems
    });
    return \`
      <header class="usa-header usa-header--basic">
        <div class="usa-nav-container">
          <div class="usa-navbar">
            <div class="usa-logo">
              <em class="usa-logo__text">CO SIPA</em>
            </div>
          </div>
        </div>
      </header>

      <main class="usa-layout-docs usa-section" id="main-content">
        <div class="grid-container">
          \${alert}
          <h1 class="margin-top-4">How to Apply</h1>
          <h2 class="margin-top-4">Application Steps</h2>
          \${processList}
          <h2 class="margin-top-4">Frequently Asked Questions</h2>
          \${accordion}
        </div>
      </main>

      <footer class="usa-footer usa-footer--slim" role="contentinfo">
        <div class="grid-container usa-footer__return-to-top">
          <a href="#">Return to top</a>
        </div>
      </footer>
    \`;
  }
}`,...(i=(a=n.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const k=["Default"];export{n as Default,k as __namedExportsOrder,I as default};
