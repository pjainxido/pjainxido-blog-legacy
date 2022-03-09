"use strict";(self.webpackChunkgatsby_starter_developer_diary=self.webpackChunkgatsby_starter_developer_diary||[]).push([[813],{4213:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),r=a(5444),l=a(8753),c=function(e){var t=e.author,a=e.tagline;return n.createElement("div",{className:"bio-main w-75"},n.createElement("img",{src:l.Z,style:{maxWidth:"100px"},className:"profile-img",alt:""}),n.createElement("h3",{className:"mt-2 author-bio"},t),n.createElement("small",{className:"text-muted"},a))},s=a(3201),i=function(e){var t=e.contacts;return n.createElement("div",{className:"side-social-links float-left mt-3 mb-3"},n.createElement("a",{className:"text-secondary p-2",href:t.github},n.createElement("span",{title:"GitHub"},n.createElement(s.NML,{size:26,style:{color:"secondary"}}))))},o=a(7286),m=function(e){var t=e.labels,a=e.posts,r=t.map((function(e){var t=0;return a.forEach((function(a){a.node.frontmatter.tags.includes(e.tag)&&(t+=1)})),[e.tag,t]})).filter((function(e){return e[1]>0})).map((function(e){return e[0]}));return n.createElement(n.Fragment,null,n.createElement("h4",null,"Tech Topics"),n.createElement("div",{className:"d-block"},function(e){var a=[];return e.forEach((function(e,r){t.forEach((function(t){e===t.tag&&a.push(n.createElement(o.Z,{key:r,tag:t.tag,tech:t.tech,name:t.name,size:t.size,color:t.color}))}))})),a}(r)))},u=function(){return n.createElement(r.StaticQuery,{query:"703129627",render:function(e){return n.createElement(n.Fragment,null,n.createElement("div",{className:"sidebar-main border-right"},n.createElement(c,{author:e.site.siteMetadata.author,tagline:e.site.siteMetadata.tagline}),n.createElement(i,{contacts:e.site.siteMetadata.contacts}),n.createElement("div",{className:"page-links"},n.createElement(r.Link,{to:"/"},n.createElement("span",{className:"text-dark d-block py-1"},"Blog Home")),n.createElement(r.Link,{to:"/about"},n.createElement("span",{className:"text-dark d-block py-1"},"About")),n.createElement(r.Link,{to:"/projects"},n.createElement("span",{className:"text-dark d-block py-1"},"Projects")),n.createElement(r.Link,{to:"/archive"},n.createElement("span",{className:"text-dark d-block py-1"},"Archive"))),n.createElement("div",{className:"tech-tags mt-4"},n.createElement(m,{labels:e.site.siteMetadata.labels,posts:e.allMarkdownRemark.edges}))))}})}},7286:function(e,t,a){var n=a(7294),r=a(5444);t.Z=function(e){var t=e.tag,a=e.tech,l=e.name,c=e.size,s=e.color;return n.createElement("div",{className:"d-inline-block p-1"},n.createElement(r.Link,{to:"/tags/"+t+"/"},n.createElement("button",{className:"tech-tag text-white"},n.createElement("p",{className:"d-inline"},a," "),n.createElement("div",{className:"d-inline",style:{fontSize:c,color:s}},n.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:c,height:c,style:{fill:""+s}},n.createElement("title",null,a),n.createElement("path",{d:l}))))))}},2184:function(e,t,a){a.r(t);var n=a(7294),r=a(5444),l=a(4165),c=a(1728),s=a(6179),i=a(4213),o=a(7286);t.default=function(e){var t=e.data.allMarkdownRemark.edges,a=e.data.site.siteMetadata.labels,m=e.pageContext,u=m.currentPage,d=1===u,E=u===m.numPages,f=u-1==1?"/":"/"+(u-1).toString(),g="/"+(u+1).toString();return n.createElement(c.Z,null,n.createElement(s.Z,{title:"Home",keywords:["gatsby","javascript","react","web development","blog","graphql"]}),n.createElement("div",{className:"index-main"},n.createElement("div",{className:"sidebar px-4 py-2"},n.createElement(i.Z,null)),n.createElement("div",{className:"post-list-main"},t.map((function(e){var t=e.node.frontmatter.tags;return n.createElement("div",{key:e.node.id,className:"container mt-5"},n.createElement(r.Link,{to:e.node.fields.slug,className:"text-dark"},n.createElement("h2",{className:"title"},e.node.frontmatter.title)),n.createElement("small",{className:"d-block text-info"},n.createElement("i",null," ",(0,l.o)(e.node.frontmatter.date))),n.createElement("p",{className:"mt-3 d-inline"},e.node.excerpt),n.createElement(r.Link,{to:e.node.fields.slug,className:"text-primary"},n.createElement("small",{className:"d-inline-block ml-3"}," Read full post")),n.createElement("div",{className:"d-block"},function(e){var t=[];return e.forEach((function(e,r){a.forEach((function(a){e===a.tag&&t.push(n.createElement(o.Z,{key:r,tag:a.tag,tech:a.tech,name:a.name,size:a.size,color:a.color}))}))})),t}(t)))})),n.createElement("div",{className:"text-center mt-4"},!d&&n.createElement(r.Link,{to:f,rel:"prev",style:{textDecoration:"none"}},n.createElement("span",{className:"text-dark"},"← Previous Page")),!E&&n.createElement(r.Link,{to:g,rel:"next",style:{textDecoration:"none"}},n.createElement("span",{className:"text-dark ml-5"},"Next Page →"))))))}},4165:function(e,t,a){a.d(t,{o:function(){return n}});var n=function(e){var t=new Date,a=new Date(e),n=Math.floor((t.getTime()-a.getTime())/1e3/60);if(n<1)return"방금전";if(n<60)return n+"분전";var r=Math.floor(n/60);if(r<24)return r+"시간전";var l=Math.floor(r/24);if(l<7)return l+"일전";var c=l/7;if(c<5)return Math.floor(c)+"주 전";var s=l/30;if(s<12)return Math.floor(s)+"개월 전";var i=l/365;return Math.floor(i)+"년 전"}}}]);
//# sourceMappingURL=component---src-templates-post-list-js-cb1201e2cbc6d94c94ed.js.map