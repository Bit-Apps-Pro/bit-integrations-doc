"use strict";(self.webpackChunkbit_integrations_documentation=self.webpackChunkbit_integrations_documentation||[]).push([[4410],{76301:(t,e,o)=>{o.d(e,{Z:()=>i});var a=o(67294),n=o(36136);function i(t){let{src:e,w:o,h:i,alt:r,youtube:l}=t;return l?n.Z.canUseDOM?a.createElement("lite-youtube",{class:"youtube-vdo",videoid:e}):a.createElement(a.Fragment,null):a.createElement("video",{preload:"auto",width:"100%",autoPlay:!0,controls:!0,muted:!0},a.createElement("source",{src:"/video/"+e+".mp4",type:"video/mp4"}))}},69809:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=o(87462),n=(o(67294),o(3905)),i=o(56251),r=(o(76301),o(1993));const l={id:"vbout",title:"Authorization Process With Vbout",sidebar_label:"Vbout",slug:"/integrations/vbout"},s=void 0,u={unversionedId:"actions/vbout",id:"actions/vbout",title:"Authorization Process With Vbout",description:"Note: Vbout is only available on the pro version.",source:"@site/docs/actions/vbout.mdx",sourceDirName:"actions",slug:"/integrations/vbout",permalink:"/integrations/vbout",draft:!1,editUrl:"https://github.com/Bit-Apps-Pro/bit-integrations-doc/blob/main/docs/actions/vbout.mdx",tags:[],version:"current",frontMatter:{id:"vbout",title:"Authorization Process With Vbout",sidebar_label:"Vbout",slug:"/integrations/vbout"},sidebar:"someSidebar",previous:{title:"Twilio",permalink:"/integrations/twilio"},next:{title:"WhatsApp",permalink:"/integrations/whatsapp"}},p={},c=[{value:"Process of Authorization and Integration",id:"process-of-authorization-and-integration",level:2},{value:"Actions",id:"actions",level:2}],m={toc:c};function d(t){let{components:e,...o}=t;return(0,n.kt)("wrapper",(0,a.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note: Vbout is only available on the pro version."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"To integrate with Vbout follow, the below steps."))),(0,n.kt)("h2",{id:"process-of-authorization-and-integration"},"Process of Authorization and Integration"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Search & Select ",(0,n.kt)("strong",{parentName:"p"},"Vbout")," from the actions pages"),(0,n.kt)(i.Z,{src:"actions/vbout/select-action-vbout",alt:"Vbout",w:"1020",h:"350",mdxType:"Image"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Integration Name:")," Set the proper integration name. Default it's taken ",(0,n.kt)("strong",{parentName:"p"},"Vbout"),"."),(0,n.kt)(i.Z,{src:"actions/vbout/integration-name",alt:"Vbout",w:"1020",h:"350",mdxType:"Image"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After that, you have to copy the API Token from your Vbout account & paste the key on the field.",(0,n.kt)("br",{parentName:"p"}),"\n","To get the API Token,    "))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"click on ",(0,n.kt)("inlineCode",{parentName:"p"},"Vbout API Token")," or go to your ",(0,n.kt)("strong",{parentName:"p"},"Vbout dashboard")," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"click on Profile icon => Setting => Navigate to API Integrations")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Now copy the Your Unique API User Key and paste it into the integration\u2019s dashboard. And Click on ",(0,n.kt)("strong",{parentName:"p"},"\u201cAuthorize\u201d")," button"),(0,n.kt)(i.Z,{src:"actions/vbout/click-api-token",alt:"Vbout",w:"1020",h:"350",mdxType:"Image"}),(0,n.kt)(i.Z,{src:"actions/vbout/copy-api",alt:"Vbout",w:"1020",h:"350",mdxType:"Image"}),(0,n.kt)(i.Z,{src:"actions/vbout/authorize",alt:"Vbout",w:"1020",h:"350",mdxType:"Image"}))),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Next"))," to set up the other integration settings ahead."),(0,n.kt)(i.Z,{src:"actions/vbout/after-authorize",alt:"Vbout",w:"1020",h:"350",mdxType:"Image"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After completing the authorization process, select the Contacts list that you have created before on Vbout. By default, the name of the list is Sample list. Then elect the Contact Status from the drop-down option (Active, Unconfirmed).  If you don't see any Contacts list. Click on the ",(0,n.kt)("inlineCode",{parentName:"p"},"refresh button"),"."),(0,n.kt)(i.Z,{src:"actions/vbout/vbout-list-status",alt:"Vbout",w:"1020",h:"350",mdxType:"Image"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You will find the Map Field option. You have to map all the necessary fields with the related Vbout field. By default, ",(0,n.kt)("strong",{parentName:"p"},"\u201cEmail\u201d")," field of Vbout will be available. You can also send custom values by mapping your required field. Now, click on the ",(0,n.kt)("inlineCode",{parentName:"p"},"Next")," button to move forward for further settings. If you don't see any Vbout fields. Click on the ",(0,n.kt)("inlineCode",{parentName:"p"},"refresh button"),"."),(0,n.kt)(i.Z,{src:"actions/vbout/vbout-field-map",alt:"Vbout",w:"1020",h:"350",mdxType:"Image"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Now save the integration by clicking the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Finish & Save"))," Button"),(0,n.kt)(i.Z,{src:"actions/vbout/finish-save",alt:"Vbout",w:"1020",h:"350",mdxType:"Image"}),(0,n.kt)(i.Z,{src:"actions/vbout/check-integration",alt:"Vbout",w:"1020",h:"350",mdxType:"Image"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"We have an option in every integration ",(0,n.kt)("strong",{parentName:"p"},'"Timeline"')," where you can check integration success or error status."),(0,n.kt)(i.Z,{src:"actions/vbout/integration-dashboard",alt:"Vbout",w:"1020",h:"350",mdxType:"Image"}),(0,n.kt)(i.Z,{src:"actions/vbout/timeline",alt:"Vbout",w:"1020",h:"350",mdxType:"Image"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Also, you can ",(0,n.kt)("inlineCode",{parentName:"p"},"Edit"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Clone"),", and, ",(0,n.kt)("inlineCode",{parentName:"p"},"Delete")," the integration."),(0,n.kt)(i.Z,{src:"actions/vbout/edit-clone",alt:"Vbout",w:"1020",h:"350",mdxType:"Image"}))),(0,n.kt)("h2",{id:"actions"},"Actions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Update Contact:")," If the user already exists on your Vbout account, It will update the contacts with other field information based on the email address.",(0,n.kt)(i.Z,{src:"actions/vbout/update",alt:"Vbout",w:"1020",h:"350",mdxType:"Image"}))),(0,n.kt)(r.Z,{mdxType:"Feedback"}))}d.isMDXComponent=!0}}]);