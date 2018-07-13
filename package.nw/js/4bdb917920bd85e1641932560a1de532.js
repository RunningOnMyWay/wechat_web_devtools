'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('fs'),b=require('path'),c=require('qrcode-terminal'),d=require('./84858de8a097c9cf84ff2c2e3d86e2a9.js'),e=require('./42191d95974f14b18961c9f2c730464e.js'),f=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),g=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),h=require('./d28a711224425b00101635efe1034c99.js'),i=require('./6242f55dbdfe53c2f07b7a51568311f2.js'),j=require('./f0466135fc8b3a662084784e5f4ac792.js'),k=require('./15ba1827c7f6564a45df6bd44da3a977.js'),l=require('./9fdd4ac31a05c27355910f0d74accd4c.js'),m=require('./5eb00762b104199e0cf0af7efbe591da.js'),n=require('./6b0bd6bb0fa981d25d4c0fb4b85edbab.js'),o=require('./36244f5aa8a25574083d64e28953b466.js'),p=require('./78294f0b5b50fc38258d7028553744ef.js'),q=require('./5719b6ded53098ffd9e848abcac30153.js'),r=require('./da7c31daaf542cf1796023d8e344b98a.js'),s={network:{RequestDomain:[],WsRequestDomain:[],UploadDomain:[],DownloadDomain:[]},setting:_extends({},i.setting)},t=({test:i=!0,projectpath:b,version:d,desc:e,appid:f,format:k='image',qroutput:g,infoOutput:h}={})=>new Promise(async(f,r)=>{let s;if(s=p.checkProjectPath(b),s.error)return r(s.error);if(h&&(s=p.checkInfoOutput(h),s.error))return r(s.error);if(i)if(!k)k='image';else if(s=p.checkFormat(k),s.error)return r(s.error);if(i&&g&&(s=p.checkQROutput(g),s.error))return r(s.error);if(!i&&(s=p.checkVersion(d),s.error))return r(s.error);let t;if(s=p.checkProjectConfigJSON(b),s.error)return r(s.error);if(t=s.config,!t.appid)return r(q.ERROR.NOT_FOUND_IN_PROJECT_CONFIG_JSON('appid'));let u;try{u=await m.getAppInfo(t.appid)}catch(a){r(a)}try{let m=await o.getProject(u,t,b),p={test:i,tempProject:m,onFilesIgnored:function(){}};if(!i)p.version=d,p.desc=e;else if(t.compileType&&t.condiction){let a=t.compileType,b=t.condiction[a]||{},c=b.list&&b.list[b.current];a==l.search?c&&(p.searchQuery=c.customQuery||c.query,p.boxQI=c.customQuery?'':c.boxQI):a==l.weapp&&(p.page=c?c.pathName:void 0,p.query=c?c.query:'')}else p.page=void 0,p.query='';j(p).then(async(b)=>{if(h){const c={size:{total:+(b.wxpkg_size/1024).toFixed(2),packages:b.subpackage_info&&b.subpackage_info.sort((a,b)=>a.name<b.name).map((a)=>{return'__APP__'===a.name?{name:'main',size:+(a.size/1024).toFixed(2)}:{name:a.name,size:+(a.size/1024).toFixed(2)}})||void 0}};a.writeFileSync(h,JSON.stringify(c,null,2),'utf8')}if(i){const d=b.qrcode_img;if('terminal'==k)try{const b=await n.decodeQRCode(new Buffer(d,'base64'),t.appid);c.generate(b,(b)=>{g&&a.writeFileSync(g,b),f({qrcode:b,encoding:'utf8'})})}catch(a){r(q.ERROR.GENERIC_ERROR(a.toString()))}else'image'==k?(g&&a.writeFileSync(g,new Buffer(d,'base64')),f({qrcode:new Buffer(d,'base64'),encoding:null})):'base64'==k&&(g&&a.writeFileSync(g,d,'utf8'),f({qrcode:d,encoding:'utf8'}))}else{const a=b.baseresponse;if(a){const b=a.errcode;0===b?f():r(q.ERROR.GENERIC_ERROR('\u672A\u77E5\u4E0A\u4F20\u7ED3\u679C'))}else r(q.ERROR.GENERIC_ERROR('\u672A\u77E5\u4E0A\u4F20\u7ED3\u679C'))}global.CLI.project=null}).catch((a)=>{global.CLI.project=null,r(q.ERROR.GENERIC_ERROR(a.toString()))})}catch(a){global.CLI.project=null,r(q.ERROR.GENERIC_ERROR(a.toString()))}});module.exports={handleUpload:t,registerHandlers:(a)=>{a.get('/preview',async(a,b)=>{try{const c=decodeURIComponent(a.mQuery.projectpath||''),d=decodeURIComponent(a.mQuery.format||''),e=decodeURIComponent(a.mQuery.qroutput||''),f=decodeURIComponent(a.mQuery.infooutput||''),g=decodeURIComponent(a.mQuery.cli||''),h=decodeURIComponent(a.mQuery.from||'');g?r('cli_preview',null,null,h?{engine_from:h}:null):r('http_preview',null,null,h?{engine_from:h}:null);const i=await t({projectpath:c,format:d,qroutput:e,infoOutput:f,test:!0});b.statusCode=200,b.end(i.qrcode,i.encoding)}catch(a){a?(b.statusCode=400,b.end(a)):(b.statusCode=500,b.end())}}),a.get('/upload',async(a,b)=>{try{const c=decodeURIComponent(a.mQuery.projectpath||''),d=decodeURIComponent(a.mQuery.version||''),e=decodeURIComponent(a.mQuery.desc||''),f=decodeURIComponent(a.mQuery.format||''),g=decodeURIComponent(a.mQuery.qroutput||''),h=decodeURIComponent(a.mQuery.infooutput||''),i=decodeURIComponent(a.mQuery.cli||''),j=decodeURIComponent(a.mQuery.from||'');i?r('cli_upload',null,null,j?{engine_from:j}:null):r('http_upload',null,null,j?{engine_from:j}:null);await t({projectpath:c,version:d,desc:e,format:f,qroutput:g,infoOutput:h,test:!1});b.statusCode=200,b.end()}catch(a){a?(b.statusCode=a.statusCode||400,b.end(a.toString())):(b.statusCode=500,b.end(q.ERROR.GENERIC_ERROR()))}})}}}(require('lazyload'),require);