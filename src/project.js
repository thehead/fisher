window.__require=function t(e,n,i){function o(a,r){if(!n[a]){if(!e[a]){var c=a.split("/");if(c=c[c.length-1],!e[c]){var l="function"==typeof __require&&__require;if(!r&&l)return l(c,!0);if(s)return s(c,!0);throw new Error("Cannot find module '"+a+"'")}}var u=n[a]={exports:{}};e[a][0].call(u.exports,function(t){return o(e[a][1][t]||t)},u,u.exports,t,e,n,i)}return n[a].exports}for(var s="function"==typeof __require&&__require,a=0;a<i.length;a++)o(i[a]);return o}({bullet:[function(t,e,n){"use strict";cc._RF.push(e,"e656cqs6a5IUJW4+mro0GsR","bullet"),cc.Class({extends:cc.Component,properties:{speed:800,degree:45},start:function(){},shoot_to:function(t){this.degree=t;var e=this.degree*Math.PI/180;this.vx=this.speed*Math.cos(e),this.vy=this.speed*Math.sin(e),this.node.angle=t-90},update:function(t){var e=this.vx*t,n=this.vy*t;this.node.x+=e,this.node.y+=n,(this.node.x<=.5*-cc.winSize.width||this.node.x>=.5*cc.winSize.width||this.node.y<=.5*-cc.winSize.height||this.node.y>=.5*cc.winSize.height)&&this.node.removeFromParent()},onCollisionEnter:function(t,e){this.node.removeFromParent()}}),cc._RF.pop()},{}],cannon:[function(t,e,n){"use strict";cc._RF.push(e,"a5ab4v5SM1ELYlPhyhf9Tht","cannon"),cc.Class({extends:cc.Component,properties:{target:{type:cc.Node,default:null},bullet_prefab:{type:cc.Prefab,default:null},bullet_root:{type:cc.Node,default:null},scoreNum:{type:cc.Label,default:null},gameoeverScore:{type:cc.Label,default:null},bulletNum:{type:cc.Label,default:null},gameoverWindow:{type:cc.Node,default:null},shoot_time:.2},ctor:function(){this.tapTarget={pos:""}},start:function(){this.now_time=this.shoot_time},shoot_bullet:function(t){this.reduce_bullet(),this.changeCannonAngle(t)},update:function(t){if(window.score&&(this.scoreNum.string=window.score),null!==this.target){var e=this.node.getPosition(),n=this.target.getPosition().sub(e),i=180*Math.atan2(n.y,n.x)/Math.PI;this.node.angle=i-90,this.now_time+=t,this.now_time>=this.shoot_time&&(this.shoot_bullet(),this.now_time=0)}},reduce_bullet:function(){Number(this.bulletNum.string)>0?this.bulletNum.string=Number(this.bulletNum.string-1):(cc.director.pause(),this.gameoverWindow.active=!0,this.gameoeverScore.string=this.scoreNum.string)},changeCannonAngle:function(t){var e=this.node.getPosition(),n=t,i=(n=this.node.parent.convertToNodeSpaceAR(n)).sub(e),o=180*Math.atan2(i.y,i.x)/Math.PI,s=cc.instantiate(this.bullet_prefab);s.getComponent("bullet").shoot_to(o),this.bullet_root.addChild(s),s.setPosition(e),this.node.angle=o-90}}),cc._RF.pop()},{}],common:[function(t,e,n){"use strict";cc._RF.push(e,"274efkCoyhBAqcrxUwHs+Xu","common");var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=t("md5");function s(t,e){var n="",i=t;i.timePoint=Math.ceil((new Date).getTime()/1e3);var s=new Array;for(var a in i)s.push(a);for(var r=(s=s.sort()).length,c=0;c<r;c++){var l=encodeURIComponent(i[s[c]]).replace(/(!)|(')|(\()|(\))|(\~)/gi,function(t){return"%"+t.charCodeAt(0).toString(16).toLocaleUpperCase()});n+=s[c]+'="'+(e?l:i[s[c]])+'"&'}return n=n.substring(0,n.lastIndexOf("&")),n=o(n+="acc76ba52cb04732a682928540fd2945")}function a(t,e,n){if(null==t)return"";var o="",s=void 0===t?"undefined":i(t);if("string"==s||"number"==s||"boolean"==s)o+="&"+e+"="+(null==n||n?encodeURIComponent(t):t);else for(var r in t){var c=null==e?r:e+(t instanceof Array?"["+r+"]":"."+r);o+=a(t[r],c,n)}return o}var r={getQueryVariable:function(t){for(var e=window.location.search.substring(1).split("&"),n=0;n<e.length;n++){var i=e[n].split("=");if(i[0]==t)return i[1]}return!1},Encrypt:function(t){return t.hasOwnProperty("sign")&&delete t.sign,t.sign=s(t,!0),t},reqUrl:function(t,e){var n=a(e);return t+(n="?"+n.substr(1))}};e.exports={common:r},cc._RF.pop()},{md5:"md5"}],enable_collider:[function(t,e,n){"use strict";cc._RF.push(e,"d65090EZcpKJ6PbKMOwInjY","enable_collider"),cc.Class({extends:cc.Component,properties:{is_enbale:!0,is_debug:!0},onLoad:function(){if(this.is_enbale){var t=cc.director.getCollisionManager();t.enabled=!0,this.is_debug&&(t.enabledDebugDraw=!0)}}}),cc._RF.pop()},{}],fashData_config:[function(t,e,n){"use strict";cc._RF.push(e,"9f992MiWq5PBYG03ggYRJxL","fashData_config");e.exports={fish1:{score:2,lifeValue:1,num:20},fish2:{score:4,lifeValue:2,num:20},fish3:{score:6,lifeValue:3,num:20},fish4:{score:8,lifeValue:4,num:20},fish5:{score:10,lifeValue:5,num:20},fish6:{score:20,lifeValue:10,num:20},fish7:{score:40,lifeValue:20,num:10},fish8:{score:60,lifeValue:30,num:5},fish9:{score:80,lifeValue:40,num:3},fish10:{score:100,lifeValue:50,num:1},fish11:{score:150,lifeValue:60,num:1},fish12:{score:150,lifeValue:160,num:1},fish13:{score:150,lifeValue:60,num:1}},cc._RF.pop()},{}],firstPage:[function(t,e,n){"use strict";cc._RF.push(e,"d35e3RExNNJv7bqWt5B2RXj","firstPage"),cc.Class({extends:cc.Component,properties:{startBtn:{default:null,type:cc.Node},ruleBtn:{default:null,type:cc.Node},gameRules:{default:null,type:cc.Node}},onLoad:function(){cc.director.preloadScene("game_scene",function(t,e,n,i){cc.log("Next scene preloaded")})},start:function(){},startBtnFun:function(){cc.director.loadScene("game_scene")},ruleBtnFun:function(){this.gameRules.active=!0},returnGame:function(t){this.gameRules.active=!1,t.stopPropagation()}}),cc._RF.pop()},{}],fish_map:[function(t,e,n){"use strict";cc._RF.push(e,"20b08EFWzJEj6o2Cz4w8o/1","fish_map"),cc.Class({extends:cc.Component,properties:{is_debug:!1},onLoad:function(){this.anim_com=this.node.getComponent(cc.Animation);var t=this.anim_com.getClips()[0];this.graphics=this.node.addComponent(cc.Graphics),this.graphics.fillColor=cc.color(255,0,0,255);var e,n=t.curveData.paths;for(e in this.road_data_set=[],n){var i=n[e].props.position;this.gen_path_data(i)}this.is_debug&&this.draw_roads()},start:function(){},get_road_set:function(){return this.road_data_set},gen_path_data:function(t){for(var e=null,n=null,i=null,o=null,s=[],a=0;a<t.length;a++){var r=t[a];null!==e&&s.push([n,e,e,cc.v2(r.value[0],r.value[1])]),n=cc.v2(r.value[0],r.value[1]);for(var c=0;c<r.motionPath.length;c++){i=cc.v2(r.motionPath[c][0],r.motionPath[c][1]);o=cc.v2(r.motionPath[c][2],r.motionPath[c][3]),null===e&&(e=o),s.push([n,e,o,i]),e=cc.v2(r.motionPath[c][4],r.motionPath[c][5]),n=i}}for(var l=[s[0][0]],u=0;u<s.length;u++){n=s[u][0],e=s[u][1],o=s[u][2],i=s[u][3];var h=this.bezier_length(n,e,o,i)/16,f=1/(h=Math.floor(h)),p=f;for(a=0;a<h;a++){var d=n.x*(1-p)*(1-p)*(1-p)+3*e.x*p*(1-p)*(1-p)+3*o.x*p*p*(1-p)+i.x*p*p*p,m=n.y*(1-p)*(1-p)*(1-p)+3*e.y*p*(1-p)*(1-p)+3*o.y*p*p*(1-p)+i.y*p*p*p;l.push(cc.v2(d,m)),p+=f}}this.road_data_set.push(l)},draw_roads:function(t){this.graphics.clear();for(var e=0;e<this.road_data_set.length;e++){t=this.road_data_set[e];for(var n=0;n<t.length;n++)this.graphics.moveTo(t[n].x-2,t[n].y+2),this.graphics.lineTo(t[n].x-2,t[n].y-2),this.graphics.lineTo(t[n].x+2,t[n].y-2),this.graphics.lineTo(t[n].x+2,t[n].y+2),this.graphics.close()}this.graphics.fill()},bezier_length:function(t,e,n,i){for(var o=t,s=0,a=.05,r=0;r<20;r++){var c=t.x*(1-a)*(1-a)*(1-a)+3*e.x*a*(1-a)*(1-a)+3*n.x*a*a*(1-a)+i.x*a*a*a,l=t.y*(1-a)*(1-a)*(1-a)+3*e.y*a*(1-a)*(1-a)+3*n.y*a*a*(1-a)+i.y*a*a*a,u=cc.v2(c,l),h=u.sub(o);o=u,s+=h.mag(),a+=.05}return s}}),cc._RF.pop()},{}],fish:[function(t,e,n){"use strict";cc._RF.push(e,"4638f43GU9J/pAfuKPKdw+e","fish");var i=t("fashData_config");t("game_scene");cc.Class({extends:cc.Component,properties:{},ctor:function(){this.score=0,this.lifeValue=0},onLoad:function(){},start:function(){this.canvasNode=cc.find("Canvas");var t=this.node.name;this.fishname=t,this.score=i[t].score,this.lifeValue=i[t].lifeValue},onCollisionEnter:function(t,e){var n=this;(this.lifeValue-=window.level,this.lifeValue<=0)&&this.node.getComponent(cc.Animation).play("fishDie").on("finished",function(){n.node.scale=1,n.lifeValue=i[n.fishname].score,n.canvasNode.getComponent("game_scene").removeFish(n.fishname,n.node),n.canvasNode.getComponent("game_scene").addScoreAnimate(n.node.getPosition(),n.score),window.score=Number(window.score)||0,window.score+=n.score},this);e.node.color=new cc.Color(182,243,228),e.colorTimer=this.scheduleOnce(function(){e.node.color=new cc.Color(255,255,255)},.15)}}),cc._RF.pop()},{fashData_config:"fashData_config",game_scene:"game_scene"}],frame_anim:[function(t,e,n){"use strict";cc._RF.push(e,"5e39ar17GFLb4FR19LIvlk7","frame_anim"),cc.Class({extends:cc.Component,properties:{sprite_frames:{default:[],type:cc.SpriteFrame},duration:.1,loop:!1,play_onload:!1},onLoad:function(){var t=this.node.getComponent(cc.Sprite);t||(t=this.node.addComponent(cc.Sprite)),this.sprite=t,this.is_playing=!1,this.play_time=0,this.is_loop=!1,this.end_func=null,this.play_onload&&(this.sprite.spriteFrame=this.sprite_frames[0],this.loop?this.play_loop():this.play_once(null))},play_once:function(t){this.play_time=0,this.is_playing=!0,this.is_loop=!1,this.end_func=t},play_loop:function(){this.play_time=0,this.is_playing=!0,this.is_loop=!0},stop_anim:function(){this.play_time=0,this.is_playing=!1,this.is_loop=!1},start:function(){},update:function(t){if(!1!==this.is_playing){this.play_time+=t;var e=Math.floor(this.play_time/this.duration);if(!1===this.is_loop){if(e>=this.sprite_frames.length)return this.sprite.spriteFrame=this.sprite_frames[this.sprite_frames.length-1],this.is_playing=!1,this.play_time=0,void(this.end_func&&this.end_func());this.sprite.spriteFrame=this.sprite_frames[e]}else{for(;e>=this.sprite_frames.length;)e-=this.sprite_frames.length,this.play_time-=this.duration*this.sprite_frames.length;this.sprite.spriteFrame=this.sprite_frames[e]}}}}),cc._RF.pop()},{}],game_mgr:[function(t,e,n){"use strict";cc._RF.push(e,"c3291Rbb8VD5bUuvGD/T65q","game_mgr"),cc.Class({extends:cc.Component,properties:{},start:function(){console.log("start")},update:function(t){}}),cc._RF.pop()},{}],game_scene:[function(t,e,n){"use strict";cc._RF.push(e,"5c060v+7dROvpKSrxxo3hXD","game_scene");var i=t("common"),o=t("fashData_config"),s=i.common;cc.Class({extends:cc.Component,properties:{map:{default:null,type:cc.Node},cannon:{default:null,type:cc.Node},startBgMusic:{default:null,type:cc.AudioClip},fashPrefabRoot:{default:null,type:cc.Node},fish1Prefab:{type:cc.Prefab,default:null},fish2Prefab:{type:cc.Prefab,default:null},fish3Prefab:{type:cc.Prefab,default:null},fish4Prefab:{type:cc.Prefab,default:null},fish5Prefab:{type:cc.Prefab,default:null},fish6Prefab:{type:cc.Prefab,default:null},fish7Prefab:{type:cc.Prefab,default:null},fish8Prefab:{type:cc.Prefab,default:null},fish9Prefab:{type:cc.Prefab,default:null},fish10Prefab:{type:cc.Prefab,default:null},fish11Prefab:{type:cc.Prefab,default:null},fish12Prefab:{type:cc.Prefab,default:null},fish13Prefab:{type:cc.Prefab,default:null},prefab_root:{type:cc.Node,default:null},addMoneyPrefab:{type:cc.Prefab,default:null}},ctor:function(){this.allRoad=[],this.fishPoolObj={},this.scorePoolObj=null,this.reqParam={userId:"",gameType:4,timePoint:"",sign:""},this.url={before:"https://www.yanyule.com/easy_yanyu_web/playgame/playgameBefore",after:"https://www.yanyule.com/easy_yanyu_web/playgame/playgameAfter"},this.level=1},onLoad:function(){window.level=1,cc.audioEngine.play(this.startBgMusic,"loop"),this.checkUserId(),this.initFishPool(),this.initScorePool(),this.node.on("touchstart",function(t){var e=t.getLocation();this.cannon.getComponent("cannon").shoot_bullet(e)},this)},start:function(){this.initRoad(),this.schedule(this.creatFisher,2)},update:function(t){},checkIdentity:function(){},checkUserId:function(){var t=s.getQueryVariable("userId");if(t){this.reqParam.userId=t,this.reqParam=s.Encrypt(this.reqParam);var e=s.reqUrl(this.url.before,this.reqParam);ajax.Get(e,function(t){"00000"===t.code||alert(t.info)})}},initRoad:function(){this.allRoad=this.map.getComponent("fish_map").get_road_set()},initFishPool:function(){for(var t=0;t<13;t++){var e="fish"+(t+1);this.fishPoolObj[e]=new cc.NodePool;for(var n=o[e].num,i=0;i<n;i++){var s="fish"+(t+1)+"Prefab";if(null!=this[s]){var a=cc.instantiate(this[s]);this.fishPoolObj[e].put(a)}}}},initScorePool:function(){this.scorePoolObj=new cc.NodePool;for(var t=0;t<10;t++){var e=cc.instantiate(this.addMoneyPrefab);this.scorePoolObj.put(e)}},addScoreAnimate:function(t,e){var n=void 0;(n=this.scorePoolObj.size()>0?this.scorePoolObj.get(this):cc.instantiate(this.addMoneyPrefab)).getComponent(cc.Label).string="+"+e,this.prefab_root.addChild(n)},creatFisher:function(){var t=this.allRoad.length;if(t)for(var e=0;e<t;e++){var n="fish"+Math.ceil(13*Math.random());if(this.fishPoolObj[n].size()>0){var i=this.fishPoolObj[n].get(this);i.getComponent("nav_agent").init(this,this.allRoad[e],n),this.fashPrefabRoot.addChild(i)}}},removeFish:function(t,e){this.fishPoolObj[t].put(e)}}),cc._RF.pop()},{common:"common",fashData_config:"fashData_config"}],md5:[function(t,e,n){"use strict";cc._RF.push(e,"10cefPJ2KJKS5zpPAbUtOWN","md5");var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){function n(t,e){var n=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(n>>16)<<16|65535&n}function o(t,e){return t<<e|t>>>32-e}function s(t,e,i,s,a,r){return n(o(n(n(e,t),n(s,r)),a),i)}function a(t,e,n,i,o,a,r){return s(e&n|~e&i,t,e,o,a,r)}function r(t,e,n,i,o,a,r){return s(e&i|n&~i,t,e,o,a,r)}function c(t,e,n,i,o,a,r){return s(e^n^i,t,e,o,a,r)}function l(t,e,n,i,o,a,r){return s(n^(e|~i),t,e,o,a,r)}function u(t,e){t[e>>5]|=128<<e%32,t[14+(e+64>>>9<<4)]=e;var i,o,s,u,h,f=1732584193,p=-271733879,d=-1732584194,m=271733878;for(i=0;i<t.length;i+=16)o=f,s=p,u=d,h=m,p=l(p=l(p=l(p=l(p=c(p=c(p=c(p=c(p=r(p=r(p=r(p=r(p=a(p=a(p=a(p=a(p,d=a(d,m=a(m,f=a(f,p,d,m,t[i],7,-680876936),p,d,t[i+1],12,-389564586),f,p,t[i+2],17,606105819),m,f,t[i+3],22,-1044525330),d=a(d,m=a(m,f=a(f,p,d,m,t[i+4],7,-176418897),p,d,t[i+5],12,1200080426),f,p,t[i+6],17,-1473231341),m,f,t[i+7],22,-45705983),d=a(d,m=a(m,f=a(f,p,d,m,t[i+8],7,1770035416),p,d,t[i+9],12,-1958414417),f,p,t[i+10],17,-42063),m,f,t[i+11],22,-1990404162),d=a(d,m=a(m,f=a(f,p,d,m,t[i+12],7,1804603682),p,d,t[i+13],12,-40341101),f,p,t[i+14],17,-1502002290),m,f,t[i+15],22,1236535329),d=r(d,m=r(m,f=r(f,p,d,m,t[i+1],5,-165796510),p,d,t[i+6],9,-1069501632),f,p,t[i+11],14,643717713),m,f,t[i],20,-373897302),d=r(d,m=r(m,f=r(f,p,d,m,t[i+5],5,-701558691),p,d,t[i+10],9,38016083),f,p,t[i+15],14,-660478335),m,f,t[i+4],20,-405537848),d=r(d,m=r(m,f=r(f,p,d,m,t[i+9],5,568446438),p,d,t[i+14],9,-1019803690),f,p,t[i+3],14,-187363961),m,f,t[i+8],20,1163531501),d=r(d,m=r(m,f=r(f,p,d,m,t[i+13],5,-1444681467),p,d,t[i+2],9,-51403784),f,p,t[i+7],14,1735328473),m,f,t[i+12],20,-1926607734),d=c(d,m=c(m,f=c(f,p,d,m,t[i+5],4,-378558),p,d,t[i+8],11,-2022574463),f,p,t[i+11],16,1839030562),m,f,t[i+14],23,-35309556),d=c(d,m=c(m,f=c(f,p,d,m,t[i+1],4,-1530992060),p,d,t[i+4],11,1272893353),f,p,t[i+7],16,-155497632),m,f,t[i+10],23,-1094730640),d=c(d,m=c(m,f=c(f,p,d,m,t[i+13],4,681279174),p,d,t[i],11,-358537222),f,p,t[i+3],16,-722521979),m,f,t[i+6],23,76029189),d=c(d,m=c(m,f=c(f,p,d,m,t[i+9],4,-640364487),p,d,t[i+12],11,-421815835),f,p,t[i+15],16,530742520),m,f,t[i+2],23,-995338651),d=l(d,m=l(m,f=l(f,p,d,m,t[i],6,-198630844),p,d,t[i+7],10,1126891415),f,p,t[i+14],15,-1416354905),m,f,t[i+5],21,-57434055),d=l(d,m=l(m,f=l(f,p,d,m,t[i+12],6,1700485571),p,d,t[i+3],10,-1894986606),f,p,t[i+10],15,-1051523),m,f,t[i+1],21,-2054922799),d=l(d,m=l(m,f=l(f,p,d,m,t[i+8],6,1873313359),p,d,t[i+15],10,-30611744),f,p,t[i+6],15,-1560198380),m,f,t[i+13],21,1309151649),d=l(d,m=l(m,f=l(f,p,d,m,t[i+4],6,-145523070),p,d,t[i+11],10,-1120210379),f,p,t[i+2],15,718787259),m,f,t[i+9],21,-343485551),f=n(f,o),p=n(p,s),d=n(d,u),m=n(m,h);return[f,p,d,m]}function h(t){var e,n="",i=32*t.length;for(e=0;e<i;e+=8)n+=String.fromCharCode(t[e>>5]>>>e%32&255);return n}function f(t){var e,n=[];for(n[(t.length>>2)-1]=void 0,e=0;e<n.length;e+=1)n[e]=0;var i=8*t.length;for(e=0;e<i;e+=8)n[e>>5]|=(255&t.charCodeAt(e/8))<<e%32;return n}function p(t){return h(u(f(t),8*t.length))}function d(t,e){var n,i,o=f(t),s=[],a=[];for(s[15]=a[15]=void 0,o.length>16&&(o=u(o,8*t.length)),n=0;n<16;n+=1)s[n]=909522486^o[n],a[n]=1549556828^o[n];return i=u(s.concat(f(e)),512+8*e.length),h(u(a.concat(i),640))}function m(t){var e,n,i="0123456789abcdef",o="";for(n=0;n<t.length;n+=1)e=t.charCodeAt(n),o+=i.charAt(e>>>4&15)+i.charAt(15&e);return o}function _(t){return unescape(encodeURIComponent(t))}function g(t){return p(_(t))}function y(t){return m(g(t))}function v(t,e){return d(_(t),_(e))}function b(t,e){return m(v(t,e))}function P(t,e,n){return e?n?v(e,t):b(e,t):n?g(t):y(t)}"function"==typeof define&&define.amd?define(function(){return P}):"object"==(void 0===e?"undefined":i(e))&&e.exports?e.exports=P:t.md5=P}(void 0),cc._RF.pop()},{}],nav_agent:[function(t,e,n){"use strict";cc._RF.push(e,"7b6b09DPO5P1Z/cwuXMt1+E","nav_agent");var i=t("fish_map");cc.Class({extends:cc.Component,properties:{map:{type:i,default:null},speed:100},start:function(){},init:function(t,e,n){this.canvasNode=t,this.road_data=e,this.fishname=n,this.run_road()},run_road:function(){this.road_data.length<2||(this.is_walking=!1,this.node.setPosition(this.road_data[0]),this.next_step=1,this.road_data[0].x<this.road_data[this.road_data.length-1].x?this.node.scaleX=1:this.node.scaleX=-1,this.walk_to_next())},get_next_point:function(){return this.next_step+3>=this.road_data.length?this.road_data[this.road_data.length-1]:this.road_data[this.next_step+3]},walk_to_next:function(){if(this.next_step>=this.road_data.length)return this.is_walking=!1,void this.canvasNode.fishPoolObj[this.fishname].put(this.node);this.is_walking=!0;var t=this.node.getPosition(),e=this.road_data[this.next_step].sub(t),n=e.mag();this.total_time=n/this.speed,this.now_time=0,this.vx=this.speed*e.x/n,this.vy=this.speed*e.y/n;var i=180*Math.atan2(e.y,e.x)/Math.PI;i-=90,this.node.angle=i},update:function(t){if(!1!==this.is_walking){this.now_time+=t,this.now_time>this.total_time&&(t-=this.now_time-this.total_time);var e=this.vx*t,n=this.vy*t;this.node.x+=e,this.node.y+=n,this.now_time>=this.total_time&&(this.next_step++,this.walk_to_next())}}}),cc._RF.pop()},{fish_map:"fish_map"}],request:[function(t,e,n){"use strict";cc._RF.push(e,"fda9d2nkTlLb6NcklcF72AO","request");var i=cc.Class({extends:cc.Component,statics:{},properties:{},Get:function(t,e){var n=cc.loader.getXMLHttpRequest();n.onreadystatechange=function(){if(4===n.readyState&&200==n.status){var t=n.responseText,i=JSON.parse(t);e(i)}else 4===n.readyState&&401==n.status&&(cc.myGame.gameUi.onHideLockScreen(),e({status:401}))},n.withCredentials=!1,n.open("GET",t,!0),n.timeout=8e3,n.send()},Post:function(t,e,n){var i=cc.loader.getXMLHttpRequest();i.onreadystatechange=function(){if(4===i.readyState&&200==i.status){var t=i.responseText,e=JSON.parse(t);n(e)}else n(-1)},i.open("POST",t,!0),i.timeout=8e3,i.send(JSON.stringify(e))}});window.ajax=new i,cc._RF.pop()},{}],"use_v2.1.x_cc.Action":[function(t,e,n){"use strict";cc._RF.push(e,"b4dc46oRrlMxJQ/lFfct2zK","use_v2.1.x_cc.Action"),cc.macro.ROTATE_ACTION_CCW=!0,cc._RF.pop()},{}]},{},["use_v2.1.x_cc.Action","bullet","cannon","common","md5","request","enable_collider","fish_map","frame_anim","firstPage","game_mgr","fashData_config","fish","game_scene","nav_agent"]);