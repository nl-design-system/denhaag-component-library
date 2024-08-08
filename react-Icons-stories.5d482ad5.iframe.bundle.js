"use strict";(self.webpackChunk_gemeente_denhaag_storybook=self.webpackChunk_gemeente_denhaag_storybook||[]).push([[213],{"./src/react/Icons.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{All:()=>All,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Icons_stories});__webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");var mjs=__webpack_require__("../../components/Icons/dist/mjs/index.js");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const allIcons=Object.entries(mjs).filter((([key])=>"default"!==key)),exampleArgs={},Icons_stories={id:"react-data-display-icons",title:"React/Data Display/Icons",component:mjs.default,args:exampleArgs,tags:["autodocs"],parameters:{docs:{description:{component:'# Icons component\n\n[📕 View this component in Storybook](http://dhreactstorybook.azurewebsites.net/?path=/story/components-data-display-icons)\n\n[✏️ View the icons in Figma](https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System-Gemeente-Den-Haag?node-id=119%3A676)\n\n## How to use this component\n\nNumerous icons are exported in this component.\nSee the Storybook for all available the icons.\nAn icon can be imported like so:\n\n```jsx\nimport { ArrowLeftIcon } from "@gemeente-denhaag/icons";\n<ArrowLeftIcon />;\n```\n\nAdding your own icons is very easy.\nThis component exposes `SvgIcon` which is a wrapper element for `svg` or children of `svg` elements.\n\nA `path` element can be wrapped like so:\n\n```jsx\nimport SvgIcon from "@gemeente-denhaag/icons";\n\nconst HomeIcon = (props) => (\n  <SvgIcon {...props}>\n    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />\n  </SvgIcon>\n);\n```\n\nThe `SvgIcon` can also take a `svg` element as property:\n\n```jsx\nimport StarIconSvg from "./star.svg";\n\nconst StarIcon = (props) => <SvgIcon component={StarIconSvg} viewBox="0 0 600 476.6" {...props} />;\n```\n\nDo note that you will need a sufficient bundler that can handle the direct `svg` import.\nFor example, [`svgr`](https://github.com/gregberge/svgr) is a loader for webpack that can import `svg` elements and make them usable in react.\n\n### Further reading material\n\n- https://github.com/gregberge/svgr\n- https://github.com/svg/svgo\n\n## How to add icons to this component\n\n1. You need a complete `svg` file.\n   This file can be exported from Figma for example.\n   Make sure that the viewport is `"0 0 24 24"`.\n2. Place this file in one of the directories in `src/svg`.\n   If the file is exported from the Denhaag Figma, it should already be in the correct directory.\n   Then just merge both directories.\n3. Update `index.tsx` by adding:\n\n   ```tsx\n   import YourIconSvg from "./svg/DIR/YOURICON.svg";\n   export const YourIcon: F = (props: SvgIconProps) => buildIcon(YourIconSvg, props);\n   ```\n\n4. View the Storybook to see if it renders correctly.\n   If the colors are incorrect, try changing the `fill` and `stroke` of the `svg` elements and its children.\n   Usually these properties should have the `"none"` or `"currentColor"` value.\n   Check the other icons for more details.\n\n   You don\'t need to update the Storybook story.\n   The icon should be added automagically.\n\n5. Done! ✨\n'}}}},Default={args:{...exampleArgs,component:mjs.ArrowLeftIcon}},All={render:args=>{const children=allIcons.map((([key,value])=>{const IconElement=value;return(0,jsx_runtime.jsxs)("div",{style:{flexBasis:"16.666667%"},children:[(0,jsx_runtime.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,jsx_runtime.jsx)(IconElement,{...args})}),(0,jsx_runtime.jsx)("p",{style:{textAlign:"center",color:"#4B4B4B",fontFamily:"monospace"},children:key})]},key)}));return(0,jsx_runtime.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...exampleArgs,\n    component: ArrowLeftIcon\n  }\n}",...Default.parameters?.docs?.source}}},All.parameters={...All.parameters,docs:{...All.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    const children = allIcons.map<React.ReactElement>(([key, value]) => {\n      const IconElement = value;\n      return <div key={key} style={{\n        flexBasis: '16.666667%'\n      }}>\n          <div style={{\n          display: 'flex',\n          justifyContent: 'center'\n        }}>\n            <IconElement {...args} />\n          </div>\n          <p style={{\n          textAlign: 'center',\n          color: '#4B4B4B',\n          fontFamily: 'monospace'\n        }}>{key}</p>\n        </div>;\n    });\n    return <div style={{\n      display: 'flex',\n      flexWrap: 'wrap'\n    }}>{children}</div>;\n  }\n}",...All.parameters?.docs?.source}}};const __namedExportsOrder=["Default","All"]}}]);