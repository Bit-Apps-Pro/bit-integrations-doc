"use strict";(self.webpackChunkbit_integration_documentation=self.webpackChunkbit_integration_documentation||[]).push([[2437],{76301:(t,e,n)=>{n.d(e,{Z:()=>o});var a=n(67294),i=n(36136);function o(t){let{src:e,w:n,h:o,alt:r,youtube:l}=t;return l?i.Z.canUseDOM?a.createElement("lite-youtube",{class:"youtube-vdo",videoid:e}):a.createElement(a.Fragment,null):a.createElement("video",{preload:"auto",width:"100%",autoPlay:!0,controls:!0,muted:!0},a.createElement("source",{src:"/video/"+e+".mp4",type:"video/mp4"}))}},83086:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>m,toc:()=>u});var a=n(87462),i=(n(67294),n(3905)),o=n(56251),r=(n(76301),n(1993));const l={id:"fluentcrm",title:"Authorization Process With FluentCRM",sidebar_label:"FluentCRM",slug:"/integrations/fluentcrm"},s=void 0,m={unversionedId:"actions/fluentcrm",id:"actions/fluentcrm",title:"Authorization Process With FluentCRM",description:"Note: Fluent CRM is only available on the pro version.",source:"@site/docs/actions/fluentcrm.mdx",sourceDirName:"actions",slug:"/integrations/fluentcrm",permalink:"/integrations/fluentcrm",draft:!1,editUrl:"https://github.com/Bit-Apps-Pro/bit-integrations-doc/blob/main/docs/actions/fluentcrm.mdx",tags:[],version:"current",frontMatter:{id:"fluentcrm",title:"Authorization Process With FluentCRM",sidebar_label:"FluentCRM",slug:"/integrations/fluentcrm"},sidebar:"someSidebar",previous:{title:"Fluent Support",permalink:"/integrations/fluentsupport"},next:{title:"Freshdesk",permalink:"/integrations/freshdesk"}},p={},u=[{value:"Process of Authorization and Integration",id:"process-of-authorization-and-integration",level:2},{value:"Integration Settings:",id:"integration-settings",level:2}],c={toc:u};function k(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note: Fluent CRM is only available on the pro version."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"To integrate with FluentCRM follow, the below steps."))),(0,i.kt)("h2",{id:"process-of-authorization-and-integration"},"Process of Authorization and Integration"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Search & Select ",(0,i.kt)("strong",{parentName:"p"},"FluentCRM")," from the actions pages"),(0,i.kt)(o.Z,{src:"actions/fluentcrm/search-and-select-fluentcrm",alt:"FluentCRM",w:"1020",h:"350",mdxType:"Image"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Integration Name:")," Set the proper integration name. Default it's taken 'FluentCRM'."),(0,i.kt)(o.Z,{src:"actions/fluentcrm/default-integration-name",alt:"FluentCRM",w:"1020",h:"350",mdxType:"Image"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connect to Fluent CRM button"),". "),(0,i.kt)(o.Z,{src:"actions/fluentcrm/connect-fluentcrm",alt:"FluentCRM",w:"1020",h:"350",mdxType:"Image"}))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"}," ",(0,i.kt)("strong",{parentName:"p"},"Note: Before setting up the integration, you must confirm that the Fluent CRM plugin is activated on your site. Otherwise, the integration will not work."))),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Next"))," to set up the other integration settings ahead."),(0,i.kt)(o.Z,{src:"actions/fluentcrm/next-step",alt:"FluentCRM",w:"1020",h:"350",mdxType:"Image"}))),(0,i.kt)("h2",{id:"integration-settings"},"Integration Settings:"),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After completing the authorization process, Select the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"FluentCRM list"))," on the Fluent CRM field that you have created before on your CRM account. All your subscribers will be listed under this list. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You can select multiple tags for the list on the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"FluentCRM Tags"))," field. You have to create them earlier on the FluentCRM. Tags will help you to search the list & leads easily. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Then, you have to map the form fields with ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"FluentCRM"))," fields. By default, the field is ",(0,i.kt)("strong",{parentName:"p"},"Email"),". You can select multiple fields from map field settings.  "),(0,i.kt)(o.Z,{src:"actions/fluentcrm/fluentcrm-field-map",alt:"FluentCRM",w:"1020",h:"350",mdxType:"Image"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"There are two actions available you can trigger if you need any of them-"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Skip exist contact:")," Enabling this option, you can skip duplicate email submission of the subscriber."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Double Opt-in:")," If this action is enabled, then the user will get a notification if they want to be a subscriber or not.",(0,i.kt)(o.Z,{src:"actions/fluentcrm/fluentcrm-actions",alt:"FluentCRM",w:"1020",h:"350",mdxType:"Image"}))))),(0,i.kt)("ol",{start:9},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now save the integration by clicking the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Finish & Save"))," Button"),(0,i.kt)(o.Z,{src:"actions/fluentcrm/finish-save",alt:"FluentCRM",w:"1020",h:"350",mdxType:"Image"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"We have an option in every integration ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Timeline"))," where you can check integration success or error status."),(0,i.kt)(o.Z,{src:"actions/fluentcrm/fluentcrm-timeline",alt:"FluentCRM",w:"1020",h:"350",mdxType:"Image"}),(0,i.kt)(o.Z,{src:"actions/fluentcrm/fluentcrm-log",alt:"FluentCRM",w:"1020",h:"350",mdxType:"Image"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Also, you can ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Edit"))," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Clone"))," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Delete"))," the integration."),(0,i.kt)(o.Z,{src:"actions/fluentcrm/fluentcrm-option",alt:"FluentCRM",w:"1020",h:"350",mdxType:"Image"}))),(0,i.kt)(r.Z,{mdxType:"Feedback"}))}k.isMDXComponent=!0}}]);