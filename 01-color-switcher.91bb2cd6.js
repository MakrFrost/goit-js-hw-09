function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var d=r("eWCmQ");const i=document.querySelector("button[data-start]"),u=document.querySelector("button[data-stop]"),l=document.getElementsByTagName("body")[0];let a=null;function c(){l.style.cssText=`background-color:${s()}`,e(d).Notify.success.background=`${s()}`,e(d).Notify.success(`Цвет изменён на ${s()}`)}function s(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}i.addEventListener("click",(function(){i.setAttribute("disabled",!0),a=setInterval(c,1e3)})),u.addEventListener("click",(function(){i.removeAttribute("disabled",!1),clearTimeout(a)}));
//# sourceMappingURL=01-color-switcher.91bb2cd6.js.map
