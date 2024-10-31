!function(e){var t={};function o(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=12)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blockEditor},function(e,t,o){var a;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var l=typeof a;if("string"===l||"number"===l)e.push(a);else if(Array.isArray(a)&&a.length){var r=n.apply(null,a);r&&e.push(r)}else if("object"===l)for(var c in a)o.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()},function(e,t){e.exports=window.wp.blocks},function(e,t,o){},function(e,t,o){},function(e,t,o){},,,,function(e,t,o){"use strict";o.r(t);var a=o(0),n=o(1),l=o(5),r=o(3),c=o(2),i=o(4),s=o.n(i),b=(o(6),[{label:Object(n.__)("Center","qroko-blocks"),value:"center"},{label:Object(n.__)("Top","qroko-blocks"),value:"top"},{label:Object(n.__)("Bottom","qroko-blocks"),value:"bottom"}]),u=[{label:Object(n.__)("Center","qroko-blocks"),value:"center"},{label:Object(n.__)("Left","qroko-blocks"),value:"left"},{label:Object(n.__)("Right","qroko-blocks"),value:"right"}],d=function(e){switch(e.position){case"center":return"0 auto";case"left":return"0 auto 0 0";case"right":return"0 0 0 auto";default:return"0 auto"}},g=function(e){var t,o,a,n,l,r,c,i=e.attributes;return{"--qroko-blocks-section-background-color":i.backgroundColor,"--qroko-blocks-section-background-image":(r={imageURL:i.backgroundImageURL},c=r.imageURL,c?"url(".concat(c,")"):""),"--qroko-blocks-section-background-size":i.backgroundSize,"--qroko-blocks-section-background-position":i.backgroundPosition,"--qroko-blocks-section-background-opacity":(n={opacity:i.backgroundOpacity},l=n.opacity,String(l/100)),"--qroko-blocks-section-inner-max-width":(t={trigger:i.innerMaxWidthTrigger,size:i.innerMaxWidth},o=t.trigger,a=t.size,o?a+"px":"none"),"--qroko-blocks-section-inner-margin":d({position:i.innerPosition}),"--qroko-blocks-section-inner-padding-top":i.innerPaddingTop+"px","--qroko-blocks-section-inner-padding-right":i.innerPaddingRight+"px","--qroko-blocks-section-inner-padding-bottom":i.innerPaddingBottom+"px","--qroko-blocks-section-inner-padding-left":i.innerPaddingLeft+"px"}};Object(l.registerBlockType)("qroko-blocks/section",{title:Object(n.__)("Section","qroko-blocks"),description:Object(n.__)("You can set up full-width sections and place content inside.","qroko-blocks"),category:"qroko",icon:Object(a.createElement)("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},Object(a.createElement)("path",{"fill-rule":"evenodd",d:"M14.5 13.5h-13A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5zm-13 1A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"})),supports:{anchor:!0,className:!0,customClassName:!0},attributes:{backgroundColor:{type:"string"},backgroundImageID:{type:"number",default:0},backgroundImageURL:{type:"string",default:""},backgroundSize:{type:"string",default:"cover"},backgroundPosition:{type:"string",default:"center"},backgroundOpacity:{type:"number",default:100},innerMaximizeTrigger:{type:"boolean",default:!1},innerMaxWidthTrigger:{type:"boolean",default:!1},innerMaxWidth:{type:"number",default:1e3},innerPosition:{type:"string",default:"center"},innerPaddingTop:{type:"number",default:32},innerPaddingRight:{type:"number",default:0},innerPaddingBottom:{type:"number",default:32},innerPaddingLeft:{type:"number",default:0}},getEditWrapperProps:function(e){return{"data-align":e.innerMaximizeTrigger&&"full"}},edit:function(e){var t=e.attributes,o=e.className,l=e.setAttributes;return Object(a.createElement)("section",{className:s()(o,"qroko-blocks-section",t.innerMaximizeTrigger&&"is-fullwidth"),style:g({attributes:t})},Object(a.createElement)(r.InspectorControls,null,Object(a.createElement)(c.PanelBody,{title:Object(n.__)("Background","qroko-blocks")},Object(a.createElement)(c.BaseControl,{label:Object(n.__)("Color","qroko-blocks")},Object(a.createElement)(r.ColorPalette,{value:t.backgroundColor,onChange:function(e){return l({backgroundColor:e})}})),Object(a.createElement)(c.BaseControl,{label:Object(n.__)("Image","qroko-blocks")},Object(a.createElement)("div",null,Object(a.createElement)(r.MediaUpload,{onSelect:function(e){l({backgroundImageID:e.id,backgroundImageURL:e.url})},type:"image",value:t.backgroundImageID,render:function(e){var o=e.open;return function(e){var t=e.setAttributes,o=e.imageURL,l=e.clear,r=e.open;return o?Object(a.createElement)("div",null,Object(a.createElement)(c.Button,{onClick:r,className:"qroko-blocks-section-image-preview"},Object(a.createElement)("img",{src:o,alt:""})),Object(a.createElement)(c.Button,{onClick:function(){t(l)},className:"button"},Object(n.__)("Delete image","qroko-blocks"))):Object(a.createElement)(c.Button,{onClick:r,className:"button"},Object(n.__)("Add Image","qroko-blocks"))}({setAttributes:l,imageURL:t.backgroundImageURL,clear:{backgroundImageID:0,backgroundImageURL:""},open:o})}}))),Object(a.createElement)(c.BaseControl,null,Object(a.createElement)(c.RadioControl,{label:Object(n.__)("Position","qroko-blocks"),selected:t.backgroundPosition,options:b,onChange:function(e){l({backgroundPosition:e})}})),Object(a.createElement)(c.BaseControl,null,Object(a.createElement)(c.RangeControl,{value:t.backgroundOpacity,label:Object(n.__)("Opacity","qroko-blocks"),min:0,max:100,initialPosition:100,resetFallbackValue:100,allowReset:!0,onChange:function(e){l({backgroundOpacity:e})}}))),Object(a.createElement)(c.PanelBody,{title:Object(n.__)("Inner","qroko-blocks")},Object(a.createElement)(c.BaseControl,null,Object(a.createElement)(c.ToggleControl,{label:Object(n.__)("Use the Maximize","qroko-blocks"),onChange:function(){l({innerMaximizeTrigger:!t.innerMaximizeTrigger})},checked:t.innerMaximizeTrigger}),Object(a.createElement)(c.ToggleControl,{label:Object(n.__)("Use the Max Width","qroko-blocks"),onChange:function(){l({innerMaxWidthTrigger:!t.innerMaxWidthTrigger})},checked:t.innerMaxWidthTrigger}),Object(a.createElement)(c.RangeControl,{value:t.innerMaxWidth,label:Object(n.__)("Max Width (px)","qroko-blocks"),min:100,max:1600,initialPosition:1e3,resetFallbackValue:1e3,allowReset:!0,onChange:function(e){l({innerMaxWidth:e})}}),Object(a.createElement)(c.RadioControl,{label:Object(n.__)("Position","qroko-blocks"),selected:t.innerPosition,options:u,onChange:function(e){l({innerPosition:e})}}),Object(a.createElement)(c.RangeControl,{value:t.innerPaddingTop,label:Object(n.__)("Padding Top (px)","qroko-blocks"),min:0,max:200,initialPosition:32,resetFallbackValue:32,allowReset:!0,onChange:function(e){l({innerPaddingTop:e})}}),Object(a.createElement)(c.RangeControl,{value:t.innerPaddingRight,label:Object(n.__)("Padding Right (px)","qroko-blocks"),min:0,max:200,initialPosition:0,resetFallbackValue:0,allowReset:!0,onChange:function(e){l({innerPaddingRight:e})}}),Object(a.createElement)(c.RangeControl,{value:t.innerPaddingBottom,label:Object(n.__)("Padding Bottom (px)","qroko-blocks"),min:0,max:200,initialPosition:32,resetFallbackValue:32,allowReset:!0,onChange:function(e){l({innerPaddingBottom:e})}}),Object(a.createElement)(c.RangeControl,{value:t.innerPaddingLeft,label:Object(n.__)("Padding Left (px)","qroko-blocks"),min:0,max:200,initialPosition:0,resetFallbackValue:0,allowReset:!0,onChange:function(e){l({innerPaddingLeft:e})}})))),Object(a.createElement)("div",{className:"qroko-blocks-section-background"}),Object(a.createElement)("div",{className:"qroko-blocks-section-inner"},Object(a.createElement)(r.InnerBlocks,null)))},save:function(e){var t=e.attributes,o=e.className;return Object(a.createElement)("section",{className:s()(o,"qroko-blocks-section",t.innerMaximizeTrigger&&"is-fullwidth"),style:g({attributes:t})},Object(a.createElement)("div",{className:"qroko-blocks-section-background"}),Object(a.createElement)("div",{className:"qroko-blocks-section-inner"},Object(a.createElement)(r.InnerBlocks.Content,null)))}}),o(7);var m=[{label:Object(n.__)("Center","qroko-blocks"),value:"center"},{label:Object(n.__)("Left","qroko-blocks"),value:"left"},{label:Object(n.__)("Right","qroko-blocks"),value:"right"}],k=[{label:Object(n.__)("Solid","qroko-blocks"),value:"solid"},{label:Object(n.__)("Dashed","qroko-blocks"),value:"dashed"},{label:Object(n.__)("Dotted","qroko-blocks"),value:"dotted"},{label:Object(n.__)("Double","qroko-blocks"),value:"double"}],p=function(e){var t=e.hex;return null==t&&(t="#ffffff"),"#"==t.slice(0,1)&&(t=t.slice(1)),3==t.length&&(t=t.slice(0,1)+t.slice(0,1)+t.slice(1,2)+t.slice(1,2)+t.slice(2,3)+t.slice(2,3)),{red:parseInt(t.slice(0,2),16),green:parseInt(t.slice(2,4),16),blue:parseInt(t.slice(4,6),16)}},O=function(e){var t=e.rgb,o=e.alpha;return"rgb(".concat(t.red," ").concat(t.green," ").concat(t.blue," / ").concat(o,"%)")},j=function(e){var t=e.trigger,o=e.color,a=e.opacity;if(t){var n=O({rgb:p({hex:o}),alpha:a});return"".concat(n)}return"none"},h=function(e){var t=e.trigger,o=e.color,a=e.opacity,n=e.size,l=e.style;if(t){var r=O({rgb:p({hex:o}),alpha:a});return"".concat(n,"px ").concat(l," ").concat(r)}return"none"},f=function(e){var t=e.trigger,o=e.color,a=e.opacity,n=e.shadowX,l=e.shadowY,r=e.shadowBlur,c=e.shadowSpread;if(t){var i=O({rgb:p({hex:o}),alpha:a});return"".concat(n,"px ").concat(l,"px ").concat(r,"px ").concat(c,"px ").concat(i)}return"none"},_=function(e){var t,o,a,n,l,r,c,i,s,b,u=e.attributes;return{"--qroko-blocks-box-max-width":(i={trigger:u.maxWidthTrigger,size:u.maxWidth},s=i.trigger,b=i.size,s?b+"px":"none"),"--qroko-blocks-box-margin-right":(c={position:u.position},"right"===c.position?"0":"auto"),"--qroko-blocks-box-margin-left":(r={position:u.position},"left"===r.position?"0":"auto"),"--qroko-blocks-box-radius":u.radius+"px","--qroko-blocks-box-background":j({trigger:u.backgroundTrigger,color:u.backgroundColor,opacity:u.backgroundOpacity}),"--qroko-blocks-box-border":h({trigger:u.borderTrigger,color:u.borderColor,opacity:u.borderOpacity,size:u.borderWidth,style:u.borderStyle}),"--qroko-blocks-box-shadow":f({trigger:u.shadowTrigger,color:u.shadowColor,opacity:u.shadowOpacity,shadowX:u.shadowX,shadowY:u.shadowY,shadowBlur:u.shadowBlur,shadowSpread:u.shadowSpread}),"--qroko-blocks-box-padding":(t={top:u.innerPaddingTop,right:u.innerPaddingRight,bottom:u.innerPaddingBottom,left:u.innerPaddingLeft},o=t.top,a=t.right,n=t.bottom,l=t.left,"".concat(o,"px ").concat(a,"px ").concat(n,"px ").concat(l,"px"))}};Object(l.registerBlockType)("qroko-blocks/box",{title:Object(n.__)("Box","qroko-blocks"),description:Object(n.__)("You can set up decorative boxes and place content inside.","qroko-blocks"),category:"qroko",icon:Object(a.createElement)("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},Object(a.createElement)("path",{"fill-rule":"evenodd",d:"M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"})),supports:{anchor:!0,className:!0,customClassName:!0},attributes:{maxWidthTrigger:{type:"boolean",default:!1},maxWidth:{type:"number",default:1e3},position:{type:"string",default:"center"},radius:{type:"number",default:4},backgroundTrigger:{type:"boolean",default:!0},backgroundColor:{type:"string",default:"#f2f2f2"},backgroundOpacity:{type:"number",default:100},borderTrigger:{type:"boolean",default:!0},borderWidth:{type:"number",default:1},borderStyle:{type:"string",default:"solid"},borderColor:{type:"string",default:"#e4e4e4"},borderOpacity:{type:"number",default:100},shadowTrigger:{type:"boolean",default:!1},shadowX:{type:"number",default:0},shadowY:{type:"number",default:8},shadowBlur:{type:"number",default:8},shadowSpread:{type:"number",default:-4},shadowColor:{type:"string",default:"#000000"},shadowOpacity:{type:"number",default:12},innerPaddingTop:{type:"number",default:16},innerPaddingRight:{type:"number",default:16},innerPaddingBottom:{type:"number",default:16},innerPaddingLeft:{type:"number",default:16}},edit:function(e){var t=e.attributes,o=e.className,l=e.setAttributes;return Object(a.createElement)("div",{className:s()(o,"qroko-blocks-box"),style:_({attributes:t})},Object(a.createElement)(r.InspectorControls,null,Object(a.createElement)(c.PanelBody,{title:Object(n.__)("Basic Settings","qroko-blocks")},Object(a.createElement)(c.BaseControl,null,Object(a.createElement)(c.ToggleControl,{label:Object(n.__)("Use the Max Width","qroko-blocks"),onChange:function(){l({maxWidthTrigger:!t.maxWidthTrigger})},checked:t.maxWidthTrigger}),Object(a.createElement)(c.RangeControl,{value:t.maxWidth,label:Object(n.__)("Max Width (px)","qroko-blocks"),min:100,max:1600,initialPosition:1e3,resetFallbackValue:1e3,allowReset:!0,onChange:function(e){l({maxWidth:e})}}),Object(a.createElement)(c.RadioControl,{label:Object(n.__)("Position","qroko-blocks"),selected:t.position,options:m,onChange:function(e){l({position:e})}}),Object(a.createElement)(c.RangeControl,{value:t.radius,label:Object(n.__)("Round Shape (px)","qroko-blocks"),min:0,max:40,initialPosition:4,resetFallbackValue:4,allowReset:!0,onChange:function(e){l({radius:e})}}))),Object(a.createElement)(c.PanelBody,{title:Object(n.__)("Background","qroko-blocks")},Object(a.createElement)(c.BaseControl,null,Object(a.createElement)(c.ToggleControl,{label:Object(n.__)("Use the Background","qroko-blocks"),onChange:function(){l({backgroundTrigger:!t.backgroundTrigger})},checked:t.backgroundTrigger})),Object(a.createElement)(c.BaseControl,{label:Object(n.__)("Color","qroko-blocks")},Object(a.createElement)(r.ColorPalette,{value:t.backgroundColor,onChange:function(e){return l({backgroundColor:e})}})),Object(a.createElement)(c.BaseControl,null,Object(a.createElement)(c.RangeControl,{value:t.backgroundOpacity,label:Object(n.__)("Opacity","qroko-blocks"),min:0,max:100,initialPosition:100,resetFallbackValue:100,allowReset:!0,onChange:function(e){l({backgroundOpacity:e})}}))),Object(a.createElement)(c.PanelBody,{title:Object(n.__)("Border","qroko-blocks")},Object(a.createElement)(c.BaseControl,null,Object(a.createElement)(c.ToggleControl,{label:Object(n.__)("Use the Border","qroko-blocks"),onChange:function(){l({borderTrigger:!t.borderTrigger})},checked:t.borderTrigger})),Object(a.createElement)(c.BaseControl,null,Object(a.createElement)(c.RangeControl,{value:t.borderWidth,label:Object(n.__)("Width","qroko-blocks"),min:0,max:40,initialPosition:1,resetFallbackValue:1,allowReset:!0,onChange:function(e){l({borderWidth:e})}}),Object(a.createElement)(c.RadioControl,{label:Object(n.__)("Style","qroko-blocks"),selected:t.borderStyle,options:k,onChange:function(e){l({borderStyle:e})}})),Object(a.createElement)(c.BaseControl,{label:Object(n.__)("Color","qroko-blocks")},Object(a.createElement)(r.ColorPalette,{value:t.borderColor,onChange:function(e){return l({borderColor:e})}})),Object(a.createElement)(c.BaseControl,null,Object(a.createElement)(c.RangeControl,{value:t.borderOpacity,label:Object(n.__)("Opacity","qroko-blocks"),min:0,max:100,initialPosition:100,resetFallbackValue:100,allowReset:!0,onChange:function(e){l({borderOpacity:e})}}))),Object(a.createElement)(c.PanelBody,{title:Object(n.__)("Shadow","qroko-blocks")},Object(a.createElement)(c.BaseControl,null,Object(a.createElement)(c.ToggleControl,{label:Object(n.__)("Use the Shadow","qroko-blocks"),onChange:function(){l({shadowTrigger:!t.shadowTrigger})},checked:t.shadowTrigger})),Object(a.createElement)(c.BaseControl,null,Object(a.createElement)(c.RangeControl,{value:t.shadowX,label:Object(n.__)("X Offset (px)","qroko-blocks"),min:-40,max:40,initialPosition:0,resetFallbackValue:0,allowReset:!0,onChange:function(e){l({shadowX:e})}}),Object(a.createElement)(c.RangeControl,{value:t.shadowY,label:Object(n.__)("Y Offset (px)","qroko-blocks"),min:-40,max:40,initialPosition:8,resetFallbackValue:8,allowReset:!0,onChange:function(e){l({shadowY:e})}}),Object(a.createElement)(c.RangeControl,{value:t.shadowBlur,label:Object(n.__)("Blur (px)","qroko-blocks"),min:0,max:40,initialPosition:8,resetFallbackValue:8,allowReset:!0,onChange:function(e){l({shadowBlur:e})}}),Object(a.createElement)(c.RangeControl,{value:t.shadowSpread,label:Object(n.__)("Spread (px)","qroko-blocks"),min:-40,max:40,initialPosition:-4,resetFallbackValue:-4,allowReset:!0,onChange:function(e){l({shadowSpread:e})}})),Object(a.createElement)(c.BaseControl,{label:Object(n.__)("Color","qroko-blocks")},Object(a.createElement)(r.ColorPalette,{value:t.shadowColor,onChange:function(e){return l({shadowColor:e})}})),Object(a.createElement)(c.BaseControl,null,Object(a.createElement)(c.RangeControl,{value:t.shadowOpacity,label:Object(n.__)("Opacity","qroko-blocks"),min:0,max:100,initialPosition:12,resetFallbackValue:12,allowReset:!0,onChange:function(e){l({shadowOpacity:e})}}))),Object(a.createElement)(c.PanelBody,{title:Object(n.__)("Inner","qroko-blocks")},Object(a.createElement)(c.BaseControl,null,Object(a.createElement)(c.RangeControl,{value:t.innerPaddingTop,label:Object(n.__)("Padding Top (px)","qroko-blocks"),min:0,max:200,initialPosition:16,resetFallbackValue:16,allowReset:!0,onChange:function(e){l({innerPaddingTop:e})}}),Object(a.createElement)(c.RangeControl,{value:t.innerPaddingRight,label:Object(n.__)("Padding Right (px)","qroko-blocks"),min:0,max:200,initialPosition:16,resetFallbackValue:16,allowReset:!0,onChange:function(e){l({innerPaddingRight:e})}}),Object(a.createElement)(c.RangeControl,{value:t.innerPaddingBottom,label:Object(n.__)("Padding Bottom (px)","qroko-blocks"),min:0,max:200,initialPosition:16,resetFallbackValue:16,allowReset:!0,onChange:function(e){l({innerPaddingBottom:e})}}),Object(a.createElement)(c.RangeControl,{value:t.innerPaddingLeft,label:Object(n.__)("Padding Left (px)","qroko-blocks"),min:0,max:200,initialPosition:16,resetFallbackValue:16,allowReset:!0,onChange:function(e){l({innerPaddingLeft:e})}})))),Object(a.createElement)(r.InnerBlocks,null))},save:function(e){var t=e.attributes,o=e.className;return Object(a.createElement)("div",{className:s()(o,"qroko-blocks-box"),style:_({attributes:t})},Object(a.createElement)(r.InnerBlocks.Content,null))}}),o(8);var v=[{label:Object(n.__)("Left","qroko-blocks"),value:"left"},{label:Object(n.__)("Right","qroko-blocks"),value:"right"}],C=[{label:Object(n.__)("Cover","qroko-blocks"),value:"cover"},{label:Object(n.__)("Contain","qroko-blocks"),value:"contain"}],E=function(e){var t=e.setAttributes,o=e.clear;return Object(a.createElement)("button",{className:"qroko-blocks-blog-card-overlay-delete-button",type:"button",onClick:function(){return t(o)}},Object(a.createElement)("svg",{className:"icon",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},Object(a.createElement)("path",{"fill-rule":"evenodd",d:"M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"}),Object(a.createElement)("path",{"fill-rule":"evenodd",d:"M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"})))};Object(l.registerBlockType)("qroko-blocks/blog-card",{title:Object(n.__)("Blog Card","qroko-blocks"),description:Object(n.__)("Block to create a card link. You can also edit it after getting the Open Graph from the link URL.","qroko-blocks"),category:"qroko",icon:Object(a.createElement)("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},Object(a.createElement)("path",{"fill-rule":"evenodd",d:"M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"}),Object(a.createElement)("path",{"fill-rule":"evenodd",d:"M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"})),supports:{anchor:!0,className:!0,customClassName:!0},attributes:{url:{type:"string",default:""},title:{type:"string",default:""},description:{type:"string",default:""},imageID:{type:"number",default:0},imageURL:{type:"string",default:""},imageAlt:{type:"string",default:""},imagePosition:{type:"string",default:"left"},imageFit:{type:"string",default:"cover"},ogDomain:{type:"string",default:""},ogTitleCharacterCount:{type:"number",default:50},ogDescriptionCharacterCount:{type:"number",default:60},ogImageURL:{type:"string",default:""},externalLink:{type:"boolean",default:!0}},edit:function(e){var t=e.attributes,o=e.className,l=e.setAttributes,i=e.isSelected;return Object(a.createElement)("div",{className:s()(o,"qroko-blocks-blog-card")},Object(a.createElement)(r.InspectorControls,null,Object(a.createElement)(c.PanelBody,{title:Object(n.__)("Title","qroko-blocks")},Object(a.createElement)(c.BaseControl,null,Object(a.createElement)(c.TextareaControl,{value:t.title,onChange:function(e){l({title:e})}}),Object(a.createElement)(c.RangeControl,{value:t.ogTitleCharacterCount,label:Object(n.__)("Number of characters","qroko-blocks"),min:1,max:200,initialPosition:50,resetFallbackValue:50,allowReset:!0,onChange:function(e){l({ogTitleCharacterCount:e})}}))),Object(a.createElement)(c.PanelBody,{title:Object(n.__)("Description","qroko-blocks")},Object(a.createElement)(c.BaseControl,null,Object(a.createElement)(c.TextareaControl,{value:t.description,onChange:function(e){l({description:e})}}),Object(a.createElement)(c.RangeControl,{value:t.ogDescriptionCharacterCount,label:Object(n.__)("Number of characters","qroko-blocks"),min:1,max:200,initialPosition:60,resetFallbackValue:60,allowReset:!0,onChange:function(e){l({ogDescriptionCharacterCount:e})}}))),Object(a.createElement)(c.PanelBody,{title:Object(n.__)("Image","qroko-blocks")},Object(a.createElement)(c.BaseControl,null,Object(a.createElement)(r.MediaUpload,{onSelect:function(e){l({imageID:e.id,imageURL:e.url,imageAlt:e.alt})},type:"image",value:t.imageID,render:function(e){var o=e.open;return function(e){var t=e.setAttributes,o=e.imageURL,l=e.ogImageURL,r=e.clear,i=e.open;return o||l?Object(a.createElement)("div",null,Object(a.createElement)(c.Button,{onClick:i,className:"qroko-blocks-blog-card-image-preview"},Object(a.createElement)("img",{src:o||l||"",alt:""})),Object(a.createElement)(c.Button,{onClick:function(){t(r)},className:"button"},Object(n.__)("Delete image","qroko-blocks"))):Object(a.createElement)(c.Button,{onClick:i,className:"button"},Object(n.__)("Add Image","qroko-blocks"))}({setAttributes:l,imageURL:t.imageURL,ogImageURL:t.ogImageURL,clear:{imageID:0,imageAlt:"",imageURL:"",ogImageURL:""},open:o})}})),Object(a.createElement)(c.BaseControl,null,Object(a.createElement)(c.RadioControl,{label:Object(n.__)("Image position","qroko-blocks"),selected:t.imagePosition,options:v,onChange:function(e){l({imagePosition:e})}})),Object(a.createElement)(c.BaseControl,null,Object(a.createElement)(c.RadioControl,{label:Object(n.__)("Image Fit","qroko-blocks"),selected:t.imageFit,options:C,onChange:function(e){l({imageFit:e})}})))),t.title&&Object(a.createElement)("div",{className:s()("qroko-blocks-blog-card-columns","right"===t.imagePosition?"is-reverse":"")},(t.imageURL||t.ogImageURL)&&Object(a.createElement)("div",{className:"qroko-blocks-blog-card-column is-flex-none"},Object(a.createElement)("div",{className:"qroko-blocks-blog-card-image-container"},i&&Object(a.createElement)(E,{setAttributes:l,clear:{imageID:0,imageAlt:"",imageURL:"",ogImageURL:""}}),Object(a.createElement)("div",{className:"qroko-blocks-blog-card-image-wrap"},Object(a.createElement)("img",{src:t.imageURL?t.imageURL:t.ogImageURL?t.ogImageURL:"",alt:t.imageAlt,className:s()("qroko-blocks-blog-card-image","is-"+t.imageFit)})))),Object(a.createElement)("div",{className:"qroko-blocks-blog-card-column is-padding is-flex-grow"},Object(a.createElement)("div",{className:"qroko-blocks-blog-card-meta"},t.title&&Object(a.createElement)("div",{className:"qroko-blocks-blog-card-heading"},t.title),t.description&&Object(a.createElement)("div",{className:"qroko-blocks-blog-card-description"},t.description),t.ogDomain&&Object(a.createElement)("div",{className:"qroko-blocks-blog-card-domain"},t.ogDomain)))),(i||!t.title)&&Object(a.createElement)("div",{className:"qroko-blocks-blog-card-columns is-padding is-gap is-bottom"},Object(a.createElement)("div",{className:"qroko-blocks-blog-card-column is-flex-grow"},Object(a.createElement)(c.TextControl,{label:Object(n.__)("Link URL","qroko-blocks"),value:t.url,onChange:function(e){l({url:e})},className:"is-margin-bottom-none"})),Object(a.createElement)("div",{className:"qroko-blocks-blog-card-column is-flex-none"},Object(a.createElement)(c.Button,{onClick:function(){return function(e){var t=e.url,o=e.attributes,a=e.setAttributes,n=new FormData;n.append("action","open_graph"),n.append("target_url",t),fetch(ajaxurl,{method:"POST",body:n,cache:"no-cache"}).then((function(e){return e.json()})).then((function(e){!function(e){var t,o=e.data,a=e.attributes,n=e.setAttributes,l=new URL(o.url).hostname,r=location.hostname,c=function(){var e=a.ogTitleCharacterCount;return(o.title?o.title.length:0)>=e?o.title.substr(0,e)+" ...":o.title};n({title:c(),description:(t=a.ogDescriptionCharacterCount,(o.description?o.description.length:0)>=t?o.description.substr(0,t)+" ...":o.description),imageID:0,imageURL:"",imageAlt:c(),ogDomain:l,ogImageURL:o.image,externalLink:l!=r})}({data:e[0],attributes:o,setAttributes:a})})).catch((function(e){console.log(e)}))}({url:t.url,attributes:t,setAttributes:l})},className:"button is-small"},Object(n.__)("Load","qroko-blocks")))))},save:function(e){var t=e.attributes,o=e.className;return Object(a.createElement)("div",{className:s()(o,"qroko-blocks-blog-card")},t.externalLink?Object(a.createElement)("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:"qroko-blocks-blog-card-link"}):Object(a.createElement)("a",{href:t.url,className:"qroko-blocks-blog-card-link"}),Object(a.createElement)("div",{className:s()("qroko-blocks-blog-card-columns","right"===t.imagePosition?"is-reverse":"")},(t.imageURL||t.ogImageURL)&&Object(a.createElement)("div",{className:"qroko-blocks-blog-card-column is-flex-none"},Object(a.createElement)("div",{className:"qroko-blocks-blog-card-image-container"},Object(a.createElement)("div",{className:"qroko-blocks-blog-card-image-wrap"},Object(a.createElement)("img",{src:t.imageURL?t.imageURL:t.ogImageURL?t.ogImageURL:"",alt:t.imageAlt,className:s()("qroko-blocks-blog-card-image","is-"+t.imageFit)})))),Object(a.createElement)("div",{className:"qroko-blocks-blog-card-column is-padding is-flex-grow"},Object(a.createElement)("div",{className:"qroko-blocks-blog-card-meta"},t.title&&Object(a.createElement)("div",{className:"qroko-blocks-blog-card-heading"},t.title),t.description&&Object(a.createElement)("div",{className:"qroko-blocks-blog-card-description"},t.description),t.ogDomain&&Object(a.createElement)("div",{className:"qroko-blocks-blog-card-domain"},t.ogDomain)))))}})}]);