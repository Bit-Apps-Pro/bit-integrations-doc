"use strict";(self.webpackChunkbit_integrations_documentation=self.webpackChunkbit_integrations_documentation||[]).push([[8702],{76301:(t,e,o)=>{o.d(e,{Z:()=>i});var a=o(67294),n=o(36136);function i(t){let{src:e,w:o,h:i,alt:r,youtube:p}=t;return p?n.Z.canUseDOM?a.createElement("lite-youtube",{class:"youtube-vdo",videoid:e}):a.createElement(a.Fragment,null):a.createElement("video",{preload:"auto",width:"100%",autoPlay:!0,controls:!0,muted:!0},a.createElement("source",{src:"/video/"+e+".mp4",type:"video/mp4"}))}},57353:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>k,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=o(87462),n=(o(67294),o(3905)),i=o(56251),r=o(76301),p=o(1993);const s={id:"hubspot",title:"Authorization Process With Hubspot",sidebar_label:"Hubspot",slug:"/integrations/hubspot"},l=void 0,c={unversionedId:"actions/hubspot",id:"actions/hubspot",title:"Authorization Process With Hubspot",description:"Note: Hubspot is only available on the pro version.",source:"@site/docs/actions/hubspot.mdx",sourceDirName:"actions",slug:"/integrations/hubspot",permalink:"/integrations/hubspot",draft:!1,editUrl:"https://github.com/Bit-Apps-Pro/bit-integrations-doc/blob/main/docs/actions/hubspot.mdx",tags:[],version:"current",frontMatter:{id:"hubspot",title:"Authorization Process With Hubspot",sidebar_label:"Hubspot",slug:"/integrations/hubspot"},sidebar:"someSidebar",previous:{title:"Groundhogg",permalink:"/integrations/groundhogg"},next:{title:"Keap",permalink:"/integrations/Keap"}},m={},d=[{value:"Process of Authorization and Integration",id:"process-of-authorization-and-integration",level:2},{value:"Integration Settings for Contact Create",id:"integration-settings-for-contact-create",level:3},{value:"Integration Settings for Deal Create",id:"integration-settings-for-deal-create",level:3},{value:"Integration Settings for Ticket Create",id:"integration-settings-for-ticket-create",level:3},{value:"Action",id:"action",level:3}],u={toc:d};function k(t){let{components:e,...o}=t;return(0,n.kt)("wrapper",(0,a.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note: Hubspot is only available on the pro version."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"To integrate with Hubspot follow, the below steps."))),(0,n.kt)("h2",{id:"process-of-authorization-and-integration"},"Process of Authorization and Integration"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Search & Select ",(0,n.kt)("strong",{parentName:"p"},"Hubspot")," from the actions pages"),(0,n.kt)(i.Z,{src:"actions/hubspot/select-action",alt:"Hubspot",w:"1020",h:"350",mdxType:"Image"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Integration Name: Set the proper integration name. Default it's taken Hubspot integration."),(0,n.kt)(i.Z,{src:"actions/hubspot/integration-name",alt:"Hubspot",w:"1020",h:"350",mdxType:"Image"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After that, To get the API key, click on ",(0,n.kt)("inlineCode",{parentName:"p"},"Hubspot API Console")," or\nStep of generating API key:"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Login to your HubSpot account, click the ",(0,n.kt)("inlineCode",{parentName:"li"},"Settings")," icon \u2699 "),(0,n.kt)("li",{parentName:"ul"},"In the left sidebar menu, navigate to Integrations > ",(0,n.kt)("strong",{parentName:"li"},"Private Apps"),".",(0,n.kt)("br",{parentName:"li"}),(0,n.kt)("strong",{parentName:"li"},"\u26a1 Setup Process"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Create a Private App"),"."),(0,n.kt)("li",{parentName:"ol"},"Type your app name"),(0,n.kt)("li",{parentName:"ol"},"In the top bar menu, navigate to the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Scopes"))," tab."),(0,n.kt)("li",{parentName:"ol"},"Scroll Down, click on ",(0,n.kt)("em",{parentName:"li"},"CRM")," Scopes under the ",(0,n.kt)("strong",{parentName:"li"},"scopes")," section and add all scopes."),(0,n.kt)("li",{parentName:"ol"},"click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Create App")," button."),(0,n.kt)("li",{parentName:"ol"},"click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Continue Reading")," button."),(0,n.kt)("li",{parentName:"ol"},"click ",(0,n.kt)("inlineCode",{parentName:"li"},"Show")," button to display your key. ",(0,n.kt)(r.Z,{src:"hubspot-create-private-apps-and-api-key-generate",alt:"Slack",w:"1020",h:"350",mdxType:"Video"}))))),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Now copy the API key, paste it into the integrations dashboard. And Click on ",(0,n.kt)("strong",{parentName:"p"},"Authorize")," button."),(0,n.kt)(i.Z,{src:"actions/hubspot/authorize",alt:"Hubspot",w:"1020",h:"350",mdxType:"Image"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("inlineCode",{parentName:"p"},"Next")," to set up the other integration settings ahead."),(0,n.kt)(i.Z,{src:"actions/hubspot/after-authorize",alt:"Hubspot",w:"1020",h:"350",mdxType:"Image"}))),(0,n.kt)("h3",{id:"integration-settings-for-contact-create"},"Integration Settings for Contact Create"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After completing the authorization process, Select the ",(0,n.kt)("inlineCode",{parentName:"p"},"Action")," from the drop-down option ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Contact Create")),"."),(0,n.kt)(i.Z,{src:"actions/hubspot/select-action-contact-create",alt:"Hubspot",w:"1020",h:"350",mdxType:"Image"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You will find the Map Field option. You have to map all the necessary form fields with the related Hubspot field. Here ",(0,n.kt)("strong",{parentName:"p"},"Email"),"  fields the default for Hubspot. Now, click on the ",(0,n.kt)("inlineCode",{parentName:"p"},"Next")," button to move forward for further settings."),(0,n.kt)(i.Z,{src:"actions/hubspot/map-fields",alt:"Hubspot",w:"1020",h:"350",mdxType:"Image"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Now save the integration by clicking the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Finish & Save"))," Button"),(0,n.kt)(i.Z,{src:"actions/hubspot/finish-save",alt:"Hubspot",w:"1020",h:"350",mdxType:"Image"}))),(0,n.kt)("h3",{id:"integration-settings-for-deal-create"},"Integration Settings for Deal Create"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After completing the authorization process, Select the ",(0,n.kt)("inlineCode",{parentName:"p"},"Action")," from the drop-down option ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Deal Create")),". Then select the ",(0,n.kt)("inlineCode",{parentName:"p"},"Pipeline")," (sales pipeline), from the drop-down option and select the ",(0,n.kt)("inlineCode",{parentName:"p"},"stage")," from the drop-down option of your choice."),(0,n.kt)(i.Z,{src:"actions/hubspot/select-action-deal-create",alt:"Hubspot",w:"1020",h:"350",mdxType:"Image"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You will find the Map Field option. You have to map all the necessary form fields with the related Hubspot field. Here ",(0,n.kt)("strong",{parentName:"p"},"Deal Name"),"field is the default for Hubspot. Now, click on the ",(0,n.kt)("inlineCode",{parentName:"p"},"Next")," button to move forward for further settings."),(0,n.kt)(i.Z,{src:"actions/hubspot/deal-map-fields",alt:"Hubspot",w:"1020",h:"350",mdxType:"Image"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Now save the integration by clicking the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Finish & Save"))," Button"),(0,n.kt)(i.Z,{src:"actions/hubspot/finish-save",alt:"Hubspot",w:"1020",h:"350",mdxType:"Image"}))),(0,n.kt)("h3",{id:"integration-settings-for-ticket-create"},"Integration Settings for Ticket Create"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After completing the authorization process, Select the ",(0,n.kt)("inlineCode",{parentName:"p"},"Action")," from the drop-down option ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Ticket Create")),". Then select the ",(0,n.kt)("inlineCode",{parentName:"p"},"Pipeline")," (Support pipeline), from the drop-down option and select the ",(0,n.kt)("inlineCode",{parentName:"p"},"stage")," from the drop-down option of your choice."),(0,n.kt)(i.Z,{src:"actions/hubspot/select-action-ticket-create",alt:"Hubspot",w:"1020",h:"350",mdxType:"Image"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You will find the Map Field option. You have to map all the necessary form fields with the related Hubspot field. Here ",(0,n.kt)("strong",{parentName:"p"},"Ticket Name"),"field is the default for Hubspot. Now, click on the ",(0,n.kt)("inlineCode",{parentName:"p"},"Next")," button to move forward for further settings."),(0,n.kt)(i.Z,{src:"actions/hubspot/ticket-map-fields",alt:"Hubspot",w:"1020",h:"350",mdxType:"Image"}))),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Now save the integration by clicking the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Finish & Save"))," Button"),(0,n.kt)(i.Z,{src:"actions/hubspot/finish-save",alt:"Hubspot",w:"1020",h:"350",mdxType:"Image"}))),(0,n.kt)("h3",{id:"action"},"Action"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Contact Owner:")," Select this option you can set a ",(0,n.kt)("strong",{parentName:"p"},"Contact owner")," of the sent record. Select Contact owner from the drop-down option of your choices."),(0,n.kt)(i.Z,{src:"actions/hubspot/contact-owner",alt:"Hubspot",w:"1020",h:"350",mdxType:"Image"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Lifecycle Stage:")," You select the ",(0,n.kt)("strong",{parentName:"p"},"Lifecycle Stage")," (",(0,n.kt)("inlineCode",{parentName:"p"},"Subscriber"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Lead"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Marketing Qualified Lead"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Sales Qualified Lead"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Opportunity"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Evangelist"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Other"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Customer"),") from actions."),(0,n.kt)(i.Z,{src:"actions/hubspot/lifecycle-stage",alt:"Hubspot",w:"1020",h:"350",mdxType:"Image"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Lead Status:")," You select the ",(0,n.kt)("strong",{parentName:"p"},"Lead status")," (",(0,n.kt)("inlineCode",{parentName:"p"},"Open"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"New In"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Progress"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Open Deal"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Unqualified"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Attempted to contact"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Connected"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Bad timing"),") from actions."),(0,n.kt)(i.Z,{src:"actions/hubspot/lead-status",alt:"Hubspot",w:"1020",h:"350",mdxType:"Image"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Contact:")," You can associate deal with your ",(0,n.kt)("strong",{parentName:"p"},"contacts"),". Select a contact from the drop-down option of your choice."),(0,n.kt)(i.Z,{src:"actions/hubspot/contact",alt:"Hubspot",w:"1020",h:"350",mdxType:"Image"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Company:")," You can associate deal with your ",(0,n.kt)("strong",{parentName:"p"},"company"),". Select a company from the drop-down option of your choice."),(0,n.kt)(i.Z,{src:"actions/hubspot/company",alt:"Hubspot",w:"1020",h:"350",mdxType:"Image"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Deal Type:")," ",(0,n.kt)("strong",{parentName:"p"},"Deal types")," allow you to categorize your deals. Select deal types from the drop-down option of your choice."),(0,n.kt)(i.Z,{src:"actions/hubspot/deal-type",alt:"Hubspot",w:"1020",h:"350",mdxType:"Image"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Priority:")," By enabling this option, you can set the ",(0,n.kt)("strong",{parentName:"p"},"priority")," for every ticket. Select priority from the drop-down option of your choices."),(0,n.kt)(i.Z,{src:"actions/hubspot/priority",alt:"Hubspot",w:"1020",h:"350",mdxType:"Image"}),(0,n.kt)(p.Z,{mdxType:"Feedback"}))}k.isMDXComponent=!0}}]);