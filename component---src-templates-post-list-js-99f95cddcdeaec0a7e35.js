"use strict";(self.webpackChunkgatsby_starter_developer_diary=self.webpackChunkgatsby_starter_developer_diary||[]).push([[813],{1034:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),r=a(5444),l=a(8753),c=function(e){var t=e.author,a=e.tagline;return n.createElement("div",{className:"bio-main w-75"},n.createElement("img",{src:l.Z,style:{maxWidth:"100px"},className:"profile-img",alt:""}),n.createElement("h3",{className:"mt-2 author-bio"},t),n.createElement("small",{className:"text-muted"},a))},s=a(7286),i=function(e){var t=e.labels,a=e.posts,r=t.map((function(e){var t=0;return a.forEach((function(a){a.node.frontmatter.tags.includes(e.tag)&&(t+=1)})),[e.tag,t]})).filter((function(e){return e[1]>0})).map((function(e){return e[0]}));return n.createElement(n.Fragment,null,n.createElement("h4",null,"Tech Topics"),n.createElement("div",{className:"d-block"},function(e){var a=[];return e.forEach((function(e,r){t.forEach((function(t){e===t.tag&&a.push(n.createElement(s.Z,{key:r,tag:t.tag,tech:t.tech,name:t.name,size:t.size,color:t.color}))}))})),a}(r)))},m=function(){return n.createElement(r.StaticQuery,{query:"2020347807",render:function(e){return n.createElement(n.Fragment,null,n.createElement("div",{className:"sidebar-main border-right"},n.createElement(c,{author:e.site.siteMetadata.author,tagline:e.site.siteMetadata.tagline}),n.createElement("div",{className:"page-links"},n.createElement(r.Link,{to:"/"},n.createElement("span",{className:"d-block py-1 link-dark"},"Blog Home")),n.createElement(r.Link,{to:"/projects"},n.createElement("span",{className:"d-block py-1 link-dark"},"Projects")),n.createElement(r.Link,{to:"/archive"},n.createElement("span",{className:"d-block py-1 link-dark"},"Archive"))),n.createElement("div",{className:"tech-tags mt-4"},n.createElement(i,{labels:e.site.siteMetadata.labels,posts:e.allMarkdownRemark.edges}))))}})}},9902:function(e,t,a){var n=a(7294),r=a(7286);t.Z=function(e){return e.tags.map((function(e,t){return n.createElement(r.Z,{key:t,tag:e})}))}},7286:function(e,t,a){var n=a(7294),r=a(5444);t.Z=function(e){var t=e.tag;e.tech,e.name,e.size,e.color,e.count;return n.createElement("div",{className:"d-inline-block p-1"},n.createElement(r.Link,{to:"/tags/"+t+"/"},n.createElement("button",{className:"tech-tag text-white"},n.createElement("p",{className:"d-inline"},"#"+t," "))))}},2184:function(e,t,a){a.r(t);var n=a(7294),r=a(5444),l=a(4165),c=a(1728),s=a(6179),i=a(1034),m=a(9902);a(7286);t.default=function(e){var t=e.data.allMarkdownRemark.edges,a=e.pageContext,o=a.currentPage,u=1===o,d=o===a.numPages,f=o-1==1?"/":"/"+(o-1).toString(),E="/"+(o+1).toString();return n.createElement(c.Z,null,n.createElement(s.Z,{title:"Home",keywords:["gatsby","javascript","react","web development","blog","graphql"]}),n.createElement("div",{className:"index-main"},n.createElement("div",{className:"sidebar px-4 py-2"},n.createElement(i.Z,null)),n.createElement("div",{className:"post-list-main"},t.map((function(e){var t=e.node.frontmatter.tags;return n.createElement("div",{key:e.node.id,className:"container mt-5"},n.createElement(r.Link,{to:e.node.fields.slug},n.createElement("h2",{className:"title"},e.node.frontmatter.title)),n.createElement("small",{className:"d-block text-info"},n.createElement("i",null," ",(0,l.o)(e.node.frontmatter.date))),n.createElement("p",{className:"mt-3 d-inline"},e.node.excerpt),n.createElement(r.Link,{to:e.node.fields.slug,className:"text-primary"},n.createElement("small",{className:"d-inline-block ml-3"}," Read full post")),n.createElement("div",{className:"d-block"},n.createElement(m.Z,{tags:t})))})),n.createElement("div",{className:"text-center mt-4"},!u&&n.createElement(r.Link,{to:f,rel:"prev",style:{textDecoration:"none"}},n.createElement("span",{className:"text-dark"},"← Previous Page")),!d&&n.createElement(r.Link,{to:E,rel:"next",style:{textDecoration:"none"}},n.createElement("span",{className:"text-dark ml-5"},"Next Page →"))))))}},4165:function(e,t,a){a.d(t,{o:function(){return n}});var n=function(e){var t=new Date,a=new Date(e),n=Math.floor((t.getTime()-a.getTime())/1e3/60);if(n<1)return"방금전";if(n<60)return n+"분전";var r=Math.floor(n/60);if(r<24)return r+"시간전";var l=Math.floor(r/24);if(l<7)return l+"일전";var c=l/7;if(c<5)return Math.floor(c)+"주 전";var s=l/30;if(s<12)return Math.floor(s)+"개월 전";var i=l/365;return Math.floor(i)+"년 전"}}}]);
//# sourceMappingURL=component---src-templates-post-list-js-99f95cddcdeaec0a7e35.js.map