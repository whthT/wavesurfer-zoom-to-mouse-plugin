!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.WaveSurferZoomToMousePlugin=r():e.WaveSurferZoomToMousePlugin=r()}(self,(function(){return(()=>{"use strict";var e={536:(e,r,t)=>{t.r(r),t.d(r,{default:()=>o});class o{static create(e){return{name:"zoomToMousePlugin",deferInit:!(!e||!e.deferInit)&&e.deferInit,params:e,staticProps:{},instance:o}}constructor(e,r){this.params=e,this.wavesurfer=r,this.mouseDuration=null}zoomToMouse(e){e?(this.wavesurfer.params.minPxPerSec=e,this.wavesurfer.params.scrollParent=!0):(this.wavesurfer.params.minPxPerSec=this.wavesurfer.defaultParams.minPxPerSec,this.wavesurfer.params.scrollParent=!1),this.wavesurfer.drawBuffer(),this.wavesurfer.drawer.progress(this.wavesurfer.backend.getPlayedPercents()),this.wavesurfer.drawer.recenter(this.mouseDuration),this.wavesurfer.fireEvent("zoom",e)}_onWaveFormMouseWheelEvent(e){e.preventDefault();const r=this.wavesurfer.params.minPxPerSec;var t=0;e.deltaY?t=e.deltaY:e.wheelDelta&&(t=-e.wheelDelta);let o=r;o=t<0?r+20:r-20>0?r-20:0,this.zoomToMouse(o)}_onWaveFormMouseMove(e){const r=this.wavesurfer.drawer.handleEvent(e);this.mouseDuration=r}init(){this.wavesurfer.container.addEventListener("wheel",this._onWaveFormMouseWheelEvent.bind(this)),this.wavesurfer.container.addEventListener("mousemove",this._onWaveFormMouseMove.bind(this))}destroy(){this.wavesurfer.container.removeEventListener("wheel",this._onWaveFormMouseWheelEvent.bind(this)),this.wavesurfer.container.addEventListener("mousemove",this._onWaveFormMouseMove.bind(this))}}}},r={};function t(o){if(r[o])return r[o].exports;var s=r[o]={exports:{}};return e[o](s,s.exports,t),s.exports}return t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t(536)})()}));