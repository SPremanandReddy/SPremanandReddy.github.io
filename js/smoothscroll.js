window.jQuery||alert("The jQuery library must be included before the smoothscroll.js file.  The plugin will not work propery."),function(e){var t=e.scrollTo=function(t,o,n){e(window).scrollTo(t,o,n)};function o(e){return"object"==typeof e?e:{top:e,left:e}}t.defaults={axis:"xy",duration:parseFloat(e.fn.jquery)>=1.3?0:1,limit:!0},t.window=function(t){return e(window)._scrollable()},e.fn._scrollable=function(){return this.map(function(){if(!(!this.nodeName||-1!=e.inArray(this.nodeName.toLowerCase(),["iframe","#document","html","body"])))return this;var t=(this.contentWindow||this).document||this.ownerDocument||this;return/webkit/i.test(navigator.userAgent)||"BackCompat"==t.compatMode?t.body:t.documentElement})},e.fn.scrollTo=function(n,r,i){return"object"==typeof r&&(i=r,r=0),"function"==typeof i&&(i={onAfter:i}),"max"==n&&(n=9e9),i=e.extend({},t.defaults,i),r=r||i.duration,i.queue=i.queue&&i.axis.length>1,i.queue&&(r/=2),i.offset=o(i.offset),i.over=o(i.over),this._scrollable().each(function(){if(null!=n){var l,s=this,a=e(s),c=n,f={},u=a.is("html,body");switch(typeof c){case"number":case"string":if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(c)){c=o(c);break}if(!(c=e(c,this)).length)return;case"object":(c.is||c.style)&&(l=(c=e(c)).offset())}e.each(i.axis.split(""),function(e,o){var n="x"==o?"Left":"Top",r=n.toLowerCase(),d="scroll"+n,m=s[d],p=t.max(s,o);if(l)f[d]=l[r]+(u?0:m-a.offset()[r]),i.margin&&(f[d]-=parseInt(c.css("margin"+n))||0,f[d]-=parseInt(c.css("border"+n+"Width"))||0),f[d]+=i.offset[r]||0,i.over[r]&&(f[d]+=c["x"==o?"width":"height"]()*i.over[r]);else{var b=c[r];f[d]=b.slice&&"%"==b.slice(-1)?parseFloat(b)/100*p:b}i.limit&&/^\d+$/.test(f[d])&&(f[d]=f[d]<=0?0:Math.min(f[d],p)),!e&&i.queue&&(m!=f[d]&&h(i.onAfterFirst),delete f[d])}),h(i.onAfter)}function h(e){a.animate(f,r,i.easing,e&&function(){e.call(this,n,i)})}}).end()},t.max=function(t,o){var n="x"==o?"Width":"Height",r="scroll"+n;if(!e(t).is("html,body"))return t[r]-e(t)[n.toLowerCase()]();var i="client"+n,l=t.ownerDocument.documentElement,s=t.ownerDocument.body;return Math.max(l[r],s[r])-Math.min(l[i],s[i])}}(jQuery),function(e){function t(t,o,n){var r=o.hash.slice(1),i=document.getElementById(r)||document.getElementsByName(r)[0];if(i){t&&t.preventDefault();var l=e(n.target);if(!(n.lock&&l.is(":animated")||n.onBefore&&!1===n.onBefore(t,i,l))){if(n.stop&&l._scrollable().stop(!0),n.hash){var t=i.id==r?"id":"name",s=e("<a> </a>").attr(t,r).css({position:"absolute",top:e(window).scrollTop(),left:e(window).scrollLeft()});i[t]="",e("body").prepend(s),location=o.hash,s.remove(),i[t]=r}l.scrollTo(i,n).trigger("notify.serialScroll",[i])}}}var o=location.href.replace(/#.*/,""),n=e.localScroll=function(t){e("body").localScroll(t)};n.defaults={duration:1e3,axis:"y",event:"click",stop:!0,target:window,reset:!0},n.hash=function(o){if(location.hash){if((o=e.extend({},n.defaults,o)).hash=!1,o.reset){var r=o.duration;delete o.duration,e(o.target).scrollTo(0,o),o.duration=r}t(0,location,o)}},e.fn.localScroll=function(r){function i(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,"")==o&&(!r.filter||e(this).is(r.filter))}return(r=e.extend({},n.defaults,r)).lazy?this.bind(r.event,function(o){var n=e([o.target,o.target.parentNode]).filter(i)[0];n&&t(o,n,r)}):this.find("a,area").filter(i).bind(r.event,function(e){t(e,this,r)}).end().end()}}(jQuery),jQuery(function(e){e.localScroll({filter:".smoothScroll"})});