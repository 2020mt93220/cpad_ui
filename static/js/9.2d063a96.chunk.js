(this["webpackJsonpbits-pilani_2.0"]=this["webpackJsonpbits-pilani_2.0"]||[]).push([[9],{616:function(e,t,a){},622:function(e,t,a){"use strict";a.r(t);var l=a(36),n=a(2),s=a(0),i=a.n(s);a(616);t.default=function(e){var t=Object(s.useState)(""),a=Object(n.a)(t,2),c=a[0],r=a[1],d=Object(s.useState)([]),m=Object(n.a)(d,2),o=m[0],u=m[1],f=Object(s.useState)(""),p=Object(n.a)(f,2),h=p[0],b=p[1],g=0,E=Object(s.useState)(""),y=Object(n.a)(E,2),C=y[0],w=y[1];Object(s.useEffect)((function(){e.data.length>0&&u(e.data),o.length>0&&(e.blur&&(r(" mySlides custWid80 w3-animate-fading "),w("carousel"),S()),e.slideDirection&&""!==e.slideDirection&&(r(" mySlides custWid80 w3-animate-"+e.slideDirection),w("carousel"),S())),!1===e.fixedContent?b(" dispFlx notFxdCls"):b(" dispFlxCont fxdCls")}),Object(l.a)(e.data)),Object(s.useEffect)((function(){o.length>0&&(e.blur&&(r(" mySlides custWid80 w3-animate-fading "),S(),w("carousel")),e.slideDirection&&""!==e.slideDirection&&(r(" mySlides custWid80 w3-animate-"+e.slideDirection),S(),w("carousel")))}),[o.length===e.data.length]),Object(s.useEffect)((function(){if(!1===e.fixedData){var t=setInterval(S,e.timeDurationSlide);return function(){clearInterval(t)}}}),[C]);var S=function(t){if(!1===e.fixedData){var a,n=Object(l.a)(o);for(a=0;a<n.length;a++)n[a].currentCls=" hideImg hideDots";++g>n.length&&(g=1),n[g-1].currentCls=" showImg showDots",u(n)}};return i.a.createElement("div",{className:[h,"w3-display-container",e.customClass,"slidd"].join(" ")},i.a.createElement("div",{className:"wid40Per carslPrpty alignCentr "},!1===e.fixedContent?o.map((function(t,a){return i.a.createElement("div",{key:e.keyData+"wid40_"+a,className:"currSlideChk "+t.currentCls+c},i.a.createElement("p",{className:"teamsure-txt"},0===a&&"",i.a.createElement("span",{className:"teamsure-color-blue"},i.a.createElement("img",{src:t.logo,className:"tech30"==t.customcls?"tech30Wid":"ventureLogoHomeCls"}))),i.a.createElement("h1",{className:"mainHeading_max SlideHead_old sldWidSet letzVentureWid "+t.customcls},t.head),i.a.createElement("h2",{className:" contentTxt slideContent_old slidSubCntWid letzVentureSubCls"},t.sub),i.a.createElement("div",{className:"slidSubCntWid letzVenturePrntDivCls"},t.subs.map((function(e,a){return i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{style:{paddingRight:"3px",paddingLeft:"3px"},className:" contentTxt slideContent_old slidSubCntWid clrBlkLetzVentr"},t.customcls&&t.customcls.includes("inlineMail")?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null),i.a.createElement("span",{dangerouslySetInnerHTML:{__html:e}})):i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e}})),10==a&&i.a.createElement("span",{className:"teamsure-color-blue fntFamilyGilroy"},t.couponCode),11==a&&i.a.createElement("span",{className:" fntFamilyGilroy"},t.boldTxt),0==a&&i.a.createElement("span",null,i.a.createElement("a",{className:"letzVenturMailTag fntFamilyGilroy",href:"mailto:"+t.mailTo},t.mailTo)))}))))})):i.a.createElement("div",{key:e.keyData+"wid40_",className:"sld_mar_lft"},i.a.createElement("p",{className:" mainHeading_max SlideHead_old"},e.content.Head),i.a.createElement("p",{className:" contentTxt slideContent_old sld_hid_cls"},e.content.subcontent))),i.a.createElement("div",{className:"wid60Per carslPrpty currSlideChk"},o.map((function(t,a){return i.a.createElement("img",{key:e.keyData+"slide3_"+a,className:"imgSlideCls "+c+t.currentCls,src:t.imgPath,alt:"Employee Healthcare at your fingertips "})}))),i.a.createElement("div",{className:" w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle custWidth100 marbtm5 curosalDots"},!0===e.carosalDots?o.map((function(t,a){return i.a.createElement("span",{key:e.keyData+"spanSlider_"+a,className:" w3-badge demo w3-border w3-transparent w3-hover-white curslDotCls "+t.currentCls,onClick:function(){return g=a,void S("fromClicked")}})})):null))}}}]);
//# sourceMappingURL=9.2d063a96.chunk.js.map