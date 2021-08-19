/**
* Pikadaytime
* https://github.com/foo123/Pikadaytime
* @version 2.0.2
*
* adapted from:
* Copyright © 2014 David Bushell | BSD & MIT license | https://github.com/dbushell/Pikaday, https://github.com/owenmead/Pikaday
**/
!function(e,t){"use strict";"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd?define(function(e){return t()}):e.Pikadaytime=t()}("undefined"!=typeof self?self:this,function(){"use strict";function i(e,t,n,o){f?e.addEventListener(t,n,!!o):e.attachEvent("on"+t,n)}function a(e,t,n,o){f?e.removeEventListener(t,n,!!o):e.detachEvent("on"+t,n)}function s(e,t,n){var o;h.createEvent?((o=h.createEvent("HTMLEvents")).initEvent(t,!0,!1),o=_(o,n),e.dispatchEvent(o)):h.createEventObject&&(o=h.createEventObject(),o=_(o,n),e.fireEvent("on"+t,o))}function r(e,t){return e.classList?e.classList.contains(t):-1!==(" "+e.className+" ").indexOf(" "+t+" ")}function g(e){return"[object Array]"===Object.prototype.toString.call(e)}function w(e){return"[object Date]"===Object.prototype.toString.call(e)&&!isNaN(e.getTime())}function D(e,t,n){t?(e.setMilliseconds(0),n||e.setSeconds(0)):e.setHours(0,0,0,0)}function o(e,t){return t._o.showTime?e.toString():e.toDateString()}function l(e,t){return new Date(Date.parse(e))}function n(e){return e.month<0&&(e.year-=Math.ceil(Math.abs(e.month)/12),e.month+=12),11<e.month&&(e.year+=Math.floor(Math.abs(e.month)/12),e.month-=12),e}function d(e,t,n){return 7<=(t+=e.firstDay)&&(t%=7),(n?e.i18n.weekdaysShort:e.i18n.weekdays)[t]}function b(e,t){return'<table cellpadding="0" cellspacing="0" class="pika-table">'+function(e){var t,n=[];for(e.showWeekNumber&&n.push("<th></th>"),t=0;t<7;t++)n.push('<th scope="col"><abbr title="'+d(e,t)+'">'+d(e,t,!0)+"</abbr></th>");return"<thead>"+(e.isRTL?n.reverse():n).join("")+"</thead>"}(e)+"<tbody>"+t.join("")+"</tbody></table>"}function c(e,t,n,o,a){for(var i='<td><select title="'+a+'" class="pika-select '+n+'">',s=0;s<e;s++)i+='<option value="'+s+'" '+(s==t?"selected":"")+">"+o(s)+"</option>";return i+="</select></td>"}function u(e){return(e<10?"0":"")+e}function e(e){e=e||{};var o=this,a=o.config(e);o._t_update=!1,o._onMouseDown=function(e){if(o._v){var t=(e=e||window.event).target||e.srcElement;if(t){if(!r(t,"is-disabled")){if(r(t,"pika-button")&&!r(t,"is-empty")){var n=new Date(t.getAttribute("data-pika-year"),t.getAttribute("data-pika-month"),t.getAttribute("data-pika-day"),a.showTime?o.el.querySelector(".pika-select-hour").selectedIndex:0,a.showTime?o.el.querySelector(".pika-select-minute").selectedIndex:0,a.showTime&&a.showSeconds?o.el.querySelector(".pika-select-second").selectedIndex:0,0);return o.setDate(n),void(a.bound&&p(function(){o.hide(),a.field&&a.field.blur()},100))}r(t,"pika-prev")?o.prevMonth():r(t,"pika-next")&&o.nextMonth()}if(r(t,"pika-select"))o._c=!0;else{if(!e.preventDefault)return e.returnValue=!1;e.preventDefault()}}}},o._onChange=function(e){e=(e=e||window.event).target||e.srcElement;e&&(r(e,"pika-select-month")?o.gotoMonth(e.value):r(e,"pika-select-year")?o.gotoYear(e.value):r(e,"pika-select-hour")?o.setTime(e.value):r(e,"pika-select-minute")?o.setTime(null,e.value):r(e,"pika-select-second")&&o.setTime(null,null,e.value))},o._onInputChange=function(e){e.firedBy!==o&&(e=a.decoder(a.field.value,o),o.setDate(e),o._v||o.show())},o._onInputFocus=function(){o.show()},o._onInputClick=function(){o.show()},o._onInputBlur=function(){o._c||(o._b=p(function(){o.hide()},50)),o._c=!1},o._onClick=function(e){var e=(e=e||window.event).target||e.srcElement,t=e;if(e){!f&&r(e,"pika-select")&&(e.onchange||(e.setAttribute("onchange","return;"),i(e,"change",o._onChange)));do{if(r(t,"pika-single")||a.showTime&&r(t,"pika-time-container"))return}while(t=t.parentNode);o._v&&e!==a.trigger&&o.hide()}},o.el=h.createElement("div"),o.el.className="pika-single"+(a.isRTL?" is-rtl":""),"onmousedown"in o.el&&i(o.el,"mousedown",o._onMouseDown,!0),"ontouchend"in o.el&&i(o.el,"touchend",o._onMouseDown,!0),i(o.el,"change",o._onChange),a.field&&(a.container?a.container.appendChild(o.el):a.bound?h.body.appendChild(o.el):a.field.parentNode.insertBefore(o.el,a.field.nextSibling),i(a.field,"change",o._onInputChange),a.defaultDate||(a.defaultDate=a.decoder(a.field.value,o),a.setDefaultDate=!0)),e=a.defaultDate,w(e)?a.setDefaultDate?o.setDate(e,!0):o.gotoDate(e):o.gotoDate(new Date),a.bound?(o.hide(),o.el.className+=" is-bound",i(a.trigger,"click",o._onInputClick),i(a.trigger,"focus",o._onInputFocus),i(a.trigger,"blur",o._onInputBlur)):o.show()}var f=!!window.addEventListener,h=window.document,p=window.setTimeout,t=/^\s+|\s+$/g,m=String.prototype.trim?function(e){return e.trim()}:function(e){return e.replace(t,"")},_=function(e,t,n){var o,a;for(o in t)(a=void 0!==e[o])&&"object"==typeof t[o]&&void 0===t[o].nodeName?w(t[o])?n&&(e[o]=new Date(t[o].getTime())):g(t[o])?n&&(e[o]=t[o].slice(0)):e[o]=_({},t[o],n):!n&&a||(e[o]=t[o]);return e},y={field:null,bound:void 0,position:"bottom left",format:"Y-m-d H:i:s",defaultDate:null,setDefaultDate:!1,firstDay:0,minDate:null,maxDate:null,yearRange:10,showWeekNumber:!1,minYear:0,maxYear:9999,minMonth:void 0,maxMonth:void 0,isRTL:!1,yearSuffix:"",showMonthAfterYear:!1,numberOfMonths:1,showTime:!0,showSeconds:!0,mainCalendar:"left",container:void 0,i18n:{AM:"am",PM:"pm",hours:"Hours",minutes:"Minutes",seconds:"Seconds",previousMonth:"Previous Month",nextMonth:"Next Month",months:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},onSelect:null,onOpen:null,onClose:null,onDraw:null,encoder:!1,decoder:!1};return e.VERSION="2.0.2",e.prototype={constructor:e,config:function(e){var t=this;t._o||(t._o=_({},y,!0));var n=_(t._o,e,!0);n.encoder&&"function"==typeof n.encoder||(n.encoder=o),n.decoder&&"function"==typeof n.decoder||(n.decoder=l),n.isRTL=!!n.isRTL,n.showTime=!!n.showTime,n.showSeconds=!!n.showSeconds,n.field=n.field&&n.field.nodeName?n.field:null,n.bound=!!(void 0!==n.bound?n.field&&n.bound:n.field),n.trigger=n.trigger&&n.trigger.nodeName?n.trigger:n.field;e=parseInt(n.numberOfMonths||0,10)||1;return n.numberOfMonths=4<e?4:e,w(n.minDate)||(n.minDate=!1),w(n.maxDate)||(n.maxDate=!1),n.minDate&&n.maxDate&&n.maxDate<n.minDate&&(n.maxDate=n.minDate=!1),n.minDate&&t.setMinDate(n.minDate),n.maxDate&&t.setMaxDate(n.maxDate),g(n.yearRange)?(t=(new Date).getFullYear()-10,n.yearRange[0]=parseInt(n.yearRange[0],10)||t,n.yearRange[1]=parseInt(n.yearRange[1],10)||t):(n.yearRange=Math.abs(parseInt(n.yearRange,10))||y.yearRange,100<n.yearRange&&(n.yearRange=100)),n},toString:function(e){return w(this._d)?this._o.encoder(this._d,this):""},getDate:function(){return w(this._d)?new Date(this._d.getTime()):null},setTime:function(e,t,n){var o,a,i=this,s=i._o.showTime,r=i._o.showSeconds;i._t_update=!0,i._d?(o=i._d,null!=e&&(e=parseInt(e,10)||0,o.setHours(e),s&&(a=i.el.querySelector(".pika-select-hour"))&&(a.options[e].selected=!0)),null!=t&&(t=parseInt(t,10)||0,o.setMinutes(t),s&&(a=i.el.querySelector(".pika-select-minute"))&&(a.options[t].selected=!0)),null!=n&&(n=parseInt(n,10)||0,o.setSeconds(n),s&&r&&(a=i.el.querySelector(".pika-select-second"))&&(a.options[n].selected=!0))):((o=new Date).setHours(null!=e&&parseInt(e,10)||0,null!=t&&parseInt(t,10)||0,null!=n&&parseInt(n,10)||0,0),i.setDate(o))},setDate:function(e,t){var n=this;if("string"==typeof e&&(e=n._o.decoder(e,n)),w(e)||(e=null),n._t_update=!1,!e)return n._d=null,n._o.field&&(n._o.field.value="",s(n._o.field,"change",{firedBy:n})),n.draw();var o=n._o.minDate,a=n._o.maxDate;w(o)&&e<o?e=o:w(a)&&a<e&&(e=a),n._d=new Date(e.getTime()),D(n._d,n._o.showTime,n._o.showSeconds),n.gotoDate(n._d),n._o.field&&(n._o.field.value=n.toString(),s(n._o.field,"change",{firedBy:n})),t||"function"!=typeof n._o.onSelect||n._o.onSelect.call(n,n.getDate())},gotoDate:function(e){var t,n,o,a=this,i=!0;w(e)&&(e=new Date(e.getTime()),D(e),a.calendars&&(t=new Date(a.calendars[0].year,a.calendars[0].month,1),n=new Date(a.calendars[a.calendars.length-1].year,a.calendars[a.calendars.length-1].month,1),o=e.getTime(),n.setMonth(n.getMonth()+1),n.setDate(n.getDate()-1),i=o<t.getTime()||n.getTime()<o),i&&(a.calendars=[{month:e.getMonth(),year:e.getFullYear()}],"right"===a._o.mainCalendar&&(a.calendars[0].month+=1-a._o.numberOfMonths)),a.adjustCalendars())},adjustCalendars:function(){var e=this;e.calendars[0]=n(e.calendars[0]);for(var t=1;t<e._o.numberOfMonths;t++)e.calendars[t]=n({month:e.calendars[0].month+t,year:e.calendars[0].year});e.draw()},gotoToday:function(){this.gotoDate(new Date)},gotoMonth:function(e){isNaN(e)||(this.calendars[0].month=parseInt(e,10),this.adjustCalendars())},nextMonth:function(){this.calendars[0].month++,this.adjustCalendars()},prevMonth:function(){this.calendars[0].month--,this.adjustCalendars()},gotoYear:function(e){isNaN(e)||(this.calendars[0].year=parseInt(e,10),this.adjustCalendars())},setMinDate:function(e){var t=this;w(e)&&(D(e,t._o.showTime,t._o.showSeconds),t._o.minDate=e,t._o.minYear=e.getFullYear(),t._o.minMonth=e.getMonth())},setMaxDate:function(e){var t=this;w(e)&&(D(e,t._o.showTime,t._o.showSeconds),t._o.maxDate=e,t._o.maxYear=e.getFullYear(),t._o.maxMonth=e.getMonth())},draw:function(e){var t=this;if(t._v||e){var n=t._o,o=n.minYear,a=n.maxYear,i=n.minMonth,s=n.maxMonth,e=!!t._d,r="";t._y<=o&&(t._y=o,!isNaN(i)&&t._m<i&&(t._m=i)),t._y>=a&&(t._y=a,!isNaN(s)&&t._m>s&&(t._m=s));for(var l,d=0;d<n.numberOfMonths;d++)r+='<div class="pika-lendar">'+function(e,t,n,o,a){for(var i,s,r,l=e._o,d=n===l.minYear,c=n===l.maxYear,u='<div class="pika-title">',f=!0,h=!0,p=[],m=0;m<12;m++)p.push('<option value="'+(n===a?m-t:12+m-t)+'"'+(m===o?" selected":"")+(d&&m<l.minMonth||c&&m>l.maxMonth?"disabled":"")+">"+l.i18n.months[m]+"</option>");for(s='<div class="pika-label">'+l.i18n.months[o]+'<select class="pika-select pika-select-month">'+p.join("")+"</select></div>",i=g(l.yearRange)?(m=l.yearRange[0],l.yearRange[1]+1):(m=n-l.yearRange,1+n+l.yearRange),p=[];m<i&&m<=l.maxYear;m++)m>=l.minYear&&p.push('<option value="'+m+'"'+(m===n?" selected":"")+">"+m+"</option>");return r='<div class="pika-label">'+n+l.yearSuffix+'<select class="pika-select pika-select-year">'+p.join("")+"</select></div>",l.showMonthAfterYear?u+=r+s:u+=s+r,d&&(0===o||l.minMonth>=o)&&(f=!1),c&&(11===o||l.maxMonth<=o)&&(h=!1),0===t&&(u+='<button class="pika-prev'+(f?"":" is-disabled")+'" type="button">'+l.i18n.previousMonth+"</button>"),t===e._o.numberOfMonths-1&&(u+='<button class="pika-next'+(h?"":" is-disabled")+'" type="button">'+l.i18n.nextMonth+"</button>"),u+"</div>"}(t,d,t.calendars[d].year,t.calendars[d].month,t.calendars[0].year)+t.render(t.calendars[d].year,t.calendars[d].month)+"</div>";n.showTime&&(r+='<div class="pika-time-container">'+(a=e?t._d.getHours():0,s=e?t._d.getMinutes():0,e=e&&n.showSeconds?t._d.getSeconds():0,'<table cellpadding="0" cellspacing="0" class="pika-time"><tbody><tr>'+c(24,a,"pika-select-hour",!1!==(l=n).hour24?u:function(e){return e%12+" "+(e<12?l.i18n.AM:l.i18n.PM)},l.i18n.hours)+'<td><span class="pika-time-sep">:</span></td>'+c(60,s,"pika-select-minute",u,l.i18n.minutes)+(l.showSeconds?'<td><span class="pika-time-sep">:</span></td>'+c(60,e,"pika-select-second",u,l.i18n.seconds):"")+"</tr></tbody></table>")+"</div>"),t.el.innerHTML=r,n.bound&&"hidden"!==n.field.type&&p(function(){n.trigger.focus()},1),"function"==typeof t._o.onDraw&&p(function(){t._o.onDraw.call(t)},0)}},adjustPosition:function(){var e=this;if(!e._o.container){var t,n,o,a=e._o.trigger,i=a,s=e.el.offsetWidth,r=e.el.offsetHeight,l=window.innerWidth||h.documentElement.clientWidth,d=window.innerHeight||h.documentElement.clientHeight,c=window.pageYOffset||h.body.scrollTop||h.documentElement.scrollTop;if("function"==typeof a.getBoundingClientRect)t=(o=a.getBoundingClientRect()).left+window.pageXOffset,n=o.bottom+window.pageYOffset;else for(t=i.offsetLeft,n=i.offsetTop+i.offsetHeight;i=i.offsetParent;)t+=i.offsetLeft,n+=i.offsetTop;(l<t+s||-1<e._o.position.indexOf("right")&&0<t-s+a.offsetWidth)&&(t=t-s+a.offsetWidth),(d+c<n+r||-1<e._o.position.indexOf("top")&&0<n-r-a.offsetHeight)&&(n=n-r-a.offsetHeight),e.el.style.cssText=["position: absolute","left: "+t+"px","top: "+n+"px"].join(";")}},render:function(e,t){var n,o=this._o,a=(o.showTime,w(this._d)),i=a?new Date(this._d.getTime()):null,s=new Date,r=[31,0==(n=n=e)%4&&0!=n%100||0==n%400?29:28,31,30,31,30,31,31,30,31,30,31][t],l=new Date(e,t,1).getDay(),d=[],c=[];D(s),a&&D(i),0<o.firstDay&&(l-=o.firstDay)<0&&(l+=7);for(var u=r+l,f=u;7<f;)f-=7;u+=7-f;for(var h,p=0,m=0;p<u;p++){var g=new Date(e,t,p-l+1),_=o.minDate&&g<o.minDate||o.maxDate&&g>o.maxDate,y=!!a&&g.getTime()===i.getTime(),v=g.getTime()===s.getTime(),g=p<l||r+l<=p;c.push(function(e,t,n,o,a,i,s){if(s)return'<td class="is-empty"></td>';s=[];return i&&s.push("is-disabled"),a&&s.push("is-today"),o&&s.push("is-selected"),'<td data-day="'+e+'" class="'+s.join(" ")+'"><button class="pika-button pika-day" type="button" data-pika-year="'+n+'" data-pika-month="'+t+'" data-pika-day="'+e+'">'+e+"</button></td>"}(p-l+1,t,e,y,v,_,g)),7==++m&&(o.showWeekNumber&&c.unshift((v=p-l,_=t,g=e,h=void 0,h=new Date(g,0,1),'<td class="pika-week">'+Math.ceil(((new Date(g,_,v)-h)/864e5+h.getDay()+1)/7)+"</td>")),d.push((h=c,"<tr>"+(o.isRTL?h.reverse():h).join("")+"</tr>")),c=[],m=0)}return b(o,d)},isVisible:function(){return this._v},show:function(){var e,t,n=this;n._v||(e=n.el,t="is-hidden",e.classList?e.classList.remove(t):e.className=m((" "+e.className+" ").replace(" "+t+" "," ")),n._v=!0,n.draw(),n._o.bound&&(i(h,"click",n._onClick),n.adjustPosition()),"function"==typeof n._o.onOpen&&n._o.onOpen.call(n))},hide:function(){var e,t,n=this,o=n._v;!1!==o&&(n._o.bound&&a(h,"click",n._onClick),n.el.style.cssText="",e=n.el,r(e,t="is-hidden")||(e.classList?e.classList.add(t):e.className=""===e.className?t:e.className+" "+t),n._v=!1,n._t_update&&(n._t_update=!1,n._o.field&&(n._o.field.value=n.toString(),s(n._o.field,"change",{firedBy:n})),"function"==typeof n._o.onSelect&&n._o.onSelect.call(n,n.getDate())),void 0!==o&&"function"==typeof n._o.onClose&&n._o.onClose.call(n))},dispose:function(){var e=this;e.hide(),"onmousedown"in e.el&&a(e.el,"mousedown",e._onMouseDown,!0),"ontouchend"in e.el&&a(e.el,"touchend",e._onMouseDown,!0),a(e.el,"change",e._onChange),e._o.field&&(a(e._o.field,"change",e._onInputChange),e._o.bound&&(a(e._o.trigger,"click",e._onInputClick),a(e._o.trigger,"focus",e._onInputFocus),a(e._o.trigger,"blur",e._onInputBlur))),e.el.parentNode&&e.el.parentNode.removeChild(e.el)}},e});