(self.webpackChunk_gemeente_denhaag_storybook=self.webpackChunk_gemeente_denhaag_storybook||[]).push([[4408],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/css/BadgeCounter.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>BadgeCounter_stories,defaultStory:()=>defaultStory});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.7_@types+react-dom@18.2.18_@types+react@18.2.47_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),dist_mjs=(__webpack_require__("../../components/BadgeCounter/dist/mjs/index.js"),__webpack_require__("../../components/DotIndicator/dist/mjs/index.js")),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.89.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.89.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.89.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.89.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.89.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.89.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),BadgeCounter_src=__webpack_require__("../../node_modules/.pnpm/css-loader@6.9.0_webpack@5.89.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.3.3_sass@1.69.7_webpack@5.89.0/node_modules/sass-loader/dist/cjs.js!../../components/BadgeCounter/src/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(BadgeCounter_src.Z,options);BadgeCounter_src.Z&&BadgeCounter_src.Z.locals&&BadgeCounter_src.Z.locals;var clsx=__webpack_require__("../../node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs"),jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const BadgeCounter=props=>{const rootClassNames=(0,clsx.Z)("denhaag-badge-counter",props.className);return(0,jsx_runtime.jsx)("div",{id:props.id,className:rootClassNames,children:(0,jsx_runtime.jsx)(dist_mjs.Z,{overlap:"rectangle",children:(0,jsx_runtime.jsx)("div",{className:"denhaag-badge-counter__counter",children:props.children})})})};BadgeCounter.displayName="BadgeCounter";try{BadgeCounter.displayName="BadgeCounter",BadgeCounter.__docgenInfo={description:"A counter badge notifies a user of a specific amount of updates.",displayName:"BadgeCounter",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/BadgeCounter/src/index.tsx#BadgeCounter"]={docgenInfo:BadgeCounter.__docgenInfo,name:"BadgeCounter",path:"../../components/BadgeCounter/src/index.tsx#BadgeCounter"})}catch(__react_docgen_typescript_loader_error){}try{src.displayName="src",src.__docgenInfo={description:"A counter badge notifies a user of a specific amount of updates.",displayName:"src",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/BadgeCounter/src/index.tsx#src"]={docgenInfo:src.__docgenInfo,name:"src",path:"../../components/BadgeCounter/src/index.tsx#src"})}catch(__react_docgen_typescript_loader_error){}const package_namespaceObject=JSON.parse('{"u2":"@gemeente-denhaag/badge-counter","i8":"0.1.1-alpha.367"}');var README=__webpack_require__("../../components/BadgeCounter/README.md");function _createMdxContent(props){const _components=Object.assign({h2:"h2",h3:"h3",div:"div"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"CSS/Data Display/Badge Counter",component:BadgeCounter,parameters:{componentSubtitle:`${package_namespaceObject.u2} - ${package_namespaceObject.i8}`,docs:{source:{type:"dynamic"}},status:{type:"ALPHA"}}}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:README}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"stories",children:"Stories"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default",children:()=>(0,jsx_runtime.jsx)(_components.div,{class:"denhaag-badge-counter",children:(0,jsx_runtime.jsxs)(_components.div,{class:"denhaag-dot-indicator denhaag-dot-indicator--overlap-rectangle",children:[(0,jsx_runtime.jsx)(_components.div,{class:"denhaag-badge-counter__counter",children:"220"}),(0,jsx_runtime.jsx)(_components.div,{class:"denhaag-dot-indicator__dot"})]})})})}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:BadgeCounter})]})}const defaultStory=()=>(0,jsx_runtime.jsx)("div",{class:"denhaag-badge-counter",children:(0,jsx_runtime.jsxs)("div",{class:"denhaag-dot-indicator denhaag-dot-indicator--overlap-rectangle",children:[(0,jsx_runtime.jsx)("div",{class:"denhaag-badge-counter__counter",children:"220"}),(0,jsx_runtime.jsx)("div",{class:"denhaag-dot-indicator__dot"})]})});defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'() => <div class="denhaag-badge-counter">\n        <div class="denhaag-dot-indicator denhaag-dot-indicator--overlap-rectangle">\n          <div class="denhaag-badge-counter__counter">220</div>\n          <div class="denhaag-dot-indicator__dot"></div>\n        </div>\n      </div>'}};const componentMeta={title:"CSS/Data Display/Badge Counter",parameters:{componentSubtitle:`${package_namespaceObject.u2} - ${package_namespaceObject.i8}`,docs:{source:{type:"dynamic"}},status:{type:"ALPHA"}},component:BadgeCounter,tags:["stories-mdx"],includeStories:["defaultStory"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const BadgeCounter_stories=componentMeta,__namedExportsOrder=["defaultStory"]},"../../components/BadgeCounter/dist/mjs/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>BadgeCounter});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),css_248z$1=".denhaag-dot-indicator{display:inline-flex;flex-shrink:0;position:relative;vertical-align:middle}.denhaag-dot-indicator__dot{background-color:var(--denhaag-dot-indicator-background-color);border:var(--denhaag-dot-indicator-border);border-radius:50%;height:var(--denhaag-dot-indicator-size);position:absolute;transform:scale(1) translate(50%,-50%);width:var(--denhaag-dot-indicator-size)}.denhaag-dot-indicator--overlap-rectangle .denhaag-dot-indicator__dot{right:0;top:0;transform:scale(1) translate(50%,-50%)}.denhaag-dot-indicator--overlap-circle .denhaag-dot-indicator__dot{right:14%;top:14%;transform:scale(1) translate(50%,-50%)}";const head$1=document.head||document.getElementsByTagName("head")[0],style$1=document.createElement("style");function r$1(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r$1(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}style$1.type="text/css",style$1.nonce=window.NONCE,head$1.appendChild(style$1),style$1.styleSheet?style$1.styleSheet.cssText=css_248z$1:style$1.appendChild(document.createTextNode(css_248z$1));var DotIndicator=function(props){var rootClassNames=function clsx$1(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r$1(e))&&(n&&(n+=" "),n+=t);return n}("denhaag-dot-indicator",{"denhaag-dot-indicator--overlap-rectangle":"rectangle"===props.overlap,"denhaag-dot-indicator--overlap-circle":"circle"===props.overlap},props.className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:rootClassNames,id:props.id},props.children,react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"denhaag-dot-indicator__dot"}))},css_248z=".denhaag-badge-counter__counter,.utrecht-badge-counter{background-color:var(--utrecht-badge-counter-background-color,var(--utrecht-badge-background-color,#000));border-radius:var(--utrecht-badge-counter-border-radius,var(--utrecht-badge-border-radius,.5ch));color:var(--utrecht-badge-counter-color,var(--utrecht-badge-color,#fff));display:inline-block;font-family:var(--utrecht-document-font-family,sans-serif);font-size:var(--utrecht-badge-counter-font-size);font-style:var(--utrecht-badge-counter-font-style,normal);font-weight:var(--utrecht-badge-counter-font-weight,var(--utrecht-badge-font-weight,bold));line-height:1;max-block-size:max-content;max-inline-size:max-content;min-block-size:var(--utrecht-badge-counter-min-size,1em);min-inline-size:var(--utrecht-badge-counter-min-size,1em);padding-block-end:var(--utrecht-badge-counter-padding-block,var(--utrecht-badge-padding-block,.5ex));padding-block-start:var(--utrecht-badge-counter-padding-block,var(--utrecht-badge-padding-block,.5ex));padding-inline-end:var(--utrecht-badge-counter-padding-inline,var(--utrecht-badge-padding-inline,.5ch));padding-inline-start:var(--utrecht-badge-counter-padding-inline,var(--utrecht-badge-padding-inline,.5ch));text-align:center;text-decoration:none;white-space:nowrap}@media screen and (-ms-high-contrast:active),screen and (forced-colors:active){.denhaag-badge-counter__counter,.utrecht-badge-counter{border:1px solid}}.denhaag-badge-counter{--denhaag-dot-indicator-size:8px}.denhaag-badge-counter__counter{font-family:var(--utrecht-badge-counter-font-family);font-size:var(--utrecht-badge-counter-font-size)}";const head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style");function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}style.type="text/css",style.nonce=window.NONCE,head.appendChild(style),style.styleSheet?style.styleSheet.cssText=css_248z:style.appendChild(document.createTextNode(css_248z));var BadgeCounter=function(props){var rootClassNames=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}("denhaag-badge-counter",props.className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{id:props.id,className:rootClassNames},react__WEBPACK_IMPORTED_MODULE_0__.createElement(DotIndicator,{overlap:"rectangle"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"denhaag-badge-counter__counter"},props.children)))};BadgeCounter.__docgenInfo={description:"A counter badge notifies a user of a specific amount of updates.\n@param props The properties of a Badge component.\n@constructor Constructs an instance of Badge.",methods:[],displayName:"BadgeCounter"}},"../../components/DotIndicator/dist/mjs/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>DotIndicator});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),css_248z=".denhaag-dot-indicator{display:inline-flex;flex-shrink:0;position:relative;vertical-align:middle}.denhaag-dot-indicator__dot{background-color:var(--denhaag-dot-indicator-background-color);border:var(--denhaag-dot-indicator-border);border-radius:50%;height:var(--denhaag-dot-indicator-size);position:absolute;transform:scale(1) translate(50%,-50%);width:var(--denhaag-dot-indicator-size)}.denhaag-dot-indicator--overlap-rectangle .denhaag-dot-indicator__dot{right:0;top:0;transform:scale(1) translate(50%,-50%)}.denhaag-dot-indicator--overlap-circle .denhaag-dot-indicator__dot{right:14%;top:14%;transform:scale(1) translate(50%,-50%)}";const head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style");function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}style.type="text/css",style.nonce=window.NONCE,head.appendChild(style),style.styleSheet?style.styleSheet.cssText=css_248z:style.appendChild(document.createTextNode(css_248z));var DotIndicator=function(props){var rootClassNames=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}("denhaag-dot-indicator",{"denhaag-dot-indicator--overlap-rectangle":"rectangle"===props.overlap,"denhaag-dot-indicator--overlap-circle":"circle"===props.overlap},props.className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:rootClassNames,id:props.id},props.children,react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"denhaag-dot-indicator__dot"}))};DotIndicator.__docgenInfo={description:"A dot indicator is a visual update message that announces something new for the user to see.\nDot indicators are typically used with counter badges\n@param props The properties of a Dot Indicator component.",methods:[],displayName:"DotIndicator"}},"../../node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"../../node_modules/.pnpm/css-loader@6.9.0_webpack@5.89.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.3.3_sass@1.69.7_webpack@5.89.0/node_modules/sass-loader/dist/cjs.js!../../components/BadgeCounter/src/index.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_9_0_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.9.0_webpack@5.89.0/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_9_0_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_9_0_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_9_0_webpack_5_89_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.9.0_webpack@5.89.0/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_9_0_webpack_5_89_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_9_0_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".utrecht-badge-counter,.denhaag-badge-counter__counter{background-color:var(--utrecht-badge-counter-background-color, var(--utrecht-badge-background-color, hsl(0, 0%, 0%)));border-radius:var(--utrecht-badge-counter-border-radius, var(--utrecht-badge-border-radius, 0.5ch));color:var(--utrecht-badge-counter-color, var(--utrecht-badge-color, hsl(0, 0%, 100%)));display:inline-block;font-family:var(--utrecht-document-font-family, sans-serif);font-size:var(--utrecht-badge-counter-font-size);font-style:var(--utrecht-badge-counter-font-style, normal);font-weight:var(--utrecht-badge-counter-font-weight, var(--utrecht-badge-font-weight, bold));line-height:1;max-block-size:max-content;max-inline-size:max-content;min-block-size:var(--utrecht-badge-counter-min-size, 1em);min-inline-size:var(--utrecht-badge-counter-min-size, 1em);padding-block-end:var(--utrecht-badge-counter-padding-block, var(--utrecht-badge-padding-block, 0.5ex));padding-block-start:var(--utrecht-badge-counter-padding-block, var(--utrecht-badge-padding-block, 0.5ex));padding-inline-end:var(--utrecht-badge-counter-padding-inline, var(--utrecht-badge-padding-inline, 0.5ch));padding-inline-start:var(--utrecht-badge-counter-padding-inline, var(--utrecht-badge-padding-inline, 0.5ch));text-align:center;text-decoration:none;white-space:nowrap}@media screen and (-ms-high-contrast: active),screen and (forced-colors: active){.utrecht-badge-counter,.denhaag-badge-counter__counter{border-color:currentColor;border-style:solid;border-width:1px}}.denhaag-badge-counter{--denhaag-dot-indicator-size: 8px}.denhaag-badge-counter__counter{font-family:var(--utrecht-badge-counter-font-family);font-size:var(--utrecht-badge-counter-font-size)}","",{version:3,sources:["webpack://./../../node_modules/.pnpm/@utrecht+components@1.0.1-alpha.2/node_modules/@utrecht/components/badge-counter/css/index.scss","webpack://./../../node_modules/.pnpm/@utrecht+components@1.0.1-alpha.2/node_modules/@utrecht/components/badge-counter/css/_mixin.scss","webpack://./../../node_modules/.pnpm/@utrecht+components@1.0.1-alpha.2/node_modules/@utrecht/components/badge/css/_mixin.scss","webpack://./../../components/BadgeCounter/src/index.scss"],names:[],mappings:"AASA,uDCDE,qHAAA,CACA,mGAAA,CACA,sFAAA,CACA,oBAAA,CACA,2DAAA,CACA,gDAAA,CACA,0DAAA,CACA,4FAAA,CACA,aAAA,CACA,0BAAA,CACA,2BAAA,CACA,yDAAA,CACA,0DAAA,CACA,uGAAA,CACA,yGAAA,CACA,0GAAA,CACA,4GAAA,CACA,iBAAA,CACA,oBAAA,CACA,kBAAA,CCQA,iFF1BF,uDE2BI,yBAAA,CACA,kBAAA,CAGA,gBAAA,CAAA,CCtCJ,uBACE,iCAAA,CAGF,gCAGE,oDAAA,CACA,gDAAA",sourcesContent:['/**\n * @license EUPL-1.2\n * Copyright (c) 2020-2022 Gemeente Utrecht\n * Copyright (c) 2020-2022 Frameless B.V.\n */\n\n@import "./mixin";\n@import "../../badge/css/mixin";\n\n.utrecht-badge-counter {\n  @include utrecht-badge-counter;\n  @include utrecht-badge--media-query-forced-colors;\n}\n',"/**\n * @license EUPL-1.2\n * Copyright (c) 2020-2022 Gemeente Utrecht\n * Copyright (c) 2020-2022 Frameless B.V.\n */\n\n@mixin utrecht-badge-counter {\n  /* Limit size to `max-content`, so the badge will not be stretched out of proportion inside a flexbox */\n  background-color: var(--utrecht-badge-counter-background-color, var(--utrecht-badge-background-color, hsl(0 0% 0%)));\n  border-radius: var(--utrecht-badge-counter-border-radius, var(--utrecht-badge-border-radius, 0.5ch));\n  color: var(--utrecht-badge-counter-color, var(--utrecht-badge-color, hsl(0 0% 100%)));\n  display: inline-block;\n  font-family: var(--utrecht-document-font-family, sans-serif);\n  font-size: var(--utrecht-badge-counter-font-size);\n  font-style: var(--utrecht-badge-counter-font-style, normal); /* no inheritance */\n  font-weight: var(--utrecht-badge-counter-font-weight, var(--utrecht-badge-font-weight, bold)); /* no inheritance */\n  line-height: 1;\n  max-block-size: max-content;\n  max-inline-size: max-content;\n  min-block-size: var(--utrecht-badge-counter-min-size, 1em);\n  min-inline-size: var(--utrecht-badge-counter-min-size, 1em);\n  padding-block-end: var(--utrecht-badge-counter-padding-block, var(--utrecht-badge-padding-block, 0.5ex));\n  padding-block-start: var(--utrecht-badge-counter-padding-block, var(--utrecht-badge-padding-block, 0.5ex));\n  padding-inline-end: var(--utrecht-badge-counter-padding-inline, var(--utrecht-badge-padding-inline, 0.5ch));\n  padding-inline-start: var(--utrecht-badge-counter-padding-inline, var(--utrecht-badge-padding-inline, 0.5ch));\n  text-align: center;\n  text-decoration: none; /* no inheritance */\n  white-space: nowrap;\n}\n","/**\n * @license EUPL-1.2\n * Copyright (c) 2020-2022 Gemeente Utrecht\n * Copyright (c) 2020-2022 Frameless B.V.\n */\n\n@mixin utrecht-badge {\n  /*\n   * `line-height` has a default value, so `line-height` can be used on a parent element to add vertical space between badges\n   *\n   * Configure maximum size to prevent stretching badges inside a flexbox.\n   * \n   * Configure minumum size to have space to type in when displaying badges in a WYSIWYG editor.\n   */\n  background-color: var(--utrecht-badge-background-color, hsl(0 0% 0%));\n  border-radius: var(--utrecht-badge-border-radius, 0.5ch);\n  color: var(--utrecht-badge-color, hsl(0 0% 100%));\n  display: inline-block;\n  font-family: var(--utrecht-document-font-family, sans-serif);\n  font-size: var(--utrecht-badge-font-size, inherit);\n  font-style: var(--utrecht-badge-font-style, normal); /* no inheritance */\n  font-weight: var(--utrecht-badge-font-weight, bold); /* no inheritance */\n  line-height: var(--utrecht-badge-line-height, 1em);\n  max-block-size: max-content;\n  max-inline-size: max-content;\n  min-block-size: 1em;\n  min-inline-size: 1em;\n  padding-block-end: var(--utrecht-badge-padding-block, 0.5ex);\n  padding-block-start: var(--utrecht-badge-padding-block, 0.5ex);\n  padding-inline-end: var(--utrecht-badge-padding-inline, 0.5ch);\n  padding-inline-start: var(--utrecht-badge-padding-inline, 0.5ch);\n  text-decoration: none; /* no inheritance */\n}\n\n@mixin utrecht-badge--media-query-forced-colors {\n  @media screen and (-ms-high-contrast: active), screen and (forced-colors: active) {\n    border-color: currentColor;\n    border-style: solid;\n\n    /* Warning: there layout difference because of the added 1px border */\n    border-width: 1px;\n  }\n}\n",'@import "~@utrecht/components/badge-counter/css";\n\n.denhaag-badge-counter {\n  --denhaag-dot-indicator-size: 8px;\n}\n\n.denhaag-badge-counter__counter {\n  @extend .utrecht-badge-counter;\n\n  font-family: var(--utrecht-badge-counter-font-family);\n  font-size: var(--utrecht-badge-counter-font-size);\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"../../components/BadgeCounter/README.md":module=>{"use strict";module.exports="# Badge (counter)\n\n![npm (scoped)](https://img.shields.io/npm/v/@gemeente-denhaag/badge-counter?logo=npm&style=flat-square)\n![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/nl-design-system/denhaag/Build%20and%20deploy%20Storybook%20to%20Azure%20Web%20App/main?logo=github&style=flat-square)\n\nCounter badges are used to indicate that there is a notification and display the number of notifications. It is an\nupdate message that announces something new for the user to see. Badges are typically used to indicate a new message.\n\n## When to use\n\nTODO: Not yet written.\n\n## Alternatives and related components\n\nUse `Tag` when you need to inform users about the status of an object, about an action or when you have data that helps\ncategorize and organize things.\n\n## Anatomy\n\nThe badge consists of:\n\n1. Dot indicator: shows that there is a notification\n2. Count: displays the number of notifications\n3. Container: the rectangle with the number in it\n\n## (Interactive) states\n\nNone.\n\n## Design properties\n\n### Colors\n\n- Dot: color Red/3, border color white\n- Count: text color Grey/4\n- Container: fill color Grey/1\n\n### Structure\n\n- Dot: overlaps container 25%, border 2px, height and width 8px\n- Count: padding-inline 6px, padding-block 4px\n- Container: height 24px\n\n## Accessibility\n\nTODO: Not yet written.\n\n## Content guidelines\n\nNone.\n\n## Best practices\n\n### Do's\n\nBadges should:\n\n- Be hidden when count is 0\n- Have a maximal count of 999. Once you reach higher than 999, the label becomes \"999+\".\n- Be used for counts of important information, close to the relevant item.\n- Notify or draw attention to changed values or states\n- Be used when there is an underlying message in the menu\n- Be used sparingly\n\n### Don'ts\n\nDot indicators should:\n\n- Not be used if you need a text label. Use `Tag` instead.\n\n## References\n\nhttps://cultureamp.design/components/badge\n"}}]);