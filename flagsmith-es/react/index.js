import t,{createContext as n,useRef as r,useContext as e,useState as i,useCallback as o,useEffect as a,useMemo as u}from"react";var c=function(){return c=Object.assign||function(t){for(var n,r=1,e=arguments.length;r<e;r++)for(var i in n=arguments[r])Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t},c.apply(this,arguments)},f={exports:{}};function s(){}s.prototype={on:function(t,n,r){var e=this.e||(this.e={});return(e[t]||(e[t]=[])).push({fn:n,ctx:r}),this},once:function(t,n,r){var e=this;function i(){e.off(t,i),n.apply(r,arguments)}return i._=n,this.on(t,i,r)},emit:function(t){for(var n=[].slice.call(arguments,1),r=((this.e||(this.e={}))[t]||[]).slice(),e=0,i=r.length;e<i;e++)r[e].fn.apply(r[e].ctx,n);return this},off:function(t,n){var r=this.e||(this.e={}),e=r[t],i=[];if(e&&n)for(var o=0,a=e.length;o<a;o++)e[o].fn!==n&&e[o].fn._!==n&&i.push(e[o]);return i.length?r[t]=i:delete r[t],this}},f.exports=s,f.exports.TinyEmitter=s;var l=new f.exports.TinyEmitter,h=n(null),p=function(n){var e=n.flagsmith,i=n.options,o=n.serverState,a=n.children,u=r(!0);return o&&!e.initialised&&e.setState(o),u.current&&(u.current=!1,i?e.init(c(c({},i),{onChange:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];i.onChange&&i.onChange.apply(i,t),l.emit("event")}})):e.trigger=function(){return l.emit("event")}),t.createElement(h.Provider,{value:e},a)},v=function(t){var n=r(t);return n.current||(n.current=t),n.current},g=function(t){if("string"==typeof t)return[t];if("object"==typeof t&&t.hasOwnProperty("length"))return t;throw new Error("Flagsmith: please supply an array of strings or a single string of flag keys to useFlags")},m=function(t,n,r){return void 0===r&&(r=[]),n.map((function(n){return"".concat(t.getValue(n)).concat(t.hasFeature(n))})).concat(r.map((function(n){return"".concat(t.getTrait(n))}))).join(",")};function y(t,n){void 0===n&&(n=[]);var c=v(g(t)),f=v(g(n)),s=e(h),p=i(m(s,c)),y=p[0],d=p[1],w=r(y),x=o((function(){var t=m(s,c,f);t!==w.current&&(w.current=t,d(t))}),[]);return a((function(){return l.on("event",x),function(){l.off("event",x)}}),[]),u((function(){var t={};return c.map((function(n){t[n]={enabled:s.hasFeature(n),value:s.getValue(n)}})).concat(null==f?void 0:f.map((function(n){t[n]=s.getTrait(n)}))),t}),[y])}function d(){var t=e(h);if(!t)throw new Error("useFlagsmith must be used with in a FlagsmithProvider");return t}export{h as FlagsmithContext,p as FlagsmithProvider,y as useFlags,d as useFlagsmith};
//# sourceMappingURL=index.js.map
