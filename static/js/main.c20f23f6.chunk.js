(this.webpackJsonproulette=this.webpackJsonproulette||[]).push([[0],{1:function(e,t,n){e.exports={background:"App_background__25ePq",headTitle:"App_headTitle__2d0ZJ",rouletteOutline:"App_rouletteOutline__1inZg",buttonGroup:"App_buttonGroup__suTQ5",trigger:"App_trigger__Blwy-",update:"App_update__3tBMw",rouletteImg:"App_rouletteImg__2Iecd",rouletteTextOutline:"App_rouletteTextOutline__2I2LM",phrase:"App_phrase__2I_uK",output:"App_output__fxbHH",href:"App_href__SU3r_"}},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(6),s=n.n(a),o=n(4),i=n(7),u=n(3),l=n(1),p=n.n(l),d=n.p+"static/media/roulette_img.40b67c76.png",j=n(0);var b=function(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(u.a)(a,2),l=s[0],b=s[1],h=Object(r.useState)(""),_=Object(u.a)(h,2),O=_[0],m=_[1],g=function(){var e=Object(i.a)(Object(o.a)().mark((function e(){var t,n,r,c;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{accept:"application/json","Notion-Version":"2022-06-28","content-type":"application/json",Authorization:"Bearer ".concat("secret_jEtzDFPbkHgKJOiqLDwFKmADQac03XugJMJy0CcY33x")},body:JSON.stringify({sorts:[],page_size:100})},e.next=3,fetch("/query",t);case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,c=r.results,b(c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){g()}),[]),Object(j.jsxs)("div",{className:p.a.background,children:[Object(j.jsxs)("div",{className:p.a.headTitle,children:["Fun Members'",Object(j.jsx)("br",{}),"Roulette"]}),Object(j.jsxs)("div",{className:p.a.rouletteOutline,children:[Object(j.jsxs)("div",{className:p.a.buttonGroup,children:[Object(j.jsx)("button",{className:p.a.trigger,onClick:function(e){var t,n,r=l.filter((function(e){return!1===e.properties["\uc131\ucde8 \uc5ec\ubd80"].checkbox})),a=r[(t=0,n=r.length-1,Math.floor(Math.random()*(n-t+1))+t)];c(function(){var e=a.properties.Contents.title[0].text.content;try{var t=a.icon.emoji;return t+" "+e+" "+t}catch(n){return e}}()),m(a.url)},children:Object(j.jsx)("img",{className:p.a.rouletteImg,alt:"roulette_img",src:d})}),Object(j.jsx)("div",{className:p.a.update,children:"completed notion db automation"})]}),Object(j.jsxs)("div",{className:p.a.rouletteTextOutline,children:[Object(j.jsx)("div",{className:p.a.phrase,children:"\uc774\uac70 \ub2e4 \ub9c8\uc2dc\uba74 \uc6b0\ub9ac.."}),Object(j.jsx)("div",{className:p.a.output,children:Object(j.jsx)("a",{href:O,className:p.a.href,children:n})}),Object(j.jsx)("div",{className:p.a.phrase,children:"\ud558\ub294\uac70\ub2e4?"})]})]})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};n(17);s.a.createRoot(document.getElementById("root")).render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(b,{})})),h()}},[[18,1,2]]]);
//# sourceMappingURL=main.c20f23f6.chunk.js.map