import{_ as m,R as u,m as h,a as b,r as v,o,b as l,e as t,F as g,d as y,t as a,f as n,g as i,k as f,h as _,p as x,i as w}from"./index-9e9c9e42.js";import{o as p}from"./order-bedc0825.js";const k={components:{RouterLink:u},methods:{...h(p,["getOrder","payOrder"])},computed:{...b(p,["order","orderId","user"])},mounted(){this.getOrder()}},e=s=>(x("data-v-9c56a7c9"),s=s(),w(),s),S={class:"container py-5 text-light",style:{"margin-top":"99px"}},$=f('<div class="cart_item" data-v-9c56a7c9><div class="cart_title d-flex align-items-center mb-4 mb-sm-0" data-v-9c56a7c9><i class="bi bi-exclamation-circle fs-1" data-v-9c56a7c9></i><h3 class="fs-1 mb-0 ms-3" data-v-9c56a7c9>付款資訊</h3></div><ul class="nav" data-v-9c56a7c9><li class="nav_item p-2" data-v-9c56a7c9><p class="mb-0" data-v-9c56a7c9>步驟一<br data-v-9c56a7c9>確認購物車</p></li><li class="nav_item p-2" data-v-9c56a7c9><p class="mb-0" data-v-9c56a7c9>步驟二<br data-v-9c56a7c9>訂單資訊</p></li><li class="nav_item p-2 bg-secondary" data-v-9c56a7c9><p class="mb-0" data-v-9c56a7c9>步驟三<br data-v-9c56a7c9>結帳</p></li></ul></div><hr data-v-9c56a7c9>',2),V={class:"table text-light align-middle text-center"},I=e(()=>t("thead",null,[t("tr",null,[t("th",null,"圖片"),t("th",null,"課程"),t("th",null,"價格")])],-1)),N={class:"py-3",style:{"max-width":"150px"}},L=["src"],O={class:"text-end fs-3"},R={class:"pay_info p-4 mb-0"},B={class:"row border-bottom mb-3"},C=e(()=>t("p",{class:"col-4 col-lg-5"},"電子信箱 :",-1)),F={class:"col-8 col-lg-7"},P={class:"row border-bottom mb-3"},T=e(()=>t("p",{class:"col-4 col-lg-5"},"姓名 :",-1)),A={class:"col-8 col-lg-7"},D={class:"row border-bottom mb-3"},E=e(()=>t("p",{class:"col-4 col-lg-5"},"電話 :",-1)),U={class:"col-8 col-lg-7"},j={class:"row border-bottom mb-3"},q=e(()=>t("p",{class:"col-4 col-lg-5"},"地址 :",-1)),z={class:"col-8 col-lg-7"},G={class:"text-end pe-4"};function H(s,d,J,K,M,Q){const r=v("RouterLink");return o(),l("section",S,[$,t("div",null,[t("table",V,[I,t("tbody",null,[(o(!0),l(g,null,y(s.order.products,c=>(o(),l("tr",{key:c.id},[t("td",N,[t("img",{src:c.product.imageUrl,alt:""},null,8,L)]),t("td",null,a(c.product.title),1),t("td",null,"$ "+a(c.product.price),1)]))),128))])]),t("p",O,"總金額 NT$ "+a(s.order.total),1),t("ul",R,[t("li",B,[C,t("p",F,a(s.user.email),1)]),t("li",P,[T,t("p",A,a(s.user.name),1)]),t("li",D,[E,t("p",U,a(s.user.tel),1)]),t("li",j,[q,t("p",z,a(s.user.address),1)])]),t("div",G,[n(r,{to:"/home",class:"btn btn-outline-light px-4"},{default:i(()=>[_("取消")]),_:1}),n(r,{to:"/success",class:"btn btn-secondary text-light px-4 ms-3",onClick:d[0]||(d[0]=c=>s.payOrder())},{default:i(()=>[_("確認付款")]),_:1})])])])}const Y=m(k,[["render",H],["__scopeId","data-v-9c56a7c9"]]);export{Y as default};