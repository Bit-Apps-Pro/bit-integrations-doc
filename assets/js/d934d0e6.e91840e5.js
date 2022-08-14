"use strict";(self.webpackChunkbit_integrations_documentation=self.webpackChunkbit_integrations_documentation||[]).push([[3652],{76301:(t,e,i)=>{i.d(e,{Z:()=>a});var o=i(67294),n=i(36136);function a(t){let{src:e,w:i,h:a,alt:r,youtube:l}=t;return l?n.Z.canUseDOM?o.createElement("lite-youtube",{class:"youtube-vdo",videoid:e}):o.createElement(o.Fragment,null):o.createElement("video",{preload:"auto",width:"100%",autoPlay:!0,controls:!0,muted:!0},o.createElement("source",{src:"/video/"+e+".mp4",type:"video/mp4"}))}},32696:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var o=i(87462),n=(i(67294),i(3905)),a=i(56251),r=(i(76301),i(1993));const l={id:"twilio",title:"Authorization Process With Twilio",sidebar_label:"Twilio",slug:"/integrations/twilio"},p=void 0,s={unversionedId:"actions/twilio",id:"actions/twilio",title:"Authorization Process With Twilio",description:"Note: Twilio is only available on the pro version.",source:"@site/docs/actions/twilio.mdx",sourceDirName:"actions",slug:"/integrations/twilio",permalink:"/integrations/twilio",draft:!1,editUrl:"https://github.com/Bit-Apps-Pro/bit-integrations-doc/blob/main/docs/actions/twilio.mdx",tags:[],version:"current",frontMatter:{id:"twilio",title:"Authorization Process With Twilio",sidebar_label:"Twilio",slug:"/integrations/twilio"},sidebar:"someSidebar",previous:{title:"Tutor LMS",permalink:"/integrations/tutor-lms"},next:{title:"Vbout",permalink:"/integrations/vbout"}},m={},c=[{value:"Process of Authorization and Integration",id:"process-of-authorization-and-integration",level:2}],k={toc:c};function u(t){let{components:e,...i}=t;return(0,n.kt)("wrapper",(0,o.Z)({},k,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note: Twilio is only available on the pro version."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"To integrate with Twilio follow, the below steps."))),(0,n.kt)("h2",{id:"process-of-authorization-and-integration"},"Process of Authorization and Integration"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Search & Select ",(0,n.kt)("strong",{parentName:"p"},"Twilio")," from the actions pages"),(0,n.kt)(a.Z,{src:"actions/twilio/select-action-twilio",alt:"Twilio",w:"1020",h:"350",mdxType:"Image"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Integration Name:")," Set the proper integration name. Default it's taken ",(0,n.kt)("strong",{parentName:"p"},"Twilio"),"."),(0,n.kt)(a.Z,{src:"actions/twilio/integration-name",alt:"Twilio",w:"1020",h:"350",mdxType:"Image"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After that, you have to copy the ",(0,n.kt)("em",{parentName:"p"},"Account SID"),", ",(0,n.kt)("em",{parentName:"p"},"Auth Token"),", and ",(0,n.kt)("em",{parentName:"p"},"From (Phone Number)")," from your Twilio account & paste on the field.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"To get the Account SID, Auth Token, and from (Phone Number),")," "))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"click on ",(0,n.kt)("inlineCode",{parentName:"p"},"Twilio Console")," or go to ",(0,n.kt)("strong",{parentName:"p"},"Twilio console Dashboard"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"click on ",(0,n.kt)("em",{parentName:"p"},"Account")," => ",(0,n.kt)("em",{parentName:"p"},"API Keys & Tokens"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Now copy the ",(0,n.kt)("em",{parentName:"p"},"Account SID"),", ",(0,n.kt)("em",{parentName:"p"},"Auth Token")," and paste it into the integration\u2019s dashboard. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Enter your twilio phone number ",(0,n.kt)("em",{parentName:"p"},"From (Phone Number)")," field")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"\u201cAuthorize\u201d")," button."),(0,n.kt)(a.Z,{src:"actions/twilio/click-twilio-console",alt:"Twilio",w:"1020",h:"350",mdxType:"Image"}),(0,n.kt)(a.Z,{src:"actions/twilio/create-api",alt:"Twilio",w:"1020",h:"350",mdxType:"Image"}),(0,n.kt)(a.Z,{src:"actions/twilio/authorize",alt:"Twilio",w:"1020",h:"350",mdxType:"Image"}))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"From (Phone Number) means Sender Phone Number")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Next"))," to set up the other integration settings ahead.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After completing the authorization process, you will find the Map Field option. You have to map ",(0,n.kt)("strong",{parentName:"p"},"To (Phone Number)"),", and ",(0,n.kt)("strong",{parentName:"p"},"Message")," fields with the related Twilio field.  Now, click on the ",(0,n.kt)("inlineCode",{parentName:"p"},"Next")," button to move forward for further settings. "),(0,n.kt)(a.Z,{src:"actions/twilio/twilio-field-map",alt:"Twilio",w:"1020",h:"350",mdxType:"Image"}))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"To (Phone Number) means Receiver Phone Number")),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Now save the integration by clicking the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Finish & Save"))," Button"),(0,n.kt)(a.Z,{src:"actions/twilio/finish-save",alt:"Twilio",w:"1020",h:"350",mdxType:"Image"}))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"If you use Twilio trial account then you must verify the recipient number.",(0,n.kt)("br",{parentName:"p"}),"\n","To verify the recipient number click on the link: ",(0,n.kt)("a",{parentName:"p",href:"https://console.twilio.com/us1/develop/phone-numbers/manage/verified"},"Click here"))),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"We have an option in every integration ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Timeline"))," where you can check integration success or error status."),(0,n.kt)(a.Z,{src:"actions/twilio/twilio-timeline",alt:"Twilio",w:"1020",h:"350",mdxType:"Image"}),(0,n.kt)(a.Z,{src:"actions/twilio/twilio-log",alt:"Twilio",w:"1020",h:"350",mdxType:"Image"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Also, you can ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Edit"))," ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Clone"))," ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Delete"))," the integration."),(0,n.kt)(a.Z,{src:"actions/twilio/twilio-option",alt:"Twilio",w:"1020",h:"350",mdxType:"Image"}))),(0,n.kt)(r.Z,{mdxType:"Feedback"}))}u.isMDXComponent=!0}}]);