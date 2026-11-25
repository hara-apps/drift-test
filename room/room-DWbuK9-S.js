(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const tf="modulepreload",nf=function(n,e){return new URL(n,e).href},ol={},Va=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let l=function(f){return Promise.all(f.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),c=o?.nonce||o?.getAttribute("nonce");s=l(t.map(f=>{if(f=nf(f,i),f in ol)return;ol[f]=!0;const u=f.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(i)for(let p=a.length-1;p>=0;p--){const _=a[p];if(_.href===f&&(!u||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${d}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":tf,u||(h.as="script"),h.crossOrigin="",h.href=f,c&&h.setAttribute("nonce",c),document.head.appendChild(h),u)return new Promise((p,_)=>{h.addEventListener("load",p),h.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${f}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})};const Fo="187",sf=0,ll=1,rf=2,ks=1,af=2,Us=3,Ui=0,ln=1,jn=2,as=0,Bs=1,cl=2,ul=3,fl=4,of=5,is=100,lf=101,cf=102,uf=103,ff=104,df=200,hf=201,pf=202,mf=203,$c=204,Yc=205,gf=206,xf=207,_f=208,vf=209,yf=210,Mf=211,bf=212,Sf=213,wf=214,Wa=0,Xa=1,qa=2,Xs=3,$a=4,Ya=5,Ka=6,Ja=7,zo=0,Ef=1,Tf=2,Vn=0,Kc=1,Jc=2,Zc=3,Qc=4,jc=5,eu=6,tu=7,nu=300,cs=301,qs=302,ra=303,aa=304,$s=1e3,ti=1001,Za=1002,Yt=1003,Af=1004,rr=1005,dn=1006,oa=1007,ni=1008,fn=1009,iu=1010,su=1011,Ys=1012,Oo=1013,Wn=1014,Dn=1015,Nn=1016,ko=1017,Bo=1018,us=1020,ru=35902,au=35899,ou=1021,lu=1022,Hn=1023,yi=1026,_i=1027,Ho=1028,Go=1029,Fi=1030,Vo=1031,Wo=1033,Ur=33776,Fr=33777,zr=33778,Or=33779,Qa=35840,ja=35841,eo=35842,to=35843,no=36196,io=37492,so=37496,ro=37488,ao=37489,qr=37490,oo=37491,lo=37808,co=37809,uo=37810,fo=37811,ho=37812,po=37813,mo=37814,go=37815,xo=37816,_o=37817,vo=37818,yo=37819,Mo=37820,bo=37821,So=36492,wo=36494,Eo=36495,To=36283,Ao=36284,$r=36285,Ro=36286,Rf=3200,Yr=0,Cf=1,ei="",cn="srgb",Kr="srgb-linear",Jr="linear",vt="srgb",la=7680,Pf=519,Lf=512,Df=513,If=514,cu=515,Nf=516,Uf=517,uu=518,fu=519,Ff=35044,dl="300 es",In=2e3,Ks=2001;function zf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Zr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Of(){const n=Zr("canvas");return n.style.display="block",n}const hl={};function pl(...n){const e="THREE."+n.shift();console.log(e,...n)}function du(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Qe(...n){n=du(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function gt(...n){n=du(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function kr(...n){const e=n.join(" ");e in hl||(hl[e]=!0,Qe(...n))}function kf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Bf={[Wa]:Wa,[qa]:Ka,[$a]:$a,[Xs]:Ya,[Xa]:Xa,[Ka]:qa,[Ja]:Ja,[Ya]:Xs};class ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ca=Math.PI/180,Qr=180/Math.PI;function er(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function ct(n,e,t){return Math.max(e,Math.min(t,n))}function Hf(n,e){return(n%e+e)%e}function ua(n,e,t){return(1-t)*n+t*e}function Gf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Xo(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Vf(n,e){if(e.constructor===Float32Array)return n;const t=Xo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Wf(n,e){if(e.constructor===Float32Array)return n;const t=Xo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}class Ze{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],f=i[s+2],u=i[s+3],d=r[a+0],h=r[a+1],p=r[a+2],_=r[a+3];if(u!==_||c!==d||l!==h||f!==p){let g=c*d+l*h+f*p+u*_;g<0&&(d=-d,h=-h,p=-p,_=-_,g=-g);let m=1-o;if(g<.9995){const v=Math.acos(g),T=Math.sin(v);m=Math.sin(m*v)/T,o=Math.sin(o*v)/T,c=c*m+d*o,l=l*m+h*o,f=f*m+p*o,u=u*m+_*o}else{c=c*m+d*o,l=l*m+h*o,f=f*m+p*o,u=u*m+_*o;const v=1/Math.sqrt(c*c+l*l+f*f+u*u);c*=v,l*=v,f*=v,u*=v}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],f=i[s+3],u=r[a],d=r[a+1],h=r[a+2],p=r[a+3];return e[t]=o*p+f*u+c*h-l*d,e[t+1]=c*p+f*d+l*u-o*h,e[t+2]=l*p+f*h+o*d-c*u,e[t+3]=f*p-o*u-c*d-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),f=o(s/2),u=o(r/2),d=c(i/2),h=c(s/2),p=c(r/2);switch(a){case"XYZ":this._x=d*f*u+l*h*p,this._y=l*h*u-d*f*p,this._z=l*f*p+d*h*u,this._w=l*f*u-d*h*p;break;case"YXZ":this._x=d*f*u+l*h*p,this._y=l*h*u-d*f*p,this._z=l*f*p-d*h*u,this._w=l*f*u+d*h*p;break;case"ZXY":this._x=d*f*u-l*h*p,this._y=l*h*u+d*f*p,this._z=l*f*p+d*h*u,this._w=l*f*u-d*h*p;break;case"ZYX":this._x=d*f*u-l*h*p,this._y=l*h*u+d*f*p,this._z=l*f*p-d*h*u,this._w=l*f*u+d*h*p;break;case"YZX":this._x=d*f*u+l*h*p,this._y=l*h*u+d*f*p,this._z=l*f*p-d*h*u,this._w=l*f*u-d*h*p;break;case"XZY":this._x=d*f*u-l*h*p,this._y=l*h*u-d*f*p,this._z=l*f*p+d*h*u,this._w=l*f*u+d*h*p;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],f=t[6],u=t[10],d=i+o+u;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(f-c)*h,this._y=(r-l)*h,this._z=(a-s)*h}else if(i>o&&i>u){const h=2*Math.sqrt(1+i-o-u);this._w=(f-c)/h,this._x=.25*h,this._y=(s+a)/h,this._z=(r+l)/h}else if(o>u){const h=2*Math.sqrt(1+o-i-u);this._w=(r-l)/h,this._x=(s+a)/h,this._y=.25*h,this._z=(c+f)/h}else{const h=2*Math.sqrt(1+u-i-o);this._w=(a-s)/h,this._x=(r+l)/h,this._y=(c+f)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,f=t._w;return this._x=i*f+a*o+s*l-r*c,this._y=s*f+a*c+r*o-i*l,this._z=r*f+a*l+i*c-s*o,this._w=a*f-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),f=Math.sin(l);c=Math.sin(c*l)/f,t=Math.sin(t*l)/f,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ml.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ml.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),f=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+c*l+a*u-o*f,this.y=i+c*f+o*l-r*u,this.z=s+c*u+r*f-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fa.copy(this).projectOnVector(e),this.sub(fa)}reflect(e){return this.sub(fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fa=new K,ml=new Kt;class st{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){const f=this.elements;return f[0]=e,f[1]=s,f[2]=o,f[3]=t,f[4]=r,f[5]=c,f[6]=i,f[7]=a,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],f=i[4],u=i[7],d=i[2],h=i[5],p=i[8],_=s[0],g=s[3],m=s[6],v=s[1],T=s[4],M=s[7],A=s[2],S=s[5],y=s[8];return r[0]=a*_+o*v+c*A,r[3]=a*g+o*T+c*S,r[6]=a*m+o*M+c*y,r[1]=l*_+f*v+u*A,r[4]=l*g+f*T+u*S,r[7]=l*m+f*M+u*y,r[2]=d*_+h*v+p*A,r[5]=d*g+h*T+p*S,r[8]=d*m+h*M+p*y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8];return t*a*f-t*o*l-i*r*f+i*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],u=f*a-o*l,d=o*c-f*r,h=l*r-a*c,p=t*u+i*d+s*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=u*_,e[1]=(s*l-f*i)*_,e[2]=(o*i-s*a)*_,e[3]=d*_,e[4]=(f*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=h*_,e[7]=(i*c-l*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return kr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(da.makeScale(e,t)),this}rotate(e){return kr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(da.makeRotation(-e)),this}translate(e,t){return kr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(da.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const da=new st,gl=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xl=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xf(){const n={enabled:!0,workingColorSpace:Kr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===vt&&(s.r=si(s.r),s.g=si(s.g),s.b=si(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===vt&&(s.r=os(s.r),s.g=os(s.g),s.b=os(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ei?Jr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Kr]:{primaries:e,whitePoint:i,transfer:Jr,toXYZ:gl,fromXYZ:xl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:gl,fromXYZ:xl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),n}const dt=Xf();function si(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function os(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Hi;class qf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Hi===void 0&&(Hi=Zr("canvas")),Hi.width=e.width,Hi.height=e.height;const s=Hi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Hi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=si(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(si(t[i]/255)*255):t[i]=si(t[i]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $f=0;class qo{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=er(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ha(s[a].image)):r.push(ha(s[a]))}else r=ha(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ha(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?qf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}let Yf=0;const pa=new K;class nn extends ki{constructor(e=nn.DEFAULT_IMAGE,t=nn.DEFAULT_MAPPING,i=ti,s=ti,r=dn,a=ni,o=Hn,c=fn,l=nn.DEFAULT_ANISOTROPY,f=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=er(),this.name="",this.source=new qo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(pa).x}get height(){return this.source.getSize(pa).y}get depth(){return this.source.getSize(pa).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $s:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case Za:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $s:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case Za:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=nu;nn.DEFAULT_ANISOTROPY=1;class At{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],f=c[4],u=c[8],d=c[1],h=c[5],p=c[9],_=c[2],g=c[6],m=c[10];if(Math.abs(f-d)<.01&&Math.abs(u-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(f+d)<.1&&Math.abs(u+_)<.1&&Math.abs(p+g)<.1&&Math.abs(l+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,M=(h+1)/2,A=(m+1)/2,S=(f+d)/4,y=(u+_)/4,w=(p+g)/4;return T>M&&T>A?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=S/i,r=y/i):M>A?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=S/s,r=w/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=y/r,s=w/r),this.set(i,s,r,t),this}let v=Math.sqrt((g-p)*(g-p)+(u-_)*(u-_)+(d-f)*(d-f));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(u-_)/v,this.z=(d-f)/v,this.w=Math.acos((l+h+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kf extends ki{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];const s=i.count;for(let r=0;r<s;r++)this.textures[r]=new nn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new qo(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hn extends Kf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class hu extends nn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jf extends nn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class xt{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,a,o,c,l,f,u,d,h,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,f,u,d,h,p,_,g)}set(e,t,i,s,r,a,o,c,l,f,u,d,h,p,_,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=f,m[10]=u,m[14]=d,m[3]=h,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Gi.setFromMatrixColumn(e,0).length(),r=1/Gi.setFromMatrixColumn(e,1).length(),a=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),f=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*f,h=a*u,p=o*f,_=o*u;t[0]=c*f,t[4]=-c*u,t[8]=l,t[1]=h+p*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=p+h*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*f,h=c*u,p=l*f,_=l*u;t[0]=d+_*o,t[4]=p*o-h,t[8]=a*l,t[1]=a*u,t[5]=a*f,t[9]=-o,t[2]=h*o-p,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*f,h=c*u,p=l*f,_=l*u;t[0]=d-_*o,t[4]=-a*u,t[8]=p+h*o,t[1]=h+p*o,t[5]=a*f,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*f,h=a*u,p=o*f,_=o*u;t[0]=c*f,t[4]=p*l-h,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=h*l-p,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,h=a*l,p=o*c,_=o*l;t[0]=c*f,t[4]=_-d*u,t[8]=p*u+h,t[1]=u,t[5]=a*f,t[9]=-o*f,t[2]=-l*f,t[6]=h*u+p,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*c,h=a*l,p=o*c,_=o*l;t[0]=c*f,t[4]=-u,t[8]=l*f,t[1]=d*u+_,t[5]=a*f,t[9]=h*u-p,t[2]=p*u-h,t[6]=o*f,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zf,e,Qf)}lookAt(e,t,i){const s=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),ui.crossVectors(i,pn),ui.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),ui.crossVectors(i,pn)),ui.normalize(),ar.crossVectors(pn,ui),s[0]=ui.x,s[4]=ar.x,s[8]=pn.x,s[1]=ui.y,s[5]=ar.y,s[9]=pn.y,s[2]=ui.z,s[6]=ar.z,s[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],f=i[1],u=i[5],d=i[9],h=i[13],p=i[2],_=i[6],g=i[10],m=i[14],v=i[3],T=i[7],M=i[11],A=i[15],S=s[0],y=s[4],w=s[8],N=s[12],F=s[1],k=s[5],G=s[9],ce=s[13],O=s[2],ne=s[6],ue=s[10],re=s[14],Ee=s[3],he=s[7],_e=s[11],Te=s[15];return r[0]=a*S+o*F+c*O+l*Ee,r[4]=a*y+o*k+c*ne+l*he,r[8]=a*w+o*G+c*ue+l*_e,r[12]=a*N+o*ce+c*re+l*Te,r[1]=f*S+u*F+d*O+h*Ee,r[5]=f*y+u*k+d*ne+h*he,r[9]=f*w+u*G+d*ue+h*_e,r[13]=f*N+u*ce+d*re+h*Te,r[2]=p*S+_*F+g*O+m*Ee,r[6]=p*y+_*k+g*ne+m*he,r[10]=p*w+_*G+g*ue+m*_e,r[14]=p*N+_*ce+g*re+m*Te,r[3]=v*S+T*F+M*O+A*Ee,r[7]=v*y+T*k+M*ne+A*he,r[11]=v*w+T*G+M*ue+A*_e,r[15]=v*N+T*ce+M*re+A*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],f=e[2],u=e[6],d=e[10],h=e[14],p=e[3],_=e[7],g=e[11],m=e[15],v=c*h-l*d,T=o*h-l*u,M=o*d-c*u,A=a*h-l*f,S=a*d-c*f,y=a*u-o*f;return t*(_*v-g*T+m*M)-i*(p*v-g*A+m*S)+s*(p*T-_*A+m*y)-r*(p*M-_*S+g*y)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],f=e[10];return t*(a*f-o*l)-i*(r*f-o*c)+s*(r*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],u=e[9],d=e[10],h=e[11],p=e[12],_=e[13],g=e[14],m=e[15],v=t*o-i*a,T=t*c-s*a,M=t*l-r*a,A=i*c-s*o,S=i*l-r*o,y=s*l-r*c,w=f*_-u*p,N=f*g-d*p,F=f*m-h*p,k=u*g-d*_,G=u*m-h*_,ce=d*m-h*g,O=v*ce-T*G+M*k+A*F-S*N+y*w;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ne=1/O;return e[0]=(o*ce-c*G+l*k)*ne,e[1]=(s*G-i*ce-r*k)*ne,e[2]=(_*y-g*S+m*A)*ne,e[3]=(d*S-u*y-h*A)*ne,e[4]=(c*F-a*ce-l*N)*ne,e[5]=(t*ce-s*F+r*N)*ne,e[6]=(g*M-p*y-m*T)*ne,e[7]=(f*y-d*M+h*T)*ne,e[8]=(a*G-o*F+l*w)*ne,e[9]=(i*F-t*G-r*w)*ne,e[10]=(p*S-_*M+m*v)*ne,e[11]=(u*M-f*S-h*v)*ne,e[12]=(o*N-a*k-c*w)*ne,e[13]=(t*k-i*N+s*w)*ne,e[14]=(_*T-p*A-g*v)*ne,e[15]=(f*A-u*T+d*v)*ne,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,f=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,f*o+i,f*c-s*a,0,l*c-s*o,f*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,f=a+a,u=o+o,d=r*l,h=r*f,p=r*u,_=a*f,g=a*u,m=o*u,v=c*l,T=c*f,M=c*u,A=i.x,S=i.y,y=i.z;return s[0]=(1-(_+m))*A,s[1]=(h+M)*A,s[2]=(p-T)*A,s[3]=0,s[4]=(h-M)*S,s[5]=(1-(d+m))*S,s[6]=(g+v)*S,s[7]=0,s[8]=(p+T)*y,s[9]=(g-v)*y,s[10]=(1-(d+_))*y,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Gi.set(s[0],s[1],s[2]).length();const o=Gi.set(s[4],s[5],s[6]).length(),c=Gi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Tn.copy(this);const l=1/a,f=1/o,u=1/c;return Tn.elements[0]*=l,Tn.elements[1]*=l,Tn.elements[2]*=l,Tn.elements[4]*=f,Tn.elements[5]*=f,Tn.elements[6]*=f,Tn.elements[8]*=u,Tn.elements[9]*=u,Tn.elements[10]*=u,t.setFromRotationMatrix(Tn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,s,r,a,o=In,c=!1){const l=this.elements,f=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),h=(i+s)/(i-s);let p,_;if(c)p=r/(a-r),_=a*r/(a-r);else if(o===In)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ks)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=In,c=!1){const l=this.elements,f=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),h=-(i+s)/(i-s);let p,_;if(c)p=1/(a-r),_=a/(a-r);else if(o===In)p=-2/(a-r),_=-(a+r)/(a-r);else if(o===Ks)p=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Gi=new K,Tn=new xt,Zf=new K(0,0,0),Qf=new K(1,1,1),ui=new K,ar=new K,pn=new K,_l=new xt,vl=new Kt;class tn{constructor(e=0,t=0,i=0,s=tn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],f=s[9],u=s[2],d=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,h),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,h),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return _l.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_l,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vl.setFromEuler(this),this.setFromQuaternion(vl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tn.DEFAULT_ORDER="XYZ";class pu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jf=0;const yl=new K,Vi=new Kt,$n=new xt,or=new K,xs=new K,ed=new K,td=new Kt,Ml=new K(1,0,0),bl=new K(0,1,0),Sl=new K(0,0,1),wl={type:"added"},nd={type:"removed"},Wi={type:"childadded",child:null},ma={type:"childremoved",child:null};class Ut extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new K,t=new tn,i=new Kt,s=new K(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new st}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.premultiply(Vi),this}rotateX(e){return this.rotateOnAxis(Ml,e)}rotateY(e){return this.rotateOnAxis(bl,e)}rotateZ(e){return this.rotateOnAxis(Sl,e)}translateOnAxis(e,t){return yl.copy(e).applyQuaternion(this.quaternion),this.position.add(yl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ml,e)}translateY(e){return this.translateOnAxis(bl,e)}translateZ(e){return this.translateOnAxis(Sl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?or.copy(e):or.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(xs,or,this.up):$n.lookAt(or,xs,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),Vi.setFromRotationMatrix($n),this.quaternion.premultiply(Vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(gt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wl),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null):gt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nd),ma.child=e,this.dispatchEvent(ma),ma.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wl),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,e,ed),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,td,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),f=a(e.images),u=a(e.shapes),d=a(e.skeletons),h=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),f.length>0&&(i.images=f),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),p.length>0&&(i.nodes=p)}return i.object=s,i;function a(o){const c=[];for(const l in o){const f=o[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ut.DEFAULT_UP=new K(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ss extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const id={type:"move"};class ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),m=this._getHandJoint(l,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const f=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=f.position.distanceTo(u.position),h=.02,p=.005;l.inputState.pinching&&d>h+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=h-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(id)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ss;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},lr={h:0,s:0,l:0};function xa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,dt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=dt.workingColorSpace){if(e=Hf(e,1),t=ct(t,0,1),i=ct(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=xa(a,r,e+1/3),this.g=xa(a,r,e),this.b=xa(a,r,e-1/3)}return dt.colorSpaceToWorking(this,s),this}setStyle(e,t=cn){function i(r){r!==void 0&&parseFloat(r)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){const i=mu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return dt.workingToColorSpace(jt.copy(this),e),Math.round(ct(jt.r*255,0,255))*65536+Math.round(ct(jt.g*255,0,255))*256+Math.round(ct(jt.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(jt.copy(this),t);const i=jt.r,s=jt.g,r=jt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const f=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=f<=.5?u/(a+o):u/(2-a-o),a){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=cn){dt.workingToColorSpace(jt.copy(this),e);const t=jt.r,i=jt.g,s=jt.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+t,fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(fi),e.getHSL(lr);const i=ua(fi.h,lr.h,t),s=ua(fi.s,lr.s,t),r=ua(fi.l,lr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new je;je.NAMES=mu;class $o{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new je(e),this.density=t}clone(){return new $o(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class gu extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const An=new K,Yn=new K,_a=new K,Kn=new K,Xi=new K,qi=new K,El=new K,va=new K,ya=new K,Ma=new K,ba=new At,Sa=new At,wa=new At;class Ln{constructor(e=new K,t=new K,i=new K){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),An.subVectors(e,t),s.cross(An);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){An.subVectors(s,t),Yn.subVectors(i,t),_a.subVectors(e,t);const a=An.dot(An),o=An.dot(Yn),c=An.dot(_a),l=Yn.dot(Yn),f=Yn.dot(_a),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,h=(l*c-o*f)*d,p=(a*f-o*c)*d;return r.set(1-h-p,p,h)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,Kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Kn.x),c.addScaledVector(a,Kn.y),c.addScaledVector(o,Kn.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return ba.setScalar(0),Sa.setScalar(0),wa.setScalar(0),ba.fromBufferAttribute(e,t),Sa.fromBufferAttribute(e,i),wa.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ba,r.x),a.addScaledVector(Sa,r.y),a.addScaledVector(wa,r.z),a}static isFrontFacing(e,t,i,s){return An.subVectors(i,t),Yn.subVectors(e,t),An.cross(Yn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),An.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Ln.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Xi.subVectors(s,i),qi.subVectors(r,i),va.subVectors(e,i);const c=Xi.dot(va),l=qi.dot(va);if(c<=0&&l<=0)return t.copy(i);ya.subVectors(e,s);const f=Xi.dot(ya),u=qi.dot(ya);if(f>=0&&u<=f)return t.copy(s);const d=c*u-f*l;if(d<=0&&c>=0&&f<=0&&c-f>0)return a=c/(c-f),t.copy(i).addScaledVector(Xi,a);Ma.subVectors(e,r);const h=Xi.dot(Ma),p=qi.dot(Ma);if(p>=0&&h<=p)return t.copy(r);const _=h*l-c*p;if(_<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(i).addScaledVector(qi,o);const g=f*p-h*u;if(g<=0&&u-f>=0&&h-p>=0)return El.subVectors(r,s),o=(u-f)/(u-f+(h-p)),t.copy(s).addScaledVector(El,o);const m=1/(g+_+d);return a=_*m,o=d*m,t.copy(i).addScaledVector(Xi,a).addScaledVector(qi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Bi{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Rn):Rn.fromBufferAttribute(r,a),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),cr.copy(i.boundingBox)),cr.applyMatrix4(e.matrixWorld),this.union(cr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_s),ur.subVectors(this.max,_s),$i.subVectors(e.a,_s),Yi.subVectors(e.b,_s),Ki.subVectors(e.c,_s),di.subVectors(Yi,$i),hi.subVectors(Ki,Yi),Ei.subVectors($i,Ki);let t=[0,-di.z,di.y,0,-hi.z,hi.y,0,-Ei.z,Ei.y,di.z,0,-di.x,hi.z,0,-hi.x,Ei.z,0,-Ei.x,-di.y,di.x,0,-hi.y,hi.x,0,-Ei.y,Ei.x,0];return!Ea(t,$i,Yi,Ki,ur)||(t=[1,0,0,0,1,0,0,0,1],!Ea(t,$i,Yi,Ki,ur))?!1:(fr.crossVectors(di,hi),t=[fr.x,fr.y,fr.z],Ea(t,$i,Yi,Ki,ur))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Jn=[new K,new K,new K,new K,new K,new K,new K,new K],Rn=new K,cr=new Bi,$i=new K,Yi=new K,Ki=new K,di=new K,hi=new K,Ei=new K,_s=new K,ur=new K,fr=new K,Ti=new K;function Ea(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ti.fromArray(n,r);const o=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),c=e.dot(Ti),l=t.dot(Ti),f=i.dot(Ti);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>o)return!1}return!0}const Dt=new K,dr=new Ze;let sd=0;class an extends ki{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ff,this.updateRanges=[],this.gpuType=Dn,this.version=0,this._normalizationScale=e!==void 0?Xo(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix3(e),this.setXY(t,dr.x,dr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Vf(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Wf(e,this.array)}}class xu extends an{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class _u extends an{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class at extends an{constructor(e,t,i){super(new Float32Array(e),t,i)}}const rd=new Bi,vs=new K,Ta=new K;class tr{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):rd.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vs.subVectors(e,this.center);const t=vs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(vs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ta.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vs.copy(e.center).add(Ta)),this.expandByPoint(vs.copy(e.center).sub(Ta))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ad=0;const yn=new xt,Aa=new Ut,Ji=new K,mn=new Bi,ys=new Bi,Vt=new K;class $t extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=er(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zf(e)?_u:xu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new st().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,i){return yn.makeTranslation(e,t,i),this.applyMatrix4(yn),this}scale(e,t,i){return yn.makeScale(e,t,i),this.applyMatrix4(yn),this}lookAt(e){return Aa.lookAt(e),Aa.updateMatrix(),this.applyMatrix4(Aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new at(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(mn.min,ys.min),mn.expandByPoint(Vt),Vt.addVectors(mn.max,ys.max),mn.expandByPoint(Vt)):(mn.expandByPoint(ys.min),mn.expandByPoint(ys.max))}mn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Vt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,f=o.count;l<f;l++)Vt.fromBufferAttribute(o,l),c&&(Ji.fromBufferAttribute(e,l),Vt.add(Ji)),s=Math.max(s,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new an(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[],l=new Uint8Array(i.count);for(let N=0;N<i.count;N++)o[N]=new K,c[N]=new K;const f=new K,u=new K,d=new K,h=new Ze,p=new Ze,_=new Ze,g=new K,m=new K;function v(N,F,k){l[N]=l[F]=l[k]=1,f.fromBufferAttribute(i,N),u.fromBufferAttribute(i,F),d.fromBufferAttribute(i,k),h.fromBufferAttribute(r,N),p.fromBufferAttribute(r,F),_.fromBufferAttribute(r,k),u.sub(f),d.sub(f),p.sub(h),_.sub(h);const G=1/(p.x*_.y-_.x*p.y);isFinite(G)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(G),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(G),o[N].add(g),o[F].add(g),o[k].add(g),c[N].add(m),c[F].add(m),c[k].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let N=0,F=T.length;N<F;++N){const k=T[N],G=k.start,ce=k.count;for(let O=G,ne=G+ce;O<ne;O+=3)v(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const M=new K,A=new K,S=new K,y=new K;function w(N){S.fromBufferAttribute(s,N),y.copy(S);const F=o[N];M.copy(F),M.sub(S.multiplyScalar(S.dot(F))).normalize(),A.crossVectors(y,F);const G=A.dot(c[N])<0?-1:1;a.setXYZW(N,M.x,M.y,M.z,G)}for(let N=0,F=i.count;N<F;++N)l[N]&&w(N);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const s=new K,r=new K,a=new K,o=new K,c=new K,l=new K,f=new K,u=new K;if(e)for(let d=0,h=e.count;d<h;d+=3){const p=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),f.subVectors(a,r),u.subVectors(s,r),f.cross(u),o.fromBufferAttribute(i,p),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),o.add(f),c.add(f),l.add(f),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,h=t.count;d<h;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),f.subVectors(a,r),u.subVectors(s,r),f.cross(u),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,c){const l=o.array,f=o.itemSize,u=o.normalized,d=new l.constructor(c.length*f);let h=0,p=0;for(let _=0,g=c.length;_<g;_++){o.isInterleavedBufferAttribute?h=c[_]*o.data.stride+o.offset:h=c[_]*f;for(let m=0;m<f;m++)d[p++]=l[h++]}return new an(d,f,u)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $t,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,i);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let f=0,u=l.length;f<u;f++){const d=l[f],h=e(d,i);c.push(h)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let u=0,d=l.length;u<d;u++){const h=l[u];f.push(h.toJSON(e.data))}f.length>0&&(s[c]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const f=s[l];this.setAttribute(l,f.clone(t))}const r=e.morphAttributes;for(const l in r){const f=[],u=r[l];for(let d=0,h=u.length;d<h;d++)f.push(u[d].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,f=a.length;l<f;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ra=new K,od=new K,ld=new st;class gi{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ra.subVectors(i,t).cross(od.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Ra),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ld.getNormalMatrix(e),s=this.coplanarPoint(Ra).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let cd=0;class ps extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=er(),this.name="",this.type="Material",this.blending=Bs,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$c,this.blendDst=Yc,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=la,this.stencilZFail=la,this.stencilZPass=la,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new gi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ze().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ze().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Zn=new K,Ca=new K,hr=new K,pr=new K;class ud{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,t),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ca.copy(e).add(t).multiplyScalar(.5),hr.copy(t).sub(e).normalize(),pr.copy(this.origin).sub(Ca);const r=e.distanceTo(t)*.5,a=-this.direction.dot(hr),o=pr.dot(this.direction),c=-pr.dot(hr),l=pr.lengthSq(),f=Math.abs(1-a*a);let u,d,h,p;if(f>0)if(u=a*c-o,d=a*o-c,p=r*f,u>=0)if(d>=-p)if(d<=p){const _=1/f;u*=_,d*=_,h=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),h=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),h=-u*u+d*(d+2*c)+l;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),h=-u*u+d*(d+2*c)+l):d<=p?(u=0,d=Math.min(Math.max(-r,-c),r),h=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),h=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),h=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ca).addScaledVector(hr,d),h}intersectSphere(e,t){if(e.radius<0)return null;Zn.subVectors(e.center,this.origin);const i=Zn.dot(this.direction),s=Zn.dot(Zn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c;const l=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),f>=0?(r=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(r=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,i,s,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,f=o.z,u=e.x-a.x,d=e.y-a.y,h=e.z-a.z,p=t.x-a.x,_=t.y-a.y,g=t.z-a.z,m=i.x-a.x,v=i.y-a.y,T=i.z-a.z,M=Math.abs(c),A=Math.abs(l),S=Math.abs(f);let y,w,N,F,k,G,ce,O,ne,ue,re,Ee;if(M>=A&&M>=S?(N=c,G=u,ne=p,Ee=m,c>=0?(y=l,w=f,F=d,k=h,ce=_,O=g,ue=v,re=T):(y=f,w=l,F=h,k=d,ce=g,O=_,ue=T,re=v)):A>=S?(N=l,G=d,ne=_,Ee=v,l>=0?(y=f,w=c,F=h,k=u,ce=g,O=p,ue=T,re=m):(y=c,w=f,F=u,k=h,ce=p,O=g,ue=m,re=T)):(N=f,G=h,ne=g,Ee=T,f>=0?(y=c,w=l,F=u,k=d,ce=p,O=_,ue=m,re=v):(y=l,w=c,F=d,k=u,ce=_,O=p,ue=v,re=m)),N===0)return null;const he=y/N,_e=w/N,Te=1/N,I=F-he*G,de=k-_e*G,q=ce-he*ne,pe=O-_e*ne,ve=ue-he*Ee,Ie=re-_e*Ee,Pe=ve*pe-Ie*q,Le=I*Ie-de*ve,Je=q*de-pe*I;if(s){if(Pe<0||Le<0||Je<0)return null}else if((Pe<0||Le<0||Je<0)&&(Pe>0||Le>0||Je>0))return null;const Ce=Pe+Le+Je;if(Ce===0)return null;const Ye=Te*(Pe*G+Le*ne+Je*Ee);return(Ce>0?Ye<0:Ye>0)?null:this.at(Ye/Ce,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fs extends ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tl=new xt,Ai=new ud,mr=new tr,Al=new K,gr=new K,xr=new K,_r=new K,Pa=new K,vr=new K,Rl=new K,yr=new K;class lt extends Ut{constructor(e=new $t,t=new fs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){vr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const f=o[c],u=r[c];f!==0&&(Pa.fromBufferAttribute(u,e),a?vr.addScaledVector(Pa,f):vr.addScaledVector(Pa.sub(t),f))}t.add(vr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere),mr.applyMatrix4(r),Ai.copy(e.ray).recast(e.near),!(mr.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(mr,Al)===null||Ai.origin.distanceToSquared(Al)>(e.far-e.near)**2))&&(Tl.copy(r).invert(),Ai.copy(e.ray).applyMatrix4(Tl),!(i.boundingBox!==null&&Ai.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,f=r.attributes.uv1,u=r.attributes.normal,d=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=a[g.materialIndex],v=Math.max(g.start,h.start),T=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let M=v,A=T;M<A;M+=3){const S=o.getX(M),y=o.getX(M+1),w=o.getX(M+2);s=Mr(this,m,e,i,l,f,u,S,y,w),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const p=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let g=p,m=_;g<m;g+=3){const v=o.getX(g),T=o.getX(g+1),M=o.getX(g+2);s=Mr(this,a,e,i,l,f,u,v,T,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=a[g.materialIndex],v=Math.max(g.start,h.start),T=Math.min(c.count,Math.min(g.start+g.count,h.start+h.count));for(let M=v,A=T;M<A;M+=3){const S=M,y=M+1,w=M+2;s=Mr(this,m,e,i,l,f,u,S,y,w),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const p=Math.max(0,h.start),_=Math.min(c.count,h.start+h.count);for(let g=p,m=_;g<m;g+=3){const v=g,T=g+1,M=g+2;s=Mr(this,a,e,i,l,f,u,v,T,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function fd(n,e,t,i,s,r,a,o){let c;if(e.side===ln?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===Ui,o),c===null)return null;yr.copy(o),yr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(yr);return l<t.near||l>t.far?null:{distance:l,point:yr.clone(),object:n}}function Mr(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,gr),n.getVertexPosition(c,xr),n.getVertexPosition(l,_r);const f=fd(n,e,t,i,gr,xr,_r,Rl);if(f){const u=new K;Ln.getBarycoord(Rl,gr,xr,_r,u),s&&(f.uv=Ln.getInterpolatedAttribute(s,o,c,l,u,new Ze)),r&&(f.uv1=Ln.getInterpolatedAttribute(r,o,c,l,u,new Ze)),a&&(f.normal=Ln.getInterpolatedAttribute(a,o,c,l,u,new K),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new K,materialIndex:0};Ln.getNormal(gr,xr,_r,d.normal),f.face=d,f.barycoord=u}return f}class vu extends nn{constructor(e=null,t=1,i=1,s,r,a,o,c,l=Yt,f=Yt,u,d){super(null,a,o,c,l,f,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cl extends an{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Zi=new xt,Pl=new xt,br=[],Ll=new Bi,dd=new xt,Ms=new lt,bs=new tr;class Br extends lt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Cl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,dd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Bi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Zi),Ll.copy(e.boundingBox).applyMatrix4(Zi),this.boundingBox.union(Ll)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new tr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Zi),bs.copy(e.boundingSphere).applyMatrix4(Zi),this.boundingSphere.union(bs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Ms.geometry=this.geometry,Ms.material=this.material,Ms.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bs.copy(this.boundingSphere),bs.applyMatrix4(i),e.ray.intersectsSphere(bs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Zi),Pl.multiplyMatrices(i,Zi),Ms.matrixWorld=Pl,Ms.raycast(e,br);for(let a=0,o=br.length;a<o;a++){const c=br[a];c.instanceId=r,c.object=this,t.push(c)}br.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Cl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new vu(new Float32Array(s*this.count),s,this.count,Ho,Dn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ri=new tr,hd=new Ze(.5,.5),Sr=new K;class Js{constructor(e=new gi,t=new gi,i=new gi,s=new gi,r=new gi,a=new gi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=In,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],f=r[4],u=r[5],d=r[6],h=r[7],p=r[8],_=r[9],g=r[10],m=r[11],v=r[12],T=r[13],M=r[14],A=r[15];if(s[0].setComponents(l-a,h-f,m-p,A-v).normalize(),s[1].setComponents(l+a,h+f,m+p,A+v).normalize(),s[2].setComponents(l+o,h+u,m+_,A+T).normalize(),s[3].setComponents(l-o,h-u,m-_,A-T).normalize(),i)s[4].setComponents(c,d,g,M).normalize(),s[5].setComponents(l-c,h-d,m-g,A-M).normalize();else if(s[4].setComponents(l-c,h-d,m-g,A-M).normalize(),t===In)s[5].setComponents(l+c,h+d,m+g,A+M).normalize();else if(t===Ks)s[5].setComponents(c,d,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){Ri.center.set(0,0,0);const t=hd.distanceTo(e.center);return Ri.radius=.7071067811865476+t,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Sr.x=s.normal.x>0?e.max.x:e.min.x,Sr.y=s.normal.y>0?e.max.y:e.min.y,Sr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Dl=new xt;class Yo{constructor(){this.coordinateSystem=In,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];Dl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Js),i[s].setFromProjectionMatrix(Dl,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Js),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new Yo().copy(this)}}class yu extends nn{constructor(e=[],t=cs,i,s,r,a,o,c,l,f){super(e,t,i,s,r,a,o,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hr extends nn{constructor(e,t,i,s,r,a,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ds extends nn{constructor(e,t,i=Wn,s,r,a,o=Yt,c=Yt,l,f=yi,u=1){if(f!==yi&&f!==_i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,s,r,a,o,c,f,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Mu extends ds{constructor(e,t=Wn,i=cs,s,r,a=Yt,o=Yt,c,l=yi){const f={width:e,height:e,depth:1},u=[f,f,f,f,f,f];super(e,e,t,i,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class bu extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Tt extends $t{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],f=[],u=[];let d=0,h=0;p("z","y","x",-1,-1,i,t,e,a,r,0),p("z","y","x",1,-1,i,t,-e,a,r,1),p("x","z","y",1,1,e,i,t,s,a,2),p("x","z","y",1,-1,e,i,-t,s,a,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(f,3)),this.setAttribute("uv",new at(u,2));function p(_,g,m,v,T,M,A,S,y,w,N){const F=M/y,k=A/w,G=M/2,ce=A/2,O=S/2,ne=y+1,ue=w+1;let re=0,Ee=0;const he=new K;for(let _e=0;_e<ue;_e++){const Te=_e*k-ce;for(let I=0;I<ne;I++){const de=I*F-G;he[_]=de*v,he[g]=Te*T,he[m]=O,l.push(he.x,he.y,he.z),he[_]=0,he[g]=0,he[m]=S>0?1:-1,f.push(he.x,he.y,he.z),u.push(I/y),u.push(1-_e/w),re+=1}}for(let _e=0;_e<w;_e++)for(let Te=0;Te<y;Te++){const I=d+Te+ne*_e,de=d+Te+ne*(_e+1),q=d+(Te+1)+ne*(_e+1),pe=d+(Te+1)+ne*_e;c.push(I,de,pe),c.push(de,q,pe),Ee+=6}o.addGroup(h,Ee,N),h+=Ee,d+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ii extends $t{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const f=[],u=[],d=[],h=[];let p=0;const _=[],g=i/2;let m=0;v(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(f),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(h,2));function v(){const M=new K,A=new K;let S=0;const y=(t-e)/i;for(let w=0;w<=r;w++){const N=[],F=w/r,k=F*(t-e)+e;for(let G=0;G<=s;G++){const ce=G/s,O=ce*c+o,ne=Math.sin(O),ue=Math.cos(O);A.x=k*ne,A.y=-F*i+g,A.z=k*ue,u.push(A.x,A.y,A.z),M.set(ne,y,ue).normalize(),d.push(M.x,M.y,M.z),h.push(ce,1-F),N.push(p++)}_.push(N)}for(let w=0;w<s;w++)for(let N=0;N<r;N++){const F=_[N][w],k=_[N+1][w],G=_[N+1][w+1],ce=_[N][w+1];(e>0||N!==0)&&(f.push(F,k,ce),S+=3),(t>0||N!==r-1)&&(f.push(k,G,ce),S+=3)}l.addGroup(m,S,0),m+=S}function T(M){const A=p,S=new Ze,y=new K;let w=0;const N=M===!0?e:t,F=M===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,g*F,0),d.push(0,F,0),h.push(.5,.5),p++;const k=p;for(let G=0;G<=s;G++){const O=G/s*c+o,ne=Math.cos(O),ue=Math.sin(O);y.x=N*ue,y.y=g*F,y.z=N*ne,u.push(y.x,y.y,y.z),d.push(0,F,0),S.x=ne*.5+.5,S.y=ue*.5*F+.5,h.push(S.x,S.y),p++}for(let G=0;G<s;G++){const ce=A+G,O=k+G;M===!0?f.push(O,O+1,ce):f.push(O+1,O,ce),w+=3}l.addGroup(m,w,M===!0?1:2),m+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ri{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);const f=i[s],d=i[s+1]-f,h=(a-f)/d;return(s+h)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new Ze:new K);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new K,s=[],r=[],a=[],o=new K,c=new xt;for(let h=0;h<=e;h++){const p=h/e;s[h]=this.getTangentAt(p,new K)}r[0]=new K,a[0]=new K;let l=Number.MAX_VALUE;const f=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);f<=l&&(l=f,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),a[h]=a[h-1].clone(),o.crossVectors(s[h-1],s[h]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(ct(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(c.makeRotationAxis(o,p))}a[h].crossVectors(s[h],r[h])}if(t===!0){let h=Math.acos(ct(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(h=-h);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],h*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class Su extends ri{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Ze){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const f=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,h=l-this.aY;c=d*f-h*u+this.aX,l=d*u+h*f+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class pd extends Su{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ko(){let n=0,e=0,t=0,i=0;function s(r,a,o,c){n=r,e=o,t=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,f,u){let d=(a-r)/l-(o-r)/(l+f)+(o-a)/f,h=(o-a)/f-(c-a)/(f+u)+(c-o)/u;d*=f,h*=f,s(a,o,d,h)},calc:function(r){const a=r*r,o=a*r;return n+e*r+t*a+i*o}}}const Il=new K,Nl=new K,La=new Ko,Da=new Ko,Ia=new Ko;class wu extends ri{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new K){const i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,f;this.closed||o>0?l=s[(o-1)%r]:(Nl.subVectors(s[0],s[1]).add(s[0]),l=Nl);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?f=s[(o+2)%r]:(Il.subVectors(s[r-1],s[r-2]).add(s[r-1]),f=Il),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(u),h),_=Math.pow(u.distanceToSquared(d),h),g=Math.pow(d.distanceToSquared(f),h);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),La.initNonuniformCatmullRom(l.x,u.x,d.x,f.x,p,_,g),Da.initNonuniformCatmullRom(l.y,u.y,d.y,f.y,p,_,g),Ia.initNonuniformCatmullRom(l.z,u.z,d.z,f.z,p,_,g)}else this.curveType==="catmullrom"&&(La.initCatmullRom(l.x,u.x,d.x,f.x,this.tension),Da.initCatmullRom(l.y,u.y,d.y,f.y,this.tension),Ia.initCatmullRom(l.z,u.z,d.z,f.z,this.tension));return i.set(La.calc(c),Da.calc(c),Ia.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new K().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ul(n,e,t,i,s){const r=(i-e)*.5,a=(s-t)*.5,o=n*n,c=n*o;return(2*t-2*i+r+a)*c+(-3*t+3*i-2*r-a)*o+r*n+t}function md(n,e){const t=1-n;return t*t*e}function gd(n,e){return 2*(1-n)*n*e}function xd(n,e){return n*n*e}function Hs(n,e,t,i){return md(n,e)+gd(n,t)+xd(n,i)}function _d(n,e){const t=1-n;return t*t*t*e}function vd(n,e){const t=1-n;return 3*t*t*n*e}function yd(n,e){return 3*(1-n)*n*n*e}function Md(n,e){return n*n*n*e}function Gs(n,e,t,i,s){return _d(n,e)+vd(n,t)+yd(n,i)+Md(n,s)}class bd extends ri{constructor(e=new Ze,t=new Ze,i=new Ze,s=new Ze){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Ze){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Gs(e,s.x,r.x,a.x,o.x),Gs(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Sd extends ri{constructor(e=new K,t=new K,i=new K,s=new K){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new K){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Gs(e,s.x,r.x,a.x,o.x),Gs(e,s.y,r.y,a.y,o.y),Gs(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class wd extends ri{constructor(e=new Ze,t=new Ze){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ze){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ze){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ed extends ri{constructor(e=new K,t=new K){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new K){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Td extends ri{constructor(e=new Ze,t=new Ze,i=new Ze){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ze){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Hs(e,s.x,r.x,a.x),Hs(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Eu extends ri{constructor(e=new K,t=new K,i=new K){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new K){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Hs(e,s.x,r.x,a.x),Hs(e,s.y,r.y,a.y),Hs(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ad extends ri{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ze){const i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],f=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(Ul(o,c.x,l.x,f.x,u.x),Ul(o,c.y,l.y,f.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Ze().fromArray(s))}return this}}var Rd=Object.freeze({__proto__:null,ArcCurve:pd,CatmullRomCurve3:wu,CubicBezierCurve:bd,CubicBezierCurve3:Sd,EllipseCurve:Su,LineCurve:wd,LineCurve3:Ed,QuadraticBezierCurve:Td,QuadraticBezierCurve3:Eu,SplineCurve:Ad});class vi extends $t{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,f=c+1,u=e/o,d=t/c,h=[],p=[],_=[],g=[];for(let m=0;m<f;m++){const v=m*d-a;for(let T=0;T<l;T++){const M=T*u-r;p.push(M,-v,0),_.push(0,0,1),g.push(T/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<o;v++){const T=v+l*m,M=v+l*(m+1),A=v+1+l*(m+1),S=v+1+l*m;h.push(T,M,S),h.push(M,A,S)}this.setIndex(h),this.setAttribute("position",new at(p,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Vs extends $t{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const f=[],u=new K,d=new K,h=[],p=[],_=[],g=[];for(let m=0;m<=i;m++){const v=[],T=m/i,M=a+T*o,A=e*Math.cos(M),S=Math.sqrt(e*e-A*A);let y=0;m===0&&a===0?y=.5/t:m===i&&c===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){const N=w/t,F=s+N*r;u.x=-S*Math.cos(F),u.y=A,u.z=S*Math.sin(F),p.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(N+y,1-T),v.push(l++)}f.push(v)}for(let m=0;m<i;m++)for(let v=0;v<t;v++){const T=f[m][v+1],M=f[m][v],A=f[m+1][v],S=f[m+1][v+1];(m!==0||a>0)&&h.push(T,M,S),(m!==i-1||c<Math.PI)&&h.push(M,A,S)}this.setIndex(h),this.setAttribute("position",new at(p,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Jo extends $t{constructor(e=new Eu(new K(-1,-1,0),new K(-1,1,0),new K(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new K,c=new K,l=new Ze;let f=new K;const u=[],d=[],h=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(h,2));function _(){for(let T=0;T<t;T++)g(T);g(r===!1?t:0),v(),m()}function g(T){f=e.getPointAt(T/t,f);const M=a.normals[T],A=a.binormals[T];for(let S=0;S<=s;S++){const y=S/s*Math.PI*2,w=Math.sin(y),N=-Math.cos(y);c.x=N*M.x+w*A.x,c.y=N*M.y+w*A.y,c.z=N*M.z+w*A.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=f.x+i*c.x,o.y=f.y+i*c.y,o.z=f.z+i*c.z,u.push(o.x,o.y,o.z)}}function m(){for(let T=1;T<=t;T++)for(let M=1;M<=s;M++){const A=(s+1)*(T-1)+(M-1),S=(s+1)*T+(M-1),y=(s+1)*T+M,w=(s+1)*(T-1)+M;p.push(A,S,w),p.push(S,y,w)}}function v(){for(let T=0;T<=t;T++)for(let M=0;M<=s;M++)l.x=T/t,l.y=M/s,h.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Jo(new Rd[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function hs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(Fl(s))s.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Fl(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function rn(n){const e={};for(let t=0;t<n.length;t++){const i=hs(n[t]);for(const s in i)e[s]=i[s]}return e}function Fl(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Cd(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Tu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const Pd={clone:hs,merge:rn};var Ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ld,this.fragmentShader=Dd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=Cd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new je().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ze().fromArray(s.value);break;case"v3":this.uniforms[i].value=new K().fromArray(s.value);break;case"v4":this.uniforms[i].value=new At().fromArray(s.value);break;case"m3":this.uniforms[i].value=new st().fromArray(s.value);break;case"m4":this.uniforms[i].value=new xt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Id extends Mi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gn extends ps{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yr,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nd extends ps{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yr,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=zo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ud extends ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fd extends ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Zo extends Ut{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class zd extends Zo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Na=new xt,zl=new K,Ol=new K;class Au{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=fn,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Js,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;zl.setFromMatrixPosition(e.matrixWorld),t.position.copy(zl),Ol.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ol),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Na.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Na,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Ks||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Na)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const wr=new K,Er=new Kt,Un=new K;class Ru extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wr,Er,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wr,Er,Un.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(wr,Er,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wr,Er,Un.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const pi=new K,kl=new Ze,Bl=new Ze;class _n extends Ru{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qr*2*Math.atan(Math.tan(ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,t){return this.getViewBounds(e,kl,Bl),t.subVectors(Bl,kl)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ca*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Od extends Au{constructor(){super(new _n(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=Qr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class kd extends Zo{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Od}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Bd extends Au{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0}}class Cu extends Zo{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Bd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Pu extends Ru{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Qi=-90,ji=1;class Co extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new _n(Qi,ji,e,t);s.layers=this.layers,this.add(s);const r=new _n(Qi,ji,e,t);r.layers=this.layers,this.add(r);const a=new _n(Qi,ji,e,t);a.layers=this.layers,this.add(a);const o=new _n(Qi,ji,e,t);o.layers=this.layers,this.add(o);const c=new _n(Qi,ji,e,t);c.layers=this.layers,this.add(c);const l=new _n(Qi,ji,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===In)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ks)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,f]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=_,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(u,d,h),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Hd extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Hl(n,e,t,i){const s=Gd(i);switch(t){case ou:return n*e;case Ho:return n*e/s.components*s.byteLength;case Go:return n*e/s.components*s.byteLength;case Fi:return n*e*2/s.components*s.byteLength;case Vo:return n*e*2/s.components*s.byteLength;case lu:return n*e*3/s.components*s.byteLength;case Hn:return n*e*4/s.components*s.byteLength;case Wo:return n*e*4/s.components*s.byteLength;case Ur:case Fr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zr:case Or:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ja:case to:return Math.max(n,16)*Math.max(e,8)/4;case Qa:case eo:return Math.max(n,8)*Math.max(e,8)/2;case no:case io:case ro:case ao:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case so:case qr:case oo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case co:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case uo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case fo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ho:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case po:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case mo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case go:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case xo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case _o:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case vo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case yo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Mo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case bo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case So:case wo:case Eo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case To:case Ao:return Math.ceil(n/4)*Math.ceil(e/4)*8;case $r:case Ro:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gd(n){switch(n){case fn:case iu:return{byteLength:1,components:1};case Ys:case su:case Nn:return{byteLength:2,components:1};case ko:case Bo:return{byteLength:2,components:4};case Wn:case Oo:case Dn:return{byteLength:4,components:1};case ru:case au:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fo}}));typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fo);function Lu(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Vd(n){const e=new WeakMap;function t(o,c){const l=o.array,f=o.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,f),o.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){const f=c.array,u=c.updateRanges;if(n.bindBuffer(l,o),u.length===0)n.bufferSubData(l,0,f);else{u.sort((h,p)=>h.start-p.start);let d=0;for(let h=1;h<u.length;h++){const p=u[d],_=u[h];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,u[d]=_)}u.length=d+1;for(let h=0,p=u.length;h<p;h++){const _=u[h];n.bufferSubData(l,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Wd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xd=`#ifdef USE_ALPHAHASH
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
#endif`,qd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jd=`#ifdef USE_AOMAP
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
#endif`,Zd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qd=`#ifdef USE_BATCHING
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
#endif`,jd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,th=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ih=`#ifdef USE_IRIDESCENCE
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
#endif`,sh=`#ifdef USE_BUMPMAP
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
#endif`,rh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ah=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ch=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,uh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,hh=`#define PI 3.141592653589793
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
} // validated`,ph=`vec3 transformedNormal = objectNormal;
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
#endif`,mh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_h=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vh="gl_FragColor = linearToOutputTexel( gl_FragColor );",yh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mh=`#ifdef USE_ENVMAP
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
#endif`,bh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Sh=`#ifdef USE_ENVMAP
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
#endif`,wh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Eh=`#ifdef USE_ENVMAP
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
#endif`,Th=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ah=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ch=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ph=`#ifdef USE_GRADIENTMAP
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
}`,Lh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ih=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nh=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Uh=`#ifdef USE_ENVMAP
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
#endif`,Fh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Oh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bh=`PhysicalMaterial material;
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
#endif`,Hh=`uniform sampler2D dfgLUT;
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
}`,Gh=`
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
#endif`,Vh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wh=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xh=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,qh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$h=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jh=`#if defined( USE_POINTS_UV )
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
#endif`,ep=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,np=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ip=`#if defined( USE_MORPHCOLORS )
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
#endif`,sp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rp=`#ifdef USE_MORPHTARGETS
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
#endif`,ap=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,op=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,dp=`#ifdef USE_NORMALMAP
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
#endif`,hp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_p=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ep=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ap=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rp=`float getShadowMask() {
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
}`,Cp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pp=`#ifdef USE_SKINNING
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
#endif`,Lp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dp=`#ifdef USE_SKINNING
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
#endif`,Ip=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Np=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Up=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zp=`#ifdef USE_TRANSMISSION
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
#endif`,Op=`#ifdef USE_TRANSMISSION
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
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wp=`uniform sampler2D t2D;
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
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qp=`uniform float backgroundBlurriness;
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
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`#include <common>
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
}`,Jp=`#if DEPTH_PACKING == 3200
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
}`,Zp=`#define DISTANCE
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
}`,Qp=`#define DISTANCE
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
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,em=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tm=`uniform float scale;
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
}`,nm=`uniform vec3 diffuse;
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
}`,im=`#include <common>
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
}`,sm=`uniform vec3 diffuse;
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
}`,rm=`#define LAMBERT
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
}`,am=`#define LAMBERT
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
}`,om=`#define MATCAP
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
}`,lm=`#define MATCAP
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
}`,cm=`#define NORMAL
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
}`,um=`#define NORMAL
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
}`,fm=`#define PHONG
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
}`,dm=`#define PHONG
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
}`,hm=`#define STANDARD
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
}`,pm=`#define STANDARD
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
}`,mm=`#define TOON
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
}`,gm=`#define TOON
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
}`,xm=`uniform float size;
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
}`,_m=`uniform vec3 diffuse;
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
}`,vm=`#include <common>
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
}`,ym=`uniform vec3 color;
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
}`,Mm=`uniform float rotation;
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
}`,bm=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:Wd,alphahash_pars_fragment:Xd,alphamap_fragment:qd,alphamap_pars_fragment:$d,alphatest_fragment:Yd,alphatest_pars_fragment:Kd,aomap_fragment:Jd,aomap_pars_fragment:Zd,batching_pars_vertex:Qd,batching_vertex:jd,begin_vertex:eh,beginnormal_vertex:th,bsdfs:nh,iridescence_fragment:ih,bumpmap_pars_fragment:sh,clipping_planes_fragment:rh,clipping_planes_pars_fragment:ah,clipping_planes_pars_vertex:oh,clipping_planes_vertex:lh,color_fragment:ch,color_pars_fragment:uh,color_pars_vertex:fh,color_vertex:dh,common:hh,defaultnormal_vertex:ph,displacementmap_pars_vertex:mh,displacementmap_vertex:gh,emissivemap_fragment:xh,emissivemap_pars_fragment:_h,colorspace_fragment:vh,colorspace_pars_fragment:yh,envmap_fragment:Mh,envmap_common_pars_fragment:bh,envmap_pars_fragment:Sh,envmap_pars_vertex:wh,envmap_physical_pars_fragment:Uh,envmap_vertex:Eh,fog_vertex:Th,fog_pars_vertex:Ah,fog_fragment:Rh,fog_pars_fragment:Ch,gradientmap_pars_fragment:Ph,lightmap_pars_fragment:Lh,lights_lambert_fragment:Dh,lights_lambert_pars_fragment:Ih,lights_pars_begin:Nh,lights_toon_fragment:Fh,lights_toon_pars_fragment:zh,lights_phong_fragment:Oh,lights_phong_pars_fragment:kh,lights_physical_fragment:Bh,lights_physical_pars_fragment:Hh,lights_fragment_begin:Gh,lights_fragment_maps:Vh,lights_fragment_end:Wh,lightprobes_pars_fragment:Xh,logdepthbuf_fragment:qh,logdepthbuf_pars_fragment:$h,logdepthbuf_pars_vertex:Yh,logdepthbuf_vertex:Kh,map_fragment:Jh,map_pars_fragment:Zh,map_particle_fragment:Qh,map_particle_pars_fragment:jh,metalnessmap_fragment:ep,metalnessmap_pars_fragment:tp,morphinstance_vertex:np,morphcolor_vertex:ip,morphnormal_vertex:sp,morphtarget_pars_vertex:rp,morphtarget_vertex:ap,normal_fragment_begin:op,normal_fragment_maps:lp,normal_pars_fragment:cp,normal_pars_vertex:up,normal_vertex:fp,normalmap_pars_fragment:dp,clearcoat_normal_fragment_begin:hp,clearcoat_normal_fragment_maps:pp,clearcoat_pars_fragment:mp,iridescence_pars_fragment:gp,opaque_fragment:xp,packing:_p,premultiplied_alpha_fragment:vp,project_vertex:yp,dithering_fragment:Mp,dithering_pars_fragment:bp,roughnessmap_fragment:Sp,roughnessmap_pars_fragment:wp,shadowmap_pars_fragment:Ep,shadowmap_pars_vertex:Tp,shadowmap_vertex:Ap,shadowmask_pars_fragment:Rp,skinbase_vertex:Cp,skinning_pars_vertex:Pp,skinning_vertex:Lp,skinnormal_vertex:Dp,specularmap_fragment:Ip,specularmap_pars_fragment:Np,tonemapping_fragment:Up,tonemapping_pars_fragment:Fp,transmission_fragment:zp,transmission_pars_fragment:Op,uv_pars_fragment:kp,uv_pars_vertex:Bp,uv_vertex:Hp,worldpos_vertex:Gp,background_vert:Vp,background_frag:Wp,backgroundCube_vert:Xp,backgroundCube_frag:qp,cube_vert:$p,cube_frag:Yp,depth_vert:Kp,depth_frag:Jp,distance_vert:Zp,distance_frag:Qp,equirect_vert:jp,equirect_frag:em,linedashed_vert:tm,linedashed_frag:nm,meshbasic_vert:im,meshbasic_frag:sm,meshlambert_vert:rm,meshlambert_frag:am,meshmatcap_vert:om,meshmatcap_frag:lm,meshnormal_vert:cm,meshnormal_frag:um,meshphong_vert:fm,meshphong_frag:dm,meshphysical_vert:hm,meshphysical_frag:pm,meshtoon_vert:mm,meshtoon_frag:gm,points_vert:xm,points_frag:_m,shadow_vert:vm,shadow_frag:ym,sprite_vert:Mm,sprite_frag:bm},Be={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},kn={basic:{uniforms:rn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:rn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:rn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:rn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:rn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new je(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:rn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:rn([Be.points,Be.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:rn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:rn([Be.common,Be.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:rn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:rn([Be.sprite,Be.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:rn([Be.common,Be.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:rn([Be.lights,Be.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};kn.physical={uniforms:rn([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new st},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const Tr={r:0,b:0,g:0},Sm=new xt,Du=new st;Du.set(-1,0,0,0,1,0,0,0,1);function wm(n,e,t,i,s,r){const a=new je(0);let o=s===!0?0:1,c,l,f=null,u=0,d=null;function h(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){const M=v.backgroundBlurriness>0;T=e.get(T,M)}return T}function p(v){let T=!1;const M=h(v);M===null?g(a,o):M&&M.isColor&&(g(M,1),T=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(v,T){const M=h(T);M&&M.isCubeTexture?(l===void 0&&(l=new lt(new Tt(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:hs(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,S,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Sm.makeRotationFromEuler(T.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Du),l.material.toneMapped=dt.getTransfer(M.colorSpace)!==vt,(f!==M||u!==M.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,f=M,u=M.version,d=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new lt(new vi(2,2),new Mi({name:"BackgroundMaterial",uniforms:hs(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=dt.getTransfer(M.colorSpace)!==vt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||u!==M.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=M,u=M.version,d=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function g(v,T){v.getRGB(Tr,Tu(n)),t.buffers.color.setClear(Tr.r,Tr.g,Tr.b,T,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,T=1){a.set(v),o=T,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:p,addToRenderList:_,dispose:m}}function Em(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(k,G,ce,O,ne){let ue=!1;const re=u(k,O,ce,G);r!==re&&(r=re,l(r.object)),ue=h(k,O,ce,ne),ue&&p(k,O,ce,ne),ne!==null&&e.update(ne,n.ELEMENT_ARRAY_BUFFER),(ue||a)&&(a=!1,M(k,G,ce,O),ne!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function c(){return n.createVertexArray()}function l(k){return n.bindVertexArray(k)}function f(k){return n.deleteVertexArray(k)}function u(k,G,ce,O){const ne=O.wireframe===!0;let ue=i[G.id];ue===void 0&&(ue={},i[G.id]=ue);const re=k.isInstancedMesh===!0?k.id:0;let Ee=ue[re];Ee===void 0&&(Ee={},ue[re]=Ee);let he=Ee[ce.id];he===void 0&&(he={},Ee[ce.id]=he);let _e=he[ne];return _e===void 0&&(_e=d(c()),he[ne]=_e),_e}function d(k){const G=[],ce=[],O=[];for(let ne=0;ne<t;ne++)G[ne]=0,ce[ne]=0,O[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:ce,attributeDivisors:O,object:k,attributes:{},index:null}}function h(k,G,ce,O){const ne=r.attributes,ue=G.attributes;let re=0;const Ee=ce.getAttributes();for(const he in Ee)if(Ee[he].location>=0){const Te=ne[he];let I=ue[he];if(I===void 0&&(he==="instanceMatrix"&&k.instanceMatrix&&(I=k.instanceMatrix),he==="instanceColor"&&k.instanceColor&&(I=k.instanceColor)),Te===void 0||Te.attribute!==I||I&&Te.data!==I.data)return!0;re++}return r.attributesNum!==re||r.index!==O}function p(k,G,ce,O){const ne={},ue=G.attributes;let re=0;const Ee=ce.getAttributes();for(const he in Ee)if(Ee[he].location>=0){let Te=ue[he];Te===void 0&&(he==="instanceMatrix"&&k.instanceMatrix&&(Te=k.instanceMatrix),he==="instanceColor"&&k.instanceColor&&(Te=k.instanceColor));const I={};I.attribute=Te,Te&&Te.data&&(I.data=Te.data),ne[he]=I,re++}r.attributes=ne,r.attributesNum=re,r.index=O}function _(){const k=r.newAttributes;for(let G=0,ce=k.length;G<ce;G++)k[G]=0}function g(k){m(k,0)}function m(k,G){const ce=r.newAttributes,O=r.enabledAttributes,ne=r.attributeDivisors;ce[k]=1,O[k]===0&&(n.enableVertexAttribArray(k),O[k]=1),ne[k]!==G&&(n.vertexAttribDivisor(k,G),ne[k]=G)}function v(){const k=r.newAttributes,G=r.enabledAttributes;for(let ce=0,O=G.length;ce<O;ce++)G[ce]!==k[ce]&&(n.disableVertexAttribArray(ce),G[ce]=0)}function T(k,G,ce,O,ne,ue,re){re===!0?n.vertexAttribIPointer(k,G,ce,ne,ue):n.vertexAttribPointer(k,G,ce,O,ne,ue)}function M(k,G,ce,O){_();const ne=O.attributes,ue=ce.getAttributes(),re=G.defaultAttributeValues;for(const Ee in ue){const he=ue[Ee];if(he.location>=0){let _e=ne[Ee];if(_e===void 0&&(Ee==="instanceMatrix"&&k.instanceMatrix&&(_e=k.instanceMatrix),Ee==="instanceColor"&&k.instanceColor&&(_e=k.instanceColor)),_e!==void 0){const Te=_e.normalized,I=_e.itemSize,de=e.get(_e);if(de===void 0)continue;const q=de.buffer,pe=de.type,ve=de.bytesPerElement,Ie=pe===n.INT||pe===n.UNSIGNED_INT||_e.gpuType===Oo;if(_e.isInterleavedBufferAttribute){const Pe=_e.data,Le=Pe.isInterleavedBuffer===!0?Pe.stride:Pe.itemSize,Je=_e.offset;if(Pe.isInstancedInterleavedBuffer||Pe.isInstancedBufferAttribute){for(let Ce=0;Ce<he.locationSize;Ce++)m(he.location+Ce,Pe.meshPerAttribute);k.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let Ce=0;Ce<he.locationSize;Ce++)g(he.location+Ce);n.bindBuffer(n.ARRAY_BUFFER,q);for(let Ce=0;Ce<he.locationSize;Ce++)T(he.location+Ce,I/he.locationSize,pe,Te,Le*ve,(Je+I/he.locationSize*Ce)*ve,Ie)}else{if(_e.isInstancedBufferAttribute){for(let Pe=0;Pe<he.locationSize;Pe++)m(he.location+Pe,_e.meshPerAttribute);k.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Pe=0;Pe<he.locationSize;Pe++)g(he.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,q);for(let Pe=0;Pe<he.locationSize;Pe++)T(he.location+Pe,I/he.locationSize,pe,Te,I*ve,I/he.locationSize*Pe*ve,Ie)}}else if(re!==void 0){const Te=re[Ee];if(Te!==void 0)switch(Te.length){case 2:n.vertexAttrib2fv(he.location,Te);break;case 3:n.vertexAttrib3fv(he.location,Te);break;case 4:n.vertexAttrib4fv(he.location,Te);break;default:n.vertexAttrib1fv(he.location,Te)}}}}v()}function A(){N();for(const k in i){const G=i[k];for(const ce in G){const O=G[ce];for(const ne in O){const ue=O[ne];for(const re in ue)f(ue[re].object),delete ue[re];delete O[ne]}}delete i[k]}}function S(k){if(i[k.id]===void 0)return;const G=i[k.id];for(const ce in G){const O=G[ce];for(const ne in O){const ue=O[ne];for(const re in ue)f(ue[re].object),delete ue[re];delete O[ne]}}delete i[k.id]}function y(k){for(const G in i){const ce=i[G];for(const O in ce){const ne=ce[O];if(ne[k.id]===void 0)continue;const ue=ne[k.id];for(const re in ue)f(ue[re].object),delete ue[re];delete ne[k.id]}}}function w(k){for(const G in i){const ce=i[G],O=k.isInstancedMesh===!0?k.id:0,ne=ce[O];if(ne!==void 0){for(const ue in ne){const re=ne[ue];for(const Ee in re)f(re[Ee].object),delete re[Ee];delete ne[ue]}delete ce[O],Object.keys(ce).length===0&&delete i[G]}}}function N(){F(),a=!0,r!==s&&(r=s,l(r.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:F,dispose:A,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:y,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function Tm(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,f){f!==0&&(n.drawArraysInstanced(i,c,l,f),t.update(l,i,f))}function o(c,l,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,f);let d=0;for(let h=0;h<f;h++)d+=l[h];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Am(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(y){return!(y!==Hn&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(y){const w=y===Nn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==fn&&y!==Dn&&!w&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const f=c(l);f!==l&&(Qe("WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Qe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:h,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:M,maxSamples:A,samples:S}}function Rm(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new gi,o=new st,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const h=u.length!==0||d||i!==0||s;return s=d,i=u.length,h},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=f(u,d,0)},this.setState=function(u,d,h){const p=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=n.get(u);if(!s||p===null||p.length===0||r&&!g)r?f(null):l();else{const v=r?0:i,T=v*4;let M=m.clippingState||null;c.value=M,M=f(p,d,T,h);for(let A=0;A!==T;++A)M[A]=t[A];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(u,d,h,p){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=c.value,p!==!0||g===null){const m=h+_*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let T=0,M=h;T!==_;++T,M+=4)a.copy(u[T]).applyMatrix4(v,o),a.normal.toArray(g,M),g[M+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}class Qo extends hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new yu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Tt(5,5,5),r=new Mi({name:"CubemapFromEquirect",uniforms:hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:as});r.uniforms.tEquirect.value=t;const a=new lt(s,r),o=t.minFilter;return t.minFilter===ni&&(t.minFilter=dn),new Co(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const Gl=256,Cm=3,Pm=20,Iu=256,Nu=16,Lm=3,Dm=new K,Im=new je;class Zs{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Co(1,10,null),this._boxMesh=new lt(new Tt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=Dm}=r,c=this._renderer;this._setSize(a);const l=this._allocateTarget(),f=this._getSourceTarget(!0);t>0&&(f.texture.mipmapsAutoUpdate=!1);const u=c.autoClear,d=c.autoClearColor,h=c.autoClearDepth,p=c.autoClearStencil,_=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,_===null&&(e.background=c.getClearColor(Im));const g=new Co(i,s,f);return g.position.copy(o),g.update(c,e),c.autoClear=u,c.autoClearColor=d,c.autoClearDepth=h,c.autoClearStencil=p,e.background=_,t>0&&(f.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Gl,Gf(e))}_fromTexture(e,t){e.mapping===cs||e.mapping===qs?this._setSize(e.image.length===0?Gl:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,t=Vl(e,!1,!1),i=Math.log2(e)-Cm;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Vl(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){const s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===cs||e.mapping===qs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xl()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Wl()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Nm(),this._integrationMaterial=Um());const t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Nu);for(let a=0;a<=i;a++){const o=Zs.lodToRoughness(a,i);if(a>i-Lm)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const c=o>0?Math.log2(t)+.5*Math.log2(6/(Iu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Fm());const i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}}function Vl(n,e,t){return new Qo(n,{minFilter:ni,generateMipmaps:e,type:Nn,colorSpace:Kr,depthBuffer:t})}function nr(n,e,t){return new Mi({name:n,uniforms:e,vertexShader:rt.cube_vert,fragmentShader:t,side:ln,blending:as,depthTest:!1,depthWrite:!1})}function Nm(){return nr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Iu}u

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
	`)}function Um(){return nr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Nu}},`

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
	`)}function Fm(){return nr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Pm}
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
	`)}function Wl(){return nr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Xl(){return nr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function zm(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,h=!1){return d==null?null:h?a(d):r(d)}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===ra||h===aa)if(e.has(d)){const p=e.get(d).texture;return o(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const _=new Qo(p.height);return _.fromEquirectangularTexture(n,d),e.set(d,_),d.addEventListener("dispose",l),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const h=d.mapping,p=h===ra||h===aa,_=h===cs||h===qs;if(p||_){let g=t.get(d);const m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new Zs(n)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const v=d.image;return p&&v&&v.height>0||_&&v&&c(v)?(i===null&&(i=new Zs(n)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",f),g.texture):null}}}return d}function o(d,h){return h===ra?d.mapping=cs:h===aa&&(d.mapping=qs),d}function c(d){let h=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&h++;return h===p}function l(d){const h=d.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function f(d){const h=d.target;h.removeEventListener("dispose",f);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function Om(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&kr("WebGLRenderer: "+i+" extension not supported."),s}}}function km(n,e,t,i){const s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function o(p){c(p.target)}function c(p){p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete s[p.id],a.unregister(p);const _=r.get(p);_&&(e.remove(_),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function l(p,_){return s[_.id]!==void 0||(_.addEventListener("dispose",o),s[_.id]=new WeakRef(_),a.register(_,_.id,_),t.memory.geometries++),_}function f(p){const _=p.attributes;for(const g in _)e.update(_[g],n.ARRAY_BUFFER)}function u(p){const _=p.index,g=p.attributes.position;let m=0;if(g===void 0)return;const v=_!==null?_.array.length:g.array.length/3-1,T=g.count>=65535?_u:xu,M=new T(Math.ceil(v/3)*6,1),A=M.array;if(_!==null){const y=_.array;m=_.version;for(let w=0,N=0;w<v;w+=3){const F=y[w+0],k=y[w+1],G=y[w+2];A[N++]=F,A[N++]=k,A[N++]=k,A[N++]=G,A[N++]=G,A[N++]=F}}else{m=g.version;for(let y=0,w=0;y<v;y+=3){const N=y+0,F=y+1,k=y+2;A[w++]=N,A[w++]=F,A[w++]=F,A[w++]=k,A[w++]=k,A[w++]=N}}M.version=m;const S=r.get(p);S&&e.remove(S),r.set(p,M)}function d(p){const _=r.get(p);if(_){const g=p.index;g!==null&&_.version<g.version&&u(p)}else u(p);return r.get(p)}function h(){for(const p in s){const _=s[p].deref();_!==void 0&&c(_)}}return{get:l,update:f,getWireframeAttribute:d,dispose:h}}function Bm(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,d){n.drawElements(i,d,r,u*a),t.update(d,i,1)}function l(u,d,h){h!==0&&(n.drawElementsInstanced(i,d,r,u*a,h),t.update(d,i,h))}function f(u,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,h);let _=0;for(let g=0;g<h;g++)_+=d[g];t.update(_,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=f}function Hm(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:gt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Gm(n,e,t){const i=new WeakMap,s=new At;function r(a,o,c){const l=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=f!==void 0?f.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let N=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",N)};d!==void 0&&d.texture.dispose();const h=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let T=0;h===!0&&(T=1),p===!0&&(T=2),_===!0&&(T=3);let M=o.attributes.position.count*T,A=1;M>e.maxTextureSize&&(A=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const S=new Float32Array(M*A*4*u),y=new hu(S,M,A,u);y.type=Dn,y.needsUpdate=!0;const w=T*4;for(let F=0;F<u;F++){const k=g[F],G=m[F],ce=v[F],O=M*A*4*F;for(let ne=0;ne<k.count;ne++){const ue=ne*w;h===!0&&(s.fromBufferAttribute(k,ne),S[O+ue+0]=s.x,S[O+ue+1]=s.y,S[O+ue+2]=s.z,S[O+ue+3]=0),p===!0&&(s.fromBufferAttribute(G,ne),S[O+ue+4]=s.x,S[O+ue+5]=s.y,S[O+ue+6]=s.z,S[O+ue+7]=0),_===!0&&(s.fromBufferAttribute(ce,ne),S[O+ue+8]=s.x,S[O+ue+9]=s.y,S[O+ue+10]=s.z,S[O+ue+11]=ce.itemSize===4?s.w:1)}}d={count:u,texture:y,size:new Ze(M,A)},i.set(o,d),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let h=0;for(let _=0;_<l.length;_++)h+=l[_];const p=o.morphTargetsRelative?1:1-h;c.getUniforms().setValue(n,"morphTargetBaseInfluence",p),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Vm(n,e,t,i,s){let r=new WeakMap;function a(l){const f=s.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==f&&(e.update(d),r.set(d,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==f&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,f))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==f&&(h.update(),r.set(h,f))}return d}function o(){r=new WeakMap}function c(l){const f=l.target;f.removeEventListener("dispose",c),i.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}const Wm={[Kc]:"LINEAR_TONE_MAPPING",[Jc]:"REINHARD_TONE_MAPPING",[Zc]:"CINEON_TONE_MAPPING",[Qc]:"ACES_FILMIC_TONE_MAPPING",[eu]:"AGX_TONE_MAPPING",[tu]:"NEUTRAL_TONE_MAPPING",[jc]:"CUSTOM_TONE_MAPPING"};function Xm(n,e,t,i,s,r){const a=new hn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null,l=null;const f=new $t;f.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new at([0,2,0,0,2,0],2));const u=new Id({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new lt(f,u),h=new Pu(-1,1,1,-1,0,1);let p=null,_=null,g=!1,m,v=null,T=[],M=!1;this.setSize=function(A,S){a.setSize(A,S),o!==null&&o.setSize(A,S),c!==null&&c.setSize(A,S);for(let y=0;y<T.length;y++){const w=T[y];w.setSize&&w.setSize(A,S)}},this.setEffects=function(A){T=A,M=T.length>0&&T[0].isRenderPass===!0;const S=a.width,y=a.height;T.length>0&&o===null&&(o=new hn(S,y,{type:Nn,depthBuffer:!1,stencilBuffer:!1}),c=new hn(S,y,{type:Nn,depthBuffer:!1,stencilBuffer:!1}));const w=s===!0&&T.some(N=>N.needsDepthTexture===!0);w!==(a.depthTexture!==null)&&(w===!0&&l===null&&(l=new ds(S,y),r===!0&&(l.format=_i,l.type=us)),a.dispose(),a.depthTexture=w?l:null,a.resolveDepthBuffer=w,a.storeMultisampledDepthBuffer=w);for(let N=0;N<T.length;N++){const F=T[N];F.setSize&&F.setSize(S,y),w&&F.needsDepthTexture===!0&&F.setDepthTexture&&F.setDepthTexture(l)}},this.begin=function(A,S){if(g||A.toneMapping===Vn&&T.length===0)return!1;if(v=S,S!==null){const y=S.width,w=S.height;(a.width!==y||a.height!==w)&&this.setSize(y,w)}return M===!1&&A.setRenderTarget(a),m=A.toneMapping,A.toneMapping=Vn,!0},this.hasRenderPass=function(){return M},this.end=function(A,S){A.toneMapping=m,g=!0;let y=a,w=o;for(let N=0;N<T.length;N++){const F=T[N];F.enabled!==!1&&(F.render(A,w,y,S),F.needsSwap!==!1&&(y=w,w=w===o?c:o))}if(p!==A.outputColorSpace||_!==A.toneMapping){p=A.outputColorSpace,_=A.toneMapping,u.defines={},dt.getTransfer(p)===vt&&(u.defines.SRGB_TRANSFER="");const N=Wm[_];N&&(u.defines[N]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=y.texture,A.setRenderTarget(v),A.render(d,h),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),f.dispose(),u.dispose()}}const Uu=new nn,Fu=new ds(1,1),zu=new Mu(1),Ou=new hu,ku=new Jf,Bu=new yu,ql=[],$l=[],Yl=new Float32Array(16),Kl=new Float32Array(9),Jl=new Float32Array(4);function ms(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=ql[s];if(r===void 0&&(r=new Float32Array(s),ql[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ia(n,e){let t=$l[e];t===void 0&&(t=new Int32Array(e),$l[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function qm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function $m(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2fv(this.addr,e),Bt(t,e)}}function Ym(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;n.uniform3fv(this.addr,e),Bt(t,e)}}function Km(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4fv(this.addr,e),Bt(t,e)}}function Jm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,i))return;Jl.set(i),n.uniformMatrix2fv(this.addr,!1,Jl),Bt(t,i)}}function Zm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,i))return;Kl.set(i),n.uniformMatrix3fv(this.addr,!1,Kl),Bt(t,i)}}function Qm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,i))return;Yl.set(i),n.uniformMatrix4fv(this.addr,!1,Yl),Bt(t,i)}}function jm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function e0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2iv(this.addr,e),Bt(t,e)}}function t0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3iv(this.addr,e),Bt(t,e)}}function n0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4iv(this.addr,e),Bt(t,e)}}function i0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function s0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2uiv(this.addr,e),Bt(t,e)}}function r0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3uiv(this.addr,e),Bt(t,e)}}function a0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4uiv(this.addr,e),Bt(t,e)}}function sa(n){return n.version===0&&(n.compareFunction=fu,n.needsUpdate=!0),n}function o0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=sa(Fu):r=Uu,t.setTexture2D(e||r,s)}function l0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ku,s)}function c0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=sa(zu):r=Bu,t.setTextureCube(e||r,s)}function u0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Ou,s)}function f0(n){switch(n){case 5126:return qm;case 35664:return $m;case 35665:return Ym;case 35666:return Km;case 35674:return Jm;case 35675:return Zm;case 35676:return Qm;case 5124:case 35670:return jm;case 35667:case 35671:return e0;case 35668:case 35672:return t0;case 35669:case 35673:return n0;case 5125:return i0;case 36294:return s0;case 36295:return r0;case 36296:return a0;case 35678:case 36198:case 36298:case 36306:case 35682:return o0;case 35679:case 36299:case 36307:return l0;case 35680:case 36300:case 36308:case 36293:return c0;case 36289:case 36303:case 36311:case 36292:return u0}}function d0(n,e){n.uniform1fv(this.addr,e)}function h0(n,e){const t=ms(e,this.size,2);n.uniform2fv(this.addr,t)}function p0(n,e){const t=ms(e,this.size,3);n.uniform3fv(this.addr,t)}function m0(n,e){const t=ms(e,this.size,4);n.uniform4fv(this.addr,t)}function g0(n,e){const t=ms(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function x0(n,e){const t=ms(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function _0(n,e){const t=ms(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function v0(n,e){n.uniform1iv(this.addr,e)}function y0(n,e){n.uniform2iv(this.addr,e)}function M0(n,e){n.uniform3iv(this.addr,e)}function b0(n,e){n.uniform4iv(this.addr,e)}function S0(n,e){n.uniform1uiv(this.addr,e)}function w0(n,e){n.uniform2uiv(this.addr,e)}function E0(n,e){n.uniform3uiv(this.addr,e)}function T0(n,e){n.uniform4uiv(this.addr,e)}function A0(n,e,t){const i=this.cache,s=e.length,r=ia(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=sa(Fu):a=Uu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function R0(n,e,t){const i=this.cache,s=e.length,r=ia(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ku,r[a])}function C0(n,e,t){const i=this.cache,s=e.length,r=ia(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=sa(zu):a=Bu;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function P0(n,e,t){const i=this.cache,s=e.length,r=ia(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ou,r[a])}function L0(n){switch(n){case 5126:return d0;case 35664:return h0;case 35665:return p0;case 35666:return m0;case 35674:return g0;case 35675:return x0;case 35676:return _0;case 5124:case 35670:return v0;case 35667:case 35671:return y0;case 35668:case 35672:return M0;case 35669:case 35673:return b0;case 5125:return S0;case 36294:return w0;case 36295:return E0;case 36296:return T0;case 35678:case 36198:case 36298:case 36306:case 35682:return A0;case 35679:case 36299:case 36307:return R0;case 35680:case 36300:case 36308:case 36293:return C0;case 36289:case 36303:case 36311:case 36292:return P0}}class D0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=f0(t.type)}}class I0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=L0(t.type)}}class N0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Ua=/(\w+)(\])?(\[|\.)?/g;function Zl(n,e){n.seq.push(e),n.map[e.id]=e}function U0(n,e,t){const i=n.name,s=i.length;for(Ua.lastIndex=0;;){const r=Ua.exec(i),a=Ua.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Zl(t,l===void 0?new D0(o,n,e):new I0(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new N0(o),Zl(t,u)),t=u}}}class Gr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);U0(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Ql(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const F0=37297;let z0=0;function O0(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const jl=new st;function k0(n){dt._getMatrix(jl,dt.workingColorSpace,n);const e=`mat3( ${jl.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(n)){case Jr:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ec(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+O0(n.getShaderSource(e),o)}else return r}function B0(n,e){const t=k0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const H0={[Kc]:"Linear",[Jc]:"Reinhard",[Zc]:"Cineon",[Qc]:"ACESFilmic",[eu]:"AgX",[tu]:"Neutral",[jc]:"Custom"};function G0(n,e){const t=H0[e];return t===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ar=new K;function V0(){dt.getLuminanceCoefficients(Ar);const n=Ar.x.toFixed(4),e=Ar.y.toFixed(4),t=Ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function X0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function q0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Fs(n){return n!==""}function tc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function nc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Po(n){return n.replace($0,Y0)}function Y0(n,e){const t=rt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Po(t)}const K0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ic(n){return n.replace(K0,J0)}function J0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sc(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const Z0={[ks]:"SHADOWMAP_TYPE_PCF",[Us]:"SHADOWMAP_TYPE_VSM"};function Q0(n){return Z0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const j0={[qs]:"ENVMAP_MODE_REFRACTION"};function eg(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":j0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const tg={[zo]:"ENVMAP_BLENDING_MULTIPLY",[Ef]:"ENVMAP_BLENDING_MIX",[Tf]:"ENVMAP_BLENDING_ADD"};function ng(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":tg[n.combine]||"ENVMAP_BLENDING_NONE"}function ig(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Q0(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",f=eg(t),u=ng(t),d=W0(t),h=X0(r),p=s.createProgram();let _,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(Fs).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(Fs).join(`
`),g.length>0&&(g+=`
`)):(_=[sc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),g=[sc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?rt.tonemapping_pars_fragment:"",t.toneMapping!==Vn?G0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,B0("linearToOutputTexel",t.outputColorSpace),V0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fs).join(`
`)),a=Po(a),a=tc(a,t),a=nc(a,t),o=Po(o),o=tc(o,t),o=nc(o,t),a=ic(a),o=ic(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",t.glslVersion===dl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=m+_+a,T=m+g+o,M=Ql(s,s.VERTEX_SHADER,v),A=Ql(s,s.FRAGMENT_SHADER,T);s.attachShader(p,M),s.attachShader(p,A),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function S(F){if(n.debug.checkShaderErrors){const k=s.getProgramInfoLog(p)||"",G=s.getShaderInfoLog(M)||"",ce=s.getShaderInfoLog(A)||"",O=k.trim(),ne=G.trim(),ue=ce.trim();let re=!0,Ee=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(re=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,M,A);else{const he=ec(s,M,"vertex"),_e=ec(s,A,"fragment");gt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+O+`
`+he+`
`+_e)}else O!==""?Qe("WebGLProgram: Program Info Log:",O):(ne===""||ue==="")&&(Ee=!1);Ee&&(F.diagnostics={runnable:re,programLog:O,vertexShader:{log:ne,prefix:_},fragmentShader:{log:ue,prefix:g}})}s.deleteShader(M),s.deleteShader(A),y=new Gr(s,p),w=q0(s,p)}let y;this.getUniforms=function(){return y===void 0&&S(this),y};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(p,F0)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=z0++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=A,this}let sg=0;class rg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ag(e),t.set(e,i)),i}}class ag{constructor(e){this.id=sg++,this.code=e,this.usedTimes=0}}function og(n){return n===Fi||n===qr||n===$r}function lg(n,e,t,i,s,r){const a=new pu,o=new rg,c=new Set,l=[],f=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,w,N,F,k,G){const ce=F.fog,O=k.geometry,ne=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?F.environment:null,ue=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,re=e.get(y.envMap||ne,ue),Ee=d[y.type];let he=i.precision;y.precision!==null&&(he=i.getMaxPrecision(y.precision),he!==y.precision&&Qe("WebGLProgram.getParameters:",y.precision,"not supported, using",he,"instead."));const _e=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Te=_e!==void 0?_e.length:0;let I=0;O.morphAttributes.position!==void 0&&(I=1),O.morphAttributes.normal!==void 0&&(I=2),O.morphAttributes.color!==void 0&&(I=3);let de,q,pe,ve;if(Ee){const X=kn[Ee];de=X.vertexShader,q=X.fragmentShader}else{de=y.vertexShader,q=y.fragmentShader;const X=o.getVertexShaderStage(y),Re=o.getFragmentShaderStage(y);o.update(y,X,Re),pe=X.id,ve=Re.id}const Ie=n.getRenderTarget(),Pe=n.state.buffers.depth.getReversed(),Le=k.isInstancedMesh===!0,Je=k.isBatchedMesh===!0,Ce=!!y.map,Ye=!!y.matcap,Z=!!re,Y=Z&&re.isPMREMTexture===!0,Se=!!y.aoMap,b=!!y.lightMap,C=!!y.bumpMap&&y.wireframe===!1,te=!!y.normalMap,W=!!y.displacementMap,U=!!y.emissiveMap,j=!!y.metalnessMap,Q=!!y.roughnessMap,H=y.anisotropy>0,L=y.clearcoat>0,oe=y.diffuseRoughness>0,Me=y.dispersion>0,Ne=y.retroreflectivity>0,Ae=y.iridescence>0,et=y.sheen>0,He=y.transmission>0,Xe=H&&!!y.anisotropyMap,D=L&&!!y.clearcoatMap,E=L&&!!y.clearcoatNormalMap,ie=L&&!!y.clearcoatRoughnessMap,De=oe&&!!y.diffuseRoughnessMap,we=Ae&&!!y.iridescenceMap,Fe=Ae&&!!y.iridescenceThicknessMap,Ue=et&&!!y.sheenColorMap,xe=et&&!!y.sheenRoughnessMap,ye=!!y.specularMap,ze=!!y.specularColorMap,B=!!y.specularIntensityMap,x=He&&!!y.transmissionMap,P=He&&!!y.thicknessMap,z=!!y.gradientMap,V=!!y.alphaMap,J=y.alphaTest>0,se=!!y.alphaHash,be=!!y.extensions;let ae=Vn;y.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(ae=n.toneMapping);const ge=Y?re.isCompressedCubeTexture?re.image[0].mipmaps:re.mipmaps:null,ee={shaderID:Ee,shaderType:y.type,shaderName:y.name,vertexShader:de,fragmentShader:q,defines:y.defines,customVertexShaderID:pe,customFragmentShaderID:ve,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:he,batching:Je,batchingColor:Je&&k._colorsTexture!==null,instancing:Le,instancingColor:Le&&k.instanceColor!==null,instancingMorph:Le&&k.morphTexture!==null,outputColorSpace:Ie===null?n.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ce,matcap:Ye,envMap:Z,envMapMode:Z&&re.mapping,envMapPMREM:Y,envMapMaxLod:Y?ge.length-1:null,envMapSize:Y?ge[0].width:null,aoMap:Se,lightMap:b,bumpMap:C,normalMap:te,displacementMap:W,emissiveMap:U,normalMapObjectSpace:te&&y.normalMapType===Cf,normalMapTangentSpace:te&&y.normalMapType===Yr,packedNormalMap:te&&y.normalMapType===Yr&&og(y.normalMap.format),metalnessMap:j,roughnessMap:Q,anisotropy:H,anisotropyMap:Xe,clearcoat:L,clearcoatMap:D,clearcoatNormalMap:E,clearcoatRoughnessMap:ie,diffuseRoughness:oe,diffuseRoughnessMap:De,dispersion:Me,retroreflection:Ne,iridescence:Ae,iridescenceMap:we,iridescenceThicknessMap:Fe,sheen:et,sheenColorMap:Ue,sheenRoughnessMap:xe,specularMap:ye,specularColorMap:ze,specularIntensityMap:B,transmission:He,transmissionMap:x,thicknessMap:P,gradientMap:z,opaque:y.transparent===!1&&y.blending===Bs&&y.alphaToCoverage===!1,alphaMap:V,alphaTest:J,alphaHash:se,combine:y.combine,mapUv:Ce&&h(y.map.channel),aoMapUv:Se&&h(y.aoMap.channel),lightMapUv:b&&h(y.lightMap.channel),bumpMapUv:C&&h(y.bumpMap.channel),normalMapUv:te&&h(y.normalMap.channel),displacementMapUv:W&&h(y.displacementMap.channel),emissiveMapUv:U&&h(y.emissiveMap.channel),metalnessMapUv:j&&h(y.metalnessMap.channel),roughnessMapUv:Q&&h(y.roughnessMap.channel),anisotropyMapUv:Xe&&h(y.anisotropyMap.channel),clearcoatMapUv:D&&h(y.clearcoatMap.channel),clearcoatNormalMapUv:E&&h(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&h(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:De&&h(y.diffuseRoughnessMap.channel),iridescenceMapUv:we&&h(y.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&h(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&h(y.sheenColorMap.channel),sheenRoughnessMapUv:xe&&h(y.sheenRoughnessMap.channel),specularMapUv:ye&&h(y.specularMap.channel),specularColorMapUv:ze&&h(y.specularColorMap.channel),specularIntensityMapUv:B&&h(y.specularIntensityMap.channel),transmissionMapUv:x&&h(y.transmissionMap.channel),thicknessMapUv:P&&h(y.thicknessMap.channel),alphaMapUv:V&&h(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(te||H),vertexNormals:!!O.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!O.attributes.uv&&(Ce||V),fog:!!ce,useFog:y.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||O.attributes.normal===void 0&&te===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Pe,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:I,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:G.filter(X=>X.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:ae,decodeVideoTexture:Ce&&y.map.isVideoTexture===!0&&dt.getTransfer(y.map.colorSpace)===vt,decodeVideoTextureEmissive:U&&y.emissiveMap.isVideoTexture===!0&&dt.getTransfer(y.emissiveMap.colorSpace)===vt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===jn,flipSided:y.side===ln,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:be&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&y.extensions.multiDraw===!0||Je)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ee.vertexUv1s=c.has(1),ee.vertexUv2s=c.has(2),ee.vertexUv3s=c.has(3),c.clear(),ee}function _(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)w.push(N),w.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(g(w,y),m(w,y),w.push(n.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function g(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapPMREM),y.push(w.envMapMaxLod),y.push(w.envMapSize),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.diffuseRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.numSunLights),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numSunLightShadows),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.numLightProbeGrids),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function m(y,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.diffuseRoughness&&a.enable(25),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function v(y){const w=d[y.type];let N;if(w){const F=kn[w];N=Pd.clone(F.uniforms)}else N=y.uniforms;return N}function T(y,w){let N=f.get(w);return N!==void 0?++N.usedTimes:(N=new ig(n,w,y,s),l.push(N),f.set(w,N)),N}function M(y){if(--y.usedTimes===0){const w=l.indexOf(y);l[w]=l[l.length-1],l.pop(),f.delete(y.cacheKey),y.destroy()}}function A(y){o.remove(y)}function S(){o.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:v,acquireProgram:T,releaseProgram:M,releaseShaderCache:A,programs:l,dispose:S}}function cg(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function ug(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function rc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ac(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function o(d,h,p,_,g,m){let v=n[e];return v===void 0?(v={id:d.id,object:d,geometry:h,material:p,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},n[e]=v):(v.id=d.id,v.object=d,v.geometry=h,v.material=p,v.materialVariant=a(d),v.groupOrder=_,v.renderOrder=d.renderOrder,v.z=g,v.group=m),e++,v}function c(d,h,p,_,g,m,v){v.reversedDepth===!0&&(g=-g);const T=o(d,h,p,_,g,m);p.transmission>0?i.push(T):p.transparent===!0?s.push(T):t.push(T)}function l(d,h,p,_,g,m){const v=o(d,h,p,_,g,m);p.transmission>0?i.unshift(v):p.transparent===!0?s.unshift(v):t.unshift(v)}function f(d,h){t.length>1&&t.sort(d||ug),i.length>1&&i.sort(h||rc),s.length>1&&s.sort(h||rc)}function u(){for(let d=e,h=n.length;d<h;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:u,sort:f}}function fg(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new ac,n.set(i,[a])):s>=r.length?(a=new ac,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function dg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new K,color:new je};break;case"SpotLight":t={position:new K,direction:new K,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new K,halfWidth:new K,halfHeight:new K};break}return n[e.id]=t,t}}}function hg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let pg=0;function mg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function gg(n){const e=new dg,t=hg(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new K);const s=new K,r=new xt,a=new xt;function o(l){let f=0,u=0,d=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let h=0,p=0,_=0,g=0,m=0,v=0,T=0,M=0,A=0,S=0,y=0,w=0,N=0,F=0;l.sort(mg);for(let G=0,ce=l.length;G<ce;G++){const O=l[G],ne=O.color,ue=O.intensity,re=O.distance;let Ee=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Fi?Ee=O.shadow.map.texture:Ee=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)f+=ne.r*ue,u+=ne.g*ue,d+=ne.b*ue;else if(O.isLightProbe){for(let he=0;he<9;he++)i.probe[he].addScaledVector(O.sh.coefficients[he],ue);F++}else if(O.isSunLight){const he=e.get(O);if(he.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const _e=O.shadow,Te=t.get(O);Te.shadowIntensity=_e.intensity,Te.shadowBias=_e.bias,Te.shadowNormalBias=_e.normalBias,Te.shadowRadius=_e.radius,Te.shadowMapSize.copy(_e.mapSize).multiply(_e.getFrameExtents()),i.sunShadow[p]=Te,i.sunShadowMap[p]=Ee;const I=_e.getViewportCount();for(let de=0;de<I;de++)i.sunShadowMatrix[_+de]=_e.getMatrix(de),i.sunShadowCascade[_+de]=_e._cascadeData[de];_+=I,p++}i.sun[h]=he,h++}else if(O.isDirectionalLight){const he=e.get(O);if(he.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const _e=O.shadow,Te=t.get(O);Te.shadowIntensity=_e.intensity,Te.shadowBias=_e.bias,Te.shadowNormalBias=_e.normalBias,Te.shadowRadius=_e.radius,Te.shadowMapSize=_e.mapSize,i.directionalShadow[g]=Te,i.directionalShadowMap[g]=Ee,i.directionalShadowMatrix[g]=O.shadow.matrix,A++}i.directional[g]=he,g++}else if(O.isSpotLight){const he=e.get(O);he.position.setFromMatrixPosition(O.matrixWorld),he.color.copy(ne).multiplyScalar(ue),he.distance=re,he.coneCos=Math.cos(O.angle),he.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),he.decay=O.decay,i.spot[v]=he;const _e=O.shadow;if(O.map&&(i.spotLightMap[w]=O.map,w++,_e.updateMatrices(O),O.castShadow&&N++),i.spotLightMatrix[v]=_e.matrix,O.castShadow){const Te=t.get(O);Te.shadowIntensity=_e.intensity,Te.shadowBias=_e.bias,Te.shadowNormalBias=_e.normalBias,Te.shadowRadius=_e.radius,Te.shadowMapSize=_e.mapSize,i.spotShadow[v]=Te,i.spotShadowMap[v]=Ee,y++}v++}else if(O.isRectAreaLight){const he=e.get(O);he.color.copy(ne).multiplyScalar(ue),he.halfWidth.set(O.width*.5,0,0),he.halfHeight.set(0,O.height*.5,0),i.rectArea[T]=he,T++}else if(O.isPointLight){const he=e.get(O);if(he.color.copy(O.color).multiplyScalar(O.intensity),he.distance=O.distance,he.decay=O.decay,O.castShadow){const _e=O.shadow,Te=t.get(O);Te.shadowIntensity=_e.intensity,Te.shadowBias=_e.bias,Te.shadowNormalBias=_e.normalBias,Te.shadowRadius=_e.radius,Te.shadowMapSize=_e.mapSize,Te.shadowCameraNear=_e.camera.near,Te.shadowCameraFar=_e.camera.far,i.pointShadow[m]=Te,i.pointShadowMap[m]=Ee,i.pointShadowMatrix[m]=O.shadow.matrix,S++}i.point[m]=he,m++}else if(O.isHemisphereLight){const he=e.get(O);he.skyColor.copy(O.color).multiplyScalar(ue),he.groundColor.copy(O.groundColor).multiplyScalar(ue),i.hemi[M]=he,M++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Be.LTC_FLOAT_1,i.rectAreaLTC2=Be.LTC_FLOAT_2):(i.rectAreaLTC1=Be.LTC_HALF_1,i.rectAreaLTC2=Be.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=u,i.ambient[2]=d;const k=i.hash;(k.sunLength!==h||k.directionalLength!==g||k.pointLength!==m||k.spotLength!==v||k.rectAreaLength!==T||k.hemiLength!==M||k.numSunShadows!==p||k.numDirectionalShadows!==A||k.numPointShadows!==S||k.numSpotShadows!==y||k.numSpotMaps!==w||k.numLightProbes!==F)&&(i.sun.length=h,i.directional.length=g,i.spot.length=v,i.rectArea.length=T,i.point.length=m,i.hemi.length=M,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=y,i.spotShadowMap.length=y,i.spotLightMatrix.length=y+w-N,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=F,k.sunLength=h,k.directionalLength=g,k.pointLength=m,k.spotLength=v,k.rectAreaLength=T,k.hemiLength=M,k.numSunShadows=p,k.numDirectionalShadows=A,k.numPointShadows=S,k.numSpotShadows=y,k.numSpotMaps=w,k.numLightProbes=F,i.version=pg++)}function c(l,f){let u=0,d=0,h=0,p=0,_=0,g=0;const m=f.matrixWorldInverse;for(let v=0,T=l.length;v<T;v++){const M=l[v];if(M.isSunLight){const A=i.sun[u];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(m),u++}else if(M.isDirectionalLight){const A=i.directional[d];A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),d++}else if(M.isSpotLight){const A=i.spot[p];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const A=i.rectArea[_];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const A=i.point[h];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){const A=i.hemi[g];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:i}}function oc(n){const e=new gg(n),t=[],i=[],s=[];function r(u){f.camera=u,t.length=0,i.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){i.push(u)}function c(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function l(u){e.setupView(t,u)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function xg(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new oc(n),e.set(s,[o])):r>=a.length?(o=new oc(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const _g=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vg=`uniform sampler2D shadow_pass;
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
}`,yg=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],Mg=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],lc=new xt,Ss=new K,Fa=new K;function bg(n,e,t){let i=new Js;const s=new Ze,r=new Ze,a=new At,o=new Ud,c=new Fd,l={},f=t.maxTextureSize,u={[Ui]:ln,[ln]:Ui,[jn]:jn},d=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:_g,fragmentShader:vg}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const p=new $t;p.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new lt(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ks;let m=this.type;this.render=function(S,y,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===af&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ks);const N=n.getRenderTarget(),F=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),G=n.state;G.setBlending(as),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const ce=m!==this.type;ce&&y.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(ne=>ne.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,ne=S.length;O<ne;O++){const ue=S[O],re=ue.shadow;if(re===void 0){Qe("WebGLShadowMap:",ue,"has no shadow.");continue}if(re.autoUpdate===!1&&re.needsUpdate===!1)continue;s.copy(re.mapSize);const Ee=re.getFrameExtents();s.multiply(Ee),r.copy(re.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/Ee.x),s.x=r.x*Ee.x,re.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/Ee.y),s.y=r.y*Ee.y,re.mapSize.y=r.y));const he=n.state.buffers.depth.getReversed();if(re.camera._reversedDepth=he,re.map===null||ce===!0){if(re.map!==null&&(re.map.depthTexture!==null&&(re.map.depthTexture.dispose(),re.map.depthTexture=null),re.map.dispose()),this.type===Us){if(ue.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}re.map=new hn(s.x,s.y,{format:Fi,type:Nn,minFilter:dn,magFilter:dn,generateMipmaps:!1}),re.map.texture.name=ue.name+".shadowMap",re.map.depthTexture=new ds(s.x,s.y,Dn),re.map.depthTexture.name=ue.name+".shadowMapDepth",re.map.depthTexture.format=yi,re.map.depthTexture.compareFunction=null,re.map.depthTexture.minFilter=Yt,re.map.depthTexture.magFilter=Yt}else ue.isPointLight?(re.map=new Qo(s.x),re.map.depthTexture=new Mu(s.x,Wn)):(re.map=new hn(s.x,s.y),re.map.depthTexture=new ds(s.x,s.y,Wn)),re.map.depthTexture.name=ue.name+".shadowMap",re.map.depthTexture.format=yi,this.type===ks?(re.map.depthTexture.compareFunction=he?uu:cu,re.map.depthTexture.minFilter=dn,re.map.depthTexture.magFilter=dn):(re.map.depthTexture.compareFunction=null,re.map.depthTexture.minFilter=Yt,re.map.depthTexture.magFilter=Yt);re.camera.updateProjectionMatrix()}re.map.isWebGLCubeRenderTarget!==!0&&(re.map.width!==s.x||re.map.height!==s.y)&&re.map.setSize(s.x,s.y);const _e=re.map.isWebGLCubeRenderTarget?6:re.getViewportCount();ue.isPointLight!==!0&&re.updateMatrices(ue,w);const Te=(re.camera.layers.mask&4294967294)!==0?re.camera.layers:w.layers;for(let I=0;I<_e;I++){const de=re.getCamera(I);if(ue.isPointLight){const q=re.camera,pe=re.matrix,ve=ue.distance||q.far;ve!==q.far&&(q.far=ve,q.updateProjectionMatrix()),Ss.setFromMatrixPosition(ue.matrixWorld),q.position.copy(Ss),Fa.copy(q.position),Fa.add(yg[I]),q.up.copy(Mg[I]),q.lookAt(Fa),q.updateMatrixWorld(),pe.makeTranslation(-Ss.x,-Ss.y,-Ss.z),lc.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),re._frustum.setFromProjectionMatrix(lc,q.coordinateSystem,q.reversedDepth)}if(re.map.isWebGLCubeRenderTarget)n.setRenderTarget(re.map,I),n.clear();else{I===0&&(n.setRenderTarget(re.map),n.clear());const q=re.getViewport(I);a.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),G.viewport(a)}i=re.getFrustum(I),M(y,w,de,ue,Te,this.type)}re.isPointLightShadow!==!0&&this.type===Us&&v(re,w),re.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(N,F,k)};function v(S,y){const w=e.update(_);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,h.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),S.mapPass===null?S.mapPass=new hn(s.x,s.y,{format:Fi,type:Nn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(y,null,w,d,_,null),h.uniforms.shadow_pass.value=S.mapPass.texture,h.uniforms.resolution.value.set(S.map.width,S.map.height),h.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(y,null,w,h,_,null)}function T(S,y,w,N){let F=null;const k=w.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(k!==void 0)F=k;else if(F=w.isPointLight===!0?c:o,n.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){const G=F.uuid,ce=y.uuid;let O=l[G];O===void 0&&(O={},l[G]=O);let ne=O[ce];ne===void 0&&(ne=F.clone(),O[ce]=ne,y.addEventListener("dispose",A)),F=ne}if(F.visible=y.visible,F.wireframe=y.wireframe,N===Us?F.side=y.shadowSide!==null?y.shadowSide:y.side:F.side=y.shadowSide!==null?y.shadowSide:u[y.side],F.alphaMap=y.alphaMap,F.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,F.map=y.map,F.clipShadows=y.clipShadows,F.clippingPlanes=y.clippingPlanes,F.clipIntersection=y.clipIntersection,F.displacementMap=y.displacementMap,F.displacementScale=y.displacementScale,F.displacementBias=y.displacementBias,F.wireframeLinewidth=y.wireframeLinewidth,F.linewidth=y.linewidth,w.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const G=n.properties.get(F);G.light=w}return F}function M(S,y,w,N,F,k){if(S.visible===!1)return;if(S.layers.test(F)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&k===Us)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,S.matrixWorld);const O=e.update(S),ne=S.material;if(Array.isArray(ne)){const ue=O.groups;for(let re=0,Ee=ue.length;re<Ee;re++){const he=ue[re],_e=ne[he.materialIndex];if(_e&&_e.visible){const Te=T(S,_e,N,k);S.onBeforeShadow(n,S,y,w,O,Te,he),n.renderBufferDirect(w,null,O,Te,S,he),S.onAfterShadow(n,S,y,w,O,Te,he)}}}else if(ne.visible){const ue=T(S,ne,N,k);S.onBeforeShadow(n,S,y,w,O,ue,null),n.renderBufferDirect(w,null,O,ue,S,null),S.onAfterShadow(n,S,y,w,O,ue,null)}}const ce=S.children;for(let O=0,ne=ce.length;O<ne;O++)M(ce[O],y,w,N,F,k)}function A(S){S.target.removeEventListener("dispose",A);for(const w in l){const N=l[w],F=S.target.uuid;F in N&&(N[F].dispose(),delete N[F])}}}function Sg(n,e){function t(){let B=!1;const x=new At;let P=null;const z=new At(0,0,0,0);return{setMask:function(V){P!==V&&!B&&(n.colorMask(V,V,V,V),P=V)},setLocked:function(V){B=V},setClear:function(V,J,se,be,ae){ae===!0&&(V*=be,J*=be,se*=be),x.set(V,J,se,be),z.equals(x)===!1&&(n.clearColor(V,J,se,be),z.copy(x))},reset:function(){B=!1,P=null,z.set(-1,0,0,0)}}}function i(){let B=!1,x=!1,P=null,z=null,V=null;return{setReversed:function(J){if(x!==J){const se=e.get("EXT_clip_control");J?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT),x=J;const be=V;V=null,this.setClear(be)}},getReversed:function(){return x},setTest:function(J){J?Pe(n.DEPTH_TEST):Le(n.DEPTH_TEST)},setMask:function(J){P!==J&&!B&&(n.depthMask(J),P=J)},setFunc:function(J){if(x&&(J=Bf[J]),z!==J){switch(J){case Wa:n.depthFunc(n.NEVER);break;case Xa:n.depthFunc(n.ALWAYS);break;case qa:n.depthFunc(n.LESS);break;case Xs:n.depthFunc(n.LEQUAL);break;case $a:n.depthFunc(n.EQUAL);break;case Ya:n.depthFunc(n.GEQUAL);break;case Ka:n.depthFunc(n.GREATER);break;case Ja:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}z=J}},setLocked:function(J){B=J},setClear:function(J){V!==J&&(V=J,x&&(J=1-J),n.clearDepth(J))},reset:function(){B=!1,P=null,z=null,V=null,x=!1}}}function s(){let B=!1,x=null,P=null,z=null,V=null,J=null,se=null,be=null,ae=null;return{setTest:function(ge){B||(ge?Pe(n.STENCIL_TEST):Le(n.STENCIL_TEST))},setMask:function(ge){x!==ge&&!B&&(n.stencilMask(ge),x=ge)},setFunc:function(ge,ee,X){(P!==ge||z!==ee||V!==X)&&(n.stencilFunc(ge,ee,X),P=ge,z=ee,V=X)},setOp:function(ge,ee,X){(J!==ge||se!==ee||be!==X)&&(n.stencilOp(ge,ee,X),J=ge,se=ee,be=X)},setLocked:function(ge){B=ge},setClear:function(ge){ae!==ge&&(n.clearStencil(ge),ae=ge)},reset:function(){B=!1,x=null,P=null,z=null,V=null,J=null,se=null,be=null,ae=null}}}const r=new t,a=new i,o=new s;let c={};const l=new WeakMap;let f={},u={},d={},h=new WeakMap,p=[],_=null,g=!1,m=null,v=null,T=null,M=null,A=null,S=null,y=null,w=new je(0,0,0),N=0,F=!1,k=null,G=null,ce=null,O=null,ne=null;const ue=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,Ee=0;const he=n.getParameter(n.VERSION);he.indexOf("WebGL")!==-1?(Ee=parseFloat(/^WebGL (\d)/.exec(he)[1]),re=Ee>=1):he.indexOf("OpenGL ES")!==-1&&(Ee=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),re=Ee>=2);let _e=null,Te={};const I=n.getParameter(n.SCISSOR_BOX),de=n.getParameter(n.VIEWPORT),q=new At().fromArray(I),pe=new At().fromArray(de);function ve(B,x,P,z){const V=new Uint8Array(4),J=n.createTexture();n.bindTexture(B,J),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let se=0;se<P;se++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(x,0,n.RGBA,1,1,z,0,n.RGBA,n.UNSIGNED_BYTE,V):n.texImage2D(x+se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,V);return J}const Ie={};Ie[n.TEXTURE_2D]=ve(n.TEXTURE_2D,n.TEXTURE_2D,1),Ie[n.TEXTURE_CUBE_MAP]=ve(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ie[n.TEXTURE_2D_ARRAY]=ve(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ie[n.TEXTURE_3D]=ve(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Pe(n.DEPTH_TEST),a.setFunc(Xs),C(!1),te(ll),Pe(n.CULL_FACE),Se(as);function Pe(B){f[B]!==!0&&(n.enable(B),f[B]=!0)}function Le(B){f[B]!==!1&&(n.disable(B),f[B]=!1)}function Je(B,x){return d[B]!==x?(n.bindFramebuffer(B,x),d[B]=x,B===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=x),B===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=x),!0):!1}function Ce(B,x){let P=p,z=!1;if(B){P=h.get(x),P===void 0&&(P=[],h.set(x,P));const V=B.textures;if(P.length!==V.length||P[0]!==n.COLOR_ATTACHMENT0){for(let J=0,se=V.length;J<se;J++)P[J]=n.COLOR_ATTACHMENT0+J;P.length=V.length,z=!0}}else P[0]!==n.BACK&&(P[0]=n.BACK,z=!0);z&&n.drawBuffers(P)}function Ye(B){return _!==B?(n.useProgram(B),_=B,!0):!1}const Z={[is]:n.FUNC_ADD,[lf]:n.FUNC_SUBTRACT,[cf]:n.FUNC_REVERSE_SUBTRACT};Z[uf]=n.MIN,Z[ff]=n.MAX;const Y={[df]:n.ZERO,[hf]:n.ONE,[pf]:n.SRC_COLOR,[$c]:n.SRC_ALPHA,[yf]:n.SRC_ALPHA_SATURATE,[_f]:n.DST_COLOR,[gf]:n.DST_ALPHA,[mf]:n.ONE_MINUS_SRC_COLOR,[Yc]:n.ONE_MINUS_SRC_ALPHA,[vf]:n.ONE_MINUS_DST_COLOR,[xf]:n.ONE_MINUS_DST_ALPHA,[Mf]:n.CONSTANT_COLOR,[bf]:n.ONE_MINUS_CONSTANT_COLOR,[Sf]:n.CONSTANT_ALPHA,[wf]:n.ONE_MINUS_CONSTANT_ALPHA};function Se(B,x,P,z,V,J,se,be,ae,ge){if(B===as){g===!0&&(Le(n.BLEND),g=!1);return}if(g===!1&&(Pe(n.BLEND),g=!0),B!==of){if(B!==m||ge!==F){if((v!==is||A!==is)&&(n.blendEquation(n.FUNC_ADD),v=is,A=is),ge)switch(B){case Bs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cl:n.blendFunc(n.ONE,n.ONE);break;case ul:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:gt("WebGLState: Invalid blending: ",B);break}else switch(B){case Bs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ul:gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fl:gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:gt("WebGLState: Invalid blending: ",B);break}T=null,M=null,S=null,y=null,w.set(0,0,0),N=0,m=B,F=ge}return}V=V||x,J=J||P,se=se||z,(x!==v||V!==A)&&(n.blendEquationSeparate(Z[x],Z[V]),v=x,A=V),(P!==T||z!==M||J!==S||se!==y)&&(n.blendFuncSeparate(Y[P],Y[z],Y[J],Y[se]),T=P,M=z,S=J,y=se),(be.equals(w)===!1||ae!==N)&&(n.blendColor(be.r,be.g,be.b,ae),w.copy(be),N=ae),m=B,F=!1}function b(B,x){B.side===jn?Le(n.CULL_FACE):Pe(n.CULL_FACE);let P=B.side===ln;x&&(P=!P),C(P),B.blending===Bs&&B.transparent===!1?Se(as):Se(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);const z=B.stencilWrite;o.setTest(z),z&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),U(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Pe(n.SAMPLE_ALPHA_TO_COVERAGE):Le(n.SAMPLE_ALPHA_TO_COVERAGE)}function C(B){k!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),k=B)}function te(B){B!==sf?(Pe(n.CULL_FACE),B!==G&&(B===ll?n.cullFace(n.BACK):B===rf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Le(n.CULL_FACE),G=B}function W(B){B!==ce&&(re&&n.lineWidth(B),ce=B)}function U(B,x,P){B?(Pe(n.POLYGON_OFFSET_FILL),(O!==x||ne!==P)&&(O=x,ne=P,a.getReversed()&&(x=-x,P=-P),n.polygonOffset(x,P))):Le(n.POLYGON_OFFSET_FILL)}function j(B){B?Pe(n.SCISSOR_TEST):Le(n.SCISSOR_TEST)}function Q(B){B===void 0&&(B=n.TEXTURE0+ue-1),_e!==B&&(n.activeTexture(B),_e=B)}function H(B,x,P){P===void 0&&(_e===null?P=n.TEXTURE0+ue-1:P=_e);let z=Te[P];z===void 0&&(z={type:void 0,texture:void 0},Te[P]=z),(z.type!==B||z.texture!==x)&&(_e!==P&&(n.activeTexture(P),_e=P),n.bindTexture(B,x||Ie[B]),z.type=B,z.texture=x)}function L(){const B=Te[_e];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function oe(){try{n.compressedTexImage2D(...arguments)}catch(B){gt("WebGLState:",B)}}function Me(){try{n.compressedTexImage3D(...arguments)}catch(B){gt("WebGLState:",B)}}function Ne(){try{n.texSubImage2D(...arguments)}catch(B){gt("WebGLState:",B)}}function Ae(){try{n.texSubImage3D(...arguments)}catch(B){gt("WebGLState:",B)}}function et(){try{n.compressedTexSubImage2D(...arguments)}catch(B){gt("WebGLState:",B)}}function He(){try{n.compressedTexSubImage3D(...arguments)}catch(B){gt("WebGLState:",B)}}function Xe(){try{n.texStorage2D(...arguments)}catch(B){gt("WebGLState:",B)}}function D(){try{n.texStorage3D(...arguments)}catch(B){gt("WebGLState:",B)}}function E(){try{n.texImage2D(...arguments)}catch(B){gt("WebGLState:",B)}}function ie(){try{n.texImage3D(...arguments)}catch(B){gt("WebGLState:",B)}}function De(B){return u[B]!==void 0?u[B]:n.getParameter(B)}function we(B,x){u[B]!==x&&(n.pixelStorei(B,x),u[B]=x)}function Fe(B){q.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),q.copy(B))}function Ue(B){pe.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),pe.copy(B))}function xe(B,x){let P=l.get(x);P===void 0&&(P=new WeakMap,l.set(x,P));let z=P.get(B);z===void 0&&(z=n.getUniformBlockIndex(x,B.name),n.uniformBlockBinding(x,z,z),P.set(B,z))}function ye(B,x,P){const V=l.get(x).get(B);c[V]!==P&&(n.bindBufferBase(n.UNIFORM_BUFFER,V,P),c[V]=P)}function ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),f={},u={},_e=null,Te={},d={},c={},h=new WeakMap,p=[],_=null,g=!1,m=null,v=null,T=null,M=null,A=null,S=null,y=null,w=new je(0,0,0),N=0,F=!1,k=null,G=null,ce=null,O=null,ne=null,q.set(0,0,n.canvas.width,n.canvas.height),pe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Pe,disable:Le,bindFramebuffer:Je,drawBuffers:Ce,useProgram:Ye,setBlending:Se,setMaterial:b,setFlipSided:C,setCullFace:te,setLineWidth:W,setPolygonOffset:U,setScissorTest:j,activeTexture:Q,bindTexture:H,unbindTexture:L,compressedTexImage2D:oe,compressedTexImage3D:Me,texImage2D:E,texImage3D:ie,pixelStorei:we,getParameter:De,updateUBOMapping:xe,uniformBlockBinding:ye,texStorage2D:Xe,texStorage3D:D,texSubImage2D:Ne,texSubImage3D:Ae,compressedTexSubImage2D:et,compressedTexSubImage3D:He,scissor:Fe,viewport:Ue,reset:ze}}function wg(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ze,f=new WeakMap,u=new Set;let d;const h=new WeakMap,p=new Set,_=new FinalizationRegistry(D=>p.delete(D));let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(D,E){return g?new OffscreenCanvas(D,E):Zr("canvas")}function v(D,E,ie){let De=1;const we=Xe(D);if((we.width>ie||we.height>ie)&&(De=ie/Math.max(we.width,we.height)),De<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Fe=Math.floor(De*we.width),Ue=Math.floor(De*we.height);d===void 0&&(d=m(Fe,Ue));const xe=E?m(Fe,Ue):d;return xe.width=Fe,xe.height=Ue,xe.getContext("2d").drawImage(D,0,0,Fe,Ue),Qe("WebGLRenderer: Texture has been resized from ("+we.width+"x"+we.height+") to ("+Fe+"x"+Ue+")."),xe}else return"data"in D&&Qe("WebGLRenderer: Image in DataTexture is too big ("+we.width+"x"+we.height+")."),D;return D}function T(D){return D.generateMipmaps}function M(D){n.generateMipmap(D)}function A(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(D,E,ie,De,we,Fe=!1){if(D!==null){if(n[D]!==void 0)return n[D];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ue;De&&(Ue=e.get("EXT_texture_norm16"),Ue||Qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let xe=E;if(E===n.RED&&(ie===n.FLOAT&&(xe=n.R32F),ie===n.HALF_FLOAT&&(xe=n.R16F),ie===n.UNSIGNED_BYTE&&(xe=n.R8),ie===n.UNSIGNED_SHORT&&Ue&&(xe=Ue.R16_EXT),ie===n.SHORT&&Ue&&(xe=Ue.R16_SNORM_EXT)),E===n.RED_INTEGER&&(ie===n.UNSIGNED_BYTE&&(xe=n.R8UI),ie===n.UNSIGNED_SHORT&&(xe=n.R16UI),ie===n.UNSIGNED_INT&&(xe=n.R32UI),ie===n.BYTE&&(xe=n.R8I),ie===n.SHORT&&(xe=n.R16I),ie===n.INT&&(xe=n.R32I)),E===n.RG&&(ie===n.FLOAT&&(xe=n.RG32F),ie===n.HALF_FLOAT&&(xe=n.RG16F),ie===n.UNSIGNED_BYTE&&(xe=n.RG8),ie===n.UNSIGNED_SHORT&&Ue&&(xe=Ue.RG16_EXT),ie===n.SHORT&&Ue&&(xe=Ue.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(ie===n.UNSIGNED_BYTE&&(xe=n.RG8UI),ie===n.UNSIGNED_SHORT&&(xe=n.RG16UI),ie===n.UNSIGNED_INT&&(xe=n.RG32UI),ie===n.BYTE&&(xe=n.RG8I),ie===n.SHORT&&(xe=n.RG16I),ie===n.INT&&(xe=n.RG32I)),E===n.RGB_INTEGER&&(ie===n.UNSIGNED_BYTE&&(xe=n.RGB8UI),ie===n.UNSIGNED_SHORT&&(xe=n.RGB16UI),ie===n.UNSIGNED_INT&&(xe=n.RGB32UI),ie===n.BYTE&&(xe=n.RGB8I),ie===n.SHORT&&(xe=n.RGB16I),ie===n.INT&&(xe=n.RGB32I)),E===n.RGBA_INTEGER&&(ie===n.UNSIGNED_BYTE&&(xe=n.RGBA8UI),ie===n.UNSIGNED_SHORT&&(xe=n.RGBA16UI),ie===n.UNSIGNED_INT&&(xe=n.RGBA32UI),ie===n.BYTE&&(xe=n.RGBA8I),ie===n.SHORT&&(xe=n.RGBA16I),ie===n.INT&&(xe=n.RGBA32I)),E===n.RGB&&(ie===n.UNSIGNED_SHORT&&Ue&&(xe=Ue.RGB16_EXT),ie===n.SHORT&&Ue&&(xe=Ue.RGB16_SNORM_EXT),ie===n.UNSIGNED_INT_5_9_9_9_REV&&(xe=n.RGB9_E5),ie===n.UNSIGNED_INT_10F_11F_11F_REV&&(xe=n.R11F_G11F_B10F)),E===n.RGBA){const ye=Fe?Jr:dt.getTransfer(we);ie===n.FLOAT&&(xe=n.RGBA32F),ie===n.HALF_FLOAT&&(xe=n.RGBA16F),ie===n.UNSIGNED_BYTE&&(xe=ye===vt?n.SRGB8_ALPHA8:n.RGBA8),ie===n.UNSIGNED_SHORT&&Ue&&(xe=Ue.RGBA16_EXT),ie===n.SHORT&&Ue&&(xe=Ue.RGBA16_SNORM_EXT),ie===n.UNSIGNED_SHORT_4_4_4_4&&(xe=n.RGBA4),ie===n.UNSIGNED_SHORT_5_5_5_1&&(xe=n.RGB5_A1)}return(xe===n.R16F||xe===n.R32F||xe===n.RG16F||xe===n.RG32F||xe===n.RGBA16F||xe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function y(D,E){let ie;return D?E===null||E===Wn||E===us?ie=n.DEPTH24_STENCIL8:E===Dn?ie=n.DEPTH32F_STENCIL8:E===Ys&&(ie=n.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Wn||E===us?ie=n.DEPTH_COMPONENT24:E===Dn?ie=n.DEPTH_COMPONENT32F:E===Ys&&(ie=n.DEPTH_COMPONENT16),ie}function w(D,E){return T(D)===!0||D.isFramebufferTexture&&D.minFilter!==Yt&&D.minFilter!==dn?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function N(D){const E=new WeakRef(D);i.get(D).__ref=E,p.add(E),_.register(D,E,E)}function F(D){const E=i.get(D).__ref;E!==void 0&&(p.delete(E),_.unregister(E))}function k(D){ce(D.target)}function G(D){O(D.target)}function ce(D){D.removeEventListener("dispose",k),F(D),ue(D),D.isVideoTexture&&f.delete(D),D.isHTMLTexture&&u.delete(D)}function O(D){D.removeEventListener("dispose",G),F(D),Ee(D)}function ne(){for(const D of p){const E=D.deref();E!==void 0&&(E.isRenderTarget===!0?O(E):ce(E))}p.clear(),u.clear()}function ue(D){const E=i.get(D);if(E.__webglInit===void 0)return;const ie=D.source,De=h.get(ie);if(De){const we=De[E.__cacheKey];we.usedTimes--,we.usedTimes===0&&re(D),Object.keys(De).length===0&&h.delete(ie)}i.remove(D)}function re(D){const E=i.get(D);n.deleteTexture(E.__webglTexture);const ie=D.source,De=h.get(ie);delete De[E.__cacheKey],a.memory.textures--}function Ee(D){const E=i.get(D);E.__depthDisposeCallback&&E.__depthDisposeCallback();const ie=D.depthTexture;if(ie&&ie.renderTarget===D&&ce(ie),D.isWebGLCubeRenderTarget)for(let we=0;we<6;we++){if(Array.isArray(E.__webglFramebuffer[we]))for(let Fe=0;Fe<E.__webglFramebuffer[we].length;Fe++)n.deleteFramebuffer(E.__webglFramebuffer[we][Fe]);else n.deleteFramebuffer(E.__webglFramebuffer[we]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[we])}else{if(Array.isArray(E.__webglFramebuffer))for(let we=0;we<E.__webglFramebuffer.length;we++)n.deleteFramebuffer(E.__webglFramebuffer[we]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let we=0;we<E.__webglColorRenderbuffer.length;we++)E.__webglColorRenderbuffer[we]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[we]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const De=D.textures;for(let we=0,Fe=De.length;we<Fe;we++){const Ue=i.get(De[we]);Ue.__webglTexture&&(n.deleteTexture(Ue.__webglTexture),a.memory.textures--),i.remove(De[we])}i.remove(D)}let he=0;function _e(){he=0}function Te(){return he}function I(D){he=D}function de(){const D=he;return D>=s.maxTextures&&Qe("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+s.maxTextures),he+=1,D}function q(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.mipmapsAutoUpdate),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function pe(D,E){const ie=i.get(D);if(D.isVideoTexture&&et(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&ie.__version!==D.version){const De=D.image;if(De===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if(De.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{b(ie,D,E);return}}else D.isExternalTexture&&(ie.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture,n.TEXTURE0+E)}function ve(D,E){const ie=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&ie.__version!==D.version){b(ie,D,E);return}else D.isExternalTexture&&(ie.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,ie.__webglTexture,n.TEXTURE0+E)}function Ie(D,E){const ie=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&ie.__version!==D.version){b(ie,D,E);return}t.bindTexture(n.TEXTURE_3D,ie.__webglTexture,n.TEXTURE0+E)}function Pe(D,E){const ie=i.get(D);if(D.version>0&&ie.__version!==D.version){C(ie,D,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture,n.TEXTURE0+E)}const Le={[$s]:n.REPEAT,[ti]:n.CLAMP_TO_EDGE,[Za]:n.MIRRORED_REPEAT},Je={[Yt]:n.NEAREST,[Af]:n.NEAREST_MIPMAP_NEAREST,[rr]:n.NEAREST_MIPMAP_LINEAR,[dn]:n.LINEAR,[oa]:n.LINEAR_MIPMAP_NEAREST,[ni]:n.LINEAR_MIPMAP_LINEAR},Ce={[Lf]:n.NEVER,[fu]:n.ALWAYS,[Df]:n.LESS,[cu]:n.LEQUAL,[If]:n.EQUAL,[uu]:n.GEQUAL,[Nf]:n.GREATER,[Uf]:n.NOTEQUAL};function Ye(D,E){if(E.type===Dn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===dn||E.magFilter===oa||E.magFilter===rr||E.magFilter===ni||E.minFilter===dn||E.minFilter===oa||E.minFilter===rr||E.minFilter===ni)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,Le[E.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,Le[E.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,Le[E.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,Je[E.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,Je[E.minFilter]),E.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,Ce[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Yt||E.minFilter!==rr&&E.minFilter!==ni||E.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Z(D,E){let ie=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",k),N(E));const De=E.source;let we=h.get(De);we===void 0&&(we={},h.set(De,we));const Fe=q(E);if(Fe!==D.__cacheKey){we[Fe]===void 0&&(we[Fe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,ie=!0),we[Fe].usedTimes++;const Ue=we[D.__cacheKey];Ue!==void 0&&(we[D.__cacheKey].usedTimes--,Ue.usedTimes===0&&re(E)),D.__cacheKey=Fe,D.__webglTexture=we[Fe].texture}return ie}function Y(D,E,ie){return Math.floor(Math.floor(D/ie)/E)}function Se(D,E,ie,De){const Fe=D.updateRanges;if(Fe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,ie,De,E.data);else{Fe.sort((B,x)=>B.start-x.start);let Ue=0;for(let B=1;B<Fe.length;B++){const x=Fe[Ue],P=Fe[B],z=x.start+x.count,V=Y(P.start,E.width,4),J=Y(x.start,E.width,4);P.start<=z+1&&V===J&&Y(P.start+P.count-1,E.width,4)===V?x.count=Math.max(x.count,P.start+P.count-x.start):(++Ue,Fe[Ue]=P)}Fe.length=Ue+1;const xe=t.getParameter(n.UNPACK_ROW_LENGTH),ye=t.getParameter(n.UNPACK_SKIP_PIXELS),ze=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let B=0,x=Fe.length;B<x;B++){const P=Fe[B],z=Math.floor(P.start/4),V=Math.ceil(P.count/4),J=z%E.width,se=Math.floor(z/E.width),be=V,ae=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,J),t.pixelStorei(n.UNPACK_SKIP_ROWS,se),t.texSubImage2D(n.TEXTURE_2D,0,J,se,be,ae,ie,De,E.data)}D.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,xe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ye),t.pixelStorei(n.UNPACK_SKIP_ROWS,ze)}}function b(D,E,ie){let De=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(De=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(De=n.TEXTURE_3D);const we=Z(D,E),Fe=E.source;t.bindTexture(De,D.__webglTexture,n.TEXTURE0+ie);const Ue=i.get(Fe);if(Fe.version!==Ue.__version||we===!0){if(t.activeTexture(n.TEXTURE0+ie),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ae=dt.getPrimaries(dt.workingColorSpace),ge=E.colorSpace===ei?null:dt.getPrimaries(E.colorSpace),ee=E.colorSpace===ei||ae===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let ye=v(E.image,!1,s.maxTextureSize);ye=He(E,ye);const ze=r.convert(E.format,E.colorSpace),B=r.convert(E.type);let x=S(E.internalFormat,ze,B,E.normalized,E.colorSpace,E.isVideoTexture);Ye(De,E);let P;const z=E.mipmaps,V=E.isVideoTexture!==!0,J=Ue.__version===void 0||we===!0,se=Fe.dataReady,be=w(E,ye);if(E.isDepthTexture)x=y(E.format===_i,E.type),J&&(V?t.texStorage2D(n.TEXTURE_2D,1,x,ye.width,ye.height):t.texImage2D(n.TEXTURE_2D,0,x,ye.width,ye.height,0,ze,B,null));else if(E.isDataTexture)if(z.length>0){V&&J&&t.texStorage2D(n.TEXTURE_2D,be,x,z[0].width,z[0].height);for(let ae=0,ge=z.length;ae<ge;ae++)P=z[ae],V?se&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,P.width,P.height,ze,B,P.data):t.texImage2D(n.TEXTURE_2D,ae,x,P.width,P.height,0,ze,B,P.data);E.generateMipmaps=!1}else V?(J&&t.texStorage2D(n.TEXTURE_2D,be,x,ye.width,ye.height),se&&Se(E,ye,ze,B)):t.texImage2D(n.TEXTURE_2D,0,x,ye.width,ye.height,0,ze,B,ye.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){V&&J&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,x,z[0].width,z[0].height,ye.depth);for(let ae=0,ge=z.length;ae<ge;ae++)if(P=z[ae],E.format!==Hn)if(ze!==null)if(V){if(se)if(E.layerUpdates.size>0){const ee=Hl(P.width,P.height,E.format,E.type);for(const X of E.layerUpdates){const Re=P.data.subarray(X*ee/P.data.BYTES_PER_ELEMENT,(X+1)*ee/P.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,X,P.width,P.height,1,ze,Re)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,P.width,P.height,ye.depth,ze,P.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,x,P.width,P.height,ye.depth,0,P.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?se&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,P.width,P.height,ye.depth,ze,B,P.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,x,P.width,P.height,ye.depth,0,ze,B,P.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{V&&J&&t.texStorage2D(n.TEXTURE_2D,be,x,z[0].width,z[0].height);for(let ae=0,ge=z.length;ae<ge;ae++)P=z[ae],E.format!==Hn?ze!==null?V?se&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,P.width,P.height,ze,P.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,x,P.width,P.height,0,P.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?se&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,P.width,P.height,ze,B,P.data):t.texImage2D(n.TEXTURE_2D,ae,x,P.width,P.height,0,ze,B,P.data)}else if(E.isDataArrayTexture)if(V){if(J&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,x,ye.width,ye.height,ye.depth),se)if(E.layerUpdates.size>0){const ae=Hl(ye.width,ye.height,E.format,E.type);for(const ge of E.layerUpdates){const ee=ye.data.subarray(ge*ae/ye.data.BYTES_PER_ELEMENT,(ge+1)*ae/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ge,ye.width,ye.height,1,ze,B,ee)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,ze,B,ye.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,x,ye.width,ye.height,ye.depth,0,ze,B,ye.data);else if(E.isData3DTexture)V?(J&&t.texStorage3D(n.TEXTURE_3D,be,x,ye.width,ye.height,ye.depth),se&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,ze,B,ye.data)):t.texImage3D(n.TEXTURE_3D,0,x,ye.width,ye.height,ye.depth,0,ze,B,ye.data);else if(E.isFramebufferTexture){if(J)if(V)t.texStorage2D(n.TEXTURE_2D,be,x,ye.width,ye.height);else{let ae=ye.width,ge=ye.height;for(let ee=0;ee<be;ee++)t.texImage2D(n.TEXTURE_2D,ee,x,ae,ge,0,ze,B,null),ae>>=1,ge>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){const ae=n.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),ye.parentNode!==ae){ae.appendChild(ye),u.add(E),ae.onpaint=ge=>{const ee=ge.changedElements;for(const X of u)ee.includes(X.image)&&(X.needsUpdate=!0)},ae.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ye);else{const ee=n.RGBA,X=n.RGBA,Re=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ee,X,Re,ye)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(z.length>0){if(V&&J){const ae=Xe(z[0]);t.texStorage2D(n.TEXTURE_2D,be,x,ae.width,ae.height)}for(let ae=0,ge=z.length;ae<ge;ae++)P=z[ae],V?se&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ze,B,P):t.texImage2D(n.TEXTURE_2D,ae,x,ze,B,P);E.generateMipmaps=!1}else if(V){if(J){const ae=Xe(ye);t.texStorage2D(n.TEXTURE_2D,be,x,ae.width,ae.height)}se&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ze,B,ye)}else t.texImage2D(n.TEXTURE_2D,0,x,ze,B,ye);T(E)&&E.mipmapsAutoUpdate===!0&&M(De),Ue.__version=Fe.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function C(D,E,ie){if(E.image.length!==6)return;const De=Z(D,E),we=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+ie);const Fe=i.get(we);if(we.version!==Fe.__version||De===!0){t.activeTexture(n.TEXTURE0+ie);const Ue=dt.getPrimaries(dt.workingColorSpace),xe=E.colorSpace===ei?null:dt.getPrimaries(E.colorSpace),ye=E.colorSpace===ei||Ue===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const ze=E.isCompressedTexture||E.image[0].isCompressedTexture,B=E.image[0]&&E.image[0].isDataTexture,x=[];for(let X=0;X<6;X++)!ze&&!B?x[X]=v(E.image[X],!0,s.maxCubemapSize):x[X]=B?E.image[X].image:E.image[X],x[X]=He(E,x[X]);const P=x[0],z=r.convert(E.format,E.colorSpace),V=r.convert(E.type);let J=S(E.internalFormat,z,V,E.normalized,E.colorSpace);const se=E.isVideoTexture!==!0,be=Fe.__version===void 0||De===!0,ae=we.dataReady;let ge=w(E,P);Ye(n.TEXTURE_CUBE_MAP,E);let ee;if(E.isDepthTexture){if(J=y(E.format===_i,E.type),be)if(se)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,J,P.width,P.height);else for(let X=0;X<6;X++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,J,P.width,P.height,0,z,V,null)}else if(ze){se&&be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,J,P.width,P.height);for(let X=0;X<6;X++){ee=x[X].mipmaps;for(let Re=0;Re<ee.length;Re++){const Ge=ee[Re];E.format!==Hn?z!==null?se?ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,Re,0,0,Ge.width,Ge.height,z,Ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,Re,J,Ge.width,Ge.height,0,Ge.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,Re,0,0,Ge.width,Ge.height,z,V,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,Re,J,Ge.width,Ge.height,0,z,V,Ge.data)}}}else{if(ee=E.mipmaps,se&&be){ee.length>0&&ge++;const X=Xe(x[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,J,X.width,X.height)}for(let X=0;X<6;X++)if(B){se?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,x[X].width,x[X].height,z,V,x[X].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,J,x[X].width,x[X].height,0,z,V,x[X].data);for(let Re=0;Re<ee.length;Re++){const tt=ee[Re].image[X].image;se?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,Re+1,0,0,tt.width,tt.height,z,V,tt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,Re+1,J,tt.width,tt.height,0,z,V,tt.data)}}else{se?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,z,V,x[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,J,z,V,x[X]);for(let Re=0;Re<ee.length;Re++){const Ge=ee[Re];se?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,Re+1,0,0,z,V,Ge.image[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,Re+1,J,z,V,Ge.image[X])}}}T(E)&&E.mipmapsAutoUpdate===!0&&M(n.TEXTURE_CUBE_MAP),Fe.__version=we.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function te(D,E,ie,De,we,Fe){const Ue=r.convert(ie.format,ie.colorSpace),xe=r.convert(ie.type),ye=S(ie.internalFormat,Ue,xe,ie.normalized,ie.colorSpace),ze=i.get(E),B=i.get(ie);if(B.__renderTarget=E,!ze.__hasExternalTextures){const x=Math.max(1,E.width>>Fe),P=Math.max(1,E.height>>Fe);we===n.TEXTURE_3D||we===n.TEXTURE_2D_ARRAY?t.texImage3D(we,Fe,ye,x,P,E.depth,0,Ue,xe,null):t.texImage2D(we,Fe,ye,x,P,0,Ue,xe,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),Ae(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,De,we,B.__webglTexture,0,Ne(E)):(we===n.TEXTURE_2D||we>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&we<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,De,we,B.__webglTexture,Fe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function W(D,E,ie){if(n.bindRenderbuffer(n.RENDERBUFFER,D),E.depthBuffer){const De=E.depthTexture,we=De&&De.isDepthTexture?De.type:null,Fe=y(E.stencilBuffer,we),Ue=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ae(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne(E),Fe,E.width,E.height):ie?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne(E),Fe,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Fe,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ue,n.RENDERBUFFER,D)}else{const De=E.textures;for(let we=0;we<De.length;we++){const Fe=De[we],Ue=r.convert(Fe.format,Fe.colorSpace),xe=r.convert(Fe.type),ye=S(Fe.internalFormat,Ue,xe,Fe.normalized,Fe.colorSpace);Ae(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne(E),ye,E.width,E.height):ie?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne(E),ye,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ye,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function U(D,E,ie){const De=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const we=i.get(E.depthTexture);we.__renderTarget=E;const Fe=De?E.depthTexture.image[0]:E.depthTexture.image;(!we.__webglTexture||Fe.width!==E.width||Fe.height!==E.height)&&(Fe.width=E.width,Fe.height=E.height,E.depthTexture.needsUpdate=!0),De?Pe(E.depthTexture,0):pe(E.depthTexture,0);const Ue=we.__webglTexture,xe=Ne(E),ye=De?n.TEXTURE_CUBE_MAP_POSITIVE_X+ie:n.TEXTURE_2D,ze=E.depthTexture.format===_i?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===yi)Ae(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ze,ye,Ue,0,xe):n.framebufferTexture2D(n.FRAMEBUFFER,ze,ye,Ue,0);else if(E.depthTexture.format===_i)Ae(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ze,ye,Ue,0,xe):n.framebufferTexture2D(n.FRAMEBUFFER,ze,ye,Ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function j(D){const E=i.get(D),ie=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const De=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),De){const we=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,De.removeEventListener("dispose",we)};De.addEventListener("dispose",we),E.__depthDisposeCallback=we}E.__boundDepthTexture=De}if(D.depthTexture&&!E.__autoAllocateDepthBuffer)if(ie)for(let De=0;De<6;De++)U(E.__webglFramebuffer[De],D,De);else D.texture.mipmaps.length>0?U(E.__webglFramebuffer[0],D,0):U(E.__webglFramebuffer,D,0);else if(ie){E.__webglDepthbuffer=[];for(let De=0;De<6;De++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[De]),E.__webglDepthbuffer[De]===void 0)E.__webglDepthbuffer[De]=n.createRenderbuffer(),W(E.__webglDepthbuffer[De],D,!1);else{const we=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Fe=E.__webglDepthbuffer[De];n.bindRenderbuffer(n.RENDERBUFFER,Fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,Fe)}}else if(D.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),W(E.__webglDepthbuffer,D,!1);else{const we=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Fe=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,Fe)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Q(D,E,ie){const De=i.get(D);E!==void 0&&te(De.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),ie!==void 0&&j(D)}function H(D){const E=D.texture,ie=i.get(D),De=i.get(E);D.addEventListener("dispose",G),N(D);const we=D.textures,Fe=D.isWebGLCubeRenderTarget===!0,Ue=we.length>1;if(Ue||(De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture()),De.__version=E.version,a.memory.textures++),Fe){ie.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(E.mipmaps.length>0){ie.__webglFramebuffer[xe]=[];for(let ye=0;ye<E.mipmaps.length;ye++)ie.__webglFramebuffer[xe][ye]=n.createFramebuffer()}else ie.__webglFramebuffer[xe]=n.createFramebuffer()}else{if(E.mipmaps.length>0){ie.__webglFramebuffer=[];for(let xe=0;xe<E.mipmaps.length;xe++)ie.__webglFramebuffer[xe]=n.createFramebuffer()}else ie.__webglFramebuffer=n.createFramebuffer();if(Ue)for(let xe=0,ye=we.length;xe<ye;xe++){const ze=i.get(we[xe]);ze.__webglTexture===void 0&&(ze.__webglTexture=n.createTexture(),a.memory.textures++)}if(D.samples>0&&Ae(D)===!1){ie.__webglMultisampledFramebuffer=n.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let xe=0;xe<we.length;xe++){const ye=we[xe];ie.__webglColorRenderbuffer[xe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,ie.__webglColorRenderbuffer[xe]);const ze=r.convert(ye.format,ye.colorSpace),B=r.convert(ye.type),x=S(ye.internalFormat,ze,B,ye.normalized,ye.colorSpace,D.isXRRenderTarget===!0),P=Ne(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,P,x,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,ie.__webglColorRenderbuffer[xe])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(ie.__webglDepthRenderbuffer=n.createRenderbuffer(),W(ie.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Fe){t.bindTexture(n.TEXTURE_CUBE_MAP,De.__webglTexture),Ye(n.TEXTURE_CUBE_MAP,E);for(let xe=0;xe<6;xe++)if(E.mipmaps.length>0)for(let ye=0;ye<E.mipmaps.length;ye++)te(ie.__webglFramebuffer[xe][ye],D,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ye);else te(ie.__webglFramebuffer[xe],D,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);T(E)?M(n.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(Ue){for(let xe=0,ye=we.length;xe<ye;xe++){const ze=we[xe],B=i.get(ze);let x=n.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(x=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(x,B.__webglTexture),Ye(x,ze),te(ie.__webglFramebuffer,D,ze,n.COLOR_ATTACHMENT0+xe,x,0),T(ze)&&M(x)}t.unbindTexture()}else{let xe=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(xe=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(xe,De.__webglTexture),Ye(xe,E),E.mipmaps.length>0)for(let ye=0;ye<E.mipmaps.length;ye++)te(ie.__webglFramebuffer[ye],D,E,n.COLOR_ATTACHMENT0,xe,ye);else te(ie.__webglFramebuffer,D,E,n.COLOR_ATTACHMENT0,xe,0);T(E)?M(xe):E.mipmaps.length>0&&n.texParameteri(xe,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}D.depthBuffer&&j(D)}function L(D){const E=D.textures;for(let ie=0,De=E.length;ie<De;ie++){const we=E[ie];if(T(we)&&we.mipmapsAutoUpdate===!0){const Fe=A(D),Ue=i.get(we).__webglTexture;t.bindTexture(Fe,Ue),M(Fe),t.unbindTexture()}}}const oe=[];function Me(D){if(D.samples>0){if(Ae(D)===!1){const E=D.textures,ie=D.width,De=D.height;let we=n.COLOR_BUFFER_BIT;const Fe=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ue=i.get(D),xe=E.length>1;if(xe)for(let ze=0;ze<E.length;ze++)t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),D.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let ze=0;ze<E.length;ze++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(we|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(we|=n.STENCIL_BUFFER_BIT)),xe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ue.__webglColorRenderbuffer[ze]);const B=i.get(E[ze]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,B,0)}n.blitFramebuffer(0,0,ie,De,0,0,ie,De,we,n.NEAREST),c===!0&&(oe.length=0,oe.push(n.COLOR_ATTACHMENT0+ze),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&oe.push(Fe),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xe)for(let ze=0;ze<E.length;ze++){t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.RENDERBUFFER,Ue.__webglColorRenderbuffer[ze]);const B=i.get(E[ze]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.TEXTURE_2D,B,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&c){const E=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Ne(D){return Math.min(s.maxSamples,D.samples)}function Ae(D){const E=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function et(D){const E=a.render.frame;f.get(D)!==E&&(f.set(D,E),D.update())}function He(D,E){const ie=D.colorSpace,De=D.format,we=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||ie!==Kr&&ie!==ei&&(dt.getTransfer(ie)===vt?(De!==Hn||we!==fn)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):gt("WebGLTextures: Unsupported texture color space:",ie)),E}function Xe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=de,this.resetTextureUnits=_e,this.getTextureUnits=Te,this.setTextureUnits=I,this.setTexture2D=pe,this.setTexture2DArray=ve,this.setTexture3D=Ie,this.setTextureCube=Pe,this.rebindTextures=Q,this.setupRenderTarget=H,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Ae,this.dispose=ne}function Eg(n,e){function t(i,s=ei){let r;const a=dt.getTransfer(s);if(i===fn)return n.UNSIGNED_BYTE;if(i===ko)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Bo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ru)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===au)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===iu)return n.BYTE;if(i===su)return n.SHORT;if(i===Ys)return n.UNSIGNED_SHORT;if(i===Oo)return n.INT;if(i===Wn)return n.UNSIGNED_INT;if(i===Dn)return n.FLOAT;if(i===Nn)return n.HALF_FLOAT;if(i===ou)return n.ALPHA;if(i===lu)return n.RGB;if(i===Hn)return n.RGBA;if(i===yi)return n.DEPTH_COMPONENT;if(i===_i)return n.DEPTH_STENCIL;if(i===Ho)return n.RED;if(i===Go)return n.RED_INTEGER;if(i===Fi)return n.RG;if(i===Vo)return n.RG_INTEGER;if(i===Wo)return n.RGBA_INTEGER;if(i===Ur||i===Fr||i===zr||i===Or)if(a===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ur)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ur)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qa||i===ja||i===eo||i===to)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===eo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===to)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===no||i===io||i===so||i===ro||i===ao||i===qr||i===oo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===no||i===io)return a===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===so)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ro)return r.COMPRESSED_R11_EAC;if(i===ao)return r.COMPRESSED_SIGNED_R11_EAC;if(i===qr)return r.COMPRESSED_RG11_EAC;if(i===oo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===lo||i===co||i===uo||i===fo||i===ho||i===po||i===mo||i===go||i===xo||i===_o||i===vo||i===yo||i===Mo||i===bo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===lo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===co)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===uo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ho)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===po)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===go)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_o)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Mo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===So||i===wo||i===Eo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===So)return a===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Eo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===To||i===Ao||i===$r||i===Ro)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===To)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ao)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$r)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ro)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===us?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Tg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ag=`
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

}`;class Rg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new bu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Mi({vertexShader:Tg,fragmentShader:Ag,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new vi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cg extends ki{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,f=null,u=null,d=null,h=null,p=null;const _=typeof XRWebGLBinding<"u",g=new Rg,m={},v=t.getContextAttributes();let T=null,M=null;const A=[],S=[],y=new Ze;let w=null,N=null;const F=new _n;F.viewport=new At;const k=new _n;k.viewport=new At;const G=[F,k],ce=new Hd;let O=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let pe=A[q];return pe===void 0&&(pe=new ga,A[q]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(q){let pe=A[q];return pe===void 0&&(pe=new ga,A[q]=pe),pe.getGripSpace()},this.getHand=function(q){let pe=A[q];return pe===void 0&&(pe=new ga,A[q]=pe),pe.getHandSpace()};function ue(q){const pe=S.indexOf(q.inputSource);if(pe===-1)return;const ve=A[pe];ve!==void 0&&(ve.update(q.inputSource,q.frame,l||a),ve.dispatchEvent({type:q.type,data:q.inputSource}))}function re(){s.removeEventListener("select",ue),s.removeEventListener("selectstart",ue),s.removeEventListener("selectend",ue),s.removeEventListener("squeeze",ue),s.removeEventListener("squeezestart",ue),s.removeEventListener("squeezeend",ue),s.removeEventListener("end",re),s.removeEventListener("inputsourceschange",Ee);for(let q=0;q<A.length;q++){const pe=S[q];pe!==null&&(S[q]=null,A[q].disconnect(pe))}O=null,ne=null,g.reset();for(const q in m)delete m[q];if(e.setRenderTarget(T),h=null,d=null,u=null,s=null,M=null,de.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(y.width,y.height,!1),N!==null){const q=N.camera;q.fov=N.fov,q.zoom=N.zoom,q.updateProjectionMatrix(),N=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",ue),s.addEventListener("selectstart",ue),s.addEventListener("selectend",ue),s.addEventListener("squeeze",ue),s.addEventListener("squeezestart",ue),s.addEventListener("squeezeend",ue),s.addEventListener("end",re),s.addEventListener("inputsourceschange",Ee),v.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(y),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ie=null,Pe=null;v.depth&&(Pe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=v.stencil?_i:yi,Ie=v.stencil?us:Wn);const Le={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Le),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new hn(d.textureWidth,d.textureHeight,{format:Hn,type:fn,depthTexture:new ds(d.textureWidth,d.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const ve={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new hn(h.framebufferWidth,h.framebufferHeight,{format:Hn,type:fn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),de.setContext(s),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Ee(q){for(let pe=0;pe<q.removed.length;pe++){const ve=q.removed[pe],Ie=S.indexOf(ve);Ie>=0&&(S[Ie]=null,A[Ie].disconnect(ve))}for(let pe=0;pe<q.added.length;pe++){const ve=q.added[pe];let Ie=S.indexOf(ve);if(Ie===-1){for(let Le=0;Le<A.length;Le++)if(Le>=S.length){S.push(ve),Ie=Le;break}else if(S[Le]===null){S[Le]=ve,Ie=Le;break}if(Ie===-1)break}const Pe=A[Ie];Pe&&Pe.connect(ve)}}function he(q,pe){pe===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(pe.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let pe=q.near,ve=q.far;g.texture!==null&&(g.depthNear>0&&(pe=g.depthNear),g.depthFar>0&&(ve=g.depthFar)),ce.near=k.near=F.near=pe,ce.far=k.far=F.far=ve,(O!==ce.near||ne!==ce.far)&&(s.updateRenderState({depthNear:ce.near,depthFar:ce.far}),O=ce.near,ne=ce.far),ce.layers.mask=q.layers.mask|6,F.layers.mask=ce.layers.mask&-5,k.layers.mask=ce.layers.mask&-3;const Ie=q.parent,Pe=ce.cameras;he(ce,Ie);for(let Le=0;Le<Pe.length;Le++)he(Pe[Le],Ie);ce.projectionMatrix.copy(F.projectionMatrix),ce.projectionMatrixInverse.copy(F.projectionMatrixInverse),N===null&&q.isPerspectiveCamera&&(N={camera:q,fov:q.fov,zoom:q.zoom}),_e(q,ce,Ie)};function _e(q,pe,ve){ve===null?q.matrix.copy(pe.matrixWorld):(q.matrix.copy(ve.matrixWorld),q.matrix.invert(),q.matrix.multiply(pe.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(pe.projectionMatrix),q.projectionMatrixInverse.copy(pe.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Qr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return ce},this.getFoveation=function(){if(!(d===null&&h===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(ce)},this.getCameraTexture=function(q){return m[q]};let Te=null;function I(q,pe){if(f=pe.getViewerPose(l||a),p=pe,f!==null){const ve=f.views;h!==null&&(e.setRenderTargetFramebuffer(M,h.framebuffer),e.setRenderTarget(M));let Ie=!1;ve.length!==ce.cameras.length&&(ce.cameras.length=0,Ie=!0);for(let Ce=0;Ce<ve.length;Ce++){const Ye=ve[Ce];let Z=null;if(h!==null)Z=h.getViewport(Ye);else{const Se=u.getViewSubImage(d,Ye);Z=Se.viewport,Ce===0&&(e.setRenderTargetTextures(M,Se.colorTexture,Se.depthStencilTexture),e.setRenderTarget(M))}let Y=G[Ce];Y===void 0&&(Y=new _n,Y.layers.enable(Ce),Y.viewport=new At,G[Ce]=Y),Y.matrix.fromArray(Ye.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(Ye.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(Z.x,Z.y,Z.width,Z.height),Ce===0&&(ce.matrix.copy(Y.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale)),Ie===!0&&ce.cameras.push(Y)}const Pe=s.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=i.getBinding();const Ce=u.getDepthInformation(ve[0]);Ce&&Ce.isValid&&Ce.texture&&g.init(Ce,s.renderState)}if(Pe&&Pe.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let Ce=0;Ce<ve.length;Ce++){const Ye=ve[Ce].camera;if(Ye){let Z=m[Ye];Z||(Z=new bu,m[Ye]=Z);const Y=u.getCameraImage(Ye);Z.sourceTexture=Y}}}}for(let ve=0;ve<A.length;ve++){const Ie=S[ve],Pe=A[ve];Ie!==null&&Pe!==void 0&&Pe.update(Ie,pe,l||a)}Te&&Te(q,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),p=null}const de=new Lu;de.setAnimationLoop(I),this.setAnimationLoop=function(q){Te=q},this.dispose=function(){}}}const Pg=new xt,Hu=new st;Hu.set(-1,0,0,0,1,0,0,0,1);function Lg(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Tu(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,v,T,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),f(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&h(g,m,M)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,v,T):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===ln&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===ln&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const v=e.get(m),T=v.envMap,M=v.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(Pg.makeRotationFromEuler(M)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Hu),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,v,T){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=T*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function f(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function h(g,m,v){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ln&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const v=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Dg(n,e,t,i){let s={},r={};function a(v,T){const M=T.program;i.uniformBlockBinding(v,M,s[v.id])}function o(v,T){let M=s[v.id];M===void 0&&(p(v),M=c(v),s[v.id]=M,v.addEventListener("dispose",g));const A=T.program;i.updateUBOMapping(v,A);const S=e.render.frame;r[v.id]!==S&&(l(v),r[v.id]=S)}function c(v){const T=n.createBuffer(),M=v.__size,A=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,M,A),n.bindBuffer(n.UNIFORM_BUFFER,null),T}function l(v){const T=s[v.id],M=v.uniforms,A=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let S=0,y=M.length;S<y;S++){const w=M[S];if(Array.isArray(w))for(let N=0,F=w.length;N<F;N++)f(w[N],S,N,A);else f(w,S,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,T,M,A){if(d(v,T,M,A)===!0){const S=v.__offset,y=v.value;if(Array.isArray(y)){let w=0;for(let N=0;N<y.length;N++){const F=y[N],k=_(F,!0);u(F,v.__data,w),w+=k.storage/Float32Array.BYTES_PER_ELEMENT}}else u(y,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,v.__data)}}function u(v,T,M){typeof v=="number"||typeof v=="boolean"?T[M]=v:v.isMatrix3?(T[M]=v.elements[0],T[M+1]=v.elements[1],T[M+2]=v.elements[2],T[M+3]=0,T[M+4]=v.elements[3],T[M+5]=v.elements[4],T[M+6]=v.elements[5],T[M+7]=0,T[M+8]=v.elements[6],T[M+9]=v.elements[7],T[M+10]=v.elements[8],T[M+11]=0):ArrayBuffer.isView(v)?T.set(v.subarray(0,T.length-M),M):v.toArray(T,M)}function d(v,T,M,A){const S=v.value,y=T+"_"+M;if(Array.isArray(S)){A[y]===void 0&&(A[y]=[]);const w=A[y];let N=!1;for(let F=0;F<S.length;F++)h(S[F],w,F)===!0&&(N=!0);return N}return h(S,A,y)}function h(v,T,M){if(T[M]===void 0)return typeof v=="number"||typeof v=="boolean"?T[M]=v:ArrayBuffer.isView(v)?T[M]=v.slice():T[M]=v.clone(),!0;{const A=T[M];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return T[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(A.equals(v)===!1)return A.copy(v),!0}}return!1}function p(v){const T=v.uniforms;let M=0;const A=16;for(let y=0,w=T.length;y<w;y++){const N=Array.isArray(T[y])?T[y]:[T[y]];for(let F=0,k=N.length;F<k;F++){const G=N[F],ce=Array.isArray(G.value)?G.value:[G.value],O=Array.isArray(T[y])||Array.isArray(G.value);let ne=M;for(let re=0,Ee=ce.length;re<Ee;re++){const he=ce[re],_e=_(he,O),Te=M%A,I=Te%_e.boundary,de=Te+I;M+=I,de!==0&&A-de<_e.storage&&(M+=A-de),re===0&&(ne=M),M+=_e.storage}const ue=G.type==="int"?Int32Array:G.type==="uint"?Uint32Array:Float32Array;G.__data=new ue((M-ne)/Float32Array.BYTES_PER_ELEMENT),G.__offset=ne}}const S=M%A;return S>0&&(M+=A-S),v.__size=M,v.__cache={},this}function _(v,T){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=16,M.storage=48):v.isMatrix4?(M.boundary=16,M.storage=64):v.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Qe("WebGLRenderer: Unsupported uniform value type.",v),T===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function g(v){const T=v.target;T.removeEventListener("dispose",g),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function m(){for(const v in s)n.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:m}}const Ig=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fn=null;function Ng(){return Fn===null&&(Fn=new vu(Ig,16,16,Fi,Nn),Fn.name="DFG_LUT",Fn.minFilter=dn,Fn.magFilter=dn,Fn.wrapS=ti,Fn.wrapT=ti,Fn.generateMipmaps=!1,Fn.needsUpdate=!0),Fn}class Ug{constructor(e={}){const{canvas:t=Of(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:h=fn}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const _=h,g=new Set([Wo,Vo,Go]),m=new Set([fn,Wn,Ys,us,ko,Bo]),v=new Uint32Array(4),T=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]};let A=null,S=null;const y=[],w=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let k=!1,G=null,ce=null,O=null,ne=null;this._outputColorSpace=cn;let ue=0,re=0,Ee=null,he=-1,_e=null;const Te=new At,I=new At;let de=null;const q=new je(0);let pe=0,ve=t.width,Ie=t.height,Pe=1,Le=null,Je=null;const Ce=new At(0,0,ve,Ie),Ye=new At(0,0,ve,Ie);let Z=!1;const Y=new Js,Se=new Yo;let b=!1,C=!1;const te=new xt,W=new K,U=new At,j={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function H(){return Ee===null?Pe:1}let L=i;function oe(R,$){return t.getContext(R,$)}let Me,Ne,Ae,et,He,Xe,D,E,ie,De,we,Fe,Ue,xe,ye,ze,B,x,P,z,V,J,se;try{const R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fo}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",ee,!1),t.addEventListener("webglcontextcreationerror",X,!1),L===null){const $="webgl2";if(L=oe($,R),L===null)throw oe($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}be()}catch(R){throw t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",ee,!1),t.removeEventListener("webglcontextcreationerror",X,!1),gt("WebGLRenderer: "+R.message),R}function be(){Me=new Om(L),Me.init(),V=new Eg(L,Me),Ne=new Am(L,Me,e,V),Ae=new Sg(L,Me),Ne.reversedDepthBuffer&&d&&Ae.buffers.depth.setReversed(!0),ce=L.createFramebuffer(),O=L.createFramebuffer(),ne=L.createFramebuffer(),et=new Hm(L),He=new cg,Xe=new wg(L,Me,Ae,He,Ne,V,et),D=new zm(F),E=new Vd(L),J=new Em(L,E),ie=new km(L,E,et,J),De=new Vm(L,ie,E,J,et),x=new Gm(L,Ne,Xe),ye=new Rm(He),we=new lg(F,D,Me,Ne,J,ye),Fe=new Lg(F,He),Ue=new fg,xe=new xg(Me),B=new wm(F,D,Ae,De,p,c),ze=new bg(F,De,Ne),se=new Dg(L,et,Ne,Ae),P=new Tm(L,Me,et),z=new Bm(L,Me,et),et.programs=we.programs,F.capabilities=Ne,F.extensions=Me,F.properties=He,F.renderLists=Ue,F.shadowMap=ze,F.state=Ae,F.info=et}_!==fn&&(N=new Xm(_,t.width,t.height,o,s,r));const ae=new Cg(F,L);this.xr=ae,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const R=Me.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Me.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Pe},this.setPixelRatio=function(R){R!==void 0&&(Pe=R,this.setSize(ve,Ie,!1))},this.getSize=function(R){return R.set(ve,Ie)},this.setSize=function(R,$,me=!0){if(ae.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=R,Ie=$,t.width=Math.floor(R*Pe),t.height=Math.floor($*Pe),me===!0&&(t.style.width=R+"px",t.style.height=$+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,R,$)},this.getDrawingBufferSize=function(R){return R.set(ve*Pe,Ie*Pe).floor()},this.setDrawingBufferSize=function(R,$,me){ve=R,Ie=$,Pe=me,t.width=Math.floor(R*me),t.height=Math.floor($*me),this.setViewport(0,0,R,$)},this.setEffects=function(R){if(_===fn){gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let $=0;$<R.length;$++)if(R[$].isOutputPass===!0){Qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(Te)},this.getViewport=function(R){return R.copy(Ce)},this.setViewport=function(R,$,me,le){R.isVector4?Ce.set(R.x,R.y,R.z,R.w):Ce.set(R,$,me,le),Ae.viewport(Te.copy(Ce).multiplyScalar(H()).round())},this.getScissor=function(R){return R.copy(Ye)},this.setScissor=function(R,$,me,le){R.isVector4?Ye.set(R.x,R.y,R.z,R.w):Ye.set(R,$,me,le),Ae.scissor(I.copy(Ye).multiplyScalar(H()).round())},this.getScissorTest=function(){return Z},this.setScissorTest=function(R){Ae.setScissorTest(Z=R)},this.setOpaqueSort=function(R){Le=R},this.setTransparentSort=function(R){Je=R},this.getClearColor=function(R){return R.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor(...arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha(...arguments)},this.clear=function(R=!0,$=!0,me=!0){let le=0;if(R){let fe=!1;if(Ee!==null){const ke=Ee.texture.format;fe=g.has(ke)}if(fe){const ke=Ee.texture.type,We=m.has(ke),Oe=B.getClearColor(),Ve=B.getClearAlpha(),Ke=Oe.r,it=Oe.g,ut=Oe.b;We?(v[0]=Ke,v[1]=it,v[2]=ut,v[3]=Ve,L.clearBufferuiv(L.COLOR,0,v)):(T[0]=Ke,T[1]=it,T[2]=ut,T[3]=Ve,L.clearBufferiv(L.COLOR,0,T))}else le|=L.COLOR_BUFFER_BIT}$&&(le|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),me&&(le|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&L.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),G=R},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",ee,!1),t.removeEventListener("webglcontextcreationerror",X,!1),B.dispose(),Ue.dispose(),xe.dispose(),Xe.dispose(),He.dispose(),D.dispose(),De.dispose(),ie.dispose(),J.dispose(),se.dispose(),we.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Ht),ae.removeEventListener("sessionend",ai),Pt.stop()};function ge(R){R.preventDefault(),pl("WebGLRenderer: Context Lost."),k=!0}function ee(){pl("WebGLRenderer: Context Restored."),k=!1;const R=et.autoReset,$=ze.enabled,me=ze.autoUpdate,le=ze.needsUpdate,fe=ze.type;be(),et.autoReset=R,ze.enabled=$,ze.autoUpdate=me,ze.needsUpdate=le,ze.type=fe}function X(R){gt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Re(R){const $=R.target;$.removeEventListener("dispose",Re),Ge($)}function Ge(R){tt(R),He.remove(R)}function tt(R){const $=He.get(R).programs;$!==void 0&&($.forEach(function(me){we.releaseProgram(me)}),R.isShaderMaterial&&we.releaseShaderCache(R))}this.renderBufferDirect=function(R,$,me,le,fe,ke){$===null&&($=j);const We=fe.isMesh&&fe.matrixWorld.determinantAffine()<0,Oe=Qu(R,$,me,le,fe);Ae.setMaterial(le,We);let Ve=me.index,Ke=1;if(le.wireframe===!0){if(Ve=ie.getWireframeAttribute(me),Ve===void 0)return;Ke=2}const it=me.drawRange,ut=me.attributes.position;let qe=it.start*Ke,ft=(it.start+it.count)*Ke;ke!==null&&(qe=Math.max(qe,ke.start*Ke),ft=Math.min(ft,(ke.start+ke.count)*Ke)),Ve!==null?(qe=Math.max(qe,0),ft=Math.min(ft,Ve.count)):ut!=null&&(qe=Math.max(qe,0),ft=Math.min(ft,ut.count));const Lt=ft-qe;if(Lt<0||Lt===1/0)return;J.setup(fe,le,Oe,me,Ve);let Mt,yt=P;if(Ve!==null&&(Mt=E.get(Ve),yt=z,yt.setIndex(Mt)),fe.isMesh)le.wireframe===!0?(Ae.setLineWidth(le.wireframeLinewidth*H()),yt.setMode(L.LINES)):yt.setMode(L.TRIANGLES);else if(fe.isLine){let Jt=le.linewidth;Jt===void 0&&(Jt=1),Ae.setLineWidth(Jt*H()),fe.isLineSegments?yt.setMode(L.LINES):fe.isLineLoop?yt.setMode(L.LINE_LOOP):yt.setMode(L.LINE_STRIP)}else fe.isPoints?yt.setMode(L.POINTS):fe.isSprite&&yt.setMode(L.TRIANGLES);if(fe.isBatchedMesh)if(Me.get("WEBGL_multi_draw"))yt.renderMultiDraw(fe._multiDrawStarts,fe._multiDrawCounts,fe._multiDrawCount);else{const Jt=fe._multiDrawStarts,$e=fe._multiDrawCounts,sn=fe._multiDrawCount,mt=Ve?E.get(Ve).bytesPerElement:1,Si=He.get(le).currentProgram.getUniforms();for(let Zt=0;Zt<sn;Zt++)Si.setValue(L,"_gl_DrawID",Zt),yt.render(Jt[Zt]/mt,$e[Zt])}else if(fe.isInstancedMesh)yt.renderInstances(qe,Lt,fe.count);else if(me.isInstancedBufferGeometry){const Jt=me._maxInstanceCount!==void 0?me._maxInstanceCount:1/0,$e=Math.min(me.instanceCount,Jt);yt.renderInstances(qe,Lt,$e)}else yt.render(qe,Lt)};function ht(R,$,me,le){G!==null&&R.isNodeMaterial&&G.setObject(le,R),b===!0&&ye.setState(R,me,!1),R.transparent===!0&&R.side===jn&&R.forceSinglePass===!1?(R.side=ln,R.needsUpdate=!0,gs(R,$,le),R.side=Ui,R.needsUpdate=!0,gs(R,$,le),R.side=jn):gs(R,$,le)}this.compile=function(R,$,me=null){me===null&&(me=R),G!==null&&G.renderStart(R,$,me),S=xe.get(me),S.init($),w.push(S),me.traverseVisible(function(fe){fe.isLight&&fe.layers.test($.layers)&&(S.pushLight(fe),fe.castShadow&&S.pushShadow(fe))}),R!==me&&R.traverseVisible(function(fe){fe.isLight&&fe.layers.test($.layers)&&(S.pushLight(fe),fe.castShadow&&S.pushShadow(fe))}),S.setupLights(),G!==null&&G.updateLights(S.state.lightsArray),C=this.localClippingEnabled,b=ye.init(this.clippingPlanes,C),b===!0&&ye.setGlobalState(this.clippingPlanes,$),G!==null&&ze.render(S.state.shadowsArray,me,$);const le=new Set;return R.traverse(function(fe){if(!(fe.isMesh||fe.isPoints||fe.isLine||fe.isSprite))return;const ke=fe.material;if(ke)if(Array.isArray(ke))for(let We=0;We<ke.length;We++){const Oe=ke[We];ht(Oe,me,$,fe),le.add(Oe)}else ht(ke,me,$,fe),le.add(ke)}),S=w.pop(),G!==null&&G.renderEnd(),le},this.compileAsync=function(R,$,me=null){const le=this.compile(R,$,me);return new Promise(fe=>{function ke(){if(le.forEach(function(We){const Ve=He.get(We).currentProgram;(Ve===void 0||Ve.isReady())&&le.delete(We)}),le.size===0){fe(R);return}setTimeout(ke,10)}Me.get("KHR_parallel_shader_compile")!==null?ke():setTimeout(ke,10)})};let _t=null;function ot(R){_t&&_t(R)}function Ht(){Pt.stop()}function ai(){Pt.start()}const Pt=new Lu;Pt.setAnimationLoop(ot),typeof self<"u"&&Pt.setContext(self),this.setAnimationLoop=function(R){_t=R,ae.setAnimationLoop(R),R===null?Pt.stop():Pt.start()},ae.addEventListener("sessionstart",Ht),ae.addEventListener("sessionend",ai),this.render=function(R,$){if($!==void 0&&$.isCamera!==!0){gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;G!==null&&G.renderStart(R,$);const me=ae.enabled===!0&&ae.isPresenting===!0,le=N!==null&&(Ee===null||me)&&N.begin(F,Ee);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera($),$=ae.getCamera()),R.isScene===!0&&R.onBeforeRender(F,R,$,Ee),S=xe.get(R,w.length),S.init($),S.state.textureUnits=Xe.getTextureUnits(),w.push(S),te.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),$.isArrayCamera?Se.setFromArrayCamera($):Y.setFromProjectionMatrix(te,In,$.reversedDepth),C=this.localClippingEnabled,b=ye.init(this.clippingPlanes,C),A=Ue.get(R,y.length),A.init(),y.push(A),this.info.render.frame++,ae.enabled===!0&&ae.isPresenting===!0){const We=F.xr.getDepthSensingMesh();We!==null&&wn(We,$,-1/0,F.sortObjects)}wn(R,$,0,F.sortObjects),A.finish(),G!==null&&G.updateLights(S.state.lightsArray),F.sortObjects===!0&&A.sort(Le,Je),Q=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Q&&B.addToRenderList(A,R),this.info.autoReset===!0&&this.info.reset(),b===!0&&ye.beginShadows();const fe=S.state.shadowsArray;if(ze.render(fe,R,$),b===!0&&ye.endShadows(),(le&&N.hasRenderPass())===!1){const We=A.opaque,Oe=A.transmissive;if(S.setupLights(),$.isArrayCamera){const Ve=$.cameras;if(Oe.length>0)for(let Ke=0,it=Ve.length;Ke<it;Ke++){const ut=Ve[Ke];li(We,Oe,R,ut)}Q&&B.render(R);for(let Ke=0,it=Ve.length;Ke<it;Ke++){const ut=Ve[Ke];oi(A,R,ut,ut.viewport)}}else Oe.length>0&&li(We,Oe,R,$),Q&&B.render(R),oi(A,R,$)}Ee!==null&&re===0&&(Xe.updateMultisampleRenderTarget(Ee),Xe.updateRenderTargetMipmap(Ee)),le&&N.end(F),R.isScene===!0&&R.onAfterRender(F,R,$),J.resetDefaultState(),he=-1,_e=null,w.pop(),w.length>0?(S=w[w.length-1],Xe.setTextureUnits(S.state.textureUnits),b===!0&&ye.setGlobalState(F.clippingPlanes,S.state.camera)):S=null,y.pop(),y.length>0?A=y[y.length-1]:A=null,G!==null&&G.renderEnd()};function wn(R,$,me,le){if(R.visible===!1)return;if(R.layers.test($.layers)){if(R.isGroup)me=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update($);else if(R.isLight)S.pushLight(R),R.castShadow&&S.pushShadow(R);else if(R.isSprite){const We=$.isArrayCamera?Se:Y;if(!R.frustumCulled||R.intersectsFrustum(We)){le&&U.setFromMatrixPosition(R.matrixWorld).applyMatrix4(te);const Oe=De.update(R),Ve=R.material;Ve.visible&&A.push(R,Oe,Ve,me,U.z,null,$)}}else if(R.isMesh||R.isLine||R.isPoints){const We=$.isArrayCamera?Se:Y;if(!R.frustumCulled||R.intersectsFrustum(We)){const Oe=De.update(R),Ve=R.material;if(le&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),U.copy(R.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),U.copy(Oe.boundingSphere.center)),U.applyMatrix4(R.matrixWorld).applyMatrix4(te)),Array.isArray(Ve)){const Ke=Oe.groups;for(let it=0,ut=Ke.length;it<ut;it++){const qe=Ke[it],ft=Ve[qe.materialIndex];ft&&ft.visible&&A.push(R,Oe,ft,me,U.z,qe,$)}}else Ve.visible&&A.push(R,Oe,Ve,me,U.z,null,$)}}}const ke=R.children;for(let We=0,Oe=ke.length;We<Oe;We++)wn(ke[We],$,me,le)}function oi(R,$,me,le){const{opaque:fe,transmissive:ke,transparent:We}=R;S.setupLightsView(me),b===!0&&ye.setGlobalState(F.clippingPlanes,me),le&&Ae.viewport(Te.copy(le)),fe.length>0&&vn(fe,$,me),ke.length>0&&vn(ke,$,me),We.length>0&&vn(We,$,me),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function li(R,$,me,le){if((me.isScene===!0?me.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[le.id]===void 0){const qe=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[le.id]=new hn(1,1,{generateMipmaps:!0,type:qe?Nn:fn,minFilter:ni,samples:Math.max(4,Ne.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}const ke=S.state.transmissionRenderTarget[le.id],We=le.viewport||Te;ke.setSize(We.z*F.transmissionResolutionScale,We.w*F.transmissionResolutionScale);const Oe=F.getRenderTarget(),Ve=F.getActiveCubeFace(),Ke=F.getActiveMipmapLevel();F.setRenderTarget(ke),F.getClearColor(q),pe=F.getClearAlpha(),pe<1&&F.setClearColor(16777215,.5),F.clear(),Q&&B.render(me);const it=F.toneMapping;F.toneMapping=Vn;const ut=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),S.setupLightsView(le),b===!0&&ye.setGlobalState(F.clippingPlanes,le),vn(R,me,le),Xe.updateMultisampleRenderTarget(ke),Xe.updateRenderTargetMipmap(ke),Me.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let ft=0,Lt=$.length;ft<Lt;ft++){const Mt=$[ft],{object:yt,geometry:Jt,material:$e,group:sn}=Mt;if($e.side===jn&&yt.layers.test(le.layers)){const mt=$e.side;$e.side=ln,$e.needsUpdate=!0,bi(yt,me,le,Jt,$e,sn),$e.side=mt,$e.needsUpdate=!0,qe=!0}}qe===!0&&(Xe.updateMultisampleRenderTarget(ke),Xe.updateRenderTargetMipmap(ke))}F.setRenderTarget(Oe,Ve,Ke),F.setClearColor(q,pe),ut!==void 0&&(le.viewport=ut),F.toneMapping=it}function vn(R,$,me){const le=$.isScene===!0?$.overrideMaterial:null;for(let fe=0,ke=R.length;fe<ke;fe++){const We=R[fe],{object:Oe,geometry:Ve,group:Ke}=We;let it=We.material;it.allowOverride===!0&&le!==null&&(it=le),Oe.layers.test(me.layers)&&bi(Oe,$,me,Ve,it,Ke)}}function bi(R,$,me,le,fe,ke){G!==null&&fe.isNodeMaterial&&G.setObject(R,fe),R.onBeforeRender(F,$,me,le,fe,ke),R.modelViewMatrix.multiplyMatrices(me.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),fe.onBeforeRender(F,$,me,le,R,ke),fe.transparent===!0&&fe.side===jn&&fe.forceSinglePass===!1?(fe.side=ln,fe.needsUpdate=!0,F.renderBufferDirect(me,$,le,fe,R,ke),fe.side=Ui,fe.needsUpdate=!0,F.renderBufferDirect(me,$,le,fe,R,ke),fe.side=jn):F.renderBufferDirect(me,$,le,fe,R,ke),R.onAfterRender(F,$,me,le,fe,ke)}function Xn(R){let $=0;for(const me of R)me.texture!==null&&$++;return $}function gs(R,$,me){$.isScene!==!0&&($=j);const le=He.get(R),fe=S.state.lights,ke=S.state.shadowsArray,We=fe.state.version,Oe=we.getParameters(R,fe.state,ke,$,me,S.state.lightProbeGridArray),Ve=we.getProgramCacheKey(Oe);let Ke=le.programs;le.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?$.environment:null,le.fog=$.fog;const it=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;le.envMap=D.get(R.envMap||le.environment,it),le.envMapRotation=le.environment!==null&&R.envMap===null?$.environmentRotation:R.envMapRotation,Ke===void 0&&(R.addEventListener("dispose",Re),Ke=new Map,le.programs=Ke,le.programVariants=new Map);let ut=Ke.get(Ve);if(ut!==void 0){if(le.currentProgram===ut&&le.lightsStateVersion===We)return sl(R,Oe),ut}else Oe.uniforms=we.getUniforms(R),G!==null&&R.isNodeMaterial&&G.build(R,me,Oe),R.onBeforeCompile(Oe,F),ut=we.acquireProgram(Oe,Ve),Ke.set(Ve,ut),le.uniforms=Oe.uniforms;const qe=le.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qe.clippingPlanes=ye.uniform),sl(R,Oe),le.needsLights=ef(R),le.lightsStateVersion=We,le.needsLights&&(qe.ambientLightColor.value=fe.state.ambient,qe.lightProbe.value=fe.state.probe,qe.sunLights.value=fe.state.sun,qe.sunLightShadows.value=fe.state.sunShadow,qe.directionalLights.value=fe.state.directional,qe.directionalLightShadows.value=fe.state.directionalShadow,qe.spotLights.value=fe.state.spot,qe.spotLightShadows.value=fe.state.spotShadow,qe.rectAreaLights.value=fe.state.rectArea,qe.ltc_1.value=fe.state.rectAreaLTC1,qe.ltc_2.value=fe.state.rectAreaLTC2,qe.pointLights.value=fe.state.point,qe.pointLightShadows.value=fe.state.pointShadow,qe.hemisphereLights.value=fe.state.hemi,qe.sunShadowMatrix.value=fe.state.sunShadowMatrix,qe.sunShadowCascade.value=fe.state.sunShadowCascade,qe.directionalShadowMatrix.value=fe.state.directionalShadowMatrix,qe.spotLightMatrix.value=fe.state.spotLightMatrix,qe.spotLightMap.value=fe.state.spotLightMap,qe.pointShadowMatrix.value=fe.state.pointShadowMatrix),le.numLightProbeGrids=Xn(S.state.lightProbeGridArray),le.currentProgram=ut,le.uniformsList=null,ut}function Zu(R,$,me,le,fe){const ke=He.get(R),We=ke.currentProgram.id+","+le+","+fe;let Oe=ke.programVariants.get(We);return Oe===void 0?(Oe=gs(R,$,me),ke.programVariants.set(We,Oe)):(ke.currentProgram=Oe,ke.uniformsList=null,ke.outputColorSpace=le,ke.toneMapping=fe),Oe}function il(R){if(R.uniformsList===null){const $=R.currentProgram.getUniforms();R.uniformsList=Gr.seqWithValue($.seq,R.uniforms)}return R.uniformsList}function sl(R,$){const me=He.get(R);me.outputColorSpace=$.outputColorSpace,me.batching=$.batching,me.batchingColor=$.batchingColor,me.instancing=$.instancing,me.instancingColor=$.instancingColor,me.instancingMorph=$.instancingMorph,me.skinning=$.skinning,me.morphTargets=$.morphTargets,me.morphNormals=$.morphNormals,me.morphColors=$.morphColors,me.morphTargetsCount=$.morphTargetsCount,me.numClippingPlanes=$.numClippingPlanes,me.numIntersection=$.numClipIntersection,me.vertexAlphas=$.vertexAlphas,me.vertexTangents=$.vertexTangents,me.toneMapping=$.toneMapping}function Qu(R,$,me,le,fe){$.isScene!==!0&&($=j),Xe.resetTextureUnits();const ke=$.fog,We=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?$.environment:null,Oe=Ee===null?F.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:dt.workingColorSpace,Ve=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,Ke=D.get(le.envMap||We,Ve),it=le.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,ut=!!me.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),qe=!!me.morphAttributes.position,ft=!!me.morphAttributes.normal,Lt=!!me.morphAttributes.color;let Mt=Vn;le.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Mt=F.toneMapping);const yt=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,Jt=yt!==void 0?yt.length:0,$e=He.get(le),sn=S.state.lights;if(b===!0&&(C===!0||R!==_e)){const wt=R===_e&&le.id===he;ye.setState(le,R,wt)}let mt=!1,Si=!1;le.version===$e.__version?$e.needsLights&&$e.lightsStateVersion!==sn.state.version||fe.isBatchedMesh&&$e.batching===!1||!fe.isBatchedMesh&&$e.batching===!0||fe.isBatchedMesh&&$e.batchingColor===!0&&fe._colorsTexture===null||fe.isBatchedMesh&&$e.batchingColor===!1&&fe._colorsTexture!==null||fe.isInstancedMesh&&$e.instancing===!1||!fe.isInstancedMesh&&$e.instancing===!0||fe.isSkinnedMesh&&$e.skinning===!1||!fe.isSkinnedMesh&&$e.skinning===!0||fe.isInstancedMesh&&$e.instancingColor===!0&&fe.instanceColor===null||fe.isInstancedMesh&&$e.instancingColor===!1&&fe.instanceColor!==null||fe.isInstancedMesh&&$e.instancingMorph===!0&&fe.morphTexture===null||fe.isInstancedMesh&&$e.instancingMorph===!1&&fe.morphTexture!==null||$e.envMap!==Ke||le.fog===!0&&$e.fog!==ke||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==ye.numPlanes||$e.numIntersection!==ye.numIntersection)||$e.vertexAlphas!==it||$e.vertexTangents!==ut||$e.morphTargets!==qe||$e.morphNormals!==ft||$e.morphColors!==Lt||$e.morphTargetsCount!==Jt||$e.numLightProbeGrids!==Xn(S.state.lightProbeGridArray)?mt=!0:($e.outputColorSpace!==Oe||$e.toneMapping!==Mt)&&(Si=!0):(mt=!0,$e.__version=le.version);let Zt=$e.currentProgram;(mt===!0||Si===!0)&&(Zt=Si===!0?Zu(le,$,fe,Oe,Mt):gs(le,$,fe),G&&le.isNodeMaterial&&G.onUpdateProgram(le,Zt,$e));let sr=!1,ci=!1,wi=!1;const pt=Zt.getUniforms(),qt=$e.uniforms;if(Ae.useProgram(Zt.program)&&(sr=!0,ci=!0,wi=!0),le.id!==he&&(he=le.id,ci=!0),sr||_e!==R){Ae.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),pt.setValue(L,"projectionMatrix",R.projectionMatrix),pt.setValue(L,"viewMatrix",R.matrixWorldInverse);const Gt=pt.map.cameraPosition;Gt!==void 0&&Gt.setValue(L,W.setFromMatrixPosition(R.matrixWorld)),Ne.logarithmicDepthBuffer&&pt.setValue(L,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&pt.setValue(L,"isOrthographic",R.isOrthographicCamera===!0),_e!==R&&(_e=R,ci=!0,wi=!0)}if($e.needsLights&&(sn.state.sunShadowMap.length>0&&pt.setValue(L,"sunShadowMap",sn.state.sunShadowMap,Xe),sn.state.directionalShadowMap.length>0&&pt.setValue(L,"directionalShadowMap",sn.state.directionalShadowMap,Xe),sn.state.spotShadowMap.length>0&&pt.setValue(L,"spotShadowMap",sn.state.spotShadowMap,Xe),sn.state.pointShadowMap.length>0&&pt.setValue(L,"pointShadowMap",sn.state.pointShadowMap,Xe)),fe.isSkinnedMesh){pt.setOptional(L,fe,"bindMatrix"),pt.setOptional(L,fe,"bindMatrixInverse");const wt=fe.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),pt.setValue(L,"boneTexture",wt.boneTexture,Xe))}fe.isBatchedMesh&&(pt.setOptional(L,fe,"batchingTexture"),pt.setValue(L,"batchingTexture",fe._matricesTexture,Xe),pt.setOptional(L,fe,"batchingIdTexture"),pt.setValue(L,"batchingIdTexture",fe._indirectTexture,Xe),pt.setOptional(L,fe,"batchingColorTexture"),fe._colorsTexture!==null&&pt.setValue(L,"batchingColorTexture",fe._colorsTexture,Xe));const En=me.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&x.update(fe,me,Zt),(ci||$e.receiveShadow!==fe.receiveShadow)&&($e.receiveShadow=fe.receiveShadow,pt.setValue(L,"receiveShadow",fe.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&$.environment!==null&&(qt.envMapIntensity.value=$.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=Ng()),ci){if(pt.setValue(L,"toneMappingExposure",F.toneMappingExposure),$e.needsLights&&ju(qt,wi),ke&&le.fog===!0&&Fe.refreshFogUniforms(qt,ke),Fe.refreshMaterialUniforms(qt,le,Pe,Ie,S.state.transmissionRenderTarget[R.id]),$e.needsLights&&$e.numLightProbeGrids>0){const wt=M;let Gt=0;for(const qn of S.state.lightProbeGridArray)qn.texture!==null&&(wt.textures[Gt]=qn.texture,wt.min[Gt]=qn.boundingBox.min,wt.max[Gt]=qn.boundingBox.max,wt.resolution[Gt]=qn.resolution,Gt++);for(const qn in wt)wt[qn].length=Gt;qt.probesSH.value=wt.textures,qt.probesMin.value=wt.min,qt.probesMax.value=wt.max,qt.probesResolution.value=wt.resolution}Gr.upload(L,il($e),qt,Xe)}if(le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Gr.upload(L,il($e),qt,Xe),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&pt.setValue(L,"center",fe.center),pt.setValue(L,"modelViewMatrix",fe.modelViewMatrix),pt.setValue(L,"normalMatrix",fe.normalMatrix),pt.setValue(L,"modelMatrix",fe.matrixWorld),le.uniformsGroups!==void 0){const wt=le.uniformsGroups;for(let Gt=0,qn=wt.length;Gt<qn;Gt++){const al=wt[Gt];se.update(al,Zt),se.bind(al,Zt)}}return Zt}function ju(R,$){R.ambientLightColor.needsUpdate=$,R.lightProbe.needsUpdate=$,R.sunLights.needsUpdate=$,R.sunLightShadows.needsUpdate=$,R.directionalLights.needsUpdate=$,R.directionalLightShadows.needsUpdate=$,R.pointLights.needsUpdate=$,R.pointLightShadows.needsUpdate=$,R.spotLights.needsUpdate=$,R.spotLightShadows.needsUpdate=$,R.rectAreaLights.needsUpdate=$,R.hemisphereLights.needsUpdate=$}function ef(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return re},this.getRenderTarget=function(){return Ee},this.setRenderTargetTextures=function(R,$,me){const le=He.get(R);le.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),He.get(R.texture).__webglTexture=$,He.get(R.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:me,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,$){const me=He.get(R);me.__webglFramebuffer=$,me.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(R,$=0,me=0){Ee=R,ue=$,re=me;let le=null,fe=!1,ke=!1;if(R){const Oe=He.get(R);if(Oe.__useDefaultFramebuffer!==void 0){Ae.bindFramebuffer(L.FRAMEBUFFER,Oe.__webglFramebuffer),Te.copy(R.viewport),I.copy(R.scissor),de=R.scissorTest,Ae.viewport(Te),Ae.scissor(I),Ae.setScissorTest(de),he=-1;return}else if(Oe.__webglFramebuffer===void 0)Xe.setupRenderTarget(R);else if(Oe.__hasExternalTextures)Xe.rebindTextures(R,He.get(R.texture).__webglTexture,He.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const it=R.depthTexture;if(Oe.__boundDepthTexture!==it){if(it!==null&&He.has(it)&&(R.width!==it.image.width||R.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Xe.setupDepthRenderbuffer(R)}}const Ve=R.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(ke=!0);const Ke=He.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ke[$])?le=Ke[$][me]:le=Ke[$],fe=!0):R.samples>0&&Xe.useMultisampledRTT(R)===!1?le=He.get(R).__webglMultisampledFramebuffer:Array.isArray(Ke)?le=Ke[me]:le=Ke,Te.copy(R.viewport),I.copy(R.scissor),de=R.scissorTest}else Te.copy(Ce).multiplyScalar(Pe).floor(),I.copy(Ye).multiplyScalar(Pe).floor(),de=Z;if(me!==0&&(le=ce),Ae.bindFramebuffer(L.FRAMEBUFFER,le)&&Ae.drawBuffers(R,le),Ae.viewport(Te),Ae.scissor(I),Ae.setScissorTest(de),fe){const Oe=He.get(R.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+$,Oe.__webglTexture,me)}else if(ke){const Oe=$;for(let Ve=0;Ve<R.textures.length;Ve++){const Ke=He.get(R.textures[Ve]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ve,Ke.__webglTexture,me,Oe)}}else if(R!==null&&me!==0){const Oe=He.get(R.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Oe.__webglTexture,me)}he=-1};function rl(R){const $=He.get(R);return($.__readFormat!==R.format||$.__readType!==R.type)&&($.__readFormat=R.format,$.__readType=R.type,$.__formatReadable=Ne.textureFormatReadable(R.format),$.__typeReadable=Ne.textureTypeReadable(R.type)),$}this.readRenderTargetPixels=function(R,$,me,le,fe,ke,We,Oe=0){if(!(R&&R.isWebGLRenderTarget)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=He.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&We!==void 0&&(Ve=Ve[We],Array.isArray(Ve)&&(Ve=Ve[0])),Ve){Ae.bindFramebuffer(L.FRAMEBUFFER,Ve);try{const Ke=R.textures[Oe],it=Ke.format,ut=Ke.type;R.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Oe);const qe=rl(Ke);if(qe.__formatReadable===!1){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qe.__typeReadable===!1){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=R.width-le&&me>=0&&me<=R.height-fe&&L.readPixels($,me,le,fe,V.convert(it),V.convert(ut),ke)}finally{const Ke=Ee!==null?He.get(Ee).__webglFramebuffer:null;Ae.bindFramebuffer(L.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(R,$,me,le,fe,ke,We,Oe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=He.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&We!==void 0&&(Ve=Ve[We],Array.isArray(Ve)&&(Ve=Ve[0])),Ve)if($>=0&&$<=R.width-le&&me>=0&&me<=R.height-fe){Ae.bindFramebuffer(L.FRAMEBUFFER,Ve);const Ke=R.textures[Oe],it=Ke.format,ut=Ke.type;R.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Oe);const qe=rl(Ke);if(qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ft=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ft),L.bufferData(L.PIXEL_PACK_BUFFER,ke.byteLength,L.STREAM_READ),L.readPixels($,me,le,fe,V.convert(it),V.convert(ut),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);const Lt=Ee!==null?He.get(Ee).__webglFramebuffer:null;Ae.bindFramebuffer(L.FRAMEBUFFER,Lt);const Mt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await kf(L,Mt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ft),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ke),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(ft),L.deleteSync(Mt),ke}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,$=null,me=0){const le=Math.pow(2,-me),fe=Math.floor(R.image.width*le),ke=Math.floor(R.image.height*le),We=$!==null?$.x:0,Oe=$!==null?$.y:0;Xe.setTexture2D(R,0),L.copyTexSubImage2D(L.TEXTURE_2D,me,0,0,We,Oe,fe,ke),Ae.unbindTexture()},this.copyTextureToTexture=function(R,$,me=null,le=null,fe=0,ke=0){let We,Oe,Ve,Ke,it,ut,qe,ft,Lt;const Mt=R.isCompressedTexture?R.mipmaps[ke]:R.image;if(me!==null)We=me.max.x-me.min.x,Oe=me.max.y-me.min.y,Ve=me.isBox3?me.max.z-me.min.z:1,Ke=me.min.x,it=me.min.y,ut=me.isBox3?me.min.z:0;else{const pt=Math.pow(2,-fe);We=Math.floor(Mt.width*pt),Oe=Math.floor(Mt.height*pt),R.isDataArrayTexture?Ve=Mt.depth:R.isData3DTexture?Ve=Math.floor(Mt.depth*pt):Ve=1,Ke=0,it=0,ut=0}le!==null?(qe=le.x,ft=le.y,Lt=le.z):(qe=0,ft=0,Lt=0);const yt=V.convert($.format),Jt=V.convert($.type);let $e;$.isData3DTexture?(Xe.setTexture3D($,0),$e=L.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(Xe.setTexture2DArray($,0),$e=L.TEXTURE_2D_ARRAY):(Xe.setTexture2D($,0),$e=L.TEXTURE_2D),Ae.activeTexture(L.TEXTURE0),Ae.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,$.flipY),Ae.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),Ae.pixelStorei(L.UNPACK_ALIGNMENT,$.unpackAlignment);const sn=Ae.getParameter(L.UNPACK_ROW_LENGTH),mt=Ae.getParameter(L.UNPACK_IMAGE_HEIGHT),Si=Ae.getParameter(L.UNPACK_SKIP_PIXELS),Zt=Ae.getParameter(L.UNPACK_SKIP_ROWS),sr=Ae.getParameter(L.UNPACK_SKIP_IMAGES);Ae.pixelStorei(L.UNPACK_ROW_LENGTH,Mt.width),Ae.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Mt.height),Ae.pixelStorei(L.UNPACK_SKIP_PIXELS,Ke),Ae.pixelStorei(L.UNPACK_SKIP_ROWS,it),Ae.pixelStorei(L.UNPACK_SKIP_IMAGES,ut);const ci=R.isDataArrayTexture||R.isData3DTexture,wi=$.isDataArrayTexture||$.isData3DTexture;if(R.isDepthTexture){const pt=He.get(R),qt=He.get($),En=He.get(pt.__renderTarget),wt=He.get(qt.__renderTarget);Ae.bindFramebuffer(L.READ_FRAMEBUFFER,En.__webglFramebuffer),Ae.bindFramebuffer(L.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Gt=0;Gt<Ve;Gt++)ci&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,He.get(R).__webglTexture,fe,ut+Gt),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,He.get($).__webglTexture,ke,Lt+Gt)),L.blitFramebuffer(Ke,it,Ke+We,it+Oe,qe,ft,qe+We,ft+Oe,L.DEPTH_BUFFER_BIT,L.NEAREST);Ae.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(fe!==0||R.isRenderTargetTexture||He.has(R)){const pt=He.get(R),qt=He.get($);Ae.bindFramebuffer(L.READ_FRAMEBUFFER,O),Ae.bindFramebuffer(L.DRAW_FRAMEBUFFER,ne);for(let En=0;En<Ve;En++)ci?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,pt.__webglTexture,fe,ut+En):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,pt.__webglTexture,fe),wi?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,qt.__webglTexture,ke,Lt+En):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,qt.__webglTexture,ke),fe!==0?L.blitFramebuffer(Ke,it,Ke+We,it+Oe,qe,ft,qe+We,ft+Oe,L.COLOR_BUFFER_BIT,L.NEAREST):wi?L.copyTexSubImage3D($e,ke,qe,ft,Lt+En,Ke,it,We,Oe):L.copyTexSubImage2D($e,ke,qe,ft,Ke,it,We,Oe);Ae.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else wi?R.isDataTexture||R.isData3DTexture?L.texSubImage3D($e,ke,qe,ft,Lt,We,Oe,Ve,yt,Jt,Mt.data):$.isCompressedArrayTexture?L.compressedTexSubImage3D($e,ke,qe,ft,Lt,We,Oe,Ve,yt,Mt.data):L.texSubImage3D($e,ke,qe,ft,Lt,We,Oe,Ve,yt,Jt,Mt):R.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ke,qe,ft,We,Oe,yt,Jt,Mt.data):R.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ke,qe,ft,Mt.width,Mt.height,yt,Mt.data):L.texSubImage2D(L.TEXTURE_2D,ke,qe,ft,We,Oe,yt,Jt,Mt);Ae.pixelStorei(L.UNPACK_ROW_LENGTH,sn),Ae.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mt),Ae.pixelStorei(L.UNPACK_SKIP_PIXELS,Si),Ae.pixelStorei(L.UNPACK_SKIP_ROWS,Zt),Ae.pixelStorei(L.UNPACK_SKIP_IMAGES,sr),ke===0&&$.generateMipmaps===!0&&$.mipmapsAutoUpdate===!0&&L.generateMipmap($e),Ae.unbindTexture()},this.initRenderTarget=function(R){He.get(R).__webglFramebuffer===void 0&&Xe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Xe.setTextureCube(R,0):R.isData3DTexture?Xe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Xe.setTexture2DArray(R,0):Xe.setTexture2D(R,0),Ae.unbindTexture()},this.resetState=function(){ue=0,re=0,Ee=null,Ae.reset(),J.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}class Fg extends gu{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new Tt;e.deleteAttribute("uv");const t=new gn({side:ln}),i=new gn,s=new Cu(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new lt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new Br(e,i,6),o=new Ut;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const c=new lt(e,es(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new lt(e,es(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const f=new lt(e,es(17));f.position.set(14.904,12.198,-1.832),f.scale.set(.15,4.265,6.331),this.add(f);const u=new lt(e,es(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const d=new lt(e,es(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const h=new lt(e,es(100));h.position.set(0,20,0),h.scale.set(1,.1,1),this.add(h)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function es(n){return new Nd({color:0,emissive:16777215,emissiveIntensity:n})}function zg(n){let e=n>>>0||2654435769;return function(){e=e+1831565813>>>0;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function ts(n,e=n){const t=document.createElement("canvas");return t.width=n,t.height=e,t}function Og(n,e,t){const i=new Float32Array(t*t);for(let a=0;a<i.length;a++)i[a]=n();const s=new Float32Array(e*e),r=a=>a*a*(3-2*a);for(let a=0;a<e;a++)for(let o=0;o<e;o++){const c=o/e*t,l=a/e*t,f=Math.floor(c),u=Math.floor(l),d=r(c-f),h=r(l-u),p=i[u%t*t+f%t],_=i[u%t*t+(f+1)%t],g=i[(u+1)%t*t+f%t],m=i[(u+1)%t*t+(f+1)%t];s[a*e+o]=(p*(1-d)+_*d)*(1-h)+(g*(1-d)+m*d)*h}return s}function cc(n,e,t=4,i=5){const s=new Float32Array(e*e);let r=.5,a=0;for(let o=0;o<i;o++){const c=Og(n,e,t<<o);for(let l=0;l<s.length;l++)s[l]+=c[l]*r;a+=r,r*=.5}for(let o=0;o<s.length;o++)s[o]/=a;return s}function za(n,e,t=!0){return n.colorSpace=e?cn:ei,t&&(n.wrapS=n.wrapT=$s),n.anisotropy=8,n.generateMipmaps=!0,n.minFilter=ni,n.needsUpdate=!0,n}function ws(n,e,t,{bump:i=2,grime:s=.35}={}){const r=zg(n),a=ts(e),o=ts(e),c=ts(e),l=ts(e),f=a.getContext("2d"),u=o.getContext("2d"),d=c.getContext("2d"),h=l.getContext("2d");u.fillStyle="#808080",u.fillRect(0,0,e,e),t(f,u,d,h,e,r);const p=f.getImageData(0,0,e,e),_=u.getImageData(0,0,e,e),g=d.getImageData(0,0,e,e),m=h.getImageData(0,0,e,e),v=cc(r,e,4,6),T=cc(r,e,32,3),M=new Float32Array(e*e);for(let F=0;F<e*e;F++){const k=1-s*Math.max(0,v[F]*1.6-.45);p.data[F*4]*=k,p.data[F*4+1]*=k,p.data[F*4+2]*=k*.98,M[F]=_.data[F*4]/255+(T[F]-.5)*.06,g.data[F*4]=Math.max(0,Math.min(255,g.data[F*4]+(v[F]-.5)*90+(T[F]-.5)*40))}f.putImageData(p,0,0);const A=new Uint8ClampedArray(e*e*4),S=new Uint8ClampedArray(e*e*4),y=(F,k)=>M[(k+e)%e*e+(F+e)%e];for(let F=0;F<e;F++)for(let k=0;k<e;k++){const G=(y(k+1,F)-y(k-1,F))*i*e/512*4,ce=(y(k,F+1)-y(k,F-1))*i*e/512*4,O=1/Math.hypot(G,ce,1),ne=(F*e+k)*4;A[ne]=(-G*O*.5+.5)*255,A[ne+1]=(ce*O*.5+.5)*255,A[ne+2]=(O*.5+.5)*255,A[ne+3]=255,S[ne]=255,S[ne+1]=g.data[ne],S[ne+2]=m.data[ne],S[ne+3]=255}const w=ts(e),N=ts(e);return w.getContext("2d").putImageData(new ImageData(A,e,e),0,0),N.getContext("2d").putImageData(new ImageData(S,e,e),0,0),{map:za(new Hr(a),!0),normalMap:za(new Hr(w),!1),orm:za(new Hr(N),!1)}}const bt=n=>{const e=Math.round(Math.max(0,Math.min(1,n))*255);return`rgb(${e},${e},${e})`};function zi(n,e,t,i,s,r=.2,a=1){n.strokeStyle=s,n.lineCap="round";for(let o=0;o<i;o++){const c=e()*t,l=e()*t,f=e()*Math.PI,u=(.02+e()*r)*t;n.lineWidth=a*(.4+e()),n.globalAlpha=.15+e()*.5,n.beginPath(),n.moveTo(c,l),n.lineTo(c+Math.cos(f)*u,l+Math.sin(f)*u),n.stroke()}n.globalAlpha=1}function Lo(n,e,t,i,s){for(let r=0;r<i;r++){const a=e()*t,o=e()*t*.6,c=(.15+e()*.5)*t,l=2+e()*10,f=n.createLinearGradient(0,o,0,o+c);f.addColorStop(0,s),f.addColorStop(1,"rgba(0,0,0,0)"),n.globalAlpha=.12+e()*.25,n.fillStyle=f,n.fillRect(a,o,l,c)}n.globalAlpha=1}function kg(n,e,t,i,s,r){n.fillStyle="#8f9690",n.fillRect(0,0,s,s),t.fillStyle=bt(.62),t.fillRect(0,0,s,s),i.fillStyle=bt(.25),i.fillRect(0,0,s,s);const a=s/2;for(let o=0;o<2;o++)for(let c=0;c<2;c++){const l=c*a,f=o*a,u=.88+r()*.2;n.fillStyle=`rgb(${132*u|0},${141*u|0},${136*u|0})`,n.fillRect(l+3,f+3,a-6,a-6);const d=a*.12;e.fillStyle=bt(.56),e.fillRect(l+d,f+d,a-2*d,a-2*d),e.strokeStyle=bt(.36),e.lineWidth=3,e.strokeRect(l+d,f+d,a-2*d,a-2*d),n.strokeStyle="rgba(30,34,36,0.5)",n.lineWidth=2,n.strokeRect(l+d,f+d,a-2*d,a-2*d),e.strokeStyle=bt(.12),e.lineWidth=5,e.strokeRect(l,f,a,a),n.strokeStyle="#1a1d1f",n.lineWidth=4,n.strokeRect(l,f,a,a),t.strokeStyle=bt(.9),t.lineWidth=6,t.strokeRect(l,f,a,a);for(let h=0;h<6;h++)for(const[p,_]of[[l+d*.5+(a-d)*h/6+6,f+d*.5],[l+d*.5+(a-d)*h/6+6,f+a-d*.5],[l+d*.5,f+d*.5+(a-d)*h/6+6],[l+a-d*.5,f+d*.5+(a-d)*h/6+6]])e.fillStyle=bt(.85),e.beginPath(),e.arc(p,_,3.2,0,7),e.fill(),n.fillStyle="rgba(200,205,200,0.5)",n.beginPath(),n.arc(p-.6,_-.6,2.2,0,7),n.fill(),i.fillStyle=bt(.9),i.beginPath(),i.arc(p,_,3.2,0,7),i.fill()}for(let o=0;o<260;o++){const c=r()<.5,l=Math.round(r()*2)*a+(r()-.5)*22,f=r()*s,u=1+r()*5,d=c?l:f,h=c?f:l;n.fillStyle=`rgba(${70+r()*40|0},${72+r()*30|0},${70+r()*30|0},0.9)`,n.beginPath(),n.ellipse(d,h,u,u*(.4+r()),r()*3,0,7),n.fill(),i.fillStyle=bt(1),i.beginPath(),i.arc(d,h,u,0,7),i.fill(),t.fillStyle=bt(.35),t.beginPath(),t.arc(d,h,u,0,7),t.fill()}Lo(n,r,s,46,"rgba(40,30,22,0.9)"),Lo(t,r,s,30,"rgba(255,255,255,0.8)"),zi(n,r,s,150,"#cfd3cf",.12,1),zi(e,r,s,80,"#606060",.12,1.4)}function Bg(n,e,t,i,s,r){n.fillStyle="#3a3d40",n.fillRect(0,0,s,s),t.fillStyle=bt(.5),t.fillRect(0,0,s,s),i.fillStyle=bt(.85),i.fillRect(0,0,s,s);const a=s/2;for(let l=0;l<2;l++)for(let f=0;f<2;f++){const u=f*a,d=l*a,h=.8+r()*.35;n.fillStyle=`rgb(${58*h|0},${61*h|0},${64*h|0})`,n.fillRect(u+2,d+2,a-4,a-4);const p=a/14;for(let _=0;_<14;_++)for(let g=0;g<14;g++){const m=u+(_+.5)*p,v=d+(g+.5)*p,T=(_+g)%2?.785:-.785;e.fillStyle=bt(.78),e.beginPath(),e.ellipse(m,v,p*.36,p*.11,T,0,7),e.fill(),n.fillStyle="rgba(120,124,128,0.35)",n.beginPath(),n.ellipse(m-.5,v-.5,p*.34,p*.09,T,0,7),n.fill(),t.fillStyle=bt(.3),t.beginPath(),t.ellipse(m,v,p*.34,p*.1,T,0,7),t.fill()}e.strokeStyle=bt(.1),e.lineWidth=6,e.strokeRect(u,d,a,a),n.strokeStyle="#0c0d0e",n.lineWidth=5,n.strokeRect(u,d,a,a);for(const[_,g]of[[u+14,d+14],[u+a-14,d+14],[u+14,d+a-14],[u+a-14,d+a-14]])e.fillStyle=bt(.25),e.beginPath(),e.arc(_,g,5,0,7),e.fill(),n.fillStyle="#17181a",n.beginPath(),n.arc(_,g,5,0,7),n.fill()}const o=n.createLinearGradient(0,0,s,0);o.addColorStop(.2,"rgba(150,155,160,0)"),o.addColorStop(.5,"rgba(150,155,160,0.16)"),o.addColorStop(.8,"rgba(150,155,160,0)"),n.fillStyle=o,n.fillRect(0,0,s,s);const c=t.createLinearGradient(0,0,s,0);c.addColorStop(.2,"rgba(0,0,0,0)"),c.addColorStop(.5,"rgba(0,0,0,0.35)"),c.addColorStop(.8,"rgba(0,0,0,0)"),t.fillStyle=c,t.fillRect(0,0,s,s),zi(n,r,s,260,"#8d9196",.2,1.2),zi(t,r,s,200,"#202020",.2,2);for(let l=0;l<26;l++){const f=r()*s,u=r()*s,d=6+r()*34,h=n.createRadialGradient(f,u,0,f,u,d);h.addColorStop(0,"rgba(8,8,10,0.55)"),h.addColorStop(1,"rgba(8,8,10,0)"),n.fillStyle=h,n.fillRect(f-d,u-d,2*d,2*d);const p=t.createRadialGradient(f,u,0,f,u,d);p.addColorStop(0,"rgba(0,0,0,0.6)"),p.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=p,t.fillRect(f-d,u-d,2*d,2*d)}}function Hg(n,e,t,i,s,r){n.fillStyle="#6c7074",n.fillRect(0,0,s,s),t.fillStyle=bt(.42),t.fillRect(0,0,s,s),i.fillStyle=bt(1),i.fillRect(0,0,s,s);for(let a=0;a<1400;a++){const o=r()*s,c=r()*s,l=20+r()*160,f=90+r()*70|0;n.strokeStyle=`rgba(${f},${f+3},${f+6},0.25)`,n.lineWidth=1,n.beginPath(),n.moveTo(c,o),n.lineTo(c+l,o+(r()-.5)*2),n.stroke()}for(let a=0;a<60;a++){const o=r()*s,c=r()*s,l=8+r()*46,f=n.createRadialGradient(o,c,0,o,c,l);f.addColorStop(0,r()<.5?"rgba(92,52,28,0.5)":"rgba(20,20,24,0.5)"),f.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=f,n.fillRect(o-l,c-l,2*l,2*l);const u=t.createRadialGradient(o,c,0,o,c,l);u.addColorStop(0,"rgba(255,255,255,0.5)"),u.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=u,t.fillRect(o-l,c-l,2*l,2*l)}zi(n,r,s,200,"#c2c6ca",.15,1),zi(e,r,s,120,"#555",.15,1.5)}function Gg(n,e,t,i,s,r){n.fillStyle="#e4e4e0",n.fillRect(0,0,s,s),t.fillStyle=bt(.55),t.fillRect(0,0,s,s),i.fillStyle=bt(.1),i.fillRect(0,0,s,s);for(let a=0;a<300;a++){const o=r()*s,c=r()*s,l=.8+r()*r()*r()*9;n.fillStyle=`rgba(${100+r()*50|0},${100+r()*45|0},${104+r()*40|0},0.8)`,n.beginPath(),n.ellipse(o,c,l,l*(.3+r()*.8),r()*3,0,7),n.fill(),i.fillStyle=bt(.5),i.beginPath(),i.arc(o,c,l,0,7),i.fill(),e.fillStyle=bt(.42),e.beginPath(),e.arc(o,c,l,0,7),e.fill(),t.fillStyle=bt(.3),t.beginPath(),t.arc(o,c,l,0,7),t.fill()}Lo(n,r,s,30,"rgba(50,38,28,0.8)"),zi(n,r,s,200,"#70706c",.1,1)}function Vg(n,e,t,i,s,r){n.fillStyle="#d8d6d0",n.fillRect(0,0,s,s),t.fillStyle=bt(.92),t.fillRect(0,0,s,s),i.fillStyle=bt(0),i.fillRect(0,0,s,s);for(let a=0;a<s;a+=4)e.fillStyle=bt(.44),e.fillRect(0,a,s,2);for(let a=0;a<s;a+=4)e.fillStyle="rgba(160,160,160,0.5)",e.fillRect(a,0,2,s);for(let a=0;a<40;a++){const o=r()*s,c=6+r()*20,l=e.createLinearGradient(0,o,0,o+c);l.addColorStop(0,"rgba(255,255,255,0)"),l.addColorStop(.5,"rgba(255,255,255,0.5)"),l.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=l,e.fillRect(0,o,s,c),n.fillStyle="rgba(0,0,0,0.07)",n.fillRect(0,o+c*.6,s,c*.5)}for(let a=0;a<50;a++){const o=r()*s,c=r()*s,l=10+r()*50,f=n.createRadialGradient(o,c,0,o,c,l);f.addColorStop(0,"rgba(40,34,28,0.3)"),f.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=f,n.fillRect(o-l,c-l,2*l,2*l)}}let Rr=null;function Gu(){return Rr||(Rr={panel:ws(11,1024,kg,{bump:2.4}),floor:ws(23,1024,Bg,{bump:3,grime:.45}),metal:ws(37,512,Hg,{bump:1.2}),paint:ws(41,512,Gg,{bump:1.6}),cloth:ws(53,256,Vg,{bump:2.2,grime:.2})},Rr)}const uc={neonViolet:14242287,turquoise:8702925},Vr=6,Wg={uWake:{value:0},uTime:{value:0},uUzQ:{value:2},uUzOff:{value:0},uAO:{value:.5},uWakeA:{value:new je(uc.turquoise)},uWakeB:{value:new je(uc.neonViolet)}},Xg=`
attribute vec3 aFlat; attribute vec3 aFlatN;
varying vec3 vFlat; varying vec3 vFlatN;
`,qg=`
varying vec3 vFlat; varying vec3 vFlatN;
uniform vec4 uFrost[${Vr}];
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
  for (int i = 0; i < ${Vr}; i++) {
    vec3 d = vFlat - uFrost[i].xyz; float r = uFrost[i].w * (1.0 + 0.4 * uWake) * 1.45;
    m0 = max(m0, 1.0 - dot(d, d) / (r * r));
  }
  if (m0 <= 0.0) return;
  float n1 = uzNoise(p * 2.3), n2 = uzNoise(p * 7.1), n3 = uzNoise(p * 23.0);
  float nz = n1 * 0.55 + n2 * 0.3 + n3 * 0.15;
  float m = 0.0;
  for (int i = 0; i < ${Vr}; i++) {
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
`,$g=`
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
`,Yg=`
#include <aomap_fragment>
reflectedLight.indirectDiffuse *= uzAO;
reflectedLight.indirectSpecular *= uzAO;
`;function Kg(n){Object.assign(n.uniforms,Wg,this.userData.room),n.vertexShader=Xg+n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vFlat = aFlat; vFlatN = aFlatN;`),n.fragmentShader=qg+n.fragmentShader.replace("#include <normal_fragment_maps>",$g).replace("#include <aomap_fragment>",Yg)}function Jg(n,e){return{uFrost:{value:Array.from({length:Vr},()=>new At(0,-100,0,.001))},uRoomMin:{value:new K(...n)},uRoomMax:{value:new K(...e)}}}function Es(n,e,{color:t=16777215,rough:i=1,metal:s=1,normal:r=1}={}){const a=Gu()[n],o=new gn({map:a.map,normalMap:a.normalMap,roughnessMap:a.orm,metalnessMap:a.orm,color:t,roughness:i,metalness:s,vertexColors:!0});return o.normalScale.set(r,r),o.userData.room=e,o.onBeforeCompile=Kg,o.customProgramCacheKey=()=>"uzor2",o}const jr={wall:["panel",16777215],wallDark:["panel",6120555],ceil:["panel",4014663],floor:["floor",16777215],steel:["metal",16777215],steelDark:["metal",4869458],bronze:["metal",12092746],copper:["metal",13662538],weld:["metal",15133938],orange:["paint",13132830],yellow:["paint",13214247],teal:["paint",3112838],white:["paint",14276559],paper:["paint",6118229],red:["paint",9316898],rubber:["cloth",1776671],cloth:["cloth",7305827],clothBlue:["cloth",3952491],clothWarm:["cloth",10123861]};function Ts(n,e=1,t=null){const i=new fs({color:new je(n).multiplyScalar(e),map:t,toneMapped:!1});return i.userData.unlit=!0,i.userData.noShadow=!0,i}function Zg(n){return{panel:Es("panel",n),floor:Es("floor",n,{rough:.85}),metal:Es("metal",n),paint:Es("paint",n),cloth:Es("cloth",n)}}const bn={max:.45,thin:.012,vol:.035,gap:.014,touch:.006,item:.6},zs=n=>[n.x1-n.x0,n.y1-n.y0,n.z1-n.z0],Qg=n=>{const[e,t,i]=zs(n);return Math.max(e,t,i)<=bn.max&&t>=bn.thin&&Math.min(e,i)>=bn.thin&&e*t*i<=bn.vol};function jg(n,{floors:e=[0]}={}){const i=new Map,s=(m,v)=>m+","+v,r=(m,v)=>{if(!(m.x1-m.x0>60||m.z1-m.z0>200))for(let T=Math.floor((m.x0-.01)/.5);T<=Math.floor((m.x1+.01)/.5);T++)for(let M=Math.floor((m.z0-.01)/.5);M<=Math.floor((m.z1+.01)/.5);M++)v(s(T,M))},a=[];n.forEach((m,v)=>{m._n=v,m._small=Qg(m),m.x1-m.x0>60||m.z1-m.z0>200?a.push(m):r(m,T=>(i.get(T)||i.set(T,[]).get(T)).push(m))});const o=m=>{const v=new Set(a);return r(m,T=>{for(const M of i.get(T)||[])v.add(M)}),v.delete(m),v},c=[],l=new Set;for(const m of n){if(!m._small||m.fix||m.loose||m.soft===!1)continue;const v=(m.x0+m.x1)/2,T=(m.y0+m.y1)/2,M=(m.z0+m.z1)/2,A=(m.x1-m.x0)*(m.z1-m.z0);let S=e.some(N=>Math.abs(m.y0-N)<=bn.gap),y=!1,w=!1;for(const N of o(m)){const F=(N.x1-N.x0)*(N.z1-N.z0),k=v>=N.x0-.005&&v<=N.x1+.005&&M>=N.z0-.005&&M<=N.z1+.005;if(k&&!N._small&&T>N.y0&&T<N.y1-.004){y=!0;break}k&&!S&&Math.abs(m.y0-N.y1)<=bn.gap&&(!N._small||F>=A*2.5)&&(S=!0),Math.abs(N.y0-m.y1)<=bn.gap&&F>A*1.5&&N.x0<m.x1&&N.x1>m.x0&&N.z0<m.z1&&N.z1>m.z0&&(w=!0)}y||w||(c.push(m),S&&l.add(m))}const f=new Map(c.map(m=>[m,m])),u=new Map(c.map(m=>[m,{x0:m.x0,x1:m.x1,y0:m.y0,y1:m.y1,z0:m.z0,z1:m.z1}])),d=m=>{for(;f.get(m)!==m;)f.set(m,f.get(f.get(m))),m=f.get(m);return m},h=new Set(c),p=bn.touch;for(const m of c)for(const v of o(m)){if(!h.has(v)||v._n<m._n||m.x0>v.x1+p||v.x0>m.x1+p||m.y0>v.y1+p||v.y0>m.y1+p||m.z0>v.z1+p||v.z0>m.z1+p||m.solo&&v.solo&&l.has(m)&&l.has(v))continue;const T=d(m),M=d(v);if(T===M)continue;const A=u.get(T),S=u.get(M),y={x0:Math.min(A.x0,S.x0),x1:Math.max(A.x1,S.x1),y0:Math.min(A.y0,S.y0),y1:Math.max(A.y1,S.y1),z0:Math.min(A.z0,S.z0),z1:Math.max(A.z1,S.z1)};Math.max(...zs(y))>bn.item||(f.set(M,T),u.set(T,y))}const _=new Map;for(const m of c){const v=d(m);(_.get(v)||_.set(v,[]).get(v)).push(m)}const g=[];for(const m of _.values()){if(!m.some(S=>l.has(S)))continue;const v=u.get(d(m[0])),T=new Set(m);let M=!1;const A=[];for(const S of m)for(const y of o(S))if(!(T.has(y)||h.has(y)||y.fix||y.loose||Math.max(...zs(y))>bn.max)&&!(S.x0>y.x1+p||y.x0>S.x1+p||S.y0>y.y1+p||y.y0>S.y1+p||S.z0>y.z1+p||y.z0>S.z1+p)){if(y.soft===!1){M=!0;break}y.y0>=v.y0+.008&&!y._small&&Math.max(Math.max(v.x1,y.x1)-Math.min(v.x0,y.x0),Math.max(v.z1,y.z1)-Math.min(v.z0,y.z0))<=bn.item&&(T.add(y),A.push(y))}if(!M){for(const S of A)v.x0=Math.min(v.x0,S.x0),v.x1=Math.max(v.x1,S.x1),v.y1=Math.max(v.y1,S.y1),v.z0=Math.min(v.z0,S.z0),v.z1=Math.max(v.z1,S.z1);g.push({parts:[...m,...A].map(S=>S._n),box:v})}}for(let m=g.length-1;m>=0;m--){const v=g[m].box;if(Math.max(...zs(v))>.07)continue;const T=(v.x0+v.x1)/2,M=(v.z0+v.z1)/2,A=g.find(S=>S!==g[m]&&Math.max(...zs(S.box))>.07&&T>S.box.x0&&T<S.box.x1&&M>S.box.z0&&M<S.box.z1&&v.y0>=S.box.y0+.015&&v.y0<=S.box.y1+bn.gap+.01);A&&(A.parts.push(...g[m].parts),A.box.y1=Math.max(A.box.y1,v.y1),g.splice(m,1))}return g.sort((m,v)=>m.parts[0]-v.parts[0]),g}function ex(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,c=new $t;c.morphTargetsRelative=o;let l=0;for(let f=0;f<n.length;++f){const u=n[f];let d=0,h=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[p].length!==n[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p]),h++}if(h!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,f),l+=p}}if(t){let f=0;const u=[];for(let d=0;d<n.length;++d){const h=n[d].index;for(let p=0;p<h.count;++p)u.push(h.getX(p)+f);f+=n[d].attributes.position.count}c.setIndex(u)}for(const f in r){const u=fc(r[f]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;c.setAttribute(f,u)}for(const f in a){const u=a[f][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[f]=[];for(let d=0;d<u;++d){const h=[];for(let _=0;_<a[f].length;++_)h.push(a[f][_][d]);const p=fc(h);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;c.morphAttributes[f].push(p)}}}return c}function fc(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){const f=n[l];if(e===void 0&&(e=f.array.constructor),e!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=f.itemSize),t!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=f.normalized),i!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=f.gpuType),s!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=f.count*t}const a=new e(r),o=new an(a,t,i);let c=0;for(let l=0;l<n.length;++l){const f=n[l];if(f.isInterleavedBufferAttribute){const u=c/t;for(let d=0,h=f.count;d<h;d++)for(let p=0;p<t;p++){const _=f.getComponent(d,p);o.setComponent(d+u,p,_)}}else a.set(f.array,c);c+=f.count*t}return s!==void 0&&(o.gpuType=s),o}const As=new K;function Mn(n,e,t,i,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;As.copy(e),As[i]=0,As.normalize();const l=.5*a/(a+o),f=1-As.angleTo(n)/c;return Math.sign(As[t])===1?f*l:o/(a+o)+l+l*(1-f)}class jo extends Tt{constructor(e=1,t=1,i=1,s=2,r=.1){const a=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new K,l=new K,f=new K(e,t,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,h=this.attributes.uv.array,p=u.length/6,_=new K,g=.5/a;for(let m=0,v=0;m<u.length;m+=3,v+=2)switch(c.fromArray(u,m),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),u[m+0]=f.x*Math.sign(c.x)+l.x*r,u[m+1]=f.y*Math.sign(c.y)+l.y*r,u[m+2]=f.z*Math.sign(c.z)+l.z*r,d[m+0]=l.x,d[m+1]=l.y,d[m+2]=l.z,Math.floor(m/p)){case 0:_.set(1,0,0),h[v+0]=Mn(_,l,"z","y",r,i),h[v+1]=1-Mn(_,l,"y","z",r,t);break;case 1:_.set(-1,0,0),h[v+0]=1-Mn(_,l,"z","y",r,i),h[v+1]=1-Mn(_,l,"y","z",r,t);break;case 2:_.set(0,1,0),h[v+0]=1-Mn(_,l,"x","z",r,e),h[v+1]=Mn(_,l,"z","x",r,i);break;case 3:_.set(0,-1,0),h[v+0]=1-Mn(_,l,"x","z",r,e),h[v+1]=1-Mn(_,l,"z","x",r,i);break;case 4:_.set(0,0,1),h[v+0]=1-Mn(_,l,"x","y",r,e),h[v+1]=1-Mn(_,l,"y","x",r,t);break;case 5:_.set(0,0,-1),h[v+0]=Mn(_,l,"x","y",r,e),h[v+1]=1-Mn(_,l,"y","x",r,t);break}}static fromJSON(e){return new jo(e.width,e.height,e.depth,e.segments,e.radius)}}const Ws=42,Cr=new je,tx=new K(1,0,0);function Vu(n){const e=n.z/Ws,t=Ws-n.y;return n.set(n.x,Ws-t*Math.cos(e),t*Math.sin(e))}function ea(n,e=new Kt){return e.setFromAxisAngle(tx,-n/Ws)}function Oi(n,e,t,i=new K){return Vu(i.set(n,e,t))}function nx(n){const e=n.attributes.position,t=n.attributes.normal,i=new Float32Array(e.count*3),s=new Float32Array(e.count*3),r=new K;for(let a=0;a<e.count;a++){const o=e.getX(a),c=e.getY(a),l=e.getZ(a);i[a*3]=o,i[a*3+1]=c,i[a*3+2]=l;const f=t.getX(a),u=t.getY(a),d=t.getZ(a);s[a*3]=f,s[a*3+1]=u,s[a*3+2]=d,Vu(r.set(o,c,l)),e.setXYZ(a,r.x,r.y,r.z);const h=l/Ws,p=Math.cos(h),_=Math.sin(h);t.setXYZ(a,f,u*p+d*_,-u*_+d*p)}return n.setAttribute("aFlat",new an(i,3)),n.setAttribute("aFlatN",new an(s,3)),n.computeBoundingSphere(),n.computeBoundingBox(),n}new xt;const ix=new tn,sx=new K,rx=new K(1,1,1),dc=[],ax={floors:[0]};function ox(n,e){const t=[],i=(f,u,d,h,p,_)=>{u-f>1e-4&&h-d>1e-4&&_-p>1e-4&&t.push({x0:f,x1:u,y0:d,y1:h,z0:p,z1:_})},s=Math.max(n.x0,e.x0),r=Math.min(n.x1,e.x1),a=Math.max(n.y0,e.y0),o=Math.min(n.y1,e.y1),c=Math.max(n.z0,e.z0),l=Math.min(n.z1,e.z1);return s>=r||a>=o||c>=l?[n]:(i(n.x0,s,n.y0,n.y1,n.z0,n.z1),i(r,n.x1,n.y0,n.y1,n.z0,n.z1),i(s,r,n.y0,n.y1,n.z0,c),i(s,r,n.y0,n.y1,l,n.z1),i(s,r,n.y0,a,c,l),i(s,r,o,n.y1,c,l),t)}class Bn{constructor({record:e=!1}={}){this.bins=new Map,this.record=e,this.fix="",this.solo=!1,this.parts=[]}fixed(e,t){const i=this.fix;this.fix=e||"закреплено";try{t()}finally{this.fix=i}return this}note(e,t){if(!this.record)return;t.computeBoundingBox();const i=t.boundingBox,s=jr[e],r={mat:e,fix:this.fix,solo:this.solo,soft:!!s,at:Bn.trace?Bn.trace():"",x0:i.min.x,x1:i.max.x,y0:i.min.y,y1:i.max.y,z0:i.min.z,z1:i.max.z};this.parts.push({p:r,g:t,bin:s?s[0]:e})}takeLoose(){const e=this.parts,t=jg(e.map(s=>s.p),{floors:ax.floors}),i=new Set;for(const s of t){const r=s.box,a=(r.x0+r.x1)/2,o=(r.y0+r.y1)/2,c=(r.z0+r.z1)/2,l="lz"+dc.length,f=s.parts.map(u=>{const d=e[u];return i.add(d.g),d.p.loose=l,d.g.translate(-a,-o,-c),{mat:d.p.mat,faktura:d.bin,g:d.g}});dc.push({id:l,x:a,y:o,z:c,h:[Math.max(.02,(r.x1-r.x0)/2),Math.max(.012,(r.y1-r.y0)/2),Math.max(.02,(r.z1-r.z0)/2)],vol:(r.x1-r.x0)*(r.y1-r.y0)*(r.z1-r.z0),geos:f})}if(i.size)for(const[s,r]of[...this.bins]){const a=r.filter(o=>!i.has(o));a.length?this.bins.set(s,a):this.bins.delete(s)}this.parts=[]}add(e,t,i){let s=t.index?t.toNonIndexed():t.clone();for(const a of Object.keys(s.attributes))["position","normal","uv"].includes(a)||s.deleteAttribute(a);s.attributes.uv||s.setAttribute("uv",new an(new Float32Array(s.attributes.position.count*2),2)),i&&s.applyMatrix4(i),this.note(e,s);const r=jr[e];if(r){Cr.set(r[1]);const a=s.attributes.position.count,o=new Float32Array(a*3);for(let c=0;c<a;c++)o[c*3]=Cr.r,o[c*3+1]=Cr.g,o[c*3+2]=Cr.b;s.setAttribute("color",new an(o,3)),e=r[0]}return this.bins.has(e)||this.bins.set(e,[]),this.bins.get(e).push(s),this}addColored(e,t){const i=t.index?t.toNonIndexed():t.clone();for(const s of Object.keys(i.attributes))["position","normal","uv","color"].includes(s)||i.deleteAttribute(s);if(i.attributes.uv||i.setAttribute("uv",new an(new Float32Array(i.attributes.position.count*2),2)),!i.attributes.color){const s=i.attributes.position.count,r=new Float32Array(s*3).fill(1);i.setAttribute("color",new an(r,3))}return this.bins.has(e)||this.bins.set(e,[]),this.bins.get(e).push(i),this}mtx(e,t,i,s=0,r=0,a=0,o=1,c=1,l=1){return new xt().compose(sx.set(e,t,i),new Kt().setFromEuler(ix.set(s,r,a,"YXZ")),rx.set(o,c,l)).clone()}box(e,t,i,s,r,a,o,{rx:c=0,ry:l=0,rz:f=0,tile:u=2,uo:d=0,vo:h=0,bevel:p}={}){const _=c||l||f;if(Bn.holes&&Bn.holes.length&&!_&&!this.noHoles){const N={x0:t-r/2,x1:t+r/2,y0:i-a/2,y1:i+a/2,z0:s-o/2,z1:s+o/2},F=Bn.holes.filter(k=>k.x0<N.x1&&k.x1>N.x0&&k.y0<N.y1&&k.y1>N.y0&&k.z0<N.z1&&k.z1>N.z0);if(F.length){let k=[N];for(const G of F)k=k.flatMap(ce=>ox(ce,G));this.noHoles=!0;try{for(const G of k)this.box(e,(G.x0+G.x1)/2,(G.y0+G.y1)/2,(G.z0+G.z1)/2,G.x1-G.x0,G.y1-G.y0,G.z1-G.z0,{tile:u,uo:d,vo:h,bevel:0})}finally{this.noHoles=!1}return this}}const g=_?1:Math.max(1,Math.ceil(o/.8)),m=_&&Math.abs(Math.abs(l)-Math.PI/2)<.01?Math.max(1,Math.ceil(r/.8)):1,v=Math.min(r,a,o),T=Math.max(r,a,o);p===void 0&&(p=v>=.1&&T<=2.2&&g<=3?Math.min(.022,v*.14):0);const M=p?new jo(r,a,o,1,p):new Tt(r,a,o,m,1,g),A=M.index?M.toNonIndexed():M,S=A.attributes.position,y=A.attributes.normal,w=A.attributes.uv;for(let N=0;N<S.count;N++){const F=S.getX(N)+(_?0:t),k=S.getY(N)+(_?0:i),G=S.getZ(N)+(_?0:s),ce=Math.abs(y.getX(N)),O=Math.abs(y.getY(N));ce>.5?w.setXY(N,G/u+d,k/u+h):O>.5?w.setXY(N,F/u+d,G/u+h):w.setXY(N,F/u+d,k/u+h)}return this.add(e,A,this.mtx(t,i,s,c,l,f))}slab(e,t,i,s,r,a,o,c){return this.box(e,(t+r)/2,(i+a)/2,(s+o)/2,Math.abs(r-t),Math.abs(a-i),Math.abs(o-s),c)}pipe(e,t,i,s,{seg:r=12,cap:a=!1}={}){const o=new K(...t),c=new K(...i),l=o.distanceTo(c),f=new Ii(s,s,l,r,Math.max(1,Math.ceil(l/.8)),!a),u=f.attributes.uv;for(let h=0;h<u.count;h++)u.setXY(h,u.getX(h)*Math.max(1,Math.round(s*12)),u.getY(h)*l/2);const d=new Kt().setFromUnitVectors(new K(0,1,0),c.clone().sub(o).normalize());return this.add(e,f,new xt().compose(o.clone().add(c).multiplyScalar(.5),d,new K(1,1,1)))}cable(e,t,i=.025,{seg:s=6,tension:r=.5}={}){const a=new wu(t.map(c=>new K(...c)),!1,"catmullrom",r),o=Math.max(8,Math.ceil(a.getLength()/.12));return this.add(e,new Jo(a,o,i,s,!1))}wall(e,t,i,s,r,a,o,c,l=[],f){const u=l.slice().sort((_,g)=>_.a0-g.a0),d=(_,g,m,v)=>{g-_<1e-4||v-m<1e-4||(t==="x"?this.slab(e,i-c/2,m,_,i+c/2,v,g,f):this.slab(e,_,m,i-c/2,g,v,i+c/2,f))},h=.003;let p=s;for(const _ of u)d(p,_.a0-h,a,o),d(_.a0-h,_.a1+h,a,_.y0-h),d(_.a0-h,_.a1+h,_.y1+h,o),p=_.a1+h;return d(p,r,a,o),this}build(e,{shadows:t=!0}={}){this.record&&this.takeLoose();const i=new ss;for(const[s,r]of this.bins){const a=e[s];if(!a)throw new Error("нет материала "+s);const o=nx(ex(r,!1));for(const l of r)l.dispose();const c=new lt(o,a);c.name=s,c.castShadow=t&&!a.transparent&&!a.userData.noShadow,c.receiveShadow=!a.userData.unlit,i.add(c)}return this.bins.clear(),i}}class lx{constructor(e,{spots:t=3,points:i=3}={}){this.defs=[],this.spots=[],this.points=[],this.slotDef=[],this.dirty=[],this.rr=0,this.shadowsPerFrame=3,this.forceShadows=!1;for(let s=0;s<t;s++){const r=new kd(16777215,0,30,.6,.5,1.6);r.castShadow=!0,r.shadow.mapSize.set(1024,1024),r.shadow.bias=-.0015,r.shadow.normalBias=.03,r.shadow.camera.near=.2,r.shadow.autoUpdate=!1,e.add(r,r.target),this.spots.push(r),this.slotDef.push(null),this.dirty.push(!0)}for(let s=0;s<i;s++){const r=new Cu(16777215,0,12,1.8);e.add(r),this.points.push(r)}this.nSpots=t,this.nPoints=i}setTier({spots:e,shadowSpots:t,shadowSize:i,points:s,shadowsPerFrame:r}){this.nSpots=Math.min(e,this.spots.length),this.nPoints=Math.min(s,this.points.length),this.shadowsPerFrame=r,this.spots.forEach((a,o)=>{a.visible=o<this.nSpots,a.castShadow=o<t,a.shadow.mapSize.x!==i&&(a.shadow.mapSize.set(i,i),a.shadow.map&&(a.shadow.map.dispose(),a.shadow.map=null)),this.dirty[o]=!0}),this.points.forEach((a,o)=>{a.visible=o<this.nPoints})}add(e){return e.world=Oi(...e.pos),e.to&&(e.worldTo=Oi(...e.to)),e.reach=e.reach||26,e.col=new je(e.color),this.defs.push(e),e}touch(e,t){this.spots.forEach((i,s)=>{const r=this.slotDef[s];r&&Math.hypot(r.pos[0]-e,r.pos[2]-t)<(r.dist||14)+1&&(this.dirty[s]=!0)})}update(e,t,i,s=0,r=null){const a=(l,f,u)=>{const d=[];for(const h of this.defs){if(h.kind!==l||h.off)continue;const p=Math.hypot(h.pos[0]-e,h.pos[2]-t),_=1-Math.min(1,Math.max(0,(p-(h.reach-5))/5));_>0&&d.push([_*(h.prio||1),_,h])}d.sort((h,p)=>p[0]-h[0]);for(let h=0;h<f.length;h++){const p=f[h],_=h<u?d[h]:null;if(!_){p.intensity=0,l==="spot"&&(this.slotDef[h]=null);continue}const g=_[2],m=g.wakeKeep??.16;p.color.copy(g.col),s>0&&r&&p.color.lerp(r,s*.75),p.intensity=g.power*_[1]*(g.flicker?g.flicker(i):1)*(1-s*(1-m)),p.position.copy(g.world),p.distance=g.dist||14,p.decay=g.decay??(l==="spot"?1.6:1.8),l==="spot"&&(p.target.position.copy(g.worldTo),p.target.updateMatrixWorld(),p.angle=g.angle||.6,p.penumbra=g.penumbra??.6,p.shadow.camera.far=p.distance,p.shadow.camera.near=g.near||.2,this.slotDef[h]!==g&&(this.slotDef[h]=g,this.dirty[h]=!0))}};a("spot",this.spots,this.nSpots),a("point",this.points,this.nPoints);let o=this.forceShadows?99:this.shadowsPerFrame,c=0;for(let l=0;l<this.spots.length&&o>0;l++){const f=(this.rr+l)%this.spots.length,u=this.spots[f];!u.castShadow||!u.visible||(this.forceShadows||this.dirty[f]&&u.intensity>0)&&(u.shadow.needsUpdate=!0,this.dirty[f]=!1,o--,c++,this.rr=f+1)}return c}}let nt=null;function Wu(n){nt=n}function Rs(n,e,t,i=1e9){let s=null,r=i,a=0,o=0;for(const l of t){let f=0,u=r,d=-1,h=0,p=!1;for(let _=0;_<3&&!p;_++){const g=_===0?l.x0:_===1?l.y0:l.z0,m=_===0?l.x1:_===1?l.y1:l.z1,v=n[_],T=e[_];if(Math.abs(T)<1e-9){(v<g||v>m)&&(p=!0);continue}let M=(g-v)/T,A=(m-v)/T,S=-1;if(M>A){const y=M;M=A,A=y,S=1}M>f&&(f=M,d=_,h=S),A<u&&(u=A),f>u&&(p=!0)}!p&&d>=0&&f>1e-4&&f<r&&(r=f,s=l,a=d,o=h)}if(!s)return null;const c=[0,0,0];return c[a]=o,{box:s,t:r,n:c}}const cx=(n,e,t)=>n>t.x0&&n<t.x1&&e>t.z0&&e<t.z1;function ux(n,e,t,i,s){let r=0,a=1;const o=t-n,c=i-e;for(const[l,f]of[[-o,n-s.x0],[o,s.x1-n],[-c,e-s.z0],[c,s.z1-e]]){if(Math.abs(l)<1e-12){if(f<0)return!1;continue}const u=f/l;if(l<0){if(u>a)return!1;u>r&&(r=u)}else{if(u<r)return!1;u<a&&(a=u)}}return r<a}function ta(n,e,t,i,s,r,a,o=nt.PH){if(o.legacyPush){for(const h of i)for(const p of h){if(!a(p))continue;const _=Math.max(p.x0,Math.min(n.x,p.x1)),g=Math.max(p.z0,Math.min(n.z,p.z1)),m=n.x-_,v=n.z-g,T=Math.hypot(m,v);if(T<r&&T>1e-6)n.x=_+m/T*r,n.z=g+v/T*r;else if(T<=1e-6){const M=[[p.x0-r-n.x,0],[p.x1+r-n.x,0],[0,p.z0-r-n.z],[0,p.z1+r-n.z]].sort((A,S)=>Math.abs(A[0]+A[1])-Math.abs(S[0]+S[1]))[0];n.x+=M[0],n.z+=M[1]}}return!1}const c=(h,p)=>{for(const _ of i)for(const g of _)if(a(g)&&cx(h,p,g))return g;return null},l=c(e,t);if(!l)for(const h of i)for(const p of h)a(p)&&ux(e,t,n.x,n.z,p)&&(n.x=e,n.z=t);for(let h=0;h<2;h++){for(const p of s){if(!a(p))continue;const _=n.x-p.x,g=n.z-p.z,m=Math.hypot(_,g),v=p.r+r;m<v&&m>1e-6&&(n.x=p.x+_/m*v,n.z=p.z+g/m*v)}for(const p of i)for(const _ of p){if(!a(_))continue;const g=Math.max(_.x0,Math.min(n.x,_.x1)),m=Math.max(_.z0,Math.min(n.z,_.z1)),v=n.x-g,T=n.z-m,M=Math.hypot(v,T);M<r&&M>1e-6&&(n.x=g+v/M*r,n.z=m+T/M*r)}}const f=c(n.x,n.z);if(!f)return!1;if(!l)return n.x=e,n.z=t,!0;const u=.01,d=[[f.x0-r-u,n.z],[f.x1+r+u,n.z],[n.x,f.z0-r-u],[n.x,f.z1+r+u]].filter(h=>!c(h[0],h[1])&&(o.exitAnywhere||nt.placeAt(h[0],h[1],.02,n.y||0))).sort((h,p)=>Math.hypot(h[0]-n.x,h[1]-n.z)-Math.hypot(p[0]-n.x,p[1]-n.z));return d.length?(n.x=d[0][0],n.z=d[0][1]):(n.x=e,n.z=t),!0}function hc(n,e,t,i=.3,s=.6,r=n.x,a=n.z){return ta(n,r,a,[e.boxes],e.circles,t,o=>o.y1>i&&o.y0<s)}const pc=n=>({x0:n.x-n.hx,x1:n.x+n.hx,z0:n.z-n.hz,z1:n.z+n.hz,y0:n.y-n.hy,y1:n.y+n.hy,body:n});function Xu(n,e,t,i,s=[],r=nt.playerR*.75){let a=0;const o=c=>{c.y1>a&&c.y1<=t&&n>c.x0-r&&n<c.x1+r&&e>c.z0-r&&e<c.z1+r&&(a=c.y1)};for(const c of i.boxes)c.y1<50&&o(c);for(const c of s)o(c);return a}function Pr(n,e,t,i,s=[],r=nt.playerR*.9){let a=99;const o=c=>{c.y0<a&&c.y0>=t&&n>c.x0-r&&n<c.x1+r&&e>c.z0-r&&e<c.z1+r&&(a=c.y0)};for(const c of i.boxes)c.y0>0&&o(c);for(const c of s)o(c);return a}function fx(n=nt.spawn.x,e=nt.spawn.z){return{x:n,z:e,y:0,vy:0,ground:!0,crouch:!1,crawl:!1,h:nt.PH.stand,eye:nt.PH.eye,landed:0,yaw:nt.spawn.yaw,pitch:nt.spawn.pitch,input:{forward:0,strafe:0,jump:!1,crouch:!1},speed:nt.speed}}function dx(n,e,t,i=[],s=[]){const r=Math.max(-1,Math.min(1,n.input.forward)),a=Math.max(-1,Math.min(1,n.input.strafe)),o=Math.sin(n.yaw),c=Math.cos(n.yaw);n.crawl&&!n.input.crawl&&Pr(n.x,n.z,n.y+nt.PH.crawl-.05,e,i,nt.playerR+.06)>=n.y+nt.PH.crouch&&(n.crawl=!1),n.input.crawl&&n.ground&&!n.noCrawl&&(n.crawl=!0),n.input.crouch||n.crawl?n.crouch=!0:n.crouch&&Pr(n.x,n.z,n.y+nt.PH.crouch-.05,e,i)>=n.y+nt.PH.stand&&(n.crouch=!1),n.h=n.crawl?nt.PH.crawl:n.crouch?nt.PH.crouch:nt.PH.stand,n.eye+=((n.crawl?nt.PH.eyeCrawl:n.crouch?nt.PH.eyeCrouch:nt.PH.eye)-n.eye)*Math.min(1,t*12);const l=n.crawl?Math.min(n.speed,nt.PH.crawlSpeed):n.speed*(n.crouch?nt.PH.crouchSpeed:1),f=n.ground||nt.PH.legacyPush?nt.PH.step:nt.PH.ledge,u=n.y+f;let d=n.y+n.h;const h=A=>A.y1>u&&A.y0<d,p=Math.max(1,Math.ceil(l*t/.15)),_=n.y;for(let A=0;A<p;A++){const S=n.x,y=n.z;if(n.x+=(-o*r+c*a)*l*t/p,n.z+=(-c*r-o*a)*l*t/p,ta(n,S,y,[e.boxes,i],e.circles,nt.playerR,h),n.crouch&&!n.crawl&&n.ground&&!n.noCrawl&&(r||a)){const w=l*t/p;if(Math.hypot(n.x-S,n.z-y)<w*.6){const F=n.x,k=n.z;d=n.y+nt.PH.crawl,n.x=S+(-o*r+c*a)*w,n.z=y+(-c*r-o*a)*w,ta(n,S,y,[e.boxes,i],e.circles,nt.playerR,h),Math.hypot(n.x-S,n.z-y)>w*.9?(n.crawl=!0,n.h=nt.PH.crawl):(d=n.y+n.h,n.x=F,n.z=k)}}}{const A=nt.boundsAt(n.x);n.x=Math.max(A.x0+nt.playerR,Math.min(A.x1-nt.playerR,n.x)),n.z=Math.max(A.z0+nt.playerR,Math.min(A.z1-nt.playerR,n.z))}const g=n.g||nt.PH.g,m=n.jumpH||nt.PH.jumpH;n.landed=0,n.input.jump&&n.ground&&Pr(n.x,n.z,n.y+n.h-.05,e,i)>n.y+n.h+.15&&(n.vy=Math.sqrt(2*g*m),n.ground=!1,n.jumped=!0),n.input.jump=!1,n.vy-=g*t;let v=n.y+n.vy*t;const T=Xu(n.x,n.z,n.y+(nt.PH.legacyPush&&!n.ground?.02:f),e,i.concat(s));v<=T?(!n.ground&&n.vy<-1.5&&(n.landed=Math.min(1,-n.vy/6)),v=T,n.vy=0,n.ground=!0):v>T+.02&&(n.ground=!1);const M=Math.min(Pr(n.x,n.z,n.y+n.h-.05,e,i),nt.roomHeight(n.x,n.z,_));v+n.h>M&&(v=M-n.h,n.vy>0&&(n.vy=0)),n.y=Math.max(0,v)}function hx(n,e,t,i=[]){n.vy-=nt.PH.gBody*t;let s=0;const r=Math.max(n.hx,n.hz),a=n.x,o=n.z;n.x+=n.vx*t,n.z+=n.vz*t;const c={x:n.x,z:n.z,y:n.y};hc(c,e,r,n.y-n.hy+.05,n.y+n.hy,a,o);let l=null,f=!1;for(const _ of i){if(_.y1<=n.y-n.hy+.05||_.y0>=n.y+n.hy)continue;const g=Math.min(c.x+n.hx-_.x0,_.x1-(c.x-n.hx)),m=Math.min(c.z+n.hz-_.z0,_.z1-(c.z-n.hz));g>0&&m>0&&(l=_,f=g<m,g<m?c.x+=c.x<(_.x0+_.x1)/2?-g:g:c.z+=c.z<(_.z0+_.z1)/2?-m:m)}let u=0;if(l){const _=c.x,g=c.z;hc(c,e,r,n.y-n.hy+.05,n.y+n.hy,a,o),Math.hypot(c.x-_,c.z-g)>.01&&(u=f?c.z<(l.z0+l.z1)/2?-1:1:c.x<(l.x0+l.x1)/2?-1:1)}Math.abs(c.x-n.x)>1e-5&&(s=Math.max(s,Math.min(1,Math.abs(n.vx)/8)),n.vx*=-.25),Math.abs(c.z-n.z)>1e-5&&(s=Math.max(s,Math.min(1,Math.abs(n.vz)/8)),n.vz*=-.25),u&&(s=0,f?n.vz=u*nt.PH.squeeze:n.vx=u*nt.PH.squeeze);{const _=nt.boundsAt(c.x);n.x=Math.max(_.x0+r,Math.min(_.x1-r,c.x)),n.z=Math.max(_.z0+r,Math.min(_.z1-r,c.z))}const d=n.y-n.hy,h=n.y+n.vy*t,p=Xu(n.x,n.z,d+.03,e,i,r*.7);if(h-n.hy<=p){n.vy<-1.2&&(s=Math.max(s,Math.min(1,-n.vy/7))),n.y=p+n.hy,n.vy=n.vy<-2.5?-n.vy*.2:0;const _=Math.pow(.004,t);n.vx*=_,n.vz*=_,Math.abs(n.vx)+Math.abs(n.vz)<.05&&n.vy===0&&(n.vx=n.vz=0,n.rest=!0)}else n.y=h;return s}const px=new Pu(-1,1,1,-1,0,1);class mx extends $t{constructor(){super(),this.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new at([0,2,0,0,2,0],2))}}const gx=new mx;class xx{constructor(e){this._mesh=new lt(gx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,px)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const _x="varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",vx=`
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
  }`,yx=`
  uniform sampler2D tDiffuse; uniform vec2 uTexel; varying vec2 vUv;
  vec3 tap(vec2 o) { return min(max(texture2D(tDiffuse, vUv + o * uTexel).rgb, vec3(0.0)), vec3(48.0)); }
  void main() {
    vec3 c = (tap(vec2(-1.0, -1.0)) + tap(vec2(1.0, -1.0)) + tap(vec2(-1.0, 1.0)) + tap(vec2(1.0, 1.0))) * 0.25;
    float l = max(c.r, max(c.g, c.b));
    gl_FragColor = vec4(c * smoothstep(0.95, 1.7, l), 1.0);
  }`,Mx=`
  uniform sampler2D tDiffuse; uniform vec2 uDir; varying vec2 vUv;
  void main() {
    vec3 c = texture2D(tDiffuse, vUv).rgb * 0.2270270;
    c += (texture2D(tDiffuse, vUv + uDir * 1.3846154).rgb + texture2D(tDiffuse, vUv - uDir * 1.3846154).rgb) * 0.3162162;
    c += (texture2D(tDiffuse, vUv + uDir * 3.2307692).rgb + texture2D(tDiffuse, vUv - uDir * 3.2307692).rgb) * 0.0702703;
    gl_FragColor = vec4(c, 1.0);
  }`;function bx(n,e,t,i){const s={tDiffuse:{value:null},tB0:{value:null},tB1:{value:null},tB2:{value:null},uBloom:{value:0},uExposure:{value:1},uTint:{value:new K(1,1,1)},uTime:{value:0},uGrain:{value:.03},uVig:{value:.42},uWake:{value:0},uHurt:{value:0},uFade:{value:1},uWarp:{value:0}},r=v=>new xx(new Mi({...v,vertexShader:_x,depthTest:!1,depthWrite:!1})),a=r({uniforms:s,fragmentShader:vx}),o={tDiffuse:{value:null},uTexel:{value:new Ze}},c={tDiffuse:{value:null},uDir:{value:new Ze}},l=r({uniforms:o,fragmentShader:yx}),f=r({uniforms:c,fragmentShader:Mx}),u=new Ze;let d=null,h=null,p=[];const _=new je(0);function g(){d&&d.dispose();for(const M of p)M.a.dispose(),M.b.dispose();p=[],n.getDrawingBufferSize(u);const v=h.hdr&&!h.ldr?Nn:fn;d=new hn(u.x,u.y,{type:v,samples:h.msaa});const T=h.bloomFrom||2;if(o.uTexel.value.set(T>1?1/u.x:0,T>1?1/u.y:0),h.bloom)for(let M=0;M<3;M++){const A=Math.max(8,u.x>>M+T),S=Math.max(8,u.y>>M+T),y={type:v,depthBuffer:!1};p.push({a:new hn(A,S,y),b:new hn(A,S,y),w:A,h:S})}}function m(v,T){c.tDiffuse.value=v.texture,c.uDir.value.set(1/T.w,0),n.setRenderTarget(T.b),f.render(n),c.tDiffuse.value=T.b.texture,c.uDir.value.set(0,1/T.h),n.setRenderTarget(T.a),f.render(n)}return{uniforms:s,configure(v){h={...v},g()},resize(){h&&g()},render(){n.setRenderTarget(d),n.setClearColor(_,1),n.clear(),h.prepass,n.render(e,t),s.tDiffuse.value=d.texture,p.length?(o.tDiffuse.value=d.texture,n.setRenderTarget(p[0].a),l.render(n),m(p[0].a,p[0]),m(p[0].a,p[1]),m(p[1].a,p[2]),s.tB0.value=p[0].a.texture,s.tB1.value=p[1].a.texture,s.tB2.value=p[2].a.texture,s.uBloom.value=.75):(s.tB0.value=s.tB1.value=s.tB2.value=d.texture,s.uBloom.value=0),n.setRenderTarget(null),a.render(n)}}}const Sx={high:{msaa:2,bloom:!0,hdr:!0,spots:3,shadowSpots:3,shadowSize:1024,points:3,shadowsPerFrame:3,mirror:1,mirrorWorld:!0,prepass:!0,env:!0,uzor:2,sunSteps:24,particles:1,shafts:!0},medium:{msaa:0,bloom:!0,hdr:!0,spots:3,shadowSpots:2,shadowSize:512,points:3,shadowsPerFrame:1,mirror:.5,mirrorWorld:!0,prepass:!0,env:!0,uzor:1,sunSteps:12,particles:.5,shafts:!0},lite:{msaa:0,bloom:!1,hdr:!0,spots:3,shadowSpots:0,shadowSize:512,points:3,shadowsPerFrame:0,mirror:0,mirrorWorld:!0,prepass:!1,habMirror:.5,env:!0,uzor:0,sunSteps:0,particles:.25,shafts:!0}},wx={KeyE:"e",KeyF:"f",Space:"jump",KeyQ:"throw",KeyV:"kick"};function Ex(n){return{fwd:(n("KeyW")||n("ArrowUp")?1:0)-(n("KeyS")||n("ArrowDown")?1:0),strafe:(n("KeyD")?1:0)-(n("KeyA")?1:0),run:n("ShiftLeft")||n("ShiftRight"),wheel:(n("KeyD")?1:0)-(n("KeyA")?1:0),eHeld:n("KeyE"),crouch:n("KeyC")}}const Tx={e:"interact",f:"mode",jump:"jump",throw:"throw",kick:"kick"},mc={interact:"e",mode:"f",jump:"jump",throw:"throw",kick:"kick"};function Ax({coarse:n=!1,mut:e=[]}={}){const t=new Set,i=new Set(e),s={x:0,y:0,sprint:!1,lookX:0,lookY:0,cutter:!1,crouch:!1,crawl:!1,interactHold:!1,throwHold:!1,tool:""},r=new Set;let a=n?"touch":"kbm";const o=[];return{keys:t,touch:s,get device(){return a},setDevice(l){if(!(l!=="touch"&&l!=="kbm")&&!(i.has("nodevswitch")&&a!==l&&o.length)&&l!==a){a=l;for(const f of o)try{f(l)}catch{}}},onDevice(l){o.push(l)},keyDown(l){t.add(l);const f=wx[l];f&&r.add(Tx[f])},keyUp(l){t.delete(l)},press(l){r.add(l)},drop(){r.clear(),s.lookX=s.lookY=0},stick(l,f,u=!1){s.x=l,s.y=f,s.sprint=!!u},look(l,f){s.lookX+=l,s.lookY+=f},hold(l,f){l in s&&l!=="tool"&&(s[l]=!!f)},want(l){(l==="cut"||l==="grip")&&(s.tool=l)},reset(){i.has("noreset")||(t.clear(),r.clear(),s.x=s.y=0,s.sprint=!1,s.lookX=s.lookY=0,s.cutter=!1,s.interactHold=!1,s.throwHold=!1,s.tool="")},frame(l,f){const u=h=>t.has(h),d=Ex(u);l.fwd=d.fwd,l.strafe=d.strafe,l.run=d.run,l.wheel=d.wheel,l.eHeld=d.eHeld,l.crouch=d.crouch,l.tool="",l.crawl=!1,l.touch=a==="touch",(s.x||s.y)&&(l.fwd=s.y,l.strafe=s.x,l.run=s.sprint,l.wheel=Math.abs(s.x)>.3?Math.sign(s.x):0),(s.lookX||s.lookY)&&(f(s.lookX,s.lookY),s.lookX=s.lookY=0),s.crouch&&(l.crouch=!0),s.crawl&&(l.crawl=!0,l.crouch=!0),s.interactHold&&(l.eHeld=!0),l.throwHeld=u("KeyQ")||!!l.rmb||s.throwHold,s.tool&&(l.tool=s.tool,s.tool=""),s.cutter?(l.fire=!0,l.tool="cut",l.touchFire=!0):l.touchFire&&(l.fire=!1,l.touchFire=!1);for(const h of r)h==="grab"?(l.tool="grip",l.press.add("fire")):mc[h]&&l.press.add(mc[h]);return r.clear(),l}}}function Rx(n,e,t,i){const s=()=>{t.reset()};n.addEventListener("blur",()=>t.reset()),n.addEventListener("pagehide",s),e.addEventListener("visibilitychange",()=>{e.hidden&&s()})}const gc={dist:.9,drop:.26},Gn={tap:.15,full:.65,kMax:1.3,v0:11.5,vMass:5,up:1.6};function Cx(n){const e=Math.max(0,Math.min(1,(n-Gn.tap)/(Gn.full-Gn.tap)));return 1+(Gn.kMax-1)*e}const Px=(n,e=1)=>(Gn.v0-Gn.vMass*n)*e;function Lx(n,e,t=1){const i=Px(e,t);return[n[0]*i,n[1]*i+Gn.up,n[2]*i]}function Dx({mut:n=[]}={}){const e=new Set(n),t={lastFire:!1,gripFire:!1,gripAt:-1,q:-1,charge:0};return{s:t,sense(i){return i.fireNew=i.fire&&!t.lastFire||i.press.has("fire"),t.lastFire=i.fire,i.fireNew},modes(i,s,r=!0){const a=[];let o=s;return i.press.has("f")&&r&&(o=o==="grip"?"cut":"grip",a.push(o)),i.tool&&r&&o!==i.tool&&!e.has("notouchtool")&&(o=i.tool,a.push(o)),a},grip(i,{able:s=!0,holding:r=!1,t:a=0}={}){const o=s&&i.fireNew,c=!i.fire&&t.gripFire;return t.gripFire=i.fire,o?r?(t.gripAt=-1,"drop"):"take":c&&r&&t.gripAt>=0&&(a-t.gripAt>=.3||e.has("holdgrip"))?"drop":""},took(i){t.gripAt=i,t.q=-1,t.charge=0},throw(i,{holding:s=!1,t:r=0}={}){if(!s)return t.q=-1,t.charge=0,0;if(i.press.has("throw")&&t.q<0&&(t.q=r),t.q<0)return t.charge=0,0;if(i.throwHeld&&!e.has("nocharge"))return t.charge=Math.max(0,Math.min(1,(r-t.q-Gn.tap)/(Gn.full-Gn.tap))),0;const a=e.has("nocharge")?1:Cx(r-t.q);return t.q=-1,t.charge=0,a},cutting:(i,s)=>s==="cut"&&!!i.fire,use:i=>!!i.eHeld}}const Oa={body:.42,eye:.3,speed:1.15},ir={hab_v1:{wallT:.4,floorT:.4,ceilT:.3,niche:{floor:.3,wall:.3,ceil:.22},stub:{depth:1.6,light:10467024},dado:.9,beam:2,mats:{wall:"wall",floor:"floor",ceil:"ceil",trim:"steelDark",dado:"wallDark"},sizes:{x:[3,16],y:[2.5,4],z:[3,16]}}},Ix=Object.keys(ir),el=["W","E","S","N"],Pi={W:"+x",E:"-x",S:"+z",N:"-z"},qu=n=>n==="W"||n==="E"?"z":"x",Ot=(n,e,t,i,s,r,a,o,c)=>({id:n,kind:e,x0:Math.min(t,i),x1:Math.max(t,i),y0:Math.min(s,r),y1:Math.max(s,r),z0:Math.min(a,o),z1:Math.max(a,o),...c});function Nx(n,e,t=[]){const i=ir[n],[s,r,a]=e,o=i.wallT,c=[Ot("floor","floor",-o,s+o,-i.floorT,0,-o,a+o),Ot("ceil","ceil",-o,s+o,r,r+i.ceilT,-o,a+o)];for(const l of el){const f=qu(l),u=f==="z"?a:s,d=t.filter(v=>v.side===l).sort((v,T)=>v.a0-T.a0),h=(v,T,M,A,S)=>{M-T<1e-4||S-A<1e-4||(l==="W"&&c.push(Ot(v,"wall",-o,0,A,S,T,M,{side:l})),l==="E"&&c.push(Ot(v,"wall",s,s+o,A,S,T,M,{side:l})),l==="S"&&c.push(Ot(v,"wall",T,M,A,S,-o,0,{side:l})),l==="N"&&c.push(Ot(v,"wall",T,M,A,S,a,a+o,{side:l})))},p=f==="x"?-o:0,_=f==="x"?u+o:u;let g=p,m=0;for(const v of d)h(`wall${l}${m++}`,g,v.a0,0,r),h(`wall${l}${m++}`,v.a0,v.a1,0,v.y0),h(`wall${l}${m++}`,v.a0,v.a1,v.y1,r),g=v.a1;h(`wall${l}${m++}`,g,_,0,r)}return c}function Ux(n,e,t){const i=ir[n],[s,,r]=e,a=i.wallT,o=i.stub.depth,c=t.y1+.3,l=[],f=p=>`stub_${t.id}_${p}`,u=t.side==="W"||t.side==="S"?-a:t.side==="E"?s+a:r+a,d=t.side==="W"||t.side==="S"?-1:1,h=(p,_,g,m,v,T,M)=>{const[A,S]=[u+d*m,u+d*v];t.side==="W"||t.side==="E"?l.push(Ot(f(p),"stub",A,S,T,M,_,g)):l.push(Ot(f(p),"stub",_,g,T,M,A,S))};return h("floor",t.a0-.2,t.a1+.2,0,o+.2,-.2,0),h("ceil",t.a0-.2,t.a1+.2,0,o+.2,c,c+.2),h("l",t.a0-.2,t.a0,0,o,0,c),h("r",t.a1,t.a1+.2,0,o,0,c),h("end",t.a0-.2,t.a1+.2,o,o+.2,0,c),l}const ka={cutRate:1,blastK:3.2},zn=(n,e)=>({type:"integer",minimum:n,maximum:e}),Ci=(n,e)=>({type:"number",minimum:n,maximum:e}),xc={type:"string",pattern:"^[a-z][a-z0-9_.]{0,47}$"},Fx={type:"array",items:{type:"integer",minimum:0,maximum:64},minItems:2,maxItems:2},ns=(n,e)=>e===90||e===270?[n[1],n[0]]:n;function Cs(n,e,t,i,s,r,a){const[o,,c]=n.size;return e==="W"?{x0:0,x1:a,z0:t,z1:i,y0:s,y1:r}:e==="E"?{x0:o-a,x1:o,z0:t,z1:i,y0:s,y1:r}:e==="S"?{x0:t,x1:i,z0:0,z1:a,y0:s,y1:r}:{x0:t,x1:i,z0:c-a,z1:c,y0:s,y1:r}}function Ps(n,e,t,i){const[s,,r]=n.size;return e==="W"?[i,t]:e==="E"?[s-i,t]:e==="S"?[t,i]:[t,r-i]}const Ft=(n,e)=>(n+e)/2,tl={crate:{mount:"floor",cells:n=>n.size==="large"?[2,2]:[1,1],key:!1,params:{color:{type:"string",enum:["orange","teal","white"]},size:{type:"string",enum:["small","large"]}},compile(n,e){const t=n.size==="large",i=t?2:1,s=(n.at[0]+i/2)*e.G,r=(n.at[1]+i/2)*e.G,a=t?.42:.22;return{parts:[{id:n.id,prefab:n.id,kind:t?"crateL":"crate",shape:"box",h:[a,a,a],p:[s,a,r],yaw:0,mass:t?30:8,free:!0,mat:n.color||"orange"}]}}},shelf:{mount:"floor",cells:n=>ns([n.width||3,1],n.rot||0),key:!1,params:{width:zn(2,4),levels:zn(2,4),load:zn(0,6),color:{type:"string",enum:["steel","steelDark","orange"]}},compile(n,e){const[t,i]=ns([n.width||3,1],n.rot||0),s=e.G,r=n.levels||3,a=.55,o=.12+r*a,c=n.at[0]*s+.03,l=(n.at[0]+t)*s-.03,f=n.at[1]*s+.03,u=(n.at[1]+i)*s-.03,d=.04,h=[],p=[],_=[];for(const[M,A]of[[c,f],[l-d,f],[c,u-d],[l-d,u-d]])h.push(Ot(`${n.id}.post${h.length}`,"shelf",M,M+d,0,o,A,A+d,{prefab:n.id,mat:n.color||"steel"}));const g=[];for(let M=0;M<r;M++){const A=.1+M*a,S=`${n.id}.plank${M}`;g.push(A+.03),p.push({id:S,prefab:n.id,kind:"plank",shape:"box",h:[(l-c)/2,.015,(u-f)/2],p:[(c+l)/2,A+.015,(f+u)/2],yaw:0,mass:4*Math.max(t,i)/2,free:!1,mat:"steelDark"}),[[c,f],[l,f],[c,u],[l,u]].forEach(([y,w],N)=>_.push({id:`${S}.w${N}`,prefab:n.id,a:S,b:"world",at:[y,A+.015,w],strength:.8,kind:"weld"}))}const m=t>=i?"x":"z",v=Math.max(t,i),T=.16;for(let M=0;M<Math.min(n.load||0,v*r);M++){const A=Math.floor(M/v),S=M%v,y=(S+.5)*s+(m==="x"?n.at[0]*s:n.at[1]*s),w=m==="x"?(f+u)/2:(c+l)/2;p.push({id:`${n.id}.box${M}`,prefab:n.id,kind:"crate",shape:"box",h:[T,T,T],p:m==="x"?[y,g[A]+T,w]:[w,g[A]+T,y],yaw:0,mass:5,free:!0,mat:["orange","teal","white"][M%3]})}return{statics:h,parts:p,joints:_}}},sheet:{mount:"wall",cells:n=>n.size||[2,2],key:!1,params:{size:{type:"array",prefixItems:[zn(1,4),zn(1,3)],minItems:2,maxItems:2},mat:{type:"string",enum:["steel","steelDark","white","teal"]},strength:Ci(.5,3)},compile(n,e){const[t,i]=n.size||[2,2],s=e.G,r=n.at[0]*s+.02,a=(n.at[0]+t)*s-.02,o=n.at[1]*s+.02,c=(n.at[1]+i)*s-.02,l=.012,f=.02+l,[u,,d]=e.size,h=Ft(r,a),p=Ft(o,c),_=qu(n.wall),g=n.strength??.8,m={W:[f,h],E:[u-f,h],S:[h,f],N:[h,d-f]}[n.wall],v=(A,S)=>({W:[f,S,A],E:[u-f,S,A],S:[A,S,f],N:[A,S,d-f]})[n.wall],T=[{id:n.id,prefab:n.id,kind:"sheet",shape:"box",h:_==="z"?[l,(c-o)/2,(a-r)/2]:[(a-r)/2,(c-o)/2,l],p:[m[0],p,m[1]],yaw:0,mass:Math.max(2,(a-r)*(c-o)*9),free:!1,mat:n.mat||"steel"}],M=[[r+.05,o+.05],[a-.05,o+.05],[r+.05,c-.05],[a-.05,c-.05]].map(([A,S],y)=>({id:`${n.id}.r${y}`,prefab:n.id,a:n.id,b:"world",at:v(A,S),strength:g,kind:"rivet"}));return{parts:T,joints:M}}},pallet:{mount:"floor",cells:()=>[2,2],key:!1,params:{load:zn(0,4)},compile(n,e){const t=e.G,i=(n.at[0]+1)*t,s=(n.at[1]+1)*t,r=.07,a=[{id:n.id,prefab:n.id,kind:"pallet",shape:"box",h:[.47,r,.47],p:[i,r,s],yaw:0,mass:18,free:!0,mat:"wood"}];return[[-1,-1],[1,-1],[-1,1],[1,1]].slice(0,n.load||0).forEach(([o,c],l)=>a.push({id:`${n.id}.box${l}`,prefab:n.id,kind:"crate",shape:"box",h:[.2,.2,.2],p:[i+o*.23,2*r+.2,s+c*.23],yaw:0,mass:6,free:!0,mat:["teal","white","orange","teal"][l]})),{parts:a}}},pipe:{mount:"wall",cells:n=>[n.len||4,1],key:!1,params:{len:zn(2,32),r:{type:"number",enum:[.04,.06,.1]},mat:{type:"string",enum:["steel","copper","steelDark"]}},compile(n,e){const t=e.G,i=n.r||.06,s=n.at[0]*t,r=(n.at[0]+(n.len||4))*t,a=(n.at[1]+.5)*t,o=i+.05,c=Cs(e,n.wall,s,r,a-i,a+i,o+i);return{statics:[Ot(n.id,"pipe",c.x0,c.x1,c.y0,c.y1,c.z0,c.z1,{prefab:n.id,r:i,off:o,mat:n.mat||"steel",side:n.wall,a0:s,a1:r,y:a})]}}},vent:{mount:"wall",cells:()=>[1,1],key:!0,params:{},compile(n,e){const t=e.G,i=(n.at[0]+.5)*t,s=(n.at[1]+.5)*t,[r,,a]=e.size,o=Ps(e,n.wall,i,.8),c={W:[0,s,i],E:[r,s,i],S:[i,s,0],N:[i,s,a]}[n.wall];return{panels:[{id:n.id,room:"",face:Pi[n.wall],x:c[0],y:c[1],z:c[2],depth:e.kit.niche.wall,panel:"vent"}],keys:[{id:n.id,at:[o[0],s,o[1]],face:Pi[n.wall]}]}}},gas_tank:{mount:"floor",cells:()=>[1,1],key:!0,params:{content:{type:"string",enum:["O2","N2","H2"]},charge:Ci(.5,2),fuse:Ci(.5,3)},required:["content"],compile(n,e){const t=(n.at[0]+.5)*e.G,i=(n.at[1]+.5)*e.G;return{parts:[{id:n.id,prefab:n.id,kind:"tank",shape:"cyl",h:[.12,.32,.12],p:[t,.32,i],yaw:0,mass:12,free:!0,mat:n.content,tank:{charge:n.charge??1,fuse:n.fuse??1.2,radius:4.5}}],keys:[{id:n.id,at:[t,.5,i]}]}}},table_cuttable:{mount:"floor",cells:n=>n.size||[3,2],key:!0,params:{size:{type:"array",items:{type:"integer",minimum:2,maximum:4},minItems:2,maxItems:2},strength:Ci(.5,3),top:{type:"string",enum:["white","steel"]}},compile(n,e){const[t,i]=ns(n.size||[3,2],n.rot||0),s=e.G,r=n.at[0]*s+.05,a=(n.at[0]+t)*s-.05,o=n.at[1]*s+.05,c=(n.at[1]+i)*s-.05,l=.76,f=.05,u=Ft(r,a),d=Ft(o,c),h=l-f,p=n.strength??1.2,_=[{id:n.id+".top",prefab:n.id,kind:"top",shape:"box",h:[(a-r)/2,f/2,(c-o)/2],p:[u,l-f/2,d],yaw:0,mass:14,free:!1,mat:n.top||"white"}],g=[];return[[r+.08,o+.08],[a-.08,o+.08],[r+.08,c-.08],[a-.08,c-.08]].forEach(([m,v],T)=>{const M=`${n.id}.leg${T}`;_.push({id:M,prefab:n.id,kind:"leg",shape:"box",h:[.03,h/2,.03],p:[m,h/2,v],yaw:0,mass:2,free:!1,mat:"steelDark"}),g.push({id:`${n.id}.cut${T}`,prefab:n.id,a:n.id+".top",b:M,at:[m,h,v],strength:p,kind:"weld"})}),{parts:_,joints:g,keys:[{id:n.id,at:[u,l,d]}]}}},cabinet:{mount:"floor",cells:()=>[2,1],key:!0,params:{color:{type:"string",enum:["white","teal","steel"]},strength:Ci(.5,3)},compile(n,e){const t=n.rot||0,[i,s]=ns([2,1],t),r=e.G,a=1.9,o=n.strength??1.5,c=n.at[0]*r+.02,l=(n.at[0]+i)*r-.02,f=n.at[1]*r+.02,u=(n.at[1]+s)*r-.02,d={0:"+z",90:"+x",180:"-z",270:"-x"}[t],h=d[1]==="z"?"x":"z",p=d[0]==="+"?1:-1,_=.03,g=.003,m=.025,v=.05,T=.03,M=h==="x"?c:f,A=h==="x"?l:u,S=Ft(M,A),y=d==="+z"?u:d==="-z"?f:d==="+x"?l:c,w=d==="+z"?f:d==="-z"?u:d==="+x"?c:l,N=y-p*(_+g),F=[],k=n.color==="teal"?"teal":n.color==="steel"?"steel":"white",G=(ue,re,Ee,he,_e,Te,I,de)=>F.push(h==="x"?Ot(ue,"cabinet",re,Ee,he,_e,Te,I,{prefab:n.id,mat:de}):Ot(ue,"cabinet",Te,I,he,_e,re,Ee,{prefab:n.id,mat:de}));G(n.id,M,A,0,a,w,w+p*m,"steelDark"),G(`${n.id}.l`,M,M+m,0,a,w+p*m,N,k),G(`${n.id}.r`,A-m,A,0,a,w+p*m,N,k),G(`${n.id}.bottom`,M+m,A-m,0,.08,w+p*m,N,k),G(`${n.id}.top`,M+m,A-m,a-m,a,w+p*m,N,k);for(const[ue,re]of[.65,1.25].entries())G(`${n.id}.shelf${ue}`,M+m,A-m,re,re+.02,w+p*m,N-p*T,"steelDark");G(`${n.id}.fl`,M+m,M+v,.08,a-m,N-p*T,N,"steel"),G(`${n.id}.fr`,A-v,A-m,.08,a-m,N-p*T,N,"steel"),G(`${n.id}.ft`,M+v,A-v,a-v,a-m,N-p*T,N,"steel");const ce=[],O=[];[[M,S,0],[S,A,1]].forEach(([ue,re,Ee])=>{const he=(re-ue)/2-.004,_e=Ft(ue,re),Te=Ee===0?ue+.004:re-.004,I=a/2-.03,de=N+p*(g+_/2),q=N+p*(g+_),pe=h==="x"?[_e,a/2,de]:[de,a/2,_e],ve=h==="x"?[Te,a/2,q]:[q,a/2,Te],Ie=`${n.id}.leaf${Ee}`;ce.push({id:Ie,prefab:n.id,kind:"leaf",shape:"box",h:h==="x"?[he,I,_/2]:[_/2,I,he],p:pe,yaw:0,mass:3,free:!1,mat:n.color||"white",hinge:{at:ve,side:Ee,along:h,sg:p,ys:[-I+.22,0,I-.22]}}),O.push({id:`${n.id}.hinge${Ee}`,prefab:n.id,a:Ie,b:"world",at:ve,strength:o,kind:"hinge"})});const ne=d[1]==="z"?[Ft(c,l),N+p*.8]:[N+p*.8,Ft(f,u)];return{statics:F,parts:ce,joints:O,keys:[{id:n.id,at:[ne[0],1,ne[1]],face:d}],opens:[{id:n.id,leaves:ce.map(ue=>ue.id),face:d}]}}},trap_hatch:{mount:"floor",cells:()=>[2,2],key:!0,params:{number:zn(100,999)},required:["number"],compile(n,e){const t=e.G,i=n.at[0]*t,s=n.at[1]*t,r=i+2*t,a=s+2*t;return{hatches:[{id:n.id,number:n.number,x0:i+.05,x1:r-.05,z0:s+.05,z1:a-.05}],keys:[{id:n.id,at:[Ft(i,r),.05,Ft(s,a)]}]}}},breaker:{mount:"wall",cells:()=>[1,2],key:!0,net:"source",params:{on:{type:"boolean"}},compile(n,e){const t=e.G,i=n.at[0]*t+.05,s=(n.at[0]+1)*t-.05,r=n.at[1]*t,a=r+2*t-.1,o=Cs(e,n.wall,i,s,r,a,.14),c=Ps(e,n.wall,Ft(i,s),.9);return{statics:[Ot(n.id,"breaker",o.x0,o.x1,o.y0,o.y1,o.z0,o.z1,{prefab:n.id})],nodes:{[n.id]:{kind:"breaker",on:n.on!==!1}},keys:[{id:n.id,at:[c[0],Ft(r,a),c[1]],face:Pi[n.wall]}]}}},screen:{mount:"wall",cells:n=>n.size||[2,1],key:!0,net:"consumer",text:["text"],params:{size:{type:"array",items:{type:"integer",minimum:1,maximum:4},minItems:2,maxItems:2},text:xc},required:["text"],compile(n,e){const[t,i]=n.size||[2,1],s=e.G,r=n.at[0]*s+.03,a=(n.at[0]+t)*s-.03,o=n.at[1]*s+.03,c=(n.at[1]+i)*s-.03,l=Cs(e,n.wall,r,a,o,c,.05),f=Ps(e,n.wall,Ft(r,a),1.1);return{statics:[Ot(n.id,"screen",l.x0,l.x1,l.y0,l.y1,l.z0,l.z1,{prefab:n.id})],nodes:{[n.id]:{kind:"screen"}},texts:[{id:n.id,key:n.text,kind:"screen",w:a-r,h:c-o}],keys:[{id:n.id,at:[f[0],Ft(o,c),f[1]],face:Pi[n.wall]}]}}},note:{mount:"wall",cells:()=>[1,1],key:!0,text:["text"],params:{text:xc},required:["text"],compile(n,e){const t=e.G,i=(n.at[0]+.5)*t,s=(n.at[1]+.5)*t,r=Cs(e,n.wall,i-.105,i+.105,s-.15,s+.15,.01),a=Ps(e,n.wall,i,.8);return{statics:[Ot(n.id,"note",r.x0,r.x1,r.y0,r.y1,r.z0,r.z1,{prefab:n.id,thin:!0})],texts:[{id:n.id,key:n.text,kind:"note"}],keys:[{id:n.id,at:[a[0],s,a[1]],face:Pi[n.wall]}]}}},window:{mount:"wall",cells:n=>n.size||[3,2],key:!0,hole:!0,params:{size:{type:"array",prefixItems:[zn(2,6),zn(2,4)],minItems:2,maxItems:2},strength:Ci(.5,4)},compile(n,e){const[t,i]=n.size||[3,2],s=e.G,r=n.at[0]*s,a=(n.at[0]+t)*s,o=n.at[1]*s,c=(n.at[1]+i)*s,l=e.kit.wallT,f=Cs(e,n.wall,r,a,o,c,0),u=Ps(e,n.wall,Ft(r,a),1),d={W:[-l/2,null],E:[e.size[0]+l/2,null],S:[null,-l/2],N:[null,e.size[2]+l/2]}[n.wall],h=d[0]!==null?Ot(n.id,"glass",d[0]-.02,d[0]+.02,o,c,r,a,{prefab:n.id}):Ot(n.id,"glass",r,a,o,c,d[1]-.02,d[1]+.02,{prefab:n.id});return{holes:[{side:n.wall,a0:r,a1:a,y0:o,y1:c,id:n.id}],statics:[h],windows:[{id:n.id,side:n.wall,a0:r,a1:a,y0:o,y1:c,strength:n.strength??2,at:[Ft(f.x0,f.x1),Ft(o,c),Ft(f.z0,f.z1)]}],keys:[{id:n.id,at:[u[0],Ft(o,c),u[1]],face:Pi[n.wall]}]}}},lamp:{mount:"ceil",cells:n=>ns([1,2],n.rot||0),net:"consumer",params:{color:{type:"string",enum:["cool","warm"]},power:Ci(.5,3)},compile(n,e){const[t,i]=ns([1,2],n.rot||0),s=e.G,r=(n.at[0]+t/2)*s,a=(n.at[1]+i/2)*s,o=e.size[1];return{nodes:{[n.id]:{kind:"lamp"}},lights:[{id:n.id,kind:"spot",pos:[r,o-.12,a],to:[r,0,a],color:n.color==="warm"?16765600:14083839,power:14*(n.power??1.2),dist:9,angle:1.05,penumbra:.7}],fixtures:[{id:n.id,x:r,z:a,w:t*s-.16,l:i*s-.16,y:o}]}}},cable:{mount:"path",key:!1,net:"conductor",params:{path:{type:"array",items:Fx,minItems:2,maxItems:32},under:{type:"string",enum:["floor"]}},required:["path"],compile(n,e){const t=e.G,i=n.path.map(([s,r])=>[(s+.5)*t,-.16,(r+.5)*t]);return{nodes:{[n.id]:{kind:"cable"}},cables:[{id:n.id,pts:i}]}}}},zx=Object.keys(tl),Ox={floor_plate:["+y"],wall_plate:["+x","-x","+z","-z"],ceil_plate:["-y"]},kx=["slide","none","sealed"],Et={w:.5,niche:.4,bolt:.035,boltCut:1,weld:2,seat:.25,seatOut:.7},Bx=[{id:"pn_airlock_1",room:"airlock",face:"+y",x:-.05,y:0,z:3.35,depth:.35},{id:"pn_airlock_2",room:"airlock",face:"+y",x:-1.05,y:0,z:1.1,depth:.35},{id:"pn_airlock_3",room:"airlock",face:"+y",x:-1.05,y:0,z:5.6,depth:.35},{id:"pn_airlock_4",room:"airlock",face:"-y",x:.95,y:2.5,z:1.35,depth:.35},{id:"pn_airlock_5",room:"airlock",face:"-y",x:.95,y:2.5,z:5.35,depth:.35},{id:"pn_airlock_6",room:"airlock",face:"-y",x:-1.05,y:2.5,z:2.35,depth:.35},{id:"pn_corridor_1",room:"corridor",face:"+y",x:-.05,y:0,z:-20.05,depth:.35},{id:"pn_corridor_2",room:"corridor",face:"+y",x:-1.55,y:0,z:-.55,depth:.35},{id:"pn_corridor_3",room:"corridor",face:"+y",x:-1.55,y:0,z:-39.55,depth:.35},{id:"pn_corridor_4",room:"corridor",face:"-x",x:2,y:1.55,z:-10.05,depth:.32},{id:"pn_corridor_5",room:"corridor",face:"+x",x:-2,y:1.55,z:-29.8,depth:.32},{id:"pn_corridor_6",room:"corridor",face:"-x",x:2,y:1.55,z:-34.55,depth:.32},{id:"pn_corridor_7",room:"corridor",face:"+x",x:-2,y:1.55,z:-6.05,depth:.32},{id:"pn_corridor_8",room:"corridor",face:"-y",x:-1.55,y:3,z:-14.55,depth:.35},{id:"pn_hab_1",room:"hab",face:"+y",x:6.85,y:0,z:-10.4,depth:.35},{id:"pn_hab_2",room:"hab",face:"+y",x:3.1,y:0,z:-5.15,depth:.35},{id:"pn_hab_3",room:"hab",face:"+y",x:10.85,y:0,z:-5.65,depth:.35},{id:"pn_hab_4",room:"hab",face:"-x",x:11.4,y:1.55,z:-15.15,depth:.32},{id:"pn_hab_5",room:"hab",face:"+z",x:3.1,y:1.55,z:-15.6,depth:.32},{id:"pn_hab_6",room:"hab",face:"-x",x:11.4,y:1.55,z:-10.4,depth:.32},{id:"pn_hab_7",room:"hab",face:"+z",x:7.1,y:1.55,z:-15.6,depth:.32},{id:"pn_hab_8",room:"hab",face:"-y",x:2.85,y:2.8,z:-9.4,depth:.35},{id:"pn_comm_1",room:"comm",face:"+y",x:14,y:0,z:-8.15,depth:.35},{id:"pn_comm_2",room:"comm",face:"+y",x:15.75,y:0,z:-10.15,depth:.35},{id:"pn_comm_3",room:"comm",face:"+y",x:12.75,y:0,z:-6.15,depth:.35},{id:"pn_comm_4",room:"comm",face:"-x",x:16.4,y:1.55,z:-6.15,depth:.32},{id:"pn_comm_5",room:"comm",face:"+x",x:11.8,y:1.55,z:-10.15,depth:.32},{id:"pn_comm_6",room:"comm",face:"+x",x:11.8,y:1.55,z:-6.65,depth:.32},{id:"pn_comm_7",room:"comm",face:"-y",x:14,y:2.8,z:-10.15,depth:.35},{id:"pn_bay_1",room:"bay",face:"+y",x:7.85,y:0,z:-24.3,depth:.35},{id:"pn_bay_2",room:"bay",face:"+y",x:15.85,y:0,z:-17.55,depth:.35},{id:"pn_bay_3",room:"bay",face:"+y",x:15.85,y:0,z:-30.55,depth:.35},{id:"pn_bay_4",room:"bay",face:"-z",x:2.85,y:1.55,z:-17,depth:.32},{id:"pn_bay_5",room:"bay",face:"+z",x:2.85,y:1.55,z:-31,depth:.32},{id:"pn_bay_6",room:"bay",face:"+z",x:9.35,y:1.55,z:-31,depth:.32},{id:"pn_bay_7",room:"bay",face:"-z",x:9.35,y:1.55,z:-17,depth:.32},{id:"pn_store_1",room:"store",face:"+y",x:22.75,y:0,z:-24.05,depth:.35},{id:"pn_store_2",room:"store",face:"+y",x:28.25,y:0,z:-29.55,depth:.35},{id:"pn_store_3",room:"store",face:"+y",x:27.25,y:0,z:-18.55,depth:.35},{id:"pn_store_4",room:"store",face:"-x",x:28.8,y:1.55,z:-21.8,depth:.32},{id:"pn_store_5",room:"store",face:"-x",x:28.8,y:1.55,z:-26.55,depth:.32},{id:"pn_store_6",room:"store",face:"-x",x:28.8,y:1.55,z:-19.55,depth:.32},{id:"pn_store_7",room:"store",face:"-x",x:28.8,y:1.55,z:-17.55,depth:.32},{id:"pn_mind_1",room:"mind",face:"+y",x:23.15,y:0,z:-13.65,depth:.35},{id:"pn_mind_2",room:"mind",face:"+y",x:20.65,y:0,z:-15.65,depth:.35},{id:"pn_mind_3",room:"mind",face:"+y",x:25.15,y:0,z:-11.15,depth:.35},{id:"pn_mind_4",room:"mind",face:"-x",x:26.2,y:1.55,z:-16.15,depth:.32},{id:"pn_mind_5",room:"mind",face:"+x",x:20.2,y:1.55,z:-12.15,depth:.32},{id:"pn_mind_6",room:"mind",face:"-x",x:26.2,y:1.55,z:-12.65,depth:.32},{id:"pn_mind_7",room:"mind",face:"+x",x:20.2,y:1.55,z:-13.9,depth:.32},{id:"pn_mind_8",room:"mind",face:"-y",x:22.9,y:3.2,z:-11.4,depth:.35},{id:"pn_gallery_1",room:"gallery",face:"+y",x:31.9,y:0,z:-23.9,depth:.35},{id:"pn_gallery_2",room:"gallery",face:"+y",x:29.65,y:0,z:-27.15,depth:.35},{id:"pn_gallery_3",room:"gallery",face:"+y",x:34.15,y:0,z:-27.15,depth:.35},{id:"pn_gallery_4",room:"gallery",face:"-z",x:29.65,y:1.55,z:-20.4,depth:.32},{id:"pn_gallery_5",room:"gallery",face:"-z",x:34.15,y:1.55,z:-20.4,depth:.32},{id:"pn_gallery_6",room:"gallery",face:"+z",x:31.9,y:1.55,z:-27.6,depth:.32},{id:"pn_gallery_7",room:"gallery",face:"+x",x:29.2,y:1.55,z:-21.9,depth:.32},{id:"pn_gallery_8",room:"gallery",face:"-y",x:34.15,y:3.4,z:-24.65,depth:.35}],nl={"+x":[1,0,0],"-x":[-1,0,0],"+z":[0,0,1],"-z":[0,0,-1],"+y":[0,1,0],"-y":[0,-1,0]};function $u(n,e,t,i){const s=nl[n.face],r=[n.x,n.y,n.z],a={};return["x","y","z"].forEach((o,c)=>{if(s[c]){const l=r[c]+s[c]*e,f=r[c]+s[c]*t;a[o+"0"]=Math.min(l,f),a[o+"1"]=Math.max(l,f)}else a[o+"0"]=r[c]-i,a[o+"1"]=r[c]+i}),a}const Qs=n=>$u(n,-n.depth,0,Et.niche/2),_c=n=>$u(n,0,.022,Et.w/2);function Yu(n,e){const t=nl[n.face],i=Et.w/2-.05,s=[[-1,-1],[1,-1],[1,1],[-1,1]][e],r=t[0]?[0,0,1]:t[2]?[1,0,0]:[1,0,0],a=t[1]?[0,0,1]:[0,1,0];return[n.x+r[0]*s[0]*i+a[0]*s[1]*i+t[0]*.02,n.y+r[1]*s[0]*i+a[1]*s[1]*i+t[1]*.02,n.z+r[2]*s[0]*i+a[2]*s[1]*i+t[2]*.02]}const Sn={r:.3,stand:1.3,eye:1.2,step:.28};function Hx(n,e){const t=n.grid,[i,s,r]=n.shell.size,[a,o,c]=e.cell,l=f=>(f+.5)*t;switch(e.face){case"+y":return[l(a),0,l(c)];case"-y":return[l(a),s,l(c)];case"+x":return[0,l(o),l(c)];case"-x":return[i,l(o),l(c)];case"+z":return[l(a),l(o),0];default:return[l(a),l(o),r]}}function Gx(n){const e=n.grid,t=n.shell.size,i=n.shell.kit,s=ir[i],[r,a,o]=t,c={G:e,size:t,kit:s},l={id:n.id,G:e,size:t,kit:i,statics:[],parts:[],joints:[],panels:[],portals:[],nodes:{},edges:[],lights:[],fixtures:[],windows:[],hatches:[],cables:[],texts:[],keys:[],opens:[],views:[],holes:[],doors:[],prefabOf:{}};for(const h of n.portals||[]){const p=h.at*e,_=(h.at+h.w)*e,g=h.h*e,m=h.wall==="W"||h.wall==="E"?"z":"x",v=(p+_)/2,T={W:[.7,v],E:[r-.7,v],S:[v,.7],N:[v,o-.7]}[h.wall],M={W:-Math.PI/2,E:Math.PI/2,S:Math.PI,N:0}[h.wall],A={id:h.id,side:h.wall,a0:p,a1:_,y0:0,y1:g,to:h.to,door:h.door,inside:T,yaw:M,along:m};if(l.portals.push(A),l.holes.push({side:h.wall,a0:p,a1:_,y0:0,y1:g,id:h.id}),l.statics.push(...Ux(i,t,A)),h.door!=="none"){const S=s.wallT,y={W:-S/2,E:r+S/2,S:-S/2,N:o+S/2}[h.wall],w=m==="z"?Ot(h.id+".door","door",y-.04,y+.04,0,g,p,_,{prefab:h.id,door:h.id}):Ot(h.id+".door","door",p,_,0,g,y-.04,y+.04,{prefab:h.id,door:h.id});l.statics.push(w),l.doors.push({id:h.id,kind:h.door,box:w,along:m}),l.nodes[h.id]={kind:"door"}}l.keys.push({id:h.id,at:[T[0],1,T[1]],portal:!0}),l.prefabOf[h.id]={id:h.id,type:"portal"}}for(const h of n.prefabs||[]){const p=tl[h.type];if(!p)continue;l.prefabOf[h.id]=h;const _=p.compile(h,c)||{};for(const g of["statics","parts","joints","lights","fixtures","windows","hatches","cables","texts","keys","opens","holes"])_[g]&&l[g].push(..._[g]);if(_.panels)for(const g of _.panels)l.panels.push({...g,room:n.id});_.nodes&&Object.assign(l.nodes,_.nodes)}l.statics.unshift(...Nx(i,t,l.holes));for(const h of n.slots||[]){const[p,_,g]=Hx(n,h),m=h.face==="+y"?s.niche.floor:h.face==="-y"?s.niche.ceil:s.niche.wall;l.panels.push({id:h.id,room:n.id,face:h.face,x:p,y:_,z:g,depth:m,panel:h.panel})}for(const[h,p]of n.net&&n.net.power||[])l.edges.push([h,p]);const f=r/2,u=o/2;for(const h of l.portals)l.views.push({id:"portal_"+h.id,eye:[h.inside[0],Sn.eye,h.inside[1]],look:[f,.9,u]});l.views.push({id:"corner_sw",eye:[.6,1.6,.6],look:[r-.6,.6,o-.6]}),l.views.push({id:"corner_ne",eye:[r-.6,1.6,o-.6],look:[.6,.6,.6]}),l.views.push({id:"corner_nw",eye:[.6,1.6,o-.6],look:[r-.6,.6,.6]}),l.views.push({id:"corner_se",eye:[r-.6,1.6,.6],look:[.6,.6,o-.6]}),l.views=l.views.slice(0,6);const d=l.portals[0];return l.spawn=d?{x:d.inside[0],z:d.inside[1],yaw:d.yaw}:{x:f,z:u,yaw:0},l.niches=l.panels.map(h=>({...Qs(h),id:h.id})),l}const Vx=n=>{if(n<2)return!1;for(let e=2;e*e<=n;e++)if(n%e===0)return!1;return!0};function Lr(n){for(let e=2;e<=n;e++){if(!Vx(e)||n%e)continue;let t=n,i=0;for(;t%e===0;)t/=e,i++;return t===1?{p:e,k:i}:null}return null}const vc=n=>String(n).split("").reduce((e,t)=>e+ +t,0),na={prime_power:{params:{minExp:{type:"integer",minimum:1,maximum:5}},test:(n,e={})=>{const t=Lr(n);return!!t&&t.k>=(e.minExp??2)},why:(n,e={})=>{const t=Lr(n);return t&&t.k>=(e.minExp??2)?`${n} = ${t.p}^${t.k}`:`${n}: не степень простого`},hint:{ru:[["степен"],["прост"]],en:[["power"],["prime"]]}},prime_or_power:{off:!0,params:{},test:n=>!!Lr(n),why:n=>{const e=Lr(n);return e?e.k===1?`${n}: простое`:`${n} = ${e.p}^${e.k}`:`${n}: не простое и не степень простого`},hint:{ru:[["прост"]],en:[["prime"]]}},digit_sum:{params:{sum:{type:"integer",minimum:1,maximum:27}},test:(n,e={})=>vc(n)===(e.sum??10),why:(n,e={})=>`${n}: сумма цифр ${vc(n)}, нужна ${e.sum??10}`,hint:{ru:[["сумм"],["цифр"]],en:[["sum"],["digit"]]}}},yc=Object.keys(na).filter(n=>!na[n].off);function Wx(n,e){const t=na[n.rule];if(!t)return null;const i=[],s={};for(const r of e)s[r.id]=t.why(r.number,n.param||{}),t.test(r.number,n.param||{})&&i.push(r.id);return{danger:i,why:s}}const Mc="drift.room/0",Os={type:"string",pattern:"^[a-z][a-z0-9_]{0,31}$"},bc={type:"string",pattern:"^[a-z][a-z0-9_]*(\\.[a-z][a-z0-9_]*){0,3}$",maxLength:64},Ba={type:"string",pattern:"^[a-z][a-z0-9_.]{0,47}$"},Wr=n=>({type:"array",items:{type:"integer",minimum:0,maximum:64},minItems:n,maxItems:n}),Xx={floor:{at:Wr(2),rot:{type:"integer",enum:[0,90,180,270]}},wall:{wall:{type:"string",enum:el},at:Wr(2)},ceil:{at:Wr(2),rot:{type:"integer",enum:[0,90,180,270]}},path:{}},qx={floor:["at"],wall:["wall","at"],ceil:["at"],path:[]};function $x(n){const e=tl[n];return{type:"object",additionalProperties:!1,properties:{type:{const:n},id:Os,...Xx[e.mount],...e.params,note:{type:"string",maxLength:200}},required:["type","id",...qx[e.mount],...e.required||[]]}}const Sc={oneOf:[{type:"string",minLength:1,maxLength:600},{type:"object",additionalProperties:!1,properties:{title:{type:"string",minLength:1,maxLength:40},rows:{type:"array",items:{type:"string",maxLength:48},maxItems:8}},required:["title","rows"]}]};function Yx(){return{$schema:"https://json-schema.org/draft/2020-12/schema",$id:Mc,title:"ДРЕЙФ: файл комнаты",type:"object",additionalProperties:!1,required:["schema","id","grid","shell","portals","prefabs","texts","budget"],properties:{schema:{const:Mc},id:bc,grid:{type:"number",enum:[.5]},shell:{type:"object",additionalProperties:!1,required:["size","kit"],properties:{size:{type:"array",prefixItems:[{type:"number",minimum:3,maximum:16},{type:"number",minimum:2.5,maximum:4},{type:"number",minimum:3,maximum:16}],minItems:3,maxItems:3},kit:{type:"string",enum:Ix}}},portals:{type:"array",minItems:1,maxItems:4,items:{type:"object",additionalProperties:!1,required:["id","wall","at","w","h","to","door"],properties:{id:Os,wall:{type:"string",enum:el},at:{type:"integer",minimum:0,maximum:64},w:{type:"integer",minimum:2,maximum:4},h:{type:"integer",minimum:4,maximum:5},to:bc,door:{type:"string",enum:kx}}}},slots:{type:"array",maxItems:16,items:{type:"object",additionalProperties:!1,required:["id","cell","face","panel","screws"],properties:{id:Os,cell:Wr(3),face:{type:"string",enum:["+y","-y","+x","-x","+z","-z"]},panel:{type:"string",enum:Object.keys(Ox)},screws:{type:"integer",enum:[4]}}}},prefabs:{type:"array",maxItems:48,items:{oneOf:zx.map($x)}},net:{type:"object",additionalProperties:!1,properties:{power:{type:"array",maxItems:32,items:{type:"array",items:Os,minItems:2,maxItems:2}}}},trap:{type:"object",additionalProperties:!1,required:["rule","hatches","hints"],properties:{rule:{type:"string",enum:yc},param:{type:"object",additionalProperties:!1,properties:Object.assign({},...yc.map(n=>na[n].params))},hatches:{type:"array",items:Os,minItems:2,maxItems:4},hints:{type:"array",items:Ba,minItems:1,maxItems:4}}},texts:{type:"object",additionalProperties:!1,required:["ru","en"],properties:{ru:{type:"object",propertyNames:Ba,additionalProperties:Sc},en:{type:"object",propertyNames:Ba,additionalProperties:Sc}}},budget:{type:"object",additionalProperties:!1,required:["drawCalls","dynamicBodies","tris"],properties:{drawCalls:{type:"integer",minimum:10,maximum:200},dynamicBodies:{type:"integer",minimum:1,maximum:200},tris:{type:"integer",minimum:1e3,maximum:3e5},pieces:{type:"integer",minimum:4,maximum:80}}},note:{type:"string",maxLength:400}}}}const Kx=n=>n===null?"null":Array.isArray(n)?"array":Number.isInteger(n)?"integer":typeof n;function wc(n,e){return n==="integer"?Number.isInteger(e):n==="number"?typeof e=="number"&&Number.isFinite(e):n==="array"?Array.isArray(e):n==="object"?e!==null&&typeof e=="object"&&!Array.isArray(e):typeof e===n}function Li(n,e,t="$",i=[]){if(n===!0||n===void 0)return i;if(n===!1)return i.push({path:t,msg:"лишний элемент"}),i;if(n.oneOf){if(n.oneOf.every(a=>a.properties&&a.properties.type&&"const"in a.properties.type)&&e&&typeof e=="object"){const a=n.oneOf.find(o=>o.properties.type.const===e.type);return a?Li(a,e,t,i):(i.push({path:t+".type",msg:`неизвестный тип ${JSON.stringify(e.type)}; есть: ${n.oneOf.map(o=>o.properties.type.const).join(", ")}`}),i)}const r=n.oneOf.map(a=>Li(a,e,t,[]));return r.some(a=>!a.length)||i.push(...r.reduce((a,o)=>o.length<a.length?o:a)),i}if("const"in n&&e!==n.const)return i.push({path:t,msg:`нужно ${JSON.stringify(n.const)}, стоит ${JSON.stringify(e)}`}),i;if(n.type&&!wc(n.type,e))return i.push({path:t,msg:`тип ${Kx(e)}, нужен ${n.type}`}),i;if(n.enum&&!n.enum.includes(e)&&i.push({path:t,msg:`${JSON.stringify(e)} не из списка ${JSON.stringify(n.enum)}`}),typeof e=="number"&&(n.minimum!==void 0&&e<n.minimum&&i.push({path:t,msg:`${e} меньше ${n.minimum}`}),n.maximum!==void 0&&e>n.maximum&&i.push({path:t,msg:`${e} больше ${n.maximum}`})),typeof e=="string"&&(n.minLength!==void 0&&e.length<n.minLength&&i.push({path:t,msg:`строка короче ${n.minLength}`}),n.maxLength!==void 0&&e.length>n.maxLength&&i.push({path:t,msg:`строка длиннее ${n.maxLength} (${e.length})`}),n.pattern&&!new RegExp(n.pattern).test(e)&&i.push({path:t,msg:`${JSON.stringify(e)} не по образцу ${n.pattern}`})),Array.isArray(e)&&(n.minItems!==void 0&&e.length<n.minItems&&i.push({path:t,msg:`элементов ${e.length}, нужно не меньше ${n.minItems}`}),n.maxItems!==void 0&&e.length>n.maxItems&&i.push({path:t,msg:`элементов ${e.length}, можно не больше ${n.maxItems}`}),e.forEach((s,r)=>Li(n.prefixItems&&r<n.prefixItems.length?n.prefixItems[r]:n.items,s,`${t}[${r}]`,i))),wc("object",e)&&(n.properties||n.required||n.additionalProperties!==void 0||n.propertyNames)){for(const s of n.required||[])s in e||i.push({path:t,msg:`нет поля ${s}`});for(const[s,r]of Object.entries(e))n.propertyNames&&Li(n.propertyNames,s,`${t}{${s}}`,i),n.properties&&s in n.properties?Li(n.properties[s],r,`${t}.${s}`,i):n.additionalProperties===!1?i.push({path:`${t}.${s}`,msg:"поля нет в схеме"}):n.additionalProperties&&typeof n.additionalProperties=="object"&&Li(n.additionalProperties,r,`${t}.${s}`,i)}return i}const Jx=n=>Li(Yx(),n),St=(n,e)=>n[0]*e[0]+n[1]*e[1]+n[2]*e[2],zt=(n,e)=>[n[0]-e[0],n[1]-e[1],n[2]-e[2]],ii=(n,e)=>[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]],On=n=>Math.hypot(n[0],n[1],n[2]),xi=n=>{const e=On(n)||1;return[n[0]/e,n[1]/e,n[2]/e]},Zx=1e-6;function Qx(n){const e=[];for(const[t,i,s,r,a,o]of[[0,1,2,-1,1,1],[0,-1,2,1,1,1],[1,1,0,1,2,-1],[1,-1,0,1,2,1],[2,1,0,1,1,1],[2,-1,0,-1,1,1]]){const c=[0,0,0];c[t]=i;const l=[[0,0],[1,0],[1,1],[0,1]].map(([f,u])=>{const d=[0,0,0];return d[t]=i*n[t],d[s]=r*(f*2-1)*n[s],d[a]=o*(u*2-1)*n[a],[...d,f,u]});St(ii(zt(l[1],l[0]),zt(l[2],l[0])),c)<0&&l.reverse(),e.push({n:c,w:n[t],cut:!1,v:l})}return{faces:e}}function jx(n,e,t,i){const s=[],r=n.v.map(a=>{const o=(St(e,a)-t)*i;return Math.abs(o)<Zx?0:o});for(let a=0;a<n.v.length;a++){const o=(a+1)%n.v.length,c=n.v[a],l=n.v[o];if(r[a]<=0&&s.push(c),r[a]<0&&r[o]>0||r[a]>0&&r[o]<0){const f=r[a]/(r[a]-r[o]);s.push(c.map((u,d)=>u+(l[d]-u)*f))}}return s.length>=3?{...n,v:s}:null}function e_(n,e,t,i){const s=[];for(const u of n)for(const d of u.v)Math.abs(St(e,d)-t)<5e-6&&!s.some(h=>Math.hypot(h[0]-d[0],h[1]-d[1],h[2]-d[2])<1e-5)&&s.push([d[0],d[1],d[2]]);if(s.length<3)return null;const r=s.reduce((u,d)=>[u[0]+d[0]/s.length,u[1]+d[1]/s.length,u[2]+d[2]/s.length],[0,0,0]),a=xi(Math.abs(e[1])<.9?ii(e,[0,1,0]):ii(e,[1,0,0])),o=ii(e,a),l=s.map(u=>{const d=zt(u,r);return{p:u,a:Math.atan2(St(d,o),St(d,a)),u:St(d,a),v:St(d,o)}}).sort((u,d)=>u.a-d.a).map(u=>[...u.p,u.u*2,u.v*2]),f=e.map(u=>u*i);return St(ii(zt(l[1],l[0]),zt(l[2],l[0])),f)<0&&l.reverse(),{n:f,w:t*i,cut:!0,v:l}}function Ec(n,e,t,i){const s=n.faces.map(a=>jx(a,e,t,i)).filter(Boolean),r=e_(s,e,t,i);return!r||s.length<3?null:{faces:[...s.filter(a=>t_(a)>1e-9),r]}}const t_=n=>{let e=[0,0,0];for(let t=1;t+1<n.v.length;t++){const i=ii(zt(n.v[t],n.v[0]),zt(n.v[t+1],n.v[0]));e=[e[0]+i[0],e[1]+i[1],e[2]+i[2]]}return On(e)/2};function n_(n,e,t,i=0){const s=xi(e),r=Ec(n,s,t-i/2,1),a=Ec(n,s,t+i/2,-1);return r&&a?[r,a]:null}function i_(n){let e=0;const t=[0,0,0];for(const i of n.faces)for(let s=1;s+1<i.v.length;s++){const r=i.v[0],a=i.v[s],o=i.v[s+1],c=St(r,ii(a,o))/6;e+=c;for(let l=0;l<3;l++)t[l]+=c*(r[l]+a[l]+o[l])/4}return{volume:e,center:e>1e-12?t.map(i=>i/e):[0,0,0]}}const s_=(n,e)=>({faces:n.faces.map(t=>({...t,w:t.w-St(t.n,e),v:t.v.map(i=>[i[0]-e[0],i[1]-e[1],i[2]-e[2],i[3],i[4]])}))});function Do(n){const e=[];for(const t of n.faces)for(const i of t.v)e.some(s=>Math.abs(s[0]-i[0])+Math.abs(s[1]-i[1])+Math.abs(s[2]-i[2])<1e-5)||e.push([i[0],i[1],i[2]]);return e}const r_=n=>Do(n).reduce((e,t)=>[Math.max(e[0],Math.abs(t[0])),Math.max(e[1],Math.abs(t[1])),Math.max(e[2],Math.abs(t[2]))],[0,0,0]);function a_(n,e){let t=1e9,i=-1e9;for(const s of n.faces)for(const r of s.v){const a=St(e,r);t=Math.min(t,a),i=Math.max(i,a)}return[t,i]}function Tc(n,e,t,i=1e9){let s=1e-4,r=i,a=null;for(const o of t.faces){const c=St(o.n,e),l=o.w-St(o.n,n);if(Math.abs(c)<1e-9){if(l<0)return null;continue}const f=l/c;if(c<0?f>s&&(s=f,a=o):r=Math.min(r,f),s>r)return null}return a?{t:s,n:a.n,cut:a.cut}:null}const o_=(n,e)=>Math.max(0,e.faces.reduce((t,i)=>Math.max(t,St(i.n,n)-i.w),-1e9));function Ac(n,e,t,i,s=null){const r=[];for(const c of n.faces)if(!s||s(c))for(let l=0;l<c.v.length;l++){const f=c.v[l],u=c.v[(l+1)%c.v.length],d=St(e,f)-t,h=St(e,u)-t;if(d<=0&&h>=0||d>=0&&h<=0){const p=Math.abs(d-h)<1e-9?0:d/(d-h);r.push([0,1,2].map(_=>f[_]+(u[_]-f[_])*p))}}if(!r.length)return null;let a=1e9,o=-1e9;for(const c of r){const l=St(i,c);a=Math.min(a,l),o=Math.max(o,l)}return[a,o]}const Di=(n,e)=>[n[3]*e[0]+n[0]*e[3]+n[1]*e[2]-n[2]*e[1],n[3]*e[1]-n[0]*e[2]+n[1]*e[3]+n[2]*e[0],n[3]*e[2]+n[0]*e[1]-n[1]*e[0]+n[2]*e[3],n[3]*e[3]-n[0]*e[0]-n[1]*e[1]-n[2]*e[2]];function Rt(n,e){const[t,i,s,r]=n,a=2*(i*e[2]-s*e[1]),o=2*(s*e[0]-t*e[2]),c=2*(t*e[1]-i*e[0]);return[e[0]+r*a+(i*c-s*o),e[1]+r*o+(s*a-t*c),e[2]+r*c+(t*o-i*a)]}function l_(n,e,t){const i=Rt(e,[1,0,0]),s=Rt(e,[0,1,0]),r=Rt(e,[0,0,1]),a=o=>Math.abs(i[o])*t[0]+Math.abs(s[o])*t[1]+Math.abs(r[o])*t[2];return{x0:n[0]-a(0),x1:n[0]+a(0),y0:n[1]-a(1),y1:n[1]+a(1),z0:n[2]-a(2),z1:n[2]+a(2)}}async function c_({gravity:n=9.8}={}){const e=await Va(()=>import("./rapier-Dr7-2af2.js"),[],import.meta.url),t=e.default||e;await t.init();const i=new t.World({x:0,y:-n,z:0});i.integrationParameters.numSolverIterations=6;const s=new Map,r=new Map,a=new Map,o=new t.EventQueue(!0);let c=0,l=null;{const u=performance.now();i.step(),c=performance.now()-u}const f={kind:"rapier",warmMs:c,addStatic(u){const d=i.createCollider(t.ColliderDesc.cuboid((u.x1-u.x0)/2,(u.y1-u.y0)/2,(u.z1-u.z0)/2).setTranslation((u.x0+u.x1)/2,(u.y0+u.y1)/2,(u.z0+u.z1)/2).setFriction(.8));s.set(u.id,d)},setStatic(u,d){const h=s.get(u);h&&h.setEnabled(!!d)},addPart(u,{fixed:d=!1,kinematic:h=!1}={}){const p=(h?t.RigidBodyDesc.kinematicPositionBased():t.RigidBodyDesc.dynamic()).setTranslation(...u.p).setCanSleep(!0).setCcdEnabled(u.mass<4);u.q&&p.setRotation({x:u.q[0],y:u.q[1],z:u.q[2],w:u.q[3]}),p.setLinearDamping(.05).setAngularDamping(.25);const _=i.createRigidBody(p),g=8*u.h[0]*u.h[1]*u.h[2],m=u.poly?Do(u.poly):null,v=m&&t.ColliderDesc.convexHull(new Float32Array(m.flat())),T=v||(u.shape==="cyl"?t.ColliderDesc.cylinder(u.h[1],u.h[0]):t.ColliderDesc.cuboid(...u.h));v?T.setMass(u.mass):T.setDensity(u.mass/g),T.setFriction(.7).setRestitution(.1);const M=i.createCollider(T,_);return h||_.sleep(),r.set(u.id,{body:_,col:M,h:u.h,mass:u.mass,fixed:d,held:!1,pts:m,poly:u.poly||null}),u.id},joint(u,d,h,p){const _=r.get(d),g=h==="world"?null:r.get(h);if(!_)return;if(!g){a.set(u,{world:!0,a:d}),_.body.setBodyType(t.RigidBodyType.KinematicPositionBased,!0);return}const m=_.body.translation(),v=g.body.translation(),T=_.body.rotation(),M=g.body.rotation(),A=Rt([-T.x,-T.y,-T.z,T.w],[p[0]-m.x,p[1]-m.y,p[2]-m.z]),S=Rt([-M.x,-M.y,-M.z,M.w],[p[0]-v.x,p[1]-v.y,p[2]-v.z]),y=Di([-M.x,-M.y,-M.z,M.w],[T.x,T.y,T.z,T.w]),w=t.JointData.fixed({x:A[0],y:A[1],z:A[2]},{x:0,y:0,z:0,w:1},{x:S[0],y:S[1],z:S[2]},{x:y[0],y:y[1],z:y[2],w:y[3]});a.set(u,{j:i.createImpulseJoint(w,_.body,g.body,!0),a:d,b:h})},unjoint(u){const d=a.get(u);if(d){if(a.delete(u),d.world){const h=r.get(d.a);h&&![...a.values()].some(p=>p.world&&p.a===d.a)&&(h.body.setBodyType(t.RigidBodyType.Dynamic,!0),h.body.wakeUp());return}i.removeImpulseJoint(d.j,!0);for(const h of[d.a,d.b]){const p=r.get(h);p&&p.body.wakeUp()}}},release(u){const d=r.get(u);d&&(d.fixed=!1,d.body.bodyType()!==t.RigidBodyType.Dynamic&&!d.held&&d.body.setBodyType(t.RigidBodyType.Dynamic,!0),d.body.wakeUp())},setKinematic(u,d,h=!1){const p=r.get(u);p&&(p.held=!!d,p.body.setBodyType(d?t.RigidBodyType.KinematicPositionBased:t.RigidBodyType.Dynamic,!0),p.col.setSensor(!!d&&h),d||p.body.wakeUp())},moveKinematic(u,d,h){const p=r.get(u);p&&(p.body.setNextKinematicTranslation({x:d[0],y:d[1],z:d[2]}),h&&p.body.setNextKinematicRotation({x:h[0],y:h[1],z:h[2],w:h[3]}))},setPose(u,d,h,p=!0){const _=r.get(u);_&&(_.body.setTranslation({x:d[0],y:d[1],z:d[2]},!1),h&&_.body.setRotation({x:h[0],y:h[1],z:h[2],w:h[3]},!1),_.body.setLinvel({x:0,y:0,z:0},!1),_.body.setAngvel({x:0,y:0,z:0},!1),p&&_.body.bodyType()===t.RigidBodyType.Dynamic&&_.body.sleep())},impulse(u,d){const h=r.get(u);!h||h.body.bodyType()!==t.RigidBodyType.Dynamic||h.body.applyImpulse({x:d[0],y:d[1],z:d[2]},!0)},impulseAt(u,d,h){const p=r.get(u);!p||p.body.bodyType()!==t.RigidBodyType.Dynamic||p.body.applyImpulseAtPoint({x:d[0],y:d[1],z:d[2]},{x:h[0],y:h[1],z:h[2]},!0)},velocity(u,d){const h=r.get(u);h&&(h.body.setLinvel({x:d[0],y:d[1],z:d[2]},!0),h.body.wakeUp())},remove(u){const d=r.get(u);if(d){for(const[h,p]of a)(p.a===u||p.b===u)&&f.unjoint(h);i.removeRigidBody(d.body),r.delete(u)}},has:u=>r.has(u),wakeAll(){for(const u of r.values())u.body.bodyType()===t.RigidBodyType.Dynamic&&u.body.wakeUp()},setPlayer(u){const p=Math.max(.02,(u.h-.22)/2-.27),_={x:u.x,y:u.y+.22+p+.27,z:u.z};if(!l){l={body:i.createRigidBody(t.RigidBodyDesc.kinematicPositionBased().setTranslation(_.x,_.y,_.z))},l.col=i.createCollider(t.ColliderDesc.capsule(p,.27).setFriction(.2),l.body),l.hh=p;return}Math.abs(l.hh-p)>.001&&(l.col.setHalfHeight(p),l.hh=p);const g=l.body.translation();Math.hypot(g.x-_.x,g.y-_.y,g.z-_.z)>.4?l.body.setTranslation(_,!0):l.body.setNextKinematicTranslation(_)},step(u){i.timestep=Math.min(1/30,u);const d=performance.now();return i.step(o),c=performance.now()-d,c},pose(u){const d=r.get(u);if(!d)return null;const h=d.body.translation(),p=d.body.rotation();return{p:[h.x,h.y,h.z],q:[p.x,p.y,p.z,p.w],sleep:d.body.isSleeping(),v:(()=>{const _=d.body.linvel();return[_.x,_.y,_.z]})()}},aabb(u){const d=r.get(u),h=d&&f.pose(u);if(!h)return null;if(!d.pts)return l_(h.p,h.q,d.h);const p={x0:1e9,x1:-1e9,y0:1e9,y1:-1e9,z0:1e9,z1:-1e9};for(const _ of d.pts){const g=Rt(h.q,_),m=h.p[0]+g[0],v=h.p[1]+g[1],T=h.p[2]+g[2];m<p.x0&&(p.x0=m),m>p.x1&&(p.x1=m),v<p.y0&&(p.y0=v),v>p.y1&&(p.y1=v),T<p.z0&&(p.z0=T),T>p.z1&&(p.z1=T)}return p},poly:u=>(r.get(u)||{}).poly||null,restsOnStatic(u){const d=r.get(u);if(!d)return!1;let h=!1,p=!1;const _=d.body.translation().y;return i.contactPairsWith(d.col,g=>{const m=g.parent();!m||!m.isDynamic()?(!l||m!==l.body)&&(h=h||!m):m.translation().y<_-.01&&(p=!0)}),h&&!p},freeze(u){const d=r.get(u);if(!d)return;const h=f.pose(u);i.removeRigidBody(d.body),r.delete(u),f.addFrozen({id:u,pts:d.pts,p:h.p,q:h.q})},addFrozen(u){const d=u.pts||Do(u.poly),h=t.ColliderDesc.convexHull(new Float32Array(d.flat()));h&&s.set(u.id,i.createCollider(h.setTranslation(...u.p).setRotation({x:u.q[0],y:u.q[1],z:u.q[2],w:u.q[3]}).setFriction(.8)))},half:u=>(r.get(u)||{}).h,mass:u=>(r.get(u)||{}).mass,bodies:()=>[...r.keys()],stats(){let u=0,d=0,h=0;for(const p of r.values())p.body.bodyType()===t.RigidBodyType.Dynamic&&h++,p.body.isSleeping()?d++:u++;return{awake:u,asleep:d,total:r.size,dynamic:h,stepMs:c}},dispose(){i.free()}};return f}function u_({bounds:n,bind:e=!0}){e&&Wu({PH:{g:14,gBody:9.8,squeeze:3},playerR:.3,boundsAt:()=>n,placeAt:()=>!0,roomHeight:()=>n.h,spawn:{x:0,z:0,yaw:0,pitch:0},speed:3.2});const t={boxes:[]},i=new Set,s=new Map,r=new Map;let a=0,o=null;const c=()=>({boxes:t.boxes.filter(f=>!i.has(f.id)),circles:[]}),l={kind:"box",warmMs:0,addStatic(f){t.boxes.push(f)},setStatic(f,u){u?i.delete(f):i.add(f)},addPart(f,{fixed:u=!1,kinematic:d=!1}={}){return s.set(f.id,{id:f.id,x:f.p[0],y:f.p[1],z:f.p[2],hx:f.h[0],hy:f.h[1],hz:f.h[2],vx:0,vy:0,vz:0,rest:!0,fixed:u||d,held:!1,mass:f.mass,h:f.h,q:f.q||[0,0,0,1]}),f.id},joint(f,u,d){r.set(f,{a:u,b:d});const h=s.get(u);h&&(h.fixed=!0);const p=d!=="world"&&s.get(d);p&&(p.fixed=!0)},unjoint(f){r.delete(f)},release(f){const u=s.get(f);u&&!u.held&&(u.fixed=!1,u.rest=!1)},setKinematic(f,u){const d=s.get(f);d&&(d.held=!!u,d.fixed=!!u,u||(d.rest=!1))},moveKinematic(f,u,d){const h=s.get(f);h&&(h.x=u[0],h.y=u[1],h.z=u[2],d&&(h.q=d))},setPose(f,u,d){const h=s.get(f);h&&(h.x=u[0],h.y=u[1],h.z=u[2],d&&(h.q=d),h.vx=h.vy=h.vz=0,h.rest=!0)},impulse(f,u){const d=s.get(f);if(!d||d.fixed)return;const h=d.mass||1;d.vx+=u[0]/h,d.vy+=u[1]/h,d.vz+=u[2]/h,d.rest=!1},impulseAt(f,u){l.impulse(f,u)},velocity(f,u){const d=s.get(f);d&&(d.vx=u[0],d.vy=u[1],d.vz=u[2],d.rest=!1)},remove(f){s.delete(f);for(const[u,d]of r)(d.a===f||d.b===f)&&r.delete(u)},has:f=>s.has(f),poly:()=>null,restsOnStatic:()=>!1,freeze(){},addFrozen(){},wakeAll(){for(const f of s.values())f.fixed||(f.rest=!1)},setPlayer(f){o={x0:f.x-.27,x1:f.x+.27,z0:f.z-.27,z1:f.z+.27,y0:f.y+.22,y1:f.y+f.h}},step(f){const u=performance.now(),d=c(),h=[...s.values()],p=h.map(pc),_=o?[o]:[];for(let g=0;g<h.length;g++){const m=h[g];m.fixed||m.rest||(hx(m,d,Math.min(1/30,f),p.filter((v,T)=>T!==g).concat(_)),p[g]=pc(m))}return a=performance.now()-u,a},pose(f){const u=s.get(f);return u?{p:[u.x,u.y,u.z],q:u.q,sleep:u.rest||u.fixed,v:[u.vx,u.vy,u.vz]}:null},aabb(f){const u=s.get(f);return u?{x0:u.x-u.hx,x1:u.x+u.hx,y0:u.y-u.hy,y1:u.y+u.hy,z0:u.z-u.hz,z1:u.z+u.hz}:null},half:f=>(s.get(f)||{}).h,mass:f=>(s.get(f)||{}).mass,bodies:()=>[...s.keys()],stats(){let f=0,u=0,d=0;for(const h of s.values())h.fixed||d++,h.rest||h.fixed?u++:f++;return{awake:f,asleep:u,total:s.size,dynamic:d,stepMs:a}},dispose(){}};return l}async function f_(n,e={}){return n==="box"?u_(e):c_(e)}function d_({panels:n=Bx,cyc:e=()=>0}={}){const t=new Map(n.map(o=>[o.id,o])),i=new Map,s=()=>({fx:["bolt","bolt","bolt","bolt"],cut:[0,0,0,0],plate:"on",weld:0,seamCyc:-1,dirty:!1}),r=o=>t.has(o)?(i.has(o)||i.set(o,s()),i.get(o)):null,a=o=>o.cut.every(c=>c>=1);return{has:o=>t.has(o),cut(o,c,l){const f=r(o);return!f||f.plate!=="on"||c<0||c>3||f.cut[c]>=1?null:(f.cut[c]=Math.min(1,f.cut[c]+l/Et.boltCut),f.cut[c])},loose:o=>{const c=r(o);return!!c&&c.plate==="on"&&a(c)},take(o){const c=r(o);return!c||c.plate!=="on"||!a(c)?!1:(c.plate="off",c.weld=0,c.dirty=!0,!0)},seatable(o,c){const l=r(o),f=t.get(o);if(!l||l.plate!=="off"||!c)return!1;const u=nl[f.face],d=[c[0]-f.x,c[1]-f.y,c[2]-f.z],h=d[0]*u[0]+d[1]*u[1]+d[2]*u[2];return Math.hypot(d[0]-h*u[0],d[1]-h*u[1],d[2]-h*u[2])<Et.seat&&h>-.05&&h<Et.seatOut},blocked(o,c=[]){const l=t.get(o);if(!l)return"";const f=Qs(l),u=(c||[]).find(d=>d.x1>f.x0&&d.x0<f.x1&&d.y1>f.y0&&d.y0<f.y1&&d.z1>f.z0&&d.z0<f.z1);return u?u.id||"plot":""},seat(o,c,l=[]){const f=r(o);return!f||!this.seatable(o,c)||this.blocked(o,l)?!1:(f.plate="seat",f.weld=0,!0)},unseat(o){const c=r(o);return!c||c.plate!=="seat"?!1:(c.plate="off",c.weld=0,!0)},weld(o,c){const l=r(o);return!l||l.plate!=="seat"?null:(l.weld=Math.min(1,l.weld+c/Et.weld),l.weld>=1&&(l.plate="on",l.fx=["weld","weld","weld","weld"],l.cut=[0,0,0,0],l.seamCyc=e(),l.dirty=!0),l.weld)},view(o){const c=r(o);if(!c)return null;const l=c.fx[0]==="weld"?c.seamCyc===e()?1:2:0;return{bolts:c.cut.map(f=>f>=1?1:0),fx:c.fx.slice(),plate:c.plate==="off"?"off":"on",seated:c.plate==="seat",weld:+c.weld.toFixed(2),seam:l}},open:o=>{const c=r(o);return!!c&&c.plate==="off"},load(o){for(const[c,l,f]of o||[]){const u=r(c);!u||u.dirty||(l==="off"?(u.plate="off",u.cut=[1,1,1,1]):(u.plate="on",u.cut=[0,0,0,0],f>=0&&(u.fx=["weld","weld","weld","weld"],u.seamCyc=f)))}},shared(){const o=[];for(const[c,l]of i)l.dirty&&(o.push([c,l.plate==="off"?"off":"on"]),l.dirty=!1);return o},state:()=>[...i].map(([o,c])=>({id:o,...c}))}}const Rc=.08,mi=.75,Ku=n=>[-n[0],-n[1],-n[2],n[3]];function h_(n,e,t,i,s,r){const a=Ku(i),o=Rt(a,[n-t[0],-t[1],e-t[2]]),c=Rt(a,[0,1,0]);let l=-1e9,f=1e9;const u=(d,h)=>{const p=d[0]*c[0]+d[1]*c[1]+d[2]*c[2],_=d[0]*o[0]+d[1]*o[1]+d[2]*o[2]-h;if(Math.abs(p)<1e-9)return _<=1e-9;const g=-_/p;return p>0?f=Math.min(f,g):l=Math.max(l,g),l<=f};if(r){for(const d of r)if(!u(d.n,d.w))return null}else for(let d=0;d<3;d++){const h=[0,0,0];if(h[d]=1,!u(h,s[d])||(h[d]=-1,!u(h,s[d])))return null}return f-l>1e-4?[l,f]:null}const p_=n=>{for(const e of[[1,0,0],[0,1,0],[0,0,1]]){const t=Rt(n,e);if(Math.max(Math.abs(t[0]),Math.abs(t[1]),Math.abs(t[2]))<.9995)return!1}return!0};function Cc(n,e,t,i,s,r,a=null){if(i.x0>s+mi||i.x1<s-mi||i.z0>r+mi||i.z1<r-mi)return[];if(!a&&p_(e.q))return[{...i,id:n}];const o=[],c=Math.max(i.x0,s-mi),l=Math.min(i.x1,s+mi),f=Math.max(i.z0,r-mi),u=Math.min(i.z1,r+mi),d=Math.max(1,Math.ceil((l-c)/Rc)),h=Math.max(1,Math.ceil((u-f)/Rc)),p=(l-c)/d,_=(u-f)/h;for(let g=0;g<d;g++)for(let m=0;m<h;m++){const v=h_(c+(g+.5)*p,f+(m+.5)*_,e.p,e.q,t,a);v&&o.push({x0:c+g*p,x1:c+(g+1)*p,z0:f+m*_,z1:f+(m+1)*_,y0:v[0],y1:v[1],id:n})}return o}function Io(n,e,t,i=null){const s=Rt(Ku(e.q),[n[0]-e.p[0],n[1]-e.p[1],n[2]-e.p[2]]);if(i){let r=-1e9;for(const a of i)r=Math.max(r,a.n[0]*s[0]+a.n[1]*s[1]+a.n[2]*s[2]-a.w);return Math.max(0,r)}return Math.hypot(...[0,1,2].map(r=>Math.max(0,Math.abs(s[r])-t[r])))}const Nt={cap:40,minSpan:.04,minVol:2e-5,kerf:.008,sweep:1.6,beam:.03,near:.1,done:.92,face:.4,leave:.7,grace:.4,weld:.9,weldGap:.04,snap:.4,calm:20},No=new Set(["top","leg","plank","sheet","crate","crateL","plate"]),Xr=(n,e)=>[n[0]+e[0],n[1]+e[1],n[2]+e[2]],Dr=(n,e)=>[n[0]*e,n[1]*e,n[2]*e],ls=n=>[-n[0],-n[1],-n[2],n[3]],xn=(n,e)=>Rt(ls(n.q),zt(e,n.p)),un=(n,e)=>Xr(Rt(n.q,e),n.p),Qn=n=>+n.toFixed(5),Pc=n=>n.faces.map(e=>[e.n.map(Qn),Qn(e.w),e.cut?1:0,e.v.map(t=>t.map(Qn))]),Lc=n=>({faces:n.map(([e,t,i,s])=>({n:e,w:t,cut:!!i,v:s}))});function m_({S:n,C:e,phys:t,ev:i,mut:s,cap:r=Nt.cap,onSplit:a=()=>{},onMerge:o=()=>{}}){Object.assign(n,{pieces:new Map,merged:[],split:[],splitN:0,weldN:0,stroke:null,weld:null,beads:new Map});const c=t.kind==="rapier",l=new Map,f=I=>{const de=n.pieces.get(I);return de?de.poly:(l.has(I)||l.set(I,Qx(t.half(I))),l.get(I))},u=I=>n.pieces.get(I)||null,d=I=>c&&t.has(I)&&I!==n.held&&No.has(n.partKind.get(I)),h=I=>I.la&&t.has(I.a)?un(t.pose(I.a),I.la):I.at,p=I=>[...n.joints.values()].filter(de=>de.a===I||de.b===I),_=(I,de)=>{let q=null,pe=Nt.near;for(const ve of p(I)){const Ie=h(ve),Pe=On(zt(Ie,de));Pe<pe&&(pe=Pe,q=ve)}return q},g=(I,de)=>((!n.refused||n.t-n.refused.t>.8||n.refused.why!==de)&&i("cut_refused",{id:I,why:de}),n.refused={t:n.t,why:de,id:I},null);function m(I){let de=zt(I.p1,I.p0);On(de)<.02&&(de=I.right);const q=Dr(Xr(I.p0,I.p1),.5),pe=xi(ii(de,I.d)),ve=xi(zt(de,Dr(I.d,St(de,I.d))));return{n:pe,w:St(pe,q),e:ve}}function v(I){const{n:de,w:q,e:pe}=m(I),ve=f(I.id),Ie=Ac(ve,de,q,pe);if(!Ie||Ie[1]-Ie[0]<1e-4){I.cover=0,I.prog=0;return}const Pe=Math.min(St(pe,I.p0),St(pe,I.p1))-Nt.beam,Le=Math.max(St(pe,I.p0),St(pe,I.p1))+Nt.beam,Je=Ie[1]-Ie[0],Ce=Ye=>Math.max(0,Math.min(1,(Math.min(Le,Ye[1])-Math.max(Pe,Ye[0]))/(Ye[1]-Ye[0])));if(I.cover=Ce(Ie),I.cover>=Nt.face)for(const Ye of I.ns){const Z=Ac(ve,de,q,pe,Y=>St(Ye,Y.n)>.999);Z&&Z[1]-Z[0]>.02&&(I.cover=Math.max(I.cover,Ce(Z)))}I.prog=Math.min(I.cover,I.t/(.25+.5*Je))}function T(I,de,q,pe){const ve=t.pose(I.id),Ie=xn(ve,I.at),Pe=xn(ve,de);let Le=n.stroke;if(Le&&(Le.id!==I.id||n.t-Le.seen>Nt.grace)&&(M(),Le=null),Le||(Le=n.stroke={id:I.id,p0:Ie,p1:Ie,d:Rt(ls(ve.q),q),right:Rt(ls(ve.q),xi(ii(q,Math.abs(q[1])>.98?[1,0,0]:[0,1,0]))),t:0,cover:0,prog:0,path:[Ie],ns:[]}),I.n){const Ye=Rt(ls(ve.q),I.n);Le.ns.some(Z=>St(Z,Ye)>.999)||Le.ns.push(Ye)}Le.t+=pe,Le.seen=n.t;const Je=zt(Ie,Le.p1),Ce=On(Je);if(Ce>1e-5&&(Le.p1=Xr(Le.p1,Dr(Je,Math.min(1,Nt.sweep*pe/Ce)))),On(zt(Le.p1,Le.path[Le.path.length-1]))>.02&&Le.path.length<64&&Le.path.push(Le.p1),Le.d=xi(zt(Dr(Xr(Le.p0,Le.p1),.5),Pe)),v(Le),Le.prog>=Nt.done){const Ye=m(Le);return n.stroke=null,S(Le.id,Ye.n,Ye.w),1}return Le.prog}function M(){const I=n.stroke;if(n.stroke=null,I&&I.prog>=Nt.leave&&t.has(I.id)){const de=m(I);S(I.id,de.n,de.w)}}function A(){n.stroke&&n.t-n.stroke.seen>.05&&M(),n.weld&&n.t-n.weld.seen>Nt.grace&&(n.weld=null)}function S(I,de,q){if(!d(I))return null;const pe=n_(f(I),de,q,Nt.kerf);if(!pe)return g(I,"мелко");const ve=pe.map(i_),Ie=ve[0].volume+ve[1].volume;if(!s.has("nomin"))for(let W=0;W<2;W++){const U=a_(pe[W],xi(de));if(ve[W].volume<Nt.minVol||U[1]-U[0]<Nt.minSpan)return g(I,"мелко")}const Pe=n.pieces.get(I),Le=Pe?1:2;if(!s.has("nocap")){for(;n.pieces.size+Le>r&&N(I););if(n.pieces.size+Le>r)return g(I,"много кусков")}const Je=t.pose(I),Ce=t.mass(I)||1,Ye=n.partSm.get(I)??.3,Z=n.partKind.get(I),Y=Pe||{root:I,mat:(e.parts.find(W=>W.id===I)||{}).mat||"steel",prefab:(e.parts.find(W=>W.id===I)||{}).prefab||""},Se=p(I).map(W=>({j:W,l:xn(Je,h(W)),at:h(W)}));for(const{j:W}of Se)t.unjoint(W.id);t.remove(I),Pe?n.pieces.delete(I):n.split.push(I),n.partKind.delete(I),n.partSm.delete(I),l.delete(I);for(const W of n.pieces.values())W.mate&&W.mate.id===I&&(W.mate=null);const b=pe.map((W,U)=>{const j=ve[U].center,Q=`${Y.root}#${++n.splitN}`,H=s_(W,j),L=un(Je,j),oe=ve[U].volume/Ie,Me={id:Q,root:Y.root,prefab:Y.prefab,mat:Y.mat,kind:Z,poly:H,born:n.t,mass:Ce*oe,sm:Math.max(.05,Ye*oe),mate:null};return y(Me,L,Je.q),t.velocity(Q,Je.v),n.pieces.set(Q,Me),{id:Q,p:L,c:j}});for(const[W,U]of[[0,1],[1,0]])n.pieces.get(b[W].id).mate={id:b[U].id,p:zt(b[W].c,b[U].c),q:[0,0,0,1]};const C=xi(de),te=W=>St(C,W)-q<=0?0:1;for(const{j:W,l:U,at:j}of Se){if(s.has("noreassign")){n.joints.delete(W.id),n.beads.delete(W.id);continue}const Q=b[te(U)],H={...W,a:W.a===I?Q.id:W.a,b:W.b===I?Q.id:W.b,at:j};H.la=xn(t.pose(H.a),j),n.joints.set(W.id,H),t.joint(W.id,H.a,H.b,j);const L=n.beads.get(W.id);L&&L.a===I&&(L.pts=L.pts.map(oe=>xn(t.pose(Q.id),un(Je,oe))),L.a=Q.id)}return a(I,W=>b[te(W)],Je),i("split",{id:I,into:b.map(W=>W.id),pieces:n.pieces.size}),b.map(W=>W.id)}function y(I,de,q){t.addPart({id:I.id,shape:"hull",poly:I.poly,h:r_(I.poly),p:de,q,mass:I.mass},{}),t.release(I.id),n.partKind.set(I.id,I.kind),n.partSm.set(I.id,I.sm)}const w=(I,de)=>I!==n.held&&!p(I).length&&n.t-n.pieces.get(I).born>=de&&t.pose(I).sleep&&t.restsOnStatic(I);function N(I,de=0){for(const q of[...n.pieces.values()].sort((pe,ve)=>pe.born-ve.born))if(q.id!==I&&w(q.id,de))return F(q.id),!0;return!1}function F(I){const de=n.pieces.get(I),q=t.pose(I);t.freeze(I),n.pieces.delete(I),n.partKind.delete(I),n.partSm.delete(I);for(const pe of n.pieces.values())pe.mate&&pe.mate.id===I&&(pe.mate=null);n.merged.push({id:I,root:de.root,mat:de.mat,poly:de.poly,p:q.p,q:q.q}),o(I,q),i("merged",{id:I,pieces:n.pieces.size,merged:n.merged.length})}let k=0;function G(){n.t<k||(k=n.t+1,n.pieces.size>r*.75&&N("",Nt.calm))}function ce(I){let de=null,q=Nt.weldGap;for(const pe of t.bodies()){if(pe===I.id||pe===n.held||n.partKind.get(pe)==="leaf")continue;const ve=t.pose(pe),Ie=n.pieces.has(pe)?o_(xn(ve,I.at),n.pieces.get(pe).poly):Io(I.at,ve,t.half(pe));Ie<q&&(q=Ie,de=pe)}if(de)return de;for(const pe of e.statics){if(pe.kind==="glass"||pe.kind==="door"||pe.kind==="note")continue;if(Math.hypot(Math.max(pe.x0-I.at[0],0,I.at[0]-pe.x1),Math.max(pe.y0-I.at[1],0,I.at[1]-pe.y1),Math.max(pe.z0-I.at[2],0,I.at[2]-pe.z1))<Nt.weldGap)return"world"}return null}const O=I=>c&&t.has(I)&&I!==n.held&&No.has(n.partKind.get(I));function ne(I,de){if(!O(I.id))return null;const q=ce(I);if(!q)return null;const pe=[I.id,q].sort().join("|");if([...n.joints.values()].some(Le=>[Le.a,Le.b].sort().join("|")===pe&&On(zt(h(Le),I.at))<.12))return{prog:1,with:q,old:!0};let ve=n.weld;(!ve||ve.key!==pe||n.t-ve.seen>Nt.grace)&&(ve=n.weld={key:pe,a:I.id,b:q,prog:0,path:[],at:I.at}),ve.seen=n.t,ve.prog+=de/Nt.weld,ve.at=I.at;const Ie=t.pose(ve.a),Pe=xn(Ie,I.at);if((!ve.path.length||On(zt(Pe,ve.path[ve.path.length-1]))>.012)&&ve.path.length<32&&ve.path.push(Pe),ve.prog>=1){n.weld=null;const Le=`weld:${++n.weldN}`,Je=un(Ie,ve.path[ve.path.length>>1]),Ce={id:Le,prefab:"",a:ve.a,b:ve.b,at:Je,la:xn(Ie,Je),strength:.9,kind:"weld"};return n.joints.set(Le,Ce),n.beads.set(Le,{a:ve.a,pts:ve.path}),s.has("weldfake")||t.joint(Le,Ce.a,Ce.b,Ce.at),i("weld",{id:Le,a:Ce.a,b:Ce.b}),{prog:1,with:q,id:Le}}return{prog:ve.prog,with:q}}const ue=I=>{const de=ce(I);return!!de&&p(I.id).some(q=>(q.a===de||q.b===de)&&On(zt(h(q),I.at))<.12)};function re(I){const de=new Set([I]),q=[I];let pe=0;for(;q.length;){const ve=q.pop();pe+=t.mass(ve)||0;for(const Ie of p(ve)){if(Ie.b==="world"||!Ie.id.startsWith("weld:"))return!1;for(const Pe of[Ie.a,Ie.b])de.has(Pe)||(de.add(Pe),q.push(Pe))}}return pe<=40}function Ee(I){const de=n.pieces.get(I),q=de&&de.mate;if(!q||!t.has(q.id)||p(I).length)return null;const pe=t.pose(q.id),ve=t.pose(I),Ie=un(pe,q.p),Pe=Di(pe.q,q.q);return On(zt(Ie,ve.p))>Nt.snap||Math.min(...de.poly.faces.flatMap(Je=>Je.v.map(Ce=>un({p:Ie,q:Pe},Ce)[1])))<-.03?null:{p:Ie,q:Pe}}const he=()=>({split:n.split.slice(),splitN:n.splitN,weldN:n.weldN,pieces:[...n.pieces.values()].map(I=>({id:I.id,root:I.root,prefab:I.prefab,mat:I.mat,kind:I.kind,mass:Qn(I.mass),sm:Qn(I.sm),mate:I.mate,poly:Pc(I.poly)})),merged:n.merged.map(I=>({id:I.id,root:I.root,mat:I.mat,p:I.p.map(Qn),q:I.q.map(Qn),poly:Pc(I.poly)})),joints:[...n.joints.values()].filter(I=>I.id.startsWith("weld:")||n.pieces.has(I.a)||n.pieces.has(I.b)).map(I=>({id:I.id,prefab:I.prefab,a:I.a,b:I.b,la:I.la.map(Qn),strength:I.strength,kind:I.kind})),beads:[...n.beads].map(([I,de])=>[I,de.a,de.pts.map(q=>q.map(Qn))])});function _e(I){if(I){for(const de of I.joints)n.joints.has(de.id)&&(t.unjoint(de.id),n.joints.delete(de.id));for(const de of I.split){for(const q of p(de))t.unjoint(q.id),n.joints.delete(q.id);t.has(de)&&t.remove(de),n.partKind.delete(de),n.partSm.delete(de)}n.split=I.split.slice(),n.splitN=I.splitN,n.weldN=I.weldN;for(const de of I.pieces){const q={...de,poly:Lc(de.poly),born:0};y(q,[0,5,0],[0,0,0,1]),n.pieces.set(q.id,q)}for(const de of I.merged){const q={...de,poly:Lc(de.poly)};t.addFrozen(q),n.merged.push(q)}}}function Te(I){if(I){for(const de of I.joints){if(!t.has(de.a)||de.b!=="world"&&!t.has(de.b))continue;const q=un(t.pose(de.a),de.la);n.joints.set(de.id,{...de,at:q}),t.joint(de.id,de.a,de.b,q)}for(const[de,q,pe]of I.beads)n.joints.has(de)&&n.beads.set(de,{a:q,pts:pe})}}return{can:c,cap:r,polyOf:f,pieceOf:u,canSplit:d,canWeld:O,worldAt:h,nearJoint:_,stroke:T,finish:M,idle:A,splitPart:S,merge:F,mergeOldest:N,calm:G,weld:ne,partner:ce,welded:ue,looseWeldment:re,snapPose:Ee,snapshot:he,restoreBodies:_e,restoreJoints:Te}}const g_=[.105,.15,.006],x_=.005,__={"+x":[1,0,0],"-x":[-1,0,0],"+z":[0,0,1],"-z":[0,0,-1]};function Dc(n,e=[0,1,0]){const t=e[0]*n[0]+e[1]*n[1]+e[2]*n[2];let i=[e[0]-n[0]*t,e[1]-n[1]*t,e[2]-n[2]*t];const s=Math.hypot(...i)||1;i=i.map(l=>l/s);const a=[[i[1]*n[2]-i[2]*n[1],i[2]*n[0]-i[0]*n[2],i[0]*n[1]-i[1]*n[0]],i,n],o=a[0][0]+a[1][1]+a[2][2];let c;if(o>0){const l=Math.sqrt(o+1)*2;c=[(a[1][2]-a[2][1])/l,(a[2][0]-a[0][2])/l,(a[0][1]-a[1][0])/l,l/4]}else if(a[0][0]>a[1][1]&&a[0][0]>a[2][2]){const l=Math.sqrt(1+a[0][0]-a[1][1]-a[2][2])*2;c=[l/4,(a[1][0]+a[0][1])/l,(a[2][0]+a[0][2])/l,(a[1][2]-a[2][1])/l]}else if(a[1][1]>a[2][2]){const l=Math.sqrt(1+a[1][1]-a[0][0]-a[2][2])*2;c=[(a[1][0]+a[0][1])/l,l/4,(a[2][1]+a[1][2])/l,(a[2][0]-a[0][2])/l]}else{const l=Math.sqrt(1+a[2][2]-a[0][0]-a[1][1])*2;c=[(a[2][0]+a[0][2])/l,(a[2][1]+a[1][2])/l,l/4,(a[0][1]-a[1][0])/l]}return c}function v_({S:n,C:e,phys:t,ev:i,mut:s}){n.notes=new Map,n.noteHeld=null;for(const f of e.statics)if(f.kind==="note"){const u=__[Pi[e.prefabOf[f.prefab].wall]],d=[(f.x0+f.x1)/2,(f.y0+f.y1)/2,(f.z0+f.z1)/2];n.notes.set(f.prefab,{id:f.prefab,on:"world",p:[d[0]+u[0]*.009,d[1],d[2]+u[2]*.009],q:Dc(u)})}function r(f){const u=n.notes.get(f);if(!u||n.noteHeld===f)return null;if(u.on==="world")return{p:u.p,q:u.q};const d=t.pose(u.on);return d?{p:un(d,u.p),q:Di(d.q,u.q)}:null}function a(f){return!n.notes.has(f)||n.noteHeld?!1:(n.noteHeld=f,i("note_take",{id:f}),!0)}function o(f,u){const d=n.noteHeld;if(!d||!f||!f.at||!f.n||s.has("noteloose"))return!1;const h=Math.abs(f.n[1])>.8?[u[0],0,u[2]]:[0,1,0],p=[0,1,2].map(v=>f.at[v]+f.n[v]*x_),_=Dc(f.n,h),g=f.kind==="part"?f.id:null,m=g&&t.pose(g);return n.notes.set(d,m?{id:d,on:g,p:xn(m,p),q:Di(ls(m.q),_)}:{id:d,on:"world",p,q:_}),n.noteHeld=null,i("note_stick",{id:d,on:g||f.kind+":"+f.id}),!0}function c(f,u,d){for(const h of n.notes.values())if(h.on===f){const p=un(d,h.p),_=Di(d.q,h.q),g=u(h.p),m=t.pose(g.id);Object.assign(h,{on:g.id,p:xn(m,p),q:Di(ls(m.q),_)})}}function l(f,u){for(const d of n.notes.values())d.on===f&&Object.assign(d,{on:"world",p:un(u,d.p),q:Di(u.q,d.q)})}return{pose:r,take:a,stick:o,split:c,toFixed:l,ids:()=>[...n.notes.keys()],snapshot:()=>[...n.notes.values()].map(f=>({id:f.id,on:f.on,p:f.p.slice(),q:f.q.slice()})),restore(f){for(const u of f||[])n.notes.set(u.id,{...u})}}}const Ha={crateL:1.9,pallet:1.7,crate:.65,tank:.25,leg:.1,top:.6,leaf:.3,plate:.15,debris:.1,plank:.45,sheet:.4},Ct={cutRange:2.6,blast:14,cover:.15,pull:40,eject:.45,legKick:1.6,pullMin:3,hatchBurn:.7,light:.3,push:2.4,cableCut:.6,doorTime:.6,cabTime:.45,cabAngle:1.85},y_=.05,M_=Math.PI/2,Ls=(n,e)=>Math.hypot(n[0]-e[0],n[1]-e[1],n[2]-e[2]),Ic=n=>[0,Math.sin(n/2),0,Math.cos(n/2)];function Nc(n,e,t,i,s){const r=[-i[0],-i[1],-i[2],i[3]],a=Rt(r,[n[0]-t[0],n[1]-t[1],n[2]-t[2]]),o=Rt(r,e);let c=0,l=1e9;for(let f=0;f<3;f++){if(Math.abs(o[f])<1e-9){if(a[f]<-s[f]||a[f]>s[f])return null;continue}let u=(-s[f]-a[f])/o[f],d=(s[f]-a[f])/o[f];if(u>d&&([u,d]=[d,u]),c=Math.max(c,u),l=Math.min(l,d),c>l)return null}return c>1e-4?c:null}function b_(n,e){const t=[],i=(f,u,d,h,p,_)=>{u-f>1e-4&&h-d>1e-4&&_-p>1e-4&&t.push({...n,x0:f,x1:u,y0:d,y1:h,z0:p,z1:_})},s=Math.max(n.x0,e.x0),r=Math.min(n.x1,e.x1),a=Math.max(n.y0,e.y0),o=Math.min(n.y1,e.y1),c=Math.max(n.z0,e.z0),l=Math.min(n.z1,e.z1);return s>=r||a>=o||c>=l?[n]:(i(n.x0,s,n.y0,n.y1,n.z0,n.z1),i(r,n.x1,n.y0,n.y1,n.z0,n.z1),i(s,r,n.y0,n.y1,n.z0,c),i(s,r,n.y0,n.y1,l,n.z1),i(s,r,n.y0,a,c,l),i(s,r,o,n.y1,c,l),t)}const Uc=(n,e,t,i)=>{const s=[n[0]-t[0],n[1]-t[1],n[2]-t[2]],r=s[0]*e[0]+s[1]*e[1]+s[2]*e[2],a=s[0]**2+s[1]**2+s[2]**2-i*i;if(a>0&&r>0)return null;const o=r*r-a;if(o<0)return null;const c=-r-Math.sqrt(o);return c>0?c:.001};function S_(n,e,t,{log:i=()=>{},mut:s=new Set,pieces:r=0}={}){const a={t:0,joints:new Map,cutProg:new Map,held:null,heldAt:0,opens:new Map,doors:new Map,windows:new Map,tanks:new Map,cablesCut:new Set,breakers:new Map,p:1,kicks:[],removed:[],burned:[],hatchOpen:new Map,plates:new Map,events:[],evN:0,deaths:0,flash:0,ejected:[],partKind:new Map,partSm:new Map},o=(b,C={})=>{const te={t:+a.t.toFixed(2),kind:b,...C};return a.events.push(te),a.evN++,a.events.length>400&&a.events.shift(),i(te),te};for(const b of n.statics)b.kind!=="note"&&t.addStatic(b);for(const b of n.parts)t.addPart(b,{fixed:!b.free}),a.partKind.set(b.id,b.kind),a.partSm.set(b.id,Ha[b.kind]??.3);for(const b of n.joints)t.joint(b.id,b.a,b.b,b.at),a.joints.set(b.id,{...b,la:t.has(b.a)?xn(t.pose(b.a),b.at):null});const c=v_({S:a,C:n,phys:t,ev:o,mut:s}),l=m_({S:a,C:n,phys:t,ev:o,mut:s,cap:r||e.budget&&e.budget.pieces||Nt.cap,onSplit:(b,C,te)=>{c.split(b,C,te),a.plates.has(b)&&a.plates.delete(b)},onMerge:(b,C)=>c.toFixed(b,C)});for(const b of n.opens)a.opens.set(b.id,{...b,open:0,want:0});for(const b of n.doors)a.doors.set(b.id,{...b,open:0,want:0});for(const b of n.windows)a.windows.set(b.id,{...b,hp:b.strength,broken:!1});for(const b of n.parts)b.tank&&a.tanks.set(b.id,{id:b.id,...b.tank,heat:0,gone:!1});for(const[b,C]of Object.entries(n.nodes))C.kind==="breaker"&&a.breakers.set(b,C.on!==!1);const f=new Set(e.trap?Wx(e.trap,n.hatches).danger:[]),u=d_({panels:n.panels}),d=new Map(n.panels.map(b=>[b.id,b])),h=n.size[0]*n.size[1]*n.size[2];function p(){const b=new Map;for(const[W,U]of n.edges)a.cablesCut.has(W)||a.cablesCut.has(U)||(b.set(W,[...b.get(W)||[],U]),b.set(U,[...b.get(U)||[],W]));const C=new Set,te=[...a.breakers].filter(([,W])=>W).map(([W])=>W);for(;te.length;){const W=te.shift();if(!C.has(W)){C.add(W);for(const U of b.get(W)||[])!C.has(U)&&!a.breakers.has(U)&&te.push(U)}}return C}let _=p();const g=new Set(n.edges.flat()),m=b=>!g.has(b)||_.has(b),v=()=>{const b=_;_=p();for(const C of g)b.has(C)!==_.has(C)&&!a.breakers.has(C)&&o(_.has(C)?"power_on":"power_off",{id:C})},T=b=>[...a.joints.values()].some(C=>C.a===b||C.b===b);function M(b,C="резак"){const te=a.joints.get(b);if(!te)return!1;a.joints.delete(b),a.beads.delete(b),t.unjoint(b),o("joint_cut",{id:b,prefab:te.prefab,why:C});const W=U=>[...a.joints.values()].filter(j=>j.a===U||j.b===U).length;for(const U of[te.a,te.b]){if(U==="world"||!t.has(U))continue;const j=a.partKind.get(U),Q=j==="top"?3:1;if(W(U)<Q){t.release(U);const H=t.pose(U),L=t.mass(U)||1;if(H&&j==="leg"){const oe=n.parts.find(Xe=>Xe.id===te.a)||{},Me=oe.p||H.p,Ne=H.p[0]-Me[0],Ae=H.p[2]-Me[2],et=Math.hypot(Ne,Ae)||1,He=t.half(U)[1];a.kicks.push({id:U,v:[Ne/et*L*Ct.legKick,0,Ae/et*L*Ct.legKick],at:[H.p[0],H.p[1]-He*.9,H.p[2]]})}H&&j==="leaf"&&a.kicks.push({id:U,v:[(Math.random()-.5)*L*.4,0,(Math.random()-.5)*L*.4],at:H.p}),o("part_free",{id:U})}}return!0}const A=()=>n.statics.filter(b=>b.kind!=="glass"&&b.kind!=="note"&&!(b.kind==="door"&&(a.doors.get(b.door)||{}).open>.5));function S(b,C){const te=[C[0]-b[0],C[1]-b[1],C[2]-b[2]],W=Math.hypot(...te);if(W<.001)return!1;const U=te.map(Q=>Q/W);return!!Rs(b,U,A(),W-.05)}function y(b){const C=a.tanks.get(b);if(!C||C.gone)return;const te=t.pose(b),W=te?te.p:[0,0,0];C.gone=!0,C.at=W.slice(),a.held===b&&(a.held=null),t.remove(b),a.removed.push(b);const U=Ct.blast*C.charge,j=[];for(const Q of t.bodies()){const H=t.pose(Q);if(!H)continue;const L=Ls(H.p,W),oe=S(W,H.p)?Ct.cover:1,Me=U/(1+L*L)*oe;if(L>C.radius||Me<.2)continue;const Ne=L>.001?[(H.p[0]-W[0])/L,(H.p[1]-W[1])/L+.3,(H.p[2]-W[2])/L]:[0,1,0];T(Q)||t.release(Q),t.impulse(Q,Ne.map(Ae=>Ae*Me*(t.mass(Q)||1))),j.push(Q)}for(const[Q,H]of[...a.joints]){const L=l.worldAt(H),oe=Ls(L,W);U/(1+oe*oe)*(S(W,L)?Ct.cover:1)>=H.strength*ka.blastK&&M(Q,"взрыв")}for(const Q of a.windows.values()){if(Q.broken)continue;const H=Ls(Q.at,W);U/(1+H*H)*(S(W,Q.at)?Ct.cover:1)>=Q.strength*ka.blastK*.8&&w(Q.id,"взрыв")}a.flash=1,a.blast={at:W,K:U,t:a.t},o("explode",{id:b,at:W.map(Q=>+Q.toFixed(2)),hit:j.length})}function w(b,C){const te=a.windows.get(b);!te||te.broken||(te.broken=!0,te.hp=0,t.setStatic(b,!1),o("window_broken",{id:b,why:C}))}function N(b){const C=a.doors.get(b);return C?C.kind==="sealed"?(o("door_sealed",{id:b}),!1):m(b)?(C.want=C.want?0:1,o(C.want?"door_open":"door_close",{id:b}),!0):(o("door_dead",{id:b}),!1):!1}function F(b){const C=a.opens.get(b);return C?(C.want=C.want?0:1,o(C.want?"cab_open":"cab_close",{id:b}),!0):!1}function k(b){return a.breakers.has(b)?(a.breakers.set(b,!a.breakers.get(b)),o("breaker",{id:b,on:a.breakers.get(b)}),v(),!0):!1}let G={key:null,boxes:null};function ce(){const b=n.panels.filter(U=>u.view(U.id).plate!=="on").map(U=>U.id),C=b.join(",");if(G.key===C)return G.boxes;const te=b.map(U=>Qs(d.get(U)));let W=n.statics;return te.length&&(W=n.statics.flatMap(U=>U.kind==="floor"||U.kind==="ceil"||U.kind==="wall"?te.reduce((j,Q)=>j.flatMap(H=>b_(H,Q)),[U]):[U])),G={key:C,boxes:W},W}function O(b,C,te=Ct.cutRange){const W=[],U=Rs(b,C,ce().filter(Q=>Q.kind!=="note").filter(Q=>Q.kind!=="glass"||!(a.windows.get(Q.id)||{}).broken).filter(Q=>!(Q.kind==="door"&&(a.doors.get(Q.door)||{}).open>.5)),te);U&&W.push({kind:"static",id:U.box.prefab||U.box.id,box:U.box,t:U.t,n:U.n});for(const Q of t.bodies()){if(Q===a.held)continue;const H=t.pose(Q),L=t.poly(Q);if(!L&&Nc(b,C,H.p,H.q,t.half(Q))===null)continue;const oe=Tc(xn(H,b),Rt([-H.q[0],-H.q[1],-H.q[2],H.q[3]],C),L||l.polyOf(Q),te);oe&&W.push({kind:"part",id:Q,t:oe.t,n:Rt(H.q,oe.n),cut:oe.cut})}for(const Q of a.merged){const H=Tc(xn(Q,b),Rt([-Q.q[0],-Q.q[1],-Q.q[2],Q.q[3]],C),Q.poly,te);H&&W.push({kind:"static",id:Q.id,box:{kind:"scrap"},t:H.t,n:Rt(Q.q,H.n)})}for(const Q of c.ids()){const H=c.pose(Q);if(!H)continue;const L=Nc(b,C,H.p,H.q,g_);L!==null&&L<te&&W.push({kind:"note",id:Q,t:L-.004})}for(const Q of n.panels){const H=u.view(Q.id);if(H.plate==="on"&&!H.seated){for(let Me=0;Me<4;Me++)if(!H.bolts[Me]){const Ne=Uc(b,C,Yu(Q,Me),.06);Ne!==null&&Ne<te&&W.push({kind:"bolt",id:Q.id,i:Me,t:Ne-.02})}const L=_c(Q),oe=Rs(b,C,[L],te);oe&&W.push({kind:"plate",id:Q.id,t:oe.t,n:oe.n})}else if(H.seated){const L=Rs(b,C,[_c(Q)],te);L&&W.push({kind:"plate",id:Q.id,t:L.t,seated:!0})}else for(const L of ne(Q.id)){const oe=Uc(b,C,L.at,.1);oe!==null&&oe<te&&W.push({kind:"cable",id:L.id,panel:Q.id,at:L.at,t:oe})}}for(const Q of n.hatches){const H=s.has("nohatch")?0:y_,L={x0:Q.x0-H,x1:Q.x1+H,y0:-.02,y1:.012,z0:Q.z0-H,z1:Q.z1+H},oe=Rs(b,C,[L],te);oe&&W.push({kind:"hatch",id:Q.id,t:oe.t,number:Q.number,n:[0,1,0]})}W.sort((Q,H)=>Q.t-H.t);const j=W[0]||null;return j&&(j.at=j.at||[b[0]+C[0]*j.t,b[1]+C[1]*j.t,b[2]+C[2]*j.t]),j}function ne(b){const C=d.get(b),te=[];if(!C||C.face!=="+y")return te;const W=Qs(C);for(const U of n.cables)if(!a.cablesCut.has(U.id))for(let j=1;j<U.pts.length;j++){const Q=U.pts[j-1],H=U.pts[j],L=Math.min(Q[0],H[0])-1e-6,oe=Math.max(Q[0],H[0])+1e-6,Me=Math.min(Q[2],H[2])-1e-6,Ne=Math.max(Q[2],H[2])+1e-6;if(oe<W.x0||L>W.x1||Ne<W.z0||Me>W.z1)continue;const Ae=Math.max(W.x0+.05,Math.min(W.x1-.05,C.x)),et=Math.max(W.z0+.05,Math.min(W.z1-.05,C.z));te.push({id:U.id,at:[Q[0]===H[0]?Q[0]:Ae,-.16,Q[2]===H[2]?Q[2]:et]});break}return te}function ue(b,C,te=null,W="cut"){if(W==="weld")return!b||b.kind!=="part"?"":l.weld(b,C)?"сварка":"";if(!b)return"";if(b.kind==="bolt"){const U=u.cut(b.id,b.i,C);return U!==null&&U>=1&&o("bolt_cut",{id:b.id,i:b.i}),"болт"}if(b.kind==="plate"){const U=u.view(b.id);if(U.seated)return u.weld(b.id,C)>=1&&o("panel_weld",{id:b.id}),"шов";const j=U.bolts.findIndex(Q=>!Q);return j>=0&&u.cut(b.id,j,C)>=1&&o("bolt_cut",{id:b.id,i:j}),"болт"}if(b.kind==="cable"){const U="cable:"+b.id,j=(a.cutProg.get(U)||0)+C;return a.cutProg.set(U,j),j>=Ct.cableCut&&(a.cablesCut.add(b.id),a.cableCutAt=a.cableCutAt||{},a.cableCutAt[b.id]=b.at,o("cable_cut",{id:b.id,under:b.panel}),v()),"кабель"}if(b.kind==="static"){const U=a.windows.get(b.id);return U&&!U.broken?(U.hp-=C,U.hp<=0&&w(U.id,"резак"),"стекло"):""}if(b.kind==="part"){const U=a.tanks.get(b.id);if(U)return U.heat+=C,U.heat>=U.fuse&&y(U.id),"баллон";if(a.t-(a.cutT??-9)>.12&&(a.cutLock=null),a.cutT=a.t,a.cutLock&&a.cutLock.has(b.id)&&!s.has("nolock"))return"крепление";const j=a.evN,Q=()=>{for(const Ne of a.events.slice(-(a.evN-j)||a.events.length))if(Ne.kind==="split"||Ne.kind==="joint_cut")if(a.cutLock=a.cutLock||new Set,Ne.kind==="split")for(const Ae of Ne.into)a.cutLock.add(Ae);else a.cutLock.add(b.id)},H=l.nearJoint(b.id,b.at),L=a.stroke&&a.stroke.id===b.id;if(te&&l.canSplit(b.id)&&(L||!H))return l.stroke(b,te.o,te.d,C),a.evN>j&&Q(),"деталь";const oe=H||(l.canSplit(b.id)&&te?null:I(b));if(!oe)return"";const Me=(a.cutProg.get(oe.id)||0)+C*ka.cutRate;return a.cutProg.set(oe.id,Me),Me>=oe.strength&&(M(oe.id),te&&Q()),"крепление"}return""}function re(b){if(!b)return"";const C=b.id;if(b.kind==="static")return a.breakers.has(C)?(k(C),"щиток"):a.doors.has(C)?(N(C),"дверь"):a.opens.has(C)?(F(C),"шкаф"):"";if(b.kind==="note")return o("read",{id:C,key:n.prefabOf[C].text}),"запись";if(b.kind==="part"){const te=n.parts.find(W=>W.id===C);if(te&&te.kind==="leaf"&&a.joints.has(te.prefab+".hinge"+te.id.slice(-1)))return F(te.prefab),"шкаф"}return""}function Ee(b){if(!b)return"";if(b.kind==="static")return a.breakers.has(b.id)?"breaker":a.doors.has(b.id)?a.doors.get(b.id).want?"shut":"open":a.opens.has(b.id)?a.opens.get(b.id).want?"shut":"open":"";if(b.kind==="note")return"read";if(b.kind==="part"){const C=n.parts.find(te=>te.id===b.id);if(C&&C.kind==="leaf"&&a.joints.has(C.prefab+".hinge"+C.id.slice(-1)))return a.opens.get(C.prefab).want?"shut":"open"}return""}const he=b=>!!b&&!a.held&&!a.noteHeld&&(b.kind==="note"||b.kind==="plate"&&u.loose(b.id)||b.kind==="part"&&de(b.id)),_e=b=>!!b&&(b.kind==="part"&&l.canSplit(b.id)||b.kind==="bolt"||b.kind==="cable"||b.kind==="plate"&&u.view(b.id).bolts.some(C=>!C)||b.kind==="static"&&a.windows.has(b.id)&&!a.windows.get(b.id).broken||b.kind==="part"&&(a.tanks.has(b.id)||[...a.joints.values()].some(C=>C.a===b.id||C.b===b.id)));function Te(b){if(!b)return 0;if(b.kind==="part"&&a.tanks.has(b.id))return a.tanks.get(b.id).heat/a.tanks.get(b.id).fuse;if(a.weld&&b.kind==="part")return a.weld.prog;if(a.stroke&&a.stroke.id===b.id)return a.stroke.prog;if(b.kind==="part"){const C=l.canSplit(b.id)?l.nearJoint(b.id,b.at):I(b);return C?(a.cutProg.get(C.id)||0)/C.strength:0}if(b.kind==="cable")return(a.cutProg.get("cable:"+b.id)||0)/Ct.cableCut;if(b.kind==="static"&&a.windows.has(b.id)){const C=a.windows.get(b.id);return 1-C.hp/C.strength}return 0}function I(b){const C=[...a.joints.values()].filter(te=>te.a===b.id||te.b===b.id);return C.sort((te,W)=>Ls(l.worldAt(te),b.at)-Ls(l.worldAt(W),b.at)),C[0]||null}const de=b=>!!b&&t.has(b)&&(![...a.joints.values()].some(C=>C.a===b||C.b===b)||l.looseWeldment(b));function q(b){if(a.noteHeld)return!1;if(a.held)return pe();if(!b)return!1;if(b.kind==="note")return c.take(b.id);if(b.kind==="plate"&&u.loose(b.id)){u.take(b.id);const C=d.get(b.id),te="plate:"+b.id,W=C.face==="+y"||C.face==="-y"?[0,0,0,1]:C.face[1]==="x"?Ic(M_):[0,0,0,1],U=C.face[1]==="y"?[Et.w/2,.012,Et.w/2]:C.face[1]==="x"?[.012,Et.w/2,Et.w/2]:[Et.w/2,Et.w/2,.012];return t.addPart({id:te,kind:"plate",shape:"box",h:U,p:[C.x,C.y+.02,C.z],q:W,mass:3},{}),a.partKind.set(te,"plate"),a.partSm.set(te,Ha.plate),a.plates.set(te,b.id),o("panel_off",{id:b.id}),a.held=te,t.setKinematic(te,!0),!0}return b.kind==="part"&&de(b.id)?(a.held=b.id,t.setKinematic(b.id,!0,!!(a.pieces.get(b.id)||{}).mate&&!s.has("rambo")),o("grab",{id:b.id}),!0):!1}function pe(b=null){const C=a.held;if(!C)return!1;a.held=null;const te=a.plates.get(C);if(te&&!b){const U=t.pose(C);if(u.seat(te,U.p))return t.remove(C),a.plates.delete(C),o("panel_seat",{id:te}),!0}const W=!b&&l.snapPose(C);return t.setKinematic(C,!1),W?(t.setPose(C,W.p,W.q,!1),t.velocity(C,[0,0,0]),o("snap",{id:C,to:a.pieces.get(C).mate.id}),!0):(b&&t.velocity(C,b),o(b?"throw":"drop",{id:C}),!0)}function ve(b,C=1){if(!a.held)return!1;const te=a.held;return pe(Lx(b,a.partSm.get(te)??.3,C))}function Ie(b){const C=Math.cos(b.pitch),te=[-Math.sin(b.yaw)*C,Math.sin(b.pitch),-Math.cos(b.yaw)*C],W=t.half(a.held)||[.2,.2,.2],U=Math.max(...W),j=gc.dist+U,Q=Math.max(j*C,Sn.r+Math.hypot(W[0],W[2])*.75+.05),H=Math.max(b.y+Math.min(...W),b.y+b.eye-gc.drop+te[1]*j);return[b.x-Math.sin(b.yaw)*Q,H,b.z-Math.cos(b.yaw)*Q]}function Pe(b,C){const te=b.hinge,W=C*Ct.cabAngle*(te.side===0?-1:1)*te.sg*(te.along==="x"?1:-1),U=[b.p[0]-te.at[0],b.p[1]-te.at[1],b.p[2]-te.at[2]],j=Ic(W),Q=Rt(j,U);return{p:[te.at[0]+Q[0],te.at[1]+Q[1],te.at[2]+Q[2]],q:j}}function Le(b,C){a.t+=b;for(const H of a.doors.values()){const L=H.open,oe=H.box;!H.want&&H.open>.5&&C&&C.x>oe.x0-Sn.r&&C.x<oe.x1+Sn.r&&C.z>oe.z0-Sn.r&&C.z<oe.z1+Sn.r&&(H.want=1,o("door_blocked",{id:H.id})),H.open+=Math.sign(H.want-H.open)*Math.min(Math.abs(H.want-H.open),b/Ct.doorTime),L>.5!=H.open>.5&&t.setStatic(H.box.id,H.open<=.5)}for(const H of a.opens.values()){const L=H.open+Math.sign(H.want-H.open)*Math.min(Math.abs(H.want-H.open),b/Ct.cabTime),oe=[];for(const Me of H.leaves){const Ne=n.parts.find(et=>et.id===Me),Ae=`${Ne.prefab}.hinge${Me.slice(-1)}`;!a.joints.has(Ae)||!t.has(Me)||oe.push([Me,Ne,Pe(Ne,L)])}if(!(C&&L!==H.open&&!s.has("thruleaf")&&oe.some(([,Me,Ne])=>Io([C.x,Math.max(Ne.p[1]-Me.h[1],Math.min(Ne.p[1]+Me.h[1],C.y+.6)),C.z],Ne,Me.h)<Sn.r-.02))){H.open=L;for(const[Me,,Ne]of oe)t.moveKinematic(Me,Ne.p,Ne.q)}}l.idle(),l.calm(),a.held&&C&&t.moveKinematic(a.held,Ie(C),null);let te=0,W=0;for(const H of a.windows.values())H.broken&&(te+=(H.a1-H.a0)*(H.y1-H.y0));for(const H of n.portals){const L=a.doors.get(H.id);(!L||L.open>.5)&&(W+=(H.a1-H.a0)*H.y1)}const U=2.4*te*a.p,j=2.4*W*(1-a.p)*.3;if(a.p=Math.max(0,Math.min(1,a.p+(j-U)*b*8/h)),a.flow=U,te>0&&a.p>.02)for(const H of a.windows.values()){if(!H.broken)continue;const L=n.statics.find(oe=>oe.id===H.id);for(const oe of t.bodies()){if(oe===a.held)continue;const Me=t.pose(oe),Ne=[Math.max(L.x0,Math.min(Me.p[0],L.x1)),Math.max(L.y0,Math.min(Me.p[1],L.y1)),Math.max(L.z0,Math.min(Me.p[2],L.z1))],Ae=[Ne[0]-Me.p[0],Ne[1]-Me.p[1]+.25,Ne[2]-Me.p[2]],et=Math.hypot(...Ae)||1,He=Ct.pull*a.p*(H.a1-H.a0)*(H.y1-H.y0)/(1+et*et);He<Ct.pullMin||(T(oe)||t.release(oe),t.impulse(oe,Ae.map(Xe=>Xe/et*He*b*(t.mass(oe)||1))),Math.hypot(Ne[0]-Me.p[0],Ne[1]-Me.p[1],Ne[2]-Me.p[2])<Ct.eject&&(t.remove(oe),a.removed.push(oe),a.ejected.push(oe),o("ejected",{id:oe,window:H.id})))}if(C){const oe=[H.at[0]-C.x,H.at[2]-C.z],Me=Math.hypot(...oe)||1,Ne=Ct.pull*.35*a.p*(H.a1-H.a0)*(H.y1-H.y0)/(1+Me*Me);C.kx=(C.kx||0)+oe[0]/Me*Ne*b,C.kz=(C.kz||0)+oe[1]/Me*Ne*b}}for(const H of a.windows.values()){if(H.broken)continue;const L=n.statics.find(oe=>oe.id===H.id);for(const oe of t.bodies()){if(oe===a.held)continue;const Me=t.pose(oe),Ne=Math.hypot(...Me.v),Ae=t.aabb(oe);if(Ne>5&&Ae.x0<L.x1+.05&&Ae.x1>L.x0-.05&&Ae.y0<L.y1&&Ae.y1>L.y0&&Ae.z0<L.z1+.05&&Ae.z1>L.z0-.05){w(H.id,"удар "+oe);break}}}for(const H of n.hatches){if(!f.has(H.id)&&!s.has("alltrap"))continue;let L=a.hatchOpen.get(H.id)||0;for(const oe of t.bodies()){if(oe===a.held)continue;const Me=t.pose(oe);Me.p[0]>H.x0&&Me.p[0]<H.x1&&Me.p[2]>H.z0&&Me.p[2]<H.z1&&Me.p[1]<.6&&(L||o("hatch_open",{id:H.id,by:oe}),L=Math.max(L,.01),(Me.p[1]<-.05||a.t-(a.hatchSeen?.[oe]??a.t)>Ct.hatchBurn)&&(t.remove(oe),a.removed.push(oe),a.burned.push({id:oe,hatch:H.id}),a.flash=Math.max(a.flash,.6),o("burned",{id:oe,hatch:H.id})),a.hatchSeen=a.hatchSeen||{},oe in a.hatchSeen||(a.hatchSeen[oe]=a.t))}C&&C.x>H.x0&&C.x<H.x1&&C.z>H.z0&&C.z<H.z1&&C.y<.1&&(L||o("hatch_open",{id:H.id,by:"player"}),L=Math.max(L,.01),a.deaths++,o("death",{cause:"hatch",id:H.id}),C.respawn&&C.respawn()),L&&(L=Math.min(1,L+b/.35)),L&&L>=1&&![...t.bodies()].some(oe=>{const Me=t.pose(oe);return Me.p[0]>H.x0&&Me.p[0]<H.x1&&Me.p[2]>H.z0&&Me.p[2]<H.z1})&&a.t-(a.hatchClose?.[H.id]??0)>2&&(a.hatchClose=a.hatchClose||{},a.hatchClose[H.id]=a.t,L=0,o("hatch_close",{id:H.id})),a.hatchOpen.set(H.id,L)}if(C){const H=C.input||{},L=Math.abs(H.forward||0)+Math.abs(H.strafe||0)>.1,oe=H.forward||0,Me=H.strafe||0,Ne=Math.sin(C.yaw),Ae=Math.cos(C.yaw),et=[-Ne*oe+Ae*Me,-Ae*oe-Ne*Me];if(L)for(const He of t.bodies()){if(He===a.held||(a.partSm.get(He)??1)>Ct.light||!de(He))continue;const Xe=t.aabb(He);if(!Xe||Xe.y0>C.y+.6||Xe.y1<C.y+.02||Xe.x0>C.x+.6||Xe.x1<C.x-.6||Xe.z0>C.z+.6||Xe.z1<C.z-.6)continue;const D=t.pose(He),E=Math.max(Xe.y0,Math.min(Xe.y1,C.y+.3));if(Io([C.x,E,C.z],D,t.half(He),Ce(He))>Sn.r+.05)continue;const De=D.p[0]-C.x,we=D.p[2]-C.z,Fe=Math.hypot(De,we)||1,Ue=[De/Fe,we/Fe];if(Ue[0]*et[0]+Ue[1]*et[1]<.2)continue;const xe=D.v[0]*Ue[0]+D.v[2]*Ue[1];xe<Ct.push&&!s.has("nopush")&&t.velocity(He,[D.v[0]+Ue[0]*(Ct.push-xe),Math.max(D.v[1],.3),D.v[2]+Ue[1]*(Ct.push-xe)])}t.setPlayer({x:C.x,y:C.y,z:C.z,h:C.h||Sn.stand})}const Q=t.step(b);if(a.kicks.length)for(const H of a.kicks.splice(0))t.has(H.id)&&t.impulseAt(H.id,H.v,H.at);for(const H of t.bodies())t.pose(H).p[1]<-3&&(t.remove(H),a.removed.push(H),o("lost",{id:H}));return a.flash=Math.max(0,a.flash-b*2),Q}function Je(b){const C=n.statics.filter(W=>!(W.kind==="glass"&&(a.windows.get(W.id)||{}).broken)&&!(W.kind==="door"&&(a.doors.get(W.door)||{}).open>.5)&&W.kind!=="note"),te=[];if(!s.has("ghost"))for(const W of t.bodies()){if(W===a.held)continue;const U=t.aabb(W);U&&te.push(...Cc(W,t.pose(W),t.half(W),U,b?b.x:0,b?b.z:0,Ce(W)))}for(const W of a.merged)W.bb=W.bb||Ye(W),te.push(...Cc(W.id,W,null,W.bb,b?b.x:0,b?b.z:0,W.poly.faces));return{col:{boxes:C,circles:[]},extra:te,soft:[]}}const Ce=b=>{const C=t.poly(b);return C?C.faces:null};function Ye(b){const C={x0:1e9,x1:-1e9,y0:1e9,y1:-1e9,z0:1e9,z1:-1e9};for(const te of b.poly.faces)for(const W of te.v){const U=un(b,W);C.x0=Math.min(C.x0,U[0]),C.x1=Math.max(C.x1,U[0]),C.y0=Math.min(C.y0,U[1]),C.y1=Math.max(C.y1,U[1]),C.z0=Math.min(C.z0,U[2]),C.z1=Math.max(C.z1,U[2])}return C}function Z(){return{v:1,room:n.id,t:+a.t.toFixed(3),p:+a.p.toFixed(4),joints:[...a.joints.keys()],cut:[...a.cutProg].map(([b,C])=>[b,+C.toFixed(3)]),panels:n.panels.map(b=>({id:b.id,...u.view(b.id)})),cables:[...a.cablesCut],breakers:[...a.breakers],doors:[...a.doors].map(([b,C])=>[b,C.want]),opens:[...a.opens].map(([b,C])=>[b,C.want]),windows:[...a.windows].filter(([,b])=>b.broken).map(([b])=>b),tanks:[...a.tanks].map(([b,C])=>[b,+C.heat.toFixed(3),C.gone]),cut2:l.snapshot(),notes:c.snapshot(),removed:a.removed.slice(),burned:a.burned.slice(),ejected:a.ejected.slice(),plates:[...a.plates],bodies:t.bodies().map(b=>{const C=t.pose(b);return{id:b,p:C.p.map(te=>+te.toFixed(4)),q:C.q.map(te=>+te.toFixed(5)),sleep:C.sleep,free:de(b)}})}}function Y(b){if(!b||b.room!==n.id)throw new Error("снимок другой комнаты");a.t=b.t,a.p=b.p;for(const C of[...a.joints.keys()])b.joints.includes(C)||(a.joints.delete(C),t.unjoint(C));a.cutProg=new Map(b.cut);for(const C of b.panels){for(let te=0;te<4;te++)C.bolts[te]&&u.cut(C.id,te,99);C.plate==="off"&&u.take(C.id),C.plate==="off"&&C.seated}a.cablesCut=new Set(b.cables),a.breakers=new Map(b.breakers);for(const[C,te]of b.doors){const W=a.doors.get(C);W&&(W.want=W.open=te,t.setStatic(W.box.id,te<=.5))}for(const[C,te]of b.opens){const W=a.opens.get(C);W&&(W.want=W.open=te)}for(const C of b.windows)Se(C);for(const[C,te,W]of b.tanks){const U=a.tanks.get(C);U&&(U.heat=te,U.gone=W)}a.removed=b.removed.slice(),a.burned=b.burned.slice(),a.ejected=b.ejected.slice();for(const C of b.removed)t.has(C)&&t.remove(C);for(const[C,te]of b.plates){const W=b.bodies.find(j=>j.id===C),U=d.get(te);!W||!U||(t.addPart({id:C,kind:"plate",shape:"box",h:U.face[1]==="y"?[Et.w/2,.012,Et.w/2]:U.face[1]==="x"?[.012,Et.w/2,Et.w/2]:[Et.w/2,Et.w/2,.012],p:W.p,q:W.q,mass:3},{}),a.partKind.set(C,"plate"),a.partSm.set(C,Ha.plate),a.plates.set(C,te))}l.restoreBodies(b.cut2);for(const C of b.bodies)t.has(C.id)&&(C.free&&t.release(C.id),t.setPose(C.id,C.p,C.q));l.restoreJoints(b.cut2);for(const C of b.bodies)t.has(C.id)&&t.setPose(C.id,C.p,C.q);c.restore(b.notes),v(),o("restored",{bodies:b.bodies.length,joints:b.joints.length})}function Se(b){const C=a.windows.get(b);C&&(C.broken=!0,C.hp=0,t.setStatic(b,!1))}return{S:a,C:n,phys:t,panels:u,danger:f,weld:(b,C)=>l.weld(b,C),cutter:l,notes:c,grabbable:de,powered:()=>_,isOn:m,aim:O,cut:ue,use:re,grab:q,drop:pe,throwHeld:ve,step:Le,playerCol:Je,usable:Ee,canGrab:he,canCut:_e,progress:Te,explode:y,cutJoint:M,toggleDoor:N,toggleBreaker:k,toggleCab:F,breakWindow:w,snapshot:Z,restore:Y,exposedCables:ne,holdPoint:Ie}}const w_={lineH:.085},It={bevel:0},Cn=Math.PI/2,Ju=new Kt,E_=new Kt,Fc=new K,T_={wood:9071173,orange:13132830,teal:3112838,white:14276559,steel:11910338,steelDark:4869458,O2:3108792,N2:3948356,H2:12071978};function Wt(n,e,t){ea(e[2],n.quaternion),t&&n.quaternion.multiply(Ju.set(t[0],t[1],t[2],t[3])),Oi(e[0],e[1],e[2],n.position)}function js(n,e,t){const i=typeof document<"u"?document.createElement("canvas"):null;if(!i)return null;i.width=n,i.height=e,t(i.getContext("2d"),n,e);const s=new Hr(i);return s.colorSpace=cn,s.anisotropy=4,s}function zc(n,e,t,i){const r=Math.round(e*256),a=Math.round(t*256);return js(r,a,(o,c,l)=>{if(o.fillStyle=i?"#06121a":"#020304",o.fillRect(0,0,c,l),!i||!n)return;const f=w_.lineH*256,u=Math.round(f*.72);o.font=`600 ${u}px ui-monospace, Menlo, monospace`,o.textBaseline="top",o.fillStyle="#ffcf6a",o.fillText(n.title,10,6),o.fillStyle="#9fe3e6",(n.rows||[]).forEach((d,h)=>o.fillText(d,10,6+f*(h+1))),o.fillStyle="rgba(160,230,255,0.05)";for(let d=0;d<l;d+=4)o.fillRect(0,d,c,1)})}function A_(n){return js(256,360,(e,t,i)=>{e.fillStyle="#e8e0c8",e.fillRect(0,0,t,i),e.fillStyle="rgba(80,60,30,0.15)";for(let o=0;o<18;o++)e.fillRect(14,30+o*18,t-28,1);e.fillStyle="#2a2a33",e.font="15px Georgia, serif";const s=String(n||"").split(" ");let r="",a=34;for(const o of s){const c=r?r+" "+o:o;if(e.measureText(c).width>t-30){if(e.fillText(r,16,a),a+=18,r=o,a>i-12)break}else r=c}a<=i-12&&e.fillText(r,16,a)})}function R_(n){return js(256,256,(e,t,i)=>{e.fillStyle="#4a4d52",e.fillRect(0,0,t,i),e.strokeStyle="#c9a227",e.lineWidth=10,e.strokeRect(12,12,t-24,i-24),e.fillStyle="#d8b030",e.font="bold 92px ui-monospace, Menlo, monospace",e.textAlign="center",e.textBaseline="middle",e.fillText(String(n),t/2,i/2+4)})}function C_(n,e,{scene:t,lang:i="ru",tier:s={}}={}){const r=ir[n.kit],[a,o,c]=n.size,l=e.texts[i]||e.texts.ru,f=Jg([0,0,0],[a,o,c]),u={lamp:Ts(13624063,3.2),lampWarm:Ts(16765600,3),emerg:Ts(16722458,2.6),glowWarm:Ts(16756832,4),lampOff:new gn({color:1776671,roughness:.6,metalness:.2})},d={...Zg(f),lamp:u.lamp,emerg:u.emerg,glowWarm:u.glowWarm},h=new ss;h.userData.room=n.id,t.add(h);const p=[],_=new Bn,g=n.hatches.map(x=>({x0:x.x0,x1:x.x1,y0:-.36,y1:.001,z0:x.z0,z1:x.z1,id:x.id}));Bn.holes=[...n.niches.map(x=>({...x})),...g];try{for(const x of n.statics)x.kind==="floor"||x.kind==="stub"&&x.id.endsWith("_floor")?_.slab("floor",x.x0,x.y0,x.z0,x.x1,x.y1,x.z1,{bevel:0}):x.kind==="ceil"||x.kind==="stub"&&x.id.endsWith("_ceil")?_.slab("ceil",x.x0,x.y0,x.z0,x.x1,x.y1,x.z1,{bevel:0}):(x.kind==="wall"||x.kind==="stub")&&_.slab("wall",x.x0,x.y0,x.z0,x.x1,x.y1,x.z1,{bevel:0})}finally{Bn.holes=null}const m=x=>[...n.portals.filter(P=>P.side===x).map(P=>({a0:P.a0,a1:P.a1,y0:0,y1:P.y1})),...n.windows.filter(P=>P.side===x).map(P=>({a0:P.a0,a1:P.a1,y0:P.y0,y1:P.y1}))],v=r.dado;for(const[x,P,z,V]of[["W","x",.012,c],["E","x",a-.012,c],["S","z",.012,a],["N","z",c-.012,a]]){const J=m(x).filter(se=>se.y0<v).map(se=>({...se,a0:se.a0-.1,a1:se.a1+.1,y0:0,y1:v+.1}));_.wall("wallDark",P,z,0,V,.08,v,.024,J),_.wall("steelDark",P,z,0,V,0,.08,.03,J.map(se=>({...se,y1:.2}))),_.wall("steel",P,z,0,V,v,v+.03,.03,m(x).filter(se=>se.y0<v+.03).map(se=>({...se,a0:se.a0-.12,a1:se.a1+.12,y0:0,y1:9})))}for(let x=r.beam/2;x<a;x+=r.beam)_.box("steelDark",x,o-.06,c/2,.14,.12,c,It);_.pipe("steel",[.25,o-.22,.2],[.25,o-.22,c-.2],.05,{seg:10}),_.pipe("copper",[.42,o-.18,.2],[.42,o-.18,c-.2],.03,{seg:8});for(const x of n.portals){const V=(x.a0+x.a1)/2,J=x.a1-x.a0,se=(ae,ge,ee,X)=>{if(x.along==="z"){const Re=x.side==="W"?.025:a-.025;_.box("orange",Re,ge,ae,.05,X,ee,It)}else{const Re=x.side==="S"?.025:c-.025;_.box("orange",ae,ge,Re,ee,X,.05,It)}};se(x.a0-.12/2,x.y1/2,.12,x.y1),se(x.a1+.12/2,x.y1/2,.12,x.y1),se(V,x.y1+.12/2,J+2*.12,.12);const be=x.along==="z"?[x.side==="W"?.03:a-.03,.3,x.a0-.3]:[x.a0-.3,.3,x.side==="S"?.03:c-.03];_.box("emerg",be[0],be[1],be[2],x.along==="z"?.02:.2,.05,x.along==="z"?.2:.02,It)}for(const x of n.windows){const z=x.side==="W"||x.side==="E"?"z":"x",V={W:0,E:a,S:0,N:c}[x.side],J=x.side==="W"||x.side==="S"?1:-1,se=.04,be=(x.a0+x.a1)/2,ae=x.a1-x.a0,ge=(ee,X,Re,Ge)=>z==="z"?_.box("steel",V+J*se/2,X,ee,se,Ge,Re,It):_.box("steel",ee,X,V+J*se/2,Re,Ge,se,It);ge(x.a0-.06/2,(x.y0+x.y1)/2,.06,x.y1-x.y0+2*.06),ge(x.a1+.06/2,(x.y0+x.y1)/2,.06,x.y1-x.y0+2*.06),ge(be,x.y0-.06/2,ae+2*.06,.06),ge(be,x.y1+.06/2,ae+2*.06,.06),ge(be,x.y0-.1,ae+.3,.05)}for(const x of n.statics)x.kind==="screen"&&_.slab("steelDark",x.x0-(x.x1-x.x0>.2?.03:0),x.y0-.03,x.z0-(x.z1-x.z0>.2?.03:0),x.x1+(x.x1-x.x0>.2?.03:0),x.y1+.03,x.z1+(x.z1-x.z0>.2?.03:0),It),x.kind==="cabinet"&&_.slab(x.mat,x.x0,x.y0,x.z0,x.x1,x.y1,x.z1,It);for(const x of n.parts)if(x.hinge){const P=x.hinge,z=P.sg;((J,se,be)=>{for(const ae of P.ys){const ge=(P.along==="x"?P.at[0]:P.at[2])+J,ee=P.along==="x"?P.at[2]:P.at[0],X=ee-z*.036,Re=X+z*be;P.along==="x"?_.slab("steel",ge-se/2,P.at[1]+ae-.05,Math.min(X,Re),ge+se/2,P.at[1]+ae+.05,Math.max(X,Re),It):_.slab("steel",Math.min(X,Re),P.at[1]+ae-.05,ge-se/2,Math.max(X,Re),P.at[1]+ae+.05,ge+se/2,It)}})(P.side===0?-.006:.006,.012,.04)}for(const x of n.joints)x.kind==="rivet"&&_.box("steelDark",x.at[0],x.at[1],x.at[2],.05,.05,.05,It);for(const x of n.fixtures)_.box("steelDark",x.x,x.y-.04,x.z,x.w+.1,.08,x.l+.1,It);for(const x of n.statics)if(x.kind==="shelf"&&_.slab(x.mat||"steel",x.x0,x.y0,x.z0,x.x1,x.y1,x.z1,{bevel:.006}),x.kind==="pipe"){const P={W:[x.off,null],E:[a-x.off,null],S:[null,x.off],N:[null,c-x.off]}[x.side],z=V=>P[0]!==null?[P[0],x.y,V]:[V,x.y,P[1]];_.pipe(x.mat==="copper"?"copper":x.mat,z(x.a0),z(x.a1),x.r,{seg:10});for(let V=x.a0+.25;V<x.a1;V+=1){const J=z(V),se={W:[0,null],E:[a,null],S:[null,0],N:[null,c]}[x.side];se[0]!==null?_.slab("steelDark",Math.min(se[0],J[0]),x.y-.02,V-.03,Math.max(se[0],J[0]),x.y+.02,V+.03,It):_.slab("steelDark",V-.03,x.y-.02,Math.min(se[1],J[2]),V+.03,x.y+.02,Math.max(se[1],J[2]),It)}}for(const x of n.hatches){const z=g.find(V=>V.id===x.id);_.slab("steel",x.x0-.05,-.004,x.z0-.05,x.x1+.05,.006,x.z0,It),_.slab("steel",x.x0-.05,-.004,x.z1,x.x1+.05,.006,x.z1+.05,It),_.slab("steel",x.x0-.05,-.004,x.z0,x.x0,.006,x.z1,It),_.slab("steel",x.x1,-.004,x.z0,x.x1+.05,.006,x.z1,It);for(const[V,J,se,be]of[[z.x0,z.x1,z.z0,z.z0+.012],[z.x0,z.x1,z.z1-.012,z.z1],[z.x0,z.x0+.012,z.z0,z.z1],[z.x1-.012,z.x1,z.z0,z.z1]])_.slab("steelDark",V,z.y0,se,J,-.004,be,It);_.slab("steelDark",z.x0,z.y0,z.z0,z.x1,z.y0+.012,z.z1,It)}for(const x of n.panels){const P=Qs(x),z={"+x":[1,0,0],"-x":[-1,0,0],"+z":[0,0,1],"-z":[0,0,-1],"+y":[0,1,0],"-y":[0,-1,0]}[x.face],V=.012;for(const[J,se]of[["x",0],["y",1],["z",2]]){const be=P[J+"0"],ae=P[J+"1"],ge=(ee,X)=>{const Re={...P};Re[J+"0"]=ee,Re[J+"1"]=X,_.slab("steelDark",Re.x0,Re.y0,Re.z0,Re.x1,Re.y1,Re.z1,{bevel:0})};if(z[se]){const ee=z[se]>0?be:ae;ge(ee-V/2,ee+V/2)}else ge(be,be+V),ge(ae-V,ae)}}const T=_.build(d);T.userData.room=n.id,h.add(T);const M=new lx(t,{spots:3,points:3});s.spots&&M.setTier(s);const A=new Map;for(const x of n.lights)A.set(x.id,M.add({...x,pos:x.pos.slice(),to:x.to.slice(),reach:30}));for(const x of n.portals){const P={W:[-1.2,x.y1-.2,(x.a0+x.a1)/2],E:[a+1.2,x.y1-.2,(x.a0+x.a1)/2],S:[(x.a0+x.a1)/2,x.y1-.2,-1.2],N:[(x.a0+x.a1)/2,x.y1-.2,c+1.2]}[x.side];M.add({kind:"point",pos:P,color:r.stub.light,power:3,dist:5,reach:30})}M.add({kind:"point",pos:[a/2,.4,c/2],color:16724e3,power:1.6,dist:9,reach:30,prio:.5,name:"emergency"});const S=new Map;for(const x of n.fixtures){const P=n.lights.find(V=>V.id===x.id),z=new lt(new Tt(x.w-.06,.02,x.l-.06),P&&P.color===16765600?u.lampWarm:u.lamp);Wt(z,[x.x,x.y-.09,x.z]),h.add(z),S.set(x.id,{m:z,on:z.material})}const y=new Map,w=new Map,N=Gu(),F=x=>{if(w.has(x))return w.get(x);const P=T_[x]??(jr[x]?jr[x][1]:9080726),z=["steel","steelDark","O2","N2","H2"].includes(x),V=new gn({color:P,roughness:z?.45:.7,metalness:z?.7:.1,map:z?N.metal.map:N.paint.map,normalMap:z?N.metal.normalMap:N.paint.normalMap});return w.set(x,V),V},k={wood:["#b98d55","#7d5a30","#d9b27a"],board:["#cbb488","#8f7a52","#e6d4a8"],metal:["#9aa3ab","#5c646c","#dfe6ea"]},G=new Map;function ce(x){if(G.has(x))return G.get(x);const[P,z,V]=k[x],J=js(128,128,(se,be,ae)=>{se.fillStyle=P,se.fillRect(0,0,be,ae);let ge=7;const ee=()=>(ge=ge*16807%2147483647,ge/2147483647);if(x==="metal")for(let X=0;X<260;X++)se.fillStyle=ee()<.5?z:V,se.globalAlpha=.12+ee()*.25,se.fillRect(ee()*be,Math.floor(ee()*ae),10+ee()*50,1);else for(let X=0;X<420;X++)se.fillStyle=ee()<.6?z:V,se.globalAlpha=.2+ee()*.4,x==="wood"?se.fillRect(ee()*be,ee()*ae,1+ee()*2,8+ee()*26):se.fillRect(ee()*be,ee()*ae,2+ee()*6,1+ee()*3);se.globalAlpha=1});return J&&(J.wrapS=J.wrapT=$s,p.push(J)),G.set(x,J),J}const O=x=>["steel","steelDark"].includes(x)?"metal":x==="white"?"board":"wood",ne=new Map;function ue(x){if(ne.has(x))return ne.get(x);const P=F(x).clone(),z=ce(O(x));return P.onBeforeCompile=V=>{V.uniforms.uCutMap={value:z},V.vertexShader=`attribute float aCut;
varying float vCut;
varying vec2 vCutUv;
`+V.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
  vCut = aCut; vCutUv = uv;`),V.fragmentShader=`uniform sampler2D uCutMap;
varying float vCut;
varying vec2 vCutUv;
`+V.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
  if (vCut > 0.5) diffuseColor.rgb = texture2D(uCutMap, vCutUv).rgb;`)},P.customProgramCacheKey=()=>"roomcut",ne.set(x,P),P}function re(x){const P=[],z=[],V=[],J=[],se=new st,be=new K;for(const{poly:ge,m:ee}of x){ee&&se.getNormalMatrix(ee);for(const X of ge.faces){const Re=be.set(...X.n);ee&&Re.applyMatrix3(se).normalize();const Ge=Re.x,tt=Re.y,ht=Re.z;for(let _t=1;_t+1<X.v.length;_t++)for(const ot of[X.v[0],X.v[_t],X.v[_t+1]])be.set(ot[0],ot[1],ot[2]),ee&&be.applyMatrix4(ee),P.push(be.x,be.y,be.z),z.push(Ge,tt,ht),V.push(ot[3],ot[4]),J.push(X.cut?1:0)}}const ae=new $t;return ae.setAttribute("position",new at(P,3)),ae.setAttribute("normal",new at(z,3)),ae.setAttribute("uv",new at(V,2)),ae.setAttribute("aCut",new at(J,1)),ae}const Ee=new Map;let he=!1;const _e=new Set;function Te(x){let P;if(x.shape==="cyl"){const V=x.h[0],J=x.h[1],se=[new Ii(V,V,J*2-.1,18,1),new Vs(V,18,8,0,Math.PI*2,0,Cn),new Ii(.025,.03,.08,10)];se[1].translate(0,J-.05,0),se[2].translate(0,J+.03,0),P=new $t;const be=se.map(X=>X.toNonIndexed()),ae=[],ge=[],ee=[];for(const X of be)ae.push(...X.attributes.position.array),ge.push(...X.attributes.normal.array),ee.push(...X.attributes.uv.array);P.setAttribute("position",new at(ae,3)),P.setAttribute("normal",new at(ge,3)),P.setAttribute("uv",new at(ee,2))}else{const V=x.h.map(J=>J.toFixed(3)).join(",");P=y.get(V),P||(P=new Tt(x.h[0]*2,x.h[1]*2,x.h[2]*2),P.setAttribute("aCut",new at(new Float32Array(P.attributes.position.count),1))),y.set(V,P)}const z=new lt(P,No.has(x.kind)?ue(x.mat||x.kind):F(x.mat||x.kind));return z.castShadow=!0,z.receiveShadow=!0,z.userData.part=x.id,z.userData.prefab=x.prefab,h.add(z),Ee.set(x.id,z),z}function I(x,P){const z=x.hinge,V=z.along==="x",J=V?x.h[0]:x.h[2],se=x.h[1],be=z.sg,ae=x.h[V?2:0],ge=z.side===0?1:-1,ee=Pt=>{const wn=[],oi=[],li=[];for(const bi of Pt){const Xn=bi.toNonIndexed();wn.push(...Xn.attributes.position.array),oi.push(...Xn.attributes.normal.array),li.push(...Xn.attributes.uv.array)}const vn=new $t;return vn.setAttribute("position",new at(wn,3)),vn.setAttribute("normal",new at(oi,3)),vn.setAttribute("uv",new at(li,2)),vn},X=(Pt,wn,oi,li,vn,bi)=>{const Xn=V?new Tt(li,vn,bi):new Tt(bi,vn,li);return Xn.translate(V?Pt:oi,wn,V?oi:Pt),Xn},Re=be*(ae+.004),Ge=.035,tt=ee([X(0,se-Ge,Re,2*J,2*Ge,.008),X(0,-se+Ge,Re,2*J,2*Ge,.008),X(-J+Ge,0,Re,2*Ge,2*se,.008),X(J-Ge,0,Re,2*Ge,2*se,.008)]),ht=new lt(tt,P.material);ht.castShadow=!1,ht.receiveShadow=!0,P.add(ht);const _t=V?z.at[0]-x.p[0]:z.at[2]-x.p[2],ot=V?z.at[2]-x.p[2]:z.at[0]-x.p[0],Ht=[X(ge*(J-.07),.05,be*(ae+.035),.018,.16,.018),X(ge*(J-.07),.12,be*(ae+.018),.014,.014,.036),X(ge*(J-.07),-.02,be*(ae+.018),.014,.014,.036)];for(const Pt of z.ys){const wn=new Ii(.013,.013,.1,10);wn.translate(V?_t:ot,Pt,V?ot:_t),Ht.push(wn,X(_t+ge*.035,Pt,be*(ae+.004),.06,.09,.006))}const ai=new lt(ee(Ht),F("yellow"));ai.castShadow=!1,ai.receiveShadow=!0,P.add(ai)}for(const x of n.parts){const P=Te(x);x.hinge&&I(x,P)}const de=new Map;for(const x of n.doors){const P=x.box,z=new lt(new Tt(P.x1-P.x0,P.y1-P.y0,P.z1-P.z0),F(x.kind==="sealed"?"red":"steelDark"));z.castShadow=!0,z.receiveShadow=!0,z.userData.door=x.id,h.add(z),de.set(x.id,{m:z,d:x})}const q=new Map,pe=r.wallT;for(const x of n.portals){const P=x.a1-x.a0,z=x.along==="z"?new Tt(pe+.1,.012,P):new Tt(P,.012,pe+.1),V={W:[-pe/2,(x.a0+x.a1)/2],E:[a+pe/2,(x.a0+x.a1)/2],S:[(x.a0+x.a1)/2,-pe/2],N:[(x.a0+x.a1)/2,c+pe/2]}[x.side],J=new lt(z,F("yellow"));J.receiveShadow=!0,Wt(J,x.along==="z"?[V[0],.006,V[1]]:[V[0],.006,V[1]]),h.add(J),q.set(x.id,J)}const ve=new gn({color:10470616,roughness:.05,metalness:.2,transparent:!0,opacity:.22,depthWrite:!1}),Ie=new Map;for(const x of n.windows){const P=n.statics.find(V=>V.id===x.id),z=new lt(new Tt(P.x1-P.x0,P.y1-P.y0,P.z1-P.z0),ve);Wt(z,[(P.x0+P.x1)/2,(P.y0+P.y1)/2,(P.z0+P.z1)/2]),z.userData.window=x.id,h.add(z),Ie.set(x.id,z)}const Pe=js(512,256,(x,P,z)=>{x.fillStyle="#01030a",x.fillRect(0,0,P,z);for(let V=0;V<260;V++){const J=Math.random();x.fillStyle=`rgba(${200+J*55},${210+J*45},255,${.3+J*.7})`,x.fillRect(Math.random()*P,Math.random()*z,J>.92?2:1,J>.92?2:1)}});for(const x of n.windows){const P=new lt(new vi((x.a1-x.a0)*3,(x.y1-x.y0)*3),new fs({map:Pe,toneMapped:!1})),z=3,V={W:[-z,null],E:[a+z,null],S:[null,-z],N:[null,c+z]}[x.side],J=(x.a0+x.a1)/2,se=(x.y0+x.y1)/2,be=V[0]!==null?[V[0],se,J]:[J,se,V[1]],ae={W:Cn,E:-Cn,S:0,N:Math.PI}[x.side];Wt(P,be,[0,Math.sin(ae/2),0,Math.cos(ae/2)]),h.add(P)}const Le=new Map;for(const x of n.texts){const P=n.statics.find(ee=>ee.id===x.id),z=n.prefabOf[x.id],V=z.wall,J={W:Cn,E:-Cn,S:0,N:Math.PI}[V],se=.004,be={W:[1,0],E:[-1,0],S:[0,1],N:[0,-1]}[V],ae=V==="W"?P.x1:V==="E"?P.x0:(P.x0+P.x1)/2,ge=V==="S"?P.z1:V==="N"?P.z0:(P.z0+P.z1)/2;if(x.kind==="screen"){const ee=zc(l[x.key],x.w,x.h,!0),X=new lt(new vi(x.w,x.h),new fs({map:ee,toneMapped:!1,color:16777215}));Wt(X,[ae+be[0]*se,(P.y0+P.y1)/2,ge+be[1]*se],[0,Math.sin(J/2),0,Math.cos(J/2)]),X.userData.screen=x.id,h.add(X),Le.set(x.id,{m:X,texOn:ee,texOff:zc(null,x.w,x.h,!1),t:x}),ee&&p.push(ee)}else{const ee=A_(l[x.key]),X=new lt(new vi(.21,.3),new gn({map:ee,roughness:.9,metalness:0,emissive:2761750,emissiveIntensity:.4}));Wt(X,[ae+be[0]*se,(P.y0+P.y1)/2,ge+be[1]*se],[0,Math.sin(J/2),0,Math.cos(J/2)]),X.userData.note=x.id,h.add(X),Le.set(x.id,{m:X,note:!0,t:x})}}const Je=new Map,Ce=new Map;for(const x of n.statics.filter(P=>P.kind==="breaker")){const P=new lt(new Tt(.05,.16,.05),F("red")),z=n.prefabOf[x.prefab],V={W:[1,0],E:[-1,0],S:[0,1],N:[0,-1]}[z.wall],J=z.wall==="W"?x.x1:z.wall==="E"?x.x0:(x.x0+x.x1)/2,se=z.wall==="S"?x.z1:z.wall==="N"?x.z0:(x.z0+x.z1)/2;P.userData.base=[J+V[0]*.04,(x.y0+x.y1)/2,se+V[1]*.04],P.userData.side=z.wall;const be=new lt(new Tt(z.wall==="W"||z.wall==="E"?.005:x.x1-x.x0,.04,z.wall==="W"||z.wall==="E"?x.z1-x.z0:.005),F("yellow"));Wt(be,[J+V[0]*.003,x.y1-.05,se+V[1]*.003]),h.add(be),h.add(P),Je.set(x.prefab,P);const ae=new lt(new Tt(x.x1-x.x0,x.y1-x.y0,x.z1-x.z0),F("steelDark"));Wt(ae,[(x.x0+x.x1)/2,(x.y0+x.y1)/2,(x.z0+x.z1)/2]),ae.castShadow=!0,ae.receiveShadow=!0,h.add(ae),Ce.set(x.prefab,ae)}const Ye=new Map;for(const x of n.hatches){const P=R_(x.number),z=new lt(new Tt(x.x1-x.x0-.02,.03,x.z1-x.z0-.02),new gn({map:P,roughness:.6,metalness:.5}));z.receiveShadow=!0,z.userData.hatch=x.id,h.add(z),Ye.set(x.id,{m:z,h:x})}const Z=new lt(new vi(.85,.85),u.glowWarm);Z.visible=!1,h.add(Z);const Y={plate:new gn({color:8094344,metalness:.55,roughness:.5,vertexColors:!0}),bolt:new gn({color:11910338,metalness:.8,roughness:.35})},Se=(()=>{const x=Et.w,P=.03,z=[[x,x,.018,0,0,.009,8094344]];for(const ee of[-1,1])z.push([x+2*P,P,.004,0,ee*(x/2+P/2),.002,14856732]),z.push([P,x,.004,ee*(x/2+P/2),0,.002,14856732]);const V=[],J=[],se=[],be=[],ae=new je;for(const[ee,X,Re,Ge,tt,ht,_t]of z){const ot=new Tt(ee,X,Re).toNonIndexed();ot.translate(Ge,tt,ht),V.push(...ot.attributes.position.array),J.push(...ot.attributes.normal.array),be.push(...ot.attributes.uv.array),ae.set(_t);for(let Ht=0;Ht<ot.attributes.position.count;Ht++)se.push(ae.r/.48,ae.g/.51,ae.b/.53)}const ge=new $t;return ge.setAttribute("position",new at(V,3)),ge.setAttribute("normal",new at(J,3)),ge.setAttribute("uv",new at(be,2)),ge.setAttribute("color",new at(se,3)),ge})(),b=(()=>{const x=Et.w,P=.035,z=[[x,P,.02,0,x/2-P/2,.01],[x,P,.02,0,-x/2+P/2,.01],[P,x,.02,x/2-P/2,0,.01],[P,x,.02,-x/2+P/2,0,.01]];for(let ee=0;ee<5;ee++)z.push([x-2*P,.022,.012,0,-x/2+P+(ee+.5)*(x-2*P)/5,.012,!0]);const V=[],J=[],se=[],be=[],ae=new je(6120555);for(const[ee,X,Re,Ge,tt,ht,_t]of z){const ot=new Tt(ee,X,Re).toNonIndexed();_t&&ot.rotateX(.6),ot.translate(Ge,tt,ht),V.push(...ot.attributes.position.array),J.push(...ot.attributes.normal.array),be.push(...ot.attributes.uv.array);for(let Ht=0;Ht<ot.attributes.position.count;Ht++)se.push(ae.r/.48,ae.g/.51,ae.b/.53)}const ge=new $t;return ge.setAttribute("position",new at(V,3)),ge.setAttribute("normal",new at(J,3)),ge.setAttribute("uv",new at(be,2)),ge.setAttribute("color",new at(se,3)),ge})(),C=x=>x&&x.panel==="vent"?b:Se,te={"+y":[-Cn,0],"-y":[Cn,0],"+x":[0,Cn],"-x":[0,-Cn],"+z":[0,0],"-z":[0,Math.PI]},W=new Map;for(const x of n.panels){const P=new lt(C(x),Y.plate),[z,V]=te[x.face],J=new tn(z,V,0,"YXZ"),se=new Kt().setFromEuler(J),be={"+y":[0,.003,0],"-y":[0,-.003,0],"+x":[.003,0,0],"-x":[-.003,0,0],"+z":[0,0,.003],"-z":[0,0,-.003]}[x.face];Wt(P,[x.x+be[0],x.y+be[1],x.z+be[2]],[se.x,se.y,se.z,se.w]),P.receiveShadow=!0,P.userData.panel=x.id,h.add(P),W.set(x.id,{m:P,q:[se.x,se.y,se.z,se.w]})}const U=new Br(new Ii(Et.bolt*.55,Et.bolt*.55,.012,10),Y.bolt,Math.max(1,n.panels.length*4));U.count=n.panels.length*4,h.add(U);const j={live:new gn({color:12071978,roughness:.5,metalness:.1}),dead:new gn({color:2761252,roughness:.8})};let Q=null;function H(x=new Set,P={}){Q&&(h.remove(Q),Q.geometry.dispose());const z=new Bn;for(const J of n.cables){const se=J.pts,be=P[J.id];for(let ae=1;ae<se.length;ae++){let ge=se[ae-1],ee=se[ae];if(be&&x.has(J.id)&&Math.abs((ge[0]===ee[0]?ge[0]:be[0])-be[0])<.001&&Math.abs((ge[2]===ee[2]?ge[2]:be[2])-be[2])<.001&&be[0]>=Math.min(ge[0],ee[0])-.001&&be[0]<=Math.max(ge[0],ee[0])+.001&&be[2]>=Math.min(ge[2],ee[2])-.001&&be[2]<=Math.max(ge[2],ee[2])+.001){const Re=[ee[0]-ge[0],0,ee[2]-ge[2]],Ge=Math.hypot(Re[0],Re[2])||1,tt=[Re[0]/Ge*.04,0,Re[2]/Ge*.04];z.pipe("rubber",ge,[be[0]-tt[0],be[1],be[2]-tt[2]],.022,{seg:8}),z.pipe("rubber",[be[0]+tt[0],be[1],be[2]+tt[2]],ee,.022,{seg:8});continue}z.pipe("rubber",ge,ee,.022,{seg:8})}}const V=z.build({cloth:j.live});Q=V.children[0]||null,Q&&(V.remove(Q),Q.castShadow=!1,h.add(Q))}H(),new xt;const L=new Ut;let oe="",Me="",Ne=0;const Ae=[],et=new gn({color:11121079,roughness:.45,metalness:.3,emissive:2759180,emissiveIntensity:.8}),He=Ts(16756832,5),Xe=new Vs(.0075,8,6),D=480,E=96,ie=new Br(Xe,et,D),De=new Br(new Vs(.006,6,4),He,E);for(const x of[ie,De])x.frustumCulled=!1,x.castShadow=!1,x.visible=!1,x.count=0,h.add(x);function we(x){const P=x.S;for(const[ge,ee]of P.pieces)if(!Ee.has(ge)){const X=new lt(re([{poly:ee.poly}]),ue(ee.mat));X.castShadow=!0,X.receiveShadow=!0,X.userData.part=ge,X.userData.prefab=ee.prefab,X.userData.piece=!0,h.add(X),Ee.set(ge,X)}for(const[ge,ee]of Ee)ee.userData.piece&&!P.pieces.has(ge)&&(h.remove(ee),ee.geometry.dispose(),Ee.delete(ge));if(P.merged.length!==Ne){Ne=P.merged.length;for(const X of Ae.splice(0))h.remove(X),X.geometry.dispose();const ge=new Map,ee=new Ut;for(const X of P.merged){Wt(ee,X.p,X.q),ee.updateMatrix();const Re=ue(X.mat);ge.has(Re)||ge.set(Re,[]),ge.get(Re).push({poly:X.poly,m:ee.matrix.clone()})}for(const[X,Re]of ge){const Ge=new lt(re(Re),X);Ge.receiveShadow=!0,Ge.castShadow=!0,h.add(Ge),Ae.push(Ge)}}const z=(ge,ee,X)=>{L.position.copy(Oi(X[0],X[1],X[2],Fc)),L.quaternion.identity(),L.scale.setScalar(1),L.updateMatrix(),ge.setMatrixAt(ee,L.matrix)};let V=0;const J=(ge,ee)=>{const X=x.phys.pose(ge);if(X)for(let Re=0;Re<ee.length;Re++){const Ge=ee[Re],tt=ee[Re+1]||Ge,ht=Math.hypot(Ge[0]-tt[0],Ge[1]-tt[1],Ge[2]-tt[2]),_t=Math.max(1,Math.round(ht/.004));for(let ot=0;ot<_t&&V<D;ot++)z(ie,V++,un(X,[0,1,2].map(Ht=>Ge[Ht]+(tt[Ht]-Ge[Ht])*ot/_t)))}};for(const[,ge]of P.beads)J(ge.a,ge.pts);ie.count=V,ie.visible=V>0,V&&(ie.instanceMatrix.needsUpdate=!0),V=0;const se=P.stroke,be=P.weld,ae=se?x.phys.pose(se.id):be?x.phys.pose(be.a):null;if(se&&ae){const ge=Math.hypot(se.p1[0]-se.p0[0],se.p1[1]-se.p0[1],se.p1[2]-se.p0[2]),ee=Math.min(E,Math.max(1,Math.round(ge/.009)));for(let X=0;X<ee;X++){const Re=ee>1?X/(ee-1):1;z(De,V++,un(ae,[0,1,2].map(Ge=>se.p0[Ge]+(se.p1[Ge]-se.p0[Ge])*Re)))}}else if(be&&ae)for(const ge of be.path)V<E&&z(De,V++,un(ae,ge));De.count=V,De.visible=V>0,V&&(De.instanceMatrix.needsUpdate=!0)}function Fe(x,P,z,V){const J=x.S,se=x.phys;we(x);for(const ee of x.notes.ids()){const X=Le.get(ee),Re=x.notes.pose(ee);if(X)if(J.noteHeld===ee&&z&&V){const Ge=Math.cos(V.pitch),tt=[-Math.sin(V.yaw)*Ge,Math.sin(V.pitch),-Math.cos(V.yaw)*Ge],ht=[Math.cos(V.yaw),0,-Math.sin(V.yaw)],_t=new Kt().setFromEuler(new tn(V.pitch,V.yaw,0,"YXZ"));X.m.visible=!0,Wt(X.m,[0,1,2].map(ot=>z[ot]+tt[ot]*.5+ht[ot]*.16-(ot===1?.14:0)),[_t.x,_t.y,_t.z,_t.w])}else X.m.visible=!!Re&&!_e.has(ee),Re&&Wt(X.m,Re.p,Re.q)}for(const[ee,X]of Ee){const Re=se.pose(ee);if(!Re||_e.has(X.userData.prefab)){X.visible=!1;continue}X.visible=!0,Wt(X,Re.p,Re.q)}for(const[ee]of J.plates)if(!Ee.has(ee)){const X=new lt(C(n.panels.find(Re=>Re.id===J.plates.get(ee))),Y.plate);X.castShadow=!0,h.add(X),Ee.set(ee,X),X.userData.part=ee,X.userData.plateLocal=!0}for(const[ee,X]of Ee)if(X.userData.plateLocal){const Re=se.pose(ee);if(!Re){X.visible=!1;continue}const Ge=n.panels.find(_t=>_t.id===J.plates.get(ee)),tt=W.get(Ge.id).q,ht=new Kt(...Re.q).multiply(E_.set(...tt));X.visible=!0,Wt(X,Re.p,[ht.x,ht.y,ht.z,ht.w])}for(const[ee,{m:X,d:Re}]of de){const Ge=J.doors.get(ee),tt=Re.box,ht=Ge.open*((Re.along==="z"?tt.z1-tt.z0:tt.x1-tt.x0)-.1);Wt(X,[(tt.x0+tt.x1)/2+(Re.along==="x"?ht:0),(tt.y0+tt.y1)/2,(tt.z0+tt.z1)/2+(Re.along==="z"?ht:0)])}for(const[ee,X]of Ie)X.visible=!J.windows.get(ee).broken;const be=[...x.powered()].sort().join(",")+"|"+[...J.breakers].map(([ee,X])=>ee+X).join(",");if(be!==oe){oe=be;for(const[ee,X]of A)X.off=he||!x.isOn(ee);for(const[ee,X]of S)X.m.material=x.isOn(ee)?X.on:u.lampOff;for(const[ee,X]of Le)X.note||(X.m.material.map=x.isOn(ee)?X.texOn:X.texOff,X.m.material.needsUpdate=!0);for(const[ee,X]of Je){const Re=J.breakers.get(ee)?-.5:.5,Ge=X.userData.side;Wt(X,X.userData.base,Ge==="W"||Ge==="E"?[0,0,Math.sin(Re/2),Math.cos(Re/2)]:[Math.sin(Re/2),0,0,Math.cos(Re/2)])}}const ae=[...J.cablesCut].join(",");ae!==Me&&(Me=ae,H(J.cablesCut,J.cableCutAt||{}));for(const[ee,{m:X,h:Re}]of Ye){const Ge=J.hatchOpen.get(ee)||0,tt=Re.x0+.01,ht=Ge*1.75,_t=(Re.x0+Re.x1)/2,ot=(Re.z0+Re.z1)/2,Ht=(Re.x1-Re.x0)/2,ai=[0,0,Math.sin(-ht/2),Math.cos(-ht/2)];if(Wt(X,[tt+Math.cos(ht)*Ht,-.016-Math.sin(ht)*Ht,ot],ai),x.danger.has(ee)){Z.visible=Ge>.05;const Pt=new Kt().setFromEuler(new tn(-Cn,0,0));Wt(Z,[_t,-.34,ot],[Pt.x,Pt.y,Pt.z,Pt.w])}}let ge=0;for(const ee of n.panels){const X=x.panels.view(ee.id),Re=W.get(ee.id);Re.m.visible=X.plate==="on";for(let Ge=0;Ge<4;Ge++){const tt=X.plate==="on"&&!X.bolts[Ge],ht=Yu(ee,Ge),[_t,ot]=te[ee.face];L.position.copy(Oi(ht[0],ht[1]-(ee.face==="+y"?.006:0),ht[2],Fc)),L.quaternion.copy(ea(ht[2])).multiply(Ju.setFromEuler(new tn(_t+Cn,ot,0,"YXZ"))),L.scale.setScalar(tt?1:1e-4),L.updateMatrix(),U.setMatrixAt(ge++,L.matrix)}}U.instanceMatrix.needsUpdate=!0,M.update(z?z[0]:a/2,z?z[2]:c/2,P)}function Ue(){const x=new Map,P=(z,V)=>{V&&(x.has(z)||x.set(z,[]),x.get(z).push(V))};for(const z of n.keys){z.portal&&(P(z.id,(de.get(z.id)||{}).m),P(z.id,q.get(z.id)));for(const[ee,X]of Ee)X.userData.prefab===z.id&&P(z.id,X);const V=Le.get(z.id);V&&P(z.id,V.m);const J=Ye.get(z.id);J&&P(z.id,J.m);const se=Ie.get(z.id);se&&P(z.id,se);const be=Je.get(z.id);be&&P(z.id,be);const ae=W.get(z.id);ae&&P(z.id,ae.m);const ge=Ce.get(z.id);ge&&P(z.id,ge)}return x}function xe(){let x=0,P=0;return h.traverse(z=>{if(z.isMesh&&z.visible){P++;const V=z.geometry,J=V.index?V.index.count/3:V.attributes.position.count/3;x+=z.isInstancedMesh?J*z.count:J}}),{tris:Math.round(x),meshes:P}}function ye(){t.remove(h),h.traverse(x=>{x.isMesh&&x.geometry.dispose()});for(const x of p)x.dispose();for(const x of[...M.spots,...M.points])t.remove(x),x.target&&t.remove(x.target),x.shadow&&x.shadow.map&&x.shadow.map.dispose()}function ze(){he=!0;for(const x of M.defs)x.off=!0;h.traverse(x=>{x.isMesh&&x.material&&(x.material.isMeshBasicMaterial||x.material.userData.unlit)&&(x.visible=!1)}),T.traverse(x=>{x.isMesh&&x.material.userData.unlit&&(x.visible=!1)})}function B(x){for(const P of x){_e.add(P);for(const z of Ue().get(P)||[])z.visible=!1,z.userData.gateHidden=!0}}return{group:h,staticGroup:T,pool:M,update:Fe,keyMeshes:Ue,stats:xe,dispose:ye,partMesh:Ee,mats:d,darken:ze,hide:B}}const Pn={cutter:'<svg viewBox="0 0 40 40"><path d="M8 26 L22 12 L28 18 L14 32 Z" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/><path d="M26 10 l6 -4 M30 14 l6 -2 M24 6 l2 -4" stroke="#ffb060" stroke-width="2.4" stroke-linecap="round"/></svg>',jump:'<svg viewBox="0 0 40 40"><path d="M20 30 V10 M11 18 L20 9 L29 18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',crouch:'<svg viewBox="0 0 40 40"><path d="M20 9 V29 M11 21 L20 30 L29 21" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 34 H31" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',kick:'<svg viewBox="0 0 40 40"><path d="M12 8 L16 22 L28 26 L30 31 L14 31 L8 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"/><path d="M31 14 l4 -3 M32 19 h5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',pause:'<svg viewBox="0 0 40 40"><path d="M14 11 V29 M26 11 V29" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>',full:'<svg viewBox="0 0 40 40"><path d="M9 16 V9 H16 M24 9 H31 V16 M31 24 V31 H24 M16 31 H9 V24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',hand:'<svg viewBox="0 0 40 40"><path d="M12 22 V12 a2.5 2.5 0 0 1 5 0 V20 V9 a2.5 2.5 0 0 1 5 0 V20 V11 a2.5 2.5 0 0 1 5 0 V22 V16 a2.5 2.5 0 0 1 5 0 V25 c0 6 -4 10 -10 10 h-2 c-4 0 -7 -2 -9 -6 l-4 -7 a2.4 2.4 0 0 1 4 -2.5 Z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/></svg>',use:'<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="11" fill="none" stroke="currentColor" stroke-width="2.6"/><circle cx="20" cy="20" r="3.5" fill="currentColor"/></svg>',throwI:'<svg viewBox="0 0 40 40"><path d="M9 30 Q14 12 31 10" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/><path d="M24 7 L32 10 L28 17" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',put:'<svg viewBox="0 0 40 40"><rect x="12" y="10" width="16" height="12" rx="1.5" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M20 24 V31 M15 27 L20 32 L25 27 M8 35 H32" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>'},P_=`
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
`;function Xt(n,e,t){const i=document.createElement(n);return e&&(i.className=e),t&&(i.innerHTML=t),i}function Oc(n,e,t,i){const s=2*Math.PI*n;return`<svg class="ring" viewBox="0 0 ${2*n+i+2} ${2*n+i+2}"><circle cx="${n+i/2+1}" cy="${n+i/2+1}" r="${n}" stroke="rgba(223,230,238,.18)"/><circle cx="${n+i/2+1}" cy="${n+i/2+1}" r="${n}" stroke="${t}" stroke-dasharray="${(s*e).toFixed(1)} ${s.toFixed(1)}" stroke-linecap="round"/></svg>`}function L_(n,e,{sim:t=null}={}){if(!document.getElementById("thud-css")){const r=Xt("style");r.id="thud-css",r.textContent=P_,document.head.appendChild(r)}const i=Xt("div");if(i.id="thud",t){const[r,a,o,c]=t;for(const[l,f]of[["l",r],["r",a],["b",o],["t",c]])n.style.setProperty("--sim-"+l,f+"px")}const s={cut:Xt("div","tbn cut",Pn.cutter),jmp:Xt("div","tbn jmp",Pn.jump),cro:Xt("div","tbn cro",Pn.crouch),kck:Xt("div","tbn kck",Pn.kick),pz:Xt("div","tbn pz",Pn.pause),ghost:Xt("div","ghost"),ctx:Xt("div","ctx")};s.cut.dataset.act="cutter",s.jmp.dataset.act="jump",s.cro.dataset.act="crouch",s.kck.dataset.act="kick",s.pz.dataset.act="pause";for(const[r,a]of[["fire",s.cut],["jump",s.jmp],["crouch",s.cro],["kick",s.kck],["pause",s.pz]])a.dataset.key=r,a.classList.add("tb");return i.append(s.ghost,s.ctx,s.kck,s.cro,s.jmp,s.cut,s.pz),n.appendChild(i),{hud:i,E:s}}const rs={key:"drift.mob.v1",def:{sens:1,inv:!1,k:1,op:.9,mir:!1,txt:1},lim:{sens:[.4,2.5],k:[.85,1.3],op:[.35,1],txt:[.9,1.5]}};function kc(n){const e={...rs.def};try{const t=JSON.parse(n&&n.getItem(rs.key)||"null");if(t&&typeof t=="object")for(const i of Object.keys(e))typeof t[i]==typeof e[i]&&(e[i]=t[i])}catch{}for(const[t,[i,s]]of Object.entries(rs.lim))e[t]=Math.max(i,Math.min(s,+e[t]||rs.def[t]));return e}const en={radius:56,deadIn:.12,deadOut:.08,runOn:.92,runOff:.8,runHold:.25,look:1.6,accel:.6,accelV:1500,ladderCone:.6,dbl:.3},Bc="drift.mob.tut.v1",Ds=["move","look","jump","crouch","use"];function D_(n,e,{input:t,onPause:i,onFull:s=null,haptic:r=()=>{},store:a=null,sim:o=null,mut:c=[]}={}){const l=new Set(c),{hud:f,E:u}=L_(n,e,{sim:l.has("nosafe")?null:o}),d=Xt("div","szone",'<div class="stick"></div>'),h=Xt("div","stk","<i></i>"),p=h.firstChild;u.ghost.remove(),f.prepend(d),f.appendChild(h);const _=Xt("div","",Oc(43,0,"#ffb060",4)).firstChild;_.setAttribute("class","hr"),u.cut.appendChild(_);const g=_.lastChild,m=2*Math.PI*43,v=Xt("span","tag");v.hidden=!0,u.cro.appendChild(v);const T=Xt("div","hpb","<i></i>");f.appendChild(T);const M=Xt("div","tbn fsb off",Pn.full);M.dataset.act="full",M.dataset.key="full",M.classList.add("tb"),f.appendChild(M);const A=U=>{U.stopPropagation(),U.cancelable&&U.preventDefault(),!M.classList.contains("off")&&s&&s()};M.addEventListener("pointerdown",U=>{U.stopPropagation(),t.setDevice("touch"),U.cancelable&&U.preventDefault()}),M.addEventListener("pointerup",A),M.addEventListener("click",A);let S=kc(a);const y=()=>{l.has("noset")||(f.style.setProperty("--k",l.has("smallbtn")?.5:S.k),f.style.setProperty("--op",S.op),n.style.setProperty("--txt",S.txt),f.classList.toggle("mir",!!S.mir),n.classList.toggle("mir",!!S.mir))};y();const w={act:"",text:"",hold:!1,ring:0,held:!1,ladder:!1,heat:0,over:!1,kickCd:0,slow:1,hp:1},N=new Map,F={downs:0,cancels:0,roles:{}};let k=!1,G=!1,ce=-1,O=-1,ne=!1,ue=[0,0];const re=()=>performance.now()/1e3,Ee=(U,j)=>{try{U.setPointerCapture(j)}catch{}};function he(U){let j=(U.x-U.ox)/en.radius,Q=(U.y-U.oy)/en.radius,H=Math.hypot(j,Q);H>1&&(j/=H,Q/=H,H=1),p.style.transform=`translate(${(j*en.radius).toFixed(1)}px, ${(Q*en.radius).toFixed(1)}px)`,!ne&&H>en.deadIn?ne=!0:ne&&H<en.deadOut&&(ne=!1),l.has("nodead")&&(ne=H>0);const L=ne?Math.min(1,(H-en.deadOut)/(1-en.deadOut))/Math.max(H,1e-6):0;let oe=j*L*H,Me=-Q*L*H;w.ladder&&Math.abs(oe)<en.ladderCone&&!l.has("noladdersnap")&&(oe=0),ue=[oe,Me];const Ne=re();H>=en.runOn?O<0&&(O=Ne):H<en.runOff&&(O=-1);const Ae=O>=0&&Ne-O>=en.runHold&&!l.has("norun");h.classList.toggle("run",Ae),t.stick(oe,Me,Ae)}function _e(){ne=!1,O=-1,ue=[0,0],t.stick(0,0,!1),h.classList.remove("on","run"),p.style.transform=""}function Te(U,j,Q){const H=re(),L=Math.max(.001,H-U.t),oe=j-U.x,Me=Q-U.y,Ne=Math.hypot(oe,Me)/L,Ae=1+en.accel*Math.min(1,Ne/en.accelV),et=en.look*S.sens*Ae*(l.has("noslow")?1:w.slow);t.look(oe*et,(S.inv?-Me:Me)*et),Y+=Math.abs(oe)+Math.abs(Me),U.t=H}function I(U,j,Q){if(U.pointerType==="mouse"||l.has("onefinger")&&N.size)return;t.setDevice("touch"),F.downs++,F.roles[j]=(F.roles[j]||0)+1;const H={role:j,el:Q,x:U.clientX,y:U.clientY,t:re(),ox:U.clientX,oy:U.clientY};if(N.set(U.pointerId,H),Q&&Ee(Q,U.pointerId),j==="stick"){const L=innerWidth,oe=innerHeight,Me=64;H.ox=Math.max(Me+20,Math.min(L-Me-20,U.clientX)),H.oy=Math.max(Me+20,Math.min(oe-Me-20,U.clientY)),h.style.left=H.ox+"px",h.style.top=H.oy+"px",h.classList.add("on"),he(H)}if(j==="cutter"&&(t.hold("cutter",!0),u.cut.classList.add("on")),j==="jump"&&(t.press("jump"),pe(u.jmp)),j==="kick"&&(t.press("kick"),pe(u.kck),r("kick")),j==="crouch"){const L=re();G?(G=!1,k=!1):k&&ce>=0&&L-ce<en.dbl&&!l.has("nocrawl")?G=!0:k=!k,ce=L,t.hold("crouch",k),t.hold("crawl",G),ve()}j==="pause"&&i&&i(),j==="use"&&(Ce.used=!0,w.hold?t.hold("interactHold",!0):t.press("interact"),Q.classList.add("on")),(j==="grab"||j==="put")&&(t.press("grab"),j==="put"&&r("throw")),j==="throw"&&(t.press("throw"),t.hold("throwHold",!0),r("throw")),j==="off"&&t.press("jump"),U.preventDefault()}function de(U){const j=N.get(U.pointerId);if(j){if(j.role==="stick"){j.x=U.clientX,j.y=U.clientY,he(j);return}(j.role==="look"||j.role==="cutter")&&(Te(j,U.clientX,U.clientY),j.x=U.clientX,j.y=U.clientY)}}function q(U){const j=N.get(U.pointerId);j&&(U.type==="pointercancel"&&F.cancels++,N.delete(U.pointerId),j.role==="stick"&&_e(),j.role==="cutter"&&(t.hold("cutter",!1),u.cut.classList.remove("on")),j.role==="use"&&(t.hold("interactHold",!1),j.el&&j.el.classList.remove("on")),j.role==="throw"&&t.hold("throwHold",!1))}function pe(U){U.classList.add("on"),setTimeout(()=>U.classList.remove("on"),140)}function ve(){v.hidden=!(k||G),v.textContent=e(G?"mob.tag.crawl":"mob.tag.crouch"),u.cro.classList.toggle("on",k||G)}d.addEventListener("pointerdown",U=>I(U,"stick",d));for(const[U,j]of[[u.cut,"cutter"],[u.jmp,"jump"],[u.cro,"crouch"],[u.kck,"kick"],[u.pz,"pause"]])U.addEventListener("pointerdown",Q=>{Q.stopPropagation(),I(Q,j,U)});addEventListener("pointerdown",U=>{U.pointerType!=="touch"||N.has(U.pointerId)||(t.setDevice("touch"),!(U.target.closest&&U.target.closest("#thud .szone, #thud .tbn, #thud .pill, #thud .tut, .panel, .mscr, button, a, input"))&&(!n.classList.contains("mob")||n.classList.contains("paused")||I(U,"look",null)))},!0),addEventListener("pointermove",de,!0),addEventListener("pointerup",q,!0),l.has("nocancel")||addEventListener("pointercancel",q,!0);const Ie=()=>{if(!l.has("noreset"))for(const[U]of[...N])q({pointerId:U,type:"pointercancel"})};for(const U of["dblclick","contextmenu"])f.addEventListener(U,j=>j.preventDefault());let Pe="";function Le(U,j,Q,H,L,oe){const Me=Xt("div","pill tb "+U,`<span class="ic">${j}${oe?Oc(18,0,"#84cbcd",3.5):""}</span><span>${Q}${H?`<span class="pv">${H}</span>`:""}</span>`);return Me.dataset.key=L==="use"?"e":L,Me.dataset.act=L,Me.addEventListener("pointerdown",Ne=>{Ne.stopPropagation(),I(Ne,L,Me)}),Me}function Je(){const U=[w.act,w.text,w.hold,w.held,w.ladder].join("|");if(U!==Pe){Pe=U;for(const[j,Q]of[...N])(Q.role==="use"||Q.role==="grab"||Q.role==="throw"||Q.role==="put"||Q.role==="off")&&q({pointerId:j,type:"pointerup"});u.ctx.textContent="",!l.has("noctx")&&(w.act==="e"&&w.text&&u.ctx.appendChild(Le(w.hold?"hold":"",Pn.use,w.text,w.hold?e("mob.btn.hold"):"","use",w.hold)),w.held?(u.ctx.appendChild(Le("",Pn.throwI,e("mob.btn.throw"),"","throw")),u.ctx.appendChild(Le("alt",Pn.put,e("mob.btn.put"),"","put"))):w.act==="grip"&&u.ctx.appendChild(Le("alt",Pn.hand,e("mob.btn.grab"),w.text,"grab")),w.ladder&&u.ctx.appendChild(Le("alt",Pn.jump,e("mob.btn.off"),"","off")))}}const Ce={i:-1,done:!1,log:[]};try{Ce.done=!!(a&&a.getItem(Bc))}catch{Ce.done=!1}let Ye=null,Z=0,Y=0,Se=0;function b(){if(Ye&&Ye.remove(),Ce.i>=Ds.length){Ce.done=!0,Ye=null;try{a&&a.setItem(Bc,"1")}catch{}return}Ye=Xt("div","tut",`<p>${e("mob.tut."+Ds[Ce.i])}</p>`),Ye.dataset.step=Ds[Ce.i];const U=Xt("button","",e("mob.tut.skip"));U.type="button",U.addEventListener("pointerdown",j=>{j.stopPropagation(),Ce.log.push("skip"),Ce.i=Ds.length,b()}),Ye.appendChild(U),f.appendChild(Ye),Z=Y=Se=0}function C(U){if(Ce.done||l.has("notut"))return;if(Ce.i<0){Ce.i=0,b();return}const j=Ds[Ce.i];let Q=!1;Se+=U,j==="move"&&(Math.hypot(ue[0],ue[1])>.3&&(Z+=U),Q=Z>1),j==="look"&&(Q=Y>120),j==="jump"&&(Q=!!Ce.jumped),j==="crouch"&&(Q=!!Ce.crouched),j==="use"&&(Q=!!Ce.used||Se>25),Q&&(Ce.log.push(j),Ce.i++,b())}d.addEventListener("pointerdown",()=>{},!0),u.jmp.addEventListener("pointerdown",()=>{Ce.jumped=!0}),u.cro.addEventListener("pointerdown",()=>{Ce.crouched=!0});let te=re();return{hud:f,E:u,zone:d,update(U){Object.assign(w,U);const j=re(),Q=Math.min(.5,j-te);if(te=j,Je(),w.act==="e"&&w.hold){const H=u.ctx.querySelector(".pill.hold .ring circle:last-child");if(H){const L=2*Math.PI*18;H.setAttribute("stroke-dasharray",`${(L*Math.max(0,Math.min(1,w.ring))).toFixed(1)} ${L.toFixed(1)}`)}}g.setAttribute("stroke-dasharray",`${(m*Math.max(0,Math.min(1,w.heat))).toFixed(1)} ${m.toFixed(1)}`),g.setAttribute("stroke",w.over?"#ff5a3a":"#ffb060"),u.cut.classList.toggle("over",!!w.over),u.cut.classList.toggle("hint",w.act==="cut"),u.kck.classList.toggle("cd",w.kickCd>0),T.firstChild.style.width=(Math.max(0,Math.min(1,w.hp))*100).toFixed(0)+"%";for(const H of N.values())H.role==="stick"&&he(H);w.used&&(Ce.used=!0),n.classList.contains("mob")&&!n.classList.contains("paused")&&C(Q),f.dataset.ctx=u.ctx.children.length?[...u.ctx.children].map(H=>H.dataset.act).join(","):"",f.dataset.touches=String(N.size),f.dataset.crouch=G?"crawl":k?"1":"0"},settings:()=>({...S}),set(U,j){U==="reset"?S={...rs.def}:S={...S,[U]:j},S=kc({getItem:()=>JSON.stringify(S)}),y();try{a&&a.setItem(rs.key,JSON.stringify(S))}catch{}},releaseAll:Ie,setFull(U){const j=l.has("fsbtnalways")?!1:!U||l.has("nofsbtn");M.classList.toggle("off",j),n.style.setProperty("--fsw",j?"0px":"60px"),f.dataset.full=j?"":"1"},crouchState:()=>({crouch:k,crawl:G}),clearCrouch(){k=G=!1,t.hold("crouch",!1),t.hold("crawl",!1),ve()},tut:Ce,stats:()=>({...F,touches:N.size,roles:[...N.values()].map(U=>U.role),stick:ue.slice()})}}const I_={"mob.mock.zone.move":"стик: где лёг палец","mob.mock.zone.look":"обзор: веди пальцем","mob.mock.verb.use":"Открыть","mob.mock.verb.use.sub":"торговый терминал","mob.mock.verb.wheel":"Крутить","mob.mock.verb.wheel.sub":"держи палец","mob.mock.crouch.tag":"вкл","mob.btn.grab":"Схватить","mob.btn.throw":"Бросить","mob.btn.put":"Положить","mob.btn.use":"Взаимодействовать","mob.btn.off":"Слезть","mob.btn.hold":"держи","mob.tag.crouch":"вкл","mob.tag.crawl":"ползу","mob.start.title":"Нажми, чтобы начать","mob.start.sub":"Касание включит звук и полный экран","mob.resume":"Нажми, чтобы продолжить","mob.rotate.title":"Поверни устройство","mob.rotate.sub":"ДРЕЙФ играется в альбомной ориентации","mob.a2hs":"Полный экран в Safari: «Поделиться», потом «На экран Домой», и открывай игру оттуда","mob.a2hs.close":"Понятно","mob.inapp":"Для полного экрана откройте игру кнопкой ▶️ в боте или в Safari","mob.tut.move":"Стик слева: положи палец и веди, чтобы идти. До упора - бег","mob.tut.look":"Правая половина экрана: веди пальцем, чтобы оглядеться","mob.tut.jump":"Кнопка со стрелкой вверх: прыжок","mob.tut.crouch":"Кнопка со стрелкой вниз: присесть. Двойное касание: ползти","mob.tut.use":"Когда рядом что-то можно сделать, над кнопками появится кнопка с действием","mob.tut.skip":"Пропустить","tab.controls":"Управление","mob.set.title":"Управление","mob.set.sens":"Чувствительность обзора","mob.set.inv":"Инверсия по вертикали","mob.set.size":"Размер кнопок","mob.set.alpha":"Прозрачность кнопок","mob.set.mirror":"Кнопки слева, стик справа","mob.set.text":"Размер текста","mob.set.on":"вкл","mob.set.off":"выкл","mob.set.reset":"Сбросить управление","mob.lost.title":"Картинка остановилась","mob.lost.sub":"Видеокарта сбросила игру. Прогресс сохранён на входе в последнюю комнату","mob.lost.restart":"Перезапустить","mob.lost.wait":"Восстанавливаю картинку…"},N_={"mob.mock.zone.move":"stick: wherever your thumb lands","mob.mock.zone.look":"look: drag","mob.mock.verb.use":"Open","mob.mock.verb.use.sub":"trade terminal","mob.mock.verb.wheel":"Turn","mob.mock.verb.wheel.sub":"keep holding","mob.mock.crouch.tag":"on","mob.btn.grab":"Grab","mob.btn.throw":"Throw","mob.btn.put":"Put down","mob.btn.use":"Interact","mob.btn.off":"Let go","mob.btn.hold":"hold","mob.tag.crouch":"on","mob.tag.crawl":"crawl","mob.start.title":"Tap to start","mob.start.sub":"This tap turns on sound and full screen","mob.resume":"Tap to continue","mob.rotate.title":"Rotate your device","mob.rotate.sub":"DRIFT is played in landscape","mob.a2hs":"Full screen in Safari: tap Share, then Add to Home Screen, and open the game from there","mob.a2hs.close":"Got it","mob.inapp":"For full screen, open the game with the ▶️ button in the bot or in Safari","mob.tut.move":"Stick on the left: put your thumb down and slide to walk. All the way: run","mob.tut.look":"Right half of the screen: drag to look around","mob.tut.jump":"Button pointing up: jump","mob.tut.crouch":"Button pointing down: crouch. Double tap: crawl","mob.tut.use":"When there is something to do nearby, a button with the action appears above the others","mob.tut.skip":"Skip","tab.controls":"Controls","mob.set.title":"Controls","mob.set.sens":"Look sensitivity","mob.set.inv":"Invert vertical look","mob.set.size":"Button size","mob.set.alpha":"Button opacity","mob.set.mirror":"Buttons left, stick right","mob.set.text":"Text size","mob.set.on":"on","mob.set.off":"off","mob.set.reset":"Reset controls","mob.lost.title":"The picture stopped","mob.lost.sub":"The graphics card reset the game. Progress is saved at the entrance to the last room","mob.lost.restart":"Restart","mob.lost.wait":"Restoring the picture…"},Hc={ru:{grip:"Захват",cut:"Резак",weld:"Сварка",toWeld:"Режим: рез",toCut:"Режим: сварка",snap:"отпусти: встанет на место среза",seam:"стык, можно варить",seamed:"сварено",refuse:{мелко:"слишком мелко","много кусков":"слишком много кусков"},hint:"WASD ход · мышь взгляд · F инструмент · R рез или сварка · ЛКМ действие · Q бросок · E взаимодействие",dead:"нет питания",close:"E или касание: закрыть",dying:"Люк открылся. Начать сначала.",touch:"слева ход, справа взгляд, Резак - срезать болты панелей, бросок на люк - проверить его",v:{open:"Открыть",shut:"Закрыть",breaker:"Рубильник",read:"Читать"}},en:{grip:"Grab",cut:"Cutter",weld:"Welder",toWeld:"Mode: cut",toCut:"Mode: weld",snap:"release: it fits back on the cut",seam:"seam, weld it",seamed:"welded",refuse:{мелко:"too small to cut","много кусков":"too many pieces"},hint:"WASD move · mouse look · F tool · R cut or weld · LMB act · Q throw · E use",dead:"no power",close:"E or tap to close",dying:"The hatch opened. Starting over.",touch:"left side moves, right side looks, Cutter cuts panel bolts, throw something on a hatch to test it",v:{open:"Open",shut:"Close",breaker:"Breaker",read:"Read"}}},Gc="drift.room.hint.v1",Vc="drift.mob.tut.v1";function U_(n,e,{fps:t=!1,input:i,coarse:s=!1,sim:r=null}={}){const a=Hc[e]||Hc.ru,o=n.createElement("div");o.id="rhud",o.innerHTML=`<div id="rx"></div><div id="rtgt"></div><div id="rbar"><i></i></div><div id="rtool"></div><div id="rhelp">${a.hint}</div>
    <div id="rnote" class="panel" hidden><div id="rnotet"></div><div id="rnotec">${a.close}</div></div><div id="rflash"></div><div id="rmsg" hidden></div>
    <div id="rhint" hidden></div><button id="rmode" type="button">${a.toWeld}</button><pre id="rfps" ${t?"":"hidden"}></pre>`,n.body.appendChild(o);const c=M=>o.querySelector("#"+M),l=n.createElement("style");l.textContent=`#rhud{position:fixed;inset:0;pointer-events:none;font:13px/1.35 system-ui,sans-serif;color:#cfe2ff;z-index:5}
  #rx{position:absolute;left:50%;top:50%;width:6px;height:6px;margin:-3px;border-radius:50%;background:#e6f0ff;box-shadow:0 0 0 1px #000a}
  #rtgt{position:absolute;left:50%;top:calc(50% + 16px);transform:translateX(-50%);padding:2px 8px;background:#0008;border-radius:3px;white-space:nowrap}
  #rtgt:empty{display:none}
  #rbar{position:absolute;left:50%;top:calc(50% + 42px);width:120px;height:4px;margin-left:-60px;background:#0008;display:none}#rbar i{display:block;height:100%;width:0;background:#ffb060}
  #rtool{position:absolute;right:14px;bottom:14px;padding:5px 10px;background:#0009;border:1px solid #84cbcd;border-radius:4px}
  #rhelp{position:absolute;left:50%;bottom:14px;transform:translateX(-50%);padding:5px 10px;background:#0007;border-radius:4px;white-space:nowrap;font-size:12px}
  #rnote{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:min(440px,86vw);padding:20px 22px;background:#e8e0c8;color:#2a2a33;font:16px/1.5 Georgia,serif;border-radius:3px;box-shadow:0 6px 40px #000c;pointer-events:auto}
  #rnotec{margin-top:12px;font:12px system-ui;color:#665}
  #rflash{position:absolute;inset:0;background:#ffd8a0;opacity:0}
  #rmsg{position:absolute;left:50%;top:30%;transform:translateX(-50%);padding:8px 14px;background:#200a;border:1px solid #f64;border-radius:4px}
  #rhint{position:absolute;left:50%;top:max(12px,env(safe-area-inset-top,0px));transform:translateX(-50%);width:max-content;max-width:calc(100vw - 172px);padding:8px 14px;background:rgba(6,10,15,.86);border:1px solid #84cbcd;border-radius:6px;color:#e9f4f4;font:500 13px/1.35 system-ui,sans-serif;text-align:center}
  #rfps{position:absolute;left:8px;top:8px;margin:0;padding:5px 8px;font:600 11px/1.35 ui-monospace,monospace;color:#84cbcd;background:rgba(7,4,15,.75);border:1px solid #d951ef;border-radius:4px;white-space:pre}
  #rfps[hidden],#rnote[hidden],#rmsg[hidden],#rhint[hidden]{display:none}
  #rmode{display:none}#rhud.mob #rmode{display:block;position:absolute;left:50%;bottom:max(12px,env(safe-area-inset-bottom,0px));transform:translateX(-50%);min-height:48px;padding:0 16px;border-radius:24px;border:1.5px solid rgba(223,230,238,.5);background:rgba(6,10,15,.62);color:#e9f4f4;font:600 14px system-ui,sans-serif;pointer-events:auto;touch-action:none}
  #rhud.mob #rmode.weld{border-color:#ffb060}
  #rhud.mob #rhelp,#rhud.mob #rtool{display:none}
  #ui{position:fixed;inset:0;pointer-events:none;z-index:6;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}
  #ui #thud .kck,#ui #thud .pz,#ui #thud .hpb{display:none}#ui #thud .fsb{right:var(--R)}
  html,body,canvas{touch-action:none;overscroll-behavior:none}`,n.head.appendChild(l);const f=n.createElement("div");f.id="ui",n.body.appendChild(f);const u=e==="en"?N_:I_,d=(()=>{try{return localStorage}catch{return null}})(),h={getItem:M=>M===Vc?"1":d?d.getItem(M):null,setItem:(M,A)=>{M!==Vc&&d&&d.setItem(M,A)}},p=n.documentElement,_=()=>!!(p.requestFullscreen&&n.fullscreenEnabled&&!n.fullscreenElement),g=D_(f,M=>u[M]??M,{input:i,onPause:()=>{},onFull:()=>{const M=p.requestFullscreen&&p.requestFullscreen();M&&M.catch&&M.catch(()=>{})},store:h,sim:r});g.setFull(_()),n.addEventListener("fullscreenchange",()=>g.setFull(_()));const m=M=>{const A=M==="touch";f.classList.toggle("mob",A),o.classList.toggle("mob",A),n.documentElement.dataset.roomInput=M};if(m(i.device),i.onDevice(m),s){let M=!1;try{M=!!(d&&d.getItem(Gc))}catch{}if(!M){const A=c("rhint");A.textContent=a.touch,A.hidden=!1,setTimeout(()=>{A.hidden=!0},14e3);try{d&&d.setItem(Gc,"1")}catch{}}}let v=!1;const T={root:o,ui:f,touch:g,tool(M,A){c("rtool").textContent=M==="cut"?A==="weld"?a.weld:a.cut:a.grip,c("rmode").textContent=A==="weld"?a.toCut:a.toWeld,c("rmode").classList.toggle("weld",A==="weld")},onMode(M){c("rmode").addEventListener("click",M)},target(M,A,S){const y=M?M+(S?" · "+a.dead:A&&i.device!=="touch"?" · E: "+A.toLowerCase():""):"";c("rtgt").textContent!==y&&(c("rtgt").textContent=y)},bar(M){const A=c("rbar");A.style.display=M>0&&M<1?"block":"none",A.firstChild.style.width=Math.round(M*100)+"%"},note(M){v=!!M,c("rnote").hidden=!M,c("rnotet").textContent=M||""},get noteOpen(){return v},flash(M){c("rflash").style.opacity=String(Math.min(.85,M))},msg(M){const A=c("rmsg");A.hidden=!M,A.textContent=M||""},fps(M){c("rfps").textContent=M},L:a};return c("rnote").addEventListener("click",()=>T.note("")),T}const Wc={ru:{wall:"стена",floor:"пол",ceil:"потолок",stub:"стена тамбура",door:"дверь",glass:"окно",breaker:"щиток",screen:"табло",note:"записка",cabinet:"шкаф",shelf:"стеллаж",pipe:"труба",crate:"ящик",crateL:"большой ящик",tank:"баллон",top:"столешница",leg:"ножка стола",leaf:"дверца шкафа",pallet:"поддон",plate:"снятая панель",plank:"полка",sheet:"лист обшивки",scrap:"обломок",piece:"{s}, кусок",hatch:"люк {n}",bolt:"болт панели",panel:"панель",vent:"вентрешётка",ventBolt:"винт решётки",cable:"кабель"},en:{wall:"wall",floor:"floor",ceil:"ceiling",stub:"passage wall",door:"door",glass:"window",breaker:"breaker",screen:"screen",note:"note",cabinet:"cabinet",shelf:"rack",pipe:"pipe",crate:"crate",crateL:"large crate",tank:"gas tank",top:"table top",leg:"table leg",leaf:"cabinet door",pallet:"pallet",plate:"loose panel",plank:"shelf",sheet:"plating sheet",scrap:"scrap",piece:"{s}, piece",hatch:"hatch {n}",bolt:"panel bolt",panel:"panel",vent:"vent grille",ventBolt:"grille screw",cable:"cable"}};function F_(n,e,t,i,s){if(!i)return"";const r=Wc[t]||Wc.ru,a=o=>{const c=((e.texts||{})[t]||{})["name."+o];return typeof c=="string"?c:""};if(i.kind==="hatch")return a(i.id)||r.hatch.replace("{n}",String(i.number));if(i.kind==="bolt"||i.kind==="plate"){const o=n.panels.find(l=>l.id===i.id),c=o&&o.panel==="vent";return i.kind==="bolt"?c?r.ventBolt:r.bolt:a(i.id)||(c?r.vent:r.panel)}if(i.kind==="cable")return a(i.id)||r.cable;if(i.kind==="note")return a(i.id)||r.note;if(i.kind==="part"){const o=String(i.id).split("#")[0],c=a(o)||r[s&&s.get(i.id)]||"";return c&&o!==i.id?r.piece.replace("{s}",c):c}return i.kind==="static"&&(a(i.id)||r[i.box?i.box.kind:""])||""}const z_={g:14,gBody:9.8,jumpH:1.15,stand:1.3,crouch:.72,eye:1.2,eyeCrouch:.66,step:.28,ledge:.12,crouchSpeed:.5,crawl:Oa.body,eyeCrawl:Oa.eye,crawlSpeed:Oa.speed,squeeze:3},Xc=Object.assign({"../rooms/ring.sec07.corridor.json":()=>Va(()=>import("./ring.sec07.corridor-L7GKCMCB.js"),[],import.meta.url),"../rooms/ring.sec07.galley.json":()=>Va(()=>import("./ring.sec07.galley-DmIsS2DK.js"),[],import.meta.url)}),on=new URLSearchParams(location.search),Ni=document.documentElement,O_=on.get("room")||"ring.sec07.galley",Ir=on.get("lang")==="en"?"en":"ru",qc=on.get("fps")==="1",Ga=on.get("bench")==="1",Nr=on.get("phys")==="box"?"box":"rapier",Uo=on.get("touch")==="1"||on.get("touch")!=="0"&&matchMedia("(pointer: coarse)").matches,Is=["high","medium","lite"].includes(on.get("q"))?on.get("q"):Uo?"lite":"high",k_=Math.max(0,Math.min(200,parseInt(on.get("pieces")||"0",10)||0)),Ns=new Set((on.get("mut")||"").split(",").filter(Boolean));Ni.dataset.room="loading";const B_=n=>{Ni.dataset.room="error",Ni.dataset.roomError=String(n&&n.message||n);const e=document.getElementById("err");e&&(e.hidden=!1,e.textContent="Комната не загрузилась: "+Ni.dataset.roomError),console.error(n)};async function H_(n){const e=`../rooms/${n}.json`;if(!Xc[e])throw new Error("нет комнаты "+n);const t=await Xc[e]();return JSON.parse(JSON.stringify(t.default||t))}async function G_(){const n=document.createElement("canvas");document.body.appendChild(n);const e=new Ug({canvas:n,antialias:!1,powerPreference:"high-performance",preserveDrawingBuffer:Ga}),t={lost:0,restored:0};n.addEventListener("webglcontextlost",Z=>{t.lost++,Ni.dataset.roomGlLost=String(t.lost),Z.preventDefault()}),n.addEventListener("webglcontextrestored",()=>{t.restored++}),e.shadowMap.enabled=!0,e.shadowMap.type=ks,e.toneMapping=Vn,e.autoClear=!1,e.info.autoReset=!1;const i={...Sx[Is]},s=Is==="lite"?Math.min(devicePixelRatio,1.5)*.8:Math.min(devicePixelRatio,2);e.setPixelRatio(s),e.setSize(innerWidth,innerHeight);const r=new gu;r.fog=new $o(724242,.012);const a=new Zs(e),o=a.fromScene(new Fg,.04).texture;a.dispose(),r.environment=Ns.has("dark")?null:o,r.environmentIntensity=.06;const c=new zd(16763024,2365970,Ns.has("dark")?0:.2);r.add(c);const l=new _n(70,innerWidth/innerHeight,.05,200);r.add(l);const f=bx(e,r,l,null);f.configure({msaa:i.msaa,bloom:i.bloom,hdr:i.hdr,prepass:!1,ldr:!1}),f.uniforms.uTint.value.set(1.05,1,.93);const u=Ax({coarse:Uo});Rx(window,document,u);const d=(on.get("sa")||"").split(",").map(Number),h=U_(document,Ir,{fps:qc,input:u,coarse:Uo,sim:d.length===4&&d.every(Number.isFinite)?d:null});Ga&&on.get("hud")!=="1"&&(h.root.style.display="none",h.ui.style.display="none");let p=null;async function _(Z,Y=null){const Se=performance.now(),b=Jx(Z);if(b.length)throw new Error("схема: "+b.slice(0,3).map(Ne=>Ne.path+" "+Ne.msg).join("; "));const C=Gx(Z),[te,W,U]=C.size,j={x0:-2.4,x1:te+2.4,z0:-2.4,z1:U+2.4,h:W},Q=await f_(Nr,{bounds:j,bind:!1});Wu({PH:z_,playerR:Sn.r,spawn:{x:C.spawn.x,z:C.spawn.z,yaw:C.spawn.yaw,pitch:0},speed:3.2,boundsAt:()=>j,placeAt:()=>!0,roomHeight:()=>W});const H=S_(C,Z,Q,{mut:Ns,pieces:k_}),L=C_(C,Z,{scene:r,lang:Ir,tier:Ns.has("dark")?{...i,spots:0,points:0}:i});Ns.has("dark")&&L.darken(),L.hide((on.get("hide")||"").split(",").filter(Boolean));const oe=fx(C.spawn.x,C.spawn.z);oe.yaw=C.spawn.yaw,oe.pitch=-.08,oe.respawn=()=>{oe.x=C.spawn.x,oe.z=C.spawn.z,oe.y=0,oe.vy=0,oe.yaw=C.spawn.yaw,h.msg(h.L.dying),setTimeout(()=>h.msg(""),2500)},Y&&H.restore(Y);const Me=performance.now()-Se;return{room:Z,C,phys:Q,sys:H,view:L,pl:oe,buildMs:Me}}function g(){p&&(p.view.dispose(),p.phys.dispose(),p=null)}let m="grip",v=null;const T=Dx();h.tool(m);let M="cut";const A=Z=>{M=Z,h.tool(m,M)};h.onMode(()=>A(M==="cut"?"weld":"cut"));const S={press:new Set,fire:!1,rmb:!1},y=(Z,Y)=>{p&&(p.pl.yaw-=Z*.0022,p.pl.pitch=Math.max(-1.45,Math.min(1.45,p.pl.pitch-Y*.0022)))};addEventListener("keydown",Z=>{Z.repeat||(u.setDevice("kbm"),u.keyDown(Z.code),Z.code==="KeyR"&&(m!=="cut"&&(m="cut"),A(M==="cut"?"weld":"cut")),["Space","KeyQ","KeyF","KeyE"].includes(Z.code)&&Z.preventDefault())}),addEventListener("keyup",Z=>u.keyUp(Z.code)),addEventListener("pointermove",Z=>{Z.pointerType==="mouse"&&(Z.movementX||Z.movementY)&&u.setDevice("kbm")},{passive:!0}),n.addEventListener("mousedown",Z=>{if(u.device!=="touch"){if(h.noteOpen){h.note("");return}if(document.pointerLockElement!==n){try{const Y=n.requestPointerLock();Y&&Y.catch&&Y.catch(()=>{})}catch{}return}Z.button===0&&(S.fire=!0,S.press.add("fire")),Z.button===2&&(S.press.add("throw"),S.rmb=!0)}}),addEventListener("mouseup",Z=>{Z.button===0&&(S.fire=!1),Z.button===2&&(S.rmb=!1)}),addEventListener("blur",()=>{S.fire=!1,S.rmb=!1}),addEventListener("contextmenu",Z=>Z.preventDefault()),addEventListener("mousemove",Z=>{document.pointerLockElement===n&&y(Z.movementX,Z.movementY)}),addEventListener("resize",()=>{e.setSize(innerWidth,innerHeight),l.aspect=innerWidth/innerHeight,l.updateProjectionMatrix(),f.resize()});const w=Z=>[Z.x,Z.y+Z.eye,Z.z],N=Z=>{const Y=Math.cos(Z.pitch);return[-Math.sin(Z.yaw)*Y,Math.sin(Z.pitch),-Math.cos(Z.yaw)*Y]},F=Z=>F_(p.C,p.room,Ir,Z,p.sys.S.partKind),k=Z=>{const Y=p.sys.usable(Z);return Y?h.L.v[Y]:""},G={frame:[],phys:[],gap:[]},ce=(Z,Y)=>{Z.push(Y),Z.length>240&&Z.shift()},O=Z=>{if(!Z.length)return 0;const Y=Z.slice().sort((Se,b)=>Se-b);return Y[Math.floor(.95*(Y.length-1))]},ne=8,ue={cut:null,blast:null};let re=0;function Ee(Z,Y){const Se=p.sys.S;for(;re<Se.evN;re++){const b=Se.events[Se.events.length-(Se.evN-re)];if(!b)continue;const C=b.kind==="explode"?"blast":b.kind==="joint_cut"||b.kind==="split"?"cut":"";C&&(ue[C]={until:Se.t+ne,f:ue[C]&&Se.t<ue[C].until?ue[C].f:[],p:ue[C]&&Se.t<ue[C].until?ue[C].p:[]})}for(const b of Object.values(ue))b&&Se.t<b.until&&b.f.length<2e3&&(b.f.push(Z),b.p.push(Y))}function he(Z){if(!p)return;const{sys:Y,pl:Se}=p;u.frame(S,y),T.sense(S),h.noteOpen&&((S.press.has("e")||S.fireNew)&&h.note(""),S.press.clear(),S.fire=!1);for(const He of T.modes(S,m))m=He,h.tool(m,M);Se.input.forward=S.fwd||0,Se.input.strafe=S.strafe||0,Se.input.jump=S.press.has("jump"),Se.input.crouch=!!S.crouch,Se.input.crawl=!!S.crawl,Se.speed=(S.run?5.2:3.2)*(Y.S.held?Math.max(.35,1-.45*(Y.S.partSm.get(Y.S.held)??.3)):1),_e(Z);const b=w(Se),C=N(Se);if(v=Y.aim(b,C,m==="cut"?2.6:2.3),S.press.has("e")&&Y.use(v)==="запись"){const Xe=p.C.prefabOf[v.id];h.note((p.room.texts[Ir]||p.room.texts.ru)[Xe.text])}const te=T.grip(S,{able:m==="grip"&&!h.noteOpen,holding:!!(Y.S.held||Y.S.noteHeld),t:Y.S.t}),W=()=>Y.S.noteHeld?Y.notes.stick(v,C):Y.drop();te==="take"?Y.grab(v)&&T.took(Y.S.t):te==="drop"&&W();const U=T.throw(S,{holding:!!(Y.S.held||Y.S.noteHeld),t:Y.S.t});U&&(Y.S.noteHeld?W():Y.throwHeld(C,U));const j=T.cutting(S,m)&&v?Y.cut(v,Z,{o:b,d:C},M):"",Q=Y.step(Z,Se);ce(G.phys,Q),S.press.clear();const H=!!(v&&v.kind==="static"&&Y.S.doors.has(v.id)&&!Y.isOn(v.id)),L=F(v),oe=k(v),Me=Y.canGrab(v),Ne=Y.S.held&&Y.cutter.snapPose(Y.S.held),Ae=m==="cut"&&M==="weld"&&v&&v.kind==="part"&&Y.cutter.canWeld(v.id)&&Y.cutter.partner(v),et=Ne?h.L.snap:Ae?L+" · "+(Y.cutter.welded(v)?h.L.seamed:h.L.seam):Y.S.refused&&Y.S.t-Y.S.refused.t<1.2&&S.fire?h.L.refuse[Y.S.refused.why]:L;return h.target(et,oe,H),h.touch.update({act:oe?"e":Me?"grip":v&&Y.canCut(v)?"cut":"",text:oe||(Me?L:""),hold:!1,ring:0,held:!!(Y.S.held||Y.S.noteHeld),ladder:!1,heat:0,over:!1,kickCd:0,slow:v&&v.kind==="bolt"?.55:1,hp:1}),h.bar(j?Y.progress(v):0),h.flash(Y.S.flash),Q}function _e(Z){const{sys:Y,pl:Se}=p,b=Y.playerCol(Se);if(dx(Se,b.col,Z,b.extra,b.soft),Se.kx||Se.kz){const C=Se.x,te=Se.z;Se.x+=Se.kx*Z,Se.z+=Se.kz*Z,ta(Se,C,te,[b.col.boxes,b.extra],[],Sn.r,W=>W.y1>Se.y+Sn.step&&W.y0<Se.y+Se.h),Se.kx*=Math.pow(.05,Z),Se.kz*=Math.pow(.05,Z)}}function Te(Z){if(!p)return;const{pl:Y,view:Se}=p,b=w(Y);return Oi(b[0],b[1],b[2],l.position),ea(b[2],l.quaternion).multiply(new Kt().setFromEuler(new tn(Y.pitch,Y.yaw,0,"YXZ"))),Se.update(p.sys,Z,b,Y),e.info.reset(),f.render(),e.info.render}let I=0,de=0,q=0,pe=0;function ve(Z){if(de++,Z-I<500)return;q=de*1e3/(Z-I),de=0,I=Z;const Y=p.phys.stats(),Se=p.view.stats(),b=performance.memory?Math.round(performance.memory.usedJSHeapSize/1048576)+" МБ":"н/д",C=(W,U)=>{const j=ue[W];return j&&j.f.length?`
после ${U} (${ne} с): кадр p95 ${O(j.f).toFixed(1)}, худший ${Math.max(...j.f).toFixed(1)} мс; физика p95 ${O(j.p).toFixed(2)}, худший ${Math.max(...j.p).toFixed(2)} мс`:""},te=`${p.room.id} · ${Nr} · ${Is}
кадр ${q.toFixed(0)} к/с, p95 ${O(G.frame).toFixed(1)} мс · физика p95 ${O(G.phys).toFixed(2)} мс
тела: не спят ${Y.awake}, спят ${Y.asleep} из ${Y.total} · куски ${p.sys.S.pieces.size} из ${p.sys.cutter.cap}, слито ${p.sys.S.merged.length}
вызовы ${pe}, треуг. ${Se.tris}, память ${b}, геом. ${e.info.memory.geometries}, текст. ${e.info.memory.textures}
кадр в кадр p95 ${O(G.gap).toFixed(1)} мс, экран ${innerWidth}x${innerHeight} x${devicePixelRatio.toFixed(2)}${C("cut","реза")}${C("blast","взрыва")}`;h.fps(te),Ni.dataset.roomFps=q.toFixed(1)}const Ie=on.get("src");p=await _(Ie&&/^[a-z0-9_./-]+\.json$/i.test(Ie)&&!Ie.includes("..")?await(await fetch(Ie,{cache:"no-store"})).json():await H_(O_)),h.note("");let Pe=performance.now(),Le=Pe,Je=0;if(!Ga){const Z=Y=>{const Se=Math.min(.05,(Y-Pe)/1e3);Pe=Y;const b=performance.now();ce(G.gap,Y-Le),Le=Y;const C=he(Se);Je+=Se;const te=Te(Je);pe=te?te.calls:0;const W=performance.now()-b;ce(G.frame,W),Ee(W,C||0),qc&&ve(Y),requestAnimationFrame(Z)};requestAnimationFrame(Z)}const Ce=1/60,Ye={get id(){return p&&p.room.id},state(){const Z=p.sys.S;return{id:p.room.id,phys:Nr,tier:Is,t:+Z.t.toFixed(2),player:{x:+p.pl.x.toFixed(3),y:+p.pl.y.toFixed(3),z:+p.pl.z.toFixed(3),yaw:+p.pl.yaw.toFixed(3),pitch:+p.pl.pitch.toFixed(3),crouch:!!p.pl.crouch},tool:m,held:Z.held,target:v&&{kind:v.kind,id:v.id},lit:p.C.lights.map(Y=>[Y.id,p.sys.isOn(Y.id)]),joints:[...Z.joints.keys()],cables:[...Z.cablesCut],windows:[...Z.windows].map(([Y,Se])=>[Y,Se.broken]),p:+Z.p.toFixed(3),doors:[...Z.doors].map(([Y,Se])=>[Y,+Se.open.toFixed(2)]),pieces:[...Z.pieces.keys()],merged:Z.merged.map(Y=>Y.id),noteHeld:Z.noteHeld,notes:[...Z.notes.values()].map(Y=>[Y.id,Y.on]),panels:p.C.panels.map(Y=>[Y.id,p.sys.panels.view(Y.id).plate]),burned:Z.burned,ejected:Z.ejected,deaths:Z.deaths,events:Z.events.slice(-40),bodies:p.phys.stats()}},put(Z,Y){const Se=p.pl;if(Se.x=Z[0],Se.z=Z[1],Se.y=0,Se.vy=0,Y){const b=w(Se),C=[Y[0]-b[0],Y[1]-b[1],Y[2]-b[2]];Se.yaw=Math.atan2(-C[0],-C[2]),Se.pitch=Math.atan2(C[1],Math.hypot(C[0],C[2]))}return Ye.aim()},aim(){return v=p.sys.aim(w(p.pl),N(p.pl),m==="cut"?2.6:2.3),v&&{kind:v.kind,id:v.id,t:+v.t.toFixed(2),i:v.i}},tool(Z,Y){return m=Z,Y&&(M=Y),h.tool(Z,M),m},act(Z,Y=0){const Se=()=>w(p.pl),b=()=>N(p.pl);if(Z==="cut"){m="cut";let C=0;for(let te=0;te<Math.round(Y/Ce);te++)v=p.sys.aim(Se(),b(),2.6),v&&(p.sys.cut(v,Ce,{o:Se(),d:b()},M),C++),p.sys.step(Ce,p.pl);return C}return Z==="grab"?(m="grip",v=p.sys.aim(Se(),b(),2.3),p.sys.grab(v)):Z==="use"?(v=p.sys.aim(Se(),b(),2.3),p.sys.use(v)):Z==="throw"?p.sys.throwHeld(b(),Y||1):null},advance(Z){const Y=Math.round(Z/1e3/Ce);for(let Se=0;Se<Y;Se++)p.pl.input.forward=0,p.pl.input.strafe=0,p.pl.input.jump=!1,_e(Ce),p.sys.step(Ce,p.pl);return Je+=Y*Ce,Y},drive(Z,Y={}){const Se=Math.max(1,Math.round(Z/1e3/Ce)),b={fwd:"KeyW",back:"KeyS",left:"KeyA",right:"KeyD",jump:"Space",crouch:"KeyC"},C=Object.keys(b).filter(W=>Y[W]);for(const W of C)u.keyDown(b[W]);Y.fire&&(S.fire=!0,S.press.add("fire"));for(const W of Y.press||[])u.press(W);const te=W=>{const U=w(p.pl),j=[W[0]-U[0],W[1]-U[1],W[2]-U[2]];p.pl.yaw=Math.atan2(-j[0],-j[2]),p.pl.pitch=Math.atan2(j[1],Math.hypot(j[0],j[2]))};for(let W=0;W<Se;W++){if(Y.from){const U=Se>1?W/(Se-1):1;te(Y.to?Y.from.map((j,Q)=>j+(Y.to[Q]-j)*U):Y.from)}he(Ce)}for(const W of C)u.keyUp(b[W]);return Y.fire&&(S.fire=!1),Je+=Se*Ce,Se},frame(){const Z=Te(Je);return{calls:Z.calls,triangles:Z.triangles}},idFrame(){const Z=p.view.keyMeshes(),Y=[],Se=[...Z.keys()],b=new Map;r.traverse(oe=>{(oe.isMesh||oe.isInstancedMesh)&&Y.push([oe,oe.material,oe.visible])});const C=new fs({color:0});for(const[oe]of Y)oe.material=C;Se.forEach((oe,Me)=>{const Ne=new je().setHSL(Me/Se.length,1,.5),Ae=new fs({color:Ne});b.set(oe,Ne);for(const et of Z.get(oe))et.visible&&(et.material=Ae)});const te=r.fog;r.fog=null;const W=new Ze;e.getDrawingBufferSize(W);const U=new hn(Math.max(1,W.x>>1),Math.max(1,W.y>>1));e.setRenderTarget(U),e.setClearColor(0,1),e.clear();const j=w(p.pl);Oi(j[0],j[1],j[2],l.position),ea(j[2],l.quaternion).multiply(new Kt().setFromEuler(new tn(p.pl.pitch,p.pl.yaw,0,"YXZ"))),p.view.update(p.sys,Je,j,p.pl);for(const[oe]of Y)oe.isMesh&&oe.material===C&&oe.material.transparent&&(oe.visible=!1);e.render(r,l);const Q=new Uint8Array(U.width*U.height*4);e.readRenderTargetPixels(U,0,0,U.width,U.height,Q),e.setRenderTarget(null),U.dispose(),r.fog=te;for(const[oe,Me,Ne]of Y)oe.material=Me,oe.visible=Ne;const H=Object.fromEntries(Se.map(oe=>[oe,0])),L=Se.map(oe=>b.get(oe)).map(oe=>[oe.r*255,oe.g*255,oe.b*255]);for(let oe=0;oe<Q.length;oe+=4){if(Q[oe]+Q[oe+1]+Q[oe+2]<30)continue;let Me=-1,Ne=1e9;L.forEach((Ae,et)=>{const He=Math.abs(Ae[0]-Q[oe])+Math.abs(Ae[1]-Q[oe+1])+Math.abs(Ae[2]-Q[oe+2]);He<Ne&&(Ne=He,Me=et)}),Me>=0&&Ne<60&&H[Se[Me]]++}return{px:H,total:U.width*U.height}},passCalls(){Te(Je),e.info.reset(),e.setRenderTarget(null);const Z=[e.shadowMap.autoUpdate,e.shadowMap.needsUpdate];e.shadowMap.autoUpdate=!1,e.shadowMap.needsUpdate=!1;for(const Se of p.view.pool.spots)Se.shadow.needsUpdate=!1;e.render(r,l),[e.shadowMap.autoUpdate,e.shadowMap.needsUpdate]=Z;const Y={calls:e.info.render.calls,triangles:e.info.render.triangles};return Te(Je),Y},stats(){const Z=p.phys.stats(),Y=p.view.stats();return{phys:Nr,tier:Is,bodies:Z,tris:Y.tris,meshes:Y.meshes,buildMs:+p.buildMs.toFixed(1),geometries:e.info.memory.geometries,textures:e.info.memory.textures,heapMB:performance.memory?+(performance.memory.usedJSHeapSize/1048576).toFixed(1):null,physP95:+O(G.phys).toFixed(3),frameP95:+O(G.frame).toFixed(2),fps:q?+q.toFixed(1):null}},nan(){const Z=[];return r.updateMatrixWorld(!0),r.traverse(Y=>{Y.matrixWorld.elements.some(Se=>!Number.isFinite(Se))&&Z.push(Y.type+":"+(Y.userData.part||Y.userData.door||Y.userData.hatch||Y.name||""))}),{objects:Z.slice(0,20),cam:l.matrixWorld.elements.every(Number.isFinite),lights:p.view.pool.spots.concat(p.view.pool.points).map(Y=>[+Y.intensity.toFixed(2),Y.position.toArray().every(Number.isFinite)])}},gl(){return{lost:t.lost,restored:t.restored,programs:(e.info.programs||[]).length,shadows:p.view.pool.spots.map(Z=>Z.shadow.needsUpdate),calls:pe}},perfReset(){G.frame.length=0,G.phys.length=0},perfRun(Z=120){const Y=[];for(let Se=0;Se<Z;Se++)he(Ce),Je+=Ce,Y.push(G.phys[G.phys.length-1]);return{physP95:+O(Y).toFixed(3),physMax:+Math.max(...Y).toFixed(3)}},frameRun(Z=10){const Y=[],Se=[],b=e.getContext(),C=new Uint8Array(4);for(let W=0;W<Z;W++){const U=performance.now();he(Ce),Je+=Ce;const j=Te(Je);Se.push(performance.now()-U),b.readPixels(0,0,1,1,b.RGBA,b.UNSIGNED_BYTE,C),Y.push(performance.now()-U),pe=j.calls}const te=Y.slice().sort((W,U)=>W-U);return{frameP95:+O(Y).toFixed(1),frameP50:+te[Math.floor(Z/2)].toFixed(1),cpuP50:+Se.slice().sort((W,U)=>W-U)[Math.floor(Z/2)].toFixed(1),calls:pe}},cutMany(Z){const Y=p.sys.cutter,Se=p.sys.phys,b=p.sys.S;for(let C=0;C<400&&b.pieces.size<Z;C++){const te=Se.bodies().filter(U=>Y.canSplit(U)).map(U=>({id:U,h:Se.half(U)})).sort((U,j)=>j.h[0]*j.h[1]*j.h[2]-U.h[0]*U.h[1]*U.h[2]);if(!te.length)break;let W=!1;for(const{id:U,h:j}of te){const Q=j.indexOf(Math.max(...j)),H=[.25,.2,.15];if(H[Q]=1,Y.splitPart(U,H,0)){W=!0;break}}if(!W)break}return b.pieces.size},snapshot(){return JSON.stringify(p.sys.snapshot())},async reload(Z){const Y=p.room,Se={x:p.pl.x,z:p.pl.z,yaw:p.pl.yaw,pitch:p.pl.pitch},b=performance.now();g();const C=performance.now();return p=await _(Y,Z?JSON.parse(Z):null),Object.assign(p.pl,Se),Te(Je),{unloadMs:+(C-b).toFixed(1),loadMs:+(performance.now()-C).toFixed(1)}},hud:()=>({target:document.getElementById("rtgt").textContent,hint:document.getElementById("rhint").hidden?"":document.getElementById("rhint").textContent,note:document.getElementById("rnote").hidden?"":document.getElementById("rnotet").textContent}),sys:()=>p.sys};window.__room=Ye,Te(0),Ni.dataset.room="ready"}G_().catch(B_);
