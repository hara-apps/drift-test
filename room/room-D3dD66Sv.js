(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Yu="modulepreload",Ku=function(n,e){return new URL(n,e).href},ec={},_o=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let c=function(u){return Promise.all(u.map(p=>Promise.resolve(p).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const a=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),o=l?.nonce||l?.getAttribute("nonce");s=c(t.map(u=>{if(u=Ku(u,i),u in ec)return;ec[u]=!0;const p=u.endsWith(".css"),d=p?'[rel="stylesheet"]':"";if(i)for(let f=a.length-1;f>=0;f--){const v=a[f];if(v.href===u&&(!p||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const h=document.createElement("link");if(h.rel=p?"stylesheet":Yu,p||(h.as="script"),h.crossOrigin="",h.href=u,o&&h.setAttribute("nonce",o),document.head.appendChild(h),p)return new Promise((f,v)=>{h.addEventListener("load",f),h.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&r(l.reason);return e().catch(r)})};const Il="187",Ju=0,tc=1,Zu=2,Mr=1,ju=2,xr=3,xs=0,Rn=1,Li=2,qs=0,br=1,nc=2,ic=3,sc=4,Qu=5,Hs=100,ed=101,td=102,nd=103,id=104,sd=200,rd=201,od=202,ad=203,Gf=204,Vf=205,ld=206,cd=207,fd=208,ud=209,dd=210,hd=211,pd=212,md=213,gd=214,Na=0,Ua=1,za=2,Ar=3,Fa=4,ka=5,Oa=6,Ba=7,Nl=0,xd=1,vd=2,yi=0,Wf=1,Xf=2,qf=3,$f=4,Yf=5,Kf=6,Jf=7,Zf=300,Ys=301,Rr=302,$o=303,Yo=304,Cr=1e3,Ui=1001,Ha=1002,hn=1003,_d=1004,Or=1005,Dn=1006,Ko=1007,zi=1008,Ln=1009,jf=1010,Qf=1011,Pr=1012,Ul=1013,bi=1014,ri=1015,li=1016,zl=1017,Fl=1018,Ks=1020,eu=35902,tu=35899,nu=1021,iu=1022,xi=1023,es=1026,ji=1027,kl=1028,Ol=1029,vs=1030,Bl=1031,Hl=1033,yo=33776,Mo=33777,bo=33778,So=33779,Ga=35840,Va=35841,Wa=35842,Xa=35843,qa=36196,$a=37492,Ya=37496,Ka=37488,Ja=37489,Do=37490,Za=37491,ja=37808,Qa=37809,el=37810,tl=37811,nl=37812,il=37813,sl=37814,rl=37815,ol=37816,al=37817,ll=37818,cl=37819,fl=37820,ul=37821,dl=36492,hl=36494,pl=36495,ml=36283,gl=36284,Io=36285,xl=36286,yd=3200,No=0,Md=1,Di="",Pn="srgb",Uo="srgb-linear",zo="linear",qt="srgb",Jo=7680,bd=519,Sd=512,wd=513,Ed=514,su=515,Td=516,Ad=517,ru=518,ou=519,Rd=35044,rc="300 es",oi=2e3,Lr=2001;function Cd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Fo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Pd(){const n=Fo("canvas");return n.style.display="block",n}const oc={};function ac(...n){const e="THREE."+n.shift();console.log(e,...n)}function au(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function gt(...n){n=au(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ht(...n){n=au(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function wo(...n){const e=n.join(" ");e in oc||(oc[e]=!0,gt(...n))}function Ld(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Dd={[Na]:Na,[za]:Oa,[Fa]:Fa,[Ar]:ka,[Ua]:Ua,[Oa]:za,[Ba]:Ba,[ka]:Ar};class ys{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zo=Math.PI/180,ko=180/Math.PI;function Nr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]).toLowerCase()}function Pt(n,e,t){return Math.max(e,Math.min(t,n))}function Id(n,e){return(n%e+e)%e}function jo(n,e,t){return(1-t)*n+t*e}function Nd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Gl(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ud(n,e){if(e.constructor===Float32Array)return n;const t=Gl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function zd(n,e){if(e.constructor===Float32Array)return n;const t=Gl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}class ot{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,l){let o=i[s+0],c=i[s+1],u=i[s+2],p=i[s+3],d=r[a+0],h=r[a+1],f=r[a+2],v=r[a+3];if(p!==v||o!==d||c!==h||u!==f){let g=o*d+c*h+u*f+p*v;g<0&&(d=-d,h=-h,f=-f,v=-v,g=-g);let m=1-l;if(g<.9995){const _=Math.acos(g),R=Math.sin(_);m=Math.sin(m*_)/R,l=Math.sin(l*_)/R,o=o*m+d*l,c=c*m+h*l,u=u*m+f*l,p=p*m+v*l}else{o=o*m+d*l,c=c*m+h*l,u=u*m+f*l,p=p*m+v*l;const _=1/Math.sqrt(o*o+c*c+u*u+p*p);o*=_,c*=_,u*=_,p*=_}}e[t]=o,e[t+1]=c,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,s,r,a){const l=i[s],o=i[s+1],c=i[s+2],u=i[s+3],p=r[a],d=r[a+1],h=r[a+2],f=r[a+3];return e[t]=l*f+u*p+o*h-c*d,e[t+1]=o*f+u*d+c*p-l*h,e[t+2]=c*f+u*h+l*d-o*p,e[t+3]=u*f-l*p-o*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,l=Math.cos,o=Math.sin,c=l(i/2),u=l(s/2),p=l(r/2),d=o(i/2),h=o(s/2),f=o(r/2);switch(a){case"XYZ":this._x=d*u*p+c*h*f,this._y=c*h*p-d*u*f,this._z=c*u*f+d*h*p,this._w=c*u*p-d*h*f;break;case"YXZ":this._x=d*u*p+c*h*f,this._y=c*h*p-d*u*f,this._z=c*u*f-d*h*p,this._w=c*u*p+d*h*f;break;case"ZXY":this._x=d*u*p-c*h*f,this._y=c*h*p+d*u*f,this._z=c*u*f+d*h*p,this._w=c*u*p-d*h*f;break;case"ZYX":this._x=d*u*p-c*h*f,this._y=c*h*p+d*u*f,this._z=c*u*f-d*h*p,this._w=c*u*p+d*h*f;break;case"YZX":this._x=d*u*p+c*h*f,this._y=c*h*p+d*u*f,this._z=c*u*f-d*h*p,this._w=c*u*p-d*h*f;break;case"XZY":this._x=d*u*p-c*h*f,this._y=c*h*p-d*u*f,this._z=c*u*f+d*h*p,this._w=c*u*p+d*h*f;break;default:gt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],l=t[5],o=t[9],c=t[2],u=t[6],p=t[10],d=i+l+p;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-o)*h,this._y=(r-c)*h,this._z=(a-s)*h}else if(i>l&&i>p){const h=2*Math.sqrt(1+i-l-p);this._w=(u-o)/h,this._x=.25*h,this._y=(s+a)/h,this._z=(r+c)/h}else if(l>p){const h=2*Math.sqrt(1+l-i-p);this._w=(r-c)/h,this._x=(s+a)/h,this._y=.25*h,this._z=(o+u)/h}else{const h=2*Math.sqrt(1+p-i-l);this._w=(a-s)/h,this._x=(r+c)/h,this._y=(o+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,l=t._x,o=t._y,c=t._z,u=t._w;return this._x=i*u+a*l+s*c-r*o,this._y=s*u+a*o+r*l-i*c,this._z=r*u+a*c+i*o-s*l,this._w=a*u-i*l-s*o-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,l=this.dot(e);l<0&&(i=-i,s=-s,r=-r,a=-a,l=-l);let o=1-t;if(l<.9995){const c=Math.acos(l),u=Math.sin(c);o=Math.sin(o*c)/u,t=Math.sin(t*c)/u,this._x=this._x*o+i*t,this._y=this._y*o+s*t,this._z=this._z*o+r*t,this._w=this._w*o+a*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+s*t,this._z=this._z*o+r*t,this._w=this._w*o+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ae{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,l=e.z,o=e.w,c=2*(a*s-l*i),u=2*(l*t-r*s),p=2*(r*i-a*t);return this.x=t+o*c+a*p-l*u,this.y=i+o*u+l*c-r*p,this.z=s+o*p+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,l=t.y,o=t.z;return this.x=s*o-r*l,this.y=r*a-i*o,this.z=i*l-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qo.copy(this).projectOnVector(e),this.sub(Qo)}reflect(e){return this.sub(Qo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qo=new ae,lc=new cn;class yt{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,a,l,o,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,l,o,c)}set(e,t,i,s,r,a,l,o,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=l,u[3]=t,u[4]=r,u[5]=o,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],l=i[3],o=i[6],c=i[1],u=i[4],p=i[7],d=i[2],h=i[5],f=i[8],v=s[0],g=s[3],m=s[6],_=s[1],R=s[4],S=s[7],C=s[2],D=s[5],b=s[8];return r[0]=a*v+l*_+o*C,r[3]=a*g+l*R+o*D,r[6]=a*m+l*S+o*b,r[1]=c*v+u*_+p*C,r[4]=c*g+u*R+p*D,r[7]=c*m+u*S+p*b,r[2]=d*v+h*_+f*C,r[5]=d*g+h*R+f*D,r[8]=d*m+h*S+f*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],l=e[5],o=e[6],c=e[7],u=e[8];return t*a*u-t*l*c-i*r*u+i*l*o+s*r*c-s*a*o}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],l=e[5],o=e[6],c=e[7],u=e[8],p=u*a-l*c,d=l*o-u*r,h=c*r-a*o,f=t*p+i*d+s*h;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/f;return e[0]=p*v,e[1]=(s*c-u*i)*v,e[2]=(l*i-s*a)*v,e[3]=d*v,e[4]=(u*t-s*o)*v,e[5]=(s*r-l*t)*v,e[6]=h*v,e[7]=(i*o-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,l){const o=Math.cos(r),c=Math.sin(r);return this.set(i*o,i*c,-i*(o*a+c*l)+a+e,-s*c,s*o,-s*(-c*a+o*l)+l+t,0,0,1),this}scale(e,t){return wo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ea.makeScale(e,t)),this}rotate(e){return wo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ea.makeRotation(-e)),this}translate(e,t){return wo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ea.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ea=new yt,cc=new yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fc=new yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fd(){const n={enabled:!0,workingColorSpace:Uo,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===qt&&(s.r=Fi(s.r),s.g=Fi(s.g),s.b=Fi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===qt&&(s.r=$s(s.r),s.g=$s(s.g),s.b=$s(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Di?zo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Uo]:{primaries:e,whitePoint:i,transfer:zo,toXYZ:cc,fromXYZ:fc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pn},outputColorSpaceConfig:{drawingBufferColorSpace:Pn}},[Pn]:{primaries:e,whitePoint:i,transfer:qt,toXYZ:cc,fromXYZ:fc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pn}}}),n}const Nt=Fd();function Fi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $s(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ws;class kd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ws===void 0&&(ws=Fo("canvas")),ws.width=e.width,ws.height=e.height;const s=ws.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ws}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Fi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Fi(t[i]/255)*255):t[i]=Fi(t[i]);return{data:t,width:e.width,height:e.height}}else return gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Od=0;class Vl{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Nr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(ta(s[a].image)):r.push(ta(s[a]))}else r=ta(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ta(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?kd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(gt("Texture: Unable to serialize Texture."),{})}let Bd=0;const na=new ae;class bn extends ys{constructor(e=bn.DEFAULT_IMAGE,t=bn.DEFAULT_MAPPING,i=Ui,s=Ui,r=Dn,a=zi,l=xi,o=Ln,c=bn.DEFAULT_ANISOTROPY,u=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Nr(),this.name="",this.source=new Vl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=o,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(na).x}get height(){return this.source.getSize(na).y}get depth(){return this.source.getSize(na).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){gt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){gt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cr:e.x=e.x-Math.floor(e.x);break;case Ui:e.x=e.x<0?0:1;break;case Ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cr:e.y=e.y-Math.floor(e.y);break;case Ui:e.y=e.y<0?0:1;break;case Ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=Zf;bn.DEFAULT_ANISOTROPY=1;class Zt{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const o=e.elements,c=o[0],u=o[4],p=o[8],d=o[1],h=o[5],f=o[9],v=o[2],g=o[6],m=o[10];if(Math.abs(u-d)<.01&&Math.abs(p-v)<.01&&Math.abs(f-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(p+v)<.1&&Math.abs(f+g)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(c+1)/2,S=(h+1)/2,C=(m+1)/2,D=(u+d)/4,b=(p+v)/4,I=(f+g)/4;return R>S&&R>C?R<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(R),s=D/i,r=b/i):S>C?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=D/s,r=I/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=b/r,s=I/r),this.set(i,s,r,t),this}let _=Math.sqrt((g-f)*(g-f)+(p-v)*(p-v)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(g-f)/_,this.y=(p-v)/_,this.z=(d-u)/_,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this.w=Pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this.w=Pt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hd extends ys{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t),this.textures=[];const s=i.count;for(let r=0;r<s;r++)this.textures[r]=new bn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Vl(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class In extends Hd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class lu extends bn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gd extends bn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Gt{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,a,l,o,c,u,p,d,h,f,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,l,o,c,u,p,d,h,f,v,g)}set(e,t,i,s,r,a,l,o,c,u,p,d,h,f,v,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=l,m[13]=o,m[2]=c,m[6]=u,m[10]=p,m[14]=d,m[3]=h,m[7]=f,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Es.setFromMatrixColumn(e,0).length(),r=1/Es.setFromMatrixColumn(e,1).length(),a=1/Es.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),l=Math.sin(i),o=Math.cos(s),c=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const d=a*u,h=a*p,f=l*u,v=l*p;t[0]=o*u,t[4]=-o*p,t[8]=c,t[1]=h+f*c,t[5]=d-v*c,t[9]=-l*o,t[2]=v-d*c,t[6]=f+h*c,t[10]=a*o}else if(e.order==="YXZ"){const d=o*u,h=o*p,f=c*u,v=c*p;t[0]=d+v*l,t[4]=f*l-h,t[8]=a*c,t[1]=a*p,t[5]=a*u,t[9]=-l,t[2]=h*l-f,t[6]=v+d*l,t[10]=a*o}else if(e.order==="ZXY"){const d=o*u,h=o*p,f=c*u,v=c*p;t[0]=d-v*l,t[4]=-a*p,t[8]=f+h*l,t[1]=h+f*l,t[5]=a*u,t[9]=v-d*l,t[2]=-a*c,t[6]=l,t[10]=a*o}else if(e.order==="ZYX"){const d=a*u,h=a*p,f=l*u,v=l*p;t[0]=o*u,t[4]=f*c-h,t[8]=d*c+v,t[1]=o*p,t[5]=v*c+d,t[9]=h*c-f,t[2]=-c,t[6]=l*o,t[10]=a*o}else if(e.order==="YZX"){const d=a*o,h=a*c,f=l*o,v=l*c;t[0]=o*u,t[4]=v-d*p,t[8]=f*p+h,t[1]=p,t[5]=a*u,t[9]=-l*u,t[2]=-c*u,t[6]=h*p+f,t[10]=d-v*p}else if(e.order==="XZY"){const d=a*o,h=a*c,f=l*o,v=l*c;t[0]=o*u,t[4]=-p,t[8]=c*u,t[1]=d*p+v,t[5]=a*u,t[9]=h*p-f,t[2]=f*p-h,t[6]=l*u,t[10]=v*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vd,e,Wd)}lookAt(e,t,i){const s=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Hi.crossVectors(i,Un),Hi.lengthSq()===0&&(Math.abs(i.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Hi.crossVectors(i,Un)),Hi.normalize(),Br.crossVectors(Un,Hi),s[0]=Hi.x,s[4]=Br.x,s[8]=Un.x,s[1]=Hi.y,s[5]=Br.y,s[9]=Un.y,s[2]=Hi.z,s[6]=Br.z,s[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],l=i[4],o=i[8],c=i[12],u=i[1],p=i[5],d=i[9],h=i[13],f=i[2],v=i[6],g=i[10],m=i[14],_=i[3],R=i[7],S=i[11],C=i[15],D=s[0],b=s[4],I=s[8],F=s[12],N=s[1],B=s[5],V=s[9],Q=s[13],$=s[2],oe=s[6],de=s[10],ce=s[14],Ie=s[3],pe=s[7],Ae=s[11],ge=s[15];return r[0]=a*D+l*N+o*$+c*Ie,r[4]=a*b+l*B+o*oe+c*pe,r[8]=a*I+l*V+o*de+c*Ae,r[12]=a*F+l*Q+o*ce+c*ge,r[1]=u*D+p*N+d*$+h*Ie,r[5]=u*b+p*B+d*oe+h*pe,r[9]=u*I+p*V+d*de+h*Ae,r[13]=u*F+p*Q+d*ce+h*ge,r[2]=f*D+v*N+g*$+m*Ie,r[6]=f*b+v*B+g*oe+m*pe,r[10]=f*I+v*V+g*de+m*Ae,r[14]=f*F+v*Q+g*ce+m*ge,r[3]=_*D+R*N+S*$+C*Ie,r[7]=_*b+R*B+S*oe+C*pe,r[11]=_*I+R*V+S*de+C*Ae,r[15]=_*F+R*Q+S*ce+C*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],l=e[5],o=e[9],c=e[13],u=e[2],p=e[6],d=e[10],h=e[14],f=e[3],v=e[7],g=e[11],m=e[15],_=o*h-c*d,R=l*h-c*p,S=l*d-o*p,C=a*h-c*u,D=a*d-o*u,b=a*p-l*u;return t*(v*_-g*R+m*S)-i*(f*_-g*C+m*D)+s*(f*R-v*C+m*b)-r*(f*S-v*D+g*b)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],l=e[9],o=e[2],c=e[6],u=e[10];return t*(a*u-l*c)-i*(r*u-l*o)+s*(r*c-a*o)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],l=e[5],o=e[6],c=e[7],u=e[8],p=e[9],d=e[10],h=e[11],f=e[12],v=e[13],g=e[14],m=e[15],_=t*l-i*a,R=t*o-s*a,S=t*c-r*a,C=i*o-s*l,D=i*c-r*l,b=s*c-r*o,I=u*v-p*f,F=u*g-d*f,N=u*m-h*f,B=p*g-d*v,V=p*m-h*v,Q=d*m-h*g,$=_*Q-R*V+S*B+C*N-D*F+b*I;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const oe=1/$;return e[0]=(l*Q-o*V+c*B)*oe,e[1]=(s*V-i*Q-r*B)*oe,e[2]=(v*b-g*D+m*C)*oe,e[3]=(d*D-p*b-h*C)*oe,e[4]=(o*N-a*Q-c*F)*oe,e[5]=(t*Q-s*N+r*F)*oe,e[6]=(g*S-f*b-m*R)*oe,e[7]=(u*b-d*S+h*R)*oe,e[8]=(a*V-l*N+c*I)*oe,e[9]=(i*N-t*V-r*I)*oe,e[10]=(f*D-v*S+m*_)*oe,e[11]=(p*S-u*D-h*_)*oe,e[12]=(l*F-a*B-o*I)*oe,e[13]=(t*B-i*F+s*I)*oe,e[14]=(v*R-f*C-g*_)*oe,e[15]=(u*C-p*R+d*_)*oe,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,l=e.y,o=e.z,c=r*a,u=r*l;return this.set(c*a+i,c*l-s*o,c*o+s*l,0,c*l+s*o,u*l+i,u*o-s*a,0,c*o-s*l,u*o+s*a,r*o*o+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,l=t._z,o=t._w,c=r+r,u=a+a,p=l+l,d=r*c,h=r*u,f=r*p,v=a*u,g=a*p,m=l*p,_=o*c,R=o*u,S=o*p,C=i.x,D=i.y,b=i.z;return s[0]=(1-(v+m))*C,s[1]=(h+S)*C,s[2]=(f-R)*C,s[3]=0,s[4]=(h-S)*D,s[5]=(1-(d+m))*D,s[6]=(g+_)*D,s[7]=0,s[8]=(f+R)*b,s[9]=(g-_)*b,s[10]=(1-(d+v))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Es.set(s[0],s[1],s[2]).length();const l=Es.set(s[4],s[5],s[6]).length(),o=Es.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Kn.copy(this);const c=1/a,u=1/l,p=1/o;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=u,Kn.elements[5]*=u,Kn.elements[6]*=u,Kn.elements[8]*=p,Kn.elements[9]*=p,Kn.elements[10]*=p,t.setFromRotationMatrix(Kn),i.x=a,i.y=l,i.z=o,this}makePerspective(e,t,i,s,r,a,l=oi,o=!1){const c=this.elements,u=2*r/(t-e),p=2*r/(i-s),d=(t+e)/(t-e),h=(i+s)/(i-s);let f,v;if(o)f=r/(a-r),v=a*r/(a-r);else if(l===oi)f=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(l===Lr)f=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=p,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,l=oi,o=!1){const c=this.elements,u=2/(t-e),p=2/(i-s),d=-(t+e)/(t-e),h=-(i+s)/(i-s);let f,v;if(o)f=1/(a-r),v=a/(a-r);else if(l===oi)f=-2/(a-r),v=-(a+r)/(a-r);else if(l===Lr)f=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=p,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=f,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Es=new ae,Kn=new Gt,Vd=new ae(0,0,0),Wd=new ae(1,1,1),Hi=new ae,Br=new ae,Un=new ae,uc=new Gt,dc=new cn;class Mn{constructor(e=0,t=0,i=0,s=Mn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],l=s[8],o=s[1],c=s[5],u=s[9],p=s[2],d=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,h),this._z=Math.atan2(o,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-Pt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(l,h));break;case"XZY":this._z=Math.asin(-Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return uc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dc.setFromEuler(this),this.setFromQuaternion(dc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mn.DEFAULT_ORDER="XYZ";class cu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xd=0;const hc=new ae,Ts=new cn,Ei=new Gt,Hr=new ae,nr=new ae,qd=new ae,$d=new cn,pc=new ae(1,0,0),mc=new ae(0,1,0),gc=new ae(0,0,1),xc={type:"added"},Yd={type:"removed"},As={type:"childadded",child:null},ia={type:"childremoved",child:null};class nn extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new ae,t=new Mn,i=new cn,s=new ae(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Gt},normalMatrix:{value:new yt}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(pc,e)}rotateY(e){return this.rotateOnAxis(mc,e)}rotateZ(e){return this.rotateOnAxis(gc,e)}translateOnAxis(e,t){return hc.copy(e).applyQuaternion(this.quaternion),this.position.add(hc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pc,e)}translateY(e){return this.translateOnAxis(mc,e)}translateZ(e){return this.translateOnAxis(gc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Hr.copy(e):Hr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(nr,Hr,this.up):Ei.lookAt(Hr,nr,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),Ts.setFromRotationMatrix(Ei),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ht("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xc),As.child=e,this.dispatchEvent(As),As.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yd),ia.child=e,this.dispatchEvent(ia),ia.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xc),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,e,qd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,$d,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,o){return l[o.uuid]===void 0&&(l[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const o=l.shapes;if(Array.isArray(o))for(let c=0,u=o.length;c<u;c++){const p=o[c];r(e.shapes,p)}else r(e.shapes,o)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let o=0,c=this.material.length;o<c;o++)l.push(r(e.materials,this.material[o]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const o=this.animations[l];s.animations.push(r(e.animations,o))}}if(t){const l=a(e.geometries),o=a(e.materials),c=a(e.textures),u=a(e.images),p=a(e.shapes),d=a(e.skeletons),h=a(e.animations),f=a(e.nodes);l.length>0&&(i.geometries=l),o.length>0&&(i.materials=o),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),f.length>0&&(i.nodes=f)}return i.object=s,i;function a(l){const o=[];for(const c in l){const u=l[c];delete u.metadata,o.push(u)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}nn.DEFAULT_UP=new ae(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Vs extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kd={type:"move"};class sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const l=this._targetRay,o=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,i),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=u.position.distanceTo(p.position),h=.02,f=.005;c.inputState.pinching&&d>h+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Kd)))}return l!==null&&(l.visible=s!==null),o!==null&&(o.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Vs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const fu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function ra(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class xt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Nt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Nt.workingColorSpace){if(e=Id(e,1),t=Pt(t,0,1),i=Pt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=ra(a,r,e+1/3),this.g=ra(a,r,e),this.b=ra(a,r,e-1/3)}return Nt.colorSpaceToWorking(this,s),this}setStyle(e,t=Pn){function i(r){r!==void 0&&parseFloat(r)<1&&gt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:gt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);gt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pn){const i=fu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):gt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pn){return Nt.workingToColorSpace(_n.copy(this),e),Math.round(Pt(_n.r*255,0,255))*65536+Math.round(Pt(_n.g*255,0,255))*256+Math.round(Pt(_n.b*255,0,255))}getHexString(e=Pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nt.workingColorSpace){Nt.workingToColorSpace(_n.copy(this),t);const i=_n.r,s=_n.g,r=_n.b,a=Math.max(i,s,r),l=Math.min(i,s,r);let o,c;const u=(l+a)/2;if(l===a)o=0,c=0;else{const p=a-l;switch(c=u<=.5?p/(a+l):p/(2-a-l),a){case i:o=(s-r)/p+(s<r?6:0);break;case s:o=(r-i)/p+2;break;case r:o=(i-s)/p+4;break}o/=6}return e.h=o,e.s=c,e.l=u,e}getRGB(e,t=Nt.workingColorSpace){return Nt.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Pn){Nt.workingToColorSpace(_n.copy(this),e);const t=_n.r,i=_n.g,s=_n.b;return e!==Pn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+t,Gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Gi),e.getHSL(Gr);const i=jo(Gi.h,Gr.h,t),s=jo(Gi.s,Gr.s,t),r=jo(Gi.l,Gr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new xt;xt.NAMES=fu;class Wl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new xt(e),this.density=t}clone(){return new Wl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class uu extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Jn=new ae,Ti=new ae,oa=new ae,Ai=new ae,Rs=new ae,Cs=new ae,vc=new ae,aa=new ae,la=new ae,ca=new ae,fa=new Zt,ua=new Zt,da=new Zt;class ni{constructor(e=new ae,t=new ae,i=new ae){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Jn.subVectors(e,t),s.cross(Jn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Jn.subVectors(s,t),Ti.subVectors(i,t),oa.subVectors(e,t);const a=Jn.dot(Jn),l=Jn.dot(Ti),o=Jn.dot(oa),c=Ti.dot(Ti),u=Ti.dot(oa),p=a*c-l*l;if(p===0)return r.set(0,0,0),null;const d=1/p,h=(c*o-l*u)*d,f=(a*u-l*o)*d;return r.set(1-h-f,f,h)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,t,i,s,r,a,l,o){return this.getBarycoord(e,t,i,s,Ai)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,Ai.x),o.addScaledVector(a,Ai.y),o.addScaledVector(l,Ai.z),o)}static getInterpolatedAttribute(e,t,i,s,r,a){return fa.setScalar(0),ua.setScalar(0),da.setScalar(0),fa.fromBufferAttribute(e,t),ua.fromBufferAttribute(e,i),da.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(fa,r.x),a.addScaledVector(ua,r.y),a.addScaledVector(da,r.z),a}static isFrontFacing(e,t,i,s){return Jn.subVectors(i,t),Ti.subVectors(e,t),Jn.cross(Ti).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),Jn.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ni.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return ni.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,l;Rs.subVectors(s,i),Cs.subVectors(r,i),aa.subVectors(e,i);const o=Rs.dot(aa),c=Cs.dot(aa);if(o<=0&&c<=0)return t.copy(i);la.subVectors(e,s);const u=Rs.dot(la),p=Cs.dot(la);if(u>=0&&p<=u)return t.copy(s);const d=o*p-u*c;if(d<=0&&o>=0&&u<=0&&o-u>0)return a=o/(o-u),t.copy(i).addScaledVector(Rs,a);ca.subVectors(e,r);const h=Rs.dot(ca),f=Cs.dot(ca);if(f>=0&&h<=f)return t.copy(r);const v=h*c-o*f;if(v<=0&&c>=0&&f<=0)return l=c/(c-f),t.copy(i).addScaledVector(Cs,l);const g=u*f-h*p;if(g<=0&&p-u>=0&&h-f>=0)return vc.subVectors(r,s),l=(p-u)/(p-u+(h-f)),t.copy(s).addScaledVector(vc,l);const m=1/(g+v+d);return a=v*m,l=d*m,t.copy(i).addScaledVector(Rs,a).addScaledVector(Cs,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ms{constructor(e=new ae(1/0,1/0,1/0),t=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,l=r.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,Zn):Zn.fromBufferAttribute(r,a),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vr.copy(i.boundingBox)),Vr.applyMatrix4(e.matrixWorld),this.union(Vr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),Wr.subVectors(this.max,ir),Ps.subVectors(e.a,ir),Ls.subVectors(e.b,ir),Ds.subVectors(e.c,ir),Vi.subVectors(Ls,Ps),Wi.subVectors(Ds,Ls),is.subVectors(Ps,Ds);let t=[0,-Vi.z,Vi.y,0,-Wi.z,Wi.y,0,-is.z,is.y,Vi.z,0,-Vi.x,Wi.z,0,-Wi.x,is.z,0,-is.x,-Vi.y,Vi.x,0,-Wi.y,Wi.x,0,-is.y,is.x,0];return!ha(t,Ps,Ls,Ds,Wr)||(t=[1,0,0,0,1,0,0,0,1],!ha(t,Ps,Ls,Ds,Wr))?!1:(Xr.crossVectors(Vi,Wi),t=[Xr.x,Xr.y,Xr.z],ha(t,Ps,Ls,Ds,Wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ri=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],Zn=new ae,Vr=new Ms,Ps=new ae,Ls=new ae,Ds=new ae,Vi=new ae,Wi=new ae,is=new ae,ir=new ae,Wr=new ae,Xr=new ae,ss=new ae;function ha(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ss.fromArray(n,r);const l=s.x*Math.abs(ss.x)+s.y*Math.abs(ss.y)+s.z*Math.abs(ss.z),o=e.dot(ss),c=t.dot(ss),u=i.dot(ss);if(Math.max(-Math.max(o,c,u),Math.min(o,c,u))>l)return!1}return!0}const en=new ae,qr=new ot;let Jd=0;class An extends ys{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Rd,this.updateRanges=[],this.gpuType=ri,this.version=0,this._normalizationScale=e!==void 0?Gl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)qr.fromBufferAttribute(this,t),qr.applyMatrix3(e),this.setXY(t,qr.x,qr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ud(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):zd(e,this.array)}}class du extends An{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class hu extends An{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class wt extends An{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Zd=new Ms,sr=new ae,pa=new ae;class Ur{constructor(e=new ae,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Zd.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sr.subVectors(e,this.center);const t=sr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(sr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sr.copy(e.center).add(pa)),this.expandByPoint(sr.copy(e.center).sub(pa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let jd=0;const Gn=new Gt,ma=new nn,Is=new ae,zn=new Ms,rr=new Ms,an=new ae;class fn extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Nr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cd(e)?hu:du)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new yt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,i){return Gn.makeTranslation(e,t,i),this.applyMatrix4(Gn),this}scale(e,t,i){return Gn.makeScale(e,t,i),this.applyMatrix4(Gn),this}lookAt(e){return ma.lookAt(e),ma.updateMatrix(),this.applyMatrix4(ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new wt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];zn.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ur);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const i=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];rr.setFromBufferAttribute(l),this.morphTargetsRelative?(an.addVectors(zn.min,rr.min),zn.expandByPoint(an),an.addVectors(zn.max,rr.max),zn.expandByPoint(an)):(zn.expandByPoint(rr.min),zn.expandByPoint(rr.max))}zn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)an.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(an));if(t)for(let r=0,a=t.length;r<a;r++){const l=t[r],o=this.morphTargetsRelative;for(let c=0,u=l.count;c<u;c++)an.fromBufferAttribute(l,c),o&&(Is.fromBufferAttribute(e,c),an.add(Is)),s=Math.max(s,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new An(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const l=[],o=[],c=new Uint8Array(i.count);for(let F=0;F<i.count;F++)l[F]=new ae,o[F]=new ae;const u=new ae,p=new ae,d=new ae,h=new ot,f=new ot,v=new ot,g=new ae,m=new ae;function _(F,N,B){c[F]=c[N]=c[B]=1,u.fromBufferAttribute(i,F),p.fromBufferAttribute(i,N),d.fromBufferAttribute(i,B),h.fromBufferAttribute(r,F),f.fromBufferAttribute(r,N),v.fromBufferAttribute(r,B),p.sub(u),d.sub(u),f.sub(h),v.sub(h);const V=1/(f.x*v.y-v.x*f.y);isFinite(V)&&(g.copy(p).multiplyScalar(v.y).addScaledVector(d,-f.y).multiplyScalar(V),m.copy(d).multiplyScalar(f.x).addScaledVector(p,-v.x).multiplyScalar(V),l[F].add(g),l[N].add(g),l[B].add(g),o[F].add(m),o[N].add(m),o[B].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let F=0,N=R.length;F<N;++F){const B=R[F],V=B.start,Q=B.count;for(let $=V,oe=V+Q;$<oe;$+=3)_(e.getX($+0),e.getX($+1),e.getX($+2))}const S=new ae,C=new ae,D=new ae,b=new ae;function I(F){D.fromBufferAttribute(s,F),b.copy(D);const N=l[F];S.copy(N),S.sub(D.multiplyScalar(D.dot(N))).normalize(),C.crossVectors(b,N);const V=C.dot(o[F])<0?-1:1;a.setXYZW(F,S.x,S.y,S.z,V)}for(let F=0,N=i.count;F<N;++F)c[F]&&I(F);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const s=new ae,r=new ae,a=new ae,l=new ae,o=new ae,c=new ae,u=new ae,p=new ae;if(e)for(let d=0,h=e.count;d<h;d+=3){const f=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,f),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),l.fromBufferAttribute(i,f),o.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),l.add(u),o.add(u),c.add(u),i.setXYZ(f,l.x,l.y,l.z),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(l,o){const c=l.array,u=l.itemSize,p=l.normalized,d=new c.constructor(o.length*u);let h=0,f=0;for(let v=0,g=o.length;v<g;v++){l.isInterleavedBufferAttribute?h=o[v]*l.data.stride+l.offset:h=o[v]*u;for(let m=0;m<u;m++)d[f++]=c[h++]}return new An(d,u,p)}if(this.index===null)return gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fn,i=this.index.array,s=this.attributes;for(const l in s){const o=s[l],c=e(o,i);t.setAttribute(l,c)}const r=this.morphAttributes;for(const l in r){const o=[],c=r[l];for(let u=0,p=c.length;u<p;u++){const d=c[u],h=e(d,i);o.push(h)}t.morphAttributes[l]=o}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,o=a.length;l<o;l++){const c=a[l];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const o=this.parameters;for(const c in o)o[c]!==void 0&&(e[c]=o[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const o in i){const c=i[o];e.data.attributes[o]=c.toJSON(e.data)}const s={};let r=!1;for(const o in this.morphAttributes){const c=this.morphAttributes[o],u=[];for(let p=0,d=c.length;p<d;p++){const h=c[p];u.push(h.toJSON(e.data))}u.length>0&&(s[o]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],p=r[c];for(let d=0,h=p.length;d<h;d++)u.push(p[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ga=new ae,Qd=new ae,eh=new yt;class Ji{constructor(e=new ae(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ga.subVectors(i,t).cross(Qd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(ga),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||eh.getNormalMatrix(e),s=this.coplanarPoint(ga).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let th=0;class Qs extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=Nr(),this.name="",this.type="Material",this.blending=br,this.side=xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gf,this.blendDst=Vf,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jo,this.stencilZFail=Jo,this.stencilZPass=Jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){gt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){gt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const l in r){const o=r[l];delete o.metadata,a.push(o)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new xt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Ji().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ot().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ci=new ae,xa=new ae,$r=new ae,Yr=new ae;class nh{constructor(e=new ae,t=new ae(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){xa.copy(e).add(t).multiplyScalar(.5),$r.copy(t).sub(e).normalize(),Yr.copy(this.origin).sub(xa);const r=e.distanceTo(t)*.5,a=-this.direction.dot($r),l=Yr.dot(this.direction),o=-Yr.dot($r),c=Yr.lengthSq(),u=Math.abs(1-a*a);let p,d,h,f;if(u>0)if(p=a*o-l,d=a*l-o,f=r*u,p>=0)if(d>=-f)if(d<=f){const v=1/u;p*=v,d*=v,h=p*(p+a*d+2*l)+d*(a*p+d+2*o)+c}else d=r,p=Math.max(0,-(a*d+l)),h=-p*p+d*(d+2*o)+c;else d=-r,p=Math.max(0,-(a*d+l)),h=-p*p+d*(d+2*o)+c;else d<=-f?(p=Math.max(0,-(-a*r+l)),d=p>0?-r:Math.min(Math.max(-r,-o),r),h=-p*p+d*(d+2*o)+c):d<=f?(p=0,d=Math.min(Math.max(-r,-o),r),h=d*(d+2*o)+c):(p=Math.max(0,-(a*r+l)),d=p>0?r:Math.min(Math.max(-r,-o),r),h=-p*p+d*(d+2*o)+c);else d=a>0?-r:r,p=Math.max(0,-(a*d+l)),h=-p*p+d*(d+2*o)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(xa).addScaledVector($r,d),h}intersectSphere(e,t){if(e.radius<0)return null;Ci.subVectors(e.center,this.origin);const i=Ci.dot(this.direction),s=Ci.dot(Ci)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),l=i-a,o=i+a;return o<0?null:l<0?this.at(o,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,l,o;const c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),p>=0?(l=(e.min.z-d.z)*p,o=(e.max.z-d.z)*p):(l=(e.max.z-d.z)*p,o=(e.min.z-d.z)*p),i>o||l>s)||((l>i||i!==i)&&(i=l),(o<s||s!==s)&&(s=o),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,i,s,r){const a=this.origin,l=this.direction,o=l.x,c=l.y,u=l.z,p=e.x-a.x,d=e.y-a.y,h=e.z-a.z,f=t.x-a.x,v=t.y-a.y,g=t.z-a.z,m=i.x-a.x,_=i.y-a.y,R=i.z-a.z,S=Math.abs(o),C=Math.abs(c),D=Math.abs(u);let b,I,F,N,B,V,Q,$,oe,de,ce,Ie;if(S>=C&&S>=D?(F=o,V=p,oe=f,Ie=m,o>=0?(b=c,I=u,N=d,B=h,Q=v,$=g,de=_,ce=R):(b=u,I=c,N=h,B=d,Q=g,$=v,de=R,ce=_)):C>=D?(F=c,V=d,oe=v,Ie=_,c>=0?(b=u,I=o,N=h,B=p,Q=g,$=f,de=R,ce=m):(b=o,I=u,N=p,B=h,Q=f,$=g,de=m,ce=R)):(F=u,V=h,oe=g,Ie=R,u>=0?(b=o,I=c,N=p,B=d,Q=f,$=v,de=m,ce=_):(b=c,I=o,N=d,B=p,Q=v,$=f,de=_,ce=m)),F===0)return null;const pe=b/F,Ae=I/F,ge=1/F,Le=N-pe*V,qe=B-Ae*V,_e=Q-pe*oe,ke=$-Ae*oe,Oe=de-pe*Ie,Ge=ce-Ae*Ie,Be=Oe*ke-Ge*_e,Qe=Le*Ge-qe*Oe,Mt=_e*qe-ke*Le;if(s){if(Be<0||Qe<0||Mt<0)return null}else if((Be<0||Qe<0||Mt<0)&&(Be>0||Qe>0||Mt>0))return null;const Xe=Be+Qe+Mt;if(Xe===0)return null;const tt=ge*(Be*V+Qe*oe+Mt*Ie);return(Xe>0?tt<0:tt>0)?null:this.at(tt/Xe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ps extends Qs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=Nl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _c=new Gt,rs=new nh,Kr=new Ur,yc=new ae,Jr=new ae,Zr=new ae,jr=new ae,va=new ae,Qr=new ae,Mc=new ae,eo=new ae;class At extends nn{constructor(e=new fn,t=new ps){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const l=this.morphTargetInfluences;if(r&&l){Qr.set(0,0,0);for(let o=0,c=r.length;o<c;o++){const u=l[o],p=r[o];u!==0&&(va.fromBufferAttribute(p,e),a?Qr.addScaledVector(va,u):Qr.addScaledVector(va.sub(t),u))}t.add(Qr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Kr.copy(i.boundingSphere),Kr.applyMatrix4(r),rs.copy(e.ray).recast(e.near),!(Kr.containsPoint(rs.origin)===!1&&(rs.intersectSphere(Kr,yc)===null||rs.origin.distanceToSquared(yc)>(e.far-e.near)**2))&&(_c.copy(r).invert(),rs.copy(e.ray).applyMatrix4(_c),!(i.boundingBox!==null&&rs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,l=r.index,o=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,d=r.groups,h=r.drawRange;if(l!==null)if(Array.isArray(a))for(let f=0,v=d.length;f<v;f++){const g=d[f],m=a[g.materialIndex],_=Math.max(g.start,h.start),R=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let S=_,C=R;S<C;S+=3){const D=l.getX(S),b=l.getX(S+1),I=l.getX(S+2);s=to(this,m,e,i,c,u,p,D,b,I),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const f=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let g=f,m=v;g<m;g+=3){const _=l.getX(g),R=l.getX(g+1),S=l.getX(g+2);s=to(this,a,e,i,c,u,p,_,R,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(o!==void 0)if(Array.isArray(a))for(let f=0,v=d.length;f<v;f++){const g=d[f],m=a[g.materialIndex],_=Math.max(g.start,h.start),R=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let S=_,C=R;S<C;S+=3){const D=S,b=S+1,I=S+2;s=to(this,m,e,i,c,u,p,D,b,I),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const f=Math.max(0,h.start),v=Math.min(o.count,h.start+h.count);for(let g=f,m=v;g<m;g+=3){const _=g,R=g+1,S=g+2;s=to(this,a,e,i,c,u,p,_,R,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function ih(n,e,t,i,s,r,a,l){let o;if(e.side===Rn?o=i.intersectTriangle(a,r,s,!0,l):o=i.intersectTriangle(s,r,a,e.side===xs,l),o===null)return null;eo.copy(l),eo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(eo);return c<t.near||c>t.far?null:{distance:c,point:eo.clone(),object:n}}function to(n,e,t,i,s,r,a,l,o,c){n.getVertexPosition(l,Jr),n.getVertexPosition(o,Zr),n.getVertexPosition(c,jr);const u=ih(n,e,t,i,Jr,Zr,jr,Mc);if(u){const p=new ae;ni.getBarycoord(Mc,Jr,Zr,jr,p),s&&(u.uv=ni.getInterpolatedAttribute(s,l,o,c,p,new ot)),r&&(u.uv1=ni.getInterpolatedAttribute(r,l,o,c,p,new ot)),a&&(u.normal=ni.getInterpolatedAttribute(a,l,o,c,p,new ae),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:l,b:o,c,normal:new ae,materialIndex:0};ni.getNormal(Jr,Zr,jr,d.normal),u.face=d,u.barycoord=p}return u}class pu extends bn{constructor(e=null,t=1,i=1,s,r,a,l,o,c=hn,u=hn,p,d){super(null,a,l,o,c,u,s,r,p,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bc extends An{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ns=new Gt,Sc=new Gt,no=[],wc=new Ms,sh=new Gt,or=new At,ar=new Ur;class jn extends At{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,sh)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ms),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ns),wc.copy(e.boundingBox).applyMatrix4(Ns),this.boundingBox.union(wc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ur),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ns),ar.copy(e.boundingSphere).applyMatrix4(Ns),this.boundingSphere.union(ar)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let l=0;l<i.length;l++)i[l]=s[a+l]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(or.geometry=this.geometry,or.material=this.material,or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ar.copy(this.boundingSphere),ar.applyMatrix4(i),e.ray.intersectsSphere(ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ns),Sc.multiplyMatrices(i,Ns),or.matrixWorld=Sc,or.raycast(e,no);for(let a=0,l=no.length;a<l;a++){const o=no[a];o.instanceId=r,o.object=this,t.push(o)}no.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new bc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new pu(new Float32Array(s*this.count),s,this.count,kl,ri));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const l=this.geometry.morphTargetsRelative?1:1-a,o=s*e;return r[o]=l,r.set(i,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const os=new Ur,rh=new ot(.5,.5),io=new ae;class Dr{constructor(e=new Ji,t=new Ji,i=new Ji,s=new Ji,r=new Ji,a=new Ji){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=oi,i=!1){const s=this.planes,r=e.elements,a=r[0],l=r[1],o=r[2],c=r[3],u=r[4],p=r[5],d=r[6],h=r[7],f=r[8],v=r[9],g=r[10],m=r[11],_=r[12],R=r[13],S=r[14],C=r[15];if(s[0].setComponents(c-a,h-u,m-f,C-_).normalize(),s[1].setComponents(c+a,h+u,m+f,C+_).normalize(),s[2].setComponents(c+l,h+p,m+v,C+R).normalize(),s[3].setComponents(c-l,h-p,m-v,C-R).normalize(),i)s[4].setComponents(o,d,g,S).normalize(),s[5].setComponents(c-o,h-d,m-g,C-S).normalize();else if(s[4].setComponents(c-o,h-d,m-g,C-S).normalize(),t===oi)s[5].setComponents(c+o,h+d,m+g,C+S).normalize();else if(t===Lr)s[5].setComponents(o,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){os.center.set(0,0,0);const t=rh.distanceTo(e.center);return os.radius=.7071067811865476+t,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(io.x=s.normal.x>0?e.max.x:e.min.x,io.y=s.normal.y>0?e.max.y:e.min.y,io.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(io)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Ec=new Gt;class Xl{constructor(){this.coordinateSystem=oi,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];Ec.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Dr),i[s].setFromProjectionMatrix(Ec,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Dr),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new Xl().copy(this)}}class mu extends bn{constructor(e=[],t=Ys,i,s,r,a,l,o,c,u){super(e,t,i,s,r,a,l,o,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Eo extends bn{constructor(e,t,i,s,r,a,l,o,c){super(e,t,i,s,r,a,l,o,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Js extends bn{constructor(e,t,i=bi,s,r,a,l=hn,o=hn,c,u=es,p=1){if(u!==es&&u!==ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:p};super(d,s,r,a,l,o,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class gu extends Js{constructor(e,t=bi,i=Ys,s,r,a=hn,l=hn,o,c=es){const u={width:e,height:e,depth:1},p=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,l,o,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class xu extends bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xt extends fn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const o=[],c=[],u=[],p=[];let d=0,h=0;f("z","y","x",-1,-1,i,t,e,a,r,0),f("z","y","x",1,-1,i,t,-e,a,r,1),f("x","z","y",1,1,e,i,t,s,a,2),f("x","z","y",1,-1,e,i,-t,s,a,3),f("x","y","z",1,-1,e,t,i,s,r,4),f("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(o),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(u,3)),this.setAttribute("uv",new wt(p,2));function f(v,g,m,_,R,S,C,D,b,I,F){const N=S/b,B=C/I,V=S/2,Q=C/2,$=D/2,oe=b+1,de=I+1;let ce=0,Ie=0;const pe=new ae;for(let Ae=0;Ae<de;Ae++){const ge=Ae*B-Q;for(let Le=0;Le<oe;Le++){const qe=Le*N-V;pe[v]=qe*_,pe[g]=ge*R,pe[m]=$,c.push(pe.x,pe.y,pe.z),pe[v]=0,pe[g]=0,pe[m]=D>0?1:-1,u.push(pe.x,pe.y,pe.z),p.push(Le/b),p.push(1-Ae/I),ce+=1}}for(let Ae=0;Ae<I;Ae++)for(let ge=0;ge<b;ge++){const Le=d+ge+oe*Ae,qe=d+ge+oe*(Ae+1),_e=d+(ge+1)+oe*(Ae+1),ke=d+(ge+1)+oe*Ae;o.push(Le,qe,ke),o.push(qe,_e,ke),Ie+=6}l.addGroup(h,Ie,F),h+=Ie,d+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ql extends fn{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],l=[],o=[],c=[],u=t/2,p=Math.PI/2*e,d=t,h=2*p+d,f=i*2+r,v=s+1,g=new ae,m=new ae;for(let _=0;_<=f;_++){let R=0,S=0,C=0,D=0;if(_<=i){const F=_/i,N=F*Math.PI/2;S=-u-e*Math.cos(N),C=e*Math.sin(N),D=-e*Math.cos(N),R=F*p}else if(_<=i+r){const F=(_-i)/r;S=-u+F*t,C=e,D=0,R=p+F*d}else{const F=(_-i-r)/i,N=F*Math.PI/2;S=u+e*Math.sin(N),C=e*Math.cos(N),D=e*Math.sin(N),R=p+d+F*p}const b=Math.max(0,Math.min(1,R/h));let I=0;_===0?I=.5/s:_===f&&(I=-.5/s);for(let F=0;F<=s;F++){const N=F/s,B=N*Math.PI*2,V=Math.sin(B),Q=Math.cos(B);m.x=-C*Q,m.y=S,m.z=C*V,l.push(m.x,m.y,m.z),g.set(-C*Q,D,C*V),g.normalize(),o.push(g.x,g.y,g.z),c.push(N+I,b)}if(_>0){const F=(_-1)*v;for(let N=0;N<s;N++){const B=F+N,V=F+N+1,Q=_*v+N,$=_*v+N+1;a.push(B,V,Q),a.push(V,$,Q)}}}this.setIndex(a),this.setAttribute("position",new wt(l,3)),this.setAttribute("normal",new wt(o,3)),this.setAttribute("uv",new wt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ql(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class hi extends fn{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,l=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:o};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],p=[],d=[],h=[];let f=0;const v=[],g=i/2;let m=0;_(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(u),this.setAttribute("position",new wt(p,3)),this.setAttribute("normal",new wt(d,3)),this.setAttribute("uv",new wt(h,2));function _(){const S=new ae,C=new ae;let D=0;const b=(t-e)/i;for(let I=0;I<=r;I++){const F=[],N=I/r,B=N*(t-e)+e;for(let V=0;V<=s;V++){const Q=V/s,$=Q*o+l,oe=Math.sin($),de=Math.cos($);C.x=B*oe,C.y=-N*i+g,C.z=B*de,p.push(C.x,C.y,C.z),S.set(oe,b,de).normalize(),d.push(S.x,S.y,S.z),h.push(Q,1-N),F.push(f++)}v.push(F)}for(let I=0;I<s;I++)for(let F=0;F<r;F++){const N=v[F][I],B=v[F+1][I],V=v[F+1][I+1],Q=v[F][I+1];(e>0||F!==0)&&(u.push(N,B,Q),D+=3),(t>0||F!==r-1)&&(u.push(B,V,Q),D+=3)}c.addGroup(m,D,0),m+=D}function R(S){const C=f,D=new ot,b=new ae;let I=0;const F=S===!0?e:t,N=S===!0?1:-1;for(let V=1;V<=s;V++)p.push(0,g*N,0),d.push(0,N,0),h.push(.5,.5),f++;const B=f;for(let V=0;V<=s;V++){const $=V/s*o+l,oe=Math.cos($),de=Math.sin($);b.x=F*de,b.y=g*N,b.z=F*oe,p.push(b.x,b.y,b.z),d.push(0,N,0),D.x=oe*.5+.5,D.y=de*.5*N+.5,h.push(D.x,D.y),f++}for(let V=0;V<s;V++){const Q=C+V,$=B+V;S===!0?u.push($,$+1,Q):u.push($+1,$,Q),I+=3}c.addGroup(m,I,S===!0?1:2),m+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ki{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){gt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let l=0,o=r-1,c;for(;l<=o;)if(s=Math.floor(l+(o-l)/2),c=i[s]-a,c<0)l=s+1;else if(c>0)o=s-1;else{o=s;break}if(s=o,i[s]===a)return s/(r-1);const u=i[s],d=i[s+1]-u,h=(a-u)/d;return(s+h)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),l=this.getPoint(r),o=t||(a.isVector2?new ot:new ae);return o.copy(l).sub(a).normalize(),o}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new ae,s=[],r=[],a=[],l=new ae,o=new Gt;for(let h=0;h<=e;h++){const f=h/e;s[h]=this.getTangentAt(f,new ae)}r[0]=new ae,a[0]=new ae;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),p=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),d<=c&&i.set(0,0,1),l.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],l),a[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),a[h]=a[h-1].clone(),l.crossVectors(s[h-1],s[h]),l.length()>Number.EPSILON){l.normalize();const f=Math.acos(Pt(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(o.makeRotationAxis(l,f))}a[h].crossVectors(s[h],r[h])}if(t===!0){let h=Math.acos(Pt(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(l.crossVectors(r[0],r[e]))>0&&(h=-h);for(let f=1;f<=e;f++)r[f].applyMatrix4(o.makeRotationAxis(s[f],h*f)),a[f].crossVectors(s[f],r[f])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class vu extends ki{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,l=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=l,this.aRotation=o}getPoint(e,t=new ot){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const l=this.aStartAngle+e*r;let o=this.aX+this.xRadius*Math.cos(l),c=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const u=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=o-this.aX,h=c-this.aY;o=d*u-h*p+this.aX,c=d*p+h*u+this.aY}return i.set(o,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class oh extends vu{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function $l(){let n=0,e=0,t=0,i=0;function s(r,a,l,o){n=r,e=l,t=-3*r+3*a-2*l-o,i=2*r-2*a+l+o}return{initCatmullRom:function(r,a,l,o,c){s(a,l,c*(l-r),c*(o-a))},initNonuniformCatmullRom:function(r,a,l,o,c,u,p){let d=(a-r)/c-(l-r)/(c+u)+(l-a)/u,h=(l-a)/u-(o-a)/(u+p)+(o-l)/p;d*=u,h*=u,s(a,l,d,h)},calc:function(r){const a=r*r,l=a*r;return n+e*r+t*a+i*l}}}const Tc=new ae,Ac=new ae,_a=new $l,ya=new $l,Ma=new $l;class _u extends ki{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new ae){const i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let l=Math.floor(a),o=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:o===0&&l===r-1&&(l=r-2,o=1);let c,u;this.closed||l>0?c=s[(l-1)%r]:(Ac.subVectors(s[0],s[1]).add(s[0]),c=Ac);const p=s[l%r],d=s[(l+1)%r];if(this.closed||l+2<r?u=s[(l+2)%r]:(Tc.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Tc),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let f=Math.pow(c.distanceToSquared(p),h),v=Math.pow(p.distanceToSquared(d),h),g=Math.pow(d.distanceToSquared(u),h);v<1e-4&&(v=1),f<1e-4&&(f=v),g<1e-4&&(g=v),_a.initNonuniformCatmullRom(c.x,p.x,d.x,u.x,f,v,g),ya.initNonuniformCatmullRom(c.y,p.y,d.y,u.y,f,v,g),Ma.initNonuniformCatmullRom(c.z,p.z,d.z,u.z,f,v,g)}else this.curveType==="catmullrom"&&(_a.initCatmullRom(c.x,p.x,d.x,u.x,this.tension),ya.initCatmullRom(c.y,p.y,d.y,u.y,this.tension),Ma.initCatmullRom(c.z,p.z,d.z,u.z,this.tension));return i.set(_a.calc(o),ya.calc(o),Ma.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new ae().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Rc(n,e,t,i,s){const r=(i-e)*.5,a=(s-t)*.5,l=n*n,o=n*l;return(2*t-2*i+r+a)*o+(-3*t+3*i-2*r-a)*l+r*n+t}function ah(n,e){const t=1-n;return t*t*e}function lh(n,e){return 2*(1-n)*n*e}function ch(n,e){return n*n*e}function Sr(n,e,t,i){return ah(n,e)+lh(n,t)+ch(n,i)}function fh(n,e){const t=1-n;return t*t*t*e}function uh(n,e){const t=1-n;return 3*t*t*n*e}function dh(n,e){return 3*(1-n)*n*n*e}function hh(n,e){return n*n*n*e}function wr(n,e,t,i,s){return fh(n,e)+uh(n,t)+dh(n,i)+hh(n,s)}class ph extends ki{constructor(e=new ot,t=new ot,i=new ot,s=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ot){const i=t,s=this.v0,r=this.v1,a=this.v2,l=this.v3;return i.set(wr(e,s.x,r.x,a.x,l.x),wr(e,s.y,r.y,a.y,l.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class mh extends ki{constructor(e=new ae,t=new ae,i=new ae,s=new ae){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ae){const i=t,s=this.v0,r=this.v1,a=this.v2,l=this.v3;return i.set(wr(e,s.x,r.x,a.x,l.x),wr(e,s.y,r.y,a.y,l.y),wr(e,s.z,r.z,a.z,l.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class gh extends ki{constructor(e=new ot,t=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ot){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ot){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xh extends ki{constructor(e=new ae,t=new ae){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new ae){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vh extends ki{constructor(e=new ot,t=new ot,i=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ot){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Sr(e,s.x,r.x,a.x),Sr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yu extends ki{constructor(e=new ae,t=new ae,i=new ae){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ae){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Sr(e,s.x,r.x,a.x),Sr(e,s.y,r.y,a.y),Sr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _h extends ki{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ot){const i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),l=r-a,o=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return i.set(Rc(l,o.x,c.x,u.x,p.x),Rc(l,o.y,c.y,u.y,p.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new ot().fromArray(s))}return this}}var yh=Object.freeze({__proto__:null,ArcCurve:oh,CatmullRomCurve3:_u,CubicBezierCurve:ph,CubicBezierCurve3:mh,EllipseCurve:vu,LineCurve:gh,LineCurve3:xh,QuadraticBezierCurve:vh,QuadraticBezierCurve3:yu,SplineCurve:_h});class Ii extends fn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,l=Math.floor(i),o=Math.floor(s),c=l+1,u=o+1,p=e/l,d=t/o,h=[],f=[],v=[],g=[];for(let m=0;m<u;m++){const _=m*d-a;for(let R=0;R<c;R++){const S=R*p-r;f.push(S,-_,0),v.push(0,0,1),g.push(R/l),g.push(1-m/o)}}for(let m=0;m<o;m++)for(let _=0;_<l;_++){const R=_+c*m,S=_+c*(m+1),C=_+1+c*(m+1),D=_+1+c*m;h.push(R,S,D),h.push(S,C,D)}this.setIndex(h),this.setAttribute("position",new wt(f,3)),this.setAttribute("normal",new wt(v,3)),this.setAttribute("uv",new wt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.width,e.height,e.widthSegments,e.heightSegments)}}class Zi extends fn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const o=Math.min(a+l,Math.PI);let c=0;const u=[],p=new ae,d=new ae,h=[],f=[],v=[],g=[];for(let m=0;m<=i;m++){const _=[],R=m/i,S=a+R*l,C=e*Math.cos(S),D=Math.sqrt(e*e-C*C);let b=0;m===0&&a===0?b=.5/t:m===i&&o===Math.PI&&(b=-.5/t);for(let I=0;I<=t;I++){const F=I/t,N=s+F*r;p.x=-D*Math.cos(N),p.y=C,p.z=D*Math.sin(N),f.push(p.x,p.y,p.z),d.copy(p).normalize(),v.push(d.x,d.y,d.z),g.push(F+b,1-R),_.push(c++)}u.push(_)}for(let m=0;m<i;m++)for(let _=0;_<t;_++){const R=u[m][_+1],S=u[m][_],C=u[m+1][_],D=u[m+1][_+1];(m!==0||a>0)&&h.push(R,S,D),(m!==i-1||o<Math.PI)&&h.push(S,C,D)}this.setIndex(h),this.setAttribute("position",new wt(f,3)),this.setAttribute("normal",new wt(v,3)),this.setAttribute("uv",new wt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Yl extends fn{constructor(e=new yu(new ae(-1,-1,0),new ae(-1,1,0),new ae(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const l=new ae,o=new ae,c=new ot;let u=new ae;const p=[],d=[],h=[],f=[];v(),this.setIndex(f),this.setAttribute("position",new wt(p,3)),this.setAttribute("normal",new wt(d,3)),this.setAttribute("uv",new wt(h,2));function v(){for(let R=0;R<t;R++)g(R);g(r===!1?t:0),_(),m()}function g(R){u=e.getPointAt(R/t,u);const S=a.normals[R],C=a.binormals[R];for(let D=0;D<=s;D++){const b=D/s*Math.PI*2,I=Math.sin(b),F=-Math.cos(b);o.x=F*S.x+I*C.x,o.y=F*S.y+I*C.y,o.z=F*S.z+I*C.z,o.normalize(),d.push(o.x,o.y,o.z),l.x=u.x+i*o.x,l.y=u.y+i*o.y,l.z=u.z+i*o.z,p.push(l.x,l.y,l.z)}}function m(){for(let R=1;R<=t;R++)for(let S=1;S<=s;S++){const C=(s+1)*(R-1)+(S-1),D=(s+1)*R+(S-1),b=(s+1)*R+S,I=(s+1)*(R-1)+S;f.push(C,D,I),f.push(D,b,I)}}function _(){for(let R=0;R<=t;R++)for(let S=0;S<=s;S++)c.x=R/t,c.y=S/s,h.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Yl(new yh[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Zs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(Cc(s))s.isRenderTargetTexture?(gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Cc(s[0])){const r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function wn(n){const e={};for(let t=0;t<n.length;t++){const i=Zs(n[t]);for(const s in i)e[s]=i[s]}return e}function Cc(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Mh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Mu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Nt.workingColorSpace}const bh={clone:Zs,merge:wn};var Sh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ts extends Qs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sh,this.fragmentShader=wh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=Mh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new xt().setHex(s.value);break;case"v2":this.uniforms[i].value=new ot().fromArray(s.value);break;case"v3":this.uniforms[i].value=new ae().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Zt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new yt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Gt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Eh extends ts{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class un extends Qs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=No,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Th extends Qs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=No,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=Nl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ah extends Qs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Rh extends Qs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Kl extends nn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Ch extends Kl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ba=new Gt,Pc=new ae,Lc=new ae;class bu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dr,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Pc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pc),Lc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){ba.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(ba,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,o=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Lr||e.reversedDepth?t.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+o,0,.5*l,0,.5*l+c,0,0,.5,.5,0,0,0,1),t.multiply(ba)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const so=new ae,ro=new cn,fi=new ae;class Su extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(so,ro,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(so,ro,fi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(so,ro,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(so,ro,fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Xi=new ae,Dc=new ot,Ic=new ot;class On extends Su{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ko*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ko*2*Math.atan(Math.tan(Zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,t){return this.getViewBounds(e,Dc,Ic),t.subVectors(Ic,Dc)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const o=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/o,t-=a.offsetY*i/c,s*=a.width/o,i*=a.height/c}const l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ph extends bu{constructor(){super(new On(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=ko*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class Lh extends Kl{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ph}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Dh extends bu{constructor(){super(new On(90,1,.5,500)),this.isPointLightShadow=!0}}class wu extends Kl{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Dh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Eu extends Su{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,l=s+t,o=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,l-=u*this.view.offsetY,o=l-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Us=-90,zs=1;class vl extends nn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new On(Us,zs,e,t);s.layers=this.layers,this.add(s);const r=new On(Us,zs,e,t);r.layers=this.layers,this.add(r);const a=new On(Us,zs,e,t);a.layers=this.layers,this.add(a);const l=new On(Us,zs,e,t);l.layers=this.layers,this.add(l);const o=new On(Us,zs,e,t);o.layers=this.layers,this.add(o);const c=new On(Us,zs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,l,o]=t;for(const c of t)this.remove(c);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Lr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,l,o,c,u]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=v,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(p,d,h),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Ih extends On{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Nc(n,e,t,i){const s=Nh(i);switch(t){case nu:return n*e;case kl:return n*e/s.components*s.byteLength;case Ol:return n*e/s.components*s.byteLength;case vs:return n*e*2/s.components*s.byteLength;case Bl:return n*e*2/s.components*s.byteLength;case iu:return n*e*3/s.components*s.byteLength;case xi:return n*e*4/s.components*s.byteLength;case Hl:return n*e*4/s.components*s.byteLength;case yo:case Mo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case bo:case So:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Va:case Xa:return Math.max(n,16)*Math.max(e,8)/4;case Ga:case Wa:return Math.max(n,8)*Math.max(e,8)/2;case qa:case $a:case Ka:case Ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ya:case Do:case Za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case el:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case tl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case nl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case il:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case sl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case rl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ol:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case al:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ll:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case cl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case fl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ul:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case dl:case hl:case pl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ml:case gl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Io:case xl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Nh(n){switch(n){case Ln:case jf:return{byteLength:1,components:1};case Pr:case Qf:case li:return{byteLength:2,components:1};case zl:case Fl:return{byteLength:2,components:4};case bi:case Ul:case ri:return{byteLength:4,components:1};case eu:case tu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Il}}));typeof window<"u"&&(window.__THREE__?gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Il);function Tu(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Uh(n){const e=new WeakMap;function t(l,o){const c=l.array,u=l.usage,p=c.byteLength,d=n.createBuffer();n.bindBuffer(o,d),n.bufferData(o,c,u),l.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:p}}function i(l,o,c){const u=o.array,p=o.updateRanges;if(n.bindBuffer(c,l),p.length===0)n.bufferSubData(c,0,u);else{p.sort((h,f)=>h.start-f.start);let d=0;for(let h=1;h<p.length;h++){const f=p[d],v=p[h];v.start<=f.start+f.count+1?f.count=Math.max(f.count,v.start+v.count-f.start):(++d,p[d]=v)}p.length=d+1;for(let h=0,f=p.length;h<f;h++){const v=p[h];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}o.clearUpdateRanges()}o.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const o=e.get(l);o&&(n.deleteBuffer(o.buffer),e.delete(l))}function a(l,o){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const u=e.get(l);(!u||u.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const c=e.get(l);if(c===void 0)e.set(l,t(l,o));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,l,o),c.version=l.version}}return{get:s,remove:r,update:a}}var zh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fh=`#ifdef USE_ALPHAHASH
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
#endif`,kh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Oh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gh=`#ifdef USE_AOMAP
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
#endif`,Vh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wh=`#ifdef USE_BATCHING
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
#endif`,Xh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$h=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kh=`#ifdef USE_IRIDESCENCE
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
#endif`,Jh=`#ifdef USE_BUMPMAP
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
#endif`,Zh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,np=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ip=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,rp=`#define PI 3.141592653589793
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
} // validated`,op=`vec3 transformedNormal = objectNormal;
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
#endif`,ap=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,up="gl_FragColor = linearToOutputTexel( gl_FragColor );",dp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hp=`#ifdef USE_ENVMAP
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
#endif`,pp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,mp=`#ifdef USE_ENVMAP
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
#endif`,gp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xp=`#ifdef USE_ENVMAP
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
#endif`,vp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_p=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bp=`#ifdef USE_GRADIENTMAP
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
}`,Sp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ap=`#ifdef USE_ENVMAP
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
#endif`,Rp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dp=`PhysicalMaterial material;
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
#endif`,Ip=`uniform sampler2D dfgLUT;
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
}`,Np=`
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
#endif`,Up=`#if defined( RE_IndirectDiffuse )
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
#endif`,zp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fp=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,kp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Op=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xp=`#if defined( USE_POINTS_UV )
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
#endif`,qp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$p=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kp=`#if defined( USE_MORPHCOLORS )
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
#endif`,Jp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zp=`#ifdef USE_MORPHTARGETS
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
#endif`,jp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,e0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,t0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,s0=`#ifdef USE_NORMALMAP
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
#endif`,r0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,o0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,a0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,l0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,c0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,u0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,d0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,h0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,p0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,m0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,g0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,v0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,y0=`float getShadowMask() {
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
}`,M0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,b0=`#ifdef USE_SKINNING
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
#endif`,S0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w0=`#ifdef USE_SKINNING
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
#endif`,E0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,T0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,A0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,R0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,C0=`#ifdef USE_TRANSMISSION
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
#endif`,P0=`#ifdef USE_TRANSMISSION
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
#endif`,L0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const U0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,z0=`uniform sampler2D t2D;
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
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k0=`uniform float backgroundBlurriness;
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
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H0=`#include <common>
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
}`,G0=`#if DEPTH_PACKING == 3200
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
}`,V0=`#define DISTANCE
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
}`,W0=`#define DISTANCE
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
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,q0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$0=`uniform float scale;
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
}`,Y0=`uniform vec3 diffuse;
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
}`,K0=`#include <common>
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
}`,J0=`uniform vec3 diffuse;
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
}`,Z0=`#define LAMBERT
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
}`,j0=`#define LAMBERT
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
}`,Q0=`#define MATCAP
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
}`,em=`#define MATCAP
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
}`,tm=`#define NORMAL
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
}`,nm=`#define NORMAL
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
}`,im=`#define PHONG
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
}`,sm=`#define PHONG
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
}`,rm=`#define STANDARD
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
}`,om=`#define STANDARD
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
}`,am=`#define TOON
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
}`,lm=`#define TOON
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
}`,cm=`uniform float size;
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
}`,fm=`uniform vec3 diffuse;
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
}`,um=`#include <common>
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
}`,dm=`uniform vec3 color;
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
}`,hm=`uniform float rotation;
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
}`,pm=`uniform vec3 diffuse;
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
}`,Et={alphahash_fragment:zh,alphahash_pars_fragment:Fh,alphamap_fragment:kh,alphamap_pars_fragment:Oh,alphatest_fragment:Bh,alphatest_pars_fragment:Hh,aomap_fragment:Gh,aomap_pars_fragment:Vh,batching_pars_vertex:Wh,batching_vertex:Xh,begin_vertex:qh,beginnormal_vertex:$h,bsdfs:Yh,iridescence_fragment:Kh,bumpmap_pars_fragment:Jh,clipping_planes_fragment:Zh,clipping_planes_pars_fragment:jh,clipping_planes_pars_vertex:Qh,clipping_planes_vertex:ep,color_fragment:tp,color_pars_fragment:np,color_pars_vertex:ip,color_vertex:sp,common:rp,defaultnormal_vertex:op,displacementmap_pars_vertex:ap,displacementmap_vertex:lp,emissivemap_fragment:cp,emissivemap_pars_fragment:fp,colorspace_fragment:up,colorspace_pars_fragment:dp,envmap_fragment:hp,envmap_common_pars_fragment:pp,envmap_pars_fragment:mp,envmap_pars_vertex:gp,envmap_physical_pars_fragment:Ap,envmap_vertex:xp,fog_vertex:vp,fog_pars_vertex:_p,fog_fragment:yp,fog_pars_fragment:Mp,gradientmap_pars_fragment:bp,lightmap_pars_fragment:Sp,lights_lambert_fragment:wp,lights_lambert_pars_fragment:Ep,lights_pars_begin:Tp,lights_toon_fragment:Rp,lights_toon_pars_fragment:Cp,lights_phong_fragment:Pp,lights_phong_pars_fragment:Lp,lights_physical_fragment:Dp,lights_physical_pars_fragment:Ip,lights_fragment_begin:Np,lights_fragment_maps:Up,lights_fragment_end:zp,lightprobes_pars_fragment:Fp,logdepthbuf_fragment:kp,logdepthbuf_pars_fragment:Op,logdepthbuf_pars_vertex:Bp,logdepthbuf_vertex:Hp,map_fragment:Gp,map_pars_fragment:Vp,map_particle_fragment:Wp,map_particle_pars_fragment:Xp,metalnessmap_fragment:qp,metalnessmap_pars_fragment:$p,morphinstance_vertex:Yp,morphcolor_vertex:Kp,morphnormal_vertex:Jp,morphtarget_pars_vertex:Zp,morphtarget_vertex:jp,normal_fragment_begin:Qp,normal_fragment_maps:e0,normal_pars_fragment:t0,normal_pars_vertex:n0,normal_vertex:i0,normalmap_pars_fragment:s0,clearcoat_normal_fragment_begin:r0,clearcoat_normal_fragment_maps:o0,clearcoat_pars_fragment:a0,iridescence_pars_fragment:l0,opaque_fragment:c0,packing:f0,premultiplied_alpha_fragment:u0,project_vertex:d0,dithering_fragment:h0,dithering_pars_fragment:p0,roughnessmap_fragment:m0,roughnessmap_pars_fragment:g0,shadowmap_pars_fragment:x0,shadowmap_pars_vertex:v0,shadowmap_vertex:_0,shadowmask_pars_fragment:y0,skinbase_vertex:M0,skinning_pars_vertex:b0,skinning_vertex:S0,skinnormal_vertex:w0,specularmap_fragment:E0,specularmap_pars_fragment:T0,tonemapping_fragment:A0,tonemapping_pars_fragment:R0,transmission_fragment:C0,transmission_pars_fragment:P0,uv_pars_fragment:L0,uv_pars_vertex:D0,uv_vertex:I0,worldpos_vertex:N0,background_vert:U0,background_frag:z0,backgroundCube_vert:F0,backgroundCube_frag:k0,cube_vert:O0,cube_frag:B0,depth_vert:H0,depth_frag:G0,distance_vert:V0,distance_frag:W0,equirect_vert:X0,equirect_frag:q0,linedashed_vert:$0,linedashed_frag:Y0,meshbasic_vert:K0,meshbasic_frag:J0,meshlambert_vert:Z0,meshlambert_frag:j0,meshmatcap_vert:Q0,meshmatcap_frag:em,meshnormal_vert:tm,meshnormal_frag:nm,meshphong_vert:im,meshphong_frag:sm,meshphysical_vert:rm,meshphysical_frag:om,meshtoon_vert:am,meshtoon_frag:lm,points_vert:cm,points_frag:fm,shadow_vert:um,shadow_frag:dm,sprite_vert:hm,sprite_frag:pm},Ze={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},envMapRotation:{value:new yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},mi={basic:{uniforms:wn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:wn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new xt(0)},envMapIntensity:{value:1}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:wn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:wn([Ze.common,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.roughnessmap,Ze.metalnessmap,Ze.fog,Ze.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:wn([Ze.common,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.gradientmap,Ze.fog,Ze.lights,{emissive:{value:new xt(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:wn([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:wn([Ze.points,Ze.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:wn([Ze.common,Ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:wn([Ze.common,Ze.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:wn([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:wn([Ze.sprite,Ze.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new yt}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distance:{uniforms:wn([Ze.common,Ze.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distance_vert,fragmentShader:Et.distance_frag},shadow:{uniforms:wn([Ze.lights,Ze.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};mi.physical={uniforms:wn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};const oo={r:0,b:0,g:0},mm=new Gt,Au=new yt;Au.set(-1,0,0,0,1,0,0,0,1);function gm(n,e,t,i,s,r){const a=new xt(0);let l=s===!0?0:1,o,c,u=null,p=0,d=null;function h(_){let R=_.isScene===!0?_.background:null;if(R&&R.isTexture){const S=_.backgroundBlurriness>0;R=e.get(R,S)}return R}function f(_){let R=!1;const S=h(_);S===null?g(a,l):S&&S.isColor&&(g(S,1),R=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(_,R){const S=h(R);S&&S.isCubeTexture?(c===void 0&&(c=new At(new Xt(1,1,1),new ts({name:"BackgroundCubeMaterial",uniforms:Zs(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,D,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(mm.makeRotationFromEuler(R.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Au),c.material.toneMapped=Nt.getTransfer(S.colorSpace)!==qt,(u!==S||p!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,p=S.version,d=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(o===void 0&&(o=new At(new Ii(2,2),new ts({name:"BackgroundMaterial",uniforms:Zs(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:xs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=S,o.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,o.material.toneMapped=Nt.getTransfer(S.colorSpace)!==qt,S.matrixAutoUpdate===!0&&S.updateMatrix(),o.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||p!==S.version||d!==n.toneMapping)&&(o.material.needsUpdate=!0,u=S,p=S.version,d=n.toneMapping),o.layers.enableAll(),_.unshift(o,o.geometry,o.material,0,0,null))}function g(_,R){_.getRGB(oo,Mu(n)),t.buffers.color.setClear(oo.r,oo.g,oo.b,R,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,R=1){a.set(_),l=R,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,g(a,l)},render:f,addToRenderList:v,dispose:m}}function xm(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function l(B,V,Q,$,oe){let de=!1;const ce=p(B,$,Q,V);r!==ce&&(r=ce,c(r.object)),de=h(B,$,Q,oe),de&&f(B,$,Q,oe),oe!==null&&e.update(oe,n.ELEMENT_ARRAY_BUFFER),(de||a)&&(a=!1,S(B,V,Q,$),oe!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function o(){return n.createVertexArray()}function c(B){return n.bindVertexArray(B)}function u(B){return n.deleteVertexArray(B)}function p(B,V,Q,$){const oe=$.wireframe===!0;let de=i[V.id];de===void 0&&(de={},i[V.id]=de);const ce=B.isInstancedMesh===!0?B.id:0;let Ie=de[ce];Ie===void 0&&(Ie={},de[ce]=Ie);let pe=Ie[Q.id];pe===void 0&&(pe={},Ie[Q.id]=pe);let Ae=pe[oe];return Ae===void 0&&(Ae=d(o()),pe[oe]=Ae),Ae}function d(B){const V=[],Q=[],$=[];for(let oe=0;oe<t;oe++)V[oe]=0,Q[oe]=0,$[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Q,attributeDivisors:$,object:B,attributes:{},index:null}}function h(B,V,Q,$){const oe=r.attributes,de=V.attributes;let ce=0;const Ie=Q.getAttributes();for(const pe in Ie)if(Ie[pe].location>=0){const ge=oe[pe];let Le=de[pe];if(Le===void 0&&(pe==="instanceMatrix"&&B.instanceMatrix&&(Le=B.instanceMatrix),pe==="instanceColor"&&B.instanceColor&&(Le=B.instanceColor)),ge===void 0||ge.attribute!==Le||Le&&ge.data!==Le.data)return!0;ce++}return r.attributesNum!==ce||r.index!==$}function f(B,V,Q,$){const oe={},de=V.attributes;let ce=0;const Ie=Q.getAttributes();for(const pe in Ie)if(Ie[pe].location>=0){let ge=de[pe];ge===void 0&&(pe==="instanceMatrix"&&B.instanceMatrix&&(ge=B.instanceMatrix),pe==="instanceColor"&&B.instanceColor&&(ge=B.instanceColor));const Le={};Le.attribute=ge,ge&&ge.data&&(Le.data=ge.data),oe[pe]=Le,ce++}r.attributes=oe,r.attributesNum=ce,r.index=$}function v(){const B=r.newAttributes;for(let V=0,Q=B.length;V<Q;V++)B[V]=0}function g(B){m(B,0)}function m(B,V){const Q=r.newAttributes,$=r.enabledAttributes,oe=r.attributeDivisors;Q[B]=1,$[B]===0&&(n.enableVertexAttribArray(B),$[B]=1),oe[B]!==V&&(n.vertexAttribDivisor(B,V),oe[B]=V)}function _(){const B=r.newAttributes,V=r.enabledAttributes;for(let Q=0,$=V.length;Q<$;Q++)V[Q]!==B[Q]&&(n.disableVertexAttribArray(Q),V[Q]=0)}function R(B,V,Q,$,oe,de,ce){ce===!0?n.vertexAttribIPointer(B,V,Q,oe,de):n.vertexAttribPointer(B,V,Q,$,oe,de)}function S(B,V,Q,$){v();const oe=$.attributes,de=Q.getAttributes(),ce=V.defaultAttributeValues;for(const Ie in de){const pe=de[Ie];if(pe.location>=0){let Ae=oe[Ie];if(Ae===void 0&&(Ie==="instanceMatrix"&&B.instanceMatrix&&(Ae=B.instanceMatrix),Ie==="instanceColor"&&B.instanceColor&&(Ae=B.instanceColor)),Ae!==void 0){const ge=Ae.normalized,Le=Ae.itemSize,qe=e.get(Ae);if(qe===void 0)continue;const _e=qe.buffer,ke=qe.type,Oe=qe.bytesPerElement,Ge=ke===n.INT||ke===n.UNSIGNED_INT||Ae.gpuType===Ul;if(Ae.isInterleavedBufferAttribute){const Be=Ae.data,Qe=Be.isInterleavedBuffer===!0?Be.stride:Be.itemSize,Mt=Ae.offset;if(Be.isInstancedInterleavedBuffer||Be.isInstancedBufferAttribute){for(let Xe=0;Xe<pe.locationSize;Xe++)m(pe.location+Xe,Be.meshPerAttribute);B.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Be.meshPerAttribute*Be.count)}else for(let Xe=0;Xe<pe.locationSize;Xe++)g(pe.location+Xe);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let Xe=0;Xe<pe.locationSize;Xe++)R(pe.location+Xe,Le/pe.locationSize,ke,ge,Qe*Oe,(Mt+Le/pe.locationSize*Xe)*Oe,Ge)}else{if(Ae.isInstancedBufferAttribute){for(let Be=0;Be<pe.locationSize;Be++)m(pe.location+Be,Ae.meshPerAttribute);B.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Be=0;Be<pe.locationSize;Be++)g(pe.location+Be);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let Be=0;Be<pe.locationSize;Be++)R(pe.location+Be,Le/pe.locationSize,ke,ge,Le*Oe,Le/pe.locationSize*Be*Oe,Ge)}}else if(ce!==void 0){const ge=ce[Ie];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(pe.location,ge);break;case 3:n.vertexAttrib3fv(pe.location,ge);break;case 4:n.vertexAttrib4fv(pe.location,ge);break;default:n.vertexAttrib1fv(pe.location,ge)}}}}_()}function C(){F();for(const B in i){const V=i[B];for(const Q in V){const $=V[Q];for(const oe in $){const de=$[oe];for(const ce in de)u(de[ce].object),delete de[ce];delete $[oe]}}delete i[B]}}function D(B){if(i[B.id]===void 0)return;const V=i[B.id];for(const Q in V){const $=V[Q];for(const oe in $){const de=$[oe];for(const ce in de)u(de[ce].object),delete de[ce];delete $[oe]}}delete i[B.id]}function b(B){for(const V in i){const Q=i[V];for(const $ in Q){const oe=Q[$];if(oe[B.id]===void 0)continue;const de=oe[B.id];for(const ce in de)u(de[ce].object),delete de[ce];delete oe[B.id]}}}function I(B){for(const V in i){const Q=i[V],$=B.isInstancedMesh===!0?B.id:0,oe=Q[$];if(oe!==void 0){for(const de in oe){const ce=oe[de];for(const Ie in ce)u(ce[Ie].object),delete ce[Ie];delete oe[de]}delete Q[$],Object.keys(Q).length===0&&delete i[V]}}}function F(){N(),a=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:F,resetDefaultState:N,dispose:C,releaseStatesOfGeometry:D,releaseStatesOfObject:I,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:g,disableUnusedAttributes:_}}function vm(n,e,t){let i;function s(o){i=o}function r(o,c){n.drawArrays(i,o,c),t.update(c,i,1)}function a(o,c,u){u!==0&&(n.drawArraysInstanced(i,o,c,u),t.update(c,i,u))}function l(o,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,o,0,c,0,u);let d=0;for(let h=0;h<u;h++)d+=c[h];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function _m(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(b){return!(b!==xi&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(b){const I=b===li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Ln&&b!==ri&&!I&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function o(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=o(c);u!==c&&(gt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&p===!1;t.reversedDepthBuffer===!0&&p===!1&&gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&p===!0&&gt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=n.getParameter(n.MAX_SAMPLES),D=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:o,textureFormatReadable:a,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:h,maxVertexTextures:f,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:R,maxFragmentUniforms:S,maxSamples:C,samples:D}}function ym(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Ji,l=new yt,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const h=p.length!==0||d||i!==0||s;return s=d,i=p.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){t=u(p,d,0)},this.setState=function(p,d,h){const f=p.clippingPlanes,v=p.clipIntersection,g=p.clipShadows,m=n.get(p);if(!s||f===null||f.length===0||r&&!g)r?u(null):c();else{const _=r?0:i,R=_*4;let S=m.clippingState||null;o.value=S,S=u(f,d,R,h);for(let C=0;C!==R;++C)S[C]=t[C];m.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){o.value!==t&&(o.value=t,o.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(p,d,h,f){const v=p!==null?p.length:0;let g=null;if(v!==0){if(g=o.value,f!==!0||g===null){const m=h+v*4,_=d.matrixWorldInverse;l.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let R=0,S=h;R!==v;++R,S+=4)a.copy(p[R]).applyMatrix4(_,l),a.normal.toArray(g,S),g[S+3]=a.constant}o.value=g,o.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}class Jl extends In{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new mu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xt(5,5,5),r=new ts({name:"CubemapFromEquirect",uniforms:Zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rn,blending:qs});r.uniforms.tEquirect.value=t;const a=new At(s,r),l=t.minFilter;return t.minFilter===zi&&(t.minFilter=Dn),new vl(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const Uc=256,Mm=3,bm=20,Ru=256,Cu=16,Sm=3,wm=new ae,Em=new xt;class Ir{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new vl(1,10,null),this._boxMesh=new At(new Xt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:l=wm}=r,o=this._renderer;this._setSize(a);const c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const p=o.autoClear,d=o.autoClearColor,h=o.autoClearDepth,f=o.autoClearStencil,v=e.background;o.autoClear=!0,o.autoClearColor=!0,o.autoClearDepth=!0,o.autoClearStencil=!0,v===null&&(e.background=o.getClearColor(Em));const g=new vl(i,s,u);return g.position.copy(l),g.update(o,e),o.autoClear=p,o.autoClearColor=d,o.autoClearDepth=h,o.autoClearStencil=f,e.background=v,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Uc,Nd(e))}_fromTexture(e,t){e.mapping===Ys||e.mapping===Rr?this._setSize(e.image.length===0?Uc:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,t=zc(e,!1,!1),i=Math.log2(e)-Mm;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=zc(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){const s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ys||e.mapping===Rr?(this._cubemapMaterial===null&&(this._cubemapMaterial=kc()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Fc()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Tm(),this._integrationMaterial=Am());const t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Cu);for(let a=0;a<=i;a++){const l=Ir.lodToRoughness(a,i);if(a>i-Sm)r.roughness.value=l,this._renderCube(e,a,this._integrationMaterial);else{const o=l>0?Math.log2(t)+.5*Math.log2(6/(Ru*Math.pow(l,4)))+.5:0;s.roughness.value=l,s.lodBias.value=o,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Rm());const i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}}function zc(n,e,t){return new Jl(n,{minFilter:zi,generateMipmaps:e,type:li,colorSpace:Uo,depthBuffer:t})}function zr(n,e,t){return new ts({name:n,uniforms:e,vertexShader:Et.cube_vert,fragmentShader:t,side:Rn,blending:qs,depthTest:!1,depthWrite:!1})}function Tm(){return zr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ru}u

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
	`)}function Am(){return zr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Cu}},`

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
	`)}function Rm(){return zr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${bm}
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
	`)}function Fc(){return zr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function kc(){return zr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Cm(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,h=!1){return d==null?null:h?a(d):r(d)}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===$o||h===Yo)if(e.has(d)){const f=e.get(d).texture;return l(f,d.mapping)}else{const f=d.image;if(f&&f.height>0){const v=new Jl(f.height);return v.fromEquirectangularTexture(n,d),e.set(d,v),d.addEventListener("dispose",c),l(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const h=d.mapping,f=h===$o||h===Yo,v=h===Ys||h===Rr;if(f||v){let g=t.get(d);const m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new Ir(n)),g=f?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const _=d.image;return f&&_&&_.height>0||v&&_&&o(_)?(i===null&&(i=new Ir(n)),g=f?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function l(d,h){return h===$o?d.mapping=Ys:h===Yo&&(d.mapping=Rr),d}function o(d){let h=0;const f=6;for(let v=0;v<f;v++)d[v]!==void 0&&h++;return h===f}function c(d){const h=d.target;h.removeEventListener("dispose",c);const f=e.get(h);f!==void 0&&(e.delete(h),f.dispose())}function u(d){const h=d.target;h.removeEventListener("dispose",u);const f=t.get(h);f!==void 0&&(t.delete(h),f.dispose())}function p(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function Pm(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&wo("WebGLRenderer: "+i+" extension not supported."),s}}}function Lm(n,e,t,i){const s={},r=new WeakMap,a=new FinalizationRegistry(f=>delete s[f]);function l(f){o(f.target)}function o(f){f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",l),delete s[f.id],a.unregister(f);const v=r.get(f);v&&(e.remove(v),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function c(f,v){return s[v.id]!==void 0||(v.addEventListener("dispose",l),s[v.id]=new WeakRef(v),a.register(v,v.id,v),t.memory.geometries++),v}function u(f){const v=f.attributes;for(const g in v)e.update(v[g],n.ARRAY_BUFFER)}function p(f){const v=f.index,g=f.attributes.position;let m=0;if(g===void 0)return;const _=v!==null?v.array.length:g.array.length/3-1,R=g.count>=65535?hu:du,S=new R(Math.ceil(_/3)*6,1),C=S.array;if(v!==null){const b=v.array;m=v.version;for(let I=0,F=0;I<_;I+=3){const N=b[I+0],B=b[I+1],V=b[I+2];C[F++]=N,C[F++]=B,C[F++]=B,C[F++]=V,C[F++]=V,C[F++]=N}}else{m=g.version;for(let b=0,I=0;b<_;b+=3){const F=b+0,N=b+1,B=b+2;C[I++]=F,C[I++]=N,C[I++]=N,C[I++]=B,C[I++]=B,C[I++]=F}}S.version=m;const D=r.get(f);D&&e.remove(D),r.set(f,S)}function d(f){const v=r.get(f);if(v){const g=f.index;g!==null&&v.version<g.version&&p(f)}else p(f);return r.get(f)}function h(){for(const f in s){const v=s[f].deref();v!==void 0&&o(v)}}return{get:c,update:u,getWireframeAttribute:d,dispose:h}}function Dm(n,e,t){let i;function s(p){i=p}let r,a;function l(p){r=p.type,a=p.bytesPerElement}function o(p,d){n.drawElements(i,d,r,p*a),t.update(d,i,1)}function c(p,d,h){h!==0&&(n.drawElementsInstanced(i,d,r,p*a,h),t.update(d,i,h))}function u(p,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,p,0,h);let v=0;for(let g=0;g<h;g++)v+=d[g];t.update(v,i,1)}this.setMode=s,this.setIndex=l,this.render=o,this.renderInstances=c,this.renderMultiDraw=u}function Im(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,l){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=l*(r/3);break;case n.LINES:t.lines+=l*(r/2);break;case n.LINE_STRIP:t.lines+=l*(r-1);break;case n.LINE_LOOP:t.lines+=l*r;break;case n.POINTS:t.points+=l*r;break;default:Ht("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Nm(n,e,t){const i=new WeakMap,s=new Zt;function r(a,l,o){const c=a.morphTargetInfluences,u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=u!==void 0?u.length:0;let d=i.get(l);if(d===void 0||d.count!==p){let F=function(){b.dispose(),i.delete(l),l.removeEventListener("dispose",F)};d!==void 0&&d.texture.dispose();const h=l.morphAttributes.position!==void 0,f=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,g=l.morphAttributes.position||[],m=l.morphAttributes.normal||[],_=l.morphAttributes.color||[];let R=0;h===!0&&(R=1),f===!0&&(R=2),v===!0&&(R=3);let S=l.attributes.position.count*R,C=1;S>e.maxTextureSize&&(C=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const D=new Float32Array(S*C*4*p),b=new lu(D,S,C,p);b.type=ri,b.needsUpdate=!0;const I=R*4;for(let N=0;N<p;N++){const B=g[N],V=m[N],Q=_[N],$=S*C*4*N;for(let oe=0;oe<B.count;oe++){const de=oe*I;h===!0&&(s.fromBufferAttribute(B,oe),D[$+de+0]=s.x,D[$+de+1]=s.y,D[$+de+2]=s.z,D[$+de+3]=0),f===!0&&(s.fromBufferAttribute(V,oe),D[$+de+4]=s.x,D[$+de+5]=s.y,D[$+de+6]=s.z,D[$+de+7]=0),v===!0&&(s.fromBufferAttribute(Q,oe),D[$+de+8]=s.x,D[$+de+9]=s.y,D[$+de+10]=s.z,D[$+de+11]=Q.itemSize===4?s.w:1)}}d={count:p,texture:b,size:new ot(S,C)},i.set(l,d),l.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)o.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let h=0;for(let v=0;v<c.length;v++)h+=c[v];const f=l.morphTargetsRelative?1:1-h;o.getUniforms().setValue(n,"morphTargetBaseInfluence",f),o.getUniforms().setValue(n,"morphTargetInfluences",c)}o.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),o.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Um(n,e,t,i,s){let r=new WeakMap;function a(c){const u=s.render.frame,p=c.geometry,d=e.get(c,p);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function l(){r=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:l}}const zm={[Wf]:"LINEAR_TONE_MAPPING",[Xf]:"REINHARD_TONE_MAPPING",[qf]:"CINEON_TONE_MAPPING",[$f]:"ACES_FILMIC_TONE_MAPPING",[Kf]:"AGX_TONE_MAPPING",[Jf]:"NEUTRAL_TONE_MAPPING",[Yf]:"CUSTOM_TONE_MAPPING"};function Fm(n,e,t,i,s,r){const a=new In(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let l=null,o=null,c=null;const u=new fn;u.setAttribute("position",new wt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new wt([0,2,0,0,2,0],2));const p=new Eh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new At(u,p),h=new Eu(-1,1,1,-1,0,1);let f=null,v=null,g=!1,m,_=null,R=[],S=!1;this.setSize=function(C,D){a.setSize(C,D),l!==null&&l.setSize(C,D),o!==null&&o.setSize(C,D);for(let b=0;b<R.length;b++){const I=R[b];I.setSize&&I.setSize(C,D)}},this.setEffects=function(C){R=C,S=R.length>0&&R[0].isRenderPass===!0;const D=a.width,b=a.height;R.length>0&&l===null&&(l=new In(D,b,{type:li,depthBuffer:!1,stencilBuffer:!1}),o=new In(D,b,{type:li,depthBuffer:!1,stencilBuffer:!1}));const I=s===!0&&R.some(F=>F.needsDepthTexture===!0);I!==(a.depthTexture!==null)&&(I===!0&&c===null&&(c=new Js(D,b),r===!0&&(c.format=ji,c.type=Ks)),a.dispose(),a.depthTexture=I?c:null,a.resolveDepthBuffer=I,a.storeMultisampledDepthBuffer=I);for(let F=0;F<R.length;F++){const N=R[F];N.setSize&&N.setSize(D,b),I&&N.needsDepthTexture===!0&&N.setDepthTexture&&N.setDepthTexture(c)}},this.begin=function(C,D){if(g||C.toneMapping===yi&&R.length===0)return!1;if(_=D,D!==null){const b=D.width,I=D.height;(a.width!==b||a.height!==I)&&this.setSize(b,I)}return S===!1&&C.setRenderTarget(a),m=C.toneMapping,C.toneMapping=yi,!0},this.hasRenderPass=function(){return S},this.end=function(C,D){C.toneMapping=m,g=!0;let b=a,I=l;for(let F=0;F<R.length;F++){const N=R[F];N.enabled!==!1&&(N.render(C,I,b,D),N.needsSwap!==!1&&(b=I,I=I===l?o:l))}if(f!==C.outputColorSpace||v!==C.toneMapping){f=C.outputColorSpace,v=C.toneMapping,p.defines={},Nt.getTransfer(f)===qt&&(p.defines.SRGB_TRANSFER="");const F=zm[v];F&&(p.defines[F]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=b.texture,C.setRenderTarget(_),C.render(d,h),_=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),o!==null&&o.dispose(),u.dispose(),p.dispose()}}const Pu=new bn,Lu=new Js(1,1),Du=new gu(1),Iu=new lu,Nu=new Gd,Uu=new mu,Oc=[],Bc=[],Hc=new Float32Array(16),Gc=new Float32Array(9),Vc=new Float32Array(4);function er(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Oc[s];if(r===void 0&&(r=new Float32Array(s),Oc[s]=r),e!==0){i.toArray(r,0);for(let a=1,l=0;a!==e;++a)l+=t,n[a].toArray(r,l)}return r}function rn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function on(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Wo(n,e){let t=Bc[e];t===void 0&&(t=new Int32Array(e),Bc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function km(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Om(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2fv(this.addr,e),on(t,e)}}function Bm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;n.uniform3fv(this.addr,e),on(t,e)}}function Hm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4fv(this.addr,e),on(t,e)}}function Gm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(rn(t,i))return;Vc.set(i),n.uniformMatrix2fv(this.addr,!1,Vc),on(t,i)}}function Vm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(rn(t,i))return;Gc.set(i),n.uniformMatrix3fv(this.addr,!1,Gc),on(t,i)}}function Wm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(rn(t,i))return;Hc.set(i),n.uniformMatrix4fv(this.addr,!1,Hc),on(t,i)}}function Xm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function qm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2iv(this.addr,e),on(t,e)}}function $m(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3iv(this.addr,e),on(t,e)}}function Ym(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4iv(this.addr,e),on(t,e)}}function Km(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Jm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2uiv(this.addr,e),on(t,e)}}function Zm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3uiv(this.addr,e),on(t,e)}}function jm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4uiv(this.addr,e),on(t,e)}}function Xo(n){return n.version===0&&(n.compareFunction=ou,n.needsUpdate=!0),n}function Qm(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Xo(Lu):r=Pu,t.setTexture2D(e||r,s)}function eg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Nu,s)}function tg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Xo(Du):r=Uu,t.setTextureCube(e||r,s)}function ng(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Iu,s)}function ig(n){switch(n){case 5126:return km;case 35664:return Om;case 35665:return Bm;case 35666:return Hm;case 35674:return Gm;case 35675:return Vm;case 35676:return Wm;case 5124:case 35670:return Xm;case 35667:case 35671:return qm;case 35668:case 35672:return $m;case 35669:case 35673:return Ym;case 5125:return Km;case 36294:return Jm;case 36295:return Zm;case 36296:return jm;case 35678:case 36198:case 36298:case 36306:case 35682:return Qm;case 35679:case 36299:case 36307:return eg;case 35680:case 36300:case 36308:case 36293:return tg;case 36289:case 36303:case 36311:case 36292:return ng}}function sg(n,e){n.uniform1fv(this.addr,e)}function rg(n,e){const t=er(e,this.size,2);n.uniform2fv(this.addr,t)}function og(n,e){const t=er(e,this.size,3);n.uniform3fv(this.addr,t)}function ag(n,e){const t=er(e,this.size,4);n.uniform4fv(this.addr,t)}function lg(n,e){const t=er(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function cg(n,e){const t=er(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function fg(n,e){const t=er(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ug(n,e){n.uniform1iv(this.addr,e)}function dg(n,e){n.uniform2iv(this.addr,e)}function hg(n,e){n.uniform3iv(this.addr,e)}function pg(n,e){n.uniform4iv(this.addr,e)}function mg(n,e){n.uniform1uiv(this.addr,e)}function gg(n,e){n.uniform2uiv(this.addr,e)}function xg(n,e){n.uniform3uiv(this.addr,e)}function vg(n,e){n.uniform4uiv(this.addr,e)}function _g(n,e,t){const i=this.cache,s=e.length,r=Wo(t,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Xo(Lu):a=Pu;for(let l=0;l!==s;++l)t.setTexture2D(e[l]||a,r[l])}function yg(n,e,t){const i=this.cache,s=e.length,r=Wo(t,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Nu,r[a])}function Mg(n,e,t){const i=this.cache,s=e.length,r=Wo(t,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Xo(Du):a=Uu;for(let l=0;l!==s;++l)t.setTextureCube(e[l]||a,r[l])}function bg(n,e,t){const i=this.cache,s=e.length,r=Wo(t,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Iu,r[a])}function Sg(n){switch(n){case 5126:return sg;case 35664:return rg;case 35665:return og;case 35666:return ag;case 35674:return lg;case 35675:return cg;case 35676:return fg;case 5124:case 35670:return ug;case 35667:case 35671:return dg;case 35668:case 35672:return hg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return xg;case 36296:return vg;case 35678:case 36198:case 36298:case 36306:case 35682:return _g;case 35679:case 36299:case 36307:return yg;case 35680:case 36300:case 36308:case 36293:return Mg;case 36289:case 36303:case 36311:case 36292:return bg}}class wg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ig(t.type)}}class Eg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sg(t.type)}}class Tg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const l=s[r];l.setValue(e,t[l.id],i)}}}const Sa=/(\w+)(\])?(\[|\.)?/g;function Wc(n,e){n.seq.push(e),n.map[e.id]=e}function Ag(n,e,t){const i=n.name,s=i.length;for(Sa.lastIndex=0;;){const r=Sa.exec(i),a=Sa.lastIndex;let l=r[1];const o=r[2]==="]",c=r[3];if(o&&(l=l|0),c===void 0||c==="["&&a+2===s){Wc(t,c===void 0?new wg(l,n,e):new Eg(l,n,e));break}else{let p=t.map[l];p===void 0&&(p=new Tg(l),Wc(t,p)),t=p}}}class To{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const l=e.getActiveUniform(t,a),o=e.getUniformLocation(t,l.name);Ag(l,o,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const l=t[r],o=i[l.id];o.needsUpdate!==!1&&l.setValue(e,o.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Xc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Rg=37297;let Cg=0;function Pg(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const l=a+1;i.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return i.join(`
`)}const qc=new yt;function Lg(n){Nt._getMatrix(qc,Nt.workingColorSpace,n);const e=`mat3( ${qc.elements.map(t=>t.toFixed(4))} )`;switch(Nt.getTransfer(n)){case zo:return[e,"LinearTransferOETF"];case qt:return[e,"sRGBTransferOETF"];default:return gt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function $c(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Pg(n.getShaderSource(e),l)}else return r}function Dg(n,e){const t=Lg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Ig={[Wf]:"Linear",[Xf]:"Reinhard",[qf]:"Cineon",[$f]:"ACESFilmic",[Kf]:"AgX",[Jf]:"Neutral",[Yf]:"Custom"};function Ng(n,e){const t=Ig[e];return t===void 0?(gt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ao=new ae;function Ug(){Nt.getLuminanceCoefficients(ao);const n=ao.x.toFixed(4),e=ao.y.toFixed(4),t=ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vr).join(`
`)}function Fg(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function kg(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let l=1;r.type===n.FLOAT_MAT2&&(l=2),r.type===n.FLOAT_MAT3&&(l=3),r.type===n.FLOAT_MAT4&&(l=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:l}}return t}function vr(n){return n!==""}function Yc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Kc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Og=/^[ \t]*#include +<([\w\d./]+)>/gm;function _l(n){return n.replace(Og,Bg)}function Bg(n,e){const t=Et[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return _l(t)}const Hg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jc(n){return n.replace(Hg,Gg)}function Gg(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zc(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const Vg={[Mr]:"SHADOWMAP_TYPE_PCF",[xr]:"SHADOWMAP_TYPE_VSM"};function Wg(n){return Vg[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Xg={[Rr]:"ENVMAP_MODE_REFRACTION"};function qg(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Xg[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const $g={[Nl]:"ENVMAP_BLENDING_MULTIPLY",[xd]:"ENVMAP_BLENDING_MIX",[vd]:"ENVMAP_BLENDING_ADD"};function Yg(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":$g[n.combine]||"ENVMAP_BLENDING_NONE"}function Kg(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,l=t.fragmentShader;const o=Wg(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=qg(t),p=Yg(t),d=zg(t),h=Fg(r),f=s.createProgram();let v,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(vr).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(vr).join(`
`),g.length>0&&(g+=`
`)):(v=[Zc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),g=[Zc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?Et.tonemapping_pars_fragment:"",t.toneMapping!==yi?Ng("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,Dg("linearToOutputTexel",t.outputColorSpace),Ug(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vr).join(`
`)),a=_l(a),a=Yc(a,t),a=Kc(a,t),l=_l(l),l=Yc(l,t),l=Kc(l,t),a=Jc(a),l=Jc(l),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",t.glslVersion===rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const _=m+v+a,R=m+g+l,S=Xc(s,s.VERTEX_SHADER,_),C=Xc(s,s.FRAGMENT_SHADER,R);s.attachShader(f,S),s.attachShader(f,C),t.index0AttributeName!==void 0?s.bindAttribLocation(f,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function D(N){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(f)||"",V=s.getShaderInfoLog(S)||"",Q=s.getShaderInfoLog(C)||"",$=B.trim(),oe=V.trim(),de=Q.trim();let ce=!0,Ie=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(ce=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,f,S,C);else{const pe=$c(s,S,"vertex"),Ae=$c(s,C,"fragment");Ht("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+$+`
`+pe+`
`+Ae)}else $!==""?gt("WebGLProgram: Program Info Log:",$):(oe===""||de==="")&&(Ie=!1);Ie&&(N.diagnostics={runnable:ce,programLog:$,vertexShader:{log:oe,prefix:v},fragmentShader:{log:de,prefix:g}})}s.deleteShader(S),s.deleteShader(C),b=new To(s,f),I=kg(s,f)}let b;this.getUniforms=function(){return b===void 0&&D(this),b};let I;this.getAttributes=function(){return I===void 0&&D(this),I};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(f,Rg)),F},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cg++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=S,this.fragmentShader=C,this}let Jg=0;class Zg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new jg(e),t.set(e,i)),i}}class jg{constructor(e){this.id=Jg++,this.code=e,this.usedTimes=0}}function Qg(n){return n===vs||n===Do||n===Io}function ex(n,e,t,i,s,r){const a=new cu,l=new Zg,o=new Set,c=[],u=new Map,p=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(b){return o.add(b),b===0?"uv":`uv${b}`}function f(b,I,F,N,B,V){const Q=N.fog,$=B.geometry,oe=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?N.environment:null,de=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,ce=e.get(b.envMap||oe,de),Ie=d[b.type];let pe=i.precision;b.precision!==null&&(pe=i.getMaxPrecision(b.precision),pe!==b.precision&&gt("WebGLProgram.getParameters:",b.precision,"not supported, using",pe,"instead."));const Ae=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ge=Ae!==void 0?Ae.length:0;let Le=0;$.morphAttributes.position!==void 0&&(Le=1),$.morphAttributes.normal!==void 0&&(Le=2),$.morphAttributes.color!==void 0&&(Le=3);let qe,_e,ke,Oe;if(Ie){const Ne=mi[Ie];qe=Ne.vertexShader,_e=Ne.fragmentShader}else{qe=b.vertexShader,_e=b.fragmentShader;const Ne=l.getVertexShaderStage(b),ft=l.getFragmentShaderStage(b);l.update(b,Ne,ft),ke=Ne.id,Oe=ft.id}const Ge=n.getRenderTarget(),Be=n.state.buffers.depth.getReversed(),Qe=B.isInstancedMesh===!0,Mt=B.isBatchedMesh===!0,Xe=!!b.map,tt=!!b.matcap,ut=!!ce,et=ut&&ce.isPMREMTexture===!0,Rt=!!b.aoMap,bt=!!b.lightMap,Lt=!!b.bumpMap&&b.wireframe===!1,mt=!!b.normalMap,Ot=!!b.displacementMap,Ue=!!b.emissiveMap,He=!!b.metalnessMap,rt=!!b.roughnessMap,it=b.anisotropy>0,te=b.clearcoat>0,ct=b.diffuseRoughness>0,st=b.dispersion>0,Y=b.retroreflectivity>0,W=b.iridescence>0,xe=b.sheen>0,ye=b.transmission>0,we=it&&!!b.anisotropyMap,k=te&&!!b.clearcoatMap,A=te&&!!b.clearcoatNormalMap,ee=te&&!!b.clearcoatRoughnessMap,Ee=ct&&!!b.diffuseRoughnessMap,Se=W&&!!b.iridescenceMap,ze=W&&!!b.iridescenceThicknessMap,E=xe&&!!b.sheenColorMap,P=xe&&!!b.sheenRoughnessMap,H=!!b.specularMap,ne=!!b.specularColorMap,U=!!b.specularIntensityMap,re=ye&&!!b.transmissionMap,K=ye&&!!b.thicknessMap,Z=!!b.gradientMap,he=!!b.alphaMap,Te=b.alphaTest>0,Fe=!!b.alphaHash,Ve=!!b.extensions;let Me=yi;b.toneMapped&&(Ge===null||Ge.isXRRenderTarget===!0)&&(Me=n.toneMapping);const We=et?ce.isCompressedCubeTexture?ce.image[0].mipmaps:ce.mipmaps:null,je={shaderID:Ie,shaderType:b.type,shaderName:b.name,vertexShader:qe,fragmentShader:_e,defines:b.defines,customVertexShaderID:ke,customFragmentShaderID:Oe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:pe,batching:Mt,batchingColor:Mt&&B._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&B.instanceColor!==null,instancingMorph:Qe&&B.morphTexture!==null,outputColorSpace:Ge===null?n.outputColorSpace:Ge.isXRRenderTarget===!0?Ge.texture.colorSpace:Nt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Xe,matcap:tt,envMap:ut,envMapMode:ut&&ce.mapping,envMapPMREM:et,envMapMaxLod:et?We.length-1:null,envMapSize:et?We[0].width:null,aoMap:Rt,lightMap:bt,bumpMap:Lt,normalMap:mt,displacementMap:Ot,emissiveMap:Ue,normalMapObjectSpace:mt&&b.normalMapType===Md,normalMapTangentSpace:mt&&b.normalMapType===No,packedNormalMap:mt&&b.normalMapType===No&&Qg(b.normalMap.format),metalnessMap:He,roughnessMap:rt,anisotropy:it,anisotropyMap:we,clearcoat:te,clearcoatMap:k,clearcoatNormalMap:A,clearcoatRoughnessMap:ee,diffuseRoughness:ct,diffuseRoughnessMap:Ee,dispersion:st,retroreflection:Y,iridescence:W,iridescenceMap:Se,iridescenceThicknessMap:ze,sheen:xe,sheenColorMap:E,sheenRoughnessMap:P,specularMap:H,specularColorMap:ne,specularIntensityMap:U,transmission:ye,transmissionMap:re,thicknessMap:K,gradientMap:Z,opaque:b.transparent===!1&&b.blending===br&&b.alphaToCoverage===!1,alphaMap:he,alphaTest:Te,alphaHash:Fe,combine:b.combine,mapUv:Xe&&h(b.map.channel),aoMapUv:Rt&&h(b.aoMap.channel),lightMapUv:bt&&h(b.lightMap.channel),bumpMapUv:Lt&&h(b.bumpMap.channel),normalMapUv:mt&&h(b.normalMap.channel),displacementMapUv:Ot&&h(b.displacementMap.channel),emissiveMapUv:Ue&&h(b.emissiveMap.channel),metalnessMapUv:He&&h(b.metalnessMap.channel),roughnessMapUv:rt&&h(b.roughnessMap.channel),anisotropyMapUv:we&&h(b.anisotropyMap.channel),clearcoatMapUv:k&&h(b.clearcoatMap.channel),clearcoatNormalMapUv:A&&h(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&h(b.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Ee&&h(b.diffuseRoughnessMap.channel),iridescenceMapUv:Se&&h(b.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&h(b.iridescenceThicknessMap.channel),sheenColorMapUv:E&&h(b.sheenColorMap.channel),sheenRoughnessMapUv:P&&h(b.sheenRoughnessMap.channel),specularMapUv:H&&h(b.specularMap.channel),specularColorMapUv:ne&&h(b.specularColorMap.channel),specularIntensityMapUv:U&&h(b.specularIntensityMap.channel),transmissionMapUv:re&&h(b.transmissionMap.channel),thicknessMapUv:K&&h(b.thicknessMap.channel),alphaMapUv:he&&h(b.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(mt||it),vertexNormals:!!$.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!$.attributes.uv&&(Xe||he),fog:!!Q,useFog:b.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||$.attributes.normal===void 0&&mt===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Be,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Le,numSunLights:I.sun.length,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numSunLightShadows:I.sunShadowMap.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:V.filter(Ne=>Ne.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:Me,decodeVideoTexture:Xe&&b.map.isVideoTexture===!0&&Nt.getTransfer(b.map.colorSpace)===qt,decodeVideoTextureEmissive:Ue&&b.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(b.emissiveMap.colorSpace)===qt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Li,flipSided:b.side===Rn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ve&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&b.extensions.multiDraw===!0||Mt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return je.vertexUv1s=o.has(1),je.vertexUv2s=o.has(2),je.vertexUv3s=o.has(3),o.clear(),je}function v(b){const I=[];if(b.shaderID?I.push(b.shaderID):(I.push(b.customVertexShaderID),I.push(b.customFragmentShaderID)),b.defines!==void 0)for(const F in b.defines)I.push(F),I.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(g(I,b),m(I,b),I.push(n.outputColorSpace)),I.push(b.customProgramCacheKey),I.join()}function g(b,I){b.push(I.precision),b.push(I.outputColorSpace),b.push(I.envMapMode),b.push(I.envMapPMREM),b.push(I.envMapMaxLod),b.push(I.envMapSize),b.push(I.mapUv),b.push(I.alphaMapUv),b.push(I.lightMapUv),b.push(I.aoMapUv),b.push(I.bumpMapUv),b.push(I.normalMapUv),b.push(I.displacementMapUv),b.push(I.emissiveMapUv),b.push(I.metalnessMapUv),b.push(I.roughnessMapUv),b.push(I.anisotropyMapUv),b.push(I.clearcoatMapUv),b.push(I.clearcoatNormalMapUv),b.push(I.clearcoatRoughnessMapUv),b.push(I.diffuseRoughnessMapUv),b.push(I.iridescenceMapUv),b.push(I.iridescenceThicknessMapUv),b.push(I.sheenColorMapUv),b.push(I.sheenRoughnessMapUv),b.push(I.specularMapUv),b.push(I.specularColorMapUv),b.push(I.specularIntensityMapUv),b.push(I.transmissionMapUv),b.push(I.thicknessMapUv),b.push(I.combine),b.push(I.fogExp2),b.push(I.sizeAttenuation),b.push(I.morphTargetsCount),b.push(I.numSunLights),b.push(I.numDirLights),b.push(I.numPointLights),b.push(I.numSpotLights),b.push(I.numSpotLightMaps),b.push(I.numHemiLights),b.push(I.numRectAreaLights),b.push(I.numSunLightShadows),b.push(I.numDirLightShadows),b.push(I.numPointLightShadows),b.push(I.numSpotLightShadows),b.push(I.numSpotLightShadowsWithMaps),b.push(I.numLightProbes),b.push(I.numLightProbeGrids),b.push(I.shadowMapType),b.push(I.toneMapping),b.push(I.numClippingPlanes),b.push(I.numClipIntersection),b.push(I.depthPacking)}function m(b,I){a.disableAll(),I.instancing&&a.enable(0),I.instancingColor&&a.enable(1),I.instancingMorph&&a.enable(2),I.matcap&&a.enable(3),I.envMap&&a.enable(4),I.normalMapObjectSpace&&a.enable(5),I.normalMapTangentSpace&&a.enable(6),I.clearcoat&&a.enable(7),I.iridescence&&a.enable(8),I.alphaTest&&a.enable(9),I.vertexColors&&a.enable(10),I.vertexAlphas&&a.enable(11),I.vertexUv1s&&a.enable(12),I.vertexUv2s&&a.enable(13),I.vertexUv3s&&a.enable(14),I.vertexTangents&&a.enable(15),I.anisotropy&&a.enable(16),I.alphaHash&&a.enable(17),I.batching&&a.enable(18),I.dispersion&&a.enable(19),I.retroreflection&&a.enable(24),I.diffuseRoughness&&a.enable(25),I.batchingColor&&a.enable(20),I.gradientMap&&a.enable(21),I.packedNormalMap&&a.enable(22),I.vertexNormals&&a.enable(23),b.push(a.mask),a.disableAll(),I.fog&&a.enable(0),I.useFog&&a.enable(1),I.flatShading&&a.enable(2),I.logarithmicDepthBuffer&&a.enable(3),I.reversedDepthBuffer&&a.enable(4),I.skinning&&a.enable(5),I.morphTargets&&a.enable(6),I.morphNormals&&a.enable(7),I.morphColors&&a.enable(8),I.premultipliedAlpha&&a.enable(9),I.shadowMapEnabled&&a.enable(10),I.doubleSided&&a.enable(11),I.flipSided&&a.enable(12),I.useDepthPacking&&a.enable(13),I.dithering&&a.enable(14),I.transmission&&a.enable(15),I.sheen&&a.enable(16),I.opaque&&a.enable(17),I.pointsUvs&&a.enable(18),I.decodeVideoTexture&&a.enable(19),I.decodeVideoTextureEmissive&&a.enable(20),I.alphaToCoverage&&a.enable(21),I.numLightProbeGrids>0&&a.enable(22),I.hasPositionAttribute&&a.enable(23),b.push(a.mask)}function _(b){const I=d[b.type];let F;if(I){const N=mi[I];F=bh.clone(N.uniforms)}else F=b.uniforms;return F}function R(b,I){let F=u.get(I);return F!==void 0?++F.usedTimes:(F=new Kg(n,I,b,s),c.push(F),u.set(I,F)),F}function S(b){if(--b.usedTimes===0){const I=c.indexOf(b);c[I]=c[c.length-1],c.pop(),u.delete(b.cacheKey),b.destroy()}}function C(b){l.remove(b)}function D(){l.dispose()}return{getParameters:f,getProgramCacheKey:v,getUniforms:_,acquireProgram:R,releaseProgram:S,releaseShaderCache:C,programs:c,dispose:D}}function tx(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let l=n.get(a);return l===void 0&&(l={},n.set(a,l)),l}function i(a){n.delete(a)}function s(a,l,o){n.get(a)[l]=o}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function nx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function jc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Qc(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function l(d,h,f,v,g,m){let _=n[e];return _===void 0?(_={id:d.id,object:d,geometry:h,material:f,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:g,group:m},n[e]=_):(_.id=d.id,_.object=d,_.geometry=h,_.material=f,_.materialVariant=a(d),_.groupOrder=v,_.renderOrder=d.renderOrder,_.z=g,_.group=m),e++,_}function o(d,h,f,v,g,m,_){_.reversedDepth===!0&&(g=-g);const R=l(d,h,f,v,g,m);f.transmission>0?i.push(R):f.transparent===!0?s.push(R):t.push(R)}function c(d,h,f,v,g,m){const _=l(d,h,f,v,g,m);f.transmission>0?i.unshift(_):f.transparent===!0?s.unshift(_):t.unshift(_)}function u(d,h){t.length>1&&t.sort(d||nx),i.length>1&&i.sort(h||jc),s.length>1&&s.sort(h||jc)}function p(){for(let d=e,h=n.length;d<h;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:p,sort:u}}function ix(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Qc,n.set(i,[a])):s>=r.length?(a=new Qc,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function sx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new ae,color:new xt};break;case"SpotLight":t={position:new ae,direction:new ae,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ae,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ae,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return n[e.id]=t,t}}}function rx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ox=0;function ax(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function lx(n){const e=new sx,t=rx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new ae);const s=new ae,r=new Gt,a=new Gt;function l(c){let u=0,p=0,d=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let h=0,f=0,v=0,g=0,m=0,_=0,R=0,S=0,C=0,D=0,b=0,I=0,F=0,N=0;c.sort(ax);for(let V=0,Q=c.length;V<Q;V++){const $=c[V],oe=$.color,de=$.intensity,ce=$.distance;let Ie=null;if($.shadow&&$.shadow.map&&($.shadow.map.texture.format===vs?Ie=$.shadow.map.texture:Ie=$.shadow.map.depthTexture||$.shadow.map.texture),$.isAmbientLight)u+=oe.r*de,p+=oe.g*de,d+=oe.b*de;else if($.isLightProbe){for(let pe=0;pe<9;pe++)i.probe[pe].addScaledVector($.sh.coefficients[pe],de);N++}else if($.isSunLight){const pe=e.get($);if(pe.color.copy($.color).multiplyScalar($.intensity),$.castShadow){const Ae=$.shadow,ge=t.get($);ge.shadowIntensity=Ae.intensity,ge.shadowBias=Ae.bias,ge.shadowNormalBias=Ae.normalBias,ge.shadowRadius=Ae.radius,ge.shadowMapSize.copy(Ae.mapSize).multiply(Ae.getFrameExtents()),i.sunShadow[f]=ge,i.sunShadowMap[f]=Ie;const Le=Ae.getViewportCount();for(let qe=0;qe<Le;qe++)i.sunShadowMatrix[v+qe]=Ae.getMatrix(qe),i.sunShadowCascade[v+qe]=Ae._cascadeData[qe];v+=Le,f++}i.sun[h]=pe,h++}else if($.isDirectionalLight){const pe=e.get($);if(pe.color.copy($.color).multiplyScalar($.intensity),$.castShadow){const Ae=$.shadow,ge=t.get($);ge.shadowIntensity=Ae.intensity,ge.shadowBias=Ae.bias,ge.shadowNormalBias=Ae.normalBias,ge.shadowRadius=Ae.radius,ge.shadowMapSize=Ae.mapSize,i.directionalShadow[g]=ge,i.directionalShadowMap[g]=Ie,i.directionalShadowMatrix[g]=$.shadow.matrix,C++}i.directional[g]=pe,g++}else if($.isSpotLight){const pe=e.get($);pe.position.setFromMatrixPosition($.matrixWorld),pe.color.copy(oe).multiplyScalar(de),pe.distance=ce,pe.coneCos=Math.cos($.angle),pe.penumbraCos=Math.cos($.angle*(1-$.penumbra)),pe.decay=$.decay,i.spot[_]=pe;const Ae=$.shadow;if($.map&&(i.spotLightMap[I]=$.map,I++,Ae.updateMatrices($),$.castShadow&&F++),i.spotLightMatrix[_]=Ae.matrix,$.castShadow){const ge=t.get($);ge.shadowIntensity=Ae.intensity,ge.shadowBias=Ae.bias,ge.shadowNormalBias=Ae.normalBias,ge.shadowRadius=Ae.radius,ge.shadowMapSize=Ae.mapSize,i.spotShadow[_]=ge,i.spotShadowMap[_]=Ie,b++}_++}else if($.isRectAreaLight){const pe=e.get($);pe.color.copy(oe).multiplyScalar(de),pe.halfWidth.set($.width*.5,0,0),pe.halfHeight.set(0,$.height*.5,0),i.rectArea[R]=pe,R++}else if($.isPointLight){const pe=e.get($);if(pe.color.copy($.color).multiplyScalar($.intensity),pe.distance=$.distance,pe.decay=$.decay,$.castShadow){const Ae=$.shadow,ge=t.get($);ge.shadowIntensity=Ae.intensity,ge.shadowBias=Ae.bias,ge.shadowNormalBias=Ae.normalBias,ge.shadowRadius=Ae.radius,ge.shadowMapSize=Ae.mapSize,ge.shadowCameraNear=Ae.camera.near,ge.shadowCameraFar=Ae.camera.far,i.pointShadow[m]=ge,i.pointShadowMap[m]=Ie,i.pointShadowMatrix[m]=$.shadow.matrix,D++}i.point[m]=pe,m++}else if($.isHemisphereLight){const pe=e.get($);pe.skyColor.copy($.color).multiplyScalar(de),pe.groundColor.copy($.groundColor).multiplyScalar(de),i.hemi[S]=pe,S++}}R>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ze.LTC_FLOAT_1,i.rectAreaLTC2=Ze.LTC_FLOAT_2):(i.rectAreaLTC1=Ze.LTC_HALF_1,i.rectAreaLTC2=Ze.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=d;const B=i.hash;(B.sunLength!==h||B.directionalLength!==g||B.pointLength!==m||B.spotLength!==_||B.rectAreaLength!==R||B.hemiLength!==S||B.numSunShadows!==f||B.numDirectionalShadows!==C||B.numPointShadows!==D||B.numSpotShadows!==b||B.numSpotMaps!==I||B.numLightProbes!==N)&&(i.sun.length=h,i.directional.length=g,i.spot.length=_,i.rectArea.length=R,i.point.length=m,i.hemi.length=S,i.sunShadow.length=f,i.sunShadowMap.length=f,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.directionalShadowMatrix.length=C,i.pointShadow.length=D,i.pointShadowMap.length=D,i.pointShadowMatrix.length=D,i.spotShadow.length=b,i.spotShadowMap.length=b,i.spotLightMatrix.length=b+I-F,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=N,B.sunLength=h,B.directionalLength=g,B.pointLength=m,B.spotLength=_,B.rectAreaLength=R,B.hemiLength=S,B.numSunShadows=f,B.numDirectionalShadows=C,B.numPointShadows=D,B.numSpotShadows=b,B.numSpotMaps=I,B.numLightProbes=N,i.version=ox++)}function o(c,u){let p=0,d=0,h=0,f=0,v=0,g=0;const m=u.matrixWorldInverse;for(let _=0,R=c.length;_<R;_++){const S=c[_];if(S.isSunLight){const C=i.sun[p];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(m),p++}else if(S.isDirectionalLight){const C=i.directional[d];C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),d++}else if(S.isSpotLight){const C=i.spot[f];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const C=i.rectArea[v];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const C=i.point[h];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(m),h++}else if(S.isHemisphereLight){const C=i.hemi[g];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(m),g++}}}return{setup:l,setupView:o,state:i}}function ef(n){const e=new lx(n),t=[],i=[],s=[];function r(p){u.camera=p,t.length=0,i.length=0,s.length=0}function a(p){p.isLightProbeGrid?s.push(p):t.push(p)}function l(p){i.push(p)}function o(){e.setup(t),s.sort((p,d)=>p.priority-d.priority||p.id-d.id)}function c(p){e.setupView(t,p)}const u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:l}}function cx(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let l;return a===void 0?(l=new ef(n),e.set(s,[l])):r>=a.length?(l=new ef(n),a.push(l)):l=a[r],l}function i(){e=new WeakMap}return{get:t,dispose:i}}const fx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ux=`uniform sampler2D shadow_pass;
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
}`,dx=[new ae(1,0,0),new ae(-1,0,0),new ae(0,1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1)],hx=[new ae(0,-1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1),new ae(0,-1,0),new ae(0,-1,0)],tf=new Gt,lr=new ae,wa=new ae;function px(n,e,t){let i=new Dr;const s=new ot,r=new ot,a=new Zt,l=new Ah,o=new Rh,c={},u=t.maxTextureSize,p={[xs]:Rn,[Rn]:xs,[Li]:Li},d=new ts({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:fx,fragmentShader:ux}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const f=new fn;f.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new At(f,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mr;let m=this.type;this.render=function(D,b,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||D.length===0)return;this.type===ju&&(gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Mr);const F=n.getRenderTarget(),N=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),V=n.state;V.setBlending(qs),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const Q=m!==this.type;Q&&b.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(oe=>oe.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,oe=D.length;$<oe;$++){const de=D[$],ce=de.shadow;if(ce===void 0){gt("WebGLShadowMap:",de,"has no shadow.");continue}if(ce.autoUpdate===!1&&ce.needsUpdate===!1)continue;s.copy(ce.mapSize);const Ie=ce.getFrameExtents();s.multiply(Ie),r.copy(ce.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Ie.x),s.x=r.x*Ie.x,ce.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Ie.y),s.y=r.y*Ie.y,ce.mapSize.y=r.y));const pe=n.state.buffers.depth.getReversed();if(ce.camera._reversedDepth=pe,ce.map===null||Q===!0){if(ce.map!==null&&(ce.map.depthTexture!==null&&(ce.map.depthTexture.dispose(),ce.map.depthTexture=null),ce.map.dispose()),this.type===xr){if(de.isPointLight){gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ce.map=new In(s.x,s.y,{format:vs,type:li,minFilter:Dn,magFilter:Dn,generateMipmaps:!1}),ce.map.texture.name=de.name+".shadowMap",ce.map.depthTexture=new Js(s.x,s.y,ri),ce.map.depthTexture.name=de.name+".shadowMapDepth",ce.map.depthTexture.format=es,ce.map.depthTexture.compareFunction=null,ce.map.depthTexture.minFilter=hn,ce.map.depthTexture.magFilter=hn}else de.isPointLight?(ce.map=new Jl(s.x),ce.map.depthTexture=new gu(s.x,bi)):(ce.map=new In(s.x,s.y),ce.map.depthTexture=new Js(s.x,s.y,bi)),ce.map.depthTexture.name=de.name+".shadowMap",ce.map.depthTexture.format=es,this.type===Mr?(ce.map.depthTexture.compareFunction=pe?ru:su,ce.map.depthTexture.minFilter=Dn,ce.map.depthTexture.magFilter=Dn):(ce.map.depthTexture.compareFunction=null,ce.map.depthTexture.minFilter=hn,ce.map.depthTexture.magFilter=hn);ce.camera.updateProjectionMatrix()}ce.map.isWebGLCubeRenderTarget!==!0&&(ce.map.width!==s.x||ce.map.height!==s.y)&&ce.map.setSize(s.x,s.y);const Ae=ce.map.isWebGLCubeRenderTarget?6:ce.getViewportCount();de.isPointLight!==!0&&ce.updateMatrices(de,I);const ge=(ce.camera.layers.mask&4294967294)!==0?ce.camera.layers:I.layers;for(let Le=0;Le<Ae;Le++){const qe=ce.getCamera(Le);if(de.isPointLight){const _e=ce.camera,ke=ce.matrix,Oe=de.distance||_e.far;Oe!==_e.far&&(_e.far=Oe,_e.updateProjectionMatrix()),lr.setFromMatrixPosition(de.matrixWorld),_e.position.copy(lr),wa.copy(_e.position),wa.add(dx[Le]),_e.up.copy(hx[Le]),_e.lookAt(wa),_e.updateMatrixWorld(),ke.makeTranslation(-lr.x,-lr.y,-lr.z),tf.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),ce._frustum.setFromProjectionMatrix(tf,_e.coordinateSystem,_e.reversedDepth)}if(ce.map.isWebGLCubeRenderTarget)n.setRenderTarget(ce.map,Le),n.clear();else{Le===0&&(n.setRenderTarget(ce.map),n.clear());const _e=ce.getViewport(Le);a.set(r.x*_e.x,r.y*_e.y,r.x*_e.z,r.y*_e.w),V.viewport(a)}i=ce.getFrustum(Le),S(b,I,qe,de,ge,this.type)}ce.isPointLightShadow!==!0&&this.type===xr&&_(ce,I),ce.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(F,N,B)};function _(D,b){const I=e.update(v);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,h.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),D.mapPass===null?D.mapPass=new In(s.x,s.y,{format:vs,type:li}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),d.uniforms.shadow_pass.value=D.map.depthTexture,d.uniforms.resolution.value.set(D.map.width,D.map.height),d.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(b,null,I,d,v,null),h.uniforms.shadow_pass.value=D.mapPass.texture,h.uniforms.resolution.value.set(D.map.width,D.map.height),h.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(b,null,I,h,v,null)}function R(D,b,I,F){let N=null;const B=I.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(B!==void 0)N=B;else if(N=I.isPointLight===!0?o:l,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const V=N.uuid,Q=b.uuid;let $=c[V];$===void 0&&($={},c[V]=$);let oe=$[Q];oe===void 0&&(oe=N.clone(),$[Q]=oe,b.addEventListener("dispose",C)),N=oe}if(N.visible=b.visible,N.wireframe=b.wireframe,F===xr?N.side=b.shadowSide!==null?b.shadowSide:b.side:N.side=b.shadowSide!==null?b.shadowSide:p[b.side],N.alphaMap=b.alphaMap,N.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,N.map=b.map,N.clipShadows=b.clipShadows,N.clippingPlanes=b.clippingPlanes,N.clipIntersection=b.clipIntersection,N.displacementMap=b.displacementMap,N.displacementScale=b.displacementScale,N.displacementBias=b.displacementBias,N.wireframeLinewidth=b.wireframeLinewidth,N.linewidth=b.linewidth,I.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const V=n.properties.get(N);V.light=I}return N}function S(D,b,I,F,N,B){if(D.visible===!1)return;if(D.layers.test(N)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&B===xr)&&(!D.frustumCulled||D.intersectsFrustum(i))){D.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,D.matrixWorld);const $=e.update(D),oe=D.material;if(Array.isArray(oe)){const de=$.groups;for(let ce=0,Ie=de.length;ce<Ie;ce++){const pe=de[ce],Ae=oe[pe.materialIndex];if(Ae&&Ae.visible){const ge=R(D,Ae,F,B);D.onBeforeShadow(n,D,b,I,$,ge,pe),n.renderBufferDirect(I,null,$,ge,D,pe),D.onAfterShadow(n,D,b,I,$,ge,pe)}}}else if(oe.visible){const de=R(D,oe,F,B);D.onBeforeShadow(n,D,b,I,$,de,null),n.renderBufferDirect(I,null,$,de,D,null),D.onAfterShadow(n,D,b,I,$,de,null)}}const Q=D.children;for(let $=0,oe=Q.length;$<oe;$++)S(Q[$],b,I,F,N,B)}function C(D){D.target.removeEventListener("dispose",C);for(const I in c){const F=c[I],N=D.target.uuid;N in F&&(F[N].dispose(),delete F[N])}}}function mx(n,e){function t(){let U=!1;const re=new Zt;let K=null;const Z=new Zt(0,0,0,0);return{setMask:function(he){K!==he&&!U&&(n.colorMask(he,he,he,he),K=he)},setLocked:function(he){U=he},setClear:function(he,Te,Fe,Ve,Me){Me===!0&&(he*=Ve,Te*=Ve,Fe*=Ve),re.set(he,Te,Fe,Ve),Z.equals(re)===!1&&(n.clearColor(he,Te,Fe,Ve),Z.copy(re))},reset:function(){U=!1,K=null,Z.set(-1,0,0,0)}}}function i(){let U=!1,re=!1,K=null,Z=null,he=null;return{setReversed:function(Te){if(re!==Te){const Fe=e.get("EXT_clip_control");Te?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),re=Te;const Ve=he;he=null,this.setClear(Ve)}},getReversed:function(){return re},setTest:function(Te){Te?Be(n.DEPTH_TEST):Qe(n.DEPTH_TEST)},setMask:function(Te){K!==Te&&!U&&(n.depthMask(Te),K=Te)},setFunc:function(Te){if(re&&(Te=Dd[Te]),Z!==Te){switch(Te){case Na:n.depthFunc(n.NEVER);break;case Ua:n.depthFunc(n.ALWAYS);break;case za:n.depthFunc(n.LESS);break;case Ar:n.depthFunc(n.LEQUAL);break;case Fa:n.depthFunc(n.EQUAL);break;case ka:n.depthFunc(n.GEQUAL);break;case Oa:n.depthFunc(n.GREATER);break;case Ba:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=Te}},setLocked:function(Te){U=Te},setClear:function(Te){he!==Te&&(he=Te,re&&(Te=1-Te),n.clearDepth(Te))},reset:function(){U=!1,K=null,Z=null,he=null,re=!1}}}function s(){let U=!1,re=null,K=null,Z=null,he=null,Te=null,Fe=null,Ve=null,Me=null;return{setTest:function(We){U||(We?Be(n.STENCIL_TEST):Qe(n.STENCIL_TEST))},setMask:function(We){re!==We&&!U&&(n.stencilMask(We),re=We)},setFunc:function(We,je,Ne){(K!==We||Z!==je||he!==Ne)&&(n.stencilFunc(We,je,Ne),K=We,Z=je,he=Ne)},setOp:function(We,je,Ne){(Te!==We||Fe!==je||Ve!==Ne)&&(n.stencilOp(We,je,Ne),Te=We,Fe=je,Ve=Ne)},setLocked:function(We){U=We},setClear:function(We){Me!==We&&(n.clearStencil(We),Me=We)},reset:function(){U=!1,re=null,K=null,Z=null,he=null,Te=null,Fe=null,Ve=null,Me=null}}}const r=new t,a=new i,l=new s;let o={};const c=new WeakMap;let u={},p={},d={},h=new WeakMap,f=[],v=null,g=!1,m=null,_=null,R=null,S=null,C=null,D=null,b=null,I=new xt(0,0,0),F=0,N=!1,B=null,V=null,Q=null,$=null,oe=null;const de=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,Ie=0;const pe=n.getParameter(n.VERSION);pe.indexOf("WebGL")!==-1?(Ie=parseFloat(/^WebGL (\d)/.exec(pe)[1]),ce=Ie>=1):pe.indexOf("OpenGL ES")!==-1&&(Ie=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),ce=Ie>=2);let Ae=null,ge={};const Le=n.getParameter(n.SCISSOR_BOX),qe=n.getParameter(n.VIEWPORT),_e=new Zt().fromArray(Le),ke=new Zt().fromArray(qe);function Oe(U,re,K,Z){const he=new Uint8Array(4),Te=n.createTexture();n.bindTexture(U,Te),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<K;Fe++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(re,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(re+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return Te}const Ge={};Ge[n.TEXTURE_2D]=Oe(n.TEXTURE_2D,n.TEXTURE_2D,1),Ge[n.TEXTURE_CUBE_MAP]=Oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ge[n.TEXTURE_2D_ARRAY]=Oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ge[n.TEXTURE_3D]=Oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),Be(n.DEPTH_TEST),a.setFunc(Ar),Lt(!1),mt(tc),Be(n.CULL_FACE),Rt(qs);function Be(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function Qe(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function Mt(U,re){return d[U]!==re?(n.bindFramebuffer(U,re),d[U]=re,U===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=re),U===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=re),!0):!1}function Xe(U,re){let K=f,Z=!1;if(U){K=h.get(re),K===void 0&&(K=[],h.set(re,K));const he=U.textures;if(K.length!==he.length||K[0]!==n.COLOR_ATTACHMENT0){for(let Te=0,Fe=he.length;Te<Fe;Te++)K[Te]=n.COLOR_ATTACHMENT0+Te;K.length=he.length,Z=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,Z=!0);Z&&n.drawBuffers(K)}function tt(U){return v!==U?(n.useProgram(U),v=U,!0):!1}const ut={[Hs]:n.FUNC_ADD,[ed]:n.FUNC_SUBTRACT,[td]:n.FUNC_REVERSE_SUBTRACT};ut[nd]=n.MIN,ut[id]=n.MAX;const et={[sd]:n.ZERO,[rd]:n.ONE,[od]:n.SRC_COLOR,[Gf]:n.SRC_ALPHA,[dd]:n.SRC_ALPHA_SATURATE,[fd]:n.DST_COLOR,[ld]:n.DST_ALPHA,[ad]:n.ONE_MINUS_SRC_COLOR,[Vf]:n.ONE_MINUS_SRC_ALPHA,[ud]:n.ONE_MINUS_DST_COLOR,[cd]:n.ONE_MINUS_DST_ALPHA,[hd]:n.CONSTANT_COLOR,[pd]:n.ONE_MINUS_CONSTANT_COLOR,[md]:n.CONSTANT_ALPHA,[gd]:n.ONE_MINUS_CONSTANT_ALPHA};function Rt(U,re,K,Z,he,Te,Fe,Ve,Me,We){if(U===qs){g===!0&&(Qe(n.BLEND),g=!1);return}if(g===!1&&(Be(n.BLEND),g=!0),U!==Qu){if(U!==m||We!==N){if((_!==Hs||C!==Hs)&&(n.blendEquation(n.FUNC_ADD),_=Hs,C=Hs),We)switch(U){case br:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nc:n.blendFunc(n.ONE,n.ONE);break;case ic:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ht("WebGLState: Invalid blending: ",U);break}else switch(U){case br:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ic:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sc:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",U);break}R=null,S=null,D=null,b=null,I.set(0,0,0),F=0,m=U,N=We}return}he=he||re,Te=Te||K,Fe=Fe||Z,(re!==_||he!==C)&&(n.blendEquationSeparate(ut[re],ut[he]),_=re,C=he),(K!==R||Z!==S||Te!==D||Fe!==b)&&(n.blendFuncSeparate(et[K],et[Z],et[Te],et[Fe]),R=K,S=Z,D=Te,b=Fe),(Ve.equals(I)===!1||Me!==F)&&(n.blendColor(Ve.r,Ve.g,Ve.b,Me),I.copy(Ve),F=Me),m=U,N=!1}function bt(U,re){U.side===Li?Qe(n.CULL_FACE):Be(n.CULL_FACE);let K=U.side===Rn;re&&(K=!K),Lt(K),U.blending===br&&U.transparent===!1?Rt(qs):Rt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const Z=U.stencilWrite;l.setTest(Z),Z&&(l.setMask(U.stencilWriteMask),l.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),l.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ue(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Be(n.SAMPLE_ALPHA_TO_COVERAGE):Qe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(U){B!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),B=U)}function mt(U){U!==Ju?(Be(n.CULL_FACE),U!==V&&(U===tc?n.cullFace(n.BACK):U===Zu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Qe(n.CULL_FACE),V=U}function Ot(U){U!==Q&&(ce&&n.lineWidth(U),Q=U)}function Ue(U,re,K){U?(Be(n.POLYGON_OFFSET_FILL),($!==re||oe!==K)&&($=re,oe=K,a.getReversed()&&(re=-re,K=-K),n.polygonOffset(re,K))):Qe(n.POLYGON_OFFSET_FILL)}function He(U){U?Be(n.SCISSOR_TEST):Qe(n.SCISSOR_TEST)}function rt(U){U===void 0&&(U=n.TEXTURE0+de-1),Ae!==U&&(n.activeTexture(U),Ae=U)}function it(U,re,K){K===void 0&&(Ae===null?K=n.TEXTURE0+de-1:K=Ae);let Z=ge[K];Z===void 0&&(Z={type:void 0,texture:void 0},ge[K]=Z),(Z.type!==U||Z.texture!==re)&&(Ae!==K&&(n.activeTexture(K),Ae=K),n.bindTexture(U,re||Ge[U]),Z.type=U,Z.texture=re)}function te(){const U=ge[Ae];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ct(){try{n.compressedTexImage2D(...arguments)}catch(U){Ht("WebGLState:",U)}}function st(){try{n.compressedTexImage3D(...arguments)}catch(U){Ht("WebGLState:",U)}}function Y(){try{n.texSubImage2D(...arguments)}catch(U){Ht("WebGLState:",U)}}function W(){try{n.texSubImage3D(...arguments)}catch(U){Ht("WebGLState:",U)}}function xe(){try{n.compressedTexSubImage2D(...arguments)}catch(U){Ht("WebGLState:",U)}}function ye(){try{n.compressedTexSubImage3D(...arguments)}catch(U){Ht("WebGLState:",U)}}function we(){try{n.texStorage2D(...arguments)}catch(U){Ht("WebGLState:",U)}}function k(){try{n.texStorage3D(...arguments)}catch(U){Ht("WebGLState:",U)}}function A(){try{n.texImage2D(...arguments)}catch(U){Ht("WebGLState:",U)}}function ee(){try{n.texImage3D(...arguments)}catch(U){Ht("WebGLState:",U)}}function Ee(U){return p[U]!==void 0?p[U]:n.getParameter(U)}function Se(U,re){p[U]!==re&&(n.pixelStorei(U,re),p[U]=re)}function ze(U){_e.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),_e.copy(U))}function E(U){ke.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),ke.copy(U))}function P(U,re){let K=c.get(re);K===void 0&&(K=new WeakMap,c.set(re,K));let Z=K.get(U);Z===void 0&&(Z=n.getUniformBlockIndex(re,U.name),n.uniformBlockBinding(re,Z,Z),K.set(U,Z))}function H(U,re,K){const he=c.get(re).get(U);o[he]!==K&&(n.bindBufferBase(n.UNIFORM_BUFFER,he,K),o[he]=K)}function ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},p={},Ae=null,ge={},d={},o={},h=new WeakMap,f=[],v=null,g=!1,m=null,_=null,R=null,S=null,C=null,D=null,b=null,I=new xt(0,0,0),F=0,N=!1,B=null,V=null,Q=null,$=null,oe=null,_e.set(0,0,n.canvas.width,n.canvas.height),ke.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:Be,disable:Qe,bindFramebuffer:Mt,drawBuffers:Xe,useProgram:tt,setBlending:Rt,setMaterial:bt,setFlipSided:Lt,setCullFace:mt,setLineWidth:Ot,setPolygonOffset:Ue,setScissorTest:He,activeTexture:rt,bindTexture:it,unbindTexture:te,compressedTexImage2D:ct,compressedTexImage3D:st,texImage2D:A,texImage3D:ee,pixelStorei:Se,getParameter:Ee,updateUBOMapping:P,uniformBlockBinding:H,texStorage2D:we,texStorage3D:k,texSubImage2D:Y,texSubImage3D:W,compressedTexSubImage2D:xe,compressedTexSubImage3D:ye,scissor:ze,viewport:E,reset:ne}}function gx(n,e,t,i,s,r,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,u=new WeakMap,p=new Set;let d;const h=new WeakMap,f=new Set,v=new FinalizationRegistry(k=>f.delete(k));let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(k,A){return g?new OffscreenCanvas(k,A):Fo("canvas")}function _(k,A,ee){let Ee=1;const Se=we(k);if((Se.width>ee||Se.height>ee)&&(Ee=ee/Math.max(Se.width,Se.height)),Ee<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const ze=Math.floor(Ee*Se.width),E=Math.floor(Ee*Se.height);d===void 0&&(d=m(ze,E));const P=A?m(ze,E):d;return P.width=ze,P.height=E,P.getContext("2d").drawImage(k,0,0,ze,E),gt("WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+ze+"x"+E+")."),P}else return"data"in k&&gt("WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),k;return k}function R(k){return k.generateMipmaps}function S(k){n.generateMipmap(k)}function C(k){return k.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?n.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function D(k,A,ee,Ee,Se,ze=!1){if(k!==null){if(n[k]!==void 0)return n[k];gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let E;Ee&&(E=e.get("EXT_texture_norm16"),E||gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let P=A;if(A===n.RED&&(ee===n.FLOAT&&(P=n.R32F),ee===n.HALF_FLOAT&&(P=n.R16F),ee===n.UNSIGNED_BYTE&&(P=n.R8),ee===n.UNSIGNED_SHORT&&E&&(P=E.R16_EXT),ee===n.SHORT&&E&&(P=E.R16_SNORM_EXT)),A===n.RED_INTEGER&&(ee===n.UNSIGNED_BYTE&&(P=n.R8UI),ee===n.UNSIGNED_SHORT&&(P=n.R16UI),ee===n.UNSIGNED_INT&&(P=n.R32UI),ee===n.BYTE&&(P=n.R8I),ee===n.SHORT&&(P=n.R16I),ee===n.INT&&(P=n.R32I)),A===n.RG&&(ee===n.FLOAT&&(P=n.RG32F),ee===n.HALF_FLOAT&&(P=n.RG16F),ee===n.UNSIGNED_BYTE&&(P=n.RG8),ee===n.UNSIGNED_SHORT&&E&&(P=E.RG16_EXT),ee===n.SHORT&&E&&(P=E.RG16_SNORM_EXT)),A===n.RG_INTEGER&&(ee===n.UNSIGNED_BYTE&&(P=n.RG8UI),ee===n.UNSIGNED_SHORT&&(P=n.RG16UI),ee===n.UNSIGNED_INT&&(P=n.RG32UI),ee===n.BYTE&&(P=n.RG8I),ee===n.SHORT&&(P=n.RG16I),ee===n.INT&&(P=n.RG32I)),A===n.RGB_INTEGER&&(ee===n.UNSIGNED_BYTE&&(P=n.RGB8UI),ee===n.UNSIGNED_SHORT&&(P=n.RGB16UI),ee===n.UNSIGNED_INT&&(P=n.RGB32UI),ee===n.BYTE&&(P=n.RGB8I),ee===n.SHORT&&(P=n.RGB16I),ee===n.INT&&(P=n.RGB32I)),A===n.RGBA_INTEGER&&(ee===n.UNSIGNED_BYTE&&(P=n.RGBA8UI),ee===n.UNSIGNED_SHORT&&(P=n.RGBA16UI),ee===n.UNSIGNED_INT&&(P=n.RGBA32UI),ee===n.BYTE&&(P=n.RGBA8I),ee===n.SHORT&&(P=n.RGBA16I),ee===n.INT&&(P=n.RGBA32I)),A===n.RGB&&(ee===n.UNSIGNED_SHORT&&E&&(P=E.RGB16_EXT),ee===n.SHORT&&E&&(P=E.RGB16_SNORM_EXT),ee===n.UNSIGNED_INT_5_9_9_9_REV&&(P=n.RGB9_E5),ee===n.UNSIGNED_INT_10F_11F_11F_REV&&(P=n.R11F_G11F_B10F)),A===n.RGBA){const H=ze?zo:Nt.getTransfer(Se);ee===n.FLOAT&&(P=n.RGBA32F),ee===n.HALF_FLOAT&&(P=n.RGBA16F),ee===n.UNSIGNED_BYTE&&(P=H===qt?n.SRGB8_ALPHA8:n.RGBA8),ee===n.UNSIGNED_SHORT&&E&&(P=E.RGBA16_EXT),ee===n.SHORT&&E&&(P=E.RGBA16_SNORM_EXT),ee===n.UNSIGNED_SHORT_4_4_4_4&&(P=n.RGBA4),ee===n.UNSIGNED_SHORT_5_5_5_1&&(P=n.RGB5_A1)}return(P===n.R16F||P===n.R32F||P===n.RG16F||P===n.RG32F||P===n.RGBA16F||P===n.RGBA32F)&&e.get("EXT_color_buffer_float"),P}function b(k,A){let ee;return k?A===null||A===bi||A===Ks?ee=n.DEPTH24_STENCIL8:A===ri?ee=n.DEPTH32F_STENCIL8:A===Pr&&(ee=n.DEPTH24_STENCIL8,gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===bi||A===Ks?ee=n.DEPTH_COMPONENT24:A===ri?ee=n.DEPTH_COMPONENT32F:A===Pr&&(ee=n.DEPTH_COMPONENT16),ee}function I(k,A){return R(k)===!0||k.isFramebufferTexture&&k.minFilter!==hn&&k.minFilter!==Dn?Math.log2(Math.max(A.width,A.height))+1:k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?A.mipmaps.length:1}function F(k){const A=new WeakRef(k);i.get(k).__ref=A,f.add(A),v.register(k,A,A)}function N(k){const A=i.get(k).__ref;A!==void 0&&(f.delete(A),v.unregister(A))}function B(k){Q(k.target)}function V(k){$(k.target)}function Q(k){k.removeEventListener("dispose",B),N(k),de(k),k.isVideoTexture&&u.delete(k),k.isHTMLTexture&&p.delete(k)}function $(k){k.removeEventListener("dispose",V),N(k),Ie(k)}function oe(){for(const k of f){const A=k.deref();A!==void 0&&(A.isRenderTarget===!0?$(A):Q(A))}f.clear(),p.clear()}function de(k){const A=i.get(k);if(A.__webglInit===void 0)return;const ee=k.source,Ee=h.get(ee);if(Ee){const Se=Ee[A.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&ce(k),Object.keys(Ee).length===0&&h.delete(ee)}i.remove(k)}function ce(k){const A=i.get(k);n.deleteTexture(A.__webglTexture);const ee=k.source,Ee=h.get(ee);delete Ee[A.__cacheKey],a.memory.textures--}function Ie(k){const A=i.get(k);A.__depthDisposeCallback&&A.__depthDisposeCallback();const ee=k.depthTexture;if(ee&&ee.renderTarget===k&&Q(ee),k.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++){if(Array.isArray(A.__webglFramebuffer[Se]))for(let ze=0;ze<A.__webglFramebuffer[Se].length;ze++)n.deleteFramebuffer(A.__webglFramebuffer[Se][ze]);else n.deleteFramebuffer(A.__webglFramebuffer[Se]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[Se])}else{if(Array.isArray(A.__webglFramebuffer))for(let Se=0;Se<A.__webglFramebuffer.length;Se++)n.deleteFramebuffer(A.__webglFramebuffer[Se]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Se=0;Se<A.__webglColorRenderbuffer.length;Se++)A.__webglColorRenderbuffer[Se]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[Se]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Ee=k.textures;for(let Se=0,ze=Ee.length;Se<ze;Se++){const E=i.get(Ee[Se]);E.__webglTexture&&(n.deleteTexture(E.__webglTexture),a.memory.textures--),i.remove(Ee[Se])}i.remove(k)}let pe=0;function Ae(){pe=0}function ge(){return pe}function Le(k){pe=k}function qe(){const k=pe;return k>=s.maxTextures&&gt("WebGLTextures: Trying to use "+(k+1)+" texture units while this GPU supports only "+s.maxTextures),pe+=1,k}function _e(k){const A=[];return A.push(k.wrapS),A.push(k.wrapT),A.push(k.wrapR||0),A.push(k.magFilter),A.push(k.minFilter),A.push(k.anisotropy),A.push(k.internalFormat),A.push(k.format),A.push(k.type),A.push(k.generateMipmaps),A.push(k.mipmapsAutoUpdate),A.push(k.premultiplyAlpha),A.push(k.flipY),A.push(k.unpackAlignment),A.push(k.colorSpace),A.join()}function ke(k,A){const ee=i.get(k);if(k.isVideoTexture&&xe(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&ee.__version!==k.version){const Ee=k.image;if(Ee===null)gt("WebGLRenderer: Texture marked for update but no image data found.");else if(Ee.complete===!1)gt("WebGLRenderer: Texture marked for update but image is incomplete");else{bt(ee,k,A);return}}else k.isExternalTexture&&(ee.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,ee.__webglTexture,n.TEXTURE0+A)}function Oe(k,A){const ee=i.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&ee.__version!==k.version){bt(ee,k,A);return}else k.isExternalTexture&&(ee.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,ee.__webglTexture,n.TEXTURE0+A)}function Ge(k,A){const ee=i.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&ee.__version!==k.version){bt(ee,k,A);return}t.bindTexture(n.TEXTURE_3D,ee.__webglTexture,n.TEXTURE0+A)}function Be(k,A){const ee=i.get(k);if(k.version>0&&ee.__version!==k.version){Lt(ee,k,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture,n.TEXTURE0+A)}const Qe={[Cr]:n.REPEAT,[Ui]:n.CLAMP_TO_EDGE,[Ha]:n.MIRRORED_REPEAT},Mt={[hn]:n.NEAREST,[_d]:n.NEAREST_MIPMAP_NEAREST,[Or]:n.NEAREST_MIPMAP_LINEAR,[Dn]:n.LINEAR,[Ko]:n.LINEAR_MIPMAP_NEAREST,[zi]:n.LINEAR_MIPMAP_LINEAR},Xe={[Sd]:n.NEVER,[ou]:n.ALWAYS,[wd]:n.LESS,[su]:n.LEQUAL,[Ed]:n.EQUAL,[ru]:n.GEQUAL,[Td]:n.GREATER,[Ad]:n.NOTEQUAL};function tt(k,A){if(A.type===ri&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Dn||A.magFilter===Ko||A.magFilter===Or||A.magFilter===zi||A.minFilter===Dn||A.minFilter===Ko||A.minFilter===Or||A.minFilter===zi)&&gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(k,n.TEXTURE_WRAP_S,Qe[A.wrapS]),n.texParameteri(k,n.TEXTURE_WRAP_T,Qe[A.wrapT]),(k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY)&&n.texParameteri(k,n.TEXTURE_WRAP_R,Qe[A.wrapR]),n.texParameteri(k,n.TEXTURE_MAG_FILTER,Mt[A.magFilter]),n.texParameteri(k,n.TEXTURE_MIN_FILTER,Mt[A.minFilter]),A.compareFunction&&(n.texParameteri(k,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(k,n.TEXTURE_COMPARE_FUNC,Xe[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===hn||A.minFilter!==Or&&A.minFilter!==zi||A.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");n.texParameterf(k,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function ut(k,A){let ee=!1;k.__webglInit===void 0&&(k.__webglInit=!0,A.addEventListener("dispose",B),F(A));const Ee=A.source;let Se=h.get(Ee);Se===void 0&&(Se={},h.set(Ee,Se));const ze=_e(A);if(ze!==k.__cacheKey){Se[ze]===void 0&&(Se[ze]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,ee=!0),Se[ze].usedTimes++;const E=Se[k.__cacheKey];E!==void 0&&(Se[k.__cacheKey].usedTimes--,E.usedTimes===0&&ce(A)),k.__cacheKey=ze,k.__webglTexture=Se[ze].texture}return ee}function et(k,A,ee){return Math.floor(Math.floor(k/ee)/A)}function Rt(k,A,ee,Ee){const ze=k.updateRanges;if(ze.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,A.width,A.height,ee,Ee,A.data);else{ze.sort((U,re)=>U.start-re.start);let E=0;for(let U=1;U<ze.length;U++){const re=ze[E],K=ze[U],Z=re.start+re.count,he=et(K.start,A.width,4),Te=et(re.start,A.width,4);K.start<=Z+1&&he===Te&&et(K.start+K.count-1,A.width,4)===he?re.count=Math.max(re.count,K.start+K.count-re.start):(++E,ze[E]=K)}ze.length=E+1;const P=t.getParameter(n.UNPACK_ROW_LENGTH),H=t.getParameter(n.UNPACK_SKIP_PIXELS),ne=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,A.width);for(let U=0,re=ze.length;U<re;U++){const K=ze[U],Z=Math.floor(K.start/4),he=Math.ceil(K.count/4),Te=Z%A.width,Fe=Math.floor(Z/A.width),Ve=he,Me=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Te),t.pixelStorei(n.UNPACK_SKIP_ROWS,Fe),t.texSubImage2D(n.TEXTURE_2D,0,Te,Fe,Ve,Me,ee,Ee,A.data)}k.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,P),t.pixelStorei(n.UNPACK_SKIP_PIXELS,H),t.pixelStorei(n.UNPACK_SKIP_ROWS,ne)}}function bt(k,A,ee){let Ee=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Ee=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Ee=n.TEXTURE_3D);const Se=ut(k,A),ze=A.source;t.bindTexture(Ee,k.__webglTexture,n.TEXTURE0+ee);const E=i.get(ze);if(ze.version!==E.__version||Se===!0){if(t.activeTexture(n.TEXTURE0+ee),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const Me=Nt.getPrimaries(Nt.workingColorSpace),We=A.colorSpace===Di?null:Nt.getPrimaries(A.colorSpace),je=A.colorSpace===Di||Me===We?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,je)}t.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment);let H=_(A.image,!1,s.maxTextureSize);H=ye(A,H);const ne=r.convert(A.format,A.colorSpace),U=r.convert(A.type);let re=D(A.internalFormat,ne,U,A.normalized,A.colorSpace,A.isVideoTexture);tt(Ee,A);let K;const Z=A.mipmaps,he=A.isVideoTexture!==!0,Te=E.__version===void 0||Se===!0,Fe=ze.dataReady,Ve=I(A,H);if(A.isDepthTexture)re=b(A.format===ji,A.type),Te&&(he?t.texStorage2D(n.TEXTURE_2D,1,re,H.width,H.height):t.texImage2D(n.TEXTURE_2D,0,re,H.width,H.height,0,ne,U,null));else if(A.isDataTexture)if(Z.length>0){he&&Te&&t.texStorage2D(n.TEXTURE_2D,Ve,re,Z[0].width,Z[0].height);for(let Me=0,We=Z.length;Me<We;Me++)K=Z[Me],he?Fe&&t.texSubImage2D(n.TEXTURE_2D,Me,0,0,K.width,K.height,ne,U,K.data):t.texImage2D(n.TEXTURE_2D,Me,re,K.width,K.height,0,ne,U,K.data);A.generateMipmaps=!1}else he?(Te&&t.texStorage2D(n.TEXTURE_2D,Ve,re,H.width,H.height),Fe&&Rt(A,H,ne,U)):t.texImage2D(n.TEXTURE_2D,0,re,H.width,H.height,0,ne,U,H.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){he&&Te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ve,re,Z[0].width,Z[0].height,H.depth);for(let Me=0,We=Z.length;Me<We;Me++)if(K=Z[Me],A.format!==xi)if(ne!==null)if(he){if(Fe)if(A.layerUpdates.size>0){const je=Nc(K.width,K.height,A.format,A.type);for(const Ne of A.layerUpdates){const ft=K.data.subarray(Ne*je/K.data.BYTES_PER_ELEMENT,(Ne+1)*je/K.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,Ne,K.width,K.height,1,ne,ft)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,0,K.width,K.height,H.depth,ne,K.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Me,re,K.width,K.height,H.depth,0,K.data,0,0);else gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else he?Fe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,0,K.width,K.height,H.depth,ne,U,K.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Me,re,K.width,K.height,H.depth,0,ne,U,K.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{he&&Te&&t.texStorage2D(n.TEXTURE_2D,Ve,re,Z[0].width,Z[0].height);for(let Me=0,We=Z.length;Me<We;Me++)K=Z[Me],A.format!==xi?ne!==null?he?Fe&&t.compressedTexSubImage2D(n.TEXTURE_2D,Me,0,0,K.width,K.height,ne,K.data):t.compressedTexImage2D(n.TEXTURE_2D,Me,re,K.width,K.height,0,K.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?Fe&&t.texSubImage2D(n.TEXTURE_2D,Me,0,0,K.width,K.height,ne,U,K.data):t.texImage2D(n.TEXTURE_2D,Me,re,K.width,K.height,0,ne,U,K.data)}else if(A.isDataArrayTexture)if(he){if(Te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ve,re,H.width,H.height,H.depth),Fe)if(A.layerUpdates.size>0){const Me=Nc(H.width,H.height,A.format,A.type);for(const We of A.layerUpdates){const je=H.data.subarray(We*Me/H.data.BYTES_PER_ELEMENT,(We+1)*Me/H.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,We,H.width,H.height,1,ne,U,je)}A.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,H.width,H.height,H.depth,ne,U,H.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,re,H.width,H.height,H.depth,0,ne,U,H.data);else if(A.isData3DTexture)he?(Te&&t.texStorage3D(n.TEXTURE_3D,Ve,re,H.width,H.height,H.depth),Fe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,H.width,H.height,H.depth,ne,U,H.data)):t.texImage3D(n.TEXTURE_3D,0,re,H.width,H.height,H.depth,0,ne,U,H.data);else if(A.isFramebufferTexture){if(Te)if(he)t.texStorage2D(n.TEXTURE_2D,Ve,re,H.width,H.height);else{let Me=H.width,We=H.height;for(let je=0;je<Ve;je++)t.texImage2D(n.TEXTURE_2D,je,re,Me,We,0,ne,U,null),Me>>=1,We>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in n){const Me=n.canvas;if(Me.hasAttribute("layoutsubtree")||Me.setAttribute("layoutsubtree","true"),H.parentNode!==Me){Me.appendChild(H),p.add(A),Me.onpaint=We=>{const je=We.changedElements;for(const Ne of p)je.includes(Ne.image)&&(Ne.needsUpdate=!0)},Me.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,H);else{const je=n.RGBA,Ne=n.RGBA,ft=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,je,Ne,ft,H)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Z.length>0){if(he&&Te){const Me=we(Z[0]);t.texStorage2D(n.TEXTURE_2D,Ve,re,Me.width,Me.height)}for(let Me=0,We=Z.length;Me<We;Me++)K=Z[Me],he?Fe&&t.texSubImage2D(n.TEXTURE_2D,Me,0,0,ne,U,K):t.texImage2D(n.TEXTURE_2D,Me,re,ne,U,K);A.generateMipmaps=!1}else if(he){if(Te){const Me=we(H);t.texStorage2D(n.TEXTURE_2D,Ve,re,Me.width,Me.height)}Fe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne,U,H)}else t.texImage2D(n.TEXTURE_2D,0,re,ne,U,H);R(A)&&A.mipmapsAutoUpdate===!0&&S(Ee),E.__version=ze.version,A.onUpdate&&A.onUpdate(A)}k.__version=A.version}function Lt(k,A,ee){if(A.image.length!==6)return;const Ee=ut(k,A),Se=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+ee);const ze=i.get(Se);if(Se.version!==ze.__version||Ee===!0){t.activeTexture(n.TEXTURE0+ee);const E=Nt.getPrimaries(Nt.workingColorSpace),P=A.colorSpace===Di?null:Nt.getPrimaries(A.colorSpace),H=A.colorSpace===Di||E===P?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,H);const ne=A.isCompressedTexture||A.image[0].isCompressedTexture,U=A.image[0]&&A.image[0].isDataTexture,re=[];for(let Ne=0;Ne<6;Ne++)!ne&&!U?re[Ne]=_(A.image[Ne],!0,s.maxCubemapSize):re[Ne]=U?A.image[Ne].image:A.image[Ne],re[Ne]=ye(A,re[Ne]);const K=re[0],Z=r.convert(A.format,A.colorSpace),he=r.convert(A.type);let Te=D(A.internalFormat,Z,he,A.normalized,A.colorSpace);const Fe=A.isVideoTexture!==!0,Ve=ze.__version===void 0||Ee===!0,Me=Se.dataReady;let We=I(A,K);tt(n.TEXTURE_CUBE_MAP,A);let je;if(A.isDepthTexture){if(Te=b(A.format===ji,A.type),Ve)if(Fe)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,Te,K.width,K.height);else for(let Ne=0;Ne<6;Ne++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Te,K.width,K.height,0,Z,he,null)}else if(ne){Fe&&Ve&&t.texStorage2D(n.TEXTURE_CUBE_MAP,We,Te,K.width,K.height);for(let Ne=0;Ne<6;Ne++){je=re[Ne].mipmaps;for(let ft=0;ft<je.length;ft++){const Ct=je[ft];A.format!==xi?Z!==null?Fe?Me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,ft,0,0,Ct.width,Ct.height,Z,Ct.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,ft,Te,Ct.width,Ct.height,0,Ct.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,ft,0,0,Ct.width,Ct.height,Z,he,Ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,ft,Te,Ct.width,Ct.height,0,Z,he,Ct.data)}}}else{if(je=A.mipmaps,Fe&&Ve){je.length>0&&We++;const Ne=we(re[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,We,Te,Ne.width,Ne.height)}for(let Ne=0;Ne<6;Ne++)if(U){Fe?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,re[Ne].width,re[Ne].height,Z,he,re[Ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Te,re[Ne].width,re[Ne].height,0,Z,he,re[Ne].data);for(let ft=0;ft<je.length;ft++){const Tt=je[ft].image[Ne].image;Fe?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,ft+1,0,0,Tt.width,Tt.height,Z,he,Tt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,ft+1,Te,Tt.width,Tt.height,0,Z,he,Tt.data)}}else{Fe?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,Z,he,re[Ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Te,Z,he,re[Ne]);for(let ft=0;ft<je.length;ft++){const Ct=je[ft];Fe?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,ft+1,0,0,Z,he,Ct.image[Ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,ft+1,Te,Z,he,Ct.image[Ne])}}}R(A)&&A.mipmapsAutoUpdate===!0&&S(n.TEXTURE_CUBE_MAP),ze.__version=Se.version,A.onUpdate&&A.onUpdate(A)}k.__version=A.version}function mt(k,A,ee,Ee,Se,ze){const E=r.convert(ee.format,ee.colorSpace),P=r.convert(ee.type),H=D(ee.internalFormat,E,P,ee.normalized,ee.colorSpace),ne=i.get(A),U=i.get(ee);if(U.__renderTarget=A,!ne.__hasExternalTextures){const re=Math.max(1,A.width>>ze),K=Math.max(1,A.height>>ze);Se===n.TEXTURE_3D||Se===n.TEXTURE_2D_ARRAY?t.texImage3D(Se,ze,H,re,K,A.depth,0,E,P,null):t.texImage2D(Se,ze,H,re,K,0,E,P,null)}t.bindFramebuffer(n.FRAMEBUFFER,k),W(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ee,Se,U.__webglTexture,0,Y(A)):(Se===n.TEXTURE_2D||Se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Ee,Se,U.__webglTexture,ze),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ot(k,A,ee){if(n.bindRenderbuffer(n.RENDERBUFFER,k),A.depthBuffer){const Ee=A.depthTexture,Se=Ee&&Ee.isDepthTexture?Ee.type:null,ze=b(A.stencilBuffer,Se),E=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;W(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Y(A),ze,A.width,A.height):ee?n.renderbufferStorageMultisample(n.RENDERBUFFER,Y(A),ze,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,ze,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,E,n.RENDERBUFFER,k)}else{const Ee=A.textures;for(let Se=0;Se<Ee.length;Se++){const ze=Ee[Se],E=r.convert(ze.format,ze.colorSpace),P=r.convert(ze.type),H=D(ze.internalFormat,E,P,ze.normalized,ze.colorSpace);W(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Y(A),H,A.width,A.height):ee?n.renderbufferStorageMultisample(n.RENDERBUFFER,Y(A),H,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,H,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(k,A,ee){const Ee=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,k),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Se=i.get(A.depthTexture);Se.__renderTarget=A;const ze=Ee?A.depthTexture.image[0]:A.depthTexture.image;(!Se.__webglTexture||ze.width!==A.width||ze.height!==A.height)&&(ze.width=A.width,ze.height=A.height,A.depthTexture.needsUpdate=!0),Ee?Be(A.depthTexture,0):ke(A.depthTexture,0);const E=Se.__webglTexture,P=Y(A),H=Ee?n.TEXTURE_CUBE_MAP_POSITIVE_X+ee:n.TEXTURE_2D,ne=A.depthTexture.format===ji?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(A.depthTexture.format===es)W(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,H,E,0,P):n.framebufferTexture2D(n.FRAMEBUFFER,ne,H,E,0);else if(A.depthTexture.format===ji)W(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,H,E,0,P):n.framebufferTexture2D(n.FRAMEBUFFER,ne,H,E,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function He(k){const A=i.get(k),ee=k.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==k.depthTexture){const Ee=k.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Ee){const Se=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Ee.removeEventListener("dispose",Se)};Ee.addEventListener("dispose",Se),A.__depthDisposeCallback=Se}A.__boundDepthTexture=Ee}if(k.depthTexture&&!A.__autoAllocateDepthBuffer)if(ee)for(let Ee=0;Ee<6;Ee++)Ue(A.__webglFramebuffer[Ee],k,Ee);else k.texture.mipmaps.length>0?Ue(A.__webglFramebuffer[0],k,0):Ue(A.__webglFramebuffer,k,0);else if(ee){A.__webglDepthbuffer=[];for(let Ee=0;Ee<6;Ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[Ee]),A.__webglDepthbuffer[Ee]===void 0)A.__webglDepthbuffer[Ee]=n.createRenderbuffer(),Ot(A.__webglDepthbuffer[Ee],k,!1);else{const Se=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ze=A.__webglDepthbuffer[Ee];n.bindRenderbuffer(n.RENDERBUFFER,ze),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,ze)}}else if(k.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),Ot(A.__webglDepthbuffer,k,!1);else{const Se=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ze=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ze),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,ze)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(k,A,ee){const Ee=i.get(k);A!==void 0&&mt(Ee.__webglFramebuffer,k,k.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),ee!==void 0&&He(k)}function it(k){const A=k.texture,ee=i.get(k),Ee=i.get(A);k.addEventListener("dispose",V),F(k);const Se=k.textures,ze=k.isWebGLCubeRenderTarget===!0,E=Se.length>1;if(E||(Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture()),Ee.__version=A.version,a.memory.textures++),ze){ee.__webglFramebuffer=[];for(let P=0;P<6;P++)if(A.mipmaps.length>0){ee.__webglFramebuffer[P]=[];for(let H=0;H<A.mipmaps.length;H++)ee.__webglFramebuffer[P][H]=n.createFramebuffer()}else ee.__webglFramebuffer[P]=n.createFramebuffer()}else{if(A.mipmaps.length>0){ee.__webglFramebuffer=[];for(let P=0;P<A.mipmaps.length;P++)ee.__webglFramebuffer[P]=n.createFramebuffer()}else ee.__webglFramebuffer=n.createFramebuffer();if(E)for(let P=0,H=Se.length;P<H;P++){const ne=i.get(Se[P]);ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture(),a.memory.textures++)}if(k.samples>0&&W(k)===!1){ee.__webglMultisampledFramebuffer=n.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let P=0;P<Se.length;P++){const H=Se[P];ee.__webglColorRenderbuffer[P]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,ee.__webglColorRenderbuffer[P]);const ne=r.convert(H.format,H.colorSpace),U=r.convert(H.type),re=D(H.internalFormat,ne,U,H.normalized,H.colorSpace,k.isXRRenderTarget===!0),K=Y(k);n.renderbufferStorageMultisample(n.RENDERBUFFER,K,re,k.width,k.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+P,n.RENDERBUFFER,ee.__webglColorRenderbuffer[P])}n.bindRenderbuffer(n.RENDERBUFFER,null),k.depthBuffer&&(ee.__webglDepthRenderbuffer=n.createRenderbuffer(),Ot(ee.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ze){t.bindTexture(n.TEXTURE_CUBE_MAP,Ee.__webglTexture),tt(n.TEXTURE_CUBE_MAP,A);for(let P=0;P<6;P++)if(A.mipmaps.length>0)for(let H=0;H<A.mipmaps.length;H++)mt(ee.__webglFramebuffer[P][H],k,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+P,H);else mt(ee.__webglFramebuffer[P],k,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+P,0);R(A)?S(n.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}else if(E){for(let P=0,H=Se.length;P<H;P++){const ne=Se[P],U=i.get(ne);let re=n.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(re=k.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,U.__webglTexture),tt(re,ne),mt(ee.__webglFramebuffer,k,ne,n.COLOR_ATTACHMENT0+P,re,0),R(ne)&&S(re)}t.unbindTexture()}else{let P=n.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(P=k.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(P,Ee.__webglTexture),tt(P,A),A.mipmaps.length>0)for(let H=0;H<A.mipmaps.length;H++)mt(ee.__webglFramebuffer[H],k,A,n.COLOR_ATTACHMENT0,P,H);else mt(ee.__webglFramebuffer,k,A,n.COLOR_ATTACHMENT0,P,0);R(A)?S(P):A.mipmaps.length>0&&n.texParameteri(P,n.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}k.depthBuffer&&He(k)}function te(k){const A=k.textures;for(let ee=0,Ee=A.length;ee<Ee;ee++){const Se=A[ee];if(R(Se)&&Se.mipmapsAutoUpdate===!0){const ze=C(k),E=i.get(Se).__webglTexture;t.bindTexture(ze,E),S(ze),t.unbindTexture()}}}const ct=[];function st(k){if(k.samples>0){if(W(k)===!1){const A=k.textures,ee=k.width,Ee=k.height;let Se=n.COLOR_BUFFER_BIT;const ze=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,E=i.get(k),P=A.length>1;if(P)for(let ne=0;ne<A.length;ne++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,E.__webglMultisampledFramebuffer),k.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,E.__webglFramebuffer);for(let ne=0;ne<A.length;ne++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(Se|=n.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(Se|=n.STENCIL_BUFFER_BIT)),P){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,E.__webglColorRenderbuffer[ne]);const U=i.get(A[ne]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,U,0)}n.blitFramebuffer(0,0,ee,Ee,0,0,ee,Ee,Se,n.NEAREST),o===!0&&(ct.length=0,ct.push(n.COLOR_ATTACHMENT0+ne),k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&ct.push(ze),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ct))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),P)for(let ne=0;ne<A.length;ne++){t.bindFramebuffer(n.FRAMEBUFFER,E.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.RENDERBUFFER,E.__webglColorRenderbuffer[ne]);const U=i.get(A[ne]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.TEXTURE_2D,U,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,E.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&o){const A=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function Y(k){return Math.min(s.maxSamples,k.samples)}function W(k){const A=i.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function xe(k){const A=a.render.frame;u.get(k)!==A&&(u.set(k,A),k.update())}function ye(k,A){const ee=k.colorSpace,Ee=k.format,Se=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||ee!==Uo&&ee!==Di&&(Nt.getTransfer(ee)===qt?(Ee!==xi||Se!==Ln)&&gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",ee)),A}function we(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(c.width=k.naturalWidth||k.width,c.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(c.width=k.displayWidth,c.height=k.displayHeight):(c.width=k.width,c.height=k.height),c}this.allocateTextureUnit=qe,this.resetTextureUnits=Ae,this.getTextureUnits=ge,this.setTextureUnits=Le,this.setTexture2D=ke,this.setTexture2DArray=Oe,this.setTexture3D=Ge,this.setTextureCube=Be,this.rebindTextures=rt,this.setupRenderTarget=it,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=W,this.dispose=oe}function xx(n,e){function t(i,s=Di){let r;const a=Nt.getTransfer(s);if(i===Ln)return n.UNSIGNED_BYTE;if(i===zl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Fl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===eu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===tu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===jf)return n.BYTE;if(i===Qf)return n.SHORT;if(i===Pr)return n.UNSIGNED_SHORT;if(i===Ul)return n.INT;if(i===bi)return n.UNSIGNED_INT;if(i===ri)return n.FLOAT;if(i===li)return n.HALF_FLOAT;if(i===nu)return n.ALPHA;if(i===iu)return n.RGB;if(i===xi)return n.RGBA;if(i===es)return n.DEPTH_COMPONENT;if(i===ji)return n.DEPTH_STENCIL;if(i===kl)return n.RED;if(i===Ol)return n.RED_INTEGER;if(i===vs)return n.RG;if(i===Bl)return n.RG_INTEGER;if(i===Hl)return n.RGBA_INTEGER;if(i===yo||i===Mo||i===bo||i===So)if(a===qt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===yo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===yo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Mo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===So)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ga||i===Va||i===Wa||i===Xa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Va)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===qa||i===$a||i===Ya||i===Ka||i===Ja||i===Do||i===Za)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===qa||i===$a)return a===qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ya)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ka)return r.COMPRESSED_R11_EAC;if(i===Ja)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Do)return r.COMPRESSED_RG11_EAC;if(i===Za)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ja||i===Qa||i===el||i===tl||i===nl||i===il||i===sl||i===rl||i===ol||i===al||i===ll||i===cl||i===fl||i===ul)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ja)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qa)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===el)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===tl)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===nl)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===il)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===sl)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===rl)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ol)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===al)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ll)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===cl)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fl)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ul)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===dl||i===hl||i===pl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===dl)return a===qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===pl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ml||i===gl||i===Io||i===xl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ml)return r.COMPRESSED_RED_RGTC1_EXT;if(i===gl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Io)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ks?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const vx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_x=`
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

}`;class yx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new xu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ts({vertexShader:vx,fragmentShader:_x,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new At(new Ii(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Mx extends ys{constructor(e,t){super();const i=this;let s=null,r=1,a=null,l="local-floor",o=1,c=null,u=null,p=null,d=null,h=null,f=null;const v=typeof XRWebGLBinding<"u",g=new yx,m={},_=t.getContextAttributes();let R=null,S=null;const C=[],D=[],b=new ot;let I=null,F=null;const N=new On;N.viewport=new Zt;const B=new On;B.viewport=new Zt;const V=[N,B],Q=new Ih;let $=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(_e){let ke=C[_e];return ke===void 0&&(ke=new sa,C[_e]=ke),ke.getTargetRaySpace()},this.getControllerGrip=function(_e){let ke=C[_e];return ke===void 0&&(ke=new sa,C[_e]=ke),ke.getGripSpace()},this.getHand=function(_e){let ke=C[_e];return ke===void 0&&(ke=new sa,C[_e]=ke),ke.getHandSpace()};function de(_e){const ke=D.indexOf(_e.inputSource);if(ke===-1)return;const Oe=C[ke];Oe!==void 0&&(Oe.update(_e.inputSource,_e.frame,c||a),Oe.dispatchEvent({type:_e.type,data:_e.inputSource}))}function ce(){s.removeEventListener("select",de),s.removeEventListener("selectstart",de),s.removeEventListener("selectend",de),s.removeEventListener("squeeze",de),s.removeEventListener("squeezestart",de),s.removeEventListener("squeezeend",de),s.removeEventListener("end",ce),s.removeEventListener("inputsourceschange",Ie);for(let _e=0;_e<C.length;_e++){const ke=D[_e];ke!==null&&(D[_e]=null,C[_e].disconnect(ke))}$=null,oe=null,g.reset();for(const _e in m)delete m[_e];if(e.setRenderTarget(R),h=null,d=null,p=null,s=null,S=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(b.width,b.height,!1),F!==null){const _e=F.camera;_e.fov=F.fov,_e.zoom=F.zoom,_e.updateProjectionMatrix(),F=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(_e){r=_e,i.isPresenting===!0&&gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(_e){l=_e,i.isPresenting===!0&&gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(_e){c=_e},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return p===null&&v&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(_e){if(s=_e,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",de),s.addEventListener("selectstart",de),s.addEventListener("selectend",de),s.addEventListener("squeeze",de),s.addEventListener("squeezestart",de),s.addEventListener("squeezeend",de),s.addEventListener("end",ce),s.addEventListener("inputsourceschange",Ie),_.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(b),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Oe=null,Ge=null,Be=null;_.depth&&(Be=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Oe=_.stencil?ji:es,Ge=_.stencil?Ks:bi);const Qe={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:r};p=this.getBinding(),d=p.createProjectionLayer(Qe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new In(d.textureWidth,d.textureHeight,{format:xi,type:Ln,depthTexture:new Js(d.textureWidth,d.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,Oe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Oe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,Oe),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new In(h.framebufferWidth,h.framebufferHeight,{format:xi,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(o),c=null,a=await s.requestReferenceSpace(l),qe.setContext(s),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Ie(_e){for(let ke=0;ke<_e.removed.length;ke++){const Oe=_e.removed[ke],Ge=D.indexOf(Oe);Ge>=0&&(D[Ge]=null,C[Ge].disconnect(Oe))}for(let ke=0;ke<_e.added.length;ke++){const Oe=_e.added[ke];let Ge=D.indexOf(Oe);if(Ge===-1){for(let Qe=0;Qe<C.length;Qe++)if(Qe>=D.length){D.push(Oe),Ge=Qe;break}else if(D[Qe]===null){D[Qe]=Oe,Ge=Qe;break}if(Ge===-1)break}const Be=C[Ge];Be&&Be.connect(Oe)}}function pe(_e,ke){ke===null?_e.matrixWorld.copy(_e.matrix):_e.matrixWorld.multiplyMatrices(ke.matrixWorld,_e.matrix),_e.matrixWorldInverse.copy(_e.matrixWorld).invert()}this.updateCamera=function(_e){if(s===null)return;let ke=_e.near,Oe=_e.far;g.texture!==null&&(g.depthNear>0&&(ke=g.depthNear),g.depthFar>0&&(Oe=g.depthFar)),Q.near=B.near=N.near=ke,Q.far=B.far=N.far=Oe,($!==Q.near||oe!==Q.far)&&(s.updateRenderState({depthNear:Q.near,depthFar:Q.far}),$=Q.near,oe=Q.far),Q.layers.mask=_e.layers.mask|6,N.layers.mask=Q.layers.mask&-5,B.layers.mask=Q.layers.mask&-3;const Ge=_e.parent,Be=Q.cameras;pe(Q,Ge);for(let Qe=0;Qe<Be.length;Qe++)pe(Be[Qe],Ge);Q.projectionMatrix.copy(N.projectionMatrix),Q.projectionMatrixInverse.copy(N.projectionMatrixInverse),F===null&&_e.isPerspectiveCamera&&(F={camera:_e,fov:_e.fov,zoom:_e.zoom}),Ae(_e,Q,Ge)};function Ae(_e,ke,Oe){Oe===null?_e.matrix.copy(ke.matrixWorld):(_e.matrix.copy(Oe.matrixWorld),_e.matrix.invert(),_e.matrix.multiply(ke.matrixWorld)),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.updateMatrixWorld(!0),_e.projectionMatrix.copy(ke.projectionMatrix),_e.projectionMatrixInverse.copy(ke.projectionMatrixInverse),_e.isPerspectiveCamera&&(_e.fov=ko*2*Math.atan(1/_e.projectionMatrix.elements[5]),_e.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(d===null&&h===null))return o},this.setFoveation=function(_e){o=_e,d!==null&&(d.fixedFoveation=_e),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=_e)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(Q)},this.getCameraTexture=function(_e){return m[_e]};let ge=null;function Le(_e,ke){if(u=ke.getViewerPose(c||a),f=ke,u!==null){const Oe=u.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let Ge=!1;Oe.length!==Q.cameras.length&&(Q.cameras.length=0,Ge=!0);for(let Xe=0;Xe<Oe.length;Xe++){const tt=Oe[Xe];let ut=null;if(h!==null)ut=h.getViewport(tt);else{const Rt=p.getViewSubImage(d,tt);ut=Rt.viewport,Xe===0&&(e.setRenderTargetTextures(S,Rt.colorTexture,Rt.depthStencilTexture),e.setRenderTarget(S))}let et=V[Xe];et===void 0&&(et=new On,et.layers.enable(Xe),et.viewport=new Zt,V[Xe]=et),et.matrix.fromArray(tt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(tt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(ut.x,ut.y,ut.width,ut.height),Xe===0&&(Q.matrix.copy(et.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Ge===!0&&Q.cameras.push(et)}const Be=s.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){p=i.getBinding();const Xe=p.getDepthInformation(Oe[0]);Xe&&Xe.isValid&&Xe.texture&&g.init(Xe,s.renderState)}if(Be&&Be.includes("camera-access")&&v){e.state.unbindTexture(),p=i.getBinding();for(let Xe=0;Xe<Oe.length;Xe++){const tt=Oe[Xe].camera;if(tt){let ut=m[tt];ut||(ut=new xu,m[tt]=ut);const et=p.getCameraImage(tt);ut.sourceTexture=et}}}}for(let Oe=0;Oe<C.length;Oe++){const Ge=D[Oe],Be=C[Oe];Ge!==null&&Be!==void 0&&Be.update(Ge,ke,c||a)}ge&&ge(_e,ke),ke.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ke}),f=null}const qe=new Tu;qe.setAnimationLoop(Le),this.setAnimationLoop=function(_e){ge=_e},this.dispose=function(){}}}const bx=new Gt,zu=new yt;zu.set(-1,0,0,0,1,0,0,0,1);function Sx(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Mu(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,_,R,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),p(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&h(g,m,S)):m.isMeshMatcapMaterial?(r(g,m),f(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&l(g,m)):m.isPointsMaterial?o(g,m,_,R):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Rn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Rn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const _=e.get(m),R=_.envMap,S=_.envMapRotation;R&&(g.envMap.value=R,g.envMapRotation.value.setFromMatrix4(bx.makeRotationFromEuler(S)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(zu),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function l(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function o(g,m,_,R){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=R*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function p(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function h(g,m,_){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Rn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function f(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const _=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function wx(n,e,t,i){let s={},r={};function a(_,R){const S=R.program;i.uniformBlockBinding(_,S,s[_.id])}function l(_,R){let S=s[_.id];S===void 0&&(f(_),S=o(_),s[_.id]=S,_.addEventListener("dispose",g));const C=R.program;i.updateUBOMapping(_,C);const D=e.render.frame;r[_.id]!==D&&(c(_),r[_.id]=D)}function o(_){const R=n.createBuffer(),S=_.__size,C=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,S,C),n.bindBuffer(n.UNIFORM_BUFFER,null),R}function c(_){const R=s[_.id],S=_.uniforms,C=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let D=0,b=S.length;D<b;D++){const I=S[D];if(Array.isArray(I))for(let F=0,N=I.length;F<N;F++)u(I[F],D,F,C);else u(I,D,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(_,R,S,C){if(d(_,R,S,C)===!0){const D=_.__offset,b=_.value;if(Array.isArray(b)){let I=0;for(let F=0;F<b.length;F++){const N=b[F],B=v(N,!0);p(N,_.__data,I),I+=B.storage/Float32Array.BYTES_PER_ELEMENT}}else p(b,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,D,_.__data)}}function p(_,R,S){typeof _=="number"||typeof _=="boolean"?R[S]=_:_.isMatrix3?(R[S]=_.elements[0],R[S+1]=_.elements[1],R[S+2]=_.elements[2],R[S+3]=0,R[S+4]=_.elements[3],R[S+5]=_.elements[4],R[S+6]=_.elements[5],R[S+7]=0,R[S+8]=_.elements[6],R[S+9]=_.elements[7],R[S+10]=_.elements[8],R[S+11]=0):ArrayBuffer.isView(_)?R.set(_.subarray(0,R.length-S),S):_.toArray(R,S)}function d(_,R,S,C){const D=_.value,b=R+"_"+S;if(Array.isArray(D)){C[b]===void 0&&(C[b]=[]);const I=C[b];let F=!1;for(let N=0;N<D.length;N++)h(D[N],I,N)===!0&&(F=!0);return F}return h(D,C,b)}function h(_,R,S){if(R[S]===void 0)return typeof _=="number"||typeof _=="boolean"?R[S]=_:ArrayBuffer.isView(_)?R[S]=_.slice():R[S]=_.clone(),!0;{const C=R[S];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return R[S]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function f(_){const R=_.uniforms;let S=0;const C=16;for(let b=0,I=R.length;b<I;b++){const F=Array.isArray(R[b])?R[b]:[R[b]];for(let N=0,B=F.length;N<B;N++){const V=F[N],Q=Array.isArray(V.value)?V.value:[V.value],$=Array.isArray(R[b])||Array.isArray(V.value);let oe=S;for(let ce=0,Ie=Q.length;ce<Ie;ce++){const pe=Q[ce],Ae=v(pe,$),ge=S%C,Le=ge%Ae.boundary,qe=ge+Le;S+=Le,qe!==0&&C-qe<Ae.storage&&(S+=C-qe),ce===0&&(oe=S),S+=Ae.storage}const de=V.type==="int"?Int32Array:V.type==="uint"?Uint32Array:Float32Array;V.__data=new de((S-oe)/Float32Array.BYTES_PER_ELEMENT),V.__offset=oe}}const D=S%C;return D>0&&(S+=C-D),_.__size=S,_.__cache={},this}function v(_,R){const S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=16,S.storage=48):_.isMatrix4?(S.boundary=16,S.storage=64):_.isTexture?gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(S.boundary=16,S.storage=_.byteLength):gt("WebGLRenderer: Unsupported uniform value type.",_),R===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function g(_){const R=_.target;R.removeEventListener("dispose",g),n.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function m(){for(const _ in s)n.deleteBuffer(s[_]);s={},r={}}return{bind:a,update:l,dispose:m}}const Ex=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ui=null;function Tx(){return ui===null&&(ui=new pu(Ex,16,16,vs,li),ui.name="DFG_LUT",ui.minFilter=Dn,ui.magFilter=Dn,ui.wrapS=Ui,ui.wrapT=Ui,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}class Ax{constructor(e={}){const{canvas:t=Pd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:h=Ln}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const v=h,g=new Set([Hl,Bl,Ol]),m=new Set([Ln,bi,Pr,Ks,zl,Fl]),_=new Uint32Array(4),R=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]};let C=null,D=null;const b=[],I=[];let F=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let B=!1,V=null,Q=null,$=null,oe=null;this._outputColorSpace=Pn;let de=0,ce=0,Ie=null,pe=-1,Ae=null;const ge=new Zt,Le=new Zt;let qe=null;const _e=new xt(0);let ke=0,Oe=t.width,Ge=t.height,Be=1,Qe=null,Mt=null;const Xe=new Zt(0,0,Oe,Ge),tt=new Zt(0,0,Oe,Ge);let ut=!1;const et=new Dr,Rt=new Xl;let bt=!1,Lt=!1;const mt=new Gt,Ot=new ae,Ue=new Zt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function it(){return Ie===null?Be:1}let te=i;function ct(y,T){return t.getContext(y,T)}let st,Y,W,xe,ye,we,k,A,ee,Ee,Se,ze,E,P,H,ne,U,re,K,Z,he,Te,Fe;try{const y={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:o,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Il}`),t.addEventListener("webglcontextlost",We,!1),t.addEventListener("webglcontextrestored",je,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),te===null){const T="webgl2";if(te=ct(T,y),te===null)throw ct(T)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ve()}catch(y){throw t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),Ht("WebGLRenderer: "+y.message),y}function Ve(){st=new Pm(te),st.init(),he=new xx(te,st),Y=new _m(te,st,e,he),W=new mx(te,st),Y.reversedDepthBuffer&&d&&W.buffers.depth.setReversed(!0),Q=te.createFramebuffer(),$=te.createFramebuffer(),oe=te.createFramebuffer(),xe=new Im(te),ye=new tx,we=new gx(te,st,W,ye,Y,he,xe),k=new Cm(N),A=new Uh(te),Te=new xm(te,A),ee=new Lm(te,A,xe,Te),Ee=new Um(te,ee,A,Te,xe),re=new Nm(te,Y,we),H=new ym(ye),Se=new ex(N,k,st,Y,Te,H),ze=new Sx(N,ye),E=new ix,P=new cx(st),U=new gm(N,k,W,Ee,f,o),ne=new px(N,Ee,Y),Fe=new wx(te,xe,Y,W),K=new vm(te,st,xe),Z=new Dm(te,st,xe),xe.programs=Se.programs,N.capabilities=Y,N.extensions=st,N.properties=ye,N.renderLists=E,N.shadowMap=ne,N.state=W,N.info=xe}v!==Ln&&(F=new Fm(v,t.width,t.height,l,s,r));const Me=new Mx(N,te);this.xr=Me,this.getContext=function(){return te},this.getContextAttributes=function(){return te.getContextAttributes()},this.forceContextLoss=function(){const y=st.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=st.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Be},this.setPixelRatio=function(y){y!==void 0&&(Be=y,this.setSize(Oe,Ge,!1))},this.getSize=function(y){return y.set(Oe,Ge)},this.setSize=function(y,T,X=!0){if(Me.isPresenting){gt("WebGLRenderer: Can't change size while VR device is presenting.");return}Oe=y,Ge=T,t.width=Math.floor(y*Be),t.height=Math.floor(T*Be),X===!0&&(t.style.width=y+"px",t.style.height=T+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,y,T)},this.getDrawingBufferSize=function(y){return y.set(Oe*Be,Ge*Be).floor()},this.setDrawingBufferSize=function(y,T,X){Oe=y,Ge=T,Be=X,t.width=Math.floor(y*X),t.height=Math.floor(T*X),this.setViewport(0,0,y,T)},this.setEffects=function(y){if(v===Ln){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let T=0;T<y.length;T++)if(y[T].isOutputPass===!0){gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(ge)},this.getViewport=function(y){return y.copy(Xe)},this.setViewport=function(y,T,X,z){y.isVector4?Xe.set(y.x,y.y,y.z,y.w):Xe.set(y,T,X,z),W.viewport(ge.copy(Xe).multiplyScalar(it()).round())},this.getScissor=function(y){return y.copy(tt)},this.setScissor=function(y,T,X,z){y.isVector4?tt.set(y.x,y.y,y.z,y.w):tt.set(y,T,X,z),W.scissor(Le.copy(tt).multiplyScalar(it()).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(y){W.setScissorTest(ut=y)},this.setOpaqueSort=function(y){Qe=y},this.setTransparentSort=function(y){Mt=y},this.getClearColor=function(y){return y.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(y=!0,T=!0,X=!0){let z=0;if(y){let L=!1;if(Ie!==null){const ie=Ie.texture.format;L=g.has(ie)}if(L){const ie=Ie.texture.type,J=m.has(ie),be=U.getClearColor(),Re=U.getClearAlpha(),Pe=be.r,M=be.g,O=be.b;J?(_[0]=Pe,_[1]=M,_[2]=O,_[3]=Re,te.clearBufferuiv(te.COLOR,0,_)):(R[0]=Pe,R[1]=M,R[2]=O,R[3]=Re,te.clearBufferiv(te.COLOR,0,R))}else z|=te.COLOR_BUFFER_BIT}T&&(z|=te.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(z|=te.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&te.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),V=y},this.dispose=function(){t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),U.dispose(),E.dispose(),P.dispose(),we.dispose(),ye.dispose(),k.dispose(),Ee.dispose(),ee.dispose(),Te.dispose(),Fe.dispose(),Se.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",at),Me.removeEventListener("sessionend",Dt),Ft.stop()};function We(y){y.preventDefault(),ac("WebGLRenderer: Context Lost."),B=!0}function je(){ac("WebGLRenderer: Context Restored."),B=!1;const y=xe.autoReset,T=ne.enabled,X=ne.autoUpdate,z=ne.needsUpdate,L=ne.type;Ve(),xe.autoReset=y,ne.enabled=T,ne.autoUpdate=X,ne.needsUpdate=z,ne.type=L}function Ne(y){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ft(y){const T=y.target;T.removeEventListener("dispose",ft),Ct(T)}function Ct(y){Tt(y),ye.remove(y)}function Tt(y){const T=ye.get(y).programs;T!==void 0&&(T.forEach(function(X){Se.releaseProgram(X)}),y.isShaderMaterial&&Se.releaseShaderCache(y))}this.renderBufferDirect=function(y,T,X,z,L,ie){T===null&&(T=He);const J=L.isMesh&&L.matrixWorld.determinantAffine()<0,be=Si(y,T,X,z,L);W.setMaterial(z,J);let Re=X.index,Pe=1;if(z.wireframe===!0){if(Re=ee.getWireframeAttribute(X),Re===void 0)return;Pe=2}const M=X.drawRange,O=X.attributes.position;let G=M.start*Pe,j=(M.start+M.count)*Pe;ie!==null&&(G=Math.max(G,ie.start*Pe),j=Math.min(j,(ie.start+ie.count)*Pe)),Re!==null?(G=Math.max(G,0),j=Math.min(j,Re.count)):O!=null&&(G=Math.max(G,0),j=Math.min(j,O.count));const ve=j-G;if(ve<0||ve===1/0)return;Te.setup(L,z,be,X,Re);let le,me=K;if(Re!==null&&(le=A.get(Re),me=Z,me.setIndex(le)),L.isMesh)z.wireframe===!0?(W.setLineWidth(z.wireframeLinewidth*it()),me.setMode(te.LINES)):me.setMode(te.TRIANGLES);else if(L.isLine){let Ce=z.linewidth;Ce===void 0&&(Ce=1),W.setLineWidth(Ce*it()),L.isLineSegments?me.setMode(te.LINES):L.isLineLoop?me.setMode(te.LINE_LOOP):me.setMode(te.LINE_STRIP)}else L.isPoints?me.setMode(te.POINTS):L.isSprite&&me.setMode(te.TRIANGLES);if(L.isBatchedMesh)if(st.get("WEBGL_multi_draw"))me.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const Ce=L._multiDrawStarts,ue=L._multiDrawCounts,fe=L._multiDrawCount,se=Re?A.get(Re).bytesPerElement:1,De=ye.get(z).currentProgram.getUniforms();for(let $e=0;$e<fe;$e++)De.setValue(te,"_gl_DrawID",$e),me.render(Ce[$e]/se,ue[$e])}else if(L.isInstancedMesh)me.renderInstances(G,ve,L.count);else if(X.isInstancedBufferGeometry){const Ce=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ue=Math.min(X.instanceCount,Ce);me.renderInstances(G,ve,ue)}else me.render(G,ve)};function Ke(y,T,X,z){V!==null&&y.isNodeMaterial&&V.setObject(z,y),bt===!0&&H.setState(y,X,!1),y.transparent===!0&&y.side===Li&&y.forceSinglePass===!1?(y.side=Rn,y.needsUpdate=!0,Hn(y,T,z),y.side=xs,y.needsUpdate=!0,Hn(y,T,z),y.side=Li):Hn(y,T,z)}this.compile=function(y,T,X=null){X===null&&(X=y),V!==null&&V.renderStart(y,T,X),D=P.get(X),D.init(T),I.push(D),X.traverseVisible(function(L){L.isLight&&L.layers.test(T.layers)&&(D.pushLight(L),L.castShadow&&D.pushShadow(L))}),y!==X&&y.traverseVisible(function(L){L.isLight&&L.layers.test(T.layers)&&(D.pushLight(L),L.castShadow&&D.pushShadow(L))}),D.setupLights(),V!==null&&V.updateLights(D.state.lightsArray),Lt=this.localClippingEnabled,bt=H.init(this.clippingPlanes,Lt),bt===!0&&H.setGlobalState(this.clippingPlanes,T),V!==null&&ne.render(D.state.shadowsArray,X,T);const z=new Set;return y.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const ie=L.material;if(ie)if(Array.isArray(ie))for(let J=0;J<ie.length;J++){const be=ie[J];Ke(be,X,T,L),z.add(be)}else Ke(ie,X,T,L),z.add(ie)}),D=I.pop(),V!==null&&V.renderEnd(),z},this.compileAsync=function(y,T,X=null){const z=this.compile(y,T,X);return new Promise(L=>{function ie(){if(z.forEach(function(J){const Re=ye.get(J).currentProgram;(Re===void 0||Re.isReady())&&z.delete(J)}),z.size===0){L(y);return}setTimeout(ie,10)}st.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Vt=null;function pt(y){Vt&&Vt(y)}function at(){Ft.stop()}function Dt(){Ft.start()}const Ft=new Tu;Ft.setAnimationLoop(pt),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(y){Vt=y,Me.setAnimationLoop(y),y===null?Ft.stop():Ft.start()},Me.addEventListener("sessionstart",at),Me.addEventListener("sessionend",Dt),this.render=function(y,T){if(T!==void 0&&T.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;V!==null&&V.renderStart(y,T);const X=Me.enabled===!0&&Me.isPresenting===!0,z=F!==null&&(Ie===null||X)&&F.begin(N,Ie);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),T.parent===null&&T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(T),T=Me.getCamera()),y.isScene===!0&&y.onBeforeRender(N,y,T,Ie),D=P.get(y,I.length),D.init(T),D.state.textureUnits=we.getTextureUnits(),I.push(D),mt.multiplyMatrices(T.projectionMatrix,T.matrixWorldInverse),T.isArrayCamera?Rt.setFromArrayCamera(T):et.setFromProjectionMatrix(mt,oi,T.reversedDepth),Lt=this.localClippingEnabled,bt=H.init(this.clippingPlanes,Lt),C=E.get(y,b.length),C.init(),b.push(C),this.info.render.frame++,Me.enabled===!0&&Me.isPresenting===!0){const J=N.xr.getDepthSensingMesh();J!==null&&gn(J,T,-1/0,N.sortObjects)}gn(y,T,0,N.sortObjects),C.finish(),V!==null&&V.updateLights(D.state.lightsArray),N.sortObjects===!0&&C.sort(Qe,Mt),rt=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,rt&&U.addToRenderList(C,y),this.info.autoReset===!0&&this.info.reset(),bt===!0&&H.beginShadows();const L=D.state.shadowsArray;if(ne.render(L,y,T),bt===!0&&H.endShadows(),(z&&F.hasRenderPass())===!1){const J=C.opaque,be=C.transmissive;if(D.setupLights(),T.isArrayCamera){const Re=T.cameras;if(be.length>0)for(let Pe=0,M=Re.length;Pe<M;Pe++){const O=Re[Pe];ns(J,be,y,O)}rt&&U.render(y);for(let Pe=0,M=Re.length;Pe<M;Pe++){const O=Re[Pe];Nn(C,y,O,O.viewport)}}else be.length>0&&ns(J,be,y,T),rt&&U.render(y),Nn(C,y,T)}Ie!==null&&ce===0&&(we.updateMultisampleRenderTarget(Ie),we.updateRenderTargetMipmap(Ie)),z&&F.end(N),y.isScene===!0&&y.onAfterRender(N,y,T),Te.resetDefaultState(),pe=-1,Ae=null,I.pop(),I.length>0?(D=I[I.length-1],we.setTextureUnits(D.state.textureUnits),bt===!0&&H.setGlobalState(N.clippingPlanes,D.state.camera)):D=null,b.pop(),b.length>0?C=b[b.length-1]:C=null,V!==null&&V.renderEnd()};function gn(y,T,X,z){if(y.visible===!1)return;if(y.layers.test(T.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(T);else if(y.isLight)D.pushLight(y),y.castShadow&&D.pushShadow(y);else if(y.isSprite){const J=T.isArrayCamera?Rt:et;if(!y.frustumCulled||y.intersectsFrustum(J)){z&&Ue.setFromMatrixPosition(y.matrixWorld).applyMatrix4(mt);const be=Ee.update(y),Re=y.material;Re.visible&&C.push(y,be,Re,X,Ue.z,null,T)}}else if(y.isMesh||y.isLine||y.isPoints){const J=T.isArrayCamera?Rt:et;if(!y.frustumCulled||y.intersectsFrustum(J)){const be=Ee.update(y),Re=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ue.copy(y.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ue.copy(be.boundingSphere.center)),Ue.applyMatrix4(y.matrixWorld).applyMatrix4(mt)),Array.isArray(Re)){const Pe=be.groups;for(let M=0,O=Pe.length;M<O;M++){const G=Pe[M],j=Re[G.materialIndex];j&&j.visible&&C.push(y,be,j,X,Ue.z,G,T)}}else Re.visible&&C.push(y,be,Re,X,Ue.z,null,T)}}}const ie=y.children;for(let J=0,be=ie.length;J<be;J++)gn(ie[J],T,X,z)}function Nn(y,T,X,z){const{opaque:L,transmissive:ie,transparent:J}=y;D.setupLightsView(X),bt===!0&&H.setGlobalState(N.clippingPlanes,X),z&&W.viewport(ge.copy(z)),L.length>0&&$n(L,T,X),ie.length>0&&$n(ie,T,X),J.length>0&&$n(J,T,X),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function ns(y,T,X,z){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[z.id]===void 0){const G=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[z.id]=new In(1,1,{generateMipmaps:!0,type:G?li:Ln,minFilter:zi,samples:Math.max(4,Y.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Nt.workingColorSpace})}const ie=D.state.transmissionRenderTarget[z.id],J=z.viewport||ge;ie.setSize(J.z*N.transmissionResolutionScale,J.w*N.transmissionResolutionScale);const be=N.getRenderTarget(),Re=N.getActiveCubeFace(),Pe=N.getActiveMipmapLevel();N.setRenderTarget(ie),N.getClearColor(_e),ke=N.getClearAlpha(),ke<1&&N.setClearColor(16777215,.5),N.clear(),rt&&U.render(X);const M=N.toneMapping;N.toneMapping=yi;const O=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),D.setupLightsView(z),bt===!0&&H.setGlobalState(N.clippingPlanes,z),$n(y,X,z),we.updateMultisampleRenderTarget(ie),we.updateRenderTargetMipmap(ie),st.has("WEBGL_multisampled_render_to_texture")===!1){let G=!1;for(let j=0,ve=T.length;j<ve;j++){const le=T[j],{object:me,geometry:Ce,material:ue,group:fe}=le;if(ue.side===Li&&me.layers.test(z.layers)){const se=ue.side;ue.side=Rn,ue.needsUpdate=!0,ci(me,X,z,Ce,ue,fe),ue.side=se,ue.needsUpdate=!0,G=!0}}G===!0&&(we.updateMultisampleRenderTarget(ie),we.updateRenderTargetMipmap(ie))}N.setRenderTarget(be,Re,Pe),N.setClearColor(_e,ke),O!==void 0&&(z.viewport=O),N.toneMapping=M}function $n(y,T,X){const z=T.isScene===!0?T.overrideMaterial:null;for(let L=0,ie=y.length;L<ie;L++){const J=y[L],{object:be,geometry:Re,group:Pe}=J;let M=J.material;M.allowOverride===!0&&z!==null&&(M=z),be.layers.test(X.layers)&&ci(be,T,X,Re,M,Pe)}}function ci(y,T,X,z,L,ie){V!==null&&L.isNodeMaterial&&V.setObject(y,L),y.onBeforeRender(N,T,X,z,L,ie),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),L.onBeforeRender(N,T,X,z,y,ie),L.transparent===!0&&L.side===Li&&L.forceSinglePass===!1?(L.side=Rn,L.needsUpdate=!0,N.renderBufferDirect(X,T,z,L,y,ie),L.side=xs,L.needsUpdate=!0,N.renderBufferDirect(X,T,z,L,y,ie),L.side=Li):N.renderBufferDirect(X,T,z,L,y,ie),y.onAfterRender(N,T,X,z,L,ie)}function Yn(y){let T=0;for(const X of y)X.texture!==null&&T++;return T}function Hn(y,T,X){T.isScene!==!0&&(T=He);const z=ye.get(y),L=D.state.lights,ie=D.state.shadowsArray,J=L.state.version,be=Se.getParameters(y,L.state,ie,T,X,D.state.lightProbeGridArray),Re=Se.getProgramCacheKey(be);let Pe=z.programs;z.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?T.environment:null,z.fog=T.fog;const M=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;z.envMap=k.get(y.envMap||z.environment,M),z.envMapRotation=z.environment!==null&&y.envMap===null?T.environmentRotation:y.envMapRotation,Pe===void 0&&(y.addEventListener("dispose",ft),Pe=new Map,z.programs=Pe,z.programVariants=new Map);let O=Pe.get(Re);if(O!==void 0){if(z.currentProgram===O&&z.lightsStateVersion===J)return Ss(y,be),O}else be.uniforms=Se.getUniforms(y),V!==null&&y.isNodeMaterial&&V.build(y,X,be),y.onBeforeCompile(be,N),O=Se.acquireProgram(be,Re),Pe.set(Re,O),z.uniforms=be.uniforms;const G=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(G.clippingPlanes=H.uniform),Ss(y,be),z.needsLights=w(y),z.lightsStateVersion=J,z.needsLights&&(G.ambientLightColor.value=L.state.ambient,G.lightProbe.value=L.state.probe,G.sunLights.value=L.state.sun,G.sunLightShadows.value=L.state.sunShadow,G.directionalLights.value=L.state.directional,G.directionalLightShadows.value=L.state.directionalShadow,G.spotLights.value=L.state.spot,G.spotLightShadows.value=L.state.spotShadow,G.rectAreaLights.value=L.state.rectArea,G.ltc_1.value=L.state.rectAreaLTC1,G.ltc_2.value=L.state.rectAreaLTC2,G.pointLights.value=L.state.point,G.pointLightShadows.value=L.state.pointShadow,G.hemisphereLights.value=L.state.hemi,G.sunShadowMatrix.value=L.state.sunShadowMatrix,G.sunShadowCascade.value=L.state.sunShadowCascade,G.directionalShadowMatrix.value=L.state.directionalShadowMatrix,G.spotLightMatrix.value=L.state.spotLightMatrix,G.spotLightMap.value=L.state.spotLightMap,G.pointShadowMatrix.value=L.state.pointShadowMatrix),z.numLightProbeGrids=Yn(D.state.lightProbeGridArray),z.currentProgram=O,z.uniformsList=null,O}function xn(y,T,X,z,L){const ie=ye.get(y),J=ie.currentProgram.id+","+z+","+L;let be=ie.programVariants.get(J);return be===void 0?(be=Hn(y,T,X),ie.programVariants.set(J,be)):(ie.currentProgram=be,ie.uniformsList=null,ie.outputColorSpace=z,ie.toneMapping=L),be}function bs(y){if(y.uniformsList===null){const T=y.currentProgram.getUniforms();y.uniformsList=To.seqWithValue(T.seq,y.uniforms)}return y.uniformsList}function Ss(y,T){const X=ye.get(y);X.outputColorSpace=T.outputColorSpace,X.batching=T.batching,X.batchingColor=T.batchingColor,X.instancing=T.instancing,X.instancingColor=T.instancingColor,X.instancingMorph=T.instancingMorph,X.skinning=T.skinning,X.morphTargets=T.morphTargets,X.morphNormals=T.morphNormals,X.morphColors=T.morphColors,X.morphTargetsCount=T.morphTargetsCount,X.numClippingPlanes=T.numClippingPlanes,X.numIntersection=T.numClipIntersection,X.vertexAlphas=T.vertexAlphas,X.vertexTangents=T.vertexTangents,X.toneMapping=T.toneMapping}function Si(y,T,X,z,L){T.isScene!==!0&&(T=He),we.resetTextureUnits();const ie=T.fog,J=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?T.environment:null,be=Ie===null?N.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:Nt.workingColorSpace,Re=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Pe=k.get(z.envMap||J,Re),M=z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,O=!!X.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),G=!!X.morphAttributes.position,j=!!X.morphAttributes.normal,ve=!!X.morphAttributes.color;let le=yi;z.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(le=N.toneMapping);const me=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ce=me!==void 0?me.length:0,ue=ye.get(z),fe=D.state.lights;if(bt===!0&&(Lt===!0||y!==Ae)){const St=y===Ae&&z.id===pe;H.setState(z,y,St)}let se=!1,De=!1;z.version===ue.__version?ue.needsLights&&ue.lightsStateVersion!==fe.state.version||L.isBatchedMesh&&ue.batching===!1||!L.isBatchedMesh&&ue.batching===!0||L.isBatchedMesh&&ue.batchingColor===!0&&L._colorsTexture===null||L.isBatchedMesh&&ue.batchingColor===!1&&L._colorsTexture!==null||L.isInstancedMesh&&ue.instancing===!1||!L.isInstancedMesh&&ue.instancing===!0||L.isSkinnedMesh&&ue.skinning===!1||!L.isSkinnedMesh&&ue.skinning===!0||L.isInstancedMesh&&ue.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&ue.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&ue.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&ue.instancingMorph===!1&&L.morphTexture!==null||ue.envMap!==Pe||z.fog===!0&&ue.fog!==ie||ue.numClippingPlanes!==void 0&&(ue.numClippingPlanes!==H.numPlanes||ue.numIntersection!==H.numIntersection)||ue.vertexAlphas!==M||ue.vertexTangents!==O||ue.morphTargets!==G||ue.morphNormals!==j||ue.morphColors!==ve||ue.morphTargetsCount!==Ce||ue.numLightProbeGrids!==Yn(D.state.lightProbeGridArray)?se=!0:(ue.outputColorSpace!==be||ue.toneMapping!==le)&&(De=!0):(se=!0,ue.__version=z.version);let $e=ue.currentProgram;(se===!0||De===!0)&&($e=De===!0?xn(z,T,L,be,le):Hn(z,T,L),V&&z.isNodeMaterial&&V.onUpdateProgram(z,$e,ue));let Je=!1,lt=!1,vt=!1;const Ye=$e.getUniforms(),ht=ue.uniforms;if(W.useProgram($e.program)&&(Je=!0,lt=!0,vt=!0),z.id!==pe&&(pe=z.id,lt=!0),Je||Ae!==y){W.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Ye.setValue(te,"projectionMatrix",y.projectionMatrix),Ye.setValue(te,"viewMatrix",y.matrixWorldInverse);const It=Ye.map.cameraPosition;It!==void 0&&It.setValue(te,Ot.setFromMatrixPosition(y.matrixWorld)),Y.logarithmicDepthBuffer&&Ye.setValue(te,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Ye.setValue(te,"isOrthographic",y.isOrthographicCamera===!0),Ae!==y&&(Ae=y,lt=!0,vt=!0)}if(ue.needsLights&&(fe.state.sunShadowMap.length>0&&Ye.setValue(te,"sunShadowMap",fe.state.sunShadowMap,we),fe.state.directionalShadowMap.length>0&&Ye.setValue(te,"directionalShadowMap",fe.state.directionalShadowMap,we),fe.state.spotShadowMap.length>0&&Ye.setValue(te,"spotShadowMap",fe.state.spotShadowMap,we),fe.state.pointShadowMap.length>0&&Ye.setValue(te,"pointShadowMap",fe.state.pointShadowMap,we)),L.isSkinnedMesh){Ye.setOptional(te,L,"bindMatrix"),Ye.setOptional(te,L,"bindMatrixInverse");const St=L.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),Ye.setValue(te,"boneTexture",St.boneTexture,we))}L.isBatchedMesh&&(Ye.setOptional(te,L,"batchingTexture"),Ye.setValue(te,"batchingTexture",L._matricesTexture,we),Ye.setOptional(te,L,"batchingIdTexture"),Ye.setValue(te,"batchingIdTexture",L._indirectTexture,we),Ye.setOptional(te,L,"batchingColorTexture"),L._colorsTexture!==null&&Ye.setValue(te,"batchingColorTexture",L._colorsTexture,we));const nt=X.morphAttributes;if((nt.position!==void 0||nt.normal!==void 0||nt.color!==void 0)&&re.update(L,X,$e),(lt||ue.receiveShadow!==L.receiveShadow)&&(ue.receiveShadow=L.receiveShadow,Ye.setValue(te,"receiveShadow",L.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&T.environment!==null&&(ht.envMapIntensity.value=T.environmentIntensity),ht.dfgLUT!==void 0&&(ht.dfgLUT.value=Tx()),lt){if(Ye.setValue(te,"toneMappingExposure",N.toneMappingExposure),ue.needsLights&&x(ht,vt),ie&&z.fog===!0&&ze.refreshFogUniforms(ht,ie),ze.refreshMaterialUniforms(ht,z,Be,Ge,D.state.transmissionRenderTarget[y.id]),ue.needsLights&&ue.numLightProbeGrids>0){const St=S;let It=0;for(const Bt of D.state.lightProbeGridArray)Bt.texture!==null&&(St.textures[It]=Bt.texture,St.min[It]=Bt.boundingBox.min,St.max[It]=Bt.boundingBox.max,St.resolution[It]=Bt.resolution,It++);for(const Bt in St)St[Bt].length=It;ht.probesSH.value=St.textures,ht.probesMin.value=St.min,ht.probesMax.value=St.max,ht.probesResolution.value=St.resolution}To.upload(te,bs(ue),ht,we)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(To.upload(te,bs(ue),ht,we),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Ye.setValue(te,"center",L.center),Ye.setValue(te,"modelViewMatrix",L.modelViewMatrix),Ye.setValue(te,"normalMatrix",L.normalMatrix),Ye.setValue(te,"modelMatrix",L.matrixWorld),z.uniformsGroups!==void 0){const St=z.uniformsGroups;for(let It=0,Bt=St.length;It<Bt;It++){const Cn=St[It];Fe.update(Cn,$e),Fe.bind(Cn,$e)}}return $e}function x(y,T){y.ambientLightColor.needsUpdate=T,y.lightProbe.needsUpdate=T,y.sunLights.needsUpdate=T,y.sunLightShadows.needsUpdate=T,y.directionalLights.needsUpdate=T,y.directionalLightShadows.needsUpdate=T,y.pointLights.needsUpdate=T,y.pointLightShadows.needsUpdate=T,y.spotLights.needsUpdate=T,y.spotLightShadows.needsUpdate=T,y.rectAreaLights.needsUpdate=T,y.hemisphereLights.needsUpdate=T}function w(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return de},this.getActiveMipmapLevel=function(){return ce},this.getRenderTarget=function(){return Ie},this.setRenderTargetTextures=function(y,T,X){const z=ye.get(y);z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),ye.get(y.texture).__webglTexture=T,ye.get(y.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:X,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,T){const X=ye.get(y);X.__webglFramebuffer=T,X.__useDefaultFramebuffer=T===void 0},this.setRenderTarget=function(y,T=0,X=0){Ie=y,de=T,ce=X;let z=null,L=!1,ie=!1;if(y){const be=ye.get(y);if(be.__useDefaultFramebuffer!==void 0){W.bindFramebuffer(te.FRAMEBUFFER,be.__webglFramebuffer),ge.copy(y.viewport),Le.copy(y.scissor),qe=y.scissorTest,W.viewport(ge),W.scissor(Le),W.setScissorTest(qe),pe=-1;return}else if(be.__webglFramebuffer===void 0)we.setupRenderTarget(y);else if(be.__hasExternalTextures)we.rebindTextures(y,ye.get(y.texture).__webglTexture,ye.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const M=y.depthTexture;if(be.__boundDepthTexture!==M){if(M!==null&&ye.has(M)&&(y.width!==M.image.width||y.height!==M.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");we.setupDepthRenderbuffer(y)}}const Re=y.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(ie=!0);const Pe=ye.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Pe[T])?z=Pe[T][X]:z=Pe[T],L=!0):y.samples>0&&we.useMultisampledRTT(y)===!1?z=ye.get(y).__webglMultisampledFramebuffer:Array.isArray(Pe)?z=Pe[X]:z=Pe,ge.copy(y.viewport),Le.copy(y.scissor),qe=y.scissorTest}else ge.copy(Xe).multiplyScalar(Be).floor(),Le.copy(tt).multiplyScalar(Be).floor(),qe=ut;if(X!==0&&(z=Q),W.bindFramebuffer(te.FRAMEBUFFER,z)&&W.drawBuffers(y,z),W.viewport(ge),W.scissor(Le),W.setScissorTest(qe),L){const be=ye.get(y.texture);te.framebufferTexture2D(te.FRAMEBUFFER,te.COLOR_ATTACHMENT0,te.TEXTURE_CUBE_MAP_POSITIVE_X+T,be.__webglTexture,X)}else if(ie){const be=T;for(let Re=0;Re<y.textures.length;Re++){const Pe=ye.get(y.textures[Re]);te.framebufferTextureLayer(te.FRAMEBUFFER,te.COLOR_ATTACHMENT0+Re,Pe.__webglTexture,X,be)}}else if(y!==null&&X!==0){const be=ye.get(y.texture);te.framebufferTexture2D(te.FRAMEBUFFER,te.COLOR_ATTACHMENT0,te.TEXTURE_2D,be.__webglTexture,X)}pe=-1};function q(y){const T=ye.get(y);return(T.__readFormat!==y.format||T.__readType!==y.type)&&(T.__readFormat=y.format,T.__readType=y.type,T.__formatReadable=Y.textureFormatReadable(y.format),T.__typeReadable=Y.textureTypeReadable(y.type)),T}this.readRenderTargetPixels=function(y,T,X,z,L,ie,J,be=0){if(!(y&&y.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=ye.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&J!==void 0&&(Re=Re[J],Array.isArray(Re)&&(Re=Re[0])),Re){W.bindFramebuffer(te.FRAMEBUFFER,Re);try{const Pe=y.textures[be],M=Pe.format,O=Pe.type;y.textures.length>1&&te.readBuffer(te.COLOR_ATTACHMENT0+be);const G=q(Pe);if(G.__formatReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(G.__typeReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}T>=0&&T<=y.width-z&&X>=0&&X<=y.height-L&&te.readPixels(T,X,z,L,he.convert(M),he.convert(O),ie)}finally{const Pe=Ie!==null?ye.get(Ie).__webglFramebuffer:null;W.bindFramebuffer(te.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(y,T,X,z,L,ie,J,be=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=ye.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&J!==void 0&&(Re=Re[J],Array.isArray(Re)&&(Re=Re[0])),Re)if(T>=0&&T<=y.width-z&&X>=0&&X<=y.height-L){W.bindFramebuffer(te.FRAMEBUFFER,Re);const Pe=y.textures[be],M=Pe.format,O=Pe.type;y.textures.length>1&&te.readBuffer(te.COLOR_ATTACHMENT0+be);const G=q(Pe);if(G.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(G.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const j=te.createBuffer();te.bindBuffer(te.PIXEL_PACK_BUFFER,j),te.bufferData(te.PIXEL_PACK_BUFFER,ie.byteLength,te.STREAM_READ),te.readPixels(T,X,z,L,he.convert(M),he.convert(O),0),te.bindBuffer(te.PIXEL_PACK_BUFFER,null);const ve=Ie!==null?ye.get(Ie).__webglFramebuffer:null;W.bindFramebuffer(te.FRAMEBUFFER,ve);const le=te.fenceSync(te.SYNC_GPU_COMMANDS_COMPLETE,0);return te.flush(),await Ld(te,le,4),te.bindBuffer(te.PIXEL_PACK_BUFFER,j),te.getBufferSubData(te.PIXEL_PACK_BUFFER,0,ie),te.bindBuffer(te.PIXEL_PACK_BUFFER,null),te.deleteBuffer(j),te.deleteSync(le),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,T=null,X=0){const z=Math.pow(2,-X),L=Math.floor(y.image.width*z),ie=Math.floor(y.image.height*z),J=T!==null?T.x:0,be=T!==null?T.y:0;we.setTexture2D(y,0),te.copyTexSubImage2D(te.TEXTURE_2D,X,0,0,J,be,L,ie),W.unbindTexture()},this.copyTextureToTexture=function(y,T,X=null,z=null,L=0,ie=0){let J,be,Re,Pe,M,O,G,j,ve;const le=y.isCompressedTexture?y.mipmaps[ie]:y.image;if(X!==null)J=X.max.x-X.min.x,be=X.max.y-X.min.y,Re=X.isBox3?X.max.z-X.min.z:1,Pe=X.min.x,M=X.min.y,O=X.isBox3?X.min.z:0;else{const Ye=Math.pow(2,-L);J=Math.floor(le.width*Ye),be=Math.floor(le.height*Ye),y.isDataArrayTexture?Re=le.depth:y.isData3DTexture?Re=Math.floor(le.depth*Ye):Re=1,Pe=0,M=0,O=0}z!==null?(G=z.x,j=z.y,ve=z.z):(G=0,j=0,ve=0);const me=he.convert(T.format),Ce=he.convert(T.type);let ue;T.isData3DTexture?(we.setTexture3D(T,0),ue=te.TEXTURE_3D):T.isDataArrayTexture||T.isCompressedArrayTexture?(we.setTexture2DArray(T,0),ue=te.TEXTURE_2D_ARRAY):(we.setTexture2D(T,0),ue=te.TEXTURE_2D),W.activeTexture(te.TEXTURE0),W.pixelStorei(te.UNPACK_FLIP_Y_WEBGL,T.flipY),W.pixelStorei(te.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),W.pixelStorei(te.UNPACK_ALIGNMENT,T.unpackAlignment);const fe=W.getParameter(te.UNPACK_ROW_LENGTH),se=W.getParameter(te.UNPACK_IMAGE_HEIGHT),De=W.getParameter(te.UNPACK_SKIP_PIXELS),$e=W.getParameter(te.UNPACK_SKIP_ROWS),Je=W.getParameter(te.UNPACK_SKIP_IMAGES);W.pixelStorei(te.UNPACK_ROW_LENGTH,le.width),W.pixelStorei(te.UNPACK_IMAGE_HEIGHT,le.height),W.pixelStorei(te.UNPACK_SKIP_PIXELS,Pe),W.pixelStorei(te.UNPACK_SKIP_ROWS,M),W.pixelStorei(te.UNPACK_SKIP_IMAGES,O);const lt=y.isDataArrayTexture||y.isData3DTexture,vt=T.isDataArrayTexture||T.isData3DTexture;if(y.isDepthTexture){const Ye=ye.get(y),ht=ye.get(T),nt=ye.get(Ye.__renderTarget),St=ye.get(ht.__renderTarget);W.bindFramebuffer(te.READ_FRAMEBUFFER,nt.__webglFramebuffer),W.bindFramebuffer(te.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let It=0;It<Re;It++)lt&&(te.framebufferTextureLayer(te.READ_FRAMEBUFFER,te.COLOR_ATTACHMENT0,ye.get(y).__webglTexture,L,O+It),te.framebufferTextureLayer(te.DRAW_FRAMEBUFFER,te.COLOR_ATTACHMENT0,ye.get(T).__webglTexture,ie,ve+It)),te.blitFramebuffer(Pe,M,Pe+J,M+be,G,j,G+J,j+be,te.DEPTH_BUFFER_BIT,te.NEAREST);W.bindFramebuffer(te.READ_FRAMEBUFFER,null),W.bindFramebuffer(te.DRAW_FRAMEBUFFER,null)}else if(L!==0||y.isRenderTargetTexture||ye.has(y)){const Ye=ye.get(y),ht=ye.get(T);W.bindFramebuffer(te.READ_FRAMEBUFFER,$),W.bindFramebuffer(te.DRAW_FRAMEBUFFER,oe);for(let nt=0;nt<Re;nt++)lt?te.framebufferTextureLayer(te.READ_FRAMEBUFFER,te.COLOR_ATTACHMENT0,Ye.__webglTexture,L,O+nt):te.framebufferTexture2D(te.READ_FRAMEBUFFER,te.COLOR_ATTACHMENT0,te.TEXTURE_2D,Ye.__webglTexture,L),vt?te.framebufferTextureLayer(te.DRAW_FRAMEBUFFER,te.COLOR_ATTACHMENT0,ht.__webglTexture,ie,ve+nt):te.framebufferTexture2D(te.DRAW_FRAMEBUFFER,te.COLOR_ATTACHMENT0,te.TEXTURE_2D,ht.__webglTexture,ie),L!==0?te.blitFramebuffer(Pe,M,Pe+J,M+be,G,j,G+J,j+be,te.COLOR_BUFFER_BIT,te.NEAREST):vt?te.copyTexSubImage3D(ue,ie,G,j,ve+nt,Pe,M,J,be):te.copyTexSubImage2D(ue,ie,G,j,Pe,M,J,be);W.bindFramebuffer(te.READ_FRAMEBUFFER,null),W.bindFramebuffer(te.DRAW_FRAMEBUFFER,null)}else vt?y.isDataTexture||y.isData3DTexture?te.texSubImage3D(ue,ie,G,j,ve,J,be,Re,me,Ce,le.data):T.isCompressedArrayTexture?te.compressedTexSubImage3D(ue,ie,G,j,ve,J,be,Re,me,le.data):te.texSubImage3D(ue,ie,G,j,ve,J,be,Re,me,Ce,le):y.isDataTexture?te.texSubImage2D(te.TEXTURE_2D,ie,G,j,J,be,me,Ce,le.data):y.isCompressedTexture?te.compressedTexSubImage2D(te.TEXTURE_2D,ie,G,j,le.width,le.height,me,le.data):te.texSubImage2D(te.TEXTURE_2D,ie,G,j,J,be,me,Ce,le);W.pixelStorei(te.UNPACK_ROW_LENGTH,fe),W.pixelStorei(te.UNPACK_IMAGE_HEIGHT,se),W.pixelStorei(te.UNPACK_SKIP_PIXELS,De),W.pixelStorei(te.UNPACK_SKIP_ROWS,$e),W.pixelStorei(te.UNPACK_SKIP_IMAGES,Je),ie===0&&T.generateMipmaps===!0&&T.mipmapsAutoUpdate===!0&&te.generateMipmap(ue),W.unbindTexture()},this.initRenderTarget=function(y){ye.get(y).__webglFramebuffer===void 0&&we.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?we.setTextureCube(y,0):y.isData3DTexture?we.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?we.setTexture2DArray(y,0):we.setTexture2D(y,0),W.unbindTexture()},this.resetState=function(){de=0,ce=0,Ie=null,W.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Nt._getUnpackColorSpace()}}class Rx extends uu{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new Xt;e.deleteAttribute("uv");const t=new un({side:Rn}),i=new un,s=new wu(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new At(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new jn(e,i,6),l=new nn;l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),l.updateMatrix(),a.setMatrixAt(0,l.matrix),l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),l.updateMatrix(),a.setMatrixAt(1,l.matrix),l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),l.updateMatrix(),a.setMatrixAt(2,l.matrix),l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),l.updateMatrix(),a.setMatrixAt(3,l.matrix),l.position.set(2.291,-.756,-2.621),l.rotation.set(0,-.286,0),l.scale.set(1.546,1.552,1.496),l.updateMatrix(),a.setMatrixAt(4,l.matrix),l.position.set(-2.193,-.369,-5.547),l.rotation.set(0,.516,0),l.scale.set(3.875,3.487,2.986),l.updateMatrix(),a.setMatrixAt(5,l.matrix),this.add(a);const o=new At(e,Fs(50));o.position.set(-16.116,14.37,8.208),o.scale.set(.1,2.428,2.739),this.add(o);const c=new At(e,Fs(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const u=new At(e,Fs(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);const p=new At(e,Fs(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);const d=new At(e,Fs(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const h=new At(e,Fs(100));h.position.set(0,20,0),h.scale.set(1,.1,1),this.add(h)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Fs(n){return new Th({color:0,emissive:16777215,emissiveIntensity:n})}function Cx(n){let e=n>>>0||2654435769;return function(){e=e+1831565813>>>0;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function ks(n,e=n){const t=document.createElement("canvas");return t.width=n,t.height=e,t}function Px(n,e,t){const i=new Float32Array(t*t);for(let a=0;a<i.length;a++)i[a]=n();const s=new Float32Array(e*e),r=a=>a*a*(3-2*a);for(let a=0;a<e;a++)for(let l=0;l<e;l++){const o=l/e*t,c=a/e*t,u=Math.floor(o),p=Math.floor(c),d=r(o-u),h=r(c-p),f=i[p%t*t+u%t],v=i[p%t*t+(u+1)%t],g=i[(p+1)%t*t+u%t],m=i[(p+1)%t*t+(u+1)%t];s[a*e+l]=(f*(1-d)+v*d)*(1-h)+(g*(1-d)+m*d)*h}return s}function nf(n,e,t=4,i=5){const s=new Float32Array(e*e);let r=.5,a=0;for(let l=0;l<i;l++){const o=Px(n,e,t<<l);for(let c=0;c<s.length;c++)s[c]+=o[c]*r;a+=r,r*=.5}for(let l=0;l<s.length;l++)s[l]/=a;return s}function Ea(n,e,t=!0){return n.colorSpace=e?Pn:Di,t&&(n.wrapS=n.wrapT=Cr),n.anisotropy=8,n.generateMipmaps=!0,n.minFilter=zi,n.needsUpdate=!0,n}function cr(n,e,t,{bump:i=2,grime:s=.35}={}){const r=Cx(n),a=ks(e),l=ks(e),o=ks(e),c=ks(e),u=a.getContext("2d"),p=l.getContext("2d"),d=o.getContext("2d"),h=c.getContext("2d");p.fillStyle="#808080",p.fillRect(0,0,e,e),t(u,p,d,h,e,r);const f=u.getImageData(0,0,e,e),v=p.getImageData(0,0,e,e),g=d.getImageData(0,0,e,e),m=h.getImageData(0,0,e,e),_=nf(r,e,4,6),R=nf(r,e,32,3),S=new Float32Array(e*e);for(let N=0;N<e*e;N++){const B=1-s*Math.max(0,_[N]*1.6-.45);f.data[N*4]*=B,f.data[N*4+1]*=B,f.data[N*4+2]*=B*.98,S[N]=v.data[N*4]/255+(R[N]-.5)*.06,g.data[N*4]=Math.max(0,Math.min(255,g.data[N*4]+(_[N]-.5)*90+(R[N]-.5)*40))}u.putImageData(f,0,0);const C=new Uint8ClampedArray(e*e*4),D=new Uint8ClampedArray(e*e*4),b=(N,B)=>S[(B+e)%e*e+(N+e)%e];for(let N=0;N<e;N++)for(let B=0;B<e;B++){const V=(b(B+1,N)-b(B-1,N))*i*e/512*4,Q=(b(B,N+1)-b(B,N-1))*i*e/512*4,$=1/Math.hypot(V,Q,1),oe=(N*e+B)*4;C[oe]=(-V*$*.5+.5)*255,C[oe+1]=(Q*$*.5+.5)*255,C[oe+2]=($*.5+.5)*255,C[oe+3]=255,D[oe]=255,D[oe+1]=g.data[oe],D[oe+2]=m.data[oe],D[oe+3]=255}const I=ks(e),F=ks(e);return I.getContext("2d").putImageData(new ImageData(C,e,e),0,0),F.getContext("2d").putImageData(new ImageData(D,e,e),0,0),{map:Ea(new Eo(a),!0),normalMap:Ea(new Eo(I),!1),orm:Ea(new Eo(F),!1)}}const $t=n=>{const e=Math.round(Math.max(0,Math.min(1,n))*255);return`rgb(${e},${e},${e})`};function _s(n,e,t,i,s,r=.2,a=1){n.strokeStyle=s,n.lineCap="round";for(let l=0;l<i;l++){const o=e()*t,c=e()*t,u=e()*Math.PI,p=(.02+e()*r)*t;n.lineWidth=a*(.4+e()),n.globalAlpha=.15+e()*.5,n.beginPath(),n.moveTo(o,c),n.lineTo(o+Math.cos(u)*p,c+Math.sin(u)*p),n.stroke()}n.globalAlpha=1}function yl(n,e,t,i,s){for(let r=0;r<i;r++){const a=e()*t,l=e()*t*.6,o=(.15+e()*.5)*t,c=2+e()*10,u=n.createLinearGradient(0,l,0,l+o);u.addColorStop(0,s),u.addColorStop(1,"rgba(0,0,0,0)"),n.globalAlpha=.12+e()*.25,n.fillStyle=u,n.fillRect(a,l,c,o)}n.globalAlpha=1}function Lx(n,e,t,i,s,r){n.fillStyle="#8f9690",n.fillRect(0,0,s,s),t.fillStyle=$t(.62),t.fillRect(0,0,s,s),i.fillStyle=$t(.25),i.fillRect(0,0,s,s);const a=s/2;for(let l=0;l<2;l++)for(let o=0;o<2;o++){const c=o*a,u=l*a,p=.88+r()*.2;n.fillStyle=`rgb(${132*p|0},${141*p|0},${136*p|0})`,n.fillRect(c+3,u+3,a-6,a-6);const d=a*.12;e.fillStyle=$t(.56),e.fillRect(c+d,u+d,a-2*d,a-2*d),e.strokeStyle=$t(.36),e.lineWidth=3,e.strokeRect(c+d,u+d,a-2*d,a-2*d),n.strokeStyle="rgba(30,34,36,0.5)",n.lineWidth=2,n.strokeRect(c+d,u+d,a-2*d,a-2*d),e.strokeStyle=$t(.12),e.lineWidth=5,e.strokeRect(c,u,a,a),n.strokeStyle="#1a1d1f",n.lineWidth=4,n.strokeRect(c,u,a,a),t.strokeStyle=$t(.9),t.lineWidth=6,t.strokeRect(c,u,a,a);for(let h=0;h<6;h++)for(const[f,v]of[[c+d*.5+(a-d)*h/6+6,u+d*.5],[c+d*.5+(a-d)*h/6+6,u+a-d*.5],[c+d*.5,u+d*.5+(a-d)*h/6+6],[c+a-d*.5,u+d*.5+(a-d)*h/6+6]])e.fillStyle=$t(.85),e.beginPath(),e.arc(f,v,3.2,0,7),e.fill(),n.fillStyle="rgba(200,205,200,0.5)",n.beginPath(),n.arc(f-.6,v-.6,2.2,0,7),n.fill(),i.fillStyle=$t(.9),i.beginPath(),i.arc(f,v,3.2,0,7),i.fill()}for(let l=0;l<260;l++){const o=r()<.5,c=Math.round(r()*2)*a+(r()-.5)*22,u=r()*s,p=1+r()*5,d=o?c:u,h=o?u:c;n.fillStyle=`rgba(${70+r()*40|0},${72+r()*30|0},${70+r()*30|0},0.9)`,n.beginPath(),n.ellipse(d,h,p,p*(.4+r()),r()*3,0,7),n.fill(),i.fillStyle=$t(1),i.beginPath(),i.arc(d,h,p,0,7),i.fill(),t.fillStyle=$t(.35),t.beginPath(),t.arc(d,h,p,0,7),t.fill()}yl(n,r,s,46,"rgba(40,30,22,0.9)"),yl(t,r,s,30,"rgba(255,255,255,0.8)"),_s(n,r,s,150,"#cfd3cf",.12,1),_s(e,r,s,80,"#606060",.12,1.4)}function Dx(n,e,t,i,s,r){n.fillStyle="#3a3d40",n.fillRect(0,0,s,s),t.fillStyle=$t(.5),t.fillRect(0,0,s,s),i.fillStyle=$t(.85),i.fillRect(0,0,s,s);const a=s/2;for(let c=0;c<2;c++)for(let u=0;u<2;u++){const p=u*a,d=c*a,h=.8+r()*.35;n.fillStyle=`rgb(${58*h|0},${61*h|0},${64*h|0})`,n.fillRect(p+2,d+2,a-4,a-4);const f=a/14;for(let v=0;v<14;v++)for(let g=0;g<14;g++){const m=p+(v+.5)*f,_=d+(g+.5)*f,R=(v+g)%2?.785:-.785;e.fillStyle=$t(.78),e.beginPath(),e.ellipse(m,_,f*.36,f*.11,R,0,7),e.fill(),n.fillStyle="rgba(120,124,128,0.35)",n.beginPath(),n.ellipse(m-.5,_-.5,f*.34,f*.09,R,0,7),n.fill(),t.fillStyle=$t(.3),t.beginPath(),t.ellipse(m,_,f*.34,f*.1,R,0,7),t.fill()}e.strokeStyle=$t(.1),e.lineWidth=6,e.strokeRect(p,d,a,a),n.strokeStyle="#0c0d0e",n.lineWidth=5,n.strokeRect(p,d,a,a);for(const[v,g]of[[p+14,d+14],[p+a-14,d+14],[p+14,d+a-14],[p+a-14,d+a-14]])e.fillStyle=$t(.25),e.beginPath(),e.arc(v,g,5,0,7),e.fill(),n.fillStyle="#17181a",n.beginPath(),n.arc(v,g,5,0,7),n.fill()}const l=n.createLinearGradient(0,0,s,0);l.addColorStop(.2,"rgba(150,155,160,0)"),l.addColorStop(.5,"rgba(150,155,160,0.16)"),l.addColorStop(.8,"rgba(150,155,160,0)"),n.fillStyle=l,n.fillRect(0,0,s,s);const o=t.createLinearGradient(0,0,s,0);o.addColorStop(.2,"rgba(0,0,0,0)"),o.addColorStop(.5,"rgba(0,0,0,0.35)"),o.addColorStop(.8,"rgba(0,0,0,0)"),t.fillStyle=o,t.fillRect(0,0,s,s),_s(n,r,s,260,"#8d9196",.2,1.2),_s(t,r,s,200,"#202020",.2,2);for(let c=0;c<26;c++){const u=r()*s,p=r()*s,d=6+r()*34,h=n.createRadialGradient(u,p,0,u,p,d);h.addColorStop(0,"rgba(8,8,10,0.55)"),h.addColorStop(1,"rgba(8,8,10,0)"),n.fillStyle=h,n.fillRect(u-d,p-d,2*d,2*d);const f=t.createRadialGradient(u,p,0,u,p,d);f.addColorStop(0,"rgba(0,0,0,0.6)"),f.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=f,t.fillRect(u-d,p-d,2*d,2*d)}}function Ix(n,e,t,i,s,r){n.fillStyle="#6c7074",n.fillRect(0,0,s,s),t.fillStyle=$t(.42),t.fillRect(0,0,s,s),i.fillStyle=$t(1),i.fillRect(0,0,s,s);for(let a=0;a<1400;a++){const l=r()*s,o=r()*s,c=20+r()*160,u=90+r()*70|0;n.strokeStyle=`rgba(${u},${u+3},${u+6},0.25)`,n.lineWidth=1,n.beginPath(),n.moveTo(o,l),n.lineTo(o+c,l+(r()-.5)*2),n.stroke()}for(let a=0;a<60;a++){const l=r()*s,o=r()*s,c=8+r()*46,u=n.createRadialGradient(l,o,0,l,o,c);u.addColorStop(0,r()<.5?"rgba(92,52,28,0.5)":"rgba(20,20,24,0.5)"),u.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=u,n.fillRect(l-c,o-c,2*c,2*c);const p=t.createRadialGradient(l,o,0,l,o,c);p.addColorStop(0,"rgba(255,255,255,0.5)"),p.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=p,t.fillRect(l-c,o-c,2*c,2*c)}_s(n,r,s,200,"#c2c6ca",.15,1),_s(e,r,s,120,"#555",.15,1.5)}function Nx(n,e,t,i,s,r){n.fillStyle="#e4e4e0",n.fillRect(0,0,s,s),t.fillStyle=$t(.55),t.fillRect(0,0,s,s),i.fillStyle=$t(.1),i.fillRect(0,0,s,s);for(let a=0;a<300;a++){const l=r()*s,o=r()*s,c=.8+r()*r()*r()*9;n.fillStyle=`rgba(${100+r()*50|0},${100+r()*45|0},${104+r()*40|0},0.8)`,n.beginPath(),n.ellipse(l,o,c,c*(.3+r()*.8),r()*3,0,7),n.fill(),i.fillStyle=$t(.5),i.beginPath(),i.arc(l,o,c,0,7),i.fill(),e.fillStyle=$t(.42),e.beginPath(),e.arc(l,o,c,0,7),e.fill(),t.fillStyle=$t(.3),t.beginPath(),t.arc(l,o,c,0,7),t.fill()}yl(n,r,s,30,"rgba(50,38,28,0.8)"),_s(n,r,s,200,"#70706c",.1,1)}function Ux(n,e,t,i,s,r){n.fillStyle="#d8d6d0",n.fillRect(0,0,s,s),t.fillStyle=$t(.92),t.fillRect(0,0,s,s),i.fillStyle=$t(0),i.fillRect(0,0,s,s);for(let a=0;a<s;a+=4)e.fillStyle=$t(.44),e.fillRect(0,a,s,2);for(let a=0;a<s;a+=4)e.fillStyle="rgba(160,160,160,0.5)",e.fillRect(a,0,2,s);for(let a=0;a<40;a++){const l=r()*s,o=6+r()*20,c=e.createLinearGradient(0,l,0,l+o);c.addColorStop(0,"rgba(255,255,255,0)"),c.addColorStop(.5,"rgba(255,255,255,0.5)"),c.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=c,e.fillRect(0,l,s,o),n.fillStyle="rgba(0,0,0,0.07)",n.fillRect(0,l+o*.6,s,o*.5)}for(let a=0;a<50;a++){const l=r()*s,o=r()*s,c=10+r()*50,u=n.createRadialGradient(l,o,0,l,o,c);u.addColorStop(0,"rgba(40,34,28,0.3)"),u.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=u,n.fillRect(l-c,o-c,2*c,2*c)}}let lo=null;function Fu(){return lo||(lo={panel:cr(11,1024,Lx,{bump:2.4}),floor:cr(23,1024,Dx,{bump:3,grime:.45}),metal:cr(37,512,Ix,{bump:1.2}),paint:cr(41,512,Nx,{bump:1.6}),cloth:cr(53,256,Ux,{bump:2.2,grime:.2})},lo)}const sf={neonViolet:14242287,turquoise:8702925},Ao=6,zx={uWake:{value:0},uTime:{value:0},uUzQ:{value:2},uUzOff:{value:0},uAO:{value:.5},uWakeA:{value:new xt(sf.turquoise)},uWakeB:{value:new xt(sf.neonViolet)}},Fx=`
attribute vec3 aFlat; attribute vec3 aFlatN;
varying vec3 vFlat; varying vec3 vFlatN;
`,kx=`
varying vec3 vFlat; varying vec3 vFlatN;
uniform vec4 uFrost[${Ao}];
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
  for (int i = 0; i < ${Ao}; i++) {
    vec3 d = vFlat - uFrost[i].xyz; float r = uFrost[i].w * (1.0 + 0.4 * uWake) * 1.45;
    m0 = max(m0, 1.0 - dot(d, d) / (r * r));
  }
  if (m0 <= 0.0) return;
  float n1 = uzNoise(p * 2.3), n2 = uzNoise(p * 7.1), n3 = uzNoise(p * 23.0);
  float nz = n1 * 0.55 + n2 * 0.3 + n3 * 0.15;
  float m = 0.0;
  for (int i = 0; i < ${Ao}; i++) {
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
`,Ox=`
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
`,Bx=`
#include <aomap_fragment>
reflectedLight.indirectDiffuse *= uzAO;
reflectedLight.indirectSpecular *= uzAO;
`;function Hx(n){Object.assign(n.uniforms,zx,this.userData.room),n.vertexShader=Fx+n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vFlat = aFlat; vFlatN = aFlatN;`),n.fragmentShader=kx+n.fragmentShader.replace("#include <normal_fragment_maps>",Ox).replace("#include <aomap_fragment>",Bx)}function Gx(n,e){return{uFrost:{value:Array.from({length:Ao},()=>new Zt(0,-100,0,.001))},uRoomMin:{value:new ae(...n)},uRoomMax:{value:new ae(...e)}}}function fr(n,e,{color:t=16777215,rough:i=1,metal:s=1,normal:r=1}={}){const a=Fu()[n],l=new un({map:a.map,normalMap:a.normalMap,roughnessMap:a.orm,metalnessMap:a.orm,color:t,roughness:i,metalness:s,vertexColors:!0});return l.normalScale.set(r,r),l.userData.room=e,l.onBeforeCompile=Hx,l.customProgramCacheKey=()=>"uzor2",l}const Oo={wall:["panel",16777215],wallDark:["panel",6120555],ceil:["panel",4014663],floor:["floor",16777215],steel:["metal",16777215],steelDark:["metal",4869458],bronze:["metal",12092746],copper:["metal",13662538],weld:["metal",15133938],orange:["paint",13132830],yellow:["paint",13214247],teal:["paint",3112838],white:["paint",14276559],paper:["paint",6118229],red:["paint",9316898],rubber:["cloth",1776671],cloth:["cloth",7305827],clothBlue:["cloth",3952491],clothWarm:["cloth",10123861]};function Pi(n,e=1,t=null){const i=new ps({color:new xt(n).multiplyScalar(e),map:t,toneMapped:!1});return i.userData.unlit=!0,i.userData.noShadow=!0,i}function Vx(n){return{panel:fr("panel",n),floor:fr("floor",n,{rough:.85}),metal:fr("metal",n),paint:fr("paint",n),cloth:fr("cloth",n)}}const Xn={max:.45,thin:.012,vol:.035,gap:.014,touch:.006,item:.6},_r=n=>[n.x1-n.x0,n.y1-n.y0,n.z1-n.z0],Wx=n=>{const[e,t,i]=_r(n);return Math.max(e,t,i)<=Xn.max&&t>=Xn.thin&&Math.min(e,i)>=Xn.thin&&e*t*i<=Xn.vol};function Xx(n,{floors:e=[0]}={}){const i=new Map,s=(m,_)=>m+","+_,r=(m,_)=>{if(!(m.x1-m.x0>60||m.z1-m.z0>200))for(let R=Math.floor((m.x0-.01)/.5);R<=Math.floor((m.x1+.01)/.5);R++)for(let S=Math.floor((m.z0-.01)/.5);S<=Math.floor((m.z1+.01)/.5);S++)_(s(R,S))},a=[];n.forEach((m,_)=>{m._n=_,m._small=Wx(m),m.x1-m.x0>60||m.z1-m.z0>200?a.push(m):r(m,R=>(i.get(R)||i.set(R,[]).get(R)).push(m))});const l=m=>{const _=new Set(a);return r(m,R=>{for(const S of i.get(R)||[])_.add(S)}),_.delete(m),_},o=[],c=new Set;for(const m of n){if(!m._small||m.fix||m.loose||m.soft===!1)continue;const _=(m.x0+m.x1)/2,R=(m.y0+m.y1)/2,S=(m.z0+m.z1)/2,C=(m.x1-m.x0)*(m.z1-m.z0);let D=e.some(F=>Math.abs(m.y0-F)<=Xn.gap),b=!1,I=!1;for(const F of l(m)){const N=(F.x1-F.x0)*(F.z1-F.z0),B=_>=F.x0-.005&&_<=F.x1+.005&&S>=F.z0-.005&&S<=F.z1+.005;if(B&&!F._small&&R>F.y0&&R<F.y1-.004){b=!0;break}B&&!D&&Math.abs(m.y0-F.y1)<=Xn.gap&&(!F._small||N>=C*2.5)&&(D=!0),Math.abs(F.y0-m.y1)<=Xn.gap&&N>C*1.5&&F.x0<m.x1&&F.x1>m.x0&&F.z0<m.z1&&F.z1>m.z0&&(I=!0)}b||I||(o.push(m),D&&c.add(m))}const u=new Map(o.map(m=>[m,m])),p=new Map(o.map(m=>[m,{x0:m.x0,x1:m.x1,y0:m.y0,y1:m.y1,z0:m.z0,z1:m.z1}])),d=m=>{for(;u.get(m)!==m;)u.set(m,u.get(u.get(m))),m=u.get(m);return m},h=new Set(o),f=Xn.touch;for(const m of o)for(const _ of l(m)){if(!h.has(_)||_._n<m._n||m.x0>_.x1+f||_.x0>m.x1+f||m.y0>_.y1+f||_.y0>m.y1+f||m.z0>_.z1+f||_.z0>m.z1+f||m.solo&&_.solo&&c.has(m)&&c.has(_))continue;const R=d(m),S=d(_);if(R===S)continue;const C=p.get(R),D=p.get(S),b={x0:Math.min(C.x0,D.x0),x1:Math.max(C.x1,D.x1),y0:Math.min(C.y0,D.y0),y1:Math.max(C.y1,D.y1),z0:Math.min(C.z0,D.z0),z1:Math.max(C.z1,D.z1)};Math.max(..._r(b))>Xn.item||(u.set(S,R),p.set(R,b))}const v=new Map;for(const m of o){const _=d(m);(v.get(_)||v.set(_,[]).get(_)).push(m)}const g=[];for(const m of v.values()){if(!m.some(D=>c.has(D)))continue;const _=p.get(d(m[0])),R=new Set(m);let S=!1;const C=[];for(const D of m)for(const b of l(D))if(!(R.has(b)||h.has(b)||b.fix||b.loose||Math.max(..._r(b))>Xn.max)&&!(D.x0>b.x1+f||b.x0>D.x1+f||D.y0>b.y1+f||b.y0>D.y1+f||D.z0>b.z1+f||b.z0>D.z1+f)){if(b.soft===!1){S=!0;break}b.y0>=_.y0+.008&&!b._small&&Math.max(Math.max(_.x1,b.x1)-Math.min(_.x0,b.x0),Math.max(_.z1,b.z1)-Math.min(_.z0,b.z0))<=Xn.item&&(R.add(b),C.push(b))}if(!S){for(const D of C)_.x0=Math.min(_.x0,D.x0),_.x1=Math.max(_.x1,D.x1),_.y1=Math.max(_.y1,D.y1),_.z0=Math.min(_.z0,D.z0),_.z1=Math.max(_.z1,D.z1);g.push({parts:[...m,...C].map(D=>D._n),box:_})}}for(let m=g.length-1;m>=0;m--){const _=g[m].box;if(Math.max(..._r(_))>.07)continue;const R=(_.x0+_.x1)/2,S=(_.z0+_.z1)/2,C=g.find(D=>D!==g[m]&&Math.max(..._r(D.box))>.07&&R>D.box.x0&&R<D.box.x1&&S>D.box.z0&&S<D.box.z1&&_.y0>=D.box.y0+.015&&_.y0<=D.box.y1+Xn.gap+.01);C&&(C.parts.push(...g[m].parts),C.box.y1=Math.max(C.box.y1,_.y1),g.splice(m,1))}return g.sort((m,_)=>m.parts[0]-_.parts[0]),g}function qx(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},l=n[0].morphTargetsRelative,o=new fn;o.morphTargetsRelative=l;let c=0;for(let u=0;u<n.length;++u){const p=n[u];let d=0,h=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in p.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(p.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(l!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in p.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(p.morphAttributes[f].length!==n[0].morphAttributes[f].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+f+'" morph attribute.'),null;a[f]===void 0&&(a[f]=[]),a[f].push(p.morphAttributes[f]),h++}if(h!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let f;if(t)f=p.index.count;else if(p.attributes.position!==void 0)f=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;o.addGroup(c,f,u),c+=f}}if(t){let u=0;const p=[];for(let d=0;d<n.length;++d){const h=n[d].index;for(let f=0;f<h.count;++f)p.push(h.getX(f)+u);u+=n[d].attributes.position.count}o.setIndex(p)}for(const u in r){const p=rf(r[u]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;o.setAttribute(u,p)}for(const u in a){const p=a[u][0].length;if(p!==0){o.morphAttributes=o.morphAttributes||{},o.morphAttributes[u]=[];for(let d=0;d<p;++d){const h=[];for(let v=0;v<a[u].length;++v)h.push(a[u][v][d]);const f=rf(h);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;o.morphAttributes[u].push(f)}}}return o}function rf(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){const u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const a=new e(r),l=new An(a,t,i);let o=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const p=o/t;for(let d=0,h=u.count;d<h;d++)for(let f=0;f<t;f++){const v=u.getComponent(d,f);l.setComponent(d+p,f,v)}}else a.set(u.array,o);o+=u.count*t}return s!==void 0&&(l.gpuType=s),l}const ur=new ae;function Vn(n,e,t,i,s,r){const a=2*Math.PI*s/4,l=Math.max(r-2*s,0),o=Math.PI/4;ur.copy(e),ur[i]=0,ur.normalize();const c=.5*a/(a+l),u=1-ur.angleTo(n)/o;return Math.sign(ur[t])===1?u*c:l/(a+l)+c+c*(1-u)}class Zl extends Xt{constructor(e=1,t=1,i=1,s=2,r=.1){const a=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},a===1)return;const l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;const o=new ae,c=new ae,u=new ae(e,t,i).divideScalar(2).subScalar(r),p=this.attributes.position.array,d=this.attributes.normal.array,h=this.attributes.uv.array,f=p.length/6,v=new ae,g=.5/a;for(let m=0,_=0;m<p.length;m+=3,_+=2)switch(o.fromArray(p,m),c.copy(o),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),p[m+0]=u.x*Math.sign(o.x)+c.x*r,p[m+1]=u.y*Math.sign(o.y)+c.y*r,p[m+2]=u.z*Math.sign(o.z)+c.z*r,d[m+0]=c.x,d[m+1]=c.y,d[m+2]=c.z,Math.floor(m/f)){case 0:v.set(1,0,0),h[_+0]=Vn(v,c,"z","y",r,i),h[_+1]=1-Vn(v,c,"y","z",r,t);break;case 1:v.set(-1,0,0),h[_+0]=1-Vn(v,c,"z","y",r,i),h[_+1]=1-Vn(v,c,"y","z",r,t);break;case 2:v.set(0,1,0),h[_+0]=1-Vn(v,c,"x","z",r,e),h[_+1]=Vn(v,c,"z","x",r,i);break;case 3:v.set(0,-1,0),h[_+0]=1-Vn(v,c,"x","z",r,e),h[_+1]=1-Vn(v,c,"z","x",r,i);break;case 4:v.set(0,0,1),h[_+0]=1-Vn(v,c,"x","y",r,e),h[_+1]=1-Vn(v,c,"y","x",r,t);break;case 5:v.set(0,0,-1),h[_+0]=Vn(v,c,"x","y",r,e),h[_+1]=1-Vn(v,c,"y","x",r,t);break}}static fromJSON(e){return new Zl(e.width,e.height,e.depth,e.segments,e.radius)}}const Er=42,co=new xt,$x=new ae(1,0,0);function ku(n){const e=n.z/Er,t=Er-n.y;return n.set(n.x,Er-t*Math.cos(e),t*Math.sin(e))}function ds(n,e=new cn){return e.setFromAxisAngle($x,-n/Er)}function Bn(n,e,t,i=new ae){return ku(i.set(n,e,t))}function Yx(n){const e=n.attributes.position,t=n.attributes.normal,i=new Float32Array(e.count*3),s=new Float32Array(e.count*3),r=new ae;for(let a=0;a<e.count;a++){const l=e.getX(a),o=e.getY(a),c=e.getZ(a);i[a*3]=l,i[a*3+1]=o,i[a*3+2]=c;const u=t.getX(a),p=t.getY(a),d=t.getZ(a);s[a*3]=u,s[a*3+1]=p,s[a*3+2]=d,ku(r.set(l,o,c)),e.setXYZ(a,r.x,r.y,r.z);const h=c/Er,f=Math.cos(h),v=Math.sin(h);t.setXYZ(a,u,p*f+d*v,-p*v+d*f)}return n.setAttribute("aFlat",new An(i,3)),n.setAttribute("aFlatN",new An(s,3)),n.computeBoundingSphere(),n.computeBoundingBox(),n}new Gt;const Kx=new Mn,Jx=new ae,Zx=new ae(1,1,1),of=[],jx={floors:[0]};function Qx(n,e){const t=[],i=(u,p,d,h,f,v)=>{p-u>1e-4&&h-d>1e-4&&v-f>1e-4&&t.push({x0:u,x1:p,y0:d,y1:h,z0:f,z1:v})},s=Math.max(n.x0,e.x0),r=Math.min(n.x1,e.x1),a=Math.max(n.y0,e.y0),l=Math.min(n.y1,e.y1),o=Math.max(n.z0,e.z0),c=Math.min(n.z1,e.z1);return s>=r||a>=l||o>=c?[n]:(i(n.x0,s,n.y0,n.y1,n.z0,n.z1),i(r,n.x1,n.y0,n.y1,n.z0,n.z1),i(s,r,n.y0,n.y1,n.z0,o),i(s,r,n.y0,n.y1,c,n.z1),i(s,r,n.y0,a,o,c),i(s,r,l,n.y1,o,c),t)}class ii{constructor({record:e=!1}={}){this.bins=new Map,this.record=e,this.fix="",this.solo=!1,this.parts=[]}fixed(e,t){const i=this.fix;this.fix=e||"закреплено";try{t()}finally{this.fix=i}return this}note(e,t){if(!this.record)return;t.computeBoundingBox();const i=t.boundingBox,s=Oo[e],r={mat:e,fix:this.fix,solo:this.solo,soft:!!s,at:ii.trace?ii.trace():"",x0:i.min.x,x1:i.max.x,y0:i.min.y,y1:i.max.y,z0:i.min.z,z1:i.max.z};this.parts.push({p:r,g:t,bin:s?s[0]:e})}takeLoose(){const e=this.parts,t=Xx(e.map(s=>s.p),{floors:jx.floors}),i=new Set;for(const s of t){const r=s.box,a=(r.x0+r.x1)/2,l=(r.y0+r.y1)/2,o=(r.z0+r.z1)/2,c="lz"+of.length,u=s.parts.map(p=>{const d=e[p];return i.add(d.g),d.p.loose=c,d.g.translate(-a,-l,-o),{mat:d.p.mat,faktura:d.bin,g:d.g}});of.push({id:c,x:a,y:l,z:o,h:[Math.max(.02,(r.x1-r.x0)/2),Math.max(.012,(r.y1-r.y0)/2),Math.max(.02,(r.z1-r.z0)/2)],vol:(r.x1-r.x0)*(r.y1-r.y0)*(r.z1-r.z0),geos:u})}if(i.size)for(const[s,r]of[...this.bins]){const a=r.filter(l=>!i.has(l));a.length?this.bins.set(s,a):this.bins.delete(s)}this.parts=[]}add(e,t,i){let s=t.index?t.toNonIndexed():t.clone();for(const a of Object.keys(s.attributes))["position","normal","uv"].includes(a)||s.deleteAttribute(a);s.attributes.uv||s.setAttribute("uv",new An(new Float32Array(s.attributes.position.count*2),2)),i&&s.applyMatrix4(i),this.note(e,s);const r=Oo[e];if(r){co.set(r[1]);const a=s.attributes.position.count,l=new Float32Array(a*3);for(let o=0;o<a;o++)l[o*3]=co.r,l[o*3+1]=co.g,l[o*3+2]=co.b;s.setAttribute("color",new An(l,3)),e=r[0]}return this.bins.has(e)||this.bins.set(e,[]),this.bins.get(e).push(s),this}addColored(e,t){const i=t.index?t.toNonIndexed():t.clone();for(const s of Object.keys(i.attributes))["position","normal","uv","color"].includes(s)||i.deleteAttribute(s);if(i.attributes.uv||i.setAttribute("uv",new An(new Float32Array(i.attributes.position.count*2),2)),!i.attributes.color){const s=i.attributes.position.count,r=new Float32Array(s*3).fill(1);i.setAttribute("color",new An(r,3))}return this.bins.has(e)||this.bins.set(e,[]),this.bins.get(e).push(i),this}mtx(e,t,i,s=0,r=0,a=0,l=1,o=1,c=1){return new Gt().compose(Jx.set(e,t,i),new cn().setFromEuler(Kx.set(s,r,a,"YXZ")),Zx.set(l,o,c)).clone()}box(e,t,i,s,r,a,l,{rx:o=0,ry:c=0,rz:u=0,tile:p=2,uo:d=0,vo:h=0,bevel:f}={}){const v=o||c||u;if(ii.holes&&ii.holes.length&&!v&&!this.noHoles){const F={x0:t-r/2,x1:t+r/2,y0:i-a/2,y1:i+a/2,z0:s-l/2,z1:s+l/2},N=ii.holes.filter(B=>B.x0<F.x1&&B.x1>F.x0&&B.y0<F.y1&&B.y1>F.y0&&B.z0<F.z1&&B.z1>F.z0);if(N.length){let B=[F];for(const V of N)B=B.flatMap(Q=>Qx(Q,V));this.noHoles=!0;try{for(const V of B)this.box(e,(V.x0+V.x1)/2,(V.y0+V.y1)/2,(V.z0+V.z1)/2,V.x1-V.x0,V.y1-V.y0,V.z1-V.z0,{tile:p,uo:d,vo:h,bevel:0})}finally{this.noHoles=!1}return this}}const g=v?1:Math.max(1,Math.ceil(l/.8)),m=v&&Math.abs(Math.abs(c)-Math.PI/2)<.01?Math.max(1,Math.ceil(r/.8)):1,_=Math.min(r,a,l),R=Math.max(r,a,l);f===void 0&&(f=_>=.1&&R<=2.2&&g<=3?Math.min(.022,_*.14):0);const S=f?new Zl(r,a,l,1,f):new Xt(r,a,l,m,1,g),C=S.index?S.toNonIndexed():S,D=C.attributes.position,b=C.attributes.normal,I=C.attributes.uv;for(let F=0;F<D.count;F++){const N=D.getX(F)+(v?0:t),B=D.getY(F)+(v?0:i),V=D.getZ(F)+(v?0:s),Q=Math.abs(b.getX(F)),$=Math.abs(b.getY(F));Q>.5?I.setXY(F,V/p+d,B/p+h):$>.5?I.setXY(F,N/p+d,V/p+h):I.setXY(F,N/p+d,B/p+h)}return this.add(e,C,this.mtx(t,i,s,o,c,u))}slab(e,t,i,s,r,a,l,o){return this.box(e,(t+r)/2,(i+a)/2,(s+l)/2,Math.abs(r-t),Math.abs(a-i),Math.abs(l-s),o)}pipe(e,t,i,s,{seg:r=12,cap:a=!1}={}){const l=new ae(...t),o=new ae(...i),c=l.distanceTo(o),u=new hi(s,s,c,r,Math.max(1,Math.ceil(c/.8)),!a),p=u.attributes.uv;for(let h=0;h<p.count;h++)p.setXY(h,p.getX(h)*Math.max(1,Math.round(s*12)),p.getY(h)*c/2);const d=new cn().setFromUnitVectors(new ae(0,1,0),o.clone().sub(l).normalize());return this.add(e,u,new Gt().compose(l.clone().add(o).multiplyScalar(.5),d,new ae(1,1,1)))}cable(e,t,i=.025,{seg:s=6,tension:r=.5}={}){const a=new _u(t.map(o=>new ae(...o)),!1,"catmullrom",r),l=Math.max(8,Math.ceil(a.getLength()/.12));return this.add(e,new Yl(a,l,i,s,!1))}wall(e,t,i,s,r,a,l,o,c=[],u){const p=c.slice().sort((v,g)=>v.a0-g.a0),d=(v,g,m,_)=>{g-v<1e-4||_-m<1e-4||(t==="x"?this.slab(e,i-o/2,m,v,i+o/2,_,g,u):this.slab(e,v,m,i-o/2,g,_,i+o/2,u))},h=.003;let f=s;for(const v of p)d(f,v.a0-h,a,l),d(v.a0-h,v.a1+h,a,v.y0-h),d(v.a0-h,v.a1+h,v.y1+h,l),f=v.a1+h;return d(f,r,a,l),this}build(e,{shadows:t=!0}={}){this.record&&this.takeLoose();const i=new Vs;for(const[s,r]of this.bins){const a=e[s];if(!a)throw new Error("нет материала "+s);const l=Yx(qx(r,!1));for(const c of r)c.dispose();const o=new At(l,a);o.name=s,o.castShadow=t&&!a.transparent&&!a.userData.noShadow,o.receiveShadow=!a.userData.unlit,i.add(o)}return this.bins.clear(),i}}class ev{constructor(e,{spots:t=3,points:i=3}={}){this.defs=[],this.spots=[],this.points=[],this.slotDef=[],this.dirty=[],this.rr=0,this.shadowsPerFrame=3,this.forceShadows=!1;for(let s=0;s<t;s++){const r=new Lh(16777215,0,30,.6,.5,1.6);r.castShadow=!0,r.shadow.mapSize.set(1024,1024),r.shadow.bias=-.0015,r.shadow.normalBias=.03,r.shadow.camera.near=.2,r.shadow.autoUpdate=!1,e.add(r,r.target),this.spots.push(r),this.slotDef.push(null),this.dirty.push(!0)}for(let s=0;s<i;s++){const r=new wu(16777215,0,12,1.8);e.add(r),this.points.push(r)}this.nSpots=t,this.nPoints=i}setTier({spots:e,shadowSpots:t,shadowSize:i,points:s,shadowsPerFrame:r}){this.nSpots=Math.min(e,this.spots.length),this.nPoints=Math.min(s,this.points.length),this.shadowsPerFrame=r,this.spots.forEach((a,l)=>{a.visible=l<this.nSpots,a.castShadow=l<t,a.shadow.mapSize.x!==i&&(a.shadow.mapSize.set(i,i),a.shadow.map&&(a.shadow.map.dispose(),a.shadow.map=null)),this.dirty[l]=!0}),this.points.forEach((a,l)=>{a.visible=l<this.nPoints})}add(e){return e.world=Bn(...e.pos),e.to&&(e.worldTo=Bn(...e.to)),e.reach=e.reach||26,e.col=new xt(e.color),this.defs.push(e),e}touch(e,t){this.spots.forEach((i,s)=>{const r=this.slotDef[s];r&&Math.hypot(r.pos[0]-e,r.pos[2]-t)<(r.dist||14)+1&&(this.dirty[s]=!0)})}update(e,t,i,s=0,r=null){const a=(c,u,p)=>{const d=[];for(const h of this.defs){if(h.kind!==c||h.off)continue;const f=Math.hypot(h.pos[0]-e,h.pos[2]-t),v=1-Math.min(1,Math.max(0,(f-(h.reach-5))/5));v>0&&d.push([v*(h.prio||1),v,h])}d.sort((h,f)=>f[0]-h[0]);for(let h=0;h<u.length;h++){const f=u[h],v=h<p?d[h]:null;if(!v){f.intensity=0,c==="spot"&&(this.slotDef[h]=null);continue}const g=v[2],m=g.wakeKeep??.16;f.color.copy(g.col),s>0&&r&&f.color.lerp(r,s*.75),f.intensity=g.power*v[1]*(g.flicker?g.flicker(i):1)*(1-s*(1-m)),f.position.copy(g.world),f.distance=g.dist||14,f.decay=g.decay??(c==="spot"?1.6:1.8),c==="spot"&&(f.target.position.copy(g.worldTo),f.target.updateMatrixWorld(),f.angle=g.angle||.6,f.penumbra=g.penumbra??.6,f.shadow.camera.far=f.distance,f.shadow.camera.near=g.near||.2,this.slotDef[h]!==g&&(this.slotDef[h]=g,this.dirty[h]=!0))}};a("spot",this.spots,this.nSpots),a("point",this.points,this.nPoints);let l=this.forceShadows?99:this.shadowsPerFrame,o=0;for(let c=0;c<this.spots.length&&l>0;c++){const u=(this.rr+c)%this.spots.length,p=this.spots[u];!p.castShadow||!p.visible||(this.forceShadows||this.dirty[u]&&p.intensity>0)&&(p.shadow.needsUpdate=!0,this.dirty[u]=!1,l--,o++,this.rr=u+1)}return o}}let _t=null;function Ou(n){_t=n}function Os(n,e,t,i=1e9){let s=null,r=i,a=0,l=0;for(const c of t){let u=0,p=r,d=-1,h=0,f=!1;for(let v=0;v<3&&!f;v++){const g=v===0?c.x0:v===1?c.y0:c.z0,m=v===0?c.x1:v===1?c.y1:c.z1,_=n[v],R=e[v];if(Math.abs(R)<1e-9){(_<g||_>m)&&(f=!0);continue}let S=(g-_)/R,C=(m-_)/R,D=-1;if(S>C){const b=S;S=C,C=b,D=1}S>u&&(u=S,d=v,h=D),C<p&&(p=C),u>p&&(f=!0)}!f&&d>=0&&u>1e-4&&u<r&&(r=u,s=c,a=d,l=h)}if(!s)return null;const o=[0,0,0];return o[a]=l,{box:s,t:r,n:o}}const tv=(n,e,t)=>n>t.x0&&n<t.x1&&e>t.z0&&e<t.z1;function nv(n,e,t,i,s){let r=0,a=1;const l=t-n,o=i-e;for(const[c,u]of[[-l,n-s.x0],[l,s.x1-n],[-o,e-s.z0],[o,s.z1-e]]){if(Math.abs(c)<1e-12){if(u<0)return!1;continue}const p=u/c;if(c<0){if(p>a)return!1;p>r&&(r=p)}else{if(p<r)return!1;p<a&&(a=p)}}return r<a}function Bo(n,e,t,i,s,r,a,l=_t.PH){if(l.legacyPush){for(const h of i)for(const f of h){if(!a(f))continue;const v=Math.max(f.x0,Math.min(n.x,f.x1)),g=Math.max(f.z0,Math.min(n.z,f.z1)),m=n.x-v,_=n.z-g,R=Math.hypot(m,_);if(R<r&&R>1e-6)n.x=v+m/R*r,n.z=g+_/R*r;else if(R<=1e-6){const S=[[f.x0-r-n.x,0],[f.x1+r-n.x,0],[0,f.z0-r-n.z],[0,f.z1+r-n.z]].sort((C,D)=>Math.abs(C[0]+C[1])-Math.abs(D[0]+D[1]))[0];n.x+=S[0],n.z+=S[1]}}return!1}const o=(h,f)=>{for(const v of i)for(const g of v)if(a(g)&&tv(h,f,g))return g;return null},c=o(e,t);if(!c)for(const h of i)for(const f of h)a(f)&&nv(e,t,n.x,n.z,f)&&(n.x=e,n.z=t);for(let h=0;h<2;h++){for(const f of s){if(!a(f))continue;const v=n.x-f.x,g=n.z-f.z,m=Math.hypot(v,g),_=f.r+r;m<_&&m>1e-6&&(n.x=f.x+v/m*_,n.z=f.z+g/m*_)}for(const f of i)for(const v of f){if(!a(v))continue;const g=Math.max(v.x0,Math.min(n.x,v.x1)),m=Math.max(v.z0,Math.min(n.z,v.z1)),_=n.x-g,R=n.z-m,S=Math.hypot(_,R);S<r&&S>1e-6&&(n.x=g+_/S*r,n.z=m+R/S*r)}}const u=o(n.x,n.z);if(!u)return!1;if(!c)return n.x=e,n.z=t,!0;const p=.01,d=[[u.x0-r-p,n.z],[u.x1+r+p,n.z],[n.x,u.z0-r-p],[n.x,u.z1+r+p]].filter(h=>!o(h[0],h[1])&&(l.exitAnywhere||_t.placeAt(h[0],h[1],.02,n.y||0))).sort((h,f)=>Math.hypot(h[0]-n.x,h[1]-n.z)-Math.hypot(f[0]-n.x,f[1]-n.z));return d.length?(n.x=d[0][0],n.z=d[0][1]):(n.x=e,n.z=t),!0}function af(n,e,t,i=.3,s=.6,r=n.x,a=n.z){return Bo(n,r,a,[e.boxes],e.circles,t,l=>l.y1>i&&l.y0<s)}const lf=n=>({x0:n.x-n.hx,x1:n.x+n.hx,z0:n.z-n.hz,z1:n.z+n.hz,y0:n.y-n.hy,y1:n.y+n.hy,body:n});function Bu(n,e,t,i,s=[],r=_t.playerR*.75){let a=0;const l=o=>{o.y1>a&&o.y1<=t&&n>o.x0-r&&n<o.x1+r&&e>o.z0-r&&e<o.z1+r&&(a=o.y1)};for(const o of i.boxes)o.y1<50&&l(o);for(const o of s)l(o);return a}function fo(n,e,t,i,s=[],r=_t.playerR*.9){let a=99;const l=o=>{o.y0<a&&o.y0>=t&&n>o.x0-r&&n<o.x1+r&&e>o.z0-r&&e<o.z1+r&&(a=o.y0)};for(const o of i.boxes)o.y0>0&&l(o);for(const o of s)l(o);return a}function iv(n=_t.spawn.x,e=_t.spawn.z){return{x:n,z:e,y:0,vy:0,ground:!0,crouch:!1,crawl:!1,h:_t.PH.stand,eye:_t.PH.eye,landed:0,yaw:_t.spawn.yaw,pitch:_t.spawn.pitch,input:{forward:0,strafe:0,jump:!1,crouch:!1},speed:_t.speed}}function sv(n,e,t,i=[],s=[]){const r=Math.max(-1,Math.min(1,n.input.forward)),a=Math.max(-1,Math.min(1,n.input.strafe)),l=Math.sin(n.yaw),o=Math.cos(n.yaw);n.crawl&&!n.input.crawl&&fo(n.x,n.z,n.y+_t.PH.crawl-.05,e,i,_t.playerR+.06)>=n.y+_t.PH.crouch&&(n.crawl=!1),n.input.crawl&&n.ground&&!n.noCrawl&&(n.crawl=!0),n.input.crouch||n.crawl?n.crouch=!0:n.crouch&&fo(n.x,n.z,n.y+_t.PH.crouch-.05,e,i)>=n.y+_t.PH.stand&&(n.crouch=!1),n.h=n.crawl?_t.PH.crawl:n.crouch?_t.PH.crouch:_t.PH.stand,n.eye+=((n.crawl?_t.PH.eyeCrawl:n.crouch?_t.PH.eyeCrouch:_t.PH.eye)-n.eye)*Math.min(1,t*12);const c=n.crawl?Math.min(n.speed,_t.PH.crawlSpeed):n.speed*(n.crouch?_t.PH.crouchSpeed:1),u=n.ground||_t.PH.legacyPush?_t.PH.step:_t.PH.ledge,p=n.y+u;let d=n.y+n.h;const h=C=>C.y1>p&&C.y0<d,f=Math.max(1,Math.ceil(c*t/.15)),v=n.y;for(let C=0;C<f;C++){const D=n.x,b=n.z;if(n.x+=(-l*r+o*a)*c*t/f,n.z+=(-o*r-l*a)*c*t/f,Bo(n,D,b,[e.boxes,i],e.circles,_t.playerR,h),n.crouch&&!n.crawl&&n.ground&&!n.noCrawl&&(r||a)){const I=c*t/f;if(Math.hypot(n.x-D,n.z-b)<I*.6){const N=n.x,B=n.z;d=n.y+_t.PH.crawl,n.x=D+(-l*r+o*a)*I,n.z=b+(-o*r-l*a)*I,Bo(n,D,b,[e.boxes,i],e.circles,_t.playerR,h),Math.hypot(n.x-D,n.z-b)>I*.9?(n.crawl=!0,n.h=_t.PH.crawl):(d=n.y+n.h,n.x=N,n.z=B)}}}{const C=_t.boundsAt(n.x);n.x=Math.max(C.x0+_t.playerR,Math.min(C.x1-_t.playerR,n.x)),n.z=Math.max(C.z0+_t.playerR,Math.min(C.z1-_t.playerR,n.z))}const g=n.g||_t.PH.g,m=n.jumpH||_t.PH.jumpH;n.landed=0,n.input.jump&&n.ground&&fo(n.x,n.z,n.y+n.h-.05,e,i)>n.y+n.h+.15&&(n.vy=Math.sqrt(2*g*m),n.ground=!1,n.jumped=!0),n.input.jump=!1,n.vy-=g*t;let _=n.y+n.vy*t;const R=Bu(n.x,n.z,n.y+(_t.PH.legacyPush&&!n.ground?.02:u),e,i.concat(s));_<=R?(!n.ground&&n.vy<-1.5&&(n.landed=Math.min(1,-n.vy/6)),_=R,n.vy=0,n.ground=!0):_>R+.02&&(n.ground=!1);const S=Math.min(fo(n.x,n.z,n.y+n.h-.05,e,i),_t.roomHeight(n.x,n.z,v));_+n.h>S&&(_=S-n.h,n.vy>0&&(n.vy=0)),n.y=Math.max(0,_)}function rv(n,e,t,i=[]){n.vy-=_t.PH.gBody*t;let s=0;const r=Math.max(n.hx,n.hz),a=n.x,l=n.z;n.x+=n.vx*t,n.z+=n.vz*t;const o={x:n.x,z:n.z,y:n.y};af(o,e,r,n.y-n.hy+.05,n.y+n.hy,a,l);let c=null,u=!1;for(const v of i){if(v.y1<=n.y-n.hy+.05||v.y0>=n.y+n.hy)continue;const g=Math.min(o.x+n.hx-v.x0,v.x1-(o.x-n.hx)),m=Math.min(o.z+n.hz-v.z0,v.z1-(o.z-n.hz));g>0&&m>0&&(c=v,u=g<m,g<m?o.x+=o.x<(v.x0+v.x1)/2?-g:g:o.z+=o.z<(v.z0+v.z1)/2?-m:m)}let p=0;if(c){const v=o.x,g=o.z;af(o,e,r,n.y-n.hy+.05,n.y+n.hy,a,l),Math.hypot(o.x-v,o.z-g)>.01&&(p=u?o.z<(c.z0+c.z1)/2?-1:1:o.x<(c.x0+c.x1)/2?-1:1)}Math.abs(o.x-n.x)>1e-5&&(s=Math.max(s,Math.min(1,Math.abs(n.vx)/8)),n.vx*=-.25),Math.abs(o.z-n.z)>1e-5&&(s=Math.max(s,Math.min(1,Math.abs(n.vz)/8)),n.vz*=-.25),p&&(s=0,u?n.vz=p*_t.PH.squeeze:n.vx=p*_t.PH.squeeze);{const v=_t.boundsAt(o.x);n.x=Math.max(v.x0+r,Math.min(v.x1-r,o.x)),n.z=Math.max(v.z0+r,Math.min(v.z1-r,o.z))}const d=n.y-n.hy,h=n.y+n.vy*t,f=Bu(n.x,n.z,d+.03,e,i,r*.7);if(h-n.hy<=f){n.vy<-1.2&&(s=Math.max(s,Math.min(1,-n.vy/7))),n.y=f+n.hy,n.vy=n.vy<-2.5?-n.vy*.2:0;const v=Math.pow(.004,t);n.vx*=v,n.vz*=v,Math.abs(n.vx)+Math.abs(n.vz)<.05&&n.vy===0&&(n.vx=n.vz=0,n.rest=!0)}else n.y=h;return s}const ov=new Eu(-1,1,1,-1,0,1);class av extends fn{constructor(){super(),this.setAttribute("position",new wt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new wt([0,2,0,0,2,0],2))}}const lv=new av;class cv{constructor(e){this._mesh=new At(lv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ov)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const fv="varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",uv=`
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
  }`,dv=`
  uniform sampler2D tDiffuse; uniform vec2 uTexel; varying vec2 vUv;
  vec3 tap(vec2 o) { return min(max(texture2D(tDiffuse, vUv + o * uTexel).rgb, vec3(0.0)), vec3(48.0)); }
  void main() {
    vec3 c = (tap(vec2(-1.0, -1.0)) + tap(vec2(1.0, -1.0)) + tap(vec2(-1.0, 1.0)) + tap(vec2(1.0, 1.0))) * 0.25;
    float l = max(c.r, max(c.g, c.b));
    gl_FragColor = vec4(c * smoothstep(0.95, 1.7, l), 1.0);
  }`,hv=`
  uniform sampler2D tDiffuse; uniform vec2 uDir; varying vec2 vUv;
  void main() {
    vec3 c = texture2D(tDiffuse, vUv).rgb * 0.2270270;
    c += (texture2D(tDiffuse, vUv + uDir * 1.3846154).rgb + texture2D(tDiffuse, vUv - uDir * 1.3846154).rgb) * 0.3162162;
    c += (texture2D(tDiffuse, vUv + uDir * 3.2307692).rgb + texture2D(tDiffuse, vUv - uDir * 3.2307692).rgb) * 0.0702703;
    gl_FragColor = vec4(c, 1.0);
  }`;function pv(n,e,t,i){const s={tDiffuse:{value:null},tB0:{value:null},tB1:{value:null},tB2:{value:null},uBloom:{value:0},uExposure:{value:1},uTint:{value:new ae(1,1,1)},uTime:{value:0},uGrain:{value:.03},uVig:{value:.42},uWake:{value:0},uHurt:{value:0},uFade:{value:1},uWarp:{value:0}},r=_=>new cv(new ts({..._,vertexShader:fv,depthTest:!1,depthWrite:!1})),a=r({uniforms:s,fragmentShader:uv}),l={tDiffuse:{value:null},uTexel:{value:new ot}},o={tDiffuse:{value:null},uDir:{value:new ot}},c=r({uniforms:l,fragmentShader:dv}),u=r({uniforms:o,fragmentShader:hv}),p=new ot;let d=null,h=null,f=[];const v=new xt(0);function g(){d&&d.dispose();for(const S of f)S.a.dispose(),S.b.dispose();f=[],n.getDrawingBufferSize(p);const _=h.hdr&&!h.ldr?li:Ln;d=new In(p.x,p.y,{type:_,samples:h.msaa});const R=h.bloomFrom||2;if(l.uTexel.value.set(R>1?1/p.x:0,R>1?1/p.y:0),h.bloom)for(let S=0;S<3;S++){const C=Math.max(8,p.x>>S+R),D=Math.max(8,p.y>>S+R),b={type:_,depthBuffer:!1};f.push({a:new In(C,D,b),b:new In(C,D,b),w:C,h:D})}}function m(_,R){o.tDiffuse.value=_.texture,o.uDir.value.set(1/R.w,0),n.setRenderTarget(R.b),u.render(n),o.tDiffuse.value=R.b.texture,o.uDir.value.set(0,1/R.h),n.setRenderTarget(R.a),u.render(n)}return{uniforms:s,configure(_){h={..._},g()},resize(){h&&g()},render(){n.setRenderTarget(d),n.setClearColor(v,1),n.clear(),h.prepass,n.render(e,t),s.tDiffuse.value=d.texture,f.length?(l.tDiffuse.value=d.texture,n.setRenderTarget(f[0].a),c.render(n),m(f[0].a,f[0]),m(f[0].a,f[1]),m(f[1].a,f[2]),s.tB0.value=f[0].a.texture,s.tB1.value=f[1].a.texture,s.tB2.value=f[2].a.texture,s.uBloom.value=.75):(s.tB0.value=s.tB1.value=s.tB2.value=d.texture,s.uBloom.value=0),n.setRenderTarget(null),a.render(n)}}}const mv={high:{msaa:2,bloom:!0,hdr:!0,spots:3,shadowSpots:3,shadowSize:1024,points:3,shadowsPerFrame:3,mirror:1,mirrorWorld:!0,prepass:!0,env:!0,uzor:2,sunSteps:24,particles:1,shafts:!0},medium:{msaa:0,bloom:!0,hdr:!0,spots:3,shadowSpots:2,shadowSize:512,points:3,shadowsPerFrame:1,mirror:.5,mirrorWorld:!0,prepass:!0,env:!0,uzor:1,sunSteps:12,particles:.5,shafts:!0},lite:{msaa:0,bloom:!1,hdr:!0,spots:3,shadowSpots:0,shadowSize:512,points:3,shadowsPerFrame:0,mirror:0,mirrorWorld:!0,prepass:!1,habMirror:.5,env:!0,uzor:0,sunSteps:0,particles:.25,shafts:!0}},gv={KeyE:"e",KeyF:"f",Space:"jump",KeyQ:"throw",KeyV:"kick"};function xv(n){return{fwd:(n("KeyW")||n("ArrowUp")?1:0)-(n("KeyS")||n("ArrowDown")?1:0),strafe:(n("KeyD")?1:0)-(n("KeyA")?1:0),run:n("ShiftLeft")||n("ShiftRight"),wheel:(n("KeyD")?1:0)-(n("KeyA")?1:0),eHeld:n("KeyE"),crouch:n("KeyC")}}const vv={e:"interact",f:"mode",jump:"jump",throw:"throw",kick:"kick"},cf={interact:"e",mode:"f",jump:"jump",throw:"throw",kick:"kick"};function _v({coarse:n=!1,mut:e=[]}={}){const t=new Set,i=new Set(e),s={x:0,y:0,sprint:!1,lookX:0,lookY:0,cutter:!1,crouch:!1,crawl:!1,interactHold:!1,throwHold:!1,tool:""},r=new Set;let a=n?"touch":"kbm";const l=[];return{keys:t,touch:s,get device(){return a},setDevice(c){if(!(c!=="touch"&&c!=="kbm")&&!(i.has("nodevswitch")&&a!==c&&l.length)&&c!==a){a=c;for(const u of l)try{u(c)}catch{}}},onDevice(c){l.push(c)},keyDown(c){t.add(c);const u=gv[c];u&&r.add(vv[u])},keyUp(c){t.delete(c)},press(c){r.add(c)},drop(){r.clear(),s.lookX=s.lookY=0},stick(c,u,p=!1){s.x=c,s.y=u,s.sprint=!!p},look(c,u){s.lookX+=c,s.lookY+=u},hold(c,u){c in s&&c!=="tool"&&(s[c]=!!u)},want(c){(c==="cut"||c==="grip")&&(s.tool=c)},reset(){i.has("noreset")||(t.clear(),r.clear(),s.x=s.y=0,s.sprint=!1,s.lookX=s.lookY=0,s.cutter=!1,s.interactHold=!1,s.throwHold=!1,s.tool="")},frame(c,u){const p=h=>t.has(h),d=xv(p);c.fwd=d.fwd,c.strafe=d.strafe,c.run=d.run,c.wheel=d.wheel,c.eHeld=d.eHeld,c.crouch=d.crouch,c.tool="",c.crawl=!1,c.touch=a==="touch",(s.x||s.y)&&(c.fwd=s.y,c.strafe=s.x,c.run=s.sprint,c.wheel=Math.abs(s.x)>.3?Math.sign(s.x):0),(s.lookX||s.lookY)&&(u(s.lookX,s.lookY),s.lookX=s.lookY=0),s.crouch&&(c.crouch=!0),s.crawl&&(c.crawl=!0,c.crouch=!0),s.interactHold&&(c.eHeld=!0),c.throwHeld=p("KeyQ")||!!c.rmb||s.throwHold,s.tool&&(c.tool=s.tool,s.tool=""),s.cutter?(c.fire=!0,c.tool="cut",c.touchFire=!0):c.touchFire&&(c.fire=!1,c.touchFire=!1);for(const h of r)h==="grab"?(c.tool="grip",c.press.add("fire")):cf[h]&&c.press.add(cf[h]);return r.clear(),c}}}function yv(n,e,t,i){const s=()=>{t.reset()};n.addEventListener("blur",()=>t.reset()),n.addEventListener("pagehide",s),e.addEventListener("visibilitychange",()=>{e.hidden&&s()})}const ff={dist:.9,drop:.26},vi={tap:.15,full:.65,kMax:1.3,v0:11.5,vMass:5,up:1.6};function Mv(n){const e=Math.max(0,Math.min(1,(n-vi.tap)/(vi.full-vi.tap)));return 1+(vi.kMax-1)*e}const bv=(n,e=1)=>(vi.v0-vi.vMass*n)*e;function Sv(n,e,t=1){const i=bv(e,t);return[n[0]*i,n[1]*i+vi.up,n[2]*i]}function wv({mut:n=[]}={}){const e=new Set(n),t={lastFire:!1,gripFire:!1,gripAt:-1,q:-1,charge:0};return{s:t,sense(i){return i.fireNew=i.fire&&!t.lastFire||i.press.has("fire"),t.lastFire=i.fire,i.fireNew},modes(i,s,r=!0){const a=[];let l=s;return i.press.has("f")&&r&&(l=l==="grip"?"cut":"grip",a.push(l)),i.tool&&r&&l!==i.tool&&!e.has("notouchtool")&&(l=i.tool,a.push(l)),a},grip(i,{able:s=!0,holding:r=!1,t:a=0}={}){const l=s&&i.fireNew,o=!i.fire&&t.gripFire;return t.gripFire=i.fire,l?r?(t.gripAt=-1,"drop"):"take":o&&r&&t.gripAt>=0&&(a-t.gripAt>=.3||e.has("holdgrip"))?"drop":""},took(i){t.gripAt=i,t.q=-1,t.charge=0},throw(i,{holding:s=!1,t:r=0}={}){if(!s)return t.q=-1,t.charge=0,0;if(i.press.has("throw")&&t.q<0&&(t.q=r),t.q<0)return t.charge=0,0;if(i.throwHeld&&!e.has("nocharge"))return t.charge=Math.max(0,Math.min(1,(r-t.q-vi.tap)/(vi.full-vi.tap))),0;const a=e.has("nocharge")?1:Mv(r-t.q);return t.q=-1,t.charge=0,a},cutting:(i,s)=>s==="cut"&&!!i.fire,use:i=>!!i.eHeld}}const Ta={body:.42,eye:.3,speed:1.15},Fr={hab_v1:{wallT:.4,floorT:.4,ceilT:.3,niche:{floor:.3,wall:.3,ceil:.22},stub:{depth:1.6,light:10467024},dado:.9,beam:2,mats:{wall:"wall",floor:"floor",ceil:"ceil",trim:"steelDark",dado:"wallDark"},sizes:{x:[3,16],y:[2.5,4],z:[3,16]}},shaft_v1:{wallT:.4,floorT:.4,ceilT:.3,niche:{floor:.3,wall:.3,ceil:.22},stub:{depth:1.6,light:10467024},dado:.9,beam:2,mats:{wall:"wall",floor:"floor",ceil:"ceil",trim:"steelDark",dado:"wallDark"},sizes:{x:[2,4],y:[6,12],z:[2,4]}}},Ev=Object.keys(Fr),Ho=["W","E","S","N"],cs={W:"+x",E:"-x",S:"+z",N:"-z"},Hu=n=>n==="W"||n==="E"?"z":"x",sn=(n,e,t,i,s,r,a,l,o)=>({id:n,kind:e,x0:Math.min(t,i),x1:Math.max(t,i),y0:Math.min(s,r),y1:Math.max(s,r),z0:Math.min(a,l),z1:Math.max(a,l),...o});function Tv(n,e,t=[]){const i=Fr[n],[s,r,a]=e,l=i.wallT,o=[sn("floor","floor",-l,s+l,-i.floorT,0,-l,a+l),sn("ceil","ceil",-l,s+l,r,r+i.ceilT,-l,a+l)];for(const c of Ho){const u=Hu(c),p=u==="z"?a:s,d=t.filter(_=>_.side===c).sort((_,R)=>_.a0-R.a0),h=(_,R,S,C,D)=>{S-R<1e-4||D-C<1e-4||(c==="W"&&o.push(sn(_,"wall",-l,0,C,D,R,S,{side:c})),c==="E"&&o.push(sn(_,"wall",s,s+l,C,D,R,S,{side:c})),c==="S"&&o.push(sn(_,"wall",R,S,C,D,-l,0,{side:c})),c==="N"&&o.push(sn(_,"wall",R,S,C,D,a,a+l,{side:c})))},f=u==="x"?-l:0,v=u==="x"?p+l:p;let g=f,m=0;for(const _ of d)h(`wall${c}${m++}`,g,_.a0,0,r),h(`wall${c}${m++}`,_.a0,_.a1,0,_.y0),h(`wall${c}${m++}`,_.a0,_.a1,_.y1,r),g=_.a1;h(`wall${c}${m++}`,g,v,0,r)}return o}function Av(n,e,t){const i=Fr[n],[s,,r]=e,a=i.wallT,l=i.stub.depth,o=t.y1+.3,c=t.y0||0,u=[],p=v=>`stub_${t.id}_${v}`,d=t.side==="W"||t.side==="S"?-a:t.side==="E"?s+a:r+a,h=t.side==="W"||t.side==="S"?-1:1,f=(v,g,m,_,R,S,C)=>{const[D,b]=[d+h*_,d+h*R];t.side==="W"||t.side==="E"?u.push(sn(p(v),"stub",D,b,S,C,g,m)):u.push(sn(p(v),"stub",g,m,S,C,D,b))};return f("floor",t.a0-.2,t.a1+.2,0,l+.2,c-.2,c),f("ceil",t.a0-.2,t.a1+.2,0,l+.2,o,o+.2),f("l",t.a0-.2,t.a0,0,l,c,o),f("r",t.a1,t.a1+.2,0,l,c,o),f("end",t.a0-.2,t.a1+.2,l,l+.2,c,o),u}const Aa={cutRate:1,blastK:3.2},Wn=(n,e)=>({type:"integer",minimum:n,maximum:e}),as=(n,e)=>({type:"number",minimum:n,maximum:e}),uf={type:"string",pattern:"^[a-z][a-z0-9_.]{0,47}$"},Rv={type:"array",items:{type:"integer",minimum:0,maximum:64},minItems:2,maxItems:2},qi=(n,e)=>e===90||e===270?[n[1],n[0]]:n;function dr(n,e,t,i,s,r,a){const[l,,o]=n.size;return e==="W"?{x0:0,x1:a,z0:t,z1:i,y0:s,y1:r}:e==="E"?{x0:l-a,x1:l,z0:t,z1:i,y0:s,y1:r}:e==="S"?{x0:t,x1:i,z0:0,z1:a,y0:s,y1:r}:{x0:t,x1:i,z0:o-a,z1:o,y0:s,y1:r}}function hr(n,e,t,i){const[s,,r]=n.size;return e==="W"?[i,t]:e==="E"?[s-i,t]:e==="S"?[t,i]:[t,r-i]}const Jt=(n,e)=>(n+e)/2,jl={crate:{mount:"floor",cells:n=>n.size==="large"?[2,2]:[1,1],key:!1,params:{color:{type:"string",enum:["orange","teal","white"]},size:{type:"string",enum:["small","large"]}},compile(n,e){const t=n.size==="large",i=t?2:1,s=(n.at[0]+i/2)*e.G,r=(n.at[1]+i/2)*e.G,a=t?.42:.22;return{parts:[{id:n.id,prefab:n.id,kind:t?"crateL":"crate",shape:"box",h:[a,a,a],p:[s,a,r],yaw:0,mass:t?30:8,free:!0,mat:n.color||"orange"}]}}},shelf:{mount:"floor",cells:n=>qi([n.width||3,1],n.rot||0),key:!1,params:{width:Wn(2,4),levels:Wn(2,4),load:Wn(0,6),color:{type:"string",enum:["steel","steelDark","orange"]}},compile(n,e){const[t,i]=qi([n.width||3,1],n.rot||0),s=e.G,r=n.levels||3,a=.55,l=.12+r*a,o=n.at[0]*s+.03,c=(n.at[0]+t)*s-.03,u=n.at[1]*s+.03,p=(n.at[1]+i)*s-.03,d=.04,h=[],f=[],v=[];for(const[S,C]of[[o,u],[c-d,u],[o,p-d],[c-d,p-d]])h.push(sn(`${n.id}.post${h.length}`,"shelf",S,S+d,0,l,C,C+d,{prefab:n.id,mat:n.color||"steel"}));const g=[];for(let S=0;S<r;S++){const C=.1+S*a,D=`${n.id}.plank${S}`;g.push(C+.03),f.push({id:D,prefab:n.id,kind:"plank",shape:"box",h:[(c-o)/2,.015,(p-u)/2],p:[(o+c)/2,C+.015,(u+p)/2],yaw:0,mass:4*Math.max(t,i)/2,free:!1,mat:"steelDark"}),[[o,u],[c,u],[o,p],[c,p]].forEach(([b,I],F)=>v.push({id:`${D}.w${F}`,prefab:n.id,a:D,b:"world",at:[b,C+.015,I],strength:.8,kind:"weld"}))}const m=t>=i?"x":"z",_=Math.max(t,i),R=.16;for(let S=0;S<Math.min(n.load||0,_*r);S++){const C=Math.floor(S/_),D=S%_,b=(D+.5)*s+(m==="x"?n.at[0]*s:n.at[1]*s),I=m==="x"?(u+p)/2:(o+c)/2;f.push({id:`${n.id}.box${S}`,prefab:n.id,kind:"crate",shape:"box",h:[R,R,R],p:m==="x"?[b,g[C]+R,I]:[I,g[C]+R,b],yaw:0,mass:5,free:!0,mat:["orange","teal","white"][S%3]})}return{statics:h,parts:f,joints:v}}},sheet:{mount:"wall",cells:n=>n.size||[2,2],key:!1,params:{size:{type:"array",prefixItems:[Wn(1,4),Wn(1,3)],minItems:2,maxItems:2},mat:{type:"string",enum:["steel","steelDark","white","teal"]},strength:as(.5,3)},compile(n,e){const[t,i]=n.size||[2,2],s=e.G,r=n.at[0]*s+.02,a=(n.at[0]+t)*s-.02,l=n.at[1]*s+.02,o=(n.at[1]+i)*s-.02,c=.012,u=.02+c,[p,,d]=e.size,h=Jt(r,a),f=Jt(l,o),v=Hu(n.wall),g=n.strength??.8,m={W:[u,h],E:[p-u,h],S:[h,u],N:[h,d-u]}[n.wall],_=(C,D)=>({W:[u,D,C],E:[p-u,D,C],S:[C,D,u],N:[C,D,d-u]})[n.wall],R=[{id:n.id,prefab:n.id,kind:"sheet",shape:"box",h:v==="z"?[c,(o-l)/2,(a-r)/2]:[(a-r)/2,(o-l)/2,c],p:[m[0],f,m[1]],yaw:0,mass:Math.max(2,(a-r)*(o-l)*9),free:!1,mat:n.mat||"steel"}],S=[[r+.05,l+.05],[a-.05,l+.05],[r+.05,o-.05],[a-.05,o-.05]].map(([C,D],b)=>({id:`${n.id}.r${b}`,prefab:n.id,a:n.id,b:"world",at:_(C,D),strength:g,kind:"rivet"}));return{parts:R,joints:S}}},offcuts:{mount:"floor",cells:n=>qi([2,1],n.rot||0),key:!0,params:{rods:Wn(0,12),sheets:Wn(0,4)},compile(n,e){const[t,i]=qi([2,1],n.rot||0),s=e.G,r=t>i,a=(n.at[0]+t/2)*s,l=(n.at[1]+i/2)*s,o=[],c=3;for(let p=0;p<(n.rods??6);p++){const d=Math.floor(p/c),h=(p%c-(c-1)/2)*.12,f=.031+d*.062;o.push({id:`${n.id}.rod${p}`,prefab:n.id,kind:"rod",shape:"box",h:r?[.32,.03,.03]:[.03,.03,.32],p:r?[a,f,l+h]:[a+h,f,l],yaw:0,mass:2,free:!0,mat:"steelDark"})}const u=Math.ceil((n.rods??6)/c)*.062+.002;for(let p=0;p<(n.sheets||0);p++){const h=u+.012+p*.025;o.push({id:`${n.id}.sheet${p}`,prefab:n.id,kind:"sheet",shape:"box",h:r?[.36,.012,.2]:[.2,.012,.36],p:[a,h,l],yaw:0,mass:3,free:!0,mat:p%2?"white":"steel"})}return{parts:o,keys:[{id:n.id,at:[a,.1,l]}]}}},pallet:{mount:"floor",cells:()=>[2,2],key:!1,params:{load:Wn(0,4)},compile(n,e){const t=e.G,i=(n.at[0]+1)*t,s=(n.at[1]+1)*t,r=.07,a=[{id:n.id,prefab:n.id,kind:"pallet",shape:"box",h:[.47,r,.47],p:[i,r,s],yaw:0,mass:18,free:!0,mat:"wood"}];return[[-1,-1],[1,-1],[-1,1],[1,1]].slice(0,n.load||0).forEach(([l,o],c)=>a.push({id:`${n.id}.box${c}`,prefab:n.id,kind:"crate",shape:"box",h:[.2,.2,.2],p:[i+l*.23,2*r+.2,s+o*.23],yaw:0,mass:6,free:!0,mat:["teal","white","orange","teal"][c]})),{parts:a}}},pipe:{mount:"wall",cells:n=>[n.len||4,1],key:!1,params:{len:Wn(2,32),r:{type:"number",enum:[.04,.06,.1]},mat:{type:"string",enum:["steel","copper","steelDark"]}},compile(n,e){const t=e.G,i=n.r||.06,s=n.at[0]*t,r=(n.at[0]+(n.len||4))*t,a=(n.at[1]+.5)*t,l=i+.05,o=dr(e,n.wall,s,r,a-i,a+i,l+i);return{statics:[sn(n.id,"pipe",o.x0,o.x1,o.y0,o.y1,o.z0,o.z1,{prefab:n.id,r:i,off:l,mat:n.mat||"steel",side:n.wall,a0:s,a1:r,y:a})]}}},vent:{mount:"wall",cells:()=>[1,1],key:!0,params:{},compile(n,e){const t=e.G,i=(n.at[0]+.5)*t,s=(n.at[1]+.5)*t,[r,,a]=e.size,l=hr(e,n.wall,i,.8),o={W:[0,s,i],E:[r,s,i],S:[i,s,0],N:[i,s,a]}[n.wall];return{panels:[{id:n.id,room:"",face:cs[n.wall],x:o[0],y:o[1],z:o[2],depth:e.kit.niche.wall,panel:"vent"}],keys:[{id:n.id,at:[l[0],s,l[1]],face:cs[n.wall]}]}}},gas_tank:{mount:"floor",cells:()=>[1,1],key:!0,params:{content:{type:"string",enum:["O2","N2","H2"]},charge:as(.5,2),fuse:as(.5,3)},required:["content"],compile(n,e){const t=(n.at[0]+.5)*e.G,i=(n.at[1]+.5)*e.G;return{parts:[{id:n.id,prefab:n.id,kind:"tank",shape:"cyl",h:[.12,.32,.12],p:[t,.32,i],yaw:0,mass:12,free:!0,mat:n.content,tank:{charge:n.charge??1,fuse:n.fuse??1.2,radius:4.5}}],keys:[{id:n.id,at:[t,.5,i]}]}}},table_cuttable:{mount:"floor",cells:n=>n.size||[3,2],key:!0,params:{size:{type:"array",items:{type:"integer",minimum:2,maximum:4},minItems:2,maxItems:2},strength:as(.5,3),top:{type:"string",enum:["white","steel"]}},compile(n,e){const[t,i]=qi(n.size||[3,2],n.rot||0),s=e.G,r=n.at[0]*s+.05,a=(n.at[0]+t)*s-.05,l=n.at[1]*s+.05,o=(n.at[1]+i)*s-.05,c=.76,u=.05,p=Jt(r,a),d=Jt(l,o),h=c-u,f=n.strength??1.2,v=[{id:n.id+".top",prefab:n.id,kind:"top",shape:"box",h:[(a-r)/2,u/2,(o-l)/2],p:[p,c-u/2,d],yaw:0,mass:14,free:!1,mat:n.top||"white"}],g=[];return[[r+.08,l+.08],[a-.08,l+.08],[r+.08,o-.08],[a-.08,o-.08]].forEach(([m,_],R)=>{const S=`${n.id}.leg${R}`;v.push({id:S,prefab:n.id,kind:"leg",shape:"box",h:[.03,h/2,.03],p:[m,h/2,_],yaw:0,mass:2,free:!1,mat:"steelDark"}),g.push({id:`${n.id}.cut${R}`,prefab:n.id,a:n.id+".top",b:S,at:[m,h,_],strength:f,kind:"weld"})}),{parts:v,joints:g,keys:[{id:n.id,at:[p,c,d]}]}}},cabinet:{mount:"floor",cells:()=>[2,1],key:!0,params:{color:{type:"string",enum:["white","teal","steel"]},strength:as(.5,3)},compile(n,e){const t=n.rot||0,[i,s]=qi([2,1],t),r=e.G,a=1.9,l=n.strength??1.5,o=n.at[0]*r+.02,c=(n.at[0]+i)*r-.02,u=n.at[1]*r+.02,p=(n.at[1]+s)*r-.02,d={0:"+z",90:"+x",180:"-z",270:"-x"}[t],h=d[1]==="z"?"x":"z",f=d[0]==="+"?1:-1,v=.03,g=.003,m=.025,_=.05,R=.03,S=h==="x"?o:u,C=h==="x"?c:p,D=Jt(S,C),b=d==="+z"?p:d==="-z"?u:d==="+x"?c:o,I=d==="+z"?u:d==="-z"?p:d==="+x"?o:c,F=b-f*(v+g),N=[],B=n.color==="teal"?"teal":n.color==="steel"?"steel":"white",V=(ge,Le,qe,_e,ke,Oe,Ge,Be)=>N.push(h==="x"?sn(ge,"cabinet",Le,qe,_e,ke,Oe,Ge,{prefab:n.id,mat:Be}):sn(ge,"cabinet",Oe,Ge,_e,ke,Le,qe,{prefab:n.id,mat:Be})),Q=[],$=[],oe=.002,de=(ge,Le,qe,_e,ke,Oe,Ge,Be,Qe,Mt)=>{const[Xe,tt]=[Math.min(Ge,Be),Math.max(Ge,Be)],ut=(bt,Lt,mt)=>h==="x"?[bt,Lt,mt]:[mt,Lt,bt],et=ut((_e-qe)/2-oe,(Oe-ke)/2-oe,(tt-Xe)/2-oe),Rt=ut(Jt(qe,_e),Jt(ke,Oe),Jt(Xe,tt));Q.push({id:ge,prefab:n.id,kind:Le,shape:"box",h:et,p:Rt,yaw:0,mass:Math.max(1.5,+(8*et[0]*et[1]*et[2]*600).toFixed(1)),free:!1,mat:Qe}),Mt.forEach(([bt,Lt,mt],Ot)=>$.push({id:`${ge}.d${Ot}`,prefab:n.id,a:ge,b:"world",at:ut(bt,Lt,mt),strength:l*.5,kind:"dowel"}))},ce=I+f*m,Ie=(ge,Le)=>ge.flatMap(qe=>Le.map(_e=>[qe,_e])),pe=.05;de(`${n.id}.back`,"side",S,C,0,a,I,ce,"steelDark",Ie([S+pe,C-pe],[pe,a-pe]).map(([ge,Le])=>[ge,Le,ce])),de(`${n.id}.l`,"side",S,S+m,0,a,ce,F,B,Ie([pe,a-pe],[ce+f*pe,F-f*pe]).map(([ge,Le])=>[S,ge,Le])),de(`${n.id}.r`,"side",C-m,C,0,a,ce,F,B,Ie([pe,a-pe],[ce+f*pe,F-f*pe]).map(([ge,Le])=>[C,ge,Le])),de(`${n.id}.bottom`,"side",S+m,C-m,0,.08,ce,F,B,Ie([S+m+pe,C-m-pe],[ce+f*pe,F-f*pe]).map(([ge,Le])=>[ge,.08,Le])),de(`${n.id}.top`,"side",S+m,C-m,a-m,a,ce,F,B,Ie([S+m+pe,C-m-pe],[ce+f*pe,F-f*pe]).map(([ge,Le])=>[ge,a,Le]));for(const[ge,Le]of[.65,1.25].entries())de(`${n.id}.shelf${ge}`,"plank",S+m,C-m,Le,Le+.024,ce+f*R,F-f*R,"wood",Ie([S+m+.04,C-m-.04],[ce+f*(R+.03),F-f*(R+.03)]).map(([qe,_e])=>[qe,Le+.024,_e]));V(`${n.id}.bl`,S+m,S+_,.08,a-m,ce,ce+f*R,"steel"),V(`${n.id}.br`,C-_,C-m,.08,a-m,ce,ce+f*R,"steel"),V(`${n.id}.bt`,S+_,C-_,a-_,a-m,ce,ce+f*R,"steel"),V(`${n.id}.fl`,S+m,S+_,.08,a-m,F-f*R,F,"steel"),V(`${n.id}.fr`,C-_,C-m,.08,a-m,F-f*R,F,"steel"),V(`${n.id}.ft`,S+_,C-_,a-_,a-m,F-f*R,F,"steel"),[[S,D,0],[D,C,1]].forEach(([ge,Le,qe])=>{const _e=(Le-ge)/2-.004,ke=Jt(ge,Le),Oe=qe===0?ge+.004:Le-.004,Ge=a/2-.03,Be=F+f*(g+v/2),Qe=F+f*(g+v),Mt=h==="x"?[ke,a/2,Be]:[Be,a/2,ke],Xe=h==="x"?[Oe,a/2,Qe]:[Qe,a/2,Oe],tt=`${n.id}.leaf${qe}`;Q.push({id:tt,prefab:n.id,kind:"leaf",shape:"box",h:h==="x"?[_e,Ge,v/2]:[v/2,Ge,_e],p:Mt,yaw:0,mass:3,free:!1,mat:n.color||"white",hinge:{at:Xe,side:qe,along:h,sg:f,ys:[-Ge+.22,0,Ge-.22]}});for(const[ut,et]of[-Ge+.22,0,Ge-.22].entries())$.push({id:`${n.id}.hinge${qe}.${ut}`,prefab:n.id,a:tt,b:"world",at:[Xe[0],Xe[1]+et,Xe[2]],strength:l*.5,kind:"hinge"})});const Ae=d[1]==="z"?[Jt(o,c),F+f*.8]:[F+f*.8,Jt(u,p)];return{statics:N,parts:Q,joints:$,keys:[{id:n.id,at:[Ae[0],1,Ae[1]],face:d}],opens:[{id:n.id,leaves:Q.filter(ge=>ge.hinge).map(ge=>ge.id),face:d}]}}},trap_hatch:{mount:"floor",cells:()=>[2,2],key:!0,params:{number:Wn(100,999)},required:["number"],compile(n,e){const t=e.G,i=n.at[0]*t,s=n.at[1]*t,r=i+2*t,a=s+2*t;return{hatches:[{id:n.id,number:n.number,x0:i+.05,x1:r-.05,z0:s+.05,z1:a-.05}],keys:[{id:n.id,at:[Jt(i,r),.05,Jt(s,a)]}]}}},breaker:{mount:"wall",cells:()=>[1,2],key:!0,net:"source",params:{on:{type:"boolean"}},compile(n,e){const t=e.G,i=n.at[0]*t+.05,s=(n.at[0]+1)*t-.05,r=n.at[1]*t,a=r+2*t-.1,l=dr(e,n.wall,i,s,r,a,.14),o=hr(e,n.wall,Jt(i,s),.9);return{statics:[sn(n.id,"breaker",l.x0,l.x1,l.y0,l.y1,l.z0,l.z1,{prefab:n.id})],nodes:{[n.id]:{kind:"breaker",on:n.on!==!1}},keys:[{id:n.id,at:[o[0],Jt(r,a),o[1]],face:cs[n.wall]}]}}},screen:{mount:"wall",cells:n=>n.size||[2,1],key:!0,net:"consumer",text:["text"],params:{size:{type:"array",items:{type:"integer",minimum:1,maximum:4},minItems:2,maxItems:2},text:uf},required:["text"],compile(n,e){const[t,i]=n.size||[2,1],s=e.G,r=n.at[0]*s+.03,a=(n.at[0]+t)*s-.03,l=n.at[1]*s+.03,o=(n.at[1]+i)*s-.03,c=dr(e,n.wall,r,a,l,o,.05),u=hr(e,n.wall,Jt(r,a),1.1);return{statics:[sn(n.id,"screen",c.x0,c.x1,c.y0,c.y1,c.z0,c.z1,{prefab:n.id})],nodes:{[n.id]:{kind:"screen"}},texts:[{id:n.id,key:n.text,kind:"screen",w:a-r,h:o-l}],keys:[{id:n.id,at:[u[0],Jt(l,o),u[1]],face:cs[n.wall]}]}}},note:{mount:"wall",cells:()=>[1,1],key:!0,text:["text"],params:{text:uf},required:["text"],compile(n,e){const t=e.G,i=(n.at[0]+.5)*t,s=(n.at[1]+.5)*t,r=dr(e,n.wall,i-.105,i+.105,s-.15,s+.15,.01),a=hr(e,n.wall,i,.8);return{statics:[sn(n.id,"note",r.x0,r.x1,r.y0,r.y1,r.z0,r.z1,{prefab:n.id,thin:!0})],texts:[{id:n.id,key:n.text,kind:"note"}],keys:[{id:n.id,at:[a[0],s,a[1]],face:cs[n.wall]}]}}},window:{mount:"wall",cells:n=>n.size||[3,2],key:!0,hole:!0,params:{size:{type:"array",prefixItems:[Wn(2,6),Wn(2,4)],minItems:2,maxItems:2},strength:as(.5,4)},compile(n,e){const[t,i]=n.size||[3,2],s=e.G,r=n.at[0]*s,a=(n.at[0]+t)*s,l=n.at[1]*s,o=(n.at[1]+i)*s,c=e.kit.wallT,u=dr(e,n.wall,r,a,l,o,0),p=hr(e,n.wall,Jt(r,a),1),d={W:[-c/2,null],E:[e.size[0]+c/2,null],S:[null,-c/2],N:[null,e.size[2]+c/2]}[n.wall],h=d[0]!==null?sn(n.id,"glass",d[0]-.02,d[0]+.02,l,o,r,a,{prefab:n.id}):sn(n.id,"glass",r,a,l,o,d[1]-.02,d[1]+.02,{prefab:n.id});return{holes:[{side:n.wall,a0:r,a1:a,y0:l,y1:o,id:n.id}],statics:[h],windows:[{id:n.id,side:n.wall,a0:r,a1:a,y0:l,y1:o,strength:n.strength??2,at:[Jt(u.x0,u.x1),Jt(l,o),Jt(u.z0,u.z1)]}],keys:[{id:n.id,at:[p[0],Jt(l,o),p[1]],face:cs[n.wall]}]}}},lamp:{mount:"ceil",cells:n=>qi([1,2],n.rot||0),net:"consumer",params:{color:{type:"string",enum:["cool","warm"]},power:as(.5,3)},compile(n,e){const[t,i]=qi([1,2],n.rot||0),s=e.G,r=(n.at[0]+t/2)*s,a=(n.at[1]+i/2)*s,l=e.size[1];return{nodes:{[n.id]:{kind:"lamp"}},lights:[{id:n.id,kind:"spot",pos:[r,l-.12,a],to:[r,0,a],color:n.color==="warm"?16765600:14083839,power:14*(n.power??1.2)*Math.max(1,(l/3)**1.5),dist:Math.max(9,l+4),angle:l>5?.6:1.05,penumbra:.7}],fixtures:[{id:n.id,x:r,z:a,w:t*s-.16,l:i*s-.16,y:l}]}}},cable:{mount:"path",key:!1,net:"conductor",params:{path:{type:"array",items:Rv,minItems:2,maxItems:32},under:{type:"string",enum:["floor"]}},required:["path"],compile(n,e){const t=e.G,i=n.path.map(([s,r])=>[(s+.5)*t,-.16,(r+.5)*t]);return{nodes:{[n.id]:{kind:"cable"}},cables:[{id:n.id,pts:i}]}}}},Cv=Object.keys(jl),Pv={floor_plate:["+y"],wall_plate:["+x","-x","+z","-z"],ceil_plate:["-y"]},Lv=["slide","none","sealed"],Kt={w:.5,niche:.4,bolt:.035,boltCut:1,weld:2,seat:.25,seatOut:.7},Dv=[{id:"pn_airlock_1",room:"airlock",face:"+y",x:-.05,y:0,z:3.35,depth:.35},{id:"pn_airlock_2",room:"airlock",face:"+y",x:-1.05,y:0,z:1.1,depth:.35},{id:"pn_airlock_3",room:"airlock",face:"+y",x:-1.05,y:0,z:5.6,depth:.35},{id:"pn_airlock_4",room:"airlock",face:"-y",x:.95,y:2.5,z:1.35,depth:.35},{id:"pn_airlock_5",room:"airlock",face:"-y",x:.95,y:2.5,z:5.35,depth:.35},{id:"pn_airlock_6",room:"airlock",face:"-y",x:-1.05,y:2.5,z:2.35,depth:.35},{id:"pn_corridor_1",room:"corridor",face:"+y",x:-.05,y:0,z:-20.05,depth:.35},{id:"pn_corridor_2",room:"corridor",face:"+y",x:-1.55,y:0,z:-.55,depth:.35},{id:"pn_corridor_3",room:"corridor",face:"+y",x:-1.55,y:0,z:-39.55,depth:.35},{id:"pn_corridor_4",room:"corridor",face:"-x",x:2,y:1.55,z:-10.05,depth:.32},{id:"pn_corridor_5",room:"corridor",face:"+x",x:-2,y:1.55,z:-29.8,depth:.32},{id:"pn_corridor_6",room:"corridor",face:"-x",x:2,y:1.55,z:-34.55,depth:.32},{id:"pn_corridor_7",room:"corridor",face:"+x",x:-2,y:1.55,z:-6.05,depth:.32},{id:"pn_corridor_8",room:"corridor",face:"-y",x:-1.55,y:3,z:-14.55,depth:.35},{id:"pn_hab_1",room:"hab",face:"+y",x:6.85,y:0,z:-10.4,depth:.35},{id:"pn_hab_2",room:"hab",face:"+y",x:3.1,y:0,z:-5.15,depth:.35},{id:"pn_hab_3",room:"hab",face:"+y",x:10.85,y:0,z:-5.65,depth:.35},{id:"pn_hab_4",room:"hab",face:"-x",x:11.4,y:1.55,z:-15.15,depth:.32},{id:"pn_hab_5",room:"hab",face:"+z",x:3.1,y:1.55,z:-15.6,depth:.32},{id:"pn_hab_6",room:"hab",face:"-x",x:11.4,y:1.55,z:-10.4,depth:.32},{id:"pn_hab_7",room:"hab",face:"+z",x:7.1,y:1.55,z:-15.6,depth:.32},{id:"pn_hab_8",room:"hab",face:"-y",x:2.85,y:2.8,z:-9.4,depth:.35},{id:"pn_comm_1",room:"comm",face:"+y",x:14,y:0,z:-8.15,depth:.35},{id:"pn_comm_2",room:"comm",face:"+y",x:15.75,y:0,z:-10.15,depth:.35},{id:"pn_comm_3",room:"comm",face:"+y",x:12.75,y:0,z:-6.15,depth:.35},{id:"pn_comm_4",room:"comm",face:"-x",x:16.4,y:1.55,z:-6.15,depth:.32},{id:"pn_comm_5",room:"comm",face:"+x",x:11.8,y:1.55,z:-10.15,depth:.32},{id:"pn_comm_6",room:"comm",face:"+x",x:11.8,y:1.55,z:-6.65,depth:.32},{id:"pn_comm_7",room:"comm",face:"-y",x:14,y:2.8,z:-10.15,depth:.35},{id:"pn_bay_1",room:"bay",face:"+y",x:7.85,y:0,z:-24.3,depth:.35},{id:"pn_bay_2",room:"bay",face:"+y",x:15.85,y:0,z:-17.55,depth:.35},{id:"pn_bay_3",room:"bay",face:"+y",x:15.85,y:0,z:-30.55,depth:.35},{id:"pn_bay_4",room:"bay",face:"-z",x:2.85,y:1.55,z:-17,depth:.32},{id:"pn_bay_5",room:"bay",face:"+z",x:2.85,y:1.55,z:-31,depth:.32},{id:"pn_bay_6",room:"bay",face:"+z",x:9.35,y:1.55,z:-31,depth:.32},{id:"pn_bay_7",room:"bay",face:"-z",x:9.35,y:1.55,z:-17,depth:.32},{id:"pn_store_1",room:"store",face:"+y",x:22.75,y:0,z:-24.05,depth:.35},{id:"pn_store_2",room:"store",face:"+y",x:28.25,y:0,z:-29.55,depth:.35},{id:"pn_store_3",room:"store",face:"+y",x:27.25,y:0,z:-18.55,depth:.35},{id:"pn_store_4",room:"store",face:"-x",x:28.8,y:1.55,z:-21.8,depth:.32},{id:"pn_store_5",room:"store",face:"-x",x:28.8,y:1.55,z:-26.55,depth:.32},{id:"pn_store_6",room:"store",face:"-x",x:28.8,y:1.55,z:-19.55,depth:.32},{id:"pn_store_7",room:"store",face:"-x",x:28.8,y:1.55,z:-17.55,depth:.32},{id:"pn_mind_1",room:"mind",face:"+y",x:23.15,y:0,z:-13.65,depth:.35},{id:"pn_mind_2",room:"mind",face:"+y",x:20.65,y:0,z:-15.65,depth:.35},{id:"pn_mind_3",room:"mind",face:"+y",x:25.15,y:0,z:-11.15,depth:.35},{id:"pn_mind_4",room:"mind",face:"-x",x:26.2,y:1.55,z:-16.15,depth:.32},{id:"pn_mind_5",room:"mind",face:"+x",x:20.2,y:1.55,z:-12.15,depth:.32},{id:"pn_mind_6",room:"mind",face:"-x",x:26.2,y:1.55,z:-12.65,depth:.32},{id:"pn_mind_7",room:"mind",face:"+x",x:20.2,y:1.55,z:-13.9,depth:.32},{id:"pn_mind_8",room:"mind",face:"-y",x:22.9,y:3.2,z:-11.4,depth:.35},{id:"pn_gallery_1",room:"gallery",face:"+y",x:31.9,y:0,z:-23.9,depth:.35},{id:"pn_gallery_2",room:"gallery",face:"+y",x:29.65,y:0,z:-27.15,depth:.35},{id:"pn_gallery_3",room:"gallery",face:"+y",x:34.15,y:0,z:-27.15,depth:.35},{id:"pn_gallery_4",room:"gallery",face:"-z",x:29.65,y:1.55,z:-20.4,depth:.32},{id:"pn_gallery_5",room:"gallery",face:"-z",x:34.15,y:1.55,z:-20.4,depth:.32},{id:"pn_gallery_6",room:"gallery",face:"+z",x:31.9,y:1.55,z:-27.6,depth:.32},{id:"pn_gallery_7",room:"gallery",face:"+x",x:29.2,y:1.55,z:-21.9,depth:.32},{id:"pn_gallery_8",room:"gallery",face:"-y",x:34.15,y:3.4,z:-24.65,depth:.35}],Ql={"+x":[1,0,0],"-x":[-1,0,0],"+z":[0,0,1],"-z":[0,0,-1],"+y":[0,1,0],"-y":[0,-1,0]};function Gu(n,e,t,i){const s=Ql[n.face],r=[n.x,n.y,n.z],a={};return["x","y","z"].forEach((l,o)=>{if(s[o]){const c=r[o]+s[o]*e,u=r[o]+s[o]*t;a[l+"0"]=Math.min(c,u),a[l+"1"]=Math.max(c,u)}else a[l+"0"]=r[o]-i,a[l+"1"]=r[o]+i}),a}const qo=n=>Gu(n,-n.depth,0,Kt.niche/2),df=n=>Gu(n,0,.022,Kt.w/2);function Ml(n,e){const t=Ql[n.face],i=Kt.w/2-.05,s=[[-1,-1],[1,-1],[1,1],[-1,1]][e],r=t[0]?[0,0,1]:t[2]?[1,0,0]:[1,0,0],a=t[1]?[0,0,1]:[0,1,0];return[n.x+r[0]*s[0]*i+a[0]*s[1]*i+t[0]*.02,n.y+r[1]*s[0]*i+a[1]*s[1]*i+t[1]*.02,n.z+r[2]*s[0]*i+a[2]*s[1]*i+t[2]*.02]}const kn={r:.3,stand:1.3,eye:1.2,step:.28};function Iv(n,e){const t=n.grid,[i,s,r]=n.shell.size,[a,l,o]=e.cell,c=u=>(u+.5)*t;switch(e.face){case"+y":return[c(a),0,c(o)];case"-y":return[c(a),s,c(o)];case"+x":return[0,c(l),c(o)];case"-x":return[i,c(l),c(o)];case"+z":return[c(a),c(l),0];default:return[c(a),c(l),r]}}function Nv(n){const e=n.grid,t=n.shell.size,i=n.shell.kit,s=Fr[i],[r,a,l]=t,o={G:e,size:t,kit:s},c={id:n.id,G:e,size:t,kit:i,statics:[],parts:[],joints:[],panels:[],portals:[],nodes:{},edges:[],lights:[],fixtures:[],windows:[],hatches:[],cables:[],texts:[],keys:[],opens:[],views:[],holes:[],doors:[],prefabOf:{}};for(const f of n.portals||[]){const v=f.at*e,g=(f.at+f.w)*e,m=(f.y||0)*e,_=m+f.h*e,R=f.wall==="W"||f.wall==="E"?"z":"x",S=(v+g)/2,C={W:[.7,S],E:[r-.7,S],S:[S,.7],N:[S,l-.7]}[f.wall],D={W:-Math.PI/2,E:Math.PI/2,S:Math.PI,N:0}[f.wall],b={id:f.id,side:f.wall,a0:v,a1:g,y0:m,y1:_,to:f.to,door:f.door,inside:C,yaw:D,along:R};if(c.portals.push(b),c.holes.push({side:f.wall,a0:v,a1:g,y0:m,y1:_,id:f.id}),c.statics.push(...Av(i,t,b)),f.door!=="none"){const I=s.wallT,F={W:-I/2,E:r+I/2,S:-I/2,N:l+I/2}[f.wall],N=R==="z"?sn(f.id+".door","door",F-.04,F+.04,m,_,v,g,{prefab:f.id,door:f.id}):sn(f.id+".door","door",v,g,m,_,F-.04,F+.04,{prefab:f.id,door:f.id});c.statics.push(N),c.doors.push({id:f.id,kind:f.door,box:N,along:R}),c.nodes[f.id]={kind:"door"}}c.keys.push({id:f.id,at:[C[0],m+1,C[1]],portal:!0,...m?{high:m}:{}}),c.prefabOf[f.id]={id:f.id,type:"portal"}}for(const f of n.prefabs||[]){const v=jl[f.type];if(!v)continue;c.prefabOf[f.id]=f;const g=v.compile(f,o)||{};for(const m of["statics","parts","joints","lights","fixtures","windows","hatches","cables","texts","keys","opens","holes"])g[m]&&c[m].push(...g[m]);if(g.panels)for(const m of g.panels)c.panels.push({...m,room:n.id});g.nodes&&Object.assign(c.nodes,g.nodes)}c.statics.unshift(...Tv(i,t,c.holes));for(const f of n.slots||[]){const[v,g,m]=Iv(n,f),_=f.face==="+y"?s.niche.floor:f.face==="-y"?s.niche.ceil:s.niche.wall;c.panels.push({id:f.id,room:n.id,face:f.face,x:v,y:g,z:m,depth:_,panel:f.panel})}for(const[f,v]of n.net&&n.net.power||[])c.edges.push([f,v]);const u=r/2,p=l/2;for(const f of c.portals)c.views.push(f.y0?{id:"portal_"+f.id,eye:[u+(f.side==="W"?.6:f.side==="E"?-.6:0),kn.eye,p+(f.side==="S"?.6:f.side==="N"?-.6:0)],look:[f.side==="W"?0:f.side==="E"?r:(f.a0+f.a1)/2,f.y0+.2,f.side==="S"?0:f.side==="N"?l:(f.a0+f.a1)/2]}:{id:"portal_"+f.id,eye:[f.inside[0],kn.eye,f.inside[1]],look:[u,.9,p]});c.views.push({id:"corner_sw",eye:[.6,1.6,.6],look:[r-.6,.6,l-.6]}),c.views.push({id:"corner_ne",eye:[r-.6,1.6,l-.6],look:[.6,.6,.6]}),c.views.push({id:"corner_nw",eye:[.6,1.6,l-.6],look:[r-.6,.6,.6]}),c.views.push({id:"corner_se",eye:[r-.6,1.6,.6],look:[.6,.6,l-.6]}),c.views=c.views.slice(0,6);const d=c.portals[0],h=n.spawn;return c.climb=n.climb||null,c.outer=n.shell.outer||[],c.fall=n.fall||null,c.spawn=h?{x:(h.at[0]+.5)*e,z:(h.at[1]+.5)*e,yaw:(h.yaw||0)*Math.PI/180}:d?{x:d.inside[0],z:d.inside[1],yaw:d.yaw}:{x:u,z:p,yaw:0},c.niches=c.panels.map(f=>({...qo(f),id:f.id})),c}const Uv=n=>{if(n<2)return!1;for(let e=2;e*e<=n;e++)if(n%e===0)return!1;return!0};function uo(n){for(let e=2;e<=n;e++){if(!Uv(e)||n%e)continue;let t=n,i=0;for(;t%e===0;)t/=e,i++;return t===1?{p:e,k:i}:null}return null}const hf=n=>String(n).split("").reduce((e,t)=>e+ +t,0),Go={prime_power:{params:{minExp:{type:"integer",minimum:1,maximum:5}},test:(n,e={})=>{const t=uo(n);return!!t&&t.k>=(e.minExp??2)},why:(n,e={})=>{const t=uo(n);return t&&t.k>=(e.minExp??2)?`${n} = ${t.p}^${t.k}`:`${n}: не степень простого`},hint:{ru:[["степен"],["прост"]],en:[["power"],["prime"]]}},prime_or_power:{off:!0,params:{},test:n=>!!uo(n),why:n=>{const e=uo(n);return e?e.k===1?`${n}: простое`:`${n} = ${e.p}^${e.k}`:`${n}: не простое и не степень простого`},hint:{ru:[["прост"]],en:[["prime"]]}},digit_sum:{params:{sum:{type:"integer",minimum:1,maximum:27}},test:(n,e={})=>hf(n)===(e.sum??10),why:(n,e={})=>`${n}: сумма цифр ${hf(n)}, нужна ${e.sum??10}`,hint:{ru:[["сумм"],["цифр"]],en:[["sum"],["digit"]]}}},pf=Object.keys(Go).filter(n=>!Go[n].off);function zv(n,e){const t=Go[n.rule];if(!t)return null;const i=[],s={};for(const r of e)s[r.id]=t.why(r.number,n.param||{}),t.test(r.number,n.param||{})&&i.push(r.id);return{danger:i,why:s}}const mf="drift.room/0",Gs={type:"string",pattern:"^[a-z][a-z0-9_]{0,31}$"},gf={type:"string",pattern:"^[a-z][a-z0-9_]*(\\.[a-z][a-z0-9_]*){0,3}$",maxLength:64},Ra={type:"string",pattern:"^[a-z][a-z0-9_.]{0,47}$"},Tr=n=>({type:"array",items:{type:"integer",minimum:0,maximum:64},minItems:n,maxItems:n}),Fv={floor:{at:Tr(2),rot:{type:"integer",enum:[0,90,180,270]}},wall:{wall:{type:"string",enum:Ho},at:Tr(2)},ceil:{at:Tr(2),rot:{type:"integer",enum:[0,90,180,270]}},path:{}},kv={floor:["at"],wall:["wall","at"],ceil:["at"],path:[]};function Ov(n){const e=jl[n];return{type:"object",additionalProperties:!1,properties:{type:{const:n},id:Gs,...Fv[e.mount],...e.params,note:{type:"string",maxLength:200}},required:["type","id",...kv[e.mount],...e.required||[]]}}const xf={oneOf:[{type:"string",minLength:1,maxLength:600},{type:"object",additionalProperties:!1,properties:{title:{type:"string",minLength:1,maxLength:40},rows:{type:"array",items:{type:"string",maxLength:48},maxItems:8}},required:["title","rows"]}]};function Bv(){return{$schema:"https://json-schema.org/draft/2020-12/schema",$id:mf,title:"ДРЕЙФ: файл комнаты",type:"object",additionalProperties:!1,required:["schema","id","grid","shell","portals","prefabs","texts","budget"],properties:{schema:{const:mf},id:gf,grid:{type:"number",enum:[.5]},shell:{type:"object",additionalProperties:!1,required:["size","kit"],properties:{size:{type:"array",prefixItems:[{type:"number",minimum:2,maximum:16},{type:"number",minimum:2.5,maximum:12},{type:"number",minimum:2,maximum:16}],minItems:3,maxItems:3},kit:{type:"string",enum:Ev},outer:{type:"array",items:{type:"string",enum:Ho},maxItems:4}}},portals:{type:"array",minItems:1,maxItems:4,items:{type:"object",additionalProperties:!1,required:["id","wall","at","w","h","to","door"],properties:{id:Gs,wall:{type:"string",enum:Ho},at:{type:"integer",minimum:0,maximum:64},w:{type:"integer",minimum:2,maximum:4},h:{type:"integer",minimum:4,maximum:5},y:{type:"integer",minimum:0,maximum:18},to:gf,door:{type:"string",enum:Lv}}}},slots:{type:"array",maxItems:16,items:{type:"object",additionalProperties:!1,required:["id","cell","face","panel","screws"],properties:{id:Gs,cell:Tr(3),face:{type:"string",enum:["+y","-y","+x","-x","+z","-z"]},panel:{type:"string",enum:Object.keys(Pv)},screws:{type:"integer",enum:[4]}}}},prefabs:{type:"array",maxItems:48,items:{oneOf:Cv.map(Ov)}},spawn:{type:"object",additionalProperties:!1,required:["at"],properties:{at:Tr(2),yaw:{type:"integer",enum:[0,90,180,270]}}},climb:{type:"object",additionalProperties:!1,required:["exit"],properties:{exit:Gs}},fall:{type:"object",additionalProperties:!1,properties:{safe:{type:"number",minimum:1,maximum:6},perM:{type:"number",minimum:0,maximum:100}}},net:{type:"object",additionalProperties:!1,properties:{power:{type:"array",maxItems:32,items:{type:"array",items:Gs,minItems:2,maxItems:2}}}},trap:{type:"object",additionalProperties:!1,required:["rule","hatches","hints"],properties:{rule:{type:"string",enum:pf},param:{type:"object",additionalProperties:!1,properties:Object.assign({},...pf.map(n=>Go[n].params))},hatches:{type:"array",items:Gs,minItems:2,maxItems:4},hints:{type:"array",items:Ra,minItems:1,maxItems:4}}},texts:{type:"object",additionalProperties:!1,required:["ru","en"],properties:{ru:{type:"object",propertyNames:Ra,additionalProperties:xf},en:{type:"object",propertyNames:Ra,additionalProperties:xf}}},budget:{type:"object",additionalProperties:!1,required:["drawCalls","dynamicBodies","tris"],properties:{drawCalls:{type:"integer",minimum:10,maximum:200},dynamicBodies:{type:"integer",minimum:1,maximum:200},tris:{type:"integer",minimum:1e3,maximum:3e5},pieces:{type:"integer",minimum:4,maximum:80},seam:{type:"integer",minimum:80,maximum:2e3}}},note:{type:"string",maxLength:400}}}}const Hv=n=>n===null?"null":Array.isArray(n)?"array":Number.isInteger(n)?"integer":typeof n;function vf(n,e){return n==="integer"?Number.isInteger(e):n==="number"?typeof e=="number"&&Number.isFinite(e):n==="array"?Array.isArray(e):n==="object"?e!==null&&typeof e=="object"&&!Array.isArray(e):typeof e===n}function fs(n,e,t="$",i=[]){if(n===!0||n===void 0)return i;if(n===!1)return i.push({path:t,msg:"лишний элемент"}),i;if(n.oneOf){if(n.oneOf.every(a=>a.properties&&a.properties.type&&"const"in a.properties.type)&&e&&typeof e=="object"){const a=n.oneOf.find(l=>l.properties.type.const===e.type);return a?fs(a,e,t,i):(i.push({path:t+".type",msg:`неизвестный тип ${JSON.stringify(e.type)}; есть: ${n.oneOf.map(l=>l.properties.type.const).join(", ")}`}),i)}const r=n.oneOf.map(a=>fs(a,e,t,[]));return r.some(a=>!a.length)||i.push(...r.reduce((a,l)=>l.length<a.length?l:a)),i}if("const"in n&&e!==n.const)return i.push({path:t,msg:`нужно ${JSON.stringify(n.const)}, стоит ${JSON.stringify(e)}`}),i;if(n.type&&!vf(n.type,e))return i.push({path:t,msg:`тип ${Hv(e)}, нужен ${n.type}`}),i;if(n.enum&&!n.enum.includes(e)&&i.push({path:t,msg:`${JSON.stringify(e)} не из списка ${JSON.stringify(n.enum)}`}),typeof e=="number"&&(n.minimum!==void 0&&e<n.minimum&&i.push({path:t,msg:`${e} меньше ${n.minimum}`}),n.maximum!==void 0&&e>n.maximum&&i.push({path:t,msg:`${e} больше ${n.maximum}`})),typeof e=="string"&&(n.minLength!==void 0&&e.length<n.minLength&&i.push({path:t,msg:`строка короче ${n.minLength}`}),n.maxLength!==void 0&&e.length>n.maxLength&&i.push({path:t,msg:`строка длиннее ${n.maxLength} (${e.length})`}),n.pattern&&!new RegExp(n.pattern).test(e)&&i.push({path:t,msg:`${JSON.stringify(e)} не по образцу ${n.pattern}`})),Array.isArray(e)&&(n.minItems!==void 0&&e.length<n.minItems&&i.push({path:t,msg:`элементов ${e.length}, нужно не меньше ${n.minItems}`}),n.maxItems!==void 0&&e.length>n.maxItems&&i.push({path:t,msg:`элементов ${e.length}, можно не больше ${n.maxItems}`}),e.forEach((s,r)=>fs(n.prefixItems&&r<n.prefixItems.length?n.prefixItems[r]:n.items,s,`${t}[${r}]`,i))),vf("object",e)&&(n.properties||n.required||n.additionalProperties!==void 0||n.propertyNames)){for(const s of n.required||[])s in e||i.push({path:t,msg:`нет поля ${s}`});for(const[s,r]of Object.entries(e))n.propertyNames&&fs(n.propertyNames,s,`${t}{${s}}`,i),n.properties&&s in n.properties?fs(n.properties[s],r,`${t}.${s}`,i):n.additionalProperties===!1?i.push({path:`${t}.${s}`,msg:"поля нет в схеме"}):n.additionalProperties&&typeof n.additionalProperties=="object"&&fs(n.additionalProperties,r,`${t}.${s}`,i)}return i}const Gv=n=>fs(Bv(),n),dt=(n,e)=>n[0]*e[0]+n[1]*e[1]+n[2]*e[2],kt=(n,e)=>[n[0]-e[0],n[1]-e[1],n[2]-e[2]],pn=(n,e)=>[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]],jt=n=>Math.hypot(n[0],n[1],n[2]),En=n=>{const e=jt(n)||1;return[n[0]/e,n[1]/e,n[2]/e]},bl=1e-6,Tn={n:0,max:1/0,until:1/0,peak:0};class Vv extends Error{constructor(e){super("рез сложнее потолка: "+e+" шагов"),this.heavy=!0}}const Wv=typeof performance<"u"?()=>performance.now():()=>Date.now();function kr(n=1){if(Tn.n+=n,Tn.n>Tn.max||(Tn.n&127)<n&&Wv()>Tn.until)throw new Vv(Tn.n)}function _f(n){const e=[];for(const[t,i,s,r,a,l]of[[0,1,2,-1,1,1],[0,-1,2,1,1,1],[1,1,0,1,2,-1],[1,-1,0,1,2,1],[2,1,0,1,1,1],[2,-1,0,-1,1,1]]){const o=[0,0,0];o[t]=i;const c=[[0,0],[1,0],[1,1],[0,1]].map(([u,p])=>{const d=[0,0,0];return d[t]=i*n[t],d[s]=r*(u*2-1)*n[s],d[a]=l*(p*2-1)*n[a],[...d,u,p]});dt(pn(kt(c[1],c[0]),kt(c[2],c[0])),o)<0&&c.reverse(),e.push({n:o,w:n[t],cut:!1,v:c})}return{faces:e}}function Xv(n,e,t,i){const s=[],r=n.v.map(a=>{const l=(dt(e,a)-t)*i;return Math.abs(l)<bl?0:l});for(let a=0;a<n.v.length;a++){const l=(a+1)%n.v.length,o=n.v[a],c=n.v[l];if(r[a]<=0&&s.push(o),r[a]<0&&r[l]>0||r[a]>0&&r[l]<0){const u=r[a]/(r[a]-r[l]);s.push(o.map((p,d)=>p+(c[d]-p)*u))}}return s.length>=3?{...n,v:s}:null}const Fn=n=>n.cells||[n],Ni=n=>n.length===1?n[0]:{faces:n.flatMap(e=>e.faces),cells:n};function qv(n,e,t,i,s=!0){const r=[];for(const d of n)for(const h of d.v)Math.abs(dt(e,h)-t)<5e-6&&!r.some(f=>Math.hypot(f[0]-h[0],f[1]-h[1],f[2]-h[2])<1e-5)&&r.push([h[0],h[1],h[2]]);if(r.length<3)return null;const a=r.reduce((d,h)=>[d[0]+h[0]/r.length,d[1]+h[1]/r.length,d[2]+h[2]/r.length],[0,0,0]),l=En(Math.abs(e[1])<.9?pn(e,[0,1,0]):pn(e,[1,0,0])),o=pn(e,l),u=r.map(d=>{const h=kt(d,a);return{p:d,a:Math.atan2(dt(h,o),dt(h,l)),u:dt(h,l),v:dt(h,o)}}).sort((d,h)=>d.a-h.a).map(d=>[...d.p,d.u*2,d.v*2]),p=e.map(d=>d*i);return dt(pn(kt(u[1],u[0]),kt(u[2],u[0])),p)<0&&u.reverse(),{n:p,w:t*i,cut:s,v:u}}function ms(n,e,t,i,s=!0){kr(n.faces.length);let r=1e9,a=-1e9;for(const l of n.faces)for(const o of l.v){const c=(dt(e,o)-t)*i;r=Math.min(r,c),a=Math.max(a,c)}return a<=bl*10?n:r>=-bl*10?null:Sl(n,e,t,i,s)}function Sl(n,e,t,i,s=!0){kr(n.faces.length);const r=n.faces.map(l=>Xv(l,e,t,i)).filter(Boolean),a=qv(r,e,t,i,s);return!a||r.length<3?null:{faces:[...r.filter(l=>$v(l)>1e-9),a]}}const $v=n=>{let e=[0,0,0];for(let t=1;t+1<n.v.length;t++){const i=pn(kt(n.v[t],n.v[0]),kt(n.v[t+1],n.v[0]));e=[e[0]+i[0],e[1]+i[1],e[2]+i[2]]}return jt(e)/2};function Yv(n,e,t,i=0){const s=En(e);if(n.cells){const l=[],o=[];for(const c of n.cells){const u=ms(c,s,t-i/2,1),p=ms(c,s,t+i/2,-1);u&&l.push(u),p&&o.push(p)}return l.length&&o.length?[Ni(l),Ni(o)]:null}const r=Sl(n,s,t-i/2,1),a=Sl(n,s,t+i/2,-1);return r&&a?[r,a]:null}function pi(n){let e=0;const t=[0,0,0];for(const i of n.faces)for(let s=1;s+1<i.v.length;s++){const r=i.v[0],a=i.v[s],l=i.v[s+1],o=dt(r,pn(a,l))/6;e+=o;for(let c=0;c<3;c++)t[c]+=o*(r[c]+a[c]+l[c])/4}return{volume:e,center:e>1e-12?t.map(i=>i/e):[0,0,0]}}const wl=(n,e)=>n.cells?Ni(n.cells.map(t=>wl(t,e))):{faces:n.faces.map(t=>({...t,w:t.w-dt(t.n,e),v:t.v.map(i=>[i[0]-e[0],i[1]-e[1],i[2]-e[2],i[3],i[4]])}))};function Ro(n){const e=[];for(const t of n.faces)for(const i of t.v)e.some(s=>Math.abs(s[0]-i[0])+Math.abs(s[1]-i[1])+Math.abs(s[2]-i[2])<1e-5)||e.push([i[0],i[1],i[2]]);return e}const Kv=n=>Ro(n).reduce((e,t)=>[Math.max(e[0],Math.abs(t[0])),Math.max(e[1],Math.abs(t[1])),Math.max(e[2],Math.abs(t[2]))],[0,0,0]);function yf(n,e){let t=1e9,i=-1e9;for(const s of n.faces)for(const r of s.v){const a=dt(e,r);t=Math.min(t,a),i=Math.max(i,a)}return[t,i]}function yr(n,e,t,i=1e9){if(t.cells){let l=null;for(const o of t.cells){const c=yr(n,e,o,l?l.t:i);c&&(l=c)}return l}let s=1e-4,r=i,a=null;for(const l of t.faces){const o=dt(l.n,e),c=l.w-dt(l.n,n);if(Math.abs(o)<1e-9){if(c<0)return null;continue}const u=c/o;if(o<0?u>s&&(s=u,a=l):r=Math.min(r,u),s>r)return null}return a?{t:s,n:a.n,cut:a.cut}:null}const Vu=(n,e)=>e.cells?Math.min(...e.cells.map(t=>Vu(n,t))):Math.max(0,e.faces.reduce((t,i)=>Math.max(t,dt(i.n,n)-i.w),-1e9));function El(n,e){if(n.cells){let r=null,a=1e18;for(const l of n.cells){const o=El(l,e),c=(o[0]-e[0])**2+(o[1]-e[1])**2+(o[2]-e[2])**2;c<a&&(a=c,r=o)}return r}if(kr(n.faces.length),n.faces.every(r=>dt(r.n,e)-r.w<=0))return e;let t=null,i=1e18;const s=r=>{const a=(r[0]-e[0])**2+(r[1]-e[1])**2+(r[2]-e[2])**2;a<i&&(i=a,t=r)};for(const r of n.faces){const a=dt(r.n,e)-r.w;if(a<=0)continue;const l=[e[0]-r.n[0]*a,e[1]-r.n[1]*a,e[2]-r.n[2]*a];let o=!0;for(let c=0;c<r.v.length;c++){const u=r.v[c],p=r.v[(c+1)%r.v.length],d=[p[0]-u[0],p[1]-u[1],p[2]-u[2]],h=[l[0]-u[0],l[1]-u[1],l[2]-u[2]];if(dt(pn(d,h),r.n)>=0)continue;o=!1;const f=Math.max(0,Math.min(1,dt(d,h)/(dt(d,d)||1)));s([u[0]+d[0]*f,u[1]+d[1]*f,u[2]+d[2]*f])}o&&s(l)}return t||e}function Wu(n,e,t=16){const i=a=>[n*Math.cos(a/t*Math.PI*2),n*Math.sin(a/t*Math.PI*2)],s=[...Array(t).keys()].map(i),r=[];for(let a=0;a<t;a++){const[l,o]=[s[a],s[(a+1)%t]],c=En([l[0]+o[0],0,l[1]+o[1]]),u=[[l[0],-e,l[1],0,0],[l[0],e,l[1],0,1],[o[0],e,o[1],1,1],[o[0],-e,o[1],1,0]];r.push({n:c,w:c[0]*l[0]+c[2]*l[1],cut:!1,v:u})}for(const a of[1,-1]){const l=s.map(([o,c])=>[o,a*e,c,0,0]);a>0&&l.reverse(),r.push({n:[0,a,0],w:e,cut:!1,v:l})}return{faces:r}}function ho(n,e,t,i,s=null){const r=[];for(const o of n.faces)if(!s||s(o))for(let c=0;c<o.v.length;c++){const u=o.v[c],p=o.v[(c+1)%o.v.length],d=dt(e,u)-t,h=dt(e,p)-t;if(d<=0&&h>=0||d>=0&&h<=0){const f=Math.abs(d-h)<1e-9?0:d/(d-h);r.push([0,1,2].map(v=>u[v]+(p[v]-u[v])*f))}}if(!r.length)return null;let a=1e9,l=-1e9;for(const o of r){const c=dt(i,o);a=Math.min(a,c),l=Math.max(l,c)}return[a,l]}const Jv=(n,e,t)=>Fn(n).map(i=>Zv(i,e,t)).filter(i=>i.length);function Zv(n,e,t){kr(n.faces.length);const i=[];for(const l of n.faces)for(let o=0;o<l.v.length;o++){const c=l.v[o],u=l.v[(o+1)%l.v.length],p=dt(e,c)-t,d=dt(e,u)-t;if(p<=0==d<=0)continue;const h=p/(p-d),f=[0,1,2].map(v=>c[v]+(u[v]-c[v])*h);i.some(v=>jt(kt(v,f))<1e-4)||i.push(f)}if(i.length<3)return[];const s=[0,1,2].map(l=>i.reduce((o,c)=>o+c[l],0)/i.length),r=En(Math.abs(e[1])<.9?pn(e,[0,1,0]):pn(e,[1,0,0])),a=pn(e,r);return i.map(l=>{const o=kt(l,s);return[Math.atan2(dt(o,a),dt(o,r)),l]}).sort((l,o)=>l[0]-o[0]).map(l=>l[1])}const si=(n,e)=>[n[3]*e[0]+n[0]*e[3]+n[1]*e[2]-n[2]*e[1],n[3]*e[1]-n[0]*e[2]+n[1]*e[3]+n[2]*e[0],n[3]*e[2]+n[0]*e[1]-n[1]*e[0]+n[2]*e[3],n[3]*e[3]-n[0]*e[0]-n[1]*e[1]-n[2]*e[2]];function Wt(n,e){const[t,i,s,r]=n,a=2*(i*e[2]-s*e[1]),l=2*(s*e[0]-t*e[2]),o=2*(t*e[1]-i*e[0]);return[e[0]+r*a+(i*o-s*l),e[1]+r*l+(s*a-t*o),e[2]+r*o+(t*l-i*a)]}function jv(n,e,t){const i=Wt(e,[1,0,0]),s=Wt(e,[0,1,0]),r=Wt(e,[0,0,1]),a=l=>Math.abs(i[l])*t[0]+Math.abs(s[l])*t[1]+Math.abs(r[l])*t[2];return{x0:n[0]-a(0),x1:n[0]+a(0),y0:n[1]-a(1),y1:n[1]+a(1),z0:n[2]-a(2),z1:n[2]+a(2)}}async function Qv({gravity:n=9.8}={}){const e=await _o(()=>import("./rapier-Dr7-2af2.js"),[],import.meta.url),t=e.default||e;await t.init();const i=new t.World({x:0,y:-n,z:0});i.integrationParameters.numSolverIterations=6;const s=new Map,r=new Map,a=new Map,l=new t.EventQueue(!0),o={x:0,y:0,z:0,w:1},c=f=>({x:f[0],y:f[1],z:f[2]}),u=f=>({x:f[0],y:f[1],z:f[2],w:f[3]});let p=0,d=null;{const f=performance.now();i.step(),p=performance.now()-f}const h={kind:"rapier",warmMs:p,addStatic(f){const v=i.createCollider(t.ColliderDesc.cuboid((f.x1-f.x0)/2,(f.y1-f.y0)/2,(f.z1-f.z0)/2).setTranslation((f.x0+f.x1)/2,(f.y0+f.y1)/2,(f.z0+f.z1)/2).setFriction(.8));v.box=f,s.set(f.id,v)},setStatic(f,v){const g=s.get(f);g&&g.setEnabled(!!v)},removeStatic(f){const v=s.get(f);v&&(i.removeCollider(v,!0),s.delete(f))},addPart(f,{fixed:v=!1,kinematic:g=!1}={}){const m=(g?t.RigidBodyDesc.kinematicPositionBased():t.RigidBodyDesc.dynamic()).setTranslation(...f.p).setCanSleep(!0).setCcdEnabled(f.mass<4||!!f.poly);f.q&&m.setRotation({x:f.q[0],y:f.q[1],z:f.q[2],w:f.q[3]}),m.setLinearDamping(.05).setAngularDamping(.25);const _=i.createRigidBody(m),R=8*f.h[0]*f.h[1]*f.h[2],S=f.poly?Ro(f.poly):null;if(f.poly&&f.poly.cells){const I=pi(f.poly).volume,F=[];for(const N of f.poly.cells){const B=t.ColliderDesc.convexHull(new Float32Array(Ro(N).flat()));B&&F.push(i.createCollider(B.setMass(f.mass*pi(N).volume/I).setFriction(.7).setRestitution(.1),_))}return g||_.sleep(),r.set(f.id,{body:_,col:F[0],cols:F,h:f.h,mass:f.mass,fixed:v,held:!1,pts:S,poly:f.poly}),f.id}const C=S&&t.ColliderDesc.convexHull(new Float32Array(S.flat())),D=C||(f.shape==="cyl"?t.ColliderDesc.cylinder(f.h[1],f.h[0]):t.ColliderDesc.cuboid(...f.h));C?D.setMass(f.mass):D.setDensity(f.mass/R),D.setFriction(.7).setRestitution(.1);const b=i.createCollider(D,_);return g||_.sleep(),r.set(f.id,{body:_,col:b,cols:[b],h:f.h,mass:f.mass,fixed:v,held:!1,pts:S,poly:f.poly||null}),f.id},joint(f,v,g,m,_=!0){const R=r.get(v),S=g==="world"?null:r.get(g);if(!R)return;if(!S){a.set(f,{world:!0,a:v}),R.body.setBodyType(t.RigidBodyType.KinematicPositionBased,!0);return}const C=R.body.translation(),D=S.body.translation(),b=R.body.rotation(),I=S.body.rotation(),F=Wt([-b.x,-b.y,-b.z,b.w],[m[0]-C.x,m[1]-C.y,m[2]-C.z]),N=Wt([-I.x,-I.y,-I.z,I.w],[m[0]-D.x,m[1]-D.y,m[2]-D.z]),B=si([-I.x,-I.y,-I.z,I.w],[b.x,b.y,b.z,b.w]),V=t.JointData.fixed({x:F[0],y:F[1],z:F[2]},{x:0,y:0,z:0,w:1},{x:N[0],y:N[1],z:N[2]},{x:B[0],y:B[1],z:B[2],w:B[3]}),Q=i.createImpulseJoint(V,R.body,S.body,!0);_||Q.setContactsEnabled(!1),a.set(f,{j:Q,a:v,b:g})},unjoint(f){const v=a.get(f);if(v){if(a.delete(f),v.world){const g=r.get(v.a);g&&![...a.values()].some(m=>m.world&&m.a===v.a)&&(g.body.setBodyType(t.RigidBodyType.Dynamic,!0),g.body.wakeUp());return}i.removeImpulseJoint(v.j,!0);for(const g of[v.a,v.b]){const m=r.get(g);m&&m.body.wakeUp()}}},release(f){const v=r.get(f);v&&(v.fixed=!1,v.body.bodyType()!==t.RigidBodyType.Dynamic&&!v.held&&v.body.setBodyType(t.RigidBodyType.Dynamic,!0),v.body.wakeUp())},setKinematic(f,v,g=!1){const m=r.get(f);if(m){m.held=!!v,m.body.setBodyType(v?t.RigidBodyType.KinematicPositionBased:t.RigidBodyType.Dynamic,!0);for(const _ of m.cols)_.setSensor(!!v&&g);v||m.body.wakeUp()}},moveKinematic(f,v,g){const m=r.get(f);m&&(m.body.setNextKinematicTranslation({x:v[0],y:v[1],z:v[2]}),g&&m.body.setNextKinematicRotation({x:g[0],y:g[1],z:g[2],w:g[3]}))},setPose(f,v,g,m=!0){const _=r.get(f);_&&(_.body.setTranslation({x:v[0],y:v[1],z:v[2]},!1),g&&_.body.setRotation({x:g[0],y:g[1],z:g[2],w:g[3]},!1),_.body.setLinvel({x:0,y:0,z:0},!1),_.body.setAngvel({x:0,y:0,z:0},!1),m&&_.body.bodyType()===t.RigidBodyType.Dynamic&&_.body.sleep())},impulse(f,v){const g=r.get(f);!g||g.body.bodyType()!==t.RigidBodyType.Dynamic||g.body.applyImpulse({x:v[0],y:v[1],z:v[2]},!0)},impulseAt(f,v,g){const m=r.get(f);!m||m.body.bodyType()!==t.RigidBodyType.Dynamic||m.body.applyImpulseAtPoint({x:v[0],y:v[1],z:v[2]},{x:g[0],y:g[1],z:g[2]},!0)},velocity(f,v){const g=r.get(f);g&&(g.body.setLinvel({x:v[0],y:v[1],z:v[2]},!0),g.body.wakeUp())},remove(f){const v=r.get(f);if(v){for(const[g,m]of a)(m.a===f||m.b===f)&&h.unjoint(g);i.removeRigidBody(v.body),r.delete(f)}},has:f=>r.has(f),wakeAll(){for(const f of r.values())f.body.bodyType()===t.RigidBodyType.Dynamic&&f.body.wakeUp()},setPlayer(f){const m=Math.max(.02,(f.h-.22)/2-.27),_={x:f.x,y:f.y+.22+m+.27,z:f.z};if(!d){d={body:i.createRigidBody(t.RigidBodyDesc.kinematicPositionBased().setTranslation(_.x,_.y,_.z))},d.col=i.createCollider(t.ColliderDesc.capsule(m,.27).setFriction(.2).setCollisionGroups(196607),d.body),d.hh=m;return}Math.abs(d.hh-m)>.001&&(d.col.setHalfHeight(m),d.hh=m);const R=d.body.translation();Math.hypot(R.x-_.x,R.y-_.y,R.z-_.z)>.4?d.body.setTranslation(_,!0):d.body.setNextKinematicTranslation(_)},step(f){i.timestep=Math.min(1/30,f);const v=performance.now();return i.step(l),p=performance.now()-v,p},pose(f){const v=r.get(f);if(!v)return null;const g=v.body.translation(),m=v.body.rotation();return{p:[g.x,g.y,g.z],q:[m.x,m.y,m.z,m.w],sleep:v.body.isSleeping(),v:(()=>{const _=v.body.linvel();return[_.x,_.y,_.z]})()}},aabb(f){const v=r.get(f),g=v&&h.pose(f);if(!g)return null;if(!v.pts)return jv(g.p,g.q,v.h);const m={x0:1e9,x1:-1e9,y0:1e9,y1:-1e9,z0:1e9,z1:-1e9};for(const _ of v.pts){const R=Wt(g.q,_),S=g.p[0]+R[0],C=g.p[1]+R[1],D=g.p[2]+R[2];S<m.x0&&(m.x0=S),S>m.x1&&(m.x1=S),C<m.y0&&(m.y0=C),C>m.y1&&(m.y1=C),D<m.z0&&(m.z0=D),D>m.z1&&(m.z1=D)}return m},poly:f=>(r.get(f)||{}).poly||null,restsOnStatic(f){const v=r.get(f);if(!v)return!1;let g=!1,m=!1;const _=v.body.translation().y;for(const R of v.cols)i.contactPairsWith(R,S=>{const C=S.parent();!C||!C.isDynamic()?(!d||C!==d.body)&&(g=g||!C):C.translation().y<_-.01&&(m=!0)});return g&&!m},anchor(f,v){const g=r.get(f);if(!g||g.held)return;const m=g.body.bodyType(),_=m===t.RigidBodyType.Dynamic;v&&_?g.body.setBodyType(t.RigidBodyType.KinematicPositionBased,!0):!v&&!_&&(g.body.setBodyType(t.RigidBodyType.Dynamic,!0),g.body.wakeUp())},carry(f,v){const g=r.get(f);if(g)for(const m of g.cols)m.setCollisionGroups(v?131069:4294967295)},pointsAt(f,v,g){const m=r.get(f);return m?(m.pts||m.box||(m.box=[-1,1].flatMap(R=>[-1,1].flatMap(S=>[-1,1].map(C=>[R*m.h[0],S*m.h[1],C*m.h[2]]))))).map(R=>{const S=Wt(g,R);return[v[0]+S[0],v[1]+S[1],v[2]+S[2]]}):[]},overlaps(f,v,g,m){const _=r.get(f),R=[];if(!_)return R;const S=h.pointsAt(f,v,g),C=[0,1,2].map(b=>Math.min(...S.map(I=>I[b]))),D=[0,1,2].map(b=>Math.max(...S.map(I=>I[b])));for(const[b,I]of s){const F=I.box;if(!(!F||D[0]<F.x0||C[0]>F.x1||D[1]<F.y0||C[1]>F.y1||D[2]<F.z0||C[2]>F.z1||!I.isEnabled()||!m(b)))for(const N of _.cols){const B=N.shape.contactShape(c(v),u(g),I.shape,I.translation(),o,0);B&&B.distance<0&&R.push({id:b,depth:-B.distance,n:[-B.normal1.x,-B.normal1.y,-B.normal1.z]})}}return R},thaw(f){const v=s.get(f);if(v){for(const g of v.all||[v])i.removeCollider(g,!0);s.delete(f)}},freeze(f){const v=r.get(f);if(!v)return;const g=h.pose(f);i.removeRigidBody(v.body),r.delete(f),h.addFrozen({id:f,poly:v.poly,pts:v.pts,p:g.p,q:g.q})},addFrozen(f){const v=(f.poly?Fn(f.poly).map(Ro):[f.pts]).map(g=>t.ColliderDesc.convexHull(new Float32Array(g.flat()))).filter(Boolean).map(g=>i.createCollider(g.setTranslation(...f.p).setRotation({x:f.q[0],y:f.q[1],z:f.q[2],w:f.q[3]}).setFriction(.8)));v.length&&(v[0].all=v,s.set(f.id,v[0]))},half:f=>(r.get(f)||{}).h,mass:f=>(r.get(f)||{}).mass,bodies:()=>[...r.keys()],stats(){let f=0,v=0,g=0;for(const m of r.values())m.body.bodyType()===t.RigidBodyType.Dynamic&&g++,m.body.isSleeping()?v++:f++;return{awake:f,asleep:v,total:r.size,dynamic:g,stepMs:p}},dispose(){i.free()}};return h}function e_({bounds:n,bind:e=!0}){e&&Ou({PH:{g:14,gBody:9.8,squeeze:3},playerR:.3,boundsAt:()=>n,placeAt:()=>!0,roomHeight:()=>n.h,spawn:{x:0,z:0,yaw:0,pitch:0},speed:3.2});const t={boxes:[]},i=new Set,s=new Map,r=new Map;let a=0,l=null;const o=()=>({boxes:t.boxes.filter(u=>!i.has(u.id)),circles:[]}),c={kind:"box",warmMs:0,addStatic(u){t.boxes.push(u)},setStatic(u,p){p?i.delete(u):i.add(u)},addPart(u,{fixed:p=!1,kinematic:d=!1}={}){return s.set(u.id,{id:u.id,x:u.p[0],y:u.p[1],z:u.p[2],hx:u.h[0],hy:u.h[1],hz:u.h[2],vx:0,vy:0,vz:0,rest:!0,fixed:p||d,held:!1,mass:u.mass,h:u.h,q:u.q||[0,0,0,1]}),u.id},joint(u,p,d){r.set(u,{a:p,b:d});const h=s.get(p);h&&(h.fixed=!0);const f=d!=="world"&&s.get(d);f&&(f.fixed=!0)},unjoint(u){r.delete(u)},release(u){const p=s.get(u);p&&!p.held&&(p.fixed=!1,p.rest=!1)},setKinematic(u,p){const d=s.get(u);d&&(d.held=!!p,d.fixed=!!p,p||(d.rest=!1))},moveKinematic(u,p,d){const h=s.get(u);h&&(h.x=p[0],h.y=p[1],h.z=p[2],d&&(h.q=d))},setPose(u,p,d){const h=s.get(u);h&&(h.x=p[0],h.y=p[1],h.z=p[2],d&&(h.q=d),h.vx=h.vy=h.vz=0,h.rest=!0)},impulse(u,p){const d=s.get(u);if(!d||d.fixed)return;const h=d.mass||1;d.vx+=p[0]/h,d.vy+=p[1]/h,d.vz+=p[2]/h,d.rest=!1},impulseAt(u,p){c.impulse(u,p)},velocity(u,p){const d=s.get(u);d&&(d.vx=p[0],d.vy=p[1],d.vz=p[2],d.rest=!1)},remove(u){s.delete(u);for(const[p,d]of r)(d.a===u||d.b===u)&&r.delete(p)},has:u=>s.has(u),poly:()=>null,restsOnStatic:()=>!1,freeze(){},addFrozen(){},thaw(){},carry(){},anchor(){},pointsAt(u,p){const d=s.get(u);return d?[-1,1].flatMap(h=>[-1,1].flatMap(f=>[-1,1].map(v=>[p[0]+h*d.hx,p[1]+f*d.hy,p[2]+v*d.hz]))):[]},overlaps(u,p,d,h){const f=s.get(u),v=[];if(!f)return v;for(const g of t.boxes){if(i.has(g.id)||!h(g.id))continue;const m=[[p[0]+f.hx-g.x0,[-1,0,0]],[g.x1-p[0]+f.hx,[1,0,0]],[p[1]+f.hy-g.y0,[0,-1,0]],[g.y1-p[1]+f.hy,[0,1,0]],[p[2]+f.hz-g.z0,[0,0,-1]],[g.z1-p[2]+f.hz,[0,0,1]]].sort((_,R)=>_[0]-R[0])[0];m[0]>0&&v.push({id:g.id,depth:m[0],n:m[1]})}return v},wakeAll(){for(const u of s.values())u.fixed||(u.rest=!1)},setPlayer(u){l={x0:u.x-.27,x1:u.x+.27,z0:u.z-.27,z1:u.z+.27,y0:u.y+.22,y1:u.y+u.h}},step(u){const p=performance.now(),d=o(),h=[...s.values()],f=h.map(lf),v=l?[l]:[];for(let g=0;g<h.length;g++){const m=h[g];m.fixed||m.rest||(rv(m,d,Math.min(1/30,u),f.filter((_,R)=>R!==g).concat(v)),f[g]=lf(m))}return a=performance.now()-p,a},pose(u){const p=s.get(u);return p?{p:[p.x,p.y,p.z],q:p.q,sleep:p.rest||p.fixed,v:[p.vx,p.vy,p.vz]}:null},aabb(u){const p=s.get(u);return p?{x0:p.x-p.hx,x1:p.x+p.hx,y0:p.y-p.hy,y1:p.y+p.hy,z0:p.z-p.hz,z1:p.z+p.hz}:null},half:u=>(s.get(u)||{}).h,mass:u=>(s.get(u)||{}).mass,bodies:()=>[...s.keys()],stats(){let u=0,p=0,d=0;for(const h of s.values())h.fixed||d++,h.rest||h.fixed?p++:u++;return{awake:u,asleep:p,total:s.size,dynamic:d,stepMs:a}},dispose(){}};return c}async function t_(n,e={}){return n==="box"?e_(e):Qv(e)}function n_({panels:n=Dv,cyc:e=()=>0}={}){const t=new Map(n.map(l=>[l.id,l])),i=new Map,s=()=>({fx:["bolt","bolt","bolt","bolt"],cut:[0,0,0,0],plate:"on",weld:0,seamCyc:-1,dirty:!1}),r=l=>t.has(l)?(i.has(l)||i.set(l,s()),i.get(l)):null,a=l=>l.cut.every(o=>o>=1);return{has:l=>t.has(l),cut(l,o,c){const u=r(l);return!u||u.plate!=="on"||o<0||o>3||u.cut[o]>=1?null:(u.cut[o]=Math.min(1,u.cut[o]+c/Kt.boltCut),u.cut[o])},loose:l=>{const o=r(l);return!!o&&o.plate==="on"&&a(o)},take(l){const o=r(l);return!o||o.plate!=="on"||!a(o)?!1:(o.plate="off",o.weld=0,o.dirty=!0,!0)},seatable(l,o){const c=r(l),u=t.get(l);if(!c||c.plate!=="off"||!o)return!1;const p=Ql[u.face],d=[o[0]-u.x,o[1]-u.y,o[2]-u.z],h=d[0]*p[0]+d[1]*p[1]+d[2]*p[2];return Math.hypot(d[0]-h*p[0],d[1]-h*p[1],d[2]-h*p[2])<Kt.seat&&h>-.05&&h<Kt.seatOut},blocked(l,o=[]){const c=t.get(l);if(!c)return"";const u=qo(c),p=(o||[]).find(d=>d.x1>u.x0&&d.x0<u.x1&&d.y1>u.y0&&d.y0<u.y1&&d.z1>u.z0&&d.z0<u.z1);return p?p.id||"plot":""},seat(l,o,c=[]){const u=r(l);return!u||!this.seatable(l,o)||this.blocked(l,c)?!1:(u.plate="seat",u.weld=0,!0)},unseat(l){const o=r(l);return!o||o.plate!=="seat"?!1:(o.plate="off",o.weld=0,!0)},weld(l,o){const c=r(l);return!c||c.plate!=="seat"?null:(c.weld=Math.min(1,c.weld+o/Kt.weld),c.weld>=1&&(c.plate="on",c.fx=["weld","weld","weld","weld"],c.cut=[0,0,0,0],c.seamCyc=e(),c.dirty=!0),c.weld)},view(l){const o=r(l);if(!o)return null;const c=o.fx[0]==="weld"?o.seamCyc===e()?1:2:0;return{bolts:o.cut.map(u=>u>=1?1:0),fx:o.fx.slice(),plate:o.plate==="off"?"off":"on",seated:o.plate==="seat",weld:+o.weld.toFixed(2),seam:c}},open:l=>{const o=r(l);return!!o&&o.plate==="off"},load(l){for(const[o,c,u]of l||[]){const p=r(o);!p||p.dirty||(c==="off"?(p.plate="off",p.cut=[1,1,1,1]):(p.plate="on",p.cut=[0,0,0,0],u>=0&&(p.fx=["weld","weld","weld","weld"],p.seamCyc=u)))}},shared(){const l=[];for(const[o,c]of i)c.dirty&&(l.push([o,c.plate==="off"?"off":"on"]),c.dirty=!1);return l},state:()=>[...i].map(([l,o])=>({id:l,...o}))}}const Mf=.08,$i=.75,Xu=n=>[-n[0],-n[1],-n[2],n[3]];function i_(n,e,t,i,s,r){const a=Xu(i),l=Wt(a,[n-t[0],-t[1],e-t[2]]),o=Wt(a,[0,1,0]);let c=-1e9,u=1e9;const p=(d,h)=>{const f=d[0]*o[0]+d[1]*o[1]+d[2]*o[2],v=d[0]*l[0]+d[1]*l[1]+d[2]*l[2]-h;if(Math.abs(f)<1e-9)return v<=1e-9;const g=-v/f;return f>0?u=Math.min(u,g):c=Math.max(c,g),c<=u};if(r){for(const d of r)if(!p(d.n,d.w))return null}else for(let d=0;d<3;d++){const h=[0,0,0];if(h[d]=1,!p(h,s[d])||(h[d]=-1,!p(h,s[d])))return null}return u-c>1e-4?[c,u]:null}const s_=n=>{for(const e of[[1,0,0],[0,1,0],[0,0,1]]){const t=Wt(n,e);if(Math.max(Math.abs(t[0]),Math.abs(t[1]),Math.abs(t[2]))<.9995)return!1}return!0};function Tl(n,e,t,i,s,r,a=null){if(a&&a.cells){const g=[];for(const m of a.cells)g.push(...Tl(n,e,t,i,s,r,m.faces));return g}if(i.x0>s+$i||i.x1<s-$i||i.z0>r+$i||i.z1<r-$i)return[];if(!a&&s_(e.q))return[{...i,id:n}];const l=[],o=Math.max(i.x0,s-$i),c=Math.min(i.x1,s+$i),u=Math.max(i.z0,r-$i),p=Math.min(i.z1,r+$i),d=Math.max(1,Math.ceil((c-o)/Mf)),h=Math.max(1,Math.ceil((p-u)/Mf)),f=(c-o)/d,v=(p-u)/h;for(let g=0;g<d;g++)for(let m=0;m<h;m++){const _=i_(o+(g+.5)*f,u+(m+.5)*v,e.p,e.q,t,a);if(!_)continue;const R=l[l.length-1];if(R&&R.i===g&&R.k===m-1&&Math.abs(R.y0-_[0])<.004&&Math.abs(R.y1-_[1])<.004){R.z1=u+(m+1)*v,R.k=m;continue}l.push({x0:o+g*f,x1:o+(g+1)*f,z0:u+m*v,z1:u+(m+1)*v,y0:_[0],y1:_[1],id:n,i:g,k:m})}return l}function Al(n,e,t,i=null){const s=Wt(Xu(e.q),[n[0]-e.p[0],n[1]-e.p[1],n[2]-e.p[2]]);if(i&&i.cells)return Math.min(...i.cells.map(r=>Al(n,e,t,r.faces)));if(i){let r=-1e9;for(const a of i)r=Math.max(r,a.n[0]*s[0]+a.n[1]*s[1]+a.n[2]*s[2]-a.w);return Math.max(0,r)}return Math.hypot(...[0,1,2].map(r=>Math.max(0,Math.abs(s[r])-t[r])))}const r_={W:[1,0,0],E:[-1,0,0],S:[0,0,1],N:[0,0,-1]},Ca={slop:.004,deep:.05,small:.12},bf=(n,e)=>n[0]*e[0]+n[1]*e[1]+n[2]*e[2];function o_({S:n,C:e,phys:t,mut:i,ev:s}){const[r,a,l]=e.size,o=.4;let c=new Map(e.statics.map(N=>[N.id,N]));const u=()=>{c=new Map(e.statics.map(N=>[N.id,N]))},p=N=>N.kind==="wall"?r_[N.side]:N.kind==="floor"?[0,1,0]:N.kind==="ceil"?[0,-1,0]:null,d=N=>N.side==="W"?0:N.side==="E"?-r:N.side==="S"?0:N.side==="N"?-l:N.kind==="floor"?0:-a,h=N=>N&&N.kind!=="note"&&!(N.kind==="glass"&&(n.windows.get(N.id)||{}).broken)&&!(N.kind==="door"&&(n.doors.get(N.door)||{}).open>.5),f=(N,B,V,Q,$,oe)=>N==="W"?[-oe,0,Q,$,B,V]:N==="E"?[r,r+oe,Q,$,B,V]:N==="S"?[B,V,Q,$,-oe,0]:[B,V,Q,$,l,l+oe],v=(N,B)=>N[0]>=B[0]&&N[0]<=B[1]&&N[1]>=B[2]&&N[1]<=B[3]&&N[2]>=B[4]&&N[2]<=B[5],g=N=>N[0]>=0&&N[0]<=r&&N[1]>=0&&N[1]<=a&&N[2]>=0&&N[2]<=l;function m(N,B=!1){if(g(N))return!0;for(const V of e.openNiches||[])if(N[0]>V.x0-.02&&N[0]<V.x1+.02&&N[1]>V.y0-.02&&N[1]<V.y1+.02&&N[2]>V.z0-.02&&N[2]<V.z1+.02)return!0;for(const V of e.portals){const Q=n.doors.get(V.id);if(!(B&&Q&&Q.open<=.5&&!Q.cut)&&v(N,f(V.side,V.a0,V.a1,V.y0-.05,V.y1+.3,o+1.6)))return!0}for(const V of n.windows.values())if(V.broken&&v(N,f(V.side,V.a0,V.a1,V.y0,V.y1,9)))return!0;for(const V of e.hatches)if((n.hatchOpen.get(V.id)||0)>0&&N[0]>V.x0&&N[0]<V.x1&&N[2]>V.z0&&N[2]<V.z1&&N[1]<.05)return!0;return!1}function _(N,B=h){const V=[0,0,0];for(let Q=0;Q<6;Q++){let $=null,oe=Ca.slop;for(const de of N){const ce=[de.p[0]+V[0],de.p[1]+V[1],de.p[2]+V[2]];for(const Ie of t.overlaps(de.id,ce,de.q,pe=>B(c.get(pe)))){const pe=c.get(Ie.id),Ae=p(pe);let ge=Ie.n,Le=Ie.depth;if(Ae&&(Le>Ca.small||bf(ge,Ae)<-.2)){ge=Ae,Le=0;const qe=d(pe);for(const _e of t.pointsAt(de.id,ce,de.q))Le=Math.max(Le,qe-bf(Ae,_e))}Le>oe&&(oe=Le,$=ge)}}if(!$)break;for(let de=0;de<3;de++)V[de]+=$[de]*(oe+.001)}return V}function R(N,B){const V=N[0];if(m(V.p,B))return[0,0,0];const Q={lo:[1e9,1e9,1e9],hi:[-1e9,-1e9,-1e9]};for(const oe of N)for(const de of t.pointsAt(oe.id,oe.p,oe.q))for(let ce=0;ce<3;ce++)Q.lo[ce]=Math.min(Q.lo[ce],de[ce]),Q.hi[ce]=Math.max(Q.hi[ce],de[ce]);const $=[r,a,l];return[0,1,2].map(oe=>Q.hi[oe]-Q.lo[oe]>=$[oe]?$[oe]/2-(Q.lo[oe]+Q.hi[oe])/2:Q.lo[oe]<.003?.003-Q.lo[oe]:Q.hi[oe]>$[oe]-.003?$[oe]-.003-Q.hi[oe]:0)}const S=N=>N.filter(B=>t.has(B)).map(B=>{const V=t.pose(B);return{id:B,p:V.p,q:V.q}}),C=(N,B)=>N.map(V=>({...V,p:V.p.map((Q,$)=>Q+B[$])})),D=(N,B)=>N.map((V,Q)=>V+B[Q]);function b(N,B){if(i.has("noeject"))return B;const V=S(N),Q=V[0],$=C(V,[0,1,2].map(de=>B[de]-Q.p[de]));let oe=R($,!0);return oe=D(oe,_(C($,oe),h)),[0,1,2].map(de=>B[de]+oe[de])}function I(N,B){if(i.has("noeject"))return 0;const V=S(N);if(!V.length)return 0;const Q=R(V,!1),$=Math.hypot(...Q)>0,oe=D(Q,_(C(V,Q))),de=Math.hypot(...oe);if(de<.002)return 0;for(const ce of V)t.setPose(ce.id,D(ce.p,oe),ce.q,!1);return($||de>Ca.deep)&&s("returned",{id:V[0].id,why:B,d:+de.toFixed(3)}),de}function F(N){const B=t.pose(N);if(!B)return 0;if(!m(B.p))return 9;const V=t.aabb(N);if(V.x0>0&&V.y0>-.01&&V.z0>0&&V.x1<r&&V.y1<a&&V.z1<l)return 0;let Q=0;for(const $ of t.overlaps(N,B.p,B.q,oe=>{const de=c.get(oe);return!!de&&!!p(de)}))Q=Math.max(Q,$.depth);return Q}return{hold:b,eject:I,depth:F,allowed:m,refresh:u}}const qn={cell:.5,gap:.01,t:.012,inset:.07,depth:.28,hull:.1,bolt:.075,mass:9},tr={W:[1,0,0],E:[-1,0,0],S:[0,0,1],N:[0,0,-1],F:[0,1,0],C:[0,-1,0]},Sf={W:"+x",E:"-x",S:"+z",N:"-z",F:"+y",C:"-y"},a_=n=>{let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return(e>>>0)/4294967296};function l_(n){const[e,t,i]=n.size,s=qn.cell,r=[],a=new Set([...n.outer||[],...n.windows.map(l=>l.side)]);for(const l of["W","E","S","N","F","C"]){const o="WESN".includes(l),c=l==="W"||l==="E"?i:e,u=o?t:i,p=Math.floor(c/s+1e-6),d=Math.floor(u/s+1e-6),h=new Uint8Array(p*d),f=(g,m,_,R)=>{for(let S=Math.max(0,Math.floor(g/s+.001));S<Math.min(p,Math.ceil(m/s-.001));S++)for(let C=Math.max(0,Math.floor(_/s+.001));C<Math.min(d,Math.ceil(R/s-.001));C++)h[S*d+C]=1},v=g=>l==="W"||l==="E"?[g.z0,g.z1,g.y0,g.y1]:o?[g.x0,g.x1,g.y0,g.y1]:[g.x0,g.x1,g.z0,g.z1];if(o)for(const g of n.holes)g.side===l&&f(g.a0-.13,g.a1+.13,Math.max(0,g.y0-.13),g.y1+.13);for(const g of n.statics){if(["floor","ceil","wall","stub","door","glass","note"].includes(g.kind))continue;({W:g.x0<.12,E:g.x1>e-.12,S:g.z0<.12,N:g.z1>i-.12,F:g.y0<.12,C:g.y1>t-.12})[l]&&f(...v(g))}for(const g of n.parts)if(["monitor","side"].includes(g.kind)){const m={x0:g.p[0]-g.h[0],x1:g.p[0]+g.h[0],y0:g.p[1]-g.h[1],y1:g.p[1]+g.h[1],z0:g.p[2]-g.h[2],z1:g.p[2]+g.h[2]};({W:m.x0<.12,E:m.x1>e-.12,S:m.z0<.12,N:m.z1>i-.12,F:m.y0<.12,C:m.y1>t-.12})[l]&&f(...v(m))}for(const g of n.panels)if(g.face===Sf[l]){const m=l==="W"||l==="E"?[g.z,g.y]:o?[g.x,g.y]:[g.x,g.z];f(m[0]-.24,m[0]+.24,m[1]-.24,m[1]+.24)}if(l==="F")for(const g of n.hatches)f(g.x0-.05,g.x1+.05,g.z0-.05,g.z1+.05);if(l==="C")for(const g of n.fixtures)f(g.x-g.w/2-.05,g.x+g.w/2+.05,g.z-g.l/2-.05,g.z+g.l/2+.05);for(const[g,m]of[[2,2],[2,1],[1,2],[1,1]])for(let _=0;_+g<=p;_++)for(let R=0;R+m<=d;R++){let S=!0;for(let V=0;V<g&&S;V++)for(let Q=0;Q<m;Q++)if(h[(_+V)*d+R+Q]){S=!1;break}if(!S||g===2&&_%2||m===2&&R%2)continue;for(let V=0;V<g;V++)for(let Q=0;Q<m;Q++)h[(_+V)*d+R+Q]=1;const C=_*s,D=(_+g)*s,b=R*s,I=(R+m)*s,F=(C+D)/2,N=(b+I)/2,B={id:`t${l.toLowerCase()}${_}_${R}`,tile:!0,room:n.id,side:l,face:Sf[l],u0:C,u1:D,v0:b,v1:I,depth:l==="C"?.2:qn.depth,outer:o&&a.has(l)};if([B.x,B.y,B.z]={W:[0,N,F],E:[e,N,F],S:[F,N,0],N:[F,N,i],F:[F,0,N],C:[F,t,N]}[l],r.push(B),B.outer){const V=tr[l],Q={...B,id:B.id+".hull",hull:!0,tileOf:B.id,depth:qn.hull,u0:C+.04,u1:D-.04,v0:b+.04,v1:I-.04};Q.x-=V[0]*B.depth,Q.z-=V[2]*B.depth,r.push(Q)}}}return r}const Ws=n=>tr[n.side];function hs(n,e,t,i=0){const s=tr[n.side],r=[n.x,n.y,n.z],a={},[l,o]=n.side==="W"||n.side==="E"?["z","y"]:"SN".includes(n.side)?["x","y"]:["x","z"];return["x","y","z"].forEach((c,u)=>{if(s[u]){const p=r[u]+s[u]*e,d=r[u]+s[u]*t;a[c+"0"]=Math.min(p,d),a[c+"1"]=Math.max(p,d)}}),a[l+"0"]=n.u0+i,a[l+"1"]=n.u1-i,a[o+"0"]=n.v0+i,a[o+"1"]=n.v1-i,a}const Vo=n=>n.hull?hs(n,-.14,.001):hs(n,-n.depth,0,.03);function Co(n,e){const t=tr[n.side],i=[[0,0],[1,0],[1,1],[0,1]][e],s=qn.inset,r=i[0]?n.u1-s:n.u0+s,a=i[1]?n.v1-s:n.v0+s,l=n.hull?.012:.02;return{W:[n.x,a,r],E:[n.x,a,r],S:[r,a,n.z],N:[r,a,n.z],F:[r,n.y,a],C:[r,n.y,a]}[n.side].map((c,u)=>c+t[u]*l)}const Po=n=>{const e=tr[n.side],t=(n.u1-n.u0)/2-qn.gap,i=(n.v1-n.v0)/2-qn.gap;return e[1]?[t,qn.t,i]:e[0]?[qn.t,i,t]:[t,i,qn.t]};function c_(n,e=!1){if(n.hull)return[];const t=a_(n.id+n.room),i=tr[n.side],s=n.u1-n.u0-.1,r=n.v1-n.v0-.1,a=(n.u0+n.u1)/2,l=(n.v0+n.v1)/2,o=[],c=!i[1],u=(g,m,_)=>({W:[n.x,m,g],E:[n.x,m,g],S:[g,m,n.z],N:[g,m,n.z],F:[g,n.y,m],C:[g,n.y,m]})[n.side].map((R,S)=>R-i[S]*_),p=(g,m,_)=>i[1]?[g,_,m]:i[0]?[_,m,g]:[g,m,_],d=(g,m,_,R,S,C,D,b,I,F,N)=>{const B=u(_,R,S),V=p(C,D,b),Q=C>=D;o.push({part:{id:`${n.id}.${g}`,prefab:n.id,fill:!0,kind:m,shape:N?"hull":"box",poly:N,h:V,p:B,yaw:0,mass:I,free:!1,mat:F},clips:[-1,1].map($=>u(_+(Q?$*C*.8:0),R+(Q?0:$*D*.8),S-b*.9))})},h=n.depth;d("pad","pad",a,l,h-.035,s/2,r/2,.025,1.2,"pad");const f=(g,m,_,R,S,C,D,b)=>{const I=Wu(C,S/2,8),F=D?i[1]?2:1:n.side==="W"||n.side==="E"?2:0,N=V=>F===1?V:F===0?[V[1],V[0],V[2],...V.slice(3)]:[V[0],V[2],V[1],...V.slice(3)],B={faces:I.faces.map(V=>({n:N(V.n),w:V.w,cut:!1,v:F===1?V.v:V.v.map(N).reverse()}))};d(g,"tube",m,_,R,D?C:S/2,D?S/2:C,C,2+S,b,B)};if(e)return o;const v=Math.min(.13,h-.1);return c?(f("tube0",a-s*.3,l,v,r,.04,!0,"copper"),t>.45&&f("tube1",a-s*.3+.13,l,v,r,.028,!0,"steel"),t<.35?d("jbox","jbox",a+s*.18,l+r*.1,v,Math.min(.13,s/4),Math.min(.16,r/4),.05,2.5,"yellow"):d("tray","tray",a+s*.2,l,v,.09,r/2,.025,2,"steelDark")):(d("tray","tray",a,l-r*.22,v,s/2,.08,.02,2,"steelDark"),f("tube0",a,l+r*.2,v,s,.04,!1,t>.5?"copper":"steel"),t<.3&&d("jbox","jbox",a+s*.22,l,Math.min(v+.02,h-.09),.1,.1,.04,2.5,"yellow")),o}const us={mass:6,strength:.5,hit:3.4,seat:.4,shards:9,t:.004};function f_({S:n,C:e,room:t,phys:i,ev:s,mut:r,cutter:a}){if(n.screens=new Map,i.kind==="rapier")for(const h of e.screenBoxes||[])n.screens.set(h.id,{id:h.id,side:h.side,p:[(h.x0+h.x1)/2,(h.y0+h.y1)/2,(h.z0+h.z1)/2],broken:!1,v:[0,0,0],n:0});const l=h=>a.jointsOf(h).some(f=>f.kind==="mount"),o=h=>{const f=n.screens.get(h);return!f||l(h)&&!f.broken};function c(h){const f=i.half(h.id),v=[0,1,2].sort((N,B)=>f[N]-f[B]),g=v[0],m=v[2]===1?v[1]:v[2],_=m===1?v[1]:1,R=f[m]*.94,S=f[_]*.9,C=[R*.12,-S*.08],D=[],b={W:1,E:-1,S:1,N:-1}[h.side]||1,I=[],F=us.shards;for(let N=0;N<F;N++){const B=(N+.35*Math.sin(N*7.3))/F*Math.PI*2,V=Math.min(R/Math.max(1e-6,Math.abs(Math.cos(B))),S/Math.max(1e-6,Math.abs(Math.sin(B))));I.push([Math.cos(B)*V,Math.sin(B)*V])}for(let N=0;N<F;N++){const B=I[N],V=I[(N+1)%F],Q=[C,B,V],$=(Ae,ge)=>{const Le=[0,0,0];return Le[m]=Ae[0],Le[_]=Ae[1],Le[g]=b*(f[g]+.004)+ge,Le},oe=[],de=Ae=>{const ge=Ae[1].map((Oe,Ge)=>Oe-Ae[0][Ge]),Le=Ae[2].map((Oe,Ge)=>Oe-Ae[0][Ge]),qe=[ge[1]*Le[2]-ge[2]*Le[1],ge[2]*Le[0]-ge[0]*Le[2],ge[0]*Le[1]-ge[1]*Le[0]],_e=Math.hypot(...qe)||1,ke=qe.map(Oe=>Oe/_e);oe.push({n:ke,w:ke[0]*Ae[0][0]+ke[1]*Ae[0][1]+ke[2]*Ae[0][2],cut:!1,v:Ae.map(Oe=>[...Oe,0,0])})},ce=Q.map(Ae=>$(Ae,-.004)),Ie=Q.map(Ae=>$(Ae,us.t)),pe=[...ce,...Ie].reduce((Ae,ge)=>Ae.map((Le,qe)=>Le+ge[qe]/6),[0,0,0]);for(const Ae of[[...ce],[...Ie],...[0,1,2].map(ge=>[ce[ge],ce[(ge+1)%3],Ie[(ge+1)%3],Ie[ge]])]){const ge=Ae.slice(),Le=ge[1].map((Oe,Ge)=>Oe-ge[0][Ge]),qe=ge[2].map((Oe,Ge)=>Oe-ge[0][Ge]),_e=[Le[1]*qe[2]-Le[2]*qe[1],Le[2]*qe[0]-Le[0]*qe[2],Le[0]*qe[1]-Le[1]*qe[0]],ke=ge[0].map((Oe,Ge)=>Oe-pe[Ge]);_e[0]*ke[0]+_e[1]*ke[1]+_e[2]*ke[2]<0&&ge.reverse(),de(ge)}D.push({faces:oe})}return D}function u(h,f=[0,0,0]){const v=n.screens.get(h);if(!v||v.broken||r.has("noshatter"))return!1;v.broken=!0;const g=i.pose(h),m=a.addShards(h,c(v),g,f,`${h}.glass`);return s("shatter",{id:h,shards:m}),!0}function p(){for(const[h,f]of n.screens){if(!i.has(h))continue;const v=i.pose(h),g=Math.hypot(v.v[0]-f.v[0],v.v[1]-f.v[1],v.v[2]-f.v[2]),m=f.v;if(f.v=v.v.slice(),f.calm>0){f.calm--;continue}n.held!==h&&!l(h)&&g>us.hit&&u(h,m)}}function d(h){const f=n.screens.get(h);if(!f||l(h))return!1;const v=i.pose(h);if(Math.hypot(...v.p.map((_,R)=>_-f.p[R]))>us.seat)return!1;i.setPose(h,f.p,[0,0,0,1],!1);const g={id:`mount:${h}.${++f.n}`,prefab:h,a:h,b:"world",at:f.p.slice(),la:[0,0,0],strength:us.strength,kind:"mount"};n.joints.set(g.id,g),i.joint(g.id,g.a,"world",g.at);const m={...g,id:`mount:${h}.h${f.n}`,kind:"hook"};return n.joints.set(m.id,m),i.joint(m.id,m.a,"world",m.at),s("monitor_seat",{id:h,works:!f.broken}),!0}return{mounted:l,on:o,shatter:u,step:p,seat:d,calm:h=>{const f=n.screens.get(h);f&&(f.calm=3)},snapshot:()=>[...n.screens].map(([h,f])=>[h,f.broken,f.n]),restore:h=>{for(const[f,v,g]of h||[]){const m=n.screens.get(f);m&&(m.broken=v,m.n=g)}}}}const gi=(n,e,t)=>(e[0]-n[0])*(t[1]-n[1])-(e[1]-n[1])*(t[0]-n[0]),Mi=(n,e)=>Math.hypot(n[0]-e[0],n[1]-e[1]);function gs(n,e){if(n.length<3)return n.slice();const t=n[0],i=n[n.length-1],s=Mi(t,i);let r=0,a=0;for(let l=1;l<n.length-1;l++){const o=s<1e-6?Mi(n[l],t):Math.abs(gi(t,i,n[l]))/s;o>r&&(r=o,a=l)}return r<=e?[t,i]:[...gs(n.slice(0,a+1),e).slice(0,-1),...gs(n.slice(a),e)]}function u_(n,e,t){let i=0,s=0;for(let r=1;r<n.length;r++){const a=Mi(n[r],n[0]);a>s&&(s=a,i=r)}for(let r=e;;r*=1.35){const a=[...gs(n.slice(0,i+1),r).slice(0,-1),...gs([...n.slice(i),n[0]],r).slice(0,-1)];if(a.length<=t||r>1)return a}}const qu=(n,e,t,i)=>{const s=[e[0]-n[0],e[1]-n[1]],r=[i[0]-t[0],i[1]-t[1]],a=s[0]*r[1]-s[1]*r[0];if(Math.abs(a)<1e-12)return null;const l=[t[0]-n[0],t[1]-n[1]],o=(l[0]*r[1]-l[1]*r[0])/a,c=(l[0]*s[1]-l[1]*s[0])/a;return o>1e-9&&o<1-1e-9&&c>1e-9&&c<1-1e-9?{t:o,u:c,p:[n[0]+s[0]*o,n[1]+s[1]*o]}:null},ai=n=>{let e=0;for(let t=0;t<n.length;t++){const i=n[t],s=n[(t+1)%n.length];e+=i[0]*s[1]-i[1]*s[0]}return e/2},$u=n=>{for(let e=0;e<n.length;e++)for(let t=e+2;t<n.length;t++)if(!(e===0&&t===n.length-1)&&qu(n[e],n[(e+1)%n.length],n[t],n[(t+1)%n.length]))return!1;return!0},ei={tol:.014,straight:.025,close:.08,minArea:.0036,minLen:.28,max:10,flat:.1};function d_(n){const e=n.length,t=n.slice(1).reduce((r,a,l)=>r+Mi(a,n[l]),0);for(let r=0;r<e-1;r++)for(let a=r+2;a<e-1;a++){const l=qu(n[r],n[r+1],n[a],n[a+1]);if(!l)continue;const o=[l.p,...n.slice(r+1,a+1)];if(Math.abs(ai(o))>ei.minArea)return wf(o)}if(t>ei.minLen&&Mi(n[0],n[e-1])<Math.max(.05,Math.min(ei.close,t*.12))&&Math.abs(ai(n))>ei.minArea)return wf(n);let i=ei.tol,s=gs(n,i);if(gs(n,Math.max(ei.straight,t*.035)).length===2)return{kind:"line",pts:[n[0],n[e-1]]};for(;s.length>ei.max;)i*=1.35,s=gs(n,i);return{kind:"open",pts:s}}function wf(n){let e=u_(n,ei.tol,ei.max);if(e=e.filter((r,a)=>Mi(r,e[(a+1)%e.length])>.02),e.length<3||Math.abs(ai(e))<ei.minArea||!$u(e))return{kind:"bad",pts:e,why:"контур"};const t=Math.sqrt(Math.abs(ai(n)/ai(e))),i=e.reduce((r,a)=>[r[0]+a[0]/e.length,r[1]+a[1]/e.length],[0,0]),s=e.map(r=>[i[0]+(r[0]-i[0])*t,i[1]+(r[1]-i[1])*t]);return{kind:"loop",pts:ai(s)<0?s.reverse():s}}function h_(n){const t=(d,h)=>{const f=Mi(d,h)||1;return[(h[0]-d[0])/f,(h[1]-d[1])/f]},i=n.length,s=t(n[1],n[0]),r=t(n[i-2],n[i-1]),a=[[n[0][0]+s[0]*12,n[0][1]+s[1]*12],...n,[n[i-1][0]+r[0]*12,n[i-1][1]+r[1]*12]],l=a.slice(1).map(()=>!0);let o=Math.atan2(r[1],r[0]),c=Math.atan2(s[1],s[0]);for(;c<=o+1e-6;)c+=Math.PI*2;const u=n.reduce((d,h)=>[d[0]+h[0]/i,d[1]+h[1]/i],[0,0]),p=Math.max(1,Math.ceil((c-o)/.8));for(let d=1;d<p;d++){const h=o+(c-o)*d/p;a.push([u[0]+Math.cos(h)*12*1.4,u[1]+Math.sin(h)*12*1.4]),l.push(!1)}return l.push(!1),$u(a)&&ai(a)>0?{pts:a,real:l}:null}function p_(n,e){const t=n.length,i=[...Array(t).keys()],s=[],r=(o,c)=>c===(o+1)%t?e[o]:!1;let a=0;for(;i.length>3&&a++<400;){let o=-1,c=-1;for(let u=0;u<i.length;u++){const p=n[i[(u+i.length-1)%i.length]],d=n[i[u]],h=n[i[(u+1)%i.length]],f=gi(p,d,h);if(f<=1e-12||i.some(m=>{const _=n[m];return _!==p&&_!==d&&_!==h&&gi(p,d,_)>=-1e-12&&gi(d,h,_)>=-1e-12&&gi(h,p,_)>=-1e-12}))continue;const v=Mi(p,d)+Mi(d,h)+Mi(h,p),g=f/(v*v);g>c&&(c=g,o=u)}if(o<0)return null;s.push([i[(o+i.length-1)%i.length],i[o],i[(o+1)%i.length]]),i.splice(o,1)}s.push(i.slice());let l=s;for(let o=!0;o;){o=!1;for(let c=0;c<l.length&&!o;c++)for(let u=c+1;u<l.length&&!o;u++)for(let p=0;p<l[c].length&&!o;p++){const d=l[c][p],h=l[c][(p+1)%l[c].length],f=l[u].findIndex((_,R)=>_===h&&l[u][(R+1)%l[u].length]===d);if(f<0)continue;const v=[...l[c].slice(p+1),...l[c].slice(0,p+1)],g=[...l[u].slice(f+1),...l[u].slice(0,f+1)],m=[...v.slice(0,-1),...g.slice(0,-1)];m.every((_,R)=>gi(n[_],n[m[(R+1)%m.length]],n[m[(R+2)%m.length]])>-1e-9)&&(l=l.filter((_,R)=>R!==c&&R!==u),l.push(m),o=!0)}}return l.map(o=>({pts:o.map(c=>n[c]),real:o.map((c,u)=>r(c,o[(u+1)%o.length]))}))}function Lo(n,e){const t=En(Math.abs(n[1])<.9?pn([0,1,0],n):[1,0,0]),i=pn(n,t);return{n,o:e,e:t,g:i,to2:s=>{const r=kt(s,e);return[dt(r,t),dt(r,i)]},to3:s=>[0,1,2].map(r=>e[r]+t[r]*s[0]+i[r]*s[1])}}function m_(n,e,t,i){const s=(o,c)=>{const u=En(kt(e.to3(c),e.to3(o))),p=pn(u,e.n);return{n:p,w:dt(p,e.to3(o))}},r=[];let a=n.slice();for(const o of t){const c=o.pts.map((p,d)=>({...s(p,o.pts[(d+1)%o.pts.length]),real:o.real[d]}));for(const p of n){let d=p;for(const h of c)if(d=ms(d,h.n,h.w-(h.real?i/2:0),1,h.real),!d)break;d&&r.push(d)}const u=[];for(const p of a){let d=p;for(const h of c){const f=h.w+(h.real?i/2:0),v=ms(d,h.n,f,-1,h.real);if(v&&u.push(v),d=ms(d,h.n,f,1,h.real),!d)break}}a=u}const l=o=>o.filter(c=>pi(c).volume>2e-7);return{inside:l(r),outside:l(a)}}function g_(n,e){kr(n.faces.length);for(const t of n.faces)for(const i of e.faces){if(dt(t.n,i.n)>-.9999||Math.abs(t.w+i.w)>2e-4)continue;const s=Lo(t.n,t.v[0]);let r=t.v.map(l=>s.to2(l)),a=i.v.map(l=>s.to2(l));ai(r)<0&&r.reverse(),ai(a)<0&&a.reverse();for(let l=0;l<a.length&&r.length;l++){const o=a[l],c=a[(l+1)%a.length],u=[];for(let p=0;p<r.length;p++){const d=r[p],h=r[(p+1)%r.length],f=gi(o,c,d),v=gi(o,c,h);if(f>=0&&u.push(d),f>0&&v<0||f<0&&v>0){const g=f/(f-v);u.push([d[0]+(h[0]-d[0])*g,d[1]+(h[1]-d[1])*g])}}r=u}if(r.length>=3&&Math.abs(ai(r))>2e-6)return!0}return!1}function po(n){const e=n.map((i,s)=>s),t=[];for(;e.length;){const i=[e.shift()];for(let s=0;s<i.length;s++)for(let r=e.length-1;r>=0;r--)g_(n[i[s]],n[e[r]])&&i.push(...e.splice(r,1));t.push(i.map(s=>n[s]))}return t}function Ef(n,e,t,i){const s=[];for(const r of n){const a=r.faces.find(u=>dt(u.n,e.n)>.999&&Math.abs(u.w-dt(e.n,e.o))<.01);if(!a)continue;let l=a.v.map(u=>e.to2(u));ai(l)<0&&(l=l.reverse());let o=0,c=1;for(let u=0;u<l.length;u++){const p=l[u],d=l[(u+1)%l.length],h=gi(p,d,t),f=gi(p,d,i);if(h<0&&f<0){o=2;break}h<0?o=Math.max(o,h/(h-f)):f<0&&(c=Math.min(c,h/(h-f)))}if(c-o>1e-4){const u=p=>e.to3([t[0]+(i[0]-t[0])*p,t[1]+(i[1]-t[1])*p]);s.push([u(o),u(c)])}}return s}const zt={work:6e4,ms:60,cellsMax:48,cap:40,minSpan:.04,minVol:2e-5,kerf:.008,sweep:1.6,beam:.03,near:.1,need:.4,face:.4,deep:2.5,grace:.4,weld:.9,weldGap:.03,weldReach:.3,wallReach:.14,snap:.4,calm:20},Rl=new Set(["top","leg","plank","sheet","crate","crateL","plate","leaf","side","pallet","rod","door","pad","tube","tray"]),x_={hinge:.075,rivet:.06,weld:.09,dowel:.065,seam:.045,rail:.1,clip:.06,mount:.07},Ki=(n,e)=>[n[0]+e[0],n[1]+e[1],n[2]+e[2]],di=(n,e)=>[n[0]*e,n[1]*e,n[2]*e],_i=n=>[-n[0],-n[1],-n[2],n[3]],dn=(n,e)=>Wt(_i(n.q),kt(e,n.p)),Qt=(n,e)=>Ki(Wt(n.q,e),n.p),Qn=n=>+n.toFixed(5),Cl=n=>n.cells?{c:n.cells.map(Cl)}:n.faces.map(e=>[e.n.map(Qn),Qn(e.w),e.cut?1:0,e.v.map(t=>t.map(Qn))]),Pl=n=>n.c?Ni(n.c.map(Pl)):{faces:n.map(([e,t,i,s])=>({n:e,w:t,cut:!!i,v:s}))};function v_({S:n,C:e,phys:t,ev:i,mut:s,cap:r=zt.cap,onSplit:a=()=>{},onMerge:l=()=>{},onBorn:o=()=>{},onWeld:c=()=>{}}){Object.assign(n,{pieces:new Map,merged:[],split:[],splitN:0,weldN:0,stroke:null,weld:null,beads:new Map});const u=t.kind==="rapier",p=new Map,d=E=>{const P=n.pieces.get(E);if(P)return P.poly;if(!p.has(E)){const H=t.half(E),ne=e.parts.find(U=>U.id===E);p.set(E,ne&&ne.poly?ne.poly:ne&&ne.shape==="cyl"?Wu(H[0],H[1]):_f(H))}return p.get(E)},h=E=>n.pieces.get(E)||null,f=E=>u&&t.has(E)&&E!==n.held&&Rl.has(n.partKind.get(E)),v=E=>E.la&&t.has(E.a)?Qt(t.pose(E.a),E.la):E.at,g=E=>[...n.joints.values()].filter(P=>P.a===E||P.b===E),m=E=>E.id.startsWith("weld:")?"seam":E.kind;function _(E){const P=n.beads.get(E.id);if(P&&t.has(P.a)){const H=t.pose(P.a);return P.pts.map(ne=>Qt(H,ne))}return[v(E)]}const R=(E,P)=>{let H=null,ne=1;for(const U of g(E)){if(U.kind==="hook")continue;const re=s.has("anyjoint")&&U.kind==="hinge"?9:x_[m(U)]||zt.near;for(const K of _(U)){const Z=jt(kt(K,P))/re;Z<ne&&(ne=Z,H=U)}}return H},S=(E,P)=>((!n.refused||n.t-n.refused.t>.8||n.refused.why!==P)&&i("cut_refused",{id:E,why:P}),n.refused={t:n.t,why:P,id:E},null),C=typeof performance<"u"?()=>performance.now():()=>Date.now();let D=!1,b=0;function I(E,P,H,ne){if(D)return H();D=!0;const U=C(),re=s.has("nocutcap");Tn.n=0,Tn.max=re?1/0:zt.work,Tn.until=re?1/0:U+zt.ms;try{if(s.has("cutfault")&&P!=="plan"&&P!=="weld"&&++b%7===0)throw new Error("проба: сбой в резе");return H()}catch(K){if(K&&K.heavy)return P!=="plan"&&P!=="weld"&&S(E,"сложно"),ne("сложно");if(s.has("nocutcatch"))throw K;return i("cut_error",{id:E,what:P,msg:String(K&&K.message||K).slice(0,160)}),typeof console<"u"&&console.warn("[freecut]",P,E,K),P!=="plan"&&P!=="weld"&&S(E,"сбой"),ne("сбой")}finally{D=!1;const K=C()-U;Tn.peak=Math.max(Tn.peak,Tn.n),n.work={what:P,id:E,n:Tn.n,ms:K},Tn.max=1/0,Tn.until=1/0}}const F=(E,P,H={})=>{n.last={what:E,id:P,t:n.t,...H,n:n.work?n.work.n:0,ms:n.work?+n.work.ms.toFixed(1):0}};function N(E){for(const P of g(E))t.unjoint(P.id),n.joints.delete(P.id),n.beads.delete(P.id);if(n.pieces.delete(E))for(const P of n.pieces.values())P.mate&&P.mate.id===E&&(P.mate=null);n.partKind.delete(E),n.partSm.delete(E),p.delete(E),n.stroke&&n.stroke.id===E&&(n.stroke=null)}function B(E){let P=0,H=null;for(const ne of E.faces)P+=ne.len,(!H||ne.len>H.len)&&(H=ne);return H&&H.len>=P*.7?H:null}function V(E){let P=kt(E.p1,E.p0);jt(P)<.02&&(P=E.right);const H=B(E),ne=H?di(H.n,-1):E.d,U=pn(P,ne),re=di(Ki(E.p0,E.p1),.5),K=jt(U)>1e-4?En(U):En(pn(E.right,ne)),Z=En(kt(P,di(ne,dt(P,ne))));return{n:K,w:dt(K,re),e:Z,d:ne}}function Q(E){const{n:P,w:H,e:ne,d:U}=V(E),re=d(E.id),K=ho(re,P,H,ne);if(!K||K[1]-K[0]<1e-4)return{ok:!1,cover:0};const Z=Math.min(dt(ne,E.p0),dt(ne,E.p1))-zt.beam,he=Math.max(dt(ne,E.p0),dt(ne,E.p1))+zt.beam,Te=K[1]-K[0],Fe=Ne=>Math.max(0,Math.min(1,(Math.min(he,Ne[1])-Math.max(Z,Ne[0]))/(Ne[1]-Ne[0])));let Ve=Fe(K);if(Ve>=zt.face)for(const Ne of E.ns){const ft=ho(re,P,H,ne,Ct=>dt(Ne,Ct.n)>.999);ft&&ft[1]-ft[0]>.02&&(Ve=Math.max(Ve,Fe(ft)))}const Me=ho(re,P,H,U),We=!!Me&&Me[1]-Me[0]>zt.deep*Te,je=$(E,re,ne,Z,he);return je&&!s.has("wholesec")?(Ve=Math.max(Ve,Fe(je.span)),{ok:Ve>=zt.need&&!We,cover:We?0:Ve,lim:je.many?{e:ne,a:je.span[0]-.004,b:je.span[1]+.004}:null}):{ok:Ve>=zt.need&&!We,cover:We?0:Ve}}function $(E,P,H,ne,U){const re=B(E);if(!re||!re.pts.length)return null;const K=Lo(re.n,re.pts[0]),Z=K.to2(E.p0),he=K.to2(E.p1),Te=Math.hypot(he[0]-Z[0],he[1]-Z[1]);if(Te<.02)return null;const Fe=[(he[0]-Z[0])/Te,(he[1]-Z[1])/Te],Ve=6,Me=[Z[0]-Fe[0]*Ve,Z[1]-Fe[1]*Ve],We=[he[0]+Fe[0]*Ve,he[1]+Fe[1]*Ve],je=Ef(Fn(P),K,Me,We).map(([Tt,Ke])=>{const Vt=dt(H,Tt),pt=dt(H,Ke);return Vt<pt?[Vt,pt]:[pt,Vt]}).sort((Tt,Ke)=>Tt[0]-Ke[0]),Ne=[];for(const Tt of je){const Ke=Ne[Ne.length-1];Ke&&Tt[0]<=Ke[1]+.003?Ke[1]=Math.max(Ke[1],Tt[1]):Ne.push(Tt.slice())}if(!Ne.length)return null;const ft=Tt=>Math.min(U,Tt[1])-Math.max(ne,Tt[0]),Ct=Ne.reduce((Tt,Ke)=>ft(Ke)>ft(Tt)?Ke:Tt);return ft(Ct)>0?{span:Ct,many:Ne.length>1}:null}const oe=E=>I(E.id,"plan",()=>de(E),P=>({kind:"line",ok:!1,cover:0,why:P,draw:[]}));function de(E){const P=d(E.id),H=Fn(P),ne=()=>{const pt=V(E),at=Q(E),Dt=at.lim?Ni(Fn(P).filter(Ft=>Le(Ft,pt.n,pt.w,at.lim))):P;return{kind:"line",ok:at.ok&&E.t>.15,cover:at.cover,n:pt.n,w:pt.w,lim:at.lim,why:"",draw:Jv(Dt,pt.n,pt.w).flatMap(Ft=>Ft.map((gn,Nn)=>[gn,Ft[(Nn+1)%Ft.length]]))}},U=B(E);if(!U||U.pts.length<3||s.has("oneplane"))return ne();const re=Lo(U.n,U.pts[0]),K=U.pts.map(re.to2),Z=d_(K);if(Z.kind==="line")return ne();const he=yf(P,re.n),Te=he[1]-he[0],Fe=pt=>pt.flatMap(([at,Dt])=>Ef(H,re,at,Dt));if(Z.kind==="bad")return{kind:"bad",ok:!1,cover:.3,why:"контур",F:re,draw:Fe(K.slice(1).map((pt,at)=>[K[at],pt]))};if(Z.kind==="loop"){const pt=Z.pts,at=pt.map((Ft,gn)=>[Ft,pt[(gn+1)%pt.length]]),Dt=Te<=ei.flat||s.has("deephole");return{kind:"loop",ok:Dt&&E.t>.15,cover:1,why:Dt?"":"объёмная",F:re,pts:pt,real:pt.map(()=>!0),draw:Fe(at)}}const Ve=h_(Z.pts),Me=Z.pts,We=Me.length,je=(pt,at)=>[at[0]+(at[0]-pt[0])/(Math.hypot(at[0]-pt[0],at[1]-pt[1])||1)*6,at[1]+(at[1]-pt[1])/(Math.hypot(at[0]-pt[0],at[1]-pt[1])||1)*6],Ne=Fe(Me.slice(1).map((pt,at)=>[Me[at],pt])),ft=Fe([[Me[0],je(Me[1],Me[0])],[Me[We-1],je(Me[We-2],Me[We-1])]]),Ct=pt=>pt.reduce((at,[Dt,Ft])=>at+jt(kt(Dt,Ft)),0),Tt=Ct(Ne),Ke=Ct(ft),Vt=Tt/(Tt+Ke||1);return{kind:"open",ok:!!Ve&&Vt>=zt.need&&E.t>.15,cover:Ve?Vt:.2,why:Ve?"":"контур",F:re,pts:Ve&&Ve.pts,real:Ve&&Ve.real,draw:[...Ne,...ft]}}function ce(E,P,H,ne){const U=t.pose(E.id),re=dn(U,E.at),K=dn(U,P);let Z=n.stroke;if(Z&&Z.id!==E.id&&n.firing&&t.has(Z.id)){if(Z.ok||Z.faces.reduce((We,je)=>We+je.len,0)>.1)return Z.seen=n.t,Z.prog;n.stroke=Z=null}Z&&(Z.id!==E.id||!n.firing&&n.t-Z.seen>zt.grace)&&(Ie(),Z=null),Z||(Z=n.stroke={id:E.id,p0:re,p1:re,d:Wt(_i(U.q),H),right:Wt(_i(U.q),En(pn(H,Math.abs(H[1])>.98?[1,0,0]:[0,1,0]))),t:0,cover:0,prog:0,path:[re],ns:[],faces:[],ok:!1});let he=null;if(E.n){const We=Wt(_i(U.q),E.n),je=dt(We,re);he=Z.faces.find(Ne=>dt(Ne.n,We)>.999&&Math.abs(Ne.w-je)<.01),he||(he={n:We,w:je,len:0,pts:[]},Z.faces.push(he)),Z.ns.some(Ne=>dt(Ne,We)>.999)||Z.ns.push(We)}Z.t+=ne,Z.seen=n.t;const Te=kt(re,Z.p1),Fe=jt(Te),Ve=Z.p1;if(Fe>1e-5&&(Z.p1=Ki(Z.p1,di(Te,Math.min(1,zt.sweep*ne/Fe)))),he){he.len+=jt(kt(Z.p1,Ve))+1e-6;const We=Ki(Z.p1,di(he.n,he.w-dt(he.n,Z.p1))),je=he.pts[he.pts.length-1];(!je||jt(kt(We,je))>.012)&&(he.pts.push(We),he.pts.length>400&&he.pts.shift())}jt(kt(Z.p1,Z.path[Z.path.length-1]))>.012&&Z.path.length<400&&(Z.path.push(Z.p1),Z.plan=null),Z.d=En(kt(di(Ki(Z.p0,Z.p1),.5),K));const Me=Z.plan&&Z.path.length>2&&Z.t>.4?Z.plan:Z.plan=oe(Z);return Z.ok=Me.ok,Z.cover=Me.cover,Z.why=Me.why,Z.kind=Me.kind,Z.prog=Math.min(1,Me.cover/zt.need,Z.t/.15),Z.path.length<=2&&(Z.plan=null),s.has("autocut")&&Z.ok&&Z.cover>.9&&Ie(),Z.prog}function Ie(){const E=n.stroke;if(n.stroke=null,!E||!t.has(E.id))return;const P=oe(E),H=P.pts?P.pts.length:2,ne=Fn(d(E.id)).length,U={line:"рез прямой",open:"рез ломаной",loop:"вырез",bad:"рез"}[P.kind]||"рез";if(!P.ok){P.why&&S(E.id,P.why),i("cut_short",{id:E.id,cover:+P.cover.toFixed(2),how:P.kind,why:P.why||""}),F(U,E.id,{pts:H,cells:ne,out:"мало"+(P.why?" ("+P.why+")":"")});return}const re=P.kind==="line"?ge(E.id,P.n,P.w,P.lim):ke(E.id,P.F,P.pts,P.real,P.kind);F(U,E.id,{pts:H,cells:ne,out:re?re.length+" куск.":"отказ «"+(n.refused&&n.refused.t===n.t&&n.refused.why||"?")+"»"})}function pe(){const E=n.stroke;if(!E||!t.has(E.id)||s.has("nopreview"))return null;const P=oe(E);return{id:E.id,ok:P.ok,kind:P.kind,n:P.n,w:P.w,plan:P.draw,F:P.F,pts:P.pts}}function Ae(){n.stroke&&(!t.has(n.stroke.id)||!n.firing&&n.t-n.stroke.seen>.05)&&Ie(),n.weld&&n.t-n.weld.seen>zt.grace&&(n.weld=null)}const ge=(E,P,H,ne=null)=>I(E,"split",()=>_e(E,P,H,ne),()=>null),Le=(E,P,H,ne)=>{const U=ho(E,En(P),H,ne.e);return!!U&&U[1]>ne.a&&U[0]<ne.b};function qe(E,P,H,ne){const U=En(P),re=zt.kerf/2,K=[],Z=[],he=[];for(const Me of d(E).cells){if(!Le(Me,U,H,ne)){he.push([Me,dt(U,pi(Me).center)-H<=0?0:1]);continue}const We=ms(Me,U,H-re,1),je=ms(Me,U,H+re,-1);We&&K.push([We,0]),je&&Z.push([je,1])}if(!K.length||!Z.length)return S(E,"мелко");const Te=[...K,...Z,...he],Fe=new Map(Te),Ve=po(Te.map(Me=>Me[0])).map(Me=>({poly:Ni(Me),side:Me.filter(We=>Fe.get(We)).length*2>Me.length?1:0}));return!s.has("nomin")&&Ve.some(Me=>pi(Me.poly).volume<zt.minVol)?S(E,"мелко"):Be(E,Ve,Ve.length>1?Me=>dt(U,Me)-H<=0?0:1:null)}function _e(E,P,H,ne){if(!f(E))return null;if(ne&&d(E).cells)return qe(E,P,H,ne);const U=Yv(d(E),P,H,zt.kerf);if(!U)return S(E,"мелко");if(!s.has("nomin"))for(const Z of U){const he=yf(Z,En(P));if(pi(Z).volume<zt.minVol||he[1]-he[0]<zt.minSpan)return S(E,"мелко")}const re=En(P),K=U.flatMap((Z,he)=>(Z.cells?po(Z.cells).map(Ni):[Z]).map(Te=>({poly:Te,side:he})));return Be(E,K,Z=>dt(re,Z)-H<=0?0:1)}const ke=(E,P,H,ne,U)=>I(E,"contour",()=>Oe(E,P,H,ne,U),()=>null);function Oe(E,P,H,ne,U){if(!f(E))return null;const re=p_(H,ne);if(!re)return S(E,"контур");const K=Fn(d(E)),Z=m_(K,P,re,zt.kerf);if(!Z.inside.length||!Z.outside.length)return S(E,"мелко");const he=[...po(Z.outside).map(Me=>({poly:Ni(Me),side:0})),...po(Z.inside).map(Me=>({poly:Ni(Me),side:1}))],Te=he.filter(Me=>pi(Me.poly).volume<zt.minVol),Fe=he.filter(Me=>!Te.includes(Me));if(Fe.length<2||!Fe.some(Me=>Me.side)||!Fe.some(Me=>!Me.side))return S(E,"мелко");const Ve=Be(E,Fe,null,U);if(Ve&&U==="loop")for(let Me=0;Me<Ve.length;Me++)Fe[Me].side&&!g(Ve[Me]).length&&t.velocity(Ve[Me],di(Wt(t.pose(Ve[Me]).q,P.n),.9));return Ve}const Ge=()=>[...n.pieces.values()].reduce((E,P)=>E+Fn(P.poly).length,0);function Be(E,P,H,ne="line"){const U=n.pieces.get(E),re=U?Fn(U.poly).length:0,K=P.reduce((Ke,Vt)=>Ke+Fn(Vt.poly).length,0)-re;if(!s.has("nocutcap")&&P.some(Ke=>Fn(Ke.poly).length>zt.cellsMax))return S(E,"сложно");if(!s.has("nocap")){for(;Ge()+K>r&&tt(E););if(Ge()+K>r)return S(E,"много кусков")}if(n.carry&&n.carry.has(E))return S(E,"в руках");const Z=P.map(Ke=>pi(Ke.poly)),he=Z.reduce((Ke,Vt)=>Ke+Vt.volume,0),Te=t.pose(E),Fe=t.mass(E)||1,Ve=n.partSm.get(E)??.3,Me=n.partKind.get(E),We=U||{root:E,mat:(e.parts.find(Ke=>Ke.id===E)||{}).mat||"steel",prefab:(e.parts.find(Ke=>Ke.id===E)||{}).prefab||""},je=g(E).map(Ke=>({j:Ke,l:dn(Te,v(Ke)),at:v(Ke)}));for(const{j:Ke}of je)t.unjoint(Ke.id);t.remove(E),U?n.pieces.delete(E):n.split.push(E),n.partKind.delete(E),n.partSm.delete(E),p.delete(E);for(const Ke of n.pieces.values())Ke.mate&&Ke.mate.id===E&&(Ke.mate=null);const Ne=P.map((Ke,Vt)=>{const pt=Z[Vt].center,at=`${We.root}#${++n.splitN}`,Dt=wl(Ke.poly,pt),Ft=Qt(Te,pt),gn=Z[Vt].volume/he,Nn={id:at,root:We.root,prefab:We.prefab,mat:We.mat,kind:Me,poly:Dt,born:n.t,mass:Fe*gn,sm:Math.max(.05,Ve*gn),mate:null};return Qe(Nn,Ft,Te.q),n.pieces.set(at,Nn),{id:at,p:Ft,c:pt,side:Ke.side,poly:Ke.poly}}),ft=Ne.find(Ke=>Ke.side===0),Ct=Ne.find(Ke=>Ke.side===1);if(ft&&Ct)for(const[Ke,Vt]of[[ft,Ct],[Ct,ft]])n.pieces.get(Ke.id).mate={id:Vt.id,p:kt(Ke.c,Vt.c),q:[0,0,0,1]};const Tt=Ke=>{const Vt=H?Ne.filter(at=>at.side===H(Ke)):Ne,pt=at=>Vu(Ke,at.poly);return Vt.reduce((at,Dt)=>pt(Dt)<pt(at)?Dt:at,Vt[0]||Ne[0])};for(const{j:Ke,l:Vt,at:pt}of je){if(s.has("noreassign")){n.joints.delete(Ke.id),n.beads.delete(Ke.id);continue}const at=Tt(Vt),Dt={...Ke,a:Ke.a===E?at.id:Ke.a,b:Ke.b===E?at.id:Ke.b,at:pt};Dt.la=dn(t.pose(Dt.a),pt),n.joints.set(Ke.id,Dt),t.joint(Ke.id,Dt.a,Dt.b,pt,m(Dt)!=="seam");const Ft=n.beads.get(Ke.id);Ft&&Ft.a===E&&(Ft.pts=Ft.pts.map(gn=>dn(t.pose(at.id),Qt(Te,gn))),Ft.a=at.id)}for(const Ke of Ne)g(Ke.id).length||o(Ke.id),t.velocity(Ke.id,Te.v);return a(E,Tt,Te,Ne.map(Ke=>Ke.id)),i("split",{id:E,into:Ne.map(Ke=>Ke.id),how:ne,pieces:n.pieces.size,cells:Ge()}),Ne.map(Ke=>Ke.id)}function Qe(E,P,H){t.addPart({id:E.id,shape:"hull",poly:E.poly,h:Kv(E.poly),p:P,q:H,mass:E.mass},{}),t.release(E.id),n.partKind.set(E.id,E.kind),n.partSm.set(E.id,E.sm)}function Mt(E,P,H,ne,U){let re=0;for(const K of P){for(;Ge()+1>r&&tt(""););if(Ge()+1>r)break;const Z=pi(K),he=Z.center,Te=`${U}#${++n.splitN}`,Fe={id:Te,root:U,prefab:E,mat:"glass",kind:"shard",poly:wl(K,he),born:n.t,mass:.06,sm:.05,mate:null};Qe(Fe,Qt(H,he),H.q),n.pieces.set(Te,Fe);const Ve=Wt(H.q,he),Me=jt(Ve)||1;t.velocity(Te,[0,1,2].map(We=>ne[We]*.25+Ve[We]/Me*.7+(We===1?.5:0))),re++}return re}const Xe=(E,P)=>(t.has(E)||s.has("keepgone"))&&E!==n.held&&!g(E).length&&n.t-n.pieces.get(E).born>=P&&t.pose(E).sleep&&t.restsOnStatic(E);function tt(E,P=0){for(const H of[...n.pieces.values()].sort((ne,U)=>ne.born-U.born))if(H.id!==E&&Xe(H.id,P))return ut(H.id),!0;return!1}function ut(E){const P=n.pieces.get(E),H=t.pose(E);t.freeze(E),n.pieces.delete(E),n.partKind.delete(E),n.partSm.delete(E);for(const ne of n.pieces.values())ne.mate&&ne.mate.id===E&&(ne.mate=null);n.merged.push({id:E,root:P.root,mat:P.mat,poly:P.poly,p:H.p,q:H.q,prefab:P.prefab,kind:P.kind,mass:P.mass,sm:P.sm}),l(E,H),i("merged",{id:E,pieces:n.pieces.size,merged:n.merged.length})}function et(E){const P=n.merged.findIndex(U=>U.id===E);if(P<0||s.has("nothaw"))return!1;for(;Ge()+1>r&&tt(E););const H=n.merged.splice(P,1)[0];t.thaw(E);const ne={id:E,root:H.root,prefab:H.prefab||"",mat:H.mat,kind:H.kind||"crate",poly:H.poly,born:n.t,mass:H.mass||Math.max(.1,pi(H.poly).volume*300),sm:H.sm??.3,mate:null};return Qe(ne,H.p,H.q),n.pieces.set(E,ne),i("thawed",{id:E}),!0}let Rt=0;function bt(){if(!(n.t<Rt)){if(Rt=n.t+1,!s.has("keepgone"))for(const E of[...n.pieces.keys()])t.has(E)||N(E);Ge()>r*.75&&tt("",zt.calm)}}function Lt(E,P,H,ne,U){if(E.cells||H.cells){let Z={gap:9,at:U};for(const he of Fn(E))for(const Te of Fn(H)){const Fe=Lt(he,P,Te,ne,U);(Fe.gap<Z.gap-1e-4||Fe.gap<zt.weldGap&&jt(kt(Fe.at,U))<jt(kt(Z.at,U)))&&(Z=Fe)}return Z}let re=U,K=U;for(let Z=0;Z<24;Z++){K=Qt(ne,El(H,dn(ne,re)));const he=Qt(P,El(E,dn(P,K))),Te=jt(kt(he,re));if(re=he,Z&&Te<1e-5)break}return{gap:jt(kt(re,K)),at:di(Ki(re,K),.5)}}const mt=[0,0,0,1],Ot=new Map,Ue=E=>(Ot.has(E.id)||Ot.set(E.id,{poly:_f([(E.x1-E.x0)/2,(E.y1-E.y0)/2,(E.z1-E.z0)/2]),s:{p:[(E.x0+E.x1)/2,(E.y0+E.y1)/2,(E.z0+E.z1)/2],q:mt}}),Ot.get(E.id)),He=E=>E.kind!=="glass"&&E.kind!=="door"&&E.kind!=="note",rt=E=>E[1]<.06&&e.hatches.some(P=>E[0]>P.x0-.05&&E[0]<P.x1+.05&&E[2]>P.z0-.05&&E[2]<P.z1+.05),it=(E,P)=>s.has("weldall")?"":E.kind==="glass"?"окно":E.kind==="door"?"дверь":E.kind==="floor"&&rt(P)?"люк":"",te=(E,P,H)=>E.x0>P.x1+H||P.x0>E.x1+H||E.y0>P.y1+H||P.y0>E.y1+H||E.z0>P.z1+H||P.z0>E.z1+H;function ct(E,P){const H=[],ne=d(E),U=t.pose(E),re=t.aabb(E),K=zt.weldGap,Z=(he,Te,Fe,Ve=null)=>{const Me=Lt(ne,U,Te,Fe,P);Me.gap<=K&&H.push({with:he,at:Me.at,gap:Me.gap,d:jt(kt(Me.at,P)),box:Ve,no:Ve?it(Ve,Me.at):""})};for(const he of t.bodies())he!==E&&!te(re,t.aabb(he),K)&&Z(he,d(he),t.pose(he));for(const he of e.statics)if(he.kind!=="note"&&!(he.kind==="glass"&&(n.windows.get(he.id)||{}).broken)&&!te(re,he,K)){const Te=Ue(he);Z("world",Te.poly,Te.s,he)}for(const he of n.merged)te(re,st(he),K)||Z("world",he.poly,he);return H.sort((he,Te)=>he.d-Te.d)}const st=E=>{if(!E.bb){const P={x0:1e9,x1:-1e9,y0:1e9,y1:-1e9,z0:1e9,z1:-1e9};for(const H of E.poly.faces)for(const ne of H.v){const U=Qt(E,ne);P.x0=Math.min(P.x0,U[0]),P.x1=Math.max(P.x1,U[0]),P.y0=Math.min(P.y0,U[1]),P.y1=Math.max(P.y1,U[1]),P.z0=Math.min(P.z0,U[2]),P.z1=Math.max(P.z1,U[2])}E.bb=P}return E.bb},Y=E=>u&&t.has(E)&&n.partKind.get(E)!=="shard"&&(!s.has("weldkind")||Rl.has(n.partKind.get(E))),W=(E,P)=>[E,P].sort().join("|"),xe=(E,P,H)=>[...n.joints.values()].find(ne=>W(ne.a,ne.b)===W(E,P)&&(P!=="world"||Math.min(..._(ne).concat([v(ne)]).map(U=>jt(kt(U,H))))<.15))||null,ye=E=>I(E&&E.id||n.held||"","weld",()=>we(E),P=>({why:P}));function we(E){if(s.has("weldnone"))return{why:"не варится"};if(n.held&&!n.drag&&u&&t.has(n.held)){const Z=t.pose(n.held).p,he=n.ray,Te=he?Math.max(0,dt(kt(Z,he.o),he.d)):0,Fe=he?Ki(he.o,di(he.d,Te)):Z,Ve=Ne=>he?jt(kt(Ne.at,Ki(he.o,di(he.d,Math.max(0,dt(kt(Ne.at,he.o),he.d)))))):Ne.d,Me=ct(n.held,Fe).filter(Ne=>!n.carry.has(Ne.with)).sort((Ne,ft)=>Ve(Ne)-Ve(ft)),We=Me.filter(Ne=>!Ne.no);if(!Me.length)return{why:"прижми"};if(!We.length)return{why:Me[0].no};const je=We[0];return{id:n.held,with:je.with,at:je.at,box:je.box,why:""}}if(!E)return{why:""};if((E.kind==="bolt"||E.kind==="plate")&&E.box&&!E.seated&&(E={...E,kind:"static"}),E.kind==="bolt"||E.kind==="cable"||E.kind==="plate"&&!E.seated)return{why:"не тот режим"};if(E.kind==="hatch")return{why:"люк"};if(!u||E.kind==="note"||E.kind==="plate")return{why:"не варится"};let P=E.kind==="part"?E.id:null,H=null;if(E.kind==="static"){if(E.box&&!He(E.box))return{why:E.box.kind==="glass"?"окно":E.box.kind==="door"?"дверь":"не варится"};for(const Z of t.bodies()){const he=t.aabb(Z);if(te(he,{x0:E.at[0],x1:E.at[0],y0:E.at[1],y1:E.at[1],z0:E.at[2],z1:E.at[2]},zt.wallReach))continue;const Te=ct(Z,E.at).filter(Fe=>Fe.with==="world"&&Fe.d<zt.wallReach);Te.length&&(!H||Te[0].d<H[0].d)&&(H=Te,P=Z)}if(!P)return{why:"нет касания"}}else H=ct(P,E.at);if(!Y(P))return{why:"не варится"};if(s.has("weldthin")&&(H=H.filter(Z=>Z.d<.04)),!H.length)return{why:"нет касания"};const ne=H.filter(Z=>Z.d<=(Z.with==="world"?zt.wallReach:zt.weldReach)),U=ne.filter(Z=>!Z.no);if(!U.length&&(ne.length||H.length&&H.every(Z=>Z.no)))return{why:(ne[0]||H[0]).no};if(H=H.filter(Z=>!Z.no),!U.length)return{why:H.length&&H.some(Z=>Z.with!=="world")||H.length&&H[0].d<.6?"далеко от стыка":"нет касания"};const re=U.filter(Z=>!xe(P,Z.with,Z.at)),K=re.find(Z=>Z.with!=="world"&&Y(Z.with))||re[0];if(!K){const Z=xe(P,U[0].with,U[0].at);return{id:P,with:U[0].with,done:!0,why:m(Z)==="seam"?"сварено":"держится"}}return{id:P,with:K.with,at:K.at,box:K.box,why:""}}function k(E,P){const H=ye(E);if(H.why)return H;const ne=W(H.id,H.with);let U=n.weld;(!U||U.key!==ne||n.t-U.seen>zt.grace)&&(U=n.weld={key:ne,a:H.id,b:H.with,prog:0,path:[]}),U.seen=n.t,U.prog+=P/zt.weld,U.at=H.at;const re=t.pose(U.a),K=dn(re,E.kind==="part"&&E.id===U.a?E.at:H.at);if((!U.path.length||jt(kt(K,U.path[U.path.length-1]))>.012)&&U.path.length<32&&U.path.push(K),U.prog<1)return{prog:U.prog,with:H.with};n.weld=null,c(U.a,U.b);const Z=`weld:${++n.weldN}`,he=t.pose(U.a),Te={id:Z,prefab:"",a:U.a,b:U.b,at:U.at,la:dn(he,U.at),strength:.9,kind:"seam"};return n.joints.set(Z,Te),n.beads.set(Z,{a:U.a,pts:U.path}),s.has("weldfake")||t.joint(Z,Te.a,Te.b,Te.at,!1),i("weld",{id:Z,a:Te.a,b:Te.b}),F("сварка",Te.a,{pts:U.path.length,out:"шов с "+(Te.b==="world"?"миром":Te.b)}),{prog:1,with:H.with,id:Z}}function A(E){const P=new Set([E]),H=[E],ne={ids:[],mass:0,world:0,bolts:0,seams:0,piece:!1,js:new Set};for(;H.length;){const U=H.pop();ne.ids.push(U),ne.mass+=t.mass(U)||0,ne.piece=ne.piece||n.pieces.has(U);for(const re of g(U)){ne.js.add(re);for(const K of[re.a,re.b])K!=="world"&&!P.has(K)&&(P.add(K),H.push(K))}}for(const U of ne.js)U.b==="world"&&ne.world++,m(U)==="seam"?ne.seams++:ne.bolts++;return ne}function ee(E){const P=n.pieces.get(E),H=P&&P.mate;if(!H||!t.has(H.id)||g(E).length)return null;const ne=t.pose(H.id),U=t.pose(E),re=Qt(ne,H.p),K=si(ne.q,H.q);return jt(kt(re,U.p))>zt.snap||Math.min(...P.poly.faces.flatMap(he=>he.v.map(Te=>Qt({p:re,q:K},Te)[1])))<-.03?null:{p:re,q:K}}const Ee=()=>({split:n.split.slice(),splitN:n.splitN,weldN:n.weldN,pieces:[...n.pieces.values()].map(E=>({id:E.id,root:E.root,prefab:E.prefab,mat:E.mat,kind:E.kind,mass:Qn(E.mass),sm:Qn(E.sm),mate:E.mate,poly:Cl(E.poly)})),merged:n.merged.map(E=>({id:E.id,root:E.root,mat:E.mat,prefab:E.prefab,kind:E.kind,mass:Qn(E.mass||0),sm:Qn(E.sm||.3),p:E.p.map(Qn),q:E.q.map(Qn),poly:Cl(E.poly)})),joints:[...n.joints.values()].filter(E=>E.id.startsWith("weld:")||E.id.startsWith("mount:")||n.pieces.has(E.a)||n.pieces.has(E.b)).map(E=>({id:E.id,prefab:E.prefab,a:E.a,b:E.b,la:E.la.map(Qn),strength:E.strength,kind:E.kind})),beads:[...n.beads].map(([E,P])=>[E,P.a,P.pts.map(H=>H.map(Qn))])});function Se(E){if(E){for(const P of E.joints)n.joints.has(P.id)&&(t.unjoint(P.id),n.joints.delete(P.id));for(const P of E.split){for(const H of g(P))t.unjoint(H.id),n.joints.delete(H.id);t.has(P)&&t.remove(P),n.partKind.delete(P),n.partSm.delete(P)}n.split=E.split.slice(),n.splitN=E.splitN,n.weldN=E.weldN;for(const P of E.pieces){const H={...P,poly:Pl(P.poly),born:0};Qe(H,[0,5,0],[0,0,0,1]),n.pieces.set(H.id,H)}for(const P of E.merged){const H={...P,poly:Pl(P.poly)};t.addFrozen(H),n.merged.push(H)}}}function ze(E){if(E){for(const P of E.joints){if(!t.has(P.a)||P.b!=="world"&&!t.has(P.b))continue;const H=Qt(t.pose(P.a),P.la);n.joints.set(P.id,{...P,at:H}),t.joint(P.id,P.a,P.b,H,m(P)!=="seam")}for(const[P,H,ne]of E.beads)n.joints.has(P)&&n.beads.set(P,{a:H,pts:ne})}}return{can:u,cap:r,forget:N,note:F,polyOf:d,pieceOf:h,canSplit:f,canWeld:Y,worldAt:v,jointsOf:g,jointKind:m,spots:_,nearJoint:R,stroke:ce,finish:Ie,preview:pe,plan:oe,addShards:Mt,refreshStatics:()=>Ot.clear(),idle:Ae,splitPart:ge,cutContour:ke,cellCount:Ge,holeAt:(E,P,H,ne)=>ke(E,Lo(P,H),ne,ne.map(()=>!0),"loop"),merge:ut,mergeOldest:tt,thaw:et,calm:bt,weld:k,weldInfo:ye,assembly:A,snapPose:ee,snapshot:Ee,restoreBodies:Se,restoreJoints:ze}}const __=[.105,.15,.006],y_=.005,M_={"+x":[1,0,0],"-x":[-1,0,0],"+z":[0,0,1],"-z":[0,0,-1]};function Tf(n,e=[0,1,0]){const t=e[0]*n[0]+e[1]*n[1]+e[2]*n[2];let i=[e[0]-n[0]*t,e[1]-n[1]*t,e[2]-n[2]*t];const s=Math.hypot(...i)||1;i=i.map(c=>c/s);const a=[[i[1]*n[2]-i[2]*n[1],i[2]*n[0]-i[0]*n[2],i[0]*n[1]-i[1]*n[0]],i,n],l=a[0][0]+a[1][1]+a[2][2];let o;if(l>0){const c=Math.sqrt(l+1)*2;o=[(a[1][2]-a[2][1])/c,(a[2][0]-a[0][2])/c,(a[0][1]-a[1][0])/c,c/4]}else if(a[0][0]>a[1][1]&&a[0][0]>a[2][2]){const c=Math.sqrt(1+a[0][0]-a[1][1]-a[2][2])*2;o=[c/4,(a[1][0]+a[0][1])/c,(a[2][0]+a[0][2])/c,(a[1][2]-a[2][1])/c]}else if(a[1][1]>a[2][2]){const c=Math.sqrt(1+a[1][1]-a[0][0]-a[2][2])*2;o=[(a[1][0]+a[0][1])/c,c/4,(a[2][1]+a[1][2])/c,(a[2][0]-a[0][2])/c]}else{const c=Math.sqrt(1+a[2][2]-a[0][0]-a[1][1])*2;o=[(a[2][0]+a[0][2])/c,(a[2][1]+a[1][2])/c,c/4,(a[0][1]-a[1][0])/c]}return o}function b_({S:n,C:e,phys:t,ev:i,mut:s}){n.notes=new Map,n.noteHeld=null;for(const u of e.statics)if(u.kind==="note"){const p=M_[cs[e.prefabOf[u.prefab].wall]],d=[(u.x0+u.x1)/2,(u.y0+u.y1)/2,(u.z0+u.z1)/2];n.notes.set(u.prefab,{id:u.prefab,on:"world",p:[d[0]+p[0]*.009,d[1],d[2]+p[2]*.009],q:Tf(p)})}function r(u){const p=n.notes.get(u);if(!p||n.noteHeld===u)return null;if(p.on==="world")return{p:p.p,q:p.q};const d=t.pose(p.on);return d?{p:Qt(d,p.p),q:si(d.q,p.q)}:null}function a(u){return!n.notes.has(u)||n.noteHeld?!1:(n.noteHeld=u,i("note_take",{id:u}),!0)}function l(u,p){const d=n.noteHeld;if(!d||!u||!u.at||!u.n||s.has("noteloose"))return!1;const h=Math.abs(u.n[1])>.8?[p[0],0,p[2]]:[0,1,0],f=[0,1,2].map(_=>u.at[_]+u.n[_]*y_),v=Tf(u.n,h),g=u.kind==="part"?u.id:null,m=g&&t.pose(g);return n.notes.set(d,m?{id:d,on:g,p:dn(m,f),q:si(_i(m.q),v)}:{id:d,on:"world",p:f,q:v}),n.noteHeld=null,i("note_stick",{id:d,on:g||u.kind+":"+u.id}),!0}function o(u,p,d){for(const h of n.notes.values())if(h.on===u){const f=Qt(d,h.p),v=si(d.q,h.q),g=p(h.p),m=t.pose(g.id);Object.assign(h,{on:g.id,p:dn(m,f),q:si(_i(m.q),v)})}}function c(u,p){for(const d of n.notes.values())d.on===u&&Object.assign(d,{on:"world",p:Qt(p,d.p),q:si(p.q,d.q)})}return{pose:r,take:a,stick:l,split:o,toFixed:c,ids:()=>[...n.notes.keys()],snapshot:()=>[...n.notes.values()].map(u=>({id:u.id,on:u.on,p:u.p.slice(),q:u.q.slice()})),restore(u){for(const p of u||[])n.notes.set(p.id,{...p})}}}const pr={crateL:1.9,pallet:1.7,crate:.65,tank:.25,leg:.1,top:.6,leaf:.3,plate:.15,debris:.1,plank:.45,sheet:.4,side:.45,door:1.5,monitor:.35,pad:.1,tube:.2,tray:.2,jbox:.25,shard:.05},Ut={reach:2.3,cutRange:2.6,blast:14,cover:.15,pull:40,eject:.45,legKick:1.6,pullMin:3,hatchBurn:.7,light:.3,push:2.4,cableCut:.6,doorTime:.6,cabTime:.45,cabAngle:1.85,body:80,seam:320,arm:.5,impact:5,life:.05,strain:.75,lift:18,drag:1.5,dragForce:700,dragFar:2.4,aimCone:.026},S_={safe:2.6,perM:22,stun:.35,stunMax:2.5,regen:12,wait:5},w_=.05,Af=Math.PI/2,Bs=(n,e)=>Math.hypot(n[0]-e[0],n[1]-e[1],n[2]-e[2]),Rf=n=>[0,Math.sin(n/2),0,Math.cos(n/2)];function Cf(n,e,t,i,s){const r=[-i[0],-i[1],-i[2],i[3]],a=Wt(r,[n[0]-t[0],n[1]-t[1],n[2]-t[2]]),l=Wt(r,e);let o=0,c=1e9;for(let u=0;u<3;u++){if(Math.abs(l[u])<1e-9){if(a[u]<-s[u]||a[u]>s[u])return null;continue}let p=(-s[u]-a[u])/l[u],d=(s[u]-a[u])/l[u];if(p>d&&([p,d]=[d,p]),o=Math.max(o,p),c=Math.min(c,d),o>c)return null}return o>1e-4?o:null}function Pf(n,e){const t=[],i=(u,p,d,h,f,v)=>{p-u>1e-4&&h-d>1e-4&&v-f>1e-4&&t.push({...n,x0:u,x1:p,y0:d,y1:h,z0:f,z1:v})},s=Math.max(n.x0,e.x0),r=Math.min(n.x1,e.x1),a=Math.max(n.y0,e.y0),l=Math.min(n.y1,e.y1),o=Math.max(n.z0,e.z0),c=Math.min(n.z1,e.z1);return s>=r||a>=l||o>=c?[n]:(i(n.x0,s,n.y0,n.y1,n.z0,n.z1),i(r,n.x1,n.y0,n.y1,n.z0,n.z1),i(s,r,n.y0,n.y1,n.z0,o),i(s,r,n.y0,n.y1,c,n.z1),i(s,r,n.y0,a,o,c),i(s,r,l,n.y1,o,c),t)}const Pa=(n,e,t,i)=>{const s=[n[0]-t[0],n[1]-t[1],n[2]-t[2]],r=s[0]*e[0]+s[1]*e[1]+s[2]*e[2],a=s[0]**2+s[1]**2+s[2]**2-i*i;if(a>0&&r>0)return null;const l=r*r-a;if(l<0)return null;const o=-r-Math.sqrt(l);return o>0?o:.001};function E_(n,e,t,{log:i=()=>{},mut:s=new Set,pieces:r=0,seam:a=0,fall:l=null}={}){const o={t:0,joints:new Map,cutProg:new Map,held:null,heldAt:0,opens:new Map,doors:new Map,windows:new Map,tanks:new Map,cablesCut:new Set,breakers:new Map,p:1,kicks:[],removed:[],burned:[],carry:new Set,drag:!1,slide:new Map,anchored:new Set,sparks:[],strain:null,hp:100,hurtT:9,stun:0,peak:null,exit:!1,leaf:new Map,hatchOpen:new Map,plates:new Map,events:[],evN:0,deaths:0,flash:0,ejected:[],partKind:new Map,partSm:new Map},c=(x,w={})=>{const q={t:+o.t.toFixed(2),kind:x,...w};return o.events.push(q),o.evN++,o.events.length>400&&o.events.shift(),i(q),q};if(t.kind==="rapier"&&!n.doorBodies){n.doorBodies=!0;for(const x of n.doors)if(x.kind==="slide"){const w=x.box,q=[(w.x1-w.x0)/2,(w.y1-w.y0)/2,(w.z1-w.z0)/2].map((T,X)=>T-(X===1?.006:.004)),y=[(w.x0+w.x1)/2,(w.y0+w.y1)/2,(w.z0+w.z1)/2];n.parts.push({id:w.id,prefab:x.id,kind:"door",shape:"box",h:q,p:y,yaw:0,mass:40,free:!1,mat:"steelDark"});for(const[T,X]of[-1,1].entries())n.joints.push({id:`${x.id}.rail${T}`,prefab:x.id,a:w.id,b:"world",at:x.along==="z"?[y[0],w.y1-.06,y[2]+X*(q[2]-.08)]:[y[0]+X*(q[0]-.08),w.y1-.06,y[2]],strength:1.2,kind:"rail"})}n.statics=n.statics.filter(x=>!(x.kind==="door"&&n.doors.some(w=>w.id===x.door&&w.kind==="slide"))),n.screenBoxes=n.statics.filter(x=>x.kind==="screen").map(x=>({...x,side:(n.prefabOf[x.prefab]||{}).wall}));for(const x of n.screenBoxes){const w=[(x.x1-x.x0)/2,(x.y1-x.y0)/2,(x.z1-x.z0)/2],q=[(x.x0+x.x1)/2,(x.y0+x.y1)/2,(x.z0+x.z1)/2],y=x.side==="W"||x.side==="E",T=y?2:0,X=x.side==="W"||x.side==="S"?-1:1;n.parts.push({id:x.id,prefab:x.prefab,kind:"monitor",shape:"box",h:w,p:q,yaw:0,mass:us.mass,free:!1,mat:"steelDark",side:x.side});for(const[z,[L,ie]]of[[-1,-1],[1,-1],[1,1],[-1,1]].entries()){const J=q.slice();J[T]+=L*(w[T]-.05),J[1]+=ie*(w[1]-.05),J[y?0:2]-=X*w[y?0:2],n.joints.push({id:`${x.id}.mt${z}`,prefab:x.prefab,a:x.id,b:"world",at:J,strength:us.strength,kind:"mount"})}n.joints.push({id:`${x.id}.hook`,prefab:x.prefab,a:x.id,b:"world",at:q.slice(),strength:.5,kind:"hook"})}n.statics=n.statics.filter(x=>x.kind!=="screen"),n.base=n.statics.slice()}const u=t.kind==="rapier"?l_(n):[],p=new Map(u.map(x=>[x.id,x]));n.tiles=u,n.openNiches=[];for(const x of n.statics)x.kind!=="note"&&t.addStatic(x);for(const x of n.parts)t.addPart(x,{fixed:!x.free}),o.partKind.set(x.id,x.kind),o.partSm.set(x.id,pr[x.kind]??.3);for(const x of n.joints)t.joint(x.id,x.a,x.b,x.at),o.joints.set(x.id,{...x,la:t.has(x.a)?dn(t.pose(x.a),x.at):null});const d=b_({S:o,C:n,phys:t,ev:c,mut:s}),h=v_({S:o,C:n,phys:t,ev:c,mut:s,cap:r||e.budget&&e.budget.pieces||zt.cap,onSplit:(x,w,q,y)=>{d.split(x,w,q),o.plates.has(x)&&o.plates.delete(x),v(x,y),m(x,y)},onMerge:(x,w)=>d.toFixed(x,w),onBorn:x=>f.eject([x],"рождение"),onWeld:(x,w)=>{o.held&&(o.carry.has(x)||o.carry.has(w))&&at()}}),f=o_({S:o,C:n,phys:t,mut:s,ev:c});for(const x of n.parts)x.hinge&&o.leaf.set(x.id,{cab:x.prefab,hinge:x.hinge,p:x.p.slice(),q:[0,0,0,1],h:x.h});function v(x,w){const q=o.leaf.get(x);if(!q)return;o.leaf.delete(x);const y=S(q.hinge,(o.opens.get(q.cab)||{}).open||0),T=_i(y);for(const X of w){const z=t.pose(X),L=Wt(T,[0,1,2].map(ie=>z.p[ie]-q.hinge.at[ie]));o.leaf.set(X,{cab:q.cab,hinge:q.hinge,p:L.map((ie,J)=>ie+q.hinge.at[J]),q:si(T,z.q),h:t.half(X)})}}for(const x of n.doors){const w=n.parts.find(q=>q.prefab===x.id&&q.kind==="door");w&&o.slide.set(w.id,{door:x.id,along:x.along,len:x.along==="z"?x.box.z1-x.box.z0:x.box.x1-x.box.x0,p:w.p.slice(),q:[0,0,0,1]})}const g=(x,w)=>{const q=w*(x.len-.1);return[x.p[0]+(x.along==="x"?q:0),x.p[1],x.p[2]+(x.along==="z"?q:0)]};function m(x,w){const q=o.slide.get(x);if(!q)return;o.slide.delete(x);const y=o.doors.get(q.door),T=y.open*(q.len-.1);y.cut=!0;for(const X of w){const z=t.pose(X);o.slide.set(X,{...q,p:[z.p[0]-(q.along==="x"?T:0),z.p[1],z.p[2]-(q.along==="z"?T:0)],q:z.q.slice()})}}const _=x=>o.slide.has(x)&&h.jointsOf(x).some(w=>w.kind==="rail"),R=x=>x?x.kind==="static"&&o.doors.has(x.id)?x.id:x.kind==="part"&&_(x.id)?o.slide.get(x.id).door:"":"",S=(x,w)=>Rf(w*Ut.cabAngle*(x.side===0?-1:1)*x.sg*(x.along==="x"?1:-1)),C=x=>o.leaf.has(x)&&h.jointsOf(x).some(w=>w.kind==="hinge"),D=x=>h.jointsOf(x).some(w=>w.kind!=="hinge"),b=x=>{const w=o.leaf.get(x);if(w)return C(x)?w.cab:"";const q=(n.parts.find(y=>y.id===x)||o.pieces.get(x)||{}).prefab;return o.opens.has(q)&&h.jointsOf(x).some(y=>y.kind==="dowel")?q:""};for(const x of n.opens)o.opens.set(x.id,{...x,open:0,want:0});for(const x of n.doors)o.doors.set(x.id,{...x,open:0,want:0});for(const x of n.windows)o.windows.set(x.id,{...x,hp:x.strength,broken:!1});for(const x of n.parts)x.tank&&o.tanks.set(x.id,{id:x.id,...x.tank,heat:0,gone:!1});for(const[x,w]of Object.entries(n.nodes))w.kind==="breaker"&&o.breakers.set(x,w.on!==!1);const I=new Set(e.trap?zv(e.trap,n.hatches).danger:[]),F=n_({panels:[...n.panels,...u]}),N=new Map([...n.panels,...u].map(x=>[x.id,x])),B=(x,w)=>x.tile?Co(x,w):Ml(x,w),V=x=>x.tile?Vo(x):qo(x),Q=f_({S:o,C:n,room:e,phys:t,ev:c,mut:s,cutter:h});o.openTiles=[],o.filled=new Set,o.hulls=new Map;function $(){if(t.kind!=="rapier")return;const x=[...o.openTiles.map(z=>Vo(p.get(z))),...[...o.hulls.values()].map(z=>z.through)],w=z=>["floor","ceil","wall"].includes(z.kind)?x.reduce((L,ie)=>L.flatMap(J=>Pf(J,ie)),[z]):[z],q=n.base.flatMap(z=>{const L=w(z);return L.length===1&&L[0]===z?[z]:L.map((ie,J)=>({...ie,id:`${z.id}~${J}`,of:z.id}))}),y=z=>`${z.id}:${z.x0},${z.x1},${z.y0},${z.y1},${z.z0},${z.z1}`,T=new Map(n.statics.map(z=>[z.id,y(z)])),X=new Map(q.map(z=>[z.id,y(z)]));for(const[z,L]of T)X.get(z)!==L&&n.statics.find(ie=>ie.id===z).kind!=="note"&&t.removeStatic(z);for(const z of q)T.get(z.id)!==X.get(z.id)&&z.kind!=="note"&&t.addStatic(z);n.statics=q,n.openNiches=x,ee.key=null,f.refresh(),h.refreshStatics(),o.carveN=(o.carveN||0)+1}function oe(x){const w=p.get(x);!w||w.hull||(o.openTiles.includes(x)||o.openTiles.push(x),o.filled.has(x)||(o.filled.add(x),ce(w)),$())}function de(x){const w=o.openTiles.indexOf(x);w>=0&&(o.openTiles.splice(w,1),$())}function ce(x){const w=x.side==="F"&&n.cables.some(q=>q.pts.some((y,T)=>T&&!(Math.max(y[0],q.pts[T-1][0])<x.u0||Math.min(y[0],q.pts[T-1][0])>x.u1||Math.max(y[2],q.pts[T-1][2])<x.v0||Math.min(y[2],q.pts[T-1][2])>x.v1)));if(!s.has("nofill"))for(const{part:q,clips:y}of c_(x,w))n.parts.push(q),t.addPart(q,{fixed:!0}),o.partKind.set(q.id,q.kind),o.partSm.set(q.id,pr[q.kind]??.2),y.forEach((T,X)=>{const z={id:`${q.id}.c${X}`,prefab:x.id,a:q.id,b:"world",at:T,strength:.35,kind:"clip"};z.la=dn(t.pose(q.id),T),n.joints.push(z),o.joints.set(z.id,z),t.joint(z.id,z.a,"world",T)})}function Ie(x){const w=p.get(x);if(!w||o.hulls.has(x))return;F.take(x);const q=w.tileOf,y=hs(w,-.4,.02),T={...y},X=Ws(w);o.hulls.set(x,{id:x,through:T});const z=w.side==="W"||w.side==="E"?"x":"z",L=hs(w,-.06,-.02);o.windows.set(x,{id:x,side:w.side,a0:w.u0,a1:w.u1,y0:w.v0,y1:w.v1,strength:9,hp:0,broken:!0,hull:!0,at:[w.x,(w.v0+w.v1)/2,w.z],box:L}),$();const ie="plate:"+x,J=Po({...w}),be=[w.x-X[0]*.3,w.y,w.z-X[2]*.3];t.addPart({id:ie,kind:"plate",shape:"box",h:J,p:be,q:[0,0,0,1],mass:8},{}),o.partKind.set(ie,"plate"),o.partSm.set(ie,pr.plate),o.plates.set(ie,x),t.release(ie),t.velocity(ie,X.map(Re=>-Re*6)),o.flash=Math.max(o.flash,.25),c("hull_off",{id:x,face:z,tile:q})}function pe(x){const w=x.side==="W"||x.side==="E"?2:0,q=w===2?0:2,y={W:0,E:n.size[0],S:0,N:n.size[2]}[x.side],T=x.side==="W"||x.side==="S"?1:-1,X=6;let z=0;const L=t.bodies().filter(ie=>o.anchored.has(ie)&&h.jointsOf(ie).some(J=>h.jointKind(J)==="seam")).map(ie=>({s:t.pose(ie),P:h.polyOf(ie),bb:t.aabb(ie)}));for(let ie=0;ie<X;ie++)for(let J=0;J<X;J++){const be=x.a0+(x.a1-x.a0)*(ie+.5)/X,Re=x.y0+(x.y1-x.y0)*(J+.5)/X,Pe=[0,Re,0];Pe[w]=be,Pe[q]=y+T*.6;const M=[0,0,0];M[q]=-T,L.some(O=>yr(dn(O.s,Pe),Wt(_i(O.s.q),M),O.P,1.1))&&z++}return z/(X*X)}let Ae=0;function ge(){if(!(o.t<Ae)){Ae=o.t+.25;for(const x of o.windows.values())if(x.broken){const w=s.has("noseal")?0:pe(x);x.cover=w;const q=w>=.9;q!==!!x.sealed&&(x.sealed=q,c(q?"sealed":"unsealed",{id:x.id,cover:+w.toFixed(2)}))}}}const Le=(x,w)=>{const q=t.half(x),y=q.map(z=>2*z).sort((z,L)=>L-z),T=Math.max(w.a1-w.a0,w.y1-w.y0),X=Math.min(w.a1-w.a0,w.y1-w.y0);return y[1]<T&&y[2]<X&&!(y[1]>X&&y[0]>T)},qe=n.size[0]*n.size[1]*n.size[2];function _e(){const x=new Map;for(const[y,T]of n.edges)o.cablesCut.has(y)||o.cablesCut.has(T)||(x.set(y,[...x.get(y)||[],T]),x.set(T,[...x.get(T)||[],y]));const w=new Set,q=[...o.breakers].filter(([,y])=>y).map(([y])=>y);for(;q.length;){const y=q.shift();if(!w.has(y)){w.add(y);for(const T of x.get(y)||[])!w.has(T)&&!o.breakers.has(T)&&q.push(T)}}return w}let ke=_e();const Oe=new Set(n.edges.flat()),Ge=x=>!Oe.has(x)||ke.has(x),Be=()=>{const x=ke;ke=_e();for(const w of Oe)x.has(w)!==ke.has(w)&&!o.breakers.has(w)&&c(ke.has(w)?"power_on":"power_off",{id:w})},Qe=x=>[...o.joints.values()].some(w=>w.a===x||w.b===x);function Mt(x,w="резак"){const q=o.joints.get(x);if(!q)return!1;o.joints.delete(x),o.beads.delete(x),t.unjoint(x),c("joint_cut",{id:x,prefab:q.prefab,why:w});const y=T=>[...o.joints.values()].filter(X=>X.a===T||X.b===T).length;for(const T of[q.a,q.b]){if(T==="world"||!t.has(T))continue;const X=o.partKind.get(T),z=X==="top"?3:1;if(y(T)<z&&!(t.kind==="rapier"&&h.assembly(T).world)){t.release(T);const L=t.pose(T),ie=t.mass(T)||1;if(L&&X==="leg"&&q.kind==="weld"){const J=n.parts.find(G=>G.id===q.a)||{},be=J.p||L.p,Re=L.p[0]-be[0],Pe=L.p[2]-be[2],M=Math.hypot(Re,Pe)||1,O=t.half(T)[1];o.kicks.push({id:T,v:[Re/M*ie*Ut.legKick,0,Pe/M*ie*Ut.legKick],at:[L.p[0],L.p[1]-O*.9,L.p[2]]})}L&&X==="leaf"&&o.kicks.push({id:T,v:[(Math.random()-.5)*ie*.4,0,(Math.random()-.5)*ie*.4],at:L.p}),c("part_free",{id:T})}}return!0}let Xe="";function tt(x=!1){if(t.kind!=="rapier")return;const w=`${o.joints.size}:${o.weldN}:${o.splitN}:${o.removed.length}:${o.held}`;if(w===Xe&&!x)return;Xe=w;for(const T of[...o.joints.values()])(!t.has(T.a)||T.b!=="world"&&!t.has(T.b))&&(o.joints.delete(T.id),o.beads.delete(T.id));const q=new Set,y=new Set;for(const T of o.joints.values())if(!q.has(T.a)){const X=h.assembly(T.a);for(const z of X.ids)q.add(z),X.world&&!o.carry.has(z)&&y.add(z)}for(const T of y)t.anchor(T,!0);for(const T of o.anchored)!y.has(T)&&t.has(T)&&t.anchor(T,!1);o.anchored=y}function ut(x){if(!x||!x.ground)return null;let w=null,q=.05;for(const y of o.extra||[])y.id&&t.has(y.id)&&x.x>y.x0-.23&&x.x<y.x1+.23&&x.z>y.z0-.23&&x.z<y.z1+.23&&Math.abs(y.y1-x.y)<q&&(q=Math.abs(y.y1-x.y),w=y.id);return w}function et(x){const w=t.aabb(x),q=[];if(w)for(const y of t.bodies()){if(y===x)continue;const T=t.aabb(y);T&&Math.abs(T.y1-w.y0)<.035&&w.x0<T.x1&&w.x1>T.x0&&w.z0<T.z1&&w.z1>T.z0&&q.push(y)}return q}function Rt(x,w=0){const q=new Map,y=(X,z,L)=>{q.has(X)||q.set(X,[]),q.get(X).push({m:z,at:L})},T=ut(x);if(T){let X=Ut.body;for(const L of o.carry)o.drag||(X+=t.mass(L)||0);let z=T;for(let L=0;L<6&&z&&!o.anchored.has(z);L++)z=et(z)[0];z&&y(z,X*(1+w/Ut.impact),[x.x,x.y,x.z])}for(const X of t.bodies()){if(o.anchored.has(X)||o.carry.has(X))continue;let z=X;for(let L=0;L<6&&z&&!o.anchored.has(z);L++)z=et(z)[0];z&&y(z,t.mass(X)||0,t.pose(X).p)}return q}const bt=a||e.budget&&e.budget.seam||Ut.seam;function Lt(x,w=0){const q=Rt(x,w),y=[],T=new Set;for(const X of o.anchored){if(T.has(X))continue;const z=h.assembly(X);for(const J of z.ids)T.add(J);const L=[...z.js].filter(J=>h.jointKind(J)==="seam"),ie=[...z.js].filter(J=>J.b==="world").length;for(const J of L){let be=z.ids,Re=1;if(J.b==="world")Re=1/ie;else{const G=le=>{const me=new Set([le]),Ce=[le];let ue=!1;for(;Ce.length;){const fe=Ce.pop();for(const se of z.js)if(!(se===J||se.a!==fe&&se.b!==fe)){if(se.b==="world"){ue=!0;continue}for(const De of[se.a,se.b])me.has(De)||(me.add(De),Ce.push(De))}}return{ids:[...me],w:ue}},j=G(J.a),ve=G(J.b);if(j.w===ve.w)continue;be=j.w?ve.ids:j.ids}const Pe=h.worldAt(J);let M=0;const O=(G,j)=>{M+=G*(1+Math.hypot(j[0]-Pe[0],j[2]-Pe[2])/Ut.arm)};for(const G of be){O(t.mass(G)||0,t.pose(G).p);for(const j of q.get(G)||[])O(j.m,j.at)}y.push({j:J,at:Pe,load:M*Re,k:M*Re/bt})}}return y}let mt=0;function Ot(x,w=0){if(!o.beads.size){o.strain=null;return}if(!(o.t<mt&&!w)){mt=o.t+.2,o.strain=null;for(const q of Lt(x,w))q.k>1&&!s.has("strongseam")?(Ue(q.at,34),Mt(q.j.id,"перегруз"),c("seam_broke",{id:q.j.id,load:Math.round(q.load),cap:bt,at:q.at.map(y=>+y.toFixed(2))}),o.flash=Math.max(o.flash,.12),tt(!0)):q.k>Ut.strain&&(Ue(q.at,3),(!o.strain||q.k>o.strain.k)&&(o.strain={k:q.k,id:q.j.id,t:o.t}))}}const Ue=(x,w)=>{o.sparks.push({at:x.slice(),n:w,t:o.t,seed:o.sparkN=(o.sparkN||0)+1}),o.sparks.length>6&&o.sparks.shift()},He={...S_,...n.fall||{},...l||{}};function rt(x,w){if(!w||w.ground===void 0)return;if(o.stun=Math.max(0,o.stun-x),o.hurtT+=x,o.hurtT>He.wait&&o.hp<100&&(o.hp=Math.min(100,o.hp+He.regen*x)),!w.ground){o.peak=o.peak===null?w.y:Math.max(o.peak,w.y);return}if(o.peak===null)return;const q=o.peak-w.y,y=ut(w);if(o.peak=null,q<.05)return;o.anchored.size&&Ot(w,Math.sqrt(28*q));const T=q-He.safe;if(T<=0||s.has("nofall"))return;const X=Math.round(T*He.perM);o.hp=Math.max(0,o.hp-X),o.hurtT=0,o.stun=Math.min(He.stunMax,T*He.stun+.3),o.hurt=1,c("fall",{h:+q.toFixed(2),dmg:X,hp:Math.round(o.hp),on:y||"пол"}),o.hp<=0&&(o.deaths++,o.hp=100,o.stun=0,o.held&&Ft(),c("death",{cause:"fall",h:+q.toFixed(2)}),w.respawn&&w.respawn())}function it(x){if(!o.held||s.has("rideheld"))return;const w=ut(x);if(!w||o.anchored.has(w))return;const q=new Set([w]),y=[w];for(;y.length;){const T=y.pop();if(o.carry.has(T)){at(),c("ride_off",{id:T});return}for(const X of et(T))!q.has(X)&&!o.anchored.has(X)&&(q.add(X),y.push(X))}}function te(){if(o.drag)return{speed:.42,jump:.35};if(!o.held)return{speed:1,jump:1};let x=0;for(const w of o.carry)x+=t.mass(w)||0;return{speed:Math.max(.35,1-.45*(o.partSm.get(o.held)??.3)),jump:Math.max(.45,1-x/45)}}function ct(x){if(!o.held||o.drag)return!1;o.turn=((o.turn??-1)+1)%3;const w=t.half(o.held),q=[0,1,2].sort((O,G)=>w[G]-w[O]),y=Math.abs(Math.sin(x.yaw))>Math.abs(Math.cos(x.yaw))?[-Math.sign(Math.sin(x.yaw)),0,0]:[0,0,-Math.sign(Math.cos(x.yaw))],T=[0,1,0],X=[y[1]*T[2]-y[2]*T[1],y[2]*T[0]-y[0]*T[2],y[0]*T[1]-y[1]*T[0]],z=o.turn===0?[y,X,T]:o.turn===1?[X,y,T]:[T,X,y],L=[];q.forEach((O,G)=>{L[O]=z[G]}),L[0][0]*(L[1][1]*L[2][2]-L[1][2]*L[2][1])-L[0][1]*(L[1][0]*L[2][2]-L[1][2]*L[2][0])+L[0][2]*(L[1][0]*L[2][1]-L[1][1]*L[2][0])<0&&(L[q[2]]=L[q[2]].map(O=>-O));const J=(O,G)=>L[G][O],be=J(0,0)+J(1,1)+J(2,2);let Re;if(be>0){const O=Math.sqrt(be+1)*2;Re=[(J(2,1)-J(1,2))/O,(J(0,2)-J(2,0))/O,(J(1,0)-J(0,1))/O,O/4]}else if(J(0,0)>J(1,1)&&J(0,0)>J(2,2)){const O=Math.sqrt(1+J(0,0)-J(1,1)-J(2,2))*2;Re=[O/4,(J(0,1)+J(1,0))/O,(J(0,2)+J(2,0))/O,(J(2,1)-J(1,2))/O]}else if(J(1,1)>J(2,2)){const O=Math.sqrt(1+J(1,1)-J(0,0)-J(2,2))*2;Re=[(J(0,1)+J(1,0))/O,O/4,(J(1,2)+J(2,1))/O,(J(0,2)-J(2,0))/O]}else{const O=Math.sqrt(1+J(2,2)-J(0,0)-J(1,1))*2;Re=[(J(0,2)+J(2,0))/O,(J(1,2)+J(2,1))/O,O/4,(J(1,0)-J(0,1))/O]}const Pe=t.pose(o.held),M=si(Re,_i(Pe.q));for(const O of o.carry){const G=t.pose(O),j=Wt(M,[0,1,2].map(ve=>G.p[ve]-Pe.p[ve]));t.setPose(O,O===o.held?Pe.p:[0,1,2].map(ve=>Pe.p[ve]+j[ve]),O===o.held?Re:si(M,G.q),!1),O===o.held&&t.moveKinematic(O,Pe.p,Re)}return c("turn",{id:o.held,mode:o.turn}),!0}const st=()=>n.statics.filter(x=>x.kind!=="glass"&&x.kind!=="note"&&!(x.kind==="door"&&(o.doors.get(x.door)||{}).open>.5));function Y(x,w){const q=[w[0]-x[0],w[1]-x[1],w[2]-x[2]],y=Math.hypot(...q);if(y<.001)return!1;const T=q.map(z=>z/y);return!!Os(x,T,st(),y-.05)}function W(x){(o.held===x||o.carry&&o.carry.has(x))&&at(),t.remove(x),o.removed.push(x),s.has("keepgone")||h.forget(x)}function xe(x){const w=o.tanks.get(x);if(!w||w.gone)return;const q=t.pose(x),y=q?q.p:[0,0,0];w.gone=!0,w.at=y.slice(),(o.held===x||o.carry.has(x))&&at(),W(x);const T=Ut.blast*w.charge,X=[];for(const z of t.bodies()){const L=t.pose(z);if(!L)continue;const ie=Bs(L.p,y),J=Y(y,L.p)?Ut.cover:1,be=T/(1+ie*ie)*J;if(ie>w.radius||be<.2)continue;const Re=ie>.001?[(L.p[0]-y[0])/ie,(L.p[1]-y[1])/ie+.3,(L.p[2]-y[2])/ie]:[0,1,0];Qe(z)||t.release(z),t.impulse(z,Re.map(Pe=>Pe*be*(t.mass(z)||1))),X.push(z)}for(const[z,L]of[...o.joints]){const ie=h.worldAt(L),J=Bs(ie,y);T/(1+J*J)*(Y(y,ie)?Ut.cover:1)>=L.strength*Aa.blastK&&Mt(z,"взрыв")}for(const z of o.windows.values()){if(z.broken)continue;const L=Bs(z.at,y);T/(1+L*L)*(Y(y,z.at)?Ut.cover:1)>=z.strength*Aa.blastK*.8&&ye(z.id,"взрыв")}o.flash=1,o.blast={at:y,K:T,t:o.t},c("explode",{id:x,at:y.map(z=>+z.toFixed(2)),hit:X.length})}function ye(x,w){const q=o.windows.get(x);!q||q.broken||(q.broken=!0,q.hp=0,t.setStatic(x,!1),c("window_broken",{id:x,why:w}))}function we(x){const w=o.doors.get(x);return w?w.kind==="sealed"?(c("door_sealed",{id:x}),!1):Ge(x)?(w.want=w.want?0:1,c(w.want?"door_open":"door_close",{id:x}),!0):(c("door_dead",{id:x}),!1):!1}function k(x){const w=o.opens.get(x);return w?([...o.leaf].some(([q,y])=>y.cab===x&&C(q)&&D(q))&&c("cab_welded",{id:x}),w.want=w.want?0:1,c(w.want?"cab_open":"cab_close",{id:x}),!0):!1}function A(x){return o.breakers.has(x)?(o.breakers.set(x,!o.breakers.get(x)),c("breaker",{id:x,on:o.breakers.get(x)}),Be(),!0):!1}let ee={key:null,boxes:null};function Ee(){const x=n.panels.filter(T=>F.view(T.id).plate!=="on").map(T=>T.id),w=x.join(",")+"|"+(o.carveN||0);if(ee.key===w)return ee.boxes;const q=x.map(T=>V(N.get(T)));let y=n.statics;return q.length&&(y=n.statics.flatMap(T=>T.kind==="floor"||T.kind==="ceil"||T.kind==="wall"?q.reduce((X,z)=>X.flatMap(L=>Pf(L,z)),[T]):[T])),ee={key:w,boxes:y},y}const Se=new Map;for(const x of u)if(!x.hull)for(let w=x.u0+.25;w<x.u1;w+=.5)for(let q=x.v0+.25;q<x.v1;q+=.5)Se.set(`${x.side}:${Math.floor(w/.5)}:${Math.floor(q/.5)}`,x);function ze(x,w,q){const y=x.box.kind;if(!u.length||!["wall","floor","ceil"].includes(y))return x;const T=[0,1,2].map(Pe=>w[Pe]+q[Pe]*x.t),X=y==="wall"?x.box.side:y==="floor"?"F":"C",[z,L]=X==="W"||X==="E"?[T[2],T[1]]:"SN".includes(X)?[T[0],T[1]]:[T[0],T[2]],ie={W:T[0],E:n.size[0]-T[0],S:T[2],N:n.size[2]-T[2],F:T[1],C:n.size[1]-T[1]}[X];if(Math.abs(ie)>.02)return{...x,box:{...x.box,kind:"truss"},id:"truss"};if("WESN".includes(X)&&n.portals.find(M=>M.side===X&&z>M.a0-.13&&z<M.a1+.13&&L>M.y0-.02&&L<M.y1+.13))return{...x,box:{...x.box,kind:"gate"},id:"gate"};const J=Se.get(`${X}:${Math.floor(z/.5)}:${Math.floor(L/.5)}`);if(!J)return{...x,box:{...x.box,kind:"truss"},id:"truss",shell:y};const be=F.view(J.id);if(be.seated)return{kind:"plate",id:J.id,t:x.t,n:x.n,seated:!0,box:x.box};if(be.plate!=="on")return x;const Re=[0,1,2,3].find(Pe=>!be.bolts[Pe]&&Bs(Co(J,Pe),T)<qn.bolt);return Re!==void 0?{kind:"bolt",id:J.id,i:Re,t:x.t,n:x.n,box:x.box}:{kind:"plate",id:J.id,t:x.t,n:x.n,box:x.box}}function E(x,w,q=Ut.cutRange){const y=[],T=Os(x,w,Ee().filter(z=>z.kind!=="note").filter(z=>z.kind!=="glass"||!(o.windows.get(z.id)||{}).broken).filter(z=>!(z.kind==="door"&&(o.doors.get(z.door)||{}).open>.5)),q);T&&y.push(ze({kind:"static",id:T.box.prefab||T.box.of||T.box.id,box:T.box,t:T.t,n:T.n},x,w));for(const z of o.openTiles){const L=p.get(z+".hull");if(!L)continue;const ie=F.view(L.id);if(ie.plate!=="on")continue;const J=Os(x,w,[hs(L,-.01,.012)],q);if(!J)continue;const be=[0,1,2].map(Pe=>x[Pe]+w[Pe]*J.t),Re=[0,1,2,3].find(Pe=>!ie.bolts[Pe]&&Bs(Co(L,Pe),be)<qn.bolt);y.push(Re!==void 0?{kind:"bolt",id:L.id,i:Re,t:J.t-.001,n:Ws(L)}:{kind:"plate",id:L.id,t:J.t-.001,n:Ws(L)})}for(const z of t.bodies()){if(z===o.held||o.carry.has(z))continue;const L=t.pose(z),ie=t.poly(z);if(!ie&&Cf(x,w,L.p,L.q,t.half(z))===null)continue;const J=yr(dn(L,x),Wt([-L.q[0],-L.q[1],-L.q[2],L.q[3]],w),ie||h.polyOf(z),q);J&&y.push({kind:"part",id:z,t:J.t,n:Wt(L.q,J.n),cut:J.cut})}for(const z of o.merged){const L=yr(dn(z,x),Wt([-z.q[0],-z.q[1],-z.q[2],z.q[3]],w),z.poly,q);L&&y.push({kind:"static",id:z.id,box:{kind:"scrap"},t:L.t,n:Wt(z.q,L.n)})}for(const z of d.ids()){const L=d.pose(z);if(!L)continue;const ie=Cf(x,w,L.p,L.q,__);ie!==null&&ie<q&&y.push({kind:"note",id:z,t:ie-.004})}for(const z of n.panels){const L=F.view(z.id);if(L.plate==="on"&&!L.seated){for(let be=0;be<4;be++)if(!L.bolts[be]){const Re=Pa(x,w,Ml(z,be),.06);Re!==null&&Re<q&&y.push({kind:"bolt",id:z.id,i:be,t:Re-.02})}const ie=df(z),J=Os(x,w,[ie],q);J&&y.push({kind:"plate",id:z.id,t:J.t,n:J.n})}else if(L.seated){const ie=Os(x,w,[df(z)],q);ie&&y.push({kind:"plate",id:z.id,t:ie.t,seated:!0})}else for(const ie of U(z.id)){const J=Pa(x,w,ie.at,.1);J!==null&&J<q&&y.push({kind:"cable",id:ie.id,panel:z.id,at:ie.at,t:J})}}for(const z of o.openTiles)if(p.get(z).side==="F")for(const L of U(z)){const ie=Pa(x,w,L.at,.1);ie!==null&&ie<q&&y.push({kind:"cable",id:L.id,panel:z,at:L.at,t:ie})}for(const z of n.hatches){const L=s.has("nohatch")?0:w_,ie={x0:z.x0-L,x1:z.x1+L,y0:-.02,y1:.012,z0:z.z0-L,z1:z.z1+L},J=Os(x,w,[ie],q);J&&y.push({kind:"hatch",id:z.id,t:J.t,number:z.number,n:[0,1,0]})}y.sort((z,L)=>z.t-L.t);const X=y[0]||null;return X&&(X.at=X.at||[x[0]+w[0]*X.t,x[1]+w[1]*X.t,x[2]+w[2]*X.t]),X}function P(x,w){const q=[-x[2],0,x[0]],y=Math.hypot(...q)||1,T=Math.hypot(...q)<1e-6?[1,0,0]:q.map(z=>z/y),X=[T[1]*x[2]-T[2]*x[1],T[2]*x[0]-T[0]*x[2],T[0]*x[1]-T[1]*x[0]];return[...Array(8).keys()].map(z=>{const L=z*Af/2,ie=[0,1,2].map(be=>x[be]+w*(Math.cos(L)*T[be]+Math.sin(L)*X[be])),J=Math.hypot(...ie);return ie.map(be=>be/J)})}function H(x,w,q=Ut.cutRange){o.ray={o:x,d:w};const y=E(x,w,q);if(y&&y.kind!=="static"&&!((y.kind==="plate"||y.kind==="bolt")&&y.box)||s.has("seethrough"))return y;let T=null;for(const X of P(w,.012)){const z=E(x,X,q);z&&z.kind==="part"&&z.t<(y?y.t:99)-.05&&(!T||z.t<T.t)&&(T=z)}return T||y}function ne(x,w,q=Ut.reach){const y=E(x,w,q);if(o.held||o.noteHeld||Te(y)||s.has("noaid"))return y;const T=t.bodies().filter(z=>o.pieces.has(z)&&Tt(z)&&Math.min(...t.half(z))<.08&&Bs(t.pose(z).p,x)<q+.5);let X=null;if(T.length)for(const z of P(w,Ut.aimCone))for(const L of T){const ie=t.pose(L),J=yr(dn(ie,x),Wt(_i(ie.q),z),h.polyOf(L),q);J&&(!X||J.t<X.t)&&!(y&&y.t<J.t-.15)&&(X={kind:"part",id:L,t:J.t,n:Wt(ie.q,J.n),at:x.map((be,Re)=>be+z[Re]*J.t)})}return X||y}function U(x){const w=N.get(x),q=[];if(!w||w.face!=="+y")return q;const y=V(w);for(const T of n.cables)if(!o.cablesCut.has(T.id))for(let X=1;X<T.pts.length;X++){const z=T.pts[X-1],L=T.pts[X],ie=Math.min(z[0],L[0])-1e-6,J=Math.max(z[0],L[0])+1e-6,be=Math.min(z[2],L[2])-1e-6,Re=Math.max(z[2],L[2])+1e-6;if(J<y.x0||ie>y.x1||Re<y.z0||be>y.z1)continue;const Pe=Math.max(y.x0+.05,Math.min(y.x1-.05,w.x)),M=Math.max(y.z0+.05,Math.min(y.z1-.05,w.z));q.push({id:T.id,at:[z[0]===L[0]?z[0]:Pe,-.16,z[2]===L[2]?z[2]:M]});break}return q}const re=x=>{const w=p.get(x);w&&w.hull&&F.loose(x)&&Ie(x)};function K(x,w,q=null,y="cut"){if(y==="weld"&&!(x&&x.kind==="plate"&&x.seated))return x?h.weld(x,w).why?"":"сварка":"";if(!x)return"";if(x=Ve(x),x.kind==="bolt"){const T=F.cut(x.id,x.i,w);return T!==null&&T>=1&&(c("bolt_cut",{id:x.id,i:x.i}),re(x.id)),"болт"}if(x.kind==="plate"){const T=F.view(x.id);if(T.seated)return F.weld(x.id,w)>=1&&(c("panel_weld",{id:x.id}),de(x.id)),"шов";const X=T.bolts.findIndex(z=>!z);return X>=0&&F.cut(x.id,X,w)>=1&&(c("bolt_cut",{id:x.id,i:X}),re(x.id)),"болт"}if(x.kind==="cable"){const T="cable:"+x.id,X=(o.cutProg.get(T)||0)+w;return o.cutProg.set(T,X),X>=Ut.cableCut&&(o.cablesCut.add(x.id),o.cableCutAt=o.cableCutAt||{},o.cableCutAt[x.id]=x.at,c("cable_cut",{id:x.id,under:x.panel}),Be()),"кабель"}if(x.kind==="static"){const T=o.windows.get(x.id);return T&&!T.broken?(T.hp-=w,T.hp<=0&&ye(T.id,"резак"),"стекло"):""}if(x.kind==="part"){const T=o.tanks.get(x.id);if(T)return T.heat+=w,T.heat>=T.fuse&&xe(T.id),"баллон";if(o.t-(o.cutT??-9)>.12&&(o.cutLock=null),o.cutT=o.t,o.cutLock&&o.cutLock.has(x.id)&&!s.has("nolock"))return"крепление";const X=o.evN,z=()=>{for(const Re of o.events.slice(-(o.evN-X)||o.events.length))if(Re.kind==="split"||Re.kind==="joint_cut")if(o.cutLock=o.cutLock||new Set,Re.kind==="split")for(const Pe of Re.into)o.cutLock.add(Pe);else o.cutLock.add(x.id)},L=h.nearJoint(x.id,x.at),ie=o.stroke&&o.stroke.id===x.id;if(q&&h.canSplit(x.id)&&(ie||!L))return h.stroke(x,q.o,q.d,w),o.evN>X&&z(),"деталь";const J=L;if(!J)return"";const be=(o.cutProg.get(J.id)||0)+w*Aa.cutRate;return o.cutProg.set(J.id,be),be>=J.strength&&(Mt(J.id),h.note("крепление",x.id,{out:J.kind}),q&&z()),"крепление"}return""}function Z(x){if(!x)return"";const w=x.id;if(x.kind==="static")return o.breakers.has(w)?(A(w),"щиток"):R(x)?(we(R(x)),"дверь"):o.opens.has(w)?(k(w),"шкаф"):"";if(x.kind==="note")return c("read",{id:w,key:n.prefabOf[w].text}),"запись";if(x.kind==="part"){const q=R(x);if(q)return we(q),"дверь";const y=b(w);if(y)return k(y),"шкаф"}return""}function he(x){if(!x)return"";if(x.kind==="static")return o.breakers.has(x.id)?"breaker":o.doors.has(x.id)?o.doors.get(x.id).want?"shut":"open":o.opens.has(x.id)?o.opens.get(x.id).want?"shut":"open":"";if(x.kind==="note")return"read";if(x.kind==="part"){const w=R(x);if(w)return o.doors.get(w).want?"shut":"open";const q=b(x.id);if(q)return o.opens.get(q).want?"shut":"open"}return""}const Te=x=>!!x&&!o.held&&!o.noteHeld&&(x.kind==="note"||x.kind==="plate"&&F.loose(x.id)&&!ft(x.id)||x.kind==="part"&&Tt(x.id)||Fe(x)),Fe=x=>!!x&&x.kind==="static"&&!!x.box&&x.box.kind==="scrap",Ve=x=>Fe(x)&&h.thaw(x.id)?{...x,kind:"part",box:void 0}:x,Me=x=>!!x&&(Fe(x)||x.kind==="part"&&h.canSplit(x.id)||x.kind==="bolt"||x.kind==="cable"||x.kind==="plate"&&F.view(x.id).bolts.some(w=>!w)||x.kind==="static"&&o.windows.has(x.id)&&!o.windows.get(x.id).broken||x.kind==="part"&&(o.tanks.has(x.id)||h.nearJoint(x.id,x.at)));function We(x){if(!x)return null;if(x.kind==="bolt")return{verb:"снять"};if(x.kind==="plate")return x.seated?{verb:"прихватить"}:F.view(x.id).bolts.some(q=>!q)?{verb:"болты",n:F.view(x.id).bolts.filter(q=>!q).length}:{verb:"сорвать"};if(x.kind==="cable")return{verb:"перерезать"};if(x.kind==="note")return null;if(Fe(x))return{verb:"резать"};if(x.kind==="static"){const q=o.windows.get(x.id);return q&&!q.broken?{verb:"разбить"}:{verb:"нет",shell:!!x.box&&["wall","floor","ceil","stub","truss","gate"].includes(x.box.kind)}}if(x.kind==="hatch")return{verb:"нет"};if(o.tanks.has(x.id))return{verb:"взорвётся"};const w=h.nearJoint(x.id,x.at);return w&&!(o.stroke&&o.stroke.id===x.id)?{verb:"снять",j:w}:Ct(x.id)?{verb:"сорвать"}:{verb:h.canSplit(x.id)?"резать":"нет"}}function je(x){if(!x||x.kind!=="part"||!t.has(x.id))return null;const w=h.assembly(x.id);if(!Tt(x.id)){const q=h.jointsOf(x.id).filter(X=>X.kind!=="hook"),y=q.length?q:[...w.js],T=y.length?h.jointKind(y[0]):"";return T?{why:"держится",kind:T,n:y.length}:null}return Ke(x.id)?{why:"тяжело"}:null}function Ne(x){if(!x)return 0;if(x.kind==="part"&&o.tanks.has(x.id))return o.tanks.get(x.id).heat/o.tanks.get(x.id).fuse;if(o.weld&&x.kind==="part")return o.weld.prog;if(o.stroke&&o.stroke.id===x.id)return o.stroke.prog;if(x.kind==="part"){const w=h.nearJoint(x.id,x.at);return w?(o.cutProg.get(w.id)||0)/w.strength:0}if(x.kind==="cable")return(o.cutProg.get("cable:"+x.id)||0)/Ut.cableCut;if(x.kind==="static"&&o.windows.has(x.id)){const w=o.windows.get(x.id);return 1-w.hp/w.strength}return 0}const ft=x=>{const w=p.get(x);if(!w)return!1;const q=hs(w,-.05,.06);return[...o.joints.values()].some(y=>y.b==="world"&&h.jointKind(y)==="seam"&&(T=>T[0]>q.x0&&T[0]<q.x1&&T[1]>q.y0&&T[1]<q.y1&&T[2]>q.z0&&T[2]<q.z1)(h.worldAt(y)))},Ct=x=>o.screens.has(x)&&!Q.mounted(x)&&h.jointsOf(x).every(w=>w.kind==="hook")&&h.jointsOf(x).length>0,Tt=x=>{if(!x||!t.has(x))return!1;if(Ct(x))return!0;const w=h.assembly(x);return!w.world&&(w.ids.length===1||w.piece||!w.bolts)},Ke=x=>{const w=h.assembly(x);return w.mass>Ut.lift&&(w.ids.length>1||o.pieces.has(x))&&t.kind==="rapier"},Vt=x=>!h.jointsOf(x).length;function pt(x,w){o.held=x,o.turn=-1,o.drag=!w,o.carry=new Set(h.assembly(x).ids);for(const q of o.carry)t.carry(q,!0)}function at(){for(const q of o.carry)t.carry(q,!1);const x=o.held,w=o.drag;o.carry=new Set,o.held=null,o.drag=!1,x&&t.has(x)&&!w&&t.setKinematic(x,!1)}function Dt(x){if(o.noteHeld)return!1;if(o.held)return Ft();if(!x)return!1;if(x=Ve(x),x.kind==="note")return d.take(x.id);if(x.kind==="plate"&&F.loose(x.id)&&ft(x.id))return c("plate_welded",{id:x.id}),!1;if(x.kind==="plate"&&F.loose(x.id)){F.take(x.id);const w=N.get(x.id),q="plate:"+x.id,y=w.tile||w.face==="+y"||w.face==="-y"?[0,0,0,1]:w.face[1]==="x"?Rf(Af):[0,0,0,1],T=w.tile?Po(w):w.face[1]==="y"?[Kt.w/2,.012,Kt.w/2]:w.face[1]==="x"?[.012,Kt.w/2,Kt.w/2]:[Kt.w/2,Kt.w/2,.012];return t.addPart({id:q,kind:"plate",shape:"box",h:T,p:w.tile?[0,1,2].map(X=>[w.x,w.y,w.z][X]+Ws(w)[X]*.03):[w.x,w.y+.02,w.z],q:y,mass:w.tile?Math.max(2,qn.mass*(w.u1-w.u0)*(w.v1-w.v0)):3},{}),w.tile&&oe(w.id),o.partKind.set(q,"plate"),o.partSm.set(q,pr.plate),o.plates.set(q,x.id),c("panel_off",{id:x.id}),pt(q,!0),t.setKinematic(q,!0,w.tile),!0}if(x.kind==="part"&&Tt(x.id)){const w=x.id;if(Ct(w)){for(const y of h.jointsOf(w))Mt(y.id,"захват");Q.calm(w)}const q=Ke(w);return pt(w,!q),q||t.setKinematic(w,!0,!!(o.pieces.get(w)||{}).mate&&!s.has("rambo")),c(q?"drag":"grab",{id:w}),!0}return!1}function Ft(x=null){const w=o.held,q=[...o.carry],y=o.drag;if(!w)return!1;if(at(),y)return c("drop",{id:w}),!0;const T=o.plates.get(w);if(T&&!x){const z=t.pose(w);if(!(N.get(T)||{}).hull&&F.seat(T,z.p))return t.remove(w),o.plates.delete(w),c("panel_seat",{id:T}),!0}if(!x&&o.screens.has(w)&&Q.seat(w))return!0;o.screens.has(w)&&Q.calm(w);const X=!x&&h.snapPose(w);return X?(t.setPose(w,X.p,X.q,!1),t.velocity(w,[0,0,0]),c("snap",{id:w,to:o.pieces.get(w).mate.id}),!0):(f.eject(q.length?q:[w],"отпущен"),x&&t.velocity(w,x),c(x?"throw":"drop",{id:w}),!0)}function gn(x,w=1){if(!o.held)return!1;const q=o.held;return Ft(Sv(x,o.partSm.get(q)??.3,w))}function Nn(x){const w=Math.cos(x.pitch),q=[-Math.sin(x.yaw)*w,Math.sin(x.pitch),-Math.cos(x.yaw)*w],y=t.half(o.held)||[.2,.2,.2],T=Math.max(...y),X=ff.dist+T,z=Math.max(X*w,kn.r+Math.hypot(y[0],y[2])*.75+.05),L=Math.max(x.y+Math.min(...y),x.y+x.eye-ff.drop+q[1]*X);return[x.x-Math.sin(x.yaw)*z,L,x.z-Math.cos(x.yaw)*z]}function ns(x,w){const q=x.hinge,y=[x.p[0]-q.at[0],x.p[1]-q.at[1],x.p[2]-q.at[2]],T=S(q,w),X=Wt(T,y);return{p:[q.at[0]+X[0],q.at[1]+X[1],q.at[2]+X[2]],q:si(T,x.q||[0,0,0,1])}}function $n(x,w){const q=o.held,y=t.pose(q),T=Nn(w);if(!y)return at();const X=[T[0]-y.p[0],T[2]-y.p[2]],z=Math.hypot(...X);if(z>Ut.dragFar)return c("drop",{id:q,why:"далеко"}),at();const L=h.assembly(q).mass,ie=Math.min(Ut.drag,z*4),J=z>.02?ie/z:0,be=[X[0]*J-y.v[0],X[1]*J-y.v[2]],Re=Math.hypot(...be)*L/x,Pe=Math.min(1,Ut.dragForce/(Re||1));t.impulse(q,[be[0]*L*Pe,0,be[1]*L*Pe])}function ci(x,w){o.t+=x;for(const L of o.doors.values()){const ie=L.open,J=L.box;!L.want&&L.open>.5&&w&&w.x>J.x0-kn.r&&w.x<J.x1+kn.r&&w.z>J.z0-kn.r&&w.z<J.z1+kn.r&&(L.want=1,c("door_blocked",{id:L.id}));const be=[...o.slide].filter(([Re,Pe])=>Pe.door===L.id&&t.has(Re)&&_(Re));if(be.some(([Re])=>h.jointsOf(Re).some(Pe=>Pe.kind!=="rail"))&&L.want!==L.open&&(L.want=L.open,c("door_welded",{id:L.id})),L.open+=Math.sign(L.want-L.open)*Math.min(Math.abs(L.want-L.open),x/Ut.doorTime),ie!==L.open)for(const[Re,Pe]of be)t.moveKinematic(Re,g(Pe,L.open),Pe.q);ie>.5!=L.open>.5&&t.setStatic(L.box.id,L.open<=.5)}for(const L of o.opens.values()){const ie=L.open+Math.sign(L.want-L.open)*Math.min(Math.abs(L.want-L.open),x/Ut.cabTime),J=[];let be=!1;for(const[Re,Pe]of o.leaf)Pe.cab===L.id&&t.has(Re)&&C(Re)&&(D(Re)&&(be=!0),J.push([Re,Pe,ns(Pe,ie)]));if(be){L.want=L.open;continue}if(!(w&&ie!==L.open&&!s.has("thruleaf")&&J.some(([,Re,Pe])=>Al([w.x,Math.max(Pe.p[1]-Re.h[1],Math.min(Pe.p[1]+Re.h[1],w.y+.6)),w.z],Pe,Re.h)<kn.r-.02))){L.open=ie;for(const[Re,,Pe]of J)t.moveKinematic(Re,Pe.p,Pe.q)}}if(h.idle(),h.calm(),ge(),tt(),it(w),rt(x,w),Ot(w),n.climb&&w&&!o.exit){const L=n.portals.find(J=>J.id===n.climb.exit),ie=L&&{W:-w.x,E:w.x-n.size[0],S:-w.z,N:w.z-n.size[2]}[L.side];L&&ie>.2&&w.y>L.y0-.1&&(o.exit=!0,c("exit",{id:L.id}))}o.held&&w&&(o.drag?$n(x,w):t.moveKinematic(o.held,f.hold([o.held,...[...o.carry].filter(L=>L!==o.held)],Nn(w)),null));let q=0,y=0;for(const L of o.windows.values())L.broken&&!L.sealed&&(q+=(L.a1-L.a0)*(L.y1-L.y0)*(1-.8*(L.cover||0)));for(const L of n.portals){const ie=o.doors.get(L.id);!ie||ie.open>.5?y+=(L.a1-L.a0)*(L.y1-L.y0):ie.cut&&(y+=.4)}const T=2.4*q*o.p,X=2.4*y*(1-o.p)*.3;if(o.p=Math.max(0,Math.min(1,o.p+(X-T)*x*8/qe)),q===0&&o.p<1&&!s.has("nolife")&&(o.p=Math.min(1,o.p+Ut.life*x)),o.flow=T,q>0&&o.p>.02)for(const L of o.windows.values()){if(!L.broken||L.sealed)continue;const ie=L.box||n.statics.find(J=>J.id===L.id);for(const J of t.bodies()){if(J===o.held||o.anchored.has(J))continue;const be=t.pose(J),Re=[Math.max(ie.x0,Math.min(be.p[0],ie.x1)),Math.max(ie.y0,Math.min(be.p[1],ie.y1)),Math.max(ie.z0,Math.min(be.p[2],ie.z1))],Pe=[Re[0]-be.p[0],Re[1]-be.p[1]+.25,Re[2]-be.p[2]],M=Math.hypot(...Pe)||1,O=Ut.pull*o.p*(L.a1-L.a0)*(L.y1-L.y0)/(1+M*M);O<Ut.pullMin||(Qe(J)||t.release(J),t.impulse(J,Pe.map(G=>G/M*O*x*(t.mass(J)||1))),Math.hypot(Re[0]-be.p[0],Re[1]-be.p[1],Re[2]-be.p[2])<Ut.eject&&Le(J,L)&&(W(J),o.ejected.push(J),c("ejected",{id:J,window:L.id})))}if(w){const J=[L.at[0]-w.x,L.at[2]-w.z],be=Math.hypot(...J)||1,Re=Ut.pull*.35*o.p*(L.a1-L.a0)*(L.y1-L.y0)/(1+be*be);w.kx=(w.kx||0)+J[0]/be*Re*x,w.kz=(w.kz||0)+J[1]/be*Re*x}}for(const L of o.windows.values()){if(L.broken)continue;const ie=n.statics.find(J=>J.id===L.id);for(const J of t.bodies()){if(J===o.held)continue;const be=t.pose(J),Re=Math.hypot(...be.v),Pe=t.aabb(J);if(Re>5&&Pe.x0<ie.x1+.05&&Pe.x1>ie.x0-.05&&Pe.y0<ie.y1&&Pe.y1>ie.y0&&Pe.z0<ie.z1+.05&&Pe.z1>ie.z0-.05){ye(L.id,"удар "+J);break}}}for(const L of n.hatches){if(!I.has(L.id)&&!s.has("alltrap"))continue;let ie=o.hatchOpen.get(L.id)||0;for(const J of t.bodies()){if(J===o.held)continue;const be=t.pose(J);be.p[0]>L.x0&&be.p[0]<L.x1&&be.p[2]>L.z0&&be.p[2]<L.z1&&be.p[1]<.6&&(ie||c("hatch_open",{id:L.id,by:J}),ie=Math.max(ie,.01),(be.p[1]<-.05||o.t-(o.hatchSeen?.[J]??o.t)>Ut.hatchBurn)&&(W(J),o.burned.push({id:J,hatch:L.id}),o.flash=Math.max(o.flash,.6),c("burned",{id:J,hatch:L.id})),o.hatchSeen=o.hatchSeen||{},J in o.hatchSeen||(o.hatchSeen[J]=o.t))}w&&w.x>L.x0&&w.x<L.x1&&w.z>L.z0&&w.z<L.z1&&w.y<.1&&(ie||c("hatch_open",{id:L.id,by:"player"}),ie=Math.max(ie,.01),o.deaths++,c("death",{cause:"hatch",id:L.id}),w.respawn&&w.respawn()),ie&&(ie=Math.min(1,ie+x/.35)),ie&&ie>=1&&![...t.bodies()].some(J=>{const be=t.pose(J);return be.p[0]>L.x0&&be.p[0]<L.x1&&be.p[2]>L.z0&&be.p[2]<L.z1})&&o.t-(o.hatchClose?.[L.id]??0)>2&&(o.hatchClose=o.hatchClose||{},o.hatchClose[L.id]=o.t,ie=0,c("hatch_close",{id:L.id})),o.hatchOpen.set(L.id,ie)}if(w){const L=w.input||{},ie=Math.abs(L.forward||0)+Math.abs(L.strafe||0)>.1,J=L.forward||0,be=L.strafe||0,Re=Math.sin(w.yaw),Pe=Math.cos(w.yaw),M=[-Re*J+Pe*be,-Pe*J-Re*be];if(ie)for(const O of t.bodies()){if(O===o.held||(o.partSm.get(O)??1)>Ut.light||!Vt(O))continue;const G=t.aabb(O);if(!G||G.y0>w.y+.6||G.y1<w.y+.02||G.x0>w.x+.6||G.x1<w.x-.6||G.z0>w.z+.6||G.z1<w.z-.6)continue;const j=t.pose(O),ve=Math.max(G.y0,Math.min(G.y1,w.y+.3));if(Al([w.x,ve,w.z],j,t.half(O),Hn(O))>kn.r+.05)continue;const me=j.p[0]-w.x,Ce=j.p[2]-w.z,ue=Math.hypot(me,Ce)||1,fe=[me/ue,Ce/ue];if(fe[0]*M[0]+fe[1]*M[1]<.2)continue;const se=j.v[0]*fe[0]+j.v[2]*fe[1];se<Ut.push&&!s.has("nopush")&&t.velocity(O,[j.v[0]+fe[0]*(Ut.push-se),Math.max(j.v[1],.3),j.v[2]+fe[1]*(Ut.push-se)])}t.setPlayer({x:w.x,y:w.y,z:w.z,h:w.h||kn.stand})}const z=t.step(x);if(Q.step(),o.kicks.length)for(const L of o.kicks.splice(0))t.has(L.id)&&t.impulseAt(L.id,L.v,L.at);for(const L of t.bodies()){if(L===o.held||o.carry.has(L)&&!o.drag)continue;const ie=t.aabb(L);if(!ie||ie.x0>-.01&&ie.z0>-.01&&ie.x1<n.size[0]+.01&&ie.z1<n.size[2]+.01&&ie.y0>-.06&&ie.y1<n.size[1]+.01||f.depth(L)<.02)continue;const J=h.assembly(L);!J.world&&!o.ejected.includes(L)&&f.eject(J.ids,"сеть")}for(const L of t.bodies())t.pose(L).p[1]<-3&&(W(L),c("lost",{id:L}));return o.flash=Math.max(0,o.flash-x*2),z}function Yn(x){const w=n.statics.filter(y=>!(y.kind==="glass"&&(o.windows.get(y.id)||{}).broken)&&!(y.kind==="door"&&(o.doors.get(y.door)||{}).open>.5)&&y.kind!=="note"),q=[];if(!s.has("ghost"))for(const y of t.bodies()){if((y===o.held||o.carry.has(y))&&!s.has("rideheld"))continue;const T=t.aabb(y);T&&q.push(...Tl(y,t.pose(y),t.half(y),T,x?x.x:0,x?x.z:0,Hn(y)))}for(const y of o.merged)y.bb=y.bb||xn(y),q.push(...Tl(y.id,y,null,y.bb,x?x.x:0,x?x.z:0,y.poly.cells?y.poly:y.poly.faces));return o.extra=q,{col:{boxes:w,circles:[]},extra:q,soft:[]}}const Hn=x=>{const w=t.poly(x);return w?w.cells?w:w.faces:null};function xn(x){const w={x0:1e9,x1:-1e9,y0:1e9,y1:-1e9,z0:1e9,z1:-1e9};for(const q of x.poly.faces)for(const y of q.v){const T=Qt(x,y);w.x0=Math.min(w.x0,T[0]),w.x1=Math.max(w.x1,T[0]),w.y0=Math.min(w.y0,T[1]),w.y1=Math.max(w.y1,T[1]),w.z0=Math.min(w.z0,T[2]),w.z1=Math.max(w.z1,T[2])}return w}function bs(){return{v:1,room:n.id,t:+o.t.toFixed(3),p:+o.p.toFixed(4),joints:[...o.joints.keys()],cut:[...o.cutProg].map(([x,w])=>[x,+w.toFixed(3)]),panels:[...n.panels.map(x=>x.id),...u.filter(x=>{const w=F.view(x.id);return w.plate!=="on"||w.seated||w.bolts.some(q=>q)}).map(x=>x.id)].map(x=>({id:x,...F.view(x)})),tiles:o.openTiles.slice(),filled:[...o.filled],hulls:[...o.hulls.keys()],screens:Q.snapshot(),cables:[...o.cablesCut],breakers:[...o.breakers],doors:[...o.doors].map(([x,w])=>[x,w.want]),opens:[...o.opens].map(([x,w])=>[x,w.want]),windows:[...o.windows].filter(([,x])=>x.broken).map(([x])=>x),tanks:[...o.tanks].map(([x,w])=>[x,+w.heat.toFixed(3),w.gone]),hp:Math.round(o.hp),exit:o.exit,cut2:h.snapshot(),notes:d.snapshot(),leaf:[...o.leaf].filter(([x])=>o.pieces.has(x)).map(([x,w])=>[x,w.cab,w.hinge,w.p,w.q]),slide:[...o.slide].filter(([x])=>o.pieces.has(x)),removed:o.removed.slice(),burned:o.burned.slice(),ejected:o.ejected.slice(),plates:[...o.plates],bodies:t.bodies().map(x=>{const w=t.pose(x);return{id:x,p:w.p.map(q=>+q.toFixed(4)),q:w.q.map(q=>+q.toFixed(5)),sleep:w.sleep,free:Tt(x)}})}}function Ss(x){if(!x||x.room!==n.id)throw new Error("снимок другой комнаты");o.t=x.t,o.p=x.p;for(const w of[...o.joints.keys()])x.joints.includes(w)||(o.joints.delete(w),t.unjoint(w));o.cutProg=new Map(x.cut);for(const w of x.panels){for(let q=0;q<4;q++)w.bolts[q]&&F.cut(w.id,q,99);w.plate==="off"&&F.take(w.id),w.plate==="off"&&w.seated}for(const w of x.filled||[]){o.filled.add(w),ce(p.get(w));for(const q of[...o.joints.values()].filter(y=>y.prefab===w))x.joints.includes(q.id)||(o.joints.delete(q.id),t.unjoint(q.id))}o.openTiles=(x.tiles||[]).slice(),$();for(const w of x.hulls||[])Ie(w),t.remove("plate:"+w),o.plates.delete("plate:"+w);Q.restore(x.screens),o.cablesCut=new Set(x.cables),o.breakers=new Map(x.breakers);for(const[w,q]of x.doors){const y=o.doors.get(w);y&&(y.want=y.open=q,t.setStatic(y.box.id,q<=.5))}for(const[w,q]of x.opens){const y=o.opens.get(w);y&&(y.want=y.open=q)}for(const w of x.windows)(x.hulls||[]).includes(w)||Si(w);for(const[w,q,y]of x.tanks){const T=o.tanks.get(w);T&&(T.heat=q,T.gone=y)}o.removed=x.removed.slice(),o.burned=x.burned.slice(),o.ejected=x.ejected.slice();for(const w of x.removed)t.has(w)&&t.remove(w);for(const[w,q]of x.plates){const y=x.bodies.find(X=>X.id===w),T=N.get(q);!y||!T||(t.addPart({id:w,kind:"plate",shape:"box",h:T.tile?Po(T):T.face[1]==="y"?[Kt.w/2,.012,Kt.w/2]:T.face[1]==="x"?[.012,Kt.w/2,Kt.w/2]:[Kt.w/2,Kt.w/2,.012],p:y.p,q:y.q,mass:3},{}),o.partKind.set(w,"plate"),o.partSm.set(w,pr.plate),o.plates.set(w,q))}h.restoreBodies(x.cut2);for(const w of x.bodies)t.has(w.id)&&(w.free&&t.release(w.id),t.setPose(w.id,w.p,w.q));h.restoreJoints(x.cut2);for(const w of x.bodies)t.has(w.id)&&t.setPose(w.id,w.p,w.q);d.restore(x.notes),tt(!0),x.hp!==void 0&&(o.hp=x.hp),o.exit=!!x.exit;for(const w of[...o.leaf.keys()])t.has(w)||o.leaf.delete(w);for(const w of[...o.slide.keys()])t.has(w)||(o.doors.get(o.slide.get(w).door).cut=!0,o.slide.delete(w));for(const[w,q]of x.slide||[])t.has(w)&&o.slide.set(w,q);for(const[w,q,y,T,X]of x.leaf||[])t.has(w)&&o.leaf.set(w,{cab:q,hinge:y,p:T,q:X,h:t.half(w)});Be(),c("restored",{bodies:x.bodies.length,joints:x.joints.length})}function Si(x){const w=o.windows.get(x);w&&(w.broken=!0,w.hp=0,t.setStatic(x,!1))}return{S:o,C:n,phys:t,panels:F,danger:I,weld:(x,w)=>h.weld(x,w),cutter:h,notes:d,shell:f,doorOf:R,anchors:tt,standing:ut,seamLoads:Lt,seamCap:bt,fallRule:He,burden:te,turnHeld:ct,grabbable:Tt,heavy:Ke,grabInfo:je,cutInfo:We,aimGrip:ne,aimWeld:H,isScrap:Fe,boltAt:(x,w)=>B(N.get(x),w),tiles:u,tileOf:x=>p.get(x),monitors:Q,screenOn:x=>Ge(x)&&Q.on(x),coverOf:pe,blowHull:Ie,letGo:at,powered:()=>ke,isOn:Ge,aim:E,cut:K,use:Z,grab:Dt,drop:Ft,throwHeld:gn,step:ci,playerCol:Yn,usable:he,canGrab:Te,canCut:Me,progress:Ne,explode:xe,cutJoint:Mt,toggleDoor:we,toggleBreaker:A,toggleCab:k,breakWindow:ye,snapshot:bs,restore:Ss,exposedCables:U,holdPoint:Nn}}const T_={lineH:.085},La={move:.012,turn:.02};function A_(n,e=new Set){const t=new Map;let i=0;const s=r=>{i++,n(r[0],r[2])};return{see(r,a){const l=t.get(r);if(!a){l&&(t.delete(r),e.has("stillshadow")||s(l.p));return}if(!l){t.set(r,{p:a.p.slice(),q:a.q.slice()}),e.has("stillshadow")||s(a.p);return}const o=Math.hypot(a.p[0]-l.p[0],a.p[1]-l.p[1],a.p[2]-l.p[2]),c=1-Math.abs(a.q[0]*l.q[0]+a.q[1]*l.q[1]+a.q[2]*l.q[2]+a.q[3]*l.q[3]);o<La.move&&c<La.turn*La.turn/8||(e.has("stillshadow")||(s(l.p),o>.5&&s(a.p)),l.p=a.p.slice(),l.q=a.q.slice())},sweep(r){for(const a of[...t.keys()])if(!r(a)){const l=t.get(a);t.delete(a),e.has("stillshadow")||s(l.p)}},touched:()=>i}}const tn={bevel:0},Sn=Math.PI/2,Ll=new cn,mo=new cn,Da=new ae,R_={wood:9071173,orange:13132830,teal:3112838,white:14276559,steel:11910338,steelDark:4869458,pad:10129258,copper:11036474,yellow:13672480,glass:10470616,O2:3108792,N2:3948356,H2:12071978};function Yt(n,e,t){ds(e[2],n.quaternion),t&&n.quaternion.multiply(Ll.set(t[0],t[1],t[2],t[3])),Bn(e[0],e[1],e[2],n.position)}function js(n,e,t){const i=typeof document<"u"?document.createElement("canvas"):null;if(!i)return null;i.width=n,i.height=e,t(i.getContext("2d"),n,e);const s=new Eo(i);return s.colorSpace=Pn,s.anisotropy=4,s}function Lf(n,e,t,i){const r=Math.round(e*256),a=Math.round(t*256);return js(r,a,(l,o,c)=>{if(l.fillStyle=i?"#06121a":"#020304",l.fillRect(0,0,o,c),!i||!n)return;const u=T_.lineH*256,p=Math.round(u*.72);l.font=`600 ${p}px ui-monospace, Menlo, monospace`,l.textBaseline="top",l.fillStyle="#ffcf6a",l.fillText(n.title,10,6),l.fillStyle="#9fe3e6",(n.rows||[]).forEach((d,h)=>l.fillText(d,10,6+u*(h+1))),l.fillStyle="rgba(160,230,255,0.05)";for(let d=0;d<c;d+=4)l.fillRect(0,d,o,1)})}function C_(n,e){return js(Math.round(n*200),Math.round(e*200),(t,i,s)=>{t.fillStyle="#05070a",t.fillRect(0,0,i,s),t.strokeStyle="rgba(190,215,230,0.55)",t.lineWidth=1.5;const r=[i*.56,s*.54];for(let a=0;a<14;a++){const l=a/14*Math.PI*2+Math.sin(a*5)*.2;t.beginPath(),t.moveTo(r[0],r[1]),t.lineTo(r[0]+Math.cos(l)*i*.7,r[1]+Math.sin(l)*i*.7),t.stroke()}for(const a of[.08,.17])t.beginPath(),t.arc(r[0],r[1],i*a,0,7),t.stroke()})}function P_(n){return js(256,360,(e,t,i)=>{e.fillStyle="#e8e0c8",e.fillRect(0,0,t,i),e.fillStyle="rgba(80,60,30,0.15)";for(let l=0;l<18;l++)e.fillRect(14,30+l*18,t-28,1);e.fillStyle="#2a2a33",e.font="15px Georgia, serif";const s=String(n||"").split(" ");let r="",a=34;for(const l of s){const o=r?r+" "+l:l;if(e.measureText(o).width>t-30){if(e.fillText(r,16,a),a+=18,r=l,a>i-12)break}else r=o}a<=i-12&&e.fillText(r,16,a)})}function L_(n){return js(256,256,(e,t,i)=>{e.fillStyle="#4a4d52",e.fillRect(0,0,t,i),e.strokeStyle="#c9a227",e.lineWidth=10,e.strokeRect(12,12,t-24,i-24),e.fillStyle="#d8b030",e.font="bold 92px ui-monospace, Menlo, monospace",e.textAlign="center",e.textBaseline="middle",e.fillText(String(n),t/2,i/2+4)})}function D_(n,e,{scene:t,lang:i="ru",tier:s={},mut:r=new Set}={}){const a=Fr[n.kit],[l,o,c]=n.size,u=e.texts[i]||e.texts.ru,p=Gx([0,0,0],[l,o,c]),d={lamp:Pi(13624063,3.2),lampWarm:Pi(16765600,3),emerg:Pi(16722458,2.6),glowWarm:Pi(16756832,4),lampOff:new un({color:1776671,roughness:.6,metalness:.2})},h=r.has("darkniche"),f={niche:new un({color:7172986,roughness:.6,metalness:.35,emissive:2303788,emissiveIntensity:1}),nicheFrame:new un({color:11055288,roughness:.45,metalness:.5,emissive:3883336,emissiveIntensity:1})},v={...Vx(p),lamp:d.lamp,emerg:d.emerg,glowWarm:d.glowWarm,...f},g=new Vs;g.userData.room=n.id,t.add(g);const m=[],_=new ii,R=n.hatches.map(M=>({x0:M.x0,x1:M.x1,y0:-.36,y1:.001,z0:M.z0,z1:M.z1,id:M.id})),S=M=>[...n.portals.filter(O=>O.side===M).map(O=>({a0:O.a0,a1:O.a1,y0:O.y0,y1:O.y1})),...n.windows.filter(O=>O.side===M).map(O=>({a0:O.a0,a1:O.a1,y0:O.y0,y1:O.y1}))],C=a.dado,D=(n.base||n.statics).filter(M=>["floor","ceil","wall","stub"].includes(M.kind));let b=null;function I(M){const O=M&&M.S,G=O?O.openTiles.map(M.tileOf):[],j=new ii;ii.holes=[...n.niches.map(le=>({...le})),...R,...G.map(le=>({...Vo(le),id:le.id})),...O?[...O.hulls.values()].map(le=>({...le.through,id:le.id})):[]];try{for(const le of D)le.kind==="floor"||le.kind==="stub"&&le.id.endsWith("_floor")?j.slab("floor",le.x0,le.y0,le.z0,le.x1,le.y1,le.z1,{bevel:0}):le.kind==="ceil"||le.kind==="stub"&&le.id.endsWith("_ceil")?j.slab("ceil",le.x0,le.y0,le.z0,le.x1,le.y1,le.z1,{bevel:0}):(le.kind==="wall"||le.kind==="stub")&&j.slab("wall",le.x0,le.y0,le.z0,le.x1,le.y1,le.z1,{bevel:0})}finally{ii.holes=null}for(const[le,me,Ce,ue]of[["W","x",.012,c],["E","x",l-.012,c],["S","z",.012,l],["N","z",c-.012,l]]){const fe=G.filter(Je=>Je.side===le).map(Je=>({a0:Je.u0+.02,a1:Je.u1-.02,y0:0,y1:9,v0:Je.v0,v1:Je.v1})),se=Je=>{const lt=Je.sort((Ye,ht)=>Ye.a0-ht.a0),vt=[];for(const Ye of lt){const ht=vt[vt.length-1];ht&&Ye.a0<=ht.a1+.02?(ht.a1=Math.max(ht.a1,Ye.a1),ht.y1=Math.max(ht.y1,Ye.y1)):vt.push({...Ye})}return vt},De=S(le).filter(Je=>Je.y0<C).map(Je=>({...Je,a0:Je.a0-.1,a1:Je.a1+.1,y0:0,y1:C+.1})),$e=(Je,lt,vt)=>se([...Je,...fe.filter(Ye=>Ye.v0<vt&&Ye.v1>lt)]);j.wall("wallDark",me,Ce,0,ue,.08,C,.024,$e(De,.08,C)),j.wall("steelDark",me,Ce,0,ue,0,.08,.03,$e(De.map(Je=>({...Je,y1:.2})),0,.08)),j.wall("steel",me,Ce,0,ue,C,C+.03,.03,$e(S(le).filter(Je=>Je.y0<C+.03).map(Je=>({...Je,a0:Je.a0-.12,a1:Je.a1+.12,y0:0,y1:9})),C,C+.03))}for(const le of G){const me=Vo(le),Ce=Ws(le),ue=.012,fe=M.tileOf(le.id+".hull"),se=fe&&O.hulls.has(fe.id);for(const[nt,St]of[["x",0],["y",1],["z",2]]){const It=me[nt+"0"],Bt=me[nt+"1"],Cn=(wi,Oi)=>{const Bi={...me};Bi[nt+"0"]=wi,Bi[nt+"1"]=Oi,j.slab(h?"steelDark":"niche",Bi.x0,Bi.y0,Bi.z0,Bi.x1,Bi.y1,Bi.z1,{bevel:0})};if(Ce[St]){const wi=Ce[St]>0?It:Bt;se||Cn(wi-ue/2,wi+ue/2)}else Cn(It,It+ue),Cn(Bt-ue,Bt)}if(fe&&!se){const nt=hs(fe,.004,.02);j.slab("steel",nt.x0,nt.y0,nt.z0,nt.x1,nt.y1,nt.z1,{bevel:0})}const De=Ce.findIndex(nt=>nt),$e="xyz"[De],Je=Ce[De]>0?me[$e+"0"]:me[$e+"1"],lt=["x","y","z"].filter(nt=>nt!==$e),vt=.04,Ye=.03,ht=(nt,St,It)=>{const Bt={...me};Bt[$e+"0"]=Ce[De]>0?Je:Je-Ye,Bt[$e+"1"]=Ce[De]>0?Je+Ye:Je,Bt[nt+"0"]=St,Bt[nt+"1"]=It,j.slab("nicheFrame",Bt.x0,Bt.y0,Bt.z0,Bt.x1,Bt.y1,Bt.z1,{bevel:0})};if(!h)for(const nt of lt)ht(nt,me[nt+"0"]+ue,me[nt+"0"]+ue+vt),ht(nt,me[nt+"1"]-ue-vt,me[nt+"1"]-ue);if(!Ce[1]&&!h){const nt={...me},St=lt.find(Bt=>Bt!=="y");nt.y0=me.y1-ue-.016,nt.y1=me.y1-ue,nt[St+"0"]=me[St+"0"]+.05,nt[St+"1"]=me[St+"1"]-.05;const It=Ce[De]>0?me[$e+"1"]:me[$e+"0"];nt[$e+"0"]=Ce[De]>0?It-.05:It+.03,nt[$e+"1"]=Ce[De]>0?It-.03:It+.05,j.slab("lamp",nt.x0,nt.y0,nt.z0,nt.x1,nt.y1,nt.z1,{bevel:0})}}const ve=j.build(v);ve.userData.room=n.id,b&&(g.remove(b),b.traverse(le=>{le.isMesh&&le.geometry.dispose()})),b=ve,g.add(ve)}I(null);for(let M=a.beam/2;M<l;M+=a.beam)_.box("steelDark",M,o-.06,c/2,.14,.12,c,tn);_.pipe("steel",[.25,o-.22,.2],[.25,o-.22,c-.2],.05,{seg:10}),_.pipe("copper",[.42,o-.18,.2],[.42,o-.18,c-.2],.03,{seg:8});for(const M of n.portals){const j=(M.a0+M.a1)/2,ve=M.a1-M.a0,le=(Ce,ue,fe,se)=>{if(M.along==="z"){const De=M.side==="W"?.025:l-.025;_.box("orange",De,ue,Ce,.05,se,fe,tn)}else{const De=M.side==="S"?.025:c-.025;_.box("orange",Ce,ue,De,fe,se,.05,tn)}};le(M.a0-.12/2,(M.y0+M.y1)/2,.12,M.y1-M.y0),le(M.a1+.12/2,(M.y0+M.y1)/2,.12,M.y1-M.y0),le(j,M.y1+.12/2,ve+2*.12,.12);const me=M.along==="z"?[M.side==="W"?.03:l-.03,M.y0+.3,M.a0-.3]:[M.a0-.3,M.y0+.3,M.side==="S"?.03:c-.03];_.box("emerg",me[0],me[1],me[2],M.along==="z"?.02:.2,.05,M.along==="z"?.2:.02,tn)}for(const M of n.windows){const G=M.side==="W"||M.side==="E"?"z":"x",j={W:0,E:l,S:0,N:c}[M.side],ve=M.side==="W"||M.side==="S"?1:-1,le=.04,me=(M.a0+M.a1)/2,Ce=M.a1-M.a0,ue=(fe,se,De,$e)=>G==="z"?_.box("steel",j+ve*le/2,se,fe,le,$e,De,tn):_.box("steel",fe,se,j+ve*le/2,De,$e,le,tn);ue(M.a0-.06/2,(M.y0+M.y1)/2,.06,M.y1-M.y0+2*.06),ue(M.a1+.06/2,(M.y0+M.y1)/2,.06,M.y1-M.y0+2*.06),ue(me,M.y0-.06/2,Ce+2*.06,.06),ue(me,M.y1+.06/2,Ce+2*.06,.06),ue(me,M.y0-.1,Ce+.3,.05)}for(const M of n.statics)M.kind==="screen"&&_.slab("steelDark",M.x0-(M.x1-M.x0>.2?.03:0),M.y0-.03,M.z0-(M.z1-M.z0>.2?.03:0),M.x1+(M.x1-M.x0>.2?.03:0),M.y1+.03,M.z1+(M.z1-M.z0>.2?.03:0),tn),M.kind==="cabinet"&&_.slab(M.mat,M.x0,M.y0,M.z0,M.x1,M.y1,M.z1,tn);for(const M of n.parts)if(M.hinge){const O=M.hinge,G=O.sg;((ve,le,me)=>{for(const Ce of O.ys){const ue=(O.along==="x"?O.at[0]:O.at[2])+ve,fe=O.along==="x"?O.at[2]:O.at[0],se=fe-G*.036,De=se+G*me;O.along==="x"?_.slab("steel",ue-le/2,O.at[1]+Ce-.05,Math.min(se,De),ue+le/2,O.at[1]+Ce+.05,Math.max(se,De),tn):_.slab("steel",Math.min(se,De),O.at[1]+Ce-.05,ue-le/2,Math.max(se,De),O.at[1]+Ce+.05,ue+le/2,tn)}})(O.side===0?-.006:.006,.012,.04)}for(const M of n.joints)M.kind==="rivet"&&_.box("steelDark",M.at[0],M.at[1],M.at[2],.05,.05,.05,tn);for(const M of n.fixtures)_.box("steelDark",M.x,M.y-.04,M.z,M.w+.1,.08,M.l+.1,tn);for(const M of n.statics)if(M.kind==="shelf"&&_.slab(M.mat||"steel",M.x0,M.y0,M.z0,M.x1,M.y1,M.z1,{bevel:.006}),M.kind==="pipe"){const O={W:[M.off,null],E:[l-M.off,null],S:[null,M.off],N:[null,c-M.off]}[M.side],G=j=>O[0]!==null?[O[0],M.y,j]:[j,M.y,O[1]];_.pipe(M.mat==="copper"?"copper":M.mat,G(M.a0),G(M.a1),M.r,{seg:10});for(let j=M.a0+.25;j<M.a1;j+=1){const ve=G(j),le={W:[0,null],E:[l,null],S:[null,0],N:[null,c]}[M.side];le[0]!==null?_.slab("steelDark",Math.min(le[0],ve[0]),M.y-.02,j-.03,Math.max(le[0],ve[0]),M.y+.02,j+.03,tn):_.slab("steelDark",j-.03,M.y-.02,Math.min(le[1],ve[2]),j+.03,M.y+.02,Math.max(le[1],ve[2]),tn)}}for(const M of n.hatches){const G=R.find(j=>j.id===M.id);_.slab("steel",M.x0-.05,-.004,M.z0-.05,M.x1+.05,.006,M.z0,tn),_.slab("steel",M.x0-.05,-.004,M.z1,M.x1+.05,.006,M.z1+.05,tn),_.slab("steel",M.x0-.05,-.004,M.z0,M.x0,.006,M.z1,tn),_.slab("steel",M.x1,-.004,M.z0,M.x1+.05,.006,M.z1,tn);for(const[j,ve,le,me]of[[G.x0,G.x1,G.z0,G.z0+.012],[G.x0,G.x1,G.z1-.012,G.z1],[G.x0,G.x0+.012,G.z0,G.z1],[G.x1-.012,G.x1,G.z0,G.z1]])_.slab("steelDark",j,G.y0,le,ve,-.004,me,tn);_.slab("steelDark",G.x0,G.y0,G.z0,G.x1,G.y0+.012,G.z1,tn)}for(const M of n.panels){const O=qo(M),G={"+x":[1,0,0],"-x":[-1,0,0],"+z":[0,0,1],"-z":[0,0,-1],"+y":[0,1,0],"-y":[0,-1,0]}[M.face],j=.012;for(const[ve,le]of[["x",0],["y",1],["z",2]]){const me=O[ve+"0"],Ce=O[ve+"1"],ue=(fe,se)=>{const De={...O};De[ve+"0"]=fe,De[ve+"1"]=se,_.slab("steelDark",De.x0,De.y0,De.z0,De.x1,De.y1,De.z1,{bevel:0})};if(G[le]){const fe=G[le]>0?me:Ce;ue(fe-j/2,fe+j/2)}else ue(me,me+j),ue(Ce-j,Ce)}}const F=_.build(v);F.userData.room=n.id,g.add(F);const N=new ev(t,{spots:3,points:3});s.spots&&N.setTier(s);const B=new Map;for(const M of n.lights)B.set(M.id,N.add({...M,pos:M.pos.slice(),to:M.to.slice(),reach:30}));for(const M of n.portals){const O={W:[-1.2,M.y1-.2,(M.a0+M.a1)/2],E:[l+1.2,M.y1-.2,(M.a0+M.a1)/2],S:[(M.a0+M.a1)/2,M.y1-.2,-1.2],N:[(M.a0+M.a1)/2,M.y1-.2,c+1.2]}[M.side];N.add({kind:"point",pos:O,color:a.stub.light,power:3,dist:5,reach:30})}if(o>5)for(let M=1.6;M<o-1;M+=3.2)N.add({kind:"point",pos:[l/2,M,c-.25],color:13623551,power:4,dist:6,reach:30});N.add({kind:"point",pos:[l/2,.4,c/2],color:16724e3,power:1.6,dist:9,reach:30,prio:.5,name:"emergency"});const V=new Map;for(const M of n.fixtures){const O=n.lights.find(j=>j.id===M.id),G=new At(new Xt(M.w-.06,.02,M.l-.06),O&&O.color===16765600?d.lampWarm:d.lamp);Yt(G,[M.x,M.y-.09,M.z]),g.add(G),V.set(M.id,{m:G,on:G.material})}const Q=new Map,$=new Map,oe=Fu(),de=M=>{if($.has(M))return $.get(M);const O=R_[M]??(Oo[M]?Oo[M][1]:9080726),G=["steel","steelDark","O2","N2","H2"].includes(M),j=new un({color:O,roughness:G?.45:.7,metalness:G?.7:.1,map:G?oe.metal.map:oe.paint.map,normalMap:G?oe.metal.normalMap:oe.paint.normalMap});return $.set(M,j),j},ce={wood:["#b98d55","#7d5a30","#d9b27a"],board:["#cbb488","#8f7a52","#e6d4a8"],metal:["#9aa3ab","#5c646c","#dfe6ea"]},Ie=new Map;function pe(M){if(Ie.has(M))return Ie.get(M);const[O,G,j]=ce[M],ve=js(128,128,(le,me,Ce)=>{le.fillStyle=O,le.fillRect(0,0,me,Ce);let ue=7;const fe=()=>(ue=ue*16807%2147483647,ue/2147483647);if(M==="metal")for(let se=0;se<260;se++)le.fillStyle=fe()<.5?G:j,le.globalAlpha=.12+fe()*.25,le.fillRect(fe()*me,Math.floor(fe()*Ce),10+fe()*50,1);else for(let se=0;se<420;se++)le.fillStyle=fe()<.6?G:j,le.globalAlpha=.2+fe()*.4,M==="wood"?le.fillRect(fe()*me,fe()*Ce,1+fe()*2,8+fe()*26):le.fillRect(fe()*me,fe()*Ce,2+fe()*6,1+fe()*3);le.globalAlpha=1});return ve&&(ve.wrapS=ve.wrapT=Cr,m.push(ve)),Ie.set(M,ve),ve}const Ae=M=>["steel","steelDark","copper","glass"].includes(M)?"metal":M==="white"?"board":"wood",ge=new Map;function Le(M){if(ge.has(M))return ge.get(M);const O=de(M).clone(),G=pe(Ae(M));return O.onBeforeCompile=j=>{j.uniforms.uCutMap={value:G},j.vertexShader=`attribute float aCut;
varying float vCut;
varying vec2 vCutUv;
`+j.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
  vCut = aCut; vCutUv = uv;`),j.fragmentShader=`uniform sampler2D uCutMap;
varying float vCut;
varying vec2 vCutUv;
`+j.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
  if (vCut > 0.5) diffuseColor.rgb = texture2D(uCutMap, vCutUv).rgb;`)},O.customProgramCacheKey=()=>"roomcut",ge.set(M,O),O}function qe(M){const O=[],G=[],j=[],ve=[],le=new yt,me=new ae;for(const{poly:ue,m:fe}of M){fe&&le.getNormalMatrix(fe);for(const se of ue.faces){const De=me.set(...se.n);fe&&De.applyMatrix3(le).normalize();const $e=De.x,Je=De.y,lt=De.z;for(let vt=1;vt+1<se.v.length;vt++)for(const Ye of[se.v[0],se.v[vt],se.v[vt+1]])me.set(Ye[0],Ye[1],Ye[2]),fe&&me.applyMatrix4(fe),O.push(me.x,me.y,me.z),G.push($e,Je,lt),j.push(Ye[3],Ye[4]),ve.push(se.cut?1:0)}}const Ce=new fn;return Ce.setAttribute("position",new wt(O,3)),Ce.setAttribute("normal",new wt(G,3)),Ce.setAttribute("uv",new wt(j,2)),Ce.setAttribute("aCut",new wt(ve,1)),Ce}const _e=new Map;let ke=!1;const Oe=new Set;function Ge(M){let O;if(M.shape==="cyl"){const j=M.h[0],ve=M.h[1],le=[new hi(j,j,ve*2-.1,18,1),new Zi(j,18,8,0,Math.PI*2,0,Sn),new hi(.025,.03,.08,10)];le[1].translate(0,ve-.05,0),le[2].translate(0,ve+.03,0),O=new fn;const me=le.map(se=>se.toNonIndexed()),Ce=[],ue=[],fe=[];for(const se of me)Ce.push(...se.attributes.position.array),ue.push(...se.attributes.normal.array),fe.push(...se.attributes.uv.array);O.setAttribute("position",new wt(Ce,3)),O.setAttribute("normal",new wt(ue,3)),O.setAttribute("uv",new wt(fe,2))}else{const j=M.h.map(ve=>ve.toFixed(3)).join(",");O=Q.get(j),O||(O=new Xt(M.h[0]*2,M.h[1]*2,M.h[2]*2),O.setAttribute("aCut",new wt(new Float32Array(O.attributes.position.count),1))),Q.set(j,O)}const G=new At(O,Rl.has(M.kind)?Le(M.mat||M.kind):de(M.mat||M.kind));return G.castShadow=!0,G.receiveShadow=!0,G.userData.part=M.id,G.userData.prefab=M.prefab,g.add(G),_e.set(M.id,G),G}function Be(M,O){const G=M.hinge,j=G.along==="x",ve=j?M.h[0]:M.h[2],le=M.h[1],me=G.sg,Ce=M.h[j?2:0],ue=G.side===0?1:-1,fe=nt=>{const St=[],It=[],Bt=[];for(const wi of nt){const Oi=wi.toNonIndexed();St.push(...Oi.attributes.position.array),It.push(...Oi.attributes.normal.array),Bt.push(...Oi.attributes.uv.array)}const Cn=new fn;return Cn.setAttribute("position",new wt(St,3)),Cn.setAttribute("normal",new wt(It,3)),Cn.setAttribute("uv",new wt(Bt,2)),Cn},se=(nt,St,It,Bt,Cn,wi)=>{const Oi=j?new Xt(Bt,Cn,wi):new Xt(wi,Cn,Bt);return Oi.translate(j?nt:It,St,j?It:nt),Oi},De=me*(Ce+.004),$e=.035,Je=fe([se(0,le-$e,De,2*ve,2*$e,.008),se(0,-le+$e,De,2*ve,2*$e,.008),se(-ve+$e,0,De,2*$e,2*le,.008),se(ve-$e,0,De,2*$e,2*le,.008)]),lt=new At(Je,O.material);lt.castShadow=!1,lt.receiveShadow=!0,O.add(lt);const vt=j?G.at[0]-M.p[0]:G.at[2]-M.p[2];j?G.at[2]-M.p[2]:G.at[0]-M.p[0];const Ye=[se(ue*(ve-.07),.05,me*(Ce+.035),.018,.16,.018),se(ue*(ve-.07),.12,me*(Ce+.018),.014,.014,.036),se(ue*(ve-.07),-.02,me*(Ce+.018),.014,.014,.036)];for(const nt of G.ys)Ye.push(se(vt+ue*.035,nt,me*(Ce+.004),.06,.09,.006));const ht=new At(fe(Ye),de("yellow"));ht.castShadow=!1,ht.receiveShadow=!0,O.add(ht)}for(const M of n.parts){const O=Ge(M);M.hinge&&Be(M,O)}const Qe=new Map;for(const M of n.doors){if(n.parts.some(j=>j.prefab===M.id&&j.kind==="door"))continue;const O=M.box,G=new At(new Xt(O.x1-O.x0,O.y1-O.y0,O.z1-O.z0),de(M.kind==="sealed"?"red":"steelDark"));G.castShadow=!0,G.receiveShadow=!0,G.userData.door=M.id,g.add(G),Qe.set(M.id,{m:G,d:M})}const Mt=new Map,Xe=a.wallT;for(const M of n.portals){const O=M.a1-M.a0,G=M.along==="z"?new Xt(Xe+.1,.012,O):new Xt(O,.012,Xe+.1),j={W:[-Xe/2,(M.a0+M.a1)/2],E:[l+Xe/2,(M.a0+M.a1)/2],S:[(M.a0+M.a1)/2,-Xe/2],N:[(M.a0+M.a1)/2,c+Xe/2]}[M.side],ve=M.y0>0,le=ve?M.along==="z"?new Xt(.05,.16,O):new Xt(O,.16,.05):G,me=new At(le,ve?d.lampWarm:de("yellow"));me.receiveShadow=!0,Yt(me,ve?M.along==="z"?[M.side==="W"?.02:l-.02,M.y0-.09,j[1]]:[j[0],M.y0-.09,M.side==="S"?.02:c-.02]:[j[0],.006,j[1]]),g.add(me),Mt.set(M.id,me)}const tt=new un({color:10470616,roughness:.05,metalness:.2,transparent:!0,opacity:.22,depthWrite:!1}),ut=new Map;for(const M of n.windows){const O=n.statics.find(j=>j.id===M.id),G=new At(new Xt(O.x1-O.x0,O.y1-O.y0,O.z1-O.z0),tt);Yt(G,[(O.x0+O.x1)/2,(O.y0+O.y1)/2,(O.z0+O.z1)/2]),G.userData.window=M.id,g.add(G),ut.set(M.id,G)}const et=js(512,256,(M,O,G)=>{M.fillStyle="#01030a",M.fillRect(0,0,O,G);for(let j=0;j<260;j++){const ve=Math.random();M.fillStyle=`rgba(${200+ve*55},${210+ve*45},255,${.3+ve*.7})`,M.fillRect(Math.random()*O,Math.random()*G,ve>.92?2:1,ve>.92?2:1)}});for(const M of n.windows){const O=new At(new Ii((M.a1-M.a0)*3,(M.y1-M.y0)*3),new ps({map:et,toneMapped:!1})),G=3,j={W:[-G,null],E:[l+G,null],S:[null,-G],N:[null,c+G]}[M.side],ve=(M.a0+M.a1)/2,le=(M.y0+M.y1)/2,me=j[0]!==null?[j[0],le,ve]:[ve,le,j[1]],Ce={W:Sn,E:-Sn,S:0,N:Math.PI}[M.side];Yt(O,me,[0,Math.sin(Ce/2),0,Math.cos(Ce/2)]),g.add(O)}const Rt=new Map;for(const M of n.texts){const O=n.statics.find(fe=>fe.id===M.id)||(n.screenBoxes||[]).find(fe=>fe.id===M.id),G=n.prefabOf[M.id],j=G.wall,ve={W:Sn,E:-Sn,S:0,N:Math.PI}[j],le=.004,me={W:[1,0],E:[-1,0],S:[0,1],N:[0,-1]}[j],Ce=j==="W"?O.x1:j==="E"?O.x0:(O.x0+O.x1)/2,ue=j==="S"?O.z1:j==="N"?O.z0:(O.z0+O.z1)/2;if(M.kind==="screen"){const fe=Lf(u[M.key],M.w,M.h,!0),se=new At(new Ii(M.w,M.h),new ps({map:fe,toneMapped:!1,color:16777215}));Yt(se,[Ce+me[0]*le,(O.y0+O.y1)/2,ue+me[1]*le],[0,Math.sin(ve/2),0,Math.cos(ve/2)]),se.userData.screen=M.id,g.add(se),Rt.set(M.id,{m:se,texOn:fe,texOff:Lf(null,M.w,M.h,!1),texBad:C_(M.w,M.h),t:M,at:[Ce+me[0]*le,(O.y0+O.y1)/2,ue+me[1]*le],yaw:[0,Math.sin(ve/2),0,Math.cos(ve/2)],body:n.parts.some(De=>De.id===M.id&&De.kind==="monitor")?M.id:null,home:[(O.x0+O.x1)/2,(O.y0+O.y1)/2,(O.z0+O.z1)/2]}),fe&&m.push(fe)}else{const fe=P_(u[M.key]),se=new At(new Ii(.21,.3),new un({map:fe,roughness:.9,metalness:0,emissive:2761750,emissiveIntensity:.4}));Yt(se,[Ce+me[0]*le,(O.y0+O.y1)/2,ue+me[1]*le],[0,Math.sin(ve/2),0,Math.cos(ve/2)]),se.userData.note=M.id,g.add(se),Rt.set(M.id,{m:se,note:!0,t:M})}}const bt=new Map,Lt=new Map;for(const M of n.statics.filter(O=>O.kind==="breaker")){const O=new At(new Xt(.05,.16,.05),de("red")),G=n.prefabOf[M.prefab],j={W:[1,0],E:[-1,0],S:[0,1],N:[0,-1]}[G.wall],ve=G.wall==="W"?M.x1:G.wall==="E"?M.x0:(M.x0+M.x1)/2,le=G.wall==="S"?M.z1:G.wall==="N"?M.z0:(M.z0+M.z1)/2;O.userData.base=[ve+j[0]*.04,(M.y0+M.y1)/2,le+j[1]*.04],O.userData.side=G.wall;const me=new At(new Xt(G.wall==="W"||G.wall==="E"?.005:M.x1-M.x0,.04,G.wall==="W"||G.wall==="E"?M.z1-M.z0:.005),de("yellow"));Yt(me,[ve+j[0]*.003,M.y1-.05,le+j[1]*.003]),g.add(me),g.add(O),bt.set(M.prefab,O);const Ce=new At(new Xt(M.x1-M.x0,M.y1-M.y0,M.z1-M.z0),de("steelDark"));Yt(Ce,[(M.x0+M.x1)/2,(M.y0+M.y1)/2,(M.z0+M.z1)/2]),Ce.castShadow=!0,Ce.receiveShadow=!0,g.add(Ce),Lt.set(M.prefab,Ce)}const mt=new Map;for(const M of n.hatches){const O=L_(M.number),G=new At(new Xt(M.x1-M.x0-.02,.03,M.z1-M.z0-.02),new un({map:O,roughness:.6,metalness:.5}));G.receiveShadow=!0,G.userData.hatch=M.id,g.add(G),mt.set(M.id,{m:G,h:M})}const Ot=new At(new Ii(.85,.85),d.glowWarm);Ot.visible=!1,g.add(Ot);const Ue={plate:new un({color:8094344,metalness:.55,roughness:.5,vertexColors:!0}),bolt:new un({color:11910338,metalness:.8,roughness:.35}),head:new un({color:2369323,metalness:.4,roughness:.5})},He=(()=>{const M=Kt.w,O=.03,G=[[M,M,.018,0,0,.009,8094344]];for(const fe of[-1,1])G.push([M+2*O,O,.004,0,fe*(M/2+O/2),.002,14856732]),G.push([O,M,.004,fe*(M/2+O/2),0,.002,14856732]);const j=[],ve=[],le=[],me=[],Ce=new xt;for(const[fe,se,De,$e,Je,lt,vt]of G){const Ye=new Xt(fe,se,De).toNonIndexed();Ye.translate($e,Je,lt),j.push(...Ye.attributes.position.array),ve.push(...Ye.attributes.normal.array),me.push(...Ye.attributes.uv.array),Ce.set(vt);for(let ht=0;ht<Ye.attributes.position.count;ht++)le.push(Ce.r/.48,Ce.g/.51,Ce.b/.53)}const ue=new fn;return ue.setAttribute("position",new wt(j,3)),ue.setAttribute("normal",new wt(ve,3)),ue.setAttribute("uv",new wt(me,2)),ue.setAttribute("color",new wt(le,3)),ue})(),rt=(()=>{const M=Kt.w,O=.035,G=[[M,O,.02,0,M/2-O/2,.01],[M,O,.02,0,-M/2+O/2,.01],[O,M,.02,M/2-O/2,0,.01],[O,M,.02,-M/2+O/2,0,.01]];for(let fe=0;fe<5;fe++)G.push([M-2*O,.022,.012,0,-M/2+O+(fe+.5)*(M-2*O)/5,.012,!0]);const j=[],ve=[],le=[],me=[],Ce=new xt(6120555);for(const[fe,se,De,$e,Je,lt,vt]of G){const Ye=new Xt(fe,se,De).toNonIndexed();vt&&Ye.rotateX(.6),Ye.translate($e,Je,lt),j.push(...Ye.attributes.position.array),ve.push(...Ye.attributes.normal.array),me.push(...Ye.attributes.uv.array);for(let ht=0;ht<Ye.attributes.position.count;ht++)le.push(Ce.r/.48,Ce.g/.51,Ce.b/.53)}const ue=new fn;return ue.setAttribute("position",new wt(j,3)),ue.setAttribute("normal",new wt(ve,3)),ue.setAttribute("uv",new wt(me,2)),ue.setAttribute("color",new wt(le,3)),ue})(),it=new Map,te=M=>{if(M&&M.tile){const O=Po(M),G=O.map(j=>j.toFixed(3)).join();if(!it.has(G)){const j=new Xt(O[0]*2,O[1]*2,O[2]*2);j.setAttribute("color",new wt(new Float32Array(j.attributes.position.count*3).fill(1),3)),it.set(G,j)}return it.get(G)}return M&&M.panel==="vent"?rt:He},ct=(M,O)=>n.panels.find(G=>G.id===O)||M.tileOf(O),st={"+y":[-Sn,0],"-y":[Sn,0],"+x":[0,Sn],"-x":[0,-Sn],"+z":[0,0],"-z":[0,Math.PI]},Y=new Map;for(const M of n.panels){const O=new At(te(M),Ue.plate),[G,j]=st[M.face],ve=new Mn(G,j,0,"YXZ"),le=new cn().setFromEuler(ve),me={"+y":[0,.003,0],"-y":[0,-.003,0],"+x":[.003,0,0],"-x":[-.003,0,0],"+z":[0,0,.003],"-z":[0,0,-.003]}[M.face];Yt(O,[M.x+me[0],M.y+me[1],M.z+me[2]],[le.x,le.y,le.z,le.w]),O.receiveShadow=!0,O.userData.panel=M.id,g.add(O),Y.set(M.id,{m:O,q:[le.x,le.y,le.z,le.w]})}const W=new jn(new hi(Kt.bolt*.6,Kt.bolt*.72,.014,6),Ue.head,Math.max(1,n.panels.length*4));W.count=n.panels.length*4,g.add(W);const xe=n.tiles||[];xe.filter(M=>!M.hull);const ye=new jn(new hi(.017,.021,.012,6),Ue.head,Math.max(1,xe.length*4));ye.castShadow=!1,ye.frustumCulled=!1,g.add(ye);const we=new ae(0,1,0),k=new ae;let A="";function ee(M){const O=M.S,G=`${O.evN}:${O.carveN||0}`;if(G===A)return;A=G;let j=0;for(const ve of xe){if(ve.hull&&!(O.openTiles.includes(ve.tileOf)&&!O.hulls.has(ve.id)))continue;const le=M.panels.view(ve.id);if(le.plate==="on")for(let me=0;me<4;me++){if(le.bolts[me])continue;const Ce=Co(ve,me),ue=Ws(ve);K.position.copy(Bn(Ce[0]-ue[0]*.014,Ce[1]-ue[1]*.014,Ce[2]-ue[2]*.014,Da)),K.quaternion.copy(ds(Ce[2])).multiply(Ll.setFromUnitVectors(we,k.set(ue[0],ue[1],ue[2]))),K.scale.setScalar(1),K.updateMatrix(),ye.setMatrixAt(j++,K.matrix)}}ye.count=j,ye.instanceMatrix.needsUpdate=!0,Ee!==(O.carveN||0)&&(Ee=O.carveN||0,I(M),Fe=!0)}let Ee=0;const Se={pad:[new Xt(1,1,1),"pad"],tray:[new Xt(1,1,1),"steelDark"],jbox:[new Xt(1,1,1),"yellow"],tubeC:[new hi(.5,.5,1,8),"copper"],tubeS:[new hi(.5,.5,1,8),"steel"]},ze={};for(const M of Object.keys(Se)){const O=new jn(Se[M][0],de(Se[M][1]),160);O.frustumCulled=!1,O.castShadow=!1,O.receiveShadow=!0,O.visible=!1,O.count=0,g.add(O),ze[M]=O}function E(M){const O={};for(const G of Object.keys(Se))O[G]=0;for(const G of n.parts){if(!G.fill)continue;const j=M.phys.pose(G.id);if(!j)continue;const ve=G.kind==="tube"?G.mat==="copper"?"tubeC":"tubeS":G.kind;if(O[ve]>=160)continue;Yt(K,j.p,j.q);const le=G.h;if(G.kind==="tube"){const me=le.indexOf(Math.max(...le));me===0&&K.quaternion.multiply(mo.setFromAxisAngle(w,-Sn)),me===2&&K.quaternion.multiply(mo.setFromAxisAngle(k.set(1,0,0),Sn));const Ce=Math.min(...le)*2;K.scale.set(Ce,Math.max(...le)*2,Ce)}else K.scale.set(le[0]*2,le[1]*2,le[2]*2);K.updateMatrix(),ze[ve].setMatrixAt(O[ve]++,K.matrix)}for(const G of Object.keys(Se))ze[G].count=O[G],ze[G].visible=O[G]>0,O[G]&&(ze[G].instanceMatrix.needsUpdate=!0)}const P=new Map;function H(M){for(const[O]of M.S.hulls){if(P.has(O))continue;const G=M.S.windows.get(O),j=new At(new Ii((G.a1-G.a0)*6,(G.y1-G.y0)*6),new ps({map:et,toneMapped:!1})),ve=3,le={W:[-ve,null],E:[l+ve,null],S:[null,-ve],N:[null,c+ve]}[G.side],me=(G.a0+G.a1)/2,Ce=(G.y0+G.y1)/2,ue={W:Sn,E:-Sn,S:0,N:Math.PI}[G.side];Yt(j,le[0]!==null?[le[0],Ce,me]:[me,Ce,le[1]],[0,Math.sin(ue/2),0,Math.cos(ue/2)]),g.add(j),P.set(O,j)}}const ne={live:new un({color:12071978,roughness:.5,metalness:.1}),dead:new un({color:2761252,roughness:.8})};let U=null;function re(M=new Set,O={}){U&&(g.remove(U),U.geometry.dispose());const G=new ii;for(const ve of n.cables){const le=ve.pts,me=O[ve.id];for(let Ce=1;Ce<le.length;Ce++){let ue=le[Ce-1],fe=le[Ce];if(me&&M.has(ve.id)&&Math.abs((ue[0]===fe[0]?ue[0]:me[0])-me[0])<.001&&Math.abs((ue[2]===fe[2]?ue[2]:me[2])-me[2])<.001&&me[0]>=Math.min(ue[0],fe[0])-.001&&me[0]<=Math.max(ue[0],fe[0])+.001&&me[2]>=Math.min(ue[2],fe[2])-.001&&me[2]<=Math.max(ue[2],fe[2])+.001){const De=[fe[0]-ue[0],0,fe[2]-ue[2]],$e=Math.hypot(De[0],De[2])||1,Je=[De[0]/$e*.04,0,De[2]/$e*.04];G.pipe("rubber",ue,[me[0]-Je[0],me[1],me[2]-Je[2]],.022,{seg:8}),G.pipe("rubber",[me[0]+Je[0],me[1],me[2]+Je[2]],fe,.022,{seg:8});continue}G.pipe("rubber",ue,fe,.022,{seg:8})}}const j=G.build({cloth:ne.live});U=j.children[0]||null,U&&(j.remove(U),U.castShadow=!1,g.add(U))}re(),new Gt;const K=new nn;let Z="",he="",Te=0,Fe=!1;const Ve=A_((M,O)=>N.touch(M,O),r),Me=[],We=new un({color:11121079,roughness:.45,metalness:.3,emissive:2759180,emissiveIntensity:.8}),je=Pi(16756832,5),Ne=Math.max(1,n.joints.filter(M=>M.kind==="hinge").length),ft=Math.max(1,n.joints.filter(M=>M.kind!=="hinge"&&M.kind!=="rivet").length),Ct=new jn(new hi(.013,.013,.1,10),de("yellow"),Ne),Tt=new jn(new Zi(.011,8,6),Ue.bolt,ft),Ke=new jn(new Zi(.021,12,8),Pi(16753722,6),64);for(const M of[Ct,Tt,Ke])M.frustumCulled=!1,M.castShadow=!1,M.visible=!1,M.count=0,g.add(M);let Vt=[];const pt=M=>{Vt=M},at=120,Dt=new jn(new Zi(.016,6,4),Pi(16760944,9),at);Dt.frustumCulled=!1,Dt.castShadow=!1,Dt.visible=!1,Dt.count=0,g.add(Dt);function Ft(M){const O=M.S;let G=0;for(const j of O.sparks){const ve=O.t-j.t;if(!(ve<0||ve>.9))for(let le=0;le<j.n&&G<at;le++){const me=De=>{const $e=Math.sin((le+1)*12.9898+j.seed*78.233+De*37.719)*43758.5453;return $e-Math.floor($e)},Ce=me(0)*Math.PI*2,ue=.6+me(1)*2.2,fe=-.5+me(2)*2.6,se=.35+me(3)*.55;ve>se||(Yt(K,[j.at[0]+Math.cos(Ce)*ue*ve,j.at[1]+fe*ve-4.9*ve*ve,j.at[2]+Math.sin(Ce)*ue*ve],null),K.scale.setScalar(1.2-ve/se),K.updateMatrix(),Dt.setMatrixAt(G++,K.matrix))}}Dt.count=G,Dt.visible=G>0,G&&(Dt.instanceMatrix.needsUpdate=!0)}function gn(M,O){const G=(me,Ce,ue,fe,se)=>{Yt(K,ue,fe),K.scale.setScalar(se),K.updateMatrix(),me.setMatrixAt(Ce,K.matrix)};let j=0,ve=0,le=0;for(const me of M.S.joints.values())Oe.has(me.prefab)||(me.kind==="hinge"&&j<Ne?G(Ct,j++,M.cutter.worldAt(me),null,1):me.kind==="dowel"&&ve<ft&&G(Tt,ve++,M.cutter.worldAt(me),null,1));for(const me of Vt)le<64&&G(Ke,le++,me.at,null,me.hot?1.35+.25*Math.sin(O*9):.85);for(const[me,Ce]of[[Ct,j],[Tt,ve],[Ke,le]])me.count=Ce,me.visible=Ce>0,Ce&&(me.instanceMatrix.needsUpdate=!0)}const Nn=new Zi(.0075,8,6),ns=480,$n=96,ci=new jn(Nn,We,ns),Yn=new jn(new Zi(.006,6,4),je,$n);for(const M of[ci,Yn])M.frustumCulled=!1,M.castShadow=!1,M.visible=!1,M.count=0,g.add(M);const Hn=480,xn=new jn(new Xt(1,1,1),Pi(5832602,4),Hn),bs=Pi(13623551,2.2),Ss=xn.material;xn.frustumCulled=!1,xn.castShadow=!1,xn.visible=!1,xn.count=0,g.add(xn);const Si=new ae,x=new ae,w=new ae(0,0,1),q=new ae,y={ok:{k:.0075,dash:0,gap:0},short:{k:.0035,dash:.018,gap:.016}};let T="";function X(M){const O=M.cutter.preview?M.cutter.preview():null,G=O&&M.phys.pose(O.id),j=y[O&&O.ok?"ok":"short"];let ve=0;const le=(me,Ce)=>{const ue=me.distanceTo(Ce);ue<1e-4||ve>=Hn||(K.position.copy(me).add(Ce).multiplyScalar(.5),K.quaternion.setFromUnitVectors(w,q.copy(Ce).sub(me).normalize()),K.scale.set(j.k,j.k,ue),K.updateMatrix(),xn.setMatrixAt(ve++,K.matrix))};if(G)for(const[me,Ce]of O.plan){const ue=Qt(G,me),fe=Qt(G,Ce);if(Bn(ue[0],ue[1],ue[2],Si),Bn(fe[0],fe[1],fe[2],x),!j.dash){le(Si,x);continue}const se=Si.distanceTo(x),De=j.dash+j.gap,$e=Si.clone(),Je=x.clone();for(let lt=0;lt<se&&ve<Hn;lt+=De)le(Si.copy($e).lerp(Je,lt/se),x.copy($e).lerp(Je,Math.min(se,lt+j.dash)/se))}xn.material=O&&O.ok?Ss:bs,T=ve?O.ok?"ok":"short":"",xn.count=ve,xn.visible=ve>0,ve&&(xn.instanceMatrix.needsUpdate=!0)}function z(M){const O=M.S;for(const[ue,fe]of O.pieces)if(!_e.has(ue)){const se=new At(qe([{poly:fe.poly}]),Le(fe.mat));se.castShadow=!0,se.receiveShadow=!0,se.userData.part=ue,se.userData.prefab=fe.prefab,se.userData.piece=!0,g.add(se),_e.set(ue,se)}for(const[ue,fe]of _e)fe.userData.piece&&!O.pieces.has(ue)&&(g.remove(fe),fe.geometry.dispose(),_e.delete(ue));if(O.merged.length!==Te){Te=O.merged.length,Fe=!0;for(const se of Me.splice(0))g.remove(se),se.geometry.dispose();const ue=new Map,fe=new nn;for(const se of O.merged){Yt(fe,se.p,se.q),fe.updateMatrix();const De=Le(se.mat);ue.has(De)||ue.set(De,[]),ue.get(De).push({poly:se.poly,m:fe.matrix.clone()})}for(const[se,De]of ue){const $e=new At(qe(De),se);$e.receiveShadow=!0,$e.castShadow=!0,g.add($e),Me.push($e)}}const G=(ue,fe,se)=>{K.position.copy(Bn(se[0],se[1],se[2],Da)),K.quaternion.identity(),K.scale.setScalar(1),K.updateMatrix(),ue.setMatrixAt(fe,K.matrix)};let j=0;const ve=(ue,fe)=>{const se=M.phys.pose(ue);if(se)for(let De=0;De<fe.length;De++){const $e=fe[De],Je=fe[De+1]||$e,lt=Math.hypot($e[0]-Je[0],$e[1]-Je[1],$e[2]-Je[2]),vt=Math.max(1,Math.round(lt/.004));for(let Ye=0;Ye<vt&&j<ns;Ye++)G(ci,j++,Qt(se,[0,1,2].map(ht=>$e[ht]+(Je[ht]-$e[ht])*Ye/vt)))}};for(const[,ue]of O.beads)ve(ue.a,ue.pts);ci.count=j,ci.visible=j>0,j&&(ci.instanceMatrix.needsUpdate=!0),j=0;const le=O.stroke,me=O.weld,Ce=le?M.phys.pose(le.id):me?M.phys.pose(me.a):null;if(X(M),le&&Ce){const ue=Math.max(1,Math.ceil(le.path.length/$n));for(let fe=0;fe<le.path.length&&j<$n;fe+=ue)G(Yn,j++,Qt(Ce,le.path[fe]))}else if(me&&Ce)for(const ue of me.path)j<$n&&G(Yn,j++,Qt(Ce,ue));Yn.count=j,Yn.visible=j>0,j&&(Yn.instanceMatrix.needsUpdate=!0)}function L(M,O,G,j){const ve=M.S,le=M.phys;z(M),gn(M,O),Ft(M),ee(M),E(M),H(M);for(const[fe,se]of Rt)if(se.body){const De=le.pose(fe);if(!De){se.m.visible=!1;continue}se.m.visible=!Oe.has(fe);const $e=Qt(De,[0,1,2].map(Ye=>se.at[Ye]-se.home[Ye])),Je=new cn(...De.q).multiply(mo.set(...se.yaw));Yt(se.m,$e,[Je.x,Je.y,Je.z,Je.w]);const lt=ve.screens.get(fe),vt=lt&&lt.broken?"b":M.screenOn(fe)?"1":"0";se.st!==vt&&(se.st=vt,se.m.material.map=vt==="b"?se.texBad:vt==="1"?se.texOn:se.texOff,se.m.material.needsUpdate=!0)}for(const fe of M.notes.ids()){const se=Rt.get(fe),De=M.notes.pose(fe);if(se)if(ve.noteHeld===fe&&G&&j){const $e=Math.cos(j.pitch),Je=[-Math.sin(j.yaw)*$e,Math.sin(j.pitch),-Math.cos(j.yaw)*$e],lt=[Math.cos(j.yaw),0,-Math.sin(j.yaw)],vt=new cn().setFromEuler(new Mn(j.pitch,j.yaw,0,"YXZ"));se.m.visible=!0,Yt(se.m,[0,1,2].map(Ye=>G[Ye]+Je[Ye]*.5+lt[Ye]*.16-(Ye===1?.14:0)),[vt.x,vt.y,vt.z,vt.w])}else se.m.visible=!!De&&!Oe.has(fe),De&&Yt(se.m,De.p,De.q)}for(const[fe,se]of _e){const De=le.pose(fe);if(!De||Oe.has(se.userData.prefab)){se.visible=!1;continue}se.visible=!0,Yt(se,De.p,De.q)}for(const[fe]of ve.plates)if(!_e.has(fe)){const se=new At(te(ct(M,ve.plates.get(fe))),Ue.plate);se.castShadow=!0,g.add(se),_e.set(fe,se),se.userData.part=fe,se.userData.plateLocal=!0}for(const[fe,se]of _e)if(se.userData.plateLocal){const De=le.pose(fe);if(!De){se.visible=!1;continue}const $e=ct(M,ve.plates.get(fe));if($e.tile){se.visible=!0,Yt(se,De.p,De.q);continue}const Je=Y.get($e.id).q,lt=new cn(...De.q).multiply(mo.set(...Je));se.visible=!0,Yt(se,De.p,[lt.x,lt.y,lt.z,lt.w])}for(const[fe,{m:se,d:De}]of Qe){const $e=ve.doors.get(fe),Je=De.box,lt=$e.open*((De.along==="z"?Je.z1-Je.z0:Je.x1-Je.x0)-.1);Yt(se,[(Je.x0+Je.x1)/2+(De.along==="x"?lt:0),(Je.y0+Je.y1)/2,(Je.z0+Je.z1)/2+(De.along==="z"?lt:0)])}for(const[fe,se]of ut)se.visible=!ve.windows.get(fe).broken;const me=[...M.powered()].sort().join(",")+"|"+[...ve.breakers].map(([fe,se])=>fe+se).join(",");if(me!==Z){Z=me;for(const[fe,se]of B)se.off=ke||!M.isOn(fe);for(const[fe,se]of V)se.m.material=M.isOn(fe)?se.on:d.lampOff;for(const[fe,se]of Rt)!se.note&&!se.body&&(se.m.material.map=M.isOn(fe)?se.texOn:se.texOff,se.m.material.needsUpdate=!0);for(const[fe,se]of bt){const De=ve.breakers.get(fe)?-.5:.5,$e=se.userData.side;Yt(se,se.userData.base,$e==="W"||$e==="E"?[0,0,Math.sin(De/2),Math.cos(De/2)]:[Math.sin(De/2),0,0,Math.cos(De/2)])}}const Ce=[...ve.cablesCut].join(",");Ce!==he&&(he=Ce,re(ve.cablesCut,ve.cableCutAt||{}));for(const[fe,{m:se,h:De}]of mt){const $e=ve.hatchOpen.get(fe)||0,Je=De.x0+.01,lt=$e*1.75,vt=(De.x0+De.x1)/2,Ye=(De.z0+De.z1)/2,ht=(De.x1-De.x0)/2,nt=[0,0,Math.sin(-lt/2),Math.cos(-lt/2)];if(Yt(se,[Je+Math.cos(lt)*ht,-.016-Math.sin(lt)*ht,Ye],nt),M.danger.has(fe)){Ot.visible=$e>.05;const St=new cn().setFromEuler(new Mn(-Sn,0,0));Yt(Ot,[vt,-.34,Ye],[St.x,St.y,St.z,St.w])}}let ue=0;for(const fe of n.panels){const se=M.panels.view(fe.id),De=Y.get(fe.id);De.m.visible=se.plate==="on";for(let $e=0;$e<4;$e++){const Je=se.plate==="on"&&!se.bolts[$e],lt=Ml(fe,$e),[vt,Ye]=st[fe.face],ht={"+y":[0,1,0],"-y":[0,-1,0],"+x":[1,0,0],"-x":[-1,0,0],"+z":[0,0,1],"-z":[0,0,-1]}[fe.face],nt=.0075;K.position.copy(Bn(lt[0]+ht[0]*nt,lt[1]+ht[1]*nt,lt[2]+ht[2]*nt,Da)),K.quaternion.copy(ds(lt[2])).multiply(Ll.setFromEuler(new Mn(vt+Sn,Ye,0,"YXZ"))),K.scale.setScalar(Je?1:1e-4),K.updateMatrix(),W.setMatrixAt(ue++,K.matrix)}}if(W.instanceMatrix.needsUpdate=!0,N.spots.some(fe=>fe.castShadow&&fe.visible)){for(const[fe,se]of _e)se.castShadow&&Ve.see(fe,se.visible?le.pose(fe):null);Ve.sweep(fe=>_e.has(fe)||fe.startsWith("door:")||fe.startsWith("lid:"));for(const[fe]of Qe){const se=ve.doors.get(fe),De=se.box;Ve.see("door:"+fe,{p:[(De.x0+De.x1)/2+se.open*(De.x1-De.x0),0,(De.z0+De.z1)/2+se.open*(De.z1-De.z0)],q:[0,0,0,1]})}for(const[fe,{h:se}]of mt)Ve.see("lid:"+fe,{p:[(se.x0+se.x1)/2,-(ve.hatchOpen.get(fe)||0),(se.z0+se.z1)/2],q:[0,0,0,1]});Fe&&(Fe=!1,r.has("stillshadow")||N.touch(l/2,c/2))}N.update(G?G[0]:l/2,G?G[2]:c/2,O)}function ie(){const M=new Map,O=(G,j)=>{j&&(M.has(G)||M.set(G,[]),M.get(G).push(j))};for(const G of n.keys){G.portal&&(O(G.id,(Qe.get(G.id)||{}).m),O(G.id,Mt.get(G.id)));for(const[fe,se]of _e)se.userData.prefab===G.id&&O(G.id,se);const j=Rt.get(G.id);j&&O(G.id,j.m);const ve=mt.get(G.id);ve&&O(G.id,ve.m);const le=ut.get(G.id);le&&O(G.id,le);const me=bt.get(G.id);me&&O(G.id,me);const Ce=Y.get(G.id);Ce&&O(G.id,Ce.m);const ue=Lt.get(G.id);ue&&O(G.id,ue)}return M}function J(){let M=0,O=0;return g.traverse(G=>{if(G.isMesh&&G.visible){O++;const j=G.geometry,ve=j.index?j.index.count/3:j.attributes.position.count/3;M+=G.isInstancedMesh?ve*G.count:ve}}),{tris:Math.round(M),meshes:O,plan:T,planN:xn.count}}function be(){t.remove(g),g.traverse(M=>{M.isMesh&&M.geometry.dispose()});for(const M of m)M.dispose();for(const M of[...N.spots,...N.points])t.remove(M),M.target&&t.remove(M.target),M.shadow&&M.shadow.map&&M.shadow.map.dispose()}function Re(){ke=!0;for(const M of N.defs)M.off=!0;g.traverse(M=>{M.isMesh&&M.material&&(M.material.isMeshBasicMaterial||M.material.userData.unlit)&&(M.visible=!1)}),F.traverse(M=>{M.isMesh&&M.material.userData.unlit&&(M.visible=!1)})}function Pe(M){for(const O of M){Oe.add(O);for(const G of ie().get(O)||[])G.visible=!1,G.userData.gateHidden=!0}}return{group:g,staticGroup:F,pool:N,update:L,keyMeshes:ie,stats:J,dispose:be,marks:pt,shade:Ve,partMesh:_e,mats:v,darken:Re,hide:Pe}}const ti={cutter:'<svg viewBox="0 0 40 40"><path d="M8 26 L22 12 L28 18 L14 32 Z" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/><path d="M26 10 l6 -4 M30 14 l6 -2 M24 6 l2 -4" stroke="#ffb060" stroke-width="2.4" stroke-linecap="round"/></svg>',jump:'<svg viewBox="0 0 40 40"><path d="M20 30 V10 M11 18 L20 9 L29 18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',crouch:'<svg viewBox="0 0 40 40"><path d="M20 9 V29 M11 21 L20 30 L29 21" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 34 H31" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',kick:'<svg viewBox="0 0 40 40"><path d="M12 8 L16 22 L28 26 L30 31 L14 31 L8 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"/><path d="M31 14 l4 -3 M32 19 h5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',pause:'<svg viewBox="0 0 40 40"><path d="M14 11 V29 M26 11 V29" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>',full:'<svg viewBox="0 0 40 40"><path d="M9 16 V9 H16 M24 9 H31 V16 M31 24 V31 H24 M16 31 H9 V24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',hand:'<svg viewBox="0 0 40 40"><path d="M12 22 V12 a2.5 2.5 0 0 1 5 0 V20 V9 a2.5 2.5 0 0 1 5 0 V20 V11 a2.5 2.5 0 0 1 5 0 V22 V16 a2.5 2.5 0 0 1 5 0 V25 c0 6 -4 10 -10 10 h-2 c-4 0 -7 -2 -9 -6 l-4 -7 a2.4 2.4 0 0 1 4 -2.5 Z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/></svg>',use:'<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="11" fill="none" stroke="currentColor" stroke-width="2.6"/><circle cx="20" cy="20" r="3.5" fill="currentColor"/></svg>',throwI:'<svg viewBox="0 0 40 40"><path d="M9 30 Q14 12 31 10" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/><path d="M24 7 L32 10 L28 17" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',put:'<svg viewBox="0 0 40 40"><rect x="12" y="10" width="16" height="12" rx="1.5" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M20 24 V31 M15 27 L20 32 L25 27 M8 35 H32" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>'},I_=`
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
`;function ln(n,e,t){const i=document.createElement(n);return e&&(i.className=e),t&&(i.innerHTML=t),i}function Df(n,e,t,i){const s=2*Math.PI*n;return`<svg class="ring" viewBox="0 0 ${2*n+i+2} ${2*n+i+2}"><circle cx="${n+i/2+1}" cy="${n+i/2+1}" r="${n}" stroke="rgba(223,230,238,.18)"/><circle cx="${n+i/2+1}" cy="${n+i/2+1}" r="${n}" stroke="${t}" stroke-dasharray="${(s*e).toFixed(1)} ${s.toFixed(1)}" stroke-linecap="round"/></svg>`}function N_(n,e,{sim:t=null}={}){if(!document.getElementById("thud-css")){const r=ln("style");r.id="thud-css",r.textContent=I_,document.head.appendChild(r)}const i=ln("div");if(i.id="thud",t){const[r,a,l,o]=t;for(const[c,u]of[["l",r],["r",a],["b",l],["t",o]])n.style.setProperty("--sim-"+c,u+"px")}const s={cut:ln("div","tbn cut",ti.cutter),jmp:ln("div","tbn jmp",ti.jump),cro:ln("div","tbn cro",ti.crouch),kck:ln("div","tbn kck",ti.kick),pz:ln("div","tbn pz",ti.pause),ghost:ln("div","ghost"),ctx:ln("div","ctx")};s.cut.dataset.act="cutter",s.jmp.dataset.act="jump",s.cro.dataset.act="crouch",s.kck.dataset.act="kick",s.pz.dataset.act="pause";for(const[r,a]of[["fire",s.cut],["jump",s.jmp],["crouch",s.cro],["kick",s.kck],["pause",s.pz]])a.dataset.key=r,a.classList.add("tb");return i.append(s.ghost,s.ctx,s.kck,s.cro,s.jmp,s.cut,s.pz),n.appendChild(i),{hud:i,E:s}}const Xs={key:"drift.mob.v1",def:{sens:1,inv:!1,k:1,op:.9,mir:!1,txt:1},lim:{sens:[.4,2.5],k:[.85,1.3],op:[.35,1],txt:[.9,1.5]}};function If(n){const e={...Xs.def};try{const t=JSON.parse(n&&n.getItem(Xs.key)||"null");if(t&&typeof t=="object")for(const i of Object.keys(e))typeof t[i]==typeof e[i]&&(e[i]=t[i])}catch{}for(const[t,[i,s]]of Object.entries(Xs.lim))e[t]=Math.max(i,Math.min(s,+e[t]||Xs.def[t]));return e}const yn={radius:56,deadIn:.12,deadOut:.08,runOn:.92,runOff:.8,runHold:.25,look:1.6,accel:.6,accelV:1500,ladderCone:.6,dbl:.3},Nf="drift.mob.tut.v1",mr=["move","look","jump","crouch","use"];function U_(n,e,{input:t,onPause:i,onFull:s=null,haptic:r=()=>{},store:a=null,sim:l=null,mut:o=[]}={}){const c=new Set(o),{hud:u,E:p}=N_(n,e,{sim:c.has("nosafe")?null:l}),d=ln("div","szone",'<div class="stick"></div>'),h=ln("div","stk","<i></i>"),f=h.firstChild;p.ghost.remove(),u.prepend(d),u.appendChild(h);const v=ln("div","",Df(43,0,"#ffb060",4)).firstChild;v.setAttribute("class","hr"),p.cut.appendChild(v);const g=v.lastChild,m=2*Math.PI*43,_=ln("span","tag");_.hidden=!0,p.cro.appendChild(_);const R=ln("div","hpb","<i></i>");u.appendChild(R);const S=ln("div","tbn fsb off",ti.full);S.dataset.act="full",S.dataset.key="full",S.classList.add("tb"),u.appendChild(S);const C=Ue=>{Ue.stopPropagation(),Ue.cancelable&&Ue.preventDefault(),!S.classList.contains("off")&&s&&s()};S.addEventListener("pointerdown",Ue=>{Ue.stopPropagation(),t.setDevice("touch"),Ue.cancelable&&Ue.preventDefault()}),S.addEventListener("pointerup",C),S.addEventListener("click",C);let D=If(a);const b=()=>{c.has("noset")||(u.style.setProperty("--k",c.has("smallbtn")?.5:D.k),u.style.setProperty("--op",D.op),n.style.setProperty("--txt",D.txt),u.classList.toggle("mir",!!D.mir),n.classList.toggle("mir",!!D.mir))};b();const I={act:"",text:"",hold:!1,ring:0,held:!1,ladder:!1,heat:0,over:!1,kickCd:0,slow:1,hp:1},F=new Map,N={downs:0,cancels:0,roles:{}};let B=!1,V=!1,Q=-1,$=-1,oe=!1,de=[0,0];const ce=()=>performance.now()/1e3,Ie=(Ue,He)=>{try{Ue.setPointerCapture(He)}catch{}};function pe(Ue){let He=(Ue.x-Ue.ox)/yn.radius,rt=(Ue.y-Ue.oy)/yn.radius,it=Math.hypot(He,rt);it>1&&(He/=it,rt/=it,it=1),f.style.transform=`translate(${(He*yn.radius).toFixed(1)}px, ${(rt*yn.radius).toFixed(1)}px)`,!oe&&it>yn.deadIn?oe=!0:oe&&it<yn.deadOut&&(oe=!1),c.has("nodead")&&(oe=it>0);const te=oe?Math.min(1,(it-yn.deadOut)/(1-yn.deadOut))/Math.max(it,1e-6):0;let ct=He*te*it,st=-rt*te*it;I.ladder&&Math.abs(ct)<yn.ladderCone&&!c.has("noladdersnap")&&(ct=0),de=[ct,st];const Y=ce();it>=yn.runOn?$<0&&($=Y):it<yn.runOff&&($=-1);const W=$>=0&&Y-$>=yn.runHold&&!c.has("norun");h.classList.toggle("run",W),t.stick(ct,st,W)}function Ae(){oe=!1,$=-1,de=[0,0],t.stick(0,0,!1),h.classList.remove("on","run"),f.style.transform=""}function ge(Ue,He,rt){const it=ce(),te=Math.max(.001,it-Ue.t),ct=He-Ue.x,st=rt-Ue.y,Y=Math.hypot(ct,st)/te,W=1+yn.accel*Math.min(1,Y/yn.accelV),xe=yn.look*D.sens*W*(c.has("noslow")?1:I.slow);t.look(ct*xe,(D.inv?-st:st)*xe),et+=Math.abs(ct)+Math.abs(st),Ue.t=it}function Le(Ue,He,rt){if(Ue.pointerType==="mouse"||c.has("onefinger")&&F.size)return;t.setDevice("touch"),N.downs++,N.roles[He]=(N.roles[He]||0)+1;const it={role:He,el:rt,x:Ue.clientX,y:Ue.clientY,t:ce(),ox:Ue.clientX,oy:Ue.clientY};if(F.set(Ue.pointerId,it),rt&&Ie(rt,Ue.pointerId),He==="stick"){const te=innerWidth,ct=innerHeight,st=64;it.ox=Math.max(st+20,Math.min(te-st-20,Ue.clientX)),it.oy=Math.max(st+20,Math.min(ct-st-20,Ue.clientY)),h.style.left=it.ox+"px",h.style.top=it.oy+"px",h.classList.add("on"),pe(it)}if(He==="cutter"&&(t.hold("cutter",!0),p.cut.classList.add("on")),He==="jump"&&(t.press("jump"),ke(p.jmp)),He==="kick"&&(t.press("kick"),ke(p.kck),r("kick")),He==="crouch"){const te=ce();V?(V=!1,B=!1):B&&Q>=0&&te-Q<yn.dbl&&!c.has("nocrawl")?V=!0:B=!B,Q=te,t.hold("crouch",B),t.hold("crawl",V),Oe()}He==="pause"&&i&&i(),He==="use"&&(Xe.used=!0,I.hold?t.hold("interactHold",!0):t.press("interact"),rt.classList.add("on")),(He==="grab"||He==="put")&&(t.press("grab"),He==="put"&&r("throw")),He==="throw"&&(t.press("throw"),t.hold("throwHold",!0),r("throw")),He==="off"&&t.press("jump"),Ue.preventDefault()}function qe(Ue){const He=F.get(Ue.pointerId);if(He){if(He.role==="stick"){He.x=Ue.clientX,He.y=Ue.clientY,pe(He);return}(He.role==="look"||He.role==="cutter")&&(ge(He,Ue.clientX,Ue.clientY),He.x=Ue.clientX,He.y=Ue.clientY)}}function _e(Ue){const He=F.get(Ue.pointerId);He&&(Ue.type==="pointercancel"&&N.cancels++,F.delete(Ue.pointerId),He.role==="stick"&&Ae(),He.role==="cutter"&&(t.hold("cutter",!1),p.cut.classList.remove("on")),He.role==="use"&&(t.hold("interactHold",!1),He.el&&He.el.classList.remove("on")),He.role==="throw"&&t.hold("throwHold",!1))}function ke(Ue){Ue.classList.add("on"),setTimeout(()=>Ue.classList.remove("on"),140)}function Oe(){_.hidden=!(B||V),_.textContent=e(V?"mob.tag.crawl":"mob.tag.crouch"),p.cro.classList.toggle("on",B||V)}d.addEventListener("pointerdown",Ue=>Le(Ue,"stick",d));for(const[Ue,He]of[[p.cut,"cutter"],[p.jmp,"jump"],[p.cro,"crouch"],[p.kck,"kick"],[p.pz,"pause"]])Ue.addEventListener("pointerdown",rt=>{rt.stopPropagation(),Le(rt,He,Ue)});addEventListener("pointerdown",Ue=>{Ue.pointerType!=="touch"||F.has(Ue.pointerId)||(t.setDevice("touch"),!(Ue.target.closest&&Ue.target.closest("#thud .szone, #thud .tbn, #thud .pill, #thud .tut, .panel, .mscr, button, a, input"))&&(!n.classList.contains("mob")||n.classList.contains("paused")||Le(Ue,"look",null)))},!0),addEventListener("pointermove",qe,!0),addEventListener("pointerup",_e,!0),c.has("nocancel")||addEventListener("pointercancel",_e,!0);const Ge=()=>{if(!c.has("noreset"))for(const[Ue]of[...F])_e({pointerId:Ue,type:"pointercancel"})};for(const Ue of["dblclick","contextmenu"])u.addEventListener(Ue,He=>He.preventDefault());let Be="";function Qe(Ue,He,rt,it,te,ct){const st=ln("div","pill tb "+Ue,`<span class="ic">${He}${ct?Df(18,0,"#84cbcd",3.5):""}</span><span>${rt}${it?`<span class="pv">${it}</span>`:""}</span>`);return st.dataset.key=te==="use"?"e":te,st.dataset.act=te,st.addEventListener("pointerdown",Y=>{Y.stopPropagation(),Le(Y,te,st)}),st}function Mt(){const Ue=[I.act,I.text,I.hold,I.held,I.ladder].join("|");if(Ue!==Be){Be=Ue;for(const[He,rt]of[...F])(rt.role==="use"||rt.role==="grab"||rt.role==="throw"||rt.role==="put"||rt.role==="off")&&_e({pointerId:He,type:"pointerup"});p.ctx.textContent="",!c.has("noctx")&&(I.act==="e"&&I.text&&p.ctx.appendChild(Qe(I.hold?"hold":"",ti.use,I.text,I.hold?e("mob.btn.hold"):"","use",I.hold)),I.held?(p.ctx.appendChild(Qe("",ti.throwI,e("mob.btn.throw"),"","throw")),p.ctx.appendChild(Qe("alt",ti.put,e("mob.btn.put"),"","put"))):I.act==="grip"&&p.ctx.appendChild(Qe("alt",ti.hand,e("mob.btn.grab"),I.text,"grab")),I.ladder&&p.ctx.appendChild(Qe("alt",ti.jump,e("mob.btn.off"),"","off")))}}const Xe={i:-1,done:!1,log:[]};try{Xe.done=!!(a&&a.getItem(Nf))}catch{Xe.done=!1}let tt=null,ut=0,et=0,Rt=0;function bt(){if(tt&&tt.remove(),Xe.i>=mr.length){Xe.done=!0,tt=null;try{a&&a.setItem(Nf,"1")}catch{}return}tt=ln("div","tut",`<p>${e("mob.tut."+mr[Xe.i])}</p>`),tt.dataset.step=mr[Xe.i];const Ue=ln("button","",e("mob.tut.skip"));Ue.type="button",Ue.addEventListener("pointerdown",He=>{He.stopPropagation(),Xe.log.push("skip"),Xe.i=mr.length,bt()}),tt.appendChild(Ue),u.appendChild(tt),ut=et=Rt=0}function Lt(Ue){if(Xe.done||c.has("notut"))return;if(Xe.i<0){Xe.i=0,bt();return}const He=mr[Xe.i];let rt=!1;Rt+=Ue,He==="move"&&(Math.hypot(de[0],de[1])>.3&&(ut+=Ue),rt=ut>1),He==="look"&&(rt=et>120),He==="jump"&&(rt=!!Xe.jumped),He==="crouch"&&(rt=!!Xe.crouched),He==="use"&&(rt=!!Xe.used||Rt>25),rt&&(Xe.log.push(He),Xe.i++,bt())}d.addEventListener("pointerdown",()=>{},!0),p.jmp.addEventListener("pointerdown",()=>{Xe.jumped=!0}),p.cro.addEventListener("pointerdown",()=>{Xe.crouched=!0});let mt=ce();return{hud:u,E:p,zone:d,update(Ue){Object.assign(I,Ue);const He=ce(),rt=Math.min(.5,He-mt);if(mt=He,Mt(),I.act==="e"&&I.hold){const it=p.ctx.querySelector(".pill.hold .ring circle:last-child");if(it){const te=2*Math.PI*18;it.setAttribute("stroke-dasharray",`${(te*Math.max(0,Math.min(1,I.ring))).toFixed(1)} ${te.toFixed(1)}`)}}g.setAttribute("stroke-dasharray",`${(m*Math.max(0,Math.min(1,I.heat))).toFixed(1)} ${m.toFixed(1)}`),g.setAttribute("stroke",I.over?"#ff5a3a":"#ffb060"),p.cut.classList.toggle("over",!!I.over),p.cut.classList.toggle("hint",I.act==="cut"),p.kck.classList.toggle("cd",I.kickCd>0),R.firstChild.style.width=(Math.max(0,Math.min(1,I.hp))*100).toFixed(0)+"%";for(const it of F.values())it.role==="stick"&&pe(it);I.used&&(Xe.used=!0),n.classList.contains("mob")&&!n.classList.contains("paused")&&Lt(rt),u.dataset.ctx=p.ctx.children.length?[...p.ctx.children].map(it=>it.dataset.act).join(","):"",u.dataset.touches=String(F.size),u.dataset.crouch=V?"crawl":B?"1":"0"},settings:()=>({...D}),set(Ue,He){Ue==="reset"?D={...Xs.def}:D={...D,[Ue]:He},D=If({getItem:()=>JSON.stringify(D)}),b();try{a&&a.setItem(Xs.key,JSON.stringify(D))}catch{}},releaseAll:Ge,setFull(Ue){const He=c.has("fsbtnalways")?!1:!Ue||c.has("nofsbtn");S.classList.toggle("off",He),n.style.setProperty("--fsw",He?"0px":"60px"),u.dataset.full=He?"":"1"},crouchState:()=>({crouch:B,crawl:V}),clearCrouch(){B=V=!1,t.hold("crouch",!1),t.hold("crawl",!1),Oe()},tut:Xe,stats:()=>({...N,touches:F.size,roles:[...F.values()].map(Ue=>Ue.role),stick:de.slice()})}}const z_={"mob.mock.zone.move":"стик: где лёг палец","mob.mock.zone.look":"обзор: веди пальцем","mob.mock.verb.use":"Открыть","mob.mock.verb.use.sub":"торговый терминал","mob.mock.verb.wheel":"Крутить","mob.mock.verb.wheel.sub":"держи палец","mob.mock.crouch.tag":"вкл","mob.btn.grab":"Схватить","mob.btn.throw":"Бросить","mob.btn.put":"Положить","mob.btn.use":"Взаимодействовать","mob.btn.off":"Слезть","mob.btn.hold":"держи","mob.tag.crouch":"вкл","mob.tag.crawl":"ползу","mob.start.title":"Нажми, чтобы начать","mob.start.sub":"Касание включит звук и полный экран","mob.resume":"Нажми, чтобы продолжить","mob.rotate.title":"Поверни устройство","mob.rotate.sub":"ДРЕЙФ играется в альбомной ориентации","mob.a2hs":"Полный экран в Safari: «Поделиться», потом «На экран Домой», и открывай игру оттуда","mob.a2hs.close":"Понятно","mob.inapp":"Для полного экрана откройте игру кнопкой ▶️ в боте или в Safari","mob.tut.move":"Стик слева: положи палец и веди, чтобы идти. До упора - бег","mob.tut.look":"Правая половина экрана: веди пальцем, чтобы оглядеться","mob.tut.jump":"Кнопка со стрелкой вверх: прыжок","mob.tut.crouch":"Кнопка со стрелкой вниз: присесть. Двойное касание: ползти","mob.tut.use":"Когда рядом что-то можно сделать, над кнопками появится кнопка с действием","mob.tut.skip":"Пропустить","tab.controls":"Управление","mob.set.title":"Управление","mob.set.sens":"Чувствительность обзора","mob.set.inv":"Инверсия по вертикали","mob.set.size":"Размер кнопок","mob.set.alpha":"Прозрачность кнопок","mob.set.mirror":"Кнопки слева, стик справа","mob.set.text":"Размер текста","mob.set.on":"вкл","mob.set.off":"выкл","mob.set.reset":"Сбросить управление","mob.lost.title":"Картинка остановилась","mob.lost.sub":"Видеокарта сбросила игру. Прогресс сохранён на входе в последнюю комнату","mob.lost.restart":"Перезапустить","mob.lost.wait":"Восстанавливаю картинку…"},F_={"mob.mock.zone.move":"stick: wherever your thumb lands","mob.mock.zone.look":"look: drag","mob.mock.verb.use":"Open","mob.mock.verb.use.sub":"trade terminal","mob.mock.verb.wheel":"Turn","mob.mock.verb.wheel.sub":"keep holding","mob.mock.crouch.tag":"on","mob.btn.grab":"Grab","mob.btn.throw":"Throw","mob.btn.put":"Put down","mob.btn.use":"Interact","mob.btn.off":"Let go","mob.btn.hold":"hold","mob.tag.crouch":"on","mob.tag.crawl":"crawl","mob.start.title":"Tap to start","mob.start.sub":"This tap turns on sound and full screen","mob.resume":"Tap to continue","mob.rotate.title":"Rotate your device","mob.rotate.sub":"DRIFT is played in landscape","mob.a2hs":"Full screen in Safari: tap Share, then Add to Home Screen, and open the game from there","mob.a2hs.close":"Got it","mob.inapp":"For full screen, open the game with the ▶️ button in the bot or in Safari","mob.tut.move":"Stick on the left: put your thumb down and slide to walk. All the way: run","mob.tut.look":"Right half of the screen: drag to look around","mob.tut.jump":"Button pointing up: jump","mob.tut.crouch":"Button pointing down: crouch. Double tap: crawl","mob.tut.use":"When there is something to do nearby, a button with the action appears above the others","mob.tut.skip":"Skip","tab.controls":"Controls","mob.set.title":"Controls","mob.set.sens":"Look sensitivity","mob.set.inv":"Invert vertical look","mob.set.size":"Button size","mob.set.alpha":"Button opacity","mob.set.mirror":"Buttons left, stick right","mob.set.text":"Text size","mob.set.on":"on","mob.set.off":"off","mob.set.reset":"Reset controls","mob.lost.title":"The picture stopped","mob.lost.sub":"The graphics card reset the game. Progress is saved at the entrance to the last room","mob.lost.restart":"Restart","mob.lost.wait":"Restoring the picture…"},Uf={ru:{grip:"Захват",cut:"Резак",weld:"Сварка",toWeld:"Режим: рез",toCut:"Режим: сварка",snap:"отпусти: встанет на место среза",refuse:{мелко:"слишком мелко","много кусков":"слишком много кусков","в руках":"сначала положи",контур:"контур сам себя пересекает",объёмная:"вырез - только в плоской детали",сложно:"слишком сложный рез: веди линию проще",сбой:"рез не вышел, деталь цела"},short:"мало - доведи линию до края детали",cutv:{снять:"снять",резать:"резать",прихватить:"прихватить",сорвать:"болты сняты: сорви захватом ({F})",перерезать:"перерезать",разбить:"разбить",взорвётся:"нагреть, взорвётся",нет:"не режется",болты:"болтов осталось {n}, они светятся"},shell:"не режется",weldv:"варить",seamHere:"стык: {R} - сварка",keyR:"R",keyF:"F",touchR:"«Режим»",touchF:"«Схватить»",world:"неподвижное",tooFar:"далеко",lead:"веди резаком: линия будущего реза",release:"отпусти - разрежет по линии",poly:"отпусти - разрежет по ломаной",hole:"отпусти - вырежет отверстие",weldno:{"нет касания":"не варится: нет касания","далеко от стыка":"не варится: далеко от стыка","не тот режим":"не тот режим: {R} - рез","не варится":"это не варится",окно:"к окну не варится",дверь:"к двери не варится",люк:"к люку не варится",прижми:"прижми деталь к стене или к другой детали",сварено:"сварено",держится:"уже держится",далеко:"не варится: далеко"},holds:"держится на {k} ({n})",heavy:"тяжело: потащишь волоком",dragging:"тяжело: тащишь волоком",strain:"шов трещит: {k} %",broke:"Шов порвался",fell:"Падение с {h} м: -{d}",died:"Разбилась. Начать сначала.",exit:"Выход. Отсек пройден.",ride:"На своей ноше не стоят: отпущена",turn:"Повернуть",hint:"WASD ход · мышь взгляд · F инструмент · R рез или сварка, с ношей - повернуть · ЛКМ действие · Q бросок · E взаимодействие · любая панель снимается с четырёх болтов",dead:"нет питания",close:"E или касание: закрыть",dying:"Люк открылся. Начать сначала.",touch:"слева ход, справа взгляд, Резак - срезать болты панелей, бросок на люк - проверить его",v:{open:"Открыть",shut:"Закрыть",breaker:"Рубильник",read:"Читать"}},en:{grip:"Grab",cut:"Cutter",weld:"Welder",toWeld:"Mode: cut",toCut:"Mode: weld",snap:"release: it fits back on the cut",refuse:{мелко:"too small to cut","много кусков":"too many pieces","в руках":"put it down first",контур:"the outline crosses itself",объёмная:"holes only in flat parts",сложно:"too complex a cut: draw a simpler line",сбой:"the cut failed, the part is intact"},short:"too short - take the line to the edge of the part",cutv:{снять:"remove",резать:"cut",прихватить:"tack",сорвать:"bolts are off: pull it with the grip ({F})",перерезать:"sever",разбить:"break",взорвётся:"heat it, it will blow",нет:"cannot be cut",болты:"bolts left {n}, they glow"},shell:"cannot be cut",weldv:"weld",seamHere:"seam: {R} to weld",keyR:"R",keyF:"F",touchR:'"Mode"',touchF:'"Grab"',world:"fixed structure",tooFar:"too far",lead:"move the cutter: the line of the cut",release:"release to cut along the line",poly:"release to cut along the path",hole:"release to cut the hole out",weldno:{"нет касания":"no weld: not touching","далеко от стыка":"no weld: far from the seam","не тот режим":"wrong mode: {R} to cut","не варится":"cannot be welded",окно:"no weld to a window",дверь:"no weld to a door",люк:"no weld to a hatch",прижми:"press the part against a wall or another part",сварено:"welded",держится:"already held",далеко:"no weld: too far"},holds:"held by {k} ({n})",heavy:"heavy: you will drag it",dragging:"heavy: dragging",strain:"the seam is cracking: {k}%",broke:"The seam tore",fell:"Fell {h} m: -{d}",died:"The fall was fatal. Starting over.",exit:"Exit. The compartment is cleared.",ride:"You cannot stand on what you carry: dropped",turn:"Rotate",hint:"WASD move · mouse look · F tool · R cut or weld, rotate when carrying · LMB act · Q throw · E use · panels come off after four bolts",dead:"no power",close:"E or tap to close",dying:"The hatch opened. Starting over.",touch:"left side moves, right side looks, Cutter cuts panel bolts, throw something on a hatch to test it",v:{open:"Open",shut:"Close",breaker:"Breaker",read:"Read"}}},zf="drift.room.hint.v1",Ff="drift.mob.tut.v1";function k_(n,e,{fps:t=!1,input:i,coarse:s=!1,sim:r=null}={}){const a=Uf[e]||Uf.ru,l=n.createElement("div");l.id="rhud",l.innerHTML=`<div id="rx"></div><div id="rtgt"></div><div id="rbar"><i></i></div><div id="rhp"><i></i></div><div id="rtool"></div><div id="rhelp">${a.hint}</div>
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
  html,body,canvas{touch-action:none;overscroll-behavior:none}`,n.head.appendChild(c);const u=n.createElement("div");u.id="ui",n.body.appendChild(u);const p=e==="en"?F_:z_,d=(()=>{try{return localStorage}catch{return null}})(),h={getItem:S=>S===Ff?"1":d?d.getItem(S):null,setItem:(S,C)=>{S!==Ff&&d&&d.setItem(S,C)}},f=n.documentElement,v=()=>!!(f.requestFullscreen&&n.fullscreenEnabled&&!n.fullscreenElement),g=U_(u,S=>p[S]??S,{input:i,onPause:()=>{},onFull:()=>{const S=f.requestFullscreen&&f.requestFullscreen();S&&S.catch&&S.catch(()=>{})},store:h,sim:r});g.setFull(v()),n.addEventListener("fullscreenchange",()=>g.setFull(v()));const m=S=>{const C=S==="touch";u.classList.toggle("mob",C),l.classList.toggle("mob",C),n.documentElement.dataset.roomInput=S};if(m(i.device),i.onDevice(m),s){let S=!1;try{S=!!(d&&d.getItem(zf))}catch{}if(!S){const C=o("rhint");C.textContent=a.touch,C.hidden=!1,setTimeout(()=>{C.hidden=!0},14e3);try{d&&d.setItem(zf,"1")}catch{}}}let _=!1;const R={root:l,ui:u,touch:g,tool(S,C){o("rtool").textContent=S==="cut"?C==="weld"?a.weld:a.cut:a.grip,o("rmode").textContent=C==="weld"?a.toCut:a.toWeld,o("rmode").classList.toggle("weld",C==="weld")},onMode(S){o("rmode").addEventListener("click",S)},target(S,C,D,b){o("rtgt").classList.toggle("no",!!b);const I=S?S+(D?" · "+a.dead:C&&i.device!=="touch"?" · E: "+C.toLowerCase():""):"";o("rtgt").textContent!==I&&(o("rtgt").textContent=I)},bar(S){const C=o("rbar");C.style.display=S>0&&S<1?"block":"none",C.firstChild.style.width=Math.round(S*100)+"%"},note(S){_=!!S,o("rnote").hidden=!S,o("rnotet").textContent=S||""},get noteOpen(){return _},hp(S){o("rhp").style.display=S<99.5?"block":"none",o("rhp").firstChild.style.width=Math.max(0,S)+"%"},carry(S){R.carrying!==S&&(R.carrying=S,l.classList.toggle("carry",S))},onTurn(S){o("rturn").addEventListener("click",S)},flash(S){o("rflash").style.opacity=String(Math.min(.85,S))},msg(S){const C=o("rmsg");C.hidden=!S,C.textContent=S||""},fps(S){o("rfps").textContent=S},L:a};return o("rnote").addEventListener("click",()=>R.note("")),R}const kf={ru:{wall:"стена",floor:"пол",ceil:"потолок",stub:"стена тамбура",door:"дверь",glass:"окно",breaker:"щиток",screen:"табло",note:"записка",cabinet:"каркас шкафа",shelf:"стеллаж",pipe:"труба",crate:"ящик",crateL:"большой ящик",tank:"баллон",top:"столешница",leg:"ножка стола",rod:"обрезок ножки",monitor:"табло",shard:"осколок",pad:"утеплитель",tube:"труба",tray:"кабельный лоток",jbox:"распредкоробка",truss:"несущий каркас",gate:"рама шлюза",tileW:"панель стены",tileF:"панель пола",tileC:"панель потолка",hull:"внешняя обшивка",hullBolt:"болт внешней обшивки",leaf:"дверца шкафа",side:"стенка шкафа",pallet:"поддон",plate:"снятая панель",plank:"полка",sheet:"лист обшивки",scrap:"обломок",piece:"{s}, кусок",frame:"{s}, каркас",hatch:"люк {n}",bolt:"болт панели",panel:"панель",vent:"вентрешётка",ventBolt:"винт решётки",cable:"кабель"},en:{wall:"wall",floor:"floor",ceil:"ceiling",stub:"passage wall",door:"door",glass:"window",breaker:"breaker",screen:"screen",note:"note",cabinet:"cabinet frame",shelf:"rack",pipe:"pipe",crate:"crate",crateL:"large crate",tank:"gas tank",top:"table top",leg:"table leg",rod:"rod offcut",monitor:"screen",shard:"shard",pad:"insulation",tube:"pipe",tray:"cable tray",jbox:"junction box",truss:"load-bearing frame",gate:"gate frame",tileW:"wall panel",tileF:"floor panel",tileC:"ceiling panel",hull:"outer plating",hullBolt:"outer plating bolt",leaf:"cabinet door",side:"cabinet wall",pallet:"pallet",plate:"loose panel",plank:"shelf",sheet:"plating sheet",scrap:"scrap",piece:"{s}, piece",frame:"{s}, frame",hatch:"hatch {n}",bolt:"panel bolt",panel:"panel",vent:"vent grille",ventBolt:"grille screw",cable:"cable"}},go={ru:{hinge:"петля",rivet:"заклёпка",weld:"крепление",dowel:"крепление",seam:"шов",rail:"рельс",clip:"хомут",mount:"болт кронштейна",many:{hinge:"петлях",rivet:"заклёпках",weld:"креплениях",dowel:"креплениях",seam:"шве",rail:"рельсе",clip:"хомутах",mount:"болтах кронштейна"}},en:{hinge:"hinge",rivet:"rivet",weld:"fastening",dowel:"fastening",seam:"seam",rail:"rail",clip:"clip",mount:"bracket bolt",many:{hinge:"hinges",rivet:"rivets",weld:"fastenings",dowel:"fastenings",seam:"the seam",rail:"the rail",clip:"clips",mount:"bracket bolts"}}};function O_(n,e,t,i,s){if(!i)return"";const r=kf[t]||kf.ru,a=l=>{const o=((e.texts||{})[t]||{})["name."+l];return typeof o=="string"?o:""};if(i.kind==="hatch")return a(i.id)||r.hatch.replace("{n}",String(i.number));if((i.kind==="bolt"||i.kind==="plate")&&/^t[wesnfc]\d/.test(i.id)){const l=i.id.endsWith(".hull"),o=i.id[1];return i.kind==="bolt"?l?r.hullBolt:r.bolt:l?r.hull:o==="f"?r.tileF:o==="c"?r.tileC:r.tileW}if(i.kind==="bolt"||i.kind==="plate"){const l=n.panels.find(c=>c.id===i.id),o=l&&l.panel==="vent";return i.kind==="bolt"?o?r.ventBolt:r.bolt:a(i.id)||(o?r.vent:r.panel)}if(i.kind==="cable")return a(i.id)||r.cable;if(i.kind==="note")return a(i.id)||r.note;if(i.kind==="part"){const l=String(i.id).split("#")[0],o=s&&s.get(i.id)==="door"?n.parts.find(u=>u.id===l):null,c=a(l)||o&&a(o.prefab)||r[s&&s.get(i.id)]||"";return c&&l!==i.id?r.piece.replace("{s}",c):c}return i.kind==="static"&&i.box&&i.box.kind==="cabinet"?a(i.id)?r.frame.replace("{s}",a(i.id)):r.cabinet:i.kind==="static"&&(a(i.id)||r[i.box?i.box.kind:""])||""}const Of={g:14,gBody:9.8,jumpH:1.15,stand:1.3,crouch:.72,eye:1.2,eyeCrouch:.66,step:.28,ledge:.12,crouchSpeed:.5,crawl:Ta.body,eyeCrawl:Ta.eye,crawlSpeed:Ta.speed,squeeze:3},Bf=Object.assign({"../rooms/ring.sec07.corridor.json":()=>_o(()=>import("./ring.sec07.corridor-L7GKCMCB.js"),[],import.meta.url),"../rooms/ring.sec07.galley.json":()=>_o(()=>import("./ring.sec07.galley-DmIsS2DK.js"),[],import.meta.url),"../rooms/ring.sec07.shaft.json":()=>_o(()=>import("./ring.sec07.shaft-BROt9FpV.js"),[],import.meta.url)}),mn=new URLSearchParams(location.search),Qi=document.documentElement,B_=mn.get("room")||"ring.sec07.galley",Yi=mn.get("lang")==="en"?"en":"ru",Hf=mn.get("fps")==="1",Ia=mn.get("bench")==="1",xo=mn.get("phys")==="box"?"box":"rapier",Dl=mn.get("touch")==="1"||mn.get("touch")!=="0"&&matchMedia("(pointer: coarse)").matches,gr=["high","medium","lite"].includes(mn.get("q"))?mn.get("q"):Dl?"lite":"high",H_=Math.max(0,Math.min(200,parseInt(mn.get("pieces")||"0",10)||0)),G_=Math.max(0,Math.min(5e3,parseInt(mn.get("seam")||"0",10)||0)),vo=(mn.get("fall")||"").split(",").map(Number),V_=vo.length===2&&vo.every(Number.isFinite)?{safe:vo[0],perM:vo[1]}:null,ls=new Set((mn.get("mut")||"").split(",").filter(Boolean));Qi.dataset.room="loading";const W_=n=>{Qi.dataset.room="error",Qi.dataset.roomError=String(n&&n.message||n);const e=document.getElementById("err");e&&(e.hidden=!1,e.textContent="Комната не загрузилась: "+Qi.dataset.roomError),console.error(n)};async function X_(n){const e=`../rooms/${n}.json`;if(!Bf[e])throw new Error("нет комнаты "+n);const t=await Bf[e]();return JSON.parse(JSON.stringify(t.default||t))}async function q_(){const n=document.createElement("canvas");document.body.appendChild(n);const e=new Ax({canvas:n,antialias:!1,powerPreference:"high-performance",preserveDrawingBuffer:Ia}),t={lost:0,restored:0};n.addEventListener("webglcontextlost",Y=>{t.lost++,Qi.dataset.roomGlLost=String(t.lost),Y.preventDefault()}),n.addEventListener("webglcontextrestored",()=>{t.restored++}),e.shadowMap.enabled=!0,e.shadowMap.type=Mr,e.toneMapping=yi,e.autoClear=!1,e.info.autoReset=!1;const i={...mv[gr]},s=gr==="lite"?Math.min(devicePixelRatio,1.5)*.8:Math.min(devicePixelRatio,2);e.setPixelRatio(s),e.setSize(innerWidth,innerHeight);const r=new uu;r.fog=new Wl(724242,.012);const a=new Ir(e),l=a.fromScene(new Rx,.04).texture;a.dispose(),r.environment=ls.has("dark")?null:l,r.environmentIntensity=.06;const o=new Ch(16763024,2365970,ls.has("dark")?0:.2);r.add(o);const c=new On(70,innerWidth/innerHeight,.05,200);r.add(c);const u=pv(e,r,c,null);u.configure({msaa:i.msaa,bloom:i.bloom,hdr:i.hdr,prepass:!1,ldr:!1}),u.uniforms.uTint.value.set(1.05,1,.93);const p=_v({coarse:Dl});yv(window,document,p);const d=(mn.get("sa")||"").split(",").map(Number),h=k_(document,Yi,{fps:Hf,input:p,coarse:Dl,sim:d.length===4&&d.every(Number.isFinite)?d:null});Ia&&mn.get("hud")!=="1"&&(h.root.style.display="none",h.ui.style.display="none");let f=null;async function v(Y,W=null){const xe=performance.now(),ye=Gv(Y);if(ye.length)throw new Error("схема: "+ye.slice(0,3).map(ne=>ne.path+" "+ne.msg).join("; "));const we=Nv(Y),[k,A,ee]=we.size,Ee={x0:-2.4,x1:k+2.4,z0:-2.4,z1:ee+2.4,h:A},Se=await t_(xo,{bounds:Ee,bind:!1});Ou({PH:Of,playerR:kn.r,spawn:{x:we.spawn.x,z:we.spawn.z,yaw:we.spawn.yaw,pitch:0},speed:3.2,boundsAt:()=>Ee,placeAt:()=>!0,roomHeight:()=>A});const ze=E_(we,Y,Se,{mut:ls,pieces:H_,seam:G_,fall:V_}),E=D_(we,Y,{scene:r,lang:Yi,mut:ls,tier:ls.has("dark")?{...i,spots:0,points:0}:i});ls.has("dark")&&E.darken(),E.hide((mn.get("hide")||"").split(",").filter(Boolean));const P=iv(we.spawn.x,we.spawn.z);P.yaw=we.spawn.yaw,P.pitch=-.08,P.respawn=()=>{P.x=we.spawn.x,P.z=we.spawn.z,P.y=0,P.vy=0,P.yaw=we.spawn.yaw},W&&ze.restore(W);const H=performance.now()-xe;return{room:Y,C:we,phys:Se,sys:ze,view:E,pl:P,buildMs:H}}function g(){f&&(f.view.dispose(),f.phys.dispose(),f=null)}let m="grip",_=null;const R=wv();h.tool(m);let S="cut";const C=Y=>{S=Y,h.tool(m,S)},D=()=>{if(f&&m==="grip"&&f.sys.S.held){f.sys.turnHeld(f.pl);return}m!=="cut"&&(m="cut"),C(S==="cut"?"weld":"cut")};h.onMode(()=>C(S==="cut"?"weld":"cut")),h.onTurn(()=>{f&&f.sys.turnHeld(f.pl)});const b={press:new Set,fire:!1,rmb:!1},I=(Y,W)=>{f&&(f.pl.yaw-=Y*.0022,f.pl.pitch=Math.max(-1.45,Math.min(1.45,f.pl.pitch-W*.0022)))};addEventListener("keydown",Y=>{Y.repeat||(p.setDevice("kbm"),p.keyDown(Y.code),Y.code==="KeyR"&&D(),["Space","KeyQ","KeyF","KeyE"].includes(Y.code)&&Y.preventDefault())}),addEventListener("keyup",Y=>p.keyUp(Y.code)),addEventListener("pointermove",Y=>{Y.pointerType==="mouse"&&(Y.movementX||Y.movementY)&&p.setDevice("kbm")},{passive:!0}),n.addEventListener("mousedown",Y=>{if(p.device!=="touch"){if(h.noteOpen){h.note("");return}if(document.pointerLockElement!==n){try{const W=n.requestPointerLock();W&&W.catch&&W.catch(()=>{})}catch{}return}Y.button===0&&(b.fire=!0,b.press.add("fire")),Y.button===2&&(b.press.add("throw"),b.rmb=!0)}}),addEventListener("mouseup",Y=>{Y.button===0&&(b.fire=!1),Y.button===2&&(b.rmb=!1)}),addEventListener("blur",()=>{b.fire=!1,b.rmb=!1}),addEventListener("contextmenu",Y=>Y.preventDefault()),addEventListener("mousemove",Y=>{document.pointerLockElement===n&&I(Y.movementX,Y.movementY)}),addEventListener("resize",()=>{e.setSize(innerWidth,innerHeight),c.aspect=innerWidth/innerHeight,c.updateProjectionMatrix(),u.resize()});const F=Y=>[Y.x,Y.y+Y.eye,Y.z],N=Y=>{const W=Math.cos(Y.pitch);return[-Math.sin(Y.yaw)*W,Math.sin(Y.pitch),-Math.cos(Y.yaw)*W]},B=Y=>O_(f.C,f.room,Yi,Y,f.sys.S.partKind);function V(Y,W,xe){const{sys:ye}=f,we=ye.S,k=h.L,A=B(Y);if(we.drag)return{text:k.dragging};if(we.held&&ye.cutter.snapPose(we.held))return{text:k.snap};const ee=!!(Y&&Y.kind==="static"&&Y.box&&["truss","gate"].includes(Y.box.kind));if(m==="grip"){const E=!we.held&&!we.noteHeld?ye.grabInfo(Y):null;return ee?{text:`${A} - ${k.shell}`,no:!0}:E?E.why==="тяжело"?{text:`${A} · ${k.heavy}`}:{text:`${A} · ${k.holds.replace("{k}",go[Yi].many[E.kind]||go[Yi].many.weld).replace("{n}",E.n)}`,no:!0}:{text:A}}if(we.strain&&we.t-we.strain.t<.4)return{text:k.strain.replace("{k}",Math.round(we.strain.k*100)),no:!0};if(we.stroke&&b.fire&&S==="cut"){const E=we.stroke,P=B({kind:"part",id:E.id});return E.why?{text:`${P} · ${k.refuse[E.why]||E.why}`,no:!0}:E.ok?{text:`${P} · ${E.kind==="loop"?k.hole:E.kind==="open"?k.poly:k.release}`}:{text:`${P} · ${E.t>.45?k.short:k.lead}`,no:E.t>.45}}if(!Y&&!(S==="weld"&&we.held)){const E=ye.aim(W,xe,6);return E&&E.kind==="part"?{text:`${B(E)} · ${S==="weld"?k.weldno.далеко:k.tooFar}`,no:!0}:{text:""}}if(S==="weld"&&!(Y&&Y.kind==="plate"&&Y.seated)){const E=ye.cutter.weldInfo(Y);return E.why?{text:`${we.held?B({kind:"part",id:we.held}):A} · ${k.weldno[E.why]}`,no:!E.done}:{text:`${B({kind:"part",id:E.id})} + ${E.with==="world"?E.box&&B({kind:"static",id:E.box.prefab||E.box.id,box:E.box})||k.world:B({kind:"part",id:E.with})} - ${k.weldv}`}}if(we.refused&&we.t-we.refused.t<1.2&&b.fire)return{text:`${A} · ${k.refuse[we.refused.why]}`,no:!0};const Ee=ye.cutInfo(Y);if(!Ee)return{text:A};if(Ee.j)return{text:`${go[Yi][ye.cutter.jointKind(Ee.j)]||go[Yi].weld} - ${k.cutv[Ee.verb]}`};if(Ee.verb==="нет")return{text:`${A} ${ee?"-":"·"} ${Ee.shell?k.shell:k.cutv.нет}`,no:!0};if(Ee.verb==="болты")return{text:`${A} · ${k.cutv.болты.replace("{n}",Ee.n)}`};const Se=Ee.verb==="резать"&&Y.kind==="part"?ye.cutter.weldInfo(Y):null,ze=Se&&!Se.why&&Se.with!=="world"&&Math.hypot(...Se.at.map((E,P)=>E-Y.at[P]))<.05;return{text:`${A} - ${k.cutv[Ee.verb]}${ze?" · "+k.seamHere:""}`}}function Q(Y){if(m!=="cut"||S!=="cut"||!Y)return[];const{sys:W}=f,xe=[];if(Y.kind==="bolt"||Y.kind==="plate"){const ye=W.panels.view(Y.id);if(ye.plate==="on"&&!ye.seated)for(let we=0;we<4;we++)ye.bolts[we]||xe.push({at:W.boltAt(Y.id,we),hot:Y.kind==="bolt"?Y.i===we:we===ye.bolts.findIndex(k=>!k)})}else if(Y.kind==="part"){const ye=W.cutter.nearJoint(Y.id,Y.at);for(const we of W.cutter.jointsOf(Y.id))if(W.cutter.jointKind(we)!=="seam"||we===ye)for(const k of W.cutter.spots(we))xe.push({at:k,hot:we===ye})}return xe}let $="grip",oe={text:""},de="",ce=-1;const Ie=Y=>{const W=f.sys.usable(Y);return W?h.L.v[W]:""},pe={frame:[],phys:[],gap:[]},Ae=(Y,W)=>{Y.push(W),Y.length>240&&Y.shift()},ge=Y=>{if(!Y.length)return 0;const W=Y.slice().sort((xe,ye)=>xe-ye);return W[Math.floor(.95*(W.length-1))]},Le=8,qe={cut:null,blast:null};let _e=0;function ke(Y,W){const xe=f.sys.S;for(;_e<xe.evN;_e++){const ye=xe.events[xe.events.length-(xe.evN-_e)];if(!ye)continue;const we=ye.kind==="explode"?"blast":ye.kind==="joint_cut"||ye.kind==="split"?"cut":"";we&&(qe[we]={until:xe.t+Le,f:qe[we]&&xe.t<qe[we].until?qe[we].f:[],p:qe[we]&&xe.t<qe[we].until?qe[we].p:[]})}for(const ye of Object.values(qe))ye&&xe.t<ye.until&&ye.f.length<2e3&&(ye.f.push(Y),ye.p.push(W))}let Oe=0,Ge=-9;const Be=Y=>{h.msg(Y),Ge=f.sys.S.t};function Qe(){const Y=f.sys.S,W=h.L;for(Oe>Y.evN&&(Oe=0);Oe<Y.evN;Oe++){const xe=Y.events[Y.events.length-(Y.evN-Oe)];xe&&(xe.kind==="seam_broke"?Be(W.broke):xe.kind==="fall"?Be(W.fell.replace("{h}",xe.h.toFixed(1)).replace("{d}",xe.dmg)):xe.kind==="death"?Be(xe.cause==="fall"?W.died:W.dying):xe.kind==="exit"?Be(W.exit):xe.kind==="ride_off"?Be(W.ride):xe.kind==="cut_short"&&!xe.why?Be(W.short):xe.kind==="cut_refused"?Be(W.refuse[xe.why]||xe.why):xe.kind==="cut_error"&&Be(W.refuse.сбой))}Ge>-5&&(Y.t-Ge>2.5||Y.t<Ge)&&(h.msg(""),Ge=-9),h.hp(Y.hp),h.carry(!!Y.held&&!Y.drag)}function Mt(Y){if(!f)return;const{sys:W,pl:xe}=f;p.frame(b,I),R.sense(b),h.noteOpen&&((b.press.has("e")||b.fireNew)&&h.note(""),b.press.clear(),b.fire=!1);for(const K of R.modes(b,m))m=K,h.tool(m,S);xe.input.forward=b.fwd||0,xe.input.strafe=b.strafe||0,xe.input.jump=b.press.has("jump"),xe.input.crouch=!!b.crouch,xe.input.crawl=!!b.crawl;const ye=W.burden(),we=W.S.stun>0;xe.speed=(b.run?5.2:3.2)*ye.speed*(we?.25:1),xe.jumpH=Of.jumpH*ye.jump,we&&(xe.input.jump=!1),Xe(Y);const k=F(xe),A=N(xe);if(_=m!=="cut"?W.aimGrip(k,A,2.3):S==="weld"?W.aimWeld(k,A,2.6):W.aim(k,A,2.6),b.press.has("e")&&W.use(_)==="запись"){const Z=f.C.prefabOf[_.id];h.note((f.room.texts[Yi]||f.room.texts.ru)[Z.text])}const ee=R.grip(b,{able:m==="grip"&&!h.noteOpen,holding:!!(W.S.held||W.S.noteHeld),t:W.S.t});b.fireNew&&($=m);const Ee=()=>W.S.noteHeld?W.notes.stick(_,A):W.drop();ee==="take"?W.grab(_)&&R.took(W.S.t):ee==="drop"&&$==="grip"&&Ee();const Se=R.throw(b,{holding:!!(W.S.held||W.S.noteHeld),t:W.S.t});Se&&(W.S.noteHeld?Ee():W.throwHeld(A,Se)),W.S.firing=R.cutting(b,m)&&S==="cut";const ze=R.cutting(b,m)&&(_||S==="weld"&&W.S.held)?W.cut(_,Y,{o:k,d:A},S):"",E=W.step(Y,xe);Ae(pe.phys,E),Qe(),b.press.clear();const P=!!(_&&W.doorOf(_)&&!W.isOn(W.doorOf(_))),H=B(_),ne=Ie(_),U=W.canGrab(_),re=[_&&_.kind+_.id+(_.i??""),m,S,W.S.held,W.S.drag].join("|");return(re!==de||W.S.t-ce>.1||W.S.t<ce)&&(oe=V(_,k,A),de=re,ce=W.S.t),h.target(oe.text.replace(/\{([RF])\}/g,(K,Z)=>h.L[(p.device==="touch"?"touch":"key")+Z]),ne,P,oe.no),f.view.marks(Q(_)),h.touch.update({act:ne?"e":U?"grip":_&&W.canCut(_)?"cut":"",text:ne||(U?H:""),hold:!1,ring:0,held:!!(W.S.held||W.S.noteHeld),ladder:!1,heat:0,over:!1,kickCd:0,slow:_&&_.kind==="bolt"?.55:1,hp:1}),h.bar(ze?W.S.stroke?W.S.stroke.prog:W.progress(_):0),h.flash(W.S.flash),E}function Xe(Y){const{sys:W,pl:xe}=f,ye=W.playerCol(xe);if(sv(xe,ye.col,Y,ye.extra,ye.soft),xe.kx||xe.kz){const we=xe.x,k=xe.z;xe.x+=xe.kx*Y,xe.z+=xe.kz*Y,Bo(xe,we,k,[ye.col.boxes,ye.extra],[],kn.r,A=>A.y1>xe.y+kn.step&&A.y0<xe.y+xe.h),xe.kx*=Math.pow(.05,Y),xe.kz*=Math.pow(.05,Y)}}function tt(Y){if(!f)return;const{pl:W,view:xe}=f,ye=F(W);return Bn(ye[0],ye[1],ye[2],c.position),ds(ye[2],c.quaternion).multiply(new cn().setFromEuler(new Mn(W.pitch,W.yaw,0,"YXZ"))),xe.update(f.sys,Y,ye,W),e.info.reset(),u.render(),e.info.render}function ut(){const Y=f.sys.S,W=Y.last,xe=Y.work;let ye="";return W&&(ye+=`
последнее: ${W.what} · ${B({kind:"part",id:W.id})||W.id} (${W.id})${W.pts?` · точек ${W.pts}`:""}${W.cells?`, ячеек ${W.cells}`:""} -> ${W.out||"?"} · ${W.ms} мс, шагов ${W.n} · ${(Y.t-W.t).toFixed(0)} с назад`),xe&&xe.ms>8&&(ye+=`
расчёт: ${xe.what} ${xe.ms.toFixed(1)} мс, шагов ${xe.n}`),et.n&&(ye+=`
ошибка кадра (${et.n}): ${et.msg}`),ye}const et={n:0,msg:""},Rt=Y=>{et.n++,et.msg=String(Y&&Y.message||Y).slice(0,120),Qi.dataset.roomFault=et.n,et.n<5&&console.error("[room] кадр:",Y)};let bt=0,Lt=0,mt=0,Ot=0;function Ue(Y){if(Lt++,Y-bt<500)return;mt=Lt*1e3/(Y-bt),Lt=0,bt=Y;const W=f.phys.stats(),xe=f.view.stats(),ye=performance.memory?Math.round(performance.memory.usedJSHeapSize/1048576)+" МБ":"н/д",we=(A,ee)=>{const Ee=qe[A];return Ee&&Ee.f.length?`
после ${ee} (${Le} с): кадр p95 ${ge(Ee.f).toFixed(1)}, худший ${Math.max(...Ee.f).toFixed(1)} мс; физика p95 ${ge(Ee.p).toFixed(2)}, худший ${Math.max(...Ee.p).toFixed(2)} мс`:""},k=`${f.room.id} · ${xo} · ${gr}
кадр ${mt.toFixed(0)} к/с, p95 ${ge(pe.frame).toFixed(1)} мс · физика p95 ${ge(pe.phys).toFixed(2)} мс
тела: не спят ${W.awake}, спят ${W.asleep} из ${W.total} · куски ${f.sys.S.pieces.size}, ячеек ${f.sys.cutter.cellCount()} из ${f.sys.cutter.cap}, слито ${f.sys.S.merged.length}${ut()}
вызовы ${Ot}, треуг. ${xe.tris}, память ${ye}, геом. ${e.info.memory.geometries}, текст. ${e.info.memory.textures}
кадр в кадр p95 ${ge(pe.gap).toFixed(1)} мс, экран ${innerWidth}x${innerHeight} x${devicePixelRatio.toFixed(2)}${we("cut","реза")}${we("blast","взрыва")}`;h.fps(k),Qi.dataset.roomFps=mt.toFixed(1)}const He=mn.get("src");f=await v(He&&/^[a-z0-9_./-]+\.json$/i.test(He)&&!He.includes("..")?await(await fetch(He,{cache:"no-store"})).json():await X_(B_)),h.note("");let rt=performance.now(),it=rt,te=0;if(!Ia){const Y=W=>{const xe=!ls.has("noloopguard");xe&&requestAnimationFrame(Y);const ye=Math.min(.05,(W-rt)/1e3);rt=W;const we=performance.now();Ae(pe.gap,W-it),it=W;let k=0;try{k=Mt(ye),te+=ye;const ee=tt(te);Ot=ee?ee.calls:0}catch(ee){if(!xe)throw ee;Rt(ee)}const A=performance.now()-we;if(Ae(pe.frame,A),ke(A,k||0),Hf)try{Ue(W)}catch(ee){Rt(ee)}xe||requestAnimationFrame(Y)};requestAnimationFrame(Y)}const ct=1/60,st={get id(){return f&&f.room.id},state(){const Y=f.sys.S;return{id:f.room.id,phys:xo,tier:gr,t:+Y.t.toFixed(2),player:{x:+f.pl.x.toFixed(3),y:+f.pl.y.toFixed(3),ground:f.pl.ground,z:+f.pl.z.toFixed(3),yaw:+f.pl.yaw.toFixed(3),pitch:+f.pl.pitch.toFixed(3),crouch:!!f.pl.crouch},tool:m,held:Y.held,target:_&&{kind:_.kind,id:_.id},lit:f.C.lights.map(W=>[W.id,f.sys.isOn(W.id)]),joints:[...Y.joints.keys()],cables:[...Y.cablesCut],windows:[...Y.windows].map(([W,xe])=>[W,xe.broken]),p:+Y.p.toFixed(3),doors:[...Y.doors].map(([W,xe])=>[W,+xe.open.toFixed(2)]),hp:+Y.hp.toFixed(1),stun:+Y.stun.toFixed(2),exit:Y.exit,anchored:[...Y.anchored],strain:Y.strain,pieces:[...Y.pieces.keys()],merged:Y.merged.map(W=>W.id),noteHeld:Y.noteHeld,notes:[...Y.notes.values()].map(W=>[W.id,W.on]),panels:f.C.panels.map(W=>[W.id,f.sys.panels.view(W.id).plate]),burned:Y.burned,ejected:Y.ejected,deaths:Y.deaths,events:Y.events.slice(-40),bodies:f.phys.stats()}},put(Y,W){const xe=f.pl;if(xe.x=Y[0],xe.z=Y[1],xe.y=Y[2]||0,xe.vy=0,xe.ground=!Y[2],f.sys.S.peak=null,W){const ye=F(xe),we=[W[0]-ye[0],W[1]-ye[1],W[2]-ye[2]];xe.yaw=Math.atan2(-we[0],-we[2]),xe.pitch=Math.atan2(we[1],Math.hypot(we[0],we[2]))}return st.aim()},frameIn(Y){const W=f.pl;Y.yaw!==void 0&&(W.yaw=Y.yaw),Y.pitch!==void 0&&(W.pitch=Y.pitch),Y.tool&&Y.tool!==m&&(m=Y.tool,h.tool(m,S)),Y.mode&&Y.mode!==S&&C(Y.mode),Y.turn&&f.sys.turnHeld(W);const xe={fwd:"KeyW",back:"KeyS",left:"KeyA",right:"KeyD"};for(const we in xe)Y[we]?p.keyDown(xe[we]):p.keyUp(xe[we]);Y.jump&&p.press("jump");const ye=b.fire;b.fire=!!Y.fire,Y.fire&&!ye&&b.press.add("fire"),Mt(ct),te+=ct},frameEnd(){for(const Y of["KeyW","KeyS","KeyA","KeyD"])p.keyUp(Y);b.fire=!1},aim(){return _=f.sys.aim(F(f.pl),N(f.pl),m==="cut"?2.6:2.3),_&&{kind:_.kind,id:_.id,t:+_.t.toFixed(2),i:_.i}},tool(Y,W){return m=Y,W&&(S=W),h.tool(Y,S),m},act(Y,W=0){const xe=()=>F(f.pl),ye=()=>N(f.pl);if(Y==="cut"){m="cut";let we=0;for(let k=0;k<Math.round(W/ct);k++)_=f.sys.aim(xe(),ye(),2.6),_&&(f.sys.cut(_,ct,{o:xe(),d:ye()},S),we++),f.sys.step(ct,f.pl);return we}return Y==="grab"?(m="grip",_=f.sys.aimGrip(xe(),ye(),2.3),f.sys.grab(_)):Y==="use"?(_=f.sys.aim(xe(),ye(),2.3),f.sys.use(_)):Y==="throw"?f.sys.throwHeld(ye(),W||1):null},advance(Y){const W=Math.round(Y/1e3/ct);for(let xe=0;xe<W;xe++)f.pl.input.forward=0,f.pl.input.strafe=0,f.pl.input.jump=!1,Xe(ct),f.sys.step(ct,f.pl);return te+=W*ct,W},drive(Y,W={}){const xe=Math.max(1,Math.round(Y/1e3/ct)),ye={fwd:"KeyW",back:"KeyS",left:"KeyA",right:"KeyD",jump:"Space",crouch:"KeyC"},we=Object.keys(ye).filter(A=>W[A]);for(const A of we)p.keyDown(ye[A]);W.fire&&(b.fire=!0,b.press.add("fire"));for(const A of W.press||[])p.press(A);const k=A=>{const ee=F(f.pl),Ee=[A[0]-ee[0],A[1]-ee[1],A[2]-ee[2]];f.pl.yaw=Math.atan2(-Ee[0],-Ee[2]),f.pl.pitch=Math.atan2(Ee[1],Math.hypot(Ee[0],Ee[2]))};for(let A=0;A<xe;A++){if(W.from){const ee=xe>1?A/(xe-1):1;k(W.to?W.from.map((Ee,Se)=>Ee+(W.to[Se]-Ee)*ee):W.from)}Mt(ct)}for(const A of we)p.keyUp(ye[A]);return W.fire&&(b.fire=!1),te+=xe*ct,xe},frame(){const Y=tt(te);return{calls:Y.calls,triangles:Y.triangles}},frameFrom(Y,W){const xe=f.pl;st.ghost||(st.ghost=new At(new ql(.26,.78,6,16),new un({color:14263361,roughness:.5,emissive:3810308})),r.add(st.ghost));const ye=st.ghost;ye.visible=!0,Bn(xe.x,xe.y+.65,xe.z,ye.position),ds(xe.z,ye.quaternion),f.view.update(f.sys,te,Y,xe),Bn(Y[0],Y[1],Y[2],c.position);const we=Bn(W[0],W[1],W[2],new ae);c.up.set(0,1,0).applyQuaternion(ds(Y[2])),c.lookAt(we),e.info.reset(),u.render(),ye.visible=!1,c.up.set(0,1,0)},idFrame(){const Y=f.view.keyMeshes(),W=[],xe=[...Y.keys()],ye=new Map;r.traverse(P=>{(P.isMesh||P.isInstancedMesh)&&W.push([P,P.material,P.visible])});const we=new ps({color:0});for(const[P]of W)P.material=we;xe.forEach((P,H)=>{const ne=new xt().setHSL(H/xe.length,1,.5),U=new ps({color:ne});ye.set(P,ne);for(const re of Y.get(P))re.visible&&(re.material=U)});const k=r.fog;r.fog=null;const A=new ot;e.getDrawingBufferSize(A);const ee=new In(Math.max(1,A.x>>1),Math.max(1,A.y>>1));e.setRenderTarget(ee),e.setClearColor(0,1),e.clear();const Ee=F(f.pl);Bn(Ee[0],Ee[1],Ee[2],c.position),ds(Ee[2],c.quaternion).multiply(new cn().setFromEuler(new Mn(f.pl.pitch,f.pl.yaw,0,"YXZ"))),f.view.update(f.sys,te,Ee,f.pl);for(const[P]of W)P.isMesh&&P.material===we&&P.material.transparent&&(P.visible=!1);e.render(r,c);const Se=new Uint8Array(ee.width*ee.height*4);e.readRenderTargetPixels(ee,0,0,ee.width,ee.height,Se),e.setRenderTarget(null),ee.dispose(),r.fog=k;for(const[P,H,ne]of W)P.material=H,P.visible=ne;const ze=Object.fromEntries(xe.map(P=>[P,0])),E=xe.map(P=>ye.get(P)).map(P=>[P.r*255,P.g*255,P.b*255]);for(let P=0;P<Se.length;P+=4){if(Se[P]+Se[P+1]+Se[P+2]<30)continue;let H=-1,ne=1e9;E.forEach((U,re)=>{const K=Math.abs(U[0]-Se[P])+Math.abs(U[1]-Se[P+1])+Math.abs(U[2]-Se[P+2]);K<ne&&(ne=K,H=re)}),H>=0&&ne<60&&ze[xe[H]]++}return{px:ze,total:ee.width*ee.height}},passCalls(){tt(te),e.info.reset(),e.setRenderTarget(null);const Y=[e.shadowMap.autoUpdate,e.shadowMap.needsUpdate];e.shadowMap.autoUpdate=!1,e.shadowMap.needsUpdate=!1;for(const xe of f.view.pool.spots)xe.shadow.needsUpdate=!1;e.render(r,c),[e.shadowMap.autoUpdate,e.shadowMap.needsUpdate]=Y;const W={calls:e.info.render.calls,triangles:e.info.render.triangles};return tt(te),W},weldMany(Y,W=10){const xe=f.sys,ye=xe.cutter,we=xe.phys,k=xe.S,[A,ee,Ee]=f.C.size;st.cutMany(Y+W);const Se=[...k.pieces.keys()].sort((U,re)=>Math.max(...we.half(U))-Math.max(...we.half(re))),ze=Se.length&&Y>30?.5:.8,E=Math.floor((A-.8)/ze),P=Math.floor((Ee-.8)/ze);for(const U of Se)for(const re of ye.jointsOf(U))xe.cutJoint(re.id);f.sys.step(ct,null);let H=0,ne=0;for(const U of Se){if(ne>=Y||H>=E*P)break;const re=we.half(U),K=.6+H%E*ze,Z=.6+Math.floor(H/E)*ze,he=we.pose(U);H++,we.setPose(U,[K,ee-re[1]-.004,Z],[0,0,0,1],!1);let Te={};for(let Fe=0;Fe<70&&!Te.id&&!Te.why;Fe++)Te=ye.weld({kind:"part",id:U,at:[K,ee-.001,Z]},ct),k.t+=ct;Te.id?ne++:we.setPose(U,he.p,he.q,!1)}return xe.anchors(!0),ne},stripRoom(Y=10,W=3,xe=!0){const ye=f.sys,we=ye.phys,k=ye.S,A=ye.tiles,ee={panels:0,holes:0,breach:!1},Ee=P=>{for(let ne=0;ne<4;ne++)ye.panels.cut(P.id,ne,99);ye.grab({kind:"plate",id:P.id});const H=k.held;H&&(ye.letGo(),we.setPose(H,[1.5+ee.panels%5*1.05,.05+.03*Math.floor(ee.panels/5),3.2],[0,0,0,1],!1),ee.panels++)},Se=A.filter(P=>!P.hull&&P.u1-P.u0>.9&&P.v1-P.v0>.9),ze=["W","N","E","F","C","S"].flatMap(P=>Se.filter(H=>H.side===P).slice(0,2));for(const P of ze)ee.panels<Y&&Ee(P);const E=(P,H,ne,U,re)=>[...Array(10).keys()].map(K=>{const Z=K/10*Math.PI*2;return[Math.cos(Z)*re,Math.sin(Z)*re]});for(const P of["sheet1","table.top","door_a.door","cupboard.leaf0","cupboard.l"]){if(ee.holes>=W||!we.has(P))continue;const H=we.half(P),ne=H.indexOf(Math.min(...H)),U=[0,0,0];U[ne]=1;const re=[0,0,0];re[ne]=H[ne];const K=Math.min(...H.filter((Z,he)=>he!==ne))*.55;ye.cutter.holeAt(P,U,re,E(0,0,0,0,K))&&ee.holes++}if(xe){const P=A.find(H=>H.hull&&k.openTiles.includes(H.tileOf));P&&(ye.blowHull(P.id),ee.breach=!0)}return ee},stats(){const Y=f.phys.stats(),W=f.view.stats();return{phys:xo,tier:gr,bodies:Y,tris:W.tris,meshes:W.meshes,plan:W.plan,planN:W.planN,buildMs:+f.buildMs.toFixed(1),geometries:e.info.memory.geometries,textures:e.info.memory.textures,heapMB:performance.memory?+(performance.memory.usedJSHeapSize/1048576).toFixed(1):null,physP95:+ge(pe.phys).toFixed(3),frameP95:+ge(pe.frame).toFixed(2),fps:mt?+mt.toFixed(1):null}},nan(){const Y=[];return r.updateMatrixWorld(!0),r.traverse(W=>{W.matrixWorld.elements.some(xe=>!Number.isFinite(xe))&&Y.push(W.type+":"+(W.userData.part||W.userData.door||W.userData.hatch||W.name||""))}),{objects:Y.slice(0,20),cam:c.matrixWorld.elements.every(Number.isFinite),lights:f.view.pool.spots.concat(f.view.pool.points).map(W=>[+W.intensity.toFixed(2),W.position.toArray().every(Number.isFinite)])}},gl(){return{lost:t.lost,restored:t.restored,programs:(e.info.programs||[]).length,shadows:f.view.pool.spots.map(Y=>Y.shadow.needsUpdate),calls:Ot}},perfReset(){pe.frame.length=0,pe.phys.length=0},perfRun(Y=120){const W=[];for(let xe=0;xe<Y;xe++)Mt(ct),te+=ct,W.push(pe.phys[pe.phys.length-1]);return{physP95:+ge(W).toFixed(3),physMax:+Math.max(...W).toFixed(3)}},frameRun(Y=10){const W=[],xe=[],ye=e.getContext(),we=new Uint8Array(4);for(let A=0;A<Y;A++){const ee=performance.now();Mt(ct),te+=ct;const Ee=tt(te);xe.push(performance.now()-ee),ye.readPixels(0,0,1,1,ye.RGBA,ye.UNSIGNED_BYTE,we),W.push(performance.now()-ee),Ot=Ee.calls}const k=W.slice().sort((A,ee)=>A-ee);return{frameP95:+ge(W).toFixed(1),frameP50:+k[Math.floor(Y/2)].toFixed(1),cpuP50:+xe.slice().sort((A,ee)=>A-ee)[Math.floor(Y/2)].toFixed(1),calls:Ot}},cutMany(Y){const W=f.sys.cutter,xe=f.sys.phys,ye=f.sys.S;for(let we=0;we<400&&ye.pieces.size<Y;we++){const k=xe.bodies().filter(ee=>W.canSplit(ee)).map(ee=>({id:ee,h:xe.half(ee)})).sort((ee,Ee)=>Ee.h[0]*Ee.h[1]*Ee.h[2]-ee.h[0]*ee.h[1]*ee.h[2]);if(!k.length)break;let A=!1;for(const{id:ee,h:Ee}of k){const Se=Ee.indexOf(Math.max(...Ee)),ze=[.25,.2,.15];if(ze[Se]=1,W.splitPart(ee,ze,0)){A=!0;break}}if(!A)break}return ye.pieces.size},snapshot(){return JSON.stringify(f.sys.snapshot())},async reload(Y){const W=f.room,xe={x:f.pl.x,z:f.pl.z,yaw:f.pl.yaw,pitch:f.pl.pitch},ye=performance.now();g();const we=performance.now();return f=await v(W,Y?JSON.parse(Y):null),Object.assign(f.pl,xe),tt(te),{unloadMs:+(we-ye).toFixed(1),loadMs:+(performance.now()-we).toFixed(1)}},fpsNow(){return bt=-1e9,Lt=Math.max(Lt,1),Ue(performance.now()),document.getElementById("rfps").textContent},hud:()=>({target:document.getElementById("rtgt").textContent,hint:document.getElementById("rhint").hidden?"":document.getElementById("rhint").textContent,note:document.getElementById("rnote").hidden?"":document.getElementById("rnotet").textContent,msg:document.getElementById("rmsg").hidden?"":document.getElementById("rmsg").textContent,fps:(document.getElementById("rfps")||{}).textContent||"",fault:et.n}),sys:()=>f.sys,view:()=>f.view};window.__room=st,tt(0),Qi.dataset.room="ready"}q_().catch(W_);
