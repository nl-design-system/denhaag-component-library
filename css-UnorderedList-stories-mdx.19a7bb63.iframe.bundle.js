(self.webpackChunk_gemeente_denhaag_storybook=self.webpackChunk_gemeente_denhaag_storybook||[]).push([[9349],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/css/UnorderedList.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>UnorderedList_stories,unorderedList:()=>unorderedList,unorderedListParagraph:()=>unorderedListParagraph});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.17_@types+react-dom@18.2.20_@types+react@18.2.63_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs");__webpack_require__("../../components/UnorderedList/dist/mjs/index.js");const package_namespaceObject=JSON.parse('{"UU":"@gemeente-denhaag/unorderedlist","rE":"0.1.2-alpha.269"}'),README_namespaceObject="# Unordered List element\n\nLists are vertical groupings of related content. List items begin with either a number or a bullet.\n\n## When to use\n\nUse lists when you need to group content together.\nUse bulleted lists when you don’t need to convey a specific order for list items.\nUse numbered lists when you need to convey a priority, hierarchy, or sequence between list items.\n\n## Alternatives and related components\n\n- Use cards if more than three lines of text need to be shown in list tiles\n- Use tables for more complex sets of data\n\n## Anatomy\n\nThe list consists of:\n\n- Marker: a dot or a number in front of the list item\n- Label: the name of the list item\n\n## Design properties\n\n**Typography**\n\n- Label: TheSans/md/400\n\n**Colors**\n\n- Marker: Grey/4\n- Label: text color Grey/4\n\n**Structure**\n\n- Marker: dot size 5px, padding-right 8px\n- Label: padding-left 8px\n- Nested list item: padding-left 16px\n- Nested label: padding-left 8px\n\n## Accessibility\n\n[technical accessibility requirements]\n\n## List variants\n\n**Unordered lists**\nTo present content of equal status or value.\n\n**Ordered lists**\nImply sequence and order, and are commonly used when giving a set of instructions.\n\n## Content guidelines\n\n**List items**\nEvery item in a list should:\n\n- Start with a capital letter\n- Not use commas or semicolons at the end of each line\n- Be written in sentence case\n\n**Length**\nGenerally, lists should be used to present simple pieces of information. For more complex sets of data, consider using a data table.\n\n**Order**\nArrange list items in a logical way. For example, if the list is about resource use, the default order might be highest resource use to lowest. Grouping items in categories into smaller, more specific lists might be more meaningful in some contexts.\n\n**Text**\nUse list items that are grammatically parallel. For example, do not mix passive voice with active voice or declarative sentences (statements) with imperative sentences (direct command).\n\n## Best practices\n\n### Do's\n\nLists should:\n\n- Break up chunks of related content to make the information easier for merchants to scan\n- Be phrased consistently (try to start each item with a noun or a verb and be consistent with each item)\n\n### Don'ts\n\nLists should:\n\n- Not be used for lists where the entire item represents an action\n\n## References\n\n- https://www.carbondesignsystem.com/components/list/usage\n- https://polaris.shopify.com/components/lists-and-tables/list#navigation\n";var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h2:"h2",h3:"h3",ul:"ul",li:"li",a:"a",span:"span",p:"p"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"CSS/Data Display/Unordered List",parameters:{componentSubtitle:`${package_namespaceObject.UU} - ${package_namespaceObject.rE}`,status:{type:"WORK IN PROGRESS"}}}),"\n",(0,jsx_runtime.jsx)(dist.VY,{markdown:README_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"stories",children:"Stories"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"unordered-list-with-nesting",children:"Unordered List with nesting"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Unordered list",children:()=>(0,jsx_runtime.jsxs)(_components.ul,{class:"denhaag-unordered-list",children:[(0,jsx_runtime.jsxs)(_components.li,{children:["Molestias"," ",(0,jsx_runtime.jsx)(_components.a,{href:"https://www.denhaag.nl",class:"denhaag-link",children:(0,jsx_runtime.jsx)(_components.span,{class:"denhaag-link__label",children:"assumenda"})})," ","ratione in dolore aut consequatur accusantium corporis."]}),(0,jsx_runtime.jsxs)(_components.li,{children:["Cheese:",(0,jsx_runtime.jsxs)(_components.ul,{class:"denhaag-unordered-list denhaag-unordered-list--lower-alpha",children:[(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.denhaag.nl",class:"denhaag-link",children:(0,jsx_runtime.jsx)(_components.span,{class:"denhaag-link__label",children:"Blue cheese"})})}),(0,jsx_runtime.jsx)(_components.li,{children:"Feta"}),(0,jsx_runtime.jsx)(_components.li,{children:"Brie"})]})]}),(0,jsx_runtime.jsx)(_components.li,{children:"Veritatis similique consequatur tempore quis."}),(0,jsx_runtime.jsx)(_components.li,{children:"Totam sed occaecati dolor excepturi sit dolor et ab."})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"unordered-list--paragraph",children:"Unordered list + Paragraph"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Unordered list + Paragraph",children:()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(_components.ul,{class:"denhaag-unordered-list",children:[(0,jsx_runtime.jsx)(_components.li,{children:"Id magnam est veritatis ut laudantium molestias similique."}),(0,jsx_runtime.jsx)(_components.li,{children:"Totam sed occaecati dolor excepturi sit dolor et ab."}),(0,jsx_runtime.jsx)(_components.li,{children:"Veritatis similique consequatur tempore quis."})]}),(0,jsx_runtime.jsx)(_components.p,{class:"utrecht-paragraph",children:"Atque qui praesentium provident. A aliquid quae earum neque accusamus voluptatem. Assumenda ut iure in et repellendus quam omnis excepturi. Vero quod eos eveniet molestias eum in quis. Delectus qui ullam necessitatibus illum. Beatae consequatur sint eveniet animi neque."})]})})})]})}const unorderedList=()=>(0,jsx_runtime.jsxs)("ul",{class:"denhaag-unordered-list",children:[(0,jsx_runtime.jsxs)("li",{children:["Molestias"," ",(0,jsx_runtime.jsx)("a",{href:"https://www.denhaag.nl",class:"denhaag-link",children:(0,jsx_runtime.jsx)("span",{class:"denhaag-link__label",children:"assumenda"})})," ","ratione in dolore aut consequatur accusantium corporis."]}),(0,jsx_runtime.jsxs)("li",{children:["Cheese:",(0,jsx_runtime.jsxs)("ul",{class:"denhaag-unordered-list denhaag-unordered-list--lower-alpha",children:[(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)("a",{href:"https://www.denhaag.nl",class:"denhaag-link",children:(0,jsx_runtime.jsx)("span",{class:"denhaag-link__label",children:"Blue cheese"})})}),(0,jsx_runtime.jsx)("li",{children:"Feta"}),(0,jsx_runtime.jsx)("li",{children:"Brie"})]})]}),(0,jsx_runtime.jsx)("li",{children:"Veritatis similique consequatur tempore quis."}),(0,jsx_runtime.jsx)("li",{children:"Totam sed occaecati dolor excepturi sit dolor et ab."})]});unorderedList.storyName="Unordered list",unorderedList.parameters={storySource:{source:'() => <ul class="denhaag-unordered-list">\n        <li>\n          Molestias{" "}\n          <a href="https://www.denhaag.nl" class="denhaag-link">\n            <span class="denhaag-link__label">assumenda</span>\n          </a>{" "}\n          ratione in dolore aut consequatur accusantium corporis.\n        </li>\n        <li>\n          Cheese:\n          <ul class="denhaag-unordered-list denhaag-unordered-list--lower-alpha">\n            <li>\n              <a href="https://www.denhaag.nl" class="denhaag-link">\n                <span class="denhaag-link__label">Blue cheese</span>\n              </a>\n            </li>\n            <li>Feta</li>\n            <li>Brie</li>\n          </ul>\n        </li>\n        <li>Veritatis similique consequatur tempore quis.</li>\n        <li>Totam sed occaecati dolor excepturi sit dolor et ab.</li>\n      </ul>'}};const unorderedListParagraph=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("ul",{class:"denhaag-unordered-list",children:[(0,jsx_runtime.jsx)("li",{children:"Id magnam est veritatis ut laudantium molestias similique."}),(0,jsx_runtime.jsx)("li",{children:"Totam sed occaecati dolor excepturi sit dolor et ab."}),(0,jsx_runtime.jsx)("li",{children:"Veritatis similique consequatur tempore quis."})]}),(0,jsx_runtime.jsx)("p",{class:"utrecht-paragraph",children:"Atque qui praesentium provident. A aliquid quae earum neque accusamus voluptatem. Assumenda ut iure in et repellendus quam omnis excepturi. Vero quod eos eveniet molestias eum in quis. Delectus qui ullam necessitatibus illum. Beatae consequatur sint eveniet animi neque."})]});unorderedListParagraph.storyName="Unordered list + Paragraph",unorderedListParagraph.parameters={storySource:{source:'() => <>\n        <ul class="denhaag-unordered-list">\n          <li>Id magnam est veritatis ut laudantium molestias similique.</li>\n          <li>Totam sed occaecati dolor excepturi sit dolor et ab.</li>\n          <li>Veritatis similique consequatur tempore quis.</li>\n        </ul>\n        <p class="utrecht-paragraph">\n          Atque qui praesentium provident. A aliquid quae earum neque accusamus voluptatem. Assumenda ut iure in et\n          repellendus quam omnis excepturi. Vero quod eos eveniet molestias eum in quis. Delectus qui ullam\n          necessitatibus illum. Beatae consequatur sint eveniet animi neque.\n        </p>\n      </>'}};const componentMeta={title:"CSS/Data Display/Unordered List",parameters:{componentSubtitle:`${package_namespaceObject.UU} - ${package_namespaceObject.rE}`,status:{type:"WORK IN PROGRESS"}},tags:["stories-mdx"],includeStories:["unorderedList","unorderedListParagraph"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const UnorderedList_stories=componentMeta,__namedExportsOrder=["unorderedList","unorderedListParagraph"]},"../../components/UnorderedList/dist/mjs/index.js":()=>{var css_248z='@charset "UTF-8";.denhaag-unordered-list,.utrecht-unordered-list,.utrecht-unordered-list--html-content ul{box-sizing:border-box;font-family:var(--utrecht-document-font-family,inherit);font-size:var(--utrecht-unordered-list-font-size,var(--utrecht-document-font-size,inherit));line-height:var(--utrecht-unordered-list-line-height,var(--utrecht-document-line-height,inherit));margin-block-end:calc(var(--utrecht-space-around, 0)*var(--utrecht-unordered-list-margin-block-end, var(--utrecht-paragraph-margin-block-end, 0)));margin-block-start:calc(var(--utrecht-space-around, 0)*var(--utrecht-unordered-list-margin-block-start, var(--utrecht-paragraph-margin-block-start, 0)));padding-inline-start:var(--utrecht-unordered-list-padding-inline-start,2ch);text-align:start}.utrecht-unordered-list--center{inline-size:max-content;margin-inline-end:auto;margin-inline-start:auto;max-inline-size:100%}.utrecht-unordered-list--distanced{--utrecht-space-around:1}.utrecht-unordered-list--html-content ul,.utrecht-unordered-list--nested{margin-block-end:0;margin-inline-start:2ch}.utrecht-unordered-list--html-content ul>li,.utrecht-unordered-list--html-content>li,.utrecht-unordered-list__item{margin-block-end:var(--utrecht-unordered-list-item-margin-block-end);margin-block-start:var(--utrecht-unordered-list-item-margin-block-start);padding-inline-start:var(--utrecht-unordered-list-item-padding-inline-start,1ch)}.utrecht-unordered-list--html-content ul>li::marker,.utrecht-unordered-list--html-content>li::marker,.utrecht-unordered-list__item::marker,.utrecht-unordered-list__marker{color:var(--utrecht-unordered-list-marker-color);content:"●"}.denhaag-unordered-list{color:var(--denhaag-unordered-list-color);margin-block-start:var(--denhaag-unordered-list-margin-block-start,0)}.utrecht-paragraph+.denhaag-unordered-list{--denhaag-unordered-list-margin-block-start:var(--denhaag-unordered-list-paragraph-margin-block-start)}.utrecht-paragraph--lead+.denhaag-unordered-list{--denhaag-unordered-list-margin-block-start:var(--denhaag-unordered-list-lead-margin-block-start)}.denhaag-unordered-list li{font-weight:var(--denhaag-unordered-list-list-item-font-weight)}.denhaag-unordered-list li::marker{font-size:var(--denhaag-unordered-list-marker-font-size)}.denhaag-unordered-list--lower-alpha{list-style-type:var(--denhaag-unordered-list-lower-alpha-list-style-type)}';const head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style");style.type="text/css",style.nonce=window.NONCE,head.appendChild(style),style.styleSheet?style.styleSheet.cssText=css_248z:style.appendChild(document.createTextNode(css_248z))},"../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);