(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[712],{16867:function(e,s,t){Promise.resolve().then(t.t.bind(t,231,23)),Promise.resolve().then(t.bind(t,75727)),Promise.resolve().then(t.bind(t,35417)),Promise.resolve().then(t.bind(t,34221))},75727:function(e,s,t){"use strict";t.d(s,{default:function(){return U}});var l=t(57437),r=t(2265),n=t(16463),a=t(42477),i=t(31014),c=t(19254),o=t(39343),d=t(27776),u=t(59772),m=t(52178),x=t(84158),h=t(89733),f=t(48185),j=t(97114),g=t(77209),b=t(15183),p=t(49354);let w=u.z.object({email:u.z.string().email()}),v=e=>{let{username:s,price:t}=e;return(0,l.jsxs)(h.z,{onClick:()=>{(0,x.M)({username:s,priceInt:parseInt(t),type:"user"})},className:(0,p.cn)("w-full bg-green-600 hover:bg-green-700",!b.DT&&"max-w-md"),type:"button",children:["Unlock Full Analysis ($",parseInt(t)/100,")"]})},y=()=>{var e;let s=(0,n.useSearchParams)(),t=(0,n.usePathname)(),r=(0,n.useRouter)(),u=(0,o.cI)({resolver:(0,i.F)(w),defaultValues:{email:""}}),x=null!==(e=a.ZP.getFeatureFlag("paywall2"))&&void 0!==e?e:s.get("stripe");async function b(e){let{success:s}=await (0,m.TJ)({username:t,email:e.email});if(s){d.Am.success("You have been added to the newsletter.");let e=new URL(t,window.location.origin);e.searchParams.set("success","true"),r.replace(e.toString()),r.refresh()}else d.Am.error("Something went wrong")}return s.has("success")&&(console.log("Conversion successful"),a.ZP.capture("conversion")),(0,l.jsxs)(f.Zb,{className:(0,p.cn)("relative w-full overflow-hidden rounded-2xl border bg-blue-600 bg-opacity-5 px-4 pb-4"),children:[(0,l.jsxs)(f.Ol,{className:"flex w-full flex-col items-start",children:[(0,l.jsx)(f.ll,{className:"flex w-full items-center justify-between py-2 pb-4 text-2xl",children:(0,l.jsxs)("div",{className:"flex items-center gap-3",children:[(0,l.jsx)(c.Z,{size:24}),(0,l.jsx)("span",{className:"text-xl font-light text-gray-900",children:"Want to see your roast? ️‍\uD83D\uDD25"})]})}),(0,l.jsx)("div",{className:"w-full border-b border-gray-300"})]}),(0,l.jsx)(f.aY,{className:"flex flex-col text-gray-700",children:x&&"control"!==x?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{className:"mb-4",children:"Unlock all insights by purchasing below."}),(0,l.jsx)(v,{username:t,price:x}),(0,l.jsxs)("p",{className:"mt-4 text-sm text-gray-800",children:["Full access includes comprehensive persona analysis, including: ",(0,l.jsx)("strong",{children:"Roast"}),", ",(0,l.jsx)("strong",{children:"Strengths"}),", ",(0,l.jsx)("strong",{children:"Weaknesses"}),","," ",(0,l.jsx)("strong",{children:"Love Life"}),", ",(0,l.jsx)("strong",{children:"Money"}),", ",(0,l.jsx)("strong",{children:"Health"}),", ",(0,l.jsx)("strong",{children:"Biggest Goal"}),", ",(0,l.jsx)("strong",{children:"Colleague Perspective"}),", ",(0,l.jsx)("strong",{children:"Pickup Lines"}),", ",(0,l.jsx)("strong",{children:"Famous Person Comparison"}),", ",(0,l.jsx)("strong",{children:"Previous Life"}),", ",(0,l.jsx)("strong",{children:"Animal Comparison"}),","," ",(0,l.jsx)("strong",{children:"$50 Thing"}),", ",(0,l.jsx)("strong",{children:"Career"}),", and ",(0,l.jsx)("strong",{children:"Life Suggestion"}),"."]})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{className:"mb-4",children:"Unlock all insights by leaving your email address below."}),(0,l.jsx)(j.l0,{...u,children:(0,l.jsxs)("form",{onSubmit:u.handleSubmit(b),className:"w-full space-y-4",children:[(0,l.jsx)(j.Wi,{control:u.control,name:"email",render:e=>{let{field:s}=e;return(0,l.jsxs)(j.xJ,{children:[(0,l.jsx)(j.NI,{children:(0,l.jsx)("div",{className:"flex-center",children:(0,l.jsx)(g.I,{disabled:u.formState.isSubmitting||u.formState.isSubmitSuccessful,className:"w-full border-black",placeholder:"your@email.com",...s})})}),(0,l.jsx)(j.zG,{})]})}}),(0,l.jsx)(h.z,{disabled:u.formState.isSubmitting||u.formState.isSubmitSuccessful,type:"submit",className:"w-full bg-green-600 hover:bg-green-700",children:u.formState.isSubmitting?"Unlocking...":u.formState.isSubmitSuccessful?"Success. Refresh the page.":"Unlock Full Analysis"})]})}),(0,l.jsx)("p",{className:"mt-4 text-xs text-gray-500",children:"By submitting your email, you agree to receive marketing content from Wordware. We'll use your email to send you the full analysis and keep you updated on our products and services."})]})})]})};var N=t(68766);let S={money:"•••• •••••••••••••• •••••• ••• ••••••••••• •• •••••••••••• •• •••••••••• •••••••• ••• •••• ••• ••••••••• •••••••• ••• ••••• ••••••• • ••• •••••• •• •••••••• • ••••••••••••••••• •••• •••••••• •• •••• •••••• ••• ••••••••••• •• •••••••• •••••••••••• •••• •• ••• •• •••• •••••• ••••••••••••• •••• ••••••• •• •••••••• •••••• ••• ••• ••••• •••• •••••••",animal:"•••••••• •••• •• •••••••• ••••• •• •••••• ••••••••• ••••••••••• ••• ••••••• •• •••••••• •••••••• ••••• •••••••••••••• •• ••••••••• ••• ••••••• •••••• •• ••• •••• •••••••• •••• ••••• ••••• •••• •••• ••••• •• ••••• •••• ••••••••• ••••• •• ••••••••••• •••• •• •• •••••••• ••• •••••• ••• ••••••••••• •• •••• ••• ••••••••••• ••••• •••••• ••• ••••••• ••• •••••• ••• •••••••••• •• ••• •••••••••••• •••• ••••••••••",career:"•••••• ••• ••••• •••••• •••• ••• •••• •••• •• •• • ••••••••••••• ••••••••••• •••• •••• •••• •• ••••••••••• •• ••••••••••••• •••• •••••• ••••• •••••••• ••• ••••••• ••••••••••••• ••••• •• •••••••••• •• ••••••• •••• ••••••• ••••• ••••••••••• •••••• •••• ••••••• ••••• •• ••••••• ••••• ••••••• •••••••• •• •••••••••••••••• •••••••• •••••••••• •••••••• ••••••• •••• ••••••••••• •••••• ••• ••••••••••• ••••• • ••••••• ••••••• •••••••• ••••• ••••••••• ••• ••• ••••• •••• •••••• ••••••••••• •••• •••• •• ••••••••••• ••••••••••••",health:"•••• ••••••••• ••••••••• ••• •••• •• ••••••• ••• ••• ••••• ••••••• •••••• •••• •••••••• ••••••• ••••••••••• •••••••• •••••••••• ••••••• •••••••• ••• ••••••••• •••••• ••••••••••• •• •••••••• •••• ••••••••••• ••••••• ••••••• ••••••• •••• •• ••••••• ••• •••• •••••• ••••••••• ••••••••• • •••••• •••• •• • •••••• •••• •• ••• •••••••• ••••••••••••• •••••",loveLife:"••• ••••• ••••• ••• • ••••••••••• •••••••••• •••• ••••••• ••• •••••• •••• ••••• ••• ••••••••••• •••• ••• • ••••••• ••• ••••••••• •••• ••••• ••• •••••••• •••• •••••••••• • •••••••• •• ••••• •••• •••• •• • •••••••• •• ••••••• •••• ••••••• ••• ••••••••••• •••• ••••••••••••••• ••• •••• •••••• ••• •• •••••••• •••• ••••••• •••• •••••• •••• •••••• • ••••••••• ••• •••••••• ••••",strengths:[{title:"•••••••••• ••••••••",subtitle:"•••••••••• ••••••••• ••• ••••• •• •• ••• ••••••••••"},{title:"•••••••••••••• ••••••",subtitle:"•••••• •• •••••• ••• •••• ••••••••"},{title:"•••••••••• •••••••",subtitle:"•••••••• ••••••••••• •• ••• •••• •••••••••"},{title:"••••••••••••",subtitle:"••••• •• ••••••• ••• •••••••••••• ••• ••••••"},{title:"•••••• •••••••",subtitle:"•••••• •••••••• •• ••••• ••• •••••••"}],weaknesses:[{title:"•••••••••••••",subtitle:"••• ••••••••••••• ••••••••• •• • ••••••• •••••••• •••••"},{title:"•••• ••••••• •••••••••",subtitle:"••••••••••• ••••••• •• ••••••• •••••• ••••••••••"},{title:"••••••••• ••••••••",subtitle:"•••••• ••••••••••• •••••• •••• •••••••• ••••"},{title:"•••••••• ••••••••",subtitle:"••• •••••••• •••• ••••••••••• •• ••••••••••• •••• •••••"},{title:"•••••••• •••••••••",subtitle:"••••••••••••• ••••••••• •• ••••••• •• ••••••••••"}],biggestGoal:"•• ••••••••••••• ••• •• •••••••• •••• ••••••••••••• ••••••••••• •••• ••••••••••••• ••••••• ••••• •••• ••• •••• ••• ••••••••••• •• •••••• •••••••• •• ••••••••••",pickupLines:["••• ••• • •••••• •••••••• ••••••• ••••••• ••• •• •••••• ••••••••••","•• •••• •••• ••••••• ••••••• ••• ••••••• •••••••• • ••••••••••","••• •••• •• • •••••••• ••••••• ••••••• •••••••• •••••••••••• •• •• ••••••"],previousLife:"•• • •••••••• ••••• ••••• ••• •••••• •••••• •••••• •••• ••••• •• ••••••••••• •••••• ••• ••••••••••• • ••••••••• •••••••• •• ••••••••••• ••• • •••••••• •• •• ••••• •• ••••• ••••• •••• •• ••••• ••••••• •• •••••••• •••••• ••••••••••••• ••••• •••••••• • ••••• ••••••••••• •• ••• ••••• •••• ••••••• ••••• ••• •••• •••••••••• •• •••• ••••••••• • ••• •••• •••• •••••• •• ••••••••••• •••••",lifeSuggestion:"••••••• ••• ••• •• •••••••••• ••••••• ••• ••• •••• ••••• ••••• •••••••• •• ••••••• •••• ••••••• •• ••••••••• ••••••• ••••• •••••••••• •••• ••••••• •••• ••••••• •••••• ••• ••••••••••••• •••• •••• ••••••••• ••••••••••••• •••• •••••••• •••• ••••• •••• •••••••••••• •••••••• •••• •••• ••••• ••••••• •••••••• •• •••• •••••••••• ••• ••••••••• ••••••••••••",fiftyDollarThing:"• ••••••• ••••••••••• •••• ••••••••• ••••• •• •••• •••• •••••• ••• •• ••• •••••• •••• •• ••••• ••••••• ••••••••••••• ••••••••• • ••••••••••• ••••••••••••• •• •••• ••••••••• •••••• •• ••••• •••• •• •••••• •••• •••• ••• •••• •• •••••••• ••••••••••••••",colleaguePerspective:"•••••••• •••• ••••• •• •••• •••••• • ••••••••••••• • ••••••••••••• ••• ••••••••• •••••••••• ••• •••••••• •••••• •• ••••• ••• •• ••••••••• ••• •••• •••• ••••••• ••• •• ••••• •• ••••••• •••••• ••••• •••••• •••••• •••••••• ••• •••• ••• ••••• ••••• ••••• ••••• ••••••• •••••••• ••••• ••• •••• •• ••• ••••• •••••• •••• •• ••• •••• ••••• •• •••••• ••• •••• ••••• ••••• ••• •••••••••• ••••• ••• •• ••• •••••••• •••••",famousPersonComparison:"••• •••••• •••• •••• ••••• •••••••• ••• •••••• •• • •••••• ••••••••• •••• •••••••••••• •••••• •••••••• •• ••• •••• ••••• • ••••••••• ••••• ••• ••••••••••• • •••• •••••••• •• •••••••• •••••••••••• ••••••••••• ••• • •••••• •••••• •• ••• ••••••••••••• ••••• •• ••• •••• •••• •••• ••••••••• ••• ••••••••••• ••••• •• ••••••• •••••• •••••••• •••• • ••• •• •••••••• ••• •••••••••• ••••••••"};var k=t(35417),P=t(42147),C=t(59617),z=t(26011),F=t(37692),I=t(29021),A=e=>{let{unlocked:s,title:t,icon:a,content:i,colorClass:c,contentKey:o,wide:d=!1,bg:u}=e,{username:m}=(0,n.useParams)(),x="Roast"===t||s,j=(0,r.useCallback)(()=>"string"==typeof i?(0,l.jsx)("div",{className:"space-y-2 ".concat(x?"":"blur-sm"),children:(0,l.jsx)(C.U,{content:i||""},i)}):Array.isArray(i)?(0,l.jsx)("ul",{className:"list-none space-y-2 ".concat(x?"":"blur-sm"),children:i.map((e,s)=>(0,l.jsx)("li",{children:"string"==typeof e?e:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("span",{className:"font-semibold",children:[e.title,":"]})," ",e.subtitle]})},s))}):"object"==typeof i?(0,l.jsx)("ul",{className:"list-none space-y-2 ".concat(x?"":"blur-sm"),children:Object.entries(i).map((e,s)=>{let[t,r]=e;return(0,l.jsxs)("li",{children:[(0,l.jsxs)("span",{className:"font-semibold",children:[t,":"]})," ",r]},s)})}):null,[i,x]);return i?(0,l.jsx)(f.Zb,{className:(0,p.cn)("relative w-full overflow-hidden rounded-2xl border bg-opacity-5 px-4 pb-4",u,d&&"sm:col-span-2"),children:(0,l.jsxs)("div",{className:"flex h-full flex-col justify-between",children:[(0,l.jsxs)("div",{children:[(0,l.jsxs)(f.Ol,{className:"flex w-full flex-col items-start",children:[(0,l.jsxs)(f.ll,{className:"flex w-full items-center justify-between py-2 pb-4 text-2xl",children:[(0,l.jsxs)("div",{className:"flex items-center gap-2",children:[(0,l.jsx)(a,{className:(0,p.cn)("",c),size:26}),(0,l.jsx)("span",{className:"text-xl font-light ".concat(c),children:t})]}),(0,l.jsx)(h.z,{size:"sm",variant:"ghost",className:"border border-transparent transition-all duration-100 hover:border-black hover:bg-transparent ".concat(u," "),asChild:!0,children:(0,l.jsxs)("a",{target:"_blank",className:(0,p.cn)("flex-center gap-2 text-lg text-white"),href:"https://twitter.com/intent/tweet?text=".concat(encodeURIComponent("this is my Twitter Personality analysis by AI Agent, built on @wordware_ai\n\n"),"&url=").concat(encodeURIComponent("https://twitter.wordware.ai/".concat(m,"?section=").concat(o))),children:[(0,l.jsx)(F.K2f,{})," Share"]})})]}),(0,l.jsx)("div",{className:"w-full border-b border-gray-300"})]}),(0,l.jsx)(f.aY,{className:"flex flex-col text-gray-700",children:j()})]}),(0,l.jsxs)(f.eW,{className:"flex items-center justify-end space-x-2",children:[(0,l.jsx)("a",{href:"https://wordware.ai?utm_source=twitterai",children:(0,l.jsx)(I.Z,{emblemOnly:!0,color:"black",width:18})}),(0,l.jsxs)("span",{className:"items-center text-xs",children:["Made with"," ",(0,l.jsx)("a",{href:"https://wordware.ai?utm_source=twitterai",className:"font-semibold underline-offset-4 hover:underline",children:"Wordware"})," ","- AI superpowers for builders"]})]})]})}):null},L=t(84748);let W=e=>{let{unlocked:s,userData:t}=e;return(0,l.jsxs)("div",{className:"w-full max-w-6xl",children:[(0,l.jsx)("div",{className:"text-center text-4xl tracking-widest",children:null==t?void 0:t.emojis}),(0,l.jsx)("div",{className:"mb-16 mt-6 text-center",children:(0,l.jsx)("div",{className:"flex-center w-full",children:(0,l.jsx)("div",{className:"w-full max-w-xl text-lg font-light",children:(0,l.jsx)(C.U,{content:(null==t?void 0:t.about)||""})})})}),(0,l.jsx)("div",{className:"grid grid-cols-1 gap-8 sm:grid-cols-2",children:z.g.map((e,n)=>(0,l.jsxs)(r.Fragment,{children:[!s&&1===n&&(0,l.jsx)(y,{}),1===n&&(0,l.jsx)(L.W,{}),7===n&&(0,l.jsx)(L.W,{}),(0,l.jsx)(A,{...e,content:(null==t?void 0:t[e.contentKey])||"",unlocked:s})]},e.contentKey))})]})};var _=t(8645),U=e=>{var s;let{user:t}=e,{steps:i,result:c}=(0,N.s)(t),o=(0,n.useSearchParams)(),d=null!==(s=a.ZP.getFeatureFlag("paywall2"))&&void 0!==s?s:o.get("stripe"),u=(0,r.useCallback)((e,s)=>{if(e)return!e.roast||s?e:{...e,...S,strengths:S.strengths,weaknesses:S.weaknesses,pickupLines:S.pickupLines}},[]);return(0,l.jsxs)("div",{className:"flex-center flex-col gap-8",children:[(0,l.jsx)(_.Y,{steps:i,result:c,userUnlocked:t.unlocked||!1}),!t.unlocked&&(0,l.jsx)(v,{username:t.username,price:d}),(0,l.jsx)(P.Z,{shareActive:!!(null==c?void 0:c.about),text:"this is my Twitter Personality analysis by AI Agent, built on @wordware_ai",url:"https://twitter.wordware.ai/".concat(t.username)}),(0,l.jsxs)("div",{className:"flex-center w-full flex-col gap-4",children:[(0,l.jsx)("div",{className:"text-center text-lg font-light",children:"Add new user to find if you are compatible souls"}),i.wordwareStarted&&!i.wordwareCompleted?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"mb-2 text-center font-light text-gray-400",children:"Wait for the completion to finish"}),(0,l.jsx)("div",{className:"pointer-events-none opacity-50",children:(0,l.jsx)(k.default,{})})]}):(0,l.jsx)(k.default,{})]}),(0,l.jsx)(W,{unlocked:t.unlocked||!1,userData:u(c,t.unlocked||!1)}),!(null==c?void 0:c.loveLife)&&t.unlocked&&(0,l.jsx)(_.O,{started:i.paidWordwareStarted,completed:i.paidWordwareCompleted,text:"Extending your Personality"})]})}},35417:function(e,s,t){"use strict";var l=t(57437),r=t(16463),n=t(31014),a=t(39343),i=t(37692),c=t(27776),o=t(59772),d=t(52178),u=t(89733),m=t(97114),x=t(77209),h=t(49354);let f=o.z.object({username:o.z.string().min(3).max(50)});s.default=()=>{let e=(0,r.usePathname)(),s=(0,a.cI)({resolver:(0,n.F)(f),defaultValues:{username:""}});async function t(s){let t=(0,h.H)(s.username);if(e.replace("/","").toLowerCase()===t.toLowerCase()){c.Am.error("You cannot pair with yourself");return}let l=await (0,d.$D)({username:t,redirectPath:"".concat(e,"/").concat(t)});if(null==l?void 0:l.error){c.Am.error(l.error);return}await (0,d.EP)({usernames:[e.replace("/",""),t],shouldRedirect:!0})}return(0,l.jsxs)("div",{className:"flex-center w-full flex-col gap-4",children:[(0,l.jsx)(m.l0,{...s,children:(0,l.jsx)("form",{onSubmit:s.handleSubmit(t),className:"w-full max-w-sm space-y-8",children:(0,l.jsx)(m.Wi,{control:s.control,name:"username",render:e=>{let{field:t}=e;return(0,l.jsxs)(m.xJ,{children:[(0,l.jsx)(m.NI,{children:(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(x.I,{disabled:s.formState.isSubmitting,className:"w-full rounded-l-sm rounded-r-none border-blue-500",placeholder:"@username",...t}),(0,l.jsxs)(u.z,{disabled:s.formState.isSubmitting,type:"submit",className:"flex-center gap-2 rounded-l-none rounded-r-sm bg-blue-500 hover:bg-blue-600",children:[(0,l.jsx)(i.qOe,{}),"Check Compatibility"]})]})}),(0,l.jsx)(m.zG,{})]})}})})}),s.formState.isSubmitting&&(0,l.jsxs)("div",{className:"flex items-center gap-2 text-sm",children:[(0,l.jsx)(i.F1K,{className:"animate-spin"}),"Checking compatibility..."]})]})}},34221:function(e,s,t){"use strict";var l=t(57437),r=t(16463),n=t(31014),a=t(39343),i=t(37692),c=t(59772),o=t(52178),d=t(89733),u=t(97114),m=t(77209),x=t(49354);let h=c.z.object({username:c.z.string().min(3).max(50)});s.default=()=>{let e=(0,r.useSearchParams)(),s=(0,a.cI)({resolver:(0,n.F)(h),defaultValues:{username:e.get("u")||""}});async function t(e){let s=(0,x.H)(e.username),t=await (0,o.$D)({username:s,redirectPath:"/".concat(s)});(null==t?void 0:t.error)&&(window.location.href="https://tally.so/r/3lRoOp")}return(0,l.jsxs)("div",{className:"flex w-full flex-col gap-4",children:[(0,l.jsx)(d.z,{asChild:!0,className:"hidden max-w-[220px]",children:(0,l.jsx)("a",{href:"https://tally.so/r/3lRoOp",target:"_blank",children:"Sign up for the Waitlist"})}),(0,l.jsx)(u.l0,{...s,children:(0,l.jsx)("form",{onSubmit:s.handleSubmit(t),className:"w-full max-w-sm space-y-8",children:(0,l.jsx)(u.Wi,{control:s.control,name:"username",render:e=>{let{field:t}=e;return(0,l.jsxs)(u.xJ,{children:[(0,l.jsx)(u.NI,{children:(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(m.I,{disabled:s.formState.isSubmitting,className:"w-full rounded-l-sm rounded-r-none border-black",placeholder:"@username",...t}),(0,l.jsx)(d.z,{disabled:s.formState.isSubmitting,type:"submit",className:"rounded-l-none rounded-r-sm",children:"Discover"})]})}),(0,l.jsx)(u.zG,{})]})}})})}),s.formState.isSubmitting&&(0,l.jsxs)("div",{className:"flex items-center gap-2 text-sm",children:[(0,l.jsx)(i.F1K,{className:"animate-spin"}),"Looking for your X profile..."]})]})}}},function(e){e.O(0,[665,868,381,231,793,547,766,971,23,744],function(){return e(e.s=16867)}),_N_E=e.O()}]);