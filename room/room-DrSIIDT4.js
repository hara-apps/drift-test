(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const gu="modulepreload",xu=function(n,e){return new URL(n,e).href},zo={},ha=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let l=function(u){return Promise.all(u.map(h=>Promise.resolve(h).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),c=o?.nonce||o?.getAttribute("nonce");s=l(t.map(u=>{if(u=xu(u,i),u in zo)return;zo[u]=!0;const h=u.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(i)for(let m=a.length-1;m>=0;m--){const x=a[m];if(x.href===u&&(!h||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":gu,h||(f.as="script"),f.crossOrigin="",f.href=u,c&&f.setAttribute("nonce",c),document.head.appendChild(f),h)return new Promise((m,x)=>{f.addEventListener("load",m),f.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})};const no="187",_u=0,Oo=1,vu=2,cs=1,yu=2,rs=3,ai=0,Vt=1,Pn=2,Li=0,us=1,Bo=2,ko=3,Go=4,Mu=5,Ci=100,Su=101,bu=102,Eu=103,wu=104,Tu=200,Au=201,Ru=202,Cu=203,lc=204,cc=205,Pu=206,Lu=207,Du=208,Iu=209,Uu=210,Nu=211,Fu=212,zu=213,Ou=214,pa=0,ma=1,ga=2,ps=3,xa=4,_a=5,va=6,ya=7,io=0,Bu=1,ku=2,Sn=0,uc=1,fc=2,dc=3,hc=4,pc=5,mc=6,gc=7,xc=300,Ui=301,ms=302,Rr=303,Cr=304,dr=1e3,Dn=1001,Ma=1002,Dt=1003,Gu=1004,As=1005,Zt=1006,Pr=1007,In=1008,Jt=1009,_c=1010,vc=1011,gs=1012,so=1013,bn=1014,pn=1015,gn=1016,ro=1017,ao=1018,Ni=1020,yc=35902,Mc=35899,Sc=1021,bc=1022,Mn=1023,$n=1026,Xn=1027,oo=1028,lo=1029,oi=1030,co=1031,uo=1033,nr=33776,ir=33777,sr=33778,rr=33779,Sa=35840,ba=35841,Ea=35842,wa=35843,Ta=36196,Aa=37492,Ra=37496,Ca=37488,Pa=37489,hr=37490,La=37491,Da=37808,Ia=37809,Ua=37810,Na=37811,Fa=37812,za=37813,Oa=37814,Ba=37815,ka=37816,Ga=37817,Ha=37818,Va=37819,Wa=37820,Xa=37821,qa=36492,Ya=36494,$a=36495,Ka=36283,Ja=36284,pr=36285,Za=36286,Hu=3200,mr=0,Vu=1,Ln="",Kt="srgb",gr="srgb-linear",xr="linear",ct="srgb",Lr=7680,Wu=519,Xu=512,qu=513,Yu=514,Ec=515,$u=516,Ku=517,wc=518,Tc=519,Ju=35044,Ho="300 es",mn=2e3,xs=2001;function Zu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function _r(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Qu(){const n=_r("canvas");return n.style.display="block",n}const Vo={};function Wo(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ac(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function He(...n){n=Ac(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function rt(...n){n=Ac(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ar(...n){const e=n.join(" ");e in Vo||(Vo[e]=!0,He(...n))}function ju(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const ef={[pa]:pa,[ga]:va,[xa]:xa,[ps]:_a,[ma]:ma,[va]:ga,[ya]:ya,[_a]:ps};class ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dr=Math.PI/180,vr=180/Math.PI;function Ms(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function Qe(n,e,t){return Math.max(e,Math.min(t,n))}function tf(n,e){return(n%e+e)%e}function Ir(n,e,t){return(1-t)*n+t*e}function nf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function fo(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function sf(n,e){if(e.constructor===Float32Array)return n;const t=fo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function rf(n,e){if(e.constructor===Float32Array)return n;const t=fo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}class ke{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3],d=r[a+0],f=r[a+1],m=r[a+2],x=r[a+3];if(h!==x||c!==d||l!==f||u!==m){let g=c*d+l*f+u*m+h*x;g<0&&(d=-d,f=-f,m=-m,x=-x,g=-g);let p=1-o;if(g<.9995){const v=Math.acos(g),E=Math.sin(v);p=Math.sin(p*v)/E,o=Math.sin(o*v)/E,c=c*p+d*o,l=l*p+f*o,u=u*p+m*o,h=h*p+x*o}else{c=c*p+d*o,l=l*p+f*o,u=u*p+m*o,h=h*p+x*o;const v=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=v,l*=v,u*=v,h*=v}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+u*h+c*f-l*d,e[t+1]=c*m+u*d+l*h-o*f,e[t+2]=l*m+u*f+o*d-c*h,e[t+3]=u*m-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(s/2),h=o(r/2),d=c(i/2),f=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"YZX":this._x=d*u*h+l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h-d*f*m;break;case"XZY":this._x=d*u*h-l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h+d*f*m;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(i>o&&i>h){const f=2*Math.sqrt(1+i-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-i-h);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-i-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-i*l,this._z=r*u+a*l+i*c-s*o,this._w=a*u-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),u=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+c*l+a*h-o*u,this.y=i+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ur.copy(this).projectOnVector(e),this.sub(Ur)}reflect(e){return this.sub(Ur.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ur=new H,Xo=new zt;class Ye{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],m=i[8],x=s[0],g=s[3],p=s[6],v=s[1],E=s[4],S=s[7],C=s[2],w=s[5],_=s[8];return r[0]=a*x+o*v+c*C,r[3]=a*g+o*E+c*w,r[6]=a*p+o*S+c*_,r[1]=l*x+u*v+h*C,r[4]=l*g+u*E+h*w,r[7]=l*p+u*S+h*_,r[2]=d*x+f*v+m*C,r[5]=d*g+f*E+m*w,r[8]=d*p+f*S+m*_,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*r*u+i*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*r,f=l*r-a*c,m=t*h+i*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return e[0]=h*x,e[1]=(s*l-u*i)*x,e[2]=(o*i-s*a)*x,e[3]=d*x,e[4]=(u*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(i*c-l*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return ar("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Nr.makeScale(e,t)),this}rotate(e){return ar("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Nr.makeRotation(-e)),this}translate(e,t){return ar("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Nr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nr=new Ye,qo=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yo=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function af(){const n={enabled:!0,workingColorSpace:gr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ct&&(s.r=Un(s.r),s.g=Un(s.g),s.b=Un(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(s.r=Di(s.r),s.g=Di(s.g),s.b=Di(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ln?xr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[gr]:{primaries:e,whitePoint:i,transfer:xr,toXYZ:qo,fromXYZ:Yo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:qo,fromXYZ:Yo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),n}const tt=af();function Un(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Di(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let fi;class of{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{fi===void 0&&(fi=_r("canvas")),fi.width=e.width,fi.height=e.height;const s=fi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=fi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_r("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Un(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Un(t[i]/255)*255):t[i]=Un(t[i]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lf=0;class ho{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=Ms(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Fr(s[a].image)):r.push(Fr(s[a]))}else r=Fr(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Fr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?of.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}let cf=0;const zr=new H;class Ot extends ci{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,i=Dn,s=Dn,r=Zt,a=In,o=Mn,c=Jt,l=Ot.DEFAULT_ANISOTROPY,u=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Ms(),this.name="",this.source=new ho(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(zr).x}get height(){return this.source.getSize(zr).y}get depth(){return this.source.getSize(zr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dr:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case Ma:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dr:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case Ma:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=xc;Ot.DEFAULT_ANISOTROPY=1;class _t{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,S=(f+1)/2,C=(p+1)/2,w=(u+d)/4,_=(h+x)/4,A=(m+g)/4;return E>S&&E>C?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=w/i,r=_/i):S>C?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=w/s,r=A/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=_/r,s=A/r),this.set(i,s,r,t),this}let v=Math.sqrt((g-m)*(g-m)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(h-x)/v,this.z=(d-u)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uf extends ci{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t),this.textures=[];const s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Ot({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ho(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qt extends uf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Rc extends Ot{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ff extends Ot{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class ot{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,a,o,c,l,u,h,d,f,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,u,h,d,f,m,x,g)}set(e,t,i,s,r,a,o,c,l,u,h,d,f,m,x,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/di.setFromMatrixColumn(e,0).length(),r=1/di.setFromMatrixColumn(e,1).length(),a=1/di.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,f=a*h,m=o*u,x=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+m*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=m+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,m=l*u,x=l*h;t[0]=d+x*o,t[4]=m*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-m,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,m=l*u,x=l*h;t[0]=d-x*o,t[4]=-a*h,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*u,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,f=a*h,m=o*u,x=o*h;t[0]=c*u,t[4]=m*l-f,t[8]=d*l+x,t[1]=c*h,t[5]=x*l+d,t[9]=f*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,m=o*c,x=o*l;t[0]=c*u,t[4]=x-d*h,t[8]=m*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+m,t[10]=d-x*h}else if(e.order==="XZY"){const d=a*c,f=a*l,m=o*c,x=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+x,t[5]=a*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=o*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(df,e,hf)}lookAt(e,t,i){const s=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),On.crossVectors(i,jt),On.lengthSq()===0&&(Math.abs(i.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),On.crossVectors(i,jt)),On.normalize(),Rs.crossVectors(jt,On),s[0]=On.x,s[4]=Rs.x,s[8]=jt.x,s[1]=On.y,s[5]=Rs.y,s[9]=jt.y,s[2]=On.z,s[6]=Rs.z,s[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],m=i[2],x=i[6],g=i[10],p=i[14],v=i[3],E=i[7],S=i[11],C=i[15],w=s[0],_=s[4],A=s[8],I=s[12],L=s[1],F=s[5],k=s[9],te=s[13],N=s[2],J=s[6],se=s[10],ne=s[14],ve=s[3],re=s[7],fe=s[11],de=s[15];return r[0]=a*w+o*L+c*N+l*ve,r[4]=a*_+o*F+c*J+l*re,r[8]=a*A+o*k+c*se+l*fe,r[12]=a*I+o*te+c*ne+l*de,r[1]=u*w+h*L+d*N+f*ve,r[5]=u*_+h*F+d*J+f*re,r[9]=u*A+h*k+d*se+f*fe,r[13]=u*I+h*te+d*ne+f*de,r[2]=m*w+x*L+g*N+p*ve,r[6]=m*_+x*F+g*J+p*re,r[10]=m*A+x*k+g*se+p*fe,r[14]=m*I+x*te+g*ne+p*de,r[3]=v*w+E*L+S*N+C*ve,r[7]=v*_+E*F+S*J+C*re,r[11]=v*A+E*k+S*se+C*fe,r[15]=v*I+E*te+S*ne+C*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],x=e[7],g=e[11],p=e[15],v=c*f-l*d,E=o*f-l*h,S=o*d-c*h,C=a*f-l*u,w=a*d-c*u,_=a*h-o*u;return t*(x*v-g*E+p*S)-i*(m*v-g*C+p*w)+s*(m*E-x*C+p*_)-r*(m*S-x*w+g*_)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-i*(r*u-o*c)+s*(r*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],x=e[13],g=e[14],p=e[15],v=t*o-i*a,E=t*c-s*a,S=t*l-r*a,C=i*c-s*o,w=i*l-r*o,_=s*l-r*c,A=u*x-h*m,I=u*g-d*m,L=u*p-f*m,F=h*g-d*x,k=h*p-f*x,te=d*p-f*g,N=v*te-E*k+S*F+C*L-w*I+_*A;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/N;return e[0]=(o*te-c*k+l*F)*J,e[1]=(s*k-i*te-r*F)*J,e[2]=(x*_-g*w+p*C)*J,e[3]=(d*w-h*_-f*C)*J,e[4]=(c*L-a*te-l*I)*J,e[5]=(t*te-s*L+r*I)*J,e[6]=(g*S-m*_-p*E)*J,e[7]=(u*_-d*S+f*E)*J,e[8]=(a*k-o*L+l*A)*J,e[9]=(i*L-t*k-r*A)*J,e[10]=(m*w-x*S+p*v)*J,e[11]=(h*S-u*w-f*v)*J,e[12]=(o*I-a*F-c*A)*J,e[13]=(t*F-i*I+s*A)*J,e[14]=(x*E-m*C-g*v)*J,e[15]=(u*C-h*E+d*v)*J,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+i,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,d=r*l,f=r*u,m=r*h,x=a*u,g=a*h,p=o*h,v=c*l,E=c*u,S=c*h,C=i.x,w=i.y,_=i.z;return s[0]=(1-(x+p))*C,s[1]=(f+S)*C,s[2]=(m-E)*C,s[3]=0,s[4]=(f-S)*w,s[5]=(1-(d+p))*w,s[6]=(g+v)*w,s[7]=0,s[8]=(m+E)*_,s[9]=(g-v)*_,s[10]=(1-(d+x))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=di.set(s[0],s[1],s[2]).length();const o=di.set(s[4],s[5],s[6]).length(),c=di.set(s[8],s[9],s[10]).length();r<0&&(a=-a),cn.copy(this);const l=1/a,u=1/o,h=1/c;return cn.elements[0]*=l,cn.elements[1]*=l,cn.elements[2]*=l,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=h,cn.elements[9]*=h,cn.elements[10]*=h,t.setFromRotationMatrix(cn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,s,r,a,o=mn,c=!1){const l=this.elements,u=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let m,x;if(c)m=r/(a-r),x=a*r/(a-r);else if(o===mn)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===xs)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=mn,c=!1){const l=this.elements,u=2/(t-e),h=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s);let m,x;if(c)m=1/(a-r),x=a/(a-r);else if(o===mn)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===xs)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const di=new H,cn=new ot,df=new H(0,0,0),hf=new H(1,1,1),On=new H,Rs=new H,jt=new H,$o=new ot,Ko=new zt;class Wt{constructor(e=0,t=0,i=0,s=Wt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return $o.makeRotationFromQuaternion(e),this.setFromRotationMatrix($o,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ko.setFromEuler(this),this.setFromQuaternion(Ko,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wt.DEFAULT_ORDER="XYZ";class Cc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pf=0;const Jo=new H,hi=new zt,wn=new ot,Cs=new H,Vi=new H,mf=new H,gf=new zt,Zo=new H(1,0,0),Qo=new H(0,1,0),jo=new H(0,0,1),el={type:"added"},xf={type:"removed"},pi={type:"childadded",child:null},Or={type:"childremoved",child:null};class bt extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new H,t=new Wt,i=new zt,s=new H(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new Ye}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.multiply(hi),this}rotateOnWorldAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.premultiply(hi),this}rotateX(e){return this.rotateOnAxis(Zo,e)}rotateY(e){return this.rotateOnAxis(Qo,e)}rotateZ(e){return this.rotateOnAxis(jo,e)}translateOnAxis(e,t){return Jo.copy(e).applyQuaternion(this.quaternion),this.position.add(Jo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zo,e)}translateY(e){return this.translateOnAxis(Qo,e)}translateZ(e){return this.translateOnAxis(jo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Cs.copy(e):Cs.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(Vi,Cs,this.up):wn.lookAt(Cs,Vi,this.up),this.quaternion.setFromRotationMatrix(wn),s&&(wn.extractRotation(s.matrixWorld),hi.setFromRotationMatrix(wn),this.quaternion.premultiply(hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(el),pi.child=e,this.dispatchEvent(pi),pi.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xf),Or.child=e,this.dispatchEvent(Or),Or.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(el),pi.child=e,this.dispatchEvent(pi),pi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,e,mf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,gf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}bt.DEFAULT_UP=new H(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Pi extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _f={type:"move"};class Br{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,i),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_f)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Pi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Pc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},Ps={h:0,s:0,l:0};function kr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ve{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=tt.workingColorSpace){if(e=tf(e,1),t=Qe(t,0,1),i=Qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=kr(a,r,e+1/3),this.g=kr(a,r,e),this.b=kr(a,r,e-1/3)}return tt.colorSpaceToWorking(this,s),this}setStyle(e,t=Kt){function i(r){r!==void 0&&parseFloat(r)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const i=Pc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Un(e.r),this.g=Un(e.g),this.b=Un(e.b),this}copyLinearToSRGB(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return tt.workingToColorSpace(Ft.copy(this),e),Math.round(Qe(Ft.r*255,0,255))*65536+Math.round(Qe(Ft.g*255,0,255))*256+Math.round(Qe(Ft.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Ft.copy(this),t);const i=Ft.r,s=Ft.g,r=Ft.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Kt){tt.workingToColorSpace(Ft.copy(this),e);const t=Ft.r,i=Ft.g,s=Ft.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Bn),this.setHSL(Bn.h+e,Bn.s+t,Bn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Bn),e.getHSL(Ps);const i=Ir(Bn.h,Ps.h,t),s=Ir(Bn.s,Ps.s,t),r=Ir(Bn.l,Ps.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Ve;Ve.NAMES=Pc;class po{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ve(e),this.density=t}clone(){return new po(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Lc extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wt,this.environmentIntensity=1,this.environmentRotation=new Wt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const un=new H,Tn=new H,Gr=new H,An=new H,mi=new H,gi=new H,tl=new H,Hr=new H,Vr=new H,Wr=new H,Xr=new _t,qr=new _t,Yr=new _t;class hn{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),un.subVectors(e,t),s.cross(un);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){un.subVectors(s,t),Tn.subVectors(i,t),Gr.subVectors(e,t);const a=un.dot(un),o=un.dot(Tn),c=un.dot(Gr),l=Tn.dot(Tn),u=Tn.dot(Gr),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-o*u)*d,m=(a*u-o*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,An)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,An.x),c.addScaledVector(a,An.y),c.addScaledVector(o,An.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return Xr.setScalar(0),qr.setScalar(0),Yr.setScalar(0),Xr.fromBufferAttribute(e,t),qr.fromBufferAttribute(e,i),Yr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Xr,r.x),a.addScaledVector(qr,r.y),a.addScaledVector(Yr,r.z),a}static isFrontFacing(e,t,i,s){return un.subVectors(i,t),Tn.subVectors(e,t),un.cross(Tn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),un.cross(Tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return hn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;mi.subVectors(s,i),gi.subVectors(r,i),Hr.subVectors(e,i);const c=mi.dot(Hr),l=gi.dot(Hr);if(c<=0&&l<=0)return t.copy(i);Vr.subVectors(e,s);const u=mi.dot(Vr),h=gi.dot(Vr);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0&&c-u>0)return a=c/(c-u),t.copy(i).addScaledVector(mi,a);Wr.subVectors(e,r);const f=mi.dot(Wr),m=gi.dot(Wr);if(m>=0&&f<=m)return t.copy(r);const x=f*l-c*m;if(x<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(i).addScaledVector(gi,o);const g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return tl.subVectors(r,s),o=(h-u)/(h-u+(f-m)),t.copy(s).addScaledVector(tl,o);const p=1/(g+x+d);return a=x*p,o=d*p,t.copy(i).addScaledVector(mi,a).addScaledVector(gi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ui{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fn):fn.fromBufferAttribute(r,a),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ls.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ls.copy(i.boundingBox)),Ls.applyMatrix4(e.matrixWorld),this.union(Ls)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wi),Ds.subVectors(this.max,Wi),xi.subVectors(e.a,Wi),_i.subVectors(e.b,Wi),vi.subVectors(e.c,Wi),kn.subVectors(_i,xi),Gn.subVectors(vi,_i),jn.subVectors(xi,vi);let t=[0,-kn.z,kn.y,0,-Gn.z,Gn.y,0,-jn.z,jn.y,kn.z,0,-kn.x,Gn.z,0,-Gn.x,jn.z,0,-jn.x,-kn.y,kn.x,0,-Gn.y,Gn.x,0,-jn.y,jn.x,0];return!$r(t,xi,_i,vi,Ds)||(t=[1,0,0,0,1,0,0,0,1],!$r(t,xi,_i,vi,Ds))?!1:(Is.crossVectors(kn,Gn),t=[Is.x,Is.y,Is.z],$r(t,xi,_i,vi,Ds))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Rn=[new H,new H,new H,new H,new H,new H,new H,new H],fn=new H,Ls=new ui,xi=new H,_i=new H,vi=new H,kn=new H,Gn=new H,jn=new H,Wi=new H,Ds=new H,Is=new H,ei=new H;function $r(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ei.fromArray(n,r);const o=s.x*Math.abs(ei.x)+s.y*Math.abs(ei.y)+s.z*Math.abs(ei.z),c=e.dot(ei),l=t.dot(ei),u=i.dot(ei);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const yt=new H,Us=new ke;let vf=0;class Ht extends ci{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ju,this.updateRanges=[],this.gpuType=pn,this.version=0,this._normalizationScale=e!==void 0?fo(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Us.fromBufferAttribute(this,t),Us.applyMatrix3(e),this.setXY(t,Us.x,Us.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):sf(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):rf(e,this.array)}}class Dc extends Ht{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ic extends Ht{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class at extends Ht{constructor(e,t,i){super(new Float32Array(e),t,i)}}const yf=new ui,Xi=new H,Kr=new H;class Ss{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):yf.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xi.subVectors(e,this.center);const t=Xi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Xi,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xi.copy(e.center).add(Kr)),this.expandByPoint(Xi.copy(e.center).sub(Kr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Mf=0;const sn=new ot,Jr=new bt,yi=new H,en=new ui,qi=new ui,Rt=new H;class Xt extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=Ms(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zu(e)?Ic:Dc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ye().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,i){return sn.makeTranslation(e,t,i),this.applyMatrix4(sn),this}scale(e,t,i){return sn.makeScale(e,t,i),this.applyMatrix4(sn),this}lookAt(e){return Jr.lookAt(e),Jr.updateMatrix(),this.applyMatrix4(Jr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new at(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];qi.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(en.min,qi.min),en.expandByPoint(Rt),Rt.addVectors(en.max,qi.max),en.expandByPoint(Rt)):(en.expandByPoint(qi.min),en.expandByPoint(qi.max))}en.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Rt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Rt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Rt.fromBufferAttribute(o,l),c&&(yi.fromBufferAttribute(e,l),Rt.add(yi)),s=Math.max(s,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Ht(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[],l=new Uint8Array(i.count);for(let I=0;I<i.count;I++)o[I]=new H,c[I]=new H;const u=new H,h=new H,d=new H,f=new ke,m=new ke,x=new ke,g=new H,p=new H;function v(I,L,F){l[I]=l[L]=l[F]=1,u.fromBufferAttribute(i,I),h.fromBufferAttribute(i,L),d.fromBufferAttribute(i,F),f.fromBufferAttribute(r,I),m.fromBufferAttribute(r,L),x.fromBufferAttribute(r,F),h.sub(u),d.sub(u),m.sub(f),x.sub(f);const k=1/(m.x*x.y-x.x*m.y);isFinite(k)&&(g.copy(h).multiplyScalar(x.y).addScaledVector(d,-m.y).multiplyScalar(k),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-x.x).multiplyScalar(k),o[I].add(g),o[L].add(g),o[F].add(g),c[I].add(p),c[L].add(p),c[F].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let I=0,L=E.length;I<L;++I){const F=E[I],k=F.start,te=F.count;for(let N=k,J=k+te;N<J;N+=3)v(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const S=new H,C=new H,w=new H,_=new H;function A(I){w.fromBufferAttribute(s,I),_.copy(w);const L=o[I];S.copy(L),S.sub(w.multiplyScalar(w.dot(L))).normalize(),C.crossVectors(_,L);const k=C.dot(c[I])<0?-1:1;a.setXYZW(I,S.x,S.y,S.z,k)}for(let I=0,L=i.count;I<L;++I)l[I]&&A(I);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new H,r=new H,a=new H,o=new H,c=new H,l=new H,u=new H,h=new H;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,m),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),o.add(u),c.add(u),l.add(u),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let f=0,m=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*u;for(let p=0;p<u;p++)d[m++]=l[f++]}return new Ht(d,u,h)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xt,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,i);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zr=new H,Sf=new H,bf=new Ye;class Wn{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Zr.subVectors(i,t).cross(Sf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Zr),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||bf.getNormalMatrix(e),s=this.coplanarPoint(Zr).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Ef=0;class ki extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=Ms(),this.name="",this.type="Material",this.blending=us,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lc,this.blendDst=cc,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Wn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ke().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ke().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Cn=new H,Qr=new H,Ns=new H,Fs=new H;class wf{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Qr.copy(e).add(t).multiplyScalar(.5),Ns.copy(t).sub(e).normalize(),Fs.copy(this.origin).sub(Qr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ns),o=Fs.dot(this.direction),c=-Fs.dot(Ns),l=Fs.lengthSq(),u=Math.abs(1-a*a);let h,d,f,m;if(u>0)if(h=a*c-o,d=a*o-c,m=r*u,h>=0)if(d>=-m)if(d<=m){const x=1/u;h*=x,d*=x,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-m?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=m?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Qr).addScaledVector(Ns,d),f}intersectSphere(e,t){if(e.radius<0)return null;Cn.subVectors(e.center,this.origin);const i=Cn.dot(this.direction),s=Cn.dot(Cn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,i,s,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,h=e.x-a.x,d=e.y-a.y,f=e.z-a.z,m=t.x-a.x,x=t.y-a.y,g=t.z-a.z,p=i.x-a.x,v=i.y-a.y,E=i.z-a.z,S=Math.abs(c),C=Math.abs(l),w=Math.abs(u);let _,A,I,L,F,k,te,N,J,se,ne,ve;if(S>=C&&S>=w?(I=c,k=h,J=m,ve=p,c>=0?(_=l,A=u,L=d,F=f,te=x,N=g,se=v,ne=E):(_=u,A=l,L=f,F=d,te=g,N=x,se=E,ne=v)):C>=w?(I=l,k=d,J=x,ve=v,l>=0?(_=u,A=c,L=f,F=h,te=g,N=m,se=E,ne=p):(_=c,A=u,L=h,F=f,te=m,N=g,se=p,ne=E)):(I=u,k=f,J=g,ve=E,u>=0?(_=c,A=l,L=h,F=d,te=m,N=x,se=p,ne=v):(_=l,A=c,L=d,F=h,te=x,N=m,se=v,ne=p)),I===0)return null;const re=_/I,fe=A/I,de=1/I,Ie=L-re*k,K=F-fe*k,M=te-re*J,R=N-fe*J,z=se-re*ve,G=ne-fe*ve,Y=z*R-G*M,Ee=Ie*G-K*z,_e=M*K-R*Ie;if(s){if(Y<0||Ee<0||_e<0)return null}else if((Y<0||Ee<0||_e<0)&&(Y>0||Ee>0||_e>0))return null;const B=Y+Ee+_e;if(B===0)return null;const ce=de*(Y*k+Ee*J+_e*ve);return(B>0?ce<0:ce>0)?null:this.at(ce/B,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fi extends ki{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.combine=io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nl=new ot,ti=new wf,zs=new Ss,il=new H,Os=new H,Bs=new H,ks=new H,jr=new H,Gs=new H,sl=new H,Hs=new H;class it extends bt{constructor(e=new Xt,t=new Fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Gs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(jr.fromBufferAttribute(h,e),a?Gs.addScaledVector(jr,u):Gs.addScaledVector(jr.sub(t),u))}t.add(Gs)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zs.copy(i.boundingSphere),zs.applyMatrix4(r),ti.copy(e.ray).recast(e.near),!(zs.containsPoint(ti.origin)===!1&&(ti.intersectSphere(zs,il)===null||ti.origin.distanceToSquared(il)>(e.far-e.near)**2))&&(nl.copy(r).invert(),ti.copy(e.ray).applyMatrix4(nl),!(i.boundingBox!==null&&ti.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ti)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){const g=d[m],p=a[g.materialIndex],v=Math.max(g.start,f.start),E=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let S=v,C=E;S<C;S+=3){const w=o.getX(S),_=o.getX(S+1),A=o.getX(S+2);s=Vs(this,p,e,i,l,u,h,w,_,A),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){const v=o.getX(g),E=o.getX(g+1),S=o.getX(g+2);s=Vs(this,a,e,i,l,u,h,v,E,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){const g=d[m],p=a[g.materialIndex],v=Math.max(g.start,f.start),E=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let S=v,C=E;S<C;S+=3){const w=S,_=S+1,A=S+2;s=Vs(this,p,e,i,l,u,h,w,_,A),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){const v=g,E=g+1,S=g+2;s=Vs(this,a,e,i,l,u,h,v,E,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Tf(n,e,t,i,s,r,a,o){let c;if(e.side===Vt?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===ai,o),c===null)return null;Hs.copy(o),Hs.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Hs);return l<t.near||l>t.far?null:{distance:l,point:Hs.clone(),object:n}}function Vs(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,Os),n.getVertexPosition(c,Bs),n.getVertexPosition(l,ks);const u=Tf(n,e,t,i,Os,Bs,ks,sl);if(u){const h=new H;hn.getBarycoord(sl,Os,Bs,ks,h),s&&(u.uv=hn.getInterpolatedAttribute(s,o,c,l,h,new ke)),r&&(u.uv1=hn.getInterpolatedAttribute(r,o,c,l,h,new ke)),a&&(u.normal=hn.getInterpolatedAttribute(a,o,c,l,h,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new H,materialIndex:0};hn.getNormal(Os,Bs,ks,d.normal),u.face=d,u.barycoord=h}return u}class Uc extends Ot{constructor(e=null,t=1,i=1,s,r,a,o,c,l=Dt,u=Dt,h,d){super(null,a,o,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rl extends Ht{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Mi=new ot,al=new ot,Ws=[],ol=new ui,Af=new ot,Yi=new it,$i=new Ss;class Nc extends it{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new rl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Af)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Mi),ol.copy(e.boundingBox).applyMatrix4(Mi),this.boundingBox.union(ol)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ss),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Mi),$i.copy(e.boundingSphere).applyMatrix4(Mi),this.boundingSphere.union($i)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Yi.geometry=this.geometry,Yi.material=this.material,Yi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$i.copy(this.boundingSphere),$i.applyMatrix4(i),e.ray.intersectsSphere($i)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Mi),al.multiplyMatrices(i,Mi),Yi.matrixWorld=al,Yi.raycast(e,Ws);for(let a=0,o=Ws.length;a<o;a++){const c=Ws[a];c.instanceId=r,c.object=this,t.push(c)}Ws.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new rl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Uc(new Float32Array(s*this.count),s,this.count,oo,pn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ni=new Ss,Rf=new ke(.5,.5),Xs=new H;class _s{constructor(e=new Wn,t=new Wn,i=new Wn,s=new Wn,r=new Wn,a=new Wn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=mn,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],m=r[8],x=r[9],g=r[10],p=r[11],v=r[12],E=r[13],S=r[14],C=r[15];if(s[0].setComponents(l-a,f-u,p-m,C-v).normalize(),s[1].setComponents(l+a,f+u,p+m,C+v).normalize(),s[2].setComponents(l+o,f+h,p+x,C+E).normalize(),s[3].setComponents(l-o,f-h,p-x,C-E).normalize(),i)s[4].setComponents(c,d,g,S).normalize(),s[5].setComponents(l-c,f-d,p-g,C-S).normalize();else if(s[4].setComponents(l-c,f-d,p-g,C-S).normalize(),t===mn)s[5].setComponents(l+c,f+d,p+g,C+S).normalize();else if(t===xs)s[5].setComponents(c,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(e){ni.center.set(0,0,0);const t=Rf.distanceTo(e.center);return ni.radius=.7071067811865476+t,ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Xs.x=s.normal.x>0?e.max.x:e.min.x,Xs.y=s.normal.y>0?e.max.y:e.min.y,Xs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Xs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const ll=new ot;class mo{constructor(){this.coordinateSystem=mn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];ll.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new _s),i[s].setFromProjectionMatrix(ll,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new _s),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new mo().copy(this)}}class Fc extends Ot{constructor(e=[],t=Ui,i,s,r,a,o,c,l,u){super(e,t,i,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class or extends Ot{constructor(e,t,i,s,r,a,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zi extends Ot{constructor(e,t,i=bn,s,r,a,o=Dt,c=Dt,l,u=$n,h=1){if(u!==$n&&u!==Xn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ho(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class zc extends zi{constructor(e,t=bn,i=Ui,s,r,a=Dt,o=Dt,c,l=$n){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Oc extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Mt extends Xt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,f=0;m("z","y","x",-1,-1,i,t,e,a,r,0),m("z","y","x",1,-1,i,t,-e,a,r,1),m("x","z","y",1,1,e,i,t,s,a,2),m("x","z","y",1,-1,e,i,-t,s,a,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(u,3)),this.setAttribute("uv",new at(h,2));function m(x,g,p,v,E,S,C,w,_,A,I){const L=S/_,F=C/A,k=S/2,te=C/2,N=w/2,J=_+1,se=A+1;let ne=0,ve=0;const re=new H;for(let fe=0;fe<se;fe++){const de=fe*F-te;for(let Ie=0;Ie<J;Ie++){const K=Ie*L-k;re[x]=K*v,re[g]=de*E,re[p]=N,l.push(re.x,re.y,re.z),re[x]=0,re[g]=0,re[p]=w>0?1:-1,u.push(re.x,re.y,re.z),h.push(Ie/_),h.push(1-fe/A),ne+=1}}for(let fe=0;fe<A;fe++)for(let de=0;de<_;de++){const Ie=d+de+J*fe,K=d+de+J*(fe+1),M=d+(de+1)+J*(fe+1),R=d+(de+1)+J*fe;c.push(Ie,K,R),c.push(K,M,R),ve+=6}o.addGroup(f,ve,I),f+=ve,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ii extends Xt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let m=0;const x=[],g=i/2;let p=0;v(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new at(h,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(f,2));function v(){const S=new H,C=new H;let w=0;const _=(t-e)/i;for(let A=0;A<=r;A++){const I=[],L=A/r,F=L*(t-e)+e;for(let k=0;k<=s;k++){const te=k/s,N=te*c+o,J=Math.sin(N),se=Math.cos(N);C.x=F*J,C.y=-L*i+g,C.z=F*se,h.push(C.x,C.y,C.z),S.set(J,_,se).normalize(),d.push(S.x,S.y,S.z),f.push(te,1-L),I.push(m++)}x.push(I)}for(let A=0;A<s;A++)for(let I=0;I<r;I++){const L=x[I][A],F=x[I+1][A],k=x[I+1][A+1],te=x[I][A+1];(e>0||I!==0)&&(u.push(L,F,te),w+=3),(t>0||I!==r-1)&&(u.push(F,k,te),w+=3)}l.addGroup(p,w,0),p+=w}function E(S){const C=m,w=new ke,_=new H;let A=0;const I=S===!0?e:t,L=S===!0?1:-1;for(let k=1;k<=s;k++)h.push(0,g*L,0),d.push(0,L,0),f.push(.5,.5),m++;const F=m;for(let k=0;k<=s;k++){const N=k/s*c+o,J=Math.cos(N),se=Math.sin(N);_.x=I*se,_.y=g*L,_.z=I*J,h.push(_.x,_.y,_.z),d.push(0,L,0),w.x=J*.5+.5,w.y=se*.5*L+.5,f.push(w.x,w.y),m++}for(let k=0;k<s;k++){const te=C+k,N=F+k;S===!0?u.push(N,N+1,te):u.push(N+1,N,te),A+=3}l.addGroup(p,A,S===!0?1:2),p+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Nn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);const u=i[s],d=i[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new ke:new H);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new H,s=[],r=[],a=[],o=new H,c=new ot;for(let f=0;f<=e;f++){const m=f/e;s[f]=this.getTangentAt(m,new H)}r[0]=new H,a[0]=new H;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),d<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Qe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Qe(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class Bc extends Nn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ke){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Cf extends Bc{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function go(){let n=0,e=0,t=0,i=0;function s(r,a,o,c){n=r,e=o,t=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,h){let d=(a-r)/l-(o-r)/(l+u)+(o-a)/u,f=(o-a)/u-(c-a)/(u+h)+(c-o)/h;d*=u,f*=u,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return n+e*r+t*a+i*o}}}const cl=new H,ul=new H,ea=new go,ta=new go,na=new go;class kc extends Nn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new H){const i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(ul.subVectors(s[0],s[1]).add(s[0]),l=ul);const h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(cl.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=cl),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),ea.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,m,x,g),ta.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,m,x,g),na.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,m,x,g)}else this.curveType==="catmullrom"&&(ea.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),ta.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),na.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return i.set(ea.calc(c),ta.calc(c),na.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new H().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function fl(n,e,t,i,s){const r=(i-e)*.5,a=(s-t)*.5,o=n*n,c=n*o;return(2*t-2*i+r+a)*c+(-3*t+3*i-2*r-a)*o+r*n+t}function Pf(n,e){const t=1-n;return t*t*e}function Lf(n,e){return 2*(1-n)*n*e}function Df(n,e){return n*n*e}function fs(n,e,t,i){return Pf(n,e)+Lf(n,t)+Df(n,i)}function If(n,e){const t=1-n;return t*t*t*e}function Uf(n,e){const t=1-n;return 3*t*t*n*e}function Nf(n,e){return 3*(1-n)*n*n*e}function Ff(n,e){return n*n*n*e}function ds(n,e,t,i,s){return If(n,e)+Uf(n,t)+Nf(n,i)+Ff(n,s)}class zf extends Nn{constructor(e=new ke,t=new ke,i=new ke,s=new ke){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ke){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ds(e,s.x,r.x,a.x,o.x),ds(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Of extends Nn{constructor(e=new H,t=new H,i=new H,s=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new H){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ds(e,s.x,r.x,a.x,o.x),ds(e,s.y,r.y,a.y,o.y),ds(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Bf extends Nn{constructor(e=new ke,t=new ke){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ke){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ke){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kf extends Nn{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gf extends Nn{constructor(e=new ke,t=new ke,i=new ke){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ke){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(fs(e,s.x,r.x,a.x),fs(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gc extends Nn{constructor(e=new H,t=new H,i=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new H){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(fs(e,s.x,r.x,a.x),fs(e,s.y,r.y,a.y),fs(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hf extends Nn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ke){const i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return i.set(fl(o,c.x,l.x,u.x,h.x),fl(o,c.y,l.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new ke().fromArray(s))}return this}}var Vf=Object.freeze({__proto__:null,ArcCurve:Cf,CatmullRomCurve3:kc,CubicBezierCurve:zf,CubicBezierCurve3:Of,EllipseCurve:Bc,LineCurve:Bf,LineCurve3:kf,QuadraticBezierCurve:Gf,QuadraticBezierCurve3:Gc,SplineCurve:Hf});class qn extends Xt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,u=c+1,h=e/o,d=t/c,f=[],m=[],x=[],g=[];for(let p=0;p<u;p++){const v=p*d-a;for(let E=0;E<l;E++){const S=E*h-r;m.push(S,-v,0),x.push(0,0,1),g.push(E/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){const E=v+l*p,S=v+l*(p+1),C=v+1+l*(p+1),w=v+1+l*p;f.push(E,S,w),f.push(S,C,w)}this.setIndex(f),this.setAttribute("position",new at(m,3)),this.setAttribute("normal",new at(x,3)),this.setAttribute("uv",new at(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qn(e.width,e.height,e.widthSegments,e.heightSegments)}}class xo extends Xt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new H,d=new H,f=[],m=[],x=[],g=[];for(let p=0;p<=i;p++){const v=[],E=p/i,S=a+E*o,C=e*Math.cos(S),w=Math.sqrt(e*e-C*C);let _=0;p===0&&a===0?_=.5/t:p===i&&c===Math.PI&&(_=-.5/t);for(let A=0;A<=t;A++){const I=A/t,L=s+I*r;h.x=-w*Math.cos(L),h.y=C,h.z=w*Math.sin(L),m.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),g.push(I+_,1-E),v.push(l++)}u.push(v)}for(let p=0;p<i;p++)for(let v=0;v<t;v++){const E=u[p][v+1],S=u[p][v],C=u[p+1][v],w=u[p+1][v+1];(p!==0||a>0)&&f.push(E,S,w),(p!==i-1||c<Math.PI)&&f.push(S,C,w)}this.setIndex(f),this.setAttribute("position",new at(m,3)),this.setAttribute("normal",new at(x,3)),this.setAttribute("uv",new at(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _o extends Xt{constructor(e=new Gc(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new H,c=new H,l=new ke;let u=new H;const h=[],d=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new at(h,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(f,2));function x(){for(let E=0;E<t;E++)g(E);g(r===!1?t:0),v(),p()}function g(E){u=e.getPointAt(E/t,u);const S=a.normals[E],C=a.binormals[E];for(let w=0;w<=s;w++){const _=w/s*Math.PI*2,A=Math.sin(_),I=-Math.cos(_);c.x=I*S.x+A*C.x,c.y=I*S.y+A*C.y,c.z=I*S.z+A*C.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=u.x+i*c.x,o.y=u.y+i*c.y,o.z=u.z+i*c.z,h.push(o.x,o.y,o.z)}}function p(){for(let E=1;E<=t;E++)for(let S=1;S<=s;S++){const C=(s+1)*(E-1)+(S-1),w=(s+1)*E+(S-1),_=(s+1)*E+S,A=(s+1)*(E-1)+S;m.push(C,w,A),m.push(w,_,A)}}function v(){for(let E=0;E<=t;E++)for(let S=0;S<=s;S++)l.x=E/t,l.y=S/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new _o(new Vf[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Oi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(dl(s))s.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(dl(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Gt(n){const e={};for(let t=0;t<n.length;t++){const i=Oi(n[t]);for(const s in i)e[s]=i[s]}return e}function dl(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Wf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Hc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const Xf={clone:Oi,merge:Gt};var qf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends ki{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qf,this.fragmentShader=Yf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oi(e.uniforms),this.uniformsGroups=Wf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ve().setHex(s.value);break;case"v2":this.uniforms[i].value=new ke().fromArray(s.value);break;case"v3":this.uniforms[i].value=new H().fromArray(s.value);break;case"v4":this.uniforms[i].value=new _t().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ye().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ot().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class $f extends Kn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class an extends ki{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mr,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Kf extends ki{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mr,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.combine=io,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jf extends ki{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zf extends ki{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class vo extends bt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Qf extends vo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ia=new ot,hl=new H,pl=new H;class Vc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=Jt,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _s,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;hl.setFromMatrixPosition(e.matrixWorld),t.position.copy(hl),pl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){ia.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(ia,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===xs||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(ia)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const qs=new H,Ys=new zt,xn=new H;class Wc extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(qs,Ys,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qs,Ys,xn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(qs,Ys,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qs,Ys,xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Hn=new H,ml=new ke,gl=new ke;class tn extends Wc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vr*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hn.x,Hn.y).multiplyScalar(-e/Hn.z),Hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hn.x,Hn.y).multiplyScalar(-e/Hn.z)}getViewSize(e,t){return this.getViewBounds(e,ml,gl),t.subVectors(gl,ml)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Dr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class jf extends Vc{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=vr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class ed extends vo{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new jf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class td extends Vc{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}}class Xc extends vo{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new td}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class qc extends Wc{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Si=-90,bi=1;class Qa extends bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new tn(Si,bi,e,t);s.layers=this.layers,this.add(s);const r=new tn(Si,bi,e,t);r.layers=this.layers,this.add(r);const a=new tn(Si,bi,e,t);a.layers=this.layers,this.add(a);const o=new tn(Si,bi,e,t);o.layers=this.layers,this.add(o);const c=new tn(Si,bi,e,t);c.layers=this.layers,this.add(c);const l=new tn(Si,bi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===mn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===xs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class nd extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function xl(n,e,t,i){const s=id(i);switch(t){case Sc:return n*e;case oo:return n*e/s.components*s.byteLength;case lo:return n*e/s.components*s.byteLength;case oi:return n*e*2/s.components*s.byteLength;case co:return n*e*2/s.components*s.byteLength;case bc:return n*e*3/s.components*s.byteLength;case Mn:return n*e*4/s.components*s.byteLength;case uo:return n*e*4/s.components*s.byteLength;case nr:case ir:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sr:case rr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ba:case wa:return Math.max(n,16)*Math.max(e,8)/4;case Sa:case Ea:return Math.max(n,8)*Math.max(e,8)/2;case Ta:case Aa:case Ca:case Pa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ra:case hr:case La:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Da:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ia:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ua:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Na:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case za:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Oa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ba:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ka:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ha:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Va:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Wa:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Xa:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case qa:case Ya:case $a:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ka:case Ja:return Math.ceil(n/4)*Math.ceil(e/4)*8;case pr:case Za:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function id(n){switch(n){case Jt:case _c:return{byteLength:1,components:1};case gs:case vc:case gn:return{byteLength:2,components:1};case ro:case ao:return{byteLength:2,components:4};case bn:case so:case pn:return{byteLength:4,components:1};case yc:case Mc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:no}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=no);function Yc(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function sd(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,o),h.length===0)n.bufferSubData(l,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){const m=h[d],x=h[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){const x=h[f];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var rd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ad=`#ifdef USE_ALPHAHASH
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
#endif`,od=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ld=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ud=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fd=`#ifdef USE_AOMAP
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
#endif`,dd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hd=`#ifdef USE_BATCHING
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
#endif`,pd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,md=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_d=`#ifdef USE_IRIDESCENCE
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
#endif`,vd=`#ifdef USE_BUMPMAP
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
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ed=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Td=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ad=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Rd=`#define PI 3.141592653589793
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
} // validated`,Cd=`vec3 transformedNormal = objectNormal;
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
#endif`,Pd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ld=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Id=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ud="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fd=`#ifdef USE_ENVMAP
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
#endif`,zd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Od=`#ifdef USE_ENVMAP
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
#endif`,Bd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kd=`#ifdef USE_ENVMAP
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
#endif`,Gd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xd=`#ifdef USE_GRADIENTMAP
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
}`,qd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$d=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kd=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Jd=`#ifdef USE_ENVMAP
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
#endif`,Zd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,th=`PhysicalMaterial material;
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
#endif`,nh=`uniform sampler2D dfgLUT;
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
}`,ih=`
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
#endif`,sh=`#if defined( RE_IndirectDiffuse )
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
#endif`,rh=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ah=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,oh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ch=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ph=`#if defined( USE_POINTS_UV )
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
#endif`,mh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_h=`#if defined( USE_MORPHCOLORS )
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
#endif`,vh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yh=`#ifdef USE_MORPHTARGETS
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
#endif`,Mh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Eh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Th=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ah=`#ifdef USE_NORMALMAP
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
#endif`,Rh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ch=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ph=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ih=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Uh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Oh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vh=`float getShadowMask() {
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
}`,Wh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xh=`#ifdef USE_SKINNING
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
#endif`,qh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yh=`#ifdef USE_SKINNING
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
#endif`,$h=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qh=`#ifdef USE_TRANSMISSION
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
#endif`,jh=`#ifdef USE_TRANSMISSION
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
#endif`,ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ip=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rp=`uniform sampler2D t2D;
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
}`,ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,op=`uniform float backgroundBlurriness;
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
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,up=`#include <common>
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
}`,fp=`#if DEPTH_PACKING == 3200
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
}`,dp=`#define DISTANCE
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
}`,hp=`#define DISTANCE
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
}`,pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gp=`uniform float scale;
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
}`,xp=`uniform vec3 diffuse;
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
}`,_p=`#include <common>
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
}`,vp=`uniform vec3 diffuse;
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
}`,yp=`#define LAMBERT
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
}`,Mp=`#define LAMBERT
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
}`,Sp=`#define MATCAP
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
}`,bp=`#define MATCAP
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
}`,Ep=`#define NORMAL
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
}`,wp=`#define NORMAL
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
}`,Tp=`#define PHONG
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
}`,Ap=`#define PHONG
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
}`,Rp=`#define STANDARD
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
}`,Cp=`#define STANDARD
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
}`,Pp=`#define TOON
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
}`,Lp=`#define TOON
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
}`,Dp=`uniform float size;
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
}`,Ip=`uniform vec3 diffuse;
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
}`,Up=`#include <common>
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
}`,Np=`uniform vec3 color;
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
}`,Fp=`uniform float rotation;
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
}`,zp=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:rd,alphahash_pars_fragment:ad,alphamap_fragment:od,alphamap_pars_fragment:ld,alphatest_fragment:cd,alphatest_pars_fragment:ud,aomap_fragment:fd,aomap_pars_fragment:dd,batching_pars_vertex:hd,batching_vertex:pd,begin_vertex:md,beginnormal_vertex:gd,bsdfs:xd,iridescence_fragment:_d,bumpmap_pars_fragment:vd,clipping_planes_fragment:yd,clipping_planes_pars_fragment:Md,clipping_planes_pars_vertex:Sd,clipping_planes_vertex:bd,color_fragment:Ed,color_pars_fragment:wd,color_pars_vertex:Td,color_vertex:Ad,common:Rd,defaultnormal_vertex:Cd,displacementmap_pars_vertex:Pd,displacementmap_vertex:Ld,emissivemap_fragment:Dd,emissivemap_pars_fragment:Id,colorspace_fragment:Ud,colorspace_pars_fragment:Nd,envmap_fragment:Fd,envmap_common_pars_fragment:zd,envmap_pars_fragment:Od,envmap_pars_vertex:Bd,envmap_physical_pars_fragment:Jd,envmap_vertex:kd,fog_vertex:Gd,fog_pars_vertex:Hd,fog_fragment:Vd,fog_pars_fragment:Wd,gradientmap_pars_fragment:Xd,lightmap_pars_fragment:qd,lights_lambert_fragment:Yd,lights_lambert_pars_fragment:$d,lights_pars_begin:Kd,lights_toon_fragment:Zd,lights_toon_pars_fragment:Qd,lights_phong_fragment:jd,lights_phong_pars_fragment:eh,lights_physical_fragment:th,lights_physical_pars_fragment:nh,lights_fragment_begin:ih,lights_fragment_maps:sh,lights_fragment_end:rh,lightprobes_pars_fragment:ah,logdepthbuf_fragment:oh,logdepthbuf_pars_fragment:lh,logdepthbuf_pars_vertex:ch,logdepthbuf_vertex:uh,map_fragment:fh,map_pars_fragment:dh,map_particle_fragment:hh,map_particle_pars_fragment:ph,metalnessmap_fragment:mh,metalnessmap_pars_fragment:gh,morphinstance_vertex:xh,morphcolor_vertex:_h,morphnormal_vertex:vh,morphtarget_pars_vertex:yh,morphtarget_vertex:Mh,normal_fragment_begin:Sh,normal_fragment_maps:bh,normal_pars_fragment:Eh,normal_pars_vertex:wh,normal_vertex:Th,normalmap_pars_fragment:Ah,clearcoat_normal_fragment_begin:Rh,clearcoat_normal_fragment_maps:Ch,clearcoat_pars_fragment:Ph,iridescence_pars_fragment:Lh,opaque_fragment:Dh,packing:Ih,premultiplied_alpha_fragment:Uh,project_vertex:Nh,dithering_fragment:Fh,dithering_pars_fragment:zh,roughnessmap_fragment:Oh,roughnessmap_pars_fragment:Bh,shadowmap_pars_fragment:kh,shadowmap_pars_vertex:Gh,shadowmap_vertex:Hh,shadowmask_pars_fragment:Vh,skinbase_vertex:Wh,skinning_pars_vertex:Xh,skinning_vertex:qh,skinnormal_vertex:Yh,specularmap_fragment:$h,specularmap_pars_fragment:Kh,tonemapping_fragment:Jh,tonemapping_pars_fragment:Zh,transmission_fragment:Qh,transmission_pars_fragment:jh,uv_pars_fragment:ep,uv_pars_vertex:tp,uv_vertex:np,worldpos_vertex:ip,background_vert:sp,background_frag:rp,backgroundCube_vert:ap,backgroundCube_frag:op,cube_vert:lp,cube_frag:cp,depth_vert:up,depth_frag:fp,distance_vert:dp,distance_frag:hp,equirect_vert:pp,equirect_frag:mp,linedashed_vert:gp,linedashed_frag:xp,meshbasic_vert:_p,meshbasic_frag:vp,meshlambert_vert:yp,meshlambert_frag:Mp,meshmatcap_vert:Sp,meshmatcap_frag:bp,meshnormal_vert:Ep,meshnormal_frag:wp,meshphong_vert:Tp,meshphong_frag:Ap,meshphysical_vert:Rp,meshphysical_frag:Cp,meshtoon_vert:Pp,meshtoon_frag:Lp,points_vert:Dp,points_frag:Ip,shadow_vert:Up,shadow_frag:Np,sprite_vert:Fp,sprite_frag:zp},Le={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},vn={basic:{uniforms:Gt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Gt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Gt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Gt([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Gt([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Gt([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Gt([Le.points,Le.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Gt([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Gt([Le.common,Le.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Gt([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Gt([Le.sprite,Le.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:Gt([Le.common,Le.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:Gt([Le.lights,Le.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};vn.physical={uniforms:Gt([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const $s={r:0,b:0,g:0},Op=new ot,$c=new Ye;$c.set(-1,0,0,0,1,0,0,0,1);function Bp(n,e,t,i,s,r){const a=new Ve(0);let o=s===!0?0:1,c,l,u=null,h=0,d=null;function f(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){const S=v.backgroundBlurriness>0;E=e.get(E,S)}return E}function m(v){let E=!1;const S=f(v);S===null?g(a,o):S&&S.isColor&&(g(S,1),E=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(v,E){const S=f(E);S&&S.isCubeTexture?(l===void 0&&(l=new it(new Mt(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Oi(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Op.makeRotationFromEuler(E.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply($c),l.material.toneMapped=tt.getTransfer(S.colorSpace)!==ct,(u!==S||h!==S.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,h=S.version,d=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new it(new qn(2,2),new Kn({name:"BackgroundMaterial",uniforms:Oi(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=tt.getTransfer(S.colorSpace)!==ct,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||h!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,h=S.version,d=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function g(v,E){v.getRGB($s,Hc(n)),t.buffers.color.setClear($s.r,$s.g,$s.b,E,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,E=1){a.set(v),o=E,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:m,addToRenderList:x,dispose:p}}function kp(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(F,k,te,N,J){let se=!1;const ne=h(F,N,te,k);r!==ne&&(r=ne,l(r.object)),se=f(F,N,te,J),se&&m(F,N,te,J),J!==null&&e.update(J,n.ELEMENT_ARRAY_BUFFER),(se||a)&&(a=!1,S(F,k,te,N),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function c(){return n.createVertexArray()}function l(F){return n.bindVertexArray(F)}function u(F){return n.deleteVertexArray(F)}function h(F,k,te,N){const J=N.wireframe===!0;let se=i[k.id];se===void 0&&(se={},i[k.id]=se);const ne=F.isInstancedMesh===!0?F.id:0;let ve=se[ne];ve===void 0&&(ve={},se[ne]=ve);let re=ve[te.id];re===void 0&&(re={},ve[te.id]=re);let fe=re[J];return fe===void 0&&(fe=d(c()),re[J]=fe),fe}function d(F){const k=[],te=[],N=[];for(let J=0;J<t;J++)k[J]=0,te[J]=0,N[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:te,attributeDivisors:N,object:F,attributes:{},index:null}}function f(F,k,te,N){const J=r.attributes,se=k.attributes;let ne=0;const ve=te.getAttributes();for(const re in ve)if(ve[re].location>=0){const de=J[re];let Ie=se[re];if(Ie===void 0&&(re==="instanceMatrix"&&F.instanceMatrix&&(Ie=F.instanceMatrix),re==="instanceColor"&&F.instanceColor&&(Ie=F.instanceColor)),de===void 0||de.attribute!==Ie||Ie&&de.data!==Ie.data)return!0;ne++}return r.attributesNum!==ne||r.index!==N}function m(F,k,te,N){const J={},se=k.attributes;let ne=0;const ve=te.getAttributes();for(const re in ve)if(ve[re].location>=0){let de=se[re];de===void 0&&(re==="instanceMatrix"&&F.instanceMatrix&&(de=F.instanceMatrix),re==="instanceColor"&&F.instanceColor&&(de=F.instanceColor));const Ie={};Ie.attribute=de,de&&de.data&&(Ie.data=de.data),J[re]=Ie,ne++}r.attributes=J,r.attributesNum=ne,r.index=N}function x(){const F=r.newAttributes;for(let k=0,te=F.length;k<te;k++)F[k]=0}function g(F){p(F,0)}function p(F,k){const te=r.newAttributes,N=r.enabledAttributes,J=r.attributeDivisors;te[F]=1,N[F]===0&&(n.enableVertexAttribArray(F),N[F]=1),J[F]!==k&&(n.vertexAttribDivisor(F,k),J[F]=k)}function v(){const F=r.newAttributes,k=r.enabledAttributes;for(let te=0,N=k.length;te<N;te++)k[te]!==F[te]&&(n.disableVertexAttribArray(te),k[te]=0)}function E(F,k,te,N,J,se,ne){ne===!0?n.vertexAttribIPointer(F,k,te,J,se):n.vertexAttribPointer(F,k,te,N,J,se)}function S(F,k,te,N){x();const J=N.attributes,se=te.getAttributes(),ne=k.defaultAttributeValues;for(const ve in se){const re=se[ve];if(re.location>=0){let fe=J[ve];if(fe===void 0&&(ve==="instanceMatrix"&&F.instanceMatrix&&(fe=F.instanceMatrix),ve==="instanceColor"&&F.instanceColor&&(fe=F.instanceColor)),fe!==void 0){const de=fe.normalized,Ie=fe.itemSize,K=e.get(fe);if(K===void 0)continue;const M=K.buffer,R=K.type,z=K.bytesPerElement,G=R===n.INT||R===n.UNSIGNED_INT||fe.gpuType===so;if(fe.isInterleavedBufferAttribute){const Y=fe.data,Ee=Y.isInterleavedBuffer===!0?Y.stride:Y.itemSize,_e=fe.offset;if(Y.isInstancedInterleavedBuffer||Y.isInstancedBufferAttribute){for(let B=0;B<re.locationSize;B++)p(re.location+B,Y.meshPerAttribute);F.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let B=0;B<re.locationSize;B++)g(re.location+B);n.bindBuffer(n.ARRAY_BUFFER,M);for(let B=0;B<re.locationSize;B++)E(re.location+B,Ie/re.locationSize,R,de,Ee*z,(_e+Ie/re.locationSize*B)*z,G)}else{if(fe.isInstancedBufferAttribute){for(let Y=0;Y<re.locationSize;Y++)p(re.location+Y,fe.meshPerAttribute);F.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Y=0;Y<re.locationSize;Y++)g(re.location+Y);n.bindBuffer(n.ARRAY_BUFFER,M);for(let Y=0;Y<re.locationSize;Y++)E(re.location+Y,Ie/re.locationSize,R,de,Ie*z,Ie/re.locationSize*Y*z,G)}}else if(ne!==void 0){const de=ne[ve];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(re.location,de);break;case 3:n.vertexAttrib3fv(re.location,de);break;case 4:n.vertexAttrib4fv(re.location,de);break;default:n.vertexAttrib1fv(re.location,de)}}}}v()}function C(){I();for(const F in i){const k=i[F];for(const te in k){const N=k[te];for(const J in N){const se=N[J];for(const ne in se)u(se[ne].object),delete se[ne];delete N[J]}}delete i[F]}}function w(F){if(i[F.id]===void 0)return;const k=i[F.id];for(const te in k){const N=k[te];for(const J in N){const se=N[J];for(const ne in se)u(se[ne].object),delete se[ne];delete N[J]}}delete i[F.id]}function _(F){for(const k in i){const te=i[k];for(const N in te){const J=te[N];if(J[F.id]===void 0)continue;const se=J[F.id];for(const ne in se)u(se[ne].object),delete se[ne];delete J[F.id]}}}function A(F){for(const k in i){const te=i[k],N=F.isInstancedMesh===!0?F.id:0,J=te[N];if(J!==void 0){for(const se in J){const ne=J[se];for(const ve in ne)u(ne[ve].object),delete ne[ve];delete J[se]}delete te[N],Object.keys(te).length===0&&delete i[k]}}}function I(){L(),a=!0,r!==s&&(r=s,l(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:L,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfObject:A,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function Gp(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let d=0;for(let f=0;f<u;f++)d+=l[f];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Hp(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Mn&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const A=_===gn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Jt&&_!==pn&&!A&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(He("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&He("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:S,maxSamples:C,samples:w}}function Vp(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Wn,o=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const m=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!s||m===null||m.length===0||r&&!g)r?u(null):l();else{const v=r?0:i,E=v*4;let S=p.clippingState||null;c.value=S,S=u(m,d,E,f);for(let C=0;C!==E;++C)S[C]=t[C];p.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,m){const x=h!==null?h.length:0;let g=null;if(x!==0){if(g=c.value,m!==!0||g===null){const p=f+x*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let E=0,S=f;E!==x;++E,S+=4)a.copy(h[E]).applyMatrix4(v,o),a.normal.toArray(g,S),g[S+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}class yo extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Fc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Mt(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:Oi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:Li});r.uniforms.tEquirect.value=t;const a=new it(s,r),o=t.minFilter;return t.minFilter===In&&(t.minFilter=Zt),new Qa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const _l=256,Wp=3,Xp=20,Kc=256,Jc=16,qp=3,Yp=new H,$p=new Ve;class vs{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Qa(1,10,null),this._boxMesh=new it(new Mt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=Yp}=r,c=this._renderer;this._setSize(a);const l=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const h=c.autoClear,d=c.autoClearColor,f=c.autoClearDepth,m=c.autoClearStencil,x=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,x===null&&(e.background=c.getClearColor($p));const g=new Qa(i,s,u);return g.position.copy(o),g.update(c,e),c.autoClear=h,c.autoClearColor=d,c.autoClearDepth=f,c.autoClearStencil=m,e.background=x,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ml(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(_l,nf(e))}_fromTexture(e,t){e.mapping===Ui||e.mapping===ms?this._setSize(e.image.length===0?_l:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,t=vl(e,!1,!1),i=Math.log2(e)-Wp;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=vl(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){const s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ui||e.mapping===ms?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ml()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=yl()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Kp(),this._integrationMaterial=Jp());const t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Jc);for(let a=0;a<=i;a++){const o=vs.lodToRoughness(a,i);if(a>i-qp)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const c=o>0?Math.log2(t)+.5*Math.log2(6/(Kc*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Zp());const i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}}function vl(n,e,t){return new yo(n,{minFilter:In,generateMipmaps:e,type:gn,colorSpace:gr,depthBuffer:t})}function bs(n,e,t){return new Kn({name:n,uniforms:e,vertexShader:Ze.cube_vert,fragmentShader:t,side:Vt,blending:Li,depthTest:!1,depthWrite:!1})}function Kp(){return bs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Kc}u

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
	`)}function Jp(){return bs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Jc}},`

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
	`)}function Zp(){return bs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Xp}
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
	`)}function yl(){return bs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Ml(){return bs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Qp(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===Rr||f===Cr)if(e.has(d)){const m=e.get(d).texture;return o(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const x=new yo(m.height);return x.fromEquirectangularTexture(n,d),e.set(d,x),d.addEventListener("dispose",l),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const f=d.mapping,m=f===Rr||f===Cr,x=f===Ui||f===ms;if(m||x){let g=t.get(d);const p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new vs(n)),g=m?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const v=d.image;return m&&v&&v.height>0||x&&v&&c(v)?(i===null&&(i=new vs(n)),g=m?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function o(d,f){return f===Rr?d.mapping=Ui:f===Cr&&(d.mapping=ms),d}function c(d){let f=0;const m=6;for(let x=0;x<m;x++)d[x]!==void 0&&f++;return f===m}function l(d){const f=d.target;f.removeEventListener("dispose",l);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(d){const f=d.target;f.removeEventListener("dispose",u);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function jp(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ar("WebGLRenderer: "+i+" extension not supported."),s}}}function em(n,e,t,i){const s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){c(m.target)}function c(m){m.index!==null&&e.remove(m.index);for(const g in m.attributes)e.remove(m.attributes[g]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);const x=r.get(m);x&&(e.remove(x),r.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(m,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function u(m){const x=m.attributes;for(const g in x)e.update(x[g],n.ARRAY_BUFFER)}function h(m){const x=m.index,g=m.attributes.position;let p=0;if(g===void 0)return;const v=x!==null?x.array.length:g.array.length/3-1,E=g.count>=65535?Ic:Dc,S=new E(Math.ceil(v/3)*6,1),C=S.array;if(x!==null){const _=x.array;p=x.version;for(let A=0,I=0;A<v;A+=3){const L=_[A+0],F=_[A+1],k=_[A+2];C[I++]=L,C[I++]=F,C[I++]=F,C[I++]=k,C[I++]=k,C[I++]=L}}else{p=g.version;for(let _=0,A=0;_<v;_+=3){const I=_+0,L=_+1,F=_+2;C[A++]=I,C[A++]=L,C[A++]=L,C[A++]=F,C[A++]=F,C[A++]=I}}S.version=p;const w=r.get(m);w&&e.remove(w),r.set(m,S)}function d(m){const x=r.get(m);if(x){const g=m.index;g!==null&&x.version<g.version&&h(m)}else h(m);return r.get(m)}function f(){for(const m in s){const x=s[m].deref();x!==void 0&&c(x)}}return{get:l,update:u,getWireframeAttribute:d,dispose:f}}function tm(n,e,t){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function c(h,d){n.drawElements(i,d,r,h*a),t.update(d,i,1)}function l(h,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,h*a,f),t.update(d,i,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,f);let x=0;for(let g=0;g<f;g++)x+=d[g];t.update(x,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function nm(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:rt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function im(n,e,t){const i=new WeakMap,s=new _t;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let I=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",I)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let E=0;f===!0&&(E=1),m===!0&&(E=2),x===!0&&(E=3);let S=o.attributes.position.count*E,C=1;S>e.maxTextureSize&&(C=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const w=new Float32Array(S*C*4*h),_=new Rc(w,S,C,h);_.type=pn,_.needsUpdate=!0;const A=E*4;for(let L=0;L<h;L++){const F=g[L],k=p[L],te=v[L],N=S*C*4*L;for(let J=0;J<F.count;J++){const se=J*A;f===!0&&(s.fromBufferAttribute(F,J),w[N+se+0]=s.x,w[N+se+1]=s.y,w[N+se+2]=s.z,w[N+se+3]=0),m===!0&&(s.fromBufferAttribute(k,J),w[N+se+4]=s.x,w[N+se+5]=s.y,w[N+se+6]=s.z,w[N+se+7]=0),x===!0&&(s.fromBufferAttribute(te,J),w[N+se+8]=s.x,w[N+se+9]=s.y,w[N+se+10]=s.z,w[N+se+11]=te.itemSize===4?s.w:1)}}d={count:h,texture:_,size:new ke(S,C)},i.set(o,d),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];const m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",m),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function sm(n,e,t,i,s){let r=new WeakMap;function a(l){const u=s.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const rm={[uc]:"LINEAR_TONE_MAPPING",[fc]:"REINHARD_TONE_MAPPING",[dc]:"CINEON_TONE_MAPPING",[hc]:"ACES_FILMIC_TONE_MAPPING",[mc]:"AGX_TONE_MAPPING",[gc]:"NEUTRAL_TONE_MAPPING",[pc]:"CUSTOM_TONE_MAPPING"};function am(n,e,t,i,s,r){const a=new Qt(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null,l=null;const u=new Xt;u.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new at([0,2,0,0,2,0],2));const h=new $f({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new it(u,h),f=new qc(-1,1,1,-1,0,1);let m=null,x=null,g=!1,p,v=null,E=[],S=!1;this.setSize=function(C,w){a.setSize(C,w),o!==null&&o.setSize(C,w),c!==null&&c.setSize(C,w);for(let _=0;_<E.length;_++){const A=E[_];A.setSize&&A.setSize(C,w)}},this.setEffects=function(C){E=C,S=E.length>0&&E[0].isRenderPass===!0;const w=a.width,_=a.height;E.length>0&&o===null&&(o=new Qt(w,_,{type:gn,depthBuffer:!1,stencilBuffer:!1}),c=new Qt(w,_,{type:gn,depthBuffer:!1,stencilBuffer:!1}));const A=s===!0&&E.some(I=>I.needsDepthTexture===!0);A!==(a.depthTexture!==null)&&(A===!0&&l===null&&(l=new zi(w,_),r===!0&&(l.format=Xn,l.type=Ni)),a.dispose(),a.depthTexture=A?l:null,a.resolveDepthBuffer=A,a.storeMultisampledDepthBuffer=A);for(let I=0;I<E.length;I++){const L=E[I];L.setSize&&L.setSize(w,_),A&&L.needsDepthTexture===!0&&L.setDepthTexture&&L.setDepthTexture(l)}},this.begin=function(C,w){if(g||C.toneMapping===Sn&&E.length===0)return!1;if(v=w,w!==null){const _=w.width,A=w.height;(a.width!==_||a.height!==A)&&this.setSize(_,A)}return S===!1&&C.setRenderTarget(a),p=C.toneMapping,C.toneMapping=Sn,!0},this.hasRenderPass=function(){return S},this.end=function(C,w){C.toneMapping=p,g=!0;let _=a,A=o;for(let I=0;I<E.length;I++){const L=E[I];L.enabled!==!1&&(L.render(C,A,_,w),L.needsSwap!==!1&&(_=A,A=A===o?c:o))}if(m!==C.outputColorSpace||x!==C.toneMapping){m=C.outputColorSpace,x=C.toneMapping,h.defines={},tt.getTransfer(m)===ct&&(h.defines.SRGB_TRANSFER="");const I=rm[x];I&&(h.defines[I]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=_.texture,C.setRenderTarget(v),C.render(d,f),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),h.dispose()}}const Zc=new Ot,Qc=new zi(1,1),jc=new zc(1),eu=new Rc,tu=new ff,nu=new Fc,Sl=[],bl=[],El=new Float32Array(16),wl=new Float32Array(9),Tl=new Float32Array(4);function Gi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Sl[s];if(r===void 0&&(r=new Float32Array(s),Sl[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function br(n,e){let t=bl[e];t===void 0&&(t=new Int32Array(e),bl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function om(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function lm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function cm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function um(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function fm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,i))return;Tl.set(i),n.uniformMatrix2fv(this.addr,!1,Tl),wt(t,i)}}function dm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,i))return;wl.set(i),n.uniformMatrix3fv(this.addr,!1,wl),wt(t,i)}}function hm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,i))return;El.set(i),n.uniformMatrix4fv(this.addr,!1,El),wt(t,i)}}function pm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function mm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),wt(t,e)}}function gm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),wt(t,e)}}function xm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),wt(t,e)}}function _m(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function vm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),wt(t,e)}}function ym(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),wt(t,e)}}function Mm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),wt(t,e)}}function Er(n){return n.version===0&&(n.compareFunction=Tc,n.needsUpdate=!0),n}function Sm(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Er(Qc):r=Zc,t.setTexture2D(e||r,s)}function bm(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||tu,s)}function Em(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Er(jc):r=nu,t.setTextureCube(e||r,s)}function wm(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||eu,s)}function Tm(n){switch(n){case 5126:return om;case 35664:return lm;case 35665:return cm;case 35666:return um;case 35674:return fm;case 35675:return dm;case 35676:return hm;case 5124:case 35670:return pm;case 35667:case 35671:return mm;case 35668:case 35672:return gm;case 35669:case 35673:return xm;case 5125:return _m;case 36294:return vm;case 36295:return ym;case 36296:return Mm;case 35678:case 36198:case 36298:case 36306:case 35682:return Sm;case 35679:case 36299:case 36307:return bm;case 35680:case 36300:case 36308:case 36293:return Em;case 36289:case 36303:case 36311:case 36292:return wm}}function Am(n,e){n.uniform1fv(this.addr,e)}function Rm(n,e){const t=Gi(e,this.size,2);n.uniform2fv(this.addr,t)}function Cm(n,e){const t=Gi(e,this.size,3);n.uniform3fv(this.addr,t)}function Pm(n,e){const t=Gi(e,this.size,4);n.uniform4fv(this.addr,t)}function Lm(n,e){const t=Gi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Dm(n,e){const t=Gi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Im(n,e){const t=Gi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Um(n,e){n.uniform1iv(this.addr,e)}function Nm(n,e){n.uniform2iv(this.addr,e)}function Fm(n,e){n.uniform3iv(this.addr,e)}function zm(n,e){n.uniform4iv(this.addr,e)}function Om(n,e){n.uniform1uiv(this.addr,e)}function Bm(n,e){n.uniform2uiv(this.addr,e)}function km(n,e){n.uniform3uiv(this.addr,e)}function Gm(n,e){n.uniform4uiv(this.addr,e)}function Hm(n,e,t){const i=this.cache,s=e.length,r=br(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Er(Qc):a=Zc;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Vm(n,e,t){const i=this.cache,s=e.length,r=br(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||tu,r[a])}function Wm(n,e,t){const i=this.cache,s=e.length,r=br(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Er(jc):a=nu;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function Xm(n,e,t){const i=this.cache,s=e.length,r=br(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||eu,r[a])}function qm(n){switch(n){case 5126:return Am;case 35664:return Rm;case 35665:return Cm;case 35666:return Pm;case 35674:return Lm;case 35675:return Dm;case 35676:return Im;case 5124:case 35670:return Um;case 35667:case 35671:return Nm;case 35668:case 35672:return Fm;case 35669:case 35673:return zm;case 5125:return Om;case 36294:return Bm;case 36295:return km;case 36296:return Gm;case 35678:case 36198:case 36298:case 36306:case 35682:return Hm;case 35679:case 36299:case 36307:return Vm;case 35680:case 36300:case 36308:case 36293:return Wm;case 36289:case 36303:case 36311:case 36292:return Xm}}class Ym{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Tm(t.type)}}class $m{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qm(t.type)}}class Km{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const sa=/(\w+)(\])?(\[|\.)?/g;function Al(n,e){n.seq.push(e),n.map[e.id]=e}function Jm(n,e,t){const i=n.name,s=i.length;for(sa.lastIndex=0;;){const r=sa.exec(i),a=sa.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Al(t,l===void 0?new Ym(o,n,e):new $m(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new Km(o),Al(t,h)),t=h}}}class lr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Jm(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Rl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Zm=37297;let Qm=0;function jm(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Cl=new Ye;function e0(n){tt._getMatrix(Cl,tt.workingColorSpace,n);const e=`mat3( ${Cl.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(n)){case xr:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Pl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+jm(n.getShaderSource(e),o)}else return r}function t0(n,e){const t=e0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const n0={[uc]:"Linear",[fc]:"Reinhard",[dc]:"Cineon",[hc]:"ACESFilmic",[mc]:"AgX",[gc]:"Neutral",[pc]:"Custom"};function i0(n,e){const t=n0[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ks=new H;function s0(){tt.getLuminanceCoefficients(Ks);const n=Ks.x.toFixed(4),e=Ks.y.toFixed(4),t=Ks.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(as).join(`
`)}function a0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function o0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function as(n){return n!==""}function Ll(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Dl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const l0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ja(n){return n.replace(l0,c0)}function c0(n,e){const t=Ze[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return ja(t)}const u0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Il(n){return n.replace(u0,f0)}function f0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ul(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const d0={[cs]:"SHADOWMAP_TYPE_PCF",[rs]:"SHADOWMAP_TYPE_VSM"};function h0(n){return d0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const p0={[ms]:"ENVMAP_MODE_REFRACTION"};function m0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":p0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const g0={[io]:"ENVMAP_BLENDING_MULTIPLY",[Bu]:"ENVMAP_BLENDING_MIX",[ku]:"ENVMAP_BLENDING_ADD"};function x0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":g0[n.combine]||"ENVMAP_BLENDING_NONE"}function _0(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=h0(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=m0(t),h=x0(t),d=r0(t),f=a0(r),m=s.createProgram();let x,g,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(as).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(as).join(`
`),g.length>0&&(g+=`
`)):(x=[Ul(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(as).join(`
`),g=[Ul(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sn?"#define TONE_MAPPING":"",t.toneMapping!==Sn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Sn?i0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,t0("linearToOutputTexel",t.outputColorSpace),s0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(as).join(`
`)),a=ja(a),a=Ll(a,t),a=Dl(a,t),o=ja(o),o=Ll(o,t),o=Dl(o,t),a=Il(a),o=Il(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",t.glslVersion===Ho?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ho?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=p+x+a,E=p+g+o,S=Rl(s,s.VERTEX_SHADER,v),C=Rl(s,s.FRAGMENT_SHADER,E);s.attachShader(m,S),s.attachShader(m,C),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function w(L){if(n.debug.checkShaderErrors){const F=s.getProgramInfoLog(m)||"",k=s.getShaderInfoLog(S)||"",te=s.getShaderInfoLog(C)||"",N=F.trim(),J=k.trim(),se=te.trim();let ne=!0,ve=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,S,C);else{const re=Pl(s,S,"vertex"),fe=Pl(s,C,"fragment");rt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+N+`
`+re+`
`+fe)}else N!==""?He("WebGLProgram: Program Info Log:",N):(J===""||se==="")&&(ve=!1);ve&&(L.diagnostics={runnable:ne,programLog:N,vertexShader:{log:J,prefix:x},fragmentShader:{log:se,prefix:g}})}s.deleteShader(S),s.deleteShader(C),_=new lr(s,m),A=o0(s,m)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let A;this.getAttributes=function(){return A===void 0&&w(this),A};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(m,Zm)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qm++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=C,this}let v0=0;class y0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new M0(e),t.set(e,i)),i}}class M0{constructor(e){this.id=v0++,this.code=e,this.usedTimes=0}}function S0(n){return n===oi||n===hr||n===pr}function b0(n,e,t,i,s,r){const a=new Cc,o=new y0,c=new Set,l=[],u=new Map,h=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,A,I,L,F,k){const te=L.fog,N=F.geometry,J=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,se=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ne=e.get(_.envMap||J,se),ve=d[_.type];let re=i.precision;_.precision!==null&&(re=i.getMaxPrecision(_.precision),re!==_.precision&&He("WebGLProgram.getParameters:",_.precision,"not supported, using",re,"instead."));const fe=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,de=fe!==void 0?fe.length:0;let Ie=0;N.morphAttributes.position!==void 0&&(Ie=1),N.morphAttributes.normal!==void 0&&(Ie=2),N.morphAttributes.color!==void 0&&(Ie=3);let K,M,R,z;if(ve){const Pe=vn[ve];K=Pe.vertexShader,M=Pe.fragmentShader}else{K=_.vertexShader,M=_.fragmentShader;const Pe=o.getVertexShaderStage(_),lt=o.getFragmentShaderStage(_);o.update(_,Pe,lt),R=Pe.id,z=lt.id}const G=n.getRenderTarget(),Y=n.state.buffers.depth.getReversed(),Ee=F.isInstancedMesh===!0,_e=F.isBatchedMesh===!0,B=!!_.map,ce=!!_.matcap,ye=!!ne,pe=ye&&ne.isPMREMTexture===!0,me=!!_.aoMap,ze=!!_.lightMap,We=!!_.bumpMap&&_.wireframe===!1,Ke=!!_.normalMap,mt=!!_.displacementMap,ft=!!_.emissiveMap,qt=!!_.metalnessMap,Yt=!!_.roughnessMap,$t=_.anisotropy>0,W=_.clearcoat>0,b=_.diffuseRoughness>0,$=_.dispersion>0,X=_.retroreflectivity>0,V=_.iridescence>0,Se=_.sheen>0,q=_.transmission>0,he=$t&&!!_.anisotropyMap,P=W&&!!_.clearcoatMap,y=W&&!!_.clearcoatNormalMap,D=W&&!!_.clearcoatRoughnessMap,j=b&&!!_.diffuseRoughnessMap,ee=V&&!!_.iridescenceMap,ge=V&&!!_.iridescenceThicknessMap,xe=Se&&!!_.sheenColorMap,ae=Se&&!!_.sheenRoughnessMap,oe=!!_.specularMap,Me=!!_.specularColorMap,U=!!_.specularIntensityMap,ue=q&&!!_.transmissionMap,le=q&&!!_.thicknessMap,Ae=!!_.gradientMap,we=!!_.alphaMap,Te=_.alphaTest>0,Be=!!_.alphaHash,Je=!!_.extensions;let be=Sn;_.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(be=n.toneMapping);const Ge=pe?ne.isCompressedCubeTexture?ne.image[0].mipmaps:ne.mipmaps:null,$e={shaderID:ve,shaderType:_.type,shaderName:_.name,vertexShader:K,fragmentShader:M,defines:_.defines,customVertexShaderID:R,customFragmentShaderID:z,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:re,batching:_e,batchingColor:_e&&F._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&F.instanceColor!==null,instancingMorph:Ee&&F.morphTexture!==null,outputColorSpace:G===null?n.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:B,matcap:ce,envMap:ye,envMapMode:ye&&ne.mapping,envMapPMREM:pe,envMapMaxLod:pe?Ge.length-1:null,envMapSize:pe?Ge[0].width:null,aoMap:me,lightMap:ze,bumpMap:We,normalMap:Ke,displacementMap:mt,emissiveMap:ft,normalMapObjectSpace:Ke&&_.normalMapType===Vu,normalMapTangentSpace:Ke&&_.normalMapType===mr,packedNormalMap:Ke&&_.normalMapType===mr&&S0(_.normalMap.format),metalnessMap:qt,roughnessMap:Yt,anisotropy:$t,anisotropyMap:he,clearcoat:W,clearcoatMap:P,clearcoatNormalMap:y,clearcoatRoughnessMap:D,diffuseRoughness:b,diffuseRoughnessMap:j,dispersion:$,retroreflection:X,iridescence:V,iridescenceMap:ee,iridescenceThicknessMap:ge,sheen:Se,sheenColorMap:xe,sheenRoughnessMap:ae,specularMap:oe,specularColorMap:Me,specularIntensityMap:U,transmission:q,transmissionMap:ue,thicknessMap:le,gradientMap:Ae,opaque:_.transparent===!1&&_.blending===us&&_.alphaToCoverage===!1,alphaMap:we,alphaTest:Te,alphaHash:Be,combine:_.combine,mapUv:B&&f(_.map.channel),aoMapUv:me&&f(_.aoMap.channel),lightMapUv:ze&&f(_.lightMap.channel),bumpMapUv:We&&f(_.bumpMap.channel),normalMapUv:Ke&&f(_.normalMap.channel),displacementMapUv:mt&&f(_.displacementMap.channel),emissiveMapUv:ft&&f(_.emissiveMap.channel),metalnessMapUv:qt&&f(_.metalnessMap.channel),roughnessMapUv:Yt&&f(_.roughnessMap.channel),anisotropyMapUv:he&&f(_.anisotropyMap.channel),clearcoatMapUv:P&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:y&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:D&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:j&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:ee&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:ae&&f(_.sheenRoughnessMap.channel),specularMapUv:oe&&f(_.specularMap.channel),specularColorMapUv:Me&&f(_.specularColorMap.channel),specularIntensityMapUv:U&&f(_.specularIntensityMap.channel),transmissionMapUv:ue&&f(_.transmissionMap.channel),thicknessMapUv:le&&f(_.thicknessMap.channel),alphaMapUv:we&&f(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Ke||$t),vertexNormals:!!N.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!N.attributes.uv&&(B||we),fog:!!te,useFog:_.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||N.attributes.normal===void 0&&Ke===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Y,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Ie,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:k.filter(Pe=>Pe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:be,decodeVideoTexture:B&&_.map.isVideoTexture===!0&&tt.getTransfer(_.map.colorSpace)===ct,decodeVideoTextureEmissive:ft&&_.emissiveMap.isVideoTexture===!0&&tt.getTransfer(_.emissiveMap.colorSpace)===ct,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Pn,flipSided:_.side===Vt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Je&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&_.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return $e.vertexUv1s=c.has(1),$e.vertexUv2s=c.has(2),$e.vertexUv3s=c.has(3),c.clear(),$e}function x(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const I in _.defines)A.push(I),A.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(g(A,_),p(A,_),A.push(n.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function g(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapPMREM),_.push(A.envMapMaxLod),_.push(A.envMapSize),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.diffuseRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.numSunLights),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numSunLightShadows),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.numLightProbeGrids),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function p(_,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.diffuseRoughness&&a.enable(25),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function v(_){const A=d[_.type];let I;if(A){const L=vn[A];I=Xf.clone(L.uniforms)}else I=_.uniforms;return I}function E(_,A){let I=u.get(A);return I!==void 0?++I.usedTimes:(I=new _0(n,A,_,s),l.push(I),u.set(A,I)),I}function S(_){if(--_.usedTimes===0){const A=l.indexOf(_);l[A]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function C(_){o.remove(_)}function w(){o.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:v,acquireProgram:E,releaseProgram:S,releaseShaderCache:C,programs:l,dispose:w}}function E0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function w0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Nl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Fl(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,x,g,p){let v=n[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:m,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:g,group:p},n[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=m,v.materialVariant=a(d),v.groupOrder=x,v.renderOrder=d.renderOrder,v.z=g,v.group=p),e++,v}function c(d,f,m,x,g,p,v){v.reversedDepth===!0&&(g=-g);const E=o(d,f,m,x,g,p);m.transmission>0?i.push(E):m.transparent===!0?s.push(E):t.push(E)}function l(d,f,m,x,g,p){const v=o(d,f,m,x,g,p);m.transmission>0?i.unshift(v):m.transparent===!0?s.unshift(v):t.unshift(v)}function u(d,f){t.length>1&&t.sort(d||w0),i.length>1&&i.sort(f||Nl),s.length>1&&s.sort(f||Nl)}function h(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:h,sort:u}}function T0(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Fl,n.set(i,[a])):s>=r.length?(a=new Fl,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function A0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new H,color:new Ve};break;case"SpotLight":t={position:new H,direction:new H,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function R0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let C0=0;function P0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function L0(n){const e=new A0,t=R0(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new H);const s=new H,r=new ot,a=new ot;function o(l){let u=0,h=0,d=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,v=0,E=0,S=0,C=0,w=0,_=0,A=0,I=0,L=0;l.sort(P0);for(let k=0,te=l.length;k<te;k++){const N=l[k],J=N.color,se=N.intensity,ne=N.distance;let ve=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===oi?ve=N.shadow.map.texture:ve=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=J.r*se,h+=J.g*se,d+=J.b*se;else if(N.isLightProbe){for(let re=0;re<9;re++)i.probe[re].addScaledVector(N.sh.coefficients[re],se);L++}else if(N.isSunLight){const re=e.get(N);if(re.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const fe=N.shadow,de=t.get(N);de.shadowIntensity=fe.intensity,de.shadowBias=fe.bias,de.shadowNormalBias=fe.normalBias,de.shadowRadius=fe.radius,de.shadowMapSize.copy(fe.mapSize).multiply(fe.getFrameExtents()),i.sunShadow[m]=de,i.sunShadowMap[m]=ve;const Ie=fe.getViewportCount();for(let K=0;K<Ie;K++)i.sunShadowMatrix[x+K]=fe.getMatrix(K),i.sunShadowCascade[x+K]=fe._cascadeData[K];x+=Ie,m++}i.sun[f]=re,f++}else if(N.isDirectionalLight){const re=e.get(N);if(re.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const fe=N.shadow,de=t.get(N);de.shadowIntensity=fe.intensity,de.shadowBias=fe.bias,de.shadowNormalBias=fe.normalBias,de.shadowRadius=fe.radius,de.shadowMapSize=fe.mapSize,i.directionalShadow[g]=de,i.directionalShadowMap[g]=ve,i.directionalShadowMatrix[g]=N.shadow.matrix,C++}i.directional[g]=re,g++}else if(N.isSpotLight){const re=e.get(N);re.position.setFromMatrixPosition(N.matrixWorld),re.color.copy(J).multiplyScalar(se),re.distance=ne,re.coneCos=Math.cos(N.angle),re.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),re.decay=N.decay,i.spot[v]=re;const fe=N.shadow;if(N.map&&(i.spotLightMap[A]=N.map,A++,fe.updateMatrices(N),N.castShadow&&I++),i.spotLightMatrix[v]=fe.matrix,N.castShadow){const de=t.get(N);de.shadowIntensity=fe.intensity,de.shadowBias=fe.bias,de.shadowNormalBias=fe.normalBias,de.shadowRadius=fe.radius,de.shadowMapSize=fe.mapSize,i.spotShadow[v]=de,i.spotShadowMap[v]=ve,_++}v++}else if(N.isRectAreaLight){const re=e.get(N);re.color.copy(J).multiplyScalar(se),re.halfWidth.set(N.width*.5,0,0),re.halfHeight.set(0,N.height*.5,0),i.rectArea[E]=re,E++}else if(N.isPointLight){const re=e.get(N);if(re.color.copy(N.color).multiplyScalar(N.intensity),re.distance=N.distance,re.decay=N.decay,N.castShadow){const fe=N.shadow,de=t.get(N);de.shadowIntensity=fe.intensity,de.shadowBias=fe.bias,de.shadowNormalBias=fe.normalBias,de.shadowRadius=fe.radius,de.shadowMapSize=fe.mapSize,de.shadowCameraNear=fe.camera.near,de.shadowCameraFar=fe.camera.far,i.pointShadow[p]=de,i.pointShadowMap[p]=ve,i.pointShadowMatrix[p]=N.shadow.matrix,w++}i.point[p]=re,p++}else if(N.isHemisphereLight){const re=e.get(N);re.skyColor.copy(N.color).multiplyScalar(se),re.groundColor.copy(N.groundColor).multiplyScalar(se),i.hemi[S]=re,S++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Le.LTC_FLOAT_1,i.rectAreaLTC2=Le.LTC_FLOAT_2):(i.rectAreaLTC1=Le.LTC_HALF_1,i.rectAreaLTC2=Le.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const F=i.hash;(F.sunLength!==f||F.directionalLength!==g||F.pointLength!==p||F.spotLength!==v||F.rectAreaLength!==E||F.hemiLength!==S||F.numSunShadows!==m||F.numDirectionalShadows!==C||F.numPointShadows!==w||F.numSpotShadows!==_||F.numSpotMaps!==A||F.numLightProbes!==L)&&(i.sun.length=f,i.directional.length=g,i.spot.length=v,i.rectArea.length=E,i.point.length=p,i.hemi.length=S,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.directionalShadowMatrix.length=C,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+A-I,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=L,F.sunLength=f,F.directionalLength=g,F.pointLength=p,F.spotLength=v,F.rectAreaLength=E,F.hemiLength=S,F.numSunShadows=m,F.numDirectionalShadows=C,F.numPointShadows=w,F.numSpotShadows=_,F.numSpotMaps=A,F.numLightProbes=L,i.version=C0++)}function c(l,u){let h=0,d=0,f=0,m=0,x=0,g=0;const p=u.matrixWorldInverse;for(let v=0,E=l.length;v<E;v++){const S=l[v];if(S.isSunLight){const C=i.sun[h];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(p),h++}else if(S.isDirectionalLight){const C=i.directional[d];C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),d++}else if(S.isSpotLight){const C=i.spot[m];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),m++}else if(S.isRectAreaLight){const C=i.rectArea[x];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(p),a.identity(),r.copy(S.matrixWorld),r.premultiply(p),a.extractRotation(r),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){const C=i.point[f];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){const C=i.hemi[g];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(p),g++}}}return{setup:o,setupView:c,state:i}}function zl(n){const e=new L0(n),t=[],i=[],s=[];function r(h){u.camera=h,t.length=0,i.length=0,s.length=0}function a(h){h.isLightProbeGrid?s.push(h):t.push(h)}function o(h){i.push(h)}function c(){e.setup(t),s.sort((h,d)=>h.priority-d.priority||h.id-d.id)}function l(h){e.setupView(t,h)}const u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function D0(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new zl(n),e.set(s,[o])):r>=a.length?(o=new zl(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const I0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U0=`uniform sampler2D shadow_pass;
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
}`,N0=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],F0=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Ol=new ot,Ki=new H,ra=new H;function z0(n,e,t){let i=new _s;const s=new ke,r=new ke,a=new _t,o=new Jf,c=new Zf,l={},u=t.maxTextureSize,h={[ai]:Vt,[Vt]:ai,[Pn]:Pn},d=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:I0,fragmentShader:U0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Xt;m.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new it(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cs;let p=this.type;this.render=function(w,_,A){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===yu&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=cs);const I=n.getRenderTarget(),L=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Li),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const te=p!==this.type;te&&_.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(J=>J.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,J=w.length;N<J;N++){const se=w[N],ne=se.shadow;if(ne===void 0){He("WebGLShadowMap:",se,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;s.copy(ne.mapSize);const ve=ne.getFrameExtents();s.multiply(ve),r.copy(ne.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ve.x),s.x=r.x*ve.x,ne.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ve.y),s.y=r.y*ve.y,ne.mapSize.y=r.y));const re=n.state.buffers.depth.getReversed();if(ne.camera._reversedDepth=re,ne.map===null||te===!0){if(ne.map!==null&&(ne.map.depthTexture!==null&&(ne.map.depthTexture.dispose(),ne.map.depthTexture=null),ne.map.dispose()),this.type===rs){if(se.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ne.map=new Qt(s.x,s.y,{format:oi,type:gn,minFilter:Zt,magFilter:Zt,generateMipmaps:!1}),ne.map.texture.name=se.name+".shadowMap",ne.map.depthTexture=new zi(s.x,s.y,pn),ne.map.depthTexture.name=se.name+".shadowMapDepth",ne.map.depthTexture.format=$n,ne.map.depthTexture.compareFunction=null,ne.map.depthTexture.minFilter=Dt,ne.map.depthTexture.magFilter=Dt}else se.isPointLight?(ne.map=new yo(s.x),ne.map.depthTexture=new zc(s.x,bn)):(ne.map=new Qt(s.x,s.y),ne.map.depthTexture=new zi(s.x,s.y,bn)),ne.map.depthTexture.name=se.name+".shadowMap",ne.map.depthTexture.format=$n,this.type===cs?(ne.map.depthTexture.compareFunction=re?wc:Ec,ne.map.depthTexture.minFilter=Zt,ne.map.depthTexture.magFilter=Zt):(ne.map.depthTexture.compareFunction=null,ne.map.depthTexture.minFilter=Dt,ne.map.depthTexture.magFilter=Dt);ne.camera.updateProjectionMatrix()}ne.map.isWebGLCubeRenderTarget!==!0&&(ne.map.width!==s.x||ne.map.height!==s.y)&&ne.map.setSize(s.x,s.y);const fe=ne.map.isWebGLCubeRenderTarget?6:ne.getViewportCount();se.isPointLight!==!0&&ne.updateMatrices(se,A);const de=(ne.camera.layers.mask&4294967294)!==0?ne.camera.layers:A.layers;for(let Ie=0;Ie<fe;Ie++){const K=ne.getCamera(Ie);if(se.isPointLight){const M=ne.camera,R=ne.matrix,z=se.distance||M.far;z!==M.far&&(M.far=z,M.updateProjectionMatrix()),Ki.setFromMatrixPosition(se.matrixWorld),M.position.copy(Ki),ra.copy(M.position),ra.add(N0[Ie]),M.up.copy(F0[Ie]),M.lookAt(ra),M.updateMatrixWorld(),R.makeTranslation(-Ki.x,-Ki.y,-Ki.z),Ol.multiplyMatrices(M.projectionMatrix,M.matrixWorldInverse),ne._frustum.setFromProjectionMatrix(Ol,M.coordinateSystem,M.reversedDepth)}if(ne.map.isWebGLCubeRenderTarget)n.setRenderTarget(ne.map,Ie),n.clear();else{Ie===0&&(n.setRenderTarget(ne.map),n.clear());const M=ne.getViewport(Ie);a.set(r.x*M.x,r.y*M.y,r.x*M.z,r.y*M.w),k.viewport(a)}i=ne.getFrustum(Ie),S(_,A,K,se,de,this.type)}ne.isPointLightShadow!==!0&&this.type===rs&&v(ne,A),ne.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(I,L,F)};function v(w,_){const A=e.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Qt(s.x,s.y,{format:oi,type:gn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(_,null,A,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(_,null,A,f,x,null)}function E(w,_,A,I){let L=null;const F=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0)L=F;else if(L=A.isPointLight===!0?c:o,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const k=L.uuid,te=_.uuid;let N=l[k];N===void 0&&(N={},l[k]=N);let J=N[te];J===void 0&&(J=L.clone(),N[te]=J,_.addEventListener("dispose",C)),L=J}if(L.visible=_.visible,L.wireframe=_.wireframe,I===rs?L.side=_.shadowSide!==null?_.shadowSide:_.side:L.side=_.shadowSide!==null?_.shadowSide:h[_.side],L.alphaMap=_.alphaMap,L.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,L.map=_.map,L.clipShadows=_.clipShadows,L.clippingPlanes=_.clippingPlanes,L.clipIntersection=_.clipIntersection,L.displacementMap=_.displacementMap,L.displacementScale=_.displacementScale,L.displacementBias=_.displacementBias,L.wireframeLinewidth=_.wireframeLinewidth,L.linewidth=_.linewidth,A.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const k=n.properties.get(L);k.light=A}return L}function S(w,_,A,I,L,F){if(w.visible===!1)return;if(w.layers.test(L)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&F===rs)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);const N=e.update(w),J=w.material;if(Array.isArray(J)){const se=N.groups;for(let ne=0,ve=se.length;ne<ve;ne++){const re=se[ne],fe=J[re.materialIndex];if(fe&&fe.visible){const de=E(w,fe,I,F);w.onBeforeShadow(n,w,_,A,N,de,re),n.renderBufferDirect(A,null,N,de,w,re),w.onAfterShadow(n,w,_,A,N,de,re)}}}else if(J.visible){const se=E(w,J,I,F);w.onBeforeShadow(n,w,_,A,N,se,null),n.renderBufferDirect(A,null,N,se,w,null),w.onAfterShadow(n,w,_,A,N,se,null)}}const te=w.children;for(let N=0,J=te.length;N<J;N++)S(te[N],_,A,I,L,F)}function C(w){w.target.removeEventListener("dispose",C);for(const A in l){const I=l[A],L=w.target.uuid;L in I&&(I[L].dispose(),delete I[L])}}}function O0(n,e){function t(){let U=!1;const ue=new _t;let le=null;const Ae=new _t(0,0,0,0);return{setMask:function(we){le!==we&&!U&&(n.colorMask(we,we,we,we),le=we)},setLocked:function(we){U=we},setClear:function(we,Te,Be,Je,be){be===!0&&(we*=Je,Te*=Je,Be*=Je),ue.set(we,Te,Be,Je),Ae.equals(ue)===!1&&(n.clearColor(we,Te,Be,Je),Ae.copy(ue))},reset:function(){U=!1,le=null,Ae.set(-1,0,0,0)}}}function i(){let U=!1,ue=!1,le=null,Ae=null,we=null;return{setReversed:function(Te){if(ue!==Te){const Be=e.get("EXT_clip_control");Te?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),ue=Te;const Je=we;we=null,this.setClear(Je)}},getReversed:function(){return ue},setTest:function(Te){Te?Y(n.DEPTH_TEST):Ee(n.DEPTH_TEST)},setMask:function(Te){le!==Te&&!U&&(n.depthMask(Te),le=Te)},setFunc:function(Te){if(ue&&(Te=ef[Te]),Ae!==Te){switch(Te){case pa:n.depthFunc(n.NEVER);break;case ma:n.depthFunc(n.ALWAYS);break;case ga:n.depthFunc(n.LESS);break;case ps:n.depthFunc(n.LEQUAL);break;case xa:n.depthFunc(n.EQUAL);break;case _a:n.depthFunc(n.GEQUAL);break;case va:n.depthFunc(n.GREATER);break;case ya:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ae=Te}},setLocked:function(Te){U=Te},setClear:function(Te){we!==Te&&(we=Te,ue&&(Te=1-Te),n.clearDepth(Te))},reset:function(){U=!1,le=null,Ae=null,we=null,ue=!1}}}function s(){let U=!1,ue=null,le=null,Ae=null,we=null,Te=null,Be=null,Je=null,be=null;return{setTest:function(Ge){U||(Ge?Y(n.STENCIL_TEST):Ee(n.STENCIL_TEST))},setMask:function(Ge){ue!==Ge&&!U&&(n.stencilMask(Ge),ue=Ge)},setFunc:function(Ge,$e,Pe){(le!==Ge||Ae!==$e||we!==Pe)&&(n.stencilFunc(Ge,$e,Pe),le=Ge,Ae=$e,we=Pe)},setOp:function(Ge,$e,Pe){(Te!==Ge||Be!==$e||Je!==Pe)&&(n.stencilOp(Ge,$e,Pe),Te=Ge,Be=$e,Je=Pe)},setLocked:function(Ge){U=Ge},setClear:function(Ge){be!==Ge&&(n.clearStencil(Ge),be=Ge)},reset:function(){U=!1,ue=null,le=null,Ae=null,we=null,Te=null,Be=null,Je=null,be=null}}}const r=new t,a=new i,o=new s;let c={};const l=new WeakMap;let u={},h={},d={},f=new WeakMap,m=[],x=null,g=!1,p=null,v=null,E=null,S=null,C=null,w=null,_=null,A=new Ve(0,0,0),I=0,L=!1,F=null,k=null,te=null,N=null,J=null;const se=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,ve=0;const re=n.getParameter(n.VERSION);re.indexOf("WebGL")!==-1?(ve=parseFloat(/^WebGL (\d)/.exec(re)[1]),ne=ve>=1):re.indexOf("OpenGL ES")!==-1&&(ve=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),ne=ve>=2);let fe=null,de={};const Ie=n.getParameter(n.SCISSOR_BOX),K=n.getParameter(n.VIEWPORT),M=new _t().fromArray(Ie),R=new _t().fromArray(K);function z(U,ue,le,Ae){const we=new Uint8Array(4),Te=n.createTexture();n.bindTexture(U,Te),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Be=0;Be<le;Be++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,Ae,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(ue+Be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return Te}const G={};G[n.TEXTURE_2D]=z(n.TEXTURE_2D,n.TEXTURE_2D,1),G[n.TEXTURE_CUBE_MAP]=z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[n.TEXTURE_2D_ARRAY]=z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),G[n.TEXTURE_3D]=z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Y(n.DEPTH_TEST),a.setFunc(ps),We(!1),Ke(Oo),Y(n.CULL_FACE),me(Li);function Y(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function Ee(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function _e(U,ue){return d[U]!==ue?(n.bindFramebuffer(U,ue),d[U]=ue,U===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ue),U===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function B(U,ue){let le=m,Ae=!1;if(U){le=f.get(ue),le===void 0&&(le=[],f.set(ue,le));const we=U.textures;if(le.length!==we.length||le[0]!==n.COLOR_ATTACHMENT0){for(let Te=0,Be=we.length;Te<Be;Te++)le[Te]=n.COLOR_ATTACHMENT0+Te;le.length=we.length,Ae=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,Ae=!0);Ae&&n.drawBuffers(le)}function ce(U){return x!==U?(n.useProgram(U),x=U,!0):!1}const ye={[Ci]:n.FUNC_ADD,[Su]:n.FUNC_SUBTRACT,[bu]:n.FUNC_REVERSE_SUBTRACT};ye[Eu]=n.MIN,ye[wu]=n.MAX;const pe={[Tu]:n.ZERO,[Au]:n.ONE,[Ru]:n.SRC_COLOR,[lc]:n.SRC_ALPHA,[Uu]:n.SRC_ALPHA_SATURATE,[Du]:n.DST_COLOR,[Pu]:n.DST_ALPHA,[Cu]:n.ONE_MINUS_SRC_COLOR,[cc]:n.ONE_MINUS_SRC_ALPHA,[Iu]:n.ONE_MINUS_DST_COLOR,[Lu]:n.ONE_MINUS_DST_ALPHA,[Nu]:n.CONSTANT_COLOR,[Fu]:n.ONE_MINUS_CONSTANT_COLOR,[zu]:n.CONSTANT_ALPHA,[Ou]:n.ONE_MINUS_CONSTANT_ALPHA};function me(U,ue,le,Ae,we,Te,Be,Je,be,Ge){if(U===Li){g===!0&&(Ee(n.BLEND),g=!1);return}if(g===!1&&(Y(n.BLEND),g=!0),U!==Mu){if(U!==p||Ge!==L){if((v!==Ci||C!==Ci)&&(n.blendEquation(n.FUNC_ADD),v=Ci,C=Ci),Ge)switch(U){case us:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bo:n.blendFunc(n.ONE,n.ONE);break;case ko:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Go:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:rt("WebGLState: Invalid blending: ",U);break}else switch(U){case us:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ko:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Go:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",U);break}E=null,S=null,w=null,_=null,A.set(0,0,0),I=0,p=U,L=Ge}return}we=we||ue,Te=Te||le,Be=Be||Ae,(ue!==v||we!==C)&&(n.blendEquationSeparate(ye[ue],ye[we]),v=ue,C=we),(le!==E||Ae!==S||Te!==w||Be!==_)&&(n.blendFuncSeparate(pe[le],pe[Ae],pe[Te],pe[Be]),E=le,S=Ae,w=Te,_=Be),(Je.equals(A)===!1||be!==I)&&(n.blendColor(Je.r,Je.g,Je.b,be),A.copy(Je),I=be),p=U,L=!1}function ze(U,ue){U.side===Pn?Ee(n.CULL_FACE):Y(n.CULL_FACE);let le=U.side===Vt;ue&&(le=!le),We(le),U.blending===us&&U.transparent===!1?me(Li):me(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const Ae=U.stencilWrite;o.setTest(Ae),Ae&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ft(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Y(n.SAMPLE_ALPHA_TO_COVERAGE):Ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function We(U){F!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),F=U)}function Ke(U){U!==_u?(Y(n.CULL_FACE),U!==k&&(U===Oo?n.cullFace(n.BACK):U===vu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ee(n.CULL_FACE),k=U}function mt(U){U!==te&&(ne&&n.lineWidth(U),te=U)}function ft(U,ue,le){U?(Y(n.POLYGON_OFFSET_FILL),(N!==ue||J!==le)&&(N=ue,J=le,a.getReversed()&&(ue=-ue,le=-le),n.polygonOffset(ue,le))):Ee(n.POLYGON_OFFSET_FILL)}function qt(U){U?Y(n.SCISSOR_TEST):Ee(n.SCISSOR_TEST)}function Yt(U){U===void 0&&(U=n.TEXTURE0+se-1),fe!==U&&(n.activeTexture(U),fe=U)}function $t(U,ue,le){le===void 0&&(fe===null?le=n.TEXTURE0+se-1:le=fe);let Ae=de[le];Ae===void 0&&(Ae={type:void 0,texture:void 0},de[le]=Ae),(Ae.type!==U||Ae.texture!==ue)&&(fe!==le&&(n.activeTexture(le),fe=le),n.bindTexture(U,ue||G[U]),Ae.type=U,Ae.texture=ue)}function W(){const U=de[fe];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function b(){try{n.compressedTexImage2D(...arguments)}catch(U){rt("WebGLState:",U)}}function $(){try{n.compressedTexImage3D(...arguments)}catch(U){rt("WebGLState:",U)}}function X(){try{n.texSubImage2D(...arguments)}catch(U){rt("WebGLState:",U)}}function V(){try{n.texSubImage3D(...arguments)}catch(U){rt("WebGLState:",U)}}function Se(){try{n.compressedTexSubImage2D(...arguments)}catch(U){rt("WebGLState:",U)}}function q(){try{n.compressedTexSubImage3D(...arguments)}catch(U){rt("WebGLState:",U)}}function he(){try{n.texStorage2D(...arguments)}catch(U){rt("WebGLState:",U)}}function P(){try{n.texStorage3D(...arguments)}catch(U){rt("WebGLState:",U)}}function y(){try{n.texImage2D(...arguments)}catch(U){rt("WebGLState:",U)}}function D(){try{n.texImage3D(...arguments)}catch(U){rt("WebGLState:",U)}}function j(U){return h[U]!==void 0?h[U]:n.getParameter(U)}function ee(U,ue){h[U]!==ue&&(n.pixelStorei(U,ue),h[U]=ue)}function ge(U){M.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),M.copy(U))}function xe(U){R.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),R.copy(U))}function ae(U,ue){let le=l.get(ue);le===void 0&&(le=new WeakMap,l.set(ue,le));let Ae=le.get(U);Ae===void 0&&(Ae=n.getUniformBlockIndex(ue,U.name),n.uniformBlockBinding(ue,Ae,Ae),le.set(U,Ae))}function oe(U,ue,le){const we=l.get(ue).get(U);c[we]!==le&&(n.bindBufferBase(n.UNIFORM_BUFFER,we,le),c[we]=le)}function Me(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},fe=null,de={},d={},c={},f=new WeakMap,m=[],x=null,g=!1,p=null,v=null,E=null,S=null,C=null,w=null,_=null,A=new Ve(0,0,0),I=0,L=!1,F=null,k=null,te=null,N=null,J=null,M.set(0,0,n.canvas.width,n.canvas.height),R.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Y,disable:Ee,bindFramebuffer:_e,drawBuffers:B,useProgram:ce,setBlending:me,setMaterial:ze,setFlipSided:We,setCullFace:Ke,setLineWidth:mt,setPolygonOffset:ft,setScissorTest:qt,activeTexture:Yt,bindTexture:$t,unbindTexture:W,compressedTexImage2D:b,compressedTexImage3D:$,texImage2D:y,texImage3D:D,pixelStorei:ee,getParameter:j,updateUBOMapping:ae,uniformBlockBinding:oe,texStorage2D:he,texStorage3D:P,texSubImage2D:X,texSubImage3D:V,compressedTexSubImage2D:Se,compressedTexSubImage3D:q,scissor:ge,viewport:xe,reset:Me}}function B0(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ke,u=new WeakMap,h=new Set;let d;const f=new WeakMap,m=new Set,x=new FinalizationRegistry(P=>m.delete(P));let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(P,y){return g?new OffscreenCanvas(P,y):_r("canvas")}function v(P,y,D){let j=1;const ee=he(P);if((ee.width>D||ee.height>D)&&(j=D/Math.max(ee.width,ee.height)),j<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ge=Math.floor(j*ee.width),xe=Math.floor(j*ee.height);d===void 0&&(d=p(ge,xe));const ae=y?p(ge,xe):d;return ae.width=ge,ae.height=xe,ae.getContext("2d").drawImage(P,0,0,ge,xe),He("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ge+"x"+xe+")."),ae}else return"data"in P&&He("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),P;return P}function E(P){return P.generateMipmaps}function S(P){n.generateMipmap(P)}function C(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(P,y,D,j,ee,ge=!1){if(P!==null){if(n[P]!==void 0)return n[P];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let xe;j&&(xe=e.get("EXT_texture_norm16"),xe||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ae=y;if(y===n.RED&&(D===n.FLOAT&&(ae=n.R32F),D===n.HALF_FLOAT&&(ae=n.R16F),D===n.UNSIGNED_BYTE&&(ae=n.R8),D===n.UNSIGNED_SHORT&&xe&&(ae=xe.R16_EXT),D===n.SHORT&&xe&&(ae=xe.R16_SNORM_EXT)),y===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(ae=n.R8UI),D===n.UNSIGNED_SHORT&&(ae=n.R16UI),D===n.UNSIGNED_INT&&(ae=n.R32UI),D===n.BYTE&&(ae=n.R8I),D===n.SHORT&&(ae=n.R16I),D===n.INT&&(ae=n.R32I)),y===n.RG&&(D===n.FLOAT&&(ae=n.RG32F),D===n.HALF_FLOAT&&(ae=n.RG16F),D===n.UNSIGNED_BYTE&&(ae=n.RG8),D===n.UNSIGNED_SHORT&&xe&&(ae=xe.RG16_EXT),D===n.SHORT&&xe&&(ae=xe.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(ae=n.RG8UI),D===n.UNSIGNED_SHORT&&(ae=n.RG16UI),D===n.UNSIGNED_INT&&(ae=n.RG32UI),D===n.BYTE&&(ae=n.RG8I),D===n.SHORT&&(ae=n.RG16I),D===n.INT&&(ae=n.RG32I)),y===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(ae=n.RGB8UI),D===n.UNSIGNED_SHORT&&(ae=n.RGB16UI),D===n.UNSIGNED_INT&&(ae=n.RGB32UI),D===n.BYTE&&(ae=n.RGB8I),D===n.SHORT&&(ae=n.RGB16I),D===n.INT&&(ae=n.RGB32I)),y===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(ae=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(ae=n.RGBA16UI),D===n.UNSIGNED_INT&&(ae=n.RGBA32UI),D===n.BYTE&&(ae=n.RGBA8I),D===n.SHORT&&(ae=n.RGBA16I),D===n.INT&&(ae=n.RGBA32I)),y===n.RGB&&(D===n.UNSIGNED_SHORT&&xe&&(ae=xe.RGB16_EXT),D===n.SHORT&&xe&&(ae=xe.RGB16_SNORM_EXT),D===n.UNSIGNED_INT_5_9_9_9_REV&&(ae=n.RGB9_E5),D===n.UNSIGNED_INT_10F_11F_11F_REV&&(ae=n.R11F_G11F_B10F)),y===n.RGBA){const oe=ge?xr:tt.getTransfer(ee);D===n.FLOAT&&(ae=n.RGBA32F),D===n.HALF_FLOAT&&(ae=n.RGBA16F),D===n.UNSIGNED_BYTE&&(ae=oe===ct?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT&&xe&&(ae=xe.RGBA16_EXT),D===n.SHORT&&xe&&(ae=xe.RGBA16_SNORM_EXT),D===n.UNSIGNED_SHORT_4_4_4_4&&(ae=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(ae=n.RGB5_A1)}return(ae===n.R16F||ae===n.R32F||ae===n.RG16F||ae===n.RG32F||ae===n.RGBA16F||ae===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function _(P,y){let D;return P?y===null||y===bn||y===Ni?D=n.DEPTH24_STENCIL8:y===pn?D=n.DEPTH32F_STENCIL8:y===gs&&(D=n.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===bn||y===Ni?D=n.DEPTH_COMPONENT24:y===pn?D=n.DEPTH_COMPONENT32F:y===gs&&(D=n.DEPTH_COMPONENT16),D}function A(P,y){return E(P)===!0||P.isFramebufferTexture&&P.minFilter!==Dt&&P.minFilter!==Zt?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function I(P){const y=new WeakRef(P);i.get(P).__ref=y,m.add(y),x.register(P,y,y)}function L(P){const y=i.get(P).__ref;y!==void 0&&(m.delete(y),x.unregister(y))}function F(P){te(P.target)}function k(P){N(P.target)}function te(P){P.removeEventListener("dispose",F),L(P),se(P),P.isVideoTexture&&u.delete(P),P.isHTMLTexture&&h.delete(P)}function N(P){P.removeEventListener("dispose",k),L(P),ve(P)}function J(){for(const P of m){const y=P.deref();y!==void 0&&(y.isRenderTarget===!0?N(y):te(y))}m.clear(),h.clear()}function se(P){const y=i.get(P);if(y.__webglInit===void 0)return;const D=P.source,j=f.get(D);if(j){const ee=j[y.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&ne(P),Object.keys(j).length===0&&f.delete(D)}i.remove(P)}function ne(P){const y=i.get(P);n.deleteTexture(y.__webglTexture);const D=P.source,j=f.get(D);delete j[y.__cacheKey],a.memory.textures--}function ve(P){const y=i.get(P);y.__depthDisposeCallback&&y.__depthDisposeCallback();const D=P.depthTexture;if(D&&D.renderTarget===P&&te(D),P.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(y.__webglFramebuffer[ee]))for(let ge=0;ge<y.__webglFramebuffer[ee].length;ge++)n.deleteFramebuffer(y.__webglFramebuffer[ee][ge]);else n.deleteFramebuffer(y.__webglFramebuffer[ee]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[ee])}else{if(Array.isArray(y.__webglFramebuffer))for(let ee=0;ee<y.__webglFramebuffer.length;ee++)n.deleteFramebuffer(y.__webglFramebuffer[ee]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ee=0;ee<y.__webglColorRenderbuffer.length;ee++)y.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[ee]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const j=P.textures;for(let ee=0,ge=j.length;ee<ge;ee++){const xe=i.get(j[ee]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),a.memory.textures--),i.remove(j[ee])}i.remove(P)}let re=0;function fe(){re=0}function de(){return re}function Ie(P){re=P}function K(){const P=re;return P>=s.maxTextures&&He("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),re+=1,P}function M(P){const y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.mipmapsAutoUpdate),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function R(P,y){const D=i.get(P);if(P.isVideoTexture&&Se(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&D.__version!==P.version){const j=P.image;if(j===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{ze(D,P,y);return}}else P.isExternalTexture&&(D.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+y)}function z(P,y){const D=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&D.__version!==P.version){ze(D,P,y);return}else P.isExternalTexture&&(D.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+y)}function G(P,y){const D=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&D.__version!==P.version){ze(D,P,y);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+y)}function Y(P,y){const D=i.get(P);if(P.version>0&&D.__version!==P.version){We(D,P,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+y)}const Ee={[dr]:n.REPEAT,[Dn]:n.CLAMP_TO_EDGE,[Ma]:n.MIRRORED_REPEAT},_e={[Dt]:n.NEAREST,[Gu]:n.NEAREST_MIPMAP_NEAREST,[As]:n.NEAREST_MIPMAP_LINEAR,[Zt]:n.LINEAR,[Pr]:n.LINEAR_MIPMAP_NEAREST,[In]:n.LINEAR_MIPMAP_LINEAR},B={[Xu]:n.NEVER,[Tc]:n.ALWAYS,[qu]:n.LESS,[Ec]:n.LEQUAL,[Yu]:n.EQUAL,[wc]:n.GEQUAL,[$u]:n.GREATER,[Ku]:n.NOTEQUAL};function ce(P,y){if(y.type===pn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Zt||y.magFilter===Pr||y.magFilter===As||y.magFilter===In||y.minFilter===Zt||y.minFilter===Pr||y.minFilter===As||y.minFilter===In)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,Ee[y.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,Ee[y.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,Ee[y.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,_e[y.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,_e[y.minFilter]),y.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,B[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Dt||y.minFilter!==As&&y.minFilter!==In||y.type===pn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ye(P,y){let D=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",F),I(y));const j=y.source;let ee=f.get(j);ee===void 0&&(ee={},f.set(j,ee));const ge=M(y);if(ge!==P.__cacheKey){ee[ge]===void 0&&(ee[ge]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,D=!0),ee[ge].usedTimes++;const xe=ee[P.__cacheKey];xe!==void 0&&(ee[P.__cacheKey].usedTimes--,xe.usedTimes===0&&ne(y)),P.__cacheKey=ge,P.__webglTexture=ee[ge].texture}return D}function pe(P,y,D){return Math.floor(Math.floor(P/D)/y)}function me(P,y,D,j){const ge=P.updateRanges;if(ge.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,D,j,y.data);else{ge.sort((U,ue)=>U.start-ue.start);let xe=0;for(let U=1;U<ge.length;U++){const ue=ge[xe],le=ge[U],Ae=ue.start+ue.count,we=pe(le.start,y.width,4),Te=pe(ue.start,y.width,4);le.start<=Ae+1&&we===Te&&pe(le.start+le.count-1,y.width,4)===we?ue.count=Math.max(ue.count,le.start+le.count-ue.start):(++xe,ge[xe]=le)}ge.length=xe+1;const ae=t.getParameter(n.UNPACK_ROW_LENGTH),oe=t.getParameter(n.UNPACK_SKIP_PIXELS),Me=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let U=0,ue=ge.length;U<ue;U++){const le=ge[U],Ae=Math.floor(le.start/4),we=Math.ceil(le.count/4),Te=Ae%y.width,Be=Math.floor(Ae/y.width),Je=we,be=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Te),t.pixelStorei(n.UNPACK_SKIP_ROWS,Be),t.texSubImage2D(n.TEXTURE_2D,0,Te,Be,Je,be,D,j,y.data)}P.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ae),t.pixelStorei(n.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Me)}}function ze(P,y,D){let j=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=n.TEXTURE_3D);const ee=ye(P,y),ge=y.source;t.bindTexture(j,P.__webglTexture,n.TEXTURE0+D);const xe=i.get(ge);if(ge.version!==xe.__version||ee===!0){if(t.activeTexture(n.TEXTURE0+D),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const be=tt.getPrimaries(tt.workingColorSpace),Ge=y.colorSpace===Ln?null:tt.getPrimaries(y.colorSpace),$e=y.colorSpace===Ln||be===Ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e)}t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let oe=v(y.image,!1,s.maxTextureSize);oe=q(y,oe);const Me=r.convert(y.format,y.colorSpace),U=r.convert(y.type);let ue=w(y.internalFormat,Me,U,y.normalized,y.colorSpace,y.isVideoTexture);ce(j,y);let le;const Ae=y.mipmaps,we=y.isVideoTexture!==!0,Te=xe.__version===void 0||ee===!0,Be=ge.dataReady,Je=A(y,oe);if(y.isDepthTexture)ue=_(y.format===Xn,y.type),Te&&(we?t.texStorage2D(n.TEXTURE_2D,1,ue,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,ue,oe.width,oe.height,0,Me,U,null));else if(y.isDataTexture)if(Ae.length>0){we&&Te&&t.texStorage2D(n.TEXTURE_2D,Je,ue,Ae[0].width,Ae[0].height);for(let be=0,Ge=Ae.length;be<Ge;be++)le=Ae[be],we?Be&&t.texSubImage2D(n.TEXTURE_2D,be,0,0,le.width,le.height,Me,U,le.data):t.texImage2D(n.TEXTURE_2D,be,ue,le.width,le.height,0,Me,U,le.data);y.generateMipmaps=!1}else we?(Te&&t.texStorage2D(n.TEXTURE_2D,Je,ue,oe.width,oe.height),Be&&me(y,oe,Me,U)):t.texImage2D(n.TEXTURE_2D,0,ue,oe.width,oe.height,0,Me,U,oe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){we&&Te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Je,ue,Ae[0].width,Ae[0].height,oe.depth);for(let be=0,Ge=Ae.length;be<Ge;be++)if(le=Ae[be],y.format!==Mn)if(Me!==null)if(we){if(Be)if(y.layerUpdates.size>0){const $e=xl(le.width,le.height,y.format,y.type);for(const Pe of y.layerUpdates){const lt=le.data.subarray(Pe*$e/le.data.BYTES_PER_ELEMENT,(Pe+1)*$e/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,Pe,le.width,le.height,1,Me,lt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,0,le.width,le.height,oe.depth,Me,le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,be,ue,le.width,le.height,oe.depth,0,le.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?Be&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,0,le.width,le.height,oe.depth,Me,U,le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,be,ue,le.width,le.height,oe.depth,0,Me,U,le.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{we&&Te&&t.texStorage2D(n.TEXTURE_2D,Je,ue,Ae[0].width,Ae[0].height);for(let be=0,Ge=Ae.length;be<Ge;be++)le=Ae[be],y.format!==Mn?Me!==null?we?Be&&t.compressedTexSubImage2D(n.TEXTURE_2D,be,0,0,le.width,le.height,Me,le.data):t.compressedTexImage2D(n.TEXTURE_2D,be,ue,le.width,le.height,0,le.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?Be&&t.texSubImage2D(n.TEXTURE_2D,be,0,0,le.width,le.height,Me,U,le.data):t.texImage2D(n.TEXTURE_2D,be,ue,le.width,le.height,0,Me,U,le.data)}else if(y.isDataArrayTexture)if(we){if(Te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Je,ue,oe.width,oe.height,oe.depth),Be)if(y.layerUpdates.size>0){const be=xl(oe.width,oe.height,y.format,y.type);for(const Ge of y.layerUpdates){const $e=oe.data.subarray(Ge*be/oe.data.BYTES_PER_ELEMENT,(Ge+1)*be/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ge,oe.width,oe.height,1,Me,U,$e)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Me,U,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ue,oe.width,oe.height,oe.depth,0,Me,U,oe.data);else if(y.isData3DTexture)we?(Te&&t.texStorage3D(n.TEXTURE_3D,Je,ue,oe.width,oe.height,oe.depth),Be&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Me,U,oe.data)):t.texImage3D(n.TEXTURE_3D,0,ue,oe.width,oe.height,oe.depth,0,Me,U,oe.data);else if(y.isFramebufferTexture){if(Te)if(we)t.texStorage2D(n.TEXTURE_2D,Je,ue,oe.width,oe.height);else{let be=oe.width,Ge=oe.height;for(let $e=0;$e<Je;$e++)t.texImage2D(n.TEXTURE_2D,$e,ue,be,Ge,0,Me,U,null),be>>=1,Ge>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){const be=n.canvas;if(be.hasAttribute("layoutsubtree")||be.setAttribute("layoutsubtree","true"),oe.parentNode!==be){be.appendChild(oe),h.add(y),be.onpaint=Ge=>{const $e=Ge.changedElements;for(const Pe of h)$e.includes(Pe.image)&&(Pe.needsUpdate=!0)},be.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,oe);else{const $e=n.RGBA,Pe=n.RGBA,lt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,$e,Pe,lt,oe)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(we&&Te){const be=he(Ae[0]);t.texStorage2D(n.TEXTURE_2D,Je,ue,be.width,be.height)}for(let be=0,Ge=Ae.length;be<Ge;be++)le=Ae[be],we?Be&&t.texSubImage2D(n.TEXTURE_2D,be,0,0,Me,U,le):t.texImage2D(n.TEXTURE_2D,be,ue,Me,U,le);y.generateMipmaps=!1}else if(we){if(Te){const be=he(oe);t.texStorage2D(n.TEXTURE_2D,Je,ue,be.width,be.height)}Be&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,U,oe)}else t.texImage2D(n.TEXTURE_2D,0,ue,Me,U,oe);E(y)&&y.mipmapsAutoUpdate===!0&&S(j),xe.__version=ge.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function We(P,y,D){if(y.image.length!==6)return;const j=ye(P,y),ee=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+D);const ge=i.get(ee);if(ee.version!==ge.__version||j===!0){t.activeTexture(n.TEXTURE0+D);const xe=tt.getPrimaries(tt.workingColorSpace),ae=y.colorSpace===Ln?null:tt.getPrimaries(y.colorSpace),oe=y.colorSpace===Ln||xe===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const Me=y.isCompressedTexture||y.image[0].isCompressedTexture,U=y.image[0]&&y.image[0].isDataTexture,ue=[];for(let Pe=0;Pe<6;Pe++)!Me&&!U?ue[Pe]=v(y.image[Pe],!0,s.maxCubemapSize):ue[Pe]=U?y.image[Pe].image:y.image[Pe],ue[Pe]=q(y,ue[Pe]);const le=ue[0],Ae=r.convert(y.format,y.colorSpace),we=r.convert(y.type);let Te=w(y.internalFormat,Ae,we,y.normalized,y.colorSpace);const Be=y.isVideoTexture!==!0,Je=ge.__version===void 0||j===!0,be=ee.dataReady;let Ge=A(y,le);ce(n.TEXTURE_CUBE_MAP,y);let $e;if(y.isDepthTexture){if(Te=_(y.format===Xn,y.type),Je)if(Be)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,Te,le.width,le.height);else for(let Pe=0;Pe<6;Pe++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Te,le.width,le.height,0,Ae,we,null)}else if(Me){Be&&Je&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ge,Te,le.width,le.height);for(let Pe=0;Pe<6;Pe++){$e=ue[Pe].mipmaps;for(let lt=0;lt<$e.length;lt++){const Tt=$e[lt];y.format!==Mn?Ae!==null?Be?be&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,lt,0,0,Tt.width,Tt.height,Ae,Tt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,lt,Te,Tt.width,Tt.height,0,Tt.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,lt,0,0,Tt.width,Tt.height,Ae,we,Tt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,lt,Te,Tt.width,Tt.height,0,Ae,we,Tt.data)}}}else{if($e=y.mipmaps,Be&&Je){$e.length>0&&Ge++;const Pe=he(ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ge,Te,Pe.width,Pe.height)}for(let Pe=0;Pe<6;Pe++)if(U){Be?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,ue[Pe].width,ue[Pe].height,Ae,we,ue[Pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Te,ue[Pe].width,ue[Pe].height,0,Ae,we,ue[Pe].data);for(let lt=0;lt<$e.length;lt++){const Fn=$e[lt].image[Pe].image;Be?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,lt+1,0,0,Fn.width,Fn.height,Ae,we,Fn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,lt+1,Te,Fn.width,Fn.height,0,Ae,we,Fn.data)}}else{Be?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,Ae,we,ue[Pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Te,Ae,we,ue[Pe]);for(let lt=0;lt<$e.length;lt++){const Tt=$e[lt];Be?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,lt+1,0,0,Ae,we,Tt.image[Pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,lt+1,Te,Ae,we,Tt.image[Pe])}}}E(y)&&y.mipmapsAutoUpdate===!0&&S(n.TEXTURE_CUBE_MAP),ge.__version=ee.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function Ke(P,y,D,j,ee,ge){const xe=r.convert(D.format,D.colorSpace),ae=r.convert(D.type),oe=w(D.internalFormat,xe,ae,D.normalized,D.colorSpace),Me=i.get(y),U=i.get(D);if(U.__renderTarget=y,!Me.__hasExternalTextures){const ue=Math.max(1,y.width>>ge),le=Math.max(1,y.height>>ge);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,ge,oe,ue,le,y.depth,0,xe,ae,null):t.texImage2D(ee,ge,oe,ue,le,0,xe,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),V(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,ee,U.__webglTexture,0,X(y)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,ee,U.__webglTexture,ge),t.bindFramebuffer(n.FRAMEBUFFER,null)}function mt(P,y,D){if(n.bindRenderbuffer(n.RENDERBUFFER,P),y.depthBuffer){const j=y.depthTexture,ee=j&&j.isDepthTexture?j.type:null,ge=_(y.stencilBuffer,ee),xe=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;V(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,X(y),ge,y.width,y.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,X(y),ge,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ge,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,P)}else{const j=y.textures;for(let ee=0;ee<j.length;ee++){const ge=j[ee],xe=r.convert(ge.format,ge.colorSpace),ae=r.convert(ge.type),oe=w(ge.internalFormat,xe,ae,ge.normalized,ge.colorSpace);V(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,X(y),oe,y.width,y.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,X(y),oe,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,oe,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ft(P,y,D){const j=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ee=i.get(y.depthTexture);ee.__renderTarget=y;const ge=j?y.depthTexture.image[0]:y.depthTexture.image;(!ee.__webglTexture||ge.width!==y.width||ge.height!==y.height)&&(ge.width=y.width,ge.height=y.height,y.depthTexture.needsUpdate=!0),j?Y(y.depthTexture,0):R(y.depthTexture,0);const xe=ee.__webglTexture,ae=X(y),oe=j?n.TEXTURE_CUBE_MAP_POSITIVE_X+D:n.TEXTURE_2D,Me=y.depthTexture.format===Xn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===$n)V(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Me,oe,xe,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,Me,oe,xe,0);else if(y.depthTexture.format===Xn)V(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Me,oe,xe,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,Me,oe,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function qt(P){const y=i.get(P),D=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){const j=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),j){const ee=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,j.removeEventListener("dispose",ee)};j.addEventListener("dispose",ee),y.__depthDisposeCallback=ee}y.__boundDepthTexture=j}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(D)for(let j=0;j<6;j++)ft(y.__webglFramebuffer[j],P,j);else P.texture.mipmaps.length>0?ft(y.__webglFramebuffer[0],P,0):ft(y.__webglFramebuffer,P,0);else if(D){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]===void 0)y.__webglDepthbuffer[j]=n.createRenderbuffer(),mt(y.__webglDepthbuffer[j],P,!1);else{const ee=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=y.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,ge),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,ge)}}else if(P.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),mt(y.__webglDepthbuffer,P,!1);else{const ee=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ge),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,ge)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Yt(P,y,D){const j=i.get(P);y!==void 0&&Ke(j.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&qt(P)}function $t(P){const y=P.texture,D=i.get(P),j=i.get(y);P.addEventListener("dispose",k),I(P);const ee=P.textures,ge=P.isWebGLCubeRenderTarget===!0,xe=ee.length>1;if(xe||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=y.version,a.memory.textures++),ge){D.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(y.mipmaps.length>0){D.__webglFramebuffer[ae]=[];for(let oe=0;oe<y.mipmaps.length;oe++)D.__webglFramebuffer[ae][oe]=n.createFramebuffer()}else D.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(y.mipmaps.length>0){D.__webglFramebuffer=[];for(let ae=0;ae<y.mipmaps.length;ae++)D.__webglFramebuffer[ae]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(xe)for(let ae=0,oe=ee.length;ae<oe;ae++){const Me=i.get(ee[ae]);Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture(),a.memory.textures++)}if(P.samples>0&&V(P)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ae=0;ae<ee.length;ae++){const oe=ee[ae];D.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[ae]);const Me=r.convert(oe.format,oe.colorSpace),U=r.convert(oe.type),ue=w(oe.internalFormat,Me,U,oe.normalized,oe.colorSpace,P.isXRRenderTarget===!0),le=X(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,le,ue,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,D.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),mt(D.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ge){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),ce(n.TEXTURE_CUBE_MAP,y);for(let ae=0;ae<6;ae++)if(y.mipmaps.length>0)for(let oe=0;oe<y.mipmaps.length;oe++)Ke(D.__webglFramebuffer[ae][oe],P,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,oe);else Ke(D.__webglFramebuffer[ae],P,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);E(y)?S(n.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}else if(xe){for(let ae=0,oe=ee.length;ae<oe;ae++){const Me=ee[ae],U=i.get(Me);let ue=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ue=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,U.__webglTexture),ce(ue,Me),Ke(D.__webglFramebuffer,P,Me,n.COLOR_ATTACHMENT0+ae,ue,0),E(Me)&&S(ue)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ae=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,j.__webglTexture),ce(ae,y),y.mipmaps.length>0)for(let oe=0;oe<y.mipmaps.length;oe++)Ke(D.__webglFramebuffer[oe],P,y,n.COLOR_ATTACHMENT0,ae,oe);else Ke(D.__webglFramebuffer,P,y,n.COLOR_ATTACHMENT0,ae,0);E(y)?S(ae):y.mipmaps.length>0&&n.texParameteri(ae,n.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}P.depthBuffer&&qt(P)}function W(P){const y=P.textures;for(let D=0,j=y.length;D<j;D++){const ee=y[D];if(E(ee)&&ee.mipmapsAutoUpdate===!0){const ge=C(P),xe=i.get(ee).__webglTexture;t.bindTexture(ge,xe),S(ge),t.unbindTexture()}}}const b=[];function $(P){if(P.samples>0){if(V(P)===!1){const y=P.textures,D=P.width,j=P.height;let ee=n.COLOR_BUFFER_BIT;const ge=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(P),ae=y.length>1;if(ae)for(let Me=0;Me<y.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Me=0;Me<y.length;Me++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Me]);const U=i.get(y[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,U,0)}n.blitFramebuffer(0,0,D,j,0,0,D,j,ee,n.NEAREST),c===!0&&(b.length=0,b.push(n.COLOR_ATTACHMENT0+Me),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&b.push(ge),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,b))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let Me=0;Me<y.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Me]);const U=i.get(y[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,U,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&c){const y=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function X(P){return Math.min(s.maxSamples,P.samples)}function V(P){const y=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Se(P){const y=a.render.frame;u.get(P)!==y&&(u.set(P,y),P.update())}function q(P,y){const D=P.colorSpace,j=P.format,ee=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||D!==gr&&D!==Ln&&(tt.getTransfer(D)===ct?(j!==Mn||ee!==Jt)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",D)),y}function he(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=K,this.resetTextureUnits=fe,this.getTextureUnits=de,this.setTextureUnits=Ie,this.setTexture2D=R,this.setTexture2DArray=z,this.setTexture3D=G,this.setTextureCube=Y,this.rebindTextures=Yt,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=Ke,this.useMultisampledRTT=V,this.dispose=J}function k0(n,e){function t(i,s=Ln){let r;const a=tt.getTransfer(s);if(i===Jt)return n.UNSIGNED_BYTE;if(i===ro)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ao)return n.UNSIGNED_SHORT_5_5_5_1;if(i===yc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Mc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===_c)return n.BYTE;if(i===vc)return n.SHORT;if(i===gs)return n.UNSIGNED_SHORT;if(i===so)return n.INT;if(i===bn)return n.UNSIGNED_INT;if(i===pn)return n.FLOAT;if(i===gn)return n.HALF_FLOAT;if(i===Sc)return n.ALPHA;if(i===bc)return n.RGB;if(i===Mn)return n.RGBA;if(i===$n)return n.DEPTH_COMPONENT;if(i===Xn)return n.DEPTH_STENCIL;if(i===oo)return n.RED;if(i===lo)return n.RED_INTEGER;if(i===oi)return n.RG;if(i===co)return n.RG_INTEGER;if(i===uo)return n.RGBA_INTEGER;if(i===nr||i===ir||i===sr||i===rr)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===nr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===nr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===rr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sa||i===ba||i===Ea||i===wa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Sa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ea)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ta||i===Aa||i===Ra||i===Ca||i===Pa||i===hr||i===La)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ta||i===Aa)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ra)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ca)return r.COMPRESSED_R11_EAC;if(i===Pa)return r.COMPRESSED_SIGNED_R11_EAC;if(i===hr)return r.COMPRESSED_RG11_EAC;if(i===La)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Da||i===Ia||i===Ua||i===Na||i===Fa||i===za||i===Oa||i===Ba||i===ka||i===Ga||i===Ha||i===Va||i===Wa||i===Xa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Da)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ia)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ua)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Na)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fa)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===za)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Oa)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ba)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ka)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ga)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ha)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Va)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wa)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xa)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qa||i===Ya||i===$a)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===qa)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ya)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$a)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ka||i===Ja||i===pr||i===Za)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ka)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ja)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===pr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ni?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const G0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H0=`
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

}`;class V0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Oc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Kn({vertexShader:G0,fragmentShader:H0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new it(new qn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class W0 extends ci{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,m=null;const x=typeof XRWebGLBinding<"u",g=new V0,p={},v=t.getContextAttributes();let E=null,S=null;const C=[],w=[],_=new ke;let A=null,I=null;const L=new tn;L.viewport=new _t;const F=new tn;F.viewport=new _t;const k=[L,F],te=new nd;let N=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(M){let R=C[M];return R===void 0&&(R=new Br,C[M]=R),R.getTargetRaySpace()},this.getControllerGrip=function(M){let R=C[M];return R===void 0&&(R=new Br,C[M]=R),R.getGripSpace()},this.getHand=function(M){let R=C[M];return R===void 0&&(R=new Br,C[M]=R),R.getHandSpace()};function se(M){const R=w.indexOf(M.inputSource);if(R===-1)return;const z=C[R];z!==void 0&&(z.update(M.inputSource,M.frame,l||a),z.dispatchEvent({type:M.type,data:M.inputSource}))}function ne(){s.removeEventListener("select",se),s.removeEventListener("selectstart",se),s.removeEventListener("selectend",se),s.removeEventListener("squeeze",se),s.removeEventListener("squeezestart",se),s.removeEventListener("squeezeend",se),s.removeEventListener("end",ne),s.removeEventListener("inputsourceschange",ve);for(let M=0;M<C.length;M++){const R=w[M];R!==null&&(w[M]=null,C[M].disconnect(R))}N=null,J=null,g.reset();for(const M in p)delete p[M];if(e.setRenderTarget(E),f=null,d=null,h=null,s=null,S=null,K.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(_.width,_.height,!1),I!==null){const M=I.camera;M.fov=I.fov,M.zoom=I.zoom,M.updateProjectionMatrix(),I=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(M){r=M,i.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(M){o=M,i.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(M){l=M},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(M){if(s=M,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",se),s.addEventListener("selectstart",se),s.addEventListener("selectend",se),s.addEventListener("squeeze",se),s.addEventListener("squeezestart",se),s.addEventListener("squeezeend",se),s.addEventListener("end",ne),s.addEventListener("inputsourceschange",ve),v.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let z=null,G=null,Y=null;v.depth&&(Y=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,z=v.stencil?Xn:$n,G=v.stencil?Ni:bn);const Ee={colorFormat:t.RGBA8,depthFormat:Y,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Ee),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Qt(d.textureWidth,d.textureHeight,{format:Mn,type:Jt,depthTexture:new zi(d.textureWidth,d.textureHeight,G,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const z={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,z),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Qt(f.framebufferWidth,f.framebufferHeight,{format:Mn,type:Jt,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),K.setContext(s),K.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ve(M){for(let R=0;R<M.removed.length;R++){const z=M.removed[R],G=w.indexOf(z);G>=0&&(w[G]=null,C[G].disconnect(z))}for(let R=0;R<M.added.length;R++){const z=M.added[R];let G=w.indexOf(z);if(G===-1){for(let Ee=0;Ee<C.length;Ee++)if(Ee>=w.length){w.push(z),G=Ee;break}else if(w[Ee]===null){w[Ee]=z,G=Ee;break}if(G===-1)break}const Y=C[G];Y&&Y.connect(z)}}function re(M,R){R===null?M.matrixWorld.copy(M.matrix):M.matrixWorld.multiplyMatrices(R.matrixWorld,M.matrix),M.matrixWorldInverse.copy(M.matrixWorld).invert()}this.updateCamera=function(M){if(s===null)return;let R=M.near,z=M.far;g.texture!==null&&(g.depthNear>0&&(R=g.depthNear),g.depthFar>0&&(z=g.depthFar)),te.near=F.near=L.near=R,te.far=F.far=L.far=z,(N!==te.near||J!==te.far)&&(s.updateRenderState({depthNear:te.near,depthFar:te.far}),N=te.near,J=te.far),te.layers.mask=M.layers.mask|6,L.layers.mask=te.layers.mask&-5,F.layers.mask=te.layers.mask&-3;const G=M.parent,Y=te.cameras;re(te,G);for(let Ee=0;Ee<Y.length;Ee++)re(Y[Ee],G);te.projectionMatrix.copy(L.projectionMatrix),te.projectionMatrixInverse.copy(L.projectionMatrixInverse),I===null&&M.isPerspectiveCamera&&(I={camera:M,fov:M.fov,zoom:M.zoom}),fe(M,te,G)};function fe(M,R,z){z===null?M.matrix.copy(R.matrixWorld):(M.matrix.copy(z.matrixWorld),M.matrix.invert(),M.matrix.multiply(R.matrixWorld)),M.matrix.decompose(M.position,M.quaternion,M.scale),M.updateMatrixWorld(!0),M.projectionMatrix.copy(R.projectionMatrix),M.projectionMatrixInverse.copy(R.projectionMatrixInverse),M.isPerspectiveCamera&&(M.fov=vr*2*Math.atan(1/M.projectionMatrix.elements[5]),M.zoom=1)}this.getCamera=function(){return te},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(M){c=M,d!==null&&(d.fixedFoveation=M),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=M)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(te)},this.getCameraTexture=function(M){return p[M]};let de=null;function Ie(M,R){if(u=R.getViewerPose(l||a),m=R,u!==null){const z=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let G=!1;z.length!==te.cameras.length&&(te.cameras.length=0,G=!0);for(let B=0;B<z.length;B++){const ce=z[B];let ye=null;if(f!==null)ye=f.getViewport(ce);else{const me=h.getViewSubImage(d,ce);ye=me.viewport,B===0&&(e.setRenderTargetTextures(S,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(S))}let pe=k[B];pe===void 0&&(pe=new tn,pe.layers.enable(B),pe.viewport=new _t,k[B]=pe),pe.matrix.fromArray(ce.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(ce.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(ye.x,ye.y,ye.width,ye.height),B===0&&(te.matrix.copy(pe.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale)),G===!0&&te.cameras.push(pe)}const Y=s.enabledFeatures;if(Y&&Y.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=i.getBinding();const B=h.getDepthInformation(z[0]);B&&B.isValid&&B.texture&&g.init(B,s.renderState)}if(Y&&Y.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let B=0;B<z.length;B++){const ce=z[B].camera;if(ce){let ye=p[ce];ye||(ye=new Oc,p[ce]=ye);const pe=h.getCameraImage(ce);ye.sourceTexture=pe}}}}for(let z=0;z<C.length;z++){const G=w[z],Y=C[z];G!==null&&Y!==void 0&&Y.update(G,R,l||a)}de&&de(M,R),R.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:R}),m=null}const K=new Yc;K.setAnimationLoop(Ie),this.setAnimationLoop=function(M){de=M},this.dispose=function(){}}}const X0=new ot,iu=new Ye;iu.set(-1,0,0,0,1,0,0,0,1);function q0(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Hc(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,E,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,S)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,v,E):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Vt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Vt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=e.get(p),E=v.envMap,S=v.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(X0.makeRotationFromEuler(S)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(iu),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,v,E){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=E*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.diffuseRoughness>0&&(g.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Y0(n,e,t,i){let s={},r={};function a(v,E){const S=E.program;i.uniformBlockBinding(v,S,s[v.id])}function o(v,E){let S=s[v.id];S===void 0&&(m(v),S=c(v),s[v.id]=S,v.addEventListener("dispose",g));const C=E.program;i.updateUBOMapping(v,C);const w=e.render.frame;r[v.id]!==w&&(l(v),r[v.id]=w)}function c(v){const E=n.createBuffer(),S=v.__size,C=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,S,C),n.bindBuffer(n.UNIFORM_BUFFER,null),E}function l(v){const E=s[v.id],S=v.uniforms,C=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let w=0,_=S.length;w<_;w++){const A=S[w];if(Array.isArray(A))for(let I=0,L=A.length;I<L;I++)u(A[I],w,I,C);else u(A,w,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(v,E,S,C){if(d(v,E,S,C)===!0){const w=v.__offset,_=v.value;if(Array.isArray(_)){let A=0;for(let I=0;I<_.length;I++){const L=_[I],F=x(L,!0);h(L,v.__data,A),A+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else h(_,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,v.__data)}}function h(v,E,S){typeof v=="number"||typeof v=="boolean"?E[S]=v:v.isMatrix3?(E[S]=v.elements[0],E[S+1]=v.elements[1],E[S+2]=v.elements[2],E[S+3]=0,E[S+4]=v.elements[3],E[S+5]=v.elements[4],E[S+6]=v.elements[5],E[S+7]=0,E[S+8]=v.elements[6],E[S+9]=v.elements[7],E[S+10]=v.elements[8],E[S+11]=0):ArrayBuffer.isView(v)?E.set(v.subarray(0,E.length-S),S):v.toArray(E,S)}function d(v,E,S,C){const w=v.value,_=E+"_"+S;if(Array.isArray(w)){C[_]===void 0&&(C[_]=[]);const A=C[_];let I=!1;for(let L=0;L<w.length;L++)f(w[L],A,L)===!0&&(I=!0);return I}return f(w,C,_)}function f(v,E,S){if(E[S]===void 0)return typeof v=="number"||typeof v=="boolean"?E[S]=v:ArrayBuffer.isView(v)?E[S]=v.slice():E[S]=v.clone(),!0;{const C=E[S];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return E[S]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function m(v){const E=v.uniforms;let S=0;const C=16;for(let _=0,A=E.length;_<A;_++){const I=Array.isArray(E[_])?E[_]:[E[_]];for(let L=0,F=I.length;L<F;L++){const k=I[L],te=Array.isArray(k.value)?k.value:[k.value],N=Array.isArray(E[_])||Array.isArray(k.value);let J=S;for(let ne=0,ve=te.length;ne<ve;ne++){const re=te[ne],fe=x(re,N),de=S%C,Ie=de%fe.boundary,K=de+Ie;S+=Ie,K!==0&&C-K<fe.storage&&(S+=C-K),ne===0&&(J=S),S+=fe.storage}const se=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new se((S-J)/Float32Array.BYTES_PER_ELEMENT),k.__offset=J}}const w=S%C;return w>0&&(S+=C-w),v.__size=S,v.__cache={},this}function x(v,E){const S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=16,S.storage=48):v.isMatrix4?(S.boundary=16,S.storage=64):v.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):He("WebGLRenderer: Unsupported uniform value type.",v),E===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function g(v){const E=v.target;E.removeEventListener("dispose",g),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const v in s)n.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:p}}const $0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let _n=null;function K0(){return _n===null&&(_n=new Uc($0,16,16,oi,gn),_n.name="DFG_LUT",_n.minFilter=Zt,_n.magFilter=Zt,_n.wrapS=Dn,_n.wrapT=Dn,_n.generateMipmaps=!1,_n.needsUpdate=!0),_n}class J0{constructor(e={}){const{canvas:t=Qu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Jt}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const x=f,g=new Set([uo,co,lo]),p=new Set([Jt,bn,gs,Ni,ro,ao]),v=new Uint32Array(4),E=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]};let C=null,w=null;const _=[],A=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let F=!1,k=null,te=null,N=null,J=null;this._outputColorSpace=Kt;let se=0,ne=0,ve=null,re=-1,fe=null;const de=new _t,Ie=new _t;let K=null;const M=new Ve(0);let R=0,z=t.width,G=t.height,Y=1,Ee=null,_e=null;const B=new _t(0,0,z,G),ce=new _t(0,0,z,G);let ye=!1;const pe=new _s,me=new mo;let ze=!1,We=!1;const Ke=new ot,mt=new H,ft=new _t,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function $t(){return ve===null?Y:1}let W=i;function b(T,O){return t.getContext(T,O)}let $,X,V,Se,q,he,P,y,D,j,ee,ge,xe,ae,oe,Me,U,ue,le,Ae,we,Te,Be;try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${no}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",$e,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),W===null){const O="webgl2";if(W=b(O,T),W===null)throw b(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Je()}catch(T){throw t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),rt("WebGLRenderer: "+T.message),T}function Je(){$=new jp(W),$.init(),we=new k0(W,$),X=new Hp(W,$,e,we),V=new O0(W,$),X.reversedDepthBuffer&&d&&V.buffers.depth.setReversed(!0),te=W.createFramebuffer(),N=W.createFramebuffer(),J=W.createFramebuffer(),Se=new nm(W),q=new E0,he=new B0(W,$,V,q,X,we,Se),P=new Qp(L),y=new sd(W),Te=new kp(W,y),D=new em(W,y,Se,Te),j=new sm(W,D,y,Te,Se),ue=new im(W,X,he),oe=new Vp(q),ee=new b0(L,P,$,X,Te,oe),ge=new q0(L,q),xe=new T0,ae=new D0($),U=new Bp(L,P,V,j,m,c),Me=new z0(L,j,X),Be=new Y0(W,Se,X,V),le=new Gp(W,$,Se),Ae=new tm(W,$,Se),Se.programs=ee.programs,L.capabilities=X,L.extensions=$,L.properties=q,L.renderLists=xe,L.shadowMap=Me,L.state=V,L.info=Se}x!==Jt&&(I=new am(x,t.width,t.height,o,s,r));const be=new W0(L,W);this.xr=be,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const T=$.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=$.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(z,G,!1))},this.getSize=function(T){return T.set(z,G)},this.setSize=function(T,O,ie=!0){if(be.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}z=T,G=O,t.width=Math.floor(T*Y),t.height=Math.floor(O*Y),ie===!0&&(t.style.width=T+"px",t.style.height=O+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(z*Y,G*Y).floor()},this.setDrawingBufferSize=function(T,O,ie){z=T,G=O,Y=ie,t.width=Math.floor(T*ie),t.height=Math.floor(O*ie),this.setViewport(0,0,T,O)},this.setEffects=function(T){if(x===Jt){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let O=0;O<T.length;O++)if(T[O].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(de)},this.getViewport=function(T){return T.copy(B)},this.setViewport=function(T,O,ie,Z){T.isVector4?B.set(T.x,T.y,T.z,T.w):B.set(T,O,ie,Z),V.viewport(de.copy(B).multiplyScalar($t()).round())},this.getScissor=function(T){return T.copy(ce)},this.setScissor=function(T,O,ie,Z){T.isVector4?ce.set(T.x,T.y,T.z,T.w):ce.set(T,O,ie,Z),V.scissor(Ie.copy(ce).multiplyScalar($t()).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(T){V.setScissorTest(ye=T)},this.setOpaqueSort=function(T){Ee=T},this.setTransparentSort=function(T){_e=T},this.getClearColor=function(T){return T.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,ie=!0){let Z=0;if(T){let Q=!1;if(ve!==null){const Ce=ve.texture.format;Q=g.has(Ce)}if(Q){const Ce=ve.texture.type,Ue=p.has(Ce),Re=U.getClearColor(),De=U.getClearAlpha(),Oe=Re.r,qe=Re.g,je=Re.b;Ue?(v[0]=Oe,v[1]=qe,v[2]=je,v[3]=De,W.clearBufferuiv(W.COLOR,0,v)):(E[0]=Oe,E[1]=qe,E[2]=je,E[3]=De,W.clearBufferiv(W.COLOR,0,E))}else Z|=W.COLOR_BUFFER_BIT}O&&(Z|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ie&&(Z|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&W.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),k=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),U.dispose(),xe.dispose(),ae.dispose(),he.dispose(),q.dispose(),P.dispose(),j.dispose(),D.dispose(),Te.dispose(),Be.dispose(),ee.dispose(),be.dispose(),be.removeEventListener("sessionstart",Ao),be.removeEventListener("sessionend",Ro),Jn.stop()};function Ge(T){T.preventDefault(),Wo("WebGLRenderer: Context Lost."),F=!0}function $e(){Wo("WebGLRenderer: Context Restored."),F=!1;const T=Se.autoReset,O=Me.enabled,ie=Me.autoUpdate,Z=Me.needsUpdate,Q=Me.type;Je(),Se.autoReset=T,Me.enabled=O,Me.autoUpdate=ie,Me.needsUpdate=Z,Me.type=Q}function Pe(T){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function lt(T){const O=T.target;O.removeEventListener("dispose",lt),Tt(O)}function Tt(T){Fn(T),q.remove(T)}function Fn(T){const O=q.get(T).programs;O!==void 0&&(O.forEach(function(ie){ee.releaseProgram(ie)}),T.isShaderMaterial&&ee.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,ie,Z,Q,Ce){O===null&&(O=qt);const Ue=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Re=hu(T,O,ie,Z,Q);V.setMaterial(Z,Ue);let De=ie.index,Oe=1;if(Z.wireframe===!0){if(De=D.getWireframeAttribute(ie),De===void 0)return;Oe=2}const qe=ie.drawRange,je=ie.attributes.position;let Ne=qe.start*Oe,et=(qe.start+qe.count)*Oe;Ce!==null&&(Ne=Math.max(Ne,Ce.start*Oe),et=Math.min(et,(Ce.start+Ce.count)*Oe)),De!==null?(Ne=Math.max(Ne,0),et=Math.min(et,De.count)):je!=null&&(Ne=Math.max(Ne,0),et=Math.min(et,je.count));const vt=et-Ne;if(vt<0||vt===1/0)return;Te.setup(Q,Z,Re,ie,De);let dt,ut=le;if(De!==null&&(dt=y.get(De),ut=Ae,ut.setIndex(dt)),Q.isMesh)Z.wireframe===!0?(V.setLineWidth(Z.wireframeLinewidth*$t()),ut.setMode(W.LINES)):ut.setMode(W.TRIANGLES);else if(Q.isLine){let It=Z.linewidth;It===void 0&&(It=1),V.setLineWidth(It*$t()),Q.isLineSegments?ut.setMode(W.LINES):Q.isLineLoop?ut.setMode(W.LINE_LOOP):ut.setMode(W.LINE_STRIP)}else Q.isPoints?ut.setMode(W.POINTS):Q.isSprite&&ut.setMode(W.TRIANGLES);if(Q.isBatchedMesh)if($.get("WEBGL_multi_draw"))ut.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const It=Q._multiDrawStarts,Fe=Q._multiDrawCounts,Bt=Q._multiDrawCount,st=De?y.get(De).bytesPerElement:1,Zn=q.get(Z).currentProgram.getUniforms();for(let Ut=0;Ut<Bt;Ut++)Zn.setValue(W,"_gl_DrawID",Ut),ut.render(It[Ut]/st,Fe[Ut])}else if(Q.isInstancedMesh)ut.renderInstances(Ne,vt,Q.count);else if(ie.isInstancedBufferGeometry){const It=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Fe=Math.min(ie.instanceCount,It);ut.renderInstances(Ne,vt,Fe)}else ut.render(Ne,vt)};function To(T,O,ie,Z){k!==null&&T.isNodeMaterial&&k.setObject(Z,T),ze===!0&&oe.setState(T,ie,!1),T.transparent===!0&&T.side===Pn&&T.forceSinglePass===!1?(T.side=Vt,T.needsUpdate=!0,Hi(T,O,Z),T.side=ai,T.needsUpdate=!0,Hi(T,O,Z),T.side=Pn):Hi(T,O,Z)}this.compile=function(T,O,ie=null){ie===null&&(ie=T),k!==null&&k.renderStart(T,O,ie),w=ae.get(ie),w.init(O),A.push(w),ie.traverseVisible(function(Q){Q.isLight&&Q.layers.test(O.layers)&&(w.pushLight(Q),Q.castShadow&&w.pushShadow(Q))}),T!==ie&&T.traverseVisible(function(Q){Q.isLight&&Q.layers.test(O.layers)&&(w.pushLight(Q),Q.castShadow&&w.pushShadow(Q))}),w.setupLights(),k!==null&&k.updateLights(w.state.lightsArray),We=this.localClippingEnabled,ze=oe.init(this.clippingPlanes,We),ze===!0&&oe.setGlobalState(this.clippingPlanes,O),k!==null&&Me.render(w.state.shadowsArray,ie,O);const Z=new Set;return T.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ce=Q.material;if(Ce)if(Array.isArray(Ce))for(let Ue=0;Ue<Ce.length;Ue++){const Re=Ce[Ue];To(Re,ie,O,Q),Z.add(Re)}else To(Ce,ie,O,Q),Z.add(Ce)}),w=A.pop(),k!==null&&k.renderEnd(),Z},this.compileAsync=function(T,O,ie=null){const Z=this.compile(T,O,ie);return new Promise(Q=>{function Ce(){if(Z.forEach(function(Ue){const De=q.get(Ue).currentProgram;(De===void 0||De.isReady())&&Z.delete(Ue)}),Z.size===0){Q(T);return}setTimeout(Ce,10)}$.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Tr=null;function fu(T){Tr&&Tr(T)}function Ao(){Jn.stop()}function Ro(){Jn.start()}const Jn=new Yc;Jn.setAnimationLoop(fu),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(T){Tr=T,be.setAnimationLoop(T),T===null?Jn.stop():Jn.start()},be.addEventListener("sessionstart",Ao),be.addEventListener("sessionend",Ro),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;k!==null&&k.renderStart(T,O);const ie=be.enabled===!0&&be.isPresenting===!0,Z=I!==null&&(ve===null||ie)&&I.begin(L,ve);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(O),O=be.getCamera()),T.isScene===!0&&T.onBeforeRender(L,T,O,ve),w=ae.get(T,A.length),w.init(O),w.state.textureUnits=he.getTextureUnits(),A.push(w),Ke.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?me.setFromArrayCamera(O):pe.setFromProjectionMatrix(Ke,mn,O.reversedDepth),We=this.localClippingEnabled,ze=oe.init(this.clippingPlanes,We),C=xe.get(T,_.length),C.init(),_.push(C),this.info.render.frame++,be.enabled===!0&&be.isPresenting===!0){const Ue=L.xr.getDepthSensingMesh();Ue!==null&&Ar(Ue,O,-1/0,L.sortObjects)}Ar(T,O,0,L.sortObjects),C.finish(),k!==null&&k.updateLights(w.state.lightsArray),L.sortObjects===!0&&C.sort(Ee,_e),Yt=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,Yt&&U.addToRenderList(C,T),this.info.autoReset===!0&&this.info.reset(),ze===!0&&oe.beginShadows();const Q=w.state.shadowsArray;if(Me.render(Q,T,O),ze===!0&&oe.endShadows(),(Z&&I.hasRenderPass())===!1){const Ue=C.opaque,Re=C.transmissive;if(w.setupLights(),O.isArrayCamera){const De=O.cameras;if(Re.length>0)for(let Oe=0,qe=De.length;Oe<qe;Oe++){const je=De[Oe];Po(Ue,Re,T,je)}Yt&&U.render(T);for(let Oe=0,qe=De.length;Oe<qe;Oe++){const je=De[Oe];Co(C,T,je,je.viewport)}}else Re.length>0&&Po(Ue,Re,T,O),Yt&&U.render(T),Co(C,T,O)}ve!==null&&ne===0&&(he.updateMultisampleRenderTarget(ve),he.updateRenderTargetMipmap(ve)),Z&&I.end(L),T.isScene===!0&&T.onAfterRender(L,T,O),Te.resetDefaultState(),re=-1,fe=null,A.pop(),A.length>0?(w=A[A.length-1],he.setTextureUnits(w.state.textureUnits),ze===!0&&oe.setGlobalState(L.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?C=_[_.length-1]:C=null,k!==null&&k.renderEnd()};function Ar(T,O,ie,Z){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)ie=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){const Ue=O.isArrayCamera?me:pe;if(!T.frustumCulled||T.intersectsFrustum(Ue)){Z&&ft.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ke);const Re=j.update(T),De=T.material;De.visible&&C.push(T,Re,De,ie,ft.z,null,O)}}else if(T.isMesh||T.isLine||T.isPoints){const Ue=O.isArrayCamera?me:pe;if(!T.frustumCulled||T.intersectsFrustum(Ue)){const Re=j.update(T),De=T.material;if(Z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ft.copy(T.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),ft.copy(Re.boundingSphere.center)),ft.applyMatrix4(T.matrixWorld).applyMatrix4(Ke)),Array.isArray(De)){const Oe=Re.groups;for(let qe=0,je=Oe.length;qe<je;qe++){const Ne=Oe[qe],et=De[Ne.materialIndex];et&&et.visible&&C.push(T,Re,et,ie,ft.z,Ne,O)}}else De.visible&&C.push(T,Re,De,ie,ft.z,null,O)}}}const Ce=T.children;for(let Ue=0,Re=Ce.length;Ue<Re;Ue++)Ar(Ce[Ue],O,ie,Z)}function Co(T,O,ie,Z){const{opaque:Q,transmissive:Ce,transparent:Ue}=T;w.setupLightsView(ie),ze===!0&&oe.setGlobalState(L.clippingPlanes,ie),Z&&V.viewport(de.copy(Z)),Q.length>0&&ws(Q,O,ie),Ce.length>0&&ws(Ce,O,ie),Ue.length>0&&ws(Ue,O,ie),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function Po(T,O,ie,Z){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Z.id]===void 0){const Ne=$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Z.id]=new Qt(1,1,{generateMipmaps:!0,type:Ne?gn:Jt,minFilter:In,samples:Math.max(4,X.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:tt.workingColorSpace})}const Ce=w.state.transmissionRenderTarget[Z.id],Ue=Z.viewport||de;Ce.setSize(Ue.z*L.transmissionResolutionScale,Ue.w*L.transmissionResolutionScale);const Re=L.getRenderTarget(),De=L.getActiveCubeFace(),Oe=L.getActiveMipmapLevel();L.setRenderTarget(Ce),L.getClearColor(M),R=L.getClearAlpha(),R<1&&L.setClearColor(16777215,.5),L.clear(),Yt&&U.render(ie);const qe=L.toneMapping;L.toneMapping=Sn;const je=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),w.setupLightsView(Z),ze===!0&&oe.setGlobalState(L.clippingPlanes,Z),ws(T,ie,Z),he.updateMultisampleRenderTarget(Ce),he.updateRenderTargetMipmap(Ce),$.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let et=0,vt=O.length;et<vt;et++){const dt=O[et],{object:ut,geometry:It,material:Fe,group:Bt}=dt;if(Fe.side===Pn&&ut.layers.test(Z.layers)){const st=Fe.side;Fe.side=Vt,Fe.needsUpdate=!0,Lo(ut,ie,Z,It,Fe,Bt),Fe.side=st,Fe.needsUpdate=!0,Ne=!0}}Ne===!0&&(he.updateMultisampleRenderTarget(Ce),he.updateRenderTargetMipmap(Ce))}L.setRenderTarget(Re,De,Oe),L.setClearColor(M,R),je!==void 0&&(Z.viewport=je),L.toneMapping=qe}function ws(T,O,ie){const Z=O.isScene===!0?O.overrideMaterial:null;for(let Q=0,Ce=T.length;Q<Ce;Q++){const Ue=T[Q],{object:Re,geometry:De,group:Oe}=Ue;let qe=Ue.material;qe.allowOverride===!0&&Z!==null&&(qe=Z),Re.layers.test(ie.layers)&&Lo(Re,O,ie,De,qe,Oe)}}function Lo(T,O,ie,Z,Q,Ce){k!==null&&Q.isNodeMaterial&&k.setObject(T,Q),T.onBeforeRender(L,O,ie,Z,Q,Ce),T.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Q.onBeforeRender(L,O,ie,Z,T,Ce),Q.transparent===!0&&Q.side===Pn&&Q.forceSinglePass===!1?(Q.side=Vt,Q.needsUpdate=!0,L.renderBufferDirect(ie,O,Z,Q,T,Ce),Q.side=ai,Q.needsUpdate=!0,L.renderBufferDirect(ie,O,Z,Q,T,Ce),Q.side=Pn):L.renderBufferDirect(ie,O,Z,Q,T,Ce),T.onAfterRender(L,O,ie,Z,Q,Ce)}function Do(T){let O=0;for(const ie of T)ie.texture!==null&&O++;return O}function Hi(T,O,ie){O.isScene!==!0&&(O=qt);const Z=q.get(T),Q=w.state.lights,Ce=w.state.shadowsArray,Ue=Q.state.version,Re=ee.getParameters(T,Q.state,Ce,O,ie,w.state.lightProbeGridArray),De=ee.getProgramCacheKey(Re);let Oe=Z.programs;Z.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?O.environment:null,Z.fog=O.fog;const qe=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;Z.envMap=P.get(T.envMap||Z.environment,qe),Z.envMapRotation=Z.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Oe===void 0&&(T.addEventListener("dispose",lt),Oe=new Map,Z.programs=Oe,Z.programVariants=new Map);let je=Oe.get(De);if(je!==void 0){if(Z.currentProgram===je&&Z.lightsStateVersion===Ue)return Uo(T,Re),je}else Re.uniforms=ee.getUniforms(T),k!==null&&T.isNodeMaterial&&k.build(T,ie,Re),T.onBeforeCompile(Re,L),je=ee.acquireProgram(Re,De),Oe.set(De,je),Z.uniforms=Re.uniforms;const Ne=Z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ne.clippingPlanes=oe.uniform),Uo(T,Re),Z.needsLights=mu(T),Z.lightsStateVersion=Ue,Z.needsLights&&(Ne.ambientLightColor.value=Q.state.ambient,Ne.lightProbe.value=Q.state.probe,Ne.sunLights.value=Q.state.sun,Ne.sunLightShadows.value=Q.state.sunShadow,Ne.directionalLights.value=Q.state.directional,Ne.directionalLightShadows.value=Q.state.directionalShadow,Ne.spotLights.value=Q.state.spot,Ne.spotLightShadows.value=Q.state.spotShadow,Ne.rectAreaLights.value=Q.state.rectArea,Ne.ltc_1.value=Q.state.rectAreaLTC1,Ne.ltc_2.value=Q.state.rectAreaLTC2,Ne.pointLights.value=Q.state.point,Ne.pointLightShadows.value=Q.state.pointShadow,Ne.hemisphereLights.value=Q.state.hemi,Ne.sunShadowMatrix.value=Q.state.sunShadowMatrix,Ne.sunShadowCascade.value=Q.state.sunShadowCascade,Ne.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ne.spotLightMatrix.value=Q.state.spotLightMatrix,Ne.spotLightMap.value=Q.state.spotLightMap,Ne.pointShadowMatrix.value=Q.state.pointShadowMatrix),Z.numLightProbeGrids=Do(w.state.lightProbeGridArray),Z.currentProgram=je,Z.uniformsList=null,je}function du(T,O,ie,Z,Q){const Ce=q.get(T),Ue=Ce.currentProgram.id+","+Z+","+Q;let Re=Ce.programVariants.get(Ue);return Re===void 0?(Re=Hi(T,O,ie),Ce.programVariants.set(Ue,Re)):(Ce.currentProgram=Re,Ce.uniformsList=null,Ce.outputColorSpace=Z,Ce.toneMapping=Q),Re}function Io(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=lr.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Uo(T,O){const ie=q.get(T);ie.outputColorSpace=O.outputColorSpace,ie.batching=O.batching,ie.batchingColor=O.batchingColor,ie.instancing=O.instancing,ie.instancingColor=O.instancingColor,ie.instancingMorph=O.instancingMorph,ie.skinning=O.skinning,ie.morphTargets=O.morphTargets,ie.morphNormals=O.morphNormals,ie.morphColors=O.morphColors,ie.morphTargetsCount=O.morphTargetsCount,ie.numClippingPlanes=O.numClippingPlanes,ie.numIntersection=O.numClipIntersection,ie.vertexAlphas=O.vertexAlphas,ie.vertexTangents=O.vertexTangents,ie.toneMapping=O.toneMapping}function hu(T,O,ie,Z,Q){O.isScene!==!0&&(O=qt),he.resetTextureUnits();const Ce=O.fog,Ue=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?O.environment:null,Re=ve===null?L.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:tt.workingColorSpace,De=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Oe=P.get(Z.envMap||Ue,De),qe=Z.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,je=!!ie.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ne=!!ie.morphAttributes.position,et=!!ie.morphAttributes.normal,vt=!!ie.morphAttributes.color;let dt=Sn;Z.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(dt=L.toneMapping);const ut=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,It=ut!==void 0?ut.length:0,Fe=q.get(Z),Bt=w.state.lights;if(ze===!0&&(We===!0||T!==fe)){const gt=T===fe&&Z.id===re;oe.setState(Z,T,gt)}let st=!1,Zn=!1;Z.version===Fe.__version?Fe.needsLights&&Fe.lightsStateVersion!==Bt.state.version||Q.isBatchedMesh&&Fe.batching===!1||!Q.isBatchedMesh&&Fe.batching===!0||Q.isBatchedMesh&&Fe.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&Fe.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&Fe.instancing===!1||!Q.isInstancedMesh&&Fe.instancing===!0||Q.isSkinnedMesh&&Fe.skinning===!1||!Q.isSkinnedMesh&&Fe.skinning===!0||Q.isInstancedMesh&&Fe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Fe.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Fe.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Fe.instancingMorph===!1&&Q.morphTexture!==null||Fe.envMap!==Oe||Z.fog===!0&&Fe.fog!==Ce||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==oe.numPlanes||Fe.numIntersection!==oe.numIntersection)||Fe.vertexAlphas!==qe||Fe.vertexTangents!==je||Fe.morphTargets!==Ne||Fe.morphNormals!==et||Fe.morphColors!==vt||Fe.morphTargetsCount!==It||Fe.numLightProbeGrids!==Do(w.state.lightProbeGridArray)?st=!0:(Fe.outputColorSpace!==Re||Fe.toneMapping!==dt)&&(Zn=!0):(st=!0,Fe.__version=Z.version);let Ut=Fe.currentProgram;(st===!0||Zn===!0)&&(Ut=Zn===!0?du(Z,O,Q,Re,dt):Hi(Z,O,Q),k&&Z.isNodeMaterial&&k.onUpdateProgram(Z,Ut,Fe));let Ts=!1,zn=!1,Qn=!1;const nt=Ut.getUniforms(),Pt=Fe.uniforms;if(V.useProgram(Ut.program)&&(Ts=!0,zn=!0,Qn=!0),Z.id!==re&&(re=Z.id,zn=!0),Ts||fe!==T){V.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),nt.setValue(W,"projectionMatrix",T.projectionMatrix),nt.setValue(W,"viewMatrix",T.matrixWorldInverse);const At=nt.map.cameraPosition;At!==void 0&&At.setValue(W,mt.setFromMatrixPosition(T.matrixWorld)),X.logarithmicDepthBuffer&&nt.setValue(W,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&nt.setValue(W,"isOrthographic",T.isOrthographicCamera===!0),fe!==T&&(fe=T,zn=!0,Qn=!0)}if(Fe.needsLights&&(Bt.state.sunShadowMap.length>0&&nt.setValue(W,"sunShadowMap",Bt.state.sunShadowMap,he),Bt.state.directionalShadowMap.length>0&&nt.setValue(W,"directionalShadowMap",Bt.state.directionalShadowMap,he),Bt.state.spotShadowMap.length>0&&nt.setValue(W,"spotShadowMap",Bt.state.spotShadowMap,he),Bt.state.pointShadowMap.length>0&&nt.setValue(W,"pointShadowMap",Bt.state.pointShadowMap,he)),Q.isSkinnedMesh){nt.setOptional(W,Q,"bindMatrix"),nt.setOptional(W,Q,"bindMatrixInverse");const gt=Q.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),nt.setValue(W,"boneTexture",gt.boneTexture,he))}Q.isBatchedMesh&&(nt.setOptional(W,Q,"batchingTexture"),nt.setValue(W,"batchingTexture",Q._matricesTexture,he),nt.setOptional(W,Q,"batchingIdTexture"),nt.setValue(W,"batchingIdTexture",Q._indirectTexture,he),nt.setOptional(W,Q,"batchingColorTexture"),Q._colorsTexture!==null&&nt.setValue(W,"batchingColorTexture",Q._colorsTexture,he));const ln=ie.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&ue.update(Q,ie,Ut),(zn||Fe.receiveShadow!==Q.receiveShadow)&&(Fe.receiveShadow=Q.receiveShadow,nt.setValue(W,"receiveShadow",Q.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&O.environment!==null&&(Pt.envMapIntensity.value=O.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=K0()),zn){if(nt.setValue(W,"toneMappingExposure",L.toneMappingExposure),Fe.needsLights&&pu(Pt,Qn),Ce&&Z.fog===!0&&ge.refreshFogUniforms(Pt,Ce),ge.refreshMaterialUniforms(Pt,Z,Y,G,w.state.transmissionRenderTarget[T.id]),Fe.needsLights&&Fe.numLightProbeGrids>0){const gt=S;let At=0;for(const En of w.state.lightProbeGridArray)En.texture!==null&&(gt.textures[At]=En.texture,gt.min[At]=En.boundingBox.min,gt.max[At]=En.boundingBox.max,gt.resolution[At]=En.resolution,At++);for(const En in gt)gt[En].length=At;Pt.probesSH.value=gt.textures,Pt.probesMin.value=gt.min,Pt.probesMax.value=gt.max,Pt.probesResolution.value=gt.resolution}lr.upload(W,Io(Fe),Pt,he)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(lr.upload(W,Io(Fe),Pt,he),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&nt.setValue(W,"center",Q.center),nt.setValue(W,"modelViewMatrix",Q.modelViewMatrix),nt.setValue(W,"normalMatrix",Q.normalMatrix),nt.setValue(W,"modelMatrix",Q.matrixWorld),Z.uniformsGroups!==void 0){const gt=Z.uniformsGroups;for(let At=0,En=gt.length;At<En;At++){const Fo=gt[At];Be.update(Fo,Ut),Be.bind(Fo,Ut)}}return Ut}function pu(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.sunLights.needsUpdate=O,T.sunLightShadows.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function mu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return ne},this.getRenderTarget=function(){return ve},this.setRenderTargetTextures=function(T,O,ie){const Z=q.get(T);Z.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),q.get(T.texture).__webglTexture=O,q.get(T.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:ie,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){const ie=q.get(T);ie.__webglFramebuffer=O,ie.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,ie=0){ve=T,se=O,ne=ie;let Z=null,Q=!1,Ce=!1;if(T){const Re=q.get(T);if(Re.__useDefaultFramebuffer!==void 0){V.bindFramebuffer(W.FRAMEBUFFER,Re.__webglFramebuffer),de.copy(T.viewport),Ie.copy(T.scissor),K=T.scissorTest,V.viewport(de),V.scissor(Ie),V.setScissorTest(K),re=-1;return}else if(Re.__webglFramebuffer===void 0)he.setupRenderTarget(T);else if(Re.__hasExternalTextures)he.rebindTextures(T,q.get(T.texture).__webglTexture,q.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const qe=T.depthTexture;if(Re.__boundDepthTexture!==qe){if(qe!==null&&q.has(qe)&&(T.width!==qe.image.width||T.height!==qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(T)}}const De=T.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Ce=!0);const Oe=q.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Oe[O])?Z=Oe[O][ie]:Z=Oe[O],Q=!0):T.samples>0&&he.useMultisampledRTT(T)===!1?Z=q.get(T).__webglMultisampledFramebuffer:Array.isArray(Oe)?Z=Oe[ie]:Z=Oe,de.copy(T.viewport),Ie.copy(T.scissor),K=T.scissorTest}else de.copy(B).multiplyScalar(Y).floor(),Ie.copy(ce).multiplyScalar(Y).floor(),K=ye;if(ie!==0&&(Z=te),V.bindFramebuffer(W.FRAMEBUFFER,Z)&&V.drawBuffers(T,Z),V.viewport(de),V.scissor(Ie),V.setScissorTest(K),Q){const Re=q.get(T.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+O,Re.__webglTexture,ie)}else if(Ce){const Re=O;for(let De=0;De<T.textures.length;De++){const Oe=q.get(T.textures[De]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+De,Oe.__webglTexture,ie,Re)}}else if(T!==null&&ie!==0){const Re=q.get(T.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Re.__webglTexture,ie)}re=-1};function No(T){const O=q.get(T);return(O.__readFormat!==T.format||O.__readType!==T.type)&&(O.__readFormat=T.format,O.__readType=T.type,O.__formatReadable=X.textureFormatReadable(T.format),O.__typeReadable=X.textureTypeReadable(T.type)),O}this.readRenderTargetPixels=function(T,O,ie,Z,Q,Ce,Ue,Re=0){if(!(T&&T.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ue!==void 0&&(De=De[Ue],Array.isArray(De)&&(De=De[0])),De){V.bindFramebuffer(W.FRAMEBUFFER,De);try{const Oe=T.textures[Re],qe=Oe.format,je=Oe.type;T.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Re);const Ne=No(Oe);if(Ne.__formatReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-Z&&ie>=0&&ie<=T.height-Q&&W.readPixels(O,ie,Z,Q,we.convert(qe),we.convert(je),Ce)}finally{const Oe=ve!==null?q.get(ve).__webglFramebuffer:null;V.bindFramebuffer(W.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(T,O,ie,Z,Q,Ce,Ue,Re=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ue!==void 0&&(De=De[Ue],Array.isArray(De)&&(De=De[0])),De)if(O>=0&&O<=T.width-Z&&ie>=0&&ie<=T.height-Q){V.bindFramebuffer(W.FRAMEBUFFER,De);const Oe=T.textures[Re],qe=Oe.format,je=Oe.type;T.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Re);const Ne=No(Oe);if(Ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,et),W.bufferData(W.PIXEL_PACK_BUFFER,Ce.byteLength,W.STREAM_READ),W.readPixels(O,ie,Z,Q,we.convert(qe),we.convert(je),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);const vt=ve!==null?q.get(ve).__webglFramebuffer:null;V.bindFramebuffer(W.FRAMEBUFFER,vt);const dt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await ju(W,dt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,et),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Ce),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(et),W.deleteSync(dt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,ie=0){const Z=Math.pow(2,-ie),Q=Math.floor(T.image.width*Z),Ce=Math.floor(T.image.height*Z),Ue=O!==null?O.x:0,Re=O!==null?O.y:0;he.setTexture2D(T,0),W.copyTexSubImage2D(W.TEXTURE_2D,ie,0,0,Ue,Re,Q,Ce),V.unbindTexture()},this.copyTextureToTexture=function(T,O,ie=null,Z=null,Q=0,Ce=0){let Ue,Re,De,Oe,qe,je,Ne,et,vt;const dt=T.isCompressedTexture?T.mipmaps[Ce]:T.image;if(ie!==null)Ue=ie.max.x-ie.min.x,Re=ie.max.y-ie.min.y,De=ie.isBox3?ie.max.z-ie.min.z:1,Oe=ie.min.x,qe=ie.min.y,je=ie.isBox3?ie.min.z:0;else{const nt=Math.pow(2,-Q);Ue=Math.floor(dt.width*nt),Re=Math.floor(dt.height*nt),T.isDataArrayTexture?De=dt.depth:T.isData3DTexture?De=Math.floor(dt.depth*nt):De=1,Oe=0,qe=0,je=0}Z!==null?(Ne=Z.x,et=Z.y,vt=Z.z):(Ne=0,et=0,vt=0);const ut=we.convert(O.format),It=we.convert(O.type);let Fe;O.isData3DTexture?(he.setTexture3D(O,0),Fe=W.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(he.setTexture2DArray(O,0),Fe=W.TEXTURE_2D_ARRAY):(he.setTexture2D(O,0),Fe=W.TEXTURE_2D),V.activeTexture(W.TEXTURE0),V.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,O.flipY),V.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),V.pixelStorei(W.UNPACK_ALIGNMENT,O.unpackAlignment);const Bt=V.getParameter(W.UNPACK_ROW_LENGTH),st=V.getParameter(W.UNPACK_IMAGE_HEIGHT),Zn=V.getParameter(W.UNPACK_SKIP_PIXELS),Ut=V.getParameter(W.UNPACK_SKIP_ROWS),Ts=V.getParameter(W.UNPACK_SKIP_IMAGES);V.pixelStorei(W.UNPACK_ROW_LENGTH,dt.width),V.pixelStorei(W.UNPACK_IMAGE_HEIGHT,dt.height),V.pixelStorei(W.UNPACK_SKIP_PIXELS,Oe),V.pixelStorei(W.UNPACK_SKIP_ROWS,qe),V.pixelStorei(W.UNPACK_SKIP_IMAGES,je);const zn=T.isDataArrayTexture||T.isData3DTexture,Qn=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){const nt=q.get(T),Pt=q.get(O),ln=q.get(nt.__renderTarget),gt=q.get(Pt.__renderTarget);V.bindFramebuffer(W.READ_FRAMEBUFFER,ln.__webglFramebuffer),V.bindFramebuffer(W.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let At=0;At<De;At++)zn&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,q.get(T).__webglTexture,Q,je+At),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,q.get(O).__webglTexture,Ce,vt+At)),W.blitFramebuffer(Oe,qe,Oe+Ue,qe+Re,Ne,et,Ne+Ue,et+Re,W.DEPTH_BUFFER_BIT,W.NEAREST);V.bindFramebuffer(W.READ_FRAMEBUFFER,null),V.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(Q!==0||T.isRenderTargetTexture||q.has(T)){const nt=q.get(T),Pt=q.get(O);V.bindFramebuffer(W.READ_FRAMEBUFFER,N),V.bindFramebuffer(W.DRAW_FRAMEBUFFER,J);for(let ln=0;ln<De;ln++)zn?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,nt.__webglTexture,Q,je+ln):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,nt.__webglTexture,Q),Qn?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Pt.__webglTexture,Ce,vt+ln):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Pt.__webglTexture,Ce),Q!==0?W.blitFramebuffer(Oe,qe,Oe+Ue,qe+Re,Ne,et,Ne+Ue,et+Re,W.COLOR_BUFFER_BIT,W.NEAREST):Qn?W.copyTexSubImage3D(Fe,Ce,Ne,et,vt+ln,Oe,qe,Ue,Re):W.copyTexSubImage2D(Fe,Ce,Ne,et,Oe,qe,Ue,Re);V.bindFramebuffer(W.READ_FRAMEBUFFER,null),V.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Qn?T.isDataTexture||T.isData3DTexture?W.texSubImage3D(Fe,Ce,Ne,et,vt,Ue,Re,De,ut,It,dt.data):O.isCompressedArrayTexture?W.compressedTexSubImage3D(Fe,Ce,Ne,et,vt,Ue,Re,De,ut,dt.data):W.texSubImage3D(Fe,Ce,Ne,et,vt,Ue,Re,De,ut,It,dt):T.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Ce,Ne,et,Ue,Re,ut,It,dt.data):T.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Ce,Ne,et,dt.width,dt.height,ut,dt.data):W.texSubImage2D(W.TEXTURE_2D,Ce,Ne,et,Ue,Re,ut,It,dt);V.pixelStorei(W.UNPACK_ROW_LENGTH,Bt),V.pixelStorei(W.UNPACK_IMAGE_HEIGHT,st),V.pixelStorei(W.UNPACK_SKIP_PIXELS,Zn),V.pixelStorei(W.UNPACK_SKIP_ROWS,Ut),V.pixelStorei(W.UNPACK_SKIP_IMAGES,Ts),Ce===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&W.generateMipmap(Fe),V.unbindTexture()},this.initRenderTarget=function(T){q.get(T).__webglFramebuffer===void 0&&he.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?he.setTextureCube(T,0):T.isData3DTexture?he.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?he.setTexture2DArray(T,0):he.setTexture2D(T,0),V.unbindTexture()},this.resetState=function(){se=0,ne=0,ve=null,V.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}class Z0 extends Lc{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new Mt;e.deleteAttribute("uv");const t=new an({side:Vt}),i=new an,s=new Xc(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new it(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new Nc(e,i,6),o=new bt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const c=new it(e,Ei(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new it(e,Ei(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const u=new it(e,Ei(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);const h=new it(e,Ei(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);const d=new it(e,Ei(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const f=new it(e,Ei(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Ei(n){return new Kf({color:0,emissive:16777215,emissiveIntensity:n})}function Q0(n){let e=n>>>0||2654435769;return function(){e=e+1831565813>>>0;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function wi(n,e=n){const t=document.createElement("canvas");return t.width=n,t.height=e,t}function j0(n,e,t){const i=new Float32Array(t*t);for(let a=0;a<i.length;a++)i[a]=n();const s=new Float32Array(e*e),r=a=>a*a*(3-2*a);for(let a=0;a<e;a++)for(let o=0;o<e;o++){const c=o/e*t,l=a/e*t,u=Math.floor(c),h=Math.floor(l),d=r(c-u),f=r(l-h),m=i[h%t*t+u%t],x=i[h%t*t+(u+1)%t],g=i[(h+1)%t*t+u%t],p=i[(h+1)%t*t+(u+1)%t];s[a*e+o]=(m*(1-d)+x*d)*(1-f)+(g*(1-d)+p*d)*f}return s}function Bl(n,e,t=4,i=5){const s=new Float32Array(e*e);let r=.5,a=0;for(let o=0;o<i;o++){const c=j0(n,e,t<<o);for(let l=0;l<s.length;l++)s[l]+=c[l]*r;a+=r,r*=.5}for(let o=0;o<s.length;o++)s[o]/=a;return s}function aa(n,e,t=!0){return n.colorSpace=e?Kt:Ln,t&&(n.wrapS=n.wrapT=dr),n.anisotropy=8,n.generateMipmaps=!0,n.minFilter=In,n.needsUpdate=!0,n}function Ji(n,e,t,{bump:i=2,grime:s=.35}={}){const r=Q0(n),a=wi(e),o=wi(e),c=wi(e),l=wi(e),u=a.getContext("2d"),h=o.getContext("2d"),d=c.getContext("2d"),f=l.getContext("2d");h.fillStyle="#808080",h.fillRect(0,0,e,e),t(u,h,d,f,e,r);const m=u.getImageData(0,0,e,e),x=h.getImageData(0,0,e,e),g=d.getImageData(0,0,e,e),p=f.getImageData(0,0,e,e),v=Bl(r,e,4,6),E=Bl(r,e,32,3),S=new Float32Array(e*e);for(let L=0;L<e*e;L++){const F=1-s*Math.max(0,v[L]*1.6-.45);m.data[L*4]*=F,m.data[L*4+1]*=F,m.data[L*4+2]*=F*.98,S[L]=x.data[L*4]/255+(E[L]-.5)*.06,g.data[L*4]=Math.max(0,Math.min(255,g.data[L*4]+(v[L]-.5)*90+(E[L]-.5)*40))}u.putImageData(m,0,0);const C=new Uint8ClampedArray(e*e*4),w=new Uint8ClampedArray(e*e*4),_=(L,F)=>S[(F+e)%e*e+(L+e)%e];for(let L=0;L<e;L++)for(let F=0;F<e;F++){const k=(_(F+1,L)-_(F-1,L))*i*e/512*4,te=(_(F,L+1)-_(F,L-1))*i*e/512*4,N=1/Math.hypot(k,te,1),J=(L*e+F)*4;C[J]=(-k*N*.5+.5)*255,C[J+1]=(te*N*.5+.5)*255,C[J+2]=(N*.5+.5)*255,C[J+3]=255,w[J]=255,w[J+1]=g.data[J],w[J+2]=p.data[J],w[J+3]=255}const A=wi(e),I=wi(e);return A.getContext("2d").putImageData(new ImageData(C,e,e),0,0),I.getContext("2d").putImageData(new ImageData(w,e,e),0,0),{map:aa(new or(a),!0),normalMap:aa(new or(A),!1),orm:aa(new or(I),!1)}}const pt=n=>{const e=Math.round(Math.max(0,Math.min(1,n))*255);return`rgb(${e},${e},${e})`};function li(n,e,t,i,s,r=.2,a=1){n.strokeStyle=s,n.lineCap="round";for(let o=0;o<i;o++){const c=e()*t,l=e()*t,u=e()*Math.PI,h=(.02+e()*r)*t;n.lineWidth=a*(.4+e()),n.globalAlpha=.15+e()*.5,n.beginPath(),n.moveTo(c,l),n.lineTo(c+Math.cos(u)*h,l+Math.sin(u)*h),n.stroke()}n.globalAlpha=1}function eo(n,e,t,i,s){for(let r=0;r<i;r++){const a=e()*t,o=e()*t*.6,c=(.15+e()*.5)*t,l=2+e()*10,u=n.createLinearGradient(0,o,0,o+c);u.addColorStop(0,s),u.addColorStop(1,"rgba(0,0,0,0)"),n.globalAlpha=.12+e()*.25,n.fillStyle=u,n.fillRect(a,o,l,c)}n.globalAlpha=1}function eg(n,e,t,i,s,r){n.fillStyle="#8f9690",n.fillRect(0,0,s,s),t.fillStyle=pt(.62),t.fillRect(0,0,s,s),i.fillStyle=pt(.25),i.fillRect(0,0,s,s);const a=s/2;for(let o=0;o<2;o++)for(let c=0;c<2;c++){const l=c*a,u=o*a,h=.88+r()*.2;n.fillStyle=`rgb(${132*h|0},${141*h|0},${136*h|0})`,n.fillRect(l+3,u+3,a-6,a-6);const d=a*.12;e.fillStyle=pt(.56),e.fillRect(l+d,u+d,a-2*d,a-2*d),e.strokeStyle=pt(.36),e.lineWidth=3,e.strokeRect(l+d,u+d,a-2*d,a-2*d),n.strokeStyle="rgba(30,34,36,0.5)",n.lineWidth=2,n.strokeRect(l+d,u+d,a-2*d,a-2*d),e.strokeStyle=pt(.12),e.lineWidth=5,e.strokeRect(l,u,a,a),n.strokeStyle="#1a1d1f",n.lineWidth=4,n.strokeRect(l,u,a,a),t.strokeStyle=pt(.9),t.lineWidth=6,t.strokeRect(l,u,a,a);for(let f=0;f<6;f++)for(const[m,x]of[[l+d*.5+(a-d)*f/6+6,u+d*.5],[l+d*.5+(a-d)*f/6+6,u+a-d*.5],[l+d*.5,u+d*.5+(a-d)*f/6+6],[l+a-d*.5,u+d*.5+(a-d)*f/6+6]])e.fillStyle=pt(.85),e.beginPath(),e.arc(m,x,3.2,0,7),e.fill(),n.fillStyle="rgba(200,205,200,0.5)",n.beginPath(),n.arc(m-.6,x-.6,2.2,0,7),n.fill(),i.fillStyle=pt(.9),i.beginPath(),i.arc(m,x,3.2,0,7),i.fill()}for(let o=0;o<260;o++){const c=r()<.5,l=Math.round(r()*2)*a+(r()-.5)*22,u=r()*s,h=1+r()*5,d=c?l:u,f=c?u:l;n.fillStyle=`rgba(${70+r()*40|0},${72+r()*30|0},${70+r()*30|0},0.9)`,n.beginPath(),n.ellipse(d,f,h,h*(.4+r()),r()*3,0,7),n.fill(),i.fillStyle=pt(1),i.beginPath(),i.arc(d,f,h,0,7),i.fill(),t.fillStyle=pt(.35),t.beginPath(),t.arc(d,f,h,0,7),t.fill()}eo(n,r,s,46,"rgba(40,30,22,0.9)"),eo(t,r,s,30,"rgba(255,255,255,0.8)"),li(n,r,s,150,"#cfd3cf",.12,1),li(e,r,s,80,"#606060",.12,1.4)}function tg(n,e,t,i,s,r){n.fillStyle="#3a3d40",n.fillRect(0,0,s,s),t.fillStyle=pt(.5),t.fillRect(0,0,s,s),i.fillStyle=pt(.85),i.fillRect(0,0,s,s);const a=s/2;for(let l=0;l<2;l++)for(let u=0;u<2;u++){const h=u*a,d=l*a,f=.8+r()*.35;n.fillStyle=`rgb(${58*f|0},${61*f|0},${64*f|0})`,n.fillRect(h+2,d+2,a-4,a-4);const m=a/14;for(let x=0;x<14;x++)for(let g=0;g<14;g++){const p=h+(x+.5)*m,v=d+(g+.5)*m,E=(x+g)%2?.785:-.785;e.fillStyle=pt(.78),e.beginPath(),e.ellipse(p,v,m*.36,m*.11,E,0,7),e.fill(),n.fillStyle="rgba(120,124,128,0.35)",n.beginPath(),n.ellipse(p-.5,v-.5,m*.34,m*.09,E,0,7),n.fill(),t.fillStyle=pt(.3),t.beginPath(),t.ellipse(p,v,m*.34,m*.1,E,0,7),t.fill()}e.strokeStyle=pt(.1),e.lineWidth=6,e.strokeRect(h,d,a,a),n.strokeStyle="#0c0d0e",n.lineWidth=5,n.strokeRect(h,d,a,a);for(const[x,g]of[[h+14,d+14],[h+a-14,d+14],[h+14,d+a-14],[h+a-14,d+a-14]])e.fillStyle=pt(.25),e.beginPath(),e.arc(x,g,5,0,7),e.fill(),n.fillStyle="#17181a",n.beginPath(),n.arc(x,g,5,0,7),n.fill()}const o=n.createLinearGradient(0,0,s,0);o.addColorStop(.2,"rgba(150,155,160,0)"),o.addColorStop(.5,"rgba(150,155,160,0.16)"),o.addColorStop(.8,"rgba(150,155,160,0)"),n.fillStyle=o,n.fillRect(0,0,s,s);const c=t.createLinearGradient(0,0,s,0);c.addColorStop(.2,"rgba(0,0,0,0)"),c.addColorStop(.5,"rgba(0,0,0,0.35)"),c.addColorStop(.8,"rgba(0,0,0,0)"),t.fillStyle=c,t.fillRect(0,0,s,s),li(n,r,s,260,"#8d9196",.2,1.2),li(t,r,s,200,"#202020",.2,2);for(let l=0;l<26;l++){const u=r()*s,h=r()*s,d=6+r()*34,f=n.createRadialGradient(u,h,0,u,h,d);f.addColorStop(0,"rgba(8,8,10,0.55)"),f.addColorStop(1,"rgba(8,8,10,0)"),n.fillStyle=f,n.fillRect(u-d,h-d,2*d,2*d);const m=t.createRadialGradient(u,h,0,u,h,d);m.addColorStop(0,"rgba(0,0,0,0.6)"),m.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=m,t.fillRect(u-d,h-d,2*d,2*d)}}function ng(n,e,t,i,s,r){n.fillStyle="#6c7074",n.fillRect(0,0,s,s),t.fillStyle=pt(.42),t.fillRect(0,0,s,s),i.fillStyle=pt(1),i.fillRect(0,0,s,s);for(let a=0;a<1400;a++){const o=r()*s,c=r()*s,l=20+r()*160,u=90+r()*70|0;n.strokeStyle=`rgba(${u},${u+3},${u+6},0.25)`,n.lineWidth=1,n.beginPath(),n.moveTo(c,o),n.lineTo(c+l,o+(r()-.5)*2),n.stroke()}for(let a=0;a<60;a++){const o=r()*s,c=r()*s,l=8+r()*46,u=n.createRadialGradient(o,c,0,o,c,l);u.addColorStop(0,r()<.5?"rgba(92,52,28,0.5)":"rgba(20,20,24,0.5)"),u.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=u,n.fillRect(o-l,c-l,2*l,2*l);const h=t.createRadialGradient(o,c,0,o,c,l);h.addColorStop(0,"rgba(255,255,255,0.5)"),h.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=h,t.fillRect(o-l,c-l,2*l,2*l)}li(n,r,s,200,"#c2c6ca",.15,1),li(e,r,s,120,"#555",.15,1.5)}function ig(n,e,t,i,s,r){n.fillStyle="#e4e4e0",n.fillRect(0,0,s,s),t.fillStyle=pt(.55),t.fillRect(0,0,s,s),i.fillStyle=pt(.1),i.fillRect(0,0,s,s);for(let a=0;a<300;a++){const o=r()*s,c=r()*s,l=.8+r()*r()*r()*9;n.fillStyle=`rgba(${100+r()*50|0},${100+r()*45|0},${104+r()*40|0},0.8)`,n.beginPath(),n.ellipse(o,c,l,l*(.3+r()*.8),r()*3,0,7),n.fill(),i.fillStyle=pt(.5),i.beginPath(),i.arc(o,c,l,0,7),i.fill(),e.fillStyle=pt(.42),e.beginPath(),e.arc(o,c,l,0,7),e.fill(),t.fillStyle=pt(.3),t.beginPath(),t.arc(o,c,l,0,7),t.fill()}eo(n,r,s,30,"rgba(50,38,28,0.8)"),li(n,r,s,200,"#70706c",.1,1)}function sg(n,e,t,i,s,r){n.fillStyle="#d8d6d0",n.fillRect(0,0,s,s),t.fillStyle=pt(.92),t.fillRect(0,0,s,s),i.fillStyle=pt(0),i.fillRect(0,0,s,s);for(let a=0;a<s;a+=4)e.fillStyle=pt(.44),e.fillRect(0,a,s,2);for(let a=0;a<s;a+=4)e.fillStyle="rgba(160,160,160,0.5)",e.fillRect(a,0,2,s);for(let a=0;a<40;a++){const o=r()*s,c=6+r()*20,l=e.createLinearGradient(0,o,0,o+c);l.addColorStop(0,"rgba(255,255,255,0)"),l.addColorStop(.5,"rgba(255,255,255,0.5)"),l.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=l,e.fillRect(0,o,s,c),n.fillStyle="rgba(0,0,0,0.07)",n.fillRect(0,o+c*.6,s,c*.5)}for(let a=0;a<50;a++){const o=r()*s,c=r()*s,l=10+r()*50,u=n.createRadialGradient(o,c,0,o,c,l);u.addColorStop(0,"rgba(40,34,28,0.3)"),u.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=u,n.fillRect(o-l,c-l,2*l,2*l)}}let Js=null;function su(){return Js||(Js={panel:Ji(11,1024,eg,{bump:2.4}),floor:Ji(23,1024,tg,{bump:3,grime:.45}),metal:Ji(37,512,ng,{bump:1.2}),paint:Ji(41,512,ig,{bump:1.6}),cloth:Ji(53,256,sg,{bump:2.2,grime:.2})},Js)}const kl={neonViolet:14242287,turquoise:8702925},cr=6,rg={uWake:{value:0},uTime:{value:0},uUzQ:{value:2},uUzOff:{value:0},uAO:{value:.5},uWakeA:{value:new Ve(kl.turquoise)},uWakeB:{value:new Ve(kl.neonViolet)}},ag=`
attribute vec3 aFlat; attribute vec3 aFlatN;
varying vec3 vFlat; varying vec3 vFlatN;
`,og=`
varying vec3 vFlat; varying vec3 vFlatN;
uniform vec4 uFrost[${cr}];
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
  for (int i = 0; i < ${cr}; i++) {
    vec3 d = vFlat - uFrost[i].xyz; float r = uFrost[i].w * (1.0 + 0.4 * uWake) * 1.45;
    m0 = max(m0, 1.0 - dot(d, d) / (r * r));
  }
  if (m0 <= 0.0) return;
  float n1 = uzNoise(p * 2.3), n2 = uzNoise(p * 7.1), n3 = uzNoise(p * 23.0);
  float nz = n1 * 0.55 + n2 * 0.3 + n3 * 0.15;
  float m = 0.0;
  for (int i = 0; i < ${cr}; i++) {
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
`,lg=`
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
`,cg=`
#include <aomap_fragment>
reflectedLight.indirectDiffuse *= uzAO;
reflectedLight.indirectSpecular *= uzAO;
`;function ug(n){Object.assign(n.uniforms,rg,this.userData.room),n.vertexShader=ag+n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vFlat = aFlat; vFlatN = aFlatN;`),n.fragmentShader=og+n.fragmentShader.replace("#include <normal_fragment_maps>",lg).replace("#include <aomap_fragment>",cg)}function fg(n,e){return{uFrost:{value:Array.from({length:cr},()=>new _t(0,-100,0,.001))},uRoomMin:{value:new H(...n)},uRoomMax:{value:new H(...e)}}}function Zi(n,e,{color:t=16777215,rough:i=1,metal:s=1,normal:r=1}={}){const a=su()[n],o=new an({map:a.map,normalMap:a.normalMap,roughnessMap:a.orm,metalnessMap:a.orm,color:t,roughness:i,metalness:s,vertexColors:!0});return o.normalScale.set(r,r),o.userData.room=e,o.onBeforeCompile=ug,o.customProgramCacheKey=()=>"uzor2",o}const yr={wall:["panel",16777215],wallDark:["panel",6120555],ceil:["panel",4014663],floor:["floor",16777215],steel:["metal",16777215],steelDark:["metal",4869458],bronze:["metal",12092746],copper:["metal",13662538],weld:["metal",15133938],orange:["paint",13132830],yellow:["paint",13214247],teal:["paint",3112838],white:["paint",14276559],paper:["paint",6118229],red:["paint",9316898],rubber:["cloth",1776671],cloth:["cloth",7305827],clothBlue:["cloth",3952491],clothWarm:["cloth",10123861]};function Zs(n,e=1,t=null){const i=new Fi({color:new Ve(n).multiplyScalar(e),map:t,toneMapped:!1});return i.userData.unlit=!0,i.userData.noShadow=!0,i}function dg(n){return{panel:Zi("panel",n),floor:Zi("floor",n,{rough:.85}),metal:Zi("metal",n),paint:Zi("paint",n),cloth:Zi("cloth",n)}}const on={max:.45,thin:.012,vol:.035,gap:.014,touch:.006,item:.6},os=n=>[n.x1-n.x0,n.y1-n.y0,n.z1-n.z0],hg=n=>{const[e,t,i]=os(n);return Math.max(e,t,i)<=on.max&&t>=on.thin&&Math.min(e,i)>=on.thin&&e*t*i<=on.vol};function pg(n,{floors:e=[0]}={}){const i=new Map,s=(p,v)=>p+","+v,r=(p,v)=>{if(!(p.x1-p.x0>60||p.z1-p.z0>200))for(let E=Math.floor((p.x0-.01)/.5);E<=Math.floor((p.x1+.01)/.5);E++)for(let S=Math.floor((p.z0-.01)/.5);S<=Math.floor((p.z1+.01)/.5);S++)v(s(E,S))},a=[];n.forEach((p,v)=>{p._n=v,p._small=hg(p),p.x1-p.x0>60||p.z1-p.z0>200?a.push(p):r(p,E=>(i.get(E)||i.set(E,[]).get(E)).push(p))});const o=p=>{const v=new Set(a);return r(p,E=>{for(const S of i.get(E)||[])v.add(S)}),v.delete(p),v},c=[],l=new Set;for(const p of n){if(!p._small||p.fix||p.loose||p.soft===!1)continue;const v=(p.x0+p.x1)/2,E=(p.y0+p.y1)/2,S=(p.z0+p.z1)/2,C=(p.x1-p.x0)*(p.z1-p.z0);let w=e.some(I=>Math.abs(p.y0-I)<=on.gap),_=!1,A=!1;for(const I of o(p)){const L=(I.x1-I.x0)*(I.z1-I.z0),F=v>=I.x0-.005&&v<=I.x1+.005&&S>=I.z0-.005&&S<=I.z1+.005;if(F&&!I._small&&E>I.y0&&E<I.y1-.004){_=!0;break}F&&!w&&Math.abs(p.y0-I.y1)<=on.gap&&(!I._small||L>=C*2.5)&&(w=!0),Math.abs(I.y0-p.y1)<=on.gap&&L>C*1.5&&I.x0<p.x1&&I.x1>p.x0&&I.z0<p.z1&&I.z1>p.z0&&(A=!0)}_||A||(c.push(p),w&&l.add(p))}const u=new Map(c.map(p=>[p,p])),h=new Map(c.map(p=>[p,{x0:p.x0,x1:p.x1,y0:p.y0,y1:p.y1,z0:p.z0,z1:p.z1}])),d=p=>{for(;u.get(p)!==p;)u.set(p,u.get(u.get(p))),p=u.get(p);return p},f=new Set(c),m=on.touch;for(const p of c)for(const v of o(p)){if(!f.has(v)||v._n<p._n||p.x0>v.x1+m||v.x0>p.x1+m||p.y0>v.y1+m||v.y0>p.y1+m||p.z0>v.z1+m||v.z0>p.z1+m||p.solo&&v.solo&&l.has(p)&&l.has(v))continue;const E=d(p),S=d(v);if(E===S)continue;const C=h.get(E),w=h.get(S),_={x0:Math.min(C.x0,w.x0),x1:Math.max(C.x1,w.x1),y0:Math.min(C.y0,w.y0),y1:Math.max(C.y1,w.y1),z0:Math.min(C.z0,w.z0),z1:Math.max(C.z1,w.z1)};Math.max(...os(_))>on.item||(u.set(S,E),h.set(E,_))}const x=new Map;for(const p of c){const v=d(p);(x.get(v)||x.set(v,[]).get(v)).push(p)}const g=[];for(const p of x.values()){if(!p.some(w=>l.has(w)))continue;const v=h.get(d(p[0])),E=new Set(p);let S=!1;const C=[];for(const w of p)for(const _ of o(w))if(!(E.has(_)||f.has(_)||_.fix||_.loose||Math.max(...os(_))>on.max)&&!(w.x0>_.x1+m||_.x0>w.x1+m||w.y0>_.y1+m||_.y0>w.y1+m||w.z0>_.z1+m||_.z0>w.z1+m)){if(_.soft===!1){S=!0;break}_.y0>=v.y0+.008&&!_._small&&Math.max(Math.max(v.x1,_.x1)-Math.min(v.x0,_.x0),Math.max(v.z1,_.z1)-Math.min(v.z0,_.z0))<=on.item&&(E.add(_),C.push(_))}if(!S){for(const w of C)v.x0=Math.min(v.x0,w.x0),v.x1=Math.max(v.x1,w.x1),v.y1=Math.max(v.y1,w.y1),v.z0=Math.min(v.z0,w.z0),v.z1=Math.max(v.z1,w.z1);g.push({parts:[...p,...C].map(w=>w._n),box:v})}}for(let p=g.length-1;p>=0;p--){const v=g[p].box;if(Math.max(...os(v))>.07)continue;const E=(v.x0+v.x1)/2,S=(v.z0+v.z1)/2,C=g.find(w=>w!==g[p]&&Math.max(...os(w.box))>.07&&E>w.box.x0&&E<w.box.x1&&S>w.box.z0&&S<w.box.z1&&v.y0>=w.box.y0+.015&&v.y0<=w.box.y1+on.gap+.01);C&&(C.parts.push(...g[p].parts),C.box.y1=Math.max(C.box.y1,v.y1),g.splice(p,1))}return g.sort((p,v)=>p.parts[0]-v.parts[0]),g}function mg(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,c=new Xt;c.morphTargetsRelative=o;let l=0;for(let u=0;u<n.length;++u){const h=n[u];let d=0,f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in h.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(h.attributes[m]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in h.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(h.morphAttributes[m].length!==n[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;a[m]===void 0&&(a[m]=[]),a[m].push(h.morphAttributes[m]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(t)m=h.index.count;else if(h.attributes.position!==void 0)m=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,m,u),l+=m}}if(t){let u=0;const h=[];for(let d=0;d<n.length;++d){const f=n[d].index;for(let m=0;m<f.count;++m)h.push(f.getX(m)+u);u+=n[d].attributes.position.count}c.setIndex(h)}for(const u in r){const h=Gl(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let x=0;x<a[u].length;++x)f.push(a[u][x][d]);const m=Gl(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(m)}}}return c}function Gl(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){const u=n[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const a=new e(r),o=new Ht(a,t,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const h=c/t;for(let d=0,f=u.count;d<f;d++)for(let m=0;m<t;m++){const x=u.getComponent(d,m);o.setComponent(d+h,m,x)}}else a.set(u.array,c);c+=u.count*t}return s!==void 0&&(o.gpuType=s),o}const Qi=new H;function rn(n,e,t,i,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Qi.copy(e),Qi[i]=0,Qi.normalize();const l=.5*a/(a+o),u=1-Qi.angleTo(n)/c;return Math.sign(Qi[t])===1?u*l:o/(a+o)+l+l*(1-u)}class Mo extends Mt{constructor(e=1,t=1,i=1,s=2,r=.1){const a=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new H,l=new H,u=new H(e,t,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,m=h.length/6,x=new H,g=.5/a;for(let p=0,v=0;p<h.length;p+=3,v+=2)switch(c.fromArray(h,p),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),h[p+0]=u.x*Math.sign(c.x)+l.x*r,h[p+1]=u.y*Math.sign(c.y)+l.y*r,h[p+2]=u.z*Math.sign(c.z)+l.z*r,d[p+0]=l.x,d[p+1]=l.y,d[p+2]=l.z,Math.floor(p/m)){case 0:x.set(1,0,0),f[v+0]=rn(x,l,"z","y",r,i),f[v+1]=1-rn(x,l,"y","z",r,t);break;case 1:x.set(-1,0,0),f[v+0]=1-rn(x,l,"z","y",r,i),f[v+1]=1-rn(x,l,"y","z",r,t);break;case 2:x.set(0,1,0),f[v+0]=1-rn(x,l,"x","z",r,e),f[v+1]=rn(x,l,"z","x",r,i);break;case 3:x.set(0,-1,0),f[v+0]=1-rn(x,l,"x","z",r,e),f[v+1]=1-rn(x,l,"z","x",r,i);break;case 4:x.set(0,0,1),f[v+0]=1-rn(x,l,"x","y",r,e),f[v+1]=1-rn(x,l,"y","x",r,t);break;case 5:x.set(0,0,-1),f[v+0]=rn(x,l,"x","y",r,e),f[v+1]=1-rn(x,l,"y","x",r,t);break}}static fromJSON(e){return new Mo(e.width,e.height,e.depth,e.segments,e.radius)}}const hs=42,Qs=new Ve,gg=new H(1,0,0);function ru(n){const e=n.z/hs,t=hs-n.y;return n.set(n.x,hs-t*Math.cos(e),t*Math.sin(e))}function Mr(n,e=new zt){return e.setFromAxisAngle(gg,-n/hs)}function Bi(n,e,t,i=new H){return ru(i.set(n,e,t))}function xg(n){const e=n.attributes.position,t=n.attributes.normal,i=new Float32Array(e.count*3),s=new Float32Array(e.count*3),r=new H;for(let a=0;a<e.count;a++){const o=e.getX(a),c=e.getY(a),l=e.getZ(a);i[a*3]=o,i[a*3+1]=c,i[a*3+2]=l;const u=t.getX(a),h=t.getY(a),d=t.getZ(a);s[a*3]=u,s[a*3+1]=h,s[a*3+2]=d,ru(r.set(o,c,l)),e.setXYZ(a,r.x,r.y,r.z);const f=l/hs,m=Math.cos(f),x=Math.sin(f);t.setXYZ(a,u,h*m+d*x,-h*x+d*m)}return n.setAttribute("aFlat",new Ht(i,3)),n.setAttribute("aFlatN",new Ht(s,3)),n.computeBoundingSphere(),n.computeBoundingBox(),n}new ot;const _g=new Wt,vg=new H,yg=new H(1,1,1),Hl=[],Mg={floors:[0]};function Sg(n,e){const t=[],i=(u,h,d,f,m,x)=>{h-u>1e-4&&f-d>1e-4&&x-m>1e-4&&t.push({x0:u,x1:h,y0:d,y1:f,z0:m,z1:x})},s=Math.max(n.x0,e.x0),r=Math.min(n.x1,e.x1),a=Math.max(n.y0,e.y0),o=Math.min(n.y1,e.y1),c=Math.max(n.z0,e.z0),l=Math.min(n.z1,e.z1);return s>=r||a>=o||c>=l?[n]:(i(n.x0,s,n.y0,n.y1,n.z0,n.z1),i(r,n.x1,n.y0,n.y1,n.z0,n.z1),i(s,r,n.y0,n.y1,n.z0,c),i(s,r,n.y0,n.y1,l,n.z1),i(s,r,n.y0,a,c,l),i(s,r,o,n.y1,c,l),t)}class yn{constructor({record:e=!1}={}){this.bins=new Map,this.record=e,this.fix="",this.solo=!1,this.parts=[]}fixed(e,t){const i=this.fix;this.fix=e||"закреплено";try{t()}finally{this.fix=i}return this}note(e,t){if(!this.record)return;t.computeBoundingBox();const i=t.boundingBox,s=yr[e],r={mat:e,fix:this.fix,solo:this.solo,soft:!!s,at:yn.trace?yn.trace():"",x0:i.min.x,x1:i.max.x,y0:i.min.y,y1:i.max.y,z0:i.min.z,z1:i.max.z};this.parts.push({p:r,g:t,bin:s?s[0]:e})}takeLoose(){const e=this.parts,t=pg(e.map(s=>s.p),{floors:Mg.floors}),i=new Set;for(const s of t){const r=s.box,a=(r.x0+r.x1)/2,o=(r.y0+r.y1)/2,c=(r.z0+r.z1)/2,l="lz"+Hl.length,u=s.parts.map(h=>{const d=e[h];return i.add(d.g),d.p.loose=l,d.g.translate(-a,-o,-c),{mat:d.p.mat,faktura:d.bin,g:d.g}});Hl.push({id:l,x:a,y:o,z:c,h:[Math.max(.02,(r.x1-r.x0)/2),Math.max(.012,(r.y1-r.y0)/2),Math.max(.02,(r.z1-r.z0)/2)],vol:(r.x1-r.x0)*(r.y1-r.y0)*(r.z1-r.z0),geos:u})}if(i.size)for(const[s,r]of[...this.bins]){const a=r.filter(o=>!i.has(o));a.length?this.bins.set(s,a):this.bins.delete(s)}this.parts=[]}add(e,t,i){let s=t.index?t.toNonIndexed():t.clone();for(const a of Object.keys(s.attributes))["position","normal","uv"].includes(a)||s.deleteAttribute(a);s.attributes.uv||s.setAttribute("uv",new Ht(new Float32Array(s.attributes.position.count*2),2)),i&&s.applyMatrix4(i),this.note(e,s);const r=yr[e];if(r){Qs.set(r[1]);const a=s.attributes.position.count,o=new Float32Array(a*3);for(let c=0;c<a;c++)o[c*3]=Qs.r,o[c*3+1]=Qs.g,o[c*3+2]=Qs.b;s.setAttribute("color",new Ht(o,3)),e=r[0]}return this.bins.has(e)||this.bins.set(e,[]),this.bins.get(e).push(s),this}addColored(e,t){const i=t.index?t.toNonIndexed():t.clone();for(const s of Object.keys(i.attributes))["position","normal","uv","color"].includes(s)||i.deleteAttribute(s);if(i.attributes.uv||i.setAttribute("uv",new Ht(new Float32Array(i.attributes.position.count*2),2)),!i.attributes.color){const s=i.attributes.position.count,r=new Float32Array(s*3).fill(1);i.setAttribute("color",new Ht(r,3))}return this.bins.has(e)||this.bins.set(e,[]),this.bins.get(e).push(i),this}mtx(e,t,i,s=0,r=0,a=0,o=1,c=1,l=1){return new ot().compose(vg.set(e,t,i),new zt().setFromEuler(_g.set(s,r,a,"YXZ")),yg.set(o,c,l)).clone()}box(e,t,i,s,r,a,o,{rx:c=0,ry:l=0,rz:u=0,tile:h=2,uo:d=0,vo:f=0,bevel:m}={}){const x=c||l||u;if(yn.holes&&yn.holes.length&&!x&&!this.noHoles){const I={x0:t-r/2,x1:t+r/2,y0:i-a/2,y1:i+a/2,z0:s-o/2,z1:s+o/2},L=yn.holes.filter(F=>F.x0<I.x1&&F.x1>I.x0&&F.y0<I.y1&&F.y1>I.y0&&F.z0<I.z1&&F.z1>I.z0);if(L.length){let F=[I];for(const k of L)F=F.flatMap(te=>Sg(te,k));this.noHoles=!0;try{for(const k of F)this.box(e,(k.x0+k.x1)/2,(k.y0+k.y1)/2,(k.z0+k.z1)/2,k.x1-k.x0,k.y1-k.y0,k.z1-k.z0,{tile:h,uo:d,vo:f,bevel:0})}finally{this.noHoles=!1}return this}}const g=x?1:Math.max(1,Math.ceil(o/.8)),p=x&&Math.abs(Math.abs(l)-Math.PI/2)<.01?Math.max(1,Math.ceil(r/.8)):1,v=Math.min(r,a,o),E=Math.max(r,a,o);m===void 0&&(m=v>=.1&&E<=2.2&&g<=3?Math.min(.022,v*.14):0);const S=m?new Mo(r,a,o,1,m):new Mt(r,a,o,p,1,g),C=S.index?S.toNonIndexed():S,w=C.attributes.position,_=C.attributes.normal,A=C.attributes.uv;for(let I=0;I<w.count;I++){const L=w.getX(I)+(x?0:t),F=w.getY(I)+(x?0:i),k=w.getZ(I)+(x?0:s),te=Math.abs(_.getX(I)),N=Math.abs(_.getY(I));te>.5?A.setXY(I,k/h+d,F/h+f):N>.5?A.setXY(I,L/h+d,k/h+f):A.setXY(I,L/h+d,F/h+f)}return this.add(e,C,this.mtx(t,i,s,c,l,u))}slab(e,t,i,s,r,a,o,c){return this.box(e,(t+r)/2,(i+a)/2,(s+o)/2,Math.abs(r-t),Math.abs(a-i),Math.abs(o-s),c)}pipe(e,t,i,s,{seg:r=12,cap:a=!1}={}){const o=new H(...t),c=new H(...i),l=o.distanceTo(c),u=new Ii(s,s,l,r,Math.max(1,Math.ceil(l/.8)),!a),h=u.attributes.uv;for(let f=0;f<h.count;f++)h.setXY(f,h.getX(f)*Math.max(1,Math.round(s*12)),h.getY(f)*l/2);const d=new zt().setFromUnitVectors(new H(0,1,0),c.clone().sub(o).normalize());return this.add(e,u,new ot().compose(o.clone().add(c).multiplyScalar(.5),d,new H(1,1,1)))}cable(e,t,i=.025,{seg:s=6,tension:r=.5}={}){const a=new kc(t.map(c=>new H(...c)),!1,"catmullrom",r),o=Math.max(8,Math.ceil(a.getLength()/.12));return this.add(e,new _o(a,o,i,s,!1))}wall(e,t,i,s,r,a,o,c,l=[],u){const h=l.slice().sort((x,g)=>x.a0-g.a0),d=(x,g,p,v)=>{g-x<1e-4||v-p<1e-4||(t==="x"?this.slab(e,i-c/2,p,x,i+c/2,v,g,u):this.slab(e,x,p,i-c/2,g,v,i+c/2,u))},f=.003;let m=s;for(const x of h)d(m,x.a0-f,a,o),d(x.a0-f,x.a1+f,a,x.y0-f),d(x.a0-f,x.a1+f,x.y1+f,o),m=x.a1+f;return d(m,r,a,o),this}build(e,{shadows:t=!0}={}){this.record&&this.takeLoose();const i=new Pi;for(const[s,r]of this.bins){const a=e[s];if(!a)throw new Error("нет материала "+s);const o=xg(mg(r,!1));for(const l of r)l.dispose();const c=new it(o,a);c.name=s,c.castShadow=t&&!a.transparent&&!a.userData.noShadow,c.receiveShadow=!a.userData.unlit,i.add(c)}return this.bins.clear(),i}}class bg{constructor(e,{spots:t=3,points:i=3}={}){this.defs=[],this.spots=[],this.points=[],this.slotDef=[],this.dirty=[],this.rr=0,this.shadowsPerFrame=3,this.forceShadows=!1;for(let s=0;s<t;s++){const r=new ed(16777215,0,30,.6,.5,1.6);r.castShadow=!0,r.shadow.mapSize.set(1024,1024),r.shadow.bias=-.0015,r.shadow.normalBias=.03,r.shadow.camera.near=.2,r.shadow.autoUpdate=!1,e.add(r,r.target),this.spots.push(r),this.slotDef.push(null),this.dirty.push(!0)}for(let s=0;s<i;s++){const r=new Xc(16777215,0,12,1.8);e.add(r),this.points.push(r)}this.nSpots=t,this.nPoints=i}setTier({spots:e,shadowSpots:t,shadowSize:i,points:s,shadowsPerFrame:r}){this.nSpots=Math.min(e,this.spots.length),this.nPoints=Math.min(s,this.points.length),this.shadowsPerFrame=r,this.spots.forEach((a,o)=>{a.visible=o<this.nSpots,a.castShadow=o<t,a.shadow.mapSize.x!==i&&(a.shadow.mapSize.set(i,i),a.shadow.map&&(a.shadow.map.dispose(),a.shadow.map=null)),this.dirty[o]=!0}),this.points.forEach((a,o)=>{a.visible=o<this.nPoints})}add(e){return e.world=Bi(...e.pos),e.to&&(e.worldTo=Bi(...e.to)),e.reach=e.reach||26,e.col=new Ve(e.color),this.defs.push(e),e}touch(e,t){this.spots.forEach((i,s)=>{const r=this.slotDef[s];r&&Math.hypot(r.pos[0]-e,r.pos[2]-t)<(r.dist||14)+1&&(this.dirty[s]=!0)})}update(e,t,i,s=0,r=null){const a=(l,u,h)=>{const d=[];for(const f of this.defs){if(f.kind!==l||f.off)continue;const m=Math.hypot(f.pos[0]-e,f.pos[2]-t),x=1-Math.min(1,Math.max(0,(m-(f.reach-5))/5));x>0&&d.push([x*(f.prio||1),x,f])}d.sort((f,m)=>m[0]-f[0]);for(let f=0;f<u.length;f++){const m=u[f],x=f<h?d[f]:null;if(!x){m.intensity=0,l==="spot"&&(this.slotDef[f]=null);continue}const g=x[2],p=g.wakeKeep??.16;m.color.copy(g.col),s>0&&r&&m.color.lerp(r,s*.75),m.intensity=g.power*x[1]*(g.flicker?g.flicker(i):1)*(1-s*(1-p)),m.position.copy(g.world),m.distance=g.dist||14,m.decay=g.decay??(l==="spot"?1.6:1.8),l==="spot"&&(m.target.position.copy(g.worldTo),m.target.updateMatrixWorld(),m.angle=g.angle||.6,m.penumbra=g.penumbra??.6,m.shadow.camera.far=m.distance,m.shadow.camera.near=g.near||.2,this.slotDef[f]!==g&&(this.slotDef[f]=g,this.dirty[f]=!0))}};a("spot",this.spots,this.nSpots),a("point",this.points,this.nPoints);let o=this.forceShadows?99:this.shadowsPerFrame,c=0;for(let l=0;l<this.spots.length&&o>0;l++){const u=(this.rr+l)%this.spots.length,h=this.spots[u];!h.castShadow||!h.visible||(this.forceShadows||this.dirty[u]&&h.intensity>0)&&(h.shadow.needsUpdate=!0,this.dirty[u]=!1,o--,c++,this.rr=u+1)}return c}}let Xe=null;function au(n){Xe=n}function ji(n,e,t,i=1e9){let s=null,r=i,a=0,o=0;for(const l of t){let u=0,h=r,d=-1,f=0,m=!1;for(let x=0;x<3&&!m;x++){const g=x===0?l.x0:x===1?l.y0:l.z0,p=x===0?l.x1:x===1?l.y1:l.z1,v=n[x],E=e[x];if(Math.abs(E)<1e-9){(v<g||v>p)&&(m=!0);continue}let S=(g-v)/E,C=(p-v)/E,w=-1;if(S>C){const _=S;S=C,C=_,w=1}S>u&&(u=S,d=x,f=w),C<h&&(h=C),u>h&&(m=!0)}!m&&d>=0&&u>1e-4&&u<r&&(r=u,s=l,a=d,o=f)}if(!s)return null;const c=[0,0,0];return c[a]=o,{box:s,t:r,n:c}}const Eg=(n,e,t)=>n>t.x0&&n<t.x1&&e>t.z0&&e<t.z1;function wg(n,e,t,i,s){let r=0,a=1;const o=t-n,c=i-e;for(const[l,u]of[[-o,n-s.x0],[o,s.x1-n],[-c,e-s.z0],[c,s.z1-e]]){if(Math.abs(l)<1e-12){if(u<0)return!1;continue}const h=u/l;if(l<0){if(h>a)return!1;h>r&&(r=h)}else{if(h<r)return!1;h<a&&(a=h)}}return r<a}function to(n,e,t,i,s,r,a,o=Xe.PH){if(o.legacyPush){for(const f of i)for(const m of f){if(!a(m))continue;const x=Math.max(m.x0,Math.min(n.x,m.x1)),g=Math.max(m.z0,Math.min(n.z,m.z1)),p=n.x-x,v=n.z-g,E=Math.hypot(p,v);if(E<r&&E>1e-6)n.x=x+p/E*r,n.z=g+v/E*r;else if(E<=1e-6){const S=[[m.x0-r-n.x,0],[m.x1+r-n.x,0],[0,m.z0-r-n.z],[0,m.z1+r-n.z]].sort((C,w)=>Math.abs(C[0]+C[1])-Math.abs(w[0]+w[1]))[0];n.x+=S[0],n.z+=S[1]}}return!1}const c=(f,m)=>{for(const x of i)for(const g of x)if(a(g)&&Eg(f,m,g))return g;return null},l=c(e,t);if(!l)for(const f of i)for(const m of f)a(m)&&wg(e,t,n.x,n.z,m)&&(n.x=e,n.z=t);for(let f=0;f<2;f++){for(const m of s){if(!a(m))continue;const x=n.x-m.x,g=n.z-m.z,p=Math.hypot(x,g),v=m.r+r;p<v&&p>1e-6&&(n.x=m.x+x/p*v,n.z=m.z+g/p*v)}for(const m of i)for(const x of m){if(!a(x))continue;const g=Math.max(x.x0,Math.min(n.x,x.x1)),p=Math.max(x.z0,Math.min(n.z,x.z1)),v=n.x-g,E=n.z-p,S=Math.hypot(v,E);S<r&&S>1e-6&&(n.x=g+v/S*r,n.z=p+E/S*r)}}const u=c(n.x,n.z);if(!u)return!1;if(!l)return n.x=e,n.z=t,!0;const h=.01,d=[[u.x0-r-h,n.z],[u.x1+r+h,n.z],[n.x,u.z0-r-h],[n.x,u.z1+r+h]].filter(f=>!c(f[0],f[1])&&(o.exitAnywhere||Xe.placeAt(f[0],f[1],.02,n.y||0))).sort((f,m)=>Math.hypot(f[0]-n.x,f[1]-n.z)-Math.hypot(m[0]-n.x,m[1]-n.z));return d.length?(n.x=d[0][0],n.z=d[0][1]):(n.x=e,n.z=t),!0}function Vl(n,e,t,i=.3,s=.6,r=n.x,a=n.z){return to(n,r,a,[e.boxes],e.circles,t,o=>o.y1>i&&o.y0<s)}const Wl=n=>({x0:n.x-n.hx,x1:n.x+n.hx,z0:n.z-n.hz,z1:n.z+n.hz,y0:n.y-n.hy,y1:n.y+n.hy,body:n});function ou(n,e,t,i,s=[],r=Xe.playerR*.75){let a=0;const o=c=>{c.y1>a&&c.y1<=t&&n>c.x0-r&&n<c.x1+r&&e>c.z0-r&&e<c.z1+r&&(a=c.y1)};for(const c of i.boxes)c.y1<50&&o(c);for(const c of s)o(c);return a}function js(n,e,t,i,s=[],r=Xe.playerR*.9){let a=99;const o=c=>{c.y0<a&&c.y0>=t&&n>c.x0-r&&n<c.x1+r&&e>c.z0-r&&e<c.z1+r&&(a=c.y0)};for(const c of i.boxes)c.y0>0&&o(c);for(const c of s)o(c);return a}function Tg(n=Xe.spawn.x,e=Xe.spawn.z){return{x:n,z:e,y:0,vy:0,ground:!0,crouch:!1,crawl:!1,h:Xe.PH.stand,eye:Xe.PH.eye,landed:0,yaw:Xe.spawn.yaw,pitch:Xe.spawn.pitch,input:{forward:0,strafe:0,jump:!1,crouch:!1},speed:Xe.speed}}function Xl(n,e,t,i=[],s=[]){const r=Math.max(-1,Math.min(1,n.input.forward)),a=Math.max(-1,Math.min(1,n.input.strafe)),o=Math.sin(n.yaw),c=Math.cos(n.yaw);n.crawl&&!n.input.crawl&&js(n.x,n.z,n.y+Xe.PH.crawl-.05,e,i,Xe.playerR+.06)>=n.y+Xe.PH.crouch&&(n.crawl=!1),n.input.crawl&&n.ground&&!n.noCrawl&&(n.crawl=!0),n.input.crouch||n.crawl?n.crouch=!0:n.crouch&&js(n.x,n.z,n.y+Xe.PH.crouch-.05,e,i)>=n.y+Xe.PH.stand&&(n.crouch=!1),n.h=n.crawl?Xe.PH.crawl:n.crouch?Xe.PH.crouch:Xe.PH.stand,n.eye+=((n.crawl?Xe.PH.eyeCrawl:n.crouch?Xe.PH.eyeCrouch:Xe.PH.eye)-n.eye)*Math.min(1,t*12);const l=n.crawl?Math.min(n.speed,Xe.PH.crawlSpeed):n.speed*(n.crouch?Xe.PH.crouchSpeed:1),u=n.ground||Xe.PH.legacyPush?Xe.PH.step:Xe.PH.ledge,h=n.y+u;let d=n.y+n.h;const f=C=>C.y1>h&&C.y0<d,m=Math.max(1,Math.ceil(l*t/.15)),x=n.y;for(let C=0;C<m;C++){const w=n.x,_=n.z;if(n.x+=(-o*r+c*a)*l*t/m,n.z+=(-c*r-o*a)*l*t/m,to(n,w,_,[e.boxes,i],e.circles,Xe.playerR,f),n.crouch&&!n.crawl&&n.ground&&!n.noCrawl&&(r||a)){const A=l*t/m;if(Math.hypot(n.x-w,n.z-_)<A*.6){const L=n.x,F=n.z;d=n.y+Xe.PH.crawl,n.x=w+(-o*r+c*a)*A,n.z=_+(-c*r-o*a)*A,to(n,w,_,[e.boxes,i],e.circles,Xe.playerR,f),Math.hypot(n.x-w,n.z-_)>A*.9?(n.crawl=!0,n.h=Xe.PH.crawl):(d=n.y+n.h,n.x=L,n.z=F)}}}{const C=Xe.boundsAt(n.x);n.x=Math.max(C.x0+Xe.playerR,Math.min(C.x1-Xe.playerR,n.x)),n.z=Math.max(C.z0+Xe.playerR,Math.min(C.z1-Xe.playerR,n.z))}const g=n.g||Xe.PH.g,p=n.jumpH||Xe.PH.jumpH;n.landed=0,n.input.jump&&n.ground&&js(n.x,n.z,n.y+n.h-.05,e,i)>n.y+n.h+.15&&(n.vy=Math.sqrt(2*g*p),n.ground=!1,n.jumped=!0),n.input.jump=!1,n.vy-=g*t;let v=n.y+n.vy*t;const E=ou(n.x,n.z,n.y+(Xe.PH.legacyPush&&!n.ground?.02:u),e,i.concat(s));v<=E?(!n.ground&&n.vy<-1.5&&(n.landed=Math.min(1,-n.vy/6)),v=E,n.vy=0,n.ground=!0):v>E+.02&&(n.ground=!1);const S=Math.min(js(n.x,n.z,n.y+n.h-.05,e,i),Xe.roomHeight(n.x,n.z,x));v+n.h>S&&(v=S-n.h,n.vy>0&&(n.vy=0)),n.y=Math.max(0,v)}function Ag(n,e,t,i=[]){n.vy-=Xe.PH.gBody*t;let s=0;const r=Math.max(n.hx,n.hz),a=n.x,o=n.z;n.x+=n.vx*t,n.z+=n.vz*t;const c={x:n.x,z:n.z,y:n.y};Vl(c,e,r,n.y-n.hy+.05,n.y+n.hy,a,o);let l=null,u=!1;for(const x of i){if(x.y1<=n.y-n.hy+.05||x.y0>=n.y+n.hy)continue;const g=Math.min(c.x+n.hx-x.x0,x.x1-(c.x-n.hx)),p=Math.min(c.z+n.hz-x.z0,x.z1-(c.z-n.hz));g>0&&p>0&&(l=x,u=g<p,g<p?c.x+=c.x<(x.x0+x.x1)/2?-g:g:c.z+=c.z<(x.z0+x.z1)/2?-p:p)}let h=0;if(l){const x=c.x,g=c.z;Vl(c,e,r,n.y-n.hy+.05,n.y+n.hy,a,o),Math.hypot(c.x-x,c.z-g)>.01&&(h=u?c.z<(l.z0+l.z1)/2?-1:1:c.x<(l.x0+l.x1)/2?-1:1)}Math.abs(c.x-n.x)>1e-5&&(s=Math.max(s,Math.min(1,Math.abs(n.vx)/8)),n.vx*=-.25),Math.abs(c.z-n.z)>1e-5&&(s=Math.max(s,Math.min(1,Math.abs(n.vz)/8)),n.vz*=-.25),h&&(s=0,u?n.vz=h*Xe.PH.squeeze:n.vx=h*Xe.PH.squeeze);{const x=Xe.boundsAt(c.x);n.x=Math.max(x.x0+r,Math.min(x.x1-r,c.x)),n.z=Math.max(x.z0+r,Math.min(x.z1-r,c.z))}const d=n.y-n.hy,f=n.y+n.vy*t,m=ou(n.x,n.z,d+.03,e,i,r*.7);if(f-n.hy<=m){n.vy<-1.2&&(s=Math.max(s,Math.min(1,-n.vy/7))),n.y=m+n.hy,n.vy=n.vy<-2.5?-n.vy*.2:0;const x=Math.pow(.004,t);n.vx*=x,n.vz*=x,Math.abs(n.vx)+Math.abs(n.vz)<.05&&n.vy===0&&(n.vx=n.vz=0,n.rest=!0)}else n.y=f;return s}const Rg=new qc(-1,1,1,-1,0,1);class Cg extends Xt{constructor(){super(),this.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new at([0,2,0,0,2,0],2))}}const Pg=new Cg;class Lg{constructor(e){this._mesh=new it(Pg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Rg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const Dg="varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",Ig=`
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
  }`,Ug=`
  uniform sampler2D tDiffuse; uniform vec2 uTexel; varying vec2 vUv;
  vec3 tap(vec2 o) { return min(max(texture2D(tDiffuse, vUv + o * uTexel).rgb, vec3(0.0)), vec3(48.0)); }
  void main() {
    vec3 c = (tap(vec2(-1.0, -1.0)) + tap(vec2(1.0, -1.0)) + tap(vec2(-1.0, 1.0)) + tap(vec2(1.0, 1.0))) * 0.25;
    float l = max(c.r, max(c.g, c.b));
    gl_FragColor = vec4(c * smoothstep(0.95, 1.7, l), 1.0);
  }`,Ng=`
  uniform sampler2D tDiffuse; uniform vec2 uDir; varying vec2 vUv;
  void main() {
    vec3 c = texture2D(tDiffuse, vUv).rgb * 0.2270270;
    c += (texture2D(tDiffuse, vUv + uDir * 1.3846154).rgb + texture2D(tDiffuse, vUv - uDir * 1.3846154).rgb) * 0.3162162;
    c += (texture2D(tDiffuse, vUv + uDir * 3.2307692).rgb + texture2D(tDiffuse, vUv - uDir * 3.2307692).rgb) * 0.0702703;
    gl_FragColor = vec4(c, 1.0);
  }`;function Fg(n,e,t,i){const s={tDiffuse:{value:null},tB0:{value:null},tB1:{value:null},tB2:{value:null},uBloom:{value:0},uExposure:{value:1},uTint:{value:new H(1,1,1)},uTime:{value:0},uGrain:{value:.03},uVig:{value:.42},uWake:{value:0},uHurt:{value:0},uFade:{value:1},uWarp:{value:0}},r=v=>new Lg(new Kn({...v,vertexShader:Dg,depthTest:!1,depthWrite:!1})),a=r({uniforms:s,fragmentShader:Ig}),o={tDiffuse:{value:null},uTexel:{value:new ke}},c={tDiffuse:{value:null},uDir:{value:new ke}},l=r({uniforms:o,fragmentShader:Ug}),u=r({uniforms:c,fragmentShader:Ng}),h=new ke;let d=null,f=null,m=[];const x=new Ve(0);function g(){d&&d.dispose();for(const S of m)S.a.dispose(),S.b.dispose();m=[],n.getDrawingBufferSize(h);const v=f.hdr&&!f.ldr?gn:Jt;d=new Qt(h.x,h.y,{type:v,samples:f.msaa});const E=f.bloomFrom||2;if(o.uTexel.value.set(E>1?1/h.x:0,E>1?1/h.y:0),f.bloom)for(let S=0;S<3;S++){const C=Math.max(8,h.x>>S+E),w=Math.max(8,h.y>>S+E),_={type:v,depthBuffer:!1};m.push({a:new Qt(C,w,_),b:new Qt(C,w,_),w:C,h:w})}}function p(v,E){c.tDiffuse.value=v.texture,c.uDir.value.set(1/E.w,0),n.setRenderTarget(E.b),u.render(n),c.tDiffuse.value=E.b.texture,c.uDir.value.set(0,1/E.h),n.setRenderTarget(E.a),u.render(n)}return{uniforms:s,configure(v){f={...v},g()},resize(){f&&g()},render(){n.setRenderTarget(d),n.setClearColor(x,1),n.clear(),f.prepass,n.render(e,t),s.tDiffuse.value=d.texture,m.length?(o.tDiffuse.value=d.texture,n.setRenderTarget(m[0].a),l.render(n),p(m[0].a,m[0]),p(m[0].a,m[1]),p(m[1].a,m[2]),s.tB0.value=m[0].a.texture,s.tB1.value=m[1].a.texture,s.tB2.value=m[2].a.texture,s.uBloom.value=.75):(s.tB0.value=s.tB1.value=s.tB2.value=d.texture,s.uBloom.value=0),n.setRenderTarget(null),a.render(n)}}}const zg={high:{msaa:2,bloom:!0,hdr:!0,spots:3,shadowSpots:3,shadowSize:1024,points:3,shadowsPerFrame:3,mirror:1,mirrorWorld:!0,prepass:!0,env:!0,uzor:2,sunSteps:24,particles:1,shafts:!0},medium:{msaa:0,bloom:!0,hdr:!0,spots:3,shadowSpots:2,shadowSize:512,points:3,shadowsPerFrame:1,mirror:.5,mirrorWorld:!0,prepass:!0,env:!0,uzor:1,sunSteps:12,particles:.5,shafts:!0},lite:{msaa:0,bloom:!1,hdr:!0,spots:3,shadowSpots:0,shadowSize:512,points:3,shadowsPerFrame:0,mirror:0,mirrorWorld:!0,prepass:!1,habMirror:.5,env:!0,uzor:0,sunSteps:0,particles:.25,shafts:!0}},Og={KeyE:"e",KeyF:"f",Space:"jump",KeyQ:"throw",KeyV:"kick"};function Bg(n){return{fwd:(n("KeyW")||n("ArrowUp")?1:0)-(n("KeyS")||n("ArrowDown")?1:0),strafe:(n("KeyD")?1:0)-(n("KeyA")?1:0),run:n("ShiftLeft")||n("ShiftRight"),wheel:(n("KeyD")?1:0)-(n("KeyA")?1:0),eHeld:n("KeyE"),crouch:n("KeyC")}}const kg={e:"interact",f:"mode",jump:"jump",throw:"throw",kick:"kick"},ql={interact:"e",mode:"f",jump:"jump",throw:"throw",kick:"kick"};function Gg({coarse:n=!1,mut:e=[]}={}){const t=new Set,i=new Set(e),s={x:0,y:0,sprint:!1,lookX:0,lookY:0,cutter:!1,crouch:!1,crawl:!1,interactHold:!1,throwHold:!1,tool:""},r=new Set;let a=n?"touch":"kbm";const o=[];return{keys:t,touch:s,get device(){return a},setDevice(l){if(!(l!=="touch"&&l!=="kbm")&&!(i.has("nodevswitch")&&a!==l&&o.length)&&l!==a){a=l;for(const u of o)try{u(l)}catch{}}},onDevice(l){o.push(l)},keyDown(l){t.add(l);const u=Og[l];u&&r.add(kg[u])},keyUp(l){t.delete(l)},press(l){r.add(l)},drop(){r.clear(),s.lookX=s.lookY=0},stick(l,u,h=!1){s.x=l,s.y=u,s.sprint=!!h},look(l,u){s.lookX+=l,s.lookY+=u},hold(l,u){l in s&&l!=="tool"&&(s[l]=!!u)},want(l){(l==="cut"||l==="grip")&&(s.tool=l)},reset(){i.has("noreset")||(t.clear(),r.clear(),s.x=s.y=0,s.sprint=!1,s.lookX=s.lookY=0,s.cutter=!1,s.interactHold=!1,s.throwHold=!1,s.tool="")},frame(l,u){const h=f=>t.has(f),d=Bg(h);l.fwd=d.fwd,l.strafe=d.strafe,l.run=d.run,l.wheel=d.wheel,l.eHeld=d.eHeld,l.crouch=d.crouch,l.tool="",l.crawl=!1,l.touch=a==="touch",(s.x||s.y)&&(l.fwd=s.y,l.strafe=s.x,l.run=s.sprint,l.wheel=Math.abs(s.x)>.3?Math.sign(s.x):0),(s.lookX||s.lookY)&&(u(s.lookX,s.lookY),s.lookX=s.lookY=0),s.crouch&&(l.crouch=!0),s.crawl&&(l.crawl=!0,l.crouch=!0),s.interactHold&&(l.eHeld=!0),l.throwHeld=h("KeyQ")||!!l.rmb||s.throwHold,s.tool&&(l.tool=s.tool,s.tool=""),s.cutter?(l.fire=!0,l.tool="cut",l.touchFire=!0):l.touchFire&&(l.fire=!1,l.touchFire=!1);for(const f of r)f==="grab"?(l.tool="grip",l.press.add("fire")):ql[f]&&l.press.add(ql[f]);return r.clear(),l}}}const Yl={dist:.9,drop:.26},si={tap:.15,full:.65,kMax:1.3,v0:11.5,vMass:5,up:1.6};function Hg(n){const e=Math.max(0,Math.min(1,(n-si.tap)/(si.full-si.tap)));return 1+(si.kMax-1)*e}const Vg=(n,e=1)=>(si.v0-si.vMass*n)*e;function Wg(n,e,t=1){const i=Vg(e,t);return[n[0]*i,n[1]*i+si.up,n[2]*i]}const oa={body:.42,eye:.3,speed:1.15},Es={hab_v1:{wallT:.4,floorT:.4,ceilT:.3,niche:{floor:.3,wall:.3,ceil:.22},stub:{depth:1.6,light:10467024},dado:.9,beam:2,mats:{wall:"wall",floor:"floor",ceil:"ceil",trim:"steelDark",dado:"wallDark"},sizes:{x:[3,16],y:[2.5,4],z:[3,16]}}},Xg=Object.keys(Es),So=["W","E","S","N"],Ti={W:"+x",E:"-x",S:"+z",N:"-z"},qg=n=>n==="W"||n==="E"?"z":"x",St=(n,e,t,i,s,r,a,o,c)=>({id:n,kind:e,x0:Math.min(t,i),x1:Math.max(t,i),y0:Math.min(s,r),y1:Math.max(s,r),z0:Math.min(a,o),z1:Math.max(a,o),...c});function Yg(n,e,t=[]){const i=Es[n],[s,r,a]=e,o=i.wallT,c=[St("floor","floor",-o,s+o,-i.floorT,0,-o,a+o),St("ceil","ceil",-o,s+o,r,r+i.ceilT,-o,a+o)];for(const l of So){const u=qg(l),h=u==="z"?a:s,d=t.filter(v=>v.side===l).sort((v,E)=>v.a0-E.a0),f=(v,E,S,C,w)=>{S-E<1e-4||w-C<1e-4||(l==="W"&&c.push(St(v,"wall",-o,0,C,w,E,S,{side:l})),l==="E"&&c.push(St(v,"wall",s,s+o,C,w,E,S,{side:l})),l==="S"&&c.push(St(v,"wall",E,S,C,w,-o,0,{side:l})),l==="N"&&c.push(St(v,"wall",E,S,C,w,a,a+o,{side:l})))},m=u==="x"?-o:0,x=u==="x"?h+o:h;let g=m,p=0;for(const v of d)f(`wall${l}${p++}`,g,v.a0,0,r),f(`wall${l}${p++}`,v.a0,v.a1,0,v.y0),f(`wall${l}${p++}`,v.a0,v.a1,v.y1,r),g=v.a1;f(`wall${l}${p++}`,g,x,0,r)}return c}function $g(n,e,t){const i=Es[n],[s,,r]=e,a=i.wallT,o=i.stub.depth,c=t.y1+.3,l=[],u=m=>`stub_${t.id}_${m}`,h=t.side==="W"||t.side==="S"?-a:t.side==="E"?s+a:r+a,d=t.side==="W"||t.side==="S"?-1:1,f=(m,x,g,p,v,E,S)=>{const[C,w]=[h+d*p,h+d*v];t.side==="W"||t.side==="E"?l.push(St(u(m),"stub",C,w,E,S,x,g)):l.push(St(u(m),"stub",x,g,E,S,C,w))};return f("floor",t.a0-.2,t.a1+.2,0,o+.2,-.2,0),f("ceil",t.a0-.2,t.a1+.2,0,o+.2,c,c+.2),f("l",t.a0-.2,t.a0,0,o,0,c),f("r",t.a1,t.a1+.2,0,o,0,c),f("end",t.a0-.2,t.a1+.2,o,o+.2,0,c),l}const la={cutRate:1,blastK:3.2},Vn=(n,e)=>({type:"integer",minimum:n,maximum:e}),Ai=(n,e)=>({type:"number",minimum:n,maximum:e}),$l={type:"string",pattern:"^[a-z][a-z0-9_.]{0,47}$"},Kg={type:"array",items:{type:"integer",minimum:0,maximum:64},minItems:2,maxItems:2},Ri=(n,e)=>e===90||e===270?[n[1],n[0]]:n;function es(n,e,t,i,s,r,a){const[o,,c]=n.size;return e==="W"?{x0:0,x1:a,z0:t,z1:i,y0:s,y1:r}:e==="E"?{x0:o-a,x1:o,z0:t,z1:i,y0:s,y1:r}:e==="S"?{x0:t,x1:i,z0:0,z1:a,y0:s,y1:r}:{x0:t,x1:i,z0:c-a,z1:c,y0:s,y1:r}}function ts(n,e,t,i){const[s,,r]=n.size;return e==="W"?[i,t]:e==="E"?[s-i,t]:e==="S"?[t,i]:[t,r-i]}const Lt=(n,e)=>(n+e)/2,bo={crate:{mount:"floor",cells:n=>n.size==="large"?[2,2]:[1,1],key:!1,params:{color:{type:"string",enum:["orange","teal","white"]},size:{type:"string",enum:["small","large"]}},compile(n,e){const t=n.size==="large",i=t?2:1,s=(n.at[0]+i/2)*e.G,r=(n.at[1]+i/2)*e.G,a=t?.42:.22;return{parts:[{id:n.id,prefab:n.id,kind:t?"crateL":"crate",shape:"box",h:[a,a,a],p:[s,a,r],yaw:0,mass:t?30:8,free:!0,mat:n.color||"orange"}]}}},shelf:{mount:"floor",cells:n=>Ri([n.width||3,1],n.rot||0),key:!1,params:{width:Vn(2,4),levels:Vn(2,4),load:Vn(0,6),color:{type:"string",enum:["steel","steelDark","orange"]}},compile(n,e){const[t,i]=Ri([n.width||3,1],n.rot||0),s=e.G,r=n.levels||3,a=.55,o=.12+r*a,c=n.at[0]*s+.03,l=(n.at[0]+t)*s-.03,u=n.at[1]*s+.03,h=(n.at[1]+i)*s-.03,d=.04,f=[],m=[];for(const[E,S]of[[c,u],[l-d,u],[c,h-d],[l-d,h-d]])f.push(St(`${n.id}.post${f.length}`,"shelf",E,E+d,0,o,S,S+d,{prefab:n.id,mat:n.color||"steel"}));const x=[];for(let E=0;E<r;E++){const S=.1+E*a;x.push(S+.03),f.push(St(`${n.id}.plank${E}`,"shelf",c,l,S,S+.03,u,h,{prefab:n.id,mat:"steelDark",plank:!0}))}const g=t>=i?"x":"z",p=Math.max(t,i),v=.16;for(let E=0;E<Math.min(n.load||0,p*r);E++){const S=Math.floor(E/p),C=E%p,w=(C+.5)*s+(g==="x"?n.at[0]*s:n.at[1]*s),_=g==="x"?(u+h)/2:(c+l)/2;m.push({id:`${n.id}.box${E}`,prefab:n.id,kind:"crate",shape:"box",h:[v,v,v],p:g==="x"?[w,x[S]+v,_]:[_,x[S]+v,w],yaw:0,mass:5,free:!0,mat:["orange","teal","white"][E%3]})}return{statics:f,parts:m}}},pallet:{mount:"floor",cells:()=>[2,2],key:!1,params:{load:Vn(0,4)},compile(n,e){const t=e.G,i=(n.at[0]+1)*t,s=(n.at[1]+1)*t,r=.07,a=[{id:n.id,prefab:n.id,kind:"pallet",shape:"box",h:[.47,r,.47],p:[i,r,s],yaw:0,mass:18,free:!0,mat:"wood"}];return[[-1,-1],[1,-1],[-1,1],[1,1]].slice(0,n.load||0).forEach(([o,c],l)=>a.push({id:`${n.id}.box${l}`,prefab:n.id,kind:"crate",shape:"box",h:[.2,.2,.2],p:[i+o*.23,2*r+.2,s+c*.23],yaw:0,mass:6,free:!0,mat:["teal","white","orange","teal"][l]})),{parts:a}}},pipe:{mount:"wall",cells:n=>[n.len||4,1],key:!1,params:{len:Vn(2,32),r:{type:"number",enum:[.04,.06,.1]},mat:{type:"string",enum:["steel","copper","steelDark"]}},compile(n,e){const t=e.G,i=n.r||.06,s=n.at[0]*t,r=(n.at[0]+(n.len||4))*t,a=(n.at[1]+.5)*t,o=i+.05,c=es(e,n.wall,s,r,a-i,a+i,o+i);return{statics:[St(n.id,"pipe",c.x0,c.x1,c.y0,c.y1,c.z0,c.z1,{prefab:n.id,r:i,off:o,mat:n.mat||"steel",side:n.wall,a0:s,a1:r,y:a})]}}},vent:{mount:"wall",cells:()=>[1,1],key:!0,params:{},compile(n,e){const t=e.G,i=(n.at[0]+.5)*t,s=(n.at[1]+.5)*t,[r,,a]=e.size,o=ts(e,n.wall,i,.8),c={W:[0,s,i],E:[r,s,i],S:[i,s,0],N:[i,s,a]}[n.wall];return{panels:[{id:n.id,room:"",face:Ti[n.wall],x:c[0],y:c[1],z:c[2],depth:e.kit.niche.wall,panel:"vent"}],keys:[{id:n.id,at:[o[0],s,o[1]],face:Ti[n.wall]}]}}},gas_tank:{mount:"floor",cells:()=>[1,1],key:!0,params:{content:{type:"string",enum:["O2","N2","H2"]},charge:Ai(.5,2),fuse:Ai(.5,3)},required:["content"],compile(n,e){const t=(n.at[0]+.5)*e.G,i=(n.at[1]+.5)*e.G;return{parts:[{id:n.id,prefab:n.id,kind:"tank",shape:"cyl",h:[.12,.32,.12],p:[t,.32,i],yaw:0,mass:12,free:!0,mat:n.content,tank:{charge:n.charge??1,fuse:n.fuse??1.2,radius:4.5}}],keys:[{id:n.id,at:[t,.5,i]}]}}},table_cuttable:{mount:"floor",cells:n=>n.size||[3,2],key:!0,params:{size:{type:"array",items:{type:"integer",minimum:2,maximum:4},minItems:2,maxItems:2},strength:Ai(.5,3),top:{type:"string",enum:["white","steel"]}},compile(n,e){const[t,i]=Ri(n.size||[3,2],n.rot||0),s=e.G,r=n.at[0]*s+.05,a=(n.at[0]+t)*s-.05,o=n.at[1]*s+.05,c=(n.at[1]+i)*s-.05,l=.76,u=.05,h=Lt(r,a),d=Lt(o,c),f=l-u,m=n.strength??1.2,x=[{id:n.id+".top",prefab:n.id,kind:"top",shape:"box",h:[(a-r)/2,u/2,(c-o)/2],p:[h,l-u/2,d],yaw:0,mass:14,free:!1,mat:n.top||"white"}],g=[];return[[r+.08,o+.08],[a-.08,o+.08],[r+.08,c-.08],[a-.08,c-.08]].forEach(([p,v],E)=>{const S=`${n.id}.leg${E}`;x.push({id:S,prefab:n.id,kind:"leg",shape:"box",h:[.03,f/2,.03],p:[p,f/2,v],yaw:0,mass:2,free:!1,mat:"steelDark"}),g.push({id:`${n.id}.cut${E}`,prefab:n.id,a:n.id+".top",b:S,at:[p,f,v],strength:m,kind:"weld"})}),{parts:x,joints:g,keys:[{id:n.id,at:[h,l,d]}]}}},cabinet:{mount:"floor",cells:()=>[2,1],key:!0,params:{color:{type:"string",enum:["white","teal","steel"]},strength:Ai(.5,3)},compile(n,e){const t=n.rot||0,[i,s]=Ri([2,1],t),r=e.G,a=1.9,o=n.strength??1.5,c=n.at[0]*r+.02,l=(n.at[0]+i)*r-.02,u=n.at[1]*r+.02,h=(n.at[1]+s)*r-.02,d={0:"+z",90:"+x",180:"-z",270:"-x"}[t],f=[St(n.id,"cabinet",c,l,0,a,u,h,{prefab:n.id})],m=d[1]==="z"?"x":"z",x=m==="x"?c:u,g=m==="x"?l:h,p=Lt(x,g),v=d==="+z"?h:d==="-z"?u:d==="+x"?l:c,E=d[0]==="+"?1:-1,S=.025,C=[],w=[];[[x,p,0],[p,g,1]].forEach(([A,I,L])=>{const F=(I-A)/2-.004,k=Lt(A,I),te=L===0?A:I,N=m==="x"?[k,a/2,v+E*S/2]:[v+E*S/2,a/2,k],J=m==="x"?[te,a/2,v+E*S/2]:[v+E*S/2,a/2,te],se=`${n.id}.leaf${L}`;C.push({id:se,prefab:n.id,kind:"leaf",shape:"box",h:m==="x"?[F,a/2-.03,S/2]:[S/2,a/2-.03,F],p:N,yaw:0,mass:3,free:!1,mat:n.color||"white",hinge:{at:J,side:L,along:m,sg:E}}),w.push({id:`${n.id}.hinge${L}`,prefab:n.id,a:se,b:"world",at:J,strength:o,kind:"hinge"})});const _=d[1]==="z"?[Lt(c,l),v+E*.8]:[v+E*.8,Lt(u,h)];return{statics:f,parts:C,joints:w,keys:[{id:n.id,at:[_[0],1,_[1]],face:d}],opens:[{id:n.id,leaves:C.map(A=>A.id),face:d}]}}},trap_hatch:{mount:"floor",cells:()=>[2,2],key:!0,params:{number:Vn(100,999)},required:["number"],compile(n,e){const t=e.G,i=n.at[0]*t,s=n.at[1]*t,r=i+2*t,a=s+2*t;return{hatches:[{id:n.id,number:n.number,x0:i+.05,x1:r-.05,z0:s+.05,z1:a-.05}],keys:[{id:n.id,at:[Lt(i,r),.05,Lt(s,a)]}]}}},breaker:{mount:"wall",cells:()=>[1,2],key:!0,net:"source",params:{on:{type:"boolean"}},compile(n,e){const t=e.G,i=n.at[0]*t+.05,s=(n.at[0]+1)*t-.05,r=n.at[1]*t,a=r+2*t-.1,o=es(e,n.wall,i,s,r,a,.14),c=ts(e,n.wall,Lt(i,s),.9);return{statics:[St(n.id,"breaker",o.x0,o.x1,o.y0,o.y1,o.z0,o.z1,{prefab:n.id})],nodes:{[n.id]:{kind:"breaker",on:n.on!==!1}},keys:[{id:n.id,at:[c[0],Lt(r,a),c[1]],face:Ti[n.wall]}]}}},screen:{mount:"wall",cells:n=>n.size||[2,1],key:!0,net:"consumer",text:["text"],params:{size:{type:"array",items:{type:"integer",minimum:1,maximum:4},minItems:2,maxItems:2},text:$l},required:["text"],compile(n,e){const[t,i]=n.size||[2,1],s=e.G,r=n.at[0]*s+.03,a=(n.at[0]+t)*s-.03,o=n.at[1]*s+.03,c=(n.at[1]+i)*s-.03,l=es(e,n.wall,r,a,o,c,.05),u=ts(e,n.wall,Lt(r,a),1.1);return{statics:[St(n.id,"screen",l.x0,l.x1,l.y0,l.y1,l.z0,l.z1,{prefab:n.id})],nodes:{[n.id]:{kind:"screen"}},texts:[{id:n.id,key:n.text,kind:"screen",w:a-r,h:c-o}],keys:[{id:n.id,at:[u[0],Lt(o,c),u[1]],face:Ti[n.wall]}]}}},note:{mount:"wall",cells:()=>[1,1],key:!0,text:["text"],params:{text:$l},required:["text"],compile(n,e){const t=e.G,i=(n.at[0]+.5)*t,s=(n.at[1]+.5)*t,r=es(e,n.wall,i-.105,i+.105,s-.15,s+.15,.01),a=ts(e,n.wall,i,.8);return{statics:[St(n.id,"note",r.x0,r.x1,r.y0,r.y1,r.z0,r.z1,{prefab:n.id,thin:!0})],texts:[{id:n.id,key:n.text,kind:"note"}],keys:[{id:n.id,at:[a[0],s,a[1]],face:Ti[n.wall]}]}}},window:{mount:"wall",cells:n=>n.size||[3,2],key:!0,hole:!0,params:{size:{type:"array",prefixItems:[Vn(2,6),Vn(2,4)],minItems:2,maxItems:2},strength:Ai(.5,4)},compile(n,e){const[t,i]=n.size||[3,2],s=e.G,r=n.at[0]*s,a=(n.at[0]+t)*s,o=n.at[1]*s,c=(n.at[1]+i)*s,l=e.kit.wallT,u=es(e,n.wall,r,a,o,c,0),h=ts(e,n.wall,Lt(r,a),1),d={W:[-l/2,null],E:[e.size[0]+l/2,null],S:[null,-l/2],N:[null,e.size[2]+l/2]}[n.wall],f=d[0]!==null?St(n.id,"glass",d[0]-.02,d[0]+.02,o,c,r,a,{prefab:n.id}):St(n.id,"glass",r,a,o,c,d[1]-.02,d[1]+.02,{prefab:n.id});return{holes:[{side:n.wall,a0:r,a1:a,y0:o,y1:c,id:n.id}],statics:[f],windows:[{id:n.id,side:n.wall,a0:r,a1:a,y0:o,y1:c,strength:n.strength??2,at:[Lt(u.x0,u.x1),Lt(o,c),Lt(u.z0,u.z1)]}],keys:[{id:n.id,at:[h[0],Lt(o,c),h[1]],face:Ti[n.wall]}]}}},lamp:{mount:"ceil",cells:n=>Ri([1,2],n.rot||0),net:"consumer",params:{color:{type:"string",enum:["cool","warm"]},power:Ai(.5,3)},compile(n,e){const[t,i]=Ri([1,2],n.rot||0),s=e.G,r=(n.at[0]+t/2)*s,a=(n.at[1]+i/2)*s,o=e.size[1];return{nodes:{[n.id]:{kind:"lamp"}},lights:[{id:n.id,kind:"spot",pos:[r,o-.12,a],to:[r,0,a],color:n.color==="warm"?16765600:14083839,power:14*(n.power??1.2),dist:9,angle:1.05,penumbra:.7}],fixtures:[{id:n.id,x:r,z:a,w:t*s-.16,l:i*s-.16,y:o}]}}},cable:{mount:"path",key:!1,net:"conductor",params:{path:{type:"array",items:Kg,minItems:2,maxItems:32},under:{type:"string",enum:["floor"]}},required:["path"],compile(n,e){const t=e.G,i=n.path.map(([s,r])=>[(s+.5)*t,-.16,(r+.5)*t]);return{nodes:{[n.id]:{kind:"cable"}},cables:[{id:n.id,pts:i}]}}}},Jg=Object.keys(bo),Zg={floor_plate:["+y"],wall_plate:["+x","-x","+z","-z"],ceil_plate:["-y"]},Qg=["slide","none","sealed"],xt={w:.5,niche:.4,bolt:.035,boltCut:1,weld:2,seat:.25,seatOut:.7},jg=[{id:"pn_airlock_1",room:"airlock",face:"+y",x:-.05,y:0,z:3.35,depth:.35},{id:"pn_airlock_2",room:"airlock",face:"+y",x:-1.05,y:0,z:1.1,depth:.35},{id:"pn_airlock_3",room:"airlock",face:"+y",x:-1.05,y:0,z:5.6,depth:.35},{id:"pn_airlock_4",room:"airlock",face:"-y",x:.95,y:2.5,z:1.35,depth:.35},{id:"pn_airlock_5",room:"airlock",face:"-y",x:.95,y:2.5,z:5.35,depth:.35},{id:"pn_airlock_6",room:"airlock",face:"-y",x:-1.05,y:2.5,z:2.35,depth:.35},{id:"pn_corridor_1",room:"corridor",face:"+y",x:-.05,y:0,z:-20.05,depth:.35},{id:"pn_corridor_2",room:"corridor",face:"+y",x:-1.55,y:0,z:-.55,depth:.35},{id:"pn_corridor_3",room:"corridor",face:"+y",x:-1.55,y:0,z:-39.55,depth:.35},{id:"pn_corridor_4",room:"corridor",face:"-x",x:2,y:1.55,z:-10.05,depth:.32},{id:"pn_corridor_5",room:"corridor",face:"+x",x:-2,y:1.55,z:-29.8,depth:.32},{id:"pn_corridor_6",room:"corridor",face:"-x",x:2,y:1.55,z:-34.55,depth:.32},{id:"pn_corridor_7",room:"corridor",face:"+x",x:-2,y:1.55,z:-6.05,depth:.32},{id:"pn_corridor_8",room:"corridor",face:"-y",x:-1.55,y:3,z:-14.55,depth:.35},{id:"pn_hab_1",room:"hab",face:"+y",x:6.85,y:0,z:-10.4,depth:.35},{id:"pn_hab_2",room:"hab",face:"+y",x:3.1,y:0,z:-5.15,depth:.35},{id:"pn_hab_3",room:"hab",face:"+y",x:10.85,y:0,z:-5.65,depth:.35},{id:"pn_hab_4",room:"hab",face:"-x",x:11.4,y:1.55,z:-15.15,depth:.32},{id:"pn_hab_5",room:"hab",face:"+z",x:3.1,y:1.55,z:-15.6,depth:.32},{id:"pn_hab_6",room:"hab",face:"-x",x:11.4,y:1.55,z:-10.4,depth:.32},{id:"pn_hab_7",room:"hab",face:"+z",x:7.1,y:1.55,z:-15.6,depth:.32},{id:"pn_hab_8",room:"hab",face:"-y",x:2.85,y:2.8,z:-9.4,depth:.35},{id:"pn_comm_1",room:"comm",face:"+y",x:14,y:0,z:-8.15,depth:.35},{id:"pn_comm_2",room:"comm",face:"+y",x:15.75,y:0,z:-10.15,depth:.35},{id:"pn_comm_3",room:"comm",face:"+y",x:12.75,y:0,z:-6.15,depth:.35},{id:"pn_comm_4",room:"comm",face:"-x",x:16.4,y:1.55,z:-6.15,depth:.32},{id:"pn_comm_5",room:"comm",face:"+x",x:11.8,y:1.55,z:-10.15,depth:.32},{id:"pn_comm_6",room:"comm",face:"+x",x:11.8,y:1.55,z:-6.65,depth:.32},{id:"pn_comm_7",room:"comm",face:"-y",x:14,y:2.8,z:-10.15,depth:.35},{id:"pn_bay_1",room:"bay",face:"+y",x:7.85,y:0,z:-24.3,depth:.35},{id:"pn_bay_2",room:"bay",face:"+y",x:15.85,y:0,z:-17.55,depth:.35},{id:"pn_bay_3",room:"bay",face:"+y",x:15.85,y:0,z:-30.55,depth:.35},{id:"pn_bay_4",room:"bay",face:"-z",x:2.85,y:1.55,z:-17,depth:.32},{id:"pn_bay_5",room:"bay",face:"+z",x:2.85,y:1.55,z:-31,depth:.32},{id:"pn_bay_6",room:"bay",face:"+z",x:9.35,y:1.55,z:-31,depth:.32},{id:"pn_bay_7",room:"bay",face:"-z",x:9.35,y:1.55,z:-17,depth:.32},{id:"pn_store_1",room:"store",face:"+y",x:22.75,y:0,z:-24.05,depth:.35},{id:"pn_store_2",room:"store",face:"+y",x:28.25,y:0,z:-29.55,depth:.35},{id:"pn_store_3",room:"store",face:"+y",x:27.25,y:0,z:-18.55,depth:.35},{id:"pn_store_4",room:"store",face:"-x",x:28.8,y:1.55,z:-21.8,depth:.32},{id:"pn_store_5",room:"store",face:"-x",x:28.8,y:1.55,z:-26.55,depth:.32},{id:"pn_store_6",room:"store",face:"-x",x:28.8,y:1.55,z:-19.55,depth:.32},{id:"pn_store_7",room:"store",face:"-x",x:28.8,y:1.55,z:-17.55,depth:.32},{id:"pn_mind_1",room:"mind",face:"+y",x:23.15,y:0,z:-13.65,depth:.35},{id:"pn_mind_2",room:"mind",face:"+y",x:20.65,y:0,z:-15.65,depth:.35},{id:"pn_mind_3",room:"mind",face:"+y",x:25.15,y:0,z:-11.15,depth:.35},{id:"pn_mind_4",room:"mind",face:"-x",x:26.2,y:1.55,z:-16.15,depth:.32},{id:"pn_mind_5",room:"mind",face:"+x",x:20.2,y:1.55,z:-12.15,depth:.32},{id:"pn_mind_6",room:"mind",face:"-x",x:26.2,y:1.55,z:-12.65,depth:.32},{id:"pn_mind_7",room:"mind",face:"+x",x:20.2,y:1.55,z:-13.9,depth:.32},{id:"pn_mind_8",room:"mind",face:"-y",x:22.9,y:3.2,z:-11.4,depth:.35},{id:"pn_gallery_1",room:"gallery",face:"+y",x:31.9,y:0,z:-23.9,depth:.35},{id:"pn_gallery_2",room:"gallery",face:"+y",x:29.65,y:0,z:-27.15,depth:.35},{id:"pn_gallery_3",room:"gallery",face:"+y",x:34.15,y:0,z:-27.15,depth:.35},{id:"pn_gallery_4",room:"gallery",face:"-z",x:29.65,y:1.55,z:-20.4,depth:.32},{id:"pn_gallery_5",room:"gallery",face:"-z",x:34.15,y:1.55,z:-20.4,depth:.32},{id:"pn_gallery_6",room:"gallery",face:"+z",x:31.9,y:1.55,z:-27.6,depth:.32},{id:"pn_gallery_7",room:"gallery",face:"+x",x:29.2,y:1.55,z:-21.9,depth:.32},{id:"pn_gallery_8",room:"gallery",face:"-y",x:34.15,y:3.4,z:-24.65,depth:.35}],Eo={"+x":[1,0,0],"-x":[-1,0,0],"+z":[0,0,1],"-z":[0,0,-1],"+y":[0,1,0],"-y":[0,-1,0]};function lu(n,e,t,i){const s=Eo[n.face],r=[n.x,n.y,n.z],a={};return["x","y","z"].forEach((o,c)=>{if(s[c]){const l=r[c]+s[c]*e,u=r[c]+s[c]*t;a[o+"0"]=Math.min(l,u),a[o+"1"]=Math.max(l,u)}else a[o+"0"]=r[c]-i,a[o+"1"]=r[c]+i}),a}const ys=n=>lu(n,-n.depth,0,xt.niche/2),Kl=n=>lu(n,0,.022,xt.w/2);function cu(n,e){const t=Eo[n.face],i=xt.w/2-.05,s=[[-1,-1],[1,-1],[1,1],[-1,1]][e],r=t[0]?[0,0,1]:t[2]?[1,0,0]:[1,0,0],a=t[1]?[0,0,1]:[0,1,0];return[n.x+r[0]*s[0]*i+a[0]*s[1]*i+t[0]*.02,n.y+r[1]*s[0]*i+a[1]*s[1]*i+t[1]*.02,n.z+r[2]*s[0]*i+a[2]*s[1]*i+t[2]*.02]}const wo={r:.3,eye:1.2};function ex(n,e){const t=n.grid,[i,s,r]=n.shell.size,[a,o,c]=e.cell,l=u=>(u+.5)*t;switch(e.face){case"+y":return[l(a),0,l(c)];case"-y":return[l(a),s,l(c)];case"+x":return[0,l(o),l(c)];case"-x":return[i,l(o),l(c)];case"+z":return[l(a),l(o),0];default:return[l(a),l(o),r]}}function tx(n){const e=n.grid,t=n.shell.size,i=n.shell.kit,s=Es[i],[r,a,o]=t,c={G:e,size:t,kit:s},l={id:n.id,G:e,size:t,kit:i,statics:[],parts:[],joints:[],panels:[],portals:[],nodes:{},edges:[],lights:[],fixtures:[],windows:[],hatches:[],cables:[],texts:[],keys:[],opens:[],views:[],holes:[],doors:[],prefabOf:{}};for(const f of n.portals||[]){const m=f.at*e,x=(f.at+f.w)*e,g=f.h*e,p=f.wall==="W"||f.wall==="E"?"z":"x",v=(m+x)/2,E={W:[.7,v],E:[r-.7,v],S:[v,.7],N:[v,o-.7]}[f.wall],S={W:-Math.PI/2,E:Math.PI/2,S:Math.PI,N:0}[f.wall],C={id:f.id,side:f.wall,a0:m,a1:x,y0:0,y1:g,to:f.to,door:f.door,inside:E,yaw:S,along:p};if(l.portals.push(C),l.holes.push({side:f.wall,a0:m,a1:x,y0:0,y1:g,id:f.id}),l.statics.push(...$g(i,t,C)),f.door!=="none"){const w=s.wallT,_={W:-w/2,E:r+w/2,S:-w/2,N:o+w/2}[f.wall],A=p==="z"?St(f.id+".door","door",_-.04,_+.04,0,g,m,x,{prefab:f.id,door:f.id}):St(f.id+".door","door",m,x,0,g,_-.04,_+.04,{prefab:f.id,door:f.id});l.statics.push(A),l.doors.push({id:f.id,kind:f.door,box:A,along:p}),l.nodes[f.id]={kind:"door"}}l.keys.push({id:f.id,at:[E[0],1,E[1]],portal:!0}),l.prefabOf[f.id]={id:f.id,type:"portal"}}for(const f of n.prefabs||[]){const m=bo[f.type];if(!m)continue;l.prefabOf[f.id]=f;const x=m.compile(f,c)||{};for(const g of["statics","parts","joints","lights","fixtures","windows","hatches","cables","texts","keys","opens","holes"])x[g]&&l[g].push(...x[g]);if(x.panels)for(const g of x.panels)l.panels.push({...g,room:n.id});x.nodes&&Object.assign(l.nodes,x.nodes)}l.statics.unshift(...Yg(i,t,l.holes));for(const f of n.slots||[]){const[m,x,g]=ex(n,f),p=f.face==="+y"?s.niche.floor:f.face==="-y"?s.niche.ceil:s.niche.wall;l.panels.push({id:f.id,room:n.id,face:f.face,x:m,y:x,z:g,depth:p,panel:f.panel})}for(const[f,m]of n.net&&n.net.power||[])l.edges.push([f,m]);const u=r/2,h=o/2;for(const f of l.portals)l.views.push({id:"portal_"+f.id,eye:[f.inside[0],wo.eye,f.inside[1]],look:[u,.9,h]});l.views.push({id:"corner_sw",eye:[.6,1.6,.6],look:[r-.6,.6,o-.6]}),l.views.push({id:"corner_ne",eye:[r-.6,1.6,o-.6],look:[.6,.6,.6]}),l.views.push({id:"corner_nw",eye:[.6,1.6,o-.6],look:[r-.6,.6,.6]}),l.views.push({id:"corner_se",eye:[r-.6,1.6,.6],look:[.6,.6,o-.6]}),l.views=l.views.slice(0,6);const d=l.portals[0];return l.spawn=d?{x:d.inside[0],z:d.inside[1],yaw:d.yaw}:{x:u,z:h,yaw:0},l.niches=l.panels.map(f=>({...ys(f),id:f.id})),l}const nx=n=>{if(n<2)return!1;for(let e=2;e*e<=n;e++)if(n%e===0)return!1;return!0};function er(n){for(let e=2;e<=n;e++){if(!nx(e)||n%e)continue;let t=n,i=0;for(;t%e===0;)t/=e,i++;return t===1?{p:e,k:i}:null}return null}const Jl=n=>String(n).split("").reduce((e,t)=>e+ +t,0),Sr={prime_power:{params:{minExp:{type:"integer",minimum:1,maximum:5}},test:(n,e={})=>{const t=er(n);return!!t&&t.k>=(e.minExp??2)},why:(n,e={})=>{const t=er(n);return t&&t.k>=(e.minExp??2)?`${n} = ${t.p}^${t.k}`:`${n}: не степень простого`},hint:{ru:[["степен"],["прост"]],en:[["power"],["prime"]]}},prime_or_power:{off:!0,params:{},test:n=>!!er(n),why:n=>{const e=er(n);return e?e.k===1?`${n}: простое`:`${n} = ${e.p}^${e.k}`:`${n}: не простое и не степень простого`},hint:{ru:[["прост"]],en:[["prime"]]}},digit_sum:{params:{sum:{type:"integer",minimum:1,maximum:27}},test:(n,e={})=>Jl(n)===(e.sum??10),why:(n,e={})=>`${n}: сумма цифр ${Jl(n)}, нужна ${e.sum??10}`,hint:{ru:[["сумм"],["цифр"]],en:[["sum"],["digit"]]}}},Zl=Object.keys(Sr).filter(n=>!Sr[n].off);function ix(n,e){const t=Sr[n.rule];if(!t)return null;const i=[],s={};for(const r of e)s[r.id]=t.why(r.number,n.param||{}),t.test(r.number,n.param||{})&&i.push(r.id);return{danger:i,why:s}}const Ql="drift.room/0",ls={type:"string",pattern:"^[a-z][a-z0-9_]{0,31}$"},jl={type:"string",pattern:"^[a-z][a-z0-9_]*(\\.[a-z][a-z0-9_]*){0,3}$",maxLength:64},ca={type:"string",pattern:"^[a-z][a-z0-9_.]{0,47}$"},ur=n=>({type:"array",items:{type:"integer",minimum:0,maximum:64},minItems:n,maxItems:n}),sx={floor:{at:ur(2),rot:{type:"integer",enum:[0,90,180,270]}},wall:{wall:{type:"string",enum:So},at:ur(2)},ceil:{at:ur(2),rot:{type:"integer",enum:[0,90,180,270]}},path:{}},rx={floor:["at"],wall:["wall","at"],ceil:["at"],path:[]};function ax(n){const e=bo[n];return{type:"object",additionalProperties:!1,properties:{type:{const:n},id:ls,...sx[e.mount],...e.params,note:{type:"string",maxLength:200}},required:["type","id",...rx[e.mount],...e.required||[]]}}const ec={oneOf:[{type:"string",minLength:1,maxLength:600},{type:"object",additionalProperties:!1,properties:{title:{type:"string",minLength:1,maxLength:40},rows:{type:"array",items:{type:"string",maxLength:48},maxItems:8}},required:["title","rows"]}]};function ox(){return{$schema:"https://json-schema.org/draft/2020-12/schema",$id:Ql,title:"ДРЕЙФ: файл комнаты",type:"object",additionalProperties:!1,required:["schema","id","grid","shell","portals","prefabs","texts","budget"],properties:{schema:{const:Ql},id:jl,grid:{type:"number",enum:[.5]},shell:{type:"object",additionalProperties:!1,required:["size","kit"],properties:{size:{type:"array",prefixItems:[{type:"number",minimum:3,maximum:16},{type:"number",minimum:2.5,maximum:4},{type:"number",minimum:3,maximum:16}],minItems:3,maxItems:3},kit:{type:"string",enum:Xg}}},portals:{type:"array",minItems:1,maxItems:4,items:{type:"object",additionalProperties:!1,required:["id","wall","at","w","h","to","door"],properties:{id:ls,wall:{type:"string",enum:So},at:{type:"integer",minimum:0,maximum:64},w:{type:"integer",minimum:2,maximum:4},h:{type:"integer",minimum:4,maximum:5},to:jl,door:{type:"string",enum:Qg}}}},slots:{type:"array",maxItems:16,items:{type:"object",additionalProperties:!1,required:["id","cell","face","panel","screws"],properties:{id:ls,cell:ur(3),face:{type:"string",enum:["+y","-y","+x","-x","+z","-z"]},panel:{type:"string",enum:Object.keys(Zg)},screws:{type:"integer",enum:[4]}}}},prefabs:{type:"array",maxItems:48,items:{oneOf:Jg.map(ax)}},net:{type:"object",additionalProperties:!1,properties:{power:{type:"array",maxItems:32,items:{type:"array",items:ls,minItems:2,maxItems:2}}}},trap:{type:"object",additionalProperties:!1,required:["rule","hatches","hints"],properties:{rule:{type:"string",enum:Zl},param:{type:"object",additionalProperties:!1,properties:Object.assign({},...Zl.map(n=>Sr[n].params))},hatches:{type:"array",items:ls,minItems:2,maxItems:4},hints:{type:"array",items:ca,minItems:1,maxItems:4}}},texts:{type:"object",additionalProperties:!1,required:["ru","en"],properties:{ru:{type:"object",propertyNames:ca,additionalProperties:ec},en:{type:"object",propertyNames:ca,additionalProperties:ec}}},budget:{type:"object",additionalProperties:!1,required:["drawCalls","dynamicBodies","tris"],properties:{drawCalls:{type:"integer",minimum:10,maximum:200},dynamicBodies:{type:"integer",minimum:1,maximum:200},tris:{type:"integer",minimum:1e3,maximum:3e5}}},note:{type:"string",maxLength:400}}}}const lx=n=>n===null?"null":Array.isArray(n)?"array":Number.isInteger(n)?"integer":typeof n;function tc(n,e){return n==="integer"?Number.isInteger(e):n==="number"?typeof e=="number"&&Number.isFinite(e):n==="array"?Array.isArray(e):n==="object"?e!==null&&typeof e=="object"&&!Array.isArray(e):typeof e===n}function ii(n,e,t="$",i=[]){if(n===!0||n===void 0)return i;if(n===!1)return i.push({path:t,msg:"лишний элемент"}),i;if(n.oneOf){if(n.oneOf.every(a=>a.properties&&a.properties.type&&"const"in a.properties.type)&&e&&typeof e=="object"){const a=n.oneOf.find(o=>o.properties.type.const===e.type);return a?ii(a,e,t,i):(i.push({path:t+".type",msg:`неизвестный тип ${JSON.stringify(e.type)}; есть: ${n.oneOf.map(o=>o.properties.type.const).join(", ")}`}),i)}const r=n.oneOf.map(a=>ii(a,e,t,[]));return r.some(a=>!a.length)||i.push(...r.reduce((a,o)=>o.length<a.length?o:a)),i}if("const"in n&&e!==n.const)return i.push({path:t,msg:`нужно ${JSON.stringify(n.const)}, стоит ${JSON.stringify(e)}`}),i;if(n.type&&!tc(n.type,e))return i.push({path:t,msg:`тип ${lx(e)}, нужен ${n.type}`}),i;if(n.enum&&!n.enum.includes(e)&&i.push({path:t,msg:`${JSON.stringify(e)} не из списка ${JSON.stringify(n.enum)}`}),typeof e=="number"&&(n.minimum!==void 0&&e<n.minimum&&i.push({path:t,msg:`${e} меньше ${n.minimum}`}),n.maximum!==void 0&&e>n.maximum&&i.push({path:t,msg:`${e} больше ${n.maximum}`})),typeof e=="string"&&(n.minLength!==void 0&&e.length<n.minLength&&i.push({path:t,msg:`строка короче ${n.minLength}`}),n.maxLength!==void 0&&e.length>n.maxLength&&i.push({path:t,msg:`строка длиннее ${n.maxLength} (${e.length})`}),n.pattern&&!new RegExp(n.pattern).test(e)&&i.push({path:t,msg:`${JSON.stringify(e)} не по образцу ${n.pattern}`})),Array.isArray(e)&&(n.minItems!==void 0&&e.length<n.minItems&&i.push({path:t,msg:`элементов ${e.length}, нужно не меньше ${n.minItems}`}),n.maxItems!==void 0&&e.length>n.maxItems&&i.push({path:t,msg:`элементов ${e.length}, можно не больше ${n.maxItems}`}),e.forEach((s,r)=>ii(n.prefixItems&&r<n.prefixItems.length?n.prefixItems[r]:n.items,s,`${t}[${r}]`,i))),tc("object",e)&&(n.properties||n.required||n.additionalProperties!==void 0||n.propertyNames)){for(const s of n.required||[])s in e||i.push({path:t,msg:`нет поля ${s}`});for(const[s,r]of Object.entries(e))n.propertyNames&&ii(n.propertyNames,s,`${t}{${s}}`,i),n.properties&&s in n.properties?ii(n.properties[s],r,`${t}.${s}`,i):n.additionalProperties===!1?i.push({path:`${t}.${s}`,msg:"поля нет в схеме"}):n.additionalProperties&&typeof n.additionalProperties=="object"&&ii(n.additionalProperties,r,`${t}.${s}`,i)}return i}const cx=n=>ii(ox(),n),ux=(n,e)=>[n[3]*e[0]+n[0]*e[3]+n[1]*e[2]-n[2]*e[1],n[3]*e[1]-n[0]*e[2]+n[1]*e[3]+n[2]*e[0],n[3]*e[2]+n[0]*e[1]-n[1]*e[0]+n[2]*e[3],n[3]*e[3]-n[0]*e[0]-n[1]*e[1]-n[2]*e[2]];function Yn(n,e){const[t,i,s,r]=n,a=2*(i*e[2]-s*e[1]),o=2*(s*e[0]-t*e[2]),c=2*(t*e[1]-i*e[0]);return[e[0]+r*a+(i*c-s*o),e[1]+r*o+(s*a-t*c),e[2]+r*c+(t*o-i*a)]}function fx(n,e,t){const i=Yn(e,[1,0,0]),s=Yn(e,[0,1,0]),r=Yn(e,[0,0,1]),a=o=>Math.abs(i[o])*t[0]+Math.abs(s[o])*t[1]+Math.abs(r[o])*t[2];return{x0:n[0]-a(0),x1:n[0]+a(0),y0:n[1]-a(1),y1:n[1]+a(1),z0:n[2]-a(2),z1:n[2]+a(2)}}async function dx({gravity:n=9.8}={}){const e=await ha(()=>import("./rapier-Dr7-2af2.js"),[],import.meta.url),t=e.default||e;await t.init();const i=new t.World({x:0,y:-n,z:0});i.integrationParameters.numSolverIterations=6;const s=new Map,r=new Map,a=new Map,o=new t.EventQueue(!0);let c=0;{const u=performance.now();i.step(),c=performance.now()-u}const l={kind:"rapier",warmMs:c,addStatic(u){const h=i.createCollider(t.ColliderDesc.cuboid((u.x1-u.x0)/2,(u.y1-u.y0)/2,(u.z1-u.z0)/2).setTranslation((u.x0+u.x1)/2,(u.y0+u.y1)/2,(u.z0+u.z1)/2).setFriction(.8));s.set(u.id,h)},setStatic(u,h){const d=s.get(u);d&&d.setEnabled(!!h)},addPart(u,{fixed:h=!1,kinematic:d=!1}={}){const f=(d?t.RigidBodyDesc.kinematicPositionBased():t.RigidBodyDesc.dynamic()).setTranslation(...u.p).setCanSleep(!0).setCcdEnabled(u.mass<4);u.q&&f.setRotation({x:u.q[0],y:u.q[1],z:u.q[2],w:u.q[3]}),f.setLinearDamping(.05).setAngularDamping(.25);const m=i.createRigidBody(f),x=8*u.h[0]*u.h[1]*u.h[2],g=u.shape==="cyl"?t.ColliderDesc.cylinder(u.h[1],u.h[0]):t.ColliderDesc.cuboid(...u.h);g.setDensity(u.mass/x).setFriction(.7).setRestitution(.1);const p=i.createCollider(g,m);return d||m.sleep(),r.set(u.id,{body:m,col:p,h:u.h,mass:u.mass,fixed:h,held:!1}),u.id},joint(u,h,d,f){const m=r.get(h),x=d==="world"?null:r.get(d);if(!m)return;if(!x){a.set(u,{world:!0,a:h}),m.body.setBodyType(t.RigidBodyType.KinematicPositionBased,!0);return}const g=m.body.translation(),p=x.body.translation(),v=m.body.rotation(),E=x.body.rotation(),S=Yn([-v.x,-v.y,-v.z,v.w],[f[0]-g.x,f[1]-g.y,f[2]-g.z]),C=Yn([-E.x,-E.y,-E.z,E.w],[f[0]-p.x,f[1]-p.y,f[2]-p.z]),w=ux([-E.x,-E.y,-E.z,E.w],[v.x,v.y,v.z,v.w]),_=t.JointData.fixed({x:S[0],y:S[1],z:S[2]},{x:0,y:0,z:0,w:1},{x:C[0],y:C[1],z:C[2]},{x:w[0],y:w[1],z:w[2],w:w[3]});a.set(u,{j:i.createImpulseJoint(_,m.body,x.body,!0),a:h,b:d})},unjoint(u){const h=a.get(u);if(h){if(a.delete(u),h.world){const d=r.get(h.a);d&&![...a.values()].some(f=>f.world&&f.a===h.a)&&(d.body.setBodyType(t.RigidBodyType.Dynamic,!0),d.body.wakeUp());return}i.removeImpulseJoint(h.j,!0);for(const d of[h.a,h.b]){const f=r.get(d);f&&f.body.wakeUp()}}},release(u){const h=r.get(u);h&&(h.fixed=!1,h.body.bodyType()!==t.RigidBodyType.Dynamic&&!h.held&&h.body.setBodyType(t.RigidBodyType.Dynamic,!0),h.body.wakeUp())},setKinematic(u,h){const d=r.get(u);d&&(d.held=!!h,d.body.setBodyType(h?t.RigidBodyType.KinematicPositionBased:t.RigidBodyType.Dynamic,!0),d.col.setSensor(!1),h||d.body.wakeUp())},moveKinematic(u,h,d){const f=r.get(u);f&&(f.body.setNextKinematicTranslation({x:h[0],y:h[1],z:h[2]}),d&&f.body.setNextKinematicRotation({x:d[0],y:d[1],z:d[2],w:d[3]}))},setPose(u,h,d,f=!0){const m=r.get(u);m&&(m.body.setTranslation({x:h[0],y:h[1],z:h[2]},!1),d&&m.body.setRotation({x:d[0],y:d[1],z:d[2],w:d[3]},!1),m.body.setLinvel({x:0,y:0,z:0},!1),m.body.setAngvel({x:0,y:0,z:0},!1),f&&m.body.bodyType()===t.RigidBodyType.Dynamic&&m.body.sleep())},impulse(u,h){const d=r.get(u);!d||d.body.bodyType()!==t.RigidBodyType.Dynamic||d.body.applyImpulse({x:h[0],y:h[1],z:h[2]},!0)},impulseAt(u,h,d){const f=r.get(u);!f||f.body.bodyType()!==t.RigidBodyType.Dynamic||f.body.applyImpulseAtPoint({x:h[0],y:h[1],z:h[2]},{x:d[0],y:d[1],z:d[2]},!0)},velocity(u,h){const d=r.get(u);d&&(d.body.setLinvel({x:h[0],y:h[1],z:h[2]},!0),d.body.wakeUp())},remove(u){const h=r.get(u);if(h){for(const[d,f]of a)(f.a===u||f.b===u)&&l.unjoint(d);i.removeRigidBody(h.body),r.delete(u)}},has:u=>r.has(u),wakeAll(){for(const u of r.values())u.body.bodyType()===t.RigidBodyType.Dynamic&&u.body.wakeUp()},step(u){i.timestep=Math.min(1/30,u);const h=performance.now();return i.step(o),c=performance.now()-h,c},pose(u){const h=r.get(u);if(!h)return null;const d=h.body.translation(),f=h.body.rotation();return{p:[d.x,d.y,d.z],q:[f.x,f.y,f.z,f.w],sleep:h.body.isSleeping(),v:(()=>{const m=h.body.linvel();return[m.x,m.y,m.z]})()}},aabb(u){const h=r.get(u),d=h&&l.pose(u);return d?fx(d.p,d.q,h.h):null},half:u=>(r.get(u)||{}).h,mass:u=>(r.get(u)||{}).mass,bodies:()=>[...r.keys()],stats(){let u=0,h=0,d=0;for(const f of r.values())f.body.bodyType()===t.RigidBodyType.Dynamic&&d++,f.body.isSleeping()?h++:u++;return{awake:u,asleep:h,total:r.size,dynamic:d,stepMs:c}},dispose(){i.free()}};return l}function hx({bounds:n,bind:e=!0}){e&&au({PH:{g:14,gBody:9.8,squeeze:3},playerR:.3,boundsAt:()=>n,placeAt:()=>!0,roomHeight:()=>n.h,spawn:{x:0,z:0,yaw:0,pitch:0},speed:3.2});const t={boxes:[]},i=new Set,s=new Map,r=new Map;let a=0;const o=()=>({boxes:t.boxes.filter(l=>!i.has(l.id)),circles:[]}),c={kind:"box",warmMs:0,addStatic(l){t.boxes.push(l)},setStatic(l,u){u?i.delete(l):i.add(l)},addPart(l,{fixed:u=!1,kinematic:h=!1}={}){return s.set(l.id,{id:l.id,x:l.p[0],y:l.p[1],z:l.p[2],hx:l.h[0],hy:l.h[1],hz:l.h[2],vx:0,vy:0,vz:0,rest:!0,fixed:u||h,held:!1,mass:l.mass,h:l.h,q:l.q||[0,0,0,1]}),l.id},joint(l,u,h){r.set(l,{a:u,b:h});const d=s.get(u);d&&(d.fixed=!0);const f=h!=="world"&&s.get(h);f&&(f.fixed=!0)},unjoint(l){r.delete(l)},release(l){const u=s.get(l);u&&!u.held&&(u.fixed=!1,u.rest=!1)},setKinematic(l,u){const h=s.get(l);h&&(h.held=!!u,h.fixed=!!u,u||(h.rest=!1))},moveKinematic(l,u,h){const d=s.get(l);d&&(d.x=u[0],d.y=u[1],d.z=u[2],h&&(d.q=h))},setPose(l,u,h){const d=s.get(l);d&&(d.x=u[0],d.y=u[1],d.z=u[2],h&&(d.q=h),d.vx=d.vy=d.vz=0,d.rest=!0)},impulse(l,u){const h=s.get(l);if(!h||h.fixed)return;const d=h.mass||1;h.vx+=u[0]/d,h.vy+=u[1]/d,h.vz+=u[2]/d,h.rest=!1},impulseAt(l,u){c.impulse(l,u)},velocity(l,u){const h=s.get(l);h&&(h.vx=u[0],h.vy=u[1],h.vz=u[2],h.rest=!1)},remove(l){s.delete(l);for(const[u,h]of r)(h.a===l||h.b===l)&&r.delete(u)},has:l=>s.has(l),wakeAll(){for(const l of s.values())l.fixed||(l.rest=!1)},step(l){const u=performance.now(),h=o(),d=[...s.values()],f=d.map(Wl);for(let m=0;m<d.length;m++){const x=d[m];x.fixed||x.rest||(Ag(x,h,Math.min(1/30,l),f.filter((g,p)=>p!==m)),f[m]=Wl(x))}return a=performance.now()-u,a},pose(l){const u=s.get(l);return u?{p:[u.x,u.y,u.z],q:u.q,sleep:u.rest||u.fixed,v:[u.vx,u.vy,u.vz]}:null},aabb(l){const u=s.get(l);return u?{x0:u.x-u.hx,x1:u.x+u.hx,y0:u.y-u.hy,y1:u.y+u.hy,z0:u.z-u.hz,z1:u.z+u.hz}:null},half:l=>(s.get(l)||{}).h,mass:l=>(s.get(l)||{}).mass,bodies:()=>[...s.keys()],stats(){let l=0,u=0,h=0;for(const d of s.values())d.fixed||h++,d.rest||d.fixed?u++:l++;return{awake:l,asleep:u,total:s.size,dynamic:h,stepMs:a}},dispose(){}};return c}async function px(n,e={}){return n==="box"?hx(e):dx(e)}function mx({panels:n=jg,cyc:e=()=>0}={}){const t=new Map(n.map(o=>[o.id,o])),i=new Map,s=()=>({fx:["bolt","bolt","bolt","bolt"],cut:[0,0,0,0],plate:"on",weld:0,seamCyc:-1,dirty:!1}),r=o=>t.has(o)?(i.has(o)||i.set(o,s()),i.get(o)):null,a=o=>o.cut.every(c=>c>=1);return{has:o=>t.has(o),cut(o,c,l){const u=r(o);return!u||u.plate!=="on"||c<0||c>3||u.cut[c]>=1?null:(u.cut[c]=Math.min(1,u.cut[c]+l/xt.boltCut),u.cut[c])},loose:o=>{const c=r(o);return!!c&&c.plate==="on"&&a(c)},take(o){const c=r(o);return!c||c.plate!=="on"||!a(c)?!1:(c.plate="off",c.weld=0,c.dirty=!0,!0)},seatable(o,c){const l=r(o),u=t.get(o);if(!l||l.plate!=="off"||!c)return!1;const h=Eo[u.face],d=[c[0]-u.x,c[1]-u.y,c[2]-u.z],f=d[0]*h[0]+d[1]*h[1]+d[2]*h[2];return Math.hypot(d[0]-f*h[0],d[1]-f*h[1],d[2]-f*h[2])<xt.seat&&f>-.05&&f<xt.seatOut},blocked(o,c=[]){const l=t.get(o);if(!l)return"";const u=ys(l),h=(c||[]).find(d=>d.x1>u.x0&&d.x0<u.x1&&d.y1>u.y0&&d.y0<u.y1&&d.z1>u.z0&&d.z0<u.z1);return h?h.id||"plot":""},seat(o,c,l=[]){const u=r(o);return!u||!this.seatable(o,c)||this.blocked(o,l)?!1:(u.plate="seat",u.weld=0,!0)},unseat(o){const c=r(o);return!c||c.plate!=="seat"?!1:(c.plate="off",c.weld=0,!0)},weld(o,c){const l=r(o);return!l||l.plate!=="seat"?null:(l.weld=Math.min(1,l.weld+c/xt.weld),l.weld>=1&&(l.plate="on",l.fx=["weld","weld","weld","weld"],l.cut=[0,0,0,0],l.seamCyc=e(),l.dirty=!0),l.weld)},view(o){const c=r(o);if(!c)return null;const l=c.fx[0]==="weld"?c.seamCyc===e()?1:2:0;return{bolts:c.cut.map(u=>u>=1?1:0),fx:c.fx.slice(),plate:c.plate==="off"?"off":"on",seated:c.plate==="seat",weld:+c.weld.toFixed(2),seam:l}},open:o=>{const c=r(o);return!!c&&c.plate==="off"},load(o){for(const[c,l,u]of o||[]){const h=r(c);!h||h.dirty||(l==="off"?(h.plate="off",h.cut=[1,1,1,1]):(h.plate="on",h.cut=[0,0,0,0],u>=0&&(h.fx=["weld","weld","weld","weld"],h.seamCyc=u)))}},shared(){const o=[];for(const[c,l]of i)l.dirty&&(o.push([c,l.plate==="off"?"off":"on"]),l.dirty=!1);return o},state:()=>[...i].map(([o,c])=>({id:o,...c}))}}const ua={crateL:1.9,pallet:1.7,crate:.65,tank:.25,leg:.1,top:.6,leaf:.3,plate:.15,debris:.1},Ct={cutRange:2.6,blast:14,cover:.15,pull:40,eject:.45,legKick:1.6,pullMin:3,hatchBurn:.7,kick:.6,cableCut:.6,doorTime:.6,cabTime:.45,cabAngle:1.85},gx=Math.PI/2,ns=(n,e)=>Math.hypot(n[0]-e[0],n[1]-e[1],n[2]-e[2]),nc=n=>[0,Math.sin(n/2),0,Math.cos(n/2)];function xx(n,e,t,i,s){const r=[-i[0],-i[1],-i[2],i[3]],a=Yn(r,[n[0]-t[0],n[1]-t[1],n[2]-t[2]]),o=Yn(r,e);let c=0,l=1e9;for(let u=0;u<3;u++){if(Math.abs(o[u])<1e-9){if(a[u]<-s[u]||a[u]>s[u])return null;continue}let h=(-s[u]-a[u])/o[u],d=(s[u]-a[u])/o[u];if(h>d&&([h,d]=[d,h]),c=Math.max(c,h),l=Math.min(l,d),c>l)return null}return c>1e-4?c:null}function _x(n,e){const t=[],i=(u,h,d,f,m,x)=>{h-u>1e-4&&f-d>1e-4&&x-m>1e-4&&t.push({...n,x0:u,x1:h,y0:d,y1:f,z0:m,z1:x})},s=Math.max(n.x0,e.x0),r=Math.min(n.x1,e.x1),a=Math.max(n.y0,e.y0),o=Math.min(n.y1,e.y1),c=Math.max(n.z0,e.z0),l=Math.min(n.z1,e.z1);return s>=r||a>=o||c>=l?[n]:(i(n.x0,s,n.y0,n.y1,n.z0,n.z1),i(r,n.x1,n.y0,n.y1,n.z0,n.z1),i(s,r,n.y0,n.y1,n.z0,c),i(s,r,n.y0,n.y1,l,n.z1),i(s,r,n.y0,a,c,l),i(s,r,o,n.y1,c,l),t)}const ic=(n,e,t,i)=>{const s=[n[0]-t[0],n[1]-t[1],n[2]-t[2]],r=s[0]*e[0]+s[1]*e[1]+s[2]*e[2],a=s[0]**2+s[1]**2+s[2]**2-i*i;if(a>0&&r>0)return null;const o=r*r-a;if(o<0)return null;const c=-r-Math.sqrt(o);return c>0?c:.001};function vx(n,e,t,{log:i=()=>{},mut:s=new Set}={}){const r={t:0,joints:new Map,cutProg:new Map,held:null,heldAt:0,opens:new Map,doors:new Map,windows:new Map,tanks:new Map,cablesCut:new Set,breakers:new Map,p:1,kicks:[],removed:[],burned:[],hatchOpen:new Map,plates:new Map,events:[],deaths:0,flash:0,ejected:[],partKind:new Map,partSm:new Map},a=(M,R={})=>{const z={t:+r.t.toFixed(2),kind:M,...R};return r.events.push(z),r.events.length>400&&r.events.shift(),i(z),z};for(const M of n.statics)t.addStatic(M);for(const M of n.parts)t.addPart(M,{fixed:!M.free}),r.partKind.set(M.id,M.kind),r.partSm.set(M.id,ua[M.kind]??.3);for(const M of n.joints)t.joint(M.id,M.a,M.b,M.at),r.joints.set(M.id,M);for(const M of n.opens)r.opens.set(M.id,{...M,open:0,want:0});for(const M of n.doors)r.doors.set(M.id,{...M,open:0,want:0});for(const M of n.windows)r.windows.set(M.id,{...M,hp:M.strength,broken:!1});for(const M of n.parts)M.tank&&r.tanks.set(M.id,{id:M.id,...M.tank,heat:0,gone:!1});for(const[M,R]of Object.entries(n.nodes))R.kind==="breaker"&&r.breakers.set(M,R.on!==!1);const o=new Set(e.trap?ix(e.trap,n.hatches).danger:[]),c=mx({panels:n.panels}),l=new Map(n.panels.map(M=>[M.id,M])),u=n.size[0]*n.size[1]*n.size[2];function h(){const M=new Map;for(const[G,Y]of n.edges)r.cablesCut.has(G)||r.cablesCut.has(Y)||(M.set(G,[...M.get(G)||[],Y]),M.set(Y,[...M.get(Y)||[],G]));const R=new Set,z=[...r.breakers].filter(([,G])=>G).map(([G])=>G);for(;z.length;){const G=z.shift();if(!R.has(G)){R.add(G);for(const Y of M.get(G)||[])!R.has(Y)&&!r.breakers.has(Y)&&z.push(Y)}}return R}let d=h();const f=new Set(n.edges.flat()),m=M=>!f.has(M)||d.has(M),x=()=>{const M=d;d=h();for(const R of f)M.has(R)!==d.has(R)&&!r.breakers.has(R)&&a(d.has(R)?"power_on":"power_off",{id:R})};function g(M,R="резак"){const z=r.joints.get(M);if(!z)return!1;r.joints.delete(M),t.unjoint(M),a("joint_cut",{id:M,prefab:z.prefab,why:R});const G=Y=>[...r.joints.values()].filter(Ee=>Ee.a===Y||Ee.b===Y).length;for(const Y of[z.a,z.b]){if(Y==="world"||!t.has(Y))continue;const Ee=r.partKind.get(Y),_e=Ee==="top"?3:1;if(G(Y)<_e){t.release(Y);const B=t.pose(Y),ce=t.mass(Y)||1;if(B&&Ee==="leg"){const ye=n.parts.find(mt=>mt.id===z.a)||{},pe=ye.p||B.p,me=B.p[0]-pe[0],ze=B.p[2]-pe[2],We=Math.hypot(me,ze)||1,Ke=t.half(Y)[1];r.kicks.push({id:Y,v:[me/We*ce*Ct.legKick,0,ze/We*ce*Ct.legKick],at:[B.p[0],B.p[1]-Ke*.9,B.p[2]]})}B&&Ee==="leaf"&&r.kicks.push({id:Y,v:[(Math.random()-.5)*ce*.4,0,(Math.random()-.5)*ce*.4],at:B.p}),a("part_free",{id:Y})}}return!0}const p=()=>n.statics.filter(M=>M.kind!=="glass"&&M.kind!=="note"&&!(M.kind==="door"&&(r.doors.get(M.door)||{}).open>.5));function v(M,R){const z=[R[0]-M[0],R[1]-M[1],R[2]-M[2]],G=Math.hypot(...z);if(G<.001)return!1;const Y=z.map(_e=>_e/G);return!!ji(M,Y,p(),G-.05)}function E(M){const R=r.tanks.get(M);if(!R||R.gone)return;const z=t.pose(M),G=z?z.p:[0,0,0];R.gone=!0,R.at=G.slice(),r.held===M&&(r.held=null),t.remove(M),r.removed.push(M);const Y=Ct.blast*R.charge,Ee=[];for(const _e of t.bodies()){const B=t.pose(_e);if(!B)continue;const ce=ns(B.p,G),ye=v(G,B.p)?Ct.cover:1,pe=Y/(1+ce*ce)*ye;if(ce>R.radius||pe<.2)continue;const me=ce>.001?[(B.p[0]-G[0])/ce,(B.p[1]-G[1])/ce+.3,(B.p[2]-G[2])/ce]:[0,1,0];t.release(_e),t.impulse(_e,me.map(ze=>ze*pe*(t.mass(_e)||1))),Ee.push(_e)}for(const[_e,B]of[...r.joints]){const ce=ns(B.at,G);Y/(1+ce*ce)*(v(G,B.at)?Ct.cover:1)>=B.strength*la.blastK&&g(_e,"взрыв")}for(const _e of r.windows.values()){if(_e.broken)continue;const B=ns(_e.at,G);Y/(1+B*B)*(v(G,_e.at)?Ct.cover:1)>=_e.strength*la.blastK*.8&&S(_e.id,"взрыв")}r.flash=1,r.blast={at:G,K:Y,t:r.t},a("explode",{id:M,at:G.map(_e=>+_e.toFixed(2)),hit:Ee.length})}function S(M,R){const z=r.windows.get(M);!z||z.broken||(z.broken=!0,z.hp=0,t.setStatic(M,!1),a("window_broken",{id:M,why:R}))}function C(M){const R=r.doors.get(M);return R?R.kind==="sealed"?(a("door_sealed",{id:M}),!1):m(M)?(R.want=R.want?0:1,a(R.want?"door_open":"door_close",{id:M}),!0):(a("door_dead",{id:M}),!1):!1}function w(M){const R=r.opens.get(M);return R?(R.want=R.want?0:1,a(R.want?"cab_open":"cab_close",{id:M}),!0):!1}function _(M){return r.breakers.has(M)?(r.breakers.set(M,!r.breakers.get(M)),a("breaker",{id:M,on:r.breakers.get(M)}),x(),!0):!1}let A={key:null,boxes:null};function I(){const M=n.panels.filter(Y=>c.view(Y.id).plate!=="on").map(Y=>Y.id),R=M.join(",");if(A.key===R)return A.boxes;const z=M.map(Y=>ys(l.get(Y)));let G=n.statics;return z.length&&(G=n.statics.flatMap(Y=>Y.kind==="floor"||Y.kind==="ceil"||Y.kind==="wall"?z.reduce((Ee,_e)=>Ee.flatMap(B=>_x(B,_e)),[Y]):[Y])),A={key:R,boxes:G},G}function L(M,R,z=Ct.cutRange){const G=[],Y=ji(M,R,I().filter(_e=>_e.kind!=="glass"||!(r.windows.get(_e.id)||{}).broken).filter(_e=>!(_e.kind==="door"&&(r.doors.get(_e.door)||{}).open>.5)),z);Y&&G.push({kind:"static",id:Y.box.prefab||Y.box.id,box:Y.box,t:Y.t});for(const _e of t.bodies()){if(_e===r.held)continue;const B=t.pose(_e),ce=xx(M,R,B.p,B.q,t.half(_e));ce!==null&&ce<z&&G.push({kind:"part",id:_e,t:ce})}for(const _e of n.panels){const B=c.view(_e.id);if(B.plate==="on"&&!B.seated){for(let pe=0;pe<4;pe++)if(!B.bolts[pe]){const me=ic(M,R,cu(_e,pe),.06);me!==null&&me<z&&G.push({kind:"bolt",id:_e.id,i:pe,t:me-.02})}const ce=Kl(_e),ye=ji(M,R,[ce],z);ye&&G.push({kind:"plate",id:_e.id,t:ye.t})}else if(B.seated){const ce=ji(M,R,[Kl(_e)],z);ce&&G.push({kind:"plate",id:_e.id,t:ce.t,seated:!0})}else for(const ce of F(_e.id)){const ye=ic(M,R,ce.at,.1);ye!==null&&ye<z&&G.push({kind:"cable",id:ce.id,panel:_e.id,at:ce.at,t:ye})}}for(const _e of n.hatches){const B={x0:_e.x0,x1:_e.x1,y0:-.02,y1:.012,z0:_e.z0,z1:_e.z1},ce=ji(M,R,[B],z);ce&&G.push({kind:"hatch",id:_e.id,t:ce.t,number:_e.number})}G.sort((_e,B)=>_e.t-B.t);const Ee=G[0]||null;return Ee&&(Ee.at=Ee.at||[M[0]+R[0]*Ee.t,M[1]+R[1]*Ee.t,M[2]+R[2]*Ee.t]),Ee}function F(M){const R=l.get(M),z=[];if(!R||R.face!=="+y")return z;const G=ys(R);for(const Y of n.cables)if(!r.cablesCut.has(Y.id))for(let Ee=1;Ee<Y.pts.length;Ee++){const _e=Y.pts[Ee-1],B=Y.pts[Ee],ce=Math.min(_e[0],B[0])-1e-6,ye=Math.max(_e[0],B[0])+1e-6,pe=Math.min(_e[2],B[2])-1e-6,me=Math.max(_e[2],B[2])+1e-6;if(ye<G.x0||ce>G.x1||me<G.z0||pe>G.z1)continue;const ze=Math.max(G.x0+.05,Math.min(G.x1-.05,R.x)),We=Math.max(G.z0+.05,Math.min(G.z1-.05,R.z));z.push({id:Y.id,at:[_e[0]===B[0]?_e[0]:ze,-.16,_e[2]===B[2]?_e[2]:We]});break}return z}function k(M,R){if(!M)return"";if(M.kind==="bolt"){const z=c.cut(M.id,M.i,R);return z!==null&&z>=1&&a("bolt_cut",{id:M.id,i:M.i}),"болт"}if(M.kind==="plate"){const z=c.view(M.id);if(z.seated)return c.weld(M.id,R)>=1&&a("panel_weld",{id:M.id}),"шов";const G=z.bolts.findIndex(Y=>!Y);return G>=0&&c.cut(M.id,G,R)>=1&&a("bolt_cut",{id:M.id,i:G}),"болт"}if(M.kind==="cable"){const z="cable:"+M.id,G=(r.cutProg.get(z)||0)+R;return r.cutProg.set(z,G),G>=Ct.cableCut&&(r.cablesCut.add(M.id),r.cableCutAt=r.cableCutAt||{},r.cableCutAt[M.id]=M.at,a("cable_cut",{id:M.id,under:M.panel}),x()),"кабель"}if(M.kind==="static"){const z=r.windows.get(M.id);return z&&!z.broken?(z.hp-=R,z.hp<=0&&S(z.id,"резак"),"стекло"):""}if(M.kind==="part"){const z=r.tanks.get(M.id);if(z)return z.heat+=R,z.heat>=z.fuse&&E(z.id),"баллон";const G=[...r.joints.values()].filter(_e=>_e.a===M.id||_e.b===M.id);if(!G.length)return"";G.sort((_e,B)=>ns(_e.at,M.at)-ns(B.at,M.at));const Y=G[0],Ee=(r.cutProg.get(Y.id)||0)+R*la.cutRate;return r.cutProg.set(Y.id,Ee),Ee>=Y.strength&&g(Y.id),"крепление"}return""}function te(M){if(!M)return"";const R=M.id;if(M.kind==="static"){if(r.breakers.has(R))return _(R),"щиток";if(r.doors.has(R))return C(R),"дверь";if(r.opens.has(R))return w(R),"шкаф";const z=n.prefabOf[R];return z&&z.type==="note"?(a("read",{id:R,key:z.text}),"запись"):""}if(M.kind==="part"){const z=n.parts.find(G=>G.id===R);if(z&&z.kind==="leaf"&&r.joints.has(z.prefab+".hinge"+z.id.slice(-1)))return w(z.prefab),"шкаф"}return""}const N=M=>!!M&&t.has(M)&&![...r.joints.values()].some(R=>R.a===M||R.b===M);function J(M){if(r.held)return se();if(!M)return!1;if(M.kind==="plate"&&c.loose(M.id)){c.take(M.id);const R=l.get(M.id),z="plate:"+M.id,G=R.face==="+y"||R.face==="-y"?[0,0,0,1]:R.face[1]==="x"?nc(gx):[0,0,0,1],Y=R.face[1]==="y"?[xt.w/2,.012,xt.w/2]:R.face[1]==="x"?[.012,xt.w/2,xt.w/2]:[xt.w/2,xt.w/2,.012];return t.addPart({id:z,kind:"plate",shape:"box",h:Y,p:[R.x,R.y+.02,R.z],q:G,mass:3},{}),r.partKind.set(z,"plate"),r.partSm.set(z,ua.plate),r.plates.set(z,M.id),a("panel_off",{id:M.id}),r.held=z,t.setKinematic(z,!0),!0}return M.kind==="part"&&N(M.id)?(r.held=M.id,t.setKinematic(M.id,!0),a("grab",{id:M.id}),!0):!1}function se(M=null){const R=r.held;if(!R)return!1;r.held=null;const z=r.plates.get(R);if(z&&!M){const G=t.pose(R);if(c.seat(z,G.p))return t.remove(R),r.plates.delete(R),a("panel_seat",{id:z}),!0}return t.setKinematic(R,!1),M&&t.velocity(R,M),a(M?"throw":"drop",{id:R}),!0}function ne(M,R=1){if(!r.held)return!1;const z=r.held;return se(Wg(M,r.partSm.get(z)??.3,R))}function ve(M){const R=Math.cos(M.pitch),z=[-Math.sin(M.yaw)*R,Math.sin(M.pitch),-Math.cos(M.yaw)*R],G=t.half(r.held)||[.2,.2,.2],Y=Yl.dist+Math.max(...G);return[M.x+z[0]*Y,M.y+M.eye-Yl.drop+z[1]*Y,M.z+z[2]*Y]}function re(M,R){r.t+=M;for(const B of r.doors.values()){const ce=B.open;B.open+=Math.sign(B.want-B.open)*Math.min(Math.abs(B.want-B.open),M/Ct.doorTime),ce>.5!=B.open>.5&&t.setStatic(B.box.id,B.open<=.5)}for(const B of r.opens.values()){B.open+=Math.sign(B.want-B.open)*Math.min(Math.abs(B.want-B.open),M/Ct.cabTime);for(const ce of B.leaves){const ye=n.parts.find(ft=>ft.id===ce),pe=`${ye.prefab}.hinge${ce.slice(-1)}`;if(!r.joints.has(pe)||!t.has(ce))continue;const me=ye.hinge,ze=B.open*Ct.cabAngle*(me.side===0?-1:1)*me.sg*(me.along==="x"?1:-1),We=[ye.p[0]-me.at[0],ye.p[1]-me.at[1],ye.p[2]-me.at[2]],Ke=nc(ze),mt=Yn(Ke,We);t.moveKinematic(ce,[me.at[0]+mt[0],me.at[1]+mt[1],me.at[2]+mt[2]],Ke)}}r.held&&R&&t.moveKinematic(r.held,ve(R),null);let z=0,G=0;for(const B of r.windows.values())B.broken&&(z+=(B.a1-B.a0)*(B.y1-B.y0));for(const B of n.portals){const ce=r.doors.get(B.id);(!ce||ce.open>.5)&&(G+=(B.a1-B.a0)*B.y1)}const Y=2.4*z*r.p,Ee=2.4*G*(1-r.p)*.3;if(r.p=Math.max(0,Math.min(1,r.p+(Ee-Y)*M*8/u)),r.flow=Y,z>0&&r.p>.02)for(const B of r.windows.values()){if(!B.broken)continue;const ce=n.statics.find(ye=>ye.id===B.id);for(const ye of t.bodies()){if(ye===r.held)continue;const pe=t.pose(ye),me=[Math.max(ce.x0,Math.min(pe.p[0],ce.x1)),Math.max(ce.y0,Math.min(pe.p[1],ce.y1)),Math.max(ce.z0,Math.min(pe.p[2],ce.z1))],ze=[me[0]-pe.p[0],me[1]-pe.p[1]+.25,me[2]-pe.p[2]],We=Math.hypot(...ze)||1,Ke=Ct.pull*r.p*(B.a1-B.a0)*(B.y1-B.y0)/(1+We*We);Ke<Ct.pullMin||(t.release(ye),t.impulse(ye,ze.map(mt=>mt/We*Ke*M*(t.mass(ye)||1))),Math.hypot(me[0]-pe.p[0],me[1]-pe.p[1],me[2]-pe.p[2])<Ct.eject&&(t.remove(ye),r.removed.push(ye),r.ejected.push(ye),a("ejected",{id:ye,window:B.id})))}if(R){const ye=[B.at[0]-R.x,B.at[2]-R.z],pe=Math.hypot(...ye)||1,me=Ct.pull*.35*r.p*(B.a1-B.a0)*(B.y1-B.y0)/(1+pe*pe);R.kx=(R.kx||0)+ye[0]/pe*me*M,R.kz=(R.kz||0)+ye[1]/pe*me*M}}for(const B of r.windows.values()){if(B.broken)continue;const ce=n.statics.find(ye=>ye.id===B.id);for(const ye of t.bodies()){if(ye===r.held)continue;const pe=t.pose(ye),me=Math.hypot(...pe.v),ze=t.aabb(ye);if(me>5&&ze.x0<ce.x1+.05&&ze.x1>ce.x0-.05&&ze.y0<ce.y1&&ze.y1>ce.y0&&ze.z0<ce.z1+.05&&ze.z1>ce.z0-.05){S(B.id,"удар "+ye);break}}}for(const B of n.hatches){if(!o.has(B.id)&&!s.has("alltrap"))continue;let ce=r.hatchOpen.get(B.id)||0;for(const ye of t.bodies()){if(ye===r.held)continue;const pe=t.pose(ye);pe.p[0]>B.x0&&pe.p[0]<B.x1&&pe.p[2]>B.z0&&pe.p[2]<B.z1&&pe.p[1]<.6&&(ce||a("hatch_open",{id:B.id,by:ye}),ce=Math.max(ce,.01),(pe.p[1]<-.05||r.t-(r.hatchSeen?.[ye]??r.t)>Ct.hatchBurn)&&(t.remove(ye),r.removed.push(ye),r.burned.push({id:ye,hatch:B.id}),r.flash=Math.max(r.flash,.6),a("burned",{id:ye,hatch:B.id})),r.hatchSeen=r.hatchSeen||{},ye in r.hatchSeen||(r.hatchSeen[ye]=r.t))}R&&R.x>B.x0&&R.x<B.x1&&R.z>B.z0&&R.z<B.z1&&R.y<.1&&(ce||a("hatch_open",{id:B.id,by:"player"}),ce=Math.max(ce,.01),r.deaths++,a("death",{cause:"hatch",id:B.id}),R.respawn&&R.respawn()),ce&&(ce=Math.min(1,ce+M/.35)),ce&&ce>=1&&![...t.bodies()].some(ye=>{const pe=t.pose(ye);return pe.p[0]>B.x0&&pe.p[0]<B.x1&&pe.p[2]>B.z0&&pe.p[2]<B.z1})&&r.t-(r.hatchClose?.[B.id]??0)>2&&(r.hatchClose=r.hatchClose||{},r.hatchClose[B.id]=r.t,ce=0,a("hatch_close",{id:B.id})),r.hatchOpen.set(B.id,ce)}if(R)for(const B of t.bodies()){if(B===r.held)continue;const ce=t.aabb(B);if(!ce||ce.y0>R.y+1||ce.y1<R.y+.1)continue;const ye=Math.max(ce.x0,Math.min(R.x,ce.x1)),pe=Math.max(ce.z0,Math.min(R.z,ce.z1)),me=ye-R.x,ze=pe-R.z,We=Math.hypot(me,ze);We<wo.r+.03&&We>1e-4&&N(B)&&(r.partSm.get(B)??1)<.7&&t.impulse(B,[me/We*Ct.kick*(t.mass(B)||1)*M*10,0,ze/We*Ct.kick*(t.mass(B)||1)*M*10])}const _e=t.step(M);if(r.kicks.length)for(const B of r.kicks.splice(0))t.has(B.id)&&t.impulseAt(B.id,B.v,B.at);for(const B of t.bodies())t.pose(B).p[1]<-3&&(t.remove(B),r.removed.push(B),a("lost",{id:B}));return r.flash=Math.max(0,r.flash-M*2),_e}function fe(){const M=n.statics.filter(G=>!(G.kind==="glass"&&(r.windows.get(G.id)||{}).broken)&&!(G.kind==="door"&&(r.doors.get(G.door)||{}).open>.5)&&G.kind!=="note"),R=[],z=[];for(const G of t.bodies()){if(G===r.held)continue;const Y=t.aabb(G);Y&&((r.partSm.get(G)??1)<.7&&N(G)?z:R).push({...Y,id:G})}return{col:{boxes:M,circles:[]},extra:R,soft:z}}function de(){return{v:1,room:n.id,t:+r.t.toFixed(3),p:+r.p.toFixed(4),joints:[...r.joints.keys()],cut:[...r.cutProg].map(([M,R])=>[M,+R.toFixed(3)]),panels:n.panels.map(M=>({id:M.id,...c.view(M.id)})),cables:[...r.cablesCut],breakers:[...r.breakers],doors:[...r.doors].map(([M,R])=>[M,R.want]),opens:[...r.opens].map(([M,R])=>[M,R.want]),windows:[...r.windows].filter(([,M])=>M.broken).map(([M])=>M),tanks:[...r.tanks].map(([M,R])=>[M,+R.heat.toFixed(3),R.gone]),removed:r.removed.slice(),burned:r.burned.slice(),ejected:r.ejected.slice(),plates:[...r.plates],bodies:t.bodies().map(M=>{const R=t.pose(M);return{id:M,p:R.p.map(z=>+z.toFixed(4)),q:R.q.map(z=>+z.toFixed(5)),sleep:R.sleep,free:N(M)}})}}function Ie(M){if(!M||M.room!==n.id)throw new Error("снимок другой комнаты");r.t=M.t,r.p=M.p;for(const R of[...r.joints.keys()])M.joints.includes(R)||(r.joints.delete(R),t.unjoint(R));r.cutProg=new Map(M.cut);for(const R of M.panels){for(let z=0;z<4;z++)R.bolts[z]&&c.cut(R.id,z,99);R.plate==="off"&&c.take(R.id),R.plate==="off"&&R.seated}r.cablesCut=new Set(M.cables),r.breakers=new Map(M.breakers);for(const[R,z]of M.doors){const G=r.doors.get(R);G&&(G.want=G.open=z,t.setStatic(G.box.id,z<=.5))}for(const[R,z]of M.opens){const G=r.opens.get(R);G&&(G.want=G.open=z)}for(const R of M.windows)K(R);for(const[R,z,G]of M.tanks){const Y=r.tanks.get(R);Y&&(Y.heat=z,Y.gone=G)}r.removed=M.removed.slice(),r.burned=M.burned.slice(),r.ejected=M.ejected.slice();for(const R of M.removed)t.has(R)&&t.remove(R);for(const[R,z]of M.plates){const G=M.bodies.find(Ee=>Ee.id===R),Y=l.get(z);!G||!Y||(t.addPart({id:R,kind:"plate",shape:"box",h:Y.face[1]==="y"?[xt.w/2,.012,xt.w/2]:Y.face[1]==="x"?[.012,xt.w/2,xt.w/2]:[xt.w/2,xt.w/2,.012],p:G.p,q:G.q,mass:3},{}),r.partKind.set(R,"plate"),r.partSm.set(R,ua.plate),r.plates.set(R,z))}for(const R of M.bodies)t.has(R.id)&&(R.free&&t.release(R.id),t.setPose(R.id,R.p,R.q));x(),a("restored",{bodies:M.bodies.length,joints:M.joints.length})}function K(M){const R=r.windows.get(M);R&&(R.broken=!0,R.hp=0,t.setStatic(M,!1))}return{S:r,C:n,phys:t,panels:c,danger:o,powered:()=>d,isOn:m,aim:L,cut:k,use:te,grab:J,drop:se,throwHeld:ne,step:re,playerCol:fe,explode:E,cutJoint:g,toggleDoor:C,toggleBreaker:_,toggleCab:w,breakWindow:S,snapshot:de,restore:Ie,exposedCables:F,holdPoint:ve}}const yx={lineH:.085},ht={bevel:0},dn=Math.PI/2,uu=new zt,Mx=new zt,Sx=new H,bx={wood:9071173,orange:13132830,teal:3112838,white:14276559,steel:11910338,steelDark:4869458,O2:3108792,N2:3948356,H2:12071978};function kt(n,e,t){Mr(e[2],n.quaternion),t&&n.quaternion.multiply(uu.set(t[0],t[1],t[2],t[3])),Bi(e[0],e[1],e[2],n.position)}function wr(n,e,t){const i=typeof document<"u"?document.createElement("canvas"):null;if(!i)return null;i.width=n,i.height=e,t(i.getContext("2d"),n,e);const s=new or(i);return s.colorSpace=Kt,s.anisotropy=4,s}function sc(n,e,t,i){const r=Math.round(e*256),a=Math.round(t*256);return wr(r,a,(o,c,l)=>{if(o.fillStyle=i?"#06121a":"#020304",o.fillRect(0,0,c,l),!i||!n)return;const u=yx.lineH*256,h=Math.round(u*.72);o.font=`600 ${h}px ui-monospace, Menlo, monospace`,o.textBaseline="top",o.fillStyle="#ffcf6a",o.fillText(n.title,10,6),o.fillStyle="#9fe3e6",(n.rows||[]).forEach((d,f)=>o.fillText(d,10,6+u*(f+1))),o.fillStyle="rgba(160,230,255,0.05)";for(let d=0;d<l;d+=4)o.fillRect(0,d,c,1)})}function Ex(n){return wr(256,360,(e,t,i)=>{e.fillStyle="#e8e0c8",e.fillRect(0,0,t,i),e.fillStyle="rgba(80,60,30,0.15)";for(let o=0;o<18;o++)e.fillRect(14,30+o*18,t-28,1);e.fillStyle="#2a2a33",e.font="15px Georgia, serif";const s=String(n||"").split(" ");let r="",a=34;for(const o of s){const c=r?r+" "+o:o;if(e.measureText(c).width>t-30){if(e.fillText(r,16,a),a+=18,r=o,a>i-12)break}else r=c}a<=i-12&&e.fillText(r,16,a)})}function wx(n){return wr(256,256,(e,t,i)=>{e.fillStyle="#4a4d52",e.fillRect(0,0,t,i),e.strokeStyle="#c9a227",e.lineWidth=10,e.strokeRect(12,12,t-24,i-24),e.fillStyle="#d8b030",e.font="bold 92px ui-monospace, Menlo, monospace",e.textAlign="center",e.textBaseline="middle",e.fillText(String(n),t/2,i/2+4)})}function Tx(n,e,{scene:t,lang:i="ru",tier:s={}}={}){const r=Es[n.kit],[a,o,c]=n.size,l=e.texts[i]||e.texts.ru,u=fg([0,0,0],[a,o,c]),h={lamp:Zs(13624063,3.2),lampWarm:Zs(16765600,3),emerg:Zs(16722458,2.6),glowWarm:Zs(16756832,4),lampOff:new an({color:1776671,roughness:.6,metalness:.2})},d={...dg(u),lamp:h.lamp,emerg:h.emerg,glowWarm:h.glowWarm},f=new Pi;f.userData.room=n.id,t.add(f);const m=[],x=new yn,g=n.hatches.map(b=>({x0:b.x0,x1:b.x1,y0:-.36,y1:.001,z0:b.z0,z1:b.z1,id:b.id}));yn.holes=[...n.niches.map(b=>({...b})),...g];try{for(const b of n.statics)b.kind==="floor"||b.kind==="stub"&&b.id.endsWith("_floor")?x.slab("floor",b.x0,b.y0,b.z0,b.x1,b.y1,b.z1,{bevel:0}):b.kind==="ceil"||b.kind==="stub"&&b.id.endsWith("_ceil")?x.slab("ceil",b.x0,b.y0,b.z0,b.x1,b.y1,b.z1,{bevel:0}):(b.kind==="wall"||b.kind==="stub")&&x.slab("wall",b.x0,b.y0,b.z0,b.x1,b.y1,b.z1,{bevel:0})}finally{yn.holes=null}const p=b=>[...n.portals.filter($=>$.side===b).map($=>({a0:$.a0,a1:$.a1,y0:0,y1:$.y1})),...n.windows.filter($=>$.side===b).map($=>({a0:$.a0,a1:$.a1,y0:$.y0,y1:$.y1}))],v=r.dado;for(const[b,$,X,V]of[["W","x",.012,c],["E","x",a-.012,c],["S","z",.012,a],["N","z",c-.012,a]]){const Se=p(b).filter(q=>q.y0<v).map(q=>({...q,a0:q.a0-.1,a1:q.a1+.1,y0:0,y1:v+.1}));x.wall("wallDark",$,X,0,V,.08,v,.024,Se),x.wall("steelDark",$,X,0,V,0,.08,.03,Se.map(q=>({...q,y1:.2}))),x.wall("steel",$,X,0,V,v,v+.03,.03,p(b).filter(q=>q.y0<v+.03).map(q=>({...q,a0:q.a0-.12,a1:q.a1+.12,y0:0,y1:9})))}for(let b=r.beam/2;b<a;b+=r.beam)x.box("steelDark",b,o-.06,c/2,.14,.12,c,ht);x.pipe("steel",[.25,o-.22,.2],[.25,o-.22,c-.2],.05,{seg:10}),x.pipe("copper",[.42,o-.18,.2],[.42,o-.18,c-.2],.03,{seg:8});for(const b of n.portals){const V=(b.a0+b.a1)/2,Se=b.a1-b.a0,q=(P,y,D,j)=>{if(b.along==="z"){const ee=b.side==="W"?.025:a-.025;x.box("orange",ee,y,P,.05,j,D,ht)}else{const ee=b.side==="S"?.025:c-.025;x.box("orange",P,y,ee,D,j,.05,ht)}};q(b.a0-.12/2,b.y1/2,.12,b.y1),q(b.a1+.12/2,b.y1/2,.12,b.y1),q(V,b.y1+.12/2,Se+2*.12,.12);const he=b.along==="z"?[b.side==="W"?.03:a-.03,.3,b.a0-.3]:[b.a0-.3,.3,b.side==="S"?.03:c-.03];x.box("emerg",he[0],he[1],he[2],b.along==="z"?.02:.2,.05,b.along==="z"?.2:.02,ht)}for(const b of n.windows){const X=b.side==="W"||b.side==="E"?"z":"x",V={W:0,E:a,S:0,N:c}[b.side],Se=b.side==="W"||b.side==="S"?1:-1,q=.04,he=(b.a0+b.a1)/2,P=b.a1-b.a0,y=(D,j,ee,ge)=>X==="z"?x.box("steel",V+Se*q/2,j,D,q,ge,ee,ht):x.box("steel",D,j,V+Se*q/2,ee,ge,q,ht);y(b.a0-.06/2,(b.y0+b.y1)/2,.06,b.y1-b.y0+2*.06),y(b.a1+.06/2,(b.y0+b.y1)/2,.06,b.y1-b.y0+2*.06),y(he,b.y0-.06/2,P+2*.06,.06),y(he,b.y1+.06/2,P+2*.06,.06),y(he,b.y0-.1,P+.3,.05)}for(const b of n.statics)if(b.kind==="screen"&&x.slab("steelDark",b.x0-(b.x1-b.x0>.2?.03:0),b.y0-.03,b.z0-(b.z1-b.z0>.2?.03:0),b.x1+(b.x1-b.x0>.2?.03:0),b.y1+.03,b.z1+(b.z1-b.z0>.2?.03:0),ht),b.kind==="cabinet"){const $=n.prefabOf[b.prefab],X=$.color==="teal"?"teal":$.color==="steel"?"steel":"white",V=.025,Se=n.opens.find(he=>he.id===b.prefab).face,q={...b};if(Se==="+z"&&(q.z1-=.03),Se==="-z"&&(q.z0+=.03),Se==="+x"&&(q.x1-=.03),Se==="-x"&&(q.x0+=.03),x.slab(X,q.x0,q.y1-V,q.z0,q.x1,q.y1,q.z1,ht),x.slab(X,q.x0,q.y0,q.z0,q.x1,q.y0+.08,q.z1,ht),Se[1]==="z"){x.slab(X,q.x0,0,q.z0,q.x0+V,q.y1,q.z1,ht),x.slab(X,q.x1-V,0,q.z0,q.x1,q.y1,q.z1,ht);const he=Se==="+z"?q.z0:q.z1-V;x.slab("steelDark",q.x0,0,he,q.x1,q.y1,he+V,ht)}else{x.slab(X,q.x0,0,q.z0,q.x1,q.y1,q.z0+V,ht),x.slab(X,q.x0,0,q.z1-V,q.x1,q.y1,q.z1,ht);const he=Se==="+x"?q.x0:q.x1-V;x.slab("steelDark",he,0,q.z0,he+V,q.y1,q.z1,ht)}for(const he of[.65,1.25])x.slab("steelDark",q.x0+V,he,q.z0+V,q.x1-V,he+.02,q.z1-V,ht)}for(const b of n.fixtures)x.box("steelDark",b.x,b.y-.04,b.z,b.w+.1,.08,b.l+.1,ht);for(const b of n.statics)if(b.kind==="shelf"&&x.slab(b.plank?"steelDark":b.mat||"steel",b.x0,b.y0,b.z0,b.x1,b.y1,b.z1,b.plank?ht:{bevel:.006}),b.kind==="pipe"){const $={W:[b.off,null],E:[a-b.off,null],S:[null,b.off],N:[null,c-b.off]}[b.side],X=V=>$[0]!==null?[$[0],b.y,V]:[V,b.y,$[1]];x.pipe(b.mat==="copper"?"copper":b.mat,X(b.a0),X(b.a1),b.r,{seg:10});for(let V=b.a0+.25;V<b.a1;V+=1){const Se=X(V),q={W:[0,null],E:[a,null],S:[null,0],N:[null,c]}[b.side];q[0]!==null?x.slab("steelDark",Math.min(q[0],Se[0]),b.y-.02,V-.03,Math.max(q[0],Se[0]),b.y+.02,V+.03,ht):x.slab("steelDark",V-.03,b.y-.02,Math.min(q[1],Se[2]),V+.03,b.y+.02,Math.max(q[1],Se[2]),ht)}}for(const b of n.hatches){const X=g.find(V=>V.id===b.id);x.slab("steel",b.x0-.05,-.004,b.z0-.05,b.x1+.05,.006,b.z0,ht),x.slab("steel",b.x0-.05,-.004,b.z1,b.x1+.05,.006,b.z1+.05,ht),x.slab("steel",b.x0-.05,-.004,b.z0,b.x0,.006,b.z1,ht),x.slab("steel",b.x1,-.004,b.z0,b.x1+.05,.006,b.z1,ht);for(const[V,Se,q,he]of[[X.x0,X.x1,X.z0,X.z0+.012],[X.x0,X.x1,X.z1-.012,X.z1],[X.x0,X.x0+.012,X.z0,X.z1],[X.x1-.012,X.x1,X.z0,X.z1]])x.slab("steelDark",V,X.y0,q,Se,-.004,he,ht);x.slab("steelDark",X.x0,X.y0,X.z0,X.x1,X.y0+.012,X.z1,ht)}for(const b of n.panels){const $=ys(b),X={"+x":[1,0,0],"-x":[-1,0,0],"+z":[0,0,1],"-z":[0,0,-1],"+y":[0,1,0],"-y":[0,-1,0]}[b.face],V=.012;for(const[Se,q]of[["x",0],["y",1],["z",2]]){const he=$[Se+"0"],P=$[Se+"1"],y=(D,j)=>{const ee={...$};ee[Se+"0"]=D,ee[Se+"1"]=j,x.slab("steelDark",ee.x0,ee.y0,ee.z0,ee.x1,ee.y1,ee.z1,{bevel:0})};if(X[q]){const D=X[q]>0?he:P;y(D-V/2,D+V/2)}else y(he,he+V),y(P-V,P)}}const E=x.build(d);E.userData.room=n.id,f.add(E);const S=new bg(t,{spots:3,points:3});s.spots&&S.setTier(s);const C=new Map;for(const b of n.lights)C.set(b.id,S.add({...b,pos:b.pos.slice(),to:b.to.slice(),reach:30}));for(const b of n.portals){const $={W:[-1.2,b.y1-.2,(b.a0+b.a1)/2],E:[a+1.2,b.y1-.2,(b.a0+b.a1)/2],S:[(b.a0+b.a1)/2,b.y1-.2,-1.2],N:[(b.a0+b.a1)/2,b.y1-.2,c+1.2]}[b.side];S.add({kind:"point",pos:$,color:r.stub.light,power:3,dist:5,reach:30})}S.add({kind:"point",pos:[a/2,.4,c/2],color:16724e3,power:1.6,dist:9,reach:30,prio:.5,name:"emergency"});const w=new Map;for(const b of n.fixtures){const $=n.lights.find(V=>V.id===b.id),X=new it(new Mt(b.w-.06,.02,b.l-.06),$&&$.color===16765600?h.lampWarm:h.lamp);kt(X,[b.x,b.y-.09,b.z]),f.add(X),w.set(b.id,{m:X,on:X.material})}const _=new Map,A=new Map,I=su(),L=b=>{if(A.has(b))return A.get(b);const $=bx[b]??(yr[b]?yr[b][1]:9080726),X=["steel","steelDark","O2","N2","H2"].includes(b),V=new an({color:$,roughness:X?.45:.7,metalness:X?.7:.1,map:X?I.metal.map:I.paint.map,normalMap:X?I.metal.normalMap:I.paint.normalMap});return A.set(b,V),V},F=new Map;let k=!1;const te=new Set;function N(b){let $;if(b.shape==="cyl"){const V=b.h[0],Se=b.h[1],q=[new Ii(V,V,Se*2-.1,18,1),new xo(V,18,8,0,Math.PI*2,0,dn),new Ii(.025,.03,.08,10)];q[1].translate(0,Se-.05,0),q[2].translate(0,Se+.03,0),$=new Xt;const he=q.map(j=>j.toNonIndexed()),P=[],y=[],D=[];for(const j of he)P.push(...j.attributes.position.array),y.push(...j.attributes.normal.array),D.push(...j.attributes.uv.array);$.setAttribute("position",new at(P,3)),$.setAttribute("normal",new at(y,3)),$.setAttribute("uv",new at(D,2))}else{const V=b.h.map(Se=>Se.toFixed(3)).join(",");$=_.get(V)||new Mt(b.h[0]*2,b.h[1]*2,b.h[2]*2),_.set(V,$)}const X=new it($,L(b.mat||b.kind));return X.castShadow=!0,X.receiveShadow=!0,X.userData.part=b.id,X.userData.prefab=b.prefab,f.add(X),F.set(b.id,X),X}for(const b of n.parts)N(b);const J=new Map;for(const b of n.doors){const $=b.box,X=new it(new Mt($.x1-$.x0,$.y1-$.y0,$.z1-$.z0),L(b.kind==="sealed"?"red":"steelDark"));X.castShadow=!0,X.receiveShadow=!0,X.userData.door=b.id,f.add(X),J.set(b.id,{m:X,d:b})}const se=new Map,ne=r.wallT;for(const b of n.portals){const $=b.a1-b.a0,X=b.along==="z"?new Mt(ne+.1,.012,$):new Mt($,.012,ne+.1),V={W:[-ne/2,(b.a0+b.a1)/2],E:[a+ne/2,(b.a0+b.a1)/2],S:[(b.a0+b.a1)/2,-ne/2],N:[(b.a0+b.a1)/2,c+ne/2]}[b.side],Se=new it(X,L("yellow"));Se.receiveShadow=!0,kt(Se,b.along==="z"?[V[0],.006,V[1]]:[V[0],.006,V[1]]),f.add(Se),se.set(b.id,Se)}const ve=new an({color:10470616,roughness:.05,metalness:.2,transparent:!0,opacity:.22,depthWrite:!1}),re=new Map;for(const b of n.windows){const $=n.statics.find(V=>V.id===b.id),X=new it(new Mt($.x1-$.x0,$.y1-$.y0,$.z1-$.z0),ve);kt(X,[($.x0+$.x1)/2,($.y0+$.y1)/2,($.z0+$.z1)/2]),X.userData.window=b.id,f.add(X),re.set(b.id,X)}const fe=wr(512,256,(b,$,X)=>{b.fillStyle="#01030a",b.fillRect(0,0,$,X);for(let V=0;V<260;V++){const Se=Math.random();b.fillStyle=`rgba(${200+Se*55},${210+Se*45},255,${.3+Se*.7})`,b.fillRect(Math.random()*$,Math.random()*X,Se>.92?2:1,Se>.92?2:1)}});for(const b of n.windows){const $=new it(new qn((b.a1-b.a0)*3,(b.y1-b.y0)*3),new Fi({map:fe,toneMapped:!1})),X=3,V={W:[-X,null],E:[a+X,null],S:[null,-X],N:[null,c+X]}[b.side],Se=(b.a0+b.a1)/2,q=(b.y0+b.y1)/2,he=V[0]!==null?[V[0],q,Se]:[Se,q,V[1]],P={W:dn,E:-dn,S:0,N:Math.PI}[b.side];kt($,he,[0,Math.sin(P/2),0,Math.cos(P/2)]),f.add($)}const de=new Map;for(const b of n.texts){const $=n.statics.find(D=>D.id===b.id),X=n.prefabOf[b.id],V=X.wall,Se={W:dn,E:-dn,S:0,N:Math.PI}[V],q=.004,he={W:[1,0],E:[-1,0],S:[0,1],N:[0,-1]}[V],P=V==="W"?$.x1:V==="E"?$.x0:($.x0+$.x1)/2,y=V==="S"?$.z1:V==="N"?$.z0:($.z0+$.z1)/2;if(b.kind==="screen"){const D=sc(l[b.key],b.w,b.h,!0),j=new it(new qn(b.w,b.h),new Fi({map:D,toneMapped:!1,color:16777215}));kt(j,[P+he[0]*q,($.y0+$.y1)/2,y+he[1]*q],[0,Math.sin(Se/2),0,Math.cos(Se/2)]),j.userData.screen=b.id,f.add(j),de.set(b.id,{m:j,texOn:D,texOff:sc(null,b.w,b.h,!1),t:b}),D&&m.push(D)}else{const D=Ex(l[b.key]),j=new it(new qn(.21,.3),new an({map:D,roughness:.9,metalness:0,emissive:2761750,emissiveIntensity:.4}));kt(j,[P+he[0]*q,($.y0+$.y1)/2,y+he[1]*q],[0,Math.sin(Se/2),0,Math.cos(Se/2)]),j.userData.note=b.id,f.add(j),de.set(b.id,{m:j,note:!0,t:b})}}const Ie=new Map,K=new Map;for(const b of n.statics.filter($=>$.kind==="breaker")){const $=new it(new Mt(.05,.16,.05),L("red")),X=n.prefabOf[b.prefab],V={W:[1,0],E:[-1,0],S:[0,1],N:[0,-1]}[X.wall],Se=X.wall==="W"?b.x1:X.wall==="E"?b.x0:(b.x0+b.x1)/2,q=X.wall==="S"?b.z1:X.wall==="N"?b.z0:(b.z0+b.z1)/2;$.userData.base=[Se+V[0]*.04,(b.y0+b.y1)/2,q+V[1]*.04],$.userData.side=X.wall;const he=new it(new Mt(X.wall==="W"||X.wall==="E"?.005:b.x1-b.x0,.04,X.wall==="W"||X.wall==="E"?b.z1-b.z0:.005),L("yellow"));kt(he,[Se+V[0]*.003,b.y1-.05,q+V[1]*.003]),f.add(he),f.add($),Ie.set(b.prefab,$);const P=new it(new Mt(b.x1-b.x0,b.y1-b.y0,b.z1-b.z0),L("steelDark"));kt(P,[(b.x0+b.x1)/2,(b.y0+b.y1)/2,(b.z0+b.z1)/2]),P.castShadow=!0,P.receiveShadow=!0,f.add(P),K.set(b.prefab,P)}const M=new Map;for(const b of n.hatches){const $=wx(b.number),X=new it(new Mt(b.x1-b.x0-.02,.03,b.z1-b.z0-.02),new an({map:$,roughness:.6,metalness:.5}));X.receiveShadow=!0,X.userData.hatch=b.id,f.add(X),M.set(b.id,{m:X,h:b})}const R=new it(new qn(.85,.85),h.glowWarm);R.visible=!1,f.add(R);const z={plate:new an({color:8094344,metalness:.55,roughness:.5,vertexColors:!0}),bolt:new an({color:11910338,metalness:.8,roughness:.35})},G=(()=>{const b=xt.w,$=.03,X=[[b,b,.018,0,0,.009,8094344]];for(const D of[-1,1])X.push([b+2*$,$,.004,0,D*(b/2+$/2),.002,14856732]),X.push([$,b,.004,D*(b/2+$/2),0,.002,14856732]);const V=[],Se=[],q=[],he=[],P=new Ve;for(const[D,j,ee,ge,xe,ae,oe]of X){const Me=new Mt(D,j,ee).toNonIndexed();Me.translate(ge,xe,ae),V.push(...Me.attributes.position.array),Se.push(...Me.attributes.normal.array),he.push(...Me.attributes.uv.array),P.set(oe);for(let U=0;U<Me.attributes.position.count;U++)q.push(P.r/.48,P.g/.51,P.b/.53)}const y=new Xt;return y.setAttribute("position",new at(V,3)),y.setAttribute("normal",new at(Se,3)),y.setAttribute("uv",new at(he,2)),y.setAttribute("color",new at(q,3)),y})(),Y=(()=>{const b=xt.w,$=.035,X=[[b,$,.02,0,b/2-$/2,.01],[b,$,.02,0,-b/2+$/2,.01],[$,b,.02,b/2-$/2,0,.01],[$,b,.02,-b/2+$/2,0,.01]];for(let D=0;D<5;D++)X.push([b-2*$,.022,.012,0,-b/2+$+(D+.5)*(b-2*$)/5,.012,!0]);const V=[],Se=[],q=[],he=[],P=new Ve(6120555);for(const[D,j,ee,ge,xe,ae,oe]of X){const Me=new Mt(D,j,ee).toNonIndexed();oe&&Me.rotateX(.6),Me.translate(ge,xe,ae),V.push(...Me.attributes.position.array),Se.push(...Me.attributes.normal.array),he.push(...Me.attributes.uv.array);for(let U=0;U<Me.attributes.position.count;U++)q.push(P.r/.48,P.g/.51,P.b/.53)}const y=new Xt;return y.setAttribute("position",new at(V,3)),y.setAttribute("normal",new at(Se,3)),y.setAttribute("uv",new at(he,2)),y.setAttribute("color",new at(q,3)),y})(),Ee=b=>b&&b.panel==="vent"?Y:G,_e={"+y":[-dn,0],"-y":[dn,0],"+x":[0,dn],"-x":[0,-dn],"+z":[0,0],"-z":[0,Math.PI]},B=new Map;for(const b of n.panels){const $=new it(Ee(b),z.plate),[X,V]=_e[b.face],Se=new Wt(X,V,0,"YXZ"),q=new zt().setFromEuler(Se),he={"+y":[0,.003,0],"-y":[0,-.003,0],"+x":[.003,0,0],"-x":[-.003,0,0],"+z":[0,0,.003],"-z":[0,0,-.003]}[b.face];kt($,[b.x+he[0],b.y+he[1],b.z+he[2]],[q.x,q.y,q.z,q.w]),$.receiveShadow=!0,$.userData.panel=b.id,f.add($),B.set(b.id,{m:$,q:[q.x,q.y,q.z,q.w]})}const ce=new Nc(new Ii(xt.bolt*.55,xt.bolt*.55,.012,10),z.bolt,Math.max(1,n.panels.length*4));ce.count=n.panels.length*4,f.add(ce);const ye={live:new an({color:12071978,roughness:.5,metalness:.1}),dead:new an({color:2761252,roughness:.8})};let pe=null;function me(b=new Set,$={}){pe&&(f.remove(pe),pe.geometry.dispose());const X=new yn;for(const Se of n.cables){const q=Se.pts,he=$[Se.id];for(let P=1;P<q.length;P++){let y=q[P-1],D=q[P];if(he&&b.has(Se.id)&&Math.abs((y[0]===D[0]?y[0]:he[0])-he[0])<.001&&Math.abs((y[2]===D[2]?y[2]:he[2])-he[2])<.001&&he[0]>=Math.min(y[0],D[0])-.001&&he[0]<=Math.max(y[0],D[0])+.001&&he[2]>=Math.min(y[2],D[2])-.001&&he[2]<=Math.max(y[2],D[2])+.001){const ee=[D[0]-y[0],0,D[2]-y[2]],ge=Math.hypot(ee[0],ee[2])||1,xe=[ee[0]/ge*.04,0,ee[2]/ge*.04];X.pipe("rubber",y,[he[0]-xe[0],he[1],he[2]-xe[2]],.022,{seg:8}),X.pipe("rubber",[he[0]+xe[0],he[1],he[2]+xe[2]],D,.022,{seg:8});continue}X.pipe("rubber",y,D,.022,{seg:8})}}const V=X.build({cloth:ye.live});pe=V.children[0]||null,pe&&(V.remove(pe),pe.castShadow=!1,f.add(pe))}me(),new ot;const ze=new bt;let We="",Ke="";function mt(b,$,X){const V=b.S,Se=b.phys;for(const[y,D]of F){const j=Se.pose(y);if(!j||te.has(D.userData.prefab)){D.visible=!1;continue}D.visible=!0,kt(D,j.p,j.q)}for(const[y]of V.plates)if(!F.has(y)){const D=new it(Ee(n.panels.find(j=>j.id===V.plates.get(y))),z.plate);D.castShadow=!0,f.add(D),F.set(y,D),D.userData.part=y,D.userData.plateLocal=!0}for(const[y,D]of F)if(D.userData.plateLocal){const j=Se.pose(y);if(!j){D.visible=!1;continue}const ee=n.panels.find(ae=>ae.id===V.plates.get(y)),ge=B.get(ee.id).q,xe=new zt(...j.q).multiply(Mx.set(...ge));D.visible=!0,kt(D,j.p,[xe.x,xe.y,xe.z,xe.w])}for(const[y,{m:D,d:j}]of J){const ee=V.doors.get(y),ge=j.box,xe=ee.open*((j.along==="z"?ge.z1-ge.z0:ge.x1-ge.x0)-.1);kt(D,[(ge.x0+ge.x1)/2+(j.along==="x"?xe:0),(ge.y0+ge.y1)/2,(ge.z0+ge.z1)/2+(j.along==="z"?xe:0)])}for(const[y,D]of re)D.visible=!V.windows.get(y).broken;const q=[...b.powered()].sort().join(",")+"|"+[...V.breakers].map(([y,D])=>y+D).join(",");if(q!==We){We=q;for(const[y,D]of C)D.off=k||!b.isOn(y);for(const[y,D]of w)D.m.material=b.isOn(y)?D.on:h.lampOff;for(const[y,D]of de)D.note||(D.m.material.map=b.isOn(y)?D.texOn:D.texOff,D.m.material.needsUpdate=!0);for(const[y,D]of Ie){const j=V.breakers.get(y)?-.5:.5,ee=D.userData.side;kt(D,D.userData.base,ee==="W"||ee==="E"?[0,0,Math.sin(j/2),Math.cos(j/2)]:[Math.sin(j/2),0,0,Math.cos(j/2)])}}const he=[...V.cablesCut].join(",");he!==Ke&&(Ke=he,me(V.cablesCut,V.cableCutAt||{}));for(const[y,{m:D,h:j}]of M){const ee=V.hatchOpen.get(y)||0,ge=j.x0+.01,xe=ee*1.75,ae=(j.x0+j.x1)/2,oe=(j.z0+j.z1)/2,Me=(j.x1-j.x0)/2,U=[0,0,Math.sin(-xe/2),Math.cos(-xe/2)];if(kt(D,[ge+Math.cos(xe)*Me,-.016-Math.sin(xe)*Me,oe],U),b.danger.has(y)){R.visible=ee>.05;const ue=new zt().setFromEuler(new Wt(-dn,0,0));kt(R,[ae,-.34,oe],[ue.x,ue.y,ue.z,ue.w])}}let P=0;for(const y of n.panels){const D=b.panels.view(y.id),j=B.get(y.id);j.m.visible=D.plate==="on";for(let ee=0;ee<4;ee++){const ge=D.plate==="on"&&!D.bolts[ee],xe=cu(y,ee),[ae,oe]=_e[y.face];ze.position.copy(Bi(xe[0],xe[1]-(y.face==="+y"?.006:0),xe[2],Sx)),ze.quaternion.copy(Mr(xe[2])).multiply(uu.setFromEuler(new Wt(ae+dn,oe,0,"YXZ"))),ze.scale.setScalar(ge?1:1e-4),ze.updateMatrix(),ce.setMatrixAt(P++,ze.matrix)}}ce.instanceMatrix.needsUpdate=!0,S.update(X?X[0]:a/2,X?X[2]:c/2,$)}function ft(){const b=new Map,$=(X,V)=>{V&&(b.has(X)||b.set(X,[]),b.get(X).push(V))};for(const X of n.keys){X.portal&&($(X.id,(J.get(X.id)||{}).m),$(X.id,se.get(X.id)));for(const[D,j]of F)j.userData.prefab===X.id&&$(X.id,j);const V=de.get(X.id);V&&$(X.id,V.m);const Se=M.get(X.id);Se&&$(X.id,Se.m);const q=re.get(X.id);q&&$(X.id,q);const he=Ie.get(X.id);he&&$(X.id,he);const P=B.get(X.id);P&&$(X.id,P.m);const y=K.get(X.id);y&&$(X.id,y)}return b}function qt(){let b=0,$=0;return f.traverse(X=>{if(X.isMesh&&X.visible){$++;const V=X.geometry,Se=V.index?V.index.count/3:V.attributes.position.count/3;b+=X.isInstancedMesh?Se*X.count:Se}}),{tris:Math.round(b),meshes:$}}function Yt(){t.remove(f),f.traverse(b=>{b.isMesh&&b.geometry.dispose()});for(const b of m)b.dispose();for(const b of[...S.spots,...S.points])t.remove(b),b.target&&t.remove(b.target),b.shadow&&b.shadow.map&&b.shadow.map.dispose()}function $t(){k=!0;for(const b of S.defs)b.off=!0;f.traverse(b=>{b.isMesh&&b.material&&(b.material.isMeshBasicMaterial||b.material.userData.unlit)&&(b.visible=!1)}),E.traverse(b=>{b.isMesh&&b.material.userData.unlit&&(b.visible=!1)})}function W(b){for(const $ of b){te.add($);for(const X of ft().get($)||[])X.visible=!1,X.userData.gateHidden=!0}}return{group:f,staticGroup:E,pool:S,update:mt,keyMeshes:ft,stats:qt,dispose:Yt,partMesh:F,mats:d,darken:$t,hide:W}}const rc={ru:{grip:"Захват",cut:"Резак",hint:"WASD ход · мышь взгляд · F инструмент · ЛКМ действие · Q бросок · E взаимодействие",tap:"Нажми, чтобы начать",t:{static:"стена",part:"тело",bolt:"болт панели",plate:"панель",cable:"кабель",hatch:"люк"},e:"E",dead:"нет питания",read:"запись",close:"E или клик - закрыть",k:{breaker:"щиток",door:"дверь",cabinet:"шкаф",note:"запись",screen:"табло",glass:"окно",crate:"ящик",tank:"баллон",top:"столешница",leg:"ножка стола",leaf:"створка",plate:"панель"},b:{cut:"Резак",grab:"Взять",thr:"Бросить",use:"E"},dying:"Люк открылся. Начать сначала."},en:{grip:"Grab",cut:"Cutter",hint:"WASD move · mouse look · F tool · LMB act · Q throw · E use",tap:"Tap to start",t:{static:"wall",part:"object",bolt:"panel bolt",plate:"panel",cable:"cable",hatch:"hatch"},e:"E",dead:"no power",read:"note",close:"E or click to close",k:{breaker:"breaker",door:"door",cabinet:"cabinet",note:"note",screen:"screen",glass:"window",crate:"crate",tank:"gas tank",top:"table top",leg:"table leg",leaf:"cabinet door",plate:"panel"},b:{cut:"Cutter",grab:"Grab",thr:"Throw",use:"E"},dying:"The hatch opened. Starting over."}};function Ax(n,e,{fps:t=!1,touch:i=!1,input:s=null}={}){const r=rc[e]||rc.ru,a=n.createElement("div");a.id="rhud",a.innerHTML=`<div id="rx"></div><div id="rtgt"></div><div id="rbar"><i></i></div><div id="rtool"></div><div id="rhelp">${r.hint}</div>
    <div id="rnote" hidden><div id="rnotet"></div><div id="rnotec">${r.close}</div></div><div id="rflash"></div><div id="rmsg" hidden></div>
    <pre id="rfps" ${t?"":"hidden"}></pre>`,n.body.appendChild(a);const o=h=>a.querySelector("#"+h),c=n.createElement("style");c.textContent=`#rhud{position:fixed;inset:0;pointer-events:none;font:13px/1.35 system-ui,sans-serif;color:#cfe2ff;z-index:5}
  #rx{position:absolute;left:50%;top:50%;width:6px;height:6px;margin:-3px;border-radius:50%;background:#e6f0ff;box-shadow:0 0 0 1px #000a}
  #rtgt{position:absolute;left:50%;top:calc(50% + 16px);transform:translateX(-50%);padding:2px 8px;background:#0008;border-radius:3px;white-space:nowrap}
  #rtgt:empty{display:none}
  #rbar{position:absolute;left:50%;top:calc(50% + 42px);width:120px;height:4px;margin-left:-60px;background:#0008;display:none}#rbar i{display:block;height:100%;width:0;background:#ffb060}
  #rtool{position:absolute;right:14px;bottom:14px;padding:5px 10px;background:#0009;border:1px solid #84cbcd;border-radius:4px}
  #rhelp{position:absolute;left:50%;bottom:14px;transform:translateX(-50%);padding:5px 10px;background:#0007;border-radius:4px;white-space:nowrap;font-size:12px}
  #rnote{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:min(440px,86vw);padding:20px 22px;background:#e8e0c8;color:#2a2a33;font:16px/1.5 Georgia,serif;border-radius:3px;box-shadow:0 6px 40px #000c}
  #rnotec{margin-top:12px;font:12px system-ui;color:#665}
  #rflash{position:absolute;inset:0;background:#ffd8a0;opacity:0}
  #rmsg{position:absolute;left:50%;top:30%;transform:translateX(-50%);padding:8px 14px;background:#200a;border:1px solid #f64;border-radius:4px}
  #rfps{position:absolute;left:8px;top:8px;margin:0;padding:5px 8px;font:600 11px/1.35 ui-monospace,monospace;color:#84cbcd;background:rgba(7,4,15,.75);border:1px solid #d951ef;border-radius:4px;white-space:pre}
  #rfps[hidden],#rnote[hidden],#rmsg[hidden]{display:none}
  .rtb{position:absolute;pointer-events:auto;width:64px;height:64px;border-radius:50%;background:#0a1a24b0;border:1px solid #84cbcd;color:#dff;font:600 12px system-ui;display:grid;place-items:center;user-select:none;-webkit-user-select:none;touch-action:none}
  #rstick{position:absolute;left:0;top:0;width:45%;height:100%;pointer-events:auto;touch-action:none}#rlook{position:absolute;right:0;top:0;width:55%;height:100%;pointer-events:auto;touch-action:none}`,n.head.appendChild(c);let l=!1;const u={root:a,tool(h){o("rtool").textContent=h==="cut"?r.cut:r.grip},target(h,d,f){o("rtgt").textContent=h?(d||r.t[h.kind]||"")+(f?" · "+r.dead:""):""},bar(h){const d=o("rbar");d.style.display=h>0&&h<1?"block":"none",d.firstChild.style.width=Math.round(h*100)+"%"},note(h){l=!!h,o("rnote").hidden=!h,o("rnotet").textContent=h||""},get noteOpen(){return l},flash(h){o("rflash").style.opacity=String(Math.min(.85,h))},msg(h){const d=o("rmsg");d.hidden=!h,d.textContent=h||""},fps(h){o("rfps").textContent=h},name:h=>r.k[h]||h,L:r};if(i&&s){o("rhelp").hidden=!0;const h=n.createElement("div"),d=n.createElement("div");h.id="rstick",d.id="rlook",a.append(h,d);let f=null,m=null,x=null,g=null;h.addEventListener("pointerdown",S=>{f=S.pointerId,m=[S.clientX,S.clientY],h.setPointerCapture(f)}),h.addEventListener("pointermove",S=>{if(S.pointerId!==f)return;const C=(S.clientX-m[0])/60,w=(S.clientY-m[1])/60;s.stick(Math.max(-1,Math.min(1,C)),Math.max(-1,Math.min(1,-w)),Math.hypot(C,w)>1.4)});const p=S=>{S.pointerId===f&&(f=null,s.stick(0,0))};h.addEventListener("pointerup",p),h.addEventListener("pointercancel",p),d.addEventListener("pointerdown",S=>{x=S.pointerId,g=[S.clientX,S.clientY],d.setPointerCapture(x)}),d.addEventListener("pointermove",S=>{S.pointerId===x&&(s.look((S.clientX-g[0])*1.6,(S.clientY-g[1])*1.6),g=[S.clientX,S.clientY])});const v=S=>{S.pointerId===x&&(x=null)};d.addEventListener("pointerup",v),d.addEventListener("pointercancel",v);const E=(S,C,w,_,A)=>{const I=n.createElement("div");return I.className="rtb",I.textContent=S,I.style.right=C+"px",I.style.bottom=w+"px",I.addEventListener("pointerdown",L=>{L.stopPropagation(),_()}),A&&(I.addEventListener("pointerup",A),I.addEventListener("pointercancel",A)),a.appendChild(I),I};E(r.b.cut,20,110,()=>s.hold("cutter",!0),()=>s.hold("cutter",!1)),E(r.b.grab,96,40,()=>s.press("grab")),E(r.b.thr,20,186,()=>s.press("throw")),E(r.b.use,172,40,()=>s.press("interact"))}return u}const Rx={g:14,gBody:9.8,jumpH:1.15,stand:1.3,crouch:.72,eye:1.2,eyeCrouch:.66,step:.28,ledge:.12,crouchSpeed:.5,crawl:oa.body,eyeCrawl:oa.eye,crawlSpeed:oa.speed,squeeze:3},ac=Object.assign({"../rooms/ring.sec07.corridor.json":()=>ha(()=>import("./ring.sec07.corridor-YiOnSwMO.js"),[],import.meta.url),"../rooms/ring.sec07.galley.json":()=>ha(()=>import("./ring.sec07.galley-DH7p71QJ.js"),[],import.meta.url)}),nn=new URLSearchParams(location.search),ri=document.documentElement,Cx=nn.get("room")||"ring.sec07.galley",fa=nn.get("lang")==="en"?"en":"ru",oc=nn.get("fps")==="1",da=nn.get("bench")==="1",tr=nn.get("phys")==="box"?"box":"rapier",fr=nn.get("touch")==="1"||nn.get("touch")!=="0"&&matchMedia("(pointer: coarse)").matches,is=["high","medium","lite"].includes(nn.get("q"))?nn.get("q"):fr?"lite":"high",ss=new Set((nn.get("mut")||"").split(",").filter(Boolean));ri.dataset.room="loading";const Px=n=>{ri.dataset.room="error",ri.dataset.roomError=String(n&&n.message||n);const e=document.getElementById("err");e&&(e.hidden=!1,e.textContent="Комната не загрузилась: "+ri.dataset.roomError),console.error(n)};async function Lx(n){const e=`../rooms/${n}.json`;if(!ac[e])throw new Error("нет комнаты "+n);const t=await ac[e]();return JSON.parse(JSON.stringify(t.default||t))}async function Dx(){const n=document.createElement("canvas");document.body.appendChild(n);const e=new J0({canvas:n,antialias:!1,powerPreference:"high-performance",preserveDrawingBuffer:da}),t={lost:0,restored:0};n.addEventListener("webglcontextlost",K=>{t.lost++,ri.dataset.roomGlLost=String(t.lost),K.preventDefault()}),n.addEventListener("webglcontextrestored",()=>{t.restored++}),e.shadowMap.enabled=!0,e.shadowMap.type=cs,e.toneMapping=Sn,e.autoClear=!1,e.info.autoReset=!1;const i={...zg[is]},s=is==="lite"?Math.min(devicePixelRatio,1.5)*.8:Math.min(devicePixelRatio,2);e.setPixelRatio(s),e.setSize(innerWidth,innerHeight);const r=new Lc;r.fog=new po(724242,.012);const a=new vs(e),o=a.fromScene(new Z0,.04).texture;a.dispose(),r.environment=ss.has("dark")?null:o,r.environmentIntensity=.06;const c=new Qf(16763024,2365970,ss.has("dark")?0:.2);r.add(c);const l=new tn(70,innerWidth/innerHeight,.05,200);r.add(l);const u=Fg(e,r,l,null);u.configure({msaa:i.msaa,bloom:i.bloom,hdr:i.hdr,prepass:!1,ldr:!1}),u.uniforms.uTint.value.set(1.05,1,.93);const h=Gg({coarse:fr}),d=Ax(document,fa,{fps:oc,touch:fr,input:h});da&&nn.get("hud")!=="1"&&(d.root.style.display="none");let f=null;async function m(K,M=null){const R=performance.now(),z=cx(K);if(z.length)throw new Error("схема: "+z.slice(0,3).map(We=>We.path+" "+We.msg).join("; "));const G=tx(K),[Y,Ee,_e]=G.size,B={x0:-2.4,x1:Y+2.4,z0:-2.4,z1:_e+2.4,h:Ee},ce=await px(tr,{bounds:B,bind:!1});au({PH:Rx,playerR:wo.r,spawn:{x:G.spawn.x,z:G.spawn.z,yaw:G.spawn.yaw,pitch:0},speed:3.2,boundsAt:()=>B,placeAt:()=>!0,roomHeight:()=>Ee});const ye=vx(G,K,ce,{mut:ss}),pe=Tx(G,K,{scene:r,lang:fa,tier:ss.has("dark")?{...i,spots:0,points:0}:i});ss.has("dark")&&pe.darken(),pe.hide((nn.get("hide")||"").split(",").filter(Boolean));const me=Tg(G.spawn.x,G.spawn.z);me.yaw=G.spawn.yaw,me.pitch=-.08,me.respawn=()=>{me.x=G.spawn.x,me.z=G.spawn.z,me.y=0,me.vy=0,me.yaw=G.spawn.yaw,d.msg(d.L.dying),setTimeout(()=>d.msg(""),2500)},M&&ye.restore(M);const ze=performance.now()-R;return{room:K,C:G,phys:ce,sys:ye,view:pe,pl:me,buildMs:ze}}function x(){f&&(f.view.dispose(),f.phys.dispose(),f=null)}let g="grip",p=null,v=-1;d.tool(g);const E={press:new Set,fire:!1},S=(K,M)=>{f&&(f.pl.yaw-=K*.0022,f.pl.pitch=Math.max(-1.45,Math.min(1.45,f.pl.pitch-M*.0022)))};addEventListener("keydown",K=>{K.repeat||(h.keyDown(K.code),["Space","KeyQ","KeyF","KeyE"].includes(K.code)&&K.preventDefault())}),addEventListener("keyup",K=>h.keyUp(K.code)),n.addEventListener("mousedown",K=>{if(!fr){if(document.pointerLockElement!==n){try{n.requestPointerLock()}catch{}return}K.button===0&&(E.fire=!0,E.press.add("fire")),K.button===2&&(v=performance.now())}}),addEventListener("mouseup",K=>{K.button===0&&(E.fire=!1),K.button===2&&v>0&&E.press.add("rthrow")}),addEventListener("contextmenu",K=>K.preventDefault()),addEventListener("mousemove",K=>{document.pointerLockElement===n&&S(K.movementX,K.movementY)}),addEventListener("resize",()=>{e.setSize(innerWidth,innerHeight),l.aspect=innerWidth/innerHeight,l.updateProjectionMatrix(),u.resize()});const C=K=>[K.x,K.y+K.eye,K.z],w=K=>{const M=Math.cos(K.pitch);return[-Math.sin(K.yaw)*M,Math.sin(K.pitch),-Math.cos(K.yaw)*M]};function _(K){if(!K)return"";if(K.kind==="static"){const M=f.C.prefabOf[K.id];return d.name(M?M.type==="portal"?"door":M.type==="window"?"glass":M.type:"wall")}return K.kind==="part"?d.name(f.sys.S.partKind.get(K.id)||"part"):d.L.t[K.kind]||K.kind}const A={frame:[],phys:[]},I=(K,M)=>{K.push(M),K.length>240&&K.shift()},L=K=>{if(!K.length)return 0;const M=K.slice().sort((R,z)=>R-z);return M[Math.floor(.95*(M.length-1))]};function F(K){if(!f)return;const{sys:M,pl:R}=f;E.press.forEach(pe=>{pe!=="fire"&&pe!=="rthrow"&&E.press.delete(pe)}),h.frame(E,S),d.noteOpen&&((E.press.has("e")||E.press.has("fire"))&&d.note(""),E.press.clear(),E.fire=!1),E.press.has("f")&&(g=g==="grip"?"cut":"grip",d.tool(g)),E.tool&&(g=E.tool,d.tool(g)),R.input.forward=E.fwd||0,R.input.strafe=E.strafe||0,R.input.jump=E.press.has("jump"),R.input.crouch=!!E.crouch,R.input.crawl=!!E.crawl,R.speed=E.run?5.2:3.2;const z=M.playerCol();Xl(R,z.col,K,z.extra,z.soft),(R.kx||R.kz)&&(R.x+=R.kx*K,R.z+=R.kz*K,R.kx*=Math.pow(.05,K),R.kz*=Math.pow(.05,K));const G=C(R),Y=w(R);if(p=M.aim(G,Y,g==="cut"?2.6:2.3),E.press.has("e")&&M.use(p)==="запись"){const me=f.C.prefabOf[p.id];d.note((f.room.texts[fa]||f.room.texts.ru)[me.text])}g==="grip"&&E.press.has("fire")&&M.grab(p);let Ee="";g==="cut"&&E.fire&&p&&(Ee=M.cut(p,K)),(E.press.has("throw")||E.press.has("rthrow"))&&M.S.held&&M.throwHeld(Y,E.press.has("rthrow")?Hg((performance.now()-v)/1e3):1),E.press.delete("fire"),E.press.delete("rthrow");const B=M.step(K,R);I(A.phys,B);const ce=p&&p.kind==="static"&&f.sys.S.doors.has(p.id)&&!f.sys.isOn(p.id);d.target(p,_(p),ce);let ye=0;if(Ee&&p){const pe=M.S;if(p.kind==="part"&&pe.tanks.has(p.id))ye=pe.tanks.get(p.id).heat/pe.tanks.get(p.id).fuse;else if(p.kind==="part"){const me=[...pe.joints.values()].filter(ze=>ze.a===p.id||ze.b===p.id);me.length&&(ye=(pe.cutProg.get(me[0].id)||0)/me[0].strength)}else if(p.kind==="cable")ye=(pe.cutProg.get("cable:"+p.id)||0)/.6;else if(p.kind==="static"&&pe.windows.has(p.id)){const me=pe.windows.get(p.id);ye=1-me.hp/me.strength}}d.bar(ye),d.flash(M.S.flash)}function k(K){if(!f)return;const{pl:M,view:R}=f,z=C(M);return Bi(z[0],z[1],z[2],l.position),Mr(z[2],l.quaternion).multiply(new zt().setFromEuler(new Wt(M.pitch,M.yaw,0,"YXZ"))),R.update(f.sys,K,z),e.info.reset(),u.render(),e.info.render}let te=0,N=0,J=0,se=0;function ne(K){if(N++,K-te<500)return;J=N*1e3/(K-te),N=0,te=K;const M=f.phys.stats(),R=f.view.stats(),z=performance.memory?Math.round(performance.memory.usedJSHeapSize/1048576)+" МБ":"н/д",G=`${f.room.id} · ${tr} · ${is}
кадр ${J.toFixed(0)} к/с, p95 ${L(A.frame).toFixed(1)} мс · физика p95 ${L(A.phys).toFixed(2)} мс
тела: не спят ${M.awake}, спят ${M.asleep} из ${M.total}
вызовы ${se}, треуг. ${R.tris}, память ${z}, геом. ${e.info.memory.geometries}, текст. ${e.info.memory.textures}`;d.fps(G),ri.dataset.roomFps=J.toFixed(1)}const ve=nn.get("src");f=await m(ve&&/^[a-z0-9_./-]+\.json$/i.test(ve)&&!ve.includes("..")?await(await fetch(ve,{cache:"no-store"})).json():await Lx(Cx)),d.note("");let re=performance.now(),fe=0;if(!da){const K=M=>{const R=Math.min(.05,(M-re)/1e3);re=M;const z=performance.now();F(R),fe+=R;const G=k(fe);se=G?G.calls:0,I(A.frame,performance.now()-z),oc&&ne(M),requestAnimationFrame(K)};requestAnimationFrame(K)}const de=1/60,Ie={get id(){return f&&f.room.id},state(){const K=f.sys.S;return{id:f.room.id,phys:tr,tier:is,t:+K.t.toFixed(2),player:{x:+f.pl.x.toFixed(3),y:+f.pl.y.toFixed(3),z:+f.pl.z.toFixed(3),yaw:+f.pl.yaw.toFixed(3),pitch:+f.pl.pitch.toFixed(3)},tool:g,held:K.held,target:p&&{kind:p.kind,id:p.id},lit:f.C.lights.map(M=>[M.id,f.sys.isOn(M.id)]),joints:[...K.joints.keys()],cables:[...K.cablesCut],windows:[...K.windows].map(([M,R])=>[M,R.broken]),p:+K.p.toFixed(3),doors:[...K.doors].map(([M,R])=>[M,+R.open.toFixed(2)]),panels:f.C.panels.map(M=>[M.id,f.sys.panels.view(M.id).plate]),burned:K.burned,ejected:K.ejected,deaths:K.deaths,events:K.events.slice(-40),bodies:f.phys.stats()}},put(K,M){const R=f.pl;if(R.x=K[0],R.z=K[1],R.y=0,R.vy=0,M){const z=C(R),G=[M[0]-z[0],M[1]-z[1],M[2]-z[2]];R.yaw=Math.atan2(-G[0],-G[2]),R.pitch=Math.atan2(G[1],Math.hypot(G[0],G[2]))}return Ie.aim()},aim(){return p=f.sys.aim(C(f.pl),w(f.pl),g==="cut"?2.6:2.3),p&&{kind:p.kind,id:p.id,t:+p.t.toFixed(2),i:p.i}},tool(K){return g=K,d.tool(K),g},act(K,M=0){const R=()=>C(f.pl),z=()=>w(f.pl);if(K==="cut"){g="cut";let G=0;for(let Y=0;Y<Math.round(M/de);Y++)p=f.sys.aim(R(),z(),2.6),p&&(f.sys.cut(p,de),G++),f.sys.step(de,f.pl);return G}return K==="grab"?(g="grip",p=f.sys.aim(R(),z(),2.3),f.sys.grab(p)):K==="use"?(p=f.sys.aim(R(),z(),2.3),f.sys.use(p)):K==="throw"?f.sys.throwHeld(z(),M||1):null},advance(K){const M=Math.round(K/1e3/de);for(let R=0;R<M;R++){f.pl.input.forward=0,f.pl.input.strafe=0,f.pl.input.jump=!1;const z=f.sys.playerCol();Xl(f.pl,z.col,de,z.extra,z.soft),f.sys.step(de,f.pl)}return fe+=M*de,M},frame(){const K=k(fe);return{calls:K.calls,triangles:K.triangles}},idFrame(){const K=f.view.keyMeshes(),M=[],R=[...K.keys()],z=new Map;r.traverse(me=>{(me.isMesh||me.isInstancedMesh)&&M.push([me,me.material,me.visible])});const G=new Fi({color:0});for(const[me]of M)me.material=G;R.forEach((me,ze)=>{const We=new Ve().setHSL(ze/R.length,1,.5),Ke=new Fi({color:We});z.set(me,We);for(const mt of K.get(me))mt.visible&&(mt.material=Ke)});const Y=r.fog;r.fog=null;const Ee=new ke;e.getDrawingBufferSize(Ee);const _e=new Qt(Math.max(1,Ee.x>>1),Math.max(1,Ee.y>>1));e.setRenderTarget(_e),e.setClearColor(0,1),e.clear();const B=C(f.pl);Bi(B[0],B[1],B[2],l.position),Mr(B[2],l.quaternion).multiply(new zt().setFromEuler(new Wt(f.pl.pitch,f.pl.yaw,0,"YXZ"))),f.view.update(f.sys,fe,B);for(const[me]of M)me.isMesh&&me.material===G&&me.material.transparent&&(me.visible=!1);e.render(r,l);const ce=new Uint8Array(_e.width*_e.height*4);e.readRenderTargetPixels(_e,0,0,_e.width,_e.height,ce),e.setRenderTarget(null),_e.dispose(),r.fog=Y;for(const[me,ze,We]of M)me.material=ze,me.visible=We;const ye=Object.fromEntries(R.map(me=>[me,0])),pe=R.map(me=>z.get(me)).map(me=>[me.r*255,me.g*255,me.b*255]);for(let me=0;me<ce.length;me+=4){if(ce[me]+ce[me+1]+ce[me+2]<30)continue;let ze=-1,We=1e9;pe.forEach((Ke,mt)=>{const ft=Math.abs(Ke[0]-ce[me])+Math.abs(Ke[1]-ce[me+1])+Math.abs(Ke[2]-ce[me+2]);ft<We&&(We=ft,ze=mt)}),ze>=0&&We<60&&ye[R[ze]]++}return{px:ye,total:_e.width*_e.height}},passCalls(){k(fe),e.info.reset(),e.setRenderTarget(null);const K=[e.shadowMap.autoUpdate,e.shadowMap.needsUpdate];e.shadowMap.autoUpdate=!1,e.shadowMap.needsUpdate=!1;for(const R of f.view.pool.spots)R.shadow.needsUpdate=!1;e.render(r,l),[e.shadowMap.autoUpdate,e.shadowMap.needsUpdate]=K;const M={calls:e.info.render.calls,triangles:e.info.render.triangles};return k(fe),M},stats(){const K=f.phys.stats(),M=f.view.stats();return{phys:tr,tier:is,bodies:K,tris:M.tris,meshes:M.meshes,buildMs:+f.buildMs.toFixed(1),geometries:e.info.memory.geometries,textures:e.info.memory.textures,heapMB:performance.memory?+(performance.memory.usedJSHeapSize/1048576).toFixed(1):null,physP95:+L(A.phys).toFixed(3),frameP95:+L(A.frame).toFixed(2),fps:J?+J.toFixed(1):null}},nan(){const K=[];return r.updateMatrixWorld(!0),r.traverse(M=>{M.matrixWorld.elements.some(R=>!Number.isFinite(R))&&K.push(M.type+":"+(M.userData.part||M.userData.door||M.userData.hatch||M.name||""))}),{objects:K.slice(0,20),cam:l.matrixWorld.elements.every(Number.isFinite),lights:f.view.pool.spots.concat(f.view.pool.points).map(M=>[+M.intensity.toFixed(2),M.position.toArray().every(Number.isFinite)])}},gl(){return{lost:t.lost,restored:t.restored,programs:(e.info.programs||[]).length,shadows:f.view.pool.spots.map(K=>K.shadow.needsUpdate),calls:se}},perfReset(){A.frame.length=0,A.phys.length=0},perfRun(K=120){const M=[],R=[];for(let z=0;z<K;z++){const G=performance.now();F(de),R.push(A.phys[A.phys.length-1]),fe+=de;const Y=k(fe);e.getContext().finish&&e.getContext().finish(),M.push(performance.now()-G),se=Y.calls}return{frameP95:+L(M).toFixed(2),frameP50:+M.slice().sort((z,G)=>z-G)[Math.floor(M.length/2)].toFixed(2),physP95:+L(R).toFixed(3),calls:se}},snapshot(){return JSON.stringify(f.sys.snapshot())},async reload(K){const M=f.room,R={x:f.pl.x,z:f.pl.z,yaw:f.pl.yaw,pitch:f.pl.pitch},z=performance.now();x();const G=performance.now();return f=await m(M,K?JSON.parse(K):null),Object.assign(f.pl,R),k(fe),{unloadMs:+(G-z).toFixed(1),loadMs:+(performance.now()-G).toFixed(1)}},hud:()=>({target:document.getElementById("rtgt").textContent,note:document.getElementById("rnote").hidden?"":document.getElementById("rnotet").textContent}),sys:()=>f.sys};window.__room=Ie,k(0),ri.dataset.room="ready"}Dx().catch(Px);
