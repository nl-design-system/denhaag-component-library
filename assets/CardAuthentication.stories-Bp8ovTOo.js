import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{c as a}from"./clsx-B-dksMZM.js";import"./index-Dl9l1o3M.js";import"./index-D2MAbzvX.js";import"./index-B3p8u_35.js";import"./_commonjsHelpers-BosuxZz1.js";const B=`# Authentication block

This authentication block adequately sends the user an authentication flow necessary to perform a task or action on the website or when logging in. He stands out and offers help if needed. By making the choice between authentication service already on the detail page where the task is listed, you can reduce the number of clicks and place the choice more in the context of the task.

## When to use

Use the authentication block when users need to authenticate to perform a certain task or to log in. Think of logging in with DigiD to eventually fill in a form.

Also use it in combination with other login methods, when you don't necessarily have to log in. It sometimes happens that as a guest you have certain permissions to, for example, fill in a form. In this case you show the block with the option to continue.

## Alternatives and related components

Alternative components:

- When there is no authentication required: Generic action button
- When there is a reference to another page, without authentication: CTA Link
- When there is a link to another page that should be highlighted: Image content link

Related components:

- Buttons

## Anatomy

The authentication block consists of:

1. Title: To introduce the action
2. Paragraph (optional): To give more context to the action
3. Logo: Shows the different resources and creates trust with the user
4. Button: To link to the right page

- In only several cases there will be 2 buttons, but in preference there will be only 1 call to action.

5. Caption with link: offers help by linking to an external website
6. Container

## (Interactive) states

The authentication block itself does not have interactive states.
The buttons in this components have. Described in: Buttons

## Design properties

Typography

- Title: TheMix/xl/700
- Paragraph: TheSans/md/400
- Caption: TheSans/md/400

Colors

- Title: text color Grey/5
- Paragraph: text color Grey/4
- Caption with link: text color Grey/4
- Container: border line color Grey/2

Interactive states

- None.

Structure

Task variant

Desktop

- Paragraph: padding-bottom 16px
- Icon: size 56px, padding-left 16px
- Caption with link: padding-top 32px
- Container: padding 32px

Mobile

- Paragraph: padding-bottom 16px
- Icon: size 56px, padding-bottom 24px
- Caption with link: padding-top 24px
- Container: padding 24px

Login variant

Desktop

- Paragraph: padding-bottom 24px
- Icon: size 80px, padding-bottom 24px
- Caption with link: padding-top 32px
- Container: padding 32px

Mobile

- Paragraph: padding-bottom 16px
- Icon: size 56px, padding-left 16px
- Caption with link: padding-top 24px
- Container: padding 24px
`,G={headingLevel:3,authProvider:""},M=({level:l,className:n,children:r})=>{switch(l){case 1:return e.jsx("h1",{className:a("utrecht-heading-1",n),children:r});case 2:return e.jsx("h2",{className:a("utrecht-heading-2",n),children:r});case 3:return e.jsx("h3",{className:a("utrecht-heading-3",n),children:r});case 4:return e.jsx("h4",{className:a("utrecht-heading-4",n),children:r});case 5:return e.jsx("h5",{className:a("utrecht-heading-5",n),children:r});case 6:return e.jsx("h6",{className:a("utrecht-heading-6",n),children:r});default:return e.jsx("p",{className:a("utrecht-paragraph",n),children:r})}},p={authProvider:"",portrait:!1},W=({headingLevel:l,authProvider:n=p.authProvider,portrait:r=p.portrait})=>{const d=n?n==="eIDAS"?"Log in met uw Europese digitale identiteit":`Inloggen met ${n}`:"Als gast doorgaan",z=n?n==="DigiD"?"Laat zien wie u bent":n==="eHerkenning"?"Voor bedrijf of instelling":"":"u hoeft niet in te loggen",V={DigiD:"digid.svg",eHerkenning:"eherkenning.png",eIDAS:"eidas.svg"};return e.jsxs("section",{className:a("denhaag-card-authentication",r&&"denhaag-card-authentication--portrait"),children:[e.jsxs("header",{className:"denhaag-card-authentication__header",children:[e.jsxs("hgroup",{className:"denhaag-card-authentication__heading",children:[M({level:l,className:"denhaag-card-authentication__title",children:d}),e.jsx("p",{className:a("utrecht-paragraph","denhaag-card-authentication__subtitle"),children:z})]}),n&&e.jsx("p",{className:a("denhaag-image","denhaag-card-authentication__logo"),children:e.jsx("img",{width:"80",height:"80",src:V[n],className:"denhaag-image__image",alt:`${n} logo`,loading:"lazy"})})]}),e.jsx("div",{className:"denhaag-card-authentication__cta",children:e.jsx("div",{className:"denhaag-button-group",children:e.jsxs("a",{className:"denhaag-card-authentication__cta-link denhaag-button denhaag-button--large denhaag-button--primary-action denhaag-button--end-icon",href:"#example-link",target:"_self",title:d,children:["Inloggen",e.jsx("span",{className:"denhaag-button__icon",children:e.jsx("svg",{"aria-hidden":"true",className:"denhaag-icon",focusable:"false",height:"1em",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"})})})]})})}),n&&e.jsx("footer",{className:"denhaag-card-authentication__footer",children:e.jsxs("p",{className:"utrecht-paragraph",children:[n!=="eIDAS"&&`Geen ${n}? `,e.jsxs("a",{href:"#example-link",className:"denhaag-link denhaag-link--with-icon denhaag-link--with-icon-end denhaag-link--external",children:[e.jsx("span",{className:"denhaag-link__icon",children:e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"denhaag-icon",focusable:"false","aria-hidden":"true",shapeRendering:"auto",children:e.jsx("path",{d:"M14 5C13.4477 5 13 4.55228 13 4C13 3.44772 13.4477 3 14 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4L21 10C21 10.5523 20.5523 11 20 11C19.4477 11 19 10.5523 19 10L19 6.41422L9.70711 15.7071C9.31658 16.0976 8.68342 16.0976 8.29289 15.7071C7.90237 15.3166 7.90237 14.6834 8.29289 14.2929L17.5858 5H14ZM3 7C3 5.89543 3.89543 5 5 5H10C10.5523 5 11 5.44772 11 6C11 6.55228 10.5523 7 10 7H5V19H17V14C17 13.4477 17.4477 13 18 13C18.5523 13 19 13.4477 19 14V19C19 20.1046 18.1046 21 17 21H5C3.89543 21 3 20.1046 3 19V7Z",fill:"currentColor"})})}),e.jsx("span",{className:"denhaag-link__label",children:n==="eIDAS"?"How does eIDAS work?":`Vraag ${n} aan`})]})]})})]})},U={title:"CSS/Cards/Authentication Card",id:"css-authentication-card",component:W,args:G,tags:["autodocs"],parameters:{docs:{description:{component:B}}}},t={},i={args:{...t.args,authProvider:"DigiD"},name:"DigiD"},o={args:{...t.args,authProvider:"eHerkenning"},name:"eHerkenning"},s={args:{...t.args,authProvider:"eIDAS"},name:"eIDAS"},c={args:{...t.args,portrait:!0}},h={args:{...t.args,authProvider:"DigiD",portrait:!0}},g={args:{...t.args,headingLevel:2}};var u,m,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(x=(m=t.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var f,k,D;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    authProvider: 'DigiD'
  },
  name: 'DigiD'
}`,...(D=(k=i.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var b,w,C;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    authProvider: 'eHerkenning'
  },
  name: 'eHerkenning'
}`,...(C=(w=o.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var v,j,_;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    authProvider: 'eIDAS'
  },
  name: 'eIDAS'
}`,...(_=(j=s.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var S,A,I;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    portrait: true
  }
}`,...(I=(A=c.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var y,H,N;h.parameters={...h.parameters,docs:{...(y=h.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    authProvider: 'DigiD',
    portrait: true
  }
}`,...(N=(H=h.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var T,L,P;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headingLevel: 2
  }
}`,...(P=(L=g.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};const F=["Default","DigiD","eHerkenning","eIDAS","Portrait","PortraitWithLogo","AlternativeHeadinglevel"];export{g as AlternativeHeadinglevel,t as Default,i as DigiD,c as Portrait,h as PortraitWithLogo,F as __namedExportsOrder,U as default,o as eHerkenning,s as eIDAS};