(self.webpackChunk_gemeente_denhaag_storybook=self.webpackChunk_gemeente_denhaag_storybook||[]).push([[4278],{"./src/templates/04-Case-overview-page.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ZaakOverzicht:()=>ZaakOverzicht,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _gemeente_denhaag_typography__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../components/Typography/dist/mjs/index.js"),_gemeente_denhaag_page__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../components/Page/dist/mjs/index.js"),_gemeente_denhaag_header__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../components/Header/dist/mjs/index.js"),_gemeente_denhaag_footer__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../components/Footer/dist/mjs/index.js"),_gemeente_denhaag_responsive_content__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../components/ResponsiveContent/dist/mjs/index.js"),_gemeente_denhaag_tab__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../components/Tab/dist/mjs/index.js"),_gemeente_denhaag_card__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../components/Card/dist/mjs/index.js"),_util__WEBPACK_IMPORTED_MODULE_9__=(__webpack_require__("../../components/CardGroup/dist/mjs/index.js"),__webpack_require__("./src/templates/util.tsx")),_components_Sidenav__WEBPACK_IMPORTED_MODULE_11__=(__webpack_require__("./src/templates/template-story.scss"),__webpack_require__("./src/templates/components/Sidenav.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const zakenHeaderProps={..._util__WEBPACK_IMPORTED_MODULE_9__.un,breadcrumbs:{navigationPath:[{label:"Home",href:"https://denhaag.nl/"},{label:"MijnDenHaag",href:"https://denhaag.nl/"},{label:"Mijn lopende zaken"}]}},tabsProps={tabData:[{label:"Lopende Zaken",panelContent:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("section",{className:"denhaag-card-group",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_gemeente_denhaag_card__WEBPACK_IMPORTED_MODULE_7__.D6,{date:new Date("2020-01-21T00:00:00.000Z"),title:"Aanvraag subsidie geluidsisolatie"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_gemeente_denhaag_card__WEBPACK_IMPORTED_MODULE_7__.D6,{date:new Date("2020-01-21T00:00:00.000Z"),title:"Aanvraag Ooievaarspas"})]})},{label:"Afgeronde zaken",panelContent:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("section",{className:"denhaag-card-group",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_gemeente_denhaag_card__WEBPACK_IMPORTED_MODULE_7__.D6,{active:!1,date:new Date("2019-01-21T00:00:00.000Z"),title:"Aanvraag Parkeervergunning"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_gemeente_denhaag_card__WEBPACK_IMPORTED_MODULE_7__.D6,{active:!1,date:new Date("2019-01-21T00:00:00.000Z"),title:"Aanvraag Omgevingsvergunning"})]})}]},ZaakOverzicht={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_gemeente_denhaag_page__WEBPACK_IMPORTED_MODULE_2__.YW,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_gemeente_denhaag_page__WEBPACK_IMPORTED_MODULE_2__.zY,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_gemeente_denhaag_header__WEBPACK_IMPORTED_MODULE_3__.K1,{...zakenHeaderProps})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_gemeente_denhaag_responsive_content__WEBPACK_IMPORTED_MODULE_5__.u,{className:"denhaag-page-content denhaag-responsive-content--sidebar",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Sidenav__WEBPACK_IMPORTED_MODULE_11__.A,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("main",{className:"denhaag-page-content__main",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_gemeente_denhaag_typography__WEBPACK_IMPORTED_MODULE_1__.fV,{children:"Mijn lopende zaken"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_gemeente_denhaag_tab__WEBPACK_IMPORTED_MODULE_6__.tU,{...tabsProps})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_gemeente_denhaag_page__WEBPACK_IMPORTED_MODULE_2__.FM,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_gemeente_denhaag_footer__WEBPACK_IMPORTED_MODULE_4__.wi,{newsletterData:_util__WEBPACK_IMPORTED_MODULE_9__.SJ,contactData:_util__WEBPACK_IMPORTED_MODULE_9__.FJ,legalData:_util__WEBPACK_IMPORTED_MODULE_9__.bi,copyrightLabel:_util__WEBPACK_IMPORTED_MODULE_9__.Cv,socialData:_util__WEBPACK_IMPORTED_MODULE_9__.$j})})]})},__WEBPACK_DEFAULT_EXPORT__={title:"Templates/Zaak Overzicht",parameters:{layout:"fullscreen",chromatic:{viewports:[1768,1280,768,360]}}};ZaakOverzicht.parameters={...ZaakOverzicht.parameters,docs:{...ZaakOverzicht.parameters?.docs,source:{originalSource:'{\n  render: args => <Page {...args}>\n      <PageHeader>\n        <HeaderLogic {...zakenHeaderProps} />\n      </PageHeader>\n      <ResponsiveContent className="denhaag-page-content denhaag-responsive-content--sidebar">\n        <Sidenav />\n        <main className="denhaag-page-content__main">\n          <Heading2>Mijn lopende zaken</Heading2>\n          <Tabs {...tabsProps}></Tabs>\n        </main>\n      </ResponsiveContent>\n      <PageFooter>\n        <Footer newsletterData={newsletterData} contactData={contactData} legalData={footerLegalData} copyrightLabel={copyright} socialData={footerSocialData} />\n      </PageFooter>\n    </Page>\n}',...ZaakOverzicht.parameters?.docs?.source}}};const __namedExportsOrder=["ZaakOverzicht"]},"../../components/CardGroup/dist/mjs/index.js":()=>{var css_248z='.denhaag-card-group{--denhaag-card-group-distanced:0;display:grid;gap:var(--_denhaag-card-group-responsive-gap,var(--denhaag-card-group-gap));margin-block-end:calc(var(--denhaag-card-group-distanced)*var(--denhaag-card-group-margin-block));margin-block-start:calc(var(--denhaag-card-group-distanced)*var(--denhaag-card-group-margin-block));margin-inline-end:calc(var(--denhaag-card-group-distanced)*var(--denhaag-card-group-margin-inline));margin-inline-start:calc(var(--denhaag-card-group-distanced)*var(--denhaag-card-group-margin-inline))}@media (width >= 768px){.denhaag-card-group{grid-template-columns:repeat(2,1fr)}}@media (width >= 1024px){.denhaag-card-group{grid-template-columns:repeat(3,1fr)}}.denhaag-card-group--rows .denhaag-card-authentication{display:grid;grid-template-rows:auto auto 1fr;min-block-size:var(--denhaag-card-authentication-portrait-min-block-size);text-align:center}.denhaag-card-group--rows .denhaag-card-authentication .denhaag-card-authentication__header{grid-template-areas:"card-logo" "card-heading";grid-template-rows:calc(var(--denhaag-card-authentication-portrait-logo-size) + var(--denhaag-card-authentication-portrait-logo-margin-block-end)) auto;margin-block-end:var(--denhaag-card-authentication-portrait-header-margin-block-end)}.denhaag-card-group--rows .denhaag-card-authentication .denhaag-card-authentication__logo{height:var(--denhaag-card-authentication-portrait-logo-size);margin-block-end:var(--denhaag-card-authentication-portrait-logo-margin-block-end);margin-inline-end:auto;margin-inline-start:auto;width:var(--denhaag-card-authentication-portrait-logo-size)}.denhaag-card-group--rows .denhaag-card-authentication .denhaag-card-authentication__title{margin-block-end:var(--denhaag-card-authentication-title-margin-block-end)}.denhaag-card-group--rows .denhaag-card-authentication .denhaag-card-authentication__cta{display:flex;justify-content:center}.denhaag-card-group--rows .denhaag-card-authentication .denhaag-card-authentication__footer{display:flex;flex-direction:column;justify-content:end;margin-block-start:var(--denhaag-card-authentication-portrait-footer-margin-block-start)}.denhaag-card-group--distanced{--denhaag-card-group-distanced:1}.denhaag-card-group--responsive{--_denhaag-card-group-responsive-gap:var(--denhaag-card-group-xs-gap,var(--denhaag-card-group-gap));--denhaag-card-authentication-portrait-max-inline-size:calc(33.33333% - var(--_denhaag-card-group-responsive-gap))}@media (width >= 768px){.denhaag-card-group--responsive{--_denhaag-card-group-responsive-gap:var(--denhaag-card-group-s-gap,var(--denhaag-card-group-gap))}.denhaag-card-group--responsive .denhaag-card-authentication{display:grid;grid-template-rows:auto auto 1fr;min-block-size:var(--denhaag-card-authentication-portrait-min-block-size);text-align:center}.denhaag-card-group--responsive .denhaag-card-authentication .denhaag-card-authentication__header{grid-template-areas:"card-logo" "card-heading";grid-template-rows:calc(var(--denhaag-card-authentication-portrait-logo-size) + var(--denhaag-card-authentication-portrait-logo-margin-block-end)) auto;margin-block-end:var(--denhaag-card-authentication-portrait-header-margin-block-end)}.denhaag-card-group--responsive .denhaag-card-authentication .denhaag-card-authentication__logo{height:var(--denhaag-card-authentication-portrait-logo-size);margin-block-end:var(--denhaag-card-authentication-portrait-logo-margin-block-end);margin-inline-end:auto;margin-inline-start:auto;width:var(--denhaag-card-authentication-portrait-logo-size)}.denhaag-card-group--responsive .denhaag-card-authentication .denhaag-card-authentication__title{margin-block-end:var(--denhaag-card-authentication-title-margin-block-end)}.denhaag-card-group--responsive .denhaag-card-authentication .denhaag-card-authentication__cta{display:flex;justify-content:center}.denhaag-card-group--responsive .denhaag-card-authentication .denhaag-card-authentication__footer{display:flex;flex-direction:column;justify-content:end;margin-block-start:var(--denhaag-card-authentication-portrait-footer-margin-block-start)}}@media (width >= 1024px){.denhaag-card-group--responsive{--_denhaag-card-group-responsive-gap:var(--denhaag-card-group-m-gap,var(--denhaag-card-group-gap))}}@media (width >= 1280px){.denhaag-card-group--responsive{--_denhaag-card-group-responsive-gap:var(--denhaag-card-group-l-gap,var(--denhaag-card-group-gap))}}@media (width >= 1768px){.denhaag-card-group--responsive{--_denhaag-card-group-responsive-gap:var(--denhaag-card-group-xl-gap,var(--denhaag-card-group-gap))}}';const head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style");style.type="text/css",style.nonce=window.NONCE,head.appendChild(style),style.styleSheet?style.styleSheet.cssText=css_248z:style.appendChild(document.createTextNode(css_248z))},"../../components/Page/dist/mjs/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{FM:()=>PageFooter,YW:()=>Page,zY:()=>PageHeader});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),css_248z=".denhaag-page{display:flex;flex-direction:column;min-height:100vh}.denhaag-page-header{background-color:var(--denhaag-page-header-background-color);z-index:var(--denhaag-page-header-index)}.denhaag-page-content{margin-block-end:80px;margin-block-start:var(--denhaag-page-content-main-margin-block-start)}@media (width >= 768px){.denhaag-page-content{margin-block-start:var(--denhaag-page-content-main-sm-margin-block-start)}}@media (width >= 1024px){.denhaag-page-content{margin-block-start:var(--denhaag-page-content-main-md-margin-block-start)}}.denhaag-page-content__main{flex-grow:1}@media (width <= 1023px){.denhaag-page-content__main{max-width:100%}}.denhaag-page-footer{margin-block-start:auto}";const head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style");function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}style.type="text/css",style.nonce=window.NONCE,head.appendChild(style),style.styleSheet?style.styleSheet.cssText=css_248z:style.appendChild(document.createTextNode(css_248z));var Page=function(props){var classNames=clsx("denhaag-page",props.className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classNames},props.children)},PageHeader=function(props){var classNames=clsx("denhaag-page-header",props.className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classNames},props.children)},PageFooter=function(props){var classNames=clsx("denhaag-page-footer",props.className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classNames},props.children)};Page.__docgenInfo={description:"",methods:[],displayName:"Page"},PageFooter.__docgenInfo={description:"",methods:[],displayName:"PageFooter"},PageHeader.__docgenInfo={description:"",methods:[],displayName:"PageHeader"}},"../../components/Sidenav/dist/mjs/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Jp:()=>Sidenav,U3:()=>SidenavItem,VN:()=>SidenavLink,xf:()=>SidenavList});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),css_248z=".denhaag-sidenav{display:var(--denhaag-sidenav-display);flex-direction:var(--denhaag-sidenav-flex-direction);min-width:var(--denhaag-sidenav-min-width);row-gap:var(--denhaag-sidenav-row-gap)}@media (width <= 1023px){.denhaag-sidenav{display:var(--denhaag-sidenav-mobile-display)}}.denhaag-sidenav__list{list-style:none;margin-block-end:0;margin-block-start:0;padding-block-end:0;padding-block-start:0;padding-inline-start:0}.denhaag-sidenav__item{font-family:var(--denhaag-sidenav-item-font-family,sans-serif);font-size:var(--denhaag-sidenav-item-font-size);font-weight:var(--denhaag-sidenav-item-font-weight,normal);line-height:1.5}.denhaag-sidenav__item,.denhaag-sidenav__link{align-items:center;display:flex;flex-direction:row}.denhaag-sidenav__link{color:var(--denhaag-sidenav-link-color);column-gap:16px;flex-grow:1;padding-block-end:var(--denhaag-sidenav-link-padding-block-end);padding-block-start:var(--denhaag-sidenav-link-padding-block-start);text-decoration:none}.denhaag-sidenav__link--hover,.denhaag-sidenav__link:hover{color:var(--denhaag-sidenav-link-hover-color);cursor:pointer}.denhaag-sidenav__link--focus,.denhaag-sidenav__link:focus-visible{outline:var(--denhaag-focus-border)}.denhaag-sidenav__link--current{color:var(--denhaag-sidenav-link-active-color);font-weight:var(--denhaag-sidenav-link-active-font-weight)}";const head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style");style.type="text/css",style.nonce=window.NONCE,head.appendChild(style),style.styleSheet?style.styleSheet.cssText=css_248z:style.appendChild(document.createTextNode(css_248z));var __assign=function(){return __assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}"function"==typeof SuppressedError&&SuppressedError;var Sidenav=function(props){var className=clsx("denhaag-sidenav",props.className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav",__assign({},props,{className}),props.children)},SidenavItem=function(props){var className=clsx("denhaag-sidenav__item",props.className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",__assign({},props,{className}),props.children)},SidenavList=function(props){var className=clsx("denhaag-sidenav__list",props.className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",__assign({},props,{className}),props.children)},SidenavLink=function(_a){var current=_a.current,props=function __rest(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t}(_a,["current"]),className=clsx("denhaag-sidenav__link",current&&"denhaag-sidenav__link--current",props.className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",__assign({},props,{"aria-current":current||props["aria-current"]?"page":void 0,className}),props.children)};Sidenav.__docgenInfo={description:"",methods:[],displayName:"Sidenav"},SidenavItem.__docgenInfo={description:"",methods:[],displayName:"SidenavItem"},SidenavLink.__docgenInfo={description:"",methods:[],displayName:"SidenavLink"},SidenavList.__docgenInfo={description:"",methods:[],displayName:"SidenavList"}},"./src/templates/components/Sidenav.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _gemeente_denhaag_icons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../components/Icons/dist/mjs/index.js"),_gemeente_denhaag_sidenav__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../components/Sidenav/dist/mjs/index.js"),_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@utrecht+component-library-react@3.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@utrecht/component-library-react/dist/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const Sidenav=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_gemeente_denhaag_sidenav__WEBPACK_IMPORTED_MODULE_1__.Jp,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_gemeente_denhaag_sidenav__WEBPACK_IMPORTED_MODULE_1__.xf,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_gemeente_denhaag_sidenav__WEBPACK_IMPORTED_MODULE_1__.U3,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_gemeente_denhaag_sidenav__WEBPACK_IMPORTED_MODULE_1__.VN,{current:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_gemeente_denhaag_icons__WEBPACK_IMPORTED_MODULE_0__.GridIcon,{}),"Overzicht"]})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_gemeente_denhaag_sidenav__WEBPACK_IMPORTED_MODULE_1__.xf,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_gemeente_denhaag_sidenav__WEBPACK_IMPORTED_MODULE_1__.U3,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_gemeente_denhaag_sidenav__WEBPACK_IMPORTED_MODULE_1__.VN,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_gemeente_denhaag_icons__WEBPACK_IMPORTED_MODULE_0__.CheckCircleIcon,{}),"Mijn taken"]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_gemeente_denhaag_sidenav__WEBPACK_IMPORTED_MODULE_1__.U3,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_gemeente_denhaag_sidenav__WEBPACK_IMPORTED_MODULE_1__.VN,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_gemeente_denhaag_icons__WEBPACK_IMPORTED_MODULE_0__.InboxIcon,{}),"Mijn berichten",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_utrecht_component_library_react__WEBPACK_IMPORTED_MODULE_4__.uW,{children:"2"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_gemeente_denhaag_sidenav__WEBPACK_IMPORTED_MODULE_1__.U3,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_gemeente_denhaag_sidenav__WEBPACK_IMPORTED_MODULE_1__.VN,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_gemeente_denhaag_icons__WEBPACK_IMPORTED_MODULE_0__.ArchiveIcon,{}),"Mijn lopende zaken"]})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_gemeente_denhaag_sidenav__WEBPACK_IMPORTED_MODULE_1__.xf,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_gemeente_denhaag_sidenav__WEBPACK_IMPORTED_MODULE_1__.U3,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_gemeente_denhaag_sidenav__WEBPACK_IMPORTED_MODULE_1__.VN,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_gemeente_denhaag_icons__WEBPACK_IMPORTED_MODULE_0__.UserIcon,{}),"Mijn gegevens"]})})})]});Sidenav.displayName="Sidenav";const __WEBPACK_DEFAULT_EXPORT__=Sidenav},"./src/templates/util.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$j:()=>footerSocialData,Cv:()=>copyright,FJ:()=>contactData,SJ:()=>newsletterData,T9:()=>linkData,bi:()=>footerLegalData,p8:()=>dateFormatLabels,un:()=>headerProps});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _gemeente_denhaag_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../components/Icons/dist/mjs/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const headerProps={breadcrumbs:{navigationPath:[{label:"Home",href:"https://denhaag.nl/"}]},userprofileMenu:{label:"Welkom Anne Klap",authorisedLoginLabel:"Ingelogd namens Jason Verploeg",navigationGroups:[{label:"MijnDenHaag",navigation:[{label:"Overzicht",href:""},{label:"Lopende zaken",href:""},{label:"Thema's",href:""},{label:"Mijn account",href:""}]}]},languageSwitcherMenu:{currentLanguageLabel:"NL",languageSwitcherProps:{variant:"button",label:"Kies uw voorkeurstaal",languages:[{id:"nl",label:"Nederlands",linkProps:{href:"#nl",lang:"nl",hrefLang:"nl-NL"},active:!0},{id:"en",label:"Engels",linkProps:{href:"#en",lang:"en",hrefLang:"en-GB"},active:!1},{id:"fr",label:"Français",linkProps:{href:"#fr",lang:"fr",hrefLang:"fr-FR"},active:!1}]}},logoutButton:{label:"Uitloggen",onLogoutClick:()=>{}},mobileMenu:{openLabel:"Menu",closeLabel:"Sluiten",navigation:[{label:"Home",href:"https://www.denhaag.nl"},{label:"Onderwerpen",navigation:[{label:"Omgeving",navigation:[{label:"Parkeren",href:"https://www.denhaag.nl/parkeren"},{label:"Afval",href:"https://www.denhaag.nl/afval"}]},{label:"Wonen",navigation:[{label:"Verhuizen en migratie",href:"https://www.denhaag.nl/verhuizen"},{label:"Belastingen",href:"https://www.denhaag.nl/belastingen"}]}]},{label:"MijnDenHaag",navigation:[{label:"Overzicht",href:"https://klantportaal.denhaag.nl/overzicht"},{label:"Lopende zaken",href:"https://klantportaal.denhaag.nl/zaken"},{label:"Thema's",href:"https://klantportaal.denhaag.nl/themas"},{label:"Mijn account",href:"https://klantportaal.denhaag.nl/account"}]}]}},linkData={name:"Example",link:"test/example.png",size:2e3,lastUpdated:"Thu Aug 31 2023 11:22:11 GMT+0200"},footerLegalData=[{label:"Sitemap",href:"https://denhaag.nl/"},{label:"Toegankelijkheid",href:"https://denhaag.nl/"},{label:"Privacy",href:"https://denhaag.nl/"},{label:"Proclaimer",href:"https://denhaag.nl/"},{label:"Disclaimer",href:"https://denhaag.nl/"},{label:"Voorwaarden",href:"https://denhaag.nl/"}],footerSocialData={title:"Volg ons op",links:[{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_gemeente_denhaag_icons__WEBPACK_IMPORTED_MODULE_1__.FacebookIcon,{}),label:"Facebook",href:"https://www.facebook.com/gemeenteDH/"},{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_gemeente_denhaag_icons__WEBPACK_IMPORTED_MODULE_1__.TwitterIcon,{}),label:"Twitter",href:"https://twitter.com/gemeentedenhaag"},{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_gemeente_denhaag_icons__WEBPACK_IMPORTED_MODULE_1__.LinkedInIcon,{}),label:"LinkedIn",href:"https://www.linkedin.com/company/gemeente-den-haag/"},{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_gemeente_denhaag_icons__WEBPACK_IMPORTED_MODULE_1__.InstagramIcon,{}),label:"Instagram",href:"https://www.instagram.com/gemeentedenhaag/"},{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_gemeente_denhaag_icons__WEBPACK_IMPORTED_MODULE_1__.YouTubeIcon,{}),label:"YouTube",href:"https://www.youtube.com/channel/UC5_HpKvZl7Oxr_UimTfC2Jg"}]},dateFormatLabels={today:"vandaag",yesterday:"gisteren",before:"vóór",approachingDeadline:daysDifference=>1===daysDifference?`nog ${daysDifference} dag`:`nog ${daysDifference} dagen`},newsletterData={title:"Meld u aan voor de nieuwsbrief",text:"Blijf gemakkelijk op de hoogte van ontwikkelingen in uw stadsdeel en de belangrijkste zaken van Den Haag.",buttonLabel:"Aanmelden nieuwsbrief",href:"#"},contactData={title:"Contact",links:[{label:"Bel ons op 14070",href:"#"},{label:"Contactformulier",href:"#"}],buttonLabel:"Contactpagina",href:"https://www.denhaag.nl/nl/bestuur-en-organisatie/contact-met-de-gemeente.htm"},copyright="© 2022 Gemeente Den Haag"},"../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@14.1.1_sass@1.71.1_webpack@5.90.3/node_modules/sass-loader/dist/cjs.js!./src/templates/template-story.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".denhaag-authentication{margin-block-start:32px;margin-block-end:32px}.denhaag-authentication__alert{margin-block-start:24px}.denhaag-header--without-breadcrumbs{margin-block-end:56px}.denhaag-page-content .denhaag-page-content__heading{--utrecht-heading-3-margin-block-start: 64px;--utrecht-heading-3-margin-block-end: 24px}.denhaag-page-content .denhaag-page-content__task{margin-block-start:32px}.denhaag-page-content .denhaag-tabs{margin-block-end:40px}","",{version:3,sources:["webpack://./src/templates/template-story.scss"],names:[],mappings:"AAAA,wBACE,uBAAA,CACA,qBAAA,CAGF,+BACE,uBAAA,CAGF,qCACE,qBAAA,CAIA,qDACE,4CAAA,CACA,0CAAA,CAGF,kDACE,uBAAA,CAGF,oCACE,qBAAA",sourcesContent:[".denhaag-authentication {\n  margin-block-start: 32px;\n  margin-block-end: 32px;\n}\n\n.denhaag-authentication__alert {\n  margin-block-start: 24px;\n}\n\n.denhaag-header--without-breadcrumbs {\n  margin-block-end: 56px;\n}\n\n.denhaag-page-content {\n  & &__heading {\n    --utrecht-heading-3-margin-block-start: 64px;\n    --utrecht-heading-3-margin-block-end: 24px;\n  }\n\n  & &__task {\n    margin-block-start: 32px;\n  }\n\n  & .denhaag-tabs {\n    margin-block-end: 40px;\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/templates/template-story.scss":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var _node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3/node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3/node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3/node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3/node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_14_1_1_sass_1_71_1_webpack_5_90_3_node_modules_sass_loader_dist_cjs_js_template_story_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@14.1.1_sass@1.71.1_webpack@5.90.3/node_modules/sass-loader/dist/cjs.js!./src/templates/template-story.scss"),options={};options.styleTagTransform=_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_pnpm_style_loader_3_3_4_webpack_5_90_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_14_1_1_sass_1_71_1_webpack_5_90_3_node_modules_sass_loader_dist_cjs_js_template_story_scss__WEBPACK_IMPORTED_MODULE_6__.A,options),_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_14_1_1_sass_1_71_1_webpack_5_90_3_node_modules_sass_loader_dist_cjs_js_template_story_scss__WEBPACK_IMPORTED_MODULE_6__.A&&_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_14_1_1_sass_1_71_1_webpack_5_90_3_node_modules_sass_loader_dist_cjs_js_template_story_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals&&_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_14_1_1_sass_1_71_1_webpack_5_90_3_node_modules_sass_loader_dist_cjs_js_template_story_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals}}]);