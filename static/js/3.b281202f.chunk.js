(this["webpackJsonpbits-pilani_2.0"]=this["webpackJsonpbits-pilani_2.0"]||[]).push([[3],{622:function(e,t,a){},632:function(e,t,a){"use strict";a.r(t);var n=a(39),s=a(2),i=a(0),l=a.n(i);a(40),a(622);t.default=function(e){var t=Object(i.useState)(""),a=Object(s.a)(t,2),c=a[0],r=a[1],d=Object(i.useState)([]),o=Object(s.a)(d,2),m=o[0],u=o[1],f=Object(i.useState)(""),h=Object(s.a)(f,2),b=h[0],w=h[1],p=0,g=Object(i.useState)(""),C=Object(s.a)(g,2),y=C[0],D=C[1];Object(i.useEffect)((function(){e.data.length>0&&u(e.data),m.length>0&&(e.blur&&(r(" mySlides custWid80 w3-animate-fading "),D("carousel"),E()),e.slideDirection&&""!==e.slideDirection&&(r(" mySlides custWid80 w3-animate-"+e.slideDirection),D("carousel"),E())),!1===e.fixedContent?w(" dispFlx notFxdCls"):w(" dispFlxCont fxdCls")}),Object(n.a)(e.data)),Object(i.useEffect)((function(){m.length>0&&(e.blur&&(r(" mySlides custWid80 w3-animate-fading "),E(),D("carousel")),e.slideDirection&&""!==e.slideDirection&&(r(" mySlides custWid80 w3-animate-"+e.slideDirection),E(),D("carousel")))}),[m.length===e.data.length]),Object(i.useEffect)((function(){if(!1===e.fixedData){var t=setInterval(E,e.timeDurationSlide);return function(){clearInterval(t)}}}),[y]);var E=function(t){if(!1===e.fixedData){var a,s=Object(n.a)(m);for(a=0;a<s.length;a++)s[a].currentCls=" hideImg hideDots";++p>s.length&&(p=1),s[p-1].currentCls=" showImg showDots",u(s)}};return l.a.createElement("div",{className:[b,"w3-display-container",e.customClass,"slidd"].join(" ")},l.a.createElement("div",{className:"wid40Per carslPrpty alignCentr "},!1===e.fixedContent?m.map((function(t,a){return l.a.createElement("div",{key:e.keyData+"wid40_"+a,className:"currSlideChk "+t.currentCls+c},l.a.createElement("p",{className:"teamsure-txt"},0===a&&"Presenting"," ",l.a.createElement("span",{className:"teamsure-color-blue"},"TeamSure")),l.a.createElement("h1",{className:"mainHeading_max SlideHead_old sldWidSet"},t.head),l.a.createElement("h2",{className:" contentTxt slideContent_old slidSubCntWid"},t.sub))})):l.a.createElement("div",{key:e.keyData+"wid40_",className:"sld_mar_lft"},l.a.createElement("p",{className:" mainHeading_max SlideHead_old"},e.content.Head),l.a.createElement("p",{className:" contentTxt slideContent_old sld_hid_cls"},e.content.subcontent))),l.a.createElement("div",{className:"wid60Per carslPrpty currSlideChk"},m.map((function(t,a){return l.a.createElement("img",{key:e.keyData+"slide3_"+a,className:"imgSlideCls "+c+t.currentCls,src:t.imgPath,alt:"Employee Healthcare at your fingertips "})}))),l.a.createElement("div",{className:" w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle custWidth100 marbtm5 curosalDots"},!0===e.carosalDots?m.map((function(t,a){return l.a.createElement("span",{key:e.keyData+"spanSlider_"+a,className:" w3-badge demo w3-border w3-transparent w3-hover-white curslDotCls "+t.currentCls,onClick:function(){return p=a,void E("fromClicked")}})})):null))}}}]);
//# sourceMappingURL=3.b281202f.chunk.js.map