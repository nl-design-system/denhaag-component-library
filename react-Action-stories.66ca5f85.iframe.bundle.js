"use strict";(self.webpackChunk_gemeente_denhaag_storybook=self.webpackChunk_gemeente_denhaag_storybook||[]).push([[1943],{"./src/react/Action.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Focus:()=>Focus,Hover:()=>Hover,List:()=>List,WithDate:()=>WithDate,WithDateRelative:()=>WithDateRelative,WithDateWarning:()=>WithDateWarning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _gemeente_denhaag_action__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../components/Action/dist/mjs/index.js"),_components_Action_README_md__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../components/Action/README.md"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const exampleArgs={children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong",{children:"Taak"}),link:"#example",labels:{today:"vandaag",yesterday:"gisteren",before:"vóór",approachingDeadline:daysDifference=>1===daysDifference?`nog ${daysDifference} dag`:`nog ${daysDifference} dagen`}},__WEBPACK_DEFAULT_EXPORT__={id:"react-actions-action",title:"React/Actions/Action",component:_gemeente_denhaag_action__WEBPACK_IMPORTED_MODULE_1__.v4,args:exampleArgs,tags:["autodocs"],parameters:{docs:{description:{component:_components_Action_README_md__WEBPACK_IMPORTED_MODULE_2__}}}},Default={},Hover={args:{...Default.args,className:"denhaag-action--hover"}},Focus={args:{...Default.args,className:"denhaag-action--focus"}},WithDate={args:{...Default.args,dateTime:"2023-09-28T19:47:36.593Z"}},WithDateRelative={args:{...Default.args,dateTime:"2023-10-02T19:47:36.593Z",now:"2023-09-28T19:47:36.593Z",relativeDate:!0}},WithDateWarning={args:{...Default.args,dateTime:"2023-09-30T19:47:36.593Z",now:"2023-09-28T19:47:36.593Z",relativeDate:!0}},List={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_gemeente_denhaag_action__WEBPACK_IMPORTED_MODULE_1__.v4,{...exampleArgs}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_gemeente_denhaag_action__WEBPACK_IMPORTED_MODULE_1__.v4,{...exampleArgs}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_gemeente_denhaag_action__WEBPACK_IMPORTED_MODULE_1__.v4,{...exampleArgs})]})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},Hover.parameters={...Hover.parameters,docs:{...Hover.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    className: 'denhaag-action--hover'\n  }\n}",...Hover.parameters?.docs?.source}}},Focus.parameters={...Focus.parameters,docs:{...Focus.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    className: 'denhaag-action--focus'\n  }\n}",...Focus.parameters?.docs?.source}}},WithDate.parameters={...WithDate.parameters,docs:{...WithDate.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    dateTime: '2023-09-28T19:47:36.593Z'\n  }\n}",...WithDate.parameters?.docs?.source}}},WithDateRelative.parameters={...WithDateRelative.parameters,docs:{...WithDateRelative.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    dateTime: '2023-10-02T19:47:36.593Z',\n    now: '2023-09-28T19:47:36.593Z',\n    relativeDate: true\n  }\n}",...WithDateRelative.parameters?.docs?.source}}},WithDateWarning.parameters={...WithDateWarning.parameters,docs:{...WithDateWarning.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    dateTime: '2023-09-30T19:47:36.593Z',\n    now: '2023-09-28T19:47:36.593Z',\n    relativeDate: true\n  }\n}",...WithDateWarning.parameters?.docs?.source}}},List.parameters={...List.parameters,docs:{...List.parameters?.docs,source:{originalSource:"{\n  render: () => <>\n      <ActionSingle {...exampleArgs} />\n      <ActionSingle {...exampleArgs} />\n      <ActionSingle {...exampleArgs} />\n    </>\n}",...List.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Hover","Focus","WithDate","WithDateRelative","WithDateWarning","List"]},"../../components/Action/README.md":module=>{module.exports="# Action\n\n![npm (scoped)](https://img.shields.io/npm/v/@gemeente-denhaag/alert?logo=npm&style=flat-square)\n![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/nl-design-system/denhaag/Build%20and%20deploy%20Storybook%20to%20Azure%20Web%20App/main?logo=github&style=flat-square)\n\nEen task is een interactief element dat je navigeert naar een andere pagina en als doel heeft om een actie uit te voeren.\n\n## When to use\n\nEen task is een interactief element dat je navigeert naar een andere pagina en als doel heeft om een actie uit te voeren.\n\n## When not to use\n\nEen task is een interactief element dat je navigeert naar een andere pagina en als doel heeft om een actie uit te voeren.\n\n## Alternatives and related components\n\n- Link: Gebruik een link wanneer de gewenste actie is om de gebruiker naar een nieuwe pagina te leiden.\n- Button: Gebruik een button om acties door te geven die gebruikers kunnen ondernemen en om interactie met de pagina mogelijk te maken.\n\n## Anatomy\n\nEen task bestaat uit:\n\n1. Leading icon (optional): biedt ondersteuning bij de bevestiging.\n2. Label: communiceert de taak die je gaat uitvoeren.\n3. Subtext: biedt ondersteuning aan de label.\n4. Deadline icon (optional): geeft weer dat er een waarschuwing is waar je op moet letten.\n5. Date: communiceert de deadline van de taak.\n6. Trailing icon: laat zien dat je ergens naartoe navigeert als je interacteert met de taak.\n7. Secondary button: toont de actie die zal worden uitgevoerd wanneer de gebruiker ermee communiceert.\n8. Primary button: toont de actie die zal worden uitgevoerd wanneer de gebruiker ermee communiceert.\n9. Container\n\n## Staten\n\nDe task bevat de staten:\n\n- default\n- hover\n- checked\n- focus\n\n## Design properties\n\n**Typography**\n\n- Label: TheSans/md/700\n- Subtext: TheSans/md/400\n- Date:\n  - Default: TheSans/md/400\n  - Deadline: TheSans/md/700\n\n**Colors**\n\nDefault:\n\n- Label: text color Grey/5\n- Subtext: text color Grey/4\n- Deadline icon: svg color Orange/4\n- Date:\n- Default: text color Grey/4\n- Deadline: text color Orange/5\n- Trailing icon: svg color Blue/3\n- Buttons: zoals beschreven staat bij het component Buttons.\n- Container: border color Grey/2\n\nHover:\n\n- Overview:\n  - Container: background-color Warm/grey\n- Detail:\n  - Buttons: zoals beschreven staat bij het component Buttons.\n\nFocus:\n\n- Overview:\n  - Container: border color Ocher/5\n- Detail:\n  - Buttons: zoals beschreven staat bij het component Buttons.\n\n## Best practices\n\n### Do's\n\n- Gebruik pictogrammen en kleuren die gemakkelijk te begrijpen zijn. Gebruik een vinkje om voltooide taken aan te geven en een deadline icoon om achterstallige taken aan te geven.\n- Zorg ervoor dat de taak responsief is en goed werkt op verschillende schermformaten en apparaten.\n- Zorg voor duidelijke en beschrijvende labels en gebruik contrastrijke kleuren.\n- Wanneer een taak is voltooid, animeer dan de bevestiging in de oude taak. De oude taak blijft dus in eerste instantie staan en wordt vervangen door de bevestiging.\n\n### Don'ts\n\n- Gebruik geen kleur als enige manier om informatie over te brengen, zoals bij het markeren van de deadline. Dit kan problematisch zijn voor gebruikers die kleurenblind zijn of die kleuren niet goed kunnen onderscheiden.\n- Vermijd het gebruik van kleurencombinaties die onvoldoende contrast bieden en daardoor moeilijk leesbaar zijn voor gebruikers met een visuele beperking.\n- Gebruik geen verwarrende, onduidelijke of dubbelzinnige labels voor de elementen van de taak. Zorg ervoor dat de labels duidelijk en beknopt zijn, zodat gebruikers de functie van elk element gemakkelijk kunnen begrijpen.\n- Verberg geen belangrijke informatie: Verberg geen belangrijke informatie zoals de checked status of prioriteit van een taak en iconen die mogelijk niet toegankelijk zijn voor alle gebruikers.\n- Vermijd onnodige animaties of bewegende elementen in de Task-component. Dit kan afleidend zijn en kan gebruikers afleiden van hun taak of de toegankelijkheid verminderen voor gebruikers met een visuele of cognitieve beperking.\n\n## Content guidelines\n\nLabel:\n\n- Gebruik labels die gemakkelijk te begrijpen zijn en de taak duidelijk omschrijven.\n- Gebruik bijvoorbeeld in plaats van 'Taak 1' als label 'Verleng uw identiteitskaart’.\n- Start de label van een taak die je moet uitvoeren altijd met een werkwoord in gebiedende wijs, gevolgd door een zaak/productnaam. Bijvoorbeeld: ‘Geef informatie voor uw aanvraag subsidie geluidsisolatie’.\n\nButton:\nDe buttons moeten in de vorm ‘Infinitief (onbepaalde wijs)’ worden geschreven. Bijvoorbeeld: ‘Betalen’, ‘Informatie geven’ en ‘Negeren’.\n\nSubtext:\nDe subtext moet altijd gelijk zijn wanneer een taak succesvol is uitgevoerd.\n\nDatum:\n\n- Communiceer datums op de volgende manier: ‘vóór [dag] [maand] [jaar]’. Bijvoorbeeld: ‘vóór 1 mei 2023’.\n- Als een taak binnen 2 dagen moet uitgevoerd, maak je gebruik van de deadline variant. De datum communiceer je op de volgende manier:\n\n  - nog 2 dagen\n  - nog 1 dag\n  - vandaag\n\n## Accessibility\n\nGebruik semantische HTML-tags om de taakcomponent te structureren, zoals <form>, <label> en <input>. Dit maakt het voor schermlezers en andere ondersteunende technologieën gemakkelijker om het doel van de component te begrijpen.\n\nGebruik contrastrijke kleuren voor tekst en achtergronden om ervoor te zorgen dat de taakcomponent gemakkelijk leesbaar is voor gebruikers met visuele beperkingen. Test het onderdeel met een kleurcontrastcontrole om er zeker van te zijn dat het voldoet aan de toegankelijkheidsrichtlijnen.\n\nZorg ervoor dat alle functionaliteit binnen de taakcomponent toegankelijk is via een toetsenbord. Gebruikers die geen muis kunnen gebruiken, vertrouwen op toetsenbordnavigatie voor interactie met webpagina's.\n\nTest met hulptechnologieën: test de taakcomponent met behulp van schermlezers en andere hulptechnologieën om ervoor te zorgen dat deze bruikbaar is voor gebruikers met een handicap.\n"}}]);