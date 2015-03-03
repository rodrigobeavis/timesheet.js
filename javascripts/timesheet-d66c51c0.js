!function(){"use strict";var t=function(t,e,s,a){this.data=[],this.year={min:e,max:s},this.parse(a||[]),"undefined"!=typeof document&&(this.container="string"==typeof t?document.querySelector("#"+t):t,this.drawSections(),this.insertData())};t.prototype.insertData=function(){for(var t=[],s=this.container.querySelector(".scale section").offsetWidth,a=0,n=this.data.length;n>a;a++){var i=this.data[a],r=new e(s,this.year.min,i.start,i.end),h=['<span style="margin-left: '+r.getStartOffset()+"px; width: "+r.getWidth()+'px;" class="bubble bubble-'+(i.type||"default")+'" data-duration="'+(i.end?Math.round((i.end-i.start)/1e3/60/60/24/39):"")+'"></span>','<span class="date">'+r.getDateLabel()+"</span> ",'<span class="label">'+i.label+"</span>"].join("");t.push("<li>"+h+"</li>")}this.container.innerHTML+='<ul class="data">'+t.join("")+"</ul>"},t.prototype.drawSections=function(){for(var t=[],e=this.year.min;e<=this.year.max;e++)t.push("<section>"+e+"</section>");this.container.className="timesheet color-scheme-default",this.container.innerHTML='<div class="scale">'+t.join("")+"</div>"},t.prototype.parseDate=function(t){return-1===t.indexOf("/")?(t=new Date(parseInt(t,10),0,1),t.hasMonth=!1):(t=t.split("/"),t=new Date(parseInt(t[1],10),parseInt(t[0],10)-1,1),t.hasMonth=!0),t},t.prototype.parse=function(t){for(var e=0,s=t.length;s>e;e++){var a=this.parseDate(t[e][0]),n=4===t[e].length?this.parseDate(t[e][1]):null,i=4===t[e].length?t[e][2]:t[e][1],r=4===t[e].length?t[e][3]:3===t[e].length?t[e][2]:"default";a.getFullYear()<this.year.min&&(this.year.min=a.getFullYear()),n&&n.getFullYear()>this.year.max?this.year.max=n.getFullYear():a.getFullYear()>this.year.max&&(this.year.max=a.getFullYear()),this.data.push({start:a,end:n,label:i,type:r})}};var e=function(t,e,s,a){this.min=e,this.start=s,this.end=a,this.widthMonth=t};e.prototype.formatMonth=function(t){return t=parseInt(t,10),t>=10?t:"0"+t},e.prototype.getStartOffset=function(){return this.widthMonth/12*(12*(this.start.getFullYear()-this.min)+this.start.getMonth())},e.prototype.getFullYears=function(){return(this.end&&this.end.getFullYear()||this.start.getFullYear())-this.start.getFullYear()},e.prototype.getMonths=function(){var t=this.getFullYears(),e=0;return this.end?this.end.hasMonth?(e+=this.end.getMonth()+1,e+=12-(this.start.hasMonth?this.start.getMonth():0),e+=12*(t-1)):(e+=12-(this.start.hasMonth?this.start.getMonth():0),e+=12*(t-1>0?t-1:0)):e+=this.start.hasMonth?1:12,e},e.prototype.getWidth=function(){return this.widthMonth/12*this.getMonths()},e.prototype.getDateLabel=function(){return[(this.start.hasMonth?this.formatMonth(this.start.getMonth()+1)+"/":"")+this.start.getFullYear(),this.end?"-"+((this.end.hasMonth?this.formatMonth(this.end.getMonth()+1)+"/":"")+this.end.getFullYear()):""].join("")},window.Timesheet=t}();