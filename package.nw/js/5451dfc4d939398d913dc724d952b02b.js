'use strict';!function(require,directRequire){const a=require('./c8f9a38f906c462500d1d8c38f4bac7a.js'),b=require('./d6a4005cc6e9fb5b030ef47f546d825f.js'),c=require('./535a84422c995fb798afe973987dd942.js'),d=require('./41f4eba9fb17703b7d61eca8b05aa076.js'),e=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),f=require('./56c390e04c10e91a4aa2a2c19d9a885d.js');let g,h=global.isSimple?b:a;const i=()=>{h.update(g)},j=(a,b)=>{return a.project&&a.project.current&&b.project&&b.project.current&&a.project.current.condiction!=b.project.current.condiction},k=(a,b)=>{return a.project&&a.project.current&&b.project&&b.project.current&&a.project.current.attr!=b.project.current.attr},l=(a,b)=>{return a.settings&&a.settings.shortcuts&&b.settings&&b.settings.shortcuts&&a.settings.shortcuts!==b.settings.shortcuts};let m=e.getState();e.subscribe(()=>{let a=e.getState();(m.window!==a.window||l(m,a)||j(m,a)||k(m,a))&&i(),m=a}),module.exports={init:(d)=>{const i=e.getState();h=i.window&&i.window.mainWindow===f.MAIN_WINDOW_TYPE.WEB_DEBUGGER?c:global.isSimple?b:a,h.init(d),g=d,m=i},update:i}}(require('lazyload'),require);