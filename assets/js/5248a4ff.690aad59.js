"use strict";(self.webpackChunkbit_integrations_documentation=self.webpackChunkbit_integrations_documentation||[]).push([[7467],{76301:(t,e,i)=>{i.d(e,{Z:()=>o});var a=i(67294),n=i(36136);function o(t){let{src:e,w:i,h:o,alt:r,youtube:s}=t;return s?n.Z.canUseDOM?a.createElement("lite-youtube",{class:"youtube-vdo",videoid:e}):a.createElement(a.Fragment,null):a.createElement("video",{preload:"auto",width:"100%",autoPlay:!0,controls:!0,muted:!0},a.createElement("source",{src:"/video/"+e+".mp4",type:"video/mp4"}))}},18170:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var a=i(87462),n=(i(67294),i(3905)),o=i(56251),r=(i(76301),i(1993));const s={id:"registration",title:"Authorization Process With Registration",sidebar_label:"Registration",slug:"/integrations/registration"},l=void 0,p={unversionedId:"actions/registration",id:"actions/registration",title:"Authorization Process With Registration",description:"Note: User Registration is only available on the pro version.",source:"@site/docs/actions/registration.mdx",sourceDirName:"actions",slug:"/integrations/registration",permalink:"/integrations/registration",draft:!1,editUrl:"https://github.com/Bit-Apps-Pro/bit-integrations-doc/blob/main/docs/actions/registration.mdx",tags:[],version:"current",frontMatter:{id:"registration",title:"Authorization Process With Registration",sidebar_label:"Registration",slug:"/integrations/registration"},sidebar:"someSidebar",previous:{title:"Rapid Mail",permalink:"/integrations/wpcf7-rapidmail"},next:{title:"Restrict Content",permalink:"/integrations/restrict-content"}},c={},m=[{value:"Process of Authorization and Integration",id:"process-of-authorization-and-integration",level:2},{value:"Action type",id:"action-type",level:3}],g={toc:m};function d(t){let{components:e,...i}=t;return(0,n.kt)("wrapper",(0,a.Z)({},g,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note: User Registration is only available on the pro version."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"To integrate with Registration follow, the below steps."))),(0,n.kt)("h2",{id:"process-of-authorization-and-integration"},"Process of Authorization and Integration"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Search & Select ",(0,n.kt)("strong",{parentName:"li"},"Registration")," from the actions pages.",(0,n.kt)(o.Z,{src:"actions/registration/select-action",alt:"Registration",w:"1020",h:"350",mdxType:"Image"}))),(0,n.kt)("h3",{id:"action-type"},"Action type"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"New User Create:")," If you want to create a new user. Then choose to create a new user. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Updated User:")," If you want to change the information of a user, then you will like Update User. It changes information based on username or email.",(0,n.kt)(o.Z,{src:"actions/registration/action-type",alt:"Registration",w:"1020",h:"350",mdxType:"Image"}))),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You have to map Trigger fields with WP default user fields."),(0,n.kt)(o.Z,{src:"actions/registration/map-default-user-field",alt:"Registration",w:"1020",h:"350",mdxType:"Image"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"For a successful full registration there are two types of notifications - ",(0,n.kt)("inlineCode",{parentName:"p"},"User Email Notification")," & ",(0,n.kt)("inlineCode",{parentName:"p"},"Admin Email Notification"),". Also, WP admin can set the ",(0,n.kt)("strong",{parentName:"p"},"WP User Role"),". And you can set ",(0,n.kt)("inlineCode",{parentName:"p"},"auto Login"),", the user login automatically after registration. "),(0,n.kt)(o.Z,{src:"actions/registration/registration-notification",alt:"Registration",w:"1020",h:"350",mdxType:"Image"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Additionally, you can add custom fields to personalize your users' profile. You can create custom fields. After creating custom fields, you have to map it with Trigger fields from the ",(0,n.kt)("inlineCode",{parentName:"p"},"User Meta Field Mapping"),". For that you need the corresponding id of the custom field. "),(0,n.kt)(o.Z,{src:"actions/registration/meta-field-mapping",alt:"Registration",w:"1020",h:"350",mdxType:"Image"}))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Note: If the Username and Password fields are blank then the user will take the value of the email field as the field and the password will be auto-generated."))),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Now save the integration by clicking the ",(0,n.kt)("inlineCode",{parentName:"p"},"Save")," Button.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"We have an option in every integration ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Timeline"))," where you can check integration success or error status."),(0,n.kt)(o.Z,{src:"actions/registration/registration-timeline",alt:"Registration",w:"1020",h:"350",mdxType:"Image"}),(0,n.kt)(o.Z,{src:"actions/registration/registration-log",alt:"Registration",w:"1020",h:"350",mdxType:"Image"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Also, you can ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Edit"))," ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Clone"))," ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Delete"))," the integration."),(0,n.kt)(o.Z,{src:"actions/registration/registration-option",alt:"Registration",w:"1020",h:"350",mdxType:"Image"}))),(0,n.kt)(r.Z,{mdxType:"Feedback"}))}d.isMDXComponent=!0}}]);