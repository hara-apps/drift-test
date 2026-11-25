(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const df="modulepreload",hf=function(n,e){return new URL(n,e).href},gl={},Yr=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let c=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const a=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),o=l?.nonce||l?.getAttribute("nonce");s=c(t.map(u=>{if(u=hf(u,i),u in gl)return;gl[u]=!0;const d=u.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(i)for(let f=a.length-1;f>=0;f--){const v=a[f];if(v.href===u&&(!d||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${h}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":df,d||(m.as="script"),m.crossOrigin="",m.href=u,o&&m.setAttribute("nonce",o),document.head.appendChild(m),d)return new Promise((f,v)=>{m.addEventListener("load",f),m.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&r(l.reason);return e().catch(r)})};const $o="187",pf=0,xl=1,mf=2,Zs=1,gf=2,Ys=3,ji=0,Sn=1,pi=2,Ss=0,js=1,vl=2,_l=3,yl=4,xf=5,vs=100,vf=101,_f=102,yf=103,Mf=104,bf=200,Sf=201,wf=202,Ef=203,lu=204,cu=205,Tf=206,Af=207,Rf=208,Cf=209,Pf=210,Lf=211,Df=212,If=213,Nf=214,to=0,no=1,io=2,ir=3,so=4,ro=5,ao=6,oo=7,Yo=0,Uf=1,zf=2,ri=0,uu=1,fu=2,du=3,hu=4,pu=5,mu=6,gu=7,xu=300,Es=301,sr=302,ma=303,ga=304,rr=1e3,gi=1001,lo=1002,ln=1003,Ff=1004,xr=1005,Tn=1006,xa=1007,xi=1008,En=1009,vu=1010,_u=1011,ar=1012,Ko=1013,ai=1014,$n=1015,Kn=1016,Jo=1017,Zo=1018,Ts=1020,yu=35902,Mu=35899,bu=1021,Su=1022,ni=1023,Ui=1026,Ii=1027,jo=1028,Qo=1029,Qi=1030,el=1031,tl=1033,Kr=33776,Jr=33777,Zr=33778,jr=33779,co=35840,uo=35841,fo=35842,ho=35843,po=36196,mo=37492,go=37496,xo=37488,vo=37489,ia=37490,_o=37491,yo=37808,Mo=37809,bo=37810,So=37811,wo=37812,Eo=37813,To=37814,Ao=37815,Ro=37816,Co=37817,Po=37818,Lo=37819,Do=37820,Io=37821,No=36492,Uo=36494,zo=36495,Fo=36283,Oo=36284,sa=36285,ko=36286,Of=3200,ra=0,kf=1,mi="",wn="srgb",aa="srgb-linear",oa="linear",It="srgb",va=7680,Bf=519,Hf=512,Gf=513,Vf=514,wu=515,Wf=516,Xf=517,Eu=518,Tu=519,qf=35044,Ml="300 es",Yn=2e3,or=2001;function $f(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function la(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Yf(){const n=la("canvas");return n.style.display="block",n}const bl={};function Sl(...n){const e="THREE."+n.shift();console.log(e,...n)}function Au(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function at(...n){n=Au(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Pt(...n){n=Au(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Qr(...n){const e=n.join(" ");e in bl||(bl[e]=!0,at(...n))}function Kf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Jf={[to]:to,[io]:ao,[so]:so,[ir]:ro,[no]:no,[ao]:io,[oo]:oo,[ro]:ir};class ts{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_a=Math.PI/180,ca=180/Math.PI;function dr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function Mt(n,e,t){return Math.max(e,Math.min(t,n))}function Zf(n,e){return(n%e+e)%e}function ya(n,e,t){return(1-t)*n+t*e}function jf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function nl(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Qf(n,e){if(e.constructor===Float32Array)return n;const t=nl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function ed(n,e){if(e.constructor===Float32Array)return n;const t=nl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}class it{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,l){let o=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[a+0],m=r[a+1],f=r[a+2],v=r[a+3];if(d!==v||o!==h||c!==m||u!==f){let x=o*h+c*m+u*f+d*v;x<0&&(h=-h,m=-m,f=-f,v=-v,x=-x);let p=1-l;if(x<.9995){const y=Math.acos(x),T=Math.sin(y);p=Math.sin(p*y)/T,l=Math.sin(l*y)/T,o=o*p+h*l,c=c*p+m*l,u=u*p+f*l,d=d*p+v*l}else{o=o*p+h*l,c=c*p+m*l,u=u*p+f*l,d=d*p+v*l;const y=1/Math.sqrt(o*o+c*c+u*u+d*d);o*=y,c*=y,u*=y,d*=y}}e[t]=o,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){const l=i[s],o=i[s+1],c=i[s+2],u=i[s+3],d=r[a],h=r[a+1],m=r[a+2],f=r[a+3];return e[t]=l*f+u*d+o*m-c*h,e[t+1]=o*f+u*h+c*d-l*m,e[t+2]=c*f+u*m+l*h-o*d,e[t+3]=u*f-l*d-o*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,l=Math.cos,o=Math.sin,c=l(i/2),u=l(s/2),d=l(r/2),h=o(i/2),m=o(s/2),f=o(r/2);switch(a){case"XYZ":this._x=h*u*d+c*m*f,this._y=c*m*d-h*u*f,this._z=c*u*f+h*m*d,this._w=c*u*d-h*m*f;break;case"YXZ":this._x=h*u*d+c*m*f,this._y=c*m*d-h*u*f,this._z=c*u*f-h*m*d,this._w=c*u*d+h*m*f;break;case"ZXY":this._x=h*u*d-c*m*f,this._y=c*m*d+h*u*f,this._z=c*u*f+h*m*d,this._w=c*u*d-h*m*f;break;case"ZYX":this._x=h*u*d-c*m*f,this._y=c*m*d+h*u*f,this._z=c*u*f-h*m*d,this._w=c*u*d+h*m*f;break;case"YZX":this._x=h*u*d+c*m*f,this._y=c*m*d+h*u*f,this._z=c*u*f-h*m*d,this._w=c*u*d-h*m*f;break;case"XZY":this._x=h*u*d-c*m*f,this._y=c*m*d-h*u*f,this._z=c*u*f+h*m*d,this._w=c*u*d+h*m*f;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],l=t[5],o=t[9],c=t[2],u=t[6],d=t[10],h=i+l+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-o)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(i>l&&i>d){const m=2*Math.sqrt(1+i-l-d);this._w=(u-o)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(l>d){const m=2*Math.sqrt(1+l-i-d);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(o+u)/m}else{const m=2*Math.sqrt(1+d-i-l);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(o+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,l=t._x,o=t._y,c=t._z,u=t._w;return this._x=i*u+a*l+s*c-r*o,this._y=s*u+a*o+r*l-i*c,this._z=r*u+a*c+i*o-s*l,this._w=a*u-i*l-s*o-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,l=this.dot(e);l<0&&(i=-i,s=-s,r=-r,a=-a,l=-l);let o=1-t;if(l<.9995){const c=Math.acos(l),u=Math.sin(c);o=Math.sin(o*c)/u,t=Math.sin(t*c)/u,this._x=this._x*o+i*t,this._y=this._y*o+s*t,this._z=this._z*o+r*t,this._w=this._w*o+a*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+s*t,this._z=this._z*o+r*t,this._w=this._w*o+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,l=e.z,o=e.w,c=2*(a*s-l*i),u=2*(l*t-r*s),d=2*(r*i-a*t);return this.x=t+o*c+a*d-l*u,this.y=i+o*u+l*c-r*d,this.z=s+o*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,l=t.y,o=t.z;return this.x=s*o-r*l,this.y=r*a-i*o,this.z=i*l-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ma.copy(this).projectOnVector(e),this.sub(Ma)}reflect(e){return this.sub(Ma.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ma=new ee,wl=new cn;class dt{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,a,l,o,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,l,o,c)}set(e,t,i,s,r,a,l,o,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=l,u[3]=t,u[4]=r,u[5]=o,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],l=i[3],o=i[6],c=i[1],u=i[4],d=i[7],h=i[2],m=i[5],f=i[8],v=s[0],x=s[3],p=s[6],y=s[1],T=s[4],b=s[7],A=s[2],R=s[5],M=s[8];return r[0]=a*v+l*y+o*A,r[3]=a*x+l*T+o*R,r[6]=a*p+l*b+o*M,r[1]=c*v+u*y+d*A,r[4]=c*x+u*T+d*R,r[7]=c*p+u*b+d*M,r[2]=h*v+m*y+f*A,r[5]=h*x+m*T+f*R,r[8]=h*p+m*b+f*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],l=e[5],o=e[6],c=e[7],u=e[8];return t*a*u-t*l*c-i*r*u+i*l*o+s*r*c-s*a*o}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],l=e[5],o=e[6],c=e[7],u=e[8],d=u*a-l*c,h=l*o-u*r,m=c*r-a*o,f=t*d+i*h+s*m;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/f;return e[0]=d*v,e[1]=(s*c-u*i)*v,e[2]=(l*i-s*a)*v,e[3]=h*v,e[4]=(u*t-s*o)*v,e[5]=(s*r-l*t)*v,e[6]=m*v,e[7]=(i*o-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,l){const o=Math.cos(r),c=Math.sin(r);return this.set(i*o,i*c,-i*(o*a+c*l)+a+e,-s*c,s*o,-s*(-c*a+o*l)+l+t,0,0,1),this}scale(e,t){return Qr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ba.makeScale(e,t)),this}rotate(e){return Qr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ba.makeRotation(-e)),this}translate(e,t){return Qr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ba.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ba=new dt,El=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tl=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function td(){const n={enabled:!0,workingColorSpace:aa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===It&&(s.r=vi(s.r),s.g=vi(s.g),s.b=vi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===It&&(s.r=ws(s.r),s.g=ws(s.g),s.b=ws(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===mi?oa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[aa]:{primaries:e,whitePoint:i,transfer:oa,toXYZ:El,fromXYZ:Tl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:e,whitePoint:i,transfer:It,toXYZ:El,fromXYZ:Tl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}}),n}const wt=td();function vi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ws(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let is;class nd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{is===void 0&&(is=la("canvas")),is.width=e.width,is.height=e.height;const s=is.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=is}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=la("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=vi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(vi(t[i]/255)*255):t[i]=vi(t[i]);return{data:t,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let id=0;class il{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=dr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(Sa(s[a].image)):r.push(Sa(s[a]))}else r=Sa(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Sa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?nd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let sd=0;const wa=new ee;class xn extends ts{constructor(e=xn.DEFAULT_IMAGE,t=xn.DEFAULT_MAPPING,i=gi,s=gi,r=Tn,a=xi,l=ni,o=En,c=xn.DEFAULT_ANISOTROPY,u=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=dr(),this.name="",this.source=new il(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=o,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(wa).x}get height(){return this.source.getSize(wa).y}get depth(){return this.source.getSize(wa).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){at(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){at(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rr:e.x=e.x-Math.floor(e.x);break;case gi:e.x=e.x<0?0:1;break;case lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rr:e.y=e.y-Math.floor(e.y);break;case gi:e.y=e.y<0?0:1;break;case lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=xu;xn.DEFAULT_ANISOTROPY=1;class qt{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const o=e.elements,c=o[0],u=o[4],d=o[8],h=o[1],m=o[5],f=o[9],v=o[2],x=o[6],p=o[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(f-x)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(f+x)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,b=(m+1)/2,A=(p+1)/2,R=(u+h)/4,M=(d+v)/4,C=(f+x)/4;return T>b&&T>A?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=R/i,r=M/i):b>A?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=R/s,r=C/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=M/r,s=C/r),this.set(i,s,r,t),this}let y=Math.sqrt((x-f)*(x-f)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(x-f)/y,this.y=(d-v)/y,this.z=(h-u)/y,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rd extends ts{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new qt(0,0,e,t),this.scissorTest=!1,this.viewport=new qt(0,0,e,t),this.textures=[];const s=i.count;for(let r=0;r<s;r++)this.textures[r]=new xn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new il(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class An extends rd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ru extends xn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ad extends xn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Lt{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,a,l,o,c,u,d,h,m,f,v,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,l,o,c,u,d,h,m,f,v,x)}set(e,t,i,s,r,a,l,o,c,u,d,h,m,f,v,x){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=l,p[13]=o,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=m,p[7]=f,p[11]=v,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/ss.setFromMatrixColumn(e,0).length(),r=1/ss.setFromMatrixColumn(e,1).length(),a=1/ss.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),l=Math.sin(i),o=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=a*u,m=a*d,f=l*u,v=l*d;t[0]=o*u,t[4]=-o*d,t[8]=c,t[1]=m+f*c,t[5]=h-v*c,t[9]=-l*o,t[2]=v-h*c,t[6]=f+m*c,t[10]=a*o}else if(e.order==="YXZ"){const h=o*u,m=o*d,f=c*u,v=c*d;t[0]=h+v*l,t[4]=f*l-m,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-l,t[2]=m*l-f,t[6]=v+h*l,t[10]=a*o}else if(e.order==="ZXY"){const h=o*u,m=o*d,f=c*u,v=c*d;t[0]=h-v*l,t[4]=-a*d,t[8]=f+m*l,t[1]=m+f*l,t[5]=a*u,t[9]=v-h*l,t[2]=-a*c,t[6]=l,t[10]=a*o}else if(e.order==="ZYX"){const h=a*u,m=a*d,f=l*u,v=l*d;t[0]=o*u,t[4]=f*c-m,t[8]=h*c+v,t[1]=o*d,t[5]=v*c+h,t[9]=m*c-f,t[2]=-c,t[6]=l*o,t[10]=a*o}else if(e.order==="YZX"){const h=a*o,m=a*c,f=l*o,v=l*c;t[0]=o*u,t[4]=v-h*d,t[8]=f*d+m,t[1]=d,t[5]=a*u,t[9]=-l*u,t[2]=-c*u,t[6]=m*d+f,t[10]=h-v*d}else if(e.order==="XZY"){const h=a*o,m=a*c,f=l*o,v=l*c;t[0]=o*u,t[4]=-d,t[8]=c*u,t[1]=h*d+v,t[5]=a*u,t[9]=m*d-f,t[2]=f*d-m,t[6]=l*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(od,e,ld)}lookAt(e,t,i){const s=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),bi.crossVectors(i,Rn),bi.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),bi.crossVectors(i,Rn)),bi.normalize(),vr.crossVectors(Rn,bi),s[0]=bi.x,s[4]=vr.x,s[8]=Rn.x,s[1]=bi.y,s[5]=vr.y,s[9]=Rn.y,s[2]=bi.z,s[6]=vr.z,s[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],l=i[4],o=i[8],c=i[12],u=i[1],d=i[5],h=i[9],m=i[13],f=i[2],v=i[6],x=i[10],p=i[14],y=i[3],T=i[7],b=i[11],A=i[15],R=s[0],M=s[4],C=s[8],P=s[12],N=s[1],F=s[5],V=s[9],te=s[13],B=s[2],j=s[6],oe=s[10],re=s[14],Te=s[3],ie=s[7],Se=s[11],me=s[15];return r[0]=a*R+l*N+o*B+c*Te,r[4]=a*M+l*F+o*j+c*ie,r[8]=a*C+l*V+o*oe+c*Se,r[12]=a*P+l*te+o*re+c*me,r[1]=u*R+d*N+h*B+m*Te,r[5]=u*M+d*F+h*j+m*ie,r[9]=u*C+d*V+h*oe+m*Se,r[13]=u*P+d*te+h*re+m*me,r[2]=f*R+v*N+x*B+p*Te,r[6]=f*M+v*F+x*j+p*ie,r[10]=f*C+v*V+x*oe+p*Se,r[14]=f*P+v*te+x*re+p*me,r[3]=y*R+T*N+b*B+A*Te,r[7]=y*M+T*F+b*j+A*ie,r[11]=y*C+T*V+b*oe+A*Se,r[15]=y*P+T*te+b*re+A*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],l=e[5],o=e[9],c=e[13],u=e[2],d=e[6],h=e[10],m=e[14],f=e[3],v=e[7],x=e[11],p=e[15],y=o*m-c*h,T=l*m-c*d,b=l*h-o*d,A=a*m-c*u,R=a*h-o*u,M=a*d-l*u;return t*(v*y-x*T+p*b)-i*(f*y-x*A+p*R)+s*(f*T-v*A+p*M)-r*(f*b-v*R+x*M)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],l=e[9],o=e[2],c=e[6],u=e[10];return t*(a*u-l*c)-i*(r*u-l*o)+s*(r*c-a*o)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],l=e[5],o=e[6],c=e[7],u=e[8],d=e[9],h=e[10],m=e[11],f=e[12],v=e[13],x=e[14],p=e[15],y=t*l-i*a,T=t*o-s*a,b=t*c-r*a,A=i*o-s*l,R=i*c-r*l,M=s*c-r*o,C=u*v-d*f,P=u*x-h*f,N=u*p-m*f,F=d*x-h*v,V=d*p-m*v,te=h*p-m*x,B=y*te-T*V+b*F+A*N-R*P+M*C;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/B;return e[0]=(l*te-o*V+c*F)*j,e[1]=(s*V-i*te-r*F)*j,e[2]=(v*M-x*R+p*A)*j,e[3]=(h*R-d*M-m*A)*j,e[4]=(o*N-a*te-c*P)*j,e[5]=(t*te-s*N+r*P)*j,e[6]=(x*b-f*M-p*T)*j,e[7]=(u*M-h*b+m*T)*j,e[8]=(a*V-l*N+c*C)*j,e[9]=(i*N-t*V-r*C)*j,e[10]=(f*R-v*b+p*y)*j,e[11]=(d*b-u*R-m*y)*j,e[12]=(l*P-a*F-o*C)*j,e[13]=(t*F-i*P+s*C)*j,e[14]=(v*T-f*A-x*y)*j,e[15]=(u*A-d*T+h*y)*j,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,l=e.y,o=e.z,c=r*a,u=r*l;return this.set(c*a+i,c*l-s*o,c*o+s*l,0,c*l+s*o,u*l+i,u*o-s*a,0,c*o-s*l,u*o+s*a,r*o*o+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,l=t._z,o=t._w,c=r+r,u=a+a,d=l+l,h=r*c,m=r*u,f=r*d,v=a*u,x=a*d,p=l*d,y=o*c,T=o*u,b=o*d,A=i.x,R=i.y,M=i.z;return s[0]=(1-(v+p))*A,s[1]=(m+b)*A,s[2]=(f-T)*A,s[3]=0,s[4]=(m-b)*R,s[5]=(1-(h+p))*R,s[6]=(x+y)*R,s[7]=0,s[8]=(f+T)*M,s[9]=(x-y)*M,s[10]=(1-(h+v))*M,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=ss.set(s[0],s[1],s[2]).length();const l=ss.set(s[4],s[5],s[6]).length(),o=ss.set(s[8],s[9],s[10]).length();r<0&&(a=-a),kn.copy(this);const c=1/a,u=1/l,d=1/o;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=u,kn.elements[5]*=u,kn.elements[6]*=u,kn.elements[8]*=d,kn.elements[9]*=d,kn.elements[10]*=d,t.setFromRotationMatrix(kn),i.x=a,i.y=l,i.z=o,this}makePerspective(e,t,i,s,r,a,l=Yn,o=!1){const c=this.elements,u=2*r/(t-e),d=2*r/(i-s),h=(t+e)/(t-e),m=(i+s)/(i-s);let f,v;if(o)f=r/(a-r),v=a*r/(a-r);else if(l===Yn)f=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(l===or)f=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,l=Yn,o=!1){const c=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),m=-(i+s)/(i-s);let f,v;if(o)f=1/(a-r),v=a/(a-r);else if(l===Yn)f=-2/(a-r),v=-(a+r)/(a-r);else if(l===or)f=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=f,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ss=new ee,kn=new Lt,od=new ee(0,0,0),ld=new ee(1,1,1),bi=new ee,vr=new ee,Rn=new ee,Al=new Lt,Rl=new cn;class gn{constructor(e=0,t=0,i=0,s=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],l=s[8],o=s[1],c=s[5],u=s[9],d=s[2],h=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(o,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Al.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Al,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rl.setFromEuler(this),this.setFromQuaternion(Rl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class Cu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cd=0;const Cl=new ee,rs=new cn,li=new Lt,_r=new ee,Ds=new ee,ud=new ee,fd=new cn,Pl=new ee(1,0,0),Ll=new ee(0,1,0),Dl=new ee(0,0,1),Il={type:"added"},dd={type:"removed"},as={type:"childadded",child:null},Ea={type:"childremoved",child:null};class Zt extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new ee,t=new gn,i=new cn,s=new ee(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Lt},normalMatrix:{value:new dt}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.multiply(rs),this}rotateOnWorldAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.premultiply(rs),this}rotateX(e){return this.rotateOnAxis(Pl,e)}rotateY(e){return this.rotateOnAxis(Ll,e)}rotateZ(e){return this.rotateOnAxis(Dl,e)}translateOnAxis(e,t){return Cl.copy(e).applyQuaternion(this.quaternion),this.position.add(Cl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pl,e)}translateY(e){return this.translateOnAxis(Ll,e)}translateZ(e){return this.translateOnAxis(Dl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_r.copy(e):_r.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(Ds,_r,this.up):li.lookAt(_r,Ds,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),rs.setFromRotationMatrix(li),this.quaternion.premultiply(rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Il),as.child=e,this.dispatchEvent(as),as.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dd),Ea.child=e,this.dispatchEvent(Ea),Ea.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Il),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,e,ud),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,fd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,o){return l[o.uuid]===void 0&&(l[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const o=l.shapes;if(Array.isArray(o))for(let c=0,u=o.length;c<u;c++){const d=o[c];r(e.shapes,d)}else r(e.shapes,o)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let o=0,c=this.material.length;o<c;o++)l.push(r(e.materials,this.material[o]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const o=this.animations[l];s.animations.push(r(e.animations,o))}}if(t){const l=a(e.geometries),o=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),m=a(e.animations),f=a(e.nodes);l.length>0&&(i.geometries=l),o.length>0&&(i.materials=o),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),f.length>0&&(i.nodes=f)}return i.object=s,i;function a(l){const o=[];for(const c in l){const u=l[c];delete u.metadata,o.push(u)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Zt.DEFAULT_UP=new ee(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ys extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hd={type:"move"};class Ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ys,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ys,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ys,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const l=this._targetRay,o=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const x=t.getJointPose(v,i),p=this._getHandJoint(c,v);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,f=.005;c.inputState.pinching&&h>m+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(hd)))}return l!==null&&(l.visible=s!==null),o!==null&&(o.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ys;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},yr={h:0,s:0,l:0};function Aa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=wt.workingColorSpace){return this.r=e,this.g=t,this.b=i,wt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=wt.workingColorSpace){if(e=Zf(e,1),t=Mt(t,0,1),i=Mt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Aa(a,r,e+1/3),this.g=Aa(a,r,e),this.b=Aa(a,r,e-1/3)}return wt.colorSpaceToWorking(this,s),this}setStyle(e,t=wn){function i(r){r!==void 0&&parseFloat(r)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:at("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wn){const i=Pu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wn){return wt.workingToColorSpace(pn.copy(this),e),Math.round(Mt(pn.r*255,0,255))*65536+Math.round(Mt(pn.g*255,0,255))*256+Math.round(Mt(pn.b*255,0,255))}getHexString(e=wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(pn.copy(this),t);const i=pn.r,s=pn.g,r=pn.b,a=Math.max(i,s,r),l=Math.min(i,s,r);let o,c;const u=(l+a)/2;if(l===a)o=0,c=0;else{const d=a-l;switch(c=u<=.5?d/(a+l):d/(2-a-l),a){case i:o=(s-r)/d+(s<r?6:0);break;case s:o=(r-i)/d+2;break;case r:o=(i-s)/d+4;break}o/=6}return e.h=o,e.s=c,e.l=u,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=wn){wt.workingToColorSpace(pn.copy(this),e);const t=pn.r,i=pn.g,s=pn.b;return e!==wn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(yr);const i=ya(Si.h,yr.h,t),s=ya(Si.s,yr.s,t),r=ya(Si.l,yr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new ot;ot.NAMES=Pu;class sl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ot(e),this.density=t}clone(){return new sl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Lu extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Bn=new ee,ci=new ee,Ra=new ee,ui=new ee,os=new ee,ls=new ee,Nl=new ee,Ca=new ee,Pa=new ee,La=new ee,Da=new qt,Ia=new qt,Na=new qt;class Xn{constructor(e=new ee,t=new ee,i=new ee){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Bn.subVectors(e,t),s.cross(Bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Bn.subVectors(s,t),ci.subVectors(i,t),Ra.subVectors(e,t);const a=Bn.dot(Bn),l=Bn.dot(ci),o=Bn.dot(Ra),c=ci.dot(ci),u=ci.dot(Ra),d=a*c-l*l;if(d===0)return r.set(0,0,0),null;const h=1/d,m=(c*o-l*u)*h,f=(a*u-l*o)*h;return r.set(1-m-f,f,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,i,s,r,a,l,o){return this.getBarycoord(e,t,i,s,ui)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,ui.x),o.addScaledVector(a,ui.y),o.addScaledVector(l,ui.z),o)}static getInterpolatedAttribute(e,t,i,s,r,a){return Da.setScalar(0),Ia.setScalar(0),Na.setScalar(0),Da.fromBufferAttribute(e,t),Ia.fromBufferAttribute(e,i),Na.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Da,r.x),a.addScaledVector(Ia,r.y),a.addScaledVector(Na,r.z),a}static isFrontFacing(e,t,i,s){return Bn.subVectors(i,t),ci.subVectors(e,t),Bn.cross(ci).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Bn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Xn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,l;os.subVectors(s,i),ls.subVectors(r,i),Ca.subVectors(e,i);const o=os.dot(Ca),c=ls.dot(Ca);if(o<=0&&c<=0)return t.copy(i);Pa.subVectors(e,s);const u=os.dot(Pa),d=ls.dot(Pa);if(u>=0&&d<=u)return t.copy(s);const h=o*d-u*c;if(h<=0&&o>=0&&u<=0&&o-u>0)return a=o/(o-u),t.copy(i).addScaledVector(os,a);La.subVectors(e,r);const m=os.dot(La),f=ls.dot(La);if(f>=0&&m<=f)return t.copy(r);const v=m*c-o*f;if(v<=0&&c>=0&&f<=0)return l=c/(c-f),t.copy(i).addScaledVector(ls,l);const x=u*f-m*d;if(x<=0&&d-u>=0&&m-f>=0)return Nl.subVectors(r,s),l=(d-u)/(d-u+(m-f)),t.copy(s).addScaledVector(Nl,l);const p=1/(x+v+h);return a=v*p,l=h*p,t.copy(i).addScaledVector(os,a).addScaledVector(ls,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ns{constructor(e=new ee(1/0,1/0,1/0),t=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,l=r.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,Hn):Hn.fromBufferAttribute(r,a),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Mr.copy(i.boundingBox)),Mr.applyMatrix4(e.matrixWorld),this.union(Mr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Is),br.subVectors(this.max,Is),cs.subVectors(e.a,Is),us.subVectors(e.b,Is),fs.subVectors(e.c,Is),wi.subVectors(us,cs),Ei.subVectors(fs,us),Bi.subVectors(cs,fs);let t=[0,-wi.z,wi.y,0,-Ei.z,Ei.y,0,-Bi.z,Bi.y,wi.z,0,-wi.x,Ei.z,0,-Ei.x,Bi.z,0,-Bi.x,-wi.y,wi.x,0,-Ei.y,Ei.x,0,-Bi.y,Bi.x,0];return!Ua(t,cs,us,fs,br)||(t=[1,0,0,0,1,0,0,0,1],!Ua(t,cs,us,fs,br))?!1:(Sr.crossVectors(wi,Ei),t=[Sr.x,Sr.y,Sr.z],Ua(t,cs,us,fs,br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fi=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],Hn=new ee,Mr=new ns,cs=new ee,us=new ee,fs=new ee,wi=new ee,Ei=new ee,Bi=new ee,Is=new ee,br=new ee,Sr=new ee,Hi=new ee;function Ua(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Hi.fromArray(n,r);const l=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),o=e.dot(Hi),c=t.dot(Hi),u=i.dot(Hi);if(Math.max(-Math.max(o,c,u),Math.min(o,c,u))>l)return!1}return!0}const Yt=new ee,wr=new it;let pd=0;class bn extends ts{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=qf,this.updateRanges=[],this.gpuType=$n,this.version=0,this._normalizationScale=e!==void 0?nl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)wr.fromBufferAttribute(this,t),wr.applyMatrix3(e),this.setXY(t,wr.x,wr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Qf(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):ed(e,this.array)}}class Du extends bn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Iu extends bn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class pt extends bn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const md=new ns,Ns=new ee,za=new ee;class hr{constructor(e=new ee,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):md.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ns.subVectors(e,this.center);const t=Ns.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ns,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ns.copy(e.center).add(za)),this.expandByPoint(Ns.copy(e.center).sub(za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let gd=0;const In=new Lt,Fa=new Zt,ds=new ee,Cn=new ns,Us=new ns,nn=new ee;class rn extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=dr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($f(e)?Iu:Du)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new dt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,t,i){return In.makeTranslation(e,t,i),this.applyMatrix4(In),this}scale(e,t,i){return In.makeScale(e,t,i),this.applyMatrix4(In),this}lookAt(e){return Fa.lookAt(e),Fa.updateMatrix(),this.applyMatrix4(Fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Cn.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];Us.setFromBufferAttribute(l),this.morphTargetsRelative?(nn.addVectors(Cn.min,Us.min),Cn.expandByPoint(nn),nn.addVectors(Cn.max,Us.max),Cn.expandByPoint(nn)):(Cn.expandByPoint(Us.min),Cn.expandByPoint(Us.max))}Cn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)nn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(nn));if(t)for(let r=0,a=t.length;r<a;r++){const l=t[r],o=this.morphTargetsRelative;for(let c=0,u=l.count;c<u;c++)nn.fromBufferAttribute(l,c),o&&(ds.fromBufferAttribute(e,c),nn.add(ds)),s=Math.max(s,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new bn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const l=[],o=[],c=new Uint8Array(i.count);for(let P=0;P<i.count;P++)l[P]=new ee,o[P]=new ee;const u=new ee,d=new ee,h=new ee,m=new it,f=new it,v=new it,x=new ee,p=new ee;function y(P,N,F){c[P]=c[N]=c[F]=1,u.fromBufferAttribute(i,P),d.fromBufferAttribute(i,N),h.fromBufferAttribute(i,F),m.fromBufferAttribute(r,P),f.fromBufferAttribute(r,N),v.fromBufferAttribute(r,F),d.sub(u),h.sub(u),f.sub(m),v.sub(m);const V=1/(f.x*v.y-v.x*f.y);isFinite(V)&&(x.copy(d).multiplyScalar(v.y).addScaledVector(h,-f.y).multiplyScalar(V),p.copy(h).multiplyScalar(f.x).addScaledVector(d,-v.x).multiplyScalar(V),l[P].add(x),l[N].add(x),l[F].add(x),o[P].add(p),o[N].add(p),o[F].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let P=0,N=T.length;P<N;++P){const F=T[P],V=F.start,te=F.count;for(let B=V,j=V+te;B<j;B+=3)y(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const b=new ee,A=new ee,R=new ee,M=new ee;function C(P){R.fromBufferAttribute(s,P),M.copy(R);const N=l[P];b.copy(N),b.sub(R.multiplyScalar(R.dot(N))).normalize(),A.crossVectors(M,N);const V=A.dot(o[P])<0?-1:1;a.setXYZW(P,b.x,b.y,b.z,V)}for(let P=0,N=i.count;P<N;++P)c[P]&&C(P);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new bn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const s=new ee,r=new ee,a=new ee,l=new ee,o=new ee,c=new ee,u=new ee,d=new ee;if(e)for(let h=0,m=e.count;h<m;h+=3){const f=e.getX(h+0),v=e.getX(h+1),x=e.getX(h+2);s.fromBufferAttribute(t,f),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,x),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),l.fromBufferAttribute(i,f),o.fromBufferAttribute(i,v),c.fromBufferAttribute(i,x),l.add(u),o.add(u),c.add(u),i.setXYZ(f,l.x,l.y,l.z),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(l,o){const c=l.array,u=l.itemSize,d=l.normalized,h=new c.constructor(o.length*u);let m=0,f=0;for(let v=0,x=o.length;v<x;v++){l.isInterleavedBufferAttribute?m=o[v]*l.data.stride+l.offset:m=o[v]*u;for(let p=0;p<u;p++)h[f++]=c[m++]}return new bn(h,u,d)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rn,i=this.index.array,s=this.attributes;for(const l in s){const o=s[l],c=e(o,i);t.setAttribute(l,c)}const r=this.morphAttributes;for(const l in r){const o=[],c=r[l];for(let u=0,d=c.length;u<d;u++){const h=c[u],m=e(h,i);o.push(m)}t.morphAttributes[l]=o}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,o=a.length;l<o;l++){const c=a[l];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const o=this.parameters;for(const c in o)o[c]!==void 0&&(e[c]=o[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const o in i){const c=i[o];e.data.attributes[o]=c.toJSON(e.data)}const s={};let r=!1;for(const o in this.morphAttributes){const c=this.morphAttributes[o],u=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(s[o]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oa=new ee,xd=new ee,vd=new dt;class Li{constructor(e=new ee(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Oa.subVectors(i,t).cross(xd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Oa),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||vd.getNormalMatrix(e),s=this.coplanarPoint(Oa).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let _d=0;class Ps extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=dr(),this.name="",this.type="Material",this.blending=js,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lu,this.blendDst=cu,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=va,this.stencilZFail=va,this.stencilZPass=va,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){at(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){at(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const l in r){const o=r[l];delete o.metadata,a.push(o)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ot().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Li().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new it().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new it().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const di=new ee,ka=new ee,Er=new ee,Tr=new ee;class yd{constructor(e=new ee,t=new ee(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ka.copy(e).add(t).multiplyScalar(.5),Er.copy(t).sub(e).normalize(),Tr.copy(this.origin).sub(ka);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Er),l=Tr.dot(this.direction),o=-Tr.dot(Er),c=Tr.lengthSq(),u=Math.abs(1-a*a);let d,h,m,f;if(u>0)if(d=a*o-l,h=a*l-o,f=r*u,d>=0)if(h>=-f)if(h<=f){const v=1/u;d*=v,h*=v,m=d*(d+a*h+2*l)+h*(a*d+h+2*o)+c}else h=r,d=Math.max(0,-(a*h+l)),m=-d*d+h*(h+2*o)+c;else h=-r,d=Math.max(0,-(a*h+l)),m=-d*d+h*(h+2*o)+c;else h<=-f?(d=Math.max(0,-(-a*r+l)),h=d>0?-r:Math.min(Math.max(-r,-o),r),m=-d*d+h*(h+2*o)+c):h<=f?(d=0,h=Math.min(Math.max(-r,-o),r),m=h*(h+2*o)+c):(d=Math.max(0,-(a*r+l)),h=d>0?r:Math.min(Math.max(-r,-o),r),m=-d*d+h*(h+2*o)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+l)),m=-d*d+h*(h+2*o)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ka).addScaledVector(Er,h),m}intersectSphere(e,t){if(e.radius<0)return null;di.subVectors(e.center,this.origin);const i=di.dot(this.direction),s=di.dot(di)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),l=i-a,o=i+a;return o<0?null:l<0?this.at(o,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,l,o;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(l=(e.min.z-h.z)*d,o=(e.max.z-h.z)*d):(l=(e.max.z-h.z)*d,o=(e.min.z-h.z)*d),i>o||l>s)||((l>i||i!==i)&&(i=l),(o<s||s!==s)&&(s=o),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,i,s,r){const a=this.origin,l=this.direction,o=l.x,c=l.y,u=l.z,d=e.x-a.x,h=e.y-a.y,m=e.z-a.z,f=t.x-a.x,v=t.y-a.y,x=t.z-a.z,p=i.x-a.x,y=i.y-a.y,T=i.z-a.z,b=Math.abs(o),A=Math.abs(c),R=Math.abs(u);let M,C,P,N,F,V,te,B,j,oe,re,Te;if(b>=A&&b>=R?(P=o,V=d,j=f,Te=p,o>=0?(M=c,C=u,N=h,F=m,te=v,B=x,oe=y,re=T):(M=u,C=c,N=m,F=h,te=x,B=v,oe=T,re=y)):A>=R?(P=c,V=h,j=v,Te=y,c>=0?(M=u,C=o,N=m,F=d,te=x,B=f,oe=T,re=p):(M=o,C=u,N=d,F=m,te=f,B=x,oe=p,re=T)):(P=u,V=m,j=x,Te=T,u>=0?(M=o,C=c,N=d,F=h,te=f,B=v,oe=p,re=y):(M=c,C=o,N=h,F=d,te=v,B=f,oe=y,re=p)),P===0)return null;const ie=M/P,Se=C/P,me=1/P,De=N-ie*V,Ge=F-Se*V,xe=te-ie*j,Ie=B-Se*j,Be=oe-ie*Te,qe=re-Se*Te,Ne=Be*Ie-qe*xe,Ke=De*qe-Ge*Be,ht=xe*Ge-Ie*De;if(s){if(Ne<0||Ke<0||ht<0)return null}else if((Ne<0||Ke<0||ht<0)&&(Ne>0||Ke>0||ht>0))return null;const ke=Ne+Ke+ht;if(ke===0)return null;const tt=me*(Ne*V+Ke*j+ht*Te);return(ke>0?tt<0:tt>0)?null:this.at(tt/ke,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class As extends Ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=Yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ul=new Lt,Gi=new yd,Ar=new hr,zl=new ee,Rr=new ee,Cr=new ee,Pr=new ee,Ba=new ee,Lr=new ee,Fl=new ee,Dr=new ee;class vt extends Zt{constructor(e=new rn,t=new As){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const l=this.morphTargetInfluences;if(r&&l){Lr.set(0,0,0);for(let o=0,c=r.length;o<c;o++){const u=l[o],d=r[o];u!==0&&(Ba.fromBufferAttribute(d,e),a?Lr.addScaledVector(Ba,u):Lr.addScaledVector(Ba.sub(t),u))}t.add(Lr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ar.copy(i.boundingSphere),Ar.applyMatrix4(r),Gi.copy(e.ray).recast(e.near),!(Ar.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(Ar,zl)===null||Gi.origin.distanceToSquared(zl)>(e.far-e.near)**2))&&(Ul.copy(r).invert(),Gi.copy(e.ray).applyMatrix4(Ul),!(i.boundingBox!==null&&Gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,l=r.index,o=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,m=r.drawRange;if(l!==null)if(Array.isArray(a))for(let f=0,v=h.length;f<v;f++){const x=h[f],p=a[x.materialIndex],y=Math.max(x.start,m.start),T=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let b=y,A=T;b<A;b+=3){const R=l.getX(b),M=l.getX(b+1),C=l.getX(b+2);s=Ir(this,p,e,i,c,u,d,R,M,C),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const f=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let x=f,p=v;x<p;x+=3){const y=l.getX(x),T=l.getX(x+1),b=l.getX(x+2);s=Ir(this,a,e,i,c,u,d,y,T,b),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(o!==void 0)if(Array.isArray(a))for(let f=0,v=h.length;f<v;f++){const x=h[f],p=a[x.materialIndex],y=Math.max(x.start,m.start),T=Math.min(o.count,Math.min(x.start+x.count,m.start+m.count));for(let b=y,A=T;b<A;b+=3){const R=b,M=b+1,C=b+2;s=Ir(this,p,e,i,c,u,d,R,M,C),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const f=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let x=f,p=v;x<p;x+=3){const y=x,T=x+1,b=x+2;s=Ir(this,a,e,i,c,u,d,y,T,b),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}}function Md(n,e,t,i,s,r,a,l){let o;if(e.side===Sn?o=i.intersectTriangle(a,r,s,!0,l):o=i.intersectTriangle(s,r,a,e.side===ji,l),o===null)return null;Dr.copy(l),Dr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Dr);return c<t.near||c>t.far?null:{distance:c,point:Dr.clone(),object:n}}function Ir(n,e,t,i,s,r,a,l,o,c){n.getVertexPosition(l,Rr),n.getVertexPosition(o,Cr),n.getVertexPosition(c,Pr);const u=Md(n,e,t,i,Rr,Cr,Pr,Fl);if(u){const d=new ee;Xn.getBarycoord(Fl,Rr,Cr,Pr,d),s&&(u.uv=Xn.getInterpolatedAttribute(s,l,o,c,d,new it)),r&&(u.uv1=Xn.getInterpolatedAttribute(r,l,o,c,d,new it)),a&&(u.normal=Xn.getInterpolatedAttribute(a,l,o,c,d,new ee),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:l,b:o,c,normal:new ee,materialIndex:0};Xn.getNormal(Rr,Cr,Pr,h.normal),u.face=h,u.barycoord=d}return u}class Nu extends xn{constructor(e=null,t=1,i=1,s,r,a,l,o,c=ln,u=ln,d,h){super(null,a,l,o,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ol extends bn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const hs=new Lt,kl=new Lt,Nr=[],Bl=new ns,bd=new Lt,zs=new vt,Fs=new hr;class Pi extends vt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ol(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,bd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ns),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,hs),Bl.copy(e.boundingBox).applyMatrix4(hs),this.boundingBox.union(Bl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,hs),Fs.copy(e.boundingSphere).applyMatrix4(hs),this.boundingSphere.union(Fs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let l=0;l<i.length;l++)i[l]=s[a+l]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(zs.geometry=this.geometry,zs.material=this.material,zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fs.copy(this.boundingSphere),Fs.applyMatrix4(i),e.ray.intersectsSphere(Fs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hs),kl.multiplyMatrices(i,hs),zs.matrixWorld=kl,zs.raycast(e,Nr);for(let a=0,l=Nr.length;a<l;a++){const o=Nr[a];o.instanceId=r,o.object=this,t.push(o)}Nr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ol(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Nu(new Float32Array(s*this.count),s,this.count,jo,$n));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const l=this.geometry.morphTargetsRelative?1:1-a,o=s*e;return r[o]=l,r.set(i,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Vi=new hr,Sd=new it(.5,.5),Ur=new ee;class lr{constructor(e=new Li,t=new Li,i=new Li,s=new Li,r=new Li,a=new Li){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Yn,i=!1){const s=this.planes,r=e.elements,a=r[0],l=r[1],o=r[2],c=r[3],u=r[4],d=r[5],h=r[6],m=r[7],f=r[8],v=r[9],x=r[10],p=r[11],y=r[12],T=r[13],b=r[14],A=r[15];if(s[0].setComponents(c-a,m-u,p-f,A-y).normalize(),s[1].setComponents(c+a,m+u,p+f,A+y).normalize(),s[2].setComponents(c+l,m+d,p+v,A+T).normalize(),s[3].setComponents(c-l,m-d,p-v,A-T).normalize(),i)s[4].setComponents(o,h,x,b).normalize(),s[5].setComponents(c-o,m-h,p-x,A-b).normalize();else if(s[4].setComponents(c-o,m-h,p-x,A-b).normalize(),t===Yn)s[5].setComponents(c+o,m+h,p+x,A+b).normalize();else if(t===or)s[5].setComponents(o,h,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){Vi.center.set(0,0,0);const t=Sd.distanceTo(e.center);return Vi.radius=.7071067811865476+t,Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ur.x=s.normal.x>0?e.max.x:e.min.x,Ur.y=s.normal.y>0?e.max.y:e.min.y,Ur.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ur)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Hl=new Lt;class rl{constructor(){this.coordinateSystem=Yn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];Hl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new lr),i[s].setFromProjectionMatrix(Hl,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new lr),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new rl().copy(this)}}class Uu extends xn{constructor(e=[],t=Es,i,s,r,a,l,o,c,u){super(e,t,i,s,r,a,l,o,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ea extends xn{constructor(e,t,i,s,r,a,l,o,c){super(e,t,i,s,r,a,l,o,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Rs extends xn{constructor(e,t,i=ai,s,r,a,l=ln,o=ln,c,u=Ui,d=1){if(u!==Ui&&u!==Ii)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,s,r,a,l,o,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new il(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class zu extends Rs{constructor(e,t=ai,i=Es,s,r,a=ln,l=ln,o,c=Ui){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,l,o,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Fu extends xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class kt extends rn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const o=[],c=[],u=[],d=[];let h=0,m=0;f("z","y","x",-1,-1,i,t,e,a,r,0),f("z","y","x",1,-1,i,t,-e,a,r,1),f("x","z","y",1,1,e,i,t,s,a,2),f("x","z","y",1,-1,e,i,-t,s,a,3),f("x","y","z",1,-1,e,t,i,s,r,4),f("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(o),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(d,2));function f(v,x,p,y,T,b,A,R,M,C,P){const N=b/M,F=A/C,V=b/2,te=A/2,B=R/2,j=M+1,oe=C+1;let re=0,Te=0;const ie=new ee;for(let Se=0;Se<oe;Se++){const me=Se*F-te;for(let De=0;De<j;De++){const Ge=De*N-V;ie[v]=Ge*y,ie[x]=me*T,ie[p]=B,c.push(ie.x,ie.y,ie.z),ie[v]=0,ie[x]=0,ie[p]=R>0?1:-1,u.push(ie.x,ie.y,ie.z),d.push(De/M),d.push(1-Se/C),re+=1}}for(let Se=0;Se<C;Se++)for(let me=0;me<M;me++){const De=h+me+j*Se,Ge=h+me+j*(Se+1),xe=h+(me+1)+j*(Se+1),Ie=h+(me+1)+j*Se;o.push(De,Ge,Ie),o.push(Ge,xe,Ie),Te+=6}l.addGroup(m,Te,P),m+=Te,h+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class al extends rn{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],l=[],o=[],c=[],u=t/2,d=Math.PI/2*e,h=t,m=2*d+h,f=i*2+r,v=s+1,x=new ee,p=new ee;for(let y=0;y<=f;y++){let T=0,b=0,A=0,R=0;if(y<=i){const P=y/i,N=P*Math.PI/2;b=-u-e*Math.cos(N),A=e*Math.sin(N),R=-e*Math.cos(N),T=P*d}else if(y<=i+r){const P=(y-i)/r;b=-u+P*t,A=e,R=0,T=d+P*h}else{const P=(y-i-r)/i,N=P*Math.PI/2;b=u+e*Math.sin(N),A=e*Math.cos(N),R=e*Math.sin(N),T=d+h+P*d}const M=Math.max(0,Math.min(1,T/m));let C=0;y===0?C=.5/s:y===f&&(C=-.5/s);for(let P=0;P<=s;P++){const N=P/s,F=N*Math.PI*2,V=Math.sin(F),te=Math.cos(F);p.x=-A*te,p.y=b,p.z=A*V,l.push(p.x,p.y,p.z),x.set(-A*te,R,A*V),x.normalize(),o.push(x.x,x.y,x.z),c.push(N+C,M)}if(y>0){const P=(y-1)*v;for(let N=0;N<s;N++){const F=P+N,V=P+N+1,te=y*v+N,B=y*v+N+1;a.push(F,V,te),a.push(V,B,te)}}}this.setIndex(a),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(o,3)),this.setAttribute("uv",new pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Ji extends rn{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,l=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:o};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],m=[];let f=0;const v=[],x=i/2;let p=0;y(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new pt(d,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(m,2));function y(){const b=new ee,A=new ee;let R=0;const M=(t-e)/i;for(let C=0;C<=r;C++){const P=[],N=C/r,F=N*(t-e)+e;for(let V=0;V<=s;V++){const te=V/s,B=te*o+l,j=Math.sin(B),oe=Math.cos(B);A.x=F*j,A.y=-N*i+x,A.z=F*oe,d.push(A.x,A.y,A.z),b.set(j,M,oe).normalize(),h.push(b.x,b.y,b.z),m.push(te,1-N),P.push(f++)}v.push(P)}for(let C=0;C<s;C++)for(let P=0;P<r;P++){const N=v[P][C],F=v[P+1][C],V=v[P+1][C+1],te=v[P][C+1];(e>0||P!==0)&&(u.push(N,F,te),R+=3),(t>0||P!==r-1)&&(u.push(F,V,te),R+=3)}c.addGroup(p,R,0),p+=R}function T(b){const A=f,R=new it,M=new ee;let C=0;const P=b===!0?e:t,N=b===!0?1:-1;for(let V=1;V<=s;V++)d.push(0,x*N,0),h.push(0,N,0),m.push(.5,.5),f++;const F=f;for(let V=0;V<=s;V++){const B=V/s*o+l,j=Math.cos(B),oe=Math.sin(B);M.x=P*oe,M.y=x*N,M.z=P*j,d.push(M.x,M.y,M.z),h.push(0,N,0),R.x=j*.5+.5,R.y=oe*.5*N+.5,m.push(R.x,R.y),f++}for(let V=0;V<s;V++){const te=A+V,B=F+V;b===!0?u.push(B,B+1,te):u.push(B+1,B,te),C+=3}c.addGroup(p,C,b===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ji(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){at("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let l=0,o=r-1,c;for(;l<=o;)if(s=Math.floor(l+(o-l)/2),c=i[s]-a,c<0)l=s+1;else if(c>0)o=s-1;else{o=s;break}if(s=o,i[s]===a)return s/(r-1);const u=i[s],h=i[s+1]-u,m=(a-u)/h;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),l=this.getPoint(r),o=t||(a.isVector2?new it:new ee);return o.copy(l).sub(a).normalize(),o}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new ee,s=[],r=[],a=[],l=new ee,o=new Lt;for(let m=0;m<=e;m++){const f=m/e;s[m]=this.getTangentAt(f,new ee)}r[0]=new ee,a[0]=new ee;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),l.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],l),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),l.crossVectors(s[m-1],s[m]),l.length()>Number.EPSILON){l.normalize();const f=Math.acos(Mt(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(o.makeRotationAxis(l,f))}a[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(Mt(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(l.crossVectors(r[0],r[e]))>0&&(m=-m);for(let f=1;f<=e;f++)r[f].applyMatrix4(o.makeRotationAxis(s[f],m*f)),a[f].crossVectors(s[f],r[f])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class Ou extends yi{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,l=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=l,this.aRotation=o}getPoint(e,t=new it){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const l=this.aStartAngle+e*r;let o=this.aX+this.xRadius*Math.cos(l),c=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=o-this.aX,m=c-this.aY;o=h*u-m*d+this.aX,c=h*d+m*u+this.aY}return i.set(o,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class wd extends Ou{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ol(){let n=0,e=0,t=0,i=0;function s(r,a,l,o){n=r,e=l,t=-3*r+3*a-2*l-o,i=2*r-2*a+l+o}return{initCatmullRom:function(r,a,l,o,c){s(a,l,c*(l-r),c*(o-a))},initNonuniformCatmullRom:function(r,a,l,o,c,u,d){let h=(a-r)/c-(l-r)/(c+u)+(l-a)/u,m=(l-a)/u-(o-a)/(u+d)+(o-l)/d;h*=u,m*=u,s(a,l,h,m)},calc:function(r){const a=r*r,l=a*r;return n+e*r+t*a+i*l}}}const Gl=new ee,Vl=new ee,Ha=new ol,Ga=new ol,Va=new ol;class ku extends yi{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new ee){const i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let l=Math.floor(a),o=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:o===0&&l===r-1&&(l=r-2,o=1);let c,u;this.closed||l>0?c=s[(l-1)%r]:(Vl.subVectors(s[0],s[1]).add(s[0]),c=Vl);const d=s[l%r],h=s[(l+1)%r];if(this.closed||l+2<r?u=s[(l+2)%r]:(Gl.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Gl),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let f=Math.pow(c.distanceToSquared(d),m),v=Math.pow(d.distanceToSquared(h),m),x=Math.pow(h.distanceToSquared(u),m);v<1e-4&&(v=1),f<1e-4&&(f=v),x<1e-4&&(x=v),Ha.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,f,v,x),Ga.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,f,v,x),Va.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,f,v,x)}else this.curveType==="catmullrom"&&(Ha.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Ga.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Va.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(Ha.calc(o),Ga.calc(o),Va.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new ee().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Wl(n,e,t,i,s){const r=(i-e)*.5,a=(s-t)*.5,l=n*n,o=n*l;return(2*t-2*i+r+a)*o+(-3*t+3*i-2*r-a)*l+r*n+t}function Ed(n,e){const t=1-n;return t*t*e}function Td(n,e){return 2*(1-n)*n*e}function Ad(n,e){return n*n*e}function Qs(n,e,t,i){return Ed(n,e)+Td(n,t)+Ad(n,i)}function Rd(n,e){const t=1-n;return t*t*t*e}function Cd(n,e){const t=1-n;return 3*t*t*n*e}function Pd(n,e){return 3*(1-n)*n*n*e}function Ld(n,e){return n*n*n*e}function er(n,e,t,i,s){return Rd(n,e)+Cd(n,t)+Pd(n,i)+Ld(n,s)}class Dd extends yi{constructor(e=new it,t=new it,i=new it,s=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new it){const i=t,s=this.v0,r=this.v1,a=this.v2,l=this.v3;return i.set(er(e,s.x,r.x,a.x,l.x),er(e,s.y,r.y,a.y,l.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Id extends yi{constructor(e=new ee,t=new ee,i=new ee,s=new ee){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ee){const i=t,s=this.v0,r=this.v1,a=this.v2,l=this.v3;return i.set(er(e,s.x,r.x,a.x,l.x),er(e,s.y,r.y,a.y,l.y),er(e,s.z,r.z,a.z,l.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Nd extends yi{constructor(e=new it,t=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new it){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new it){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ud extends yi{constructor(e=new ee,t=new ee){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new ee){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zd extends yi{constructor(e=new it,t=new it,i=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new it){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Qs(e,s.x,r.x,a.x),Qs(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bu extends yi{constructor(e=new ee,t=new ee,i=new ee){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ee){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Qs(e,s.x,r.x,a.x),Qs(e,s.y,r.y,a.y),Qs(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fd extends yi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new it){const i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),l=r-a,o=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(Wl(l,o.x,c.x,u.x,d.x),Wl(l,o.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new it().fromArray(s))}return this}}var Od=Object.freeze({__proto__:null,ArcCurve:wd,CatmullRomCurve3:ku,CubicBezierCurve:Dd,CubicBezierCurve3:Id,EllipseCurve:Ou,LineCurve:Nd,LineCurve3:Ud,QuadraticBezierCurve:zd,QuadraticBezierCurve3:Bu,SplineCurve:Fd});class Ni extends rn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,l=Math.floor(i),o=Math.floor(s),c=l+1,u=o+1,d=e/l,h=t/o,m=[],f=[],v=[],x=[];for(let p=0;p<u;p++){const y=p*h-a;for(let T=0;T<c;T++){const b=T*d-r;f.push(b,-y,0),v.push(0,0,1),x.push(T/l),x.push(1-p/o)}}for(let p=0;p<o;p++)for(let y=0;y<l;y++){const T=y+c*p,b=y+c*(p+1),A=y+1+c*(p+1),R=y+1+c*p;m.push(T,b,R),m.push(b,A,R)}this.setIndex(m),this.setAttribute("position",new pt(f,3)),this.setAttribute("normal",new pt(v,3)),this.setAttribute("uv",new pt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ni(e.width,e.height,e.widthSegments,e.heightSegments)}}class Di extends rn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const o=Math.min(a+l,Math.PI);let c=0;const u=[],d=new ee,h=new ee,m=[],f=[],v=[],x=[];for(let p=0;p<=i;p++){const y=[],T=p/i,b=a+T*l,A=e*Math.cos(b),R=Math.sqrt(e*e-A*A);let M=0;p===0&&a===0?M=.5/t:p===i&&o===Math.PI&&(M=-.5/t);for(let C=0;C<=t;C++){const P=C/t,N=s+P*r;d.x=-R*Math.cos(N),d.y=A,d.z=R*Math.sin(N),f.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),x.push(P+M,1-T),y.push(c++)}u.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){const T=u[p][y+1],b=u[p][y],A=u[p+1][y],R=u[p+1][y+1];(p!==0||a>0)&&m.push(T,b,R),(p!==i-1||o<Math.PI)&&m.push(b,A,R)}this.setIndex(m),this.setAttribute("position",new pt(f,3)),this.setAttribute("normal",new pt(v,3)),this.setAttribute("uv",new pt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ll extends rn{constructor(e=new Bu(new ee(-1,-1,0),new ee(-1,1,0),new ee(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const l=new ee,o=new ee,c=new it;let u=new ee;const d=[],h=[],m=[],f=[];v(),this.setIndex(f),this.setAttribute("position",new pt(d,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(m,2));function v(){for(let T=0;T<t;T++)x(T);x(r===!1?t:0),y(),p()}function x(T){u=e.getPointAt(T/t,u);const b=a.normals[T],A=a.binormals[T];for(let R=0;R<=s;R++){const M=R/s*Math.PI*2,C=Math.sin(M),P=-Math.cos(M);o.x=P*b.x+C*A.x,o.y=P*b.y+C*A.y,o.z=P*b.z+C*A.z,o.normalize(),h.push(o.x,o.y,o.z),l.x=u.x+i*o.x,l.y=u.y+i*o.y,l.z=u.z+i*o.z,d.push(l.x,l.y,l.z)}}function p(){for(let T=1;T<=t;T++)for(let b=1;b<=s;b++){const A=(s+1)*(T-1)+(b-1),R=(s+1)*T+(b-1),M=(s+1)*T+b,C=(s+1)*(T-1)+b;f.push(A,R,C),f.push(R,M,C)}}function y(){for(let T=0;T<=t;T++)for(let b=0;b<=s;b++)c.x=T/t,c.y=b/s,m.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ll(new Od[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Cs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(Xl(s))s.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Xl(s[0])){const r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function _n(n){const e={};for(let t=0;t<n.length;t++){const i=Cs(n[t]);for(const s in i)e[s]=i[s]}return e}function Xl(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function kd(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Hu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const Bd={clone:Cs,merge:_n};var Hd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends Ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hd,this.fragmentShader=Gd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=kd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ot().setHex(s.value);break;case"v2":this.uniforms[i].value=new it().fromArray(s.value);break;case"v3":this.uniforms[i].value=new ee().fromArray(s.value);break;case"v4":this.uniforms[i].value=new qt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new dt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Lt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Vd extends zi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yn extends Ps{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ra,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wd extends Ps{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ra,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=Yo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xd extends Ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Of,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qd extends Ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class cl extends Zt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class $d extends cl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Wa=new Lt,ql=new ee,$l=new ee;class Gu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lr,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;ql.setFromMatrixPosition(e.matrixWorld),t.position.copy(ql),$l.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($l),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Wa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Wa,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,o=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===or||e.reversedDepth?t.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+c,0,0,.5,.5,0,0,0,1),t.multiply(Wa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const zr=new ee,Fr=new cn,Zn=new ee;class Vu extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(zr,Fr,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zr,Fr,Zn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(zr,Fr,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zr,Fr,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new ee,Yl=new it,Kl=new it;class Dn extends Vu{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ca*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_a*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ca*2*Math.atan(Math.tan(_a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,Yl,Kl),t.subVectors(Kl,Yl)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_a*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const o=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/o,t-=a.offsetY*i/c,s*=a.width/o,i*=a.height/c}const l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Yd extends Gu{constructor(){super(new Dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=ca*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class Kd extends cl{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Yd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Jd extends Gu{constructor(){super(new Dn(90,1,.5,500)),this.isPointLightShadow=!0}}class Wu extends cl{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Jd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Xu extends Vu{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,l=s+t,o=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,l-=u*this.view.offsetY,o=l-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ps=-90,ms=1;class Bo extends Zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Dn(ps,ms,e,t);s.layers=this.layers,this.add(s);const r=new Dn(ps,ms,e,t);r.layers=this.layers,this.add(r);const a=new Dn(ps,ms,e,t);a.layers=this.layers,this.add(a);const l=new Dn(ps,ms,e,t);l.layers=this.layers,this.add(l);const o=new Dn(ps,ms,e,t);o.layers=this.layers,this.add(o);const c=new Dn(ps,ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,l,o]=t;for(const c of t)this.remove(c);if(e===Yn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===or)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,l,o,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,3,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=v,e.setRenderTarget(i,5,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,m),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Zd extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Jl(n,e,t,i){const s=jd(i);switch(t){case bu:return n*e;case jo:return n*e/s.components*s.byteLength;case Qo:return n*e/s.components*s.byteLength;case Qi:return n*e*2/s.components*s.byteLength;case el:return n*e*2/s.components*s.byteLength;case Su:return n*e*3/s.components*s.byteLength;case ni:return n*e*4/s.components*s.byteLength;case tl:return n*e*4/s.components*s.byteLength;case Kr:case Jr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zr:case jr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case uo:case ho:return Math.max(n,16)*Math.max(e,8)/4;case co:case fo:return Math.max(n,8)*Math.max(e,8)/2;case po:case mo:case xo:case vo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case go:case ia:case _o:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Mo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case bo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case So:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case wo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Eo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case To:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ao:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ro:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Co:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Po:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Lo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Do:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Io:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case No:case Uo:case zo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Fo:case Oo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case sa:case ko:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jd(n){switch(n){case En:case vu:return{byteLength:1,components:1};case ar:case _u:case Kn:return{byteLength:2,components:1};case Jo:case Zo:return{byteLength:2,components:4};case ai:case Ko:case $n:return{byteLength:4,components:1};case yu:case Mu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$o}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$o);function qu(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Qd(n){const e=new WeakMap;function t(l,o){const c=l.array,u=l.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(o,h),n.bufferData(o,c,u),l.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:d}}function i(l,o,c){const u=o.array,d=o.updateRanges;if(n.bindBuffer(c,l),d.length===0)n.bufferSubData(c,0,u);else{d.sort((m,f)=>m.start-f.start);let h=0;for(let m=1;m<d.length;m++){const f=d[h],v=d[m];v.start<=f.start+f.count+1?f.count=Math.max(f.count,v.start+v.count-f.start):(++h,d[h]=v)}d.length=h+1;for(let m=0,f=d.length;m<f;m++){const v=d[m];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}o.clearUpdateRanges()}o.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const o=e.get(l);o&&(n.deleteBuffer(o.buffer),e.delete(l))}function a(l,o){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const u=e.get(l);(!u||u.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const c=e.get(l);if(c===void 0)e.set(l,t(l,o));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,l,o),c.version=l.version}}return{get:s,remove:r,update:a}}var eh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,th=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ih=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ah=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,oh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ch=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ph=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_h=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,yh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Mh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Sh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Eh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Th=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ah=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ch="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ph=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Dh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Ih=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Nh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Oh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Xh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,qh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$h=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zh=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ep=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tp=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,np=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ip=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ap=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,op=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,up=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hp=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,bp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ep=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ap=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Cp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ip=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Np=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Up=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,zp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Op=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$p=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n0=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,a0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,o0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,l0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,d0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,h0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,p0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,v0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,y0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,M0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,w0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,R0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,C0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,D0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gt={alphahash_fragment:eh,alphahash_pars_fragment:th,alphamap_fragment:nh,alphamap_pars_fragment:ih,alphatest_fragment:sh,alphatest_pars_fragment:rh,aomap_fragment:ah,aomap_pars_fragment:oh,batching_pars_vertex:lh,batching_vertex:ch,begin_vertex:uh,beginnormal_vertex:fh,bsdfs:dh,iridescence_fragment:hh,bumpmap_pars_fragment:ph,clipping_planes_fragment:mh,clipping_planes_pars_fragment:gh,clipping_planes_pars_vertex:xh,clipping_planes_vertex:vh,color_fragment:_h,color_pars_fragment:yh,color_pars_vertex:Mh,color_vertex:bh,common:Sh,defaultnormal_vertex:wh,displacementmap_pars_vertex:Eh,displacementmap_vertex:Th,emissivemap_fragment:Ah,emissivemap_pars_fragment:Rh,colorspace_fragment:Ch,colorspace_pars_fragment:Ph,envmap_fragment:Lh,envmap_common_pars_fragment:Dh,envmap_pars_fragment:Ih,envmap_pars_vertex:Nh,envmap_physical_pars_fragment:Xh,envmap_vertex:Uh,fog_vertex:zh,fog_pars_vertex:Fh,fog_fragment:Oh,fog_pars_fragment:kh,gradientmap_pars_fragment:Bh,lightmap_pars_fragment:Hh,lights_lambert_fragment:Gh,lights_lambert_pars_fragment:Vh,lights_pars_begin:Wh,lights_toon_fragment:qh,lights_toon_pars_fragment:$h,lights_phong_fragment:Yh,lights_phong_pars_fragment:Kh,lights_physical_fragment:Jh,lights_physical_pars_fragment:Zh,lights_fragment_begin:jh,lights_fragment_maps:Qh,lights_fragment_end:ep,lightprobes_pars_fragment:tp,logdepthbuf_fragment:np,logdepthbuf_pars_fragment:ip,logdepthbuf_pars_vertex:sp,logdepthbuf_vertex:rp,map_fragment:ap,map_pars_fragment:op,map_particle_fragment:lp,map_particle_pars_fragment:cp,metalnessmap_fragment:up,metalnessmap_pars_fragment:fp,morphinstance_vertex:dp,morphcolor_vertex:hp,morphnormal_vertex:pp,morphtarget_pars_vertex:mp,morphtarget_vertex:gp,normal_fragment_begin:xp,normal_fragment_maps:vp,normal_pars_fragment:_p,normal_pars_vertex:yp,normal_vertex:Mp,normalmap_pars_fragment:bp,clearcoat_normal_fragment_begin:Sp,clearcoat_normal_fragment_maps:wp,clearcoat_pars_fragment:Ep,iridescence_pars_fragment:Tp,opaque_fragment:Ap,packing:Rp,premultiplied_alpha_fragment:Cp,project_vertex:Pp,dithering_fragment:Lp,dithering_pars_fragment:Dp,roughnessmap_fragment:Ip,roughnessmap_pars_fragment:Np,shadowmap_pars_fragment:Up,shadowmap_pars_vertex:zp,shadowmap_vertex:Fp,shadowmask_pars_fragment:Op,skinbase_vertex:kp,skinning_pars_vertex:Bp,skinning_vertex:Hp,skinnormal_vertex:Gp,specularmap_fragment:Vp,specularmap_pars_fragment:Wp,tonemapping_fragment:Xp,tonemapping_pars_fragment:qp,transmission_fragment:$p,transmission_pars_fragment:Yp,uv_pars_fragment:Kp,uv_pars_vertex:Jp,uv_vertex:Zp,worldpos_vertex:jp,background_vert:Qp,background_frag:e0,backgroundCube_vert:t0,backgroundCube_frag:n0,cube_vert:i0,cube_frag:s0,depth_vert:r0,depth_frag:a0,distance_vert:o0,distance_frag:l0,equirect_vert:c0,equirect_frag:u0,linedashed_vert:f0,linedashed_frag:d0,meshbasic_vert:h0,meshbasic_frag:p0,meshlambert_vert:m0,meshlambert_frag:g0,meshmatcap_vert:x0,meshmatcap_frag:v0,meshnormal_vert:_0,meshnormal_frag:y0,meshphong_vert:M0,meshphong_frag:b0,meshphysical_vert:S0,meshphysical_frag:w0,meshtoon_vert:E0,meshtoon_frag:T0,points_vert:A0,points_frag:R0,shadow_vert:C0,shadow_frag:P0,sprite_vert:L0,sprite_frag:D0},$e={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Qn={basic:{uniforms:_n([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:_n([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:_n([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:_n([$e.common,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.roughnessmap,$e.metalnessmap,$e.fog,$e.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:_n([$e.common,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.gradientmap,$e.fog,$e.lights,{emissive:{value:new ot(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:_n([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:_n([$e.points,$e.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:_n([$e.common,$e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:_n([$e.common,$e.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:_n([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:_n([$e.sprite,$e.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:_n([$e.common,$e.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:_n([$e.lights,$e.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Qn.physical={uniforms:_n([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new dt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Or={r:0,b:0,g:0},I0=new Lt,$u=new dt;$u.set(-1,0,0,0,1,0,0,0,1);function N0(n,e,t,i,s,r){const a=new ot(0);let l=s===!0?0:1,o,c,u=null,d=0,h=null;function m(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){const b=y.backgroundBlurriness>0;T=e.get(T,b)}return T}function f(y){let T=!1;const b=m(y);b===null?x(a,l):b&&b.isColor&&(x(b,1),T=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(y,T){const b=m(T);b&&b.isCubeTexture?(c===void 0&&(c=new vt(new kt(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:Cs(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,R,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(I0.makeRotationFromEuler(T.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply($u),c.material.toneMapped=wt.getTransfer(b.colorSpace)!==It,(u!==b||d!==b.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,h=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(o===void 0&&(o=new vt(new Ni(2,2),new zi({name:"BackgroundMaterial",uniforms:Cs(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=b,o.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,o.material.toneMapped=wt.getTransfer(b.colorSpace)!==It,b.matrixAutoUpdate===!0&&b.updateMatrix(),o.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||h!==n.toneMapping)&&(o.material.needsUpdate=!0,u=b,d=b.version,h=n.toneMapping),o.layers.enableAll(),y.unshift(o,o.geometry,o.material,0,0,null))}function x(y,T){y.getRGB(Or,Hu(n)),t.buffers.color.setClear(Or.r,Or.g,Or.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,T=1){a.set(y),l=T,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,x(a,l)},render:f,addToRenderList:v,dispose:p}}function U0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function l(F,V,te,B,j){let oe=!1;const re=d(F,B,te,V);r!==re&&(r=re,c(r.object)),oe=m(F,B,te,j),oe&&f(F,B,te,j),j!==null&&e.update(j,n.ELEMENT_ARRAY_BUFFER),(oe||a)&&(a=!1,b(F,V,te,B),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function o(){return n.createVertexArray()}function c(F){return n.bindVertexArray(F)}function u(F){return n.deleteVertexArray(F)}function d(F,V,te,B){const j=B.wireframe===!0;let oe=i[V.id];oe===void 0&&(oe={},i[V.id]=oe);const re=F.isInstancedMesh===!0?F.id:0;let Te=oe[re];Te===void 0&&(Te={},oe[re]=Te);let ie=Te[te.id];ie===void 0&&(ie={},Te[te.id]=ie);let Se=ie[j];return Se===void 0&&(Se=h(o()),ie[j]=Se),Se}function h(F){const V=[],te=[],B=[];for(let j=0;j<t;j++)V[j]=0,te[j]=0,B[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:te,attributeDivisors:B,object:F,attributes:{},index:null}}function m(F,V,te,B){const j=r.attributes,oe=V.attributes;let re=0;const Te=te.getAttributes();for(const ie in Te)if(Te[ie].location>=0){const me=j[ie];let De=oe[ie];if(De===void 0&&(ie==="instanceMatrix"&&F.instanceMatrix&&(De=F.instanceMatrix),ie==="instanceColor"&&F.instanceColor&&(De=F.instanceColor)),me===void 0||me.attribute!==De||De&&me.data!==De.data)return!0;re++}return r.attributesNum!==re||r.index!==B}function f(F,V,te,B){const j={},oe=V.attributes;let re=0;const Te=te.getAttributes();for(const ie in Te)if(Te[ie].location>=0){let me=oe[ie];me===void 0&&(ie==="instanceMatrix"&&F.instanceMatrix&&(me=F.instanceMatrix),ie==="instanceColor"&&F.instanceColor&&(me=F.instanceColor));const De={};De.attribute=me,me&&me.data&&(De.data=me.data),j[ie]=De,re++}r.attributes=j,r.attributesNum=re,r.index=B}function v(){const F=r.newAttributes;for(let V=0,te=F.length;V<te;V++)F[V]=0}function x(F){p(F,0)}function p(F,V){const te=r.newAttributes,B=r.enabledAttributes,j=r.attributeDivisors;te[F]=1,B[F]===0&&(n.enableVertexAttribArray(F),B[F]=1),j[F]!==V&&(n.vertexAttribDivisor(F,V),j[F]=V)}function y(){const F=r.newAttributes,V=r.enabledAttributes;for(let te=0,B=V.length;te<B;te++)V[te]!==F[te]&&(n.disableVertexAttribArray(te),V[te]=0)}function T(F,V,te,B,j,oe,re){re===!0?n.vertexAttribIPointer(F,V,te,j,oe):n.vertexAttribPointer(F,V,te,B,j,oe)}function b(F,V,te,B){v();const j=B.attributes,oe=te.getAttributes(),re=V.defaultAttributeValues;for(const Te in oe){const ie=oe[Te];if(ie.location>=0){let Se=j[Te];if(Se===void 0&&(Te==="instanceMatrix"&&F.instanceMatrix&&(Se=F.instanceMatrix),Te==="instanceColor"&&F.instanceColor&&(Se=F.instanceColor)),Se!==void 0){const me=Se.normalized,De=Se.itemSize,Ge=e.get(Se);if(Ge===void 0)continue;const xe=Ge.buffer,Ie=Ge.type,Be=Ge.bytesPerElement,qe=Ie===n.INT||Ie===n.UNSIGNED_INT||Se.gpuType===Ko;if(Se.isInterleavedBufferAttribute){const Ne=Se.data,Ke=Ne.isInterleavedBuffer===!0?Ne.stride:Ne.itemSize,ht=Se.offset;if(Ne.isInstancedInterleavedBuffer||Ne.isInstancedBufferAttribute){for(let ke=0;ke<ie.locationSize;ke++)p(ie.location+ke,Ne.meshPerAttribute);F.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let ke=0;ke<ie.locationSize;ke++)x(ie.location+ke);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let ke=0;ke<ie.locationSize;ke++)T(ie.location+ke,De/ie.locationSize,Ie,me,Ke*Be,(ht+De/ie.locationSize*ke)*Be,qe)}else{if(Se.isInstancedBufferAttribute){for(let Ne=0;Ne<ie.locationSize;Ne++)p(ie.location+Ne,Se.meshPerAttribute);F.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ne=0;Ne<ie.locationSize;Ne++)x(ie.location+Ne);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let Ne=0;Ne<ie.locationSize;Ne++)T(ie.location+Ne,De/ie.locationSize,Ie,me,De*Be,De/ie.locationSize*Ne*Be,qe)}}else if(re!==void 0){const me=re[Te];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(ie.location,me);break;case 3:n.vertexAttrib3fv(ie.location,me);break;case 4:n.vertexAttrib4fv(ie.location,me);break;default:n.vertexAttrib1fv(ie.location,me)}}}}y()}function A(){P();for(const F in i){const V=i[F];for(const te in V){const B=V[te];for(const j in B){const oe=B[j];for(const re in oe)u(oe[re].object),delete oe[re];delete B[j]}}delete i[F]}}function R(F){if(i[F.id]===void 0)return;const V=i[F.id];for(const te in V){const B=V[te];for(const j in B){const oe=B[j];for(const re in oe)u(oe[re].object),delete oe[re];delete B[j]}}delete i[F.id]}function M(F){for(const V in i){const te=i[V];for(const B in te){const j=te[B];if(j[F.id]===void 0)continue;const oe=j[F.id];for(const re in oe)u(oe[re].object),delete oe[re];delete j[F.id]}}}function C(F){for(const V in i){const te=i[V],B=F.isInstancedMesh===!0?F.id:0,j=te[B];if(j!==void 0){for(const oe in j){const re=j[oe];for(const Te in re)u(re[Te].object),delete re[Te];delete j[oe]}delete te[B],Object.keys(te).length===0&&delete i[V]}}}function P(){N(),a=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:P,resetDefaultState:N,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfObject:C,releaseStatesOfProgram:M,initAttributes:v,enableAttribute:x,disableUnusedAttributes:y}}function z0(n,e,t){let i;function s(o){i=o}function r(o,c){n.drawArrays(i,o,c),t.update(c,i,1)}function a(o,c,u){u!==0&&(n.drawArraysInstanced(i,o,c,u),t.update(c,i,u))}function l(o,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,o,0,c,0,u);let h=0;for(let m=0;m<u;m++)h+=c[m];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function F0(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(M){return!(M!==ni&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(M){const C=M===Kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==En&&M!==$n&&!C&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function o(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=o(c);u!==c&&(at("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&at("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&at("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:o,textureFormatReadable:a,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:f,maxTextureSize:v,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:b,maxSamples:A,samples:R}}function O0(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Li,l=new dt,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||s;return s=h,i=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,m){const f=d.clippingPlanes,v=d.clipIntersection,x=d.clipShadows,p=n.get(d);if(!s||f===null||f.length===0||r&&!x)r?u(null):c();else{const y=r?0:i,T=y*4;let b=p.clippingState||null;o.value=b,b=u(f,h,T,m);for(let A=0;A!==T;++A)b[A]=t[A];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){o.value!==t&&(o.value=t,o.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,m,f){const v=d!==null?d.length:0;let x=null;if(v!==0){if(x=o.value,f!==!0||x===null){const p=m+v*4,y=h.matrixWorldInverse;l.getNormalMatrix(y),(x===null||x.length<p)&&(x=new Float32Array(p));for(let T=0,b=m;T!==v;++T,b+=4)a.copy(d[T]).applyMatrix4(y,l),a.normal.toArray(x,b),x[b+3]=a.constant}o.value=x,o.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}class ul extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Uu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new kt(5,5,5),r=new zi({name:"CubemapFromEquirect",uniforms:Cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:Ss});r.uniforms.tEquirect.value=t;const a=new vt(s,r),l=t.minFilter;return t.minFilter===xi&&(t.minFilter=Tn),new Bo(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const Zl=256,k0=3,B0=20,Yu=256,Ku=16,H0=3,G0=new ee,V0=new ot;class cr{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Bo(1,10,null),this._boxMesh=new vt(new kt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:l=G0}=r,o=this._renderer;this._setSize(a);const c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const d=o.autoClear,h=o.autoClearColor,m=o.autoClearDepth,f=o.autoClearStencil,v=e.background;o.autoClear=!0,o.autoClearColor=!0,o.autoClearDepth=!0,o.autoClearStencil=!0,v===null&&(e.background=o.getClearColor(V0));const x=new Bo(i,s,u);return x.position.copy(l),x.update(o,e),o.autoClear=d,o.autoClearColor=h,o.autoClearDepth=m,o.autoClearStencil=f,e.background=v,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Zl,jf(e))}_fromTexture(e,t){e.mapping===Es||e.mapping===sr?this._setSize(e.image.length===0?Zl:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,t=jl(e,!1,!1),i=Math.log2(e)-k0;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=jl(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){const s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Es||e.mapping===sr?(this._cubemapMaterial===null&&(this._cubemapMaterial=ec()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ql()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=W0(),this._integrationMaterial=X0());const t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Ku);for(let a=0;a<=i;a++){const l=cr.lodToRoughness(a,i);if(a>i-H0)r.roughness.value=l,this._renderCube(e,a,this._integrationMaterial);else{const o=l>0?Math.log2(t)+.5*Math.log2(6/(Yu*Math.pow(l,4)))+.5:0;s.roughness.value=l,s.lodBias.value=o,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=q0());const i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}}function jl(n,e,t){return new ul(n,{minFilter:xi,generateMipmaps:e,type:Kn,colorSpace:aa,depthBuffer:t})}function pr(n,e,t){return new zi({name:n,uniforms:e,vertexShader:gt.cube_vert,fragmentShader:t,side:Sn,blending:Ss,depthTest:!1,depthWrite:!1})}function W0(){return pr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Yu}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function X0(){return pr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ku}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function q0(){return pr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${B0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Ql(){return pr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function ec(){return pr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function $0(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,m=!1){return h==null?null:m?a(h):r(h)}function r(h){if(h&&h.isTexture){const m=h.mapping;if(m===ma||m===ga)if(e.has(h)){const f=e.get(h).texture;return l(f,h.mapping)}else{const f=h.image;if(f&&f.height>0){const v=new ul(f.height);return v.fromEquirectangularTexture(n,h),e.set(h,v),h.addEventListener("dispose",c),l(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){const m=h.mapping,f=m===ma||m===ga,v=m===Es||m===sr;if(f||v){let x=t.get(h);const p=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new cr(n)),x=f?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),x.texture;if(x!==void 0)return x.texture;{const y=h.image;return f&&y&&y.height>0||v&&y&&o(y)?(i===null&&(i=new cr(n)),x=f?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),h.addEventListener("dispose",u),x.texture):null}}}return h}function l(h,m){return m===ma?h.mapping=Es:m===ga&&(h.mapping=sr),h}function o(h){let m=0;const f=6;for(let v=0;v<f;v++)h[v]!==void 0&&m++;return m===f}function c(h){const m=h.target;m.removeEventListener("dispose",c);const f=e.get(m);f!==void 0&&(e.delete(m),f.dispose())}function u(h){const m=h.target;m.removeEventListener("dispose",u);const f=t.get(m);f!==void 0&&(t.delete(m),f.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Y0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Qr("WebGLRenderer: "+i+" extension not supported."),s}}}function K0(n,e,t,i){const s={},r=new WeakMap,a=new FinalizationRegistry(f=>delete s[f]);function l(f){o(f.target)}function o(f){f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",l),delete s[f.id],a.unregister(f);const v=r.get(f);v&&(e.remove(v),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function c(f,v){return s[v.id]!==void 0||(v.addEventListener("dispose",l),s[v.id]=new WeakRef(v),a.register(v,v.id,v),t.memory.geometries++),v}function u(f){const v=f.attributes;for(const x in v)e.update(v[x],n.ARRAY_BUFFER)}function d(f){const v=f.index,x=f.attributes.position;let p=0;if(x===void 0)return;const y=v!==null?v.array.length:x.array.length/3-1,T=x.count>=65535?Iu:Du,b=new T(Math.ceil(y/3)*6,1),A=b.array;if(v!==null){const M=v.array;p=v.version;for(let C=0,P=0;C<y;C+=3){const N=M[C+0],F=M[C+1],V=M[C+2];A[P++]=N,A[P++]=F,A[P++]=F,A[P++]=V,A[P++]=V,A[P++]=N}}else{p=x.version;for(let M=0,C=0;M<y;M+=3){const P=M+0,N=M+1,F=M+2;A[C++]=P,A[C++]=N,A[C++]=N,A[C++]=F,A[C++]=F,A[C++]=P}}b.version=p;const R=r.get(f);R&&e.remove(R),r.set(f,b)}function h(f){const v=r.get(f);if(v){const x=f.index;x!==null&&v.version<x.version&&d(f)}else d(f);return r.get(f)}function m(){for(const f in s){const v=s[f].deref();v!==void 0&&o(v)}}return{get:c,update:u,getWireframeAttribute:h,dispose:m}}function J0(n,e,t){let i;function s(d){i=d}let r,a;function l(d){r=d.type,a=d.bytesPerElement}function o(d,h){n.drawElements(i,h,r,d*a),t.update(h,i,1)}function c(d,h,m){m!==0&&(n.drawElementsInstanced(i,h,r,d*a,m),t.update(h,i,m))}function u(d,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,m);let v=0;for(let x=0;x<m;x++)v+=h[x];t.update(v,i,1)}this.setMode=s,this.setIndex=l,this.render=o,this.renderInstances=c,this.renderMultiDraw=u}function Z0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,l){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=l*(r/3);break;case n.LINES:t.lines+=l*(r/2);break;case n.LINE_STRIP:t.lines+=l*(r-1);break;case n.LINE_LOOP:t.lines+=l*r;break;case n.POINTS:t.points+=l*r;break;default:Pt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function j0(n,e,t){const i=new WeakMap,s=new qt;function r(a,l,o){const c=a.morphTargetInfluences,u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(l);if(h===void 0||h.count!==d){let P=function(){M.dispose(),i.delete(l),l.removeEventListener("dispose",P)};h!==void 0&&h.texture.dispose();const m=l.morphAttributes.position!==void 0,f=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,x=l.morphAttributes.position||[],p=l.morphAttributes.normal||[],y=l.morphAttributes.color||[];let T=0;m===!0&&(T=1),f===!0&&(T=2),v===!0&&(T=3);let b=l.attributes.position.count*T,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const R=new Float32Array(b*A*4*d),M=new Ru(R,b,A,d);M.type=$n,M.needsUpdate=!0;const C=T*4;for(let N=0;N<d;N++){const F=x[N],V=p[N],te=y[N],B=b*A*4*N;for(let j=0;j<F.count;j++){const oe=j*C;m===!0&&(s.fromBufferAttribute(F,j),R[B+oe+0]=s.x,R[B+oe+1]=s.y,R[B+oe+2]=s.z,R[B+oe+3]=0),f===!0&&(s.fromBufferAttribute(V,j),R[B+oe+4]=s.x,R[B+oe+5]=s.y,R[B+oe+6]=s.z,R[B+oe+7]=0),v===!0&&(s.fromBufferAttribute(te,j),R[B+oe+8]=s.x,R[B+oe+9]=s.y,R[B+oe+10]=s.z,R[B+oe+11]=te.itemSize===4?s.w:1)}}h={count:d,texture:M,size:new it(b,A)},i.set(l,h),l.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)o.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];const f=l.morphTargetsRelative?1:1-m;o.getUniforms().setValue(n,"morphTargetBaseInfluence",f),o.getUniforms().setValue(n,"morphTargetInfluences",c)}o.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),o.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function Q0(n,e,t,i,s){let r=new WeakMap;function a(c){const u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return h}function l(){r=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:l}}const em={[uu]:"LINEAR_TONE_MAPPING",[fu]:"REINHARD_TONE_MAPPING",[du]:"CINEON_TONE_MAPPING",[hu]:"ACES_FILMIC_TONE_MAPPING",[mu]:"AGX_TONE_MAPPING",[gu]:"NEUTRAL_TONE_MAPPING",[pu]:"CUSTOM_TONE_MAPPING"};function tm(n,e,t,i,s,r){const a=new An(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let l=null,o=null,c=null;const u=new rn;u.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new pt([0,2,0,0,2,0],2));const d=new Vd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new vt(u,d),m=new Xu(-1,1,1,-1,0,1);let f=null,v=null,x=!1,p,y=null,T=[],b=!1;this.setSize=function(A,R){a.setSize(A,R),l!==null&&l.setSize(A,R),o!==null&&o.setSize(A,R);for(let M=0;M<T.length;M++){const C=T[M];C.setSize&&C.setSize(A,R)}},this.setEffects=function(A){T=A,b=T.length>0&&T[0].isRenderPass===!0;const R=a.width,M=a.height;T.length>0&&l===null&&(l=new An(R,M,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),o=new An(R,M,{type:Kn,depthBuffer:!1,stencilBuffer:!1}));const C=s===!0&&T.some(P=>P.needsDepthTexture===!0);C!==(a.depthTexture!==null)&&(C===!0&&c===null&&(c=new Rs(R,M),r===!0&&(c.format=Ii,c.type=Ts)),a.dispose(),a.depthTexture=C?c:null,a.resolveDepthBuffer=C,a.storeMultisampledDepthBuffer=C);for(let P=0;P<T.length;P++){const N=T[P];N.setSize&&N.setSize(R,M),C&&N.needsDepthTexture===!0&&N.setDepthTexture&&N.setDepthTexture(c)}},this.begin=function(A,R){if(x||A.toneMapping===ri&&T.length===0)return!1;if(y=R,R!==null){const M=R.width,C=R.height;(a.width!==M||a.height!==C)&&this.setSize(M,C)}return b===!1&&A.setRenderTarget(a),p=A.toneMapping,A.toneMapping=ri,!0},this.hasRenderPass=function(){return b},this.end=function(A,R){A.toneMapping=p,x=!0;let M=a,C=l;for(let P=0;P<T.length;P++){const N=T[P];N.enabled!==!1&&(N.render(A,C,M,R),N.needsSwap!==!1&&(M=C,C=C===l?o:l))}if(f!==A.outputColorSpace||v!==A.toneMapping){f=A.outputColorSpace,v=A.toneMapping,d.defines={},wt.getTransfer(f)===It&&(d.defines.SRGB_TRANSFER="");const P=em[v];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=M.texture,A.setRenderTarget(y),A.render(h,m),y=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),o!==null&&o.dispose(),u.dispose(),d.dispose()}}const Ju=new xn,Zu=new Rs(1,1),ju=new zu(1),Qu=new Ru,ef=new ad,tf=new Uu,tc=[],nc=[],ic=new Float32Array(16),sc=new Float32Array(9),rc=new Float32Array(4);function Ls(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=tc[s];if(r===void 0&&(r=new Float32Array(s),tc[s]=r),e!==0){i.toArray(r,0);for(let a=1,l=0;a!==e;++a)l+=t,n[a].toArray(r,l)}return r}function Qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function en(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ha(n,e){let t=nc[e];t===void 0&&(t=new Int32Array(e),nc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function nm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function im(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2fv(this.addr,e),en(t,e)}}function sm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;n.uniform3fv(this.addr,e),en(t,e)}}function rm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4fv(this.addr,e),en(t,e)}}function am(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;rc.set(i),n.uniformMatrix2fv(this.addr,!1,rc),en(t,i)}}function om(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;sc.set(i),n.uniformMatrix3fv(this.addr,!1,sc),en(t,i)}}function lm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;ic.set(i),n.uniformMatrix4fv(this.addr,!1,ic),en(t,i)}}function cm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function um(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2iv(this.addr,e),en(t,e)}}function fm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;n.uniform3iv(this.addr,e),en(t,e)}}function dm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4iv(this.addr,e),en(t,e)}}function hm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function pm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2uiv(this.addr,e),en(t,e)}}function mm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;n.uniform3uiv(this.addr,e),en(t,e)}}function gm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4uiv(this.addr,e),en(t,e)}}function pa(n){return n.version===0&&(n.compareFunction=Tu,n.needsUpdate=!0),n}function xm(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=pa(Zu):r=Ju,t.setTexture2D(e||r,s)}function vm(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ef,s)}function _m(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=pa(ju):r=tf,t.setTextureCube(e||r,s)}function ym(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Qu,s)}function Mm(n){switch(n){case 5126:return nm;case 35664:return im;case 35665:return sm;case 35666:return rm;case 35674:return am;case 35675:return om;case 35676:return lm;case 5124:case 35670:return cm;case 35667:case 35671:return um;case 35668:case 35672:return fm;case 35669:case 35673:return dm;case 5125:return hm;case 36294:return pm;case 36295:return mm;case 36296:return gm;case 35678:case 36198:case 36298:case 36306:case 35682:return xm;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return _m;case 36289:case 36303:case 36311:case 36292:return ym}}function bm(n,e){n.uniform1fv(this.addr,e)}function Sm(n,e){const t=Ls(e,this.size,2);n.uniform2fv(this.addr,t)}function wm(n,e){const t=Ls(e,this.size,3);n.uniform3fv(this.addr,t)}function Em(n,e){const t=Ls(e,this.size,4);n.uniform4fv(this.addr,t)}function Tm(n,e){const t=Ls(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Am(n,e){const t=Ls(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Rm(n,e){const t=Ls(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Cm(n,e){n.uniform1iv(this.addr,e)}function Pm(n,e){n.uniform2iv(this.addr,e)}function Lm(n,e){n.uniform3iv(this.addr,e)}function Dm(n,e){n.uniform4iv(this.addr,e)}function Im(n,e){n.uniform1uiv(this.addr,e)}function Nm(n,e){n.uniform2uiv(this.addr,e)}function Um(n,e){n.uniform3uiv(this.addr,e)}function zm(n,e){n.uniform4uiv(this.addr,e)}function Fm(n,e,t){const i=this.cache,s=e.length,r=ha(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=pa(Zu):a=Ju;for(let l=0;l!==s;++l)t.setTexture2D(e[l]||a,r[l])}function Om(n,e,t){const i=this.cache,s=e.length,r=ha(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ef,r[a])}function km(n,e,t){const i=this.cache,s=e.length,r=ha(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=pa(ju):a=tf;for(let l=0;l!==s;++l)t.setTextureCube(e[l]||a,r[l])}function Bm(n,e,t){const i=this.cache,s=e.length,r=ha(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Qu,r[a])}function Hm(n){switch(n){case 5126:return bm;case 35664:return Sm;case 35665:return wm;case 35666:return Em;case 35674:return Tm;case 35675:return Am;case 35676:return Rm;case 5124:case 35670:return Cm;case 35667:case 35671:return Pm;case 35668:case 35672:return Lm;case 35669:case 35673:return Dm;case 5125:return Im;case 36294:return Nm;case 36295:return Um;case 36296:return zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Fm;case 35679:case 36299:case 36307:return Om;case 35680:case 36300:case 36308:case 36293:return km;case 36289:case 36303:case 36311:case 36292:return Bm}}class Gm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Mm(t.type)}}class Vm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hm(t.type)}}class Wm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const l=s[r];l.setValue(e,t[l.id],i)}}}const Xa=/(\w+)(\])?(\[|\.)?/g;function ac(n,e){n.seq.push(e),n.map[e.id]=e}function Xm(n,e,t){const i=n.name,s=i.length;for(Xa.lastIndex=0;;){const r=Xa.exec(i),a=Xa.lastIndex;let l=r[1];const o=r[2]==="]",c=r[3];if(o&&(l=l|0),c===void 0||c==="["&&a+2===s){ac(t,c===void 0?new Gm(l,n,e):new Vm(l,n,e));break}else{let d=t.map[l];d===void 0&&(d=new Wm(l),ac(t,d)),t=d}}}class ta{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const l=e.getActiveUniform(t,a),o=e.getUniformLocation(t,l.name);Xm(l,o,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const l=t[r],o=i[l.id];o.needsUpdate!==!1&&l.setValue(e,o.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function oc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const qm=37297;let $m=0;function Ym(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const l=a+1;i.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return i.join(`
`)}const lc=new dt;function Km(n){wt._getMatrix(lc,wt.workingColorSpace,n);const e=`mat3( ${lc.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(n)){case oa:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function cc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Ym(n.getShaderSource(e),l)}else return r}function Jm(n,e){const t=Km(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Zm={[uu]:"Linear",[fu]:"Reinhard",[du]:"Cineon",[hu]:"ACESFilmic",[mu]:"AgX",[gu]:"Neutral",[pu]:"Custom"};function jm(n,e){const t=Zm[e];return t===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const kr=new ee;function Qm(){wt.getLuminanceCoefficients(kr);const n=kr.x.toFixed(4),e=kr.y.toFixed(4),t=kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function tg(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ng(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let l=1;r.type===n.FLOAT_MAT2&&(l=2),r.type===n.FLOAT_MAT3&&(l=3),r.type===n.FLOAT_MAT4&&(l=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:l}}return t}function Ks(n){return n!==""}function uc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function fc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ig=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ho(n){return n.replace(ig,sg)}function sg(n,e){const t=gt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ho(t)}const rg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dc(n){return n.replace(rg,ag)}function ag(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const og={[Zs]:"SHADOWMAP_TYPE_PCF",[Ys]:"SHADOWMAP_TYPE_VSM"};function lg(n){return og[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const cg={[sr]:"ENVMAP_MODE_REFRACTION"};function ug(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":cg[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const fg={[Yo]:"ENVMAP_BLENDING_MULTIPLY",[Uf]:"ENVMAP_BLENDING_MIX",[zf]:"ENVMAP_BLENDING_ADD"};function dg(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":fg[n.combine]||"ENVMAP_BLENDING_NONE"}function hg(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,l=t.fragmentShader;const o=lg(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=ug(t),d=dg(t),h=eg(t),m=tg(r),f=s.createProgram();let v,x,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ks).join(`
`),v.length>0&&(v+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ks).join(`
`),x.length>0&&(x+=`
`)):(v=[hc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),x=[hc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?gt.tonemapping_pars_fragment:"",t.toneMapping!==ri?jm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,Jm("linearToOutputTexel",t.outputColorSpace),Qm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ks).join(`
`)),a=Ho(a),a=uc(a,t),a=fc(a,t),l=Ho(l),l=uc(l,t),l=fc(l,t),a=dc(a),l=dc(l),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,v=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,x=["#define varying in",t.glslVersion===Ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=p+v+a,T=p+x+l,b=oc(s,s.VERTEX_SHADER,y),A=oc(s,s.FRAGMENT_SHADER,T);s.attachShader(f,b),s.attachShader(f,A),t.index0AttributeName!==void 0?s.bindAttribLocation(f,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function R(N){if(n.debug.checkShaderErrors){const F=s.getProgramInfoLog(f)||"",V=s.getShaderInfoLog(b)||"",te=s.getShaderInfoLog(A)||"",B=F.trim(),j=V.trim(),oe=te.trim();let re=!0,Te=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(re=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,f,b,A);else{const ie=cc(s,b,"vertex"),Se=cc(s,A,"fragment");Pt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+B+`
`+ie+`
`+Se)}else B!==""?at("WebGLProgram: Program Info Log:",B):(j===""||oe==="")&&(Te=!1);Te&&(N.diagnostics={runnable:re,programLog:B,vertexShader:{log:j,prefix:v},fragmentShader:{log:oe,prefix:x}})}s.deleteShader(b),s.deleteShader(A),M=new ta(s,f),C=ng(s,f)}let M;this.getUniforms=function(){return M===void 0&&R(this),M};let C;this.getAttributes=function(){return C===void 0&&R(this),C};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(f,qm)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$m++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=b,this.fragmentShader=A,this}let pg=0;class mg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new gg(e),t.set(e,i)),i}}class gg{constructor(e){this.id=pg++,this.code=e,this.usedTimes=0}}function xg(n){return n===Qi||n===ia||n===sa}function vg(n,e,t,i,s,r){const a=new Cu,l=new mg,o=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return o.add(M),M===0?"uv":`uv${M}`}function f(M,C,P,N,F,V){const te=N.fog,B=F.geometry,j=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?N.environment:null,oe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,re=e.get(M.envMap||j,oe),Te=h[M.type];let ie=i.precision;M.precision!==null&&(ie=i.getMaxPrecision(M.precision),ie!==M.precision&&at("WebGLProgram.getParameters:",M.precision,"not supported, using",ie,"instead."));const Se=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,me=Se!==void 0?Se.length:0;let De=0;B.morphAttributes.position!==void 0&&(De=1),B.morphAttributes.normal!==void 0&&(De=2),B.morphAttributes.color!==void 0&&(De=3);let Ge,xe,Ie,Be;if(Te){const G=Qn[Te];Ge=G.vertexShader,xe=G.fragmentShader}else{Ge=M.vertexShader,xe=M.fragmentShader;const G=l.getVertexShaderStage(M),g=l.getFragmentShaderStage(M);l.update(M,G,g),Ie=G.id,Be=g.id}const qe=n.getRenderTarget(),Ne=n.state.buffers.depth.getReversed(),Ke=F.isInstancedMesh===!0,ht=F.isBatchedMesh===!0,ke=!!M.map,tt=!!M.matcap,st=!!re,Qe=st&&re.isPMREMTexture===!0,_t=!!M.aoMap,mt=!!M.lightMap,Et=!!M.bumpMap&&M.wireframe===!1,z=!!M.normalMap,le=!!M.displacementMap,Y=!!M.emissiveMap,ae=!!M.metalnessMap,fe=!!M.roughnessMap,Ue=M.anisotropy>0,S=M.clearcoat>0,k=M.diffuseRoughness>0,q=M.dispersion>0,pe=M.retroreflectivity>0,Z=M.iridescence>0,Fe=M.sheen>0,we=M.transmission>0,Le=Ue&&!!M.anisotropyMap,I=S&&!!M.clearcoatMap,w=S&&!!M.clearcoatNormalMap,ne=S&&!!M.clearcoatRoughnessMap,Me=k&&!!M.diffuseRoughnessMap,$=Z&&!!M.iridescenceMap,Ce=Z&&!!M.iridescenceThicknessMap,Re=Fe&&!!M.sheenColorMap,ce=Fe&&!!M.sheenRoughnessMap,ge=!!M.specularMap,Pe=!!M.specularColorMap,W=!!M.specularIntensityMap,Ee=we&&!!M.transmissionMap,ye=we&&!!M.thicknessMap,Oe=!!M.gradientMap,ze=!!M.alphaMap,He=M.alphaTest>0,et=!!M.alphaHash,lt=!!M.extensions;let _=ri;M.toneMapped&&(qe===null||qe.isXRRenderTarget===!0)&&(_=n.toneMapping);const E=Qe?re.isCompressedCubeTexture?re.image[0].mipmaps:re.mipmaps:null,X={shaderID:Te,shaderType:M.type,shaderName:M.name,vertexShader:Ge,fragmentShader:xe,defines:M.defines,customVertexShaderID:Ie,customFragmentShaderID:Be,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:ie,batching:ht,batchingColor:ht&&F._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&F.instanceColor!==null,instancingMorph:Ke&&F.morphTexture!==null,outputColorSpace:qe===null?n.outputColorSpace:qe.isXRRenderTarget===!0?qe.texture.colorSpace:wt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:ke,matcap:tt,envMap:st,envMapMode:st&&re.mapping,envMapPMREM:Qe,envMapMaxLod:Qe?E.length-1:null,envMapSize:Qe?E[0].width:null,aoMap:_t,lightMap:mt,bumpMap:Et,normalMap:z,displacementMap:le,emissiveMap:Y,normalMapObjectSpace:z&&M.normalMapType===kf,normalMapTangentSpace:z&&M.normalMapType===ra,packedNormalMap:z&&M.normalMapType===ra&&xg(M.normalMap.format),metalnessMap:ae,roughnessMap:fe,anisotropy:Ue,anisotropyMap:Le,clearcoat:S,clearcoatMap:I,clearcoatNormalMap:w,clearcoatRoughnessMap:ne,diffuseRoughness:k,diffuseRoughnessMap:Me,dispersion:q,retroreflection:pe,iridescence:Z,iridescenceMap:$,iridescenceThicknessMap:Ce,sheen:Fe,sheenColorMap:Re,sheenRoughnessMap:ce,specularMap:ge,specularColorMap:Pe,specularIntensityMap:W,transmission:we,transmissionMap:Ee,thicknessMap:ye,gradientMap:Oe,opaque:M.transparent===!1&&M.blending===js&&M.alphaToCoverage===!1,alphaMap:ze,alphaTest:He,alphaHash:et,combine:M.combine,mapUv:ke&&m(M.map.channel),aoMapUv:_t&&m(M.aoMap.channel),lightMapUv:mt&&m(M.lightMap.channel),bumpMapUv:Et&&m(M.bumpMap.channel),normalMapUv:z&&m(M.normalMap.channel),displacementMapUv:le&&m(M.displacementMap.channel),emissiveMapUv:Y&&m(M.emissiveMap.channel),metalnessMapUv:ae&&m(M.metalnessMap.channel),roughnessMapUv:fe&&m(M.roughnessMap.channel),anisotropyMapUv:Le&&m(M.anisotropyMap.channel),clearcoatMapUv:I&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:w&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&m(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Me&&m(M.diffuseRoughnessMap.channel),iridescenceMapUv:$&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:ce&&m(M.sheenRoughnessMap.channel),specularMapUv:ge&&m(M.specularMap.channel),specularColorMapUv:Pe&&m(M.specularColorMap.channel),specularIntensityMapUv:W&&m(M.specularIntensityMap.channel),transmissionMapUv:Ee&&m(M.transmissionMap.channel),thicknessMapUv:ye&&m(M.thicknessMap.channel),alphaMapUv:ze&&m(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(z||Ue),vertexNormals:!!B.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!B.attributes.uv&&(ke||ze),fog:!!te,useFog:M.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||B.attributes.normal===void 0&&z===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ne,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:De,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:V.filter(G=>G.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:_,decodeVideoTexture:ke&&M.map.isVideoTexture===!0&&wt.getTransfer(M.map.colorSpace)===It,decodeVideoTextureEmissive:Y&&M.emissiveMap.isVideoTexture===!0&&wt.getTransfer(M.emissiveMap.colorSpace)===It,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===pi,flipSided:M.side===Sn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:lt&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&M.extensions.multiDraw===!0||ht)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return X.vertexUv1s=o.has(1),X.vertexUv2s=o.has(2),X.vertexUv3s=o.has(3),o.clear(),X}function v(M){const C=[];if(M.shaderID?C.push(M.shaderID):(C.push(M.customVertexShaderID),C.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)C.push(P),C.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(x(C,M),p(C,M),C.push(n.outputColorSpace)),C.push(M.customProgramCacheKey),C.join()}function x(M,C){M.push(C.precision),M.push(C.outputColorSpace),M.push(C.envMapMode),M.push(C.envMapPMREM),M.push(C.envMapMaxLod),M.push(C.envMapSize),M.push(C.mapUv),M.push(C.alphaMapUv),M.push(C.lightMapUv),M.push(C.aoMapUv),M.push(C.bumpMapUv),M.push(C.normalMapUv),M.push(C.displacementMapUv),M.push(C.emissiveMapUv),M.push(C.metalnessMapUv),M.push(C.roughnessMapUv),M.push(C.anisotropyMapUv),M.push(C.clearcoatMapUv),M.push(C.clearcoatNormalMapUv),M.push(C.clearcoatRoughnessMapUv),M.push(C.diffuseRoughnessMapUv),M.push(C.iridescenceMapUv),M.push(C.iridescenceThicknessMapUv),M.push(C.sheenColorMapUv),M.push(C.sheenRoughnessMapUv),M.push(C.specularMapUv),M.push(C.specularColorMapUv),M.push(C.specularIntensityMapUv),M.push(C.transmissionMapUv),M.push(C.thicknessMapUv),M.push(C.combine),M.push(C.fogExp2),M.push(C.sizeAttenuation),M.push(C.morphTargetsCount),M.push(C.numSunLights),M.push(C.numDirLights),M.push(C.numPointLights),M.push(C.numSpotLights),M.push(C.numSpotLightMaps),M.push(C.numHemiLights),M.push(C.numRectAreaLights),M.push(C.numSunLightShadows),M.push(C.numDirLightShadows),M.push(C.numPointLightShadows),M.push(C.numSpotLightShadows),M.push(C.numSpotLightShadowsWithMaps),M.push(C.numLightProbes),M.push(C.numLightProbeGrids),M.push(C.shadowMapType),M.push(C.toneMapping),M.push(C.numClippingPlanes),M.push(C.numClipIntersection),M.push(C.depthPacking)}function p(M,C){a.disableAll(),C.instancing&&a.enable(0),C.instancingColor&&a.enable(1),C.instancingMorph&&a.enable(2),C.matcap&&a.enable(3),C.envMap&&a.enable(4),C.normalMapObjectSpace&&a.enable(5),C.normalMapTangentSpace&&a.enable(6),C.clearcoat&&a.enable(7),C.iridescence&&a.enable(8),C.alphaTest&&a.enable(9),C.vertexColors&&a.enable(10),C.vertexAlphas&&a.enable(11),C.vertexUv1s&&a.enable(12),C.vertexUv2s&&a.enable(13),C.vertexUv3s&&a.enable(14),C.vertexTangents&&a.enable(15),C.anisotropy&&a.enable(16),C.alphaHash&&a.enable(17),C.batching&&a.enable(18),C.dispersion&&a.enable(19),C.retroreflection&&a.enable(24),C.diffuseRoughness&&a.enable(25),C.batchingColor&&a.enable(20),C.gradientMap&&a.enable(21),C.packedNormalMap&&a.enable(22),C.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),C.numLightProbeGrids>0&&a.enable(22),C.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function y(M){const C=h[M.type];let P;if(C){const N=Qn[C];P=Bd.clone(N.uniforms)}else P=M.uniforms;return P}function T(M,C){let P=u.get(C);return P!==void 0?++P.usedTimes:(P=new hg(n,C,M,s),c.push(P),u.set(C,P)),P}function b(M){if(--M.usedTimes===0){const C=c.indexOf(M);c[C]=c[c.length-1],c.pop(),u.delete(M.cacheKey),M.destroy()}}function A(M){l.remove(M)}function R(){l.dispose()}return{getParameters:f,getProgramCacheKey:v,getUniforms:y,acquireProgram:T,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:R}}function _g(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let l=n.get(a);return l===void 0&&(l={},n.set(a,l)),l}function i(a){n.delete(a)}function s(a,l,o){n.get(a)[l]=o}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function yg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function pc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function mc(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function l(h,m,f,v,x,p){let y=n[e];return y===void 0?(y={id:h.id,object:h,geometry:m,material:f,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:x,group:p},n[e]=y):(y.id=h.id,y.object=h,y.geometry=m,y.material=f,y.materialVariant=a(h),y.groupOrder=v,y.renderOrder=h.renderOrder,y.z=x,y.group=p),e++,y}function o(h,m,f,v,x,p,y){y.reversedDepth===!0&&(x=-x);const T=l(h,m,f,v,x,p);f.transmission>0?i.push(T):f.transparent===!0?s.push(T):t.push(T)}function c(h,m,f,v,x,p){const y=l(h,m,f,v,x,p);f.transmission>0?i.unshift(y):f.transparent===!0?s.unshift(y):t.unshift(y)}function u(h,m){t.length>1&&t.sort(h||yg),i.length>1&&i.sort(m||pc),s.length>1&&s.sort(m||pc)}function d(){for(let h=e,m=n.length;h<m;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:d,sort:u}}function Mg(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new mc,n.set(i,[a])):s>=r.length?(a=new mc,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function bg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new ee,color:new ot};break;case"SpotLight":t={position:new ee,direction:new ee,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ee,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ee,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return n[e.id]=t,t}}}function Sg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let wg=0;function Eg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Tg(n){const e=new bg,t=Sg(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new ee);const s=new ee,r=new Lt,a=new Lt;function l(c){let u=0,d=0,h=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let m=0,f=0,v=0,x=0,p=0,y=0,T=0,b=0,A=0,R=0,M=0,C=0,P=0,N=0;c.sort(Eg);for(let V=0,te=c.length;V<te;V++){const B=c[V],j=B.color,oe=B.intensity,re=B.distance;let Te=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Qi?Te=B.shadow.map.texture:Te=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)u+=j.r*oe,d+=j.g*oe,h+=j.b*oe;else if(B.isLightProbe){for(let ie=0;ie<9;ie++)i.probe[ie].addScaledVector(B.sh.coefficients[ie],oe);N++}else if(B.isSunLight){const ie=e.get(B);if(ie.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const Se=B.shadow,me=t.get(B);me.shadowIntensity=Se.intensity,me.shadowBias=Se.bias,me.shadowNormalBias=Se.normalBias,me.shadowRadius=Se.radius,me.shadowMapSize.copy(Se.mapSize).multiply(Se.getFrameExtents()),i.sunShadow[f]=me,i.sunShadowMap[f]=Te;const De=Se.getViewportCount();for(let Ge=0;Ge<De;Ge++)i.sunShadowMatrix[v+Ge]=Se.getMatrix(Ge),i.sunShadowCascade[v+Ge]=Se._cascadeData[Ge];v+=De,f++}i.sun[m]=ie,m++}else if(B.isDirectionalLight){const ie=e.get(B);if(ie.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const Se=B.shadow,me=t.get(B);me.shadowIntensity=Se.intensity,me.shadowBias=Se.bias,me.shadowNormalBias=Se.normalBias,me.shadowRadius=Se.radius,me.shadowMapSize=Se.mapSize,i.directionalShadow[x]=me,i.directionalShadowMap[x]=Te,i.directionalShadowMatrix[x]=B.shadow.matrix,A++}i.directional[x]=ie,x++}else if(B.isSpotLight){const ie=e.get(B);ie.position.setFromMatrixPosition(B.matrixWorld),ie.color.copy(j).multiplyScalar(oe),ie.distance=re,ie.coneCos=Math.cos(B.angle),ie.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ie.decay=B.decay,i.spot[y]=ie;const Se=B.shadow;if(B.map&&(i.spotLightMap[C]=B.map,C++,Se.updateMatrices(B),B.castShadow&&P++),i.spotLightMatrix[y]=Se.matrix,B.castShadow){const me=t.get(B);me.shadowIntensity=Se.intensity,me.shadowBias=Se.bias,me.shadowNormalBias=Se.normalBias,me.shadowRadius=Se.radius,me.shadowMapSize=Se.mapSize,i.spotShadow[y]=me,i.spotShadowMap[y]=Te,M++}y++}else if(B.isRectAreaLight){const ie=e.get(B);ie.color.copy(j).multiplyScalar(oe),ie.halfWidth.set(B.width*.5,0,0),ie.halfHeight.set(0,B.height*.5,0),i.rectArea[T]=ie,T++}else if(B.isPointLight){const ie=e.get(B);if(ie.color.copy(B.color).multiplyScalar(B.intensity),ie.distance=B.distance,ie.decay=B.decay,B.castShadow){const Se=B.shadow,me=t.get(B);me.shadowIntensity=Se.intensity,me.shadowBias=Se.bias,me.shadowNormalBias=Se.normalBias,me.shadowRadius=Se.radius,me.shadowMapSize=Se.mapSize,me.shadowCameraNear=Se.camera.near,me.shadowCameraFar=Se.camera.far,i.pointShadow[p]=me,i.pointShadowMap[p]=Te,i.pointShadowMatrix[p]=B.shadow.matrix,R++}i.point[p]=ie,p++}else if(B.isHemisphereLight){const ie=e.get(B);ie.skyColor.copy(B.color).multiplyScalar(oe),ie.groundColor.copy(B.groundColor).multiplyScalar(oe),i.hemi[b]=ie,b++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=$e.LTC_FLOAT_1,i.rectAreaLTC2=$e.LTC_FLOAT_2):(i.rectAreaLTC1=$e.LTC_HALF_1,i.rectAreaLTC2=$e.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const F=i.hash;(F.sunLength!==m||F.directionalLength!==x||F.pointLength!==p||F.spotLength!==y||F.rectAreaLength!==T||F.hemiLength!==b||F.numSunShadows!==f||F.numDirectionalShadows!==A||F.numPointShadows!==R||F.numSpotShadows!==M||F.numSpotMaps!==C||F.numLightProbes!==N)&&(i.sun.length=m,i.directional.length=x,i.spot.length=y,i.rectArea.length=T,i.point.length=p,i.hemi.length=b,i.sunShadow.length=f,i.sunShadowMap.length=f,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=R,i.pointShadowMap.length=R,i.pointShadowMatrix.length=R,i.spotShadow.length=M,i.spotShadowMap.length=M,i.spotLightMatrix.length=M+C-P,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=N,F.sunLength=m,F.directionalLength=x,F.pointLength=p,F.spotLength=y,F.rectAreaLength=T,F.hemiLength=b,F.numSunShadows=f,F.numDirectionalShadows=A,F.numPointShadows=R,F.numSpotShadows=M,F.numSpotMaps=C,F.numLightProbes=N,i.version=wg++)}function o(c,u){let d=0,h=0,m=0,f=0,v=0,x=0;const p=u.matrixWorldInverse;for(let y=0,T=c.length;y<T;y++){const b=c[y];if(b.isSunLight){const A=i.sun[d];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(p),d++}else if(b.isDirectionalLight){const A=i.directional[h];A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),h++}else if(b.isSpotLight){const A=i.spot[f];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),f++}else if(b.isRectAreaLight){const A=i.rectArea[v];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){const A=i.point[m];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),m++}else if(b.isHemisphereLight){const A=i.hemi[x];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(p),x++}}}return{setup:l,setupView:o,state:i}}function gc(n){const e=new Tg(n),t=[],i=[],s=[];function r(d){u.camera=d,t.length=0,i.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):t.push(d)}function l(d){i.push(d)}function o(){e.setup(t),s.sort((d,h)=>d.priority-h.priority||d.id-h.id)}function c(d){e.setupView(t,d)}const u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:l}}function Ag(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let l;return a===void 0?(l=new gc(n),e.set(s,[l])):r>=a.length?(l=new gc(n),a.push(l)):l=a[r],l}function i(){e=new WeakMap}return{get:t,dispose:i}}const Rg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Pg=[new ee(1,0,0),new ee(-1,0,0),new ee(0,1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1)],Lg=[new ee(0,-1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1),new ee(0,-1,0),new ee(0,-1,0)],xc=new Lt,Os=new ee,qa=new ee;function Dg(n,e,t){let i=new lr;const s=new it,r=new it,a=new qt,l=new Xd,o=new qd,c={},u=t.maxTextureSize,d={[ji]:Sn,[Sn]:ji,[pi]:pi},h=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:Rg,fragmentShader:Cg}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const f=new rn;f.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new vt(f,h),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zs;let p=this.type;this.render=function(R,M,C){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||R.length===0)return;this.type===gf&&(at("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Zs);const P=n.getRenderTarget(),N=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Ss),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const te=p!==this.type;te&&M.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(j=>j.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,j=R.length;B<j;B++){const oe=R[B],re=oe.shadow;if(re===void 0){at("WebGLShadowMap:",oe,"has no shadow.");continue}if(re.autoUpdate===!1&&re.needsUpdate===!1)continue;s.copy(re.mapSize);const Te=re.getFrameExtents();s.multiply(Te),r.copy(re.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Te.x),s.x=r.x*Te.x,re.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Te.y),s.y=r.y*Te.y,re.mapSize.y=r.y));const ie=n.state.buffers.depth.getReversed();if(re.camera._reversedDepth=ie,re.map===null||te===!0){if(re.map!==null&&(re.map.depthTexture!==null&&(re.map.depthTexture.dispose(),re.map.depthTexture=null),re.map.dispose()),this.type===Ys){if(oe.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}re.map=new An(s.x,s.y,{format:Qi,type:Kn,minFilter:Tn,magFilter:Tn,generateMipmaps:!1}),re.map.texture.name=oe.name+".shadowMap",re.map.depthTexture=new Rs(s.x,s.y,$n),re.map.depthTexture.name=oe.name+".shadowMapDepth",re.map.depthTexture.format=Ui,re.map.depthTexture.compareFunction=null,re.map.depthTexture.minFilter=ln,re.map.depthTexture.magFilter=ln}else oe.isPointLight?(re.map=new ul(s.x),re.map.depthTexture=new zu(s.x,ai)):(re.map=new An(s.x,s.y),re.map.depthTexture=new Rs(s.x,s.y,ai)),re.map.depthTexture.name=oe.name+".shadowMap",re.map.depthTexture.format=Ui,this.type===Zs?(re.map.depthTexture.compareFunction=ie?Eu:wu,re.map.depthTexture.minFilter=Tn,re.map.depthTexture.magFilter=Tn):(re.map.depthTexture.compareFunction=null,re.map.depthTexture.minFilter=ln,re.map.depthTexture.magFilter=ln);re.camera.updateProjectionMatrix()}re.map.isWebGLCubeRenderTarget!==!0&&(re.map.width!==s.x||re.map.height!==s.y)&&re.map.setSize(s.x,s.y);const Se=re.map.isWebGLCubeRenderTarget?6:re.getViewportCount();oe.isPointLight!==!0&&re.updateMatrices(oe,C);const me=(re.camera.layers.mask&4294967294)!==0?re.camera.layers:C.layers;for(let De=0;De<Se;De++){const Ge=re.getCamera(De);if(oe.isPointLight){const xe=re.camera,Ie=re.matrix,Be=oe.distance||xe.far;Be!==xe.far&&(xe.far=Be,xe.updateProjectionMatrix()),Os.setFromMatrixPosition(oe.matrixWorld),xe.position.copy(Os),qa.copy(xe.position),qa.add(Pg[De]),xe.up.copy(Lg[De]),xe.lookAt(qa),xe.updateMatrixWorld(),Ie.makeTranslation(-Os.x,-Os.y,-Os.z),xc.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),re._frustum.setFromProjectionMatrix(xc,xe.coordinateSystem,xe.reversedDepth)}if(re.map.isWebGLCubeRenderTarget)n.setRenderTarget(re.map,De),n.clear();else{De===0&&(n.setRenderTarget(re.map),n.clear());const xe=re.getViewport(De);a.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),V.viewport(a)}i=re.getFrustum(De),b(M,C,Ge,oe,me,this.type)}re.isPointLightShadow!==!0&&this.type===Ys&&y(re,C),re.needsUpdate=!1}p=this.type,x.needsUpdate=!1,n.setRenderTarget(P,N,F)};function y(R,M){const C=e.update(v);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null?R.mapPass=new An(s.x,s.y,{format:Qi,type:Kn}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),h.uniforms.shadow_pass.value=R.map.depthTexture,h.uniforms.resolution.value.set(R.map.width,R.map.height),h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(M,null,C,h,v,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value.set(R.map.width,R.map.height),m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(M,null,C,m,v,null)}function T(R,M,C,P){let N=null;const F=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(F!==void 0)N=F;else if(N=C.isPointLight===!0?o:l,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const V=N.uuid,te=M.uuid;let B=c[V];B===void 0&&(B={},c[V]=B);let j=B[te];j===void 0&&(j=N.clone(),B[te]=j,M.addEventListener("dispose",A)),N=j}if(N.visible=M.visible,N.wireframe=M.wireframe,P===Ys?N.side=M.shadowSide!==null?M.shadowSide:M.side:N.side=M.shadowSide!==null?M.shadowSide:d[M.side],N.alphaMap=M.alphaMap,N.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,N.map=M.map,N.clipShadows=M.clipShadows,N.clippingPlanes=M.clippingPlanes,N.clipIntersection=M.clipIntersection,N.displacementMap=M.displacementMap,N.displacementScale=M.displacementScale,N.displacementBias=M.displacementBias,N.wireframeLinewidth=M.wireframeLinewidth,N.linewidth=M.linewidth,C.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const V=n.properties.get(N);V.light=C}return N}function b(R,M,C,P,N,F){if(R.visible===!1)return;if(R.layers.test(N)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&F===Ys)&&(!R.frustumCulled||R.intersectsFrustum(i))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);const B=e.update(R),j=R.material;if(Array.isArray(j)){const oe=B.groups;for(let re=0,Te=oe.length;re<Te;re++){const ie=oe[re],Se=j[ie.materialIndex];if(Se&&Se.visible){const me=T(R,Se,P,F);R.onBeforeShadow(n,R,M,C,B,me,ie),n.renderBufferDirect(C,null,B,me,R,ie),R.onAfterShadow(n,R,M,C,B,me,ie)}}}else if(j.visible){const oe=T(R,j,P,F);R.onBeforeShadow(n,R,M,C,B,oe,null),n.renderBufferDirect(C,null,B,oe,R,null),R.onAfterShadow(n,R,M,C,B,oe,null)}}const te=R.children;for(let B=0,j=te.length;B<j;B++)b(te[B],M,C,P,N,F)}function A(R){R.target.removeEventListener("dispose",A);for(const C in c){const P=c[C],N=R.target.uuid;N in P&&(P[N].dispose(),delete P[N])}}}function Ig(n,e){function t(){let W=!1;const Ee=new qt;let ye=null;const Oe=new qt(0,0,0,0);return{setMask:function(ze){ye!==ze&&!W&&(n.colorMask(ze,ze,ze,ze),ye=ze)},setLocked:function(ze){W=ze},setClear:function(ze,He,et,lt,_){_===!0&&(ze*=lt,He*=lt,et*=lt),Ee.set(ze,He,et,lt),Oe.equals(Ee)===!1&&(n.clearColor(ze,He,et,lt),Oe.copy(Ee))},reset:function(){W=!1,ye=null,Oe.set(-1,0,0,0)}}}function i(){let W=!1,Ee=!1,ye=null,Oe=null,ze=null;return{setReversed:function(He){if(Ee!==He){const et=e.get("EXT_clip_control");He?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT),Ee=He;const lt=ze;ze=null,this.setClear(lt)}},getReversed:function(){return Ee},setTest:function(He){He?Ne(n.DEPTH_TEST):Ke(n.DEPTH_TEST)},setMask:function(He){ye!==He&&!W&&(n.depthMask(He),ye=He)},setFunc:function(He){if(Ee&&(He=Jf[He]),Oe!==He){switch(He){case to:n.depthFunc(n.NEVER);break;case no:n.depthFunc(n.ALWAYS);break;case io:n.depthFunc(n.LESS);break;case ir:n.depthFunc(n.LEQUAL);break;case so:n.depthFunc(n.EQUAL);break;case ro:n.depthFunc(n.GEQUAL);break;case ao:n.depthFunc(n.GREATER);break;case oo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Oe=He}},setLocked:function(He){W=He},setClear:function(He){ze!==He&&(ze=He,Ee&&(He=1-He),n.clearDepth(He))},reset:function(){W=!1,ye=null,Oe=null,ze=null,Ee=!1}}}function s(){let W=!1,Ee=null,ye=null,Oe=null,ze=null,He=null,et=null,lt=null,_=null;return{setTest:function(E){W||(E?Ne(n.STENCIL_TEST):Ke(n.STENCIL_TEST))},setMask:function(E){Ee!==E&&!W&&(n.stencilMask(E),Ee=E)},setFunc:function(E,X,G){(ye!==E||Oe!==X||ze!==G)&&(n.stencilFunc(E,X,G),ye=E,Oe=X,ze=G)},setOp:function(E,X,G){(He!==E||et!==X||lt!==G)&&(n.stencilOp(E,X,G),He=E,et=X,lt=G)},setLocked:function(E){W=E},setClear:function(E){_!==E&&(n.clearStencil(E),_=E)},reset:function(){W=!1,Ee=null,ye=null,Oe=null,ze=null,He=null,et=null,lt=null,_=null}}}const r=new t,a=new i,l=new s;let o={};const c=new WeakMap;let u={},d={},h={},m=new WeakMap,f=[],v=null,x=!1,p=null,y=null,T=null,b=null,A=null,R=null,M=null,C=new ot(0,0,0),P=0,N=!1,F=null,V=null,te=null,B=null,j=null;const oe=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,Te=0;const ie=n.getParameter(n.VERSION);ie.indexOf("WebGL")!==-1?(Te=parseFloat(/^WebGL (\d)/.exec(ie)[1]),re=Te>=1):ie.indexOf("OpenGL ES")!==-1&&(Te=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),re=Te>=2);let Se=null,me={};const De=n.getParameter(n.SCISSOR_BOX),Ge=n.getParameter(n.VIEWPORT),xe=new qt().fromArray(De),Ie=new qt().fromArray(Ge);function Be(W,Ee,ye,Oe){const ze=new Uint8Array(4),He=n.createTexture();n.bindTexture(W,He),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let et=0;et<ye;et++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(Ee,0,n.RGBA,1,1,Oe,0,n.RGBA,n.UNSIGNED_BYTE,ze):n.texImage2D(Ee+et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ze);return He}const qe={};qe[n.TEXTURE_2D]=Be(n.TEXTURE_2D,n.TEXTURE_2D,1),qe[n.TEXTURE_CUBE_MAP]=Be(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),qe[n.TEXTURE_2D_ARRAY]=Be(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),qe[n.TEXTURE_3D]=Be(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),Ne(n.DEPTH_TEST),a.setFunc(ir),Et(!1),z(xl),Ne(n.CULL_FACE),_t(Ss);function Ne(W){u[W]!==!0&&(n.enable(W),u[W]=!0)}function Ke(W){u[W]!==!1&&(n.disable(W),u[W]=!1)}function ht(W,Ee){return h[W]!==Ee?(n.bindFramebuffer(W,Ee),h[W]=Ee,W===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Ee),W===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Ee),!0):!1}function ke(W,Ee){let ye=f,Oe=!1;if(W){ye=m.get(Ee),ye===void 0&&(ye=[],m.set(Ee,ye));const ze=W.textures;if(ye.length!==ze.length||ye[0]!==n.COLOR_ATTACHMENT0){for(let He=0,et=ze.length;He<et;He++)ye[He]=n.COLOR_ATTACHMENT0+He;ye.length=ze.length,Oe=!0}}else ye[0]!==n.BACK&&(ye[0]=n.BACK,Oe=!0);Oe&&n.drawBuffers(ye)}function tt(W){return v!==W?(n.useProgram(W),v=W,!0):!1}const st={[vs]:n.FUNC_ADD,[vf]:n.FUNC_SUBTRACT,[_f]:n.FUNC_REVERSE_SUBTRACT};st[yf]=n.MIN,st[Mf]=n.MAX;const Qe={[bf]:n.ZERO,[Sf]:n.ONE,[wf]:n.SRC_COLOR,[lu]:n.SRC_ALPHA,[Pf]:n.SRC_ALPHA_SATURATE,[Rf]:n.DST_COLOR,[Tf]:n.DST_ALPHA,[Ef]:n.ONE_MINUS_SRC_COLOR,[cu]:n.ONE_MINUS_SRC_ALPHA,[Cf]:n.ONE_MINUS_DST_COLOR,[Af]:n.ONE_MINUS_DST_ALPHA,[Lf]:n.CONSTANT_COLOR,[Df]:n.ONE_MINUS_CONSTANT_COLOR,[If]:n.CONSTANT_ALPHA,[Nf]:n.ONE_MINUS_CONSTANT_ALPHA};function _t(W,Ee,ye,Oe,ze,He,et,lt,_,E){if(W===Ss){x===!0&&(Ke(n.BLEND),x=!1);return}if(x===!1&&(Ne(n.BLEND),x=!0),W!==xf){if(W!==p||E!==N){if((y!==vs||A!==vs)&&(n.blendEquation(n.FUNC_ADD),y=vs,A=vs),E)switch(W){case js:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vl:n.blendFunc(n.ONE,n.ONE);break;case _l:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Pt("WebGLState: Invalid blending: ",W);break}else switch(W){case js:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case _l:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yl:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",W);break}T=null,b=null,R=null,M=null,C.set(0,0,0),P=0,p=W,N=E}return}ze=ze||Ee,He=He||ye,et=et||Oe,(Ee!==y||ze!==A)&&(n.blendEquationSeparate(st[Ee],st[ze]),y=Ee,A=ze),(ye!==T||Oe!==b||He!==R||et!==M)&&(n.blendFuncSeparate(Qe[ye],Qe[Oe],Qe[He],Qe[et]),T=ye,b=Oe,R=He,M=et),(lt.equals(C)===!1||_!==P)&&(n.blendColor(lt.r,lt.g,lt.b,_),C.copy(lt),P=_),p=W,N=!1}function mt(W,Ee){W.side===pi?Ke(n.CULL_FACE):Ne(n.CULL_FACE);let ye=W.side===Sn;Ee&&(ye=!ye),Et(ye),W.blending===js&&W.transparent===!1?_t(Ss):_t(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),a.setFunc(W.depthFunc),a.setTest(W.depthTest),a.setMask(W.depthWrite),r.setMask(W.colorWrite);const Oe=W.stencilWrite;l.setTest(Oe),Oe&&(l.setMask(W.stencilWriteMask),l.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),l.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Y(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Ne(n.SAMPLE_ALPHA_TO_COVERAGE):Ke(n.SAMPLE_ALPHA_TO_COVERAGE)}function Et(W){F!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),F=W)}function z(W){W!==pf?(Ne(n.CULL_FACE),W!==V&&(W===xl?n.cullFace(n.BACK):W===mf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ke(n.CULL_FACE),V=W}function le(W){W!==te&&(re&&n.lineWidth(W),te=W)}function Y(W,Ee,ye){W?(Ne(n.POLYGON_OFFSET_FILL),(B!==Ee||j!==ye)&&(B=Ee,j=ye,a.getReversed()&&(Ee=-Ee,ye=-ye),n.polygonOffset(Ee,ye))):Ke(n.POLYGON_OFFSET_FILL)}function ae(W){W?Ne(n.SCISSOR_TEST):Ke(n.SCISSOR_TEST)}function fe(W){W===void 0&&(W=n.TEXTURE0+oe-1),Se!==W&&(n.activeTexture(W),Se=W)}function Ue(W,Ee,ye){ye===void 0&&(Se===null?ye=n.TEXTURE0+oe-1:ye=Se);let Oe=me[ye];Oe===void 0&&(Oe={type:void 0,texture:void 0},me[ye]=Oe),(Oe.type!==W||Oe.texture!==Ee)&&(Se!==ye&&(n.activeTexture(ye),Se=ye),n.bindTexture(W,Ee||qe[W]),Oe.type=W,Oe.texture=Ee)}function S(){const W=me[Se];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function k(){try{n.compressedTexImage2D(...arguments)}catch(W){Pt("WebGLState:",W)}}function q(){try{n.compressedTexImage3D(...arguments)}catch(W){Pt("WebGLState:",W)}}function pe(){try{n.texSubImage2D(...arguments)}catch(W){Pt("WebGLState:",W)}}function Z(){try{n.texSubImage3D(...arguments)}catch(W){Pt("WebGLState:",W)}}function Fe(){try{n.compressedTexSubImage2D(...arguments)}catch(W){Pt("WebGLState:",W)}}function we(){try{n.compressedTexSubImage3D(...arguments)}catch(W){Pt("WebGLState:",W)}}function Le(){try{n.texStorage2D(...arguments)}catch(W){Pt("WebGLState:",W)}}function I(){try{n.texStorage3D(...arguments)}catch(W){Pt("WebGLState:",W)}}function w(){try{n.texImage2D(...arguments)}catch(W){Pt("WebGLState:",W)}}function ne(){try{n.texImage3D(...arguments)}catch(W){Pt("WebGLState:",W)}}function Me(W){return d[W]!==void 0?d[W]:n.getParameter(W)}function $(W,Ee){d[W]!==Ee&&(n.pixelStorei(W,Ee),d[W]=Ee)}function Ce(W){xe.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),xe.copy(W))}function Re(W){Ie.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),Ie.copy(W))}function ce(W,Ee){let ye=c.get(Ee);ye===void 0&&(ye=new WeakMap,c.set(Ee,ye));let Oe=ye.get(W);Oe===void 0&&(Oe=n.getUniformBlockIndex(Ee,W.name),n.uniformBlockBinding(Ee,Oe,Oe),ye.set(W,Oe))}function ge(W,Ee,ye){const ze=c.get(Ee).get(W);o[ze]!==ye&&(n.bindBufferBase(n.UNIFORM_BUFFER,ze,ye),o[ze]=ye)}function Pe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},Se=null,me={},h={},o={},m=new WeakMap,f=[],v=null,x=!1,p=null,y=null,T=null,b=null,A=null,R=null,M=null,C=new ot(0,0,0),P=0,N=!1,F=null,V=null,te=null,B=null,j=null,xe.set(0,0,n.canvas.width,n.canvas.height),Ie.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:Ne,disable:Ke,bindFramebuffer:ht,drawBuffers:ke,useProgram:tt,setBlending:_t,setMaterial:mt,setFlipSided:Et,setCullFace:z,setLineWidth:le,setPolygonOffset:Y,setScissorTest:ae,activeTexture:fe,bindTexture:Ue,unbindTexture:S,compressedTexImage2D:k,compressedTexImage3D:q,texImage2D:w,texImage3D:ne,pixelStorei:$,getParameter:Me,updateUBOMapping:ce,uniformBlockBinding:ge,texStorage2D:Le,texStorage3D:I,texSubImage2D:pe,texSubImage3D:Z,compressedTexSubImage2D:Fe,compressedTexSubImage3D:we,scissor:Ce,viewport:Re,reset:Pe}}function Ng(n,e,t,i,s,r,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,u=new WeakMap,d=new Set;let h;const m=new WeakMap,f=new Set,v=new FinalizationRegistry(I=>f.delete(I));let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(I,w){return x?new OffscreenCanvas(I,w):la("canvas")}function y(I,w,ne){let Me=1;const $=Le(I);if(($.width>ne||$.height>ne)&&(Me=ne/Math.max($.width,$.height)),Me<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Ce=Math.floor(Me*$.width),Re=Math.floor(Me*$.height);h===void 0&&(h=p(Ce,Re));const ce=w?p(Ce,Re):h;return ce.width=Ce,ce.height=Re,ce.getContext("2d").drawImage(I,0,0,Ce,Re),at("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Ce+"x"+Re+")."),ce}else return"data"in I&&at("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),I;return I}function T(I){return I.generateMipmaps}function b(I){n.generateMipmap(I)}function A(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(I,w,ne,Me,$,Ce=!1){if(I!==null){if(n[I]!==void 0)return n[I];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Re;Me&&(Re=e.get("EXT_texture_norm16"),Re||at("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=w;if(w===n.RED&&(ne===n.FLOAT&&(ce=n.R32F),ne===n.HALF_FLOAT&&(ce=n.R16F),ne===n.UNSIGNED_BYTE&&(ce=n.R8),ne===n.UNSIGNED_SHORT&&Re&&(ce=Re.R16_EXT),ne===n.SHORT&&Re&&(ce=Re.R16_SNORM_EXT)),w===n.RED_INTEGER&&(ne===n.UNSIGNED_BYTE&&(ce=n.R8UI),ne===n.UNSIGNED_SHORT&&(ce=n.R16UI),ne===n.UNSIGNED_INT&&(ce=n.R32UI),ne===n.BYTE&&(ce=n.R8I),ne===n.SHORT&&(ce=n.R16I),ne===n.INT&&(ce=n.R32I)),w===n.RG&&(ne===n.FLOAT&&(ce=n.RG32F),ne===n.HALF_FLOAT&&(ce=n.RG16F),ne===n.UNSIGNED_BYTE&&(ce=n.RG8),ne===n.UNSIGNED_SHORT&&Re&&(ce=Re.RG16_EXT),ne===n.SHORT&&Re&&(ce=Re.RG16_SNORM_EXT)),w===n.RG_INTEGER&&(ne===n.UNSIGNED_BYTE&&(ce=n.RG8UI),ne===n.UNSIGNED_SHORT&&(ce=n.RG16UI),ne===n.UNSIGNED_INT&&(ce=n.RG32UI),ne===n.BYTE&&(ce=n.RG8I),ne===n.SHORT&&(ce=n.RG16I),ne===n.INT&&(ce=n.RG32I)),w===n.RGB_INTEGER&&(ne===n.UNSIGNED_BYTE&&(ce=n.RGB8UI),ne===n.UNSIGNED_SHORT&&(ce=n.RGB16UI),ne===n.UNSIGNED_INT&&(ce=n.RGB32UI),ne===n.BYTE&&(ce=n.RGB8I),ne===n.SHORT&&(ce=n.RGB16I),ne===n.INT&&(ce=n.RGB32I)),w===n.RGBA_INTEGER&&(ne===n.UNSIGNED_BYTE&&(ce=n.RGBA8UI),ne===n.UNSIGNED_SHORT&&(ce=n.RGBA16UI),ne===n.UNSIGNED_INT&&(ce=n.RGBA32UI),ne===n.BYTE&&(ce=n.RGBA8I),ne===n.SHORT&&(ce=n.RGBA16I),ne===n.INT&&(ce=n.RGBA32I)),w===n.RGB&&(ne===n.UNSIGNED_SHORT&&Re&&(ce=Re.RGB16_EXT),ne===n.SHORT&&Re&&(ce=Re.RGB16_SNORM_EXT),ne===n.UNSIGNED_INT_5_9_9_9_REV&&(ce=n.RGB9_E5),ne===n.UNSIGNED_INT_10F_11F_11F_REV&&(ce=n.R11F_G11F_B10F)),w===n.RGBA){const ge=Ce?oa:wt.getTransfer($);ne===n.FLOAT&&(ce=n.RGBA32F),ne===n.HALF_FLOAT&&(ce=n.RGBA16F),ne===n.UNSIGNED_BYTE&&(ce=ge===It?n.SRGB8_ALPHA8:n.RGBA8),ne===n.UNSIGNED_SHORT&&Re&&(ce=Re.RGBA16_EXT),ne===n.SHORT&&Re&&(ce=Re.RGBA16_SNORM_EXT),ne===n.UNSIGNED_SHORT_4_4_4_4&&(ce=n.RGBA4),ne===n.UNSIGNED_SHORT_5_5_5_1&&(ce=n.RGB5_A1)}return(ce===n.R16F||ce===n.R32F||ce===n.RG16F||ce===n.RG32F||ce===n.RGBA16F||ce===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function M(I,w){let ne;return I?w===null||w===ai||w===Ts?ne=n.DEPTH24_STENCIL8:w===$n?ne=n.DEPTH32F_STENCIL8:w===ar&&(ne=n.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ai||w===Ts?ne=n.DEPTH_COMPONENT24:w===$n?ne=n.DEPTH_COMPONENT32F:w===ar&&(ne=n.DEPTH_COMPONENT16),ne}function C(I,w){return T(I)===!0||I.isFramebufferTexture&&I.minFilter!==ln&&I.minFilter!==Tn?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function P(I){const w=new WeakRef(I);i.get(I).__ref=w,f.add(w),v.register(I,w,w)}function N(I){const w=i.get(I).__ref;w!==void 0&&(f.delete(w),v.unregister(w))}function F(I){te(I.target)}function V(I){B(I.target)}function te(I){I.removeEventListener("dispose",F),N(I),oe(I),I.isVideoTexture&&u.delete(I),I.isHTMLTexture&&d.delete(I)}function B(I){I.removeEventListener("dispose",V),N(I),Te(I)}function j(){for(const I of f){const w=I.deref();w!==void 0&&(w.isRenderTarget===!0?B(w):te(w))}f.clear(),d.clear()}function oe(I){const w=i.get(I);if(w.__webglInit===void 0)return;const ne=I.source,Me=m.get(ne);if(Me){const $=Me[w.__cacheKey];$.usedTimes--,$.usedTimes===0&&re(I),Object.keys(Me).length===0&&m.delete(ne)}i.remove(I)}function re(I){const w=i.get(I);n.deleteTexture(w.__webglTexture);const ne=I.source,Me=m.get(ne);delete Me[w.__cacheKey],a.memory.textures--}function Te(I){const w=i.get(I);w.__depthDisposeCallback&&w.__depthDisposeCallback();const ne=I.depthTexture;if(ne&&ne.renderTarget===I&&te(ne),I.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(w.__webglFramebuffer[$]))for(let Ce=0;Ce<w.__webglFramebuffer[$].length;Ce++)n.deleteFramebuffer(w.__webglFramebuffer[$][Ce]);else n.deleteFramebuffer(w.__webglFramebuffer[$]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[$])}else{if(Array.isArray(w.__webglFramebuffer))for(let $=0;$<w.__webglFramebuffer.length;$++)n.deleteFramebuffer(w.__webglFramebuffer[$]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let $=0;$<w.__webglColorRenderbuffer.length;$++)w.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[$]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Me=I.textures;for(let $=0,Ce=Me.length;$<Ce;$++){const Re=i.get(Me[$]);Re.__webglTexture&&(n.deleteTexture(Re.__webglTexture),a.memory.textures--),i.remove(Me[$])}i.remove(I)}let ie=0;function Se(){ie=0}function me(){return ie}function De(I){ie=I}function Ge(){const I=ie;return I>=s.maxTextures&&at("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),ie+=1,I}function xe(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.mipmapsAutoUpdate),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function Ie(I,w){const ne=i.get(I);if(I.isVideoTexture&&Fe(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&ne.__version!==I.version){const Me=I.image;if(Me===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(Me.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{mt(ne,I,w);return}}else I.isExternalTexture&&(ne.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture,n.TEXTURE0+w)}function Be(I,w){const ne=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&ne.__version!==I.version){mt(ne,I,w);return}else I.isExternalTexture&&(ne.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,ne.__webglTexture,n.TEXTURE0+w)}function qe(I,w){const ne=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&ne.__version!==I.version){mt(ne,I,w);return}t.bindTexture(n.TEXTURE_3D,ne.__webglTexture,n.TEXTURE0+w)}function Ne(I,w){const ne=i.get(I);if(I.version>0&&ne.__version!==I.version){Et(ne,I,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture,n.TEXTURE0+w)}const Ke={[rr]:n.REPEAT,[gi]:n.CLAMP_TO_EDGE,[lo]:n.MIRRORED_REPEAT},ht={[ln]:n.NEAREST,[Ff]:n.NEAREST_MIPMAP_NEAREST,[xr]:n.NEAREST_MIPMAP_LINEAR,[Tn]:n.LINEAR,[xa]:n.LINEAR_MIPMAP_NEAREST,[xi]:n.LINEAR_MIPMAP_LINEAR},ke={[Hf]:n.NEVER,[Tu]:n.ALWAYS,[Gf]:n.LESS,[wu]:n.LEQUAL,[Vf]:n.EQUAL,[Eu]:n.GEQUAL,[Wf]:n.GREATER,[Xf]:n.NOTEQUAL};function tt(I,w){if(w.type===$n&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Tn||w.magFilter===xa||w.magFilter===xr||w.magFilter===xi||w.minFilter===Tn||w.minFilter===xa||w.minFilter===xr||w.minFilter===xi)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,Ke[w.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,Ke[w.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,Ke[w.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,ht[w.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,ht[w.minFilter]),w.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,ke[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ln||w.minFilter!==xr&&w.minFilter!==xi||w.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function st(I,w){let ne=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",F),P(w));const Me=w.source;let $=m.get(Me);$===void 0&&($={},m.set(Me,$));const Ce=xe(w);if(Ce!==I.__cacheKey){$[Ce]===void 0&&($[Ce]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,ne=!0),$[Ce].usedTimes++;const Re=$[I.__cacheKey];Re!==void 0&&($[I.__cacheKey].usedTimes--,Re.usedTimes===0&&re(w)),I.__cacheKey=Ce,I.__webglTexture=$[Ce].texture}return ne}function Qe(I,w,ne){return Math.floor(Math.floor(I/ne)/w)}function _t(I,w,ne,Me){const Ce=I.updateRanges;if(Ce.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,ne,Me,w.data);else{Ce.sort((W,Ee)=>W.start-Ee.start);let Re=0;for(let W=1;W<Ce.length;W++){const Ee=Ce[Re],ye=Ce[W],Oe=Ee.start+Ee.count,ze=Qe(ye.start,w.width,4),He=Qe(Ee.start,w.width,4);ye.start<=Oe+1&&ze===He&&Qe(ye.start+ye.count-1,w.width,4)===ze?Ee.count=Math.max(Ee.count,ye.start+ye.count-Ee.start):(++Re,Ce[Re]=ye)}Ce.length=Re+1;const ce=t.getParameter(n.UNPACK_ROW_LENGTH),ge=t.getParameter(n.UNPACK_SKIP_PIXELS),Pe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let W=0,Ee=Ce.length;W<Ee;W++){const ye=Ce[W],Oe=Math.floor(ye.start/4),ze=Math.ceil(ye.count/4),He=Oe%w.width,et=Math.floor(Oe/w.width),lt=ze,_=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,He),t.pixelStorei(n.UNPACK_SKIP_ROWS,et),t.texSubImage2D(n.TEXTURE_2D,0,He,et,lt,_,ne,Me,w.data)}I.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ce),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(n.UNPACK_SKIP_ROWS,Pe)}}function mt(I,w,ne){let Me=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Me=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Me=n.TEXTURE_3D);const $=st(I,w),Ce=w.source;t.bindTexture(Me,I.__webglTexture,n.TEXTURE0+ne);const Re=i.get(Ce);if(Ce.version!==Re.__version||$===!0){if(t.activeTexture(n.TEXTURE0+ne),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const _=wt.getPrimaries(wt.workingColorSpace),E=w.colorSpace===mi?null:wt.getPrimaries(w.colorSpace),X=w.colorSpace===mi||_===E?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,X)}t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment);let ge=y(w.image,!1,s.maxTextureSize);ge=we(w,ge);const Pe=r.convert(w.format,w.colorSpace),W=r.convert(w.type);let Ee=R(w.internalFormat,Pe,W,w.normalized,w.colorSpace,w.isVideoTexture);tt(Me,w);let ye;const Oe=w.mipmaps,ze=w.isVideoTexture!==!0,He=Re.__version===void 0||$===!0,et=Ce.dataReady,lt=C(w,ge);if(w.isDepthTexture)Ee=M(w.format===Ii,w.type),He&&(ze?t.texStorage2D(n.TEXTURE_2D,1,Ee,ge.width,ge.height):t.texImage2D(n.TEXTURE_2D,0,Ee,ge.width,ge.height,0,Pe,W,null));else if(w.isDataTexture)if(Oe.length>0){ze&&He&&t.texStorage2D(n.TEXTURE_2D,lt,Ee,Oe[0].width,Oe[0].height);for(let _=0,E=Oe.length;_<E;_++)ye=Oe[_],ze?et&&t.texSubImage2D(n.TEXTURE_2D,_,0,0,ye.width,ye.height,Pe,W,ye.data):t.texImage2D(n.TEXTURE_2D,_,Ee,ye.width,ye.height,0,Pe,W,ye.data);w.generateMipmaps=!1}else ze?(He&&t.texStorage2D(n.TEXTURE_2D,lt,Ee,ge.width,ge.height),et&&_t(w,ge,Pe,W)):t.texImage2D(n.TEXTURE_2D,0,Ee,ge.width,ge.height,0,Pe,W,ge.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ze&&He&&t.texStorage3D(n.TEXTURE_2D_ARRAY,lt,Ee,Oe[0].width,Oe[0].height,ge.depth);for(let _=0,E=Oe.length;_<E;_++)if(ye=Oe[_],w.format!==ni)if(Pe!==null)if(ze){if(et)if(w.layerUpdates.size>0){const X=Jl(ye.width,ye.height,w.format,w.type);for(const G of w.layerUpdates){const g=ye.data.subarray(G*X/ye.data.BYTES_PER_ELEMENT,(G+1)*X/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_,0,0,G,ye.width,ye.height,1,Pe,g)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_,0,0,0,ye.width,ye.height,ge.depth,Pe,ye.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_,Ee,ye.width,ye.height,ge.depth,0,ye.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?et&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,_,0,0,0,ye.width,ye.height,ge.depth,Pe,W,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,_,Ee,ye.width,ye.height,ge.depth,0,Pe,W,ye.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{ze&&He&&t.texStorage2D(n.TEXTURE_2D,lt,Ee,Oe[0].width,Oe[0].height);for(let _=0,E=Oe.length;_<E;_++)ye=Oe[_],w.format!==ni?Pe!==null?ze?et&&t.compressedTexSubImage2D(n.TEXTURE_2D,_,0,0,ye.width,ye.height,Pe,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,_,Ee,ye.width,ye.height,0,ye.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?et&&t.texSubImage2D(n.TEXTURE_2D,_,0,0,ye.width,ye.height,Pe,W,ye.data):t.texImage2D(n.TEXTURE_2D,_,Ee,ye.width,ye.height,0,Pe,W,ye.data)}else if(w.isDataArrayTexture)if(ze){if(He&&t.texStorage3D(n.TEXTURE_2D_ARRAY,lt,Ee,ge.width,ge.height,ge.depth),et)if(w.layerUpdates.size>0){const _=Jl(ge.width,ge.height,w.format,w.type);for(const E of w.layerUpdates){const X=ge.data.subarray(E*_/ge.data.BYTES_PER_ELEMENT,(E+1)*_/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,E,ge.width,ge.height,1,Pe,W,X)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Pe,W,ge.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,ge.width,ge.height,ge.depth,0,Pe,W,ge.data);else if(w.isData3DTexture)ze?(He&&t.texStorage3D(n.TEXTURE_3D,lt,Ee,ge.width,ge.height,ge.depth),et&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Pe,W,ge.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,ge.width,ge.height,ge.depth,0,Pe,W,ge.data);else if(w.isFramebufferTexture){if(He)if(ze)t.texStorage2D(n.TEXTURE_2D,lt,Ee,ge.width,ge.height);else{let _=ge.width,E=ge.height;for(let X=0;X<lt;X++)t.texImage2D(n.TEXTURE_2D,X,Ee,_,E,0,Pe,W,null),_>>=1,E>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in n){const _=n.canvas;if(_.hasAttribute("layoutsubtree")||_.setAttribute("layoutsubtree","true"),ge.parentNode!==_){_.appendChild(ge),d.add(w),_.onpaint=E=>{const X=E.changedElements;for(const G of d)X.includes(G.image)&&(G.needsUpdate=!0)},_.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ge);else{const X=n.RGBA,G=n.RGBA,g=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,X,G,g,ge)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(ze&&He){const _=Le(Oe[0]);t.texStorage2D(n.TEXTURE_2D,lt,Ee,_.width,_.height)}for(let _=0,E=Oe.length;_<E;_++)ye=Oe[_],ze?et&&t.texSubImage2D(n.TEXTURE_2D,_,0,0,Pe,W,ye):t.texImage2D(n.TEXTURE_2D,_,Ee,Pe,W,ye);w.generateMipmaps=!1}else if(ze){if(He){const _=Le(ge);t.texStorage2D(n.TEXTURE_2D,lt,Ee,_.width,_.height)}et&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,W,ge)}else t.texImage2D(n.TEXTURE_2D,0,Ee,Pe,W,ge);T(w)&&w.mipmapsAutoUpdate===!0&&b(Me),Re.__version=Ce.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Et(I,w,ne){if(w.image.length!==6)return;const Me=st(I,w),$=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+ne);const Ce=i.get($);if($.version!==Ce.__version||Me===!0){t.activeTexture(n.TEXTURE0+ne);const Re=wt.getPrimaries(wt.workingColorSpace),ce=w.colorSpace===mi?null:wt.getPrimaries(w.colorSpace),ge=w.colorSpace===mi||Re===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Pe=w.isCompressedTexture||w.image[0].isCompressedTexture,W=w.image[0]&&w.image[0].isDataTexture,Ee=[];for(let G=0;G<6;G++)!Pe&&!W?Ee[G]=y(w.image[G],!0,s.maxCubemapSize):Ee[G]=W?w.image[G].image:w.image[G],Ee[G]=we(w,Ee[G]);const ye=Ee[0],Oe=r.convert(w.format,w.colorSpace),ze=r.convert(w.type);let He=R(w.internalFormat,Oe,ze,w.normalized,w.colorSpace);const et=w.isVideoTexture!==!0,lt=Ce.__version===void 0||Me===!0,_=$.dataReady;let E=C(w,ye);tt(n.TEXTURE_CUBE_MAP,w);let X;if(w.isDepthTexture){if(He=M(w.format===Ii,w.type),lt)if(et)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,He,ye.width,ye.height);else for(let G=0;G<6;G++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,He,ye.width,ye.height,0,Oe,ze,null)}else if(Pe){et&&lt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,E,He,ye.width,ye.height);for(let G=0;G<6;G++){X=Ee[G].mipmaps;for(let g=0;g<X.length;g++){const O=X[g];w.format!==ni?Oe!==null?et?_&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,g,0,0,O.width,O.height,Oe,O.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,g,He,O.width,O.height,0,O.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?_&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,g,0,0,O.width,O.height,Oe,ze,O.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,g,He,O.width,O.height,0,Oe,ze,O.data)}}}else{if(X=w.mipmaps,et&&lt){X.length>0&&E++;const G=Le(Ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,E,He,G.width,G.height)}for(let G=0;G<6;G++)if(W){et?_&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,Ee[G].width,Ee[G].height,Oe,ze,Ee[G].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,He,Ee[G].width,Ee[G].height,0,Oe,ze,Ee[G].data);for(let g=0;g<X.length;g++){const U=X[g].image[G].image;et?_&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,g+1,0,0,U.width,U.height,Oe,ze,U.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,g+1,He,U.width,U.height,0,Oe,ze,U.data)}}else{et?_&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,Oe,ze,Ee[G]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,He,Oe,ze,Ee[G]);for(let g=0;g<X.length;g++){const O=X[g];et?_&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,g+1,0,0,Oe,ze,O.image[G]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,g+1,He,Oe,ze,O.image[G])}}}T(w)&&w.mipmapsAutoUpdate===!0&&b(n.TEXTURE_CUBE_MAP),Ce.__version=$.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function z(I,w,ne,Me,$,Ce){const Re=r.convert(ne.format,ne.colorSpace),ce=r.convert(ne.type),ge=R(ne.internalFormat,Re,ce,ne.normalized,ne.colorSpace),Pe=i.get(w),W=i.get(ne);if(W.__renderTarget=w,!Pe.__hasExternalTextures){const Ee=Math.max(1,w.width>>Ce),ye=Math.max(1,w.height>>Ce);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,Ce,ge,Ee,ye,w.depth,0,Re,ce,null):t.texImage2D($,Ce,ge,Ee,ye,0,Re,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),Z(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Me,$,W.__webglTexture,0,pe(w)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Me,$,W.__webglTexture,Ce),t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(I,w,ne){if(n.bindRenderbuffer(n.RENDERBUFFER,I),w.depthBuffer){const Me=w.depthTexture,$=Me&&Me.isDepthTexture?Me.type:null,Ce=M(w.stencilBuffer,$),Re=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Z(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe(w),Ce,w.width,w.height):ne?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe(w),Ce,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Ce,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Re,n.RENDERBUFFER,I)}else{const Me=w.textures;for(let $=0;$<Me.length;$++){const Ce=Me[$],Re=r.convert(Ce.format,Ce.colorSpace),ce=r.convert(Ce.type),ge=R(Ce.internalFormat,Re,ce,Ce.normalized,Ce.colorSpace);Z(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe(w),ge,w.width,w.height):ne?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe(w),ge,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ge,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Y(I,w,ne){const Me=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=i.get(w.depthTexture);$.__renderTarget=w;const Ce=Me?w.depthTexture.image[0]:w.depthTexture.image;(!$.__webglTexture||Ce.width!==w.width||Ce.height!==w.height)&&(Ce.width=w.width,Ce.height=w.height,w.depthTexture.needsUpdate=!0),Me?Ne(w.depthTexture,0):Ie(w.depthTexture,0);const Re=$.__webglTexture,ce=pe(w),ge=Me?n.TEXTURE_CUBE_MAP_POSITIVE_X+ne:n.TEXTURE_2D,Pe=w.depthTexture.format===Ii?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(w.depthTexture.format===Ui)Z(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Pe,ge,Re,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,Pe,ge,Re,0);else if(w.depthTexture.format===Ii)Z(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Pe,ge,Re,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,Pe,ge,Re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ae(I){const w=i.get(I),ne=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const Me=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Me){const $=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Me.removeEventListener("dispose",$)};Me.addEventListener("dispose",$),w.__depthDisposeCallback=$}w.__boundDepthTexture=Me}if(I.depthTexture&&!w.__autoAllocateDepthBuffer)if(ne)for(let Me=0;Me<6;Me++)Y(w.__webglFramebuffer[Me],I,Me);else I.texture.mipmaps.length>0?Y(w.__webglFramebuffer[0],I,0):Y(w.__webglFramebuffer,I,0);else if(ne){w.__webglDepthbuffer=[];for(let Me=0;Me<6;Me++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[Me]),w.__webglDepthbuffer[Me]===void 0)w.__webglDepthbuffer[Me]=n.createRenderbuffer(),le(w.__webglDepthbuffer[Me],I,!1);else{const $=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=w.__webglDepthbuffer[Me];n.bindRenderbuffer(n.RENDERBUFFER,Ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,Ce)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),le(w.__webglDepthbuffer,I,!1);else{const $=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,Ce)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(I,w,ne){const Me=i.get(I);w!==void 0&&z(Me.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),ne!==void 0&&ae(I)}function Ue(I){const w=I.texture,ne=i.get(I),Me=i.get(w);I.addEventListener("dispose",V),P(I);const $=I.textures,Ce=I.isWebGLCubeRenderTarget===!0,Re=$.length>1;if(Re||(Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture()),Me.__version=w.version,a.memory.textures++),Ce){ne.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(w.mipmaps.length>0){ne.__webglFramebuffer[ce]=[];for(let ge=0;ge<w.mipmaps.length;ge++)ne.__webglFramebuffer[ce][ge]=n.createFramebuffer()}else ne.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(w.mipmaps.length>0){ne.__webglFramebuffer=[];for(let ce=0;ce<w.mipmaps.length;ce++)ne.__webglFramebuffer[ce]=n.createFramebuffer()}else ne.__webglFramebuffer=n.createFramebuffer();if(Re)for(let ce=0,ge=$.length;ce<ge;ce++){const Pe=i.get($[ce]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),a.memory.textures++)}if(I.samples>0&&Z(I)===!1){ne.__webglMultisampledFramebuffer=n.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let ce=0;ce<$.length;ce++){const ge=$[ce];ne.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,ne.__webglColorRenderbuffer[ce]);const Pe=r.convert(ge.format,ge.colorSpace),W=r.convert(ge.type),Ee=R(ge.internalFormat,Pe,W,ge.normalized,ge.colorSpace,I.isXRRenderTarget===!0),ye=pe(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,Ee,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,ne.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(ne.__webglDepthRenderbuffer=n.createRenderbuffer(),le(ne.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ce){t.bindTexture(n.TEXTURE_CUBE_MAP,Me.__webglTexture),tt(n.TEXTURE_CUBE_MAP,w);for(let ce=0;ce<6;ce++)if(w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)z(ne.__webglFramebuffer[ce][ge],I,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ge);else z(ne.__webglFramebuffer[ce],I,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);T(w)?b(n.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(Re){for(let ce=0,ge=$.length;ce<ge;ce++){const Pe=$[ce],W=i.get(Pe);let Ee=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ee=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ee,W.__webglTexture),tt(Ee,Pe),z(ne.__webglFramebuffer,I,Pe,n.COLOR_ATTACHMENT0+ce,Ee,0),T(Pe)&&b(Ee)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ce=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,Me.__webglTexture),tt(ce,w),w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)z(ne.__webglFramebuffer[ge],I,w,n.COLOR_ATTACHMENT0,ce,ge);else z(ne.__webglFramebuffer,I,w,n.COLOR_ATTACHMENT0,ce,0);T(w)?b(ce):w.mipmaps.length>0&&n.texParameteri(ce,n.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&ae(I)}function S(I){const w=I.textures;for(let ne=0,Me=w.length;ne<Me;ne++){const $=w[ne];if(T($)&&$.mipmapsAutoUpdate===!0){const Ce=A(I),Re=i.get($).__webglTexture;t.bindTexture(Ce,Re),b(Ce),t.unbindTexture()}}}const k=[];function q(I){if(I.samples>0){if(Z(I)===!1){const w=I.textures,ne=I.width,Me=I.height;let $=n.COLOR_BUFFER_BIT;const Ce=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=i.get(I),ce=w.length>1;if(ce)for(let Pe=0;Pe<w.length;Pe++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Pe=0;Pe<w.length;Pe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Pe]);const W=i.get(w[Pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,W,0)}n.blitFramebuffer(0,0,ne,Me,0,0,ne,Me,$,n.NEAREST),o===!0&&(k.length=0,k.push(n.COLOR_ATTACHMENT0+Pe),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&k.push(Ce),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,k))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let Pe=0;Pe<w.length;Pe++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Pe]);const W=i.get(w[Pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,W,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&o){const w=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function pe(I){return Math.min(s.maxSamples,I.samples)}function Z(I){const w=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Fe(I){const w=a.render.frame;u.get(I)!==w&&(u.set(I,w),I.update())}function we(I,w){const ne=I.colorSpace,Me=I.format,$=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||ne!==aa&&ne!==mi&&(wt.getTransfer(ne)===It?(Me!==ni||$!==En)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",ne)),w}function Le(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=Ge,this.resetTextureUnits=Se,this.getTextureUnits=me,this.setTextureUnits=De,this.setTexture2D=Ie,this.setTexture2DArray=Be,this.setTexture3D=qe,this.setTextureCube=Ne,this.rebindTextures=fe,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=S,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=z,this.useMultisampledRTT=Z,this.dispose=j}function Ug(n,e){function t(i,s=mi){let r;const a=wt.getTransfer(s);if(i===En)return n.UNSIGNED_BYTE;if(i===Jo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Zo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===yu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Mu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===vu)return n.BYTE;if(i===_u)return n.SHORT;if(i===ar)return n.UNSIGNED_SHORT;if(i===Ko)return n.INT;if(i===ai)return n.UNSIGNED_INT;if(i===$n)return n.FLOAT;if(i===Kn)return n.HALF_FLOAT;if(i===bu)return n.ALPHA;if(i===Su)return n.RGB;if(i===ni)return n.RGBA;if(i===Ui)return n.DEPTH_COMPONENT;if(i===Ii)return n.DEPTH_STENCIL;if(i===jo)return n.RED;if(i===Qo)return n.RED_INTEGER;if(i===Qi)return n.RG;if(i===el)return n.RG_INTEGER;if(i===tl)return n.RGBA_INTEGER;if(i===Kr||i===Jr||i===Zr||i===jr)if(a===It)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===co||i===uo||i===fo||i===ho)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===co)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===uo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===fo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ho)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===po||i===mo||i===go||i===xo||i===vo||i===ia||i===_o)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===po||i===mo)return a===It?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===go)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===xo)return r.COMPRESSED_R11_EAC;if(i===vo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ia)return r.COMPRESSED_RG11_EAC;if(i===_o)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===yo||i===Mo||i===bo||i===So||i===wo||i===Eo||i===To||i===Ao||i===Ro||i===Co||i===Po||i===Lo||i===Do||i===Io)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===yo)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Mo)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bo)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===So)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wo)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Eo)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===To)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ao)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ro)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Co)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Po)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Lo)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Do)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Io)return a===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===No||i===Uo||i===zo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===No)return a===It?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Uo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Fo||i===Oo||i===sa||i===ko)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Fo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Oo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ko)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ts?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const zg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Og{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Fu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new zi({vertexShader:zg,fragmentShader:Fg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vt(new Ni(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kg extends ts{constructor(e,t){super();const i=this;let s=null,r=1,a=null,l="local-floor",o=1,c=null,u=null,d=null,h=null,m=null,f=null;const v=typeof XRWebGLBinding<"u",x=new Og,p={},y=t.getContextAttributes();let T=null,b=null;const A=[],R=[],M=new it;let C=null,P=null;const N=new Dn;N.viewport=new qt;const F=new Dn;F.viewport=new qt;const V=[N,F],te=new Zd;let B=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(xe){let Ie=A[xe];return Ie===void 0&&(Ie=new Ta,A[xe]=Ie),Ie.getTargetRaySpace()},this.getControllerGrip=function(xe){let Ie=A[xe];return Ie===void 0&&(Ie=new Ta,A[xe]=Ie),Ie.getGripSpace()},this.getHand=function(xe){let Ie=A[xe];return Ie===void 0&&(Ie=new Ta,A[xe]=Ie),Ie.getHandSpace()};function oe(xe){const Ie=R.indexOf(xe.inputSource);if(Ie===-1)return;const Be=A[Ie];Be!==void 0&&(Be.update(xe.inputSource,xe.frame,c||a),Be.dispatchEvent({type:xe.type,data:xe.inputSource}))}function re(){s.removeEventListener("select",oe),s.removeEventListener("selectstart",oe),s.removeEventListener("selectend",oe),s.removeEventListener("squeeze",oe),s.removeEventListener("squeezestart",oe),s.removeEventListener("squeezeend",oe),s.removeEventListener("end",re),s.removeEventListener("inputsourceschange",Te);for(let xe=0;xe<A.length;xe++){const Ie=R[xe];Ie!==null&&(R[xe]=null,A[xe].disconnect(Ie))}B=null,j=null,x.reset();for(const xe in p)delete p[xe];if(e.setRenderTarget(T),m=null,h=null,d=null,s=null,b=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(M.width,M.height,!1),P!==null){const xe=P.camera;xe.fov=P.fov,xe.zoom=P.zoom,xe.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(xe){r=xe,i.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(xe){l=xe,i.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(xe){c=xe},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(xe){if(s=xe,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",oe),s.addEventListener("selectstart",oe),s.addEventListener("selectend",oe),s.addEventListener("squeeze",oe),s.addEventListener("squeezestart",oe),s.addEventListener("squeezeend",oe),s.addEventListener("end",re),s.addEventListener("inputsourceschange",Te),y.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(M),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Be=null,qe=null,Ne=null;y.depth&&(Ne=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Be=y.stencil?Ii:Ui,qe=y.stencil?Ts:ai);const Ke={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Ke),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new An(h.textureWidth,h.textureHeight,{format:ni,type:En,depthTexture:new Rs(h.textureWidth,h.textureHeight,qe,void 0,void 0,void 0,void 0,void 0,void 0,Be),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const Be={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Be),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new An(m.framebufferWidth,m.framebufferHeight,{format:ni,type:En,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(o),c=null,a=await s.requestReferenceSpace(l),Ge.setContext(s),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Te(xe){for(let Ie=0;Ie<xe.removed.length;Ie++){const Be=xe.removed[Ie],qe=R.indexOf(Be);qe>=0&&(R[qe]=null,A[qe].disconnect(Be))}for(let Ie=0;Ie<xe.added.length;Ie++){const Be=xe.added[Ie];let qe=R.indexOf(Be);if(qe===-1){for(let Ke=0;Ke<A.length;Ke++)if(Ke>=R.length){R.push(Be),qe=Ke;break}else if(R[Ke]===null){R[Ke]=Be,qe=Ke;break}if(qe===-1)break}const Ne=A[qe];Ne&&Ne.connect(Be)}}function ie(xe,Ie){Ie===null?xe.matrixWorld.copy(xe.matrix):xe.matrixWorld.multiplyMatrices(Ie.matrixWorld,xe.matrix),xe.matrixWorldInverse.copy(xe.matrixWorld).invert()}this.updateCamera=function(xe){if(s===null)return;let Ie=xe.near,Be=xe.far;x.texture!==null&&(x.depthNear>0&&(Ie=x.depthNear),x.depthFar>0&&(Be=x.depthFar)),te.near=F.near=N.near=Ie,te.far=F.far=N.far=Be,(B!==te.near||j!==te.far)&&(s.updateRenderState({depthNear:te.near,depthFar:te.far}),B=te.near,j=te.far),te.layers.mask=xe.layers.mask|6,N.layers.mask=te.layers.mask&-5,F.layers.mask=te.layers.mask&-3;const qe=xe.parent,Ne=te.cameras;ie(te,qe);for(let Ke=0;Ke<Ne.length;Ke++)ie(Ne[Ke],qe);te.projectionMatrix.copy(N.projectionMatrix),te.projectionMatrixInverse.copy(N.projectionMatrixInverse),P===null&&xe.isPerspectiveCamera&&(P={camera:xe,fov:xe.fov,zoom:xe.zoom}),Se(xe,te,qe)};function Se(xe,Ie,Be){Be===null?xe.matrix.copy(Ie.matrixWorld):(xe.matrix.copy(Be.matrixWorld),xe.matrix.invert(),xe.matrix.multiply(Ie.matrixWorld)),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.updateMatrixWorld(!0),xe.projectionMatrix.copy(Ie.projectionMatrix),xe.projectionMatrixInverse.copy(Ie.projectionMatrixInverse),xe.isPerspectiveCamera&&(xe.fov=ca*2*Math.atan(1/xe.projectionMatrix.elements[5]),xe.zoom=1)}this.getCamera=function(){return te},this.getFoveation=function(){if(!(h===null&&m===null))return o},this.setFoveation=function(xe){o=xe,h!==null&&(h.fixedFoveation=xe),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=xe)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(te)},this.getCameraTexture=function(xe){return p[xe]};let me=null;function De(xe,Ie){if(u=Ie.getViewerPose(c||a),f=Ie,u!==null){const Be=u.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let qe=!1;Be.length!==te.cameras.length&&(te.cameras.length=0,qe=!0);for(let ke=0;ke<Be.length;ke++){const tt=Be[ke];let st=null;if(m!==null)st=m.getViewport(tt);else{const _t=d.getViewSubImage(h,tt);st=_t.viewport,ke===0&&(e.setRenderTargetTextures(b,_t.colorTexture,_t.depthStencilTexture),e.setRenderTarget(b))}let Qe=V[ke];Qe===void 0&&(Qe=new Dn,Qe.layers.enable(ke),Qe.viewport=new qt,V[ke]=Qe),Qe.matrix.fromArray(tt.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(tt.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(st.x,st.y,st.width,st.height),ke===0&&(te.matrix.copy(Qe.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale)),qe===!0&&te.cameras.push(Qe)}const Ne=s.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const ke=d.getDepthInformation(Be[0]);ke&&ke.isValid&&ke.texture&&x.init(ke,s.renderState)}if(Ne&&Ne.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let ke=0;ke<Be.length;ke++){const tt=Be[ke].camera;if(tt){let st=p[tt];st||(st=new Fu,p[tt]=st);const Qe=d.getCameraImage(tt);st.sourceTexture=Qe}}}}for(let Be=0;Be<A.length;Be++){const qe=R[Be],Ne=A[Be];qe!==null&&Ne!==void 0&&Ne.update(qe,Ie,c||a)}me&&me(xe,Ie),Ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Ie}),f=null}const Ge=new qu;Ge.setAnimationLoop(De),this.setAnimationLoop=function(xe){me=xe},this.dispose=function(){}}}const Bg=new Lt,nf=new dt;nf.set(-1,0,0,0,1,0,0,0,1);function Hg(n,e){function t(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function i(x,p){p.color.getRGB(x.fogColor.value,Hu(n)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function s(x,p,y,T,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(x,p):p.isMeshLambertMaterial?(r(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(x,p),d(x,p)):p.isMeshPhongMaterial?(r(x,p),u(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(x,p),h(x,p),p.isMeshPhysicalMaterial&&m(x,p,b)):p.isMeshMatcapMaterial?(r(x,p),f(x,p)):p.isMeshDepthMaterial?r(x,p):p.isMeshDistanceMaterial?(r(x,p),v(x,p)):p.isMeshNormalMaterial?r(x,p):p.isLineBasicMaterial?(a(x,p),p.isLineDashedMaterial&&l(x,p)):p.isPointsMaterial?o(x,p,y,T):p.isSpriteMaterial?c(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,t(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===Sn&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,t(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===Sn&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,t(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,t(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);const y=e.get(p),T=y.envMap,b=y.envMapRotation;T&&(x.envMap.value=T,x.envMapRotation.value.setFromMatrix4(Bg.makeRotationFromEuler(b)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(nf),x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,x.aoMapTransform))}function a(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform))}function l(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function o(x,p,y,T){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*y,x.scale.value=T*.5,p.map&&(x.map.value=p.map,t(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function c(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function u(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function d(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function h(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function m(x,p,y){x.ior.value=p.ior,p.diffuseRoughness>0&&(x.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Sn&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.retroreflectivity>0&&(x.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=y.texture,x.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,x.specularIntensityMapTransform))}function f(x,p){p.matcap&&(x.matcap.value=p.matcap)}function v(x,p){const y=e.get(p).light;x.referencePosition.value.setFromMatrixPosition(y.matrixWorld),x.nearDistance.value=y.shadow.camera.near,x.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Gg(n,e,t,i){let s={},r={};function a(y,T){const b=T.program;i.uniformBlockBinding(y,b,s[y.id])}function l(y,T){let b=s[y.id];b===void 0&&(f(y),b=o(y),s[y.id]=b,y.addEventListener("dispose",x));const A=T.program;i.updateUBOMapping(y,A);const R=e.render.frame;r[y.id]!==R&&(c(y),r[y.id]=R)}function o(y){const T=n.createBuffer(),b=y.__size,A=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,b,A),n.bindBuffer(n.UNIFORM_BUFFER,null),T}function c(y){const T=s[y.id],b=y.uniforms,A=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let R=0,M=b.length;R<M;R++){const C=b[R];if(Array.isArray(C))for(let P=0,N=C.length;P<N;P++)u(C[P],R,P,A);else u(C,R,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(y,T,b,A){if(h(y,T,b,A)===!0){const R=y.__offset,M=y.value;if(Array.isArray(M)){let C=0;for(let P=0;P<M.length;P++){const N=M[P],F=v(N,!0);d(N,y.__data,C),C+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else d(M,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,R,y.__data)}}function d(y,T,b){typeof y=="number"||typeof y=="boolean"?T[b]=y:y.isMatrix3?(T[b]=y.elements[0],T[b+1]=y.elements[1],T[b+2]=y.elements[2],T[b+3]=0,T[b+4]=y.elements[3],T[b+5]=y.elements[4],T[b+6]=y.elements[5],T[b+7]=0,T[b+8]=y.elements[6],T[b+9]=y.elements[7],T[b+10]=y.elements[8],T[b+11]=0):ArrayBuffer.isView(y)?T.set(y.subarray(0,T.length-b),b):y.toArray(T,b)}function h(y,T,b,A){const R=y.value,M=T+"_"+b;if(Array.isArray(R)){A[M]===void 0&&(A[M]=[]);const C=A[M];let P=!1;for(let N=0;N<R.length;N++)m(R[N],C,N)===!0&&(P=!0);return P}return m(R,A,M)}function m(y,T,b){if(T[b]===void 0)return typeof y=="number"||typeof y=="boolean"?T[b]=y:ArrayBuffer.isView(y)?T[b]=y.slice():T[b]=y.clone(),!0;{const A=T[b];if(typeof y=="number"||typeof y=="boolean"){if(A!==y)return T[b]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(A.equals(y)===!1)return A.copy(y),!0}}return!1}function f(y){const T=y.uniforms;let b=0;const A=16;for(let M=0,C=T.length;M<C;M++){const P=Array.isArray(T[M])?T[M]:[T[M]];for(let N=0,F=P.length;N<F;N++){const V=P[N],te=Array.isArray(V.value)?V.value:[V.value],B=Array.isArray(T[M])||Array.isArray(V.value);let j=b;for(let re=0,Te=te.length;re<Te;re++){const ie=te[re],Se=v(ie,B),me=b%A,De=me%Se.boundary,Ge=me+De;b+=De,Ge!==0&&A-Ge<Se.storage&&(b+=A-Ge),re===0&&(j=b),b+=Se.storage}const oe=V.type==="int"?Int32Array:V.type==="uint"?Uint32Array:Float32Array;V.__data=new oe((b-j)/Float32Array.BYTES_PER_ELEMENT),V.__offset=j}}const R=b%A;return R>0&&(b+=A-R),y.__size=b,y.__cache={},this}function v(y,T){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=16,b.storage=48):y.isMatrix4?(b.boundary=16,b.storage=64):y.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):at("WebGLRenderer: Unsupported uniform value type.",y),T===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function x(y){const T=y.target;T.removeEventListener("dispose",x),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function p(){for(const y in s)n.deleteBuffer(s[y]);s={},r={}}return{bind:a,update:l,dispose:p}}const Vg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let jn=null;function Wg(){return jn===null&&(jn=new Nu(Vg,16,16,Qi,Kn),jn.name="DFG_LUT",jn.minFilter=Tn,jn.magFilter=Tn,jn.wrapS=gi,jn.wrapT=gi,jn.generateMipmaps=!1,jn.needsUpdate=!0),jn}class Xg{constructor(e={}){const{canvas:t=Yf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:m=En}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const v=m,x=new Set([tl,el,Qo]),p=new Set([En,ai,ar,Ts,Jo,Zo]),y=new Uint32Array(4),T=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]};let A=null,R=null;const M=[],C=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let F=!1,V=null,te=null,B=null,j=null;this._outputColorSpace=wn;let oe=0,re=0,Te=null,ie=-1,Se=null;const me=new qt,De=new qt;let Ge=null;const xe=new ot(0);let Ie=0,Be=t.width,qe=t.height,Ne=1,Ke=null,ht=null;const ke=new qt(0,0,Be,qe),tt=new qt(0,0,Be,qe);let st=!1;const Qe=new lr,_t=new rl;let mt=!1,Et=!1;const z=new Lt,le=new ee,Y=new qt,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function Ue(){return Te===null?Ne:1}let S=i;function k(D,J){return t.getContext(D,J)}let q,pe,Z,Fe,we,Le,I,w,ne,Me,$,Ce,Re,ce,ge,Pe,W,Ee,ye,Oe,ze,He,et;try{const D={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:o,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$o}`),t.addEventListener("webglcontextlost",E,!1),t.addEventListener("webglcontextrestored",X,!1),t.addEventListener("webglcontextcreationerror",G,!1),S===null){const J="webgl2";if(S=k(J,D),S===null)throw k(J)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}lt()}catch(D){throw t.removeEventListener("webglcontextlost",E,!1),t.removeEventListener("webglcontextrestored",X,!1),t.removeEventListener("webglcontextcreationerror",G,!1),Pt("WebGLRenderer: "+D.message),D}function lt(){q=new Y0(S),q.init(),ze=new Ug(S,q),pe=new F0(S,q,e,ze),Z=new Ig(S,q),pe.reversedDepthBuffer&&h&&Z.buffers.depth.setReversed(!0),te=S.createFramebuffer(),B=S.createFramebuffer(),j=S.createFramebuffer(),Fe=new Z0(S),we=new _g,Le=new Ng(S,q,Z,we,pe,ze,Fe),I=new $0(N),w=new Qd(S),He=new U0(S,w),ne=new K0(S,w,Fe,He),Me=new Q0(S,ne,w,He,Fe),Ee=new j0(S,pe,Le),ge=new O0(we),$=new vg(N,I,q,pe,He,ge),Ce=new Hg(N,we),Re=new Mg,ce=new Ag(q),W=new N0(N,I,Z,Me,f,o),Pe=new Dg(N,Me,pe),et=new Gg(S,Fe,pe,Z),ye=new z0(S,q,Fe),Oe=new J0(S,q,Fe),Fe.programs=$.programs,N.capabilities=pe,N.extensions=q,N.properties=we,N.renderLists=Re,N.shadowMap=Pe,N.state=Z,N.info=Fe}v!==En&&(P=new tm(v,t.width,t.height,l,s,r));const _=new kg(N,S);this.xr=_,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const D=q.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=q.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(D){D!==void 0&&(Ne=D,this.setSize(Be,qe,!1))},this.getSize=function(D){return D.set(Be,qe)},this.setSize=function(D,J,_e=!0){if(_.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}Be=D,qe=J,t.width=Math.floor(D*Ne),t.height=Math.floor(J*Ne),_e===!0&&(t.style.width=D+"px",t.style.height=J+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,D,J)},this.getDrawingBufferSize=function(D){return D.set(Be*Ne,qe*Ne).floor()},this.setDrawingBufferSize=function(D,J,_e){Be=D,qe=J,Ne=_e,t.width=Math.floor(D*_e),t.height=Math.floor(J*_e),this.setViewport(0,0,D,J)},this.setEffects=function(D){if(v===En){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let J=0;J<D.length;J++)if(D[J].isOutputPass===!0){at("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(me)},this.getViewport=function(D){return D.copy(ke)},this.setViewport=function(D,J,_e,ue){D.isVector4?ke.set(D.x,D.y,D.z,D.w):ke.set(D,J,_e,ue),Z.viewport(me.copy(ke).multiplyScalar(Ue()).round())},this.getScissor=function(D){return D.copy(tt)},this.setScissor=function(D,J,_e,ue){D.isVector4?tt.set(D.x,D.y,D.z,D.w):tt.set(D,J,_e,ue),Z.scissor(De.copy(tt).multiplyScalar(Ue()).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(D){Z.setScissorTest(st=D)},this.setOpaqueSort=function(D){Ke=D},this.setTransparentSort=function(D){ht=D},this.getClearColor=function(D){return D.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor(...arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha(...arguments)},this.clear=function(D=!0,J=!0,_e=!0){let ue=0;if(D){let he=!1;if(Te!==null){const Xe=Te.texture.format;he=x.has(Xe)}if(he){const Xe=Te.texture.type,Je=p.has(Xe),We=W.getClearColor(),Ye=W.getClearAlpha(),nt=We.r,ft=We.g,bt=We.b;Je?(y[0]=nt,y[1]=ft,y[2]=bt,y[3]=Ye,S.clearBufferuiv(S.COLOR,0,y)):(T[0]=nt,T[1]=ft,T[2]=bt,T[3]=Ye,S.clearBufferiv(S.COLOR,0,T))}else ue|=S.COLOR_BUFFER_BIT}J&&(ue|=S.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),_e&&(ue|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ue!==0&&S.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),V=D},this.dispose=function(){t.removeEventListener("webglcontextlost",E,!1),t.removeEventListener("webglcontextrestored",X,!1),t.removeEventListener("webglcontextcreationerror",G,!1),W.dispose(),Re.dispose(),ce.dispose(),Le.dispose(),we.dispose(),I.dispose(),Me.dispose(),ne.dispose(),He.dispose(),et.dispose(),$.dispose(),_.dispose(),_.removeEventListener("sessionstart",se),_.removeEventListener("sessionend",be),ve.stop()};function E(D){D.preventDefault(),Sl("WebGLRenderer: Context Lost."),F=!0}function X(){Sl("WebGLRenderer: Context Restored."),F=!1;const D=Fe.autoReset,J=Pe.enabled,_e=Pe.autoUpdate,ue=Pe.needsUpdate,he=Pe.type;lt(),Fe.autoReset=D,Pe.enabled=J,Pe.autoUpdate=_e,Pe.needsUpdate=ue,Pe.type=he}function G(D){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function g(D){const J=D.target;J.removeEventListener("dispose",g),O(J)}function O(D){U(D),we.remove(D)}function U(D){const J=we.get(D).programs;J!==void 0&&(J.forEach(function(_e){$.releaseProgram(_e)}),D.isShaderMaterial&&$.releaseShaderCache(D))}this.renderBufferDirect=function(D,J,_e,ue,he,Xe){J===null&&(J=ae);const Je=he.isMesh&&he.matrixWorld.determinantAffine()<0,We=Wt(D,J,_e,ue,he);Z.setMaterial(ue,Je);let Ye=_e.index,nt=1;if(ue.wireframe===!0){if(Ye=ne.getWireframeAttribute(_e),Ye===void 0)return;nt=2}const ft=_e.drawRange,bt=_e.attributes.position;let Ze=ft.start*nt,St=(ft.start+ft.count)*nt;Xe!==null&&(Ze=Math.max(Ze,Xe.start*nt),St=Math.min(St,(Xe.start+Xe.count)*nt)),Ye!==null?(Ze=Math.max(Ze,0),St=Math.min(St,Ye.count)):bt!=null&&(Ze=Math.max(Ze,0),St=Math.min(St,bt.count));const $t=St-Ze;if($t<0||$t===1/0)return;He.setup(he,ue,We,_e,Ye);let zt,Nt=ye;if(Ye!==null&&(zt=w.get(Ye),Nt=Oe,Nt.setIndex(zt)),he.isMesh)ue.wireframe===!0?(Z.setLineWidth(ue.wireframeLinewidth*Ue()),Nt.setMode(S.LINES)):Nt.setMode(S.TRIANGLES);else if(he.isLine){let fn=ue.linewidth;fn===void 0&&(fn=1),Z.setLineWidth(fn*Ue()),he.isLineSegments?Nt.setMode(S.LINES):he.isLineLoop?Nt.setMode(S.LINE_LOOP):Nt.setMode(S.LINE_STRIP)}else he.isPoints?Nt.setMode(S.POINTS):he.isSprite&&Nt.setMode(S.TRIANGLES);if(he.isBatchedMesh)if(q.get("WEBGL_multi_draw"))Nt.renderMultiDraw(he._multiDrawStarts,he._multiDrawCounts,he._multiDrawCount);else{const fn=he._multiDrawStarts,je=he._multiDrawCounts,vn=he._multiDrawCount,Ct=Ye?w.get(Ye).bytesPerElement:1,Oi=we.get(ue).currentProgram.getUniforms();for(let dn=0;dn<vn;dn++)Oi.setValue(S,"_gl_DrawID",dn),Nt.render(fn[dn]/Ct,je[dn])}else if(he.isInstancedMesh)Nt.renderInstances(Ze,$t,he.count);else if(_e.isInstancedBufferGeometry){const fn=_e._maxInstanceCount!==void 0?_e._maxInstanceCount:1/0,je=Math.min(_e.instanceCount,fn);Nt.renderInstances(Ze,$t,je)}else Nt.render(Ze,$t)};function L(D,J,_e,ue){V!==null&&D.isNodeMaterial&&V.setObject(ue,D),mt===!0&&ge.setState(D,_e,!1),D.transparent===!0&&D.side===pi&&D.forceSinglePass===!1?(D.side=Sn,D.needsUpdate=!0,yt(D,J,ue),D.side=ji,D.needsUpdate=!0,yt(D,J,ue),D.side=pi):yt(D,J,ue)}this.compile=function(D,J,_e=null){_e===null&&(_e=D),V!==null&&V.renderStart(D,J,_e),R=ce.get(_e),R.init(J),C.push(R),_e.traverseVisible(function(he){he.isLight&&he.layers.test(J.layers)&&(R.pushLight(he),he.castShadow&&R.pushShadow(he))}),D!==_e&&D.traverseVisible(function(he){he.isLight&&he.layers.test(J.layers)&&(R.pushLight(he),he.castShadow&&R.pushShadow(he))}),R.setupLights(),V!==null&&V.updateLights(R.state.lightsArray),Et=this.localClippingEnabled,mt=ge.init(this.clippingPlanes,Et),mt===!0&&ge.setGlobalState(this.clippingPlanes,J),V!==null&&Pe.render(R.state.shadowsArray,_e,J);const ue=new Set;return D.traverse(function(he){if(!(he.isMesh||he.isPoints||he.isLine||he.isSprite))return;const Xe=he.material;if(Xe)if(Array.isArray(Xe))for(let Je=0;Je<Xe.length;Je++){const We=Xe[Je];L(We,_e,J,he),ue.add(We)}else L(Xe,_e,J,he),ue.add(Xe)}),R=C.pop(),V!==null&&V.renderEnd(),ue},this.compileAsync=function(D,J,_e=null){const ue=this.compile(D,J,_e);return new Promise(he=>{function Xe(){if(ue.forEach(function(Je){const Ye=we.get(Je).currentProgram;(Ye===void 0||Ye.isReady())&&ue.delete(Je)}),ue.size===0){he(D);return}setTimeout(Xe,10)}q.get("KHR_parallel_shader_compile")!==null?Xe():setTimeout(Xe,10)})};let K=null;function H(D){K&&K(D)}function se(){ve.stop()}function be(){ve.start()}const ve=new qu;ve.setAnimationLoop(H),typeof self<"u"&&ve.setContext(self),this.setAnimationLoop=function(D){K=D,_.setAnimationLoop(D),D===null?ve.stop():ve.start()},_.addEventListener("sessionstart",se),_.addEventListener("sessionend",be),this.render=function(D,J){if(J!==void 0&&J.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;V!==null&&V.renderStart(D,J);const _e=_.enabled===!0&&_.isPresenting===!0,ue=P!==null&&(Te===null||_e)&&P.begin(N,Te);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),_.enabled===!0&&_.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(_.cameraAutoUpdate===!0&&_.updateCamera(J),J=_.getCamera()),D.isScene===!0&&D.onBeforeRender(N,D,J,Te),R=ce.get(D,C.length),R.init(J),R.state.textureUnits=Le.getTextureUnits(),C.push(R),z.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),J.isArrayCamera?_t.setFromArrayCamera(J):Qe.setFromProjectionMatrix(z,Yn,J.reversedDepth),Et=this.localClippingEnabled,mt=ge.init(this.clippingPlanes,Et),A=Re.get(D,M.length),A.init(),M.push(A),this.info.render.frame++,_.enabled===!0&&_.isPresenting===!0){const Je=N.xr.getDepthSensingMesh();Je!==null&&de(Je,J,-1/0,N.sortObjects)}de(D,J,0,N.sortObjects),A.finish(),V!==null&&V.updateLights(R.state.lightsArray),N.sortObjects===!0&&A.sort(Ke,ht),fe=_.enabled===!1||_.isPresenting===!1||_.hasDepthSensing()===!1,fe&&W.addToRenderList(A,D),this.info.autoReset===!0&&this.info.reset(),mt===!0&&ge.beginShadows();const he=R.state.shadowsArray;if(Pe.render(he,D,J),mt===!0&&ge.endShadows(),(ue&&P.hasRenderPass())===!1){const Je=A.opaque,We=A.transmissive;if(R.setupLights(),J.isArrayCamera){const Ye=J.cameras;if(We.length>0)for(let nt=0,ft=Ye.length;nt<ft;nt++){const bt=Ye[nt];Ae(Je,We,D,bt)}fe&&W.render(D);for(let nt=0,ft=Ye.length;nt<ft;nt++){const bt=Ye[nt];Q(A,D,bt,bt.viewport)}}else We.length>0&&Ae(Je,We,D,J),fe&&W.render(D),Q(A,D,J)}Te!==null&&re===0&&(Le.updateMultisampleRenderTarget(Te),Le.updateRenderTargetMipmap(Te)),ue&&P.end(N),D.isScene===!0&&D.onAfterRender(N,D,J),He.resetDefaultState(),ie=-1,Se=null,C.pop(),C.length>0?(R=C[C.length-1],Le.setTextureUnits(R.state.textureUnits),mt===!0&&ge.setGlobalState(N.clippingPlanes,R.state.camera)):R=null,M.pop(),M.length>0?A=M[M.length-1]:A=null,V!==null&&V.renderEnd()};function de(D,J,_e,ue){if(D.visible===!1)return;if(D.layers.test(J.layers)){if(D.isGroup)_e=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(J);else if(D.isLight)R.pushLight(D),D.castShadow&&R.pushShadow(D);else if(D.isSprite){const Je=J.isArrayCamera?_t:Qe;if(!D.frustumCulled||D.intersectsFrustum(Je)){ue&&Y.setFromMatrixPosition(D.matrixWorld).applyMatrix4(z);const We=Me.update(D),Ye=D.material;Ye.visible&&A.push(D,We,Ye,_e,Y.z,null,J)}}else if(D.isMesh||D.isLine||D.isPoints){const Je=J.isArrayCamera?_t:Qe;if(!D.frustumCulled||D.intersectsFrustum(Je)){const We=Me.update(D),Ye=D.material;if(ue&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Y.copy(D.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),Y.copy(We.boundingSphere.center)),Y.applyMatrix4(D.matrixWorld).applyMatrix4(z)),Array.isArray(Ye)){const nt=We.groups;for(let ft=0,bt=nt.length;ft<bt;ft++){const Ze=nt[ft],St=Ye[Ze.materialIndex];St&&St.visible&&A.push(D,We,St,_e,Y.z,Ze,J)}}else Ye.visible&&A.push(D,We,Ye,_e,Y.z,null,J)}}}const Xe=D.children;for(let Je=0,We=Xe.length;Je<We;Je++)de(Xe[Je],J,_e,ue)}function Q(D,J,_e,ue){const{opaque:he,transmissive:Xe,transparent:Je}=D;R.setupLightsView(_e),mt===!0&&ge.setGlobalState(N.clippingPlanes,_e),ue&&Z.viewport(me.copy(ue)),he.length>0&&Ve(he,J,_e),Xe.length>0&&Ve(Xe,J,_e),Je.length>0&&Ve(Je,J,_e),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function Ae(D,J,_e,ue){if((_e.isScene===!0?_e.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[ue.id]===void 0){const Ze=q.has("EXT_color_buffer_half_float")||q.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[ue.id]=new An(1,1,{generateMipmaps:!0,type:Ze?Kn:En,minFilter:xi,samples:Math.max(4,pe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:wt.workingColorSpace})}const Xe=R.state.transmissionRenderTarget[ue.id],Je=ue.viewport||me;Xe.setSize(Je.z*N.transmissionResolutionScale,Je.w*N.transmissionResolutionScale);const We=N.getRenderTarget(),Ye=N.getActiveCubeFace(),nt=N.getActiveMipmapLevel();N.setRenderTarget(Xe),N.getClearColor(xe),Ie=N.getClearAlpha(),Ie<1&&N.setClearColor(16777215,.5),N.clear(),fe&&W.render(_e);const ft=N.toneMapping;N.toneMapping=ri;const bt=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),R.setupLightsView(ue),mt===!0&&ge.setGlobalState(N.clippingPlanes,ue),Ve(D,_e,ue),Le.updateMultisampleRenderTarget(Xe),Le.updateRenderTargetMipmap(Xe),q.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let St=0,$t=J.length;St<$t;St++){const zt=J[St],{object:Nt,geometry:fn,material:je,group:vn}=zt;if(je.side===pi&&Nt.layers.test(ue.layers)){const Ct=je.side;je.side=Sn,je.needsUpdate=!0,rt(Nt,_e,ue,fn,je,vn),je.side=Ct,je.needsUpdate=!0,Ze=!0}}Ze===!0&&(Le.updateMultisampleRenderTarget(Xe),Le.updateRenderTargetMipmap(Xe))}N.setRenderTarget(We,Ye,nt),N.setClearColor(xe,Ie),bt!==void 0&&(ue.viewport=bt),N.toneMapping=ft}function Ve(D,J,_e){const ue=J.isScene===!0?J.overrideMaterial:null;for(let he=0,Xe=D.length;he<Xe;he++){const Je=D[he],{object:We,geometry:Ye,group:nt}=Je;let ft=Je.material;ft.allowOverride===!0&&ue!==null&&(ft=ue),We.layers.test(_e.layers)&&rt(We,J,_e,Ye,ft,nt)}}function rt(D,J,_e,ue,he,Xe){V!==null&&he.isNodeMaterial&&V.setObject(D,he),D.onBeforeRender(N,J,_e,ue,he,Xe),D.modelViewMatrix.multiplyMatrices(_e.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),he.onBeforeRender(N,J,_e,ue,D,Xe),he.transparent===!0&&he.side===pi&&he.forceSinglePass===!1?(he.side=Sn,he.needsUpdate=!0,N.renderBufferDirect(_e,J,ue,he,D,Xe),he.side=ji,he.needsUpdate=!0,N.renderBufferDirect(_e,J,ue,he,D,Xe),he.side=pi):N.renderBufferDirect(_e,J,ue,he,D,Xe),D.onAfterRender(N,J,_e,ue,he,Xe)}function xt(D){let J=0;for(const _e of D)_e.texture!==null&&J++;return J}function yt(D,J,_e){J.isScene!==!0&&(J=ae);const ue=we.get(D),he=R.state.lights,Xe=R.state.shadowsArray,Je=he.state.version,We=$.getParameters(D,he.state,Xe,J,_e,R.state.lightProbeGridArray),Ye=$.getProgramCacheKey(We);let nt=ue.programs;ue.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?J.environment:null,ue.fog=J.fog;const ft=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;ue.envMap=I.get(D.envMap||ue.environment,ft),ue.envMapRotation=ue.environment!==null&&D.envMap===null?J.environmentRotation:D.envMapRotation,nt===void 0&&(D.addEventListener("dispose",g),nt=new Map,ue.programs=nt,ue.programVariants=new Map);let bt=nt.get(Ye);if(bt!==void 0){if(ue.currentProgram===bt&&ue.lightsStateVersion===Je)return Ot(D,We),bt}else We.uniforms=$.getUniforms(D),V!==null&&D.isNodeMaterial&&V.build(D,_e,We),D.onBeforeCompile(We,N),bt=$.acquireProgram(We,Ye),nt.set(Ye,bt),ue.uniforms=We.uniforms;const Ze=ue.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Ze.clippingPlanes=ge.uniform),Ot(D,We),ue.needsLights=Fi(D),ue.lightsStateVersion=Je,ue.needsLights&&(Ze.ambientLightColor.value=he.state.ambient,Ze.lightProbe.value=he.state.probe,Ze.sunLights.value=he.state.sun,Ze.sunLightShadows.value=he.state.sunShadow,Ze.directionalLights.value=he.state.directional,Ze.directionalLightShadows.value=he.state.directionalShadow,Ze.spotLights.value=he.state.spot,Ze.spotLightShadows.value=he.state.spotShadow,Ze.rectAreaLights.value=he.state.rectArea,Ze.ltc_1.value=he.state.rectAreaLTC1,Ze.ltc_2.value=he.state.rectAreaLTC2,Ze.pointLights.value=he.state.point,Ze.pointLightShadows.value=he.state.pointShadow,Ze.hemisphereLights.value=he.state.hemi,Ze.sunShadowMatrix.value=he.state.sunShadowMatrix,Ze.sunShadowCascade.value=he.state.sunShadowCascade,Ze.directionalShadowMatrix.value=he.state.directionalShadowMatrix,Ze.spotLightMatrix.value=he.state.spotLightMatrix,Ze.spotLightMap.value=he.state.spotLightMap,Ze.pointShadowMatrix.value=he.state.pointShadowMatrix),ue.numLightProbeGrids=xt(R.state.lightProbeGridArray),ue.currentProgram=bt,ue.uniformsList=null,bt}function ut(D,J,_e,ue,he){const Xe=we.get(D),Je=Xe.currentProgram.id+","+ue+","+he;let We=Xe.programVariants.get(Je);return We===void 0?(We=yt(D,J,_e),Xe.programVariants.set(Je,We)):(Xe.currentProgram=We,Xe.uniformsList=null,Xe.outputColorSpace=ue,Xe.toneMapping=he),We}function Dt(D){if(D.uniformsList===null){const J=D.currentProgram.getUniforms();D.uniformsList=ta.seqWithValue(J.seq,D.uniforms)}return D.uniformsList}function Ot(D,J){const _e=we.get(D);_e.outputColorSpace=J.outputColorSpace,_e.batching=J.batching,_e.batchingColor=J.batchingColor,_e.instancing=J.instancing,_e.instancingColor=J.instancingColor,_e.instancingMorph=J.instancingMorph,_e.skinning=J.skinning,_e.morphTargets=J.morphTargets,_e.morphNormals=J.morphNormals,_e.morphColors=J.morphColors,_e.morphTargetsCount=J.morphTargetsCount,_e.numClippingPlanes=J.numClippingPlanes,_e.numIntersection=J.numClipIntersection,_e.vertexAlphas=J.vertexAlphas,_e.vertexTangents=J.vertexTangents,_e.toneMapping=J.toneMapping}function Wt(D,J,_e,ue,he){J.isScene!==!0&&(J=ae),Le.resetTextureUnits();const Xe=J.fog,Je=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial?J.environment:null,We=Te===null?N.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:wt.workingColorSpace,Ye=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial&&!ue.envMap||ue.isMeshPhongMaterial&&!ue.envMap,nt=I.get(ue.envMap||Je,Ye),ft=ue.vertexColors===!0&&!!_e.attributes.color&&_e.attributes.color.itemSize===4,bt=!!_e.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),Ze=!!_e.morphAttributes.position,St=!!_e.morphAttributes.normal,$t=!!_e.morphAttributes.color;let zt=ri;ue.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(zt=N.toneMapping);const Nt=_e.morphAttributes.position||_e.morphAttributes.normal||_e.morphAttributes.color,fn=Nt!==void 0?Nt.length:0,je=we.get(ue),vn=R.state.lights;if(mt===!0&&(Et===!0||D!==Se)){const Ht=D===Se&&ue.id===ie;ge.setState(ue,D,Ht)}let Ct=!1,Oi=!1;ue.version===je.__version?je.needsLights&&je.lightsStateVersion!==vn.state.version||he.isBatchedMesh&&je.batching===!1||!he.isBatchedMesh&&je.batching===!0||he.isBatchedMesh&&je.batchingColor===!0&&he._colorsTexture===null||he.isBatchedMesh&&je.batchingColor===!1&&he._colorsTexture!==null||he.isInstancedMesh&&je.instancing===!1||!he.isInstancedMesh&&je.instancing===!0||he.isSkinnedMesh&&je.skinning===!1||!he.isSkinnedMesh&&je.skinning===!0||he.isInstancedMesh&&je.instancingColor===!0&&he.instanceColor===null||he.isInstancedMesh&&je.instancingColor===!1&&he.instanceColor!==null||he.isInstancedMesh&&je.instancingMorph===!0&&he.morphTexture===null||he.isInstancedMesh&&je.instancingMorph===!1&&he.morphTexture!==null||je.envMap!==nt||ue.fog===!0&&je.fog!==Xe||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==ge.numPlanes||je.numIntersection!==ge.numIntersection)||je.vertexAlphas!==ft||je.vertexTangents!==bt||je.morphTargets!==Ze||je.morphNormals!==St||je.morphColors!==$t||je.morphTargetsCount!==fn||je.numLightProbeGrids!==xt(R.state.lightProbeGridArray)?Ct=!0:(je.outputColorSpace!==We||je.toneMapping!==zt)&&(Oi=!0):(Ct=!0,je.__version=ue.version);let dn=je.currentProgram;(Ct===!0||Oi===!0)&&(dn=Oi===!0?ut(ue,J,he,We,zt):yt(ue,J,he),V&&ue.isNodeMaterial&&V.onUpdateProgram(ue,dn,je));let gr=!1,Mi=!1,ki=!1;const Tt=dn.getUniforms(),an=je.uniforms;if(Z.useProgram(dn.program)&&(gr=!0,Mi=!0,ki=!0),ue.id!==ie&&(ie=ue.id,Mi=!0),gr||Se!==D){Z.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Tt.setValue(S,"projectionMatrix",D.projectionMatrix),Tt.setValue(S,"viewMatrix",D.matrixWorldInverse);const tn=Tt.map.cameraPosition;tn!==void 0&&tn.setValue(S,le.setFromMatrixPosition(D.matrixWorld)),pe.logarithmicDepthBuffer&&Tt.setValue(S,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Tt.setValue(S,"isOrthographic",D.isOrthographicCamera===!0),Se!==D&&(Se=D,Mi=!0,ki=!0)}if(je.needsLights&&(vn.state.sunShadowMap.length>0&&Tt.setValue(S,"sunShadowMap",vn.state.sunShadowMap,Le),vn.state.directionalShadowMap.length>0&&Tt.setValue(S,"directionalShadowMap",vn.state.directionalShadowMap,Le),vn.state.spotShadowMap.length>0&&Tt.setValue(S,"spotShadowMap",vn.state.spotShadowMap,Le),vn.state.pointShadowMap.length>0&&Tt.setValue(S,"pointShadowMap",vn.state.pointShadowMap,Le)),he.isSkinnedMesh){Tt.setOptional(S,he,"bindMatrix"),Tt.setOptional(S,he,"bindMatrixInverse");const Ht=he.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),Tt.setValue(S,"boneTexture",Ht.boneTexture,Le))}he.isBatchedMesh&&(Tt.setOptional(S,he,"batchingTexture"),Tt.setValue(S,"batchingTexture",he._matricesTexture,Le),Tt.setOptional(S,he,"batchingIdTexture"),Tt.setValue(S,"batchingIdTexture",he._indirectTexture,Le),Tt.setOptional(S,he,"batchingColorTexture"),he._colorsTexture!==null&&Tt.setValue(S,"batchingColorTexture",he._colorsTexture,Le));const On=_e.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&Ee.update(he,_e,dn),(Mi||je.receiveShadow!==he.receiveShadow)&&(je.receiveShadow=he.receiveShadow,Tt.setValue(S,"receiveShadow",he.receiveShadow)),(ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial)&&ue.envMap===null&&J.environment!==null&&(an.envMapIntensity.value=J.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=Wg()),Mi){if(Tt.setValue(S,"toneMappingExposure",N.toneMappingExposure),je.needsLights&&Fn(an,ki),Xe&&ue.fog===!0&&Ce.refreshFogUniforms(an,Xe),Ce.refreshMaterialUniforms(an,ue,Ne,qe,R.state.transmissionRenderTarget[D.id]),je.needsLights&&je.numLightProbeGrids>0){const Ht=b;let tn=0;for(const oi of R.state.lightProbeGridArray)oi.texture!==null&&(Ht.textures[tn]=oi.texture,Ht.min[tn]=oi.boundingBox.min,Ht.max[tn]=oi.boundingBox.max,Ht.resolution[tn]=oi.resolution,tn++);for(const oi in Ht)Ht[oi].length=tn;an.probesSH.value=Ht.textures,an.probesMin.value=Ht.min,an.probesMax.value=Ht.max,an.probesResolution.value=Ht.resolution}ta.upload(S,Dt(je),an,Le)}if(ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(ta.upload(S,Dt(je),an,Le),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Tt.setValue(S,"center",he.center),Tt.setValue(S,"modelViewMatrix",he.modelViewMatrix),Tt.setValue(S,"normalMatrix",he.normalMatrix),Tt.setValue(S,"modelMatrix",he.matrixWorld),ue.uniformsGroups!==void 0){const Ht=ue.uniformsGroups;for(let tn=0,oi=Ht.length;tn<oi;tn++){const ml=Ht[tn];et.update(ml,dn),et.bind(ml,dn)}}return dn}function Fn(D,J){D.ambientLightColor.needsUpdate=J,D.lightProbe.needsUpdate=J,D.sunLights.needsUpdate=J,D.sunLightShadows.needsUpdate=J,D.directionalLights.needsUpdate=J,D.directionalLightShadows.needsUpdate=J,D.pointLights.needsUpdate=J,D.pointLightShadows.needsUpdate=J,D.spotLights.needsUpdate=J,D.spotLightShadows.needsUpdate=J,D.rectAreaLights.needsUpdate=J,D.hemisphereLights.needsUpdate=J}function Fi(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return re},this.getRenderTarget=function(){return Te},this.setRenderTargetTextures=function(D,J,_e){const ue=we.get(D);ue.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),we.get(D.texture).__webglTexture=J,we.get(D.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:_e,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,J){const _e=we.get(D);_e.__webglFramebuffer=J,_e.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(D,J=0,_e=0){Te=D,oe=J,re=_e;let ue=null,he=!1,Xe=!1;if(D){const We=we.get(D);if(We.__useDefaultFramebuffer!==void 0){Z.bindFramebuffer(S.FRAMEBUFFER,We.__webglFramebuffer),me.copy(D.viewport),De.copy(D.scissor),Ge=D.scissorTest,Z.viewport(me),Z.scissor(De),Z.setScissorTest(Ge),ie=-1;return}else if(We.__webglFramebuffer===void 0)Le.setupRenderTarget(D);else if(We.__hasExternalTextures)Le.rebindTextures(D,we.get(D.texture).__webglTexture,we.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const ft=D.depthTexture;if(We.__boundDepthTexture!==ft){if(ft!==null&&we.has(ft)&&(D.width!==ft.image.width||D.height!==ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Le.setupDepthRenderbuffer(D)}}const Ye=D.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Xe=!0);const nt=we.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(nt[J])?ue=nt[J][_e]:ue=nt[J],he=!0):D.samples>0&&Le.useMultisampledRTT(D)===!1?ue=we.get(D).__webglMultisampledFramebuffer:Array.isArray(nt)?ue=nt[_e]:ue=nt,me.copy(D.viewport),De.copy(D.scissor),Ge=D.scissorTest}else me.copy(ke).multiplyScalar(Ne).floor(),De.copy(tt).multiplyScalar(Ne).floor(),Ge=st;if(_e!==0&&(ue=te),Z.bindFramebuffer(S.FRAMEBUFFER,ue)&&Z.drawBuffers(D,ue),Z.viewport(me),Z.scissor(De),Z.setScissorTest(Ge),he){const We=we.get(D.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+J,We.__webglTexture,_e)}else if(Xe){const We=J;for(let Ye=0;Ye<D.textures.length;Ye++){const nt=we.get(D.textures[Ye]);S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0+Ye,nt.__webglTexture,_e,We)}}else if(D!==null&&_e!==0){const We=we.get(D.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,We.__webglTexture,_e)}ie=-1};function Jn(D){const J=we.get(D);return(J.__readFormat!==D.format||J.__readType!==D.type)&&(J.__readFormat=D.format,J.__readType=D.type,J.__formatReadable=pe.textureFormatReadable(D.format),J.__typeReadable=pe.textureTypeReadable(D.type)),J}this.readRenderTargetPixels=function(D,J,_e,ue,he,Xe,Je,We=0){if(!(D&&D.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=we.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Je!==void 0&&(Ye=Ye[Je],Array.isArray(Ye)&&(Ye=Ye[0])),Ye){Z.bindFramebuffer(S.FRAMEBUFFER,Ye);try{const nt=D.textures[We],ft=nt.format,bt=nt.type;D.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+We);const Ze=Jn(nt);if(Ze.__formatReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ze.__typeReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=D.width-ue&&_e>=0&&_e<=D.height-he&&S.readPixels(J,_e,ue,he,ze.convert(ft),ze.convert(bt),Xe)}finally{const nt=Te!==null?we.get(Te).__webglFramebuffer:null;Z.bindFramebuffer(S.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(D,J,_e,ue,he,Xe,Je,We=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=we.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Je!==void 0&&(Ye=Ye[Je],Array.isArray(Ye)&&(Ye=Ye[0])),Ye)if(J>=0&&J<=D.width-ue&&_e>=0&&_e<=D.height-he){Z.bindFramebuffer(S.FRAMEBUFFER,Ye);const nt=D.textures[We],ft=nt.format,bt=nt.type;D.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+We);const Ze=Jn(nt);if(Ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const St=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,St),S.bufferData(S.PIXEL_PACK_BUFFER,Xe.byteLength,S.STREAM_READ),S.readPixels(J,_e,ue,he,ze.convert(ft),ze.convert(bt),0),S.bindBuffer(S.PIXEL_PACK_BUFFER,null);const $t=Te!==null?we.get(Te).__webglFramebuffer:null;Z.bindFramebuffer(S.FRAMEBUFFER,$t);const zt=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await Kf(S,zt,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,St),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,Xe),S.bindBuffer(S.PIXEL_PACK_BUFFER,null),S.deleteBuffer(St),S.deleteSync(zt),Xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,J=null,_e=0){const ue=Math.pow(2,-_e),he=Math.floor(D.image.width*ue),Xe=Math.floor(D.image.height*ue),Je=J!==null?J.x:0,We=J!==null?J.y:0;Le.setTexture2D(D,0),S.copyTexSubImage2D(S.TEXTURE_2D,_e,0,0,Je,We,he,Xe),Z.unbindTexture()},this.copyTextureToTexture=function(D,J,_e=null,ue=null,he=0,Xe=0){let Je,We,Ye,nt,ft,bt,Ze,St,$t;const zt=D.isCompressedTexture?D.mipmaps[Xe]:D.image;if(_e!==null)Je=_e.max.x-_e.min.x,We=_e.max.y-_e.min.y,Ye=_e.isBox3?_e.max.z-_e.min.z:1,nt=_e.min.x,ft=_e.min.y,bt=_e.isBox3?_e.min.z:0;else{const Tt=Math.pow(2,-he);Je=Math.floor(zt.width*Tt),We=Math.floor(zt.height*Tt),D.isDataArrayTexture?Ye=zt.depth:D.isData3DTexture?Ye=Math.floor(zt.depth*Tt):Ye=1,nt=0,ft=0,bt=0}ue!==null?(Ze=ue.x,St=ue.y,$t=ue.z):(Ze=0,St=0,$t=0);const Nt=ze.convert(J.format),fn=ze.convert(J.type);let je;J.isData3DTexture?(Le.setTexture3D(J,0),je=S.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(Le.setTexture2DArray(J,0),je=S.TEXTURE_2D_ARRAY):(Le.setTexture2D(J,0),je=S.TEXTURE_2D),Z.activeTexture(S.TEXTURE0),Z.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,J.flipY),Z.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),Z.pixelStorei(S.UNPACK_ALIGNMENT,J.unpackAlignment);const vn=Z.getParameter(S.UNPACK_ROW_LENGTH),Ct=Z.getParameter(S.UNPACK_IMAGE_HEIGHT),Oi=Z.getParameter(S.UNPACK_SKIP_PIXELS),dn=Z.getParameter(S.UNPACK_SKIP_ROWS),gr=Z.getParameter(S.UNPACK_SKIP_IMAGES);Z.pixelStorei(S.UNPACK_ROW_LENGTH,zt.width),Z.pixelStorei(S.UNPACK_IMAGE_HEIGHT,zt.height),Z.pixelStorei(S.UNPACK_SKIP_PIXELS,nt),Z.pixelStorei(S.UNPACK_SKIP_ROWS,ft),Z.pixelStorei(S.UNPACK_SKIP_IMAGES,bt);const Mi=D.isDataArrayTexture||D.isData3DTexture,ki=J.isDataArrayTexture||J.isData3DTexture;if(D.isDepthTexture){const Tt=we.get(D),an=we.get(J),On=we.get(Tt.__renderTarget),Ht=we.get(an.__renderTarget);Z.bindFramebuffer(S.READ_FRAMEBUFFER,On.__webglFramebuffer),Z.bindFramebuffer(S.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let tn=0;tn<Ye;tn++)Mi&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,we.get(D).__webglTexture,he,bt+tn),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,we.get(J).__webglTexture,Xe,$t+tn)),S.blitFramebuffer(nt,ft,nt+Je,ft+We,Ze,St,Ze+Je,St+We,S.DEPTH_BUFFER_BIT,S.NEAREST);Z.bindFramebuffer(S.READ_FRAMEBUFFER,null),Z.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(he!==0||D.isRenderTargetTexture||we.has(D)){const Tt=we.get(D),an=we.get(J);Z.bindFramebuffer(S.READ_FRAMEBUFFER,B),Z.bindFramebuffer(S.DRAW_FRAMEBUFFER,j);for(let On=0;On<Ye;On++)Mi?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Tt.__webglTexture,he,bt+On):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Tt.__webglTexture,he),ki?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,an.__webglTexture,Xe,$t+On):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,an.__webglTexture,Xe),he!==0?S.blitFramebuffer(nt,ft,nt+Je,ft+We,Ze,St,Ze+Je,St+We,S.COLOR_BUFFER_BIT,S.NEAREST):ki?S.copyTexSubImage3D(je,Xe,Ze,St,$t+On,nt,ft,Je,We):S.copyTexSubImage2D(je,Xe,Ze,St,nt,ft,Je,We);Z.bindFramebuffer(S.READ_FRAMEBUFFER,null),Z.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else ki?D.isDataTexture||D.isData3DTexture?S.texSubImage3D(je,Xe,Ze,St,$t,Je,We,Ye,Nt,fn,zt.data):J.isCompressedArrayTexture?S.compressedTexSubImage3D(je,Xe,Ze,St,$t,Je,We,Ye,Nt,zt.data):S.texSubImage3D(je,Xe,Ze,St,$t,Je,We,Ye,Nt,fn,zt):D.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,Xe,Ze,St,Je,We,Nt,fn,zt.data):D.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,Xe,Ze,St,zt.width,zt.height,Nt,zt.data):S.texSubImage2D(S.TEXTURE_2D,Xe,Ze,St,Je,We,Nt,fn,zt);Z.pixelStorei(S.UNPACK_ROW_LENGTH,vn),Z.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Ct),Z.pixelStorei(S.UNPACK_SKIP_PIXELS,Oi),Z.pixelStorei(S.UNPACK_SKIP_ROWS,dn),Z.pixelStorei(S.UNPACK_SKIP_IMAGES,gr),Xe===0&&J.generateMipmaps===!0&&J.mipmapsAutoUpdate===!0&&S.generateMipmap(je),Z.unbindTexture()},this.initRenderTarget=function(D){we.get(D).__webglFramebuffer===void 0&&Le.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?Le.setTextureCube(D,0):D.isData3DTexture?Le.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?Le.setTexture2DArray(D,0):Le.setTexture2D(D,0),Z.unbindTexture()},this.resetState=function(){oe=0,re=0,Te=null,Z.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}class qg extends Lu{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new kt;e.deleteAttribute("uv");const t=new yn({side:Sn}),i=new yn,s=new Wu(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new vt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new Pi(e,i,6),l=new Zt;l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),l.updateMatrix(),a.setMatrixAt(0,l.matrix),l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),l.updateMatrix(),a.setMatrixAt(1,l.matrix),l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),l.updateMatrix(),a.setMatrixAt(2,l.matrix),l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),l.updateMatrix(),a.setMatrixAt(3,l.matrix),l.position.set(2.291,-.756,-2.621),l.rotation.set(0,-.286,0),l.scale.set(1.546,1.552,1.496),l.updateMatrix(),a.setMatrixAt(4,l.matrix),l.position.set(-2.193,-.369,-5.547),l.rotation.set(0,.516,0),l.scale.set(3.875,3.487,2.986),l.updateMatrix(),a.setMatrixAt(5,l.matrix),this.add(a);const o=new vt(e,gs(50));o.position.set(-16.116,14.37,8.208),o.scale.set(.1,2.428,2.739),this.add(o);const c=new vt(e,gs(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const u=new vt(e,gs(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);const d=new vt(e,gs(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);const h=new vt(e,gs(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);const m=new vt(e,gs(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function gs(n){return new Wd({color:0,emissive:16777215,emissiveIntensity:n})}function $g(n){let e=n>>>0||2654435769;return function(){e=e+1831565813>>>0;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function xs(n,e=n){const t=document.createElement("canvas");return t.width=n,t.height=e,t}function Yg(n,e,t){const i=new Float32Array(t*t);for(let a=0;a<i.length;a++)i[a]=n();const s=new Float32Array(e*e),r=a=>a*a*(3-2*a);for(let a=0;a<e;a++)for(let l=0;l<e;l++){const o=l/e*t,c=a/e*t,u=Math.floor(o),d=Math.floor(c),h=r(o-u),m=r(c-d),f=i[d%t*t+u%t],v=i[d%t*t+(u+1)%t],x=i[(d+1)%t*t+u%t],p=i[(d+1)%t*t+(u+1)%t];s[a*e+l]=(f*(1-h)+v*h)*(1-m)+(x*(1-h)+p*h)*m}return s}function vc(n,e,t=4,i=5){const s=new Float32Array(e*e);let r=.5,a=0;for(let l=0;l<i;l++){const o=Yg(n,e,t<<l);for(let c=0;c<s.length;c++)s[c]+=o[c]*r;a+=r,r*=.5}for(let l=0;l<s.length;l++)s[l]/=a;return s}function $a(n,e,t=!0){return n.colorSpace=e?wn:mi,t&&(n.wrapS=n.wrapT=rr),n.anisotropy=8,n.generateMipmaps=!0,n.minFilter=xi,n.needsUpdate=!0,n}function ks(n,e,t,{bump:i=2,grime:s=.35}={}){const r=$g(n),a=xs(e),l=xs(e),o=xs(e),c=xs(e),u=a.getContext("2d"),d=l.getContext("2d"),h=o.getContext("2d"),m=c.getContext("2d");d.fillStyle="#808080",d.fillRect(0,0,e,e),t(u,d,h,m,e,r);const f=u.getImageData(0,0,e,e),v=d.getImageData(0,0,e,e),x=h.getImageData(0,0,e,e),p=m.getImageData(0,0,e,e),y=vc(r,e,4,6),T=vc(r,e,32,3),b=new Float32Array(e*e);for(let N=0;N<e*e;N++){const F=1-s*Math.max(0,y[N]*1.6-.45);f.data[N*4]*=F,f.data[N*4+1]*=F,f.data[N*4+2]*=F*.98,b[N]=v.data[N*4]/255+(T[N]-.5)*.06,x.data[N*4]=Math.max(0,Math.min(255,x.data[N*4]+(y[N]-.5)*90+(T[N]-.5)*40))}u.putImageData(f,0,0);const A=new Uint8ClampedArray(e*e*4),R=new Uint8ClampedArray(e*e*4),M=(N,F)=>b[(F+e)%e*e+(N+e)%e];for(let N=0;N<e;N++)for(let F=0;F<e;F++){const V=(M(F+1,N)-M(F-1,N))*i*e/512*4,te=(M(F,N+1)-M(F,N-1))*i*e/512*4,B=1/Math.hypot(V,te,1),j=(N*e+F)*4;A[j]=(-V*B*.5+.5)*255,A[j+1]=(te*B*.5+.5)*255,A[j+2]=(B*.5+.5)*255,A[j+3]=255,R[j]=255,R[j+1]=x.data[j],R[j+2]=p.data[j],R[j+3]=255}const C=xs(e),P=xs(e);return C.getContext("2d").putImageData(new ImageData(A,e,e),0,0),P.getContext("2d").putImageData(new ImageData(R,e,e),0,0),{map:$a(new ea(a),!0),normalMap:$a(new ea(C),!1),orm:$a(new ea(P),!1)}}const Ft=n=>{const e=Math.round(Math.max(0,Math.min(1,n))*255);return`rgb(${e},${e},${e})`};function es(n,e,t,i,s,r=.2,a=1){n.strokeStyle=s,n.lineCap="round";for(let l=0;l<i;l++){const o=e()*t,c=e()*t,u=e()*Math.PI,d=(.02+e()*r)*t;n.lineWidth=a*(.4+e()),n.globalAlpha=.15+e()*.5,n.beginPath(),n.moveTo(o,c),n.lineTo(o+Math.cos(u)*d,c+Math.sin(u)*d),n.stroke()}n.globalAlpha=1}function Go(n,e,t,i,s){for(let r=0;r<i;r++){const a=e()*t,l=e()*t*.6,o=(.15+e()*.5)*t,c=2+e()*10,u=n.createLinearGradient(0,l,0,l+o);u.addColorStop(0,s),u.addColorStop(1,"rgba(0,0,0,0)"),n.globalAlpha=.12+e()*.25,n.fillStyle=u,n.fillRect(a,l,c,o)}n.globalAlpha=1}function Kg(n,e,t,i,s,r){n.fillStyle="#8f9690",n.fillRect(0,0,s,s),t.fillStyle=Ft(.62),t.fillRect(0,0,s,s),i.fillStyle=Ft(.25),i.fillRect(0,0,s,s);const a=s/2;for(let l=0;l<2;l++)for(let o=0;o<2;o++){const c=o*a,u=l*a,d=.88+r()*.2;n.fillStyle=`rgb(${132*d|0},${141*d|0},${136*d|0})`,n.fillRect(c+3,u+3,a-6,a-6);const h=a*.12;e.fillStyle=Ft(.56),e.fillRect(c+h,u+h,a-2*h,a-2*h),e.strokeStyle=Ft(.36),e.lineWidth=3,e.strokeRect(c+h,u+h,a-2*h,a-2*h),n.strokeStyle="rgba(30,34,36,0.5)",n.lineWidth=2,n.strokeRect(c+h,u+h,a-2*h,a-2*h),e.strokeStyle=Ft(.12),e.lineWidth=5,e.strokeRect(c,u,a,a),n.strokeStyle="#1a1d1f",n.lineWidth=4,n.strokeRect(c,u,a,a),t.strokeStyle=Ft(.9),t.lineWidth=6,t.strokeRect(c,u,a,a);for(let m=0;m<6;m++)for(const[f,v]of[[c+h*.5+(a-h)*m/6+6,u+h*.5],[c+h*.5+(a-h)*m/6+6,u+a-h*.5],[c+h*.5,u+h*.5+(a-h)*m/6+6],[c+a-h*.5,u+h*.5+(a-h)*m/6+6]])e.fillStyle=Ft(.85),e.beginPath(),e.arc(f,v,3.2,0,7),e.fill(),n.fillStyle="rgba(200,205,200,0.5)",n.beginPath(),n.arc(f-.6,v-.6,2.2,0,7),n.fill(),i.fillStyle=Ft(.9),i.beginPath(),i.arc(f,v,3.2,0,7),i.fill()}for(let l=0;l<260;l++){const o=r()<.5,c=Math.round(r()*2)*a+(r()-.5)*22,u=r()*s,d=1+r()*5,h=o?c:u,m=o?u:c;n.fillStyle=`rgba(${70+r()*40|0},${72+r()*30|0},${70+r()*30|0},0.9)`,n.beginPath(),n.ellipse(h,m,d,d*(.4+r()),r()*3,0,7),n.fill(),i.fillStyle=Ft(1),i.beginPath(),i.arc(h,m,d,0,7),i.fill(),t.fillStyle=Ft(.35),t.beginPath(),t.arc(h,m,d,0,7),t.fill()}Go(n,r,s,46,"rgba(40,30,22,0.9)"),Go(t,r,s,30,"rgba(255,255,255,0.8)"),es(n,r,s,150,"#cfd3cf",.12,1),es(e,r,s,80,"#606060",.12,1.4)}function Jg(n,e,t,i,s,r){n.fillStyle="#3a3d40",n.fillRect(0,0,s,s),t.fillStyle=Ft(.5),t.fillRect(0,0,s,s),i.fillStyle=Ft(.85),i.fillRect(0,0,s,s);const a=s/2;for(let c=0;c<2;c++)for(let u=0;u<2;u++){const d=u*a,h=c*a,m=.8+r()*.35;n.fillStyle=`rgb(${58*m|0},${61*m|0},${64*m|0})`,n.fillRect(d+2,h+2,a-4,a-4);const f=a/14;for(let v=0;v<14;v++)for(let x=0;x<14;x++){const p=d+(v+.5)*f,y=h+(x+.5)*f,T=(v+x)%2?.785:-.785;e.fillStyle=Ft(.78),e.beginPath(),e.ellipse(p,y,f*.36,f*.11,T,0,7),e.fill(),n.fillStyle="rgba(120,124,128,0.35)",n.beginPath(),n.ellipse(p-.5,y-.5,f*.34,f*.09,T,0,7),n.fill(),t.fillStyle=Ft(.3),t.beginPath(),t.ellipse(p,y,f*.34,f*.1,T,0,7),t.fill()}e.strokeStyle=Ft(.1),e.lineWidth=6,e.strokeRect(d,h,a,a),n.strokeStyle="#0c0d0e",n.lineWidth=5,n.strokeRect(d,h,a,a);for(const[v,x]of[[d+14,h+14],[d+a-14,h+14],[d+14,h+a-14],[d+a-14,h+a-14]])e.fillStyle=Ft(.25),e.beginPath(),e.arc(v,x,5,0,7),e.fill(),n.fillStyle="#17181a",n.beginPath(),n.arc(v,x,5,0,7),n.fill()}const l=n.createLinearGradient(0,0,s,0);l.addColorStop(.2,"rgba(150,155,160,0)"),l.addColorStop(.5,"rgba(150,155,160,0.16)"),l.addColorStop(.8,"rgba(150,155,160,0)"),n.fillStyle=l,n.fillRect(0,0,s,s);const o=t.createLinearGradient(0,0,s,0);o.addColorStop(.2,"rgba(0,0,0,0)"),o.addColorStop(.5,"rgba(0,0,0,0.35)"),o.addColorStop(.8,"rgba(0,0,0,0)"),t.fillStyle=o,t.fillRect(0,0,s,s),es(n,r,s,260,"#8d9196",.2,1.2),es(t,r,s,200,"#202020",.2,2);for(let c=0;c<26;c++){const u=r()*s,d=r()*s,h=6+r()*34,m=n.createRadialGradient(u,d,0,u,d,h);m.addColorStop(0,"rgba(8,8,10,0.55)"),m.addColorStop(1,"rgba(8,8,10,0)"),n.fillStyle=m,n.fillRect(u-h,d-h,2*h,2*h);const f=t.createRadialGradient(u,d,0,u,d,h);f.addColorStop(0,"rgba(0,0,0,0.6)"),f.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=f,t.fillRect(u-h,d-h,2*h,2*h)}}function Zg(n,e,t,i,s,r){n.fillStyle="#6c7074",n.fillRect(0,0,s,s),t.fillStyle=Ft(.42),t.fillRect(0,0,s,s),i.fillStyle=Ft(1),i.fillRect(0,0,s,s);for(let a=0;a<1400;a++){const l=r()*s,o=r()*s,c=20+r()*160,u=90+r()*70|0;n.strokeStyle=`rgba(${u},${u+3},${u+6},0.25)`,n.lineWidth=1,n.beginPath(),n.moveTo(o,l),n.lineTo(o+c,l+(r()-.5)*2),n.stroke()}for(let a=0;a<60;a++){const l=r()*s,o=r()*s,c=8+r()*46,u=n.createRadialGradient(l,o,0,l,o,c);u.addColorStop(0,r()<.5?"rgba(92,52,28,0.5)":"rgba(20,20,24,0.5)"),u.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=u,n.fillRect(l-c,o-c,2*c,2*c);const d=t.createRadialGradient(l,o,0,l,o,c);d.addColorStop(0,"rgba(255,255,255,0.5)"),d.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=d,t.fillRect(l-c,o-c,2*c,2*c)}es(n,r,s,200,"#c2c6ca",.15,1),es(e,r,s,120,"#555",.15,1.5)}function jg(n,e,t,i,s,r){n.fillStyle="#e4e4e0",n.fillRect(0,0,s,s),t.fillStyle=Ft(.55),t.fillRect(0,0,s,s),i.fillStyle=Ft(.1),i.fillRect(0,0,s,s);for(let a=0;a<300;a++){const l=r()*s,o=r()*s,c=.8+r()*r()*r()*9;n.fillStyle=`rgba(${100+r()*50|0},${100+r()*45|0},${104+r()*40|0},0.8)`,n.beginPath(),n.ellipse(l,o,c,c*(.3+r()*.8),r()*3,0,7),n.fill(),i.fillStyle=Ft(.5),i.beginPath(),i.arc(l,o,c,0,7),i.fill(),e.fillStyle=Ft(.42),e.beginPath(),e.arc(l,o,c,0,7),e.fill(),t.fillStyle=Ft(.3),t.beginPath(),t.arc(l,o,c,0,7),t.fill()}Go(n,r,s,30,"rgba(50,38,28,0.8)"),es(n,r,s,200,"#70706c",.1,1)}function Qg(n,e,t,i,s,r){n.fillStyle="#d8d6d0",n.fillRect(0,0,s,s),t.fillStyle=Ft(.92),t.fillRect(0,0,s,s),i.fillStyle=Ft(0),i.fillRect(0,0,s,s);for(let a=0;a<s;a+=4)e.fillStyle=Ft(.44),e.fillRect(0,a,s,2);for(let a=0;a<s;a+=4)e.fillStyle="rgba(160,160,160,0.5)",e.fillRect(a,0,2,s);for(let a=0;a<40;a++){const l=r()*s,o=6+r()*20,c=e.createLinearGradient(0,l,0,l+o);c.addColorStop(0,"rgba(255,255,255,0)"),c.addColorStop(.5,"rgba(255,255,255,0.5)"),c.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=c,e.fillRect(0,l,s,o),n.fillStyle="rgba(0,0,0,0.07)",n.fillRect(0,l+o*.6,s,o*.5)}for(let a=0;a<50;a++){const l=r()*s,o=r()*s,c=10+r()*50,u=n.createRadialGradient(l,o,0,l,o,c);u.addColorStop(0,"rgba(40,34,28,0.3)"),u.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=u,n.fillRect(l-c,o-c,2*c,2*c)}}let Br=null;function sf(){return Br||(Br={panel:ks(11,1024,Kg,{bump:2.4}),floor:ks(23,1024,Jg,{bump:3,grime:.45}),metal:ks(37,512,Zg,{bump:1.2}),paint:ks(41,512,jg,{bump:1.6}),cloth:ks(53,256,Qg,{bump:2.2,grime:.2})},Br)}const _c={neonViolet:14242287,turquoise:8702925},na=6,ex={uWake:{value:0},uTime:{value:0},uUzQ:{value:2},uUzOff:{value:0},uAO:{value:.5},uWakeA:{value:new ot(_c.turquoise)},uWakeB:{value:new ot(_c.neonViolet)}},tx=`
attribute vec3 aFlat; attribute vec3 aFlatN;
varying vec3 vFlat; varying vec3 vFlatN;
`,nx=`
varying vec3 vFlat; varying vec3 vFlatN;
uniform vec4 uFrost[${na}];
uniform vec3 uRoomMin; uniform vec3 uRoomMax;
uniform float uWake; uniform float uTime; uniform float uUzQ; uniform float uUzOff; uniform float uAO;
uniform vec3 uWakeA; uniform vec3 uWakeB;
float uzHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float uzNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(uzHash(i), uzHash(i + vec2(1, 0)), f.x), mix(uzHash(i + vec2(0, 1)), uzHash(i + vec2(1, 1)), f.x), f.y);
}
// Линии треугольной решётки: три семейства под 120 градусов. Отрезок между двумя узлами
// включён, если его номер по периодическому правилу (период 3) ниже порога gate.
// Линия сглажена по площади пикселя и ГАСНЕТ вдали (far): издали рисунка нет, есть иней.
// dx, dy: производные p по экрану, посчитанные В НАЧАЛЕ шейдера. Внутри веток и после раннего выхода
// fwidth() не определён: на GPU Apple он отдавал мусор плитками, и стена рассыпалась на квадраты.
float uzLines(vec2 p, float w, float gate, float breathe, vec2 dx, vec2 dy) {
  float acc = 0.0;
  for (int k = 0; k < 3; k++) {
    float an = float(k) * 2.0943951;
    vec2 n = vec2(cos(an), sin(an)), t = vec2(-n.y, n.x);
    float a = dot(p, n), b = dot(p, t);
    float id = floor(a + 0.5), d = abs(a - id);
    float sg = floor(0.8660254 * b - 0.5 * id);
    float h = uzHash(vec2(mod(id, 3.0) + float(k) * 3.0, mod(sg, 3.0)));
    float g = gate + breathe * sin(uTime * 0.35 + h * 6.2831);
    float F = max(abs(dot(dx, n)) + abs(dot(dy, n)), 1e-4);
    float box = max(0.0, min(d + 0.5 * F, w) - max(d - 0.5 * F, -w)) / F;
    acc = max(acc, step(h, g) * box * (1.0 - smoothstep(0.02, 0.07, F)));
  }
  return acc;
}
// узел решётки: расстояние до ближайшей вершины
float uzNode(vec2 p) {
  vec2 q = vec2(p.x - p.y * 0.5773503, p.y * 1.1547005);
  vec2 i = floor(q + 0.5);
  float best = 9.0;
  for (int dx = -1; dx <= 1; dx++) for (int dy = -1; dy <= 1; dy++) {
    vec2 c = i + vec2(float(dx), float(dy));
    best = min(best, length(p - vec2(c.x + c.y * 0.5, c.y * 0.8660254)));
  }
  return best;
}
// Затенение в углах помещения: аналитически, по расстоянию до пола, потолка и стен.
// Плоскость, параллельная самой поверхности, не считается. Дёшево и без шума, в отличие от
// экранного затенения, и «сажает» на пол и стены всё, что к ним примыкает.
float roomAO() {
  vec3 dmin = max(vFlat - uRoomMin, 0.0), dmax = max(uRoomMax - vFlat, 0.0), an = abs(vFlatN);
  vec3 k = 1.0 - uAO * (exp(-dmin * 3.2) + exp(-dmax * 3.2) * 0.8);
  return mix(k.x, 1.0, an.x) * mix(k.y, 1.0, an.y) * mix(k.z, 1.0, an.z);
}
// Узор. cov: сколько поверхности подо льдом; line: рисунок во льду; hgt: высота льда (рельеф);
// glow: свечение проснувшегося.
void uzorEval(out float cov, out float line, out float hgt, out vec3 glow) {
  cov = 0.0; line = 0.0; hgt = 0.0; glow = vec3(0.0);
  // Проекция и её экранные производные считаются ДО любого условия (см. uzLines).
  vec3 an = abs(vFlatN);
  vec2 p = an.y > an.x && an.y > an.z ? vFlat.xz : (an.x > an.z ? vFlat.zy : vFlat.xy);
  vec2 dpx = dFdx(p), dpy = dFdy(p);
  float fw = max(length(dpx), length(dpy));        // сколько метров поверхности в одном пикселе
  if (uUzOff > 0.5) return;
  // РАННИЙ ВЫХОД: пиксель вне очагов своего помещения не платит ни за шум, ни за линии
  float m0 = 0.0;
  for (int i = 0; i < ${na}; i++) {
    vec3 d = vFlat - uFrost[i].xyz; float r = uFrost[i].w * (1.0 + 0.4 * uWake) * 1.45;
    m0 = max(m0, 1.0 - dot(d, d) / (r * r));
  }
  if (m0 <= 0.0) return;
  float n1 = uzNoise(p * 2.3), n2 = uzNoise(p * 7.1), n3 = uzNoise(p * 23.0);
  float nz = n1 * 0.55 + n2 * 0.3 + n3 * 0.15;
  float m = 0.0;
  for (int i = 0; i < ${na}; i++) {
    float r = uFrost[i].w * (1.0 + 0.4 * uWake);
    float d = length(vFlat - uFrost[i].xyz) / r;
    m = max(m, 1.0 - smoothstep(0.15, 1.0, d + (nz - 0.5) * 1.2));
  }
  if (m <= 0.001) return;
  float soft = smoothstep(0.0, 0.4, m);
  // жилы роста: гребни медленного шума. Вдоль них рисунок густой, между ними пустоты
  float rg = 1.0 - abs(2.0 * uzNoise(p * 0.85 + vec2(n1, n2) * 0.9 + 3.7) - 1.0);
  float trunk = smoothstep(0.80, 0.97, rg), nearT = smoothstep(0.45, 0.92, rg);
  // медленный поворот и дыхание рисунка у проснувшегося
  float rot = uWake * 0.06 * sin(uTime * 0.11);
  mat2 rm = mat2(cos(rot), -sin(rot), sin(rot), cos(rot));
  vec2 pr = rm * p, drx = rm * dpx, dry = rm * dpy;
  float br = 0.08 * uWake;
  // рисунок во льду: чем ближе к жиле, тем плотнее; период мотива три ячейки
  float dens = 0.62 * nearT;     // вдали от жил рисунка нет вовсе: чистая изморозь
  float l1 = uzLines(pr / 0.07, 0.03, min(m * 1.3, dens + 0.06), br, drx / 0.07, dry / 0.07);
  float l2 = 0.0, l3 = 0.0;
  if (uUzQ > 0.5) l2 = uzLines(pr / 0.0233333, 0.045, min(m * 1.1, dens), br, drx / 0.0233333, dry / 0.0233333);
  if (uUzQ > 1.5) l3 = uzLines(pr / 0.0077777, 0.07, min(m, dens - 0.08), br, drx / 0.0077777, dry / 0.0077777);
  line = max(l1, max(l2 * 0.9, l3 * 0.75)) * soft * step(0.05, m);
  // изморозь: зернистая, с наплывом по краю пятна и кристаллами-искрами
  // Зерно гаснет, когда его ячейка становится мельче пикселя: каждая октава по своей частоте и по обеим
  // осям экрана. Раньше гашение смотрело на одну ось и отпускало зерно в 1,6 см при пикселе 1,4 см:
  // на стене в семи метрах получался муар крупными квадратами, менявшийся от поворота взгляда.
  float gf = clamp(1.0 - fw * 61.0 * 1.5, 0.0, 1.0), gf2 = clamp(1.0 - fw * 143.0 * 1.5, 0.0, 1.0);
  // Две октавы шума повёрнуты на разные углы: у шума на прямой сетке зерно читалось квадратами,
  // потому что обе октавы лежали по одним осям.
  mat2 r1 = mat2(0.8253, -0.5646, 0.5646, 0.8253), r2 = mat2(-0.3233, -0.9463, 0.9463, -0.3233);
  float grain = uzNoise(r1 * p * 61.0) * mix(0.5, uzNoise(r2 * p * 143.0 + 5.3), gf2) * gf + 0.25 * (1.0 - gf);
  float rim = smoothstep(0.0, 0.25, m) * (1.0 - smoothstep(0.25, 0.7, m));
  float body = smoothstep(0.38, 0.72, nz + 0.35 * m);      // лёд лежит пятнами, между ними голый металл
  cov = clamp(body * (0.35 + 0.5 * nz) + rim * 0.22 * body + grain * 0.5 * body, 0.0, 1.0) * soft;
  float sp = 0.0;
  if (uUzQ > 1.5) {
    // кристаллы-иглы: в каждой клетке повёрнутой сетки игла своего направления (раньше искра была
    // целой квадратной клеткой, и вблизи лёд выглядел мозаикой)
    vec2 q = r1 * p * 250.0, c = floor(q), f = fract(q) - 0.5;
    float an = uzHash(c) * 6.2832; vec2 dr = vec2(cos(an), sin(an));
    float needle = smoothstep(0.46, 0.12, abs(dot(f, dr))) * smoothstep(0.075, 0.018, abs(dot(f, vec2(-dr.y, dr.x))));
    sp = step(0.86, uzHash(c + 3.1)) * needle * clamp(1.0 - fw * 250.0 * 1.5, 0.0, 1.0) * (0.55 + 0.45 * sin(uzHash(c + 7.0) * 40.0 + dot(vFlat, vec3(31.0, 17.0, 23.0)) + uTime * 0.6));
  }
  // высота: наросты изморози, в них прорезаны гладкие каналы рисунка
  hgt = cov * (0.55 + 0.45 * n3 + 0.5 * grain) - line * 0.7;
  cov = clamp(cov + sp * 0.6, 0.0, 1.0);
  // проснувшийся: светятся ЖИЛЫ и то, что к ним примыкает; между жилами темно
  if (uWake > 0.001) {
    float grow = smoothstep(0.0, 0.6, m * 1.4 - (1.0 - uWake) * 0.9 + 0.12 * sin(uTime * 0.23 + n1 * 6.0));
    float v0 = uzLines(pr / 0.21, 0.02, trunk * 0.95 + nearT * 0.25, br, drx / 0.21, dry / 0.21);
    float nd = uzNode(pr / 0.21);
    float F0 = (abs(drx.x) + abs(dry.x)) / 0.21;
    float node = (1.0 - smoothstep(0.05, 0.05 + F0 * 1.5, abs(nd - 0.16))) * trunk + (1.0 - smoothstep(0.035, 0.05 + F0, nd)) * nearT;
    float ph = dot(pr, vec2(3.1, 2.3)) - uTime * 0.7;
    float wave = 0.5 + 0.5 * sin(ph) * sin(ph * 0.37 + 1.3);
    vec3 wc = mix(uWakeA, uWakeB, 0.5 + 0.5 * sin(ph * 0.21 + uTime * 0.13 + n1 * 3.0));
    float halo = trunk * (0.10 + 0.25 * wave);
    glow = wc * (v0 * (1.4 + 3.2 * wave) + node * (1.0 + 2.0 * wave) + line * nearT * (0.5 + wave) + halo) * uWake * grow * soft;
    line = max(line, max(v0, node) * grow);
  }
}
`,ix=`
#include <normal_fragment_maps>
float uzAO = roomAO();
{
  float uzCov; float uzLine; float uzH; vec3 uzGlow;
  uzorEval(uzCov, uzLine, uzH, uzGlow);
  // производные для рельефа льда: тоже до условия
  vec3 uzSx = dFdx(-vViewPosition), uzSy = dFdy(-vViewPosition);
  float uzHx = dFdx(uzH), uzHy = dFdy(uzH);
  if (uzCov > 0.0 || uzLine > 0.0) {
    // лёд: белёсая изморозь, в ней тёмные стеклянные каналы рисунка со светлой кромкой
    vec3 rime = vec3(0.56, 0.76, 1.0);
    vec3 glass = vec3(0.10, 0.22, 0.34);
    vec3 ice = mix(rime, glass, uzLine * 0.85);
    ice = mix(ice, vec3(0.03, 0.04, 0.07), uWake * 0.85);
    diffuseColor.rgb = mix(diffuseColor.rgb, ice, uzCov * 0.92);
    roughnessFactor = mix(roughnessFactor, mix(0.62, 0.10, uzLine), uzCov);
    metalnessFactor *= 1.0 - uzCov * 0.9;
    if (uUzQ > 0.5) {
      // рельеф по производным высоты: у льда появляется толщина, каналы читаются как прорезанные
      vec3 r1 = cross(uzSy, normal), r2 = cross(normal, uzSx);
      float det = dot(uzSx, r1);
      vec3 grad = sign(det) * (uzHx * r1 + uzHy * r2);
      normal = normalize(abs(det) * normal - grad * 0.012);
    }
    // лёд холодный и под тёплым светом хвоста: собственное слабое свечение в синеву.
    // Это и первый намёк игроку: иней, который чуть светится сам, не иней.
    totalEmissiveRadiance += vec3(0.036, 0.085, 0.15) * uzCov * (1.0 - uWake) + uzGlow;
  }
  diffuseColor.rgb *= mix(1.0, uzAO, 0.45);
}
`,sx=`
#include <aomap_fragment>
reflectedLight.indirectDiffuse *= uzAO;
reflectedLight.indirectSpecular *= uzAO;
`;function rx(n){Object.assign(n.uniforms,ex,this.userData.room),n.vertexShader=tx+n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vFlat = aFlat; vFlatN = aFlatN;`),n.fragmentShader=nx+n.fragmentShader.replace("#include <normal_fragment_maps>",ix).replace("#include <aomap_fragment>",sx)}function ax(n,e){return{uFrost:{value:Array.from({length:na},()=>new qt(0,-100,0,.001))},uRoomMin:{value:new ee(...n)},uRoomMax:{value:new ee(...e)}}}function Bs(n,e,{color:t=16777215,rough:i=1,metal:s=1,normal:r=1}={}){const a=sf()[n],l=new yn({map:a.map,normalMap:a.normalMap,roughnessMap:a.orm,metalnessMap:a.orm,color:t,roughness:i,metalness:s,vertexColors:!0});return l.normalScale.set(r,r),l.userData.room=e,l.onBeforeCompile=rx,l.customProgramCacheKey=()=>"uzor2",l}const ua={wall:["panel",16777215],wallDark:["panel",6120555],ceil:["panel",4014663],floor:["floor",16777215],steel:["metal",16777215],steelDark:["metal",4869458],bronze:["metal",12092746],copper:["metal",13662538],weld:["metal",15133938],orange:["paint",13132830],yellow:["paint",13214247],teal:["paint",3112838],white:["paint",14276559],paper:["paint",6118229],red:["paint",9316898],rubber:["cloth",1776671],cloth:["cloth",7305827],clothBlue:["cloth",3952491],clothWarm:["cloth",10123861]};function Wi(n,e=1,t=null){const i=new As({color:new ot(n).multiplyScalar(e),map:t,toneMapped:!1});return i.userData.unlit=!0,i.userData.noShadow=!0,i}function ox(n){return{panel:Bs("panel",n),floor:Bs("floor",n,{rough:.85}),metal:Bs("metal",n),paint:Bs("paint",n),cloth:Bs("cloth",n)}}const zn={max:.45,thin:.012,vol:.035,gap:.014,touch:.006,item:.6},Js=n=>[n.x1-n.x0,n.y1-n.y0,n.z1-n.z0],lx=n=>{const[e,t,i]=Js(n);return Math.max(e,t,i)<=zn.max&&t>=zn.thin&&Math.min(e,i)>=zn.thin&&e*t*i<=zn.vol};function cx(n,{floors:e=[0]}={}){const i=new Map,s=(p,y)=>p+","+y,r=(p,y)=>{if(!(p.x1-p.x0>60||p.z1-p.z0>200))for(let T=Math.floor((p.x0-.01)/.5);T<=Math.floor((p.x1+.01)/.5);T++)for(let b=Math.floor((p.z0-.01)/.5);b<=Math.floor((p.z1+.01)/.5);b++)y(s(T,b))},a=[];n.forEach((p,y)=>{p._n=y,p._small=lx(p),p.x1-p.x0>60||p.z1-p.z0>200?a.push(p):r(p,T=>(i.get(T)||i.set(T,[]).get(T)).push(p))});const l=p=>{const y=new Set(a);return r(p,T=>{for(const b of i.get(T)||[])y.add(b)}),y.delete(p),y},o=[],c=new Set;for(const p of n){if(!p._small||p.fix||p.loose||p.soft===!1)continue;const y=(p.x0+p.x1)/2,T=(p.y0+p.y1)/2,b=(p.z0+p.z1)/2,A=(p.x1-p.x0)*(p.z1-p.z0);let R=e.some(P=>Math.abs(p.y0-P)<=zn.gap),M=!1,C=!1;for(const P of l(p)){const N=(P.x1-P.x0)*(P.z1-P.z0),F=y>=P.x0-.005&&y<=P.x1+.005&&b>=P.z0-.005&&b<=P.z1+.005;if(F&&!P._small&&T>P.y0&&T<P.y1-.004){M=!0;break}F&&!R&&Math.abs(p.y0-P.y1)<=zn.gap&&(!P._small||N>=A*2.5)&&(R=!0),Math.abs(P.y0-p.y1)<=zn.gap&&N>A*1.5&&P.x0<p.x1&&P.x1>p.x0&&P.z0<p.z1&&P.z1>p.z0&&(C=!0)}M||C||(o.push(p),R&&c.add(p))}const u=new Map(o.map(p=>[p,p])),d=new Map(o.map(p=>[p,{x0:p.x0,x1:p.x1,y0:p.y0,y1:p.y1,z0:p.z0,z1:p.z1}])),h=p=>{for(;u.get(p)!==p;)u.set(p,u.get(u.get(p))),p=u.get(p);return p},m=new Set(o),f=zn.touch;for(const p of o)for(const y of l(p)){if(!m.has(y)||y._n<p._n||p.x0>y.x1+f||y.x0>p.x1+f||p.y0>y.y1+f||y.y0>p.y1+f||p.z0>y.z1+f||y.z0>p.z1+f||p.solo&&y.solo&&c.has(p)&&c.has(y))continue;const T=h(p),b=h(y);if(T===b)continue;const A=d.get(T),R=d.get(b),M={x0:Math.min(A.x0,R.x0),x1:Math.max(A.x1,R.x1),y0:Math.min(A.y0,R.y0),y1:Math.max(A.y1,R.y1),z0:Math.min(A.z0,R.z0),z1:Math.max(A.z1,R.z1)};Math.max(...Js(M))>zn.item||(u.set(b,T),d.set(T,M))}const v=new Map;for(const p of o){const y=h(p);(v.get(y)||v.set(y,[]).get(y)).push(p)}const x=[];for(const p of v.values()){if(!p.some(R=>c.has(R)))continue;const y=d.get(h(p[0])),T=new Set(p);let b=!1;const A=[];for(const R of p)for(const M of l(R))if(!(T.has(M)||m.has(M)||M.fix||M.loose||Math.max(...Js(M))>zn.max)&&!(R.x0>M.x1+f||M.x0>R.x1+f||R.y0>M.y1+f||M.y0>R.y1+f||R.z0>M.z1+f||M.z0>R.z1+f)){if(M.soft===!1){b=!0;break}M.y0>=y.y0+.008&&!M._small&&Math.max(Math.max(y.x1,M.x1)-Math.min(y.x0,M.x0),Math.max(y.z1,M.z1)-Math.min(y.z0,M.z0))<=zn.item&&(T.add(M),A.push(M))}if(!b){for(const R of A)y.x0=Math.min(y.x0,R.x0),y.x1=Math.max(y.x1,R.x1),y.y1=Math.max(y.y1,R.y1),y.z0=Math.min(y.z0,R.z0),y.z1=Math.max(y.z1,R.z1);x.push({parts:[...p,...A].map(R=>R._n),box:y})}}for(let p=x.length-1;p>=0;p--){const y=x[p].box;if(Math.max(...Js(y))>.07)continue;const T=(y.x0+y.x1)/2,b=(y.z0+y.z1)/2,A=x.find(R=>R!==x[p]&&Math.max(...Js(R.box))>.07&&T>R.box.x0&&T<R.box.x1&&b>R.box.z0&&b<R.box.z1&&y.y0>=R.box.y0+.015&&y.y0<=R.box.y1+zn.gap+.01);A&&(A.parts.push(...x[p].parts),A.box.y1=Math.max(A.box.y1,y.y1),x.splice(p,1))}return x.sort((p,y)=>p.parts[0]-y.parts[0]),x}function ux(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},l=n[0].morphTargetsRelative,o=new rn;o.morphTargetsRelative=l;let c=0;for(let u=0;u<n.length;++u){const d=n[u];let h=0,m=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(l!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[f].length!==n[0].morphAttributes[f].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+f+'" morph attribute.'),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f]),m++}if(m!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;o.addGroup(c,f,u),c+=f}}if(t){let u=0;const d=[];for(let h=0;h<n.length;++h){const m=n[h].index;for(let f=0;f<m.count;++f)d.push(m.getX(f)+u);u+=n[h].attributes.position.count}o.setIndex(d)}for(const u in r){const d=yc(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;o.setAttribute(u,d)}for(const u in a){const d=a[u][0].length;if(d!==0){o.morphAttributes=o.morphAttributes||{},o.morphAttributes[u]=[];for(let h=0;h<d;++h){const m=[];for(let v=0;v<a[u].length;++v)m.push(a[u][v][h]);const f=yc(m);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;o.morphAttributes[u].push(f)}}}return o}function yc(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){const u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const a=new e(r),l=new bn(a,t,i);let o=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const d=o/t;for(let h=0,m=u.count;h<m;h++)for(let f=0;f<t;f++){const v=u.getComponent(h,f);l.setComponent(h+d,f,v)}}else a.set(u.array,o);o+=u.count*t}return s!==void 0&&(l.gpuType=s),l}const Hs=new ee;function Nn(n,e,t,i,s,r){const a=2*Math.PI*s/4,l=Math.max(r-2*s,0),o=Math.PI/4;Hs.copy(e),Hs[i]=0,Hs.normalize();const c=.5*a/(a+l),u=1-Hs.angleTo(n)/o;return Math.sign(Hs[t])===1?u*c:l/(a+l)+c+c*(1-u)}class fl extends kt{constructor(e=1,t=1,i=1,s=2,r=.1){const a=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},a===1)return;const l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;const o=new ee,c=new ee,u=new ee(e,t,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,m=this.attributes.uv.array,f=d.length/6,v=new ee,x=.5/a;for(let p=0,y=0;p<d.length;p+=3,y+=2)switch(o.fromArray(d,p),c.copy(o),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),d[p+0]=u.x*Math.sign(o.x)+c.x*r,d[p+1]=u.y*Math.sign(o.y)+c.y*r,d[p+2]=u.z*Math.sign(o.z)+c.z*r,h[p+0]=c.x,h[p+1]=c.y,h[p+2]=c.z,Math.floor(p/f)){case 0:v.set(1,0,0),m[y+0]=Nn(v,c,"z","y",r,i),m[y+1]=1-Nn(v,c,"y","z",r,t);break;case 1:v.set(-1,0,0),m[y+0]=1-Nn(v,c,"z","y",r,i),m[y+1]=1-Nn(v,c,"y","z",r,t);break;case 2:v.set(0,1,0),m[y+0]=1-Nn(v,c,"x","z",r,e),m[y+1]=Nn(v,c,"z","x",r,i);break;case 3:v.set(0,-1,0),m[y+0]=1-Nn(v,c,"x","z",r,e),m[y+1]=1-Nn(v,c,"z","x",r,i);break;case 4:v.set(0,0,1),m[y+0]=1-Nn(v,c,"x","y",r,e),m[y+1]=1-Nn(v,c,"y","x",r,t);break;case 5:v.set(0,0,-1),m[y+0]=Nn(v,c,"x","y",r,e),m[y+1]=1-Nn(v,c,"y","x",r,t);break}}static fromJSON(e){return new fl(e.width,e.height,e.depth,e.segments,e.radius)}}const tr=42,Hr=new ot,fx=new ee(1,0,0);function rf(n){const e=n.z/tr,t=tr-n.y;return n.set(n.x,tr-t*Math.cos(e),t*Math.sin(e))}function Ms(n,e=new cn){return e.setFromAxisAngle(fx,-n/tr)}function ei(n,e,t,i=new ee){return rf(i.set(n,e,t))}function dx(n){const e=n.attributes.position,t=n.attributes.normal,i=new Float32Array(e.count*3),s=new Float32Array(e.count*3),r=new ee;for(let a=0;a<e.count;a++){const l=e.getX(a),o=e.getY(a),c=e.getZ(a);i[a*3]=l,i[a*3+1]=o,i[a*3+2]=c;const u=t.getX(a),d=t.getY(a),h=t.getZ(a);s[a*3]=u,s[a*3+1]=d,s[a*3+2]=h,rf(r.set(l,o,c)),e.setXYZ(a,r.x,r.y,r.z);const m=c/tr,f=Math.cos(m),v=Math.sin(m);t.setXYZ(a,u,d*f+h*v,-d*v+h*f)}return n.setAttribute("aFlat",new bn(i,3)),n.setAttribute("aFlatN",new bn(s,3)),n.computeBoundingSphere(),n.computeBoundingBox(),n}new Lt;const hx=new gn,px=new ee,mx=new ee(1,1,1),Mc=[],gx={floors:[0]};function xx(n,e){const t=[],i=(u,d,h,m,f,v)=>{d-u>1e-4&&m-h>1e-4&&v-f>1e-4&&t.push({x0:u,x1:d,y0:h,y1:m,z0:f,z1:v})},s=Math.max(n.x0,e.x0),r=Math.min(n.x1,e.x1),a=Math.max(n.y0,e.y0),l=Math.min(n.y1,e.y1),o=Math.max(n.z0,e.z0),c=Math.min(n.z1,e.z1);return s>=r||a>=l||o>=c?[n]:(i(n.x0,s,n.y0,n.y1,n.z0,n.z1),i(r,n.x1,n.y0,n.y1,n.z0,n.z1),i(s,r,n.y0,n.y1,n.z0,o),i(s,r,n.y0,n.y1,c,n.z1),i(s,r,n.y0,a,o,c),i(s,r,l,n.y1,o,c),t)}class ti{constructor({record:e=!1}={}){this.bins=new Map,this.record=e,this.fix="",this.solo=!1,this.parts=[]}fixed(e,t){const i=this.fix;this.fix=e||"закреплено";try{t()}finally{this.fix=i}return this}note(e,t){if(!this.record)return;t.computeBoundingBox();const i=t.boundingBox,s=ua[e],r={mat:e,fix:this.fix,solo:this.solo,soft:!!s,at:ti.trace?ti.trace():"",x0:i.min.x,x1:i.max.x,y0:i.min.y,y1:i.max.y,z0:i.min.z,z1:i.max.z};this.parts.push({p:r,g:t,bin:s?s[0]:e})}takeLoose(){const e=this.parts,t=cx(e.map(s=>s.p),{floors:gx.floors}),i=new Set;for(const s of t){const r=s.box,a=(r.x0+r.x1)/2,l=(r.y0+r.y1)/2,o=(r.z0+r.z1)/2,c="lz"+Mc.length,u=s.parts.map(d=>{const h=e[d];return i.add(h.g),h.p.loose=c,h.g.translate(-a,-l,-o),{mat:h.p.mat,faktura:h.bin,g:h.g}});Mc.push({id:c,x:a,y:l,z:o,h:[Math.max(.02,(r.x1-r.x0)/2),Math.max(.012,(r.y1-r.y0)/2),Math.max(.02,(r.z1-r.z0)/2)],vol:(r.x1-r.x0)*(r.y1-r.y0)*(r.z1-r.z0),geos:u})}if(i.size)for(const[s,r]of[...this.bins]){const a=r.filter(l=>!i.has(l));a.length?this.bins.set(s,a):this.bins.delete(s)}this.parts=[]}add(e,t,i){let s=t.index?t.toNonIndexed():t.clone();for(const a of Object.keys(s.attributes))["position","normal","uv"].includes(a)||s.deleteAttribute(a);s.attributes.uv||s.setAttribute("uv",new bn(new Float32Array(s.attributes.position.count*2),2)),i&&s.applyMatrix4(i),this.note(e,s);const r=ua[e];if(r){Hr.set(r[1]);const a=s.attributes.position.count,l=new Float32Array(a*3);for(let o=0;o<a;o++)l[o*3]=Hr.r,l[o*3+1]=Hr.g,l[o*3+2]=Hr.b;s.setAttribute("color",new bn(l,3)),e=r[0]}return this.bins.has(e)||this.bins.set(e,[]),this.bins.get(e).push(s),this}addColored(e,t){const i=t.index?t.toNonIndexed():t.clone();for(const s of Object.keys(i.attributes))["position","normal","uv","color"].includes(s)||i.deleteAttribute(s);if(i.attributes.uv||i.setAttribute("uv",new bn(new Float32Array(i.attributes.position.count*2),2)),!i.attributes.color){const s=i.attributes.position.count,r=new Float32Array(s*3).fill(1);i.setAttribute("color",new bn(r,3))}return this.bins.has(e)||this.bins.set(e,[]),this.bins.get(e).push(i),this}mtx(e,t,i,s=0,r=0,a=0,l=1,o=1,c=1){return new Lt().compose(px.set(e,t,i),new cn().setFromEuler(hx.set(s,r,a,"YXZ")),mx.set(l,o,c)).clone()}box(e,t,i,s,r,a,l,{rx:o=0,ry:c=0,rz:u=0,tile:d=2,uo:h=0,vo:m=0,bevel:f}={}){const v=o||c||u;if(ti.holes&&ti.holes.length&&!v&&!this.noHoles){const P={x0:t-r/2,x1:t+r/2,y0:i-a/2,y1:i+a/2,z0:s-l/2,z1:s+l/2},N=ti.holes.filter(F=>F.x0<P.x1&&F.x1>P.x0&&F.y0<P.y1&&F.y1>P.y0&&F.z0<P.z1&&F.z1>P.z0);if(N.length){let F=[P];for(const V of N)F=F.flatMap(te=>xx(te,V));this.noHoles=!0;try{for(const V of F)this.box(e,(V.x0+V.x1)/2,(V.y0+V.y1)/2,(V.z0+V.z1)/2,V.x1-V.x0,V.y1-V.y0,V.z1-V.z0,{tile:d,uo:h,vo:m,bevel:0})}finally{this.noHoles=!1}return this}}const x=v?1:Math.max(1,Math.ceil(l/.8)),p=v&&Math.abs(Math.abs(c)-Math.PI/2)<.01?Math.max(1,Math.ceil(r/.8)):1,y=Math.min(r,a,l),T=Math.max(r,a,l);f===void 0&&(f=y>=.1&&T<=2.2&&x<=3?Math.min(.022,y*.14):0);const b=f?new fl(r,a,l,1,f):new kt(r,a,l,p,1,x),A=b.index?b.toNonIndexed():b,R=A.attributes.position,M=A.attributes.normal,C=A.attributes.uv;for(let P=0;P<R.count;P++){const N=R.getX(P)+(v?0:t),F=R.getY(P)+(v?0:i),V=R.getZ(P)+(v?0:s),te=Math.abs(M.getX(P)),B=Math.abs(M.getY(P));te>.5?C.setXY(P,V/d+h,F/d+m):B>.5?C.setXY(P,N/d+h,V/d+m):C.setXY(P,N/d+h,F/d+m)}return this.add(e,A,this.mtx(t,i,s,o,c,u))}slab(e,t,i,s,r,a,l,o){return this.box(e,(t+r)/2,(i+a)/2,(s+l)/2,Math.abs(r-t),Math.abs(a-i),Math.abs(l-s),o)}pipe(e,t,i,s,{seg:r=12,cap:a=!1}={}){const l=new ee(...t),o=new ee(...i),c=l.distanceTo(o),u=new Ji(s,s,c,r,Math.max(1,Math.ceil(c/.8)),!a),d=u.attributes.uv;for(let m=0;m<d.count;m++)d.setXY(m,d.getX(m)*Math.max(1,Math.round(s*12)),d.getY(m)*c/2);const h=new cn().setFromUnitVectors(new ee(0,1,0),o.clone().sub(l).normalize());return this.add(e,u,new Lt().compose(l.clone().add(o).multiplyScalar(.5),h,new ee(1,1,1)))}cable(e,t,i=.025,{seg:s=6,tension:r=.5}={}){const a=new ku(t.map(o=>new ee(...o)),!1,"catmullrom",r),l=Math.max(8,Math.ceil(a.getLength()/.12));return this.add(e,new ll(a,l,i,s,!1))}wall(e,t,i,s,r,a,l,o,c=[],u){const d=c.slice().sort((v,x)=>v.a0-x.a0),h=(v,x,p,y)=>{x-v<1e-4||y-p<1e-4||(t==="x"?this.slab(e,i-o/2,p,v,i+o/2,y,x,u):this.slab(e,v,p,i-o/2,x,y,i+o/2,u))},m=.003;let f=s;for(const v of d)h(f,v.a0-m,a,l),h(v.a0-m,v.a1+m,a,v.y0-m),h(v.a0-m,v.a1+m,v.y1+m,l),f=v.a1+m;return h(f,r,a,l),this}build(e,{shadows:t=!0}={}){this.record&&this.takeLoose();const i=new ys;for(const[s,r]of this.bins){const a=e[s];if(!a)throw new Error("нет материала "+s);const l=dx(ux(r,!1));for(const c of r)c.dispose();const o=new vt(l,a);o.name=s,o.castShadow=t&&!a.transparent&&!a.userData.noShadow,o.receiveShadow=!a.userData.unlit,i.add(o)}return this.bins.clear(),i}}class vx{constructor(e,{spots:t=3,points:i=3}={}){this.defs=[],this.spots=[],this.points=[],this.slotDef=[],this.dirty=[],this.rr=0,this.shadowsPerFrame=3,this.forceShadows=!1;for(let s=0;s<t;s++){const r=new Kd(16777215,0,30,.6,.5,1.6);r.castShadow=!0,r.shadow.mapSize.set(1024,1024),r.shadow.bias=-.0015,r.shadow.normalBias=.03,r.shadow.camera.near=.2,r.shadow.autoUpdate=!1,e.add(r,r.target),this.spots.push(r),this.slotDef.push(null),this.dirty.push(!0)}for(let s=0;s<i;s++){const r=new Wu(16777215,0,12,1.8);e.add(r),this.points.push(r)}this.nSpots=t,this.nPoints=i}setTier({spots:e,shadowSpots:t,shadowSize:i,points:s,shadowsPerFrame:r}){this.nSpots=Math.min(e,this.spots.length),this.nPoints=Math.min(s,this.points.length),this.shadowsPerFrame=r,this.spots.forEach((a,l)=>{a.visible=l<this.nSpots,a.castShadow=l<t,a.shadow.mapSize.x!==i&&(a.shadow.mapSize.set(i,i),a.shadow.map&&(a.shadow.map.dispose(),a.shadow.map=null)),this.dirty[l]=!0}),this.points.forEach((a,l)=>{a.visible=l<this.nPoints})}add(e){return e.world=ei(...e.pos),e.to&&(e.worldTo=ei(...e.to)),e.reach=e.reach||26,e.col=new ot(e.color),this.defs.push(e),e}touch(e,t){this.spots.forEach((i,s)=>{const r=this.slotDef[s];r&&Math.hypot(r.pos[0]-e,r.pos[2]-t)<(r.dist||14)+1&&(this.dirty[s]=!0)})}update(e,t,i,s=0,r=null){const a=(c,u,d)=>{const h=[];for(const m of this.defs){if(m.kind!==c||m.off)continue;const f=Math.hypot(m.pos[0]-e,m.pos[2]-t),v=1-Math.min(1,Math.max(0,(f-(m.reach-5))/5));v>0&&h.push([v*(m.prio||1),v,m])}h.sort((m,f)=>f[0]-m[0]);for(let m=0;m<u.length;m++){const f=u[m],v=m<d?h[m]:null;if(!v){f.intensity=0,c==="spot"&&(this.slotDef[m]=null);continue}const x=v[2],p=x.wakeKeep??.16;f.color.copy(x.col),s>0&&r&&f.color.lerp(r,s*.75),f.intensity=x.power*v[1]*(x.flicker?x.flicker(i):1)*(1-s*(1-p)),f.position.copy(x.world),f.distance=x.dist||14,f.decay=x.decay??(c==="spot"?1.6:1.8),c==="spot"&&(f.target.position.copy(x.worldTo),f.target.updateMatrixWorld(),f.angle=x.angle||.6,f.penumbra=x.penumbra??.6,f.shadow.camera.far=f.distance,f.shadow.camera.near=x.near||.2,this.slotDef[m]!==x&&(this.slotDef[m]=x,this.dirty[m]=!0))}};a("spot",this.spots,this.nSpots),a("point",this.points,this.nPoints);let l=this.forceShadows?99:this.shadowsPerFrame,o=0;for(let c=0;c<this.spots.length&&l>0;c++){const u=(this.rr+c)%this.spots.length,d=this.spots[u];!d.castShadow||!d.visible||(this.forceShadows||this.dirty[u]&&d.intensity>0)&&(d.shadow.needsUpdate=!0,this.dirty[u]=!1,l--,o++,this.rr=u+1)}return o}}let ct=null;function af(n){ct=n}function Gs(n,e,t,i=1e9){let s=null,r=i,a=0,l=0;for(const c of t){let u=0,d=r,h=-1,m=0,f=!1;for(let v=0;v<3&&!f;v++){const x=v===0?c.x0:v===1?c.y0:c.z0,p=v===0?c.x1:v===1?c.y1:c.z1,y=n[v],T=e[v];if(Math.abs(T)<1e-9){(y<x||y>p)&&(f=!0);continue}let b=(x-y)/T,A=(p-y)/T,R=-1;if(b>A){const M=b;b=A,A=M,R=1}b>u&&(u=b,h=v,m=R),A<d&&(d=A),u>d&&(f=!0)}!f&&h>=0&&u>1e-4&&u<r&&(r=u,s=c,a=h,l=m)}if(!s)return null;const o=[0,0,0];return o[a]=l,{box:s,t:r,n:o}}const _x=(n,e,t)=>n>t.x0&&n<t.x1&&e>t.z0&&e<t.z1;function yx(n,e,t,i,s){let r=0,a=1;const l=t-n,o=i-e;for(const[c,u]of[[-l,n-s.x0],[l,s.x1-n],[-o,e-s.z0],[o,s.z1-e]]){if(Math.abs(c)<1e-12){if(u<0)return!1;continue}const d=u/c;if(c<0){if(d>a)return!1;d>r&&(r=d)}else{if(d<r)return!1;d<a&&(a=d)}}return r<a}function fa(n,e,t,i,s,r,a,l=ct.PH){if(l.legacyPush){for(const m of i)for(const f of m){if(!a(f))continue;const v=Math.max(f.x0,Math.min(n.x,f.x1)),x=Math.max(f.z0,Math.min(n.z,f.z1)),p=n.x-v,y=n.z-x,T=Math.hypot(p,y);if(T<r&&T>1e-6)n.x=v+p/T*r,n.z=x+y/T*r;else if(T<=1e-6){const b=[[f.x0-r-n.x,0],[f.x1+r-n.x,0],[0,f.z0-r-n.z],[0,f.z1+r-n.z]].sort((A,R)=>Math.abs(A[0]+A[1])-Math.abs(R[0]+R[1]))[0];n.x+=b[0],n.z+=b[1]}}return!1}const o=(m,f)=>{for(const v of i)for(const x of v)if(a(x)&&_x(m,f,x))return x;return null},c=o(e,t);if(!c)for(const m of i)for(const f of m)a(f)&&yx(e,t,n.x,n.z,f)&&(n.x=e,n.z=t);for(let m=0;m<2;m++){for(const f of s){if(!a(f))continue;const v=n.x-f.x,x=n.z-f.z,p=Math.hypot(v,x),y=f.r+r;p<y&&p>1e-6&&(n.x=f.x+v/p*y,n.z=f.z+x/p*y)}for(const f of i)for(const v of f){if(!a(v))continue;const x=Math.max(v.x0,Math.min(n.x,v.x1)),p=Math.max(v.z0,Math.min(n.z,v.z1)),y=n.x-x,T=n.z-p,b=Math.hypot(y,T);b<r&&b>1e-6&&(n.x=x+y/b*r,n.z=p+T/b*r)}}const u=o(n.x,n.z);if(!u)return!1;if(!c)return n.x=e,n.z=t,!0;const d=.01,h=[[u.x0-r-d,n.z],[u.x1+r+d,n.z],[n.x,u.z0-r-d],[n.x,u.z1+r+d]].filter(m=>!o(m[0],m[1])&&(l.exitAnywhere||ct.placeAt(m[0],m[1],.02,n.y||0))).sort((m,f)=>Math.hypot(m[0]-n.x,m[1]-n.z)-Math.hypot(f[0]-n.x,f[1]-n.z));return h.length?(n.x=h[0][0],n.z=h[0][1]):(n.x=e,n.z=t),!0}function bc(n,e,t,i=.3,s=.6,r=n.x,a=n.z){return fa(n,r,a,[e.boxes],e.circles,t,l=>l.y1>i&&l.y0<s)}const Sc=n=>({x0:n.x-n.hx,x1:n.x+n.hx,z0:n.z-n.hz,z1:n.z+n.hz,y0:n.y-n.hy,y1:n.y+n.hy,body:n});function of(n,e,t,i,s=[],r=ct.playerR*.75){let a=0;const l=o=>{o.y1>a&&o.y1<=t&&n>o.x0-r&&n<o.x1+r&&e>o.z0-r&&e<o.z1+r&&(a=o.y1)};for(const o of i.boxes)o.y1<50&&l(o);for(const o of s)l(o);return a}function Gr(n,e,t,i,s=[],r=ct.playerR*.9){let a=99;const l=o=>{o.y0<a&&o.y0>=t&&n>o.x0-r&&n<o.x1+r&&e>o.z0-r&&e<o.z1+r&&(a=o.y0)};for(const o of i.boxes)o.y0>0&&l(o);for(const o of s)l(o);return a}function Mx(n=ct.spawn.x,e=ct.spawn.z){return{x:n,z:e,y:0,vy:0,ground:!0,crouch:!1,crawl:!1,h:ct.PH.stand,eye:ct.PH.eye,landed:0,yaw:ct.spawn.yaw,pitch:ct.spawn.pitch,input:{forward:0,strafe:0,jump:!1,crouch:!1},speed:ct.speed}}function bx(n,e,t,i=[],s=[]){const r=Math.max(-1,Math.min(1,n.input.forward)),a=Math.max(-1,Math.min(1,n.input.strafe)),l=Math.sin(n.yaw),o=Math.cos(n.yaw);n.crawl&&!n.input.crawl&&Gr(n.x,n.z,n.y+ct.PH.crawl-.05,e,i,ct.playerR+.06)>=n.y+ct.PH.crouch&&(n.crawl=!1),n.input.crawl&&n.ground&&!n.noCrawl&&(n.crawl=!0),n.input.crouch||n.crawl?n.crouch=!0:n.crouch&&Gr(n.x,n.z,n.y+ct.PH.crouch-.05,e,i)>=n.y+ct.PH.stand&&(n.crouch=!1),n.h=n.crawl?ct.PH.crawl:n.crouch?ct.PH.crouch:ct.PH.stand,n.eye+=((n.crawl?ct.PH.eyeCrawl:n.crouch?ct.PH.eyeCrouch:ct.PH.eye)-n.eye)*Math.min(1,t*12);const c=n.crawl?Math.min(n.speed,ct.PH.crawlSpeed):n.speed*(n.crouch?ct.PH.crouchSpeed:1),u=n.ground||ct.PH.legacyPush?ct.PH.step:ct.PH.ledge,d=n.y+u;let h=n.y+n.h;const m=A=>A.y1>d&&A.y0<h,f=Math.max(1,Math.ceil(c*t/.15)),v=n.y;for(let A=0;A<f;A++){const R=n.x,M=n.z;if(n.x+=(-l*r+o*a)*c*t/f,n.z+=(-o*r-l*a)*c*t/f,fa(n,R,M,[e.boxes,i],e.circles,ct.playerR,m),n.crouch&&!n.crawl&&n.ground&&!n.noCrawl&&(r||a)){const C=c*t/f;if(Math.hypot(n.x-R,n.z-M)<C*.6){const N=n.x,F=n.z;h=n.y+ct.PH.crawl,n.x=R+(-l*r+o*a)*C,n.z=M+(-o*r-l*a)*C,fa(n,R,M,[e.boxes,i],e.circles,ct.playerR,m),Math.hypot(n.x-R,n.z-M)>C*.9?(n.crawl=!0,n.h=ct.PH.crawl):(h=n.y+n.h,n.x=N,n.z=F)}}}{const A=ct.boundsAt(n.x);n.x=Math.max(A.x0+ct.playerR,Math.min(A.x1-ct.playerR,n.x)),n.z=Math.max(A.z0+ct.playerR,Math.min(A.z1-ct.playerR,n.z))}const x=n.g||ct.PH.g,p=n.jumpH||ct.PH.jumpH;n.landed=0,n.input.jump&&n.ground&&Gr(n.x,n.z,n.y+n.h-.05,e,i)>n.y+n.h+.15&&(n.vy=Math.sqrt(2*x*p),n.ground=!1,n.jumped=!0),n.input.jump=!1,n.vy-=x*t;let y=n.y+n.vy*t;const T=of(n.x,n.z,n.y+(ct.PH.legacyPush&&!n.ground?.02:u),e,i.concat(s));y<=T?(!n.ground&&n.vy<-1.5&&(n.landed=Math.min(1,-n.vy/6)),y=T,n.vy=0,n.ground=!0):y>T+.02&&(n.ground=!1);const b=Math.min(Gr(n.x,n.z,n.y+n.h-.05,e,i),ct.roomHeight(n.x,n.z,v));y+n.h>b&&(y=b-n.h,n.vy>0&&(n.vy=0)),n.y=Math.max(0,y)}function Sx(n,e,t,i=[]){n.vy-=ct.PH.gBody*t;let s=0;const r=Math.max(n.hx,n.hz),a=n.x,l=n.z;n.x+=n.vx*t,n.z+=n.vz*t;const o={x:n.x,z:n.z,y:n.y};bc(o,e,r,n.y-n.hy+.05,n.y+n.hy,a,l);let c=null,u=!1;for(const v of i){if(v.y1<=n.y-n.hy+.05||v.y0>=n.y+n.hy)continue;const x=Math.min(o.x+n.hx-v.x0,v.x1-(o.x-n.hx)),p=Math.min(o.z+n.hz-v.z0,v.z1-(o.z-n.hz));x>0&&p>0&&(c=v,u=x<p,x<p?o.x+=o.x<(v.x0+v.x1)/2?-x:x:o.z+=o.z<(v.z0+v.z1)/2?-p:p)}let d=0;if(c){const v=o.x,x=o.z;bc(o,e,r,n.y-n.hy+.05,n.y+n.hy,a,l),Math.hypot(o.x-v,o.z-x)>.01&&(d=u?o.z<(c.z0+c.z1)/2?-1:1:o.x<(c.x0+c.x1)/2?-1:1)}Math.abs(o.x-n.x)>1e-5&&(s=Math.max(s,Math.min(1,Math.abs(n.vx)/8)),n.vx*=-.25),Math.abs(o.z-n.z)>1e-5&&(s=Math.max(s,Math.min(1,Math.abs(n.vz)/8)),n.vz*=-.25),d&&(s=0,u?n.vz=d*ct.PH.squeeze:n.vx=d*ct.PH.squeeze);{const v=ct.boundsAt(o.x);n.x=Math.max(v.x0+r,Math.min(v.x1-r,o.x)),n.z=Math.max(v.z0+r,Math.min(v.z1-r,o.z))}const h=n.y-n.hy,m=n.y+n.vy*t,f=of(n.x,n.z,h+.03,e,i,r*.7);if(m-n.hy<=f){n.vy<-1.2&&(s=Math.max(s,Math.min(1,-n.vy/7))),n.y=f+n.hy,n.vy=n.vy<-2.5?-n.vy*.2:0;const v=Math.pow(.004,t);n.vx*=v,n.vz*=v,Math.abs(n.vx)+Math.abs(n.vz)<.05&&n.vy===0&&(n.vx=n.vz=0,n.rest=!0)}else n.y=m;return s}const wx=new Xu(-1,1,1,-1,0,1);class Ex extends rn{constructor(){super(),this.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new pt([0,2,0,0,2,0],2))}}const Tx=new Ex;class Ax{constructor(e){this._mesh=new vt(Tx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,wx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const Rx="varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",Cx=`
  uniform sampler2D tDiffuse; uniform sampler2D tB0; uniform sampler2D tB1; uniform sampler2D tB2; uniform float uBloom;
  uniform float uExposure; uniform vec3 uTint; uniform float uTime; uniform float uGrain; uniform float uVig; uniform float uWake; uniform float uHurt; uniform float uFade; uniform float uWarp;
  varying vec2 vUv;
  vec3 aces(vec3 x) { return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }
  float h(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  void main() {
    vec2 d = vUv - 0.5; float r2 = dot(d, d);
    // КАДР ПЛЫВЁТ (uWarp 0..1, общая станция 23.11: «вселенные сошлись» после маяка, 3-6 с): строки кадра сдвигаются
    // волной, и кадр двоится цветом. Без события uWarp = 0 и выборка та же, что всегда
    vec2 uv = vUv;
    if (uWarp > 0.001) uv = clamp(vUv + vec2(sin(vUv.y * 46.0 + uTime * 23.0), sin(vUv.x * 31.0 - uTime * 17.0) * 0.4) * 0.006 * uWarp, 0.0, 1.0);
    // цветная кайма по краям кадра: три выборки вместо одной. Платим за неё, только когда она есть
    // (Узор проснулся или Харму ударили); в обычном кадре выборка одна.
    float caK = 0.008 * uWake + 0.02 * uHurt + 0.05 * uWarp;
    vec3 c = texture2D(tDiffuse, uv).rgb;
    if (caK > 0.0005) { vec2 ca = d * r2 * (0.004 + caK) + vec2(0.004 * uWarp, 0.0); c = vec3(texture2D(tDiffuse, uv + ca).r, c.g, texture2D(tDiffuse, uv - ca).b); }
    c = min(max(c, vec3(0.0)), vec3(48.0));           // NaN и «светлячки» дальше не идут
    if (uBloom > 0.0) c += (texture2D(tB0, vUv).rgb * 0.5 + texture2D(tB1, vUv).rgb * 0.34 + texture2D(tB2, vUv).rgb * 0.26) * uBloom;
    c *= uExposure * uTint;
    c *= 1.0 - uVig * smoothstep(0.12, 0.62, r2);
    c = mix(c, c * vec3(1.5, 0.35, 0.3), uHurt * smoothstep(0.05, 0.5, r2));
    c = aces(c);
    // тени чуть в холод, света в тепло: кадр перестаёт быть серым
    float l = dot(c, vec3(0.299, 0.587, 0.114));
    c = mix(c, c * vec3(0.94, 1.0, 1.08), (1.0 - l) * 0.35);
    c = pow(c, vec3(1.0 / 2.2));
    c += (h(vUv * 1000.0 + fract(uTime) * 17.0) - 0.5) * uGrain;
    gl_FragColor = vec4(c * uFade, 1.0);
  }`,Px=`
  uniform sampler2D tDiffuse; uniform vec2 uTexel; varying vec2 vUv;
  vec3 tap(vec2 o) { return min(max(texture2D(tDiffuse, vUv + o * uTexel).rgb, vec3(0.0)), vec3(48.0)); }
  void main() {
    vec3 c = (tap(vec2(-1.0, -1.0)) + tap(vec2(1.0, -1.0)) + tap(vec2(-1.0, 1.0)) + tap(vec2(1.0, 1.0))) * 0.25;
    float l = max(c.r, max(c.g, c.b));
    gl_FragColor = vec4(c * smoothstep(0.95, 1.7, l), 1.0);
  }`,Lx=`
  uniform sampler2D tDiffuse; uniform vec2 uDir; varying vec2 vUv;
  void main() {
    vec3 c = texture2D(tDiffuse, vUv).rgb * 0.2270270;
    c += (texture2D(tDiffuse, vUv + uDir * 1.3846154).rgb + texture2D(tDiffuse, vUv - uDir * 1.3846154).rgb) * 0.3162162;
    c += (texture2D(tDiffuse, vUv + uDir * 3.2307692).rgb + texture2D(tDiffuse, vUv - uDir * 3.2307692).rgb) * 0.0702703;
    gl_FragColor = vec4(c, 1.0);
  }`;function Dx(n,e,t,i){const s={tDiffuse:{value:null},tB0:{value:null},tB1:{value:null},tB2:{value:null},uBloom:{value:0},uExposure:{value:1},uTint:{value:new ee(1,1,1)},uTime:{value:0},uGrain:{value:.03},uVig:{value:.42},uWake:{value:0},uHurt:{value:0},uFade:{value:1},uWarp:{value:0}},r=y=>new Ax(new zi({...y,vertexShader:Rx,depthTest:!1,depthWrite:!1})),a=r({uniforms:s,fragmentShader:Cx}),l={tDiffuse:{value:null},uTexel:{value:new it}},o={tDiffuse:{value:null},uDir:{value:new it}},c=r({uniforms:l,fragmentShader:Px}),u=r({uniforms:o,fragmentShader:Lx}),d=new it;let h=null,m=null,f=[];const v=new ot(0);function x(){h&&h.dispose();for(const b of f)b.a.dispose(),b.b.dispose();f=[],n.getDrawingBufferSize(d);const y=m.hdr&&!m.ldr?Kn:En;h=new An(d.x,d.y,{type:y,samples:m.msaa});const T=m.bloomFrom||2;if(l.uTexel.value.set(T>1?1/d.x:0,T>1?1/d.y:0),m.bloom)for(let b=0;b<3;b++){const A=Math.max(8,d.x>>b+T),R=Math.max(8,d.y>>b+T),M={type:y,depthBuffer:!1};f.push({a:new An(A,R,M),b:new An(A,R,M),w:A,h:R})}}function p(y,T){o.tDiffuse.value=y.texture,o.uDir.value.set(1/T.w,0),n.setRenderTarget(T.b),u.render(n),o.tDiffuse.value=T.b.texture,o.uDir.value.set(0,1/T.h),n.setRenderTarget(T.a),u.render(n)}return{uniforms:s,configure(y){m={...y},x()},resize(){m&&x()},render(){n.setRenderTarget(h),n.setClearColor(v,1),n.clear(),m.prepass,n.render(e,t),s.tDiffuse.value=h.texture,f.length?(l.tDiffuse.value=h.texture,n.setRenderTarget(f[0].a),c.render(n),p(f[0].a,f[0]),p(f[0].a,f[1]),p(f[1].a,f[2]),s.tB0.value=f[0].a.texture,s.tB1.value=f[1].a.texture,s.tB2.value=f[2].a.texture,s.uBloom.value=.75):(s.tB0.value=s.tB1.value=s.tB2.value=h.texture,s.uBloom.value=0),n.setRenderTarget(null),a.render(n)}}}const Ix={high:{msaa:2,bloom:!0,hdr:!0,spots:3,shadowSpots:3,shadowSize:1024,points:3,shadowsPerFrame:3,mirror:1,mirrorWorld:!0,prepass:!0,env:!0,uzor:2,sunSteps:24,particles:1,shafts:!0},medium:{msaa:0,bloom:!0,hdr:!0,spots:3,shadowSpots:2,shadowSize:512,points:3,shadowsPerFrame:1,mirror:.5,mirrorWorld:!0,prepass:!0,env:!0,uzor:1,sunSteps:12,particles:.5,shafts:!0},lite:{msaa:0,bloom:!1,hdr:!0,spots:3,shadowSpots:0,shadowSize:512,points:3,shadowsPerFrame:0,mirror:0,mirrorWorld:!0,prepass:!1,habMirror:.5,env:!0,uzor:0,sunSteps:0,particles:.25,shafts:!0}},Nx={KeyE:"e",KeyF:"f",Space:"jump",KeyQ:"throw",KeyV:"kick"};function Ux(n){return{fwd:(n("KeyW")||n("ArrowUp")?1:0)-(n("KeyS")||n("ArrowDown")?1:0),strafe:(n("KeyD")?1:0)-(n("KeyA")?1:0),run:n("ShiftLeft")||n("ShiftRight"),wheel:(n("KeyD")?1:0)-(n("KeyA")?1:0),eHeld:n("KeyE"),crouch:n("KeyC")}}const zx={e:"interact",f:"mode",jump:"jump",throw:"throw",kick:"kick"},wc={interact:"e",mode:"f",jump:"jump",throw:"throw",kick:"kick"};function Fx({coarse:n=!1,mut:e=[]}={}){const t=new Set,i=new Set(e),s={x:0,y:0,sprint:!1,lookX:0,lookY:0,cutter:!1,crouch:!1,crawl:!1,interactHold:!1,throwHold:!1,tool:""},r=new Set;let a=n?"touch":"kbm";const l=[];return{keys:t,touch:s,get device(){return a},setDevice(c){if(!(c!=="touch"&&c!=="kbm")&&!(i.has("nodevswitch")&&a!==c&&l.length)&&c!==a){a=c;for(const u of l)try{u(c)}catch{}}},onDevice(c){l.push(c)},keyDown(c){t.add(c);const u=Nx[c];u&&r.add(zx[u])},keyUp(c){t.delete(c)},press(c){r.add(c)},drop(){r.clear(),s.lookX=s.lookY=0},stick(c,u,d=!1){s.x=c,s.y=u,s.sprint=!!d},look(c,u){s.lookX+=c,s.lookY+=u},hold(c,u){c in s&&c!=="tool"&&(s[c]=!!u)},want(c){(c==="cut"||c==="grip")&&(s.tool=c)},reset(){i.has("noreset")||(t.clear(),r.clear(),s.x=s.y=0,s.sprint=!1,s.lookX=s.lookY=0,s.cutter=!1,s.interactHold=!1,s.throwHold=!1,s.tool="")},frame(c,u){const d=m=>t.has(m),h=Ux(d);c.fwd=h.fwd,c.strafe=h.strafe,c.run=h.run,c.wheel=h.wheel,c.eHeld=h.eHeld,c.crouch=h.crouch,c.tool="",c.crawl=!1,c.touch=a==="touch",(s.x||s.y)&&(c.fwd=s.y,c.strafe=s.x,c.run=s.sprint,c.wheel=Math.abs(s.x)>.3?Math.sign(s.x):0),(s.lookX||s.lookY)&&(u(s.lookX,s.lookY),s.lookX=s.lookY=0),s.crouch&&(c.crouch=!0),s.crawl&&(c.crawl=!0,c.crouch=!0),s.interactHold&&(c.eHeld=!0),c.throwHeld=d("KeyQ")||!!c.rmb||s.throwHold,s.tool&&(c.tool=s.tool,s.tool=""),s.cutter?(c.fire=!0,c.tool="cut",c.touchFire=!0):c.touchFire&&(c.fire=!1,c.touchFire=!1);for(const m of r)m==="grab"?(c.tool="grip",c.press.add("fire")):wc[m]&&c.press.add(wc[m]);return r.clear(),c}}}function Ox(n,e,t,i){const s=()=>{t.reset()};n.addEventListener("blur",()=>t.reset()),n.addEventListener("pagehide",s),e.addEventListener("visibilitychange",()=>{e.hidden&&s()})}const Ec={dist:.9,drop:.26},ii={tap:.15,full:.65,kMax:1.3,v0:11.5,vMass:5,up:1.6};function kx(n){const e=Math.max(0,Math.min(1,(n-ii.tap)/(ii.full-ii.tap)));return 1+(ii.kMax-1)*e}const Bx=(n,e=1)=>(ii.v0-ii.vMass*n)*e;function Hx(n,e,t=1){const i=Bx(e,t);return[n[0]*i,n[1]*i+ii.up,n[2]*i]}function Gx({mut:n=[]}={}){const e=new Set(n),t={lastFire:!1,gripFire:!1,gripAt:-1,q:-1,charge:0};return{s:t,sense(i){return i.fireNew=i.fire&&!t.lastFire||i.press.has("fire"),t.lastFire=i.fire,i.fireNew},modes(i,s,r=!0){const a=[];let l=s;return i.press.has("f")&&r&&(l=l==="grip"?"cut":"grip",a.push(l)),i.tool&&r&&l!==i.tool&&!e.has("notouchtool")&&(l=i.tool,a.push(l)),a},grip(i,{able:s=!0,holding:r=!1,t:a=0}={}){const l=s&&i.fireNew,o=!i.fire&&t.gripFire;return t.gripFire=i.fire,l?r?(t.gripAt=-1,"drop"):"take":o&&r&&t.gripAt>=0&&(a-t.gripAt>=.3||e.has("holdgrip"))?"drop":""},took(i){t.gripAt=i,t.q=-1,t.charge=0},throw(i,{holding:s=!1,t:r=0}={}){if(!s)return t.q=-1,t.charge=0,0;if(i.press.has("throw")&&t.q<0&&(t.q=r),t.q<0)return t.charge=0,0;if(i.throwHeld&&!e.has("nocharge"))return t.charge=Math.max(0,Math.min(1,(r-t.q-ii.tap)/(ii.full-ii.tap))),0;const a=e.has("nocharge")?1:kx(r-t.q);return t.q=-1,t.charge=0,a},cutting:(i,s)=>s==="cut"&&!!i.fire,use:i=>!!i.eHeld}}const Ya={body:.42,eye:.3,speed:1.15},mr={hab_v1:{wallT:.4,floorT:.4,ceilT:.3,niche:{floor:.3,wall:.3,ceil:.22},stub:{depth:1.6,light:10467024},dado:.9,beam:2,mats:{wall:"wall",floor:"floor",ceil:"ceil",trim:"steelDark",dado:"wallDark"},sizes:{x:[3,16],y:[2.5,4],z:[3,16]}},shaft_v1:{wallT:.4,floorT:.4,ceilT:.3,niche:{floor:.3,wall:.3,ceil:.22},stub:{depth:1.6,light:10467024},dado:.9,beam:2,mats:{wall:"wall",floor:"floor",ceil:"ceil",trim:"steelDark",dado:"wallDark"},sizes:{x:[2,4],y:[6,12],z:[2,4]}}},Vx=Object.keys(mr),dl=["W","E","S","N"],$i={W:"+x",E:"-x",S:"+z",N:"-z"},lf=n=>n==="W"||n==="E"?"z":"x",jt=(n,e,t,i,s,r,a,l,o)=>({id:n,kind:e,x0:Math.min(t,i),x1:Math.max(t,i),y0:Math.min(s,r),y1:Math.max(s,r),z0:Math.min(a,l),z1:Math.max(a,l),...o});function Wx(n,e,t=[]){const i=mr[n],[s,r,a]=e,l=i.wallT,o=[jt("floor","floor",-l,s+l,-i.floorT,0,-l,a+l),jt("ceil","ceil",-l,s+l,r,r+i.ceilT,-l,a+l)];for(const c of dl){const u=lf(c),d=u==="z"?a:s,h=t.filter(y=>y.side===c).sort((y,T)=>y.a0-T.a0),m=(y,T,b,A,R)=>{b-T<1e-4||R-A<1e-4||(c==="W"&&o.push(jt(y,"wall",-l,0,A,R,T,b,{side:c})),c==="E"&&o.push(jt(y,"wall",s,s+l,A,R,T,b,{side:c})),c==="S"&&o.push(jt(y,"wall",T,b,A,R,-l,0,{side:c})),c==="N"&&o.push(jt(y,"wall",T,b,A,R,a,a+l,{side:c})))},f=u==="x"?-l:0,v=u==="x"?d+l:d;let x=f,p=0;for(const y of h)m(`wall${c}${p++}`,x,y.a0,0,r),m(`wall${c}${p++}`,y.a0,y.a1,0,y.y0),m(`wall${c}${p++}`,y.a0,y.a1,y.y1,r),x=y.a1;m(`wall${c}${p++}`,x,v,0,r)}return o}function Xx(n,e,t){const i=mr[n],[s,,r]=e,a=i.wallT,l=i.stub.depth,o=t.y1+.3,c=t.y0||0,u=[],d=v=>`stub_${t.id}_${v}`,h=t.side==="W"||t.side==="S"?-a:t.side==="E"?s+a:r+a,m=t.side==="W"||t.side==="S"?-1:1,f=(v,x,p,y,T,b,A)=>{const[R,M]=[h+m*y,h+m*T];t.side==="W"||t.side==="E"?u.push(jt(d(v),"stub",R,M,b,A,x,p)):u.push(jt(d(v),"stub",x,p,b,A,R,M))};return f("floor",t.a0-.2,t.a1+.2,0,l+.2,c-.2,c),f("ceil",t.a0-.2,t.a1+.2,0,l+.2,o,o+.2),f("l",t.a0-.2,t.a0,0,l,c,o),f("r",t.a1,t.a1+.2,0,l,c,o),f("end",t.a0-.2,t.a1+.2,l,l+.2,c,o),u}const Ka={cutRate:1,blastK:3.2},Un=(n,e)=>({type:"integer",minimum:n,maximum:e}),Xi=(n,e)=>({type:"number",minimum:n,maximum:e}),Tc={type:"string",pattern:"^[a-z][a-z0-9_.]{0,47}$"},qx={type:"array",items:{type:"integer",minimum:0,maximum:64},minItems:2,maxItems:2},Ai=(n,e)=>e===90||e===270?[n[1],n[0]]:n;function Vs(n,e,t,i,s,r,a){const[l,,o]=n.size;return e==="W"?{x0:0,x1:a,z0:t,z1:i,y0:s,y1:r}:e==="E"?{x0:l-a,x1:l,z0:t,z1:i,y0:s,y1:r}:e==="S"?{x0:t,x1:i,z0:0,z1:a,y0:s,y1:r}:{x0:t,x1:i,z0:o-a,z1:o,y0:s,y1:r}}function Ws(n,e,t,i){const[s,,r]=n.size;return e==="W"?[i,t]:e==="E"?[s-i,t]:e==="S"?[t,i]:[t,r-i]}const Xt=(n,e)=>(n+e)/2,hl={crate:{mount:"floor",cells:n=>n.size==="large"?[2,2]:[1,1],key:!1,params:{color:{type:"string",enum:["orange","teal","white"]},size:{type:"string",enum:["small","large"]}},compile(n,e){const t=n.size==="large",i=t?2:1,s=(n.at[0]+i/2)*e.G,r=(n.at[1]+i/2)*e.G,a=t?.42:.22;return{parts:[{id:n.id,prefab:n.id,kind:t?"crateL":"crate",shape:"box",h:[a,a,a],p:[s,a,r],yaw:0,mass:t?30:8,free:!0,mat:n.color||"orange"}]}}},shelf:{mount:"floor",cells:n=>Ai([n.width||3,1],n.rot||0),key:!1,params:{width:Un(2,4),levels:Un(2,4),load:Un(0,6),color:{type:"string",enum:["steel","steelDark","orange"]}},compile(n,e){const[t,i]=Ai([n.width||3,1],n.rot||0),s=e.G,r=n.levels||3,a=.55,l=.12+r*a,o=n.at[0]*s+.03,c=(n.at[0]+t)*s-.03,u=n.at[1]*s+.03,d=(n.at[1]+i)*s-.03,h=.04,m=[],f=[],v=[];for(const[b,A]of[[o,u],[c-h,u],[o,d-h],[c-h,d-h]])m.push(jt(`${n.id}.post${m.length}`,"shelf",b,b+h,0,l,A,A+h,{prefab:n.id,mat:n.color||"steel"}));const x=[];for(let b=0;b<r;b++){const A=.1+b*a,R=`${n.id}.plank${b}`;x.push(A+.03),f.push({id:R,prefab:n.id,kind:"plank",shape:"box",h:[(c-o)/2,.015,(d-u)/2],p:[(o+c)/2,A+.015,(u+d)/2],yaw:0,mass:4*Math.max(t,i)/2,free:!1,mat:"steelDark"}),[[o,u],[c,u],[o,d],[c,d]].forEach(([M,C],P)=>v.push({id:`${R}.w${P}`,prefab:n.id,a:R,b:"world",at:[M,A+.015,C],strength:.8,kind:"weld"}))}const p=t>=i?"x":"z",y=Math.max(t,i),T=.16;for(let b=0;b<Math.min(n.load||0,y*r);b++){const A=Math.floor(b/y),R=b%y,M=(R+.5)*s+(p==="x"?n.at[0]*s:n.at[1]*s),C=p==="x"?(u+d)/2:(o+c)/2;f.push({id:`${n.id}.box${b}`,prefab:n.id,kind:"crate",shape:"box",h:[T,T,T],p:p==="x"?[M,x[A]+T,C]:[C,x[A]+T,M],yaw:0,mass:5,free:!0,mat:["orange","teal","white"][b%3]})}return{statics:m,parts:f,joints:v}}},sheet:{mount:"wall",cells:n=>n.size||[2,2],key:!1,params:{size:{type:"array",prefixItems:[Un(1,4),Un(1,3)],minItems:2,maxItems:2},mat:{type:"string",enum:["steel","steelDark","white","teal"]},strength:Xi(.5,3)},compile(n,e){const[t,i]=n.size||[2,2],s=e.G,r=n.at[0]*s+.02,a=(n.at[0]+t)*s-.02,l=n.at[1]*s+.02,o=(n.at[1]+i)*s-.02,c=.012,u=.02+c,[d,,h]=e.size,m=Xt(r,a),f=Xt(l,o),v=lf(n.wall),x=n.strength??.8,p={W:[u,m],E:[d-u,m],S:[m,u],N:[m,h-u]}[n.wall],y=(A,R)=>({W:[u,R,A],E:[d-u,R,A],S:[A,R,u],N:[A,R,h-u]})[n.wall],T=[{id:n.id,prefab:n.id,kind:"sheet",shape:"box",h:v==="z"?[c,(o-l)/2,(a-r)/2]:[(a-r)/2,(o-l)/2,c],p:[p[0],f,p[1]],yaw:0,mass:Math.max(2,(a-r)*(o-l)*9),free:!1,mat:n.mat||"steel"}],b=[[r+.05,l+.05],[a-.05,l+.05],[r+.05,o-.05],[a-.05,o-.05]].map(([A,R],M)=>({id:`${n.id}.r${M}`,prefab:n.id,a:n.id,b:"world",at:y(A,R),strength:x,kind:"rivet"}));return{parts:T,joints:b}}},offcuts:{mount:"floor",cells:n=>Ai([2,1],n.rot||0),key:!0,params:{rods:Un(0,12),sheets:Un(0,4)},compile(n,e){const[t,i]=Ai([2,1],n.rot||0),s=e.G,r=t>i,a=(n.at[0]+t/2)*s,l=(n.at[1]+i/2)*s,o=[],c=3;for(let d=0;d<(n.rods??6);d++){const h=Math.floor(d/c),m=(d%c-(c-1)/2)*.12,f=.031+h*.062;o.push({id:`${n.id}.rod${d}`,prefab:n.id,kind:"rod",shape:"box",h:r?[.32,.03,.03]:[.03,.03,.32],p:r?[a,f,l+m]:[a+m,f,l],yaw:0,mass:2,free:!0,mat:"steelDark"})}const u=Math.ceil((n.rods??6)/c)*.062+.002;for(let d=0;d<(n.sheets||0);d++){const m=u+.012+d*.025;o.push({id:`${n.id}.sheet${d}`,prefab:n.id,kind:"sheet",shape:"box",h:r?[.36,.012,.2]:[.2,.012,.36],p:[a,m,l],yaw:0,mass:3,free:!0,mat:d%2?"white":"steel"})}return{parts:o,keys:[{id:n.id,at:[a,.1,l]}]}}},pallet:{mount:"floor",cells:()=>[2,2],key:!1,params:{load:Un(0,4)},compile(n,e){const t=e.G,i=(n.at[0]+1)*t,s=(n.at[1]+1)*t,r=.07,a=[{id:n.id,prefab:n.id,kind:"pallet",shape:"box",h:[.47,r,.47],p:[i,r,s],yaw:0,mass:18,free:!0,mat:"wood"}];return[[-1,-1],[1,-1],[-1,1],[1,1]].slice(0,n.load||0).forEach(([l,o],c)=>a.push({id:`${n.id}.box${c}`,prefab:n.id,kind:"crate",shape:"box",h:[.2,.2,.2],p:[i+l*.23,2*r+.2,s+o*.23],yaw:0,mass:6,free:!0,mat:["teal","white","orange","teal"][c]})),{parts:a}}},pipe:{mount:"wall",cells:n=>[n.len||4,1],key:!1,params:{len:Un(2,32),r:{type:"number",enum:[.04,.06,.1]},mat:{type:"string",enum:["steel","copper","steelDark"]}},compile(n,e){const t=e.G,i=n.r||.06,s=n.at[0]*t,r=(n.at[0]+(n.len||4))*t,a=(n.at[1]+.5)*t,l=i+.05,o=Vs(e,n.wall,s,r,a-i,a+i,l+i);return{statics:[jt(n.id,"pipe",o.x0,o.x1,o.y0,o.y1,o.z0,o.z1,{prefab:n.id,r:i,off:l,mat:n.mat||"steel",side:n.wall,a0:s,a1:r,y:a})]}}},vent:{mount:"wall",cells:()=>[1,1],key:!0,params:{},compile(n,e){const t=e.G,i=(n.at[0]+.5)*t,s=(n.at[1]+.5)*t,[r,,a]=e.size,l=Ws(e,n.wall,i,.8),o={W:[0,s,i],E:[r,s,i],S:[i,s,0],N:[i,s,a]}[n.wall];return{panels:[{id:n.id,room:"",face:$i[n.wall],x:o[0],y:o[1],z:o[2],depth:e.kit.niche.wall,panel:"vent"}],keys:[{id:n.id,at:[l[0],s,l[1]],face:$i[n.wall]}]}}},gas_tank:{mount:"floor",cells:()=>[1,1],key:!0,params:{content:{type:"string",enum:["O2","N2","H2"]},charge:Xi(.5,2),fuse:Xi(.5,3)},required:["content"],compile(n,e){const t=(n.at[0]+.5)*e.G,i=(n.at[1]+.5)*e.G;return{parts:[{id:n.id,prefab:n.id,kind:"tank",shape:"cyl",h:[.12,.32,.12],p:[t,.32,i],yaw:0,mass:12,free:!0,mat:n.content,tank:{charge:n.charge??1,fuse:n.fuse??1.2,radius:4.5}}],keys:[{id:n.id,at:[t,.5,i]}]}}},table_cuttable:{mount:"floor",cells:n=>n.size||[3,2],key:!0,params:{size:{type:"array",items:{type:"integer",minimum:2,maximum:4},minItems:2,maxItems:2},strength:Xi(.5,3),top:{type:"string",enum:["white","steel"]}},compile(n,e){const[t,i]=Ai(n.size||[3,2],n.rot||0),s=e.G,r=n.at[0]*s+.05,a=(n.at[0]+t)*s-.05,l=n.at[1]*s+.05,o=(n.at[1]+i)*s-.05,c=.76,u=.05,d=Xt(r,a),h=Xt(l,o),m=c-u,f=n.strength??1.2,v=[{id:n.id+".top",prefab:n.id,kind:"top",shape:"box",h:[(a-r)/2,u/2,(o-l)/2],p:[d,c-u/2,h],yaw:0,mass:14,free:!1,mat:n.top||"white"}],x=[];return[[r+.08,l+.08],[a-.08,l+.08],[r+.08,o-.08],[a-.08,o-.08]].forEach(([p,y],T)=>{const b=`${n.id}.leg${T}`;v.push({id:b,prefab:n.id,kind:"leg",shape:"box",h:[.03,m/2,.03],p:[p,m/2,y],yaw:0,mass:2,free:!1,mat:"steelDark"}),x.push({id:`${n.id}.cut${T}`,prefab:n.id,a:n.id+".top",b,at:[p,m,y],strength:f,kind:"weld"})}),{parts:v,joints:x,keys:[{id:n.id,at:[d,c,h]}]}}},cabinet:{mount:"floor",cells:()=>[2,1],key:!0,params:{color:{type:"string",enum:["white","teal","steel"]},strength:Xi(.5,3)},compile(n,e){const t=n.rot||0,[i,s]=Ai([2,1],t),r=e.G,a=1.9,l=n.strength??1.5,o=n.at[0]*r+.02,c=(n.at[0]+i)*r-.02,u=n.at[1]*r+.02,d=(n.at[1]+s)*r-.02,h={0:"+z",90:"+x",180:"-z",270:"-x"}[t],m=h[1]==="z"?"x":"z",f=h[0]==="+"?1:-1,v=.03,x=.003,p=.025,y=.05,T=.03,b=m==="x"?o:u,A=m==="x"?c:d,R=Xt(b,A),M=h==="+z"?d:h==="-z"?u:h==="+x"?c:o,C=h==="+z"?u:h==="-z"?d:h==="+x"?o:c,P=M-f*(v+x),N=[],F=n.color==="teal"?"teal":n.color==="steel"?"steel":"white",V=(me,De,Ge,xe,Ie,Be,qe,Ne)=>N.push(m==="x"?jt(me,"cabinet",De,Ge,xe,Ie,Be,qe,{prefab:n.id,mat:Ne}):jt(me,"cabinet",Be,qe,xe,Ie,De,Ge,{prefab:n.id,mat:Ne})),te=[],B=[],j=.002,oe=(me,De,Ge,xe,Ie,Be,qe,Ne,Ke,ht)=>{const[ke,tt]=[Math.min(qe,Ne),Math.max(qe,Ne)],st=(mt,Et,z)=>m==="x"?[mt,Et,z]:[z,Et,mt],Qe=st((xe-Ge)/2-j,(Be-Ie)/2-j,(tt-ke)/2-j),_t=st(Xt(Ge,xe),Xt(Ie,Be),Xt(ke,tt));te.push({id:me,prefab:n.id,kind:De,shape:"box",h:Qe,p:_t,yaw:0,mass:Math.max(1.5,+(8*Qe[0]*Qe[1]*Qe[2]*600).toFixed(1)),free:!1,mat:Ke}),ht.forEach(([mt,Et,z],le)=>B.push({id:`${me}.d${le}`,prefab:n.id,a:me,b:"world",at:st(mt,Et,z),strength:l*.5,kind:"dowel"}))},re=C+f*p,Te=(me,De)=>me.flatMap(Ge=>De.map(xe=>[Ge,xe])),ie=.05;oe(`${n.id}.back`,"side",b,A,0,a,C,re,"steelDark",Te([b+ie,A-ie],[ie,a-ie]).map(([me,De])=>[me,De,re])),oe(`${n.id}.l`,"side",b,b+p,0,a,re,P,F,Te([ie,a-ie],[re+f*ie,P-f*ie]).map(([me,De])=>[b,me,De])),oe(`${n.id}.r`,"side",A-p,A,0,a,re,P,F,Te([ie,a-ie],[re+f*ie,P-f*ie]).map(([me,De])=>[A,me,De])),oe(`${n.id}.bottom`,"side",b+p,A-p,0,.08,re,P,F,Te([b+p+ie,A-p-ie],[re+f*ie,P-f*ie]).map(([me,De])=>[me,.08,De])),oe(`${n.id}.top`,"side",b+p,A-p,a-p,a,re,P,F,Te([b+p+ie,A-p-ie],[re+f*ie,P-f*ie]).map(([me,De])=>[me,a,De]));for(const[me,De]of[.65,1.25].entries())oe(`${n.id}.shelf${me}`,"plank",b+p,A-p,De,De+.024,re+f*T,P-f*T,"wood",Te([b+p+.04,A-p-.04],[re+f*(T+.03),P-f*(T+.03)]).map(([Ge,xe])=>[Ge,De+.024,xe]));V(`${n.id}.bl`,b+p,b+y,.08,a-p,re,re+f*T,"steel"),V(`${n.id}.br`,A-y,A-p,.08,a-p,re,re+f*T,"steel"),V(`${n.id}.bt`,b+y,A-y,a-y,a-p,re,re+f*T,"steel"),V(`${n.id}.fl`,b+p,b+y,.08,a-p,P-f*T,P,"steel"),V(`${n.id}.fr`,A-y,A-p,.08,a-p,P-f*T,P,"steel"),V(`${n.id}.ft`,b+y,A-y,a-y,a-p,P-f*T,P,"steel"),[[b,R,0],[R,A,1]].forEach(([me,De,Ge])=>{const xe=(De-me)/2-.004,Ie=Xt(me,De),Be=Ge===0?me+.004:De-.004,qe=a/2-.03,Ne=P+f*(x+v/2),Ke=P+f*(x+v),ht=m==="x"?[Ie,a/2,Ne]:[Ne,a/2,Ie],ke=m==="x"?[Be,a/2,Ke]:[Ke,a/2,Be],tt=`${n.id}.leaf${Ge}`;te.push({id:tt,prefab:n.id,kind:"leaf",shape:"box",h:m==="x"?[xe,qe,v/2]:[v/2,qe,xe],p:ht,yaw:0,mass:3,free:!1,mat:n.color||"white",hinge:{at:ke,side:Ge,along:m,sg:f,ys:[-qe+.22,0,qe-.22]}});for(const[st,Qe]of[-qe+.22,0,qe-.22].entries())B.push({id:`${n.id}.hinge${Ge}.${st}`,prefab:n.id,a:tt,b:"world",at:[ke[0],ke[1]+Qe,ke[2]],strength:l*.5,kind:"hinge"})});const Se=h[1]==="z"?[Xt(o,c),P+f*.8]:[P+f*.8,Xt(u,d)];return{statics:N,parts:te,joints:B,keys:[{id:n.id,at:[Se[0],1,Se[1]],face:h}],opens:[{id:n.id,leaves:te.filter(me=>me.hinge).map(me=>me.id),face:h}]}}},trap_hatch:{mount:"floor",cells:()=>[2,2],key:!0,params:{number:Un(100,999)},required:["number"],compile(n,e){const t=e.G,i=n.at[0]*t,s=n.at[1]*t,r=i+2*t,a=s+2*t;return{hatches:[{id:n.id,number:n.number,x0:i+.05,x1:r-.05,z0:s+.05,z1:a-.05}],keys:[{id:n.id,at:[Xt(i,r),.05,Xt(s,a)]}]}}},breaker:{mount:"wall",cells:()=>[1,2],key:!0,net:"source",params:{on:{type:"boolean"}},compile(n,e){const t=e.G,i=n.at[0]*t+.05,s=(n.at[0]+1)*t-.05,r=n.at[1]*t,a=r+2*t-.1,l=Vs(e,n.wall,i,s,r,a,.14),o=Ws(e,n.wall,Xt(i,s),.9);return{statics:[jt(n.id,"breaker",l.x0,l.x1,l.y0,l.y1,l.z0,l.z1,{prefab:n.id})],nodes:{[n.id]:{kind:"breaker",on:n.on!==!1}},keys:[{id:n.id,at:[o[0],Xt(r,a),o[1]],face:$i[n.wall]}]}}},screen:{mount:"wall",cells:n=>n.size||[2,1],key:!0,net:"consumer",text:["text"],params:{size:{type:"array",items:{type:"integer",minimum:1,maximum:4},minItems:2,maxItems:2},text:Tc},required:["text"],compile(n,e){const[t,i]=n.size||[2,1],s=e.G,r=n.at[0]*s+.03,a=(n.at[0]+t)*s-.03,l=n.at[1]*s+.03,o=(n.at[1]+i)*s-.03,c=Vs(e,n.wall,r,a,l,o,.05),u=Ws(e,n.wall,Xt(r,a),1.1);return{statics:[jt(n.id,"screen",c.x0,c.x1,c.y0,c.y1,c.z0,c.z1,{prefab:n.id})],nodes:{[n.id]:{kind:"screen"}},texts:[{id:n.id,key:n.text,kind:"screen",w:a-r,h:o-l}],keys:[{id:n.id,at:[u[0],Xt(l,o),u[1]],face:$i[n.wall]}]}}},note:{mount:"wall",cells:()=>[1,1],key:!0,text:["text"],params:{text:Tc},required:["text"],compile(n,e){const t=e.G,i=(n.at[0]+.5)*t,s=(n.at[1]+.5)*t,r=Vs(e,n.wall,i-.105,i+.105,s-.15,s+.15,.01),a=Ws(e,n.wall,i,.8);return{statics:[jt(n.id,"note",r.x0,r.x1,r.y0,r.y1,r.z0,r.z1,{prefab:n.id,thin:!0})],texts:[{id:n.id,key:n.text,kind:"note"}],keys:[{id:n.id,at:[a[0],s,a[1]],face:$i[n.wall]}]}}},window:{mount:"wall",cells:n=>n.size||[3,2],key:!0,hole:!0,params:{size:{type:"array",prefixItems:[Un(2,6),Un(2,4)],minItems:2,maxItems:2},strength:Xi(.5,4)},compile(n,e){const[t,i]=n.size||[3,2],s=e.G,r=n.at[0]*s,a=(n.at[0]+t)*s,l=n.at[1]*s,o=(n.at[1]+i)*s,c=e.kit.wallT,u=Vs(e,n.wall,r,a,l,o,0),d=Ws(e,n.wall,Xt(r,a),1),h={W:[-c/2,null],E:[e.size[0]+c/2,null],S:[null,-c/2],N:[null,e.size[2]+c/2]}[n.wall],m=h[0]!==null?jt(n.id,"glass",h[0]-.02,h[0]+.02,l,o,r,a,{prefab:n.id}):jt(n.id,"glass",r,a,l,o,h[1]-.02,h[1]+.02,{prefab:n.id});return{holes:[{side:n.wall,a0:r,a1:a,y0:l,y1:o,id:n.id}],statics:[m],windows:[{id:n.id,side:n.wall,a0:r,a1:a,y0:l,y1:o,strength:n.strength??2,at:[Xt(u.x0,u.x1),Xt(l,o),Xt(u.z0,u.z1)]}],keys:[{id:n.id,at:[d[0],Xt(l,o),d[1]],face:$i[n.wall]}]}}},lamp:{mount:"ceil",cells:n=>Ai([1,2],n.rot||0),net:"consumer",params:{color:{type:"string",enum:["cool","warm"]},power:Xi(.5,3)},compile(n,e){const[t,i]=Ai([1,2],n.rot||0),s=e.G,r=(n.at[0]+t/2)*s,a=(n.at[1]+i/2)*s,l=e.size[1];return{nodes:{[n.id]:{kind:"lamp"}},lights:[{id:n.id,kind:"spot",pos:[r,l-.12,a],to:[r,0,a],color:n.color==="warm"?16765600:14083839,power:14*(n.power??1.2)*Math.max(1,(l/3)**1.5),dist:Math.max(9,l+4),angle:l>5?.6:1.05,penumbra:.7}],fixtures:[{id:n.id,x:r,z:a,w:t*s-.16,l:i*s-.16,y:l}]}}},cable:{mount:"path",key:!1,net:"conductor",params:{path:{type:"array",items:qx,minItems:2,maxItems:32},under:{type:"string",enum:["floor"]}},required:["path"],compile(n,e){const t=e.G,i=n.path.map(([s,r])=>[(s+.5)*t,-.16,(r+.5)*t]);return{nodes:{[n.id]:{kind:"cable"}},cables:[{id:n.id,pts:i}]}}}},$x=Object.keys(hl),Yx={floor_plate:["+y"],wall_plate:["+x","-x","+z","-z"],ceil_plate:["-y"]},Kx=["slide","none","sealed"],Vt={w:.5,niche:.4,bolt:.035,boltCut:1,weld:2,seat:.25,seatOut:.7},Jx=[{id:"pn_airlock_1",room:"airlock",face:"+y",x:-.05,y:0,z:3.35,depth:.35},{id:"pn_airlock_2",room:"airlock",face:"+y",x:-1.05,y:0,z:1.1,depth:.35},{id:"pn_airlock_3",room:"airlock",face:"+y",x:-1.05,y:0,z:5.6,depth:.35},{id:"pn_airlock_4",room:"airlock",face:"-y",x:.95,y:2.5,z:1.35,depth:.35},{id:"pn_airlock_5",room:"airlock",face:"-y",x:.95,y:2.5,z:5.35,depth:.35},{id:"pn_airlock_6",room:"airlock",face:"-y",x:-1.05,y:2.5,z:2.35,depth:.35},{id:"pn_corridor_1",room:"corridor",face:"+y",x:-.05,y:0,z:-20.05,depth:.35},{id:"pn_corridor_2",room:"corridor",face:"+y",x:-1.55,y:0,z:-.55,depth:.35},{id:"pn_corridor_3",room:"corridor",face:"+y",x:-1.55,y:0,z:-39.55,depth:.35},{id:"pn_corridor_4",room:"corridor",face:"-x",x:2,y:1.55,z:-10.05,depth:.32},{id:"pn_corridor_5",room:"corridor",face:"+x",x:-2,y:1.55,z:-29.8,depth:.32},{id:"pn_corridor_6",room:"corridor",face:"-x",x:2,y:1.55,z:-34.55,depth:.32},{id:"pn_corridor_7",room:"corridor",face:"+x",x:-2,y:1.55,z:-6.05,depth:.32},{id:"pn_corridor_8",room:"corridor",face:"-y",x:-1.55,y:3,z:-14.55,depth:.35},{id:"pn_hab_1",room:"hab",face:"+y",x:6.85,y:0,z:-10.4,depth:.35},{id:"pn_hab_2",room:"hab",face:"+y",x:3.1,y:0,z:-5.15,depth:.35},{id:"pn_hab_3",room:"hab",face:"+y",x:10.85,y:0,z:-5.65,depth:.35},{id:"pn_hab_4",room:"hab",face:"-x",x:11.4,y:1.55,z:-15.15,depth:.32},{id:"pn_hab_5",room:"hab",face:"+z",x:3.1,y:1.55,z:-15.6,depth:.32},{id:"pn_hab_6",room:"hab",face:"-x",x:11.4,y:1.55,z:-10.4,depth:.32},{id:"pn_hab_7",room:"hab",face:"+z",x:7.1,y:1.55,z:-15.6,depth:.32},{id:"pn_hab_8",room:"hab",face:"-y",x:2.85,y:2.8,z:-9.4,depth:.35},{id:"pn_comm_1",room:"comm",face:"+y",x:14,y:0,z:-8.15,depth:.35},{id:"pn_comm_2",room:"comm",face:"+y",x:15.75,y:0,z:-10.15,depth:.35},{id:"pn_comm_3",room:"comm",face:"+y",x:12.75,y:0,z:-6.15,depth:.35},{id:"pn_comm_4",room:"comm",face:"-x",x:16.4,y:1.55,z:-6.15,depth:.32},{id:"pn_comm_5",room:"comm",face:"+x",x:11.8,y:1.55,z:-10.15,depth:.32},{id:"pn_comm_6",room:"comm",face:"+x",x:11.8,y:1.55,z:-6.65,depth:.32},{id:"pn_comm_7",room:"comm",face:"-y",x:14,y:2.8,z:-10.15,depth:.35},{id:"pn_bay_1",room:"bay",face:"+y",x:7.85,y:0,z:-24.3,depth:.35},{id:"pn_bay_2",room:"bay",face:"+y",x:15.85,y:0,z:-17.55,depth:.35},{id:"pn_bay_3",room:"bay",face:"+y",x:15.85,y:0,z:-30.55,depth:.35},{id:"pn_bay_4",room:"bay",face:"-z",x:2.85,y:1.55,z:-17,depth:.32},{id:"pn_bay_5",room:"bay",face:"+z",x:2.85,y:1.55,z:-31,depth:.32},{id:"pn_bay_6",room:"bay",face:"+z",x:9.35,y:1.55,z:-31,depth:.32},{id:"pn_bay_7",room:"bay",face:"-z",x:9.35,y:1.55,z:-17,depth:.32},{id:"pn_store_1",room:"store",face:"+y",x:22.75,y:0,z:-24.05,depth:.35},{id:"pn_store_2",room:"store",face:"+y",x:28.25,y:0,z:-29.55,depth:.35},{id:"pn_store_3",room:"store",face:"+y",x:27.25,y:0,z:-18.55,depth:.35},{id:"pn_store_4",room:"store",face:"-x",x:28.8,y:1.55,z:-21.8,depth:.32},{id:"pn_store_5",room:"store",face:"-x",x:28.8,y:1.55,z:-26.55,depth:.32},{id:"pn_store_6",room:"store",face:"-x",x:28.8,y:1.55,z:-19.55,depth:.32},{id:"pn_store_7",room:"store",face:"-x",x:28.8,y:1.55,z:-17.55,depth:.32},{id:"pn_mind_1",room:"mind",face:"+y",x:23.15,y:0,z:-13.65,depth:.35},{id:"pn_mind_2",room:"mind",face:"+y",x:20.65,y:0,z:-15.65,depth:.35},{id:"pn_mind_3",room:"mind",face:"+y",x:25.15,y:0,z:-11.15,depth:.35},{id:"pn_mind_4",room:"mind",face:"-x",x:26.2,y:1.55,z:-16.15,depth:.32},{id:"pn_mind_5",room:"mind",face:"+x",x:20.2,y:1.55,z:-12.15,depth:.32},{id:"pn_mind_6",room:"mind",face:"-x",x:26.2,y:1.55,z:-12.65,depth:.32},{id:"pn_mind_7",room:"mind",face:"+x",x:20.2,y:1.55,z:-13.9,depth:.32},{id:"pn_mind_8",room:"mind",face:"-y",x:22.9,y:3.2,z:-11.4,depth:.35},{id:"pn_gallery_1",room:"gallery",face:"+y",x:31.9,y:0,z:-23.9,depth:.35},{id:"pn_gallery_2",room:"gallery",face:"+y",x:29.65,y:0,z:-27.15,depth:.35},{id:"pn_gallery_3",room:"gallery",face:"+y",x:34.15,y:0,z:-27.15,depth:.35},{id:"pn_gallery_4",room:"gallery",face:"-z",x:29.65,y:1.55,z:-20.4,depth:.32},{id:"pn_gallery_5",room:"gallery",face:"-z",x:34.15,y:1.55,z:-20.4,depth:.32},{id:"pn_gallery_6",room:"gallery",face:"+z",x:31.9,y:1.55,z:-27.6,depth:.32},{id:"pn_gallery_7",room:"gallery",face:"+x",x:29.2,y:1.55,z:-21.9,depth:.32},{id:"pn_gallery_8",room:"gallery",face:"-y",x:34.15,y:3.4,z:-24.65,depth:.35}],pl={"+x":[1,0,0],"-x":[-1,0,0],"+z":[0,0,1],"-z":[0,0,-1],"+y":[0,1,0],"-y":[0,-1,0]};function cf(n,e,t,i){const s=pl[n.face],r=[n.x,n.y,n.z],a={};return["x","y","z"].forEach((l,o)=>{if(s[o]){const c=r[o]+s[o]*e,u=r[o]+s[o]*t;a[l+"0"]=Math.min(c,u),a[l+"1"]=Math.max(c,u)}else a[l+"0"]=r[o]-i,a[l+"1"]=r[o]+i}),a}const ur=n=>cf(n,-n.depth,0,Vt.niche/2),Ac=n=>cf(n,0,.022,Vt.w/2);function Vo(n,e){const t=pl[n.face],i=Vt.w/2-.05,s=[[-1,-1],[1,-1],[1,1],[-1,1]][e],r=t[0]?[0,0,1]:t[2]?[1,0,0]:[1,0,0],a=t[1]?[0,0,1]:[0,1,0];return[n.x+r[0]*s[0]*i+a[0]*s[1]*i+t[0]*.02,n.y+r[1]*s[0]*i+a[1]*s[1]*i+t[1]*.02,n.z+r[2]*s[0]*i+a[2]*s[1]*i+t[2]*.02]}const Ln={r:.3,stand:1.3,eye:1.2,step:.28};function Zx(n,e){const t=n.grid,[i,s,r]=n.shell.size,[a,l,o]=e.cell,c=u=>(u+.5)*t;switch(e.face){case"+y":return[c(a),0,c(o)];case"-y":return[c(a),s,c(o)];case"+x":return[0,c(l),c(o)];case"-x":return[i,c(l),c(o)];case"+z":return[c(a),c(l),0];default:return[c(a),c(l),r]}}function jx(n){const e=n.grid,t=n.shell.size,i=n.shell.kit,s=mr[i],[r,a,l]=t,o={G:e,size:t,kit:s},c={id:n.id,G:e,size:t,kit:i,statics:[],parts:[],joints:[],panels:[],portals:[],nodes:{},edges:[],lights:[],fixtures:[],windows:[],hatches:[],cables:[],texts:[],keys:[],opens:[],views:[],holes:[],doors:[],prefabOf:{}};for(const f of n.portals||[]){const v=f.at*e,x=(f.at+f.w)*e,p=(f.y||0)*e,y=p+f.h*e,T=f.wall==="W"||f.wall==="E"?"z":"x",b=(v+x)/2,A={W:[.7,b],E:[r-.7,b],S:[b,.7],N:[b,l-.7]}[f.wall],R={W:-Math.PI/2,E:Math.PI/2,S:Math.PI,N:0}[f.wall],M={id:f.id,side:f.wall,a0:v,a1:x,y0:p,y1:y,to:f.to,door:f.door,inside:A,yaw:R,along:T};if(c.portals.push(M),c.holes.push({side:f.wall,a0:v,a1:x,y0:p,y1:y,id:f.id}),c.statics.push(...Xx(i,t,M)),f.door!=="none"){const C=s.wallT,P={W:-C/2,E:r+C/2,S:-C/2,N:l+C/2}[f.wall],N=T==="z"?jt(f.id+".door","door",P-.04,P+.04,p,y,v,x,{prefab:f.id,door:f.id}):jt(f.id+".door","door",v,x,p,y,P-.04,P+.04,{prefab:f.id,door:f.id});c.statics.push(N),c.doors.push({id:f.id,kind:f.door,box:N,along:T}),c.nodes[f.id]={kind:"door"}}c.keys.push({id:f.id,at:[A[0],p+1,A[1]],portal:!0,...p?{high:p}:{}}),c.prefabOf[f.id]={id:f.id,type:"portal"}}for(const f of n.prefabs||[]){const v=hl[f.type];if(!v)continue;c.prefabOf[f.id]=f;const x=v.compile(f,o)||{};for(const p of["statics","parts","joints","lights","fixtures","windows","hatches","cables","texts","keys","opens","holes"])x[p]&&c[p].push(...x[p]);if(x.panels)for(const p of x.panels)c.panels.push({...p,room:n.id});x.nodes&&Object.assign(c.nodes,x.nodes)}c.statics.unshift(...Wx(i,t,c.holes));for(const f of n.slots||[]){const[v,x,p]=Zx(n,f),y=f.face==="+y"?s.niche.floor:f.face==="-y"?s.niche.ceil:s.niche.wall;c.panels.push({id:f.id,room:n.id,face:f.face,x:v,y:x,z:p,depth:y,panel:f.panel})}for(const[f,v]of n.net&&n.net.power||[])c.edges.push([f,v]);const u=r/2,d=l/2;for(const f of c.portals)c.views.push(f.y0?{id:"portal_"+f.id,eye:[u+(f.side==="W"?.6:f.side==="E"?-.6:0),Ln.eye,d+(f.side==="S"?.6:f.side==="N"?-.6:0)],look:[f.side==="W"?0:f.side==="E"?r:(f.a0+f.a1)/2,f.y0+.2,f.side==="S"?0:f.side==="N"?l:(f.a0+f.a1)/2]}:{id:"portal_"+f.id,eye:[f.inside[0],Ln.eye,f.inside[1]],look:[u,.9,d]});c.views.push({id:"corner_sw",eye:[.6,1.6,.6],look:[r-.6,.6,l-.6]}),c.views.push({id:"corner_ne",eye:[r-.6,1.6,l-.6],look:[.6,.6,.6]}),c.views.push({id:"corner_nw",eye:[.6,1.6,l-.6],look:[r-.6,.6,.6]}),c.views.push({id:"corner_se",eye:[r-.6,1.6,.6],look:[.6,.6,l-.6]}),c.views=c.views.slice(0,6);const h=c.portals[0],m=n.spawn;return c.climb=n.climb||null,c.fall=n.fall||null,c.spawn=m?{x:(m.at[0]+.5)*e,z:(m.at[1]+.5)*e,yaw:(m.yaw||0)*Math.PI/180}:h?{x:h.inside[0],z:h.inside[1],yaw:h.yaw}:{x:u,z:d,yaw:0},c.niches=c.panels.map(f=>({...ur(f),id:f.id})),c}const Qx=n=>{if(n<2)return!1;for(let e=2;e*e<=n;e++)if(n%e===0)return!1;return!0};function Vr(n){for(let e=2;e<=n;e++){if(!Qx(e)||n%e)continue;let t=n,i=0;for(;t%e===0;)t/=e,i++;return t===1?{p:e,k:i}:null}return null}const Rc=n=>String(n).split("").reduce((e,t)=>e+ +t,0),da={prime_power:{params:{minExp:{type:"integer",minimum:1,maximum:5}},test:(n,e={})=>{const t=Vr(n);return!!t&&t.k>=(e.minExp??2)},why:(n,e={})=>{const t=Vr(n);return t&&t.k>=(e.minExp??2)?`${n} = ${t.p}^${t.k}`:`${n}: не степень простого`},hint:{ru:[["степен"],["прост"]],en:[["power"],["prime"]]}},prime_or_power:{off:!0,params:{},test:n=>!!Vr(n),why:n=>{const e=Vr(n);return e?e.k===1?`${n}: простое`:`${n} = ${e.p}^${e.k}`:`${n}: не простое и не степень простого`},hint:{ru:[["прост"]],en:[["prime"]]}},digit_sum:{params:{sum:{type:"integer",minimum:1,maximum:27}},test:(n,e={})=>Rc(n)===(e.sum??10),why:(n,e={})=>`${n}: сумма цифр ${Rc(n)}, нужна ${e.sum??10}`,hint:{ru:[["сумм"],["цифр"]],en:[["sum"],["digit"]]}}},Cc=Object.keys(da).filter(n=>!da[n].off);function ev(n,e){const t=da[n.rule];if(!t)return null;const i=[],s={};for(const r of e)s[r.id]=t.why(r.number,n.param||{}),t.test(r.number,n.param||{})&&i.push(r.id);return{danger:i,why:s}}const Pc="drift.room/0",_s={type:"string",pattern:"^[a-z][a-z0-9_]{0,31}$"},Lc={type:"string",pattern:"^[a-z][a-z0-9_]*(\\.[a-z][a-z0-9_]*){0,3}$",maxLength:64},Ja={type:"string",pattern:"^[a-z][a-z0-9_.]{0,47}$"},nr=n=>({type:"array",items:{type:"integer",minimum:0,maximum:64},minItems:n,maxItems:n}),tv={floor:{at:nr(2),rot:{type:"integer",enum:[0,90,180,270]}},wall:{wall:{type:"string",enum:dl},at:nr(2)},ceil:{at:nr(2),rot:{type:"integer",enum:[0,90,180,270]}},path:{}},nv={floor:["at"],wall:["wall","at"],ceil:["at"],path:[]};function iv(n){const e=hl[n];return{type:"object",additionalProperties:!1,properties:{type:{const:n},id:_s,...tv[e.mount],...e.params,note:{type:"string",maxLength:200}},required:["type","id",...nv[e.mount],...e.required||[]]}}const Dc={oneOf:[{type:"string",minLength:1,maxLength:600},{type:"object",additionalProperties:!1,properties:{title:{type:"string",minLength:1,maxLength:40},rows:{type:"array",items:{type:"string",maxLength:48},maxItems:8}},required:["title","rows"]}]};function sv(){return{$schema:"https://json-schema.org/draft/2020-12/schema",$id:Pc,title:"ДРЕЙФ: файл комнаты",type:"object",additionalProperties:!1,required:["schema","id","grid","shell","portals","prefabs","texts","budget"],properties:{schema:{const:Pc},id:Lc,grid:{type:"number",enum:[.5]},shell:{type:"object",additionalProperties:!1,required:["size","kit"],properties:{size:{type:"array",prefixItems:[{type:"number",minimum:2,maximum:16},{type:"number",minimum:2.5,maximum:12},{type:"number",minimum:2,maximum:16}],minItems:3,maxItems:3},kit:{type:"string",enum:Vx}}},portals:{type:"array",minItems:1,maxItems:4,items:{type:"object",additionalProperties:!1,required:["id","wall","at","w","h","to","door"],properties:{id:_s,wall:{type:"string",enum:dl},at:{type:"integer",minimum:0,maximum:64},w:{type:"integer",minimum:2,maximum:4},h:{type:"integer",minimum:4,maximum:5},y:{type:"integer",minimum:0,maximum:18},to:Lc,door:{type:"string",enum:Kx}}}},slots:{type:"array",maxItems:16,items:{type:"object",additionalProperties:!1,required:["id","cell","face","panel","screws"],properties:{id:_s,cell:nr(3),face:{type:"string",enum:["+y","-y","+x","-x","+z","-z"]},panel:{type:"string",enum:Object.keys(Yx)},screws:{type:"integer",enum:[4]}}}},prefabs:{type:"array",maxItems:48,items:{oneOf:$x.map(iv)}},spawn:{type:"object",additionalProperties:!1,required:["at"],properties:{at:nr(2),yaw:{type:"integer",enum:[0,90,180,270]}}},climb:{type:"object",additionalProperties:!1,required:["exit"],properties:{exit:_s}},fall:{type:"object",additionalProperties:!1,properties:{safe:{type:"number",minimum:1,maximum:6},perM:{type:"number",minimum:0,maximum:100}}},net:{type:"object",additionalProperties:!1,properties:{power:{type:"array",maxItems:32,items:{type:"array",items:_s,minItems:2,maxItems:2}}}},trap:{type:"object",additionalProperties:!1,required:["rule","hatches","hints"],properties:{rule:{type:"string",enum:Cc},param:{type:"object",additionalProperties:!1,properties:Object.assign({},...Cc.map(n=>da[n].params))},hatches:{type:"array",items:_s,minItems:2,maxItems:4},hints:{type:"array",items:Ja,minItems:1,maxItems:4}}},texts:{type:"object",additionalProperties:!1,required:["ru","en"],properties:{ru:{type:"object",propertyNames:Ja,additionalProperties:Dc},en:{type:"object",propertyNames:Ja,additionalProperties:Dc}}},budget:{type:"object",additionalProperties:!1,required:["drawCalls","dynamicBodies","tris"],properties:{drawCalls:{type:"integer",minimum:10,maximum:200},dynamicBodies:{type:"integer",minimum:1,maximum:200},tris:{type:"integer",minimum:1e3,maximum:3e5},pieces:{type:"integer",minimum:4,maximum:80},seam:{type:"integer",minimum:80,maximum:2e3}}},note:{type:"string",maxLength:400}}}}const rv=n=>n===null?"null":Array.isArray(n)?"array":Number.isInteger(n)?"integer":typeof n;function Ic(n,e){return n==="integer"?Number.isInteger(e):n==="number"?typeof e=="number"&&Number.isFinite(e):n==="array"?Array.isArray(e):n==="object"?e!==null&&typeof e=="object"&&!Array.isArray(e):typeof e===n}function Yi(n,e,t="$",i=[]){if(n===!0||n===void 0)return i;if(n===!1)return i.push({path:t,msg:"лишний элемент"}),i;if(n.oneOf){if(n.oneOf.every(a=>a.properties&&a.properties.type&&"const"in a.properties.type)&&e&&typeof e=="object"){const a=n.oneOf.find(l=>l.properties.type.const===e.type);return a?Yi(a,e,t,i):(i.push({path:t+".type",msg:`неизвестный тип ${JSON.stringify(e.type)}; есть: ${n.oneOf.map(l=>l.properties.type.const).join(", ")}`}),i)}const r=n.oneOf.map(a=>Yi(a,e,t,[]));return r.some(a=>!a.length)||i.push(...r.reduce((a,l)=>l.length<a.length?l:a)),i}if("const"in n&&e!==n.const)return i.push({path:t,msg:`нужно ${JSON.stringify(n.const)}, стоит ${JSON.stringify(e)}`}),i;if(n.type&&!Ic(n.type,e))return i.push({path:t,msg:`тип ${rv(e)}, нужен ${n.type}`}),i;if(n.enum&&!n.enum.includes(e)&&i.push({path:t,msg:`${JSON.stringify(e)} не из списка ${JSON.stringify(n.enum)}`}),typeof e=="number"&&(n.minimum!==void 0&&e<n.minimum&&i.push({path:t,msg:`${e} меньше ${n.minimum}`}),n.maximum!==void 0&&e>n.maximum&&i.push({path:t,msg:`${e} больше ${n.maximum}`})),typeof e=="string"&&(n.minLength!==void 0&&e.length<n.minLength&&i.push({path:t,msg:`строка короче ${n.minLength}`}),n.maxLength!==void 0&&e.length>n.maxLength&&i.push({path:t,msg:`строка длиннее ${n.maxLength} (${e.length})`}),n.pattern&&!new RegExp(n.pattern).test(e)&&i.push({path:t,msg:`${JSON.stringify(e)} не по образцу ${n.pattern}`})),Array.isArray(e)&&(n.minItems!==void 0&&e.length<n.minItems&&i.push({path:t,msg:`элементов ${e.length}, нужно не меньше ${n.minItems}`}),n.maxItems!==void 0&&e.length>n.maxItems&&i.push({path:t,msg:`элементов ${e.length}, можно не больше ${n.maxItems}`}),e.forEach((s,r)=>Yi(n.prefixItems&&r<n.prefixItems.length?n.prefixItems[r]:n.items,s,`${t}[${r}]`,i))),Ic("object",e)&&(n.properties||n.required||n.additionalProperties!==void 0||n.propertyNames)){for(const s of n.required||[])s in e||i.push({path:t,msg:`нет поля ${s}`});for(const[s,r]of Object.entries(e))n.propertyNames&&Yi(n.propertyNames,s,`${t}{${s}}`,i),n.properties&&s in n.properties?Yi(n.properties[s],r,`${t}.${s}`,i):n.additionalProperties===!1?i.push({path:`${t}.${s}`,msg:"поля нет в схеме"}):n.additionalProperties&&typeof n.additionalProperties=="object"&&Yi(n.additionalProperties,r,`${t}.${s}`,i)}return i}const av=n=>Yi(sv(),n),Rt=(n,e)=>n[0]*e[0]+n[1]*e[1]+n[2]*e[2],Bt=(n,e)=>[n[0]-e[0],n[1]-e[1],n[2]-e[2]],si=(n,e)=>[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]],Pn=n=>Math.hypot(n[0],n[1],n[2]),hi=n=>{const e=Pn(n)||1;return[n[0]/e,n[1]/e,n[2]/e]},ov=1e-6;function Nc(n){const e=[];for(const[t,i,s,r,a,l]of[[0,1,2,-1,1,1],[0,-1,2,1,1,1],[1,1,0,1,2,-1],[1,-1,0,1,2,1],[2,1,0,1,1,1],[2,-1,0,-1,1,1]]){const o=[0,0,0];o[t]=i;const c=[[0,0],[1,0],[1,1],[0,1]].map(([u,d])=>{const h=[0,0,0];return h[t]=i*n[t],h[s]=r*(u*2-1)*n[s],h[a]=l*(d*2-1)*n[a],[...h,u,d]});Rt(si(Bt(c[1],c[0]),Bt(c[2],c[0])),o)<0&&c.reverse(),e.push({n:o,w:n[t],cut:!1,v:c})}return{faces:e}}function lv(n,e,t,i){const s=[],r=n.v.map(a=>{const l=(Rt(e,a)-t)*i;return Math.abs(l)<ov?0:l});for(let a=0;a<n.v.length;a++){const l=(a+1)%n.v.length,o=n.v[a],c=n.v[l];if(r[a]<=0&&s.push(o),r[a]<0&&r[l]>0||r[a]>0&&r[l]<0){const u=r[a]/(r[a]-r[l]);s.push(o.map((d,h)=>d+(c[h]-d)*u))}}return s.length>=3?{...n,v:s}:null}function cv(n,e,t,i){const s=[];for(const d of n)for(const h of d.v)Math.abs(Rt(e,h)-t)<5e-6&&!s.some(m=>Math.hypot(m[0]-h[0],m[1]-h[1],m[2]-h[2])<1e-5)&&s.push([h[0],h[1],h[2]]);if(s.length<3)return null;const r=s.reduce((d,h)=>[d[0]+h[0]/s.length,d[1]+h[1]/s.length,d[2]+h[2]/s.length],[0,0,0]),a=hi(Math.abs(e[1])<.9?si(e,[0,1,0]):si(e,[1,0,0])),l=si(e,a),c=s.map(d=>{const h=Bt(d,r);return{p:d,a:Math.atan2(Rt(h,l),Rt(h,a)),u:Rt(h,a),v:Rt(h,l)}}).sort((d,h)=>d.a-h.a).map(d=>[...d.p,d.u*2,d.v*2]),u=e.map(d=>d*i);return Rt(si(Bt(c[1],c[0]),Bt(c[2],c[0])),u)<0&&c.reverse(),{n:u,w:t*i,cut:!0,v:c}}function Uc(n,e,t,i){const s=n.faces.map(a=>lv(a,e,t,i)).filter(Boolean),r=cv(s,e,t,i);return!r||s.length<3?null:{faces:[...s.filter(a=>uv(a)>1e-9),r]}}const uv=n=>{let e=[0,0,0];for(let t=1;t+1<n.v.length;t++){const i=si(Bt(n.v[t],n.v[0]),Bt(n.v[t+1],n.v[0]));e=[e[0]+i[0],e[1]+i[1],e[2]+i[2]]}return Pn(e)/2};function fv(n,e,t,i=0){const s=hi(e),r=Uc(n,s,t-i/2,1),a=Uc(n,s,t+i/2,-1);return r&&a?[r,a]:null}function zc(n){let e=0;const t=[0,0,0];for(const i of n.faces)for(let s=1;s+1<i.v.length;s++){const r=i.v[0],a=i.v[s],l=i.v[s+1],o=Rt(r,si(a,l))/6;e+=o;for(let c=0;c<3;c++)t[c]+=o*(r[c]+a[c]+l[c])/4}return{volume:e,center:e>1e-12?t.map(i=>i/e):[0,0,0]}}const dv=(n,e)=>({faces:n.faces.map(t=>({...t,w:t.w-Rt(t.n,e),v:t.v.map(i=>[i[0]-e[0],i[1]-e[1],i[2]-e[2],i[3],i[4]])}))});function Wo(n){const e=[];for(const t of n.faces)for(const i of t.v)e.some(s=>Math.abs(s[0]-i[0])+Math.abs(s[1]-i[1])+Math.abs(s[2]-i[2])<1e-5)||e.push([i[0],i[1],i[2]]);return e}const hv=n=>Wo(n).reduce((e,t)=>[Math.max(e[0],Math.abs(t[0])),Math.max(e[1],Math.abs(t[1])),Math.max(e[2],Math.abs(t[2]))],[0,0,0]);function pv(n,e){let t=1e9,i=-1e9;for(const s of n.faces)for(const r of s.v){const a=Rt(e,r);t=Math.min(t,a),i=Math.max(i,a)}return[t,i]}function Za(n,e,t,i=1e9){let s=1e-4,r=i,a=null;for(const l of t.faces){const o=Rt(l.n,e),c=l.w-Rt(l.n,n);if(Math.abs(o)<1e-9){if(c<0)return null;continue}const u=c/o;if(o<0?u>s&&(s=u,a=l):r=Math.min(r,u),s>r)return null}return a?{t:s,n:a.n,cut:a.cut}:null}function Fc(n,e){if(n.faces.every(r=>Rt(r.n,e)-r.w<=0))return e;let t=null,i=1e18;const s=r=>{const a=(r[0]-e[0])**2+(r[1]-e[1])**2+(r[2]-e[2])**2;a<i&&(i=a,t=r)};for(const r of n.faces){const a=Rt(r.n,e)-r.w;if(a<=0)continue;const l=[e[0]-r.n[0]*a,e[1]-r.n[1]*a,e[2]-r.n[2]*a];let o=!0;for(let c=0;c<r.v.length;c++){const u=r.v[c],d=r.v[(c+1)%r.v.length],h=[d[0]-u[0],d[1]-u[1],d[2]-u[2]],m=[l[0]-u[0],l[1]-u[1],l[2]-u[2]];if(Rt(si(h,m),r.n)>=0)continue;o=!1;const f=Math.max(0,Math.min(1,Rt(h,m)/(Rt(h,h)||1)));s([u[0]+h[0]*f,u[1]+h[1]*f,u[2]+h[2]*f])}o&&s(l)}return t||e}function mv(n,e,t=16){const i=a=>[n*Math.cos(a/t*Math.PI*2),n*Math.sin(a/t*Math.PI*2)],s=[...Array(t).keys()].map(i),r=[];for(let a=0;a<t;a++){const[l,o]=[s[a],s[(a+1)%t]],c=hi([l[0]+o[0],0,l[1]+o[1]]),u=[[l[0],-e,l[1],0,0],[l[0],e,l[1],0,1],[o[0],e,o[1],1,1],[o[0],-e,o[1],1,0]];r.push({n:c,w:c[0]*l[0]+c[2]*l[1],cut:!1,v:u})}for(const a of[1,-1]){const l=s.map(([o,c])=>[o,a*e,c,0,0]);a>0&&l.reverse(),r.push({n:[0,a,0],w:e,cut:!1,v:l})}return{faces:r}}function Oc(n,e,t,i,s=null){const r=[];for(const o of n.faces)if(!s||s(o))for(let c=0;c<o.v.length;c++){const u=o.v[c],d=o.v[(c+1)%o.v.length],h=Rt(e,u)-t,m=Rt(e,d)-t;if(h<=0&&m>=0||h>=0&&m<=0){const f=Math.abs(h-m)<1e-9?0:h/(h-m);r.push([0,1,2].map(v=>u[v]+(d[v]-u[v])*f))}}if(!r.length)return null;let a=1e9,l=-1e9;for(const o of r){const c=Rt(i,o);a=Math.min(a,c),l=Math.max(l,c)}return[a,l]}const qn=(n,e)=>[n[3]*e[0]+n[0]*e[3]+n[1]*e[2]-n[2]*e[1],n[3]*e[1]-n[0]*e[2]+n[1]*e[3]+n[2]*e[0],n[3]*e[2]+n[0]*e[1]-n[1]*e[0]+n[2]*e[3],n[3]*e[3]-n[0]*e[0]-n[1]*e[1]-n[2]*e[2]];function Ut(n,e){const[t,i,s,r]=n,a=2*(i*e[2]-s*e[1]),l=2*(s*e[0]-t*e[2]),o=2*(t*e[1]-i*e[0]);return[e[0]+r*a+(i*o-s*l),e[1]+r*l+(s*a-t*o),e[2]+r*o+(t*l-i*a)]}function gv(n,e,t){const i=Ut(e,[1,0,0]),s=Ut(e,[0,1,0]),r=Ut(e,[0,0,1]),a=l=>Math.abs(i[l])*t[0]+Math.abs(s[l])*t[1]+Math.abs(r[l])*t[2];return{x0:n[0]-a(0),x1:n[0]+a(0),y0:n[1]-a(1),y1:n[1]+a(1),z0:n[2]-a(2),z1:n[2]+a(2)}}async function xv({gravity:n=9.8}={}){const e=await Yr(()=>import("./rapier-Dr7-2af2.js"),[],import.meta.url),t=e.default||e;await t.init();const i=new t.World({x:0,y:-n,z:0});i.integrationParameters.numSolverIterations=6;const s=new Map,r=new Map,a=new Map,l=new t.EventQueue(!0),o={x:0,y:0,z:0,w:1},c=f=>({x:f[0],y:f[1],z:f[2]}),u=f=>({x:f[0],y:f[1],z:f[2],w:f[3]});let d=0,h=null;{const f=performance.now();i.step(),d=performance.now()-f}const m={kind:"rapier",warmMs:d,addStatic(f){const v=i.createCollider(t.ColliderDesc.cuboid((f.x1-f.x0)/2,(f.y1-f.y0)/2,(f.z1-f.z0)/2).setTranslation((f.x0+f.x1)/2,(f.y0+f.y1)/2,(f.z0+f.z1)/2).setFriction(.8));v.box=f,s.set(f.id,v)},setStatic(f,v){const x=s.get(f);x&&x.setEnabled(!!v)},addPart(f,{fixed:v=!1,kinematic:x=!1}={}){const p=(x?t.RigidBodyDesc.kinematicPositionBased():t.RigidBodyDesc.dynamic()).setTranslation(...f.p).setCanSleep(!0).setCcdEnabled(f.mass<4||!!f.poly);f.q&&p.setRotation({x:f.q[0],y:f.q[1],z:f.q[2],w:f.q[3]}),p.setLinearDamping(.05).setAngularDamping(.25);const y=i.createRigidBody(p),T=8*f.h[0]*f.h[1]*f.h[2],b=f.poly?Wo(f.poly):null,A=b&&t.ColliderDesc.convexHull(new Float32Array(b.flat())),R=A||(f.shape==="cyl"?t.ColliderDesc.cylinder(f.h[1],f.h[0]):t.ColliderDesc.cuboid(...f.h));A?R.setMass(f.mass):R.setDensity(f.mass/T),R.setFriction(.7).setRestitution(.1);const M=i.createCollider(R,y);return x||y.sleep(),r.set(f.id,{body:y,col:M,h:f.h,mass:f.mass,fixed:v,held:!1,pts:b,poly:f.poly||null}),f.id},joint(f,v,x,p,y=!0){const T=r.get(v),b=x==="world"?null:r.get(x);if(!T)return;if(!b){a.set(f,{world:!0,a:v}),T.body.setBodyType(t.RigidBodyType.KinematicPositionBased,!0);return}const A=T.body.translation(),R=b.body.translation(),M=T.body.rotation(),C=b.body.rotation(),P=Ut([-M.x,-M.y,-M.z,M.w],[p[0]-A.x,p[1]-A.y,p[2]-A.z]),N=Ut([-C.x,-C.y,-C.z,C.w],[p[0]-R.x,p[1]-R.y,p[2]-R.z]),F=qn([-C.x,-C.y,-C.z,C.w],[M.x,M.y,M.z,M.w]),V=t.JointData.fixed({x:P[0],y:P[1],z:P[2]},{x:0,y:0,z:0,w:1},{x:N[0],y:N[1],z:N[2]},{x:F[0],y:F[1],z:F[2],w:F[3]}),te=i.createImpulseJoint(V,T.body,b.body,!0);y||te.setContactsEnabled(!1),a.set(f,{j:te,a:v,b:x})},unjoint(f){const v=a.get(f);if(v){if(a.delete(f),v.world){const x=r.get(v.a);x&&![...a.values()].some(p=>p.world&&p.a===v.a)&&(x.body.setBodyType(t.RigidBodyType.Dynamic,!0),x.body.wakeUp());return}i.removeImpulseJoint(v.j,!0);for(const x of[v.a,v.b]){const p=r.get(x);p&&p.body.wakeUp()}}},release(f){const v=r.get(f);v&&(v.fixed=!1,v.body.bodyType()!==t.RigidBodyType.Dynamic&&!v.held&&v.body.setBodyType(t.RigidBodyType.Dynamic,!0),v.body.wakeUp())},setKinematic(f,v,x=!1){const p=r.get(f);p&&(p.held=!!v,p.body.setBodyType(v?t.RigidBodyType.KinematicPositionBased:t.RigidBodyType.Dynamic,!0),p.col.setSensor(!!v&&x),v||p.body.wakeUp())},moveKinematic(f,v,x){const p=r.get(f);p&&(p.body.setNextKinematicTranslation({x:v[0],y:v[1],z:v[2]}),x&&p.body.setNextKinematicRotation({x:x[0],y:x[1],z:x[2],w:x[3]}))},setPose(f,v,x,p=!0){const y=r.get(f);y&&(y.body.setTranslation({x:v[0],y:v[1],z:v[2]},!1),x&&y.body.setRotation({x:x[0],y:x[1],z:x[2],w:x[3]},!1),y.body.setLinvel({x:0,y:0,z:0},!1),y.body.setAngvel({x:0,y:0,z:0},!1),p&&y.body.bodyType()===t.RigidBodyType.Dynamic&&y.body.sleep())},impulse(f,v){const x=r.get(f);!x||x.body.bodyType()!==t.RigidBodyType.Dynamic||x.body.applyImpulse({x:v[0],y:v[1],z:v[2]},!0)},impulseAt(f,v,x){const p=r.get(f);!p||p.body.bodyType()!==t.RigidBodyType.Dynamic||p.body.applyImpulseAtPoint({x:v[0],y:v[1],z:v[2]},{x:x[0],y:x[1],z:x[2]},!0)},velocity(f,v){const x=r.get(f);x&&(x.body.setLinvel({x:v[0],y:v[1],z:v[2]},!0),x.body.wakeUp())},remove(f){const v=r.get(f);if(v){for(const[x,p]of a)(p.a===f||p.b===f)&&m.unjoint(x);i.removeRigidBody(v.body),r.delete(f)}},has:f=>r.has(f),wakeAll(){for(const f of r.values())f.body.bodyType()===t.RigidBodyType.Dynamic&&f.body.wakeUp()},setPlayer(f){const p=Math.max(.02,(f.h-.22)/2-.27),y={x:f.x,y:f.y+.22+p+.27,z:f.z};if(!h){h={body:i.createRigidBody(t.RigidBodyDesc.kinematicPositionBased().setTranslation(y.x,y.y,y.z))},h.col=i.createCollider(t.ColliderDesc.capsule(p,.27).setFriction(.2).setCollisionGroups(196607),h.body),h.hh=p;return}Math.abs(h.hh-p)>.001&&(h.col.setHalfHeight(p),h.hh=p);const T=h.body.translation();Math.hypot(T.x-y.x,T.y-y.y,T.z-y.z)>.4?h.body.setTranslation(y,!0):h.body.setNextKinematicTranslation(y)},step(f){i.timestep=Math.min(1/30,f);const v=performance.now();return i.step(l),d=performance.now()-v,d},pose(f){const v=r.get(f);if(!v)return null;const x=v.body.translation(),p=v.body.rotation();return{p:[x.x,x.y,x.z],q:[p.x,p.y,p.z,p.w],sleep:v.body.isSleeping(),v:(()=>{const y=v.body.linvel();return[y.x,y.y,y.z]})()}},aabb(f){const v=r.get(f),x=v&&m.pose(f);if(!x)return null;if(!v.pts)return gv(x.p,x.q,v.h);const p={x0:1e9,x1:-1e9,y0:1e9,y1:-1e9,z0:1e9,z1:-1e9};for(const y of v.pts){const T=Ut(x.q,y),b=x.p[0]+T[0],A=x.p[1]+T[1],R=x.p[2]+T[2];b<p.x0&&(p.x0=b),b>p.x1&&(p.x1=b),A<p.y0&&(p.y0=A),A>p.y1&&(p.y1=A),R<p.z0&&(p.z0=R),R>p.z1&&(p.z1=R)}return p},poly:f=>(r.get(f)||{}).poly||null,restsOnStatic(f){const v=r.get(f);if(!v)return!1;let x=!1,p=!1;const y=v.body.translation().y;return i.contactPairsWith(v.col,T=>{const b=T.parent();!b||!b.isDynamic()?(!h||b!==h.body)&&(x=x||!b):b.translation().y<y-.01&&(p=!0)}),x&&!p},anchor(f,v){const x=r.get(f);if(!x||x.held)return;const p=x.body.bodyType(),y=p===t.RigidBodyType.Dynamic;v&&y?x.body.setBodyType(t.RigidBodyType.KinematicPositionBased,!0):!v&&!y&&(x.body.setBodyType(t.RigidBodyType.Dynamic,!0),x.body.wakeUp())},carry(f,v){const x=r.get(f);x&&x.col.setCollisionGroups(v?131069:4294967295)},pointsAt(f,v,x){const p=r.get(f);return p?(p.pts||p.box||(p.box=[-1,1].flatMap(T=>[-1,1].flatMap(b=>[-1,1].map(A=>[T*p.h[0],b*p.h[1],A*p.h[2]]))))).map(T=>{const b=Ut(x,T);return[v[0]+b[0],v[1]+b[1],v[2]+b[2]]}):[]},overlaps(f,v,x,p){const y=r.get(f),T=[];if(!y)return T;const b=m.pointsAt(f,v,x),A=[0,1,2].map(M=>Math.min(...b.map(C=>C[M]))),R=[0,1,2].map(M=>Math.max(...b.map(C=>C[M])));for(const[M,C]of s){const P=C.box;if(!P||R[0]<P.x0||A[0]>P.x1||R[1]<P.y0||A[1]>P.y1||R[2]<P.z0||A[2]>P.z1||!C.isEnabled()||!p(M))continue;const N=y.col.shape.contactShape(c(v),u(x),C.shape,C.translation(),o,0);N&&N.distance<0&&T.push({id:M,depth:-N.distance,n:[-N.normal1.x,-N.normal1.y,-N.normal1.z]})}return T},thaw(f){const v=s.get(f);v&&(i.removeCollider(v,!0),s.delete(f))},freeze(f){const v=r.get(f);if(!v)return;const x=m.pose(f);i.removeRigidBody(v.body),r.delete(f),m.addFrozen({id:f,pts:v.pts,p:x.p,q:x.q})},addFrozen(f){const v=f.pts||Wo(f.poly),x=t.ColliderDesc.convexHull(new Float32Array(v.flat()));x&&s.set(f.id,i.createCollider(x.setTranslation(...f.p).setRotation({x:f.q[0],y:f.q[1],z:f.q[2],w:f.q[3]}).setFriction(.8)))},half:f=>(r.get(f)||{}).h,mass:f=>(r.get(f)||{}).mass,bodies:()=>[...r.keys()],stats(){let f=0,v=0,x=0;for(const p of r.values())p.body.bodyType()===t.RigidBodyType.Dynamic&&x++,p.body.isSleeping()?v++:f++;return{awake:f,asleep:v,total:r.size,dynamic:x,stepMs:d}},dispose(){i.free()}};return m}function vv({bounds:n,bind:e=!0}){e&&af({PH:{g:14,gBody:9.8,squeeze:3},playerR:.3,boundsAt:()=>n,placeAt:()=>!0,roomHeight:()=>n.h,spawn:{x:0,z:0,yaw:0,pitch:0},speed:3.2});const t={boxes:[]},i=new Set,s=new Map,r=new Map;let a=0,l=null;const o=()=>({boxes:t.boxes.filter(u=>!i.has(u.id)),circles:[]}),c={kind:"box",warmMs:0,addStatic(u){t.boxes.push(u)},setStatic(u,d){d?i.delete(u):i.add(u)},addPart(u,{fixed:d=!1,kinematic:h=!1}={}){return s.set(u.id,{id:u.id,x:u.p[0],y:u.p[1],z:u.p[2],hx:u.h[0],hy:u.h[1],hz:u.h[2],vx:0,vy:0,vz:0,rest:!0,fixed:d||h,held:!1,mass:u.mass,h:u.h,q:u.q||[0,0,0,1]}),u.id},joint(u,d,h){r.set(u,{a:d,b:h});const m=s.get(d);m&&(m.fixed=!0);const f=h!=="world"&&s.get(h);f&&(f.fixed=!0)},unjoint(u){r.delete(u)},release(u){const d=s.get(u);d&&!d.held&&(d.fixed=!1,d.rest=!1)},setKinematic(u,d){const h=s.get(u);h&&(h.held=!!d,h.fixed=!!d,d||(h.rest=!1))},moveKinematic(u,d,h){const m=s.get(u);m&&(m.x=d[0],m.y=d[1],m.z=d[2],h&&(m.q=h))},setPose(u,d,h){const m=s.get(u);m&&(m.x=d[0],m.y=d[1],m.z=d[2],h&&(m.q=h),m.vx=m.vy=m.vz=0,m.rest=!0)},impulse(u,d){const h=s.get(u);if(!h||h.fixed)return;const m=h.mass||1;h.vx+=d[0]/m,h.vy+=d[1]/m,h.vz+=d[2]/m,h.rest=!1},impulseAt(u,d){c.impulse(u,d)},velocity(u,d){const h=s.get(u);h&&(h.vx=d[0],h.vy=d[1],h.vz=d[2],h.rest=!1)},remove(u){s.delete(u);for(const[d,h]of r)(h.a===u||h.b===u)&&r.delete(d)},has:u=>s.has(u),poly:()=>null,restsOnStatic:()=>!1,freeze(){},addFrozen(){},thaw(){},carry(){},anchor(){},pointsAt(u,d){const h=s.get(u);return h?[-1,1].flatMap(m=>[-1,1].flatMap(f=>[-1,1].map(v=>[d[0]+m*h.hx,d[1]+f*h.hy,d[2]+v*h.hz]))):[]},overlaps(u,d,h,m){const f=s.get(u),v=[];if(!f)return v;for(const x of t.boxes){if(i.has(x.id)||!m(x.id))continue;const p=[[d[0]+f.hx-x.x0,[-1,0,0]],[x.x1-d[0]+f.hx,[1,0,0]],[d[1]+f.hy-x.y0,[0,-1,0]],[x.y1-d[1]+f.hy,[0,1,0]],[d[2]+f.hz-x.z0,[0,0,-1]],[x.z1-d[2]+f.hz,[0,0,1]]].sort((y,T)=>y[0]-T[0])[0];p[0]>0&&v.push({id:x.id,depth:p[0],n:p[1]})}return v},wakeAll(){for(const u of s.values())u.fixed||(u.rest=!1)},setPlayer(u){l={x0:u.x-.27,x1:u.x+.27,z0:u.z-.27,z1:u.z+.27,y0:u.y+.22,y1:u.y+u.h}},step(u){const d=performance.now(),h=o(),m=[...s.values()],f=m.map(Sc),v=l?[l]:[];for(let x=0;x<m.length;x++){const p=m[x];p.fixed||p.rest||(Sx(p,h,Math.min(1/30,u),f.filter((y,T)=>T!==x).concat(v)),f[x]=Sc(p))}return a=performance.now()-d,a},pose(u){const d=s.get(u);return d?{p:[d.x,d.y,d.z],q:d.q,sleep:d.rest||d.fixed,v:[d.vx,d.vy,d.vz]}:null},aabb(u){const d=s.get(u);return d?{x0:d.x-d.hx,x1:d.x+d.hx,y0:d.y-d.hy,y1:d.y+d.hy,z0:d.z-d.hz,z1:d.z+d.hz}:null},half:u=>(s.get(u)||{}).h,mass:u=>(s.get(u)||{}).mass,bodies:()=>[...s.keys()],stats(){let u=0,d=0,h=0;for(const m of s.values())m.fixed||h++,m.rest||m.fixed?d++:u++;return{awake:u,asleep:d,total:s.size,dynamic:h,stepMs:a}},dispose(){}};return c}async function _v(n,e={}){return n==="box"?vv(e):xv(e)}function yv({panels:n=Jx,cyc:e=()=>0}={}){const t=new Map(n.map(l=>[l.id,l])),i=new Map,s=()=>({fx:["bolt","bolt","bolt","bolt"],cut:[0,0,0,0],plate:"on",weld:0,seamCyc:-1,dirty:!1}),r=l=>t.has(l)?(i.has(l)||i.set(l,s()),i.get(l)):null,a=l=>l.cut.every(o=>o>=1);return{has:l=>t.has(l),cut(l,o,c){const u=r(l);return!u||u.plate!=="on"||o<0||o>3||u.cut[o]>=1?null:(u.cut[o]=Math.min(1,u.cut[o]+c/Vt.boltCut),u.cut[o])},loose:l=>{const o=r(l);return!!o&&o.plate==="on"&&a(o)},take(l){const o=r(l);return!o||o.plate!=="on"||!a(o)?!1:(o.plate="off",o.weld=0,o.dirty=!0,!0)},seatable(l,o){const c=r(l),u=t.get(l);if(!c||c.plate!=="off"||!o)return!1;const d=pl[u.face],h=[o[0]-u.x,o[1]-u.y,o[2]-u.z],m=h[0]*d[0]+h[1]*d[1]+h[2]*d[2];return Math.hypot(h[0]-m*d[0],h[1]-m*d[1],h[2]-m*d[2])<Vt.seat&&m>-.05&&m<Vt.seatOut},blocked(l,o=[]){const c=t.get(l);if(!c)return"";const u=ur(c),d=(o||[]).find(h=>h.x1>u.x0&&h.x0<u.x1&&h.y1>u.y0&&h.y0<u.y1&&h.z1>u.z0&&h.z0<u.z1);return d?d.id||"plot":""},seat(l,o,c=[]){const u=r(l);return!u||!this.seatable(l,o)||this.blocked(l,c)?!1:(u.plate="seat",u.weld=0,!0)},unseat(l){const o=r(l);return!o||o.plate!=="seat"?!1:(o.plate="off",o.weld=0,!0)},weld(l,o){const c=r(l);return!c||c.plate!=="seat"?null:(c.weld=Math.min(1,c.weld+o/Vt.weld),c.weld>=1&&(c.plate="on",c.fx=["weld","weld","weld","weld"],c.cut=[0,0,0,0],c.seamCyc=e(),c.dirty=!0),c.weld)},view(l){const o=r(l);if(!o)return null;const c=o.fx[0]==="weld"?o.seamCyc===e()?1:2:0;return{bolts:o.cut.map(u=>u>=1?1:0),fx:o.fx.slice(),plate:o.plate==="off"?"off":"on",seated:o.plate==="seat",weld:+o.weld.toFixed(2),seam:c}},open:l=>{const o=r(l);return!!o&&o.plate==="off"},load(l){for(const[o,c,u]of l||[]){const d=r(o);!d||d.dirty||(c==="off"?(d.plate="off",d.cut=[1,1,1,1]):(d.plate="on",d.cut=[0,0,0,0],u>=0&&(d.fx=["weld","weld","weld","weld"],d.seamCyc=u)))}},shared(){const l=[];for(const[o,c]of i)c.dirty&&(l.push([o,c.plate==="off"?"off":"on"]),c.dirty=!1);return l},state:()=>[...i].map(([l,o])=>({id:l,...o}))}}const kc=.08,Ri=.75,uf=n=>[-n[0],-n[1],-n[2],n[3]];function Mv(n,e,t,i,s,r){const a=uf(i),l=Ut(a,[n-t[0],-t[1],e-t[2]]),o=Ut(a,[0,1,0]);let c=-1e9,u=1e9;const d=(h,m)=>{const f=h[0]*o[0]+h[1]*o[1]+h[2]*o[2],v=h[0]*l[0]+h[1]*l[1]+h[2]*l[2]-m;if(Math.abs(f)<1e-9)return v<=1e-9;const x=-v/f;return f>0?u=Math.min(u,x):c=Math.max(c,x),c<=u};if(r){for(const h of r)if(!d(h.n,h.w))return null}else for(let h=0;h<3;h++){const m=[0,0,0];if(m[h]=1,!d(m,s[h])||(m[h]=-1,!d(m,s[h])))return null}return u-c>1e-4?[c,u]:null}const bv=n=>{for(const e of[[1,0,0],[0,1,0],[0,0,1]]){const t=Ut(n,e);if(Math.max(Math.abs(t[0]),Math.abs(t[1]),Math.abs(t[2]))<.9995)return!1}return!0};function Bc(n,e,t,i,s,r,a=null){if(i.x0>s+Ri||i.x1<s-Ri||i.z0>r+Ri||i.z1<r-Ri)return[];if(!a&&bv(e.q))return[{...i,id:n}];const l=[],o=Math.max(i.x0,s-Ri),c=Math.min(i.x1,s+Ri),u=Math.max(i.z0,r-Ri),d=Math.min(i.z1,r+Ri),h=Math.max(1,Math.ceil((c-o)/kc)),m=Math.max(1,Math.ceil((d-u)/kc)),f=(c-o)/h,v=(d-u)/m;for(let x=0;x<h;x++)for(let p=0;p<m;p++){const y=Mv(o+(x+.5)*f,u+(p+.5)*v,e.p,e.q,t,a);y&&l.push({x0:o+x*f,x1:o+(x+1)*f,z0:u+p*v,z1:u+(p+1)*v,y0:y[0],y1:y[1],id:n})}return l}function Hc(n,e,t,i=null){const s=Ut(uf(e.q),[n[0]-e.p[0],n[1]-e.p[1],n[2]-e.p[2]]);if(i){let r=-1e9;for(const a of i)r=Math.max(r,a.n[0]*s[0]+a.n[1]*s[1]+a.n[2]*s[2]-a.w);return Math.max(0,r)}return Math.hypot(...[0,1,2].map(r=>Math.max(0,Math.abs(s[r])-t[r])))}const Sv={W:[1,0,0],E:[-1,0,0],S:[0,0,1],N:[0,0,-1]},ja={slop:.004,deep:.05,small:.12},Gc=(n,e)=>n[0]*e[0]+n[1]*e[1]+n[2]*e[2];function wv({S:n,C:e,phys:t,mut:i,ev:s}){const[r,a,l]=e.size,o=.4,c=new Map(e.statics.map(P=>[P.id,P])),u=P=>P.kind==="wall"?Sv[P.side]:P.kind==="floor"?[0,1,0]:P.kind==="ceil"?[0,-1,0]:null,d=P=>P.side==="W"?0:P.side==="E"?-r:P.side==="S"?0:P.side==="N"?-l:P.kind==="floor"?0:-a,h=P=>P&&P.kind!=="note"&&!(P.kind==="glass"&&(n.windows.get(P.id)||{}).broken)&&!(P.kind==="door"&&(n.doors.get(P.door)||{}).open>.5),m=(P,N,F,V,te,B)=>P==="W"?[-B,0,V,te,N,F]:P==="E"?[r,r+B,V,te,N,F]:P==="S"?[N,F,V,te,-B,0]:[N,F,V,te,l,l+B],f=(P,N)=>P[0]>=N[0]&&P[0]<=N[1]&&P[1]>=N[2]&&P[1]<=N[3]&&P[2]>=N[4]&&P[2]<=N[5],v=P=>P[0]>=0&&P[0]<=r&&P[1]>=0&&P[1]<=a&&P[2]>=0&&P[2]<=l;function x(P,N=!1){if(v(P))return!0;for(const F of e.portals){const V=n.doors.get(F.id);if(!(N&&V&&V.open<=.5)&&f(P,m(F.side,F.a0,F.a1,F.y0-.05,F.y1+.3,o+1.6)))return!0}for(const F of n.windows.values())if(F.broken&&f(P,m(F.side,F.a0,F.a1,F.y0,F.y1,9)))return!0;for(const F of e.hatches)if((n.hatchOpen.get(F.id)||0)>0&&P[0]>F.x0&&P[0]<F.x1&&P[2]>F.z0&&P[2]<F.z1&&P[1]<.05)return!0;return!1}function p(P,N=h){const F=[0,0,0];for(let V=0;V<6;V++){let te=null,B=ja.slop;for(const j of P){const oe=[j.p[0]+F[0],j.p[1]+F[1],j.p[2]+F[2]];for(const re of t.overlaps(j.id,oe,j.q,Te=>N(c.get(Te)))){const Te=c.get(re.id),ie=u(Te);let Se=re.n,me=re.depth;if(ie&&(me>ja.small||Gc(Se,ie)<-.2)){Se=ie,me=0;const De=d(Te);for(const Ge of t.pointsAt(j.id,oe,j.q))me=Math.max(me,De-Gc(ie,Ge))}me>B&&(B=me,te=Se)}}if(!te)break;for(let j=0;j<3;j++)F[j]+=te[j]*(B+.001)}return F}function y(P,N){const F=P[0];if(x(F.p,N))return[0,0,0];const V={lo:[1e9,1e9,1e9],hi:[-1e9,-1e9,-1e9]};for(const B of P)for(const j of t.pointsAt(B.id,B.p,B.q))for(let oe=0;oe<3;oe++)V.lo[oe]=Math.min(V.lo[oe],j[oe]),V.hi[oe]=Math.max(V.hi[oe],j[oe]);const te=[r,a,l];return[0,1,2].map(B=>V.hi[B]-V.lo[B]>=te[B]?te[B]/2-(V.lo[B]+V.hi[B])/2:V.lo[B]<.003?.003-V.lo[B]:V.hi[B]>te[B]-.003?te[B]-.003-V.hi[B]:0)}const T=P=>P.filter(N=>t.has(N)).map(N=>{const F=t.pose(N);return{id:N,p:F.p,q:F.q}}),b=(P,N)=>P.map(F=>({...F,p:F.p.map((V,te)=>V+N[te])})),A=(P,N)=>P.map((F,V)=>F+N[V]);function R(P,N){if(i.has("noeject"))return N;const F=T(P),V=F[0],te=b(F,[0,1,2].map(j=>N[j]-V.p[j]));let B=y(te,!0);return B=A(B,p(b(te,B),h)),[0,1,2].map(j=>N[j]+B[j])}function M(P,N){if(i.has("noeject"))return 0;const F=T(P);if(!F.length)return 0;const V=y(F,!1),te=Math.hypot(...V)>0,B=A(V,p(b(F,V))),j=Math.hypot(...B);if(j<.002)return 0;for(const oe of F)t.setPose(oe.id,A(oe.p,B),oe.q,!1);return(te||j>ja.deep)&&s("returned",{id:F[0].id,why:N,d:+j.toFixed(3)}),j}function C(P){const N=t.pose(P);if(!N)return 0;if(!x(N.p))return 9;const F=t.aabb(P);if(F.x0>0&&F.y0>-.01&&F.z0>0&&F.x1<r&&F.y1<a&&F.z1<l)return 0;let V=0;for(const te of t.overlaps(P,N.p,N.q,B=>{const j=c.get(B);return!!j&&!!u(j)}))V=Math.max(V,te.depth);return V}return{hold:R,eject:M,depth:C,allowed:x}}const Gt={cap:40,minSpan:.04,minVol:2e-5,kerf:.008,sweep:1.6,beam:.03,near:.1,done:.92,face:.4,leave:.7,grace:.4,weld:.9,weldGap:.03,weldReach:.3,wallReach:.14,snap:.4,calm:20},Xo=new Set(["top","leg","plank","sheet","crate","crateL","plate","leaf","side","pallet","rod"]),Ev={hinge:.075,rivet:.06,weld:.09,dowel:.065,seam:.045},Ki=(n,e)=>[n[0]+e[0],n[1]+e[1],n[2]+e[2]],qi=(n,e)=>[n[0]*e,n[1]*e,n[2]*e],_i=n=>[-n[0],-n[1],-n[2],n[3]],Mn=(n,e)=>Ut(_i(n.q),Bt(e,n.p)),on=(n,e)=>Ki(Ut(n.q,e),n.p),Vn=n=>+n.toFixed(5),Vc=n=>n.faces.map(e=>[e.n.map(Vn),Vn(e.w),e.cut?1:0,e.v.map(t=>t.map(Vn))]),Wc=n=>({faces:n.map(([e,t,i,s])=>({n:e,w:t,cut:!!i,v:s}))});function Tv({S:n,C:e,phys:t,ev:i,mut:s,cap:r=Gt.cap,onSplit:a=()=>{},onMerge:l=()=>{},onBorn:o=()=>{},onWeld:c=()=>{}}){Object.assign(n,{pieces:new Map,merged:[],split:[],splitN:0,weldN:0,stroke:null,weld:null,beads:new Map});const u=t.kind==="rapier",d=new Map,h=z=>{const le=n.pieces.get(z);if(le)return le.poly;if(!d.has(z)){const Y=t.half(z),ae=e.parts.find(fe=>fe.id===z);d.set(z,ae&&ae.shape==="cyl"?mv(Y[0],Y[1]):Nc(Y))}return d.get(z)},m=z=>n.pieces.get(z)||null,f=z=>u&&t.has(z)&&z!==n.held&&Xo.has(n.partKind.get(z)),v=z=>z.la&&t.has(z.a)?on(t.pose(z.a),z.la):z.at,x=z=>[...n.joints.values()].filter(le=>le.a===z||le.b===z),p=z=>z.id.startsWith("weld:")?"seam":z.kind;function y(z){const le=n.beads.get(z.id);if(le&&t.has(le.a)){const Y=t.pose(le.a);return le.pts.map(ae=>on(Y,ae))}return[v(z)]}const T=(z,le)=>{let Y=null,ae=1;for(const fe of x(z)){const Ue=s.has("anyjoint")&&fe.kind==="hinge"?9:Ev[p(fe)]||Gt.near;for(const S of y(fe)){const k=Pn(Bt(S,le))/Ue;k<ae&&(ae=k,Y=fe)}}return Y},b=(z,le)=>((!n.refused||n.t-n.refused.t>.8||n.refused.why!==le)&&i("cut_refused",{id:z,why:le}),n.refused={t:n.t,why:le,id:z},null);function A(z){let le=Bt(z.p1,z.p0);Pn(le)<.02&&(le=z.right);const Y=qi(Ki(z.p0,z.p1),.5),ae=hi(si(le,z.d)),fe=hi(Bt(le,qi(z.d,Rt(le,z.d))));return{n:ae,w:Rt(ae,Y),e:fe}}function R(z){const{n:le,w:Y,e:ae}=A(z),fe=h(z.id),Ue=Oc(fe,le,Y,ae);if(!Ue||Ue[1]-Ue[0]<1e-4){z.cover=0,z.prog=0;return}const S=Math.min(Rt(ae,z.p0),Rt(ae,z.p1))-Gt.beam,k=Math.max(Rt(ae,z.p0),Rt(ae,z.p1))+Gt.beam,q=Ue[1]-Ue[0],pe=Z=>Math.max(0,Math.min(1,(Math.min(k,Z[1])-Math.max(S,Z[0]))/(Z[1]-Z[0])));if(z.cover=pe(Ue),z.cover>=Gt.face)for(const Z of z.ns){const Fe=Oc(fe,le,Y,ae,we=>Rt(Z,we.n)>.999);Fe&&Fe[1]-Fe[0]>.02&&(z.cover=Math.max(z.cover,pe(Fe)))}z.prog=Math.min(z.cover,z.t/(.25+.5*q))}function M(z,le,Y,ae){const fe=t.pose(z.id),Ue=Mn(fe,z.at),S=Mn(fe,le);let k=n.stroke;if(k&&(k.id!==z.id||n.t-k.seen>Gt.grace)&&(C(),k=null),k||(k=n.stroke={id:z.id,p0:Ue,p1:Ue,d:Ut(_i(fe.q),Y),right:Ut(_i(fe.q),hi(si(Y,Math.abs(Y[1])>.98?[1,0,0]:[0,1,0]))),t:0,cover:0,prog:0,path:[Ue],ns:[]}),z.n){const Z=Ut(_i(fe.q),z.n);k.ns.some(Fe=>Rt(Fe,Z)>.999)||k.ns.push(Z)}k.t+=ae,k.seen=n.t;const q=Bt(Ue,k.p1),pe=Pn(q);if(pe>1e-5&&(k.p1=Ki(k.p1,qi(q,Math.min(1,Gt.sweep*ae/pe)))),Pn(Bt(k.p1,k.path[k.path.length-1]))>.02&&k.path.length<64&&k.path.push(k.p1),k.d=hi(Bt(qi(Ki(k.p0,k.p1),.5),S)),R(k),k.prog>=Gt.done){const Z=A(k);return n.stroke=null,N(k.id,Z.n,Z.w),1}return k.prog}function C(){const z=n.stroke;if(n.stroke=null,z&&z.prog>=Gt.leave&&t.has(z.id)){const le=A(z);N(z.id,le.n,le.w)}}function P(){n.stroke&&n.t-n.stroke.seen>.05&&C(),n.weld&&n.t-n.weld.seen>Gt.grace&&(n.weld=null)}function N(z,le,Y){if(!f(z))return null;const ae=fv(h(z),le,Y,Gt.kerf);if(!ae)return b(z,"мелко");const fe=ae.map(zc),Ue=fe[0].volume+fe[1].volume;if(!s.has("nomin"))for(let $=0;$<2;$++){const Ce=pv(ae[$],hi(le));if(fe[$].volume<Gt.minVol||Ce[1]-Ce[0]<Gt.minSpan)return b(z,"мелко")}const S=n.pieces.get(z),k=S?1:2;if(!s.has("nocap")){for(;n.pieces.size+k>r&&te(z););if(n.pieces.size+k>r)return b(z,"много кусков")}const q=t.pose(z),pe=t.mass(z)||1,Z=n.partSm.get(z)??.3,Fe=n.partKind.get(z),we=S||{root:z,mat:(e.parts.find($=>$.id===z)||{}).mat||"steel",prefab:(e.parts.find($=>$.id===z)||{}).prefab||""};if(n.carry&&n.carry.has(z))return b(z,"в руках");const I=x(z).map($=>({j:$,l:Mn(q,v($)),at:v($)}));for(const{j:$}of I)t.unjoint($.id);t.remove(z),S?n.pieces.delete(z):n.split.push(z),n.partKind.delete(z),n.partSm.delete(z),d.delete(z);for(const $ of n.pieces.values())$.mate&&$.mate.id===z&&($.mate=null);const w=ae.map(($,Ce)=>{const Re=fe[Ce].center,ce=`${we.root}#${++n.splitN}`,ge=dv($,Re),Pe=on(q,Re),W=fe[Ce].volume/Ue,Ee={id:ce,root:we.root,prefab:we.prefab,mat:we.mat,kind:Fe,poly:ge,born:n.t,mass:pe*W,sm:Math.max(.05,Z*W),mate:null};return F(Ee,Pe,q.q),n.pieces.set(ce,Ee),{id:ce,p:Pe,c:Re}});for(const[$,Ce]of[[0,1],[1,0]])n.pieces.get(w[$].id).mate={id:w[Ce].id,p:Bt(w[$].c,w[Ce].c),q:[0,0,0,1]};const ne=hi(le),Me=$=>Rt(ne,$)-Y<=0?0:1;for(const{j:$,l:Ce,at:Re}of I){if(s.has("noreassign")){n.joints.delete($.id),n.beads.delete($.id);continue}const ce=w[Me(Ce)],ge={...$,a:$.a===z?ce.id:$.a,b:$.b===z?ce.id:$.b,at:Re};ge.la=Mn(t.pose(ge.a),Re),n.joints.set($.id,ge),t.joint($.id,ge.a,ge.b,Re,p(ge)!=="seam");const Pe=n.beads.get($.id);Pe&&Pe.a===z&&(Pe.pts=Pe.pts.map(W=>Mn(t.pose(ce.id),on(q,W))),Pe.a=ce.id)}for(const $ of w)x($.id).length||o($.id),t.velocity($.id,q.v);return a(z,$=>w[Me($)],q,w.map($=>$.id)),i("split",{id:z,into:w.map($=>$.id),pieces:n.pieces.size}),w.map($=>$.id)}function F(z,le,Y){t.addPart({id:z.id,shape:"hull",poly:z.poly,h:hv(z.poly),p:le,q:Y,mass:z.mass},{}),t.release(z.id),n.partKind.set(z.id,z.kind),n.partSm.set(z.id,z.sm)}const V=(z,le)=>z!==n.held&&!x(z).length&&n.t-n.pieces.get(z).born>=le&&t.pose(z).sleep&&t.restsOnStatic(z);function te(z,le=0){for(const Y of[...n.pieces.values()].sort((ae,fe)=>ae.born-fe.born))if(Y.id!==z&&V(Y.id,le))return B(Y.id),!0;return!1}function B(z){const le=n.pieces.get(z),Y=t.pose(z);t.freeze(z),n.pieces.delete(z),n.partKind.delete(z),n.partSm.delete(z);for(const ae of n.pieces.values())ae.mate&&ae.mate.id===z&&(ae.mate=null);n.merged.push({id:z,root:le.root,mat:le.mat,poly:le.poly,p:Y.p,q:Y.q,prefab:le.prefab,kind:le.kind,mass:le.mass,sm:le.sm}),l(z,Y),i("merged",{id:z,pieces:n.pieces.size,merged:n.merged.length})}function j(z){const le=n.merged.findIndex(fe=>fe.id===z);if(le<0||s.has("nothaw"))return!1;for(;n.pieces.size+1>r&&te(z););const Y=n.merged.splice(le,1)[0];t.thaw(z);const ae={id:z,root:Y.root,prefab:Y.prefab||"",mat:Y.mat,kind:Y.kind||"crate",poly:Y.poly,born:n.t,mass:Y.mass||Math.max(.1,zc(Y.poly).volume*300),sm:Y.sm??.3,mate:null};return F(ae,Y.p,Y.q),n.pieces.set(z,ae),i("thawed",{id:z}),!0}let oe=0;function re(){n.t<oe||(oe=n.t+1,n.pieces.size>r*.75&&te("",Gt.calm))}function Te(z,le,Y,ae,fe){let Ue=fe,S=fe;for(let k=0;k<24;k++){S=on(ae,Fc(Y,Mn(ae,Ue)));const q=on(le,Fc(z,Mn(le,S))),pe=Pn(Bt(q,Ue));if(Ue=q,k&&pe<1e-5)break}return{gap:Pn(Bt(Ue,S)),at:qi(Ki(Ue,S),.5)}}const ie=[0,0,0,1],Se=new Map,me=z=>(Se.has(z.id)||Se.set(z.id,{poly:Nc([(z.x1-z.x0)/2,(z.y1-z.y0)/2,(z.z1-z.z0)/2]),s:{p:[(z.x0+z.x1)/2,(z.y0+z.y1)/2,(z.z0+z.z1)/2],q:ie}}),Se.get(z.id)),De=z=>z.kind!=="glass"&&z.kind!=="door"&&z.kind!=="note",Ge=z=>z[1]<.06&&e.hatches.some(le=>z[0]>le.x0-.05&&z[0]<le.x1+.05&&z[2]>le.z0-.05&&z[2]<le.z1+.05),xe=(z,le)=>s.has("weldall")?"":z.kind==="glass"?"окно":z.kind==="door"?"дверь":z.kind==="floor"&&Ge(le)?"люк":"",Ie=(z,le,Y)=>z.x0>le.x1+Y||le.x0>z.x1+Y||z.y0>le.y1+Y||le.y0>z.y1+Y||z.z0>le.z1+Y||le.z0>z.z1+Y;function Be(z,le){const Y=[],ae=h(z),fe=t.pose(z),Ue=t.aabb(z),S=Gt.weldGap,k=(q,pe,Z,Fe=null)=>{const we=Te(ae,fe,pe,Z,le);we.gap<=S&&Y.push({with:q,at:we.at,gap:we.gap,d:Pn(Bt(we.at,le)),box:Fe,no:Fe?xe(Fe,we.at):""})};for(const q of t.bodies())q!==z&&!Ie(Ue,t.aabb(q),S)&&k(q,h(q),t.pose(q));for(const q of e.statics)if(q.kind!=="note"&&!(q.kind==="glass"&&(n.windows.get(q.id)||{}).broken)&&!Ie(Ue,q,S)){const pe=me(q);k("world",pe.poly,pe.s,q)}for(const q of n.merged)Ie(Ue,qe(q),S)||k("world",q.poly,q);return Y.sort((q,pe)=>q.d-pe.d)}const qe=z=>{if(!z.bb){const le={x0:1e9,x1:-1e9,y0:1e9,y1:-1e9,z0:1e9,z1:-1e9};for(const Y of z.poly.faces)for(const ae of Y.v){const fe=on(z,ae);le.x0=Math.min(le.x0,fe[0]),le.x1=Math.max(le.x1,fe[0]),le.y0=Math.min(le.y0,fe[1]),le.y1=Math.max(le.y1,fe[1]),le.z0=Math.min(le.z0,fe[2]),le.z1=Math.max(le.z1,fe[2])}z.bb=le}return z.bb},Ne=z=>u&&t.has(z)&&(!s.has("weldkind")||Xo.has(n.partKind.get(z))),Ke=(z,le)=>[z,le].sort().join("|"),ht=(z,le,Y)=>[...n.joints.values()].find(ae=>Ke(ae.a,ae.b)===Ke(z,le)&&(le!=="world"||Math.min(...y(ae).concat([v(ae)]).map(fe=>Pn(Bt(fe,Y))))<.15))||null;function ke(z){if(s.has("weldnone"))return{why:"не варится"};if(n.held&&!n.drag&&u&&t.has(n.held)){const k=t.pose(n.held).p,q=n.ray,pe=q?Math.max(0,Rt(Bt(k,q.o),q.d)):0,Z=q?Ki(q.o,qi(q.d,pe)):k,Fe=w=>q?Pn(Bt(w.at,Ki(q.o,qi(q.d,Math.max(0,Rt(Bt(w.at,q.o),q.d)))))):w.d,we=Be(n.held,Z).filter(w=>!n.carry.has(w.with)).sort((w,ne)=>Fe(w)-Fe(ne)),Le=we.filter(w=>!w.no);if(!we.length)return{why:"прижми"};if(!Le.length)return{why:we[0].no};const I=Le[0];return{id:n.held,with:I.with,at:I.at,box:I.box,why:""}}if(!z)return{why:""};if(z.kind==="bolt"||z.kind==="cable"||z.kind==="plate"&&!z.seated)return{why:"не тот режим"};if(z.kind==="hatch")return{why:"люк"};if(!u||z.kind==="note"||z.kind==="plate")return{why:"не варится"};let le=z.kind==="part"?z.id:null,Y=null;if(z.kind==="static"){if(z.box&&!De(z.box))return{why:z.box.kind==="glass"?"окно":z.box.kind==="door"?"дверь":"не варится"};for(const k of t.bodies()){const q=t.aabb(k);if(Ie(q,{x0:z.at[0],x1:z.at[0],y0:z.at[1],y1:z.at[1],z0:z.at[2],z1:z.at[2]},Gt.wallReach))continue;const pe=Be(k,z.at).filter(Z=>Z.with==="world"&&Z.d<Gt.wallReach);pe.length&&(!Y||pe[0].d<Y[0].d)&&(Y=pe,le=k)}if(!le)return{why:"нет касания"}}else Y=Be(le,z.at);if(!Ne(le))return{why:"не варится"};if(s.has("weldthin")&&(Y=Y.filter(k=>k.d<.04)),!Y.length)return{why:"нет касания"};const ae=Y.filter(k=>k.d<=(k.with==="world"?Gt.wallReach:Gt.weldReach)),fe=ae.filter(k=>!k.no);if(!fe.length&&(ae.length||Y.length&&Y.every(k=>k.no)))return{why:(ae[0]||Y[0]).no};if(Y=Y.filter(k=>!k.no),!fe.length)return{why:Y.length&&Y.some(k=>k.with!=="world")||Y.length&&Y[0].d<.6?"далеко от стыка":"нет касания"};const Ue=fe.filter(k=>!ht(le,k.with,k.at)),S=Ue.find(k=>k.with!=="world"&&Ne(k.with))||Ue[0];if(!S){const k=ht(le,fe[0].with,fe[0].at);return{id:le,with:fe[0].with,done:!0,why:p(k)==="seam"?"сварено":"держится"}}return{id:le,with:S.with,at:S.at,box:S.box,why:""}}function tt(z,le){const Y=ke(z);if(Y.why)return Y;const ae=Ke(Y.id,Y.with);let fe=n.weld;(!fe||fe.key!==ae||n.t-fe.seen>Gt.grace)&&(fe=n.weld={key:ae,a:Y.id,b:Y.with,prog:0,path:[]}),fe.seen=n.t,fe.prog+=le/Gt.weld,fe.at=Y.at;const Ue=t.pose(fe.a),S=Mn(Ue,z.kind==="part"&&z.id===fe.a?z.at:Y.at);if((!fe.path.length||Pn(Bt(S,fe.path[fe.path.length-1]))>.012)&&fe.path.length<32&&fe.path.push(S),fe.prog<1)return{prog:fe.prog,with:Y.with};n.weld=null,c(fe.a,fe.b);const k=`weld:${++n.weldN}`,q=t.pose(fe.a),pe={id:k,prefab:"",a:fe.a,b:fe.b,at:fe.at,la:Mn(q,fe.at),strength:.9,kind:"seam"};return n.joints.set(k,pe),n.beads.set(k,{a:fe.a,pts:fe.path}),s.has("weldfake")||t.joint(k,pe.a,pe.b,pe.at,!1),i("weld",{id:k,a:pe.a,b:pe.b}),{prog:1,with:Y.with,id:k}}function st(z){const le=new Set([z]),Y=[z],ae={ids:[],mass:0,world:0,bolts:0,seams:0,piece:!1,js:new Set};for(;Y.length;){const fe=Y.pop();ae.ids.push(fe),ae.mass+=t.mass(fe)||0,ae.piece=ae.piece||n.pieces.has(fe);for(const Ue of x(fe)){ae.js.add(Ue);for(const S of[Ue.a,Ue.b])S!=="world"&&!le.has(S)&&(le.add(S),Y.push(S))}}for(const fe of ae.js)fe.b==="world"&&ae.world++,p(fe)==="seam"?ae.seams++:ae.bolts++;return ae}function Qe(z){const le=n.pieces.get(z),Y=le&&le.mate;if(!Y||!t.has(Y.id)||x(z).length)return null;const ae=t.pose(Y.id),fe=t.pose(z),Ue=on(ae,Y.p),S=qn(ae.q,Y.q);return Pn(Bt(Ue,fe.p))>Gt.snap||Math.min(...le.poly.faces.flatMap(q=>q.v.map(pe=>on({p:Ue,q:S},pe)[1])))<-.03?null:{p:Ue,q:S}}const _t=()=>({split:n.split.slice(),splitN:n.splitN,weldN:n.weldN,pieces:[...n.pieces.values()].map(z=>({id:z.id,root:z.root,prefab:z.prefab,mat:z.mat,kind:z.kind,mass:Vn(z.mass),sm:Vn(z.sm),mate:z.mate,poly:Vc(z.poly)})),merged:n.merged.map(z=>({id:z.id,root:z.root,mat:z.mat,prefab:z.prefab,kind:z.kind,mass:Vn(z.mass||0),sm:Vn(z.sm||.3),p:z.p.map(Vn),q:z.q.map(Vn),poly:Vc(z.poly)})),joints:[...n.joints.values()].filter(z=>z.id.startsWith("weld:")||n.pieces.has(z.a)||n.pieces.has(z.b)).map(z=>({id:z.id,prefab:z.prefab,a:z.a,b:z.b,la:z.la.map(Vn),strength:z.strength,kind:z.kind})),beads:[...n.beads].map(([z,le])=>[z,le.a,le.pts.map(Y=>Y.map(Vn))])});function mt(z){if(z){for(const le of z.joints)n.joints.has(le.id)&&(t.unjoint(le.id),n.joints.delete(le.id));for(const le of z.split){for(const Y of x(le))t.unjoint(Y.id),n.joints.delete(Y.id);t.has(le)&&t.remove(le),n.partKind.delete(le),n.partSm.delete(le)}n.split=z.split.slice(),n.splitN=z.splitN,n.weldN=z.weldN;for(const le of z.pieces){const Y={...le,poly:Wc(le.poly),born:0};F(Y,[0,5,0],[0,0,0,1]),n.pieces.set(Y.id,Y)}for(const le of z.merged){const Y={...le,poly:Wc(le.poly)};t.addFrozen(Y),n.merged.push(Y)}}}function Et(z){if(z){for(const le of z.joints){if(!t.has(le.a)||le.b!=="world"&&!t.has(le.b))continue;const Y=on(t.pose(le.a),le.la);n.joints.set(le.id,{...le,at:Y}),t.joint(le.id,le.a,le.b,Y,p(le)!=="seam")}for(const[le,Y,ae]of z.beads)n.joints.has(le)&&n.beads.set(le,{a:Y,pts:ae})}}return{can:u,cap:r,polyOf:h,pieceOf:m,canSplit:f,canWeld:Ne,worldAt:v,jointsOf:x,jointKind:p,spots:y,nearJoint:T,stroke:M,finish:C,idle:P,splitPart:N,merge:B,mergeOldest:te,thaw:j,calm:re,weld:tt,weldInfo:ke,assembly:st,snapPose:Qe,snapshot:_t,restoreBodies:mt,restoreJoints:Et}}const Av=[.105,.15,.006],Rv=.005,Cv={"+x":[1,0,0],"-x":[-1,0,0],"+z":[0,0,1],"-z":[0,0,-1]};function Xc(n,e=[0,1,0]){const t=e[0]*n[0]+e[1]*n[1]+e[2]*n[2];let i=[e[0]-n[0]*t,e[1]-n[1]*t,e[2]-n[2]*t];const s=Math.hypot(...i)||1;i=i.map(c=>c/s);const a=[[i[1]*n[2]-i[2]*n[1],i[2]*n[0]-i[0]*n[2],i[0]*n[1]-i[1]*n[0]],i,n],l=a[0][0]+a[1][1]+a[2][2];let o;if(l>0){const c=Math.sqrt(l+1)*2;o=[(a[1][2]-a[2][1])/c,(a[2][0]-a[0][2])/c,(a[0][1]-a[1][0])/c,c/4]}else if(a[0][0]>a[1][1]&&a[0][0]>a[2][2]){const c=Math.sqrt(1+a[0][0]-a[1][1]-a[2][2])*2;o=[c/4,(a[1][0]+a[0][1])/c,(a[2][0]+a[0][2])/c,(a[1][2]-a[2][1])/c]}else if(a[1][1]>a[2][2]){const c=Math.sqrt(1+a[1][1]-a[0][0]-a[2][2])*2;o=[(a[1][0]+a[0][1])/c,c/4,(a[2][1]+a[1][2])/c,(a[2][0]-a[0][2])/c]}else{const c=Math.sqrt(1+a[2][2]-a[0][0]-a[1][1])*2;o=[(a[2][0]+a[0][2])/c,(a[2][1]+a[1][2])/c,c/4,(a[0][1]-a[1][0])/c]}return o}function Pv({S:n,C:e,phys:t,ev:i,mut:s}){n.notes=new Map,n.noteHeld=null;for(const u of e.statics)if(u.kind==="note"){const d=Cv[$i[e.prefabOf[u.prefab].wall]],h=[(u.x0+u.x1)/2,(u.y0+u.y1)/2,(u.z0+u.z1)/2];n.notes.set(u.prefab,{id:u.prefab,on:"world",p:[h[0]+d[0]*.009,h[1],h[2]+d[2]*.009],q:Xc(d)})}function r(u){const d=n.notes.get(u);if(!d||n.noteHeld===u)return null;if(d.on==="world")return{p:d.p,q:d.q};const h=t.pose(d.on);return h?{p:on(h,d.p),q:qn(h.q,d.q)}:null}function a(u){return!n.notes.has(u)||n.noteHeld?!1:(n.noteHeld=u,i("note_take",{id:u}),!0)}function l(u,d){const h=n.noteHeld;if(!h||!u||!u.at||!u.n||s.has("noteloose"))return!1;const m=Math.abs(u.n[1])>.8?[d[0],0,d[2]]:[0,1,0],f=[0,1,2].map(y=>u.at[y]+u.n[y]*Rv),v=Xc(u.n,m),x=u.kind==="part"?u.id:null,p=x&&t.pose(x);return n.notes.set(h,p?{id:h,on:x,p:Mn(p,f),q:qn(_i(p.q),v)}:{id:h,on:"world",p:f,q:v}),n.noteHeld=null,i("note_stick",{id:h,on:x||u.kind+":"+u.id}),!0}function o(u,d,h){for(const m of n.notes.values())if(m.on===u){const f=on(h,m.p),v=qn(h.q,m.q),x=d(m.p),p=t.pose(x.id);Object.assign(m,{on:x.id,p:Mn(p,f),q:qn(_i(p.q),v)})}}function c(u,d){for(const h of n.notes.values())h.on===u&&Object.assign(h,{on:"world",p:on(d,h.p),q:qn(d.q,h.q)})}return{pose:r,take:a,stick:l,split:o,toFixed:c,ids:()=>[...n.notes.keys()],snapshot:()=>[...n.notes.values()].map(u=>({id:u.id,on:u.on,p:u.p.slice(),q:u.q.slice()})),restore(u){for(const d of u||[])n.notes.set(d.id,{...d})}}}const Qa={crateL:1.9,pallet:1.7,crate:.65,tank:.25,leg:.1,top:.6,leaf:.3,plate:.15,debris:.1,plank:.45,sheet:.4,side:.45},At={reach:2.3,cutRange:2.6,blast:14,cover:.15,pull:40,eject:.45,legKick:1.6,pullMin:3,hatchBurn:.7,light:.3,push:2.4,cableCut:.6,doorTime:.6,cabTime:.45,cabAngle:1.85,body:80,seam:320,arm:.5,impact:5,strain:.75,lift:18,drag:1.5,dragForce:700,dragFar:2.4,aimCone:.026},Lv={safe:2.6,perM:22,stun:.35,stunMax:2.5,regen:12,wait:5},Dv=.05,qc=Math.PI/2,Wr=(n,e)=>Math.hypot(n[0]-e[0],n[1]-e[1],n[2]-e[2]),$c=n=>[0,Math.sin(n/2),0,Math.cos(n/2)];function Yc(n,e,t,i,s){const r=[-i[0],-i[1],-i[2],i[3]],a=Ut(r,[n[0]-t[0],n[1]-t[1],n[2]-t[2]]),l=Ut(r,e);let o=0,c=1e9;for(let u=0;u<3;u++){if(Math.abs(l[u])<1e-9){if(a[u]<-s[u]||a[u]>s[u])return null;continue}let d=(-s[u]-a[u])/l[u],h=(s[u]-a[u])/l[u];if(d>h&&([d,h]=[h,d]),o=Math.max(o,d),c=Math.min(c,h),o>c)return null}return o>1e-4?o:null}function Iv(n,e){const t=[],i=(u,d,h,m,f,v)=>{d-u>1e-4&&m-h>1e-4&&v-f>1e-4&&t.push({...n,x0:u,x1:d,y0:h,y1:m,z0:f,z1:v})},s=Math.max(n.x0,e.x0),r=Math.min(n.x1,e.x1),a=Math.max(n.y0,e.y0),l=Math.min(n.y1,e.y1),o=Math.max(n.z0,e.z0),c=Math.min(n.z1,e.z1);return s>=r||a>=l||o>=c?[n]:(i(n.x0,s,n.y0,n.y1,n.z0,n.z1),i(r,n.x1,n.y0,n.y1,n.z0,n.z1),i(s,r,n.y0,n.y1,n.z0,o),i(s,r,n.y0,n.y1,c,n.z1),i(s,r,n.y0,a,o,c),i(s,r,l,n.y1,o,c),t)}const Kc=(n,e,t,i)=>{const s=[n[0]-t[0],n[1]-t[1],n[2]-t[2]],r=s[0]*e[0]+s[1]*e[1]+s[2]*e[2],a=s[0]**2+s[1]**2+s[2]**2-i*i;if(a>0&&r>0)return null;const l=r*r-a;if(l<0)return null;const o=-r-Math.sqrt(l);return o>0?o:.001};function Nv(n,e,t,{log:i=()=>{},mut:s=new Set,pieces:r=0,seam:a=0,fall:l=null}={}){const o={t:0,joints:new Map,cutProg:new Map,held:null,heldAt:0,opens:new Map,doors:new Map,windows:new Map,tanks:new Map,cablesCut:new Set,breakers:new Map,p:1,kicks:[],removed:[],burned:[],carry:new Set,drag:!1,anchored:new Set,sparks:[],strain:null,hp:100,hurtT:9,stun:0,peak:null,exit:!1,leaf:new Map,hatchOpen:new Map,plates:new Map,events:[],evN:0,deaths:0,flash:0,ejected:[],partKind:new Map,partSm:new Map},c=(_,E={})=>{const X={t:+o.t.toFixed(2),kind:_,...E};return o.events.push(X),o.evN++,o.events.length>400&&o.events.shift(),i(X),X};for(const _ of n.statics)_.kind!=="note"&&t.addStatic(_);for(const _ of n.parts)t.addPart(_,{fixed:!_.free}),o.partKind.set(_.id,_.kind),o.partSm.set(_.id,Qa[_.kind]??.3);for(const _ of n.joints)t.joint(_.id,_.a,_.b,_.at),o.joints.set(_.id,{..._,la:t.has(_.a)?Mn(t.pose(_.a),_.at):null});const u=Pv({S:o,C:n,phys:t,ev:c,mut:s}),d=Tv({S:o,C:n,phys:t,ev:c,mut:s,cap:r||e.budget&&e.budget.pieces||Gt.cap,onSplit:(_,E,X,G)=>{u.split(_,E,X),o.plates.has(_)&&o.plates.delete(_),m(_,G)},onMerge:(_,E)=>u.toFixed(_,E),onBorn:_=>h.eject([_],"рождение"),onWeld:(_,E)=>{o.held&&(o.carry.has(_)||o.carry.has(E))&&$()}}),h=wv({S:o,C:n,phys:t,mut:s,ev:c});for(const _ of n.parts)_.hinge&&o.leaf.set(_.id,{cab:_.prefab,hinge:_.hinge,p:_.p.slice(),q:[0,0,0,1],h:_.h});function m(_,E){const X=o.leaf.get(_);if(!X)return;o.leaf.delete(_);const G=f(X.hinge,(o.opens.get(X.cab)||{}).open||0),g=_i(G);for(const O of E){const U=t.pose(O),L=Ut(g,[0,1,2].map(K=>U.p[K]-X.hinge.at[K]));o.leaf.set(O,{cab:X.cab,hinge:X.hinge,p:L.map((K,H)=>K+X.hinge.at[H]),q:qn(g,U.q),h:t.half(O)})}}const f=(_,E)=>$c(E*At.cabAngle*(_.side===0?-1:1)*_.sg*(_.along==="x"?1:-1)),v=_=>o.leaf.has(_)&&d.jointsOf(_).some(E=>E.kind==="hinge"),x=_=>d.jointsOf(_).some(E=>E.kind!=="hinge"),p=_=>{const E=o.leaf.get(_);if(E)return v(_)?E.cab:"";const X=(n.parts.find(G=>G.id===_)||o.pieces.get(_)||{}).prefab;return o.opens.has(X)&&d.jointsOf(_).some(G=>G.kind==="dowel")?X:""};for(const _ of n.opens)o.opens.set(_.id,{..._,open:0,want:0});for(const _ of n.doors)o.doors.set(_.id,{..._,open:0,want:0});for(const _ of n.windows)o.windows.set(_.id,{..._,hp:_.strength,broken:!1});for(const _ of n.parts)_.tank&&o.tanks.set(_.id,{id:_.id,..._.tank,heat:0,gone:!1});for(const[_,E]of Object.entries(n.nodes))E.kind==="breaker"&&o.breakers.set(_,E.on!==!1);const y=new Set(e.trap?ev(e.trap,n.hatches).danger:[]),T=yv({panels:n.panels}),b=new Map(n.panels.map(_=>[_.id,_])),A=n.size[0]*n.size[1]*n.size[2];function R(){const _=new Map;for(const[G,g]of n.edges)o.cablesCut.has(G)||o.cablesCut.has(g)||(_.set(G,[..._.get(G)||[],g]),_.set(g,[..._.get(g)||[],G]));const E=new Set,X=[...o.breakers].filter(([,G])=>G).map(([G])=>G);for(;X.length;){const G=X.shift();if(!E.has(G)){E.add(G);for(const g of _.get(G)||[])!E.has(g)&&!o.breakers.has(g)&&X.push(g)}}return E}let M=R();const C=new Set(n.edges.flat()),P=_=>!C.has(_)||M.has(_),N=()=>{const _=M;M=R();for(const E of C)_.has(E)!==M.has(E)&&!o.breakers.has(E)&&c(M.has(E)?"power_on":"power_off",{id:E})},F=_=>[...o.joints.values()].some(E=>E.a===_||E.b===_);function V(_,E="резак"){const X=o.joints.get(_);if(!X)return!1;o.joints.delete(_),o.beads.delete(_),t.unjoint(_),c("joint_cut",{id:_,prefab:X.prefab,why:E});const G=g=>[...o.joints.values()].filter(O=>O.a===g||O.b===g).length;for(const g of[X.a,X.b]){if(g==="world"||!t.has(g))continue;const O=o.partKind.get(g),U=O==="top"?3:1;if(G(g)<U&&!(t.kind==="rapier"&&d.assembly(g).world)){t.release(g);const L=t.pose(g),K=t.mass(g)||1;if(L&&O==="leg"&&X.kind==="weld"){const H=n.parts.find(Ae=>Ae.id===X.a)||{},se=H.p||L.p,be=L.p[0]-se[0],ve=L.p[2]-se[2],de=Math.hypot(be,ve)||1,Q=t.half(g)[1];o.kicks.push({id:g,v:[be/de*K*At.legKick,0,ve/de*K*At.legKick],at:[L.p[0],L.p[1]-Q*.9,L.p[2]]})}L&&O==="leaf"&&o.kicks.push({id:g,v:[(Math.random()-.5)*K*.4,0,(Math.random()-.5)*K*.4],at:L.p}),c("part_free",{id:g})}}return!0}let te="";function B(_=!1){if(t.kind!=="rapier")return;const E=`${o.joints.size}:${o.weldN}:${o.splitN}:${o.removed.length}:${o.held}`;if(E===te&&!_)return;te=E;for(const g of[...o.joints.values()])(!t.has(g.a)||g.b!=="world"&&!t.has(g.b))&&(o.joints.delete(g.id),o.beads.delete(g.id));const X=new Set,G=new Set;for(const g of o.joints.values())if(!X.has(g.a)){const O=d.assembly(g.a);for(const U of O.ids)X.add(U),O.world&&!o.carry.has(U)&&G.add(U)}for(const g of G)t.anchor(g,!0);for(const g of o.anchored)!G.has(g)&&t.has(g)&&t.anchor(g,!1);o.anchored=G}function j(_){if(!_||!_.ground)return null;let E=null,X=.05;for(const G of o.extra||[])G.id&&t.has(G.id)&&_.x>G.x0-.23&&_.x<G.x1+.23&&_.z>G.z0-.23&&_.z<G.z1+.23&&Math.abs(G.y1-_.y)<X&&(X=Math.abs(G.y1-_.y),E=G.id);return E}function oe(_){const E=t.aabb(_),X=[];if(E)for(const G of t.bodies()){if(G===_)continue;const g=t.aabb(G);g&&Math.abs(g.y1-E.y0)<.035&&E.x0<g.x1&&E.x1>g.x0&&E.z0<g.z1&&E.z1>g.z0&&X.push(G)}return X}function re(_,E=0){const X=new Map,G=(O,U,L)=>{X.has(O)||X.set(O,[]),X.get(O).push({m:U,at:L})},g=j(_);if(g){let O=At.body;for(const L of o.carry)o.drag||(O+=t.mass(L)||0);let U=g;for(let L=0;L<6&&U&&!o.anchored.has(U);L++)U=oe(U)[0];U&&G(U,O*(1+E/At.impact),[_.x,_.y,_.z])}for(const O of t.bodies()){if(o.anchored.has(O)||o.carry.has(O))continue;let U=O;for(let L=0;L<6&&U&&!o.anchored.has(U);L++)U=oe(U)[0];U&&G(U,t.mass(O)||0,t.pose(O).p)}return X}const Te=a||e.budget&&e.budget.seam||At.seam;function ie(_,E=0){const X=re(_,E),G=[],g=new Set;for(const O of o.anchored){if(g.has(O))continue;const U=d.assembly(O);for(const H of U.ids)g.add(H);const L=[...U.js].filter(H=>d.jointKind(H)==="seam"),K=[...U.js].filter(H=>H.b==="world").length;for(const H of L){let se=U.ids,be=1;if(H.b==="world")be=1/K;else{const Ae=xt=>{const yt=new Set([xt]),ut=[xt];let Dt=!1;for(;ut.length;){const Ot=ut.pop();for(const Wt of U.js)if(!(Wt===H||Wt.a!==Ot&&Wt.b!==Ot)){if(Wt.b==="world"){Dt=!0;continue}for(const Fn of[Wt.a,Wt.b])yt.has(Fn)||(yt.add(Fn),ut.push(Fn))}}return{ids:[...yt],w:Dt}},Ve=Ae(H.a),rt=Ae(H.b);if(Ve.w===rt.w)continue;se=Ve.w?rt.ids:Ve.ids}const ve=d.worldAt(H);let de=0;const Q=(Ae,Ve)=>{de+=Ae*(1+Math.hypot(Ve[0]-ve[0],Ve[2]-ve[2])/At.arm)};for(const Ae of se){Q(t.mass(Ae)||0,t.pose(Ae).p);for(const Ve of X.get(Ae)||[])Q(Ve.m,Ve.at)}G.push({j:H,at:ve,load:de*be,k:de*be/Te})}}return G}let Se=0;function me(_,E=0){if(!o.beads.size){o.strain=null;return}if(!(o.t<Se&&!E)){Se=o.t+.2,o.strain=null;for(const X of ie(_,E))X.k>1&&!s.has("strongseam")?(De(X.at,34),V(X.j.id,"перегруз"),c("seam_broke",{id:X.j.id,load:Math.round(X.load),cap:Te,at:X.at.map(G=>+G.toFixed(2))}),o.flash=Math.max(o.flash,.12),B(!0)):X.k>At.strain&&(De(X.at,3),(!o.strain||X.k>o.strain.k)&&(o.strain={k:X.k,id:X.j.id,t:o.t}))}}const De=(_,E)=>{o.sparks.push({at:_.slice(),n:E,t:o.t,seed:o.sparkN=(o.sparkN||0)+1}),o.sparks.length>6&&o.sparks.shift()},Ge={...Lv,...n.fall||{},...l||{}};function xe(_,E){if(!E||E.ground===void 0)return;if(o.stun=Math.max(0,o.stun-_),o.hurtT+=_,o.hurtT>Ge.wait&&o.hp<100&&(o.hp=Math.min(100,o.hp+Ge.regen*_)),!E.ground){o.peak=o.peak===null?E.y:Math.max(o.peak,E.y);return}if(o.peak===null)return;const X=o.peak-E.y,G=j(E);if(o.peak=null,X<.05)return;o.anchored.size&&me(E,Math.sqrt(28*X));const g=X-Ge.safe;if(g<=0||s.has("nofall"))return;const O=Math.round(g*Ge.perM);o.hp=Math.max(0,o.hp-O),o.hurtT=0,o.stun=Math.min(Ge.stunMax,g*Ge.stun+.3),o.hurt=1,c("fall",{h:+X.toFixed(2),dmg:O,hp:Math.round(o.hp),on:G||"пол"}),o.hp<=0&&(o.deaths++,o.hp=100,o.stun=0,o.held&&Re(),c("death",{cause:"fall",h:+X.toFixed(2)}),E.respawn&&E.respawn())}function Ie(_){if(!o.held||s.has("rideheld"))return;const E=j(_);if(!E||o.anchored.has(E))return;const X=new Set([E]),G=[E];for(;G.length;){const g=G.pop();if(o.carry.has(g)){$(),c("ride_off",{id:g});return}for(const O of oe(g))!X.has(O)&&!o.anchored.has(O)&&(X.add(O),G.push(O))}}function Be(){if(o.drag)return{speed:.42,jump:.35};if(!o.held)return{speed:1,jump:1};let _=0;for(const E of o.carry)_+=t.mass(E)||0;return{speed:Math.max(.35,1-.45*(o.partSm.get(o.held)??.3)),jump:Math.max(.45,1-_/45)}}function qe(_){if(!o.held||o.drag)return!1;o.turn=((o.turn??-1)+1)%3;const E=t.half(o.held),X=[0,1,2].sort((Q,Ae)=>E[Ae]-E[Q]),G=Math.abs(Math.sin(_.yaw))>Math.abs(Math.cos(_.yaw))?[-Math.sign(Math.sin(_.yaw)),0,0]:[0,0,-Math.sign(Math.cos(_.yaw))],g=[0,1,0],O=[G[1]*g[2]-G[2]*g[1],G[2]*g[0]-G[0]*g[2],G[0]*g[1]-G[1]*g[0]],U=o.turn===0?[G,O,g]:o.turn===1?[O,G,g]:[g,O,G],L=[];X.forEach((Q,Ae)=>{L[Q]=U[Ae]}),L[0][0]*(L[1][1]*L[2][2]-L[1][2]*L[2][1])-L[0][1]*(L[1][0]*L[2][2]-L[1][2]*L[2][0])+L[0][2]*(L[1][0]*L[2][1]-L[1][1]*L[2][0])<0&&(L[X[2]]=L[X[2]].map(Q=>-Q));const H=(Q,Ae)=>L[Ae][Q],se=H(0,0)+H(1,1)+H(2,2);let be;if(se>0){const Q=Math.sqrt(se+1)*2;be=[(H(2,1)-H(1,2))/Q,(H(0,2)-H(2,0))/Q,(H(1,0)-H(0,1))/Q,Q/4]}else if(H(0,0)>H(1,1)&&H(0,0)>H(2,2)){const Q=Math.sqrt(1+H(0,0)-H(1,1)-H(2,2))*2;be=[Q/4,(H(0,1)+H(1,0))/Q,(H(0,2)+H(2,0))/Q,(H(2,1)-H(1,2))/Q]}else if(H(1,1)>H(2,2)){const Q=Math.sqrt(1+H(1,1)-H(0,0)-H(2,2))*2;be=[(H(0,1)+H(1,0))/Q,Q/4,(H(1,2)+H(2,1))/Q,(H(0,2)-H(2,0))/Q]}else{const Q=Math.sqrt(1+H(2,2)-H(0,0)-H(1,1))*2;be=[(H(0,2)+H(2,0))/Q,(H(1,2)+H(2,1))/Q,Q/4,(H(1,0)-H(0,1))/Q]}const ve=t.pose(o.held),de=qn(be,_i(ve.q));for(const Q of o.carry){const Ae=t.pose(Q),Ve=Ut(de,[0,1,2].map(rt=>Ae.p[rt]-ve.p[rt]));t.setPose(Q,Q===o.held?ve.p:[0,1,2].map(rt=>ve.p[rt]+Ve[rt]),Q===o.held?be:qn(de,Ae.q),!1),Q===o.held&&t.moveKinematic(Q,ve.p,be)}return c("turn",{id:o.held,mode:o.turn}),!0}const Ne=()=>n.statics.filter(_=>_.kind!=="glass"&&_.kind!=="note"&&!(_.kind==="door"&&(o.doors.get(_.door)||{}).open>.5));function Ke(_,E){const X=[E[0]-_[0],E[1]-_[1],E[2]-_[2]],G=Math.hypot(...X);if(G<.001)return!1;const g=X.map(U=>U/G);return!!Gs(_,g,Ne(),G-.05)}function ht(_){const E=o.tanks.get(_);if(!E||E.gone)return;const X=t.pose(_),G=X?X.p:[0,0,0];E.gone=!0,E.at=G.slice(),(o.held===_||o.carry.has(_))&&$(),t.remove(_),o.removed.push(_);const g=At.blast*E.charge,O=[];for(const U of t.bodies()){const L=t.pose(U);if(!L)continue;const K=Wr(L.p,G),H=Ke(G,L.p)?At.cover:1,se=g/(1+K*K)*H;if(K>E.radius||se<.2)continue;const be=K>.001?[(L.p[0]-G[0])/K,(L.p[1]-G[1])/K+.3,(L.p[2]-G[2])/K]:[0,1,0];F(U)||t.release(U),t.impulse(U,be.map(ve=>ve*se*(t.mass(U)||1))),O.push(U)}for(const[U,L]of[...o.joints]){const K=d.worldAt(L),H=Wr(K,G);g/(1+H*H)*(Ke(G,K)?At.cover:1)>=L.strength*Ka.blastK&&V(U,"взрыв")}for(const U of o.windows.values()){if(U.broken)continue;const L=Wr(U.at,G);g/(1+L*L)*(Ke(G,U.at)?At.cover:1)>=U.strength*Ka.blastK*.8&&ke(U.id,"взрыв")}o.flash=1,o.blast={at:G,K:g,t:o.t},c("explode",{id:_,at:G.map(U=>+U.toFixed(2)),hit:O.length})}function ke(_,E){const X=o.windows.get(_);!X||X.broken||(X.broken=!0,X.hp=0,t.setStatic(_,!1),c("window_broken",{id:_,why:E}))}function tt(_){const E=o.doors.get(_);return E?E.kind==="sealed"?(c("door_sealed",{id:_}),!1):P(_)?(E.want=E.want?0:1,c(E.want?"door_open":"door_close",{id:_}),!0):(c("door_dead",{id:_}),!1):!1}function st(_){const E=o.opens.get(_);return E?([...o.leaf].some(([X,G])=>G.cab===_&&v(X)&&x(X))&&c("cab_welded",{id:_}),E.want=E.want?0:1,c(E.want?"cab_open":"cab_close",{id:_}),!0):!1}function Qe(_){return o.breakers.has(_)?(o.breakers.set(_,!o.breakers.get(_)),c("breaker",{id:_,on:o.breakers.get(_)}),N(),!0):!1}let _t={key:null,boxes:null};function mt(){const _=n.panels.filter(g=>T.view(g.id).plate!=="on").map(g=>g.id),E=_.join(",");if(_t.key===E)return _t.boxes;const X=_.map(g=>ur(b.get(g)));let G=n.statics;return X.length&&(G=n.statics.flatMap(g=>g.kind==="floor"||g.kind==="ceil"||g.kind==="wall"?X.reduce((O,U)=>O.flatMap(L=>Iv(L,U)),[g]):[g])),_t={key:E,boxes:G},G}function Et(_,E,X=At.cutRange){const G=[],g=Gs(_,E,mt().filter(U=>U.kind!=="note").filter(U=>U.kind!=="glass"||!(o.windows.get(U.id)||{}).broken).filter(U=>!(U.kind==="door"&&(o.doors.get(U.door)||{}).open>.5)),X);g&&G.push({kind:"static",id:g.box.prefab||g.box.id,box:g.box,t:g.t,n:g.n});for(const U of t.bodies()){if(U===o.held||o.carry.has(U))continue;const L=t.pose(U),K=t.poly(U);if(!K&&Yc(_,E,L.p,L.q,t.half(U))===null)continue;const H=Za(Mn(L,_),Ut([-L.q[0],-L.q[1],-L.q[2],L.q[3]],E),K||d.polyOf(U),X);H&&G.push({kind:"part",id:U,t:H.t,n:Ut(L.q,H.n),cut:H.cut})}for(const U of o.merged){const L=Za(Mn(U,_),Ut([-U.q[0],-U.q[1],-U.q[2],U.q[3]],E),U.poly,X);L&&G.push({kind:"static",id:U.id,box:{kind:"scrap"},t:L.t,n:Ut(U.q,L.n)})}for(const U of u.ids()){const L=u.pose(U);if(!L)continue;const K=Yc(_,E,L.p,L.q,Av);K!==null&&K<X&&G.push({kind:"note",id:U,t:K-.004})}for(const U of n.panels){const L=T.view(U.id);if(L.plate==="on"&&!L.seated){for(let se=0;se<4;se++)if(!L.bolts[se]){const be=Kc(_,E,Vo(U,se),.06);be!==null&&be<X&&G.push({kind:"bolt",id:U.id,i:se,t:be-.02})}const K=Ac(U),H=Gs(_,E,[K],X);H&&G.push({kind:"plate",id:U.id,t:H.t,n:H.n})}else if(L.seated){const K=Gs(_,E,[Ac(U)],X);K&&G.push({kind:"plate",id:U.id,t:K.t,seated:!0})}else for(const K of ae(U.id)){const H=Kc(_,E,K.at,.1);H!==null&&H<X&&G.push({kind:"cable",id:K.id,panel:U.id,at:K.at,t:H})}}for(const U of n.hatches){const L=s.has("nohatch")?0:Dv,K={x0:U.x0-L,x1:U.x1+L,y0:-.02,y1:.012,z0:U.z0-L,z1:U.z1+L},H=Gs(_,E,[K],X);H&&G.push({kind:"hatch",id:U.id,t:H.t,number:U.number,n:[0,1,0]})}G.sort((U,L)=>U.t-L.t);const O=G[0]||null;return O&&(O.at=O.at||[_[0]+E[0]*O.t,_[1]+E[1]*O.t,_[2]+E[2]*O.t]),O}function z(_,E){const X=[-_[2],0,_[0]],G=Math.hypot(...X)||1,g=Math.hypot(...X)<1e-6?[1,0,0]:X.map(U=>U/G),O=[g[1]*_[2]-g[2]*_[1],g[2]*_[0]-g[0]*_[2],g[0]*_[1]-g[1]*_[0]];return[...Array(8).keys()].map(U=>{const L=U*qc/2,K=[0,1,2].map(se=>_[se]+E*(Math.cos(L)*g[se]+Math.sin(L)*O[se])),H=Math.hypot(...K);return K.map(se=>se/H)})}function le(_,E,X=At.cutRange){o.ray={o:_,d:E};const G=Et(_,E,X);if(G&&G.kind!=="static"||s.has("seethrough"))return G;let g=null;for(const O of z(E,.012)){const U=Et(_,O,X);U&&U.kind==="part"&&U.t<(G?G.t:99)-.05&&(!g||U.t<g.t)&&(g=U)}return g||G}function Y(_,E,X=At.reach){const G=Et(_,E,X);if(o.held||o.noteHeld||k(G)||s.has("noaid"))return G;const g=t.bodies().filter(U=>o.pieces.has(U)&&I(U)&&Math.min(...t.half(U))<.08&&Wr(t.pose(U).p,_)<X+.5);let O=null;if(g.length)for(const U of z(E,At.aimCone))for(const L of g){const K=t.pose(L),H=Za(Mn(K,_),Ut(_i(K.q),U),d.polyOf(L),X);H&&(!O||H.t<O.t)&&!(G&&G.t<H.t-.15)&&(O={kind:"part",id:L,t:H.t,n:Ut(K.q,H.n),at:_.map((se,be)=>se+U[be]*H.t)})}return O||G}function ae(_){const E=b.get(_),X=[];if(!E||E.face!=="+y")return X;const G=ur(E);for(const g of n.cables)if(!o.cablesCut.has(g.id))for(let O=1;O<g.pts.length;O++){const U=g.pts[O-1],L=g.pts[O],K=Math.min(U[0],L[0])-1e-6,H=Math.max(U[0],L[0])+1e-6,se=Math.min(U[2],L[2])-1e-6,be=Math.max(U[2],L[2])+1e-6;if(H<G.x0||K>G.x1||be<G.z0||se>G.z1)continue;const ve=Math.max(G.x0+.05,Math.min(G.x1-.05,E.x)),de=Math.max(G.z0+.05,Math.min(G.z1-.05,E.z));X.push({id:g.id,at:[U[0]===L[0]?U[0]:ve,-.16,U[2]===L[2]?U[2]:de]});break}return X}function fe(_,E,X=null,G="cut"){if(G==="weld"&&!(_&&_.kind==="plate"&&_.seated))return _?d.weld(_,E).why?"":"сварка":"";if(!_)return"";if(_=pe(_),_.kind==="bolt"){const g=T.cut(_.id,_.i,E);return g!==null&&g>=1&&c("bolt_cut",{id:_.id,i:_.i}),"болт"}if(_.kind==="plate"){const g=T.view(_.id);if(g.seated)return T.weld(_.id,E)>=1&&c("panel_weld",{id:_.id}),"шов";const O=g.bolts.findIndex(U=>!U);return O>=0&&T.cut(_.id,O,E)>=1&&c("bolt_cut",{id:_.id,i:O}),"болт"}if(_.kind==="cable"){const g="cable:"+_.id,O=(o.cutProg.get(g)||0)+E;return o.cutProg.set(g,O),O>=At.cableCut&&(o.cablesCut.add(_.id),o.cableCutAt=o.cableCutAt||{},o.cableCutAt[_.id]=_.at,c("cable_cut",{id:_.id,under:_.panel}),N()),"кабель"}if(_.kind==="static"){const g=o.windows.get(_.id);return g&&!g.broken?(g.hp-=E,g.hp<=0&&ke(g.id,"резак"),"стекло"):""}if(_.kind==="part"){const g=o.tanks.get(_.id);if(g)return g.heat+=E,g.heat>=g.fuse&&ht(g.id),"баллон";if(o.t-(o.cutT??-9)>.12&&(o.cutLock=null),o.cutT=o.t,o.cutLock&&o.cutLock.has(_.id)&&!s.has("nolock"))return"крепление";const O=o.evN,U=()=>{for(const be of o.events.slice(-(o.evN-O)||o.events.length))if(be.kind==="split"||be.kind==="joint_cut")if(o.cutLock=o.cutLock||new Set,be.kind==="split")for(const ve of be.into)o.cutLock.add(ve);else o.cutLock.add(_.id)},L=d.nearJoint(_.id,_.at),K=o.stroke&&o.stroke.id===_.id;if(X&&d.canSplit(_.id)&&(K||!L))return d.stroke(_,X.o,X.d,E),o.evN>O&&U(),"деталь";const H=L;if(!H)return"";const se=(o.cutProg.get(H.id)||0)+E*Ka.cutRate;return o.cutProg.set(H.id,se),se>=H.strength&&(V(H.id),X&&U()),"крепление"}return""}function Ue(_){if(!_)return"";const E=_.id;if(_.kind==="static")return o.breakers.has(E)?(Qe(E),"щиток"):o.doors.has(E)?(tt(E),"дверь"):o.opens.has(E)?(st(E),"шкаф"):"";if(_.kind==="note")return c("read",{id:E,key:n.prefabOf[E].text}),"запись";if(_.kind==="part"){const X=p(E);if(X)return st(X),"шкаф"}return""}function S(_){if(!_)return"";if(_.kind==="static")return o.breakers.has(_.id)?"breaker":o.doors.has(_.id)?o.doors.get(_.id).want?"shut":"open":o.opens.has(_.id)?o.opens.get(_.id).want?"shut":"open":"";if(_.kind==="note")return"read";if(_.kind==="part"){const E=p(_.id);if(E)return o.opens.get(E).want?"shut":"open"}return""}const k=_=>!!_&&!o.held&&!o.noteHeld&&(_.kind==="note"||_.kind==="plate"&&T.loose(_.id)||_.kind==="part"&&I(_.id)||q(_)),q=_=>!!_&&_.kind==="static"&&!!_.box&&_.box.kind==="scrap",pe=_=>q(_)&&d.thaw(_.id)?{..._,kind:"part",box:void 0}:_,Z=_=>!!_&&(q(_)||_.kind==="part"&&d.canSplit(_.id)||_.kind==="bolt"||_.kind==="cable"||_.kind==="plate"&&T.view(_.id).bolts.some(E=>!E)||_.kind==="static"&&o.windows.has(_.id)&&!o.windows.get(_.id).broken||_.kind==="part"&&(o.tanks.has(_.id)||d.nearJoint(_.id,_.at)));function Fe(_){if(!_)return null;if(_.kind==="bolt")return{verb:"снять"};if(_.kind==="plate")return _.seated?{verb:"прихватить"}:T.view(_.id).bolts.some(X=>!X)?{verb:"болты",n:T.view(_.id).bolts.filter(X=>!X).length}:{verb:"сорвать"};if(_.kind==="cable")return{verb:"перерезать"};if(_.kind==="note")return null;if(q(_))return{verb:"резать"};if(_.kind==="static"){const X=o.windows.get(_.id);return X&&!X.broken?{verb:"разбить"}:{verb:"нет",shell:!!_.box&&["wall","floor","ceil","stub"].includes(_.box.kind)}}if(_.kind==="hatch")return{verb:"нет"};if(o.tanks.has(_.id))return{verb:"взорвётся"};const E=d.nearJoint(_.id,_.at);return E&&!(o.stroke&&o.stroke.id===_.id)?{verb:"снять",j:E}:{verb:d.canSplit(_.id)?"резать":"нет"}}function we(_){if(!_||_.kind!=="part"||!t.has(_.id))return null;const E=d.assembly(_.id);if(!I(_.id)){const X=d.jointsOf(_.id),G=X.length?X:[...E.js],g=G.length?d.jointKind(G[0]):"";return g?{why:"держится",kind:g,n:G.length}:null}return w(_.id)?{why:"тяжело"}:null}function Le(_){if(!_)return 0;if(_.kind==="part"&&o.tanks.has(_.id))return o.tanks.get(_.id).heat/o.tanks.get(_.id).fuse;if(o.weld&&_.kind==="part")return o.weld.prog;if(o.stroke&&o.stroke.id===_.id)return o.stroke.prog;if(_.kind==="part"){const E=d.nearJoint(_.id,_.at);return E?(o.cutProg.get(E.id)||0)/E.strength:0}if(_.kind==="cable")return(o.cutProg.get("cable:"+_.id)||0)/At.cableCut;if(_.kind==="static"&&o.windows.has(_.id)){const E=o.windows.get(_.id);return 1-E.hp/E.strength}return 0}const I=_=>{if(!_||!t.has(_))return!1;const E=d.assembly(_);return!E.world&&(E.ids.length===1||E.piece||!E.bolts)},w=_=>{const E=d.assembly(_);return E.mass>At.lift&&(E.ids.length>1||o.pieces.has(_))&&t.kind==="rapier"},ne=_=>!d.jointsOf(_).length;function Me(_,E){o.held=_,o.turn=-1,o.drag=!E,o.carry=new Set(d.assembly(_).ids);for(const X of o.carry)t.carry(X,!0)}function $(){for(const X of o.carry)t.carry(X,!1);const _=o.held,E=o.drag;o.carry=new Set,o.held=null,o.drag=!1,_&&t.has(_)&&!E&&t.setKinematic(_,!1)}function Ce(_){if(o.noteHeld)return!1;if(o.held)return Re();if(!_)return!1;if(_=pe(_),_.kind==="note")return u.take(_.id);if(_.kind==="plate"&&T.loose(_.id)){T.take(_.id);const E=b.get(_.id),X="plate:"+_.id,G=E.face==="+y"||E.face==="-y"?[0,0,0,1]:E.face[1]==="x"?$c(qc):[0,0,0,1],g=E.face[1]==="y"?[Vt.w/2,.012,Vt.w/2]:E.face[1]==="x"?[.012,Vt.w/2,Vt.w/2]:[Vt.w/2,Vt.w/2,.012];return t.addPart({id:X,kind:"plate",shape:"box",h:g,p:[E.x,E.y+.02,E.z],q:G,mass:3},{}),o.partKind.set(X,"plate"),o.partSm.set(X,Qa.plate),o.plates.set(X,_.id),c("panel_off",{id:_.id}),Me(X,!0),t.setKinematic(X,!0),!0}if(_.kind==="part"&&I(_.id)){const E=_.id,X=w(E);return Me(E,!X),X||t.setKinematic(E,!0,!!(o.pieces.get(E)||{}).mate&&!s.has("rambo")),c(X?"drag":"grab",{id:E}),!0}return!1}function Re(_=null){const E=o.held,X=[...o.carry],G=o.drag;if(!E)return!1;if($(),G)return c("drop",{id:E}),!0;const g=o.plates.get(E);if(g&&!_){const U=t.pose(E);if(T.seat(g,U.p))return t.remove(E),o.plates.delete(E),c("panel_seat",{id:g}),!0}const O=!_&&d.snapPose(E);return O?(t.setPose(E,O.p,O.q,!1),t.velocity(E,[0,0,0]),c("snap",{id:E,to:o.pieces.get(E).mate.id}),!0):(h.eject(X.length?X:[E],"отпущен"),_&&t.velocity(E,_),c(_?"throw":"drop",{id:E}),!0)}function ce(_,E=1){if(!o.held)return!1;const X=o.held;return Re(Hx(_,o.partSm.get(X)??.3,E))}function ge(_){const E=Math.cos(_.pitch),X=[-Math.sin(_.yaw)*E,Math.sin(_.pitch),-Math.cos(_.yaw)*E],G=t.half(o.held)||[.2,.2,.2],g=Math.max(...G),O=Ec.dist+g,U=Math.max(O*E,Ln.r+Math.hypot(G[0],G[2])*.75+.05),L=Math.max(_.y+Math.min(...G),_.y+_.eye-Ec.drop+X[1]*O);return[_.x-Math.sin(_.yaw)*U,L,_.z-Math.cos(_.yaw)*U]}function Pe(_,E){const X=_.hinge,G=[_.p[0]-X.at[0],_.p[1]-X.at[1],_.p[2]-X.at[2]],g=f(X,E),O=Ut(g,G);return{p:[X.at[0]+O[0],X.at[1]+O[1],X.at[2]+O[2]],q:qn(g,_.q||[0,0,0,1])}}function W(_,E){const X=o.held,G=t.pose(X),g=ge(E);if(!G)return $();const O=[g[0]-G.p[0],g[2]-G.p[2]],U=Math.hypot(...O);if(U>At.dragFar)return c("drop",{id:X,why:"далеко"}),$();const L=d.assembly(X).mass,K=Math.min(At.drag,U*4),H=U>.02?K/U:0,se=[O[0]*H-G.v[0],O[1]*H-G.v[2]],be=Math.hypot(...se)*L/_,ve=Math.min(1,At.dragForce/(be||1));t.impulse(X,[se[0]*L*ve,0,se[1]*L*ve])}function Ee(_,E){o.t+=_;for(const L of o.doors.values()){const K=L.open,H=L.box;!L.want&&L.open>.5&&E&&E.x>H.x0-Ln.r&&E.x<H.x1+Ln.r&&E.z>H.z0-Ln.r&&E.z<H.z1+Ln.r&&(L.want=1,c("door_blocked",{id:L.id})),L.open+=Math.sign(L.want-L.open)*Math.min(Math.abs(L.want-L.open),_/At.doorTime),K>.5!=L.open>.5&&t.setStatic(L.box.id,L.open<=.5)}for(const L of o.opens.values()){const K=L.open+Math.sign(L.want-L.open)*Math.min(Math.abs(L.want-L.open),_/At.cabTime),H=[];let se=!1;for(const[be,ve]of o.leaf)ve.cab===L.id&&t.has(be)&&v(be)&&(x(be)&&(se=!0),H.push([be,ve,Pe(ve,K)]));if(se){L.want=L.open;continue}if(!(E&&K!==L.open&&!s.has("thruleaf")&&H.some(([,be,ve])=>Hc([E.x,Math.max(ve.p[1]-be.h[1],Math.min(ve.p[1]+be.h[1],E.y+.6)),E.z],ve,be.h)<Ln.r-.02))){L.open=K;for(const[be,,ve]of H)t.moveKinematic(be,ve.p,ve.q)}}if(d.idle(),d.calm(),B(),Ie(E),xe(_,E),me(E),n.climb&&E&&!o.exit){const L=n.portals.find(H=>H.id===n.climb.exit),K=L&&{W:-E.x,E:E.x-n.size[0],S:-E.z,N:E.z-n.size[2]}[L.side];L&&K>.2&&E.y>L.y0-.1&&(o.exit=!0,c("exit",{id:L.id}))}o.held&&E&&(o.drag?W(_,E):t.moveKinematic(o.held,h.hold([o.held,...[...o.carry].filter(L=>L!==o.held)],ge(E)),null));let X=0,G=0;for(const L of o.windows.values())L.broken&&(X+=(L.a1-L.a0)*(L.y1-L.y0));for(const L of n.portals){const K=o.doors.get(L.id);(!K||K.open>.5)&&(G+=(L.a1-L.a0)*(L.y1-L.y0))}const g=2.4*X*o.p,O=2.4*G*(1-o.p)*.3;if(o.p=Math.max(0,Math.min(1,o.p+(O-g)*_*8/A)),o.flow=g,X>0&&o.p>.02)for(const L of o.windows.values()){if(!L.broken)continue;const K=n.statics.find(H=>H.id===L.id);for(const H of t.bodies()){if(H===o.held)continue;const se=t.pose(H),be=[Math.max(K.x0,Math.min(se.p[0],K.x1)),Math.max(K.y0,Math.min(se.p[1],K.y1)),Math.max(K.z0,Math.min(se.p[2],K.z1))],ve=[be[0]-se.p[0],be[1]-se.p[1]+.25,be[2]-se.p[2]],de=Math.hypot(...ve)||1,Q=At.pull*o.p*(L.a1-L.a0)*(L.y1-L.y0)/(1+de*de);Q<At.pullMin||(F(H)||t.release(H),t.impulse(H,ve.map(Ae=>Ae/de*Q*_*(t.mass(H)||1))),Math.hypot(be[0]-se.p[0],be[1]-se.p[1],be[2]-se.p[2])<At.eject&&(t.remove(H),o.removed.push(H),o.ejected.push(H),c("ejected",{id:H,window:L.id})))}if(E){const H=[L.at[0]-E.x,L.at[2]-E.z],se=Math.hypot(...H)||1,be=At.pull*.35*o.p*(L.a1-L.a0)*(L.y1-L.y0)/(1+se*se);E.kx=(E.kx||0)+H[0]/se*be*_,E.kz=(E.kz||0)+H[1]/se*be*_}}for(const L of o.windows.values()){if(L.broken)continue;const K=n.statics.find(H=>H.id===L.id);for(const H of t.bodies()){if(H===o.held)continue;const se=t.pose(H),be=Math.hypot(...se.v),ve=t.aabb(H);if(be>5&&ve.x0<K.x1+.05&&ve.x1>K.x0-.05&&ve.y0<K.y1&&ve.y1>K.y0&&ve.z0<K.z1+.05&&ve.z1>K.z0-.05){ke(L.id,"удар "+H);break}}}for(const L of n.hatches){if(!y.has(L.id)&&!s.has("alltrap"))continue;let K=o.hatchOpen.get(L.id)||0;for(const H of t.bodies()){if(H===o.held)continue;const se=t.pose(H);se.p[0]>L.x0&&se.p[0]<L.x1&&se.p[2]>L.z0&&se.p[2]<L.z1&&se.p[1]<.6&&(K||c("hatch_open",{id:L.id,by:H}),K=Math.max(K,.01),(se.p[1]<-.05||o.t-(o.hatchSeen?.[H]??o.t)>At.hatchBurn)&&(t.remove(H),o.removed.push(H),o.burned.push({id:H,hatch:L.id}),o.flash=Math.max(o.flash,.6),c("burned",{id:H,hatch:L.id})),o.hatchSeen=o.hatchSeen||{},H in o.hatchSeen||(o.hatchSeen[H]=o.t))}E&&E.x>L.x0&&E.x<L.x1&&E.z>L.z0&&E.z<L.z1&&E.y<.1&&(K||c("hatch_open",{id:L.id,by:"player"}),K=Math.max(K,.01),o.deaths++,c("death",{cause:"hatch",id:L.id}),E.respawn&&E.respawn()),K&&(K=Math.min(1,K+_/.35)),K&&K>=1&&![...t.bodies()].some(H=>{const se=t.pose(H);return se.p[0]>L.x0&&se.p[0]<L.x1&&se.p[2]>L.z0&&se.p[2]<L.z1})&&o.t-(o.hatchClose?.[L.id]??0)>2&&(o.hatchClose=o.hatchClose||{},o.hatchClose[L.id]=o.t,K=0,c("hatch_close",{id:L.id})),o.hatchOpen.set(L.id,K)}if(E){const L=E.input||{},K=Math.abs(L.forward||0)+Math.abs(L.strafe||0)>.1,H=L.forward||0,se=L.strafe||0,be=Math.sin(E.yaw),ve=Math.cos(E.yaw),de=[-be*H+ve*se,-ve*H-be*se];if(K)for(const Q of t.bodies()){if(Q===o.held||(o.partSm.get(Q)??1)>At.light||!ne(Q))continue;const Ae=t.aabb(Q);if(!Ae||Ae.y0>E.y+.6||Ae.y1<E.y+.02||Ae.x0>E.x+.6||Ae.x1<E.x-.6||Ae.z0>E.z+.6||Ae.z1<E.z-.6)continue;const Ve=t.pose(Q),rt=Math.max(Ae.y0,Math.min(Ae.y1,E.y+.3));if(Hc([E.x,rt,E.z],Ve,t.half(Q),Oe(Q))>Ln.r+.05)continue;const yt=Ve.p[0]-E.x,ut=Ve.p[2]-E.z,Dt=Math.hypot(yt,ut)||1,Ot=[yt/Dt,ut/Dt];if(Ot[0]*de[0]+Ot[1]*de[1]<.2)continue;const Wt=Ve.v[0]*Ot[0]+Ve.v[2]*Ot[1];Wt<At.push&&!s.has("nopush")&&t.velocity(Q,[Ve.v[0]+Ot[0]*(At.push-Wt),Math.max(Ve.v[1],.3),Ve.v[2]+Ot[1]*(At.push-Wt)])}t.setPlayer({x:E.x,y:E.y,z:E.z,h:E.h||Ln.stand})}const U=t.step(_);if(o.kicks.length)for(const L of o.kicks.splice(0))t.has(L.id)&&t.impulseAt(L.id,L.v,L.at);for(const L of t.bodies()){if(L===o.held||o.carry.has(L)&&!o.drag)continue;const K=t.aabb(L);if(!K||K.x0>-.01&&K.z0>-.01&&K.x1<n.size[0]+.01&&K.z1<n.size[2]+.01&&K.y0>-.06&&K.y1<n.size[1]+.01||h.depth(L)<.02)continue;const H=d.assembly(L);!H.world&&!o.ejected.includes(L)&&h.eject(H.ids,"сеть")}for(const L of t.bodies())t.pose(L).p[1]<-3&&(t.remove(L),o.removed.push(L),c("lost",{id:L}));return o.flash=Math.max(0,o.flash-_*2),U}function ye(_){const E=n.statics.filter(G=>!(G.kind==="glass"&&(o.windows.get(G.id)||{}).broken)&&!(G.kind==="door"&&(o.doors.get(G.door)||{}).open>.5)&&G.kind!=="note"),X=[];if(!s.has("ghost"))for(const G of t.bodies()){if((G===o.held||o.carry.has(G))&&!s.has("rideheld"))continue;const g=t.aabb(G);g&&X.push(...Bc(G,t.pose(G),t.half(G),g,_?_.x:0,_?_.z:0,Oe(G)))}for(const G of o.merged)G.bb=G.bb||ze(G),X.push(...Bc(G.id,G,null,G.bb,_?_.x:0,_?_.z:0,G.poly.faces));return o.extra=X,{col:{boxes:E,circles:[]},extra:X,soft:[]}}const Oe=_=>{const E=t.poly(_);return E?E.faces:null};function ze(_){const E={x0:1e9,x1:-1e9,y0:1e9,y1:-1e9,z0:1e9,z1:-1e9};for(const X of _.poly.faces)for(const G of X.v){const g=on(_,G);E.x0=Math.min(E.x0,g[0]),E.x1=Math.max(E.x1,g[0]),E.y0=Math.min(E.y0,g[1]),E.y1=Math.max(E.y1,g[1]),E.z0=Math.min(E.z0,g[2]),E.z1=Math.max(E.z1,g[2])}return E}function He(){return{v:1,room:n.id,t:+o.t.toFixed(3),p:+o.p.toFixed(4),joints:[...o.joints.keys()],cut:[...o.cutProg].map(([_,E])=>[_,+E.toFixed(3)]),panels:n.panels.map(_=>({id:_.id,...T.view(_.id)})),cables:[...o.cablesCut],breakers:[...o.breakers],doors:[...o.doors].map(([_,E])=>[_,E.want]),opens:[...o.opens].map(([_,E])=>[_,E.want]),windows:[...o.windows].filter(([,_])=>_.broken).map(([_])=>_),tanks:[...o.tanks].map(([_,E])=>[_,+E.heat.toFixed(3),E.gone]),hp:Math.round(o.hp),exit:o.exit,cut2:d.snapshot(),notes:u.snapshot(),leaf:[...o.leaf].filter(([_])=>o.pieces.has(_)).map(([_,E])=>[_,E.cab,E.hinge,E.p,E.q]),removed:o.removed.slice(),burned:o.burned.slice(),ejected:o.ejected.slice(),plates:[...o.plates],bodies:t.bodies().map(_=>{const E=t.pose(_);return{id:_,p:E.p.map(X=>+X.toFixed(4)),q:E.q.map(X=>+X.toFixed(5)),sleep:E.sleep,free:I(_)}})}}function et(_){if(!_||_.room!==n.id)throw new Error("снимок другой комнаты");o.t=_.t,o.p=_.p;for(const E of[...o.joints.keys()])_.joints.includes(E)||(o.joints.delete(E),t.unjoint(E));o.cutProg=new Map(_.cut);for(const E of _.panels){for(let X=0;X<4;X++)E.bolts[X]&&T.cut(E.id,X,99);E.plate==="off"&&T.take(E.id),E.plate==="off"&&E.seated}o.cablesCut=new Set(_.cables),o.breakers=new Map(_.breakers);for(const[E,X]of _.doors){const G=o.doors.get(E);G&&(G.want=G.open=X,t.setStatic(G.box.id,X<=.5))}for(const[E,X]of _.opens){const G=o.opens.get(E);G&&(G.want=G.open=X)}for(const E of _.windows)lt(E);for(const[E,X,G]of _.tanks){const g=o.tanks.get(E);g&&(g.heat=X,g.gone=G)}o.removed=_.removed.slice(),o.burned=_.burned.slice(),o.ejected=_.ejected.slice();for(const E of _.removed)t.has(E)&&t.remove(E);for(const[E,X]of _.plates){const G=_.bodies.find(O=>O.id===E),g=b.get(X);!G||!g||(t.addPart({id:E,kind:"plate",shape:"box",h:g.face[1]==="y"?[Vt.w/2,.012,Vt.w/2]:g.face[1]==="x"?[.012,Vt.w/2,Vt.w/2]:[Vt.w/2,Vt.w/2,.012],p:G.p,q:G.q,mass:3},{}),o.partKind.set(E,"plate"),o.partSm.set(E,Qa.plate),o.plates.set(E,X))}d.restoreBodies(_.cut2);for(const E of _.bodies)t.has(E.id)&&(E.free&&t.release(E.id),t.setPose(E.id,E.p,E.q));d.restoreJoints(_.cut2);for(const E of _.bodies)t.has(E.id)&&t.setPose(E.id,E.p,E.q);u.restore(_.notes),B(!0),_.hp!==void 0&&(o.hp=_.hp),o.exit=!!_.exit;for(const E of[...o.leaf.keys()])t.has(E)||o.leaf.delete(E);for(const[E,X,G,g,O]of _.leaf||[])t.has(E)&&o.leaf.set(E,{cab:X,hinge:G,p:g,q:O,h:t.half(E)});N(),c("restored",{bodies:_.bodies.length,joints:_.joints.length})}function lt(_){const E=o.windows.get(_);E&&(E.broken=!0,E.hp=0,t.setStatic(_,!1))}return{S:o,C:n,phys:t,panels:T,danger:y,weld:(_,E)=>d.weld(_,E),cutter:d,notes:u,shell:h,anchors:B,standing:j,seamLoads:ie,seamCap:Te,fallRule:Ge,burden:Be,turnHeld:qe,grabbable:I,heavy:w,grabInfo:we,cutInfo:Fe,aimGrip:Y,aimWeld:le,isScrap:q,boltAt:(_,E)=>Vo(b.get(_),E),letGo:$,powered:()=>M,isOn:P,aim:Et,cut:fe,use:Ue,grab:Ce,drop:Re,throwHeld:ce,step:Ee,playerCol:ye,usable:S,canGrab:k,canCut:Z,progress:Le,explode:ht,cutJoint:V,toggleDoor:tt,toggleBreaker:Qe,toggleCab:st,breakWindow:ke,snapshot:He,restore:et,exposedCables:ae,holdPoint:ge}}const Uv={lineH:.085},Kt={bevel:0},Gn=Math.PI/2,ff=new cn,zv=new cn,Jc=new ee,Fv={wood:9071173,orange:13132830,teal:3112838,white:14276559,steel:11910338,steelDark:4869458,O2:3108792,N2:3948356,H2:12071978};function Jt(n,e,t){Ms(e[2],n.quaternion),t&&n.quaternion.multiply(ff.set(t[0],t[1],t[2],t[3])),ei(e[0],e[1],e[2],n.position)}function fr(n,e,t){const i=typeof document<"u"?document.createElement("canvas"):null;if(!i)return null;i.width=n,i.height=e,t(i.getContext("2d"),n,e);const s=new ea(i);return s.colorSpace=wn,s.anisotropy=4,s}function Zc(n,e,t,i){const r=Math.round(e*256),a=Math.round(t*256);return fr(r,a,(l,o,c)=>{if(l.fillStyle=i?"#06121a":"#020304",l.fillRect(0,0,o,c),!i||!n)return;const u=Uv.lineH*256,d=Math.round(u*.72);l.font=`600 ${d}px ui-monospace, Menlo, monospace`,l.textBaseline="top",l.fillStyle="#ffcf6a",l.fillText(n.title,10,6),l.fillStyle="#9fe3e6",(n.rows||[]).forEach((h,m)=>l.fillText(h,10,6+u*(m+1))),l.fillStyle="rgba(160,230,255,0.05)";for(let h=0;h<c;h+=4)l.fillRect(0,h,o,1)})}function Ov(n){return fr(256,360,(e,t,i)=>{e.fillStyle="#e8e0c8",e.fillRect(0,0,t,i),e.fillStyle="rgba(80,60,30,0.15)";for(let l=0;l<18;l++)e.fillRect(14,30+l*18,t-28,1);e.fillStyle="#2a2a33",e.font="15px Georgia, serif";const s=String(n||"").split(" ");let r="",a=34;for(const l of s){const o=r?r+" "+l:l;if(e.measureText(o).width>t-30){if(e.fillText(r,16,a),a+=18,r=l,a>i-12)break}else r=o}a<=i-12&&e.fillText(r,16,a)})}function kv(n){return fr(256,256,(e,t,i)=>{e.fillStyle="#4a4d52",e.fillRect(0,0,t,i),e.strokeStyle="#c9a227",e.lineWidth=10,e.strokeRect(12,12,t-24,i-24),e.fillStyle="#d8b030",e.font="bold 92px ui-monospace, Menlo, monospace",e.textAlign="center",e.textBaseline="middle",e.fillText(String(n),t/2,i/2+4)})}function Bv(n,e,{scene:t,lang:i="ru",tier:s={}}={}){const r=mr[n.kit],[a,l,o]=n.size,c=e.texts[i]||e.texts.ru,u=ax([0,0,0],[a,l,o]),d={lamp:Wi(13624063,3.2),lampWarm:Wi(16765600,3),emerg:Wi(16722458,2.6),glowWarm:Wi(16756832,4),lampOff:new yn({color:1776671,roughness:.6,metalness:.2})},h={...ox(u),lamp:d.lamp,emerg:d.emerg,glowWarm:d.glowWarm},m=new ys;m.userData.room=n.id,t.add(m);const f=[],v=new ti,x=n.hatches.map(g=>({x0:g.x0,x1:g.x1,y0:-.36,y1:.001,z0:g.z0,z1:g.z1,id:g.id}));ti.holes=[...n.niches.map(g=>({...g})),...x];try{for(const g of n.statics)g.kind==="floor"||g.kind==="stub"&&g.id.endsWith("_floor")?v.slab("floor",g.x0,g.y0,g.z0,g.x1,g.y1,g.z1,{bevel:0}):g.kind==="ceil"||g.kind==="stub"&&g.id.endsWith("_ceil")?v.slab("ceil",g.x0,g.y0,g.z0,g.x1,g.y1,g.z1,{bevel:0}):(g.kind==="wall"||g.kind==="stub")&&v.slab("wall",g.x0,g.y0,g.z0,g.x1,g.y1,g.z1,{bevel:0})}finally{ti.holes=null}const p=g=>[...n.portals.filter(O=>O.side===g).map(O=>({a0:O.a0,a1:O.a1,y0:O.y0,y1:O.y1})),...n.windows.filter(O=>O.side===g).map(O=>({a0:O.a0,a1:O.a1,y0:O.y0,y1:O.y1}))],y=r.dado;for(const[g,O,U,L]of[["W","x",.012,o],["E","x",a-.012,o],["S","z",.012,a],["N","z",o-.012,a]]){const K=p(g).filter(H=>H.y0<y).map(H=>({...H,a0:H.a0-.1,a1:H.a1+.1,y0:0,y1:y+.1}));v.wall("wallDark",O,U,0,L,.08,y,.024,K),v.wall("steelDark",O,U,0,L,0,.08,.03,K.map(H=>({...H,y1:.2}))),v.wall("steel",O,U,0,L,y,y+.03,.03,p(g).filter(H=>H.y0<y+.03).map(H=>({...H,a0:H.a0-.12,a1:H.a1+.12,y0:0,y1:9})))}for(let g=r.beam/2;g<a;g+=r.beam)v.box("steelDark",g,l-.06,o/2,.14,.12,o,Kt);v.pipe("steel",[.25,l-.22,.2],[.25,l-.22,o-.2],.05,{seg:10}),v.pipe("copper",[.42,l-.18,.2],[.42,l-.18,o-.2],.03,{seg:8});for(const g of n.portals){const L=(g.a0+g.a1)/2,K=g.a1-g.a0,H=(be,ve,de,Q)=>{if(g.along==="z"){const Ae=g.side==="W"?.025:a-.025;v.box("orange",Ae,ve,be,.05,Q,de,Kt)}else{const Ae=g.side==="S"?.025:o-.025;v.box("orange",be,ve,Ae,de,Q,.05,Kt)}};H(g.a0-.12/2,(g.y0+g.y1)/2,.12,g.y1-g.y0),H(g.a1+.12/2,(g.y0+g.y1)/2,.12,g.y1-g.y0),H(L,g.y1+.12/2,K+2*.12,.12);const se=g.along==="z"?[g.side==="W"?.03:a-.03,g.y0+.3,g.a0-.3]:[g.a0-.3,g.y0+.3,g.side==="S"?.03:o-.03];v.box("emerg",se[0],se[1],se[2],g.along==="z"?.02:.2,.05,g.along==="z"?.2:.02,Kt)}for(const g of n.windows){const U=g.side==="W"||g.side==="E"?"z":"x",L={W:0,E:a,S:0,N:o}[g.side],K=g.side==="W"||g.side==="S"?1:-1,H=.04,se=(g.a0+g.a1)/2,be=g.a1-g.a0,ve=(de,Q,Ae,Ve)=>U==="z"?v.box("steel",L+K*H/2,Q,de,H,Ve,Ae,Kt):v.box("steel",de,Q,L+K*H/2,Ae,Ve,H,Kt);ve(g.a0-.06/2,(g.y0+g.y1)/2,.06,g.y1-g.y0+2*.06),ve(g.a1+.06/2,(g.y0+g.y1)/2,.06,g.y1-g.y0+2*.06),ve(se,g.y0-.06/2,be+2*.06,.06),ve(se,g.y1+.06/2,be+2*.06,.06),ve(se,g.y0-.1,be+.3,.05)}for(const g of n.statics)g.kind==="screen"&&v.slab("steelDark",g.x0-(g.x1-g.x0>.2?.03:0),g.y0-.03,g.z0-(g.z1-g.z0>.2?.03:0),g.x1+(g.x1-g.x0>.2?.03:0),g.y1+.03,g.z1+(g.z1-g.z0>.2?.03:0),Kt),g.kind==="cabinet"&&v.slab(g.mat,g.x0,g.y0,g.z0,g.x1,g.y1,g.z1,Kt);for(const g of n.parts)if(g.hinge){const O=g.hinge,U=O.sg;((K,H,se)=>{for(const be of O.ys){const ve=(O.along==="x"?O.at[0]:O.at[2])+K,de=O.along==="x"?O.at[2]:O.at[0],Q=de-U*.036,Ae=Q+U*se;O.along==="x"?v.slab("steel",ve-H/2,O.at[1]+be-.05,Math.min(Q,Ae),ve+H/2,O.at[1]+be+.05,Math.max(Q,Ae),Kt):v.slab("steel",Math.min(Q,Ae),O.at[1]+be-.05,ve-H/2,Math.max(Q,Ae),O.at[1]+be+.05,ve+H/2,Kt)}})(O.side===0?-.006:.006,.012,.04)}for(const g of n.joints)g.kind==="rivet"&&v.box("steelDark",g.at[0],g.at[1],g.at[2],.05,.05,.05,Kt);for(const g of n.fixtures)v.box("steelDark",g.x,g.y-.04,g.z,g.w+.1,.08,g.l+.1,Kt);for(const g of n.statics)if(g.kind==="shelf"&&v.slab(g.mat||"steel",g.x0,g.y0,g.z0,g.x1,g.y1,g.z1,{bevel:.006}),g.kind==="pipe"){const O={W:[g.off,null],E:[a-g.off,null],S:[null,g.off],N:[null,o-g.off]}[g.side],U=L=>O[0]!==null?[O[0],g.y,L]:[L,g.y,O[1]];v.pipe(g.mat==="copper"?"copper":g.mat,U(g.a0),U(g.a1),g.r,{seg:10});for(let L=g.a0+.25;L<g.a1;L+=1){const K=U(L),H={W:[0,null],E:[a,null],S:[null,0],N:[null,o]}[g.side];H[0]!==null?v.slab("steelDark",Math.min(H[0],K[0]),g.y-.02,L-.03,Math.max(H[0],K[0]),g.y+.02,L+.03,Kt):v.slab("steelDark",L-.03,g.y-.02,Math.min(H[1],K[2]),L+.03,g.y+.02,Math.max(H[1],K[2]),Kt)}}for(const g of n.hatches){const U=x.find(L=>L.id===g.id);v.slab("steel",g.x0-.05,-.004,g.z0-.05,g.x1+.05,.006,g.z0,Kt),v.slab("steel",g.x0-.05,-.004,g.z1,g.x1+.05,.006,g.z1+.05,Kt),v.slab("steel",g.x0-.05,-.004,g.z0,g.x0,.006,g.z1,Kt),v.slab("steel",g.x1,-.004,g.z0,g.x1+.05,.006,g.z1,Kt);for(const[L,K,H,se]of[[U.x0,U.x1,U.z0,U.z0+.012],[U.x0,U.x1,U.z1-.012,U.z1],[U.x0,U.x0+.012,U.z0,U.z1],[U.x1-.012,U.x1,U.z0,U.z1]])v.slab("steelDark",L,U.y0,H,K,-.004,se,Kt);v.slab("steelDark",U.x0,U.y0,U.z0,U.x1,U.y0+.012,U.z1,Kt)}for(const g of n.panels){const O=ur(g),U={"+x":[1,0,0],"-x":[-1,0,0],"+z":[0,0,1],"-z":[0,0,-1],"+y":[0,1,0],"-y":[0,-1,0]}[g.face],L=.012;for(const[K,H]of[["x",0],["y",1],["z",2]]){const se=O[K+"0"],be=O[K+"1"],ve=(de,Q)=>{const Ae={...O};Ae[K+"0"]=de,Ae[K+"1"]=Q,v.slab("steelDark",Ae.x0,Ae.y0,Ae.z0,Ae.x1,Ae.y1,Ae.z1,{bevel:0})};if(U[H]){const de=U[H]>0?se:be;ve(de-L/2,de+L/2)}else ve(se,se+L),ve(be-L,be)}}const T=v.build(h);T.userData.room=n.id,m.add(T);const b=new vx(t,{spots:3,points:3});s.spots&&b.setTier(s);const A=new Map;for(const g of n.lights)A.set(g.id,b.add({...g,pos:g.pos.slice(),to:g.to.slice(),reach:30}));for(const g of n.portals){const O={W:[-1.2,g.y1-.2,(g.a0+g.a1)/2],E:[a+1.2,g.y1-.2,(g.a0+g.a1)/2],S:[(g.a0+g.a1)/2,g.y1-.2,-1.2],N:[(g.a0+g.a1)/2,g.y1-.2,o+1.2]}[g.side];b.add({kind:"point",pos:O,color:r.stub.light,power:3,dist:5,reach:30})}if(l>5)for(let g=1.6;g<l-1;g+=3.2)b.add({kind:"point",pos:[a/2,g,o-.25],color:13623551,power:4,dist:6,reach:30});b.add({kind:"point",pos:[a/2,.4,o/2],color:16724e3,power:1.6,dist:9,reach:30,prio:.5,name:"emergency"});const R=new Map;for(const g of n.fixtures){const O=n.lights.find(L=>L.id===g.id),U=new vt(new kt(g.w-.06,.02,g.l-.06),O&&O.color===16765600?d.lampWarm:d.lamp);Jt(U,[g.x,g.y-.09,g.z]),m.add(U),R.set(g.id,{m:U,on:U.material})}const M=new Map,C=new Map,P=sf(),N=g=>{if(C.has(g))return C.get(g);const O=Fv[g]??(ua[g]?ua[g][1]:9080726),U=["steel","steelDark","O2","N2","H2"].includes(g),L=new yn({color:O,roughness:U?.45:.7,metalness:U?.7:.1,map:U?P.metal.map:P.paint.map,normalMap:U?P.metal.normalMap:P.paint.normalMap});return C.set(g,L),L},F={wood:["#b98d55","#7d5a30","#d9b27a"],board:["#cbb488","#8f7a52","#e6d4a8"],metal:["#9aa3ab","#5c646c","#dfe6ea"]},V=new Map;function te(g){if(V.has(g))return V.get(g);const[O,U,L]=F[g],K=fr(128,128,(H,se,be)=>{H.fillStyle=O,H.fillRect(0,0,se,be);let ve=7;const de=()=>(ve=ve*16807%2147483647,ve/2147483647);if(g==="metal")for(let Q=0;Q<260;Q++)H.fillStyle=de()<.5?U:L,H.globalAlpha=.12+de()*.25,H.fillRect(de()*se,Math.floor(de()*be),10+de()*50,1);else for(let Q=0;Q<420;Q++)H.fillStyle=de()<.6?U:L,H.globalAlpha=.2+de()*.4,g==="wood"?H.fillRect(de()*se,de()*be,1+de()*2,8+de()*26):H.fillRect(de()*se,de()*be,2+de()*6,1+de()*3);H.globalAlpha=1});return K&&(K.wrapS=K.wrapT=rr,f.push(K)),V.set(g,K),K}const B=g=>["steel","steelDark"].includes(g)?"metal":g==="white"?"board":"wood",j=new Map;function oe(g){if(j.has(g))return j.get(g);const O=N(g).clone(),U=te(B(g));return O.onBeforeCompile=L=>{L.uniforms.uCutMap={value:U},L.vertexShader=`attribute float aCut;
varying float vCut;
varying vec2 vCutUv;
`+L.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
  vCut = aCut; vCutUv = uv;`),L.fragmentShader=`uniform sampler2D uCutMap;
varying float vCut;
varying vec2 vCutUv;
`+L.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
  if (vCut > 0.5) diffuseColor.rgb = texture2D(uCutMap, vCutUv).rgb;`)},O.customProgramCacheKey=()=>"roomcut",j.set(g,O),O}function re(g){const O=[],U=[],L=[],K=[],H=new dt,se=new ee;for(const{poly:ve,m:de}of g){de&&H.getNormalMatrix(de);for(const Q of ve.faces){const Ae=se.set(...Q.n);de&&Ae.applyMatrix3(H).normalize();const Ve=Ae.x,rt=Ae.y,xt=Ae.z;for(let yt=1;yt+1<Q.v.length;yt++)for(const ut of[Q.v[0],Q.v[yt],Q.v[yt+1]])se.set(ut[0],ut[1],ut[2]),de&&se.applyMatrix4(de),O.push(se.x,se.y,se.z),U.push(Ve,rt,xt),L.push(ut[3],ut[4]),K.push(Q.cut?1:0)}}const be=new rn;return be.setAttribute("position",new pt(O,3)),be.setAttribute("normal",new pt(U,3)),be.setAttribute("uv",new pt(L,2)),be.setAttribute("aCut",new pt(K,1)),be}const Te=new Map;let ie=!1;const Se=new Set;function me(g){let O;if(g.shape==="cyl"){const L=g.h[0],K=g.h[1],H=[new Ji(L,L,K*2-.1,18,1),new Di(L,18,8,0,Math.PI*2,0,Gn),new Ji(.025,.03,.08,10)];H[1].translate(0,K-.05,0),H[2].translate(0,K+.03,0),O=new rn;const se=H.map(Q=>Q.toNonIndexed()),be=[],ve=[],de=[];for(const Q of se)be.push(...Q.attributes.position.array),ve.push(...Q.attributes.normal.array),de.push(...Q.attributes.uv.array);O.setAttribute("position",new pt(be,3)),O.setAttribute("normal",new pt(ve,3)),O.setAttribute("uv",new pt(de,2))}else{const L=g.h.map(K=>K.toFixed(3)).join(",");O=M.get(L),O||(O=new kt(g.h[0]*2,g.h[1]*2,g.h[2]*2),O.setAttribute("aCut",new pt(new Float32Array(O.attributes.position.count),1))),M.set(L,O)}const U=new vt(O,Xo.has(g.kind)?oe(g.mat||g.kind):N(g.mat||g.kind));return U.castShadow=!0,U.receiveShadow=!0,U.userData.part=g.id,U.userData.prefab=g.prefab,m.add(U),Te.set(g.id,U),U}function De(g,O){const U=g.hinge,L=U.along==="x",K=L?g.h[0]:g.h[2],H=g.h[1],se=U.sg,be=g.h[L?2:0],ve=U.side===0?1:-1,de=Ot=>{const Wt=[],Fn=[],Fi=[];for(const D of Ot){const J=D.toNonIndexed();Wt.push(...J.attributes.position.array),Fn.push(...J.attributes.normal.array),Fi.push(...J.attributes.uv.array)}const Jn=new rn;return Jn.setAttribute("position",new pt(Wt,3)),Jn.setAttribute("normal",new pt(Fn,3)),Jn.setAttribute("uv",new pt(Fi,2)),Jn},Q=(Ot,Wt,Fn,Fi,Jn,D)=>{const J=L?new kt(Fi,Jn,D):new kt(D,Jn,Fi);return J.translate(L?Ot:Fn,Wt,L?Fn:Ot),J},Ae=se*(be+.004),Ve=.035,rt=de([Q(0,H-Ve,Ae,2*K,2*Ve,.008),Q(0,-H+Ve,Ae,2*K,2*Ve,.008),Q(-K+Ve,0,Ae,2*Ve,2*H,.008),Q(K-Ve,0,Ae,2*Ve,2*H,.008)]),xt=new vt(rt,O.material);xt.castShadow=!1,xt.receiveShadow=!0,O.add(xt);const yt=L?U.at[0]-g.p[0]:U.at[2]-g.p[2];L?U.at[2]-g.p[2]:U.at[0]-g.p[0];const ut=[Q(ve*(K-.07),.05,se*(be+.035),.018,.16,.018),Q(ve*(K-.07),.12,se*(be+.018),.014,.014,.036),Q(ve*(K-.07),-.02,se*(be+.018),.014,.014,.036)];for(const Ot of U.ys)ut.push(Q(yt+ve*.035,Ot,se*(be+.004),.06,.09,.006));const Dt=new vt(de(ut),N("yellow"));Dt.castShadow=!1,Dt.receiveShadow=!0,O.add(Dt)}for(const g of n.parts){const O=me(g);g.hinge&&De(g,O)}const Ge=new Map;for(const g of n.doors){const O=g.box,U=new vt(new kt(O.x1-O.x0,O.y1-O.y0,O.z1-O.z0),N(g.kind==="sealed"?"red":"steelDark"));U.castShadow=!0,U.receiveShadow=!0,U.userData.door=g.id,m.add(U),Ge.set(g.id,{m:U,d:g})}const xe=new Map,Ie=r.wallT;for(const g of n.portals){const O=g.a1-g.a0,U=g.along==="z"?new kt(Ie+.1,.012,O):new kt(O,.012,Ie+.1),L={W:[-Ie/2,(g.a0+g.a1)/2],E:[a+Ie/2,(g.a0+g.a1)/2],S:[(g.a0+g.a1)/2,-Ie/2],N:[(g.a0+g.a1)/2,o+Ie/2]}[g.side],K=g.y0>0,H=K?g.along==="z"?new kt(.05,.16,O):new kt(O,.16,.05):U,se=new vt(H,K?d.lampWarm:N("yellow"));se.receiveShadow=!0,Jt(se,K?g.along==="z"?[g.side==="W"?.02:a-.02,g.y0-.09,L[1]]:[L[0],g.y0-.09,g.side==="S"?.02:o-.02]:[L[0],.006,L[1]]),m.add(se),xe.set(g.id,se)}const Be=new yn({color:10470616,roughness:.05,metalness:.2,transparent:!0,opacity:.22,depthWrite:!1}),qe=new Map;for(const g of n.windows){const O=n.statics.find(L=>L.id===g.id),U=new vt(new kt(O.x1-O.x0,O.y1-O.y0,O.z1-O.z0),Be);Jt(U,[(O.x0+O.x1)/2,(O.y0+O.y1)/2,(O.z0+O.z1)/2]),U.userData.window=g.id,m.add(U),qe.set(g.id,U)}const Ne=fr(512,256,(g,O,U)=>{g.fillStyle="#01030a",g.fillRect(0,0,O,U);for(let L=0;L<260;L++){const K=Math.random();g.fillStyle=`rgba(${200+K*55},${210+K*45},255,${.3+K*.7})`,g.fillRect(Math.random()*O,Math.random()*U,K>.92?2:1,K>.92?2:1)}});for(const g of n.windows){const O=new vt(new Ni((g.a1-g.a0)*3,(g.y1-g.y0)*3),new As({map:Ne,toneMapped:!1})),U=3,L={W:[-U,null],E:[a+U,null],S:[null,-U],N:[null,o+U]}[g.side],K=(g.a0+g.a1)/2,H=(g.y0+g.y1)/2,se=L[0]!==null?[L[0],H,K]:[K,H,L[1]],be={W:Gn,E:-Gn,S:0,N:Math.PI}[g.side];Jt(O,se,[0,Math.sin(be/2),0,Math.cos(be/2)]),m.add(O)}const Ke=new Map;for(const g of n.texts){const O=n.statics.find(de=>de.id===g.id),U=n.prefabOf[g.id],L=U.wall,K={W:Gn,E:-Gn,S:0,N:Math.PI}[L],H=.004,se={W:[1,0],E:[-1,0],S:[0,1],N:[0,-1]}[L],be=L==="W"?O.x1:L==="E"?O.x0:(O.x0+O.x1)/2,ve=L==="S"?O.z1:L==="N"?O.z0:(O.z0+O.z1)/2;if(g.kind==="screen"){const de=Zc(c[g.key],g.w,g.h,!0),Q=new vt(new Ni(g.w,g.h),new As({map:de,toneMapped:!1,color:16777215}));Jt(Q,[be+se[0]*H,(O.y0+O.y1)/2,ve+se[1]*H],[0,Math.sin(K/2),0,Math.cos(K/2)]),Q.userData.screen=g.id,m.add(Q),Ke.set(g.id,{m:Q,texOn:de,texOff:Zc(null,g.w,g.h,!1),t:g}),de&&f.push(de)}else{const de=Ov(c[g.key]),Q=new vt(new Ni(.21,.3),new yn({map:de,roughness:.9,metalness:0,emissive:2761750,emissiveIntensity:.4}));Jt(Q,[be+se[0]*H,(O.y0+O.y1)/2,ve+se[1]*H],[0,Math.sin(K/2),0,Math.cos(K/2)]),Q.userData.note=g.id,m.add(Q),Ke.set(g.id,{m:Q,note:!0,t:g})}}const ht=new Map,ke=new Map;for(const g of n.statics.filter(O=>O.kind==="breaker")){const O=new vt(new kt(.05,.16,.05),N("red")),U=n.prefabOf[g.prefab],L={W:[1,0],E:[-1,0],S:[0,1],N:[0,-1]}[U.wall],K=U.wall==="W"?g.x1:U.wall==="E"?g.x0:(g.x0+g.x1)/2,H=U.wall==="S"?g.z1:U.wall==="N"?g.z0:(g.z0+g.z1)/2;O.userData.base=[K+L[0]*.04,(g.y0+g.y1)/2,H+L[1]*.04],O.userData.side=U.wall;const se=new vt(new kt(U.wall==="W"||U.wall==="E"?.005:g.x1-g.x0,.04,U.wall==="W"||U.wall==="E"?g.z1-g.z0:.005),N("yellow"));Jt(se,[K+L[0]*.003,g.y1-.05,H+L[1]*.003]),m.add(se),m.add(O),ht.set(g.prefab,O);const be=new vt(new kt(g.x1-g.x0,g.y1-g.y0,g.z1-g.z0),N("steelDark"));Jt(be,[(g.x0+g.x1)/2,(g.y0+g.y1)/2,(g.z0+g.z1)/2]),be.castShadow=!0,be.receiveShadow=!0,m.add(be),ke.set(g.prefab,be)}const tt=new Map;for(const g of n.hatches){const O=kv(g.number),U=new vt(new kt(g.x1-g.x0-.02,.03,g.z1-g.z0-.02),new yn({map:O,roughness:.6,metalness:.5}));U.receiveShadow=!0,U.userData.hatch=g.id,m.add(U),tt.set(g.id,{m:U,h:g})}const st=new vt(new Ni(.85,.85),d.glowWarm);st.visible=!1,m.add(st);const Qe={plate:new yn({color:8094344,metalness:.55,roughness:.5,vertexColors:!0}),bolt:new yn({color:11910338,metalness:.8,roughness:.35}),head:new yn({color:2369323,metalness:.4,roughness:.5})},_t=(()=>{const g=Vt.w,O=.03,U=[[g,g,.018,0,0,.009,8094344]];for(const de of[-1,1])U.push([g+2*O,O,.004,0,de*(g/2+O/2),.002,14856732]),U.push([O,g,.004,de*(g/2+O/2),0,.002,14856732]);const L=[],K=[],H=[],se=[],be=new ot;for(const[de,Q,Ae,Ve,rt,xt,yt]of U){const ut=new kt(de,Q,Ae).toNonIndexed();ut.translate(Ve,rt,xt),L.push(...ut.attributes.position.array),K.push(...ut.attributes.normal.array),se.push(...ut.attributes.uv.array),be.set(yt);for(let Dt=0;Dt<ut.attributes.position.count;Dt++)H.push(be.r/.48,be.g/.51,be.b/.53)}const ve=new rn;return ve.setAttribute("position",new pt(L,3)),ve.setAttribute("normal",new pt(K,3)),ve.setAttribute("uv",new pt(se,2)),ve.setAttribute("color",new pt(H,3)),ve})(),mt=(()=>{const g=Vt.w,O=.035,U=[[g,O,.02,0,g/2-O/2,.01],[g,O,.02,0,-g/2+O/2,.01],[O,g,.02,g/2-O/2,0,.01],[O,g,.02,-g/2+O/2,0,.01]];for(let de=0;de<5;de++)U.push([g-2*O,.022,.012,0,-g/2+O+(de+.5)*(g-2*O)/5,.012,!0]);const L=[],K=[],H=[],se=[],be=new ot(6120555);for(const[de,Q,Ae,Ve,rt,xt,yt]of U){const ut=new kt(de,Q,Ae).toNonIndexed();yt&&ut.rotateX(.6),ut.translate(Ve,rt,xt),L.push(...ut.attributes.position.array),K.push(...ut.attributes.normal.array),se.push(...ut.attributes.uv.array);for(let Dt=0;Dt<ut.attributes.position.count;Dt++)H.push(be.r/.48,be.g/.51,be.b/.53)}const ve=new rn;return ve.setAttribute("position",new pt(L,3)),ve.setAttribute("normal",new pt(K,3)),ve.setAttribute("uv",new pt(se,2)),ve.setAttribute("color",new pt(H,3)),ve})(),Et=g=>g&&g.panel==="vent"?mt:_t,z={"+y":[-Gn,0],"-y":[Gn,0],"+x":[0,Gn],"-x":[0,-Gn],"+z":[0,0],"-z":[0,Math.PI]},le=new Map;for(const g of n.panels){const O=new vt(Et(g),Qe.plate),[U,L]=z[g.face],K=new gn(U,L,0,"YXZ"),H=new cn().setFromEuler(K),se={"+y":[0,.003,0],"-y":[0,-.003,0],"+x":[.003,0,0],"-x":[-.003,0,0],"+z":[0,0,.003],"-z":[0,0,-.003]}[g.face];Jt(O,[g.x+se[0],g.y+se[1],g.z+se[2]],[H.x,H.y,H.z,H.w]),O.receiveShadow=!0,O.userData.panel=g.id,m.add(O),le.set(g.id,{m:O,q:[H.x,H.y,H.z,H.w]})}const Y=new Pi(new Ji(Vt.bolt*.6,Vt.bolt*.72,.014,6),Qe.head,Math.max(1,n.panels.length*4));Y.count=n.panels.length*4,m.add(Y);const ae={live:new yn({color:12071978,roughness:.5,metalness:.1}),dead:new yn({color:2761252,roughness:.8})};let fe=null;function Ue(g=new Set,O={}){fe&&(m.remove(fe),fe.geometry.dispose());const U=new ti;for(const K of n.cables){const H=K.pts,se=O[K.id];for(let be=1;be<H.length;be++){let ve=H[be-1],de=H[be];if(se&&g.has(K.id)&&Math.abs((ve[0]===de[0]?ve[0]:se[0])-se[0])<.001&&Math.abs((ve[2]===de[2]?ve[2]:se[2])-se[2])<.001&&se[0]>=Math.min(ve[0],de[0])-.001&&se[0]<=Math.max(ve[0],de[0])+.001&&se[2]>=Math.min(ve[2],de[2])-.001&&se[2]<=Math.max(ve[2],de[2])+.001){const Ae=[de[0]-ve[0],0,de[2]-ve[2]],Ve=Math.hypot(Ae[0],Ae[2])||1,rt=[Ae[0]/Ve*.04,0,Ae[2]/Ve*.04];U.pipe("rubber",ve,[se[0]-rt[0],se[1],se[2]-rt[2]],.022,{seg:8}),U.pipe("rubber",[se[0]+rt[0],se[1],se[2]+rt[2]],de,.022,{seg:8});continue}U.pipe("rubber",ve,de,.022,{seg:8})}}const L=U.build({cloth:ae.live});fe=L.children[0]||null,fe&&(L.remove(fe),fe.castShadow=!1,m.add(fe))}Ue(),new Lt;const S=new Zt;let k="",q="",pe=0;const Z=[],Fe=new yn({color:11121079,roughness:.45,metalness:.3,emissive:2759180,emissiveIntensity:.8}),we=Wi(16756832,5),Le=Math.max(1,n.joints.filter(g=>g.kind==="hinge").length),I=Math.max(1,n.joints.filter(g=>g.kind!=="hinge"&&g.kind!=="rivet").length),w=new Pi(new Ji(.013,.013,.1,10),N("yellow"),Le),ne=new Pi(new Di(.011,8,6),Qe.bolt,I),Me=new Pi(new Di(.021,12,8),Wi(16753722,6),64);for(const g of[w,ne,Me])g.frustumCulled=!1,g.castShadow=!1,g.visible=!1,g.count=0,m.add(g);let $=[];const Ce=g=>{$=g},Re=120,ce=new Pi(new Di(.016,6,4),Wi(16760944,9),Re);ce.frustumCulled=!1,ce.castShadow=!1,ce.visible=!1,ce.count=0,m.add(ce);function ge(g){const O=g.S;let U=0;for(const L of O.sparks){const K=O.t-L.t;if(!(K<0||K>.9))for(let H=0;H<L.n&&U<Re;H++){const se=Ae=>{const Ve=Math.sin((H+1)*12.9898+L.seed*78.233+Ae*37.719)*43758.5453;return Ve-Math.floor(Ve)},be=se(0)*Math.PI*2,ve=.6+se(1)*2.2,de=-.5+se(2)*2.6,Q=.35+se(3)*.55;K>Q||(Jt(S,[L.at[0]+Math.cos(be)*ve*K,L.at[1]+de*K-4.9*K*K,L.at[2]+Math.sin(be)*ve*K],null),S.scale.setScalar(1.2-K/Q),S.updateMatrix(),ce.setMatrixAt(U++,S.matrix))}}ce.count=U,ce.visible=U>0,U&&(ce.instanceMatrix.needsUpdate=!0)}function Pe(g,O){const U=(se,be,ve,de,Q)=>{Jt(S,ve,de),S.scale.setScalar(Q),S.updateMatrix(),se.setMatrixAt(be,S.matrix)};let L=0,K=0,H=0;for(const se of g.S.joints.values())Se.has(se.prefab)||(se.kind==="hinge"&&L<Le?U(w,L++,g.cutter.worldAt(se),null,1):se.kind==="dowel"&&K<I&&U(ne,K++,g.cutter.worldAt(se),null,1));for(const se of $)H<64&&U(Me,H++,se.at,null,se.hot?1.35+.25*Math.sin(O*9):.85);for(const[se,be]of[[w,L],[ne,K],[Me,H]])se.count=be,se.visible=be>0,be&&(se.instanceMatrix.needsUpdate=!0)}const W=new Di(.0075,8,6),Ee=480,ye=96,Oe=new Pi(W,Fe,Ee),ze=new Pi(new Di(.006,6,4),we,ye);for(const g of[Oe,ze])g.frustumCulled=!1,g.castShadow=!1,g.visible=!1,g.count=0,m.add(g);function He(g){const O=g.S;for(const[ve,de]of O.pieces)if(!Te.has(ve)){const Q=new vt(re([{poly:de.poly}]),oe(de.mat));Q.castShadow=!0,Q.receiveShadow=!0,Q.userData.part=ve,Q.userData.prefab=de.prefab,Q.userData.piece=!0,m.add(Q),Te.set(ve,Q)}for(const[ve,de]of Te)de.userData.piece&&!O.pieces.has(ve)&&(m.remove(de),de.geometry.dispose(),Te.delete(ve));if(O.merged.length!==pe){pe=O.merged.length;for(const Q of Z.splice(0))m.remove(Q),Q.geometry.dispose();const ve=new Map,de=new Zt;for(const Q of O.merged){Jt(de,Q.p,Q.q),de.updateMatrix();const Ae=oe(Q.mat);ve.has(Ae)||ve.set(Ae,[]),ve.get(Ae).push({poly:Q.poly,m:de.matrix.clone()})}for(const[Q,Ae]of ve){const Ve=new vt(re(Ae),Q);Ve.receiveShadow=!0,Ve.castShadow=!0,m.add(Ve),Z.push(Ve)}}const U=(ve,de,Q)=>{S.position.copy(ei(Q[0],Q[1],Q[2],Jc)),S.quaternion.identity(),S.scale.setScalar(1),S.updateMatrix(),ve.setMatrixAt(de,S.matrix)};let L=0;const K=(ve,de)=>{const Q=g.phys.pose(ve);if(Q)for(let Ae=0;Ae<de.length;Ae++){const Ve=de[Ae],rt=de[Ae+1]||Ve,xt=Math.hypot(Ve[0]-rt[0],Ve[1]-rt[1],Ve[2]-rt[2]),yt=Math.max(1,Math.round(xt/.004));for(let ut=0;ut<yt&&L<Ee;ut++)U(Oe,L++,on(Q,[0,1,2].map(Dt=>Ve[Dt]+(rt[Dt]-Ve[Dt])*ut/yt)))}};for(const[,ve]of O.beads)K(ve.a,ve.pts);Oe.count=L,Oe.visible=L>0,L&&(Oe.instanceMatrix.needsUpdate=!0),L=0;const H=O.stroke,se=O.weld,be=H?g.phys.pose(H.id):se?g.phys.pose(se.a):null;if(H&&be){const ve=Math.hypot(H.p1[0]-H.p0[0],H.p1[1]-H.p0[1],H.p1[2]-H.p0[2]),de=Math.min(ye,Math.max(1,Math.round(ve/.009)));for(let Q=0;Q<de;Q++){const Ae=de>1?Q/(de-1):1;U(ze,L++,on(be,[0,1,2].map(Ve=>H.p0[Ve]+(H.p1[Ve]-H.p0[Ve])*Ae)))}}else if(se&&be)for(const ve of se.path)L<ye&&U(ze,L++,on(be,ve));ze.count=L,ze.visible=L>0,L&&(ze.instanceMatrix.needsUpdate=!0)}function et(g,O,U,L){const K=g.S,H=g.phys;He(g),Pe(g,O),ge(g);for(const de of g.notes.ids()){const Q=Ke.get(de),Ae=g.notes.pose(de);if(Q)if(K.noteHeld===de&&U&&L){const Ve=Math.cos(L.pitch),rt=[-Math.sin(L.yaw)*Ve,Math.sin(L.pitch),-Math.cos(L.yaw)*Ve],xt=[Math.cos(L.yaw),0,-Math.sin(L.yaw)],yt=new cn().setFromEuler(new gn(L.pitch,L.yaw,0,"YXZ"));Q.m.visible=!0,Jt(Q.m,[0,1,2].map(ut=>U[ut]+rt[ut]*.5+xt[ut]*.16-(ut===1?.14:0)),[yt.x,yt.y,yt.z,yt.w])}else Q.m.visible=!!Ae&&!Se.has(de),Ae&&Jt(Q.m,Ae.p,Ae.q)}for(const[de,Q]of Te){const Ae=H.pose(de);if(!Ae||Se.has(Q.userData.prefab)){Q.visible=!1;continue}Q.visible=!0,Jt(Q,Ae.p,Ae.q)}for(const[de]of K.plates)if(!Te.has(de)){const Q=new vt(Et(n.panels.find(Ae=>Ae.id===K.plates.get(de))),Qe.plate);Q.castShadow=!0,m.add(Q),Te.set(de,Q),Q.userData.part=de,Q.userData.plateLocal=!0}for(const[de,Q]of Te)if(Q.userData.plateLocal){const Ae=H.pose(de);if(!Ae){Q.visible=!1;continue}const Ve=n.panels.find(yt=>yt.id===K.plates.get(de)),rt=le.get(Ve.id).q,xt=new cn(...Ae.q).multiply(zv.set(...rt));Q.visible=!0,Jt(Q,Ae.p,[xt.x,xt.y,xt.z,xt.w])}for(const[de,{m:Q,d:Ae}]of Ge){const Ve=K.doors.get(de),rt=Ae.box,xt=Ve.open*((Ae.along==="z"?rt.z1-rt.z0:rt.x1-rt.x0)-.1);Jt(Q,[(rt.x0+rt.x1)/2+(Ae.along==="x"?xt:0),(rt.y0+rt.y1)/2,(rt.z0+rt.z1)/2+(Ae.along==="z"?xt:0)])}for(const[de,Q]of qe)Q.visible=!K.windows.get(de).broken;const se=[...g.powered()].sort().join(",")+"|"+[...K.breakers].map(([de,Q])=>de+Q).join(",");if(se!==k){k=se;for(const[de,Q]of A)Q.off=ie||!g.isOn(de);for(const[de,Q]of R)Q.m.material=g.isOn(de)?Q.on:d.lampOff;for(const[de,Q]of Ke)Q.note||(Q.m.material.map=g.isOn(de)?Q.texOn:Q.texOff,Q.m.material.needsUpdate=!0);for(const[de,Q]of ht){const Ae=K.breakers.get(de)?-.5:.5,Ve=Q.userData.side;Jt(Q,Q.userData.base,Ve==="W"||Ve==="E"?[0,0,Math.sin(Ae/2),Math.cos(Ae/2)]:[Math.sin(Ae/2),0,0,Math.cos(Ae/2)])}}const be=[...K.cablesCut].join(",");be!==q&&(q=be,Ue(K.cablesCut,K.cableCutAt||{}));for(const[de,{m:Q,h:Ae}]of tt){const Ve=K.hatchOpen.get(de)||0,rt=Ae.x0+.01,xt=Ve*1.75,yt=(Ae.x0+Ae.x1)/2,ut=(Ae.z0+Ae.z1)/2,Dt=(Ae.x1-Ae.x0)/2,Ot=[0,0,Math.sin(-xt/2),Math.cos(-xt/2)];if(Jt(Q,[rt+Math.cos(xt)*Dt,-.016-Math.sin(xt)*Dt,ut],Ot),g.danger.has(de)){st.visible=Ve>.05;const Wt=new cn().setFromEuler(new gn(-Gn,0,0));Jt(st,[yt,-.34,ut],[Wt.x,Wt.y,Wt.z,Wt.w])}}let ve=0;for(const de of n.panels){const Q=g.panels.view(de.id),Ae=le.get(de.id);Ae.m.visible=Q.plate==="on";for(let Ve=0;Ve<4;Ve++){const rt=Q.plate==="on"&&!Q.bolts[Ve],xt=Vo(de,Ve),[yt,ut]=z[de.face],Dt={"+y":[0,1,0],"-y":[0,-1,0],"+x":[1,0,0],"-x":[-1,0,0],"+z":[0,0,1],"-z":[0,0,-1]}[de.face],Ot=.0075;S.position.copy(ei(xt[0]+Dt[0]*Ot,xt[1]+Dt[1]*Ot,xt[2]+Dt[2]*Ot,Jc)),S.quaternion.copy(Ms(xt[2])).multiply(ff.setFromEuler(new gn(yt+Gn,ut,0,"YXZ"))),S.scale.setScalar(rt?1:1e-4),S.updateMatrix(),Y.setMatrixAt(ve++,S.matrix)}}Y.instanceMatrix.needsUpdate=!0,b.update(U?U[0]:a/2,U?U[2]:o/2,O)}function lt(){const g=new Map,O=(U,L)=>{L&&(g.has(U)||g.set(U,[]),g.get(U).push(L))};for(const U of n.keys){U.portal&&(O(U.id,(Ge.get(U.id)||{}).m),O(U.id,xe.get(U.id)));for(const[de,Q]of Te)Q.userData.prefab===U.id&&O(U.id,Q);const L=Ke.get(U.id);L&&O(U.id,L.m);const K=tt.get(U.id);K&&O(U.id,K.m);const H=qe.get(U.id);H&&O(U.id,H);const se=ht.get(U.id);se&&O(U.id,se);const be=le.get(U.id);be&&O(U.id,be.m);const ve=ke.get(U.id);ve&&O(U.id,ve)}return g}function _(){let g=0,O=0;return m.traverse(U=>{if(U.isMesh&&U.visible){O++;const L=U.geometry,K=L.index?L.index.count/3:L.attributes.position.count/3;g+=U.isInstancedMesh?K*U.count:K}}),{tris:Math.round(g),meshes:O}}function E(){t.remove(m),m.traverse(g=>{g.isMesh&&g.geometry.dispose()});for(const g of f)g.dispose();for(const g of[...b.spots,...b.points])t.remove(g),g.target&&t.remove(g.target),g.shadow&&g.shadow.map&&g.shadow.map.dispose()}function X(){ie=!0;for(const g of b.defs)g.off=!0;m.traverse(g=>{g.isMesh&&g.material&&(g.material.isMeshBasicMaterial||g.material.userData.unlit)&&(g.visible=!1)}),T.traverse(g=>{g.isMesh&&g.material.userData.unlit&&(g.visible=!1)})}function G(g){for(const O of g){Se.add(O);for(const U of lt().get(O)||[])U.visible=!1,U.userData.gateHidden=!0}}return{group:m,staticGroup:T,pool:b,update:et,keyMeshes:lt,stats:_,dispose:E,marks:Ce,partMesh:Te,mats:h,darken:X,hide:G}}const Wn={cutter:'<svg viewBox="0 0 40 40"><path d="M8 26 L22 12 L28 18 L14 32 Z" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/><path d="M26 10 l6 -4 M30 14 l6 -2 M24 6 l2 -4" stroke="#ffb060" stroke-width="2.4" stroke-linecap="round"/></svg>',jump:'<svg viewBox="0 0 40 40"><path d="M20 30 V10 M11 18 L20 9 L29 18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',crouch:'<svg viewBox="0 0 40 40"><path d="M20 9 V29 M11 21 L20 30 L29 21" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 34 H31" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',kick:'<svg viewBox="0 0 40 40"><path d="M12 8 L16 22 L28 26 L30 31 L14 31 L8 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"/><path d="M31 14 l4 -3 M32 19 h5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',pause:'<svg viewBox="0 0 40 40"><path d="M14 11 V29 M26 11 V29" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>',full:'<svg viewBox="0 0 40 40"><path d="M9 16 V9 H16 M24 9 H31 V16 M31 24 V31 H24 M16 31 H9 V24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',hand:'<svg viewBox="0 0 40 40"><path d="M12 22 V12 a2.5 2.5 0 0 1 5 0 V20 V9 a2.5 2.5 0 0 1 5 0 V20 V11 a2.5 2.5 0 0 1 5 0 V22 V16 a2.5 2.5 0 0 1 5 0 V25 c0 6 -4 10 -10 10 h-2 c-4 0 -7 -2 -9 -6 l-4 -7 a2.4 2.4 0 0 1 4 -2.5 Z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/></svg>',use:'<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="11" fill="none" stroke="currentColor" stroke-width="2.6"/><circle cx="20" cy="20" r="3.5" fill="currentColor"/></svg>',throwI:'<svg viewBox="0 0 40 40"><path d="M9 30 Q14 12 31 10" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/><path d="M24 7 L32 10 L28 17" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',put:'<svg viewBox="0 0 40 40"><rect x="12" y="10" width="16" height="12" rx="1.5" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M20 24 V31 M15 27 L20 32 L25 27 M8 35 H32" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>'},Hv=`
#ui.mob, #thud {
  --sa-l: max(env(safe-area-inset-left, 0px), var(--sim-l, 0px), var(--tg-l, 0px)); --sa-r: max(env(safe-area-inset-right, 0px), var(--sim-r, 0px), var(--tg-r, 0px));
  --sa-b: max(env(safe-area-inset-bottom, 0px), var(--sim-b, 0px), var(--tg-b, 0px)); --sa-t: max(env(safe-area-inset-top, 0px), var(--sim-t, 0px), var(--tg-t, 0px));
  --edge: 20px; --L: max(var(--edge), calc(var(--sa-l) + 8px)); --R: max(var(--edge), calc(var(--sa-r) + 8px));
  --B: max(var(--edge), calc(var(--sa-b) + 6px)); --T: max(12px, calc(var(--sa-t) + 8px)); --op: .9; --k: 1; --txt: 1; }
#thud { position: absolute; inset: 0; pointer-events: none; z-index: 3; }
#ui:not(.mob) #thud { display: none; }
#ui.paused #thud, #ui:has(> .panel) #thud { visibility: hidden; }
/* мобильный режим двигает прежние элементы HUD: цель коротко слева под здоровьем, субтитры сверху по центру (внизу
   их кроют стик и дуга кнопок), подпись прицела и полоса инструмента уходят в кнопки */
#ui.mob .goal { left: var(--L); top: calc(var(--T) + 18px); transform: none; max-width: 26vw; padding: 4px 8px 5px; font-size: 12.5px; text-align: left; border-radius: 0 0 4px 0; }
#ui.mob .goal b { font-size: 8px; }
#ui.mob .sub { left: calc(var(--L) + 26vw + 12px); right: auto; bottom: auto; top: var(--T); transform: none; width: min(calc(100vw - var(--L) - var(--R) - 26vw - 76px - var(--fsw, 0px)), 560px); padding: 6px 10px 7px; gap: 8px; }
#ui.mob .sub .who { width: 44px; font-size: 8px; } #ui.mob .sub svg { width: 26px; height: 26px; }
#ui.mob .sub .txt { font-size: calc(17px * var(--txt)); line-height: 1.28; }
#ui.mob .modef, #ui.mob .tool, #ui.mob > .hp { visibility: hidden; }
/* подпись у прицела остаётся (подсказка без клавиш из таблицы касания), кроме действия «E»: его называет кнопка */
#ui.mob[data-mob-act="e"] .act { visibility: hidden; }
#ui.mob .act { font-size: 14px; } #ui.mob .prompt { top: calc(50% + 26px); font-size: 13px; white-space: normal; max-width: 46vw; text-align: center; }
#thud .tbn { position: absolute; display: grid; place-items: center; border-radius: 50%; color: #dfe6ee; opacity: var(--op);
  background: rgba(6,10,15,.42); border: 1.5px solid rgba(223,230,238,.42); pointer-events: auto; touch-action: none;
  -webkit-tap-highlight-color: transparent; box-sizing: border-box; }
#thud .tbn svg { width: 56%; height: 56%; }
#thud .tbn.on { background: rgba(132,203,205,.32); border-color: #84cbcd; }
#thud .tbn::after { content: ''; position: absolute; inset: calc((48px - 100%) / 2 * -1); min-width: 48px; min-height: 48px; border-radius: 50%; }
#thud .cut { width: calc(80px * var(--k)); height: calc(80px * var(--k)); right: var(--R); bottom: var(--B); }
#thud .cut .ring { position: absolute; inset: -7px; width: auto; height: auto; transform: rotate(-90deg); }
#thud .cut .ring circle { fill: none; stroke-width: 4; }
#thud .jmp { width: calc(60px * var(--k)); height: calc(60px * var(--k)); right: calc(var(--R) + 10px * var(--k)); bottom: calc(var(--B) + 96px * var(--k)); }
#thud .cro { width: calc(60px * var(--k)); height: calc(60px * var(--k)); right: calc(var(--R) + 98px * var(--k)); bottom: var(--B); }
#thud .kck { width: calc(60px * var(--k)); height: calc(60px * var(--k)); right: calc(var(--R) + 86px * var(--k)); bottom: calc(var(--B) + 82px * var(--k)); }
#thud .cro .tag { position: absolute; bottom: -2px; right: -4px; font: 700 9px/1 ui-monospace, monospace; background: #84cbcd; color: #061015; border-radius: 3px; padding: 2px 3px; }
#thud .ctx { position: absolute; right: var(--R); bottom: calc(var(--B) + 170px * var(--k)); display: flex; flex-direction: row-reverse; gap: 8px; align-items: flex-end; }
#thud .pill { position: relative; display: flex; align-items: center; gap: 8px; min-height: 56px; min-width: 56px; padding: 0 16px 0 8px; border-radius: 28px; box-sizing: border-box;
  background: rgba(6,10,15,.62); border: 1.5px solid #84cbcd; color: #e9f4f4; font: 600 15px/1.15 system-ui, -apple-system, sans-serif; pointer-events: auto; touch-action: none; max-width: 210px; opacity: var(--op); }
#thud .pill .ic { flex: none; width: 40px; height: 40px; display: grid; place-items: center; position: relative; }
#thud .pill .ic svg { width: 30px; height: 30px; }
#thud .pill .ic .ring { position: absolute; inset: 0; width: 40px; height: 40px; transform: rotate(-90deg); }
#thud .pill .ic .ring circle { fill: none; stroke-width: 3.5; }
#thud .pill.alt { border-color: rgba(223,230,238,.5); }
#thud .pill .pv { display: block; font: 500 11px/1.1 system-ui, sans-serif; color: #9fb0bd; }
#thud .pair { display: flex; gap: 10px; }
#thud .pz { width: 48px; height: 48px; right: var(--R); top: var(--T); }
/* кнопка «Полный экран» левее паузы: только где Fullscreen API есть и сейчас не полный экран (src/main.js решает);
   видна - субтитры сужаются на её место (--fsw на #ui) */
#thud .fsb { width: 48px; height: 48px; right: calc(var(--R) + 60px); top: var(--T); } #thud .fsb.off { display: none; }
#thud .ghost { position: absolute; left: var(--L); bottom: var(--B); width: 128px; height: 128px; border-radius: 50%; border: 1.5px dashed rgba(223,230,238,.28); opacity: var(--op); }
#thud .stk { position: absolute; width: 128px; height: 128px; margin: -64px 0 0 -64px; border-radius: 50%; border: 1.5px solid rgba(223,230,238,.45); background: rgba(6,10,15,.3); }
#thud .stk i { position: absolute; left: 50%; top: 50%; width: 52px; height: 52px; margin: -26px; border-radius: 50%; background: rgba(223,230,238,.5); }
#thud .stk.run { border-color: #ffb060; } #thud .stk.run::after { content: ''; position: absolute; left: 50%; top: -22px; width: 0; height: 0; margin-left: -7px; border: 7px solid transparent; border-bottom: 9px solid #ffb060; }
#thud .finger { position: absolute; width: 44px; height: 44px; margin: -22px 0 0 -22px; border-radius: 50%; background: rgba(255,228,103,.28); border: 1.5px solid rgba(255,228,103,.8); }
#thud .finger.trail { background: none; border-style: dashed; opacity: .6; }
#thud .assist { position: absolute; left: 50%; top: 50%; width: 46px; height: 46px; margin: -23px; border-radius: 50%; border: 1.5px solid rgba(255,176,96,.85); }
#thud .zones { position: absolute; inset: 0; }
#thud .zones div { position: absolute; border: 1px dashed rgba(255,228,103,.38); font: 600 10px ui-monospace, monospace; color: rgba(255,228,103,.75); padding: 4px 6px; letter-spacing: .05em; }
#thud .sa { position: absolute; left: var(--sa-l); right: var(--sa-r); top: var(--sa-t); bottom: var(--sa-b); border: 1px dashed rgba(120,220,140,.55); }
#thud .notch { position: absolute; top: 50%; width: 30px; height: 160px; margin-top: -80px; background: #000; }
#thud .hpb { position: absolute; left: var(--L); top: var(--T); width: min(150px, 27vw); height: 8px; border-radius: 4px; background: rgba(223,230,238,.18); overflow: hidden; }
#thud .hpb i { position: absolute; left: 0; top: 0; bottom: 0; background: #e0a850; }
/* живой HUD */
#thud .szone { position: absolute; left: 0; top: 22%; bottom: 0; width: 44%; pointer-events: auto; touch-action: none; }
#thud .szone .stick { position: absolute; left: var(--L); bottom: var(--B); width: 128px; height: 128px; border-radius: 50%; border: 1.5px dashed rgba(223,230,238,.3); opacity: var(--op); pointer-events: none; }
#thud .stk { display: none; pointer-events: none; } #thud .stk.on { display: block; }
#thud .tbn.cd { opacity: calc(var(--op) * .45); }
#thud .cut.hint { border-color: #ffb060; box-shadow: 0 0 0 3px rgba(255,176,96,.28); }
#thud .cut.over { border-color: #ff5a3a; }
#thud .cut .hr { position: absolute; inset: -7px; width: calc(100% + 14px); height: calc(100% + 14px); transform: rotate(-90deg); pointer-events: none; }
#thud .cut .hr circle { fill: none; stroke-width: 4; }
#thud .pill.hold .ic .ring circle:last-child { transition: stroke-dasharray .08s; }
#thud .tut { position: absolute; left: 50%; top: 27%; transform: translateX(-50%); width: min(440px, 58vw); display: flex; gap: 12px; align-items: center;
  padding: 10px 10px 10px 14px; background: rgba(6,10,15,.8); border: 1px solid #84cbcd; border-radius: 6px; color: #e9f4f4;
  font: 500 calc(15px * var(--txt))/1.35 system-ui, -apple-system, sans-serif; pointer-events: auto; }
#thud .tut p { margin: 0; flex: 1; }
#thud .tut button { flex: none; min-height: 48px; min-width: 48px; padding: 0 12px; border-radius: 6px; border: 1px solid rgba(223,230,238,.45); background: transparent; color: #dfe6ee; font: 600 13px system-ui, sans-serif; }
/* зеркальная раскладка для левшей: стик справа, дуга кнопок слева (пауза остаётся справа сверху) */
#thud.mir .szone { left: auto; right: 0; } #thud.mir .szone .stick { left: auto; right: var(--R); }
#thud.mir .cut { right: auto; left: var(--L); } #thud.mir .jmp { right: auto; left: calc(var(--L) + 10px * var(--k)); }
#thud.mir .cro { right: auto; left: calc(var(--L) + 98px * var(--k)); } #thud.mir .kck { right: auto; left: calc(var(--L) + 86px * var(--k)); }
#thud.mir .ctx { right: auto; left: var(--L); flex-direction: row; }
`;function sn(n,e,t){const i=document.createElement(n);return e&&(i.className=e),t&&(i.innerHTML=t),i}function jc(n,e,t,i){const s=2*Math.PI*n;return`<svg class="ring" viewBox="0 0 ${2*n+i+2} ${2*n+i+2}"><circle cx="${n+i/2+1}" cy="${n+i/2+1}" r="${n}" stroke="rgba(223,230,238,.18)"/><circle cx="${n+i/2+1}" cy="${n+i/2+1}" r="${n}" stroke="${t}" stroke-dasharray="${(s*e).toFixed(1)} ${s.toFixed(1)}" stroke-linecap="round"/></svg>`}function Gv(n,e,{sim:t=null}={}){if(!document.getElementById("thud-css")){const r=sn("style");r.id="thud-css",r.textContent=Hv,document.head.appendChild(r)}const i=sn("div");if(i.id="thud",t){const[r,a,l,o]=t;for(const[c,u]of[["l",r],["r",a],["b",l],["t",o]])n.style.setProperty("--sim-"+c,u+"px")}const s={cut:sn("div","tbn cut",Wn.cutter),jmp:sn("div","tbn jmp",Wn.jump),cro:sn("div","tbn cro",Wn.crouch),kck:sn("div","tbn kck",Wn.kick),pz:sn("div","tbn pz",Wn.pause),ghost:sn("div","ghost"),ctx:sn("div","ctx")};s.cut.dataset.act="cutter",s.jmp.dataset.act="jump",s.cro.dataset.act="crouch",s.kck.dataset.act="kick",s.pz.dataset.act="pause";for(const[r,a]of[["fire",s.cut],["jump",s.jmp],["crouch",s.cro],["kick",s.kck],["pause",s.pz]])a.dataset.key=r,a.classList.add("tb");return i.append(s.ghost,s.ctx,s.kck,s.cro,s.jmp,s.cut,s.pz),n.appendChild(i),{hud:i,E:s}}const bs={key:"drift.mob.v1",def:{sens:1,inv:!1,k:1,op:.9,mir:!1,txt:1},lim:{sens:[.4,2.5],k:[.85,1.3],op:[.35,1],txt:[.9,1.5]}};function Qc(n){const e={...bs.def};try{const t=JSON.parse(n&&n.getItem(bs.key)||"null");if(t&&typeof t=="object")for(const i of Object.keys(e))typeof t[i]==typeof e[i]&&(e[i]=t[i])}catch{}for(const[t,[i,s]]of Object.entries(bs.lim))e[t]=Math.max(i,Math.min(s,+e[t]||bs.def[t]));return e}const mn={radius:56,deadIn:.12,deadOut:.08,runOn:.92,runOff:.8,runHold:.25,look:1.6,accel:.6,accelV:1500,ladderCone:.6,dbl:.3},eu="drift.mob.tut.v1",Xs=["move","look","jump","crouch","use"];function Vv(n,e,{input:t,onPause:i,onFull:s=null,haptic:r=()=>{},store:a=null,sim:l=null,mut:o=[]}={}){const c=new Set(o),{hud:u,E:d}=Gv(n,e,{sim:c.has("nosafe")?null:l}),h=sn("div","szone",'<div class="stick"></div>'),m=sn("div","stk","<i></i>"),f=m.firstChild;d.ghost.remove(),u.prepend(h),u.appendChild(m);const v=sn("div","",jc(43,0,"#ffb060",4)).firstChild;v.setAttribute("class","hr"),d.cut.appendChild(v);const x=v.lastChild,p=2*Math.PI*43,y=sn("span","tag");y.hidden=!0,d.cro.appendChild(y);const T=sn("div","hpb","<i></i>");u.appendChild(T);const b=sn("div","tbn fsb off",Wn.full);b.dataset.act="full",b.dataset.key="full",b.classList.add("tb"),u.appendChild(b);const A=Y=>{Y.stopPropagation(),Y.cancelable&&Y.preventDefault(),!b.classList.contains("off")&&s&&s()};b.addEventListener("pointerdown",Y=>{Y.stopPropagation(),t.setDevice("touch"),Y.cancelable&&Y.preventDefault()}),b.addEventListener("pointerup",A),b.addEventListener("click",A);let R=Qc(a);const M=()=>{c.has("noset")||(u.style.setProperty("--k",c.has("smallbtn")?.5:R.k),u.style.setProperty("--op",R.op),n.style.setProperty("--txt",R.txt),u.classList.toggle("mir",!!R.mir),n.classList.toggle("mir",!!R.mir))};M();const C={act:"",text:"",hold:!1,ring:0,held:!1,ladder:!1,heat:0,over:!1,kickCd:0,slow:1,hp:1},P=new Map,N={downs:0,cancels:0,roles:{}};let F=!1,V=!1,te=-1,B=-1,j=!1,oe=[0,0];const re=()=>performance.now()/1e3,Te=(Y,ae)=>{try{Y.setPointerCapture(ae)}catch{}};function ie(Y){let ae=(Y.x-Y.ox)/mn.radius,fe=(Y.y-Y.oy)/mn.radius,Ue=Math.hypot(ae,fe);Ue>1&&(ae/=Ue,fe/=Ue,Ue=1),f.style.transform=`translate(${(ae*mn.radius).toFixed(1)}px, ${(fe*mn.radius).toFixed(1)}px)`,!j&&Ue>mn.deadIn?j=!0:j&&Ue<mn.deadOut&&(j=!1),c.has("nodead")&&(j=Ue>0);const S=j?Math.min(1,(Ue-mn.deadOut)/(1-mn.deadOut))/Math.max(Ue,1e-6):0;let k=ae*S*Ue,q=-fe*S*Ue;C.ladder&&Math.abs(k)<mn.ladderCone&&!c.has("noladdersnap")&&(k=0),oe=[k,q];const pe=re();Ue>=mn.runOn?B<0&&(B=pe):Ue<mn.runOff&&(B=-1);const Z=B>=0&&pe-B>=mn.runHold&&!c.has("norun");m.classList.toggle("run",Z),t.stick(k,q,Z)}function Se(){j=!1,B=-1,oe=[0,0],t.stick(0,0,!1),m.classList.remove("on","run"),f.style.transform=""}function me(Y,ae,fe){const Ue=re(),S=Math.max(.001,Ue-Y.t),k=ae-Y.x,q=fe-Y.y,pe=Math.hypot(k,q)/S,Z=1+mn.accel*Math.min(1,pe/mn.accelV),Fe=mn.look*R.sens*Z*(c.has("noslow")?1:C.slow);t.look(k*Fe,(R.inv?-q:q)*Fe),Qe+=Math.abs(k)+Math.abs(q),Y.t=Ue}function De(Y,ae,fe){if(Y.pointerType==="mouse"||c.has("onefinger")&&P.size)return;t.setDevice("touch"),N.downs++,N.roles[ae]=(N.roles[ae]||0)+1;const Ue={role:ae,el:fe,x:Y.clientX,y:Y.clientY,t:re(),ox:Y.clientX,oy:Y.clientY};if(P.set(Y.pointerId,Ue),fe&&Te(fe,Y.pointerId),ae==="stick"){const S=innerWidth,k=innerHeight,q=64;Ue.ox=Math.max(q+20,Math.min(S-q-20,Y.clientX)),Ue.oy=Math.max(q+20,Math.min(k-q-20,Y.clientY)),m.style.left=Ue.ox+"px",m.style.top=Ue.oy+"px",m.classList.add("on"),ie(Ue)}if(ae==="cutter"&&(t.hold("cutter",!0),d.cut.classList.add("on")),ae==="jump"&&(t.press("jump"),Ie(d.jmp)),ae==="kick"&&(t.press("kick"),Ie(d.kck),r("kick")),ae==="crouch"){const S=re();V?(V=!1,F=!1):F&&te>=0&&S-te<mn.dbl&&!c.has("nocrawl")?V=!0:F=!F,te=S,t.hold("crouch",F),t.hold("crawl",V),Be()}ae==="pause"&&i&&i(),ae==="use"&&(ke.used=!0,C.hold?t.hold("interactHold",!0):t.press("interact"),fe.classList.add("on")),(ae==="grab"||ae==="put")&&(t.press("grab"),ae==="put"&&r("throw")),ae==="throw"&&(t.press("throw"),t.hold("throwHold",!0),r("throw")),ae==="off"&&t.press("jump"),Y.preventDefault()}function Ge(Y){const ae=P.get(Y.pointerId);if(ae){if(ae.role==="stick"){ae.x=Y.clientX,ae.y=Y.clientY,ie(ae);return}(ae.role==="look"||ae.role==="cutter")&&(me(ae,Y.clientX,Y.clientY),ae.x=Y.clientX,ae.y=Y.clientY)}}function xe(Y){const ae=P.get(Y.pointerId);ae&&(Y.type==="pointercancel"&&N.cancels++,P.delete(Y.pointerId),ae.role==="stick"&&Se(),ae.role==="cutter"&&(t.hold("cutter",!1),d.cut.classList.remove("on")),ae.role==="use"&&(t.hold("interactHold",!1),ae.el&&ae.el.classList.remove("on")),ae.role==="throw"&&t.hold("throwHold",!1))}function Ie(Y){Y.classList.add("on"),setTimeout(()=>Y.classList.remove("on"),140)}function Be(){y.hidden=!(F||V),y.textContent=e(V?"mob.tag.crawl":"mob.tag.crouch"),d.cro.classList.toggle("on",F||V)}h.addEventListener("pointerdown",Y=>De(Y,"stick",h));for(const[Y,ae]of[[d.cut,"cutter"],[d.jmp,"jump"],[d.cro,"crouch"],[d.kck,"kick"],[d.pz,"pause"]])Y.addEventListener("pointerdown",fe=>{fe.stopPropagation(),De(fe,ae,Y)});addEventListener("pointerdown",Y=>{Y.pointerType!=="touch"||P.has(Y.pointerId)||(t.setDevice("touch"),!(Y.target.closest&&Y.target.closest("#thud .szone, #thud .tbn, #thud .pill, #thud .tut, .panel, .mscr, button, a, input"))&&(!n.classList.contains("mob")||n.classList.contains("paused")||De(Y,"look",null)))},!0),addEventListener("pointermove",Ge,!0),addEventListener("pointerup",xe,!0),c.has("nocancel")||addEventListener("pointercancel",xe,!0);const qe=()=>{if(!c.has("noreset"))for(const[Y]of[...P])xe({pointerId:Y,type:"pointercancel"})};for(const Y of["dblclick","contextmenu"])u.addEventListener(Y,ae=>ae.preventDefault());let Ne="";function Ke(Y,ae,fe,Ue,S,k){const q=sn("div","pill tb "+Y,`<span class="ic">${ae}${k?jc(18,0,"#84cbcd",3.5):""}</span><span>${fe}${Ue?`<span class="pv">${Ue}</span>`:""}</span>`);return q.dataset.key=S==="use"?"e":S,q.dataset.act=S,q.addEventListener("pointerdown",pe=>{pe.stopPropagation(),De(pe,S,q)}),q}function ht(){const Y=[C.act,C.text,C.hold,C.held,C.ladder].join("|");if(Y!==Ne){Ne=Y;for(const[ae,fe]of[...P])(fe.role==="use"||fe.role==="grab"||fe.role==="throw"||fe.role==="put"||fe.role==="off")&&xe({pointerId:ae,type:"pointerup"});d.ctx.textContent="",!c.has("noctx")&&(C.act==="e"&&C.text&&d.ctx.appendChild(Ke(C.hold?"hold":"",Wn.use,C.text,C.hold?e("mob.btn.hold"):"","use",C.hold)),C.held?(d.ctx.appendChild(Ke("",Wn.throwI,e("mob.btn.throw"),"","throw")),d.ctx.appendChild(Ke("alt",Wn.put,e("mob.btn.put"),"","put"))):C.act==="grip"&&d.ctx.appendChild(Ke("alt",Wn.hand,e("mob.btn.grab"),C.text,"grab")),C.ladder&&d.ctx.appendChild(Ke("alt",Wn.jump,e("mob.btn.off"),"","off")))}}const ke={i:-1,done:!1,log:[]};try{ke.done=!!(a&&a.getItem(eu))}catch{ke.done=!1}let tt=null,st=0,Qe=0,_t=0;function mt(){if(tt&&tt.remove(),ke.i>=Xs.length){ke.done=!0,tt=null;try{a&&a.setItem(eu,"1")}catch{}return}tt=sn("div","tut",`<p>${e("mob.tut."+Xs[ke.i])}</p>`),tt.dataset.step=Xs[ke.i];const Y=sn("button","",e("mob.tut.skip"));Y.type="button",Y.addEventListener("pointerdown",ae=>{ae.stopPropagation(),ke.log.push("skip"),ke.i=Xs.length,mt()}),tt.appendChild(Y),u.appendChild(tt),st=Qe=_t=0}function Et(Y){if(ke.done||c.has("notut"))return;if(ke.i<0){ke.i=0,mt();return}const ae=Xs[ke.i];let fe=!1;_t+=Y,ae==="move"&&(Math.hypot(oe[0],oe[1])>.3&&(st+=Y),fe=st>1),ae==="look"&&(fe=Qe>120),ae==="jump"&&(fe=!!ke.jumped),ae==="crouch"&&(fe=!!ke.crouched),ae==="use"&&(fe=!!ke.used||_t>25),fe&&(ke.log.push(ae),ke.i++,mt())}h.addEventListener("pointerdown",()=>{},!0),d.jmp.addEventListener("pointerdown",()=>{ke.jumped=!0}),d.cro.addEventListener("pointerdown",()=>{ke.crouched=!0});let z=re();return{hud:u,E:d,zone:h,update(Y){Object.assign(C,Y);const ae=re(),fe=Math.min(.5,ae-z);if(z=ae,ht(),C.act==="e"&&C.hold){const Ue=d.ctx.querySelector(".pill.hold .ring circle:last-child");if(Ue){const S=2*Math.PI*18;Ue.setAttribute("stroke-dasharray",`${(S*Math.max(0,Math.min(1,C.ring))).toFixed(1)} ${S.toFixed(1)}`)}}x.setAttribute("stroke-dasharray",`${(p*Math.max(0,Math.min(1,C.heat))).toFixed(1)} ${p.toFixed(1)}`),x.setAttribute("stroke",C.over?"#ff5a3a":"#ffb060"),d.cut.classList.toggle("over",!!C.over),d.cut.classList.toggle("hint",C.act==="cut"),d.kck.classList.toggle("cd",C.kickCd>0),T.firstChild.style.width=(Math.max(0,Math.min(1,C.hp))*100).toFixed(0)+"%";for(const Ue of P.values())Ue.role==="stick"&&ie(Ue);C.used&&(ke.used=!0),n.classList.contains("mob")&&!n.classList.contains("paused")&&Et(fe),u.dataset.ctx=d.ctx.children.length?[...d.ctx.children].map(Ue=>Ue.dataset.act).join(","):"",u.dataset.touches=String(P.size),u.dataset.crouch=V?"crawl":F?"1":"0"},settings:()=>({...R}),set(Y,ae){Y==="reset"?R={...bs.def}:R={...R,[Y]:ae},R=Qc({getItem:()=>JSON.stringify(R)}),M();try{a&&a.setItem(bs.key,JSON.stringify(R))}catch{}},releaseAll:qe,setFull(Y){const ae=c.has("fsbtnalways")?!1:!Y||c.has("nofsbtn");b.classList.toggle("off",ae),n.style.setProperty("--fsw",ae?"0px":"60px"),u.dataset.full=ae?"":"1"},crouchState:()=>({crouch:F,crawl:V}),clearCrouch(){F=V=!1,t.hold("crouch",!1),t.hold("crawl",!1),Be()},tut:ke,stats:()=>({...N,touches:P.size,roles:[...P.values()].map(Y=>Y.role),stick:oe.slice()})}}const Wv={"mob.mock.zone.move":"стик: где лёг палец","mob.mock.zone.look":"обзор: веди пальцем","mob.mock.verb.use":"Открыть","mob.mock.verb.use.sub":"торговый терминал","mob.mock.verb.wheel":"Крутить","mob.mock.verb.wheel.sub":"держи палец","mob.mock.crouch.tag":"вкл","mob.btn.grab":"Схватить","mob.btn.throw":"Бросить","mob.btn.put":"Положить","mob.btn.use":"Взаимодействовать","mob.btn.off":"Слезть","mob.btn.hold":"держи","mob.tag.crouch":"вкл","mob.tag.crawl":"ползу","mob.start.title":"Нажми, чтобы начать","mob.start.sub":"Касание включит звук и полный экран","mob.resume":"Нажми, чтобы продолжить","mob.rotate.title":"Поверни устройство","mob.rotate.sub":"ДРЕЙФ играется в альбомной ориентации","mob.a2hs":"Полный экран в Safari: «Поделиться», потом «На экран Домой», и открывай игру оттуда","mob.a2hs.close":"Понятно","mob.inapp":"Для полного экрана откройте игру кнопкой ▶️ в боте или в Safari","mob.tut.move":"Стик слева: положи палец и веди, чтобы идти. До упора - бег","mob.tut.look":"Правая половина экрана: веди пальцем, чтобы оглядеться","mob.tut.jump":"Кнопка со стрелкой вверх: прыжок","mob.tut.crouch":"Кнопка со стрелкой вниз: присесть. Двойное касание: ползти","mob.tut.use":"Когда рядом что-то можно сделать, над кнопками появится кнопка с действием","mob.tut.skip":"Пропустить","tab.controls":"Управление","mob.set.title":"Управление","mob.set.sens":"Чувствительность обзора","mob.set.inv":"Инверсия по вертикали","mob.set.size":"Размер кнопок","mob.set.alpha":"Прозрачность кнопок","mob.set.mirror":"Кнопки слева, стик справа","mob.set.text":"Размер текста","mob.set.on":"вкл","mob.set.off":"выкл","mob.set.reset":"Сбросить управление","mob.lost.title":"Картинка остановилась","mob.lost.sub":"Видеокарта сбросила игру. Прогресс сохранён на входе в последнюю комнату","mob.lost.restart":"Перезапустить","mob.lost.wait":"Восстанавливаю картинку…"},Xv={"mob.mock.zone.move":"stick: wherever your thumb lands","mob.mock.zone.look":"look: drag","mob.mock.verb.use":"Open","mob.mock.verb.use.sub":"trade terminal","mob.mock.verb.wheel":"Turn","mob.mock.verb.wheel.sub":"keep holding","mob.mock.crouch.tag":"on","mob.btn.grab":"Grab","mob.btn.throw":"Throw","mob.btn.put":"Put down","mob.btn.use":"Interact","mob.btn.off":"Let go","mob.btn.hold":"hold","mob.tag.crouch":"on","mob.tag.crawl":"crawl","mob.start.title":"Tap to start","mob.start.sub":"This tap turns on sound and full screen","mob.resume":"Tap to continue","mob.rotate.title":"Rotate your device","mob.rotate.sub":"DRIFT is played in landscape","mob.a2hs":"Full screen in Safari: tap Share, then Add to Home Screen, and open the game from there","mob.a2hs.close":"Got it","mob.inapp":"For full screen, open the game with the ▶️ button in the bot or in Safari","mob.tut.move":"Stick on the left: put your thumb down and slide to walk. All the way: run","mob.tut.look":"Right half of the screen: drag to look around","mob.tut.jump":"Button pointing up: jump","mob.tut.crouch":"Button pointing down: crouch. Double tap: crawl","mob.tut.use":"When there is something to do nearby, a button with the action appears above the others","mob.tut.skip":"Skip","tab.controls":"Controls","mob.set.title":"Controls","mob.set.sens":"Look sensitivity","mob.set.inv":"Invert vertical look","mob.set.size":"Button size","mob.set.alpha":"Button opacity","mob.set.mirror":"Buttons left, stick right","mob.set.text":"Text size","mob.set.on":"on","mob.set.off":"off","mob.set.reset":"Reset controls","mob.lost.title":"The picture stopped","mob.lost.sub":"The graphics card reset the game. Progress is saved at the entrance to the last room","mob.lost.restart":"Restart","mob.lost.wait":"Restoring the picture…"},tu={ru:{grip:"Захват",cut:"Резак",weld:"Сварка",toWeld:"Режим: рез",toCut:"Режим: сварка",snap:"отпусти: встанет на место среза",refuse:{мелко:"слишком мелко","много кусков":"слишком много кусков","в руках":"сначала положи"},cutv:{снять:"снять",резать:"резать",прихватить:"прихватить",сорвать:"болты сняты: сорви захватом ({F})",перерезать:"перерезать",разбить:"разбить",взорвётся:"нагреть, взорвётся",нет:"не режется",болты:"болтов осталось {n}, они светятся"},shell:"не режется; снимаются только панели с жёлтой рамкой",weldv:"варить",seamHere:"стык: {R} - сварка",keyR:"R",keyF:"F",touchR:"«Режим»",touchF:"«Схватить»",world:"неподвижное",tooFar:"далеко",lead:"веди резаком: режет по линии",weldno:{"нет касания":"не варится: нет касания","далеко от стыка":"не варится: далеко от стыка","не тот режим":"не тот режим: {R} - рез","не варится":"это не варится",окно:"к окну не варится",дверь:"к двери не варится",люк:"к люку не варится",прижми:"прижми деталь к стене или к другой детали",сварено:"сварено",держится:"уже держится",далеко:"не варится: далеко"},holds:"держится на {k} ({n})",heavy:"тяжело: потащишь волоком",dragging:"тяжело: тащишь волоком",strain:"шов трещит: {k} %",broke:"Шов порвался",fell:"Падение с {h} м: -{d}",died:"Разбилась. Начать сначала.",exit:"Выход. Отсек пройден.",ride:"На своей ноше не стоят: отпущена",turn:"Повернуть",hint:"WASD ход · мышь взгляд · F инструмент · R рез или сварка, с ношей - повернуть · ЛКМ действие · Q бросок · E взаимодействие · снимаются панели с жёлтой рамкой",dead:"нет питания",close:"E или касание: закрыть",dying:"Люк открылся. Начать сначала.",touch:"слева ход, справа взгляд, Резак - срезать болты панелей, бросок на люк - проверить его; снимаются только панели с жёлтой рамкой",v:{open:"Открыть",shut:"Закрыть",breaker:"Рубильник",read:"Читать"}},en:{grip:"Grab",cut:"Cutter",weld:"Welder",toWeld:"Mode: cut",toCut:"Mode: weld",snap:"release: it fits back on the cut",refuse:{мелко:"too small to cut","много кусков":"too many pieces","в руках":"put it down first"},cutv:{снять:"remove",резать:"cut",прихватить:"tack",сорвать:"bolts are off: pull it with the grip ({F})",перерезать:"sever",разбить:"break",взорвётся:"heat it, it will blow",нет:"cannot be cut",болты:"bolts left {n}, they glow"},shell:"cannot be cut; only panels with a yellow frame come off",weldv:"weld",seamHere:"seam: {R} to weld",keyR:"R",keyF:"F",touchR:'"Mode"',touchF:'"Grab"',world:"fixed structure",tooFar:"too far",lead:"move the cutter: it cuts along the line",weldno:{"нет касания":"no weld: not touching","далеко от стыка":"no weld: far from the seam","не тот режим":"wrong mode: {R} to cut","не варится":"cannot be welded",окно:"no weld to a window",дверь:"no weld to a door",люк:"no weld to a hatch",прижми:"press the part against a wall or another part",сварено:"welded",держится:"already held",далеко:"no weld: too far"},holds:"held by {k} ({n})",heavy:"heavy: you will drag it",dragging:"heavy: dragging",strain:"the seam is cracking: {k}%",broke:"The seam tore",fell:"Fell {h} m: -{d}",died:"The fall was fatal. Starting over.",exit:"Exit. The compartment is cleared.",ride:"You cannot stand on what you carry: dropped",turn:"Rotate",hint:"WASD move · mouse look · F tool · R cut or weld, rotate when carrying · LMB act · Q throw · E use · panels with a yellow frame come off",dead:"no power",close:"E or tap to close",dying:"The hatch opened. Starting over.",touch:"left side moves, right side looks, Cutter cuts panel bolts, throw something on a hatch to test it; only panels with a yellow frame come off",v:{open:"Open",shut:"Close",breaker:"Breaker",read:"Read"}}},nu="drift.room.hint.v1",iu="drift.mob.tut.v1";function qv(n,e,{fps:t=!1,input:i,coarse:s=!1,sim:r=null}={}){const a=tu[e]||tu.ru,l=n.createElement("div");l.id="rhud",l.innerHTML=`<div id="rx"></div><div id="rtgt"></div><div id="rbar"><i></i></div><div id="rhp"><i></i></div><div id="rtool"></div><div id="rhelp">${a.hint}</div>
    <div id="rnote" class="panel" hidden><div id="rnotet"></div><div id="rnotec">${a.close}</div></div><div id="rflash"></div><div id="rmsg" hidden></div>
    <div id="rhint" hidden></div><button id="rmode" type="button">${a.toWeld}</button><button id="rturn" type="button">${a.turn}</button><pre id="rfps" ${t?"":"hidden"}></pre>`,n.body.appendChild(l);const o=b=>l.querySelector("#"+b),c=n.createElement("style");c.textContent=`#rhud{position:fixed;inset:0;pointer-events:none;font:13px/1.35 system-ui,sans-serif;color:#cfe2ff;z-index:5}
  #rx{position:absolute;left:50%;top:50%;width:6px;height:6px;margin:-3px;border-radius:50%;background:#e6f0ff;box-shadow:0 0 0 1px #000a}
  #rtgt{position:absolute;left:50%;top:calc(50% + 16px);transform:translateX(-50%);padding:2px 8px;background:#0008;border-radius:3px;width:max-content;max-width:min(560px,72vw);text-align:center}
  #rtgt.no{color:#ffc98a}
  #rtgt:empty{display:none}
  #rbar{position:absolute;left:50%;top:calc(50% + 42px);width:120px;height:4px;margin-left:-60px;background:#0008;display:none}#rbar i{display:block;height:100%;width:0;background:#ffb060}
  #rhp{position:absolute;left:14px;bottom:14px;width:150px;height:8px;background:#0009;border-radius:4px;overflow:hidden;display:none}#rhp i{display:block;height:100%;background:#e0a850}#rhud.mob #rhp{bottom:auto;top:max(12px,env(safe-area-inset-top,0px));left:max(12px,env(safe-area-inset-left,0px))}
  #rtool{position:absolute;right:14px;bottom:14px;padding:5px 10px;background:#0009;border:1px solid #84cbcd;border-radius:4px}
  #rhelp{position:absolute;left:50%;bottom:14px;transform:translateX(-50%);padding:5px 10px;background:#0007;border-radius:4px;white-space:nowrap;font-size:12px}
  #rnote{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:min(440px,86vw);padding:20px 22px;background:#e8e0c8;color:#2a2a33;font:16px/1.5 Georgia,serif;border-radius:3px;box-shadow:0 6px 40px #000c;pointer-events:auto}
  #rnotec{margin-top:12px;font:12px system-ui;color:#665}
  #rflash{position:absolute;inset:0;background:#ffd8a0;opacity:0}
  #rmsg{position:absolute;left:50%;top:30%;transform:translateX(-50%);padding:8px 14px;background:#200a;border:1px solid #f64;border-radius:4px}
  #rhint{position:absolute;left:50%;top:max(12px,env(safe-area-inset-top,0px));transform:translateX(-50%);width:max-content;max-width:calc(100vw - 172px);padding:8px 14px;background:rgba(6,10,15,.86);border:1px solid #84cbcd;border-radius:6px;color:#e9f4f4;font:500 13px/1.35 system-ui,sans-serif;text-align:center}
  #rfps{position:absolute;left:8px;top:8px;margin:0;padding:5px 8px;font:600 11px/1.35 ui-monospace,monospace;color:#84cbcd;background:rgba(7,4,15,.75);border:1px solid #d951ef;border-radius:4px;white-space:pre}
  #rfps[hidden],#rnote[hidden],#rmsg[hidden],#rhint[hidden]{display:none}
  #rturn{display:none}#rhud.mob.carry #rturn{display:block;position:absolute;left:50%;bottom:calc(max(12px,env(safe-area-inset-bottom,0px)) + 58px);transform:translateX(-50%);min-height:48px;padding:0 16px;border-radius:24px;border:1.5px solid rgba(223,230,238,.5);background:rgba(6,10,15,.62);color:#e9f4f4;font:600 14px system-ui,sans-serif;pointer-events:auto;touch-action:none}
  #rmode{display:none}#rhud.mob #rmode{display:block;position:absolute;left:50%;bottom:max(12px,env(safe-area-inset-bottom,0px));transform:translateX(-50%);min-height:48px;padding:0 16px;border-radius:24px;border:1.5px solid rgba(223,230,238,.5);background:rgba(6,10,15,.62);color:#e9f4f4;font:600 14px system-ui,sans-serif;pointer-events:auto;touch-action:none}
  #rhud.mob #rmode.weld{border-color:#ffb060}
  #rhud.mob #rhelp,#rhud.mob #rtool{display:none}
  #ui{position:fixed;inset:0;pointer-events:none;z-index:6;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}
  #ui #thud .kck,#ui #thud .pz,#ui #thud .hpb{display:none}#ui #thud .fsb{right:var(--R)}
  html,body,canvas{touch-action:none;overscroll-behavior:none}`,n.head.appendChild(c);const u=n.createElement("div");u.id="ui",n.body.appendChild(u);const d=e==="en"?Xv:Wv,h=(()=>{try{return localStorage}catch{return null}})(),m={getItem:b=>b===iu?"1":h?h.getItem(b):null,setItem:(b,A)=>{b!==iu&&h&&h.setItem(b,A)}},f=n.documentElement,v=()=>!!(f.requestFullscreen&&n.fullscreenEnabled&&!n.fullscreenElement),x=Vv(u,b=>d[b]??b,{input:i,onPause:()=>{},onFull:()=>{const b=f.requestFullscreen&&f.requestFullscreen();b&&b.catch&&b.catch(()=>{})},store:m,sim:r});x.setFull(v()),n.addEventListener("fullscreenchange",()=>x.setFull(v()));const p=b=>{const A=b==="touch";u.classList.toggle("mob",A),l.classList.toggle("mob",A),n.documentElement.dataset.roomInput=b};if(p(i.device),i.onDevice(p),s){let b=!1;try{b=!!(h&&h.getItem(nu))}catch{}if(!b){const A=o("rhint");A.textContent=a.touch,A.hidden=!1,setTimeout(()=>{A.hidden=!0},14e3);try{h&&h.setItem(nu,"1")}catch{}}}let y=!1;const T={root:l,ui:u,touch:x,tool(b,A){o("rtool").textContent=b==="cut"?A==="weld"?a.weld:a.cut:a.grip,o("rmode").textContent=A==="weld"?a.toCut:a.toWeld,o("rmode").classList.toggle("weld",A==="weld")},onMode(b){o("rmode").addEventListener("click",b)},target(b,A,R,M){o("rtgt").classList.toggle("no",!!M);const C=b?b+(R?" · "+a.dead:A&&i.device!=="touch"?" · E: "+A.toLowerCase():""):"";o("rtgt").textContent!==C&&(o("rtgt").textContent=C)},bar(b){const A=o("rbar");A.style.display=b>0&&b<1?"block":"none",A.firstChild.style.width=Math.round(b*100)+"%"},note(b){y=!!b,o("rnote").hidden=!b,o("rnotet").textContent=b||""},get noteOpen(){return y},hp(b){o("rhp").style.display=b<99.5?"block":"none",o("rhp").firstChild.style.width=Math.max(0,b)+"%"},carry(b){T.carrying!==b&&(T.carrying=b,l.classList.toggle("carry",b))},onTurn(b){o("rturn").addEventListener("click",b)},flash(b){o("rflash").style.opacity=String(Math.min(.85,b))},msg(b){const A=o("rmsg");A.hidden=!b,A.textContent=b||""},fps(b){o("rfps").textContent=b},L:a};return o("rnote").addEventListener("click",()=>T.note("")),T}const su={ru:{wall:"стена",floor:"пол",ceil:"потолок",stub:"стена тамбура",door:"дверь",glass:"окно",breaker:"щиток",screen:"табло",note:"записка",cabinet:"каркас шкафа",shelf:"стеллаж",pipe:"труба",crate:"ящик",crateL:"большой ящик",tank:"баллон",top:"столешница",leg:"ножка стола",rod:"обрезок ножки",leaf:"дверца шкафа",side:"стенка шкафа",pallet:"поддон",plate:"снятая панель",plank:"полка",sheet:"лист обшивки",scrap:"обломок",piece:"{s}, кусок",frame:"{s}, каркас",hatch:"люк {n}",bolt:"болт панели",panel:"панель",vent:"вентрешётка",ventBolt:"винт решётки",cable:"кабель"},en:{wall:"wall",floor:"floor",ceil:"ceiling",stub:"passage wall",door:"door",glass:"window",breaker:"breaker",screen:"screen",note:"note",cabinet:"cabinet frame",shelf:"rack",pipe:"pipe",crate:"crate",crateL:"large crate",tank:"gas tank",top:"table top",leg:"table leg",rod:"rod offcut",leaf:"cabinet door",side:"cabinet wall",pallet:"pallet",plate:"loose panel",plank:"shelf",sheet:"plating sheet",scrap:"scrap",piece:"{s}, piece",frame:"{s}, frame",hatch:"hatch {n}",bolt:"panel bolt",panel:"panel",vent:"vent grille",ventBolt:"grille screw",cable:"cable"}},Xr={ru:{hinge:"петля",rivet:"заклёпка",weld:"крепление",dowel:"крепление",seam:"шов",many:{hinge:"петлях",rivet:"заклёпках",weld:"креплениях",dowel:"креплениях",seam:"шве"}},en:{hinge:"hinge",rivet:"rivet",weld:"fastening",dowel:"fastening",seam:"seam",many:{hinge:"hinges",rivet:"rivets",weld:"fastenings",dowel:"fastenings",seam:"the seam"}}};function $v(n,e,t,i,s){if(!i)return"";const r=su[t]||su.ru,a=l=>{const o=((e.texts||{})[t]||{})["name."+l];return typeof o=="string"?o:""};if(i.kind==="hatch")return a(i.id)||r.hatch.replace("{n}",String(i.number));if(i.kind==="bolt"||i.kind==="plate"){const l=n.panels.find(c=>c.id===i.id),o=l&&l.panel==="vent";return i.kind==="bolt"?o?r.ventBolt:r.bolt:a(i.id)||(o?r.vent:r.panel)}if(i.kind==="cable")return a(i.id)||r.cable;if(i.kind==="note")return a(i.id)||r.note;if(i.kind==="part"){const l=String(i.id).split("#")[0],o=a(l)||r[s&&s.get(i.id)]||"";return o&&l!==i.id?r.piece.replace("{s}",o):o}return i.kind==="static"&&i.box&&i.box.kind==="cabinet"?a(i.id)?r.frame.replace("{s}",a(i.id)):r.cabinet:i.kind==="static"&&(a(i.id)||r[i.box?i.box.kind:""])||""}const ru={g:14,gBody:9.8,jumpH:1.15,stand:1.3,crouch:.72,eye:1.2,eyeCrouch:.66,step:.28,ledge:.12,crouchSpeed:.5,crawl:Ya.body,eyeCrawl:Ya.eye,crawlSpeed:Ya.speed,squeeze:3},au=Object.assign({"../rooms/ring.sec07.corridor.json":()=>Yr(()=>import("./ring.sec07.corridor-L7GKCMCB.js"),[],import.meta.url),"../rooms/ring.sec07.galley.json":()=>Yr(()=>import("./ring.sec07.galley-DmIsS2DK.js"),[],import.meta.url),"../rooms/ring.sec07.shaft.json":()=>Yr(()=>import("./ring.sec07.shaft-BROt9FpV.js"),[],import.meta.url)}),un=new URLSearchParams(location.search),Zi=document.documentElement,Yv=un.get("room")||"ring.sec07.galley",Ci=un.get("lang")==="en"?"en":"ru",ou=un.get("fps")==="1",eo=un.get("bench")==="1",qr=un.get("phys")==="box"?"box":"rapier",qo=un.get("touch")==="1"||un.get("touch")!=="0"&&matchMedia("(pointer: coarse)").matches,qs=["high","medium","lite"].includes(un.get("q"))?un.get("q"):qo?"lite":"high",Kv=Math.max(0,Math.min(200,parseInt(un.get("pieces")||"0",10)||0)),Jv=Math.max(0,Math.min(5e3,parseInt(un.get("seam")||"0",10)||0)),$r=(un.get("fall")||"").split(",").map(Number),Zv=$r.length===2&&$r.every(Number.isFinite)?{safe:$r[0],perM:$r[1]}:null,$s=new Set((un.get("mut")||"").split(",").filter(Boolean));Zi.dataset.room="loading";const jv=n=>{Zi.dataset.room="error",Zi.dataset.roomError=String(n&&n.message||n);const e=document.getElementById("err");e&&(e.hidden=!1,e.textContent="Комната не загрузилась: "+Zi.dataset.roomError),console.error(n)};async function Qv(n){const e=`../rooms/${n}.json`;if(!au[e])throw new Error("нет комнаты "+n);const t=await au[e]();return JSON.parse(JSON.stringify(t.default||t))}async function e_(){const n=document.createElement("canvas");document.body.appendChild(n);const e=new Xg({canvas:n,antialias:!1,powerPreference:"high-performance",preserveDrawingBuffer:eo}),t={lost:0,restored:0};n.addEventListener("webglcontextlost",S=>{t.lost++,Zi.dataset.roomGlLost=String(t.lost),S.preventDefault()}),n.addEventListener("webglcontextrestored",()=>{t.restored++}),e.shadowMap.enabled=!0,e.shadowMap.type=Zs,e.toneMapping=ri,e.autoClear=!1,e.info.autoReset=!1;const i={...Ix[qs]},s=qs==="lite"?Math.min(devicePixelRatio,1.5)*.8:Math.min(devicePixelRatio,2);e.setPixelRatio(s),e.setSize(innerWidth,innerHeight);const r=new Lu;r.fog=new sl(724242,.012);const a=new cr(e),l=a.fromScene(new qg,.04).texture;a.dispose(),r.environment=$s.has("dark")?null:l,r.environmentIntensity=.06;const o=new $d(16763024,2365970,$s.has("dark")?0:.2);r.add(o);const c=new Dn(70,innerWidth/innerHeight,.05,200);r.add(c);const u=Dx(e,r,c,null);u.configure({msaa:i.msaa,bloom:i.bloom,hdr:i.hdr,prepass:!1,ldr:!1}),u.uniforms.uTint.value.set(1.05,1,.93);const d=Fx({coarse:qo});Ox(window,document,d);const h=(un.get("sa")||"").split(",").map(Number),m=qv(document,Ci,{fps:ou,input:d,coarse:qo,sim:h.length===4&&h.every(Number.isFinite)?h:null});eo&&un.get("hud")!=="1"&&(m.root.style.display="none",m.ui.style.display="none");let f=null;async function v(S,k=null){const q=performance.now(),pe=av(S);if(pe.length)throw new Error("схема: "+pe.slice(0,3).map(Re=>Re.path+" "+Re.msg).join("; "));const Z=jx(S),[Fe,we,Le]=Z.size,I={x0:-2.4,x1:Fe+2.4,z0:-2.4,z1:Le+2.4,h:we},w=await _v(qr,{bounds:I,bind:!1});af({PH:ru,playerR:Ln.r,spawn:{x:Z.spawn.x,z:Z.spawn.z,yaw:Z.spawn.yaw,pitch:0},speed:3.2,boundsAt:()=>I,placeAt:()=>!0,roomHeight:()=>we});const ne=Nv(Z,S,w,{mut:$s,pieces:Kv,seam:Jv,fall:Zv}),Me=Bv(Z,S,{scene:r,lang:Ci,tier:$s.has("dark")?{...i,spots:0,points:0}:i});$s.has("dark")&&Me.darken(),Me.hide((un.get("hide")||"").split(",").filter(Boolean));const $=Mx(Z.spawn.x,Z.spawn.z);$.yaw=Z.spawn.yaw,$.pitch=-.08,$.respawn=()=>{$.x=Z.spawn.x,$.z=Z.spawn.z,$.y=0,$.vy=0,$.yaw=Z.spawn.yaw},k&&ne.restore(k);const Ce=performance.now()-q;return{room:S,C:Z,phys:w,sys:ne,view:Me,pl:$,buildMs:Ce}}function x(){f&&(f.view.dispose(),f.phys.dispose(),f=null)}let p="grip",y=null;const T=Gx();m.tool(p);let b="cut";const A=S=>{b=S,m.tool(p,b)},R=()=>{if(f&&p==="grip"&&f.sys.S.held){f.sys.turnHeld(f.pl);return}p!=="cut"&&(p="cut"),A(b==="cut"?"weld":"cut")};m.onMode(()=>A(b==="cut"?"weld":"cut")),m.onTurn(()=>{f&&f.sys.turnHeld(f.pl)});const M={press:new Set,fire:!1,rmb:!1},C=(S,k)=>{f&&(f.pl.yaw-=S*.0022,f.pl.pitch=Math.max(-1.45,Math.min(1.45,f.pl.pitch-k*.0022)))};addEventListener("keydown",S=>{S.repeat||(d.setDevice("kbm"),d.keyDown(S.code),S.code==="KeyR"&&R(),["Space","KeyQ","KeyF","KeyE"].includes(S.code)&&S.preventDefault())}),addEventListener("keyup",S=>d.keyUp(S.code)),addEventListener("pointermove",S=>{S.pointerType==="mouse"&&(S.movementX||S.movementY)&&d.setDevice("kbm")},{passive:!0}),n.addEventListener("mousedown",S=>{if(d.device!=="touch"){if(m.noteOpen){m.note("");return}if(document.pointerLockElement!==n){try{const k=n.requestPointerLock();k&&k.catch&&k.catch(()=>{})}catch{}return}S.button===0&&(M.fire=!0,M.press.add("fire")),S.button===2&&(M.press.add("throw"),M.rmb=!0)}}),addEventListener("mouseup",S=>{S.button===0&&(M.fire=!1),S.button===2&&(M.rmb=!1)}),addEventListener("blur",()=>{M.fire=!1,M.rmb=!1}),addEventListener("contextmenu",S=>S.preventDefault()),addEventListener("mousemove",S=>{document.pointerLockElement===n&&C(S.movementX,S.movementY)}),addEventListener("resize",()=>{e.setSize(innerWidth,innerHeight),c.aspect=innerWidth/innerHeight,c.updateProjectionMatrix(),u.resize()});const P=S=>[S.x,S.y+S.eye,S.z],N=S=>{const k=Math.cos(S.pitch);return[-Math.sin(S.yaw)*k,Math.sin(S.pitch),-Math.cos(S.yaw)*k]},F=S=>$v(f.C,f.room,Ci,S,f.sys.S.partKind);function V(S,k,q){const{sys:pe}=f,Z=pe.S,Fe=m.L,we=F(S);if(Z.drag)return{text:Fe.dragging};if(Z.held&&pe.cutter.snapPose(Z.held))return{text:Fe.snap};if(p==="grip"){const Me=!Z.held&&!Z.noteHeld?pe.grabInfo(S):null;return Me?Me.why==="тяжело"?{text:`${we} · ${Fe.heavy}`}:{text:`${we} · ${Fe.holds.replace("{k}",Xr[Ci].many[Me.kind]||Xr[Ci].many.weld).replace("{n}",Me.n)}`,no:!0}:{text:we}}if(Z.strain&&Z.t-Z.strain.t<.4)return{text:Fe.strain.replace("{k}",Math.round(Z.strain.k*100)),no:!0};if(!S&&!(b==="weld"&&Z.held)){const Me=pe.aim(k,q,6);return Me&&Me.kind==="part"?{text:`${F(Me)} · ${b==="weld"?Fe.weldno.далеко:Fe.tooFar}`,no:!0}:{text:""}}if(b==="weld"&&!(S&&S.kind==="plate"&&S.seated)){const Me=pe.cutter.weldInfo(S);return Me.why?{text:`${Z.held?F({kind:"part",id:Z.held}):we} · ${Fe.weldno[Me.why]}`,no:!Me.done}:{text:`${F({kind:"part",id:Me.id})} + ${Me.with==="world"?Me.box&&F({kind:"static",id:Me.box.prefab||Me.box.id,box:Me.box})||Fe.world:F({kind:"part",id:Me.with})} - ${Fe.weldv}`}}if(Z.refused&&Z.t-Z.refused.t<1.2&&M.fire)return{text:`${we} · ${Fe.refuse[Z.refused.why]}`,no:!0};const Le=Z.stroke;if(Le&&Le.id===S.id&&M.fire&&Le.t>.5&&Le.cover<.5&&Math.hypot(...Le.p1.map((Me,$)=>Me-Le.p0[$]))<.06)return{text:`${we} · ${Fe.lead}`};const I=pe.cutInfo(S);if(!I)return{text:we};if(I.j)return{text:`${Xr[Ci][pe.cutter.jointKind(I.j)]||Xr[Ci].weld} - ${Fe.cutv[I.verb]}`};if(I.verb==="нет")return{text:`${we} · ${I.shell?Fe.shell:Fe.cutv.нет}`,no:!0};if(I.verb==="болты")return{text:`${we} · ${Fe.cutv.болты.replace("{n}",I.n)}`};const w=I.verb==="резать"&&S.kind==="part"?pe.cutter.weldInfo(S):null,ne=w&&!w.why&&w.with!=="world"&&Math.hypot(...w.at.map((Me,$)=>Me-S.at[$]))<.05;return{text:`${we} - ${Fe.cutv[I.verb]}${ne?" · "+Fe.seamHere:""}`}}function te(S){if(p!=="cut"||b!=="cut"||!S)return[];const{sys:k}=f,q=[];if(S.kind==="bolt"||S.kind==="plate"){const pe=k.panels.view(S.id);if(pe.plate==="on"&&!pe.seated)for(let Z=0;Z<4;Z++)pe.bolts[Z]||q.push({at:k.boltAt(S.id,Z),hot:S.kind==="bolt"?S.i===Z:Z===pe.bolts.findIndex(Fe=>!Fe)})}else if(S.kind==="part"){const pe=k.cutter.nearJoint(S.id,S.at);for(const Z of k.cutter.jointsOf(S.id))if(k.cutter.jointKind(Z)!=="seam"||Z===pe)for(const Fe of k.cutter.spots(Z))q.push({at:Fe,hot:Z===pe})}return q}let B="grip",j={text:""},oe="",re=-1;const Te=S=>{const k=f.sys.usable(S);return k?m.L.v[k]:""},ie={frame:[],phys:[],gap:[]},Se=(S,k)=>{S.push(k),S.length>240&&S.shift()},me=S=>{if(!S.length)return 0;const k=S.slice().sort((q,pe)=>q-pe);return k[Math.floor(.95*(k.length-1))]},De=8,Ge={cut:null,blast:null};let xe=0;function Ie(S,k){const q=f.sys.S;for(;xe<q.evN;xe++){const pe=q.events[q.events.length-(q.evN-xe)];if(!pe)continue;const Z=pe.kind==="explode"?"blast":pe.kind==="joint_cut"||pe.kind==="split"?"cut":"";Z&&(Ge[Z]={until:q.t+De,f:Ge[Z]&&q.t<Ge[Z].until?Ge[Z].f:[],p:Ge[Z]&&q.t<Ge[Z].until?Ge[Z].p:[]})}for(const pe of Object.values(Ge))pe&&q.t<pe.until&&pe.f.length<2e3&&(pe.f.push(S),pe.p.push(k))}let Be=0,qe=-9;const Ne=S=>{m.msg(S),qe=f.sys.S.t};function Ke(){const S=f.sys.S,k=m.L;for(Be>S.evN&&(Be=0);Be<S.evN;Be++){const q=S.events[S.events.length-(S.evN-Be)];q&&(q.kind==="seam_broke"?Ne(k.broke):q.kind==="fall"?Ne(k.fell.replace("{h}",q.h.toFixed(1)).replace("{d}",q.dmg)):q.kind==="death"?Ne(q.cause==="fall"?k.died:k.dying):q.kind==="exit"?Ne(k.exit):q.kind==="ride_off"&&Ne(k.ride))}qe>-5&&(S.t-qe>2.5||S.t<qe)&&(m.msg(""),qe=-9),m.hp(S.hp),m.carry(!!S.held&&!S.drag)}function ht(S){if(!f)return;const{sys:k,pl:q}=f;d.frame(M,C),T.sense(M),m.noteOpen&&((M.press.has("e")||M.fireNew)&&m.note(""),M.press.clear(),M.fire=!1);for(const Pe of T.modes(M,p))p=Pe,m.tool(p,b);q.input.forward=M.fwd||0,q.input.strafe=M.strafe||0,q.input.jump=M.press.has("jump"),q.input.crouch=!!M.crouch,q.input.crawl=!!M.crawl;const pe=k.burden(),Z=k.S.stun>0;q.speed=(M.run?5.2:3.2)*pe.speed*(Z?.25:1),q.jumpH=ru.jumpH*pe.jump,Z&&(q.input.jump=!1),ke(S);const Fe=P(q),we=N(q);if(y=p!=="cut"?k.aimGrip(Fe,we,2.3):b==="weld"?k.aimWeld(Fe,we,2.6):k.aim(Fe,we,2.6),M.press.has("e")&&k.use(y)==="запись"){const W=f.C.prefabOf[y.id];m.note((f.room.texts[Ci]||f.room.texts.ru)[W.text])}const Le=T.grip(M,{able:p==="grip"&&!m.noteOpen,holding:!!(k.S.held||k.S.noteHeld),t:k.S.t});M.fireNew&&(B=p);const I=()=>k.S.noteHeld?k.notes.stick(y,we):k.drop();Le==="take"?k.grab(y)&&T.took(k.S.t):Le==="drop"&&B==="grip"&&I();const w=T.throw(M,{holding:!!(k.S.held||k.S.noteHeld),t:k.S.t});w&&(k.S.noteHeld?I():k.throwHeld(we,w));const ne=T.cutting(M,p)&&(y||b==="weld"&&k.S.held)?k.cut(y,S,{o:Fe,d:we},b):"",Me=k.step(S,q);Se(ie.phys,Me),Ke(),M.press.clear();const $=!!(y&&y.kind==="static"&&k.S.doors.has(y.id)&&!k.isOn(y.id)),Ce=F(y),Re=Te(y),ce=k.canGrab(y),ge=[y&&y.kind+y.id+(y.i??""),p,b,k.S.held,k.S.drag].join("|");return(ge!==oe||k.S.t-re>.1||k.S.t<re)&&(j=V(y,Fe,we),oe=ge,re=k.S.t),m.target(j.text.replace(/\{([RF])\}/g,(Pe,W)=>m.L[(d.device==="touch"?"touch":"key")+W]),Re,$,j.no),f.view.marks(te(y)),m.touch.update({act:Re?"e":ce?"grip":y&&k.canCut(y)?"cut":"",text:Re||(ce?Ce:""),hold:!1,ring:0,held:!!(k.S.held||k.S.noteHeld),ladder:!1,heat:0,over:!1,kickCd:0,slow:y&&y.kind==="bolt"?.55:1,hp:1}),m.bar(ne?k.progress(y):0),m.flash(k.S.flash),Me}function ke(S){const{sys:k,pl:q}=f,pe=k.playerCol(q);if(bx(q,pe.col,S,pe.extra,pe.soft),q.kx||q.kz){const Z=q.x,Fe=q.z;q.x+=q.kx*S,q.z+=q.kz*S,fa(q,Z,Fe,[pe.col.boxes,pe.extra],[],Ln.r,we=>we.y1>q.y+Ln.step&&we.y0<q.y+q.h),q.kx*=Math.pow(.05,S),q.kz*=Math.pow(.05,S)}}function tt(S){if(!f)return;const{pl:k,view:q}=f,pe=P(k);return ei(pe[0],pe[1],pe[2],c.position),Ms(pe[2],c.quaternion).multiply(new cn().setFromEuler(new gn(k.pitch,k.yaw,0,"YXZ"))),q.update(f.sys,S,pe,k),e.info.reset(),u.render(),e.info.render}let st=0,Qe=0,_t=0,mt=0;function Et(S){if(Qe++,S-st<500)return;_t=Qe*1e3/(S-st),Qe=0,st=S;const k=f.phys.stats(),q=f.view.stats(),pe=performance.memory?Math.round(performance.memory.usedJSHeapSize/1048576)+" МБ":"н/д",Z=(we,Le)=>{const I=Ge[we];return I&&I.f.length?`
после ${Le} (${De} с): кадр p95 ${me(I.f).toFixed(1)}, худший ${Math.max(...I.f).toFixed(1)} мс; физика p95 ${me(I.p).toFixed(2)}, худший ${Math.max(...I.p).toFixed(2)} мс`:""},Fe=`${f.room.id} · ${qr} · ${qs}
кадр ${_t.toFixed(0)} к/с, p95 ${me(ie.frame).toFixed(1)} мс · физика p95 ${me(ie.phys).toFixed(2)} мс
тела: не спят ${k.awake}, спят ${k.asleep} из ${k.total} · куски ${f.sys.S.pieces.size} из ${f.sys.cutter.cap}, слито ${f.sys.S.merged.length}
вызовы ${mt}, треуг. ${q.tris}, память ${pe}, геом. ${e.info.memory.geometries}, текст. ${e.info.memory.textures}
кадр в кадр p95 ${me(ie.gap).toFixed(1)} мс, экран ${innerWidth}x${innerHeight} x${devicePixelRatio.toFixed(2)}${Z("cut","реза")}${Z("blast","взрыва")}`;m.fps(Fe),Zi.dataset.roomFps=_t.toFixed(1)}const z=un.get("src");f=await v(z&&/^[a-z0-9_./-]+\.json$/i.test(z)&&!z.includes("..")?await(await fetch(z,{cache:"no-store"})).json():await Qv(Yv)),m.note("");let le=performance.now(),Y=le,ae=0;if(!eo){const S=k=>{const q=Math.min(.05,(k-le)/1e3);le=k;const pe=performance.now();Se(ie.gap,k-Y),Y=k;const Z=ht(q);ae+=q;const Fe=tt(ae);mt=Fe?Fe.calls:0;const we=performance.now()-pe;Se(ie.frame,we),Ie(we,Z||0),ou&&Et(k),requestAnimationFrame(S)};requestAnimationFrame(S)}const fe=1/60,Ue={get id(){return f&&f.room.id},state(){const S=f.sys.S;return{id:f.room.id,phys:qr,tier:qs,t:+S.t.toFixed(2),player:{x:+f.pl.x.toFixed(3),y:+f.pl.y.toFixed(3),ground:f.pl.ground,z:+f.pl.z.toFixed(3),yaw:+f.pl.yaw.toFixed(3),pitch:+f.pl.pitch.toFixed(3),crouch:!!f.pl.crouch},tool:p,held:S.held,target:y&&{kind:y.kind,id:y.id},lit:f.C.lights.map(k=>[k.id,f.sys.isOn(k.id)]),joints:[...S.joints.keys()],cables:[...S.cablesCut],windows:[...S.windows].map(([k,q])=>[k,q.broken]),p:+S.p.toFixed(3),doors:[...S.doors].map(([k,q])=>[k,+q.open.toFixed(2)]),hp:+S.hp.toFixed(1),stun:+S.stun.toFixed(2),exit:S.exit,anchored:[...S.anchored],strain:S.strain,pieces:[...S.pieces.keys()],merged:S.merged.map(k=>k.id),noteHeld:S.noteHeld,notes:[...S.notes.values()].map(k=>[k.id,k.on]),panels:f.C.panels.map(k=>[k.id,f.sys.panels.view(k.id).plate]),burned:S.burned,ejected:S.ejected,deaths:S.deaths,events:S.events.slice(-40),bodies:f.phys.stats()}},put(S,k){const q=f.pl;if(q.x=S[0],q.z=S[1],q.y=S[2]||0,q.vy=0,q.ground=!S[2],f.sys.S.peak=null,k){const pe=P(q),Z=[k[0]-pe[0],k[1]-pe[1],k[2]-pe[2]];q.yaw=Math.atan2(-Z[0],-Z[2]),q.pitch=Math.atan2(Z[1],Math.hypot(Z[0],Z[2]))}return Ue.aim()},frameIn(S){const k=f.pl;S.yaw!==void 0&&(k.yaw=S.yaw),S.pitch!==void 0&&(k.pitch=S.pitch),S.tool&&S.tool!==p&&(p=S.tool,m.tool(p,b)),S.mode&&S.mode!==b&&A(S.mode),S.turn&&f.sys.turnHeld(k);const q={fwd:"KeyW",back:"KeyS",left:"KeyA",right:"KeyD"};for(const Z in q)S[Z]?d.keyDown(q[Z]):d.keyUp(q[Z]);S.jump&&d.press("jump");const pe=M.fire;M.fire=!!S.fire,S.fire&&!pe&&M.press.add("fire"),ht(fe),ae+=fe},frameEnd(){for(const S of["KeyW","KeyS","KeyA","KeyD"])d.keyUp(S);M.fire=!1},aim(){return y=f.sys.aim(P(f.pl),N(f.pl),p==="cut"?2.6:2.3),y&&{kind:y.kind,id:y.id,t:+y.t.toFixed(2),i:y.i}},tool(S,k){return p=S,k&&(b=k),m.tool(S,b),p},act(S,k=0){const q=()=>P(f.pl),pe=()=>N(f.pl);if(S==="cut"){p="cut";let Z=0;for(let Fe=0;Fe<Math.round(k/fe);Fe++)y=f.sys.aim(q(),pe(),2.6),y&&(f.sys.cut(y,fe,{o:q(),d:pe()},b),Z++),f.sys.step(fe,f.pl);return Z}return S==="grab"?(p="grip",y=f.sys.aimGrip(q(),pe(),2.3),f.sys.grab(y)):S==="use"?(y=f.sys.aim(q(),pe(),2.3),f.sys.use(y)):S==="throw"?f.sys.throwHeld(pe(),k||1):null},advance(S){const k=Math.round(S/1e3/fe);for(let q=0;q<k;q++)f.pl.input.forward=0,f.pl.input.strafe=0,f.pl.input.jump=!1,ke(fe),f.sys.step(fe,f.pl);return ae+=k*fe,k},drive(S,k={}){const q=Math.max(1,Math.round(S/1e3/fe)),pe={fwd:"KeyW",back:"KeyS",left:"KeyA",right:"KeyD",jump:"Space",crouch:"KeyC"},Z=Object.keys(pe).filter(we=>k[we]);for(const we of Z)d.keyDown(pe[we]);k.fire&&(M.fire=!0,M.press.add("fire"));for(const we of k.press||[])d.press(we);const Fe=we=>{const Le=P(f.pl),I=[we[0]-Le[0],we[1]-Le[1],we[2]-Le[2]];f.pl.yaw=Math.atan2(-I[0],-I[2]),f.pl.pitch=Math.atan2(I[1],Math.hypot(I[0],I[2]))};for(let we=0;we<q;we++){if(k.from){const Le=q>1?we/(q-1):1;Fe(k.to?k.from.map((I,w)=>I+(k.to[w]-I)*Le):k.from)}ht(fe)}for(const we of Z)d.keyUp(pe[we]);return k.fire&&(M.fire=!1),ae+=q*fe,q},frame(){const S=tt(ae);return{calls:S.calls,triangles:S.triangles}},frameFrom(S,k){const q=f.pl;Ue.ghost||(Ue.ghost=new vt(new al(.26,.78,6,16),new yn({color:14263361,roughness:.5,emissive:3810308})),r.add(Ue.ghost));const pe=Ue.ghost;pe.visible=!0,ei(q.x,q.y+.65,q.z,pe.position),Ms(q.z,pe.quaternion),f.view.update(f.sys,ae,S,q),ei(S[0],S[1],S[2],c.position);const Z=ei(k[0],k[1],k[2],new ee);c.up.set(0,1,0).applyQuaternion(Ms(S[2])),c.lookAt(Z),e.info.reset(),u.render(),pe.visible=!1,c.up.set(0,1,0)},idFrame(){const S=f.view.keyMeshes(),k=[],q=[...S.keys()],pe=new Map;r.traverse($=>{($.isMesh||$.isInstancedMesh)&&k.push([$,$.material,$.visible])});const Z=new As({color:0});for(const[$]of k)$.material=Z;q.forEach(($,Ce)=>{const Re=new ot().setHSL(Ce/q.length,1,.5),ce=new As({color:Re});pe.set($,Re);for(const ge of S.get($))ge.visible&&(ge.material=ce)});const Fe=r.fog;r.fog=null;const we=new it;e.getDrawingBufferSize(we);const Le=new An(Math.max(1,we.x>>1),Math.max(1,we.y>>1));e.setRenderTarget(Le),e.setClearColor(0,1),e.clear();const I=P(f.pl);ei(I[0],I[1],I[2],c.position),Ms(I[2],c.quaternion).multiply(new cn().setFromEuler(new gn(f.pl.pitch,f.pl.yaw,0,"YXZ"))),f.view.update(f.sys,ae,I,f.pl);for(const[$]of k)$.isMesh&&$.material===Z&&$.material.transparent&&($.visible=!1);e.render(r,c);const w=new Uint8Array(Le.width*Le.height*4);e.readRenderTargetPixels(Le,0,0,Le.width,Le.height,w),e.setRenderTarget(null),Le.dispose(),r.fog=Fe;for(const[$,Ce,Re]of k)$.material=Ce,$.visible=Re;const ne=Object.fromEntries(q.map($=>[$,0])),Me=q.map($=>pe.get($)).map($=>[$.r*255,$.g*255,$.b*255]);for(let $=0;$<w.length;$+=4){if(w[$]+w[$+1]+w[$+2]<30)continue;let Ce=-1,Re=1e9;Me.forEach((ce,ge)=>{const Pe=Math.abs(ce[0]-w[$])+Math.abs(ce[1]-w[$+1])+Math.abs(ce[2]-w[$+2]);Pe<Re&&(Re=Pe,Ce=ge)}),Ce>=0&&Re<60&&ne[q[Ce]]++}return{px:ne,total:Le.width*Le.height}},passCalls(){tt(ae),e.info.reset(),e.setRenderTarget(null);const S=[e.shadowMap.autoUpdate,e.shadowMap.needsUpdate];e.shadowMap.autoUpdate=!1,e.shadowMap.needsUpdate=!1;for(const q of f.view.pool.spots)q.shadow.needsUpdate=!1;e.render(r,c),[e.shadowMap.autoUpdate,e.shadowMap.needsUpdate]=S;const k={calls:e.info.render.calls,triangles:e.info.render.triangles};return tt(ae),k},weldMany(S,k=10){const q=f.sys,pe=q.cutter,Z=q.phys,Fe=q.S,[we,Le,I]=f.C.size;Ue.cutMany(S+k);const w=[...Fe.pieces.keys()].sort((ce,ge)=>Math.max(...Z.half(ce))-Math.max(...Z.half(ge))),ne=w.length&&S>30?.5:.8,Me=Math.floor((we-.8)/ne),$=Math.floor((I-.8)/ne);for(const ce of w)for(const ge of pe.jointsOf(ce))q.cutJoint(ge.id);f.sys.step(fe,null);let Ce=0,Re=0;for(const ce of w){if(Re>=S||Ce>=Me*$)break;const ge=Z.half(ce),Pe=.6+Ce%Me*ne,W=.6+Math.floor(Ce/Me)*ne,Ee=Z.pose(ce);Ce++,Z.setPose(ce,[Pe,Le-ge[1]-.004,W],[0,0,0,1],!1);let ye={};for(let Oe=0;Oe<70&&!ye.id&&!ye.why;Oe++)ye=pe.weld({kind:"part",id:ce,at:[Pe,Le-.001,W]},fe),Fe.t+=fe;ye.id?Re++:Z.setPose(ce,Ee.p,Ee.q,!1)}return q.anchors(!0),Re},stats(){const S=f.phys.stats(),k=f.view.stats();return{phys:qr,tier:qs,bodies:S,tris:k.tris,meshes:k.meshes,buildMs:+f.buildMs.toFixed(1),geometries:e.info.memory.geometries,textures:e.info.memory.textures,heapMB:performance.memory?+(performance.memory.usedJSHeapSize/1048576).toFixed(1):null,physP95:+me(ie.phys).toFixed(3),frameP95:+me(ie.frame).toFixed(2),fps:_t?+_t.toFixed(1):null}},nan(){const S=[];return r.updateMatrixWorld(!0),r.traverse(k=>{k.matrixWorld.elements.some(q=>!Number.isFinite(q))&&S.push(k.type+":"+(k.userData.part||k.userData.door||k.userData.hatch||k.name||""))}),{objects:S.slice(0,20),cam:c.matrixWorld.elements.every(Number.isFinite),lights:f.view.pool.spots.concat(f.view.pool.points).map(k=>[+k.intensity.toFixed(2),k.position.toArray().every(Number.isFinite)])}},gl(){return{lost:t.lost,restored:t.restored,programs:(e.info.programs||[]).length,shadows:f.view.pool.spots.map(S=>S.shadow.needsUpdate),calls:mt}},perfReset(){ie.frame.length=0,ie.phys.length=0},perfRun(S=120){const k=[];for(let q=0;q<S;q++)ht(fe),ae+=fe,k.push(ie.phys[ie.phys.length-1]);return{physP95:+me(k).toFixed(3),physMax:+Math.max(...k).toFixed(3)}},frameRun(S=10){const k=[],q=[],pe=e.getContext(),Z=new Uint8Array(4);for(let we=0;we<S;we++){const Le=performance.now();ht(fe),ae+=fe;const I=tt(ae);q.push(performance.now()-Le),pe.readPixels(0,0,1,1,pe.RGBA,pe.UNSIGNED_BYTE,Z),k.push(performance.now()-Le),mt=I.calls}const Fe=k.slice().sort((we,Le)=>we-Le);return{frameP95:+me(k).toFixed(1),frameP50:+Fe[Math.floor(S/2)].toFixed(1),cpuP50:+q.slice().sort((we,Le)=>we-Le)[Math.floor(S/2)].toFixed(1),calls:mt}},cutMany(S){const k=f.sys.cutter,q=f.sys.phys,pe=f.sys.S;for(let Z=0;Z<400&&pe.pieces.size<S;Z++){const Fe=q.bodies().filter(Le=>k.canSplit(Le)).map(Le=>({id:Le,h:q.half(Le)})).sort((Le,I)=>I.h[0]*I.h[1]*I.h[2]-Le.h[0]*Le.h[1]*Le.h[2]);if(!Fe.length)break;let we=!1;for(const{id:Le,h:I}of Fe){const w=I.indexOf(Math.max(...I)),ne=[.25,.2,.15];if(ne[w]=1,k.splitPart(Le,ne,0)){we=!0;break}}if(!we)break}return pe.pieces.size},snapshot(){return JSON.stringify(f.sys.snapshot())},async reload(S){const k=f.room,q={x:f.pl.x,z:f.pl.z,yaw:f.pl.yaw,pitch:f.pl.pitch},pe=performance.now();x();const Z=performance.now();return f=await v(k,S?JSON.parse(S):null),Object.assign(f.pl,q),tt(ae),{unloadMs:+(Z-pe).toFixed(1),loadMs:+(performance.now()-Z).toFixed(1)}},hud:()=>({target:document.getElementById("rtgt").textContent,hint:document.getElementById("rhint").hidden?"":document.getElementById("rhint").textContent,note:document.getElementById("rnote").hidden?"":document.getElementById("rnotet").textContent}),sys:()=>f.sys};window.__room=Ue,tt(0),Zi.dataset.room="ready"}e_().catch(jv);
