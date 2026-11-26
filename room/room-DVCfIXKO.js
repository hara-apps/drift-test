(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Gf="modulepreload",Vf=function(n,e){return new URL(n,e).href},Kl={},uo=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let c=function(f){return Promise.all(f.map(p=>Promise.resolve(p).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const a=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),o=l?.nonce||l?.getAttribute("nonce");s=c(t.map(f=>{if(f=Vf(f,i),f in Kl)return;Kl[f]=!0;const p=f.endsWith(".css"),d=p?'[rel="stylesheet"]':"";if(i)for(let u=a.length-1;u>=0;u--){const _=a[u];if(_.href===f&&(!p||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${d}`))return;const h=document.createElement("link");if(h.rel=p?"stylesheet":Gf,p||(h.as="script"),h.crossOrigin="",h.href=f,o&&h.setAttribute("nonce",o),document.head.appendChild(h),p)return new Promise((u,_)=>{h.addEventListener("load",u),h.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${f}`)))})}))}function r(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&r(l.reason);return e().catch(r)})};const Al="187",Wf=0,Jl=1,Xf=2,mr=1,qf=2,fr=3,cs=0,_n=1,Ti=2,Os=0,gr=1,Zl=2,jl=3,Ql=4,$f=5,Ns=100,Yf=101,Kf=102,Jf=103,Zf=104,jf=200,Qf=201,ed=202,td=203,Uu=204,zu=205,nd=206,id=207,sd=208,rd=209,od=210,ad=211,ld=212,cd=213,ud=214,Aa=0,Ra=1,Ca=2,br=3,Pa=4,La=5,Da=6,Ia=7,Rl=0,fd=1,dd=2,ci=0,Fu=1,ku=2,Ou=3,Bu=4,Hu=5,Gu=6,Vu=7,Wu=300,Hs=301,Sr=302,ko=303,Oo=304,wr=1e3,Ci=1001,Na=1002,rn=1003,hd=1004,Ir=1005,bn=1006,Bo=1007,Pi=1008,Mn=1009,Xu=1010,qu=1011,Er=1012,Cl=1013,fi=1014,Yn=1015,Zn=1016,Pl=1017,Ll=1018,Gs=1020,$u=35902,Yu=35899,Ku=1021,Ju=1022,oi=1023,qi=1026,Xi=1027,Dl=1028,Il=1029,us=1030,Nl=1031,Ul=1033,fo=33776,ho=33777,po=33778,mo=33779,Ua=35840,za=35841,Fa=35842,ka=35843,Oa=36196,Ba=37492,Ha=37496,Ga=37488,Va=37489,So=37490,Wa=37491,Xa=37808,qa=37809,$a=37810,Ya=37811,Ka=37812,Ja=37813,Za=37814,ja=37815,Qa=37816,el=37817,tl=37818,nl=37819,il=37820,sl=37821,rl=36492,ol=36494,al=36495,ll=36283,cl=36284,wo=36285,ul=36286,pd=3200,Eo=0,md=1,Ai="",yn="srgb",To="srgb-linear",Ao="linear",Lt="srgb",Ho=7680,gd=519,xd=512,vd=513,_d=514,Zu=515,yd=516,Md=517,ju=518,Qu=519,bd=35044,ec="300 es",Kn=2e3,Tr=2001;function Sd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ro(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function wd(){const n=Ro("canvas");return n.style.display="block",n}const tc={};function nc(...n){const e="THREE."+n.shift();console.log(e,...n)}function ef(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function lt(...n){n=ef(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Et(...n){n=ef(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function go(...n){const e=n.join(" ");e in tc||(tc[e]=!0,lt(...n))}function Ed(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Td={[Aa]:Aa,[Ca]:Da,[Pa]:Pa,[br]:La,[Ra]:Ra,[Da]:Ca,[Ia]:Ia,[La]:br};class ds{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Go=Math.PI/180,Co=180/Math.PI;function Cr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function yt(n,e,t){return Math.max(e,Math.min(t,n))}function Ad(n,e){return(n%e+e)%e}function Vo(n,e,t){return(1-t)*n+t*e}function Rd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function zl(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Cd(n,e){if(e.constructor===Float32Array)return n;const t=zl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Pd(n,e){if(e.constructor===Float32Array)return n;const t=zl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}class it{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class en{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,l){let o=i[s+0],c=i[s+1],f=i[s+2],p=i[s+3],d=r[a+0],h=r[a+1],u=r[a+2],_=r[a+3];if(p!==_||o!==d||c!==h||f!==u){let g=o*d+c*h+f*u+p*_;g<0&&(d=-d,h=-h,u=-u,_=-_,g=-g);let m=1-l;if(g<.9995){const y=Math.acos(g),R=Math.sin(y);m=Math.sin(m*y)/R,l=Math.sin(l*y)/R,o=o*m+d*l,c=c*m+h*l,f=f*m+u*l,p=p*m+_*l}else{o=o*m+d*l,c=c*m+h*l,f=f*m+u*l,p=p*m+_*l;const y=1/Math.sqrt(o*o+c*c+f*f+p*p);o*=y,c*=y,f*=y,p*=y}}e[t]=o,e[t+1]=c,e[t+2]=f,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,s,r,a){const l=i[s],o=i[s+1],c=i[s+2],f=i[s+3],p=r[a],d=r[a+1],h=r[a+2],u=r[a+3];return e[t]=l*u+f*p+o*h-c*d,e[t+1]=o*u+f*d+c*p-l*h,e[t+2]=c*u+f*h+l*d-o*p,e[t+3]=f*u-l*p-o*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,l=Math.cos,o=Math.sin,c=l(i/2),f=l(s/2),p=l(r/2),d=o(i/2),h=o(s/2),u=o(r/2);switch(a){case"XYZ":this._x=d*f*p+c*h*u,this._y=c*h*p-d*f*u,this._z=c*f*u+d*h*p,this._w=c*f*p-d*h*u;break;case"YXZ":this._x=d*f*p+c*h*u,this._y=c*h*p-d*f*u,this._z=c*f*u-d*h*p,this._w=c*f*p+d*h*u;break;case"ZXY":this._x=d*f*p-c*h*u,this._y=c*h*p+d*f*u,this._z=c*f*u+d*h*p,this._w=c*f*p-d*h*u;break;case"ZYX":this._x=d*f*p-c*h*u,this._y=c*h*p+d*f*u,this._z=c*f*u-d*h*p,this._w=c*f*p+d*h*u;break;case"YZX":this._x=d*f*p+c*h*u,this._y=c*h*p+d*f*u,this._z=c*f*u-d*h*p,this._w=c*f*p-d*h*u;break;case"XZY":this._x=d*f*p-c*h*u,this._y=c*h*p-d*f*u,this._z=c*f*u+d*h*p,this._w=c*f*p+d*h*u;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],l=t[5],o=t[9],c=t[2],f=t[6],p=t[10],d=i+l+p;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(f-o)*h,this._y=(r-c)*h,this._z=(a-s)*h}else if(i>l&&i>p){const h=2*Math.sqrt(1+i-l-p);this._w=(f-o)/h,this._x=.25*h,this._y=(s+a)/h,this._z=(r+c)/h}else if(l>p){const h=2*Math.sqrt(1+l-i-p);this._w=(r-c)/h,this._x=(s+a)/h,this._y=.25*h,this._z=(o+f)/h}else{const h=2*Math.sqrt(1+p-i-l);this._w=(a-s)/h,this._x=(r+c)/h,this._y=(o+f)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,l=t._x,o=t._y,c=t._z,f=t._w;return this._x=i*f+a*l+s*c-r*o,this._y=s*f+a*o+r*l-i*c,this._z=r*f+a*c+i*o-s*l,this._w=a*f-i*l-s*o-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,l=this.dot(e);l<0&&(i=-i,s=-s,r=-r,a=-a,l=-l);let o=1-t;if(l<.9995){const c=Math.acos(l),f=Math.sin(c);o=Math.sin(o*c)/f,t=Math.sin(t*c)/f,this._x=this._x*o+i*t,this._y=this._y*o+s*t,this._z=this._z*o+r*t,this._w=this._w*o+a*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+s*t,this._z=this._z*o+r*t,this._w=this._w*o+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ic.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ic.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,l=e.z,o=e.w,c=2*(a*s-l*i),f=2*(l*t-r*s),p=2*(r*i-a*t);return this.x=t+o*c+a*p-l*f,this.y=i+o*f+l*c-r*p,this.z=s+o*p+r*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,l=t.y,o=t.z;return this.x=s*o-r*l,this.y=r*a-i*o,this.z=i*l-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wo.copy(this).projectOnVector(e),this.sub(Wo)}reflect(e){return this.sub(Wo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wo=new se,ic=new en;class dt{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,a,l,o,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,l,o,c)}set(e,t,i,s,r,a,l,o,c){const f=this.elements;return f[0]=e,f[1]=s,f[2]=l,f[3]=t,f[4]=r,f[5]=o,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],l=i[3],o=i[6],c=i[1],f=i[4],p=i[7],d=i[2],h=i[5],u=i[8],_=s[0],g=s[3],m=s[6],y=s[1],R=s[4],S=s[7],C=s[2],I=s[5],b=s[8];return r[0]=a*_+l*y+o*C,r[3]=a*g+l*R+o*I,r[6]=a*m+l*S+o*b,r[1]=c*_+f*y+p*C,r[4]=c*g+f*R+p*I,r[7]=c*m+f*S+p*b,r[2]=d*_+h*y+u*C,r[5]=d*g+h*R+u*I,r[8]=d*m+h*S+u*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],l=e[5],o=e[6],c=e[7],f=e[8];return t*a*f-t*l*c-i*r*f+i*l*o+s*r*c-s*a*o}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],l=e[5],o=e[6],c=e[7],f=e[8],p=f*a-l*c,d=l*o-f*r,h=c*r-a*o,u=t*p+i*d+s*h;if(u===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/u;return e[0]=p*_,e[1]=(s*c-f*i)*_,e[2]=(l*i-s*a)*_,e[3]=d*_,e[4]=(f*t-s*o)*_,e[5]=(s*r-l*t)*_,e[6]=h*_,e[7]=(i*o-c*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,l){const o=Math.cos(r),c=Math.sin(r);return this.set(i*o,i*c,-i*(o*a+c*l)+a+e,-s*c,s*o,-s*(-c*a+o*l)+l+t,0,0,1),this}scale(e,t){return go("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xo.makeScale(e,t)),this}rotate(e){return go("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xo.makeRotation(-e)),this}translate(e,t){return go("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xo=new dt,sc=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rc=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ld(){const n={enabled:!0,workingColorSpace:To,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Lt&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Lt&&(s.r=Bs(s.r),s.g=Bs(s.g),s.b=Bs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ai?Ao:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[To]:{primaries:e,whitePoint:i,transfer:Ao,toXYZ:sc,fromXYZ:rc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:e,whitePoint:i,transfer:Lt,toXYZ:sc,fromXYZ:rc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}}),n}const Mt=Ld();function Li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Bs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let gs;class Dd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{gs===void 0&&(gs=Ro("canvas")),gs.width=e.width,gs.height=e.height;const s=gs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=gs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ro("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Li(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Li(t[i]/255)*255):t[i]=Li(t[i]);return{data:t,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Id=0;class Fl{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Cr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(qo(s[a].image)):r.push(qo(s[a]))}else r=qo(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function qo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Dd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let Nd=0;const $o=new se;class hn extends ds{constructor(e=hn.DEFAULT_IMAGE,t=hn.DEFAULT_MAPPING,i=Ci,s=Ci,r=bn,a=Pi,l=oi,o=Mn,c=hn.DEFAULT_ANISOTROPY,f=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=Cr(),this.name="",this.source=new Fl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=o,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize($o).x}get height(){return this.source.getSize($o).y}get depth(){return this.source.getSize($o).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){lt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){lt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wr:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case Na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wr:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case Na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Wu;hn.DEFAULT_ANISOTROPY=1;class Bt{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const o=e.elements,c=o[0],f=o[4],p=o[8],d=o[1],h=o[5],u=o[9],_=o[2],g=o[6],m=o[10];if(Math.abs(f-d)<.01&&Math.abs(p-_)<.01&&Math.abs(u-g)<.01){if(Math.abs(f+d)<.1&&Math.abs(p+_)<.1&&Math.abs(u+g)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(c+1)/2,S=(h+1)/2,C=(m+1)/2,I=(f+d)/4,b=(p+_)/4,L=(u+g)/4;return R>S&&R>C?R<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(R),s=I/i,r=b/i):S>C?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=I/s,r=L/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=b/r,s=L/r),this.set(i,s,r,t),this}let y=Math.sqrt((g-u)*(g-u)+(p-_)*(p-_)+(d-f)*(d-f));return Math.abs(y)<.001&&(y=1),this.x=(g-u)/y,this.y=(p-_)/y,this.z=(d-f)/y,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ud extends ds{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t),this.textures=[];const s=i.count;for(let r=0;r<s;r++)this.textures[r]=new hn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Fl(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sn extends Ud{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class tf extends hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zd extends hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Tt{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,a,l,o,c,f,p,d,h,u,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,l,o,c,f,p,d,h,u,_,g)}set(e,t,i,s,r,a,l,o,c,f,p,d,h,u,_,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=l,m[13]=o,m[2]=c,m[6]=f,m[10]=p,m[14]=d,m[3]=h,m[7]=u,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/xs.setFromMatrixColumn(e,0).length(),r=1/xs.setFromMatrixColumn(e,1).length(),a=1/xs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),l=Math.sin(i),o=Math.cos(s),c=Math.sin(s),f=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const d=a*f,h=a*p,u=l*f,_=l*p;t[0]=o*f,t[4]=-o*p,t[8]=c,t[1]=h+u*c,t[5]=d-_*c,t[9]=-l*o,t[2]=_-d*c,t[6]=u+h*c,t[10]=a*o}else if(e.order==="YXZ"){const d=o*f,h=o*p,u=c*f,_=c*p;t[0]=d+_*l,t[4]=u*l-h,t[8]=a*c,t[1]=a*p,t[5]=a*f,t[9]=-l,t[2]=h*l-u,t[6]=_+d*l,t[10]=a*o}else if(e.order==="ZXY"){const d=o*f,h=o*p,u=c*f,_=c*p;t[0]=d-_*l,t[4]=-a*p,t[8]=u+h*l,t[1]=h+u*l,t[5]=a*f,t[9]=_-d*l,t[2]=-a*c,t[6]=l,t[10]=a*o}else if(e.order==="ZYX"){const d=a*f,h=a*p,u=l*f,_=l*p;t[0]=o*f,t[4]=u*c-h,t[8]=d*c+_,t[1]=o*p,t[5]=_*c+d,t[9]=h*c-u,t[2]=-c,t[6]=l*o,t[10]=a*o}else if(e.order==="YZX"){const d=a*o,h=a*c,u=l*o,_=l*c;t[0]=o*f,t[4]=_-d*p,t[8]=u*p+h,t[1]=p,t[5]=a*f,t[9]=-l*f,t[2]=-c*f,t[6]=h*p+u,t[10]=d-_*p}else if(e.order==="XZY"){const d=a*o,h=a*c,u=l*o,_=l*c;t[0]=o*f,t[4]=-p,t[8]=c*f,t[1]=d*p+_,t[5]=a*f,t[9]=h*p-u,t[2]=u*p-h,t[6]=l*f,t[10]=_*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fd,e,kd)}lookAt(e,t,i){const s=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Ii.crossVectors(i,Tn),Ii.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Ii.crossVectors(i,Tn)),Ii.normalize(),Nr.crossVectors(Tn,Ii),s[0]=Ii.x,s[4]=Nr.x,s[8]=Tn.x,s[1]=Ii.y,s[5]=Nr.y,s[9]=Tn.y,s[2]=Ii.z,s[6]=Nr.z,s[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],l=i[4],o=i[8],c=i[12],f=i[1],p=i[5],d=i[9],h=i[13],u=i[2],_=i[6],g=i[10],m=i[14],y=i[3],R=i[7],S=i[11],C=i[15],I=s[0],b=s[4],L=s[8],B=s[12],N=s[1],H=s[5],V=s[9],Q=s[13],q=s[2],ne=s[6],he=s[10],re=s[14],Pe=s[3],de=s[7],be=s[11],ge=s[15];return r[0]=a*I+l*N+o*q+c*Pe,r[4]=a*b+l*H+o*ne+c*de,r[8]=a*L+l*V+o*he+c*be,r[12]=a*B+l*Q+o*re+c*ge,r[1]=f*I+p*N+d*q+h*Pe,r[5]=f*b+p*H+d*ne+h*de,r[9]=f*L+p*V+d*he+h*be,r[13]=f*B+p*Q+d*re+h*ge,r[2]=u*I+_*N+g*q+m*Pe,r[6]=u*b+_*H+g*ne+m*de,r[10]=u*L+_*V+g*he+m*be,r[14]=u*B+_*Q+g*re+m*ge,r[3]=y*I+R*N+S*q+C*Pe,r[7]=y*b+R*H+S*ne+C*de,r[11]=y*L+R*V+S*he+C*be,r[15]=y*B+R*Q+S*re+C*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],l=e[5],o=e[9],c=e[13],f=e[2],p=e[6],d=e[10],h=e[14],u=e[3],_=e[7],g=e[11],m=e[15],y=o*h-c*d,R=l*h-c*p,S=l*d-o*p,C=a*h-c*f,I=a*d-o*f,b=a*p-l*f;return t*(_*y-g*R+m*S)-i*(u*y-g*C+m*I)+s*(u*R-_*C+m*b)-r*(u*S-_*I+g*b)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],l=e[9],o=e[2],c=e[6],f=e[10];return t*(a*f-l*c)-i*(r*f-l*o)+s*(r*c-a*o)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],l=e[5],o=e[6],c=e[7],f=e[8],p=e[9],d=e[10],h=e[11],u=e[12],_=e[13],g=e[14],m=e[15],y=t*l-i*a,R=t*o-s*a,S=t*c-r*a,C=i*o-s*l,I=i*c-r*l,b=s*c-r*o,L=f*_-p*u,B=f*g-d*u,N=f*m-h*u,H=p*g-d*_,V=p*m-h*_,Q=d*m-h*g,q=y*Q-R*V+S*H+C*N-I*B+b*L;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ne=1/q;return e[0]=(l*Q-o*V+c*H)*ne,e[1]=(s*V-i*Q-r*H)*ne,e[2]=(_*b-g*I+m*C)*ne,e[3]=(d*I-p*b-h*C)*ne,e[4]=(o*N-a*Q-c*B)*ne,e[5]=(t*Q-s*N+r*B)*ne,e[6]=(g*S-u*b-m*R)*ne,e[7]=(f*b-d*S+h*R)*ne,e[8]=(a*V-l*N+c*L)*ne,e[9]=(i*N-t*V-r*L)*ne,e[10]=(u*I-_*S+m*y)*ne,e[11]=(p*S-f*I-h*y)*ne,e[12]=(l*B-a*H-o*L)*ne,e[13]=(t*H-i*B+s*L)*ne,e[14]=(_*R-u*C-g*y)*ne,e[15]=(f*C-p*R+d*y)*ne,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,l=e.y,o=e.z,c=r*a,f=r*l;return this.set(c*a+i,c*l-s*o,c*o+s*l,0,c*l+s*o,f*l+i,f*o-s*a,0,c*o-s*l,f*o+s*a,r*o*o+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,l=t._z,o=t._w,c=r+r,f=a+a,p=l+l,d=r*c,h=r*f,u=r*p,_=a*f,g=a*p,m=l*p,y=o*c,R=o*f,S=o*p,C=i.x,I=i.y,b=i.z;return s[0]=(1-(_+m))*C,s[1]=(h+S)*C,s[2]=(u-R)*C,s[3]=0,s[4]=(h-S)*I,s[5]=(1-(d+m))*I,s[6]=(g+y)*I,s[7]=0,s[8]=(u+R)*b,s[9]=(g-y)*b,s[10]=(1-(d+_))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=xs.set(s[0],s[1],s[2]).length();const l=xs.set(s[4],s[5],s[6]).length(),o=xs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),kn.copy(this);const c=1/a,f=1/l,p=1/o;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=f,kn.elements[5]*=f,kn.elements[6]*=f,kn.elements[8]*=p,kn.elements[9]*=p,kn.elements[10]*=p,t.setFromRotationMatrix(kn),i.x=a,i.y=l,i.z=o,this}makePerspective(e,t,i,s,r,a,l=Kn,o=!1){const c=this.elements,f=2*r/(t-e),p=2*r/(i-s),d=(t+e)/(t-e),h=(i+s)/(i-s);let u,_;if(o)u=r/(a-r),_=a*r/(a-r);else if(l===Kn)u=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(l===Tr)u=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=f,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=p,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=u,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,l=Kn,o=!1){const c=this.elements,f=2/(t-e),p=2/(i-s),d=-(t+e)/(t-e),h=-(i+s)/(i-s);let u,_;if(o)u=1/(a-r),_=a/(a-r);else if(l===Kn)u=-2/(a-r),_=-(a+r)/(a-r);else if(l===Tr)u=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=f,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=p,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=u,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const xs=new se,kn=new Tt,Fd=new se(0,0,0),kd=new se(1,1,1),Ii=new se,Nr=new se,Tn=new se,oc=new Tt,ac=new en;class dn{constructor(e=0,t=0,i=0,s=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],l=s[8],o=s[1],c=s[5],f=s[9],p=s[2],d=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,h),this._z=Math.atan2(o,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-yt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(l,h));break;case"XZY":this._z=Math.asin(-yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-f,h),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return oc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ac.setFromEuler(this),this.setFromQuaternion(ac,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class nf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Od=0;const lc=new se,vs=new en,_i=new Tt,Ur=new se,Js=new se,Bd=new se,Hd=new en,cc=new se(1,0,0),uc=new se(0,1,0),fc=new se(0,0,1),dc={type:"added"},Gd={type:"removed"},_s={type:"childadded",child:null},Yo={type:"childremoved",child:null};class Xt extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new se,t=new dn,i=new en,s=new se(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Tt},normalMatrix:{value:new dt}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(cc,e)}rotateY(e){return this.rotateOnAxis(uc,e)}rotateZ(e){return this.rotateOnAxis(fc,e)}translateOnAxis(e,t){return lc.copy(e).applyQuaternion(this.quaternion),this.position.add(lc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cc,e)}translateY(e){return this.translateOnAxis(uc,e)}translateZ(e){return this.translateOnAxis(fc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ur.copy(e):Ur.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Js,Ur,this.up):_i.lookAt(Ur,Js,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),vs.setFromRotationMatrix(_i),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dc),_s.child=e,this.dispatchEvent(_s),_s.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gd),Yo.child=e,this.dispatchEvent(Yo),Yo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dc),_s.child=e,this.dispatchEvent(_s),_s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,Bd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,Hd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,o){return l[o.uuid]===void 0&&(l[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const o=l.shapes;if(Array.isArray(o))for(let c=0,f=o.length;c<f;c++){const p=o[c];r(e.shapes,p)}else r(e.shapes,o)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let o=0,c=this.material.length;o<c;o++)l.push(r(e.materials,this.material[o]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const o=this.animations[l];s.animations.push(r(e.animations,o))}}if(t){const l=a(e.geometries),o=a(e.materials),c=a(e.textures),f=a(e.images),p=a(e.shapes),d=a(e.skeletons),h=a(e.animations),u=a(e.nodes);l.length>0&&(i.geometries=l),o.length>0&&(i.materials=o),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),u.length>0&&(i.nodes=u)}return i.object=s,i;function a(l){const o=[];for(const c in l){const f=l[c];delete f.metadata,o.push(f)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Xt.DEFAULT_UP=new se(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class zs extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vd={type:"move"};class Ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const l=this._targetRay,o=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=f.position.distanceTo(p.position),h=.02,u=.005;c.inputState.pinching&&d>h+u?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-u&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Vd)))}return l!==null&&(l.visible=s!==null),o!==null&&(o.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new zs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},zr={h:0,s:0,l:0};function Jo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ut{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Mt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Mt.workingColorSpace){if(e=Ad(e,1),t=yt(t,0,1),i=yt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Jo(a,r,e+1/3),this.g=Jo(a,r,e),this.b=Jo(a,r,e-1/3)}return Mt.colorSpaceToWorking(this,s),this}setStyle(e,t=yn){function i(r){r!==void 0&&parseFloat(r)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:lt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yn){const i=sf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return Mt.workingToColorSpace(un.copy(this),e),Math.round(yt(un.r*255,0,255))*65536+Math.round(yt(un.g*255,0,255))*256+Math.round(yt(un.b*255,0,255))}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.workingToColorSpace(un.copy(this),t);const i=un.r,s=un.g,r=un.b,a=Math.max(i,s,r),l=Math.min(i,s,r);let o,c;const f=(l+a)/2;if(l===a)o=0,c=0;else{const p=a-l;switch(c=f<=.5?p/(a+l):p/(2-a-l),a){case i:o=(s-r)/p+(s<r?6:0);break;case s:o=(r-i)/p+2;break;case r:o=(i-s)/p+4;break}o/=6}return e.h=o,e.s=c,e.l=f,e}getRGB(e,t=Mt.workingColorSpace){return Mt.workingToColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=yn){Mt.workingToColorSpace(un.copy(this),e);const t=un.r,i=un.g,s=un.b;return e!==yn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(zr);const i=Vo(Ni.h,zr.h,t),s=Vo(Ni.s,zr.s,t),r=Vo(Ni.l,zr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new ut;ut.NAMES=sf;class kl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ut(e),this.density=t}clone(){return new kl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class rf extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const On=new se,yi=new se,Zo=new se,Mi=new se,ys=new se,Ms=new se,hc=new se,jo=new se,Qo=new se,ea=new se,ta=new Bt,na=new Bt,ia=new Bt;class Xn{constructor(e=new se,t=new se,i=new se){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),On.subVectors(e,t),s.cross(On);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){On.subVectors(s,t),yi.subVectors(i,t),Zo.subVectors(e,t);const a=On.dot(On),l=On.dot(yi),o=On.dot(Zo),c=yi.dot(yi),f=yi.dot(Zo),p=a*c-l*l;if(p===0)return r.set(0,0,0),null;const d=1/p,h=(c*o-l*f)*d,u=(a*f-l*o)*d;return r.set(1-h-u,u,h)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,i,s,r,a,l,o){return this.getBarycoord(e,t,i,s,Mi)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,Mi.x),o.addScaledVector(a,Mi.y),o.addScaledVector(l,Mi.z),o)}static getInterpolatedAttribute(e,t,i,s,r,a){return ta.setScalar(0),na.setScalar(0),ia.setScalar(0),ta.fromBufferAttribute(e,t),na.fromBufferAttribute(e,i),ia.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ta,r.x),a.addScaledVector(na,r.y),a.addScaledVector(ia,r.z),a}static isFrontFacing(e,t,i,s){return On.subVectors(i,t),yi.subVectors(e,t),On.cross(yi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),On.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Xn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,l;ys.subVectors(s,i),Ms.subVectors(r,i),jo.subVectors(e,i);const o=ys.dot(jo),c=Ms.dot(jo);if(o<=0&&c<=0)return t.copy(i);Qo.subVectors(e,s);const f=ys.dot(Qo),p=Ms.dot(Qo);if(f>=0&&p<=f)return t.copy(s);const d=o*p-f*c;if(d<=0&&o>=0&&f<=0&&o-f>0)return a=o/(o-f),t.copy(i).addScaledVector(ys,a);ea.subVectors(e,r);const h=ys.dot(ea),u=Ms.dot(ea);if(u>=0&&h<=u)return t.copy(r);const _=h*c-o*u;if(_<=0&&c>=0&&u<=0)return l=c/(c-u),t.copy(i).addScaledVector(Ms,l);const g=f*u-h*p;if(g<=0&&p-f>=0&&h-u>=0)return hc.subVectors(r,s),l=(p-f)/(p-f+(h-u)),t.copy(s).addScaledVector(hc,l);const m=1/(g+_+d);return a=_*m,l=d*m,t.copy(i).addScaledVector(ys,a).addScaledVector(Ms,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class hs{constructor(e=new se(1/0,1/0,1/0),t=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,l=r.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,Bn):Bn.fromBufferAttribute(r,a),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fr.copy(i.boundingBox)),Fr.applyMatrix4(e.matrixWorld),this.union(Fr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),kr.subVectors(this.max,Zs),bs.subVectors(e.a,Zs),Ss.subVectors(e.b,Zs),ws.subVectors(e.c,Zs),Ui.subVectors(Ss,bs),zi.subVectors(ws,Ss),Ki.subVectors(bs,ws);let t=[0,-Ui.z,Ui.y,0,-zi.z,zi.y,0,-Ki.z,Ki.y,Ui.z,0,-Ui.x,zi.z,0,-zi.x,Ki.z,0,-Ki.x,-Ui.y,Ui.x,0,-zi.y,zi.x,0,-Ki.y,Ki.x,0];return!sa(t,bs,Ss,ws,kr)||(t=[1,0,0,0,1,0,0,0,1],!sa(t,bs,Ss,ws,kr))?!1:(Or.crossVectors(Ui,zi),t=[Or.x,Or.y,Or.z],sa(t,bs,Ss,ws,kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const bi=[new se,new se,new se,new se,new se,new se,new se,new se],Bn=new se,Fr=new hs,bs=new se,Ss=new se,ws=new se,Ui=new se,zi=new se,Ki=new se,Zs=new se,kr=new se,Or=new se,Ji=new se;function sa(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ji.fromArray(n,r);const l=s.x*Math.abs(Ji.x)+s.y*Math.abs(Ji.y)+s.z*Math.abs(Ji.z),o=e.dot(Ji),c=t.dot(Ji),f=i.dot(Ji);if(Math.max(-Math.max(o,c,f),Math.min(o,c,f))>l)return!1}return!0}const Vt=new se,Br=new it;let Wd=0;class vn extends ds{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=bd,this.updateRanges=[],this.gpuType=Yn,this.version=0,this._normalizationScale=e!==void 0?zl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Br.fromBufferAttribute(this,t),Br.applyMatrix3(e),this.setXY(t,Br.x,Br.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Cd(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Pd(e,this.array)}}class of extends vn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class af extends vn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ht extends vn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Xd=new hs,js=new se,ra=new se;class Pr{constructor(e=new se,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Xd.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;js.subVectors(e,this.center);const t=js.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(js,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ra.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(js.copy(e.center).add(ra)),this.expandByPoint(js.copy(e.center).sub(ra))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let qd=0;const Dn=new Tt,oa=new Xt,Es=new se,An=new hs,Qs=new hs,jt=new se;class tn extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Cr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sd(e)?af:of)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new dt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,i){return Dn.makeTranslation(e,t,i),this.applyMatrix4(Dn),this}scale(e,t,i){return Dn.makeScale(e,t,i),this.applyMatrix4(Dn),this}lookAt(e){return oa.lookAt(e),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ht(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];An.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];Qs.setFromBufferAttribute(l),this.morphTargetsRelative?(jt.addVectors(An.min,Qs.min),An.expandByPoint(jt),jt.addVectors(An.max,Qs.max),An.expandByPoint(jt)):(An.expandByPoint(Qs.min),An.expandByPoint(Qs.max))}An.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(jt));if(t)for(let r=0,a=t.length;r<a;r++){const l=t[r],o=this.morphTargetsRelative;for(let c=0,f=l.count;c<f;c++)jt.fromBufferAttribute(l,c),o&&(Es.fromBufferAttribute(e,c),jt.add(Es)),s=Math.max(s,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new vn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const l=[],o=[],c=new Uint8Array(i.count);for(let B=0;B<i.count;B++)l[B]=new se,o[B]=new se;const f=new se,p=new se,d=new se,h=new it,u=new it,_=new it,g=new se,m=new se;function y(B,N,H){c[B]=c[N]=c[H]=1,f.fromBufferAttribute(i,B),p.fromBufferAttribute(i,N),d.fromBufferAttribute(i,H),h.fromBufferAttribute(r,B),u.fromBufferAttribute(r,N),_.fromBufferAttribute(r,H),p.sub(f),d.sub(f),u.sub(h),_.sub(h);const V=1/(u.x*_.y-_.x*u.y);isFinite(V)&&(g.copy(p).multiplyScalar(_.y).addScaledVector(d,-u.y).multiplyScalar(V),m.copy(d).multiplyScalar(u.x).addScaledVector(p,-_.x).multiplyScalar(V),l[B].add(g),l[N].add(g),l[H].add(g),o[B].add(m),o[N].add(m),o[H].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let B=0,N=R.length;B<N;++B){const H=R[B],V=H.start,Q=H.count;for(let q=V,ne=V+Q;q<ne;q+=3)y(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const S=new se,C=new se,I=new se,b=new se;function L(B){I.fromBufferAttribute(s,B),b.copy(I);const N=l[B];S.copy(N),S.sub(I.multiplyScalar(I.dot(N))).normalize(),C.crossVectors(b,N);const V=C.dot(o[B])<0?-1:1;a.setXYZW(B,S.x,S.y,S.z,V)}for(let B=0,N=i.count;B<N;++B)c[B]&&L(B);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const s=new se,r=new se,a=new se,l=new se,o=new se,c=new se,f=new se,p=new se;if(e)for(let d=0,h=e.count;d<h;d+=3){const u=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,u),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),f.subVectors(a,r),p.subVectors(s,r),f.cross(p),l.fromBufferAttribute(i,u),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),l.add(f),o.add(f),c.add(f),i.setXYZ(u,l.x,l.y,l.z),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),f.subVectors(a,r),p.subVectors(s,r),f.cross(p),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(l,o){const c=l.array,f=l.itemSize,p=l.normalized,d=new c.constructor(o.length*f);let h=0,u=0;for(let _=0,g=o.length;_<g;_++){l.isInterleavedBufferAttribute?h=o[_]*l.data.stride+l.offset:h=o[_]*f;for(let m=0;m<f;m++)d[u++]=c[h++]}return new vn(d,f,p)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tn,i=this.index.array,s=this.attributes;for(const l in s){const o=s[l],c=e(o,i);t.setAttribute(l,c)}const r=this.morphAttributes;for(const l in r){const o=[],c=r[l];for(let f=0,p=c.length;f<p;f++){const d=c[f],h=e(d,i);o.push(h)}t.morphAttributes[l]=o}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,o=a.length;l<o;l++){const c=a[l];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const o=this.parameters;for(const c in o)o[c]!==void 0&&(e[c]=o[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const o in i){const c=i[o];e.data.attributes[o]=c.toJSON(e.data)}const s={};let r=!1;for(const o in this.morphAttributes){const c=this.morphAttributes[o],f=[];for(let p=0,d=c.length;p<d;p++){const h=c[p];f.push(h.toJSON(e.data))}f.length>0&&(s[o]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const f=s[c];this.setAttribute(c,f.clone(t))}const r=e.morphAttributes;for(const c in r){const f=[],p=r[c];for(let d=0,h=p.length;d<h;d++)f.push(p[d].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const aa=new se,$d=new se,Yd=new dt;class Gi{constructor(e=new se(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=aa.subVectors(i,t).cross($d.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(aa),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Yd.getNormalMatrix(e),s=this.coplanarPoint(aa).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Kd=0;class qs extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Cr(),this.name="",this.type="Material",this.blending=gr,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uu,this.blendDst=zu,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ho,this.stencilZFail=Ho,this.stencilZPass=Ho,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){lt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){lt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const l in r){const o=r[l];delete o.metadata,a.push(o)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ut().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Gi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new it().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new it().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Si=new se,la=new se,Hr=new se,Gr=new se;class Jd{constructor(e=new se,t=new se(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){la.copy(e).add(t).multiplyScalar(.5),Hr.copy(t).sub(e).normalize(),Gr.copy(this.origin).sub(la);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Hr),l=Gr.dot(this.direction),o=-Gr.dot(Hr),c=Gr.lengthSq(),f=Math.abs(1-a*a);let p,d,h,u;if(f>0)if(p=a*o-l,d=a*l-o,u=r*f,p>=0)if(d>=-u)if(d<=u){const _=1/f;p*=_,d*=_,h=p*(p+a*d+2*l)+d*(a*p+d+2*o)+c}else d=r,p=Math.max(0,-(a*d+l)),h=-p*p+d*(d+2*o)+c;else d=-r,p=Math.max(0,-(a*d+l)),h=-p*p+d*(d+2*o)+c;else d<=-u?(p=Math.max(0,-(-a*r+l)),d=p>0?-r:Math.min(Math.max(-r,-o),r),h=-p*p+d*(d+2*o)+c):d<=u?(p=0,d=Math.min(Math.max(-r,-o),r),h=d*(d+2*o)+c):(p=Math.max(0,-(a*r+l)),d=p>0?r:Math.min(Math.max(-r,-o),r),h=-p*p+d*(d+2*o)+c);else d=a>0?-r:r,p=Math.max(0,-(a*d+l)),h=-p*p+d*(d+2*o)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(la).addScaledVector(Hr,d),h}intersectSphere(e,t){if(e.radius<0)return null;Si.subVectors(e.center,this.origin);const i=Si.dot(this.direction),s=Si.dot(Si)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),l=i-a,o=i+a;return o<0?null:l<0?this.at(o,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,l,o;const c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),f>=0?(r=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(r=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),p>=0?(l=(e.min.z-d.z)*p,o=(e.max.z-d.z)*p):(l=(e.max.z-d.z)*p,o=(e.min.z-d.z)*p),i>o||l>s)||((l>i||i!==i)&&(i=l),(o<s||s!==s)&&(s=o),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,i,s,r){const a=this.origin,l=this.direction,o=l.x,c=l.y,f=l.z,p=e.x-a.x,d=e.y-a.y,h=e.z-a.z,u=t.x-a.x,_=t.y-a.y,g=t.z-a.z,m=i.x-a.x,y=i.y-a.y,R=i.z-a.z,S=Math.abs(o),C=Math.abs(c),I=Math.abs(f);let b,L,B,N,H,V,Q,q,ne,he,re,Pe;if(S>=C&&S>=I?(B=o,V=p,ne=u,Pe=m,o>=0?(b=c,L=f,N=d,H=h,Q=_,q=g,he=y,re=R):(b=f,L=c,N=h,H=d,Q=g,q=_,he=R,re=y)):C>=I?(B=c,V=d,ne=_,Pe=y,c>=0?(b=f,L=o,N=h,H=p,Q=g,q=u,he=R,re=m):(b=o,L=f,N=p,H=h,Q=u,q=g,he=m,re=R)):(B=f,V=h,ne=g,Pe=R,f>=0?(b=o,L=c,N=p,H=d,Q=u,q=_,he=m,re=y):(b=c,L=o,N=d,H=p,Q=_,q=u,he=y,re=m)),B===0)return null;const de=b/B,be=L/B,ge=1/B,Te=N-de*V,Be=H-be*V,ye=Q-de*ne,Ne=q-be*ne,Fe=he-de*Pe,Oe=re-be*Pe,ke=Fe*Ne-Oe*ye,Ke=Te*Oe-Be*Fe,pt=ye*Be-Ne*Te;if(s){if(ke<0||Ke<0||pt<0)return null}else if((ke<0||Ke<0||pt<0)&&(ke>0||Ke>0||pt>0))return null;const He=ke+Ke+pt;if(He===0)return null;const Je=ge*(ke*V+Ke*ne+pt*Pe);return(He>0?Je<0:Je>0)?null:this.at(Je/He,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rs extends qs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pc=new Tt,Zi=new Jd,Vr=new Pr,mc=new se,Wr=new se,Xr=new se,qr=new se,ca=new se,$r=new se,gc=new se,Yr=new se;class xt extends Xt{constructor(e=new tn,t=new rs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const l=this.morphTargetInfluences;if(r&&l){$r.set(0,0,0);for(let o=0,c=r.length;o<c;o++){const f=l[o],p=r[o];f!==0&&(ca.fromBufferAttribute(p,e),a?$r.addScaledVector(ca,f):$r.addScaledVector(ca.sub(t),f))}t.add($r)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vr.copy(i.boundingSphere),Vr.applyMatrix4(r),Zi.copy(e.ray).recast(e.near),!(Vr.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(Vr,mc)===null||Zi.origin.distanceToSquared(mc)>(e.far-e.near)**2))&&(pc.copy(r).invert(),Zi.copy(e.ray).applyMatrix4(pc),!(i.boundingBox!==null&&Zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Zi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,l=r.index,o=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,p=r.attributes.normal,d=r.groups,h=r.drawRange;if(l!==null)if(Array.isArray(a))for(let u=0,_=d.length;u<_;u++){const g=d[u],m=a[g.materialIndex],y=Math.max(g.start,h.start),R=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let S=y,C=R;S<C;S+=3){const I=l.getX(S),b=l.getX(S+1),L=l.getX(S+2);s=Kr(this,m,e,i,c,f,p,I,b,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const u=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let g=u,m=_;g<m;g+=3){const y=l.getX(g),R=l.getX(g+1),S=l.getX(g+2);s=Kr(this,a,e,i,c,f,p,y,R,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(o!==void 0)if(Array.isArray(a))for(let u=0,_=d.length;u<_;u++){const g=d[u],m=a[g.materialIndex],y=Math.max(g.start,h.start),R=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let S=y,C=R;S<C;S+=3){const I=S,b=S+1,L=S+2;s=Kr(this,m,e,i,c,f,p,I,b,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const u=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let g=u,m=_;g<m;g+=3){const y=g,R=g+1,S=g+2;s=Kr(this,a,e,i,c,f,p,y,R,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Zd(n,e,t,i,s,r,a,l){let o;if(e.side===_n?o=i.intersectTriangle(a,r,s,!0,l):o=i.intersectTriangle(s,r,a,e.side===cs,l),o===null)return null;Yr.copy(l),Yr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Yr);return c<t.near||c>t.far?null:{distance:c,point:Yr.clone(),object:n}}function Kr(n,e,t,i,s,r,a,l,o,c){n.getVertexPosition(l,Wr),n.getVertexPosition(o,Xr),n.getVertexPosition(c,qr);const f=Zd(n,e,t,i,Wr,Xr,qr,gc);if(f){const p=new se;Xn.getBarycoord(gc,Wr,Xr,qr,p),s&&(f.uv=Xn.getInterpolatedAttribute(s,l,o,c,p,new it)),r&&(f.uv1=Xn.getInterpolatedAttribute(r,l,o,c,p,new it)),a&&(f.normal=Xn.getInterpolatedAttribute(a,l,o,c,p,new se),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:l,b:o,c,normal:new se,materialIndex:0};Xn.getNormal(Wr,Xr,qr,d.normal),f.face=d,f.barycoord=p}return f}class lf extends hn{constructor(e=null,t=1,i=1,s,r,a,l,o,c=rn,f=rn,p,d){super(null,a,l,o,c,f,s,r,p,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xc extends vn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ts=new Tt,vc=new Tt,Jr=[],_c=new hs,jd=new Tt,er=new xt,tr=new Pr;class Hn extends xt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,jd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new hs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ts),_c.copy(e.boundingBox).applyMatrix4(Ts),this.boundingBox.union(_c)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ts),tr.copy(e.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(tr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let l=0;l<i.length;l++)i[l]=s[a+l]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(er.geometry=this.geometry,er.material=this.material,er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tr.copy(this.boundingSphere),tr.applyMatrix4(i),e.ray.intersectsSphere(tr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ts),vc.multiplyMatrices(i,Ts),er.matrixWorld=vc,er.raycast(e,Jr);for(let a=0,l=Jr.length;a<l;a++){const o=Jr[a];o.instanceId=r,o.object=this,t.push(o)}Jr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new xc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new lf(new Float32Array(s*this.count),s,this.count,Dl,Yn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const l=this.geometry.morphTargetsRelative?1:1-a,o=s*e;return r[o]=l,r.set(i,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ji=new Pr,Qd=new it(.5,.5),Zr=new se;class Ar{constructor(e=new Gi,t=new Gi,i=new Gi,s=new Gi,r=new Gi,a=new Gi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Kn,i=!1){const s=this.planes,r=e.elements,a=r[0],l=r[1],o=r[2],c=r[3],f=r[4],p=r[5],d=r[6],h=r[7],u=r[8],_=r[9],g=r[10],m=r[11],y=r[12],R=r[13],S=r[14],C=r[15];if(s[0].setComponents(c-a,h-f,m-u,C-y).normalize(),s[1].setComponents(c+a,h+f,m+u,C+y).normalize(),s[2].setComponents(c+l,h+p,m+_,C+R).normalize(),s[3].setComponents(c-l,h-p,m-_,C-R).normalize(),i)s[4].setComponents(o,d,g,S).normalize(),s[5].setComponents(c-o,h-d,m-g,C-S).normalize();else if(s[4].setComponents(c-o,h-d,m-g,C-S).normalize(),t===Kn)s[5].setComponents(c+o,h+d,m+g,C+S).normalize();else if(t===Tr)s[5].setComponents(o,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){ji.center.set(0,0,0);const t=Qd.distanceTo(e.center);return ji.radius=.7071067811865476+t,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Zr.x=s.normal.x>0?e.max.x:e.min.x,Zr.y=s.normal.y>0?e.max.y:e.min.y,Zr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const yc=new Tt;class Ol{constructor(){this.coordinateSystem=Kn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];yc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Ar),i[s].setFromProjectionMatrix(yc,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ar),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new Ol().copy(this)}}class cf extends hn{constructor(e=[],t=Hs,i,s,r,a,l,o,c,f){super(e,t,i,s,r,a,l,o,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xo extends hn{constructor(e,t,i,s,r,a,l,o,c){super(e,t,i,s,r,a,l,o,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vs extends hn{constructor(e,t,i=fi,s,r,a,l=rn,o=rn,c,f=qi,p=1){if(f!==qi&&f!==Xi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:p};super(d,s,r,a,l,o,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class uf extends Vs{constructor(e,t=fi,i=Hs,s,r,a=rn,l=rn,o,c=qi){const f={width:e,height:e,depth:1},p=[f,f,f,f,f,f];super(e,e,t,i,s,r,a,l,o,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ff extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Pt extends tn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const o=[],c=[],f=[],p=[];let d=0,h=0;u("z","y","x",-1,-1,i,t,e,a,r,0),u("z","y","x",1,-1,i,t,-e,a,r,1),u("x","z","y",1,1,e,i,t,s,a,2),u("x","z","y",1,-1,e,i,-t,s,a,3),u("x","y","z",1,-1,e,t,i,s,r,4),u("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(o),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(f,3)),this.setAttribute("uv",new ht(p,2));function u(_,g,m,y,R,S,C,I,b,L,B){const N=S/b,H=C/L,V=S/2,Q=C/2,q=I/2,ne=b+1,he=L+1;let re=0,Pe=0;const de=new se;for(let be=0;be<he;be++){const ge=be*H-Q;for(let Te=0;Te<ne;Te++){const Be=Te*N-V;de[_]=Be*y,de[g]=ge*R,de[m]=q,c.push(de.x,de.y,de.z),de[_]=0,de[g]=0,de[m]=I>0?1:-1,f.push(de.x,de.y,de.z),p.push(Te/b),p.push(1-be/L),re+=1}}for(let be=0;be<L;be++)for(let ge=0;ge<b;ge++){const Te=d+ge+ne*be,Be=d+ge+ne*(be+1),ye=d+(ge+1)+ne*(be+1),Ne=d+(ge+1)+ne*be;o.push(Te,Be,Ne),o.push(Be,ye,Ne),Pe+=6}l.addGroup(h,Pe,B),h+=Pe,d+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Bl extends tn{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],l=[],o=[],c=[],f=t/2,p=Math.PI/2*e,d=t,h=2*p+d,u=i*2+r,_=s+1,g=new se,m=new se;for(let y=0;y<=u;y++){let R=0,S=0,C=0,I=0;if(y<=i){const B=y/i,N=B*Math.PI/2;S=-f-e*Math.cos(N),C=e*Math.sin(N),I=-e*Math.cos(N),R=B*p}else if(y<=i+r){const B=(y-i)/r;S=-f+B*t,C=e,I=0,R=p+B*d}else{const B=(y-i-r)/i,N=B*Math.PI/2;S=f+e*Math.sin(N),C=e*Math.cos(N),I=e*Math.sin(N),R=p+d+B*p}const b=Math.max(0,Math.min(1,R/h));let L=0;y===0?L=.5/s:y===u&&(L=-.5/s);for(let B=0;B<=s;B++){const N=B/s,H=N*Math.PI*2,V=Math.sin(H),Q=Math.cos(H);m.x=-C*Q,m.y=S,m.z=C*V,l.push(m.x,m.y,m.z),g.set(-C*Q,I,C*V),g.normalize(),o.push(g.x,g.y,g.z),c.push(N+L,b)}if(y>0){const B=(y-1)*_;for(let N=0;N<s;N++){const H=B+N,V=B+N+1,Q=y*_+N,q=y*_+N+1;a.push(H,V,Q),a.push(V,q,Q)}}}this.setIndex(a),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(o,3)),this.setAttribute("uv",new ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bl(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class ii extends tn{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,l=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:o};const c=this;s=Math.floor(s),r=Math.floor(r);const f=[],p=[],d=[],h=[];let u=0;const _=[],g=i/2;let m=0;y(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(f),this.setAttribute("position",new ht(p,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(h,2));function y(){const S=new se,C=new se;let I=0;const b=(t-e)/i;for(let L=0;L<=r;L++){const B=[],N=L/r,H=N*(t-e)+e;for(let V=0;V<=s;V++){const Q=V/s,q=Q*o+l,ne=Math.sin(q),he=Math.cos(q);C.x=H*ne,C.y=-N*i+g,C.z=H*he,p.push(C.x,C.y,C.z),S.set(ne,b,he).normalize(),d.push(S.x,S.y,S.z),h.push(Q,1-N),B.push(u++)}_.push(B)}for(let L=0;L<s;L++)for(let B=0;B<r;B++){const N=_[B][L],H=_[B+1][L],V=_[B+1][L+1],Q=_[B][L+1];(e>0||B!==0)&&(f.push(N,H,Q),I+=3),(t>0||B!==r-1)&&(f.push(H,V,Q),I+=3)}c.addGroup(m,I,0),m+=I}function R(S){const C=u,I=new it,b=new se;let L=0;const B=S===!0?e:t,N=S===!0?1:-1;for(let V=1;V<=s;V++)p.push(0,g*N,0),d.push(0,N,0),h.push(.5,.5),u++;const H=u;for(let V=0;V<=s;V++){const q=V/s*o+l,ne=Math.cos(q),he=Math.sin(q);b.x=B*he,b.y=g*N,b.z=B*ne,p.push(b.x,b.y,b.z),d.push(0,N,0),I.x=ne*.5+.5,I.y=he*.5*N+.5,h.push(I.x,I.y),u++}for(let V=0;V<s;V++){const Q=C+V,q=H+V;S===!0?f.push(q,q+1,Q):f.push(q+1,q,Q),L+=3}c.addGroup(m,L,S===!0?1:2),m+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ii(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Di{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){lt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let l=0,o=r-1,c;for(;l<=o;)if(s=Math.floor(l+(o-l)/2),c=i[s]-a,c<0)l=s+1;else if(c>0)o=s-1;else{o=s;break}if(s=o,i[s]===a)return s/(r-1);const f=i[s],d=i[s+1]-f,h=(a-f)/d;return(s+h)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),l=this.getPoint(r),o=t||(a.isVector2?new it:new se);return o.copy(l).sub(a).normalize(),o}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new se,s=[],r=[],a=[],l=new se,o=new Tt;for(let h=0;h<=e;h++){const u=h/e;s[h]=this.getTangentAt(u,new se)}r[0]=new se,a[0]=new se;let c=Number.MAX_VALUE;const f=Math.abs(s[0].x),p=Math.abs(s[0].y),d=Math.abs(s[0].z);f<=c&&(c=f,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),d<=c&&i.set(0,0,1),l.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],l),a[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),a[h]=a[h-1].clone(),l.crossVectors(s[h-1],s[h]),l.length()>Number.EPSILON){l.normalize();const u=Math.acos(yt(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(o.makeRotationAxis(l,u))}a[h].crossVectors(s[h],r[h])}if(t===!0){let h=Math.acos(yt(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(l.crossVectors(r[0],r[e]))>0&&(h=-h);for(let u=1;u<=e;u++)r[u].applyMatrix4(o.makeRotationAxis(s[u],h*u)),a[u].crossVectors(s[u],r[u])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class df extends Di{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,l=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=l,this.aRotation=o}getPoint(e,t=new it){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const l=this.aStartAngle+e*r;let o=this.aX+this.xRadius*Math.cos(l),c=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const f=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=o-this.aX,h=c-this.aY;o=d*f-h*p+this.aX,c=d*p+h*f+this.aY}return i.set(o,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class eh extends df{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Hl(){let n=0,e=0,t=0,i=0;function s(r,a,l,o){n=r,e=l,t=-3*r+3*a-2*l-o,i=2*r-2*a+l+o}return{initCatmullRom:function(r,a,l,o,c){s(a,l,c*(l-r),c*(o-a))},initNonuniformCatmullRom:function(r,a,l,o,c,f,p){let d=(a-r)/c-(l-r)/(c+f)+(l-a)/f,h=(l-a)/f-(o-a)/(f+p)+(o-l)/p;d*=f,h*=f,s(a,l,d,h)},calc:function(r){const a=r*r,l=a*r;return n+e*r+t*a+i*l}}}const Mc=new se,bc=new se,ua=new Hl,fa=new Hl,da=new Hl;class hf extends Di{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new se){const i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let l=Math.floor(a),o=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:o===0&&l===r-1&&(l=r-2,o=1);let c,f;this.closed||l>0?c=s[(l-1)%r]:(bc.subVectors(s[0],s[1]).add(s[0]),c=bc);const p=s[l%r],d=s[(l+1)%r];if(this.closed||l+2<r?f=s[(l+2)%r]:(Mc.subVectors(s[r-1],s[r-2]).add(s[r-1]),f=Mc),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let u=Math.pow(c.distanceToSquared(p),h),_=Math.pow(p.distanceToSquared(d),h),g=Math.pow(d.distanceToSquared(f),h);_<1e-4&&(_=1),u<1e-4&&(u=_),g<1e-4&&(g=_),ua.initNonuniformCatmullRom(c.x,p.x,d.x,f.x,u,_,g),fa.initNonuniformCatmullRom(c.y,p.y,d.y,f.y,u,_,g),da.initNonuniformCatmullRom(c.z,p.z,d.z,f.z,u,_,g)}else this.curveType==="catmullrom"&&(ua.initCatmullRom(c.x,p.x,d.x,f.x,this.tension),fa.initCatmullRom(c.y,p.y,d.y,f.y,this.tension),da.initCatmullRom(c.z,p.z,d.z,f.z,this.tension));return i.set(ua.calc(o),fa.calc(o),da.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new se().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Sc(n,e,t,i,s){const r=(i-e)*.5,a=(s-t)*.5,l=n*n,o=n*l;return(2*t-2*i+r+a)*o+(-3*t+3*i-2*r-a)*l+r*n+t}function th(n,e){const t=1-n;return t*t*e}function nh(n,e){return 2*(1-n)*n*e}function ih(n,e){return n*n*e}function xr(n,e,t,i){return th(n,e)+nh(n,t)+ih(n,i)}function sh(n,e){const t=1-n;return t*t*t*e}function rh(n,e){const t=1-n;return 3*t*t*n*e}function oh(n,e){return 3*(1-n)*n*n*e}function ah(n,e){return n*n*n*e}function vr(n,e,t,i,s){return sh(n,e)+rh(n,t)+oh(n,i)+ah(n,s)}class lh extends Di{constructor(e=new it,t=new it,i=new it,s=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new it){const i=t,s=this.v0,r=this.v1,a=this.v2,l=this.v3;return i.set(vr(e,s.x,r.x,a.x,l.x),vr(e,s.y,r.y,a.y,l.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ch extends Di{constructor(e=new se,t=new se,i=new se,s=new se){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new se){const i=t,s=this.v0,r=this.v1,a=this.v2,l=this.v3;return i.set(vr(e,s.x,r.x,a.x,l.x),vr(e,s.y,r.y,a.y,l.y),vr(e,s.z,r.z,a.z,l.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class uh extends Di{constructor(e=new it,t=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new it){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new it){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fh extends Di{constructor(e=new se,t=new se){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new se){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dh extends Di{constructor(e=new it,t=new it,i=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new it){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(xr(e,s.x,r.x,a.x),xr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pf extends Di{constructor(e=new se,t=new se,i=new se){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new se){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(xr(e,s.x,r.x,a.x),xr(e,s.y,r.y,a.y),xr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hh extends Di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new it){const i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),l=r-a,o=s[a===0?a:a-1],c=s[a],f=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return i.set(Sc(l,o.x,c.x,f.x,p.x),Sc(l,o.y,c.y,f.y,p.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new it().fromArray(s))}return this}}var ph=Object.freeze({__proto__:null,ArcCurve:eh,CatmullRomCurve3:hf,CubicBezierCurve:lh,CubicBezierCurve3:ch,EllipseCurve:df,LineCurve:uh,LineCurve3:fh,QuadraticBezierCurve:dh,QuadraticBezierCurve3:pf,SplineCurve:hh});class Ri extends tn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,l=Math.floor(i),o=Math.floor(s),c=l+1,f=o+1,p=e/l,d=t/o,h=[],u=[],_=[],g=[];for(let m=0;m<f;m++){const y=m*d-a;for(let R=0;R<c;R++){const S=R*p-r;u.push(S,-y,0),_.push(0,0,1),g.push(R/l),g.push(1-m/o)}}for(let m=0;m<o;m++)for(let y=0;y<l;y++){const R=y+c*m,S=y+c*(m+1),C=y+1+c*(m+1),I=y+1+c*m;h.push(R,S,I),h.push(S,C,I)}this.setIndex(h),this.setAttribute("position",new ht(u,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ri(e.width,e.height,e.widthSegments,e.heightSegments)}}class Vi extends tn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const o=Math.min(a+l,Math.PI);let c=0;const f=[],p=new se,d=new se,h=[],u=[],_=[],g=[];for(let m=0;m<=i;m++){const y=[],R=m/i,S=a+R*l,C=e*Math.cos(S),I=Math.sqrt(e*e-C*C);let b=0;m===0&&a===0?b=.5/t:m===i&&o===Math.PI&&(b=-.5/t);for(let L=0;L<=t;L++){const B=L/t,N=s+B*r;p.x=-I*Math.cos(N),p.y=C,p.z=I*Math.sin(N),u.push(p.x,p.y,p.z),d.copy(p).normalize(),_.push(d.x,d.y,d.z),g.push(B+b,1-R),y.push(c++)}f.push(y)}for(let m=0;m<i;m++)for(let y=0;y<t;y++){const R=f[m][y+1],S=f[m][y],C=f[m+1][y],I=f[m+1][y+1];(m!==0||a>0)&&h.push(R,S,I),(m!==i-1||o<Math.PI)&&h.push(S,C,I)}this.setIndex(h),this.setAttribute("position",new ht(u,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Gl extends tn{constructor(e=new pf(new se(-1,-1,0),new se(-1,1,0),new se(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const l=new se,o=new se,c=new it;let f=new se;const p=[],d=[],h=[],u=[];_(),this.setIndex(u),this.setAttribute("position",new ht(p,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(h,2));function _(){for(let R=0;R<t;R++)g(R);g(r===!1?t:0),y(),m()}function g(R){f=e.getPointAt(R/t,f);const S=a.normals[R],C=a.binormals[R];for(let I=0;I<=s;I++){const b=I/s*Math.PI*2,L=Math.sin(b),B=-Math.cos(b);o.x=B*S.x+L*C.x,o.y=B*S.y+L*C.y,o.z=B*S.z+L*C.z,o.normalize(),d.push(o.x,o.y,o.z),l.x=f.x+i*o.x,l.y=f.y+i*o.y,l.z=f.z+i*o.z,p.push(l.x,l.y,l.z)}}function m(){for(let R=1;R<=t;R++)for(let S=1;S<=s;S++){const C=(s+1)*(R-1)+(S-1),I=(s+1)*R+(S-1),b=(s+1)*R+S,L=(s+1)*(R-1)+S;u.push(C,I,L),u.push(I,b,L)}}function y(){for(let R=0;R<=t;R++)for(let S=0;S<=s;S++)c.x=R/t,c.y=S/s,h.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Gl(new ph[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Ws(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(wc(s))s.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(wc(s[0])){const r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function gn(n){const e={};for(let t=0;t<n.length;t++){const i=Ws(n[t]);for(const s in i)e[s]=i[s]}return e}function wc(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function mh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function mf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const gh={clone:Ws,merge:gn};var xh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends qs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xh,this.fragmentShader=vh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=mh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ut().setHex(s.value);break;case"v2":this.uniforms[i].value=new it().fromArray(s.value);break;case"v3":this.uniforms[i].value=new se().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Bt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new dt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Tt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class _h extends $i{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xn extends qs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yh extends qs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Rl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mh extends qs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bh extends qs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Vl extends Xt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Sh extends Vl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ut(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ha=new Tt,Ec=new se,Tc=new se;class gf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ar,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Ec.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ec),Tc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){ha.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(ha,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,o=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Tr||e.reversedDepth?t.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+c,0,0,.5,.5,0,0,0,1),t.multiply(ha)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const jr=new se,Qr=new en,ei=new se;class xf extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(jr,Qr,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jr,Qr,ei.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(jr,Qr,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jr,Qr,ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Fi=new se,Ac=new it,Rc=new it;class Pn extends xf{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Co*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Co*2*Math.atan(Math.tan(Go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z)}getViewSize(e,t){return this.getViewBounds(e,Ac,Rc),t.subVectors(Rc,Ac)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Go*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const o=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/o,t-=a.offsetY*i/c,s*=a.width/o,i*=a.height/c}const l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class wh extends gf{constructor(){super(new Pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=Co*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class Eh extends Vl{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new wh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Th extends gf{constructor(){super(new Pn(90,1,.5,500)),this.isPointLightShadow=!0}}class vf extends Vl{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Th}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class _f extends xf{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,l=s+t,o=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,l-=f*this.view.offsetY,o=l-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const As=-90,Rs=1;class fl extends Xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Pn(As,Rs,e,t);s.layers=this.layers,this.add(s);const r=new Pn(As,Rs,e,t);r.layers=this.layers,this.add(r);const a=new Pn(As,Rs,e,t);a.layers=this.layers,this.add(a);const l=new Pn(As,Rs,e,t);l.layers=this.layers,this.add(l);const o=new Pn(As,Rs,e,t);o.layers=this.layers,this.add(o);const c=new Pn(As,Rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,l,o]=t;for(const c of t)this.remove(c);if(e===Kn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Tr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,l,o,c,f]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),u=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=_,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(p,d,h),e.xr.enabled=u,i.texture.needsPMREMUpdate=!0}}class Ah extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Cc(n,e,t,i){const s=Rh(i);switch(t){case Ku:return n*e;case Dl:return n*e/s.components*s.byteLength;case Il:return n*e/s.components*s.byteLength;case us:return n*e*2/s.components*s.byteLength;case Nl:return n*e*2/s.components*s.byteLength;case Ju:return n*e*3/s.components*s.byteLength;case oi:return n*e*4/s.components*s.byteLength;case Ul:return n*e*4/s.components*s.byteLength;case fo:case ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case po:case mo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case za:case ka:return Math.max(n,16)*Math.max(e,8)/4;case Ua:case Fa:return Math.max(n,8)*Math.max(e,8)/2;case Oa:case Ba:case Ga:case Va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ha:case So:case Wa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case $a:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ja:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Za:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ja:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Qa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case el:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case tl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case nl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case il:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case sl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case rl:case ol:case al:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ll:case cl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case wo:case ul:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Rh(n){switch(n){case Mn:case Xu:return{byteLength:1,components:1};case Er:case qu:case Zn:return{byteLength:2,components:1};case Pl:case Ll:return{byteLength:2,components:4};case fi:case Cl:case Yn:return{byteLength:4,components:1};case $u:case Yu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Al}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Al);function yf(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Ch(n){const e=new WeakMap;function t(l,o){const c=l.array,f=l.usage,p=c.byteLength,d=n.createBuffer();n.bindBuffer(o,d),n.bufferData(o,c,f),l.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:p}}function i(l,o,c){const f=o.array,p=o.updateRanges;if(n.bindBuffer(c,l),p.length===0)n.bufferSubData(c,0,f);else{p.sort((h,u)=>h.start-u.start);let d=0;for(let h=1;h<p.length;h++){const u=p[d],_=p[h];_.start<=u.start+u.count+1?u.count=Math.max(u.count,_.start+_.count-u.start):(++d,p[d]=_)}p.length=d+1;for(let h=0,u=p.length;h<u;h++){const _=p[h];n.bufferSubData(c,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}o.clearUpdateRanges()}o.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const o=e.get(l);o&&(n.deleteBuffer(o.buffer),e.delete(l))}function a(l,o){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const f=e.get(l);(!f||f.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const c=e.get(l);if(c===void 0)e.set(l,t(l,o));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,l,o),c.version=l.version}}return{get:s,remove:r,update:a}}var Ph=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lh=`#ifdef USE_ALPHAHASH
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
#endif`,Dh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ih=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zh=`#ifdef USE_AOMAP
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
#endif`,Fh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kh=`#ifdef USE_BATCHING
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
#endif`,Oh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vh=`#ifdef USE_IRIDESCENCE
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
#endif`,Wh=`#ifdef USE_BUMPMAP
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
#endif`,Xh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$h=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Qh=`#define PI 3.141592653589793
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
} // validated`,ep=`vec3 transformedNormal = objectNormal;
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
#endif`,tp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ip=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rp="gl_FragColor = linearToOutputTexel( gl_FragColor );",op=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ap=`#ifdef USE_ENVMAP
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
#endif`,lp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,cp=`#ifdef USE_ENVMAP
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
#endif`,up=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fp=`#ifdef USE_ENVMAP
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
#endif`,dp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gp=`#ifdef USE_GRADIENTMAP
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
}`,xp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Mp=`#ifdef USE_ENVMAP
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
#endif`,bp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tp=`PhysicalMaterial material;
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
#endif`,Ap=`uniform sampler2D dfgLUT;
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
}`,Rp=`
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
#endif`,Cp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lp=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Dp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ip=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Np=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Up=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Op=`#if defined( USE_POINTS_UV )
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
#endif`,Bp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vp=`#if defined( USE_MORPHCOLORS )
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
#endif`,Wp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xp=`#ifdef USE_MORPHTARGETS
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
#endif`,qp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$p=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,jp=`#ifdef USE_NORMALMAP
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
#endif`,Qp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,e0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,t0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,n0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,i0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,r0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,u0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,f0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,p0=`float getShadowMask() {
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
}`,m0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g0=`#ifdef USE_SKINNING
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
#endif`,x0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,v0=`#ifdef USE_SKINNING
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
#endif`,_0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,M0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,b0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,S0=`#ifdef USE_TRANSMISSION
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
#endif`,w0=`#ifdef USE_TRANSMISSION
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const C0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,P0=`uniform sampler2D t2D;
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
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D0=`uniform float backgroundBlurriness;
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
}`,I0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`#include <common>
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
}`,z0=`#if DEPTH_PACKING == 3200
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
}`,F0=`#define DISTANCE
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
}`,k0=`#define DISTANCE
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
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H0=`uniform float scale;
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
}`,G0=`uniform vec3 diffuse;
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
}`,V0=`#include <common>
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
}`,W0=`uniform vec3 diffuse;
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
}`,X0=`#define LAMBERT
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
}`,q0=`#define LAMBERT
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
}`,$0=`#define MATCAP
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
}`,Y0=`#define MATCAP
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
}`,K0=`#define NORMAL
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
}`,J0=`#define NORMAL
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
}`,Z0=`#define PHONG
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
}`,j0=`#define PHONG
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
}`,Q0=`#define STANDARD
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
}`,em=`#define STANDARD
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
}`,tm=`#define TOON
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
}`,nm=`#define TOON
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
}`,im=`uniform float size;
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
}`,sm=`uniform vec3 diffuse;
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
}`,rm=`#include <common>
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
}`,om=`uniform vec3 color;
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
}`,am=`uniform float rotation;
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
}`,lm=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:Ph,alphahash_pars_fragment:Lh,alphamap_fragment:Dh,alphamap_pars_fragment:Ih,alphatest_fragment:Nh,alphatest_pars_fragment:Uh,aomap_fragment:zh,aomap_pars_fragment:Fh,batching_pars_vertex:kh,batching_vertex:Oh,begin_vertex:Bh,beginnormal_vertex:Hh,bsdfs:Gh,iridescence_fragment:Vh,bumpmap_pars_fragment:Wh,clipping_planes_fragment:Xh,clipping_planes_pars_fragment:qh,clipping_planes_pars_vertex:$h,clipping_planes_vertex:Yh,color_fragment:Kh,color_pars_fragment:Jh,color_pars_vertex:Zh,color_vertex:jh,common:Qh,defaultnormal_vertex:ep,displacementmap_pars_vertex:tp,displacementmap_vertex:np,emissivemap_fragment:ip,emissivemap_pars_fragment:sp,colorspace_fragment:rp,colorspace_pars_fragment:op,envmap_fragment:ap,envmap_common_pars_fragment:lp,envmap_pars_fragment:cp,envmap_pars_vertex:up,envmap_physical_pars_fragment:Mp,envmap_vertex:fp,fog_vertex:dp,fog_pars_vertex:hp,fog_fragment:pp,fog_pars_fragment:mp,gradientmap_pars_fragment:gp,lightmap_pars_fragment:xp,lights_lambert_fragment:vp,lights_lambert_pars_fragment:_p,lights_pars_begin:yp,lights_toon_fragment:bp,lights_toon_pars_fragment:Sp,lights_phong_fragment:wp,lights_phong_pars_fragment:Ep,lights_physical_fragment:Tp,lights_physical_pars_fragment:Ap,lights_fragment_begin:Rp,lights_fragment_maps:Cp,lights_fragment_end:Pp,lightprobes_pars_fragment:Lp,logdepthbuf_fragment:Dp,logdepthbuf_pars_fragment:Ip,logdepthbuf_pars_vertex:Np,logdepthbuf_vertex:Up,map_fragment:zp,map_pars_fragment:Fp,map_particle_fragment:kp,map_particle_pars_fragment:Op,metalnessmap_fragment:Bp,metalnessmap_pars_fragment:Hp,morphinstance_vertex:Gp,morphcolor_vertex:Vp,morphnormal_vertex:Wp,morphtarget_pars_vertex:Xp,morphtarget_vertex:qp,normal_fragment_begin:$p,normal_fragment_maps:Yp,normal_pars_fragment:Kp,normal_pars_vertex:Jp,normal_vertex:Zp,normalmap_pars_fragment:jp,clearcoat_normal_fragment_begin:Qp,clearcoat_normal_fragment_maps:e0,clearcoat_pars_fragment:t0,iridescence_pars_fragment:n0,opaque_fragment:i0,packing:s0,premultiplied_alpha_fragment:r0,project_vertex:o0,dithering_fragment:a0,dithering_pars_fragment:l0,roughnessmap_fragment:c0,roughnessmap_pars_fragment:u0,shadowmap_pars_fragment:f0,shadowmap_pars_vertex:d0,shadowmap_vertex:h0,shadowmask_pars_fragment:p0,skinbase_vertex:m0,skinning_pars_vertex:g0,skinning_vertex:x0,skinnormal_vertex:v0,specularmap_fragment:_0,specularmap_pars_fragment:y0,tonemapping_fragment:M0,tonemapping_pars_fragment:b0,transmission_fragment:S0,transmission_pars_fragment:w0,uv_pars_fragment:E0,uv_pars_vertex:T0,uv_vertex:A0,worldpos_vertex:R0,background_vert:C0,background_frag:P0,backgroundCube_vert:L0,backgroundCube_frag:D0,cube_vert:I0,cube_frag:N0,depth_vert:U0,depth_frag:z0,distance_vert:F0,distance_frag:k0,equirect_vert:O0,equirect_frag:B0,linedashed_vert:H0,linedashed_frag:G0,meshbasic_vert:V0,meshbasic_frag:W0,meshlambert_vert:X0,meshlambert_frag:q0,meshmatcap_vert:$0,meshmatcap_frag:Y0,meshnormal_vert:K0,meshnormal_frag:J0,meshphong_vert:Z0,meshphong_frag:j0,meshphysical_vert:Q0,meshphysical_frag:em,meshtoon_vert:tm,meshtoon_frag:nm,points_vert:im,points_frag:sm,shadow_vert:rm,shadow_frag:om,sprite_vert:am,sprite_frag:lm},Xe={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},si={basic:{uniforms:gn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:gn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new ut(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:gn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:gn([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:gn([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new ut(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:gn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:gn([Xe.points,Xe.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:gn([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:gn([Xe.common,Xe.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:gn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:gn([Xe.sprite,Xe.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:gn([Xe.common,Xe.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:gn([Xe.lights,Xe.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};si.physical={uniforms:gn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new dt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const eo={r:0,b:0,g:0},cm=new Tt,Mf=new dt;Mf.set(-1,0,0,0,1,0,0,0,1);function um(n,e,t,i,s,r){const a=new ut(0);let l=s===!0?0:1,o,c,f=null,p=0,d=null;function h(y){let R=y.isScene===!0?y.background:null;if(R&&R.isTexture){const S=y.backgroundBlurriness>0;R=e.get(R,S)}return R}function u(y){let R=!1;const S=h(y);S===null?g(a,l):S&&S.isColor&&(g(S,1),R=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(y,R){const S=h(R);S&&S.isCubeTexture?(c===void 0&&(c=new xt(new Pt(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:Ws(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,I,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(cm.makeRotationFromEuler(R.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Mf),c.material.toneMapped=Mt.getTransfer(S.colorSpace)!==Lt,(f!==S||p!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=S,p=S.version,d=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(o===void 0&&(o=new xt(new Ri(2,2),new $i({name:"BackgroundMaterial",uniforms:Ws(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=S,o.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,o.material.toneMapped=Mt.getTransfer(S.colorSpace)!==Lt,S.matrixAutoUpdate===!0&&S.updateMatrix(),o.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||p!==S.version||d!==n.toneMapping)&&(o.material.needsUpdate=!0,f=S,p=S.version,d=n.toneMapping),o.layers.enableAll(),y.unshift(o,o.geometry,o.material,0,0,null))}function g(y,R){y.getRGB(eo,mf(n)),t.buffers.color.setClear(eo.r,eo.g,eo.b,R,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,R=1){a.set(y),l=R,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,g(a,l)},render:u,addToRenderList:_,dispose:m}}function fm(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function l(H,V,Q,q,ne){let he=!1;const re=p(H,q,Q,V);r!==re&&(r=re,c(r.object)),he=h(H,q,Q,ne),he&&u(H,q,Q,ne),ne!==null&&e.update(ne,n.ELEMENT_ARRAY_BUFFER),(he||a)&&(a=!1,S(H,V,Q,q),ne!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function o(){return n.createVertexArray()}function c(H){return n.bindVertexArray(H)}function f(H){return n.deleteVertexArray(H)}function p(H,V,Q,q){const ne=q.wireframe===!0;let he=i[V.id];he===void 0&&(he={},i[V.id]=he);const re=H.isInstancedMesh===!0?H.id:0;let Pe=he[re];Pe===void 0&&(Pe={},he[re]=Pe);let de=Pe[Q.id];de===void 0&&(de={},Pe[Q.id]=de);let be=de[ne];return be===void 0&&(be=d(o()),de[ne]=be),be}function d(H){const V=[],Q=[],q=[];for(let ne=0;ne<t;ne++)V[ne]=0,Q[ne]=0,q[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Q,attributeDivisors:q,object:H,attributes:{},index:null}}function h(H,V,Q,q){const ne=r.attributes,he=V.attributes;let re=0;const Pe=Q.getAttributes();for(const de in Pe)if(Pe[de].location>=0){const ge=ne[de];let Te=he[de];if(Te===void 0&&(de==="instanceMatrix"&&H.instanceMatrix&&(Te=H.instanceMatrix),de==="instanceColor"&&H.instanceColor&&(Te=H.instanceColor)),ge===void 0||ge.attribute!==Te||Te&&ge.data!==Te.data)return!0;re++}return r.attributesNum!==re||r.index!==q}function u(H,V,Q,q){const ne={},he=V.attributes;let re=0;const Pe=Q.getAttributes();for(const de in Pe)if(Pe[de].location>=0){let ge=he[de];ge===void 0&&(de==="instanceMatrix"&&H.instanceMatrix&&(ge=H.instanceMatrix),de==="instanceColor"&&H.instanceColor&&(ge=H.instanceColor));const Te={};Te.attribute=ge,ge&&ge.data&&(Te.data=ge.data),ne[de]=Te,re++}r.attributes=ne,r.attributesNum=re,r.index=q}function _(){const H=r.newAttributes;for(let V=0,Q=H.length;V<Q;V++)H[V]=0}function g(H){m(H,0)}function m(H,V){const Q=r.newAttributes,q=r.enabledAttributes,ne=r.attributeDivisors;Q[H]=1,q[H]===0&&(n.enableVertexAttribArray(H),q[H]=1),ne[H]!==V&&(n.vertexAttribDivisor(H,V),ne[H]=V)}function y(){const H=r.newAttributes,V=r.enabledAttributes;for(let Q=0,q=V.length;Q<q;Q++)V[Q]!==H[Q]&&(n.disableVertexAttribArray(Q),V[Q]=0)}function R(H,V,Q,q,ne,he,re){re===!0?n.vertexAttribIPointer(H,V,Q,ne,he):n.vertexAttribPointer(H,V,Q,q,ne,he)}function S(H,V,Q,q){_();const ne=q.attributes,he=Q.getAttributes(),re=V.defaultAttributeValues;for(const Pe in he){const de=he[Pe];if(de.location>=0){let be=ne[Pe];if(be===void 0&&(Pe==="instanceMatrix"&&H.instanceMatrix&&(be=H.instanceMatrix),Pe==="instanceColor"&&H.instanceColor&&(be=H.instanceColor)),be!==void 0){const ge=be.normalized,Te=be.itemSize,Be=e.get(be);if(Be===void 0)continue;const ye=Be.buffer,Ne=Be.type,Fe=Be.bytesPerElement,Oe=Ne===n.INT||Ne===n.UNSIGNED_INT||be.gpuType===Cl;if(be.isInterleavedBufferAttribute){const ke=be.data,Ke=ke.isInterleavedBuffer===!0?ke.stride:ke.itemSize,pt=be.offset;if(ke.isInstancedInterleavedBuffer||ke.isInstancedBufferAttribute){for(let He=0;He<de.locationSize;He++)m(de.location+He,ke.meshPerAttribute);H.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let He=0;He<de.locationSize;He++)g(de.location+He);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let He=0;He<de.locationSize;He++)R(de.location+He,Te/de.locationSize,Ne,ge,Ke*Fe,(pt+Te/de.locationSize*He)*Fe,Oe)}else{if(be.isInstancedBufferAttribute){for(let ke=0;ke<de.locationSize;ke++)m(de.location+ke,be.meshPerAttribute);H.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let ke=0;ke<de.locationSize;ke++)g(de.location+ke);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let ke=0;ke<de.locationSize;ke++)R(de.location+ke,Te/de.locationSize,Ne,ge,Te*Fe,Te/de.locationSize*ke*Fe,Oe)}}else if(re!==void 0){const ge=re[Pe];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(de.location,ge);break;case 3:n.vertexAttrib3fv(de.location,ge);break;case 4:n.vertexAttrib4fv(de.location,ge);break;default:n.vertexAttrib1fv(de.location,ge)}}}}y()}function C(){B();for(const H in i){const V=i[H];for(const Q in V){const q=V[Q];for(const ne in q){const he=q[ne];for(const re in he)f(he[re].object),delete he[re];delete q[ne]}}delete i[H]}}function I(H){if(i[H.id]===void 0)return;const V=i[H.id];for(const Q in V){const q=V[Q];for(const ne in q){const he=q[ne];for(const re in he)f(he[re].object),delete he[re];delete q[ne]}}delete i[H.id]}function b(H){for(const V in i){const Q=i[V];for(const q in Q){const ne=Q[q];if(ne[H.id]===void 0)continue;const he=ne[H.id];for(const re in he)f(he[re].object),delete he[re];delete ne[H.id]}}}function L(H){for(const V in i){const Q=i[V],q=H.isInstancedMesh===!0?H.id:0,ne=Q[q];if(ne!==void 0){for(const he in ne){const re=ne[he];for(const Pe in re)f(re[Pe].object),delete re[Pe];delete ne[he]}delete Q[q],Object.keys(Q).length===0&&delete i[V]}}}function B(){N(),a=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:B,resetDefaultState:N,dispose:C,releaseStatesOfGeometry:I,releaseStatesOfObject:L,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:g,disableUnusedAttributes:y}}function dm(n,e,t){let i;function s(o){i=o}function r(o,c){n.drawArrays(i,o,c),t.update(c,i,1)}function a(o,c,f){f!==0&&(n.drawArraysInstanced(i,o,c,f),t.update(c,i,f))}function l(o,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,o,0,c,0,f);let d=0;for(let h=0;h<f;h++)d+=c[h];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function hm(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(b){return!(b!==oi&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(b){const L=b===Zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Mn&&b!==Yn&&!L&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function o(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=o(c);f!==c&&(lt("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&p===!1;t.reversedDepthBuffer===!0&&p===!1&&lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&p===!0&&lt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=n.getParameter(n.MAX_SAMPLES),I=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:o,textureFormatReadable:a,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:h,maxVertexTextures:u,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:R,maxFragmentUniforms:S,maxSamples:C,samples:I}}function pm(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Gi,l=new dt,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const h=p.length!==0||d||i!==0||s;return s=d,i=p.length,h},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){t=f(p,d,0)},this.setState=function(p,d,h){const u=p.clippingPlanes,_=p.clipIntersection,g=p.clipShadows,m=n.get(p);if(!s||u===null||u.length===0||r&&!g)r?f(null):c();else{const y=r?0:i,R=y*4;let S=m.clippingState||null;o.value=S,S=f(u,d,R,h);for(let C=0;C!==R;++C)S[C]=t[C];m.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){o.value!==t&&(o.value=t,o.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(p,d,h,u){const _=p!==null?p.length:0;let g=null;if(_!==0){if(g=o.value,u!==!0||g===null){const m=h+_*4,y=d.matrixWorldInverse;l.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let R=0,S=h;R!==_;++R,S+=4)a.copy(p[R]).applyMatrix4(y,l),a.normal.toArray(g,S),g[S+3]=a.constant}o.value=g,o.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}class Wl extends Sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new cf(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pt(5,5,5),r=new $i({name:"CubemapFromEquirect",uniforms:Ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Os});r.uniforms.tEquirect.value=t;const a=new xt(s,r),l=t.minFilter;return t.minFilter===Pi&&(t.minFilter=bn),new fl(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const Pc=256,mm=3,gm=20,bf=256,Sf=16,xm=3,vm=new se,_m=new ut;class Rr{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new fl(1,10,null),this._boxMesh=new xt(new Pt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:l=vm}=r,o=this._renderer;this._setSize(a);const c=this._allocateTarget(),f=this._getSourceTarget(!0);t>0&&(f.texture.mipmapsAutoUpdate=!1);const p=o.autoClear,d=o.autoClearColor,h=o.autoClearDepth,u=o.autoClearStencil,_=e.background;o.autoClear=!0,o.autoClearColor=!0,o.autoClearDepth=!0,o.autoClearStencil=!0,_===null&&(e.background=o.getClearColor(_m));const g=new fl(i,s,f);return g.position.copy(l),g.update(o,e),o.autoClear=p,o.autoClearColor=d,o.autoClearDepth=h,o.autoClearStencil=u,e.background=_,t>0&&(f.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Pc,Rd(e))}_fromTexture(e,t){e.mapping===Hs||e.mapping===Sr?this._setSize(e.image.length===0?Pc:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,t=Lc(e,!1,!1),i=Math.log2(e)-mm;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Lc(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){const s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Hs||e.mapping===Sr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ic()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Dc()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=ym(),this._integrationMaterial=Mm());const t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Sf);for(let a=0;a<=i;a++){const l=Rr.lodToRoughness(a,i);if(a>i-xm)r.roughness.value=l,this._renderCube(e,a,this._integrationMaterial);else{const o=l>0?Math.log2(t)+.5*Math.log2(6/(bf*Math.pow(l,4)))+.5:0;s.roughness.value=l,s.lodBias.value=o,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=bm());const i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}}function Lc(n,e,t){return new Wl(n,{minFilter:Pi,generateMipmaps:e,type:Zn,colorSpace:To,depthBuffer:t})}function Lr(n,e,t){return new $i({name:n,uniforms:e,vertexShader:mt.cube_vert,fragmentShader:t,side:_n,blending:Os,depthTest:!1,depthWrite:!1})}function ym(){return Lr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${bf}u

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
	`)}function Mm(){return Lr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Sf}},`

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
	`)}function bm(){return Lr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${gm}
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
	`)}function Dc(){return Lr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Ic(){return Lr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Sm(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,h=!1){return d==null?null:h?a(d):r(d)}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===ko||h===Oo)if(e.has(d)){const u=e.get(d).texture;return l(u,d.mapping)}else{const u=d.image;if(u&&u.height>0){const _=new Wl(u.height);return _.fromEquirectangularTexture(n,d),e.set(d,_),d.addEventListener("dispose",c),l(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const h=d.mapping,u=h===ko||h===Oo,_=h===Hs||h===Sr;if(u||_){let g=t.get(d);const m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new Rr(n)),g=u?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const y=d.image;return u&&y&&y.height>0||_&&y&&o(y)?(i===null&&(i=new Rr(n)),g=u?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",f),g.texture):null}}}return d}function l(d,h){return h===ko?d.mapping=Hs:h===Oo&&(d.mapping=Sr),d}function o(d){let h=0;const u=6;for(let _=0;_<u;_++)d[_]!==void 0&&h++;return h===u}function c(d){const h=d.target;h.removeEventListener("dispose",c);const u=e.get(h);u!==void 0&&(e.delete(h),u.dispose())}function f(d){const h=d.target;h.removeEventListener("dispose",f);const u=t.get(h);u!==void 0&&(t.delete(h),u.dispose())}function p(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function wm(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&go("WebGLRenderer: "+i+" extension not supported."),s}}}function Em(n,e,t,i){const s={},r=new WeakMap,a=new FinalizationRegistry(u=>delete s[u]);function l(u){o(u.target)}function o(u){u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",l),delete s[u.id],a.unregister(u);const _=r.get(u);_&&(e.remove(_),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function c(u,_){return s[_.id]!==void 0||(_.addEventListener("dispose",l),s[_.id]=new WeakRef(_),a.register(_,_.id,_),t.memory.geometries++),_}function f(u){const _=u.attributes;for(const g in _)e.update(_[g],n.ARRAY_BUFFER)}function p(u){const _=u.index,g=u.attributes.position;let m=0;if(g===void 0)return;const y=_!==null?_.array.length:g.array.length/3-1,R=g.count>=65535?af:of,S=new R(Math.ceil(y/3)*6,1),C=S.array;if(_!==null){const b=_.array;m=_.version;for(let L=0,B=0;L<y;L+=3){const N=b[L+0],H=b[L+1],V=b[L+2];C[B++]=N,C[B++]=H,C[B++]=H,C[B++]=V,C[B++]=V,C[B++]=N}}else{m=g.version;for(let b=0,L=0;b<y;b+=3){const B=b+0,N=b+1,H=b+2;C[L++]=B,C[L++]=N,C[L++]=N,C[L++]=H,C[L++]=H,C[L++]=B}}S.version=m;const I=r.get(u);I&&e.remove(I),r.set(u,S)}function d(u){const _=r.get(u);if(_){const g=u.index;g!==null&&_.version<g.version&&p(u)}else p(u);return r.get(u)}function h(){for(const u in s){const _=s[u].deref();_!==void 0&&o(_)}}return{get:c,update:f,getWireframeAttribute:d,dispose:h}}function Tm(n,e,t){let i;function s(p){i=p}let r,a;function l(p){r=p.type,a=p.bytesPerElement}function o(p,d){n.drawElements(i,d,r,p*a),t.update(d,i,1)}function c(p,d,h){h!==0&&(n.drawElementsInstanced(i,d,r,p*a,h),t.update(d,i,h))}function f(p,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,p,0,h);let _=0;for(let g=0;g<h;g++)_+=d[g];t.update(_,i,1)}this.setMode=s,this.setIndex=l,this.render=o,this.renderInstances=c,this.renderMultiDraw=f}function Am(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,l){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=l*(r/3);break;case n.LINES:t.lines+=l*(r/2);break;case n.LINE_STRIP:t.lines+=l*(r-1);break;case n.LINE_LOOP:t.lines+=l*r;break;case n.POINTS:t.points+=l*r;break;default:Et("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Rm(n,e,t){const i=new WeakMap,s=new Bt;function r(a,l,o){const c=a.morphTargetInfluences,f=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=f!==void 0?f.length:0;let d=i.get(l);if(d===void 0||d.count!==p){let B=function(){b.dispose(),i.delete(l),l.removeEventListener("dispose",B)};d!==void 0&&d.texture.dispose();const h=l.morphAttributes.position!==void 0,u=l.morphAttributes.normal!==void 0,_=l.morphAttributes.color!==void 0,g=l.morphAttributes.position||[],m=l.morphAttributes.normal||[],y=l.morphAttributes.color||[];let R=0;h===!0&&(R=1),u===!0&&(R=2),_===!0&&(R=3);let S=l.attributes.position.count*R,C=1;S>e.maxTextureSize&&(C=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const I=new Float32Array(S*C*4*p),b=new tf(I,S,C,p);b.type=Yn,b.needsUpdate=!0;const L=R*4;for(let N=0;N<p;N++){const H=g[N],V=m[N],Q=y[N],q=S*C*4*N;for(let ne=0;ne<H.count;ne++){const he=ne*L;h===!0&&(s.fromBufferAttribute(H,ne),I[q+he+0]=s.x,I[q+he+1]=s.y,I[q+he+2]=s.z,I[q+he+3]=0),u===!0&&(s.fromBufferAttribute(V,ne),I[q+he+4]=s.x,I[q+he+5]=s.y,I[q+he+6]=s.z,I[q+he+7]=0),_===!0&&(s.fromBufferAttribute(Q,ne),I[q+he+8]=s.x,I[q+he+9]=s.y,I[q+he+10]=s.z,I[q+he+11]=Q.itemSize===4?s.w:1)}}d={count:p,texture:b,size:new it(S,C)},i.set(l,d),l.addEventListener("dispose",B)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)o.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let h=0;for(let _=0;_<c.length;_++)h+=c[_];const u=l.morphTargetsRelative?1:1-h;o.getUniforms().setValue(n,"morphTargetBaseInfluence",u),o.getUniforms().setValue(n,"morphTargetInfluences",c)}o.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),o.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Cm(n,e,t,i,s){let r=new WeakMap;function a(c){const f=s.render.frame,p=c.geometry,d=e.get(c,p);if(r.get(d)!==f&&(e.update(d),r.set(d,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==f&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==f&&(h.update(),r.set(h,f))}return d}function l(){r=new WeakMap}function o(c){const f=c.target;f.removeEventListener("dispose",o),i.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:l}}const Pm={[Fu]:"LINEAR_TONE_MAPPING",[ku]:"REINHARD_TONE_MAPPING",[Ou]:"CINEON_TONE_MAPPING",[Bu]:"ACES_FILMIC_TONE_MAPPING",[Gu]:"AGX_TONE_MAPPING",[Vu]:"NEUTRAL_TONE_MAPPING",[Hu]:"CUSTOM_TONE_MAPPING"};function Lm(n,e,t,i,s,r){const a=new Sn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let l=null,o=null,c=null;const f=new tn;f.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new ht([0,2,0,0,2,0],2));const p=new _h({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new xt(f,p),h=new _f(-1,1,1,-1,0,1);let u=null,_=null,g=!1,m,y=null,R=[],S=!1;this.setSize=function(C,I){a.setSize(C,I),l!==null&&l.setSize(C,I),o!==null&&o.setSize(C,I);for(let b=0;b<R.length;b++){const L=R[b];L.setSize&&L.setSize(C,I)}},this.setEffects=function(C){R=C,S=R.length>0&&R[0].isRenderPass===!0;const I=a.width,b=a.height;R.length>0&&l===null&&(l=new Sn(I,b,{type:Zn,depthBuffer:!1,stencilBuffer:!1}),o=new Sn(I,b,{type:Zn,depthBuffer:!1,stencilBuffer:!1}));const L=s===!0&&R.some(B=>B.needsDepthTexture===!0);L!==(a.depthTexture!==null)&&(L===!0&&c===null&&(c=new Vs(I,b),r===!0&&(c.format=Xi,c.type=Gs)),a.dispose(),a.depthTexture=L?c:null,a.resolveDepthBuffer=L,a.storeMultisampledDepthBuffer=L);for(let B=0;B<R.length;B++){const N=R[B];N.setSize&&N.setSize(I,b),L&&N.needsDepthTexture===!0&&N.setDepthTexture&&N.setDepthTexture(c)}},this.begin=function(C,I){if(g||C.toneMapping===ci&&R.length===0)return!1;if(y=I,I!==null){const b=I.width,L=I.height;(a.width!==b||a.height!==L)&&this.setSize(b,L)}return S===!1&&C.setRenderTarget(a),m=C.toneMapping,C.toneMapping=ci,!0},this.hasRenderPass=function(){return S},this.end=function(C,I){C.toneMapping=m,g=!0;let b=a,L=l;for(let B=0;B<R.length;B++){const N=R[B];N.enabled!==!1&&(N.render(C,L,b,I),N.needsSwap!==!1&&(b=L,L=L===l?o:l))}if(u!==C.outputColorSpace||_!==C.toneMapping){u=C.outputColorSpace,_=C.toneMapping,p.defines={},Mt.getTransfer(u)===Lt&&(p.defines.SRGB_TRANSFER="");const B=Pm[_];B&&(p.defines[B]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=b.texture,C.setRenderTarget(y),C.render(d,h),y=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),o!==null&&o.dispose(),f.dispose(),p.dispose()}}const wf=new hn,Ef=new Vs(1,1),Tf=new uf(1),Af=new tf,Rf=new zd,Cf=new cf,Nc=[],Uc=[],zc=new Float32Array(16),Fc=new Float32Array(9),kc=new Float32Array(4);function $s(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Nc[s];if(r===void 0&&(r=new Float32Array(s),Nc[s]=r),e!==0){i.toArray(r,0);for(let a=1,l=0;a!==e;++a)l+=t,n[a].toArray(r,l)}return r}function Yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Uo(n,e){let t=Uc[e];t===void 0&&(t=new Int32Array(e),Uc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Dm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Im(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2fv(this.addr,e),Kt(t,e)}}function Nm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;n.uniform3fv(this.addr,e),Kt(t,e)}}function Um(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4fv(this.addr,e),Kt(t,e)}}function zm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,i))return;kc.set(i),n.uniformMatrix2fv(this.addr,!1,kc),Kt(t,i)}}function Fm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,i))return;Fc.set(i),n.uniformMatrix3fv(this.addr,!1,Fc),Kt(t,i)}}function km(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,i))return;zc.set(i),n.uniformMatrix4fv(this.addr,!1,zc),Kt(t,i)}}function Om(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Bm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2iv(this.addr,e),Kt(t,e)}}function Hm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3iv(this.addr,e),Kt(t,e)}}function Gm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4iv(this.addr,e),Kt(t,e)}}function Vm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Wm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2uiv(this.addr,e),Kt(t,e)}}function Xm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3uiv(this.addr,e),Kt(t,e)}}function qm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4uiv(this.addr,e),Kt(t,e)}}function zo(n){return n.version===0&&(n.compareFunction=Qu,n.needsUpdate=!0),n}function $m(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=zo(Ef):r=wf,t.setTexture2D(e||r,s)}function Ym(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Rf,s)}function Km(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=zo(Tf):r=Cf,t.setTextureCube(e||r,s)}function Jm(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Af,s)}function Zm(n){switch(n){case 5126:return Dm;case 35664:return Im;case 35665:return Nm;case 35666:return Um;case 35674:return zm;case 35675:return Fm;case 35676:return km;case 5124:case 35670:return Om;case 35667:case 35671:return Bm;case 35668:case 35672:return Hm;case 35669:case 35673:return Gm;case 5125:return Vm;case 36294:return Wm;case 36295:return Xm;case 36296:return qm;case 35678:case 36198:case 36298:case 36306:case 35682:return $m;case 35679:case 36299:case 36307:return Ym;case 35680:case 36300:case 36308:case 36293:return Km;case 36289:case 36303:case 36311:case 36292:return Jm}}function jm(n,e){n.uniform1fv(this.addr,e)}function Qm(n,e){const t=$s(e,this.size,2);n.uniform2fv(this.addr,t)}function eg(n,e){const t=$s(e,this.size,3);n.uniform3fv(this.addr,t)}function tg(n,e){const t=$s(e,this.size,4);n.uniform4fv(this.addr,t)}function ng(n,e){const t=$s(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ig(n,e){const t=$s(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function sg(n,e){const t=$s(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function rg(n,e){n.uniform1iv(this.addr,e)}function og(n,e){n.uniform2iv(this.addr,e)}function ag(n,e){n.uniform3iv(this.addr,e)}function lg(n,e){n.uniform4iv(this.addr,e)}function cg(n,e){n.uniform1uiv(this.addr,e)}function ug(n,e){n.uniform2uiv(this.addr,e)}function fg(n,e){n.uniform3uiv(this.addr,e)}function dg(n,e){n.uniform4uiv(this.addr,e)}function hg(n,e,t){const i=this.cache,s=e.length,r=Uo(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=zo(Ef):a=wf;for(let l=0;l!==s;++l)t.setTexture2D(e[l]||a,r[l])}function pg(n,e,t){const i=this.cache,s=e.length,r=Uo(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Rf,r[a])}function mg(n,e,t){const i=this.cache,s=e.length,r=Uo(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=zo(Tf):a=Cf;for(let l=0;l!==s;++l)t.setTextureCube(e[l]||a,r[l])}function gg(n,e,t){const i=this.cache,s=e.length,r=Uo(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Af,r[a])}function xg(n){switch(n){case 5126:return jm;case 35664:return Qm;case 35665:return eg;case 35666:return tg;case 35674:return ng;case 35675:return ig;case 35676:return sg;case 5124:case 35670:return rg;case 35667:case 35671:return og;case 35668:case 35672:return ag;case 35669:case 35673:return lg;case 5125:return cg;case 36294:return ug;case 36295:return fg;case 36296:return dg;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return pg;case 35680:case 36300:case 36308:case 36293:return mg;case 36289:case 36303:case 36311:case 36292:return gg}}class vg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Zm(t.type)}}class _g{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xg(t.type)}}class yg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const l=s[r];l.setValue(e,t[l.id],i)}}}const pa=/(\w+)(\])?(\[|\.)?/g;function Oc(n,e){n.seq.push(e),n.map[e.id]=e}function Mg(n,e,t){const i=n.name,s=i.length;for(pa.lastIndex=0;;){const r=pa.exec(i),a=pa.lastIndex;let l=r[1];const o=r[2]==="]",c=r[3];if(o&&(l=l|0),c===void 0||c==="["&&a+2===s){Oc(t,c===void 0?new vg(l,n,e):new _g(l,n,e));break}else{let p=t.map[l];p===void 0&&(p=new yg(l),Oc(t,p)),t=p}}}class vo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const l=e.getActiveUniform(t,a),o=e.getUniformLocation(t,l.name);Mg(l,o,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const l=t[r],o=i[l.id];o.needsUpdate!==!1&&l.setValue(e,o.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Bc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const bg=37297;let Sg=0;function wg(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const l=a+1;i.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return i.join(`
`)}const Hc=new dt;function Eg(n){Mt._getMatrix(Hc,Mt.workingColorSpace,n);const e=`mat3( ${Hc.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(n)){case Ao:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Gc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+wg(n.getShaderSource(e),l)}else return r}function Tg(n,e){const t=Eg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Ag={[Fu]:"Linear",[ku]:"Reinhard",[Ou]:"Cineon",[Bu]:"ACESFilmic",[Gu]:"AgX",[Vu]:"Neutral",[Hu]:"Custom"};function Rg(n,e){const t=Ag[e];return t===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const to=new se;function Cg(){Mt.getLuminanceCoefficients(to);const n=to.x.toFixed(4),e=to.y.toFixed(4),t=to.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function Lg(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Dg(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let l=1;r.type===n.FLOAT_MAT2&&(l=2),r.type===n.FLOAT_MAT3&&(l=3),r.type===n.FLOAT_MAT4&&(l=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:l}}return t}function dr(n){return n!==""}function Vc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Wc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ig=/^[ \t]*#include +<([\w\d./]+)>/gm;function dl(n){return n.replace(Ig,Ng)}function Ng(n,e){const t=mt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return dl(t)}const Ug=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xc(n){return n.replace(Ug,zg)}function zg(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qc(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const Fg={[mr]:"SHADOWMAP_TYPE_PCF",[fr]:"SHADOWMAP_TYPE_VSM"};function kg(n){return Fg[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Og={[Sr]:"ENVMAP_MODE_REFRACTION"};function Bg(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Og[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Hg={[Rl]:"ENVMAP_BLENDING_MULTIPLY",[fd]:"ENVMAP_BLENDING_MIX",[dd]:"ENVMAP_BLENDING_ADD"};function Gg(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Hg[n.combine]||"ENVMAP_BLENDING_NONE"}function Vg(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,l=t.fragmentShader;const o=kg(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",f=Bg(t),p=Gg(t),d=Pg(t),h=Lg(r),u=s.createProgram();let _,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(dr).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(dr).join(`
`),g.length>0&&(g+=`
`)):(_=[qc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),g=[qc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ci?"#define TONE_MAPPING":"",t.toneMapping!==ci?mt.tonemapping_pars_fragment:"",t.toneMapping!==ci?Rg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,Tg("linearToOutputTexel",t.outputColorSpace),Cg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),a=dl(a),a=Vc(a,t),a=Wc(a,t),l=dl(l),l=Vc(l,t),l=Wc(l,t),a=Xc(a),l=Xc(l),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",t.glslVersion===ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=m+_+a,R=m+g+l,S=Bc(s,s.VERTEX_SHADER,y),C=Bc(s,s.FRAGMENT_SHADER,R);s.attachShader(u,S),s.attachShader(u,C),t.index0AttributeName!==void 0?s.bindAttribLocation(u,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(u,0,"position"),s.linkProgram(u);function I(N){if(n.debug.checkShaderErrors){const H=s.getProgramInfoLog(u)||"",V=s.getShaderInfoLog(S)||"",Q=s.getShaderInfoLog(C)||"",q=H.trim(),ne=V.trim(),he=Q.trim();let re=!0,Pe=!0;if(s.getProgramParameter(u,s.LINK_STATUS)===!1)if(re=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,u,S,C);else{const de=Gc(s,S,"vertex"),be=Gc(s,C,"fragment");Et("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(u,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+q+`
`+de+`
`+be)}else q!==""?lt("WebGLProgram: Program Info Log:",q):(ne===""||he==="")&&(Pe=!1);Pe&&(N.diagnostics={runnable:re,programLog:q,vertexShader:{log:ne,prefix:_},fragmentShader:{log:he,prefix:g}})}s.deleteShader(S),s.deleteShader(C),b=new vo(s,u),L=Dg(s,u)}let b;this.getUniforms=function(){return b===void 0&&I(this),b};let L;this.getAttributes=function(){return L===void 0&&I(this),L};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(u,bg)),B},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(u),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sg++,this.cacheKey=e,this.usedTimes=1,this.program=u,this.vertexShader=S,this.fragmentShader=C,this}let Wg=0;class Xg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new qg(e),t.set(e,i)),i}}class qg{constructor(e){this.id=Wg++,this.code=e,this.usedTimes=0}}function $g(n){return n===us||n===So||n===wo}function Yg(n,e,t,i,s,r){const a=new nf,l=new Xg,o=new Set,c=[],f=new Map,p=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(b){return o.add(b),b===0?"uv":`uv${b}`}function u(b,L,B,N,H,V){const Q=N.fog,q=H.geometry,ne=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?N.environment:null,he=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,re=e.get(b.envMap||ne,he),Pe=d[b.type];let de=i.precision;b.precision!==null&&(de=i.getMaxPrecision(b.precision),de!==b.precision&&lt("WebGLProgram.getParameters:",b.precision,"not supported, using",de,"instead."));const be=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ge=be!==void 0?be.length:0;let Te=0;q.morphAttributes.position!==void 0&&(Te=1),q.morphAttributes.normal!==void 0&&(Te=2),q.morphAttributes.color!==void 0&&(Te=3);let Be,ye,Ne,Fe;if(Pe){const We=si[Pe];Be=We.vertexShader,ye=We.fragmentShader}else{Be=b.vertexShader,ye=b.fragmentShader;const We=l.getVertexShaderStage(b),_t=l.getFragmentShaderStage(b);l.update(b,We,_t),Ne=We.id,Fe=_t.id}const Oe=n.getRenderTarget(),ke=n.state.buffers.depth.getReversed(),Ke=H.isInstancedMesh===!0,pt=H.isBatchedMesh===!0,He=!!b.map,Je=!!b.matcap,nt=!!re,Qe=nt&&re.isPMREMTexture===!0,vt=!!b.aoMap,ot=!!b.lightMap,bt=!!b.bumpMap&&b.wireframe===!1,st=!!b.normalMap,zt=!!b.displacementMap,Ie=!!b.emissiveMap,De=!!b.metalnessMap,$e=!!b.roughnessMap,Ze=b.anisotropy>0,D=b.clearcoat>0,w=b.diffuseRoughness>0,k=b.dispersion>0,K=b.retroreflectivity>0,X=b.iridescence>0,ce=b.sheen>0,xe=b.transmission>0,me=Ze&&!!b.anisotropyMap,A=D&&!!b.clearcoatMap,T=D&&!!b.clearcoatNormalMap,Z=D&&!!b.clearcoatRoughnessMap,Me=w&&!!b.diffuseRoughnessMap,ee=X&&!!b.iridescenceMap,ve=X&&!!b.iridescenceThicknessMap,we=ce&&!!b.sheenColorMap,pe=ce&&!!b.sheenRoughnessMap,ue=!!b.specularMap,Le=!!b.specularColorMap,$=!!b.specularIntensityMap,Ae=xe&&!!b.transmissionMap,oe=xe&&!!b.thicknessMap,Ue=!!b.gradientMap,Ce=!!b.alphaMap,Re=b.alphaTest>0,Ge=!!b.alphaHash,tt=!!b.extensions;let ze=ci;b.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(ze=n.toneMapping);const je=Qe?re.isCompressedCubeTexture?re.image[0].mipmaps:re.mipmaps:null,ct={shaderID:Pe,shaderType:b.type,shaderName:b.name,vertexShader:Be,fragmentShader:ye,defines:b.defines,customVertexShaderID:Ne,customFragmentShaderID:Fe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:de,batching:pt,batchingColor:pt&&H._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&H.instanceColor!==null,instancingMorph:Ke&&H.morphTexture!==null,outputColorSpace:Oe===null?n.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:Mt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:He,matcap:Je,envMap:nt,envMapMode:nt&&re.mapping,envMapPMREM:Qe,envMapMaxLod:Qe?je.length-1:null,envMapSize:Qe?je[0].width:null,aoMap:vt,lightMap:ot,bumpMap:bt,normalMap:st,displacementMap:zt,emissiveMap:Ie,normalMapObjectSpace:st&&b.normalMapType===md,normalMapTangentSpace:st&&b.normalMapType===Eo,packedNormalMap:st&&b.normalMapType===Eo&&$g(b.normalMap.format),metalnessMap:De,roughnessMap:$e,anisotropy:Ze,anisotropyMap:me,clearcoat:D,clearcoatMap:A,clearcoatNormalMap:T,clearcoatRoughnessMap:Z,diffuseRoughness:w,diffuseRoughnessMap:Me,dispersion:k,retroreflection:K,iridescence:X,iridescenceMap:ee,iridescenceThicknessMap:ve,sheen:ce,sheenColorMap:we,sheenRoughnessMap:pe,specularMap:ue,specularColorMap:Le,specularIntensityMap:$,transmission:xe,transmissionMap:Ae,thicknessMap:oe,gradientMap:Ue,opaque:b.transparent===!1&&b.blending===gr&&b.alphaToCoverage===!1,alphaMap:Ce,alphaTest:Re,alphaHash:Ge,combine:b.combine,mapUv:He&&h(b.map.channel),aoMapUv:vt&&h(b.aoMap.channel),lightMapUv:ot&&h(b.lightMap.channel),bumpMapUv:bt&&h(b.bumpMap.channel),normalMapUv:st&&h(b.normalMap.channel),displacementMapUv:zt&&h(b.displacementMap.channel),emissiveMapUv:Ie&&h(b.emissiveMap.channel),metalnessMapUv:De&&h(b.metalnessMap.channel),roughnessMapUv:$e&&h(b.roughnessMap.channel),anisotropyMapUv:me&&h(b.anisotropyMap.channel),clearcoatMapUv:A&&h(b.clearcoatMap.channel),clearcoatNormalMapUv:T&&h(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&h(b.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Me&&h(b.diffuseRoughnessMap.channel),iridescenceMapUv:ee&&h(b.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&h(b.iridescenceThicknessMap.channel),sheenColorMapUv:we&&h(b.sheenColorMap.channel),sheenRoughnessMapUv:pe&&h(b.sheenRoughnessMap.channel),specularMapUv:ue&&h(b.specularMap.channel),specularColorMapUv:Le&&h(b.specularColorMap.channel),specularIntensityMapUv:$&&h(b.specularIntensityMap.channel),transmissionMapUv:Ae&&h(b.transmissionMap.channel),thicknessMapUv:oe&&h(b.thicknessMap.channel),alphaMapUv:Ce&&h(b.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(st||Ze),vertexNormals:!!q.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!q.attributes.uv&&(He||Ce),fog:!!Q,useFog:b.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||q.attributes.normal===void 0&&st===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ke,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Te,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:V.filter(We=>We.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:ze,decodeVideoTexture:He&&b.map.isVideoTexture===!0&&Mt.getTransfer(b.map.colorSpace)===Lt,decodeVideoTextureEmissive:Ie&&b.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(b.emissiveMap.colorSpace)===Lt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ti,flipSided:b.side===_n,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:tt&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&b.extensions.multiDraw===!0||pt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ct.vertexUv1s=o.has(1),ct.vertexUv2s=o.has(2),ct.vertexUv3s=o.has(3),o.clear(),ct}function _(b){const L=[];if(b.shaderID?L.push(b.shaderID):(L.push(b.customVertexShaderID),L.push(b.customFragmentShaderID)),b.defines!==void 0)for(const B in b.defines)L.push(B),L.push(b.defines[B]);return b.isRawShaderMaterial===!1&&(g(L,b),m(L,b),L.push(n.outputColorSpace)),L.push(b.customProgramCacheKey),L.join()}function g(b,L){b.push(L.precision),b.push(L.outputColorSpace),b.push(L.envMapMode),b.push(L.envMapPMREM),b.push(L.envMapMaxLod),b.push(L.envMapSize),b.push(L.mapUv),b.push(L.alphaMapUv),b.push(L.lightMapUv),b.push(L.aoMapUv),b.push(L.bumpMapUv),b.push(L.normalMapUv),b.push(L.displacementMapUv),b.push(L.emissiveMapUv),b.push(L.metalnessMapUv),b.push(L.roughnessMapUv),b.push(L.anisotropyMapUv),b.push(L.clearcoatMapUv),b.push(L.clearcoatNormalMapUv),b.push(L.clearcoatRoughnessMapUv),b.push(L.diffuseRoughnessMapUv),b.push(L.iridescenceMapUv),b.push(L.iridescenceThicknessMapUv),b.push(L.sheenColorMapUv),b.push(L.sheenRoughnessMapUv),b.push(L.specularMapUv),b.push(L.specularColorMapUv),b.push(L.specularIntensityMapUv),b.push(L.transmissionMapUv),b.push(L.thicknessMapUv),b.push(L.combine),b.push(L.fogExp2),b.push(L.sizeAttenuation),b.push(L.morphTargetsCount),b.push(L.numSunLights),b.push(L.numDirLights),b.push(L.numPointLights),b.push(L.numSpotLights),b.push(L.numSpotLightMaps),b.push(L.numHemiLights),b.push(L.numRectAreaLights),b.push(L.numSunLightShadows),b.push(L.numDirLightShadows),b.push(L.numPointLightShadows),b.push(L.numSpotLightShadows),b.push(L.numSpotLightShadowsWithMaps),b.push(L.numLightProbes),b.push(L.numLightProbeGrids),b.push(L.shadowMapType),b.push(L.toneMapping),b.push(L.numClippingPlanes),b.push(L.numClipIntersection),b.push(L.depthPacking)}function m(b,L){a.disableAll(),L.instancing&&a.enable(0),L.instancingColor&&a.enable(1),L.instancingMorph&&a.enable(2),L.matcap&&a.enable(3),L.envMap&&a.enable(4),L.normalMapObjectSpace&&a.enable(5),L.normalMapTangentSpace&&a.enable(6),L.clearcoat&&a.enable(7),L.iridescence&&a.enable(8),L.alphaTest&&a.enable(9),L.vertexColors&&a.enable(10),L.vertexAlphas&&a.enable(11),L.vertexUv1s&&a.enable(12),L.vertexUv2s&&a.enable(13),L.vertexUv3s&&a.enable(14),L.vertexTangents&&a.enable(15),L.anisotropy&&a.enable(16),L.alphaHash&&a.enable(17),L.batching&&a.enable(18),L.dispersion&&a.enable(19),L.retroreflection&&a.enable(24),L.diffuseRoughness&&a.enable(25),L.batchingColor&&a.enable(20),L.gradientMap&&a.enable(21),L.packedNormalMap&&a.enable(22),L.vertexNormals&&a.enable(23),b.push(a.mask),a.disableAll(),L.fog&&a.enable(0),L.useFog&&a.enable(1),L.flatShading&&a.enable(2),L.logarithmicDepthBuffer&&a.enable(3),L.reversedDepthBuffer&&a.enable(4),L.skinning&&a.enable(5),L.morphTargets&&a.enable(6),L.morphNormals&&a.enable(7),L.morphColors&&a.enable(8),L.premultipliedAlpha&&a.enable(9),L.shadowMapEnabled&&a.enable(10),L.doubleSided&&a.enable(11),L.flipSided&&a.enable(12),L.useDepthPacking&&a.enable(13),L.dithering&&a.enable(14),L.transmission&&a.enable(15),L.sheen&&a.enable(16),L.opaque&&a.enable(17),L.pointsUvs&&a.enable(18),L.decodeVideoTexture&&a.enable(19),L.decodeVideoTextureEmissive&&a.enable(20),L.alphaToCoverage&&a.enable(21),L.numLightProbeGrids>0&&a.enable(22),L.hasPositionAttribute&&a.enable(23),b.push(a.mask)}function y(b){const L=d[b.type];let B;if(L){const N=si[L];B=gh.clone(N.uniforms)}else B=b.uniforms;return B}function R(b,L){let B=f.get(L);return B!==void 0?++B.usedTimes:(B=new Vg(n,L,b,s),c.push(B),f.set(L,B)),B}function S(b){if(--b.usedTimes===0){const L=c.indexOf(b);c[L]=c[c.length-1],c.pop(),f.delete(b.cacheKey),b.destroy()}}function C(b){l.remove(b)}function I(){l.dispose()}return{getParameters:u,getProgramCacheKey:_,getUniforms:y,acquireProgram:R,releaseProgram:S,releaseShaderCache:C,programs:c,dispose:I}}function Kg(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let l=n.get(a);return l===void 0&&(l={},n.set(a,l)),l}function i(a){n.delete(a)}function s(a,l,o){n.get(a)[l]=o}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Jg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function $c(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Yc(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function l(d,h,u,_,g,m){let y=n[e];return y===void 0?(y={id:d.id,object:d,geometry:h,material:u,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},n[e]=y):(y.id=d.id,y.object=d,y.geometry=h,y.material=u,y.materialVariant=a(d),y.groupOrder=_,y.renderOrder=d.renderOrder,y.z=g,y.group=m),e++,y}function o(d,h,u,_,g,m,y){y.reversedDepth===!0&&(g=-g);const R=l(d,h,u,_,g,m);u.transmission>0?i.push(R):u.transparent===!0?s.push(R):t.push(R)}function c(d,h,u,_,g,m){const y=l(d,h,u,_,g,m);u.transmission>0?i.unshift(y):u.transparent===!0?s.unshift(y):t.unshift(y)}function f(d,h){t.length>1&&t.sort(d||Jg),i.length>1&&i.sort(h||$c),s.length>1&&s.sort(h||$c)}function p(){for(let d=e,h=n.length;d<h;d++){const u=n[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:p,sort:f}}function Zg(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Yc,n.set(i,[a])):s>=r.length?(a=new Yc,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function jg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new se,color:new ut};break;case"SpotLight":t={position:new se,direction:new se,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new se,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new se,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new se,halfWidth:new se,halfHeight:new se};break}return n[e.id]=t,t}}}function Qg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ex=0;function tx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function nx(n){const e=new jg,t=Qg(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new se);const s=new se,r=new Tt,a=new Tt;function l(c){let f=0,p=0,d=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let h=0,u=0,_=0,g=0,m=0,y=0,R=0,S=0,C=0,I=0,b=0,L=0,B=0,N=0;c.sort(tx);for(let V=0,Q=c.length;V<Q;V++){const q=c[V],ne=q.color,he=q.intensity,re=q.distance;let Pe=null;if(q.shadow&&q.shadow.map&&(q.shadow.map.texture.format===us?Pe=q.shadow.map.texture:Pe=q.shadow.map.depthTexture||q.shadow.map.texture),q.isAmbientLight)f+=ne.r*he,p+=ne.g*he,d+=ne.b*he;else if(q.isLightProbe){for(let de=0;de<9;de++)i.probe[de].addScaledVector(q.sh.coefficients[de],he);N++}else if(q.isSunLight){const de=e.get(q);if(de.color.copy(q.color).multiplyScalar(q.intensity),q.castShadow){const be=q.shadow,ge=t.get(q);ge.shadowIntensity=be.intensity,ge.shadowBias=be.bias,ge.shadowNormalBias=be.normalBias,ge.shadowRadius=be.radius,ge.shadowMapSize.copy(be.mapSize).multiply(be.getFrameExtents()),i.sunShadow[u]=ge,i.sunShadowMap[u]=Pe;const Te=be.getViewportCount();for(let Be=0;Be<Te;Be++)i.sunShadowMatrix[_+Be]=be.getMatrix(Be),i.sunShadowCascade[_+Be]=be._cascadeData[Be];_+=Te,u++}i.sun[h]=de,h++}else if(q.isDirectionalLight){const de=e.get(q);if(de.color.copy(q.color).multiplyScalar(q.intensity),q.castShadow){const be=q.shadow,ge=t.get(q);ge.shadowIntensity=be.intensity,ge.shadowBias=be.bias,ge.shadowNormalBias=be.normalBias,ge.shadowRadius=be.radius,ge.shadowMapSize=be.mapSize,i.directionalShadow[g]=ge,i.directionalShadowMap[g]=Pe,i.directionalShadowMatrix[g]=q.shadow.matrix,C++}i.directional[g]=de,g++}else if(q.isSpotLight){const de=e.get(q);de.position.setFromMatrixPosition(q.matrixWorld),de.color.copy(ne).multiplyScalar(he),de.distance=re,de.coneCos=Math.cos(q.angle),de.penumbraCos=Math.cos(q.angle*(1-q.penumbra)),de.decay=q.decay,i.spot[y]=de;const be=q.shadow;if(q.map&&(i.spotLightMap[L]=q.map,L++,be.updateMatrices(q),q.castShadow&&B++),i.spotLightMatrix[y]=be.matrix,q.castShadow){const ge=t.get(q);ge.shadowIntensity=be.intensity,ge.shadowBias=be.bias,ge.shadowNormalBias=be.normalBias,ge.shadowRadius=be.radius,ge.shadowMapSize=be.mapSize,i.spotShadow[y]=ge,i.spotShadowMap[y]=Pe,b++}y++}else if(q.isRectAreaLight){const de=e.get(q);de.color.copy(ne).multiplyScalar(he),de.halfWidth.set(q.width*.5,0,0),de.halfHeight.set(0,q.height*.5,0),i.rectArea[R]=de,R++}else if(q.isPointLight){const de=e.get(q);if(de.color.copy(q.color).multiplyScalar(q.intensity),de.distance=q.distance,de.decay=q.decay,q.castShadow){const be=q.shadow,ge=t.get(q);ge.shadowIntensity=be.intensity,ge.shadowBias=be.bias,ge.shadowNormalBias=be.normalBias,ge.shadowRadius=be.radius,ge.shadowMapSize=be.mapSize,ge.shadowCameraNear=be.camera.near,ge.shadowCameraFar=be.camera.far,i.pointShadow[m]=ge,i.pointShadowMap[m]=Pe,i.pointShadowMatrix[m]=q.shadow.matrix,I++}i.point[m]=de,m++}else if(q.isHemisphereLight){const de=e.get(q);de.skyColor.copy(q.color).multiplyScalar(he),de.groundColor.copy(q.groundColor).multiplyScalar(he),i.hemi[S]=de,S++}}R>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Xe.LTC_FLOAT_1,i.rectAreaLTC2=Xe.LTC_FLOAT_2):(i.rectAreaLTC1=Xe.LTC_HALF_1,i.rectAreaLTC2=Xe.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=d;const H=i.hash;(H.sunLength!==h||H.directionalLength!==g||H.pointLength!==m||H.spotLength!==y||H.rectAreaLength!==R||H.hemiLength!==S||H.numSunShadows!==u||H.numDirectionalShadows!==C||H.numPointShadows!==I||H.numSpotShadows!==b||H.numSpotMaps!==L||H.numLightProbes!==N)&&(i.sun.length=h,i.directional.length=g,i.spot.length=y,i.rectArea.length=R,i.point.length=m,i.hemi.length=S,i.sunShadow.length=u,i.sunShadowMap.length=u,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.directionalShadowMatrix.length=C,i.pointShadow.length=I,i.pointShadowMap.length=I,i.pointShadowMatrix.length=I,i.spotShadow.length=b,i.spotShadowMap.length=b,i.spotLightMatrix.length=b+L-B,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=B,i.numLightProbes=N,H.sunLength=h,H.directionalLength=g,H.pointLength=m,H.spotLength=y,H.rectAreaLength=R,H.hemiLength=S,H.numSunShadows=u,H.numDirectionalShadows=C,H.numPointShadows=I,H.numSpotShadows=b,H.numSpotMaps=L,H.numLightProbes=N,i.version=ex++)}function o(c,f){let p=0,d=0,h=0,u=0,_=0,g=0;const m=f.matrixWorldInverse;for(let y=0,R=c.length;y<R;y++){const S=c[y];if(S.isSunLight){const C=i.sun[p];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(m),p++}else if(S.isDirectionalLight){const C=i.directional[d];C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),d++}else if(S.isSpotLight){const C=i.spot[u];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),u++}else if(S.isRectAreaLight){const C=i.rectArea[_];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const C=i.point[h];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(m),h++}else if(S.isHemisphereLight){const C=i.hemi[g];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(m),g++}}}return{setup:l,setupView:o,state:i}}function Kc(n){const e=new nx(n),t=[],i=[],s=[];function r(p){f.camera=p,t.length=0,i.length=0,s.length=0}function a(p){p.isLightProbeGrid?s.push(p):t.push(p)}function l(p){i.push(p)}function o(){e.setup(t),s.sort((p,d)=>p.priority-d.priority||p.id-d.id)}function c(p){e.setupView(t,p)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:l}}function ix(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let l;return a===void 0?(l=new Kc(n),e.set(s,[l])):r>=a.length?(l=new Kc(n),a.push(l)):l=a[r],l}function i(){e=new WeakMap}return{get:t,dispose:i}}const sx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rx=`uniform sampler2D shadow_pass;
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
}`,ox=[new se(1,0,0),new se(-1,0,0),new se(0,1,0),new se(0,-1,0),new se(0,0,1),new se(0,0,-1)],ax=[new se(0,-1,0),new se(0,-1,0),new se(0,0,1),new se(0,0,-1),new se(0,-1,0),new se(0,-1,0)],Jc=new Tt,nr=new se,ma=new se;function lx(n,e,t){let i=new Ar;const s=new it,r=new it,a=new Bt,l=new Mh,o=new bh,c={},f=t.maxTextureSize,p={[cs]:_n,[_n]:cs,[Ti]:Ti},d=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:sx,fragmentShader:rx}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const u=new tn;u.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new xt(u,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mr;let m=this.type;this.render=function(I,b,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||I.length===0)return;this.type===qf&&(lt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=mr);const B=n.getRenderTarget(),N=n.getActiveCubeFace(),H=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Os),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const Q=m!==this.type;Q&&b.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(ne=>ne.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,ne=I.length;q<ne;q++){const he=I[q],re=he.shadow;if(re===void 0){lt("WebGLShadowMap:",he,"has no shadow.");continue}if(re.autoUpdate===!1&&re.needsUpdate===!1)continue;s.copy(re.mapSize);const Pe=re.getFrameExtents();s.multiply(Pe),r.copy(re.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/Pe.x),s.x=r.x*Pe.x,re.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/Pe.y),s.y=r.y*Pe.y,re.mapSize.y=r.y));const de=n.state.buffers.depth.getReversed();if(re.camera._reversedDepth=de,re.map===null||Q===!0){if(re.map!==null&&(re.map.depthTexture!==null&&(re.map.depthTexture.dispose(),re.map.depthTexture=null),re.map.dispose()),this.type===fr){if(he.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}re.map=new Sn(s.x,s.y,{format:us,type:Zn,minFilter:bn,magFilter:bn,generateMipmaps:!1}),re.map.texture.name=he.name+".shadowMap",re.map.depthTexture=new Vs(s.x,s.y,Yn),re.map.depthTexture.name=he.name+".shadowMapDepth",re.map.depthTexture.format=qi,re.map.depthTexture.compareFunction=null,re.map.depthTexture.minFilter=rn,re.map.depthTexture.magFilter=rn}else he.isPointLight?(re.map=new Wl(s.x),re.map.depthTexture=new uf(s.x,fi)):(re.map=new Sn(s.x,s.y),re.map.depthTexture=new Vs(s.x,s.y,fi)),re.map.depthTexture.name=he.name+".shadowMap",re.map.depthTexture.format=qi,this.type===mr?(re.map.depthTexture.compareFunction=de?ju:Zu,re.map.depthTexture.minFilter=bn,re.map.depthTexture.magFilter=bn):(re.map.depthTexture.compareFunction=null,re.map.depthTexture.minFilter=rn,re.map.depthTexture.magFilter=rn);re.camera.updateProjectionMatrix()}re.map.isWebGLCubeRenderTarget!==!0&&(re.map.width!==s.x||re.map.height!==s.y)&&re.map.setSize(s.x,s.y);const be=re.map.isWebGLCubeRenderTarget?6:re.getViewportCount();he.isPointLight!==!0&&re.updateMatrices(he,L);const ge=(re.camera.layers.mask&4294967294)!==0?re.camera.layers:L.layers;for(let Te=0;Te<be;Te++){const Be=re.getCamera(Te);if(he.isPointLight){const ye=re.camera,Ne=re.matrix,Fe=he.distance||ye.far;Fe!==ye.far&&(ye.far=Fe,ye.updateProjectionMatrix()),nr.setFromMatrixPosition(he.matrixWorld),ye.position.copy(nr),ma.copy(ye.position),ma.add(ox[Te]),ye.up.copy(ax[Te]),ye.lookAt(ma),ye.updateMatrixWorld(),Ne.makeTranslation(-nr.x,-nr.y,-nr.z),Jc.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),re._frustum.setFromProjectionMatrix(Jc,ye.coordinateSystem,ye.reversedDepth)}if(re.map.isWebGLCubeRenderTarget)n.setRenderTarget(re.map,Te),n.clear();else{Te===0&&(n.setRenderTarget(re.map),n.clear());const ye=re.getViewport(Te);a.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),V.viewport(a)}i=re.getFrustum(Te),S(b,L,Be,he,ge,this.type)}re.isPointLightShadow!==!0&&this.type===fr&&y(re,L),re.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(B,N,H)};function y(I,b){const L=e.update(_);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,h.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),I.mapPass===null?I.mapPass=new Sn(s.x,s.y,{format:us,type:Zn}):(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)&&I.mapPass.setSize(I.map.width,I.map.height),d.uniforms.shadow_pass.value=I.map.depthTexture,d.uniforms.resolution.value.set(I.map.width,I.map.height),d.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(b,null,L,d,_,null),h.uniforms.shadow_pass.value=I.mapPass.texture,h.uniforms.resolution.value.set(I.map.width,I.map.height),h.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(b,null,L,h,_,null)}function R(I,b,L,B){let N=null;const H=L.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(H!==void 0)N=H;else if(N=L.isPointLight===!0?o:l,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const V=N.uuid,Q=b.uuid;let q=c[V];q===void 0&&(q={},c[V]=q);let ne=q[Q];ne===void 0&&(ne=N.clone(),q[Q]=ne,b.addEventListener("dispose",C)),N=ne}if(N.visible=b.visible,N.wireframe=b.wireframe,B===fr?N.side=b.shadowSide!==null?b.shadowSide:b.side:N.side=b.shadowSide!==null?b.shadowSide:p[b.side],N.alphaMap=b.alphaMap,N.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,N.map=b.map,N.clipShadows=b.clipShadows,N.clippingPlanes=b.clippingPlanes,N.clipIntersection=b.clipIntersection,N.displacementMap=b.displacementMap,N.displacementScale=b.displacementScale,N.displacementBias=b.displacementBias,N.wireframeLinewidth=b.wireframeLinewidth,N.linewidth=b.linewidth,L.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const V=n.properties.get(N);V.light=L}return N}function S(I,b,L,B,N,H){if(I.visible===!1)return;if(I.layers.test(N)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&H===fr)&&(!I.frustumCulled||I.intersectsFrustum(i))){I.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,I.matrixWorld);const q=e.update(I),ne=I.material;if(Array.isArray(ne)){const he=q.groups;for(let re=0,Pe=he.length;re<Pe;re++){const de=he[re],be=ne[de.materialIndex];if(be&&be.visible){const ge=R(I,be,B,H);I.onBeforeShadow(n,I,b,L,q,ge,de),n.renderBufferDirect(L,null,q,ge,I,de),I.onAfterShadow(n,I,b,L,q,ge,de)}}}else if(ne.visible){const he=R(I,ne,B,H);I.onBeforeShadow(n,I,b,L,q,he,null),n.renderBufferDirect(L,null,q,he,I,null),I.onAfterShadow(n,I,b,L,q,he,null)}}const Q=I.children;for(let q=0,ne=Q.length;q<ne;q++)S(Q[q],b,L,B,N,H)}function C(I){I.target.removeEventListener("dispose",C);for(const L in c){const B=c[L],N=I.target.uuid;N in B&&(B[N].dispose(),delete B[N])}}}function cx(n,e){function t(){let $=!1;const Ae=new Bt;let oe=null;const Ue=new Bt(0,0,0,0);return{setMask:function(Ce){oe!==Ce&&!$&&(n.colorMask(Ce,Ce,Ce,Ce),oe=Ce)},setLocked:function(Ce){$=Ce},setClear:function(Ce,Re,Ge,tt,ze){ze===!0&&(Ce*=tt,Re*=tt,Ge*=tt),Ae.set(Ce,Re,Ge,tt),Ue.equals(Ae)===!1&&(n.clearColor(Ce,Re,Ge,tt),Ue.copy(Ae))},reset:function(){$=!1,oe=null,Ue.set(-1,0,0,0)}}}function i(){let $=!1,Ae=!1,oe=null,Ue=null,Ce=null;return{setReversed:function(Re){if(Ae!==Re){const Ge=e.get("EXT_clip_control");Re?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),Ae=Re;const tt=Ce;Ce=null,this.setClear(tt)}},getReversed:function(){return Ae},setTest:function(Re){Re?ke(n.DEPTH_TEST):Ke(n.DEPTH_TEST)},setMask:function(Re){oe!==Re&&!$&&(n.depthMask(Re),oe=Re)},setFunc:function(Re){if(Ae&&(Re=Td[Re]),Ue!==Re){switch(Re){case Aa:n.depthFunc(n.NEVER);break;case Ra:n.depthFunc(n.ALWAYS);break;case Ca:n.depthFunc(n.LESS);break;case br:n.depthFunc(n.LEQUAL);break;case Pa:n.depthFunc(n.EQUAL);break;case La:n.depthFunc(n.GEQUAL);break;case Da:n.depthFunc(n.GREATER);break;case Ia:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ue=Re}},setLocked:function(Re){$=Re},setClear:function(Re){Ce!==Re&&(Ce=Re,Ae&&(Re=1-Re),n.clearDepth(Re))},reset:function(){$=!1,oe=null,Ue=null,Ce=null,Ae=!1}}}function s(){let $=!1,Ae=null,oe=null,Ue=null,Ce=null,Re=null,Ge=null,tt=null,ze=null;return{setTest:function(je){$||(je?ke(n.STENCIL_TEST):Ke(n.STENCIL_TEST))},setMask:function(je){Ae!==je&&!$&&(n.stencilMask(je),Ae=je)},setFunc:function(je,ct,We){(oe!==je||Ue!==ct||Ce!==We)&&(n.stencilFunc(je,ct,We),oe=je,Ue=ct,Ce=We)},setOp:function(je,ct,We){(Re!==je||Ge!==ct||tt!==We)&&(n.stencilOp(je,ct,We),Re=je,Ge=ct,tt=We)},setLocked:function(je){$=je},setClear:function(je){ze!==je&&(n.clearStencil(je),ze=je)},reset:function(){$=!1,Ae=null,oe=null,Ue=null,Ce=null,Re=null,Ge=null,tt=null,ze=null}}}const r=new t,a=new i,l=new s;let o={};const c=new WeakMap;let f={},p={},d={},h=new WeakMap,u=[],_=null,g=!1,m=null,y=null,R=null,S=null,C=null,I=null,b=null,L=new ut(0,0,0),B=0,N=!1,H=null,V=null,Q=null,q=null,ne=null;const he=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,Pe=0;const de=n.getParameter(n.VERSION);de.indexOf("WebGL")!==-1?(Pe=parseFloat(/^WebGL (\d)/.exec(de)[1]),re=Pe>=1):de.indexOf("OpenGL ES")!==-1&&(Pe=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),re=Pe>=2);let be=null,ge={};const Te=n.getParameter(n.SCISSOR_BOX),Be=n.getParameter(n.VIEWPORT),ye=new Bt().fromArray(Te),Ne=new Bt().fromArray(Be);function Fe($,Ae,oe,Ue){const Ce=new Uint8Array(4),Re=n.createTexture();n.bindTexture($,Re),n.texParameteri($,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri($,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<oe;Ge++)$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?n.texImage3D(Ae,0,n.RGBA,1,1,Ue,0,n.RGBA,n.UNSIGNED_BYTE,Ce):n.texImage2D(Ae+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ce);return Re}const Oe={};Oe[n.TEXTURE_2D]=Fe(n.TEXTURE_2D,n.TEXTURE_2D,1),Oe[n.TEXTURE_CUBE_MAP]=Fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Oe[n.TEXTURE_2D_ARRAY]=Fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Oe[n.TEXTURE_3D]=Fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),ke(n.DEPTH_TEST),a.setFunc(br),bt(!1),st(Jl),ke(n.CULL_FACE),vt(Os);function ke($){f[$]!==!0&&(n.enable($),f[$]=!0)}function Ke($){f[$]!==!1&&(n.disable($),f[$]=!1)}function pt($,Ae){return d[$]!==Ae?(n.bindFramebuffer($,Ae),d[$]=Ae,$===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Ae),$===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Ae),!0):!1}function He($,Ae){let oe=u,Ue=!1;if($){oe=h.get(Ae),oe===void 0&&(oe=[],h.set(Ae,oe));const Ce=$.textures;if(oe.length!==Ce.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let Re=0,Ge=Ce.length;Re<Ge;Re++)oe[Re]=n.COLOR_ATTACHMENT0+Re;oe.length=Ce.length,Ue=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,Ue=!0);Ue&&n.drawBuffers(oe)}function Je($){return _!==$?(n.useProgram($),_=$,!0):!1}const nt={[Ns]:n.FUNC_ADD,[Yf]:n.FUNC_SUBTRACT,[Kf]:n.FUNC_REVERSE_SUBTRACT};nt[Jf]=n.MIN,nt[Zf]=n.MAX;const Qe={[jf]:n.ZERO,[Qf]:n.ONE,[ed]:n.SRC_COLOR,[Uu]:n.SRC_ALPHA,[od]:n.SRC_ALPHA_SATURATE,[sd]:n.DST_COLOR,[nd]:n.DST_ALPHA,[td]:n.ONE_MINUS_SRC_COLOR,[zu]:n.ONE_MINUS_SRC_ALPHA,[rd]:n.ONE_MINUS_DST_COLOR,[id]:n.ONE_MINUS_DST_ALPHA,[ad]:n.CONSTANT_COLOR,[ld]:n.ONE_MINUS_CONSTANT_COLOR,[cd]:n.CONSTANT_ALPHA,[ud]:n.ONE_MINUS_CONSTANT_ALPHA};function vt($,Ae,oe,Ue,Ce,Re,Ge,tt,ze,je){if($===Os){g===!0&&(Ke(n.BLEND),g=!1);return}if(g===!1&&(ke(n.BLEND),g=!0),$!==$f){if($!==m||je!==N){if((y!==Ns||C!==Ns)&&(n.blendEquation(n.FUNC_ADD),y=Ns,C=Ns),je)switch($){case gr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zl:n.blendFunc(n.ONE,n.ONE);break;case jl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ql:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Et("WebGLState: Invalid blending: ",$);break}else switch($){case gr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case jl:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ql:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",$);break}R=null,S=null,I=null,b=null,L.set(0,0,0),B=0,m=$,N=je}return}Ce=Ce||Ae,Re=Re||oe,Ge=Ge||Ue,(Ae!==y||Ce!==C)&&(n.blendEquationSeparate(nt[Ae],nt[Ce]),y=Ae,C=Ce),(oe!==R||Ue!==S||Re!==I||Ge!==b)&&(n.blendFuncSeparate(Qe[oe],Qe[Ue],Qe[Re],Qe[Ge]),R=oe,S=Ue,I=Re,b=Ge),(tt.equals(L)===!1||ze!==B)&&(n.blendColor(tt.r,tt.g,tt.b,ze),L.copy(tt),B=ze),m=$,N=!1}function ot($,Ae){$.side===Ti?Ke(n.CULL_FACE):ke(n.CULL_FACE);let oe=$.side===_n;Ae&&(oe=!oe),bt(oe),$.blending===gr&&$.transparent===!1?vt(Os):vt($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),a.setFunc($.depthFunc),a.setTest($.depthTest),a.setMask($.depthWrite),r.setMask($.colorWrite);const Ue=$.stencilWrite;l.setTest(Ue),Ue&&(l.setMask($.stencilWriteMask),l.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),l.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),Ie($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?ke(n.SAMPLE_ALPHA_TO_COVERAGE):Ke(n.SAMPLE_ALPHA_TO_COVERAGE)}function bt($){H!==$&&($?n.frontFace(n.CW):n.frontFace(n.CCW),H=$)}function st($){$!==Wf?(ke(n.CULL_FACE),$!==V&&($===Jl?n.cullFace(n.BACK):$===Xf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ke(n.CULL_FACE),V=$}function zt($){$!==Q&&(re&&n.lineWidth($),Q=$)}function Ie($,Ae,oe){$?(ke(n.POLYGON_OFFSET_FILL),(q!==Ae||ne!==oe)&&(q=Ae,ne=oe,a.getReversed()&&(Ae=-Ae,oe=-oe),n.polygonOffset(Ae,oe))):Ke(n.POLYGON_OFFSET_FILL)}function De($){$?ke(n.SCISSOR_TEST):Ke(n.SCISSOR_TEST)}function $e($){$===void 0&&($=n.TEXTURE0+he-1),be!==$&&(n.activeTexture($),be=$)}function Ze($,Ae,oe){oe===void 0&&(be===null?oe=n.TEXTURE0+he-1:oe=be);let Ue=ge[oe];Ue===void 0&&(Ue={type:void 0,texture:void 0},ge[oe]=Ue),(Ue.type!==$||Ue.texture!==Ae)&&(be!==oe&&(n.activeTexture(oe),be=oe),n.bindTexture($,Ae||Oe[$]),Ue.type=$,Ue.texture=Ae)}function D(){const $=ge[be];$!==void 0&&$.type!==void 0&&(n.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function w(){try{n.compressedTexImage2D(...arguments)}catch($){Et("WebGLState:",$)}}function k(){try{n.compressedTexImage3D(...arguments)}catch($){Et("WebGLState:",$)}}function K(){try{n.texSubImage2D(...arguments)}catch($){Et("WebGLState:",$)}}function X(){try{n.texSubImage3D(...arguments)}catch($){Et("WebGLState:",$)}}function ce(){try{n.compressedTexSubImage2D(...arguments)}catch($){Et("WebGLState:",$)}}function xe(){try{n.compressedTexSubImage3D(...arguments)}catch($){Et("WebGLState:",$)}}function me(){try{n.texStorage2D(...arguments)}catch($){Et("WebGLState:",$)}}function A(){try{n.texStorage3D(...arguments)}catch($){Et("WebGLState:",$)}}function T(){try{n.texImage2D(...arguments)}catch($){Et("WebGLState:",$)}}function Z(){try{n.texImage3D(...arguments)}catch($){Et("WebGLState:",$)}}function Me($){return p[$]!==void 0?p[$]:n.getParameter($)}function ee($,Ae){p[$]!==Ae&&(n.pixelStorei($,Ae),p[$]=Ae)}function ve($){ye.equals($)===!1&&(n.scissor($.x,$.y,$.z,$.w),ye.copy($))}function we($){Ne.equals($)===!1&&(n.viewport($.x,$.y,$.z,$.w),Ne.copy($))}function pe($,Ae){let oe=c.get(Ae);oe===void 0&&(oe=new WeakMap,c.set(Ae,oe));let Ue=oe.get($);Ue===void 0&&(Ue=n.getUniformBlockIndex(Ae,$.name),n.uniformBlockBinding(Ae,Ue,Ue),oe.set($,Ue))}function ue($,Ae,oe){const Ce=c.get(Ae).get($);o[Ce]!==oe&&(n.bindBufferBase(n.UNIFORM_BUFFER,Ce,oe),o[Ce]=oe)}function Le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),f={},p={},be=null,ge={},d={},o={},h=new WeakMap,u=[],_=null,g=!1,m=null,y=null,R=null,S=null,C=null,I=null,b=null,L=new ut(0,0,0),B=0,N=!1,H=null,V=null,Q=null,q=null,ne=null,ye.set(0,0,n.canvas.width,n.canvas.height),Ne.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:ke,disable:Ke,bindFramebuffer:pt,drawBuffers:He,useProgram:Je,setBlending:vt,setMaterial:ot,setFlipSided:bt,setCullFace:st,setLineWidth:zt,setPolygonOffset:Ie,setScissorTest:De,activeTexture:$e,bindTexture:Ze,unbindTexture:D,compressedTexImage2D:w,compressedTexImage3D:k,texImage2D:T,texImage3D:Z,pixelStorei:ee,getParameter:Me,updateUBOMapping:pe,uniformBlockBinding:ue,texStorage2D:me,texStorage3D:A,texSubImage2D:K,texSubImage3D:X,compressedTexSubImage2D:ce,compressedTexSubImage3D:xe,scissor:ve,viewport:we,reset:Le}}function ux(n,e,t,i,s,r,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,f=new WeakMap,p=new Set;let d;const h=new WeakMap,u=new Set,_=new FinalizationRegistry(A=>u.delete(A));let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,T){return g?new OffscreenCanvas(A,T):Ro("canvas")}function y(A,T,Z){let Me=1;const ee=me(A);if((ee.width>Z||ee.height>Z)&&(Me=Z/Math.max(ee.width,ee.height)),Me<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ve=Math.floor(Me*ee.width),we=Math.floor(Me*ee.height);d===void 0&&(d=m(ve,we));const pe=T?m(ve,we):d;return pe.width=ve,pe.height=we,pe.getContext("2d").drawImage(A,0,0,ve,we),lt("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ve+"x"+we+")."),pe}else return"data"in A&&lt("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function R(A){return A.generateMipmaps}function S(A){n.generateMipmap(A)}function C(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function I(A,T,Z,Me,ee,ve=!1){if(A!==null){if(n[A]!==void 0)return n[A];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let we;Me&&(we=e.get("EXT_texture_norm16"),we||lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=T;if(T===n.RED&&(Z===n.FLOAT&&(pe=n.R32F),Z===n.HALF_FLOAT&&(pe=n.R16F),Z===n.UNSIGNED_BYTE&&(pe=n.R8),Z===n.UNSIGNED_SHORT&&we&&(pe=we.R16_EXT),Z===n.SHORT&&we&&(pe=we.R16_SNORM_EXT)),T===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(pe=n.R8UI),Z===n.UNSIGNED_SHORT&&(pe=n.R16UI),Z===n.UNSIGNED_INT&&(pe=n.R32UI),Z===n.BYTE&&(pe=n.R8I),Z===n.SHORT&&(pe=n.R16I),Z===n.INT&&(pe=n.R32I)),T===n.RG&&(Z===n.FLOAT&&(pe=n.RG32F),Z===n.HALF_FLOAT&&(pe=n.RG16F),Z===n.UNSIGNED_BYTE&&(pe=n.RG8),Z===n.UNSIGNED_SHORT&&we&&(pe=we.RG16_EXT),Z===n.SHORT&&we&&(pe=we.RG16_SNORM_EXT)),T===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(pe=n.RG8UI),Z===n.UNSIGNED_SHORT&&(pe=n.RG16UI),Z===n.UNSIGNED_INT&&(pe=n.RG32UI),Z===n.BYTE&&(pe=n.RG8I),Z===n.SHORT&&(pe=n.RG16I),Z===n.INT&&(pe=n.RG32I)),T===n.RGB_INTEGER&&(Z===n.UNSIGNED_BYTE&&(pe=n.RGB8UI),Z===n.UNSIGNED_SHORT&&(pe=n.RGB16UI),Z===n.UNSIGNED_INT&&(pe=n.RGB32UI),Z===n.BYTE&&(pe=n.RGB8I),Z===n.SHORT&&(pe=n.RGB16I),Z===n.INT&&(pe=n.RGB32I)),T===n.RGBA_INTEGER&&(Z===n.UNSIGNED_BYTE&&(pe=n.RGBA8UI),Z===n.UNSIGNED_SHORT&&(pe=n.RGBA16UI),Z===n.UNSIGNED_INT&&(pe=n.RGBA32UI),Z===n.BYTE&&(pe=n.RGBA8I),Z===n.SHORT&&(pe=n.RGBA16I),Z===n.INT&&(pe=n.RGBA32I)),T===n.RGB&&(Z===n.UNSIGNED_SHORT&&we&&(pe=we.RGB16_EXT),Z===n.SHORT&&we&&(pe=we.RGB16_SNORM_EXT),Z===n.UNSIGNED_INT_5_9_9_9_REV&&(pe=n.RGB9_E5),Z===n.UNSIGNED_INT_10F_11F_11F_REV&&(pe=n.R11F_G11F_B10F)),T===n.RGBA){const ue=ve?Ao:Mt.getTransfer(ee);Z===n.FLOAT&&(pe=n.RGBA32F),Z===n.HALF_FLOAT&&(pe=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(pe=ue===Lt?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT&&we&&(pe=we.RGBA16_EXT),Z===n.SHORT&&we&&(pe=we.RGBA16_SNORM_EXT),Z===n.UNSIGNED_SHORT_4_4_4_4&&(pe=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(pe=n.RGB5_A1)}return(pe===n.R16F||pe===n.R32F||pe===n.RG16F||pe===n.RG32F||pe===n.RGBA16F||pe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function b(A,T){let Z;return A?T===null||T===fi||T===Gs?Z=n.DEPTH24_STENCIL8:T===Yn?Z=n.DEPTH32F_STENCIL8:T===Er&&(Z=n.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===fi||T===Gs?Z=n.DEPTH_COMPONENT24:T===Yn?Z=n.DEPTH_COMPONENT32F:T===Er&&(Z=n.DEPTH_COMPONENT16),Z}function L(A,T){return R(A)===!0||A.isFramebufferTexture&&A.minFilter!==rn&&A.minFilter!==bn?Math.log2(Math.max(T.width,T.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?T.mipmaps.length:1}function B(A){const T=new WeakRef(A);i.get(A).__ref=T,u.add(T),_.register(A,T,T)}function N(A){const T=i.get(A).__ref;T!==void 0&&(u.delete(T),_.unregister(T))}function H(A){Q(A.target)}function V(A){q(A.target)}function Q(A){A.removeEventListener("dispose",H),N(A),he(A),A.isVideoTexture&&f.delete(A),A.isHTMLTexture&&p.delete(A)}function q(A){A.removeEventListener("dispose",V),N(A),Pe(A)}function ne(){for(const A of u){const T=A.deref();T!==void 0&&(T.isRenderTarget===!0?q(T):Q(T))}u.clear(),p.clear()}function he(A){const T=i.get(A);if(T.__webglInit===void 0)return;const Z=A.source,Me=h.get(Z);if(Me){const ee=Me[T.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&re(A),Object.keys(Me).length===0&&h.delete(Z)}i.remove(A)}function re(A){const T=i.get(A);n.deleteTexture(T.__webglTexture);const Z=A.source,Me=h.get(Z);delete Me[T.__cacheKey],a.memory.textures--}function Pe(A){const T=i.get(A);T.__depthDisposeCallback&&T.__depthDisposeCallback();const Z=A.depthTexture;if(Z&&Z.renderTarget===A&&Q(Z),A.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(T.__webglFramebuffer[ee]))for(let ve=0;ve<T.__webglFramebuffer[ee].length;ve++)n.deleteFramebuffer(T.__webglFramebuffer[ee][ve]);else n.deleteFramebuffer(T.__webglFramebuffer[ee]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[ee])}else{if(Array.isArray(T.__webglFramebuffer))for(let ee=0;ee<T.__webglFramebuffer.length;ee++)n.deleteFramebuffer(T.__webglFramebuffer[ee]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ee=0;ee<T.__webglColorRenderbuffer.length;ee++)T.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[ee]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Me=A.textures;for(let ee=0,ve=Me.length;ee<ve;ee++){const we=i.get(Me[ee]);we.__webglTexture&&(n.deleteTexture(we.__webglTexture),a.memory.textures--),i.remove(Me[ee])}i.remove(A)}let de=0;function be(){de=0}function ge(){return de}function Te(A){de=A}function Be(){const A=de;return A>=s.maxTextures&&lt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),de+=1,A}function ye(A){const T=[];return T.push(A.wrapS),T.push(A.wrapT),T.push(A.wrapR||0),T.push(A.magFilter),T.push(A.minFilter),T.push(A.anisotropy),T.push(A.internalFormat),T.push(A.format),T.push(A.type),T.push(A.generateMipmaps),T.push(A.mipmapsAutoUpdate),T.push(A.premultiplyAlpha),T.push(A.flipY),T.push(A.unpackAlignment),T.push(A.colorSpace),T.join()}function Ne(A,T){const Z=i.get(A);if(A.isVideoTexture&&ce(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&Z.__version!==A.version){const Me=A.image;if(Me===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(Me.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{ot(Z,A,T);return}}else A.isExternalTexture&&(Z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+T)}function Fe(A,T){const Z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&Z.__version!==A.version){ot(Z,A,T);return}else A.isExternalTexture&&(Z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+T)}function Oe(A,T){const Z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&Z.__version!==A.version){ot(Z,A,T);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+T)}function ke(A,T){const Z=i.get(A);if(A.version>0&&Z.__version!==A.version){bt(Z,A,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+T)}const Ke={[wr]:n.REPEAT,[Ci]:n.CLAMP_TO_EDGE,[Na]:n.MIRRORED_REPEAT},pt={[rn]:n.NEAREST,[hd]:n.NEAREST_MIPMAP_NEAREST,[Ir]:n.NEAREST_MIPMAP_LINEAR,[bn]:n.LINEAR,[Bo]:n.LINEAR_MIPMAP_NEAREST,[Pi]:n.LINEAR_MIPMAP_LINEAR},He={[xd]:n.NEVER,[Qu]:n.ALWAYS,[vd]:n.LESS,[Zu]:n.LEQUAL,[_d]:n.EQUAL,[ju]:n.GEQUAL,[yd]:n.GREATER,[Md]:n.NOTEQUAL};function Je(A,T){if(T.type===Yn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===bn||T.magFilter===Bo||T.magFilter===Ir||T.magFilter===Pi||T.minFilter===bn||T.minFilter===Bo||T.minFilter===Ir||T.minFilter===Pi)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,Ke[T.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Ke[T.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Ke[T.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,pt[T.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,pt[T.minFilter]),T.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,He[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===rn||T.minFilter!==Ir&&T.minFilter!==Pi||T.type===Yn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function nt(A,T){let Z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,T.addEventListener("dispose",H),B(T));const Me=T.source;let ee=h.get(Me);ee===void 0&&(ee={},h.set(Me,ee));const ve=ye(T);if(ve!==A.__cacheKey){ee[ve]===void 0&&(ee[ve]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),ee[ve].usedTimes++;const we=ee[A.__cacheKey];we!==void 0&&(ee[A.__cacheKey].usedTimes--,we.usedTimes===0&&re(T)),A.__cacheKey=ve,A.__webglTexture=ee[ve].texture}return Z}function Qe(A,T,Z){return Math.floor(Math.floor(A/Z)/T)}function vt(A,T,Z,Me){const ve=A.updateRanges;if(ve.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,Z,Me,T.data);else{ve.sort(($,Ae)=>$.start-Ae.start);let we=0;for(let $=1;$<ve.length;$++){const Ae=ve[we],oe=ve[$],Ue=Ae.start+Ae.count,Ce=Qe(oe.start,T.width,4),Re=Qe(Ae.start,T.width,4);oe.start<=Ue+1&&Ce===Re&&Qe(oe.start+oe.count-1,T.width,4)===Ce?Ae.count=Math.max(Ae.count,oe.start+oe.count-Ae.start):(++we,ve[we]=oe)}ve.length=we+1;const pe=t.getParameter(n.UNPACK_ROW_LENGTH),ue=t.getParameter(n.UNPACK_SKIP_PIXELS),Le=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let $=0,Ae=ve.length;$<Ae;$++){const oe=ve[$],Ue=Math.floor(oe.start/4),Ce=Math.ceil(oe.count/4),Re=Ue%T.width,Ge=Math.floor(Ue/T.width),tt=Ce,ze=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Re),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ge),t.texSubImage2D(n.TEXTURE_2D,0,Re,Ge,tt,ze,Z,Me,T.data)}A.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,pe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(n.UNPACK_SKIP_ROWS,Le)}}function ot(A,T,Z){let Me=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Me=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Me=n.TEXTURE_3D);const ee=nt(A,T),ve=T.source;t.bindTexture(Me,A.__webglTexture,n.TEXTURE0+Z);const we=i.get(ve);if(ve.version!==we.__version||ee===!0){if(t.activeTexture(n.TEXTURE0+Z),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const ze=Mt.getPrimaries(Mt.workingColorSpace),je=T.colorSpace===Ai?null:Mt.getPrimaries(T.colorSpace),ct=T.colorSpace===Ai||ze===je?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct)}t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment);let ue=y(T.image,!1,s.maxTextureSize);ue=xe(T,ue);const Le=r.convert(T.format,T.colorSpace),$=r.convert(T.type);let Ae=I(T.internalFormat,Le,$,T.normalized,T.colorSpace,T.isVideoTexture);Je(Me,T);let oe;const Ue=T.mipmaps,Ce=T.isVideoTexture!==!0,Re=we.__version===void 0||ee===!0,Ge=ve.dataReady,tt=L(T,ue);if(T.isDepthTexture)Ae=b(T.format===Xi,T.type),Re&&(Ce?t.texStorage2D(n.TEXTURE_2D,1,Ae,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,Ae,ue.width,ue.height,0,Le,$,null));else if(T.isDataTexture)if(Ue.length>0){Ce&&Re&&t.texStorage2D(n.TEXTURE_2D,tt,Ae,Ue[0].width,Ue[0].height);for(let ze=0,je=Ue.length;ze<je;ze++)oe=Ue[ze],Ce?Ge&&t.texSubImage2D(n.TEXTURE_2D,ze,0,0,oe.width,oe.height,Le,$,oe.data):t.texImage2D(n.TEXTURE_2D,ze,Ae,oe.width,oe.height,0,Le,$,oe.data);T.generateMipmaps=!1}else Ce?(Re&&t.texStorage2D(n.TEXTURE_2D,tt,Ae,ue.width,ue.height),Ge&&vt(T,ue,Le,$)):t.texImage2D(n.TEXTURE_2D,0,Ae,ue.width,ue.height,0,Le,$,ue.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ce&&Re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,tt,Ae,Ue[0].width,Ue[0].height,ue.depth);for(let ze=0,je=Ue.length;ze<je;ze++)if(oe=Ue[ze],T.format!==oi)if(Le!==null)if(Ce){if(Ge)if(T.layerUpdates.size>0){const ct=Cc(oe.width,oe.height,T.format,T.type);for(const We of T.layerUpdates){const _t=oe.data.subarray(We*ct/oe.data.BYTES_PER_ELEMENT,(We+1)*ct/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ze,0,0,We,oe.width,oe.height,1,Le,_t)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ze,0,0,0,oe.width,oe.height,ue.depth,Le,oe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ze,Ae,oe.width,oe.height,ue.depth,0,oe.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?Ge&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ze,0,0,0,oe.width,oe.height,ue.depth,Le,$,oe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ze,Ae,oe.width,oe.height,ue.depth,0,Le,$,oe.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Ce&&Re&&t.texStorage2D(n.TEXTURE_2D,tt,Ae,Ue[0].width,Ue[0].height);for(let ze=0,je=Ue.length;ze<je;ze++)oe=Ue[ze],T.format!==oi?Le!==null?Ce?Ge&&t.compressedTexSubImage2D(n.TEXTURE_2D,ze,0,0,oe.width,oe.height,Le,oe.data):t.compressedTexImage2D(n.TEXTURE_2D,ze,Ae,oe.width,oe.height,0,oe.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?Ge&&t.texSubImage2D(n.TEXTURE_2D,ze,0,0,oe.width,oe.height,Le,$,oe.data):t.texImage2D(n.TEXTURE_2D,ze,Ae,oe.width,oe.height,0,Le,$,oe.data)}else if(T.isDataArrayTexture)if(Ce){if(Re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,tt,Ae,ue.width,ue.height,ue.depth),Ge)if(T.layerUpdates.size>0){const ze=Cc(ue.width,ue.height,T.format,T.type);for(const je of T.layerUpdates){const ct=ue.data.subarray(je*ze/ue.data.BYTES_PER_ELEMENT,(je+1)*ze/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,je,ue.width,ue.height,1,Le,$,ct)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Le,$,ue.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,ue.width,ue.height,ue.depth,0,Le,$,ue.data);else if(T.isData3DTexture)Ce?(Re&&t.texStorage3D(n.TEXTURE_3D,tt,Ae,ue.width,ue.height,ue.depth),Ge&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Le,$,ue.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,ue.width,ue.height,ue.depth,0,Le,$,ue.data);else if(T.isFramebufferTexture){if(Re)if(Ce)t.texStorage2D(n.TEXTURE_2D,tt,Ae,ue.width,ue.height);else{let ze=ue.width,je=ue.height;for(let ct=0;ct<tt;ct++)t.texImage2D(n.TEXTURE_2D,ct,Ae,ze,je,0,Le,$,null),ze>>=1,je>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in n){const ze=n.canvas;if(ze.hasAttribute("layoutsubtree")||ze.setAttribute("layoutsubtree","true"),ue.parentNode!==ze){ze.appendChild(ue),p.add(T),ze.onpaint=je=>{const ct=je.changedElements;for(const We of p)ct.includes(We.image)&&(We.needsUpdate=!0)},ze.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ue);else{const ct=n.RGBA,We=n.RGBA,_t=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ct,We,_t,ue)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(Ce&&Re){const ze=me(Ue[0]);t.texStorage2D(n.TEXTURE_2D,tt,Ae,ze.width,ze.height)}for(let ze=0,je=Ue.length;ze<je;ze++)oe=Ue[ze],Ce?Ge&&t.texSubImage2D(n.TEXTURE_2D,ze,0,0,Le,$,oe):t.texImage2D(n.TEXTURE_2D,ze,Ae,Le,$,oe);T.generateMipmaps=!1}else if(Ce){if(Re){const ze=me(ue);t.texStorage2D(n.TEXTURE_2D,tt,Ae,ze.width,ze.height)}Ge&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Le,$,ue)}else t.texImage2D(n.TEXTURE_2D,0,Ae,Le,$,ue);R(T)&&T.mipmapsAutoUpdate===!0&&S(Me),we.__version=ve.version,T.onUpdate&&T.onUpdate(T)}A.__version=T.version}function bt(A,T,Z){if(T.image.length!==6)return;const Me=nt(A,T),ee=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+Z);const ve=i.get(ee);if(ee.version!==ve.__version||Me===!0){t.activeTexture(n.TEXTURE0+Z);const we=Mt.getPrimaries(Mt.workingColorSpace),pe=T.colorSpace===Ai?null:Mt.getPrimaries(T.colorSpace),ue=T.colorSpace===Ai||we===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Le=T.isCompressedTexture||T.image[0].isCompressedTexture,$=T.image[0]&&T.image[0].isDataTexture,Ae=[];for(let We=0;We<6;We++)!Le&&!$?Ae[We]=y(T.image[We],!0,s.maxCubemapSize):Ae[We]=$?T.image[We].image:T.image[We],Ae[We]=xe(T,Ae[We]);const oe=Ae[0],Ue=r.convert(T.format,T.colorSpace),Ce=r.convert(T.type);let Re=I(T.internalFormat,Ue,Ce,T.normalized,T.colorSpace);const Ge=T.isVideoTexture!==!0,tt=ve.__version===void 0||Me===!0,ze=ee.dataReady;let je=L(T,oe);Je(n.TEXTURE_CUBE_MAP,T);let ct;if(T.isDepthTexture){if(Re=b(T.format===Xi,T.type),tt)if(Ge)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,Re,oe.width,oe.height);else for(let We=0;We<6;We++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,Re,oe.width,oe.height,0,Ue,Ce,null)}else if(Le){Ge&&tt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,je,Re,oe.width,oe.height);for(let We=0;We<6;We++){ct=Ae[We].mipmaps;for(let _t=0;_t<ct.length;_t++){const Ct=ct[_t];T.format!==oi?Ue!==null?Ge?ze&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+We,_t,0,0,Ct.width,Ct.height,Ue,Ct.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+We,_t,Re,Ct.width,Ct.height,0,Ct.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?ze&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+We,_t,0,0,Ct.width,Ct.height,Ue,Ce,Ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+We,_t,Re,Ct.width,Ct.height,0,Ue,Ce,Ct.data)}}}else{if(ct=T.mipmaps,Ge&&tt){ct.length>0&&je++;const We=me(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,je,Re,We.width,We.height)}for(let We=0;We<6;We++)if($){Ge?ze&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,0,0,Ae[We].width,Ae[We].height,Ue,Ce,Ae[We].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,Re,Ae[We].width,Ae[We].height,0,Ue,Ce,Ae[We].data);for(let _t=0;_t<ct.length;_t++){const pn=ct[_t].image[We].image;Ge?ze&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+We,_t+1,0,0,pn.width,pn.height,Ue,Ce,pn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+We,_t+1,Re,pn.width,pn.height,0,Ue,Ce,pn.data)}}else{Ge?ze&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,0,0,Ue,Ce,Ae[We]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,Re,Ue,Ce,Ae[We]);for(let _t=0;_t<ct.length;_t++){const Ct=ct[_t];Ge?ze&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+We,_t+1,0,0,Ue,Ce,Ct.image[We]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+We,_t+1,Re,Ue,Ce,Ct.image[We])}}}R(T)&&T.mipmapsAutoUpdate===!0&&S(n.TEXTURE_CUBE_MAP),ve.__version=ee.version,T.onUpdate&&T.onUpdate(T)}A.__version=T.version}function st(A,T,Z,Me,ee,ve){const we=r.convert(Z.format,Z.colorSpace),pe=r.convert(Z.type),ue=I(Z.internalFormat,we,pe,Z.normalized,Z.colorSpace),Le=i.get(T),$=i.get(Z);if($.__renderTarget=T,!Le.__hasExternalTextures){const Ae=Math.max(1,T.width>>ve),oe=Math.max(1,T.height>>ve);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,ve,ue,Ae,oe,T.depth,0,we,pe,null):t.texImage2D(ee,ve,ue,Ae,oe,0,we,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),X(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Me,ee,$.__webglTexture,0,K(T)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Me,ee,$.__webglTexture,ve),t.bindFramebuffer(n.FRAMEBUFFER,null)}function zt(A,T,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,A),T.depthBuffer){const Me=T.depthTexture,ee=Me&&Me.isDepthTexture?Me.type:null,ve=b(T.stencilBuffer,ee),we=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;X(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,K(T),ve,T.width,T.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,K(T),ve,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,ve,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,A)}else{const Me=T.textures;for(let ee=0;ee<Me.length;ee++){const ve=Me[ee],we=r.convert(ve.format,ve.colorSpace),pe=r.convert(ve.type),ue=I(ve.internalFormat,we,pe,ve.normalized,ve.colorSpace);X(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,K(T),ue,T.width,T.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,K(T),ue,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,ue,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ie(A,T,Z){const Me=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ee=i.get(T.depthTexture);ee.__renderTarget=T;const ve=Me?T.depthTexture.image[0]:T.depthTexture.image;(!ee.__webglTexture||ve.width!==T.width||ve.height!==T.height)&&(ve.width=T.width,ve.height=T.height,T.depthTexture.needsUpdate=!0),Me?ke(T.depthTexture,0):Ne(T.depthTexture,0);const we=ee.__webglTexture,pe=K(T),ue=Me?n.TEXTURE_CUBE_MAP_POSITIVE_X+Z:n.TEXTURE_2D,Le=T.depthTexture.format===Xi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===qi)X(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Le,ue,we,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,Le,ue,we,0);else if(T.depthTexture.format===Xi)X(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Le,ue,we,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,Le,ue,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function De(A){const T=i.get(A),Z=A.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==A.depthTexture){const Me=A.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Me){const ee=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Me.removeEventListener("dispose",ee)};Me.addEventListener("dispose",ee),T.__depthDisposeCallback=ee}T.__boundDepthTexture=Me}if(A.depthTexture&&!T.__autoAllocateDepthBuffer)if(Z)for(let Me=0;Me<6;Me++)Ie(T.__webglFramebuffer[Me],A,Me);else A.texture.mipmaps.length>0?Ie(T.__webglFramebuffer[0],A,0):Ie(T.__webglFramebuffer,A,0);else if(Z){T.__webglDepthbuffer=[];for(let Me=0;Me<6;Me++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[Me]),T.__webglDepthbuffer[Me]===void 0)T.__webglDepthbuffer[Me]=n.createRenderbuffer(),zt(T.__webglDepthbuffer[Me],A,!1);else{const ee=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=T.__webglDepthbuffer[Me];n.bindRenderbuffer(n.RENDERBUFFER,ve),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,ve)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),zt(T.__webglDepthbuffer,A,!1);else{const ee=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ve),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,ve)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function $e(A,T,Z){const Me=i.get(A);T!==void 0&&st(Me.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&De(A)}function Ze(A){const T=A.texture,Z=i.get(A),Me=i.get(T);A.addEventListener("dispose",V),B(A);const ee=A.textures,ve=A.isWebGLCubeRenderTarget===!0,we=ee.length>1;if(we||(Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture()),Me.__version=T.version,a.memory.textures++),ve){Z.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(T.mipmaps.length>0){Z.__webglFramebuffer[pe]=[];for(let ue=0;ue<T.mipmaps.length;ue++)Z.__webglFramebuffer[pe][ue]=n.createFramebuffer()}else Z.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let pe=0;pe<T.mipmaps.length;pe++)Z.__webglFramebuffer[pe]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(we)for(let pe=0,ue=ee.length;pe<ue;pe++){const Le=i.get(ee[pe]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&X(A)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let pe=0;pe<ee.length;pe++){const ue=ee[pe];Z.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[pe]);const Le=r.convert(ue.format,ue.colorSpace),$=r.convert(ue.type),Ae=I(ue.internalFormat,Le,$,ue.normalized,ue.colorSpace,A.isXRRenderTarget===!0),oe=K(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,Ae,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,Z.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),zt(Z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ve){t.bindTexture(n.TEXTURE_CUBE_MAP,Me.__webglTexture),Je(n.TEXTURE_CUBE_MAP,T);for(let pe=0;pe<6;pe++)if(T.mipmaps.length>0)for(let ue=0;ue<T.mipmaps.length;ue++)st(Z.__webglFramebuffer[pe][ue],A,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ue);else st(Z.__webglFramebuffer[pe],A,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);R(T)?S(n.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(we){for(let pe=0,ue=ee.length;pe<ue;pe++){const Le=ee[pe],$=i.get(Le);let Ae=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Ae=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ae,$.__webglTexture),Je(Ae,Le),st(Z.__webglFramebuffer,A,Le,n.COLOR_ATTACHMENT0+pe,Ae,0),R(Le)&&S(Ae)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(pe=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,Me.__webglTexture),Je(pe,T),T.mipmaps.length>0)for(let ue=0;ue<T.mipmaps.length;ue++)st(Z.__webglFramebuffer[ue],A,T,n.COLOR_ATTACHMENT0,pe,ue);else st(Z.__webglFramebuffer,A,T,n.COLOR_ATTACHMENT0,pe,0);R(T)?S(pe):T.mipmaps.length>0&&n.texParameteri(pe,n.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&De(A)}function D(A){const T=A.textures;for(let Z=0,Me=T.length;Z<Me;Z++){const ee=T[Z];if(R(ee)&&ee.mipmapsAutoUpdate===!0){const ve=C(A),we=i.get(ee).__webglTexture;t.bindTexture(ve,we),S(ve),t.unbindTexture()}}}const w=[];function k(A){if(A.samples>0){if(X(A)===!1){const T=A.textures,Z=A.width,Me=A.height;let ee=n.COLOR_BUFFER_BIT;const ve=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(A),pe=T.length>1;if(pe)for(let Le=0;Le<T.length;Le++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Le=0;Le<T.length;Le++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[Le]);const $=i.get(T[Le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$,0)}n.blitFramebuffer(0,0,Z,Me,0,0,Z,Me,ee,n.NEAREST),o===!0&&(w.length=0,w.push(n.COLOR_ATTACHMENT0+Le),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&w.push(ve),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,w))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Le=0;Le<T.length;Le++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,we.__webglColorRenderbuffer[Le]);const $=i.get(T[Le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,$,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&o){const T=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function K(A){return Math.min(s.maxSamples,A.samples)}function X(A){const T=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ce(A){const T=a.render.frame;f.get(A)!==T&&(f.set(A,T),A.update())}function xe(A,T){const Z=A.colorSpace,Me=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||Z!==To&&Z!==Ai&&(Mt.getTransfer(Z)===Lt?(Me!==oi||ee!==Mn)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",Z)),T}function me(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Be,this.resetTextureUnits=be,this.getTextureUnits=ge,this.setTextureUnits=Te,this.setTexture2D=Ne,this.setTexture2DArray=Fe,this.setTexture3D=Oe,this.setTextureCube=ke,this.rebindTextures=$e,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=k,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=st,this.useMultisampledRTT=X,this.dispose=ne}function fx(n,e){function t(i,s=Ai){let r;const a=Mt.getTransfer(s);if(i===Mn)return n.UNSIGNED_BYTE;if(i===Pl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ll)return n.UNSIGNED_SHORT_5_5_5_1;if(i===$u)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Yu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Xu)return n.BYTE;if(i===qu)return n.SHORT;if(i===Er)return n.UNSIGNED_SHORT;if(i===Cl)return n.INT;if(i===fi)return n.UNSIGNED_INT;if(i===Yn)return n.FLOAT;if(i===Zn)return n.HALF_FLOAT;if(i===Ku)return n.ALPHA;if(i===Ju)return n.RGB;if(i===oi)return n.RGBA;if(i===qi)return n.DEPTH_COMPONENT;if(i===Xi)return n.DEPTH_STENCIL;if(i===Dl)return n.RED;if(i===Il)return n.RED_INTEGER;if(i===us)return n.RG;if(i===Nl)return n.RG_INTEGER;if(i===Ul)return n.RGBA_INTEGER;if(i===fo||i===ho||i===po||i===mo)if(a===Lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===fo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===fo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ho)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ua||i===za||i===Fa||i===ka)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Oa||i===Ba||i===Ha||i===Ga||i===Va||i===So||i===Wa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Oa||i===Ba)return a===Lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ha)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ga)return r.COMPRESSED_R11_EAC;if(i===Va)return r.COMPRESSED_SIGNED_R11_EAC;if(i===So)return r.COMPRESSED_RG11_EAC;if(i===Wa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Xa||i===qa||i===$a||i===Ya||i===Ka||i===Ja||i===Za||i===ja||i===Qa||i===el||i===tl||i===nl||i===il||i===sl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Xa)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qa)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$a)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ya)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ka)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ja)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Za)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ja)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Qa)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===el)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===tl)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nl)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===il)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sl)return a===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===rl||i===ol||i===al)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===rl)return a===Lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ll||i===cl||i===wo||i===ul)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ll)return r.COMPRESSED_RED_RGTC1_EXT;if(i===cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ul)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const dx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hx=`
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

}`;class px{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new ff(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new $i({vertexShader:dx,fragmentShader:hx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new Ri(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mx extends ds{constructor(e,t){super();const i=this;let s=null,r=1,a=null,l="local-floor",o=1,c=null,f=null,p=null,d=null,h=null,u=null;const _=typeof XRWebGLBinding<"u",g=new px,m={},y=t.getContextAttributes();let R=null,S=null;const C=[],I=[],b=new it;let L=null,B=null;const N=new Pn;N.viewport=new Bt;const H=new Pn;H.viewport=new Bt;const V=[N,H],Q=new Ah;let q=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ye){let Ne=C[ye];return Ne===void 0&&(Ne=new Ko,C[ye]=Ne),Ne.getTargetRaySpace()},this.getControllerGrip=function(ye){let Ne=C[ye];return Ne===void 0&&(Ne=new Ko,C[ye]=Ne),Ne.getGripSpace()},this.getHand=function(ye){let Ne=C[ye];return Ne===void 0&&(Ne=new Ko,C[ye]=Ne),Ne.getHandSpace()};function he(ye){const Ne=I.indexOf(ye.inputSource);if(Ne===-1)return;const Fe=C[Ne];Fe!==void 0&&(Fe.update(ye.inputSource,ye.frame,c||a),Fe.dispatchEvent({type:ye.type,data:ye.inputSource}))}function re(){s.removeEventListener("select",he),s.removeEventListener("selectstart",he),s.removeEventListener("selectend",he),s.removeEventListener("squeeze",he),s.removeEventListener("squeezestart",he),s.removeEventListener("squeezeend",he),s.removeEventListener("end",re),s.removeEventListener("inputsourceschange",Pe);for(let ye=0;ye<C.length;ye++){const Ne=I[ye];Ne!==null&&(I[ye]=null,C[ye].disconnect(Ne))}q=null,ne=null,g.reset();for(const ye in m)delete m[ye];if(e.setRenderTarget(R),h=null,d=null,p=null,s=null,S=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(b.width,b.height,!1),B!==null){const ye=B.camera;ye.fov=B.fov,ye.zoom=B.zoom,ye.updateProjectionMatrix(),B=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ye){r=ye,i.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ye){l=ye,i.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ye){c=ye},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return p===null&&_&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return u},this.getSession=function(){return s},this.setSession=async function(ye){if(s=ye,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",he),s.addEventListener("selectstart",he),s.addEventListener("selectend",he),s.addEventListener("squeeze",he),s.addEventListener("squeezestart",he),s.addEventListener("squeezeend",he),s.addEventListener("end",re),s.addEventListener("inputsourceschange",Pe),y.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(b),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Fe=null,Oe=null,ke=null;y.depth&&(ke=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Fe=y.stencil?Xi:qi,Oe=y.stencil?Gs:fi);const Ke={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:r};p=this.getBinding(),d=p.createProjectionLayer(Ke),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Sn(d.textureWidth,d.textureHeight,{format:oi,type:Mn,depthTexture:new Vs(d.textureWidth,d.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,Fe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Fe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,Fe),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new Sn(h.framebufferWidth,h.framebufferHeight,{format:oi,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(o),c=null,a=await s.requestReferenceSpace(l),Be.setContext(s),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Pe(ye){for(let Ne=0;Ne<ye.removed.length;Ne++){const Fe=ye.removed[Ne],Oe=I.indexOf(Fe);Oe>=0&&(I[Oe]=null,C[Oe].disconnect(Fe))}for(let Ne=0;Ne<ye.added.length;Ne++){const Fe=ye.added[Ne];let Oe=I.indexOf(Fe);if(Oe===-1){for(let Ke=0;Ke<C.length;Ke++)if(Ke>=I.length){I.push(Fe),Oe=Ke;break}else if(I[Ke]===null){I[Ke]=Fe,Oe=Ke;break}if(Oe===-1)break}const ke=C[Oe];ke&&ke.connect(Fe)}}function de(ye,Ne){Ne===null?ye.matrixWorld.copy(ye.matrix):ye.matrixWorld.multiplyMatrices(Ne.matrixWorld,ye.matrix),ye.matrixWorldInverse.copy(ye.matrixWorld).invert()}this.updateCamera=function(ye){if(s===null)return;let Ne=ye.near,Fe=ye.far;g.texture!==null&&(g.depthNear>0&&(Ne=g.depthNear),g.depthFar>0&&(Fe=g.depthFar)),Q.near=H.near=N.near=Ne,Q.far=H.far=N.far=Fe,(q!==Q.near||ne!==Q.far)&&(s.updateRenderState({depthNear:Q.near,depthFar:Q.far}),q=Q.near,ne=Q.far),Q.layers.mask=ye.layers.mask|6,N.layers.mask=Q.layers.mask&-5,H.layers.mask=Q.layers.mask&-3;const Oe=ye.parent,ke=Q.cameras;de(Q,Oe);for(let Ke=0;Ke<ke.length;Ke++)de(ke[Ke],Oe);Q.projectionMatrix.copy(N.projectionMatrix),Q.projectionMatrixInverse.copy(N.projectionMatrixInverse),B===null&&ye.isPerspectiveCamera&&(B={camera:ye,fov:ye.fov,zoom:ye.zoom}),be(ye,Q,Oe)};function be(ye,Ne,Fe){Fe===null?ye.matrix.copy(Ne.matrixWorld):(ye.matrix.copy(Fe.matrixWorld),ye.matrix.invert(),ye.matrix.multiply(Ne.matrixWorld)),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.updateMatrixWorld(!0),ye.projectionMatrix.copy(Ne.projectionMatrix),ye.projectionMatrixInverse.copy(Ne.projectionMatrixInverse),ye.isPerspectiveCamera&&(ye.fov=Co*2*Math.atan(1/ye.projectionMatrix.elements[5]),ye.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(d===null&&h===null))return o},this.setFoveation=function(ye){o=ye,d!==null&&(d.fixedFoveation=ye),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ye)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(Q)},this.getCameraTexture=function(ye){return m[ye]};let ge=null;function Te(ye,Ne){if(f=Ne.getViewerPose(c||a),u=Ne,f!==null){const Fe=f.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let Oe=!1;Fe.length!==Q.cameras.length&&(Q.cameras.length=0,Oe=!0);for(let He=0;He<Fe.length;He++){const Je=Fe[He];let nt=null;if(h!==null)nt=h.getViewport(Je);else{const vt=p.getViewSubImage(d,Je);nt=vt.viewport,He===0&&(e.setRenderTargetTextures(S,vt.colorTexture,vt.depthStencilTexture),e.setRenderTarget(S))}let Qe=V[He];Qe===void 0&&(Qe=new Pn,Qe.layers.enable(He),Qe.viewport=new Bt,V[He]=Qe),Qe.matrix.fromArray(Je.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(Je.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(nt.x,nt.y,nt.width,nt.height),He===0&&(Q.matrix.copy(Qe.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Oe===!0&&Q.cameras.push(Qe)}const ke=s.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){p=i.getBinding();const He=p.getDepthInformation(Fe[0]);He&&He.isValid&&He.texture&&g.init(He,s.renderState)}if(ke&&ke.includes("camera-access")&&_){e.state.unbindTexture(),p=i.getBinding();for(let He=0;He<Fe.length;He++){const Je=Fe[He].camera;if(Je){let nt=m[Je];nt||(nt=new ff,m[Je]=nt);const Qe=p.getCameraImage(Je);nt.sourceTexture=Qe}}}}for(let Fe=0;Fe<C.length;Fe++){const Oe=I[Fe],ke=C[Fe];Oe!==null&&ke!==void 0&&ke.update(Oe,Ne,c||a)}ge&&ge(ye,Ne),Ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Ne}),u=null}const Be=new yf;Be.setAnimationLoop(Te),this.setAnimationLoop=function(ye){ge=ye},this.dispose=function(){}}}const gx=new Tt,Pf=new dt;Pf.set(-1,0,0,0,1,0,0,0,1);function xx(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,mf(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,y,R,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),p(g,m)):m.isMeshPhongMaterial?(r(g,m),f(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&h(g,m,S)):m.isMeshMatcapMaterial?(r(g,m),u(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&l(g,m)):m.isPointsMaterial?o(g,m,y,R):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===_n&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===_n&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const y=e.get(m),R=y.envMap,S=y.envMapRotation;R&&(g.envMap.value=R,g.envMapRotation.value.setFromMatrix4(gx.makeRotationFromEuler(S)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Pf),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function l(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function o(g,m,y,R){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=R*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function f(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function p(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function h(g,m,y){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===_n&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function u(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function vx(n,e,t,i){let s={},r={};function a(y,R){const S=R.program;i.uniformBlockBinding(y,S,s[y.id])}function l(y,R){let S=s[y.id];S===void 0&&(u(y),S=o(y),s[y.id]=S,y.addEventListener("dispose",g));const C=R.program;i.updateUBOMapping(y,C);const I=e.render.frame;r[y.id]!==I&&(c(y),r[y.id]=I)}function o(y){const R=n.createBuffer(),S=y.__size,C=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,S,C),n.bindBuffer(n.UNIFORM_BUFFER,null),R}function c(y){const R=s[y.id],S=y.uniforms,C=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let I=0,b=S.length;I<b;I++){const L=S[I];if(Array.isArray(L))for(let B=0,N=L.length;B<N;B++)f(L[B],I,B,C);else f(L,I,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(y,R,S,C){if(d(y,R,S,C)===!0){const I=y.__offset,b=y.value;if(Array.isArray(b)){let L=0;for(let B=0;B<b.length;B++){const N=b[B],H=_(N,!0);p(N,y.__data,L),L+=H.storage/Float32Array.BYTES_PER_ELEMENT}}else p(b,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,I,y.__data)}}function p(y,R,S){typeof y=="number"||typeof y=="boolean"?R[S]=y:y.isMatrix3?(R[S]=y.elements[0],R[S+1]=y.elements[1],R[S+2]=y.elements[2],R[S+3]=0,R[S+4]=y.elements[3],R[S+5]=y.elements[4],R[S+6]=y.elements[5],R[S+7]=0,R[S+8]=y.elements[6],R[S+9]=y.elements[7],R[S+10]=y.elements[8],R[S+11]=0):ArrayBuffer.isView(y)?R.set(y.subarray(0,R.length-S),S):y.toArray(R,S)}function d(y,R,S,C){const I=y.value,b=R+"_"+S;if(Array.isArray(I)){C[b]===void 0&&(C[b]=[]);const L=C[b];let B=!1;for(let N=0;N<I.length;N++)h(I[N],L,N)===!0&&(B=!0);return B}return h(I,C,b)}function h(y,R,S){if(R[S]===void 0)return typeof y=="number"||typeof y=="boolean"?R[S]=y:ArrayBuffer.isView(y)?R[S]=y.slice():R[S]=y.clone(),!0;{const C=R[S];if(typeof y=="number"||typeof y=="boolean"){if(C!==y)return R[S]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(C.equals(y)===!1)return C.copy(y),!0}}return!1}function u(y){const R=y.uniforms;let S=0;const C=16;for(let b=0,L=R.length;b<L;b++){const B=Array.isArray(R[b])?R[b]:[R[b]];for(let N=0,H=B.length;N<H;N++){const V=B[N],Q=Array.isArray(V.value)?V.value:[V.value],q=Array.isArray(R[b])||Array.isArray(V.value);let ne=S;for(let re=0,Pe=Q.length;re<Pe;re++){const de=Q[re],be=_(de,q),ge=S%C,Te=ge%be.boundary,Be=ge+Te;S+=Te,Be!==0&&C-Be<be.storage&&(S+=C-Be),re===0&&(ne=S),S+=be.storage}const he=V.type==="int"?Int32Array:V.type==="uint"?Uint32Array:Float32Array;V.__data=new he((S-ne)/Float32Array.BYTES_PER_ELEMENT),V.__offset=ne}}const I=S%C;return I>0&&(S+=C-I),y.__size=S,y.__cache={},this}function _(y,R){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=16,S.storage=48):y.isMatrix4?(S.boundary=16,S.storage=64):y.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):lt("WebGLRenderer: Unsupported uniform value type.",y),R===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function g(y){const R=y.target;R.removeEventListener("dispose",g),n.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function m(){for(const y in s)n.deleteBuffer(s[y]);s={},r={}}return{bind:a,update:l,dispose:m}}const _x=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ti=null;function yx(){return ti===null&&(ti=new lf(_x,16,16,us,Zn),ti.name="DFG_LUT",ti.minFilter=bn,ti.magFilter=bn,ti.wrapS=Ci,ti.wrapT=Ci,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}class Mx{constructor(e={}){const{canvas:t=wd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:h=Mn}=e;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=a;const _=h,g=new Set([Ul,Nl,Il]),m=new Set([Mn,fi,Er,Gs,Pl,Ll]),y=new Uint32Array(4),R=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]};let C=null,I=null;const b=[],L=[];let B=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let H=!1,V=null,Q=null,q=null,ne=null;this._outputColorSpace=yn;let he=0,re=0,Pe=null,de=-1,be=null;const ge=new Bt,Te=new Bt;let Be=null;const ye=new ut(0);let Ne=0,Fe=t.width,Oe=t.height,ke=1,Ke=null,pt=null;const He=new Bt(0,0,Fe,Oe),Je=new Bt(0,0,Fe,Oe);let nt=!1;const Qe=new Ar,vt=new Ol;let ot=!1,bt=!1;const st=new Tt,zt=new se,Ie=new Bt,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function Ze(){return Pe===null?ke:1}let D=i;function w(M,O){return t.getContext(M,O)}let k,K,X,ce,xe,me,A,T,Z,Me,ee,ve,we,pe,ue,Le,$,Ae,oe,Ue,Ce,Re,Ge;try{const M={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:o,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Al}`),t.addEventListener("webglcontextlost",je,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",We,!1),D===null){const O="webgl2";if(D=w(O,M),D===null)throw w(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}tt()}catch(M){throw t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",We,!1),Et("WebGLRenderer: "+M.message),M}function tt(){k=new wm(D),k.init(),Ce=new fx(D,k),K=new hm(D,k,e,Ce),X=new cx(D,k),K.reversedDepthBuffer&&d&&X.buffers.depth.setReversed(!0),Q=D.createFramebuffer(),q=D.createFramebuffer(),ne=D.createFramebuffer(),ce=new Am(D),xe=new Kg,me=new ux(D,k,X,xe,K,Ce,ce),A=new Sm(N),T=new Ch(D),Re=new fm(D,T),Z=new Em(D,T,ce,Re),Me=new Cm(D,Z,T,Re,ce),Ae=new Rm(D,K,me),ue=new pm(xe),ee=new Yg(N,A,k,K,Re,ue),ve=new xx(N,xe),we=new Zg,pe=new ix(k),$=new um(N,A,X,Me,u,o),Le=new lx(N,Me,K),Ge=new vx(D,ce,K,X),oe=new dm(D,k,ce),Ue=new Tm(D,k,ce),ce.programs=ee.programs,N.capabilities=K,N.extensions=k,N.properties=xe,N.renderLists=we,N.shadowMap=Le,N.state=X,N.info=ce}_!==Mn&&(B=new Lm(_,t.width,t.height,l,s,r));const ze=new mx(N,D);this.xr=ze,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const M=k.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=k.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ke},this.setPixelRatio=function(M){M!==void 0&&(ke=M,this.setSize(Fe,Oe,!1))},this.getSize=function(M){return M.set(Fe,Oe)},this.setSize=function(M,O,F=!0){if(ze.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}Fe=M,Oe=O,t.width=Math.floor(M*ke),t.height=Math.floor(O*ke),F===!0&&(t.style.width=M+"px",t.style.height=O+"px"),B!==null&&B.setSize(t.width,t.height),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(Fe*ke,Oe*ke).floor()},this.setDrawingBufferSize=function(M,O,F){Fe=M,Oe=O,ke=F,t.width=Math.floor(M*F),t.height=Math.floor(O*F),this.setViewport(0,0,M,O)},this.setEffects=function(M){if(_===Mn){Et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let O=0;O<M.length;O++)if(M[O].isOutputPass===!0){lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(ge)},this.getViewport=function(M){return M.copy(He)},this.setViewport=function(M,O,F,P){M.isVector4?He.set(M.x,M.y,M.z,M.w):He.set(M,O,F,P),X.viewport(ge.copy(He).multiplyScalar(Ze()).round())},this.getScissor=function(M){return M.copy(Je)},this.setScissor=function(M,O,F,P){M.isVector4?Je.set(M.x,M.y,M.z,M.w):Je.set(M,O,F,P),X.scissor(Te.copy(Je).multiplyScalar(Ze()).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(M){X.setScissorTest(nt=M)},this.setOpaqueSort=function(M){Ke=M},this.setTransparentSort=function(M){pt=M},this.getClearColor=function(M){return M.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor(...arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,F=!0){let P=0;if(M){let W=!1;if(Pe!==null){const x=Pe.texture.format;W=g.has(x)}if(W){const x=Pe.texture.type,U=m.has(x),z=$.getClearColor(),G=$.getClearAlpha(),te=z.r,J=z.g,ae=z.b;U?(y[0]=te,y[1]=J,y[2]=ae,y[3]=G,D.clearBufferuiv(D.COLOR,0,y)):(R[0]=te,R[1]=J,R[2]=ae,R[3]=G,D.clearBufferiv(D.COLOR,0,R))}else P|=D.COLOR_BUFFER_BIT}O&&(P|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),F&&(P|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P!==0&&D.clear(P)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),V=M},this.dispose=function(){t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",We,!1),$.dispose(),we.dispose(),pe.dispose(),me.dispose(),xe.dispose(),A.dispose(),Me.dispose(),Z.dispose(),Re.dispose(),Ge.dispose(),ee.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",ms),ze.removeEventListener("sessionend",hi),Fn.stop()};function je(M){M.preventDefault(),nc("WebGLRenderer: Context Lost."),H=!0}function ct(){nc("WebGLRenderer: Context Restored."),H=!1;const M=ce.autoReset,O=Le.enabled,F=Le.autoUpdate,P=Le.needsUpdate,W=Le.type;tt(),ce.autoReset=M,Le.enabled=O,Le.autoUpdate=F,Le.needsUpdate=P,Le.type=W}function We(M){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function _t(M){const O=M.target;O.removeEventListener("dispose",_t),Ct(O)}function Ct(M){pn(M),xe.remove(M)}function pn(M){const O=xe.get(M).programs;O!==void 0&&(O.forEach(function(F){ee.releaseProgram(F)}),M.isShaderMaterial&&ee.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,F,P,W,x){O===null&&(O=De);const U=W.isMesh&&W.matrixWorld.determinantAffine()<0,z=v(M,O,F,P,W);X.setMaterial(P,U);let G=F.index,te=1;if(P.wireframe===!0){if(G=Z.getWireframeAttribute(F),G===void 0)return;te=2}const J=F.drawRange,ae=F.attributes.position;let fe=J.start*te,_e=(J.start+J.count)*te;x!==null&&(fe=Math.max(fe,x.start*te),_e=Math.min(_e,(x.start+x.count)*te)),G!==null?(fe=Math.max(fe,0),_e=Math.min(_e,G.count)):ae!=null&&(fe=Math.max(fe,0),_e=Math.min(_e,ae.count));const le=_e-fe;if(le<0||le===1/0)return;Re.setup(W,P,z,F,G);let ie,Se=oe;if(G!==null&&(ie=T.get(G),Se=Ue,Se.setIndex(ie)),W.isMesh)P.wireframe===!0?(X.setLineWidth(P.wireframeLinewidth*Ze()),Se.setMode(D.LINES)):Se.setMode(D.TRIANGLES);else if(W.isLine){let Ve=P.linewidth;Ve===void 0&&(Ve=1),X.setLineWidth(Ve*Ze()),W.isLineSegments?Se.setMode(D.LINES):W.isLineLoop?Se.setMode(D.LINE_LOOP):Se.setMode(D.LINE_STRIP)}else W.isPoints?Se.setMode(D.POINTS):W.isSprite&&Se.setMode(D.TRIANGLES);if(W.isBatchedMesh)if(k.get("WEBGL_multi_draw"))Se.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ve=W._multiDrawStarts,Ee=W._multiDrawCounts,Ye=W._multiDrawCount,qe=G?T.get(G).bytesPerElement:1,et=xe.get(P).currentProgram.getUniforms();for(let rt=0;rt<Ye;rt++)et.setValue(D,"_gl_DrawID",rt),Se.render(Ve[rt]/qe,Ee[rt])}else if(W.isInstancedMesh)Se.renderInstances(fe,le,W.count);else if(F.isInstancedBufferGeometry){const Ve=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Ee=Math.min(F.instanceCount,Ve);Se.renderInstances(fe,le,Ee)}else Se.render(fe,le)};function ps(M,O,F,P){V!==null&&M.isNodeMaterial&&V.setObject(P,M),ot===!0&&ue.setState(M,F,!1),M.transparent===!0&&M.side===Ti&&M.forceSinglePass===!1?(M.side=_n,M.needsUpdate=!0,mi(M,O,P),M.side=cs,M.needsUpdate=!0,mi(M,O,P),M.side=Ti):mi(M,O,P)}this.compile=function(M,O,F=null){F===null&&(F=M),V!==null&&V.renderStart(M,O,F),I=pe.get(F),I.init(O),L.push(I),F.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(I.pushLight(W),W.castShadow&&I.pushShadow(W))}),M!==F&&M.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(I.pushLight(W),W.castShadow&&I.pushShadow(W))}),I.setupLights(),V!==null&&V.updateLights(I.state.lightsArray),bt=this.localClippingEnabled,ot=ue.init(this.clippingPlanes,bt),ot===!0&&ue.setGlobalState(this.clippingPlanes,O),V!==null&&Le.render(I.state.shadowsArray,F,O);const P=new Set;return M.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const x=W.material;if(x)if(Array.isArray(x))for(let U=0;U<x.length;U++){const z=x[U];ps(z,F,O,W),P.add(z)}else ps(x,F,O,W),P.add(x)}),I=L.pop(),V!==null&&V.renderEnd(),P},this.compileAsync=function(M,O,F=null){const P=this.compile(M,O,F);return new Promise(W=>{function x(){if(P.forEach(function(U){const G=xe.get(U).currentProgram;(G===void 0||G.isReady())&&P.delete(U)}),P.size===0){W(M);return}setTimeout(x,10)}k.get("KHR_parallel_shader_compile")!==null?x():setTimeout(x,10)})};let di=null;function qt(M){di&&di(M)}function ms(){Fn.stop()}function hi(){Fn.start()}const Fn=new yf;Fn.setAnimationLoop(qt),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(M){di=M,ze.setAnimationLoop(M),M===null?Fn.stop():Fn.start()},ze.addEventListener("sessionstart",ms),ze.addEventListener("sessionend",hi),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;V!==null&&V.renderStart(M,O);const F=ze.enabled===!0&&ze.isPresenting===!0,P=B!==null&&(Pe===null||F)&&B.begin(N,Pe);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(O),O=ze.getCamera()),M.isScene===!0&&M.onBeforeRender(N,M,O,Pe),I=pe.get(M,L.length),I.init(O),I.state.textureUnits=me.getTextureUnits(),L.push(I),st.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?vt.setFromArrayCamera(O):Qe.setFromProjectionMatrix(st,Kn,O.reversedDepth),bt=this.localClippingEnabled,ot=ue.init(this.clippingPlanes,bt),C=we.get(M,b.length),C.init(),b.push(C),this.info.render.frame++,ze.enabled===!0&&ze.isPresenting===!0){const U=N.xr.getDepthSensingMesh();U!==null&&jn(U,O,-1/0,N.sortObjects)}jn(M,O,0,N.sortObjects),C.finish(),V!==null&&V.updateLights(I.state.lightsArray),N.sortObjects===!0&&C.sort(Ke,pt),$e=ze.enabled===!1||ze.isPresenting===!1||ze.hasDepthSensing()===!1,$e&&$.addToRenderList(C,M),this.info.autoReset===!0&&this.info.reset(),ot===!0&&ue.beginShadows();const W=I.state.shadowsArray;if(Le.render(W,M,O),ot===!0&&ue.endShadows(),(P&&B.hasRenderPass())===!1){const U=C.opaque,z=C.transmissive;if(I.setupLights(),O.isArrayCamera){const G=O.cameras;if(z.length>0)for(let te=0,J=G.length;te<J;te++){const ae=G[te];Qn(U,z,M,ae)}$e&&$.render(M);for(let te=0,J=G.length;te<J;te++){const ae=G[te];pi(C,M,ae,ae.viewport)}}else z.length>0&&Qn(U,z,M,O),$e&&$.render(M),pi(C,M,O)}Pe!==null&&re===0&&(me.updateMultisampleRenderTarget(Pe),me.updateRenderTargetMipmap(Pe)),P&&B.end(N),M.isScene===!0&&M.onAfterRender(N,M,O),Re.resetDefaultState(),de=-1,be=null,L.pop(),L.length>0?(I=L[L.length-1],me.setTextureUnits(I.state.textureUnits),ot===!0&&ue.setGlobalState(N.clippingPlanes,I.state.camera)):I=null,b.pop(),b.length>0?C=b[b.length-1]:C=null,V!==null&&V.renderEnd()};function jn(M,O,F,P){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)F=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)I.pushLight(M),M.castShadow&&I.pushShadow(M);else if(M.isSprite){const U=O.isArrayCamera?vt:Qe;if(!M.frustumCulled||M.intersectsFrustum(U)){P&&Ie.setFromMatrixPosition(M.matrixWorld).applyMatrix4(st);const z=Me.update(M),G=M.material;G.visible&&C.push(M,z,G,F,Ie.z,null,O)}}else if(M.isMesh||M.isLine||M.isPoints){const U=O.isArrayCamera?vt:Qe;if(!M.frustumCulled||M.intersectsFrustum(U)){const z=Me.update(M),G=M.material;if(P&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ie.copy(M.boundingSphere.center)):(z.boundingSphere===null&&z.computeBoundingSphere(),Ie.copy(z.boundingSphere.center)),Ie.applyMatrix4(M.matrixWorld).applyMatrix4(st)),Array.isArray(G)){const te=z.groups;for(let J=0,ae=te.length;J<ae;J++){const fe=te[J],_e=G[fe.materialIndex];_e&&_e.visible&&C.push(M,z,_e,F,Ie.z,fe,O)}}else G.visible&&C.push(M,z,G,F,Ie.z,null,O)}}}const x=M.children;for(let U=0,z=x.length;U<z;U++)jn(x[U],O,F,P)}function pi(M,O,F,P){const{opaque:W,transmissive:x,transparent:U}=M;I.setupLightsView(F),ot===!0&&ue.setGlobalState(N.clippingPlanes,F),P&&X.viewport(ge.copy(P)),W.length>0&&wn(W,O,F),x.length>0&&wn(x,O,F),U.length>0&&wn(U,O,F),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function Qn(M,O,F,P){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[P.id]===void 0){const fe=k.has("EXT_color_buffer_half_float")||k.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[P.id]=new Sn(1,1,{generateMipmaps:!0,type:fe?Zn:Mn,minFilter:Pi,samples:Math.max(4,K.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Mt.workingColorSpace})}const x=I.state.transmissionRenderTarget[P.id],U=P.viewport||ge;x.setSize(U.z*N.transmissionResolutionScale,U.w*N.transmissionResolutionScale);const z=N.getRenderTarget(),G=N.getActiveCubeFace(),te=N.getActiveMipmapLevel();N.setRenderTarget(x),N.getClearColor(ye),Ne=N.getClearAlpha(),Ne<1&&N.setClearColor(16777215,.5),N.clear(),$e&&$.render(F);const J=N.toneMapping;N.toneMapping=ci;const ae=P.viewport;if(P.viewport!==void 0&&(P.viewport=void 0),I.setupLightsView(P),ot===!0&&ue.setGlobalState(N.clippingPlanes,P),wn(M,F,P),me.updateMultisampleRenderTarget(x),me.updateRenderTargetMipmap(x),k.has("WEBGL_multisampled_render_to_texture")===!1){let fe=!1;for(let _e=0,le=O.length;_e<le;_e++){const ie=O[_e],{object:Se,geometry:Ve,material:Ee,group:Ye}=ie;if(Ee.side===Ti&&Se.layers.test(P.layers)){const qe=Ee.side;Ee.side=_n,Ee.needsUpdate=!0,Yi(Se,F,P,Ve,Ee,Ye),Ee.side=qe,Ee.needsUpdate=!0,fe=!0}}fe===!0&&(me.updateMultisampleRenderTarget(x),me.updateRenderTargetMipmap(x))}N.setRenderTarget(z,G,te),N.setClearColor(ye,Ne),ae!==void 0&&(P.viewport=ae),N.toneMapping=J}function wn(M,O,F){const P=O.isScene===!0?O.overrideMaterial:null;for(let W=0,x=M.length;W<x;W++){const U=M[W],{object:z,geometry:G,group:te}=U;let J=U.material;J.allowOverride===!0&&P!==null&&(J=P),z.layers.test(F.layers)&&Yi(z,O,F,G,J,te)}}function Yi(M,O,F,P,W,x){V!==null&&W.isNodeMaterial&&V.setObject(M,W),M.onBeforeRender(N,O,F,P,W,x),M.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),W.onBeforeRender(N,O,F,P,M,x),W.transparent===!0&&W.side===Ti&&W.forceSinglePass===!1?(W.side=_n,W.needsUpdate=!0,N.renderBufferDirect(F,O,P,W,M,x),W.side=cs,W.needsUpdate=!0,N.renderBufferDirect(F,O,P,W,M,x),W.side=Ti):N.renderBufferDirect(F,O,P,W,M,x),M.onAfterRender(N,O,F,P,W,x)}function nn(M){let O=0;for(const F of M)F.texture!==null&&O++;return O}function mi(M,O,F){O.isScene!==!0&&(O=De);const P=xe.get(M),W=I.state.lights,x=I.state.shadowsArray,U=W.state.version,z=ee.getParameters(M,W.state,x,O,F,I.state.lightProbeGridArray),G=ee.getProgramCacheKey(z);let te=P.programs;P.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?O.environment:null,P.fog=O.fog;const J=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;P.envMap=A.get(M.envMap||P.environment,J),P.envMapRotation=P.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,te===void 0&&(M.addEventListener("dispose",_t),te=new Map,P.programs=te,P.programVariants=new Map);let ae=te.get(G);if(ae!==void 0){if(P.currentProgram===ae&&P.lightsStateVersion===U)return xi(M,z),ae}else z.uniforms=ee.getUniforms(M),V!==null&&M.isNodeMaterial&&V.build(M,F,z),M.onBeforeCompile(z,N),ae=ee.acquireProgram(z,G),te.set(G,ae),P.uniforms=z.uniforms;const fe=P.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(fe.clippingPlanes=ue.uniform),xi(M,z),P.needsLights=Y(M),P.lightsStateVersion=U,P.needsLights&&(fe.ambientLightColor.value=W.state.ambient,fe.lightProbe.value=W.state.probe,fe.sunLights.value=W.state.sun,fe.sunLightShadows.value=W.state.sunShadow,fe.directionalLights.value=W.state.directional,fe.directionalLightShadows.value=W.state.directionalShadow,fe.spotLights.value=W.state.spot,fe.spotLightShadows.value=W.state.spotShadow,fe.rectAreaLights.value=W.state.rectArea,fe.ltc_1.value=W.state.rectAreaLTC1,fe.ltc_2.value=W.state.rectAreaLTC2,fe.pointLights.value=W.state.point,fe.pointLightShadows.value=W.state.pointShadow,fe.hemisphereLights.value=W.state.hemi,fe.sunShadowMatrix.value=W.state.sunShadowMatrix,fe.sunShadowCascade.value=W.state.sunShadowCascade,fe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,fe.spotLightMatrix.value=W.state.spotLightMatrix,fe.spotLightMap.value=W.state.spotLightMap,fe.pointShadowMatrix.value=W.state.pointShadowMatrix),P.numLightProbeGrids=nn(I.state.lightProbeGridArray),P.currentProgram=ae,P.uniformsList=null,ae}function Ks(M,O,F,P,W){const x=xe.get(M),U=x.currentProgram.id+","+P+","+W;let z=x.programVariants.get(U);return z===void 0?(z=mi(M,O,F),x.programVariants.set(U,z)):(x.currentProgram=z,x.uniformsList=null,x.outputColorSpace=P,x.toneMapping=W),z}function gi(M){if(M.uniformsList===null){const O=M.currentProgram.getUniforms();M.uniformsList=vo.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function xi(M,O){const F=xe.get(M);F.outputColorSpace=O.outputColorSpace,F.batching=O.batching,F.batchingColor=O.batchingColor,F.instancing=O.instancing,F.instancingColor=O.instancingColor,F.instancingMorph=O.instancingMorph,F.skinning=O.skinning,F.morphTargets=O.morphTargets,F.morphNormals=O.morphNormals,F.morphColors=O.morphColors,F.morphTargetsCount=O.morphTargetsCount,F.numClippingPlanes=O.numClippingPlanes,F.numIntersection=O.numClipIntersection,F.vertexAlphas=O.vertexAlphas,F.vertexTangents=O.vertexTangents,F.toneMapping=O.toneMapping}function v(M,O,F,P,W){O.isScene!==!0&&(O=De),me.resetTextureUnits();const x=O.fog,U=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?O.environment:null,z=Pe===null?N.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:Mt.workingColorSpace,G=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap,te=A.get(P.envMap||U,G),J=P.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,ae=!!F.attributes.tangent&&(!!P.normalMap||P.anisotropy>0),fe=!!F.morphAttributes.position,_e=!!F.morphAttributes.normal,le=!!F.morphAttributes.color;let ie=ci;P.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(ie=N.toneMapping);const Se=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Ve=Se!==void 0?Se.length:0,Ee=xe.get(P),Ye=I.state.lights;if(ot===!0&&(bt===!0||M!==be)){const At=M===be&&P.id===de;ue.setState(P,M,At)}let qe=!1,et=!1;P.version===Ee.__version?Ee.needsLights&&Ee.lightsStateVersion!==Ye.state.version||W.isBatchedMesh&&Ee.batching===!1||!W.isBatchedMesh&&Ee.batching===!0||W.isBatchedMesh&&Ee.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ee.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ee.instancing===!1||!W.isInstancedMesh&&Ee.instancing===!0||W.isSkinnedMesh&&Ee.skinning===!1||!W.isSkinnedMesh&&Ee.skinning===!0||W.isInstancedMesh&&Ee.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ee.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ee.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ee.instancingMorph===!1&&W.morphTexture!==null||Ee.envMap!==te||P.fog===!0&&Ee.fog!==x||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ue.numPlanes||Ee.numIntersection!==ue.numIntersection)||Ee.vertexAlphas!==J||Ee.vertexTangents!==ae||Ee.morphTargets!==fe||Ee.morphNormals!==_e||Ee.morphColors!==le||Ee.morphTargetsCount!==Ve||Ee.numLightProbeGrids!==nn(I.state.lightProbeGridArray)?qe=!0:(Ee.outputColorSpace!==z||Ee.toneMapping!==ie)&&(et=!0):(qe=!0,Ee.__version=P.version);let rt=Ee.currentProgram;(qe===!0||et===!0)&&(rt=et===!0?Ks(P,O,W,z,ie):mi(P,O,W),V&&P.isNodeMaterial&&V.onUpdateProgram(P,rt,Ee));let It=!1,Jt=!1,En=!1;const gt=rt.getUniforms(),Ut=Ee.uniforms;if(X.useProgram(rt.program)&&(It=!0,Jt=!0,En=!0),P.id!==de&&(de=P.id,Jt=!0),It||be!==M){X.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),gt.setValue(D,"projectionMatrix",M.projectionMatrix),gt.setValue(D,"viewMatrix",M.matrixWorldInverse);const Zt=gt.map.cameraPosition;Zt!==void 0&&Zt.setValue(D,zt.setFromMatrixPosition(M.matrixWorld)),K.logarithmicDepthBuffer&&gt.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial)&&gt.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),be!==M&&(be=M,Jt=!0,En=!0)}if(Ee.needsLights&&(Ye.state.sunShadowMap.length>0&&gt.setValue(D,"sunShadowMap",Ye.state.sunShadowMap,me),Ye.state.directionalShadowMap.length>0&&gt.setValue(D,"directionalShadowMap",Ye.state.directionalShadowMap,me),Ye.state.spotShadowMap.length>0&&gt.setValue(D,"spotShadowMap",Ye.state.spotShadowMap,me),Ye.state.pointShadowMap.length>0&&gt.setValue(D,"pointShadowMap",Ye.state.pointShadowMap,me)),W.isSkinnedMesh){gt.setOptional(D,W,"bindMatrix"),gt.setOptional(D,W,"bindMatrixInverse");const At=W.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),gt.setValue(D,"boneTexture",At.boneTexture,me))}W.isBatchedMesh&&(gt.setOptional(D,W,"batchingTexture"),gt.setValue(D,"batchingTexture",W._matricesTexture,me),gt.setOptional(D,W,"batchingIdTexture"),gt.setValue(D,"batchingIdTexture",W._indirectTexture,me),gt.setOptional(D,W,"batchingColorTexture"),W._colorsTexture!==null&&gt.setValue(D,"batchingColorTexture",W._colorsTexture,me));const ln=F.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Ae.update(W,F,rt),(Jt||Ee.receiveShadow!==W.receiveShadow)&&(Ee.receiveShadow=W.receiveShadow,gt.setValue(D,"receiveShadow",W.receiveShadow)),(P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial)&&P.envMap===null&&O.environment!==null&&(Ut.envMapIntensity.value=O.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=yx()),Jt){if(gt.setValue(D,"toneMappingExposure",N.toneMappingExposure),Ee.needsLights&&E(Ut,En),x&&P.fog===!0&&ve.refreshFogUniforms(Ut,x),ve.refreshMaterialUniforms(Ut,P,ke,Oe,I.state.transmissionRenderTarget[M.id]),Ee.needsLights&&Ee.numLightProbeGrids>0){const At=S;let Zt=0;for(const vi of I.state.lightProbeGridArray)vi.texture!==null&&(At.textures[Zt]=vi.texture,At.min[Zt]=vi.boundingBox.min,At.max[Zt]=vi.boundingBox.max,At.resolution[Zt]=vi.resolution,Zt++);for(const vi in At)At[vi].length=Zt;Ut.probesSH.value=At.textures,Ut.probesMin.value=At.min,Ut.probesMax.value=At.max,Ut.probesResolution.value=At.resolution}vo.upload(D,gi(Ee),Ut,me)}if(P.isShaderMaterial&&P.uniformsNeedUpdate===!0&&(vo.upload(D,gi(Ee),Ut,me),P.uniformsNeedUpdate=!1),P.isSpriteMaterial&&gt.setValue(D,"center",W.center),gt.setValue(D,"modelViewMatrix",W.modelViewMatrix),gt.setValue(D,"normalMatrix",W.normalMatrix),gt.setValue(D,"modelMatrix",W.matrixWorld),P.uniformsGroups!==void 0){const At=P.uniformsGroups;for(let Zt=0,vi=At.length;Zt<vi;Zt++){const Yl=At[Zt];Ge.update(Yl,rt),Ge.bind(Yl,rt)}}return rt}function E(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.sunLights.needsUpdate=O,M.sunLightShadows.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function Y(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return he},this.getActiveMipmapLevel=function(){return re},this.getRenderTarget=function(){return Pe},this.setRenderTargetTextures=function(M,O,F){const P=xe.get(M);P.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,P.__autoAllocateDepthBuffer===!1&&(P.__useRenderToTexture=!1),xe.get(M.texture).__webglTexture=O,xe.get(M.depthTexture).__webglTexture=P.__autoAllocateDepthBuffer?void 0:F,P.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){const F=xe.get(M);F.__webglFramebuffer=O,F.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(M,O=0,F=0){Pe=M,he=O,re=F;let P=null,W=!1,x=!1;if(M){const z=xe.get(M);if(z.__useDefaultFramebuffer!==void 0){X.bindFramebuffer(D.FRAMEBUFFER,z.__webglFramebuffer),ge.copy(M.viewport),Te.copy(M.scissor),Be=M.scissorTest,X.viewport(ge),X.scissor(Te),X.setScissorTest(Be),de=-1;return}else if(z.__webglFramebuffer===void 0)me.setupRenderTarget(M);else if(z.__hasExternalTextures)me.rebindTextures(M,xe.get(M.texture).__webglTexture,xe.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const J=M.depthTexture;if(z.__boundDepthTexture!==J){if(J!==null&&xe.has(J)&&(M.width!==J.image.width||M.height!==J.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");me.setupDepthRenderbuffer(M)}}const G=M.texture;(G.isData3DTexture||G.isDataArrayTexture||G.isCompressedArrayTexture)&&(x=!0);const te=xe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(te[O])?P=te[O][F]:P=te[O],W=!0):M.samples>0&&me.useMultisampledRTT(M)===!1?P=xe.get(M).__webglMultisampledFramebuffer:Array.isArray(te)?P=te[F]:P=te,ge.copy(M.viewport),Te.copy(M.scissor),Be=M.scissorTest}else ge.copy(He).multiplyScalar(ke).floor(),Te.copy(Je).multiplyScalar(ke).floor(),Be=nt;if(F!==0&&(P=Q),X.bindFramebuffer(D.FRAMEBUFFER,P)&&X.drawBuffers(M,P),X.viewport(ge),X.scissor(Te),X.setScissorTest(Be),W){const z=xe.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,z.__webglTexture,F)}else if(x){const z=O;for(let G=0;G<M.textures.length;G++){const te=xe.get(M.textures[G]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+G,te.__webglTexture,F,z)}}else if(M!==null&&F!==0){const z=xe.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,z.__webglTexture,F)}de=-1};function j(M){const O=xe.get(M);return(O.__readFormat!==M.format||O.__readType!==M.type)&&(O.__readFormat=M.format,O.__readType=M.type,O.__formatReadable=K.textureFormatReadable(M.format),O.__typeReadable=K.textureTypeReadable(M.type)),O}this.readRenderTargetPixels=function(M,O,F,P,W,x,U,z=0){if(!(M&&M.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let G=xe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&U!==void 0&&(G=G[U],Array.isArray(G)&&(G=G[0])),G){X.bindFramebuffer(D.FRAMEBUFFER,G);try{const te=M.textures[z],J=te.format,ae=te.type;M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+z);const fe=j(te);if(fe.__formatReadable===!1){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(fe.__typeReadable===!1){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-P&&F>=0&&F<=M.height-W&&D.readPixels(O,F,P,W,Ce.convert(J),Ce.convert(ae),x)}finally{const te=Pe!==null?xe.get(Pe).__webglFramebuffer:null;X.bindFramebuffer(D.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(M,O,F,P,W,x,U,z=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let G=xe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&U!==void 0&&(G=G[U],Array.isArray(G)&&(G=G[0])),G)if(O>=0&&O<=M.width-P&&F>=0&&F<=M.height-W){X.bindFramebuffer(D.FRAMEBUFFER,G);const te=M.textures[z],J=te.format,ae=te.type;M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+z);const fe=j(te);if(fe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(fe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _e=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,_e),D.bufferData(D.PIXEL_PACK_BUFFER,x.byteLength,D.STREAM_READ),D.readPixels(O,F,P,W,Ce.convert(J),Ce.convert(ae),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const le=Pe!==null?xe.get(Pe).__webglFramebuffer:null;X.bindFramebuffer(D.FRAMEBUFFER,le);const ie=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Ed(D,ie,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,_e),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,x),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(_e),D.deleteSync(ie),x}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,F=0){const P=Math.pow(2,-F),W=Math.floor(M.image.width*P),x=Math.floor(M.image.height*P),U=O!==null?O.x:0,z=O!==null?O.y:0;me.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,F,0,0,U,z,W,x),X.unbindTexture()},this.copyTextureToTexture=function(M,O,F=null,P=null,W=0,x=0){let U,z,G,te,J,ae,fe,_e,le;const ie=M.isCompressedTexture?M.mipmaps[x]:M.image;if(F!==null)U=F.max.x-F.min.x,z=F.max.y-F.min.y,G=F.isBox3?F.max.z-F.min.z:1,te=F.min.x,J=F.min.y,ae=F.isBox3?F.min.z:0;else{const gt=Math.pow(2,-W);U=Math.floor(ie.width*gt),z=Math.floor(ie.height*gt),M.isDataArrayTexture?G=ie.depth:M.isData3DTexture?G=Math.floor(ie.depth*gt):G=1,te=0,J=0,ae=0}P!==null?(fe=P.x,_e=P.y,le=P.z):(fe=0,_e=0,le=0);const Se=Ce.convert(O.format),Ve=Ce.convert(O.type);let Ee;O.isData3DTexture?(me.setTexture3D(O,0),Ee=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(me.setTexture2DArray(O,0),Ee=D.TEXTURE_2D_ARRAY):(me.setTexture2D(O,0),Ee=D.TEXTURE_2D),X.activeTexture(D.TEXTURE0),X.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),X.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),X.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const Ye=X.getParameter(D.UNPACK_ROW_LENGTH),qe=X.getParameter(D.UNPACK_IMAGE_HEIGHT),et=X.getParameter(D.UNPACK_SKIP_PIXELS),rt=X.getParameter(D.UNPACK_SKIP_ROWS),It=X.getParameter(D.UNPACK_SKIP_IMAGES);X.pixelStorei(D.UNPACK_ROW_LENGTH,ie.width),X.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ie.height),X.pixelStorei(D.UNPACK_SKIP_PIXELS,te),X.pixelStorei(D.UNPACK_SKIP_ROWS,J),X.pixelStorei(D.UNPACK_SKIP_IMAGES,ae);const Jt=M.isDataArrayTexture||M.isData3DTexture,En=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){const gt=xe.get(M),Ut=xe.get(O),ln=xe.get(gt.__renderTarget),At=xe.get(Ut.__renderTarget);X.bindFramebuffer(D.READ_FRAMEBUFFER,ln.__webglFramebuffer),X.bindFramebuffer(D.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Zt=0;Zt<G;Zt++)Jt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,xe.get(M).__webglTexture,W,ae+Zt),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,xe.get(O).__webglTexture,x,le+Zt)),D.blitFramebuffer(te,J,te+U,J+z,fe,_e,fe+U,_e+z,D.DEPTH_BUFFER_BIT,D.NEAREST);X.bindFramebuffer(D.READ_FRAMEBUFFER,null),X.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(W!==0||M.isRenderTargetTexture||xe.has(M)){const gt=xe.get(M),Ut=xe.get(O);X.bindFramebuffer(D.READ_FRAMEBUFFER,q),X.bindFramebuffer(D.DRAW_FRAMEBUFFER,ne);for(let ln=0;ln<G;ln++)Jt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,gt.__webglTexture,W,ae+ln):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,gt.__webglTexture,W),En?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ut.__webglTexture,x,le+ln):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ut.__webglTexture,x),W!==0?D.blitFramebuffer(te,J,te+U,J+z,fe,_e,fe+U,_e+z,D.COLOR_BUFFER_BIT,D.NEAREST):En?D.copyTexSubImage3D(Ee,x,fe,_e,le+ln,te,J,U,z):D.copyTexSubImage2D(Ee,x,fe,_e,te,J,U,z);X.bindFramebuffer(D.READ_FRAMEBUFFER,null),X.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else En?M.isDataTexture||M.isData3DTexture?D.texSubImage3D(Ee,x,fe,_e,le,U,z,G,Se,Ve,ie.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Ee,x,fe,_e,le,U,z,G,Se,ie.data):D.texSubImage3D(Ee,x,fe,_e,le,U,z,G,Se,Ve,ie):M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,x,fe,_e,U,z,Se,Ve,ie.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,x,fe,_e,ie.width,ie.height,Se,ie.data):D.texSubImage2D(D.TEXTURE_2D,x,fe,_e,U,z,Se,Ve,ie);X.pixelStorei(D.UNPACK_ROW_LENGTH,Ye),X.pixelStorei(D.UNPACK_IMAGE_HEIGHT,qe),X.pixelStorei(D.UNPACK_SKIP_PIXELS,et),X.pixelStorei(D.UNPACK_SKIP_ROWS,rt),X.pixelStorei(D.UNPACK_SKIP_IMAGES,It),x===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&D.generateMipmap(Ee),X.unbindTexture()},this.initRenderTarget=function(M){xe.get(M).__webglFramebuffer===void 0&&me.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?me.setTextureCube(M,0):M.isData3DTexture?me.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?me.setTexture2DArray(M,0):me.setTexture2D(M,0),X.unbindTexture()},this.resetState=function(){he=0,re=0,Pe=null,X.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}class bx extends rf{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new Pt;e.deleteAttribute("uv");const t=new xn({side:_n}),i=new xn,s=new vf(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new xt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new Hn(e,i,6),l=new Xt;l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),l.updateMatrix(),a.setMatrixAt(0,l.matrix),l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),l.updateMatrix(),a.setMatrixAt(1,l.matrix),l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),l.updateMatrix(),a.setMatrixAt(2,l.matrix),l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),l.updateMatrix(),a.setMatrixAt(3,l.matrix),l.position.set(2.291,-.756,-2.621),l.rotation.set(0,-.286,0),l.scale.set(1.546,1.552,1.496),l.updateMatrix(),a.setMatrixAt(4,l.matrix),l.position.set(-2.193,-.369,-5.547),l.rotation.set(0,.516,0),l.scale.set(3.875,3.487,2.986),l.updateMatrix(),a.setMatrixAt(5,l.matrix),this.add(a);const o=new xt(e,Cs(50));o.position.set(-16.116,14.37,8.208),o.scale.set(.1,2.428,2.739),this.add(o);const c=new xt(e,Cs(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const f=new xt(e,Cs(17));f.position.set(14.904,12.198,-1.832),f.scale.set(.15,4.265,6.331),this.add(f);const p=new xt(e,Cs(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);const d=new xt(e,Cs(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const h=new xt(e,Cs(100));h.position.set(0,20,0),h.scale.set(1,.1,1),this.add(h)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Cs(n){return new yh({color:0,emissive:16777215,emissiveIntensity:n})}function Sx(n){let e=n>>>0||2654435769;return function(){e=e+1831565813>>>0;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function Ps(n,e=n){const t=document.createElement("canvas");return t.width=n,t.height=e,t}function wx(n,e,t){const i=new Float32Array(t*t);for(let a=0;a<i.length;a++)i[a]=n();const s=new Float32Array(e*e),r=a=>a*a*(3-2*a);for(let a=0;a<e;a++)for(let l=0;l<e;l++){const o=l/e*t,c=a/e*t,f=Math.floor(o),p=Math.floor(c),d=r(o-f),h=r(c-p),u=i[p%t*t+f%t],_=i[p%t*t+(f+1)%t],g=i[(p+1)%t*t+f%t],m=i[(p+1)%t*t+(f+1)%t];s[a*e+l]=(u*(1-d)+_*d)*(1-h)+(g*(1-d)+m*d)*h}return s}function Zc(n,e,t=4,i=5){const s=new Float32Array(e*e);let r=.5,a=0;for(let l=0;l<i;l++){const o=wx(n,e,t<<l);for(let c=0;c<s.length;c++)s[c]+=o[c]*r;a+=r,r*=.5}for(let l=0;l<s.length;l++)s[l]/=a;return s}function ga(n,e,t=!0){return n.colorSpace=e?yn:Ai,t&&(n.wrapS=n.wrapT=wr),n.anisotropy=8,n.generateMipmaps=!0,n.minFilter=Pi,n.needsUpdate=!0,n}function ir(n,e,t,{bump:i=2,grime:s=.35}={}){const r=Sx(n),a=Ps(e),l=Ps(e),o=Ps(e),c=Ps(e),f=a.getContext("2d"),p=l.getContext("2d"),d=o.getContext("2d"),h=c.getContext("2d");p.fillStyle="#808080",p.fillRect(0,0,e,e),t(f,p,d,h,e,r);const u=f.getImageData(0,0,e,e),_=p.getImageData(0,0,e,e),g=d.getImageData(0,0,e,e),m=h.getImageData(0,0,e,e),y=Zc(r,e,4,6),R=Zc(r,e,32,3),S=new Float32Array(e*e);for(let N=0;N<e*e;N++){const H=1-s*Math.max(0,y[N]*1.6-.45);u.data[N*4]*=H,u.data[N*4+1]*=H,u.data[N*4+2]*=H*.98,S[N]=_.data[N*4]/255+(R[N]-.5)*.06,g.data[N*4]=Math.max(0,Math.min(255,g.data[N*4]+(y[N]-.5)*90+(R[N]-.5)*40))}f.putImageData(u,0,0);const C=new Uint8ClampedArray(e*e*4),I=new Uint8ClampedArray(e*e*4),b=(N,H)=>S[(H+e)%e*e+(N+e)%e];for(let N=0;N<e;N++)for(let H=0;H<e;H++){const V=(b(H+1,N)-b(H-1,N))*i*e/512*4,Q=(b(H,N+1)-b(H,N-1))*i*e/512*4,q=1/Math.hypot(V,Q,1),ne=(N*e+H)*4;C[ne]=(-V*q*.5+.5)*255,C[ne+1]=(Q*q*.5+.5)*255,C[ne+2]=(q*.5+.5)*255,C[ne+3]=255,I[ne]=255,I[ne+1]=g.data[ne],I[ne+2]=m.data[ne],I[ne+3]=255}const L=Ps(e),B=Ps(e);return L.getContext("2d").putImageData(new ImageData(C,e,e),0,0),B.getContext("2d").putImageData(new ImageData(I,e,e),0,0),{map:ga(new xo(a),!0),normalMap:ga(new xo(L),!1),orm:ga(new xo(B),!1)}}const Nt=n=>{const e=Math.round(Math.max(0,Math.min(1,n))*255);return`rgb(${e},${e},${e})`};function fs(n,e,t,i,s,r=.2,a=1){n.strokeStyle=s,n.lineCap="round";for(let l=0;l<i;l++){const o=e()*t,c=e()*t,f=e()*Math.PI,p=(.02+e()*r)*t;n.lineWidth=a*(.4+e()),n.globalAlpha=.15+e()*.5,n.beginPath(),n.moveTo(o,c),n.lineTo(o+Math.cos(f)*p,c+Math.sin(f)*p),n.stroke()}n.globalAlpha=1}function hl(n,e,t,i,s){for(let r=0;r<i;r++){const a=e()*t,l=e()*t*.6,o=(.15+e()*.5)*t,c=2+e()*10,f=n.createLinearGradient(0,l,0,l+o);f.addColorStop(0,s),f.addColorStop(1,"rgba(0,0,0,0)"),n.globalAlpha=.12+e()*.25,n.fillStyle=f,n.fillRect(a,l,c,o)}n.globalAlpha=1}function Ex(n,e,t,i,s,r){n.fillStyle="#8f9690",n.fillRect(0,0,s,s),t.fillStyle=Nt(.62),t.fillRect(0,0,s,s),i.fillStyle=Nt(.25),i.fillRect(0,0,s,s);const a=s/2;for(let l=0;l<2;l++)for(let o=0;o<2;o++){const c=o*a,f=l*a,p=.88+r()*.2;n.fillStyle=`rgb(${132*p|0},${141*p|0},${136*p|0})`,n.fillRect(c+3,f+3,a-6,a-6);const d=a*.12;e.fillStyle=Nt(.56),e.fillRect(c+d,f+d,a-2*d,a-2*d),e.strokeStyle=Nt(.36),e.lineWidth=3,e.strokeRect(c+d,f+d,a-2*d,a-2*d),n.strokeStyle="rgba(30,34,36,0.5)",n.lineWidth=2,n.strokeRect(c+d,f+d,a-2*d,a-2*d),e.strokeStyle=Nt(.12),e.lineWidth=5,e.strokeRect(c,f,a,a),n.strokeStyle="#1a1d1f",n.lineWidth=4,n.strokeRect(c,f,a,a),t.strokeStyle=Nt(.9),t.lineWidth=6,t.strokeRect(c,f,a,a);for(let h=0;h<6;h++)for(const[u,_]of[[c+d*.5+(a-d)*h/6+6,f+d*.5],[c+d*.5+(a-d)*h/6+6,f+a-d*.5],[c+d*.5,f+d*.5+(a-d)*h/6+6],[c+a-d*.5,f+d*.5+(a-d)*h/6+6]])e.fillStyle=Nt(.85),e.beginPath(),e.arc(u,_,3.2,0,7),e.fill(),n.fillStyle="rgba(200,205,200,0.5)",n.beginPath(),n.arc(u-.6,_-.6,2.2,0,7),n.fill(),i.fillStyle=Nt(.9),i.beginPath(),i.arc(u,_,3.2,0,7),i.fill()}for(let l=0;l<260;l++){const o=r()<.5,c=Math.round(r()*2)*a+(r()-.5)*22,f=r()*s,p=1+r()*5,d=o?c:f,h=o?f:c;n.fillStyle=`rgba(${70+r()*40|0},${72+r()*30|0},${70+r()*30|0},0.9)`,n.beginPath(),n.ellipse(d,h,p,p*(.4+r()),r()*3,0,7),n.fill(),i.fillStyle=Nt(1),i.beginPath(),i.arc(d,h,p,0,7),i.fill(),t.fillStyle=Nt(.35),t.beginPath(),t.arc(d,h,p,0,7),t.fill()}hl(n,r,s,46,"rgba(40,30,22,0.9)"),hl(t,r,s,30,"rgba(255,255,255,0.8)"),fs(n,r,s,150,"#cfd3cf",.12,1),fs(e,r,s,80,"#606060",.12,1.4)}function Tx(n,e,t,i,s,r){n.fillStyle="#3a3d40",n.fillRect(0,0,s,s),t.fillStyle=Nt(.5),t.fillRect(0,0,s,s),i.fillStyle=Nt(.85),i.fillRect(0,0,s,s);const a=s/2;for(let c=0;c<2;c++)for(let f=0;f<2;f++){const p=f*a,d=c*a,h=.8+r()*.35;n.fillStyle=`rgb(${58*h|0},${61*h|0},${64*h|0})`,n.fillRect(p+2,d+2,a-4,a-4);const u=a/14;for(let _=0;_<14;_++)for(let g=0;g<14;g++){const m=p+(_+.5)*u,y=d+(g+.5)*u,R=(_+g)%2?.785:-.785;e.fillStyle=Nt(.78),e.beginPath(),e.ellipse(m,y,u*.36,u*.11,R,0,7),e.fill(),n.fillStyle="rgba(120,124,128,0.35)",n.beginPath(),n.ellipse(m-.5,y-.5,u*.34,u*.09,R,0,7),n.fill(),t.fillStyle=Nt(.3),t.beginPath(),t.ellipse(m,y,u*.34,u*.1,R,0,7),t.fill()}e.strokeStyle=Nt(.1),e.lineWidth=6,e.strokeRect(p,d,a,a),n.strokeStyle="#0c0d0e",n.lineWidth=5,n.strokeRect(p,d,a,a);for(const[_,g]of[[p+14,d+14],[p+a-14,d+14],[p+14,d+a-14],[p+a-14,d+a-14]])e.fillStyle=Nt(.25),e.beginPath(),e.arc(_,g,5,0,7),e.fill(),n.fillStyle="#17181a",n.beginPath(),n.arc(_,g,5,0,7),n.fill()}const l=n.createLinearGradient(0,0,s,0);l.addColorStop(.2,"rgba(150,155,160,0)"),l.addColorStop(.5,"rgba(150,155,160,0.16)"),l.addColorStop(.8,"rgba(150,155,160,0)"),n.fillStyle=l,n.fillRect(0,0,s,s);const o=t.createLinearGradient(0,0,s,0);o.addColorStop(.2,"rgba(0,0,0,0)"),o.addColorStop(.5,"rgba(0,0,0,0.35)"),o.addColorStop(.8,"rgba(0,0,0,0)"),t.fillStyle=o,t.fillRect(0,0,s,s),fs(n,r,s,260,"#8d9196",.2,1.2),fs(t,r,s,200,"#202020",.2,2);for(let c=0;c<26;c++){const f=r()*s,p=r()*s,d=6+r()*34,h=n.createRadialGradient(f,p,0,f,p,d);h.addColorStop(0,"rgba(8,8,10,0.55)"),h.addColorStop(1,"rgba(8,8,10,0)"),n.fillStyle=h,n.fillRect(f-d,p-d,2*d,2*d);const u=t.createRadialGradient(f,p,0,f,p,d);u.addColorStop(0,"rgba(0,0,0,0.6)"),u.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=u,t.fillRect(f-d,p-d,2*d,2*d)}}function Ax(n,e,t,i,s,r){n.fillStyle="#6c7074",n.fillRect(0,0,s,s),t.fillStyle=Nt(.42),t.fillRect(0,0,s,s),i.fillStyle=Nt(1),i.fillRect(0,0,s,s);for(let a=0;a<1400;a++){const l=r()*s,o=r()*s,c=20+r()*160,f=90+r()*70|0;n.strokeStyle=`rgba(${f},${f+3},${f+6},0.25)`,n.lineWidth=1,n.beginPath(),n.moveTo(o,l),n.lineTo(o+c,l+(r()-.5)*2),n.stroke()}for(let a=0;a<60;a++){const l=r()*s,o=r()*s,c=8+r()*46,f=n.createRadialGradient(l,o,0,l,o,c);f.addColorStop(0,r()<.5?"rgba(92,52,28,0.5)":"rgba(20,20,24,0.5)"),f.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=f,n.fillRect(l-c,o-c,2*c,2*c);const p=t.createRadialGradient(l,o,0,l,o,c);p.addColorStop(0,"rgba(255,255,255,0.5)"),p.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=p,t.fillRect(l-c,o-c,2*c,2*c)}fs(n,r,s,200,"#c2c6ca",.15,1),fs(e,r,s,120,"#555",.15,1.5)}function Rx(n,e,t,i,s,r){n.fillStyle="#e4e4e0",n.fillRect(0,0,s,s),t.fillStyle=Nt(.55),t.fillRect(0,0,s,s),i.fillStyle=Nt(.1),i.fillRect(0,0,s,s);for(let a=0;a<300;a++){const l=r()*s,o=r()*s,c=.8+r()*r()*r()*9;n.fillStyle=`rgba(${100+r()*50|0},${100+r()*45|0},${104+r()*40|0},0.8)`,n.beginPath(),n.ellipse(l,o,c,c*(.3+r()*.8),r()*3,0,7),n.fill(),i.fillStyle=Nt(.5),i.beginPath(),i.arc(l,o,c,0,7),i.fill(),e.fillStyle=Nt(.42),e.beginPath(),e.arc(l,o,c,0,7),e.fill(),t.fillStyle=Nt(.3),t.beginPath(),t.arc(l,o,c,0,7),t.fill()}hl(n,r,s,30,"rgba(50,38,28,0.8)"),fs(n,r,s,200,"#70706c",.1,1)}function Cx(n,e,t,i,s,r){n.fillStyle="#d8d6d0",n.fillRect(0,0,s,s),t.fillStyle=Nt(.92),t.fillRect(0,0,s,s),i.fillStyle=Nt(0),i.fillRect(0,0,s,s);for(let a=0;a<s;a+=4)e.fillStyle=Nt(.44),e.fillRect(0,a,s,2);for(let a=0;a<s;a+=4)e.fillStyle="rgba(160,160,160,0.5)",e.fillRect(a,0,2,s);for(let a=0;a<40;a++){const l=r()*s,o=6+r()*20,c=e.createLinearGradient(0,l,0,l+o);c.addColorStop(0,"rgba(255,255,255,0)"),c.addColorStop(.5,"rgba(255,255,255,0.5)"),c.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=c,e.fillRect(0,l,s,o),n.fillStyle="rgba(0,0,0,0.07)",n.fillRect(0,l+o*.6,s,o*.5)}for(let a=0;a<50;a++){const l=r()*s,o=r()*s,c=10+r()*50,f=n.createRadialGradient(l,o,0,l,o,c);f.addColorStop(0,"rgba(40,34,28,0.3)"),f.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=f,n.fillRect(l-c,o-c,2*c,2*c)}}let no=null;function Lf(){return no||(no={panel:ir(11,1024,Ex,{bump:2.4}),floor:ir(23,1024,Tx,{bump:3,grime:.45}),metal:ir(37,512,Ax,{bump:1.2}),paint:ir(41,512,Rx,{bump:1.6}),cloth:ir(53,256,Cx,{bump:2.2,grime:.2})},no)}const jc={neonViolet:14242287,turquoise:8702925},_o=6,Px={uWake:{value:0},uTime:{value:0},uUzQ:{value:2},uUzOff:{value:0},uAO:{value:.5},uWakeA:{value:new ut(jc.turquoise)},uWakeB:{value:new ut(jc.neonViolet)}},Lx=`
attribute vec3 aFlat; attribute vec3 aFlatN;
varying vec3 vFlat; varying vec3 vFlatN;
`,Dx=`
varying vec3 vFlat; varying vec3 vFlatN;
uniform vec4 uFrost[${_o}];
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
  for (int i = 0; i < ${_o}; i++) {
    vec3 d = vFlat - uFrost[i].xyz; float r = uFrost[i].w * (1.0 + 0.4 * uWake) * 1.45;
    m0 = max(m0, 1.0 - dot(d, d) / (r * r));
  }
  if (m0 <= 0.0) return;
  float n1 = uzNoise(p * 2.3), n2 = uzNoise(p * 7.1), n3 = uzNoise(p * 23.0);
  float nz = n1 * 0.55 + n2 * 0.3 + n3 * 0.15;
  float m = 0.0;
  for (int i = 0; i < ${_o}; i++) {
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
`,Ix=`
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
`,Nx=`
#include <aomap_fragment>
reflectedLight.indirectDiffuse *= uzAO;
reflectedLight.indirectSpecular *= uzAO;
`;function Ux(n){Object.assign(n.uniforms,Px,this.userData.room),n.vertexShader=Lx+n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vFlat = aFlat; vFlatN = aFlatN;`),n.fragmentShader=Dx+n.fragmentShader.replace("#include <normal_fragment_maps>",Ix).replace("#include <aomap_fragment>",Nx)}function zx(n,e){return{uFrost:{value:Array.from({length:_o},()=>new Bt(0,-100,0,.001))},uRoomMin:{value:new se(...n)},uRoomMax:{value:new se(...e)}}}function sr(n,e,{color:t=16777215,rough:i=1,metal:s=1,normal:r=1}={}){const a=Lf()[n],l=new xn({map:a.map,normalMap:a.normalMap,roughnessMap:a.orm,metalnessMap:a.orm,color:t,roughness:i,metalness:s,vertexColors:!0});return l.normalScale.set(r,r),l.userData.room=e,l.onBeforeCompile=Ux,l.customProgramCacheKey=()=>"uzor2",l}const Po={wall:["panel",16777215],wallDark:["panel",6120555],ceil:["panel",4014663],floor:["floor",16777215],steel:["metal",16777215],steelDark:["metal",4869458],bronze:["metal",12092746],copper:["metal",13662538],weld:["metal",15133938],orange:["paint",13132830],yellow:["paint",13214247],teal:["paint",3112838],white:["paint",14276559],paper:["paint",6118229],red:["paint",9316898],rubber:["cloth",1776671],cloth:["cloth",7305827],clothBlue:["cloth",3952491],clothWarm:["cloth",10123861]};function wi(n,e=1,t=null){const i=new rs({color:new ut(n).multiplyScalar(e),map:t,toneMapped:!1});return i.userData.unlit=!0,i.userData.noShadow=!0,i}function Fx(n){return{panel:sr("panel",n),floor:sr("floor",n,{rough:.85}),metal:sr("metal",n),paint:sr("paint",n),cloth:sr("cloth",n)}}const Un={max:.45,thin:.012,vol:.035,gap:.014,touch:.006,item:.6},hr=n=>[n.x1-n.x0,n.y1-n.y0,n.z1-n.z0],kx=n=>{const[e,t,i]=hr(n);return Math.max(e,t,i)<=Un.max&&t>=Un.thin&&Math.min(e,i)>=Un.thin&&e*t*i<=Un.vol};function Ox(n,{floors:e=[0]}={}){const i=new Map,s=(m,y)=>m+","+y,r=(m,y)=>{if(!(m.x1-m.x0>60||m.z1-m.z0>200))for(let R=Math.floor((m.x0-.01)/.5);R<=Math.floor((m.x1+.01)/.5);R++)for(let S=Math.floor((m.z0-.01)/.5);S<=Math.floor((m.z1+.01)/.5);S++)y(s(R,S))},a=[];n.forEach((m,y)=>{m._n=y,m._small=kx(m),m.x1-m.x0>60||m.z1-m.z0>200?a.push(m):r(m,R=>(i.get(R)||i.set(R,[]).get(R)).push(m))});const l=m=>{const y=new Set(a);return r(m,R=>{for(const S of i.get(R)||[])y.add(S)}),y.delete(m),y},o=[],c=new Set;for(const m of n){if(!m._small||m.fix||m.loose||m.soft===!1)continue;const y=(m.x0+m.x1)/2,R=(m.y0+m.y1)/2,S=(m.z0+m.z1)/2,C=(m.x1-m.x0)*(m.z1-m.z0);let I=e.some(B=>Math.abs(m.y0-B)<=Un.gap),b=!1,L=!1;for(const B of l(m)){const N=(B.x1-B.x0)*(B.z1-B.z0),H=y>=B.x0-.005&&y<=B.x1+.005&&S>=B.z0-.005&&S<=B.z1+.005;if(H&&!B._small&&R>B.y0&&R<B.y1-.004){b=!0;break}H&&!I&&Math.abs(m.y0-B.y1)<=Un.gap&&(!B._small||N>=C*2.5)&&(I=!0),Math.abs(B.y0-m.y1)<=Un.gap&&N>C*1.5&&B.x0<m.x1&&B.x1>m.x0&&B.z0<m.z1&&B.z1>m.z0&&(L=!0)}b||L||(o.push(m),I&&c.add(m))}const f=new Map(o.map(m=>[m,m])),p=new Map(o.map(m=>[m,{x0:m.x0,x1:m.x1,y0:m.y0,y1:m.y1,z0:m.z0,z1:m.z1}])),d=m=>{for(;f.get(m)!==m;)f.set(m,f.get(f.get(m))),m=f.get(m);return m},h=new Set(o),u=Un.touch;for(const m of o)for(const y of l(m)){if(!h.has(y)||y._n<m._n||m.x0>y.x1+u||y.x0>m.x1+u||m.y0>y.y1+u||y.y0>m.y1+u||m.z0>y.z1+u||y.z0>m.z1+u||m.solo&&y.solo&&c.has(m)&&c.has(y))continue;const R=d(m),S=d(y);if(R===S)continue;const C=p.get(R),I=p.get(S),b={x0:Math.min(C.x0,I.x0),x1:Math.max(C.x1,I.x1),y0:Math.min(C.y0,I.y0),y1:Math.max(C.y1,I.y1),z0:Math.min(C.z0,I.z0),z1:Math.max(C.z1,I.z1)};Math.max(...hr(b))>Un.item||(f.set(S,R),p.set(R,b))}const _=new Map;for(const m of o){const y=d(m);(_.get(y)||_.set(y,[]).get(y)).push(m)}const g=[];for(const m of _.values()){if(!m.some(I=>c.has(I)))continue;const y=p.get(d(m[0])),R=new Set(m);let S=!1;const C=[];for(const I of m)for(const b of l(I))if(!(R.has(b)||h.has(b)||b.fix||b.loose||Math.max(...hr(b))>Un.max)&&!(I.x0>b.x1+u||b.x0>I.x1+u||I.y0>b.y1+u||b.y0>I.y1+u||I.z0>b.z1+u||b.z0>I.z1+u)){if(b.soft===!1){S=!0;break}b.y0>=y.y0+.008&&!b._small&&Math.max(Math.max(y.x1,b.x1)-Math.min(y.x0,b.x0),Math.max(y.z1,b.z1)-Math.min(y.z0,b.z0))<=Un.item&&(R.add(b),C.push(b))}if(!S){for(const I of C)y.x0=Math.min(y.x0,I.x0),y.x1=Math.max(y.x1,I.x1),y.y1=Math.max(y.y1,I.y1),y.z0=Math.min(y.z0,I.z0),y.z1=Math.max(y.z1,I.z1);g.push({parts:[...m,...C].map(I=>I._n),box:y})}}for(let m=g.length-1;m>=0;m--){const y=g[m].box;if(Math.max(...hr(y))>.07)continue;const R=(y.x0+y.x1)/2,S=(y.z0+y.z1)/2,C=g.find(I=>I!==g[m]&&Math.max(...hr(I.box))>.07&&R>I.box.x0&&R<I.box.x1&&S>I.box.z0&&S<I.box.z1&&y.y0>=I.box.y0+.015&&y.y0<=I.box.y1+Un.gap+.01);C&&(C.parts.push(...g[m].parts),C.box.y1=Math.max(C.box.y1,y.y1),g.splice(m,1))}return g.sort((m,y)=>m.parts[0]-y.parts[0]),g}function Bx(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},l=n[0].morphTargetsRelative,o=new tn;o.morphTargetsRelative=l;let c=0;for(let f=0;f<n.length;++f){const p=n[f];let d=0,h=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const u in p.attributes){if(!i.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(p.attributes[u]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(l!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const u in p.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;if(p.morphAttributes[u].length!==n[0].morphAttributes[u].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have the same number of morph targets for the "'+u+'" morph attribute.'),null;a[u]===void 0&&(a[u]=[]),a[u].push(p.morphAttributes[u]),h++}if(h!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of morph attributes."),null;if(e){let u;if(t)u=p.index.count;else if(p.attributes.position!==void 0)u=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;o.addGroup(c,u,f),c+=u}}if(t){let f=0;const p=[];for(let d=0;d<n.length;++d){const h=n[d].index;for(let u=0;u<h.count;++u)p.push(h.getX(u)+f);f+=n[d].attributes.position.count}o.setIndex(p)}for(const f in r){const p=Qc(r[f]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;o.setAttribute(f,p)}for(const f in a){const p=a[f][0].length;if(p!==0){o.morphAttributes=o.morphAttributes||{},o.morphAttributes[f]=[];for(let d=0;d<p;++d){const h=[];for(let _=0;_<a[f].length;++_)h.push(a[f][_][d]);const u=Qc(h);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;o.morphAttributes[f].push(u)}}}return o}function Qc(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){const f=n[c];if(e===void 0&&(e=f.array.constructor),e!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=f.itemSize),t!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=f.normalized),i!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=f.gpuType),s!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=f.count*t}const a=new e(r),l=new vn(a,t,i);let o=0;for(let c=0;c<n.length;++c){const f=n[c];if(f.isInterleavedBufferAttribute){const p=o/t;for(let d=0,h=f.count;d<h;d++)for(let u=0;u<t;u++){const _=f.getComponent(d,u);l.setComponent(d+p,u,_)}}else a.set(f.array,o);o+=f.count*t}return s!==void 0&&(l.gpuType=s),l}const rr=new se;function In(n,e,t,i,s,r){const a=2*Math.PI*s/4,l=Math.max(r-2*s,0),o=Math.PI/4;rr.copy(e),rr[i]=0,rr.normalize();const c=.5*a/(a+l),f=1-rr.angleTo(n)/o;return Math.sign(rr[t])===1?f*c:l/(a+l)+c+c*(1-f)}class Xl extends Pt{constructor(e=1,t=1,i=1,s=2,r=.1){const a=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},a===1)return;const l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;const o=new se,c=new se,f=new se(e,t,i).divideScalar(2).subScalar(r),p=this.attributes.position.array,d=this.attributes.normal.array,h=this.attributes.uv.array,u=p.length/6,_=new se,g=.5/a;for(let m=0,y=0;m<p.length;m+=3,y+=2)switch(o.fromArray(p,m),c.copy(o),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),p[m+0]=f.x*Math.sign(o.x)+c.x*r,p[m+1]=f.y*Math.sign(o.y)+c.y*r,p[m+2]=f.z*Math.sign(o.z)+c.z*r,d[m+0]=c.x,d[m+1]=c.y,d[m+2]=c.z,Math.floor(m/u)){case 0:_.set(1,0,0),h[y+0]=In(_,c,"z","y",r,i),h[y+1]=1-In(_,c,"y","z",r,t);break;case 1:_.set(-1,0,0),h[y+0]=1-In(_,c,"z","y",r,i),h[y+1]=1-In(_,c,"y","z",r,t);break;case 2:_.set(0,1,0),h[y+0]=1-In(_,c,"x","z",r,e),h[y+1]=In(_,c,"z","x",r,i);break;case 3:_.set(0,-1,0),h[y+0]=1-In(_,c,"x","z",r,e),h[y+1]=1-In(_,c,"z","x",r,i);break;case 4:_.set(0,0,1),h[y+0]=1-In(_,c,"x","y",r,e),h[y+1]=1-In(_,c,"y","x",r,t);break;case 5:_.set(0,0,-1),h[y+0]=In(_,c,"x","y",r,e),h[y+1]=1-In(_,c,"y","x",r,t);break}}static fromJSON(e){return new Xl(e.width,e.height,e.depth,e.segments,e.radius)}}const _r=42,io=new ut,Hx=new se(1,0,0);function Df(n){const e=n.z/_r,t=_r-n.y;return n.set(n.x,_r-t*Math.cos(e),t*Math.sin(e))}function is(n,e=new en){return e.setFromAxisAngle(Hx,-n/_r)}function Ln(n,e,t,i=new se){return Df(i.set(n,e,t))}function Gx(n){const e=n.attributes.position,t=n.attributes.normal,i=new Float32Array(e.count*3),s=new Float32Array(e.count*3),r=new se;for(let a=0;a<e.count;a++){const l=e.getX(a),o=e.getY(a),c=e.getZ(a);i[a*3]=l,i[a*3+1]=o,i[a*3+2]=c;const f=t.getX(a),p=t.getY(a),d=t.getZ(a);s[a*3]=f,s[a*3+1]=p,s[a*3+2]=d,Df(r.set(l,o,c)),e.setXYZ(a,r.x,r.y,r.z);const h=c/_r,u=Math.cos(h),_=Math.sin(h);t.setXYZ(a,f,p*u+d*_,-p*_+d*u)}return n.setAttribute("aFlat",new vn(i,3)),n.setAttribute("aFlatN",new vn(s,3)),n.computeBoundingSphere(),n.computeBoundingBox(),n}new Tt;const Vx=new dn,Wx=new se,Xx=new se(1,1,1),eu=[],qx={floors:[0]};function $x(n,e){const t=[],i=(f,p,d,h,u,_)=>{p-f>1e-4&&h-d>1e-4&&_-u>1e-4&&t.push({x0:f,x1:p,y0:d,y1:h,z0:u,z1:_})},s=Math.max(n.x0,e.x0),r=Math.min(n.x1,e.x1),a=Math.max(n.y0,e.y0),l=Math.min(n.y1,e.y1),o=Math.max(n.z0,e.z0),c=Math.min(n.z1,e.z1);return s>=r||a>=l||o>=c?[n]:(i(n.x0,s,n.y0,n.y1,n.z0,n.z1),i(r,n.x1,n.y0,n.y1,n.z0,n.z1),i(s,r,n.y0,n.y1,n.z0,o),i(s,r,n.y0,n.y1,c,n.z1),i(s,r,n.y0,a,o,c),i(s,r,l,n.y1,o,c),t)}class qn{constructor({record:e=!1}={}){this.bins=new Map,this.record=e,this.fix="",this.solo=!1,this.parts=[]}fixed(e,t){const i=this.fix;this.fix=e||"закреплено";try{t()}finally{this.fix=i}return this}note(e,t){if(!this.record)return;t.computeBoundingBox();const i=t.boundingBox,s=Po[e],r={mat:e,fix:this.fix,solo:this.solo,soft:!!s,at:qn.trace?qn.trace():"",x0:i.min.x,x1:i.max.x,y0:i.min.y,y1:i.max.y,z0:i.min.z,z1:i.max.z};this.parts.push({p:r,g:t,bin:s?s[0]:e})}takeLoose(){const e=this.parts,t=Ox(e.map(s=>s.p),{floors:qx.floors}),i=new Set;for(const s of t){const r=s.box,a=(r.x0+r.x1)/2,l=(r.y0+r.y1)/2,o=(r.z0+r.z1)/2,c="lz"+eu.length,f=s.parts.map(p=>{const d=e[p];return i.add(d.g),d.p.loose=c,d.g.translate(-a,-l,-o),{mat:d.p.mat,faktura:d.bin,g:d.g}});eu.push({id:c,x:a,y:l,z:o,h:[Math.max(.02,(r.x1-r.x0)/2),Math.max(.012,(r.y1-r.y0)/2),Math.max(.02,(r.z1-r.z0)/2)],vol:(r.x1-r.x0)*(r.y1-r.y0)*(r.z1-r.z0),geos:f})}if(i.size)for(const[s,r]of[...this.bins]){const a=r.filter(l=>!i.has(l));a.length?this.bins.set(s,a):this.bins.delete(s)}this.parts=[]}add(e,t,i){let s=t.index?t.toNonIndexed():t.clone();for(const a of Object.keys(s.attributes))["position","normal","uv"].includes(a)||s.deleteAttribute(a);s.attributes.uv||s.setAttribute("uv",new vn(new Float32Array(s.attributes.position.count*2),2)),i&&s.applyMatrix4(i),this.note(e,s);const r=Po[e];if(r){io.set(r[1]);const a=s.attributes.position.count,l=new Float32Array(a*3);for(let o=0;o<a;o++)l[o*3]=io.r,l[o*3+1]=io.g,l[o*3+2]=io.b;s.setAttribute("color",new vn(l,3)),e=r[0]}return this.bins.has(e)||this.bins.set(e,[]),this.bins.get(e).push(s),this}addColored(e,t){const i=t.index?t.toNonIndexed():t.clone();for(const s of Object.keys(i.attributes))["position","normal","uv","color"].includes(s)||i.deleteAttribute(s);if(i.attributes.uv||i.setAttribute("uv",new vn(new Float32Array(i.attributes.position.count*2),2)),!i.attributes.color){const s=i.attributes.position.count,r=new Float32Array(s*3).fill(1);i.setAttribute("color",new vn(r,3))}return this.bins.has(e)||this.bins.set(e,[]),this.bins.get(e).push(i),this}mtx(e,t,i,s=0,r=0,a=0,l=1,o=1,c=1){return new Tt().compose(Wx.set(e,t,i),new en().setFromEuler(Vx.set(s,r,a,"YXZ")),Xx.set(l,o,c)).clone()}box(e,t,i,s,r,a,l,{rx:o=0,ry:c=0,rz:f=0,tile:p=2,uo:d=0,vo:h=0,bevel:u}={}){const _=o||c||f;if(qn.holes&&qn.holes.length&&!_&&!this.noHoles){const B={x0:t-r/2,x1:t+r/2,y0:i-a/2,y1:i+a/2,z0:s-l/2,z1:s+l/2},N=qn.holes.filter(H=>H.x0<B.x1&&H.x1>B.x0&&H.y0<B.y1&&H.y1>B.y0&&H.z0<B.z1&&H.z1>B.z0);if(N.length){let H=[B];for(const V of N)H=H.flatMap(Q=>$x(Q,V));this.noHoles=!0;try{for(const V of H)this.box(e,(V.x0+V.x1)/2,(V.y0+V.y1)/2,(V.z0+V.z1)/2,V.x1-V.x0,V.y1-V.y0,V.z1-V.z0,{tile:p,uo:d,vo:h,bevel:0})}finally{this.noHoles=!1}return this}}const g=_?1:Math.max(1,Math.ceil(l/.8)),m=_&&Math.abs(Math.abs(c)-Math.PI/2)<.01?Math.max(1,Math.ceil(r/.8)):1,y=Math.min(r,a,l),R=Math.max(r,a,l);u===void 0&&(u=y>=.1&&R<=2.2&&g<=3?Math.min(.022,y*.14):0);const S=u?new Xl(r,a,l,1,u):new Pt(r,a,l,m,1,g),C=S.index?S.toNonIndexed():S,I=C.attributes.position,b=C.attributes.normal,L=C.attributes.uv;for(let B=0;B<I.count;B++){const N=I.getX(B)+(_?0:t),H=I.getY(B)+(_?0:i),V=I.getZ(B)+(_?0:s),Q=Math.abs(b.getX(B)),q=Math.abs(b.getY(B));Q>.5?L.setXY(B,V/p+d,H/p+h):q>.5?L.setXY(B,N/p+d,V/p+h):L.setXY(B,N/p+d,H/p+h)}return this.add(e,C,this.mtx(t,i,s,o,c,f))}slab(e,t,i,s,r,a,l,o){return this.box(e,(t+r)/2,(i+a)/2,(s+l)/2,Math.abs(r-t),Math.abs(a-i),Math.abs(l-s),o)}pipe(e,t,i,s,{seg:r=12,cap:a=!1}={}){const l=new se(...t),o=new se(...i),c=l.distanceTo(o),f=new ii(s,s,c,r,Math.max(1,Math.ceil(c/.8)),!a),p=f.attributes.uv;for(let h=0;h<p.count;h++)p.setXY(h,p.getX(h)*Math.max(1,Math.round(s*12)),p.getY(h)*c/2);const d=new en().setFromUnitVectors(new se(0,1,0),o.clone().sub(l).normalize());return this.add(e,f,new Tt().compose(l.clone().add(o).multiplyScalar(.5),d,new se(1,1,1)))}cable(e,t,i=.025,{seg:s=6,tension:r=.5}={}){const a=new hf(t.map(o=>new se(...o)),!1,"catmullrom",r),l=Math.max(8,Math.ceil(a.getLength()/.12));return this.add(e,new Gl(a,l,i,s,!1))}wall(e,t,i,s,r,a,l,o,c=[],f){const p=c.slice().sort((_,g)=>_.a0-g.a0),d=(_,g,m,y)=>{g-_<1e-4||y-m<1e-4||(t==="x"?this.slab(e,i-o/2,m,_,i+o/2,y,g,f):this.slab(e,_,m,i-o/2,g,y,i+o/2,f))},h=.003;let u=s;for(const _ of p)d(u,_.a0-h,a,l),d(_.a0-h,_.a1+h,a,_.y0-h),d(_.a0-h,_.a1+h,_.y1+h,l),u=_.a1+h;return d(u,r,a,l),this}build(e,{shadows:t=!0}={}){this.record&&this.takeLoose();const i=new zs;for(const[s,r]of this.bins){const a=e[s];if(!a)throw new Error("нет материала "+s);const l=Gx(Bx(r,!1));for(const c of r)c.dispose();const o=new xt(l,a);o.name=s,o.castShadow=t&&!a.transparent&&!a.userData.noShadow,o.receiveShadow=!a.userData.unlit,i.add(o)}return this.bins.clear(),i}}class Yx{constructor(e,{spots:t=3,points:i=3}={}){this.defs=[],this.spots=[],this.points=[],this.slotDef=[],this.dirty=[],this.rr=0,this.shadowsPerFrame=3,this.forceShadows=!1;for(let s=0;s<t;s++){const r=new Eh(16777215,0,30,.6,.5,1.6);r.castShadow=!0,r.shadow.mapSize.set(1024,1024),r.shadow.bias=-.0015,r.shadow.normalBias=.03,r.shadow.camera.near=.2,r.shadow.autoUpdate=!1,e.add(r,r.target),this.spots.push(r),this.slotDef.push(null),this.dirty.push(!0)}for(let s=0;s<i;s++){const r=new vf(16777215,0,12,1.8);e.add(r),this.points.push(r)}this.nSpots=t,this.nPoints=i}setTier({spots:e,shadowSpots:t,shadowSize:i,points:s,shadowsPerFrame:r}){this.nSpots=Math.min(e,this.spots.length),this.nPoints=Math.min(s,this.points.length),this.shadowsPerFrame=r,this.spots.forEach((a,l)=>{a.visible=l<this.nSpots,a.castShadow=l<t,a.shadow.mapSize.x!==i&&(a.shadow.mapSize.set(i,i),a.shadow.map&&(a.shadow.map.dispose(),a.shadow.map=null)),this.dirty[l]=!0}),this.points.forEach((a,l)=>{a.visible=l<this.nPoints})}add(e){return e.world=Ln(...e.pos),e.to&&(e.worldTo=Ln(...e.to)),e.reach=e.reach||26,e.col=new ut(e.color),this.defs.push(e),e}touch(e,t){this.spots.forEach((i,s)=>{const r=this.slotDef[s];r&&Math.hypot(r.pos[0]-e,r.pos[2]-t)<(r.dist||14)+1&&(this.dirty[s]=!0)})}update(e,t,i,s=0,r=null){const a=(c,f,p)=>{const d=[];for(const h of this.defs){if(h.kind!==c||h.off)continue;const u=Math.hypot(h.pos[0]-e,h.pos[2]-t),_=1-Math.min(1,Math.max(0,(u-(h.reach-5))/5));_>0&&d.push([_*(h.prio||1),_,h])}d.sort((h,u)=>u[0]-h[0]);for(let h=0;h<f.length;h++){const u=f[h],_=h<p?d[h]:null;if(!_){u.intensity=0,c==="spot"&&(this.slotDef[h]=null);continue}const g=_[2],m=g.wakeKeep??.16;u.color.copy(g.col),s>0&&r&&u.color.lerp(r,s*.75),u.intensity=g.power*_[1]*(g.flicker?g.flicker(i):1)*(1-s*(1-m)),u.position.copy(g.world),u.distance=g.dist||14,u.decay=g.decay??(c==="spot"?1.6:1.8),c==="spot"&&(u.target.position.copy(g.worldTo),u.target.updateMatrixWorld(),u.angle=g.angle||.6,u.penumbra=g.penumbra??.6,u.shadow.camera.far=u.distance,u.shadow.camera.near=g.near||.2,this.slotDef[h]!==g&&(this.slotDef[h]=g,this.dirty[h]=!0))}};a("spot",this.spots,this.nSpots),a("point",this.points,this.nPoints);let l=this.forceShadows?99:this.shadowsPerFrame,o=0;for(let c=0;c<this.spots.length&&l>0;c++){const f=(this.rr+c)%this.spots.length,p=this.spots[f];!p.castShadow||!p.visible||(this.forceShadows||this.dirty[f]&&p.intensity>0)&&(p.shadow.needsUpdate=!0,this.dirty[f]=!1,l--,o++,this.rr=f+1)}return o}}let ft=null;function If(n){ft=n}function Ls(n,e,t,i=1e9){let s=null,r=i,a=0,l=0;for(const c of t){let f=0,p=r,d=-1,h=0,u=!1;for(let _=0;_<3&&!u;_++){const g=_===0?c.x0:_===1?c.y0:c.z0,m=_===0?c.x1:_===1?c.y1:c.z1,y=n[_],R=e[_];if(Math.abs(R)<1e-9){(y<g||y>m)&&(u=!0);continue}let S=(g-y)/R,C=(m-y)/R,I=-1;if(S>C){const b=S;S=C,C=b,I=1}S>f&&(f=S,d=_,h=I),C<p&&(p=C),f>p&&(u=!0)}!u&&d>=0&&f>1e-4&&f<r&&(r=f,s=c,a=d,l=h)}if(!s)return null;const o=[0,0,0];return o[a]=l,{box:s,t:r,n:o}}const Kx=(n,e,t)=>n>t.x0&&n<t.x1&&e>t.z0&&e<t.z1;function Jx(n,e,t,i,s){let r=0,a=1;const l=t-n,o=i-e;for(const[c,f]of[[-l,n-s.x0],[l,s.x1-n],[-o,e-s.z0],[o,s.z1-e]]){if(Math.abs(c)<1e-12){if(f<0)return!1;continue}const p=f/c;if(c<0){if(p>a)return!1;p>r&&(r=p)}else{if(p<r)return!1;p<a&&(a=p)}}return r<a}function Lo(n,e,t,i,s,r,a,l=ft.PH){if(l.legacyPush){for(const h of i)for(const u of h){if(!a(u))continue;const _=Math.max(u.x0,Math.min(n.x,u.x1)),g=Math.max(u.z0,Math.min(n.z,u.z1)),m=n.x-_,y=n.z-g,R=Math.hypot(m,y);if(R<r&&R>1e-6)n.x=_+m/R*r,n.z=g+y/R*r;else if(R<=1e-6){const S=[[u.x0-r-n.x,0],[u.x1+r-n.x,0],[0,u.z0-r-n.z],[0,u.z1+r-n.z]].sort((C,I)=>Math.abs(C[0]+C[1])-Math.abs(I[0]+I[1]))[0];n.x+=S[0],n.z+=S[1]}}return!1}const o=(h,u)=>{for(const _ of i)for(const g of _)if(a(g)&&Kx(h,u,g))return g;return null},c=o(e,t);if(!c)for(const h of i)for(const u of h)a(u)&&Jx(e,t,n.x,n.z,u)&&(n.x=e,n.z=t);for(let h=0;h<2;h++){for(const u of s){if(!a(u))continue;const _=n.x-u.x,g=n.z-u.z,m=Math.hypot(_,g),y=u.r+r;m<y&&m>1e-6&&(n.x=u.x+_/m*y,n.z=u.z+g/m*y)}for(const u of i)for(const _ of u){if(!a(_))continue;const g=Math.max(_.x0,Math.min(n.x,_.x1)),m=Math.max(_.z0,Math.min(n.z,_.z1)),y=n.x-g,R=n.z-m,S=Math.hypot(y,R);S<r&&S>1e-6&&(n.x=g+y/S*r,n.z=m+R/S*r)}}const f=o(n.x,n.z);if(!f)return!1;if(!c)return n.x=e,n.z=t,!0;const p=.01,d=[[f.x0-r-p,n.z],[f.x1+r+p,n.z],[n.x,f.z0-r-p],[n.x,f.z1+r+p]].filter(h=>!o(h[0],h[1])&&(l.exitAnywhere||ft.placeAt(h[0],h[1],.02,n.y||0))).sort((h,u)=>Math.hypot(h[0]-n.x,h[1]-n.z)-Math.hypot(u[0]-n.x,u[1]-n.z));return d.length?(n.x=d[0][0],n.z=d[0][1]):(n.x=e,n.z=t),!0}function tu(n,e,t,i=.3,s=.6,r=n.x,a=n.z){return Lo(n,r,a,[e.boxes],e.circles,t,l=>l.y1>i&&l.y0<s)}const nu=n=>({x0:n.x-n.hx,x1:n.x+n.hx,z0:n.z-n.hz,z1:n.z+n.hz,y0:n.y-n.hy,y1:n.y+n.hy,body:n});function Nf(n,e,t,i,s=[],r=ft.playerR*.75){let a=0;const l=o=>{o.y1>a&&o.y1<=t&&n>o.x0-r&&n<o.x1+r&&e>o.z0-r&&e<o.z1+r&&(a=o.y1)};for(const o of i.boxes)o.y1<50&&l(o);for(const o of s)l(o);return a}function so(n,e,t,i,s=[],r=ft.playerR*.9){let a=99;const l=o=>{o.y0<a&&o.y0>=t&&n>o.x0-r&&n<o.x1+r&&e>o.z0-r&&e<o.z1+r&&(a=o.y0)};for(const o of i.boxes)o.y0>0&&l(o);for(const o of s)l(o);return a}function Zx(n=ft.spawn.x,e=ft.spawn.z){return{x:n,z:e,y:0,vy:0,ground:!0,crouch:!1,crawl:!1,h:ft.PH.stand,eye:ft.PH.eye,landed:0,yaw:ft.spawn.yaw,pitch:ft.spawn.pitch,input:{forward:0,strafe:0,jump:!1,crouch:!1},speed:ft.speed}}function jx(n,e,t,i=[],s=[]){const r=Math.max(-1,Math.min(1,n.input.forward)),a=Math.max(-1,Math.min(1,n.input.strafe)),l=Math.sin(n.yaw),o=Math.cos(n.yaw);n.crawl&&!n.input.crawl&&so(n.x,n.z,n.y+ft.PH.crawl-.05,e,i,ft.playerR+.06)>=n.y+ft.PH.crouch&&(n.crawl=!1),n.input.crawl&&n.ground&&!n.noCrawl&&(n.crawl=!0),n.input.crouch||n.crawl?n.crouch=!0:n.crouch&&so(n.x,n.z,n.y+ft.PH.crouch-.05,e,i)>=n.y+ft.PH.stand&&(n.crouch=!1),n.h=n.crawl?ft.PH.crawl:n.crouch?ft.PH.crouch:ft.PH.stand,n.eye+=((n.crawl?ft.PH.eyeCrawl:n.crouch?ft.PH.eyeCrouch:ft.PH.eye)-n.eye)*Math.min(1,t*12);const c=n.crawl?Math.min(n.speed,ft.PH.crawlSpeed):n.speed*(n.crouch?ft.PH.crouchSpeed:1),f=n.ground||ft.PH.legacyPush?ft.PH.step:ft.PH.ledge,p=n.y+f;let d=n.y+n.h;const h=C=>C.y1>p&&C.y0<d,u=Math.max(1,Math.ceil(c*t/.15)),_=n.y;for(let C=0;C<u;C++){const I=n.x,b=n.z;if(n.x+=(-l*r+o*a)*c*t/u,n.z+=(-o*r-l*a)*c*t/u,Lo(n,I,b,[e.boxes,i],e.circles,ft.playerR,h),n.crouch&&!n.crawl&&n.ground&&!n.noCrawl&&(r||a)){const L=c*t/u;if(Math.hypot(n.x-I,n.z-b)<L*.6){const N=n.x,H=n.z;d=n.y+ft.PH.crawl,n.x=I+(-l*r+o*a)*L,n.z=b+(-o*r-l*a)*L,Lo(n,I,b,[e.boxes,i],e.circles,ft.playerR,h),Math.hypot(n.x-I,n.z-b)>L*.9?(n.crawl=!0,n.h=ft.PH.crawl):(d=n.y+n.h,n.x=N,n.z=H)}}}{const C=ft.boundsAt(n.x);n.x=Math.max(C.x0+ft.playerR,Math.min(C.x1-ft.playerR,n.x)),n.z=Math.max(C.z0+ft.playerR,Math.min(C.z1-ft.playerR,n.z))}const g=n.g||ft.PH.g,m=n.jumpH||ft.PH.jumpH;n.landed=0,n.input.jump&&n.ground&&so(n.x,n.z,n.y+n.h-.05,e,i)>n.y+n.h+.15&&(n.vy=Math.sqrt(2*g*m),n.ground=!1,n.jumped=!0),n.input.jump=!1,n.vy-=g*t;let y=n.y+n.vy*t;const R=Nf(n.x,n.z,n.y+(ft.PH.legacyPush&&!n.ground?.02:f),e,i.concat(s));y<=R?(!n.ground&&n.vy<-1.5&&(n.landed=Math.min(1,-n.vy/6)),y=R,n.vy=0,n.ground=!0):y>R+.02&&(n.ground=!1);const S=Math.min(so(n.x,n.z,n.y+n.h-.05,e,i),ft.roomHeight(n.x,n.z,_));y+n.h>S&&(y=S-n.h,n.vy>0&&(n.vy=0)),n.y=Math.max(0,y)}function Qx(n,e,t,i=[]){n.vy-=ft.PH.gBody*t;let s=0;const r=Math.max(n.hx,n.hz),a=n.x,l=n.z;n.x+=n.vx*t,n.z+=n.vz*t;const o={x:n.x,z:n.z,y:n.y};tu(o,e,r,n.y-n.hy+.05,n.y+n.hy,a,l);let c=null,f=!1;for(const _ of i){if(_.y1<=n.y-n.hy+.05||_.y0>=n.y+n.hy)continue;const g=Math.min(o.x+n.hx-_.x0,_.x1-(o.x-n.hx)),m=Math.min(o.z+n.hz-_.z0,_.z1-(o.z-n.hz));g>0&&m>0&&(c=_,f=g<m,g<m?o.x+=o.x<(_.x0+_.x1)/2?-g:g:o.z+=o.z<(_.z0+_.z1)/2?-m:m)}let p=0;if(c){const _=o.x,g=o.z;tu(o,e,r,n.y-n.hy+.05,n.y+n.hy,a,l),Math.hypot(o.x-_,o.z-g)>.01&&(p=f?o.z<(c.z0+c.z1)/2?-1:1:o.x<(c.x0+c.x1)/2?-1:1)}Math.abs(o.x-n.x)>1e-5&&(s=Math.max(s,Math.min(1,Math.abs(n.vx)/8)),n.vx*=-.25),Math.abs(o.z-n.z)>1e-5&&(s=Math.max(s,Math.min(1,Math.abs(n.vz)/8)),n.vz*=-.25),p&&(s=0,f?n.vz=p*ft.PH.squeeze:n.vx=p*ft.PH.squeeze);{const _=ft.boundsAt(o.x);n.x=Math.max(_.x0+r,Math.min(_.x1-r,o.x)),n.z=Math.max(_.z0+r,Math.min(_.z1-r,o.z))}const d=n.y-n.hy,h=n.y+n.vy*t,u=Nf(n.x,n.z,d+.03,e,i,r*.7);if(h-n.hy<=u){n.vy<-1.2&&(s=Math.max(s,Math.min(1,-n.vy/7))),n.y=u+n.hy,n.vy=n.vy<-2.5?-n.vy*.2:0;const _=Math.pow(.004,t);n.vx*=_,n.vz*=_,Math.abs(n.vx)+Math.abs(n.vz)<.05&&n.vy===0&&(n.vx=n.vz=0,n.rest=!0)}else n.y=h;return s}const ev=new _f(-1,1,1,-1,0,1);class tv extends tn{constructor(){super(),this.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ht([0,2,0,0,2,0],2))}}const nv=new tv;class iv{constructor(e){this._mesh=new xt(nv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ev)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const sv="varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",rv=`
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
  }`,ov=`
  uniform sampler2D tDiffuse; uniform vec2 uTexel; varying vec2 vUv;
  vec3 tap(vec2 o) { return min(max(texture2D(tDiffuse, vUv + o * uTexel).rgb, vec3(0.0)), vec3(48.0)); }
  void main() {
    vec3 c = (tap(vec2(-1.0, -1.0)) + tap(vec2(1.0, -1.0)) + tap(vec2(-1.0, 1.0)) + tap(vec2(1.0, 1.0))) * 0.25;
    float l = max(c.r, max(c.g, c.b));
    gl_FragColor = vec4(c * smoothstep(0.95, 1.7, l), 1.0);
  }`,av=`
  uniform sampler2D tDiffuse; uniform vec2 uDir; varying vec2 vUv;
  void main() {
    vec3 c = texture2D(tDiffuse, vUv).rgb * 0.2270270;
    c += (texture2D(tDiffuse, vUv + uDir * 1.3846154).rgb + texture2D(tDiffuse, vUv - uDir * 1.3846154).rgb) * 0.3162162;
    c += (texture2D(tDiffuse, vUv + uDir * 3.2307692).rgb + texture2D(tDiffuse, vUv - uDir * 3.2307692).rgb) * 0.0702703;
    gl_FragColor = vec4(c, 1.0);
  }`;function lv(n,e,t,i){const s={tDiffuse:{value:null},tB0:{value:null},tB1:{value:null},tB2:{value:null},uBloom:{value:0},uExposure:{value:1},uTint:{value:new se(1,1,1)},uTime:{value:0},uGrain:{value:.03},uVig:{value:.42},uWake:{value:0},uHurt:{value:0},uFade:{value:1},uWarp:{value:0}},r=y=>new iv(new $i({...y,vertexShader:sv,depthTest:!1,depthWrite:!1})),a=r({uniforms:s,fragmentShader:rv}),l={tDiffuse:{value:null},uTexel:{value:new it}},o={tDiffuse:{value:null},uDir:{value:new it}},c=r({uniforms:l,fragmentShader:ov}),f=r({uniforms:o,fragmentShader:av}),p=new it;let d=null,h=null,u=[];const _=new ut(0);function g(){d&&d.dispose();for(const S of u)S.a.dispose(),S.b.dispose();u=[],n.getDrawingBufferSize(p);const y=h.hdr&&!h.ldr?Zn:Mn;d=new Sn(p.x,p.y,{type:y,samples:h.msaa});const R=h.bloomFrom||2;if(l.uTexel.value.set(R>1?1/p.x:0,R>1?1/p.y:0),h.bloom)for(let S=0;S<3;S++){const C=Math.max(8,p.x>>S+R),I=Math.max(8,p.y>>S+R),b={type:y,depthBuffer:!1};u.push({a:new Sn(C,I,b),b:new Sn(C,I,b),w:C,h:I})}}function m(y,R){o.tDiffuse.value=y.texture,o.uDir.value.set(1/R.w,0),n.setRenderTarget(R.b),f.render(n),o.tDiffuse.value=R.b.texture,o.uDir.value.set(0,1/R.h),n.setRenderTarget(R.a),f.render(n)}return{uniforms:s,configure(y){h={...y},g()},resize(){h&&g()},render(){n.setRenderTarget(d),n.setClearColor(_,1),n.clear(),h.prepass,n.render(e,t),s.tDiffuse.value=d.texture,u.length?(l.tDiffuse.value=d.texture,n.setRenderTarget(u[0].a),c.render(n),m(u[0].a,u[0]),m(u[0].a,u[1]),m(u[1].a,u[2]),s.tB0.value=u[0].a.texture,s.tB1.value=u[1].a.texture,s.tB2.value=u[2].a.texture,s.uBloom.value=.75):(s.tB0.value=s.tB1.value=s.tB2.value=d.texture,s.uBloom.value=0),n.setRenderTarget(null),a.render(n)}}}const cv={high:{msaa:2,bloom:!0,hdr:!0,spots:3,shadowSpots:3,shadowSize:1024,points:3,shadowsPerFrame:3,mirror:1,mirrorWorld:!0,prepass:!0,env:!0,uzor:2,sunSteps:24,particles:1,shafts:!0},medium:{msaa:0,bloom:!0,hdr:!0,spots:3,shadowSpots:2,shadowSize:512,points:3,shadowsPerFrame:1,mirror:.5,mirrorWorld:!0,prepass:!0,env:!0,uzor:1,sunSteps:12,particles:.5,shafts:!0},lite:{msaa:0,bloom:!1,hdr:!0,spots:3,shadowSpots:0,shadowSize:512,points:3,shadowsPerFrame:0,mirror:0,mirrorWorld:!0,prepass:!1,habMirror:.5,env:!0,uzor:0,sunSteps:0,particles:.25,shafts:!0}},uv={KeyE:"e",KeyF:"f",Space:"jump",KeyQ:"throw",KeyV:"kick"};function fv(n){return{fwd:(n("KeyW")||n("ArrowUp")?1:0)-(n("KeyS")||n("ArrowDown")?1:0),strafe:(n("KeyD")?1:0)-(n("KeyA")?1:0),run:n("ShiftLeft")||n("ShiftRight"),wheel:(n("KeyD")?1:0)-(n("KeyA")?1:0),eHeld:n("KeyE"),crouch:n("KeyC")}}const dv={e:"interact",f:"mode",jump:"jump",throw:"throw",kick:"kick"},iu={interact:"e",mode:"f",jump:"jump",throw:"throw",kick:"kick"};function hv({coarse:n=!1,mut:e=[]}={}){const t=new Set,i=new Set(e),s={x:0,y:0,sprint:!1,lookX:0,lookY:0,cutter:!1,crouch:!1,crawl:!1,interactHold:!1,throwHold:!1,tool:""},r=new Set;let a=n?"touch":"kbm";const l=[];return{keys:t,touch:s,get device(){return a},setDevice(c){if(!(c!=="touch"&&c!=="kbm")&&!(i.has("nodevswitch")&&a!==c&&l.length)&&c!==a){a=c;for(const f of l)try{f(c)}catch{}}},onDevice(c){l.push(c)},keyDown(c){t.add(c);const f=uv[c];f&&r.add(dv[f])},keyUp(c){t.delete(c)},press(c){r.add(c)},drop(){r.clear(),s.lookX=s.lookY=0},stick(c,f,p=!1){s.x=c,s.y=f,s.sprint=!!p},look(c,f){s.lookX+=c,s.lookY+=f},hold(c,f){c in s&&c!=="tool"&&(s[c]=!!f)},want(c){(c==="cut"||c==="grip")&&(s.tool=c)},reset(){i.has("noreset")||(t.clear(),r.clear(),s.x=s.y=0,s.sprint=!1,s.lookX=s.lookY=0,s.cutter=!1,s.interactHold=!1,s.throwHold=!1,s.tool="")},frame(c,f){const p=h=>t.has(h),d=fv(p);c.fwd=d.fwd,c.strafe=d.strafe,c.run=d.run,c.wheel=d.wheel,c.eHeld=d.eHeld,c.crouch=d.crouch,c.tool="",c.crawl=!1,c.touch=a==="touch",(s.x||s.y)&&(c.fwd=s.y,c.strafe=s.x,c.run=s.sprint,c.wheel=Math.abs(s.x)>.3?Math.sign(s.x):0),(s.lookX||s.lookY)&&(f(s.lookX,s.lookY),s.lookX=s.lookY=0),s.crouch&&(c.crouch=!0),s.crawl&&(c.crawl=!0,c.crouch=!0),s.interactHold&&(c.eHeld=!0),c.throwHeld=p("KeyQ")||!!c.rmb||s.throwHold,s.tool&&(c.tool=s.tool,s.tool=""),s.cutter?(c.fire=!0,c.tool="cut",c.touchFire=!0):c.touchFire&&(c.fire=!1,c.touchFire=!1);for(const h of r)h==="grab"?(c.tool="grip",c.press.add("fire")):iu[h]&&c.press.add(iu[h]);return r.clear(),c}}}function pv(n,e,t,i){const s=()=>{t.reset()};n.addEventListener("blur",()=>t.reset()),n.addEventListener("pagehide",s),e.addEventListener("visibilitychange",()=>{e.hidden&&s()})}const su={dist:.9,drop:.26},ai={tap:.15,full:.65,kMax:1.3,v0:11.5,vMass:5,up:1.6};function mv(n){const e=Math.max(0,Math.min(1,(n-ai.tap)/(ai.full-ai.tap)));return 1+(ai.kMax-1)*e}const gv=(n,e=1)=>(ai.v0-ai.vMass*n)*e;function xv(n,e,t=1){const i=gv(e,t);return[n[0]*i,n[1]*i+ai.up,n[2]*i]}function vv({mut:n=[]}={}){const e=new Set(n),t={lastFire:!1,gripFire:!1,gripAt:-1,q:-1,charge:0};return{s:t,sense(i){return i.fireNew=i.fire&&!t.lastFire||i.press.has("fire"),t.lastFire=i.fire,i.fireNew},modes(i,s,r=!0){const a=[];let l=s;return i.press.has("f")&&r&&(l=l==="grip"?"cut":"grip",a.push(l)),i.tool&&r&&l!==i.tool&&!e.has("notouchtool")&&(l=i.tool,a.push(l)),a},grip(i,{able:s=!0,holding:r=!1,t:a=0}={}){const l=s&&i.fireNew,o=!i.fire&&t.gripFire;return t.gripFire=i.fire,l?r?(t.gripAt=-1,"drop"):"take":o&&r&&t.gripAt>=0&&(a-t.gripAt>=.3||e.has("holdgrip"))?"drop":""},took(i){t.gripAt=i,t.q=-1,t.charge=0},throw(i,{holding:s=!1,t:r=0}={}){if(!s)return t.q=-1,t.charge=0,0;if(i.press.has("throw")&&t.q<0&&(t.q=r),t.q<0)return t.charge=0,0;if(i.throwHeld&&!e.has("nocharge"))return t.charge=Math.max(0,Math.min(1,(r-t.q-ai.tap)/(ai.full-ai.tap))),0;const a=e.has("nocharge")?1:mv(r-t.q);return t.q=-1,t.charge=0,a},cutting:(i,s)=>s==="cut"&&!!i.fire,use:i=>!!i.eHeld}}const xa={body:.42,eye:.3,speed:1.15},Dr={hab_v1:{wallT:.4,floorT:.4,ceilT:.3,niche:{floor:.3,wall:.3,ceil:.22},stub:{depth:1.6,light:10467024},dado:.9,beam:2,mats:{wall:"wall",floor:"floor",ceil:"ceil",trim:"steelDark",dado:"wallDark"},sizes:{x:[3,16],y:[2.5,4],z:[3,16]}},shaft_v1:{wallT:.4,floorT:.4,ceilT:.3,niche:{floor:.3,wall:.3,ceil:.22},stub:{depth:1.6,light:10467024},dado:.9,beam:2,mats:{wall:"wall",floor:"floor",ceil:"ceil",trim:"steelDark",dado:"wallDark"},sizes:{x:[2,4],y:[6,12],z:[2,4]}}},_v=Object.keys(Dr),Do=["W","E","S","N"],es={W:"+x",E:"-x",S:"+z",N:"-z"},Uf=n=>n==="W"||n==="E"?"z":"x",$t=(n,e,t,i,s,r,a,l,o)=>({id:n,kind:e,x0:Math.min(t,i),x1:Math.max(t,i),y0:Math.min(s,r),y1:Math.max(s,r),z0:Math.min(a,l),z1:Math.max(a,l),...o});function yv(n,e,t=[]){const i=Dr[n],[s,r,a]=e,l=i.wallT,o=[$t("floor","floor",-l,s+l,-i.floorT,0,-l,a+l),$t("ceil","ceil",-l,s+l,r,r+i.ceilT,-l,a+l)];for(const c of Do){const f=Uf(c),p=f==="z"?a:s,d=t.filter(y=>y.side===c).sort((y,R)=>y.a0-R.a0),h=(y,R,S,C,I)=>{S-R<1e-4||I-C<1e-4||(c==="W"&&o.push($t(y,"wall",-l,0,C,I,R,S,{side:c})),c==="E"&&o.push($t(y,"wall",s,s+l,C,I,R,S,{side:c})),c==="S"&&o.push($t(y,"wall",R,S,C,I,-l,0,{side:c})),c==="N"&&o.push($t(y,"wall",R,S,C,I,a,a+l,{side:c})))},u=f==="x"?-l:0,_=f==="x"?p+l:p;let g=u,m=0;for(const y of d)h(`wall${c}${m++}`,g,y.a0,0,r),h(`wall${c}${m++}`,y.a0,y.a1,0,y.y0),h(`wall${c}${m++}`,y.a0,y.a1,y.y1,r),g=y.a1;h(`wall${c}${m++}`,g,_,0,r)}return o}function Mv(n,e,t){const i=Dr[n],[s,,r]=e,a=i.wallT,l=i.stub.depth,o=t.y1+.3,c=t.y0||0,f=[],p=_=>`stub_${t.id}_${_}`,d=t.side==="W"||t.side==="S"?-a:t.side==="E"?s+a:r+a,h=t.side==="W"||t.side==="S"?-1:1,u=(_,g,m,y,R,S,C)=>{const[I,b]=[d+h*y,d+h*R];t.side==="W"||t.side==="E"?f.push($t(p(_),"stub",I,b,S,C,g,m)):f.push($t(p(_),"stub",g,m,S,C,I,b))};return u("floor",t.a0-.2,t.a1+.2,0,l+.2,c-.2,c),u("ceil",t.a0-.2,t.a1+.2,0,l+.2,o,o+.2),u("l",t.a0-.2,t.a0,0,l,c,o),u("r",t.a1,t.a1+.2,0,l,c,o),u("end",t.a0-.2,t.a1+.2,l,l+.2,c,o),f}const va={cutRate:1,blastK:3.2},Nn=(n,e)=>({type:"integer",minimum:n,maximum:e}),Qi=(n,e)=>({type:"number",minimum:n,maximum:e}),ru={type:"string",pattern:"^[a-z][a-z0-9_.]{0,47}$"},bv={type:"array",items:{type:"integer",minimum:0,maximum:64},minItems:2,maxItems:2},ki=(n,e)=>e===90||e===270?[n[1],n[0]]:n;function or(n,e,t,i,s,r,a){const[l,,o]=n.size;return e==="W"?{x0:0,x1:a,z0:t,z1:i,y0:s,y1:r}:e==="E"?{x0:l-a,x1:l,z0:t,z1:i,y0:s,y1:r}:e==="S"?{x0:t,x1:i,z0:0,z1:a,y0:s,y1:r}:{x0:t,x1:i,z0:o-a,z1:o,y0:s,y1:r}}function ar(n,e,t,i){const[s,,r]=n.size;return e==="W"?[i,t]:e==="E"?[s-i,t]:e==="S"?[t,i]:[t,r-i]}const Ot=(n,e)=>(n+e)/2,ql={crate:{mount:"floor",cells:n=>n.size==="large"?[2,2]:[1,1],key:!1,params:{color:{type:"string",enum:["orange","teal","white"]},size:{type:"string",enum:["small","large"]}},compile(n,e){const t=n.size==="large",i=t?2:1,s=(n.at[0]+i/2)*e.G,r=(n.at[1]+i/2)*e.G,a=t?.42:.22;return{parts:[{id:n.id,prefab:n.id,kind:t?"crateL":"crate",shape:"box",h:[a,a,a],p:[s,a,r],yaw:0,mass:t?30:8,free:!0,mat:n.color||"orange"}]}}},shelf:{mount:"floor",cells:n=>ki([n.width||3,1],n.rot||0),key:!1,params:{width:Nn(2,4),levels:Nn(2,4),load:Nn(0,6),color:{type:"string",enum:["steel","steelDark","orange"]}},compile(n,e){const[t,i]=ki([n.width||3,1],n.rot||0),s=e.G,r=n.levels||3,a=.55,l=.12+r*a,o=n.at[0]*s+.03,c=(n.at[0]+t)*s-.03,f=n.at[1]*s+.03,p=(n.at[1]+i)*s-.03,d=.04,h=[],u=[],_=[];for(const[S,C]of[[o,f],[c-d,f],[o,p-d],[c-d,p-d]])h.push($t(`${n.id}.post${h.length}`,"shelf",S,S+d,0,l,C,C+d,{prefab:n.id,mat:n.color||"steel"}));const g=[];for(let S=0;S<r;S++){const C=.1+S*a,I=`${n.id}.plank${S}`;g.push(C+.03),u.push({id:I,prefab:n.id,kind:"plank",shape:"box",h:[(c-o)/2,.015,(p-f)/2],p:[(o+c)/2,C+.015,(f+p)/2],yaw:0,mass:4*Math.max(t,i)/2,free:!1,mat:"steelDark"}),[[o,f],[c,f],[o,p],[c,p]].forEach(([b,L],B)=>_.push({id:`${I}.w${B}`,prefab:n.id,a:I,b:"world",at:[b,C+.015,L],strength:.8,kind:"weld"}))}const m=t>=i?"x":"z",y=Math.max(t,i),R=.16;for(let S=0;S<Math.min(n.load||0,y*r);S++){const C=Math.floor(S/y),I=S%y,b=(I+.5)*s+(m==="x"?n.at[0]*s:n.at[1]*s),L=m==="x"?(f+p)/2:(o+c)/2;u.push({id:`${n.id}.box${S}`,prefab:n.id,kind:"crate",shape:"box",h:[R,R,R],p:m==="x"?[b,g[C]+R,L]:[L,g[C]+R,b],yaw:0,mass:5,free:!0,mat:["orange","teal","white"][S%3]})}return{statics:h,parts:u,joints:_}}},sheet:{mount:"wall",cells:n=>n.size||[2,2],key:!1,params:{size:{type:"array",prefixItems:[Nn(1,4),Nn(1,3)],minItems:2,maxItems:2},mat:{type:"string",enum:["steel","steelDark","white","teal"]},strength:Qi(.5,3)},compile(n,e){const[t,i]=n.size||[2,2],s=e.G,r=n.at[0]*s+.02,a=(n.at[0]+t)*s-.02,l=n.at[1]*s+.02,o=(n.at[1]+i)*s-.02,c=.012,f=.02+c,[p,,d]=e.size,h=Ot(r,a),u=Ot(l,o),_=Uf(n.wall),g=n.strength??.8,m={W:[f,h],E:[p-f,h],S:[h,f],N:[h,d-f]}[n.wall],y=(C,I)=>({W:[f,I,C],E:[p-f,I,C],S:[C,I,f],N:[C,I,d-f]})[n.wall],R=[{id:n.id,prefab:n.id,kind:"sheet",shape:"box",h:_==="z"?[c,(o-l)/2,(a-r)/2]:[(a-r)/2,(o-l)/2,c],p:[m[0],u,m[1]],yaw:0,mass:Math.max(2,(a-r)*(o-l)*9),free:!1,mat:n.mat||"steel"}],S=[[r+.05,l+.05],[a-.05,l+.05],[r+.05,o-.05],[a-.05,o-.05]].map(([C,I],b)=>({id:`${n.id}.r${b}`,prefab:n.id,a:n.id,b:"world",at:y(C,I),strength:g,kind:"rivet"}));return{parts:R,joints:S}}},offcuts:{mount:"floor",cells:n=>ki([2,1],n.rot||0),key:!0,params:{rods:Nn(0,12),sheets:Nn(0,4)},compile(n,e){const[t,i]=ki([2,1],n.rot||0),s=e.G,r=t>i,a=(n.at[0]+t/2)*s,l=(n.at[1]+i/2)*s,o=[],c=3;for(let p=0;p<(n.rods??6);p++){const d=Math.floor(p/c),h=(p%c-(c-1)/2)*.12,u=.031+d*.062;o.push({id:`${n.id}.rod${p}`,prefab:n.id,kind:"rod",shape:"box",h:r?[.32,.03,.03]:[.03,.03,.32],p:r?[a,u,l+h]:[a+h,u,l],yaw:0,mass:2,free:!0,mat:"steelDark"})}const f=Math.ceil((n.rods??6)/c)*.062+.002;for(let p=0;p<(n.sheets||0);p++){const h=f+.012+p*.025;o.push({id:`${n.id}.sheet${p}`,prefab:n.id,kind:"sheet",shape:"box",h:r?[.36,.012,.2]:[.2,.012,.36],p:[a,h,l],yaw:0,mass:3,free:!0,mat:p%2?"white":"steel"})}return{parts:o,keys:[{id:n.id,at:[a,.1,l]}]}}},pallet:{mount:"floor",cells:()=>[2,2],key:!1,params:{load:Nn(0,4)},compile(n,e){const t=e.G,i=(n.at[0]+1)*t,s=(n.at[1]+1)*t,r=.07,a=[{id:n.id,prefab:n.id,kind:"pallet",shape:"box",h:[.47,r,.47],p:[i,r,s],yaw:0,mass:18,free:!0,mat:"wood"}];return[[-1,-1],[1,-1],[-1,1],[1,1]].slice(0,n.load||0).forEach(([l,o],c)=>a.push({id:`${n.id}.box${c}`,prefab:n.id,kind:"crate",shape:"box",h:[.2,.2,.2],p:[i+l*.23,2*r+.2,s+o*.23],yaw:0,mass:6,free:!0,mat:["teal","white","orange","teal"][c]})),{parts:a}}},pipe:{mount:"wall",cells:n=>[n.len||4,1],key:!1,params:{len:Nn(2,32),r:{type:"number",enum:[.04,.06,.1]},mat:{type:"string",enum:["steel","copper","steelDark"]}},compile(n,e){const t=e.G,i=n.r||.06,s=n.at[0]*t,r=(n.at[0]+(n.len||4))*t,a=(n.at[1]+.5)*t,l=i+.05,o=or(e,n.wall,s,r,a-i,a+i,l+i);return{statics:[$t(n.id,"pipe",o.x0,o.x1,o.y0,o.y1,o.z0,o.z1,{prefab:n.id,r:i,off:l,mat:n.mat||"steel",side:n.wall,a0:s,a1:r,y:a})]}}},vent:{mount:"wall",cells:()=>[1,1],key:!0,params:{},compile(n,e){const t=e.G,i=(n.at[0]+.5)*t,s=(n.at[1]+.5)*t,[r,,a]=e.size,l=ar(e,n.wall,i,.8),o={W:[0,s,i],E:[r,s,i],S:[i,s,0],N:[i,s,a]}[n.wall];return{panels:[{id:n.id,room:"",face:es[n.wall],x:o[0],y:o[1],z:o[2],depth:e.kit.niche.wall,panel:"vent"}],keys:[{id:n.id,at:[l[0],s,l[1]],face:es[n.wall]}]}}},gas_tank:{mount:"floor",cells:()=>[1,1],key:!0,params:{content:{type:"string",enum:["O2","N2","H2"]},charge:Qi(.5,2),fuse:Qi(.5,3)},required:["content"],compile(n,e){const t=(n.at[0]+.5)*e.G,i=(n.at[1]+.5)*e.G;return{parts:[{id:n.id,prefab:n.id,kind:"tank",shape:"cyl",h:[.12,.32,.12],p:[t,.32,i],yaw:0,mass:12,free:!0,mat:n.content,tank:{charge:n.charge??1,fuse:n.fuse??1.2,radius:4.5}}],keys:[{id:n.id,at:[t,.5,i]}]}}},table_cuttable:{mount:"floor",cells:n=>n.size||[3,2],key:!0,params:{size:{type:"array",items:{type:"integer",minimum:2,maximum:4},minItems:2,maxItems:2},strength:Qi(.5,3),top:{type:"string",enum:["white","steel"]}},compile(n,e){const[t,i]=ki(n.size||[3,2],n.rot||0),s=e.G,r=n.at[0]*s+.05,a=(n.at[0]+t)*s-.05,l=n.at[1]*s+.05,o=(n.at[1]+i)*s-.05,c=.76,f=.05,p=Ot(r,a),d=Ot(l,o),h=c-f,u=n.strength??1.2,_=[{id:n.id+".top",prefab:n.id,kind:"top",shape:"box",h:[(a-r)/2,f/2,(o-l)/2],p:[p,c-f/2,d],yaw:0,mass:14,free:!1,mat:n.top||"white"}],g=[];return[[r+.08,l+.08],[a-.08,l+.08],[r+.08,o-.08],[a-.08,o-.08]].forEach(([m,y],R)=>{const S=`${n.id}.leg${R}`;_.push({id:S,prefab:n.id,kind:"leg",shape:"box",h:[.03,h/2,.03],p:[m,h/2,y],yaw:0,mass:2,free:!1,mat:"steelDark"}),g.push({id:`${n.id}.cut${R}`,prefab:n.id,a:n.id+".top",b:S,at:[m,h,y],strength:u,kind:"weld"})}),{parts:_,joints:g,keys:[{id:n.id,at:[p,c,d]}]}}},cabinet:{mount:"floor",cells:()=>[2,1],key:!0,params:{color:{type:"string",enum:["white","teal","steel"]},strength:Qi(.5,3)},compile(n,e){const t=n.rot||0,[i,s]=ki([2,1],t),r=e.G,a=1.9,l=n.strength??1.5,o=n.at[0]*r+.02,c=(n.at[0]+i)*r-.02,f=n.at[1]*r+.02,p=(n.at[1]+s)*r-.02,d={0:"+z",90:"+x",180:"-z",270:"-x"}[t],h=d[1]==="z"?"x":"z",u=d[0]==="+"?1:-1,_=.03,g=.003,m=.025,y=.05,R=.03,S=h==="x"?o:f,C=h==="x"?c:p,I=Ot(S,C),b=d==="+z"?p:d==="-z"?f:d==="+x"?c:o,L=d==="+z"?f:d==="-z"?p:d==="+x"?o:c,B=b-u*(_+g),N=[],H=n.color==="teal"?"teal":n.color==="steel"?"steel":"white",V=(ge,Te,Be,ye,Ne,Fe,Oe,ke)=>N.push(h==="x"?$t(ge,"cabinet",Te,Be,ye,Ne,Fe,Oe,{prefab:n.id,mat:ke}):$t(ge,"cabinet",Fe,Oe,ye,Ne,Te,Be,{prefab:n.id,mat:ke})),Q=[],q=[],ne=.002,he=(ge,Te,Be,ye,Ne,Fe,Oe,ke,Ke,pt)=>{const[He,Je]=[Math.min(Oe,ke),Math.max(Oe,ke)],nt=(ot,bt,st)=>h==="x"?[ot,bt,st]:[st,bt,ot],Qe=nt((ye-Be)/2-ne,(Fe-Ne)/2-ne,(Je-He)/2-ne),vt=nt(Ot(Be,ye),Ot(Ne,Fe),Ot(He,Je));Q.push({id:ge,prefab:n.id,kind:Te,shape:"box",h:Qe,p:vt,yaw:0,mass:Math.max(1.5,+(8*Qe[0]*Qe[1]*Qe[2]*600).toFixed(1)),free:!1,mat:Ke}),pt.forEach(([ot,bt,st],zt)=>q.push({id:`${ge}.d${zt}`,prefab:n.id,a:ge,b:"world",at:nt(ot,bt,st),strength:l*.5,kind:"dowel"}))},re=L+u*m,Pe=(ge,Te)=>ge.flatMap(Be=>Te.map(ye=>[Be,ye])),de=.05;he(`${n.id}.back`,"side",S,C,0,a,L,re,"steelDark",Pe([S+de,C-de],[de,a-de]).map(([ge,Te])=>[ge,Te,re])),he(`${n.id}.l`,"side",S,S+m,0,a,re,B,H,Pe([de,a-de],[re+u*de,B-u*de]).map(([ge,Te])=>[S,ge,Te])),he(`${n.id}.r`,"side",C-m,C,0,a,re,B,H,Pe([de,a-de],[re+u*de,B-u*de]).map(([ge,Te])=>[C,ge,Te])),he(`${n.id}.bottom`,"side",S+m,C-m,0,.08,re,B,H,Pe([S+m+de,C-m-de],[re+u*de,B-u*de]).map(([ge,Te])=>[ge,.08,Te])),he(`${n.id}.top`,"side",S+m,C-m,a-m,a,re,B,H,Pe([S+m+de,C-m-de],[re+u*de,B-u*de]).map(([ge,Te])=>[ge,a,Te]));for(const[ge,Te]of[.65,1.25].entries())he(`${n.id}.shelf${ge}`,"plank",S+m,C-m,Te,Te+.024,re+u*R,B-u*R,"wood",Pe([S+m+.04,C-m-.04],[re+u*(R+.03),B-u*(R+.03)]).map(([Be,ye])=>[Be,Te+.024,ye]));V(`${n.id}.bl`,S+m,S+y,.08,a-m,re,re+u*R,"steel"),V(`${n.id}.br`,C-y,C-m,.08,a-m,re,re+u*R,"steel"),V(`${n.id}.bt`,S+y,C-y,a-y,a-m,re,re+u*R,"steel"),V(`${n.id}.fl`,S+m,S+y,.08,a-m,B-u*R,B,"steel"),V(`${n.id}.fr`,C-y,C-m,.08,a-m,B-u*R,B,"steel"),V(`${n.id}.ft`,S+y,C-y,a-y,a-m,B-u*R,B,"steel"),[[S,I,0],[I,C,1]].forEach(([ge,Te,Be])=>{const ye=(Te-ge)/2-.004,Ne=Ot(ge,Te),Fe=Be===0?ge+.004:Te-.004,Oe=a/2-.03,ke=B+u*(g+_/2),Ke=B+u*(g+_),pt=h==="x"?[Ne,a/2,ke]:[ke,a/2,Ne],He=h==="x"?[Fe,a/2,Ke]:[Ke,a/2,Fe],Je=`${n.id}.leaf${Be}`;Q.push({id:Je,prefab:n.id,kind:"leaf",shape:"box",h:h==="x"?[ye,Oe,_/2]:[_/2,Oe,ye],p:pt,yaw:0,mass:3,free:!1,mat:n.color||"white",hinge:{at:He,side:Be,along:h,sg:u,ys:[-Oe+.22,0,Oe-.22]}});for(const[nt,Qe]of[-Oe+.22,0,Oe-.22].entries())q.push({id:`${n.id}.hinge${Be}.${nt}`,prefab:n.id,a:Je,b:"world",at:[He[0],He[1]+Qe,He[2]],strength:l*.5,kind:"hinge"})});const be=d[1]==="z"?[Ot(o,c),B+u*.8]:[B+u*.8,Ot(f,p)];return{statics:N,parts:Q,joints:q,keys:[{id:n.id,at:[be[0],1,be[1]],face:d}],opens:[{id:n.id,leaves:Q.filter(ge=>ge.hinge).map(ge=>ge.id),face:d}]}}},trap_hatch:{mount:"floor",cells:()=>[2,2],key:!0,params:{number:Nn(100,999)},required:["number"],compile(n,e){const t=e.G,i=n.at[0]*t,s=n.at[1]*t,r=i+2*t,a=s+2*t;return{hatches:[{id:n.id,number:n.number,x0:i+.05,x1:r-.05,z0:s+.05,z1:a-.05}],keys:[{id:n.id,at:[Ot(i,r),.05,Ot(s,a)]}]}}},breaker:{mount:"wall",cells:()=>[1,2],key:!0,net:"source",params:{on:{type:"boolean"}},compile(n,e){const t=e.G,i=n.at[0]*t+.05,s=(n.at[0]+1)*t-.05,r=n.at[1]*t,a=r+2*t-.1,l=or(e,n.wall,i,s,r,a,.14),o=ar(e,n.wall,Ot(i,s),.9);return{statics:[$t(n.id,"breaker",l.x0,l.x1,l.y0,l.y1,l.z0,l.z1,{prefab:n.id})],nodes:{[n.id]:{kind:"breaker",on:n.on!==!1}},keys:[{id:n.id,at:[o[0],Ot(r,a),o[1]],face:es[n.wall]}]}}},screen:{mount:"wall",cells:n=>n.size||[2,1],key:!0,net:"consumer",text:["text"],params:{size:{type:"array",items:{type:"integer",minimum:1,maximum:4},minItems:2,maxItems:2},text:ru},required:["text"],compile(n,e){const[t,i]=n.size||[2,1],s=e.G,r=n.at[0]*s+.03,a=(n.at[0]+t)*s-.03,l=n.at[1]*s+.03,o=(n.at[1]+i)*s-.03,c=or(e,n.wall,r,a,l,o,.05),f=ar(e,n.wall,Ot(r,a),1.1);return{statics:[$t(n.id,"screen",c.x0,c.x1,c.y0,c.y1,c.z0,c.z1,{prefab:n.id})],nodes:{[n.id]:{kind:"screen"}},texts:[{id:n.id,key:n.text,kind:"screen",w:a-r,h:o-l}],keys:[{id:n.id,at:[f[0],Ot(l,o),f[1]],face:es[n.wall]}]}}},note:{mount:"wall",cells:()=>[1,1],key:!0,text:["text"],params:{text:ru},required:["text"],compile(n,e){const t=e.G,i=(n.at[0]+.5)*t,s=(n.at[1]+.5)*t,r=or(e,n.wall,i-.105,i+.105,s-.15,s+.15,.01),a=ar(e,n.wall,i,.8);return{statics:[$t(n.id,"note",r.x0,r.x1,r.y0,r.y1,r.z0,r.z1,{prefab:n.id,thin:!0})],texts:[{id:n.id,key:n.text,kind:"note"}],keys:[{id:n.id,at:[a[0],s,a[1]],face:es[n.wall]}]}}},window:{mount:"wall",cells:n=>n.size||[3,2],key:!0,hole:!0,params:{size:{type:"array",prefixItems:[Nn(2,6),Nn(2,4)],minItems:2,maxItems:2},strength:Qi(.5,4)},compile(n,e){const[t,i]=n.size||[3,2],s=e.G,r=n.at[0]*s,a=(n.at[0]+t)*s,l=n.at[1]*s,o=(n.at[1]+i)*s,c=e.kit.wallT,f=or(e,n.wall,r,a,l,o,0),p=ar(e,n.wall,Ot(r,a),1),d={W:[-c/2,null],E:[e.size[0]+c/2,null],S:[null,-c/2],N:[null,e.size[2]+c/2]}[n.wall],h=d[0]!==null?$t(n.id,"glass",d[0]-.02,d[0]+.02,l,o,r,a,{prefab:n.id}):$t(n.id,"glass",r,a,l,o,d[1]-.02,d[1]+.02,{prefab:n.id});return{holes:[{side:n.wall,a0:r,a1:a,y0:l,y1:o,id:n.id}],statics:[h],windows:[{id:n.id,side:n.wall,a0:r,a1:a,y0:l,y1:o,strength:n.strength??2,at:[Ot(f.x0,f.x1),Ot(l,o),Ot(f.z0,f.z1)]}],keys:[{id:n.id,at:[p[0],Ot(l,o),p[1]],face:es[n.wall]}]}}},lamp:{mount:"ceil",cells:n=>ki([1,2],n.rot||0),net:"consumer",params:{color:{type:"string",enum:["cool","warm"]},power:Qi(.5,3)},compile(n,e){const[t,i]=ki([1,2],n.rot||0),s=e.G,r=(n.at[0]+t/2)*s,a=(n.at[1]+i/2)*s,l=e.size[1];return{nodes:{[n.id]:{kind:"lamp"}},lights:[{id:n.id,kind:"spot",pos:[r,l-.12,a],to:[r,0,a],color:n.color==="warm"?16765600:14083839,power:14*(n.power??1.2)*Math.max(1,(l/3)**1.5),dist:Math.max(9,l+4),angle:l>5?.6:1.05,penumbra:.7}],fixtures:[{id:n.id,x:r,z:a,w:t*s-.16,l:i*s-.16,y:l}]}}},cable:{mount:"path",key:!1,net:"conductor",params:{path:{type:"array",items:bv,minItems:2,maxItems:32},under:{type:"string",enum:["floor"]}},required:["path"],compile(n,e){const t=e.G,i=n.path.map(([s,r])=>[(s+.5)*t,-.16,(r+.5)*t]);return{nodes:{[n.id]:{kind:"cable"}},cables:[{id:n.id,pts:i}]}}}},Sv=Object.keys(ql),wv={floor_plate:["+y"],wall_plate:["+x","-x","+z","-z"],ceil_plate:["-y"]},Ev=["slide","none","sealed"],kt={w:.5,niche:.4,bolt:.035,boltCut:1,weld:2,seat:.25,seatOut:.7},Tv=[{id:"pn_airlock_1",room:"airlock",face:"+y",x:-.05,y:0,z:3.35,depth:.35},{id:"pn_airlock_2",room:"airlock",face:"+y",x:-1.05,y:0,z:1.1,depth:.35},{id:"pn_airlock_3",room:"airlock",face:"+y",x:-1.05,y:0,z:5.6,depth:.35},{id:"pn_airlock_4",room:"airlock",face:"-y",x:.95,y:2.5,z:1.35,depth:.35},{id:"pn_airlock_5",room:"airlock",face:"-y",x:.95,y:2.5,z:5.35,depth:.35},{id:"pn_airlock_6",room:"airlock",face:"-y",x:-1.05,y:2.5,z:2.35,depth:.35},{id:"pn_corridor_1",room:"corridor",face:"+y",x:-.05,y:0,z:-20.05,depth:.35},{id:"pn_corridor_2",room:"corridor",face:"+y",x:-1.55,y:0,z:-.55,depth:.35},{id:"pn_corridor_3",room:"corridor",face:"+y",x:-1.55,y:0,z:-39.55,depth:.35},{id:"pn_corridor_4",room:"corridor",face:"-x",x:2,y:1.55,z:-10.05,depth:.32},{id:"pn_corridor_5",room:"corridor",face:"+x",x:-2,y:1.55,z:-29.8,depth:.32},{id:"pn_corridor_6",room:"corridor",face:"-x",x:2,y:1.55,z:-34.55,depth:.32},{id:"pn_corridor_7",room:"corridor",face:"+x",x:-2,y:1.55,z:-6.05,depth:.32},{id:"pn_corridor_8",room:"corridor",face:"-y",x:-1.55,y:3,z:-14.55,depth:.35},{id:"pn_hab_1",room:"hab",face:"+y",x:6.85,y:0,z:-10.4,depth:.35},{id:"pn_hab_2",room:"hab",face:"+y",x:3.1,y:0,z:-5.15,depth:.35},{id:"pn_hab_3",room:"hab",face:"+y",x:10.85,y:0,z:-5.65,depth:.35},{id:"pn_hab_4",room:"hab",face:"-x",x:11.4,y:1.55,z:-15.15,depth:.32},{id:"pn_hab_5",room:"hab",face:"+z",x:3.1,y:1.55,z:-15.6,depth:.32},{id:"pn_hab_6",room:"hab",face:"-x",x:11.4,y:1.55,z:-10.4,depth:.32},{id:"pn_hab_7",room:"hab",face:"+z",x:7.1,y:1.55,z:-15.6,depth:.32},{id:"pn_hab_8",room:"hab",face:"-y",x:2.85,y:2.8,z:-9.4,depth:.35},{id:"pn_comm_1",room:"comm",face:"+y",x:14,y:0,z:-8.15,depth:.35},{id:"pn_comm_2",room:"comm",face:"+y",x:15.75,y:0,z:-10.15,depth:.35},{id:"pn_comm_3",room:"comm",face:"+y",x:12.75,y:0,z:-6.15,depth:.35},{id:"pn_comm_4",room:"comm",face:"-x",x:16.4,y:1.55,z:-6.15,depth:.32},{id:"pn_comm_5",room:"comm",face:"+x",x:11.8,y:1.55,z:-10.15,depth:.32},{id:"pn_comm_6",room:"comm",face:"+x",x:11.8,y:1.55,z:-6.65,depth:.32},{id:"pn_comm_7",room:"comm",face:"-y",x:14,y:2.8,z:-10.15,depth:.35},{id:"pn_bay_1",room:"bay",face:"+y",x:7.85,y:0,z:-24.3,depth:.35},{id:"pn_bay_2",room:"bay",face:"+y",x:15.85,y:0,z:-17.55,depth:.35},{id:"pn_bay_3",room:"bay",face:"+y",x:15.85,y:0,z:-30.55,depth:.35},{id:"pn_bay_4",room:"bay",face:"-z",x:2.85,y:1.55,z:-17,depth:.32},{id:"pn_bay_5",room:"bay",face:"+z",x:2.85,y:1.55,z:-31,depth:.32},{id:"pn_bay_6",room:"bay",face:"+z",x:9.35,y:1.55,z:-31,depth:.32},{id:"pn_bay_7",room:"bay",face:"-z",x:9.35,y:1.55,z:-17,depth:.32},{id:"pn_store_1",room:"store",face:"+y",x:22.75,y:0,z:-24.05,depth:.35},{id:"pn_store_2",room:"store",face:"+y",x:28.25,y:0,z:-29.55,depth:.35},{id:"pn_store_3",room:"store",face:"+y",x:27.25,y:0,z:-18.55,depth:.35},{id:"pn_store_4",room:"store",face:"-x",x:28.8,y:1.55,z:-21.8,depth:.32},{id:"pn_store_5",room:"store",face:"-x",x:28.8,y:1.55,z:-26.55,depth:.32},{id:"pn_store_6",room:"store",face:"-x",x:28.8,y:1.55,z:-19.55,depth:.32},{id:"pn_store_7",room:"store",face:"-x",x:28.8,y:1.55,z:-17.55,depth:.32},{id:"pn_mind_1",room:"mind",face:"+y",x:23.15,y:0,z:-13.65,depth:.35},{id:"pn_mind_2",room:"mind",face:"+y",x:20.65,y:0,z:-15.65,depth:.35},{id:"pn_mind_3",room:"mind",face:"+y",x:25.15,y:0,z:-11.15,depth:.35},{id:"pn_mind_4",room:"mind",face:"-x",x:26.2,y:1.55,z:-16.15,depth:.32},{id:"pn_mind_5",room:"mind",face:"+x",x:20.2,y:1.55,z:-12.15,depth:.32},{id:"pn_mind_6",room:"mind",face:"-x",x:26.2,y:1.55,z:-12.65,depth:.32},{id:"pn_mind_7",room:"mind",face:"+x",x:20.2,y:1.55,z:-13.9,depth:.32},{id:"pn_mind_8",room:"mind",face:"-y",x:22.9,y:3.2,z:-11.4,depth:.35},{id:"pn_gallery_1",room:"gallery",face:"+y",x:31.9,y:0,z:-23.9,depth:.35},{id:"pn_gallery_2",room:"gallery",face:"+y",x:29.65,y:0,z:-27.15,depth:.35},{id:"pn_gallery_3",room:"gallery",face:"+y",x:34.15,y:0,z:-27.15,depth:.35},{id:"pn_gallery_4",room:"gallery",face:"-z",x:29.65,y:1.55,z:-20.4,depth:.32},{id:"pn_gallery_5",room:"gallery",face:"-z",x:34.15,y:1.55,z:-20.4,depth:.32},{id:"pn_gallery_6",room:"gallery",face:"+z",x:31.9,y:1.55,z:-27.6,depth:.32},{id:"pn_gallery_7",room:"gallery",face:"+x",x:29.2,y:1.55,z:-21.9,depth:.32},{id:"pn_gallery_8",room:"gallery",face:"-y",x:34.15,y:3.4,z:-24.65,depth:.35}],$l={"+x":[1,0,0],"-x":[-1,0,0],"+z":[0,0,1],"-z":[0,0,-1],"+y":[0,1,0],"-y":[0,-1,0]};function zf(n,e,t,i){const s=$l[n.face],r=[n.x,n.y,n.z],a={};return["x","y","z"].forEach((l,o)=>{if(s[o]){const c=r[o]+s[o]*e,f=r[o]+s[o]*t;a[l+"0"]=Math.min(c,f),a[l+"1"]=Math.max(c,f)}else a[l+"0"]=r[o]-i,a[l+"1"]=r[o]+i}),a}const Fo=n=>zf(n,-n.depth,0,kt.niche/2),ou=n=>zf(n,0,.022,kt.w/2);function pl(n,e){const t=$l[n.face],i=kt.w/2-.05,s=[[-1,-1],[1,-1],[1,1],[-1,1]][e],r=t[0]?[0,0,1]:t[2]?[1,0,0]:[1,0,0],a=t[1]?[0,0,1]:[0,1,0];return[n.x+r[0]*s[0]*i+a[0]*s[1]*i+t[0]*.02,n.y+r[1]*s[0]*i+a[1]*s[1]*i+t[1]*.02,n.z+r[2]*s[0]*i+a[2]*s[1]*i+t[2]*.02]}const Rn={r:.3,stand:1.3,eye:1.2,step:.28};function Av(n,e){const t=n.grid,[i,s,r]=n.shell.size,[a,l,o]=e.cell,c=f=>(f+.5)*t;switch(e.face){case"+y":return[c(a),0,c(o)];case"-y":return[c(a),s,c(o)];case"+x":return[0,c(l),c(o)];case"-x":return[i,c(l),c(o)];case"+z":return[c(a),c(l),0];default:return[c(a),c(l),r]}}function Rv(n){const e=n.grid,t=n.shell.size,i=n.shell.kit,s=Dr[i],[r,a,l]=t,o={G:e,size:t,kit:s},c={id:n.id,G:e,size:t,kit:i,statics:[],parts:[],joints:[],panels:[],portals:[],nodes:{},edges:[],lights:[],fixtures:[],windows:[],hatches:[],cables:[],texts:[],keys:[],opens:[],views:[],holes:[],doors:[],prefabOf:{}};for(const u of n.portals||[]){const _=u.at*e,g=(u.at+u.w)*e,m=(u.y||0)*e,y=m+u.h*e,R=u.wall==="W"||u.wall==="E"?"z":"x",S=(_+g)/2,C={W:[.7,S],E:[r-.7,S],S:[S,.7],N:[S,l-.7]}[u.wall],I={W:-Math.PI/2,E:Math.PI/2,S:Math.PI,N:0}[u.wall],b={id:u.id,side:u.wall,a0:_,a1:g,y0:m,y1:y,to:u.to,door:u.door,inside:C,yaw:I,along:R};if(c.portals.push(b),c.holes.push({side:u.wall,a0:_,a1:g,y0:m,y1:y,id:u.id}),c.statics.push(...Mv(i,t,b)),u.door!=="none"){const L=s.wallT,B={W:-L/2,E:r+L/2,S:-L/2,N:l+L/2}[u.wall],N=R==="z"?$t(u.id+".door","door",B-.04,B+.04,m,y,_,g,{prefab:u.id,door:u.id}):$t(u.id+".door","door",_,g,m,y,B-.04,B+.04,{prefab:u.id,door:u.id});c.statics.push(N),c.doors.push({id:u.id,kind:u.door,box:N,along:R}),c.nodes[u.id]={kind:"door"}}c.keys.push({id:u.id,at:[C[0],m+1,C[1]],portal:!0,...m?{high:m}:{}}),c.prefabOf[u.id]={id:u.id,type:"portal"}}for(const u of n.prefabs||[]){const _=ql[u.type];if(!_)continue;c.prefabOf[u.id]=u;const g=_.compile(u,o)||{};for(const m of["statics","parts","joints","lights","fixtures","windows","hatches","cables","texts","keys","opens","holes"])g[m]&&c[m].push(...g[m]);if(g.panels)for(const m of g.panels)c.panels.push({...m,room:n.id});g.nodes&&Object.assign(c.nodes,g.nodes)}c.statics.unshift(...yv(i,t,c.holes));for(const u of n.slots||[]){const[_,g,m]=Av(n,u),y=u.face==="+y"?s.niche.floor:u.face==="-y"?s.niche.ceil:s.niche.wall;c.panels.push({id:u.id,room:n.id,face:u.face,x:_,y:g,z:m,depth:y,panel:u.panel})}for(const[u,_]of n.net&&n.net.power||[])c.edges.push([u,_]);const f=r/2,p=l/2;for(const u of c.portals)c.views.push(u.y0?{id:"portal_"+u.id,eye:[f+(u.side==="W"?.6:u.side==="E"?-.6:0),Rn.eye,p+(u.side==="S"?.6:u.side==="N"?-.6:0)],look:[u.side==="W"?0:u.side==="E"?r:(u.a0+u.a1)/2,u.y0+.2,u.side==="S"?0:u.side==="N"?l:(u.a0+u.a1)/2]}:{id:"portal_"+u.id,eye:[u.inside[0],Rn.eye,u.inside[1]],look:[f,.9,p]});c.views.push({id:"corner_sw",eye:[.6,1.6,.6],look:[r-.6,.6,l-.6]}),c.views.push({id:"corner_ne",eye:[r-.6,1.6,l-.6],look:[.6,.6,.6]}),c.views.push({id:"corner_nw",eye:[.6,1.6,l-.6],look:[r-.6,.6,.6]}),c.views.push({id:"corner_se",eye:[r-.6,1.6,.6],look:[.6,.6,l-.6]}),c.views=c.views.slice(0,6);const d=c.portals[0],h=n.spawn;return c.climb=n.climb||null,c.outer=n.shell.outer||[],c.fall=n.fall||null,c.spawn=h?{x:(h.at[0]+.5)*e,z:(h.at[1]+.5)*e,yaw:(h.yaw||0)*Math.PI/180}:d?{x:d.inside[0],z:d.inside[1],yaw:d.yaw}:{x:f,z:p,yaw:0},c.niches=c.panels.map(u=>({...Fo(u),id:u.id})),c}const Cv=n=>{if(n<2)return!1;for(let e=2;e*e<=n;e++)if(n%e===0)return!1;return!0};function ro(n){for(let e=2;e<=n;e++){if(!Cv(e)||n%e)continue;let t=n,i=0;for(;t%e===0;)t/=e,i++;return t===1?{p:e,k:i}:null}return null}const au=n=>String(n).split("").reduce((e,t)=>e+ +t,0),Io={prime_power:{params:{minExp:{type:"integer",minimum:1,maximum:5}},test:(n,e={})=>{const t=ro(n);return!!t&&t.k>=(e.minExp??2)},why:(n,e={})=>{const t=ro(n);return t&&t.k>=(e.minExp??2)?`${n} = ${t.p}^${t.k}`:`${n}: не степень простого`},hint:{ru:[["степен"],["прост"]],en:[["power"],["prime"]]}},prime_or_power:{off:!0,params:{},test:n=>!!ro(n),why:n=>{const e=ro(n);return e?e.k===1?`${n}: простое`:`${n} = ${e.p}^${e.k}`:`${n}: не простое и не степень простого`},hint:{ru:[["прост"]],en:[["prime"]]}},digit_sum:{params:{sum:{type:"integer",minimum:1,maximum:27}},test:(n,e={})=>au(n)===(e.sum??10),why:(n,e={})=>`${n}: сумма цифр ${au(n)}, нужна ${e.sum??10}`,hint:{ru:[["сумм"],["цифр"]],en:[["sum"],["digit"]]}}},lu=Object.keys(Io).filter(n=>!Io[n].off);function Pv(n,e){const t=Io[n.rule];if(!t)return null;const i=[],s={};for(const r of e)s[r.id]=t.why(r.number,n.param||{}),t.test(r.number,n.param||{})&&i.push(r.id);return{danger:i,why:s}}const cu="drift.room/0",Us={type:"string",pattern:"^[a-z][a-z0-9_]{0,31}$"},uu={type:"string",pattern:"^[a-z][a-z0-9_]*(\\.[a-z][a-z0-9_]*){0,3}$",maxLength:64},_a={type:"string",pattern:"^[a-z][a-z0-9_.]{0,47}$"},yr=n=>({type:"array",items:{type:"integer",minimum:0,maximum:64},minItems:n,maxItems:n}),Lv={floor:{at:yr(2),rot:{type:"integer",enum:[0,90,180,270]}},wall:{wall:{type:"string",enum:Do},at:yr(2)},ceil:{at:yr(2),rot:{type:"integer",enum:[0,90,180,270]}},path:{}},Dv={floor:["at"],wall:["wall","at"],ceil:["at"],path:[]};function Iv(n){const e=ql[n];return{type:"object",additionalProperties:!1,properties:{type:{const:n},id:Us,...Lv[e.mount],...e.params,note:{type:"string",maxLength:200}},required:["type","id",...Dv[e.mount],...e.required||[]]}}const fu={oneOf:[{type:"string",minLength:1,maxLength:600},{type:"object",additionalProperties:!1,properties:{title:{type:"string",minLength:1,maxLength:40},rows:{type:"array",items:{type:"string",maxLength:48},maxItems:8}},required:["title","rows"]}]};function Nv(){return{$schema:"https://json-schema.org/draft/2020-12/schema",$id:cu,title:"ДРЕЙФ: файл комнаты",type:"object",additionalProperties:!1,required:["schema","id","grid","shell","portals","prefabs","texts","budget"],properties:{schema:{const:cu},id:uu,grid:{type:"number",enum:[.5]},shell:{type:"object",additionalProperties:!1,required:["size","kit"],properties:{size:{type:"array",prefixItems:[{type:"number",minimum:2,maximum:16},{type:"number",minimum:2.5,maximum:12},{type:"number",minimum:2,maximum:16}],minItems:3,maxItems:3},kit:{type:"string",enum:_v},outer:{type:"array",items:{type:"string",enum:Do},maxItems:4}}},portals:{type:"array",minItems:1,maxItems:4,items:{type:"object",additionalProperties:!1,required:["id","wall","at","w","h","to","door"],properties:{id:Us,wall:{type:"string",enum:Do},at:{type:"integer",minimum:0,maximum:64},w:{type:"integer",minimum:2,maximum:4},h:{type:"integer",minimum:4,maximum:5},y:{type:"integer",minimum:0,maximum:18},to:uu,door:{type:"string",enum:Ev}}}},slots:{type:"array",maxItems:16,items:{type:"object",additionalProperties:!1,required:["id","cell","face","panel","screws"],properties:{id:Us,cell:yr(3),face:{type:"string",enum:["+y","-y","+x","-x","+z","-z"]},panel:{type:"string",enum:Object.keys(wv)},screws:{type:"integer",enum:[4]}}}},prefabs:{type:"array",maxItems:48,items:{oneOf:Sv.map(Iv)}},spawn:{type:"object",additionalProperties:!1,required:["at"],properties:{at:yr(2),yaw:{type:"integer",enum:[0,90,180,270]}}},climb:{type:"object",additionalProperties:!1,required:["exit"],properties:{exit:Us}},fall:{type:"object",additionalProperties:!1,properties:{safe:{type:"number",minimum:1,maximum:6},perM:{type:"number",minimum:0,maximum:100}}},net:{type:"object",additionalProperties:!1,properties:{power:{type:"array",maxItems:32,items:{type:"array",items:Us,minItems:2,maxItems:2}}}},trap:{type:"object",additionalProperties:!1,required:["rule","hatches","hints"],properties:{rule:{type:"string",enum:lu},param:{type:"object",additionalProperties:!1,properties:Object.assign({},...lu.map(n=>Io[n].params))},hatches:{type:"array",items:Us,minItems:2,maxItems:4},hints:{type:"array",items:_a,minItems:1,maxItems:4}}},texts:{type:"object",additionalProperties:!1,required:["ru","en"],properties:{ru:{type:"object",propertyNames:_a,additionalProperties:fu},en:{type:"object",propertyNames:_a,additionalProperties:fu}}},budget:{type:"object",additionalProperties:!1,required:["drawCalls","dynamicBodies","tris"],properties:{drawCalls:{type:"integer",minimum:10,maximum:200},dynamicBodies:{type:"integer",minimum:1,maximum:200},tris:{type:"integer",minimum:1e3,maximum:3e5},pieces:{type:"integer",minimum:4,maximum:80},seam:{type:"integer",minimum:80,maximum:2e3}}},note:{type:"string",maxLength:400}}}}const Uv=n=>n===null?"null":Array.isArray(n)?"array":Number.isInteger(n)?"integer":typeof n;function du(n,e){return n==="integer"?Number.isInteger(e):n==="number"?typeof e=="number"&&Number.isFinite(e):n==="array"?Array.isArray(e):n==="object"?e!==null&&typeof e=="object"&&!Array.isArray(e):typeof e===n}function ts(n,e,t="$",i=[]){if(n===!0||n===void 0)return i;if(n===!1)return i.push({path:t,msg:"лишний элемент"}),i;if(n.oneOf){if(n.oneOf.every(a=>a.properties&&a.properties.type&&"const"in a.properties.type)&&e&&typeof e=="object"){const a=n.oneOf.find(l=>l.properties.type.const===e.type);return a?ts(a,e,t,i):(i.push({path:t+".type",msg:`неизвестный тип ${JSON.stringify(e.type)}; есть: ${n.oneOf.map(l=>l.properties.type.const).join(", ")}`}),i)}const r=n.oneOf.map(a=>ts(a,e,t,[]));return r.some(a=>!a.length)||i.push(...r.reduce((a,l)=>l.length<a.length?l:a)),i}if("const"in n&&e!==n.const)return i.push({path:t,msg:`нужно ${JSON.stringify(n.const)}, стоит ${JSON.stringify(e)}`}),i;if(n.type&&!du(n.type,e))return i.push({path:t,msg:`тип ${Uv(e)}, нужен ${n.type}`}),i;if(n.enum&&!n.enum.includes(e)&&i.push({path:t,msg:`${JSON.stringify(e)} не из списка ${JSON.stringify(n.enum)}`}),typeof e=="number"&&(n.minimum!==void 0&&e<n.minimum&&i.push({path:t,msg:`${e} меньше ${n.minimum}`}),n.maximum!==void 0&&e>n.maximum&&i.push({path:t,msg:`${e} больше ${n.maximum}`})),typeof e=="string"&&(n.minLength!==void 0&&e.length<n.minLength&&i.push({path:t,msg:`строка короче ${n.minLength}`}),n.maxLength!==void 0&&e.length>n.maxLength&&i.push({path:t,msg:`строка длиннее ${n.maxLength} (${e.length})`}),n.pattern&&!new RegExp(n.pattern).test(e)&&i.push({path:t,msg:`${JSON.stringify(e)} не по образцу ${n.pattern}`})),Array.isArray(e)&&(n.minItems!==void 0&&e.length<n.minItems&&i.push({path:t,msg:`элементов ${e.length}, нужно не меньше ${n.minItems}`}),n.maxItems!==void 0&&e.length>n.maxItems&&i.push({path:t,msg:`элементов ${e.length}, можно не больше ${n.maxItems}`}),e.forEach((s,r)=>ts(n.prefixItems&&r<n.prefixItems.length?n.prefixItems[r]:n.items,s,`${t}[${r}]`,i))),du("object",e)&&(n.properties||n.required||n.additionalProperties!==void 0||n.propertyNames)){for(const s of n.required||[])s in e||i.push({path:t,msg:`нет поля ${s}`});for(const[s,r]of Object.entries(e))n.propertyNames&&ts(n.propertyNames,s,`${t}{${s}}`,i),n.properties&&s in n.properties?ts(n.properties[s],r,`${t}.${s}`,i):n.additionalProperties===!1?i.push({path:`${t}.${s}`,msg:"поля нет в схеме"}):n.additionalProperties&&typeof n.additionalProperties=="object"&&ts(n.additionalProperties,r,`${t}.${s}`,i)}return i}const zv=n=>ts(Nv(),n),at=(n,e)=>n[0]*e[0]+n[1]*e[1]+n[2]*e[2],wt=(n,e)=>[n[0]-e[0],n[1]-e[1],n[2]-e[2]],on=(n,e)=>[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]],Ht=n=>Math.hypot(n[0],n[1],n[2]),Cn=n=>{const e=Ht(n)||1;return[n[0]/e,n[1]/e,n[2]/e]},ml=1e-6;function hu(n){const e=[];for(const[t,i,s,r,a,l]of[[0,1,2,-1,1,1],[0,-1,2,1,1,1],[1,1,0,1,2,-1],[1,-1,0,1,2,1],[2,1,0,1,1,1],[2,-1,0,-1,1,1]]){const o=[0,0,0];o[t]=i;const c=[[0,0],[1,0],[1,1],[0,1]].map(([f,p])=>{const d=[0,0,0];return d[t]=i*n[t],d[s]=r*(f*2-1)*n[s],d[a]=l*(p*2-1)*n[a],[...d,f,p]});at(on(wt(c[1],c[0]),wt(c[2],c[0])),o)<0&&c.reverse(),e.push({n:o,w:n[t],cut:!1,v:c})}return{faces:e}}function Fv(n,e,t,i){const s=[],r=n.v.map(a=>{const l=(at(e,a)-t)*i;return Math.abs(l)<ml?0:l});for(let a=0;a<n.v.length;a++){const l=(a+1)%n.v.length,o=n.v[a],c=n.v[l];if(r[a]<=0&&s.push(o),r[a]<0&&r[l]>0||r[a]>0&&r[l]<0){const f=r[a]/(r[a]-r[l]);s.push(o.map((p,d)=>p+(c[d]-p)*f))}}return s.length>=3?{...n,v:s}:null}const Ei=n=>n.cells||[n],os=n=>n.length===1?n[0]:{faces:n.flatMap(e=>e.faces),cells:n};function kv(n,e,t,i,s=!0){const r=[];for(const d of n)for(const h of d.v)Math.abs(at(e,h)-t)<5e-6&&!r.some(u=>Math.hypot(u[0]-h[0],u[1]-h[1],u[2]-h[2])<1e-5)&&r.push([h[0],h[1],h[2]]);if(r.length<3)return null;const a=r.reduce((d,h)=>[d[0]+h[0]/r.length,d[1]+h[1]/r.length,d[2]+h[2]/r.length],[0,0,0]),l=Cn(Math.abs(e[1])<.9?on(e,[0,1,0]):on(e,[1,0,0])),o=on(e,l),f=r.map(d=>{const h=wt(d,a);return{p:d,a:Math.atan2(at(h,o),at(h,l)),u:at(h,l),v:at(h,o)}}).sort((d,h)=>d.a-h.a).map(d=>[...d.p,d.u*2,d.v*2]),p=e.map(d=>d*i);return at(on(wt(f[1],f[0]),wt(f[2],f[0])),p)<0&&f.reverse(),{n:p,w:t*i,cut:s,v:f}}function Mr(n,e,t,i,s=!0){let r=1e9,a=-1e9;for(const l of n.faces)for(const o of l.v){const c=(at(e,o)-t)*i;r=Math.min(r,c),a=Math.max(a,c)}return a<=ml*10?n:r>=-ml*10?null:gl(n,e,t,i,s)}function gl(n,e,t,i,s=!0){const r=n.faces.map(l=>Fv(l,e,t,i)).filter(Boolean),a=kv(r,e,t,i,s);return!a||r.length<3?null:{faces:[...r.filter(l=>Ov(l)>1e-9),a]}}const Ov=n=>{let e=[0,0,0];for(let t=1;t+1<n.v.length;t++){const i=on(wt(n.v[t],n.v[0]),wt(n.v[t+1],n.v[0]));e=[e[0]+i[0],e[1]+i[1],e[2]+i[2]]}return Ht(e)/2};function Bv(n,e,t,i=0){const s=Cn(e);if(n.cells){const l=[],o=[];for(const c of n.cells){const f=Mr(c,s,t-i/2,1),p=Mr(c,s,t+i/2,-1);f&&l.push(f),p&&o.push(p)}return l.length&&o.length?[os(l),os(o)]:null}const r=gl(n,s,t-i/2,1),a=gl(n,s,t+i/2,-1);return r&&a?[r,a]:null}function Wi(n){let e=0;const t=[0,0,0];for(const i of n.faces)for(let s=1;s+1<i.v.length;s++){const r=i.v[0],a=i.v[s],l=i.v[s+1],o=at(r,on(a,l))/6;e+=o;for(let c=0;c<3;c++)t[c]+=o*(r[c]+a[c]+l[c])/4}return{volume:e,center:e>1e-12?t.map(i=>i/e):[0,0,0]}}const xl=(n,e)=>n.cells?os(n.cells.map(t=>xl(t,e))):{faces:n.faces.map(t=>({...t,w:t.w-at(t.n,e),v:t.v.map(i=>[i[0]-e[0],i[1]-e[1],i[2]-e[2],i[3],i[4]])}))};function yo(n){const e=[];for(const t of n.faces)for(const i of t.v)e.some(s=>Math.abs(s[0]-i[0])+Math.abs(s[1]-i[1])+Math.abs(s[2]-i[2])<1e-5)||e.push([i[0],i[1],i[2]]);return e}const Hv=n=>yo(n).reduce((e,t)=>[Math.max(e[0],Math.abs(t[0])),Math.max(e[1],Math.abs(t[1])),Math.max(e[2],Math.abs(t[2]))],[0,0,0]);function pu(n,e){let t=1e9,i=-1e9;for(const s of n.faces)for(const r of s.v){const a=at(e,r);t=Math.min(t,a),i=Math.max(i,a)}return[t,i]}function pr(n,e,t,i=1e9){if(t.cells){let l=null;for(const o of t.cells){const c=pr(n,e,o,l?l.t:i);c&&(l=c)}return l}let s=1e-4,r=i,a=null;for(const l of t.faces){const o=at(l.n,e),c=l.w-at(l.n,n);if(Math.abs(o)<1e-9){if(c<0)return null;continue}const f=c/o;if(o<0?f>s&&(s=f,a=l):r=Math.min(r,f),s>r)return null}return a?{t:s,n:a.n,cut:a.cut}:null}const Ff=(n,e)=>e.cells?Math.min(...e.cells.map(t=>Ff(n,t))):Math.max(0,e.faces.reduce((t,i)=>Math.max(t,at(i.n,n)-i.w),-1e9));function vl(n,e){if(n.cells){let r=null,a=1e18;for(const l of n.cells){const o=vl(l,e),c=(o[0]-e[0])**2+(o[1]-e[1])**2+(o[2]-e[2])**2;c<a&&(a=c,r=o)}return r}if(n.faces.every(r=>at(r.n,e)-r.w<=0))return e;let t=null,i=1e18;const s=r=>{const a=(r[0]-e[0])**2+(r[1]-e[1])**2+(r[2]-e[2])**2;a<i&&(i=a,t=r)};for(const r of n.faces){const a=at(r.n,e)-r.w;if(a<=0)continue;const l=[e[0]-r.n[0]*a,e[1]-r.n[1]*a,e[2]-r.n[2]*a];let o=!0;for(let c=0;c<r.v.length;c++){const f=r.v[c],p=r.v[(c+1)%r.v.length],d=[p[0]-f[0],p[1]-f[1],p[2]-f[2]],h=[l[0]-f[0],l[1]-f[1],l[2]-f[2]];if(at(on(d,h),r.n)>=0)continue;o=!1;const u=Math.max(0,Math.min(1,at(d,h)/(at(d,d)||1)));s([f[0]+d[0]*u,f[1]+d[1]*u,f[2]+d[2]*u])}o&&s(l)}return t||e}function kf(n,e,t=16){const i=a=>[n*Math.cos(a/t*Math.PI*2),n*Math.sin(a/t*Math.PI*2)],s=[...Array(t).keys()].map(i),r=[];for(let a=0;a<t;a++){const[l,o]=[s[a],s[(a+1)%t]],c=Cn([l[0]+o[0],0,l[1]+o[1]]),f=[[l[0],-e,l[1],0,0],[l[0],e,l[1],0,1],[o[0],e,o[1],1,1],[o[0],-e,o[1],1,0]];r.push({n:c,w:c[0]*l[0]+c[2]*l[1],cut:!1,v:f})}for(const a of[1,-1]){const l=s.map(([o,c])=>[o,a*e,c,0,0]);a>0&&l.reverse(),r.push({n:[0,a,0],w:e,cut:!1,v:l})}return{faces:r}}function ya(n,e,t,i,s=null){const r=[];for(const o of n.faces)if(!s||s(o))for(let c=0;c<o.v.length;c++){const f=o.v[c],p=o.v[(c+1)%o.v.length],d=at(e,f)-t,h=at(e,p)-t;if(d<=0&&h>=0||d>=0&&h<=0){const u=Math.abs(d-h)<1e-9?0:d/(d-h);r.push([0,1,2].map(_=>f[_]+(p[_]-f[_])*u))}}if(!r.length)return null;let a=1e9,l=-1e9;for(const o of r){const c=at(i,o);a=Math.min(a,c),l=Math.max(l,c)}return[a,l]}const Gv=(n,e,t)=>Ei(n).map(i=>Vv(i,e,t)).filter(i=>i.length);function Vv(n,e,t){const i=[];for(const l of n.faces)for(let o=0;o<l.v.length;o++){const c=l.v[o],f=l.v[(o+1)%l.v.length],p=at(e,c)-t,d=at(e,f)-t;if(p<=0==d<=0)continue;const h=p/(p-d),u=[0,1,2].map(_=>c[_]+(f[_]-c[_])*h);i.some(_=>Ht(wt(_,u))<1e-4)||i.push(u)}if(i.length<3)return[];const s=[0,1,2].map(l=>i.reduce((o,c)=>o+c[l],0)/i.length),r=Cn(Math.abs(e[1])<.9?on(e,[0,1,0]):on(e,[1,0,0])),a=on(e,r);return i.map(l=>{const o=wt(l,s);return[Math.atan2(at(o,a),at(o,r)),l]}).sort((l,o)=>l[0]-o[0]).map(l=>l[1])}const $n=(n,e)=>[n[3]*e[0]+n[0]*e[3]+n[1]*e[2]-n[2]*e[1],n[3]*e[1]-n[0]*e[2]+n[1]*e[3]+n[2]*e[0],n[3]*e[2]+n[0]*e[1]-n[1]*e[0]+n[2]*e[3],n[3]*e[3]-n[0]*e[0]-n[1]*e[1]-n[2]*e[2]];function Rt(n,e){const[t,i,s,r]=n,a=2*(i*e[2]-s*e[1]),l=2*(s*e[0]-t*e[2]),o=2*(t*e[1]-i*e[0]);return[e[0]+r*a+(i*o-s*l),e[1]+r*l+(s*a-t*o),e[2]+r*o+(t*l-i*a)]}function Wv(n,e,t){const i=Rt(e,[1,0,0]),s=Rt(e,[0,1,0]),r=Rt(e,[0,0,1]),a=l=>Math.abs(i[l])*t[0]+Math.abs(s[l])*t[1]+Math.abs(r[l])*t[2];return{x0:n[0]-a(0),x1:n[0]+a(0),y0:n[1]-a(1),y1:n[1]+a(1),z0:n[2]-a(2),z1:n[2]+a(2)}}async function Xv({gravity:n=9.8}={}){const e=await uo(()=>import("./rapier-Dr7-2af2.js"),[],import.meta.url),t=e.default||e;await t.init();const i=new t.World({x:0,y:-n,z:0});i.integrationParameters.numSolverIterations=6;const s=new Map,r=new Map,a=new Map,l=new t.EventQueue(!0),o={x:0,y:0,z:0,w:1},c=u=>({x:u[0],y:u[1],z:u[2]}),f=u=>({x:u[0],y:u[1],z:u[2],w:u[3]});let p=0,d=null;{const u=performance.now();i.step(),p=performance.now()-u}const h={kind:"rapier",warmMs:p,addStatic(u){const _=i.createCollider(t.ColliderDesc.cuboid((u.x1-u.x0)/2,(u.y1-u.y0)/2,(u.z1-u.z0)/2).setTranslation((u.x0+u.x1)/2,(u.y0+u.y1)/2,(u.z0+u.z1)/2).setFriction(.8));_.box=u,s.set(u.id,_)},setStatic(u,_){const g=s.get(u);g&&g.setEnabled(!!_)},removeStatic(u){const _=s.get(u);_&&(i.removeCollider(_,!0),s.delete(u))},addPart(u,{fixed:_=!1,kinematic:g=!1}={}){const m=(g?t.RigidBodyDesc.kinematicPositionBased():t.RigidBodyDesc.dynamic()).setTranslation(...u.p).setCanSleep(!0).setCcdEnabled(u.mass<4||!!u.poly);u.q&&m.setRotation({x:u.q[0],y:u.q[1],z:u.q[2],w:u.q[3]}),m.setLinearDamping(.05).setAngularDamping(.25);const y=i.createRigidBody(m),R=8*u.h[0]*u.h[1]*u.h[2],S=u.poly?yo(u.poly):null;if(u.poly&&u.poly.cells){const L=Wi(u.poly).volume,B=[];for(const N of u.poly.cells){const H=t.ColliderDesc.convexHull(new Float32Array(yo(N).flat()));H&&B.push(i.createCollider(H.setMass(u.mass*Wi(N).volume/L).setFriction(.7).setRestitution(.1),y))}return g||y.sleep(),r.set(u.id,{body:y,col:B[0],cols:B,h:u.h,mass:u.mass,fixed:_,held:!1,pts:S,poly:u.poly}),u.id}const C=S&&t.ColliderDesc.convexHull(new Float32Array(S.flat())),I=C||(u.shape==="cyl"?t.ColliderDesc.cylinder(u.h[1],u.h[0]):t.ColliderDesc.cuboid(...u.h));C?I.setMass(u.mass):I.setDensity(u.mass/R),I.setFriction(.7).setRestitution(.1);const b=i.createCollider(I,y);return g||y.sleep(),r.set(u.id,{body:y,col:b,cols:[b],h:u.h,mass:u.mass,fixed:_,held:!1,pts:S,poly:u.poly||null}),u.id},joint(u,_,g,m,y=!0){const R=r.get(_),S=g==="world"?null:r.get(g);if(!R)return;if(!S){a.set(u,{world:!0,a:_}),R.body.setBodyType(t.RigidBodyType.KinematicPositionBased,!0);return}const C=R.body.translation(),I=S.body.translation(),b=R.body.rotation(),L=S.body.rotation(),B=Rt([-b.x,-b.y,-b.z,b.w],[m[0]-C.x,m[1]-C.y,m[2]-C.z]),N=Rt([-L.x,-L.y,-L.z,L.w],[m[0]-I.x,m[1]-I.y,m[2]-I.z]),H=$n([-L.x,-L.y,-L.z,L.w],[b.x,b.y,b.z,b.w]),V=t.JointData.fixed({x:B[0],y:B[1],z:B[2]},{x:0,y:0,z:0,w:1},{x:N[0],y:N[1],z:N[2]},{x:H[0],y:H[1],z:H[2],w:H[3]}),Q=i.createImpulseJoint(V,R.body,S.body,!0);y||Q.setContactsEnabled(!1),a.set(u,{j:Q,a:_,b:g})},unjoint(u){const _=a.get(u);if(_){if(a.delete(u),_.world){const g=r.get(_.a);g&&![...a.values()].some(m=>m.world&&m.a===_.a)&&(g.body.setBodyType(t.RigidBodyType.Dynamic,!0),g.body.wakeUp());return}i.removeImpulseJoint(_.j,!0);for(const g of[_.a,_.b]){const m=r.get(g);m&&m.body.wakeUp()}}},release(u){const _=r.get(u);_&&(_.fixed=!1,_.body.bodyType()!==t.RigidBodyType.Dynamic&&!_.held&&_.body.setBodyType(t.RigidBodyType.Dynamic,!0),_.body.wakeUp())},setKinematic(u,_,g=!1){const m=r.get(u);if(m){m.held=!!_,m.body.setBodyType(_?t.RigidBodyType.KinematicPositionBased:t.RigidBodyType.Dynamic,!0);for(const y of m.cols)y.setSensor(!!_&&g);_||m.body.wakeUp()}},moveKinematic(u,_,g){const m=r.get(u);m&&(m.body.setNextKinematicTranslation({x:_[0],y:_[1],z:_[2]}),g&&m.body.setNextKinematicRotation({x:g[0],y:g[1],z:g[2],w:g[3]}))},setPose(u,_,g,m=!0){const y=r.get(u);y&&(y.body.setTranslation({x:_[0],y:_[1],z:_[2]},!1),g&&y.body.setRotation({x:g[0],y:g[1],z:g[2],w:g[3]},!1),y.body.setLinvel({x:0,y:0,z:0},!1),y.body.setAngvel({x:0,y:0,z:0},!1),m&&y.body.bodyType()===t.RigidBodyType.Dynamic&&y.body.sleep())},impulse(u,_){const g=r.get(u);!g||g.body.bodyType()!==t.RigidBodyType.Dynamic||g.body.applyImpulse({x:_[0],y:_[1],z:_[2]},!0)},impulseAt(u,_,g){const m=r.get(u);!m||m.body.bodyType()!==t.RigidBodyType.Dynamic||m.body.applyImpulseAtPoint({x:_[0],y:_[1],z:_[2]},{x:g[0],y:g[1],z:g[2]},!0)},velocity(u,_){const g=r.get(u);g&&(g.body.setLinvel({x:_[0],y:_[1],z:_[2]},!0),g.body.wakeUp())},remove(u){const _=r.get(u);if(_){for(const[g,m]of a)(m.a===u||m.b===u)&&h.unjoint(g);i.removeRigidBody(_.body),r.delete(u)}},has:u=>r.has(u),wakeAll(){for(const u of r.values())u.body.bodyType()===t.RigidBodyType.Dynamic&&u.body.wakeUp()},setPlayer(u){const m=Math.max(.02,(u.h-.22)/2-.27),y={x:u.x,y:u.y+.22+m+.27,z:u.z};if(!d){d={body:i.createRigidBody(t.RigidBodyDesc.kinematicPositionBased().setTranslation(y.x,y.y,y.z))},d.col=i.createCollider(t.ColliderDesc.capsule(m,.27).setFriction(.2).setCollisionGroups(196607),d.body),d.hh=m;return}Math.abs(d.hh-m)>.001&&(d.col.setHalfHeight(m),d.hh=m);const R=d.body.translation();Math.hypot(R.x-y.x,R.y-y.y,R.z-y.z)>.4?d.body.setTranslation(y,!0):d.body.setNextKinematicTranslation(y)},step(u){i.timestep=Math.min(1/30,u);const _=performance.now();return i.step(l),p=performance.now()-_,p},pose(u){const _=r.get(u);if(!_)return null;const g=_.body.translation(),m=_.body.rotation();return{p:[g.x,g.y,g.z],q:[m.x,m.y,m.z,m.w],sleep:_.body.isSleeping(),v:(()=>{const y=_.body.linvel();return[y.x,y.y,y.z]})()}},aabb(u){const _=r.get(u),g=_&&h.pose(u);if(!g)return null;if(!_.pts)return Wv(g.p,g.q,_.h);const m={x0:1e9,x1:-1e9,y0:1e9,y1:-1e9,z0:1e9,z1:-1e9};for(const y of _.pts){const R=Rt(g.q,y),S=g.p[0]+R[0],C=g.p[1]+R[1],I=g.p[2]+R[2];S<m.x0&&(m.x0=S),S>m.x1&&(m.x1=S),C<m.y0&&(m.y0=C),C>m.y1&&(m.y1=C),I<m.z0&&(m.z0=I),I>m.z1&&(m.z1=I)}return m},poly:u=>(r.get(u)||{}).poly||null,restsOnStatic(u){const _=r.get(u);if(!_)return!1;let g=!1,m=!1;const y=_.body.translation().y;for(const R of _.cols)i.contactPairsWith(R,S=>{const C=S.parent();!C||!C.isDynamic()?(!d||C!==d.body)&&(g=g||!C):C.translation().y<y-.01&&(m=!0)});return g&&!m},anchor(u,_){const g=r.get(u);if(!g||g.held)return;const m=g.body.bodyType(),y=m===t.RigidBodyType.Dynamic;_&&y?g.body.setBodyType(t.RigidBodyType.KinematicPositionBased,!0):!_&&!y&&(g.body.setBodyType(t.RigidBodyType.Dynamic,!0),g.body.wakeUp())},carry(u,_){const g=r.get(u);if(g)for(const m of g.cols)m.setCollisionGroups(_?131069:4294967295)},pointsAt(u,_,g){const m=r.get(u);return m?(m.pts||m.box||(m.box=[-1,1].flatMap(R=>[-1,1].flatMap(S=>[-1,1].map(C=>[R*m.h[0],S*m.h[1],C*m.h[2]]))))).map(R=>{const S=Rt(g,R);return[_[0]+S[0],_[1]+S[1],_[2]+S[2]]}):[]},overlaps(u,_,g,m){const y=r.get(u),R=[];if(!y)return R;const S=h.pointsAt(u,_,g),C=[0,1,2].map(b=>Math.min(...S.map(L=>L[b]))),I=[0,1,2].map(b=>Math.max(...S.map(L=>L[b])));for(const[b,L]of s){const B=L.box;if(!(!B||I[0]<B.x0||C[0]>B.x1||I[1]<B.y0||C[1]>B.y1||I[2]<B.z0||C[2]>B.z1||!L.isEnabled()||!m(b)))for(const N of y.cols){const H=N.shape.contactShape(c(_),f(g),L.shape,L.translation(),o,0);H&&H.distance<0&&R.push({id:b,depth:-H.distance,n:[-H.normal1.x,-H.normal1.y,-H.normal1.z]})}}return R},thaw(u){const _=s.get(u);if(_){for(const g of _.all||[_])i.removeCollider(g,!0);s.delete(u)}},freeze(u){const _=r.get(u);if(!_)return;const g=h.pose(u);i.removeRigidBody(_.body),r.delete(u),h.addFrozen({id:u,poly:_.poly,pts:_.pts,p:g.p,q:g.q})},addFrozen(u){const _=(u.poly?Ei(u.poly).map(yo):[u.pts]).map(g=>t.ColliderDesc.convexHull(new Float32Array(g.flat()))).filter(Boolean).map(g=>i.createCollider(g.setTranslation(...u.p).setRotation({x:u.q[0],y:u.q[1],z:u.q[2],w:u.q[3]}).setFriction(.8)));_.length&&(_[0].all=_,s.set(u.id,_[0]))},half:u=>(r.get(u)||{}).h,mass:u=>(r.get(u)||{}).mass,bodies:()=>[...r.keys()],stats(){let u=0,_=0,g=0;for(const m of r.values())m.body.bodyType()===t.RigidBodyType.Dynamic&&g++,m.body.isSleeping()?_++:u++;return{awake:u,asleep:_,total:r.size,dynamic:g,stepMs:p}},dispose(){i.free()}};return h}function qv({bounds:n,bind:e=!0}){e&&If({PH:{g:14,gBody:9.8,squeeze:3},playerR:.3,boundsAt:()=>n,placeAt:()=>!0,roomHeight:()=>n.h,spawn:{x:0,z:0,yaw:0,pitch:0},speed:3.2});const t={boxes:[]},i=new Set,s=new Map,r=new Map;let a=0,l=null;const o=()=>({boxes:t.boxes.filter(f=>!i.has(f.id)),circles:[]}),c={kind:"box",warmMs:0,addStatic(f){t.boxes.push(f)},setStatic(f,p){p?i.delete(f):i.add(f)},addPart(f,{fixed:p=!1,kinematic:d=!1}={}){return s.set(f.id,{id:f.id,x:f.p[0],y:f.p[1],z:f.p[2],hx:f.h[0],hy:f.h[1],hz:f.h[2],vx:0,vy:0,vz:0,rest:!0,fixed:p||d,held:!1,mass:f.mass,h:f.h,q:f.q||[0,0,0,1]}),f.id},joint(f,p,d){r.set(f,{a:p,b:d});const h=s.get(p);h&&(h.fixed=!0);const u=d!=="world"&&s.get(d);u&&(u.fixed=!0)},unjoint(f){r.delete(f)},release(f){const p=s.get(f);p&&!p.held&&(p.fixed=!1,p.rest=!1)},setKinematic(f,p){const d=s.get(f);d&&(d.held=!!p,d.fixed=!!p,p||(d.rest=!1))},moveKinematic(f,p,d){const h=s.get(f);h&&(h.x=p[0],h.y=p[1],h.z=p[2],d&&(h.q=d))},setPose(f,p,d){const h=s.get(f);h&&(h.x=p[0],h.y=p[1],h.z=p[2],d&&(h.q=d),h.vx=h.vy=h.vz=0,h.rest=!0)},impulse(f,p){const d=s.get(f);if(!d||d.fixed)return;const h=d.mass||1;d.vx+=p[0]/h,d.vy+=p[1]/h,d.vz+=p[2]/h,d.rest=!1},impulseAt(f,p){c.impulse(f,p)},velocity(f,p){const d=s.get(f);d&&(d.vx=p[0],d.vy=p[1],d.vz=p[2],d.rest=!1)},remove(f){s.delete(f);for(const[p,d]of r)(d.a===f||d.b===f)&&r.delete(p)},has:f=>s.has(f),poly:()=>null,restsOnStatic:()=>!1,freeze(){},addFrozen(){},thaw(){},carry(){},anchor(){},pointsAt(f,p){const d=s.get(f);return d?[-1,1].flatMap(h=>[-1,1].flatMap(u=>[-1,1].map(_=>[p[0]+h*d.hx,p[1]+u*d.hy,p[2]+_*d.hz]))):[]},overlaps(f,p,d,h){const u=s.get(f),_=[];if(!u)return _;for(const g of t.boxes){if(i.has(g.id)||!h(g.id))continue;const m=[[p[0]+u.hx-g.x0,[-1,0,0]],[g.x1-p[0]+u.hx,[1,0,0]],[p[1]+u.hy-g.y0,[0,-1,0]],[g.y1-p[1]+u.hy,[0,1,0]],[p[2]+u.hz-g.z0,[0,0,-1]],[g.z1-p[2]+u.hz,[0,0,1]]].sort((y,R)=>y[0]-R[0])[0];m[0]>0&&_.push({id:g.id,depth:m[0],n:m[1]})}return _},wakeAll(){for(const f of s.values())f.fixed||(f.rest=!1)},setPlayer(f){l={x0:f.x-.27,x1:f.x+.27,z0:f.z-.27,z1:f.z+.27,y0:f.y+.22,y1:f.y+f.h}},step(f){const p=performance.now(),d=o(),h=[...s.values()],u=h.map(nu),_=l?[l]:[];for(let g=0;g<h.length;g++){const m=h[g];m.fixed||m.rest||(Qx(m,d,Math.min(1/30,f),u.filter((y,R)=>R!==g).concat(_)),u[g]=nu(m))}return a=performance.now()-p,a},pose(f){const p=s.get(f);return p?{p:[p.x,p.y,p.z],q:p.q,sleep:p.rest||p.fixed,v:[p.vx,p.vy,p.vz]}:null},aabb(f){const p=s.get(f);return p?{x0:p.x-p.hx,x1:p.x+p.hx,y0:p.y-p.hy,y1:p.y+p.hy,z0:p.z-p.hz,z1:p.z+p.hz}:null},half:f=>(s.get(f)||{}).h,mass:f=>(s.get(f)||{}).mass,bodies:()=>[...s.keys()],stats(){let f=0,p=0,d=0;for(const h of s.values())h.fixed||d++,h.rest||h.fixed?p++:f++;return{awake:f,asleep:p,total:s.size,dynamic:d,stepMs:a}},dispose(){}};return c}async function $v(n,e={}){return n==="box"?qv(e):Xv(e)}function Yv({panels:n=Tv,cyc:e=()=>0}={}){const t=new Map(n.map(l=>[l.id,l])),i=new Map,s=()=>({fx:["bolt","bolt","bolt","bolt"],cut:[0,0,0,0],plate:"on",weld:0,seamCyc:-1,dirty:!1}),r=l=>t.has(l)?(i.has(l)||i.set(l,s()),i.get(l)):null,a=l=>l.cut.every(o=>o>=1);return{has:l=>t.has(l),cut(l,o,c){const f=r(l);return!f||f.plate!=="on"||o<0||o>3||f.cut[o]>=1?null:(f.cut[o]=Math.min(1,f.cut[o]+c/kt.boltCut),f.cut[o])},loose:l=>{const o=r(l);return!!o&&o.plate==="on"&&a(o)},take(l){const o=r(l);return!o||o.plate!=="on"||!a(o)?!1:(o.plate="off",o.weld=0,o.dirty=!0,!0)},seatable(l,o){const c=r(l),f=t.get(l);if(!c||c.plate!=="off"||!o)return!1;const p=$l[f.face],d=[o[0]-f.x,o[1]-f.y,o[2]-f.z],h=d[0]*p[0]+d[1]*p[1]+d[2]*p[2];return Math.hypot(d[0]-h*p[0],d[1]-h*p[1],d[2]-h*p[2])<kt.seat&&h>-.05&&h<kt.seatOut},blocked(l,o=[]){const c=t.get(l);if(!c)return"";const f=Fo(c),p=(o||[]).find(d=>d.x1>f.x0&&d.x0<f.x1&&d.y1>f.y0&&d.y0<f.y1&&d.z1>f.z0&&d.z0<f.z1);return p?p.id||"plot":""},seat(l,o,c=[]){const f=r(l);return!f||!this.seatable(l,o)||this.blocked(l,c)?!1:(f.plate="seat",f.weld=0,!0)},unseat(l){const o=r(l);return!o||o.plate!=="seat"?!1:(o.plate="off",o.weld=0,!0)},weld(l,o){const c=r(l);return!c||c.plate!=="seat"?null:(c.weld=Math.min(1,c.weld+o/kt.weld),c.weld>=1&&(c.plate="on",c.fx=["weld","weld","weld","weld"],c.cut=[0,0,0,0],c.seamCyc=e(),c.dirty=!0),c.weld)},view(l){const o=r(l);if(!o)return null;const c=o.fx[0]==="weld"?o.seamCyc===e()?1:2:0;return{bolts:o.cut.map(f=>f>=1?1:0),fx:o.fx.slice(),plate:o.plate==="off"?"off":"on",seated:o.plate==="seat",weld:+o.weld.toFixed(2),seam:c}},open:l=>{const o=r(l);return!!o&&o.plate==="off"},load(l){for(const[o,c,f]of l||[]){const p=r(o);!p||p.dirty||(c==="off"?(p.plate="off",p.cut=[1,1,1,1]):(p.plate="on",p.cut=[0,0,0,0],f>=0&&(p.fx=["weld","weld","weld","weld"],p.seamCyc=f)))}},shared(){const l=[];for(const[o,c]of i)c.dirty&&(l.push([o,c.plate==="off"?"off":"on"]),c.dirty=!1);return l},state:()=>[...i].map(([l,o])=>({id:l,...o}))}}const mu=.08,Oi=.75,Of=n=>[-n[0],-n[1],-n[2],n[3]];function Kv(n,e,t,i,s,r){const a=Of(i),l=Rt(a,[n-t[0],-t[1],e-t[2]]),o=Rt(a,[0,1,0]);let c=-1e9,f=1e9;const p=(d,h)=>{const u=d[0]*o[0]+d[1]*o[1]+d[2]*o[2],_=d[0]*l[0]+d[1]*l[1]+d[2]*l[2]-h;if(Math.abs(u)<1e-9)return _<=1e-9;const g=-_/u;return u>0?f=Math.min(f,g):c=Math.max(c,g),c<=f};if(r){for(const d of r)if(!p(d.n,d.w))return null}else for(let d=0;d<3;d++){const h=[0,0,0];if(h[d]=1,!p(h,s[d])||(h[d]=-1,!p(h,s[d])))return null}return f-c>1e-4?[c,f]:null}const Jv=n=>{for(const e of[[1,0,0],[0,1,0],[0,0,1]]){const t=Rt(n,e);if(Math.max(Math.abs(t[0]),Math.abs(t[1]),Math.abs(t[2]))<.9995)return!1}return!0};function _l(n,e,t,i,s,r,a=null){if(a&&a.cells){const g=[];for(const m of a.cells)g.push(..._l(n,e,t,i,s,r,m.faces));return g}if(i.x0>s+Oi||i.x1<s-Oi||i.z0>r+Oi||i.z1<r-Oi)return[];if(!a&&Jv(e.q))return[{...i,id:n}];const l=[],o=Math.max(i.x0,s-Oi),c=Math.min(i.x1,s+Oi),f=Math.max(i.z0,r-Oi),p=Math.min(i.z1,r+Oi),d=Math.max(1,Math.ceil((c-o)/mu)),h=Math.max(1,Math.ceil((p-f)/mu)),u=(c-o)/d,_=(p-f)/h;for(let g=0;g<d;g++)for(let m=0;m<h;m++){const y=Kv(o+(g+.5)*u,f+(m+.5)*_,e.p,e.q,t,a);if(!y)continue;const R=l[l.length-1];if(R&&R.i===g&&R.k===m-1&&Math.abs(R.y0-y[0])<.004&&Math.abs(R.y1-y[1])<.004){R.z1=f+(m+1)*_,R.k=m;continue}l.push({x0:o+g*u,x1:o+(g+1)*u,z0:f+m*_,z1:f+(m+1)*_,y0:y[0],y1:y[1],id:n,i:g,k:m})}return l}function yl(n,e,t,i=null){const s=Rt(Of(e.q),[n[0]-e.p[0],n[1]-e.p[1],n[2]-e.p[2]]);if(i&&i.cells)return Math.min(...i.cells.map(r=>yl(n,e,t,r.faces)));if(i){let r=-1e9;for(const a of i)r=Math.max(r,a.n[0]*s[0]+a.n[1]*s[1]+a.n[2]*s[2]-a.w);return Math.max(0,r)}return Math.hypot(...[0,1,2].map(r=>Math.max(0,Math.abs(s[r])-t[r])))}const Zv={W:[1,0,0],E:[-1,0,0],S:[0,0,1],N:[0,0,-1]},Ma={slop:.004,deep:.05,small:.12},gu=(n,e)=>n[0]*e[0]+n[1]*e[1]+n[2]*e[2];function jv({S:n,C:e,phys:t,mut:i,ev:s}){const[r,a,l]=e.size,o=.4;let c=new Map(e.statics.map(N=>[N.id,N]));const f=()=>{c=new Map(e.statics.map(N=>[N.id,N]))},p=N=>N.kind==="wall"?Zv[N.side]:N.kind==="floor"?[0,1,0]:N.kind==="ceil"?[0,-1,0]:null,d=N=>N.side==="W"?0:N.side==="E"?-r:N.side==="S"?0:N.side==="N"?-l:N.kind==="floor"?0:-a,h=N=>N&&N.kind!=="note"&&!(N.kind==="glass"&&(n.windows.get(N.id)||{}).broken)&&!(N.kind==="door"&&(n.doors.get(N.door)||{}).open>.5),u=(N,H,V,Q,q,ne)=>N==="W"?[-ne,0,Q,q,H,V]:N==="E"?[r,r+ne,Q,q,H,V]:N==="S"?[H,V,Q,q,-ne,0]:[H,V,Q,q,l,l+ne],_=(N,H)=>N[0]>=H[0]&&N[0]<=H[1]&&N[1]>=H[2]&&N[1]<=H[3]&&N[2]>=H[4]&&N[2]<=H[5],g=N=>N[0]>=0&&N[0]<=r&&N[1]>=0&&N[1]<=a&&N[2]>=0&&N[2]<=l;function m(N,H=!1){if(g(N))return!0;for(const V of e.openNiches||[])if(N[0]>V.x0-.02&&N[0]<V.x1+.02&&N[1]>V.y0-.02&&N[1]<V.y1+.02&&N[2]>V.z0-.02&&N[2]<V.z1+.02)return!0;for(const V of e.portals){const Q=n.doors.get(V.id);if(!(H&&Q&&Q.open<=.5&&!Q.cut)&&_(N,u(V.side,V.a0,V.a1,V.y0-.05,V.y1+.3,o+1.6)))return!0}for(const V of n.windows.values())if(V.broken&&_(N,u(V.side,V.a0,V.a1,V.y0,V.y1,9)))return!0;for(const V of e.hatches)if((n.hatchOpen.get(V.id)||0)>0&&N[0]>V.x0&&N[0]<V.x1&&N[2]>V.z0&&N[2]<V.z1&&N[1]<.05)return!0;return!1}function y(N,H=h){const V=[0,0,0];for(let Q=0;Q<6;Q++){let q=null,ne=Ma.slop;for(const he of N){const re=[he.p[0]+V[0],he.p[1]+V[1],he.p[2]+V[2]];for(const Pe of t.overlaps(he.id,re,he.q,de=>H(c.get(de)))){const de=c.get(Pe.id),be=p(de);let ge=Pe.n,Te=Pe.depth;if(be&&(Te>Ma.small||gu(ge,be)<-.2)){ge=be,Te=0;const Be=d(de);for(const ye of t.pointsAt(he.id,re,he.q))Te=Math.max(Te,Be-gu(be,ye))}Te>ne&&(ne=Te,q=ge)}}if(!q)break;for(let he=0;he<3;he++)V[he]+=q[he]*(ne+.001)}return V}function R(N,H){const V=N[0];if(m(V.p,H))return[0,0,0];const Q={lo:[1e9,1e9,1e9],hi:[-1e9,-1e9,-1e9]};for(const ne of N)for(const he of t.pointsAt(ne.id,ne.p,ne.q))for(let re=0;re<3;re++)Q.lo[re]=Math.min(Q.lo[re],he[re]),Q.hi[re]=Math.max(Q.hi[re],he[re]);const q=[r,a,l];return[0,1,2].map(ne=>Q.hi[ne]-Q.lo[ne]>=q[ne]?q[ne]/2-(Q.lo[ne]+Q.hi[ne])/2:Q.lo[ne]<.003?.003-Q.lo[ne]:Q.hi[ne]>q[ne]-.003?q[ne]-.003-Q.hi[ne]:0)}const S=N=>N.filter(H=>t.has(H)).map(H=>{const V=t.pose(H);return{id:H,p:V.p,q:V.q}}),C=(N,H)=>N.map(V=>({...V,p:V.p.map((Q,q)=>Q+H[q])})),I=(N,H)=>N.map((V,Q)=>V+H[Q]);function b(N,H){if(i.has("noeject"))return H;const V=S(N),Q=V[0],q=C(V,[0,1,2].map(he=>H[he]-Q.p[he]));let ne=R(q,!0);return ne=I(ne,y(C(q,ne),h)),[0,1,2].map(he=>H[he]+ne[he])}function L(N,H){if(i.has("noeject"))return 0;const V=S(N);if(!V.length)return 0;const Q=R(V,!1),q=Math.hypot(...Q)>0,ne=I(Q,y(C(V,Q))),he=Math.hypot(...ne);if(he<.002)return 0;for(const re of V)t.setPose(re.id,I(re.p,ne),re.q,!1);return(q||he>Ma.deep)&&s("returned",{id:V[0].id,why:H,d:+he.toFixed(3)}),he}function B(N){const H=t.pose(N);if(!H)return 0;if(!m(H.p))return 9;const V=t.aabb(N);if(V.x0>0&&V.y0>-.01&&V.z0>0&&V.x1<r&&V.y1<a&&V.z1<l)return 0;let Q=0;for(const q of t.overlaps(N,H.p,H.q,ne=>{const he=c.get(ne);return!!he&&!!p(he)}))Q=Math.max(Q,q.depth);return Q}return{hold:b,eject:L,depth:B,allowed:m,refresh:f}}const zn={cell:.5,gap:.01,t:.012,inset:.07,depth:.28,hull:.1,bolt:.075,mass:9},Ys={W:[1,0,0],E:[-1,0,0],S:[0,0,1],N:[0,0,-1],F:[0,1,0],C:[0,-1,0]},xu={W:"+x",E:"-x",S:"+z",N:"-z",F:"+y",C:"-y"},Qv=n=>{let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return(e>>>0)/4294967296};function e_(n){const[e,t,i]=n.size,s=zn.cell,r=[],a=new Set([...n.outer||[],...n.windows.map(l=>l.side)]);for(const l of["W","E","S","N","F","C"]){const o="WESN".includes(l),c=l==="W"||l==="E"?i:e,f=o?t:i,p=Math.floor(c/s+1e-6),d=Math.floor(f/s+1e-6),h=new Uint8Array(p*d),u=(g,m,y,R)=>{for(let S=Math.max(0,Math.floor(g/s+.001));S<Math.min(p,Math.ceil(m/s-.001));S++)for(let C=Math.max(0,Math.floor(y/s+.001));C<Math.min(d,Math.ceil(R/s-.001));C++)h[S*d+C]=1},_=g=>l==="W"||l==="E"?[g.z0,g.z1,g.y0,g.y1]:o?[g.x0,g.x1,g.y0,g.y1]:[g.x0,g.x1,g.z0,g.z1];if(o)for(const g of n.holes)g.side===l&&u(g.a0-.13,g.a1+.13,Math.max(0,g.y0-.13),g.y1+.13);for(const g of n.statics){if(["floor","ceil","wall","stub","door","glass","note"].includes(g.kind))continue;({W:g.x0<.12,E:g.x1>e-.12,S:g.z0<.12,N:g.z1>i-.12,F:g.y0<.12,C:g.y1>t-.12})[l]&&u(..._(g))}for(const g of n.parts)if(["monitor","side"].includes(g.kind)){const m={x0:g.p[0]-g.h[0],x1:g.p[0]+g.h[0],y0:g.p[1]-g.h[1],y1:g.p[1]+g.h[1],z0:g.p[2]-g.h[2],z1:g.p[2]+g.h[2]};({W:m.x0<.12,E:m.x1>e-.12,S:m.z0<.12,N:m.z1>i-.12,F:m.y0<.12,C:m.y1>t-.12})[l]&&u(..._(m))}for(const g of n.panels)if(g.face===xu[l]){const m=l==="W"||l==="E"?[g.z,g.y]:o?[g.x,g.y]:[g.x,g.z];u(m[0]-.24,m[0]+.24,m[1]-.24,m[1]+.24)}if(l==="F")for(const g of n.hatches)u(g.x0-.05,g.x1+.05,g.z0-.05,g.z1+.05);if(l==="C")for(const g of n.fixtures)u(g.x-g.w/2-.05,g.x+g.w/2+.05,g.z-g.l/2-.05,g.z+g.l/2+.05);for(const[g,m]of[[2,2],[2,1],[1,2],[1,1]])for(let y=0;y+g<=p;y++)for(let R=0;R+m<=d;R++){let S=!0;for(let V=0;V<g&&S;V++)for(let Q=0;Q<m;Q++)if(h[(y+V)*d+R+Q]){S=!1;break}if(!S||g===2&&y%2||m===2&&R%2)continue;for(let V=0;V<g;V++)for(let Q=0;Q<m;Q++)h[(y+V)*d+R+Q]=1;const C=y*s,I=(y+g)*s,b=R*s,L=(R+m)*s,B=(C+I)/2,N=(b+L)/2,H={id:`t${l.toLowerCase()}${y}_${R}`,tile:!0,room:n.id,side:l,face:xu[l],u0:C,u1:I,v0:b,v1:L,depth:l==="C"?.2:zn.depth,outer:o&&a.has(l)};if([H.x,H.y,H.z]={W:[0,N,B],E:[e,N,B],S:[B,N,0],N:[B,N,i],F:[B,0,N],C:[B,t,N]}[l],r.push(H),H.outer){const V=Ys[l],Q={...H,id:H.id+".hull",hull:!0,tileOf:H.id,depth:zn.hull,u0:C+.04,u1:I-.04,v0:b+.04,v1:L-.04};Q.x-=V[0]*H.depth,Q.z-=V[2]*H.depth,r.push(Q)}}}return r}const Fs=n=>Ys[n.side];function ss(n,e,t,i=0){const s=Ys[n.side],r=[n.x,n.y,n.z],a={},[l,o]=n.side==="W"||n.side==="E"?["z","y"]:"SN".includes(n.side)?["x","y"]:["x","z"];return["x","y","z"].forEach((c,f)=>{if(s[f]){const p=r[f]+s[f]*e,d=r[f]+s[f]*t;a[c+"0"]=Math.min(p,d),a[c+"1"]=Math.max(p,d)}}),a[l+"0"]=n.u0+i,a[l+"1"]=n.u1-i,a[o+"0"]=n.v0+i,a[o+"1"]=n.v1-i,a}const No=n=>n.hull?ss(n,-.14,.001):ss(n,-n.depth,0,.03);function Mo(n,e){const t=Ys[n.side],i=[[0,0],[1,0],[1,1],[0,1]][e],s=zn.inset,r=i[0]?n.u1-s:n.u0+s,a=i[1]?n.v1-s:n.v0+s,l=n.hull?.012:.02;return{W:[n.x,a,r],E:[n.x,a,r],S:[r,a,n.z],N:[r,a,n.z],F:[r,n.y,a],C:[r,n.y,a]}[n.side].map((c,f)=>c+t[f]*l)}const bo=n=>{const e=Ys[n.side],t=(n.u1-n.u0)/2-zn.gap,i=(n.v1-n.v0)/2-zn.gap;return e[1]?[t,zn.t,i]:e[0]?[zn.t,i,t]:[t,i,zn.t]};function t_(n,e=!1){if(n.hull)return[];const t=Qv(n.id+n.room),i=Ys[n.side],s=n.u1-n.u0-.1,r=n.v1-n.v0-.1,a=(n.u0+n.u1)/2,l=(n.v0+n.v1)/2,o=[],c=!i[1],f=(g,m,y)=>({W:[n.x,m,g],E:[n.x,m,g],S:[g,m,n.z],N:[g,m,n.z],F:[g,n.y,m],C:[g,n.y,m]})[n.side].map((R,S)=>R-i[S]*y),p=(g,m,y)=>i[1]?[g,y,m]:i[0]?[y,m,g]:[g,m,y],d=(g,m,y,R,S,C,I,b,L,B,N)=>{const H=f(y,R,S),V=p(C,I,b),Q=C>=I;o.push({part:{id:`${n.id}.${g}`,prefab:n.id,fill:!0,kind:m,shape:N?"hull":"box",poly:N,h:V,p:H,yaw:0,mass:L,free:!1,mat:B},clips:[-1,1].map(q=>f(y+(Q?q*C*.8:0),R+(Q?0:q*I*.8),S-b*.9))})},h=n.depth;d("pad","pad",a,l,h-.035,s/2,r/2,.025,1.2,"pad");const u=(g,m,y,R,S,C,I,b)=>{const L=kf(C,S/2,8),B=I?i[1]?2:1:n.side==="W"||n.side==="E"?2:0,N=V=>B===1?V:B===0?[V[1],V[0],V[2],...V.slice(3)]:[V[0],V[2],V[1],...V.slice(3)],H={faces:L.faces.map(V=>({n:N(V.n),w:V.w,cut:!1,v:B===1?V.v:V.v.map(N).reverse()}))};d(g,"tube",m,y,R,I?C:S/2,I?S/2:C,C,2+S,b,H)};if(e)return o;const _=Math.min(.13,h-.1);return c?(u("tube0",a-s*.3,l,_,r,.04,!0,"copper"),t>.45&&u("tube1",a-s*.3+.13,l,_,r,.028,!0,"steel"),t<.35?d("jbox","jbox",a+s*.18,l+r*.1,_,Math.min(.13,s/4),Math.min(.16,r/4),.05,2.5,"yellow"):d("tray","tray",a+s*.2,l,_,.09,r/2,.025,2,"steelDark")):(d("tray","tray",a,l-r*.22,_,s/2,.08,.02,2,"steelDark"),u("tube0",a,l+r*.2,_,s,.04,!1,t>.5?"copper":"steel"),t<.3&&d("jbox","jbox",a+s*.22,l,Math.min(_+.02,h-.09),.1,.1,.04,2.5,"yellow")),o}const ns={mass:6,strength:.5,hit:3.4,seat:.4,shards:9,t:.004};function n_({S:n,C:e,room:t,phys:i,ev:s,mut:r,cutter:a}){if(n.screens=new Map,i.kind==="rapier")for(const h of e.screenBoxes||[])n.screens.set(h.id,{id:h.id,side:h.side,p:[(h.x0+h.x1)/2,(h.y0+h.y1)/2,(h.z0+h.z1)/2],broken:!1,v:[0,0,0],n:0});const l=h=>a.jointsOf(h).some(u=>u.kind==="mount"),o=h=>{const u=n.screens.get(h);return!u||l(h)&&!u.broken};function c(h){const u=i.half(h.id),_=[0,1,2].sort((N,H)=>u[N]-u[H]),g=_[0],m=_[2]===1?_[1]:_[2],y=m===1?_[1]:1,R=u[m]*.94,S=u[y]*.9,C=[R*.12,-S*.08],I=[],b={W:1,E:-1,S:1,N:-1}[h.side]||1,L=[],B=ns.shards;for(let N=0;N<B;N++){const H=(N+.35*Math.sin(N*7.3))/B*Math.PI*2,V=Math.min(R/Math.max(1e-6,Math.abs(Math.cos(H))),S/Math.max(1e-6,Math.abs(Math.sin(H))));L.push([Math.cos(H)*V,Math.sin(H)*V])}for(let N=0;N<B;N++){const H=L[N],V=L[(N+1)%B],Q=[C,H,V],q=(be,ge)=>{const Te=[0,0,0];return Te[m]=be[0],Te[y]=be[1],Te[g]=b*(u[g]+.004)+ge,Te},ne=[],he=be=>{const ge=be[1].map((Fe,Oe)=>Fe-be[0][Oe]),Te=be[2].map((Fe,Oe)=>Fe-be[0][Oe]),Be=[ge[1]*Te[2]-ge[2]*Te[1],ge[2]*Te[0]-ge[0]*Te[2],ge[0]*Te[1]-ge[1]*Te[0]],ye=Math.hypot(...Be)||1,Ne=Be.map(Fe=>Fe/ye);ne.push({n:Ne,w:Ne[0]*be[0][0]+Ne[1]*be[0][1]+Ne[2]*be[0][2],cut:!1,v:be.map(Fe=>[...Fe,0,0])})},re=Q.map(be=>q(be,-.004)),Pe=Q.map(be=>q(be,ns.t)),de=[...re,...Pe].reduce((be,ge)=>be.map((Te,Be)=>Te+ge[Be]/6),[0,0,0]);for(const be of[[...re],[...Pe],...[0,1,2].map(ge=>[re[ge],re[(ge+1)%3],Pe[(ge+1)%3],Pe[ge]])]){const ge=be.slice(),Te=ge[1].map((Fe,Oe)=>Fe-ge[0][Oe]),Be=ge[2].map((Fe,Oe)=>Fe-ge[0][Oe]),ye=[Te[1]*Be[2]-Te[2]*Be[1],Te[2]*Be[0]-Te[0]*Be[2],Te[0]*Be[1]-Te[1]*Be[0]],Ne=ge[0].map((Fe,Oe)=>Fe-de[Oe]);ye[0]*Ne[0]+ye[1]*Ne[1]+ye[2]*Ne[2]<0&&ge.reverse(),he(ge)}I.push({faces:ne})}return I}function f(h,u=[0,0,0]){const _=n.screens.get(h);if(!_||_.broken||r.has("noshatter"))return!1;_.broken=!0;const g=i.pose(h),m=a.addShards(h,c(_),g,u,`${h}.glass`);return s("shatter",{id:h,shards:m}),!0}function p(){for(const[h,u]of n.screens){if(!i.has(h))continue;const _=i.pose(h),g=Math.hypot(_.v[0]-u.v[0],_.v[1]-u.v[1],_.v[2]-u.v[2]),m=u.v;if(u.v=_.v.slice(),u.calm>0){u.calm--;continue}n.held!==h&&!l(h)&&g>ns.hit&&f(h,m)}}function d(h){const u=n.screens.get(h);if(!u||l(h))return!1;const _=i.pose(h);if(Math.hypot(..._.p.map((y,R)=>y-u.p[R]))>ns.seat)return!1;i.setPose(h,u.p,[0,0,0,1],!1);const g={id:`mount:${h}.${++u.n}`,prefab:h,a:h,b:"world",at:u.p.slice(),la:[0,0,0],strength:ns.strength,kind:"mount"};n.joints.set(g.id,g),i.joint(g.id,g.a,"world",g.at);const m={...g,id:`mount:${h}.h${u.n}`,kind:"hook"};return n.joints.set(m.id,m),i.joint(m.id,m.a,"world",m.at),s("monitor_seat",{id:h,works:!u.broken}),!0}return{mounted:l,on:o,shatter:f,step:p,seat:d,calm:h=>{const u=n.screens.get(h);u&&(u.calm=3)},snapshot:()=>[...n.screens].map(([h,u])=>[h,u.broken,u.n]),restore:h=>{for(const[u,_,g]of h||[]){const m=n.screens.get(u);m&&(m.broken=_,m.n=g)}}}}const ri=(n,e,t)=>(e[0]-n[0])*(t[1]-n[1])-(e[1]-n[1])*(t[0]-n[0]),ui=(n,e)=>Math.hypot(n[0]-e[0],n[1]-e[1]);function as(n,e){if(n.length<3)return n.slice();const t=n[0],i=n[n.length-1],s=ui(t,i);let r=0,a=0;for(let l=1;l<n.length-1;l++){const o=s<1e-6?ui(n[l],t):Math.abs(ri(t,i,n[l]))/s;o>r&&(r=o,a=l)}return r<=e?[t,i]:[...as(n.slice(0,a+1),e).slice(0,-1),...as(n.slice(a),e)]}function i_(n,e,t){let i=0,s=0;for(let r=1;r<n.length;r++){const a=ui(n[r],n[0]);a>s&&(s=a,i=r)}for(let r=e;;r*=1.35){const a=[...as(n.slice(0,i+1),r).slice(0,-1),...as([...n.slice(i),n[0]],r).slice(0,-1)];if(a.length<=t||r>1)return a}}const Bf=(n,e,t,i)=>{const s=[e[0]-n[0],e[1]-n[1]],r=[i[0]-t[0],i[1]-t[1]],a=s[0]*r[1]-s[1]*r[0];if(Math.abs(a)<1e-12)return null;const l=[t[0]-n[0],t[1]-n[1]],o=(l[0]*r[1]-l[1]*r[0])/a,c=(l[0]*s[1]-l[1]*s[0])/a;return o>1e-9&&o<1-1e-9&&c>1e-9&&c<1-1e-9?{t:o,u:c,p:[n[0]+s[0]*o,n[1]+s[1]*o]}:null},Jn=n=>{let e=0;for(let t=0;t<n.length;t++){const i=n[t],s=n[(t+1)%n.length];e+=i[0]*s[1]-i[1]*s[0]}return e/2},Hf=n=>{for(let e=0;e<n.length;e++)for(let t=e+2;t<n.length;t++)if(!(e===0&&t===n.length-1)&&Bf(n[e],n[(e+1)%n.length],n[t],n[(t+1)%n.length]))return!1;return!0},Vn={tol:.014,straight:.025,close:.08,minArea:.0036,minLen:.28,max:10,flat:.1};function s_(n){const e=n.length,t=n.slice(1).reduce((r,a,l)=>r+ui(a,n[l]),0);for(let r=0;r<e-1;r++)for(let a=r+2;a<e-1;a++){const l=Bf(n[r],n[r+1],n[a],n[a+1]);if(!l)continue;const o=[l.p,...n.slice(r+1,a+1)];if(Math.abs(Jn(o))>Vn.minArea)return vu(o)}if(t>Vn.minLen&&ui(n[0],n[e-1])<Math.max(.05,Math.min(Vn.close,t*.12))&&Math.abs(Jn(n))>Vn.minArea)return vu(n);let i=Vn.tol,s=as(n,i);if(as(n,Math.max(Vn.straight,t*.035)).length===2)return{kind:"line",pts:[n[0],n[e-1]]};for(;s.length>Vn.max;)i*=1.35,s=as(n,i);return{kind:"open",pts:s}}function vu(n){let e=i_(n,Vn.tol,Vn.max);if(e=e.filter((r,a)=>ui(r,e[(a+1)%e.length])>.02),e.length<3||Math.abs(Jn(e))<Vn.minArea||!Hf(e))return{kind:"bad",pts:e,why:"контур"};const t=Math.sqrt(Math.abs(Jn(n)/Jn(e))),i=e.reduce((r,a)=>[r[0]+a[0]/e.length,r[1]+a[1]/e.length],[0,0]),s=e.map(r=>[i[0]+(r[0]-i[0])*t,i[1]+(r[1]-i[1])*t]);return{kind:"loop",pts:Jn(s)<0?s.reverse():s}}function r_(n){const t=(d,h)=>{const u=ui(d,h)||1;return[(h[0]-d[0])/u,(h[1]-d[1])/u]},i=n.length,s=t(n[1],n[0]),r=t(n[i-2],n[i-1]),a=[[n[0][0]+s[0]*12,n[0][1]+s[1]*12],...n,[n[i-1][0]+r[0]*12,n[i-1][1]+r[1]*12]],l=a.slice(1).map(()=>!0);let o=Math.atan2(r[1],r[0]),c=Math.atan2(s[1],s[0]);for(;c<=o+1e-6;)c+=Math.PI*2;const f=n.reduce((d,h)=>[d[0]+h[0]/i,d[1]+h[1]/i],[0,0]),p=Math.max(1,Math.ceil((c-o)/.8));for(let d=1;d<p;d++){const h=o+(c-o)*d/p;a.push([f[0]+Math.cos(h)*12*1.4,f[1]+Math.sin(h)*12*1.4]),l.push(!1)}return l.push(!1),Hf(a)&&Jn(a)>0?{pts:a,real:l}:null}function o_(n,e){const t=n.length,i=[...Array(t).keys()],s=[],r=(o,c)=>c===(o+1)%t?e[o]:!1;let a=0;for(;i.length>3&&a++<400;){let o=-1,c=-1;for(let f=0;f<i.length;f++){const p=n[i[(f+i.length-1)%i.length]],d=n[i[f]],h=n[i[(f+1)%i.length]],u=ri(p,d,h);if(u<=1e-12||i.some(m=>{const y=n[m];return y!==p&&y!==d&&y!==h&&ri(p,d,y)>=-1e-12&&ri(d,h,y)>=-1e-12&&ri(h,p,y)>=-1e-12}))continue;const _=ui(p,d)+ui(d,h)+ui(h,p),g=u/(_*_);g>c&&(c=g,o=f)}if(o<0)return null;s.push([i[(o+i.length-1)%i.length],i[o],i[(o+1)%i.length]]),i.splice(o,1)}s.push(i.slice());let l=s;for(let o=!0;o;){o=!1;for(let c=0;c<l.length&&!o;c++)for(let f=c+1;f<l.length&&!o;f++)for(let p=0;p<l[c].length&&!o;p++){const d=l[c][p],h=l[c][(p+1)%l[c].length],u=l[f].findIndex((y,R)=>y===h&&l[f][(R+1)%l[f].length]===d);if(u<0)continue;const _=[...l[c].slice(p+1),...l[c].slice(0,p+1)],g=[...l[f].slice(u+1),...l[f].slice(0,u+1)],m=[..._.slice(0,-1),...g.slice(0,-1)];m.every((y,R)=>ri(n[y],n[m[(R+1)%m.length]],n[m[(R+2)%m.length]])>-1e-9)&&(l=l.filter((y,R)=>R!==c&&R!==f),l.push(m),o=!0)}}return l.map(o=>({pts:o.map(c=>n[c]),real:o.map((c,f)=>r(c,o[(f+1)%o.length]))}))}function Ml(n,e){const t=Cn(Math.abs(n[1])<.9?on([0,1,0],n):[1,0,0]),i=on(n,t);return{n,o:e,e:t,g:i,to2:s=>{const r=wt(s,e);return[at(r,t),at(r,i)]},to3:s=>[0,1,2].map(r=>e[r]+t[r]*s[0]+i[r]*s[1])}}function a_(n,e,t,i){const s=(o,c)=>{const f=Cn(wt(e.to3(c),e.to3(o))),p=on(f,e.n);return{n:p,w:at(p,e.to3(o))}},r=[];let a=n.slice();for(const o of t){const c=o.pts.map((p,d)=>({...s(p,o.pts[(d+1)%o.pts.length]),real:o.real[d]}));for(const p of n){let d=p;for(const h of c)if(d=Mr(d,h.n,h.w-(h.real?i/2:0),1,h.real),!d)break;d&&r.push(d)}const f=[];for(const p of a){let d=p;for(const h of c){const u=h.w+(h.real?i/2:0),_=Mr(d,h.n,u,-1,h.real);if(_&&f.push(_),d=Mr(d,h.n,u,1,h.real),!d)break}}a=f}const l=o=>o.filter(c=>Wi(c).volume>2e-7);return{inside:l(r),outside:l(a)}}function l_(n,e){for(const t of n.faces)for(const i of e.faces){if(at(t.n,i.n)>-.9999||Math.abs(t.w+i.w)>2e-4)continue;const s=Ml(t.n,t.v[0]);let r=t.v.map(l=>s.to2(l)),a=i.v.map(l=>s.to2(l));Jn(r)<0&&r.reverse(),Jn(a)<0&&a.reverse();for(let l=0;l<a.length&&r.length;l++){const o=a[l],c=a[(l+1)%a.length],f=[];for(let p=0;p<r.length;p++){const d=r[p],h=r[(p+1)%r.length],u=ri(o,c,d),_=ri(o,c,h);if(u>=0&&f.push(d),u>0&&_<0||u<0&&_>0){const g=u/(u-_);f.push([d[0]+(h[0]-d[0])*g,d[1]+(h[1]-d[1])*g])}}r=f}if(r.length>=3&&Math.abs(Jn(r))>2e-6)return!0}return!1}function ba(n){const e=n.map((i,s)=>s),t=[];for(;e.length;){const i=[e.shift()];for(let s=0;s<i.length;s++)for(let r=e.length-1;r>=0;r--)l_(n[i[s]],n[e[r]])&&i.push(...e.splice(r,1));t.push(i.map(s=>n[s]))}return t}function c_(n,e,t,i){const s=[];for(const r of n){const a=r.faces.find(f=>at(f.n,e.n)>.999&&Math.abs(f.w-at(e.n,e.o))<.01);if(!a)continue;let l=a.v.map(f=>e.to2(f));Jn(l)<0&&(l=l.reverse());let o=0,c=1;for(let f=0;f<l.length;f++){const p=l[f],d=l[(f+1)%l.length],h=ri(p,d,t),u=ri(p,d,i);if(h<0&&u<0){o=2;break}h<0?o=Math.max(o,h/(h-u)):u<0&&(c=Math.min(c,h/(h-u)))}if(c-o>1e-4){const f=p=>e.to3([t[0]+(i[0]-t[0])*p,t[1]+(i[1]-t[1])*p]);s.push([f(o),f(c)])}}return s}const Dt={cap:40,minSpan:.04,minVol:2e-5,kerf:.008,sweep:1.6,beam:.03,near:.1,need:.4,face:.4,deep:2.5,grace:.4,weld:.9,weldGap:.03,weldReach:.3,wallReach:.14,snap:.4,calm:20},bl=new Set(["top","leg","plank","sheet","crate","crateL","plate","leaf","side","pallet","rod","door","pad","tube","tray"]),u_={hinge:.075,rivet:.06,weld:.09,dowel:.065,seam:.045,rail:.1,clip:.06,mount:.07},Hi=(n,e)=>[n[0]+e[0],n[1]+e[1],n[2]+e[2]],ni=(n,e)=>[n[0]*e,n[1]*e,n[2]*e],li=n=>[-n[0],-n[1],-n[2],n[3]],sn=(n,e)=>Rt(li(n.q),wt(e,n.p)),Gt=(n,e)=>Hi(Rt(n.q,e),n.p),Gn=n=>+n.toFixed(5),Sl=n=>n.cells?{c:n.cells.map(Sl)}:n.faces.map(e=>[e.n.map(Gn),Gn(e.w),e.cut?1:0,e.v.map(t=>t.map(Gn))]),wl=n=>n.c?os(n.c.map(wl)):{faces:n.map(([e,t,i,s])=>({n:e,w:t,cut:!!i,v:s}))};function f_({S:n,C:e,phys:t,ev:i,mut:s,cap:r=Dt.cap,onSplit:a=()=>{},onMerge:l=()=>{},onBorn:o=()=>{},onWeld:c=()=>{}}){Object.assign(n,{pieces:new Map,merged:[],split:[],splitN:0,weldN:0,stroke:null,weld:null,beads:new Map});const f=t.kind==="rapier",p=new Map,d=w=>{const k=n.pieces.get(w);if(k)return k.poly;if(!p.has(w)){const K=t.half(w),X=e.parts.find(ce=>ce.id===w);p.set(w,X&&X.poly?X.poly:X&&X.shape==="cyl"?kf(K[0],K[1]):hu(K))}return p.get(w)},h=w=>n.pieces.get(w)||null,u=w=>f&&t.has(w)&&w!==n.held&&bl.has(n.partKind.get(w)),_=w=>w.la&&t.has(w.a)?Gt(t.pose(w.a),w.la):w.at,g=w=>[...n.joints.values()].filter(k=>k.a===w||k.b===w),m=w=>w.id.startsWith("weld:")?"seam":w.kind;function y(w){const k=n.beads.get(w.id);if(k&&t.has(k.a)){const K=t.pose(k.a);return k.pts.map(X=>Gt(K,X))}return[_(w)]}const R=(w,k)=>{let K=null,X=1;for(const ce of g(w)){if(ce.kind==="hook")continue;const xe=s.has("anyjoint")&&ce.kind==="hinge"?9:u_[m(ce)]||Dt.near;for(const me of y(ce)){const A=Ht(wt(me,k))/xe;A<X&&(X=A,K=ce)}}return K},S=(w,k)=>((!n.refused||n.t-n.refused.t>.8||n.refused.why!==k)&&i("cut_refused",{id:w,why:k}),n.refused={t:n.t,why:k,id:w},null);function C(w){let k=0,K=null;for(const X of w.faces)k+=X.len,(!K||X.len>K.len)&&(K=X);return K&&K.len>=k*.7?K:null}function I(w){let k=wt(w.p1,w.p0);Ht(k)<.02&&(k=w.right);const K=C(w),X=K?ni(K.n,-1):w.d,ce=on(k,X),xe=ni(Hi(w.p0,w.p1),.5),me=Ht(ce)>1e-4?Cn(ce):Cn(on(w.right,X)),A=Cn(wt(k,ni(X,at(k,X))));return{n:me,w:at(me,xe),e:A,d:X}}function b(w){const{n:k,w:K,e:X,d:ce}=I(w),xe=d(w.id),me=ya(xe,k,K,X);if(!me||me[1]-me[0]<1e-4)return{ok:!1,cover:0};const A=Math.min(at(X,w.p0),at(X,w.p1))-Dt.beam,T=Math.max(at(X,w.p0),at(X,w.p1))+Dt.beam,Z=me[1]-me[0],Me=pe=>Math.max(0,Math.min(1,(Math.min(T,pe[1])-Math.max(A,pe[0]))/(pe[1]-pe[0])));let ee=Me(me);if(ee>=Dt.face)for(const pe of w.ns){const ue=ya(xe,k,K,X,Le=>at(pe,Le.n)>.999);ue&&ue[1]-ue[0]>.02&&(ee=Math.max(ee,Me(ue)))}const ve=ya(xe,k,K,ce),we=!!ve&&ve[1]-ve[0]>Dt.deep*Z;return{ok:ee>=Dt.need&&!we,cover:we?0:ee}}function L(w){const k=d(w.id),K=Ei(k),X=()=>{const Ce=I(w),Re=b(w);return{kind:"line",ok:Re.ok&&w.t>.15,cover:Re.cover,n:Ce.n,w:Ce.w,why:"",draw:Gv(k,Ce.n,Ce.w).flatMap(Ge=>Ge.map((tt,ze)=>[tt,Ge[(ze+1)%Ge.length]]))}},ce=C(w);if(!ce||ce.pts.length<3||s.has("oneplane"))return X();const xe=Ml(ce.n,ce.pts[0]),me=ce.pts.map(xe.to2),A=s_(me);if(A.kind==="line")return X();const T=pu(k,xe.n),Z=T[1]-T[0],Me=Ce=>Ce.flatMap(([Re,Ge])=>c_(K,xe,Re,Ge));if(A.kind==="bad")return{kind:"bad",ok:!1,cover:.3,why:"контур",F:xe,draw:Me(me.slice(1).map((Ce,Re)=>[me[Re],Ce]))};if(A.kind==="loop"){const Ce=A.pts,Re=Ce.map((tt,ze)=>[tt,Ce[(ze+1)%Ce.length]]),Ge=Z<=Vn.flat||s.has("deephole");return{kind:"loop",ok:Ge&&w.t>.15,cover:1,why:Ge?"":"объёмная",F:xe,pts:Ce,real:Ce.map(()=>!0),draw:Me(Re)}}const ee=r_(A.pts),ve=A.pts,we=ve.length,pe=(Ce,Re)=>[Re[0]+(Re[0]-Ce[0])/(Math.hypot(Re[0]-Ce[0],Re[1]-Ce[1])||1)*6,Re[1]+(Re[1]-Ce[1])/(Math.hypot(Re[0]-Ce[0],Re[1]-Ce[1])||1)*6],ue=Me(ve.slice(1).map((Ce,Re)=>[ve[Re],Ce])),Le=Me([[ve[0],pe(ve[1],ve[0])],[ve[we-1],pe(ve[we-2],ve[we-1])]]),$=Ce=>Ce.reduce((Re,[Ge,tt])=>Re+Ht(wt(Ge,tt)),0),Ae=$(ue),oe=$(Le),Ue=Ae/(Ae+oe||1);return{kind:"open",ok:!!ee&&Ue>=Dt.need&&w.t>.15,cover:ee?Ue:.2,why:ee?"":"контур",F:xe,pts:ee&&ee.pts,real:ee&&ee.real,draw:[...ue,...Le]}}function B(w,k,K,X){const ce=t.pose(w.id),xe=sn(ce,w.at),me=sn(ce,k);let A=n.stroke;if(A&&A.id!==w.id&&n.firing&&t.has(A.id)){if(A.ok||A.faces.reduce((we,pe)=>we+pe.len,0)>.1)return A.seen=n.t,A.prog;n.stroke=A=null}A&&(A.id!==w.id||!n.firing&&n.t-A.seen>Dt.grace)&&(N(),A=null),A||(A=n.stroke={id:w.id,p0:xe,p1:xe,d:Rt(li(ce.q),K),right:Rt(li(ce.q),Cn(on(K,Math.abs(K[1])>.98?[1,0,0]:[0,1,0]))),t:0,cover:0,prog:0,path:[xe],ns:[],faces:[],ok:!1});let T=null;if(w.n){const we=Rt(li(ce.q),w.n),pe=at(we,xe);T=A.faces.find(ue=>at(ue.n,we)>.999&&Math.abs(ue.w-pe)<.01),T||(T={n:we,w:pe,len:0,pts:[]},A.faces.push(T)),A.ns.some(ue=>at(ue,we)>.999)||A.ns.push(we)}A.t+=X,A.seen=n.t;const Z=wt(xe,A.p1),Me=Ht(Z),ee=A.p1;if(Me>1e-5&&(A.p1=Hi(A.p1,ni(Z,Math.min(1,Dt.sweep*X/Me)))),T){T.len+=Ht(wt(A.p1,ee))+1e-6;const we=Hi(A.p1,ni(T.n,T.w-at(T.n,A.p1))),pe=T.pts[T.pts.length-1];(!pe||Ht(wt(we,pe))>.012)&&(T.pts.push(we),T.pts.length>400&&T.pts.shift())}Ht(wt(A.p1,A.path[A.path.length-1]))>.012&&A.path.length<400&&(A.path.push(A.p1),A.plan=null),A.d=Cn(wt(ni(Hi(A.p0,A.p1),.5),me));const ve=A.plan&&A.path.length>2&&A.t>.4?A.plan:A.plan=L(A);return A.ok=ve.ok,A.cover=ve.cover,A.why=ve.why,A.kind=ve.kind,A.prog=Math.min(1,ve.cover/Dt.need,A.t/.15),A.path.length<=2&&(A.plan=null),s.has("autocut")&&A.ok&&A.cover>.9&&N(),A.prog}function N(){const w=n.stroke;if(n.stroke=null,!w||!t.has(w.id))return;const k=L(w);if(!k.ok){k.why&&S(w.id,k.why),i("cut_short",{id:w.id,cover:+k.cover.toFixed(2)});return}k.kind==="line"?Q(w.id,k.n,k.w):q(w.id,k.F,k.pts,k.real,k.kind)}function H(){const w=n.stroke;if(!w||!t.has(w.id)||s.has("nopreview"))return null;const k=L(w);return{id:w.id,ok:k.ok,kind:k.kind,n:k.n,w:k.w,plan:k.draw,F:k.F,pts:k.pts}}function V(){n.stroke&&(!t.has(n.stroke.id)||!n.firing&&n.t-n.stroke.seen>.05)&&N(),n.weld&&n.t-n.weld.seen>Dt.grace&&(n.weld=null)}function Q(w,k,K){if(!u(w))return null;const X=Bv(d(w),k,K,Dt.kerf);if(!X)return S(w,"мелко");if(!s.has("nomin"))for(const me of X){const A=pu(me,Cn(k));if(Wi(me).volume<Dt.minVol||A[1]-A[0]<Dt.minSpan)return S(w,"мелко")}const ce=Cn(k),xe=X.flatMap((me,A)=>(me.cells?ba(me.cells).map(os):[me]).map(T=>({poly:T,side:A})));return he(w,xe,me=>at(ce,me)-K<=0?0:1)}function q(w,k,K,X,ce){if(!u(w))return null;const xe=o_(K,X);if(!xe)return S(w,"контур");const me=Ei(d(w)),A=a_(me,k,xe,Dt.kerf);if(!A.inside.length||!A.outside.length)return S(w,"мелко");const T=[...ba(A.outside).map(ve=>({poly:os(ve),side:0})),...ba(A.inside).map(ve=>({poly:os(ve),side:1}))],Z=T.filter(ve=>Wi(ve.poly).volume<Dt.minVol),Me=T.filter(ve=>!Z.includes(ve));if(Me.length<2||!Me.some(ve=>ve.side)||!Me.some(ve=>!ve.side))return S(w,"мелко");const ee=he(w,Me,null,ce);if(ee&&ce==="loop")for(let ve=0;ve<ee.length;ve++)Me[ve].side&&!g(ee[ve]).length&&t.velocity(ee[ve],ni(Rt(t.pose(ee[ve]).q,k.n),.9));return ee}const ne=()=>[...n.pieces.values()].reduce((w,k)=>w+Ei(k.poly).length,0);function he(w,k,K,X="line"){const ce=n.pieces.get(w),xe=ce?Ei(ce.poly).length:0,me=k.reduce((oe,Ue)=>oe+Ei(Ue.poly).length,0)-xe;if(!s.has("nocap")){for(;ne()+me>r&&be(w););if(ne()+me>r)return S(w,"много кусков")}if(n.carry&&n.carry.has(w))return S(w,"в руках");const A=k.map(oe=>Wi(oe.poly)),T=A.reduce((oe,Ue)=>oe+Ue.volume,0),Z=t.pose(w),Me=t.mass(w)||1,ee=n.partSm.get(w)??.3,ve=n.partKind.get(w),we=ce||{root:w,mat:(e.parts.find(oe=>oe.id===w)||{}).mat||"steel",prefab:(e.parts.find(oe=>oe.id===w)||{}).prefab||""},pe=g(w).map(oe=>({j:oe,l:sn(Z,_(oe)),at:_(oe)}));for(const{j:oe}of pe)t.unjoint(oe.id);t.remove(w),ce?n.pieces.delete(w):n.split.push(w),n.partKind.delete(w),n.partSm.delete(w),p.delete(w);for(const oe of n.pieces.values())oe.mate&&oe.mate.id===w&&(oe.mate=null);const ue=k.map((oe,Ue)=>{const Ce=A[Ue].center,Re=`${we.root}#${++n.splitN}`,Ge=xl(oe.poly,Ce),tt=Gt(Z,Ce),ze=A[Ue].volume/T,je={id:Re,root:we.root,prefab:we.prefab,mat:we.mat,kind:ve,poly:Ge,born:n.t,mass:Me*ze,sm:Math.max(.05,ee*ze),mate:null};return re(je,tt,Z.q),n.pieces.set(Re,je),{id:Re,p:tt,c:Ce,side:oe.side,poly:oe.poly}}),Le=ue.find(oe=>oe.side===0),$=ue.find(oe=>oe.side===1);if(Le&&$)for(const[oe,Ue]of[[Le,$],[$,Le]])n.pieces.get(oe.id).mate={id:Ue.id,p:wt(oe.c,Ue.c),q:[0,0,0,1]};const Ae=oe=>{const Ue=K?ue.filter(Re=>Re.side===K(oe)):ue,Ce=Re=>Ff(oe,Re.poly);return Ue.reduce((Re,Ge)=>Ce(Ge)<Ce(Re)?Ge:Re,Ue[0]||ue[0])};for(const{j:oe,l:Ue,at:Ce}of pe){if(s.has("noreassign")){n.joints.delete(oe.id),n.beads.delete(oe.id);continue}const Re=Ae(Ue),Ge={...oe,a:oe.a===w?Re.id:oe.a,b:oe.b===w?Re.id:oe.b,at:Ce};Ge.la=sn(t.pose(Ge.a),Ce),n.joints.set(oe.id,Ge),t.joint(oe.id,Ge.a,Ge.b,Ce,m(Ge)!=="seam");const tt=n.beads.get(oe.id);tt&&tt.a===w&&(tt.pts=tt.pts.map(ze=>sn(t.pose(Re.id),Gt(Z,ze))),tt.a=Re.id)}for(const oe of ue)g(oe.id).length||o(oe.id),t.velocity(oe.id,Z.v);return a(w,Ae,Z,ue.map(oe=>oe.id)),i("split",{id:w,into:ue.map(oe=>oe.id),how:X,pieces:n.pieces.size,cells:ne()}),ue.map(oe=>oe.id)}function re(w,k,K){t.addPart({id:w.id,shape:"hull",poly:w.poly,h:Hv(w.poly),p:k,q:K,mass:w.mass},{}),t.release(w.id),n.partKind.set(w.id,w.kind),n.partSm.set(w.id,w.sm)}function Pe(w,k,K,X,ce){let xe=0;for(const me of k){for(;ne()+1>r&&be(""););if(ne()+1>r)break;const A=Wi(me),T=A.center,Z=`${ce}#${++n.splitN}`,Me={id:Z,root:ce,prefab:w,mat:"glass",kind:"shard",poly:xl(me,T),born:n.t,mass:.06,sm:.05,mate:null};re(Me,Gt(K,T),K.q),n.pieces.set(Z,Me);const ee=Rt(K.q,T),ve=Ht(ee)||1;t.velocity(Z,[0,1,2].map(we=>X[we]*.25+ee[we]/ve*.7+(we===1?.5:0))),xe++}return xe}const de=(w,k)=>w!==n.held&&!g(w).length&&n.t-n.pieces.get(w).born>=k&&t.pose(w).sleep&&t.restsOnStatic(w);function be(w,k=0){for(const K of[...n.pieces.values()].sort((X,ce)=>X.born-ce.born))if(K.id!==w&&de(K.id,k))return ge(K.id),!0;return!1}function ge(w){const k=n.pieces.get(w),K=t.pose(w);t.freeze(w),n.pieces.delete(w),n.partKind.delete(w),n.partSm.delete(w);for(const X of n.pieces.values())X.mate&&X.mate.id===w&&(X.mate=null);n.merged.push({id:w,root:k.root,mat:k.mat,poly:k.poly,p:K.p,q:K.q,prefab:k.prefab,kind:k.kind,mass:k.mass,sm:k.sm}),l(w,K),i("merged",{id:w,pieces:n.pieces.size,merged:n.merged.length})}function Te(w){const k=n.merged.findIndex(ce=>ce.id===w);if(k<0||s.has("nothaw"))return!1;for(;ne()+1>r&&be(w););const K=n.merged.splice(k,1)[0];t.thaw(w);const X={id:w,root:K.root,prefab:K.prefab||"",mat:K.mat,kind:K.kind||"crate",poly:K.poly,born:n.t,mass:K.mass||Math.max(.1,Wi(K.poly).volume*300),sm:K.sm??.3,mate:null};return re(X,K.p,K.q),n.pieces.set(w,X),i("thawed",{id:w}),!0}let Be=0;function ye(){n.t<Be||(Be=n.t+1,ne()>r*.75&&be("",Dt.calm))}function Ne(w,k,K,X,ce){if(w.cells||K.cells){let A={gap:9,at:ce};for(const T of Ei(w))for(const Z of Ei(K)){const Me=Ne(T,k,Z,X,ce);(Me.gap<A.gap-1e-4||Me.gap<Dt.weldGap&&Ht(wt(Me.at,ce))<Ht(wt(A.at,ce)))&&(A=Me)}return A}let xe=ce,me=ce;for(let A=0;A<24;A++){me=Gt(X,vl(K,sn(X,xe)));const T=Gt(k,vl(w,sn(k,me))),Z=Ht(wt(T,xe));if(xe=T,A&&Z<1e-5)break}return{gap:Ht(wt(xe,me)),at:ni(Hi(xe,me),.5)}}const Fe=[0,0,0,1],Oe=new Map,ke=w=>(Oe.has(w.id)||Oe.set(w.id,{poly:hu([(w.x1-w.x0)/2,(w.y1-w.y0)/2,(w.z1-w.z0)/2]),s:{p:[(w.x0+w.x1)/2,(w.y0+w.y1)/2,(w.z0+w.z1)/2],q:Fe}}),Oe.get(w.id)),Ke=w=>w.kind!=="glass"&&w.kind!=="door"&&w.kind!=="note",pt=w=>w[1]<.06&&e.hatches.some(k=>w[0]>k.x0-.05&&w[0]<k.x1+.05&&w[2]>k.z0-.05&&w[2]<k.z1+.05),He=(w,k)=>s.has("weldall")?"":w.kind==="glass"?"окно":w.kind==="door"?"дверь":w.kind==="floor"&&pt(k)?"люк":"",Je=(w,k,K)=>w.x0>k.x1+K||k.x0>w.x1+K||w.y0>k.y1+K||k.y0>w.y1+K||w.z0>k.z1+K||k.z0>w.z1+K;function nt(w,k){const K=[],X=d(w),ce=t.pose(w),xe=t.aabb(w),me=Dt.weldGap,A=(T,Z,Me,ee=null)=>{const ve=Ne(X,ce,Z,Me,k);ve.gap<=me&&K.push({with:T,at:ve.at,gap:ve.gap,d:Ht(wt(ve.at,k)),box:ee,no:ee?He(ee,ve.at):""})};for(const T of t.bodies())T!==w&&!Je(xe,t.aabb(T),me)&&A(T,d(T),t.pose(T));for(const T of e.statics)if(T.kind!=="note"&&!(T.kind==="glass"&&(n.windows.get(T.id)||{}).broken)&&!Je(xe,T,me)){const Z=ke(T);A("world",Z.poly,Z.s,T)}for(const T of n.merged)Je(xe,Qe(T),me)||A("world",T.poly,T);return K.sort((T,Z)=>T.d-Z.d)}const Qe=w=>{if(!w.bb){const k={x0:1e9,x1:-1e9,y0:1e9,y1:-1e9,z0:1e9,z1:-1e9};for(const K of w.poly.faces)for(const X of K.v){const ce=Gt(w,X);k.x0=Math.min(k.x0,ce[0]),k.x1=Math.max(k.x1,ce[0]),k.y0=Math.min(k.y0,ce[1]),k.y1=Math.max(k.y1,ce[1]),k.z0=Math.min(k.z0,ce[2]),k.z1=Math.max(k.z1,ce[2])}w.bb=k}return w.bb},vt=w=>f&&t.has(w)&&n.partKind.get(w)!=="shard"&&(!s.has("weldkind")||bl.has(n.partKind.get(w))),ot=(w,k)=>[w,k].sort().join("|"),bt=(w,k,K)=>[...n.joints.values()].find(X=>ot(X.a,X.b)===ot(w,k)&&(k!=="world"||Math.min(...y(X).concat([_(X)]).map(ce=>Ht(wt(ce,K))))<.15))||null;function st(w){if(s.has("weldnone"))return{why:"не варится"};if(n.held&&!n.drag&&f&&t.has(n.held)){const A=t.pose(n.held).p,T=n.ray,Z=T?Math.max(0,at(wt(A,T.o),T.d)):0,Me=T?Hi(T.o,ni(T.d,Z)):A,ee=ue=>T?Ht(wt(ue.at,Hi(T.o,ni(T.d,Math.max(0,at(wt(ue.at,T.o),T.d)))))):ue.d,ve=nt(n.held,Me).filter(ue=>!n.carry.has(ue.with)).sort((ue,Le)=>ee(ue)-ee(Le)),we=ve.filter(ue=>!ue.no);if(!ve.length)return{why:"прижми"};if(!we.length)return{why:ve[0].no};const pe=we[0];return{id:n.held,with:pe.with,at:pe.at,box:pe.box,why:""}}if(!w)return{why:""};if((w.kind==="bolt"||w.kind==="plate")&&w.box&&!w.seated&&(w={...w,kind:"static"}),w.kind==="bolt"||w.kind==="cable"||w.kind==="plate"&&!w.seated)return{why:"не тот режим"};if(w.kind==="hatch")return{why:"люк"};if(!f||w.kind==="note"||w.kind==="plate")return{why:"не варится"};let k=w.kind==="part"?w.id:null,K=null;if(w.kind==="static"){if(w.box&&!Ke(w.box))return{why:w.box.kind==="glass"?"окно":w.box.kind==="door"?"дверь":"не варится"};for(const A of t.bodies()){const T=t.aabb(A);if(Je(T,{x0:w.at[0],x1:w.at[0],y0:w.at[1],y1:w.at[1],z0:w.at[2],z1:w.at[2]},Dt.wallReach))continue;const Z=nt(A,w.at).filter(Me=>Me.with==="world"&&Me.d<Dt.wallReach);Z.length&&(!K||Z[0].d<K[0].d)&&(K=Z,k=A)}if(!k)return{why:"нет касания"}}else K=nt(k,w.at);if(!vt(k))return{why:"не варится"};if(s.has("weldthin")&&(K=K.filter(A=>A.d<.04)),!K.length)return{why:"нет касания"};const X=K.filter(A=>A.d<=(A.with==="world"?Dt.wallReach:Dt.weldReach)),ce=X.filter(A=>!A.no);if(!ce.length&&(X.length||K.length&&K.every(A=>A.no)))return{why:(X[0]||K[0]).no};if(K=K.filter(A=>!A.no),!ce.length)return{why:K.length&&K.some(A=>A.with!=="world")||K.length&&K[0].d<.6?"далеко от стыка":"нет касания"};const xe=ce.filter(A=>!bt(k,A.with,A.at)),me=xe.find(A=>A.with!=="world"&&vt(A.with))||xe[0];if(!me){const A=bt(k,ce[0].with,ce[0].at);return{id:k,with:ce[0].with,done:!0,why:m(A)==="seam"?"сварено":"держится"}}return{id:k,with:me.with,at:me.at,box:me.box,why:""}}function zt(w,k){const K=st(w);if(K.why)return K;const X=ot(K.id,K.with);let ce=n.weld;(!ce||ce.key!==X||n.t-ce.seen>Dt.grace)&&(ce=n.weld={key:X,a:K.id,b:K.with,prog:0,path:[]}),ce.seen=n.t,ce.prog+=k/Dt.weld,ce.at=K.at;const xe=t.pose(ce.a),me=sn(xe,w.kind==="part"&&w.id===ce.a?w.at:K.at);if((!ce.path.length||Ht(wt(me,ce.path[ce.path.length-1]))>.012)&&ce.path.length<32&&ce.path.push(me),ce.prog<1)return{prog:ce.prog,with:K.with};n.weld=null,c(ce.a,ce.b);const A=`weld:${++n.weldN}`,T=t.pose(ce.a),Z={id:A,prefab:"",a:ce.a,b:ce.b,at:ce.at,la:sn(T,ce.at),strength:.9,kind:"seam"};return n.joints.set(A,Z),n.beads.set(A,{a:ce.a,pts:ce.path}),s.has("weldfake")||t.joint(A,Z.a,Z.b,Z.at,!1),i("weld",{id:A,a:Z.a,b:Z.b}),{prog:1,with:K.with,id:A}}function Ie(w){const k=new Set([w]),K=[w],X={ids:[],mass:0,world:0,bolts:0,seams:0,piece:!1,js:new Set};for(;K.length;){const ce=K.pop();X.ids.push(ce),X.mass+=t.mass(ce)||0,X.piece=X.piece||n.pieces.has(ce);for(const xe of g(ce)){X.js.add(xe);for(const me of[xe.a,xe.b])me!=="world"&&!k.has(me)&&(k.add(me),K.push(me))}}for(const ce of X.js)ce.b==="world"&&X.world++,m(ce)==="seam"?X.seams++:X.bolts++;return X}function De(w){const k=n.pieces.get(w),K=k&&k.mate;if(!K||!t.has(K.id)||g(w).length)return null;const X=t.pose(K.id),ce=t.pose(w),xe=Gt(X,K.p),me=$n(X.q,K.q);return Ht(wt(xe,ce.p))>Dt.snap||Math.min(...k.poly.faces.flatMap(T=>T.v.map(Z=>Gt({p:xe,q:me},Z)[1])))<-.03?null:{p:xe,q:me}}const $e=()=>({split:n.split.slice(),splitN:n.splitN,weldN:n.weldN,pieces:[...n.pieces.values()].map(w=>({id:w.id,root:w.root,prefab:w.prefab,mat:w.mat,kind:w.kind,mass:Gn(w.mass),sm:Gn(w.sm),mate:w.mate,poly:Sl(w.poly)})),merged:n.merged.map(w=>({id:w.id,root:w.root,mat:w.mat,prefab:w.prefab,kind:w.kind,mass:Gn(w.mass||0),sm:Gn(w.sm||.3),p:w.p.map(Gn),q:w.q.map(Gn),poly:Sl(w.poly)})),joints:[...n.joints.values()].filter(w=>w.id.startsWith("weld:")||w.id.startsWith("mount:")||n.pieces.has(w.a)||n.pieces.has(w.b)).map(w=>({id:w.id,prefab:w.prefab,a:w.a,b:w.b,la:w.la.map(Gn),strength:w.strength,kind:w.kind})),beads:[...n.beads].map(([w,k])=>[w,k.a,k.pts.map(K=>K.map(Gn))])});function Ze(w){if(w){for(const k of w.joints)n.joints.has(k.id)&&(t.unjoint(k.id),n.joints.delete(k.id));for(const k of w.split){for(const K of g(k))t.unjoint(K.id),n.joints.delete(K.id);t.has(k)&&t.remove(k),n.partKind.delete(k),n.partSm.delete(k)}n.split=w.split.slice(),n.splitN=w.splitN,n.weldN=w.weldN;for(const k of w.pieces){const K={...k,poly:wl(k.poly),born:0};re(K,[0,5,0],[0,0,0,1]),n.pieces.set(K.id,K)}for(const k of w.merged){const K={...k,poly:wl(k.poly)};t.addFrozen(K),n.merged.push(K)}}}function D(w){if(w){for(const k of w.joints){if(!t.has(k.a)||k.b!=="world"&&!t.has(k.b))continue;const K=Gt(t.pose(k.a),k.la);n.joints.set(k.id,{...k,at:K}),t.joint(k.id,k.a,k.b,K,m(k)!=="seam")}for(const[k,K,X]of w.beads)n.joints.has(k)&&n.beads.set(k,{a:K,pts:X})}}return{can:f,cap:r,polyOf:d,pieceOf:h,canSplit:u,canWeld:vt,worldAt:_,jointsOf:g,jointKind:m,spots:y,nearJoint:R,stroke:B,finish:N,preview:H,plan:L,addShards:Pe,refreshStatics:()=>Oe.clear(),idle:V,splitPart:Q,cutContour:q,cellCount:ne,holeAt:(w,k,K,X)=>q(w,Ml(k,K),X,X.map(()=>!0),"loop"),merge:ge,mergeOldest:be,thaw:Te,calm:ye,weld:zt,weldInfo:st,assembly:Ie,snapPose:De,snapshot:$e,restoreBodies:Ze,restoreJoints:D}}const d_=[.105,.15,.006],h_=.005,p_={"+x":[1,0,0],"-x":[-1,0,0],"+z":[0,0,1],"-z":[0,0,-1]};function _u(n,e=[0,1,0]){const t=e[0]*n[0]+e[1]*n[1]+e[2]*n[2];let i=[e[0]-n[0]*t,e[1]-n[1]*t,e[2]-n[2]*t];const s=Math.hypot(...i)||1;i=i.map(c=>c/s);const a=[[i[1]*n[2]-i[2]*n[1],i[2]*n[0]-i[0]*n[2],i[0]*n[1]-i[1]*n[0]],i,n],l=a[0][0]+a[1][1]+a[2][2];let o;if(l>0){const c=Math.sqrt(l+1)*2;o=[(a[1][2]-a[2][1])/c,(a[2][0]-a[0][2])/c,(a[0][1]-a[1][0])/c,c/4]}else if(a[0][0]>a[1][1]&&a[0][0]>a[2][2]){const c=Math.sqrt(1+a[0][0]-a[1][1]-a[2][2])*2;o=[c/4,(a[1][0]+a[0][1])/c,(a[2][0]+a[0][2])/c,(a[1][2]-a[2][1])/c]}else if(a[1][1]>a[2][2]){const c=Math.sqrt(1+a[1][1]-a[0][0]-a[2][2])*2;o=[(a[1][0]+a[0][1])/c,c/4,(a[2][1]+a[1][2])/c,(a[2][0]-a[0][2])/c]}else{const c=Math.sqrt(1+a[2][2]-a[0][0]-a[1][1])*2;o=[(a[2][0]+a[0][2])/c,(a[2][1]+a[1][2])/c,c/4,(a[0][1]-a[1][0])/c]}return o}function m_({S:n,C:e,phys:t,ev:i,mut:s}){n.notes=new Map,n.noteHeld=null;for(const f of e.statics)if(f.kind==="note"){const p=p_[es[e.prefabOf[f.prefab].wall]],d=[(f.x0+f.x1)/2,(f.y0+f.y1)/2,(f.z0+f.z1)/2];n.notes.set(f.prefab,{id:f.prefab,on:"world",p:[d[0]+p[0]*.009,d[1],d[2]+p[2]*.009],q:_u(p)})}function r(f){const p=n.notes.get(f);if(!p||n.noteHeld===f)return null;if(p.on==="world")return{p:p.p,q:p.q};const d=t.pose(p.on);return d?{p:Gt(d,p.p),q:$n(d.q,p.q)}:null}function a(f){return!n.notes.has(f)||n.noteHeld?!1:(n.noteHeld=f,i("note_take",{id:f}),!0)}function l(f,p){const d=n.noteHeld;if(!d||!f||!f.at||!f.n||s.has("noteloose"))return!1;const h=Math.abs(f.n[1])>.8?[p[0],0,p[2]]:[0,1,0],u=[0,1,2].map(y=>f.at[y]+f.n[y]*h_),_=_u(f.n,h),g=f.kind==="part"?f.id:null,m=g&&t.pose(g);return n.notes.set(d,m?{id:d,on:g,p:sn(m,u),q:$n(li(m.q),_)}:{id:d,on:"world",p:u,q:_}),n.noteHeld=null,i("note_stick",{id:d,on:g||f.kind+":"+f.id}),!0}function o(f,p,d){for(const h of n.notes.values())if(h.on===f){const u=Gt(d,h.p),_=$n(d.q,h.q),g=p(h.p),m=t.pose(g.id);Object.assign(h,{on:g.id,p:sn(m,u),q:$n(li(m.q),_)})}}function c(f,p){for(const d of n.notes.values())d.on===f&&Object.assign(d,{on:"world",p:Gt(p,d.p),q:$n(p.q,d.q)})}return{pose:r,take:a,stick:l,split:o,toFixed:c,ids:()=>[...n.notes.keys()],snapshot:()=>[...n.notes.values()].map(f=>({id:f.id,on:f.on,p:f.p.slice(),q:f.q.slice()})),restore(f){for(const p of f||[])n.notes.set(p.id,{...p})}}}const lr={crateL:1.9,pallet:1.7,crate:.65,tank:.25,leg:.1,top:.6,leaf:.3,plate:.15,debris:.1,plank:.45,sheet:.4,side:.45,door:1.5,monitor:.35,pad:.1,tube:.2,tray:.2,jbox:.25,shard:.05},St={reach:2.3,cutRange:2.6,blast:14,cover:.15,pull:40,eject:.45,legKick:1.6,pullMin:3,hatchBurn:.7,light:.3,push:2.4,cableCut:.6,doorTime:.6,cabTime:.45,cabAngle:1.85,body:80,seam:320,arm:.5,impact:5,life:.05,strain:.75,lift:18,drag:1.5,dragForce:700,dragFar:2.4,aimCone:.026},g_={safe:2.6,perM:22,stun:.35,stunMax:2.5,regen:12,wait:5},x_=.05,yu=Math.PI/2,Ds=(n,e)=>Math.hypot(n[0]-e[0],n[1]-e[1],n[2]-e[2]),Mu=n=>[0,Math.sin(n/2),0,Math.cos(n/2)];function bu(n,e,t,i,s){const r=[-i[0],-i[1],-i[2],i[3]],a=Rt(r,[n[0]-t[0],n[1]-t[1],n[2]-t[2]]),l=Rt(r,e);let o=0,c=1e9;for(let f=0;f<3;f++){if(Math.abs(l[f])<1e-9){if(a[f]<-s[f]||a[f]>s[f])return null;continue}let p=(-s[f]-a[f])/l[f],d=(s[f]-a[f])/l[f];if(p>d&&([p,d]=[d,p]),o=Math.max(o,p),c=Math.min(c,d),o>c)return null}return o>1e-4?o:null}function Su(n,e){const t=[],i=(f,p,d,h,u,_)=>{p-f>1e-4&&h-d>1e-4&&_-u>1e-4&&t.push({...n,x0:f,x1:p,y0:d,y1:h,z0:u,z1:_})},s=Math.max(n.x0,e.x0),r=Math.min(n.x1,e.x1),a=Math.max(n.y0,e.y0),l=Math.min(n.y1,e.y1),o=Math.max(n.z0,e.z0),c=Math.min(n.z1,e.z1);return s>=r||a>=l||o>=c?[n]:(i(n.x0,s,n.y0,n.y1,n.z0,n.z1),i(r,n.x1,n.y0,n.y1,n.z0,n.z1),i(s,r,n.y0,n.y1,n.z0,o),i(s,r,n.y0,n.y1,c,n.z1),i(s,r,n.y0,a,o,c),i(s,r,l,n.y1,o,c),t)}const Sa=(n,e,t,i)=>{const s=[n[0]-t[0],n[1]-t[1],n[2]-t[2]],r=s[0]*e[0]+s[1]*e[1]+s[2]*e[2],a=s[0]**2+s[1]**2+s[2]**2-i*i;if(a>0&&r>0)return null;const l=r*r-a;if(l<0)return null;const o=-r-Math.sqrt(l);return o>0?o:.001};function v_(n,e,t,{log:i=()=>{},mut:s=new Set,pieces:r=0,seam:a=0,fall:l=null}={}){const o={t:0,joints:new Map,cutProg:new Map,held:null,heldAt:0,opens:new Map,doors:new Map,windows:new Map,tanks:new Map,cablesCut:new Set,breakers:new Map,p:1,kicks:[],removed:[],burned:[],carry:new Set,drag:!1,slide:new Map,anchored:new Set,sparks:[],strain:null,hp:100,hurtT:9,stun:0,peak:null,exit:!1,leaf:new Map,hatchOpen:new Map,plates:new Map,events:[],evN:0,deaths:0,flash:0,ejected:[],partKind:new Map,partSm:new Map},c=(v,E={})=>{const Y={t:+o.t.toFixed(2),kind:v,...E};return o.events.push(Y),o.evN++,o.events.length>400&&o.events.shift(),i(Y),Y};if(t.kind==="rapier"&&!n.doorBodies){n.doorBodies=!0;for(const v of n.doors)if(v.kind==="slide"){const E=v.box,Y=[(E.x1-E.x0)/2,(E.y1-E.y0)/2,(E.z1-E.z0)/2].map((M,O)=>M-(O===1?.006:.004)),j=[(E.x0+E.x1)/2,(E.y0+E.y1)/2,(E.z0+E.z1)/2];n.parts.push({id:E.id,prefab:v.id,kind:"door",shape:"box",h:Y,p:j,yaw:0,mass:40,free:!1,mat:"steelDark"});for(const[M,O]of[-1,1].entries())n.joints.push({id:`${v.id}.rail${M}`,prefab:v.id,a:E.id,b:"world",at:v.along==="z"?[j[0],E.y1-.06,j[2]+O*(Y[2]-.08)]:[j[0]+O*(Y[0]-.08),E.y1-.06,j[2]],strength:1.2,kind:"rail"})}n.statics=n.statics.filter(v=>!(v.kind==="door"&&n.doors.some(E=>E.id===v.door&&E.kind==="slide"))),n.screenBoxes=n.statics.filter(v=>v.kind==="screen").map(v=>({...v,side:(n.prefabOf[v.prefab]||{}).wall}));for(const v of n.screenBoxes){const E=[(v.x1-v.x0)/2,(v.y1-v.y0)/2,(v.z1-v.z0)/2],Y=[(v.x0+v.x1)/2,(v.y0+v.y1)/2,(v.z0+v.z1)/2],j=v.side==="W"||v.side==="E",M=j?2:0,O=v.side==="W"||v.side==="S"?-1:1;n.parts.push({id:v.id,prefab:v.prefab,kind:"monitor",shape:"box",h:E,p:Y,yaw:0,mass:ns.mass,free:!1,mat:"steelDark",side:v.side});for(const[F,[P,W]]of[[-1,-1],[1,-1],[1,1],[-1,1]].entries()){const x=Y.slice();x[M]+=P*(E[M]-.05),x[1]+=W*(E[1]-.05),x[j?0:2]-=O*E[j?0:2],n.joints.push({id:`${v.id}.mt${F}`,prefab:v.prefab,a:v.id,b:"world",at:x,strength:ns.strength,kind:"mount"})}n.joints.push({id:`${v.id}.hook`,prefab:v.prefab,a:v.id,b:"world",at:Y.slice(),strength:.5,kind:"hook"})}n.statics=n.statics.filter(v=>v.kind!=="screen"),n.base=n.statics.slice()}const f=t.kind==="rapier"?e_(n):[],p=new Map(f.map(v=>[v.id,v]));n.tiles=f,n.openNiches=[];for(const v of n.statics)v.kind!=="note"&&t.addStatic(v);for(const v of n.parts)t.addPart(v,{fixed:!v.free}),o.partKind.set(v.id,v.kind),o.partSm.set(v.id,lr[v.kind]??.3);for(const v of n.joints)t.joint(v.id,v.a,v.b,v.at),o.joints.set(v.id,{...v,la:t.has(v.a)?sn(t.pose(v.a),v.at):null});const d=m_({S:o,C:n,phys:t,ev:c,mut:s}),h=f_({S:o,C:n,phys:t,ev:c,mut:s,cap:r||e.budget&&e.budget.pieces||Dt.cap,onSplit:(v,E,Y,j)=>{d.split(v,E,Y),o.plates.has(v)&&o.plates.delete(v),_(v,j),m(v,j)},onMerge:(v,E)=>d.toFixed(v,E),onBorn:v=>u.eject([v],"рождение"),onWeld:(v,E)=>{o.held&&(o.carry.has(v)||o.carry.has(E))&&qt()}}),u=jv({S:o,C:n,phys:t,mut:s,ev:c});for(const v of n.parts)v.hinge&&o.leaf.set(v.id,{cab:v.prefab,hinge:v.hinge,p:v.p.slice(),q:[0,0,0,1],h:v.h});function _(v,E){const Y=o.leaf.get(v);if(!Y)return;o.leaf.delete(v);const j=S(Y.hinge,(o.opens.get(Y.cab)||{}).open||0),M=li(j);for(const O of E){const F=t.pose(O),P=Rt(M,[0,1,2].map(W=>F.p[W]-Y.hinge.at[W]));o.leaf.set(O,{cab:Y.cab,hinge:Y.hinge,p:P.map((W,x)=>W+Y.hinge.at[x]),q:$n(M,F.q),h:t.half(O)})}}for(const v of n.doors){const E=n.parts.find(Y=>Y.prefab===v.id&&Y.kind==="door");E&&o.slide.set(E.id,{door:v.id,along:v.along,len:v.along==="z"?v.box.z1-v.box.z0:v.box.x1-v.box.x0,p:E.p.slice(),q:[0,0,0,1]})}const g=(v,E)=>{const Y=E*(v.len-.1);return[v.p[0]+(v.along==="x"?Y:0),v.p[1],v.p[2]+(v.along==="z"?Y:0)]};function m(v,E){const Y=o.slide.get(v);if(!Y)return;o.slide.delete(v);const j=o.doors.get(Y.door),M=j.open*(Y.len-.1);j.cut=!0;for(const O of E){const F=t.pose(O);o.slide.set(O,{...Y,p:[F.p[0]-(Y.along==="x"?M:0),F.p[1],F.p[2]-(Y.along==="z"?M:0)],q:F.q.slice()})}}const y=v=>o.slide.has(v)&&h.jointsOf(v).some(E=>E.kind==="rail"),R=v=>v?v.kind==="static"&&o.doors.has(v.id)?v.id:v.kind==="part"&&y(v.id)?o.slide.get(v.id).door:"":"",S=(v,E)=>Mu(E*St.cabAngle*(v.side===0?-1:1)*v.sg*(v.along==="x"?1:-1)),C=v=>o.leaf.has(v)&&h.jointsOf(v).some(E=>E.kind==="hinge"),I=v=>h.jointsOf(v).some(E=>E.kind!=="hinge"),b=v=>{const E=o.leaf.get(v);if(E)return C(v)?E.cab:"";const Y=(n.parts.find(j=>j.id===v)||o.pieces.get(v)||{}).prefab;return o.opens.has(Y)&&h.jointsOf(v).some(j=>j.kind==="dowel")?Y:""};for(const v of n.opens)o.opens.set(v.id,{...v,open:0,want:0});for(const v of n.doors)o.doors.set(v.id,{...v,open:0,want:0});for(const v of n.windows)o.windows.set(v.id,{...v,hp:v.strength,broken:!1});for(const v of n.parts)v.tank&&o.tanks.set(v.id,{id:v.id,...v.tank,heat:0,gone:!1});for(const[v,E]of Object.entries(n.nodes))E.kind==="breaker"&&o.breakers.set(v,E.on!==!1);const L=new Set(e.trap?Pv(e.trap,n.hatches).danger:[]),B=Yv({panels:[...n.panels,...f]}),N=new Map([...n.panels,...f].map(v=>[v.id,v])),H=(v,E)=>v.tile?Mo(v,E):pl(v,E),V=v=>v.tile?No(v):Fo(v),Q=n_({S:o,C:n,room:e,phys:t,ev:c,mut:s,cutter:h});o.openTiles=[],o.filled=new Set,o.hulls=new Map;function q(){if(t.kind!=="rapier")return;const v=[...o.openTiles.map(F=>No(p.get(F))),...[...o.hulls.values()].map(F=>F.through)],E=F=>["floor","ceil","wall"].includes(F.kind)?v.reduce((P,W)=>P.flatMap(x=>Su(x,W)),[F]):[F],Y=n.base.flatMap(F=>{const P=E(F);return P.length===1&&P[0]===F?[F]:P.map((W,x)=>({...W,id:`${F.id}~${x}`,of:F.id}))}),j=F=>`${F.id}:${F.x0},${F.x1},${F.y0},${F.y1},${F.z0},${F.z1}`,M=new Map(n.statics.map(F=>[F.id,j(F)])),O=new Map(Y.map(F=>[F.id,j(F)]));for(const[F,P]of M)O.get(F)!==P&&n.statics.find(W=>W.id===F).kind!=="note"&&t.removeStatic(F);for(const F of Y)M.get(F.id)!==O.get(F.id)&&F.kind!=="note"&&t.addStatic(F);n.statics=Y,n.openNiches=v,T.key=null,u.refresh(),h.refreshStatics(),o.carveN=(o.carveN||0)+1}function ne(v){const E=p.get(v);!E||E.hull||(o.openTiles.includes(v)||o.openTiles.push(v),o.filled.has(v)||(o.filled.add(v),re(E)),q())}function he(v){const E=o.openTiles.indexOf(v);E>=0&&(o.openTiles.splice(E,1),q())}function re(v){const E=v.side==="F"&&n.cables.some(Y=>Y.pts.some((j,M)=>M&&!(Math.max(j[0],Y.pts[M-1][0])<v.u0||Math.min(j[0],Y.pts[M-1][0])>v.u1||Math.max(j[2],Y.pts[M-1][2])<v.v0||Math.min(j[2],Y.pts[M-1][2])>v.v1)));if(!s.has("nofill"))for(const{part:Y,clips:j}of t_(v,E))n.parts.push(Y),t.addPart(Y,{fixed:!0}),o.partKind.set(Y.id,Y.kind),o.partSm.set(Y.id,lr[Y.kind]??.2),j.forEach((M,O)=>{const F={id:`${Y.id}.c${O}`,prefab:v.id,a:Y.id,b:"world",at:M,strength:.35,kind:"clip"};F.la=sn(t.pose(Y.id),M),n.joints.push(F),o.joints.set(F.id,F),t.joint(F.id,F.a,"world",M)})}function Pe(v){const E=p.get(v);if(!E||o.hulls.has(v))return;B.take(v);const Y=E.tileOf,j=ss(E,-.4,.02),M={...j},O=Fs(E);o.hulls.set(v,{id:v,through:M});const F=E.side==="W"||E.side==="E"?"x":"z",P=ss(E,-.06,-.02);o.windows.set(v,{id:v,side:E.side,a0:E.u0,a1:E.u1,y0:E.v0,y1:E.v1,strength:9,hp:0,broken:!0,hull:!0,at:[E.x,(E.v0+E.v1)/2,E.z],box:P}),q();const W="plate:"+v,x=bo({...E}),U=[E.x-O[0]*.3,E.y,E.z-O[2]*.3];t.addPart({id:W,kind:"plate",shape:"box",h:x,p:U,q:[0,0,0,1],mass:8},{}),o.partKind.set(W,"plate"),o.partSm.set(W,lr.plate),o.plates.set(W,v),t.release(W),t.velocity(W,O.map(z=>-z*6)),o.flash=Math.max(o.flash,.25),c("hull_off",{id:v,face:F,tile:Y})}function de(v){const E=v.side==="W"||v.side==="E"?2:0,Y=E===2?0:2,j={W:0,E:n.size[0],S:0,N:n.size[2]}[v.side],M=v.side==="W"||v.side==="S"?1:-1,O=6;let F=0;const P=t.bodies().filter(W=>o.anchored.has(W)&&h.jointsOf(W).some(x=>h.jointKind(x)==="seam")).map(W=>({s:t.pose(W),P:h.polyOf(W),bb:t.aabb(W)}));for(let W=0;W<O;W++)for(let x=0;x<O;x++){const U=v.a0+(v.a1-v.a0)*(W+.5)/O,z=v.y0+(v.y1-v.y0)*(x+.5)/O,G=[0,z,0];G[E]=U,G[Y]=j+M*.6;const te=[0,0,0];te[Y]=-M,P.some(J=>pr(sn(J.s,G),Rt(li(J.s.q),te),J.P,1.1))&&F++}return F/(O*O)}let be=0;function ge(){if(!(o.t<be)){be=o.t+.25;for(const v of o.windows.values())if(v.broken){const E=s.has("noseal")?0:de(v);v.cover=E;const Y=E>=.9;Y!==!!v.sealed&&(v.sealed=Y,c(Y?"sealed":"unsealed",{id:v.id,cover:+E.toFixed(2)}))}}}const Te=(v,E)=>{const Y=t.half(v),j=Y.map(F=>2*F).sort((F,P)=>P-F),M=Math.max(E.a1-E.a0,E.y1-E.y0),O=Math.min(E.a1-E.a0,E.y1-E.y0);return j[1]<M&&j[2]<O&&!(j[1]>O&&j[0]>M)},Be=n.size[0]*n.size[1]*n.size[2];function ye(){const v=new Map;for(const[j,M]of n.edges)o.cablesCut.has(j)||o.cablesCut.has(M)||(v.set(j,[...v.get(j)||[],M]),v.set(M,[...v.get(M)||[],j]));const E=new Set,Y=[...o.breakers].filter(([,j])=>j).map(([j])=>j);for(;Y.length;){const j=Y.shift();if(!E.has(j)){E.add(j);for(const M of v.get(j)||[])!E.has(M)&&!o.breakers.has(M)&&Y.push(M)}}return E}let Ne=ye();const Fe=new Set(n.edges.flat()),Oe=v=>!Fe.has(v)||Ne.has(v),ke=()=>{const v=Ne;Ne=ye();for(const E of Fe)v.has(E)!==Ne.has(E)&&!o.breakers.has(E)&&c(Ne.has(E)?"power_on":"power_off",{id:E})},Ke=v=>[...o.joints.values()].some(E=>E.a===v||E.b===v);function pt(v,E="резак"){const Y=o.joints.get(v);if(!Y)return!1;o.joints.delete(v),o.beads.delete(v),t.unjoint(v),c("joint_cut",{id:v,prefab:Y.prefab,why:E});const j=M=>[...o.joints.values()].filter(O=>O.a===M||O.b===M).length;for(const M of[Y.a,Y.b]){if(M==="world"||!t.has(M))continue;const O=o.partKind.get(M),F=O==="top"?3:1;if(j(M)<F&&!(t.kind==="rapier"&&h.assembly(M).world)){t.release(M);const P=t.pose(M),W=t.mass(M)||1;if(P&&O==="leg"&&Y.kind==="weld"){const x=n.parts.find(ae=>ae.id===Y.a)||{},U=x.p||P.p,z=P.p[0]-U[0],G=P.p[2]-U[2],te=Math.hypot(z,G)||1,J=t.half(M)[1];o.kicks.push({id:M,v:[z/te*W*St.legKick,0,G/te*W*St.legKick],at:[P.p[0],P.p[1]-J*.9,P.p[2]]})}P&&O==="leaf"&&o.kicks.push({id:M,v:[(Math.random()-.5)*W*.4,0,(Math.random()-.5)*W*.4],at:P.p}),c("part_free",{id:M})}}return!0}let He="";function Je(v=!1){if(t.kind!=="rapier")return;const E=`${o.joints.size}:${o.weldN}:${o.splitN}:${o.removed.length}:${o.held}`;if(E===He&&!v)return;He=E;for(const M of[...o.joints.values()])(!t.has(M.a)||M.b!=="world"&&!t.has(M.b))&&(o.joints.delete(M.id),o.beads.delete(M.id));const Y=new Set,j=new Set;for(const M of o.joints.values())if(!Y.has(M.a)){const O=h.assembly(M.a);for(const F of O.ids)Y.add(F),O.world&&!o.carry.has(F)&&j.add(F)}for(const M of j)t.anchor(M,!0);for(const M of o.anchored)!j.has(M)&&t.has(M)&&t.anchor(M,!1);o.anchored=j}function nt(v){if(!v||!v.ground)return null;let E=null,Y=.05;for(const j of o.extra||[])j.id&&t.has(j.id)&&v.x>j.x0-.23&&v.x<j.x1+.23&&v.z>j.z0-.23&&v.z<j.z1+.23&&Math.abs(j.y1-v.y)<Y&&(Y=Math.abs(j.y1-v.y),E=j.id);return E}function Qe(v){const E=t.aabb(v),Y=[];if(E)for(const j of t.bodies()){if(j===v)continue;const M=t.aabb(j);M&&Math.abs(M.y1-E.y0)<.035&&E.x0<M.x1&&E.x1>M.x0&&E.z0<M.z1&&E.z1>M.z0&&Y.push(j)}return Y}function vt(v,E=0){const Y=new Map,j=(O,F,P)=>{Y.has(O)||Y.set(O,[]),Y.get(O).push({m:F,at:P})},M=nt(v);if(M){let O=St.body;for(const P of o.carry)o.drag||(O+=t.mass(P)||0);let F=M;for(let P=0;P<6&&F&&!o.anchored.has(F);P++)F=Qe(F)[0];F&&j(F,O*(1+E/St.impact),[v.x,v.y,v.z])}for(const O of t.bodies()){if(o.anchored.has(O)||o.carry.has(O))continue;let F=O;for(let P=0;P<6&&F&&!o.anchored.has(F);P++)F=Qe(F)[0];F&&j(F,t.mass(O)||0,t.pose(O).p)}return Y}const ot=a||e.budget&&e.budget.seam||St.seam;function bt(v,E=0){const Y=vt(v,E),j=[],M=new Set;for(const O of o.anchored){if(M.has(O))continue;const F=h.assembly(O);for(const x of F.ids)M.add(x);const P=[...F.js].filter(x=>h.jointKind(x)==="seam"),W=[...F.js].filter(x=>x.b==="world").length;for(const x of P){let U=F.ids,z=1;if(x.b==="world")z=1/W;else{const ae=le=>{const ie=new Set([le]),Se=[le];let Ve=!1;for(;Se.length;){const Ee=Se.pop();for(const Ye of F.js)if(!(Ye===x||Ye.a!==Ee&&Ye.b!==Ee)){if(Ye.b==="world"){Ve=!0;continue}for(const qe of[Ye.a,Ye.b])ie.has(qe)||(ie.add(qe),Se.push(qe))}}return{ids:[...ie],w:Ve}},fe=ae(x.a),_e=ae(x.b);if(fe.w===_e.w)continue;U=fe.w?_e.ids:fe.ids}const G=h.worldAt(x);let te=0;const J=(ae,fe)=>{te+=ae*(1+Math.hypot(fe[0]-G[0],fe[2]-G[2])/St.arm)};for(const ae of U){J(t.mass(ae)||0,t.pose(ae).p);for(const fe of Y.get(ae)||[])J(fe.m,fe.at)}j.push({j:x,at:G,load:te*z,k:te*z/ot})}}return j}let st=0;function zt(v,E=0){if(!o.beads.size){o.strain=null;return}if(!(o.t<st&&!E)){st=o.t+.2,o.strain=null;for(const Y of bt(v,E))Y.k>1&&!s.has("strongseam")?(Ie(Y.at,34),pt(Y.j.id,"перегруз"),c("seam_broke",{id:Y.j.id,load:Math.round(Y.load),cap:ot,at:Y.at.map(j=>+j.toFixed(2))}),o.flash=Math.max(o.flash,.12),Je(!0)):Y.k>St.strain&&(Ie(Y.at,3),(!o.strain||Y.k>o.strain.k)&&(o.strain={k:Y.k,id:Y.j.id,t:o.t}))}}const Ie=(v,E)=>{o.sparks.push({at:v.slice(),n:E,t:o.t,seed:o.sparkN=(o.sparkN||0)+1}),o.sparks.length>6&&o.sparks.shift()},De={...g_,...n.fall||{},...l||{}};function $e(v,E){if(!E||E.ground===void 0)return;if(o.stun=Math.max(0,o.stun-v),o.hurtT+=v,o.hurtT>De.wait&&o.hp<100&&(o.hp=Math.min(100,o.hp+De.regen*v)),!E.ground){o.peak=o.peak===null?E.y:Math.max(o.peak,E.y);return}if(o.peak===null)return;const Y=o.peak-E.y,j=nt(E);if(o.peak=null,Y<.05)return;o.anchored.size&&zt(E,Math.sqrt(28*Y));const M=Y-De.safe;if(M<=0||s.has("nofall"))return;const O=Math.round(M*De.perM);o.hp=Math.max(0,o.hp-O),o.hurtT=0,o.stun=Math.min(De.stunMax,M*De.stun+.3),o.hurt=1,c("fall",{h:+Y.toFixed(2),dmg:O,hp:Math.round(o.hp),on:j||"пол"}),o.hp<=0&&(o.deaths++,o.hp=100,o.stun=0,o.held&&hi(),c("death",{cause:"fall",h:+Y.toFixed(2)}),E.respawn&&E.respawn())}function Ze(v){if(!o.held||s.has("rideheld"))return;const E=nt(v);if(!E||o.anchored.has(E))return;const Y=new Set([E]),j=[E];for(;j.length;){const M=j.pop();if(o.carry.has(M)){qt(),c("ride_off",{id:M});return}for(const O of Qe(M))!Y.has(O)&&!o.anchored.has(O)&&(Y.add(O),j.push(O))}}function D(){if(o.drag)return{speed:.42,jump:.35};if(!o.held)return{speed:1,jump:1};let v=0;for(const E of o.carry)v+=t.mass(E)||0;return{speed:Math.max(.35,1-.45*(o.partSm.get(o.held)??.3)),jump:Math.max(.45,1-v/45)}}function w(v){if(!o.held||o.drag)return!1;o.turn=((o.turn??-1)+1)%3;const E=t.half(o.held),Y=[0,1,2].sort((J,ae)=>E[ae]-E[J]),j=Math.abs(Math.sin(v.yaw))>Math.abs(Math.cos(v.yaw))?[-Math.sign(Math.sin(v.yaw)),0,0]:[0,0,-Math.sign(Math.cos(v.yaw))],M=[0,1,0],O=[j[1]*M[2]-j[2]*M[1],j[2]*M[0]-j[0]*M[2],j[0]*M[1]-j[1]*M[0]],F=o.turn===0?[j,O,M]:o.turn===1?[O,j,M]:[M,O,j],P=[];Y.forEach((J,ae)=>{P[J]=F[ae]}),P[0][0]*(P[1][1]*P[2][2]-P[1][2]*P[2][1])-P[0][1]*(P[1][0]*P[2][2]-P[1][2]*P[2][0])+P[0][2]*(P[1][0]*P[2][1]-P[1][1]*P[2][0])<0&&(P[Y[2]]=P[Y[2]].map(J=>-J));const x=(J,ae)=>P[ae][J],U=x(0,0)+x(1,1)+x(2,2);let z;if(U>0){const J=Math.sqrt(U+1)*2;z=[(x(2,1)-x(1,2))/J,(x(0,2)-x(2,0))/J,(x(1,0)-x(0,1))/J,J/4]}else if(x(0,0)>x(1,1)&&x(0,0)>x(2,2)){const J=Math.sqrt(1+x(0,0)-x(1,1)-x(2,2))*2;z=[J/4,(x(0,1)+x(1,0))/J,(x(0,2)+x(2,0))/J,(x(2,1)-x(1,2))/J]}else if(x(1,1)>x(2,2)){const J=Math.sqrt(1+x(1,1)-x(0,0)-x(2,2))*2;z=[(x(0,1)+x(1,0))/J,J/4,(x(1,2)+x(2,1))/J,(x(0,2)-x(2,0))/J]}else{const J=Math.sqrt(1+x(2,2)-x(0,0)-x(1,1))*2;z=[(x(0,2)+x(2,0))/J,(x(1,2)+x(2,1))/J,J/4,(x(1,0)-x(0,1))/J]}const G=t.pose(o.held),te=$n(z,li(G.q));for(const J of o.carry){const ae=t.pose(J),fe=Rt(te,[0,1,2].map(_e=>ae.p[_e]-G.p[_e]));t.setPose(J,J===o.held?G.p:[0,1,2].map(_e=>G.p[_e]+fe[_e]),J===o.held?z:$n(te,ae.q),!1),J===o.held&&t.moveKinematic(J,G.p,z)}return c("turn",{id:o.held,mode:o.turn}),!0}const k=()=>n.statics.filter(v=>v.kind!=="glass"&&v.kind!=="note"&&!(v.kind==="door"&&(o.doors.get(v.door)||{}).open>.5));function K(v,E){const Y=[E[0]-v[0],E[1]-v[1],E[2]-v[2]],j=Math.hypot(...Y);if(j<.001)return!1;const M=Y.map(F=>F/j);return!!Ls(v,M,k(),j-.05)}function X(v){const E=o.tanks.get(v);if(!E||E.gone)return;const Y=t.pose(v),j=Y?Y.p:[0,0,0];E.gone=!0,E.at=j.slice(),(o.held===v||o.carry.has(v))&&qt(),t.remove(v),o.removed.push(v);const M=St.blast*E.charge,O=[];for(const F of t.bodies()){const P=t.pose(F);if(!P)continue;const W=Ds(P.p,j),x=K(j,P.p)?St.cover:1,U=M/(1+W*W)*x;if(W>E.radius||U<.2)continue;const z=W>.001?[(P.p[0]-j[0])/W,(P.p[1]-j[1])/W+.3,(P.p[2]-j[2])/W]:[0,1,0];Ke(F)||t.release(F),t.impulse(F,z.map(G=>G*U*(t.mass(F)||1))),O.push(F)}for(const[F,P]of[...o.joints]){const W=h.worldAt(P),x=Ds(W,j);M/(1+x*x)*(K(j,W)?St.cover:1)>=P.strength*va.blastK&&pt(F,"взрыв")}for(const F of o.windows.values()){if(F.broken)continue;const P=Ds(F.at,j);M/(1+P*P)*(K(j,F.at)?St.cover:1)>=F.strength*va.blastK*.8&&ce(F.id,"взрыв")}o.flash=1,o.blast={at:j,K:M,t:o.t},c("explode",{id:v,at:j.map(F=>+F.toFixed(2)),hit:O.length})}function ce(v,E){const Y=o.windows.get(v);!Y||Y.broken||(Y.broken=!0,Y.hp=0,t.setStatic(v,!1),c("window_broken",{id:v,why:E}))}function xe(v){const E=o.doors.get(v);return E?E.kind==="sealed"?(c("door_sealed",{id:v}),!1):Oe(v)?(E.want=E.want?0:1,c(E.want?"door_open":"door_close",{id:v}),!0):(c("door_dead",{id:v}),!1):!1}function me(v){const E=o.opens.get(v);return E?([...o.leaf].some(([Y,j])=>j.cab===v&&C(Y)&&I(Y))&&c("cab_welded",{id:v}),E.want=E.want?0:1,c(E.want?"cab_open":"cab_close",{id:v}),!0):!1}function A(v){return o.breakers.has(v)?(o.breakers.set(v,!o.breakers.get(v)),c("breaker",{id:v,on:o.breakers.get(v)}),ke(),!0):!1}let T={key:null,boxes:null};function Z(){const v=n.panels.filter(M=>B.view(M.id).plate!=="on").map(M=>M.id),E=v.join(",")+"|"+(o.carveN||0);if(T.key===E)return T.boxes;const Y=v.map(M=>V(N.get(M)));let j=n.statics;return Y.length&&(j=n.statics.flatMap(M=>M.kind==="floor"||M.kind==="ceil"||M.kind==="wall"?Y.reduce((O,F)=>O.flatMap(P=>Su(P,F)),[M]):[M])),T={key:E,boxes:j},j}const Me=new Map;for(const v of f)if(!v.hull)for(let E=v.u0+.25;E<v.u1;E+=.5)for(let Y=v.v0+.25;Y<v.v1;Y+=.5)Me.set(`${v.side}:${Math.floor(E/.5)}:${Math.floor(Y/.5)}`,v);function ee(v,E,Y){const j=v.box.kind;if(!f.length||!["wall","floor","ceil"].includes(j))return v;const M=[0,1,2].map(G=>E[G]+Y[G]*v.t),O=j==="wall"?v.box.side:j==="floor"?"F":"C",[F,P]=O==="W"||O==="E"?[M[2],M[1]]:"SN".includes(O)?[M[0],M[1]]:[M[0],M[2]],W={W:M[0],E:n.size[0]-M[0],S:M[2],N:n.size[2]-M[2],F:M[1],C:n.size[1]-M[1]}[O];if(Math.abs(W)>.02)return{...v,box:{...v.box,kind:"truss"},id:"truss"};if("WESN".includes(O)&&n.portals.find(te=>te.side===O&&F>te.a0-.13&&F<te.a1+.13&&P>te.y0-.02&&P<te.y1+.13))return{...v,box:{...v.box,kind:"gate"},id:"gate"};const x=Me.get(`${O}:${Math.floor(F/.5)}:${Math.floor(P/.5)}`);if(!x)return{...v,box:{...v.box,kind:"truss"},id:"truss",shell:j};const U=B.view(x.id);if(U.seated)return{kind:"plate",id:x.id,t:v.t,n:v.n,seated:!0,box:v.box};if(U.plate!=="on")return v;const z=[0,1,2,3].find(G=>!U.bolts[G]&&Ds(Mo(x,G),M)<zn.bolt);return z!==void 0?{kind:"bolt",id:x.id,i:z,t:v.t,n:v.n,box:v.box}:{kind:"plate",id:x.id,t:v.t,n:v.n,box:v.box}}function ve(v,E,Y=St.cutRange){const j=[],M=Ls(v,E,Z().filter(F=>F.kind!=="note").filter(F=>F.kind!=="glass"||!(o.windows.get(F.id)||{}).broken).filter(F=>!(F.kind==="door"&&(o.doors.get(F.door)||{}).open>.5)),Y);M&&j.push(ee({kind:"static",id:M.box.prefab||M.box.of||M.box.id,box:M.box,t:M.t,n:M.n},v,E));for(const F of o.openTiles){const P=p.get(F+".hull");if(!P)continue;const W=B.view(P.id);if(W.plate!=="on")continue;const x=Ls(v,E,[ss(P,-.01,.012)],Y);if(!x)continue;const U=[0,1,2].map(G=>v[G]+E[G]*x.t),z=[0,1,2,3].find(G=>!W.bolts[G]&&Ds(Mo(P,G),U)<zn.bolt);j.push(z!==void 0?{kind:"bolt",id:P.id,i:z,t:x.t-.001,n:Fs(P)}:{kind:"plate",id:P.id,t:x.t-.001,n:Fs(P)})}for(const F of t.bodies()){if(F===o.held||o.carry.has(F))continue;const P=t.pose(F),W=t.poly(F);if(!W&&bu(v,E,P.p,P.q,t.half(F))===null)continue;const x=pr(sn(P,v),Rt([-P.q[0],-P.q[1],-P.q[2],P.q[3]],E),W||h.polyOf(F),Y);x&&j.push({kind:"part",id:F,t:x.t,n:Rt(P.q,x.n),cut:x.cut})}for(const F of o.merged){const P=pr(sn(F,v),Rt([-F.q[0],-F.q[1],-F.q[2],F.q[3]],E),F.poly,Y);P&&j.push({kind:"static",id:F.id,box:{kind:"scrap"},t:P.t,n:Rt(F.q,P.n)})}for(const F of d.ids()){const P=d.pose(F);if(!P)continue;const W=bu(v,E,P.p,P.q,d_);W!==null&&W<Y&&j.push({kind:"note",id:F,t:W-.004})}for(const F of n.panels){const P=B.view(F.id);if(P.plate==="on"&&!P.seated){for(let U=0;U<4;U++)if(!P.bolts[U]){const z=Sa(v,E,pl(F,U),.06);z!==null&&z<Y&&j.push({kind:"bolt",id:F.id,i:U,t:z-.02})}const W=ou(F),x=Ls(v,E,[W],Y);x&&j.push({kind:"plate",id:F.id,t:x.t,n:x.n})}else if(P.seated){const W=Ls(v,E,[ou(F)],Y);W&&j.push({kind:"plate",id:F.id,t:W.t,seated:!0})}else for(const W of Le(F.id)){const x=Sa(v,E,W.at,.1);x!==null&&x<Y&&j.push({kind:"cable",id:W.id,panel:F.id,at:W.at,t:x})}}for(const F of o.openTiles)if(p.get(F).side==="F")for(const P of Le(F)){const W=Sa(v,E,P.at,.1);W!==null&&W<Y&&j.push({kind:"cable",id:P.id,panel:F,at:P.at,t:W})}for(const F of n.hatches){const P=s.has("nohatch")?0:x_,W={x0:F.x0-P,x1:F.x1+P,y0:-.02,y1:.012,z0:F.z0-P,z1:F.z1+P},x=Ls(v,E,[W],Y);x&&j.push({kind:"hatch",id:F.id,t:x.t,number:F.number,n:[0,1,0]})}j.sort((F,P)=>F.t-P.t);const O=j[0]||null;return O&&(O.at=O.at||[v[0]+E[0]*O.t,v[1]+E[1]*O.t,v[2]+E[2]*O.t]),O}function we(v,E){const Y=[-v[2],0,v[0]],j=Math.hypot(...Y)||1,M=Math.hypot(...Y)<1e-6?[1,0,0]:Y.map(F=>F/j),O=[M[1]*v[2]-M[2]*v[1],M[2]*v[0]-M[0]*v[2],M[0]*v[1]-M[1]*v[0]];return[...Array(8).keys()].map(F=>{const P=F*yu/2,W=[0,1,2].map(U=>v[U]+E*(Math.cos(P)*M[U]+Math.sin(P)*O[U])),x=Math.hypot(...W);return W.map(U=>U/x)})}function pe(v,E,Y=St.cutRange){o.ray={o:v,d:E};const j=ve(v,E,Y);if(j&&j.kind!=="static"&&!((j.kind==="plate"||j.kind==="bolt")&&j.box)||s.has("seethrough"))return j;let M=null;for(const O of we(E,.012)){const F=ve(v,O,Y);F&&F.kind==="part"&&F.t<(j?j.t:99)-.05&&(!M||F.t<M.t)&&(M=F)}return M||j}function ue(v,E,Y=St.reach){const j=ve(v,E,Y);if(o.held||o.noteHeld||Ce(j)||s.has("noaid"))return j;const M=t.bodies().filter(F=>o.pieces.has(F)&&Ct(F)&&Math.min(...t.half(F))<.08&&Ds(t.pose(F).p,v)<Y+.5);let O=null;if(M.length)for(const F of we(E,St.aimCone))for(const P of M){const W=t.pose(P),x=pr(sn(W,v),Rt(li(W.q),F),h.polyOf(P),Y);x&&(!O||x.t<O.t)&&!(j&&j.t<x.t-.15)&&(O={kind:"part",id:P,t:x.t,n:Rt(W.q,x.n),at:v.map((U,z)=>U+F[z]*x.t)})}return O||j}function Le(v){const E=N.get(v),Y=[];if(!E||E.face!=="+y")return Y;const j=V(E);for(const M of n.cables)if(!o.cablesCut.has(M.id))for(let O=1;O<M.pts.length;O++){const F=M.pts[O-1],P=M.pts[O],W=Math.min(F[0],P[0])-1e-6,x=Math.max(F[0],P[0])+1e-6,U=Math.min(F[2],P[2])-1e-6,z=Math.max(F[2],P[2])+1e-6;if(x<j.x0||W>j.x1||z<j.z0||U>j.z1)continue;const G=Math.max(j.x0+.05,Math.min(j.x1-.05,E.x)),te=Math.max(j.z0+.05,Math.min(j.z1-.05,E.z));Y.push({id:M.id,at:[F[0]===P[0]?F[0]:G,-.16,F[2]===P[2]?F[2]:te]});break}return Y}const $=v=>{const E=p.get(v);E&&E.hull&&B.loose(v)&&Pe(v)};function Ae(v,E,Y=null,j="cut"){if(j==="weld"&&!(v&&v.kind==="plate"&&v.seated))return v?h.weld(v,E).why?"":"сварка":"";if(!v)return"";if(v=Ge(v),v.kind==="bolt"){const M=B.cut(v.id,v.i,E);return M!==null&&M>=1&&(c("bolt_cut",{id:v.id,i:v.i}),$(v.id)),"болт"}if(v.kind==="plate"){const M=B.view(v.id);if(M.seated)return B.weld(v.id,E)>=1&&(c("panel_weld",{id:v.id}),he(v.id)),"шов";const O=M.bolts.findIndex(F=>!F);return O>=0&&B.cut(v.id,O,E)>=1&&(c("bolt_cut",{id:v.id,i:O}),$(v.id)),"болт"}if(v.kind==="cable"){const M="cable:"+v.id,O=(o.cutProg.get(M)||0)+E;return o.cutProg.set(M,O),O>=St.cableCut&&(o.cablesCut.add(v.id),o.cableCutAt=o.cableCutAt||{},o.cableCutAt[v.id]=v.at,c("cable_cut",{id:v.id,under:v.panel}),ke()),"кабель"}if(v.kind==="static"){const M=o.windows.get(v.id);return M&&!M.broken?(M.hp-=E,M.hp<=0&&ce(M.id,"резак"),"стекло"):""}if(v.kind==="part"){const M=o.tanks.get(v.id);if(M)return M.heat+=E,M.heat>=M.fuse&&X(M.id),"баллон";if(o.t-(o.cutT??-9)>.12&&(o.cutLock=null),o.cutT=o.t,o.cutLock&&o.cutLock.has(v.id)&&!s.has("nolock"))return"крепление";const O=o.evN,F=()=>{for(const z of o.events.slice(-(o.evN-O)||o.events.length))if(z.kind==="split"||z.kind==="joint_cut")if(o.cutLock=o.cutLock||new Set,z.kind==="split")for(const G of z.into)o.cutLock.add(G);else o.cutLock.add(v.id)},P=h.nearJoint(v.id,v.at),W=o.stroke&&o.stroke.id===v.id;if(Y&&h.canSplit(v.id)&&(W||!P))return h.stroke(v,Y.o,Y.d,E),o.evN>O&&F(),"деталь";const x=P;if(!x)return"";const U=(o.cutProg.get(x.id)||0)+E*va.cutRate;return o.cutProg.set(x.id,U),U>=x.strength&&(pt(x.id),Y&&F()),"крепление"}return""}function oe(v){if(!v)return"";const E=v.id;if(v.kind==="static")return o.breakers.has(E)?(A(E),"щиток"):R(v)?(xe(R(v)),"дверь"):o.opens.has(E)?(me(E),"шкаф"):"";if(v.kind==="note")return c("read",{id:E,key:n.prefabOf[E].text}),"запись";if(v.kind==="part"){const Y=R(v);if(Y)return xe(Y),"дверь";const j=b(E);if(j)return me(j),"шкаф"}return""}function Ue(v){if(!v)return"";if(v.kind==="static")return o.breakers.has(v.id)?"breaker":o.doors.has(v.id)?o.doors.get(v.id).want?"shut":"open":o.opens.has(v.id)?o.opens.get(v.id).want?"shut":"open":"";if(v.kind==="note")return"read";if(v.kind==="part"){const E=R(v);if(E)return o.doors.get(E).want?"shut":"open";const Y=b(v.id);if(Y)return o.opens.get(Y).want?"shut":"open"}return""}const Ce=v=>!!v&&!o.held&&!o.noteHeld&&(v.kind==="note"||v.kind==="plate"&&B.loose(v.id)&&!We(v.id)||v.kind==="part"&&Ct(v.id)||Re(v)),Re=v=>!!v&&v.kind==="static"&&!!v.box&&v.box.kind==="scrap",Ge=v=>Re(v)&&h.thaw(v.id)?{...v,kind:"part",box:void 0}:v,tt=v=>!!v&&(Re(v)||v.kind==="part"&&h.canSplit(v.id)||v.kind==="bolt"||v.kind==="cable"||v.kind==="plate"&&B.view(v.id).bolts.some(E=>!E)||v.kind==="static"&&o.windows.has(v.id)&&!o.windows.get(v.id).broken||v.kind==="part"&&(o.tanks.has(v.id)||h.nearJoint(v.id,v.at)));function ze(v){if(!v)return null;if(v.kind==="bolt")return{verb:"снять"};if(v.kind==="plate")return v.seated?{verb:"прихватить"}:B.view(v.id).bolts.some(Y=>!Y)?{verb:"болты",n:B.view(v.id).bolts.filter(Y=>!Y).length}:{verb:"сорвать"};if(v.kind==="cable")return{verb:"перерезать"};if(v.kind==="note")return null;if(Re(v))return{verb:"резать"};if(v.kind==="static"){const Y=o.windows.get(v.id);return Y&&!Y.broken?{verb:"разбить"}:{verb:"нет",shell:!!v.box&&["wall","floor","ceil","stub","truss","gate"].includes(v.box.kind)}}if(v.kind==="hatch")return{verb:"нет"};if(o.tanks.has(v.id))return{verb:"взорвётся"};const E=h.nearJoint(v.id,v.at);return E&&!(o.stroke&&o.stroke.id===v.id)?{verb:"снять",j:E}:_t(v.id)?{verb:"сорвать"}:{verb:h.canSplit(v.id)?"резать":"нет"}}function je(v){if(!v||v.kind!=="part"||!t.has(v.id))return null;const E=h.assembly(v.id);if(!Ct(v.id)){const Y=h.jointsOf(v.id).filter(O=>O.kind!=="hook"),j=Y.length?Y:[...E.js],M=j.length?h.jointKind(j[0]):"";return M?{why:"держится",kind:M,n:j.length}:null}return pn(v.id)?{why:"тяжело"}:null}function ct(v){if(!v)return 0;if(v.kind==="part"&&o.tanks.has(v.id))return o.tanks.get(v.id).heat/o.tanks.get(v.id).fuse;if(o.weld&&v.kind==="part")return o.weld.prog;if(o.stroke&&o.stroke.id===v.id)return o.stroke.prog;if(v.kind==="part"){const E=h.nearJoint(v.id,v.at);return E?(o.cutProg.get(E.id)||0)/E.strength:0}if(v.kind==="cable")return(o.cutProg.get("cable:"+v.id)||0)/St.cableCut;if(v.kind==="static"&&o.windows.has(v.id)){const E=o.windows.get(v.id);return 1-E.hp/E.strength}return 0}const We=v=>{const E=p.get(v);if(!E)return!1;const Y=ss(E,-.05,.06);return[...o.joints.values()].some(j=>j.b==="world"&&h.jointKind(j)==="seam"&&(M=>M[0]>Y.x0&&M[0]<Y.x1&&M[1]>Y.y0&&M[1]<Y.y1&&M[2]>Y.z0&&M[2]<Y.z1)(h.worldAt(j)))},_t=v=>o.screens.has(v)&&!Q.mounted(v)&&h.jointsOf(v).every(E=>E.kind==="hook")&&h.jointsOf(v).length>0,Ct=v=>{if(!v||!t.has(v))return!1;if(_t(v))return!0;const E=h.assembly(v);return!E.world&&(E.ids.length===1||E.piece||!E.bolts)},pn=v=>{const E=h.assembly(v);return E.mass>St.lift&&(E.ids.length>1||o.pieces.has(v))&&t.kind==="rapier"},ps=v=>!h.jointsOf(v).length;function di(v,E){o.held=v,o.turn=-1,o.drag=!E,o.carry=new Set(h.assembly(v).ids);for(const Y of o.carry)t.carry(Y,!0)}function qt(){for(const Y of o.carry)t.carry(Y,!1);const v=o.held,E=o.drag;o.carry=new Set,o.held=null,o.drag=!1,v&&t.has(v)&&!E&&t.setKinematic(v,!1)}function ms(v){if(o.noteHeld)return!1;if(o.held)return hi();if(!v)return!1;if(v=Ge(v),v.kind==="note")return d.take(v.id);if(v.kind==="plate"&&B.loose(v.id)&&We(v.id))return c("plate_welded",{id:v.id}),!1;if(v.kind==="plate"&&B.loose(v.id)){B.take(v.id);const E=N.get(v.id),Y="plate:"+v.id,j=E.tile||E.face==="+y"||E.face==="-y"?[0,0,0,1]:E.face[1]==="x"?Mu(yu):[0,0,0,1],M=E.tile?bo(E):E.face[1]==="y"?[kt.w/2,.012,kt.w/2]:E.face[1]==="x"?[.012,kt.w/2,kt.w/2]:[kt.w/2,kt.w/2,.012];return t.addPart({id:Y,kind:"plate",shape:"box",h:M,p:E.tile?[0,1,2].map(O=>[E.x,E.y,E.z][O]+Fs(E)[O]*.03):[E.x,E.y+.02,E.z],q:j,mass:E.tile?Math.max(2,zn.mass*(E.u1-E.u0)*(E.v1-E.v0)):3},{}),E.tile&&ne(E.id),o.partKind.set(Y,"plate"),o.partSm.set(Y,lr.plate),o.plates.set(Y,v.id),c("panel_off",{id:v.id}),di(Y,!0),t.setKinematic(Y,!0,E.tile),!0}if(v.kind==="part"&&Ct(v.id)){const E=v.id;if(_t(E)){for(const j of h.jointsOf(E))pt(j.id,"захват");Q.calm(E)}const Y=pn(E);return di(E,!Y),Y||t.setKinematic(E,!0,!!(o.pieces.get(E)||{}).mate&&!s.has("rambo")),c(Y?"drag":"grab",{id:E}),!0}return!1}function hi(v=null){const E=o.held,Y=[...o.carry],j=o.drag;if(!E)return!1;if(qt(),j)return c("drop",{id:E}),!0;const M=o.plates.get(E);if(M&&!v){const F=t.pose(E);if(!(N.get(M)||{}).hull&&B.seat(M,F.p))return t.remove(E),o.plates.delete(E),c("panel_seat",{id:M}),!0}if(!v&&o.screens.has(E)&&Q.seat(E))return!0;o.screens.has(E)&&Q.calm(E);const O=!v&&h.snapPose(E);return O?(t.setPose(E,O.p,O.q,!1),t.velocity(E,[0,0,0]),c("snap",{id:E,to:o.pieces.get(E).mate.id}),!0):(u.eject(Y.length?Y:[E],"отпущен"),v&&t.velocity(E,v),c(v?"throw":"drop",{id:E}),!0)}function Fn(v,E=1){if(!o.held)return!1;const Y=o.held;return hi(xv(v,o.partSm.get(Y)??.3,E))}function jn(v){const E=Math.cos(v.pitch),Y=[-Math.sin(v.yaw)*E,Math.sin(v.pitch),-Math.cos(v.yaw)*E],j=t.half(o.held)||[.2,.2,.2],M=Math.max(...j),O=su.dist+M,F=Math.max(O*E,Rn.r+Math.hypot(j[0],j[2])*.75+.05),P=Math.max(v.y+Math.min(...j),v.y+v.eye-su.drop+Y[1]*O);return[v.x-Math.sin(v.yaw)*F,P,v.z-Math.cos(v.yaw)*F]}function pi(v,E){const Y=v.hinge,j=[v.p[0]-Y.at[0],v.p[1]-Y.at[1],v.p[2]-Y.at[2]],M=S(Y,E),O=Rt(M,j);return{p:[Y.at[0]+O[0],Y.at[1]+O[1],Y.at[2]+O[2]],q:$n(M,v.q||[0,0,0,1])}}function Qn(v,E){const Y=o.held,j=t.pose(Y),M=jn(E);if(!j)return qt();const O=[M[0]-j.p[0],M[2]-j.p[2]],F=Math.hypot(...O);if(F>St.dragFar)return c("drop",{id:Y,why:"далеко"}),qt();const P=h.assembly(Y).mass,W=Math.min(St.drag,F*4),x=F>.02?W/F:0,U=[O[0]*x-j.v[0],O[1]*x-j.v[2]],z=Math.hypot(...U)*P/v,G=Math.min(1,St.dragForce/(z||1));t.impulse(Y,[U[0]*P*G,0,U[1]*P*G])}function wn(v,E){o.t+=v;for(const P of o.doors.values()){const W=P.open,x=P.box;!P.want&&P.open>.5&&E&&E.x>x.x0-Rn.r&&E.x<x.x1+Rn.r&&E.z>x.z0-Rn.r&&E.z<x.z1+Rn.r&&(P.want=1,c("door_blocked",{id:P.id}));const U=[...o.slide].filter(([z,G])=>G.door===P.id&&t.has(z)&&y(z));if(U.some(([z])=>h.jointsOf(z).some(G=>G.kind!=="rail"))&&P.want!==P.open&&(P.want=P.open,c("door_welded",{id:P.id})),P.open+=Math.sign(P.want-P.open)*Math.min(Math.abs(P.want-P.open),v/St.doorTime),W!==P.open)for(const[z,G]of U)t.moveKinematic(z,g(G,P.open),G.q);W>.5!=P.open>.5&&t.setStatic(P.box.id,P.open<=.5)}for(const P of o.opens.values()){const W=P.open+Math.sign(P.want-P.open)*Math.min(Math.abs(P.want-P.open),v/St.cabTime),x=[];let U=!1;for(const[z,G]of o.leaf)G.cab===P.id&&t.has(z)&&C(z)&&(I(z)&&(U=!0),x.push([z,G,pi(G,W)]));if(U){P.want=P.open;continue}if(!(E&&W!==P.open&&!s.has("thruleaf")&&x.some(([,z,G])=>yl([E.x,Math.max(G.p[1]-z.h[1],Math.min(G.p[1]+z.h[1],E.y+.6)),E.z],G,z.h)<Rn.r-.02))){P.open=W;for(const[z,,G]of x)t.moveKinematic(z,G.p,G.q)}}if(h.idle(),h.calm(),ge(),Je(),Ze(E),$e(v,E),zt(E),n.climb&&E&&!o.exit){const P=n.portals.find(x=>x.id===n.climb.exit),W=P&&{W:-E.x,E:E.x-n.size[0],S:-E.z,N:E.z-n.size[2]}[P.side];P&&W>.2&&E.y>P.y0-.1&&(o.exit=!0,c("exit",{id:P.id}))}o.held&&E&&(o.drag?Qn(v,E):t.moveKinematic(o.held,u.hold([o.held,...[...o.carry].filter(P=>P!==o.held)],jn(E)),null));let Y=0,j=0;for(const P of o.windows.values())P.broken&&!P.sealed&&(Y+=(P.a1-P.a0)*(P.y1-P.y0)*(1-.8*(P.cover||0)));for(const P of n.portals){const W=o.doors.get(P.id);!W||W.open>.5?j+=(P.a1-P.a0)*(P.y1-P.y0):W.cut&&(j+=.4)}const M=2.4*Y*o.p,O=2.4*j*(1-o.p)*.3;if(o.p=Math.max(0,Math.min(1,o.p+(O-M)*v*8/Be)),Y===0&&o.p<1&&!s.has("nolife")&&(o.p=Math.min(1,o.p+St.life*v)),o.flow=M,Y>0&&o.p>.02)for(const P of o.windows.values()){if(!P.broken||P.sealed)continue;const W=P.box||n.statics.find(x=>x.id===P.id);for(const x of t.bodies()){if(x===o.held||o.anchored.has(x))continue;const U=t.pose(x),z=[Math.max(W.x0,Math.min(U.p[0],W.x1)),Math.max(W.y0,Math.min(U.p[1],W.y1)),Math.max(W.z0,Math.min(U.p[2],W.z1))],G=[z[0]-U.p[0],z[1]-U.p[1]+.25,z[2]-U.p[2]],te=Math.hypot(...G)||1,J=St.pull*o.p*(P.a1-P.a0)*(P.y1-P.y0)/(1+te*te);J<St.pullMin||(Ke(x)||t.release(x),t.impulse(x,G.map(ae=>ae/te*J*v*(t.mass(x)||1))),Math.hypot(z[0]-U.p[0],z[1]-U.p[1],z[2]-U.p[2])<St.eject&&Te(x,P)&&(t.remove(x),o.removed.push(x),o.ejected.push(x),c("ejected",{id:x,window:P.id})))}if(E){const x=[P.at[0]-E.x,P.at[2]-E.z],U=Math.hypot(...x)||1,z=St.pull*.35*o.p*(P.a1-P.a0)*(P.y1-P.y0)/(1+U*U);E.kx=(E.kx||0)+x[0]/U*z*v,E.kz=(E.kz||0)+x[1]/U*z*v}}for(const P of o.windows.values()){if(P.broken)continue;const W=n.statics.find(x=>x.id===P.id);for(const x of t.bodies()){if(x===o.held)continue;const U=t.pose(x),z=Math.hypot(...U.v),G=t.aabb(x);if(z>5&&G.x0<W.x1+.05&&G.x1>W.x0-.05&&G.y0<W.y1&&G.y1>W.y0&&G.z0<W.z1+.05&&G.z1>W.z0-.05){ce(P.id,"удар "+x);break}}}for(const P of n.hatches){if(!L.has(P.id)&&!s.has("alltrap"))continue;let W=o.hatchOpen.get(P.id)||0;for(const x of t.bodies()){if(x===o.held)continue;const U=t.pose(x);U.p[0]>P.x0&&U.p[0]<P.x1&&U.p[2]>P.z0&&U.p[2]<P.z1&&U.p[1]<.6&&(W||c("hatch_open",{id:P.id,by:x}),W=Math.max(W,.01),(U.p[1]<-.05||o.t-(o.hatchSeen?.[x]??o.t)>St.hatchBurn)&&(t.remove(x),o.removed.push(x),o.burned.push({id:x,hatch:P.id}),o.flash=Math.max(o.flash,.6),c("burned",{id:x,hatch:P.id})),o.hatchSeen=o.hatchSeen||{},x in o.hatchSeen||(o.hatchSeen[x]=o.t))}E&&E.x>P.x0&&E.x<P.x1&&E.z>P.z0&&E.z<P.z1&&E.y<.1&&(W||c("hatch_open",{id:P.id,by:"player"}),W=Math.max(W,.01),o.deaths++,c("death",{cause:"hatch",id:P.id}),E.respawn&&E.respawn()),W&&(W=Math.min(1,W+v/.35)),W&&W>=1&&![...t.bodies()].some(x=>{const U=t.pose(x);return U.p[0]>P.x0&&U.p[0]<P.x1&&U.p[2]>P.z0&&U.p[2]<P.z1})&&o.t-(o.hatchClose?.[P.id]??0)>2&&(o.hatchClose=o.hatchClose||{},o.hatchClose[P.id]=o.t,W=0,c("hatch_close",{id:P.id})),o.hatchOpen.set(P.id,W)}if(E){const P=E.input||{},W=Math.abs(P.forward||0)+Math.abs(P.strafe||0)>.1,x=P.forward||0,U=P.strafe||0,z=Math.sin(E.yaw),G=Math.cos(E.yaw),te=[-z*x+G*U,-G*x-z*U];if(W)for(const J of t.bodies()){if(J===o.held||(o.partSm.get(J)??1)>St.light||!ps(J))continue;const ae=t.aabb(J);if(!ae||ae.y0>E.y+.6||ae.y1<E.y+.02||ae.x0>E.x+.6||ae.x1<E.x-.6||ae.z0>E.z+.6||ae.z1<E.z-.6)continue;const fe=t.pose(J),_e=Math.max(ae.y0,Math.min(ae.y1,E.y+.3));if(yl([E.x,_e,E.z],fe,t.half(J),nn(J))>Rn.r+.05)continue;const ie=fe.p[0]-E.x,Se=fe.p[2]-E.z,Ve=Math.hypot(ie,Se)||1,Ee=[ie/Ve,Se/Ve];if(Ee[0]*te[0]+Ee[1]*te[1]<.2)continue;const Ye=fe.v[0]*Ee[0]+fe.v[2]*Ee[1];Ye<St.push&&!s.has("nopush")&&t.velocity(J,[fe.v[0]+Ee[0]*(St.push-Ye),Math.max(fe.v[1],.3),fe.v[2]+Ee[1]*(St.push-Ye)])}t.setPlayer({x:E.x,y:E.y,z:E.z,h:E.h||Rn.stand})}const F=t.step(v);if(Q.step(),o.kicks.length)for(const P of o.kicks.splice(0))t.has(P.id)&&t.impulseAt(P.id,P.v,P.at);for(const P of t.bodies()){if(P===o.held||o.carry.has(P)&&!o.drag)continue;const W=t.aabb(P);if(!W||W.x0>-.01&&W.z0>-.01&&W.x1<n.size[0]+.01&&W.z1<n.size[2]+.01&&W.y0>-.06&&W.y1<n.size[1]+.01||u.depth(P)<.02)continue;const x=h.assembly(P);!x.world&&!o.ejected.includes(P)&&u.eject(x.ids,"сеть")}for(const P of t.bodies())t.pose(P).p[1]<-3&&(t.remove(P),o.removed.push(P),c("lost",{id:P}));return o.flash=Math.max(0,o.flash-v*2),F}function Yi(v){const E=n.statics.filter(j=>!(j.kind==="glass"&&(o.windows.get(j.id)||{}).broken)&&!(j.kind==="door"&&(o.doors.get(j.door)||{}).open>.5)&&j.kind!=="note"),Y=[];if(!s.has("ghost"))for(const j of t.bodies()){if((j===o.held||o.carry.has(j))&&!s.has("rideheld"))continue;const M=t.aabb(j);M&&Y.push(..._l(j,t.pose(j),t.half(j),M,v?v.x:0,v?v.z:0,nn(j)))}for(const j of o.merged)j.bb=j.bb||mi(j),Y.push(..._l(j.id,j,null,j.bb,v?v.x:0,v?v.z:0,j.poly.cells?j.poly:j.poly.faces));return o.extra=Y,{col:{boxes:E,circles:[]},extra:Y,soft:[]}}const nn=v=>{const E=t.poly(v);return E?E.cells?E:E.faces:null};function mi(v){const E={x0:1e9,x1:-1e9,y0:1e9,y1:-1e9,z0:1e9,z1:-1e9};for(const Y of v.poly.faces)for(const j of Y.v){const M=Gt(v,j);E.x0=Math.min(E.x0,M[0]),E.x1=Math.max(E.x1,M[0]),E.y0=Math.min(E.y0,M[1]),E.y1=Math.max(E.y1,M[1]),E.z0=Math.min(E.z0,M[2]),E.z1=Math.max(E.z1,M[2])}return E}function Ks(){return{v:1,room:n.id,t:+o.t.toFixed(3),p:+o.p.toFixed(4),joints:[...o.joints.keys()],cut:[...o.cutProg].map(([v,E])=>[v,+E.toFixed(3)]),panels:[...n.panels.map(v=>v.id),...f.filter(v=>{const E=B.view(v.id);return E.plate!=="on"||E.seated||E.bolts.some(Y=>Y)}).map(v=>v.id)].map(v=>({id:v,...B.view(v)})),tiles:o.openTiles.slice(),filled:[...o.filled],hulls:[...o.hulls.keys()],screens:Q.snapshot(),cables:[...o.cablesCut],breakers:[...o.breakers],doors:[...o.doors].map(([v,E])=>[v,E.want]),opens:[...o.opens].map(([v,E])=>[v,E.want]),windows:[...o.windows].filter(([,v])=>v.broken).map(([v])=>v),tanks:[...o.tanks].map(([v,E])=>[v,+E.heat.toFixed(3),E.gone]),hp:Math.round(o.hp),exit:o.exit,cut2:h.snapshot(),notes:d.snapshot(),leaf:[...o.leaf].filter(([v])=>o.pieces.has(v)).map(([v,E])=>[v,E.cab,E.hinge,E.p,E.q]),slide:[...o.slide].filter(([v])=>o.pieces.has(v)),removed:o.removed.slice(),burned:o.burned.slice(),ejected:o.ejected.slice(),plates:[...o.plates],bodies:t.bodies().map(v=>{const E=t.pose(v);return{id:v,p:E.p.map(Y=>+Y.toFixed(4)),q:E.q.map(Y=>+Y.toFixed(5)),sleep:E.sleep,free:Ct(v)}})}}function gi(v){if(!v||v.room!==n.id)throw new Error("снимок другой комнаты");o.t=v.t,o.p=v.p;for(const E of[...o.joints.keys()])v.joints.includes(E)||(o.joints.delete(E),t.unjoint(E));o.cutProg=new Map(v.cut);for(const E of v.panels){for(let Y=0;Y<4;Y++)E.bolts[Y]&&B.cut(E.id,Y,99);E.plate==="off"&&B.take(E.id),E.plate==="off"&&E.seated}for(const E of v.filled||[]){o.filled.add(E),re(p.get(E));for(const Y of[...o.joints.values()].filter(j=>j.prefab===E))v.joints.includes(Y.id)||(o.joints.delete(Y.id),t.unjoint(Y.id))}o.openTiles=(v.tiles||[]).slice(),q();for(const E of v.hulls||[])Pe(E),t.remove("plate:"+E),o.plates.delete("plate:"+E);Q.restore(v.screens),o.cablesCut=new Set(v.cables),o.breakers=new Map(v.breakers);for(const[E,Y]of v.doors){const j=o.doors.get(E);j&&(j.want=j.open=Y,t.setStatic(j.box.id,Y<=.5))}for(const[E,Y]of v.opens){const j=o.opens.get(E);j&&(j.want=j.open=Y)}for(const E of v.windows)(v.hulls||[]).includes(E)||xi(E);for(const[E,Y,j]of v.tanks){const M=o.tanks.get(E);M&&(M.heat=Y,M.gone=j)}o.removed=v.removed.slice(),o.burned=v.burned.slice(),o.ejected=v.ejected.slice();for(const E of v.removed)t.has(E)&&t.remove(E);for(const[E,Y]of v.plates){const j=v.bodies.find(O=>O.id===E),M=N.get(Y);!j||!M||(t.addPart({id:E,kind:"plate",shape:"box",h:M.tile?bo(M):M.face[1]==="y"?[kt.w/2,.012,kt.w/2]:M.face[1]==="x"?[.012,kt.w/2,kt.w/2]:[kt.w/2,kt.w/2,.012],p:j.p,q:j.q,mass:3},{}),o.partKind.set(E,"plate"),o.partSm.set(E,lr.plate),o.plates.set(E,Y))}h.restoreBodies(v.cut2);for(const E of v.bodies)t.has(E.id)&&(E.free&&t.release(E.id),t.setPose(E.id,E.p,E.q));h.restoreJoints(v.cut2);for(const E of v.bodies)t.has(E.id)&&t.setPose(E.id,E.p,E.q);d.restore(v.notes),Je(!0),v.hp!==void 0&&(o.hp=v.hp),o.exit=!!v.exit;for(const E of[...o.leaf.keys()])t.has(E)||o.leaf.delete(E);for(const E of[...o.slide.keys()])t.has(E)||(o.doors.get(o.slide.get(E).door).cut=!0,o.slide.delete(E));for(const[E,Y]of v.slide||[])t.has(E)&&o.slide.set(E,Y);for(const[E,Y,j,M,O]of v.leaf||[])t.has(E)&&o.leaf.set(E,{cab:Y,hinge:j,p:M,q:O,h:t.half(E)});ke(),c("restored",{bodies:v.bodies.length,joints:v.joints.length})}function xi(v){const E=o.windows.get(v);E&&(E.broken=!0,E.hp=0,t.setStatic(v,!1))}return{S:o,C:n,phys:t,panels:B,danger:L,weld:(v,E)=>h.weld(v,E),cutter:h,notes:d,shell:u,doorOf:R,anchors:Je,standing:nt,seamLoads:bt,seamCap:ot,fallRule:De,burden:D,turnHeld:w,grabbable:Ct,heavy:pn,grabInfo:je,cutInfo:ze,aimGrip:ue,aimWeld:pe,isScrap:Re,boltAt:(v,E)=>H(N.get(v),E),tiles:f,tileOf:v=>p.get(v),monitors:Q,screenOn:v=>Oe(v)&&Q.on(v),coverOf:de,blowHull:Pe,letGo:qt,powered:()=>Ne,isOn:Oe,aim:ve,cut:Ae,use:oe,grab:ms,drop:hi,throwHeld:Fn,step:wn,playerCol:Yi,usable:Ue,canGrab:Ce,canCut:tt,progress:ct,explode:X,cutJoint:pt,toggleDoor:xe,toggleBreaker:A,toggleCab:me,breakWindow:ce,snapshot:Ks,restore:gi,exposedCables:Le,holdPoint:jn}}const __={lineH:.085},wa={move:.012,turn:.02};function y_(n,e=new Set){const t=new Map;let i=0;const s=r=>{i++,n(r[0],r[2])};return{see(r,a){const l=t.get(r);if(!a){l&&(t.delete(r),e.has("stillshadow")||s(l.p));return}if(!l){t.set(r,{p:a.p.slice(),q:a.q.slice()}),e.has("stillshadow")||s(a.p);return}const o=Math.hypot(a.p[0]-l.p[0],a.p[1]-l.p[1],a.p[2]-l.p[2]),c=1-Math.abs(a.q[0]*l.q[0]+a.q[1]*l.q[1]+a.q[2]*l.q[2]+a.q[3]*l.q[3]);o<wa.move&&c<wa.turn*wa.turn/8||(e.has("stillshadow")||(s(l.p),o>.5&&s(a.p)),l.p=a.p.slice(),l.q=a.q.slice())},sweep(r){for(const a of[...t.keys()])if(!r(a)){const l=t.get(a);t.delete(a),e.has("stillshadow")||s(l.p)}},touched:()=>i}}const Wt={bevel:0},mn=Math.PI/2,El=new en,oo=new en,Ea=new se,M_={wood:9071173,orange:13132830,teal:3112838,white:14276559,steel:11910338,steelDark:4869458,pad:10129258,copper:11036474,yellow:13672480,glass:10470616,O2:3108792,N2:3948356,H2:12071978};function Ft(n,e,t){is(e[2],n.quaternion),t&&n.quaternion.multiply(El.set(t[0],t[1],t[2],t[3])),Ln(e[0],e[1],e[2],n.position)}function Xs(n,e,t){const i=typeof document<"u"?document.createElement("canvas"):null;if(!i)return null;i.width=n,i.height=e,t(i.getContext("2d"),n,e);const s=new xo(i);return s.colorSpace=yn,s.anisotropy=4,s}function wu(n,e,t,i){const r=Math.round(e*256),a=Math.round(t*256);return Xs(r,a,(l,o,c)=>{if(l.fillStyle=i?"#06121a":"#020304",l.fillRect(0,0,o,c),!i||!n)return;const f=__.lineH*256,p=Math.round(f*.72);l.font=`600 ${p}px ui-monospace, Menlo, monospace`,l.textBaseline="top",l.fillStyle="#ffcf6a",l.fillText(n.title,10,6),l.fillStyle="#9fe3e6",(n.rows||[]).forEach((d,h)=>l.fillText(d,10,6+f*(h+1))),l.fillStyle="rgba(160,230,255,0.05)";for(let d=0;d<c;d+=4)l.fillRect(0,d,o,1)})}function b_(n,e){return Xs(Math.round(n*200),Math.round(e*200),(t,i,s)=>{t.fillStyle="#05070a",t.fillRect(0,0,i,s),t.strokeStyle="rgba(190,215,230,0.55)",t.lineWidth=1.5;const r=[i*.56,s*.54];for(let a=0;a<14;a++){const l=a/14*Math.PI*2+Math.sin(a*5)*.2;t.beginPath(),t.moveTo(r[0],r[1]),t.lineTo(r[0]+Math.cos(l)*i*.7,r[1]+Math.sin(l)*i*.7),t.stroke()}for(const a of[.08,.17])t.beginPath(),t.arc(r[0],r[1],i*a,0,7),t.stroke()})}function S_(n){return Xs(256,360,(e,t,i)=>{e.fillStyle="#e8e0c8",e.fillRect(0,0,t,i),e.fillStyle="rgba(80,60,30,0.15)";for(let l=0;l<18;l++)e.fillRect(14,30+l*18,t-28,1);e.fillStyle="#2a2a33",e.font="15px Georgia, serif";const s=String(n||"").split(" ");let r="",a=34;for(const l of s){const o=r?r+" "+l:l;if(e.measureText(o).width>t-30){if(e.fillText(r,16,a),a+=18,r=l,a>i-12)break}else r=o}a<=i-12&&e.fillText(r,16,a)})}function w_(n){return Xs(256,256,(e,t,i)=>{e.fillStyle="#4a4d52",e.fillRect(0,0,t,i),e.strokeStyle="#c9a227",e.lineWidth=10,e.strokeRect(12,12,t-24,i-24),e.fillStyle="#d8b030",e.font="bold 92px ui-monospace, Menlo, monospace",e.textAlign="center",e.textBaseline="middle",e.fillText(String(n),t/2,i/2+4)})}function E_(n,e,{scene:t,lang:i="ru",tier:s={},mut:r=new Set}={}){const a=Dr[n.kit],[l,o,c]=n.size,f=e.texts[i]||e.texts.ru,p=zx([0,0,0],[l,o,c]),d={lamp:wi(13624063,3.2),lampWarm:wi(16765600,3),emerg:wi(16722458,2.6),glowWarm:wi(16756832,4),lampOff:new xn({color:1776671,roughness:.6,metalness:.2})},h={...Fx(p),lamp:d.lamp,emerg:d.emerg,glowWarm:d.glowWarm},u=new zs;u.userData.room=n.id,t.add(u);const _=[],g=new qn,m=n.hatches.map(x=>({x0:x.x0,x1:x.x1,y0:-.36,y1:.001,z0:x.z0,z1:x.z1,id:x.id})),y=x=>[...n.portals.filter(U=>U.side===x).map(U=>({a0:U.a0,a1:U.a1,y0:U.y0,y1:U.y1})),...n.windows.filter(U=>U.side===x).map(U=>({a0:U.a0,a1:U.a1,y0:U.y0,y1:U.y1}))],R=a.dado,S=(n.base||n.statics).filter(x=>["floor","ceil","wall","stub"].includes(x.kind));let C=null;function I(x){const U=x&&x.S,z=U?U.openTiles.map(x.tileOf):[],G=new qn;qn.holes=[...n.niches.map(J=>({...J})),...m,...z.map(J=>({...No(J),id:J.id})),...U?[...U.hulls.values()].map(J=>({...J.through,id:J.id})):[]];try{for(const J of S)J.kind==="floor"||J.kind==="stub"&&J.id.endsWith("_floor")?G.slab("floor",J.x0,J.y0,J.z0,J.x1,J.y1,J.z1,{bevel:0}):J.kind==="ceil"||J.kind==="stub"&&J.id.endsWith("_ceil")?G.slab("ceil",J.x0,J.y0,J.z0,J.x1,J.y1,J.z1,{bevel:0}):(J.kind==="wall"||J.kind==="stub")&&G.slab("wall",J.x0,J.y0,J.z0,J.x1,J.y1,J.z1,{bevel:0})}finally{qn.holes=null}for(const[J,ae,fe,_e]of[["W","x",.012,c],["E","x",l-.012,c],["S","z",.012,l],["N","z",c-.012,l]]){const le=z.filter(Ee=>Ee.side===J).map(Ee=>({a0:Ee.u0+.02,a1:Ee.u1-.02,y0:0,y1:9,v0:Ee.v0,v1:Ee.v1})),ie=Ee=>{const Ye=Ee.sort((et,rt)=>et.a0-rt.a0),qe=[];for(const et of Ye){const rt=qe[qe.length-1];rt&&et.a0<=rt.a1+.02?(rt.a1=Math.max(rt.a1,et.a1),rt.y1=Math.max(rt.y1,et.y1)):qe.push({...et})}return qe},Se=y(J).filter(Ee=>Ee.y0<R).map(Ee=>({...Ee,a0:Ee.a0-.1,a1:Ee.a1+.1,y0:0,y1:R+.1})),Ve=(Ee,Ye,qe)=>ie([...Ee,...le.filter(et=>et.v0<qe&&et.v1>Ye)]);G.wall("wallDark",ae,fe,0,_e,.08,R,.024,Ve(Se,.08,R)),G.wall("steelDark",ae,fe,0,_e,0,.08,.03,Ve(Se.map(Ee=>({...Ee,y1:.2})),0,.08)),G.wall("steel",ae,fe,0,_e,R,R+.03,.03,Ve(y(J).filter(Ee=>Ee.y0<R+.03).map(Ee=>({...Ee,a0:Ee.a0-.12,a1:Ee.a1+.12,y0:0,y1:9})),R,R+.03))}for(const J of z){const ae=No(J),fe=Fs(J),_e=.012,le=x.tileOf(J.id+".hull"),ie=le&&U.hulls.has(le.id);for(const[Se,Ve]of[["x",0],["y",1],["z",2]]){const Ee=ae[Se+"0"],Ye=ae[Se+"1"],qe=(et,rt)=>{const It={...ae};It[Se+"0"]=et,It[Se+"1"]=rt,G.slab("steelDark",It.x0,It.y0,It.z0,It.x1,It.y1,It.z1,{bevel:0})};if(fe[Ve]){const et=fe[Ve]>0?Ee:Ye;ie||qe(et-_e/2,et+_e/2)}else qe(Ee,Ee+_e),qe(Ye-_e,Ye)}if(le&&!ie){const Se=ss(le,.004,.02);G.slab("steel",Se.x0,Se.y0,Se.z0,Se.x1,Se.y1,Se.z1,{bevel:0})}}const te=G.build(h);te.userData.room=n.id,C&&(u.remove(C),C.traverse(J=>{J.isMesh&&J.geometry.dispose()})),C=te,u.add(te)}I(null);for(let x=a.beam/2;x<l;x+=a.beam)g.box("steelDark",x,o-.06,c/2,.14,.12,c,Wt);g.pipe("steel",[.25,o-.22,.2],[.25,o-.22,c-.2],.05,{seg:10}),g.pipe("copper",[.42,o-.18,.2],[.42,o-.18,c-.2],.03,{seg:8});for(const x of n.portals){const G=(x.a0+x.a1)/2,te=x.a1-x.a0,J=(fe,_e,le,ie)=>{if(x.along==="z"){const Se=x.side==="W"?.025:l-.025;g.box("orange",Se,_e,fe,.05,ie,le,Wt)}else{const Se=x.side==="S"?.025:c-.025;g.box("orange",fe,_e,Se,le,ie,.05,Wt)}};J(x.a0-.12/2,(x.y0+x.y1)/2,.12,x.y1-x.y0),J(x.a1+.12/2,(x.y0+x.y1)/2,.12,x.y1-x.y0),J(G,x.y1+.12/2,te+2*.12,.12);const ae=x.along==="z"?[x.side==="W"?.03:l-.03,x.y0+.3,x.a0-.3]:[x.a0-.3,x.y0+.3,x.side==="S"?.03:c-.03];g.box("emerg",ae[0],ae[1],ae[2],x.along==="z"?.02:.2,.05,x.along==="z"?.2:.02,Wt)}for(const x of n.windows){const z=x.side==="W"||x.side==="E"?"z":"x",G={W:0,E:l,S:0,N:c}[x.side],te=x.side==="W"||x.side==="S"?1:-1,J=.04,ae=(x.a0+x.a1)/2,fe=x.a1-x.a0,_e=(le,ie,Se,Ve)=>z==="z"?g.box("steel",G+te*J/2,ie,le,J,Ve,Se,Wt):g.box("steel",le,ie,G+te*J/2,Se,Ve,J,Wt);_e(x.a0-.06/2,(x.y0+x.y1)/2,.06,x.y1-x.y0+2*.06),_e(x.a1+.06/2,(x.y0+x.y1)/2,.06,x.y1-x.y0+2*.06),_e(ae,x.y0-.06/2,fe+2*.06,.06),_e(ae,x.y1+.06/2,fe+2*.06,.06),_e(ae,x.y0-.1,fe+.3,.05)}for(const x of n.statics)x.kind==="screen"&&g.slab("steelDark",x.x0-(x.x1-x.x0>.2?.03:0),x.y0-.03,x.z0-(x.z1-x.z0>.2?.03:0),x.x1+(x.x1-x.x0>.2?.03:0),x.y1+.03,x.z1+(x.z1-x.z0>.2?.03:0),Wt),x.kind==="cabinet"&&g.slab(x.mat,x.x0,x.y0,x.z0,x.x1,x.y1,x.z1,Wt);for(const x of n.parts)if(x.hinge){const U=x.hinge,z=U.sg;((te,J,ae)=>{for(const fe of U.ys){const _e=(U.along==="x"?U.at[0]:U.at[2])+te,le=U.along==="x"?U.at[2]:U.at[0],ie=le-z*.036,Se=ie+z*ae;U.along==="x"?g.slab("steel",_e-J/2,U.at[1]+fe-.05,Math.min(ie,Se),_e+J/2,U.at[1]+fe+.05,Math.max(ie,Se),Wt):g.slab("steel",Math.min(ie,Se),U.at[1]+fe-.05,_e-J/2,Math.max(ie,Se),U.at[1]+fe+.05,_e+J/2,Wt)}})(U.side===0?-.006:.006,.012,.04)}for(const x of n.joints)x.kind==="rivet"&&g.box("steelDark",x.at[0],x.at[1],x.at[2],.05,.05,.05,Wt);for(const x of n.fixtures)g.box("steelDark",x.x,x.y-.04,x.z,x.w+.1,.08,x.l+.1,Wt);for(const x of n.statics)if(x.kind==="shelf"&&g.slab(x.mat||"steel",x.x0,x.y0,x.z0,x.x1,x.y1,x.z1,{bevel:.006}),x.kind==="pipe"){const U={W:[x.off,null],E:[l-x.off,null],S:[null,x.off],N:[null,c-x.off]}[x.side],z=G=>U[0]!==null?[U[0],x.y,G]:[G,x.y,U[1]];g.pipe(x.mat==="copper"?"copper":x.mat,z(x.a0),z(x.a1),x.r,{seg:10});for(let G=x.a0+.25;G<x.a1;G+=1){const te=z(G),J={W:[0,null],E:[l,null],S:[null,0],N:[null,c]}[x.side];J[0]!==null?g.slab("steelDark",Math.min(J[0],te[0]),x.y-.02,G-.03,Math.max(J[0],te[0]),x.y+.02,G+.03,Wt):g.slab("steelDark",G-.03,x.y-.02,Math.min(J[1],te[2]),G+.03,x.y+.02,Math.max(J[1],te[2]),Wt)}}for(const x of n.hatches){const z=m.find(G=>G.id===x.id);g.slab("steel",x.x0-.05,-.004,x.z0-.05,x.x1+.05,.006,x.z0,Wt),g.slab("steel",x.x0-.05,-.004,x.z1,x.x1+.05,.006,x.z1+.05,Wt),g.slab("steel",x.x0-.05,-.004,x.z0,x.x0,.006,x.z1,Wt),g.slab("steel",x.x1,-.004,x.z0,x.x1+.05,.006,x.z1,Wt);for(const[G,te,J,ae]of[[z.x0,z.x1,z.z0,z.z0+.012],[z.x0,z.x1,z.z1-.012,z.z1],[z.x0,z.x0+.012,z.z0,z.z1],[z.x1-.012,z.x1,z.z0,z.z1]])g.slab("steelDark",G,z.y0,J,te,-.004,ae,Wt);g.slab("steelDark",z.x0,z.y0,z.z0,z.x1,z.y0+.012,z.z1,Wt)}for(const x of n.panels){const U=Fo(x),z={"+x":[1,0,0],"-x":[-1,0,0],"+z":[0,0,1],"-z":[0,0,-1],"+y":[0,1,0],"-y":[0,-1,0]}[x.face],G=.012;for(const[te,J]of[["x",0],["y",1],["z",2]]){const ae=U[te+"0"],fe=U[te+"1"],_e=(le,ie)=>{const Se={...U};Se[te+"0"]=le,Se[te+"1"]=ie,g.slab("steelDark",Se.x0,Se.y0,Se.z0,Se.x1,Se.y1,Se.z1,{bevel:0})};if(z[J]){const le=z[J]>0?ae:fe;_e(le-G/2,le+G/2)}else _e(ae,ae+G),_e(fe-G,fe)}}const b=g.build(h);b.userData.room=n.id,u.add(b);const L=new Yx(t,{spots:3,points:3});s.spots&&L.setTier(s);const B=new Map;for(const x of n.lights)B.set(x.id,L.add({...x,pos:x.pos.slice(),to:x.to.slice(),reach:30}));for(const x of n.portals){const U={W:[-1.2,x.y1-.2,(x.a0+x.a1)/2],E:[l+1.2,x.y1-.2,(x.a0+x.a1)/2],S:[(x.a0+x.a1)/2,x.y1-.2,-1.2],N:[(x.a0+x.a1)/2,x.y1-.2,c+1.2]}[x.side];L.add({kind:"point",pos:U,color:a.stub.light,power:3,dist:5,reach:30})}if(o>5)for(let x=1.6;x<o-1;x+=3.2)L.add({kind:"point",pos:[l/2,x,c-.25],color:13623551,power:4,dist:6,reach:30});L.add({kind:"point",pos:[l/2,.4,c/2],color:16724e3,power:1.6,dist:9,reach:30,prio:.5,name:"emergency"});const N=new Map;for(const x of n.fixtures){const U=n.lights.find(G=>G.id===x.id),z=new xt(new Pt(x.w-.06,.02,x.l-.06),U&&U.color===16765600?d.lampWarm:d.lamp);Ft(z,[x.x,x.y-.09,x.z]),u.add(z),N.set(x.id,{m:z,on:z.material})}const H=new Map,V=new Map,Q=Lf(),q=x=>{if(V.has(x))return V.get(x);const U=M_[x]??(Po[x]?Po[x][1]:9080726),z=["steel","steelDark","O2","N2","H2"].includes(x),G=new xn({color:U,roughness:z?.45:.7,metalness:z?.7:.1,map:z?Q.metal.map:Q.paint.map,normalMap:z?Q.metal.normalMap:Q.paint.normalMap});return V.set(x,G),G},ne={wood:["#b98d55","#7d5a30","#d9b27a"],board:["#cbb488","#8f7a52","#e6d4a8"],metal:["#9aa3ab","#5c646c","#dfe6ea"]},he=new Map;function re(x){if(he.has(x))return he.get(x);const[U,z,G]=ne[x],te=Xs(128,128,(J,ae,fe)=>{J.fillStyle=U,J.fillRect(0,0,ae,fe);let _e=7;const le=()=>(_e=_e*16807%2147483647,_e/2147483647);if(x==="metal")for(let ie=0;ie<260;ie++)J.fillStyle=le()<.5?z:G,J.globalAlpha=.12+le()*.25,J.fillRect(le()*ae,Math.floor(le()*fe),10+le()*50,1);else for(let ie=0;ie<420;ie++)J.fillStyle=le()<.6?z:G,J.globalAlpha=.2+le()*.4,x==="wood"?J.fillRect(le()*ae,le()*fe,1+le()*2,8+le()*26):J.fillRect(le()*ae,le()*fe,2+le()*6,1+le()*3);J.globalAlpha=1});return te&&(te.wrapS=te.wrapT=wr,_.push(te)),he.set(x,te),te}const Pe=x=>["steel","steelDark","copper","glass"].includes(x)?"metal":x==="white"?"board":"wood",de=new Map;function be(x){if(de.has(x))return de.get(x);const U=q(x).clone(),z=re(Pe(x));return U.onBeforeCompile=G=>{G.uniforms.uCutMap={value:z},G.vertexShader=`attribute float aCut;
varying float vCut;
varying vec2 vCutUv;
`+G.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
  vCut = aCut; vCutUv = uv;`),G.fragmentShader=`uniform sampler2D uCutMap;
varying float vCut;
varying vec2 vCutUv;
`+G.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
  if (vCut > 0.5) diffuseColor.rgb = texture2D(uCutMap, vCutUv).rgb;`)},U.customProgramCacheKey=()=>"roomcut",de.set(x,U),U}function ge(x){const U=[],z=[],G=[],te=[],J=new dt,ae=new se;for(const{poly:_e,m:le}of x){le&&J.getNormalMatrix(le);for(const ie of _e.faces){const Se=ae.set(...ie.n);le&&Se.applyMatrix3(J).normalize();const Ve=Se.x,Ee=Se.y,Ye=Se.z;for(let qe=1;qe+1<ie.v.length;qe++)for(const et of[ie.v[0],ie.v[qe],ie.v[qe+1]])ae.set(et[0],et[1],et[2]),le&&ae.applyMatrix4(le),U.push(ae.x,ae.y,ae.z),z.push(Ve,Ee,Ye),G.push(et[3],et[4]),te.push(ie.cut?1:0)}}const fe=new tn;return fe.setAttribute("position",new ht(U,3)),fe.setAttribute("normal",new ht(z,3)),fe.setAttribute("uv",new ht(G,2)),fe.setAttribute("aCut",new ht(te,1)),fe}const Te=new Map;let Be=!1;const ye=new Set;function Ne(x){let U;if(x.shape==="cyl"){const G=x.h[0],te=x.h[1],J=[new ii(G,G,te*2-.1,18,1),new Vi(G,18,8,0,Math.PI*2,0,mn),new ii(.025,.03,.08,10)];J[1].translate(0,te-.05,0),J[2].translate(0,te+.03,0),U=new tn;const ae=J.map(ie=>ie.toNonIndexed()),fe=[],_e=[],le=[];for(const ie of ae)fe.push(...ie.attributes.position.array),_e.push(...ie.attributes.normal.array),le.push(...ie.attributes.uv.array);U.setAttribute("position",new ht(fe,3)),U.setAttribute("normal",new ht(_e,3)),U.setAttribute("uv",new ht(le,2))}else{const G=x.h.map(te=>te.toFixed(3)).join(",");U=H.get(G),U||(U=new Pt(x.h[0]*2,x.h[1]*2,x.h[2]*2),U.setAttribute("aCut",new ht(new Float32Array(U.attributes.position.count),1))),H.set(G,U)}const z=new xt(U,bl.has(x.kind)?be(x.mat||x.kind):q(x.mat||x.kind));return z.castShadow=!0,z.receiveShadow=!0,z.userData.part=x.id,z.userData.prefab=x.prefab,u.add(z),Te.set(x.id,z),z}function Fe(x,U){const z=x.hinge,G=z.along==="x",te=G?x.h[0]:x.h[2],J=x.h[1],ae=z.sg,fe=x.h[G?2:0],_e=z.side===0?1:-1,le=It=>{const Jt=[],En=[],gt=[];for(const ln of It){const At=ln.toNonIndexed();Jt.push(...At.attributes.position.array),En.push(...At.attributes.normal.array),gt.push(...At.attributes.uv.array)}const Ut=new tn;return Ut.setAttribute("position",new ht(Jt,3)),Ut.setAttribute("normal",new ht(En,3)),Ut.setAttribute("uv",new ht(gt,2)),Ut},ie=(It,Jt,En,gt,Ut,ln)=>{const At=G?new Pt(gt,Ut,ln):new Pt(ln,Ut,gt);return At.translate(G?It:En,Jt,G?En:It),At},Se=ae*(fe+.004),Ve=.035,Ee=le([ie(0,J-Ve,Se,2*te,2*Ve,.008),ie(0,-J+Ve,Se,2*te,2*Ve,.008),ie(-te+Ve,0,Se,2*Ve,2*J,.008),ie(te-Ve,0,Se,2*Ve,2*J,.008)]),Ye=new xt(Ee,U.material);Ye.castShadow=!1,Ye.receiveShadow=!0,U.add(Ye);const qe=G?z.at[0]-x.p[0]:z.at[2]-x.p[2];G?z.at[2]-x.p[2]:z.at[0]-x.p[0];const et=[ie(_e*(te-.07),.05,ae*(fe+.035),.018,.16,.018),ie(_e*(te-.07),.12,ae*(fe+.018),.014,.014,.036),ie(_e*(te-.07),-.02,ae*(fe+.018),.014,.014,.036)];for(const It of z.ys)et.push(ie(qe+_e*.035,It,ae*(fe+.004),.06,.09,.006));const rt=new xt(le(et),q("yellow"));rt.castShadow=!1,rt.receiveShadow=!0,U.add(rt)}for(const x of n.parts){const U=Ne(x);x.hinge&&Fe(x,U)}const Oe=new Map;for(const x of n.doors){if(n.parts.some(G=>G.prefab===x.id&&G.kind==="door"))continue;const U=x.box,z=new xt(new Pt(U.x1-U.x0,U.y1-U.y0,U.z1-U.z0),q(x.kind==="sealed"?"red":"steelDark"));z.castShadow=!0,z.receiveShadow=!0,z.userData.door=x.id,u.add(z),Oe.set(x.id,{m:z,d:x})}const ke=new Map,Ke=a.wallT;for(const x of n.portals){const U=x.a1-x.a0,z=x.along==="z"?new Pt(Ke+.1,.012,U):new Pt(U,.012,Ke+.1),G={W:[-Ke/2,(x.a0+x.a1)/2],E:[l+Ke/2,(x.a0+x.a1)/2],S:[(x.a0+x.a1)/2,-Ke/2],N:[(x.a0+x.a1)/2,c+Ke/2]}[x.side],te=x.y0>0,J=te?x.along==="z"?new Pt(.05,.16,U):new Pt(U,.16,.05):z,ae=new xt(J,te?d.lampWarm:q("yellow"));ae.receiveShadow=!0,Ft(ae,te?x.along==="z"?[x.side==="W"?.02:l-.02,x.y0-.09,G[1]]:[G[0],x.y0-.09,x.side==="S"?.02:c-.02]:[G[0],.006,G[1]]),u.add(ae),ke.set(x.id,ae)}const pt=new xn({color:10470616,roughness:.05,metalness:.2,transparent:!0,opacity:.22,depthWrite:!1}),He=new Map;for(const x of n.windows){const U=n.statics.find(G=>G.id===x.id),z=new xt(new Pt(U.x1-U.x0,U.y1-U.y0,U.z1-U.z0),pt);Ft(z,[(U.x0+U.x1)/2,(U.y0+U.y1)/2,(U.z0+U.z1)/2]),z.userData.window=x.id,u.add(z),He.set(x.id,z)}const Je=Xs(512,256,(x,U,z)=>{x.fillStyle="#01030a",x.fillRect(0,0,U,z);for(let G=0;G<260;G++){const te=Math.random();x.fillStyle=`rgba(${200+te*55},${210+te*45},255,${.3+te*.7})`,x.fillRect(Math.random()*U,Math.random()*z,te>.92?2:1,te>.92?2:1)}});for(const x of n.windows){const U=new xt(new Ri((x.a1-x.a0)*3,(x.y1-x.y0)*3),new rs({map:Je,toneMapped:!1})),z=3,G={W:[-z,null],E:[l+z,null],S:[null,-z],N:[null,c+z]}[x.side],te=(x.a0+x.a1)/2,J=(x.y0+x.y1)/2,ae=G[0]!==null?[G[0],J,te]:[te,J,G[1]],fe={W:mn,E:-mn,S:0,N:Math.PI}[x.side];Ft(U,ae,[0,Math.sin(fe/2),0,Math.cos(fe/2)]),u.add(U)}const nt=new Map;for(const x of n.texts){const U=n.statics.find(le=>le.id===x.id)||(n.screenBoxes||[]).find(le=>le.id===x.id),z=n.prefabOf[x.id],G=z.wall,te={W:mn,E:-mn,S:0,N:Math.PI}[G],J=.004,ae={W:[1,0],E:[-1,0],S:[0,1],N:[0,-1]}[G],fe=G==="W"?U.x1:G==="E"?U.x0:(U.x0+U.x1)/2,_e=G==="S"?U.z1:G==="N"?U.z0:(U.z0+U.z1)/2;if(x.kind==="screen"){const le=wu(f[x.key],x.w,x.h,!0),ie=new xt(new Ri(x.w,x.h),new rs({map:le,toneMapped:!1,color:16777215}));Ft(ie,[fe+ae[0]*J,(U.y0+U.y1)/2,_e+ae[1]*J],[0,Math.sin(te/2),0,Math.cos(te/2)]),ie.userData.screen=x.id,u.add(ie),nt.set(x.id,{m:ie,texOn:le,texOff:wu(null,x.w,x.h,!1),texBad:b_(x.w,x.h),t:x,at:[fe+ae[0]*J,(U.y0+U.y1)/2,_e+ae[1]*J],yaw:[0,Math.sin(te/2),0,Math.cos(te/2)],body:n.parts.some(Se=>Se.id===x.id&&Se.kind==="monitor")?x.id:null,home:[(U.x0+U.x1)/2,(U.y0+U.y1)/2,(U.z0+U.z1)/2]}),le&&_.push(le)}else{const le=S_(f[x.key]),ie=new xt(new Ri(.21,.3),new xn({map:le,roughness:.9,metalness:0,emissive:2761750,emissiveIntensity:.4}));Ft(ie,[fe+ae[0]*J,(U.y0+U.y1)/2,_e+ae[1]*J],[0,Math.sin(te/2),0,Math.cos(te/2)]),ie.userData.note=x.id,u.add(ie),nt.set(x.id,{m:ie,note:!0,t:x})}}const Qe=new Map,vt=new Map;for(const x of n.statics.filter(U=>U.kind==="breaker")){const U=new xt(new Pt(.05,.16,.05),q("red")),z=n.prefabOf[x.prefab],G={W:[1,0],E:[-1,0],S:[0,1],N:[0,-1]}[z.wall],te=z.wall==="W"?x.x1:z.wall==="E"?x.x0:(x.x0+x.x1)/2,J=z.wall==="S"?x.z1:z.wall==="N"?x.z0:(x.z0+x.z1)/2;U.userData.base=[te+G[0]*.04,(x.y0+x.y1)/2,J+G[1]*.04],U.userData.side=z.wall;const ae=new xt(new Pt(z.wall==="W"||z.wall==="E"?.005:x.x1-x.x0,.04,z.wall==="W"||z.wall==="E"?x.z1-x.z0:.005),q("yellow"));Ft(ae,[te+G[0]*.003,x.y1-.05,J+G[1]*.003]),u.add(ae),u.add(U),Qe.set(x.prefab,U);const fe=new xt(new Pt(x.x1-x.x0,x.y1-x.y0,x.z1-x.z0),q("steelDark"));Ft(fe,[(x.x0+x.x1)/2,(x.y0+x.y1)/2,(x.z0+x.z1)/2]),fe.castShadow=!0,fe.receiveShadow=!0,u.add(fe),vt.set(x.prefab,fe)}const ot=new Map;for(const x of n.hatches){const U=w_(x.number),z=new xt(new Pt(x.x1-x.x0-.02,.03,x.z1-x.z0-.02),new xn({map:U,roughness:.6,metalness:.5}));z.receiveShadow=!0,z.userData.hatch=x.id,u.add(z),ot.set(x.id,{m:z,h:x})}const bt=new xt(new Ri(.85,.85),d.glowWarm);bt.visible=!1,u.add(bt);const st={plate:new xn({color:8094344,metalness:.55,roughness:.5,vertexColors:!0}),bolt:new xn({color:11910338,metalness:.8,roughness:.35}),head:new xn({color:2369323,metalness:.4,roughness:.5})},zt=(()=>{const x=kt.w,U=.03,z=[[x,x,.018,0,0,.009,8094344]];for(const le of[-1,1])z.push([x+2*U,U,.004,0,le*(x/2+U/2),.002,14856732]),z.push([U,x,.004,le*(x/2+U/2),0,.002,14856732]);const G=[],te=[],J=[],ae=[],fe=new ut;for(const[le,ie,Se,Ve,Ee,Ye,qe]of z){const et=new Pt(le,ie,Se).toNonIndexed();et.translate(Ve,Ee,Ye),G.push(...et.attributes.position.array),te.push(...et.attributes.normal.array),ae.push(...et.attributes.uv.array),fe.set(qe);for(let rt=0;rt<et.attributes.position.count;rt++)J.push(fe.r/.48,fe.g/.51,fe.b/.53)}const _e=new tn;return _e.setAttribute("position",new ht(G,3)),_e.setAttribute("normal",new ht(te,3)),_e.setAttribute("uv",new ht(ae,2)),_e.setAttribute("color",new ht(J,3)),_e})(),Ie=(()=>{const x=kt.w,U=.035,z=[[x,U,.02,0,x/2-U/2,.01],[x,U,.02,0,-x/2+U/2,.01],[U,x,.02,x/2-U/2,0,.01],[U,x,.02,-x/2+U/2,0,.01]];for(let le=0;le<5;le++)z.push([x-2*U,.022,.012,0,-x/2+U+(le+.5)*(x-2*U)/5,.012,!0]);const G=[],te=[],J=[],ae=[],fe=new ut(6120555);for(const[le,ie,Se,Ve,Ee,Ye,qe]of z){const et=new Pt(le,ie,Se).toNonIndexed();qe&&et.rotateX(.6),et.translate(Ve,Ee,Ye),G.push(...et.attributes.position.array),te.push(...et.attributes.normal.array),ae.push(...et.attributes.uv.array);for(let rt=0;rt<et.attributes.position.count;rt++)J.push(fe.r/.48,fe.g/.51,fe.b/.53)}const _e=new tn;return _e.setAttribute("position",new ht(G,3)),_e.setAttribute("normal",new ht(te,3)),_e.setAttribute("uv",new ht(ae,2)),_e.setAttribute("color",new ht(J,3)),_e})(),De=new Map,$e=x=>{if(x&&x.tile){const U=bo(x),z=U.map(G=>G.toFixed(3)).join();if(!De.has(z)){const G=new Pt(U[0]*2,U[1]*2,U[2]*2);G.setAttribute("color",new ht(new Float32Array(G.attributes.position.count*3).fill(1),3)),De.set(z,G)}return De.get(z)}return x&&x.panel==="vent"?Ie:zt},Ze=(x,U)=>n.panels.find(z=>z.id===U)||x.tileOf(U),D={"+y":[-mn,0],"-y":[mn,0],"+x":[0,mn],"-x":[0,-mn],"+z":[0,0],"-z":[0,Math.PI]},w=new Map;for(const x of n.panels){const U=new xt($e(x),st.plate),[z,G]=D[x.face],te=new dn(z,G,0,"YXZ"),J=new en().setFromEuler(te),ae={"+y":[0,.003,0],"-y":[0,-.003,0],"+x":[.003,0,0],"-x":[-.003,0,0],"+z":[0,0,.003],"-z":[0,0,-.003]}[x.face];Ft(U,[x.x+ae[0],x.y+ae[1],x.z+ae[2]],[J.x,J.y,J.z,J.w]),U.receiveShadow=!0,U.userData.panel=x.id,u.add(U),w.set(x.id,{m:U,q:[J.x,J.y,J.z,J.w]})}const k=new Hn(new ii(kt.bolt*.6,kt.bolt*.72,.014,6),st.head,Math.max(1,n.panels.length*4));k.count=n.panels.length*4,u.add(k);const K=n.tiles||[];K.filter(x=>!x.hull);const X=new Hn(new ii(.017,.021,.012,6),st.head,Math.max(1,K.length*4));X.castShadow=!1,X.frustumCulled=!1,u.add(X);const ce=new se(0,1,0),xe=new se;let me="";function A(x){const U=x.S,z=`${U.evN}:${U.carveN||0}`;if(z===me)return;me=z;let G=0;for(const te of K){if(te.hull&&!(U.openTiles.includes(te.tileOf)&&!U.hulls.has(te.id)))continue;const J=x.panels.view(te.id);if(J.plate==="on")for(let ae=0;ae<4;ae++){if(J.bolts[ae])continue;const fe=Mo(te,ae),_e=Fs(te);$.position.copy(Ln(fe[0]-_e[0]*.014,fe[1]-_e[1]*.014,fe[2]-_e[2]*.014,Ea)),$.quaternion.copy(is(fe[2])).multiply(El.setFromUnitVectors(ce,xe.set(_e[0],_e[1],_e[2]))),$.scale.setScalar(1),$.updateMatrix(),X.setMatrixAt(G++,$.matrix)}}X.count=G,X.instanceMatrix.needsUpdate=!0,T!==(U.carveN||0)&&(T=U.carveN||0,I(x),Ce=!0)}let T=0;const Z={pad:[new Pt(1,1,1),"pad"],tray:[new Pt(1,1,1),"steelDark"],jbox:[new Pt(1,1,1),"yellow"],tubeC:[new ii(.5,.5,1,8),"copper"],tubeS:[new ii(.5,.5,1,8),"steel"]},Me={};for(const x of Object.keys(Z)){const U=new Hn(Z[x][0],q(Z[x][1]),160);U.frustumCulled=!1,U.castShadow=!1,U.receiveShadow=!0,U.visible=!1,U.count=0,u.add(U),Me[x]=U}function ee(x){const U={};for(const z of Object.keys(Z))U[z]=0;for(const z of n.parts){if(!z.fill)continue;const G=x.phys.pose(z.id);if(!G)continue;const te=z.kind==="tube"?z.mat==="copper"?"tubeC":"tubeS":z.kind;if(U[te]>=160)continue;Ft($,G.p,G.q);const J=z.h;if(z.kind==="tube"){const ae=J.indexOf(Math.max(...J));ae===0&&$.quaternion.multiply(oo.setFromAxisAngle(v,-mn)),ae===2&&$.quaternion.multiply(oo.setFromAxisAngle(xe.set(1,0,0),mn));const fe=Math.min(...J)*2;$.scale.set(fe,Math.max(...J)*2,fe)}else $.scale.set(J[0]*2,J[1]*2,J[2]*2);$.updateMatrix(),Me[te].setMatrixAt(U[te]++,$.matrix)}for(const z of Object.keys(Z))Me[z].count=U[z],Me[z].visible=U[z]>0,U[z]&&(Me[z].instanceMatrix.needsUpdate=!0)}const ve=new Map;function we(x){for(const[U]of x.S.hulls){if(ve.has(U))continue;const z=x.S.windows.get(U),G=new xt(new Ri((z.a1-z.a0)*6,(z.y1-z.y0)*6),new rs({map:Je,toneMapped:!1})),te=3,J={W:[-te,null],E:[l+te,null],S:[null,-te],N:[null,c+te]}[z.side],ae=(z.a0+z.a1)/2,fe=(z.y0+z.y1)/2,_e={W:mn,E:-mn,S:0,N:Math.PI}[z.side];Ft(G,J[0]!==null?[J[0],fe,ae]:[ae,fe,J[1]],[0,Math.sin(_e/2),0,Math.cos(_e/2)]),u.add(G),ve.set(U,G)}}const pe={live:new xn({color:12071978,roughness:.5,metalness:.1}),dead:new xn({color:2761252,roughness:.8})};let ue=null;function Le(x=new Set,U={}){ue&&(u.remove(ue),ue.geometry.dispose());const z=new qn;for(const te of n.cables){const J=te.pts,ae=U[te.id];for(let fe=1;fe<J.length;fe++){let _e=J[fe-1],le=J[fe];if(ae&&x.has(te.id)&&Math.abs((_e[0]===le[0]?_e[0]:ae[0])-ae[0])<.001&&Math.abs((_e[2]===le[2]?_e[2]:ae[2])-ae[2])<.001&&ae[0]>=Math.min(_e[0],le[0])-.001&&ae[0]<=Math.max(_e[0],le[0])+.001&&ae[2]>=Math.min(_e[2],le[2])-.001&&ae[2]<=Math.max(_e[2],le[2])+.001){const Se=[le[0]-_e[0],0,le[2]-_e[2]],Ve=Math.hypot(Se[0],Se[2])||1,Ee=[Se[0]/Ve*.04,0,Se[2]/Ve*.04];z.pipe("rubber",_e,[ae[0]-Ee[0],ae[1],ae[2]-Ee[2]],.022,{seg:8}),z.pipe("rubber",[ae[0]+Ee[0],ae[1],ae[2]+Ee[2]],le,.022,{seg:8});continue}z.pipe("rubber",_e,le,.022,{seg:8})}}const G=z.build({cloth:pe.live});ue=G.children[0]||null,ue&&(G.remove(ue),ue.castShadow=!1,u.add(ue))}Le(),new Tt;const $=new Xt;let Ae="",oe="",Ue=0,Ce=!1;const Re=y_((x,U)=>L.touch(x,U),r),Ge=[],tt=new xn({color:11121079,roughness:.45,metalness:.3,emissive:2759180,emissiveIntensity:.8}),ze=wi(16756832,5),je=Math.max(1,n.joints.filter(x=>x.kind==="hinge").length),ct=Math.max(1,n.joints.filter(x=>x.kind!=="hinge"&&x.kind!=="rivet").length),We=new Hn(new ii(.013,.013,.1,10),q("yellow"),je),_t=new Hn(new Vi(.011,8,6),st.bolt,ct),Ct=new Hn(new Vi(.021,12,8),wi(16753722,6),64);for(const x of[We,_t,Ct])x.frustumCulled=!1,x.castShadow=!1,x.visible=!1,x.count=0,u.add(x);let pn=[];const ps=x=>{pn=x},di=120,qt=new Hn(new Vi(.016,6,4),wi(16760944,9),di);qt.frustumCulled=!1,qt.castShadow=!1,qt.visible=!1,qt.count=0,u.add(qt);function ms(x){const U=x.S;let z=0;for(const G of U.sparks){const te=U.t-G.t;if(!(te<0||te>.9))for(let J=0;J<G.n&&z<di;J++){const ae=Se=>{const Ve=Math.sin((J+1)*12.9898+G.seed*78.233+Se*37.719)*43758.5453;return Ve-Math.floor(Ve)},fe=ae(0)*Math.PI*2,_e=.6+ae(1)*2.2,le=-.5+ae(2)*2.6,ie=.35+ae(3)*.55;te>ie||(Ft($,[G.at[0]+Math.cos(fe)*_e*te,G.at[1]+le*te-4.9*te*te,G.at[2]+Math.sin(fe)*_e*te],null),$.scale.setScalar(1.2-te/ie),$.updateMatrix(),qt.setMatrixAt(z++,$.matrix))}}qt.count=z,qt.visible=z>0,z&&(qt.instanceMatrix.needsUpdate=!0)}function hi(x,U){const z=(ae,fe,_e,le,ie)=>{Ft($,_e,le),$.scale.setScalar(ie),$.updateMatrix(),ae.setMatrixAt(fe,$.matrix)};let G=0,te=0,J=0;for(const ae of x.S.joints.values())ye.has(ae.prefab)||(ae.kind==="hinge"&&G<je?z(We,G++,x.cutter.worldAt(ae),null,1):ae.kind==="dowel"&&te<ct&&z(_t,te++,x.cutter.worldAt(ae),null,1));for(const ae of pn)J<64&&z(Ct,J++,ae.at,null,ae.hot?1.35+.25*Math.sin(U*9):.85);for(const[ae,fe]of[[We,G],[_t,te],[Ct,J]])ae.count=fe,ae.visible=fe>0,fe&&(ae.instanceMatrix.needsUpdate=!0)}const Fn=new Vi(.0075,8,6),jn=480,pi=96,Qn=new Hn(Fn,tt,jn),wn=new Hn(new Vi(.006,6,4),ze,pi);for(const x of[Qn,wn])x.frustumCulled=!1,x.castShadow=!1,x.visible=!1,x.count=0,u.add(x);const Yi=160,nn=new Hn(new Pt(1,1,1),wi(5832602,4),Yi),mi=wi(16734794,3),Ks=nn.material;nn.frustumCulled=!1,nn.castShadow=!1,nn.visible=!1,nn.count=0,u.add(nn);const gi=new se,xi=new se,v=new se(0,0,1);function E(x){const U=x.cutter.preview?x.cutter.preview():null,z=U&&x.phys.pose(U.id);let G=0;if(z)for(const[te,J]of[[.0055,U.plan]])for(const[ae,fe]of J){if(G>=Yi)break;const _e=Gt(z,ae),le=Gt(z,fe);Ln(_e[0],_e[1],_e[2],gi),Ln(le[0],le[1],le[2],xi);const ie=gi.distanceTo(xi);ie<1e-4||($.position.copy(gi).add(xi).multiplyScalar(.5),$.quaternion.setFromUnitVectors(v,xi.sub(gi).normalize()),$.scale.set(te,te,ie),$.updateMatrix(),nn.setMatrixAt(G++,$.matrix))}nn.material=U&&U.ok?Ks:mi,nn.count=G,nn.visible=G>0,G&&(nn.instanceMatrix.needsUpdate=!0)}function Y(x){const U=x.S;for(const[_e,le]of U.pieces)if(!Te.has(_e)){const ie=new xt(ge([{poly:le.poly}]),be(le.mat));ie.castShadow=!0,ie.receiveShadow=!0,ie.userData.part=_e,ie.userData.prefab=le.prefab,ie.userData.piece=!0,u.add(ie),Te.set(_e,ie)}for(const[_e,le]of Te)le.userData.piece&&!U.pieces.has(_e)&&(u.remove(le),le.geometry.dispose(),Te.delete(_e));if(U.merged.length!==Ue){Ue=U.merged.length,Ce=!0;for(const ie of Ge.splice(0))u.remove(ie),ie.geometry.dispose();const _e=new Map,le=new Xt;for(const ie of U.merged){Ft(le,ie.p,ie.q),le.updateMatrix();const Se=be(ie.mat);_e.has(Se)||_e.set(Se,[]),_e.get(Se).push({poly:ie.poly,m:le.matrix.clone()})}for(const[ie,Se]of _e){const Ve=new xt(ge(Se),ie);Ve.receiveShadow=!0,Ve.castShadow=!0,u.add(Ve),Ge.push(Ve)}}const z=(_e,le,ie)=>{$.position.copy(Ln(ie[0],ie[1],ie[2],Ea)),$.quaternion.identity(),$.scale.setScalar(1),$.updateMatrix(),_e.setMatrixAt(le,$.matrix)};let G=0;const te=(_e,le)=>{const ie=x.phys.pose(_e);if(ie)for(let Se=0;Se<le.length;Se++){const Ve=le[Se],Ee=le[Se+1]||Ve,Ye=Math.hypot(Ve[0]-Ee[0],Ve[1]-Ee[1],Ve[2]-Ee[2]),qe=Math.max(1,Math.round(Ye/.004));for(let et=0;et<qe&&G<jn;et++)z(Qn,G++,Gt(ie,[0,1,2].map(rt=>Ve[rt]+(Ee[rt]-Ve[rt])*et/qe)))}};for(const[,_e]of U.beads)te(_e.a,_e.pts);Qn.count=G,Qn.visible=G>0,G&&(Qn.instanceMatrix.needsUpdate=!0),G=0;const J=U.stroke,ae=U.weld,fe=J?x.phys.pose(J.id):ae?x.phys.pose(ae.a):null;if(E(x),J&&fe){const _e=Math.max(1,Math.ceil(J.path.length/pi));for(let le=0;le<J.path.length&&G<pi;le+=_e)z(wn,G++,Gt(fe,J.path[le]))}else if(ae&&fe)for(const _e of ae.path)G<pi&&z(wn,G++,Gt(fe,_e));wn.count=G,wn.visible=G>0,G&&(wn.instanceMatrix.needsUpdate=!0)}function j(x,U,z,G){const te=x.S,J=x.phys;Y(x),hi(x,U),ms(x),A(x),ee(x),we(x);for(const[le,ie]of nt)if(ie.body){const Se=J.pose(le);if(!Se){ie.m.visible=!1;continue}ie.m.visible=!ye.has(le);const Ve=Gt(Se,[0,1,2].map(et=>ie.at[et]-ie.home[et])),Ee=new en(...Se.q).multiply(oo.set(...ie.yaw));Ft(ie.m,Ve,[Ee.x,Ee.y,Ee.z,Ee.w]);const Ye=te.screens.get(le),qe=Ye&&Ye.broken?"b":x.screenOn(le)?"1":"0";ie.st!==qe&&(ie.st=qe,ie.m.material.map=qe==="b"?ie.texBad:qe==="1"?ie.texOn:ie.texOff,ie.m.material.needsUpdate=!0)}for(const le of x.notes.ids()){const ie=nt.get(le),Se=x.notes.pose(le);if(ie)if(te.noteHeld===le&&z&&G){const Ve=Math.cos(G.pitch),Ee=[-Math.sin(G.yaw)*Ve,Math.sin(G.pitch),-Math.cos(G.yaw)*Ve],Ye=[Math.cos(G.yaw),0,-Math.sin(G.yaw)],qe=new en().setFromEuler(new dn(G.pitch,G.yaw,0,"YXZ"));ie.m.visible=!0,Ft(ie.m,[0,1,2].map(et=>z[et]+Ee[et]*.5+Ye[et]*.16-(et===1?.14:0)),[qe.x,qe.y,qe.z,qe.w])}else ie.m.visible=!!Se&&!ye.has(le),Se&&Ft(ie.m,Se.p,Se.q)}for(const[le,ie]of Te){const Se=J.pose(le);if(!Se||ye.has(ie.userData.prefab)){ie.visible=!1;continue}ie.visible=!0,Ft(ie,Se.p,Se.q)}for(const[le]of te.plates)if(!Te.has(le)){const ie=new xt($e(Ze(x,te.plates.get(le))),st.plate);ie.castShadow=!0,u.add(ie),Te.set(le,ie),ie.userData.part=le,ie.userData.plateLocal=!0}for(const[le,ie]of Te)if(ie.userData.plateLocal){const Se=J.pose(le);if(!Se){ie.visible=!1;continue}const Ve=Ze(x,te.plates.get(le));if(Ve.tile){ie.visible=!0,Ft(ie,Se.p,Se.q);continue}const Ee=w.get(Ve.id).q,Ye=new en(...Se.q).multiply(oo.set(...Ee));ie.visible=!0,Ft(ie,Se.p,[Ye.x,Ye.y,Ye.z,Ye.w])}for(const[le,{m:ie,d:Se}]of Oe){const Ve=te.doors.get(le),Ee=Se.box,Ye=Ve.open*((Se.along==="z"?Ee.z1-Ee.z0:Ee.x1-Ee.x0)-.1);Ft(ie,[(Ee.x0+Ee.x1)/2+(Se.along==="x"?Ye:0),(Ee.y0+Ee.y1)/2,(Ee.z0+Ee.z1)/2+(Se.along==="z"?Ye:0)])}for(const[le,ie]of He)ie.visible=!te.windows.get(le).broken;const ae=[...x.powered()].sort().join(",")+"|"+[...te.breakers].map(([le,ie])=>le+ie).join(",");if(ae!==Ae){Ae=ae;for(const[le,ie]of B)ie.off=Be||!x.isOn(le);for(const[le,ie]of N)ie.m.material=x.isOn(le)?ie.on:d.lampOff;for(const[le,ie]of nt)!ie.note&&!ie.body&&(ie.m.material.map=x.isOn(le)?ie.texOn:ie.texOff,ie.m.material.needsUpdate=!0);for(const[le,ie]of Qe){const Se=te.breakers.get(le)?-.5:.5,Ve=ie.userData.side;Ft(ie,ie.userData.base,Ve==="W"||Ve==="E"?[0,0,Math.sin(Se/2),Math.cos(Se/2)]:[Math.sin(Se/2),0,0,Math.cos(Se/2)])}}const fe=[...te.cablesCut].join(",");fe!==oe&&(oe=fe,Le(te.cablesCut,te.cableCutAt||{}));for(const[le,{m:ie,h:Se}]of ot){const Ve=te.hatchOpen.get(le)||0,Ee=Se.x0+.01,Ye=Ve*1.75,qe=(Se.x0+Se.x1)/2,et=(Se.z0+Se.z1)/2,rt=(Se.x1-Se.x0)/2,It=[0,0,Math.sin(-Ye/2),Math.cos(-Ye/2)];if(Ft(ie,[Ee+Math.cos(Ye)*rt,-.016-Math.sin(Ye)*rt,et],It),x.danger.has(le)){bt.visible=Ve>.05;const Jt=new en().setFromEuler(new dn(-mn,0,0));Ft(bt,[qe,-.34,et],[Jt.x,Jt.y,Jt.z,Jt.w])}}let _e=0;for(const le of n.panels){const ie=x.panels.view(le.id),Se=w.get(le.id);Se.m.visible=ie.plate==="on";for(let Ve=0;Ve<4;Ve++){const Ee=ie.plate==="on"&&!ie.bolts[Ve],Ye=pl(le,Ve),[qe,et]=D[le.face],rt={"+y":[0,1,0],"-y":[0,-1,0],"+x":[1,0,0],"-x":[-1,0,0],"+z":[0,0,1],"-z":[0,0,-1]}[le.face],It=.0075;$.position.copy(Ln(Ye[0]+rt[0]*It,Ye[1]+rt[1]*It,Ye[2]+rt[2]*It,Ea)),$.quaternion.copy(is(Ye[2])).multiply(El.setFromEuler(new dn(qe+mn,et,0,"YXZ"))),$.scale.setScalar(Ee?1:1e-4),$.updateMatrix(),k.setMatrixAt(_e++,$.matrix)}}if(k.instanceMatrix.needsUpdate=!0,L.spots.some(le=>le.castShadow&&le.visible)){for(const[le,ie]of Te)ie.castShadow&&Re.see(le,ie.visible?J.pose(le):null);Re.sweep(le=>Te.has(le)||le.startsWith("door:")||le.startsWith("lid:"));for(const[le]of Oe){const ie=te.doors.get(le),Se=ie.box;Re.see("door:"+le,{p:[(Se.x0+Se.x1)/2+ie.open*(Se.x1-Se.x0),0,(Se.z0+Se.z1)/2+ie.open*(Se.z1-Se.z0)],q:[0,0,0,1]})}for(const[le,{h:ie}]of ot)Re.see("lid:"+le,{p:[(ie.x0+ie.x1)/2,-(te.hatchOpen.get(le)||0),(ie.z0+ie.z1)/2],q:[0,0,0,1]});Ce&&(Ce=!1,r.has("stillshadow")||L.touch(l/2,c/2))}L.update(z?z[0]:l/2,z?z[2]:c/2,U)}function M(){const x=new Map,U=(z,G)=>{G&&(x.has(z)||x.set(z,[]),x.get(z).push(G))};for(const z of n.keys){z.portal&&(U(z.id,(Oe.get(z.id)||{}).m),U(z.id,ke.get(z.id)));for(const[le,ie]of Te)ie.userData.prefab===z.id&&U(z.id,ie);const G=nt.get(z.id);G&&U(z.id,G.m);const te=ot.get(z.id);te&&U(z.id,te.m);const J=He.get(z.id);J&&U(z.id,J);const ae=Qe.get(z.id);ae&&U(z.id,ae);const fe=w.get(z.id);fe&&U(z.id,fe.m);const _e=vt.get(z.id);_e&&U(z.id,_e)}return x}function O(){let x=0,U=0;return u.traverse(z=>{if(z.isMesh&&z.visible){U++;const G=z.geometry,te=G.index?G.index.count/3:G.attributes.position.count/3;x+=z.isInstancedMesh?te*z.count:te}}),{tris:Math.round(x),meshes:U}}function F(){t.remove(u),u.traverse(x=>{x.isMesh&&x.geometry.dispose()});for(const x of _)x.dispose();for(const x of[...L.spots,...L.points])t.remove(x),x.target&&t.remove(x.target),x.shadow&&x.shadow.map&&x.shadow.map.dispose()}function P(){Be=!0;for(const x of L.defs)x.off=!0;u.traverse(x=>{x.isMesh&&x.material&&(x.material.isMeshBasicMaterial||x.material.userData.unlit)&&(x.visible=!1)}),b.traverse(x=>{x.isMesh&&x.material.userData.unlit&&(x.visible=!1)})}function W(x){for(const U of x){ye.add(U);for(const z of M().get(U)||[])z.visible=!1,z.userData.gateHidden=!0}}return{group:u,staticGroup:b,pool:L,update:j,keyMeshes:M,stats:O,dispose:F,marks:ps,shade:Re,partMesh:Te,mats:h,darken:P,hide:W}}const Wn={cutter:'<svg viewBox="0 0 40 40"><path d="M8 26 L22 12 L28 18 L14 32 Z" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/><path d="M26 10 l6 -4 M30 14 l6 -2 M24 6 l2 -4" stroke="#ffb060" stroke-width="2.4" stroke-linecap="round"/></svg>',jump:'<svg viewBox="0 0 40 40"><path d="M20 30 V10 M11 18 L20 9 L29 18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',crouch:'<svg viewBox="0 0 40 40"><path d="M20 9 V29 M11 21 L20 30 L29 21" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 34 H31" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',kick:'<svg viewBox="0 0 40 40"><path d="M12 8 L16 22 L28 26 L30 31 L14 31 L8 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"/><path d="M31 14 l4 -3 M32 19 h5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',pause:'<svg viewBox="0 0 40 40"><path d="M14 11 V29 M26 11 V29" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>',full:'<svg viewBox="0 0 40 40"><path d="M9 16 V9 H16 M24 9 H31 V16 M31 24 V31 H24 M16 31 H9 V24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',hand:'<svg viewBox="0 0 40 40"><path d="M12 22 V12 a2.5 2.5 0 0 1 5 0 V20 V9 a2.5 2.5 0 0 1 5 0 V20 V11 a2.5 2.5 0 0 1 5 0 V22 V16 a2.5 2.5 0 0 1 5 0 V25 c0 6 -4 10 -10 10 h-2 c-4 0 -7 -2 -9 -6 l-4 -7 a2.4 2.4 0 0 1 4 -2.5 Z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/></svg>',use:'<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="11" fill="none" stroke="currentColor" stroke-width="2.6"/><circle cx="20" cy="20" r="3.5" fill="currentColor"/></svg>',throwI:'<svg viewBox="0 0 40 40"><path d="M9 30 Q14 12 31 10" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/><path d="M24 7 L32 10 L28 17" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',put:'<svg viewBox="0 0 40 40"><rect x="12" y="10" width="16" height="12" rx="1.5" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M20 24 V31 M15 27 L20 32 L25 27 M8 35 H32" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>'},T_=`
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
`;function Qt(n,e,t){const i=document.createElement(n);return e&&(i.className=e),t&&(i.innerHTML=t),i}function Eu(n,e,t,i){const s=2*Math.PI*n;return`<svg class="ring" viewBox="0 0 ${2*n+i+2} ${2*n+i+2}"><circle cx="${n+i/2+1}" cy="${n+i/2+1}" r="${n}" stroke="rgba(223,230,238,.18)"/><circle cx="${n+i/2+1}" cy="${n+i/2+1}" r="${n}" stroke="${t}" stroke-dasharray="${(s*e).toFixed(1)} ${s.toFixed(1)}" stroke-linecap="round"/></svg>`}function A_(n,e,{sim:t=null}={}){if(!document.getElementById("thud-css")){const r=Qt("style");r.id="thud-css",r.textContent=T_,document.head.appendChild(r)}const i=Qt("div");if(i.id="thud",t){const[r,a,l,o]=t;for(const[c,f]of[["l",r],["r",a],["b",l],["t",o]])n.style.setProperty("--sim-"+c,f+"px")}const s={cut:Qt("div","tbn cut",Wn.cutter),jmp:Qt("div","tbn jmp",Wn.jump),cro:Qt("div","tbn cro",Wn.crouch),kck:Qt("div","tbn kck",Wn.kick),pz:Qt("div","tbn pz",Wn.pause),ghost:Qt("div","ghost"),ctx:Qt("div","ctx")};s.cut.dataset.act="cutter",s.jmp.dataset.act="jump",s.cro.dataset.act="crouch",s.kck.dataset.act="kick",s.pz.dataset.act="pause";for(const[r,a]of[["fire",s.cut],["jump",s.jmp],["crouch",s.cro],["kick",s.kck],["pause",s.pz]])a.dataset.key=r,a.classList.add("tb");return i.append(s.ghost,s.ctx,s.kck,s.cro,s.jmp,s.cut,s.pz),n.appendChild(i),{hud:i,E:s}}const ks={key:"drift.mob.v1",def:{sens:1,inv:!1,k:1,op:.9,mir:!1,txt:1},lim:{sens:[.4,2.5],k:[.85,1.3],op:[.35,1],txt:[.9,1.5]}};function Tu(n){const e={...ks.def};try{const t=JSON.parse(n&&n.getItem(ks.key)||"null");if(t&&typeof t=="object")for(const i of Object.keys(e))typeof t[i]==typeof e[i]&&(e[i]=t[i])}catch{}for(const[t,[i,s]]of Object.entries(ks.lim))e[t]=Math.max(i,Math.min(s,+e[t]||ks.def[t]));return e}const fn={radius:56,deadIn:.12,deadOut:.08,runOn:.92,runOff:.8,runHold:.25,look:1.6,accel:.6,accelV:1500,ladderCone:.6,dbl:.3},Au="drift.mob.tut.v1",cr=["move","look","jump","crouch","use"];function R_(n,e,{input:t,onPause:i,onFull:s=null,haptic:r=()=>{},store:a=null,sim:l=null,mut:o=[]}={}){const c=new Set(o),{hud:f,E:p}=A_(n,e,{sim:c.has("nosafe")?null:l}),d=Qt("div","szone",'<div class="stick"></div>'),h=Qt("div","stk","<i></i>"),u=h.firstChild;p.ghost.remove(),f.prepend(d),f.appendChild(h);const _=Qt("div","",Eu(43,0,"#ffb060",4)).firstChild;_.setAttribute("class","hr"),p.cut.appendChild(_);const g=_.lastChild,m=2*Math.PI*43,y=Qt("span","tag");y.hidden=!0,p.cro.appendChild(y);const R=Qt("div","hpb","<i></i>");f.appendChild(R);const S=Qt("div","tbn fsb off",Wn.full);S.dataset.act="full",S.dataset.key="full",S.classList.add("tb"),f.appendChild(S);const C=Ie=>{Ie.stopPropagation(),Ie.cancelable&&Ie.preventDefault(),!S.classList.contains("off")&&s&&s()};S.addEventListener("pointerdown",Ie=>{Ie.stopPropagation(),t.setDevice("touch"),Ie.cancelable&&Ie.preventDefault()}),S.addEventListener("pointerup",C),S.addEventListener("click",C);let I=Tu(a);const b=()=>{c.has("noset")||(f.style.setProperty("--k",c.has("smallbtn")?.5:I.k),f.style.setProperty("--op",I.op),n.style.setProperty("--txt",I.txt),f.classList.toggle("mir",!!I.mir),n.classList.toggle("mir",!!I.mir))};b();const L={act:"",text:"",hold:!1,ring:0,held:!1,ladder:!1,heat:0,over:!1,kickCd:0,slow:1,hp:1},B=new Map,N={downs:0,cancels:0,roles:{}};let H=!1,V=!1,Q=-1,q=-1,ne=!1,he=[0,0];const re=()=>performance.now()/1e3,Pe=(Ie,De)=>{try{Ie.setPointerCapture(De)}catch{}};function de(Ie){let De=(Ie.x-Ie.ox)/fn.radius,$e=(Ie.y-Ie.oy)/fn.radius,Ze=Math.hypot(De,$e);Ze>1&&(De/=Ze,$e/=Ze,Ze=1),u.style.transform=`translate(${(De*fn.radius).toFixed(1)}px, ${($e*fn.radius).toFixed(1)}px)`,!ne&&Ze>fn.deadIn?ne=!0:ne&&Ze<fn.deadOut&&(ne=!1),c.has("nodead")&&(ne=Ze>0);const D=ne?Math.min(1,(Ze-fn.deadOut)/(1-fn.deadOut))/Math.max(Ze,1e-6):0;let w=De*D*Ze,k=-$e*D*Ze;L.ladder&&Math.abs(w)<fn.ladderCone&&!c.has("noladdersnap")&&(w=0),he=[w,k];const K=re();Ze>=fn.runOn?q<0&&(q=K):Ze<fn.runOff&&(q=-1);const X=q>=0&&K-q>=fn.runHold&&!c.has("norun");h.classList.toggle("run",X),t.stick(w,k,X)}function be(){ne=!1,q=-1,he=[0,0],t.stick(0,0,!1),h.classList.remove("on","run"),u.style.transform=""}function ge(Ie,De,$e){const Ze=re(),D=Math.max(.001,Ze-Ie.t),w=De-Ie.x,k=$e-Ie.y,K=Math.hypot(w,k)/D,X=1+fn.accel*Math.min(1,K/fn.accelV),ce=fn.look*I.sens*X*(c.has("noslow")?1:L.slow);t.look(w*ce,(I.inv?-k:k)*ce),Qe+=Math.abs(w)+Math.abs(k),Ie.t=Ze}function Te(Ie,De,$e){if(Ie.pointerType==="mouse"||c.has("onefinger")&&B.size)return;t.setDevice("touch"),N.downs++,N.roles[De]=(N.roles[De]||0)+1;const Ze={role:De,el:$e,x:Ie.clientX,y:Ie.clientY,t:re(),ox:Ie.clientX,oy:Ie.clientY};if(B.set(Ie.pointerId,Ze),$e&&Pe($e,Ie.pointerId),De==="stick"){const D=innerWidth,w=innerHeight,k=64;Ze.ox=Math.max(k+20,Math.min(D-k-20,Ie.clientX)),Ze.oy=Math.max(k+20,Math.min(w-k-20,Ie.clientY)),h.style.left=Ze.ox+"px",h.style.top=Ze.oy+"px",h.classList.add("on"),de(Ze)}if(De==="cutter"&&(t.hold("cutter",!0),p.cut.classList.add("on")),De==="jump"&&(t.press("jump"),Ne(p.jmp)),De==="kick"&&(t.press("kick"),Ne(p.kck),r("kick")),De==="crouch"){const D=re();V?(V=!1,H=!1):H&&Q>=0&&D-Q<fn.dbl&&!c.has("nocrawl")?V=!0:H=!H,Q=D,t.hold("crouch",H),t.hold("crawl",V),Fe()}De==="pause"&&i&&i(),De==="use"&&(He.used=!0,L.hold?t.hold("interactHold",!0):t.press("interact"),$e.classList.add("on")),(De==="grab"||De==="put")&&(t.press("grab"),De==="put"&&r("throw")),De==="throw"&&(t.press("throw"),t.hold("throwHold",!0),r("throw")),De==="off"&&t.press("jump"),Ie.preventDefault()}function Be(Ie){const De=B.get(Ie.pointerId);if(De){if(De.role==="stick"){De.x=Ie.clientX,De.y=Ie.clientY,de(De);return}(De.role==="look"||De.role==="cutter")&&(ge(De,Ie.clientX,Ie.clientY),De.x=Ie.clientX,De.y=Ie.clientY)}}function ye(Ie){const De=B.get(Ie.pointerId);De&&(Ie.type==="pointercancel"&&N.cancels++,B.delete(Ie.pointerId),De.role==="stick"&&be(),De.role==="cutter"&&(t.hold("cutter",!1),p.cut.classList.remove("on")),De.role==="use"&&(t.hold("interactHold",!1),De.el&&De.el.classList.remove("on")),De.role==="throw"&&t.hold("throwHold",!1))}function Ne(Ie){Ie.classList.add("on"),setTimeout(()=>Ie.classList.remove("on"),140)}function Fe(){y.hidden=!(H||V),y.textContent=e(V?"mob.tag.crawl":"mob.tag.crouch"),p.cro.classList.toggle("on",H||V)}d.addEventListener("pointerdown",Ie=>Te(Ie,"stick",d));for(const[Ie,De]of[[p.cut,"cutter"],[p.jmp,"jump"],[p.cro,"crouch"],[p.kck,"kick"],[p.pz,"pause"]])Ie.addEventListener("pointerdown",$e=>{$e.stopPropagation(),Te($e,De,Ie)});addEventListener("pointerdown",Ie=>{Ie.pointerType!=="touch"||B.has(Ie.pointerId)||(t.setDevice("touch"),!(Ie.target.closest&&Ie.target.closest("#thud .szone, #thud .tbn, #thud .pill, #thud .tut, .panel, .mscr, button, a, input"))&&(!n.classList.contains("mob")||n.classList.contains("paused")||Te(Ie,"look",null)))},!0),addEventListener("pointermove",Be,!0),addEventListener("pointerup",ye,!0),c.has("nocancel")||addEventListener("pointercancel",ye,!0);const Oe=()=>{if(!c.has("noreset"))for(const[Ie]of[...B])ye({pointerId:Ie,type:"pointercancel"})};for(const Ie of["dblclick","contextmenu"])f.addEventListener(Ie,De=>De.preventDefault());let ke="";function Ke(Ie,De,$e,Ze,D,w){const k=Qt("div","pill tb "+Ie,`<span class="ic">${De}${w?Eu(18,0,"#84cbcd",3.5):""}</span><span>${$e}${Ze?`<span class="pv">${Ze}</span>`:""}</span>`);return k.dataset.key=D==="use"?"e":D,k.dataset.act=D,k.addEventListener("pointerdown",K=>{K.stopPropagation(),Te(K,D,k)}),k}function pt(){const Ie=[L.act,L.text,L.hold,L.held,L.ladder].join("|");if(Ie!==ke){ke=Ie;for(const[De,$e]of[...B])($e.role==="use"||$e.role==="grab"||$e.role==="throw"||$e.role==="put"||$e.role==="off")&&ye({pointerId:De,type:"pointerup"});p.ctx.textContent="",!c.has("noctx")&&(L.act==="e"&&L.text&&p.ctx.appendChild(Ke(L.hold?"hold":"",Wn.use,L.text,L.hold?e("mob.btn.hold"):"","use",L.hold)),L.held?(p.ctx.appendChild(Ke("",Wn.throwI,e("mob.btn.throw"),"","throw")),p.ctx.appendChild(Ke("alt",Wn.put,e("mob.btn.put"),"","put"))):L.act==="grip"&&p.ctx.appendChild(Ke("alt",Wn.hand,e("mob.btn.grab"),L.text,"grab")),L.ladder&&p.ctx.appendChild(Ke("alt",Wn.jump,e("mob.btn.off"),"","off")))}}const He={i:-1,done:!1,log:[]};try{He.done=!!(a&&a.getItem(Au))}catch{He.done=!1}let Je=null,nt=0,Qe=0,vt=0;function ot(){if(Je&&Je.remove(),He.i>=cr.length){He.done=!0,Je=null;try{a&&a.setItem(Au,"1")}catch{}return}Je=Qt("div","tut",`<p>${e("mob.tut."+cr[He.i])}</p>`),Je.dataset.step=cr[He.i];const Ie=Qt("button","",e("mob.tut.skip"));Ie.type="button",Ie.addEventListener("pointerdown",De=>{De.stopPropagation(),He.log.push("skip"),He.i=cr.length,ot()}),Je.appendChild(Ie),f.appendChild(Je),nt=Qe=vt=0}function bt(Ie){if(He.done||c.has("notut"))return;if(He.i<0){He.i=0,ot();return}const De=cr[He.i];let $e=!1;vt+=Ie,De==="move"&&(Math.hypot(he[0],he[1])>.3&&(nt+=Ie),$e=nt>1),De==="look"&&($e=Qe>120),De==="jump"&&($e=!!He.jumped),De==="crouch"&&($e=!!He.crouched),De==="use"&&($e=!!He.used||vt>25),$e&&(He.log.push(De),He.i++,ot())}d.addEventListener("pointerdown",()=>{},!0),p.jmp.addEventListener("pointerdown",()=>{He.jumped=!0}),p.cro.addEventListener("pointerdown",()=>{He.crouched=!0});let st=re();return{hud:f,E:p,zone:d,update(Ie){Object.assign(L,Ie);const De=re(),$e=Math.min(.5,De-st);if(st=De,pt(),L.act==="e"&&L.hold){const Ze=p.ctx.querySelector(".pill.hold .ring circle:last-child");if(Ze){const D=2*Math.PI*18;Ze.setAttribute("stroke-dasharray",`${(D*Math.max(0,Math.min(1,L.ring))).toFixed(1)} ${D.toFixed(1)}`)}}g.setAttribute("stroke-dasharray",`${(m*Math.max(0,Math.min(1,L.heat))).toFixed(1)} ${m.toFixed(1)}`),g.setAttribute("stroke",L.over?"#ff5a3a":"#ffb060"),p.cut.classList.toggle("over",!!L.over),p.cut.classList.toggle("hint",L.act==="cut"),p.kck.classList.toggle("cd",L.kickCd>0),R.firstChild.style.width=(Math.max(0,Math.min(1,L.hp))*100).toFixed(0)+"%";for(const Ze of B.values())Ze.role==="stick"&&de(Ze);L.used&&(He.used=!0),n.classList.contains("mob")&&!n.classList.contains("paused")&&bt($e),f.dataset.ctx=p.ctx.children.length?[...p.ctx.children].map(Ze=>Ze.dataset.act).join(","):"",f.dataset.touches=String(B.size),f.dataset.crouch=V?"crawl":H?"1":"0"},settings:()=>({...I}),set(Ie,De){Ie==="reset"?I={...ks.def}:I={...I,[Ie]:De},I=Tu({getItem:()=>JSON.stringify(I)}),b();try{a&&a.setItem(ks.key,JSON.stringify(I))}catch{}},releaseAll:Oe,setFull(Ie){const De=c.has("fsbtnalways")?!1:!Ie||c.has("nofsbtn");S.classList.toggle("off",De),n.style.setProperty("--fsw",De?"0px":"60px"),f.dataset.full=De?"":"1"},crouchState:()=>({crouch:H,crawl:V}),clearCrouch(){H=V=!1,t.hold("crouch",!1),t.hold("crawl",!1),Fe()},tut:He,stats:()=>({...N,touches:B.size,roles:[...B.values()].map(Ie=>Ie.role),stick:he.slice()})}}const C_={"mob.mock.zone.move":"стик: где лёг палец","mob.mock.zone.look":"обзор: веди пальцем","mob.mock.verb.use":"Открыть","mob.mock.verb.use.sub":"торговый терминал","mob.mock.verb.wheel":"Крутить","mob.mock.verb.wheel.sub":"держи палец","mob.mock.crouch.tag":"вкл","mob.btn.grab":"Схватить","mob.btn.throw":"Бросить","mob.btn.put":"Положить","mob.btn.use":"Взаимодействовать","mob.btn.off":"Слезть","mob.btn.hold":"держи","mob.tag.crouch":"вкл","mob.tag.crawl":"ползу","mob.start.title":"Нажми, чтобы начать","mob.start.sub":"Касание включит звук и полный экран","mob.resume":"Нажми, чтобы продолжить","mob.rotate.title":"Поверни устройство","mob.rotate.sub":"ДРЕЙФ играется в альбомной ориентации","mob.a2hs":"Полный экран в Safari: «Поделиться», потом «На экран Домой», и открывай игру оттуда","mob.a2hs.close":"Понятно","mob.inapp":"Для полного экрана откройте игру кнопкой ▶️ в боте или в Safari","mob.tut.move":"Стик слева: положи палец и веди, чтобы идти. До упора - бег","mob.tut.look":"Правая половина экрана: веди пальцем, чтобы оглядеться","mob.tut.jump":"Кнопка со стрелкой вверх: прыжок","mob.tut.crouch":"Кнопка со стрелкой вниз: присесть. Двойное касание: ползти","mob.tut.use":"Когда рядом что-то можно сделать, над кнопками появится кнопка с действием","mob.tut.skip":"Пропустить","tab.controls":"Управление","mob.set.title":"Управление","mob.set.sens":"Чувствительность обзора","mob.set.inv":"Инверсия по вертикали","mob.set.size":"Размер кнопок","mob.set.alpha":"Прозрачность кнопок","mob.set.mirror":"Кнопки слева, стик справа","mob.set.text":"Размер текста","mob.set.on":"вкл","mob.set.off":"выкл","mob.set.reset":"Сбросить управление","mob.lost.title":"Картинка остановилась","mob.lost.sub":"Видеокарта сбросила игру. Прогресс сохранён на входе в последнюю комнату","mob.lost.restart":"Перезапустить","mob.lost.wait":"Восстанавливаю картинку…"},P_={"mob.mock.zone.move":"stick: wherever your thumb lands","mob.mock.zone.look":"look: drag","mob.mock.verb.use":"Open","mob.mock.verb.use.sub":"trade terminal","mob.mock.verb.wheel":"Turn","mob.mock.verb.wheel.sub":"keep holding","mob.mock.crouch.tag":"on","mob.btn.grab":"Grab","mob.btn.throw":"Throw","mob.btn.put":"Put down","mob.btn.use":"Interact","mob.btn.off":"Let go","mob.btn.hold":"hold","mob.tag.crouch":"on","mob.tag.crawl":"crawl","mob.start.title":"Tap to start","mob.start.sub":"This tap turns on sound and full screen","mob.resume":"Tap to continue","mob.rotate.title":"Rotate your device","mob.rotate.sub":"DRIFT is played in landscape","mob.a2hs":"Full screen in Safari: tap Share, then Add to Home Screen, and open the game from there","mob.a2hs.close":"Got it","mob.inapp":"For full screen, open the game with the ▶️ button in the bot or in Safari","mob.tut.move":"Stick on the left: put your thumb down and slide to walk. All the way: run","mob.tut.look":"Right half of the screen: drag to look around","mob.tut.jump":"Button pointing up: jump","mob.tut.crouch":"Button pointing down: crouch. Double tap: crawl","mob.tut.use":"When there is something to do nearby, a button with the action appears above the others","mob.tut.skip":"Skip","tab.controls":"Controls","mob.set.title":"Controls","mob.set.sens":"Look sensitivity","mob.set.inv":"Invert vertical look","mob.set.size":"Button size","mob.set.alpha":"Button opacity","mob.set.mirror":"Buttons left, stick right","mob.set.text":"Text size","mob.set.on":"on","mob.set.off":"off","mob.set.reset":"Reset controls","mob.lost.title":"The picture stopped","mob.lost.sub":"The graphics card reset the game. Progress is saved at the entrance to the last room","mob.lost.restart":"Restart","mob.lost.wait":"Restoring the picture…"},Ru={ru:{grip:"Захват",cut:"Резак",weld:"Сварка",toWeld:"Режим: рез",toCut:"Режим: сварка",snap:"отпусти: встанет на место среза",refuse:{мелко:"слишком мелко","много кусков":"слишком много кусков","в руках":"сначала положи",контур:"контур сам себя пересекает",объёмная:"вырез - только в плоской детали"},cutv:{снять:"снять",резать:"резать",прихватить:"прихватить",сорвать:"болты сняты: сорви захватом ({F})",перерезать:"перерезать",разбить:"разбить",взорвётся:"нагреть, взорвётся",нет:"не режется",болты:"болтов осталось {n}, они светятся"},shell:"не режется",weldv:"варить",seamHere:"стык: {R} - сварка",keyR:"R",keyF:"F",touchR:"«Режим»",touchF:"«Схватить»",world:"неподвижное",tooFar:"далеко",lead:"веди резаком: линия будущего реза",release:"отпусти - разрежет по линии",poly:"отпусти - разрежет по ломаной",hole:"отпусти - вырежет отверстие",weldno:{"нет касания":"не варится: нет касания","далеко от стыка":"не варится: далеко от стыка","не тот режим":"не тот режим: {R} - рез","не варится":"это не варится",окно:"к окну не варится",дверь:"к двери не варится",люк:"к люку не варится",прижми:"прижми деталь к стене или к другой детали",сварено:"сварено",держится:"уже держится",далеко:"не варится: далеко"},holds:"держится на {k} ({n})",heavy:"тяжело: потащишь волоком",dragging:"тяжело: тащишь волоком",strain:"шов трещит: {k} %",broke:"Шов порвался",fell:"Падение с {h} м: -{d}",died:"Разбилась. Начать сначала.",exit:"Выход. Отсек пройден.",ride:"На своей ноше не стоят: отпущена",turn:"Повернуть",hint:"WASD ход · мышь взгляд · F инструмент · R рез или сварка, с ношей - повернуть · ЛКМ действие · Q бросок · E взаимодействие · любая панель снимается с четырёх болтов",dead:"нет питания",close:"E или касание: закрыть",dying:"Люк открылся. Начать сначала.",touch:"слева ход, справа взгляд, Резак - срезать болты панелей, бросок на люк - проверить его",v:{open:"Открыть",shut:"Закрыть",breaker:"Рубильник",read:"Читать"}},en:{grip:"Grab",cut:"Cutter",weld:"Welder",toWeld:"Mode: cut",toCut:"Mode: weld",snap:"release: it fits back on the cut",refuse:{мелко:"too small to cut","много кусков":"too many pieces","в руках":"put it down first",контур:"the outline crosses itself",объёмная:"holes only in flat parts"},cutv:{снять:"remove",резать:"cut",прихватить:"tack",сорвать:"bolts are off: pull it with the grip ({F})",перерезать:"sever",разбить:"break",взорвётся:"heat it, it will blow",нет:"cannot be cut",болты:"bolts left {n}, they glow"},shell:"cannot be cut",weldv:"weld",seamHere:"seam: {R} to weld",keyR:"R",keyF:"F",touchR:'"Mode"',touchF:'"Grab"',world:"fixed structure",tooFar:"too far",lead:"move the cutter: the line of the cut",release:"release to cut along the line",poly:"release to cut along the path",hole:"release to cut the hole out",weldno:{"нет касания":"no weld: not touching","далеко от стыка":"no weld: far from the seam","не тот режим":"wrong mode: {R} to cut","не варится":"cannot be welded",окно:"no weld to a window",дверь:"no weld to a door",люк:"no weld to a hatch",прижми:"press the part against a wall or another part",сварено:"welded",держится:"already held",далеко:"no weld: too far"},holds:"held by {k} ({n})",heavy:"heavy: you will drag it",dragging:"heavy: dragging",strain:"the seam is cracking: {k}%",broke:"The seam tore",fell:"Fell {h} m: -{d}",died:"The fall was fatal. Starting over.",exit:"Exit. The compartment is cleared.",ride:"You cannot stand on what you carry: dropped",turn:"Rotate",hint:"WASD move · mouse look · F tool · R cut or weld, rotate when carrying · LMB act · Q throw · E use · panels come off after four bolts",dead:"no power",close:"E or tap to close",dying:"The hatch opened. Starting over.",touch:"left side moves, right side looks, Cutter cuts panel bolts, throw something on a hatch to test it",v:{open:"Open",shut:"Close",breaker:"Breaker",read:"Read"}}},Cu="drift.room.hint.v1",Pu="drift.mob.tut.v1";function L_(n,e,{fps:t=!1,input:i,coarse:s=!1,sim:r=null}={}){const a=Ru[e]||Ru.ru,l=n.createElement("div");l.id="rhud",l.innerHTML=`<div id="rx"></div><div id="rtgt"></div><div id="rbar"><i></i></div><div id="rhp"><i></i></div><div id="rtool"></div><div id="rhelp">${a.hint}</div>
    <div id="rnote" class="panel" hidden><div id="rnotet"></div><div id="rnotec">${a.close}</div></div><div id="rflash"></div><div id="rmsg" hidden></div>
    <div id="rhint" hidden></div><button id="rmode" type="button">${a.toWeld}</button><button id="rturn" type="button">${a.turn}</button><pre id="rfps" ${t?"":"hidden"}></pre>`,n.body.appendChild(l);const o=S=>l.querySelector("#"+S),c=n.createElement("style");c.textContent=`#rhud{position:fixed;inset:0;pointer-events:none;font:13px/1.35 system-ui,sans-serif;color:#cfe2ff;z-index:5}
  #rx{position:absolute;left:50%;top:50%;width:6px;height:6px;margin:-3px;border-radius:50%;background:#e6f0ff;box-shadow:0 0 0 1px #000a}
  #rtgt{position:absolute;left:50%;top:calc(50% + 16px);transform:translateX(-50%);padding:2px 8px;background:#0008;border-radius:3px;width:max-content;max-width:min(560px,72vw);text-align:center}
  #rtgt.no{color:#ffc98a}
  #rtgt:empty{display:none}
  #rbar{position:absolute;left:50%;top:calc(50% + 42px);width:120px;height:4px;margin-left:-60px;background:#0008;display:none}#rbar i{display:block;height:100%;width:0;background:#ffb060}
  #rhp{position:absolute;left:14px;bottom:14px;width:150px;height:8px;background:#0009;border-radius:4px;overflow:hidden;display:none}#rhp i{display:block;height:100%;background:#e0a850}#rhud.mob #rhp{bottom:auto;top:max(12px,env(safe-area-inset-top,0px));left:max(12px,env(safe-area-inset-left,0px))}
  #rtool{position:absolute;right:14px;bottom:14px;padding:5px 10px;background:#0009;border:1px solid #84cbcd;border-radius:4px}
  #rhelp{position:absolute;left:50%;bottom:14px;transform:translateX(-50%);padding:5px 10px;background:#0007;border-radius:4px;width:max-content;max-width:calc(100vw - 260px);text-align:center;font-size:12px}
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
  html,body,canvas{touch-action:none;overscroll-behavior:none}`,n.head.appendChild(c);const f=n.createElement("div");f.id="ui",n.body.appendChild(f);const p=e==="en"?P_:C_,d=(()=>{try{return localStorage}catch{return null}})(),h={getItem:S=>S===Pu?"1":d?d.getItem(S):null,setItem:(S,C)=>{S!==Pu&&d&&d.setItem(S,C)}},u=n.documentElement,_=()=>!!(u.requestFullscreen&&n.fullscreenEnabled&&!n.fullscreenElement),g=R_(f,S=>p[S]??S,{input:i,onPause:()=>{},onFull:()=>{const S=u.requestFullscreen&&u.requestFullscreen();S&&S.catch&&S.catch(()=>{})},store:h,sim:r});g.setFull(_()),n.addEventListener("fullscreenchange",()=>g.setFull(_()));const m=S=>{const C=S==="touch";f.classList.toggle("mob",C),l.classList.toggle("mob",C),n.documentElement.dataset.roomInput=S};if(m(i.device),i.onDevice(m),s){let S=!1;try{S=!!(d&&d.getItem(Cu))}catch{}if(!S){const C=o("rhint");C.textContent=a.touch,C.hidden=!1,setTimeout(()=>{C.hidden=!0},14e3);try{d&&d.setItem(Cu,"1")}catch{}}}let y=!1;const R={root:l,ui:f,touch:g,tool(S,C){o("rtool").textContent=S==="cut"?C==="weld"?a.weld:a.cut:a.grip,o("rmode").textContent=C==="weld"?a.toCut:a.toWeld,o("rmode").classList.toggle("weld",C==="weld")},onMode(S){o("rmode").addEventListener("click",S)},target(S,C,I,b){o("rtgt").classList.toggle("no",!!b);const L=S?S+(I?" · "+a.dead:C&&i.device!=="touch"?" · E: "+C.toLowerCase():""):"";o("rtgt").textContent!==L&&(o("rtgt").textContent=L)},bar(S){const C=o("rbar");C.style.display=S>0&&S<1?"block":"none",C.firstChild.style.width=Math.round(S*100)+"%"},note(S){y=!!S,o("rnote").hidden=!S,o("rnotet").textContent=S||""},get noteOpen(){return y},hp(S){o("rhp").style.display=S<99.5?"block":"none",o("rhp").firstChild.style.width=Math.max(0,S)+"%"},carry(S){R.carrying!==S&&(R.carrying=S,l.classList.toggle("carry",S))},onTurn(S){o("rturn").addEventListener("click",S)},flash(S){o("rflash").style.opacity=String(Math.min(.85,S))},msg(S){const C=o("rmsg");C.hidden=!S,C.textContent=S||""},fps(S){o("rfps").textContent=S},L:a};return o("rnote").addEventListener("click",()=>R.note("")),R}const Lu={ru:{wall:"стена",floor:"пол",ceil:"потолок",stub:"стена тамбура",door:"дверь",glass:"окно",breaker:"щиток",screen:"табло",note:"записка",cabinet:"каркас шкафа",shelf:"стеллаж",pipe:"труба",crate:"ящик",crateL:"большой ящик",tank:"баллон",top:"столешница",leg:"ножка стола",rod:"обрезок ножки",monitor:"табло",shard:"осколок",pad:"утеплитель",tube:"труба",tray:"кабельный лоток",jbox:"распредкоробка",truss:"несущий каркас",gate:"рама шлюза",tileW:"панель стены",tileF:"панель пола",tileC:"панель потолка",hull:"внешняя обшивка",hullBolt:"болт внешней обшивки",leaf:"дверца шкафа",side:"стенка шкафа",pallet:"поддон",plate:"снятая панель",plank:"полка",sheet:"лист обшивки",scrap:"обломок",piece:"{s}, кусок",frame:"{s}, каркас",hatch:"люк {n}",bolt:"болт панели",panel:"панель",vent:"вентрешётка",ventBolt:"винт решётки",cable:"кабель"},en:{wall:"wall",floor:"floor",ceil:"ceiling",stub:"passage wall",door:"door",glass:"window",breaker:"breaker",screen:"screen",note:"note",cabinet:"cabinet frame",shelf:"rack",pipe:"pipe",crate:"crate",crateL:"large crate",tank:"gas tank",top:"table top",leg:"table leg",rod:"rod offcut",monitor:"screen",shard:"shard",pad:"insulation",tube:"pipe",tray:"cable tray",jbox:"junction box",truss:"load-bearing frame",gate:"gate frame",tileW:"wall panel",tileF:"floor panel",tileC:"ceiling panel",hull:"outer plating",hullBolt:"outer plating bolt",leaf:"cabinet door",side:"cabinet wall",pallet:"pallet",plate:"loose panel",plank:"shelf",sheet:"plating sheet",scrap:"scrap",piece:"{s}, piece",frame:"{s}, frame",hatch:"hatch {n}",bolt:"panel bolt",panel:"panel",vent:"vent grille",ventBolt:"grille screw",cable:"cable"}},ao={ru:{hinge:"петля",rivet:"заклёпка",weld:"крепление",dowel:"крепление",seam:"шов",rail:"рельс",clip:"хомут",mount:"болт кронштейна",many:{hinge:"петлях",rivet:"заклёпках",weld:"креплениях",dowel:"креплениях",seam:"шве",rail:"рельсе",clip:"хомутах",mount:"болтах кронштейна"}},en:{hinge:"hinge",rivet:"rivet",weld:"fastening",dowel:"fastening",seam:"seam",rail:"rail",clip:"clip",mount:"bracket bolt",many:{hinge:"hinges",rivet:"rivets",weld:"fastenings",dowel:"fastenings",seam:"the seam",rail:"the rail",clip:"clips",mount:"bracket bolts"}}};function D_(n,e,t,i,s){if(!i)return"";const r=Lu[t]||Lu.ru,a=l=>{const o=((e.texts||{})[t]||{})["name."+l];return typeof o=="string"?o:""};if(i.kind==="hatch")return a(i.id)||r.hatch.replace("{n}",String(i.number));if((i.kind==="bolt"||i.kind==="plate")&&/^t[wesnfc]\d/.test(i.id)){const l=i.id.endsWith(".hull"),o=i.id[1];return i.kind==="bolt"?l?r.hullBolt:r.bolt:l?r.hull:o==="f"?r.tileF:o==="c"?r.tileC:r.tileW}if(i.kind==="bolt"||i.kind==="plate"){const l=n.panels.find(c=>c.id===i.id),o=l&&l.panel==="vent";return i.kind==="bolt"?o?r.ventBolt:r.bolt:a(i.id)||(o?r.vent:r.panel)}if(i.kind==="cable")return a(i.id)||r.cable;if(i.kind==="note")return a(i.id)||r.note;if(i.kind==="part"){const l=String(i.id).split("#")[0],o=s&&s.get(i.id)==="door"?n.parts.find(f=>f.id===l):null,c=a(l)||o&&a(o.prefab)||r[s&&s.get(i.id)]||"";return c&&l!==i.id?r.piece.replace("{s}",c):c}return i.kind==="static"&&i.box&&i.box.kind==="cabinet"?a(i.id)?r.frame.replace("{s}",a(i.id)):r.cabinet:i.kind==="static"&&(a(i.id)||r[i.box?i.box.kind:""])||""}const Du={g:14,gBody:9.8,jumpH:1.15,stand:1.3,crouch:.72,eye:1.2,eyeCrouch:.66,step:.28,ledge:.12,crouchSpeed:.5,crawl:xa.body,eyeCrawl:xa.eye,crawlSpeed:xa.speed,squeeze:3},Iu=Object.assign({"../rooms/ring.sec07.corridor.json":()=>uo(()=>import("./ring.sec07.corridor-L7GKCMCB.js"),[],import.meta.url),"../rooms/ring.sec07.galley.json":()=>uo(()=>import("./ring.sec07.galley-DmIsS2DK.js"),[],import.meta.url),"../rooms/ring.sec07.shaft.json":()=>uo(()=>import("./ring.sec07.shaft-BROt9FpV.js"),[],import.meta.url)}),an=new URLSearchParams(location.search),ls=document.documentElement,I_=an.get("room")||"ring.sec07.galley",Bi=an.get("lang")==="en"?"en":"ru",Nu=an.get("fps")==="1",Ta=an.get("bench")==="1",lo=an.get("phys")==="box"?"box":"rapier",Tl=an.get("touch")==="1"||an.get("touch")!=="0"&&matchMedia("(pointer: coarse)").matches,ur=["high","medium","lite"].includes(an.get("q"))?an.get("q"):Tl?"lite":"high",N_=Math.max(0,Math.min(200,parseInt(an.get("pieces")||"0",10)||0)),U_=Math.max(0,Math.min(5e3,parseInt(an.get("seam")||"0",10)||0)),co=(an.get("fall")||"").split(",").map(Number),z_=co.length===2&&co.every(Number.isFinite)?{safe:co[0],perM:co[1]}:null,Is=new Set((an.get("mut")||"").split(",").filter(Boolean));ls.dataset.room="loading";const F_=n=>{ls.dataset.room="error",ls.dataset.roomError=String(n&&n.message||n);const e=document.getElementById("err");e&&(e.hidden=!1,e.textContent="Комната не загрузилась: "+ls.dataset.roomError),console.error(n)};async function k_(n){const e=`../rooms/${n}.json`;if(!Iu[e])throw new Error("нет комнаты "+n);const t=await Iu[e]();return JSON.parse(JSON.stringify(t.default||t))}async function O_(){const n=document.createElement("canvas");document.body.appendChild(n);const e=new Mx({canvas:n,antialias:!1,powerPreference:"high-performance",preserveDrawingBuffer:Ta}),t={lost:0,restored:0};n.addEventListener("webglcontextlost",D=>{t.lost++,ls.dataset.roomGlLost=String(t.lost),D.preventDefault()}),n.addEventListener("webglcontextrestored",()=>{t.restored++}),e.shadowMap.enabled=!0,e.shadowMap.type=mr,e.toneMapping=ci,e.autoClear=!1,e.info.autoReset=!1;const i={...cv[ur]},s=ur==="lite"?Math.min(devicePixelRatio,1.5)*.8:Math.min(devicePixelRatio,2);e.setPixelRatio(s),e.setSize(innerWidth,innerHeight);const r=new rf;r.fog=new kl(724242,.012);const a=new Rr(e),l=a.fromScene(new bx,.04).texture;a.dispose(),r.environment=Is.has("dark")?null:l,r.environmentIntensity=.06;const o=new Sh(16763024,2365970,Is.has("dark")?0:.2);r.add(o);const c=new Pn(70,innerWidth/innerHeight,.05,200);r.add(c);const f=lv(e,r,c,null);f.configure({msaa:i.msaa,bloom:i.bloom,hdr:i.hdr,prepass:!1,ldr:!1}),f.uniforms.uTint.value.set(1.05,1,.93);const p=hv({coarse:Tl});pv(window,document,p);const d=(an.get("sa")||"").split(",").map(Number),h=L_(document,Bi,{fps:Nu,input:p,coarse:Tl,sim:d.length===4&&d.every(Number.isFinite)?d:null});Ta&&an.get("hud")!=="1"&&(h.root.style.display="none",h.ui.style.display="none");let u=null;async function _(D,w=null){const k=performance.now(),K=zv(D);if(K.length)throw new Error("схема: "+K.slice(0,3).map(we=>we.path+" "+we.msg).join("; "));const X=Rv(D),[ce,xe,me]=X.size,A={x0:-2.4,x1:ce+2.4,z0:-2.4,z1:me+2.4,h:xe},T=await $v(lo,{bounds:A,bind:!1});If({PH:Du,playerR:Rn.r,spawn:{x:X.spawn.x,z:X.spawn.z,yaw:X.spawn.yaw,pitch:0},speed:3.2,boundsAt:()=>A,placeAt:()=>!0,roomHeight:()=>xe});const Z=v_(X,D,T,{mut:Is,pieces:N_,seam:U_,fall:z_}),Me=E_(X,D,{scene:r,lang:Bi,mut:Is,tier:Is.has("dark")?{...i,spots:0,points:0}:i});Is.has("dark")&&Me.darken(),Me.hide((an.get("hide")||"").split(",").filter(Boolean));const ee=Zx(X.spawn.x,X.spawn.z);ee.yaw=X.spawn.yaw,ee.pitch=-.08,ee.respawn=()=>{ee.x=X.spawn.x,ee.z=X.spawn.z,ee.y=0,ee.vy=0,ee.yaw=X.spawn.yaw},w&&Z.restore(w);const ve=performance.now()-k;return{room:D,C:X,phys:T,sys:Z,view:Me,pl:ee,buildMs:ve}}function g(){u&&(u.view.dispose(),u.phys.dispose(),u=null)}let m="grip",y=null;const R=vv();h.tool(m);let S="cut";const C=D=>{S=D,h.tool(m,S)},I=()=>{if(u&&m==="grip"&&u.sys.S.held){u.sys.turnHeld(u.pl);return}m!=="cut"&&(m="cut"),C(S==="cut"?"weld":"cut")};h.onMode(()=>C(S==="cut"?"weld":"cut")),h.onTurn(()=>{u&&u.sys.turnHeld(u.pl)});const b={press:new Set,fire:!1,rmb:!1},L=(D,w)=>{u&&(u.pl.yaw-=D*.0022,u.pl.pitch=Math.max(-1.45,Math.min(1.45,u.pl.pitch-w*.0022)))};addEventListener("keydown",D=>{D.repeat||(p.setDevice("kbm"),p.keyDown(D.code),D.code==="KeyR"&&I(),["Space","KeyQ","KeyF","KeyE"].includes(D.code)&&D.preventDefault())}),addEventListener("keyup",D=>p.keyUp(D.code)),addEventListener("pointermove",D=>{D.pointerType==="mouse"&&(D.movementX||D.movementY)&&p.setDevice("kbm")},{passive:!0}),n.addEventListener("mousedown",D=>{if(p.device!=="touch"){if(h.noteOpen){h.note("");return}if(document.pointerLockElement!==n){try{const w=n.requestPointerLock();w&&w.catch&&w.catch(()=>{})}catch{}return}D.button===0&&(b.fire=!0,b.press.add("fire")),D.button===2&&(b.press.add("throw"),b.rmb=!0)}}),addEventListener("mouseup",D=>{D.button===0&&(b.fire=!1),D.button===2&&(b.rmb=!1)}),addEventListener("blur",()=>{b.fire=!1,b.rmb=!1}),addEventListener("contextmenu",D=>D.preventDefault()),addEventListener("mousemove",D=>{document.pointerLockElement===n&&L(D.movementX,D.movementY)}),addEventListener("resize",()=>{e.setSize(innerWidth,innerHeight),c.aspect=innerWidth/innerHeight,c.updateProjectionMatrix(),f.resize()});const B=D=>[D.x,D.y+D.eye,D.z],N=D=>{const w=Math.cos(D.pitch);return[-Math.sin(D.yaw)*w,Math.sin(D.pitch),-Math.cos(D.yaw)*w]},H=D=>D_(u.C,u.room,Bi,D,u.sys.S.partKind);function V(D,w,k){const{sys:K}=u,X=K.S,ce=h.L,xe=H(D);if(X.drag)return{text:ce.dragging};if(X.held&&K.cutter.snapPose(X.held))return{text:ce.snap};if(m==="grip"){const Z=!X.held&&!X.noteHeld?K.grabInfo(D):null;return Z?Z.why==="тяжело"?{text:`${xe} · ${ce.heavy}`}:{text:`${xe} · ${ce.holds.replace("{k}",ao[Bi].many[Z.kind]||ao[Bi].many.weld).replace("{n}",Z.n)}`,no:!0}:{text:xe}}if(X.strain&&X.t-X.strain.t<.4)return{text:ce.strain.replace("{k}",Math.round(X.strain.k*100)),no:!0};if(X.stroke&&b.fire&&S==="cut"){const Z=X.stroke,Me=H({kind:"part",id:Z.id});return Z.why?{text:`${Me} · ${ce.refuse[Z.why]||Z.why}`,no:!0}:Z.ok?{text:`${Me} · ${Z.kind==="loop"?ce.hole:Z.kind==="open"?ce.poly:ce.release}`}:{text:`${Me} · ${ce.lead}`,no:Z.t>.5}}if(!D&&!(S==="weld"&&X.held)){const Z=K.aim(w,k,6);return Z&&Z.kind==="part"?{text:`${H(Z)} · ${S==="weld"?ce.weldno.далеко:ce.tooFar}`,no:!0}:{text:""}}if(S==="weld"&&!(D&&D.kind==="plate"&&D.seated)){const Z=K.cutter.weldInfo(D);return Z.why?{text:`${X.held?H({kind:"part",id:X.held}):xe} · ${ce.weldno[Z.why]}`,no:!Z.done}:{text:`${H({kind:"part",id:Z.id})} + ${Z.with==="world"?Z.box&&H({kind:"static",id:Z.box.prefab||Z.box.id,box:Z.box})||ce.world:H({kind:"part",id:Z.with})} - ${ce.weldv}`}}if(X.refused&&X.t-X.refused.t<1.2&&b.fire)return{text:`${xe} · ${ce.refuse[X.refused.why]}`,no:!0};const me=K.cutInfo(D);if(!me)return{text:xe};if(me.j)return{text:`${ao[Bi][K.cutter.jointKind(me.j)]||ao[Bi].weld} - ${ce.cutv[me.verb]}`};if(me.verb==="нет")return{text:`${xe} · ${me.shell?ce.shell:ce.cutv.нет}`,no:!0};if(me.verb==="болты")return{text:`${xe} · ${ce.cutv.болты.replace("{n}",me.n)}`};const A=me.verb==="резать"&&D.kind==="part"?K.cutter.weldInfo(D):null,T=A&&!A.why&&A.with!=="world"&&Math.hypot(...A.at.map((Z,Me)=>Z-D.at[Me]))<.05;return{text:`${xe} - ${ce.cutv[me.verb]}${T?" · "+ce.seamHere:""}`}}function Q(D){if(m!=="cut"||S!=="cut"||!D)return[];const{sys:w}=u,k=[];if(D.kind==="bolt"||D.kind==="plate"){const K=w.panels.view(D.id);if(K.plate==="on"&&!K.seated)for(let X=0;X<4;X++)K.bolts[X]||k.push({at:w.boltAt(D.id,X),hot:D.kind==="bolt"?D.i===X:X===K.bolts.findIndex(ce=>!ce)})}else if(D.kind==="part"){const K=w.cutter.nearJoint(D.id,D.at);for(const X of w.cutter.jointsOf(D.id))if(w.cutter.jointKind(X)!=="seam"||X===K)for(const ce of w.cutter.spots(X))k.push({at:ce,hot:X===K})}return k}let q="grip",ne={text:""},he="",re=-1;const Pe=D=>{const w=u.sys.usable(D);return w?h.L.v[w]:""},de={frame:[],phys:[],gap:[]},be=(D,w)=>{D.push(w),D.length>240&&D.shift()},ge=D=>{if(!D.length)return 0;const w=D.slice().sort((k,K)=>k-K);return w[Math.floor(.95*(w.length-1))]},Te=8,Be={cut:null,blast:null};let ye=0;function Ne(D,w){const k=u.sys.S;for(;ye<k.evN;ye++){const K=k.events[k.events.length-(k.evN-ye)];if(!K)continue;const X=K.kind==="explode"?"blast":K.kind==="joint_cut"||K.kind==="split"?"cut":"";X&&(Be[X]={until:k.t+Te,f:Be[X]&&k.t<Be[X].until?Be[X].f:[],p:Be[X]&&k.t<Be[X].until?Be[X].p:[]})}for(const K of Object.values(Be))K&&k.t<K.until&&K.f.length<2e3&&(K.f.push(D),K.p.push(w))}let Fe=0,Oe=-9;const ke=D=>{h.msg(D),Oe=u.sys.S.t};function Ke(){const D=u.sys.S,w=h.L;for(Fe>D.evN&&(Fe=0);Fe<D.evN;Fe++){const k=D.events[D.events.length-(D.evN-Fe)];k&&(k.kind==="seam_broke"?ke(w.broke):k.kind==="fall"?ke(w.fell.replace("{h}",k.h.toFixed(1)).replace("{d}",k.dmg)):k.kind==="death"?ke(k.cause==="fall"?w.died:w.dying):k.kind==="exit"?ke(w.exit):k.kind==="ride_off"&&ke(w.ride))}Oe>-5&&(D.t-Oe>2.5||D.t<Oe)&&(h.msg(""),Oe=-9),h.hp(D.hp),h.carry(!!D.held&&!D.drag)}function pt(D){if(!u)return;const{sys:w,pl:k}=u;p.frame(b,L),R.sense(b),h.noteOpen&&((b.press.has("e")||b.fireNew)&&h.note(""),b.press.clear(),b.fire=!1);for(const Le of R.modes(b,m))m=Le,h.tool(m,S);k.input.forward=b.fwd||0,k.input.strafe=b.strafe||0,k.input.jump=b.press.has("jump"),k.input.crouch=!!b.crouch,k.input.crawl=!!b.crawl;const K=w.burden(),X=w.S.stun>0;k.speed=(b.run?5.2:3.2)*K.speed*(X?.25:1),k.jumpH=Du.jumpH*K.jump,X&&(k.input.jump=!1),He(D);const ce=B(k),xe=N(k);if(y=m!=="cut"?w.aimGrip(ce,xe,2.3):S==="weld"?w.aimWeld(ce,xe,2.6):w.aim(ce,xe,2.6),b.press.has("e")&&w.use(y)==="запись"){const $=u.C.prefabOf[y.id];h.note((u.room.texts[Bi]||u.room.texts.ru)[$.text])}const me=R.grip(b,{able:m==="grip"&&!h.noteOpen,holding:!!(w.S.held||w.S.noteHeld),t:w.S.t});b.fireNew&&(q=m);const A=()=>w.S.noteHeld?w.notes.stick(y,xe):w.drop();me==="take"?w.grab(y)&&R.took(w.S.t):me==="drop"&&q==="grip"&&A();const T=R.throw(b,{holding:!!(w.S.held||w.S.noteHeld),t:w.S.t});T&&(w.S.noteHeld?A():w.throwHeld(xe,T)),w.S.firing=R.cutting(b,m)&&S==="cut";const Z=R.cutting(b,m)&&(y||S==="weld"&&w.S.held)?w.cut(y,D,{o:ce,d:xe},S):"",Me=w.step(D,k);be(de.phys,Me),Ke(),b.press.clear();const ee=!!(y&&w.doorOf(y)&&!w.isOn(w.doorOf(y))),ve=H(y),we=Pe(y),pe=w.canGrab(y),ue=[y&&y.kind+y.id+(y.i??""),m,S,w.S.held,w.S.drag].join("|");return(ue!==he||w.S.t-re>.1||w.S.t<re)&&(ne=V(y,ce,xe),he=ue,re=w.S.t),h.target(ne.text.replace(/\{([RF])\}/g,(Le,$)=>h.L[(p.device==="touch"?"touch":"key")+$]),we,ee,ne.no),u.view.marks(Q(y)),h.touch.update({act:we?"e":pe?"grip":y&&w.canCut(y)?"cut":"",text:we||(pe?ve:""),hold:!1,ring:0,held:!!(w.S.held||w.S.noteHeld),ladder:!1,heat:0,over:!1,kickCd:0,slow:y&&y.kind==="bolt"?.55:1,hp:1}),h.bar(Z?w.S.stroke?w.S.stroke.prog:w.progress(y):0),h.flash(w.S.flash),Me}function He(D){const{sys:w,pl:k}=u,K=w.playerCol(k);if(jx(k,K.col,D,K.extra,K.soft),k.kx||k.kz){const X=k.x,ce=k.z;k.x+=k.kx*D,k.z+=k.kz*D,Lo(k,X,ce,[K.col.boxes,K.extra],[],Rn.r,xe=>xe.y1>k.y+Rn.step&&xe.y0<k.y+k.h),k.kx*=Math.pow(.05,D),k.kz*=Math.pow(.05,D)}}function Je(D){if(!u)return;const{pl:w,view:k}=u,K=B(w);return Ln(K[0],K[1],K[2],c.position),is(K[2],c.quaternion).multiply(new en().setFromEuler(new dn(w.pitch,w.yaw,0,"YXZ"))),k.update(u.sys,D,K,w),e.info.reset(),f.render(),e.info.render}let nt=0,Qe=0,vt=0,ot=0;function bt(D){if(Qe++,D-nt<500)return;vt=Qe*1e3/(D-nt),Qe=0,nt=D;const w=u.phys.stats(),k=u.view.stats(),K=performance.memory?Math.round(performance.memory.usedJSHeapSize/1048576)+" МБ":"н/д",X=(xe,me)=>{const A=Be[xe];return A&&A.f.length?`
после ${me} (${Te} с): кадр p95 ${ge(A.f).toFixed(1)}, худший ${Math.max(...A.f).toFixed(1)} мс; физика p95 ${ge(A.p).toFixed(2)}, худший ${Math.max(...A.p).toFixed(2)} мс`:""},ce=`${u.room.id} · ${lo} · ${ur}
кадр ${vt.toFixed(0)} к/с, p95 ${ge(de.frame).toFixed(1)} мс · физика p95 ${ge(de.phys).toFixed(2)} мс
тела: не спят ${w.awake}, спят ${w.asleep} из ${w.total} · куски ${u.sys.S.pieces.size} из ${u.sys.cutter.cap}, слито ${u.sys.S.merged.length}
вызовы ${ot}, треуг. ${k.tris}, память ${K}, геом. ${e.info.memory.geometries}, текст. ${e.info.memory.textures}
кадр в кадр p95 ${ge(de.gap).toFixed(1)} мс, экран ${innerWidth}x${innerHeight} x${devicePixelRatio.toFixed(2)}${X("cut","реза")}${X("blast","взрыва")}`;h.fps(ce),ls.dataset.roomFps=vt.toFixed(1)}const st=an.get("src");u=await _(st&&/^[a-z0-9_./-]+\.json$/i.test(st)&&!st.includes("..")?await(await fetch(st,{cache:"no-store"})).json():await k_(I_)),h.note("");let zt=performance.now(),Ie=zt,De=0;if(!Ta){const D=w=>{const k=Math.min(.05,(w-zt)/1e3);zt=w;const K=performance.now();be(de.gap,w-Ie),Ie=w;const X=pt(k);De+=k;const ce=Je(De);ot=ce?ce.calls:0;const xe=performance.now()-K;be(de.frame,xe),Ne(xe,X||0),Nu&&bt(w),requestAnimationFrame(D)};requestAnimationFrame(D)}const $e=1/60,Ze={get id(){return u&&u.room.id},state(){const D=u.sys.S;return{id:u.room.id,phys:lo,tier:ur,t:+D.t.toFixed(2),player:{x:+u.pl.x.toFixed(3),y:+u.pl.y.toFixed(3),ground:u.pl.ground,z:+u.pl.z.toFixed(3),yaw:+u.pl.yaw.toFixed(3),pitch:+u.pl.pitch.toFixed(3),crouch:!!u.pl.crouch},tool:m,held:D.held,target:y&&{kind:y.kind,id:y.id},lit:u.C.lights.map(w=>[w.id,u.sys.isOn(w.id)]),joints:[...D.joints.keys()],cables:[...D.cablesCut],windows:[...D.windows].map(([w,k])=>[w,k.broken]),p:+D.p.toFixed(3),doors:[...D.doors].map(([w,k])=>[w,+k.open.toFixed(2)]),hp:+D.hp.toFixed(1),stun:+D.stun.toFixed(2),exit:D.exit,anchored:[...D.anchored],strain:D.strain,pieces:[...D.pieces.keys()],merged:D.merged.map(w=>w.id),noteHeld:D.noteHeld,notes:[...D.notes.values()].map(w=>[w.id,w.on]),panels:u.C.panels.map(w=>[w.id,u.sys.panels.view(w.id).plate]),burned:D.burned,ejected:D.ejected,deaths:D.deaths,events:D.events.slice(-40),bodies:u.phys.stats()}},put(D,w){const k=u.pl;if(k.x=D[0],k.z=D[1],k.y=D[2]||0,k.vy=0,k.ground=!D[2],u.sys.S.peak=null,w){const K=B(k),X=[w[0]-K[0],w[1]-K[1],w[2]-K[2]];k.yaw=Math.atan2(-X[0],-X[2]),k.pitch=Math.atan2(X[1],Math.hypot(X[0],X[2]))}return Ze.aim()},frameIn(D){const w=u.pl;D.yaw!==void 0&&(w.yaw=D.yaw),D.pitch!==void 0&&(w.pitch=D.pitch),D.tool&&D.tool!==m&&(m=D.tool,h.tool(m,S)),D.mode&&D.mode!==S&&C(D.mode),D.turn&&u.sys.turnHeld(w);const k={fwd:"KeyW",back:"KeyS",left:"KeyA",right:"KeyD"};for(const X in k)D[X]?p.keyDown(k[X]):p.keyUp(k[X]);D.jump&&p.press("jump");const K=b.fire;b.fire=!!D.fire,D.fire&&!K&&b.press.add("fire"),pt($e),De+=$e},frameEnd(){for(const D of["KeyW","KeyS","KeyA","KeyD"])p.keyUp(D);b.fire=!1},aim(){return y=u.sys.aim(B(u.pl),N(u.pl),m==="cut"?2.6:2.3),y&&{kind:y.kind,id:y.id,t:+y.t.toFixed(2),i:y.i}},tool(D,w){return m=D,w&&(S=w),h.tool(D,S),m},act(D,w=0){const k=()=>B(u.pl),K=()=>N(u.pl);if(D==="cut"){m="cut";let X=0;for(let ce=0;ce<Math.round(w/$e);ce++)y=u.sys.aim(k(),K(),2.6),y&&(u.sys.cut(y,$e,{o:k(),d:K()},S),X++),u.sys.step($e,u.pl);return X}return D==="grab"?(m="grip",y=u.sys.aimGrip(k(),K(),2.3),u.sys.grab(y)):D==="use"?(y=u.sys.aim(k(),K(),2.3),u.sys.use(y)):D==="throw"?u.sys.throwHeld(K(),w||1):null},advance(D){const w=Math.round(D/1e3/$e);for(let k=0;k<w;k++)u.pl.input.forward=0,u.pl.input.strafe=0,u.pl.input.jump=!1,He($e),u.sys.step($e,u.pl);return De+=w*$e,w},drive(D,w={}){const k=Math.max(1,Math.round(D/1e3/$e)),K={fwd:"KeyW",back:"KeyS",left:"KeyA",right:"KeyD",jump:"Space",crouch:"KeyC"},X=Object.keys(K).filter(xe=>w[xe]);for(const xe of X)p.keyDown(K[xe]);w.fire&&(b.fire=!0,b.press.add("fire"));for(const xe of w.press||[])p.press(xe);const ce=xe=>{const me=B(u.pl),A=[xe[0]-me[0],xe[1]-me[1],xe[2]-me[2]];u.pl.yaw=Math.atan2(-A[0],-A[2]),u.pl.pitch=Math.atan2(A[1],Math.hypot(A[0],A[2]))};for(let xe=0;xe<k;xe++){if(w.from){const me=k>1?xe/(k-1):1;ce(w.to?w.from.map((A,T)=>A+(w.to[T]-A)*me):w.from)}pt($e)}for(const xe of X)p.keyUp(K[xe]);return w.fire&&(b.fire=!1),De+=k*$e,k},frame(){const D=Je(De);return{calls:D.calls,triangles:D.triangles}},frameFrom(D,w){const k=u.pl;Ze.ghost||(Ze.ghost=new xt(new Bl(.26,.78,6,16),new xn({color:14263361,roughness:.5,emissive:3810308})),r.add(Ze.ghost));const K=Ze.ghost;K.visible=!0,Ln(k.x,k.y+.65,k.z,K.position),is(k.z,K.quaternion),u.view.update(u.sys,De,D,k),Ln(D[0],D[1],D[2],c.position);const X=Ln(w[0],w[1],w[2],new se);c.up.set(0,1,0).applyQuaternion(is(D[2])),c.lookAt(X),e.info.reset(),f.render(),K.visible=!1,c.up.set(0,1,0)},idFrame(){const D=u.view.keyMeshes(),w=[],k=[...D.keys()],K=new Map;r.traverse(ee=>{(ee.isMesh||ee.isInstancedMesh)&&w.push([ee,ee.material,ee.visible])});const X=new rs({color:0});for(const[ee]of w)ee.material=X;k.forEach((ee,ve)=>{const we=new ut().setHSL(ve/k.length,1,.5),pe=new rs({color:we});K.set(ee,we);for(const ue of D.get(ee))ue.visible&&(ue.material=pe)});const ce=r.fog;r.fog=null;const xe=new it;e.getDrawingBufferSize(xe);const me=new Sn(Math.max(1,xe.x>>1),Math.max(1,xe.y>>1));e.setRenderTarget(me),e.setClearColor(0,1),e.clear();const A=B(u.pl);Ln(A[0],A[1],A[2],c.position),is(A[2],c.quaternion).multiply(new en().setFromEuler(new dn(u.pl.pitch,u.pl.yaw,0,"YXZ"))),u.view.update(u.sys,De,A,u.pl);for(const[ee]of w)ee.isMesh&&ee.material===X&&ee.material.transparent&&(ee.visible=!1);e.render(r,c);const T=new Uint8Array(me.width*me.height*4);e.readRenderTargetPixels(me,0,0,me.width,me.height,T),e.setRenderTarget(null),me.dispose(),r.fog=ce;for(const[ee,ve,we]of w)ee.material=ve,ee.visible=we;const Z=Object.fromEntries(k.map(ee=>[ee,0])),Me=k.map(ee=>K.get(ee)).map(ee=>[ee.r*255,ee.g*255,ee.b*255]);for(let ee=0;ee<T.length;ee+=4){if(T[ee]+T[ee+1]+T[ee+2]<30)continue;let ve=-1,we=1e9;Me.forEach((pe,ue)=>{const Le=Math.abs(pe[0]-T[ee])+Math.abs(pe[1]-T[ee+1])+Math.abs(pe[2]-T[ee+2]);Le<we&&(we=Le,ve=ue)}),ve>=0&&we<60&&Z[k[ve]]++}return{px:Z,total:me.width*me.height}},passCalls(){Je(De),e.info.reset(),e.setRenderTarget(null);const D=[e.shadowMap.autoUpdate,e.shadowMap.needsUpdate];e.shadowMap.autoUpdate=!1,e.shadowMap.needsUpdate=!1;for(const k of u.view.pool.spots)k.shadow.needsUpdate=!1;e.render(r,c),[e.shadowMap.autoUpdate,e.shadowMap.needsUpdate]=D;const w={calls:e.info.render.calls,triangles:e.info.render.triangles};return Je(De),w},weldMany(D,w=10){const k=u.sys,K=k.cutter,X=k.phys,ce=k.S,[xe,me,A]=u.C.size;Ze.cutMany(D+w);const T=[...ce.pieces.keys()].sort((pe,ue)=>Math.max(...X.half(pe))-Math.max(...X.half(ue))),Z=T.length&&D>30?.5:.8,Me=Math.floor((xe-.8)/Z),ee=Math.floor((A-.8)/Z);for(const pe of T)for(const ue of K.jointsOf(pe))k.cutJoint(ue.id);u.sys.step($e,null);let ve=0,we=0;for(const pe of T){if(we>=D||ve>=Me*ee)break;const ue=X.half(pe),Le=.6+ve%Me*Z,$=.6+Math.floor(ve/Me)*Z,Ae=X.pose(pe);ve++,X.setPose(pe,[Le,me-ue[1]-.004,$],[0,0,0,1],!1);let oe={};for(let Ue=0;Ue<70&&!oe.id&&!oe.why;Ue++)oe=K.weld({kind:"part",id:pe,at:[Le,me-.001,$]},$e),ce.t+=$e;oe.id?we++:X.setPose(pe,Ae.p,Ae.q,!1)}return k.anchors(!0),we},stripRoom(D=10,w=3,k=!0){const K=u.sys,X=K.phys,ce=K.S,xe=K.tiles,me={panels:0,holes:0,breach:!1},A=ee=>{for(let we=0;we<4;we++)K.panels.cut(ee.id,we,99);K.grab({kind:"plate",id:ee.id});const ve=ce.held;ve&&(K.letGo(),X.setPose(ve,[1.5+me.panels%5*1.05,.05+.03*Math.floor(me.panels/5),3.2],[0,0,0,1],!1),me.panels++)},T=xe.filter(ee=>!ee.hull&&ee.u1-ee.u0>.9&&ee.v1-ee.v0>.9),Z=["W","N","E","F","C","S"].flatMap(ee=>T.filter(ve=>ve.side===ee).slice(0,2));for(const ee of Z)me.panels<D&&A(ee);const Me=(ee,ve,we,pe,ue)=>[...Array(10).keys()].map(Le=>{const $=Le/10*Math.PI*2;return[Math.cos($)*ue,Math.sin($)*ue]});for(const ee of["sheet1","table.top","door_a.door","cupboard.leaf0","cupboard.l"]){if(me.holes>=w||!X.has(ee))continue;const ve=X.half(ee),we=ve.indexOf(Math.min(...ve)),pe=[0,0,0];pe[we]=1;const ue=[0,0,0];ue[we]=ve[we];const Le=Math.min(...ve.filter(($,Ae)=>Ae!==we))*.55;K.cutter.holeAt(ee,pe,ue,Me(0,0,0,0,Le))&&me.holes++}if(k){const ee=xe.find(ve=>ve.hull&&ce.openTiles.includes(ve.tileOf));ee&&(K.blowHull(ee.id),me.breach=!0)}return me},stats(){const D=u.phys.stats(),w=u.view.stats();return{phys:lo,tier:ur,bodies:D,tris:w.tris,meshes:w.meshes,buildMs:+u.buildMs.toFixed(1),geometries:e.info.memory.geometries,textures:e.info.memory.textures,heapMB:performance.memory?+(performance.memory.usedJSHeapSize/1048576).toFixed(1):null,physP95:+ge(de.phys).toFixed(3),frameP95:+ge(de.frame).toFixed(2),fps:vt?+vt.toFixed(1):null}},nan(){const D=[];return r.updateMatrixWorld(!0),r.traverse(w=>{w.matrixWorld.elements.some(k=>!Number.isFinite(k))&&D.push(w.type+":"+(w.userData.part||w.userData.door||w.userData.hatch||w.name||""))}),{objects:D.slice(0,20),cam:c.matrixWorld.elements.every(Number.isFinite),lights:u.view.pool.spots.concat(u.view.pool.points).map(w=>[+w.intensity.toFixed(2),w.position.toArray().every(Number.isFinite)])}},gl(){return{lost:t.lost,restored:t.restored,programs:(e.info.programs||[]).length,shadows:u.view.pool.spots.map(D=>D.shadow.needsUpdate),calls:ot}},perfReset(){de.frame.length=0,de.phys.length=0},perfRun(D=120){const w=[];for(let k=0;k<D;k++)pt($e),De+=$e,w.push(de.phys[de.phys.length-1]);return{physP95:+ge(w).toFixed(3),physMax:+Math.max(...w).toFixed(3)}},frameRun(D=10){const w=[],k=[],K=e.getContext(),X=new Uint8Array(4);for(let xe=0;xe<D;xe++){const me=performance.now();pt($e),De+=$e;const A=Je(De);k.push(performance.now()-me),K.readPixels(0,0,1,1,K.RGBA,K.UNSIGNED_BYTE,X),w.push(performance.now()-me),ot=A.calls}const ce=w.slice().sort((xe,me)=>xe-me);return{frameP95:+ge(w).toFixed(1),frameP50:+ce[Math.floor(D/2)].toFixed(1),cpuP50:+k.slice().sort((xe,me)=>xe-me)[Math.floor(D/2)].toFixed(1),calls:ot}},cutMany(D){const w=u.sys.cutter,k=u.sys.phys,K=u.sys.S;for(let X=0;X<400&&K.pieces.size<D;X++){const ce=k.bodies().filter(me=>w.canSplit(me)).map(me=>({id:me,h:k.half(me)})).sort((me,A)=>A.h[0]*A.h[1]*A.h[2]-me.h[0]*me.h[1]*me.h[2]);if(!ce.length)break;let xe=!1;for(const{id:me,h:A}of ce){const T=A.indexOf(Math.max(...A)),Z=[.25,.2,.15];if(Z[T]=1,w.splitPart(me,Z,0)){xe=!0;break}}if(!xe)break}return K.pieces.size},snapshot(){return JSON.stringify(u.sys.snapshot())},async reload(D){const w=u.room,k={x:u.pl.x,z:u.pl.z,yaw:u.pl.yaw,pitch:u.pl.pitch},K=performance.now();g();const X=performance.now();return u=await _(w,D?JSON.parse(D):null),Object.assign(u.pl,k),Je(De),{unloadMs:+(X-K).toFixed(1),loadMs:+(performance.now()-X).toFixed(1)}},hud:()=>({target:document.getElementById("rtgt").textContent,hint:document.getElementById("rhint").hidden?"":document.getElementById("rhint").textContent,note:document.getElementById("rnote").hidden?"":document.getElementById("rnotet").textContent}),sys:()=>u.sys,view:()=>u.view};window.__room=Ze,Je(0),ls.dataset.room="ready"}O_().catch(F_);
