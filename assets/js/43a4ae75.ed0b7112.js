"use strict";(self.webpackChunknear_lake_dock=self.webpackChunknear_lake_dock||[]).push([[6433],{2876:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return h},toc:function(){return d}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=["components"],l={slug:"2022-03-25-updates",title:"Mar 25, 2022 Updates",authors:["khorolets","telezhnaya","frol"],tags:["updates"]},s=void 0,h={permalink:"/near-lake-dock/blog/2022-03-25-updates",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-03-25-updates.md",source:"@site/blog/2022-03-25-updates.md",title:"Mar 25, 2022 Updates",description:"\ud83d\udc4b Hello everyone! It's been a while since the last update. Things went bananas in the world. Data Platform Team is currently safe and continues working. We're pushing the MVP release of NEAR Lake project and working on the refactoring of NEAR Indexer for Explorer. We're changing the data storage for Indexer for Explorer from PostgreSQL to SingleStore, it should improve the stability of the data flow and it should end up improving the stability of NEAR Explorer. At least in terms of data availability and decreasing the possible interruptions.",date:"2022-03-25T00:00:00.000Z",formattedDate:"March 25, 2022",tags:[{label:"updates",permalink:"/near-lake-dock/blog/tags/updates"}],readingTime:1.75,truncated:!0,authors:[{name:"Bohdan Khorolets",title:"Indexer Wizard",url:"https://github.com/khorolets",imageURL:"https://github.com/khorolets.png",key:"khorolets"},{name:"Olga Telezhnaya",title:"Data Wizard",url:"https://github.com/telezhnaya",imageURL:"https://github.com/telezhnaya.png",key:"telezhnaya"},{name:"Vlad Frolov",title:"Data Platform Guru",url:"https://github.com/frol",imageURL:"https://github.com/frol.png",key:"frol"}],frontMatter:{slug:"2022-03-25-updates",title:"Mar 25, 2022 Updates",authors:["khorolets","telezhnaya","frol"],tags:["updates"]},prevItem:{title:"Apr 1, 2022 Updates",permalink:"/near-lake-dock/blog/2022-04-01-updates"},nextItem:{title:"Mar 18, 2022 updates",permalink:"/near-lake-dock/blog/2022-02-18-updates"}},u={authorsImageUrls:[void 0,void 0,void 0]},d=[],p={toc:d};function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\ud83d\udc4b Hello everyone! It's been a while since the last update. Things went bananas in the world. Data Platform Team is currently safe and continues working. We're pushing the MVP release of NEAR Lake project and working on the refactoring of NEAR Indexer for Explorer. We're changing the data storage for Indexer for Explorer from PostgreSQL to SingleStore, it should improve the stability of the data flow and it should end up improving the stability of NEAR Explorer. At least in terms of data availability and decreasing the possible interruptions."),(0,o.kt)("p",null,"Since the previous update:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We continue backfilling the data for NEAR Lake to AWS S3. You can see the updates in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/near/near-lake/issues/8"},"this issue"),". For the record, we fill in some historical data for mainnet and testnet. All the fresh data is already available. (@khorolets)"),(0,o.kt)("li",{parentName:"ul"},"Small yet important improvement on the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/near/near-lake-framework/pull/11"},"near-lake-framework")," has been delivered. This will ensure the user gets consistent data without any gaps. (@khorolets)"),(0,o.kt)("li",{parentName:"ul"},"Also, today we have added some useful debug logging to NEAR Lake Framework (@khorolets)"),(0,o.kt)("li",{parentName:"ul"},"We have done some cost estimation to find out how much money a user will need to run a single instance of an indexer on top of NEAR Lake Framework. The numbers are quite exciting. Approximately $18.15 per month. See ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/near/near-lake-framework#cost-estimates"},"the README section and explanation")," by yourself. @(khorolets)"),(0,o.kt)("li",{parentName:"ul"},"Ah, and we have launched a small project ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/khorolets/near-lake-pulse"},(0,o.kt)("inlineCode",{parentName:"a"},"near-lake-pulse"))," just to check if we have all the data stored on S3 consistently. The project is providing an endpoint with metrics for Prometheus. The source code might be used for inspiration (@khorolets)"),(0,o.kt)("li",{parentName:"ul"},"We are moving forward to the public announcement of NEAR Lake, probably next week. We're going to invite early adopters. Stay tuned!"),(0,o.kt)("li",{parentName:"ul"},"We have added a new table at ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/near/near-analytics/commit/9e2e6f774a42909d23c4cfda805f88cd84333304"},"near-analytics"),", it gives the understanding of average gas burnt between transactions (@telezhnaya)"),(0,o.kt)("li",{parentName:"ul"},"Meanwhile we are writing/rewriting NEAR Indexer for Explorer to NEAR Lake and SingleStore as a storage ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/telezhnaya/near-lake-flows-into-sql-base"},"here")," (@telezhnaya)")),(0,o.kt)("p",null,"It's been a tough month for everyone. Anyway, we are back online and keep rocking \ud83e\udd18. Stay tuned! See you around!"))}m.isMDXComponent=!0}}]);