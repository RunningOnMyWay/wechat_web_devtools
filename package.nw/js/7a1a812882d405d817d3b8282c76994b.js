'use strict';!function(require,directRequire){function a(){q=void 0}function b(){a()}async function c(c){let d=await e(c);o&&o.srcPath==d.srcPath||(a(),o&&o.unWatch(b),o=d,o.watch(b)),p&&p.es6!=c.setting.es6&&a(),p=c.setting}const d=require('source-map'),e=require('./a63026ab5a5a3c59a61a9749a18aa2ca.js'),f=require('./a89be4febc57a81e9865a060f74e14c8.js'),g=require('./e53dfc2b83456f986002c49964f30fbf.js'),h=require('./80a27260d67a4c5a94011a75ea778fcb.js'),i=require('./6e1614a32b5d10964071477dd7310d21.js'),j=require('./2d8c17f8789be1869edbd369314f5eaa.js'),k=require('./503c215d003cb9646f16deee95253baf.js'),{NO_BOM_VAR:l}=require('./6242f55dbdfe53c2f07b7a51568311f2.js'),m=require('./72653d4b93cdd7443296229431a7aa9a.js'),n=['define','require','module','exports','global','wx','App','Page','Component','Behavior','getApp','getCurrentPages'];var o,p,q=void 0;const r=async(a,b={})=>{const{pluginId:c,version:e}=b;let j=[],p=[],q=new d.SourceMapGenerator({file:`${c}.js`}),r=0;const s=await f(a);p.push(`definePlugin("plugin://${c}", function(${n.join(',')}) {`),p.push('var __wxAppCode__ = global.__wxAppCode__'),j.push(p.join(';')),r++;let t=await i(a,{cut:!0,pluginId:c,version:e});j.push(`${t.code}`),r+=t.code.split('\n').length;let u=await k(a,{wxss:!1,prefix:t.name,pluginId:c,version:e});j.push(u.join(';')),r++;let v=o.getAllJSFiles(),w={};for(let c,e=0,f=v.length;e<f;e++){if(c=v[e],w[c])continue;w[c]=!0;let b=await h(a,c);if(j.push(`define("${c}", function(require, module, exports, ${l}){ "use strict";`),r++,j.push(b.code),b.map)try{let a=new d.SourceMapConsumer(b.map);q.setSourceContent(c,a.sourcesContent[0]),a.eachMapping((a)=>{q.addMapping({generated:{line:r+a.generatedLine,column:a.generatedColumn},original:{line:a.originalLine,column:a.originalColumn},source:c,name:a.name})})}catch(a){m.error(`error while running sourcemap generation for plugin code that is babelled: \n\t [file]: ${c} \n\t [error info]: ${a}`)}else if(b.code){q.setSourceContent(c,b.code);for(let a=1,d=b.code.split('\n').length;a<=d;a++)q.addMapping({generated:{line:r+a,column:0},original:{line:a,column:0},source:c})}r+=b.code.split('\n').length,j.push(`})`),r++}let x=await g.getFileList(a);if(w={},p=[],x.forEach((a)=>{if(!w[a]){w[a]=!0;let b=a.replace(/\"/g,'\\"');p.push(`global.__wxAppCurrentFile__ = "plugin-private://${c}/${b}.js"`),p.push(`global.__wxRoute = "__plugin__/${c}/${b}"`),p.push(`global.__wxRouteBegin = true`),p.push(`require("${a}.js")`)}}),j.push(p.join(';')),r++,s.publicComponents||s.pages){for(let a in p=[],s.publicComponents)p.push(`"plugin://${c}/${a}": "plugin-private://${c}/${s.publicComponents[a]}"`);for(let a in s.pages)p.push(`"plugin://${c}/${a}": "plugin-private://${c}/${s.pages[a]}"`);j.push(`global.publishDomainComponents({${p.join(',')}})`),r++}return s.main&&(j.push(`module.exports = function(){return require("${s.main}")}`),r++),j.push(`})
requirePlugin("plugin://${c}")
//# sourceMappingURL=appservice.js.map`),r+=2,{key:`${c}_${e}`,code:j.join('\n'),sourcemap:q.toString()}};module.exports={getServiceCode:async(a,b={})=>{const{pluginId:d,version:e}=b,f=`${d}_${e}`;if('dev'==e)return d==a.appid?(await c(a),q&&q.key==f||(q=await r(a,b)),q.code):'';let g=await j.getCode(d,e);return g['/appservice.js']},getServiceCodeMap:async(a,b={})=>{const{pluginId:c,version:d}=b;return'dev'==d&&c==a.appid&&q?q.sourcemap:''}}}(require('lazyload'),require);