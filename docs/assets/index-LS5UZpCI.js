(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hc="170",rd=0,Xc=1,od=2,Uu=1,Fu=2,Si=3,Ci=0,An=1,En=2,ci=0,Ks=1,xs=2,qc=3,Yc=4,ad=5,ms=100,ld=101,cd=102,hd=103,ud=104,fd=200,dd=201,pd=202,md=203,ml=204,gl=205,gd=206,_d=207,vd=208,xd=209,yd=210,Md=211,Sd=212,bd=213,Td=214,_l=0,vl=1,xl=2,tr=3,yl=4,Ml=5,Sl=6,bl=7,Ou=0,wd=1,Ed=2,Xi=0,ku=1,Bu=2,zu=3,uc=4,Ad=5,Vu=6,Hu=7,jc="attached",Rd="detached",Gu=300,er=301,nr=302,oa=303,Tl=304,pa=306,Pi=1e3,Hi=1001,aa=1002,rn=1003,Wu=1004,Or=1005,Dn=1006,jo=1007,Ei=1008,Li=1009,Xu=1010,qu=1011,Yr=1012,fc=1013,ys=1014,ti=1015,Hn=1016,dc=1017,pc=1018,ir=1020,Yu=35902,ju=1021,Ku=1022,Vn=1023,Zu=1024,$u=1025,Zs=1026,sr=1027,mc=1028,gc=1029,Ju=1030,_c=1031,vc=1033,Ko=33776,Zo=33777,$o=33778,Jo=33779,wl=35840,El=35841,Al=35842,Rl=35843,Cl=36196,Pl=37492,Ll=37496,Il=37808,Dl=37809,Nl=37810,Ul=37811,Fl=37812,Ol=37813,kl=37814,Bl=37815,zl=37816,Vl=37817,Hl=37818,Gl=37819,Wl=37820,Xl=37821,Qo=36492,ql=36494,Yl=36495,Qu=36283,jl=36284,Kl=36285,Zl=36286,jr=2300,Kr=2301,Ta=2302,Kc=2400,Zc=2401,$c=2402,Cd=2500,Pd=0,tf=1,$l=2,Ld=3200,Id=3201,ef=0,Dd=1,Ti="",Ne="srgb",Mn="srgb-linear",ma="linear",Re="srgb",As=7680,Jc=519,Nd=512,Ud=513,Fd=514,nf=515,Od=516,kd=517,Bd=518,zd=519,Jl=35044,Qc="300 es",Ai=2e3,la=2001;class fr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let th=1234567;const Vr=Math.PI/180,rr=180/Math.PI;function Gn(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[r&255]+dn[r>>8&255]+dn[r>>16&255]+dn[r>>24&255]+"-"+dn[t&255]+dn[t>>8&255]+"-"+dn[t>>16&15|64]+dn[t>>24&255]+"-"+dn[e&63|128]+dn[e>>8&255]+"-"+dn[e>>16&255]+dn[e>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function qe(r,t,e){return Math.max(t,Math.min(e,r))}function xc(r,t){return(r%t+t)%t}function Vd(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Hd(r,t,e){return r!==t?(e-r)/(t-r):0}function Hr(r,t,e){return(1-e)*r+e*t}function Gd(r,t,e,n){return Hr(r,t,1-Math.exp(-e*n))}function Wd(r,t=1){return t-Math.abs(xc(r,t*2)-t)}function Xd(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function qd(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Yd(r,t){return r+Math.floor(Math.random()*(t-r+1))}function jd(r,t){return r+Math.random()*(t-r)}function Kd(r){return r*(.5-Math.random())}function Zd(r){r!==void 0&&(th=r);let t=th+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function $d(r){return r*Vr}function Jd(r){return r*rr}function Qd(r){return(r&r-1)===0&&r!==0}function tp(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ep(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function np(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),f=o((t-n)/2),d=s((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*u,l*f,a*c);break;case"YZY":r.set(l*f,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*f,a*h,a*c);break;case"XZX":r.set(a*h,l*m,l*d,a*c);break;case"YXY":r.set(l*d,a*h,l*m,a*c);break;case"ZYZ":r.set(l*m,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Qn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ce(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const qi={DEG2RAD:Vr,RAD2DEG:rr,generateUUID:Gn,clamp:qe,euclideanModulo:xc,mapLinear:Vd,inverseLerp:Hd,lerp:Hr,damp:Gd,pingpong:Wd,smoothstep:Xd,smootherstep:qd,randInt:Yd,randFloat:jd,randFloatSpread:Kd,seededRandom:Zd,degToRad:$d,radToDeg:Jd,isPowerOfTwo:Qd,ceilPowerOfTwo:tp,floorPowerOfTwo:ep,setQuaternionFromProperEuler:np,normalize:Ce,denormalize:Qn};class it{constructor(t=0,e=0){it.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(t,e,n,i,s,o,a,l,c){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],_=i[0],g=i[3],p=i[6],x=i[1],y=i[4],v=i[7],C=i[2],w=i[5],E=i[8];return s[0]=o*_+a*x+l*C,s[3]=o*g+a*y+l*w,s[6]=o*p+a*v+l*E,s[1]=c*_+h*x+u*C,s[4]=c*g+h*y+u*w,s[7]=c*p+h*v+u*E,s[2]=f*_+d*x+m*C,s[5]=f*g+d*y+m*w,s[8]=f*p+d*v+m*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,m=e*u+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(wa.makeScale(t,e)),this}rotate(t){return this.premultiply(wa.makeRotation(-t)),this}translate(t,e){return this.premultiply(wa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wa=new le;function sf(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Zr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ip(){const r=Zr("canvas");return r.style.display="block",r}const eh={};function kr(r){r in eh||(eh[r]=!0,console.warn(r))}function sp(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function rp(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function op(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const xe={enabled:!0,workingColorSpace:Mn,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Re&&(r.r=Ri(r.r),r.g=Ri(r.g),r.b=Ri(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Re&&(r.r=$s(r.r),r.g=$s(r.g),r.b=$s(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ti?ma:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Ri(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function $s(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const nh=[.64,.33,.3,.6,.15,.06],ih=[.2126,.7152,.0722],sh=[.3127,.329],rh=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),oh=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);xe.define({[Mn]:{primaries:nh,whitePoint:sh,transfer:ma,toXYZ:rh,fromXYZ:oh,luminanceCoefficients:ih,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:nh,whitePoint:sh,transfer:Re,toXYZ:rh,fromXYZ:oh,luminanceCoefficients:ih,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}});let Rs;class ap{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Rs===void 0&&(Rs=Zr("canvas")),Rs.width=t.width,Rs.height=t.height;const n=Rs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Rs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Zr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ri(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ri(e[n]/255)*255):e[n]=Ri(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let lp=0;class rf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Gn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Ea(i[o].image)):s.push(Ea(i[o]))}else s=Ea(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ea(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ap.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cp=0;class je extends fr{constructor(t=je.DEFAULT_IMAGE,e=je.DEFAULT_MAPPING,n=Hi,i=Hi,s=Dn,o=Ei,a=Vn,l=Li,c=je.DEFAULT_ANISOTROPY,h=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Gn(),this.name="",this.source=new rf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pi:t.x=t.x-Math.floor(t.x);break;case Hi:t.x=t.x<0?0:1;break;case aa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pi:t.y=t.y-Math.floor(t.y);break;case Hi:t.y=t.y<0?0:1;break;case aa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=Gu;je.DEFAULT_ANISOTROPY=1;class ye{constructor(t=0,e=0,n=0,i=1){ye.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,v=(d+1)/2,C=(p+1)/2,w=(h+f)/4,E=(u+_)/4,P=(m+g)/4;return y>v&&y>C?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=w/n,s=E/n):v>C?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=w/i,s=P/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=E/s,i=P/s),this.set(n,i,s,e),this}let x=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(u-_)/x,this.z=(f-h)/x,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hp extends fr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new je(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new rf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends hp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class of extends je{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=rn,this.minFilter=rn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class up extends je{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=rn,this.minFilter=rn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=s[o+0],d=s[o+1],m=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=_;return}if(u!==_||l!==f||c!==d||h!==m){let g=1-a;const p=l*f+c*d+h*m+u*_,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const C=Math.sqrt(y),w=Math.atan2(C,p*x);g=Math.sin(g*w)/C,a=Math.sin(a*w)/C}const v=a*x;if(l=l*g+f*v,c=c*g+d*v,h=h*g+m*v,u=u*g+_*v,g===1-a){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],f=s[o+1],d=s[o+2],m=s[o+3];return t[e]=a*m+h*u+l*d-c*f,t[e+1]=l*m+h*f+c*u-a*d,t[e+2]=c*m+h*d+a*f-l*u,t[e+3]=h*m-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),f=l(n/2),d=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ah.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ah.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Aa.copy(this).projectOnVector(t),this.sub(Aa)}reflect(t){return this.sub(Aa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Aa=new L,ah=new Zi;class Wn{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,jn):jn.fromBufferAttribute(s,o),jn.applyMatrix4(t.matrixWorld),this.expandByPoint(jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lo.copy(n.boundingBox)),lo.applyMatrix4(t.matrixWorld),this.union(lo)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,jn),jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(br),co.subVectors(this.max,br),Cs.subVectors(t.a,br),Ps.subVectors(t.b,br),Ls.subVectors(t.c,br),Ni.subVectors(Ps,Cs),Ui.subVectors(Ls,Ps),es.subVectors(Cs,Ls);let e=[0,-Ni.z,Ni.y,0,-Ui.z,Ui.y,0,-es.z,es.y,Ni.z,0,-Ni.x,Ui.z,0,-Ui.x,es.z,0,-es.x,-Ni.y,Ni.x,0,-Ui.y,Ui.x,0,-es.y,es.x,0];return!Ra(e,Cs,Ps,Ls,co)||(e=[1,0,0,0,1,0,0,0,1],!Ra(e,Cs,Ps,Ls,co))?!1:(ho.crossVectors(Ni,Ui),e=[ho.x,ho.y,ho.z],Ra(e,Cs,Ps,Ls,co))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const mi=[new L,new L,new L,new L,new L,new L,new L,new L],jn=new L,lo=new Wn,Cs=new L,Ps=new L,Ls=new L,Ni=new L,Ui=new L,es=new L,br=new L,co=new L,ho=new L,ns=new L;function Ra(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ns.fromArray(r,s);const a=i.x*Math.abs(ns.x)+i.y*Math.abs(ns.y)+i.z*Math.abs(ns.z),l=t.dot(ns),c=e.dot(ns),h=n.dot(ns);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const fp=new Wn,Tr=new L,Ca=new L;class ui{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):fp.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Tr.subVectors(t,this.center);const e=Tr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Tr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ca.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Tr.copy(t.center).add(Ca)),this.expandByPoint(Tr.copy(t.center).sub(Ca))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gi=new L,Pa=new L,uo=new L,Fi=new L,La=new L,fo=new L,Ia=new L;class dr{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=gi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gi.copy(this.origin).addScaledVector(this.direction,e),gi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Pa.copy(t).add(e).multiplyScalar(.5),uo.copy(e).sub(t).normalize(),Fi.copy(this.origin).sub(Pa);const s=t.distanceTo(e)*.5,o=-this.direction.dot(uo),a=Fi.dot(this.direction),l=-Fi.dot(uo),c=Fi.lengthSq(),h=Math.abs(1-o*o);let u,f,d,m;if(h>0)if(u=o*l-a,f=o*a-l,m=s*h,u>=0)if(f>=-m)if(f<=m){const _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Pa).addScaledVector(uo,f),d}intersectSphere(t,e){gi.subVectors(t.center,this.origin);const n=gi.dot(this.direction),i=gi.dot(gi)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,gi)!==null}intersectTriangle(t,e,n,i,s){La.subVectors(e,t),fo.subVectors(n,t),Ia.crossVectors(La,fo);let o=this.direction.dot(Ia),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fi.subVectors(this.origin,t);const l=a*this.direction.dot(fo.crossVectors(Fi,fo));if(l<0)return null;const c=a*this.direction.dot(La.cross(Fi));if(c<0||l+c>o)return null;const h=-a*Fi.dot(Ia);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,i,s,o,a,l,c,h,u,f,d,m,_,g){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,f,d,m,_,g)}set(t,e,n,i,s,o,a,l,c,h,u,f,d,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Is.setFromMatrixColumn(t,0).length(),s=1/Is.setFromMatrixColumn(t,1).length(),o=1/Is.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=o*h,d=o*u,m=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+m*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,m=c*h,_=c*u;e[0]=f+_*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-m,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,m=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,d=o*u,m=a*h,_=a*u;e[0]=l*h,e[4]=m*c-d,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=m*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+m,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*l,d=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dp,t,pp)}lookAt(t,e,n){const i=this.elements;return Pn.subVectors(t,e),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Oi.crossVectors(n,Pn),Oi.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Oi.crossVectors(n,Pn)),Oi.normalize(),po.crossVectors(Pn,Oi),i[0]=Oi.x,i[4]=po.x,i[8]=Pn.x,i[1]=Oi.y,i[5]=po.y,i[9]=Pn.y,i[2]=Oi.z,i[6]=po.z,i[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],_=n[6],g=n[10],p=n[14],x=n[3],y=n[7],v=n[11],C=n[15],w=i[0],E=i[4],P=i[8],b=i[12],M=i[1],I=i[5],z=i[9],V=i[13],F=i[2],H=i[6],W=i[10],Z=i[14],Y=i[3],ct=i[7],_t=i[11],Pt=i[15];return s[0]=o*w+a*M+l*F+c*Y,s[4]=o*E+a*I+l*H+c*ct,s[8]=o*P+a*z+l*W+c*_t,s[12]=o*b+a*V+l*Z+c*Pt,s[1]=h*w+u*M+f*F+d*Y,s[5]=h*E+u*I+f*H+d*ct,s[9]=h*P+u*z+f*W+d*_t,s[13]=h*b+u*V+f*Z+d*Pt,s[2]=m*w+_*M+g*F+p*Y,s[6]=m*E+_*I+g*H+p*ct,s[10]=m*P+_*z+g*W+p*_t,s[14]=m*b+_*V+g*Z+p*Pt,s[3]=x*w+y*M+v*F+C*Y,s[7]=x*E+y*I+v*H+C*ct,s[11]=x*P+y*z+v*W+C*_t,s[15]=x*b+y*V+v*Z+C*Pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+s*l*u-i*c*u-s*a*f+n*c*f+i*a*d-n*l*d)+_*(+e*l*d-e*c*f+s*o*f-i*o*d+i*c*h-s*l*h)+g*(+e*c*u-e*a*d-s*o*u+n*o*d+s*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*f+i*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],_=t[13],g=t[14],p=t[15],x=u*g*c-_*f*c+_*l*d-a*g*d-u*l*p+a*f*p,y=m*f*c-h*g*c-m*l*d+o*g*d+h*l*p-o*f*p,v=h*_*c-m*u*c+m*a*d-o*_*d-h*a*p+o*u*p,C=m*u*l-h*_*l-m*a*f+o*_*f+h*a*g-o*u*g,w=e*x+n*y+i*v+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return t[0]=x*E,t[1]=(_*f*s-u*g*s-_*i*d+n*g*d+u*i*p-n*f*p)*E,t[2]=(a*g*s-_*l*s+_*i*c-n*g*c-a*i*p+n*l*p)*E,t[3]=(u*l*s-a*f*s-u*i*c+n*f*c+a*i*d-n*l*d)*E,t[4]=y*E,t[5]=(h*g*s-m*f*s+m*i*d-e*g*d-h*i*p+e*f*p)*E,t[6]=(m*l*s-o*g*s-m*i*c+e*g*c+o*i*p-e*l*p)*E,t[7]=(o*f*s-h*l*s+h*i*c-e*f*c-o*i*d+e*l*d)*E,t[8]=v*E,t[9]=(m*u*s-h*_*s-m*n*d+e*_*d+h*n*p-e*u*p)*E,t[10]=(o*_*s-m*a*s+m*n*c-e*_*c-o*n*p+e*a*p)*E,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*d-e*a*d)*E,t[12]=C*E,t[13]=(h*_*i-m*u*i+m*n*f-e*_*f-h*n*g+e*u*g)*E,t[14]=(m*a*i-o*_*i-m*n*l+e*_*l+o*n*g-e*a*g)*E,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*f+e*a*f)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,m=s*u,_=o*h,g=o*u,p=a*u,x=l*c,y=l*h,v=l*u,C=n.x,w=n.y,E=n.z;return i[0]=(1-(_+p))*C,i[1]=(d+v)*C,i[2]=(m-y)*C,i[3]=0,i[4]=(d-v)*w,i[5]=(1-(f+p))*w,i[6]=(g+x)*w,i[7]=0,i[8]=(m+y)*E,i[9]=(g-x)*E,i[10]=(1-(f+_))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Is.set(i[0],i[1],i[2]).length();const o=Is.set(i[4],i[5],i[6]).length(),a=Is.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Kn.copy(this);const c=1/s,h=1/o,u=1/a;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=h,Kn.elements[5]*=h,Kn.elements[6]*=h,Kn.elements[8]*=u,Kn.elements[9]*=u,Kn.elements[10]*=u,e.setFromRotationMatrix(Kn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Ai){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let d,m;if(a===Ai)d=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===la)d=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Ai){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-s),f=(e+t)*c,d=(n+i)*h;let m,_;if(a===Ai)m=(o+s)*u,_=-2*u;else if(a===la)m=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Is=new L,Kn=new ie,dp=new L(0,0,0),pp=new L(1,1,1),Oi=new L,po=new L,Pn=new L,lh=new ie,ch=new Zi;class hi{constructor(t=0,e=0,n=0,i=hi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return lh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ch.setFromEuler(this),this.setFromQuaternion(ch,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hi.DEFAULT_ORDER="XYZ";class yc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let mp=0;const hh=new L,Ds=new Zi,_i=new ie,mo=new L,wr=new L,gp=new L,_p=new Zi,uh=new L(1,0,0),fh=new L(0,1,0),dh=new L(0,0,1),ph={type:"added"},vp={type:"removed"},Ns={type:"childadded",child:null},Da={type:"childremoved",child:null};class De extends fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new L,e=new hi,n=new Zi,i=new L(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ie},normalMatrix:{value:new le}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.premultiply(Ds),this}rotateX(t){return this.rotateOnAxis(uh,t)}rotateY(t){return this.rotateOnAxis(fh,t)}rotateZ(t){return this.rotateOnAxis(dh,t)}translateOnAxis(t,e){return hh.copy(t).applyQuaternion(this.quaternion),this.position.add(hh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(uh,t)}translateY(t){return this.translateOnAxis(fh,t)}translateZ(t){return this.translateOnAxis(dh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?mo.copy(t):mo.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(wr,mo,this.up):_i.lookAt(mo,wr,this.up),this.quaternion.setFromRotationMatrix(_i),i&&(_i.extractRotation(i.matrixWorld),Ds.setFromRotationMatrix(_i),this.quaternion.premultiply(Ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ph),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vp),Da.child=t,this.dispatchEvent(Da),Da.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_i.multiply(t.parent.matrixWorld)),t.applyMatrix4(_i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ph),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,t,gp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,_p,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}De.DEFAULT_UP=new L(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zn=new L,vi=new L,Na=new L,xi=new L,Us=new L,Fs=new L,mh=new L,Ua=new L,Fa=new L,Oa=new L,ka=new ye,Ba=new ye,za=new ye;class zn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Zn.subVectors(t,e),i.cross(Zn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Zn.subVectors(i,e),vi.subVectors(n,e),Na.subVectors(t,e);const o=Zn.dot(Zn),a=Zn.dot(vi),l=Zn.dot(Na),c=vi.dot(vi),h=vi.dot(Na),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,m=(o*h-a*l)*f;return s.set(1-d-m,m,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,xi.x),l.addScaledVector(o,xi.y),l.addScaledVector(a,xi.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return ka.setScalar(0),Ba.setScalar(0),za.setScalar(0),ka.fromBufferAttribute(t,e),Ba.fromBufferAttribute(t,n),za.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(ka,s.x),o.addScaledVector(Ba,s.y),o.addScaledVector(za,s.z),o}static isFrontFacing(t,e,n,i){return Zn.subVectors(n,e),vi.subVectors(t,e),Zn.cross(vi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Zn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Zn.cross(vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return zn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return zn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return zn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return zn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return zn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Us.subVectors(i,n),Fs.subVectors(s,n),Ua.subVectors(t,n);const l=Us.dot(Ua),c=Fs.dot(Ua);if(l<=0&&c<=0)return e.copy(n);Fa.subVectors(t,i);const h=Us.dot(Fa),u=Fs.dot(Fa);if(h>=0&&u<=h)return e.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Us,o);Oa.subVectors(t,s);const d=Us.dot(Oa),m=Fs.dot(Oa);if(m>=0&&d<=m)return e.copy(s);const _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Fs,a);const g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return mh.subVectors(s,i),a=(u-h)/(u-h+(d-m)),e.copy(i).addScaledVector(mh,a);const p=1/(g+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(Us,o).addScaledVector(Fs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const af={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},go={h:0,s:0,l:0};function Va(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=xe.workingColorSpace){return this.r=t,this.g=e,this.b=n,xe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=xe.workingColorSpace){if(t=xc(t,1),e=qe(e,0,1),n=qe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Va(o,s,t+1/3),this.g=Va(o,s,t),this.b=Va(o,s,t-1/3)}return xe.toWorkingColorSpace(this,i),this}setStyle(t,e=Ne){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const n=af[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ri(t.r),this.g=Ri(t.g),this.b=Ri(t.b),this}copyLinearToSRGB(t){return this.r=$s(t.r),this.g=$s(t.g),this.b=$s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return xe.fromWorkingColorSpace(pn.copy(this),t),Math.round(qe(pn.r*255,0,255))*65536+Math.round(qe(pn.g*255,0,255))*256+Math.round(qe(pn.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.fromWorkingColorSpace(pn.copy(this),e);const n=pn.r,i=pn.g,s=pn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=xe.workingColorSpace){return xe.fromWorkingColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=Ne){xe.fromWorkingColorSpace(pn.copy(this),t);const e=pn.r,n=pn.g,i=pn.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ki),this.setHSL(ki.h+t,ki.s+e,ki.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ki),t.getHSL(go);const n=Hr(ki.h,go.h,e),i=Hr(ki.s,go.s,e),s=Hr(ki.l,go.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new Ht;Ht.NAMES=af;let xp=0;class ei extends fr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=Gn(),this.name="",this.blending=Ks,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ml,this.blendDst=gl,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ml&&(n.blendSrc=this.blendSrc),this.blendDst!==gl&&(n.blendDst=this.blendDst),this.blendEquation!==ms&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==tr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(n.stencilFail=this.stencilFail),this.stencilZFail!==As&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ai extends ei{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Ou,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ge=new L,_o=new it;class on{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Jl,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_o.fromBufferAttribute(this,e),_o.applyMatrix3(t),this.setXY(e,_o.x,_o.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),i=Ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),i=Ce(i,this.array),s=Ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Jl&&(t.usage=this.usage),t}}class lf extends on{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class cf extends on{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ge extends on{constructor(t,e,n){super(new Float32Array(t),e,n)}}let yp=0;const Fn=new ie,Ha=new De,Os=new L,Ln=new Wn,Er=new Wn,en=new L;class ke extends fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sf(t)?cf:lf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new le().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fn.makeRotationFromQuaternion(t),this.applyMatrix4(Fn),this}rotateX(t){return Fn.makeRotationX(t),this.applyMatrix4(Fn),this}rotateY(t){return Fn.makeRotationY(t),this.applyMatrix4(Fn),this}rotateZ(t){return Fn.makeRotationZ(t),this.applyMatrix4(Fn),this}translate(t,e,n){return Fn.makeTranslation(t,e,n),this.applyMatrix4(Fn),this}scale(t,e,n){return Fn.makeScale(t,e,n),this.applyMatrix4(Fn),this}lookAt(t){return Ha.lookAt(t),Ha.updateMatrix(),this.applyMatrix4(Ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ge(n,3))}else{for(let n=0,i=e.count;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Er.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Ln.min,Er.min),Ln.expandByPoint(en),en.addVectors(Ln.max,Er.max),Ln.expandByPoint(en)):(Ln.expandByPoint(Er.min),Ln.expandByPoint(Er.max))}Ln.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)en.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(en));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)en.fromBufferAttribute(a,c),l&&(Os.fromBufferAttribute(t,c),en.add(Os)),i=Math.max(i,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new L,l[P]=new L;const c=new L,h=new L,u=new L,f=new it,d=new it,m=new it,_=new L,g=new L;function p(P,b,M){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),f.fromBufferAttribute(s,P),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,M),h.sub(c),u.sub(c),d.sub(f),m.sub(f);const I=1/(d.x*m.y-m.x*d.y);isFinite(I)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(I),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(I),a[P].add(_),a[b].add(_),a[M].add(_),l[P].add(g),l[b].add(g),l[M].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let P=0,b=x.length;P<b;++P){const M=x[P],I=M.start,z=M.count;for(let V=I,F=I+z;V<F;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const y=new L,v=new L,C=new L,w=new L;function E(P){C.fromBufferAttribute(i,P),w.copy(C);const b=a[P];y.copy(b),y.sub(C.multiplyScalar(C.dot(b))).normalize(),v.crossVectors(w,b);const I=v.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,I)}for(let P=0,b=x.length;P<b;++P){const M=x[P],I=M.start,z=M.count;for(let V=I,F=I+z;V<F;V+=3)E(t.getX(V+0)),E(t.getX(V+1)),E(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new L,s=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){const m=t.getX(f+0),_=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)en.fromBufferAttribute(t,e),en.normalize(),t.setXYZ(e,en.x,en.y,en.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)f[m++]=c[d++]}return new on(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ke,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gh=new ie,is=new dr,vo=new ui,_h=new L,xo=new L,yo=new L,Mo=new L,Ga=new L,So=new L,vh=new L,bo=new L;class ot extends De{constructor(t=new ke,e=new ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){So.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(Ga.fromBufferAttribute(u,t),o?So.addScaledVector(Ga,h):So.addScaledVector(Ga.sub(e),h))}e.add(So)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(s),is.copy(t.ray).recast(t.near),!(vo.containsPoint(is.origin)===!1&&(is.intersectSphere(vo,_h)===null||is.origin.distanceToSquared(_h)>(t.far-t.near)**2))&&(gh.copy(s).invert(),is.copy(t.ray).applyMatrix4(gh),!(n.boundingBox!==null&&is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,is)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=o[g.materialIndex],x=Math.max(g.start,d.start),y=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,C=y;v<C;v+=3){const w=a.getX(v),E=a.getX(v+1),P=a.getX(v+2);i=To(this,p,t,n,c,h,u,w,E,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const x=a.getX(g),y=a.getX(g+1),v=a.getX(g+2);i=To(this,o,t,n,c,h,u,x,y,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=o[g.materialIndex],x=Math.max(g.start,d.start),y=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,C=y;v<C;v+=3){const w=v,E=v+1,P=v+2;i=To(this,p,t,n,c,h,u,w,E,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const x=g,y=g+1,v=g+2;i=To(this,o,t,n,c,h,u,x,y,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function Mp(r,t,e,n,i,s,o,a){let l;if(t.side===An?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Ci,a),l===null)return null;bo.copy(a),bo.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(bo);return c<e.near||c>e.far?null:{distance:c,point:bo.clone(),object:r}}function To(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,xo),r.getVertexPosition(l,yo),r.getVertexPosition(c,Mo);const h=Mp(r,t,e,n,xo,yo,Mo,vh);if(h){const u=new L;zn.getBarycoord(vh,xo,yo,Mo,u),i&&(h.uv=zn.getInterpolatedAttribute(i,a,l,c,u,new it)),s&&(h.uv1=zn.getInterpolatedAttribute(s,a,l,c,u,new it)),o&&(h.normal=zn.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new L,materialIndex:0};zn.getNormal(xo,yo,Mo,f.normal),h.face=f,h.barycoord=u}return h}class Fe extends ke{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,s,0),m("z","y","x",1,-1,n,e,-t,o,s,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(u,2));function m(_,g,p,x,y,v,C,w,E,P,b){const M=v/E,I=C/P,z=v/2,V=C/2,F=w/2,H=E+1,W=P+1;let Z=0,Y=0;const ct=new L;for(let _t=0;_t<W;_t++){const Pt=_t*I-V;for(let qt=0;qt<H;qt++){const he=qt*M-z;ct[_]=he*x,ct[g]=Pt*y,ct[p]=F,c.push(ct.x,ct.y,ct.z),ct[_]=0,ct[g]=0,ct[p]=w>0?1:-1,h.push(ct.x,ct.y,ct.z),u.push(qt/E),u.push(1-_t/P),Z+=1}}for(let _t=0;_t<P;_t++)for(let Pt=0;Pt<E;Pt++){const qt=f+Pt+H*_t,he=f+Pt+H*(_t+1),et=f+(Pt+1)+H*(_t+1),ut=f+(Pt+1)+H*_t;l.push(qt,he,ut),l.push(he,et,ut),Y+=6}a.addGroup(d,Y,b),d+=Y,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function or(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function vn(r){const t={};for(let e=0;e<r.length;e++){const n=or(r[e]);for(const i in n)t[i]=n[i]}return t}function Sp(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function hf(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}const Ki={clone:or,merge:vn};var bp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ye extends ei{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bp,this.fragmentShader=Tp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=or(t.uniforms),this.uniformsGroups=Sp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class uf extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Ai}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new L,xh=new it,yh=new it;class mn extends uf{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=rr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Vr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rr*2*Math.atan(Math.tan(Vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z)}getViewSize(t,e){return this.getViewBounds(t,xh,yh),e.subVectors(yh,xh)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Vr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ks=-90,Bs=1;class wp extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new mn(ks,Bs,t,e);i.layers=this.layers,this.add(i);const s=new mn(ks,Bs,t,e);s.layers=this.layers,this.add(s);const o=new mn(ks,Bs,t,e);o.layers=this.layers,this.add(o);const a=new mn(ks,Bs,t,e);a.layers=this.layers,this.add(a);const l=new mn(ks,Bs,t,e);l.layers=this.layers,this.add(l);const c=new mn(ks,Bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Ai)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===la)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class ff extends je{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:er,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ep extends Rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ff(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Dn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Fe(5,5,5),s=new Ye({name:"CubemapFromEquirect",uniforms:or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:An,blending:ci});s.uniforms.tEquirect.value=e;const o=new ot(i,s),a=e.minFilter;return e.minFilter===Ei&&(e.minFilter=Dn),new wp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const Wa=new L,Ap=new L,Rp=new le;class Vi{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Wa.subVectors(n,e).cross(Ap.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Wa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Rp.getNormalMatrix(t),i=this.coplanarPoint(Wa).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ss=new ui,wo=new L;class Mc{constructor(t=new Vi,e=new Vi,n=new Vi,i=new Vi,s=new Vi,o=new Vi){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ai){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],m=i[9],_=i[10],g=i[11],p=i[12],x=i[13],y=i[14],v=i[15];if(n[0].setComponents(l-s,f-c,g-d,v-p).normalize(),n[1].setComponents(l+s,f+c,g+d,v+p).normalize(),n[2].setComponents(l+o,f+h,g+m,v+x).normalize(),n[3].setComponents(l-o,f-h,g-m,v-x).normalize(),n[4].setComponents(l-a,f-u,g-_,v-y).normalize(),e===Ai)n[5].setComponents(l+a,f+u,g+_,v+y).normalize();else if(e===la)n[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(t){return ss.center.set(0,0,0),ss.radius=.7071067811865476,ss.applyMatrix4(t.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(wo.x=i.normal.x>0?t.max.x:t.min.x,wo.y=i.normal.y>0?t.max.y:t.min.y,wo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(wo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function df(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Cp(r){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){const m=u[f],_=u[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){const _=u[d];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class ni extends ke{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,d=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const x=p*f-o;for(let y=0;y<c;y++){const v=y*u-s;m.push(v,-x,0),_.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const y=x+c*p,v=x+c*(p+1),C=x+1+c*(p+1),w=x+1+c*p;d.push(y,v,w),d.push(v,C,w)}this.setIndex(d),this.setAttribute("position",new ge(m,3)),this.setAttribute("normal",new ge(_,3)),this.setAttribute("uv",new ge(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ni(t.width,t.height,t.widthSegments,t.heightSegments)}}var Pp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lp=`#ifdef USE_ALPHAHASH
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
#endif`,Ip=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Np=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Up=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fp=`#ifdef USE_AOMAP
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
#endif`,Op=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kp=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Bp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gp=`#ifdef USE_IRIDESCENCE
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
#endif`,Wp=`#ifdef USE_BUMPMAP
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
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Qp=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,t0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,e0=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,n0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,i0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,r0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,o0="gl_FragColor = linearToOutputTexel( gl_FragColor );",a0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,l0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,c0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,h0=`#ifdef USE_ENVMAP
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
#endif`,u0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,f0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,d0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,p0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,m0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,g0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_0=`#ifdef USE_GRADIENTMAP
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
}`,v0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,x0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,M0=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,S0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,b0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,T0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,w0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,A0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,R0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,C0=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,P0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,L0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,I0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,D0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,F0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,O0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,k0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,B0=`#if defined( USE_POINTS_UV )
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
#endif`,z0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,H0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,G0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,W0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X0=`#ifdef USE_MORPHTARGETS
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
#endif`,q0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,j0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,K0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,J0=`#ifdef USE_NORMALMAP
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
#endif`,Q0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,em=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,im=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,om=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,am=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,um=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,fm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,dm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,pm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,mm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gm=`#ifdef USE_SKINNING
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
#endif`,_m=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vm=`#ifdef USE_SKINNING
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
#endif`,xm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ym=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bm=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tm=`#ifdef USE_TRANSMISSION
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
#endif`,wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pm=`uniform sampler2D t2D;
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
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Im=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Um=`#include <common>
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
}`,Fm=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Om=`#define DISTANCE
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
}`,km=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vm=`uniform float scale;
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
}`,Hm=`uniform vec3 diffuse;
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
}`,Gm=`#include <common>
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
}`,Wm=`uniform vec3 diffuse;
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
}`,Xm=`#define LAMBERT
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
}`,qm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Ym=`#define MATCAP
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
}`,jm=`#define MATCAP
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
}`,Km=`#define NORMAL
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
}`,Zm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$m=`#define PHONG
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
}`,Jm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Qm=`#define STANDARD
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
}`,tg=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,eg=`#define TOON
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
}`,ng=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,ig=`uniform float size;
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
}`,sg=`uniform vec3 diffuse;
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
}`,rg=`#include <common>
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
}`,og=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,ag=`uniform float rotation;
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
}`,lg=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:Pp,alphahash_pars_fragment:Lp,alphamap_fragment:Ip,alphamap_pars_fragment:Dp,alphatest_fragment:Np,alphatest_pars_fragment:Up,aomap_fragment:Fp,aomap_pars_fragment:Op,batching_pars_vertex:kp,batching_vertex:Bp,begin_vertex:zp,beginnormal_vertex:Vp,bsdfs:Hp,iridescence_fragment:Gp,bumpmap_pars_fragment:Wp,clipping_planes_fragment:Xp,clipping_planes_pars_fragment:qp,clipping_planes_pars_vertex:Yp,clipping_planes_vertex:jp,color_fragment:Kp,color_pars_fragment:Zp,color_pars_vertex:$p,color_vertex:Jp,common:Qp,cube_uv_reflection_fragment:t0,defaultnormal_vertex:e0,displacementmap_pars_vertex:n0,displacementmap_vertex:i0,emissivemap_fragment:s0,emissivemap_pars_fragment:r0,colorspace_fragment:o0,colorspace_pars_fragment:a0,envmap_fragment:l0,envmap_common_pars_fragment:c0,envmap_pars_fragment:h0,envmap_pars_vertex:u0,envmap_physical_pars_fragment:S0,envmap_vertex:f0,fog_vertex:d0,fog_pars_vertex:p0,fog_fragment:m0,fog_pars_fragment:g0,gradientmap_pars_fragment:_0,lightmap_pars_fragment:v0,lights_lambert_fragment:x0,lights_lambert_pars_fragment:y0,lights_pars_begin:M0,lights_toon_fragment:b0,lights_toon_pars_fragment:T0,lights_phong_fragment:w0,lights_phong_pars_fragment:E0,lights_physical_fragment:A0,lights_physical_pars_fragment:R0,lights_fragment_begin:C0,lights_fragment_maps:P0,lights_fragment_end:L0,logdepthbuf_fragment:I0,logdepthbuf_pars_fragment:D0,logdepthbuf_pars_vertex:N0,logdepthbuf_vertex:U0,map_fragment:F0,map_pars_fragment:O0,map_particle_fragment:k0,map_particle_pars_fragment:B0,metalnessmap_fragment:z0,metalnessmap_pars_fragment:V0,morphinstance_vertex:H0,morphcolor_vertex:G0,morphnormal_vertex:W0,morphtarget_pars_vertex:X0,morphtarget_vertex:q0,normal_fragment_begin:Y0,normal_fragment_maps:j0,normal_pars_fragment:K0,normal_pars_vertex:Z0,normal_vertex:$0,normalmap_pars_fragment:J0,clearcoat_normal_fragment_begin:Q0,clearcoat_normal_fragment_maps:tm,clearcoat_pars_fragment:em,iridescence_pars_fragment:nm,opaque_fragment:im,packing:sm,premultiplied_alpha_fragment:rm,project_vertex:om,dithering_fragment:am,dithering_pars_fragment:lm,roughnessmap_fragment:cm,roughnessmap_pars_fragment:hm,shadowmap_pars_fragment:um,shadowmap_pars_vertex:fm,shadowmap_vertex:dm,shadowmask_pars_fragment:pm,skinbase_vertex:mm,skinning_pars_vertex:gm,skinning_vertex:_m,skinnormal_vertex:vm,specularmap_fragment:xm,specularmap_pars_fragment:ym,tonemapping_fragment:Mm,tonemapping_pars_fragment:Sm,transmission_fragment:bm,transmission_pars_fragment:Tm,uv_pars_fragment:wm,uv_pars_vertex:Em,uv_vertex:Am,worldpos_vertex:Rm,background_vert:Cm,background_frag:Pm,backgroundCube_vert:Lm,backgroundCube_frag:Im,cube_vert:Dm,cube_frag:Nm,depth_vert:Um,depth_frag:Fm,distanceRGBA_vert:Om,distanceRGBA_frag:km,equirect_vert:Bm,equirect_frag:zm,linedashed_vert:Vm,linedashed_frag:Hm,meshbasic_vert:Gm,meshbasic_frag:Wm,meshlambert_vert:Xm,meshlambert_frag:qm,meshmatcap_vert:Ym,meshmatcap_frag:jm,meshnormal_vert:Km,meshnormal_frag:Zm,meshphong_vert:$m,meshphong_frag:Jm,meshphysical_vert:Qm,meshphysical_frag:tg,meshtoon_vert:eg,meshtoon_frag:ng,points_vert:ig,points_frag:sg,shadow_vert:rg,shadow_frag:og,sprite_vert:ag,sprite_frag:lg},St={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},oi={basic:{uniforms:vn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:vn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Ht(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:vn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:vn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:vn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Ht(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:vn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:vn([St.points,St.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:vn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:vn([St.common,St.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:vn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:vn([St.sprite,St.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:vn([St.common,St.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:vn([St.lights,St.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};oi.physical={uniforms:vn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const Eo={r:0,b:0,g:0},rs=new hi,cg=new ie;function hg(r,t,e,n,i,s,o){const a=new Ht(0);let l=s===!0?0:1,c,h,u=null,f=0,d=null;function m(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?e:t).get(y)),y}function _(x){let y=!1;const v=m(x);v===null?p(a,l):v&&v.isColor&&(p(v,1),y=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(x,y){const v=m(y);v&&(v.isCubeTexture||v.mapping===pa)?(h===void 0&&(h=new ot(new Fe(1,1,1),new Ye({name:"BackgroundCubeMaterial",uniforms:or(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),rs.copy(y.backgroundRotation),rs.x*=-1,rs.y*=-1,rs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(cg.makeRotationFromEuler(rs)),h.material.toneMapped=xe.getTransfer(v.colorSpace)!==Re,(u!==v||f!==v.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=r.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ot(new ni(2,2),new Ye({name:"BackgroundMaterial",uniforms:or(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=xe.getTransfer(v.colorSpace)!==Re,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,y){x.getRGB(Eo,hf(r)),n.buffers.color.setClear(Eo.r,Eo.g,Eo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:_,addToRenderList:g}}function ug(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(M,I,z,V,F){let H=!1;const W=u(V,z,I);s!==W&&(s=W,c(s.object)),H=d(M,V,z,F),H&&m(M,V,z,F),F!==null&&t.update(F,r.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,v(M,I,z,V),F!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return r.createVertexArray()}function c(M){return r.bindVertexArray(M)}function h(M){return r.deleteVertexArray(M)}function u(M,I,z){const V=z.wireframe===!0;let F=n[M.id];F===void 0&&(F={},n[M.id]=F);let H=F[I.id];H===void 0&&(H={},F[I.id]=H);let W=H[V];return W===void 0&&(W=f(l()),H[V]=W),W}function f(M){const I=[],z=[],V=[];for(let F=0;F<e;F++)I[F]=0,z[F]=0,V[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:V,object:M,attributes:{},index:null}}function d(M,I,z,V){const F=s.attributes,H=I.attributes;let W=0;const Z=z.getAttributes();for(const Y in Z)if(Z[Y].location>=0){const _t=F[Y];let Pt=H[Y];if(Pt===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(Pt=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(Pt=M.instanceColor)),_t===void 0||_t.attribute!==Pt||Pt&&_t.data!==Pt.data)return!0;W++}return s.attributesNum!==W||s.index!==V}function m(M,I,z,V){const F={},H=I.attributes;let W=0;const Z=z.getAttributes();for(const Y in Z)if(Z[Y].location>=0){let _t=H[Y];_t===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(_t=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(_t=M.instanceColor));const Pt={};Pt.attribute=_t,_t&&_t.data&&(Pt.data=_t.data),F[Y]=Pt,W++}s.attributes=F,s.attributesNum=W,s.index=V}function _(){const M=s.newAttributes;for(let I=0,z=M.length;I<z;I++)M[I]=0}function g(M){p(M,0)}function p(M,I){const z=s.newAttributes,V=s.enabledAttributes,F=s.attributeDivisors;z[M]=1,V[M]===0&&(r.enableVertexAttribArray(M),V[M]=1),F[M]!==I&&(r.vertexAttribDivisor(M,I),F[M]=I)}function x(){const M=s.newAttributes,I=s.enabledAttributes;for(let z=0,V=I.length;z<V;z++)I[z]!==M[z]&&(r.disableVertexAttribArray(z),I[z]=0)}function y(M,I,z,V,F,H,W){W===!0?r.vertexAttribIPointer(M,I,z,F,H):r.vertexAttribPointer(M,I,z,V,F,H)}function v(M,I,z,V){_();const F=V.attributes,H=z.getAttributes(),W=I.defaultAttributeValues;for(const Z in H){const Y=H[Z];if(Y.location>=0){let ct=F[Z];if(ct===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor)),ct!==void 0){const _t=ct.normalized,Pt=ct.itemSize,qt=t.get(ct);if(qt===void 0)continue;const he=qt.buffer,et=qt.type,ut=qt.bytesPerElement,Dt=et===r.INT||et===r.UNSIGNED_INT||ct.gpuType===fc;if(ct.isInterleavedBufferAttribute){const pt=ct.data,Ut=pt.stride,Xt=ct.offset;if(pt.isInstancedInterleavedBuffer){for(let Vt=0;Vt<Y.locationSize;Vt++)p(Y.location+Vt,pt.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Vt=0;Vt<Y.locationSize;Vt++)g(Y.location+Vt);r.bindBuffer(r.ARRAY_BUFFER,he);for(let Vt=0;Vt<Y.locationSize;Vt++)y(Y.location+Vt,Pt/Y.locationSize,et,_t,Ut*ut,(Xt+Pt/Y.locationSize*Vt)*ut,Dt)}else{if(ct.isInstancedBufferAttribute){for(let pt=0;pt<Y.locationSize;pt++)p(Y.location+pt,ct.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let pt=0;pt<Y.locationSize;pt++)g(Y.location+pt);r.bindBuffer(r.ARRAY_BUFFER,he);for(let pt=0;pt<Y.locationSize;pt++)y(Y.location+pt,Pt/Y.locationSize,et,_t,Pt*ut,Pt/Y.locationSize*pt*ut,Dt)}}else if(W!==void 0){const _t=W[Z];if(_t!==void 0)switch(_t.length){case 2:r.vertexAttrib2fv(Y.location,_t);break;case 3:r.vertexAttrib3fv(Y.location,_t);break;case 4:r.vertexAttrib4fv(Y.location,_t);break;default:r.vertexAttrib1fv(Y.location,_t)}}}}x()}function C(){P();for(const M in n){const I=n[M];for(const z in I){const V=I[z];for(const F in V)h(V[F].object),delete V[F];delete I[z]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const I=n[M.id];for(const z in I){const V=I[z];for(const F in V)h(V[F].object),delete V[F];delete I[z]}delete n[M.id]}function E(M){for(const I in n){const z=n[I];if(z[M.id]===void 0)continue;const V=z[M.id];for(const F in V)h(V[F].object),delete V[F];delete z[M.id]}}function P(){b(),o=!0,s!==i&&(s=i,c(s.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function fg(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*f[_];e.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function dg(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==Vn&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const P=E===Hn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Li&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==ti&&!P)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:C,maxSamples:w}}function pg(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Vi,a=new le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=r.get(u);if(!i||m===null||m.length===0||s&&!g)s?h(null):c();else{const x=s?0:n,y=x*4;let v=p.clippingState||null;l.value=v,v=h(m,f,y,d);for(let C=0;C!==y;++C)v[C]=e[C];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=d+_*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,v=d;y!==_;++y,v+=4)o.copy(u[y]).applyMatrix4(x,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function mg(r){let t=new WeakMap;function e(o,a){return a===oa?o.mapping=er:a===Tl&&(o.mapping=nr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===oa||a===Tl)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ep(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class ga extends uf{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ys=4,Mh=[.125,.215,.35,.446,.526,.582],gs=20,Xa=new ga,Sh=new Ht;let qa=null,Ya=0,ja=0,Ka=!1;const fs=(1+Math.sqrt(5))/2,zs=1/fs,bh=[new L(-fs,zs,0),new L(fs,zs,0),new L(-zs,0,fs),new L(zs,0,fs),new L(0,fs,-zs),new L(0,fs,zs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Ql{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){qa=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),Ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qa,Ya,ja),this._renderer.xr.enabled=Ka,t.scissorTest=!1,Ao(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===er||t.mapping===nr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qa=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),Ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Hn,format:Vn,colorSpace:Mn,depthBuffer:!1},i=Th(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Th(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gg(s)),this._blurMaterial=_g(s,t,e)}return i}_compileMaterial(t){const e=new ot(this._lodPlanes[0],t);this._renderer.compile(e,Xa)}_sceneToCubeUV(t,e,n,i){const a=new mn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Sh),h.toneMapping=Xi,h.autoClear=!1;const d=new ai({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),m=new ot(new Fe,d);let _=!1;const g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,_=!0):(d.color.copy(Sh),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;Ao(i,x*y,p>2?y:0,y,y),h.setRenderTarget(i),_&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===er||t.mapping===nr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wh());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new ot(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Ao(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Xa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=bh[(i-s-1)%bh.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ot(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*gs-1),_=s/m,g=isFinite(s)?1+Math.floor(h*_):gs;g>gs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${gs}`);const p=[];let x=0;for(let E=0;E<gs;++E){const P=E/_,b=Math.exp(-P*P/2);p.push(b),E===0?x+=b:E<g&&(x+=2*b)}for(let E=0;E<p.length;E++)p[E]=p[E]/x;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=m,f.mipInt.value=y-n;const v=this._sizeLods[i],C=3*v*(i>y-Ys?i-y+Ys:0),w=4*(this._cubeSize-v);Ao(e,C,w,3*v,2*v),l.setRenderTarget(e),l.render(u,Xa)}}function gg(r){const t=[],e=[],n=[];let i=r;const s=r-Ys+1+Mh.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Ys?l=Mh[o-r+Ys-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,_=3,g=2,p=1,x=new Float32Array(_*m*d),y=new Float32Array(g*m*d),v=new Float32Array(p*m*d);for(let w=0;w<d;w++){const E=w%3*2/3-1,P=w>2?0:-1,b=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];x.set(b,_*m*w),y.set(f,g*m*w);const M=[w,w,w,w,w,w];v.set(M,p*m*w)}const C=new ke;C.setAttribute("position",new on(x,_)),C.setAttribute("uv",new on(y,g)),C.setAttribute("faceIndex",new on(v,p)),t.push(C),i>Ys&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Th(r,t,e){const n=new Rn(r,t,e);return n.texture.mapping=pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ao(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function _g(r,t,e){const n=new Float32Array(gs),i=new L(0,1,0);return new Ye({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function wh(){return new Ye({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Eh(){return new Ye({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Sc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vg(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===oa||l===Tl,h=l===er||l===nr;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Ql(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new Ql(r)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function xg(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&kr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function yg(r,t,e,n){const i={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);for(const m in f.morphAttributes){const _=f.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)t.remove(_[g])}f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const m in f)t.update(f[m],r.ARRAY_BUFFER);const d=u.morphAttributes;for(const m in d){const _=d[m];for(let g=0,p=_.length;g<p;g++)t.update(_[g],r.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,m=u.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let y=0,v=x.length;y<v;y+=3){const C=x[y+0],w=x[y+1],E=x[y+2];f.push(C,w,w,E,E,C)}}else if(m!==void 0){const x=m.array;_=m.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const C=y+0,w=y+1,E=y+2;f.push(C,w,w,E,E,C)}}else return;const g=new(sf(f)?cf:lf)(f,1);g.version=_;const p=s.get(u);p&&t.remove(p),s.set(u,g)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Mg(r,t,e){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),e.update(d,n,1)}function c(f,d,m){m!==0&&(r.drawElementsInstanced(n,d,s,f*o,m),e.update(d,n,m))}function h(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];e.update(g,n,1)}function u(f,d,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,m);let p=0;for(let x=0;x<m;x++)p+=d[x]*_[x];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Sg(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function bg(r,t,e){const n=new WeakMap,i=new ye;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let M=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;m===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let C=a.attributes.position.count*v,w=1;C>t.maxTextureSize&&(w=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const E=new Float32Array(C*w*4*u),P=new of(E,C,w,u);P.type=ti,P.needsUpdate=!0;const b=v*4;for(let I=0;I<u;I++){const z=p[I],V=x[I],F=y[I],H=C*w*4*I;for(let W=0;W<z.count;W++){const Z=W*b;m===!0&&(i.fromBufferAttribute(z,W),E[H+Z+0]=i.x,E[H+Z+1]=i.y,E[H+Z+2]=i.z,E[H+Z+3]=0),_===!0&&(i.fromBufferAttribute(V,W),E[H+Z+4]=i.x,E[H+Z+5]=i.y,E[H+Z+6]=i.z,E[H+Z+7]=0),g===!0&&(i.fromBufferAttribute(F,W),E[H+Z+8]=i.x,E[H+Z+9]=i.y,E[H+Z+10]=i.z,E[H+Z+11]=F.itemSize===4?i.w:1)}}f={count:u,texture:P,size:new it(C,w)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Tg(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class pf extends je{constructor(t,e,n,i,s,o,a,l,c,h=Zs){if(h!==Zs&&h!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Zs&&(n=ys),n===void 0&&h===sr&&(n=ir),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:rn,this.minFilter=l!==void 0?l:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const mf=new je,Ah=new pf(1,1),gf=new of,_f=new up,vf=new ff,Rh=[],Ch=[],Ph=new Float32Array(16),Lh=new Float32Array(9),Ih=new Float32Array(4);function pr(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Rh[i];if(s===void 0&&(s=new Float32Array(i),Rh[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ke(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ze(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function _a(r,t){let e=Ch[t];e===void 0&&(e=new Int32Array(t),Ch[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function wg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Eg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;r.uniform2fv(this.addr,t),Ze(e,t)}}function Ag(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ke(e,t))return;r.uniform3fv(this.addr,t),Ze(e,t)}}function Rg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;r.uniform4fv(this.addr,t),Ze(e,t)}}function Cg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(Ke(e,n))return;Ih.set(n),r.uniformMatrix2fv(this.addr,!1,Ih),Ze(e,n)}}function Pg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(Ke(e,n))return;Lh.set(n),r.uniformMatrix3fv(this.addr,!1,Lh),Ze(e,n)}}function Lg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(Ke(e,n))return;Ph.set(n),r.uniformMatrix4fv(this.addr,!1,Ph),Ze(e,n)}}function Ig(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Dg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;r.uniform2iv(this.addr,t),Ze(e,t)}}function Ng(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;r.uniform3iv(this.addr,t),Ze(e,t)}}function Ug(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;r.uniform4iv(this.addr,t),Ze(e,t)}}function Fg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Og(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;r.uniform2uiv(this.addr,t),Ze(e,t)}}function kg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;r.uniform3uiv(this.addr,t),Ze(e,t)}}function Bg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;r.uniform4uiv(this.addr,t),Ze(e,t)}}function zg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Ah.compareFunction=nf,s=Ah):s=mf,e.setTexture2D(t||s,i)}function Vg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||_f,i)}function Hg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||vf,i)}function Gg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||gf,i)}function Wg(r){switch(r){case 5126:return wg;case 35664:return Eg;case 35665:return Ag;case 35666:return Rg;case 35674:return Cg;case 35675:return Pg;case 35676:return Lg;case 5124:case 35670:return Ig;case 35667:case 35671:return Dg;case 35668:case 35672:return Ng;case 35669:case 35673:return Ug;case 5125:return Fg;case 36294:return Og;case 36295:return kg;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return zg;case 35679:case 36299:case 36307:return Vg;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return Gg}}function Xg(r,t){r.uniform1fv(this.addr,t)}function qg(r,t){const e=pr(t,this.size,2);r.uniform2fv(this.addr,e)}function Yg(r,t){const e=pr(t,this.size,3);r.uniform3fv(this.addr,e)}function jg(r,t){const e=pr(t,this.size,4);r.uniform4fv(this.addr,e)}function Kg(r,t){const e=pr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Zg(r,t){const e=pr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function $g(r,t){const e=pr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Jg(r,t){r.uniform1iv(this.addr,t)}function Qg(r,t){r.uniform2iv(this.addr,t)}function t_(r,t){r.uniform3iv(this.addr,t)}function e_(r,t){r.uniform4iv(this.addr,t)}function n_(r,t){r.uniform1uiv(this.addr,t)}function i_(r,t){r.uniform2uiv(this.addr,t)}function s_(r,t){r.uniform3uiv(this.addr,t)}function r_(r,t){r.uniform4uiv(this.addr,t)}function o_(r,t,e){const n=this.cache,i=t.length,s=_a(e,i);Ke(n,s)||(r.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||mf,s[o])}function a_(r,t,e){const n=this.cache,i=t.length,s=_a(e,i);Ke(n,s)||(r.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||_f,s[o])}function l_(r,t,e){const n=this.cache,i=t.length,s=_a(e,i);Ke(n,s)||(r.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||vf,s[o])}function c_(r,t,e){const n=this.cache,i=t.length,s=_a(e,i);Ke(n,s)||(r.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||gf,s[o])}function h_(r){switch(r){case 5126:return Xg;case 35664:return qg;case 35665:return Yg;case 35666:return jg;case 35674:return Kg;case 35675:return Zg;case 35676:return $g;case 5124:case 35670:return Jg;case 35667:case 35671:return Qg;case 35668:case 35672:return t_;case 35669:case 35673:return e_;case 5125:return n_;case 36294:return i_;case 36295:return s_;case 36296:return r_;case 35678:case 36198:case 36298:case 36306:case 35682:return o_;case 35679:case 36299:case 36307:return a_;case 35680:case 36300:case 36308:case 36293:return l_;case 36289:case 36303:case 36311:case 36292:return c_}}class u_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Wg(e.type)}}class f_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=h_(e.type)}}class d_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Za=/(\w+)(\])?(\[|\.)?/g;function Dh(r,t){r.seq.push(t),r.map[t.id]=t}function p_(r,t,e){const n=r.name,i=n.length;for(Za.lastIndex=0;;){const s=Za.exec(n),o=Za.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Dh(e,c===void 0?new u_(a,r,t):new f_(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new d_(a),Dh(e,u)),e=u}}}class ta{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);p_(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Nh(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const m_=37297;let g_=0;function __(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Uh=new le;function v_(r){xe._getMatrix(Uh,xe.workingColorSpace,r);const t=`mat3( ${Uh.elements.map(e=>e.toFixed(4))} )`;switch(xe.getTransfer(r)){case ma:return[t,"LinearTransferOETF"];case Re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Fh(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+__(r.getShaderSource(t),o)}else return i}function x_(r,t){const e=v_(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function y_(r,t){let e;switch(t){case ku:e="Linear";break;case Bu:e="Reinhard";break;case zu:e="Cineon";break;case uc:e="ACESFilmic";break;case Vu:e="AgX";break;case Hu:e="Neutral";break;case Ad:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ro=new L;function M_(){xe.getLuminanceCoefficients(Ro);const r=Ro.x.toFixed(4),t=Ro.y.toFixed(4),e=Ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function S_(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Br).join(`
`)}function b_(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function T_(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Br(r){return r!==""}function Oh(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kh(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const w_=/^[ \t]*#include +<([\w\d./]+)>/gm;function tc(r){return r.replace(w_,A_)}const E_=new Map;function A_(r,t){let e=ce[t];if(e===void 0){const n=E_.get(t);if(n!==void 0)e=ce[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return tc(e)}const R_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bh(r){return r.replace(R_,C_)}function C_(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function zh(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function P_(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Uu?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Fu?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Si&&(t="SHADOWMAP_TYPE_VSM"),t}function L_(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case er:case nr:t="ENVMAP_TYPE_CUBE";break;case pa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function I_(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case nr:t="ENVMAP_MODE_REFRACTION";break}return t}function D_(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ou:t="ENVMAP_BLENDING_MULTIPLY";break;case wd:t="ENVMAP_BLENDING_MIX";break;case Ed:t="ENVMAP_BLENDING_ADD";break}return t}function N_(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function U_(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=P_(e),c=L_(e),h=I_(e),u=D_(e),f=N_(e),d=S_(e),m=b_(s),_=i.createProgram();let g,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Br).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Br).join(`
`),p.length>0&&(p+=`
`)):(g=[zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),p=[zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xi?"#define TONE_MAPPING":"",e.toneMapping!==Xi?ce.tonemapping_pars_fragment:"",e.toneMapping!==Xi?y_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,x_("linearToOutputTexel",e.outputColorSpace),M_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Br).join(`
`)),o=tc(o),o=Oh(o,e),o=kh(o,e),a=tc(a),a=Oh(a,e),a=kh(a,e),o=Bh(o),a=Bh(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+g+o,v=x+p+a,C=Nh(i,i.VERTEX_SHADER,y),w=Nh(i,i.FRAGMENT_SHADER,v);i.attachShader(_,C),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(I){if(r.debug.checkShaderErrors){const z=i.getProgramInfoLog(_).trim(),V=i.getShaderInfoLog(C).trim(),F=i.getShaderInfoLog(w).trim();let H=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,C,w);else{const Z=Fh(i,C,"vertex"),Y=Fh(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+Z+`
`+Y)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(V===""||F==="")&&(W=!1);W&&(I.diagnostics={runnable:H,programLog:z,vertexShader:{log:V,prefix:g},fragmentShader:{log:F,prefix:p}})}i.deleteShader(C),i.deleteShader(w),P=new ta(i,_),b=T_(i,_)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,m_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=g_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=w,this}let F_=0;class O_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new k_(t),e.set(t,n)),n}}class k_{constructor(t){this.id=F_++,this.code=t,this.usedTimes=0}}function B_(r,t,e,n,i,s,o){const a=new yc,l=new O_,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,M,I,z,V){const F=z.fog,H=V.geometry,W=b.isMeshStandardMaterial?z.environment:null,Z=(b.isMeshStandardMaterial?e:t).get(b.envMap||W),Y=Z&&Z.mapping===pa?Z.image.height:null,ct=m[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const _t=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Pt=_t!==void 0?_t.length:0;let qt=0;H.morphAttributes.position!==void 0&&(qt=1),H.morphAttributes.normal!==void 0&&(qt=2),H.morphAttributes.color!==void 0&&(qt=3);let he,et,ut,Dt;if(ct){const fe=oi[ct];he=fe.vertexShader,et=fe.fragmentShader}else he=b.vertexShader,et=b.fragmentShader,l.update(b),ut=l.getVertexShaderID(b),Dt=l.getFragmentShaderID(b);const pt=r.getRenderTarget(),Ut=r.state.buffers.depth.getReversed(),Xt=V.isInstancedMesh===!0,Vt=V.isBatchedMesh===!0,$t=!!b.map,st=!!b.matcap,ht=!!Z,D=!!b.aoMap,Ot=!!b.lightMap,at=!!b.bumpMap,It=!!b.normalMap,gt=!!b.displacementMap,Gt=!!b.emissiveMap,wt=!!b.metalnessMap,A=!!b.roughnessMap,S=b.anisotropy>0,G=b.clearcoat>0,tt=b.dispersion>0,nt=b.iridescence>0,J=b.sheen>0,kt=b.transmission>0,vt=S&&!!b.anisotropyMap,Et=G&&!!b.clearcoatMap,ue=G&&!!b.clearcoatNormalMap,lt=G&&!!b.clearcoatRoughnessMap,Rt=nt&&!!b.iridescenceMap,Wt=nt&&!!b.iridescenceThicknessMap,Yt=J&&!!b.sheenColorMap,Nt=J&&!!b.sheenRoughnessMap,_e=!!b.specularMap,re=!!b.specularColorMap,Ee=!!b.specularIntensityMap,O=kt&&!!b.transmissionMap,yt=kt&&!!b.thicknessMap,K=!!b.gradientMap,rt=!!b.alphaMap,Mt=b.alphaTest>0,bt=!!b.alphaHash,oe=!!b.extensions;let Le=Xi;b.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(Le=r.toneMapping);const Be={shaderID:ct,shaderType:b.type,shaderName:b.name,vertexShader:he,fragmentShader:et,defines:b.defines,customVertexShaderID:ut,customFragmentShaderID:Dt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Vt,batchingColor:Vt&&V._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&V.instanceColor!==null,instancingMorph:Xt&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:pt===null?r.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Mn,alphaToCoverage:!!b.alphaToCoverage,map:$t,matcap:st,envMap:ht,envMapMode:ht&&Z.mapping,envMapCubeUVHeight:Y,aoMap:D,lightMap:Ot,bumpMap:at,normalMap:It,displacementMap:f&&gt,emissiveMap:Gt,normalMapObjectSpace:It&&b.normalMapType===Dd,normalMapTangentSpace:It&&b.normalMapType===ef,metalnessMap:wt,roughnessMap:A,anisotropy:S,anisotropyMap:vt,clearcoat:G,clearcoatMap:Et,clearcoatNormalMap:ue,clearcoatRoughnessMap:lt,dispersion:tt,iridescence:nt,iridescenceMap:Rt,iridescenceThicknessMap:Wt,sheen:J,sheenColorMap:Yt,sheenRoughnessMap:Nt,specularMap:_e,specularColorMap:re,specularIntensityMap:Ee,transmission:kt,transmissionMap:O,thicknessMap:yt,gradientMap:K,opaque:b.transparent===!1&&b.blending===Ks&&b.alphaToCoverage===!1,alphaMap:rt,alphaTest:Mt,alphaHash:bt,combine:b.combine,mapUv:$t&&_(b.map.channel),aoMapUv:D&&_(b.aoMap.channel),lightMapUv:Ot&&_(b.lightMap.channel),bumpMapUv:at&&_(b.bumpMap.channel),normalMapUv:It&&_(b.normalMap.channel),displacementMapUv:gt&&_(b.displacementMap.channel),emissiveMapUv:Gt&&_(b.emissiveMap.channel),metalnessMapUv:wt&&_(b.metalnessMap.channel),roughnessMapUv:A&&_(b.roughnessMap.channel),anisotropyMapUv:vt&&_(b.anisotropyMap.channel),clearcoatMapUv:Et&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:ue&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&_(b.sheenRoughnessMap.channel),specularMapUv:_e&&_(b.specularMap.channel),specularColorMapUv:re&&_(b.specularColorMap.channel),specularIntensityMapUv:Ee&&_(b.specularIntensityMap.channel),transmissionMapUv:O&&_(b.transmissionMap.channel),thicknessMapUv:yt&&_(b.thicknessMap.channel),alphaMapUv:rt&&_(b.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(It||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!H.attributes.uv&&($t||rt),fog:!!F,useFog:b.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ut,skinning:V.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:qt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:Le,decodeVideoTexture:$t&&b.map.isVideoTexture===!0&&xe.getTransfer(b.map.colorSpace)===Re,decodeVideoTextureEmissive:Gt&&b.emissiveMap.isVideoTexture===!0&&xe.getTransfer(b.emissiveMap.colorSpace)===Re,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===En,flipSided:b.side===An,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:oe&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&b.extensions.multiDraw===!0||Vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function p(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)M.push(I),M.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(x(M,b),y(M,b),M.push(r.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function x(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){const M=m[b.type];let I;if(M){const z=oi[M];I=Ki.clone(z.uniforms)}else I=b.uniforms;return I}function C(b,M){let I;for(let z=0,V=h.length;z<V;z++){const F=h[z];if(F.cacheKey===M){I=F,++I.usedTimes;break}}return I===void 0&&(I=new U_(r,M,b,s),h.push(I)),I}function w(b){if(--b.usedTimes===0){const M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function E(b){l.remove(b)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:C,releaseProgram:w,releaseShaderCache:E,programs:h,dispose:P}}function z_(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function V_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Vh(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Hh(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,m,_,g){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},r[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),t++,p}function a(u,f,d,m,_,g){const p=o(u,f,d,m,_,g);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(u,f,d,m,_,g){const p=o(u,f,d,m,_,g);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||V_),n.length>1&&n.sort(f||Vh),i.length>1&&i.sort(f||Vh)}function h(){for(let u=t,f=r.length;u<f;u++){const d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function H_(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Hh,r.set(n,[o])):i>=s.length?(o=new Hh,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function G_(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Ht};break;case"SpotLight":e={position:new L,direction:new L,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new L,halfWidth:new L,halfHeight:new L};break}return r[t.id]=e,e}}}function W_(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let X_=0;function q_(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Y_(r){const t=new G_,e=W_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,s=new ie,o=new ie;function a(c){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,x=0,y=0,v=0,C=0,w=0,E=0;c.sort(q_);for(let b=0,M=c.length;b<M;b++){const I=c[b],z=I.color,V=I.intensity,F=I.distance,H=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=z.r*V,u+=z.g*V,f+=z.b*V;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],V);E++}else if(I.isDirectionalLight){const W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Z=I.shadow,Y=e.get(I);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,n.directionalShadow[d]=Y,n.directionalShadowMap[d]=H,n.directionalShadowMatrix[d]=I.shadow.matrix,x++}n.directional[d]=W,d++}else if(I.isSpotLight){const W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(z).multiplyScalar(V),W.distance=F,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[_]=W;const Z=I.shadow;if(I.map&&(n.spotLightMap[C]=I.map,C++,Z.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[_]=Z.matrix,I.castShadow){const Y=e.get(I);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,n.spotShadow[_]=Y,n.spotShadowMap[_]=H,v++}_++}else if(I.isRectAreaLight){const W=t.get(I);W.color.copy(z).multiplyScalar(V),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=W,g++}else if(I.isPointLight){const W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){const Z=I.shadow,Y=e.get(I);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,Y.shadowCameraNear=Z.camera.near,Y.shadowCameraFar=Z.camera.far,n.pointShadow[m]=Y,n.pointShadowMap[m]=H,n.pointShadowMatrix[m]=I.shadow.matrix,y++}n.point[m]=W,m++}else if(I.isHemisphereLight){const W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(V),W.groundColor.copy(I.groundColor).multiplyScalar(V),n.hemi[p]=W,p++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==d||P.pointLength!==m||P.spotLength!==_||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==x||P.numPointShadows!==y||P.numSpotShadows!==v||P.numSpotMaps!==C||P.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,P.directionalLength=d,P.pointLength=m,P.spotLength=_,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=x,P.numPointShadows=y,P.numSpotShadows=v,P.numSpotMaps=C,P.numLightProbes=E,n.version=X_++)}function l(c,h){let u=0,f=0,d=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const y=c[p];if(y.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),u++}else if(y.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),d++}else if(y.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function Gh(r){const t=new Y_(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function j_(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new Gh(r),t.set(i,[a])):s>=o.length?(a=new Gh(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class K_ extends ei{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Z_ extends ei{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const $_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Q_(r,t,e){let n=new Mc;const i=new it,s=new it,o=new ye,a=new K_({depthPacking:Id}),l=new Z_,c={},h=e.maxTextureSize,u={[Ci]:An,[An]:Ci,[En]:En},f=new Ye({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:$_,fragmentShader:J_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new ke;m.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ot(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uu;let p=this.type;this.render=function(w,E,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const b=r.getRenderTarget(),M=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),z=r.state;z.setBlending(ci),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const V=p!==Si&&this.type===Si,F=p===Si&&this.type!==Si;for(let H=0,W=w.length;H<W;H++){const Z=w[H],Y=Z.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const ct=Y.getFrameExtents();if(i.multiply(ct),s.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ct.x),i.x=s.x*ct.x,Y.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ct.y),i.y=s.y*ct.y,Y.mapSize.y=s.y)),Y.map===null||V===!0||F===!0){const Pt=this.type!==Si?{minFilter:rn,magFilter:rn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Rn(i.x,i.y,Pt),Y.map.texture.name=Z.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();const _t=Y.getViewportCount();for(let Pt=0;Pt<_t;Pt++){const qt=Y.getViewport(Pt);o.set(s.x*qt.x,s.y*qt.y,s.x*qt.z,s.y*qt.w),z.viewport(o),Y.updateMatrices(Z,Pt),n=Y.getFrustum(),v(E,P,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===Si&&x(Y,P),Y.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(b,M,I)};function x(w,E){const P=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Rn(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(E,null,P,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(E,null,P,d,_,null)}function y(w,E,P,b){let M=null;const I=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)M=I;else if(M=P.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const z=M.uuid,V=E.uuid;let F=c[z];F===void 0&&(F={},c[z]=F);let H=F[V];H===void 0&&(H=M.clone(),F[V]=H,E.addEventListener("dispose",C)),M=H}if(M.visible=E.visible,M.wireframe=E.wireframe,b===Si?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:u[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=r.properties.get(M);z.light=P}return M}function v(w,E,P,b,M){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Si)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const V=t.update(w),F=w.material;if(Array.isArray(F)){const H=V.groups;for(let W=0,Z=H.length;W<Z;W++){const Y=H[W],ct=F[Y.materialIndex];if(ct&&ct.visible){const _t=y(w,ct,b,M);w.onBeforeShadow(r,w,E,P,V,_t,Y),r.renderBufferDirect(P,null,V,_t,w,Y),w.onAfterShadow(r,w,E,P,V,_t,Y)}}}else if(F.visible){const H=y(w,F,b,M);w.onBeforeShadow(r,w,E,P,V,H,null),r.renderBufferDirect(P,null,V,H,w,null),w.onAfterShadow(r,w,E,P,V,H,null)}}const z=w.children;for(let V=0,F=z.length;V<F;V++)v(z[V],E,P,b,M)}function C(w){w.target.removeEventListener("dispose",C);for(const P in c){const b=c[P],M=w.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const tv={[_l]:vl,[xl]:Sl,[yl]:bl,[tr]:Ml,[vl]:_l,[Sl]:xl,[bl]:yl,[Ml]:tr};function ev(r,t){function e(){let O=!1;const yt=new ye;let K=null;const rt=new ye(0,0,0,0);return{setMask:function(Mt){K!==Mt&&!O&&(r.colorMask(Mt,Mt,Mt,Mt),K=Mt)},setLocked:function(Mt){O=Mt},setClear:function(Mt,bt,oe,Le,Be){Be===!0&&(Mt*=Le,bt*=Le,oe*=Le),yt.set(Mt,bt,oe,Le),rt.equals(yt)===!1&&(r.clearColor(Mt,bt,oe,Le),rt.copy(yt))},reset:function(){O=!1,K=null,rt.set(-1,0,0,0)}}}function n(){let O=!1,yt=!1,K=null,rt=null,Mt=null;return{setReversed:function(bt){if(yt!==bt){const oe=t.get("EXT_clip_control");yt?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT);const Le=Mt;Mt=null,this.setClear(Le)}yt=bt},getReversed:function(){return yt},setTest:function(bt){bt?pt(r.DEPTH_TEST):Ut(r.DEPTH_TEST)},setMask:function(bt){K!==bt&&!O&&(r.depthMask(bt),K=bt)},setFunc:function(bt){if(yt&&(bt=tv[bt]),rt!==bt){switch(bt){case _l:r.depthFunc(r.NEVER);break;case vl:r.depthFunc(r.ALWAYS);break;case xl:r.depthFunc(r.LESS);break;case tr:r.depthFunc(r.LEQUAL);break;case yl:r.depthFunc(r.EQUAL);break;case Ml:r.depthFunc(r.GEQUAL);break;case Sl:r.depthFunc(r.GREATER);break;case bl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}rt=bt}},setLocked:function(bt){O=bt},setClear:function(bt){Mt!==bt&&(yt&&(bt=1-bt),r.clearDepth(bt),Mt=bt)},reset:function(){O=!1,K=null,rt=null,Mt=null,yt=!1}}}function i(){let O=!1,yt=null,K=null,rt=null,Mt=null,bt=null,oe=null,Le=null,Be=null;return{setTest:function(fe){O||(fe?pt(r.STENCIL_TEST):Ut(r.STENCIL_TEST))},setMask:function(fe){yt!==fe&&!O&&(r.stencilMask(fe),yt=fe)},setFunc:function(fe,Sn,qn){(K!==fe||rt!==Sn||Mt!==qn)&&(r.stencilFunc(fe,Sn,qn),K=fe,rt=Sn,Mt=qn)},setOp:function(fe,Sn,qn){(bt!==fe||oe!==Sn||Le!==qn)&&(r.stencilOp(fe,Sn,qn),bt=fe,oe=Sn,Le=qn)},setLocked:function(fe){O=fe},setClear:function(fe){Be!==fe&&(r.clearStencil(fe),Be=fe)},reset:function(){O=!1,yt=null,K=null,rt=null,Mt=null,bt=null,oe=null,Le=null,Be=null}}}const s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,x=null,y=null,v=null,C=null,w=null,E=new Ht(0,0,0),P=0,b=!1,M=null,I=null,z=null,V=null,F=null;const H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Z=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=Z>=1):Y.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=Z>=2);let ct=null,_t={};const Pt=r.getParameter(r.SCISSOR_BOX),qt=r.getParameter(r.VIEWPORT),he=new ye().fromArray(Pt),et=new ye().fromArray(qt);function ut(O,yt,K,rt){const Mt=new Uint8Array(4),bt=r.createTexture();r.bindTexture(O,bt),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let oe=0;oe<K;oe++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(yt,0,r.RGBA,1,1,rt,0,r.RGBA,r.UNSIGNED_BYTE,Mt):r.texImage2D(yt+oe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Mt);return bt}const Dt={};Dt[r.TEXTURE_2D]=ut(r.TEXTURE_2D,r.TEXTURE_2D,1),Dt[r.TEXTURE_CUBE_MAP]=ut(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Dt[r.TEXTURE_2D_ARRAY]=ut(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Dt[r.TEXTURE_3D]=ut(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pt(r.DEPTH_TEST),o.setFunc(tr),at(!1),It(Xc),pt(r.CULL_FACE),D(ci);function pt(O){h[O]!==!0&&(r.enable(O),h[O]=!0)}function Ut(O){h[O]!==!1&&(r.disable(O),h[O]=!1)}function Xt(O,yt){return u[O]!==yt?(r.bindFramebuffer(O,yt),u[O]=yt,O===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=yt),O===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=yt),!0):!1}function Vt(O,yt){let K=d,rt=!1;if(O){K=f.get(yt),K===void 0&&(K=[],f.set(yt,K));const Mt=O.textures;if(K.length!==Mt.length||K[0]!==r.COLOR_ATTACHMENT0){for(let bt=0,oe=Mt.length;bt<oe;bt++)K[bt]=r.COLOR_ATTACHMENT0+bt;K.length=Mt.length,rt=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,rt=!0);rt&&r.drawBuffers(K)}function $t(O){return m!==O?(r.useProgram(O),m=O,!0):!1}const st={[ms]:r.FUNC_ADD,[ld]:r.FUNC_SUBTRACT,[cd]:r.FUNC_REVERSE_SUBTRACT};st[hd]=r.MIN,st[ud]=r.MAX;const ht={[fd]:r.ZERO,[dd]:r.ONE,[pd]:r.SRC_COLOR,[ml]:r.SRC_ALPHA,[yd]:r.SRC_ALPHA_SATURATE,[vd]:r.DST_COLOR,[gd]:r.DST_ALPHA,[md]:r.ONE_MINUS_SRC_COLOR,[gl]:r.ONE_MINUS_SRC_ALPHA,[xd]:r.ONE_MINUS_DST_COLOR,[_d]:r.ONE_MINUS_DST_ALPHA,[Md]:r.CONSTANT_COLOR,[Sd]:r.ONE_MINUS_CONSTANT_COLOR,[bd]:r.CONSTANT_ALPHA,[Td]:r.ONE_MINUS_CONSTANT_ALPHA};function D(O,yt,K,rt,Mt,bt,oe,Le,Be,fe){if(O===ci){_===!0&&(Ut(r.BLEND),_=!1);return}if(_===!1&&(pt(r.BLEND),_=!0),O!==ad){if(O!==g||fe!==b){if((p!==ms||v!==ms)&&(r.blendEquation(r.FUNC_ADD),p=ms,v=ms),fe)switch(O){case Ks:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case xs:r.blendFunc(r.ONE,r.ONE);break;case qc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Yc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ks:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case xs:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case qc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Yc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}x=null,y=null,C=null,w=null,E.set(0,0,0),P=0,g=O,b=fe}return}Mt=Mt||yt,bt=bt||K,oe=oe||rt,(yt!==p||Mt!==v)&&(r.blendEquationSeparate(st[yt],st[Mt]),p=yt,v=Mt),(K!==x||rt!==y||bt!==C||oe!==w)&&(r.blendFuncSeparate(ht[K],ht[rt],ht[bt],ht[oe]),x=K,y=rt,C=bt,w=oe),(Le.equals(E)===!1||Be!==P)&&(r.blendColor(Le.r,Le.g,Le.b,Be),E.copy(Le),P=Be),g=O,b=!1}function Ot(O,yt){O.side===En?Ut(r.CULL_FACE):pt(r.CULL_FACE);let K=O.side===An;yt&&(K=!K),at(K),O.blending===Ks&&O.transparent===!1?D(ci):D(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const rt=O.stencilWrite;a.setTest(rt),rt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Gt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?pt(r.SAMPLE_ALPHA_TO_COVERAGE):Ut(r.SAMPLE_ALPHA_TO_COVERAGE)}function at(O){M!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),M=O)}function It(O){O!==rd?(pt(r.CULL_FACE),O!==I&&(O===Xc?r.cullFace(r.BACK):O===od?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ut(r.CULL_FACE),I=O}function gt(O){O!==z&&(W&&r.lineWidth(O),z=O)}function Gt(O,yt,K){O?(pt(r.POLYGON_OFFSET_FILL),(V!==yt||F!==K)&&(r.polygonOffset(yt,K),V=yt,F=K)):Ut(r.POLYGON_OFFSET_FILL)}function wt(O){O?pt(r.SCISSOR_TEST):Ut(r.SCISSOR_TEST)}function A(O){O===void 0&&(O=r.TEXTURE0+H-1),ct!==O&&(r.activeTexture(O),ct=O)}function S(O,yt,K){K===void 0&&(ct===null?K=r.TEXTURE0+H-1:K=ct);let rt=_t[K];rt===void 0&&(rt={type:void 0,texture:void 0},_t[K]=rt),(rt.type!==O||rt.texture!==yt)&&(ct!==K&&(r.activeTexture(K),ct=K),r.bindTexture(O,yt||Dt[O]),rt.type=O,rt.texture=yt)}function G(){const O=_t[ct];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function tt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function nt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{r.texSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function kt(){try{r.texSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function vt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Et(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ue(){try{r.texStorage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function lt(){try{r.texStorage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Rt(){try{r.texImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Wt(){try{r.texImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Yt(O){he.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),he.copy(O))}function Nt(O){et.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),et.copy(O))}function _e(O,yt){let K=c.get(yt);K===void 0&&(K=new WeakMap,c.set(yt,K));let rt=K.get(O);rt===void 0&&(rt=r.getUniformBlockIndex(yt,O.name),K.set(O,rt))}function re(O,yt){const rt=c.get(yt).get(O);l.get(yt)!==rt&&(r.uniformBlockBinding(yt,rt,O.__bindingPointIndex),l.set(yt,rt))}function Ee(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ct=null,_t={},u={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,x=null,y=null,v=null,C=null,w=null,E=new Ht(0,0,0),P=0,b=!1,M=null,I=null,z=null,V=null,F=null,he.set(0,0,r.canvas.width,r.canvas.height),et.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:pt,disable:Ut,bindFramebuffer:Xt,drawBuffers:Vt,useProgram:$t,setBlending:D,setMaterial:Ot,setFlipSided:at,setCullFace:It,setLineWidth:gt,setPolygonOffset:Gt,setScissorTest:wt,activeTexture:A,bindTexture:S,unbindTexture:G,compressedTexImage2D:tt,compressedTexImage3D:nt,texImage2D:Rt,texImage3D:Wt,updateUBOMapping:_e,uniformBlockBinding:re,texStorage2D:ue,texStorage3D:lt,texSubImage2D:J,texSubImage3D:kt,compressedTexSubImage2D:vt,compressedTexSubImage3D:Et,scissor:Yt,viewport:Nt,reset:Ee}}function Wh(r,t,e,n){const i=nv(n);switch(e){case ju:return r*t;case Zu:return r*t;case $u:return r*t*2;case mc:return r*t/i.components*i.byteLength;case gc:return r*t/i.components*i.byteLength;case Ju:return r*t*2/i.components*i.byteLength;case _c:return r*t*2/i.components*i.byteLength;case Ku:return r*t*3/i.components*i.byteLength;case Vn:return r*t*4/i.components*i.byteLength;case vc:return r*t*4/i.components*i.byteLength;case Ko:case Zo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case $o:case Jo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case El:case Rl:return Math.max(r,16)*Math.max(t,8)/4;case wl:case Al:return Math.max(r,8)*Math.max(t,8)/2;case Cl:case Pl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ll:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Il:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case kl:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case zl:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Gl:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Wl:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Xl:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Qo:case ql:case Yl:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Qu:case jl:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Kl:case Zl:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function nv(r){switch(r){case Li:case Xu:return{byteLength:1,components:1};case Yr:case qu:case Hn:return{byteLength:2,components:1};case dc:case pc:return{byteLength:2,components:4};case ys:case fc:case ti:return{byteLength:4,components:1};case Yu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function iv(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,S){return d?new OffscreenCanvas(A,S):Zr("canvas")}function _(A,S,G){let tt=1;const nt=wt(A);if((nt.width>G||nt.height>G)&&(tt=G/Math.max(nt.width,nt.height)),tt<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const J=Math.floor(tt*nt.width),kt=Math.floor(tt*nt.height);u===void 0&&(u=m(J,kt));const vt=S?m(J,kt):u;return vt.width=J,vt.height=kt,vt.getContext("2d").drawImage(A,0,0,J,kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+J+"x"+kt+")."),vt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){r.generateMipmap(A)}function x(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(A,S,G,tt,nt=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=S;if(S===r.RED&&(G===r.FLOAT&&(J=r.R32F),G===r.HALF_FLOAT&&(J=r.R16F),G===r.UNSIGNED_BYTE&&(J=r.R8)),S===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(J=r.R8UI),G===r.UNSIGNED_SHORT&&(J=r.R16UI),G===r.UNSIGNED_INT&&(J=r.R32UI),G===r.BYTE&&(J=r.R8I),G===r.SHORT&&(J=r.R16I),G===r.INT&&(J=r.R32I)),S===r.RG&&(G===r.FLOAT&&(J=r.RG32F),G===r.HALF_FLOAT&&(J=r.RG16F),G===r.UNSIGNED_BYTE&&(J=r.RG8)),S===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(J=r.RG8UI),G===r.UNSIGNED_SHORT&&(J=r.RG16UI),G===r.UNSIGNED_INT&&(J=r.RG32UI),G===r.BYTE&&(J=r.RG8I),G===r.SHORT&&(J=r.RG16I),G===r.INT&&(J=r.RG32I)),S===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(J=r.RGB8UI),G===r.UNSIGNED_SHORT&&(J=r.RGB16UI),G===r.UNSIGNED_INT&&(J=r.RGB32UI),G===r.BYTE&&(J=r.RGB8I),G===r.SHORT&&(J=r.RGB16I),G===r.INT&&(J=r.RGB32I)),S===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(J=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(J=r.RGBA16UI),G===r.UNSIGNED_INT&&(J=r.RGBA32UI),G===r.BYTE&&(J=r.RGBA8I),G===r.SHORT&&(J=r.RGBA16I),G===r.INT&&(J=r.RGBA32I)),S===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&(J=r.RGB9_E5),S===r.RGBA){const kt=nt?ma:xe.getTransfer(tt);G===r.FLOAT&&(J=r.RGBA32F),G===r.HALF_FLOAT&&(J=r.RGBA16F),G===r.UNSIGNED_BYTE&&(J=kt===Re?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(J=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(J=r.RGB5_A1)}return(J===r.R16F||J===r.R32F||J===r.RG16F||J===r.RG32F||J===r.RGBA16F||J===r.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function v(A,S){let G;return A?S===null||S===ys||S===ir?G=r.DEPTH24_STENCIL8:S===ti?G=r.DEPTH32F_STENCIL8:S===Yr&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ys||S===ir?G=r.DEPTH_COMPONENT24:S===ti?G=r.DEPTH_COMPONENT32F:S===Yr&&(G=r.DEPTH_COMPONENT16),G}function C(A,S){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==rn&&A.minFilter!==Dn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function w(A){const S=A.target;S.removeEventListener("dispose",w),P(S),S.isVideoTexture&&h.delete(S)}function E(A){const S=A.target;S.removeEventListener("dispose",E),M(S)}function P(A){const S=n.get(A);if(S.__webglInit===void 0)return;const G=A.source,tt=f.get(G);if(tt){const nt=tt[S.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&b(A),Object.keys(tt).length===0&&f.delete(G)}n.remove(A)}function b(A){const S=n.get(A);r.deleteTexture(S.__webglTexture);const G=A.source,tt=f.get(G);delete tt[S.__cacheKey],o.memory.textures--}function M(A){const S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(S.__webglFramebuffer[tt]))for(let nt=0;nt<S.__webglFramebuffer[tt].length;nt++)r.deleteFramebuffer(S.__webglFramebuffer[tt][nt]);else r.deleteFramebuffer(S.__webglFramebuffer[tt]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[tt])}else{if(Array.isArray(S.__webglFramebuffer))for(let tt=0;tt<S.__webglFramebuffer.length;tt++)r.deleteFramebuffer(S.__webglFramebuffer[tt]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let tt=0;tt<S.__webglColorRenderbuffer.length;tt++)S.__webglColorRenderbuffer[tt]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[tt]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=A.textures;for(let tt=0,nt=G.length;tt<nt;tt++){const J=n.get(G[tt]);J.__webglTexture&&(r.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(G[tt])}n.remove(A)}let I=0;function z(){I=0}function V(){const A=I;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),I+=1,A}function F(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function H(A,S){const G=n.get(A);if(A.isVideoTexture&&gt(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const tt=A.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(G,A,S);return}}e.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+S)}function W(A,S){const G=n.get(A);if(A.version>0&&G.__version!==A.version){et(G,A,S);return}e.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+S)}function Z(A,S){const G=n.get(A);if(A.version>0&&G.__version!==A.version){et(G,A,S);return}e.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+S)}function Y(A,S){const G=n.get(A);if(A.version>0&&G.__version!==A.version){ut(G,A,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+S)}const ct={[Pi]:r.REPEAT,[Hi]:r.CLAMP_TO_EDGE,[aa]:r.MIRRORED_REPEAT},_t={[rn]:r.NEAREST,[Wu]:r.NEAREST_MIPMAP_NEAREST,[Or]:r.NEAREST_MIPMAP_LINEAR,[Dn]:r.LINEAR,[jo]:r.LINEAR_MIPMAP_NEAREST,[Ei]:r.LINEAR_MIPMAP_LINEAR},Pt={[Nd]:r.NEVER,[zd]:r.ALWAYS,[Ud]:r.LESS,[nf]:r.LEQUAL,[Fd]:r.EQUAL,[Bd]:r.GEQUAL,[Od]:r.GREATER,[kd]:r.NOTEQUAL};function qt(A,S){if(S.type===ti&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Dn||S.magFilter===jo||S.magFilter===Or||S.magFilter===Ei||S.minFilter===Dn||S.minFilter===jo||S.minFilter===Or||S.minFilter===Ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,ct[S.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,ct[S.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,ct[S.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,_t[S.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,_t[S.minFilter]),S.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,Pt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===rn||S.minFilter!==Or&&S.minFilter!==Ei||S.type===ti&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");r.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function he(A,S){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",w));const tt=S.source;let nt=f.get(tt);nt===void 0&&(nt={},f.set(tt,nt));const J=F(S);if(J!==A.__cacheKey){nt[J]===void 0&&(nt[J]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),nt[J].usedTimes++;const kt=nt[A.__cacheKey];kt!==void 0&&(nt[A.__cacheKey].usedTimes--,kt.usedTimes===0&&b(S)),A.__cacheKey=J,A.__webglTexture=nt[J].texture}return G}function et(A,S,G){let tt=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(tt=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(tt=r.TEXTURE_3D);const nt=he(A,S),J=S.source;e.bindTexture(tt,A.__webglTexture,r.TEXTURE0+G);const kt=n.get(J);if(J.version!==kt.__version||nt===!0){e.activeTexture(r.TEXTURE0+G);const vt=xe.getPrimaries(xe.workingColorSpace),Et=S.colorSpace===Ti?null:xe.getPrimaries(S.colorSpace),ue=S.colorSpace===Ti||vt===Et?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let lt=_(S.image,!1,i.maxTextureSize);lt=Gt(S,lt);const Rt=s.convert(S.format,S.colorSpace),Wt=s.convert(S.type);let Yt=y(S.internalFormat,Rt,Wt,S.colorSpace,S.isVideoTexture);qt(tt,S);let Nt;const _e=S.mipmaps,re=S.isVideoTexture!==!0,Ee=kt.__version===void 0||nt===!0,O=J.dataReady,yt=C(S,lt);if(S.isDepthTexture)Yt=v(S.format===sr,S.type),Ee&&(re?e.texStorage2D(r.TEXTURE_2D,1,Yt,lt.width,lt.height):e.texImage2D(r.TEXTURE_2D,0,Yt,lt.width,lt.height,0,Rt,Wt,null));else if(S.isDataTexture)if(_e.length>0){re&&Ee&&e.texStorage2D(r.TEXTURE_2D,yt,Yt,_e[0].width,_e[0].height);for(let K=0,rt=_e.length;K<rt;K++)Nt=_e[K],re?O&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,Nt.width,Nt.height,Rt,Wt,Nt.data):e.texImage2D(r.TEXTURE_2D,K,Yt,Nt.width,Nt.height,0,Rt,Wt,Nt.data);S.generateMipmaps=!1}else re?(Ee&&e.texStorage2D(r.TEXTURE_2D,yt,Yt,lt.width,lt.height),O&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,lt.width,lt.height,Rt,Wt,lt.data)):e.texImage2D(r.TEXTURE_2D,0,Yt,lt.width,lt.height,0,Rt,Wt,lt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){re&&Ee&&e.texStorage3D(r.TEXTURE_2D_ARRAY,yt,Yt,_e[0].width,_e[0].height,lt.depth);for(let K=0,rt=_e.length;K<rt;K++)if(Nt=_e[K],S.format!==Vn)if(Rt!==null)if(re){if(O)if(S.layerUpdates.size>0){const Mt=Wh(Nt.width,Nt.height,S.format,S.type);for(const bt of S.layerUpdates){const oe=Nt.data.subarray(bt*Mt/Nt.data.BYTES_PER_ELEMENT,(bt+1)*Mt/Nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,bt,Nt.width,Nt.height,1,Rt,oe)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,Nt.width,Nt.height,lt.depth,Rt,Nt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,K,Yt,Nt.width,Nt.height,lt.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?O&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,Nt.width,Nt.height,lt.depth,Rt,Wt,Nt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,K,Yt,Nt.width,Nt.height,lt.depth,0,Rt,Wt,Nt.data)}else{re&&Ee&&e.texStorage2D(r.TEXTURE_2D,yt,Yt,_e[0].width,_e[0].height);for(let K=0,rt=_e.length;K<rt;K++)Nt=_e[K],S.format!==Vn?Rt!==null?re?O&&e.compressedTexSubImage2D(r.TEXTURE_2D,K,0,0,Nt.width,Nt.height,Rt,Nt.data):e.compressedTexImage2D(r.TEXTURE_2D,K,Yt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?O&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,Nt.width,Nt.height,Rt,Wt,Nt.data):e.texImage2D(r.TEXTURE_2D,K,Yt,Nt.width,Nt.height,0,Rt,Wt,Nt.data)}else if(S.isDataArrayTexture)if(re){if(Ee&&e.texStorage3D(r.TEXTURE_2D_ARRAY,yt,Yt,lt.width,lt.height,lt.depth),O)if(S.layerUpdates.size>0){const K=Wh(lt.width,lt.height,S.format,S.type);for(const rt of S.layerUpdates){const Mt=lt.data.subarray(rt*K/lt.data.BYTES_PER_ELEMENT,(rt+1)*K/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,rt,lt.width,lt.height,1,Rt,Wt,Mt)}S.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Rt,Wt,lt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Yt,lt.width,lt.height,lt.depth,0,Rt,Wt,lt.data);else if(S.isData3DTexture)re?(Ee&&e.texStorage3D(r.TEXTURE_3D,yt,Yt,lt.width,lt.height,lt.depth),O&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Rt,Wt,lt.data)):e.texImage3D(r.TEXTURE_3D,0,Yt,lt.width,lt.height,lt.depth,0,Rt,Wt,lt.data);else if(S.isFramebufferTexture){if(Ee)if(re)e.texStorage2D(r.TEXTURE_2D,yt,Yt,lt.width,lt.height);else{let K=lt.width,rt=lt.height;for(let Mt=0;Mt<yt;Mt++)e.texImage2D(r.TEXTURE_2D,Mt,Yt,K,rt,0,Rt,Wt,null),K>>=1,rt>>=1}}else if(_e.length>0){if(re&&Ee){const K=wt(_e[0]);e.texStorage2D(r.TEXTURE_2D,yt,Yt,K.width,K.height)}for(let K=0,rt=_e.length;K<rt;K++)Nt=_e[K],re?O&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,Rt,Wt,Nt):e.texImage2D(r.TEXTURE_2D,K,Yt,Rt,Wt,Nt);S.generateMipmaps=!1}else if(re){if(Ee){const K=wt(lt);e.texStorage2D(r.TEXTURE_2D,yt,Yt,K.width,K.height)}O&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Rt,Wt,lt)}else e.texImage2D(r.TEXTURE_2D,0,Yt,Rt,Wt,lt);g(S)&&p(tt),kt.__version=J.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ut(A,S,G){if(S.image.length!==6)return;const tt=he(A,S),nt=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+G);const J=n.get(nt);if(nt.version!==J.__version||tt===!0){e.activeTexture(r.TEXTURE0+G);const kt=xe.getPrimaries(xe.workingColorSpace),vt=S.colorSpace===Ti?null:xe.getPrimaries(S.colorSpace),Et=S.colorSpace===Ti||kt===vt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const ue=S.isCompressedTexture||S.image[0].isCompressedTexture,lt=S.image[0]&&S.image[0].isDataTexture,Rt=[];for(let rt=0;rt<6;rt++)!ue&&!lt?Rt[rt]=_(S.image[rt],!0,i.maxCubemapSize):Rt[rt]=lt?S.image[rt].image:S.image[rt],Rt[rt]=Gt(S,Rt[rt]);const Wt=Rt[0],Yt=s.convert(S.format,S.colorSpace),Nt=s.convert(S.type),_e=y(S.internalFormat,Yt,Nt,S.colorSpace),re=S.isVideoTexture!==!0,Ee=J.__version===void 0||tt===!0,O=nt.dataReady;let yt=C(S,Wt);qt(r.TEXTURE_CUBE_MAP,S);let K;if(ue){re&&Ee&&e.texStorage2D(r.TEXTURE_CUBE_MAP,yt,_e,Wt.width,Wt.height);for(let rt=0;rt<6;rt++){K=Rt[rt].mipmaps;for(let Mt=0;Mt<K.length;Mt++){const bt=K[Mt];S.format!==Vn?Yt!==null?re?O&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Mt,0,0,bt.width,bt.height,Yt,bt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Mt,_e,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):re?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Mt,0,0,bt.width,bt.height,Yt,Nt,bt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Mt,_e,bt.width,bt.height,0,Yt,Nt,bt.data)}}}else{if(K=S.mipmaps,re&&Ee){K.length>0&&yt++;const rt=wt(Rt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,yt,_e,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(lt){re?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Rt[rt].width,Rt[rt].height,Yt,Nt,Rt[rt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,_e,Rt[rt].width,Rt[rt].height,0,Yt,Nt,Rt[rt].data);for(let Mt=0;Mt<K.length;Mt++){const oe=K[Mt].image[rt].image;re?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Mt+1,0,0,oe.width,oe.height,Yt,Nt,oe.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Mt+1,_e,oe.width,oe.height,0,Yt,Nt,oe.data)}}else{re?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Yt,Nt,Rt[rt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,_e,Yt,Nt,Rt[rt]);for(let Mt=0;Mt<K.length;Mt++){const bt=K[Mt];re?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Mt+1,0,0,Yt,Nt,bt.image[rt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Mt+1,_e,Yt,Nt,bt.image[rt])}}}g(S)&&p(r.TEXTURE_CUBE_MAP),J.__version=nt.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Dt(A,S,G,tt,nt,J){const kt=s.convert(G.format,G.colorSpace),vt=s.convert(G.type),Et=y(G.internalFormat,kt,vt,G.colorSpace),ue=n.get(S),lt=n.get(G);if(lt.__renderTarget=S,!ue.__hasExternalTextures){const Rt=Math.max(1,S.width>>J),Wt=Math.max(1,S.height>>J);nt===r.TEXTURE_3D||nt===r.TEXTURE_2D_ARRAY?e.texImage3D(nt,J,Et,Rt,Wt,S.depth,0,kt,vt,null):e.texImage2D(nt,J,Et,Rt,Wt,0,kt,vt,null)}e.bindFramebuffer(r.FRAMEBUFFER,A),It(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,tt,nt,lt.__webglTexture,0,at(S)):(nt===r.TEXTURE_2D||nt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,tt,nt,lt.__webglTexture,J),e.bindFramebuffer(r.FRAMEBUFFER,null)}function pt(A,S,G){if(r.bindRenderbuffer(r.RENDERBUFFER,A),S.depthBuffer){const tt=S.depthTexture,nt=tt&&tt.isDepthTexture?tt.type:null,J=v(S.stencilBuffer,nt),kt=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,vt=at(S);It(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,vt,J,S.width,S.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,vt,J,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,J,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,kt,r.RENDERBUFFER,A)}else{const tt=S.textures;for(let nt=0;nt<tt.length;nt++){const J=tt[nt],kt=s.convert(J.format,J.colorSpace),vt=s.convert(J.type),Et=y(J.internalFormat,kt,vt,J.colorSpace),ue=at(S);G&&It(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ue,Et,S.width,S.height):It(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ue,Et,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Et,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ut(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=n.get(S.depthTexture);tt.__renderTarget=S,(!tt.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),H(S.depthTexture,0);const nt=tt.__webglTexture,J=at(S);if(S.depthTexture.format===Zs)It(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,nt,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,nt,0);else if(S.depthTexture.format===sr)It(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,nt,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Xt(A){const S=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const tt=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),tt){const nt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,tt.removeEventListener("dispose",nt)};tt.addEventListener("dispose",nt),S.__depthDisposeCallback=nt}S.__boundDepthTexture=tt}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ut(S.__webglFramebuffer,A)}else if(G){S.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[tt]),S.__webglDepthbuffer[tt]===void 0)S.__webglDepthbuffer[tt]=r.createRenderbuffer(),pt(S.__webglDepthbuffer[tt],A,!1);else{const nt=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[tt];r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,nt,r.RENDERBUFFER,J)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),pt(S.__webglDepthbuffer,A,!1);else{const tt=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,nt=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,nt),r.framebufferRenderbuffer(r.FRAMEBUFFER,tt,r.RENDERBUFFER,nt)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Vt(A,S,G){const tt=n.get(A);S!==void 0&&Dt(tt.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&Xt(A)}function $t(A){const S=A.texture,G=n.get(A),tt=n.get(S);A.addEventListener("dispose",E);const nt=A.textures,J=A.isWebGLCubeRenderTarget===!0,kt=nt.length>1;if(kt||(tt.__webglTexture===void 0&&(tt.__webglTexture=r.createTexture()),tt.__version=S.version,o.memory.textures++),J){G.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[vt]=[];for(let Et=0;Et<S.mipmaps.length;Et++)G.__webglFramebuffer[vt][Et]=r.createFramebuffer()}else G.__webglFramebuffer[vt]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let vt=0;vt<S.mipmaps.length;vt++)G.__webglFramebuffer[vt]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(kt)for(let vt=0,Et=nt.length;vt<Et;vt++){const ue=n.get(nt[vt]);ue.__webglTexture===void 0&&(ue.__webglTexture=r.createTexture(),o.memory.textures++)}if(A.samples>0&&It(A)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let vt=0;vt<nt.length;vt++){const Et=nt[vt];G.__webglColorRenderbuffer[vt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[vt]);const ue=s.convert(Et.format,Et.colorSpace),lt=s.convert(Et.type),Rt=y(Et.internalFormat,ue,lt,Et.colorSpace,A.isXRRenderTarget===!0),Wt=at(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,Wt,Rt,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.RENDERBUFFER,G.__webglColorRenderbuffer[vt])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),pt(G.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(J){e.bindTexture(r.TEXTURE_CUBE_MAP,tt.__webglTexture),qt(r.TEXTURE_CUBE_MAP,S);for(let vt=0;vt<6;vt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Et=0;Et<S.mipmaps.length;Et++)Dt(G.__webglFramebuffer[vt][Et],A,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Et);else Dt(G.__webglFramebuffer[vt],A,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);g(S)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(kt){for(let vt=0,Et=nt.length;vt<Et;vt++){const ue=nt[vt],lt=n.get(ue);e.bindTexture(r.TEXTURE_2D,lt.__webglTexture),qt(r.TEXTURE_2D,ue),Dt(G.__webglFramebuffer,A,ue,r.COLOR_ATTACHMENT0+vt,r.TEXTURE_2D,0),g(ue)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let vt=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(vt=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(vt,tt.__webglTexture),qt(vt,S),S.mipmaps&&S.mipmaps.length>0)for(let Et=0;Et<S.mipmaps.length;Et++)Dt(G.__webglFramebuffer[Et],A,S,r.COLOR_ATTACHMENT0,vt,Et);else Dt(G.__webglFramebuffer,A,S,r.COLOR_ATTACHMENT0,vt,0);g(S)&&p(vt),e.unbindTexture()}A.depthBuffer&&Xt(A)}function st(A){const S=A.textures;for(let G=0,tt=S.length;G<tt;G++){const nt=S[G];if(g(nt)){const J=x(A),kt=n.get(nt).__webglTexture;e.bindTexture(J,kt),p(J),e.unbindTexture()}}}const ht=[],D=[];function Ot(A){if(A.samples>0){if(It(A)===!1){const S=A.textures,G=A.width,tt=A.height;let nt=r.COLOR_BUFFER_BIT;const J=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,kt=n.get(A),vt=S.length>1;if(vt)for(let Et=0;Et<S.length;Et++)e.bindFramebuffer(r.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Et,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,kt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Et,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Et=0;Et<S.length;Et++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(nt|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(nt|=r.STENCIL_BUFFER_BIT)),vt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,kt.__webglColorRenderbuffer[Et]);const ue=n.get(S[Et]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ue,0)}r.blitFramebuffer(0,0,G,tt,0,0,G,tt,nt,r.NEAREST),l===!0&&(ht.length=0,D.length=0,ht.push(r.COLOR_ATTACHMENT0+Et),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ht.push(J),D.push(J),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,D)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ht))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),vt)for(let Et=0;Et<S.length;Et++){e.bindFramebuffer(r.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Et,r.RENDERBUFFER,kt.__webglColorRenderbuffer[Et]);const ue=n.get(S[Et]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,kt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Et,r.TEXTURE_2D,ue,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function at(A){return Math.min(i.maxSamples,A.samples)}function It(A){const S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function gt(A){const S=o.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Gt(A,S){const G=A.colorSpace,tt=A.format,nt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==Mn&&G!==Ti&&(xe.getTransfer(G)===Re?(tt!==Vn||nt!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function wt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=z,this.setTexture2D=H,this.setTexture2DArray=W,this.setTexture3D=Z,this.setTextureCube=Y,this.rebindTextures=Vt,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=It}function sv(r,t){function e(n,i=Ti){let s;const o=xe.getTransfer(i);if(n===Li)return r.UNSIGNED_BYTE;if(n===dc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===pc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Yu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Xu)return r.BYTE;if(n===qu)return r.SHORT;if(n===Yr)return r.UNSIGNED_SHORT;if(n===fc)return r.INT;if(n===ys)return r.UNSIGNED_INT;if(n===ti)return r.FLOAT;if(n===Hn)return r.HALF_FLOAT;if(n===ju)return r.ALPHA;if(n===Ku)return r.RGB;if(n===Vn)return r.RGBA;if(n===Zu)return r.LUMINANCE;if(n===$u)return r.LUMINANCE_ALPHA;if(n===Zs)return r.DEPTH_COMPONENT;if(n===sr)return r.DEPTH_STENCIL;if(n===mc)return r.RED;if(n===gc)return r.RED_INTEGER;if(n===Ju)return r.RG;if(n===_c)return r.RG_INTEGER;if(n===vc)return r.RGBA_INTEGER;if(n===Ko||n===Zo||n===$o||n===Jo)if(o===Re)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ko)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ko)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$o)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wl||n===El||n===Al||n===Rl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===wl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===El)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Al)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Rl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Cl||n===Pl||n===Ll)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Cl||n===Pl)return o===Re?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ll)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Il||n===Dl||n===Nl||n===Ul||n===Fl||n===Ol||n===kl||n===Bl||n===zl||n===Vl||n===Hl||n===Gl||n===Wl||n===Xl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Il)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dl)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nl)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ul)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fl)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ol)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kl)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bl)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zl)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vl)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hl)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gl)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wl)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xl)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qo||n===ql||n===Yl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Qo)return o===Re?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ql)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qu||n===jl||n===Kl||n===Zl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Qo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===jl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Kl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ir?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class rv extends mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class se extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ov={type:"move"};class $a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ov)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const av=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lv=`
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

}`;class cv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new je,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ye({vertexShader:av,fragmentShader:lv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ot(new ni(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hv extends fr{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null;const _=new cv,g=e.getContextAttributes();let p=null,x=null;const y=[],v=[],C=new it;let w=null;const E=new mn;E.viewport=new ye;const P=new mn;P.viewport=new ye;const b=[E,P],M=new rv;let I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ut=y[et];return ut===void 0&&(ut=new $a,y[et]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(et){let ut=y[et];return ut===void 0&&(ut=new $a,y[et]=ut),ut.getGripSpace()},this.getHand=function(et){let ut=y[et];return ut===void 0&&(ut=new $a,y[et]=ut),ut.getHandSpace()};function V(et){const ut=v.indexOf(et.inputSource);if(ut===-1)return;const Dt=y[ut];Dt!==void 0&&(Dt.update(et.inputSource,et.frame,c||o),Dt.dispatchEvent({type:et.type,data:et.inputSource}))}function F(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",H);for(let et=0;et<y.length;et++){const ut=v[et];ut!==null&&(v[et]=null,y[et].disconnect(ut))}I=null,z=null,_.reset(),t.setRenderTarget(p),d=null,f=null,u=null,i=null,x=null,he.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){s=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){a=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(et){if(i=et,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",F),i.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(C),i.renderState.layers===void 0){const ut={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,ut),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Rn(d.framebufferWidth,d.framebufferHeight,{format:Vn,type:Li,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let ut=null,Dt=null,pt=null;g.depth&&(pt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=g.stencil?sr:Zs,Dt=g.stencil?ir:ys);const Ut={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:s};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(Ut),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new Rn(f.textureWidth,f.textureHeight,{format:Vn,type:Li,depthTexture:new pf(f.textureWidth,f.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),he.setContext(i),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function H(et){for(let ut=0;ut<et.removed.length;ut++){const Dt=et.removed[ut],pt=v.indexOf(Dt);pt>=0&&(v[pt]=null,y[pt].disconnect(Dt))}for(let ut=0;ut<et.added.length;ut++){const Dt=et.added[ut];let pt=v.indexOf(Dt);if(pt===-1){for(let Xt=0;Xt<y.length;Xt++)if(Xt>=v.length){v.push(Dt),pt=Xt;break}else if(v[Xt]===null){v[Xt]=Dt,pt=Xt;break}if(pt===-1)break}const Ut=y[pt];Ut&&Ut.connect(Dt)}}const W=new L,Z=new L;function Y(et,ut,Dt){W.setFromMatrixPosition(ut.matrixWorld),Z.setFromMatrixPosition(Dt.matrixWorld);const pt=W.distanceTo(Z),Ut=ut.projectionMatrix.elements,Xt=Dt.projectionMatrix.elements,Vt=Ut[14]/(Ut[10]-1),$t=Ut[14]/(Ut[10]+1),st=(Ut[9]+1)/Ut[5],ht=(Ut[9]-1)/Ut[5],D=(Ut[8]-1)/Ut[0],Ot=(Xt[8]+1)/Xt[0],at=Vt*D,It=Vt*Ot,gt=pt/(-D+Ot),Gt=gt*-D;if(ut.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Gt),et.translateZ(gt),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Ut[10]===-1)et.projectionMatrix.copy(ut.projectionMatrix),et.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const wt=Vt+gt,A=$t+gt,S=at-Gt,G=It+(pt-Gt),tt=st*$t/A*wt,nt=ht*$t/A*wt;et.projectionMatrix.makePerspective(S,G,tt,nt,wt,A),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function ct(et,ut){ut===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ut.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(i===null)return;let ut=et.near,Dt=et.far;_.texture!==null&&(_.depthNear>0&&(ut=_.depthNear),_.depthFar>0&&(Dt=_.depthFar)),M.near=P.near=E.near=ut,M.far=P.far=E.far=Dt,(I!==M.near||z!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,z=M.far),E.layers.mask=et.layers.mask|2,P.layers.mask=et.layers.mask|4,M.layers.mask=E.layers.mask|P.layers.mask;const pt=et.parent,Ut=M.cameras;ct(M,pt);for(let Xt=0;Xt<Ut.length;Xt++)ct(Ut[Xt],pt);Ut.length===2?Y(M,E,P):M.projectionMatrix.copy(E.projectionMatrix),_t(et,M,pt)};function _t(et,ut,Dt){Dt===null?et.matrix.copy(ut.matrixWorld):(et.matrix.copy(Dt.matrixWorld),et.matrix.invert(),et.matrix.multiply(ut.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ut.projectionMatrix),et.projectionMatrixInverse.copy(ut.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=rr*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(et){l=et,f!==null&&(f.fixedFoveation=et),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=et)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let Pt=null;function qt(et,ut){if(h=ut.getViewerPose(c||o),m=ut,h!==null){const Dt=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let pt=!1;Dt.length!==M.cameras.length&&(M.cameras.length=0,pt=!0);for(let Xt=0;Xt<Dt.length;Xt++){const Vt=Dt[Xt];let $t=null;if(d!==null)$t=d.getViewport(Vt);else{const ht=u.getViewSubImage(f,Vt);$t=ht.viewport,Xt===0&&(t.setRenderTargetTextures(x,ht.colorTexture,f.ignoreDepthValues?void 0:ht.depthStencilTexture),t.setRenderTarget(x))}let st=b[Xt];st===void 0&&(st=new mn,st.layers.enable(Xt),st.viewport=new ye,b[Xt]=st),st.matrix.fromArray(Vt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(Vt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set($t.x,$t.y,$t.width,$t.height),Xt===0&&(M.matrix.copy(st.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),pt===!0&&M.cameras.push(st)}const Ut=i.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){const Xt=u.getDepthInformation(Dt[0]);Xt&&Xt.isValid&&Xt.texture&&_.init(t,Xt,i.renderState)}}for(let Dt=0;Dt<y.length;Dt++){const pt=v[Dt],Ut=y[Dt];pt!==null&&Ut!==void 0&&Ut.update(pt,ut,c||o)}Pt&&Pt(et,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),m=null}const he=new df;he.setAnimationLoop(qt),this.setAnimationLoop=function(et){Pt=et},this.dispose=function(){}}}const os=new hi,uv=new ie;function fv(r,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,hf(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,x,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,x,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===An&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===An&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=t.get(p),y=x.envMap,v=x.envMapRotation;y&&(g.envMap.value=y,os.copy(v),os.x*=-1,os.y*=-1,os.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),g.envMapRotation.value.setFromMatrix4(uv.makeRotationFromEuler(os)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===An&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const x=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function dv(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function c(x,y){let v=i[x.id];v===void 0&&(m(x),v=h(x),i[x.id]=v,x.addEventListener("dispose",g));const C=y.program;n.updateUBOMapping(x,C);const w=t.render.frame;s[x.id]!==w&&(f(x),s[x.id]=w)}function h(x){const y=u();x.__bindingPointIndex=y;const v=r.createBuffer(),C=x.__size,w=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,C,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,v),v}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const y=i[x.id],v=x.uniforms,C=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let w=0,E=v.length;w<E;w++){const P=Array.isArray(v[w])?v[w]:[v[w]];for(let b=0,M=P.length;b<M;b++){const I=P[b];if(d(I,w,b,C)===!0){const z=I.__offset,V=Array.isArray(I.value)?I.value:[I.value];let F=0;for(let H=0;H<V.length;H++){const W=V[H],Z=_(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,z+F,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,F),F+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(x,y,v,C){const w=x.value,E=y+"_"+v;if(C[E]===void 0)return typeof w=="number"||typeof w=="boolean"?C[E]=w:C[E]=w.clone(),!0;{const P=C[E];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return C[E]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function m(x){const y=x.uniforms;let v=0;const C=16;for(let E=0,P=y.length;E<P;E++){const b=Array.isArray(y[E])?y[E]:[y[E]];for(let M=0,I=b.length;M<I;M++){const z=b[M],V=Array.isArray(z.value)?z.value:[z.value];for(let F=0,H=V.length;F<H;F++){const W=V[F],Z=_(W),Y=v%C,ct=Y%Z.boundary,_t=Y+ct;v+=ct,_t!==0&&C-_t<Z.storage&&(v+=C-_t),z.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=Z.storage}}}const w=v%C;return w>0&&(v+=C-w),x.__size=v,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function g(x){const y=x.target;y.removeEventListener("dispose",g);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class pv{constructor(t={}){const{canvas:e=ip(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const x=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ne,this.toneMapping=Xi,this.toneMappingExposure=1;const v=this;let C=!1,w=0,E=0,P=null,b=-1,M=null;const I=new ye,z=new ye;let V=null;const F=new Ht(0);let H=0,W=e.width,Z=e.height,Y=1,ct=null,_t=null;const Pt=new ye(0,0,W,Z),qt=new ye(0,0,W,Z);let he=!1;const et=new Mc;let ut=!1,Dt=!1;const pt=new ie,Ut=new ie,Xt=new L,Vt=new ye,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function ht(){return P===null?Y:1}let D=n;function Ot(T,k){return e.getContext(T,k)}try{const T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${hc}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",Mt,!1),e.addEventListener("webglcontextcreationerror",bt,!1),D===null){const k="webgl2";if(D=Ot(k,T),D===null)throw Ot(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let at,It,gt,Gt,wt,A,S,G,tt,nt,J,kt,vt,Et,ue,lt,Rt,Wt,Yt,Nt,_e,re,Ee,O;function yt(){at=new xg(D),at.init(),re=new sv(D,at),It=new dg(D,at,t,re),gt=new ev(D,at),It.reverseDepthBuffer&&f&&gt.buffers.depth.setReversed(!0),Gt=new Sg(D),wt=new z_,A=new iv(D,at,gt,wt,It,re,Gt),S=new mg(v),G=new vg(v),tt=new Cp(D),Ee=new ug(D,tt),nt=new yg(D,tt,Gt,Ee),J=new Tg(D,nt,tt,Gt),Yt=new bg(D,It,A),lt=new pg(wt),kt=new B_(v,S,G,at,It,Ee,lt),vt=new fv(v,wt),Et=new H_,ue=new j_(at),Wt=new hg(v,S,G,gt,J,d,l),Rt=new Q_(v,J,It),O=new dv(D,Gt,It,gt),Nt=new fg(D,at,Gt),_e=new Mg(D,at,Gt),Gt.programs=kt.programs,v.capabilities=It,v.extensions=at,v.properties=wt,v.renderLists=Et,v.shadowMap=Rt,v.state=gt,v.info=Gt}yt();const K=new hv(v,D);this.xr=K,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=at.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=at.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(W,Z,!1))},this.getSize=function(T){return T.set(W,Z)},this.setSize=function(T,k,q=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,Z=k,e.width=Math.floor(T*Y),e.height=Math.floor(k*Y),q===!0&&(e.style.width=T+"px",e.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(W*Y,Z*Y).floor()},this.setDrawingBufferSize=function(T,k,q){W=T,Z=k,Y=q,e.width=Math.floor(T*q),e.height=Math.floor(k*q),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(Pt)},this.setViewport=function(T,k,q,X){T.isVector4?Pt.set(T.x,T.y,T.z,T.w):Pt.set(T,k,q,X),gt.viewport(I.copy(Pt).multiplyScalar(Y).round())},this.getScissor=function(T){return T.copy(qt)},this.setScissor=function(T,k,q,X){T.isVector4?qt.set(T.x,T.y,T.z,T.w):qt.set(T,k,q,X),gt.scissor(z.copy(qt).multiplyScalar(Y).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(T){gt.setScissorTest(he=T)},this.setOpaqueSort=function(T){ct=T},this.setTransparentSort=function(T){_t=T},this.getClearColor=function(T){return T.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor.apply(Wt,arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha.apply(Wt,arguments)},this.clear=function(T=!0,k=!0,q=!0){let X=0;if(T){let B=!1;if(P!==null){const dt=P.texture.format;B=dt===vc||dt===_c||dt===gc}if(B){const dt=P.texture.type,Tt=dt===Li||dt===ys||dt===Yr||dt===ir||dt===dc||dt===pc,Bt=Wt.getClearColor(),Ct=Wt.getClearAlpha(),Zt=Bt.r,ee=Bt.g,Lt=Bt.b;Tt?(m[0]=Zt,m[1]=ee,m[2]=Lt,m[3]=Ct,D.clearBufferuiv(D.COLOR,0,m)):(_[0]=Zt,_[1]=ee,_[2]=Lt,_[3]=Ct,D.clearBufferiv(D.COLOR,0,_))}else X|=D.COLOR_BUFFER_BIT}k&&(X|=D.DEPTH_BUFFER_BIT),q&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),Et.dispose(),ue.dispose(),wt.dispose(),S.dispose(),G.dispose(),J.dispose(),Ee.dispose(),O.dispose(),kt.dispose(),K.dispose(),K.removeEventListener("sessionstart",vr),K.removeEventListener("sessionend",jt),ii.stop()};function rt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Mt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const T=Gt.autoReset,k=Rt.enabled,q=Rt.autoUpdate,X=Rt.needsUpdate,B=Rt.type;yt(),Gt.autoReset=T,Rt.enabled=k,Rt.autoUpdate=q,Rt.needsUpdate=X,Rt.type=B}function bt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function oe(T){const k=T.target;k.removeEventListener("dispose",oe),Le(k)}function Le(T){Be(T),wt.remove(T)}function Be(T){const k=wt.get(T).programs;k!==void 0&&(k.forEach(function(q){kt.releaseProgram(q)}),T.isShaderMaterial&&kt.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,q,X,B,dt){k===null&&(k=$t);const Tt=B.isMesh&&B.matrixWorld.determinant()<0,Bt=Sa(T,k,q,X,B);gt.setMaterial(X,Tt);let Ct=q.index,Zt=1;if(X.wireframe===!0){if(Ct=nt.getWireframeAttribute(q),Ct===void 0)return;Zt=2}const ee=q.drawRange,Lt=q.attributes.position;let Jt=ee.start*Zt,Me=(ee.start+ee.count)*Zt;dt!==null&&(Jt=Math.max(Jt,dt.start*Zt),Me=Math.min(Me,(dt.start+dt.count)*Zt)),Ct!==null?(Jt=Math.max(Jt,0),Me=Math.min(Me,Ct.count)):Lt!=null&&(Jt=Math.max(Jt,0),Me=Math.min(Me,Lt.count));const Ae=Me-Jt;if(Ae<0||Ae===1/0)return;Ee.setup(B,X,Bt,q,Ct);let Je,de=Nt;if(Ct!==null&&(Je=tt.get(Ct),de=_e,de.setIndex(Je)),B.isMesh)X.wireframe===!0?(gt.setLineWidth(X.wireframeLinewidth*ht()),de.setMode(D.LINES)):de.setMode(D.TRIANGLES);else if(B.isLine){let zt=X.linewidth;zt===void 0&&(zt=1),gt.setLineWidth(zt*ht()),B.isLineSegments?de.setMode(D.LINES):B.isLineLoop?de.setMode(D.LINE_LOOP):de.setMode(D.LINE_STRIP)}else B.isPoints?de.setMode(D.POINTS):B.isSprite&&de.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)de.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))de.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const zt=B._multiDrawStarts,R=B._multiDrawCounts,N=B._multiDrawCount,j=Ct?tt.get(Ct).bytesPerElement:1,$=wt.get(X).currentProgram.getUniforms();for(let Q=0;Q<N;Q++)$.setValue(D,"_gl_DrawID",Q),de.render(zt[Q]/j,R[Q])}else if(B.isInstancedMesh)de.renderInstances(Jt,Ae,B.count);else if(q.isInstancedBufferGeometry){const zt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,R=Math.min(q.instanceCount,zt);de.renderInstances(Jt,Ae,R)}else de.render(Jt,Ae)};function fe(T,k,q){T.transparent===!0&&T.side===En&&T.forceSinglePass===!1?(T.side=An,T.needsUpdate=!0,Di(T,k,q),T.side=Ci,T.needsUpdate=!0,Di(T,k,q),T.side=En):Di(T,k,q)}this.compile=function(T,k,q=null){q===null&&(q=T),p=ue.get(q),p.init(k),y.push(p),q.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),T!==q&&T.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const X=new Set;return T.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const dt=B.material;if(dt)if(Array.isArray(dt))for(let Tt=0;Tt<dt.length;Tt++){const Bt=dt[Tt];fe(Bt,q,B),X.add(Bt)}else fe(dt,q,B),X.add(dt)}),y.pop(),p=null,X},this.compileAsync=function(T,k,q=null){const X=this.compile(T,k,q);return new Promise(B=>{function dt(){if(X.forEach(function(Tt){wt.get(Tt).currentProgram.isReady()&&X.delete(Tt)}),X.size===0){B(T);return}setTimeout(dt,10)}at.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Sn=null;function qn(T){Sn&&Sn(T)}function vr(){ii.stop()}function jt(){ii.start()}const ii=new df;ii.setAnimationLoop(qn),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(T){Sn=T,K.setAnimationLoop(T),T===null?ii.stop():ii.start()},K.addEventListener("sessionstart",vr),K.addEventListener("sessionend",jt),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(k),k=K.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,k,P),p=ue.get(T,y.length),p.init(k),y.push(p),Ut.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),et.setFromProjectionMatrix(Ut),Dt=this.localClippingEnabled,ut=lt.init(this.clippingPlanes,Dt),g=Et.get(T,x.length),g.init(),x.push(g),K.enabled===!0&&K.isPresenting===!0){const dt=v.xr.getDepthSensingMesh();dt!==null&&xr(dt,k,-1/0,v.sortObjects)}xr(T,k,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ct,_t),st=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,st&&Wt.addToRenderList(g,T),this.info.render.frame++,ut===!0&&lt.beginShadows();const q=p.state.shadowsArray;Rt.render(q,T,k),ut===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=g.opaque,B=g.transmissive;if(p.setupLights(),k.isArrayCamera){const dt=k.cameras;if(B.length>0)for(let Tt=0,Bt=dt.length;Tt<Bt;Tt++){const Ct=dt[Tt];bn(X,B,T,Ct)}st&&Wt.render(T);for(let Tt=0,Bt=dt.length;Tt<Bt;Tt++){const Ct=dt[Tt];Ji(g,T,Ct,Ct.viewport)}}else B.length>0&&bn(X,B,T,k),st&&Wt.render(T),Ji(g,T,k);P!==null&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(v,T,k),Ee.resetDefaultState(),b=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],ut===!0&&lt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function xr(T,k,q,X){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||et.intersectsSprite(T)){X&&Vt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ut);const Tt=J.update(T),Bt=T.material;Bt.visible&&g.push(T,Tt,Bt,q,Vt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||et.intersectsObject(T))){const Tt=J.update(T),Bt=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Vt.copy(T.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Vt.copy(Tt.boundingSphere.center)),Vt.applyMatrix4(T.matrixWorld).applyMatrix4(Ut)),Array.isArray(Bt)){const Ct=Tt.groups;for(let Zt=0,ee=Ct.length;Zt<ee;Zt++){const Lt=Ct[Zt],Jt=Bt[Lt.materialIndex];Jt&&Jt.visible&&g.push(T,Tt,Jt,q,Vt.z,Lt)}}else Bt.visible&&g.push(T,Tt,Bt,q,Vt.z,null)}}const dt=T.children;for(let Tt=0,Bt=dt.length;Tt<Bt;Tt++)xr(dt[Tt],k,q,X)}function Ji(T,k,q,X){const B=T.opaque,dt=T.transmissive,Tt=T.transparent;p.setupLightsView(q),ut===!0&&lt.setGlobalState(v.clippingPlanes,q),X&&gt.viewport(I.copy(X)),B.length>0&&Yn(B,k,q),dt.length>0&&Yn(dt,k,q),Tt.length>0&&Yn(Tt,k,q),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function bn(T,k,q,X){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Rn(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?Hn:Li,minFilter:Ei,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xe.workingColorSpace}));const dt=p.state.transmissionRenderTarget[X.id],Tt=X.viewport||I;dt.setSize(Tt.z,Tt.w);const Bt=v.getRenderTarget();v.setRenderTarget(dt),v.getClearColor(F),H=v.getClearAlpha(),H<1&&v.setClearColor(16777215,.5),v.clear(),st&&Wt.render(q);const Ct=v.toneMapping;v.toneMapping=Xi;const Zt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),ut===!0&&lt.setGlobalState(v.clippingPlanes,X),Yn(T,q,X),A.updateMultisampleRenderTarget(dt),A.updateRenderTargetMipmap(dt),at.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Lt=0,Jt=k.length;Lt<Jt;Lt++){const Me=k[Lt],Ae=Me.object,Je=Me.geometry,de=Me.material,zt=Me.group;if(de.side===En&&Ae.layers.test(X.layers)){const R=de.side;de.side=An,de.needsUpdate=!0,yr(Ae,q,X,Je,de,zt),de.side=R,de.needsUpdate=!0,ee=!0}}ee===!0&&(A.updateMultisampleRenderTarget(dt),A.updateRenderTargetMipmap(dt))}v.setRenderTarget(Bt),v.setClearColor(F,H),Zt!==void 0&&(X.viewport=Zt),v.toneMapping=Ct}function Yn(T,k,q){const X=k.isScene===!0?k.overrideMaterial:null;for(let B=0,dt=T.length;B<dt;B++){const Tt=T[B],Bt=Tt.object,Ct=Tt.geometry,Zt=X===null?Tt.material:X,ee=Tt.group;Bt.layers.test(q.layers)&&yr(Bt,k,q,Ct,Zt,ee)}}function yr(T,k,q,X,B,dt){T.onBeforeRender(v,k,q,X,B,dt),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(v,k,q,X,T,dt),B.transparent===!0&&B.side===En&&B.forceSinglePass===!1?(B.side=An,B.needsUpdate=!0,v.renderBufferDirect(q,k,X,B,T,dt),B.side=Ci,B.needsUpdate=!0,v.renderBufferDirect(q,k,X,B,T,dt),B.side=En):v.renderBufferDirect(q,k,X,B,T,dt),T.onAfterRender(v,k,q,X,B,dt)}function Di(T,k,q){k.isScene!==!0&&(k=$t);const X=wt.get(T),B=p.state.lights,dt=p.state.shadowsArray,Tt=B.state.version,Bt=kt.getParameters(T,B.state,dt,k,q),Ct=kt.getProgramCacheKey(Bt);let Zt=X.programs;X.environment=T.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(T.isMeshStandardMaterial?G:S).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,Zt===void 0&&(T.addEventListener("dispose",oe),Zt=new Map,X.programs=Zt);let ee=Zt.get(Ct);if(ee!==void 0){if(X.currentProgram===ee&&X.lightsStateVersion===Tt)return Qi(T,Bt),ee}else Bt.uniforms=kt.getUniforms(T),T.onBeforeCompile(Bt,v),ee=kt.acquireProgram(Bt,Ct),Zt.set(Ct,ee),X.uniforms=Bt.uniforms;const Lt=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Lt.clippingPlanes=lt.uniform),Qi(T,Bt),X.needsLights=ba(T),X.lightsStateVersion=Tt,X.needsLights&&(Lt.ambientLightColor.value=B.state.ambient,Lt.lightProbe.value=B.state.probe,Lt.directionalLights.value=B.state.directional,Lt.directionalLightShadows.value=B.state.directionalShadow,Lt.spotLights.value=B.state.spot,Lt.spotLightShadows.value=B.state.spotShadow,Lt.rectAreaLights.value=B.state.rectArea,Lt.ltc_1.value=B.state.rectAreaLTC1,Lt.ltc_2.value=B.state.rectAreaLTC2,Lt.pointLights.value=B.state.point,Lt.pointLightShadows.value=B.state.pointShadow,Lt.hemisphereLights.value=B.state.hemi,Lt.directionalShadowMap.value=B.state.directionalShadowMap,Lt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Lt.spotShadowMap.value=B.state.spotShadowMap,Lt.spotLightMatrix.value=B.state.spotLightMatrix,Lt.spotLightMap.value=B.state.spotLightMap,Lt.pointShadowMap.value=B.state.pointShadowMap,Lt.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=ee,X.uniformsList=null,ee}function ao(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=ta.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function Qi(T,k){const q=wt.get(T);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function Sa(T,k,q,X,B){k.isScene!==!0&&(k=$t),A.resetTextureUnits();const dt=k.fog,Tt=X.isMeshStandardMaterial?k.environment:null,Bt=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Mn,Ct=(X.isMeshStandardMaterial?G:S).get(X.envMap||Tt),Zt=X.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ee=!!q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Lt=!!q.morphAttributes.position,Jt=!!q.morphAttributes.normal,Me=!!q.morphAttributes.color;let Ae=Xi;X.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ae=v.toneMapping);const Je=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,de=Je!==void 0?Je.length:0,zt=wt.get(X),R=p.state.lights;if(ut===!0&&(Dt===!0||T!==M)){const Kt=T===M&&X.id===b;lt.setState(X,T,Kt)}let N=!1;X.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==R.state.version||zt.outputColorSpace!==Bt||B.isBatchedMesh&&zt.batching===!1||!B.isBatchedMesh&&zt.batching===!0||B.isBatchedMesh&&zt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&zt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&zt.instancing===!1||!B.isInstancedMesh&&zt.instancing===!0||B.isSkinnedMesh&&zt.skinning===!1||!B.isSkinnedMesh&&zt.skinning===!0||B.isInstancedMesh&&zt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&zt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&zt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&zt.instancingMorph===!1&&B.morphTexture!==null||zt.envMap!==Ct||X.fog===!0&&zt.fog!==dt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==lt.numPlanes||zt.numIntersection!==lt.numIntersection)||zt.vertexAlphas!==Zt||zt.vertexTangents!==ee||zt.morphTargets!==Lt||zt.morphNormals!==Jt||zt.morphColors!==Me||zt.toneMapping!==Ae||zt.morphTargetsCount!==de)&&(N=!0):(N=!0,zt.__version=X.version);let j=zt.currentProgram;N===!0&&(j=Di(X,k,B));let $=!1,Q=!1,xt=!1;const mt=j.getUniforms(),ft=zt.uniforms;if(gt.useProgram(j.program)&&($=!0,Q=!0,xt=!0),X.id!==b&&(b=X.id,Q=!0),$||M!==T){gt.buffers.depth.getReversed()?(pt.copy(T.projectionMatrix),rp(pt),op(pt),mt.setValue(D,"projectionMatrix",pt)):mt.setValue(D,"projectionMatrix",T.projectionMatrix),mt.setValue(D,"viewMatrix",T.matrixWorldInverse);const ae=mt.map.cameraPosition;ae!==void 0&&ae.setValue(D,Xt.setFromMatrixPosition(T.matrixWorld)),It.logarithmicDepthBuffer&&mt.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&mt.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Q=!0,xt=!0)}if(B.isSkinnedMesh){mt.setOptional(D,B,"bindMatrix"),mt.setOptional(D,B,"bindMatrixInverse");const Kt=B.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),mt.setValue(D,"boneTexture",Kt.boneTexture,A))}B.isBatchedMesh&&(mt.setOptional(D,B,"batchingTexture"),mt.setValue(D,"batchingTexture",B._matricesTexture,A),mt.setOptional(D,B,"batchingIdTexture"),mt.setValue(D,"batchingIdTexture",B._indirectTexture,A),mt.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&mt.setValue(D,"batchingColorTexture",B._colorsTexture,A));const Qt=q.morphAttributes;if((Qt.position!==void 0||Qt.normal!==void 0||Qt.color!==void 0)&&Yt.update(B,q,j),(Q||zt.receiveShadow!==B.receiveShadow)&&(zt.receiveShadow=B.receiveShadow,mt.setValue(D,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ft.envMap.value=Ct,ft.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&(ft.envMapIntensity.value=k.environmentIntensity),Q&&(mt.setValue(D,"toneMappingExposure",v.toneMappingExposure),zt.needsLights&&ts(ft,xt),dt&&X.fog===!0&&vt.refreshFogUniforms(ft,dt),vt.refreshMaterialUniforms(ft,X,Y,Z,p.state.transmissionRenderTarget[T.id]),ta.upload(D,ao(zt),ft,A)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ta.upload(D,ao(zt),ft,A),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&mt.setValue(D,"center",B.center),mt.setValue(D,"modelViewMatrix",B.modelViewMatrix),mt.setValue(D,"normalMatrix",B.normalMatrix),mt.setValue(D,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Kt=X.uniformsGroups;for(let ae=0,ve=Kt.length;ae<ve;ae++){const te=Kt[ae];O.update(te,j),O.bind(te,j)}}return j}function ts(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function ba(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,k,q){wt.get(T.texture).__webglTexture=k,wt.get(T.depthTexture).__webglTexture=q;const X=wt.get(T);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=q===void 0,X.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,k){const q=wt.get(T);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,q=0){P=T,w=k,E=q;let X=!0,B=null,dt=!1,Tt=!1;if(T){const Ct=wt.get(T);if(Ct.__useDefaultFramebuffer!==void 0)gt.bindFramebuffer(D.FRAMEBUFFER,null),X=!1;else if(Ct.__webglFramebuffer===void 0)A.setupRenderTarget(T);else if(Ct.__hasExternalTextures)A.rebindTextures(T,wt.get(T.texture).__webglTexture,wt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Lt=T.depthTexture;if(Ct.__boundDepthTexture!==Lt){if(Lt!==null&&wt.has(Lt)&&(T.width!==Lt.image.width||T.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(T)}}const Zt=T.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Tt=!0);const ee=wt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ee[k])?B=ee[k][q]:B=ee[k],dt=!0):T.samples>0&&A.useMultisampledRTT(T)===!1?B=wt.get(T).__webglMultisampledFramebuffer:Array.isArray(ee)?B=ee[q]:B=ee,I.copy(T.viewport),z.copy(T.scissor),V=T.scissorTest}else I.copy(Pt).multiplyScalar(Y).floor(),z.copy(qt).multiplyScalar(Y).floor(),V=he;if(gt.bindFramebuffer(D.FRAMEBUFFER,B)&&X&&gt.drawBuffers(T,B),gt.viewport(I),gt.scissor(z),gt.setScissorTest(V),dt){const Ct=wt.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ct.__webglTexture,q)}else if(Tt){const Ct=wt.get(T.texture),Zt=k||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ct.__webglTexture,q||0,Zt)}b=-1},this.readRenderTargetPixels=function(T,k,q,X,B,dt,Tt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=wt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Tt!==void 0&&(Bt=Bt[Tt]),Bt){gt.bindFramebuffer(D.FRAMEBUFFER,Bt);try{const Ct=T.texture,Zt=Ct.format,ee=Ct.type;if(!It.textureFormatReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-X&&q>=0&&q<=T.height-B&&D.readPixels(k,q,X,B,re.convert(Zt),re.convert(ee),dt)}finally{const Ct=P!==null?wt.get(P).__webglFramebuffer:null;gt.bindFramebuffer(D.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(T,k,q,X,B,dt,Tt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=wt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Tt!==void 0&&(Bt=Bt[Tt]),Bt){const Ct=T.texture,Zt=Ct.format,ee=Ct.type;if(!It.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=T.width-X&&q>=0&&q<=T.height-B){gt.bindFramebuffer(D.FRAMEBUFFER,Bt);const Lt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Lt),D.bufferData(D.PIXEL_PACK_BUFFER,dt.byteLength,D.STREAM_READ),D.readPixels(k,q,X,B,re.convert(Zt),re.convert(ee),0);const Jt=P!==null?wt.get(P).__webglFramebuffer:null;gt.bindFramebuffer(D.FRAMEBUFFER,Jt);const Me=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await sp(D,Me,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Lt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,dt),D.deleteBuffer(Lt),D.deleteSync(Me),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,k=null,q=0){T.isTexture!==!0&&(kr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,T=arguments[1]);const X=Math.pow(2,-q),B=Math.floor(T.image.width*X),dt=Math.floor(T.image.height*X),Tt=k!==null?k.x:0,Bt=k!==null?k.y:0;A.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,Tt,Bt,B,dt),gt.unbindTexture()},this.copyTextureToTexture=function(T,k,q=null,X=null,B=0){T.isTexture!==!0&&(kr("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,T=arguments[1],k=arguments[2],B=arguments[3]||0,q=null);let dt,Tt,Bt,Ct,Zt,ee,Lt,Jt,Me;const Ae=T.isCompressedTexture?T.mipmaps[B]:T.image;q!==null?(dt=q.max.x-q.min.x,Tt=q.max.y-q.min.y,Bt=q.isBox3?q.max.z-q.min.z:1,Ct=q.min.x,Zt=q.min.y,ee=q.isBox3?q.min.z:0):(dt=Ae.width,Tt=Ae.height,Bt=Ae.depth||1,Ct=0,Zt=0,ee=0),X!==null?(Lt=X.x,Jt=X.y,Me=X.z):(Lt=0,Jt=0,Me=0);const Je=re.convert(k.format),de=re.convert(k.type);let zt;k.isData3DTexture?(A.setTexture3D(k,0),zt=D.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(A.setTexture2DArray(k,0),zt=D.TEXTURE_2D_ARRAY):(A.setTexture2D(k,0),zt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const R=D.getParameter(D.UNPACK_ROW_LENGTH),N=D.getParameter(D.UNPACK_IMAGE_HEIGHT),j=D.getParameter(D.UNPACK_SKIP_PIXELS),$=D.getParameter(D.UNPACK_SKIP_ROWS),Q=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ae.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ae.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ct),D.pixelStorei(D.UNPACK_SKIP_ROWS,Zt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ee);const xt=T.isDataArrayTexture||T.isData3DTexture,mt=k.isDataArrayTexture||k.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const ft=wt.get(T),Qt=wt.get(k),Kt=wt.get(ft.__renderTarget),ae=wt.get(Qt.__renderTarget);gt.bindFramebuffer(D.READ_FRAMEBUFFER,Kt.__webglFramebuffer),gt.bindFramebuffer(D.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let ve=0;ve<Bt;ve++)xt&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,wt.get(T).__webglTexture,B,ee+ve),T.isDepthTexture?(mt&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,wt.get(k).__webglTexture,B,Me+ve),D.blitFramebuffer(Ct,Zt,dt,Tt,Lt,Jt,dt,Tt,D.DEPTH_BUFFER_BIT,D.NEAREST)):mt?D.copyTexSubImage3D(zt,B,Lt,Jt,Me+ve,Ct,Zt,dt,Tt):D.copyTexSubImage2D(zt,B,Lt,Jt,Me+ve,Ct,Zt,dt,Tt);gt.bindFramebuffer(D.READ_FRAMEBUFFER,null),gt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else mt?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(zt,B,Lt,Jt,Me,dt,Tt,Bt,Je,de,Ae.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(zt,B,Lt,Jt,Me,dt,Tt,Bt,Je,Ae.data):D.texSubImage3D(zt,B,Lt,Jt,Me,dt,Tt,Bt,Je,de,Ae):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,B,Lt,Jt,dt,Tt,Je,de,Ae.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,B,Lt,Jt,Ae.width,Ae.height,Je,Ae.data):D.texSubImage2D(D.TEXTURE_2D,B,Lt,Jt,dt,Tt,Je,de,Ae);D.pixelStorei(D.UNPACK_ROW_LENGTH,R),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,N),D.pixelStorei(D.UNPACK_SKIP_PIXELS,j),D.pixelStorei(D.UNPACK_SKIP_ROWS,$),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Q),B===0&&k.generateMipmaps&&D.generateMipmap(zt),gt.unbindTexture()},this.copyTextureToTexture3D=function(T,k,q=null,X=null,B=0){return T.isTexture!==!0&&(kr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,X=arguments[1]||null,T=arguments[2],k=arguments[3],B=arguments[4]||0),kr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,k,q,X,B)},this.initRenderTarget=function(T){wt.get(T).__webglFramebuffer===void 0&&A.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),gt.unbindTexture()},this.resetState=function(){w=0,E=0,P=null,gt.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=xe._getUnpackColorSpace()}}class bc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ht(t),this.density=e}clone(){return new bc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class xf extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class yf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Jl,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const gn=new L;class $r{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyMatrix4(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyNormalMatrix(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.transformDirection(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Qn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Qn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Qn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Qn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),i=Ce(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),i=Ce(i,this.array),s=Ce(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new on(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new $r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Jr extends ei{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Vs;const Ar=new L,Hs=new L,Gs=new L,Ws=new it,Rr=new it,Mf=new ie,Co=new L,Cr=new L,Po=new L,Xh=new it,Ja=new it,qh=new it;class ar extends De{constructor(t=new Jr){if(super(),this.isSprite=!0,this.type="Sprite",Vs===void 0){Vs=new ke;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new yf(e,5);Vs.setIndex([0,1,2,0,2,3]),Vs.setAttribute("position",new $r(n,3,0,!1)),Vs.setAttribute("uv",new $r(n,2,3,!1))}this.geometry=Vs,this.material=t,this.center=new it(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hs.setFromMatrixScale(this.matrixWorld),Mf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Gs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hs.multiplyScalar(-Gs.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;Lo(Co.set(-.5,-.5,0),Gs,o,Hs,i,s),Lo(Cr.set(.5,-.5,0),Gs,o,Hs,i,s),Lo(Po.set(.5,.5,0),Gs,o,Hs,i,s),Xh.set(0,0),Ja.set(1,0),qh.set(1,1);let a=t.ray.intersectTriangle(Co,Cr,Po,!1,Ar);if(a===null&&(Lo(Cr.set(-.5,.5,0),Gs,o,Hs,i,s),Ja.set(0,1),a=t.ray.intersectTriangle(Co,Po,Cr,!1,Ar),a===null))return;const l=t.ray.origin.distanceTo(Ar);l<t.near||l>t.far||e.push({distance:l,point:Ar.clone(),uv:zn.getInterpolation(Ar,Co,Cr,Po,Xh,Ja,qh,new it),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Lo(r,t,e,n,i,s){Ws.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Rr.x=s*Ws.x-i*Ws.y,Rr.y=i*Ws.x+s*Ws.y):Rr.copy(Ws),r.copy(t),r.x+=Rr.x,r.y+=Rr.y,r.applyMatrix4(Mf)}const Yh=new L,jh=new ye,Kh=new ye,mv=new L,Zh=new ie,Io=new L,Qa=new ui,$h=new ie,tl=new dr;class gv extends ot{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=jc,this.bindMatrix=new ie,this.bindMatrixInverse=new ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Wn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Io),this.boundingBox.expandByPoint(Io)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ui),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Io),this.boundingSphere.expandByPoint(Io)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qa.copy(this.boundingSphere),Qa.applyMatrix4(i),t.ray.intersectsSphere(Qa)!==!1&&($h.copy(i).invert(),tl.copy(t.ray).applyMatrix4($h),!(this.boundingBox!==null&&tl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,tl)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ye,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===jc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Rd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;jh.fromBufferAttribute(i.attributes.skinIndex,t),Kh.fromBufferAttribute(i.attributes.skinWeight,t),Yh.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const o=Kh.getComponent(s);if(o!==0){const a=jh.getComponent(s);Zh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(mv.copy(Yh).applyMatrix4(Zh),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Sf extends De{constructor(){super(),this.isBone=!0,this.type="Bone"}}class bf extends je{constructor(t=null,e=1,n=1,i,s,o,a,l,c=rn,h=rn,u,f){super(null,o,a,l,c,h,i,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jh=new ie,_v=new ie;class Tc{constructor(t=[],e=[]){this.uuid=Gn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ie)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new ie;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=t.length;s<o;s++){const a=t[s]?t[s].matrixWorld:_v;Jh.multiplyMatrices(a,e[s]),Jh.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Tc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new bf(e,t,t,Vn,ti);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const s=t.bones[n];let o=e[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Sf),this.bones.push(o),this.boneInverses.push(new ie().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class ec extends on{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Xs=new ie,Qh=new ie,Do=[],tu=new Wn,vv=new ie,Pr=new ot,Lr=new ui;class xv extends ot{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ec(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,vv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xs),tu.copy(t.boundingBox).applyMatrix4(Xs),this.boundingBox.union(tu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ui),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xs),Lr.copy(t.boundingSphere).applyMatrix4(Xs),this.boundingSphere.union(Lr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Pr.geometry=this.geometry,Pr.material=this.material,Pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lr.copy(this.boundingSphere),Lr.applyMatrix4(n),t.ray.intersectsSphere(Lr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Xs),Qh.multiplyMatrices(n,Xs),Pr.matrixWorld=Qh,Pr.raycast(t,Do);for(let o=0,a=Do.length;o<a;o++){const l=Do[o];l.instanceId=s,l.object=this,e.push(l)}Do.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ec(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new bf(new Float32Array(i*this.count),i,this.count,mc,ti));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class wc extends ei{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ca=new L,ha=new L,eu=new ie,Ir=new dr,No=new ui,el=new L,nu=new L;class Ec extends De{constructor(t=new ke,e=new wc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)ca.fromBufferAttribute(e,i-1),ha.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ca.distanceTo(ha);t.setAttribute("lineDistance",new ge(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(i),No.radius+=s,t.ray.intersectsSphere(No)===!1)return;eu.copy(i).invert(),Ir.copy(t.ray).applyMatrix4(eu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=d,g=m-1;_<g;_+=c){const p=h.getX(_),x=h.getX(_+1),y=Uo(this,t,Ir,l,p,x);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(m-1),g=h.getX(d),p=Uo(this,t,Ir,l,_,g);p&&e.push(p)}}else{const d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let _=d,g=m-1;_<g;_+=c){const p=Uo(this,t,Ir,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Uo(this,t,Ir,l,m-1,d);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Uo(r,t,e,n,i,s){const o=r.geometry.attributes.position;if(ca.fromBufferAttribute(o,i),ha.fromBufferAttribute(o,s),e.distanceSqToSegment(ca,ha,el,nu)>n)return;el.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(el);if(!(l<t.near||l>t.far))return{distance:l,point:nu.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const iu=new L,su=new L;class Tf extends Ec{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)iu.fromBufferAttribute(e,i),su.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+iu.distanceTo(su);t.setAttribute("lineDistance",new ge(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yv extends Ec{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class wf extends ei{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ru=new ie,nc=new dr,Fo=new ui,Oo=new L;class Ef extends De{constructor(t=new ke,e=new wf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fo.copy(n.boundingSphere),Fo.applyMatrix4(i),Fo.radius+=s,t.ray.intersectsSphere(Fo)===!1)return;ru.copy(i).invert(),nc.copy(t.ray).applyMatrix4(ru);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,_=d;m<_;m++){const g=c.getX(m);Oo.fromBufferAttribute(u,g),ou(Oo,g,l,i,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,_=d;m<_;m++)Oo.fromBufferAttribute(u,m),ou(Oo,m,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ou(r,t,e,n,i,s,o){const a=nc.distanceSqToPoint(r);if(a<e){const l=new L;nc.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class $i extends je{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new it:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,i=[],s=[],o=[],a=new L,l=new ie;for(let d=0;d<=t;d++){const m=d/t;i[d]=this.getTangentAt(m,new L)}s[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(qe(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(qe(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let m=1;m<=t;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ac extends fi{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new it){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Mv extends Ac{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Rc(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const ko=new L,nl=new Rc,il=new Rc,sl=new Rc;class ea extends fi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(ko.subVectors(i[0],i[1]).add(i[0]),c=ko);const u=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(ko.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=ko),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),nl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,_,g),il.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,_,g),sl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(nl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),il.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),sl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(nl.calc(l),il.calc(l),sl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function au(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function Sv(r,t){const e=1-r;return e*e*t}function bv(r,t){return 2*(1-r)*r*t}function Tv(r,t){return r*r*t}function Gr(r,t,e,n){return Sv(r,t)+bv(r,e)+Tv(r,n)}function wv(r,t){const e=1-r;return e*e*e*t}function Ev(r,t){const e=1-r;return 3*e*e*r*t}function Av(r,t){return 3*(1-r)*r*r*t}function Rv(r,t){return r*r*r*t}function Wr(r,t,e,n,i){return wv(r,t)+Ev(r,e)+Av(r,n)+Rv(r,i)}class Af extends fi{constructor(t=new it,e=new it,n=new it,i=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new it){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Wr(t,i.x,s.x,o.x,a.x),Wr(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Cv extends fi{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Wr(t,i.x,s.x,o.x,a.x),Wr(t,i.y,s.y,o.y,a.y),Wr(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Rf extends fi{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pv extends fi{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cf extends fi{constructor(t=new it,e=new it,n=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new it){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Gr(t,i.x,s.x,o.x),Gr(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pf extends fi{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Gr(t,i.x,s.x,o.x),Gr(t,i.y,s.y,o.y),Gr(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lf extends fi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(au(a,l.x,c.x,h.x,u.x),au(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new it().fromArray(i))}return this}}var ua=Object.freeze({__proto__:null,ArcCurve:Mv,CatmullRomCurve3:ea,CubicBezierCurve:Af,CubicBezierCurve3:Cv,EllipseCurve:Ac,LineCurve:Rf,LineCurve3:Pv,QuadraticBezierCurve:Cf,QuadraticBezierCurve3:Pf,SplineCurve:Lf});class Lv extends fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ua[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new ua[i.type]().fromJSON(i))}return this}}class ic extends Lv{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Rf(this.currentPoint.clone(),new it(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Cf(this.currentPoint.clone(),new it(t,e),new it(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new Af(this.currentPoint.clone(),new it(t,e),new it(n,i),new it(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Lf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){const c=new Ac(t,e,n,i,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class bs extends ke{constructor(t=[new it(0,-.5),new it(.5,0),new it(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=qe(i,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],h=1/e,u=new L,f=new it,d=new L,m=new L,_=new L;let g=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:g=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,d.x=p*1,d.y=-g,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:g=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(m)}for(let x=0;x<=e;x++){const y=n+x*h*i,v=Math.sin(y),C=Math.cos(y);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*v,u.y=t[w].y,u.z=t[w].x*C,o.push(u.x,u.y,u.z),f.x=x/e,f.y=w/(t.length-1),a.push(f.x,f.y);const E=l[3*w+0]*v,P=l[3*w+1],b=l[3*w+0]*C;c.push(E,P,b)}}for(let x=0;x<e;x++)for(let y=0;y<t.length-1;y++){const v=y+x*t.length,C=v,w=v+t.length,E=v+t.length+1,P=v+1;s.push(C,w,P),s.push(E,P,w)}this.setIndex(s),this.setAttribute("position",new ge(o,3)),this.setAttribute("uv",new ge(a,2)),this.setAttribute("normal",new ge(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bs(t.points,t.segments,t.phiStart,t.phiLength)}}class _s extends bs{constructor(t=1,e=1,n=4,i=8){const s=new ic;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new _s(t.radius,t.length,t.capSegments,t.radialSegments)}}class Gi extends ke{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],o=[],a=[],l=[],c=new L,h=new it;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ge(o,3)),this.setAttribute("normal",new ge(a,3)),this.setAttribute("uv",new ge(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gi(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ue extends ke{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],f=[],d=[];let m=0;const _=[],g=n/2;let p=0;x(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ge(u,3)),this.setAttribute("normal",new ge(f,3)),this.setAttribute("uv",new ge(d,2));function x(){const v=new L,C=new L;let w=0;const E=(e-t)/n;for(let P=0;P<=s;P++){const b=[],M=P/s,I=M*(e-t)+t;for(let z=0;z<=i;z++){const V=z/i,F=V*l+a,H=Math.sin(F),W=Math.cos(F);C.x=I*H,C.y=-M*n+g,C.z=I*W,u.push(C.x,C.y,C.z),v.set(H,E,W).normalize(),f.push(v.x,v.y,v.z),d.push(V,1-M),b.push(m++)}_.push(b)}for(let P=0;P<i;P++)for(let b=0;b<s;b++){const M=_[b][P],I=_[b+1][P],z=_[b+1][P+1],V=_[b][P+1];(t>0||b!==0)&&(h.push(M,I,V),w+=3),(e>0||b!==s-1)&&(h.push(I,z,V),w+=3)}c.addGroup(p,w,0),p+=w}function y(v){const C=m,w=new it,E=new L;let P=0;const b=v===!0?t:e,M=v===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,g*M,0),f.push(0,M,0),d.push(.5,.5),m++;const I=m;for(let z=0;z<=i;z++){const F=z/i*l+a,H=Math.cos(F),W=Math.sin(F);E.x=b*W,E.y=g*M,E.z=b*H,u.push(E.x,E.y,E.z),f.push(0,M,0),w.x=H*.5+.5,w.y=W*.5*M+.5,d.push(w.x,w.y),m++}for(let z=0;z<i;z++){const V=C+z,F=I+z;v===!0?h.push(F,F+1,V):h.push(F+1,F,V),P+=3}c.addGroup(p,P,v===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ue(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class io extends Ue{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new io(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class so extends ic{constructor(t){super(t),this.uuid=Gn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new ic().fromJSON(i))}return this}}const Iv={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=If(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,u,f,d;if(n&&(s=Ov(r,t,s,e)),r.length>80*e){a=c=r[0],l=h=r[1];for(let m=e;m<i;m+=e)u=r[m],f=r[m+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Qr(s,o,e,a,l,d,0),o}};function If(r,t,e,n,i){let s,o;if(i===jv(r,t,e,n)>0)for(s=t;s<e;s+=n)o=lu(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=lu(s,r[s],r[s+1],o);return o&&va(o,o.next)&&(eo(o),o=o.next),o}function Ms(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(va(e,e.next)||Oe(e.prev,e,e.next)===0)){if(eo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Qr(r,t,e,n,i,s,o){if(!r)return;!o&&s&&Hv(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?Nv(r,n,i,s):Dv(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),eo(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=Uv(Ms(r),t,e),Qr(r,t,e,n,i,s,2)):o===2&&Fv(r,t,e,n,i,s):Qr(Ms(r),t,e,n,i,s,1);break}}}function Dv(r){const t=r.prev,e=r,n=r.next;if(Oe(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<s?i<o?i:o:s<o?s:o,u=a<l?a<c?a:c:l<c?l:c,f=i>s?i>o?i:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c;let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&js(i,a,s,l,o,c,m.x,m.y)&&Oe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Nv(r,t,e,n){const i=r.prev,s=r,o=r.next;if(Oe(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,h=i.y,u=s.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,m=h<u?h<f?h:f:u<f?u:f,_=a>l?a>c?a:c:l>c?l:c,g=h>u?h>f?h:f:u>f?u:f,p=sc(d,m,t,e,n),x=sc(_,g,t,e,n);let y=r.prevZ,v=r.nextZ;for(;y&&y.z>=p&&v&&v.z<=x;){if(y.x>=d&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&js(a,h,l,u,c,f,y.x,y.y)&&Oe(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=d&&v.x<=_&&v.y>=m&&v.y<=g&&v!==i&&v!==o&&js(a,h,l,u,c,f,v.x,v.y)&&Oe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&js(a,h,l,u,c,f,y.x,y.y)&&Oe(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=x;){if(v.x>=d&&v.x<=_&&v.y>=m&&v.y<=g&&v!==i&&v!==o&&js(a,h,l,u,c,f,v.x,v.y)&&Oe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Uv(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!va(i,s)&&Df(i,n,n.next,s)&&to(i,s)&&to(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),eo(n),eo(n.next),n=r=s),n=n.next}while(n!==r);return Ms(n)}function Fv(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Xv(o,a)){let l=Nf(o,a);o=Ms(o,o.next),l=Ms(l,l.next),Qr(o,t,e,n,i,s,0),Qr(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function Ov(r,t,e,n){const i=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=If(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Wv(c));for(i.sort(kv),s=0;s<i.length;s++)e=Bv(i[s],e);return e}function kv(r,t){return r.x-t.x}function Bv(r,t){const e=zv(r,t);if(!e)return t;const n=Nf(e,r);return Ms(n,n.next),Ms(e,e.next)}function zv(r,t){let e=t,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===s))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,u;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&js(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(s-e.x),to(e,r)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&Vv(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function Vv(r,t){return Oe(r.prev,r,t.prev)<0&&Oe(t.next,r,r.next)<0}function Hv(r,t,e,n){let i=r;do i.z===0&&(i.z=sc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Gv(i)}function Gv(r){let t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function sc(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Wv(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function js(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function Xv(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!qv(r,t)&&(to(r,t)&&to(t,r)&&Yv(r,t)&&(Oe(r.prev,r,t.prev)||Oe(r,t.prev,t))||va(r,t)&&Oe(r.prev,r,r.next)>0&&Oe(t.prev,t,t.next)>0)}function Oe(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function va(r,t){return r.x===t.x&&r.y===t.y}function Df(r,t,e,n){const i=zo(Oe(r,t,e)),s=zo(Oe(r,t,n)),o=zo(Oe(e,n,r)),a=zo(Oe(e,n,t));return!!(i!==s&&o!==a||i===0&&Bo(r,e,t)||s===0&&Bo(r,n,t)||o===0&&Bo(e,r,n)||a===0&&Bo(e,t,n))}function Bo(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function zo(r){return r>0?1:r<0?-1:0}function qv(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Df(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function to(r,t){return Oe(r.prev,r,r.next)<0?Oe(r,t,r.next)>=0&&Oe(r,r.prev,t)>=0:Oe(r,t,r.prev)<0||Oe(r,r.next,t)<0}function Yv(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function Nf(r,t){const e=new rc(r.i,r.x,r.y),n=new rc(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function lu(r,t,e,n){const i=new rc(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function eo(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function rc(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function jv(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class Yi{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return Yi.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];cu(t),hu(n,t);let o=t.length;e.forEach(cu);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,hu(n,e[l]);const a=Iv.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function cu(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function hu(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class xa extends ke{constructor(t=new so([new it(.5,.5),new it(-.5,.5),new it(-.5,-.5),new it(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ge(i,3)),this.setAttribute("uv",new ge(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:Kv;let y,v=!1,C,w,E,P;p&&(y=p.getSpacedPoints(h),v=!0,f=!1,C=p.computeFrenetFrames(h,!1),w=new L,E=new L,P=new L),f||(g=0,d=0,m=0,_=0);const b=a.extractPoints(c);let M=b.shape;const I=b.holes;if(!Yi.isClockWise(M)){M=M.reverse();for(let st=0,ht=I.length;st<ht;st++){const D=I[st];Yi.isClockWise(D)&&(I[st]=D.reverse())}}const V=Yi.triangulateShape(M,I),F=M;for(let st=0,ht=I.length;st<ht;st++){const D=I[st];M=M.concat(D)}function H(st,ht,D){return ht||console.error("THREE.ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(ht,D)}const W=M.length,Z=V.length;function Y(st,ht,D){let Ot,at,It;const gt=st.x-ht.x,Gt=st.y-ht.y,wt=D.x-st.x,A=D.y-st.y,S=gt*gt+Gt*Gt,G=gt*A-Gt*wt;if(Math.abs(G)>Number.EPSILON){const tt=Math.sqrt(S),nt=Math.sqrt(wt*wt+A*A),J=ht.x-Gt/tt,kt=ht.y+gt/tt,vt=D.x-A/nt,Et=D.y+wt/nt,ue=((vt-J)*A-(Et-kt)*wt)/(gt*A-Gt*wt);Ot=J+gt*ue-st.x,at=kt+Gt*ue-st.y;const lt=Ot*Ot+at*at;if(lt<=2)return new it(Ot,at);It=Math.sqrt(lt/2)}else{let tt=!1;gt>Number.EPSILON?wt>Number.EPSILON&&(tt=!0):gt<-Number.EPSILON?wt<-Number.EPSILON&&(tt=!0):Math.sign(Gt)===Math.sign(A)&&(tt=!0),tt?(Ot=-Gt,at=gt,It=Math.sqrt(S)):(Ot=gt,at=Gt,It=Math.sqrt(S/2))}return new it(Ot/It,at/It)}const ct=[];for(let st=0,ht=F.length,D=ht-1,Ot=st+1;st<ht;st++,D++,Ot++)D===ht&&(D=0),Ot===ht&&(Ot=0),ct[st]=Y(F[st],F[D],F[Ot]);const _t=[];let Pt,qt=ct.concat();for(let st=0,ht=I.length;st<ht;st++){const D=I[st];Pt=[];for(let Ot=0,at=D.length,It=at-1,gt=Ot+1;Ot<at;Ot++,It++,gt++)It===at&&(It=0),gt===at&&(gt=0),Pt[Ot]=Y(D[Ot],D[It],D[gt]);_t.push(Pt),qt=qt.concat(Pt)}for(let st=0;st<g;st++){const ht=st/g,D=d*Math.cos(ht*Math.PI/2),Ot=m*Math.sin(ht*Math.PI/2)+_;for(let at=0,It=F.length;at<It;at++){const gt=H(F[at],ct[at],Ot);pt(gt.x,gt.y,-D)}for(let at=0,It=I.length;at<It;at++){const gt=I[at];Pt=_t[at];for(let Gt=0,wt=gt.length;Gt<wt;Gt++){const A=H(gt[Gt],Pt[Gt],Ot);pt(A.x,A.y,-D)}}}const he=m+_;for(let st=0;st<W;st++){const ht=f?H(M[st],qt[st],he):M[st];v?(E.copy(C.normals[0]).multiplyScalar(ht.x),w.copy(C.binormals[0]).multiplyScalar(ht.y),P.copy(y[0]).add(E).add(w),pt(P.x,P.y,P.z)):pt(ht.x,ht.y,0)}for(let st=1;st<=h;st++)for(let ht=0;ht<W;ht++){const D=f?H(M[ht],qt[ht],he):M[ht];v?(E.copy(C.normals[st]).multiplyScalar(D.x),w.copy(C.binormals[st]).multiplyScalar(D.y),P.copy(y[st]).add(E).add(w),pt(P.x,P.y,P.z)):pt(D.x,D.y,u/h*st)}for(let st=g-1;st>=0;st--){const ht=st/g,D=d*Math.cos(ht*Math.PI/2),Ot=m*Math.sin(ht*Math.PI/2)+_;for(let at=0,It=F.length;at<It;at++){const gt=H(F[at],ct[at],Ot);pt(gt.x,gt.y,u+D)}for(let at=0,It=I.length;at<It;at++){const gt=I[at];Pt=_t[at];for(let Gt=0,wt=gt.length;Gt<wt;Gt++){const A=H(gt[Gt],Pt[Gt],Ot);v?pt(A.x,A.y+y[h-1].y,y[h-1].x+D):pt(A.x,A.y,u+D)}}}et(),ut();function et(){const st=i.length/3;if(f){let ht=0,D=W*ht;for(let Ot=0;Ot<Z;Ot++){const at=V[Ot];Ut(at[2]+D,at[1]+D,at[0]+D)}ht=h+g*2,D=W*ht;for(let Ot=0;Ot<Z;Ot++){const at=V[Ot];Ut(at[0]+D,at[1]+D,at[2]+D)}}else{for(let ht=0;ht<Z;ht++){const D=V[ht];Ut(D[2],D[1],D[0])}for(let ht=0;ht<Z;ht++){const D=V[ht];Ut(D[0]+W*h,D[1]+W*h,D[2]+W*h)}}n.addGroup(st,i.length/3-st,0)}function ut(){const st=i.length/3;let ht=0;Dt(F,ht),ht+=F.length;for(let D=0,Ot=I.length;D<Ot;D++){const at=I[D];Dt(at,ht),ht+=at.length}n.addGroup(st,i.length/3-st,1)}function Dt(st,ht){let D=st.length;for(;--D>=0;){const Ot=D;let at=D-1;at<0&&(at=st.length-1);for(let It=0,gt=h+g*2;It<gt;It++){const Gt=W*It,wt=W*(It+1),A=ht+Ot+Gt,S=ht+at+Gt,G=ht+at+wt,tt=ht+Ot+wt;Xt(A,S,G,tt)}}}function pt(st,ht,D){l.push(st),l.push(ht),l.push(D)}function Ut(st,ht,D){Vt(st),Vt(ht),Vt(D);const Ot=i.length/3,at=x.generateTopUV(n,i,Ot-3,Ot-2,Ot-1);$t(at[0]),$t(at[1]),$t(at[2])}function Xt(st,ht,D,Ot){Vt(st),Vt(ht),Vt(Ot),Vt(ht),Vt(D),Vt(Ot);const at=i.length/3,It=x.generateSideWallUV(n,i,at-6,at-3,at-2,at-1);$t(It[0]),$t(It[1]),$t(It[3]),$t(It[1]),$t(It[2]),$t(It[3])}function Vt(st){i.push(l[st*3+0]),i.push(l[st*3+1]),i.push(l[st*3+2])}function $t(st){s.push(st.x),s.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Zv(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ua[i.type]().fromJSON(i)),new xa(n,t.options)}}const Kv={generateTopUV:function(r,t,e,n,i){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new it(s,o),new it(a,l),new it(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],m=t[i*3+2],_=t[s*3],g=t[s*3+1],p=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new it(o,1-l),new it(c,1-u),new it(f,1-m),new it(_,1-p)]:[new it(a,1-l),new it(h,1-u),new it(d,1-m),new it(g,1-p)]}};function Zv(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Cc extends ke{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=t;const f=(e-t)/i,d=new L,m=new it;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){const p=s+g/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,h.push(m.x,m.y)}u+=f}for(let _=0;_<i;_++){const g=_*(n+1);for(let p=0;p<n;p++){const x=p+g,y=x,v=x+n+1,C=x+n+2,w=x+1;a.push(y,v,w),a.push(v,C,w)}}this.setIndex(a),this.setAttribute("position",new ge(l,3)),this.setAttribute("normal",new ge(c,3)),this.setAttribute("uv",new ge(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Pc extends ke{constructor(t=new so([new it(0,.5),new it(-.5,-.5),new it(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],s=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ge(i,3)),this.setAttribute("normal",new ge(s,3)),this.setAttribute("uv",new ge(o,2));function c(h){const u=i.length/3,f=h.extractPoints(e);let d=f.shape;const m=f.holes;Yi.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){const x=m[g];Yi.isClockWise(x)===!0&&(m[g]=x.reverse())}const _=Yi.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){const x=m[g];d=d.concat(x)}for(let g=0,p=d.length;g<p;g++){const x=d[g];i.push(x.x,x.y,0),s.push(0,0,1),o.push(x.x,x.y)}for(let g=0,p=_.length;g<p;g++){const x=_[g],y=x[0]+u,v=x[1]+u,C=x[2]+u;n.push(y,v,C),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return $v(e,t)}static fromJSON(t,e){const n=[];for(let i=0,s=t.shapes.length;i<s;i++){const o=e[t.shapes[i]];n.push(o)}return new Pc(n,t.curveSegments)}}function $v(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,n=r.length;e<n;e++){const i=r[e];t.shapes.push(i.uuid)}else t.shapes.push(r.uuid);return t}class In extends ke{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new L,f=new L,d=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const x=[],y=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let C=0;C<=e;C++){const w=C/e;u.x=-t*Math.cos(i+w*s)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(i+w*s)*Math.sin(o+y*a),m.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),g.push(w+v,1-y),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const y=h[p][x+1],v=h[p][x],C=h[p+1][x],w=h[p+1][x+1];(p!==0||o>0)&&d.push(y,v,w),(p!==n-1||l<Math.PI)&&d.push(v,C,w)}this.setIndex(d),this.setAttribute("position",new ge(m,3)),this.setAttribute("normal",new ge(_,3)),this.setAttribute("uv",new ge(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new In(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ji extends ke{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new L,u=new L,f=new L;for(let d=0;d<=n;d++)for(let m=0;m<=i;m++){const _=m/i*s,g=d/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(_),u.y=(t+e*Math.cos(g))*Math.sin(_),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(m/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=i;m++){const _=(i+1)*d+m-1,g=(i+1)*(d-1)+m-1,p=(i+1)*(d-1)+m,x=(i+1)*d+m;o.push(_,g,x),o.push(g,p,x)}this.setIndex(o),this.setAttribute("position",new ge(a,3)),this.setAttribute("normal",new ge(l,3)),this.setAttribute("uv",new ge(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ji(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Xr extends ke{constructor(t=new Pf(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,l=new L,c=new it;let h=new L;const u=[],f=[],d=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new ge(u,3)),this.setAttribute("normal",new ge(f,3)),this.setAttribute("uv",new ge(d,2));function _(){for(let y=0;y<e;y++)g(y);g(s===!1?e:0),x(),p()}function g(y){h=t.getPointAt(y/e,h);const v=o.normals[y],C=o.binormals[y];for(let w=0;w<=i;w++){const E=w/i*Math.PI*2,P=Math.sin(E),b=-Math.cos(E);l.x=b*v.x+P*C.x,l.y=b*v.y+P*C.y,l.z=b*v.z+P*C.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let v=1;v<=i;v++){const C=(i+1)*(y-1)+(v-1),w=(i+1)*y+(v-1),E=(i+1)*y+v,P=(i+1)*(y-1)+v;m.push(C,w,P),m.push(w,E,P)}}function x(){for(let y=0;y<=e;y++)for(let v=0;v<=i;v++)c.x=y/e,c.y=v/i,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Xr(new ua[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Jv extends Ye{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class At extends ei{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ef,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class we extends At{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new it(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}function Vo(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Qv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function tx(r){function t(i,s){return r[i]-r[s]}const e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function uu(r,t,e){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=e[s]*t;for(let l=0;l!==t;++l)i[o++]=r[a+l]}return i}function Uf(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(t.push(s.time),e.push.apply(e,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(t.push(s.time),o.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(t.push(s.time),e.push(o)),s=r[i++];while(s!==void 0)}class ro{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=s)){const a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ex extends ro{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kc,endingEnd:Kc}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Zc:s=t,a=2*e-n;break;case $c:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Zc:o=t,l=2*n-e;break;case $c:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(i-e),_=m*m,g=_*m,p=-f*g+2*f*_-f*m,x=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*m+1,y=(-1-d)*g+(1.5+d)*_+.5*m,v=d*g-d*_;for(let C=0;C!==a;++C)s[C]=p*o[h+C]+x*o[c+C]+y*o[l+C]+v*o[u+C];return s}}class nx extends ro{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}}class ix extends ro{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class di{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vo(e,this.TimeBufferType),this.values=Vo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Vo(t.times,Array),values:Vo(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ix(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new nx(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ex(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case jr:e=this.InterpolantFactoryMethodDiscrete;break;case Kr:e=this.InterpolantFactoryMethodLinear;break;case Ta:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return jr;case this.InterpolantFactoryMethodLinear:return Kr;case this.InterpolantFactoryMethodSmooth:return Ta}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Qv(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ta,s=t.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{const u=a*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){const _=e[u+m];if(_!==e[f+m]||_!==e[d+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=Kr;class mr extends di{constructor(t,e,n){super(t,e,n)}}mr.prototype.ValueTypeName="bool";mr.prototype.ValueBufferType=Array;mr.prototype.DefaultInterpolation=jr;mr.prototype.InterpolantFactoryMethodLinear=void 0;mr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ff extends di{}Ff.prototype.ValueTypeName="color";class lr extends di{}lr.prototype.ValueTypeName="number";class sx extends ro{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let h=c+a;c!==h;c+=4)Zi.slerpFlat(s,0,o,c-a,o,c,l);return s}}class cr extends di{InterpolantFactoryMethodLinear(t){return new sx(this.times,this.values,this.getValueSize(),t)}}cr.prototype.ValueTypeName="quaternion";cr.prototype.InterpolantFactoryMethodSmooth=void 0;class gr extends di{constructor(t,e,n){super(t,e,n)}}gr.prototype.ValueTypeName="string";gr.prototype.ValueBufferType=Array;gr.prototype.DefaultInterpolation=jr;gr.prototype.InterpolantFactoryMethodLinear=void 0;gr.prototype.InterpolantFactoryMethodSmooth=void 0;class hr extends di{}hr.prototype.ValueTypeName="vector";class rx{constructor(t="",e=-1,n=[],i=Cd){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Gn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(ax(n[o]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,o=n.length;s!==o;++s)e.push(di.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=tx(l);l=uu(l,1,h),c=uu(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new lr(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,m,_){if(d.length!==0){const g=[],p=[];Uf(d,g,p,m),g.length!==0&&_.push(new u(f,g,p))}},i=[],s=t.name||"default",o=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let _=0;_<f[m].morphTargets.length;_++)d[f[m].morphTargets[_]]=-1;for(const _ in d){const g=[],p=[];for(let x=0;x!==f[m].morphTargets.length;++x){const y=f[m];g.push(y.time),p.push(y.morphTarget===_?1:0)}i.push(new lr(".morphTargetInfluence["+_+"]",g,p))}l=d.length*o}else{const d=".bones["+e[u].name+"]";n(hr,d+".position",f,"pos",i),n(cr,d+".quaternion",f,"rot",i),n(hr,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ox(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return lr;case"vector":case"vector2":case"vector3":case"vector4":return hr;case"color":return Ff;case"quaternion":return cr;case"bool":case"boolean":return mr;case"string":return gr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function ax(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=ox(r.type);if(r.times===void 0){const e=[],n=[];Uf(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const Wi={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Of{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}}const lx=new Of;class _r{constructor(t){this.manager=t!==void 0?t:lx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}_r.DEFAULT_MATERIAL_NAME="__DEFAULT";const yi={};class cx extends Error{constructor(t,e){super(t),this.response=e}}class kf extends _r{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Wi.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(yi[t]!==void 0){yi[t].push({onLoad:e,onProgress:n,onError:i});return}yi[t]=[],yi[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=yi[t],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0;let _=0;const g=new ReadableStream({start(p){x();function x(){u.read().then(({done:y,value:v})=>{if(y)p.close();else{_+=v.byteLength;const C=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:d});for(let w=0,E=h.length;w<E;w++){const P=h[w];P.onProgress&&P.onProgress(C)}p.enqueue(v),x()}},y=>{p.error(y)})}}});return new Response(g)}else throw new cx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{Wi.add(t,c);const h=yi[t];delete yi[t];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=yi[t];if(h===void 0)throw this.manager.itemError(t),c;delete yi[t];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class hx extends _r{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Wi.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=Zr("img");function l(){h(),Wi.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(u){h(),i&&i(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class Bf extends _r{constructor(t){super(t)}load(t,e,n,i){const s=new je,o=new hx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class ya extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class zf extends ya{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const rl=new ie,fu=new L,du=new L;class Lc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mc,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;fu.setFromMatrixPosition(t.matrixWorld),e.position.copy(fu),du.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(du),e.updateMatrixWorld(),rl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ux extends Lc{constructor(){super(new mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=rr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Ic extends ya{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new ux}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const pu=new ie,Dr=new L,ol=new L;class fx extends Lc{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new ye(2,1,1,1),new ye(0,1,1,1),new ye(3,1,1,1),new ye(1,1,1,1),new ye(3,0,1,1),new ye(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Dr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Dr),ol.copy(n.position),ol.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ol),n.updateMatrixWorld(),i.makeTranslation(-Dr.x,-Dr.y,-Dr.z),pu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pu)}}class wn extends ya{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new fx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class dx extends Lc{constructor(){super(new ga(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vf extends ya{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new dx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class qr{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class px extends _r{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Wi.get(t);if(o!==void 0){if(s.manager.itemStart(t),o.then){o.then(c=>{e&&e(c),s.manager.itemEnd(t)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Wi.add(t,c),e&&e(c),s.manager.itemEnd(t),c}).catch(function(c){i&&i(c),Wi.remove(t),s.manager.itemError(t),s.manager.itemEnd(t)});Wi.add(t,l),s.manager.itemStart(t)}}class Hf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=mu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=mu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function mu(){return performance.now()}const Dc="\\[\\]\\.:\\/",mx=new RegExp("["+Dc+"]","g"),Nc="[^"+Dc+"]",gx="[^"+Dc.replace("\\.","")+"]",_x=/((?:WC+[\/:])*)/.source.replace("WC",Nc),vx=/(WCOD+)?/.source.replace("WCOD",gx),xx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nc),yx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nc),Mx=new RegExp("^"+_x+vx+xx+yx+"$"),Sx=["material","materials","bones","map"];class bx{constructor(t,e,n){const i=n||Pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Pe{constructor(t,e,n){this.path=e,this.parsedPath=n||Pe.parseTrackName(e),this.node=Pe.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Pe.Composite(t,e,n):new Pe(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(mx,"")}static parseTrackName(t){const e=Mx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Sx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=Pe.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[i];if(o===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Pe.Composite=bx;Pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pe.prototype.GetterByBindingType=[Pe.prototype._getValue_direct,Pe.prototype._getValue_array,Pe.prototype._getValue_arrayElement,Pe.prototype._getValue_toArray];Pe.prototype.SetterByBindingTypeAndVersioning=[[Pe.prototype._setValue_direct,Pe.prototype._setValue_direct_setNeedsUpdate,Pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_array,Pe.prototype._setValue_array_setNeedsUpdate,Pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_arrayElement,Pe.prototype._setValue_arrayElement_setNeedsUpdate,Pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_fromArray,Pe.prototype._setValue_fromArray_setNeedsUpdate,Pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const gu=new ie;class fa{constructor(t,e,n=0,i=1/0){this.ray=new dr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new yc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return gu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gu),this}intersectObject(t,e=!0,n=[]){return oc(t,this,n,e),n.sort(_u),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)oc(t[i],this,n,e);return n.sort(_u),n}}function _u(r,t){return r.distance-t.distance}function oc(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)oc(s[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hc);class Ts{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Tx=new ga(-1,1,1,-1,0,1);class wx extends ke{constructor(){super(),this.setAttribute("position",new ge([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ge([0,2,0,0,2,0],2))}}const Ex=new wx;class no{constructor(t){this._mesh=new ot(Ex,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Tx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Gf extends Ts{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ht}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const Uc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Wf extends Ts{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ye?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ki.clone(t.uniforms),this.material=new Ye({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new no(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class vu extends Ts{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class Ax extends Ts{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Rx{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new it);this._width=n.width,this._height=n.height,e=new Rn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Hn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Wf(Uc),this.copyPass.material.blending=ci,this.clock=new Hf}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}vu!==void 0&&(o instanceof vu?n=!0:o instanceof Ax&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new it);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const Cx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ht(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ur extends Ts{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new it(t.x,t.y):new it(256,256),this.clearColor=new Ht(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Rn(s,o,{type:Hn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new Rn(s,o,{type:Hn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new Rn(s,o,{type:Hn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}const a=Cx;this.highPassUniforms=Ki.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ye({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new it(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Uc;this.copyUniforms=Ki.clone(h.uniforms),this.blendMaterial=new Ye({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:xs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ht,this.oldClearAlpha=1,this.basic=new ai,this.fsQuad=new no(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new it(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=ur.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ur.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ye({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new it(.5,.5)},direction:{value:new it(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Ye({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ur.BlurDirectionX=new it(1,0);ur.BlurDirectionY=new it(0,1);const Px={name:"AfterimageShader",uniforms:{damp:{value:.96},tOld:{value:null},tNew:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float damp;

		uniform sampler2D tOld;
		uniform sampler2D tNew;

		varying vec2 vUv;

		vec4 when_gt( vec4 x, float y ) {

			return max( sign( x - y ), 0.0 );

		}

		void main() {

			vec4 texelOld = texture2D( tOld, vUv );
			vec4 texelNew = texture2D( tNew, vUv );

			texelOld *= damp * when_gt( texelOld, 0.1 );

			gl_FragColor = max(texelNew, texelOld);

		}`};class Lx extends Ts{constructor(t=.96){super(),this.shader=Px,this.uniforms=Ki.clone(this.shader.uniforms),this.uniforms.damp.value=t,this.textureComp=new Rn(window.innerWidth,window.innerHeight,{magFilter:rn,type:Hn}),this.textureOld=new Rn(window.innerWidth,window.innerHeight,{magFilter:rn,type:Hn}),this.compFsMaterial=new Ye({uniforms:this.uniforms,vertexShader:this.shader.vertexShader,fragmentShader:this.shader.fragmentShader}),this.compFsQuad=new no(this.compFsMaterial);const e=Uc;this.copyFsMaterial=new Ye({uniforms:Ki.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,blending:ci,depthTest:!1,depthWrite:!1}),this.copyFsQuad=new no(this.copyFsMaterial)}render(t,e,n){this.uniforms.tOld.value=this.textureOld.texture,this.uniforms.tNew.value=n.texture,t.setRenderTarget(this.textureComp),this.compFsQuad.render(t),this.copyFsQuad.material.uniforms.tDiffuse.value=this.textureComp.texture,this.renderToScreen?(t.setRenderTarget(null),this.copyFsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(),this.copyFsQuad.render(t));const i=this.textureOld;this.textureOld=this.textureComp,this.textureComp=i}setSize(t,e){this.textureComp.setSize(t,e),this.textureOld.setSize(t,e)}dispose(){this.textureComp.dispose(),this.textureOld.dispose(),this.compFsMaterial.dispose(),this.copyFsMaterial.dispose(),this.compFsQuad.dispose(),this.copyFsQuad.dispose()}}const Ix={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Dx extends Ts{constructor(){super();const t=Ix;this.uniforms=Ki.clone(t.uniforms),this.material=new Jv({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new no(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},xe.getTransfer(this._outputColorSpace)===Re&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ku?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Bu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===zu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===uc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Vu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Hu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Nx={uniforms:{tDiffuse:{value:null},time:{value:0},res:{value:new it(1,1)},distort:{value:.22},chroma:{value:.012},grain:{value:.07},flash:{value:0},damage:{value:0},interference:{value:0},exposure:{value:1},blackout:{value:0},saturation:{value:.75},sharpen:{value:.35}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float time, distort, chroma, grain, flash, damage, interference, exposure, blackout, saturation, sharpen;
    uniform vec2 res; varying vec2 vUv;
    float hash(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p+45.32); return fract(p.x*p.y); }
    vec2 barrel(vec2 uv, float k){ vec2 c = uv-0.5; float r2 = dot(c,c); float f = 1.0 + k*r2 + k*0.6*r2*r2; return 0.5 + c*f/(1.0+k*0.32); }
    vec3 samp(vec2 uv){ return texture2D(tDiffuse, uv).rgb; }
    void main(){
      vec2 uv = vUv;
      float tf = floor(time*24.0);
      // interferência eletromagnética: linhas deslocadas, típica de sensor CMOS perto de campo forte
      float band = step(1.0 - interference*0.45, hash(vec2(floor(uv.y*40.0), tf)));
      uv.x += (hash(vec2(floor(uv.y*res.y/2.0), tf)) - 0.5) * 0.06 * interference * band;
      uv.y += (hash(vec2(tf, 3.0)) - 0.5) * 0.01 * interference * step(0.92, hash(vec2(tf, 7.0)));
      vec2 d = barrel(uv, distort);
      vec2 c = d - 0.5;
      float ca = chroma * (0.3 + dot(c,c)*4.0) + interference*0.012*band;
      vec3 col;
      col.r = samp(d + c*ca).r;
      col.g = samp(d).g;
      col.b = samp(d - c*ca).b;
      // nitidez artificial da câmera (halo de sharpen digital)
      vec2 px = 1.0/res;
      vec3 blur = (samp(d+vec2(px.x,0.0)) + samp(d-vec2(px.x,0.0)) + samp(d+vec2(0.0,px.y)) + samp(d-vec2(0.0,px.y)))*0.25;
      col += (col - blur) * sharpen;
      if (d.x<0.0||d.x>1.0||d.y<0.0||d.y>1.0) col = vec3(0.0);
      col *= exposure;
      float lum = dot(col, vec3(0.299,0.587,0.114));
      // sensor em baixa luz: cor some nas sombras
      float sat = saturation * mix(0.15, 1.0, smoothstep(0.0, 0.3, lum));
      col = mix(vec3(lum), col, sat);
      col += vec3(-0.006, 0.004, 0.006) * (1.0 - smoothstep(0.0, 0.15, lum));
      // ruído de sensor dependente da luminância
      float g = hash(vUv*res + fract(time*13.17)*311.0) - 0.5;
      float g2 = hash(floor(vUv*res*0.5) + fract(time*7.31)*97.0) - 0.5;
      float gAmt = grain * (0.35 + 1.4*(1.0 - smoothstep(0.0, 0.45, lum)));
      col += vec3(g*0.65 + g2*0.35) * gAmt;
      col += (vec3(hash(vUv*res+time), hash(vUv*res+time*1.37), hash(vUv*res+time*2.11)) - 0.5) * gAmt * 0.35;
      // piso preto levantado (compressão de vídeo)
      col = max(col, vec3(0.008));
      // vinheta da lente grande-angular
      float v = smoothstep(1.05, 0.32, length(c*vec2(1.25, 1.0))*1.25);
      col *= mix(0.25, 1.0, v);
      // dano: borda vermelha pulsante + dessaturação
      float e = smoothstep(0.2, 0.75, length(c*vec2(1.2,1.0)));
      col = mix(col, vec3(lum*0.6, 0.0, 0.0) + vec3(0.16,0.0,0.0)*e, clamp(damage*e*1.3, 0.0, 0.85));
      // barras de interferência
      col += vec3(band * interference * 0.08 * hash(vec2(tf, floor(uv.y*200.0))));
      float roll = fract(vUv.y*1.5 - time*0.7);
      col *= 1.0 - interference * 0.25 * smoothstep(0.0, 0.03, roll) * smoothstep(0.08, 0.03, roll);
      col = mix(col, vec3(1.0, 0.98, 0.95), flash);
      col *= 1.0 - blackout;
      gl_FragColor = vec4(col, 1.0);
    }`};function Ux(r,t,e){const n=r.getSize(new it),i=new Rx(r);i.addPass(new Gf(t,e));const s=new Lx(.38);i.addPass(s);const o=new ur(new it(n.x/2,n.y/2),.4,.55,.85);i.addPass(o),i.addPass(new Dx);const a=new Wf(Nx);i.addPass(a);const l=a.uniforms;return{composer:i,u:l,after:s,bloom:o,setSize(h,u,f){i.setPixelRatio(f),i.setSize(h,u),l.res.value.set(h*f,u*f)},render(h,u){l.time.value=u,i.render(h)}}}class Fx{constructor(){this.ctx=null,this.loops=new Set}init(){if(this.ctx)return;const t=this.ctx=new(window.AudioContext||window.webkitAudioContext);this.out=t.createDynamicsCompressor(),this.out.threshold.value=-14,this.out.ratio.value=4,this.out.attack.value=.003,this.out.release.value=.25,this.out.connect(t.destination),this.master=t.createGain(),this.master.gain.value=.9,this.deaf=t.createBiquadFilter(),this.deaf.type="lowpass",this.deaf.frequency.value=2e4,this.master.connect(this.deaf),this.deaf.connect(this.out),this.sfx=t.createGain(),this.sfx.connect(this.master),this.amb=t.createGain(),this.amb.connect(this.master),this.verb=t.createConvolver(),this.verb.buffer=this.impulse(2.2,2.6),this.verbIn=t.createGain(),this.verbIn.gain.value=.35,this.verbIn.connect(this.verb),this.verb.connect(this.master),this.white=this.noise("white"),this.pink=this.noise("pink"),this.brown=this.noise("brown"),this.curveSoft=this.shaper(3),this.curveHard=this.shaper(30),this.startAmbience()}impulse(t,e){const n=this.ctx,i=n.sampleRate*t,s=n.createBuffer(2,i,n.sampleRate);for(let o=0;o<2;o++){const a=s.getChannelData(o);for(let l=0;l<i;l++)a[l]=(Math.random()*2-1)*Math.pow(1-l/i,e)*(l<60?l/60:1)}return s}noise(t){const e=this.ctx,n=e.sampleRate*3,i=e.createBuffer(1,n,e.sampleRate),s=i.getChannelData(0);let o=0,a=0,l=0,c=0,h=0,u=0,f=0,d=0;for(let m=0;m<n;m++){const _=Math.random()*2-1;t==="white"?s[m]=_:t==="pink"?(o=.99886*o+_*.0555179,a=.99332*a+_*.0750759,l=.969*l+_*.153852,c=.8665*c+_*.3104856,h=.55*h+_*.5329522,u=-.7616*u-_*.016898,s[m]=(o+a+l+c+h+u+f+_*.5362)*.11,f=_*.115926):(d=(d+.02*_)/1.02,s[m]=d*3.5)}return i}shaper(t){const n=new Float32Array(2048);for(let i=0;i<2048;i++){const s=i*2/2048-1;n[i]=(1+t)*s/(1+t*Math.abs(s))}return n}get t(){return this.ctx.currentTime}dest(t,e={}){const n=this.ctx,i=n.createGain();if(i.gain.value=e.gain??1,t){const o=n.createPanner();o.panningModel="HRTF",o.distanceModel="inverse",o.refDistance=e.ref??1.2,o.rolloffFactor=e.rolloff??1.3,o.maxDistance=60,o.positionX.value=t.x,o.positionY.value=t.y,o.positionZ.value=t.z,i.connect(o),o.connect(e.bus||this.sfx),i.panner=o}else i.connect(e.bus||this.sfx);const s=n.createGain();return s.gain.value=e.verb??.5,i.connect(s),s.connect(this.verbIn),i}src(t,e=!1,n=1){const i=this.ctx.createBufferSource();return i.buffer=t,i.loop=e,i.playbackRate.value=n,e||(i.loopStart=0),i}filt(t,e,n=1){const i=this.ctx.createBiquadFilter();return i.type=t,i.frequency.value=e,i.Q.value=n,i}gainEnv(t,e,n,i,s,o=0){const a=t.gain;a.cancelScheduledValues(e),a.setValueAtTime(1e-4,e),a.linearRampToValueAtTime(i,e+n),a.exponentialRampToValueAtTime(Math.max(1e-4,o||1e-4),e+n+s)}noiseBurst(t,{t:e=this.t,dur:n=.1,a:i=.002,peak:s=1,type:o="bandpass",f:a=1e3,q:l=1,buf:c=this.white,rate:h=1,fEnd:u}={}){const f=this.src(c,!1,h),d=this.filt(o,a,l),m=this.ctx.createGain();return u&&d.frequency.exponentialRampToValueAtTime(u,e+n),f.connect(d),d.connect(m),m.connect(t),this.gainEnv(m,e,i,s,n),f.start(e,Math.random()*2),f.stop(e+i+n+.05),m}tone(t,{t:e=this.t,type:n="sine",f:i=100,fEnd:s,dur:o=.2,a=.005,peak:l=.5}={}){const c=this.ctx.createOscillator(),h=this.ctx.createGain();return c.type=n,c.frequency.setValueAtTime(i,e),s&&c.frequency.exponentialRampToValueAtTime(s,e+o),c.connect(h),h.connect(t),this.gainEnv(h,e,a,l,o),c.start(e),c.stop(e+a+o+.05),c}setListener(t){if(!this.ctx)return;const e=this.ctx.listener,n=t.position,i=this.t,s=t.userData.fwd,o=t.userData.up;e.positionX?(e.positionX.setTargetAtTime(n.x,i,.02),e.positionY.setTargetAtTime(n.y,i,.02),e.positionZ.setTargetAtTime(n.z,i,.02),e.forwardX.setTargetAtTime(s.x,i,.02),e.forwardY.setTargetAtTime(s.y,i,.02),e.forwardZ.setTargetAtTime(s.z,i,.02),e.upX.setTargetAtTime(o.x,i,.02),e.upY.setTargetAtTime(o.y,i,.02),e.upZ.setTargetAtTime(o.z,i,.02)):(e.setPosition(n.x,n.y,n.z),e.setOrientation(s.x,s.y,s.z,o.x,o.y,o.z))}startAmbience(){const t=this.ctx,e=this.src(this.pink,!0);this.rainLP=this.filt("lowpass",9e3,.3);const n=this.filt("highpass",400,.5);this.rainGain=t.createGain(),this.rainGain.gain.value=.35,e.connect(n),n.connect(this.rainLP),this.rainLP.connect(this.rainGain),this.rainGain.connect(this.amb),e.start();const i=this.src(this.white,!0,.7),s=this.filt("bandpass",2600,.9);this.roofGain=t.createGain(),this.roofGain.gain.value=0,i.connect(s),s.connect(this.roofGain),this.roofGain.connect(this.amb),i.start();const o=this.src(this.brown,!0),a=this.filt("bandpass",300,.6);this.windGain=t.createGain(),this.windGain.gain.value=.25;const l=t.createOscillator(),c=t.createGain();l.frequency.value=.07,c.gain.value=180,l.connect(c),c.connect(a.frequency),l.start(),o.connect(a),a.connect(this.windGain),this.windGain.connect(this.amb),o.start(),this.drone=t.createGain(),this.drone.gain.value=0;const h=this.filt("lowpass",220,.7);this.drone.connect(h),h.connect(this.amb);for(const g of[41.2,43.65,61.7,82.4]){const p=t.createOscillator();p.type="sawtooth",p.frequency.value=g,p.detune.value=(Math.random()-.5)*14;const x=t.createGain();x.gain.value=.12,p.connect(x),x.connect(this.drone),p.start()}this.whine=t.createGain(),this.whine.gain.value=0;const u=this.src(this.white,!0),f=this.filt("bandpass",3100,30),d=t.createOscillator();d.frequency.value=2960;const m=t.createGain();m.gain.value=.02,d.connect(m),m.connect(this.whine),d.start(),u.connect(f),f.connect(this.whine),this.whine.connect(this.amb),u.start(),this.hum=t.createGain(),this.hum.gain.value=0;for(const g of[60,120,180]){const p=t.createOscillator();p.frequency.value=g;const x=t.createGain();x.gain.value=.05/(g/60),p.connect(x),x.connect(this.hum),p.start()}this.hum.connect(this.amb);const _=this.src(this.white,!0);this.breathF=this.filt("bandpass",1100,.8),this.breathG=t.createGain(),this.breathG.gain.value=0,_.connect(this.breathF),this.breathF.connect(this.breathG),this.breathG.connect(this.sfx),_.start(),this.breathPhase=0,this.heartT=0}update(t,{inside:e=0,tension:n=0,fear:i=0,exertion:s=0,lights:o=!1,basement:a=!1}){if(!this.ctx)return;const l=this.t,c=a?.04:(1-e)*.42+e*.08;this.rainGain.gain.setTargetAtTime(c,l,.4),this.rainLP.frequency.setTargetAtTime(a?300:9e3-e*7800,l,.4),this.roofGain.gain.setTargetAtTime(a?.004:e*.03,l,.4),this.windGain.gain.setTargetAtTime(a?.05:.22-e*.12,l,.5),this.drone.gain.setTargetAtTime(.05+n*.55,l,.8),this.whine.gain.setTargetAtTime(Math.max(0,n-.55)*.18,l,.5),this.hum.gain.setTargetAtTime(o?.35:0,l,.1);const h=.25+s*.55+i*.45;this.breathPhase+=t*h;const u=this.breathPhase%1,f=u<.38,d=.015+s*.09+i*.06,m=f?Math.sin(u/.38*Math.PI):Math.sin((u-.38)/.62*Math.PI)*.8;this.breathG.gain.setTargetAtTime(Math.max(0,m)*d,l,.05),this.breathF.frequency.setTargetAtTime(f?1500:900,l,.1);const _=62+i*90+s*40;if(this.heartT-=t,this.heartT<=0){this.heartT=60/_;const g=Math.max(0,i-.25)*.9+s*.15;if(g>.03){const p=this.dest(null,{verb:0});this.tone(p,{f:52,fEnd:38,dur:.12,peak:g}),this.tone(p,{t:l+.18,f:48,fEnd:36,dur:.1,peak:g*.6})}}}footstep(t,e,n=1,i=!1){if(!this.ctx)return;const s=this.dest(e,{verb:t==="concrete"?.7:.35,gain:n}),o=this.t,a={wood:{f:500,q:1.2,thump:110,dur:.09},tile:{f:2400,q:.8,thump:160,dur:.05},concrete:{f:1500,q:.6,thump:90,dur:.07},mud:{f:350,q:.7,thump:70,dur:.16},porch:{f:420,q:1.5,thump:95,dur:.11}}[t]||{f:800,q:1,thump:100,dur:.07},l=i?1.5:1;this.noiseBurst(s,{t:o,dur:a.dur,f:a.f*(.85+Math.random()*.3),q:a.q,peak:.35*l}),this.noiseBurst(s,{t:o+.03,dur:a.dur*.7,f:a.f*1.6,q:1,peak:.12*l}),this.tone(s,{t:o,f:a.thump,fEnd:a.thump*.5,dur:.08,peak:.35*l}),t==="mud"&&this.noiseBurst(s,{t:o+.06,dur:.12,type:"lowpass",f:900,peak:.25}),(t==="wood"||t==="porch")&&Math.random()<.18&&this.creak(e,.25+Math.random()*.3,.25)}creak(t,e=.6,n=.5,i=1){if(!this.ctx)return;const s=this.ctx,o=this.t,a=this.dest(t,{verb:.6,gain:n}),l=s.createOscillator();l.type="sawtooth";const c=(90+Math.random()*90)*i;l.frequency.setValueAtTime(c,o);for(let g=1;g<8;g++)l.frequency.linearRampToValueAtTime(c*(.7+Math.random()*.8),o+e*g/8);const h=s.createOscillator();h.type="square",h.frequency.value=18+Math.random()*30;const u=s.createGain();u.gain.value=.5;const f=s.createGain();f.gain.value=.5,h.connect(u),u.connect(f.gain);const d=this.filt("bandpass",900*i,3),m=this.filt("bandpass",2200*i,5),_=s.createGain();l.connect(f),f.connect(d),f.connect(m),d.connect(_),m.connect(_),_.connect(a),_.gain.setValueAtTime(1e-4,o),_.gain.linearRampToValueAtTime(.5,o+.05),_.gain.setValueAtTime(.5,o+e*.8),_.gain.exponentialRampToValueAtTime(1e-4,o+e),l.start(o),h.start(o),l.stop(o+e+.1),h.stop(o+e+.1)}doorOpen(t){this.latch(t),this.creak(t,1.1,.55,.8)}latch(t){const e=this.dest(t,{verb:.4}),n=this.t;this.noiseBurst(e,{t:n,dur:.03,f:3500,q:2,peak:.6}),this.noiseBurst(e,{t:n+.06,dur:.04,f:2500,q:3,peak:.4})}doorSlam(t,e=1){const n=this.dest(t,{verb:1,gain:e}),i=this.t;this.noiseBurst(n,{t:i,dur:.35,type:"lowpass",f:1800,fEnd:200,peak:1.2,buf:this.brown}),this.tone(n,{t:i,f:70,fEnd:35,dur:.4,peak:.9}),this.noiseBurst(n,{t:i,dur:.05,f:3e3,q:1,peak:.6})}knock(t,e=3){for(let n=0;n<e;n++){const i=this.t+n*.28+Math.random()*.05,s=this.dest(t,{verb:.8});this.tone(s,{t:i,f:140,fEnd:70,dur:.12,peak:.9}),this.noiseBurst(s,{t:i,dur:.05,f:700,q:2,peak:.6})}}gunshot(t){const e=this.t,n=this.dest(t,{verb:1.4,gain:1.4});this.noiseBurst(n,{t:e,dur:.012,a:5e-4,type:"highpass",f:1e3,peak:2.5}),this.noiseBurst(n,{t:e,dur:.25,a:.001,type:"lowpass",f:6e3,fEnd:300,peak:2,buf:this.white}),this.tone(n,{t:e,f:90,fEnd:30,dur:.3,a:.001,peak:1.6});const i=this.src(this.white),s=this.ctx.createWaveShaper();s.curve=this.curveHard;const o=this.ctx.createGain();i.connect(s),s.connect(o),o.connect(n),this.gainEnv(o,e,5e-4,.6,.08),i.start(e),i.stop(e+.15),this.deaf.frequency.cancelScheduledValues(e),this.deaf.frequency.setValueAtTime(900,e+.05),this.deaf.frequency.exponentialRampToValueAtTime(2e4,e+2.2);const a=this.dest(null,{verb:0});this.tone(a,{t:e+.05,f:4100+Math.random()*400,dur:2.4,a:.05,peak:.05})}dryFire(){const t=this.dest(null,{verb:.2});this.noiseBurst(t,{dur:.03,f:4e3,q:3,peak:.5})}reloadClick(t){const e=this.dest(null,{verb:.2}),n=this.t;if(t===0)this.noiseBurst(e,{t:n,dur:.05,f:2e3,q:2,peak:.6}),this.tone(e,{t:n,f:900,dur:.05,peak:.1});else if(t===1)for(let i=0;i<6;i++)this.noiseBurst(e,{t:n+i*.04,dur:.02,f:5e3,q:4,peak:.25});else this.noiseBurst(e,{t:n,dur:.04,f:1800,q:2,peak:.7}),this.noiseBurst(e,{t:n+.12,dur:.03,f:3500,q:3,peak:.4})}cameraFlash(){const t=this.dest(null,{verb:.1}),e=this.t;this.noiseBurst(t,{t:e,dur:.02,f:6e3,q:2,peak:.6}),this.tone(t,{t:e,f:1200,dur:.06,peak:.08,type:"square"})}flashCharge(t){const e=this.dest(null,{verb:0}),n=this.t;this.tone(e,{t:n+.1,f:1800,fEnd:9500,dur:t,a:.2,peak:.018})}pickup(){const t=this.dest(null,{verb:.2});this.noiseBurst(t,{dur:.12,f:1800,q:.7,peak:.3})}switchClick(t){const e=this.dest(t,{verb:.3});this.noiseBurst(e,{dur:.02,f:3e3,q:3,peak:.6})}flashlightClick(){const t=this.dest(null,{verb:.1});this.noiseBurst(t,{dur:.015,f:4500,q:4,peak:.35})}powerOn(t){const e=this.dest(t,{verb:1}),n=this.t;this.noiseBurst(e,{t:n,dur:.2,type:"lowpass",f:600,peak:1,buf:this.brown}),this.tone(e,{t:n,f:60,dur:1.5,peak:.25,type:"sawtooth"});for(let i=0;i<5;i++)this.noiseBurst(e,{t:n+.1+i*.09,dur:.02,f:5e3,q:2,peak:.3})}powerOff(){const t=this.dest(null,{verb:1}),e=this.t;this.tone(t,{t:e,f:120,fEnd:20,dur:1.2,peak:.4,type:"sawtooth"}),this.noiseBurst(t,{t:e,dur:.3,f:3e3,q:1,peak:.5})}bulbPop(t){const e=this.dest(t,{verb:.7});this.noiseBurst(e,{dur:.08,f:5e3,q:.5,peak:1}),this.noiseBurst(e,{t:this.t+.05,dur:.4,f:7e3,q:1,peak:.2})}glass(t){const e=this.dest(t,{verb:1}),n=this.t;this.noiseBurst(e,{t:n,dur:.15,type:"highpass",f:3e3,peak:1});for(let i=0;i<14;i++)this.tone(e,{t:n+Math.random()*.6,f:3e3+Math.random()*5e3,dur:.05+Math.random()*.1,peak:.08})}scream(t,{pitch:e=1,dur:n=1.4,vol:i=1,rough:s=1}={}){if(!this.ctx)return;const o=this.ctx,a=this.t,l=this.dest(t,{verb:1.1,gain:i,ref:2}),c=o.createGain();c.gain.value=.5;const h=o.createWaveShaper();h.curve=s>.5?this.curveHard:this.curveSoft;const u=o.createOscillator(),f=o.createGain();u.frequency.value=7+Math.random()*5,f.gain.value=25*e,u.connect(f);for(let g=0;g<3;g++){const p=o.createOscillator();p.type="sawtooth",p.frequency.setValueAtTime(300*e,a),p.frequency.exponentialRampToValueAtTime((700+g*13)*e,a+.12),p.frequency.exponentialRampToValueAtTime(520*e,a+n),p.detune.value=(g-1)*25,f.connect(p.frequency),p.connect(c),p.start(a),p.stop(a+n+.1)}const d=this.src(this.white),m=o.createGain();m.gain.value=.35,d.connect(m),m.connect(c),d.start(a,Math.random()),d.stop(a+n+.1);const _=o.createGain();c.connect(h);for(const[g,p,x]of[[850,6,1],[1250,8,.7],[2700,10,.4],[3500,10,.25]]){const y=this.filt("bandpass",g*(.9+e*.1),p),v=o.createGain();v.gain.value=x,h.connect(y),y.connect(v),v.connect(_)}_.connect(l),_.gain.setValueAtTime(1e-4,a),_.gain.exponentialRampToValueAtTime(1.6,a+.06),_.gain.setValueAtTime(1.6,a+n*.6),_.gain.exponentialRampToValueAtTime(1e-4,a+n),u.start(a),u.stop(a+n+.1)}growl(t,e=2,n=1){const i=this.ctx,s=this.t,o=this.dest(t,{verb:1.2,gain:n,ref:2.5,rolloff:.9}),a=i.createWaveShaper();a.curve=this.curveHard;const l=this.filt("lowpass",700,2),c=i.createGain();for(const u of[38,55.5,77]){const f=i.createOscillator();f.type="sawtooth",f.frequency.setValueAtTime(u,s),f.frequency.linearRampToValueAtTime(u*.8,s+e);const d=i.createOscillator();d.frequency.value=9+Math.random()*6;const m=i.createGain();m.gain.value=.6;const _=i.createGain();_.gain.value=.4,d.connect(m),m.connect(_.gain),f.connect(_),_.connect(a),f.start(s),d.start(s),f.stop(s+e+.1),d.stop(s+e+.1)}const h=this.src(this.brown);h.connect(a),h.start(s),h.stop(s+e+.1),a.connect(l),l.connect(c),c.connect(o),c.gain.setValueAtTime(1e-4,s),c.gain.exponentialRampToValueAtTime(.9,s+.3),c.gain.exponentialRampToValueAtTime(1e-4,s+e)}boneCrack(t,e=3){for(let n=0;n<e;n++){const i=this.dest(t,{verb:.4,gain:1.2}),s=this.t+n*(.06+Math.random()*.12);this.noiseBurst(i,{t:s,dur:.025,a:5e-4,f:1600+Math.random()*1500,q:1.5,peak:1.2}),this.tone(i,{t:s,f:220,fEnd:90,dur:.04,peak:.4})}}skitter(t,e=.8,n=.8){const i=this.t,s=this.dest(t,{verb:.5,gain:n});let o=0;for(;o<e;)this.noiseBurst(s,{t:i+o,dur:.02,f:900+Math.random()*2500,q:2,peak:.5+Math.random()*.5}),Math.random()<.3&&this.tone(s,{t:i+o,f:120,fEnd:60,dur:.05,peak:.4}),o+=.04+Math.random()*.09}heavyStep(t,e=1){const n=this.dest(t,{verb:1,gain:e,ref:2}),i=this.t;this.tone(n,{t:i,f:55,fEnd:28,dur:.35,peak:1.2}),this.noiseBurst(n,{t:i,dur:.18,type:"lowpass",f:500,peak:.8,buf:this.brown}),this.noiseBurst(n,{t:i+.02,dur:.08,f:1200,q:1,peak:.2})}bodyFall(t){const e=this.dest(t,{verb:.9}),n=this.t;this.tone(e,{t:n,f:80,fEnd:30,dur:.4,peak:1.2}),this.noiseBurst(e,{t:n,dur:.3,type:"lowpass",f:900,peak:1,buf:this.brown}),this.boneCrack(t,2)}splash(t,e=!1){const n=this.dest(t,{verb:.7,gain:e?1.4:.6}),i=this.t;this.noiseBurst(n,{t:i,dur:e?.8:.25,type:"lowpass",f:2500,fEnd:400,peak:1,buf:this.pink});for(let s=0;s<(e?12:4);s++)this.tone(n,{t:i+Math.random()*.6,f:600+Math.random()*900,fEnd:1400,dur:.04,peak:.12})}whisper(t,e=2.5,n=.6){const i=this.ctx,s=this.t,o=this.dest(t,{verb:.9,gain:n,ref:.6}),a=this.src(this.white),l=i.createGain();l.gain.value=0;const c=this.filt("bandpass",1500,6),h=this.filt("bandpass",3e3,8);a.connect(c),a.connect(h),c.connect(l),h.connect(l),l.connect(o);let u=0;for(;u<e;){const f=.08+Math.random()*.16;c.frequency.setValueAtTime(700+Math.random()*1800,s+u),h.frequency.setValueAtTime(2200+Math.random()*2400,s+u),l.gain.setValueAtTime(0,s+u),l.gain.linearRampToValueAtTime(.6+Math.random()*.4,s+u+f*.3),l.gain.linearRampToValueAtTime(0,s+u+f),u+=f+(Math.random()<.2?.25:.02)}a.start(s,Math.random()),a.stop(s+e+.2)}voice(t,e,{pitch:n=120,radio:i=!1,child:s=!1,demonic:o=!1,vol:a=.6}={}){if(!this.ctx)return;const l=this.ctx,c=this.t,h=this.dest(t,{verb:i?.1:.6,gain:a,ref:1}),u=l.createOscillator();u.type="sawtooth";const f=this.src(this.white),d=l.createGain();d.gain.value=.08;const m=l.createGain();u.connect(m),f.connect(d),d.connect(m);const _=this.filt("bandpass",600,5),g=this.filt("bandpass",1400,7),p=this.filt("bandpass",2600,9),x=l.createGain();x.gain.value=0,m.connect(_),m.connect(g),m.connect(p);const y=l.createGain();y.gain.value=.4,p.connect(y),_.connect(x),g.connect(x),y.connect(x);let v=x;if(i){const E=this.filt("highpass",400,.7),P=this.filt("lowpass",2800,.7),b=l.createWaveShaper();b.curve=this.curveSoft,x.connect(E),E.connect(P),P.connect(b),v=b;const M=this.src(this.white),I=this.filt("bandpass",2e3,.5),z=l.createGain();z.gain.value=.05,M.connect(I),I.connect(z),z.connect(h),M.start(c,Math.random()),M.stop(c+e+.3),this.noiseBurst(h,{t:c,dur:.12,f:2e3,q:.5,peak:.4}),this.noiseBurst(h,{t:c+e,dur:.15,f:2e3,q:.5,peak:.4})}if(o){const E=l.createWaveShaper();E.curve=this.curveHard,v.connect(E),v=E}v.connect(h);const C=s?290:n;let w=.05;for(;w<e;){const E=.09+Math.random()*.13,P=[[700,1200],[400,2200],[300,900],[650,1700],[500,1e3]][Math.floor(Math.random()*5)],b=s?1.35:1;_.frequency.setTargetAtTime(P[0]*b,c+w,.02),g.frequency.setTargetAtTime(P[1]*b,c+w,.02),u.frequency.setTargetAtTime(C*(.88+Math.random()*.25)*(o?.5:1),c+w,.03),x.gain.setTargetAtTime(.7+Math.random()*.3,c+w,.015),x.gain.setTargetAtTime(.05,c+w+E*.75,.02),w+=E+(Math.random()<.12?.22:.01)}x.gain.setTargetAtTime(0,c+e,.03),u.start(c),u.stop(c+e+.3),f.start(c,Math.random()),f.stop(c+e+.3)}radioBeep(){const t=this.dest(null,{verb:0}),e=this.t;this.noiseBurst(t,{t:e,dur:.18,f:1800,q:.4,peak:.25}),this.tone(t,{t:e,f:1750,dur:.07,peak:.08,type:"square"})}thunder(t=1){if(!this.ctx)return;const e=this.t+t*.8,n=this.dest(null,{verb:.8,bus:this.amb,gain:1.4});this.noiseBurst(n,{t:e,dur:.25,type:"lowpass",f:3e3,peak:.8/t,buf:this.brown});for(let i=0;i<5;i++)this.noiseBurst(n,{t:e+.2+i*(.3+Math.random()*.5),a:.15,dur:1.6+Math.random(),type:"lowpass",f:160+Math.random()*200,peak:1.5/t,buf:this.brown})}sting(t=!0){const e=this.ctx,n=this.t,i=this.dest(null,{verb:1,gain:t?1:.55}),s=e.createWaveShaper();s.curve=this.curveSoft,s.connect(i);for(const o of[92.5,98,138.6,185,196,277,554,587,1108]){const a=e.createOscillator();a.type="sawtooth",a.frequency.value=o*(1+(Math.random()-.5)*.01);const l=e.createGain();a.connect(l),l.connect(s),this.gainEnv(l,n,.01,.07,1.8),a.start(n),a.stop(n+2)}this.noiseBurst(i,{t:n,dur:1.2,type:"highpass",f:2e3,peak:.6}),this.tone(i,{t:n,f:60,fEnd:25,dur:1.2,peak:1.5})}riser(t=2){const e=this.dest(null,{verb:.8}),n=this.t,i=this.src(this.white),s=this.filt("bandpass",300,3),o=this.ctx.createGain();s.frequency.exponentialRampToValueAtTime(6e3,n+t),o.gain.setValueAtTime(1e-4,n),o.gain.exponentialRampToValueAtTime(.5,n+t),o.gain.setValueAtTime(0,n+t+.01),i.connect(s),s.connect(o),o.connect(e),i.start(n),i.stop(n+t+.05)}hit(){const t=this.dest(null,{verb:.3}),e=this.t;this.tone(t,{t:e,f:120,fEnd:40,dur:.25,peak:1.4}),this.noiseBurst(t,{t:e,dur:.2,type:"lowpass",f:1500,peak:1,buf:this.brown}),this.deaf.frequency.cancelScheduledValues(e),this.deaf.frequency.setValueAtTime(500,e),this.deaf.frequency.exponentialRampToValueAtTime(2e4,e+1.2)}fleshHit(t){const e=this.dest(t,{verb:.3});this.noiseBurst(e,{dur:.08,type:"lowpass",f:900,peak:1,buf:this.pink}),this.tone(e,{f:100,fEnd:50,dur:.1,peak:.6})}loop(t,e,n=1){if(!this.ctx)return{stop(){},set(){}};const i=this.ctx,s=this.dest(e,{verb:.5,gain:n,ref:t==="flies"?.6:1.2}),o=[];let a=null,l=!0;if(this.t,t==="flies")for(let h=0;h<4;h++){const u=i.createOscillator();u.type="sawtooth",u.frequency.value=170+h*23;const f=i.createOscillator(),d=i.createGain();f.frequency.value=.3+Math.random(),d.gain.value=25,f.connect(d),d.connect(u.frequency);const m=i.createOscillator(),_=i.createGain(),g=i.createGain();m.frequency.value=.5+Math.random()*2,_.gain.value=.04,g.gain.value=.04,m.connect(_),_.connect(g.gain);const p=this.filt("bandpass",400,1);u.connect(p),p.connect(g),g.connect(s),u.start(),f.start(),m.start(),o.push(u,f,m)}else if(t==="tv"){const h=this.src(this.white,!0),u=this.filt("bandpass",3500,.4),f=i.createGain();f.gain.value=.12,h.connect(u),u.connect(f),f.connect(s),h.start(),o.push(h);const d=i.createOscillator();d.frequency.value=15734;const m=i.createGain();m.gain.value=.004,d.connect(m),m.connect(s),d.start(),o.push(d)}else if(t==="phone"){const h=()=>{if(!l)return;const u=this.t;for(const f of[1320,1660]){const d=i.createOscillator();d.type="triangle",d.frequency.value=f;const m=i.createOscillator();m.type="square",m.frequency.value=22;const _=i.createGain();_.gain.value=.25;const g=i.createGain();g.gain.value=.25,m.connect(_),_.connect(g.gain),d.connect(g),g.connect(s),d.start(u),m.start(u),d.stop(u+1.1),m.stop(u+1.1)}a=setTimeout(h,3600)};h()}else if(t==="hum"){const h=[64,67,69,67,64,62,64,0,64,67,71,69,67,64,62,0];let u=0;const f=()=>{if(!l)return;const d=h[u++%h.length],m=this.t;if(d){const _=440*Math.pow(2,(d-69)/12),g=i.createOscillator();g.type="triangle",g.frequency.value=_;const p=i.createOscillator(),x=i.createGain();p.frequency.value=5.5,x.gain.value=_*.012,p.connect(x),x.connect(g.frequency);const y=this.filt("lowpass",1400,.5),v=this.filt("bandpass",500,3),C=i.createGain();g.connect(y),y.connect(C),g.connect(v),v.connect(C),C.connect(s),C.gain.setValueAtTime(0,m),C.gain.linearRampToValueAtTime(.25,m+.08),C.gain.setTargetAtTime(0,m+.5,.1),g.start(m),p.start(m),g.stop(m+.9),p.stop(m+.9)}a=setTimeout(f,520+Math.random()*40)};f()}else if(t==="fire"){const h=this.src(this.brown,!0),u=this.filt("lowpass",900,.5),f=i.createGain();f.gain.value=.5,h.connect(u),u.connect(f),f.connect(s),h.start(),o.push(h);const d=()=>{l&&(this.noiseBurst(s,{dur:.02,f:2e3+Math.random()*3e3,q:2,peak:.3+Math.random()*.5}),a=setTimeout(d,40+Math.random()*200))};d()}else if(t==="drip"){const h=()=>{l&&(this.tone(s,{f:900+Math.random()*600,fEnd:1800,dur:.05,peak:.25}),a=setTimeout(h,300+Math.random()*900))};h()}else if(t==="fridge"){const h=i.createOscillator();h.type="sawtooth",h.frequency.value=50;const u=this.filt("lowpass",200,1),f=i.createGain();f.gain.value=.06,h.connect(u),u.connect(f),f.connect(s),h.start(),o.push(h)}else if(t==="breathing"){const h=()=>{if(!l)return;const u=this.t;this.noiseBurst(s,{t:u,a:.5,dur:.6,f:700,q:2,peak:.5,buf:this.pink}),this.noiseBurst(s,{t:u+1.2,a:.2,dur:1,f:450,q:2,peak:.6,buf:this.pink}),a=setTimeout(h,2600)};h()}else if(t==="swing"){const h=()=>{l&&(this.creak(e,1.4,.18,.6),a=setTimeout(h,2400+Math.random()*600))};h()}const c={stop:()=>{l=!1,clearTimeout(a),s.gain.setTargetAtTime(0,this.t,.05),setTimeout(()=>{o.forEach(h=>{try{h.stop()}catch{}}),s.disconnect()},400),this.loops.delete(c)},set:h=>s.gain.setTargetAtTime(h,this.t,.1),move:h=>{s.panner&&(s.panner.positionX.value=h.x,s.panner.positionY.value=h.y,s.panner.positionZ.value=h.z)}};return this.loops.add(c),c}duck(t,e=.5){this.ctx&&this.amb.gain.setTargetAtTime(t,this.t,e)}stopAllLoops(){[...this.loops].forEach(t=>t.stop())}suspend(t){this.ctx&&(t?this.ctx.suspend():this.ctx.resume())}}class Ma extends ot{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.camera=new mn;const n=this,i=e.color!==void 0?new Ht(e.color):new Ht(8355711),s=e.textureWidth||512,o=e.textureHeight||512,a=e.clipBias||0,l=e.shader||Ma.ReflectorShader,c=e.multisample!==void 0?e.multisample:4,h=new Vi,u=new L,f=new L,d=new L,m=new ie,_=new L(0,0,-1),g=new ye,p=new L,x=new L,y=new ye,v=new ie,C=this.camera,w=new Rn(s,o,{samples:c,type:Hn}),E=new Ye({name:l.name!==void 0?l.name:"unspecified",uniforms:Ki.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});E.uniforms.tDiffuse.value=w.texture,E.uniforms.color.value=i,E.uniforms.textureMatrix.value=v,this.material=E,this.onBeforeRender=function(P,b,M){if(f.setFromMatrixPosition(n.matrixWorld),d.setFromMatrixPosition(M.matrixWorld),m.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(m),p.subVectors(f,d),p.dot(u)>0)return;p.reflect(u).negate(),p.add(f),m.extractRotation(M.matrixWorld),_.set(0,0,-1),_.applyMatrix4(m),_.add(d),x.subVectors(f,_),x.reflect(u).negate(),x.add(f),C.position.copy(p),C.up.set(0,1,0),C.up.applyMatrix4(m),C.up.reflect(u),C.lookAt(x),C.far=M.far,C.updateMatrixWorld(),C.projectionMatrix.copy(M.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(C.projectionMatrix),v.multiply(C.matrixWorldInverse),v.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,f),h.applyMatrix4(C.matrixWorldInverse),g.set(h.normal.x,h.normal.y,h.normal.z,h.constant);const I=C.projectionMatrix;y.x=(Math.sign(g.x)+I.elements[8])/I.elements[0],y.y=(Math.sign(g.y)+I.elements[9])/I.elements[5],y.z=-1,y.w=(1+I.elements[10])/I.elements[14],g.multiplyScalar(2/g.dot(y)),I.elements[2]=g.x,I.elements[6]=g.y,I.elements[10]=g.z+1-a,I.elements[14]=g.w,n.visible=!1;const z=P.getRenderTarget(),V=P.xr.enabled,F=P.shadowMap.autoUpdate;P.xr.enabled=!1,P.shadowMap.autoUpdate=!1,P.setRenderTarget(w),P.state.buffers.depth.setMask(!0),P.autoClear===!1&&P.clear(),P.render(b,C),P.xr.enabled=V,P.shadowMap.autoUpdate=F,P.setRenderTarget(z);const H=M.viewport;H!==void 0&&P.state.viewport(H),n.visible=!0},this.getRenderTarget=function(){return w},this.dispose=function(){w.dispose(),n.material.dispose()}}}Ma.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function ws(r){let t=r%2147483647;return t<=0&&(t+=2147483646),()=>(t=t*16807%2147483647,(t-1)/2147483646)}function pi(r=1){const t=ws(r),e=new Float32Array(256*256);for(let o=0;o<e.length;o++)e[o]=t();const n=(o,a,l)=>{const c=Math.floor(o),h=Math.floor(a),u=o-c,f=a-h,d=u*u*(3-2*u),m=f*f*(3-2*f),_=(c%l+l)%l,g=(h%l+l)%l,p=(_+1)%l,x=(g+1)%l,y=e[g*256+_],v=e[g*256+p],C=e[x*256+_],w=e[x*256+p];return y+(v-y)*d+(C-y)*m+(y-v-C+w)*d*m};return{n,fbm:(o,a,l=4,c=5,h=1,u=1)=>{let f=0,d=.5,m=l,_=0;for(let g=0;g<c;g++)f+=n(o*m*h,a*m*u,256)*d,_+=d,d*=.5,m*=2;return f/_},fbmP:(o,a,l=4,c=5)=>{let h=0,u=.5,f=l,d=0;for(let m=0;m<c;m++)h+=n(o*f,a*f,f)*u,d+=u,u*=.5,f*=2;return h/d},r:t}}function $e(r,t=r){const e=document.createElement("canvas");return e.width=r,e.height=t,[e,e.getContext("2d")]}function hn(r,{repeat:t=!0,srgb:e=!0}={}){const n=new $i(r);return t&&(n.wrapS=n.wrapT=Pi),n.anisotropy=8,e&&(n.colorSpace=Ne),n}function Un(r,t,e,n){const i=r.getImageData(0,0,t,e),s=i.data;for(let o=0;o<e;o++)for(let a=0;a<t;a++){const l=(o*t+a)*4,c=n(a/t,o/e,s[l],s[l+1],s[l+2],s[l+3]);s[l]=c[0],s[l+1]=c[1],s[l+2]=c[2],s[l+3]=c.length>3?c[3]:255}r.putImageData(i,0,0)}const xu={},un=(r,t)=>xu[r]||(xu[r]=t());function Ho(r=3,t=[148,138,104]){return un("wp"+r+t,()=>{const n=pi(r),[i,s]=$e(512);s.fillStyle=`rgb(${t})`,s.fillRect(0,0,512,512);for(let o=0;o<8;o++)s.fillStyle=o%2?"rgba(0,0,0,0.06)":"rgba(255,240,200,0.05)",s.fillRect(o*64,0,64,512);s.strokeStyle="rgba(70,60,40,0.22)",s.lineWidth=2;for(let o=0;o<4;o++)for(let a=0;a<4;a++){const l=o*128+64+a%2*0,c=a*128+64;s.beginPath(),s.ellipse(l,c,14,26,0,0,Math.PI*2),s.stroke(),s.beginPath(),s.moveTo(l,c-40),s.quadraticCurveTo(l+24,c,l,c+40),s.quadraticCurveTo(l-24,c,l,c-40),s.stroke(),s.beginPath(),s.arc(l,c,4,0,7),s.fill()}Un(s,512,512,(o,a,l,c,h)=>{const u=n.fbmP(o,a,4,5),f=Math.max(0,n.fbmP(o+.3,a,2,4)-.52)*3.2,d=Math.max(0,n.fbmP(o,a+.7,8,4)-.6)*4*(a>.7?(a-.7)*3.3:0),m=.72+u*.45-f*.35;return[l*m-d*40+f*8,c*m-d*25,h*m-d*45-f*18]});for(let o=0;o<18;o++){const a=n.r()*512,l=60+n.r()*300,c=s.createLinearGradient(0,0,0,l);c.addColorStop(0,"rgba(60,40,15,0.25)"),c.addColorStop(1,"rgba(60,40,15,0)"),s.fillStyle=c,s.fillRect(a,0,2+n.r()*7,l)}return hn(i)})}function ds(r=5){return un("wood"+r,()=>{const e=pi(r),[n,i]=$e(512),s=[];for(let o=0;o<8;o++)s.push(.75+e.r()*.4);return Un(i,512,512,(o,a)=>{const l=Math.floor(o*8),c=s[l],h=e.fbm(o*1,a,2,4,8,1),u=Math.sin(o*8*30+h*18)*.5+.5,f=c*(.6+h*.5+u*.12),d=l%2*.5+l*.13,m=Math.abs((a+d)%.5-0)<.004?.35:1,_=o*8%1<.025?.25:1,g=.85+e.fbmP(o,a,3,4)*.3;return[120*f*m*_*g,78*f*m*_*g,48*f*m*_*g]}),hn(n)})}function Go(r=7,t=[196,204,192],e=8){return un("tile"+r+t+e,()=>{const i=pi(r),[s,o]=$e(512),a=[];for(let l=0;l<e*e;l++)a.push(.88+i.r()*.16);Un(o,512,512,(l,c)=>{const h=l*e,u=c*e,f=h%1,d=u%1,m=f<.04||d<.04,_=i.fbmP(l,c,6,4);if(m){const x=70+_*50;return[x,x*.95,x*.85]}const g=a[Math.floor(u)*e+Math.floor(h)]*(.85+_*.2),p=Math.min(f,d,1-f,1-d)<.08?.93:1;return[t[0]*g*p,t[1]*g*p,t[2]*g*p]}),o.strokeStyle="rgba(40,40,35,0.6)",o.lineWidth=1;for(let l=0;l<6;l++){let c=i.r()*512,h=i.r()*512;o.beginPath(),o.moveTo(c,h);for(let u=0;u<8;u++)c+=(i.r()-.5)*30,h+=(i.r()-.3)*20,o.lineTo(c,h);o.stroke()}return hn(s)})}function Nr(r=11){return un("conc"+r,()=>{const e=pi(r),[n,i]=$e(512);return Un(i,512,512,(s,o)=>{const a=e.fbmP(s,o,4,6),l=e.fbmP(s+.5,o,16,3),c=Math.max(0,e.fbmP(s,o+.2,2,3)-.55)*2.5,h=l>.78?.6:1,u=(.45+a*.45)*h*(1-c*.5);return[112*u,108*u,100*u]}),hn(n)})}function Wo(r=13){return un("pl"+r,()=>{const e=pi(r),[n,i]=$e(256);return Un(i,256,256,(s,o)=>{const a=e.fbmP(s,o,4,5),l=e.fbmP(s,o,2,3),c=1-Math.max(0,l-.55)*1.6-Math.exp(-Math.pow((l-.58)*40,2))*.12,h=.72+a*.28;return[190*h*c,182*h*c,160*h*(c*c)]}),hn(n)})}function Ox(r=17){return un("mud"+r,()=>{const e=pi(r),[n,i]=$e(512),[s,o]=$e(512),a=[];Un(i,512,512,(c,h)=>{const u=e.fbmP(c,h,4,6),d=e.fbmP(c+.37,h+.11,2,4)>.58;a.push(d?30:200+u*55);const m=(.35+u*.5)*(d?.45:1),_=Math.max(0,e.fbmP(c,h,8,3)-.6)*2;return[70*m-_*20,52*m+_*18,36*m-_*10]});let l=0;return Un(o,512,512,()=>{const c=a[l++];return[c,c,c]}),{map:hn(n),rough:hn(s,{srgb:!1})}})}function xn(r=1,t="splat"){return un("blood"+r+t,()=>{const n=ws(r*97+3),[i,s]=$e(256),o=a=>`rgba(${60+n()*30},${n()*6},${n()*6},${a})`;if(t==="splat"||t==="pool"){const a=t==="pool";for(let l=0;l<(a?70:40);l++){const c=n()*6.28,h=n()*(a?70:50);s.fillStyle=o(.85),s.beginPath(),s.arc(128+Math.cos(c)*h,128+Math.sin(c)*h,(a?18:6)+n()*(a?30:22),0,7),s.fill()}if(!a)for(let l=0;l<80;l++){const c=n()*6.28,h=60+n()*60;s.fillStyle=o(.9),s.beginPath(),s.arc(128+Math.cos(c)*h,128+Math.sin(c)*h,.8+n()*3.5,0,7),s.fill()}}else if(t==="drip"){for(let a=0;a<30;a++)s.fillStyle=o(.9),s.beginPath(),s.arc(128+(n()-.5)*120,30+n()*30,6+n()*16,0,7),s.fill();for(let a=0;a<14;a++){const l=128+(n()-.5)*130,c=40+n()*180,h=2+n()*5;s.fillStyle=o(.85),s.fillRect(l-h/2,40,h,c),s.beginPath(),s.arc(l,40+c,h*.9,0,7),s.fill()}}else if(t==="hand"){s.fillStyle=o(.8),s.beginPath(),s.ellipse(128,150,42,50,0,0,7),s.fill();const a=[[-46,-40,-.5,34],[-20,-88,-.12,50],[6,-96,0,54],[30,-86,.12,48],[50,-56,.35,36]];for(const[l,c,h,u]of a)s.save(),s.translate(128+l,150+c+u/2+20),s.rotate(h),s.beginPath(),s.ellipse(0,-u/2,10,u/2+6,0,0,7),s.fill(),s.restore();s.globalCompositeOperation="destination-out";for(let l=0;l<160;l++)s.fillStyle=`rgba(0,0,0,${n()*.8})`,s.beginPath(),s.arc(70+n()*120,40+n()*180,1+n()*4,0,7),s.fill();s.globalCompositeOperation="source-over"}else if(t==="smear")for(let a=0;a<26;a++){s.strokeStyle=o(.25+n()*.4),s.lineWidth=4+n()*14,s.lineCap="round",s.beginPath();const l=60+n()*140;s.moveTo(10+n()*30,l),s.bezierCurveTo(90,l+(n()-.5)*30,160,l+(n()-.5)*30,246-n()*40,l+(n()-.5)*20),s.stroke()}return hn(i,{repeat:!1})})}function al(r,t=1024,e=256,n=120){return un("bt"+r,()=>{const i=ws(r.length*131+7),[s,o]=$e(t,e);o.font=`bold ${n}px Georgia, serif`,o.textBaseline="middle";const a=o.measureText(r).width;let l=(t-a)/2;for(const c of r){o.save(),o.translate(l,e*.42+(i()-.5)*16),o.rotate((i()-.5)*.18),o.fillStyle=`rgba(${70+i()*25},0,0,0.92)`,o.fillText(c,0,0),o.restore();const h=o.measureText(c).width;if(c!==" "&&i()<.6){const u=l+h*(.2+i()*.6),f=20+i()*90,d=2+i()*4;o.fillStyle="rgba(80,0,0,0.85)",o.fillRect(u,e*.5,d,f),o.beginPath(),o.arc(u+d/2,e*.5+f,d,0,7),o.fill()}l+=h}return hn(s,{repeat:!1})})}function ll(r=2,t=4,e=!0,n=!0){return un("fp"+r+t+e,()=>{const o=ws(r),[a,l]=$e(256,200),c=l.createLinearGradient(0,0,0,200);c.addColorStop(0,n?"#8c7a5c":"#6d7480"),c.addColorStop(1,n?"#4a3c2a":"#30343a"),l.fillStyle=c,l.fillRect(0,0,256,200);const h=[];for(let u=0;u<t;u++){const f=256*(u+1)/(t+1),d=u===t-1&&t>2,m=d?95:70+o()*10,_=d?13:17;l.fillStyle=n?"#2e2418":"#20242a",l.beginPath(),l.ellipse(f,m+_+55,_*1.9,60,0,0,7),l.fill(),l.fillStyle=n?"#c4a983":"#b9a99a",l.beginPath(),l.ellipse(f,m,_*.85,_,0,0,7),l.fill(),l.fillStyle="#1a120a",l.beginPath(),l.ellipse(f,m-_*.6,_*.9,_*.5,0,Math.PI,0),l.fill(),l.fillStyle="rgba(0,0,0,0.6)",l.fillRect(f-6,m-2,3,3),l.fillRect(f+3,m-2,3,3),h.push([f,m,_])}if(e)for(const[u,f,d]of h){l.strokeStyle="rgba(235,225,205,0.9)",l.lineWidth=1.5;for(let m=0;m<26;m++)l.beginPath(),l.moveTo(u+(o()-.5)*d*2.4,f+(o()-.5)*d*2.4),l.lineTo(u+(o()-.5)*d*2.4,f+(o()-.5)*d*2.4),l.stroke()}return Un(l,256,200,(u,f,d,m,_)=>{const g=o()*30-15,p=Math.min(u,f,1-u,1-f)<.04?.6:1;return[(d+g)*p,(m+g)*p,(_+g)*p]}),hn(a,{repeat:!1})})}function yu(){return un("granny",()=>{const e=ws(99),[n,i]=$e(200,260);i.fillStyle="#3a2e20",i.fillRect(0,0,200,260);const s=i.createRadialGradient(100,120,10,100,130,130);s.addColorStop(0,"#9a8463"),s.addColorStop(1,"#2a2015"),i.fillStyle=s,i.beginPath(),i.ellipse(100,130,88,118,0,0,7),i.fill(),i.fillStyle="#1c150d",i.beginPath(),i.ellipse(100,250,80,90,0,0,7),i.fill(),i.fillStyle="#b8a07c",i.beginPath(),i.ellipse(100,115,34,44,0,0,7),i.fill(),i.fillStyle="#d8d0c0",i.beginPath(),i.ellipse(100,80,40,22,0,Math.PI,0),i.fill();for(const o of[86,114]){const a=i.createRadialGradient(o,110,1,o,110,10);a.addColorStop(0,"#000"),a.addColorStop(.6,"#140800"),a.addColorStop(1,"rgba(60,30,0,0)"),i.fillStyle=a,i.beginPath(),i.arc(o,110,10,0,7),i.fill()}return i.strokeStyle="#3a2516",i.lineWidth=2,i.beginPath(),i.moveTo(88,138),i.quadraticCurveTo(100,134,112,138),i.stroke(),Un(i,200,260,(o,a,l,c,h)=>{const u=e()*24-12;return[l+u,c+u,h+u]}),hn(n,{repeat:!1})})}function kx(r=4){return un("cd"+r,()=>{const n=ws(r),[i,s]=$e(256,200);s.fillStyle="#efeae0",s.fillRect(0,0,256,200),s.lineWidth=3,s.lineCap="round";const o=(a,l,c,h)=>{s.strokeStyle=h,s.beginPath(),s.arc(a,l-c,c*.15,0,7),s.moveTo(a,l-c*.85),s.lineTo(a,l-c*.4),s.moveTo(a-c*.2,l-c*.7),s.lineTo(a+c*.2,l-c*.7),s.moveTo(a,l-c*.4),s.lineTo(a-c*.15,l),s.moveTo(a,l-c*.4),s.lineTo(a+c*.15,l),s.stroke()};o(40,180,70,"#2a4fb0"),o(80,180,64,"#c03070"),o(115,180,40,"#d08020"),s.strokeStyle="#111",s.lineWidth=5,o(200,185,170,"#111"),s.lineWidth=3,s.beginPath(),s.moveTo(170,60),s.lineTo(130,120),s.stroke(),s.fillStyle="#b00",s.beginPath(),s.arc(196,22,3,0,7),s.arc(205,22,3,0,7),s.fill(),s.strokeStyle="rgba(10,10,10,0.8)",s.lineWidth=2,s.beginPath();for(let a=0;a<40;a++)s.lineTo(150+n()*100,10+n()*180);return s.stroke(),s.fillStyle="#222",s.font="18px Comic Sans MS, cursive",s.fillText("o moço",12,24),hn(i,{repeat:!1})})}function Mu(r=21,t=[168,160,140]){return un("skin"+r+t,()=>{const n=pi(r),[i,s]=$e(256);Un(s,256,256,(o,a)=>{const l=n.fbmP(o,a,4,5),c=Math.max(0,n.fbmP(o+.4,a,2,3)-.56)*4,h=.8+l*.3;return[t[0]*h-c*40,t[1]*h-c*60,t[2]*h-c*20]}),s.strokeStyle="rgba(60,40,80,0.35)",s.lineWidth=1.2;for(let o=0;o<18;o++){let a=n.r()*256,l=n.r()*256;s.beginPath(),s.moveTo(a,l);for(let c=0;c<12;c++)a+=(n.r()-.5)*18,l+=n.r()*14,s.lineTo(a,l);s.stroke()}return hn(i)})}function yn(r=23,t=[200,195,180],e=.4){return un("cl"+r+t+e,()=>{const i=pi(r),[s,o]=$e(256);return Un(o,256,256,(a,l)=>{const c=(Math.floor(a*128)+Math.floor(l*128))%2*.04,h=i.fbmP(a,l,4,5),u=Math.max(0,i.fbmP(a+.2,l+.6,2,4)-(.62-e*.15))*5,f=.6+h*.45+c;return[t[0]*f*(1-u*.2)+u*30,t[1]*f*(1-u*.9),t[2]*f*(1-u*.9)]}),hn(s)})}function Bx(){return un("cookie",()=>{const t=pi(31),[e,n]=$e(256);Un(n,256,256,(s,o)=>{const a=s-.5,l=o-.5,c=Math.sqrt(a*a+l*l)*2,h=Math.exp(-c*c*14)*.55,u=Math.exp(-Math.pow((c-.42)*9,2))*.22,f=Math.pow(Math.max(0,1-c),.8)*.5,d=.85+t.fbmP(s,o,8,3)*.3,m=Math.min(1,(h+u+f)*d)*255;return[m,m*.97,m*.9]});const i=new $i(e);return i.colorSpace=Ne,i})}function zx(){return un("glass",()=>{const t=pi(41),[e,n]=$e(256);return Un(n,256,256,(i,s)=>{const o=t.fbmP(i,s,4,5),a=t.fbm(i,s,2,3,6,.5);return[90,95,85,40+o*70+a*40]}),hn(e)})}function Vx(){const[e,n]=$e(96,72),i=new $i(e);i.colorSpace=Ne,i.magFilter=rn;const s=n.createImageData(96,72);return i.userData.update=o=>{const a=s.data,l=o*40%72;for(let c=0;c<72;c++){const h=Math.abs(c-l)<6?1.4:1;for(let u=0;u<96;u++){const f=Math.random()*200*h,d=(c*96+u)*4;a[d]=f,a[d+1]=f,a[d+2]=f*1.05,a[d+3]=255}}n.putImageData(s,0,0),i.needsUpdate=!0},i.userData.update(0),i}function da(){return un("dot",()=>{const[r,t]=$e(64),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.5)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),hn(r,{repeat:!1})})}function Hx(){return un("hair",()=>{const e=ws(77),[n,i]=$e(128,256);for(let s=0;s<260;s++){i.strokeStyle=`rgba(${10+e()*15},${8+e()*10},${6+e()*8},${.5+e()*.5})`,i.lineWidth=.6+e()*1.4;const o=e()*128;i.beginPath(),i.moveTo(o,0),i.bezierCurveTo(o+(e()-.5)*20,256*.3,o+(e()-.5)*30,256*.6,o+(e()-.5)*40,256*(.6+e()*.4)),i.stroke()}return hn(n,{repeat:!1})})}const Su=[[-.77,1.62,1.8],[.77,1.62,1.8]],Mi=.47;function Gx(r,t){const e=document.createElement("canvas");e.width=e.height=1024;const n=e.getContext("2d");n.drawImage(r,0,0,1024,1024);const i=n.getImageData(0,0,1024,1024),s=i.data,o=t==="father"?[.92,.9,.86]:t==="tiago"?[.86,.88,.92]:[.8,.86,.82];for(let u=0;u<s.length;u+=4){const f=s[u]*.3+s[u+1]*.59+s[u+2]*.11,d=t==="father"?.35:.15;s[u]=(f+(s[u]-f)*d)*o[0],s[u+1]=(f+(s[u+1]-f)*d)*o[1],s[u+2]=(f+(s[u+2]-f)*d)*o[2]}n.putImageData(i,0,0);let a=11;const l=()=>(a=a*16807%2147483647)/2147483647;n.lineCap="round";for(let u=0;u<90;u++){let f=100+l()*820,d=120+l()*700;n.strokeStyle=`rgba(${40+l()*30},${30+l()*30},${70+l()*40},${.12+l()*.22})`,n.lineWidth=.8+l()*2.2,n.beginPath(),n.moveTo(f,d);for(let m=0;m<10;m++)f+=(l()-.5)*34,d+=(l()-.3)*26,n.lineTo(f,d);n.stroke()}for(const[u,f]of[[440,300],[584,300]]){const d=n.createRadialGradient(u,f,4,u,f,90);if(d.addColorStop(0,"rgba(10,0,0,0.95)"),d.addColorStop(.35,"rgba(40,10,30,0.7)"),d.addColorStop(1,"rgba(60,30,60,0)"),n.fillStyle=d,n.beginPath(),n.arc(u,f,90,0,7),n.fill(),t!=="tiago")for(let m=0;m<3;m++){const _=u-14+m*13+l()*6,g=90+l()*170,p=n.createLinearGradient(0,f,0,f+g);p.addColorStop(0,"rgba(50,0,0,0.95)"),p.addColorStop(1,"rgba(70,0,0,0)"),n.strokeStyle=p,n.lineWidth=3+l()*5,n.beginPath(),n.moveTo(_,f+10),n.bezierCurveTo(_+(l()-.5)*12,f+g*.4,_+(l()-.5)*18,f+g*.7,_+(l()-.5)*20,f+g),n.stroke()}}const c=n.createRadialGradient(512,478,4,512,478,80);if(c.addColorStop(0,"rgba(10,0,0,0.95)"),c.addColorStop(.6,"rgba(50,5,10,0.6)"),c.addColorStop(1,"rgba(60,10,20,0)"),n.fillStyle=c,n.beginPath(),n.ellipse(512,478,90,60,0,0,7),n.fill(),t!=="father")for(let u=0;u<5;u++){const f=470+l()*85,d=80+l()*220;n.strokeStyle=`rgba(${55+l()*30},0,0,0.85)`,n.lineWidth=3+l()*6,n.beginPath(),n.moveTo(f,500),n.quadraticCurveTo(f+(l()-.5)*20,500+d/2,f+(l()-.5)*30,500+d),n.stroke()}const h=new $i(e);return h.colorSpace=Ne,h.anisotropy=4,h}const as=(r,t,e)=>{const n=Math.min(1,Math.max(0,(e-r)/(t-r)));return n*n*(3-2*n)};function Xf(r,t="mother"){if(!r||!r.head)return null;const n=r.head.geometry.clone(),i=n.attributes.position;n.attributes.uv;const s=i.count,o=new Float32Array(s*3).fill(1),a=t==="scare"?1.35:t==="mother"?1.1:t==="father"?.55:.25,l=new L;for(let m=0;m<s;m++){l.fromBufferAttribute(i,m);const _=as(-.2,1.4,l.z);if(l.y<Mi){const v=Mi-l.y,C=_*as(2.6,.6,Math.abs(l.x));l.y-=Math.min(v,.35)/.35*a*C+v*.22*a*C,l.z-=v*.06*a*C}const g=as(.95,.2,Math.abs(l.x))*_*as(Mi+.25,Mi,l.y)*as(Mi-.45,Mi-.05,l.y);let p=0;for(const[v,C,w]of Su){const E=Math.hypot(l.x-v,(l.y-C)*1.25);if(l.z>.8){const P=as(.62,.15,E);p=Math.max(p,P),l.z-=P*.42}}const x=_*as(1.6,.9,Math.abs(Math.abs(l.x)-1.25)+Math.abs(l.y-.75));l.x-=Math.sign(l.x)*x*.12,i.setXYZ(m,l.x,l.y,l.z);const y=Math.max(p*.97,g*(t==="father"?.75:.96));o[m*3]=o[m*3+1]=o[m*3+2]=1-y}n.setAttribute("color",new on(o,3)),n.computeVertexNormals();const c="skin_"+t;r[c]=r[c]||(r.headMaps.map&&r.headMaps.map.image?Gx(r.headMaps.map.image,t):null);const h=new we({map:r[c],normalMap:r.headMaps.normalMap||null,vertexColors:!0,roughness:t==="father"?.62:.42,metalness:0,sheen:.4,sheenRoughness:.6,sheenColor:new Ht(6978160),clearcoat:t==="mother"||t==="scare"?.35:.1,clearcoatRoughness:.4});h.normalScale.set(1.2,1.2);const u=new ot(n,h);u.castShadow=!0,u.receiveShadow=!0;const f=new se;f.add(u);const d=new ot(new In(1,16,12),new At({color:393216,roughness:.3}));if(d.scale.set(.85,.5+a*.6,.6),d.position.set(0,Mi-.25-a*.55,1.55),f.add(d),a>.5){const m=new At({color:12102026,roughness:.35});for(let _=0;_<9;_++){const g=new ot(new io(.06+Math.random()*.03,.22+Math.random()*.12,5),m),p=(_/8-.5)*1.6;g.position.set(Math.sin(p)*.6,Mi-.08,1.85+Math.cos(p)*.25-.25),g.rotation.x=Math.PI,f.add(g);const x=g.clone();x.position.y=Mi-.3-a*1.1,x.rotation.x=0,x.position.z-=.12,f.add(x)}}if(t!=="tiago")for(const[m,_]of Su){const g=new ot(new In(.2,12,10),new we({color:131586,roughness:.05,clearcoat:1}));g.position.set(m*.96,_,1.42),f.add(g)}return f.scale.setScalar(.033),f}let ls=null;function Wx(){if(ls)return ls;const r=256,t=document.createElement("canvas");t.width=t.height=r;const e=t.getContext("2d"),n=new Float32Array(r*r);let i=5;const s=()=>(i=i*16807%2147483647)/2147483647;for(let a=0;a<r*r;a++)n[a]=s()*.25;for(let a=0;a<300;a++){const l=s()*r,c=s()*r,h=10+s()*50;for(let u=0;u<h;u++){const f=Math.floor(l+u)%r,d=Math.floor(c+Math.sin(u*.2)*3+r)%r;n[d*r+f]-=.6}}const o=e.createImageData(r,r);for(let a=0;a<r;a++)for(let l=0;l<r;l++){const c=a*r+l,h=n[a*r+(l+1)%r]-n[c],u=n[(a+1)%r*r+l]-n[c],f=-h*2,d=-u*2,m=1,_=Math.hypot(f,d,m);o.data[c*4]=(f/_*.5+.5)*255,o.data[c*4+1]=(d/_*.5+.5)*255,o.data[c*4+2]=(m/_*.5+.5)*255,o.data[c*4+3]=255}return e.putImageData(o,0,0),ls=new $i(t),ls.wrapS=ls.wrapT=Pi,ls.repeat.set(3,3),ls}function Xx(){const r=Wx(),t=(e,n,i={})=>{const s=new we({map:Mu(e,n),normalMap:r,roughness:i.rough??.5,sheen:.35,sheenRoughness:.7,sheenColor:new Ht(i.sheen??8030848),clearcoat:i.wet??.2,clearcoatRoughness:.45});return s.normalScale.set(.6,.6),s};return{deadSkin:t(22,[104,108,98],{wet:.4}),paleSkin:t(21,[138,128,112],{rough:.6,wet:.08}),childSkin:t(25,[186,168,154],{rough:.65,wet:0}),demonSkin:t(29,[30,27,26],{rough:.25,wet:.9,sheen:3153952}),gown:new At({map:yn(23,[140,132,114],2),roughness:.95,side:En,alphaMap:bu(),alphaTest:.5}),shirt:new At({map:yn(24,[92,96,84],1.9),roughness:.95,side:En}),pants:new At({map:yn(26,[52,48,42],.4),roughness:.95}),childDress:new At({map:yn(27,[170,120,138],.4),roughness:.95,side:En,alphaMap:bu(3),alphaTest:.5}),hair:new At({map:Hx(),alphaTest:.32,side:En,roughness:.42,color:2761760}),nail:new At({color:2760728,roughness:.3}),hole:new ai({color:0}),ghost:new At({color:723723,roughness:1}),horn:new At({map:Mu(30,[70,62,52]),roughness:.75}),demonMouth:new At({color:1048576,emissive:5244928,emissiveIntensity:1.5})}}function bu(r=1){const n=document.createElement("canvas");n.width=256,n.height=256;const i=n.getContext("2d");i.fillStyle="#fff",i.fillRect(0,0,256,256);let s=r*77+1;const o=()=>(s=s*16807%2147483647)/2147483647;i.fillStyle="#000",i.beginPath(),i.moveTo(0,256);for(let l=0;l<=40;l++)i.lineTo(l/40*256,252-o()*40*(o()<.25?2:1));i.lineTo(256,256),i.fill();for(let l=0;l<18;l++)i.beginPath(),i.ellipse(o()*256,256*.45+o()*256*.45,2+o()*8,3+o()*12,o()*3,0,7),i.fill();return new $i(n)}function $n(r,t,e,n=12){const i=[];for(let l=0;l<=16;l++){const c=l/16;let h=t[0][1];for(let u=1;u<t.length;u++)if(c<=t[u][0]){const f=t[u-1],d=t[u],m=(c-f[0])/(d[0]-f[0]);h=f[1]+(d[1]-f[1])*(m*m*(3-2*m));break}i.push(new it(Math.max(.002,h),-c*r))}i.unshift(new it(.001,0)),i.push(new it(.001,-r));const s=new bs(i,n),o=new se,a=new ot(s,e);return a.castShadow=!0,a.receiveShadow=!0,o.add(a),o.userData.mesh=a,o}function qx(r,t,e,n=9,i=1){const s=[];for(let h=0;h<=24;h++){const u=h/24;let f=r(u);s.push(new it(f,-u*t))}const o=new bs(s,40),a=o.attributes.position,l=new L;for(let h=0;h<a.count;h++){l.fromBufferAttribute(a,h);const u=Math.atan2(l.z,l.x),f=-l.y/t,d=Math.hypot(l.x,l.z),m=1+(Math.sin(u*n+i+f*2.5)*.06+Math.sin(u*n*2.3+i*3)*.025)*(.3+f);a.setXYZ(h,Math.cos(u)*d*m,l.y,Math.sin(u)*d*m)}o.computeVertexNormals();const c=new ot(o,e);return c.castShadow=!0,c.receiveShadow=!0,c}function Yx(r,t={},e=null){const n=t.h??1.7,i=n/1.7,s=t.thin??1,o=t.armK??1,a=t.skin||r.deadSkin,l=t.top||a,c=t.bottom||a,h={};h.root=new se,h.hips=new se,h.hips.position.y=.95*i,h.root.add(h.hips);const u=$n(.62*i,[[0,.07],[.1,.13],[.35,.115],[.55,.135],[.78,.15],[.9,.12],[1,.05]].map(([m,_])=>[m,_*s*i]),l,20);if(u.rotation.x=Math.PI,u.position.y=-.1*i,u.userData.mesh.scale.set(1.15,1,.72),h.spine=new se,h.spine.position.y=0,h.hips.add(h.spine),h.spine.add(u),t.ribs)for(let m=0;m<6;m++){const _=new ot(new ji(.135*s*i,.006*i,4,16,Math.PI*.9),a);_.position.set(0,(.3+m*.035)*i,0),_.rotation.set(Math.PI/2,0,Math.PI*.05-Math.PI*.45),_.scale.set(1.05,.62,1),h.spine.add(_)}h.neck=new se,h.neck.position.y=.5*i,h.spine.add(h.neck);const f=$n(.13*i*(t.longNeck??1),[[0,.05],[.5,.042],[1,.05]].map(([m,_])=>[m,_*i*s]),a,12);f.rotation.x=Math.PI,f.position.y=-.02*i,h.neck.add(f),h.head=new se,h.head.position.y=.11*i*(t.longNeck??1),h.neck.add(h.head);const d=t.face&&e?Xf(e,t.face):null;if(d)d.scale.multiplyScalar(i*(t.headK??1)*1.28),d.position.set(0,.03*i,-.012*i),h.head.add(d),h.face=d,h.mouth=d.children[1];else{const m=new ot(new In(.105*i,24,18),a);m.scale.set(.86,1.15*(t.longHead??1),.98),m.position.y=.09*i*(t.longHead??1),m.castShadow=!0,h.head.add(m);const _=new ot(new In(.03*i,10,8),t.mouthMat||r.hole);_.position.set(0,.07*i,.092*i),_.scale.set(.35,3.2,.5),h.head.add(_),h.mouth=_}for(const m of[-1,1]){const _=m<0?"L":"R",g=new se;g.position.set(m*.19*s*i,.43*i,0),h.spine.add(g);const p=.29*i*o,x=.27*i*o,y=$n(p,[[0,.055],[.25,.05],[.8,.036],[1,.034]].map(([F,H])=>[F,H*i*s]),t.sleeves?l:a);g.add(y);const v=new se;v.position.y=-p,y.add(v),v.add($n(x,[[0,.034],[.25,.038],[.85,.024],[1,.022]].map(([F,H])=>[F,H*i*s]),a));const C=new se;C.position.y=-x,v.add(C);const w=$n(.085*i,[[0,.022],[.5,.03],[1,.026]].map(([F,H])=>[F,H*i]),a,8);w.userData.mesh.scale.set(1.2,1,.45),C.add(w);const E=t.fingerK??1;for(let F=0;F<4;F++){const H=new se;H.position.set((F-1.5)*.017*i,-.08*i,0),H.rotation.set(.12+F*.04,0,(F-1.5)*.06),C.add(H);const W=.045*i*E,Z=.04*i*E;H.add($n(W,[[0,.0085*i],[1,.007*i]],a,6));const Y=new se;Y.position.y=-W,Y.rotation.x=.35,H.add(Y),Y.add($n(Z,[[0,.007*i],[1,.0045*i]],a,6));const ct=new ot(new io(.004*i,.014*i*E,5),r.nail);ct.position.y=-Z-.005*i,ct.rotation.x=Math.PI,Y.add(ct)}const P=$n(.05*i*E,[[0,.01*i],[1,.006*i]],a,6);P.position.set(m*-.025*i,-.035*i,.01*i),P.rotation.z=m*-.7,C.add(P),h["arm"+_]=y,h["fore"+_]=v,h["hand"+_]=C,h["shoulder"+_]=g;const b=.45*i,M=.44*i,I=$n(b,[[0,.085],[.2,.08],[.85,.048],[1,.045]].map(([F,H])=>[F,H*i*s]),c);I.position.set(m*.09*i,0,0),h.hips.add(I);const z=new se;z.position.y=-b,I.add(z),z.add($n(M,[[0,.045],[.25,.05],[.85,.03],[1,.028]].map(([F,H])=>[F,H*i*s]),t.barelegs?a:c));const V=$n(.21*i,[[0,.03],[.3,.035],[1,.022]].map(([F,H])=>[F,H*i]),a,8);V.rotation.x=-Math.PI/2,V.position.set(0,-M,-.04*i),V.userData.mesh.scale.set(1.25,1,.6),z.add(V),h["leg"+_]=I,h["shin"+_]=z}if(t.dress){const m=.95*i*(t.dressLen??1),_=qx(g=>(.17+g*.13+Math.sin(g*Math.PI)*.02)*i*s,m,t.dress,9,t.seed??1);_.position.y=.52*i,h.spine.add(_),h.dress=_}if(t.hair){const m=new se;h.head.add(m),h.hair=m;const _=(t.hairLen??.6)*i,g=26;for(let x=0;x<g;x++){const y=x/g*Math.PI*2,v=Math.cos(y)>.55;if(v&&!t.hairFace)continue;const C=(.06+Math.random()*.05)*i,w=new ni(C,_*(.8+Math.random()*.35),1,6),E=w.attributes.position;for(let M=0;M<E.count;M++){const z=.5-E.getY(M)/_;E.setZ(M,Math.max(0,.35-z)*.06*i+z*.01*i)}w.translate(0,-_/2*.95,0);const P=new ot(w,r.hair),b=.085*i;P.position.set(Math.sin(y)*b,.19*i,Math.cos(y)*b*.95),P.rotation.y=y,P.rotation.x=v?-.12:.08,P.castShadow=!0,m.add(P)}const p=new ot(new In(.105*i,16,10,0,Math.PI*2,0,Math.PI*.55),new At({color:920329,roughness:.55}));p.position.set(0,.105*i,-.012*i),p.scale.set(1,1.05,1.12),m.add(p)}return h.root.traverse(m=>{m.isMesh&&(m.userData.creature=!0)}),h}const vs=(r=0,t=0,e=0)=>new L(r,t,e),qf=vs(),Xo=vs();let Yf=null;function jx(r){Yf=r}function Kx(){const r=Xx();return{...r,greySkin:r.deadSkin,nightgown:r.gown,eyeShine:r.hole}}function li(r,t={}){const e={...t};return e.dress===void 0&&e.top===r.nightgown&&(e.dress=r.gown,e.top=e.skin),e.faceless&&(e.face=null),Yx(r,e,Yf)}class Fc{constructor(t,e,n={}){this.g=t,this.P=e,this.root=e.root,this.pos=vs(),this.yaw=0,this.vel=vs(),this.active=!1,this.state="idle",this.t=0,this.stateT=0,this.hp=n.hp??3,this.maxHp=this.hp,this.stun=0,this.path=[],this.repath=0,this.atkCD=0,this.stepT=0,this.poseClock=0,this.radius=n.radius??.35,this.root.visible=!1,t.scene.add(this.root)}setState(t){this.state=t,this.stateT=0}show(t){this.active=t,this.root.visible=t}place(t,e,n,i=0){this.pos.set(t,e,n),this.yaw=i,this.sync()}sync(){this.root.position.copy(this.pos),this.root.rotation.y=this.yaw}chest(){return qf.copy(this.pos).setY(this.pos.y+1.2)}dist(){const t=this.g.player.pos;return Math.hypot(t.x-this.pos.x,t.z-this.pos.z)}faceTo(t,e,n=1){let s=Math.atan2(t-this.pos.x,e-this.pos.z)-this.yaw;for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;this.yaw+=s*Math.min(1,n)}moveToward(t,e,n,i=!0){const s=this.g.level;this.repath-=n,this.repath<=0&&(this.repath=.3+Math.random()*.15,s.clearLine(this.pos.x,this.pos.z,t.x,t.z)?this.path=[vs(t.x,0,t.z)]:this.path=s.findPath(this.pos.x,this.pos.z,t.x,t.z)||[]);let o=this.path[0];for(;o&&Math.hypot(o.x-this.pos.x,o.z-this.pos.z)<.25&&this.path.length>1;)this.path.shift(),o=this.path[0];if(!o)return 0;const a=o.x-this.pos.x,l=o.z-this.pos.z,c=Math.hypot(a,l);if(c<.01)return 0;const h=Math.min(c,e*n);return this.pos.x+=a/c*h,this.pos.z+=l/c*h,i&&(this.pos.y=s.floorY(this.pos.x,this.pos.z)),this.faceTo(o.x,o.z,n*8),s.pushDoors(this.pos,this.g.audio),h}isSeen(t){const e=this.g,n=e.camera,i=t||this.chest();Xo.copy(i).sub(n.position);const s=Xo.length();Xo.divideScalar(s);const o=n.userData.fwd,a=Xo.dot(o);return a<Math.cos(qi.degToRad(48))||!e.level.los(n.position,i)?!1:e.lightsOn||s<2.2||e.player.flashlightOn&&a>Math.cos(.55)&&s<16||e.flashT>0}hitBy(t){if(!this.active)return null;const n=new fa(t.origin,t.direction,0,40).intersectObject(this.root,!0);return n.length?n[0]:null}attack(t){this.g.player.damage(t,this.pos),this.atkCD=1.2}pushPlayerApart(){const t=this.g.player.pos,e=t.x-this.pos.x,n=t.z-this.pos.z,i=Math.hypot(e,n),s=this.radius+.3;if(i<s&&i>.001){const o=s-i;this.pos.x-=e/i*o,this.pos.z-=n/i*o}}}const qo=2.68;class Zx extends Fc{constructor(t,e){const n=li(e,{h:1.62,thin:.72,armK:1.45,fingerK:1.9,skin:e.greySkin,dress:e.gown,dressLen:.72,hair:!0,hairFace:!0,hairLen:.8,face:"mother",barelegs:!0});super(t,n,{hp:3,radius:.42}),this.onCeiling=!1,this.fleeTo=null,this.onFlee=null,this.skT=0,this.retreatT=0,this.flip=0}pose(t,e){const n=this.P,i=t*9,s=Math.sin(i)*e,o=Math.sin(i+Math.PI)*e;n.hips.position.y=.52+Math.abs(Math.sin(i))*.04*e,n.hips.rotation.set(1.42,0,Math.sin(i)*.08*e),n.spine.rotation.set(-.12,0,-Math.sin(i)*.1*e),n.neck.rotation.set(-.9,0,Math.sin(t*13)*.06),n.head.rotation.set(-.7,this.onCeiling?Math.PI*.92:0,.35+Math.sin(t*17)*.05),n.armL.rotation.set(-2.15+s*.45,0,-.55),n.armR.rotation.set(-2.15+o*.45,0,.55),n.foreL.rotation.set(.95-s*.3,0,.25),n.foreR.rotation.set(.95-o*.3,0,-.25),n.handL.rotation.set(.8,0,0),n.handR.rotation.set(.8,0,0),n.legL.rotation.set(-.75+o*.35,0,-1),n.legR.rotation.set(-.75+s*.35,0,1),n.shinL.rotation.set(-1.9,0,0),n.shinR.rotation.set(-1.9,0,0),n.hair&&(n.hair.rotation.x=this.onCeiling?-1.4:1.2)}stunPose(t){const e=this.P;e.hips.position.y=.35,e.hips.rotation.set(1.2,0,Math.sin(t*23)*.2),e.spine.rotation.set(-.6+Math.sin(t*40)*.15,0,0),e.armL.rotation.set(-2.9,0,-.3+Math.sin(t*31)*.4),e.armR.rotation.set(-2.9,0,.3+Math.sin(t*29)*.4),e.foreL.rotation.set(-1.8,0,0),e.foreR.rotation.set(-1.8,0,0),e.neck.rotation.x=-.2+Math.sin(t*50)*.3,e.head.rotation.set(0,Math.sin(t*37)*.8,Math.sin(t*19)*.5),e.legL.rotation.set(-.4+Math.sin(t*27)*.4,0,-.6),e.legR.rotation.set(-.4-Math.sin(t*25)*.4,0,.6)}setCeiling(t){this.onCeiling=t,this.root.rotation.z=t?Math.PI:0}toCeiling(t,e,n="ceiling"){this.show(!0),this.setCeiling(!0),this.pos.set(t,qo,e),this.setState(n),this.stun=0}hunt(t,e){this.hp=this.maxHp,this.toCeiling(t,e,"ceilHunt")}drop(){this.setCeiling(!1),this.setState("drop"),this.pos.y=2.1,this.dropV=0}hurt(t){if(!["flee","hidden"].includes(this.state)){if(this.hp--,this.g.audio.scream(this.pos.clone().setY(this.pos.y>1.5?2.2:.8),{pitch:1.3,dur:.7}),this.g.spawnBlood(t.point,t.face?t.face.normal:null),this.hp<=0){this.flee();return}if(this.onCeiling){this.fall();return}this.stun=.7}}flashed(){["flee","hidden","ceiling"].includes(this.state)||(this.g.audio.scream(this.pos.clone().setY(this.onCeiling?2.2:.8),{pitch:1.6,dur:1.2,vol:.9}),this.onCeiling?this.fall():this.stun=2.4)}fall(){this.setCeiling(!1),this.setState("fall"),this.pos.y=2.2,this.dropV=0}flee(){this.setState("flee"),this.stun=0,this.g.audio.scream(this.pos.clone().setY(1),{pitch:1.1,dur:2.2,vol:1.2})}update(t){if(!this.active)return;this.t+=t,this.stateT+=t,this.atkCD-=t;const e=this.g,n=e.audio,i=e.level;this.poseClock-=t;const s=this.poseClock<=0;s&&(this.poseClock=1/15);const o=this.state;if(o!=="hidden"){if(o==="ceiling"){s&&this.pose(this.t*.2,.15),this.sync();return}if(o==="ceilHunt"||o==="ceilRetreat"){let a=e.player.pos;o==="ceilRetreat"&&(a=this.retreatTo,this.stateT>2.5+Math.random()&&this.setState("ceilHunt"));const l=o==="ceilRetreat"?4.2:this.dist()>6?3.6:2.4,c=this.moveToward(a,l,t,!1);this.pos.y=qo,s&&this.pose(this.t,c>0?1:0),this.skT-=t,this.skT<=0&&c>0&&(this.skT=.16+Math.random()*.1,n.skitter(this.pos.clone(),.14,.55)),Math.random()<t*.4&&n.creak(this.pos.clone(),.4,.3,1.2),o==="ceilHunt"&&this.dist()<1.7&&this.atkCD<=0&&i.los(e.camera.position,this.pos.clone().setY(2.3))&&(this.drop(),this.lunge=!0,n.scream(this.pos.clone().setY(2),{pitch:1.45,dur:.8,vol:1.2}),n.sting(!1)),this.sync();return}if(o==="drop"||o==="fall"){if(this.dropV-=11*t,this.pos.y+=this.dropV*t,this.lunge){const l=e.player.pos,c=l.x-this.pos.x,h=l.z-this.pos.z,u=Math.hypot(c,h)||1;this.pos.x+=c/u*Math.min(u-.6,3*t),this.pos.z+=h/u*Math.min(u-.6,3*t),this.faceTo(l.x,l.z,1)}const a=i.floorY(this.pos.x,this.pos.z);this.pos.y<=a&&(this.pos.y=a,n.bodyFall(this.pos.clone()),e.shake(.25),o==="fall"?(this.stun=2.2,this.setState("floor")):(this.setState("floor"),this.lunge&&this.dist()<1.5&&(this.attack(20),n.scream(this.pos.clone().setY(.8),{pitch:1.35,dur:.6})),this.stun=.25),this.lunge=!1),s&&this.stunPose(this.t),this.sync();return}if(this.stun>0){this.stun-=t,s&&this.stunPose(this.t),this.pushPlayerApart(),this.sync();return}if(o==="floor"){const a=this.moveToward(e.player.pos,3.8,t);s&&this.pose(this.t,a>0?1:0),this.dist()<1&&this.atkCD<=0?(this.attack(18),n.scream(this.pos.clone().setY(.8),{pitch:1.4,dur:.5}),this.climb()):this.stateT>1.4&&this.climb(),this.pushPlayerApart(),this.sync();return}if(o==="climb"){if(this.pos.y+=t*6,s&&this.stunPose(this.t),this.pos.y>=qo-.5){this.setCeiling(!0),this.pos.y=qo,n.skitter(this.pos.clone(),.5,.8);const a=e.player.pos,l=i.stalkerSpots.filter(c=>Math.hypot(c.x-a.x,c.z-a.z)>4.5&&i.floorY(c.x,c.z)===0);this.retreatTo=l[Math.floor(Math.random()*l.length)]||i.stalkerSpots[0],this.setState("ceilRetreat"),this.atkCD=2.5}this.sync();return}if(o==="flee"){this.onCeiling&&this.setCeiling(!1);const a=this.fleeTo||vs(15,0,7),l=this.moveToward(a,5.5,t);s&&this.pose(this.t,1),(Math.hypot(a.x-this.pos.x,a.z-this.pos.z)<.6||this.stateT>5)&&(this.show(!1),this.setState("hidden"),this.onFlee&&this.onFlee()),l&&Math.random()<t*6&&n.skitter(this.pos,.3,.5),this.sync();return}o==="chase"&&this.climb(),this.sync()}}climb(){this.setState("climb"),this.stun=0}}class $x extends Fc{constructor(t,e){const n=li(e,{h:1.92,thin:.9,armK:1.3,fingerK:1.4,skin:e.paleSkin,top:e.shirt,bottom:e.pants,face:"father"});super(t,n,{hp:3,radius:.35}),this.seen=!1,this.unseenT=0,this.creakT=0,this.headTurned=!1,this.idlePose()}idlePose(){const t=this.P;t.spine.rotation.x=.12,t.neck.rotation.x=.35,t.neck.rotation.z=.42,t.armL.rotation.set(.05,0,.06),t.armR.rotation.set(.05,0,-.06),t.foreL.rotation.set(-.08,0,0),t.foreR.rotation.set(-.1,0,0),t.legL.rotation.set(0,0,0),t.legR.rotation.set(0,0,0),t.shinL.rotation.set(0,0,0),t.shinR.rotation.set(0,0,0),t.head.rotation.y=this.headTurned?Math.PI:0}approachPose(t){const e=this.P;e.armL.rotation.set(-1.2*t,0,.1),e.armR.rotation.set(-1.3*t,0,-.1),e.foreL.rotation.set(-.2,0,0),e.foreR.rotation.set(-.3,0,0),e.neck.rotation.z=.42+t*.4}hurt(t){this.hp--,this.g.audio.boneCrack(this.chest().clone(),3),this.g.spawnBlood(t.point,t.face?t.face.normal:null),this.stun=.5,this.hp<=0&&(this.hp=this.maxHp,this.vanish())}flashed(){this.state==="hunt"&&this.dist()<9&&this.vanish()}vanish(){this.g.audio.whisper(this.chest().clone(),1.2,.8);const e=this.g.level.stalkerSpots,n=this.g.player.pos,i=e.filter(o=>Math.hypot(o.x-n.x,o.z-n.z)>7),s=i[Math.floor(Math.random()*i.length)]||e[0];this.place(s.x,this.g.level.floorY(s.x,s.z),s.z,Math.random()*6),this.relocated=1.5}update(t){if(!this.active)return;this.t+=t,this.stateT+=t,this.atkCD-=t;const e=this.g,n=e.audio;if(this.state==="idle"){this.sync();return}if(this.relocated>0&&(this.relocated-=t),this.stun>0){this.stun-=t,this.sync();return}this.seen=this.isSeen()||this.isSeen(qf.copy(this.pos).setY(this.pos.y+1.75));const i=this.dist();if(this.state==="hunt"){if(this.seen)this.unseenT=0,Math.random()<t*.25&&(n.boneCrack(this.chest().clone().setY(this.pos.y+1.7),1),this.P.neck.rotation.z+=.15);else{this.unseenT+=t;const s=i>9?4.2:2.8;this.moveToward(e.player.pos,s,t),this.approachPose(qi.clamp(1-(i-1)/6,0,1)),this.creakT-=t,this.creakT<=0&&i<10&&(this.creakT=.55,n.footstep("wood",this.pos,.55),Math.random()<.35&&n.creak(this.pos,.5,.35,.7))}i<1.15&&this.atkCD<=0&&this.relocated<=0&&(this.attack(34),n.scream(this.chest().clone(),{pitch:.75,dur:.9,vol:1.2}),this.atkCD=2.5,setTimeout(()=>{this.state==="hunt"&&this.vanish()},350)),this.pushPlayerApart()}this.sync()}}class Jx extends Fc{constructor(t,e){const n=li(e,{h:3,thin:.7,armK:1.75,fingerK:2.6,skin:e.demonSkin,faceless:!0,longHead:1.9,longNeck:1.9,mouthMat:e.demonMouth,ribs:!0});super(t,n,{hp:999,radius:.55}),this.speed=1.4,this.stepT=0,this.growlT=3;let i=7;const s=()=>(i=(i*9301+49297)%233280)/233280,o=(a,l,c,h,u)=>{const f=new se;f.rotation.set(...u),a.add(f);const d=new ot(new Ue(c*.55,c,l,6),e.horn);if(d.position.y=l/2,d.castShadow=!0,f.add(d),h>0)for(let m=0;m<2;m++){const _=new se;_.position.y=l,f.add(_),o(_,l*.7,c*.6,h-1,[(s()-.5)*1.2,s()*3,(m?1:-1)*(.3+s()*.5)])}};for(const a of[-1,1]){const l=new se;l.position.set(a*.05,.38,-.02),n.head.add(l),o(l,.22,.022,3,[-.3,0,a*.7])}}walkPose(t,e){const n=this.P,i=t*3.2;n.spine.rotation.x=.35+Math.sin(i*2)*.03,n.neck.rotation.x=.4,n.neck.rotation.z=Math.sin(t*.7)*.25,n.legL.rotation.x=Math.sin(i)*.45*e,n.legR.rotation.x=Math.sin(i+Math.PI)*.45*e,n.shinL.rotation.x=Math.max(0,-Math.sin(i))*.8*e,n.shinR.rotation.x=Math.max(0,Math.sin(i))*.8*e,n.armL.rotation.set(Math.sin(i+Math.PI)*.25*e-.2,0,.12),n.armR.rotation.set(Math.sin(i)*.25*e-.2,0,-.12),n.foreL.rotation.x=-.3,n.foreR.rotation.x=-.3,n.hips.position.y=.95*(3/1.7)+Math.abs(Math.sin(i))*.06,n.mouth.scale.y=3.2+Math.sin(t*2)*.6}emerge(t,e){this.show(!0),this.place(t,this.g.level.floorY(t,e)-3.2,e,0),this.setState("emerge"),this.g.audio.growl(vs(t,-2,e),4,1.4)}hurt(t){this.stun=Math.max(this.stun,.7),this.g.audio.growl(this.chest().clone(),.8,.8),this.g.spawnBlood(t.point,null,657930)}flashed(){this.state==="hunt"&&this.dist()<10&&(this.recoil=2.5,this.g.audio.scream(this.chest().clone().setY(this.pos.y+2.6),{pitch:.45,dur:1.6,vol:1.3}))}die(){this.setState("die"),this.g.audio.scream(this.chest().clone().setY(this.pos.y+2.5),{pitch:.35,dur:3.5,vol:1.6}),this.g.audio.growl(this.pos,4,1.5)}update(t){if(!this.active)return;this.t+=t,this.stateT+=t,this.atkCD-=t;const e=this.g,n=e.audio,i=e.level.floorY(this.pos.x,this.pos.z);if(this.state==="emerge"){this.pos.y=Math.min(i,i-3.2+this.stateT*1.1),this.walkPose(this.t*.3,.2),this.P.armL.rotation.x=-2.8+this.stateT*.5,this.P.armR.rotation.x=-2.9+this.stateT*.5,this.stateT>3.2&&(this.setState("hunt"),n.scream(this.chest().clone().setY(i+2.6),{pitch:.4,dur:2.2,vol:1.5})),this.sync();return}if(this.state==="die"){this.pos.y-=t*.9,this.P.spine.rotation.x+=t*.3,this.P.armL.rotation.x-=t,this.P.armR.rotation.x-=t*1.2,this.P.neck.rotation.z=Math.sin(this.t*30)*.5,this.stateT>4&&this.show(!1),this.sync();return}if(this.stun>0){this.stun-=t,this.P.spine.rotation.x=.7,this.P.neck.rotation.x=1,this.sync();return}if(this.recoil>0){this.recoil-=t;const s=e.player.pos,o=this.pos.x-s.x,a=this.pos.z-s.z,l=Math.hypot(o,a)||1,c=this.pos.x+o/l*1.6*t,h=this.pos.z+a/l*1.6*t;e.level.walkable(c,h)&&(this.pos.x=c,this.pos.z=h),this.P.armL.rotation.set(-2.4,0,.4),this.P.armR.rotation.set(-2.5,0,-.4),this.P.neck.rotation.x=-.6+Math.sin(this.t*40)*.2,this.sync();return}if(this.state==="hunt"){const s=this.moveToward(e.player.pos,this.speed,t);this.walkPose(this.t,s>0?1:0),this.stepT-=t*this.speed/1.4,this.stepT<=0&&(this.stepT=.98,n.heavyStep(this.pos,1),e.shake(.05)),this.growlT-=t,this.growlT<=0&&(this.growlT=3+Math.random()*3,n.growl(this.chest().clone().setY(this.pos.y+2.5),1.8,.9)),this.dist()<1.7&&this.atkCD<=0&&(this.attack(48),n.scream(this.chest().clone().setY(this.pos.y+2.5),{pitch:.5,dur:.9,vol:1.4}),this.atkCD=1.8,this.P.armR.rotation.x=-1.8),this.pushPlayerApart()}this.sync()}}function Tu(r,t){if(t===Pd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===$l||t===tf){let e=r.getIndex();if(e===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=e.count-2,i=[];if(t===$l)for(let o=1;o<=n;o++)i.push(e.getX(0)),i.push(e.getX(o)),i.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(e.getX(o)),i.push(e.getX(o+1)),i.push(e.getX(o+2))):(i.push(e.getX(o+2)),i.push(e.getX(o+1)),i.push(e.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}class Qx extends _r{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new s1(e)}),this.register(function(e){return new r1(e)}),this.register(function(e){return new p1(e)}),this.register(function(e){return new m1(e)}),this.register(function(e){return new g1(e)}),this.register(function(e){return new a1(e)}),this.register(function(e){return new l1(e)}),this.register(function(e){return new c1(e)}),this.register(function(e){return new h1(e)}),this.register(function(e){return new i1(e)}),this.register(function(e){return new u1(e)}),this.register(function(e){return new o1(e)}),this.register(function(e){return new d1(e)}),this.register(function(e){return new f1(e)}),this.register(function(e){return new e1(e)}),this.register(function(e){return new _1(e)}),this.register(function(e){return new v1(e)})}load(t,e,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=qr.extractUrlBase(t);o=qr.resolveURL(c,this.path)}else o=qr.extractUrlBase(t);this.manager.itemStart(t);const a=function(c){i?i(c):console.error(c),s.manager.itemError(t),s.manager.itemEnd(t)},l=new kf(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{s.parse(c,o,function(h){e(h),s.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===jf){try{o[pe.KHR_BINARY_GLTF]=new x1(t)}catch(u){i&&i(u);return}s=JSON.parse(o[pe.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new I1(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],f=s.extensionsRequired||[];switch(u){case pe.KHR_MATERIALS_UNLIT:o[u]=new n1;break;case pe.KHR_DRACO_MESH_COMPRESSION:o[u]=new y1(s,this.dracoLoader);break;case pe.KHR_TEXTURE_TRANSFORM:o[u]=new M1;break;case pe.KHR_MESH_QUANTIZATION:o[u]=new S1;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,s){n.parse(t,e,i,s)})}}function t1(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}const pe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class e1{constructor(t){this.parser=t,this.name=pe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const s=e[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const s=e.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t];let c;const h=new Ht(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Mn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Vf(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new wn(h),c.distance=u;break;case"spot":c=new Ic(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,bi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(c),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,s=n.json.nodes[t],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}}class n1{constructor(){this.name=pe.KHR_MATERIALS_UNLIT}getMaterialType(){return ai}extendParams(t,e,n){const i=[];t.color=new Ht(1,1,1),t.opacity=1;const s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],Mn),t.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",s.baseColorTexture,Ne))}return Promise.all(i)}}class i1{constructor(t){this.parser=t,this.name=pe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}}class s1{constructor(t){this.parser=t,this.name=pe.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:we}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new it(a,a)}return Promise.all(s)}}class r1{constructor(t){this.parser=t,this.name=pe.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:we}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return e.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class o1{constructor(t){this.parser=t,this.name=pe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:we}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class a1{constructor(t){this.parser=t,this.name=pe.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:we}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];e.sheenColor=new Ht(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],Mn)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,Ne)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class l1{constructor(t){this.parser=t,this.name=pe.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:we}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class c1{constructor(t){this.parser=t,this.name=pe.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:we}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new Ht().setRGB(a[0],a[1],a[2],Mn),Promise.all(s)}}class h1{constructor(t){this.parser=t,this.name=pe.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:we}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class u1{constructor(t){this.parser=t,this.name=pe.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:we}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new Ht().setRGB(a[0],a[1],a[2],Mn),o.specularColorTexture!==void 0&&s.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,Ne)),Promise.all(s)}}class f1{constructor(t){this.parser=t,this.name=pe.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:we}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(s)}}class d1{constructor(t){this.parser=t,this.name=pe.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:we}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class p1{constructor(t){this.parser=t,this.name=pe.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,o)}}class m1{constructor(t){this.parser=t,this.name=pe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const o=s.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class g1{constructor(t){this.parser=t,this.name=pe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const o=s.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class _1{constructor(t){this.name=pe.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}}class v1{constructor(t){this.name=pe.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==kn.TRIANGLES&&c.mode!==kn.TRIANGLE_STRIP&&c.mode!==kn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(const m of u){const _=new ie,g=new L,p=new Zi,x=new L(1,1,1),y=new xv(m.geometry,m.material,f);for(let v=0;v<f;v++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&x.fromBufferAttribute(l.SCALE,v),y.setMatrixAt(v,_.compose(g,p,x));for(const v in l)if(v==="_COLOR_0"){const C=l[v];y.instanceColor=new ec(C.array,C.itemSize,C.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&m.geometry.setAttribute(v,l[v]);De.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),d.push(y)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const jf="glTF",Ur=12,wu={JSON:1313821514,BIN:5130562};class x1{constructor(t){this.name=pe.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Ur),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==jf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ur,s=new DataView(t,Ur);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===wu.JSON){const c=new Uint8Array(t,Ur+o,a);this.content=n.decode(c)}else if(l===wu.BIN){const c=Ur+o;this.body=t.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class y1{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=pe.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,s=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=ac[h]||h.toLowerCase();a[u]=o[h]}for(const h in t.attributes){const u=ac[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[t.attributes[h]],d=Js[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return e.getDependency("bufferView",s).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(const m in d.attributes){const _=d.attributes[m],g=l[m];g!==void 0&&(_.normalized=g)}u(d)},a,c,Mn,f)})})}}class M1{constructor(){this.name=pe.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class S1{constructor(){this.name=pe.KHR_MESH_QUANTIZATION}}class Kf extends ro{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[s+o];return e}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-e,u=(n-e)/h,f=u*u,d=f*u,m=t*c,_=m-c,g=-2*d+3*f,p=d-f,x=1-g,y=p-f+u;for(let v=0;v!==a;v++){const C=o[_+v+a],w=o[_+v+l]*h,E=o[m+v+a],P=o[m+v]*h;s[v]=x*C+y*w+g*E+p*P}return s}}const b1=new Zi;class T1 extends Kf{interpolate_(t,e,n,i){const s=super.interpolate_(t,e,n,i);return b1.fromArray(s).normalize().toArray(s),s}}const kn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Js={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Eu={9728:rn,9729:Dn,9984:Wu,9985:jo,9986:Or,9987:Ei},Au={33071:Hi,33648:aa,10497:Pi},cl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ac={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},zi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},w1={CUBICSPLINE:void 0,LINEAR:Kr,STEP:jr},hl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function E1(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new At({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ci})),r.DefaultMaterial}function cs(r,t,e){for(const n in e.extensions)r[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function bi(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function A1(r,t,e){let n=!1,i=!1,s=!1;for(let c=0,h=t.length;c<h;c++){const u=t[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,h=t.length;c<h;c++){const u=t[c];if(n){const f=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):r.attributes.position;o.push(f)}if(i){const f=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(f)}if(s){const f=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],f=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function R1(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)r.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function C1(r){let t;const e=r.extensions&&r.extensions[pe.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+ul(e.attributes):t=r.indices+":"+ul(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)t+=":"+ul(r.targets[n]);return t}function ul(r){let t="";const e=Object.keys(r).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+r[e[n]]+";";return t}function lc(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function P1(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const L1=new ie;class I1{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new t1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new Bf(this.options.manager):this.textureLoader=new px(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new kf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return cs(s,a,i),bi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=e.length;i<s;i++){const o=e[i].joints;for(let a=0,l=o.length;a<l;a++)t[o[a]].isBone=!0}for(let i=0,s=t.length;i<s;i++){const o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())s(h,a.children[c])};return s(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const s=t(e[i]);s&&n.push(s)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(s,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[pe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(qr.resolveURL(e.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,s=e.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const o=cl[i.type],a=Js[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new on(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=cl[i.type],c=Js[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let _,g;if(d&&d!==u){const p=Math.floor(f/d),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=e.cache.get(x);y||(_=new c(a,p*d,i.count*d/h),y=new yf(_,d/h),e.cache.add(x,y)),g=new $r(y,l,f%d/h,m)}else a===null?_=new c(i.count*l):_=new c(a,f,i.count*l),g=new on(_,l,m);if(i.sparse!==void 0){const p=cl.SCALAR,x=Js[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,C=new x(o[1],y,i.sparse.count*p),w=new c(o[2],v,i.sparse.count*l);a!==null&&(g=new on(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let E=0,P=C.length;E<P;E++){const b=C[E];if(g.setX(b,w[E*l]),l>=2&&g.setY(b,w[E*l+1]),l>=3&&g.setZ(b,w[E*l+2]),l>=4&&g.setW(b,w[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(t){const e=this.json,n=this.options,s=e.textures[t].source,o=e.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(t,s,a)}loadTextureImage(t,e,n){const i=this,s=this.json,o=s.textures[t],a=s.images[e],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return h.magFilter=Eu[f.magFilter]||Dn,h.minFilter=Eu[f.minFilter]||Ei,h.wrapS=Au[f.wrapS]||Pi,h.wrapT=Au[f.wrapT]||Pi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==rn&&h.minFilter!==Dn,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,i=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const o=i.images[t],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let m=f;e.isImageBitmapLoader===!0&&(m=function(_){const g=new je(_);g.needsUpdate=!0,f(g)}),e.load(qr.resolveURL(u,s.path),m,void 0,d)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),bi(u,o),u.userData.mimeType=o.mimeType||P1(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[pe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[pe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[pe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new wf,ei.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new wc,ei.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return At}loadMaterial(t){const e=this,n=this.json,i=this.extensions,s=n.materials[t];let o;const a={},l=s.extensions||{},c=[];if(l[pe.KHR_MATERIALS_UNLIT]){const u=i[pe.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,s,e))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new Ht(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Mn),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",u.baseColorTexture,Ne)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,a)})))}s.doubleSided===!0&&(a.side=En);const h=s.alphaMode||hl.OPAQUE;if(h===hl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===hl.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==ai&&(c.push(e.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new it(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==ai&&(c.push(e.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==ai){const u=s.emissiveFactor;a.emissive=new Ht().setRGB(u[0],u[1],u[2],Mn)}return s.emissiveTexture!==void 0&&o!==ai&&c.push(e.assignTexture(a,"emissiveMap",s.emissiveTexture,Ne)),Promise.all(c).then(function(){const u=new o(a);return s.name&&(u.name=s.name),bi(u,s),e.associations.set(u,{materials:t}),s.extensions&&cs(i,u,s),u})}createUniqueName(t){const e=Pe.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[pe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return Ru(l,a,e)})}const o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a],h=C1(c),u=i[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[pe.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=Ru(new ke,c,e),i[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,i=this.extensions,s=n.meshes[t],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?E1(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,m=h.length;d<m;d++){const _=h[d],g=o[d];let p;const x=c[d];if(g.mode===kn.TRIANGLES||g.mode===kn.TRIANGLE_STRIP||g.mode===kn.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new gv(_,x):new ot(_,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===kn.TRIANGLE_STRIP?p.geometry=Tu(p.geometry,tf):g.mode===kn.TRIANGLE_FAN&&(p.geometry=Tu(p.geometry,$l));else if(g.mode===kn.LINES)p=new Tf(_,x);else if(g.mode===kn.LINE_STRIP)p=new Ec(_,x);else if(g.mode===kn.LINE_LOOP)p=new yv(_,x);else if(g.mode===kn.POINTS)p=new Ef(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&R1(p,s),p.name=e.createUniqueName(s.name||"mesh_"+t),bi(p,s),g.extensions&&cs(i,p,g),e.assignFinalMaterial(p),u.push(p)}for(let d=0,m=u.length;d<m;d++)e.associations.set(u[d],{meshes:t,primitives:d});if(u.length===1)return s.extensions&&cs(i,u[0],s),u[0];const f=new se;s.extensions&&cs(i,f,s),e.associations.set(f,{meshes:t});for(let d=0,m=u.length;d<m;d++)f.add(u[d]);return f})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new mn(qi.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new ga(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),bi(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,s=e.joints.length;i<s;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const f=new ie;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new Tc(a,l)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],s=i.name?i.name:"animation_"+t,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){const d=i.channels[u],m=i.samplers[d.sampler],_=d.target,g=_.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,x=i.parameters!==void 0?i.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",x)),c.push(m),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],m=u[2],_=u[3],g=u[4],p=[];for(let x=0,y=f.length;x<y;x++){const v=f[x],C=d[x],w=m[x],E=_[x],P=g[x];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const b=n._createAnimationTracks(v,C,w,E,P);if(b)for(let M=0;M<b.length;M++)p.push(b[M])}return new rx(s,void 0,p)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],s=n._loadNodeShallow(t),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,L1)});for(let d=0,m=u.length;d<m;d++)h.add(u[d]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const s=e.nodes[t],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let h;if(s.isBone===!0?h=new Sf:c.length>1?h=new se:c.length===1?h=c[0]:h=new De,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=o),bi(h,s),s.extensions&&cs(n,h,s),s.matrix!==void 0){const u=new ie;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,s=new se;n.name&&(s.name=i.createUniqueName(n.name)),bi(s,n),n.extensions&&cs(e,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[f,d]of i.associations)(f instanceof ei||f instanceof je)&&u.set(f,d);return h.traverse(f=>{const d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=c(s),s})}_createAnimationTracks(t,e,n,i,s){const o=[],a=t.name?t.name:t.uuid,l=[];zi[s.path]===zi.weights?t.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(zi[s.path]){case zi.weights:c=lr;break;case zi.rotation:c=cr;break;case zi.position:case zi.scale:c=hr;break;default:switch(n.itemSize){case 1:c=lr;break;case 2:case 3:default:c=hr;break}break}const h=i.interpolation!==void 0?w1[i.interpolation]:Kr,u=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const m=new c(l[f]+"."+zi[s.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=lc(e.constructor),i=new Float32Array(e.length);for(let s=0,o=e.length;s<o;s++)i[s]=e[s]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof cr?T1:Kf;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function D1(r,t,e){const n=t.attributes,i=new Wn;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){const h=lc(Js[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=t.targets;if(s!==void 0){const a=new L,l=new L;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const f=e.json.accessors[u.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){const _=lc(Js[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new ui;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Ru(r,t,e){const n=t.attributes,i=[];function s(o,a){return e.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=ac[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(t.indices!==void 0&&!r.index){const o=e.getDependency("accessor",t.indices).then(function(a){r.setIndex(a)});i.push(o)}return xe.workingColorSpace!==Mn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${xe.workingColorSpace}" not supported.`),bi(r,t),D1(r,t,e),Promise.all(i).then(function(){return t.targets!==void 0?A1(r,t.targets,e):r})}const Cu="./assets/",N1=["decrepit_wallpaper","peeling_painted_wall","worn_plaster_wall","plastered_wall_03","long_white_tiles","interior_tiles","worn_tile_floor","terracotta_floor_tiles","old_wood_floor","wood_floor_worn","concrete_floor_worn_001","concrete_wall_003","brown_mud_leaves_01","weathered_planks","clay_roof_tiles","rough_pine_door","wood_cabinet_worn_long","dirty_carpet","damaged_plaster"],U1=["Sofa_01","Television_01","dining_table","dining_chair_02","old_bed_frame","ClassicNightstand_01","vintage_cabinet_01","power_box_01","lightbulb_01","wooden_bookshelf_worn","wooden_crate_01","Barrel_01","trashbag","ammo_box","hanging_picture_frame_01","dead_tree_trunk","dead_tree_trunk_02","plastic_monobloc_chair_01","rubber_boots","mantel_clock_01","drawer_cabinet","painted_wooden_cabinet","wooden_bowl_01","pot_enamel_01"];async function F1(r,t){const e=new Of;let n=0,i=0;const s=()=>{i++,t&&t(i/Math.max(1,n))},o=new Bf(e),a=new Qx(e),l=Math.min(8,r.capabilities.getMaxAnisotropy()),c={tex:{},models:{},env:null,head:null,headMaps:{}},h=window.__EMBED,u=_=>h&&h.files[_]||Cu+_,f=(_,g,p)=>h&&h.models[_]?a.parse(h.models[_],"",g,p):a.load(Cu+_,g,void 0,p),d=(_,g)=>(n++,new Promise(p=>o.load(_,x=>{x.colorSpace=g?Ne:Ti,x.wrapS=x.wrapT=Pi,x.anisotropy=l,s(),p(x)},void 0,()=>{s(),p(null)}))),m=[];for(const _ of N1)m.push(Promise.all([d(u(`tex/${_}/diff.jpg`),!0),d(u(`tex/${_}/nor_gl.jpg`),!1),d(u(`tex/${_}/rough.jpg`),!1)]).then(([g,p,x])=>{c.tex[_]={map:g,normalMap:p,roughnessMap:x}}));for(const _ of U1)n++,m.push(new Promise(g=>f(`models/${_}/${_}.json`,p=>{p.scene.traverse(x=>{x.isMesh&&(x.castShadow=!0,x.receiveShadow=!0,x.material.map&&(x.material.map.anisotropy=l))}),c.models[_]=p.scene,s(),g()},p=>{console.warn("modelo",_,p),s(),g()})));return n++,m.push(new Promise(_=>f("human/LeePerrySmith.json",g=>{g.scene.traverse(p=>{p.isMesh&&!c.head&&(c.head=p)}),s(),_()},()=>{s(),_()}))),m.push(d(u("human/head_col.jpg"),!0).then(_=>c.headMaps.map=_)),m.push(d(u("human/head_nor.jpg"),!1).then(_=>c.headMaps.normalMap=_)),m.push(d(u("human/head_spec.jpg"),!1).then(_=>c.headMaps.spec=_)),n++,m.push(d(u("hdr/night.jpg"),!0).then(_=>{if(!_)return;_.mapping=oa;const g=new Ql(r);c.env=g.fromEquirectangular(_).texture,_.dispose(),g.dispose()})),await Promise.all(m),c}function O1(r,t,e={}){const n=r.tex[t]||{},i=new At({map:n.map||null,normalMap:n.normalMap||null,roughnessMap:n.roughnessMap||null,roughness:e.rough??1,metalness:e.metal??0,color:e.color??16777215,envMapIntensity:e.env??.35});return i.normalMap&&i.normalScale.set(e.nscale??1,e.nscale??1),i}function k1(r,t,e,n,i,s,o=0,a={}){const l=r.models[t];if(!l)return null;const c=l.clone(!0);a.scale&&c.scale.setScalar(a.scale),c.rotation.y=o,c.position.set(0,0,0),c.updateMatrixWorld(!0);const h=new Wn().setFromObject(c);return c.position.set(n,i-h.min.y,s),a.tint&&c.traverse(u=>{u.isMesh&&(u.material=u.material.clone(),u.material.color.multiply(new Ht(a.tint)))}),a.dirty&&c.traverse(u=>{u.isMesh&&(u.material=u.material.clone(),u.material.color.multiplyScalar(a.dirty))}),e.add(c),c.updateMatrixWorld(!0),c.userData.box=new Wn().setFromObject(c),c}const Fr=new L;function On(r,t,e,n,i,s){const o=2*Math.PI*i/4,a=Math.max(s-2*i,0),l=Math.PI/4;Fr.copy(t),Fr[n]=0,Fr.normalize();const c=.5*o/(o+a),h=1-Fr.angleTo(r)/l;return Math.sign(Fr[e])===1?h*c:a/(o+a)+c+c*(1-h)}class Bn extends Fe{constructor(t=1,e=1,n=1,i=2,s=.1){if(i=i*2+1,s=Math.min(t/2,e/2,n/2,s),super(1,1,1,i,i,i),i===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new L,l=new L,c=new L(t,e,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,m=new L,_=.5/i;for(let g=0,p=0;g<h.length;g+=3,p+=2)switch(a.fromArray(h,g),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[g+0]=c.x*Math.sign(a.x)+l.x*s,h[g+1]=c.y*Math.sign(a.y)+l.y*s,h[g+2]=c.z*Math.sign(a.z)+l.z*s,u[g+0]=l.x,u[g+1]=l.y,u[g+2]=l.z,Math.floor(g/d)){case 0:m.set(1,0,0),f[p+0]=On(m,l,"z","y",s,n),f[p+1]=1-On(m,l,"y","z",s,e);break;case 1:m.set(-1,0,0),f[p+0]=1-On(m,l,"z","y",s,n),f[p+1]=1-On(m,l,"y","z",s,e);break;case 2:m.set(0,1,0),f[p+0]=1-On(m,l,"x","z",s,t),f[p+1]=On(m,l,"z","x",s,n);break;case 3:m.set(0,-1,0),f[p+0]=1-On(m,l,"x","z",s,t),f[p+1]=1-On(m,l,"z","x",s,n);break;case 4:m.set(0,0,1),f[p+0]=1-On(m,l,"x","y",s,t),f[p+1]=1-On(m,l,"y","x",s,e);break;case 5:m.set(0,0,-1),f[p+0]=On(m,l,"x","y",s,t),f[p+1]=1-On(m,l,"y","x",s,e);break}}}const _n=(r=0,t=0,e=0)=>new L(r,t,e);function Ss(r,t,e,n=!0){const i=document.createElement("canvas");i.width=r,i.height=t,e(i.getContext("2d"),r,t);const s=new $i(i);return n&&(s.colorSpace=Ne),s.anisotropy=8,s}function Pu(r=3,t="#e6e0cf"){return Ss(512,512,(e,n,i)=>{e.fillStyle=t,e.fillRect(0,0,n,i);let s=r;const o=()=>(s=s*16807%2147483647)/2147483647;for(let a=0;a<60;a++){const l=e.createRadialGradient(o()*n,o()*i,1,o()*n,o()*i,20+o()*80);l.addColorStop(0,"rgba(120,100,60,0.12)"),l.addColorStop(1,"rgba(120,100,60,0)"),e.fillStyle=l,e.fillRect(0,0,n,i)}for(let a=0;a<26;a++){const l=o()*n,c=o()*i*.7,h=20+o()*120,u=e.createLinearGradient(0,c,0,c+h);u.addColorStop(0,"rgba(110,50,15,0.55)"),u.addColorStop(1,"rgba(110,50,15,0)"),e.fillStyle=u,e.fillRect(l,c,1+o()*3,h),e.fillStyle="rgba(90,40,12,0.6)",e.beginPath(),e.arc(l,c,1+o()*3,0,7),e.fill()}for(let a=0;a<2e3;a++)e.fillStyle=`rgba(60,50,30,${o()*.08})`,e.fillRect(o()*n,o()*i,1,1);for(let a=0;a<4;a++)e.fillStyle="rgba(80,0,0,0.5)",e.beginPath(),e.ellipse(n*.12+o()*30,i*.45+o()*80,5,9,o(),0,7),e.fill()})}function B1(r){const t=new se,e=new we({color:13483934,roughness:.38,clearcoat:.5,clearcoatRoughness:.5,envMap:r,envMapIntensity:.6}),n=new At({color:1709844,roughness:.6}),i=new At({color:12105904,roughness:.25,metalness:.9,envMap:r}),s=new so;s.moveTo(-.105,0),s.lineTo(.105,0),s.lineTo(.095,.05),s.lineTo(.055,.095),s.lineTo(-.075,.1),s.lineTo(-.1,.06),s.lineTo(-.105,0);const o=new xa(s,{depth:.19,bevelEnabled:!0,bevelThickness:.012,bevelSize:.01,bevelSegments:4,curveSegments:6});o.translate(0,0,-.095),o.rotateY(-Math.PI/2);const a=new ot(o,e);a.castShadow=a.receiveShadow=!0,t.add(a);const l=new se;l.position.set(0,.078,.072),l.rotation.x=-.83,t.add(l);const c=new ot(new Ue(.047,.049,.006,32),new At({color:15525590,roughness:.5}));c.rotation.x=Math.PI/2,l.add(c);const h=Ss(256,256,(w,E,P)=>{w.fillStyle="#f0ead8",w.fillRect(0,0,E,P),w.fillStyle="#222",w.font="bold 22px Arial",w.textAlign="center",w.textBaseline="middle";for(let b=0;b<10;b++){const M=-Math.PI*.3+b*(Math.PI*1.5/9);w.fillText(String((b+1)%10),E/2+Math.cos(M)*92,P/2+Math.sin(M)*92)}}),u=new ot(new Gi(.046,32),new At({map:h,roughness:.5}));u.position.z=.0035,l.add(u);const f=new ot(new Cc(.026,.046,40),new we({color:2762274,roughness:.3,clearcoat:.8,transparent:!0,opacity:.88}));f.position.z=.006,l.add(f);for(let w=0;w<10;w++){const E=-Math.PI*.3+w*(Math.PI*1.5/9),P=new ot(new Gi(.0075,16),new At({color:15788760}));P.position.set(Math.cos(E)*.036,-Math.sin(E)*.036,.0068),l.add(P)}const d=new ot(new Fe(.004,.012,.006),i);d.position.set(.04,-.03,.009),d.rotation.z=.6,l.add(d);const m=new ot(new Gi(.016,20),new At({color:16777215,roughness:.4}));m.position.z=.0072,l.add(m);for(const w of[-.068,.068]){const E=new ot(new Bn(.03,.03,.05,2,.008),e);E.position.set(w,.112,-.02),t.add(E);const P=new ot(new Ue(.006,.006,.02,10),n);P.position.set(w,.125,-.02),t.add(P)}const _=new se;_.position.set(0,.145,-.02),t.add(_);const g=new ea([_n(-.1,-.01,0),_n(-.05,.012,0),_n(.05,.012,0),_n(.1,-.01,0)]),p=new ot(new Xr(g,24,.014,12),e);p.scale.set(1,1,1.25),_.add(p);const x=[_n(0,0),_n(.024,0),_n(.03,.01),_n(.032,.026),_n(.028,.032),_n(0,.034)].map(w=>new it(w.x,w.y));for(const w of[-1,1]){const E=new ot(new bs(x,24),e);E.position.set(w*.1,-.012,0),E.rotation.x=Math.PI,_.add(E);const P=new ot(new Gi(.02,20),n);P.position.set(w*.1,-.047,0),P.rotation.x=Math.PI/2,_.add(P)}_.traverse(w=>{w.isMesh&&(w.castShadow=!0)});const y=[];for(let w=0;w<=400;w++){const E=w/400,P=E*Math.PI*2*26,b=_n(-.1-E*.06,-.02-Math.sin(E*Math.PI)*.07,0-E*.02);b.x+=Math.cos(P)*.006,b.y+=Math.sin(P)*.006,y.push(b)}const v=new ot(new Xr(new ea(y),800,.0022,5),new At({color:12562835,roughness:.5}));_.add(v);const C=[_n(0,.01,-.105),_n(0,.005,-.2),_n(.05,0,-.3),_n(0,0,-.5)];return t.add(new ot(new Xr(new ea(C),20,.003,5),n)),t.userData.handset=_,t.userData.hsBase=_.position.clone(),t}function z1(r){const i=new we({map:Pu(3,"#c8c2b0"),roughness:.32,clearcoat:.6,clearcoatRoughness:.35,envMap:r,envMapIntensity:.35}),s=new At({map:Pu(9,"#8e8a7c"),roughness:.55,envMap:r,envMapIntensity:.15}),o=new At({color:13684944,roughness:.12,metalness:1,envMap:r,envMapIntensity:1}),a=new At({color:2762018,roughness:.8}),l=new se,c=.04,h=(v,C,w,E,P,b,M=i,I=.015)=>{const z=new ot(new Bn(v,C,w,3,I),M);return z.position.set(E,P,b),z.castShadow=z.receiveShadow=!0,l.add(z),z};h(.72,1.62,c,0,1.62/2,-.66/2+c/2,i,.02),h(c,1.62,.66,-.72/2+c/2,1.62/2,0,i,.03),h(c,1.62,.66,.72/2-c/2,1.62/2,0,i,.03),h(.72,c*1.5,.66,0,1.62-c*.75,0,i,.05),h(.72,.12,.66,0,.06,0,i,.02),h(.72-2*c,1.62-.2,.01,0,1.62/2+.03,-.66/2+c+.005,s,.004),h(.01,1.62-.2,.66-c,-.72/2+c+.005,1.62/2+.03,.02,s,.004),h(.01,1.62-.2,.66-c,.72/2-c-.005,1.62/2+.03,.02,s,.004),h(.72-2*c-.04,.22,.66-.12,0,1.62-.26,-.03,new At({color:11055284,roughness:.2,metalness:.7,envMap:r}),.01);const u=new At({color:10066329,roughness:.35,metalness:.8,envMap:r});for(const v of[.42,.78,1.1]){for(let w=0;w<13;w++){const E=new ot(new Ue(.003,.003,.56,5),u);E.rotation.x=Math.PI/2,E.position.set(-.72/2+c+.03+w*((.72-2*c-.06)/12),v,0),l.add(E)}const C=new ot(new Fe(.72-2*c-.02,.006,.006),u);C.position.set(0,v,(.66-.1)/2),l.add(C)}h(.72-2*c-.04,.2,.66-.12,0,.24,-.02,new we({color:13623520,roughness:.1,transparent:!0,opacity:.35,transmission:.2}),.01);const f=new se;f.position.set(-.72/2,0,.66/2),l.add(f);const d=new ot(new Bn(.72,1.62-.12,.07,3,.03),i);d.position.set(.72/2,.12+(1.62-.12)/2,.035),d.castShadow=!0,f.add(d);const m=new ot(new Fe(.72-.06,1.62-.2,.012),a);m.position.set(.72/2,.12+(1.62-.12)/2,-.004),f.add(m);const _=new ot(new Bn(.72-.08,1.62-.24,.03,2,.01),s);_.position.set(.72/2,.12+(1.62-.12)/2,-.02),f.add(_);for(const v of[.5,.85,1.2]){const C=new ot(new Fe(.58,.09,.06),s);C.position.set(.72/2,v,-.06),f.add(C)}const g=new we({color:3820074,roughness:.05,transmission:.6,transparent:!0,opacity:.7,envMap:r});for(let v=0;v<3;v++){const C=new ot(new Ue(.028,.03,.22,12),g);C.position.set(.16+v*.15,.97,-.06),f.add(C)}const p=new ot(new _s(.012,.22,4,10),o);p.position.set(.72-.06,1,.1),f.add(p);for(const v of[.88,1.12]){const C=new ot(new Ue(.01,.012,.04,8),o);C.rotation.x=Math.PI/2,C.position.set(.72-.06,v,.08),f.add(C)}const x=new ot(new ni(.16,.035),new At({map:Ss(256,56,(v,C,w)=>{v.fillStyle="#b8b8b0",v.fillRect(0,0,C,w),v.fillStyle="#4a1010",v.font="italic bold 34px Georgia",v.textAlign="center",v.fillText("Gelomatic",C/2,40)}),metalness:.8,roughness:.3,envMap:r}));x.position.set(.72/2,1.42,.072),f.add(x);const y=new wn(15266047,0,1.6,2);return y.position.set(0,1.62-.42,.05),l.add(y),{group:l,pivot:f,bulb:y,W:.72,D:.66,H:1.62}}function V1(r){const t=new se,e=new we({map:H1(),color:15921902,roughness:.32,metalness:.15,clearcoat:1,clearcoatRoughness:.08,envMap:r,envMapIntensity:1.2}),n=new At({color:1118740,roughness:.55,envMap:r,envMapIntensity:.4}),i=new we({color:658704,roughness:.03,metalness:.2,clearcoat:1,envMap:r,envMapIntensity:1.6}),s=new At({color:13421772,roughness:.15,metalness:1,envMap:r}),o=3.9,a=1.64,l=new so,c=.33,h=1.25,u=-1.22;l.moveTo(-o/2,.3),l.lineTo(u-c-.05,.3),l.absarc(u,.3,c+.05,Math.PI,0,!0),l.lineTo(h-c-.05,.3),l.absarc(h,.3,c+.05,Math.PI,0,!0),l.lineTo(o/2-.02,.3),l.bezierCurveTo(o/2+.04,.42,o/2+.05,.62,o/2-.02,.72),l.bezierCurveTo(1.6,.78,1.1,.84,.75,.86),l.lineTo(.05,1.33),l.bezierCurveTo(-.3,1.38,-1.05,1.38,-1.4,1.32),l.bezierCurveTo(-1.7,1.15,-1.9,.98,-o/2+.02,.9),l.bezierCurveTo(-o/2-.03,.6,-o/2-.02,.4,-o/2,.3);const f=new xa(l,{depth:a-.12,bevelEnabled:!0,bevelThickness:.06,bevelSize:.06,bevelSegments:5,curveSegments:24});f.translate(0,0,-1.52/2),f.rotateY(-Math.PI/2);const d=f.attributes.position;for(let F=0;F<d.count;F++){const H=d.getY(F);H>.86&&d.setX(F,d.getX(F)*(1-(H-.86)*.32))}f.computeVertexNormals();const m=new ot(f,e);m.castShadow=m.receiveShadow=!0,t.add(m);const _=f.clone(),g=_.attributes.position;for(let F=0;F<g.count;F++)g.getY(F)<.9&&g.setY(F,.9),g.setX(F,g.getX(F)*1.006);_.computeVertexNormals();const p=new ot(_,i);p.scale.set(1,1,1),p.position.y=.005,t.add(p);for(const F of[0,-.75])for(const H of[-1,1]){const W=new ot(new Fe(.02,.42,.07),e);W.position.set(H*.73,1.12,F-.1),W.rotation.z=H*.16,t.add(W)}for(const F of[o/2+.02,-o/2-.02]){const H=new ot(new Bn(a+.04,.16,.12,3,.04),n);H.position.set(0,.36,F),t.add(H)}const x=new ot(new ni(.8,.1),new At({map:Ss(128,16,(F,H,W)=>{F.fillStyle="#111",F.fillRect(0,0,H,W),F.fillStyle="#333";for(let Z=0;Z<H;Z+=6)F.fillRect(Z,0,3,W)}),roughness:.6}));x.position.set(0,.6,o/2+.07),t.add(x);const y=new At({color:16777215,emissive:16773840,emissiveIntensity:4,roughness:.1}),v=new At({color:4194304,emissive:16715776,emissiveIntensity:1.2,roughness:.2});for(const F of[-.58,.58]){const H=new ot(new Bn(.36,.13,.05,2,.02),y);H.position.set(F,.64,o/2+.05),t.add(H);const W=new ot(new Bn(.14,.26,.05,2,.02),v);W.position.set(F*1.18,.72,-o/2-.02),t.add(W)}const C=new At({color:1381653,roughness:.92}),w=new At({color:9079434,roughness:.35,metalness:.9,envMap:r});for(const[F,H]of[[-.72,h],[.72,h],[-.72,u],[.72,u]]){const W=new se;W.position.set(F,c,H),t.add(W);const Z=new ot(new ji(c-.08,.085,12,32),C);Z.rotation.y=Math.PI/2,Z.scale.set(1,1,1.4),Z.castShadow=!0,W.add(Z);const Y=new ot(new Ue(c-.12,c-.12,.18,24),w);Y.rotation.z=Math.PI/2,W.add(Y);for(let ct=0;ct<5;ct++){const _t=new ot(new Fe(.02,.14,.03),n);_t.position.x=Math.sign(F)*.095,_t.rotation.x=ct*Math.PI*2/5,_t.translateY(.07),W.add(_t)}}for(const F of[-1,1]){const H=new ot(new Bn(.06,.09,.14,2,.02),n);H.position.set(F*.86,1,.55),t.add(H);for(const W of[.05,-.85]){const Z=new ot(new Bn(.02,.025,.12,2,.008),s);Z.position.set(F*.81,.9,W),t.add(Z)}}const E=new se;E.position.set(0,1.4,-.45),t.add(E);const P=new ot(new Bn(1.15,.1,.26,3,.04),n);E.add(P);const b=new we({color:5242880,emissive:16714240,emissiveIntensity:0,roughness:.15,transmission:.3,clearcoat:1}),M=new we({color:64,emissive:12543,emissiveIntensity:0,roughness:.15,transmission:.3,clearcoat:1}),I=new ot(new Bn(.52,.11,.24,3,.05),b);I.position.set(-.29,.04,0),E.add(I);const z=new ot(new Bn(.52,.11,.24,3,.05),M);z.position.set(.29,.04,0),E.add(z);const V=new ot(new Ue(.003,.004,.6,5),n);return V.position.set(.4,1.65,-1.3),V.rotation.x=-.15,t.add(V),t.traverse(F=>{F.isMesh&&(F.castShadow=!0,F.receiveShadow=!0)}),{group:t,lensR:b,lensB:M,hlMat:y}}function H1(){return Ss(1024,256,(r,t,e)=>{r.fillStyle="#f4f4f0",r.fillRect(0,0,t,e),r.fillStyle="#16324f",r.fillRect(0,e*.58,t,e*.1),r.fillStyle="#a01818",r.fillRect(0,e*.68,t,e*.025);let n=7;const i=()=>(n=n*16807%2147483647)/2147483647;for(let s=0;s<300;s++)r.fillStyle=`rgba(90,70,40,${i()*.1})`,r.fillRect(i()*t,e*.75+i()*e*.25,2+i()*8,1+i()*3)})}function G1(r,t){const e=Ss(1024,160,(s,o,a)=>{s.clearRect(0,0,o,a),s.fillStyle="#16324f",s.font="bold 86px Arial Black, Arial",s.textAlign="center",s.textBaseline="middle",s.fillText("POLÍCIA MILITAR",o/2,a/2+4)}),n=Ss(256,128,(s,o,a)=>{s.fillStyle="#16324f",s.font="bold 90px Arial",s.textAlign="center",s.textBaseline="middle",s.fillText("2207",o/2,a/2)}),i=(s,o,a)=>new ot(new ni(o,a),new we({map:s,transparent:!0,roughness:.3,clearcoat:1,envMap:t,polygonOffset:!0,polygonOffsetFactor:-2}));for(const s of[-1,1]){const o=i(e,1.5,.23);o.position.set(s*.885,.7,-.1),o.rotation.y=s*Math.PI/2,r.add(o);const a=i(n,.4,.2);a.position.set(s*.86,1.18,-1.15),a.rotation.y=s*Math.PI/2,r.add(a)}}const Tn=2.7,Lu=.15,Se=(r=0,t=0,e=0)=>new L(r,t,e);function be(r,t={}){const e=new At({map:r,roughness:t.rough??.88,metalness:t.metal??0,color:t.color??16777215});return t.bump!==!1&&r&&(e.bumpMap=r,e.bumpScale=t.bump??1.5),t.roughMap&&(e.roughnessMap=t.roughMap),e}function Iu(r,t,e,n,i){const s=r.attributes.uv,o=[[n,e],[n,e],[t,n],[t,n],[t,e],[t,e]];for(let a=0;a<6;a++)for(let l=0;l<4;l++){const c=a*4+l;s.setXY(c,s.getX(c)*o[a][0]/i,s.getY(c)*o[a][1]/i)}s.needsUpdate=!0}function W1(r){const t=r.scene,e={colliders:[],occluders:[],bounce:[],interact:[],doors:[],bulbs:[],reveal:[],props:{},updaters:[],stalkerSpots:[Se(1,0,7),Se(15,0,6.8),Se(1,0,11),Se(14.5,0,5),Se(9,0,7),Se(4.5,0,1)]},n=new se;t.add(n);const i=(R,N,j,$,Q,xt,mt)=>{const ft={x0:R,x1:N,y0:j,y1:$,z0:Q,z1:xt,on:!0,tag:mt};return e.colliders.push(ft),ft},s={wpSala:be(Ho(3,[150,138,102])),wpHall:be(Ho(5,[138,118,92])),wpCasal:be(Ho(8,[118,134,126])),wpKid:be(Ho(9,[176,146,146])),tileK:be(Go(7,[188,198,182],8),{rough:.35,bump:2}),tileB:be(Go(12,[170,196,202],10),{rough:.3,bump:2}),floorK:be(Go(15,[138,62,48],6),{rough:.5,bump:2}),floorB:be(Go(16,[200,200,196],12),{rough:.35,bump:2}),wood:be(ds(5),{rough:.6,bump:2}),porch:be(ds(6),{rough:.8,color:9079434}),ext:be(Wo(14),{color:13286808,rough:.95,bump:.6}),ceil:be(Wo(13),{rough:.95}),conc:be(Nr(11),{rough:.92,bump:3}),darkWood:be(ds(9),{color:6965813,rough:.6}),paintWood:be(ds(10),{color:14209216,rough:.7}),metal:new At({color:7829367,roughness:.45,metalness:.7}),rust:be(Nr(31),{color:9067066,rough:.8,metal:.4}),white:be(Wo(22),{color:15131352,rough:.4}),fabric:be(yn(40,[110,80,60],.15)),blanket:be(yn(41,[120,60,70],.9)),sheet:be(yn(42,[205,200,190],1)),redCloth:be(yn(43,[120,10,12],0)),black:new At({color:657930,roughness:.6}),plastic:new At({color:1973790,roughness:.35}),food:new At({color:2759694,roughness:.9}),bone:new At({color:14209208,roughness:.5}),bloodPool:new At({color:2752512,roughness:.08,metalness:.1}),candle:new At({color:15261640,roughness:.6}),glass:new At({map:zx(),transparent:!0,roughness:.1,metalness:.3,depthWrite:!1}),car:new At({color:14606046,roughness:.25,metalness:.4}),carDark:new At({color:1119256,roughness:.2,metalness:.6}),tire:new At({color:1118481,roughness:.9}),bark:be(Nr(51),{color:4864556,rough:1})},o=Ox(17);s.mud=be(o.map,{roughMap:o.rough,rough:1,bump:3}),e.M=s;const a=r.assets,l=a&&a.env,c=(R,N,j,$={})=>{if(!a||!a.tex[R]||!a.tex[R].map)return null;const Q=O1(a,R,$),xt=j/N;for(const mt of["map","normalMap","roughnessMap"])Q[mt]&&(Q[mt]=Q[mt].clone(),Q[mt].repeat.set(xt,xt),Q[mt].needsUpdate=!0);return Q},h=(R,N)=>{N&&(s[R]=N)};h("wpSala",c("decrepit_wallpaper",1.7,1.2,{color:14866108})),h("wpHall",c("decrepit_wallpaper",1.7,1.2,{color:13154464})),h("wpCasal",c("peeling_painted_wall",2,1.2,{color:12898500})),h("wpKid",c("plastered_wall_03",2,1.2,{color:15779008})),h("tileK",c("long_white_tiles",1,1.2,{env:.5,color:14210244})),h("tileB",c("interior_tiles",1.3,1.2,{env:.5,color:13156520})),h("floorK",c("terracotta_floor_tiles",1.8,1.6,{env:.4})),h("floorB",c("worn_tile_floor",1.3,1.2,{env:.5})),h("wood",c("old_wood_floor",2.4,2.2,{env:.45})),h("porch",c("weathered_planks",2.2,2,{color:11051152})),h("ext",c("worn_plaster_wall",2.6,1.2,{color:14208176})),h("ceil",c("damaged_plaster",2.5,2,{color:14210248})),h("conc",c("concrete_wall_003",2.5,1.5,{})),s.concFloor=c("concrete_floor_worn_001",2.5,2.5,{})||s.conc,h("darkWood",c("wood_cabinet_worn_long",1,1.2,{color:10518632})),s.cabinet=c("wood_cabinet_worn_long",1,1.2,{color:14998731})||s.white,s.door=c("rough_pine_door",1,1,{color:11573894}),h("mud",c("brown_mud_leaves_01",3.2,5,{rough:.7,env:.6})),s.roof=c("clay_roof_tiles",2,2,{color:10128e3}),s.carpet=c("dirty_carpet",1.4,1.3,{color:10119770}),s.ceramic=new we({map:Wo(23),color:15789798,roughness:.15,clearcoat:.8,clearcoatRoughness:.2,envMap:l,envMapIntensity:.6});const u=(R,N,j,$,Q=0,xt={})=>{const mt=a?k1(a,R,n,N,j,$,Q,xt):null;if(mt&&xt.col){const ft=mt.userData.box;i(ft.min.x,ft.max.x,ft.min.y,ft.max.y,ft.min.z,ft.max.z)}return mt};function f(R,N,j,$,Q,xt,mt,ft={}){const Qt=new Fe(R,N,j);Iu(Qt,R,N,j,ft.tile??1.2);const Kt=new ot(Qt,$);if(Kt.position.set(Q,xt+N/2,mt),ft.ry&&(Kt.rotation.y=ft.ry),Kt.castShadow=ft.cast??!0,Kt.receiveShadow=!0,(ft.parent||n).add(Kt),ft.col)if(ft.ry){const ae=Math.abs(Math.cos(ft.ry)),ve=Math.abs(Math.sin(ft.ry)),te=R*ae+j*ve,Ie=R*ve+j*ae;i(Q-te/2,Q+te/2,xt,xt+N,mt-Ie/2,mt+Ie/2)}else i(Q-R/2,Q+R/2,xt,xt+N,mt-j/2,mt+j/2);return ft.occ!==!1&&ft.col&&e.occluders.push(Kt),Kt}function d(R,N,j,$,Q,xt,mt,ft=16,Qt={}){const Kt=new ot(new Ue(R,N,j,ft),$);return Kt.position.set(Q,xt+j/2,mt),Kt.castShadow=Qt.cast??!0,Kt.receiveShadow=!0,(Qt.parent||n).add(Kt),Kt}function m(R,N,j,$,Q,xt,mt=0,ft=0,Qt=1.2,Kt={}){const ae=new ni(R,N);if(Qt){const te=ae.attributes.uv;for(let Ie=0;Ie<te.count;Ie++)te.setXY(Ie,te.getX(Ie)*R/Qt,te.getY(Ie)*N/Qt)}const ve=new ot(ae,j);return ve.position.set($,Q,xt),ve.rotation.set(mt,ft,0),ve.receiveShadow=!0,ve.castShadow=Kt.cast??!1,(Kt.parent||n).add(ve),Qt&&R*N>3&&e.bounce.push(ve),ve}function _(R,N,j,$,Q,xt,mt,ft,Qt={}){const Kt=new At({map:R,transparent:!0,depthWrite:!1,roughness:Qt.rough??.25,polygonOffset:!0,polygonOffsetFactor:-2,opacity:Qt.opacity??1}),ae=m(N,j,Kt,$,Q,xt,mt,ft,0,Qt);return ae.renderOrder=2,Qt.rz&&(ae.rotation.z=Qt.rz),ae}const g=(R,N,j,$,Q=.006,xt=0,mt)=>_(R,N,N,j,Q,$,-Math.PI/2,0,{rz:xt,...mt});function p(R,N,j,$,Q=[],xt,mt,ft=0,Qt=Tn,Kt={}){const ae=[];let ve=j;const te=[...Q].sort((Ft,Qe)=>Ft.a-Qe.a);for(const Ft of te)Ft.a>ve&&ae.push({a:ve,b:Ft.a,lo:0,hi:Qt}),Ft.bottom>0&&ae.push({a:Ft.a,b:Ft.b,lo:0,hi:Ft.bottom}),Ft.top<Qt&&ae.push({a:Ft.a,b:Ft.b,lo:Ft.top,hi:Qt}),ve=Ft.b;ve<$&&ae.push({a:ve,b:$,lo:0,hi:Qt});const Ie=mt||xt,si=R==="x"?[Ie,Ie,xt,xt,xt,Ie]:[xt,Ie,xt,xt,xt,xt];for(const Ft of ae){const Qe=Ft.b-Ft.a,fn=(Ft.a+Ft.b)/2,He=Ft.hi-Ft.lo,an=R==="x"?Qe:Lu,ze=R==="x"?Lu:Qe,ln=new Fe(an,He,ze);Iu(ln,an,He,ze,Kt.tile??1.2);const Ve=ln.attributes.uv;for(let ri=0;ri<Ve.count;ri++)Ve.setY(ri,Ve.getY(ri)+(ft+Ft.lo)/(Kt.tile??1.2));const Xe=new ot(ln,si),tn=R==="x"?fn:N,Cn=R==="x"?N:fn;Xe.position.set(tn,ft+Ft.lo+He/2,Cn),Xe.castShadow=!0,Xe.receiveShadow=!0,n.add(Xe),i(tn-an/2,tn+an/2,ft+Ft.lo,ft+Ft.hi,Cn-ze/2,Cn+ze/2),e.occluders.push(Xe)}for(const Ft of te)if(Ft.window){const Qe=(Ft.a+Ft.b)/2,fn=Ft.b-Ft.a,He=Ft.top-Ft.bottom,an=R==="x"?Qe:N,ze=R==="x"?N:Qe,ln=m(fn,He,s.glass,an,ft+Ft.bottom+He/2,ze,0,R==="x"?0:Math.PI/2,0);ln.renderOrder=3,ln.receiveShadow=!1;const Ve=.05,Xe=(tn,Cn,ri,Mr,Es,Sr)=>f(tn,Cn,ri,s.paintWood,Mr,Es,Sr,{tile:.6});R==="x"?(Xe(fn+.1,Ve,.2,Qe,ft+Ft.bottom-Ve,N),Xe(fn+.1,Ve,.2,Qe,ft+Ft.top,N),Xe(Ve,He,.2,Ft.a,ft+Ft.bottom,N),Xe(Ve,He,.2,Ft.b,ft+Ft.bottom,N),Xe(Ve*.6,He,.06,Qe,ft+Ft.bottom,N),i(Ft.a,Ft.b,ft,ft+Ft.top,N-.1,N+.1)):(Xe(.2,Ve,fn+.1,N,ft+Ft.bottom-Ve,Qe),Xe(.2,Ve,fn+.1,N,ft+Ft.top,Qe),Xe(.2,He,Ve,N,ft+Ft.bottom,Ft.a),Xe(.2,He,Ve,N,ft+Ft.bottom,Ft.b),Xe(.06,He,Ve*.6,N,ft+Ft.bottom,Qe),i(N-.1,N+.1,ft,ft+Ft.top,Ft.a,Ft.b)),e.windows=e.windows||[],e.windows.push(ln)}}const x=(R,N)=>({a:R,b:N,bottom:.95,top:2.1,window:!0}),y=(R,N)=>({a:R,b:N,bottom:0,top:2.1});function v(R,N,j,$,Q={}){const xt=$-j,mt=new se;R==="x"?mt.position.set(j,0,N):mt.position.set(N,0,j);const ft=new ot(new Fe(R==="x"?xt-.02:.045,2.08,R==="x"?.045:xt-.02),Q.mat||s.door||s.darkWood);R==="x"?ft.position.set(xt/2,1.04,0):ft.position.set(0,1.04,xt/2),ft.castShadow=!0,ft.receiveShadow=!0,mt.add(ft);const Qt=new ot(new In(.03,10,8),s.metal);R==="x"?Qt.position.set(xt-.1,1,.05):Qt.position.set(.05,1,xt-.1),mt.add(Qt);const Kt=Qt.clone();R==="x"?Kt.position.z=-.05:Kt.position.x=-.05,mt.add(Kt);const ae=(Ie,si,Ft,Qe,fn,He)=>f(Ie,si,Ft,s.paintWood,Qe,fn,He,{tile:.6});R==="x"?(ae(.06,2.12,.2,j-.03,0,N),ae(.06,2.12,.2,$+.03,0,N),ae(xt+.12,.06,.2,(j+$)/2,2.1,N)):(ae(.2,2.12,.06,N,0,j-.03),ae(.2,2.12,.06,N,0,$+.03),ae(.2,.06,xt+.12,N,2.1,(j+$)/2)),n.add(mt);const ve=R==="x"?i(j,$,0,2.1,N-.06,N+.06,"door"):i(N-.06,N+.06,0,2.1,j,$,"door"),te={pivot:mt,panel:ft,col:ve,axis:R,open:Q.open??0,target:Q.open??0,dir:Q.dir??1,locked:!!Q.locked,name:Q.name||"Porta",pos:R==="x"?Se((j+$)/2,1.1,N):Se(N,1.1,(j+$)/2),jammed:!1};return te.set=(Ie,si=!0)=>{te.target=Ie,si&&r.audio.ctx&&r.audio.doorOpen(te.pos)},te.slam=()=>{te.target=0,te.open=Math.min(te.open,.05),r.audio.doorSlam(te.pos),r.shake(.15)},e.doors.push(te),e.interact.push({pos:te.pos,door:te,get label(){return te.locked?te.lockLabel||"Trancada":te.target>.5?"Fechar":"Abrir"},use:()=>{if(te.locked){r.audio.latch(te.pos),r.audio.creak(te.pos,.2,.3),te.onLocked&&te.onLocked();return}te.set(te.target>.5?0:1)}}),te}function C(R,N,j,$={}){const Q={pos:R,label:N,use:j,enabled:$.enabled??!0,range:$.range??1.9,hold:$.hold};return e.interact.push(Q),Q}function w(R,N,j,$={}){const Q=$.y??Tn,xt=new ot(new Ue(.006,.006,.4,4),s.black);xt.position.set(R,Q-.2,N),n.add(xt),d(.025,.03,.06,s.black,R,Q-.46,N,8,{cast:!1});const mt=new we({color:9076848,emissive:16761994,emissiveIntensity:0,roughness:.05,transmission:.4,transparent:!0,opacity:.85,envMap:l}),ft=[[.012,0],[.014,.02],[.03,.05],[.034,.075],[.028,.1],[0,.112]].map(([te,Ie])=>new it(te,-Ie)),Qt=new ot(new bs(ft,16),mt);Qt.position.set(R,Q-.46,N),n.add(Qt);const Kt=new ot(new ji(.008,.0012,4,12,Math.PI),new ai({color:3348992}));Kt.position.set(R,Q-.535,N),n.add(Kt);const ae=new wn(16763024,0,$.dist??7,2);ae.position.set(R,Q-.55,N),n.add(ae);const ve={light:ae,mat:mt,base:($.power??7)*2.6,room:j,flicker:0,dead:!1,pos:Se(R,Q-.5,N)};return e.bulbs.push(ve),ve}const E=(R,N,j,$)=>m(N-R,$-j,s.mud,(R+N)/2,-.01,(j+$)/2,-Math.PI/2,0,5);E(-45,45,-45,0),E(-45,0,0,40),E(0,45,12,40),E(16,45,0,6),E(16,45,8,12),E(20,45,6,8),i(-3.2,-3,-2,3,-16.5,.2),i(19,19.2,-2,3,-16.5,.2),i(-3.2,19.2,-2,3,-16.6,-16.4),i(-3.2,0,-2,3,-.1,.1),i(16,19.2,-2,3,-.1,.1);const P=(R,N)=>f(.1,1.2,.1,s.bark,R,0,N,{tile:.5});for(let R=-16.5;R<=0;R+=2)P(-3.1,R),P(19.1,R);for(let R=-3;R<=19;R+=2)(R<5||R>9)&&P(R,-16.5);f(.04,.08,16.5,s.bark,-3.1,.9,-8.25,{tile:.5}),f(.04,.08,16.5,s.bark,19.1,.9,-8.25,{tile:.5}),f(.04,.08,16.5,s.bark,-3.1,.45,-8.25,{tile:.5}),f(.04,.08,16.5,s.bark,19.1,.45,-8.25,{tile:.5}),f(8,.08,.04,s.bark,1,.9,-16.5,{tile:.5}),f(10,.08,.04,s.bark,14,.9,-16.5,{tile:.5});function b(R,N,j,$){let Q=$;const xt=()=>(Q=(Q*9301+49297)%233280)/233280,mt=(ft,Qt,Kt,ae,ve)=>{const te=ft.clone().addScaledVector(Qt,Kt),Ie=new ot(new Ue(ae*.7,ae,Kt,6),s.bark);if(Ie.position.copy(ft).lerp(te,.5),Ie.quaternion.setFromUnitVectors(Se(0,1,0),Qt.clone().normalize()),Ie.castShadow=!0,n.add(Ie),ve>0)for(let si=0;si<3;si++){const Ft=Qt.clone().add(Se((xt()-.5)*1.4,xt()*.5,(xt()-.5)*1.4)).normalize();mt(te,Ft,Kt*(.55+xt()*.2),ae*.6,ve-1)}};mt(Se(R,0,N),Se(0,1,0),j*.4,.18,4)}u("dead_tree_trunk",-1.6,0,-7.5,.7),u("dead_tree_trunk_02",15.8,0,-13.2,2.2),u("dead_tree_trunk",13.5,0,-4.2,-.4),b(-7,-6,7,3),b(-9,-14,8,7),b(23,-10,9,11),b(24,3,7,5),b(-6,6,8,13),b(10,-22,9,17),b(-1,-20,6,19);const M=V1(l),I=M.group;I.position.set(7.5,0,-12),I.rotation.y=-.15,n.add(I),G1(I,l),i(6.4,8.6,0,1.5,-14.1,-9.9);const z=new wn(16715792,0,12,2);z.position.set(7.2,1.75,-12.4),n.add(z);const V=new wn(1065215,0,12,2);V.position.set(7.9,1.75,-12.4),n.add(V);const F=new Ic(16773336,220,32,.42,.5,1.6);F.position.set(7.8,.7,-9.9),F.target.position.set(6.2,1,2),n.add(F,F.target),F.castShadow=!0,F.shadow.mapSize.set(1024,1024),F.shadow.camera.near=.5,F.shadow.camera.far=30,F.shadow.bias=-4e-4;const H={material:M.lensR},W={material:M.lensB},Z=M.hlMat;e.props.car={car:I,redL:z,blueL:V,barR:H,barB:W,head:F,hlMat:Z},e.updaters.push((R,N)=>{if(!e.props.car.sirenOn){z.intensity=V.intensity=0,H.material.emissiveIntensity=W.material.emissiveIntensity=0;return}const j=N*2.2%1,$=j<.5&&j*8%1<.6?1:0,Q=j>=.5&&j*8%1<.6?1:0;z.intensity=$*30,V.intensity=Q*40,H.material.emissiveIntensity=$*8,W.material.emissiveIntensity=Q*8}),C(Se(7.5,1,-9.6),"Rádio da viatura",()=>r.story.event("carRadio"),{range:2.4}),m(8,6,s.wood,4,0,3,-Math.PI/2,0,2.2),m(8,6,s.floorK,12,0,3,-Math.PI/2,0,1.6),m(16,2,s.wood,8,0,7,-Math.PI/2,0,2.2),m(6,4,s.wood,3,0,10,-Math.PI/2,0,2.2),m(4,4,s.floorB,8,0,10,-Math.PI/2,0,1.2),m(6,4,s.wood,13,0,10,-Math.PI/2,0,2.2),m(16,12,s.ceil,8,Tn,6,Math.PI/2,0,2);const Y=s.roof||be(Nr(61),{color:5910560,rough:.9}),ct=Math.atan2(1.6,6.8),_t=f(17.2,.1,7.1,Y,8,0,0,{tile:2});_t.position.set(8,Tn+.85,2.8),_t.rotation.x=ct;const Pt=f(17.2,.1,7.1,Y,8,0,0,{tile:2});Pt.position.set(8,Tn+.85,9.2),Pt.rotation.x=-ct,f(16,.2,12,s.ext,8,Tn,6,{tile:3});for(const R of[0,16]){const N=new so;N.moveTo(-6,0),N.lineTo(6,0),N.lineTo(0,1.65),N.lineTo(-6,0);const j=new ot(new Pc(N),s.ext);j.position.set(R,Tn,6),j.rotation.y=Math.PI/2,n.add(j);const $=j.clone();$.rotation.y=-Math.PI/2,n.add($)}p("x",0,0,16,[x(1.8,3.4),y(5.4,6.4),x(10,11.6)],s.wpSala,s.ext),p("x",12,0,16,[x(1,2.2),x(4.4,5.4),x(11,12.4)],s.ext,s.wpCasal),p("z",0,0,12,[x(1.5,3),x(10.4,11.6)],s.wpSala,s.ext),p("z",16,0,12,[x(2.2,3.6),y(6.5,7.5)],s.ext,s.tileK),p("z",8,0,6,[y(2.5,3.5)],s.tileK,s.wpSala),p("x",6,0,16,[y(3.5,4.5),y(11.5,12.5)],s.wpHall,s.wpSala),p("x",8,0,16,[y(2.5,3.5),y(7.5,8.5),y(12.5,13.5)],s.wpCasal,s.wpHall),p("z",6,8,12,[],s.tileB,s.wpCasal),p("z",10,8,12,[],s.wpKid,s.tileB);const qt=v("x",0,5.4,6.4,{name:"Porta da frente",open:.12});v("x",6,11.5,12.5,{open:1,dir:1});const he=v("x",8,2.5,3.5,{open:0}),et=v("x",8,7.5,8.5,{open:0}),ut=v("x",8,12.5,13.5,{open:0}),Dt=v("z",16,6.5,7.5,{open:0,locked:!0,name:"Porão",mat:be(ds(33),{color:4861984})});Dt.lockLabel="Trancada com cadeado",e.props.doors={front:qt,dCasal:he,dBath:et,dKid:ut,dBase:Dt},m(10,2.6,s.porch,8,.01,-1.3,-Math.PI/2,0,2),f(10.4,.12,2.9,s.darkWood,8,2.55,-1.35,{tile:2});for(const R of[3.1,6.9,9.1,12.9])f(.12,2.55,.12,s.paintWood,R,0,-2.5,{col:!0,tile:.6});u("plastic_monobloc_chair_01",11.5,0,-1.1,2.6,{col:!0,dirty:.75})||f(.6,.45,.6,s.darkWood,11.5,0,-1,{col:!0,tile:.6}),u("rubber_boots",4.6,0,-.35,.4),u("rubber_boots",4.85,0,-.3,-.2),u("trashbag",13.6,0,-.6,1,{dirty:.7});const pt=w(6,-1.2,"porch",{y:2.55,power:0});pt.dead=!0,u("Sofa_01",.42,0,2.2,Math.PI/2,{col:!0,dirty:.8})||f(.9,.42,2.1,s.fabric,.55,0,2.2,{col:!0}),f(.45,.5,1,s.darkWood,3.35,0,2.2,{col:!0,tile:.8});const Ut=u("Television_01",3.35,.5,2.2,-Math.PI/2),Xt=Ut?Ut.userData.box.min.x-.004:3.065,Vt=Ut?(Ut.userData.box.min.y+Ut.userData.box.max.y)/2+.01:.73;Ut||f(.5,.46,.58,s.plastic,3.32,.5,2.2),u("mantel_clock_01",3.4,.5,2.62,-Math.PI/2);const $t=Vx(),st=m(.36,.27,new At({map:$t,emissive:16777215,emissiveMap:$t,emissiveIntensity:1.1,roughness:.1}),Xt,Vt,2.2,0,-Math.PI/2,0),ht=new wn(11059455,1.2,4,2);ht.position.set(Xt-.3,Vt,2.2),n.add(ht),e.props.tv={tvTex:$t,tvScreen:st,tvLight:ht,on:!0},e.updaters.push((R,N)=>{e.props.tv.on?(Math.random()<.5&&$t.userData.update(N),ht.intensity=.7+Math.random()*.6):ht.intensity=0});const D=u("ClassicNightstand_01",.33,0,3.75,Math.PI/2,{col:!0}),Ot=D?D.userData.box.max.y:.6;D||f(.45,.6,.45,s.darkWood,.33,0,3.75,{col:!0});const at=B1(l);at.position.set(.36,Ot,3.72),at.rotation.y=Math.PI/2+.25,n.add(at),e.props.phone={pos:Se(.4,Ot+.1,3.72),handset:at.userData.handset,obj:at,base:at.position.clone()};const It=C(Se(.4,Ot+.1,3.72),"Telefone",()=>r.story.event("phone"),{range:2.3});Object.defineProperty(It,"label",{get:()=>r.story&&r.story.ring?"Atender o telefone":"Telefone"});const gt=u("dining_table",5.6,0,4.2,0,{col:!0,dirty:.85}),Gt=gt?gt.userData.box.max.y:.78;gt||(f(1.7,.05,.95,s.darkWood,5.5,.73,4.2,{tile:.8}),i(4.65,6.35,0,.78,3.72,4.68));for(const[R,N,j]of[[5,3.25,0],[6.2,3.25,0],[5,5.15,Math.PI],[6.2,5.15,Math.PI]])u("dining_chair_02",R,0,N,j,{dirty:.8});const wt=u("dining_chair_02",7.1,0,4.4,1.1,{dirty:.8});wt&&(wt.rotation.z=Math.PI/2,wt.position.y=.22,wt.position.x=7.25);const A=new we({color:15262938,roughness:.25,clearcoat:.8,envMap:l}),S=[[5,3.85],[6.2,3.85],[5,4.55],[6.2,4.55]];for(const[R,N]of S){d(.13,.1,.02,A,R,Gt,N,24);const j=new ot(new In(.07,10,8),s.food);j.scale.set(1,.32,.8),j.position.set(R+.02,Gt+.03,N),n.add(j);const $=f(.02,.004,.18,s.metal,R+.17,Gt,N);$.rotation.y=.1}for(let R=0;R<11;R++){const N=new ot(new _s(.004,.01,2,5),s.bone);N.position.set(6.2+(Math.random()-.5)*.12,Gt+.026,4.55+(Math.random()-.5)*.12),N.rotation.set(Math.random()*3,Math.random()*3,0),n.add(N)}g(xn(3,"splat"),.25,6.2,4.55,Gt+.022),C(Se(6.2,Gt+.1,4.55),"Examinar prato",()=>r.story.event("teeth")),m(3,2,s.carpet||be(yn(44,[110,40,35],.3),{bump:!1}),5.6,.004,4.2,-Math.PI/2,0,1.3);for(let R=0;R<7;R++)g(xn(10+R,"smear"),.9,5.1-R*.18,4.9+R*.17,.007+R*5e-4,-.8+(Math.random()-.5)*.4);const G=m(.5,.65,new At({map:yu(),roughness:.4}),.085,1.75,2.2,0,Math.PI/2,0);f(.04,.72,.57,s.darkWood,.09,1.39,2.2),G.position.x=.115,C(Se(.3,1.7,2.2),"Examinar retrato",()=>r.story.event("granny")),f(.04,.5,.04,s.darkWood,1.6,1.45,5.9),f(.3,.04,.04,s.darkWood,1.6,1.55,5.9),m(.5,.4,new At({map:ll(2,4,!1),roughness:.4}),6.4,1.6,5.91,0,Math.PI,0);const tt=_(al("ELA NOS EMPRESTOU"),2.6,.65,7.91,1.6,4.7,0,-Math.PI/2,{rough:.6});e.reveal.push(tt),f(.08,.12,.02,s.white,4.8,1.2,.09),C(Se(4.8,1.25,.1),"Interruptor",()=>r.story.event("switch")),w(4,3,"sala"),f(.62,.88,4.6,s.cabinet,15.6,0,2.6,{col:!0,tile:1});for(let R=0;R<6;R++)f(.02,.6,.7,s.cabinet,15.28,.12,.65+R*.75,{tile:.8});f(.66,.04,4.62,be(Nr(71),{color:6974050,rough:.4}),15.58,.88,2.6),f(.45,.04,.6,s.metal,15.6,.89,3.1),f(.36,.7,4.6,s.cabinet,15.75,1.55,2.6,{tile:.8}),f(.62,.88,.62,s.ceramic,15.6,0,5.4,{col:!0}),u("pot_enamel_01",15.5,.9,5.3,.6);for(const[R,N]of[[15.45,5.25],[15.75,5.25],[15.45,5.55],[15.75,5.55]])d(.08,.08,.02,s.black,R,.88,N,12);const nt=z1(l);nt.group.position.set(8.72,0,.53),n.add(nt.group),i(8.34,9.1,0,1.65,.18,.88);const J=a?Xf(a,"tiago"):null;if(J){J.scale.setScalar(.041),J.position.set(0,.98,.02),J.rotation.set(-.12,.25,.08),nt.group.add(J);const R=new ot(new Ue(.05,.06,.015,16),new we({color:5900296,roughness:.25,clearcoat:1}));R.position.set(0,.8,.03),nt.group.add(R);const N=new ot(new Ue(.17,.13,.03,24),new we({color:14210248,roughness:.2,clearcoat:1,envMap:l}));N.position.set(0,.795,.02),nt.group.add(N);const j=new ot(new Gi(.14,20),s.bloodPool);j.rotation.x=-Math.PI/2,j.position.set(0,.812,.02),nt.group.add(j)}for(let R=0;R<4;R++)d(.045,.045,.14,new we({color:[5910544,6950928,3815952,5909024][R],roughness:.1,transmission:.3,transparent:!0,opacity:.85,envMap:l}),-.22+R*.14,1.11,-.1,12,{parent:nt.group});g(xn(21,"drip"),.5,0,0,.43,0,{parent:nt.group}),e.props.fridge={pivot:nt.pivot,light:nt.bulb,open:0,target:0},C(Se(8.95,1.1,1),"Abrir geladeira",()=>r.story.event("fridge")),g(xn(22,"pool"),1.4,9.3,1.4,.006),f(1.1,.05,.8,s.darkWood,11.5,.75,3,{tile:.8}),u("wooden_bowl_01",11.75,.8,2.85,0);for(const[R,N,j]of[[11.2,2.35,0],[11.9,3.7,Math.PI]])u("dining_chair_02",R,0,N,j,{dirty:.75});u("painted_wooden_cabinet",9.4,0,5.62,Math.PI,{col:!0,dirty:.85}),u("trashbag",14.75,0,5.62,.4,{dirty:.7});for(const[R,N]of[[-.5,-.35],[.5,-.35],[-.5,.35],[.5,.35]])f(.05,.75,.05,s.darkWood,11.5+R,0,3+N);i(10.95,12.05,0,.8,2.6,3.4);const kt=f(.3,.005,.03,s.metal,11.3,.8,3.1);kt.rotation.y=.4,g(xn(23,"splat"),.5,11.6,3,.776);const vt=u("power_box_01",13.5,1.15,.12,0);vt||f(.4,.5,.1,s.rust,13.5,1.3,.13);const Et=new ot(new In(.012,6,6),new At({color:2228224,emissive:16719872,emissiveIntensity:0}));Et.position.set(13.72,vt?vt.userData.box.max.y-.04:1.72,vt?vt.userData.box.max.z+.005:.19),n.add(Et),e.props.fuse={led:Et},C(Se(13.5,1.55,.25),"Quadro de luz",()=>r.story.event("fusebox")),e.props.drawer=C(Se(15.25,.8,1.4),"Abrir gaveta",()=>r.story.event("drawer")),w(12,3,"cozinha");for(let R=0;R<9;R++)g(xn(60+R%2,"hand"),.22,9.6+R*.55,2+Math.sin(R)*.3+R%2*.25,.007,Math.PI+(R%2?.3:-.3),{opacity:.8});m(14,.9,s.carpet||be(yn(45,[90,30,30],.2),{bump:!1}),8,.004,7,-Math.PI/2,0,1.2),[4.8,5.8,9.6,10.6,14.2].forEach((R,N)=>{m(.32,.26,new At({map:ll(5+N,3+N%2,!0,N%2===0),roughness:.4}),R,1.55+N%2*.12,7.91,0,Math.PI,0),f(.36,.3,.02,s.darkWood,R,1.4+N%2*.12,7.92)}),f(.6,.9,.35,s.darkWood,9.5,0,6.27,{col:!0,tile:.6});for(let R=0;R<3;R++)d(.015,.015,.1+R*.03,s.candle,9.35+R*.15,.9,6.25,8);const lt=new ot(new _s(.04,.16,3,8),new At({color:5925514,roughness:.5}));lt.position.set(9.5,1.03,6.2),n.add(lt),lt.rotation.z=Math.PI,w(4,7,"hall",{power:5}),w(12,7,"hall",{power:5});const Rt=r.cmats,Wt=li(Rt,{h:1.55,skin:Rt.ghost,top:Rt.ghost,bottom:Rt.ghost,dress:Rt.ghost,hair:!0,hairLen:.3,mouthOpen:2.5});Wt.root.position.set(15.3,0,7),Wt.root.rotation.y=-Math.PI/2,Wt.neck.rotation.z=.5,n.add(Wt.root),e.reveal.push(Wt.root),e.props.ghost=Wt.root;const Yt=u("old_bed_frame",3,0,10.9,Math.PI,{col:!0});if(Yt){Yt.scale.x=1.7,Yt.updateMatrixWorld(!0);const R=new Wn().setFromObject(Yt);e.colliders[e.colliders.length-1].x0=R.min.x,e.colliders[e.colliders.length-1].x1=R.max.x}else f(1.7,.42,2.1,s.darkWood,3,0,10.9,{col:!0});f(1.45,.18,1.9,s.sheet,3,.36,10.85);const Nt=f(1.5,.05,1.35,s.blanket,3,.54,10.6);Nt.rotation.z=.02;for(const R of[2.6,3.4]){const N=f(.55,.12,.35,s.sheet,R,.54,11.6);N.rotation.x=-.25}g(xn(31,"pool"),1.1,3.3,10.6,.592,.5);const _e=u("ClassicNightstand_01",1.6,0,11.7,Math.PI,{col:!0}),re=u("ClassicNightstand_01",4.4,0,11.7,Math.PI,{col:!0}),Ee=re?re.userData.box.max.y:.55;_e||(f(.45,.55,.4,s.darkWood,1.75,0,11.7,{col:!0}),f(.45,.55,.4,s.darkWood,4.25,0,11.7,{col:!0})),u("vintage_cabinet_01",.36,0,9.15,Math.PI/2,{col:!0,dirty:.8})||f(.6,2,1.5,s.darkWood,.38,0,9,{col:!0});const O=new ot(new Ue(.015,.015,.07,8),new At({color:14207120,roughness:.3,metalness:.4}));O.rotation.z=Math.PI/2,O.position.set(4.35,Ee+.016,11.65),n.add(O),e.props.fuseItem=O,e.props.fuseI=C(Se(4.35,Ee+.05,11.65),"Pegar fusível",()=>r.story.event("takeFuse"),{enabled:!1}),w(3,10,"casal"),_(al("NÃO OLHE PRA CIMA"),2.2,.55,3,Tn-.01,9.4,Math.PI/2,0,{rz:Math.PI});const yt=7.05,K=11.5;f(1.7,.55,.08,s.ceramic,yt,0,11.08,{col:!0}),f(.08,.55,.8,s.ceramic,6.2,0,K),f(.08,.55,.8,s.ceramic,7.9,0,K,{col:!0}),f(1.7,.06,.8,s.ceramic,yt,0,K),i(6.15,7.95,0,.6,11.05,11.95);const rt=m(1.6,.74,s.bloodPool,yt,.47,K,-Math.PI/2,0,0);e.props.tub={surf:rt,pos:Se(yt,.5,K)},_(xn(41,"drip"),.6,.6,7.4,.3,11.035,0,Math.PI),f(.38,.4,.5,s.ceramic,9.6,0,9,{col:!0}),f(.4,.35,.18,s.ceramic,9.75,.4,9),f(.45,.12,.38,s.ceramic,9.7,.78,10.7,{col:!0}),d(.05,.07,.78,s.ceramic,9.75,0,10.7,10);const Mt=new Ma(new ni(.55,.75),{textureWidth:512,textureHeight:680,color:10132122,clipBias:.003});Mt.position.set(9.9,1.55,10.7),Mt.rotation.y=-Math.PI/2,n.add(Mt),Mt.camera.layers.enable(2),f(.03,.82,.62,s.darkWood,9.93,1.14,10.7),e.props.mirror=Mt,w(8,10,"banheiro",{power:4}),g(xn(42,"pool"),.9,7.6,10.2,.006);const bt=g(xn(43,"pool"),1.4,8,7.5,.008);bt.visible=!1,e.props.underDoor=bt,u("old_bed_frame",15.42,0,10.85,Math.PI,{col:!0,tint:15784152})||f(.95,.38,1.9,be(ds(12),{color:11569776}),15.42,0,10.85,{col:!0}),f(.84,.14,1.85,be(yn(46,[200,170,190],.1)),15.42,.34,10.85);const oe=[11546672,3166384,13672480,3186768];for(let R=0;R<6;R++){const N=f(.08,.08,.08,new At({color:oe[R%4],roughness:.6}),11.5+Math.random()*1.5,0,9+Math.random()*2);N.rotation.y=Math.random()*3}const Le=li(r.cmats,{h:.35,skin:r.cmats.childSkin,dress:r.cmats.childDress,hair:!0,hairLen:.2});Le.root.position.set(12.2,.05,11.4),Le.root.rotation.set(-Math.PI/2,0,.6),n.add(Le.root),Le.head.rotation.y=Math.PI,[9,9.7,10.4].forEach((R,N)=>m(.4,.31,new At({map:kx(4+N),roughness:.8}),10.085,1.25+N%2*.15,R,0,Math.PI/2,0)),C(Se(10.3,1.3,9.7),"Examinar desenhos",()=>r.story.event("drawings")),w(13,10,"kid",{power:5});const Be=new se;n.add(Be),Be.visible=!1;for(let R=0;R<26;R++)_(xn(80+R%4,"hand"),.24,.24,10.6+Math.random()*5,Tn-.008,8.5+Math.random()*3.3,Math.PI/2,0,{rz:Math.random()*6.28,parent:Be});e.props.ceilingHands=Be;const fe=new se,Sn=new At({color:10127962,metalness:.8,roughness:.35}),qn=new ot(new ji(.018,.005,6,12),Sn);fe.add(qn);const vr=new ot(new Fe(.008,.06,.004),Sn);vr.position.y=-.045,fe.add(vr),fe.rotation.x=-Math.PI/2,fe.position.set(14.7,.01,10.6),fe.visible=!1,n.add(fe),e.props.key=fe,e.props.keyI=C(Se(14.7,.2,10.6),"Pegar chave",()=>r.story.event("takeKey"),{enabled:!1});const jt=-3;p("x",6,16,20,[],s.conc,s.ext,jt,Tn-jt,{tile:1.5}),p("x",8,16,20,[],s.ext,s.conc,jt,Tn-jt,{tile:1.5}),f(4.2,.2,2.3,s.ext,18,Tn,7,{tile:2}),f(4,.1,2,s.conc,18,Tn-.1,7,{tile:2,cast:!1}),p("z",20,6,8,[{a:6,b:8,bottom:0,top:2.4}],s.conc,s.conc,jt,Tn-jt);for(let R=0;R<12;R++){const N=16+R*.3333333333333333,j=-R*(3/12);f(4/12,.08,2,s.darkWood,N+2/12,j-.08-3/12,7,{tile:.8})}const ii=f(4.6,.05,.05,s.darkWood,18,0,6.2);ii.position.y=-.6,ii.rotation.z=-Math.atan2(3,4),m(8,12,s.concFloor,24,jt+.005,6,-Math.PI/2,0,2.5),m(8,12,s.conc,24,-.6,6,Math.PI/2,0,2.5);for(let R=.5;R<12;R+=1.4)f(8,.18,.12,s.darkWood,24,-.78,R,{tile:1});p("z",20,0,6,[],s.conc,s.conc,jt,2.4,{tile:1.5}),p("z",20,8,12,[],s.conc,s.conc,jt,2.4,{tile:1.5}),p("z",28,0,12,[],s.conc,s.conc,jt,2.4,{tile:1.5}),p("x",0,20,28,[],s.conc,s.conc,jt,2.4,{tile:1.5}),p("x",12,20,28,[],s.conc,s.conc,jt,2.4,{tile:1.5});for(const[R,N]of[[23,3.6],[23.2,9],[25.8,6.4]])f(.35,2.4,.35,s.conc,R,jt,N,{col:!0,tile:1});const xr=u("wooden_bookshelf_worn",22.6,jt,.38,0,{col:!0,dirty:.75});if(u("wooden_bookshelf_worn",24.1,jt,.38,0,{col:!0,dirty:.75}),!xr){for(let R=0;R<3;R++)f(2.4,.04,.45,s.darkWood,23.8,jt+.4+R*.6,.35,{tile:.8});i(22.6,25,jt,jt+2,.1,.6)}for(let R=0;R<10;R++)d(.045,.045,.16,new we({color:[4860432,3813392,5246992][R%3],roughness:.1,transmission:.3,transparent:!0,opacity:.85,envMap:l}),22.1+R%5*.22+Math.floor(R/5)*1.5,jt+.43+R%2*.68,.38,10);u("ammo_box",24.7,jt+1.12,.4,.2),u("wooden_crate_01",21.1,jt,3.6,.3,{col:!0}),u("wooden_crate_01",21.1,jt+.35,3.6,.5),u("wooden_crate_01",26.8,jt,9.8,1.4,{col:!0}),u("Barrel_01",27.2,jt,11.3,0,{col:!0,dirty:.8}),u("Barrel_01",26.5,jt,11.45,1,{col:!0,dirty:.8}),u("trashbag",21.4,jt,.8,2,{dirty:.6}),e.props.ammoBox=C(Se(24.8,jt+1.1,.5),"Caixa de munição",()=>r.story.event("ammoBox"));const Ji=[];for(const[R,N]of[[22.3,2.4],[24.6,10.6],[26.4,2.8],[21.6,10.2]]){const j=new se;j.position.set(R,-.6,N),n.add(j);const $=new ot(new Ue(.01,.01,.5,4),s.bark);$.position.y=-.25,j.add($);const Q=new ot(new _s(.2,1.1,6,12),s.sheet);Q.position.y=-1.25,Q.scale.set(1,1,.8),Q.castShadow=!0,j.add(Q),Q.scale.set(1,1,.75),Q.rotation.z=(Math.random()-.5)*.15;const xt=new ot(new In(.15,12,10),be(yn(47,[120,40,35],1.8)));xt.position.y=-1.95,xt.scale.set(1,1.15,.9),j.add(xt);for(const ft of[-.7,-1.1,-1.5,-1.8]){const Qt=new ot(new ji(.2-Math.abs(ft+1.25)*.05,.012,5,16),s.bark);Qt.rotation.x=Math.PI/2+(Math.random()-.5)*.3,Qt.position.y=ft,Qt.scale.set(1,.78,1),j.add(Qt)}const mt=new ot(new Ue(.004,.002,.35,4),s.bloodPool);mt.position.y=-2.25,j.add(mt),Ji.push(j),g(xn(90+Ji.length,"pool"),.7,R,N,jt+.007)}e.props.wrapped=Ji,e.updaters.push((R,N)=>Ji.forEach((j,$)=>{j.rotation.z=Math.sin(N*.7+$*2)*.05,j.rotation.y=Math.sin(N*.3+$)*.4+(j.userData.spin||0)}));const bn=new se;n.add(bn),f(.8,.9,1.8,s.darkWood,27.4,jt,6,{col:!0,parent:bn}),f(.84,.5,1.84,s.redCloth,27.4,jt+.5,6,{parent:bn}),m(.4,.52,new At({map:yu(),roughness:.4}),27.88,jt+1.35,6,0,-Math.PI/2,0,{parent:bn}),m(.4,.31,new At({map:ll(9,5,!0),roughness:.4}),27.86,jt+1.15,5.4,0,-Math.PI/2,0,{parent:bn});const Yn=new se;Yn.position.set(27.45,jt+1,6.45),bn.add(Yn);const yr=new ot(new In(.11,12,10),s.bone);yr.scale.set(.8,.9,1.3),Yn.add(yr);for(const R of[-1,1]){const N=new ot(new io(.03,.3,8),s.bone);N.position.set(R*.06,.12,-.05),N.rotation.set(-.6,0,R*.5),Yn.add(N)}for(const R of[-1,1]){const N=new ot(new In(.025,8,6),s.black);N.position.set(R*.04,.02,.12),Yn.add(N)}Yn.rotation.y=-Math.PI/2,d(.12,.08,.08,s.metal,27.3,jt+.9,5.6,14,{parent:bn}),m(.18,.18,s.bloodPool,27.3,jt+.985,5.6,-Math.PI/2,0,0,{parent:bn});const Di=[],ao=new Jr({map:da(),color:16752704,blending:xs,depthWrite:!1});for(let R=0;R<9;R++){const N=27.15+R%3*.17,j=5.3+Math.floor(R/3)*.7+(Math.random()-.5)*.2,$=.08+Math.random()*.15;d(.02,.022,$,s.candle,N,jt+.9,j,8,{parent:bn});const Q=new ar(ao);Q.scale.set(.05,.09,1),Q.position.set(N,jt+.93+$,j),bn.add(Q),Di.push(Q)}const Qi=new wn(16747056,0,10,1.7);Qi.position.set(27.2,jt+1.3,6),n.add(Qi),e.props.altar={group:bn,candles:Di,candleL:Qi,lit:!1,pos:Se(27.2,jt+1,6)},e.updaters.push((R,N)=>{const j=e.props.altar;Di.forEach(($,Q)=>{$.visible=j.lit,$.scale.y=.08+Math.sin(N*17+Q*3)*.015+Math.random()*.01}),Qi.intensity=j.lit?9+Math.sin(N*13)*1.5+Math.random()*2:0}),_(al("A DÍVIDA FICA NA FAMÍLIA",1400,256,110),3.4,.62,27.91,jt+1.85,6,0,-Math.PI/2,{rough:.5});for(let R=0;R<6;R++)_(xn(100+R,"hand"),.25,.25,27.91,jt+.9+Math.random()*1.2,4.2+Math.random()*3.6,0,-Math.PI/2,{rz:Math.random()*6});e.props.diaryI=C(Se(27.1,jt+1,6.6),"Ler diário",()=>r.story.event("diary")),e.props.burnI=C(Se(27.1,jt+1,6),"Queimar o altar",()=>r.story.event("burn"),{enabled:!1,hold:2.2});const Sa=f(.16,.04,.22,be(yn(48,[70,40,30],.3)),27.1,jt+.9,6.6);e.props.diary=Sa;const ts=new se;n.add(ts),ts.visible=!1;const ba=new Jr({map:da(),color:16738848,blending:xs,depthWrite:!1,transparent:!0}),T=[];for(let R=0;R<60;R++){const N=new ar(ba.clone());ts.add(N),T.push({s:N,life:Math.random()})}const k=new wn(16740384,0,14,1.6);k.position.set(27,jt+1.4,6),n.add(k),e.props.fire={g:ts,sprites:T,light:k,level:0},e.updaters.push((R,N)=>{const j=e.props.fire;if(!ts.visible){k.intensity=0;return}const $=j.level;for(const Q of T){Q.life+=R*(1.2+Math.random()),Q.life>1&&(Q.life=0,Q.x=27.4+(Math.random()-.5)*.7,Q.z=6+(Math.random()-.5)*1.7*Math.min(1,.3+$));const xt=jt+.95+Q.life*(.4+$*1.3);Q.s.position.set(Q.x+Math.sin(N*5+Q.life*6)*.05,xt,Q.z);const mt=(.15+$*.5)*(1-Q.life*.7);Q.s.scale.set(mt,mt*1.6,1),Q.s.material.opacity=(1-Q.life)*.8,Q.s.material.color.setHSL(.06-Q.life*.05,1,.5-Q.life*.25)}k.intensity=(5+$*30)*(.8+Math.random()*.4)});const q=2200,X=new Float32Array(q*6),B=new ke;B.setAttribute("position",new on(X,3));const dt=new Tf(B,new wc({color:6318708,transparent:!0,opacity:.16}));dt.frustumCulled=!1,t.add(dt);const Tt=[];for(let R=0;R<q;R++)Tt.push({x:0,y:-100,z:0,v:9+Math.random()*3});const Bt=(R,N)=>R>-.2&&R<16.2&&N>-.2&&N<12.2||R>2.8&&R<13.2&&N>-2.8&&N<0||R>15.8&&R<20.2&&N>5.8&&N<8.2;e.updaters.push(R=>{const N=r.camera.position;for(let j=0;j<q;j++){const $=Tt[j];$.y-=$.v*R,$.y<0&&($.x=N.x+(Math.random()-.5)*24,$.z=N.z+(Math.random()-.5)*24,$.y=4+Math.random()*6,Bt($.x,$.z)&&($.y=-100-Math.random()));const Q=j*6;X[Q]=$.x,X[Q+1]=$.y,X[Q+2]=$.z,X[Q+3]=$.x+.01,X[Q+4]=$.y+.32,X[Q+5]=$.z}B.attributes.position.needsUpdate=!0});const Ct=new Vf(12110079,0);Ct.position.set(-14,22,-20),Ct.target.position.set(8,0,4),t.add(Ct,Ct.target),Ct.castShadow=!0,Ct.shadow.mapSize.set(1024,1024),Object.assign(Ct.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:1,far:70}),Ct.shadow.autoUpdate=!1,Ct.shadow.needsUpdate=!0,e.props.lightning=Ct,e.floorY=(R,N)=>R>16&&R<20&&N>5.9&&N<8.1?-3*Math.min(1,Math.max(0,(R-16)/4)):R>=20?jt:0,e.surface=(R,N)=>R>=16&&N>5.9&&N<8.1&&R<20?"wood":R>=20?"concrete":N<0?R>3&&R<13&&N>-2.6?"porch":"mud":R>8&&R<16&&N<6||R>6&&R<10&&N>8?"tile":"wood",e.insideAt=(R,N)=>R>=0&&R<=16&&N>=0&&N<=12||R>16&&N>5.9&&N<8.1||R>=20?1:N>-2.6&&N<0&&R>3&&R<13?.4:0,e.room=(R,N)=>R>=20?"porao":R>16?"escada":N<0?"fora":N<6?R<8?"sala":"cozinha":N<8?"hall":R<6?"casal":R<10?"banheiro":"kid";const Zt=-4,ee=-17,Lt=.4,Jt=Math.ceil((30-Zt)/Lt),Me=Math.ceil((14-ee)/Lt);let Ae=new Uint8Array(Jt*Me);e.buildGrid=()=>{Ae=new Uint8Array(Jt*Me);for(let R=0;R<Me;R++)for(let N=0;N<Jt;N++){const j=Zt+(N+.5)*Lt,$=ee+(R+.5)*Lt,Q=e.floorY(j,$),xt=.22;let mt=!1;for(const ft of e.colliders)if(!(ft.tag==="door"||!ft.on)&&!(ft.y1<Q+.25||ft.y0>Q+1.6)&&j+xt>ft.x0&&j-xt<ft.x1&&$+xt>ft.z0&&$-xt<ft.z1){mt=!0;break}Ae[R*Jt+N]=mt?1:0}};const Je=(R,N)=>[Math.floor((R-Zt)/Lt),Math.floor((N-ee)/Lt)],de=(R,N)=>R>=0&&N>=0&&R<Jt&&N<Me&&Ae[N*Jt+R]===0;e.walkable=(R,N)=>{const[j,$]=Je(R,N);return de(j,$)},e.clearLine=(R,N,j,$)=>{const Q=Math.hypot(j-R,$-N),xt=Math.ceil(Q/(Lt*.5));for(let mt=0;mt<=xt;mt++){const ft=mt/Math.max(1,xt);if(!e.walkable(R+(j-R)*ft,N+($-N)*ft))return!1}return!0},e.findPath=(R,N,j,$)=>{let[Q,xt]=Je(R,N);const[mt,ft]=Je(j,$);if(!de(Q,xt)){t:for(let an=1;an<4;an++)for(let ze=-an;ze<=an;ze++)for(let ln=-an;ln<=an;ln++)if(de(Q+ln,xt+ze)){Q+=ln,xt+=ze;break t}}const Qt=Jt*Me,Kt=new Float32Array(Qt).fill(1/0),ae=new Int32Array(Qt).fill(-1),ve=new Uint8Array(Qt),te=[[0,xt*Jt+Q]];Kt[xt*Jt+Q]=0;const Ie=ft*Jt+mt;let si=0,Ft=-1,Qe=1/0;for(;te.length&&si++<6e3;){let an=0;for(let tn=1;tn<te.length;tn++)te[tn][0]<te[an][0]&&(an=tn);const[,ze]=te.splice(an,1)[0];if(ve[ze])continue;ve[ze]=1;const ln=ze%Jt,Ve=ze/Jt|0,Xe=Math.hypot(ln-mt,Ve-ft);if(Xe<Qe&&(Qe=Xe,Ft=ze),ze===Ie){Ft=ze;break}for(let tn=-1;tn<=1;tn++)for(let Cn=-1;Cn<=1;Cn++){if(!Cn&&!tn)continue;const ri=ln+Cn,Mr=Ve+tn;if(!de(ri,Mr)||Cn&&tn&&(!de(ln+Cn,Ve)||!de(ln,Ve+tn)))continue;const Es=Mr*Jt+ri,Sr=Kt[ze]+(Cn&&tn?1.414:1);Sr<Kt[Es]&&(Kt[Es]=Sr,ae[Es]=ze,te.push([Sr+Math.hypot(ri-mt,Mr-ft),Es]))}}if(Ft<0)return null;const fn=[];let He=Ft;for(;He>=0;)fn.push(Se(Zt+(He%Jt+.5)*Lt,0,ee+((He/Jt|0)+.5)*Lt)),He=ae[He];return fn.reverse(),fn.shift(),Ft===Ie&&fn.push(Se(j,0,$)),fn};const zt=new fa;return e.los=(R,N)=>{const j=N.clone().sub(R),$=j.length();j.divideScalar($),zt.set(R,j),zt.far=$-.15;const Q=e.doors.filter(xt=>xt.open<.3).map(xt=>xt.panel);return zt.intersectObjects([...e.occluders,...Q],!1).length===0},e.pushDoors=(R,N)=>{for(const j of e.doors)j.locked||j.target>.5||Math.hypot(j.pos.x-R.x,j.pos.z-R.z)<1&&Math.abs(e.floorY(j.pos.x,j.pos.z)-R.y)<1&&(j.target=1,j.open=Math.max(j.open,.3),N.doorSlam(j.pos,.8))},e.update=(R,N)=>{for(const $ of e.doors)$.open+=($.target-$.open)*Math.min(1,R*4),$.pivot.rotation.y=-$.dir*$.open*1.75,$.col.on=$.open<.35;const j=e.props.fridge;j.open+=(j.target-j.open)*Math.min(1,R*3),j.pivot.rotation.y=-j.open*1.9;for(const $ of e.bulbs){let Q=r.lightsOn&&!$.dead?1:0;$.flicker>0&&($.flicker-=R,Q*=Math.random()<.5?.05:1),$.light.intensity=$.base*Q,$.mat.emissiveIntensity=Q*6}e.updaters.forEach($=>$(R,N))},e.bounceList=[...e.occluders,...e.bounce],e.buildGrid(),e}const qs=(r=0,t=0,e=0)=>new L(r,t,e);class X1{constructor(t){this.g=t,this.pos=qs(7,0,-9.3),this.vel=qs(),this.yaw=Math.PI,this.pitch=0,this.yawV=0,this.pitchV=0,this.height=1.6,this.radius=.3,this.health=100,this.stamina=1,this.fear=0,this.ammo=6,this.reserve=12,this.reloading=0,this.flashCharge=1,this.flashlightOn=!0,this.bob=0,this.stepPhase=0,this.lastStep=0,this.keys={},this.locked=!1,this.frozen=!1,this.shakeAmt=0,this.recoil=0,this.dead=!1,this.deathT=0,this.hurtT=10,this.damageFx=0,this.buildRig()}buildRig(){const t=this.g.camera;this.rig=new se,t.add(this.rig),this.flashlight=new Ic(16773596,20,26,.5,.6,1.7),this.flashlight.map=Bx(),this.flashlight.castShadow=!0,this.flashlight.shadow.mapSize.set(1024,1024),this.flashlight.shadow.camera.near=.15,this.flashlight.shadow.camera.far=26,this.flashlight.shadow.bias=-6e-4,this.flashlight.shadow.normalBias=.02,this.flashlight.position.set(-.12,-.16,-.25),this.flashTarget=new De,this.flashTarget.position.set(0,0,-6),this.flashlight.target=this.flashTarget,this.g.scene.add(this.flashlight,this.flashTarget),this.lightDir=qs(0,0,-1),this.flashPoint=new wn(16054015,0,18,1.4),this.g.scene.add(this.flashPoint),this.muzzle=new wn(16756832,0,10,2),this.g.scene.add(this.muzzle),this.fill=new wn(10465472,.6,5,2),this.g.scene.add(this.fill),this.bounce=new wn(14206634,0,7,2),this.g.scene.add(this.bounce),this.bounceRay=new fa,this.bounceRay.far=16,this.bouncePos=qs();const e=this.gun=new se,n=new At({color:2303274,metalness:.9,roughness:.28}),i=new At({color:921361,metalness:.8,roughness:.4}),s=new At({map:yn(70,[34,34,36],0),roughness:.9}),o=new At({map:yn(72,[52,58,66],0),roughness:.95}),a=new At({map:ds(71),color:6963248,roughness:.45}),l=(p,x,y,v,C,w=0,E=0,P=0,b)=>{const M=new ot(p,x);return M.position.set(y,v,C),M.rotation.set(w,E,P),b&&M.scale.set(...b),e.add(M),M},c=(p,x)=>new _s(p,x,4,10);l(new Fe(.024,.042,.08),n,0,.018,-.028),l(new Fe(.017,.01,.07),n,0,.043,-.05),this.cyl=l(new Ue(.0195,.0195,.042,18),n,0,.022,-.048,Math.PI/2);for(let p=0;p<6;p++){const x=p/6*Math.PI*2;l(new Fe(.004,.004,.03),i,Math.cos(x)*.0195,.022+Math.sin(x)*.0195,-.048)}l(new Ue(.0082,.0085,.11,14),n,0,.031,-.125,Math.PI/2),l(new Fe(.011,.013,.1),n,0,.018,-.12),l(new Fe(.003,.009,.006),n,0,.043,-.176),l(new Fe(.008,.02,.012),i,0,.046,.016,-.5),l(new ji(.015,.0026,5,12,Math.PI),n,0,-.004,-.018,0,Math.PI/2,Math.PI),l(new Fe(.004,.016,.004),i,0,-.006,-.018,.3),l(c(.015,.06),a,0,-.038,.024,-.32,0,0,[.85,1,1.3]),l(c(.024,.045),s,.004,-.04,.034,-.32,0,0,[1.25,1,1.15]);for(let p=0;p<3;p++)l(c(.0098,.026),s,-.002,-.017-p*.017,.002,0,0,Math.PI/2);l(c(.009,.038),s,-.016,.004,-.03,Math.PI/2),l(c(.0095,.034),s,-.017,.028,-.005,Math.PI/2+.2),l(c(.033,.16),o,.02,-.085,.12,1.05,0,-.15);const h=this.flGroup=new se;h.position.set(-.03,-.062,-.01),e.add(h);const u=new ot(new Ue(.017,.014,.12,14),new At({color:1250067,metalness:.6,roughness:.35}));u.rotation.x=Math.PI/2,h.add(u);const f=new ot(new Ue(.02,.018,.02,14),u.material);f.rotation.x=Math.PI/2,f.position.z=-.065,h.add(f);const d=new ot(new Gi(.016,14),new At({color:3355443,emissive:16773328,emissiveIntensity:2}));d.position.z=-.0755,d.rotation.y=Math.PI,h.add(d),this.lens=d;const m=new ot(c(.025,.04),s);m.rotation.z=Math.PI/2,m.position.set(.004,-.006,.01),m.scale.set(1,1.2,1.3),h.add(m);const _=new ot(c(.033,.16),o);_.position.set(-.05,-.04,.1),_.rotation.set(1.1,0,.35),h.add(_),e.traverse(p=>{p.isMesh&&(p.castShadow=!1,p.receiveShadow=!1)}),e.position.set(.085,-.145,-.36),this.gunBase=e.position.clone(),this.gunLow=qs(.11,-.27,-.32),this.aimK=0,this.sinceShot=99,this.g.gunHolder.add(e),this.gunLight=new wn(16773340,0,2,1.5),this.gunLight.position.set(.05,.15,-.1),this.g.gunHolder.add(this.gunLight),this.gunAmb=new zf(8425632,2103312,.15),this.g.gunScene.add(this.gunAmb);const g=new Jr({map:da(),color:16760944,blending:xs,depthWrite:!1,transparent:!0,opacity:0});this.muzzleSprite=new ar(g),this.muzzleSprite.scale.set(.12,.12,1),this.muzzleSprite.position.set(0,.032,-.23),e.add(this.muzzleSprite)}setInput(t){this.keys=t}look(t,e){if(this.frozen||this.dead)return;const n=.0022*this.g.sens;this.yawV-=t*n,this.pitchV-=e*n}damage(t,e){if(this.dead||this.g.godMode)return;this.health-=t,this.hurtT=0,this.damageFx=1,this.g.audio.hit(),this.g.shake(.6);const n=this.pos.x-e.x,i=this.pos.z-e.z,s=Math.hypot(n,i)||1;this.vel.x+=n/s*4,this.vel.z+=i/s*4,this.yawV+=(Math.random()-.5)*.25,this.pitchV+=.08,this.health<=0&&this.die(e)}die(t){this.dead=!0,this.deathT=0,this.health=0,this.deathFrom=t.clone(),this.g.onDeath()}shoot(){if(this.dead||this.frozen||this.reloading>0||this.g.noteOpen||this.fireCD>0)return;if(this.ammo<=0){this.g.audio.dryFire(),this.fireCD=.3;return}this.ammo--,this.fireCD=.42,this.sinceShot=0,this.aimK=Math.max(this.aimK,.85);const t=this.g.camera;this.g.audio.gunshot(t.position),this.recoil=1,this.pitchV+=.045,this.yawV+=(Math.random()-.5)*.02,this.muzzle.intensity=60,this.muzzleSprite.material.opacity=1,this.muzzleSprite.material.rotation=Math.random()*6,this.g.shake(.25),this.g.alertAll();const n=new dr(t.position.clone(),t.userData.fwd.clone());n.direction.x+=(Math.random()-.5)*.012,n.direction.y+=(Math.random()-.5)*.012,n.direction.normalize();let i=null,s=null;for(const a of this.g.creatures){const l=a.hitBy(n);l&&(!i||l.distance<i.distance)&&(i=l,s=a)}const o=new fa(n.origin,n.direction,0,60).intersectObjects(this.g.level.occluders,!1)[0];i&&(!o||i.distance<o.distance)?(s.hurt(i),this.g.audio.fleshHit(i.point)):o&&this.g.bulletHole(o)}reload(){this.reloading>0||this.ammo>=6||this.reserve<=0||this.dead||(this.reloading=2.4,this.reloadStage=0,this.g.audio.reloadClick(0))}cameraFlash(){this.dead||this.frozen||this.flashCharge<1||this.g.noteOpen||(this.flashCharge=0,this.g.flashT=.18,this.g.audio.cameraFlash(),this.g.audio.flashCharge(3.2),this.g.onFlash())}toggleFlashlight(){this.flashlightOn=!this.flashlightOn,this.g.audio.flashlightClick()}collide(t,e){const n=this.g.level,i=this.radius,s=n.floorY(t,e);let o=t,a=e;for(let l=0;l<2;l++)for(const c of n.colliders)if(c.on&&!(c.y1<s+.3||c.y0>s+1.75)&&o+i>c.x0&&o-i<c.x1&&a+i>c.z0&&a-i<c.z1){const h=Math.min(o+i-c.x0,c.x1-(o-i)),u=Math.min(a+i-c.z0,c.z1-(a-i));h<u?o+=o<(c.x0+c.x1)/2?-h:h:a+=a<(c.z0+c.z1)/2?-u:u}return[o,a]}update(t){const e=this.g,n=e.camera,i=e.audio,s=e.level;if(this.fireCD=(this.fireCD||0)-t,this.hurtT+=t,this.dead){this.deathUpdate(t);return}const o=Math.min(1,t*22),a=this.yawV*o,l=this.pitchV*o;this.yaw+=a,this.pitch=qi.clamp(this.pitch+l,-1.35,1.35),this.yawV-=a,this.pitchV-=l;const c=this.keys;let h=0,u=0;!this.frozen&&!e.noteOpen&&((c.KeyW||c.ArrowUp)&&(u+=1),(c.KeyS||c.ArrowDown)&&(u-=1),(c.KeyA||c.ArrowLeft)&&(h-=1),(c.KeyD||c.ArrowRight)&&(h+=1));const f=h||u,d=f&&(c.ShiftLeft||c.ShiftRight)&&this.stamina>.05&&u>0,m=d?3.5:1.55,_=Math.sin(this.yaw),g=Math.cos(this.yaw);let p=-_*u+g*h,x=-g*u-_*h;const y=Math.hypot(p,x)||1;p/=y,x/=y;const v=f?10:8;this.vel.x+=((f?p*m:0)-this.vel.x)*Math.min(1,t*v),this.vel.z+=((f?x*m:0)-this.vel.z)*Math.min(1,t*v),this.stamina=qi.clamp(this.stamina+(d?-t/5.5:t/7),0,1);const[C,w]=this.collide(this.pos.x+this.vel.x*t,this.pos.z+this.vel.z*t),E=Math.hypot(C-this.pos.x,w-this.pos.z)/Math.max(t,1e-4);this.pos.x=C,this.pos.z=w;const P=s.floorY(this.pos.x,this.pos.z);this.pos.y+=(P-this.pos.y)*Math.min(1,t*12);const b=Math.min(E,4);if(this.stepPhase+=t*b*1.85,b>.3){const $t=Math.floor(this.stepPhase/Math.PI);$t!==this.lastStep&&(this.lastStep=$t,i.footstep(s.surface(this.pos.x,this.pos.z),this.pos.clone().setY(this.pos.y+.05),d?.9:.55,d))}const M=Math.min(1,b/3.5),I=Math.abs(Math.sin(this.stepPhase))*.045*M+Math.sin(e.time*1.3)*.004,z=Math.cos(this.stepPhase)*.025*M,V=Math.sin(e.time*(1.4+this.fear*2))*.003*(1+this.fear*2);this.shakeAmt=Math.max(0,this.shakeAmt-t*1.6);const F=this.shakeAmt*this.shakeAmt,H=(Math.random()-.5)*F*.08,W=(Math.random()-.5)*F*.08;n.position.set(this.pos.x+g*z,this.pos.y+this.height-.04+I+V,this.pos.z-_*z),n.rotation.order="YXZ",n.rotation.y=this.yaw+H,n.rotation.x=this.pitch+W+this.recoil*.02,n.rotation.z=-this.yawV*.6-h*.008*M+Math.cos(this.stepPhase)*.004*M,n.updateMatrixWorld(),n.getWorldDirection(n.userData.fwd),n.userData.up.set(0,1,0).applyQuaternion(n.quaternion),this.recoil=Math.max(0,this.recoil-t*5);const Z=this.gun.position,Y=this.gunBase,ct=this.reloading>0?Math.sin(Math.min(1,(2.4-this.reloading)/2.4)*Math.PI):0,_t=e.noteOpen||this.frozen?1:0;this.sinceShot+=t;const Pt=(e.combat||this.sinceShot<2.5)&&!_t?1:0;this.aimK+=(Pt-this.aimK)*Math.min(1,t*(Pt?7:2.5));const qt=this.aimK,he=this.gunLow,et=he.x+(Y.x-he.x)*qt,ut=he.y+(Y.y-he.y)*qt,Dt=he.z+(Y.z-he.z)*qt;if(Z.x+=(et+this.yawV*.3+z*.4-Z.x)*Math.min(1,t*12),Z.y+=(ut-this.pitchV*.3-I*.3-ct*.1-_t*.25-this.recoil*.01-Z.y)*Math.min(1,t*12),Z.z=Dt+this.recoil*.05,this.gun.rotation.x=this.recoil*.35+ct*.9-(1-qt)*.55,this.gun.rotation.y=(1-qt)*.25,this.gun.rotation.z=ct*.6,this.cyl.position.x=ct*.03,this.reloading>0&&(this.reloading-=t,this.reloadStage===0&&this.reloading<1.6&&(this.reloadStage=1,i.reloadClick(1)),this.reloadStage===1&&this.reloading<.5&&(this.reloadStage=2,i.reloadClick(2)),this.reloading<=0)){const $t=Math.min(6-this.ammo,this.reserve);this.ammo+=$t,this.reserve-=$t}this.muzzle.intensity*=Math.pow(5e-4,t),this.muzzle.position.copy(n.position).addScaledVector(n.userData.fwd,.6),this.muzzleSprite.material.opacity*=Math.pow(1e-4,t);const pt=n.userData.fwd.clone();this.lightDir.lerp(pt,Math.min(1,t*14)).normalize();const Ut=new L(-.1,-.17,-.2).applyQuaternion(n.quaternion).add(n.position);this.flashlight.position.copy(Ut),this.flashTarget.position.copy(Ut).addScaledVector(this.lightDir,6);let Xt=this.flashlightOn?1:0;e.flicker>0&&(Xt*=Math.random()<.55?.03:.6+Math.random()*.4),this.flashlight.intensity=30*Xt,this.bounceRay.set(Ut,this.lightDir);const Vt=this.bounceRay.intersectObjects(e.level.bounceList,!1)[0];if(Vt&&Xt>0){const $t=Vt.face?Vt.face.normal.clone().transformDirection(Vt.object.matrixWorld):qs(0,1,0);$t.dot(this.lightDir)>0&&$t.negate(),this.bouncePos.copy(Vt.point).addScaledVector($t,.35),this.bounce.position.lerp(this.bouncePos,Math.min(1,t*20));const st=Math.max(1,Vt.distance);this.bounce.intensity=Xt*Math.min(4,20/(st*st))}else this.bounce.intensity=0;this.lens.material.emissiveIntensity=2*Xt,this.fill.position.copy(n.position),this.g.gunHolder.position.copy(n.position),this.g.gunHolder.quaternion.copy(n.quaternion),this.gunLight.intensity=.25*Xt+(e.lightsOn?.5:0)+this.muzzle.intensity*.05+(e.flashT>0?6:0),this.gunAmb.intensity=e.lightsOn?.5:.12,this.fill.intensity=e.lightsOn?.1:.6,this.flashCharge=Math.min(1,this.flashCharge+t/3.2),this.flashPoint.position.copy(n.position).addScaledVector(n.userData.fwd,.3),this.flashPoint.intensity=e.flashT>0?900*(e.flashT/.18):0,this.hurtT>6&&(this.health=Math.min(100,this.health+t*6)),this.damageFx=Math.max(this.damageFx-t*1.2,(100-this.health)/100*.6)}deathUpdate(t){const e=this.g.camera;this.deathT+=t;const n=Math.min(1,this.deathT/.7);e.position.y+=(this.pos.y+.12-e.position.y)*Math.min(1,t*6),e.rotation.z+=(1.35-e.rotation.z)*Math.min(1,t*5);const i=this.deathFrom,s=Math.atan2(-(i.x-this.pos.x),-(i.z-this.pos.z));e.rotation.y+=(s-e.rotation.y)*t*2*n,e.rotation.x+=(.15-e.rotation.x)*t*2,e.updateMatrixWorld(),e.getWorldDirection(e.userData.fwd),this.gun.visible=!1,this.flashlight.intensity=Math.random()<.2?0:30}respawn(t,e){this.pos.copy(t),this.yaw=e,this.pitch=0,this.vel.set(0,0,0),this.health=100,this.dead=!1,this.gun.visible=!0,this.damageFx=0,this.reloading=0,this.stamina=1,this.flashlightOn=!0,this.flashCharge=1}}const ne=(r=0,t=0,e=0)=>new L(r,t,e),hs=-3,q1=`
<p class="date">12 de agosto de 1961</p>
<p>O doutor de Curvelo disse que o menino não passa desta semana. O Antônio tem seis anos e já não abre os olhos. Fui na encruzilhada do jeito que a minha mãe ensinou.</p>
<p class="date">13 de agosto de 1961</p>
<p>Ele veio. É alto e não tem rosto. Disse que cura o menino se eu der outro em troca. Eu prometi o primeiro neto, que nem existia ainda. Deus me perdoe, eu escolhi.</p>
<p class="date">1978</p>
<p>O Tiago nasceu e não chorou. Nunca chorou. O moço disse que vem buscar quando ele fizer vinte e cinco anos. Disse que dívida não morre. Passa.</p>
<p class="date">1998 (letra tremida)</p>
<p>Estou indo e ele ainda vem toda noite. Diz que paguei pouco. Que agora quer os juros, a família inteira. Se alguém achar isto: queima o altar. O fogo fecha a porta. Mas ele vai querer quem acender.</p>
<p class="blood">QUEM ACENDE, PAGA.</p>`;class Y1{constructor(t){this.G=t,this.flags={},this.timers=[],this.gen=0,this.cur=null,this.t=0,this.hasFuse=!1,this.hasKey=!1;const e=this.steps={},n=t,i=()=>n.level,s=()=>n.player,o=()=>n.audio;e.arrive={cp:{pos:ne(7.2,0,-9),yaw:Math.PI},enter:a=>{t.lightsOn=!1,i().props.car.sirenOn=!0,i().props.doors.front.target=.12,i().props.doors.front.locked=!1,t.mother.show(!1),t.mother.setState("hidden"),this.placeFather(),t.tensionBase=.05,this.after(1.5,()=>t.objective("Verificar a residência dos Vasconcelos")),this.after(3,()=>t.say("SD SILVA","Duarte, a central confirmou. Ninguém atende nesse endereço desde sábado.",4.2,"radio")),this.after(8,()=>t.say("SD SILVA","O vizinho disse que ouviu gritaria... e uma menina cantando a noite inteira.",4.5,"radio")),this.after(13.5,()=>t.say("SD SILVA","Vou ficar aqui na viatura esperando o reforço. Qualquer coisa, chama.",4,"radio")),this.after(26,()=>{this.cur==="arrive"&&(o().thunder(.7),t.lightning())})},update:()=>{const a=s().pos;!this.flags.calledOut&&a.z>-3&&(this.flags.calledOut=!0,t.say("VOCÊ","Polícia Militar! Dona Lúcia? Seu Antônio?",2.8,"self"),this.after(3.2,()=>o().creak(ne(4,2.6,3),1.2,.6,.7))),i().room(a.x,a.z)==="sala"&&this.go("sala")}},e.sala={enter:()=>{t.objective("Procurar os moradores"),t.tensionBase=.12,this.after(2.5,()=>t.say("VOCÊ","Meu Deus... que cheiro é esse.",2.6,"self")),this.after(25,()=>{this.flags.needPower||(t.objective("Encontrar o quadro de luz"),this.flags.needPower=!0)})},update:()=>{}},e.phone={cp:{pos:ne(12.5,0,1.6),yaw:Math.PI/2},enter:a=>{t.lightsOn=!1,this.hasFuse=!1,t.mother.show(!1),t.mother.hp=3,t.mother.setState("hidden"),this.placeFather(),t.tensionBase=.2,t.objective("Atender o telefone (sala)"),this.ring=o().loop("phone",i().props.phone.pos,1.3),this.flags.phoneAnswered=!1},update:()=>{const a=i().props.phone;if(this.ring&&a.handset){const l=t.time%3.6<1.1;a.handset.position.y=.145+(l?Math.random()*.004:0),a.handset.rotation.z=l?(Math.random()-.5)*.04:0}}},e.fuse={cp:{pos:ne(1.6,0,3.4),yaw:-Math.PI/2},enter:a=>{t.lightsOn=!1,this.hasFuse=!1,t.mother.show(!1),t.mother.setState("hidden"),t.mother.hp=3,this.placeFather(),i().props.fuseItem.visible=!0,i().props.fuseI.enabled=!0,t.tensionBase=.32,this.flags.ghostReady=!0,t.camera.position,o().duck(.25,1.5),this.after(a?.5:2.2,()=>{const l=s().pos;o().creak(ne(l.x,2.75,l.z),1.6,.9,.6),t.ceilingDust(l.x+.3,l.z-.2,60)}),this.after(a?2:4.2,()=>{const l=s().pos;t.bloodDrip(l.x+.45,l.z+.25)}),this.after(7,()=>{o().duck(1,4),t.say("VOCÊ","Tem alguém no forro...",2.4,"self")}),this.after(10,()=>t.say("VOCÊ","O fusível. O Seu Antônio deve ter guardado no quarto.",3.4,"self")),this.after(10.5,()=>t.objective("Procurar um fusível no quarto do casal")),this.after(14,()=>{for(let l=0;l<10;l++)setTimeout(()=>o().skitter(ne(4-l*.2,2.85,3+l*.45),.3,.55),l*220);t.ceilingDust(3.5,4.5,30)})},update:a=>{const l=s().pos,c=i().room(l.x,l.z),h=t.camera.userData.fwd;if(c==="hall"&&!this.flags.mimic){this.flags.mimic=!0;let u=0;const f=()=>{if(this.cur!=="fuse"||u++>5)return;const d=s().pos;if(Math.hypot(s().vel.x,s().vel.z)>.4){const _=t.camera.userData.fwd;o().footstep("wood",ne(d.x-_.x*2.6,.05,d.z-_.z*2.6),.6)}setTimeout(f,560)};setTimeout(f,900)}if(c==="hall"&&!this.flags.glimpse&&this.flags.mimic&&l.x>7&&h.x<-.85&&Math.abs(h.y)<.4&&(this.flags.glimpse=!0,this.glimpse={t:0},t.mother.toCeiling(1,6.5,"ceiling"),t.mother.yaw=0,o().skitter(ne(1.2,2.6,7),.8,.9)),this.glimpse){this.glimpse.t+=a;const u=this.glimpse.t;t.mother.pos.set(1+u*.5,2.68,6.4+u*3.2),t.mother.yaw=.2,t.mother.pose(t.time,1),t.mother.sync(),u>.6&&(t.mother.show(!1),t.mother.setState("hidden"),this.glimpse=null,this.after(1.2,()=>t.say("VOCÊ","Que porra foi essa...",2,"self")))}if(!this.flags.sawFather&&c==="casal"&&t.father.isSeen()&&(this.flags.sawFather=!0,t.tensionBase=.45,this.after(.6,()=>t.say("VOCÊ","Seu Antônio? ...O senhor tá ferido?",3,"self")),this.after(4,()=>o().whisper(t.father.chest().clone(),2.5,.7))),this.hasFuse&&!this.flags.scared){this.fuseT=(this.fuseT||0)+a;const u=ne(4.35,1.2,11.65),f=t.camera.position,d=u.clone().sub(f).normalize();this.fuseT>.9&&h.dot(d)<-.1&&(this.flags.scared=!0,t.father.show(!1),t.father.setState("idle"),this.faceScare(()=>this.go("fight1")))}}},e.fight1={cp:{pos:ne(3,0,9.3),yaw:0},enter:a=>{if(t.lightsOn=!1,this.hasFuse=!0,i().props.fuseItem.visible=!1,i().props.fuseI.enabled=!1,t.father.show(!1),t.father.setState("idle"),t.objective("SOBREVIVA. Leve o fusível até o quadro de luz",!0),t.tensionBase=.55,t.mother.fleeTo=ne(15.3,0,7),a)t.mother.hunt(14.5,7);else{const l=s().pos;t.mother.hunt(l.x,l.z),t.mother.retreatTo=ne(13,0,7),t.mother.setState("ceilRetreat"),t.mother.atkCD=3}t.mother.onFlee=()=>{t.tensionBase=.25,this.after(1.5,()=>t.say("SD SILVA","Duarte! Ouvi disparos! Duarte, responde!",3.2,"radio")),this.after(5,()=>t.say("VOCÊ","Uma mulher... andando no teto, Silva. No teto.",3.6,"self")),this.after(9,()=>t.say("SD SILVA","Sai daí. Eu tô chamando o reforço de novo.",3,"radio")),this.after(10,()=>{this.cur==="fight1"&&t.objective("Recolocar o fusível no quadro de luz (cozinha)")})}},update:()=>{}},e.power={cp:{pos:ne(13,0,1.4),yaw:Math.PI},enter:a=>{t.lightsOn=!0,this.hasFuse=!1,i().props.fuse.led.material.emissiveIntensity=3,t.father.show(!1),t.father.setState("idle"),t.mother.show(!1),t.mother.setState("hidden"),i().props.doors.front.locked=!1,i().props.doors.front.target=.12,t.tensionBase=.1,a||o().powerOn(ne(13.5,1.5,.2)),t.objective("Sair da casa"),this.after(2.5,()=>t.say("SD SILVA","Duarte, a ponte do Ribeirão caiu. O reforço só chega de manhã.",3.8,"radio")),this.after(6.8,()=>t.say("SD SILVA","Sai dessa casa. Agora.",2.2,"radio")),this.flags.doorSlammed=!1},update:()=>{const a=s().pos;if(!this.flags.doorSlammed&&a.z<2.2&&a.z>0&&a.x>4.3&&a.x<7.6){this.flags.doorSlammed=!0;const l=i().props.doors.front;l.slam(),l.locked=!0,l.lockLabel="Não abre",l.onLocked=()=>t.say("VOCÊ","Tem alguma coisa segurando do outro lado.",2.6,"self"),o().sting(),t.flickerBulbs(1.5),this.after(1.8,()=>t.say("VOCÊ","Não... não, não, não.",2.2,"self")),this.after(5,()=>o().knock(ne(5.9,1.3,-.5),3)),this.after(7.5,()=>t.say("SD SILVA","Duarte... eu tô vendo você pela janela da cozinha. Por que você tá parada aí, olhando pra mim?",5.5,"radio")),this.after(13.5,()=>{t.objective("Encontrar outra saída"),i().props.underDoor.visible=!0,this.drip=o().loop("drip",ne(8,.5,10.5),1),this.hum=o().loop("hum",ne(15,1,10.8),.9),this.showClara(!0)}),this.after(14,()=>{t.tensionBase=.3})}if(this.flags.doorSlammed&&!this.flags.tub&&Math.hypot(a.x-7.05,a.z-11.2)<1.7&&(this.flags.tub=!0,this.tubScare()),this.flags.doorSlammed&&!this.flags.mirror&&i().room(a.x,a.z)==="banheiro"&&a.x>8.6&&t.camera.userData.fwd.x>.75&&(this.flags.mirror=!0,this.mirrorScare()),this.clara&&this.clara.root.visible&&!this.flags.claraTalk&&Math.hypot(a.x-15.2,a.z-10.6)<2.6&&i().room(a.x,a.z)==="kid"){this.flags.claraTalk=!0,this.hum&&(this.hum.stop(),this.hum=null);const l=ne(15.1,.9,10.8);t.tensionBase=.4,this.after(1.2,()=>t.say("CLARA","Você demorou, tia.",2.2,"girl",l)),this.after(3.8,()=>t.say("CLARA","A vó prometeu o tio Tiago pro moço. Pra curar o papai, quando ele era pequeno.",5,"girl",l)),this.after(9.2,()=>t.say("CLARA","Mas o moço cobra juros. Agora ele quer todo mundo.",3.6,"girl",l)),this.after(13.2,()=>t.say("CLARA","A chave do porão tá no chão. Queima as coisas da vó.",3.6,"girl",l)),this.after(14.5,()=>{i().props.key.visible=!0,i().props.keyI.enabled=!0,t.objective("Pegar a chave do porão"),o().pickup()})}}},e.blackout={cp:{pos:ne(13,0,7.2),yaw:0},enter:a=>{this.hasKey=!0,i().props.key.visible=!1,i().props.keyI.enabled=!1,t.lightsOn=!1,i().props.ceilingHands.visible=!0,i().props.underDoor.visible=!0,i().props.doors.front.locked=!0;const l=i().props.doors.dBase;if(l.lockLabel="Destrancar com a chave",l.onLocked=()=>{l.locked=!1,l.set(1),o().pickup(),t.objective("Descer ao porão")},t.objective("Abrir o porão (fim do corredor)"),t.tensionBase=.45,a)this.showClara(!1);else{o().powerOff(),t.flickerBulbs(.4);const c=this.clara;c&&(c.yank=.001,o().scream(ne(15.2,1.2,10.8),{pitch:1.9,dur:1.6,vol:1})),o().sting()}t.mother.hp=3,t.mother.fleeTo=ne(1,0,7),t.mother.onFlee=()=>this.after(14,()=>{this.cur==="blackout"&&this.motherReturn()}),this.after(a?3:4.5,()=>{this.cur==="blackout"&&this.motherReturn()}),t.father.show(!0),t.father.headTurned=!0,t.father.idlePose(),t.father.place(1.2,0,7,Math.PI/2),t.father.setState("hunt")},update:()=>{s().pos.x>16.4&&this.go("basement")}},e.basement={cp:{pos:ne(20.6,hs,7),yaw:-Math.PI/2},enter:a=>{t.mother.show(!1),t.mother.setState("hidden"),t.father.show(!1),t.father.setState("idle"),t.lightsOn=!1;const l=i().props.doors.dBase;l.locked=!1,a?(l.target=0,l.open=0,l.locked=!0,l.lockLabel="Emperrada",l.onLocked=null):this.after(.6,()=>{l.slam(),l.locked=!0,l.lockLabel="Emperrada",l.onLocked=null,o().sting(!1)}),t.objective("Investigar o porão"),t.tensionBase=.35,i().props.diaryI.enabled=!0,i().props.burnI.enabled=!1,this.flags.diaryRead=!1,this.basementLoops()},update:()=>{const a=s().pos;!i().props.altar.lit&&a.x>21.2&&(i().props.altar.lit=!0,o().noiseBurst(o().dest(ne(27,hs+1,6)),{dur:.6,type:"lowpass",f:800,peak:.6,buf:o().pink}),this.after(.8,()=>t.say("VOCÊ","Quem acendeu essas velas...?",2.6,"self")),this.after(4,()=>{this.flags.diaryRead||t.objective("Examinar o altar")}))}},e.ritual={enter:()=>{const a=i().props.fire;a.g.visible=!0,a.level=0,i().props.altar.lit=!1,this.fire=o().loop("fire",ne(27.3,hs+1,6),1.3),t.objective("SOBREVIVA ATÉ O ALTAR QUEIMAR",!0),t.tensionBase=.7,o().riser(2.5),this.after(2.6,()=>{t.credor.emerge(21.6,11.2),t.shake(.8),o().sting(),t.flickerT=3}),i().props.wrapped.forEach(l=>l.userData.spin=0)},update:a=>{const l=i().props.fire;l.level=Math.min(1,l.level+a/38),t.credor.speed=1.4+l.level*1.1,i().props.wrapped.forEach((c,h)=>{c.userData.spin+=a*(.4+l.level*2)*(h%2?1:-1)}),l.level>=1&&t.credor.state!=="die"&&(t.credor.die(),t.shake(1.2),o().sting(),this.after(4.2,()=>this.go("escape")))}},e.escape={cp:{pos:ne(24.5,hs,6.5),yaw:-Math.PI/2+Math.PI},enter:a=>{t.credor.show(!1);const l=i().props.fire;l.g.visible=!0,l.level=.6,a&&(this.fire=o().loop("fire",ne(27.3,hs+1,6),1.1));const c=i().props.doors.dBase;c.locked=!1,c.set(1,!1),o().doorSlam(c.pos);const h=i().props.doors.front;h.locked=!1,h.set(1,!1),t.objective("SAIA DA CASA",!0),t.tensionBase=.55,this.quakeT=2,t.mother.hp=99,t.mother.show(!0),t.mother.place(2,0,7,Math.PI/2),t.mother.setState("chase"),t.mother.onFlee=null,t.father.show(!0),t.father.place(10.5,0,3,0),t.father.setState("hunt"),this.after(1,()=>t.say("VOCÊ","Silva! Silva, liga a viatura!",2.4,"self"))},update:a=>{if(this.quakeT-=a,this.quakeT<=0){this.quakeT=3+Math.random()*3,t.shake(.5),o().growl(s().pos.clone().setY(-1),2.5,.8),t.flickerT=.8;const c=i().doors[Math.floor(Math.random()*i().doors.length)];!c.locked&&c!==i().props.doors.front&&c!==i().props.doors.dBase&&(c.target>.5?c.slam():c.set(1))}t.mother.hp<96&&(t.mother.hp=99,t.mother.stun=1.6),s().pos.z<-4.5&&this.go("ending")}},e.ending={enter:()=>{t.objective(""),t.mother.show(!1),t.father.show(!1),t.mother.setState("hidden"),t.father.setState("idle"),s().frozen=!0,t.tensionBase=.2,i().props.car.sirenOn=!1,i().props.doors.front.slam(),o().radioBeep(),this.after(1.5,()=>t.say("SD SILVA","Duarte? Duarte, se você tiver ouvindo, responde.",3.6,"radio")),this.after(5.5,()=>t.say("SD SILVA","Você entrou nessa casa na sexta-feira. Hoje é segunda.",4,"radio")),this.after(10,()=>t.say("SD SILVA","A gente achou a viatura. Não tem ninguém aqui fora, Duarte.",4,"radio")),this.after(10.5,()=>{this.turnBack=!0}),this.after(13.5,()=>{t.endingFigures(),t.lightning(),o().thunder(.4),o().sting()}),this.after(17.5,()=>{t.lightning(),o().thunder(.6)}),this.after(19.5,()=>t.finish())},update:a=>{if(this.turnBack){const l=s();let c=Math.PI-l.yaw;for(;c>Math.PI;)c-=Math.PI*2;for(;c<-Math.PI;)c+=Math.PI*2;l.yaw+=c*a*1.2,l.pitch+=(.05-l.pitch)*a}}}}after(t,e){this.timers.push({t,fn:e,gen:this.gen})}go(t,e=!1){this.cur=t,this.stepT=0;const n=this.steps[t];n.cp&&(this.checkpoint=t),n.enter(e)}restore(){this.gen++,this.timers=[],this.flags.waitLook=!1;const t=this.G;t.audio.stopAllLoops(),t.startWorldLoops(),this.ring=null,this.fire=null,this.drip=null,this.hum=null;const e=this.steps[this.checkpoint].cp;if(t.player.respawn(e.pos,e.yaw),t.player.ammo=6,t.player.reserve=Math.max(t.player.reserve,12),t.credor.show(!1),t.credor.setState("idle"),this.checkpoint!=="escape"&&this.checkpoint!=="ritual"){const n=t.level.props.fire;n.g.visible=!1}this.checkpoint==="power"&&(this.flags.doorSlammed=!1,this.flags.claraTalk=!1,this.flags.tub=!1,this.flags.mirror=!1,this.clara&&(this.clara.root.visible=!1),t.level.props.key.visible=!1,t.level.props.keyI.enabled=!1),this.go(this.checkpoint,!0)}update(t){this.stepT+=t;for(const n of[...this.timers]){if(n.gen!==this.gen){this.timers.splice(this.timers.indexOf(n),1);continue}n.t-=t,n.t<=0&&(this.timers.splice(this.timers.indexOf(n),1),n.fn())}const e=this.steps[this.cur];if(e&&e.update&&e.update(t),this.updateScare(t),this.clara&&this.clara.yank){this.clara.yank+=t;const n=this.clara.root;n.position.y+=t*(2+this.clara.yank*14),this.clara.armL.rotation.x=-2.9,this.clara.armR.rotation.x=-2.9,n.position.y>3&&(n.visible=!1,this.clara.yank=0,this.G.audio.bodyFall(ne(15,2.7,10.8)))}}placeFather(){const t=this.G.father;t.show(!0),t.headTurned=!1,t.idlePose(),t.setState("idle"),t.place(5.5,0,11.5,Math.PI/4)}showClara(t){const e=this.G;if(!this.clara){this.clara=li(e.cmats,{h:1.1,skin:e.cmats.childSkin,dress:e.cmats.childDress,hair:!0,hairLen:.45,mouthOpen:.3}),e.scene.add(this.clara.root);const n=this.clara;n.root.position.set(15.15,0,10.8),n.root.rotation.y=Math.PI/2,n.hips.position.y=.48,n.legL.rotation.x=-1.5,n.legR.rotation.x=-1.5,n.shinL.rotation.x=1.5,n.shinR.rotation.x=1.5,n.armL.rotation.set(-.4,0,.1),n.armR.rotation.set(-.4,0,-.1),n.foreL.rotation.x=-.6,n.foreR.rotation.x=-.6,n.neck.rotation.x=.35}this.clara.root.visible=t,this.clara.root.position.y=0,this.clara.yank=0}dropMother(){const t=this.G;t.mother.drop(),t.audio.scream(t.mother.pos.clone(),{pitch:1.2,dur:1.4,vol:1.3}),t.audio.sting(),t.shake(.4),this.go("fight1")}motherReturn(){const t=this.G,e=t.player.pos,n=[ne(2,0,7),ne(8,0,7),ne(14,0,7),ne(4,0,3),ne(12,0,3)],i=n.filter(s=>Math.hypot(s.x-e.x,s.z-e.z)>5)[0]||n[0];t.mother.hunt(i.x,i.z),t.audio.skitter(ne(i.x,2.6,i.z),1.2,.9)}faceScare(t){const e=this.G,n=e.audio,i=e.camera,s=this.scareBody||(this.scareBody=li(e.cmats,{h:1.62,thin:.72,armK:1.45,fingerK:2,skin:e.cmats.greySkin,dress:e.cmats.gown,dressLen:.72,hair:!0,hairLen:.8,face:"scare",barelegs:!0}));s.root.rotation.set(0,0,Math.PI),i.add(s.root),s.root.traverse(o=>{o.isMesh&&(o.frustumCulled=!1)}),s.armL.rotation.set(-.5,0,-1.1),s.armR.rotation.set(-.5,0,1.1),s.foreL.rotation.set(-1.2,0,0),s.foreR.rotation.set(-1.2,0,0),s.legL.rotation.set(.2,0,-.3),s.legR.rotation.set(-.1,0,.3),s.hair&&(s.hair.visible=!1),e.player.frozen=!0,n.duck(0,.05),this.scare={t:0,B:s,done:t,hit:!1},n.scream(i.position.clone(),{pitch:1.55,dur:1.4,vol:1.8,rough:1}),n.sting(!0),n.boneCrack(i.position.clone(),4),e.shake(1.3),e.scareFx=1}updateScare(t){const e=this.scare;if(!e)return;const n=this.G,i=n.audio;e.t+=t;const s=e.t,o=e.B;let a=s<.08?(1-s/.08)*1.2:-.06*Math.sin((s-.08)*22)*Math.exp(-(s-.08)*5);s>1.05&&(a=(s-1.05)*(s-1.05)*40),o.root.position.set(.015,1.56+a,-.31),o.neck.rotation.set(Math.sin(s*47)*.12,Math.sin(s*31)*.2,Math.sin(s*59)*.22),o.head.rotation.set(0,Math.sin(s*23)*.15,Math.sin(s*71)*.1),o.armL.rotation.x=-.5+Math.sin(s*40)*.15,o.armR.rotation.x=-.5-Math.sin(s*37)*.15,n.scareFx=s<.1?1:s>1?.7:.12,n.scareExposure=.42,!e.hit&&s>.3&&(e.hit=!0,n.player.damage(14,n.camera.position.clone().add(n.camera.userData.fwd))),s>1.3&&(n.camera.remove(o.root),this.scare=null,n.player.frozen=!1,n.flickerT=1.8,n.scareFx=0,n.scareExposure=0,i.duck(1,2),i.skitter(n.camera.position.clone().setY(2.7),1,1),e.done&&e.done())}tubScare(){const t=this.G,e=t.audio,n=this.tiago||(this.tiago=li(t.cmats,{h:1.75,skin:t.cmats.greySkin,top:t.cmats.greySkin,face:"tiago"}));t.scene.add(n.root),n.root.position.set(7.05,-.2,11.5),n.root.rotation.y=0,n.root.visible=!0,n.hips.position.y=.3,n.legL.rotation.x=-1.57,n.legR.rotation.x=-1.57,n.spine.rotation.x=-1.2,n.armL.rotation.set(-.3,0,-.5),n.armR.rotation.set(-.3,0,.5),n.neck.rotation.x=.4;const i=new At({color:3801088,roughness:.15});n.root.traverse(a=>{a.isMesh&&!a.userData.bloodied&&(a.material=a.material===t.cmats.hole||a.material.vertexColors?a.material:i,a.userData.bloodied=!0)});let s=0;e.splash(ne(7.05,.5,11.5),!0),e.sting(),t.shake(.3);const o=()=>{if(s+=.016,n.spine.rotation.x=-1.2+Math.min(1,s*4)*1.25,n.armR.rotation.x=-.3-Math.min(1,s*3)*1.5,n.head.rotation.z=Math.sin(s*40)*.2,s<1.4)requestAnimationFrame(o);else{e.splash(ne(7.05,.5,11.5));const a=()=>{n.root.position.y-=.03,n.spine.rotation.x-=.04,n.root.position.y>-1.2?requestAnimationFrame(a):n.root.visible=!1};a()}};o()}mirrorScare(){const t=this.G,e=t.audio,n=this.mirrorFig||(this.mirrorFig=li(t.cmats,{h:1.92,thin:.9,armK:1.35,skin:t.cmats.paleSkin,top:t.cmats.shirt,bottom:t.cmats.pants,face:"father"}));t.scene.add(n.root),n.root.traverse(s=>s.layers.set(2));const i=t.player.pos;n.root.position.set(i.x-.75,0,i.z+.1),n.root.rotation.y=Math.PI/2,n.neck.rotation.z=.5,n.root.visible=!0,e.whisper(ne(i.x-.6,1.6,i.z),1.5,.9),setTimeout(()=>{n.root.visible=!1},1400),setTimeout(()=>e.boneCrack(ne(i.x-.5,1.7,i.z),2),300)}basementLoops(){const t=this.G.audio;this.breath=t.loop("breathing",ne(22.3,hs+1,2.4),.6),t.loop("swing",ne(24.6,hs+1.5,10.6),.8)}event(t){const e=this.G,n=e.audio,i=e.level,s=e.player;switch(t){case"teeth":e.say("VOCÊ","...São dentes. Dentes de gente.",2.8,"self"),this.flags.teeth||(this.flags.teeth=!0,n.sting(!1));break;case"granny":e.say("VOCÊ","Dona Benedita, a avó. Falecida em 98, segundo o vizinho. Quem queimou os olhos da foto?",4.4,"self");break;case"drawings":e.say("VOCÊ",'"O moço." Tem um homem alto em todos os desenhos.',3.4,"self");break;case"switch":if(n.switchClick(ne(4.8,1.2,.1)),e.lightsOn){e.say("VOCÊ","Melhor deixar acesa.",1.8,"self");break}e.say("VOCÊ","Sem energia.",1.6,"self"),this.flags.needPower||(this.flags.needPower=!0,e.objective("Encontrar o quadro de luz"));break;case"fridge":{const o=i.props.fridge;if(o.target>.5){o.target=0,n.latch(ne(8.7,1,.9));break}o.target=1,n.latch(ne(8.7,1,.9)),n.creak(ne(8.7,1,.9),.4,.3,1.3),this.flags.fridge||(this.flags.fridge=!0,setTimeout(()=>{n.sting(!1),e.say("VOCÊ","Ai, meu Deus...",1.8,"self")},600));break}case"drawer":if(this.flags.drawer){e.say("VOCÊ","Vazia.",1.2,"self");break}this.flags.drawer=!0,s.reserve+=12,n.pickup(),e.say("VOCÊ","Munição .38... o Seu Antônio tinha um revólver.",3,"self");break;case"ammoBox":if(this.flags.ammoBox){e.say("VOCÊ","Vazia.",1.2,"self");break}this.flags.ammoBox=!0,s.reserve+=18,n.pickup(),e.say("VOCÊ","Mais munição.",1.6,"self");break;case"fusebox":if(this.hasFuse&&["fuse","fight1"].includes(this.cur)){n.switchClick(ne(13.5,1.5,.2)),e.mother.active&&e.mother.state!=="hidden"&&(e.mother.onFlee=null,e.mother.flee()),this.go("power");break}if(e.lightsOn){e.say("VOCÊ","Funcionando.",1.4,"self");break}this.cur==="sala"||this.cur==="arrive"?(n.latch(ne(13.5,1.5,.2)),e.say("VOCÊ","Tiraram o fusível principal. Alguém queria essa casa no escuro.",3.6,"self"),this.after(4.5,()=>this.go("phone"))):e.say("VOCÊ","Falta o fusível.",1.6,"self");break;case"phone":{if(this.cur!=="phone"||this.flags.phoneAnswered){e.say("VOCÊ","Linha muda.",1.4,"self");break}this.flags.phoneAnswered=!0,this.ring&&this.ring.stop(),this.ring=null;const o=i.props.phone;n.latch(o.pos),o.handset&&(o.handset.position.y=.145,o.handset.visible=!1),e.objective(""),this.after(.8,()=>e.say("VOCÊ","Alô? Polícia Militar.",2,"self")),this.after(3.2,()=>e.say("CLARA (telefone)","Tia... é a polícia? Você veio buscar a gente?",3.8,"phone")),this.after(7.4,()=>e.say("VOCÊ","Clara? Clara, onde você tá?",2.4,"self")),this.after(10.2,()=>e.say("CLARA (telefone)","Escondida. A mamãe não gosta quando tem visita.",3.6,"phone")),this.after(14.2,()=>e.say("CLARA (telefone)","Ela tá bem em cima de você agora, tia.",3.2,"phone")),this.after(17.6,()=>e.say("CLARA (telefone)","Não olha.",1.6,"phone")),this.after(19.6,()=>{n.latch(o.pos),n.noiseBurst(n.dest(null),{dur:2.5,f:425,q:30,peak:.12}),o.handset&&(o.handset.visible=!0),this.go("fuse")});break}case"takeFuse":this.hasFuse=!0,i.props.fuseItem.visible=!1,i.props.fuseI.enabled=!1,n.pickup(),e.say("VOCÊ","Um fusível de 30 amperes. Tá ótimo.",2.4,"self");break;case"takeKey":i.props.keyI.enabled=!1,n.pickup(),this.go("blackout");break;case"diary":e.showNote(q1,()=>{!this.flags.diaryRead&&this.cur==="basement"&&(this.flags.diaryRead=!0,i.props.burnI.enabled=!0,i.props.diaryI.enabled=!1,e.objective("Queimar o altar (segure E)"),this.after(1,()=>e.say("VOCÊ","Eu tenho um isqueiro. Que Deus me perdoe também.",3.2,"self")))});break;case"burn":i.props.burnI.enabled=!1,this.go("ritual");break;case"carRadio":{n.radioBeep(),["arrive","sala"].includes(this.cur)?e.say("SD SILVA","Fala, Duarte. Tô aqui. Vai lá dar uma olhada.",2.8,"radio"):e.say("RÁDIO","(estática)",1.5,"radio");break}case"flash":this.flags.ghostReady&&!this.flags.ghostSeen&&e.revealedGhost&&(this.flags.ghostSeen=!0,n.sting(!1),n.whisper(ne(15.3,1.5,7),2,1));break}}}const Te=r=>document.querySelector(r),Nn=new URLSearchParams(location.search),sn=(r=0,t=0,e=0)=>new L(r,t,e),Ii=Te("#c"),Xn=new pv({canvas:Ii,antialias:!1,powerPreference:"high-performance",preserveDrawingBuffer:Nn.has("shot")});Xn.shadowMap.enabled=!0;Xn.shadowMap.type=Fu;Xn.toneMapping=uc;Xn.toneMappingExposure=1;Xn.outputColorSpace=Ne;const We=new xf;We.background=new Ht(131846);We.fog=new bc(197638,.05);const nn=new mn(80,innerWidth/innerHeight,.05,140);nn.userData.fwd=sn(0,0,-1);nn.userData.up=sn(0,1,0);We.add(nn);const Oc=new xf,Zf=new se;Oc.add(Zf);const $f=new zf(2238522,723206,.3);We.add($f);const U=window.G={scene:We,camera:nn,renderer:Xn,gunScene:Oc,gunHolder:Zf,time:0,dt:0,lightsOn:!1,flashT:0,flicker:0,flickerT:0,sens:Number(Nn.get("sens")||1),tensionBase:0,noteOpen:!1,paused:!0,started:!1,godMode:Nn.has("god"),exposure:1.4,shakeV:0};U.audio=new Fx;U.brightness=1;U.volume=1;U.post=Ux(Xn,We,nn);{const r=new Gf(Oc,nn);r.clear=!1,r.clearDepth=!0,U.post.composer.insertPass(r,1)}U.ready=(async()=>{U.assets=await F1(Xn,t=>{const e=document.querySelector("#loading em");e&&(e.style.width=(t*100).toFixed(0)+"%")}),jx(U.assets),U.assets.env&&(We.environment=U.assets.env,We.environmentIntensity=.25),U.cmats=Kx(),U.level=W1(U),U.player=new X1(U),U.mother=new Zx(U,U.cmats),U.father=new $x(U,U.cmats),U.credor=new Jx(U,U.cmats),U.creatures=[U.mother,U.father,U.credor],U.story=new Y1(U),U.player.setInput(Gc),Xn.compile(We,nn),document.querySelector("#loading").classList.add("hidden");const r=document.querySelector("#start");r.disabled=!1,r.focus()})();const Du=Math.min(devicePixelRatio,1.5)*Number(Nn.get("scale")||1);function Jf(){const r=innerWidth,t=innerHeight;Xn.setPixelRatio(Du),Xn.setSize(r,t,!1),nn.aspect=r/t,nn.fov=r/t<1?95:80,nn.updateProjectionMatrix(),U.post.setSize(r,t,Du)}addEventListener("resize",Jf);Jf();const kc=700,Bc=new ke,cn=new Float32Array(kc*3);for(let r=0;r<kc;r++)cn[r*3]=(Math.random()-.5)*10,cn[r*3+1]=Math.random()*3,cn[r*3+2]=(Math.random()-.5)*10;Bc.setAttribute("position",new on(cn,3));const zr=new Ye({transparent:!0,depthWrite:!1,blending:xs,uniforms:{lp:{value:sn()},ld:{value:sn()},on:{value:1},t:{value:0}},vertexShader:`uniform vec3 lp, ld; uniform float on, t; varying float a;
    void main(){ vec3 p = position; p.x += sin(t*0.3 + position.y*3.0)*0.08; p.y += sin(t*0.2 + position.x*2.0)*0.05;
      vec3 d = p - lp; float dist = length(d); float c = dot(d/dist, ld);
      a = smoothstep(0.86, 0.97, c) * smoothstep(9.0, 0.6, dist) * on;
      vec4 mv = modelViewMatrix * vec4(p,1.0); gl_Position = projectionMatrix * mv; gl_PointSize = clamp(1.6 / -mv.z, 0.8, 2.6); }`,fragmentShader:"varying float a; void main(){ vec2 c = gl_PointCoord-0.5; float r = 1.0 - smoothstep(0.2, 0.5, length(c)); gl_FragColor = vec4(vec3(0.9,0.85,0.75), a*r*0.32); }"}),Qf=new Ef(Bc,zr);Qf.frustumCulled=!1;We.add(Qf);const fl=[],j1=(()=>{const r=document.createElement("canvas");r.width=r.height=64;const t=r.getContext("2d"),e=t.createRadialGradient(32,32,1,32,32,30);e.addColorStop(0,"rgba(0,0,0,1)"),e.addColorStop(.25,"rgba(10,8,6,0.9)"),e.addColorStop(.5,"rgba(40,36,30,0.4)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const n=new $i(r);return n.colorSpace=Ne,n})();function zc(r,t,e,n,i={}){const s=new ot(new ni(t,t),new At({map:r,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,roughness:i.rough??.8,color:i.color??16777215}));if(s.position.copy(e).addScaledVector(n,.004),s.lookAt(e.clone().add(n)),s.rotateZ(Math.random()*6.28),We.add(s),fl.push(s),fl.length>60){const o=fl.shift();We.remove(o),o.geometry.dispose(),o.material.dispose()}}U.bulletHole=r=>{const t=r.face?r.face.normal.clone().transformDirection(r.object.matrixWorld):sn(0,1,0);zc(j1,.06,r.point,t),td(r.point,t,10127984,10,1.5)};const Vc=new Jr({map:da(),transparent:!0,depthWrite:!1}),Qs=[];function td(r,t,e,n,i){for(let s=0;s<n;s++){const o=new ar(Vc.clone());o.material.color.set(e),o.scale.setScalar(.03+Math.random()*.03),o.position.copy(r),We.add(o);const a=t.clone().multiplyScalar(i*(.3+Math.random())).add(sn((Math.random()-.5)*i,(Math.random()-.2)*i,(Math.random()-.5)*i));Qs.push({s:o,v:a,life:.5+Math.random()*.5})}}U.spawnBlood=(r,t,e=5898240)=>{td(r,t||sn(0,1,0),e,16,2.2);const n=U.level.floorY(r.x,r.z);zc(xn(Math.floor(Math.random()*30),"splat"),.5+Math.random()*.4,sn(r.x+(Math.random()-.5)*.4,n+.008,r.z+(Math.random()-.5)*.4),sn(0,1,0),{rough:.2,color:e===5898240?16777215:2236962})};U.ceilingDust=(r,t,e=40)=>{for(let n=0;n<e;n++){const i=new ar(Vc.clone());i.material.color.set(9076848),i.material.opacity=.6,i.scale.setScalar(.012+Math.random()*.02),i.position.set(r+(Math.random()-.5)*.6,2.66,t+(Math.random()-.5)*.6),We.add(i),Qs.push({s:i,v:sn((Math.random()-.5)*.1,-.2-Math.random()*.6,(Math.random()-.5)*.1),life:2.5+Math.random()*2,g:.08})}U.audio.noiseBurst(U.audio.dest(sn(r,2.6,t)),{dur:.6,type:"highpass",f:3e3,peak:.12,buf:U.audio.pink})};U.bloodDrip=(r,t)=>{const e=new ar(Vc.clone());e.material.color.set(5898240),e.scale.set(.02,.035,1),e.position.set(r,2.65,t),We.add(e),Qs.push({s:e,v:sn(0,0,0),life:.72,g:1}),setTimeout(()=>{zc(xn(77,"splat"),.18,sn(r,U.level.floorY(r,t)+.008,t),sn(0,1,0),{rough:.15});const n=U.audio.dest(sn(r,.1,t));U.audio.tone(n,{f:700,fEnd:1400,dur:.06,peak:.5}),U.audio.noiseBurst(n,{dur:.05,f:2500,q:2,peak:.25})},720)};U.scareFx=0;U.shake=r=>{U.player.shakeAmt=Math.min(1.5,U.player.shakeAmt+r)};U.alertAll=()=>{};U.flickerBulbs=r=>U.level.bulbs.forEach(t=>t.flicker=r*(.6+Math.random()*.6));let na=0,dl=18;U.lightning=()=>{na=.6,U.level.props.lightning.shadow.needsUpdate=!0,setTimeout(()=>U.audio.thunder(.6+Math.random()*.8),300+Math.random()*1200)};U.onFlash=()=>{U.exposureKick=.35;const r=nn,t=r.userData.fwd;U.revealedGhost=!1;for(const e of U.level.reveal){const n=e.getWorldPosition(sn());e.isGroup&&(n.y+=1.2);const i=n.distanceTo(r.position),s=n.clone().sub(r.position).normalize();i<13&&s.dot(t)>.7&&U.level.los(r.position,n)&&(e.visible=!0,e.userData.revealT=.35,e===U.level.props.ghost&&(U.revealedGhost=!0))}for(const e of U.creatures){if(!e.active)continue;const n=e.chest().clone(),i=n.distanceTo(r.position),s=n.sub(r.position).normalize();i<10&&s.dot(t)>.6&&U.level.los(r.position,e.chest().clone())&&e.flashed()}U.story.event("flash")};const me={hud:Te("#hud"),obj:Te("#objective"),objT:Te("#objective span"),subs:Te("#subs"),prompt:Te("#prompt"),ammo:Te("#ammo b"),reserve:Te("#ammo span"),flashBar:Te("#flashc em"),stamp:Te("#stamp"),hold:Te("#hold"),holdBar:Te("#hold i"),note:Te("#note"),noteTxt:Te("#note .txt"),pause:Te("#pause"),dead:Te("#dead"),cards:Te("#cards"),cardsP:Te("#cards p"),title:Te("#title"),black:Te("#black")};let Nu=0;U.objective=(r,t=!1)=>{const e=++Nu;me.obj.classList.remove("show"),r&&(setTimeout(()=>{e===Nu&&(me.objT.textContent=r,me.obj.classList.toggle("urgent",t),me.obj.classList.add("show"))},400),U.currentObjective=r)};const ps=[];let us=null;U.say=(r,t,e,n="radio",i=null)=>ps.push({who:r,text:t,dur:e,kind:n,pos:i,at:U.time});function K1(r){for(us&&(us.t-=r,us.t<=0&&(us.el.remove(),us=null));ps.length&&U.time-ps[0].at>7&&ps.length>1;)ps.shift();if(!us&&ps.length){const t=ps.shift(),e=document.createElement("div");e.className={radio:"radio",girl:"girl",phone:"girl",self:"self"}[t.kind]||"",e.innerHTML=`<span class="line"><span class="who">${t.who}</span>${t.text}</span>`,me.subs.appendChild(e),us={el:e,t:t.dur};const n=U.audio,i=t.dur*.82;t.kind==="radio"?(n.radioBeep(),n.voice(null,i,{radio:!0,pitch:105,vol:.5})):t.kind==="phone"?n.voice(U.level.props.phone.pos,i,{radio:!0,child:!0,vol:.5}):t.kind==="girl"?n.voice(t.pos,i,{child:!0,vol:.45}):t.kind==="self"&&n.voice(null,i,{pitch:195,vol:.16})}}let cc=null;U.showNote=(r,t)=>{me.noteTxt.innerHTML=r,me.note.classList.remove("hidden"),U.noteOpen=!0,cc=t,U.audio.pickup()};U.closeNote=()=>Hc();function Hc(){me.note.classList.add("hidden"),U.noteOpen=!1;const r=cc;cc=null,r&&r()}function ed(r,t,e=4.2){me.cards.classList.remove("hidden");let n=0;const i=()=>{if(n>=r.length){me.cardsP.classList.remove("on"),setTimeout(()=>{me.cards.classList.add("hidden"),t&&t()},1400);return}me.cardsP.classList.remove("on"),setTimeout(()=>{me.cardsP.textContent=r[n++],me.cardsP.classList.add("on"),setTimeout(i,e*1e3)},900)};i()}const Gc={};let Jn=null,ia=0,wi=null;addEventListener("keydown",r=>{if(U.started&&(Gc[r.code]=!0,!r.repeat)){if(U.noteOpen){(r.code==="KeyE"||r.code==="Escape"||r.code==="Space")&&Hc();return}U.paused||U.player.dead||(r.code==="KeyE"&&wi&&(wi.hold?(Jn=wi,ia=0):wi.use()),r.code==="KeyR"&&U.player.reload(),r.code==="KeyF"&&U.player.toggleFlashlight(),r.code==="KeyQ"&&U.player.cameraFlash())}});addEventListener("keyup",r=>{Gc[r.code]=!1,r.code==="KeyE"&&(Jn=null)});addEventListener("mousemove",r=>{(document.pointerLockElement===Ii||U.lockFailed)&&!U.paused&&U.player.look(r.movementX,r.movementY)});Ii.addEventListener("mousedown",r=>{if(U.started){if(document.pointerLockElement!==Ii&&!U.lockFailed){oo();return}if(U.noteOpen){Hc();return}r.button===0&&U.player.shoot(),r.button===2&&U.player.cameraFlash()}});addEventListener("contextmenu",r=>r.preventDefault());function sa(){U.lockFailed||(U.lockFailed=!0,U.paused=!1,me.pause.classList.add("hidden"),Ii.style.cursor="crosshair",U.audio.suspend(!1))}function oo(){if(!U.lockFailed)try{const r=Ii.requestPointerLock({unadjustedMovement:!0});r&&r.catch&&r.catch(()=>{try{const t=Ii.requestPointerLock();t&&t.catch&&t.catch(sa)}catch{sa()}})}catch{sa()}}document.addEventListener("pointerlockerror",sa);document.addEventListener("pointerlockchange",()=>{const r=document.pointerLockElement===Ii;!U.started||U.finished||U.lockFailed||(U.paused=!r&&!Nn.has("nolock"),me.pause.classList.toggle("hidden",!U.paused||U.player.dead),U.audio.suspend(U.paused))});Te("#btnResume").addEventListener("click",()=>{oo()});const Z1=()=>{if(document.fullscreenElement)document.exitFullscreen();else{const r=document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen({navigationUI:"hide"});r&&r.then&&r.then(()=>{U.started&&oo()}).catch(()=>{})}};Te("#btnFull2").addEventListener("click",Z1);let ra=!0;Te("#btnFull").addEventListener("click",()=>{ra=!ra,Te("#btnFull b").textContent=ra?"LIGADA":"DESLIGADA"});const nd=()=>Te("#controls").classList.remove("hidden");Te("#btnControls").addEventListener("click",nd);Te("#btnControls2").addEventListener("click",nd);Te("#btnCloseControls").addEventListener("click",()=>Te("#controls").classList.add("hidden"));const Wc=(r,t)=>{const e=r.map(n=>Te(n));e.forEach(n=>n.addEventListener("input",()=>{e.forEach(i=>i.value=n.value),t(Number(n.value))}))};Wc(["#optSens","#optSens2"],r=>U.sens=r);Wc(["#optBright","#optBright2"],r=>U.brightness=r);Wc(["#optVol","#optVol2"],r=>{U.volume=r,U.audio.master&&(U.audio.master.gain.value=.9*r)});me.dead.addEventListener("click",()=>{me.dead.classList.add("hidden"),U.story.restore(),U.post.u.blackout.value=0,oo()});U.startWorldLoops=()=>{const r=U.audio;r.loop("flies",sn(5.5,.9,4.2),.9),U.level.props.tv.on&&r.loop("tv",sn(3.1,.75,2.2),.7)};U.onDeath=()=>{U.audio.sting(),U.objective(""),setTimeout(()=>{U.audio.bodyFall(U.player.pos)},500),setTimeout(()=>{me.dead.classList.remove("hidden")},3200)};U.endingFigures=()=>{const r=new wn(16719888,14,9,1.5);r.position.set(6,1.6,3),We.add(r),U.lightsOn=!1;const t=(e,n,i)=>{const s=li(U.cmats,{skin:U.cmats.ghost,top:U.cmats.ghost,bottom:U.cmats.ghost,...i});return s.root.position.set(e,0,n),s.root.rotation.y=Math.PI,We.add(s.root),s};t(2.4,.7,{h:1.62,dress:U.cmats.ghost,hair:!0,hairLen:.7}),t(3,.8,{h:1.92}).neck.rotation.z=.5,t(10.6,.7,{h:1.1,dress:U.cmats.ghost,hair:!0,hairLen:.4}),t(11.2,.75,{h:1.75}),t(5.9,.4,{h:1.68,hair:!0,hairLen:.25}),t(5.9,1.6,{h:3,thin:.6,armK:1.75,faceless:!0,longHead:1.9,longNeck:1.9}),U.level.props.doors.front.set(1,!0)};U.finish=()=>{U.finished=!0,me.black.classList.remove("hidden"),me.black.style.opacity=1,U.audio.stopAllLoops(),setTimeout(()=>{me.hud.classList.add("hidden"),ed(["Em 17 de março de 2003, a viatura 2207 foi encontrada vazia em frente à residência dos Vasconcelos.",`Nenhum membro da família foi localizado.
O Soldado Silva e a Cabo Inês Duarte também não.`,`A câmera corporal foi encontrada no porão, sob as cinzas do altar.

Ainda estava gravando.`],()=>{document.exitPointerLock(),me.title.classList.remove("hidden"),me.title.querySelector(".file").textContent="FIM DA GRAVAÇÃO · OBRIGADO POR JOGAR",me.title.querySelector(".warn").textContent="Texturas e modelos: Poly Haven e ambientCG (CC0). Cabeça escaneada: Lee Perry-Smith por Infinite-Realities (CC BY 3.0). Motor: three.js.",me.title.querySelector("button").textContent="JOGAR NOVAMENTE",me.title.querySelector("button").onclick=()=>location.reload()},5)},1600)};Te("#start").addEventListener("click",id);async function id(){if(await U.ready,U.audio.init(),U.audio.master&&(U.audio.master.gain.value=.9*U.volume),me.title.classList.add("hidden"),ra&&!Nn.has("nolock")&&document.documentElement.requestFullscreen)try{await document.documentElement.requestFullscreen({navigationUI:"hide"})}catch{}oo();const r=Nn.get("step"),t=()=>{U.started=!0,U.paused=document.pointerLockElement!==Ii&&!Nn.has("nolock")&&!U.lockFailed,me.hud.classList.remove("hidden"),U.startWorldLoops(),r&&U.story.steps[r]?(U.story.checkpoint=r,U.story.restore()):U.story.go("arrive"),U.paused&&me.pause.classList.remove("hidden")};r||Nn.has("skip")?t():ed([`Zona rural de Santa Luzia do Paraopeba, Minas Gerais.
14 de março de 2003 — 02:47`,"A família Vasconcelos — Antônio, Lúcia, o filho Tiago e a pequena Clara — não é vista há três dias.",`A Cabo Inês Duarte, da Polícia Militar, foi enviada para verificar a residência.

Esta é a gravação da câmera corporal dela.`],t)}Nn.has("auto")&&id();const $1=new Hf,J1=new Date(2003,2,14,2,47,13).getTime();let Yo=0,pl=0;function sd(){requestAnimationFrame(sd);let r=Math.min($1.getDelta(),.05);Nn.has("fixeddt")&&(r=1/30),r*=Number(Nn.get("speed")||1),U.started&&!U.paused&&!U.noteOpen?ty(r):U.started||Q1(r),U.started&&ey(r)}function Q1(r){U.time+=r}function ty(r){U.time+=r,U.dt=r;const t=U.player,e=U.level,n=U.audio,i=U.post.u;t.update(r),U.story.update(r);for(const p of U.creatures)p.update(r);e.update(r,U.time),U.flashT>0&&(U.flashT-=r);for(const p of e.reveal)p.userData.revealT>0?(p.userData.revealT-=r,p.visible=p.userData.revealT>0):p.visible=!1;let s=99;for(const p of U.creatures)p.active&&p.state!=="idle"&&p.state!=="hidden"&&p.state!=="die"&&(s=Math.min(s,p.pos.distanceTo(t.pos)));const o=qi.clamp(1-s/8,0,1);U.combat=U.creatures.some(p=>p.active&&["chase","hunt","drop","emerge","flee"].includes(p.state)&&p.pos.distanceTo(t.pos)<14)||U.mother.state==="ceiling"&&U.mother.active,U.flickerT=Math.max(0,U.flickerT-r),U.flicker=o>.35&&Math.random()<o*r*3?.25:Math.max(0,U.flicker-r),U.flickerT>0&&(U.flicker=.2),U.scareFx>.5&&(U.flicker=.3);const a=U.player;U.scareExposure&&(a.flashlight.intensity*=.5);const l=Math.min(1,U.tensionBase+o*.6);t.fear+=(Math.max(l,(100-t.health)/100)*.9-t.fear)*Math.min(1,r*1.5);const c=e.room(t.pos.x,t.pos.z);n.update(r,{inside:e.insideAt(t.pos.x,t.pos.z),tension:l,fear:t.fear,exertion:1-t.stamina,lights:U.lightsOn,basement:c==="porao"||c==="escada"}),n.setListener(nn),dl-=r,dl<=0&&!["porao","escada"].includes(c)&&(dl=25+Math.random()*30,U.lightning());const h=e.props.lightning;if(na>0){na-=r;const p=na;h.intensity=(p>.45||p>.2&&p<.3?6:0)*(Math.random()*.5+.5)}else h.intensity=0;const u=e.insideAt(t.pos.x,t.pos.z);let f=U.lightsOn&&u>.5?.95:t.flashlightOn?1.3:2.1;const d=t.bounce.intensity>0?t.bounce.position.distanceTo(nn.position):9;t.flashlightOn&&(f*=qi.lerp(U.lightsOn&&u>.5?.6:.45,1,qi.clamp((d-.5)/2.5,0,1))),U.exposure+=(f-U.exposure)*Math.min(1,r*(U.exposure>f?4:1.1)),U.flashT>0&&(U.exposure=.45),U.scareExposure&&(U.exposure=U.scareExposure),i.exposure.value=U.exposure*U.brightness,i.grain.value=.045+(U.exposure-.9)*.05,i.flash.value=Math.max(0,U.flashT/.18)*.85,i.damage.value=t.damageFx,i.interference.value=U.scareExposure?U.scareFx:Math.max(o*o*.6,t.dead?.8:0,U.flickerT>0?.4:0,U.scareFx*.9),U.post.after.uniforms.damp.value=.38+U.scareFx*.5,We.environmentIntensity=u>.5?U.lightsOn?.35:.12:.5,i.saturation.value=U.lightsOn?.8:.6,$f.intensity=u>.5?.12:.3,We.fog.density=c==="porao"?.07:u>.5?.045:.035,zr.uniforms.t.value=U.time,zr.uniforms.on.value=t.flashlightOn&&!U.lightsOn?1:.25,zr.uniforms.lp.value.copy(t.flashlight.position),zr.uniforms.ld.value.copy(t.lightDir);const m=nn.position;for(let p=0;p<kc;p++){const x=p*3;cn[x]-m.x>5?cn[x]-=10:cn[x]-m.x<-5&&(cn[x]+=10),cn[x+2]-m.z>5?cn[x+2]-=10:cn[x+2]-m.z<-5&&(cn[x+2]+=10),cn[x+1]-m.y>2?cn[x+1]-=3.5:cn[x+1]-m.y<-1.5&&(cn[x+1]+=3.5),cn[x+1]-=r*.02}Bc.attributes.position.needsUpdate=!0;for(let p=Qs.length-1;p>=0;p--){const x=Qs[p];x.life-=r,x.v.y-=9.8*(x.g??1)*r,x.s.position.addScaledVector(x.v,r),x.s.material.opacity=Math.min(x.s.material.opacity,Math.max(0,x.life*2)),x.life<=0&&(We.remove(x.s),x.s.material.dispose(),Qs.splice(p,1))}if(e.props.mirror.visible=c==="banheiro"||c==="casal"&&!1,wi=null,!t.dead&&!t.frozen){let p=0;for(const x of e.interact){if(x.enabled===!1||x.pos.distanceTo(nn.position)>(x.range||1.9))continue;const C=x.pos.clone().sub(nn.position).normalize().dot(nn.userData.fwd);C<.86||C<p||e.los(nn.position,x.pos)&&(p=C,wi=x)}}if(Jn){if(Jn!==wi)Jn=null;else if(ia+=r,ia>=Jn.hold){const p=Jn;Jn=null,p.use()}}me.prompt.textContent=wi?`[E] ${wi.label}`:"",me.hold.style.display=Jn?"block":"none",Jn&&(me.holdBar.style.width=ia/Jn.hold*100+"%"),me.ammo.textContent=t.reloading>0?"—":t.ammo,me.reserve.textContent="/ "+t.reserve,me.flashBar.style.width=t.flashCharge*100+"%";const _=new Date(J1+U.time*1e3),g=p=>String(p).padStart(2,"0");me.stamp.textContent=`${g(_.getDate())}/${g(_.getMonth()+1)}/${_.getFullYear()} ${g(_.getHours())}:${g(_.getMinutes())}:${g(_.getSeconds())}`,K1(r)}function ey(r){U.player.dead&&(U.post.u.blackout.value=Math.min(1,Math.max(0,(U.player.deathT-1.8)/1.2))),U.post.render(r,U.time),Nn.has("fps")&&(Yo+=r,pl++,Yo>1&&(console.log("fps",(pl/Yo).toFixed(1),Xn.info.render.calls),Yo=0,pl=0))}sd();U.lookAt=(r,t,e)=>{const n=U.player.pos,i=n.y+U.player.height;U.player.yaw=Math.atan2(-(r-n.x),-(e-n.z)),U.player.pitch=Math.atan2(t-i,Math.hypot(r-n.x,e-n.z))};
