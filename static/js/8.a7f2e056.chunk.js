(this["webpackJsonpbits-pilani_2.0"]=this["webpackJsonpbits-pilani_2.0"]||[]).push([[8],{620:function(e,t,a){},630:function(e,t,a){"use strict";a.r(t);var i=a(40),n=a(2),s=a(0),r=a.n(s);a(620);t.default=function(e){var t=Object(s.useState)(""),a=Object(n.a)(t,2),c=a[0],l=a[1],o=Object(s.useState)([]),d=Object(n.a)(o,2),u=d[0],m=d[1],f=Object(s.useState)(""),w=Object(n.a)(f,2),b=w[0],h=w[1],g=0,p=Object(s.useState)(""),y=Object(n.a)(p,2),D=y[0],C=y[1];Object(s.useEffect)((function(){e.data.length>0&&m(e.data),u.length>0&&(e.blur&&(l(" mySlides custWid80 w3-animate-fading "),C("carousel"),j()),e.slideDirection&&""!==e.slideDirection&&(l(" mySlides custWid80 w3-animate-"+e.slideDirection),C("carousel"),j())),!1===e.fixedContent?h(" dispFlx notFxdCls"):h(" dispFlxCont fxdCls")}),Object(i.a)(e.data)),Object(s.useEffect)((function(){u.length>0&&(e.blur&&(l(" mySlides custWid80 w3-animate-fading "),j(),C("carousel")),e.slideDirection&&""!==e.slideDirection&&(l(" mySlides custWid80 w3-animate-"+e.slideDirection),j(),C("carousel")))}),[u.length===e.data.length]),Object(s.useEffect)((function(){if(!1===e.fixedData){var t=setInterval(j,e.timeDurationSlide);return function(){clearInterval(t)}}}),[D]);var j=function(t){if(!1===e.fixedData){var a,n=Object(i.a)(u);for(a=0;a<n.length;a++)n[a].currentCls=" hideImg hideDots";++g>n.length&&(g=1),n[g-1].currentCls=" showImg showDots",m(n)}};return r.a.createElement("div",{className:[b,"w3-display-container",e.customClass,"slidd"].join(" ")},r.a.createElement("div",{className:"wid40Per carslPrpty alignCentr "},"bits-pilani Wall of Love"),r.a.createElement("div",{className:"wid60Per carslPrpty currSlideChk"},u.map((function(t,a){return r.a.createElement("img",{key:e.keyData+"slide3_"+a,className:"imgSlideCls "+c+t.currentCls,src:t.imgPath,alt:"Employee Healthcare at your fingertips "})}))),r.a.createElement("div",{className:" w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle custWidth100 marbtm5 curosalDots"},!0===e.carosalDots?u.map((function(t,a){return r.a.createElement("span",{key:e.keyData+"spanSlider_"+a,className:" w3-badge demo w3-border w3-transparent w3-hover-white curslDotCls "+t.currentCls,onClick:function(){return g=a,void j("fromClicked")}})})):null))}}}]);
//# sourceMappingURL=8.a7f2e056.chunk.js.map