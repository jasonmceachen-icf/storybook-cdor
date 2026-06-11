import{r as i}from"./twig-render-B8U2jPzV.js";import"./_commonjsHelpers-BosuxZz1.js";const s=`<h1>This is an H1</h1>
<h2>This is an H2</h2>
<h3>This is an H3</h3>
<h4>This is an H4</h4>
<h5>This is an H5</h5>
<h6>This is an H6</h6>

<p>This is a paragraph with lorem ipsum.
  <a href="#">Lorem ipsum dolor sit amet</a>, consectetur adipiscing elit. Nam faucibus quam ut tincidunt condimentum. Aenean vulputate velit vel erat consectetur, sed malesuada metus vulputate. Aliquam ex odio, pretium non quam ut, varius suscipit velit. Maecenas odio neque, maximus a ultricies eu, mattis sed ex. Maecenas purus felis, porttitor in tempor at, condimentum ac mi. Donec lacinia lorem quis nisi consectetur mollis. Fusce pellentesque nulla a fringilla sodales. Sed a lorem orci. Vivamus fringilla nisl at ligula dignissim faucibus.</p>
<p>This is a paragraph with lorem ipsum. Aliquam hendrerit fringilla
  <a href="#">elit</a>, rutrum tincidunt nibh suscipit vel. Donec at gravida libero. Aliquam quis nisi lobortis odio ullamcorper interdum non a tellus. Maecenas et faucibus nisi, a rutrum dui. Nulla facilisi. Donec sit amet rhoncus mauris. Etiam pharetra, sem sed efficitur malesuada, augue neque luctus ex, volutpat rutrum magna purus sit amet nibh. Integer facilisis hendrerit est a suscipit. Nullam at turpis in massa viverra tempus vitae sit amet justo.</p>
<p>This is a paragraph with lorem ipsum. Nullam vitae sem lectus. Curabitur auctor nisi eu elit hendrerit viverra. Proin vel bibendum eros. Maecenas id erat at tortor tincidunt ornare. Nulla risus nunc, vulputate ac aliquam ut, pulvinar eget enim. Suspendisse luctus turpis quis magna posuere, commodo molestie velit fringilla. Sed sed massa tempor, iaculis purus nec, sodales metus. Nulla auctor, enim sit amet imperdiet tincidunt, eros nunc dictum purus, vitae tincidunt turpis lectus et lorem. Fusce varius ante at nisi aliquet lobortis. Phasellus vel tincidunt mi. Aliquam elit augue, aliquet sed augue in, elementum condimentum ligula. Proin pellentesque dolor vel neque sollicitudin luctus..</p>

<blockquote>
  <p>This is a blockquote.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam faucibus quam ut tincidunt condimentum.</p>
</blockquote>

<h3>Links</h3>
<hr>

<h4>Inline Links - Hover, Active, Focus, and Visited</h3>
<p>This is a pragraph with lorem ipsum. <a href="#a">This is a link</a>, consectetur adipiscing elit. <a href="#b" class="hover">This is a hover link</a>. Aenean vulputate velit vel erat consectetur, <a href="#c" class="active">this is an active link</a> metus vulputate. Aliquam ex odio, <a href="#d" class="focus">This is a focus link</a>, varius suscipit velit. Maecenas odio neque, maximus a ultricies eu, mattis sed ex. Maecenas purus felis, <a href="#e" class="disabled">This is a disabled link</a> in tempor at, condimentum ac mi. Donec lacinia <a href="#f" class="visited">this is a visited link</a> nisi consectetur mollis. Fusce pellentesque nulla a fringilla sodales. Sed a lorem orci. Vivamus fringilla nisl at ligula dignissim faucibus.</p>

<h4>Standalone Links - Hover, Active, Focus, and Visited</h4>
<ul>
  <li><a href="#1">This is a link</a></li>
  <li><a href="#2" class="hover">This is a hover link</a></li>
  <li><a href="#3" class="active">This is an active link</a></li>
  <li><a href="#4" class="focus">This is a focus link</a></li>
  <li><a href="#5" class="disabled">This is a disabled link</a></li>
  <li><a href="#6" class="visited">This is a visited link</a></li>
  <li><a href="#6" class="usa-link">This is a .usa-link link</a></li>
</ul>

<h3>Buttons</h3>
<hr>
<p>Each variant shows its interaction states: hover, active, and focus (Tab to it).</p>
<div
  style="display:flex;flex-direction:column;gap:1.5rem;padding:2rem;">

  <!-- PRIMARY -->
  <section>
    <h4>
      Primary
    </h4>
    <div style="align-items:center;display:flex;flex-wrap:wrap;gap:1rem;">
      <button class="usa-button" type="button">Default</button>
      <a class="usa-button" href="#">Link button</a>
      <button class="usa-button" type="button">
        <i class="ph ph-globe"></i>
        Icon prefix
      </button>
      <button class="usa-button" type="button">
        Icon suffix
        <i class="ph ph-arrow-right"></i>
      </button>
      <button class="usa-button" type="button" disabled>Disabled</button>
    </div>
  </section>
  <!-- SECONDARY (outline) -->
  <section>
    <h4>
      Secondary
    </h4>
    <div style="align-items:center;display:flex;flex-wrap:wrap;gap:1rem;">
      <button class="usa-button usa-button--secondary" type="button">Default</button>
      <a class="usa-button usa-button--secondary" href="#">Link button</a>
      <button class="usa-button usa-button--secondary" type="button">
        <i class="ph ph-globe"></i>
        Icon prefix
      </button>
      <button class="usa-button usa-button--secondary" type="button">
        Icon suffix
        <i class="ph ph-arrow-right"></i>
      </button>
      <!-- Anchors can't use :disabled, so the disabled look uses a class -->
      <a class="usa-button usa-button--secondary usa-button--disabled" href="#">Disabled</a>
    </div>
  </section>
  <!-- WARNING -->
  <section>
    <h4>
      Warning
    </h4>
    <div style="align-items:center;display:flex;flex-wrap:wrap;gap:1rem;">
      <button class="usa-button usa-button--warning" type="button">Default</button>
      <a class="usa-button usa-button--warning" href="#">Link button</a>
      <button class="usa-button usa-button--warning" type="button">
        <i class="ph ph-trash"></i>
        Delete
      </button>
      <button class="usa-button usa-button--warning" type="button">
        Continue
        <i class="ph ph-arrow-right"></i>
      </button>
      <button class="usa-button usa-button--warning" type="button" disabled>Disabled</button>
    </div>
  </section>
</div>

<h3>Table</h3>
<hr>
<table class="usa-table">
  <caption>This is a table caption</caption>
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
      <th>Column 3</th>
      <th>Column 4</th>
      <th>Column 5</th>
      <th>Column 6</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Value 1</td>
      <td>Value 2</td>
      <td>Value 3</td>
      <td>Value 4</td>
      <td>Value 5</td>
      <td>Value 6</td>
    </tr>
    <tr>
      <td>Value 1</td>
      <td>Value 2</td>
      <td>Value 3</td>
      <td>Value 4</td>
      <td>Value 5</td>
      <td>Value 6</td>
    </tr>
    <tr>
      <td>Value 1</td>
      <td>Value 2</td>
      <td>Value 3</td>
      <td>Value 4</td>
      <td>Value 5</td>
      <td>Value 6</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Value 1</th>
      <th>Value 2</th>
      <th>Value 3</th>
      <th>Value 4</th>
      <th>Value 5</th>
      <th>Value 6</th>
    </tr>
  </tfoot>
</table>
`,o={title:"USWDS Base Subtheme/Page",parameters:{layout:"fullscreen"}},t={name:"Text and Buttons",render:()=>i(s)};var n,a,e;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Text and Buttons',
  render: () => renderTwig(templateSource)
}`,...(e=(a=t.parameters)==null?void 0:a.docs)==null?void 0:e.source}}};const r=["TextAndButtons"];export{t as TextAndButtons,r as __namedExportsOrder,o as default};
