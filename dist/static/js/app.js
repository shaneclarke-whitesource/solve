webpackJsonp([1],{"Dt+5":function(e,t){e.exports="data:image/svg+xml;base64,PCEtLSBCeSBTYW0gSGVyYmVydCAoQHNoZXJiKSwgZm9yIGV2ZXJ5b25lLiBNb3JlIEAgaHR0cDovL2dvby5nbC83QUp6YkwgLS0+Cjxzdmcgd2lkdGg9IjM4IiBoZWlnaHQ9IjM4IiB2aWV3Qm94PSIwIDAgMzggMzgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjguMDQyJSIgeTE9IjAlIiB4Mj0iNjUuNjgyJSIgeTI9IjIzLjg2NSUiIGlkPSJhIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI2M0MDAyMiIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjAlIi8+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNjNDAwMjIiIHN0b3Atb3BhY2l0eT0iLjYzMSIgb2Zmc2V0PSI2My4xNDYlIi8+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNjNDAwMjIiIG9mZnNldD0iMTAwJSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEgMSkiPgogICAgICAgICAgICA8cGF0aCBkPSJNMzYgMThjMC05Ljk0LTguMDYtMTgtMTgtMTgiIGlkPSJPdmFsLTIiIHN0cm9rZT0idXJsKCNhKSIgc3Ryb2tlLXdpZHRoPSIyIj4KICAgICAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtCiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIgogICAgICAgICAgICAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAgICAgICAgICAgICAgICBmcm9tPSIwIDE4IDE4IgogICAgICAgICAgICAgICAgICAgIHRvPSIzNjAgMTggMTgiCiAgICAgICAgICAgICAgICAgICAgZHVyPSIwLjlzIgogICAgICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgICAgICAgICA8L3BhdGg+CiAgICAgICAgICAgIDxjaXJjbGUgZmlsbD0iI2M0MDAyMiIgY3g9IjM2IiBjeT0iMTgiIHI9IjEiPgogICAgICAgICAgICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0KICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iCiAgICAgICAgICAgICAgICAgICAgdHlwZT0icm90YXRlIgogICAgICAgICAgICAgICAgICAgIGZyb209IjAgMTggMTgiCiAgICAgICAgICAgICAgICAgICAgdG89IjM2MCAxOCAxOCIKICAgICAgICAgICAgICAgICAgICBkdXI9IjAuOXMiCiAgICAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgICAgICAgICAgIDwvY2lyY2xlPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="},G2pW:function(e,t,s){e.exports='<div>\n  <img v-if="loading && !fetchError" class="rsPage-loader" src="'+s("Dt+5")+'" alt="rackspace loader" />\n\n  <div class="rsTl-contentContainer container container-xl rsTl-topic-section" v-if="topic.header && !loading && !fetchError">\n    <h1 v-html="topic.header"></h1>\n    <h3 v-html="topic.desc"></h3>\n  </div>\n\n  <div v-if="!loading && !fetchError && filteredContent.total > 0">\n    <div class="rsTl-feature-header" v-if="featured.first">\n      <picture class="rsTl-feature-headerBackground">\n         \x3c!--[if IE 9]><video style="display: none;"><![endif]--\x3e\n        <source class="rsTl-feature-headerBackgroundContent" :srcset="featured.first.banner_1600 + \' 1x\'" media="all and (min-width: 1280px)" type="image/jpeg"/>\n        <source class="rsTl-feature-headerBackgroundContent" :srcset="featured.first.banner_1280 + \' 1x\'" media="all and (min-width: 992px) and (max-width: 1279px)" type="image/jpeg"/>\n        <source class="rsTl-feature-headerBackgroundContent" :srcset="featured.first.banner_992 + \' 1x\'" media="all and (min-width: 768px) and (max-width: 991px)" type="image/jpeg"/>\n        <source class="rsTl-feature-headerBackgroundContent" :srcset="featured.first.banner_768 + \' 1x\'" media="all and (min-width: 480px) and (max-width: 767px)" type="image/jpeg"/>\n        <source class="rsTl-feature-headerBackgroundContent" :srcset="featured.first.banner_480 + \' 1x\'" type="image/jpeg"/>\n        \x3c!--[if IE 9]></video><![endif]--\x3e\n        <img class="rsTl-feature-headerBackgroundContent" :src="featured.first.banner_1280" :alt="featured.first.title">\n      </picture>\n      <div class="rsTl-feature-headerContainer container container-xl">\n        <div class="rsTl-feature-headerInner">\n          <div class="rsTl-feature-text">\n            <span class="rsTl-article-read"><strong>{{ featured.first.field_content_type }}</strong> ({{ featured.first.field_content_length }} {{ \' minute \' + viewAction[featured.first.field_content_type] | translate }})</span>\n            <h1 class="rsTl-feature-title"><a class="rsTl-feature-titleLink" :href="featured.first.alias">{{ featured.first.title }}</a></h1>\n            <p class="rsTl-feature-p" v-html="$options.filters.truncate(featured.first.body, 200)"></p>\n            <p class="rsTl-feature-p">\n              <span class="rsTl-feature-author">{{ featured.first.field_author }}</span> – {{ getDateString(featured.first.field_published_date) }}\n            </p>\n            <p>\n              <a\n                :href="featured.first.alias"\n                class=" button rsTl-feature-btn">\n                {{ ctaText[featured.first.field_content_type] | translate }}\n              </a>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="rsTl-contentContainer container container-xl">\n      <div class="rsTl-article-row" v-if="featured.second">\n        <div class="rsTl-column">\n          <div class="rsTl-featuredLarge-row">\n            <div class="rsTl-featuredLarge-inner">\n              <a class="rsTl-featuredLarge-img" :href="featured.second.alias" :style="{ \'background-image\': \'url(\' + featured.second.solve_secondary + \')\', \'background-position\': \'top right\' }"></a>\n              <div class="rsTl-featuredLarge-text">\n                <span class="rsTl-featuredLarge-type">\n                  <strong>{{ featured.second.field_content_type }}</strong> ({{ featured.second.field_content_length }} {{ \' minute \' + viewAction[featured.second.field_content_type] | translate }})\n                </span>\n                <h3 class="rsTl-relatedTopics-smallHeader"><a class="rsTl-relatedTopics-link" :href="featured.second.alias">{{ featured.second.title }}</a></h3>\n                <p v-html="$options.filters.truncate(featured.second.body, 200)"></p>\n                <p>\n                  <a\n                    :href="featured.second.alias"\n                    class=" button rsTl-secondary-btn">\n                    {{ ctaText[featured.second.field_content_type] | translate }}\n                  </a>\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="rsTl-article-row" v-if="filteredContent.full.length > 0">\n        <div class="rsTl-column">\n          <div class="rsTl-relatedTopics-row rsTl-relatedTopics-2colRow">\n            <div class="rsTl-relatedTopics-col" v-for="(article, index) in filteredContent.trimmed" :style="getGridStyles(index)" >\n              <div class="rsTl-relatedTopics-feature">\n                <a class="rsTl-relatedTopics-img" :href="article.alias" :style="{ \'background-image\' : \'url(\' + article.solve_tertiary + \')\', \'background-position\': \'top right\' }"></a>\n                <div class="rsTl-relatedTopics-text">\n                  <span class="rsTl-relatedTopics-type">\n                    <strong>{{ article.field_content_type }}</strong> ({{ article.field_content_length }} {{ \' minute \' + viewAction[article.field_content_type] | translate }})\n                  </span>\n                  <h3 class="rsTl-relatedTopics-smallHeader"><a class="rsTl-relatedTopics-link" :href="article.alias">{{ article.title }}</a></h3>\n                  <a\n                    :href="article.alias"\n                    class=" button rsTl-tertiary-btn">\n                    {{ ctaText[article.field_content_type] | translate }}\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <p>\n        <a\n          href="#"\n          v-if="visibleContent < filteredContent.full.length"\n          @click.prevent="loadMore">\n          {{ \'Load More Posts\' | translate }}\n        </a>\n      </p>\n    </div>\n  </div>\n  <div v-if="!loading && filteredContent.total < 1">\n    {{ \'No articles could be found. Please try again later.\' | translate }}\n  </div>\n  <div v-if="!loading && fetchError" class="rsTl-error">\n    {{ fetchError | translate }}\n  </div>\n</div>\n'},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("lRwf"),o=s.n(i),a=s("pZOg"),h=s.n(a),r=s("M4fF"),l=s.n(r),n=function(e){return e?l.a.startCase(e):""},d=function(e){return e?l.a.unescape(e):""},p=function(e){return Drupal.t(e)},g=function(e,t,s){var i=s||"...",o=document.createElement("div");o.innerHTML=e;var a=o.textContent;return a.length>t?a.slice(0,t)+i:a},u=(s("n46F"),s("hvFc"),s("//Fk")),c=s.n(u),f=s("Xxa5"),m=s.n(f),b=s("exGp"),y=s.n(b),_=s("mtWM"),T=s.n(_),I=s("RJho"),v=s.n(I),A=s("tp/q"),C=s.n(A),j=s("G2pW"),x=o.a.component("solve-overview-content",{template:j,name:"solve-overview-content",mixins:[{methods:{formatDate:function(e){var t=e.getDate(),s=e.getMonth(),i=e.getFullYear();return["January","February","March","April","May","June","July","August","September","October","November","December"][s]+" "+t+", "+i}}}],computed:{filteredContent:function(){var e=l.a.cloneDeep(this.content),t=e.length,s=1;return this.topic.header||(s=2),e&&t>s?e.splice(0,s):e=[],{trimmed:e?e.slice(0,this.visibleContent):[],full:e||[],total:t}},viewAction:function(){return{Video:"watch",Article:"read",Podcast:"listen",Infographic:"read"}},ctaText:function(){return{Video:"Watch the Video",Article:"Read the Article",Podcast:"Listen Now",Infographic:"Read Now"}}},data:function(){return{loading:!1,fetchError:!1,moreAmount:4,visibleContent:4,topic:{header:!1,desc:!1},featured:{first:null,second:null},content:null}},created:function(){this.getData()},methods:{filterByTopic:function(){var e=this;return y()(m.a.mark(function t(){var s,i,o;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0===(s=window.rsSolveFilterTopic)){t.next=8;break}return t.next=4,e.getCategories();case 4:i=t.sent,(o=l.a.find(i,function(e){return e.tid===s}))&&(e.topic.header=o.name,e.topic.desc=o.description),e.content=l.a.filter(e.content,function(e){return e.field_tl_.split(":::").indexOf(window.rsSolveFilterTopic)>-1});case 8:case"end":return t.stop()}},t,e)}))()},getCategories:function(){var e=this;return y()(m.a.mark(function t(){var s,i;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(s={},"development"!==e.$env){t.next=7;break}return t.next=4,new c.a(function(e){setTimeout(function(){e(C.a)},1e3)});case 4:s=t.sent,t.next=11;break;case 7:return t.next=9,T()({method:"get",url:"api/thought-leadership-categories?_format=json"});case 9:i=t.sent,s=i.data;case 11:return t.abrupt("return",s);case 12:case"end":return t.stop()}},t,e)}))()},getData:function(){var e=this;return y()(m.a.mark(function t(){var s;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,e.fetchError=!1,t.next=5,e.fetchData();case 5:return e.content=t.sent,t.next=8,e.filterByTopic();case 8:e.sortData(),s=0,e.topic.header||(e.featured.first=e.content[0],s=1),e.featured.second=e.content[s],t.next=18;break;case 14:t.prev=14,t.t0=t.catch(0),e.fetchError=t.t0.message||"No articles could be found. Please try again later.",e.$log.error(t.t0.message||t.t0);case 18:return t.prev=18,e.loading=!1,t.finish(18);case 21:case"end":return t.stop()}},t,e,[[0,14,18,21]])}))()},fetchData:function(){var e=this;return y()(m.a.mark(function t(){var s,i;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(s={},"development"!==e.$env){t.next=7;break}return t.next=4,new c.a(function(e){setTimeout(function(){e(v.a)},2e3)});case 4:s=t.sent,t.next=11;break;case 7:return t.next=9,T()({method:"get",url:"api/thought-leadership?_format=json"});case 9:i=t.sent,s=i.data;case 11:return t.abrupt("return",s);case 12:case"end":return t.stop()}},t,e)}))()},sortData:function(){this.content=this.content.sort(function(e,t){return new Date(e.field_published_date)-new Date(t.field_published_date)}).reverse()},loadMore:function(){this.visibleContent<this.filteredContent.full.length&&(this.visibleContent+=this.moreAmount)},getDateString:function(e){return this.formatDate(new Date(e))},getGridStyles:function(e){return{"grid-row":Math.floor(e/2)+1,"grid-column":e%2+1}}}});o.a.use(h.a,{logLevels:"error",stringifyArguments:!0,showLogLevel:!0,showMethodName:!0,showConsoleColors:!0}),o.a.filter("capitalize",n),o.a.filter("unescape",d),o.a.filter("truncate",g),o.a.filter("translate",p),o.a.prototype.$env="production",o.a.config.productionTip=!1,o.a.config.devtools=!0,o.a.config.performance=!0,new o.a({el:"#rsSolve",components:{App:x},template:"<App/>"})},RJho:function(e,t){e.exports=[{title:"Thought Leadership: Sample",alias:"/thought-leadership/sample-thought-leadership?a",type:"thought_leadership",header:"<p>Thought Leadership Sample</p>\n",body:"<p>This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. </p>\n<p>This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post.</p>",field_youtube:'<img src="/sites/default/files/youtube/SyzX5Z0A14k.jpg" alt="Embedded thumbnail for Thought Leadership: Sample">\n\n',field_content_type:"Video",field_content_length:"5",field_author:"Mike Rustyellow, Raj-Hair Awvawlos",field_modified_date:"2019-10-24T16:00:55-05:00",field_published_date:"2019-10-01T11:20:57-05:00",field_tl_:"268:::269:::270:::272:::273",banner_1600:"/static/hero-1.jpg?1600",banner_1280:"/static/hero-1.jpg?1280",banner_992:"/static/hero-1.jpg?992",banner_768:"/static/hero-1.jpg?768",banner_480:"/static/hero-1.jpg?480",solve_secondary:"/static/hero-1.jpg?solve_secondary",solve_tertiary:"/static/hero-1.jpg?solve_tertiary"},{title:"Two: This is a Semi Long Title",alias:"/thought-leadership/sample-thought-leadership?b",type:"thought_leadership",header:"<p>Two</p>\n",body:"<p>This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. </p>\n<p>This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post.</p>",field_youtube:'<img src="/sites/default/files/youtube/SyzX5Z0A14k.jpg" alt="Embedded thumbnail for Thought Leadership: Sample">\n\n',field_content_type:"Video",field_content_length:"10",field_author:"Mike Rustyellow",field_modified_date:"2019-08-22T16:00:55-05:00",field_published_date:"2019-08-09T11:20:57-05:00",field_tl_:"268",banner_1600:"/static/hero-2.jpg?1600",banner_1280:"/static/hero-2.jpg?1280",banner_992:"/static/hero-2.jpg?992",banner_768:"/static/hero-2.jpg?768",banner_480:"/static/hero-2.jpg?480",solve_secondary:"/static/hero-2.jpg?solve_secondary",solve_tertiary:"/static/hero-2.jpg?solve_tertiary"},{title:"Three: This is a Semi Long Title",alias:"/thought-leadership/sample-thought-leadership?c",type:"thought_leadership",header:"<p>Three</p>\n",body:"<p>This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. </p>\n<p>This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post.</p>",field_youtube:'<img src="/sites/default/files/youtube/SyzX5Z0A14k.jpg" alt="Embedded thumbnail for Thought Leadership: Sample">\n\n',field_content_type:"Video",field_content_length:"14",field_author:"Mike Rustyellow",field_modified_date:"2019-09-22T16:00:55-05:00",field_published_date:"2019-09-09T11:20:57-05:00",field_tl_:"273",banner_1600:"/static/hero-3.jpg?1600",banner_1280:"/static/hero-3.jpg?1280",banner_992:"/static/hero-3.jpg?992",banner_768:"/static/hero-3.jpg?768",banner_480:"/static/hero-3.jpg?480",solve_secondary:"/static/hero-3.jpg?solve_secondary",solve_tertiary:"/static/hero-3.jpg?solve_tertiary"},{title:"Four: This is a Semi Long Title",alias:"/thought-leadership/sample-thought-leadership?d",type:"thought_leadership",header:"<p>Four</p>\n",body:"<p>This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. </p>\n<p>This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post.</p>",field_youtube:'<img src="/sites/default/files/youtube/SyzX5Z0A14k.jpg" alt="Embedded thumbnail for Thought Leadership: Sample">\n\n',field_content_type:"Video",field_content_length:"14",field_author:"Mike Rustyellow",field_modified_date:"2019-07-22T16:00:55-05:00",field_published_date:"2019-07-09T11:20:57-05:00",field_tl_:"268:::269:::270:::272:::273",banner_1600:"/static/hero-4.jpg?1600",banner_1280:"/static/hero-4.jpg?1280",banner_992:"/static/hero-4.jpg?992",banner_768:"/static/hero-4.jpg?768",banner_480:"/static/hero-4.jpg?480",solve_secondary:"/static/hero-4.jpg?solve_secondary",solve_tertiary:"/static/hero-4.jpg?solve_tertiary"},{title:"Five: This is a Semi Long Title",alias:"/thought-leadership/sample-thought-leadership?e",type:"thought_leadership",header:"<p>Five</p>\n",body:"<p>This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. </p>\n<p>This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post.</p>",field_youtube:'<img src="/sites/default/files/youtube/SyzX5Z0A14k.jpg" alt="Embedded thumbnail for Thought Leadership: Sample">\n\n',field_content_type:"Video",field_content_length:"14",field_author:"Mike Rustyellow",field_modified_date:"2019-06-22T16:00:55-05:00",field_published_date:"2019-06-09T11:20:57-05:00",field_tl_:"268:::269:::270:::272:::273",banner_1600:"/static/hero-5.jpg?1600",banner_1280:"/static/hero-5.jpg?1280",banner_992:"/static/hero-5.jpg?992",banner_768:"/static/hero-5.jpg?768",banner_480:"/static/hero-5.jpg?480",solve_secondary:"/static/hero-5.jpg?solve_secondary",solve_tertiary:"/static/hero-5.jpg?solve_tertiary"},{title:"Six: This is a Semi Long Title",alias:"/thought-leadership/sample-thought-leadership?f",type:"thought_leadership",header:"<p>Six</p>\n",body:"<p>This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. </p>\n<p>This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post.</p>",field_youtube:'<img src="/sites/default/files/youtube/SyzX5Z0A14k.jpg" alt="Embedded thumbnail for Thought Leadership: Sample">\n\n',field_content_type:"Video",field_content_length:"14",field_author:"Mike Rustyellow",field_modified_date:"2019-05-22T16:00:55-05:00",field_published_date:"2019-05-09T11:20:57-05:00",field_tl_:"268:::269:::270:::272:::273",banner_1600:"/static/hero-6.jpg?1600",banner_1280:"/static/hero-6.jpg?1280",banner_992:"/static/hero-6.jpg?992",banner_768:"/static/hero-6.jpg?768",banner_480:"/static/hero-6.jpg?480",solve_secondary:"/static/hero-6.jpg?solve_secondary",solve_tertiary:"/static/hero-6.jpg?solve_tertiary"},{title:"Seven: This is a Semi Long Title",alias:"/thought-leadership/sample-thought-leadership?g",type:"thought_leadership",header:"<p>Seven</p>\n",body:"<p>This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. </p>\n<p>This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post.</p>",field_youtube:'<img src="/sites/default/files/youtube/SyzX5Z0A14k.jpg" alt="Embedded thumbnail for Thought Leadership: Sample">\n\n',field_content_type:"Video",field_content_length:"14",field_author:"Mike Rustyellow",field_modified_date:"2019-04-22T16:00:55-05:00",field_published_date:"2019-04-09T11:20:57-05:00",field_tl_:"268:::269:::270:::272:::273",banner_1600:"/static/castle.jpg?1600",banner_1280:"/static/castle.jpg?1280",banner_992:"/static/castle.jpg?992",banner_768:"/static/castle.jpg?768",banner_480:"/static/castle.jpg?480",solve_secondary:"/static/castle.jpg?solve_secondary",solve_tertiary:"/static/castle.jpg?solve_tertiary"},{title:"Eight: This is a Semi Long Title",alias:"/thought-leadership/sample-thought-leadership?h",type:"thought_leadership",header:"<p>Eight</p>\n",body:"<p>This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. </p>\n<p>This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post.</p>",field_youtube:'<img src="/sites/default/files/youtube/SyzX5Z0A14k.jpg" alt="Embedded thumbnail for Thought Leadership: Sample">\n\n',field_content_type:"Video",field_content_length:"14",field_author:"Mike Rustyellow",field_modified_date:"2019-03-22T16:00:55-05:00",field_published_date:"2019-03-09T11:20:57-05:00",field_tl_:"269:::270:::272:::273",banner_1600:"/static/hero-1.jpg?1600",banner_1280:"/static/hero-1.jpg?1280",banner_992:"/static/hero-1.jpg?992",banner_768:"/static/hero-1.jpg?768",banner_480:"/static/hero-1.jpg?480",solve_secondary:"/static/hero-1.jpg?solve_secondary",solve_tertiary:"/static/hero-1.jpg?solve_tertiary"},{title:"Nine: This is a Semi Long Title",alias:"/thought-leadership/sample-thought-leadership?i",type:"thought_leadership",header:"<p>Nine</p>\n",body:"<p>This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. </p>\n<p>This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post.</p>",field_youtube:'<img src="/sites/default/files/youtube/SyzX5Z0A14k.jpg" alt="Embedded thumbnail for Thought Leadership: Sample">\n\n',field_content_type:"Video",field_content_length:"14",field_author:"Mike Rustyellow",field_modified_date:"2019-02-22T16:00:55-05:00",field_published_date:"2019-02-09T11:20:57-05:00",field_tl_:"268:::269:::270:::272:::273",banner_1600:"/static/hero-3.jpg?1600",banner_1280:"/static/hero-3.jpg?1280",banner_992:"/static/hero-3.jpg?992",banner_768:"/static/hero-3.jpg?768",banner_480:"/static/hero-3.jpg?480",solve_secondary:"/static/hero-3.jpg?solve_secondary",solve_tertiary:"/static/hero-3.jpg?solve_tertiary"},{title:"Ten: This is a Semi Long Title",alias:"/thought-leadership/sample-thought-leadership?j",type:"thought_leadership",header:"<p>Ten</p>\n",body:"<p>This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. </p>\n<p>This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post.</p>",field_youtube:'<img src="/sites/default/files/youtube/SyzX5Z0A14k.jpg" alt="Embedded thumbnail for Thought Leadership: Sample">\n\n',field_content_type:"Video",field_content_length:"14",field_author:"Mike Rustyellow",field_modified_date:"2019-01-22T16:00:55-05:00",field_published_date:"2019-01-09T11:20:57-05:00",field_tl_:"268:::269:::270:::272:::273",banner_1600:"/static/hero-5.jpg?1600",banner_1280:"/static/hero-5.jpg?1280",banner_992:"/static/hero-5.jpg?992",banner_768:"/static/hero-5.jpg?768",banner_480:"/static/hero-5.jpg?480",solve_secondary:"/static/hero-5.jpg?solve_secondary",solve_tertiary:"/static/hero-5.jpg?solve_tertiary"},{title:"Eleven: This is a Semi Long Title",alias:"/thought-leadership/sample-thought-leadership?k",type:"thought_leadership",header:"<p>Eleven</p>\n",body:"<p>This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. </p>\n<p>This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post.</p>",field_youtube:'<img src="/sites/default/files/youtube/SyzX5Z0A14k.jpg" alt="Embedded thumbnail for Thought Leadership: Sample">\n\n',field_content_type:"Video",field_content_length:"14",field_author:"Mike Rustyellow",field_modified_date:"2018-12-22T16:00:55-05:00",field_published_date:"2018-12-09T11:20:57-05:00",field_tl_:"268:::269:::270:::272:::273",banner_1600:"/static/hero-4.jpg?1600",banner_1280:"/static/hero-4.jpg?1280",banner_992:"/static/hero-4.jpg?992",banner_768:"/static/hero-4.jpg?768",banner_480:"/static/hero-4.jpg?480",solve_secondary:"/static/hero-4.jpg?solve_secondary",solve_tertiary:"/static/hero-4.jpg?solve_tertiary"},{title:"Twelve: This is a Semi Long Title",alias:"/thought-leadership/sample-thought-leadership?l",type:"thought_leadership",header:"<p>Twelve</p>\n",body:"<p>This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. </p>\n<p>This is the body for the sample thought leadership post. This is the body for the sample thought leadership post. This is the body for the sample thought leadership post.</p>",field_youtube:'<img src="/sites/default/files/youtube/SyzX5Z0A14k.jpg" alt="Embedded thumbnail for Thought Leadership: Sample">\n\n',field_content_type:"Video",field_content_length:"14",field_author:"Mike Rustyellow",field_modified_date:"2018-11-22T16:00:55-05:00",field_published_date:"2018-11-09T11:20:57-05:00",field_tl_:"268:::269:::270:::272:::273",banner_1600:"/static/hero-2.jpg?1600",banner_1280:"/static/hero-2.jpg?1280",banner_992:"/static/hero-2.jpg?992",banner_768:"/static/hero-2.jpg?768",banner_480:"/static/hero-2.jpg?480",solve_secondary:"/static/hero-2.jpg?solve_secondary",solve_tertiary:"/static/hero-2.jpg?solve_tertiary"}]},hvFc:function(e,t){},lRwf:function(e,t){e.exports=Vue},n46F:function(e,t){e.exports=Zoolander},"tp/q":function(e,t){e.exports=[{tid:"268",name:"Transformation &amp; Trends",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{tid:"269",name:"Innovation",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{tid:"270",name:"Roundtable",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{tid:"272",name:"Inside the Innovator&#039;s Mind",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{tid:"273",name:"What Are You Solving For?",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}]}},["NHnr"]);
//# sourceMappingURL=app.js.map