"use strict";(self.webpackChunkgatsby_starter_developer_diary=self.webpackChunkgatsby_starter_developer_diary||[]).push([[969],{4213:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7294),l=a(5444),r=a(8753),c=function(e){var t=e.author,a=e.tagline;return n.createElement("div",{className:"bio-main w-75"},n.createElement("img",{src:r.Z,style:{maxWidth:"100px"},className:"profile-img",alt:""}),n.createElement("h3",{className:"mt-2 author-bio"},t),n.createElement("small",{className:"text-muted"},a))},s=a(3201),m=function(e){var t=e.contacts;return n.createElement("div",{className:"side-social-links float-left mt-3 mb-3"},n.createElement("a",{className:"text-secondary p-2",href:t.github},n.createElement("span",{title:"GitHub"},n.createElement(s.NML,{size:26,style:{color:"secondary"}}))))},i=a(7286),o=function(e){var t=e.labels,a=e.posts,l=t.map((function(e){var t=0;return a.forEach((function(a){a.node.frontmatter.tags.includes(e.tag)&&(t+=1)})),[e.tag,t]})).filter((function(e){return e[1]>0})).map((function(e){return e[0]}));return n.createElement(n.Fragment,null,n.createElement("h4",null,"Tech Topics"),n.createElement("div",{className:"d-block"},function(e){var a=[];return e.forEach((function(e,l){t.forEach((function(t){e===t.tag&&a.push(n.createElement(i.Z,{key:l,tag:t.tag,tech:t.tech,name:t.name,size:t.size,color:t.color}))}))})),a}(l)))},d=function(){return n.createElement(l.StaticQuery,{query:"703129627",render:function(e){return n.createElement(n.Fragment,null,n.createElement("div",{className:"sidebar-main border-right"},n.createElement(c,{author:e.site.siteMetadata.author,tagline:e.site.siteMetadata.tagline}),n.createElement(m,{contacts:e.site.siteMetadata.contacts}),n.createElement("div",{className:"page-links"},n.createElement(l.Link,{to:"/"},n.createElement("span",{className:"text-dark d-block py-1"},"Blog Home")),n.createElement(l.Link,{to:"/about"},n.createElement("span",{className:"text-dark d-block py-1"},"About")),n.createElement(l.Link,{to:"/projects"},n.createElement("span",{className:"text-dark d-block py-1"},"Projects")),n.createElement(l.Link,{to:"/archive"},n.createElement("span",{className:"text-dark d-block py-1"},"Archive"))),n.createElement("div",{className:"tech-tags mt-4"},n.createElement(o,{labels:e.site.siteMetadata.labels,posts:e.allMarkdownRemark.edges}))))}})}},7286:function(e,t,a){var n=a(7294),l=a(5444);t.Z=function(e){var t=e.tag,a=e.tech,r=e.name,c=e.size,s=e.color;return n.createElement("div",{className:"d-inline-block p-1"},n.createElement(l.Link,{to:"/tags/"+t+"/"},n.createElement("button",{className:"tech-tag text-white"},n.createElement("p",{className:"d-inline"},a," "),n.createElement("div",{className:"d-inline",style:{fontSize:c,color:s}},n.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:c,height:c,style:{fill:""+s}},n.createElement("title",null,a),n.createElement("path",{d:r}))))))}},5847:function(e,t,a){a.r(t);var n=a(7294),l=a(5444),r=a(1728),c=a(6179),s=a(4213),m=a(7286);t.default=function(e){var t=e.pageContext,a=e.data,i=a.allMarkdownRemark.edges,o=a.site.siteMetadata.labels;console.log(t.tag);var d=t.tag,u=a.allMarkdownRemark.totalCount,E=u+" post"+(1===u?"":"s")+' tagged with "'+d+'"';return n.createElement(r.Z,null,n.createElement(c.Z,{title:"Home",keywords:["gatsby","javascript","react","web development","node.js","graphql"]}),n.createElement("div",{className:"index-main"},n.createElement("div",{className:"sidebar px-4 py-2"},n.createElement(s.Z,null)),n.createElement("div",{className:"post-list-main"},n.createElement("i",null,n.createElement("h2",{className:"heading"},E)),i.map((function(e){var t=e.node.frontmatter.tags;return n.createElement("div",{key:e.node.id,className:"container mt-5"},n.createElement(l.Link,{to:e.node.fields.slug,className:"text-dark"},n.createElement("h2",{className:"heading"},e.node.frontmatter.title)),n.createElement("small",{className:"d-block text-info"},"Posted on ",e.node.frontmatter.date),n.createElement("p",{className:"mt-3 d-inline"},e.node.excerpt),n.createElement(l.Link,{to:e.node.fields.slug,className:"text-primary"},n.createElement("small",{className:"d-inline-block ml-3"}," Read full post")),n.createElement("div",{className:"d-block"},function(e){var t=[];return e.forEach((function(e,a){o.forEach((function(l){e===l.tag&&t.push(n.createElement(m.Z,{key:a,tag:l.tag,tech:l.tech,name:l.name,size:l.size,color:l.color}))}))})),t}(t)))})))))}}}]);
//# sourceMappingURL=component---src-templates-tag-js-a888c71c8935d4655bd3.js.map