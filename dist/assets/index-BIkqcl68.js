(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qc="170",qd=0,Rh=1,Yd=2,xf=1,_f=2,Vi=3,ji=0,Hn=1,pn=2,dn=0,dr=1,as=2,Ch=3,Ph=4,yf=5,vi=100,jd=101,Kd=102,Zd=103,$d=104,eo=200,Jd=201,Qd=202,ep=203,ql=204,Yl=205,jl=206,tp=207,Kl=208,np=209,ip=210,sp=211,rp=212,op=213,ap=214,Zl=0,$l=1,Jl=2,_r=3,Ql=4,ec=5,tc=6,nc=7,Mf=0,lp=1,cp=2,ls=0,Sf=1,bf=2,wf=3,Yc=4,hp=5,Tf=6,Ef=7,Lh="attached",up="detached",Af=300,yr=301,Mr=302,Pa=303,ic=304,ka=306,$n=1e3,ss=1001,La=1002,Jt=1003,Rf=1004,to=1005,Vn=1006,ya=1007,Wi=1008,Ai=1009,Cf=1010,Pf=1011,go=1012,jc=1013,Is=1014,yi=1015,Gn=1016,Kc=1017,Zc=1018,Ns=1020,Lf=35902,Df=1021,If=1022,Kn=1023,Nf=1024,Uf=1025,pr=1026,Us=1027,$c=1028,Jc=1029,Of=1030,Qc=1031,eh=1033,Ma=33776,Sa=33777,ba=33778,wa=33779,sc=35840,rc=35841,oc=35842,ac=35843,lc=36196,cc=37492,hc=37496,uc=37808,fc=37809,dc=37810,pc=37811,mc=37812,gc=37813,vc=37814,xc=37815,_c=37816,yc=37817,Mc=37818,Sc=37819,bc=37820,wc=37821,Ta=36492,Tc=36494,Ec=36495,Ff=36283,Ac=36284,Rc=36285,Cc=36286,vo=2300,xo=2301,Qa=2302,Dh=2400,Ih=2401,Nh=2402,fp=2500,dp=0,kf=1,Pc=2,pp=3200,mp=3201,th=0,gp=1,Gi="",Ft="srgb",Fn="srgb-linear",Ba="linear",Pt="srgb",Ws=7680,Uh=519,vp=512,xp=513,_p=514,Bf=515,yp=516,Mp=517,Sp=518,bp=519,Lc=35044,Oh="300 es",Xi=2e3,Da=2001;class Lr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fh=1234567;const oo=Math.PI/180,Sr=180/Math.PI;function ci(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tn[r&255]+Tn[r>>8&255]+Tn[r>>16&255]+Tn[r>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]).toLowerCase()}function rn(r,e,t){return Math.max(e,Math.min(t,r))}function nh(r,e){return(r%e+e)%e}function wp(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Tp(r,e,t){return r!==e?(t-r)/(e-r):0}function ao(r,e,t){return(1-t)*r+t*e}function Ep(r,e,t,n){return ao(r,e,1-Math.exp(-t*n))}function Ap(r,e=1){return e-Math.abs(nh(r,e*2)-e)}function Rp(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Cp(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Pp(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Lp(r,e){return r+Math.random()*(e-r)}function Dp(r){return r*(.5-Math.random())}function Ip(r){r!==void 0&&(Fh=r);let e=Fh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Np(r){return r*oo}function Up(r){return r*Sr}function Op(r){return(r&r-1)===0&&r!==0}function Fp(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function kp(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Bp(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":r.set(a*h,l*u,l*f,a*c);break;case"YZY":r.set(l*f,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*f,a*h,a*c);break;case"XZX":r.set(a*h,l*m,l*d,a*c);break;case"YXY":r.set(l*d,a*h,l*m,a*c);break;case"ZYZ":r.set(l*m,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function xi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Lt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ai={DEG2RAD:oo,RAD2DEG:Sr,generateUUID:ci,clamp:rn,euclideanModulo:nh,mapLinear:wp,inverseLerp:Tp,lerp:ao,damp:Ep,pingpong:Ap,smoothstep:Rp,smootherstep:Cp,randInt:Pp,randFloat:Lp,randFloatSpread:Dp,seededRandom:Ip,degToRad:Np,radToDeg:Up,isPowerOfTwo:Op,ceilPowerOfTwo:Fp,floorPowerOfTwo:kp,setQuaternionFromProperEuler:Bp,normalize:Lt,denormalize:xi};class se{constructor(e=0,t=0){se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,t,n,i,s,o,a,l,c){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],v=i[0],g=i[3],p=i[6],_=i[1],y=i[4],x=i[7],A=i[2],w=i[5],E=i[8];return s[0]=o*v+a*_+l*A,s[3]=o*g+a*y+l*w,s[6]=o*p+a*x+l*E,s[1]=c*v+h*_+u*A,s[4]=c*g+h*y+u*w,s[7]=c*p+h*x+u*E,s[2]=f*v+d*_+m*A,s[5]=f*g+d*y+m*w,s[8]=f*p+d*x+m*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,m=t*u+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=u*v,e[1]=(i*c-h*n)*v,e[2]=(a*n-i*o)*v,e[3]=f*v,e[4]=(h*t-i*l)*v,e[5]=(i*s-a*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(el.makeScale(e,t)),this}rotate(e){return this.premultiply(el.makeRotation(-e)),this}translate(e,t){return this.premultiply(el.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const el=new ht;function zf(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function _o(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function zp(){const r=_o("canvas");return r.style.display="block",r}const kh={};function no(r){r in kh||(kh[r]=!0,console.warn(r))}function Vp(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Hp(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Gp(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const _t={enabled:!0,workingColorSpace:Fn,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Pt&&(r.r=qi(r.r),r.g=qi(r.g),r.b=qi(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Pt&&(r.r=mr(r.r),r.g=mr(r.g),r.b=mr(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Gi?Ba:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function qi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function mr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Bh=[.64,.33,.3,.6,.15,.06],zh=[.2126,.7152,.0722],Vh=[.3127,.329],Hh=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gh=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);_t.define({[Fn]:{primaries:Bh,whitePoint:Vh,transfer:Ba,toXYZ:Hh,fromXYZ:Gh,luminanceCoefficients:zh,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:Bh,whitePoint:Vh,transfer:Pt,toXYZ:Hh,fromXYZ:Gh,luminanceCoefficients:zh,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}});let Xs;class Wp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xs===void 0&&(Xs=_o("canvas")),Xs.width=e.width,Xs.height=e.height;const n=Xs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Xs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_o("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=qi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qi(t[n]/255)*255):t[n]=qi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xp=0;class Vf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=ci(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(tl(i[o].image)):s.push(tl(i[o]))}else s=tl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function tl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Wp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qp=0;class an extends Lr{constructor(e=an.DEFAULT_IMAGE,t=an.DEFAULT_MAPPING,n=ss,i=ss,s=Vn,o=Wi,a=Kn,l=Ai,c=an.DEFAULT_ANISOTROPY,h=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=ci(),this.name="",this.source=new Vf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Af)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $n:e.x=e.x-Math.floor(e.x);break;case ss:e.x=e.x<0?0:1;break;case La:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $n:e.y=e.y-Math.floor(e.y);break;case ss:e.y=e.y<0?0:1;break;case La:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Af;an.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,n=0,i=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(d+1)/2,A=(p+1)/2,w=(h+f)/4,E=(u+v)/4,L=(m+g)/4;return y>x&&y>A?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=w/n,s=E/n):x>A?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=w/i,s=L/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=E/s,i=L/s),this.set(n,i,s,t),this}let _=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(u-v)/_,this.z=(f-h)/_,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yp extends Lr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new an(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Vf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends Yp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Hf extends an{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jp extends an{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Si{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=s[o+0],d=s[o+1],m=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=v;return}if(u!==v||l!==f||c!==d||h!==m){let g=1-a;const p=l*f+c*d+h*m+u*v,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const A=Math.sqrt(y),w=Math.atan2(A,p*_);g=Math.sin(g*w)/A,a=Math.sin(a*w)/A}const x=a*_;if(l=l*g+f*x,c=c*g+d*x,h=h*g+m*x,u=u*g+v*x,g===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],f=s[o+1],d=s[o+2],m=s[o+3];return e[t]=a*m+h*u+l*d-c*f,e[t+1]=l*m+h*f+c*u-a*d,e[t+2]=c*m+h*d+a*f-l*u,e[t+3]=h*m-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),f=l(n/2),d=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return nl.copy(this).projectOnVector(e),this.sub(nl)}reflect(e){return this.sub(nl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nl=new D,Wh=new Si;class ui{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,di):di.fromBufferAttribute(s,o),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Do.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Do.copy(n.boundingBox)),Do.applyMatrix4(e.matrixWorld),this.union(Do)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Br),Io.subVectors(this.max,Br),qs.subVectors(e.a,Br),Ys.subVectors(e.b,Br),js.subVectors(e.c,Br),Zi.subVectors(Ys,qs),$i.subVectors(js,Ys),gs.subVectors(qs,js);let t=[0,-Zi.z,Zi.y,0,-$i.z,$i.y,0,-gs.z,gs.y,Zi.z,0,-Zi.x,$i.z,0,-$i.x,gs.z,0,-gs.x,-Zi.y,Zi.x,0,-$i.y,$i.x,0,-gs.y,gs.x,0];return!il(t,qs,Ys,js,Io)||(t=[1,0,0,0,1,0,0,0,1],!il(t,qs,Ys,js,Io))?!1:(No.crossVectors(Zi,$i),t=[No.x,No.y,No.z],il(t,qs,Ys,js,Io))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ni=[new D,new D,new D,new D,new D,new D,new D,new D],di=new D,Do=new ui,qs=new D,Ys=new D,js=new D,Zi=new D,$i=new D,gs=new D,Br=new D,Io=new D,No=new D,vs=new D;function il(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){vs.fromArray(r,s);const a=i.x*Math.abs(vs.x)+i.y*Math.abs(vs.y)+i.z*Math.abs(vs.z),l=e.dot(vs),c=t.dot(vs),h=n.dot(vs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Kp=new ui,zr=new D,sl=new D;class bi{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Kp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zr.subVectors(e,this.center);const t=zr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(zr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zr.copy(e.center).add(sl)),this.expandByPoint(zr.copy(e.center).sub(sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ui=new D,rl=new D,Uo=new D,Ji=new D,ol=new D,Oo=new D,al=new D;class Dr{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,t),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){rl.copy(e).add(t).multiplyScalar(.5),Uo.copy(t).sub(e).normalize(),Ji.copy(this.origin).sub(rl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Uo),a=Ji.dot(this.direction),l=-Ji.dot(Uo),c=Ji.lengthSq(),h=Math.abs(1-o*o);let u,f,d,m;if(h>0)if(u=o*l-a,f=o*a-l,m=s*h,u>=0)if(f>=-m)if(f<=m){const v=1/h;u*=v,f*=v,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(rl).addScaledVector(Uo,f),d}intersectSphere(e,t){Ui.subVectors(e.center,this.origin);const n=Ui.dot(this.direction),i=Ui.dot(Ui)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,n,i,s){ol.subVectors(t,e),Oo.subVectors(n,e),al.crossVectors(ol,Oo);let o=this.direction.dot(al),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ji.subVectors(this.origin,e);const l=a*this.direction.dot(Oo.crossVectors(Ji,Oo));if(l<0)return null;const c=a*this.direction.dot(ol.cross(Ji));if(c<0||l+c>o)return null;const h=-a*Ji.dot(al);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,t,n,i,s,o,a,l,c,h,u,f,d,m,v,g){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,h,u,f,d,m,v,g)}set(e,t,n,i,s,o,a,l,c,h,u,f,d,m,v,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ks.setFromMatrixColumn(e,0).length(),s=1/Ks.setFromMatrixColumn(e,1).length(),o=1/Ks.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=o*h,d=o*u,m=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+m*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,m=c*h,v=c*u;t[0]=f+v*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-m,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,m=c*h,v=c*u;t[0]=f-v*a,t[4]=-o*u,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,d=o*u,m=a*h,v=a*u;t[0]=l*h,t[4]=m*c-d,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,m=a*l,v=a*c;t[0]=l*h,t[4]=v-f*u,t[8]=m*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+m,t[10]=f-v*u}else if(e.order==="XZY"){const f=o*l,d=o*c,m=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=o*h,t[9]=d*u-m,t[2]=m*u-d,t[6]=a*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zp,e,$p)}lookAt(e,t,n){const i=this.elements;return qn.subVectors(e,t),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),Qi.crossVectors(n,qn),Qi.lengthSq()===0&&(Math.abs(n.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),Qi.crossVectors(n,qn)),Qi.normalize(),Fo.crossVectors(qn,Qi),i[0]=Qi.x,i[4]=Fo.x,i[8]=qn.x,i[1]=Qi.y,i[5]=Fo.y,i[9]=qn.y,i[2]=Qi.z,i[6]=Fo.z,i[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],v=n[6],g=n[10],p=n[14],_=n[3],y=n[7],x=n[11],A=n[15],w=i[0],E=i[4],L=i[8],M=i[12],S=i[1],C=i[5],F=i[9],B=i[13],O=i[2],z=i[6],G=i[10],Y=i[14],W=i[3],Q=i[7],ce=i[11],ve=i[15];return s[0]=o*w+a*S+l*O+c*W,s[4]=o*E+a*C+l*z+c*Q,s[8]=o*L+a*F+l*G+c*ce,s[12]=o*M+a*B+l*Y+c*ve,s[1]=h*w+u*S+f*O+d*W,s[5]=h*E+u*C+f*z+d*Q,s[9]=h*L+u*F+f*G+d*ce,s[13]=h*M+u*B+f*Y+d*ve,s[2]=m*w+v*S+g*O+p*W,s[6]=m*E+v*C+g*z+p*Q,s[10]=m*L+v*F+g*G+p*ce,s[14]=m*M+v*B+g*Y+p*ve,s[3]=_*w+y*S+x*O+A*W,s[7]=_*E+y*C+x*z+A*Q,s[11]=_*L+y*F+x*G+A*ce,s[15]=_*M+y*B+x*Y+A*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],m=e[3],v=e[7],g=e[11],p=e[15];return m*(+s*l*u-i*c*u-s*a*f+n*c*f+i*a*d-n*l*d)+v*(+t*l*d-t*c*f+s*o*f-i*o*d+i*c*h-s*l*h)+g*(+t*c*u-t*a*d-s*o*u+n*o*d+s*a*h-n*c*h)+p*(-i*a*h-t*l*u+t*a*f+i*o*u-n*o*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],m=e[12],v=e[13],g=e[14],p=e[15],_=u*g*c-v*f*c+v*l*d-a*g*d-u*l*p+a*f*p,y=m*f*c-h*g*c-m*l*d+o*g*d+h*l*p-o*f*p,x=h*v*c-m*u*c+m*a*d-o*v*d-h*a*p+o*u*p,A=m*u*l-h*v*l-m*a*f+o*v*f+h*a*g-o*u*g,w=t*_+n*y+i*x+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=_*E,e[1]=(v*f*s-u*g*s-v*i*d+n*g*d+u*i*p-n*f*p)*E,e[2]=(a*g*s-v*l*s+v*i*c-n*g*c-a*i*p+n*l*p)*E,e[3]=(u*l*s-a*f*s-u*i*c+n*f*c+a*i*d-n*l*d)*E,e[4]=y*E,e[5]=(h*g*s-m*f*s+m*i*d-t*g*d-h*i*p+t*f*p)*E,e[6]=(m*l*s-o*g*s-m*i*c+t*g*c+o*i*p-t*l*p)*E,e[7]=(o*f*s-h*l*s+h*i*c-t*f*c-o*i*d+t*l*d)*E,e[8]=x*E,e[9]=(m*u*s-h*v*s-m*n*d+t*v*d+h*n*p-t*u*p)*E,e[10]=(o*v*s-m*a*s+m*n*c-t*v*c-o*n*p+t*a*p)*E,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*d-t*a*d)*E,e[12]=A*E,e[13]=(h*v*i-m*u*i+m*n*f-t*v*f-h*n*g+t*u*g)*E,e[14]=(m*a*i-o*v*i-m*n*l+t*v*l+o*n*g-t*a*g)*E,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*f+t*a*f)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,m=s*u,v=o*h,g=o*u,p=a*u,_=l*c,y=l*h,x=l*u,A=n.x,w=n.y,E=n.z;return i[0]=(1-(v+p))*A,i[1]=(d+x)*A,i[2]=(m-y)*A,i[3]=0,i[4]=(d-x)*w,i[5]=(1-(f+p))*w,i[6]=(g+_)*w,i[7]=0,i[8]=(m+y)*E,i[9]=(g-_)*E,i[10]=(1-(f+v))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ks.set(i[0],i[1],i[2]).length();const o=Ks.set(i[4],i[5],i[6]).length(),a=Ks.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],pi.copy(this);const c=1/s,h=1/o,u=1/a;return pi.elements[0]*=c,pi.elements[1]*=c,pi.elements[2]*=c,pi.elements[4]*=h,pi.elements[5]*=h,pi.elements[6]*=h,pi.elements[8]*=u,pi.elements[9]*=u,pi.elements[10]*=u,t.setFromRotationMatrix(pi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Xi){const l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let d,m;if(a===Xi)d=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===Da)d=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Xi){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-s),f=(t+e)*c,d=(n+i)*h;let m,v;if(a===Xi)m=(o+s)*u,v=-2*u;else if(a===Da)m=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ks=new D,pi=new Qe,Zp=new D(0,0,0),$p=new D(1,1,1),Qi=new D,Fo=new D,qn=new D,Xh=new Qe,qh=new Si;class Ri{constructor(e=0,t=0,n=0,i=Ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(rn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qh.setFromEuler(this),this.setFromQuaternion(qh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ri.DEFAULT_ORDER="XYZ";class ih{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Jp=0;const Yh=new D,Zs=new Si,Oi=new Qe,ko=new D,Vr=new D,Qp=new D,e0=new Si,jh=new D(1,0,0),Kh=new D(0,1,0),Zh=new D(0,0,1),$h={type:"added"},t0={type:"removed"},$s={type:"childadded",child:null},ll={type:"childremoved",child:null};class Ot extends Lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new D,t=new Ri,n=new Si,i=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Qe},normalMatrix:{value:new ht}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ih,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(jh,e)}rotateY(e){return this.rotateOnAxis(Kh,e)}rotateZ(e){return this.rotateOnAxis(Zh,e)}translateOnAxis(e,t){return Yh.copy(e).applyQuaternion(this.quaternion),this.position.add(Yh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jh,e)}translateY(e){return this.translateOnAxis(Kh,e)}translateZ(e){return this.translateOnAxis(Zh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ko.copy(e):ko.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Vr,ko,this.up):Oi.lookAt(ko,Vr,this.up),this.quaternion.setFromRotationMatrix(Oi),i&&(Oi.extractRotation(i.matrixWorld),Zs.setFromRotationMatrix(Oi),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($h),$s.child=e,this.dispatchEvent($s),$s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(t0),ll.child=e,this.dispatchEvent(ll),ll.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($h),$s.child=e,this.dispatchEvent($s),$s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,e,Qp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,e0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ot.DEFAULT_UP=new D(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new D,Fi=new D,cl=new D,ki=new D,Js=new D,Qs=new D,Jh=new D,hl=new D,ul=new D,fl=new D,dl=new Tt,pl=new Tt,ml=new Tt;class li{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),mi.subVectors(e,t),i.cross(mi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){mi.subVectors(i,t),Fi.subVectors(n,t),cl.subVectors(e,t);const o=mi.dot(mi),a=mi.dot(Fi),l=mi.dot(cl),c=Fi.dot(Fi),h=Fi.dot(cl),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,m=(o*h-a*l)*f;return s.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ki.x),l.addScaledVector(o,ki.y),l.addScaledVector(a,ki.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return dl.setScalar(0),pl.setScalar(0),ml.setScalar(0),dl.fromBufferAttribute(e,t),pl.fromBufferAttribute(e,n),ml.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(dl,s.x),o.addScaledVector(pl,s.y),o.addScaledVector(ml,s.z),o}static isFrontFacing(e,t,n,i){return mi.subVectors(n,t),Fi.subVectors(e,t),mi.cross(Fi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),mi.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return li.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return li.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Js.subVectors(i,n),Qs.subVectors(s,n),hl.subVectors(e,n);const l=Js.dot(hl),c=Qs.dot(hl);if(l<=0&&c<=0)return t.copy(n);ul.subVectors(e,i);const h=Js.dot(ul),u=Qs.dot(ul);if(h>=0&&u<=h)return t.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Js,o);fl.subVectors(e,s);const d=Js.dot(fl),m=Qs.dot(fl);if(m>=0&&d<=m)return t.copy(s);const v=d*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Qs,a);const g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return Jh.subVectors(s,i),a=(u-h)/(u-h+(d-m)),t.copy(i).addScaledVector(Jh,a);const p=1/(g+v+f);return o=v*p,a=f*p,t.copy(n).addScaledVector(Js,o).addScaledVector(Qs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},Bo={h:0,s:0,l:0};function gl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=_t.workingColorSpace){if(e=nh(e,1),t=rn(t,0,1),n=rn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=gl(o,s,e+1/3),this.g=gl(o,s,e),this.b=gl(o,s,e-1/3)}return _t.toWorkingColorSpace(this,i),this}setStyle(e,t=Ft){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const n=Gf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return _t.fromWorkingColorSpace(En.copy(this),e),Math.round(rn(En.r*255,0,255))*65536+Math.round(rn(En.g*255,0,255))*256+Math.round(rn(En.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(En.copy(this),t);const n=En.r,i=En.g,s=En.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=Ft){_t.fromWorkingColorSpace(En.copy(this),e);const t=En.r,n=En.g,i=En.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(es),this.setHSL(es.h+e,es.s+t,es.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(es),e.getHSL(Bo);const n=ao(es.h,Bo.h,t),i=ao(es.s,Bo.s,t),s=ao(es.l,Bo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new Xe;Xe.NAMES=Gf;let n0=0;class hi extends Lr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=ci(),this.name="",this.blending=dr,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ql,this.blendDst=Yl,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(n.blending=this.blending),this.side!==ji&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ql&&(n.blendSrc=this.blendSrc),this.blendDst!==Yl&&(n.blendDst=this.blendDst),this.blendEquation!==vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_r&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Mi extends hi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=Mf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new D,zo=new se;class Wt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Lc,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zo.fromBufferAttribute(this,t),zo.applyMatrix3(e),this.setXY(t,zo.x,zo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lc&&(e.usage=this.usage),e}}class Wf extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Xf extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class xt extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let i0=0;const ni=new Qe,vl=new Ot,er=new D,Yn=new ui,Hr=new ui,fn=new D;class Ht extends Lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zf(e)?Xf:Wf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ht().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,n){return ni.makeTranslation(e,t,n),this.applyMatrix4(ni),this}scale(e,t,n){return ni.makeScale(e,t,n),this.applyMatrix4(ni),this}lookAt(e){return vl.lookAt(e),vl.updateMatrix(),this.applyMatrix4(vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xt(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Yn.setFromBufferAttribute(s),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Hr.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(Yn.min,Hr.min),Yn.expandByPoint(fn),fn.addVectors(Yn.max,Hr.max),Yn.expandByPoint(fn)):(Yn.expandByPoint(Hr.min),Yn.expandByPoint(Hr.max))}Yn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)fn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(fn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)fn.fromBufferAttribute(a,c),l&&(er.fromBufferAttribute(e,c),fn.add(er)),i=Math.max(i,n.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new D,l[L]=new D;const c=new D,h=new D,u=new D,f=new se,d=new se,m=new se,v=new D,g=new D;function p(L,M,S){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,S),f.fromBufferAttribute(s,L),d.fromBufferAttribute(s,M),m.fromBufferAttribute(s,S),h.sub(c),u.sub(c),d.sub(f),m.sub(f);const C=1/(d.x*m.y-m.x*d.y);isFinite(C)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(C),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(C),a[L].add(v),a[M].add(v),a[S].add(v),l[L].add(g),l[M].add(g),l[S].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let L=0,M=_.length;L<M;++L){const S=_[L],C=S.start,F=S.count;for(let B=C,O=C+F;B<O;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const y=new D,x=new D,A=new D,w=new D;function E(L){A.fromBufferAttribute(i,L),w.copy(A);const M=a[L];y.copy(M),y.sub(A.multiplyScalar(A.dot(M))).normalize(),x.crossVectors(w,M);const C=x.dot(l[L])<0?-1:1;o.setXYZW(L,y.x,y.y,y.z,C)}for(let L=0,M=_.length;L<M;++L){const S=_[L],C=S.start,F=S.count;for(let B=C,O=C+F;B<O;B+=3)E(e.getX(B+0)),E(e.getX(B+1)),E(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new D,s=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){const m=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,m=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*h;for(let p=0;p<h;p++)f[m++]=c[d++]}return new Wt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qh=new Qe,xs=new Dr,Vo=new bi,eu=new D,Ho=new D,Go=new D,Wo=new D,xl=new D,Xo=new D,tu=new D,qo=new D;class ie extends Ot{constructor(e=new Ht,t=new Mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Xo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(xl.fromBufferAttribute(u,e),o?Xo.addScaledVector(xl,h):Xo.addScaledVector(xl.sub(t),h))}t.add(Xo)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vo.copy(n.boundingSphere),Vo.applyMatrix4(s),xs.copy(e.ray).recast(e.near),!(Vo.containsPoint(xs.origin)===!1&&(xs.intersectSphere(Vo,eu)===null||xs.origin.distanceToSquared(eu)>(e.far-e.near)**2))&&(Qh.copy(s).invert(),xs.copy(e.ray).applyMatrix4(Qh),!(n.boundingBox!==null&&xs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xs)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=f.length;m<v;m++){const g=f[m],p=o[g.materialIndex],_=Math.max(g.start,d.start),y=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let x=_,A=y;x<A;x+=3){const w=a.getX(x),E=a.getX(x+1),L=a.getX(x+2);i=Yo(this,p,e,n,c,h,u,w,E,L),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){const _=a.getX(g),y=a.getX(g+1),x=a.getX(g+2);i=Yo(this,o,e,n,c,h,u,_,y,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=f.length;m<v;m++){const g=f[m],p=o[g.materialIndex],_=Math.max(g.start,d.start),y=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let x=_,A=y;x<A;x+=3){const w=x,E=x+1,L=x+2;i=Yo(this,p,e,n,c,h,u,w,E,L),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){const _=g,y=g+1,x=g+2;i=Yo(this,o,e,n,c,h,u,_,y,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function s0(r,e,t,n,i,s,o,a){let l;if(e.side===Hn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===ji,a),l===null)return null;qo.copy(a),qo.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(qo);return c<t.near||c>t.far?null:{distance:c,point:qo.clone(),object:r}}function Yo(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Ho),r.getVertexPosition(l,Go),r.getVertexPosition(c,Wo);const h=s0(r,e,t,n,Ho,Go,Wo,tu);if(h){const u=new D;li.getBarycoord(tu,Ho,Go,Wo,u),i&&(h.uv=li.getInterpolatedAttribute(i,a,l,c,u,new se)),s&&(h.uv1=li.getInterpolatedAttribute(s,a,l,c,u,new se)),o&&(h.normal=li.getInterpolatedAttribute(o,a,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new D,materialIndex:0};li.getNormal(Ho,Go,Wo,f.normal),h.face=f,h.barycoord=u}return h}class Vt extends Ht{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(u,2));function m(v,g,p,_,y,x,A,w,E,L,M){const S=x/E,C=A/L,F=x/2,B=A/2,O=w/2,z=E+1,G=L+1;let Y=0,W=0;const Q=new D;for(let ce=0;ce<G;ce++){const ve=ce*C-B;for(let Oe=0;Oe<z;Oe++){const Je=Oe*S-F;Q[v]=Je*_,Q[g]=ve*y,Q[p]=O,c.push(Q.x,Q.y,Q.z),Q[v]=0,Q[g]=0,Q[p]=w>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(Oe/E),u.push(1-ce/L),Y+=1}}for(let ce=0;ce<L;ce++)for(let ve=0;ve<E;ve++){const Oe=f+ve+z*ce,Je=f+ve+z*(ce+1),J=f+(ve+1)+z*(ce+1),fe=f+(ve+1)+z*ce;l.push(Oe,Je,fe),l.push(Je,J,fe),W+=6}a.addGroup(d,W,M),d+=W,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function br(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Nn(r){const e={};for(let t=0;t<r.length;t++){const n=br(r[t]);for(const i in n)e[i]=n[i]}return e}function r0(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function qf(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const jn={clone:br,merge:Nn};var o0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bt extends hi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o0,this.fragmentShader=a0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=br(e.uniforms),this.uniformsGroups=r0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Yf extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ts=new D,nu=new se,iu=new se;class An extends Yf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(oo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ts.x,ts.y).multiplyScalar(-e/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ts.x,ts.y).multiplyScalar(-e/ts.z)}getViewSize(e,t){return this.getViewBounds(e,nu,iu),t.subVectors(iu,nu)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(oo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const tr=-90,nr=1;class l0 extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new An(tr,nr,e,t);i.layers=this.layers,this.add(i);const s=new An(tr,nr,e,t);s.layers=this.layers,this.add(s);const o=new An(tr,nr,e,t);o.layers=this.layers,this.add(o);const a=new An(tr,nr,e,t);a.layers=this.layers,this.add(a);const l=new An(tr,nr,e,t);l.layers=this.layers,this.add(l);const c=new An(tr,nr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Xi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Da)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class jf extends an{constructor(e,t,n,i,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:yr,super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class c0 extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new jf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Vt(5,5,5),s=new Bt({name:"CubemapFromEquirect",uniforms:br(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Hn,blending:dn});s.uniforms.tEquirect.value=t;const o=new ie(i,s),a=t.minFilter;return t.minFilter===Wi&&(t.minFilter=Vn),new l0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const _l=new D,h0=new D,u0=new ht;class is{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=_l.subVectors(n,t).cross(h0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_l),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||u0.getNormalMatrix(e),i=this.coplanarPoint(_l).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _s=new bi,jo=new D;class sh{constructor(e=new is,t=new is,n=new is,i=new is,s=new is,o=new is){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xi){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],m=i[9],v=i[10],g=i[11],p=i[12],_=i[13],y=i[14],x=i[15];if(n[0].setComponents(l-s,f-c,g-d,x-p).normalize(),n[1].setComponents(l+s,f+c,g+d,x+p).normalize(),n[2].setComponents(l+o,f+h,g+m,x+_).normalize(),n[3].setComponents(l-o,f-h,g-m,x-_).normalize(),n[4].setComponents(l-a,f-u,g-v,x-y).normalize(),t===Xi)n[5].setComponents(l+a,f+u,g+v,x+y).normalize();else if(t===Da)n[5].setComponents(a,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){return _s.center.set(0,0,0),_s.radius=.7071067811865476,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(jo.x=i.normal.x>0?e.max.x:e.min.x,jo.y=i.normal.y>0?e.max.y:e.min.y,jo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(jo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kf(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function f0(r){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){const m=u[f],v=u[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){const v=u[d];r.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class Zn extends Ht{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,f=t/l,d=[],m=[],v=[],g=[];for(let p=0;p<h;p++){const _=p*f-o;for(let y=0;y<c;y++){const x=y*u-s;m.push(x,-_,0),v.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){const y=_+c*p,x=_+c*(p+1),A=_+1+c*(p+1),w=_+1+c*p;d.push(y,x,w),d.push(x,A,w)}this.setIndex(d),this.setAttribute("position",new xt(m,3)),this.setAttribute("normal",new xt(v,3)),this.setAttribute("uv",new xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zn(e.width,e.height,e.widthSegments,e.heightSegments)}}var d0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p0=`#ifdef USE_ALPHAHASH
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
#endif`,m0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,g0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,x0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_0=`#ifdef USE_AOMAP
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
#endif`,y0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,M0=`#ifdef USE_BATCHING
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
#endif`,S0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,b0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,w0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,E0=`#ifdef USE_IRIDESCENCE
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
#endif`,A0=`#ifdef USE_BUMPMAP
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
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,I0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,N0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,U0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,O0=`#define PI 3.141592653589793
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
} // validated`,F0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,k0=`vec3 transformedNormal = objectNormal;
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
#endif`,B0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,V0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,G0="gl_FragColor = linearToOutputTexel( gl_FragColor );",W0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,X0=`#ifdef USE_ENVMAP
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
#endif`,q0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Y0=`#ifdef USE_ENVMAP
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
#endif`,j0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,K0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,em=`#ifdef USE_GRADIENTMAP
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
}`,tm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sm=`uniform bool receiveShadow;
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
#endif`,rm=`#ifdef USE_ENVMAP
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
#endif`,om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hm=`PhysicalMaterial material;
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
#endif`,um=`struct PhysicalMaterial {
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
}`,fm=`
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
#endif`,dm=`#if defined( RE_IndirectDiffuse )
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
#endif`,pm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_m=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ym=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sm=`#if defined( USE_POINTS_UV )
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
#endif`,bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Em=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Am=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rm=`#ifdef USE_MORPHTARGETS
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
#endif`,Cm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Um=`#ifdef USE_NORMALMAP
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
#endif`,Om=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,km=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ym=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Km=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$m=`float getShadowMask() {
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
}`,Jm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qm=`#ifdef USE_SKINNING
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
#endif`,eg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tg=`#ifdef USE_SKINNING
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
#endif`,ng=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ig=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,og=`#ifdef USE_TRANSMISSION
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
#endif`,ag=`#ifdef USE_TRANSMISSION
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
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ug=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dg=`uniform sampler2D t2D;
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
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xg=`#include <common>
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
}`,_g=`#if DEPTH_PACKING == 3200
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
}`,yg=`#define DISTANCE
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
}`,Mg=`#define DISTANCE
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
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`uniform float scale;
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
}`,Tg=`uniform vec3 diffuse;
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
}`,Eg=`#include <common>
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
}`,Ag=`uniform vec3 diffuse;
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
}`,Rg=`#define LAMBERT
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
}`,Cg=`#define LAMBERT
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
}`,Pg=`#define MATCAP
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
}`,Lg=`#define MATCAP
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
}`,Dg=`#define NORMAL
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
}`,Ig=`#define NORMAL
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
}`,Ng=`#define PHONG
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
}`,Ug=`#define PHONG
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
}`,Og=`#define STANDARD
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
}`,Fg=`#define STANDARD
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
}`,kg=`#define TOON
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
}`,Bg=`#define TOON
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
}`,zg=`uniform float size;
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
}`,Vg=`uniform vec3 diffuse;
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
}`,Hg=`#include <common>
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
}`,Gg=`uniform vec3 color;
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
}`,Wg=`uniform float rotation;
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
}`,Xg=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:d0,alphahash_pars_fragment:p0,alphamap_fragment:m0,alphamap_pars_fragment:g0,alphatest_fragment:v0,alphatest_pars_fragment:x0,aomap_fragment:_0,aomap_pars_fragment:y0,batching_pars_vertex:M0,batching_vertex:S0,begin_vertex:b0,beginnormal_vertex:w0,bsdfs:T0,iridescence_fragment:E0,bumpmap_pars_fragment:A0,clipping_planes_fragment:R0,clipping_planes_pars_fragment:C0,clipping_planes_pars_vertex:P0,clipping_planes_vertex:L0,color_fragment:D0,color_pars_fragment:I0,color_pars_vertex:N0,color_vertex:U0,common:O0,cube_uv_reflection_fragment:F0,defaultnormal_vertex:k0,displacementmap_pars_vertex:B0,displacementmap_vertex:z0,emissivemap_fragment:V0,emissivemap_pars_fragment:H0,colorspace_fragment:G0,colorspace_pars_fragment:W0,envmap_fragment:X0,envmap_common_pars_fragment:q0,envmap_pars_fragment:Y0,envmap_pars_vertex:j0,envmap_physical_pars_fragment:rm,envmap_vertex:K0,fog_vertex:Z0,fog_pars_vertex:$0,fog_fragment:J0,fog_pars_fragment:Q0,gradientmap_pars_fragment:em,lightmap_pars_fragment:tm,lights_lambert_fragment:nm,lights_lambert_pars_fragment:im,lights_pars_begin:sm,lights_toon_fragment:om,lights_toon_pars_fragment:am,lights_phong_fragment:lm,lights_phong_pars_fragment:cm,lights_physical_fragment:hm,lights_physical_pars_fragment:um,lights_fragment_begin:fm,lights_fragment_maps:dm,lights_fragment_end:pm,logdepthbuf_fragment:mm,logdepthbuf_pars_fragment:gm,logdepthbuf_pars_vertex:vm,logdepthbuf_vertex:xm,map_fragment:_m,map_pars_fragment:ym,map_particle_fragment:Mm,map_particle_pars_fragment:Sm,metalnessmap_fragment:bm,metalnessmap_pars_fragment:wm,morphinstance_vertex:Tm,morphcolor_vertex:Em,morphnormal_vertex:Am,morphtarget_pars_vertex:Rm,morphtarget_vertex:Cm,normal_fragment_begin:Pm,normal_fragment_maps:Lm,normal_pars_fragment:Dm,normal_pars_vertex:Im,normal_vertex:Nm,normalmap_pars_fragment:Um,clearcoat_normal_fragment_begin:Om,clearcoat_normal_fragment_maps:Fm,clearcoat_pars_fragment:km,iridescence_pars_fragment:Bm,opaque_fragment:zm,packing:Vm,premultiplied_alpha_fragment:Hm,project_vertex:Gm,dithering_fragment:Wm,dithering_pars_fragment:Xm,roughnessmap_fragment:qm,roughnessmap_pars_fragment:Ym,shadowmap_pars_fragment:jm,shadowmap_pars_vertex:Km,shadowmap_vertex:Zm,shadowmask_pars_fragment:$m,skinbase_vertex:Jm,skinning_pars_vertex:Qm,skinning_vertex:eg,skinnormal_vertex:tg,specularmap_fragment:ng,specularmap_pars_fragment:ig,tonemapping_fragment:sg,tonemapping_pars_fragment:rg,transmission_fragment:og,transmission_pars_fragment:ag,uv_pars_fragment:lg,uv_pars_vertex:cg,uv_vertex:hg,worldpos_vertex:ug,background_vert:fg,background_frag:dg,backgroundCube_vert:pg,backgroundCube_frag:mg,cube_vert:gg,cube_frag:vg,depth_vert:xg,depth_frag:_g,distanceRGBA_vert:yg,distanceRGBA_frag:Mg,equirect_vert:Sg,equirect_frag:bg,linedashed_vert:wg,linedashed_frag:Tg,meshbasic_vert:Eg,meshbasic_frag:Ag,meshlambert_vert:Rg,meshlambert_frag:Cg,meshmatcap_vert:Pg,meshmatcap_frag:Lg,meshnormal_vert:Dg,meshnormal_frag:Ig,meshphong_vert:Ng,meshphong_frag:Ug,meshphysical_vert:Og,meshphysical_frag:Fg,meshtoon_vert:kg,meshtoon_frag:Bg,points_vert:zg,points_frag:Vg,shadow_vert:Hg,shadow_frag:Gg,sprite_vert:Wg,sprite_frag:Xg},Ae={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Ti={basic:{uniforms:Nn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Nn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Xe(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Nn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Nn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Nn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Xe(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Nn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Nn([Ae.points,Ae.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Nn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Nn([Ae.common,Ae.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Nn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Nn([Ae.sprite,Ae.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:Nn([Ae.common,Ae.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:Nn([Ae.lights,Ae.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Ti.physical={uniforms:Nn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Ko={r:0,b:0,g:0},ys=new Ri,qg=new Qe;function Yg(r,e,t,n,i,s,o){const a=new Xe(0);let l=s===!0?0:1,c,h,u=null,f=0,d=null;function m(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?t:e).get(y)),y}function v(_){let y=!1;const x=m(_);x===null?p(a,l):x&&x.isColor&&(p(x,1),y=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(_,y){const x=m(y);x&&(x.isCubeTexture||x.mapping===ka)?(h===void 0&&(h=new ie(new Vt(1,1,1),new Bt({name:"BackgroundCubeMaterial",uniforms:br(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ys.copy(y.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(qg.makeRotationFromEuler(ys)),h.material.toneMapped=_t.getTransfer(x.colorSpace)!==Pt,(u!==x||f!==x.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=r.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ie(new Zn(2,2),new Bt({name:"BackgroundMaterial",uniforms:br(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=_t.getTransfer(x.colorSpace)!==Pt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,d=r.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,y){_.getRGB(Ko,qf(r)),n.buffers.color.setClear(Ko.r,Ko.g,Ko.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:v,addToRenderList:g}}function jg(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(S,C,F,B,O){let z=!1;const G=u(B,F,C);s!==G&&(s=G,c(s.object)),z=d(S,B,F,O),z&&m(S,B,F,O),O!==null&&e.update(O,r.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,x(S,C,F,B),O!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function h(S){return r.deleteVertexArray(S)}function u(S,C,F){const B=F.wireframe===!0;let O=n[S.id];O===void 0&&(O={},n[S.id]=O);let z=O[C.id];z===void 0&&(z={},O[C.id]=z);let G=z[B];return G===void 0&&(G=f(l()),z[B]=G),G}function f(S){const C=[],F=[],B=[];for(let O=0;O<t;O++)C[O]=0,F[O]=0,B[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:F,attributeDivisors:B,object:S,attributes:{},index:null}}function d(S,C,F,B){const O=s.attributes,z=C.attributes;let G=0;const Y=F.getAttributes();for(const W in Y)if(Y[W].location>=0){const ce=O[W];let ve=z[W];if(ve===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(ve=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(ve=S.instanceColor)),ce===void 0||ce.attribute!==ve||ve&&ce.data!==ve.data)return!0;G++}return s.attributesNum!==G||s.index!==B}function m(S,C,F,B){const O={},z=C.attributes;let G=0;const Y=F.getAttributes();for(const W in Y)if(Y[W].location>=0){let ce=z[W];ce===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(ce=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(ce=S.instanceColor));const ve={};ve.attribute=ce,ce&&ce.data&&(ve.data=ce.data),O[W]=ve,G++}s.attributes=O,s.attributesNum=G,s.index=B}function v(){const S=s.newAttributes;for(let C=0,F=S.length;C<F;C++)S[C]=0}function g(S){p(S,0)}function p(S,C){const F=s.newAttributes,B=s.enabledAttributes,O=s.attributeDivisors;F[S]=1,B[S]===0&&(r.enableVertexAttribArray(S),B[S]=1),O[S]!==C&&(r.vertexAttribDivisor(S,C),O[S]=C)}function _(){const S=s.newAttributes,C=s.enabledAttributes;for(let F=0,B=C.length;F<B;F++)C[F]!==S[F]&&(r.disableVertexAttribArray(F),C[F]=0)}function y(S,C,F,B,O,z,G){G===!0?r.vertexAttribIPointer(S,C,F,O,z):r.vertexAttribPointer(S,C,F,B,O,z)}function x(S,C,F,B){v();const O=B.attributes,z=F.getAttributes(),G=C.defaultAttributeValues;for(const Y in z){const W=z[Y];if(W.location>=0){let Q=O[Y];if(Q===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor)),Q!==void 0){const ce=Q.normalized,ve=Q.itemSize,Oe=e.get(Q);if(Oe===void 0)continue;const Je=Oe.buffer,J=Oe.type,fe=Oe.bytesPerElement,Ce=J===r.INT||J===r.UNSIGNED_INT||Q.gpuType===jc;if(Q.isInterleavedBufferAttribute){const de=Q.data,De=de.stride,He=Q.offset;if(de.isInstancedInterleavedBuffer){for(let Fe=0;Fe<W.locationSize;Fe++)p(W.location+Fe,de.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Fe=0;Fe<W.locationSize;Fe++)g(W.location+Fe);r.bindBuffer(r.ARRAY_BUFFER,Je);for(let Fe=0;Fe<W.locationSize;Fe++)y(W.location+Fe,ve/W.locationSize,J,ce,De*fe,(He+ve/W.locationSize*Fe)*fe,Ce)}else{if(Q.isInstancedBufferAttribute){for(let de=0;de<W.locationSize;de++)p(W.location+de,Q.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let de=0;de<W.locationSize;de++)g(W.location+de);r.bindBuffer(r.ARRAY_BUFFER,Je);for(let de=0;de<W.locationSize;de++)y(W.location+de,ve/W.locationSize,J,ce,ve*fe,ve/W.locationSize*de*fe,Ce)}}else if(G!==void 0){const ce=G[Y];if(ce!==void 0)switch(ce.length){case 2:r.vertexAttrib2fv(W.location,ce);break;case 3:r.vertexAttrib3fv(W.location,ce);break;case 4:r.vertexAttrib4fv(W.location,ce);break;default:r.vertexAttrib1fv(W.location,ce)}}}}_()}function A(){L();for(const S in n){const C=n[S];for(const F in C){const B=C[F];for(const O in B)h(B[O].object),delete B[O];delete C[F]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;const C=n[S.id];for(const F in C){const B=C[F];for(const O in B)h(B[O].object),delete B[O];delete C[F]}delete n[S.id]}function E(S){for(const C in n){const F=n[C];if(F[S.id]===void 0)continue;const B=F[S.id];for(const O in B)h(B[O].object),delete B[O];delete F[S.id]}}function L(){M(),o=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:L,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:g,disableUnusedAttributes:_}}function Kg(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v]*f[v];t.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Zg(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==Kn&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const L=E===Gn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Ai&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==yi&&!L)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:A,maxSamples:w}}function $g(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new is,a=new ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=r.get(u);if(!i||m===null||m.length===0||s&&!g)s?h(null):c();else{const _=s?0:n,y=_*4;let x=p.clippingState||null;l.value=x,x=h(m,f,y,d);for(let A=0;A!==y;++A)x[A]=t[A];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,m){const v=u!==null?u.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const p=d+v*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,x=d;y!==v;++y,x+=4)o.copy(u[y]).applyMatrix4(_,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function Jg(r){let e=new WeakMap;function t(o,a){return a===Pa?o.mapping=yr:a===ic&&(o.mapping=Mr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Pa||a===ic)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new c0(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class za extends Yf{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const hr=4,su=[.125,.215,.35,.446,.526,.582],Ps=20,yl=new za,ru=new Xe;let Ml=null,Sl=0,bl=0,wl=!1;const As=(1+Math.sqrt(5))/2,ir=1/As,ou=[new D(-As,ir,0),new D(As,ir,0),new D(-ir,0,As),new D(ir,0,As),new D(0,As,-ir),new D(0,As,ir),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Dc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ml=this._renderer.getRenderTarget(),Sl=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ml,Sl,bl),this._renderer.xr.enabled=wl,e.scissorTest=!1,Zo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yr||e.mapping===Mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ml=this._renderer.getRenderTarget(),Sl=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:Gn,format:Kn,colorSpace:Fn,depthBuffer:!1},i=au(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=au(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qg(s)),this._blurMaterial=ev(s,e,t)}return i}_compileMaterial(e){const t=new ie(this._lodPlanes[0],e);this._renderer.compile(t,yl)}_sceneToCubeUV(e,t,n,i){const a=new An(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(ru),h.toneMapping=ls,h.autoClear=!1;const d=new Mi({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),m=new ie(new Vt,d);let v=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,v=!0):(d.color.copy(ru),v=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):_===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;Zo(i,_*y,p>2?y:0,y,y),h.setRenderTarget(i),v&&h.render(m,a),h.render(e,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===yr||e.mapping===Mr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lu());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new ie(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Zo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,yl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ou[(i-s-1)%ou.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ie(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ps-1),v=s/m,g=isFinite(s)?1+Math.floor(h*v):Ps;g>Ps&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ps}`);const p=[];let _=0;for(let E=0;E<Ps;++E){const L=E/v,M=Math.exp(-L*L/2);p.push(M),E===0?_+=M:E<g&&(_+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/_;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=m,f.mipInt.value=y-n;const x=this._sizeLods[i],A=3*x*(i>y-hr?i-y+hr:0),w=4*(this._cubeSize-x);Zo(t,A,w,3*x,2*x),l.setRenderTarget(t),l.render(u,yl)}}function Qg(r){const e=[],t=[],n=[];let i=r;const s=r-hr+1+su.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-hr?l=su[o-r+hr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,v=3,g=2,p=1,_=new Float32Array(v*m*d),y=new Float32Array(g*m*d),x=new Float32Array(p*m*d);for(let w=0;w<d;w++){const E=w%3*2/3-1,L=w>2?0:-1,M=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];_.set(M,v*m*w),y.set(f,g*m*w);const S=[w,w,w,w,w,w];x.set(S,p*m*w)}const A=new Ht;A.setAttribute("position",new Wt(_,v)),A.setAttribute("uv",new Wt(y,g)),A.setAttribute("faceIndex",new Wt(x,p)),e.push(A),i>hr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function au(r,e,t){const n=new Rn(r,e,t);return n.texture.mapping=ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function ev(r,e,t){const n=new Float32Array(Ps),i=new D(0,1,0);return new Bt({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:rh(),fragmentShader:`

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
		`,blending:dn,depthTest:!1,depthWrite:!1})}function lu(){return new Bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rh(),fragmentShader:`

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
		`,blending:dn,depthTest:!1,depthWrite:!1})}function cu(){return new Bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function rh(){return`

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
	`}function tv(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Pa||l===ic,h=l===yr||l===Mr;if(c||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Dc(r)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new Dc(r)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function nv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&no("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function iv(r,e,t,n){const i={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);for(const m in f.morphAttributes){const v=f.morphAttributes[m];for(let g=0,p=v.length;g<p;g++)e.remove(v[g])}f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const m in f)e.update(f[m],r.ARRAY_BUFFER);const d=u.morphAttributes;for(const m in d){const v=d[m];for(let g=0,p=v.length;g<p;g++)e.update(v[g],r.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,m=u.attributes.position;let v=0;if(d!==null){const _=d.array;v=d.version;for(let y=0,x=_.length;y<x;y+=3){const A=_[y+0],w=_[y+1],E=_[y+2];f.push(A,w,w,E,E,A)}}else if(m!==void 0){const _=m.array;v=m.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const A=y+0,w=y+1,E=y+2;f.push(A,w,w,E,E,A)}}else return;const g=new(zf(f)?Xf:Wf)(f,1);g.version=v;const p=s.get(u);p&&e.remove(p),s.set(u,g)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function sv(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),t.update(d,n,1)}function c(f,d,m){m!==0&&(r.drawElementsInstanced(n,d,s,f*o,m),t.update(d,n,m))}function h(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,n,1)}function u(f,d,m,v){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,v,0,m);let p=0;for(let _=0;_<m;_++)p+=d[_]*v[_];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function rv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ov(r,e,t){const n=new WeakMap,i=new Tt;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let S=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var d=S;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;m===!0&&(x=1),v===!0&&(x=2),g===!0&&(x=3);let A=a.attributes.position.count*x,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const E=new Float32Array(A*w*4*u),L=new Hf(E,A,w,u);L.type=yi,L.needsUpdate=!0;const M=x*4;for(let C=0;C<u;C++){const F=p[C],B=_[C],O=y[C],z=A*w*4*C;for(let G=0;G<F.count;G++){const Y=G*M;m===!0&&(i.fromBufferAttribute(F,G),E[z+Y+0]=i.x,E[z+Y+1]=i.y,E[z+Y+2]=i.z,E[z+Y+3]=0),v===!0&&(i.fromBufferAttribute(B,G),E[z+Y+4]=i.x,E[z+Y+5]=i.y,E[z+Y+6]=i.z,E[z+Y+7]=0),g===!0&&(i.fromBufferAttribute(O,G),E[z+Y+8]=i.x,E[z+Y+9]=i.y,E[z+Y+10]=i.z,E[z+Y+11]=O.itemSize===4?i.w:1)}}f={count:u,texture:L,size:new se(A,w)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",v),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function av(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class oh extends an{constructor(e,t,n,i,s,o,a,l,c,h=pr){if(h!==pr&&h!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===pr&&(n=Is),n===void 0&&h===Us&&(n=Ns),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Zf=new an,hu=new oh(1,1),$f=new Hf,Jf=new jp,Qf=new jf,uu=[],fu=[],du=new Float32Array(16),pu=new Float32Array(9),mu=new Float32Array(4);function Ir(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=uu[i];if(s===void 0&&(s=new Float32Array(i),uu[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function ln(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function cn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Va(r,e){let t=fu[e];t===void 0&&(t=new Int32Array(e),fu[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function lv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function cv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;r.uniform2fv(this.addr,e),cn(t,e)}}function hv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;r.uniform3fv(this.addr,e),cn(t,e)}}function uv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;r.uniform4fv(this.addr,e),cn(t,e)}}function fv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;mu.set(n),r.uniformMatrix2fv(this.addr,!1,mu),cn(t,n)}}function dv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;pu.set(n),r.uniformMatrix3fv(this.addr,!1,pu),cn(t,n)}}function pv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;du.set(n),r.uniformMatrix4fv(this.addr,!1,du),cn(t,n)}}function mv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function gv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;r.uniform2iv(this.addr,e),cn(t,e)}}function vv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;r.uniform3iv(this.addr,e),cn(t,e)}}function xv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;r.uniform4iv(this.addr,e),cn(t,e)}}function _v(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function yv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;r.uniform2uiv(this.addr,e),cn(t,e)}}function Mv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;r.uniform3uiv(this.addr,e),cn(t,e)}}function Sv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;r.uniform4uiv(this.addr,e),cn(t,e)}}function bv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(hu.compareFunction=Bf,s=hu):s=Zf,t.setTexture2D(e||s,i)}function wv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Jf,i)}function Tv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Qf,i)}function Ev(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||$f,i)}function Av(r){switch(r){case 5126:return lv;case 35664:return cv;case 35665:return hv;case 35666:return uv;case 35674:return fv;case 35675:return dv;case 35676:return pv;case 5124:case 35670:return mv;case 35667:case 35671:return gv;case 35668:case 35672:return vv;case 35669:case 35673:return xv;case 5125:return _v;case 36294:return yv;case 36295:return Mv;case 36296:return Sv;case 35678:case 36198:case 36298:case 36306:case 35682:return bv;case 35679:case 36299:case 36307:return wv;case 35680:case 36300:case 36308:case 36293:return Tv;case 36289:case 36303:case 36311:case 36292:return Ev}}function Rv(r,e){r.uniform1fv(this.addr,e)}function Cv(r,e){const t=Ir(e,this.size,2);r.uniform2fv(this.addr,t)}function Pv(r,e){const t=Ir(e,this.size,3);r.uniform3fv(this.addr,t)}function Lv(r,e){const t=Ir(e,this.size,4);r.uniform4fv(this.addr,t)}function Dv(r,e){const t=Ir(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Iv(r,e){const t=Ir(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Nv(r,e){const t=Ir(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Uv(r,e){r.uniform1iv(this.addr,e)}function Ov(r,e){r.uniform2iv(this.addr,e)}function Fv(r,e){r.uniform3iv(this.addr,e)}function kv(r,e){r.uniform4iv(this.addr,e)}function Bv(r,e){r.uniform1uiv(this.addr,e)}function zv(r,e){r.uniform2uiv(this.addr,e)}function Vv(r,e){r.uniform3uiv(this.addr,e)}function Hv(r,e){r.uniform4uiv(this.addr,e)}function Gv(r,e,t){const n=this.cache,i=e.length,s=Va(t,i);ln(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Zf,s[o])}function Wv(r,e,t){const n=this.cache,i=e.length,s=Va(t,i);ln(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Jf,s[o])}function Xv(r,e,t){const n=this.cache,i=e.length,s=Va(t,i);ln(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Qf,s[o])}function qv(r,e,t){const n=this.cache,i=e.length,s=Va(t,i);ln(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||$f,s[o])}function Yv(r){switch(r){case 5126:return Rv;case 35664:return Cv;case 35665:return Pv;case 35666:return Lv;case 35674:return Dv;case 35675:return Iv;case 35676:return Nv;case 5124:case 35670:return Uv;case 35667:case 35671:return Ov;case 35668:case 35672:return Fv;case 35669:case 35673:return kv;case 5125:return Bv;case 36294:return zv;case 36295:return Vv;case 36296:return Hv;case 35678:case 36198:case 36298:case 36306:case 35682:return Gv;case 35679:case 36299:case 36307:return Wv;case 35680:case 36300:case 36308:case 36293:return Xv;case 36289:case 36303:case 36311:case 36292:return qv}}class jv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Av(t.type)}}class Kv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Yv(t.type)}}class Zv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Tl=/(\w+)(\])?(\[|\.)?/g;function gu(r,e){r.seq.push(e),r.map[e.id]=e}function $v(r,e,t){const n=r.name,i=n.length;for(Tl.lastIndex=0;;){const s=Tl.exec(n),o=Tl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){gu(t,c===void 0?new jv(a,r,e):new Kv(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new Zv(a),gu(t,u)),t=u}}}class Ea{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);$v(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function vu(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Jv=37297;let Qv=0;function ex(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const xu=new ht;function tx(r){_t._getMatrix(xu,_t.workingColorSpace,r);const e=`mat3( ${xu.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(r)){case Ba:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function _u(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+ex(r.getShaderSource(e),o)}else return i}function nx(r,e){const t=tx(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ix(r,e){let t;switch(e){case Sf:t="Linear";break;case bf:t="Reinhard";break;case wf:t="Cineon";break;case Yc:t="ACESFilmic";break;case Tf:t="AgX";break;case Ef:t="Neutral";break;case hp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $o=new D;function sx(){_t.getLuminanceCoefficients($o);const r=$o.x.toFixed(4),e=$o.y.toFixed(4),t=$o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(io).join(`
`)}function ox(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ax(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function io(r){return r!==""}function yu(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(r){return r.replace(lx,hx)}const cx=new Map;function hx(r,e){let t=ft[e];if(t===void 0){const n=cx.get(e);if(n!==void 0)t=ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ic(t)}const ux=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Su(r){return r.replace(ux,fx)}function fx(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function bu(r){let e=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dx(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===xf?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===_f?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function px(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case yr:case Mr:e="ENVMAP_TYPE_CUBE";break;case ka:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mx(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Mr:e="ENVMAP_MODE_REFRACTION";break}return e}function gx(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Mf:e="ENVMAP_BLENDING_MULTIPLY";break;case lp:e="ENVMAP_BLENDING_MIX";break;case cp:e="ENVMAP_BLENDING_ADD";break}return e}function vx(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function xx(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=dx(t),c=px(t),h=mx(t),u=gx(t),f=vx(t),d=rx(t),m=ox(s),v=i.createProgram();let g,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(io).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(io).join(`
`),p.length>0&&(p+=`
`)):(g=[bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(io).join(`
`),p=[bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ls?"#define TONE_MAPPING":"",t.toneMapping!==ls?ft.tonemapping_pars_fragment:"",t.toneMapping!==ls?ix("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,nx("linearToOutputTexel",t.outputColorSpace),sx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(io).join(`
`)),o=Ic(o),o=yu(o,t),o=Mu(o,t),a=Ic(a),a=yu(a,t),a=Mu(a,t),o=Su(o),a=Su(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=_+g+o,x=_+p+a,A=vu(i,i.VERTEX_SHADER,y),w=vu(i,i.FRAGMENT_SHADER,x);i.attachShader(v,A),i.attachShader(v,w),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function E(C){if(r.debug.checkShaderErrors){const F=i.getProgramInfoLog(v).trim(),B=i.getShaderInfoLog(A).trim(),O=i.getShaderInfoLog(w).trim();let z=!0,G=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,A,w);else{const Y=_u(i,A,"vertex"),W=_u(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+F+`
`+Y+`
`+W)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(B===""||O==="")&&(G=!1);G&&(C.diagnostics={runnable:z,programLog:F,vertexShader:{log:B,prefix:g},fragmentShader:{log:O,prefix:p}})}i.deleteShader(A),i.deleteShader(w),L=new Ea(i,v),M=ax(i,v)}let L;this.getUniforms=function(){return L===void 0&&E(this),L};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(v,Jv)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=w,this}let _x=0;class yx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Mx(e),t.set(e,n)),n}}class Mx{constructor(e){this.id=_x++,this.code=e,this.usedTimes=0}}function Sx(r,e,t,n,i,s,o){const a=new ih,l=new yx,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,S,C,F,B){const O=F.fog,z=B.geometry,G=M.isMeshStandardMaterial?F.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||G),W=Y&&Y.mapping===ka?Y.image.height:null,Q=m[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const ce=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ve=ce!==void 0?ce.length:0;let Oe=0;z.morphAttributes.position!==void 0&&(Oe=1),z.morphAttributes.normal!==void 0&&(Oe=2),z.morphAttributes.color!==void 0&&(Oe=3);let Je,J,fe,Ce;if(Q){const Mt=Ti[Q];Je=Mt.vertexShader,J=Mt.fragmentShader}else Je=M.vertexShader,J=M.fragmentShader,l.update(M),fe=l.getVertexShaderID(M),Ce=l.getFragmentShaderID(M);const de=r.getRenderTarget(),De=r.state.buffers.depth.getReversed(),He=B.isInstancedMesh===!0,Fe=B.isBatchedMesh===!0,et=!!M.map,ne=!!M.matcap,ue=!!Y,N=!!M.aoMap,ze=!!M.lightMap,he=!!M.bumpMap,we=!!M.normalMap,xe=!!M.displacementMap,Ye=!!M.emissiveMap,Se=!!M.metalnessMap,P=!!M.roughnessMap,b=M.anisotropy>0,X=M.clearcoat>0,te=M.dispersion>0,le=M.iridescence>0,ee=M.sheen>0,Ne=M.transmission>0,ye=b&&!!M.anisotropyMap,Me=X&&!!M.clearcoatMap,rt=X&&!!M.clearcoatNormalMap,pe=X&&!!M.clearcoatRoughnessMap,Ue=le&&!!M.iridescenceMap,je=le&&!!M.iridescenceThicknessMap,Ze=ee&&!!M.sheenColorMap,Ie=ee&&!!M.sheenRoughnessMap,mt=!!M.specularMap,tt=!!M.specularColorMap,yt=!!M.specularIntensityMap,k=Ne&&!!M.transmissionMap,_e=Ne&&!!M.thicknessMap,$=!!M.gradientMap,re=!!M.alphaMap,Le=M.alphaTest>0,Te=!!M.alphaHash,ot=!!M.extensions;let zt=ls;M.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(zt=r.toneMapping);const qt={shaderID:Q,shaderType:M.type,shaderName:M.name,vertexShader:Je,fragmentShader:J,defines:M.defines,customVertexShaderID:fe,customFragmentShaderID:Ce,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Fe,batchingColor:Fe&&B._colorsTexture!==null,instancing:He,instancingColor:He&&B.instanceColor!==null,instancingMorph:He&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:de===null?r.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Fn,alphaToCoverage:!!M.alphaToCoverage,map:et,matcap:ne,envMap:ue,envMapMode:ue&&Y.mapping,envMapCubeUVHeight:W,aoMap:N,lightMap:ze,bumpMap:he,normalMap:we,displacementMap:f&&xe,emissiveMap:Ye,normalMapObjectSpace:we&&M.normalMapType===gp,normalMapTangentSpace:we&&M.normalMapType===th,metalnessMap:Se,roughnessMap:P,anisotropy:b,anisotropyMap:ye,clearcoat:X,clearcoatMap:Me,clearcoatNormalMap:rt,clearcoatRoughnessMap:pe,dispersion:te,iridescence:le,iridescenceMap:Ue,iridescenceThicknessMap:je,sheen:ee,sheenColorMap:Ze,sheenRoughnessMap:Ie,specularMap:mt,specularColorMap:tt,specularIntensityMap:yt,transmission:Ne,transmissionMap:k,thicknessMap:_e,gradientMap:$,opaque:M.transparent===!1&&M.blending===dr&&M.alphaToCoverage===!1,alphaMap:re,alphaTest:Le,alphaHash:Te,combine:M.combine,mapUv:et&&v(M.map.channel),aoMapUv:N&&v(M.aoMap.channel),lightMapUv:ze&&v(M.lightMap.channel),bumpMapUv:he&&v(M.bumpMap.channel),normalMapUv:we&&v(M.normalMap.channel),displacementMapUv:xe&&v(M.displacementMap.channel),emissiveMapUv:Ye&&v(M.emissiveMap.channel),metalnessMapUv:Se&&v(M.metalnessMap.channel),roughnessMapUv:P&&v(M.roughnessMap.channel),anisotropyMapUv:ye&&v(M.anisotropyMap.channel),clearcoatMapUv:Me&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:rt&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:je&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&v(M.sheenRoughnessMap.channel),specularMapUv:mt&&v(M.specularMap.channel),specularColorMapUv:tt&&v(M.specularColorMap.channel),specularIntensityMapUv:yt&&v(M.specularIntensityMap.channel),transmissionMapUv:k&&v(M.transmissionMap.channel),thicknessMapUv:_e&&v(M.thicknessMap.channel),alphaMapUv:re&&v(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(we||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!z.attributes.uv&&(et||re),fog:!!O,useFog:M.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:De,skinning:B.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Oe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:zt,decodeVideoTexture:et&&M.map.isVideoTexture===!0&&_t.getTransfer(M.map.colorSpace)===Pt,decodeVideoTextureEmissive:Ye&&M.emissiveMap.isVideoTexture===!0&&_t.getTransfer(M.emissiveMap.colorSpace)===Pt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===pn,flipSided:M.side===Hn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ot&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&M.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return qt.vertexUv1s=c.has(1),qt.vertexUv2s=c.has(2),qt.vertexUv3s=c.has(3),c.clear(),qt}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)S.push(C),S.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(_(S,M),y(S,M),S.push(r.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function _(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function y(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){const S=m[M.type];let C;if(S){const F=Ti[S];C=jn.clone(F.uniforms)}else C=M.uniforms;return C}function A(M,S){let C;for(let F=0,B=h.length;F<B;F++){const O=h[F];if(O.cacheKey===S){C=O,++C.usedTimes;break}}return C===void 0&&(C=new xx(r,S,M,s),h.push(C)),C}function w(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function E(M){l.remove(M)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:A,releaseProgram:w,releaseShaderCache:E,programs:h,dispose:L}}function bx(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function wx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function wu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Tu(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,d,m,v,g){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:v,group:g},r[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=v,p.group=g),e++,p}function a(u,f,d,m,v,g){const p=o(u,f,d,m,v,g);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(u,f,d,m,v,g){const p=o(u,f,d,m,v,g);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||wx),n.length>1&&n.sort(f||wu),i.length>1&&i.sort(f||wu)}function h(){for(let u=e,f=r.length;u<f;u++){const d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function Tx(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Tu,r.set(n,[o])):i>=s.length?(o=new Tu,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Ex(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Xe};break;case"SpotLight":t={position:new D,direction:new D,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new D,halfWidth:new D,halfHeight:new D};break}return r[e.id]=t,t}}}function Ax(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Rx=0;function Cx(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Px(r){const e=new Ex,t=Ax(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,s=new Qe,o=new Qe;function a(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,m=0,v=0,g=0,p=0,_=0,y=0,x=0,A=0,w=0,E=0;c.sort(Cx);for(let M=0,S=c.length;M<S;M++){const C=c[M],F=C.color,B=C.intensity,O=C.distance,z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=F.r*B,u+=F.g*B,f+=F.b*B;else if(C.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],B);E++}else if(C.isDirectionalLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Y=C.shadow,W=t.get(C);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=z,n.directionalShadowMatrix[d]=C.shadow.matrix,_++}n.directional[d]=G,d++}else if(C.isSpotLight){const G=e.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(F).multiplyScalar(B),G.distance=O,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[v]=G;const Y=C.shadow;if(C.map&&(n.spotLightMap[A]=C.map,A++,Y.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[v]=Y.matrix,C.castShadow){const W=t.get(C);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=z,x++}v++}else if(C.isRectAreaLight){const G=e.get(C);G.color.copy(F).multiplyScalar(B),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=G,g++}else if(C.isPointLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){const Y=C.shadow,W=t.get(C);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,W.shadowCameraNear=Y.camera.near,W.shadowCameraFar=Y.camera.far,n.pointShadow[m]=W,n.pointShadowMap[m]=z,n.pointShadowMatrix[m]=C.shadow.matrix,y++}n.point[m]=G,m++}else if(C.isHemisphereLight){const G=e.get(C);G.skyColor.copy(C.color).multiplyScalar(B),G.groundColor.copy(C.groundColor).multiplyScalar(B),n.hemi[p]=G,p++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==d||L.pointLength!==m||L.spotLength!==v||L.rectAreaLength!==g||L.hemiLength!==p||L.numDirectionalShadows!==_||L.numPointShadows!==y||L.numSpotShadows!==x||L.numSpotMaps!==A||L.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,L.directionalLength=d,L.pointLength=m,L.spotLength=v,L.rectAreaLength=g,L.hemiLength=p,L.numDirectionalShadows=_,L.numPointShadows=y,L.numSpotShadows=x,L.numSpotMaps=A,L.numLightProbes=E,n.version=Rx++)}function l(c,h){let u=0,f=0,d=0,m=0,v=0;const g=h.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){const y=c[p];if(y.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),u++}else if(y.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),d++}else if(y.isRectAreaLight){const x=n.rectArea[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:n}}function Eu(r){const e=new Px(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Lx(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Eu(r),e.set(i,[a])):s>=o.length?(a=new Eu(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Dx extends hi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=pp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ix extends hi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Nx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ux=`uniform sampler2D shadow_pass;
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
}`;function Ox(r,e,t){let n=new sh;const i=new se,s=new se,o=new Tt,a=new Dx({depthPacking:mp}),l=new Ix,c={},h=t.maxTextureSize,u={[ji]:Hn,[Hn]:ji,[pn]:pn},f=new Bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:Nx,fragmentShader:Ux}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new Ht;m.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ie(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xf;let p=this.type;this.render=function(w,E,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const M=r.getRenderTarget(),S=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),F=r.state;F.setBlending(dn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=p!==Vi&&this.type===Vi,O=p===Vi&&this.type!==Vi;for(let z=0,G=w.length;z<G;z++){const Y=w[z],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const Q=W.getFrameExtents();if(i.multiply(Q),s.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Q.x),i.x=s.x*Q.x,W.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Q.y),i.y=s.y*Q.y,W.mapSize.y=s.y)),W.map===null||B===!0||O===!0){const ve=this.type!==Vi?{minFilter:Jt,magFilter:Jt}:{};W.map!==null&&W.map.dispose(),W.map=new Rn(i.x,i.y,ve),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const ce=W.getViewportCount();for(let ve=0;ve<ce;ve++){const Oe=W.getViewport(ve);o.set(s.x*Oe.x,s.y*Oe.y,s.x*Oe.z,s.y*Oe.w),F.viewport(o),W.updateMatrices(Y,ve),n=W.getFrustum(),x(E,L,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===Vi&&_(W,L),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(M,S,C)};function _(w,E){const L=e.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Rn(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(E,null,L,f,v,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(E,null,L,d,v,null)}function y(w,E,L,M){let S=null;const C=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)S=C;else if(S=L.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const F=S.uuid,B=E.uuid;let O=c[F];O===void 0&&(O={},c[F]=O);let z=O[B];z===void 0&&(z=S.clone(),O[B]=z,E.addEventListener("dispose",A)),S=z}if(S.visible=E.visible,S.wireframe=E.wireframe,M===Vi?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:u[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=r.properties.get(S);F.light=L}return S}function x(w,E,L,M,S){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Vi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const B=e.update(w),O=w.material;if(Array.isArray(O)){const z=B.groups;for(let G=0,Y=z.length;G<Y;G++){const W=z[G],Q=O[W.materialIndex];if(Q&&Q.visible){const ce=y(w,Q,M,S);w.onBeforeShadow(r,w,E,L,B,ce,W),r.renderBufferDirect(L,null,B,ce,w,W),w.onAfterShadow(r,w,E,L,B,ce,W)}}}else if(O.visible){const z=y(w,O,M,S);w.onBeforeShadow(r,w,E,L,B,z,null),r.renderBufferDirect(L,null,B,z,w,null),w.onAfterShadow(r,w,E,L,B,z,null)}}const F=w.children;for(let B=0,O=F.length;B<O;B++)x(F[B],E,L,M,S)}function A(w){w.target.removeEventListener("dispose",A);for(const L in c){const M=c[L],S=w.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const Fx={[Zl]:$l,[Jl]:tc,[Ql]:nc,[_r]:ec,[$l]:Zl,[tc]:Jl,[nc]:Ql,[ec]:_r};function kx(r,e){function t(){let k=!1;const _e=new Tt;let $=null;const re=new Tt(0,0,0,0);return{setMask:function(Le){$!==Le&&!k&&(r.colorMask(Le,Le,Le,Le),$=Le)},setLocked:function(Le){k=Le},setClear:function(Le,Te,ot,zt,qt){qt===!0&&(Le*=zt,Te*=zt,ot*=zt),_e.set(Le,Te,ot,zt),re.equals(_e)===!1&&(r.clearColor(Le,Te,ot,zt),re.copy(_e))},reset:function(){k=!1,$=null,re.set(-1,0,0,0)}}}function n(){let k=!1,_e=!1,$=null,re=null,Le=null;return{setReversed:function(Te){if(_e!==Te){const ot=e.get("EXT_clip_control");_e?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT);const zt=Le;Le=null,this.setClear(zt)}_e=Te},getReversed:function(){return _e},setTest:function(Te){Te?de(r.DEPTH_TEST):De(r.DEPTH_TEST)},setMask:function(Te){$!==Te&&!k&&(r.depthMask(Te),$=Te)},setFunc:function(Te){if(_e&&(Te=Fx[Te]),re!==Te){switch(Te){case Zl:r.depthFunc(r.NEVER);break;case $l:r.depthFunc(r.ALWAYS);break;case Jl:r.depthFunc(r.LESS);break;case _r:r.depthFunc(r.LEQUAL);break;case Ql:r.depthFunc(r.EQUAL);break;case ec:r.depthFunc(r.GEQUAL);break;case tc:r.depthFunc(r.GREATER);break;case nc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}re=Te}},setLocked:function(Te){k=Te},setClear:function(Te){Le!==Te&&(_e&&(Te=1-Te),r.clearDepth(Te),Le=Te)},reset:function(){k=!1,$=null,re=null,Le=null,_e=!1}}}function i(){let k=!1,_e=null,$=null,re=null,Le=null,Te=null,ot=null,zt=null,qt=null;return{setTest:function(Mt){k||(Mt?de(r.STENCIL_TEST):De(r.STENCIL_TEST))},setMask:function(Mt){_e!==Mt&&!k&&(r.stencilMask(Mt),_e=Mt)},setFunc:function(Mt,Qt,Qn){($!==Mt||re!==Qt||Le!==Qn)&&(r.stencilFunc(Mt,Qt,Qn),$=Mt,re=Qt,Le=Qn)},setOp:function(Mt,Qt,Qn){(Te!==Mt||ot!==Qt||zt!==Qn)&&(r.stencilOp(Mt,Qt,Qn),Te=Mt,ot=Qt,zt=Qn)},setLocked:function(Mt){k=Mt},setClear:function(Mt){qt!==Mt&&(r.clearStencil(Mt),qt=Mt)},reset:function(){k=!1,_e=null,$=null,re=null,Le=null,Te=null,ot=null,zt=null,qt=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],m=null,v=!1,g=null,p=null,_=null,y=null,x=null,A=null,w=null,E=new Xe(0,0,0),L=0,M=!1,S=null,C=null,F=null,B=null,O=null;const z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Y=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=Y>=2);let Q=null,ce={};const ve=r.getParameter(r.SCISSOR_BOX),Oe=r.getParameter(r.VIEWPORT),Je=new Tt().fromArray(ve),J=new Tt().fromArray(Oe);function fe(k,_e,$,re){const Le=new Uint8Array(4),Te=r.createTexture();r.bindTexture(k,Te),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ot=0;ot<$;ot++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(_e,0,r.RGBA,1,1,re,0,r.RGBA,r.UNSIGNED_BYTE,Le):r.texImage2D(_e+ot,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Le);return Te}const Ce={};Ce[r.TEXTURE_2D]=fe(r.TEXTURE_2D,r.TEXTURE_2D,1),Ce[r.TEXTURE_CUBE_MAP]=fe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[r.TEXTURE_2D_ARRAY]=fe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ce[r.TEXTURE_3D]=fe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(r.DEPTH_TEST),o.setFunc(_r),he(!1),we(Rh),de(r.CULL_FACE),N(dn);function de(k){h[k]!==!0&&(r.enable(k),h[k]=!0)}function De(k){h[k]!==!1&&(r.disable(k),h[k]=!1)}function He(k,_e){return u[k]!==_e?(r.bindFramebuffer(k,_e),u[k]=_e,k===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=_e),k===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=_e),!0):!1}function Fe(k,_e){let $=d,re=!1;if(k){$=f.get(_e),$===void 0&&($=[],f.set(_e,$));const Le=k.textures;if($.length!==Le.length||$[0]!==r.COLOR_ATTACHMENT0){for(let Te=0,ot=Le.length;Te<ot;Te++)$[Te]=r.COLOR_ATTACHMENT0+Te;$.length=Le.length,re=!0}}else $[0]!==r.BACK&&($[0]=r.BACK,re=!0);re&&r.drawBuffers($)}function et(k){return m!==k?(r.useProgram(k),m=k,!0):!1}const ne={[vi]:r.FUNC_ADD,[jd]:r.FUNC_SUBTRACT,[Kd]:r.FUNC_REVERSE_SUBTRACT};ne[Zd]=r.MIN,ne[$d]=r.MAX;const ue={[eo]:r.ZERO,[Jd]:r.ONE,[Qd]:r.SRC_COLOR,[ql]:r.SRC_ALPHA,[ip]:r.SRC_ALPHA_SATURATE,[Kl]:r.DST_COLOR,[jl]:r.DST_ALPHA,[ep]:r.ONE_MINUS_SRC_COLOR,[Yl]:r.ONE_MINUS_SRC_ALPHA,[np]:r.ONE_MINUS_DST_COLOR,[tp]:r.ONE_MINUS_DST_ALPHA,[sp]:r.CONSTANT_COLOR,[rp]:r.ONE_MINUS_CONSTANT_COLOR,[op]:r.CONSTANT_ALPHA,[ap]:r.ONE_MINUS_CONSTANT_ALPHA};function N(k,_e,$,re,Le,Te,ot,zt,qt,Mt){if(k===dn){v===!0&&(De(r.BLEND),v=!1);return}if(v===!1&&(de(r.BLEND),v=!0),k!==yf){if(k!==g||Mt!==M){if((p!==vi||x!==vi)&&(r.blendEquation(r.FUNC_ADD),p=vi,x=vi),Mt)switch(k){case dr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case as:r.blendFunc(r.ONE,r.ONE);break;case Ch:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ph:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case dr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case as:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ch:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ph:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}_=null,y=null,A=null,w=null,E.set(0,0,0),L=0,g=k,M=Mt}return}Le=Le||_e,Te=Te||$,ot=ot||re,(_e!==p||Le!==x)&&(r.blendEquationSeparate(ne[_e],ne[Le]),p=_e,x=Le),($!==_||re!==y||Te!==A||ot!==w)&&(r.blendFuncSeparate(ue[$],ue[re],ue[Te],ue[ot]),_=$,y=re,A=Te,w=ot),(zt.equals(E)===!1||qt!==L)&&(r.blendColor(zt.r,zt.g,zt.b,qt),E.copy(zt),L=qt),g=k,M=!1}function ze(k,_e){k.side===pn?De(r.CULL_FACE):de(r.CULL_FACE);let $=k.side===Hn;_e&&($=!$),he($),k.blending===dr&&k.transparent===!1?N(dn):N(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);const re=k.stencilWrite;a.setTest(re),re&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ye(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?de(r.SAMPLE_ALPHA_TO_COVERAGE):De(r.SAMPLE_ALPHA_TO_COVERAGE)}function he(k){S!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),S=k)}function we(k){k!==qd?(de(r.CULL_FACE),k!==C&&(k===Rh?r.cullFace(r.BACK):k===Yd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):De(r.CULL_FACE),C=k}function xe(k){k!==F&&(G&&r.lineWidth(k),F=k)}function Ye(k,_e,$){k?(de(r.POLYGON_OFFSET_FILL),(B!==_e||O!==$)&&(r.polygonOffset(_e,$),B=_e,O=$)):De(r.POLYGON_OFFSET_FILL)}function Se(k){k?de(r.SCISSOR_TEST):De(r.SCISSOR_TEST)}function P(k){k===void 0&&(k=r.TEXTURE0+z-1),Q!==k&&(r.activeTexture(k),Q=k)}function b(k,_e,$){$===void 0&&(Q===null?$=r.TEXTURE0+z-1:$=Q);let re=ce[$];re===void 0&&(re={type:void 0,texture:void 0},ce[$]=re),(re.type!==k||re.texture!==_e)&&(Q!==$&&(r.activeTexture($),Q=$),r.bindTexture(k,_e||Ce[k]),re.type=k,re.texture=_e)}function X(){const k=ce[Q];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function te(){try{r.compressedTexImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function le(){try{r.compressedTexImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ee(){try{r.texSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ne(){try{r.texSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ye(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Me(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function rt(){try{r.texStorage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pe(){try{r.texStorage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ue(){try{r.texImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function je(){try{r.texImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ze(k){Je.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),Je.copy(k))}function Ie(k){J.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),J.copy(k))}function mt(k,_e){let $=c.get(_e);$===void 0&&($=new WeakMap,c.set(_e,$));let re=$.get(k);re===void 0&&(re=r.getUniformBlockIndex(_e,k.name),$.set(k,re))}function tt(k,_e){const re=c.get(_e).get(k);l.get(_e)!==re&&(r.uniformBlockBinding(_e,re,k.__bindingPointIndex),l.set(_e,re))}function yt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},Q=null,ce={},u={},f=new WeakMap,d=[],m=null,v=!1,g=null,p=null,_=null,y=null,x=null,A=null,w=null,E=new Xe(0,0,0),L=0,M=!1,S=null,C=null,F=null,B=null,O=null,Je.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:de,disable:De,bindFramebuffer:He,drawBuffers:Fe,useProgram:et,setBlending:N,setMaterial:ze,setFlipSided:he,setCullFace:we,setLineWidth:xe,setPolygonOffset:Ye,setScissorTest:Se,activeTexture:P,bindTexture:b,unbindTexture:X,compressedTexImage2D:te,compressedTexImage3D:le,texImage2D:Ue,texImage3D:je,updateUBOMapping:mt,uniformBlockBinding:tt,texStorage2D:rt,texStorage3D:pe,texSubImage2D:ee,texSubImage3D:Ne,compressedTexSubImage2D:ye,compressedTexSubImage3D:Me,scissor:Ze,viewport:Ie,reset:yt}}function Au(r,e,t,n){const i=Bx(n);switch(t){case Df:return r*e;case Nf:return r*e;case Uf:return r*e*2;case $c:return r*e/i.components*i.byteLength;case Jc:return r*e/i.components*i.byteLength;case Of:return r*e*2/i.components*i.byteLength;case Qc:return r*e*2/i.components*i.byteLength;case If:return r*e*3/i.components*i.byteLength;case Kn:return r*e*4/i.components*i.byteLength;case eh:return r*e*4/i.components*i.byteLength;case Ma:case Sa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ba:case wa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case rc:case ac:return Math.max(r,16)*Math.max(e,8)/4;case sc:case oc:return Math.max(r,8)*Math.max(e,8)/2;case lc:case cc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case hc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case uc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case fc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case dc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case pc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case mc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case gc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case vc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case xc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case _c:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case yc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Sc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case bc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case wc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ta:case Tc:case Ec:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Ff:case Ac:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Rc:case Cc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Bx(r){switch(r){case Ai:case Cf:return{byteLength:1,components:1};case go:case Pf:case Gn:return{byteLength:2,components:1};case Kc:case Zc:return{byteLength:2,components:4};case Is:case jc:case yi:return{byteLength:4,components:1};case Lf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function zx(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new se,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,b){return d?new OffscreenCanvas(P,b):_o("canvas")}function v(P,b,X){let te=1;const le=Se(P);if((le.width>X||le.height>X)&&(te=X/Math.max(le.width,le.height)),te<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ee=Math.floor(te*le.width),Ne=Math.floor(te*le.height);u===void 0&&(u=m(ee,Ne));const ye=b?m(ee,Ne):u;return ye.width=ee,ye.height=Ne,ye.getContext("2d").drawImage(P,0,0,ee,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+ee+"x"+Ne+")."),ye}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),P;return P}function g(P){return P.generateMipmaps}function p(P){r.generateMipmap(P)}function _(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(P,b,X,te,le=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ee=b;if(b===r.RED&&(X===r.FLOAT&&(ee=r.R32F),X===r.HALF_FLOAT&&(ee=r.R16F),X===r.UNSIGNED_BYTE&&(ee=r.R8)),b===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(ee=r.R8UI),X===r.UNSIGNED_SHORT&&(ee=r.R16UI),X===r.UNSIGNED_INT&&(ee=r.R32UI),X===r.BYTE&&(ee=r.R8I),X===r.SHORT&&(ee=r.R16I),X===r.INT&&(ee=r.R32I)),b===r.RG&&(X===r.FLOAT&&(ee=r.RG32F),X===r.HALF_FLOAT&&(ee=r.RG16F),X===r.UNSIGNED_BYTE&&(ee=r.RG8)),b===r.RG_INTEGER&&(X===r.UNSIGNED_BYTE&&(ee=r.RG8UI),X===r.UNSIGNED_SHORT&&(ee=r.RG16UI),X===r.UNSIGNED_INT&&(ee=r.RG32UI),X===r.BYTE&&(ee=r.RG8I),X===r.SHORT&&(ee=r.RG16I),X===r.INT&&(ee=r.RG32I)),b===r.RGB_INTEGER&&(X===r.UNSIGNED_BYTE&&(ee=r.RGB8UI),X===r.UNSIGNED_SHORT&&(ee=r.RGB16UI),X===r.UNSIGNED_INT&&(ee=r.RGB32UI),X===r.BYTE&&(ee=r.RGB8I),X===r.SHORT&&(ee=r.RGB16I),X===r.INT&&(ee=r.RGB32I)),b===r.RGBA_INTEGER&&(X===r.UNSIGNED_BYTE&&(ee=r.RGBA8UI),X===r.UNSIGNED_SHORT&&(ee=r.RGBA16UI),X===r.UNSIGNED_INT&&(ee=r.RGBA32UI),X===r.BYTE&&(ee=r.RGBA8I),X===r.SHORT&&(ee=r.RGBA16I),X===r.INT&&(ee=r.RGBA32I)),b===r.RGB&&X===r.UNSIGNED_INT_5_9_9_9_REV&&(ee=r.RGB9_E5),b===r.RGBA){const Ne=le?Ba:_t.getTransfer(te);X===r.FLOAT&&(ee=r.RGBA32F),X===r.HALF_FLOAT&&(ee=r.RGBA16F),X===r.UNSIGNED_BYTE&&(ee=Ne===Pt?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&(ee=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(ee=r.RGB5_A1)}return(ee===r.R16F||ee===r.R32F||ee===r.RG16F||ee===r.RG32F||ee===r.RGBA16F||ee===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function x(P,b){let X;return P?b===null||b===Is||b===Ns?X=r.DEPTH24_STENCIL8:b===yi?X=r.DEPTH32F_STENCIL8:b===go&&(X=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Is||b===Ns?X=r.DEPTH_COMPONENT24:b===yi?X=r.DEPTH_COMPONENT32F:b===go&&(X=r.DEPTH_COMPONENT16),X}function A(P,b){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Jt&&P.minFilter!==Vn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function w(P){const b=P.target;b.removeEventListener("dispose",w),L(b),b.isVideoTexture&&h.delete(b)}function E(P){const b=P.target;b.removeEventListener("dispose",E),S(b)}function L(P){const b=n.get(P);if(b.__webglInit===void 0)return;const X=P.source,te=f.get(X);if(te){const le=te[b.__cacheKey];le.usedTimes--,le.usedTimes===0&&M(P),Object.keys(te).length===0&&f.delete(X)}n.remove(P)}function M(P){const b=n.get(P);r.deleteTexture(b.__webglTexture);const X=P.source,te=f.get(X);delete te[b.__cacheKey],o.memory.textures--}function S(P){const b=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(b.__webglFramebuffer[te]))for(let le=0;le<b.__webglFramebuffer[te].length;le++)r.deleteFramebuffer(b.__webglFramebuffer[te][le]);else r.deleteFramebuffer(b.__webglFramebuffer[te]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[te])}else{if(Array.isArray(b.__webglFramebuffer))for(let te=0;te<b.__webglFramebuffer.length;te++)r.deleteFramebuffer(b.__webglFramebuffer[te]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let te=0;te<b.__webglColorRenderbuffer.length;te++)b.__webglColorRenderbuffer[te]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[te]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const X=P.textures;for(let te=0,le=X.length;te<le;te++){const ee=n.get(X[te]);ee.__webglTexture&&(r.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove(X[te])}n.remove(P)}let C=0;function F(){C=0}function B(){const P=C;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),C+=1,P}function O(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function z(P,b){const X=n.get(P);if(P.isVideoTexture&&xe(P),P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){const te=P.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(X,P,b);return}}t.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+b)}function G(P,b){const X=n.get(P);if(P.version>0&&X.__version!==P.version){J(X,P,b);return}t.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+b)}function Y(P,b){const X=n.get(P);if(P.version>0&&X.__version!==P.version){J(X,P,b);return}t.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+b)}function W(P,b){const X=n.get(P);if(P.version>0&&X.__version!==P.version){fe(X,P,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+b)}const Q={[$n]:r.REPEAT,[ss]:r.CLAMP_TO_EDGE,[La]:r.MIRRORED_REPEAT},ce={[Jt]:r.NEAREST,[Rf]:r.NEAREST_MIPMAP_NEAREST,[to]:r.NEAREST_MIPMAP_LINEAR,[Vn]:r.LINEAR,[ya]:r.LINEAR_MIPMAP_NEAREST,[Wi]:r.LINEAR_MIPMAP_LINEAR},ve={[vp]:r.NEVER,[bp]:r.ALWAYS,[xp]:r.LESS,[Bf]:r.LEQUAL,[_p]:r.EQUAL,[Sp]:r.GEQUAL,[yp]:r.GREATER,[Mp]:r.NOTEQUAL};function Oe(P,b){if(b.type===yi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Vn||b.magFilter===ya||b.magFilter===to||b.magFilter===Wi||b.minFilter===Vn||b.minFilter===ya||b.minFilter===to||b.minFilter===Wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,Q[b.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,Q[b.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,Q[b.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,ce[b.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,ce[b.minFilter]),b.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,ve[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Jt||b.minFilter!==to&&b.minFilter!==Wi||b.type===yi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Je(P,b){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",w));const te=b.source;let le=f.get(te);le===void 0&&(le={},f.set(te,le));const ee=O(b);if(ee!==P.__cacheKey){le[ee]===void 0&&(le[ee]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,X=!0),le[ee].usedTimes++;const Ne=le[P.__cacheKey];Ne!==void 0&&(le[P.__cacheKey].usedTimes--,Ne.usedTimes===0&&M(b)),P.__cacheKey=ee,P.__webglTexture=le[ee].texture}return X}function J(P,b,X){let te=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(te=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(te=r.TEXTURE_3D);const le=Je(P,b),ee=b.source;t.bindTexture(te,P.__webglTexture,r.TEXTURE0+X);const Ne=n.get(ee);if(ee.version!==Ne.__version||le===!0){t.activeTexture(r.TEXTURE0+X);const ye=_t.getPrimaries(_t.workingColorSpace),Me=b.colorSpace===Gi?null:_t.getPrimaries(b.colorSpace),rt=b.colorSpace===Gi||ye===Me?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let pe=v(b.image,!1,i.maxTextureSize);pe=Ye(b,pe);const Ue=s.convert(b.format,b.colorSpace),je=s.convert(b.type);let Ze=y(b.internalFormat,Ue,je,b.colorSpace,b.isVideoTexture);Oe(te,b);let Ie;const mt=b.mipmaps,tt=b.isVideoTexture!==!0,yt=Ne.__version===void 0||le===!0,k=ee.dataReady,_e=A(b,pe);if(b.isDepthTexture)Ze=x(b.format===Us,b.type),yt&&(tt?t.texStorage2D(r.TEXTURE_2D,1,Ze,pe.width,pe.height):t.texImage2D(r.TEXTURE_2D,0,Ze,pe.width,pe.height,0,Ue,je,null));else if(b.isDataTexture)if(mt.length>0){tt&&yt&&t.texStorage2D(r.TEXTURE_2D,_e,Ze,mt[0].width,mt[0].height);for(let $=0,re=mt.length;$<re;$++)Ie=mt[$],tt?k&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,Ie.width,Ie.height,Ue,je,Ie.data):t.texImage2D(r.TEXTURE_2D,$,Ze,Ie.width,Ie.height,0,Ue,je,Ie.data);b.generateMipmaps=!1}else tt?(yt&&t.texStorage2D(r.TEXTURE_2D,_e,Ze,pe.width,pe.height),k&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,pe.width,pe.height,Ue,je,pe.data)):t.texImage2D(r.TEXTURE_2D,0,Ze,pe.width,pe.height,0,Ue,je,pe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){tt&&yt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,_e,Ze,mt[0].width,mt[0].height,pe.depth);for(let $=0,re=mt.length;$<re;$++)if(Ie=mt[$],b.format!==Kn)if(Ue!==null)if(tt){if(k)if(b.layerUpdates.size>0){const Le=Au(Ie.width,Ie.height,b.format,b.type);for(const Te of b.layerUpdates){const ot=Ie.data.subarray(Te*Le/Ie.data.BYTES_PER_ELEMENT,(Te+1)*Le/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,Te,Ie.width,Ie.height,1,Ue,ot)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,Ie.width,Ie.height,pe.depth,Ue,Ie.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,Ze,Ie.width,Ie.height,pe.depth,0,Ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?k&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,Ie.width,Ie.height,pe.depth,Ue,je,Ie.data):t.texImage3D(r.TEXTURE_2D_ARRAY,$,Ze,Ie.width,Ie.height,pe.depth,0,Ue,je,Ie.data)}else{tt&&yt&&t.texStorage2D(r.TEXTURE_2D,_e,Ze,mt[0].width,mt[0].height);for(let $=0,re=mt.length;$<re;$++)Ie=mt[$],b.format!==Kn?Ue!==null?tt?k&&t.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,Ie.width,Ie.height,Ue,Ie.data):t.compressedTexImage2D(r.TEXTURE_2D,$,Ze,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?k&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,Ie.width,Ie.height,Ue,je,Ie.data):t.texImage2D(r.TEXTURE_2D,$,Ze,Ie.width,Ie.height,0,Ue,je,Ie.data)}else if(b.isDataArrayTexture)if(tt){if(yt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,_e,Ze,pe.width,pe.height,pe.depth),k)if(b.layerUpdates.size>0){const $=Au(pe.width,pe.height,b.format,b.type);for(const re of b.layerUpdates){const Le=pe.data.subarray(re*$/pe.data.BYTES_PER_ELEMENT,(re+1)*$/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,re,pe.width,pe.height,1,Ue,je,Le)}b.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ue,je,pe.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ze,pe.width,pe.height,pe.depth,0,Ue,je,pe.data);else if(b.isData3DTexture)tt?(yt&&t.texStorage3D(r.TEXTURE_3D,_e,Ze,pe.width,pe.height,pe.depth),k&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ue,je,pe.data)):t.texImage3D(r.TEXTURE_3D,0,Ze,pe.width,pe.height,pe.depth,0,Ue,je,pe.data);else if(b.isFramebufferTexture){if(yt)if(tt)t.texStorage2D(r.TEXTURE_2D,_e,Ze,pe.width,pe.height);else{let $=pe.width,re=pe.height;for(let Le=0;Le<_e;Le++)t.texImage2D(r.TEXTURE_2D,Le,Ze,$,re,0,Ue,je,null),$>>=1,re>>=1}}else if(mt.length>0){if(tt&&yt){const $=Se(mt[0]);t.texStorage2D(r.TEXTURE_2D,_e,Ze,$.width,$.height)}for(let $=0,re=mt.length;$<re;$++)Ie=mt[$],tt?k&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,Ue,je,Ie):t.texImage2D(r.TEXTURE_2D,$,Ze,Ue,je,Ie);b.generateMipmaps=!1}else if(tt){if(yt){const $=Se(pe);t.texStorage2D(r.TEXTURE_2D,_e,Ze,$.width,$.height)}k&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ue,je,pe)}else t.texImage2D(r.TEXTURE_2D,0,Ze,Ue,je,pe);g(b)&&p(te),Ne.__version=ee.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function fe(P,b,X){if(b.image.length!==6)return;const te=Je(P,b),le=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+X);const ee=n.get(le);if(le.version!==ee.__version||te===!0){t.activeTexture(r.TEXTURE0+X);const Ne=_t.getPrimaries(_t.workingColorSpace),ye=b.colorSpace===Gi?null:_t.getPrimaries(b.colorSpace),Me=b.colorSpace===Gi||Ne===ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const rt=b.isCompressedTexture||b.image[0].isCompressedTexture,pe=b.image[0]&&b.image[0].isDataTexture,Ue=[];for(let re=0;re<6;re++)!rt&&!pe?Ue[re]=v(b.image[re],!0,i.maxCubemapSize):Ue[re]=pe?b.image[re].image:b.image[re],Ue[re]=Ye(b,Ue[re]);const je=Ue[0],Ze=s.convert(b.format,b.colorSpace),Ie=s.convert(b.type),mt=y(b.internalFormat,Ze,Ie,b.colorSpace),tt=b.isVideoTexture!==!0,yt=ee.__version===void 0||te===!0,k=le.dataReady;let _e=A(b,je);Oe(r.TEXTURE_CUBE_MAP,b);let $;if(rt){tt&&yt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,_e,mt,je.width,je.height);for(let re=0;re<6;re++){$=Ue[re].mipmaps;for(let Le=0;Le<$.length;Le++){const Te=$[Le];b.format!==Kn?Ze!==null?tt?k&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le,0,0,Te.width,Te.height,Ze,Te.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le,mt,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le,0,0,Te.width,Te.height,Ze,Ie,Te.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le,mt,Te.width,Te.height,0,Ze,Ie,Te.data)}}}else{if($=b.mipmaps,tt&&yt){$.length>0&&_e++;const re=Se(Ue[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,_e,mt,re.width,re.height)}for(let re=0;re<6;re++)if(pe){tt?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ue[re].width,Ue[re].height,Ze,Ie,Ue[re].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,mt,Ue[re].width,Ue[re].height,0,Ze,Ie,Ue[re].data);for(let Le=0;Le<$.length;Le++){const ot=$[Le].image[re].image;tt?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le+1,0,0,ot.width,ot.height,Ze,Ie,ot.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le+1,mt,ot.width,ot.height,0,Ze,Ie,ot.data)}}else{tt?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ze,Ie,Ue[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,mt,Ze,Ie,Ue[re]);for(let Le=0;Le<$.length;Le++){const Te=$[Le];tt?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le+1,0,0,Ze,Ie,Te.image[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le+1,mt,Ze,Ie,Te.image[re])}}}g(b)&&p(r.TEXTURE_CUBE_MAP),ee.__version=le.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Ce(P,b,X,te,le,ee){const Ne=s.convert(X.format,X.colorSpace),ye=s.convert(X.type),Me=y(X.internalFormat,Ne,ye,X.colorSpace),rt=n.get(b),pe=n.get(X);if(pe.__renderTarget=b,!rt.__hasExternalTextures){const Ue=Math.max(1,b.width>>ee),je=Math.max(1,b.height>>ee);le===r.TEXTURE_3D||le===r.TEXTURE_2D_ARRAY?t.texImage3D(le,ee,Me,Ue,je,b.depth,0,Ne,ye,null):t.texImage2D(le,ee,Me,Ue,je,0,Ne,ye,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),we(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,le,pe.__webglTexture,0,he(b)):(le===r.TEXTURE_2D||le>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,te,le,pe.__webglTexture,ee),t.bindFramebuffer(r.FRAMEBUFFER,null)}function de(P,b,X){if(r.bindRenderbuffer(r.RENDERBUFFER,P),b.depthBuffer){const te=b.depthTexture,le=te&&te.isDepthTexture?te.type:null,ee=x(b.stencilBuffer,le),Ne=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=he(b);we(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ye,ee,b.width,b.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,ye,ee,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ee,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ne,r.RENDERBUFFER,P)}else{const te=b.textures;for(let le=0;le<te.length;le++){const ee=te[le],Ne=s.convert(ee.format,ee.colorSpace),ye=s.convert(ee.type),Me=y(ee.internalFormat,Ne,ye,ee.colorSpace),rt=he(b);X&&we(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,rt,Me,b.width,b.height):we(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,rt,Me,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Me,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function De(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=n.get(b.depthTexture);te.__renderTarget=b,(!te.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),z(b.depthTexture,0);const le=te.__webglTexture,ee=he(b);if(b.depthTexture.format===pr)we(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,le,0,ee):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,le,0);else if(b.depthTexture.format===Us)we(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,le,0,ee):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function He(P){const b=n.get(P),X=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const te=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),te){const le=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,te.removeEventListener("dispose",le)};te.addEventListener("dispose",le),b.__depthDisposeCallback=le}b.__boundDepthTexture=te}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");De(b.__webglFramebuffer,P)}else if(X){b.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[te]),b.__webglDepthbuffer[te]===void 0)b.__webglDepthbuffer[te]=r.createRenderbuffer(),de(b.__webglDepthbuffer[te],P,!1);else{const le=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ee=b.__webglDepthbuffer[te];r.bindRenderbuffer(r.RENDERBUFFER,ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,le,r.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),de(b.__webglDepthbuffer,P,!1);else{const te=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,le),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,le)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Fe(P,b,X){const te=n.get(P);b!==void 0&&Ce(te.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&He(P)}function et(P){const b=P.texture,X=n.get(P),te=n.get(b);P.addEventListener("dispose",E);const le=P.textures,ee=P.isWebGLCubeRenderTarget===!0,Ne=le.length>1;if(Ne||(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=b.version,o.memory.textures++),ee){X.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer[ye]=[];for(let Me=0;Me<b.mipmaps.length;Me++)X.__webglFramebuffer[ye][Me]=r.createFramebuffer()}else X.__webglFramebuffer[ye]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer=[];for(let ye=0;ye<b.mipmaps.length;ye++)X.__webglFramebuffer[ye]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(Ne)for(let ye=0,Me=le.length;ye<Me;ye++){const rt=n.get(le[ye]);rt.__webglTexture===void 0&&(rt.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&we(P)===!1){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ye=0;ye<le.length;ye++){const Me=le[ye];X.__webglColorRenderbuffer[ye]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[ye]);const rt=s.convert(Me.format,Me.colorSpace),pe=s.convert(Me.type),Ue=y(Me.internalFormat,rt,pe,Me.colorSpace,P.isXRRenderTarget===!0),je=he(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,je,Ue,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,X.__webglColorRenderbuffer[ye])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),de(X.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ee){t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture),Oe(r.TEXTURE_CUBE_MAP,b);for(let ye=0;ye<6;ye++)if(b.mipmaps&&b.mipmaps.length>0)for(let Me=0;Me<b.mipmaps.length;Me++)Ce(X.__webglFramebuffer[ye][Me],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Me);else Ce(X.__webglFramebuffer[ye],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);g(b)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let ye=0,Me=le.length;ye<Me;ye++){const rt=le[ye],pe=n.get(rt);t.bindTexture(r.TEXTURE_2D,pe.__webglTexture),Oe(r.TEXTURE_2D,rt),Ce(X.__webglFramebuffer,P,rt,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,0),g(rt)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let ye=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ye=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ye,te.__webglTexture),Oe(ye,b),b.mipmaps&&b.mipmaps.length>0)for(let Me=0;Me<b.mipmaps.length;Me++)Ce(X.__webglFramebuffer[Me],P,b,r.COLOR_ATTACHMENT0,ye,Me);else Ce(X.__webglFramebuffer,P,b,r.COLOR_ATTACHMENT0,ye,0);g(b)&&p(ye),t.unbindTexture()}P.depthBuffer&&He(P)}function ne(P){const b=P.textures;for(let X=0,te=b.length;X<te;X++){const le=b[X];if(g(le)){const ee=_(P),Ne=n.get(le).__webglTexture;t.bindTexture(ee,Ne),p(ee),t.unbindTexture()}}}const ue=[],N=[];function ze(P){if(P.samples>0){if(we(P)===!1){const b=P.textures,X=P.width,te=P.height;let le=r.COLOR_BUFFER_BIT;const ee=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ne=n.get(P),ye=b.length>1;if(ye)for(let Me=0;Me<b.length;Me++)t.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Me=0;Me<b.length;Me++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(le|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(le|=r.STENCIL_BUFFER_BIT)),ye){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ne.__webglColorRenderbuffer[Me]);const rt=n.get(b[Me]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,rt,0)}r.blitFramebuffer(0,0,X,te,0,0,X,te,le,r.NEAREST),l===!0&&(ue.length=0,N.length=0,ue.push(r.COLOR_ATTACHMENT0+Me),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ue.push(ee),N.push(ee),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,N)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ue))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ye)for(let Me=0;Me<b.length;Me++){t.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,Ne.__webglColorRenderbuffer[Me]);const rt=n.get(b[Me]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,rt,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const b=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function he(P){return Math.min(i.maxSamples,P.samples)}function we(P){const b=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function xe(P){const b=o.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function Ye(P,b){const X=P.colorSpace,te=P.format,le=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==Fn&&X!==Gi&&(_t.getTransfer(X)===Pt?(te!==Kn||le!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),b}function Se(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=z,this.setTexture2DArray=G,this.setTexture3D=Y,this.setTextureCube=W,this.rebindTextures=Fe,this.setupRenderTarget=et,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=we}function Vx(r,e){function t(n,i=Gi){let s;const o=_t.getTransfer(i);if(n===Ai)return r.UNSIGNED_BYTE;if(n===Kc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Zc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Lf)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Cf)return r.BYTE;if(n===Pf)return r.SHORT;if(n===go)return r.UNSIGNED_SHORT;if(n===jc)return r.INT;if(n===Is)return r.UNSIGNED_INT;if(n===yi)return r.FLOAT;if(n===Gn)return r.HALF_FLOAT;if(n===Df)return r.ALPHA;if(n===If)return r.RGB;if(n===Kn)return r.RGBA;if(n===Nf)return r.LUMINANCE;if(n===Uf)return r.LUMINANCE_ALPHA;if(n===pr)return r.DEPTH_COMPONENT;if(n===Us)return r.DEPTH_STENCIL;if(n===$c)return r.RED;if(n===Jc)return r.RED_INTEGER;if(n===Of)return r.RG;if(n===Qc)return r.RG_INTEGER;if(n===eh)return r.RGBA_INTEGER;if(n===Ma||n===Sa||n===ba||n===wa)if(o===Pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ma)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ma)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ba)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sc||n===rc||n===oc||n===ac)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===sc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===rc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ac)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lc||n===cc||n===hc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===lc||n===cc)return o===Pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===hc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===uc||n===fc||n===dc||n===pc||n===mc||n===gc||n===vc||n===xc||n===_c||n===yc||n===Mc||n===Sc||n===bc||n===wc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===uc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===mc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_c)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wc)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ta||n===Tc||n===Ec)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ta)return o===Pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ec)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ff||n===Ac||n===Rc||n===Cc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ta)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ac)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Rc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ns?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class Hx extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class We extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gx={type:"move"};class El{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new We,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new We,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new We,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new We;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Wx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xx=`
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

}`;class qx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new an,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Bt({vertexShader:Wx,fragmentShader:Xx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ie(new Zn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Yx extends Lr{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null;const v=new qx,g=t.getContextAttributes();let p=null,_=null;const y=[],x=[],A=new se;let w=null;const E=new An;E.viewport=new Tt;const L=new An;L.viewport=new Tt;const M=[E,L],S=new Hx;let C=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let fe=y[J];return fe===void 0&&(fe=new El,y[J]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(J){let fe=y[J];return fe===void 0&&(fe=new El,y[J]=fe),fe.getGripSpace()},this.getHand=function(J){let fe=y[J];return fe===void 0&&(fe=new El,y[J]=fe),fe.getHandSpace()};function B(J){const fe=x.indexOf(J.inputSource);if(fe===-1)return;const Ce=y[fe];Ce!==void 0&&(Ce.update(J.inputSource,J.frame,c||o),Ce.dispatchEvent({type:J.type,data:J.inputSource}))}function O(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",z);for(let J=0;J<y.length;J++){const fe=x[J];fe!==null&&(x[J]=null,y[J].disconnect(fe))}C=null,F=null,v.reset(),e.setRenderTarget(p),d=null,f=null,u=null,i=null,_=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",O),i.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(A),i.renderState.layers===void 0){const fe={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,fe),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Rn(d.framebufferWidth,d.framebufferHeight,{format:Kn,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let fe=null,Ce=null,de=null;g.depth&&(de=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=g.stencil?Us:pr,Ce=g.stencil?Ns:Is);const De={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(De),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Rn(f.textureWidth,f.textureHeight,{format:Kn,type:Ai,depthTexture:new oh(f.textureWidth,f.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Je.setContext(i),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function z(J){for(let fe=0;fe<J.removed.length;fe++){const Ce=J.removed[fe],de=x.indexOf(Ce);de>=0&&(x[de]=null,y[de].disconnect(Ce))}for(let fe=0;fe<J.added.length;fe++){const Ce=J.added[fe];let de=x.indexOf(Ce);if(de===-1){for(let He=0;He<y.length;He++)if(He>=x.length){x.push(Ce),de=He;break}else if(x[He]===null){x[He]=Ce,de=He;break}if(de===-1)break}const De=y[de];De&&De.connect(Ce)}}const G=new D,Y=new D;function W(J,fe,Ce){G.setFromMatrixPosition(fe.matrixWorld),Y.setFromMatrixPosition(Ce.matrixWorld);const de=G.distanceTo(Y),De=fe.projectionMatrix.elements,He=Ce.projectionMatrix.elements,Fe=De[14]/(De[10]-1),et=De[14]/(De[10]+1),ne=(De[9]+1)/De[5],ue=(De[9]-1)/De[5],N=(De[8]-1)/De[0],ze=(He[8]+1)/He[0],he=Fe*N,we=Fe*ze,xe=de/(-N+ze),Ye=xe*-N;if(fe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ye),J.translateZ(xe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),De[10]===-1)J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Se=Fe+xe,P=et+xe,b=he-Ye,X=we+(de-Ye),te=ne*et/P*Se,le=ue*et/P*Se;J.projectionMatrix.makePerspective(b,X,te,le,Se,P),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Q(J,fe){fe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(fe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let fe=J.near,Ce=J.far;v.texture!==null&&(v.depthNear>0&&(fe=v.depthNear),v.depthFar>0&&(Ce=v.depthFar)),S.near=L.near=E.near=fe,S.far=L.far=E.far=Ce,(C!==S.near||F!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,F=S.far),E.layers.mask=J.layers.mask|2,L.layers.mask=J.layers.mask|4,S.layers.mask=E.layers.mask|L.layers.mask;const de=J.parent,De=S.cameras;Q(S,de);for(let He=0;He<De.length;He++)Q(De[He],de);De.length===2?W(S,E,L):S.projectionMatrix.copy(E.projectionMatrix),ce(J,S,de)};function ce(J,fe,Ce){Ce===null?J.matrix.copy(fe.matrixWorld):(J.matrix.copy(Ce.matrixWorld),J.matrix.invert(),J.matrix.multiply(fe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Sr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let ve=null;function Oe(J,fe){if(h=fe.getViewerPose(c||o),m=fe,h!==null){const Ce=h.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let de=!1;Ce.length!==S.cameras.length&&(S.cameras.length=0,de=!0);for(let He=0;He<Ce.length;He++){const Fe=Ce[He];let et=null;if(d!==null)et=d.getViewport(Fe);else{const ue=u.getViewSubImage(f,Fe);et=ue.viewport,He===0&&(e.setRenderTargetTextures(_,ue.colorTexture,f.ignoreDepthValues?void 0:ue.depthStencilTexture),e.setRenderTarget(_))}let ne=M[He];ne===void 0&&(ne=new An,ne.layers.enable(He),ne.viewport=new Tt,M[He]=ne),ne.matrix.fromArray(Fe.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(Fe.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(et.x,et.y,et.width,et.height),He===0&&(S.matrix.copy(ne.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),de===!0&&S.cameras.push(ne)}const De=i.enabledFeatures;if(De&&De.includes("depth-sensing")){const He=u.getDepthInformation(Ce[0]);He&&He.isValid&&He.texture&&v.init(e,He,i.renderState)}}for(let Ce=0;Ce<y.length;Ce++){const de=x[Ce],De=y[Ce];de!==null&&De!==void 0&&De.update(de,fe,c||o)}ve&&ve(J,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),m=null}const Je=new Kf;Je.setAnimationLoop(Oe),this.setAnimationLoop=function(J){ve=J},this.dispose=function(){}}}const Ms=new Ri,jx=new Qe;function Kx(r,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,qf(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,_,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,x)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),v(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,_,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Hn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Hn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const _=e.get(p),y=_.envMap,x=_.envMapRotation;y&&(g.envMap.value=y,Ms.copy(x),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),g.envMapRotation.value.setFromMatrix4(jx.makeRotationFromEuler(Ms)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,_,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,_){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Hn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const _=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Zx(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){const x=y.program;n.uniformBlockBinding(_,x)}function c(_,y){let x=i[_.id];x===void 0&&(m(_),x=h(_),i[_.id]=x,_.addEventListener("dispose",g));const A=y.program;n.updateUBOMapping(_,A);const w=e.render.frame;s[_.id]!==w&&(f(_),s[_.id]=w)}function h(_){const y=u();_.__bindingPointIndex=y;const x=r.createBuffer(),A=_.__size,w=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,A,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,x),x}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const y=i[_.id],x=_.uniforms,A=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let w=0,E=x.length;w<E;w++){const L=Array.isArray(x[w])?x[w]:[x[w]];for(let M=0,S=L.length;M<S;M++){const C=L[M];if(d(C,w,M,A)===!0){const F=C.__offset,B=Array.isArray(C.value)?C.value:[C.value];let O=0;for(let z=0;z<B.length;z++){const G=B[z],Y=v(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,F+O,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,O),O+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,C.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(_,y,x,A){const w=_.value,E=y+"_"+x;if(A[E]===void 0)return typeof w=="number"||typeof w=="boolean"?A[E]=w:A[E]=w.clone(),!0;{const L=A[E];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return A[E]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function m(_){const y=_.uniforms;let x=0;const A=16;for(let E=0,L=y.length;E<L;E++){const M=Array.isArray(y[E])?y[E]:[y[E]];for(let S=0,C=M.length;S<C;S++){const F=M[S],B=Array.isArray(F.value)?F.value:[F.value];for(let O=0,z=B.length;O<z;O++){const G=B[O],Y=v(G),W=x%A,Q=W%Y.boundary,ce=W+Q;x+=Q,ce!==0&&A-ce<Y.storage&&(x+=A-ce),F.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=Y.storage}}}const w=x%A;return w>0&&(x+=A-w),_.__size=x,_.__cache={},this}function v(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function g(_){const y=_.target;y.removeEventListener("dispose",g);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const _ in i)r.deleteBuffer(i[_]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class $x{constructor(e={}){const{canvas:t=zp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const _=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ft,this.toneMapping=ls,this.toneMappingExposure=1;const x=this;let A=!1,w=0,E=0,L=null,M=-1,S=null;const C=new Tt,F=new Tt;let B=null;const O=new Xe(0);let z=0,G=t.width,Y=t.height,W=1,Q=null,ce=null;const ve=new Tt(0,0,G,Y),Oe=new Tt(0,0,G,Y);let Je=!1;const J=new sh;let fe=!1,Ce=!1;const de=new Qe,De=new Qe,He=new D,Fe=new Tt,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function ue(){return L===null?W:1}let N=n;function ze(T,V){return t.getContext(T,V)}try{const T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qc}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",Te,!1),N===null){const V="webgl2";if(N=ze(V,T),N===null)throw ze(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let he,we,xe,Ye,Se,P,b,X,te,le,ee,Ne,ye,Me,rt,pe,Ue,je,Ze,Ie,mt,tt,yt,k;function _e(){he=new nv(N),he.init(),tt=new Vx(N,he),we=new Zg(N,he,e,tt),xe=new kx(N,he),we.reverseDepthBuffer&&f&&xe.buffers.depth.setReversed(!0),Ye=new rv(N),Se=new bx,P=new zx(N,he,xe,Se,we,tt,Ye),b=new Jg(x),X=new tv(x),te=new f0(N),yt=new jg(N,te),le=new iv(N,te,Ye,yt),ee=new av(N,le,te,Ye),Ze=new ov(N,we,P),pe=new $g(Se),Ne=new Sx(x,b,X,he,we,yt,pe),ye=new Kx(x,Se),Me=new Tx,rt=new Lx(he),je=new Yg(x,b,X,xe,ee,d,l),Ue=new Ox(x,ee,we),k=new Zx(N,Ye,we,xe),Ie=new Kg(N,he,Ye),mt=new sv(N,he,Ye),Ye.programs=Ne.programs,x.capabilities=we,x.extensions=he,x.properties=Se,x.renderLists=Me,x.shadowMap=Ue,x.state=xe,x.info=Ye}_e();const $=new Yx(x,N);this.xr=$,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const T=he.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=he.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(G,Y,!1))},this.getSize=function(T){return T.set(G,Y)},this.setSize=function(T,V,q=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,Y=V,t.width=Math.floor(T*W),t.height=Math.floor(V*W),q===!0&&(t.style.width=T+"px",t.style.height=V+"px"),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(G*W,Y*W).floor()},this.setDrawingBufferSize=function(T,V,q){G=T,Y=V,W=q,t.width=Math.floor(T*q),t.height=Math.floor(V*q),this.setViewport(0,0,T,V)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(ve)},this.setViewport=function(T,V,q,j){T.isVector4?ve.set(T.x,T.y,T.z,T.w):ve.set(T,V,q,j),xe.viewport(C.copy(ve).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(Oe)},this.setScissor=function(T,V,q,j){T.isVector4?Oe.set(T.x,T.y,T.z,T.w):Oe.set(T,V,q,j),xe.scissor(F.copy(Oe).multiplyScalar(W).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(T){xe.setScissorTest(Je=T)},this.setOpaqueSort=function(T){Q=T},this.setTransparentSort=function(T){ce=T},this.getClearColor=function(T){return T.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(T=!0,V=!0,q=!0){let j=0;if(T){let H=!1;if(L!==null){const me=L.texture.format;H=me===eh||me===Qc||me===Jc}if(H){const me=L.texture.type,be=me===Ai||me===Is||me===go||me===Ns||me===Kc||me===Zc,Ve=je.getClearColor(),Be=je.getClearAlpha(),nt=Ve.r,at=Ve.g,Ge=Ve.b;be?(m[0]=nt,m[1]=at,m[2]=Ge,m[3]=Be,N.clearBufferuiv(N.COLOR,0,m)):(v[0]=nt,v[1]=at,v[2]=Ge,v[3]=Be,N.clearBufferiv(N.COLOR,0,v))}else j|=N.COLOR_BUFFER_BIT}V&&(j|=N.DEPTH_BUFFER_BIT),q&&(j|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),Me.dispose(),rt.dispose(),Se.dispose(),b.dispose(),X.dispose(),ee.dispose(),yt.dispose(),k.dispose(),Ne.dispose(),$.dispose(),$.removeEventListener("sessionstart",Ro),$.removeEventListener("sessionend",Fr),qe.stop()};function re(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=Ye.autoReset,V=Ue.enabled,q=Ue.autoUpdate,j=Ue.needsUpdate,H=Ue.type;_e(),Ye.autoReset=T,Ue.enabled=V,Ue.autoUpdate=q,Ue.needsUpdate=j,Ue.type=H}function Te(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ot(T){const V=T.target;V.removeEventListener("dispose",ot),zt(V)}function zt(T){qt(T),Se.remove(T)}function qt(T){const V=Se.get(T).programs;V!==void 0&&(V.forEach(function(q){Ne.releaseProgram(q)}),T.isShaderMaterial&&Ne.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,q,j,H,me){V===null&&(V=et);const be=H.isMesh&&H.matrixWorld.determinant()<0,Ve=Hs(T,V,q,j,H);xe.setMaterial(j,be);let Be=q.index,nt=1;if(j.wireframe===!0){if(Be=le.getWireframeAttribute(q),Be===void 0)return;nt=2}const at=q.drawRange,Ge=q.attributes.position;let St=at.start*nt,gt=(at.start+at.count)*nt;me!==null&&(St=Math.max(St,me.start*nt),gt=Math.min(gt,(me.start+me.count)*nt)),Be!==null?(St=Math.max(St,0),gt=Math.min(gt,Be.count)):Ge!=null&&(St=Math.max(St,0),gt=Math.min(gt,Ge.count));const Rt=gt-St;if(Rt<0||Rt===1/0)return;yt.setup(H,j,Ve,q,Be);let en,ut=Ie;if(Be!==null&&(en=te.get(Be),ut=mt,ut.setIndex(en)),H.isMesh)j.wireframe===!0?(xe.setLineWidth(j.wireframeLinewidth*ue()),ut.setMode(N.LINES)):ut.setMode(N.TRIANGLES);else if(H.isLine){let Pe=j.linewidth;Pe===void 0&&(Pe=1),xe.setLineWidth(Pe*ue()),H.isLineSegments?ut.setMode(N.LINES):H.isLineLoop?ut.setMode(N.LINE_LOOP):ut.setMode(N.LINE_STRIP)}else H.isPoints?ut.setMode(N.POINTS):H.isSprite&&ut.setMode(N.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ut.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))ut.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Pe=H._multiDrawStarts,Pn=H._multiDrawCounts,bt=H._multiDrawCount,Ln=Be?te.get(Be).bytesPerElement:1,Wn=Se.get(j).currentProgram.getUniforms();for(let mn=0;mn<bt;mn++)Wn.setValue(N,"_gl_DrawID",mn),ut.render(Pe[mn]/Ln,Pn[mn])}else if(H.isInstancedMesh)ut.renderInstances(St,Rt,H.count);else if(q.isInstancedBufferGeometry){const Pe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Pn=Math.min(q.instanceCount,Pe);ut.renderInstances(St,Rt,Pn)}else ut.render(St,Rt)};function Mt(T,V,q){T.transparent===!0&&T.side===pn&&T.forceSinglePass===!1?(T.side=Hn,T.needsUpdate=!0,ps(T,V,q),T.side=ji,T.needsUpdate=!0,ps(T,V,q),T.side=pn):ps(T,V,q)}this.compile=function(T,V,q=null){q===null&&(q=T),p=rt.get(q),p.init(V),y.push(p),q.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),T!==q&&T.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const j=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const me=H.material;if(me)if(Array.isArray(me))for(let be=0;be<me.length;be++){const Ve=me[be];Mt(Ve,q,H),j.add(Ve)}else Mt(me,q,H),j.add(me)}),y.pop(),p=null,j},this.compileAsync=function(T,V,q=null){const j=this.compile(T,V,q);return new Promise(H=>{function me(){if(j.forEach(function(be){Se.get(be).currentProgram.isReady()&&j.delete(be)}),j.size===0){H(T);return}setTimeout(me,10)}he.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Qt=null;function Qn(T){Qt&&Qt(T)}function Ro(){qe.stop()}function Fr(){qe.start()}const qe=new Kf;qe.setAnimationLoop(Qn),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(T){Qt=T,$.setAnimationLoop(T),T===null?qe.stop():qe.start()},$.addEventListener("sessionstart",Ro),$.addEventListener("sessionend",Fr),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(V),V=$.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,V,L),p=rt.get(T,y.length),p.init(V),y.push(p),De.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),J.setFromProjectionMatrix(De),Ce=this.localClippingEnabled,fe=pe.init(this.clippingPlanes,Ce),g=Me.get(T,_.length),g.init(),_.push(g),$.enabled===!0&&$.isPresenting===!0){const me=x.xr.getDepthSensingMesh();me!==null&&zs(me,V,-1/0,x.sortObjects)}zs(T,V,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(Q,ce),ne=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,ne&&je.addToRenderList(g,T),this.info.render.frame++,fe===!0&&pe.beginShadows();const q=p.state.shadowsArray;Ue.render(q,T,V),fe===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=g.opaque,H=g.transmissive;if(p.setupLights(),V.isArrayCamera){const me=V.cameras;if(H.length>0)for(let be=0,Ve=me.length;be<Ve;be++){const Be=me[be];ds(j,H,T,Be)}ne&&je.render(T);for(let be=0,Ve=me.length;be<Ve;be++){const Be=me[be];Co(g,T,Be,Be.viewport)}}else H.length>0&&ds(j,H,T,V),ne&&je.render(T),Co(g,T,V);L!==null&&(P.updateMultisampleRenderTarget(L),P.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(x,T,V),yt.resetDefaultState(),M=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],fe===!0&&pe.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function zs(T,V,q,j){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||J.intersectsSprite(T)){j&&Fe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(De);const be=ee.update(T),Ve=T.material;Ve.visible&&g.push(T,be,Ve,q,Fe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||J.intersectsObject(T))){const be=ee.update(T),Ve=T.material;if(j&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Fe.copy(T.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Fe.copy(be.boundingSphere.center)),Fe.applyMatrix4(T.matrixWorld).applyMatrix4(De)),Array.isArray(Ve)){const Be=be.groups;for(let nt=0,at=Be.length;nt<at;nt++){const Ge=Be[nt],St=Ve[Ge.materialIndex];St&&St.visible&&g.push(T,be,St,q,Fe.z,Ge)}}else Ve.visible&&g.push(T,be,Ve,q,Fe.z,null)}}const me=T.children;for(let be=0,Ve=me.length;be<Ve;be++)zs(me[be],V,q,j)}function Co(T,V,q,j){const H=T.opaque,me=T.transmissive,be=T.transparent;p.setupLightsView(q),fe===!0&&pe.setGlobalState(x.clippingPlanes,q),j&&xe.viewport(C.copy(j)),H.length>0&&wn(H,V,q),me.length>0&&wn(me,V,q),be.length>0&&wn(be,V,q),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function ds(T,V,q,j){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new Rn(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float")?Gn:Ai,minFilter:Wi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace}));const me=p.state.transmissionRenderTarget[j.id],be=j.viewport||C;me.setSize(be.z,be.w);const Ve=x.getRenderTarget();x.setRenderTarget(me),x.getClearColor(O),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),x.clear(),ne&&je.render(q);const Be=x.toneMapping;x.toneMapping=ls;const nt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),fe===!0&&pe.setGlobalState(x.clippingPlanes,j),wn(T,q,j),P.updateMultisampleRenderTarget(me),P.updateRenderTargetMipmap(me),he.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Ge=0,St=V.length;Ge<St;Ge++){const gt=V[Ge],Rt=gt.object,en=gt.geometry,ut=gt.material,Pe=gt.group;if(ut.side===pn&&Rt.layers.test(j.layers)){const Pn=ut.side;ut.side=Hn,ut.needsUpdate=!0,Di(Rt,q,j,en,ut,Pe),ut.side=Pn,ut.needsUpdate=!0,at=!0}}at===!0&&(P.updateMultisampleRenderTarget(me),P.updateRenderTargetMipmap(me))}x.setRenderTarget(Ve),x.setClearColor(O,z),nt!==void 0&&(j.viewport=nt),x.toneMapping=Be}function wn(T,V,q){const j=V.isScene===!0?V.overrideMaterial:null;for(let H=0,me=T.length;H<me;H++){const be=T[H],Ve=be.object,Be=be.geometry,nt=j===null?be.material:j,at=be.group;Ve.layers.test(q.layers)&&Di(Ve,V,q,Be,nt,at)}}function Di(T,V,q,j,H,me){T.onBeforeRender(x,V,q,j,H,me),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(x,V,q,j,T,me),H.transparent===!0&&H.side===pn&&H.forceSinglePass===!1?(H.side=Hn,H.needsUpdate=!0,x.renderBufferDirect(q,V,j,H,T,me),H.side=ji,H.needsUpdate=!0,x.renderBufferDirect(q,V,j,H,T,me),H.side=pn):x.renderBufferDirect(q,V,j,H,T,me),T.onAfterRender(x,V,q,j,H,me)}function ps(T,V,q){V.isScene!==!0&&(V=et);const j=Se.get(T),H=p.state.lights,me=p.state.shadowsArray,be=H.state.version,Ve=Ne.getParameters(T,H.state,me,V,q),Be=Ne.getProgramCacheKey(Ve);let nt=j.programs;j.environment=T.isMeshStandardMaterial?V.environment:null,j.fog=V.fog,j.envMap=(T.isMeshStandardMaterial?X:b).get(T.envMap||j.environment),j.envMapRotation=j.environment!==null&&T.envMap===null?V.environmentRotation:T.envMapRotation,nt===void 0&&(T.addEventListener("dispose",ot),nt=new Map,j.programs=nt);let at=nt.get(Be);if(at!==void 0){if(j.currentProgram===at&&j.lightsStateVersion===be)return Po(T,Ve),at}else Ve.uniforms=Ne.getUniforms(T),T.onBeforeCompile(Ve,x),at=Ne.acquireProgram(Ve,Be),nt.set(Be,at),j.uniforms=Ve.uniforms;const Ge=j.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ge.clippingPlanes=pe.uniform),Po(T,Ve),j.needsLights=Ii(T),j.lightsStateVersion=be,j.needsLights&&(Ge.ambientLightColor.value=H.state.ambient,Ge.lightProbe.value=H.state.probe,Ge.directionalLights.value=H.state.directional,Ge.directionalLightShadows.value=H.state.directionalShadow,Ge.spotLights.value=H.state.spot,Ge.spotLightShadows.value=H.state.spotShadow,Ge.rectAreaLights.value=H.state.rectArea,Ge.ltc_1.value=H.state.rectAreaLTC1,Ge.ltc_2.value=H.state.rectAreaLTC2,Ge.pointLights.value=H.state.point,Ge.pointLightShadows.value=H.state.pointShadow,Ge.hemisphereLights.value=H.state.hemi,Ge.directionalShadowMap.value=H.state.directionalShadowMap,Ge.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ge.spotShadowMap.value=H.state.spotShadowMap,Ge.spotLightMatrix.value=H.state.spotLightMatrix,Ge.spotLightMap.value=H.state.spotLightMap,Ge.pointShadowMap.value=H.state.pointShadowMap,Ge.pointShadowMatrix.value=H.state.pointShadowMatrix),j.currentProgram=at,j.uniformsList=null,at}function Vs(T){if(T.uniformsList===null){const V=T.currentProgram.getUniforms();T.uniformsList=Ea.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function Po(T,V){const q=Se.get(T);q.outputColorSpace=V.outputColorSpace,q.batching=V.batching,q.batchingColor=V.batchingColor,q.instancing=V.instancing,q.instancingColor=V.instancingColor,q.instancingMorph=V.instancingMorph,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}function Hs(T,V,q,j,H){V.isScene!==!0&&(V=et),P.resetTextureUnits();const me=V.fog,be=j.isMeshStandardMaterial?V.environment:null,Ve=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Fn,Be=(j.isMeshStandardMaterial?X:b).get(j.envMap||be),nt=j.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,at=!!q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ge=!!q.morphAttributes.position,St=!!q.morphAttributes.normal,gt=!!q.morphAttributes.color;let Rt=ls;j.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Rt=x.toneMapping);const en=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ut=en!==void 0?en.length:0,Pe=Se.get(j),Pn=p.state.lights;if(fe===!0&&(Ce===!0||T!==S)){const ae=T===S&&j.id===M;pe.setState(j,T,ae)}let bt=!1;j.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Pn.state.version||Pe.outputColorSpace!==Ve||H.isBatchedMesh&&Pe.batching===!1||!H.isBatchedMesh&&Pe.batching===!0||H.isBatchedMesh&&Pe.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Pe.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Pe.instancing===!1||!H.isInstancedMesh&&Pe.instancing===!0||H.isSkinnedMesh&&Pe.skinning===!1||!H.isSkinnedMesh&&Pe.skinning===!0||H.isInstancedMesh&&Pe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Pe.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Pe.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Pe.instancingMorph===!1&&H.morphTexture!==null||Pe.envMap!==Be||j.fog===!0&&Pe.fog!==me||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==pe.numPlanes||Pe.numIntersection!==pe.numIntersection)||Pe.vertexAlphas!==nt||Pe.vertexTangents!==at||Pe.morphTargets!==Ge||Pe.morphNormals!==St||Pe.morphColors!==gt||Pe.toneMapping!==Rt||Pe.morphTargetsCount!==ut)&&(bt=!0):(bt=!0,Pe.__version=j.version);let Ln=Pe.currentProgram;bt===!0&&(Ln=ps(j,V,H));let Wn=!1,mn=!1,R=!1;const U=Ln.getUniforms(),Z=Pe.uniforms;if(xe.useProgram(Ln.program)&&(Wn=!0,mn=!0,R=!0),j.id!==M&&(M=j.id,mn=!0),Wn||S!==T){xe.buffers.depth.getReversed()?(de.copy(T.projectionMatrix),Hp(de),Gp(de),U.setValue(N,"projectionMatrix",de)):U.setValue(N,"projectionMatrix",T.projectionMatrix),U.setValue(N,"viewMatrix",T.matrixWorldInverse);const oe=U.map.cameraPosition;oe!==void 0&&oe.setValue(N,He.setFromMatrixPosition(T.matrixWorld)),we.logarithmicDepthBuffer&&U.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&U.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,mn=!0,R=!0)}if(H.isSkinnedMesh){U.setOptional(N,H,"bindMatrix"),U.setOptional(N,H,"bindMatrixInverse");const ae=H.skeleton;ae&&(ae.boneTexture===null&&ae.computeBoneTexture(),U.setValue(N,"boneTexture",ae.boneTexture,P))}H.isBatchedMesh&&(U.setOptional(N,H,"batchingTexture"),U.setValue(N,"batchingTexture",H._matricesTexture,P),U.setOptional(N,H,"batchingIdTexture"),U.setValue(N,"batchingIdTexture",H._indirectTexture,P),U.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null&&U.setValue(N,"batchingColorTexture",H._colorsTexture,P));const K=q.morphAttributes;if((K.position!==void 0||K.normal!==void 0||K.color!==void 0)&&Ze.update(H,q,Ln),(mn||Pe.receiveShadow!==H.receiveShadow)&&(Pe.receiveShadow=H.receiveShadow,U.setValue(N,"receiveShadow",H.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Z.envMap.value=Be,Z.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&V.environment!==null&&(Z.envMapIntensity.value=V.environmentIntensity),mn&&(U.setValue(N,"toneMappingExposure",x.toneMappingExposure),Pe.needsLights&&Za(Z,R),me&&j.fog===!0&&ye.refreshFogUniforms(Z,me),ye.refreshMaterialUniforms(Z,j,W,Y,p.state.transmissionRenderTarget[T.id]),Ea.upload(N,Vs(Pe),Z,P)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Ea.upload(N,Vs(Pe),Z,P),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&U.setValue(N,"center",H.center),U.setValue(N,"modelViewMatrix",H.modelViewMatrix),U.setValue(N,"normalMatrix",H.normalMatrix),U.setValue(N,"modelMatrix",H.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const ae=j.uniformsGroups;for(let oe=0,Ee=ae.length;oe<Ee;oe++){const ge=ae[oe];k.update(ge,Ln),k.bind(ge,Ln)}}return Ln}function Za(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function Ii(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,V,q){Se.get(T.texture).__webglTexture=V,Se.get(T.depthTexture).__webglTexture=q;const j=Se.get(T);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=q===void 0,j.__autoAllocateDepthBuffer||he.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,V){const q=Se.get(T);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,q=0){L=T,w=V,E=q;let j=!0,H=null,me=!1,be=!1;if(T){const Be=Se.get(T);if(Be.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(N.FRAMEBUFFER,null),j=!1;else if(Be.__webglFramebuffer===void 0)P.setupRenderTarget(T);else if(Be.__hasExternalTextures)P.rebindTextures(T,Se.get(T.texture).__webglTexture,Se.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ge=T.depthTexture;if(Be.__boundDepthTexture!==Ge){if(Ge!==null&&Se.has(Ge)&&(T.width!==Ge.image.width||T.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(T)}}const nt=T.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(be=!0);const at=Se.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(at[V])?H=at[V][q]:H=at[V],me=!0):T.samples>0&&P.useMultisampledRTT(T)===!1?H=Se.get(T).__webglMultisampledFramebuffer:Array.isArray(at)?H=at[q]:H=at,C.copy(T.viewport),F.copy(T.scissor),B=T.scissorTest}else C.copy(ve).multiplyScalar(W).floor(),F.copy(Oe).multiplyScalar(W).floor(),B=Je;if(xe.bindFramebuffer(N.FRAMEBUFFER,H)&&j&&xe.drawBuffers(T,H),xe.viewport(C),xe.scissor(F),xe.setScissorTest(B),me){const Be=Se.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+V,Be.__webglTexture,q)}else if(be){const Be=Se.get(T.texture),nt=V||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Be.__webglTexture,q||0,nt)}M=-1},this.readRenderTargetPixels=function(T,V,q,j,H,me,be){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Se.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&be!==void 0&&(Ve=Ve[be]),Ve){xe.bindFramebuffer(N.FRAMEBUFFER,Ve);try{const Be=T.texture,nt=Be.format,at=Be.type;if(!we.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-j&&q>=0&&q<=T.height-H&&N.readPixels(V,q,j,H,tt.convert(nt),tt.convert(at),me)}finally{const Be=L!==null?Se.get(L).__webglFramebuffer:null;xe.bindFramebuffer(N.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(T,V,q,j,H,me,be){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=Se.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&be!==void 0&&(Ve=Ve[be]),Ve){const Be=T.texture,nt=Be.format,at=Be.type;if(!we.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=T.width-j&&q>=0&&q<=T.height-H){xe.bindFramebuffer(N.FRAMEBUFFER,Ve);const Ge=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ge),N.bufferData(N.PIXEL_PACK_BUFFER,me.byteLength,N.STREAM_READ),N.readPixels(V,q,j,H,tt.convert(nt),tt.convert(at),0);const St=L!==null?Se.get(L).__webglFramebuffer:null;xe.bindFramebuffer(N.FRAMEBUFFER,St);const gt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Vp(N,gt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ge),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,me),N.deleteBuffer(Ge),N.deleteSync(gt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,V=null,q=0){T.isTexture!==!0&&(no("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,T=arguments[1]);const j=Math.pow(2,-q),H=Math.floor(T.image.width*j),me=Math.floor(T.image.height*j),be=V!==null?V.x:0,Ve=V!==null?V.y:0;P.setTexture2D(T,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,be,Ve,H,me),xe.unbindTexture()},this.copyTextureToTexture=function(T,V,q=null,j=null,H=0){T.isTexture!==!0&&(no("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,T=arguments[1],V=arguments[2],H=arguments[3]||0,q=null);let me,be,Ve,Be,nt,at,Ge,St,gt;const Rt=T.isCompressedTexture?T.mipmaps[H]:T.image;q!==null?(me=q.max.x-q.min.x,be=q.max.y-q.min.y,Ve=q.isBox3?q.max.z-q.min.z:1,Be=q.min.x,nt=q.min.y,at=q.isBox3?q.min.z:0):(me=Rt.width,be=Rt.height,Ve=Rt.depth||1,Be=0,nt=0,at=0),j!==null?(Ge=j.x,St=j.y,gt=j.z):(Ge=0,St=0,gt=0);const en=tt.convert(V.format),ut=tt.convert(V.type);let Pe;V.isData3DTexture?(P.setTexture3D(V,0),Pe=N.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(P.setTexture2DArray(V,0),Pe=N.TEXTURE_2D_ARRAY):(P.setTexture2D(V,0),Pe=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,V.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,V.unpackAlignment);const Pn=N.getParameter(N.UNPACK_ROW_LENGTH),bt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ln=N.getParameter(N.UNPACK_SKIP_PIXELS),Wn=N.getParameter(N.UNPACK_SKIP_ROWS),mn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Rt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Rt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Be),N.pixelStorei(N.UNPACK_SKIP_ROWS,nt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,at);const R=T.isDataArrayTexture||T.isData3DTexture,U=V.isDataArrayTexture||V.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Z=Se.get(T),K=Se.get(V),ae=Se.get(Z.__renderTarget),oe=Se.get(K.__renderTarget);xe.bindFramebuffer(N.READ_FRAMEBUFFER,ae.__webglFramebuffer),xe.bindFramebuffer(N.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let Ee=0;Ee<Ve;Ee++)R&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Se.get(T).__webglTexture,H,at+Ee),T.isDepthTexture?(U&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Se.get(V).__webglTexture,H,gt+Ee),N.blitFramebuffer(Be,nt,me,be,Ge,St,me,be,N.DEPTH_BUFFER_BIT,N.NEAREST)):U?N.copyTexSubImage3D(Pe,H,Ge,St,gt+Ee,Be,nt,me,be):N.copyTexSubImage2D(Pe,H,Ge,St,gt+Ee,Be,nt,me,be);xe.bindFramebuffer(N.READ_FRAMEBUFFER,null),xe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else U?T.isDataTexture||T.isData3DTexture?N.texSubImage3D(Pe,H,Ge,St,gt,me,be,Ve,en,ut,Rt.data):V.isCompressedArrayTexture?N.compressedTexSubImage3D(Pe,H,Ge,St,gt,me,be,Ve,en,Rt.data):N.texSubImage3D(Pe,H,Ge,St,gt,me,be,Ve,en,ut,Rt):T.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,H,Ge,St,me,be,en,ut,Rt.data):T.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,H,Ge,St,Rt.width,Rt.height,en,Rt.data):N.texSubImage2D(N.TEXTURE_2D,H,Ge,St,me,be,en,ut,Rt);N.pixelStorei(N.UNPACK_ROW_LENGTH,Pn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,bt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ln),N.pixelStorei(N.UNPACK_SKIP_ROWS,Wn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,mn),H===0&&V.generateMipmaps&&N.generateMipmap(Pe),xe.unbindTexture()},this.copyTextureToTexture3D=function(T,V,q=null,j=null,H=0){return T.isTexture!==!0&&(no("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,j=arguments[1]||null,T=arguments[2],V=arguments[3],H=arguments[4]||0),no('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,V,q,j,H)},this.initRenderTarget=function(T){Se.get(T).__webglFramebuffer===void 0&&P.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?P.setTextureCube(T,0):T.isData3DTexture?P.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?P.setTexture2DArray(T,0):P.setTexture2D(T,0),xe.unbindTexture()},this.resetState=function(){w=0,E=0,L=null,xe.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}}class ah{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xe(e),this.density=t}clone(){return new ah(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ed extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class td{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Lc,this.updateRanges=[],this.version=0,this.uuid=ci()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Dn=new D;class yo{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=xi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=xi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=xi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=xi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=xi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new yo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class gr extends hi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let sr;const Gr=new D,rr=new D,or=new D,ar=new se,Wr=new se,nd=new Qe,Jo=new D,Xr=new D,Qo=new D,Ru=new se,Al=new se,Cu=new se;class cs extends Ot{constructor(e=new gr){if(super(),this.isSprite=!0,this.type="Sprite",sr===void 0){sr=new Ht;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new td(t,5);sr.setIndex([0,1,2,0,2,3]),sr.setAttribute("position",new yo(n,3,0,!1)),sr.setAttribute("uv",new yo(n,2,3,!1))}this.geometry=sr,this.material=e,this.center=new se(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rr.setFromMatrixScale(this.matrixWorld),nd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),or.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rr.multiplyScalar(-or.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;ea(Jo.set(-.5,-.5,0),or,o,rr,i,s),ea(Xr.set(.5,-.5,0),or,o,rr,i,s),ea(Qo.set(.5,.5,0),or,o,rr,i,s),Ru.set(0,0),Al.set(1,0),Cu.set(1,1);let a=e.ray.intersectTriangle(Jo,Xr,Qo,!1,Gr);if(a===null&&(ea(Xr.set(-.5,.5,0),or,o,rr,i,s),Al.set(0,1),a=e.ray.intersectTriangle(Jo,Qo,Xr,!1,Gr),a===null))return;const l=e.ray.origin.distanceTo(Gr);l<e.near||l>e.far||t.push({distance:l,point:Gr.clone(),uv:li.getInterpolation(Gr,Jo,Xr,Qo,Ru,Al,Cu,new se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ea(r,e,t,n,i,s){ar.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Wr.x=s*ar.x-i*ar.y,Wr.y=i*ar.x+s*ar.y):Wr.copy(ar),r.copy(e),r.x+=Wr.x,r.y+=Wr.y,r.applyMatrix4(nd)}const Pu=new D,Lu=new Tt,Du=new Tt,Jx=new D,Iu=new Qe,ta=new D,Rl=new bi,Nu=new Qe,Cl=new Dr;class id extends ie{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Lh,this.bindMatrix=new Qe,this.bindMatrixInverse=new Qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ui),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ta),this.boundingBox.expandByPoint(ta)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new bi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ta),this.boundingSphere.expandByPoint(ta)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rl.copy(this.boundingSphere),Rl.applyMatrix4(i),e.ray.intersectsSphere(Rl)!==!1&&(Nu.copy(i).invert(),Cl.copy(e.ray).applyMatrix4(Nu),!(this.boundingBox!==null&&Cl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Cl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Tt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Lh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===up?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Lu.fromBufferAttribute(i.attributes.skinIndex,e),Du.fromBufferAttribute(i.attributes.skinWeight,e),Pu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Du.getComponent(s);if(o!==0){const a=Lu.getComponent(s);Iu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Jx.copy(Pu).applyMatrix4(Iu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class lh extends Ot{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ha extends an{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Jt,h=Jt,u,f){super(null,o,a,l,c,h,i,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Uu=new Qe,Qx=new Qe;class Ga{constructor(e=[],t=[]){this.uuid=ci(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Qx;Uu.multiplyMatrices(a,t[s]),Uu.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ga(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ha(t,e,e,Kn,yi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new lh),this.bones.push(o),this.boneInverses.push(new Qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Nc extends Wt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const lr=new Qe,Ou=new Qe,na=[],Fu=new ui,e1=new Qe,qr=new ie,Yr=new bi;class t1 extends ie{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Nc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,e1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,lr),Fu.copy(e.boundingBox).applyMatrix4(lr),this.boundingBox.union(Fu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,lr),Yr.copy(e.boundingSphere).applyMatrix4(lr),this.boundingSphere.union(Yr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(qr.geometry=this.geometry,qr.material=this.material,qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yr.copy(this.boundingSphere),Yr.applyMatrix4(n),e.ray.intersectsSphere(Yr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,lr),Ou.multiplyMatrices(n,lr),qr.matrixWorld=Ou,qr.raycast(e,na);for(let o=0,a=na.length;o<a;o++){const l=na[o];l.instanceId=s,l.object=this,t.push(l)}na.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Nc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ha(new Float32Array(i*this.count),i,this.count,$c,yi));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ch extends hi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ia=new D,Na=new D,ku=new Qe,jr=new Dr,ia=new bi,Pl=new D,Bu=new D;class hh extends Ot{constructor(e=new Ht,t=new ch){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ia.fromBufferAttribute(t,i-1),Na.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ia.distanceTo(Na);e.setAttribute("lineDistance",new xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(i),ia.radius+=s,e.ray.intersectsSphere(ia)===!1)return;ku.copy(i).invert(),jr.copy(e.ray).applyMatrix4(ku);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=d,g=m-1;v<g;v+=c){const p=h.getX(v),_=h.getX(v+1),y=sa(this,e,jr,l,p,_);y&&t.push(y)}if(this.isLineLoop){const v=h.getX(m-1),g=h.getX(d),p=sa(this,e,jr,l,v,g);p&&t.push(p)}}else{const d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let v=d,g=m-1;v<g;v+=c){const p=sa(this,e,jr,l,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=sa(this,e,jr,l,m-1,d);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function sa(r,e,t,n,i,s){const o=r.geometry.attributes.position;if(Ia.fromBufferAttribute(o,i),Na.fromBufferAttribute(o,s),t.distanceSqToSegment(Ia,Na,Pl,Bu)>n)return;Pl.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Pl);if(!(l<e.near||l>e.far))return{distance:l,point:Bu.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const zu=new D,Vu=new D;class sd extends hh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)zu.fromBufferAttribute(t,i),Vu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+zu.distanceTo(Vu);e.setAttribute("lineDistance",new xt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class n1 extends hh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class rd extends hi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hu=new Qe,Uc=new Dr,ra=new bi,oa=new D;class od extends Ot{constructor(e=new Ht,t=new rd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(i),ra.radius+=s,e.ray.intersectsSphere(ra)===!1)return;Hu.copy(i).invert(),Uc.copy(e.ray).applyMatrix4(Hu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,v=d;m<v;m++){const g=c.getX(m);oa.fromBufferAttribute(u,g),Gu(oa,g,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,v=d;m<v;m++)oa.fromBufferAttribute(u,m),Gu(oa,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Gu(r,e,t,n,i,s,o){const a=Uc.distanceSqToPoint(r);if(a<t){const l=new D;Uc.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Ki extends an{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ci{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new se:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new D,i=[],s=[],o=[],a=new D,l=new Qe;for(let d=0;d<=e;d++){const m=d/e;i[d]=this.getTangentAt(m,new D)}s[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(rn(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(rn(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class uh extends Ci{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new se){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class i1 extends uh{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function fh(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const aa=new D,Ll=new fh,Dl=new fh,Il=new fh;class Aa extends Ci{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new D){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(aa.subVectors(i[0],i[1]).add(i[0]),c=aa);const u=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(aa.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=aa),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),Ll.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,v,g),Dl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,v,g),Il.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,v,g)}else this.curveType==="catmullrom"&&(Ll.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Dl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Il.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Ll.calc(l),Dl.calc(l),Il.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new D().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Wu(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function s1(r,e){const t=1-r;return t*t*e}function r1(r,e){return 2*(1-r)*r*e}function o1(r,e){return r*r*e}function lo(r,e,t,n){return s1(r,e)+r1(r,t)+o1(r,n)}function a1(r,e){const t=1-r;return t*t*t*e}function l1(r,e){const t=1-r;return 3*t*t*r*e}function c1(r,e){return 3*(1-r)*r*r*e}function h1(r,e){return r*r*r*e}function co(r,e,t,n,i){return a1(r,e)+l1(r,t)+c1(r,n)+h1(r,i)}class ad extends Ci{constructor(e=new se,t=new se,n=new se,i=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new se){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(co(e,i.x,s.x,o.x,a.x),co(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class u1 extends Ci{constructor(e=new D,t=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new D){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(co(e,i.x,s.x,o.x,a.x),co(e,i.y,s.y,o.y,a.y),co(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ld extends Ci{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class f1 extends Ci{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cd extends Ci{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(lo(e,i.x,s.x,o.x),lo(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hd extends Ci{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(lo(e,i.x,s.x,o.x),lo(e,i.y,s.y,o.y),lo(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ud extends Ci{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Wu(a,l.x,c.x,h.x,u.x),Wu(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new se().fromArray(i))}return this}}var Ua=Object.freeze({__proto__:null,ArcCurve:i1,CatmullRomCurve3:Aa,CubicBezierCurve:ad,CubicBezierCurve3:u1,EllipseCurve:uh,LineCurve:ld,LineCurve3:f1,QuadraticBezierCurve:cd,QuadraticBezierCurve3:hd,SplineCurve:ud});class d1 extends Ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ua[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Ua[i.type]().fromJSON(i))}return this}}class Oc extends d1{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ld(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new cd(this.currentPoint.clone(),new se(e,t),new se(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new ad(this.currentPoint.clone(),new se(e,t),new se(n,i),new se(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new ud(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const c=new uh(e,t,n,i,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ks extends Ht{constructor(e=[new se(0,-.5),new se(.5,0),new se(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=rn(i,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],h=1/t,u=new D,f=new se,d=new D,m=new D,v=new D;let g=0,p=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,d.x=p*1,d.y=-g,d.z=p*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:g=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(m)}for(let _=0;_<=t;_++){const y=n+_*h*i,x=Math.sin(y),A=Math.cos(y);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*x,u.y=e[w].y,u.z=e[w].x*A,o.push(u.x,u.y,u.z),f.x=_/t,f.y=w/(e.length-1),a.push(f.x,f.y);const E=l[3*w+0]*x,L=l[3*w+1],M=l[3*w+0]*A;c.push(E,L,M)}}for(let _=0;_<t;_++)for(let y=0;y<e.length-1;y++){const x=y+_*e.length,A=x,w=x+e.length,E=x+e.length+1,L=x+1;s.push(A,w,L),s.push(E,L,w)}this.setIndex(s),this.setAttribute("position",new xt(o,3)),this.setAttribute("uv",new xt(a,2)),this.setAttribute("normal",new xt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ks(e.points,e.segments,e.phiStart,e.phiLength)}}class Ls extends ks{constructor(e=1,t=1,n=4,i=8){const s=new Oc;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Ls(e.radius,e.length,e.capSegments,e.radialSegments)}}class rs extends Ht{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new D,h=new se;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=n+u/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new xt(o,3)),this.setAttribute("normal",new xt(a,3)),this.setAttribute("uv",new xt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Nt extends Ht{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],f=[],d=[];let m=0;const v=[],g=n/2;let p=0;_(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new xt(u,3)),this.setAttribute("normal",new xt(f,3)),this.setAttribute("uv",new xt(d,2));function _(){const x=new D,A=new D;let w=0;const E=(t-e)/n;for(let L=0;L<=s;L++){const M=[],S=L/s,C=S*(t-e)+e;for(let F=0;F<=i;F++){const B=F/i,O=B*l+a,z=Math.sin(O),G=Math.cos(O);A.x=C*z,A.y=-S*n+g,A.z=C*G,u.push(A.x,A.y,A.z),x.set(z,E,G).normalize(),f.push(x.x,x.y,x.z),d.push(B,1-S),M.push(m++)}v.push(M)}for(let L=0;L<i;L++)for(let M=0;M<s;M++){const S=v[M][L],C=v[M+1][L],F=v[M+1][L+1],B=v[M][L+1];(e>0||M!==0)&&(h.push(S,C,B),w+=3),(t>0||M!==s-1)&&(h.push(C,F,B),w+=3)}c.addGroup(p,w,0),p+=w}function y(x){const A=m,w=new se,E=new D;let L=0;const M=x===!0?e:t,S=x===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,g*S,0),f.push(0,S,0),d.push(.5,.5),m++;const C=m;for(let F=0;F<=i;F++){const O=F/i*l+a,z=Math.cos(O),G=Math.sin(O);E.x=M*G,E.y=g*S,E.z=M*z,u.push(E.x,E.y,E.z),f.push(0,S,0),w.x=z*.5+.5,w.y=G*.5*S+.5,d.push(w.x,w.y),m++}for(let F=0;F<i;F++){const B=A+F,O=C+F;x===!0?h.push(O,O+1,B):h.push(O+1,O,B),L+=3}c.addGroup(p,L,x===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class To extends Nt{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new To(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Eo extends Oc{constructor(e){super(e),this.uuid=ci(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Oc().fromJSON(i))}return this}}const p1={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=fd(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,u,f,d;if(n&&(s=_1(r,e,s,t)),r.length>80*t){a=c=r[0],l=h=r[1];for(let m=t;m<i;m+=t)u=r[m],f=r[m+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Mo(s,o,t,a,l,d,0),o}};function fd(r,e,t,n,i){let s,o;if(i===P1(r,e,t,n)>0)for(s=e;s<t;s+=n)o=Xu(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=Xu(s,r[s],r[s+1],o);return o&&Wa(o,o.next)&&(bo(o),o=o.next),o}function Os(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Wa(t,t.next)||Xt(t.prev,t,t.next)===0)){if(bo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Mo(r,e,t,n,i,s,o){if(!r)return;!o&&s&&w1(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?g1(r,n,i,s):m1(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),bo(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=v1(Os(r),e,t),Mo(r,e,t,n,i,s,2)):o===2&&x1(r,e,t,n,i,s):Mo(Os(r),e,t,n,i,s,1);break}}}function m1(r){const e=r.prev,t=r,n=r.next;if(Xt(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=i<s?i<o?i:o:s<o?s:o,u=a<l?a<c?a:c:l<c?l:c,f=i>s?i>o?i:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c;let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&ur(i,a,s,l,o,c,m.x,m.y)&&Xt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function g1(r,e,t,n){const i=r.prev,s=r,o=r.next;if(Xt(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,h=i.y,u=s.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,m=h<u?h<f?h:f:u<f?u:f,v=a>l?a>c?a:c:l>c?l:c,g=h>u?h>f?h:f:u>f?u:f,p=Fc(d,m,e,t,n),_=Fc(v,g,e,t,n);let y=r.prevZ,x=r.nextZ;for(;y&&y.z>=p&&x&&x.z<=_;){if(y.x>=d&&y.x<=v&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ur(a,h,l,u,c,f,y.x,y.y)&&Xt(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=d&&x.x<=v&&x.y>=m&&x.y<=g&&x!==i&&x!==o&&ur(a,h,l,u,c,f,x.x,x.y)&&Xt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=v&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ur(a,h,l,u,c,f,y.x,y.y)&&Xt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=_;){if(x.x>=d&&x.x<=v&&x.y>=m&&x.y<=g&&x!==i&&x!==o&&ur(a,h,l,u,c,f,x.x,x.y)&&Xt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function v1(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!Wa(i,s)&&dd(i,n,n.next,s)&&So(i,s)&&So(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),bo(n),bo(n.next),n=r=s),n=n.next}while(n!==r);return Os(n)}function x1(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&A1(o,a)){let l=pd(o,a);o=Os(o,o.next),l=Os(l,l.next),Mo(o,e,t,n,i,s,0),Mo(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function _1(r,e,t,n){const i=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=fd(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(E1(c));for(i.sort(y1),s=0;s<i.length;s++)t=M1(i[s],t);return t}function y1(r,e){return r.x-e.x}function M1(r,e){const t=S1(r,e);if(!t)return e;const n=pd(t,r);return Os(n,n.next),Os(t,t.next)}function S1(r,e){let t=e,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===s))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,u;t=i;do s>=t.x&&t.x>=l&&s!==t.x&&ur(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(s-t.x),So(t,r)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&b1(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function b1(r,e){return Xt(r.prev,r,e.prev)<0&&Xt(e.next,r,r.next)<0}function w1(r,e,t,n){let i=r;do i.z===0&&(i.z=Fc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,T1(i)}function T1(r){let e,t,n,i,s,o,a,l,c=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(o>1);return r}function Fc(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function E1(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function ur(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function A1(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!R1(r,e)&&(So(r,e)&&So(e,r)&&C1(r,e)&&(Xt(r.prev,r,e.prev)||Xt(r,e.prev,e))||Wa(r,e)&&Xt(r.prev,r,r.next)>0&&Xt(e.prev,e,e.next)>0)}function Xt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Wa(r,e){return r.x===e.x&&r.y===e.y}function dd(r,e,t,n){const i=ca(Xt(r,e,t)),s=ca(Xt(r,e,n)),o=ca(Xt(t,n,r)),a=ca(Xt(t,n,e));return!!(i!==s&&o!==a||i===0&&la(r,t,e)||s===0&&la(r,n,e)||o===0&&la(t,r,n)||a===0&&la(t,e,n))}function la(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function ca(r){return r>0?1:r<0?-1:0}function R1(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&dd(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function So(r,e){return Xt(r.prev,r,r.next)<0?Xt(r,e,r.next)>=0&&Xt(r,r.prev,e)>=0:Xt(r,e,r.prev)<0||Xt(r,r.next,e)<0}function C1(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function pd(r,e){const t=new kc(r.i,r.x,r.y),n=new kc(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Xu(r,e,t,n){const i=new kc(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function bo(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function kc(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function P1(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class hs{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return hs.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];qu(e),Yu(n,e);let o=e.length;t.forEach(qu);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Yu(n,t[l]);const a=p1.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function qu(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Yu(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Xa extends Ht{constructor(e=new Eo([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new xt(i,3)),this.setAttribute("uv",new xt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:L1;let y,x=!1,A,w,E,L;p&&(y=p.getSpacedPoints(h),x=!0,f=!1,A=p.computeFrenetFrames(h,!1),w=new D,E=new D,L=new D),f||(g=0,d=0,m=0,v=0);const M=a.extractPoints(c);let S=M.shape;const C=M.holes;if(!hs.isClockWise(S)){S=S.reverse();for(let ne=0,ue=C.length;ne<ue;ne++){const N=C[ne];hs.isClockWise(N)&&(C[ne]=N.reverse())}}const B=hs.triangulateShape(S,C),O=S;for(let ne=0,ue=C.length;ne<ue;ne++){const N=C[ne];S=S.concat(N)}function z(ne,ue,N){return ue||console.error("THREE.ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(ue,N)}const G=S.length,Y=B.length;function W(ne,ue,N){let ze,he,we;const xe=ne.x-ue.x,Ye=ne.y-ue.y,Se=N.x-ne.x,P=N.y-ne.y,b=xe*xe+Ye*Ye,X=xe*P-Ye*Se;if(Math.abs(X)>Number.EPSILON){const te=Math.sqrt(b),le=Math.sqrt(Se*Se+P*P),ee=ue.x-Ye/te,Ne=ue.y+xe/te,ye=N.x-P/le,Me=N.y+Se/le,rt=((ye-ee)*P-(Me-Ne)*Se)/(xe*P-Ye*Se);ze=ee+xe*rt-ne.x,he=Ne+Ye*rt-ne.y;const pe=ze*ze+he*he;if(pe<=2)return new se(ze,he);we=Math.sqrt(pe/2)}else{let te=!1;xe>Number.EPSILON?Se>Number.EPSILON&&(te=!0):xe<-Number.EPSILON?Se<-Number.EPSILON&&(te=!0):Math.sign(Ye)===Math.sign(P)&&(te=!0),te?(ze=-Ye,he=xe,we=Math.sqrt(b)):(ze=xe,he=Ye,we=Math.sqrt(b/2))}return new se(ze/we,he/we)}const Q=[];for(let ne=0,ue=O.length,N=ue-1,ze=ne+1;ne<ue;ne++,N++,ze++)N===ue&&(N=0),ze===ue&&(ze=0),Q[ne]=W(O[ne],O[N],O[ze]);const ce=[];let ve,Oe=Q.concat();for(let ne=0,ue=C.length;ne<ue;ne++){const N=C[ne];ve=[];for(let ze=0,he=N.length,we=he-1,xe=ze+1;ze<he;ze++,we++,xe++)we===he&&(we=0),xe===he&&(xe=0),ve[ze]=W(N[ze],N[we],N[xe]);ce.push(ve),Oe=Oe.concat(ve)}for(let ne=0;ne<g;ne++){const ue=ne/g,N=d*Math.cos(ue*Math.PI/2),ze=m*Math.sin(ue*Math.PI/2)+v;for(let he=0,we=O.length;he<we;he++){const xe=z(O[he],Q[he],ze);de(xe.x,xe.y,-N)}for(let he=0,we=C.length;he<we;he++){const xe=C[he];ve=ce[he];for(let Ye=0,Se=xe.length;Ye<Se;Ye++){const P=z(xe[Ye],ve[Ye],ze);de(P.x,P.y,-N)}}}const Je=m+v;for(let ne=0;ne<G;ne++){const ue=f?z(S[ne],Oe[ne],Je):S[ne];x?(E.copy(A.normals[0]).multiplyScalar(ue.x),w.copy(A.binormals[0]).multiplyScalar(ue.y),L.copy(y[0]).add(E).add(w),de(L.x,L.y,L.z)):de(ue.x,ue.y,0)}for(let ne=1;ne<=h;ne++)for(let ue=0;ue<G;ue++){const N=f?z(S[ue],Oe[ue],Je):S[ue];x?(E.copy(A.normals[ne]).multiplyScalar(N.x),w.copy(A.binormals[ne]).multiplyScalar(N.y),L.copy(y[ne]).add(E).add(w),de(L.x,L.y,L.z)):de(N.x,N.y,u/h*ne)}for(let ne=g-1;ne>=0;ne--){const ue=ne/g,N=d*Math.cos(ue*Math.PI/2),ze=m*Math.sin(ue*Math.PI/2)+v;for(let he=0,we=O.length;he<we;he++){const xe=z(O[he],Q[he],ze);de(xe.x,xe.y,u+N)}for(let he=0,we=C.length;he<we;he++){const xe=C[he];ve=ce[he];for(let Ye=0,Se=xe.length;Ye<Se;Ye++){const P=z(xe[Ye],ve[Ye],ze);x?de(P.x,P.y+y[h-1].y,y[h-1].x+N):de(P.x,P.y,u+N)}}}J(),fe();function J(){const ne=i.length/3;if(f){let ue=0,N=G*ue;for(let ze=0;ze<Y;ze++){const he=B[ze];De(he[2]+N,he[1]+N,he[0]+N)}ue=h+g*2,N=G*ue;for(let ze=0;ze<Y;ze++){const he=B[ze];De(he[0]+N,he[1]+N,he[2]+N)}}else{for(let ue=0;ue<Y;ue++){const N=B[ue];De(N[2],N[1],N[0])}for(let ue=0;ue<Y;ue++){const N=B[ue];De(N[0]+G*h,N[1]+G*h,N[2]+G*h)}}n.addGroup(ne,i.length/3-ne,0)}function fe(){const ne=i.length/3;let ue=0;Ce(O,ue),ue+=O.length;for(let N=0,ze=C.length;N<ze;N++){const he=C[N];Ce(he,ue),ue+=he.length}n.addGroup(ne,i.length/3-ne,1)}function Ce(ne,ue){let N=ne.length;for(;--N>=0;){const ze=N;let he=N-1;he<0&&(he=ne.length-1);for(let we=0,xe=h+g*2;we<xe;we++){const Ye=G*we,Se=G*(we+1),P=ue+ze+Ye,b=ue+he+Ye,X=ue+he+Se,te=ue+ze+Se;He(P,b,X,te)}}}function de(ne,ue,N){l.push(ne),l.push(ue),l.push(N)}function De(ne,ue,N){Fe(ne),Fe(ue),Fe(N);const ze=i.length/3,he=_.generateTopUV(n,i,ze-3,ze-2,ze-1);et(he[0]),et(he[1]),et(he[2])}function He(ne,ue,N,ze){Fe(ne),Fe(ue),Fe(ze),Fe(ue),Fe(N),Fe(ze);const he=i.length/3,we=_.generateSideWallUV(n,i,he-6,he-3,he-2,he-1);et(we[0]),et(we[1]),et(we[3]),et(we[1]),et(we[2]),et(we[3])}function Fe(ne){i.push(l[ne*3+0]),i.push(l[ne*3+1]),i.push(l[ne*3+2])}function et(ne){s.push(ne.x),s.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return D1(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Ua[i.type]().fromJSON(i)),new Xa(n,e.options)}}const L1={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new se(s,o),new se(a,l),new se(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],d=e[i*3+1],m=e[i*3+2],v=e[s*3],g=e[s*3+1],p=e[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new se(o,1-l),new se(c,1-u),new se(f,1-m),new se(v,1-p)]:[new se(a,1-l),new se(h,1-u),new se(d,1-m),new se(g,1-p)]}};function D1(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class dh extends Ht{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=e;const f=(t-e)/i,d=new D,m=new se;for(let v=0;v<=i;v++){for(let g=0;g<=n;g++){const p=s+g/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,h.push(m.x,m.y)}u+=f}for(let v=0;v<i;v++){const g=v*(n+1);for(let p=0;p<n;p++){const _=p+g,y=_,x=_+n+1,A=_+n+2,w=_+1;a.push(y,x,w),a.push(x,A,w)}}this.setIndex(a),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(c,3)),this.setAttribute("uv",new xt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ph extends Ht{constructor(e=new Eo([new se(0,.5),new se(-.5,-.5),new se(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new xt(i,3)),this.setAttribute("normal",new xt(s,3)),this.setAttribute("uv",new xt(o,2));function c(h){const u=i.length/3,f=h.extractPoints(t);let d=f.shape;const m=f.holes;hs.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){const _=m[g];hs.isClockWise(_)===!0&&(m[g]=_.reverse())}const v=hs.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){const _=m[g];d=d.concat(_)}for(let g=0,p=d.length;g<p;g++){const _=d[g];i.push(_.x,_.y,0),s.push(0,0,1),o.push(_.x,_.y)}for(let g=0,p=v.length;g<p;g++){const _=v[g],y=_[0]+u,x=_[1]+u,A=_[2]+u;n.push(y,x,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return I1(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const o=t[e.shapes[i]];n.push(o)}return new ph(n,e.curveSegments)}}function I1(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class On extends Ht{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new D,f=new D,d=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){const _=[],y=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let A=0;A<=t;A++){const w=A/t;u.x=-e*Math.cos(i+w*s)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(i+w*s)*Math.sin(o+y*a),m.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),g.push(w+x,1-y),_.push(c++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){const y=h[p][_+1],x=h[p][_],A=h[p+1][_],w=h[p+1][_+1];(p!==0||o>0)&&d.push(y,x,w),(p!==n-1||l<Math.PI)&&d.push(x,A,w)}this.setIndex(d),this.setAttribute("position",new xt(m,3)),this.setAttribute("normal",new xt(v,3)),this.setAttribute("uv",new xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new On(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class us extends Ht{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new D,u=new D,f=new D;for(let d=0;d<=n;d++)for(let m=0;m<=i;m++){const v=m/i*s,g=d/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(v),u.y=(e+t*Math.cos(g))*Math.sin(v),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(m/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=i;m++){const v=(i+1)*d+m-1,g=(i+1)*(d-1)+m-1,p=(i+1)*(d-1)+m,_=(i+1)*d+m;o.push(v,g,_),o.push(g,p,_)}this.setIndex(o),this.setAttribute("position",new xt(a,3)),this.setAttribute("normal",new xt(l,3)),this.setAttribute("uv",new xt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new us(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ho extends Ht{constructor(e=new hd(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new D,l=new D,c=new se;let h=new D;const u=[],f=[],d=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new xt(u,3)),this.setAttribute("normal",new xt(f,3)),this.setAttribute("uv",new xt(d,2));function v(){for(let y=0;y<t;y++)g(y);g(s===!1?t:0),_(),p()}function g(y){h=e.getPointAt(y/t,h);const x=o.normals[y],A=o.binormals[y];for(let w=0;w<=i;w++){const E=w/i*Math.PI*2,L=Math.sin(E),M=-Math.cos(E);l.x=M*x.x+L*A.x,l.y=M*x.y+L*A.y,l.z=M*x.z+L*A.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=t;y++)for(let x=1;x<=i;x++){const A=(i+1)*(y-1)+(x-1),w=(i+1)*y+(x-1),E=(i+1)*y+x,L=(i+1)*(y-1)+x;m.push(A,w,L),m.push(w,E,L)}}function _(){for(let y=0;y<=t;y++)for(let x=0;x<=i;x++)c.x=y/t,c.y=x/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ho(new Ua[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class N1 extends Bt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class Re extends hi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=th,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class It extends Re{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class U1 extends hi{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=th,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}function ha(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function O1(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function F1(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ju(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function md(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Ao{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class k1 extends Ao{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dh,endingEnd:Dh}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ih:s=e,a=2*t-n;break;case Nh:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ih:o=e,l=2*n-t;break;case Nh:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),v=m*m,g=v*m,p=-f*g+2*f*v-f*m,_=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*m+1,y=(-1-d)*g+(1.5+d)*v+.5*m,x=d*g-d*v;for(let A=0;A!==a;++A)s[A]=p*o[h+A]+_*o[c+A]+y*o[l+A]+x*o[u+A];return s}}class B1 extends Ao{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}}class z1 extends Ao{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Pi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ha(t,this.TimeBufferType),this.values=ha(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ha(e.times,Array),values:ha(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new z1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new B1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new k1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case vo:t=this.InterpolantFactoryMethodDiscrete;break;case xo:t=this.InterpolantFactoryMethodLinear;break;case Qa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vo;case this.InterpolantFactoryMethodLinear:return xo;case this.InterpolantFactoryMethodSmooth:return Qa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&O1(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Qa,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){const v=t[u+m];if(v!==t[f+m]||v!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Pi.prototype.TimeBufferType=Float32Array;Pi.prototype.ValueBufferType=Float32Array;Pi.prototype.DefaultInterpolation=xo;class Nr extends Pi{constructor(e,t,n){super(e,t,n)}}Nr.prototype.ValueTypeName="bool";Nr.prototype.ValueBufferType=Array;Nr.prototype.DefaultInterpolation=vo;Nr.prototype.InterpolantFactoryMethodLinear=void 0;Nr.prototype.InterpolantFactoryMethodSmooth=void 0;class gd extends Pi{}gd.prototype.ValueTypeName="color";class wr extends Pi{}wr.prototype.ValueTypeName="number";class V1 extends Ao{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Si.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Tr extends Pi{InterpolantFactoryMethodLinear(e){return new V1(this.times,this.values,this.getValueSize(),e)}}Tr.prototype.ValueTypeName="quaternion";Tr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ur extends Pi{constructor(e,t,n){super(e,t,n)}}Ur.prototype.ValueTypeName="string";Ur.prototype.ValueBufferType=Array;Ur.prototype.DefaultInterpolation=vo;Ur.prototype.InterpolantFactoryMethodLinear=void 0;Ur.prototype.InterpolantFactoryMethodSmooth=void 0;class Er extends Pi{}Er.prototype.ValueTypeName="vector";class H1{constructor(e="",t=-1,n=[],i=fp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ci(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(W1(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Pi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=F1(l);l=ju(l,1,h),c=ju(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new wr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,m,v){if(d.length!==0){const g=[],p=[];md(d,g,p,m),g.length!==0&&v.push(new u(f,g,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let v=0;v<f[m].morphTargets.length;v++)d[f[m].morphTargets[v]]=-1;for(const v in d){const g=[],p=[];for(let _=0;_!==f[m].morphTargets.length;++_){const y=f[m];g.push(y.time),p.push(y.morphTarget===v?1:0)}i.push(new wr(".morphTargetInfluence["+v+"]",g,p))}l=d.length*o}else{const d=".bones["+t[u].name+"]";n(Er,d+".position",f,"pos",i),n(Tr,d+".quaternion",f,"rot",i),n(Er,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function G1(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return wr;case"vector":case"vector2":case"vector3":case"vector4":return Er;case"color":return gd;case"quaternion":return Tr;case"bool":case"boolean":return Nr;case"string":return Ur}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function W1(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=G1(r.type);if(r.times===void 0){const t=[],n=[];md(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const os={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class vd{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}}const X1=new vd;class Or{constructor(e){this.manager=e!==void 0?e:X1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Or.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bi={};class q1 extends Error{constructor(e,t){super(e),this.response=t}}class xd extends Or{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=os.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Bi[e]!==void 0){Bi[e].push({onLoad:t,onProgress:n,onError:i});return}Bi[e]=[],Bi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Bi[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0;let v=0;const g=new ReadableStream({start(p){_();function _(){u.read().then(({done:y,value:x})=>{if(y)p.close();else{v+=x.byteLength;const A=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:d});for(let w=0,E=h.length;w<E;w++){const L=h[w];L.onProgress&&L.onProgress(A)}p.enqueue(x),_()}},y=>{p.error(y)})}}});return new Response(g)}else throw new q1(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{os.add(e,c);const h=Bi[e];delete Bi[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=Bi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Bi[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Y1 extends Or{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=os.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=_o("img");function l(){h(),os.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class _d extends Or{constructor(e){super(e)}load(e,t,n,i){const s=new an,o=new Y1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class qa extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class yd extends qa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Nl=new Qe,Ku=new D,Zu=new D;class mh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sh,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ku.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ku),Zu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zu),t.updateMatrixWorld(),Nl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Nl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class j1 extends mh{constructor(){super(new An(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Sr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class gh extends qa{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new j1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const $u=new Qe,Kr=new D,Ul=new D;class K1 extends mh{constructor(){super(new An(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new Tt(2,1,1,1),new Tt(0,1,1,1),new Tt(3,1,1,1),new Tt(1,1,1,1),new Tt(3,0,1,1),new Tt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Kr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Kr),Ul.copy(n.position),Ul.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ul),n.updateMatrixWorld(),i.makeTranslation(-Kr.x,-Kr.y,-Kr.z),$u.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($u)}}class zn extends qa{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new K1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Z1 extends mh{constructor(){super(new za(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Md extends qa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new Z1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class uo{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class $1 extends Or{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=os.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return os.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),os.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});os.add(e,l),s.manager.itemStart(e)}}class Sd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ju(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ju();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ju(){return performance.now()}const vh="\\[\\]\\.:\\/",J1=new RegExp("["+vh+"]","g"),xh="[^"+vh+"]",Q1="[^"+vh.replace("\\.","")+"]",e_=/((?:WC+[\/:])*)/.source.replace("WC",xh),t_=/(WCOD+)?/.source.replace("WCOD",Q1),n_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xh),i_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xh),s_=new RegExp("^"+e_+t_+n_+i_+"$"),r_=["material","materials","bones","map"];class o_{constructor(e,t,n){const i=n||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Dt{constructor(e,t,n){this.path=t,this.parsedPath=n||Dt.parseTrackName(t),this.node=Dt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Dt.Composite(e,t,n):new Dt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(J1,"")}static parseTrackName(e){const t=s_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);r_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Dt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Dt.Composite=o_;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Qu=new Qe;class Oa{constructor(e,t,n=0,i=1/0){this.ray=new Dr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ih,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Qu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qu),this}intersectObject(e,t=!0,n=[]){return Bc(e,this,n,t),n.sort(ef),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Bc(e[i],this,n,t);return n.sort(ef),n}}function ef(r,e){return r.distance-e.distance}function Bc(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)Bc(s[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qc);class fs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const a_=new za(-1,1,1,-1,0,1);class l_ extends Ht{constructor(){super(),this.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new xt([0,2,0,0,2,0],2))}}const c_=new l_;class Ar{constructor(e){this._mesh=new ie(c_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,a_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class bd extends fs{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Xe}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const vr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class wd extends fs{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Bt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=jn.clone(e.uniforms),this.material=new Bt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ar(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class tf extends fs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class h_ extends fs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class u_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new se);this._width=n.width,this._height=n.height,t=new Rn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Gn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new wd(vr),this.copyPass.material.blending=dn,this.clock=new Sd}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}tf!==void 0&&(o instanceof tf?n=!0:o instanceof h_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const f_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Xe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Rr extends fs{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new se(e.x,e.y):new se(256,256),this.clearColor=new Xe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Rn(s,o,{type:Gn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new Rn(s,o,{type:Gn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new Rn(s,o,{type:Gn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}const a=f_;this.highPassUniforms=jn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Bt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new se(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=vr;this.copyUniforms=jn.clone(h.uniforms),this.blendMaterial=new Bt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:as,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Xe,this.oldClearAlpha=1,this.basic=new Mi,this.fsQuad=new Ar(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new se(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Rr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Rr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Bt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new se(.5,.5)},direction:{value:new se(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Bt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Rr.BlurDirectionX=new se(1,0);Rr.BlurDirectionY=new se(0,1);const d_={name:"AfterimageShader",uniforms:{damp:{value:.96},tOld:{value:null},tNew:{value:null}},vertexShader:`

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

		}`};class p_ extends fs{constructor(e=.96){super(),this.shader=d_,this.uniforms=jn.clone(this.shader.uniforms),this.uniforms.damp.value=e,this.textureComp=new Rn(window.innerWidth,window.innerHeight,{magFilter:Jt,type:Gn}),this.textureOld=new Rn(window.innerWidth,window.innerHeight,{magFilter:Jt,type:Gn}),this.compFsMaterial=new Bt({uniforms:this.uniforms,vertexShader:this.shader.vertexShader,fragmentShader:this.shader.fragmentShader}),this.compFsQuad=new Ar(this.compFsMaterial);const t=vr;this.copyFsMaterial=new Bt({uniforms:jn.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,blending:dn,depthTest:!1,depthWrite:!1}),this.copyFsQuad=new Ar(this.copyFsMaterial)}render(e,t,n){this.uniforms.tOld.value=this.textureOld.texture,this.uniforms.tNew.value=n.texture,e.setRenderTarget(this.textureComp),this.compFsQuad.render(e),this.copyFsQuad.material.uniforms.tDiffuse.value=this.textureComp.texture,this.renderToScreen?(e.setRenderTarget(null),this.copyFsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.copyFsQuad.render(e));const i=this.textureOld;this.textureOld=this.textureComp,this.textureComp=i}setSize(e,t){this.textureComp.setSize(e,t),this.textureOld.setSize(e,t)}dispose(){this.textureComp.dispose(),this.textureOld.dispose(),this.compFsMaterial.dispose(),this.copyFsMaterial.dispose(),this.compFsQuad.dispose(),this.copyFsQuad.dispose()}}const m_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class g_ extends fs{constructor(){super();const e=m_;this.uniforms=jn.clone(e.uniforms),this.material=new N1({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ar(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},_t.getTransfer(this._outputColorSpace)===Pt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Sf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===bf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===wf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Yc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Tf?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ef&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const ua={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new se},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Qe},cameraProjectionMatrixInverse:{value:new Qe},cameraWorldMatrix:{value:new Qe},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new D(-1,-1,-1)},sceneBoxMax:{value:new D(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},fa={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Ol={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function v_(r=5){const e=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),t=x_(e),n=t.length,i=new Uint8Array(n*4);for(let o=0;o<n;++o){const a=t[o],l=2*Math.PI*a/n,c=new D(Math.cos(l),Math.sin(l),0).normalize();i[o*4]=(c.x*.5+.5)*255,i[o*4+1]=(c.y*.5+.5)*255,i[o*4+2]=127,i[o*4+3]=255}const s=new Ha(i,e,e);return s.wrapS=$n,s.wrapT=$n,s.needsUpdate=!0,s}function x_(r){const e=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),t=e*e,n=Array(t).fill(0);let i=Math.floor(e/2),s=e-1;for(let o=1;o<=t;){if(i===-1&&s===e?(s=e-2,i=0):(s===e&&(s=0),i<0&&(i=e-1)),n[i*e+s]!==0){s-=2,i++;continue}else n[i*e+s]=o++;s++,i--}return n}const da={defines:{SAMPLES:16,SAMPLE_VECTORS:Td(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new se},cameraProjectionMatrixInverse:{value:new Qe},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Td(r,e,t){const n=__(r,e,t);let i="vec3[SAMPLES](";for(let s=0;s<r;s++){const o=n[s];i+=`vec3(${o.x}, ${o.y}, ${o.z})${s<r-1?",":")"}`}return i}function __(r,e,t){const n=[];for(let i=0;i<r;i++){const s=2*Math.PI*e*i/r,o=Math.pow(i/(r-1),t);n.push(new D(Math.cos(s),Math.sin(s),o))}return n}class y_{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}dot4(e,t,n,i,s){return e[0]*t+e[1]*n+e[2]*i+e[3]*s}noise(e,t){let n,i,s;const o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,d=c-u,m=e-f,v=t-d;let g,p;m>v?(g=1,p=0):(g=0,p=1);const _=m-g+h,y=v-p+h,x=m-1+2*h,A=v-1+2*h,w=l&255,E=c&255,L=this.perm[w+this.perm[E]]%12,M=this.perm[w+g+this.perm[E+p]]%12,S=this.perm[w+1+this.perm[E+1]]%12;let C=.5-m*m-v*v;C<0?n=0:(C*=C,n=C*C*this.dot(this.grad3[L],m,v));let F=.5-_*_-y*y;F<0?i=0:(F*=F,i=F*F*this.dot(this.grad3[M],_,y));let B=.5-x*x-A*A;return B<0?s=0:(B*=B,s=B*B*this.dot(this.grad3[S],x,A)),70*(n+i+s)}noise3d(e,t,n){let i,s,o,a;const c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),f=Math.floor(n+c),d=1/6,m=(h+u+f)*d,v=h-m,g=u-m,p=f-m,_=e-v,y=t-g,x=n-p;let A,w,E,L,M,S;_>=y?y>=x?(A=1,w=0,E=0,L=1,M=1,S=0):_>=x?(A=1,w=0,E=0,L=1,M=0,S=1):(A=0,w=0,E=1,L=1,M=0,S=1):y<x?(A=0,w=0,E=1,L=0,M=1,S=1):_<x?(A=0,w=1,E=0,L=0,M=1,S=1):(A=0,w=1,E=0,L=1,M=1,S=0);const C=_-A+d,F=y-w+d,B=x-E+d,O=_-L+2*d,z=y-M+2*d,G=x-S+2*d,Y=_-1+3*d,W=y-1+3*d,Q=x-1+3*d,ce=h&255,ve=u&255,Oe=f&255,Je=this.perm[ce+this.perm[ve+this.perm[Oe]]]%12,J=this.perm[ce+A+this.perm[ve+w+this.perm[Oe+E]]]%12,fe=this.perm[ce+L+this.perm[ve+M+this.perm[Oe+S]]]%12,Ce=this.perm[ce+1+this.perm[ve+1+this.perm[Oe+1]]]%12;let de=.6-_*_-y*y-x*x;de<0?i=0:(de*=de,i=de*de*this.dot3(this.grad3[Je],_,y,x));let De=.6-C*C-F*F-B*B;De<0?s=0:(De*=De,s=De*De*this.dot3(this.grad3[J],C,F,B));let He=.6-O*O-z*z-G*G;He<0?o=0:(He*=He,o=He*He*this.dot3(this.grad3[fe],O,z,G));let Fe=.6-Y*Y-W*W-Q*Q;return Fe<0?a=0:(Fe*=Fe,a=Fe*Fe*this.dot3(this.grad3[Ce],Y,W,Q)),32*(i+s+o+a)}noise4d(e,t,n,i){const s=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,u,f,d,m;const v=(e+t+n+i)*l,g=Math.floor(e+v),p=Math.floor(t+v),_=Math.floor(n+v),y=Math.floor(i+v),x=(g+p+_+y)*c,A=g-x,w=p-x,E=_-x,L=y-x,M=e-A,S=t-w,C=n-E,F=i-L,B=M>S?32:0,O=M>C?16:0,z=S>C?8:0,G=M>F?4:0,Y=S>F?2:0,W=C>F?1:0,Q=B+O+z+G+Y+W,ce=o[Q][0]>=3?1:0,ve=o[Q][1]>=3?1:0,Oe=o[Q][2]>=3?1:0,Je=o[Q][3]>=3?1:0,J=o[Q][0]>=2?1:0,fe=o[Q][1]>=2?1:0,Ce=o[Q][2]>=2?1:0,de=o[Q][3]>=2?1:0,De=o[Q][0]>=1?1:0,He=o[Q][1]>=1?1:0,Fe=o[Q][2]>=1?1:0,et=o[Q][3]>=1?1:0,ne=M-ce+c,ue=S-ve+c,N=C-Oe+c,ze=F-Je+c,he=M-J+2*c,we=S-fe+2*c,xe=C-Ce+2*c,Ye=F-de+2*c,Se=M-De+3*c,P=S-He+3*c,b=C-Fe+3*c,X=F-et+3*c,te=M-1+4*c,le=S-1+4*c,ee=C-1+4*c,Ne=F-1+4*c,ye=g&255,Me=p&255,rt=_&255,pe=y&255,Ue=a[ye+a[Me+a[rt+a[pe]]]]%32,je=a[ye+ce+a[Me+ve+a[rt+Oe+a[pe+Je]]]]%32,Ze=a[ye+J+a[Me+fe+a[rt+Ce+a[pe+de]]]]%32,Ie=a[ye+De+a[Me+He+a[rt+Fe+a[pe+et]]]]%32,mt=a[ye+1+a[Me+1+a[rt+1+a[pe+1]]]]%32;let tt=.6-M*M-S*S-C*C-F*F;tt<0?h=0:(tt*=tt,h=tt*tt*this.dot4(s[Ue],M,S,C,F));let yt=.6-ne*ne-ue*ue-N*N-ze*ze;yt<0?u=0:(yt*=yt,u=yt*yt*this.dot4(s[je],ne,ue,N,ze));let k=.6-he*he-we*we-xe*xe-Ye*Ye;k<0?f=0:(k*=k,f=k*k*this.dot4(s[Ze],he,we,xe,Ye));let _e=.6-Se*Se-P*P-b*b-X*X;_e<0?d=0:(_e*=_e,d=_e*_e*this.dot4(s[Ie],Se,P,b,X));let $=.6-te*te-le*le-ee*ee-Ne*Ne;return $<0?m=0:($*=$,m=$*$*this.dot4(s[mt],te,le,ee,Ne)),27*(h+u+f+d+m)}}class wi extends fs{constructor(e,t,n,i,s,o,a){super(),this.width=n!==void 0?n:512,this.height=i!==void 0?i:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=v_(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Rn(this.width,this.height,{type:Gn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Bt({defines:Object.assign({},ua.defines),uniforms:jn.clone(ua.uniforms),vertexShader:ua.vertexShader,fragmentShader:ua.fragmentShader,blending:dn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new U1,this.normalMaterial.blending=dn,this.pdMaterial=new Bt({defines:Object.assign({},da.defines),uniforms:jn.clone(da.uniforms),vertexShader:da.vertexShader,fragmentShader:da.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Bt({defines:Object.assign({},fa.defines),uniforms:jn.clone(fa.uniforms),vertexShader:fa.vertexShader,fragmentShader:fa.fragmentShader,blending:dn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Bt({uniforms:jn.clone(vr.uniforms),vertexShader:vr.vertexShader,fragmentShader:vr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Kl,blendDst:eo,blendEquation:vi,blendSrcAlpha:jl,blendDstAlpha:eo,blendEquationAlpha:vi}),this.blendMaterial=new Bt({uniforms:jn.clone(Ol.uniforms),vertexShader:Ol.vertexShader,fragmentShader:Ol.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:yf,blendSrc:Kl,blendDst:eo,blendEquation:vi,blendSrcAlpha:jl,blendDstAlpha:eo,blendEquationAlpha:vi}),this.fsQuad=new Ar(null),this.originalClearColor=new Xe,this.setGBuffer(s?s.depthTexture:void 0,s?s.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new oh,this.depthTexture.format=Us,this.depthTexture.type=Ns,this.normalRenderTarget=new Rn(this.width,this.height,{minFilter:Jt,magFilter:Jt,type:Gn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Td(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case wi.OUTPUT.Off:break;case wi.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=dn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case wi.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=dn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case wi.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=dn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case wi.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case wi.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=dn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case wi.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=dn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,i,s){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(s||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,n,i,s){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,s=t.clearAlpha||s,i!=null&&(e.setClearColor(i),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){const i=t.get(n);n.visible=i}),t.clear()}generateNoise(e=64){const t=new y_,n=e*e*4,i=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){const l=o,c=a;i[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,i[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,i[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,i[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}const s=new Ha(i,e,e,Kn,Ai);return s.wrapS=$n,s.wrapT=$n,s.needsUpdate=!0,s}}wi.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const M_={uniforms:{tDiffuse:{value:null},time:{value:0},res:{value:new se(1,1)},distort:{value:.1},chroma:{value:.0045},grain:{value:.07},flash:{value:0},damage:{value:0},interference:{value:0},exposure:{value:1},blackout:{value:0},saturation:{value:.75},sharpen:{value:.35}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
    }`};function S_(r,e,t){const n=r.getSize(new se),i=new u_(r);i.addPass(new bd(e,t));const s=new wi(e,t,n.x,n.y);s.updateGtaoMaterial({radius:.45,distanceExponent:1.4,thickness:1.2,scale:1.1,samples:12}),s.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),s.blendIntensity=1,i.addPass(s);const o=new p_(0);o.enabled=!1;const a=new Rr(new se(n.x/2,n.y/2),.4,.55,.85);i.addPass(a),i.addPass(new g_);const l=new wd(M_);i.addPass(l);const c=l.uniforms;return{composer:i,u:c,after:o,bloom:a,ao:s,setSize(u,f,d){i.setPixelRatio(d),i.setSize(u,f),c.res.value.set(u*d,f*d)},render(u,f){c.time.value=f,i.render(u)}}}class b_{constructor(){this.ctx=null,this.loops=new Set}init(){if(this.ctx)return;const e=this.ctx=new(window.AudioContext||window.webkitAudioContext);this.out=e.createDynamicsCompressor(),this.out.threshold.value=-14,this.out.ratio.value=4,this.out.attack.value=.003,this.out.release.value=.25,this.out.connect(e.destination),this.master=e.createGain(),this.master.gain.value=.9,this.deaf=e.createBiquadFilter(),this.deaf.type="lowpass",this.deaf.frequency.value=2e4,this.master.connect(this.deaf),this.deaf.connect(this.out),this.sfx=e.createGain(),this.sfx.connect(this.master),this.amb=e.createGain(),this.amb.connect(this.master),this.verb=e.createConvolver(),this.verb.buffer=this.impulse(2.2,2.6),this.verbIn=e.createGain(),this.verbIn.gain.value=.35,this.verbIn.connect(this.verb),this.verb.connect(this.master),this.white=this.noise("white"),this.pink=this.noise("pink"),this.brown=this.noise("brown"),this.curveSoft=this.shaper(3),this.curveHard=this.shaper(30),this.startAmbience()}impulse(e,t){const n=this.ctx,i=n.sampleRate*e,s=n.createBuffer(2,i,n.sampleRate);for(let o=0;o<2;o++){const a=s.getChannelData(o);for(let l=0;l<i;l++)a[l]=(Math.random()*2-1)*Math.pow(1-l/i,t)*(l<60?l/60:1)}return s}noise(e){const t=this.ctx,n=t.sampleRate*3,i=t.createBuffer(1,n,t.sampleRate),s=i.getChannelData(0);let o=0,a=0,l=0,c=0,h=0,u=0,f=0,d=0;for(let m=0;m<n;m++){const v=Math.random()*2-1;e==="white"?s[m]=v:e==="pink"?(o=.99886*o+v*.0555179,a=.99332*a+v*.0750759,l=.969*l+v*.153852,c=.8665*c+v*.3104856,h=.55*h+v*.5329522,u=-.7616*u-v*.016898,s[m]=(o+a+l+c+h+u+f+v*.5362)*.11,f=v*.115926):(d=(d+.02*v)/1.02,s[m]=d*3.5)}return i}shaper(e){const n=new Float32Array(2048);for(let i=0;i<2048;i++){const s=i*2/2048-1;n[i]=(1+e)*s/(1+e*Math.abs(s))}return n}get t(){return this.ctx.currentTime}async loadSamples(e){this.buf=this.buf||{};const t=[];let n=0;for(const[i,s]of Object.entries(e||{})){this.buf[i]=[];for(const o of s)t.push(this.ctx.decodeAudioData(o.slice(0)).then(a=>this.buf[i].push(a)).catch(()=>{})),++n%8===0&&await new Promise(a=>setTimeout(a,0))}await Promise.all(t),this.startBeds()}has(e){return this.buf&&this.buf[e]&&this.buf[e].length>0}play(e,t,{vol:n=1,rate:i=1,verb:s=.35,offset:o=0,ref:a,rolloff:l,jitter:c=.06,t:h=this.t,bus:u}={}){if(!this.ctx||!this.has(e))return null;const f=this.buf[e],d=f[Math.floor(Math.random()*f.length)],m=this.ctx.createBufferSource();m.buffer=d,m.playbackRate.value=i*(1+(Math.random()-.5)*c);const v=this.dest(t,{gain:n,verb:s,ref:a,rolloff:l,bus:u});return m.connect(v),m.start(h,o),{src:m,out:v}}bed(e,t=0,n=1){if(!this.has(e))return null;const i=this.ctx.createBufferSource();i.buffer=this.buf[e][0],i.loop=!0,i.playbackRate.value=n;const s=this.ctx.createGain();return s.gain.value=t,i.connect(s),s.connect(this.amb),i.start(this.t,Math.random()*i.buffer.duration),s}startBeds(){if(!this.beds&&(this.beds={rainIn:this.bed("rainIn"),rainOut:this.bed("rainOut"),room:this.bed("room"),drone:this.bed("drone")},this.has("windTrees"))){this.windReal=this.ctx.createGain(),this.windReal.gain.value=0;const e=this.filt("lowpass",800,.6),t=this.src(this.buf.windTrees[0],!0,.85);t.connect(e),e.connect(this.windReal),this.windReal.connect(this.amb),t.start(this.t,Math.random()*this.buf.windTrees[0].duration)}}chimes(e){!this.ctx||!this.has("chimes")||this.chimeH||(this.chimeH=this.loop("sample:chimes",e,0))}dest(e,t={}){const n=this.ctx,i=n.createGain();if(i.gain.value=t.gain??1,e){const o=n.createPanner();o.panningModel="HRTF",o.distanceModel="inverse",o.refDistance=t.ref??1.2,o.rolloffFactor=t.rolloff??1.3,o.maxDistance=60,o.positionX.value=e.x,o.positionY.value=e.y,o.positionZ.value=e.z,i.connect(o),o.connect(t.bus||this.sfx),i.panner=o}else i.connect(t.bus||this.sfx);const s=n.createGain();return s.gain.value=t.verb??.5,i.connect(s),s.connect(this.verbIn),i}src(e,t=!1,n=1){const i=this.ctx.createBufferSource();return i.buffer=e,i.loop=t,i.playbackRate.value=n,t||(i.loopStart=0),i}filt(e,t,n=1){const i=this.ctx.createBiquadFilter();return i.type=e,i.frequency.value=t,i.Q.value=n,i}gainEnv(e,t,n,i,s,o=0){const a=e.gain;a.cancelScheduledValues(t),a.setValueAtTime(1e-4,t),a.linearRampToValueAtTime(i,t+n),a.exponentialRampToValueAtTime(Math.max(1e-4,o||1e-4),t+n+s)}noiseBurst(e,{t=this.t,dur:n=.1,a:i=.002,peak:s=1,type:o="bandpass",f:a=1e3,q:l=1,buf:c=this.white,rate:h=1,fEnd:u}={}){const f=this.src(c,!1,h),d=this.filt(o,a,l),m=this.ctx.createGain();return u&&d.frequency.exponentialRampToValueAtTime(u,t+n),f.connect(d),d.connect(m),m.connect(e),this.gainEnv(m,t,i,s,n),f.start(t,Math.random()*2),f.stop(t+i+n+.05),m}tone(e,{t=this.t,type:n="sine",f:i=100,fEnd:s,dur:o=.2,a=.005,peak:l=.5}={}){const c=this.ctx.createOscillator(),h=this.ctx.createGain();return c.type=n,c.frequency.setValueAtTime(i,t),s&&c.frequency.exponentialRampToValueAtTime(s,t+o),c.connect(h),h.connect(e),this.gainEnv(h,t,a,l,o),c.start(t),c.stop(t+a+o+.05),c}setListener(e){if(!this.ctx)return;const t=this.ctx.listener,n=e.position,i=this.t,s=e.userData.fwd,o=e.userData.up;t.positionX?(t.positionX.setTargetAtTime(n.x,i,.02),t.positionY.setTargetAtTime(n.y,i,.02),t.positionZ.setTargetAtTime(n.z,i,.02),t.forwardX.setTargetAtTime(s.x,i,.02),t.forwardY.setTargetAtTime(s.y,i,.02),t.forwardZ.setTargetAtTime(s.z,i,.02),t.upX.setTargetAtTime(o.x,i,.02),t.upY.setTargetAtTime(o.y,i,.02),t.upZ.setTargetAtTime(o.z,i,.02)):(t.setPosition(n.x,n.y,n.z),t.setOrientation(s.x,s.y,s.z,o.x,o.y,o.z))}startAmbience(){const e=this.ctx,t=this.src(this.pink,!0);this.rainLP=this.filt("lowpass",9e3,.3);const n=this.filt("highpass",400,.5);this.rainGain=e.createGain(),this.rainGain.gain.value=.35,t.connect(n),n.connect(this.rainLP),this.rainLP.connect(this.rainGain),this.rainGain.connect(this.amb),t.start();const i=this.src(this.white,!0,.7),s=this.filt("bandpass",2600,.9);this.roofGain=e.createGain(),this.roofGain.gain.value=0,i.connect(s),s.connect(this.roofGain),this.roofGain.connect(this.amb),i.start();const o=this.src(this.brown,!0),a=this.filt("bandpass",300,.6);this.windGain=e.createGain(),this.windGain.gain.value=.25;const l=e.createOscillator(),c=e.createGain();l.frequency.value=.07,c.gain.value=180,l.connect(c),c.connect(a.frequency),l.start(),o.connect(a),a.connect(this.windGain),this.windGain.connect(this.amb),o.start(),this.drone=e.createGain(),this.drone.gain.value=0;const h=this.filt("lowpass",220,.7);this.drone.connect(h),h.connect(this.amb);for(const g of[41.2,43.65,61.7,82.4]){const p=e.createOscillator();p.type="sawtooth",p.frequency.value=g,p.detune.value=(Math.random()-.5)*14;const _=e.createGain();_.gain.value=.12,p.connect(_),_.connect(this.drone),p.start()}this.whine=e.createGain(),this.whine.gain.value=0;const u=this.src(this.white,!0),f=this.filt("bandpass",3100,30),d=e.createOscillator();d.frequency.value=2960;const m=e.createGain();m.gain.value=.02,d.connect(m),m.connect(this.whine),d.start(),u.connect(f),f.connect(this.whine),this.whine.connect(this.amb),u.start(),this.hum=e.createGain(),this.hum.gain.value=0;for(const g of[60,120,180]){const p=e.createOscillator();p.frequency.value=g;const _=e.createGain();_.gain.value=.05/(g/60),p.connect(_),_.connect(this.hum),p.start()}this.hum.connect(this.amb);const v=this.src(this.white,!0);this.breathF=this.filt("bandpass",1100,.8),this.breathG=e.createGain(),this.breathG.gain.value=0,v.connect(this.breathF),this.breathF.connect(this.breathG),this.breathG.connect(this.sfx),v.start(),this.breathPhase=0,this.heartT=0}update(e,{inside:t=0,tension:n=0,fear:i=0,exertion:s=0,lights:o=!1,basement:a=!1}){if(!this.ctx)return;const l=this.t,c=this.beds;c&&(c.rainOut&&c.rainOut.gain.setTargetAtTime(a?0:(1-t)*.9,l,.5),c.rainIn&&c.rainIn.gain.setTargetAtTime(a?.06:t*.65,l,.5),c.room&&c.room.gain.setTargetAtTime(t*.35,l,.5),c.drone&&c.drone.gain.setTargetAtTime(.04+n*.75,l,1.2));const h=c?0:a?.04:(1-t)*.42+t*.08;this.rainGain.gain.setTargetAtTime(h,l,.4),this.rainLP.frequency.setTargetAtTime(a?300:9e3-t*7800,l,.4),this.roofGain.gain.setTargetAtTime(c?0:a?.004:t*.03,l,.4);const u=a?.05:.22-t*.12;if(this.windGain.gain.setTargetAtTime(u,l,.5),this.windReal&&this.windReal.gain.setTargetAtTime(a?.02:.3-t*.2,l,.6),this.chimeH){const _=.55+.45*Math.sin(l*.21+Math.sin(l*.07)*2);this.chimeH.set(Math.max(0,(a?.004:(1-t)*.42+t*.06)*_))}if(this.trainT=(this.trainT??35+Math.random()*50)-e,this.trainT<=0&&(this.trainT=110+Math.random()*160,this.has("train")&&!a)){const _=this.filt("lowpass",380+Math.random()*260,.7),y=this.ctx.createGain();y.gain.value=.13;const x=this.dest(null,{verb:.7,bus:this.amb}),A=this.src(this.buf.train[0],!1,.8+Math.random()*.08);A.connect(_),_.connect(y),y.connect(x),A.start(l+.1)}this.drone.gain.setTargetAtTime(c?n*.15:.05+n*.55,l,.8),this.whine.gain.setTargetAtTime(Math.max(0,n-.55)*.18,l,.5),this.hum.gain.setTargetAtTime(o?.35:0,l,.1);const f=.25+s*.55+i*.45;this.breathPhase+=e*f;const d=this.breathPhase%1,m=d<.38,v=.015+s*.09+i*.06,g=m?Math.sin(d/.38*Math.PI):Math.sin((d-.38)/.62*Math.PI)*.8;this.breathG.gain.setTargetAtTime(Math.max(0,g)*v,l,.05),this.breathF.frequency.setTargetAtTime(m?1500:900,l,.1);const p=62+i*90+s*40;if(this.heartT-=e,this.heartT<=0){this.heartT=60/p;const _=Math.max(0,i-.25)*.9+s*.15;if(_>.03){const y=this.dest(null,{verb:0});this.tone(y,{f:52,fEnd:38,dur:.12,peak:_}),this.tone(y,{t:l+.18,f:48,fEnd:36,dur:.1,peak:_*.6})}}}footstep(e,t,n=1,i=!1){if(!this.ctx)return;const s=e==="mud"?"stepDirt":e==="concrete"||e==="tile"?"stepConc":i?"runWood":"stepWood";if(this.has(s)){this.play(s,t,{vol:n*(e==="tile"?.8:1.2),rate:e==="tile"?1.15:1,verb:e==="concrete"?.6:.25}),(e==="wood"||e==="porch")&&Math.random()<.08&&this.play("creak",t,{vol:.12,rate:1.4,offset:Math.random()*2});return}const o=this.dest(t,{verb:e==="concrete"?.7:.35,gain:n}),a=this.t,l={wood:{f:500,q:1.2,thump:110,dur:.09},tile:{f:2400,q:.8,thump:160,dur:.05},concrete:{f:1500,q:.6,thump:90,dur:.07},mud:{f:350,q:.7,thump:70,dur:.16},porch:{f:420,q:1.5,thump:95,dur:.11}}[e]||{f:800,q:1,thump:100,dur:.07},c=i?1.5:1;this.noiseBurst(o,{t:a,dur:l.dur,f:l.f*(.85+Math.random()*.3),q:l.q,peak:.35*c}),this.noiseBurst(o,{t:a+.03,dur:l.dur*.7,f:l.f*1.6,q:1,peak:.12*c}),this.tone(o,{t:a,f:l.thump,fEnd:l.thump*.5,dur:.08,peak:.35*c}),e==="mud"&&this.noiseBurst(o,{t:a+.06,dur:.12,type:"lowpass",f:900,peak:.25}),(e==="wood"||e==="porch")&&Math.random()<.18&&this.creak(t,.25+Math.random()*.3,.25)}creak(e,t=.6,n=.5,i=1){if(!this.ctx)return;if(t>=.8&&this.has("creak")){this.play(Math.random()<.5?"creak":"creakVerb",e,{vol:n*1.3,rate:i,verb:.3});return}const s=this.ctx,o=this.t,a=this.dest(e,{verb:.6,gain:n}),l=s.createOscillator();l.type="sawtooth";const c=(90+Math.random()*90)*i;l.frequency.setValueAtTime(c,o);for(let g=1;g<8;g++)l.frequency.linearRampToValueAtTime(c*(.7+Math.random()*.8),o+t*g/8);const h=s.createOscillator();h.type="square",h.frequency.value=18+Math.random()*30;const u=s.createGain();u.gain.value=.5;const f=s.createGain();f.gain.value=.5,h.connect(u),u.connect(f.gain);const d=this.filt("bandpass",900*i,3),m=this.filt("bandpass",2200*i,5),v=s.createGain();l.connect(f),f.connect(d),f.connect(m),d.connect(v),m.connect(v),v.connect(a),v.gain.setValueAtTime(1e-4,o),v.gain.linearRampToValueAtTime(.5,o+.05),v.gain.setValueAtTime(.5,o+t*.8),v.gain.exponentialRampToValueAtTime(1e-4,o+t),l.start(o),h.start(o),l.stop(o+t+.1),h.stop(o+t+.1)}doorOpen(e){if(this.has("doorOpen")){this.play("knob",e,{vol:.8}),this.play("doorOpen",e,{vol:1,t:this.t+.12}),Math.random()<.6&&this.play("creak",e,{vol:.35,rate:.9,t:this.t+.2});return}this.latch(e),this.creak(e,1.1,.55,.8)}latch(e){if(this.has("knob")){this.play(Math.random()<.5?"knob":"lock",e,{vol:.9});return}const t=this.dest(e,{verb:.4}),n=this.t;this.noiseBurst(t,{t:n,dur:.03,f:3500,q:2,peak:.6}),this.noiseBurst(t,{t:n+.06,dur:.04,f:2500,q:3,peak:.4})}doorSlam(e,t=1){if(this.has("doorClose")){this.play("doorClose",e,{vol:1.8*t,verb:.8,rate:.85}),this.play("woodDrop",e,{vol:.5*t,verb:.6});return}const n=this.dest(e,{verb:1,gain:t}),i=this.t;this.noiseBurst(n,{t:i,dur:.35,type:"lowpass",f:1800,fEnd:200,peak:1.2,buf:this.brown}),this.tone(n,{t:i,f:70,fEnd:35,dur:.4,peak:.9}),this.noiseBurst(n,{t:i,dur:.05,f:3e3,q:1,peak:.6})}knock(e,t=3){if(this.has("knock")){this.play("knock",e,{vol:1.6,verb:.7,rate:.85});return}for(let n=0;n<t;n++){const i=this.t+n*.28+Math.random()*.05,s=this.dest(e,{verb:.8});this.tone(s,{t:i,f:140,fEnd:70,dur:.12,peak:.9}),this.noiseBurst(s,{t:i,dur:.05,f:700,q:2,peak:.6})}}gunshot(e){const t=this.ctx,n=this.t;this.roomIR||(this.roomIR=this.impulse(.9,3.2));const i=t.createGain();i.gain.value=1.6,i.connect(this.sfx);const s=t.createConvolver();s.buffer=this.roomIR;const o=t.createGain();o.gain.value=.9,i.connect(s),s.connect(o),o.connect(this.master);const a=t.createWaveShaper();a.curve=this.curveHard,a.connect(i);const l=this.src(this.white),c=this.filt("highpass",2500,.7),h=t.createGain();l.connect(c),c.connect(h),h.connect(a),h.gain.setValueAtTime(1.4,n),h.gain.exponentialRampToValueAtTime(.001,n+.006),l.start(n,Math.random()),l.stop(n+.02);const u=this.src(this.white),f=this.filt("lowpass",7e3,.5),d=t.createGain();f.frequency.setValueAtTime(7e3,n),f.frequency.exponentialRampToValueAtTime(500,n+.16),u.connect(f),f.connect(d),d.connect(a),d.gain.setValueAtTime(1e-4,n),d.gain.exponentialRampToValueAtTime(1.3,n+.002),d.gain.exponentialRampToValueAtTime(.001,n+.22),u.start(n,Math.random()),u.stop(n+.3);const m=t.createOscillator(),v=t.createGain();m.type="sine",m.frequency.setValueAtTime(140,n),m.frequency.exponentialRampToValueAtTime(38,n+.18),m.connect(v),v.connect(a),v.gain.setValueAtTime(1e-4,n),v.gain.exponentialRampToValueAtTime(1.6,n+.004),v.gain.exponentialRampToValueAtTime(.001,n+.3),m.start(n),m.stop(n+.35);const g=this.src(this.brown),p=this.filt("lowpass",400,.5),_=t.createGain();g.connect(p),p.connect(_),_.connect(i),_.gain.setValueAtTime(1e-4,n),_.gain.exponentialRampToValueAtTime(.5,n+.02),_.gain.exponentialRampToValueAtTime(.001,n+.9),g.start(n,Math.random()),g.stop(n+1),this.deaf.frequency.cancelScheduledValues(n),this.deaf.frequency.setValueAtTime(1400,n+.06),this.deaf.frequency.exponentialRampToValueAtTime(2e4,n+1.6);const y=this.dest(null,{verb:0});this.tone(y,{t:n+.08,f:3900+Math.random()*600,dur:1.4,a:.05,peak:.025})}dryFire(){const e=this.dest(null,{verb:.2});this.noiseBurst(e,{dur:.03,f:4e3,q:3,peak:.5})}reloadClick(e){if(e===1&&this.has("shells"))for(let i=0;i<3;i++)this.play("shells",null,{vol:.5,t:this.t+.25+i*.09,verb:.2});const t=this.dest(null,{verb:.2}),n=this.t;if(e===0)this.noiseBurst(t,{t:n,dur:.05,f:2e3,q:2,peak:.6}),this.tone(t,{t:n,f:900,dur:.05,peak:.1});else if(e===1)for(let i=0;i<6;i++)this.noiseBurst(t,{t:n+i*.04,dur:.02,f:5e3,q:4,peak:.25});else this.noiseBurst(t,{t:n,dur:.04,f:1800,q:2,peak:.7}),this.noiseBurst(t,{t:n+.12,dur:.03,f:3500,q:3,peak:.4})}cameraFlash(){const e=this.dest(null,{verb:.1}),t=this.t;this.noiseBurst(e,{t,dur:.02,f:6e3,q:2,peak:.6}),this.tone(e,{t,f:1200,dur:.06,peak:.08,type:"square"})}flashCharge(e){const t=this.dest(null,{verb:0}),n=this.t;this.tone(t,{t:n+.1,f:1800,fEnd:9500,dur:e,a:.2,peak:.018})}keyDrop(e){this.play("keyDrop",e,{vol:1})||this.pickup()}pages(){this.play("pages",null,{vol:.7,verb:.1})||this.pickup()}drawer(e){this.play("drawer",e,{vol:.9})||this.pickup()}pickup(){const e=this.dest(null,{verb:.2});this.noiseBurst(e,{dur:.12,f:1800,q:.7,peak:.3})}switchClick(e){this.play("switch",e,{vol:.9,verb:.2})||this.switchSynth(e)}switchSynth(e){const t=this.dest(e,{verb:.3});this.noiseBurst(t,{dur:.02,f:3e3,q:3,peak:.6})}flashlightClick(){const e=this.dest(null,{verb:.1});this.noiseBurst(e,{dur:.015,f:4500,q:4,peak:.35})}powerOn(e){this.play("box",e,{vol:1});const t=this.dest(e,{verb:1}),n=this.t;this.noiseBurst(t,{t:n,dur:.2,type:"lowpass",f:600,peak:1,buf:this.brown}),this.tone(t,{t:n,f:60,dur:1.5,peak:.25,type:"sawtooth"});for(let i=0;i<5;i++)this.noiseBurst(t,{t:n+.1+i*.09,dur:.02,f:5e3,q:2,peak:.3})}powerOff(){const e=this.dest(null,{verb:1}),t=this.t;this.tone(e,{t,f:120,fEnd:20,dur:1.2,peak:.4,type:"sawtooth"}),this.noiseBurst(e,{t,dur:.3,f:3e3,q:1,peak:.5})}bulbPop(e){const t=this.dest(e,{verb:.7});this.noiseBurst(t,{dur:.08,f:5e3,q:.5,peak:1}),this.noiseBurst(t,{t:this.t+.05,dur:.4,f:7e3,q:1,peak:.2})}glass(e){const t=this.dest(e,{verb:1}),n=this.t;this.noiseBurst(t,{t:n,dur:.15,type:"highpass",f:3e3,peak:1});for(let i=0;i<14;i++)this.tone(t,{t:n+Math.random()*.6,f:3e3+Math.random()*5e3,dur:.05+Math.random()*.1,peak:.08})}scream(e,{pitch:t=1,dur:n=1.4,vol:i=1,rough:s=1}={}){if(!this.ctx)return;if(this.has("scream")){if(t<.7){this.play("creatureVerb",e,{vol:i*1.6,rate:.75+t*.3,verb:.8,ref:2.5});return}const g=n>1.1?"scream":"screamShort";this.play(this.has(g)?g:"scream",e,{vol:i*1.5,rate:Math.min(1.25,Math.max(.75,.55+t*.4)),verb:.6,ref:2});return}const o=this.ctx,a=this.t,l=this.dest(e,{verb:1.1,gain:i,ref:2}),c=o.createGain();c.gain.value=.5;const h=o.createWaveShaper();h.curve=s>.5?this.curveHard:this.curveSoft;const u=o.createOscillator(),f=o.createGain();u.frequency.value=7+Math.random()*5,f.gain.value=25*t,u.connect(f);for(let g=0;g<3;g++){const p=o.createOscillator();p.type="sawtooth",p.frequency.setValueAtTime(300*t,a),p.frequency.exponentialRampToValueAtTime((700+g*13)*t,a+.12),p.frequency.exponentialRampToValueAtTime(520*t,a+n),p.detune.value=(g-1)*25,f.connect(p.frequency),p.connect(c),p.start(a),p.stop(a+n+.1)}const d=this.src(this.white),m=o.createGain();m.gain.value=.35,d.connect(m),m.connect(c),d.start(a,Math.random()),d.stop(a+n+.1);const v=o.createGain();c.connect(h);for(const[g,p,_]of[[850,6,1],[1250,8,.7],[2700,10,.4],[3500,10,.25]]){const y=this.filt("bandpass",g*(.9+t*.1),p),x=o.createGain();x.gain.value=_,h.connect(y),y.connect(x),x.connect(v)}v.connect(l),v.gain.setValueAtTime(1e-4,a),v.gain.exponentialRampToValueAtTime(1.6,a+.06),v.gain.setValueAtTime(1.6,a+n*.6),v.gain.exponentialRampToValueAtTime(1e-4,a+n),u.start(a),u.stop(a+n+.1)}growl(e,t=2,n=1){if(this.has("creature")){this.play(t>2?"creatureVerb":"creature",e,{vol:n*1.6,rate:.7,verb:.9,ref:2.5,rolloff:.9});return}const i=this.ctx,s=this.t,o=this.dest(e,{verb:1.2,gain:n,ref:2.5,rolloff:.9}),a=i.createWaveShaper();a.curve=this.curveHard;const l=this.filt("lowpass",700,2),c=i.createGain();for(const u of[38,55.5,77]){const f=i.createOscillator();f.type="sawtooth",f.frequency.setValueAtTime(u,s),f.frequency.linearRampToValueAtTime(u*.8,s+t);const d=i.createOscillator();d.frequency.value=9+Math.random()*6;const m=i.createGain();m.gain.value=.6;const v=i.createGain();v.gain.value=.4,d.connect(m),m.connect(v.gain),f.connect(v),v.connect(a),f.start(s),d.start(s),f.stop(s+t+.1),d.stop(s+t+.1)}const h=this.src(this.brown);h.connect(a),h.start(s),h.stop(s+t+.1),a.connect(l),l.connect(c),c.connect(o),c.gain.setValueAtTime(1e-4,s),c.gain.exponentialRampToValueAtTime(.9,s+.3),c.gain.exponentialRampToValueAtTime(1e-4,s+t)}boneCrack(e,t=3){if(this.has("bones")){this.play(t>2?"bones":"skull",e,{vol:1.3,verb:.3});return}for(let n=0;n<t;n++){const i=this.dest(e,{verb:.4,gain:1.2}),s=this.t+n*(.06+Math.random()*.12);this.noiseBurst(i,{t:s,dur:.025,a:5e-4,f:1600+Math.random()*1500,q:1.5,peak:1.2}),this.tone(i,{t:s,f:220,fEnd:90,dur:.04,peak:.4})}}skitter(e,t=.8,n=.8){const i=this.t,s=this.dest(e,{verb:.5,gain:n});let o=0;for(;o<t;)this.noiseBurst(s,{t:i+o,dur:.02,f:900+Math.random()*2500,q:2,peak:.5+Math.random()*.5}),Math.random()<.3&&this.tone(s,{t:i+o,f:120,fEnd:60,dur:.05,peak:.4}),o+=.04+Math.random()*.09}heavyStep(e,t=1){const n=this.dest(e,{verb:1,gain:t,ref:2}),i=this.t;this.tone(n,{t:i,f:55,fEnd:28,dur:.35,peak:1.2}),this.noiseBurst(n,{t:i,dur:.18,type:"lowpass",f:500,peak:.8,buf:this.brown}),this.noiseBurst(n,{t:i+.02,dur:.08,f:1200,q:1,peak:.2})}bodyFall(e){if(this.has("woodDrop")){this.play("woodDrop",e,{vol:1.3,rate:.8,verb:.6}),this.play("bones",e,{vol:.6});return}const t=this.dest(e,{verb:.9}),n=this.t;this.tone(t,{t:n,f:80,fEnd:30,dur:.4,peak:1.2}),this.noiseBurst(t,{t:n,dur:.3,type:"lowpass",f:900,peak:1,buf:this.brown}),this.boneCrack(e,2)}splash(e,t=!1){const n=this.dest(e,{verb:.7,gain:t?1.4:.6}),i=this.t;this.noiseBurst(n,{t:i,dur:t?.8:.25,type:"lowpass",f:2500,fEnd:400,peak:1,buf:this.pink});for(let s=0;s<(t?12:4);s++)this.tone(n,{t:i+Math.random()*.6,f:600+Math.random()*900,fEnd:1400,dur:.04,peak:.12})}whisper(e,t=2.5,n=.6){if(this.has("whisper")){this.play(Math.random()<.5?"whisper":"whisperVerb",e,{vol:n*1.8,ref:.8});return}const i=this.ctx,s=this.t,o=this.dest(e,{verb:.9,gain:n,ref:.6}),a=this.src(this.white),l=i.createGain();l.gain.value=0;const c=this.filt("bandpass",1500,6),h=this.filt("bandpass",3e3,8);a.connect(c),a.connect(h),c.connect(l),h.connect(l),l.connect(o);let u=0;for(;u<t;){const f=.08+Math.random()*.16;c.frequency.setValueAtTime(700+Math.random()*1800,s+u),h.frequency.setValueAtTime(2200+Math.random()*2400,s+u),l.gain.setValueAtTime(0,s+u),l.gain.linearRampToValueAtTime(.6+Math.random()*.4,s+u+f*.3),l.gain.linearRampToValueAtTime(0,s+u+f),u+=f+(Math.random()<.2?.25:.02)}a.start(s,Math.random()),a.stop(s+t+.2)}voice(e,t,{pitch:n=120,radio:i=!1,child:s=!1,demonic:o=!1,vol:a=.6}={}){if(!this.ctx)return;const l=this.ctx,c=this.t,h=this.dest(e,{verb:i?.1:.6,gain:a,ref:1}),u=l.createOscillator();u.type="sawtooth";const f=this.src(this.white),d=l.createGain();d.gain.value=.08;const m=l.createGain();u.connect(m),f.connect(d),d.connect(m);const v=this.filt("bandpass",600,5),g=this.filt("bandpass",1400,7),p=this.filt("bandpass",2600,9),_=l.createGain();_.gain.value=0,m.connect(v),m.connect(g),m.connect(p);const y=l.createGain();y.gain.value=.4,p.connect(y),v.connect(_),g.connect(_),y.connect(_);let x=_;if(i){const E=this.filt("highpass",400,.7),L=this.filt("lowpass",2800,.7),M=l.createWaveShaper();M.curve=this.curveSoft,_.connect(E),E.connect(L),L.connect(M),x=M;const S=this.src(this.white),C=this.filt("bandpass",2e3,.5),F=l.createGain();F.gain.value=.05,S.connect(C),C.connect(F),F.connect(h),S.start(c,Math.random()),S.stop(c+t+.3),this.noiseBurst(h,{t:c,dur:.12,f:2e3,q:.5,peak:.4}),this.noiseBurst(h,{t:c+t,dur:.15,f:2e3,q:.5,peak:.4})}if(o){const E=l.createWaveShaper();E.curve=this.curveHard,x.connect(E),x=E}x.connect(h);const A=s?290:n;let w=.05;for(;w<t;){const E=.09+Math.random()*.13,L=[[700,1200],[400,2200],[300,900],[650,1700],[500,1e3]][Math.floor(Math.random()*5)],M=s?1.35:1;v.frequency.setTargetAtTime(L[0]*M,c+w,.02),g.frequency.setTargetAtTime(L[1]*M,c+w,.02),u.frequency.setTargetAtTime(A*(.88+Math.random()*.25)*(o?.5:1),c+w,.03),_.gain.setTargetAtTime(.7+Math.random()*.3,c+w,.015),_.gain.setTargetAtTime(.05,c+w+E*.75,.02),Math.random()<.55&&this.noiseBurst(h,{t:c+w,dur:.03,f:s?3200:2200+Math.random()*1800,q:1.2,peak:.12}),w+=E+(Math.random()<.12?.22:.01)}u.frequency.setTargetAtTime(A*(o?.4:.72),c+t*.85,.09),_.gain.setTargetAtTime(0,c+t,.03),u.start(c),u.stop(c+t+.3),f.start(c,Math.random()),f.stop(c+t+.3)}radioBeep(){const e=this.dest(null,{verb:0}),t=this.t;this.noiseBurst(e,{t,dur:.18,f:1800,q:.4,peak:.25}),this.tone(e,{t,f:1750,dur:.07,peak:.08,type:"square"})}thunder(e=1){if(!this.ctx)return;const t=this.t+e*.8,n=this.dest(null,{verb:.8,bus:this.amb,gain:1.4});this.noiseBurst(n,{t,dur:.25,type:"lowpass",f:3e3,peak:.8/e,buf:this.brown});for(let i=0;i<5;i++)this.noiseBurst(n,{t:t+.2+i*(.3+Math.random()*.5),a:.15,dur:1.6+Math.random(),type:"lowpass",f:160+Math.random()*200,peak:1.5/e,buf:this.brown})}sting(e=!0){if(this.has("impact")){this.play("impact",null,{vol:e?1.6:.9,verb:.2,jitter:0}),e&&this.has("strings")&&this.play("strings",null,{vol:.8,verb:.2,jitter:0});return}const t=this.ctx,n=this.t,i=this.dest(null,{verb:1,gain:e?1:.55}),s=t.createWaveShaper();s.curve=this.curveSoft,s.connect(i);for(const o of[92.5,98,138.6,185,196,277,554,587,1108]){const a=t.createOscillator();a.type="sawtooth",a.frequency.value=o*(1+(Math.random()-.5)*.01);const l=t.createGain();a.connect(l),l.connect(s),this.gainEnv(l,n,.01,.07,1.8),a.start(n),a.stop(n+2)}this.noiseBurst(i,{t:n,dur:1.2,type:"highpass",f:2e3,peak:.6}),this.tone(i,{t:n,f:60,fEnd:25,dur:1.2,peak:1.5})}riser(e=2){const t=this.dest(null,{verb:.8}),n=this.t,i=this.src(this.white),s=this.filt("bandpass",300,3),o=this.ctx.createGain();s.frequency.exponentialRampToValueAtTime(6e3,n+e),o.gain.setValueAtTime(1e-4,n),o.gain.exponentialRampToValueAtTime(.5,n+e),o.gain.setValueAtTime(0,n+e+.01),i.connect(s),s.connect(o),o.connect(t),i.start(n),i.stop(n+e+.05)}hit(){this.play("punch",null,{vol:1.2,verb:.1});const e=this.dest(null,{verb:.3}),t=this.t;this.tone(e,{t,f:120,fEnd:40,dur:.25,peak:1.4}),this.noiseBurst(e,{t,dur:.2,type:"lowpass",f:1500,peak:1,buf:this.brown}),this.deaf.frequency.cancelScheduledValues(t),this.deaf.frequency.setValueAtTime(500,t),this.deaf.frequency.exponentialRampToValueAtTime(2e4,t+1.2)}fleshHit(e){this.play("squish",e,{vol:1,rate:1.3,verb:.2})||this.fleshSynth(e)}fleshSynth(e){const t=this.dest(e,{verb:.3});this.noiseBurst(t,{dur:.08,type:"lowpass",f:900,peak:1,buf:this.pink}),this.tone(t,{f:100,fEnd:50,dur:.1,peak:.6})}drag(e,t=.5){this.has("drag")&&this.play("drag",e,{vol:t,rate:.8+Math.random()*.15,verb:.55,ref:2.5})}loop(e,t,n=1){if(!this.ctx)return{stop(){},set(){}};const i=this.ctx,s=this.dest(t,{verb:.5,gain:n,ref:e==="flies"?.6:1.2}),o=[];let a=null,l=!0;const c=this.t;if(e.startsWith("sample:")){const u=e.slice(7);if(this.has(u)){const f=this.ctx.createBufferSource();f.buffer=this.buf[u][0],f.loop=!0,f.connect(s),f.start(c,Math.random()*f.buffer.duration),o.push(f)}}if(e==="flies")for(let u=0;u<4;u++){const f=i.createOscillator();f.type="sawtooth",f.frequency.value=170+u*23;const d=i.createOscillator(),m=i.createGain();d.frequency.value=.3+Math.random(),m.gain.value=25,d.connect(m),m.connect(f.frequency);const v=i.createOscillator(),g=i.createGain(),p=i.createGain();v.frequency.value=.5+Math.random()*2,g.gain.value=.04,p.gain.value=.04,v.connect(g),g.connect(p.gain);const _=this.filt("bandpass",400,1);f.connect(_),_.connect(p),p.connect(s),f.start(),d.start(),v.start(),o.push(f,d,v)}else if(e==="tv"){const u=this.src(this.white,!0),f=this.filt("bandpass",3500,.4),d=i.createGain();d.gain.value=.12,u.connect(f),f.connect(d),d.connect(s),u.start(),o.push(u);const m=i.createOscillator();m.frequency.value=15734;const v=i.createGain();v.gain.value=.004,m.connect(v),v.connect(s),m.start(),o.push(m)}else if(e==="phone"){const u=()=>{if(!l)return;const f=this.t;for(let d=0;d<28;d++){const m=f+d*.04,v=d%2?1:1.18;for(const[g,p,_]of[[1,.25,.09],[2.76,.12,.06],[5.4,.06,.04],[8.9,.03,.03]]){const y=i.createOscillator();y.type="sine",y.frequency.value=760*v*g;const x=i.createGain();x.gain.setValueAtTime(p,m),x.gain.exponentialRampToValueAtTime(5e-4,m+_+.03),y.connect(x),x.connect(s),y.start(m),y.stop(m+_+.05)}}a=setTimeout(u,3600)};u()}else if(e==="hum"){const u=[64,67,69,67,64,62,64,0,64,67,71,69,67,64,62,0];let f=0;const d=()=>{if(!l)return;const m=u[f++%u.length],v=this.t;if(m){const g=440*Math.pow(2,(m-69)/12),p=i.createOscillator();p.type="triangle",p.frequency.value=g;const _=i.createOscillator(),y=i.createGain();_.frequency.value=5.5,y.gain.value=g*.012,_.connect(y),y.connect(p.frequency);const x=this.filt("lowpass",1400,.5),A=this.filt("bandpass",500,3),w=i.createGain();p.connect(x),x.connect(w),p.connect(A),A.connect(w),w.connect(s),w.gain.setValueAtTime(0,v),w.gain.linearRampToValueAtTime(.25,v+.08),w.gain.setTargetAtTime(0,v+.5,.1),p.start(v),_.start(v),p.stop(v+.9),_.stop(v+.9)}a=setTimeout(d,520+Math.random()*40)};d()}else if(e==="fire"){const u=this.src(this.brown,!0),f=this.filt("lowpass",900,.5),d=i.createGain();d.gain.value=.5,u.connect(f),f.connect(d),d.connect(s),u.start(),o.push(u);const m=()=>{l&&(this.noiseBurst(s,{dur:.02,f:2e3+Math.random()*3e3,q:2,peak:.3+Math.random()*.5}),a=setTimeout(m,40+Math.random()*200))};m()}else if(e==="drip"){const u=()=>{l&&(this.tone(s,{f:900+Math.random()*600,fEnd:1800,dur:.05,peak:.25}),a=setTimeout(u,300+Math.random()*900))};u()}else if(e==="fridge"){const u=i.createOscillator();u.type="sawtooth",u.frequency.value=50;const f=this.filt("lowpass",200,1),d=i.createGain();d.gain.value=.06,u.connect(f),f.connect(d),d.connect(s),u.start(),o.push(u)}else if(e==="breathing"){if(this.has("breathM")){const f=i.createBufferSource();f.buffer=this.buf.breathM[0],f.loop=!0,f.playbackRate.value=.9,f.connect(s),f.start(c,Math.random()*6),o.push(f)}const u=()=>{if(!l)return;const f=this.t;this.has("breathM")||(this.noiseBurst(s,{t:f,a:.5,dur:.6,f:700,q:2,peak:.5,buf:this.pink}),this.noiseBurst(s,{t:f+1.2,a:.2,dur:1,f:450,q:2,peak:.6,buf:this.pink})),a=setTimeout(u,2600)};u()}else if(e==="swing"){const u=()=>{l&&(this.creak(t,1.4,.18,.6),a=setTimeout(u,2400+Math.random()*600))};u()}const h={stop:()=>{l=!1,clearTimeout(a),s.gain.setTargetAtTime(0,this.t,.05),setTimeout(()=>{o.forEach(u=>{try{u.stop()}catch{}}),s.disconnect()},400),this.loops.delete(h)},set:u=>s.gain.setTargetAtTime(u,this.t,.1),move:u=>{s.panner&&(s.panner.positionX.value=u.x,s.panner.positionY.value=u.y,s.panner.positionZ.value=u.z)}};return this.loops.add(h),h}duck(e,t=.5){this.ctx&&this.amb.gain.setTargetAtTime(e,this.t,t)}stopAllLoops(){[...this.loops].forEach(e=>e.stop()),this.chimeH=null}suspend(e){this.ctx&&(e?this.ctx.suspend():this.ctx.resume())}}class Ya extends ie{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new An;const n=this,i=t.color!==void 0?new Xe(t.color):new Xe(8355711),s=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||Ya.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,h=new is,u=new D,f=new D,d=new D,m=new Qe,v=new D(0,0,-1),g=new Tt,p=new D,_=new D,y=new Tt,x=new Qe,A=this.camera,w=new Rn(s,o,{samples:c,type:Gn}),E=new Bt({name:l.name!==void 0?l.name:"unspecified",uniforms:jn.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});E.uniforms.tDiffuse.value=w.texture,E.uniforms.color.value=i,E.uniforms.textureMatrix.value=x,this.material=E,this.onBeforeRender=function(L,M,S){if(f.setFromMatrixPosition(n.matrixWorld),d.setFromMatrixPosition(S.matrixWorld),m.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(m),p.subVectors(f,d),p.dot(u)>0)return;p.reflect(u).negate(),p.add(f),m.extractRotation(S.matrixWorld),v.set(0,0,-1),v.applyMatrix4(m),v.add(d),_.subVectors(f,v),_.reflect(u).negate(),_.add(f),A.position.copy(p),A.up.set(0,1,0),A.up.applyMatrix4(m),A.up.reflect(u),A.lookAt(_),A.far=S.far,A.updateMatrixWorld(),A.projectionMatrix.copy(S.projectionMatrix),x.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),x.multiply(A.projectionMatrix),x.multiply(A.matrixWorldInverse),x.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,f),h.applyMatrix4(A.matrixWorldInverse),g.set(h.normal.x,h.normal.y,h.normal.z,h.constant);const C=A.projectionMatrix;y.x=(Math.sign(g.x)+C.elements[8])/C.elements[0],y.y=(Math.sign(g.y)+C.elements[9])/C.elements[5],y.z=-1,y.w=(1+C.elements[10])/C.elements[14],g.multiplyScalar(2/g.dot(y)),C.elements[2]=g.x,C.elements[6]=g.y,C.elements[10]=g.z+1-a,C.elements[14]=g.w,n.visible=!1;const F=L.getRenderTarget(),B=L.xr.enabled,O=L.shadowMap.autoUpdate;L.xr.enabled=!1,L.shadowMap.autoUpdate=!1,L.setRenderTarget(w),L.state.buffers.depth.setMask(!0),L.autoClear===!1&&L.clear(),L.render(M,A),L.xr.enabled=B,L.shadowMap.autoUpdate=O,L.setRenderTarget(F);const z=S.viewport;z!==void 0&&L.state.viewport(z),n.visible=!0},this.getRenderTarget=function(){return w},this.dispose=function(){w.dispose(),n.material.dispose()}}}Ya.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};function Bs(r){let e=r%2147483647;return e<=0&&(e+=2147483646),()=>(e=e*16807%2147483647,(e-1)/2147483646)}function Li(r=1){const e=Bs(r),t=new Float32Array(256*256);for(let o=0;o<t.length;o++)t[o]=e();const n=(o,a,l)=>{const c=Math.floor(o),h=Math.floor(a),u=o-c,f=a-h,d=u*u*(3-2*u),m=f*f*(3-2*f),v=(c%l+l)%l,g=(h%l+l)%l,p=(v+1)%l,_=(g+1)%l,y=t[g*256+v],x=t[g*256+p],A=t[_*256+v],w=t[_*256+p];return y+(x-y)*d+(A-y)*m+(y-x-A+w)*d*m};return{n,fbm:(o,a,l=4,c=5,h=1,u=1)=>{let f=0,d=.5,m=l,v=0;for(let g=0;g<c;g++)f+=n(o*m*h,a*m*u,256)*d,v+=d,d*=.5,m*=2;return f/v},fbmP:(o,a,l=4,c=5)=>{let h=0,u=.5,f=l,d=0;for(let m=0;m<c;m++)h+=n(o*f,a*f,f)*u,d+=u,u*=.5,f*=2;return h/d},r:e}}function hn(r,e=r){const t=document.createElement("canvas");return t.width=r,t.height=e,[t,t.getContext("2d")]}function Sn(r,{repeat:e=!0,srgb:t=!0}={}){const n=new Ki(r);return e&&(n.wrapS=n.wrapT=$n),n.anisotropy=8,t&&(n.colorSpace=Ft),n}function Jn(r,e,t,n){const i=r.getImageData(0,0,e,t),s=i.data;for(let o=0;o<t;o++)for(let a=0;a<e;a++){const l=(o*e+a)*4,c=n(a/e,o/t,s[l],s[l+1],s[l+2],s[l+3]);s[l]=c[0],s[l+1]=c[1],s[l+2]=c[2],s[l+3]=c.length>3?c[3]:255}r.putImageData(i,0,0)}const nf={},bn=(r,e)=>nf[r]||(nf[r]=e());function pa(r=3,e=[148,138,104]){return bn("wp"+r+e,()=>{const n=Li(r),[i,s]=hn(512);s.fillStyle=`rgb(${e})`,s.fillRect(0,0,512,512);for(let o=0;o<8;o++)s.fillStyle=o%2?"rgba(0,0,0,0.06)":"rgba(255,240,200,0.05)",s.fillRect(o*64,0,64,512);s.strokeStyle="rgba(70,60,40,0.22)",s.lineWidth=2;for(let o=0;o<4;o++)for(let a=0;a<4;a++){const l=o*128+64+a%2*0,c=a*128+64;s.beginPath(),s.ellipse(l,c,14,26,0,0,Math.PI*2),s.stroke(),s.beginPath(),s.moveTo(l,c-40),s.quadraticCurveTo(l+24,c,l,c+40),s.quadraticCurveTo(l-24,c,l,c-40),s.stroke(),s.beginPath(),s.arc(l,c,4,0,7),s.fill()}Jn(s,512,512,(o,a,l,c,h)=>{const u=n.fbmP(o,a,4,5),f=Math.max(0,n.fbmP(o+.3,a,2,4)-.52)*3.2,d=Math.max(0,n.fbmP(o,a+.7,8,4)-.6)*4*(a>.7?(a-.7)*3.3:0),m=.72+u*.45-f*.35;return[l*m-d*40+f*8,c*m-d*25,h*m-d*45-f*18]});for(let o=0;o<18;o++){const a=n.r()*512,l=60+n.r()*300,c=s.createLinearGradient(0,0,0,l);c.addColorStop(0,"rgba(60,40,15,0.25)"),c.addColorStop(1,"rgba(60,40,15,0)"),s.fillStyle=c,s.fillRect(a,0,2+n.r()*7,l)}return Sn(i)})}function Rs(r=5){return bn("wood"+r,()=>{const t=Li(r),[n,i]=hn(512),s=[];for(let o=0;o<8;o++)s.push(.75+t.r()*.4);return Jn(i,512,512,(o,a)=>{const l=Math.floor(o*8),c=s[l],h=t.fbm(o*1,a,2,4,8,1),u=Math.sin(o*8*30+h*18)*.5+.5,f=c*(.6+h*.5+u*.12),d=l%2*.5+l*.13,m=Math.abs((a+d)%.5-0)<.004?.35:1,v=o*8%1<.025?.25:1,g=.85+t.fbmP(o,a,3,4)*.3;return[120*f*m*v*g,78*f*m*v*g,48*f*m*v*g]}),Sn(n)})}function ma(r=7,e=[196,204,192],t=8){return bn("tile"+r+e+t,()=>{const i=Li(r),[s,o]=hn(512),a=[];for(let l=0;l<t*t;l++)a.push(.88+i.r()*.16);Jn(o,512,512,(l,c)=>{const h=l*t,u=c*t,f=h%1,d=u%1,m=f<.04||d<.04,v=i.fbmP(l,c,6,4);if(m){const _=70+v*50;return[_,_*.95,_*.85]}const g=a[Math.floor(u)*t+Math.floor(h)]*(.85+v*.2),p=Math.min(f,d,1-f,1-d)<.08?.93:1;return[e[0]*g*p,e[1]*g*p,e[2]*g*p]}),o.strokeStyle="rgba(40,40,35,0.6)",o.lineWidth=1;for(let l=0;l<6;l++){let c=i.r()*512,h=i.r()*512;o.beginPath(),o.moveTo(c,h);for(let u=0;u<8;u++)c+=(i.r()-.5)*30,h+=(i.r()-.3)*20,o.lineTo(c,h);o.stroke()}return Sn(s)})}function Zr(r=11){return bn("conc"+r,()=>{const t=Li(r),[n,i]=hn(512);return Jn(i,512,512,(s,o)=>{const a=t.fbmP(s,o,4,6),l=t.fbmP(s+.5,o,16,3),c=Math.max(0,t.fbmP(s,o+.2,2,3)-.55)*2.5,h=l>.78?.6:1,u=(.45+a*.45)*h*(1-c*.5);return[112*u,108*u,100*u]}),Sn(n)})}function ga(r=13){return bn("pl"+r,()=>{const t=Li(r),[n,i]=hn(256);return Jn(i,256,256,(s,o)=>{const a=t.fbmP(s,o,4,5),l=t.fbmP(s,o,2,3),c=1-Math.max(0,l-.55)*1.6-Math.exp(-Math.pow((l-.58)*40,2))*.12,h=.72+a*.28;return[190*h*c,182*h*c,160*h*(c*c)]}),Sn(n)})}function w_(r=17){return bn("mud"+r,()=>{const t=Li(r),[n,i]=hn(512),[s,o]=hn(512),a=[];Jn(i,512,512,(c,h)=>{const u=t.fbmP(c,h,4,6),d=t.fbmP(c+.37,h+.11,2,4)>.58;a.push(d?30:200+u*55);const m=(.35+u*.5)*(d?.45:1),v=Math.max(0,t.fbmP(c,h,8,3)-.6)*2;return[70*m-v*20,52*m+v*18,36*m-v*10]});let l=0;return Jn(o,512,512,()=>{const c=a[l++];return[c,c,c]}),{map:Sn(n),rough:Sn(s,{srgb:!1})}})}function Un(r=1,e="splat"){return bn("blood"+r+e,()=>{const n=Bs(r*97+3),[i,s]=hn(256),o=a=>`rgba(${60+n()*30},${n()*6},${n()*6},${a})`;if(e==="splat"||e==="pool"){const a=e==="pool";for(let l=0;l<(a?70:40);l++){const c=n()*6.28,h=n()*(a?70:50);s.fillStyle=o(.85),s.beginPath(),s.arc(128+Math.cos(c)*h,128+Math.sin(c)*h,(a?18:6)+n()*(a?30:22),0,7),s.fill()}if(!a)for(let l=0;l<80;l++){const c=n()*6.28,h=60+n()*60;s.fillStyle=o(.9),s.beginPath(),s.arc(128+Math.cos(c)*h,128+Math.sin(c)*h,.8+n()*3.5,0,7),s.fill()}}else if(e==="drip"){for(let a=0;a<30;a++)s.fillStyle=o(.9),s.beginPath(),s.arc(128+(n()-.5)*120,30+n()*30,6+n()*16,0,7),s.fill();for(let a=0;a<14;a++){const l=128+(n()-.5)*130,c=40+n()*180,h=2+n()*5;s.fillStyle=o(.85),s.fillRect(l-h/2,40,h,c),s.beginPath(),s.arc(l,40+c,h*.9,0,7),s.fill()}}else if(e==="hand"){s.fillStyle=o(.8),s.beginPath(),s.ellipse(128,150,42,50,0,0,7),s.fill();const a=[[-46,-40,-.5,34],[-20,-88,-.12,50],[6,-96,0,54],[30,-86,.12,48],[50,-56,.35,36]];for(const[l,c,h,u]of a)s.save(),s.translate(128+l,150+c+u/2+20),s.rotate(h),s.beginPath(),s.ellipse(0,-u/2,10,u/2+6,0,0,7),s.fill(),s.restore();s.globalCompositeOperation="destination-out";for(let l=0;l<160;l++)s.fillStyle=`rgba(0,0,0,${n()*.8})`,s.beginPath(),s.arc(70+n()*120,40+n()*180,1+n()*4,0,7),s.fill();s.globalCompositeOperation="source-over"}else if(e==="smear")for(let a=0;a<26;a++){s.strokeStyle=o(.25+n()*.4),s.lineWidth=4+n()*14,s.lineCap="round",s.beginPath();const l=60+n()*140;s.moveTo(10+n()*30,l),s.bezierCurveTo(90,l+(n()-.5)*30,160,l+(n()-.5)*30,246-n()*40,l+(n()-.5)*20),s.stroke()}return Sn(i,{repeat:!1})})}function Fl(r,e=1024,t=256,n=120){return bn("bt"+r,()=>{const i=Bs(r.length*131+7),[s,o]=hn(e,t);o.font=`bold ${n}px Georgia, serif`,o.textBaseline="middle";const a=o.measureText(r).width;let l=(e-a)/2;for(const c of r){o.save(),o.translate(l,t*.42+(i()-.5)*16),o.rotate((i()-.5)*.18),o.fillStyle=`rgba(${70+i()*25},0,0,0.92)`,o.fillText(c,0,0),o.restore();const h=o.measureText(c).width;if(c!==" "&&i()<.6){const u=l+h*(.2+i()*.6),f=20+i()*90,d=2+i()*4;o.fillStyle="rgba(80,0,0,0.85)",o.fillRect(u,t*.5,d,f),o.beginPath(),o.arc(u+d/2,t*.5+f,d,0,7),o.fill()}l+=h}return Sn(s,{repeat:!1})})}function kl(r=2,e=4,t=!0,n=!0){return bn("fp"+r+e+t,()=>{const o=Bs(r),[a,l]=hn(256,200),c=l.createLinearGradient(0,0,0,200);c.addColorStop(0,n?"#8c7a5c":"#6d7480"),c.addColorStop(1,n?"#4a3c2a":"#30343a"),l.fillStyle=c,l.fillRect(0,0,256,200);const h=[];for(let u=0;u<e;u++){const f=256*(u+1)/(e+1),d=u===e-1&&e>2,m=d?95:70+o()*10,v=d?13:17;l.fillStyle=n?"#2e2418":"#20242a",l.beginPath(),l.ellipse(f,m+v+55,v*1.9,60,0,0,7),l.fill(),l.fillStyle=n?"#c4a983":"#b9a99a",l.beginPath(),l.ellipse(f,m,v*.85,v,0,0,7),l.fill(),l.fillStyle="#1a120a",l.beginPath(),l.ellipse(f,m-v*.6,v*.9,v*.5,0,Math.PI,0),l.fill(),l.fillStyle="rgba(0,0,0,0.6)",l.fillRect(f-6,m-2,3,3),l.fillRect(f+3,m-2,3,3),h.push([f,m,v])}if(t)for(const[u,f,d]of h){l.strokeStyle="rgba(235,225,205,0.9)",l.lineWidth=1.5;for(let m=0;m<26;m++)l.beginPath(),l.moveTo(u+(o()-.5)*d*2.4,f+(o()-.5)*d*2.4),l.lineTo(u+(o()-.5)*d*2.4,f+(o()-.5)*d*2.4),l.stroke()}return Jn(l,256,200,(u,f,d,m,v)=>{const g=o()*30-15,p=Math.min(u,f,1-u,1-f)<.04?.6:1;return[(d+g)*p,(m+g)*p,(v+g)*p]}),Sn(a,{repeat:!1})})}function Bl(){return bn("granny",()=>{const t=Bs(99),[n,i]=hn(200,260);i.fillStyle="#3a2e20",i.fillRect(0,0,200,260);const s=i.createRadialGradient(100,120,10,100,130,130);s.addColorStop(0,"#9a8463"),s.addColorStop(1,"#2a2015"),i.fillStyle=s,i.beginPath(),i.ellipse(100,130,88,118,0,0,7),i.fill(),i.fillStyle="#1c150d",i.beginPath(),i.ellipse(100,250,80,90,0,0,7),i.fill(),i.fillStyle="#b8a07c",i.beginPath(),i.ellipse(100,115,34,44,0,0,7),i.fill(),i.fillStyle="#d8d0c0",i.beginPath(),i.ellipse(100,80,40,22,0,Math.PI,0),i.fill();for(const o of[86,114]){const a=i.createRadialGradient(o,110,1,o,110,10);a.addColorStop(0,"#000"),a.addColorStop(.6,"#140800"),a.addColorStop(1,"rgba(60,30,0,0)"),i.fillStyle=a,i.beginPath(),i.arc(o,110,10,0,7),i.fill()}return i.strokeStyle="#3a2516",i.lineWidth=2,i.beginPath(),i.moveTo(88,138),i.quadraticCurveTo(100,134,112,138),i.stroke(),Jn(i,200,260,(o,a,l,c,h)=>{const u=t()*24-12;return[l+u,c+u,h+u]}),Sn(n,{repeat:!1})})}function T_(r=4){return bn("cd"+r,()=>{const n=Bs(r),[i,s]=hn(256,200);s.fillStyle="#efeae0",s.fillRect(0,0,256,200),s.lineWidth=3,s.lineCap="round";const o=(a,l,c,h)=>{s.strokeStyle=h,s.beginPath(),s.arc(a,l-c,c*.15,0,7),s.moveTo(a,l-c*.85),s.lineTo(a,l-c*.4),s.moveTo(a-c*.2,l-c*.7),s.lineTo(a+c*.2,l-c*.7),s.moveTo(a,l-c*.4),s.lineTo(a-c*.15,l),s.moveTo(a,l-c*.4),s.lineTo(a+c*.15,l),s.stroke()};o(40,180,70,"#2a4fb0"),o(80,180,64,"#c03070"),o(115,180,40,"#d08020"),s.strokeStyle="#111",s.lineWidth=5,o(200,185,170,"#111"),s.lineWidth=3,s.beginPath(),s.moveTo(170,60),s.lineTo(130,120),s.stroke(),s.fillStyle="#b00",s.beginPath(),s.arc(196,22,3,0,7),s.arc(205,22,3,0,7),s.fill(),s.strokeStyle="rgba(10,10,10,0.8)",s.lineWidth=2,s.beginPath();for(let a=0;a<40;a++)s.lineTo(150+n()*100,10+n()*180);return s.stroke(),s.fillStyle="#222",s.font="18px Comic Sans MS, cursive",s.fillText("o moço",12,24),Sn(i,{repeat:!1})})}function sf(r=21,e=[168,160,140]){return bn("skin"+r+e,()=>{const n=Li(r),[i,s]=hn(256);Jn(s,256,256,(o,a)=>{const l=n.fbmP(o,a,4,5),c=Math.max(0,n.fbmP(o+.4,a,2,3)-.56)*4,h=.8+l*.3;return[e[0]*h-c*40,e[1]*h-c*60,e[2]*h-c*20]}),s.strokeStyle="rgba(60,40,80,0.35)",s.lineWidth=1.2;for(let o=0;o<18;o++){let a=n.r()*256,l=n.r()*256;s.beginPath(),s.moveTo(a,l);for(let c=0;c<12;c++)a+=(n.r()-.5)*18,l+=n.r()*14,s.lineTo(a,l);s.stroke()}return Sn(i)})}function Mn(r=23,e=[200,195,180],t=.4){return bn("cl"+r+e+t,()=>{const i=Li(r),[s,o]=hn(256);return Jn(o,256,256,(a,l)=>{const c=(Math.floor(a*128)+Math.floor(l*128))%2*.04,h=i.fbmP(a,l,4,5),u=Math.max(0,i.fbmP(a+.2,l+.6,2,4)-(.62-t*.15))*5,f=.6+h*.45+c;return[e[0]*f*(1-u*.2)+u*30,e[1]*f*(1-u*.9),e[2]*f*(1-u*.9)]}),Sn(s)})}function E_(){return bn("cookie",()=>{const e=Li(31),[t,n]=hn(256);Jn(n,256,256,(s,o)=>{const a=s-.5,l=o-.5,c=Math.sqrt(a*a+l*l)*2,h=Math.exp(-c*c*14)*.55,u=Math.exp(-Math.pow((c-.42)*9,2))*.22,f=Math.pow(Math.max(0,1-c),.8)*.5,d=.85+e.fbmP(s,o,8,3)*.3,m=Math.min(1,(h+u+f)*d)*255;return[m,m*.97,m*.9]});const i=new Ki(t);return i.colorSpace=Ft,i})}function A_(){return bn("glass",()=>{const e=Li(41),[t,n]=hn(256);return Jn(n,256,256,(i,s)=>{const o=e.fbmP(i,s,4,5),a=e.fbm(i,s,2,3,6,.5);return[90,95,85,40+o*70+a*40]}),Sn(t)})}function R_(){const[t,n]=hn(128,96),i=new Ki(t);i.colorSpace=Ft,i.magFilter=Jt,i.minFilter=Vn,i.generateMipmaps=!1;const s=n.createImageData(128,96);return i.userData.update=o=>{const a=s.data,l=o*42%120-12;for(let c=0;c<96;c++){const h=Math.abs(c-l)<7?1.45:1,u=c%2?.8:1,f=c<3||c>92?.3:1;for(let d=0;d<128;d++){let m=(Math.random()*.8+Math.random()*.2)*210*h*u*f;(d<2||d>125)&&(m*=.35);const v=(c*128+d)*4;a[v]=m,a[v+1]=m,a[v+2]=m*1.06,a[v+3]=255}}n.putImageData(s,0,0),i.needsUpdate=!0},i.userData.update(0),i}function fo(){return bn("dot",()=>{const[r,e]=hn(64),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,0.5)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),Sn(r,{repeat:!1})})}function C_(){return bn("hair",()=>{const t=Bs(77),[n,i]=hn(128,256);for(let s=0;s<90;s++){i.strokeStyle=`rgba(${10+t()*15},${8+t()*10},${6+t()*8},${.6+t()*.4})`,i.lineWidth=.5+t()*1.1;const o=t()*128;i.beginPath(),i.moveTo(o,0),i.bezierCurveTo(o+(t()-.5)*20,256*.3,o+(t()-.5)*30,256*.6,o+(t()-.5)*40,256*(.6+t()*.4)),i.stroke()}return Sn(n,{repeat:!1})})}const rf=[[-.77,1.62,1.8],[.77,1.62,1.8]],zi=.47;function P_(r,e){const t=document.createElement("canvas");t.width=t.height=1024;const n=t.getContext("2d");n.drawImage(r,0,0,1024,1024);const i=n.getImageData(0,0,1024,1024),s=i.data,o=e==="father"?[.92,.9,.86]:e==="tiago"?[.86,.88,.92]:[.8,.86,.82];for(let u=0;u<s.length;u+=4){const f=s[u]*.3+s[u+1]*.59+s[u+2]*.11,d=e==="father"?.35:.15;s[u]=(f+(s[u]-f)*d)*o[0],s[u+1]=(f+(s[u+1]-f)*d)*o[1],s[u+2]=(f+(s[u+2]-f)*d)*o[2]}n.putImageData(i,0,0);let a=11;const l=()=>(a=a*16807%2147483647)/2147483647;n.lineCap="round";for(let u=0;u<90;u++){let f=100+l()*820,d=120+l()*700;n.strokeStyle=`rgba(${40+l()*30},${30+l()*30},${70+l()*40},${.12+l()*.22})`,n.lineWidth=.8+l()*2.2,n.beginPath(),n.moveTo(f,d);for(let m=0;m<10;m++)f+=(l()-.5)*34,d+=(l()-.3)*26,n.lineTo(f,d);n.stroke()}for(const[u,f]of[[440,300],[584,300]]){const d=n.createRadialGradient(u,f,4,u,f,90);if(d.addColorStop(0,"rgba(10,0,0,0.95)"),d.addColorStop(.35,"rgba(40,10,30,0.7)"),d.addColorStop(1,"rgba(60,30,60,0)"),n.fillStyle=d,n.beginPath(),n.arc(u,f,90,0,7),n.fill(),e!=="tiago")for(let m=0;m<3;m++){const v=u-14+m*13+l()*6,g=90+l()*170,p=n.createLinearGradient(0,f,0,f+g);p.addColorStop(0,"rgba(50,0,0,0.95)"),p.addColorStop(1,"rgba(70,0,0,0)"),n.strokeStyle=p,n.lineWidth=3+l()*5,n.beginPath(),n.moveTo(v,f+10),n.bezierCurveTo(v+(l()-.5)*12,f+g*.4,v+(l()-.5)*18,f+g*.7,v+(l()-.5)*20,f+g),n.stroke()}}const c=n.createRadialGradient(512,478,4,512,478,80);if(c.addColorStop(0,"rgba(10,0,0,0.95)"),c.addColorStop(.6,"rgba(50,5,10,0.6)"),c.addColorStop(1,"rgba(60,10,20,0)"),n.fillStyle=c,n.beginPath(),n.ellipse(512,478,90,60,0,0,7),n.fill(),e!=="father")for(let u=0;u<5;u++){const f=470+l()*85,d=80+l()*220;n.strokeStyle=`rgba(${55+l()*30},0,0,0.85)`,n.lineWidth=3+l()*6,n.beginPath(),n.moveTo(f,500),n.quadraticCurveTo(f+(l()-.5)*20,500+d/2,f+(l()-.5)*30,500+d),n.stroke()}const h=new Ki(t);return h.colorSpace=Ft,h.anisotropy=4,h}const Ss=(r,e,t)=>{const n=Math.min(1,Math.max(0,(t-r)/(e-r)));return n*n*(3-2*n)};function Ed(r,e="mother"){if(!r||!r.head)return null;const n=r.head.geometry.clone(),i=n.attributes.position;n.attributes.uv;const s=i.count,o=new Float32Array(s*3).fill(1),a=e==="scare"?1.35:e==="mother"?1.1:e==="father"?.55:.25,l=new D;for(let m=0;m<s;m++){l.fromBufferAttribute(i,m);const v=Ss(-.2,1.4,l.z);if(l.y<zi){const x=zi-l.y,A=v*Ss(2.6,.6,Math.abs(l.x));l.y-=Math.min(x,.35)/.35*a*A+x*.22*a*A,l.z-=x*.06*a*A}const g=Ss(.95,.2,Math.abs(l.x))*v*Ss(zi+.25,zi,l.y)*Ss(zi-.45,zi-.05,l.y);let p=0;for(const[x,A,w]of rf){const E=Math.hypot(l.x-x,(l.y-A)*1.25);if(l.z>.8){const L=Ss(.62,.15,E);p=Math.max(p,L),l.z-=L*.42}}const _=v*Ss(1.6,.9,Math.abs(Math.abs(l.x)-1.25)+Math.abs(l.y-.75));l.x-=Math.sign(l.x)*_*.12,i.setXYZ(m,l.x,l.y,l.z);const y=Math.max(p*.97,g*(e==="father"?.75:.96));o[m*3]=o[m*3+1]=o[m*3+2]=1-y}n.setAttribute("color",new Wt(o,3)),n.computeVertexNormals();const c="skin_"+e;r[c]=r[c]||(r.headMaps.map&&r.headMaps.map.image?P_(r.headMaps.map.image,e):null);const h=new It({map:r[c],normalMap:r.headMaps.normalMap||null,vertexColors:!0,roughness:e==="father"?.62:.42,metalness:0,sheen:.4,sheenRoughness:.6,sheenColor:new Xe(6978160),clearcoat:e==="mother"||e==="scare"?.35:.1,clearcoatRoughness:.4});h.normalScale.set(1.2,1.2);const u=new ie(n,h);u.castShadow=!0,u.receiveShadow=!0;const f=new We;f.add(u);const d=new ie(new On(1,16,12),new Re({color:393216,roughness:.3}));if(d.scale.set(.85,.5+a*.6,.6),d.position.set(0,zi-.25-a*.55,1.55),f.add(d),a>.5){const m=new Re({color:12102026,roughness:.35});for(let v=0;v<9;v++){const g=new ie(new To(.06+Math.random()*.03,.22+Math.random()*.12,5),m),p=(v/8-.5)*1.6;g.position.set(Math.sin(p)*.6,zi-.08,1.85+Math.cos(p)*.25-.25),g.rotation.x=Math.PI,f.add(g);const _=g.clone();_.position.y=zi-.3-a*1.1,_.rotation.x=0,_.position.z-=.12,f.add(_)}}if(e!=="tiago")for(const[m,v]of rf){const g=new ie(new On(.2,12,10),new It({color:131586,roughness:.05,clearcoat:1}));g.position.set(m*.96,v,1.42),f.add(g)}return f.scale.setScalar(.033),f}let bs=null;function L_(){if(bs)return bs;const r=256,e=document.createElement("canvas");e.width=e.height=r;const t=e.getContext("2d"),n=new Float32Array(r*r);let i=5;const s=()=>(i=i*16807%2147483647)/2147483647;for(let a=0;a<r*r;a++)n[a]=s()*.25;for(let a=0;a<300;a++){const l=s()*r,c=s()*r,h=10+s()*50;for(let u=0;u<h;u++){const f=Math.floor(l+u)%r,d=Math.floor(c+Math.sin(u*.2)*3+r)%r;n[d*r+f]-=.6}}const o=t.createImageData(r,r);for(let a=0;a<r;a++)for(let l=0;l<r;l++){const c=a*r+l,h=n[a*r+(l+1)%r]-n[c],u=n[(a+1)%r*r+l]-n[c],f=-h*2,d=-u*2,m=1,v=Math.hypot(f,d,m);o.data[c*4]=(f/v*.5+.5)*255,o.data[c*4+1]=(d/v*.5+.5)*255,o.data[c*4+2]=(m/v*.5+.5)*255,o.data[c*4+3]=255}return t.putImageData(o,0,0),bs=new Ki(e),bs.wrapS=bs.wrapT=$n,bs.repeat.set(3,3),bs}function D_(){const r=L_(),e=(t,n,i={})=>{const s=new It({map:sf(t,n),normalMap:r,roughness:i.rough??.5,sheen:.35,sheenRoughness:.7,sheenColor:new Xe(i.sheen??8030848),clearcoat:i.wet??.2,clearcoatRoughness:.45});return s.normalScale.set(.6,.6),s};return{deadSkin:e(22,[104,108,98],{wet:.4}),paleSkin:e(21,[138,128,112],{rough:.6,wet:.08}),childSkin:e(25,[186,168,154],{rough:.65,wet:0}),demonSkin:e(29,[30,27,26],{rough:.25,wet:.9,sheen:3153952}),gown:new Re({map:Mn(23,[140,132,114],2),roughness:.95,side:pn,alphaMap:of(),alphaTest:.5}),shirt:new Re({map:Mn(24,[92,96,84],1.9),roughness:.95,side:pn}),pants:new Re({map:Mn(26,[52,48,42],.4),roughness:.95}),childDress:new Re({map:Mn(27,[170,120,138],.4),roughness:.95,side:pn,alphaMap:of(3),alphaTest:.5}),hair:new Re({map:C_(),alphaTest:.32,side:pn,roughness:.42,color:2761760}),nail:new Re({color:2760728,roughness:.3}),hole:new Mi({color:0}),ghost:new Re({color:723723,roughness:1}),horn:new Re({map:sf(30,[70,62,52]),roughness:.75}),demonMouth:new Re({color:1048576,emissive:5244928,emissiveIntensity:1.5})}}function of(r=1){const n=document.createElement("canvas");n.width=256,n.height=256;const i=n.getContext("2d");i.fillStyle="#fff",i.fillRect(0,0,256,256);let s=r*77+1;const o=()=>(s=s*16807%2147483647)/2147483647;i.fillStyle="#000",i.beginPath(),i.moveTo(0,256);for(let l=0;l<=40;l++)i.lineTo(l/40*256,252-o()*40*(o()<.25?2:1));i.lineTo(256,256),i.fill();for(let l=0;l<18;l++)i.beginPath(),i.ellipse(o()*256,256*.45+o()*256*.45,2+o()*8,3+o()*12,o()*3,0,7),i.fill();return new Ki(n)}function gi(r,e,t,n=12){const i=[];for(let l=0;l<=16;l++){const c=l/16;let h=e[0][1];for(let u=1;u<e.length;u++)if(c<=e[u][0]){const f=e[u-1],d=e[u],m=(c-f[0])/(d[0]-f[0]);h=f[1]+(d[1]-f[1])*(m*m*(3-2*m));break}i.push(new se(Math.max(.002,h),-c*r))}i.unshift(new se(.001,0)),i.push(new se(.001,-r));const s=new ks(i,n),o=new We,a=new ie(s,t);return a.castShadow=!0,a.receiveShadow=!0,o.add(a),o.userData.mesh=a,o}function I_(r,e,t,n=9,i=1){const s=[];for(let h=0;h<=24;h++){const u=h/24;let f=r(u);s.push(new se(f,-u*e))}const o=new ks(s,40),a=o.attributes.position,l=new D;for(let h=0;h<a.count;h++){l.fromBufferAttribute(a,h);const u=Math.atan2(l.z,l.x),f=-l.y/e,d=Math.hypot(l.x,l.z),m=1+(Math.sin(u*n+i+f*2.5)*.06+Math.sin(u*n*2.3+i*3)*.025)*(.3+f);a.setXYZ(h,Math.cos(u)*d*m,l.y,Math.sin(u)*d*m)}o.computeVertexNormals();const c=new ie(o,t);return c.castShadow=!0,c.receiveShadow=!0,c}function N_(r,e={},t=null){const n=e.h??1.7,i=n/1.7,s=e.thin??1,o=e.armK??1,a=e.skin||r.deadSkin,l=e.top||a,c=e.bottom||a,h={};h.root=new We,h.hips=new We,h.hips.position.y=.95*i,h.root.add(h.hips);const u=gi(.62*i,[[0,.07],[.1,.13],[.35,.115],[.55,.135],[.78,.15],[.9,.12],[1,.05]].map(([m,v])=>[m,v*s*i]),l,20);if(u.rotation.x=Math.PI,u.position.y=-.1*i,u.userData.mesh.scale.set(1.15,1,.72),h.spine=new We,h.spine.position.y=0,h.hips.add(h.spine),h.spine.add(u),e.ribs)for(let m=0;m<6;m++){const v=new ie(new us(.135*s*i,.006*i,4,16,Math.PI*.9),a);v.position.set(0,(.3+m*.035)*i,0),v.rotation.set(Math.PI/2,0,Math.PI*.05-Math.PI*.45),v.scale.set(1.05,.62,1),h.spine.add(v)}h.neck=new We,h.neck.position.y=.5*i,h.spine.add(h.neck);const f=gi(.13*i*(e.longNeck??1),[[0,.05],[.5,.042],[1,.05]].map(([m,v])=>[m,v*i*s]),a,12);f.rotation.x=Math.PI,f.position.y=-.02*i,h.neck.add(f),h.head=new We,h.head.position.y=.11*i*(e.longNeck??1),h.neck.add(h.head);const d=e.face&&t?Ed(t,e.face):null;if(d)d.scale.multiplyScalar(i*(e.headK??1)*1.28),d.position.set(0,.03*i,-.012*i),h.head.add(d),h.face=d,h.mouth=d.children[1];else{const m=new ie(new On(.105*i,24,18),a);m.scale.set(.86,1.15*(e.longHead??1),.98),m.position.y=.09*i*(e.longHead??1),m.castShadow=!0,h.head.add(m);const v=new ie(new On(.03*i,10,8),e.mouthMat||r.hole);v.position.set(0,.07*i,.092*i),v.scale.set(.35,3.2,.5),h.head.add(v),h.mouth=v}for(const m of[-1,1]){const v=m<0?"L":"R",g=new We;g.position.set(m*.19*s*i,.43*i,0),h.spine.add(g);const p=.29*i*o,_=.27*i*o,y=gi(p,[[0,.055],[.25,.05],[.8,.036],[1,.034]].map(([O,z])=>[O,z*i*s]),e.sleeves?l:a);g.add(y);const x=new We;x.position.y=-p,y.add(x),x.add(gi(_,[[0,.034],[.25,.038],[.85,.024],[1,.022]].map(([O,z])=>[O,z*i*s]),a));const A=new We;A.position.y=-_,x.add(A);const w=gi(.085*i,[[0,.022],[.5,.03],[1,.026]].map(([O,z])=>[O,z*i]),a,8);w.userData.mesh.scale.set(1.2,1,.45),A.add(w);const E=e.fingerK??1;for(let O=0;O<4;O++){const z=new We;z.position.set((O-1.5)*.017*i,-.08*i,0),z.rotation.set(.12+O*.04,0,(O-1.5)*.06),A.add(z);const G=.045*i*E,Y=.04*i*E;z.add(gi(G,[[0,.0085*i],[1,.007*i]],a,6));const W=new We;W.position.y=-G,W.rotation.x=.35,z.add(W),W.add(gi(Y,[[0,.007*i],[1,.0045*i]],a,6));const Q=new ie(new To(.004*i,.014*i*E,5),r.nail);Q.position.y=-Y-.005*i,Q.rotation.x=Math.PI,W.add(Q)}const L=gi(.05*i*E,[[0,.01*i],[1,.006*i]],a,6);L.position.set(m*-.025*i,-.035*i,.01*i),L.rotation.z=m*-.7,A.add(L),h["arm"+v]=y,h["fore"+v]=x,h["hand"+v]=A,h["shoulder"+v]=g;const M=.45*i,S=.44*i,C=gi(M,[[0,.085],[.2,.08],[.85,.048],[1,.045]].map(([O,z])=>[O,z*i*s]),c);C.position.set(m*.09*i,0,0),h.hips.add(C);const F=new We;F.position.y=-M,C.add(F),F.add(gi(S,[[0,.045],[.25,.05],[.85,.03],[1,.028]].map(([O,z])=>[O,z*i*s]),e.barelegs?a:c));const B=gi(.21*i,[[0,.03],[.3,.035],[1,.022]].map(([O,z])=>[O,z*i]),a,8);B.rotation.x=-Math.PI/2,B.position.set(0,-S,-.04*i),B.userData.mesh.scale.set(1.25,1,.6),F.add(B),h["leg"+v]=C,h["shin"+v]=F}if(e.dress){const m=.95*i*(e.dressLen??1),v=I_(g=>(.17+g*.13+Math.sin(g*Math.PI)*.02)*i*s,m,e.dress,9,e.seed??1);v.position.y=.52*i,h.spine.add(v),h.dress=v}if(e.hair){const m=new We;h.head.add(m),h.hair=m;const v=(e.hairLen??.6)*i,g=26;for(let _=0;_<g;_++){const y=_/g*Math.PI*2,x=Math.cos(y)>.55;if(x&&!e.hairFace)continue;const A=(.06+Math.random()*.05)*i,w=new Zn(A,v*(.8+Math.random()*.35),1,6),E=w.attributes.position;for(let S=0;S<E.count;S++){const F=.5-E.getY(S)/v;E.setZ(S,Math.max(0,.35-F)*.06*i+F*.01*i)}w.translate(0,-v/2*.95,0);const L=new ie(w,r.hair),M=.085*i;L.position.set(Math.sin(y)*M,.19*i,Math.cos(y)*M*.95),L.rotation.y=y,L.rotation.x=x?-.12:.08,L.castShadow=!0,m.add(L)}const p=new ie(new On(.105*i,16,10,0,Math.PI*2,0,Math.PI*.55),new Re({color:920329,roughness:.55}));p.position.set(0,.105*i,-.012*i),p.scale.set(1,1.05,1.12),m.add(p)}return h.root.traverse(m=>{m.isMesh&&(m.userData.creature=!0)}),h}const kt=(r,e,t)=>new D(r,e,t),U_=kt(0,-1,0),lt={hips:kt(.5,92,5.5),chest:kt(.5,125,6),neck:kt(1,141,4),headJ:kt(3,148,5),top:kt(3,168,4),shL:kt(-13.5,136,2),elL:kt(-14.5,108.5,-.5),wrL:kt(-21,86,6.6),tipL:kt(-22.5,71,8),shR:kt(16,136,2),elR:kt(23,115,-9),wrR:kt(17.5,99,12),tipR:kt(14,94,15),hipL:kt(-5.5,87,5),knL:kt(-3.2,50,4),anL:kt(-.5,13,-10),toeL:kt(.5,2,4),hipR:kt(5,87,6),knR:kt(5.5,50,8),anR:kt(4.7,9,-2),toeR:kt(5,2,15)};function O_(r,e){const t=document.createElement("canvas");t.width=t.height=1024;const n=t.getContext("2d");n.drawImage(r,0,0,1024,1024);const i=n.getImageData(0,0,1024,1024),s=i.data;for(let c=0;c<s.length;c+=4){const h=s[c]*.3+s[c+1]*.59+s[c+2]*.11,u=e==="hair"?.2:.12,f=e==="hair"?.4:.6;s[c]=(h+(s[c]-h)*u)*f*.95,s[c+1]=(h+(s[c+1]-h)*u)*f,s[c+2]=(h+(s[c+2]-h)*u)*f*.96}n.putImageData(i,0,0);let o=e.length*77+5;const a=()=>(o=o*16807%2147483647)/2147483647;if(e==="face"){for(const[f,d]of[[.322,.392],[.49,.392]]){const m=f*1024,v=d*1024,g=n.createRadialGradient(m,v,2,m,v,70);g.addColorStop(0,"rgba(0,0,0,1)"),g.addColorStop(.35,"rgba(5,0,0,0.95)"),g.addColorStop(.7,"rgba(40,10,30,0.5)"),g.addColorStop(1,"rgba(40,20,40,0)"),n.fillStyle=g,n.beginPath(),n.ellipse(m,v,70,52,0,0,7),n.fill();for(let p=0;p<3;p++){const _=m-18+p*16,y=120+a()*220,x=n.createLinearGradient(0,v,0,v+y);x.addColorStop(0,"rgba(60,0,0,0.95)"),x.addColorStop(1,"rgba(60,0,0,0)"),n.strokeStyle=x,n.lineWidth=6+a()*8,n.beginPath(),n.moveTo(_,v+20),n.quadraticCurveTo(_+(a()-.5)*20,v+y/2,_+(a()-.5)*26,v+y),n.stroke()}}const c=.405*1024,h=.6*1024,u=n.createRadialGradient(c,h,2,c,h,80);u.addColorStop(0,"rgba(0,0,0,0.95)"),u.addColorStop(.5,"rgba(30,0,5,0.7)"),u.addColorStop(1,"rgba(30,0,5,0)"),n.fillStyle=u,n.beginPath(),n.ellipse(c,h,80,50,0,0,7),n.fill()}n.lineCap="round";for(let c=0;c<(e==="hair"?0:120);c++){let h=a()*1024,u=a()*1024;n.strokeStyle=`rgba(40,30,60,${.08+a()*.15})`,n.lineWidth=1+a()*2,n.beginPath(),n.moveTo(h,u);for(let f=0;f<8;f++)h+=(a()-.5)*30,u+=(a()-.3)*24,n.lineTo(h,u);n.stroke()}for(let c=0;c<(e==="body"?45:8);c++){const h=a()*1024,u=a()*1024,f=10+a()*60,d=n.createRadialGradient(h,u,1,h,u,f);d.addColorStop(0,`rgba(${50+a()*30},0,0,${.5+a()*.4})`),d.addColorStop(1,"rgba(40,0,0,0)"),n.fillStyle=d,n.beginPath(),n.arc(h,u,f,0,7),n.fill()}const l=new Ki(t);return l.colorSpace=Ft,l.anisotropy=4,l.flipY=!0,l}function F_(r,e,t,n){const i=t.clone().sub(e),s=ai.clamp(r.clone().sub(e).dot(i)/i.lengthSq(),0,1);return r.distanceTo(e.clone().addScaledVector(i,s))/n}function k_(r,e,t={}){const n=t.h??1.62,i=n/168,s=kt(-.5,0,-5.5),o=M=>M.clone().add(s).multiplyScalar(i),a={};a.root=new We,a.hips=new We,a.hips.position.copy(o(lt.hips)).setX(0).setZ(0),a.root.add(a.hips),a.spine=new We,a.hips.add(a.spine),a.neck=new We,a.neck.position.copy(lt.neck.clone().sub(lt.hips).multiplyScalar(i)),a.spine.add(a.neck),a.head=new We,a.head.position.copy(lt.headJ.clone().sub(lt.neck).multiplyScalar(i)),a.neck.add(a.head),a.hair=new We,a.head.add(a.hair),a.mouth=new Ot,a.mouth.scale.set(1,1,1),a.head.add(a.mouth);const l={L:["shL","elL","wrL","tipL","hipL","knL","anL","toeL"],R:["shR","elR","wrR","tipR","hipR","knR","anR","toeR"]};for(const M of["L","R"]){const[S,C,F,B,O,z,G]=l[M],Y=new We;Y.position.copy(lt[S].clone().sub(lt.hips).multiplyScalar(i)),a.spine.add(Y);const W=new We;Y.add(W);const Q=new We;Q.position.y=-lt[C].distanceTo(lt[S])*i,W.add(Q);const ce=new We;ce.position.y=-lt[F].distanceTo(lt[C])*i,Q.add(ce);const ve=new We;ve.position.copy(lt[O].clone().sub(lt.hips).multiplyScalar(i)),a.hips.add(ve);const Oe=new We;Oe.position.y=-lt[z].distanceTo(lt[O])*i,ve.add(Oe),Object.assign(a,{["shoulder"+M]:Y,["arm"+M]:W,["fore"+M]:Q,["hand"+M]:ce,["leg"+M]:ve,["shin"+M]:Oe})}const c={},h=[],u=(M,S,C)=>{const F=new lh;return F.name=M,F.position.copy(C),S&&S.add(F),c[M]=F,h.push(F),F},f=(M,S)=>lt[M].clone().sub(lt[S]).multiplyScalar(i),d=u("hips",null,o(lt.hips));u("spine",d,kt(0,0,0)),u("neck",c.spine,f("neck","hips")),u("head",c.neck,f("headJ","neck"));const m={};for(const M of["L","R"]){const[S,C,F,B,O,z,G,Y]=l[M];u("shoulder"+M,c.spine,f(S,"hips")),u("arm"+M,c["shoulder"+M],kt(0,0,0)),u("fore"+M,c["arm"+M],f(C,S)),u("hand"+M,c["fore"+M],f(F,C)),u("leg"+M,d,f(O,"hips")),u("shin"+M,c["leg"+M],f(z,O));const W=(Q,ce)=>new Si().setFromUnitVectors(U_,lt[ce].clone().sub(lt[Q]).normalize());m["arm"+M]=W(S,C),m["fore"+M]=W(C,F),m["hand"+M]=W(F,B),m["leg"+M]=W(O,z),m["shin"+M]=W(z,G)}const v=new Ga(h),g=[["hips",lt.hips.clone().setY(76),lt.hips.clone().setY(104),15],["spine",lt.hips.clone().setY(104),lt.neck,14],["neck",lt.neck,lt.headJ,6],["head",lt.headJ,lt.top,11]];for(const M of["L","R"]){const[S,C,F,B,O,z,G,Y]=l[M];g.push(["arm"+M,lt[S],lt[C],4.8],["fore"+M,lt[C],lt[F],4.2],["hand"+M,lt[F],lt[B],4.5],["leg"+M,lt[O],lt[z],8.5],["shin"+M,lt[z],lt[G],6],["shin"+M,lt[G],lt[Y],5.5])}const p=new Set(["hips|spine","spine|neck","neck|head","spine|armL","spine|armR","armL|foreL","armR|foreR","foreL|handL","foreR|handR","hips|legL","hips|legR","legL|shinL","legR|shinR"]),_=(M,S)=>p.has(M+"|"+S)||p.has(S+"|"+M),y=Object.fromEntries(h.map((M,S)=>[M.name,S])),x={},A=[];for(const[M,S]of Object.entries(r)){const C=S.p.length/3,F=new Float32Array(C*3),B=new Uint16Array(C*4),O=new Float32Array(C*4),z=new D;for(let Q=0;Q<C;Q++){z.set(S.p[Q*3],S.p[Q*3+1],S.p[Q*3+2]);let ce=[["head",0]];if(M==="01"||M==="02")ce=[[z.y<lt.neck.y+2?"neck":"head",0]];else{const Oe=g.map(([J,fe,Ce,de])=>[J,F_(z,fe,Ce,de)]).sort((J,fe)=>J[1]-fe[1]);ce=[Oe[0]];const Je=Oe.find(J=>J[0]!==Oe[0][0]);Je&&_(Oe[0][0],Je[0])&&Je[1]<Oe[0][1]*1.8+.25&&ce.push(Je)}if(ce.length===2){const Oe=1/Math.pow(ce[0][1]+.05,3),Je=1/Math.pow(ce[1][1]+.05,3),J=Oe+Je;B[Q*4]=y[ce[0][0]],O[Q*4]=Oe/J,B[Q*4+1]=y[ce[1][0]],O[Q*4+1]=Je/J}else B[Q*4]=y[ce[0][0]],O[Q*4]=1;const ve=o(z);F[Q*3]=ve.x,F[Q*3+1]=ve.y,F[Q*3+2]=ve.z}const G=new Ht;G.setAttribute("position",new Wt(F,3)),G.setAttribute("uv",new Wt(new Float32Array(S.u),2)),G.setAttribute("normal",new Wt(new Float32Array(S.n),3)),G.setAttribute("skinIndex",new Wt(B,4)),G.setAttribute("skinWeight",new Wt(O,4));const Y=M==="01"?"hair":M==="02"?"face":"body";x[Y]=x[Y]||new It({map:e[Y]?O_(e[Y],Y):null,roughness:Y==="hair"?.6:.62,side:pn,sheen:Y==="hair"?0:.12,sheenColor:new Xe(5925472),clearcoat:.08,clearcoatRoughness:.6});const W=new id(G,x[Y]);W.castShadow=!0,W.receiveShadow=!0,W.frustumCulled=!1,W.userData.creature=!0,A.push(W)}a.root.add(d),a.root.updateMatrixWorld(!0);for(const M of A)a.root.add(M),M.bind(v);const w=new Si,E=new Si,L=(M,S,C)=>{const F=c[M],B=m[M]||E;w.copy(C||E).multiply(S.quaternion).multiply(B.clone().invert()),F.quaternion.copy(w)};return a.drive=()=>{d.position.set(a.hips.position.x,a.hips.position.y,a.hips.position.z).add(o(lt.hips).setY(0)),d.quaternion.copy(a.hips.quaternion),c.spine.quaternion.copy(a.spine.quaternion),c.neck.quaternion.copy(a.neck.quaternion),c.head.quaternion.copy(a.head.quaternion);for(const M of["L","R"])c["shoulder"+M].quaternion.copy(a["shoulder"+M].quaternion),L("arm"+M,a["arm"+M],null),L("fore"+M,a["fore"+M],m["arm"+M]),L("hand"+M,a["hand"+M],m["fore"+M]),L("leg"+M,a["leg"+M],null),L("shin"+M,a["shin"+M],m["leg"+M])},a.real=!0,a.meshes=A,a.mats=x,a.drive(),a}const Yi=(r=0,e=0,t=0)=>new D(r,e,t),zc=Yi(),va=Yi();let fr=null;function B_(r){fr=r}function z_(){const r=D_();return{...r,greySkin:r.deadSkin,nightgown:r.gown,eyeShine:r.hole}}function _i(r,e={}){const t={...e};return t.dress===void 0&&t.top===r.nightgown&&(t.dress=r.gown,t.top=t.skin),t.faceless&&(t.face=null),N_(r,t,fr)}class _h{constructor(e,t,n={}){this.g=e,this.P=t,this.root=t.root,this.pos=Yi(),this.yaw=0,this.vel=Yi(),this.active=!1,this.state="idle",this.t=0,this.stateT=0,this.hp=n.hp??3,this.maxHp=this.hp,this.stun=0,this.path=[],this.repath=0,this.atkCD=0,this.stepT=0,this.poseClock=0,this.radius=n.radius??.35,this.root.visible=!1,e.scene.add(this.root)}setState(e){this.state=e,this.stateT=0}show(e){this.active=e,this.root.visible=e}place(e,t,n,i=0){this.pos.set(e,t,n),this.yaw=i,this.sync()}sync(){this.root.position.copy(this.pos),this.root.rotation.y=this.yaw,this.P.drive&&this.P.drive()}chest(){return zc.copy(this.pos).setY(this.pos.y+1.2)}dist(){const e=this.g.player.pos;return Math.hypot(e.x-this.pos.x,e.z-this.pos.z)}faceTo(e,t,n=1){let s=Math.atan2(e-this.pos.x,t-this.pos.z)-this.yaw;for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;this.yaw+=s*Math.min(1,n)}moveToward(e,t,n,i=!0){const s=this.g.level;this.repath-=n,this.repath<=0&&(this.repath=.3+Math.random()*.15,s.clearLine(this.pos.x,this.pos.z,e.x,e.z)?this.path=[Yi(e.x,0,e.z)]:this.path=s.findPath(this.pos.x,this.pos.z,e.x,e.z)||[]);let o=this.path[0];for(;o&&Math.hypot(o.x-this.pos.x,o.z-this.pos.z)<.25&&this.path.length>1;)this.path.shift(),o=this.path[0];if(!o)return 0;const a=o.x-this.pos.x,l=o.z-this.pos.z,c=Math.hypot(a,l);if(c<.01)return 0;const h=Math.min(c,t*n);return this.pos.x+=a/c*h,this.pos.z+=l/c*h,i&&(this.pos.y=s.floorY(this.pos.x,this.pos.z)),this.faceTo(o.x,o.z,n*8),s.pushDoors(this.pos,this.g.audio),h}isSeen(e){const t=this.g,n=t.camera,i=e||this.chest();va.copy(i).sub(n.position);const s=va.length();va.divideScalar(s);const o=n.userData.fwd,a=va.dot(o);return a<Math.cos(ai.degToRad(48))||!t.level.los(n.position,i)?!1:t.lightsOn||s<2.2||t.player.flashlightOn&&a>Math.cos(.55)&&s<16||t.flashT>0}aimPoint(){return zc.copy(this.pos).setY(this.pos.y+(this.aimH??1.2))}hitBy(e,t=0){if(!this.active||this.state==="hidden"||this.state==="idle")return null;const i=new Oa(e.origin,e.direction,0,40).intersectObject(this.root,!0);if(i.length)return i[0];const s=this.aimPoint().clone(),o=s.distanceTo(e.origin),a=(this.hitR??.42)+o*t,l=new D;return e.intersectSphere(new bi(s,a),l)?{point:l,distance:l.distanceTo(e.origin),face:null}:null}attack(e){this.g.player.damage(e,this.pos),this.atkCD=1.2}pushPlayerApart(){const e=this.g.player.pos,t=e.x-this.pos.x,n=e.z-this.pos.z,i=Math.hypot(t,n),s=this.radius+.3;if(i<s&&i>.001){const o=s-i;this.pos.x-=t/i*o,this.pos.z-=n/i*o}}}const xa=2.68;class V_ extends _h{constructor(e,t){const n=fr&&fr.female?k_(fr.female.data,fr.female.imgs,{h:1.64}):_i(t,{h:1.62,thin:.72,armK:1.45,fingerK:1.9,skin:t.greySkin,dress:t.gown,dressLen:.72,hair:!0,hairFace:!1,hairLen:.8,face:"mother",barelegs:!0});super(e,n,{hp:3,radius:.42}),this.hitR=.5,this.onCeiling=!1,this.fleeTo=null,this.onFlee=null,this.skT=0,this.retreatT=0,this.flip=0}pose(e,t){const n=this.P,i=e*8.5,s=i+2.1,o=i+3.6,a=i+5.4,l=.35+t*.65,c=Math.sin(i),h=Math.sin(s),u=Math.sin(o),f=Math.sin(a),d=Math.cos(i),m=Math.cos(o);n.hips.position.y=.5+(Math.abs(c)+Math.abs(u))*.045*l,n.hips.rotation.set(1.42+Math.sin(i*2)*.05*l,0,Math.sin(i*2)*.1*l),n.spine.rotation.set(-.12+Math.sin(o*2)*.04*l,0,-Math.sin(i*2)*.14*l),n.neck.rotation.set(-.9,0,Math.sin(e*13)*.06),n.head.rotation.set(-.7+Math.sin(e*31)*.04,this.onCeiling?Math.PI*.92:0,.35+Math.sin(e*17)*.06+Math.sin(e*47)*.03),n.armL.rotation.set(-2.3+c*.5*l,.15,-.5+d*.22*l),n.armR.rotation.set(-2.3+u*.5*l,-.15,.5+m*.22*l),n.foreL.rotation.set(1.1+Math.max(0,-c)*.5*l,0,.3),n.foreR.rotation.set(1.1+Math.max(0,-u)*.5*l,0,-.3),n.handL.rotation.set(.85,0,Math.sin(i+1)*.2),n.handR.rotation.set(.85,0,Math.sin(o+1)*.2),n.legL.rotation.set(-.6+f*.4*l,0,-1.05+Math.sin(a)*.12),n.legR.rotation.set(-.6+h*.4*l,0,1.05+Math.sin(s)*.12),n.shinL.rotation.set(-2+Math.max(0,f)*.45*l,0,0),n.shinR.rotation.set(-2+Math.max(0,h)*.45*l,0,0),n.hair&&(n.hair.rotation.x=(this.onCeiling?-1.4:1.2)+Math.sin(e*2.3)*.07)}stunPose(e){const t=this.P;t.hips.position.y=.35,t.hips.rotation.set(1.2,0,Math.sin(e*23)*.2),t.spine.rotation.set(-.6+Math.sin(e*40)*.15,0,0),t.armL.rotation.set(-2.9,0,-.3+Math.sin(e*31)*.4),t.armR.rotation.set(-2.9,0,.3+Math.sin(e*29)*.4),t.foreL.rotation.set(-1.8,0,0),t.foreR.rotation.set(-1.8,0,0),t.neck.rotation.x=-.2+Math.sin(e*50)*.3,t.head.rotation.set(0,Math.sin(e*37)*.8,Math.sin(e*19)*.5),t.legL.rotation.set(-.4+Math.sin(e*27)*.4,0,-.6),t.legR.rotation.set(-.4-Math.sin(e*25)*.4,0,.6)}setCeiling(e){this.onCeiling=e,this.root.rotation.z=e?Math.PI:0}toCeiling(e,t,n="ceiling"){this.show(!0),this.setCeiling(!0),this.pos.set(e,xa,t),this.setState(n),this.stun=0}hunt(e,t){this.hp=this.maxHp,this.toCeiling(e,t,"ceilHunt")}drop(){this.setCeiling(!1),this.setState("drop"),this.pos.y=2.1,this.dropV=0}hurt(e){if(!["flee","hidden"].includes(this.state)){if(this.hp--,this.g.audio.scream(this.pos.clone().setY(this.pos.y>1.5?2.2:.8),{pitch:1.3,dur:.7}),this.g.spawnBlood(e.point,e.face?e.face.normal:null),this.hp<=0){this.flee();return}if(this.onCeiling||this.state==="poise"){this.fall();return}this.stun=Math.max(this.stun,.8)}}flashed(){["flee","hidden","ceiling","climb"].includes(this.state)||(this.g.audio.scream(this.pos.clone().setY(this.onCeiling?2.2:.8),{pitch:1.6,dur:1.2,vol:.9}),this.onCeiling||this.state==="poise"?this.fall():(this.stun=3.2,this.setState("floor")))}fall(){this.setCeiling(!1),this.setState("fall"),this.pos.y=2.2,this.dropV=0}flee(){this.setState("flee"),this.stun=0,this.g.audio.scream(this.pos.clone().setY(1),{pitch:1.1,dur:2.2,vol:1.2})}poseUpright(e,t){const n=this.P,i=e*6.5,s=Math.sin(e*31)*.05;n.hips.position.y=.88+Math.abs(Math.sin(i))*.03*t,n.hips.rotation.set(0,0,Math.sin(i)*.06+s),n.spine.rotation.set(.32+s,0,-.08),n.neck.rotation.set(.25,.1,.75+Math.sin(e*9)*.06),n.head.rotation.set(-.35,0,.25+s*2),n.armL.rotation.set(-1.35+Math.sin(i)*.2*t,0,-.18),n.armR.rotation.set(-1.5-Math.sin(i)*.2*t,0,.22),n.foreL.rotation.set(-.25,0,0),n.foreR.rotation.set(-.15,0,0),n.handL.rotation.set(.5,0,0),n.handR.rotation.set(.5,0,0),n.legL.rotation.set(Math.sin(i)*.45*t,0,-.06),n.legR.rotation.set(-Math.sin(i)*.45*t,0,.06),n.shinL.rotation.set(Math.max(0,-Math.sin(i))*.7*t+.08,0,0),n.shinR.rotation.set(Math.max(0,Math.sin(i))*.7*t+.08,0,0),n.hair&&(n.hair.rotation.x=.1)}update(e){if(!this.active)return;this.t+=e,this.stateT+=e,this.atkCD-=e;const t=this.g,n=t.audio,i=t.level;this.poseClock-=e;const s=this.poseClock<=0;s&&(this.poseClock=1/18);const o=this.state;if(o!=="hidden"){if(this.aimH=this.onCeiling?-.42:o==="floor"?1.15:.45,o==="ceiling"){s&&this.pose(this.t*.2,.15),this.sync();return}if(o==="ceilHunt"||o==="ceilRetreat"){let a=t.player.pos;o==="ceilRetreat"&&(a=this.retreatTo||a,this.stateT>5&&this.setState("ceilHunt"));const l=o==="ceilHunt"&&this.dist()<5.5&&this.isSeen();l?(this.stareT=(this.stareT||0)+e,s&&this.pose(this.t*.1,0),this.stareT>1.3&&!this.dashT&&(this.dashT=.8,n.scream(this.pos.clone().setY(2.4),{pitch:1.5,dur:.7,vol:1.1}),t.flickerT=Math.max(t.flickerT||0,.35))):this.stareT=0,this.dashT>0&&(this.dashT-=e);const c=o==="ceilRetreat"?3.2:this.dashT>0?4.8:l?0:this.dist()>6?2.6:1.9,h=this.moveToward(a,c,e,!1);this.pos.y=xa,s&&!(l&&!this.dashT)&&this.pose(this.t,h>0?1:0),this.skT-=e,this.skT<=0&&h>0&&(this.skT=.2+Math.random()*.12,n.skitter(this.pos.clone(),.14,.6)),Math.random()<e*.25&&n.creak(this.pos.clone(),1.2,.5,1.1),o==="ceilHunt"&&this.dist()<2.2&&this.atkCD<=0&&i.los(t.camera.position,this.pos.clone().setY(2.3))&&(this.setState("poise"),n.scream(this.pos.clone().setY(2.3),{pitch:1.3,dur:.8,vol:1.1}),t.flickerT=.6),this.sync();return}if(o==="poise"){s&&(this.pose(this.t*3,.3),this.P.neck.rotation.z=Math.sin(this.t*40)*.3),this.faceTo(t.player.pos.x,t.player.pos.z,e*6),this.stateT>.9&&(this.drop(),this.lunge=this.dist()<2.6),this.sync();return}if(o==="drop"||o==="fall"){if(this.dropV-=11*e,this.pos.y+=this.dropV*e,this.lunge){const l=t.player.pos,c=l.x-this.pos.x,h=l.z-this.pos.z,u=Math.hypot(c,h)||1,f=Math.max(0,Math.min(u-.7,2.5*e));this.pos.x+=c/u*f,this.pos.z+=h/u*f,this.faceTo(l.x,l.z,1)}const a=i.floorY(this.pos.x,this.pos.z);this.pos.y<=a&&(this.pos.y=a,n.bodyFall(this.pos.clone()),t.shake(.25),this.setState("floor"),o==="fall"?this.stun=3.3:(this.stun=.5,this.lunge&&this.dist()<1.4&&(this.attack(16),n.scream(this.pos.clone().setY(1.4),{pitch:1.35,dur:.6}),this.atkCD=1.4)),this.lunge=!1),s&&this.stunPose(this.t),this.sync();return}if(this.stun>0){this.stun-=e,this.aimH=.4,s&&this.stunPose(this.t),this.pushPlayerApart(),this.sync();return}if(o==="floor"){const a=this.moveToward(t.player.pos,2.3,e);s&&this.poseUpright(this.t,a>0?1:0),this.stepT-=e,this.stepT<=0&&a>0&&(this.stepT=.42,n.footstep("wood",this.pos,.5),Math.random()<.3&&n.boneCrack(this.pos.clone().setY(1.5),1)),this.dist()<1.1&&this.atkCD<=0?(this.attack(16),n.scream(this.pos.clone().setY(1.4),{pitch:1.4,dur:.5}),this.climb()):this.stateT>4.5&&this.climb(),this.pushPlayerApart(),this.sync();return}if(o==="climb"){if(this.pos.y+=e*5,s&&this.stunPose(this.t),this.pos.y>=xa-.5){this.setCeiling(!0),this.pos.y=xa,n.skitter(this.pos.clone(),.5,.8);const a=t.player.pos,l=i.stalkerSpots.filter(c=>Math.hypot(c.x-a.x,c.z-a.z)>4.5&&i.floorY(c.x,c.z)===0);this.retreatTo=l[Math.floor(Math.random()*l.length)]||i.stalkerSpots[0],this.setState("ceilRetreat"),this.atkCD=3}this.sync();return}if(o==="flee"){this.onCeiling&&this.setCeiling(!1);const a=this.fleeTo||Yi(15,0,7),l=this.moveToward(a,5.5,e);s&&this.pose(this.t,1),(Math.hypot(a.x-this.pos.x,a.z-this.pos.z)<.6||this.stateT>5)&&(this.show(!1),this.setState("hidden"),this.onFlee&&this.onFlee()),l&&Math.random()<e*6&&n.skitter(this.pos,.3,.5),this.sync();return}o==="chase"&&this.climb(),this.sync()}}climb(){this.setState("climb"),this.stun=0}}class H_ extends _h{constructor(e,t){const n=_i(t,{h:1.88,thin:.95,armK:1.25,fingerK:1.4,skin:t.paleSkin,top:t.shirt,bottom:t.pants,face:"father",sleeves:!0,hair:!0,hairLen:.14});super(e,n,{hp:3,radius:.35}),this.seen=!1,this.unseenT=0,this.creakT=0,this.headTurned=!1,this.idlePose()}idlePose(){const e=this.P;e.spine.rotation.x=.12,e.neck.rotation.x=.35,e.neck.rotation.z=.42,e.armL.rotation.set(.05,0,.06),e.armR.rotation.set(.05,0,-.06),e.foreL.rotation.set(-.08,0,0),e.foreR.rotation.set(-.1,0,0),e.legL.rotation.set(0,0,0),e.legR.rotation.set(0,0,0),e.shinL.rotation.set(0,0,0),e.shinR.rotation.set(0,0,0),e.head.rotation.y=this.headTurned?Math.PI:0}approachPose(e){const t=this.P;t.armL.rotation.set(-1.2*e,0,.1),t.armR.rotation.set(-1.3*e,0,-.1),t.foreL.rotation.set(-.2,0,0),t.foreR.rotation.set(-.3,0,0),t.neck.rotation.z=.42+e*.4}hurt(e){this.hp--,this.g.audio.boneCrack(this.chest().clone(),3),this.g.spawnBlood(e.point,e.face?e.face.normal:null),this.stun=.5,this.hp<=0&&(this.hp=this.maxHp,this.vanish())}flashed(){this.state==="hunt"&&this.dist()<9&&this.vanish()}vanish(){this.g.audio.whisper(this.chest().clone(),1.2,.8);const t=this.g.level.stalkerSpots,n=this.g.player.pos,i=t.filter(o=>Math.hypot(o.x-n.x,o.z-n.z)>7),s=i[Math.floor(Math.random()*i.length)]||t[0];this.place(s.x,this.g.level.floorY(s.x,s.z),s.z,Math.random()*6),this.relocated=1.5}update(e){if(!this.active)return;this.t+=e,this.stateT+=e,this.atkCD-=e;const t=this.g,n=t.audio;if(this.state==="idle"){this.sync();return}if(this.relocated>0&&(this.relocated-=e),this.stun>0){this.stun-=e,this.sync();return}this.seen=this.isSeen()||this.isSeen(zc.copy(this.pos).setY(this.pos.y+1.75));const i=this.dist();if(this.state==="hunt"){if(this.seen)this.unseenT=0,Math.random()<e*.25&&(n.boneCrack(this.chest().clone().setY(this.pos.y+1.7),1),this.P.neck.rotation.z+=.15);else{this.unseenT+=e;const s=i>9?4.2:2.8;this.moveToward(t.player.pos,s,e),this.approachPose(ai.clamp(1-(i-1)/6,0,1)),this.creakT-=e,this.creakT<=0&&i<10&&(this.creakT=.55,n.footstep("wood",this.pos,.55),Math.random()<.35?n.creak(this.pos,.5,.35,.7):i>4&&Math.random()<.3&&n.drag(this.pos,.45))}i<1.15&&this.atkCD<=0&&this.relocated<=0&&(this.attack(34),n.scream(this.chest().clone(),{pitch:.75,dur:.9,vol:1.2}),this.atkCD=2.5,setTimeout(()=>{this.state==="hunt"&&this.vanish()},350)),this.pushPlayerApart()}this.sync()}}class G_ extends _h{constructor(e,t){const n=_i(t,{h:2,thin:.62,armK:2,fingerK:3,skin:t.demonSkin,faceless:!0,longHead:1.6,longNeck:1.6,mouthMat:t.demonMouth,ribs:!0});super(e,n,{hp:999,radius:.5}),this.s=2/1.7,this.speed=1.4,this.stepT=0,this.growlT=3,this.burst=!1,this.burstT=1,this.mouthOpen=0,this.eyes=[];const i=new Mi({color:16722440,transparent:!0,opacity:1});for(const l of[-1,1]){const c=new ie(new On(.015,8,6),i);c.position.set(l*.042,.155,.09),n.head.add(c),this.eyes.push(c)}let s=7;const o=()=>(s=(s*9301+49297)%233280)/233280,a=(l,c,h,u,f)=>{const d=new We;d.rotation.set(...f),l.add(d);const m=new ie(new Nt(h*.55,h,c,6),t.horn);if(m.position.y=c/2,m.castShadow=!0,d.add(m),u>0)for(let v=0;v<2;v++){const g=new We;g.position.y=c,d.add(g),a(g,c*.7,h*.6,u-1,[(o()-.5)*1.2,o()*3,(v?1:-1)*(.3+o()*.5)])}};for(const l of[-1,1]){const c=new We;c.position.set(l*.05,.27,-.02),n.head.add(c),a(c,.26,.026,3,[-.4,0,l*.75])}}prowl(e,t){const n=this.P,i=e*4.6;n.hips.position.y=.6*this.s*(1-.1*(.5+.5*Math.sin(i*2)))+Math.abs(Math.sin(i))*.05*t,n.hips.rotation.set(.08,0,Math.sin(i)*.06*t),n.spine.rotation.set(.62+Math.sin(i*2)*.04,0,Math.sin(i)*.09*t),n.neck.rotation.set(.55,0,Math.sin(e*.9)*.2),n.legL.rotation.x=-.5+Math.sin(i)*.55*t,n.legR.rotation.x=-.5+Math.sin(i+Math.PI)*.55*t,n.shinL.rotation.x=.75+Math.max(0,-Math.sin(i))*.6*t,n.shinR.rotation.x=.75+Math.max(0,Math.sin(i))*.6*t,n.armL.rotation.set(.28+Math.sin(i+Math.PI)*.3*t,0,.24),n.armR.rotation.set(.28+Math.sin(i)*.3*t,0,-.24),n.foreL.rotation.x=-.4,n.foreR.rotation.x=-.4,n.handL.rotation.x=.55,n.handR.rotation.x=.55,n.mouth.scale.y=2.2+Math.sin(e*3.1)*.7+this.mouthOpen*4}stare(e,t){let i=Math.atan2(t.player.pos.x-this.pos.x,t.player.pos.z-this.pos.z)-this.yaw;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;const s=this.P;s.head.rotation.y+=(ai.clamp(i,-.85,.85)-s.head.rotation.y)*Math.min(1,e*5)}emerge(e,t){this.show(!0),this.place(e,this.g.level.floorY(e,t)-2.3,t,0),this.setState("emerge"),this.g.audio.growl(Yi(e,-2,t),4,1.4)}hurt(e){this.stun=Math.max(this.stun,.7),this.g.audio.growl(this.chest().clone(),.8,.8),this.g.spawnBlood(e.point,null,657930)}flashed(){this.state==="hunt"&&this.dist()<10&&(this.recoil=2.5,this.g.audio.scream(this.chest().clone().setY(this.pos.y+1.8),{pitch:.45,dur:1.6,vol:1.3}))}die(){this.setState("die"),this.mouthOpen=1,this.g.audio.scream(this.chest().clone().setY(this.pos.y+1.6),{pitch:.35,dur:3.5,vol:1.6}),this.g.audio.growl(this.pos,4,1.5),this.g.shake(1)}update(e){if(!this.active)return;this.t+=e,this.stateT+=e,this.atkCD-=e;const t=this.g,n=t.audio,i=t.level.floorY(this.pos.x,this.pos.z);if(this.state==="emerge"){this.pos.y=Math.min(i,i-2.3+this.stateT*.95),this.prowl(this.t*.4,.2),this.P.armL.rotation.x=-2.8+this.stateT*.5,this.P.armR.rotation.x=-2.9+this.stateT*.5,this.stateT>3.2&&(this.setState("hunt"),n.scream(this.chest().clone().setY(i+1.8),{pitch:.4,dur:2.2,vol:1.5})),this.sync();return}if(this.state==="die"){const s=this.stateT,o=this.P,a=Math.min(1,s/1.1);if(o.spine.rotation.x=.62+a*.95,o.hips.position.y=.6*this.s*(1-a)+.16*a,o.legL.rotation.x=-.5-a*1.5,o.legR.rotation.x=-.5-a*1.15,o.shinL.rotation.x=.75+a*2.1,o.shinR.rotation.x=.75+a*1.8,o.armL.rotation.set(-.9-a*.6,0,.55),o.armR.rotation.set(-.9-a*.7,0,-.55),o.neck.rotation.set(.55-a*1,0,0),o.mouth.scale.y=2.2+(1-a)*2,s>1.1){const l=Math.max(0,1-(s-1.1)/2.4);o.spine.rotation.x+=Math.sin(s*26)*.05*l,o.neck.rotation.z=Math.sin(s*19)*.3*l,o.armL.rotation.x+=Math.sin(s*31)*.16*l,o.armR.rotation.x-=Math.sin(s*24)*.18*l,o.legL.rotation.x+=Math.sin(s*17)*.05*l}for(const l of this.eyes)l.material.opacity=Math.max(0,1-s/2.6);Math.random()<e*9&&this.g.spawnBlood(this.chest().clone().add(Yi((Math.random()-.5)*.6,(Math.random()-.5)*.4,(Math.random()-.5)*.6)),Yi(0,1,0),657930),s>1.6&&(this.pos.y-=e*.4),s>5.2&&this.show(!1),this.sync();return}if(this.stun>0){this.stun-=e,this.P.spine.rotation.x=.8,this.P.neck.rotation.x=1,this.sync();return}if(this.recoil>0){this.recoil-=e;const s=t.player.pos,o=this.pos.x-s.x,a=this.pos.z-s.z,l=Math.hypot(o,a)||1,c=this.pos.x+o/l*1.6*e,h=this.pos.z+a/l*1.6*e;t.level.walkable(c,h)&&(this.pos.x=c,this.pos.z=h),this.P.armL.rotation.set(-2.4,0,.4),this.P.armR.rotation.set(-2.5,0,-.4),this.P.neck.rotation.x=-.6+Math.sin(this.t*40)*.2,this.sync();return}if(this.state==="hunt"&&this.dist()<2.4&&this.atkCD<=0){this.setState("wind"),this.mouthOpen=1,n.scream(this.chest().clone().setY(this.pos.y+1.7),{pitch:.5,dur:.7,vol:1.3}),this.sync();return}if(this.state==="wind"){const s=this.P,o=Math.min(1,this.stateT/.45);s.spine.rotation.x=.62-o*.85,s.armL.rotation.set(-2.3*o,0,.5),s.armR.rotation.set(-2.4*o,0,-.5),s.legL.rotation.x=-.5-o*.3,s.legR.rotation.x=-.5-o*.3,s.shinL.rotation.x=.75-o*.5,s.shinR.rotation.x=.75-o*.5,s.mouth.scale.y=2.2+o*3.5,s.neck.rotation.x=.55-o*.75,this.faceTo(t.player.pos.x,t.player.pos.z,e*9),this.stateT>.45&&(this.setState("hunt"),this.mouthOpen=0,this.atkCD=1.7,this.dist()<2.7&&(this.attack(48),n.scream(this.chest().clone().setY(this.pos.y+1.7),{pitch:.5,dur:.9,vol:1.4}),t.shake(.4)),s.armR.rotation.x=-1.7),this.sync();return}if(this.state==="hunt"){this.burstT-=e,this.burstT<=0&&(this.burst=!this.burst,this.burstT=this.burst?1.1+Math.random()*.7:.35+Math.random()*.5,!this.burst&&Math.random()<.35&&n.growl(this.chest().clone().setY(this.pos.y+1.6),1.2,.7));const s=this.speed*(this.burst?1.85:.22),o=this.moveToward(t.player.pos,s,e);this.prowl(this.t,o>0?1:.25),this.stare(e,t),this.stepT-=e*s/1.4,this.stepT<=0&&o>0&&(this.stepT=.98,n.heavyStep(this.pos,1),Math.random()<.35&&n.drag(this.pos,.4),t.shake(.05)),this.growlT-=e,this.growlT<=0&&(this.growlT=3+Math.random()*3,n.growl(this.chest().clone().setY(this.pos.y+1.6),1.8,.9)),this.pushPlayerApart()}this.sync()}}function af(r,e){if(e===dp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Pc||e===kf){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Pc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class W_ extends Or{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new K_(t)}),this.register(function(t){return new Z_(t)}),this.register(function(t){return new ry(t)}),this.register(function(t){return new oy(t)}),this.register(function(t){return new ay(t)}),this.register(function(t){return new J_(t)}),this.register(function(t){return new Q_(t)}),this.register(function(t){return new ey(t)}),this.register(function(t){return new ty(t)}),this.register(function(t){return new j_(t)}),this.register(function(t){return new ny(t)}),this.register(function(t){return new $_(t)}),this.register(function(t){return new sy(t)}),this.register(function(t){return new iy(t)}),this.register(function(t){return new q_(t)}),this.register(function(t){return new ly(t)}),this.register(function(t){return new cy(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=uo.extractUrlBase(e);o=uo.resolveURL(c,this.path)}else o=uo.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new xd(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Ad){try{o[vt.KHR_BINARY_GLTF]=new hy(e)}catch(u){i&&i(u);return}s=JSON.parse(o[vt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new by(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],f=s.extensionsRequired||[];switch(u){case vt.KHR_MATERIALS_UNLIT:o[u]=new Y_;break;case vt.KHR_DRACO_MESH_COMPRESSION:o[u]=new uy(s,this.dracoLoader);break;case vt.KHR_TEXTURE_TRANSFORM:o[u]=new fy;break;case vt.KHR_MESH_QUANTIZATION:o[u]=new dy;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function X_(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const vt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class q_{constructor(e){this.parser=e,this.name=vt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new Xe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Fn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Md(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new zn(h),c.distance=u;break;case"spot":c=new gh(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Hi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Y_{constructor(){this.name=vt.KHR_MATERIALS_UNLIT}getMaterialType(){return Mi}extendParams(e,t,n){const i=[];e.color=new Xe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Fn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ft))}return Promise.all(i)}}class j_{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class K_{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:It}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new se(a,a)}return Promise.all(s)}}class Z_{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:It}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class $_{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:It}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class J_{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:It}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Xe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Fn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ft)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class Q_{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:It}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class ey{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:It}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Xe().setRGB(a[0],a[1],a[2],Fn),Promise.all(s)}}class ty{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:It}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class ny{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:It}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Xe().setRGB(a[0],a[1],a[2],Fn),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ft)),Promise.all(s)}}class iy{constructor(e){this.parser=e,this.name=vt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:It}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class sy{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:It}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class ry{constructor(e){this.parser=e,this.name=vt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class oy{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ay{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ly{constructor(e){this.name=vt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}}class cy{constructor(e){this.name=vt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==si.TRIANGLES&&c.mode!==si.TRIANGLE_STRIP&&c.mode!==si.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(const m of u){const v=new Qe,g=new D,p=new Si,_=new D(1,1,1),y=new t1(m.geometry,m.material,f);for(let x=0;x<f;x++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&_.fromBufferAttribute(l.SCALE,x),y.setMatrixAt(x,v.compose(g,p,_));for(const x in l)if(x==="_COLOR_0"){const A=l[x];y.instanceColor=new Nc(A.array,A.itemSize,A.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&m.geometry.setAttribute(x,l[x]);Ot.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),d.push(y)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const Ad="glTF",$r=12,lf={JSON:1313821514,BIN:5130562};class hy{constructor(e){this.name=vt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,$r),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ad)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-$r,s=new DataView(e,$r);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===lf.JSON){const c=new Uint8Array(e,$r+o,a);this.content=n.decode(c)}else if(l===lf.BIN){const c=$r+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class uy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=vt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=Vc[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Vc[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[e.attributes[h]],d=xr[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(const m in d.attributes){const v=d.attributes[m],g=l[m];g!==void 0&&(v.normalized=g)}u(d)},a,c,Fn,f)})})}}class fy{constructor(){this.name=vt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class dy{constructor(){this.name=vt.KHR_MESH_QUANTIZATION}}class Rd extends Ao{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,m=e*c,v=m-c,g=-2*d+3*f,p=d-f,_=1-g,y=p-f+u;for(let x=0;x!==a;x++){const A=o[v+x+a],w=o[v+x+l]*h,E=o[m+x+a],L=o[m+x]*h;s[x]=_*A+y*w+g*E+p*L}return s}}const py=new Si;class my extends Rd{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return py.fromArray(s).normalize().toArray(s),s}}const si={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},xr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},cf={9728:Jt,9729:Vn,9984:Rf,9985:ya,9986:to,9987:Wi},hf={33071:ss,33648:La,10497:$n},zl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Vc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ns={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},gy={CUBICSPLINE:void 0,LINEAR:xo,STEP:vo},Vl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function vy(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Re({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ji})),r.DefaultMaterial}function ws(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Hi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function xy(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;o.push(f)}if(i){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(f)}if(s){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],f=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function _y(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function yy(r){let e;const t=r.extensions&&r.extensions[vt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Hl(t.attributes):e=r.indices+":"+Hl(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Hl(r.targets[n]);return e}function Hl(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Hc(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function My(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Sy=new Qe;class by{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new X_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new _d(this.options.manager):this.textureLoader=new $1(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new xd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ws(s,a,i),Hi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())s(h,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[vt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(uo.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=zl[i.type],a=xr[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Wt(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=zl[i.type],c=xr[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let v,g;if(d&&d!==u){const p=Math.floor(f/d),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(_);y||(v=new c(a,p*d,i.count*d/h),y=new td(v,d/h),t.cache.add(_,y)),g=new yo(y,l,f%d/h,m)}else a===null?v=new c(i.count*l):v=new c(a,f,i.count*l),g=new Wt(v,l,m);if(i.sparse!==void 0){const p=zl.SCALAR,_=xr[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,A=new _(o[1],y,i.sparse.count*p),w=new c(o[2],x,i.sparse.count*l);a!==null&&(g=new Wt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let E=0,L=A.length;E<L;E++){const M=A[E];if(g.setX(M,w[E*l]),l>=2&&g.setY(M,w[E*l+1]),l>=3&&g.setZ(M,w[E*l+2]),l>=4&&g.setW(M,w[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return h.magFilter=cf[f.magFilter]||Vn,h.minFilter=cf[f.minFilter]||Wi,h.wrapS=hf[f.wrapS]||$n,h.wrapT=hf[f.wrapT]||$n,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Jt&&h.minFilter!==Vn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let m=f;t.isImageBitmapLoader===!0&&(m=function(v){const g=new an(v);g.needsUpdate=!0,f(g)}),t.load(uo.resolveURL(u,s.path),m,void 0,d)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Hi(u,o),u.userData.mimeType=o.mimeType||My(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[vt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[vt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[vt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new rd,hi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ch,hi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Re}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[vt.KHR_MATERIALS_UNLIT]){const u=i[vt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new Xe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Fn),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Ft)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=pn);const h=s.alphaMode||Vl.OPAQUE;if(h===Vl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Vl.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Mi&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new se(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==Mi&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Mi){const u=s.emissiveFactor;a.emissive=new Xe().setRGB(u[0],u[1],u[2],Fn)}return s.emissiveTexture!==void 0&&o!==Mi&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Ft)),Promise.all(c).then(function(){const u=new o(a);return s.name&&(u.name=s.name),Hi(u,s),t.associations.set(u,{materials:e}),s.extensions&&ws(i,u,s),u})}createUniqueName(e){const t=Dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[vt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return uf(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=yy(c),u=i[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[vt.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=uf(new Ht,c,t),i[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?vy(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,m=h.length;d<m;d++){const v=h[d],g=o[d];let p;const _=c[d];if(g.mode===si.TRIANGLES||g.mode===si.TRIANGLE_STRIP||g.mode===si.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new id(v,_):new ie(v,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===si.TRIANGLE_STRIP?p.geometry=af(p.geometry,kf):g.mode===si.TRIANGLE_FAN&&(p.geometry=af(p.geometry,Pc));else if(g.mode===si.LINES)p=new sd(v,_);else if(g.mode===si.LINE_STRIP)p=new hh(v,_);else if(g.mode===si.LINE_LOOP)p=new n1(v,_);else if(g.mode===si.POINTS)p=new od(v,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&_y(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Hi(p,s),g.extensions&&ws(i,p,g),t.assignFinalMaterial(p),u.push(p)}for(let d=0,m=u.length;d<m;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return s.extensions&&ws(i,u[0],s),u[0];const f=new We;s.extensions&&ws(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,m=u.length;d<m;d++)f.add(u[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new An(ai.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new za(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Hi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const f=new Qe;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ga(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){const d=i.channels[u],m=i.samplers[d.sampler],v=d.target,g=v.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,_=i.parameters!==void 0?i.parameters[m.output]:m.output;v.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",_)),c.push(m),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],m=u[2],v=u[3],g=u[4],p=[];for(let _=0,y=f.length;_<y;_++){const x=f[_],A=d[_],w=m[_],E=v[_],L=g[_];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const M=n._createAnimationTracks(x,A,w,E,L);if(M)for(let S=0;S<M.length;S++)p.push(M[S])}return new H1(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Sy)});for(let d=0,m=u.length;d<m;d++)h.add(u[d]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(s.isBone===!0?h=new lh:c.length>1?h=new We:c.length===1?h=c[0]:h=new Ot,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=o),Hi(h,s),s.extensions&&ws(n,h,s),s.matrix!==void 0){const u=new Qe;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new We;n.name&&(s.name=i.createUniqueName(n.name)),Hi(s,n),n.extensions&&ws(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[f,d]of i.associations)(f instanceof hi||f instanceof an)&&u.set(f,d);return h.traverse(f=>{const d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];ns[s.path]===ns.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(ns[s.path]){case ns.weights:c=wr;break;case ns.rotation:c=Tr;break;case ns.position:case ns.scale:c=Er;break;default:switch(n.itemSize){case 1:c=wr;break;case 2:case 3:default:c=Er;break}break}const h=i.interpolation!==void 0?gy[i.interpolation]:xo,u=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const m=new c(l[f]+"."+ns[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Hc(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Tr?my:Rd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function wy(r,e,t){const n=e.attributes,i=new ui;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),a.normalized){const h=Hc(xr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new D,l=new D;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){const v=Hc(xr[f.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new bi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function uf(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=Vc[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return _t.workingColorSpace!==Fn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${_t.workingColorSpace}" not supported.`),Hi(r,e),wy(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?xy(r,e.targets,t):r})}const ff="./assets/",Cd=new URLSearchParams(location.search),df=Cd.get("q")||(matchMedia("(pointer: coarse)").matches?"baixa":"alta"),pf=df==="baixa"?1024:df==="media"?1536:2048,Ty=Cd.has("hq"),Ey=["decrepit_wallpaper","peeling_painted_wall","worn_plaster_wall","plastered_wall_03","long_white_tiles","interior_tiles","worn_tile_floor","terracotta_floor_tiles","old_wood_floor","wood_floor_worn","concrete_floor_worn_001","concrete_wall_003","brown_mud_leaves_01","weathered_planks","rough_pine_door","wood_cabinet_worn_long","dirty_carpet","damaged_plaster","corrugated_iron","rusty_metal_02","bark_bluegum"],Ay=["Sofa_01","Television_01","dining_table","dining_chair_02","old_bed_frame","ClassicNightstand_01","vintage_cabinet_01","power_box_01","lightbulb_01","wooden_bookshelf_worn","wooden_crate_01","Barrel_01","trashbag","ammo_box","hanging_picture_frame_01","dead_tree_trunk","dead_tree_trunk_02","plastic_monobloc_chair_01","rubber_boots","mantel_clock_01","drawer_cabinet","painted_wooden_cabinet","wooden_bowl_01","pot_enamel_01"],_n=(r,e)=>Array.from({length:e},(t,n)=>`${r}_0${n+1}`),Ry={rainIn:["RAINInt_ForestCabinRain_L01"],rainOut:["RAINVege_ForestRain_L01"],room:["AMBHome_RoomTone_L01"],drone:["DSGNDron_DroneCreepy_02"],stepWood:_n("FEETHmn_ShoeWoodWalk",5),runWood:_n("FEETHmn_ShoeWoodRun",5),stepDirt:_n("FEETHmn_ShoeDirtWalk",5),stepConc:_n("FEETHmn_ShoeConcreteWalk",5),doorOpen:["DOORWood_FrontDoorOpen_01"],doorClose:["DOORWood_FrontDoorClose_01","DOORWood_OfficeDoorClose_01"],knob:["DOORHdwr_FrontDoorKnob_01"],lock:["DOORHdwr_FrontDoorLock_01"],knock:["DOORKnck_OfficeDoorKnock_01"],unlock:["MECHLock_DoorUnlockKey_01"],drawer:["DRWRWood_DrawerOpen_01"],switch:["MECHSwtch_SwitchSmallOn_01","MECHSwtch_SwitchSmallOn_02","MECHSwtch_SwitchSmallOff_01","MECHSwtch_SwitchSmallOff_02"],box:["METLHndl_ElectricBoxOpen_01"],keyDrop:_n("OBJKey_KeyDrop",2),pages:["PAPRHndl_BookPageTurns_01"],shells:_n("BLLTShel_ShellCasingConcrete",3),scream:["VOXScrm_FemaleScream_01","VOXFem_Female01DeathScream_01"],screamShort:["VOXFem_Female02DeathScream_01"],groanF:["VOXFem_GroanCreepy_01"],groanM:["VOXMale_GroanCreepy_01"],whisper:["VOXWhsp_WhispersCreepy_01"],whisperVerb:["VOXWhsp_WhispersCreepyReverb_01"],creak:_n("WOODFric_CreaksCreepy",2),creakVerb:_n("WOODFric_CreaksCreepyReverb",2),bones:_n("GOREBone_BonesBreaking",3),skull:_n("GOREBone_SkullCracking",2),squish:_n("GORESqsh_BloodSquishSlimy",2),impact:_n("DSGNImpt_ImpactCreepyReverb",3),strings:_n("MUSCStr_StringsCreepy",2),creature:_n("CREAMnstr_CreatureCreepy",3),creatureVerb:_n("CREAMnstr_CreatureCreepyReverb",3),chains:_n("CHAINMvmt_ChainsCreepy",2),clock:["CLOCKTick_ClockCreepy_01"],organ:["MUSCKeyd_PipeOrganCreepy_01"],scratch:_n("METLFric_ScratchCreepy",2),punch:["FGHTImpt_PunchHardest_01"],woodDrop:["WOODImpt_LargeWoodDrop_01"],glass:["GLASBrk_WindowPaneSmallBreak_01"],breathF:["HMNBrth_FemaleBreathing_01"],breathM:["HMNBrth_MaleBreathing_OS_01"],windTrees:["WINDVege_LightWindTreesBirds_LOOP_01"],chimes:["MUSCChim_WindChimes_LOOP_01","MUSCChim_WindChimes_LOOP_02"],train:["TRNElec_TrainPassby_OS_01"],drag:["WOODFric_LargeWoodMetalDrag_OS_01"]};async function Cy(r,e){const t=new vd;let n=0,i=0;const s=()=>{i++,e&&e(i/Math.max(1,n))},o=new _d(t),a=new W_(t),l=Math.min(8,r.capabilities.getMaxAnisotropy()),c={tex:{},models:{},env:null,head:null,headMaps:{},sfxRaw:{}},h=window.__EMBED,u=p=>h&&h.files[p]||ff+p,f=(p,_,y)=>h&&h.models[p]?a.parse(h.models[p],"",_,y):a.load(ff+p,_,void 0,y),d=(p,_,y)=>{p.colorSpace=_?Ft:Gi,p.wrapS=p.wrapT=$n,p.anisotropy=l,s(),y(p)},m=(p,_)=>(n++,new Promise(y=>o.load(p,x=>{const A=x.image;if(A&&Math.max(A.width,A.height)>pf&&window.createImageBitmap){const w=pf/Math.max(A.width,A.height);createImageBitmap(A,{resizeWidth:Math.round(A.width*w),resizeHeight:Math.round(A.height*w),resizeQuality:"medium"}).then(E=>{x.image=E,d(x,_,y)}).catch(()=>d(x,_,y))}else d(x,_,y)},void 0,()=>{s(),y(null)}))),v=[],g=(p,_)=>u(`tex/${p}/${_}${Ty?"_2k":""}.jpg`);for(const p of Ey)v.push(Promise.all([m(g(p,"diff"),!0),m(g(p,"nor_gl"),!1),m(g(p,"rough"),!1)]).then(([_,y,x])=>{c.tex[p]={map:_,normalMap:y,roughnessMap:x}}));for(const p of Ay)n++,v.push(new Promise(_=>f(`models/${p}/${p}.json`,y=>{y.scene.traverse(x=>{x.isMesh&&(x.castShadow=!0,x.receiveShadow=!0,x.material.map&&(x.material.map.anisotropy=l))}),c.models[p]=y.scene,s(),_()},y=>{console.warn("modelo",p,y),s(),_()})));n++,v.push(new Promise(p=>f("human/LeePerrySmith.json",_=>{_.scene.traverse(y=>{y.isMesh&&!c.head&&(c.head=y)}),s(),p()},()=>{s(),p()}))),v.push(m(u("human/head_col.jpg"),!0).then(p=>c.headMaps.map=p)),v.push(m(u("human/head_nor.jpg"),!1).then(p=>c.headMaps.normalMap=p)),v.push(m(u("human/head_spec.jpg"),!1).then(p=>c.headMaps.spec=p)),n++,v.push(m(u("hdr/night.jpg"),!0).then(p=>{if(!p)return;p.mapping=Pa;const _=new Dc(r);c.env=_.fromEquirectangular(p).texture,p.dispose(),_.dispose()})),n++,v.push((async()=>{try{const _=await(await fetch(u("human/female02/body.json"))).json(),[y,x,A]=await Promise.all(["hair","face","body"].map(w=>m(u(`human/female02/${w}.jpg`),!0)));c.female={data:_,imgs:{hair:y&&y.image,face:x&&x.image,body:A&&A.image}}}catch(p){console.warn("corpo",p)}s()})());for(const[p,_]of Object.entries(Ry)){c.sfxRaw[p]=[];for(const y of _)n++,v.push(fetch(u(`sfx/${y}.mp3`)).then(x=>x.ok?x.arrayBuffer():null).then(x=>{x&&c.sfxRaw[p].push(x),s()}).catch(()=>s()))}return await Promise.all(v),c}function Py(r,e,t={}){const n=r.tex[e]||{},i=new Re({map:n.map||null,normalMap:n.normalMap||null,roughnessMap:n.roughnessMap||null,roughness:t.rough??1,metalness:t.metal??0,color:t.color??16777215,envMapIntensity:t.env??.35});return i.normalMap&&i.normalScale.set(t.nscale??1,t.nscale??1),i}function Ly(r,e,t,n,i,s,o=0,a={}){const l=r.models[e];if(!l)return null;const c=l.clone(!0);a.scale&&c.scale.setScalar(a.scale),c.rotation.y=o,c.position.set(0,0,0),c.updateMatrixWorld(!0);const h=new ui().setFromObject(c);return c.position.set(n,i-h.min.y,s),a.tint&&c.traverse(u=>{u.isMesh&&(u.material=u.material.clone(),u.material.color.multiply(new Xe(a.tint)))}),a.dirty&&c.traverse(u=>{u.isMesh&&(u.material=u.material.clone(),u.material.color.multiplyScalar(a.dirty))}),t.add(c),c.updateMatrixWorld(!0),c.userData.box=new ui().setFromObject(c),c}const Jr=new D;function ii(r,e,t,n,i,s){const o=2*Math.PI*i/4,a=Math.max(s-2*i,0),l=Math.PI/4;Jr.copy(e),Jr[n]=0,Jr.normalize();const c=.5*o/(o+a),h=1-Jr.angleTo(r)/l;return Math.sign(Jr[t])===1?h*c:a/(o+a)+c+c*(1-h)}class oi extends Vt{constructor(e=1,t=1,n=1,i=2,s=.1){if(i=i*2+1,s=Math.min(e/2,t/2,n/2,s),super(1,1,1,i,i,i),i===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new D,l=new D,c=new D(e,t,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,m=new D,v=.5/i;for(let g=0,p=0;g<h.length;g+=3,p+=2)switch(a.fromArray(h,g),l.copy(a),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),h[g+0]=c.x*Math.sign(a.x)+l.x*s,h[g+1]=c.y*Math.sign(a.y)+l.y*s,h[g+2]=c.z*Math.sign(a.z)+l.z*s,u[g+0]=l.x,u[g+1]=l.y,u[g+2]=l.z,Math.floor(g/d)){case 0:m.set(1,0,0),f[p+0]=ii(m,l,"z","y",s,n),f[p+1]=1-ii(m,l,"y","z",s,t);break;case 1:m.set(-1,0,0),f[p+0]=1-ii(m,l,"z","y",s,n),f[p+1]=1-ii(m,l,"y","z",s,t);break;case 2:m.set(0,1,0),f[p+0]=1-ii(m,l,"x","z",s,e),f[p+1]=ii(m,l,"z","x",s,n);break;case 3:m.set(0,-1,0),f[p+0]=1-ii(m,l,"x","z",s,e),f[p+1]=1-ii(m,l,"z","x",s,n);break;case 4:m.set(0,0,1),f[p+0]=1-ii(m,l,"x","y",s,e),f[p+1]=1-ii(m,l,"y","x",s,t);break;case 5:m.set(0,0,-1),f[p+0]=ii(m,l,"x","y",s,e),f[p+1]=1-ii(m,l,"y","x",s,t);break}}}const In=(r=0,e=0,t=0)=>new D(r,e,t);function Fs(r,e,t,n=!0){const i=document.createElement("canvas");i.width=r,i.height=e,t(i.getContext("2d"),r,e);const s=new Ki(i);return n&&(s.colorSpace=Ft),s.anisotropy=8,s}function mf(r=3,e="#e6e0cf"){return Fs(512,512,(t,n,i)=>{t.fillStyle=e,t.fillRect(0,0,n,i);let s=r;const o=()=>(s=s*16807%2147483647)/2147483647;for(let a=0;a<60;a++){const l=t.createRadialGradient(o()*n,o()*i,1,o()*n,o()*i,20+o()*80);l.addColorStop(0,"rgba(120,100,60,0.12)"),l.addColorStop(1,"rgba(120,100,60,0)"),t.fillStyle=l,t.fillRect(0,0,n,i)}for(let a=0;a<26;a++){const l=o()*n,c=o()*i*.7,h=20+o()*120,u=t.createLinearGradient(0,c,0,c+h);u.addColorStop(0,"rgba(110,50,15,0.55)"),u.addColorStop(1,"rgba(110,50,15,0)"),t.fillStyle=u,t.fillRect(l,c,1+o()*3,h),t.fillStyle="rgba(90,40,12,0.6)",t.beginPath(),t.arc(l,c,1+o()*3,0,7),t.fill()}for(let a=0;a<2e3;a++)t.fillStyle=`rgba(60,50,30,${o()*.08})`,t.fillRect(o()*n,o()*i,1,1);for(let a=0;a<4;a++)t.fillStyle="rgba(80,0,0,0.5)",t.beginPath(),t.ellipse(n*.12+o()*30,i*.45+o()*80,5,9,o(),0,7),t.fill()})}function Dy(r){const e=new We,t=new It({color:13483934,roughness:.38,clearcoat:.5,clearcoatRoughness:.5,envMap:r,envMapIntensity:.6}),n=new Re({color:1709844,roughness:.6}),i=new Re({color:12105904,roughness:.25,metalness:.9,envMap:r}),s=new Eo;s.moveTo(-.105,0),s.lineTo(.105,0),s.lineTo(.095,.05),s.lineTo(.055,.095),s.lineTo(-.075,.1),s.lineTo(-.1,.06),s.lineTo(-.105,0);const o=new Xa(s,{depth:.19,bevelEnabled:!0,bevelThickness:.012,bevelSize:.01,bevelSegments:4,curveSegments:6});o.translate(0,0,-.095),o.rotateY(-Math.PI/2);const a=new ie(o,t);a.castShadow=a.receiveShadow=!0,e.add(a);const l=new We;l.position.set(0,.078,.072),l.rotation.x=-.83,e.add(l);const c=new ie(new Nt(.047,.049,.006,32),new Re({color:15525590,roughness:.5}));c.rotation.x=Math.PI/2,l.add(c);const h=Fs(256,256,(w,E,L)=>{w.fillStyle="#f0ead8",w.fillRect(0,0,E,L),w.fillStyle="#222",w.font="bold 22px Arial",w.textAlign="center",w.textBaseline="middle";for(let M=0;M<10;M++){const S=-Math.PI*.3+M*(Math.PI*1.5/9);w.fillText(String((M+1)%10),E/2+Math.cos(S)*92,L/2+Math.sin(S)*92)}}),u=new ie(new rs(.046,32),new Re({map:h,roughness:.5}));u.position.z=.0035,l.add(u);const f=new ie(new dh(.026,.046,40),new It({color:2762274,roughness:.3,clearcoat:.8,transparent:!0,opacity:.88}));f.position.z=.006,l.add(f);for(let w=0;w<10;w++){const E=-Math.PI*.3+w*(Math.PI*1.5/9),L=new ie(new rs(.0075,16),new Re({color:15788760}));L.position.set(Math.cos(E)*.036,-Math.sin(E)*.036,.0068),l.add(L)}const d=new ie(new Vt(.004,.012,.006),i);d.position.set(.04,-.03,.009),d.rotation.z=.6,l.add(d);const m=new ie(new rs(.016,20),new Re({color:16777215,roughness:.4}));m.position.z=.0072,l.add(m);for(const w of[-.068,.068]){const E=new ie(new oi(.03,.03,.05,2,.008),t);E.position.set(w,.112,-.02),e.add(E);const L=new ie(new Nt(.006,.006,.02,10),n);L.position.set(w,.125,-.02),e.add(L)}const v=new We;v.position.set(0,.145,-.02),e.add(v);const g=new Aa([In(-.1,-.01,0),In(-.05,.012,0),In(.05,.012,0),In(.1,-.01,0)]),p=new ie(new ho(g,24,.014,12),t);p.scale.set(1,1,1.25),v.add(p);const _=[In(0,0),In(.024,0),In(.03,.01),In(.032,.026),In(.028,.032),In(0,.034)].map(w=>new se(w.x,w.y));for(const w of[-1,1]){const E=new ie(new ks(_,24),t);E.position.set(w*.1,-.012,0),E.rotation.x=Math.PI,v.add(E);const L=new ie(new rs(.02,20),n);L.position.set(w*.1,-.047,0),L.rotation.x=Math.PI/2,v.add(L)}v.traverse(w=>{w.isMesh&&(w.castShadow=!0)});const y=[];for(let w=0;w<=400;w++){const E=w/400,L=E*Math.PI*2*26,M=In(-.1-E*.06,-.02-Math.sin(E*Math.PI)*.07,0-E*.02);M.x+=Math.cos(L)*.006,M.y+=Math.sin(L)*.006,y.push(M)}const x=new ie(new ho(new Aa(y),800,.0022,5),new Re({color:12562835,roughness:.5}));v.add(x);const A=[In(0,.01,-.105),In(0,.005,-.2),In(.05,0,-.3),In(0,0,-.5)];return e.add(new ie(new ho(new Aa(A),20,.003,5),n)),e.userData.handset=v,e.userData.hsBase=v.position.clone(),e}function Iy(r){const i=new It({map:mf(3,"#c8c2b0"),roughness:.32,clearcoat:.6,clearcoatRoughness:.35,envMap:r,envMapIntensity:.35}),s=new Re({map:mf(9,"#8e8a7c"),roughness:.55,envMap:r,envMapIntensity:.15}),o=new Re({color:13684944,roughness:.12,metalness:1,envMap:r,envMapIntensity:1}),a=new Re({color:2762018,roughness:.8}),l=new We,c=.04,h=(x,A,w,E,L,M,S=i,C=.015)=>{const F=new ie(new oi(x,A,w,3,C),S);return F.position.set(E,L,M),F.castShadow=F.receiveShadow=!0,l.add(F),F};h(.72,1.62,c,0,1.62/2,-.66/2+c/2,i,.02),h(c,1.62,.66,-.72/2+c/2,1.62/2,0,i,.03),h(c,1.62,.66,.72/2-c/2,1.62/2,0,i,.03),h(.72,c*1.5,.66,0,1.62-c*.75,0,i,.05),h(.72,.12,.66,0,.06,0,i,.02),h(.72-2*c,1.62-.2,.01,0,1.62/2+.03,-.66/2+c+.005,s,.004),h(.01,1.62-.2,.66-c,-.72/2+c+.005,1.62/2+.03,.02,s,.004),h(.01,1.62-.2,.66-c,.72/2-c-.005,1.62/2+.03,.02,s,.004),h(.72-2*c-.04,.22,.66-.12,0,1.62-.26,-.03,new Re({color:11055284,roughness:.2,metalness:.7,envMap:r}),.01);const u=new Re({color:10066329,roughness:.35,metalness:.8,envMap:r});for(const x of[.42,.78,1.1]){for(let w=0;w<13;w++){const E=new ie(new Nt(.003,.003,.56,5),u);E.rotation.x=Math.PI/2,E.position.set(-.72/2+c+.03+w*((.72-2*c-.06)/12),x,0),l.add(E)}const A=new ie(new Vt(.72-2*c-.02,.006,.006),u);A.position.set(0,x,(.66-.1)/2),l.add(A)}h(.72-2*c-.04,.2,.66-.12,0,.24,-.02,new It({color:13623520,roughness:.1,transparent:!0,opacity:.35,transmission:.2}),.01);const f=new We;f.position.set(-.72/2,0,.66/2),l.add(f);const d=new ie(new oi(.72,1.62-.12,.07,3,.03),i);d.position.set(.72/2,.12+(1.62-.12)/2,.035),d.castShadow=!0,f.add(d);const m=new ie(new Vt(.72-.06,1.62-.2,.012),a);m.position.set(.72/2,.12+(1.62-.12)/2,-.004),f.add(m);const v=new ie(new oi(.72-.08,1.62-.24,.03,2,.01),s);v.position.set(.72/2,.12+(1.62-.12)/2,-.02),f.add(v);for(const x of[.5,.85,1.2]){const A=new ie(new Vt(.58,.09,.06),s);A.position.set(.72/2,x,-.06),f.add(A)}const g=new It({color:3820074,roughness:.05,transmission:.6,transparent:!0,opacity:.7,envMap:r});for(let x=0;x<3;x++){const A=new ie(new Nt(.028,.03,.22,12),g);A.position.set(.16+x*.15,.97,-.06),f.add(A)}const p=new ie(new Ls(.012,.22,4,10),o);p.position.set(.72-.06,1,.1),f.add(p);for(const x of[.88,1.12]){const A=new ie(new Nt(.01,.012,.04,8),o);A.rotation.x=Math.PI/2,A.position.set(.72-.06,x,.08),f.add(A)}const _=new ie(new Zn(.16,.035),new Re({map:Fs(256,56,(x,A,w)=>{x.fillStyle="#b8b8b0",x.fillRect(0,0,A,w),x.fillStyle="#4a1010",x.font="italic bold 34px Georgia",x.textAlign="center",x.fillText("Gelomatic",A/2,40)}),metalness:.8,roughness:.3,envMap:r}));_.position.set(.72/2,1.42,.072),f.add(_);const y=new zn(15266047,0,1.6,2);return y.position.set(0,1.62-.42,.05),l.add(y),{group:l,pivot:f,bulb:y,W:.72,D:.66,H:1.62}}function Ny(r){const e=new We,t=new It({map:Uy(),color:15921902,roughness:.32,metalness:.15,clearcoat:1,clearcoatRoughness:.08,envMap:r,envMapIntensity:1.2}),n=new Re({color:1118740,roughness:.55,envMap:r,envMapIntensity:.4}),i=new It({color:658704,roughness:.08,metalness:.2,clearcoat:1,envMap:r,envMapIntensity:.9,polygonOffset:!0,polygonOffsetFactor:-1}),s=new Re({color:13421772,roughness:.15,metalness:1,envMap:r}),o=3.9,a=1.64,l=new Eo,c=.33,h=1.25,u=-1.22;l.moveTo(-o/2,.3),l.lineTo(u-c-.05,.3),l.absarc(u,.3,c+.05,Math.PI,0,!0),l.lineTo(h-c-.05,.3),l.absarc(h,.3,c+.05,Math.PI,0,!0),l.lineTo(o/2-.02,.3),l.bezierCurveTo(o/2+.04,.42,o/2+.05,.62,o/2-.02,.72),l.bezierCurveTo(1.6,.78,1.1,.84,.75,.86),l.lineTo(.05,1.33),l.bezierCurveTo(-.3,1.38,-1.05,1.38,-1.4,1.32),l.bezierCurveTo(-1.7,1.15,-1.9,.98,-o/2+.02,.9),l.bezierCurveTo(-o/2-.03,.6,-o/2-.02,.4,-o/2,.3);const f=new Xa(l,{depth:a-.12,bevelEnabled:!0,bevelThickness:.06,bevelSize:.06,bevelSegments:5,curveSegments:24});f.translate(0,0,-1.52/2),f.rotateY(-Math.PI/2);const d=f.attributes.position;for(let O=0;O<d.count;O++){const z=d.getY(O);z>.86&&d.setX(O,d.getX(O)*(1-(z-.86)*.32))}f.computeVertexNormals();const m=new ie(f,t);m.castShadow=m.receiveShadow=!0,e.add(m);const v=f.clone(),g=v.attributes.position;for(let O=0;O<g.count;O++)g.getY(O)<.9&&g.setY(O,.9),g.setX(O,g.getX(O)*1.02);v.computeVertexNormals();const p=new ie(v,i);p.scale.set(1,1,1),p.position.y=.012,e.add(p);for(const O of[0,-.75])for(const z of[-1,1]){const G=new ie(new Vt(.02,.42,.07),t);G.position.set(z*.73,1.12,O-.1),G.rotation.z=z*.16,e.add(G)}for(const O of[o/2+.02,-o/2-.02]){const z=new ie(new oi(a+.04,.16,.12,3,.04),n);z.position.set(0,.36,O),e.add(z)}const _=new ie(new Zn(.8,.1),new Re({map:Fs(128,16,(O,z,G)=>{O.fillStyle="#111",O.fillRect(0,0,z,G),O.fillStyle="#333";for(let Y=0;Y<z;Y+=6)O.fillRect(Y,0,3,G)}),roughness:.6}));_.position.set(0,.6,o/2+.07),e.add(_);const y=new Re({color:16777215,emissive:16773840,emissiveIntensity:4,roughness:.1}),x=new Re({color:4194304,emissive:16715776,emissiveIntensity:1.2,roughness:.2});for(const O of[-.58,.58]){const z=new ie(new oi(.36,.13,.05,2,.02),y);z.position.set(O,.64,o/2+.05),e.add(z);const G=new ie(new oi(.14,.26,.05,2,.02),x);G.position.set(O*1.18,.72,-o/2-.02),e.add(G)}const A=new Re({color:1381653,roughness:.92}),w=new Re({color:9079434,roughness:.35,metalness:.9,envMap:r});for(const[O,z]of[[-.72,h],[.72,h],[-.72,u],[.72,u]]){const G=new We;G.position.set(O,c,z),e.add(G);const Y=new ie(new us(c-.08,.085,12,32),A);Y.rotation.y=Math.PI/2,Y.scale.set(1,1,1.4),Y.castShadow=!0,G.add(Y);const W=new ie(new Nt(c-.12,c-.12,.18,24),w);W.rotation.z=Math.PI/2,G.add(W);for(let Q=0;Q<5;Q++){const ce=new ie(new Vt(.02,.14,.03),n);ce.position.x=Math.sign(O)*.095,ce.rotation.x=Q*Math.PI*2/5,ce.translateY(.07),G.add(ce)}}for(const O of[-1,1]){const z=new ie(new oi(.06,.09,.14,2,.02),n);z.position.set(O*.86,1,.55),e.add(z);for(const G of[.05,-.85]){const Y=new ie(new oi(.02,.025,.12,2,.008),s);Y.position.set(O*.81,.9,G),e.add(Y)}}const E=new We;E.position.set(0,1.4,-.45),e.add(E);const L=new ie(new oi(1.15,.1,.26,3,.04),n);E.add(L);const M=new Re({color:5242880,emissive:16714240,emissiveIntensity:0,roughness:.15,transparent:!0,opacity:.85,envMap:r,envMapIntensity:.8}),S=new Re({color:64,emissive:12543,emissiveIntensity:0,roughness:.15,transparent:!0,opacity:.85,envMap:r,envMapIntensity:.8}),C=new ie(new oi(.52,.11,.24,3,.05),M);C.position.set(-.29,.04,0),E.add(C);const F=new ie(new oi(.52,.11,.24,3,.05),S);F.position.set(.29,.04,0),E.add(F);const B=new ie(new Nt(.003,.004,.6,5),n);return B.position.set(.4,1.65,-1.3),B.rotation.x=-.15,e.add(B),e.traverse(O=>{O.isMesh&&(O.castShadow=!0,O.receiveShadow=!0)}),{group:e,lensR:M,lensB:S,hlMat:y}}function Uy(){return Fs(1024,256,(r,e,t)=>{r.fillStyle="#f4f4f0",r.fillRect(0,0,e,t),r.fillStyle="#16324f",r.fillRect(0,t*.58,e,t*.1),r.fillStyle="#a01818",r.fillRect(0,t*.68,e,t*.025);let n=7;const i=()=>(n=n*16807%2147483647)/2147483647;for(let s=0;s<300;s++)r.fillStyle=`rgba(90,70,40,${i()*.1})`,r.fillRect(i()*e,t*.75+i()*t*.25,2+i()*8,1+i()*3)})}function Oy(r,e){const t=Fs(1024,160,(s,o,a)=>{s.clearRect(0,0,o,a),s.fillStyle="#16324f",s.font="bold 86px Arial Black, Arial",s.textAlign="center",s.textBaseline="middle",s.fillText("POLÍCIA MILITAR",o/2,a/2+4)}),n=Fs(256,128,(s,o,a)=>{s.fillStyle="#16324f",s.font="bold 90px Arial",s.textAlign="center",s.textBaseline="middle",s.fillText("2207",o/2,a/2)}),i=(s,o,a)=>new ie(new Zn(o,a),new It({map:s,transparent:!0,roughness:.3,clearcoat:1,envMap:e,polygonOffset:!0,polygonOffsetFactor:-6,depthWrite:!1}));for(const s of[-1,1]){const o=i(t,1.5,.23);o.position.set(s*.828,.7,-.1),o.rotation.y=s*Math.PI/2,r.add(o);const a=i(n,.4,.2);a.position.set(s*.828,1.18,-1.15),a.rotation.y=s*Math.PI/2,r.add(a)}}const Bn=2.7,Qr=.15,wt=(r=0,e=0,t=0)=>new D(r,e,t);function Et(r,e={}){const t=new Re({map:r,roughness:e.rough??.88,metalness:e.metal??0,color:e.color??16777215});return e.bump!==!1&&r&&(t.bumpMap=r,t.bumpScale=e.bump??1.5),e.roughMap&&(t.roughnessMap=e.roughMap),t}function gf(r,e,t,n,i){const s=r.attributes.uv,o=[[n,t],[n,t],[e,n],[e,n],[e,t],[e,t]];for(let a=0;a<6;a++)for(let l=0;l<4;l++){const c=a*4+l;s.setXY(c,s.getX(c)*o[a][0]/i,s.getY(c)*o[a][1]/i)}s.needsUpdate=!0}function Fy(r){const e=r.scene,t={colliders:[],occluders:[],bounce:[],interact:[],doors:[],bulbs:[],reveal:[],props:{},updaters:[],stalkerSpots:[wt(1,0,7),wt(15,0,6.8),wt(1,0,11),wt(14.5,0,5),wt(9,0,7),wt(4.5,0,1)]},n=new We;e.add(n);const i=(R,U,Z,K,ae,oe,Ee)=>{const ge={x0:R,x1:U,y0:Z,y1:K,z0:ae,z1:oe,on:!0,tag:Ee};return t.colliders.push(ge),ge},s={wpSala:Et(pa(3,[150,138,102])),wpHall:Et(pa(5,[138,118,92])),wpCasal:Et(pa(8,[118,134,126])),wpKid:Et(pa(9,[176,146,146])),tileK:Et(ma(7,[188,198,182],8),{rough:.35,bump:2}),tileB:Et(ma(12,[170,196,202],10),{rough:.3,bump:2}),floorK:Et(ma(15,[138,62,48],6),{rough:.5,bump:2}),floorB:Et(ma(16,[200,200,196],12),{rough:.35,bump:2}),wood:Et(Rs(5),{rough:.6,bump:2}),porch:Et(Rs(6),{rough:.8,color:9079434}),ext:Et(ga(14),{color:13286808,rough:.95,bump:.6}),ceil:Et(ga(13),{rough:.95}),conc:Et(Zr(11),{rough:.92,bump:3}),darkWood:Et(Rs(9),{color:6965813,rough:.6}),paintWood:Et(Rs(10),{color:14209216,rough:.7}),metal:new Re({color:7829367,roughness:.45,metalness:.7}),rust:Et(Zr(31),{color:9067066,rough:.8,metal:.4}),white:Et(ga(22),{color:15131352,rough:.4}),fabric:Et(Mn(40,[110,80,60],.15)),blanket:Et(Mn(41,[120,60,70],.9)),sheet:Et(Mn(42,[205,200,190],1)),redCloth:Et(Mn(43,[120,10,12],0)),black:new Re({color:657930,roughness:.6}),plastic:new Re({color:1973790,roughness:.35}),food:new Re({color:2759694,roughness:.9}),bone:new Re({color:14209208,roughness:.5}),bloodPool:new Re({color:2752512,roughness:.08,metalness:.1}),candle:new Re({color:15261640,roughness:.6}),glass:new Re({map:A_(),transparent:!0,roughness:.1,metalness:.3,depthWrite:!1}),car:new Re({color:14606046,roughness:.25,metalness:.4}),carDark:new Re({color:1119256,roughness:.2,metalness:.6}),tire:new Re({color:1118481,roughness:.9}),bark:Et(Zr(51),{color:4864556,rough:1})},o=w_(17);s.mud=Et(o.map,{roughMap:o.rough,rough:1,bump:3}),t.M=s;const a=r.assets,l=a&&a.env,c=(R,U,Z,K={})=>{if(!a||!a.tex[R]||!a.tex[R].map)return null;const ae=Py(a,R,K),oe=Z/U;for(const Ee of["map","normalMap","roughnessMap"])ae[Ee]&&(ae[Ee]=ae[Ee].clone(),ae[Ee].repeat.set(oe,oe),ae[Ee].needsUpdate=!0);return ae},h=(R,U)=>{U&&(s[R]=U)};h("wpSala",c("decrepit_wallpaper",1.7,1.2,{color:14866108})),h("wpHall",c("decrepit_wallpaper",1.7,1.2,{color:13154464})),h("wpCasal",c("peeling_painted_wall",2,1.2,{color:12898500})),h("wpKid",c("plastered_wall_03",2,1.2,{color:15779008})),h("tileK",c("long_white_tiles",1,1.2,{env:.5,color:14210244})),h("tileB",c("interior_tiles",1.3,1.2,{env:.5,color:13156520})),h("floorK",c("terracotta_floor_tiles",1.8,1.6,{env:.4})),h("floorB",c("worn_tile_floor",1.3,1.2,{env:.5})),h("wood",c("old_wood_floor",2.4,2.2,{env:.45})),h("porch",c("weathered_planks",2.2,2,{color:11051152})),h("ext",c("worn_plaster_wall",2.6,1.2,{color:14208176})),h("ceil",c("damaged_plaster",2.5,2,{color:14210248})),h("conc",c("concrete_wall_003",2.5,1.5,{})),s.concFloor=c("concrete_floor_worn_001",2.5,2.5,{})||s.conc,h("darkWood",c("wood_cabinet_worn_long",1,1.2,{color:10518632})),s.rust=c("rusty_metal_02",1.15,1.15,{metal:.45,rough:.8,env:.4})||s.rust,s.bark=c("bark_bluegum",1.8,1.2,{color:8023132,rough:1})||s.bark,s.cabinet=c("wood_cabinet_worn_long",1,1.2,{color:14998731})||s.white,s.door=c("rough_pine_door",1,1,{color:11573894}),h("mud",c("brown_mud_leaves_01",3.2,5,{rough:.7,env:.6})),s.roof=c("corrugated_iron",2,2.4,{metal:.55,rough:.65,color:10130056,env:.5}),s.carpet=c("dirty_carpet",1.4,1.3,{color:10119770}),s.trim=s.darkWood,s.curtain=new Re({map:Mn(52,[150,128,100],.25),roughness:.95,side:pn,color:13154464}),s.shade=new Re({map:Mn(53,[190,170,130],.15),roughness:.9,side:pn,emissive:0}),s.ceramic=new It({map:ga(23),color:15789798,roughness:.15,clearcoat:.8,clearcoatRoughness:.2,envMap:l,envMapIntensity:.6});const u=(R,U,Z,K,ae=0,oe={})=>{const Ee=a?Ly(a,R,n,U,Z,K,ae,oe):null;if(Ee&&oe.col){const ge=Ee.userData.box;i(ge.min.x,ge.max.x,ge.min.y,ge.max.y,ge.min.z,ge.max.z)}return Ee};function f(R,U,Z,K,ae,oe,Ee,ge={}){const it=new Vt(R,U,Z);gf(it,R,U,Z,ge.tile??1.2);const st=new ie(it,K);if(st.position.set(ae,oe+U/2,Ee),ge.ry&&(st.rotation.y=ge.ry),st.castShadow=ge.cast??!0,st.receiveShadow=!0,(ge.parent||n).add(st),ge.col)if(ge.ry){const ct=Math.abs(Math.cos(ge.ry)),Ct=Math.abs(Math.sin(ge.ry)),$e=R*ct+Z*Ct,At=R*Ct+Z*ct;i(ae-$e/2,ae+$e/2,oe,oe+U,Ee-At/2,Ee+At/2)}else i(ae-R/2,ae+R/2,oe,oe+U,Ee-Z/2,Ee+Z/2);return ge.occ!==!1&&ge.col&&t.occluders.push(st),st}function d(R,U,Z,K,ae,oe,Ee,ge=16,it={}){const st=new ie(new Nt(R,U,Z,ge),K);return st.position.set(ae,oe+Z/2,Ee),st.castShadow=it.cast??!0,st.receiveShadow=!0,(it.parent||n).add(st),st}function m(R,U,Z,K,ae,oe,Ee=0,ge=0,it=1.2,st={}){const ct=new Zn(R,U);if(it){const $e=ct.attributes.uv;for(let At=0;At<$e.count;At++)$e.setXY(At,$e.getX(At)*R/it,$e.getY(At)*U/it)}const Ct=new ie(ct,Z);return Ct.position.set(K,ae,oe),Ct.rotation.set(Ee,ge,0),Ct.receiveShadow=!0,Ct.castShadow=st.cast??!1,(st.parent||n).add(Ct),it&&R*U>3&&t.bounce.push(Ct),Ct}function v(R,U,Z,K,ae,oe,Ee,ge,it={}){const st=new Re({map:R,transparent:!0,depthWrite:!1,roughness:it.rough??.25,polygonOffset:!0,polygonOffsetFactor:-8,polygonOffsetUnits:-8,opacity:it.opacity??1}),ct=m(U,Z,st,K,ae,oe,Ee,ge,0,it);return ct.renderOrder=2,it.rz&&(ct.rotation.z=it.rz),ct}const g=(R,U,Z,K,ae=.006,oe=0,Ee)=>v(R,U,U,Z,ae,K,-Math.PI/2,0,{rz:oe,...Ee});function p(R,U,Z,K,ae=[],oe,Ee,ge=0,it=Bn,st={}){const ct=[];let Ct=Z;const $e=[...ae].sort((ke,Gt)=>ke.a-Gt.a);for(const ke of $e)ke.a>Ct&&ct.push({a:Ct,b:ke.a,lo:0,hi:it}),ke.bottom>0&&ct.push({a:ke.a,b:ke.b,lo:0,hi:ke.bottom}),ke.top<it&&ct.push({a:ke.a,b:ke.b,lo:ke.top,hi:it}),Ct=ke.b;Ct<K&&ct.push({a:Ct,b:K,lo:0,hi:it});const At=Ee||oe,kn=R==="x"?[At,At,oe,oe,oe,At]:[oe,At,oe,oe,oe,oe];for(const ke of ct){const Gt=ke.b-ke.a,tn=(ke.a+ke.b)/2,Zt=ke.hi-ke.lo,gn=R==="x"?Gt:Qr,Yt=R==="x"?Qr:Gt,vn=new Vt(gn,Zt,Yt);gf(vn,gn,Zt,Yt,st.tile??1.2);const jt=vn.attributes.uv;for(let un=0;un<jt.count;un++)jt.setY(un,jt.getY(un)+(ge+ke.lo)/(st.tile??1.2));const nn=new ie(vn,kn),Ut=R==="x"?tn:U,xn=R==="x"?U:tn;if(nn.position.set(Ut,ge+ke.lo+Zt/2,xn),nn.castShadow=!0,nn.receiveShadow=!0,n.add(nn),ge===0&&ke.lo===0&&!st.noTrim)for(const[un,ei]of[[1,kn[R==="x"?4:0]],[-1,kn[R==="x"?5:1]]]){if(ei===s.ext||ei===s.conc)continue;const Xn=R==="x"?Gt:.016,ti=R==="x"?.016:Gt,Gs=new ie(new Vt(Xn,.095,ti),s.trim);Gs.position.set(R==="x"?Ut:Ut+un*(Qr/2+.008),.048,R==="x"?xn+un*(Qr/2+.008):xn),Gs.receiveShadow=!0,n.add(Gs)}i(Ut-gn/2,Ut+gn/2,ge+ke.lo,ge+ke.hi,xn-Yt/2,xn+Yt/2),t.occluders.push(nn)}for(const ke of $e)if(ke.window){const Gt=(ke.a+ke.b)/2,tn=ke.b-ke.a,Zt=ke.top-ke.bottom,gn=R==="x"?Gt:U,Yt=R==="x"?U:Gt,vn=m(tn,Zt,s.glass,gn,ge+ke.bottom+Zt/2,Yt,0,R==="x"?0:Math.PI/2,0);vn.renderOrder=3,vn.receiveShadow=!1;const jt=.05,nn=(Ut,xn,un,ei,Xn,ti)=>f(Ut,xn,un,s.paintWood,ei,Xn,ti,{tile:.6});if(R==="x"?(nn(tn+.1,jt,.2,Gt,ge+ke.bottom-jt,U),nn(tn+.1,jt,.2,Gt,ge+ke.top,U),nn(jt,Zt,.2,ke.a,ge+ke.bottom,U),nn(jt,Zt,.2,ke.b,ge+ke.bottom,U),nn(jt*.6,Zt,.06,Gt,ge+ke.bottom,U),i(ke.a,ke.b,ge,ge+ke.top,U-.1,U+.1)):(nn(.2,jt,tn+.1,U,ge+ke.bottom-jt,Gt),nn(.2,jt,tn+.1,U,ge+ke.top,Gt),nn(.2,Zt,jt,U,ge+ke.bottom,ke.a),nn(.2,Zt,jt,U,ge+ke.bottom,ke.b),nn(.06,Zt,jt*.6,U,ge+ke.bottom,Gt),i(U-.1,U+.1,ge,ge+ke.top,ke.a,ke.b)),t.windows=t.windows||[],t.windows.push(vn),ge===0)for(const[Ut,xn]of[[1,kn[R==="x"?4:0]],[-1,kn[R==="x"?5:1]]]){if(xn===s.ext)continue;const un=Qr/2+.07,ei=ge+ke.top+.14,Xn=ke.top-ke.bottom+.45,ti=new ie(new Nt(.012,.012,tn+.5,8),s.metal);ti.rotation.z=Math.PI/2,R==="z"&&ti.rotation.set(Math.PI/2,0,0),ti.position.set(R==="x"?Gt:U+Ut*un,ei+.02,R==="x"?U+Ut*un:Gt),n.add(ti);for(const Gs of[-1,1]){const $a=tn*(.32+Math.random()*.12),Ja=new Zn($a,Xn,18,6),Lo=Ja.attributes.position;for(let kr=0;kr<Lo.count;kr++){const Ah=Lo.getX(kr)/$a+.5,Xd=Lo.getY(kr)/Xn+.5;Lo.setZ(kr,Math.sin(Ah*Math.PI*7)*.035+Math.sin(Ah*23)*.006-(1-Xd)*.02*Gs)}Ja.computeVertexNormals();const ms=new ie(Ja,s.curtain),Eh=Gt+Gs*(tn/2+.25-$a/2);R==="x"?(ms.position.set(Eh,ei-Xn/2,U+Ut*un),ms.rotation.y=Ut>0?0:Math.PI):(ms.position.set(U+Ut*un,ei-Xn/2,Eh),ms.rotation.y=Ut>0?Math.PI/2:-Math.PI/2),ms.castShadow=!0,ms.receiveShadow=!0,n.add(ms)}}}}const _=(R,U)=>({a:R,b:U,bottom:.95,top:2.1,window:!0}),y=(R,U)=>({a:R,b:U,bottom:0,top:2.1});function x(R,U,Z,K,ae={}){const oe=K-Z,Ee=new We;R==="x"?Ee.position.set(Z,0,U):Ee.position.set(U,0,Z);const ge=new ie(new Vt(R==="x"?oe-.02:.045,2.08,R==="x"?.045:oe-.02),ae.mat||s.door||s.darkWood);R==="x"?ge.position.set(oe/2,1.04,0):ge.position.set(0,1.04,oe/2),ge.castShadow=!0,ge.receiveShadow=!0,Ee.add(ge);const it=new ie(new On(.03,10,8),s.metal);R==="x"?it.position.set(oe-.1,1,.05):it.position.set(.05,1,oe-.1),Ee.add(it);const st=it.clone();R==="x"?st.position.z=-.05:st.position.x=-.05,Ee.add(st);const ct=(At,kn,ke,Gt,tn,Zt)=>f(At,kn,ke,s.paintWood,Gt,tn,Zt,{tile:.6});R==="x"?(ct(.06,2.12,.2,Z-.03,0,U),ct(.06,2.12,.2,K+.03,0,U),ct(oe+.12,.06,.2,(Z+K)/2,2.1,U)):(ct(.2,2.12,.06,U,0,Z-.03),ct(.2,2.12,.06,U,0,K+.03),ct(.2,.06,oe+.12,U,2.1,(Z+K)/2)),n.add(Ee);const Ct=R==="x"?i(Z,K,0,2.1,U-.06,U+.06,"door"):i(U-.06,U+.06,0,2.1,Z,K,"door"),$e={pivot:Ee,panel:ge,col:Ct,axis:R,open:ae.open??0,target:ae.open??0,dir:ae.dir??1,locked:!!ae.locked,name:ae.name||"Porta",pos:R==="x"?wt((Z+K)/2,1.1,U):wt(U,1.1,(Z+K)/2),jammed:!1};return $e.set=(At,kn=!0)=>{$e.target=At,kn&&r.audio.ctx&&r.audio.doorOpen($e.pos)},$e.slam=()=>{$e.target=0,$e.open=Math.min($e.open,.05),r.audio.doorSlam($e.pos),r.shake(.15)},t.doors.push($e),t.interact.push({pos:$e.pos,door:$e,get label(){return $e.locked?$e.lockLabel||"Trancada":$e.target>.5?"Fechar":"Abrir"},use:()=>{if($e.locked){r.audio.latch($e.pos),r.audio.creak($e.pos,.2,.3),$e.onLocked&&$e.onLocked();return}$e.set($e.target>.5?0:1)}}),$e}function A(R,U,Z,K={}){const ae={pos:R,label:U,use:Z,enabled:K.enabled??!0,range:K.range??1.9,hold:K.hold};return t.interact.push(ae),ae}function w(R,U,Z,K={}){const ae=K.y??Bn,oe=new ie(new Nt(.006,.006,.4,4),s.black);oe.position.set(R,ae-.2,U),n.add(oe),d(.025,.03,.06,s.black,R,ae-.46,U,8,{cast:!1});const Ee=new It({color:9076848,emissive:16761994,emissiveIntensity:0,roughness:.05,transmission:.4,transparent:!0,opacity:.85,envMap:l}),ge=[[.012,0],[.014,.02],[.03,.05],[.034,.075],[.028,.1],[0,.112]].map(([$e,At])=>new se($e,-At)),it=new ie(new ks(ge,16),Ee);it.position.set(R,ae-.46,U),n.add(it);const st=new ie(new us(.008,.0012,4,12,Math.PI),new Mi({color:3348992}));st.position.set(R,ae-.535,U),n.add(st);const ct=new zn(16763024,0,K.dist??7,2);if(ct.position.set(R,ae-.55,U),n.add(ct),!K.noShade){const $e=new ie(new Nt(.09,.2,.2,20,1,!0),s.shade.clone());$e.position.set(R,ae-.52,U),$e.castShadow=!1,n.add($e),Ee.userData.shade=$e}const Ct={light:ct,mat:Ee,base:(K.power??7)*2.6,room:Z,flicker:0,dead:!1,pos:wt(R,ae-.5,U)};return t.bulbs.push(Ct),Ct}const E=(R,U,Z,K)=>m(U-R,K-Z,s.mud,(R+U)/2,-.01,(Z+K)/2,-Math.PI/2,0,5);E(-45,45,-45,0),E(-45,0,0,40),E(0,45,12,40),E(16,45,0,6),E(16,45,8,12),E(20,45,6,8),i(-3.2,-3,-2,3,-16.5,.2),i(19,19.2,-2,3,-16.5,.2),i(-3.2,19.2,-2,3,-16.6,-16.4),i(-3.2,0,-2,3,-.1,.1),i(16,19.2,-2,3,-.1,.1);const L=(R,U)=>f(.1,1.2,.1,s.bark,R,0,U,{tile:.5});for(let R=-16.5;R<=0;R+=2)L(-3.1,R),L(19.1,R);for(let R=-3;R<=19;R+=2)(R<5||R>9)&&L(R,-16.5);f(.04,.08,16.5,s.bark,-3.1,.9,-8.25,{tile:.5}),f(.04,.08,16.5,s.bark,19.1,.9,-8.25,{tile:.5}),f(.04,.08,16.5,s.bark,-3.1,.45,-8.25,{tile:.5}),f(.04,.08,16.5,s.bark,19.1,.45,-8.25,{tile:.5}),f(8,.08,.04,s.bark,1,.9,-16.5,{tile:.5}),f(10,.08,.04,s.bark,14,.9,-16.5,{tile:.5});function M(R,U,Z,K){let ae=K;const oe=()=>(ae=(ae*9301+49297)%233280)/233280,Ee=(ge,it,st,ct,Ct)=>{const $e=ge.clone().addScaledVector(it,st),At=new ie(new Nt(ct*.7,ct,st,6),s.bark);if(At.position.copy(ge).lerp($e,.5),At.quaternion.setFromUnitVectors(wt(0,1,0),it.clone().normalize()),At.castShadow=!0,n.add(At),Ct>0)for(let kn=0;kn<3;kn++){const ke=it.clone().add(wt((oe()-.5)*1.4,oe()*.5,(oe()-.5)*1.4)).normalize();Ee($e,ke,st*(.55+oe()*.2),ct*.6,Ct-1)}};Ee(wt(R,0,U),wt(0,1,0),Z*.4,.18,4)}u("dead_tree_trunk",-1.6,0,-7.5,.7),u("dead_tree_trunk_02",15.8,0,-13.2,2.2),u("dead_tree_trunk",13.5,0,-4.2,-.4),M(-7,-6,7,3),M(-9,-14,8,7),M(23,-10,9,11),M(24,3,7,5),M(-6,6,8,13),M(10,-22,9,17),M(-1,-20,6,19);const S=Ny(l),C=S.group;C.position.set(7.5,0,-12),C.rotation.y=-.15,n.add(C),Oy(C,l),i(6.4,8.6,0,1.5,-14.1,-9.9);const F=new zn(16715792,0,12,2);F.position.set(7.2,1.75,-12.4),n.add(F);const B=new zn(1065215,0,12,2);B.position.set(7.9,1.75,-12.4),n.add(B);const O=new gh(16773336,220,32,.42,.5,1.6);O.position.set(7.8,.7,-9.9),O.target.position.set(6.2,1,2),n.add(O,O.target),O.castShadow=!0,O.shadow.mapSize.set(1024,1024),O.shadow.camera.near=.5,O.shadow.camera.far=30,O.shadow.bias=-.0012,O.shadow.normalBias=.05;const z={material:S.lensR},G={material:S.lensB},Y=S.hlMat;t.props.car={car:C,redL:F,blueL:B,barR:z,barB:G,head:O,hlMat:Y},t.updaters.push((R,U)=>{if(!t.props.car.sirenOn){F.intensity=B.intensity=0,z.material.emissiveIntensity=G.material.emissiveIntensity=0;return}const Z=U*2.2%1,K=Z<.5&&Z*8%1<.6?1:0,ae=Z>=.5&&Z*8%1<.6?1:0;F.intensity=K*30,B.intensity=ae*40,z.material.emissiveIntensity=K*8,G.material.emissiveIntensity=ae*8}),A(wt(7.5,1,-9.6),"Rádio da viatura",()=>r.story.event("carRadio"),{range:2.4}),m(8,6,s.wood,4,0,3,-Math.PI/2,0,2.2),m(8,6,s.floorK,12,0,3,-Math.PI/2,0,1.6),m(16,2,s.wood,8,0,7,-Math.PI/2,0,2.2),m(6,4,s.wood,3,0,10,-Math.PI/2,0,2.2),m(4,4,s.floorB,8,0,10,-Math.PI/2,0,1.2),m(6,4,s.wood,13,0,10,-Math.PI/2,0,2.2),m(16,12,s.ceil,8,Bn,6,Math.PI/2,0,2);const W=s.roof||Et(Zr(61),{color:5910560,rough:.9}),Q=Math.atan2(1.6,6.8),ce=f(17.2,.1,7.1,W,8,0,0,{tile:2});ce.position.set(8,Bn+.85,2.8),ce.rotation.x=Q;const ve=f(17.2,.1,7.1,W,8,0,0,{tile:2});ve.position.set(8,Bn+.85,9.2),ve.rotation.x=-Q,f(16,.2,12,s.ext,8,Bn,6,{tile:3});for(const R of[0,16]){const U=new Eo;U.moveTo(-6,0),U.lineTo(6,0),U.lineTo(0,1.65),U.lineTo(-6,0);const Z=new ie(new ph(U),s.ext);Z.position.set(R,Bn,6),Z.rotation.y=Math.PI/2,n.add(Z);const K=Z.clone();K.rotation.y=-Math.PI/2,n.add(K)}p("x",0,0,16,[_(1.8,3.4),y(5.4,6.4),_(10,11.6)],s.wpSala,s.ext),p("x",12,0,16,[_(1,2.2),_(4.4,5.4),_(11,12.4)],s.ext,s.wpCasal),p("z",0,0,12,[_(1.5,3),_(10.4,11.6)],s.wpSala,s.ext),p("z",16,0,12,[_(2.2,3.6),y(6.5,7.5)],s.ext,s.tileK),p("z",8,0,6,[y(2.5,3.5)],s.tileK,s.wpSala),p("x",6,0,16,[y(3.5,4.5),y(11.5,12.5)],s.wpHall,s.wpSala),p("x",8,0,16,[y(2.5,3.5),y(7.5,8.5),y(12.5,13.5)],s.wpCasal,s.wpHall),p("z",6,8,12,[],s.tileB,s.wpCasal),p("z",10,8,12,[],s.wpKid,s.tileB);const Oe=x("x",0,5.4,6.4,{name:"Porta da frente",open:.12});x("x",6,11.5,12.5,{open:1,dir:1});const Je=x("x",8,2.5,3.5,{open:0}),J=x("x",8,7.5,8.5,{open:0}),fe=x("x",8,12.5,13.5,{open:0}),Ce=x("z",16,6.5,7.5,{open:0,locked:!0,name:"Porão",mat:Et(Rs(33),{color:4861984})});Ce.lockLabel="Trancada com cadeado",t.props.doors={front:Oe,dCasal:Je,dBath:J,dKid:fe,dBase:Ce},m(10,2.6,s.porch,8,.01,-1.3,-Math.PI/2,0,2),f(10.4,.12,2.9,s.darkWood,8,2.55,-1.35,{tile:2});for(const R of[3.1,6.9,9.1,12.9])f(.12,2.55,.12,s.paintWood,R,0,-2.5,{col:!0,tile:.6});u("plastic_monobloc_chair_01",11.5,0,-1.1,2.6,{col:!0,dirty:.75})||f(.6,.45,.6,s.darkWood,11.5,0,-1,{col:!0,tile:.6}),u("rubber_boots",4.6,0,-.35,.4),u("rubber_boots",4.85,0,-.3,-.2),u("trashbag",13.6,0,-.6,1,{dirty:.7});const de=w(6,-1.2,"porch",{y:2.55,power:0,noShade:!0});de.dead=!0,(()=>{const K=new We;K.position.set(12.55,2.52,-2.25);const ae=new ie(new Nt(.055,.055,.012,12),s.paintWood);ae.position.y=-.02,ae.castShadow=!0,K.add(ae);const oe=new Nt(.002,.002,1,4),Ee=new We;Ee.position.y=-.16,K.add(Ee);const ge=new ie(new On(.022,8,6),s.rust);ge.position.y=.1,Ee.add(ge);for(let it=0;it<6;it++){const st=it/6*Math.PI*2+.2,ct=.042,Ct=.1+it%3*.035,$e=new ie(oe,s.metal);$e.position.set(Math.cos(st)*ct,-.06,Math.sin(st)*ct),$e.scale.y=.12,K.add($e);const At=new ie(new Nt(.008,.008,Ct,8),s.rust);At.position.set(Math.cos(st)*ct,-.12-Ct/2,Math.sin(st)*ct),At.castShadow=!0,K.add(At)}n.add(K),t.updaters.push((it,st)=>{const ct=Math.sin(st*1.7)*.03+Math.sin(st*.53+1.7)*.05+Math.sin(st*4.3)*.012;K.rotation.x=ct*.7,K.rotation.z=ct,r.audio.chimes(wt(12.55,2.52-.2,-2.25))})})(),u("Sofa_01",.42,0,2.2,Math.PI/2,{col:!0,dirty:.8})||f(.9,.42,2.1,s.fabric,.55,0,2.2,{col:!0}),f(.45,.5,1,s.darkWood,3.35,0,2.2,{col:!0,tile:.8});const De=u("Television_01",3.35,.5,2.2,-Math.PI/2),He=De?De.userData.box.min.x-.004:3.065,Fe=De?(De.userData.box.min.y+De.userData.box.max.y)/2+.01:.73;De||f(.5,.46,.58,s.plastic,3.32,.5,2.2),u("mantel_clock_01",3.4,.5,2.62,-Math.PI/2);const et=R_(),ne=m(.36,.27,new Re({map:et,emissive:16777215,emissiveMap:et,emissiveIntensity:1,roughness:.1,polygonOffset:!0,polygonOffsetFactor:-2}),He-.012,Fe,2.2,0,-Math.PI/2,0);m(.42,.33,new Re({color:657930,roughness:.4}),He-.002,Fe,2.2,0,-Math.PI/2,0);const ue=new zn(11059455,1.2,4,2);ue.position.set(He-.3,Fe,2.2),n.add(ue),t.props.tv={tvTex:et,tvScreen:ne,tvLight:ue,on:!0};let N=0;t.updaters.push((R,U)=>{t.props.tv.on?(N+=R,N>1/30&&(N=0,et.userData.update(U)),ue.intensity=.7+Math.random()*.6):ue.intensity=0});const ze=u("ClassicNightstand_01",.33,0,3.75,Math.PI/2,{col:!0}),he=ze?ze.userData.box.max.y:.6;ze||f(.45,.6,.45,s.darkWood,.33,0,3.75,{col:!0});const we=Dy(l);we.position.set(.36,he,3.72),we.rotation.y=Math.PI/2+.25,n.add(we),t.props.phone={pos:wt(.4,he+.1,3.72),handset:we.userData.handset,obj:we,base:we.position.clone()};const xe=A(wt(.4,he+.1,3.72),"Telefone",()=>r.story.event("phone"),{range:2.3});Object.defineProperty(xe,"label",{get:()=>r.story&&r.story.ring?"Atender o telefone":"Telefone"});const Ye=u("dining_table",5.6,0,4.2,0,{col:!0,dirty:.85}),Se=Ye?Ye.userData.box.max.y:.78;Ye||(f(1.7,.05,.95,s.darkWood,5.5,.73,4.2,{tile:.8}),i(4.65,6.35,0,.78,3.72,4.68));for(const[R,U,Z]of[[5,3.25,0],[6.2,3.25,0],[5,5.15,Math.PI],[6.2,5.15,Math.PI]])u("dining_chair_02",R,0,U,Z,{dirty:.8});const P=u("dining_chair_02",7.1,0,4.4,1.1,{dirty:.8});P&&(P.rotation.z=Math.PI/2,P.position.y=.22,P.position.x=7.25);const b=new It({color:15262938,roughness:.25,clearcoat:.8,envMap:l}),X=[[5,3.85],[6.2,3.85],[5,4.55],[6.2,4.55]];for(const[R,U]of X){d(.13,.1,.02,b,R,Se,U,24);const Z=new ie(new On(.07,10,8),s.food);Z.scale.set(1,.32,.8),Z.position.set(R+.02,Se+.03,U),n.add(Z);const K=f(.02,.004,.18,s.metal,R+.17,Se,U);K.rotation.y=.1}for(let R=0;R<11;R++){const U=new ie(new Ls(.004,.01,2,5),s.bone);U.position.set(6.2+(Math.random()-.5)*.12,Se+.026,4.55+(Math.random()-.5)*.12),U.rotation.set(Math.random()*3,Math.random()*3,0),n.add(U)}g(Un(3,"splat"),.25,6.2,4.55,Se+.022),A(wt(6.2,Se+.1,4.55),"Examinar prato",()=>r.story.event("teeth")),m(3,2,s.carpet||Et(Mn(44,[110,40,35],.3),{bump:!1}),5.6,.004,4.2,-Math.PI/2,0,1.3);for(let R=0;R<7;R++)g(Un(10+R,"smear"),.9,5.1-R*.18,4.9+R*.17,.007+R*5e-4,-.8+(Math.random()-.5)*.4);const te=a&&a.models.hanging_picture_frame_01?a.models.hanging_picture_frame_01.clone(!0):null;te?(te.traverse(R=>{R.isMesh&&R.material.name&&R.material.name.endsWith("artwork")&&(R.material=R.material.clone(),R.material.map=Bl(),R.material.map.flipY=!1,R.material.map.needsUpdate=!0,R.material.polygonOffset=!0,R.material.polygonOffsetFactor=-6,R.material.polygonOffsetUnits=-6)}),te.position.set(.078,1.72,4.6),te.rotation.y=Math.PI/2,te.scale.setScalar(.82),n.add(te)):(m(.5,.65,new Re({map:Bl(),roughness:.4}),.115,1.75,4.6,0,Math.PI/2,0),f(.04,.72,.57,s.darkWood,.09,1.39,4.6)),A(wt(.3,1.7,4.6),"Examinar retrato",()=>r.story.event("granny")),f(.04,.5,.04,s.darkWood,1.6,1.45,5.9),f(.3,.04,.04,s.darkWood,1.6,1.55,5.9),m(.5,.4,new Re({map:kl(2,4,!1),roughness:.4}),6.4,1.6,5.91,0,Math.PI,0);const le=v(Fl("ELA NOS EMPRESTOU"),2.6,.65,7.91,1.6,4.7,0,-Math.PI/2,{rough:.6});t.reveal.push(le),f(.08,.12,.02,s.white,4.8,1.2,.09),A(wt(4.8,1.25,.1),"Interruptor",()=>r.story.event("switch")),w(4,3,"sala"),f(.62,.88,4.6,s.cabinet,15.6,0,2.6,{col:!0,tile:1});for(let R=0;R<6;R++)f(.02,.6,.7,s.cabinet,15.28,.12,.65+R*.75,{tile:.8});f(.66,.04,4.62,Et(Zr(71),{color:6974050,rough:.4}),15.58,.88,2.6),f(.45,.04,.6,s.metal,15.6,.89,3.1),f(.36,.7,4.6,s.cabinet,15.75,1.55,2.6,{tile:.8}),f(.62,.88,.62,s.ceramic,15.6,0,5.4,{col:!0}),u("pot_enamel_01",15.5,.9,5.3,.6);for(const[R,U]of[[15.45,5.25],[15.75,5.25],[15.45,5.55],[15.75,5.55]])d(.08,.08,.02,s.black,R,.88,U,12);const ee=Iy(l);ee.group.position.set(8.72,0,.53),n.add(ee.group),i(8.34,9.1,0,1.65,.18,.88);const Ne=a?Ed(a,"tiago"):null;if(Ne){Ne.scale.setScalar(.041),Ne.position.set(0,.98,.02),Ne.rotation.set(-.12,.25,.08),ee.group.add(Ne);const R=new ie(new Nt(.05,.06,.015,16),new It({color:5900296,roughness:.25,clearcoat:1}));R.position.set(0,.8,.03),ee.group.add(R);const U=new ie(new Nt(.17,.13,.03,24),new It({color:14210248,roughness:.2,clearcoat:1,envMap:l}));U.position.set(0,.795,.02),ee.group.add(U);const Z=new ie(new rs(.14,20),s.bloodPool);Z.rotation.x=-Math.PI/2,Z.position.set(0,.812,.02),ee.group.add(Z)}for(let R=0;R<4;R++)d(.045,.045,.14,new It({color:[5910544,6950928,3815952,5909024][R],roughness:.1,transmission:.3,transparent:!0,opacity:.85,envMap:l}),-.22+R*.14,1.11,-.1,12,{parent:ee.group});g(Un(21,"drip"),.5,0,0,.43,0,{parent:ee.group}),t.props.fridge={pivot:ee.pivot,light:ee.bulb,open:0,target:0},A(wt(8.95,1.1,1),"Abrir geladeira",()=>r.story.event("fridge")),g(Un(22,"pool"),1.4,9.3,1.4,.006),f(1.1,.05,.8,s.darkWood,11.5,.75,3,{tile:.8}),u("wooden_bowl_01",11.75,.8,2.85,0);for(const[R,U,Z]of[[11.2,2.35,0],[11.9,3.7,Math.PI]])u("dining_chair_02",R,0,U,Z,{dirty:.75});u("painted_wooden_cabinet",9.4,0,5.62,Math.PI,{col:!0,dirty:.85}),u("trashbag",14.75,0,5.62,.4,{dirty:.7});for(const[R,U]of[[-.5,-.35],[.5,-.35],[-.5,.35],[.5,.35]])f(.05,.75,.05,s.darkWood,11.5+R,0,3+U);i(10.95,12.05,0,.8,2.6,3.4);const ye=f(.3,.005,.03,s.metal,11.3,.8,3.1);ye.rotation.y=.4,g(Un(23,"splat"),.5,11.6,3,.776);const Me=u("power_box_01",13.5,1.15,.12,0);Me||f(.4,.5,.1,s.rust,13.5,1.3,.13);const rt=new ie(new On(.012,6,6),new Re({color:2228224,emissive:16719872,emissiveIntensity:0}));rt.position.set(13.72,Me?Me.userData.box.max.y-.04:1.72,Me?Me.userData.box.max.z+.005:.19),n.add(rt),t.props.fuse={led:rt},A(wt(13.5,1.55,.25),"Quadro de luz",()=>r.story.event("fusebox")),t.props.drawer=A(wt(15.25,.8,1.4),"Abrir gaveta",()=>r.story.event("drawer")),w(12,3,"cozinha");for(let R=0;R<9;R++)g(Un(60+R%2,"hand"),.22,9.6+R*.55,2+Math.sin(R)*.3+R%2*.25,.007,Math.PI+(R%2?.3:-.3),{opacity:.8});m(14,.9,s.carpet||Et(Mn(45,[90,30,30],.2),{bump:!1}),8,.004,7,-Math.PI/2,0,1.2),[4.8,5.8,9.6,10.6,14.2].forEach((R,U)=>{m(.32,.26,new Re({map:kl(5+U,3+U%2,!0,U%2===0),roughness:.4,polygonOffset:!0,polygonOffsetFactor:-8,polygonOffsetUnits:-8,depthWrite:!1}),R,1.55+U%2*.12,7.904,0,Math.PI,0),f(.36,.3,.02,s.darkWood,R,1.4+U%2*.12,7.92)}),f(.6,.9,.35,s.darkWood,9.5,0,6.27,{col:!0,tile:.6});for(let R=0;R<3;R++)d(.015,.015,.1+R*.03,s.candle,9.35+R*.15,.9,6.25,8);const Ue=new ie(new Ls(.04,.16,3,8),new Re({color:5925514,roughness:.5}));Ue.position.set(9.5,1.03,6.2),n.add(Ue),Ue.rotation.z=Math.PI,w(4,7,"hall",{power:5}),w(12,7,"hall",{power:5});const je=r.cmats,Ze=_i(je,{h:1.55,skin:je.ghost,top:je.ghost,bottom:je.ghost,dress:je.ghost,hair:!0,hairLen:.3,mouthOpen:2.5});Ze.root.position.set(15.3,0,7),Ze.root.rotation.y=-Math.PI/2,Ze.neck.rotation.z=.5,n.add(Ze.root),t.reveal.push(Ze.root),t.props.ghost=Ze.root;const Ie=u("old_bed_frame",3,0,10.9,Math.PI,{col:!0});if(Ie){Ie.scale.x=1.7,Ie.updateMatrixWorld(!0);const R=new ui().setFromObject(Ie);t.colliders[t.colliders.length-1].x0=R.min.x,t.colliders[t.colliders.length-1].x1=R.max.x}else f(1.7,.42,2.1,s.darkWood,3,0,10.9,{col:!0});f(1.45,.18,1.9,s.sheet,3,.36,10.85);const mt=f(1.5,.05,1.35,s.blanket,3,.54,10.6);mt.rotation.z=.02;for(const R of[2.6,3.4]){const U=f(.55,.12,.35,s.sheet,R,.54,11.6);U.rotation.x=-.25}g(Un(31,"pool"),1.1,3.3,10.6,.592,.5);const tt=u("ClassicNightstand_01",1.6,0,11.7,Math.PI,{col:!0}),yt=u("ClassicNightstand_01",4.4,0,11.7,Math.PI,{col:!0}),k=yt?yt.userData.box.max.y:.55;tt||(f(.45,.55,.4,s.darkWood,1.75,0,11.7,{col:!0}),f(.45,.55,.4,s.darkWood,4.25,0,11.7,{col:!0})),u("vintage_cabinet_01",.36,0,9.15,Math.PI/2,{col:!0,dirty:.8})||f(.6,2,1.5,s.darkWood,.38,0,9,{col:!0});const _e=new ie(new Nt(.015,.015,.07,8),new Re({color:14207120,roughness:.3,metalness:.4}));_e.rotation.z=Math.PI/2,_e.position.set(4.35,k+.016,11.65),n.add(_e),t.props.fuseItem=_e,t.props.fuseI=A(wt(4.35,k+.05,11.65),"Pegar fusível",()=>r.story.event("takeFuse"),{enabled:!1}),w(3,10,"casal"),v(Fl("NÃO OLHE PRA CIMA"),2.2,.55,3,Bn-.01,9.4,Math.PI/2,0,{rz:Math.PI});const $=7.05,re=11.5;f(1.7,.55,.08,s.ceramic,$,0,11.08,{col:!0}),f(.08,.55,.8,s.ceramic,6.2,0,re),f(.08,.55,.8,s.ceramic,7.9,0,re,{col:!0}),f(1.7,.06,.8,s.ceramic,$,0,re),i(6.15,7.95,0,.6,11.05,11.95);const Le=m(1.6,.74,s.bloodPool,$,.47,re,-Math.PI/2,0,0);t.props.tub={surf:Le,pos:wt($,.5,re)},v(Un(41,"drip"),.6,.6,7.4,.3,11.035,0,Math.PI),f(.38,.4,.5,s.ceramic,9.6,0,9,{col:!0}),f(.4,.35,.18,s.ceramic,9.75,.4,9),f(.45,.12,.38,s.ceramic,9.7,.78,10.7,{col:!0}),d(.05,.07,.78,s.ceramic,9.75,0,10.7,10);const Te=new Ya(new Zn(.55,.75),{textureWidth:512,textureHeight:680,color:10132122,clipBias:.003});Te.position.set(9.9,1.55,10.7),Te.rotation.y=-Math.PI/2,n.add(Te),Te.camera.layers.enable(2),f(.03,.82,.62,s.darkWood,9.93,1.14,10.7),t.props.mirror=Te,w(8,10,"banheiro",{power:4}),g(Un(42,"pool"),.9,7.6,10.2,.006);const ot=g(Un(43,"pool"),1.4,8,7.5,.008);ot.visible=!1,t.props.underDoor=ot,u("old_bed_frame",15.42,0,10.85,Math.PI,{col:!0,tint:15784152})||f(.95,.38,1.9,Et(Rs(12),{color:11569776}),15.42,0,10.85,{col:!0}),f(.84,.14,1.85,Et(Mn(46,[200,170,190],.1)),15.42,.34,10.85);const zt=[11546672,3166384,13672480,3186768];for(let R=0;R<6;R++){const U=f(.08,.08,.08,new Re({color:zt[R%4],roughness:.6}),11.5+Math.random()*1.5,0,9+Math.random()*2);U.rotation.y=Math.random()*3}const qt=_i(r.cmats,{h:.35,skin:r.cmats.childSkin,dress:r.cmats.childDress,hair:!0,hairLen:.2});qt.root.position.set(12.2,.05,11.4),qt.root.rotation.set(-Math.PI/2,0,.6),n.add(qt.root),qt.head.rotation.y=Math.PI,[9,9.7,10.4].forEach((R,U)=>m(.4,.31,new Re({map:T_(4+U),roughness:.8}),10.085,1.25+U%2*.15,R,0,Math.PI/2,0)),A(wt(10.3,1.3,9.7),"Examinar desenhos",()=>r.story.event("drawings")),w(13,10,"kid",{power:5});const Mt=new We;n.add(Mt),Mt.visible=!1;for(let R=0;R<26;R++)v(Un(80+R%4,"hand"),.24,.24,10.6+Math.random()*5,Bn-.008,8.5+Math.random()*3.3,Math.PI/2,0,{rz:Math.random()*6.28,parent:Mt});t.props.ceilingHands=Mt;const Qt=new We,Qn=new Re({color:10127962,metalness:.8,roughness:.35}),Ro=new ie(new us(.018,.005,6,12),Qn);Qt.add(Ro);const Fr=new ie(new Vt(.008,.06,.004),Qn);Fr.position.y=-.045,Qt.add(Fr),Qt.rotation.x=-Math.PI/2,Qt.position.set(14.7,.01,10.6),Qt.visible=!1,n.add(Qt),t.props.key=Qt,t.props.keyI=A(wt(14.7,.2,10.6),"Pegar chave",()=>r.story.event("takeKey"),{enabled:!1});const qe=-3;p("x",6,16,20,[],s.conc,s.ext,qe,Bn-qe,{tile:1.5}),p("x",8,16,20,[],s.ext,s.conc,qe,Bn-qe,{tile:1.5}),f(4.2,.2,2.3,s.ext,18,Bn,7,{tile:2}),f(4,.1,2,s.conc,18,Bn-.1,7,{tile:2,cast:!1}),p("z",20,6,8,[{a:6,b:8,bottom:0,top:2.4}],s.conc,s.conc,qe,Bn-qe);for(let R=0;R<12;R++){const U=16+R*.3333333333333333,Z=-R*(3/12);f(4/12,.08,2,s.darkWood,U+2/12,Z-.08-3/12,7,{tile:.8})}const zs=f(4.6,.05,.05,s.darkWood,18,0,6.2);zs.position.y=-.6,zs.rotation.z=-Math.atan2(3,4),m(8,12,s.concFloor,24,qe+.005,6,-Math.PI/2,0,2.5),m(8,12,s.conc,24,-.6,6,Math.PI/2,0,2.5);for(let R=.5;R<12;R+=1.4)f(8,.18,.12,s.darkWood,24,-.78,R,{tile:1});p("z",20,0,6,[],s.conc,s.conc,qe,2.4,{tile:1.5}),p("z",20,8,12,[],s.conc,s.conc,qe,2.4,{tile:1.5}),p("z",28,0,12,[],s.conc,s.conc,qe,2.4,{tile:1.5}),p("x",0,20,28,[],s.conc,s.conc,qe,2.4,{tile:1.5}),p("x",12,20,28,[],s.conc,s.conc,qe,2.4,{tile:1.5});for(const[R,U]of[[23,3.6],[23.2,9],[25.8,6.4]])f(.35,2.4,.35,s.conc,R,qe,U,{col:!0,tile:1});const Co=u("wooden_bookshelf_worn",22.6,qe,.38,0,{col:!0,dirty:.75});if(u("wooden_bookshelf_worn",24.1,qe,.38,0,{col:!0,dirty:.75}),!Co){for(let R=0;R<3;R++)f(2.4,.04,.45,s.darkWood,23.8,qe+.4+R*.6,.35,{tile:.8});i(22.6,25,qe,qe+2,.1,.6)}for(let R=0;R<10;R++)d(.045,.045,.16,new It({color:[4860432,3813392,5246992][R%3],roughness:.1,transmission:.3,transparent:!0,opacity:.85,envMap:l}),22.1+R%5*.22+Math.floor(R/5)*1.5,qe+.43+R%2*.68,.38,10);u("ammo_box",24.7,qe+1.12,.4,.2),u("wooden_crate_01",21.1,qe,3.6,.3,{col:!0}),u("wooden_crate_01",21.1,qe+.35,3.6,.5),u("wooden_crate_01",26.8,qe,9.8,1.4,{col:!0}),u("Barrel_01",27.2,qe,11.3,0,{col:!0,dirty:.8}),u("Barrel_01",26.5,qe,11.45,1,{col:!0,dirty:.8}),u("trashbag",21.4,qe,.8,2,{dirty:.6}),t.props.ammoBox=A(wt(24.8,qe+1.1,.5),"Caixa de munição",()=>r.story.event("ammoBox"));const ds=[];for(const[R,U]of[[22.3,2.4],[24.6,10.6],[26.4,2.8],[21.6,10.2]]){const Z=new We;Z.position.set(R,-.6,U),n.add(Z);const K=new ie(new Nt(.01,.01,.5,4),s.bark);K.position.y=-.25,Z.add(K);const ae=new ie(new Ls(.2,1.1,6,12),s.sheet);ae.position.y=-1.25,ae.scale.set(1,1,.8),ae.castShadow=!0,Z.add(ae),ae.scale.set(1,1,.75),ae.rotation.z=(Math.random()-.5)*.15;const oe=new ie(new On(.15,12,10),Et(Mn(47,[120,40,35],1.8)));oe.position.y=-1.95,oe.scale.set(1,1.15,.9),Z.add(oe);for(const ge of[-.7,-1.1,-1.5,-1.8]){const it=new ie(new us(.2-Math.abs(ge+1.25)*.05,.012,5,16),s.bark);it.rotation.x=Math.PI/2+(Math.random()-.5)*.3,it.position.y=ge,it.scale.set(1,.78,1),Z.add(it)}const Ee=new ie(new Nt(.004,.002,.35,4),s.bloodPool);Ee.position.y=-2.25,Z.add(Ee),ds.push(Z),g(Un(90+ds.length,"pool"),.7,R,U,qe+.007)}t.props.wrapped=ds,t.updaters.push((R,U)=>ds.forEach((Z,K)=>{Z.rotation.z=Math.sin(U*.7+K*2)*.05,Z.rotation.y=Math.sin(U*.3+K)*.4+(Z.userData.spin||0)}));const wn=new We;n.add(wn),f(.8,.9,1.8,s.darkWood,27.4,qe,6,{col:!0,parent:wn}),f(.84,.5,1.84,s.redCloth,27.4,qe+.5,6,{parent:wn}),m(.4,.52,new Re({map:Bl(),roughness:.4}),27.88,qe+1.35,6,0,-Math.PI/2,0,{parent:wn}),m(.4,.31,new Re({map:kl(9,5,!0),roughness:.4}),27.86,qe+1.15,5.4,0,-Math.PI/2,0,{parent:wn});const Di=new We;Di.position.set(27.45,qe+1,6.45),wn.add(Di);const ps=new ie(new On(.11,12,10),s.bone);ps.scale.set(.8,.9,1.3),Di.add(ps);for(const R of[-1,1]){const U=new ie(new To(.03,.3,8),s.bone);U.position.set(R*.06,.12,-.05),U.rotation.set(-.6,0,R*.5),Di.add(U)}for(const R of[-1,1]){const U=new ie(new On(.025,8,6),s.black);U.position.set(R*.04,.02,.12),Di.add(U)}Di.rotation.y=-Math.PI/2,d(.12,.08,.08,s.metal,27.3,qe+.9,5.6,14,{parent:wn}),m(.18,.18,s.bloodPool,27.3,qe+.985,5.6,-Math.PI/2,0,0,{parent:wn});const Vs=[],Po=new gr({map:fo(),color:16752704,blending:as,depthWrite:!1});for(let R=0;R<9;R++){const U=27.15+R%3*.17,Z=5.3+Math.floor(R/3)*.7+(Math.random()-.5)*.2,K=.08+Math.random()*.15;d(.02,.022,K,s.candle,U,qe+.9,Z,8,{parent:wn});const ae=new cs(Po);ae.scale.set(.05,.09,1),ae.position.set(U,qe+.93+K,Z),wn.add(ae),Vs.push(ae)}const Hs=new zn(16747056,0,10,1.7);Hs.position.set(27.2,qe+1.3,6),n.add(Hs),t.props.altar={group:wn,candles:Vs,candleL:Hs,lit:!1,pos:wt(27.2,qe+1,6)},t.updaters.push((R,U)=>{const Z=t.props.altar;Vs.forEach((K,ae)=>{K.visible=Z.lit,K.scale.y=.08+Math.sin(U*17+ae*3)*.015+Math.random()*.01}),Hs.intensity=Z.lit?9+Math.sin(U*13)*1.5+Math.random()*2:0}),v(Fl("A DÍVIDA FICA NA FAMÍLIA",1400,256,110),3.4,.62,27.91,qe+1.85,6,0,-Math.PI/2,{rough:.5});for(let R=0;R<6;R++)v(Un(100+R,"hand"),.25,.25,27.91,qe+.9+Math.random()*1.2,4.2+Math.random()*3.6,0,-Math.PI/2,{rz:Math.random()*6});t.props.diaryI=A(wt(27.1,qe+1,6.6),"Ler diário",()=>r.story.event("diary")),t.props.burnI=A(wt(27.1,qe+1,6),"Queimar o altar",()=>r.story.event("burn"),{enabled:!1,hold:2.2});const Za=f(.16,.04,.22,Et(Mn(48,[70,40,30],.3)),27.1,qe+.9,6.6);t.props.diary=Za;const Ii=new We;n.add(Ii),Ii.visible=!1;const T=new Bt({transparent:!0,depthWrite:!1,blending:as,side:pn,uniforms:{t:{value:0},k:{value:0}},vertexShader:`varying vec2 vUv; uniform float t, k;
      void main(){ vUv = uv; vec3 p = position;
        float w = (0.4 + k * 0.8) * uv.y * uv.y;
        p.x += sin(t * 3.1 + uv.y * 5.0) * 0.09 * w + sin(t * 7.3) * 0.02 * w;
        p.z += cos(t * 2.4 + uv.y * 6.0) * 0.07 * w;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }`,fragmentShader:`varying vec2 vUv; uniform float t, k;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y); }
      float fbm(vec2 p){ float v = 0.0, a = 0.5; for (int j = 0; j < 4; j++) { v += a * noise(p); p *= 2.03; a *= 0.55; } return v; }
      void main(){
        vec2 uv = vUv;
        vec2 q = vec2(uv.x * 2.0 - 1.0, uv.y);
        q.x *= 1.0 + q.y * 1.1;
        float n = fbm(vec2(q.x * 3.0 + sin(t * 0.7) * 0.4, uv.y * 4.5 - t * 3.4));
        float shape = 1.0 - smoothstep(0.0, 0.8, abs(q.x) * (1.25 - n * 0.8) + uv.y * 0.95 - n * 0.4);
        shape *= smoothstep(0.0, 0.1, uv.y);
        float a = clamp(shape * shape * 1.7 - 0.06, 0.0, 1.0) * (0.45 + k * 0.55);
        float core = clamp(shape * 1.6 - uv.y * 1.1, 0.0, 1.0);
        vec3 col = mix(vec3(0.95, 0.22, 0.02), vec3(1.0, 0.55, 0.08), clamp(shape * 1.3, 0.0, 1.0));
        col = mix(col, vec3(1.0, 0.9, 0.45), core * core);
        gl_FragColor = vec4(col * (1.4 + core), a);
      }`}),V=new Zn(1,1.35);V.translate(0,.675,0);const q=new ie(V,T);q.position.set(27.35,qe+.9,6),q.frustumCulled=!1,Ii.add(q);const j=new gr({map:fo(),color:16752688,blending:as,depthWrite:!1,transparent:!0}),H=new gr({map:fo(),color:3486254,transparent:!0,opacity:0,depthWrite:!1}),me=[];for(let R=0;R<26;R++){const U=new cs(j.clone());Ii.add(U),me.push({s:U,life:Math.random(),ember:!0})}for(let R=0;R<8;R++){const U=new cs(H.clone());Ii.add(U),me.push({s:U,life:Math.random(),smoke:!0})}const be=new zn(16740384,0,15,1.5);be.position.set(27.1,qe+1.5,6),be.castShadow=!0,n.add(be),t.props.fire={g:Ii,sprites:me,light:be,level:0},t.updaters.push((R,U)=>{const Z=t.props.fire;if(!Ii.visible){be.intensity=0;return}const K=Z.level;T.uniforms.t.value=U,T.uniforms.k.value=K,q.scale.set(.45+K*.85,.4+K*1.15,1),q.rotation.y=Math.atan2(r.camera.position.x-q.position.x,r.camera.position.z-q.position.z);for(const oe of me)if(oe.life+=R*(oe.smoke?.35:1.1+Math.random()*.8),oe.life>1&&(oe.life=0,oe.x=27.35+(Math.random()-.5)*.6*(.5+K),oe.z=6+(Math.random()-.5)*1.5*(.4+K*.8)),oe.smoke){oe.s.position.set(oe.x+Math.sin(U*.8+oe.life*9)*.25*oe.life,qe+1.9+oe.life*(1.6+K*1.4),oe.z);const Ee=.3+oe.life*1.1;oe.s.scale.set(Ee,Ee,1),oe.s.material.opacity=Math.max(0,.5-Math.abs(oe.life-.3)*.9)*(.25+K*.4)}else{oe.s.position.set(oe.x+Math.sin(U*4+oe.life*11)*.09,qe+1+oe.life*(.9+K*1.9),oe.z);const Ee=(.035+K*.03)*(1-oe.life*.8);oe.s.scale.set(Ee,Ee*(1.4+oe.life),1),oe.s.material.opacity=(1-oe.life)*(.5+K*.4),oe.s.material.color.setHSL(.07-oe.life*.045,1,.55-oe.life*.2)}const ae=.72+Math.sin(U*11.3)*.14+Math.sin(U*27.7)*.08+Math.random()*.12;be.intensity=(4+K*38)*ae});const Ve=2200,Be=new Float32Array(Ve*6),nt=new Ht;nt.setAttribute("position",new Wt(Be,3));const at=new sd(nt,new ch({color:6318708,transparent:!0,opacity:.16}));at.frustumCulled=!1,e.add(at);const Ge=[];for(let R=0;R<Ve;R++)Ge.push({x:0,y:-100,z:0,v:9+Math.random()*3});const St=(R,U)=>R>-.2&&R<16.2&&U>-.2&&U<12.2||R>2.8&&R<13.2&&U>-2.8&&U<0||R>15.8&&R<20.2&&U>5.8&&U<8.2;t.updaters.push(R=>{const U=r.camera.position;for(let Z=0;Z<Ve;Z++){const K=Ge[Z];K.y-=K.v*R,K.y<0&&(K.x=U.x+(Math.random()-.5)*24,K.z=U.z+(Math.random()-.5)*24,K.y=4+Math.random()*6,St(K.x,K.z)&&(K.y=-100-Math.random()));const ae=Z*6;Be[ae]=K.x,Be[ae+1]=K.y,Be[ae+2]=K.z,Be[ae+3]=K.x+.01,Be[ae+4]=K.y+.32,Be[ae+5]=K.z}nt.attributes.position.needsUpdate=!0});const gt=new Md(12110079,0);gt.position.set(-14,22,-20),gt.target.position.set(8,0,4),e.add(gt,gt.target),gt.castShadow=!0,gt.shadow.mapSize.set(1024,1024),Object.assign(gt.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:1,far:70}),gt.shadow.autoUpdate=!1,gt.shadow.needsUpdate=!0,t.props.lightning=gt,t.floorY=(R,U)=>R>16&&R<20&&U>5.9&&U<8.1?-3*Math.min(1,Math.max(0,(R-16)/4)):R>=20?qe:0,t.surface=(R,U)=>R>=16&&U>5.9&&U<8.1&&R<20?"wood":R>=20?"concrete":U<0?R>3&&R<13&&U>-2.6?"porch":"mud":R>8&&R<16&&U<6||R>6&&R<10&&U>8?"tile":"wood",t.insideAt=(R,U)=>R>=0&&R<=16&&U>=0&&U<=12||R>16&&U>5.9&&U<8.1||R>=20?1:U>-2.6&&U<0&&R>3&&R<13?.4:0,t.room=(R,U)=>R>=20?"porao":R>16?"escada":U<0?"fora":U<6?R<8?"sala":"cozinha":U<8?"hall":R<6?"casal":R<10?"banheiro":"kid";const Rt=-4,en=-17,ut=.4,Pe=Math.ceil((30-Rt)/ut),Pn=Math.ceil((14-en)/ut);let bt=new Uint8Array(Pe*Pn);t.buildGrid=()=>{bt=new Uint8Array(Pe*Pn);for(let R=0;R<Pn;R++)for(let U=0;U<Pe;U++){const Z=Rt+(U+.5)*ut,K=en+(R+.5)*ut,ae=t.floorY(Z,K),oe=.22;let Ee=!1;for(const ge of t.colliders)if(!(ge.tag==="door"||!ge.on)&&!(ge.y1<ae+.25||ge.y0>ae+1.6)&&Z+oe>ge.x0&&Z-oe<ge.x1&&K+oe>ge.z0&&K-oe<ge.z1){Ee=!0;break}bt[R*Pe+U]=Ee?1:0}};const Ln=(R,U)=>[Math.floor((R-Rt)/ut),Math.floor((U-en)/ut)],Wn=(R,U)=>R>=0&&U>=0&&R<Pe&&U<Pn&&bt[U*Pe+R]===0;t.walkable=(R,U)=>{const[Z,K]=Ln(R,U);return Wn(Z,K)},t.clearLine=(R,U,Z,K)=>{const ae=Math.hypot(Z-R,K-U),oe=Math.ceil(ae/(ut*.5));for(let Ee=0;Ee<=oe;Ee++){const ge=Ee/Math.max(1,oe);if(!t.walkable(R+(Z-R)*ge,U+(K-U)*ge))return!1}return!0},t.findPath=(R,U,Z,K)=>{let[ae,oe]=Ln(R,U);const[Ee,ge]=Ln(Z,K);if(!Wn(ae,oe)){e:for(let gn=1;gn<4;gn++)for(let Yt=-gn;Yt<=gn;Yt++)for(let vn=-gn;vn<=gn;vn++)if(Wn(ae+vn,oe+Yt)){ae+=vn,oe+=Yt;break e}}const it=Pe*Pn,st=new Float32Array(it).fill(1/0),ct=new Int32Array(it).fill(-1),Ct=new Uint8Array(it),$e=[[0,oe*Pe+ae]];st[oe*Pe+ae]=0;const At=ge*Pe+Ee;let kn=0,ke=-1,Gt=1/0;for(;$e.length&&kn++<6e3;){let gn=0;for(let Ut=1;Ut<$e.length;Ut++)$e[Ut][0]<$e[gn][0]&&(gn=Ut);const[,Yt]=$e.splice(gn,1)[0];if(Ct[Yt])continue;Ct[Yt]=1;const vn=Yt%Pe,jt=Yt/Pe|0,nn=Math.hypot(vn-Ee,jt-ge);if(nn<Gt&&(Gt=nn,ke=Yt),Yt===At){ke=Yt;break}for(let Ut=-1;Ut<=1;Ut++)for(let xn=-1;xn<=1;xn++){if(!xn&&!Ut)continue;const un=vn+xn,ei=jt+Ut;if(!Wn(un,ei)||xn&&Ut&&(!Wn(vn+xn,jt)||!Wn(vn,jt+Ut)))continue;const Xn=ei*Pe+un,ti=st[Yt]+(xn&&Ut?1.414:1);ti<st[Xn]&&(st[Xn]=ti,ct[Xn]=Yt,$e.push([ti+Math.hypot(un-Ee,ei-ge),Xn]))}}if(ke<0)return null;const tn=[];let Zt=ke;for(;Zt>=0;)tn.push(wt(Rt+(Zt%Pe+.5)*ut,0,en+((Zt/Pe|0)+.5)*ut)),Zt=ct[Zt];return tn.reverse(),tn.shift(),ke===At&&tn.push(wt(Z,0,K)),tn};const mn=new Oa;return t.los=(R,U)=>{const Z=U.clone().sub(R),K=Z.length();Z.divideScalar(K),mn.set(R,Z),mn.far=K-.15;const ae=t.doors.filter(oe=>oe.open<.3).map(oe=>oe.panel);return mn.intersectObjects([...t.occluders,...ae],!1).length===0},t.pushDoors=(R,U)=>{for(const Z of t.doors)Z.locked||Z.target>.5||Math.hypot(Z.pos.x-R.x,Z.pos.z-R.z)<1&&Math.abs(t.floorY(Z.pos.x,Z.pos.z)-R.y)<1&&(Z.target=1,Z.open=Math.max(Z.open,.3),U.doorSlam(Z.pos,.8))},t.update=(R,U)=>{for(const K of t.doors)K.open+=(K.target-K.open)*Math.min(1,R*4),K.pivot.rotation.y=-K.dir*K.open*1.75,K.col.on=K.open<.35;const Z=t.props.fridge;Z.open+=(Z.target-Z.open)*Math.min(1,R*3),Z.pivot.rotation.y=-Z.open*1.9;for(const K of t.bulbs){let ae=r.lightsOn&&!K.dead?1:0;K.flicker>0&&(K.flicker-=R,ae*=Math.random()<.5?.05:1),K.light.intensity=K.base*ae,K.mat.emissiveIntensity=ae*6,K.mat.userData.shade&&K.mat.userData.shade.material.emissive.setRGB(.5*ae,.38*ae,.22*ae)}t.updaters.forEach(K=>K(R,U))},t.bounceList=[...t.occluders,...t.bounce],t.buildGrid(),t}const cr=(r=0,e=0,t=0)=>new D(r,e,t);class ky{constructor(e){this.g=e,this.pos=cr(7,0,-9.3),this.vel=cr(),this.yaw=Math.PI,this.pitch=0,this.yawV=0,this.pitchV=0,this.height=1.6,this.radius=.3,this.health=100,this.stamina=1,this.fear=0,this.ammo=6,this.reserve=12,this.reloading=0,this.flashCharge=1,this.flashlightOn=!0,this.bob=0,this.stepPhase=0,this.lastStep=0,this.keys={},this.locked=!1,this.frozen=!1,this.shakeAmt=0,this.recoil=0,this.dead=!1,this.deathT=0,this.hurtT=10,this.damageFx=0,this.buildRig()}buildRig(){const e=this.g.camera;this.rig=new We,e.add(this.rig),this.flashlight=new gh(16773596,20,26,.5,.6,1.7),this.flashlight.map=E_(),this.flashlight.castShadow=!0,this.flashlight.shadow.mapSize.set(1024,1024),this.flashlight.shadow.camera.near=.15,this.flashlight.shadow.camera.far=26,this.flashlight.shadow.bias=-.0012,this.flashlight.shadow.normalBias=.05,this.flashlight.position.set(-.12,-.16,-.25),this.flashTarget=new Ot,this.flashTarget.position.set(0,0,-6),this.flashlight.target=this.flashTarget,this.g.scene.add(this.flashlight,this.flashTarget),this.lightDir=cr(0,0,-1),this.flashPoint=new zn(16054015,0,18,1.4),this.g.scene.add(this.flashPoint),this.muzzle=new zn(16756832,0,10,2),this.g.scene.add(this.muzzle),this.fill=new zn(10465472,.6,5,2),this.g.scene.add(this.fill),this.bounce=new zn(14206634,0,7,2),this.g.scene.add(this.bounce),this.bounceRay=new Oa,this.bounceRay.far=16,this.bouncePos=cr();const t=this.gun=new We,n=new Re({color:2303274,metalness:.9,roughness:.28}),i=new Re({color:921361,metalness:.8,roughness:.4}),s=new Re({map:Mn(70,[34,34,36],0),roughness:.9}),o=new Re({map:Mn(72,[52,58,66],0),roughness:.95}),a=new Re({map:Rs(71),color:6963248,roughness:.45}),l=(p,_,y,x,A,w=0,E=0,L=0,M)=>{const S=new ie(p,_);return S.position.set(y,x,A),S.rotation.set(w,E,L),M&&S.scale.set(...M),t.add(S),S},c=(p,_)=>new Ls(p,_,4,10);l(new Vt(.024,.042,.08),n,0,.018,-.028),l(new Vt(.017,.01,.07),n,0,.043,-.05),this.cyl=l(new Nt(.0195,.0195,.042,18),n,0,.022,-.048,Math.PI/2);for(let p=0;p<6;p++){const _=p/6*Math.PI*2;l(new Vt(.004,.004,.03),i,Math.cos(_)*.0195,.022+Math.sin(_)*.0195,-.048)}l(new Nt(.0082,.0085,.11,14),n,0,.031,-.125,Math.PI/2),l(new Vt(.011,.013,.1),n,0,.018,-.12),l(new Vt(.003,.009,.006),n,0,.043,-.176),l(new Vt(.008,.02,.012),i,0,.046,.016,-.5),l(new us(.015,.0026,5,12,Math.PI),n,0,-.004,-.018,0,Math.PI/2,Math.PI),l(new Vt(.004,.016,.004),i,0,-.006,-.018,.3),l(c(.015,.06),a,0,-.038,.024,-.32,0,0,[.85,1,1.3]),l(c(.024,.045),s,.004,-.04,.034,-.32,0,0,[1.25,1,1.15]);for(let p=0;p<3;p++)l(c(.0098,.026),s,-.002,-.017-p*.017,.002,0,0,Math.PI/2);l(c(.009,.038),s,-.016,.004,-.03,Math.PI/2),l(c(.0095,.034),s,-.017,.028,-.005,Math.PI/2+.2),l(c(.033,.16),o,.02,-.085,.12,1.05,0,-.15);const h=this.flGroup=new We;h.position.set(-.03,-.062,-.01),t.add(h);const u=new ie(new Nt(.017,.014,.12,14),new Re({color:1250067,metalness:.6,roughness:.35}));u.rotation.x=Math.PI/2,h.add(u);const f=new ie(new Nt(.02,.018,.02,14),u.material);f.rotation.x=Math.PI/2,f.position.z=-.065,h.add(f);const d=new ie(new rs(.016,14),new Re({color:3355443,emissive:16773328,emissiveIntensity:2}));d.position.z=-.0755,d.rotation.y=Math.PI,h.add(d),this.lens=d;const m=new ie(c(.025,.04),s);m.rotation.z=Math.PI/2,m.position.set(.004,-.006,.01),m.scale.set(1,1.2,1.3),h.add(m);const v=new ie(c(.033,.16),o);v.position.set(-.05,-.04,.1),v.rotation.set(1.1,0,.35),h.add(v),t.traverse(p=>{p.isMesh&&(p.castShadow=!1,p.receiveShadow=!1)}),t.position.set(.085,-.145,-.36),this.gunBase=t.position.clone(),this.gunLow=cr(.11,-.27,-.32),this.aimK=0,this.sinceShot=99,this.g.gunHolder.add(t),this.gunLight=new zn(16773340,0,2,1.5),this.gunLight.position.set(.05,.15,-.1),this.g.gunHolder.add(this.gunLight),this.gunAmb=new yd(8425632,2103312,.15),this.g.gunScene.add(this.gunAmb);const g=new gr({map:fo(),color:16760944,blending:as,depthWrite:!1,transparent:!0,opacity:0});this.muzzleSprite=new cs(g),this.muzzleSprite.scale.set(.12,.12,1),this.muzzleSprite.position.set(0,.032,-.23),t.add(this.muzzleSprite)}setInput(e){this.keys=e}syncCam(){const e=this.g.camera;e.position.set(this.pos.x,this.pos.y+this.height-.04,this.pos.z),e.rotation.order="YXZ",e.rotation.y=this.yaw,e.rotation.x=this.pitch,e.rotation.z=0,e.updateMatrixWorld(),e.getWorldDirection(e.userData.fwd),e.userData.up.set(0,1,0).applyQuaternion(e.quaternion),this.g.gunHolder.position.copy(e.position),this.g.gunHolder.quaternion.copy(e.quaternion)}look(e,t){if(this.frozen||this.dead)return;const n=.0022*this.g.sens;this.yawV-=e*n,this.pitchV-=t*n}damage(e,t){if(this.dead||this.g.godMode)return;this.health-=e,this.hurtT=0,this.damageFx=1,this.g.audio.hit(),this.g.shake(.6);const n=this.pos.x-t.x,i=this.pos.z-t.z,s=Math.hypot(n,i)||1;this.vel.x+=n/s*4,this.vel.z+=i/s*4,this.yawV+=(Math.random()-.5)*.25,this.pitchV+=.08,this.health<=0&&this.die(t)}die(e){this.dead=!0,this.deathT=0,this.health=0,this.deathFrom=e.clone(),this.g.onDeath()}shoot(){if(this.dead||this.frozen||this.reloading>0||this.g.noteOpen||this.fireCD>0)return;if(this.ammo<=0){this.g.audio.dryFire(),this.fireCD=.3;return}this.ammo--,this.fireCD=.42,this.sinceShot=0,this.aimK=Math.max(this.aimK,.85);const e=this.g.camera;this.g.audio.gunshot(e.position),this.recoil=1,this.pitchV+=.045,this.yawV+=(Math.random()-.5)*.02,this.muzzle.intensity=60,this.muzzleSprite.material.opacity=1,this.muzzleSprite.material.rotation=Math.random()*6,this.g.shake(.25),this.g.alertAll();const n=new Dr(e.position.clone(),e.userData.fwd.clone());n.direction.x+=(Math.random()-.5)*.012,n.direction.y+=(Math.random()-.5)*.012,n.direction.normalize();let i=null,s=null;for(const a of this.g.creatures){const l=a.hitBy(n,.05);l&&(!i||l.distance<i.distance)&&(i=l,s=a)}const o=new Oa(n.origin,n.direction,0,60).intersectObjects(this.g.level.occluders,!1)[0];i&&(!o||i.distance<o.distance+.3)?(s.hurt(i),this.g.audio.fleshHit(i.point),this.g.hitMarker&&this.g.hitMarker()):o&&this.g.bulletHole(o)}reload(){this.reloading>0||this.ammo>=6||this.reserve<=0||this.dead||(this.reloading=2.4,this.reloadStage=0,this.g.audio.reloadClick(0))}cameraFlash(){this.dead||this.frozen||this.flashCharge<1||this.g.noteOpen||(this.flashCharge=0,this.g.flashT=.18,this.g.audio.cameraFlash(),this.g.audio.flashCharge(3.2),this.g.onFlash())}toggleFlashlight(){this.flashlightOn=!this.flashlightOn,this.g.audio.flashlightClick()}collide(e,t){const n=this.g.level,i=this.radius,s=n.floorY(e,t);let o=e,a=t;for(let l=0;l<2;l++)for(const c of n.colliders)if(c.on&&!(c.y1<s+.3||c.y0>s+1.75)&&o+i>c.x0&&o-i<c.x1&&a+i>c.z0&&a-i<c.z1){const h=Math.min(o+i-c.x0,c.x1-(o-i)),u=Math.min(a+i-c.z0,c.z1-(a-i));h<u?o+=o<(c.x0+c.x1)/2?-h:h:a+=a<(c.z0+c.z1)/2?-u:u}return[o,a]}update(e){const t=this.g,n=t.camera,i=t.audio,s=t.level;if(this.fireCD=(this.fireCD||0)-e,this.hurtT+=e,this.dead){this.deathUpdate(e);return}const o=Math.min(1,e*22),a=this.yawV*o,l=this.pitchV*o;this.yaw+=a,this.pitch=ai.clamp(this.pitch+l,-1.35,1.35),this.yawV-=a,this.pitchV-=l;const c=this.keys;let h=0,u=0;!this.frozen&&!t.noteOpen&&((c.KeyW||c.ArrowUp)&&(u+=1),(c.KeyS||c.ArrowDown)&&(u-=1),(c.KeyA||c.ArrowLeft)&&(h-=1),(c.KeyD||c.ArrowRight)&&(h+=1));const f=t.touchState;f&&!this.frozen&&!t.noteOpen&&(h+=f.x,u-=f.y);const d=Math.hypot(h,u)>.15,m=d&&(c.ShiftLeft||c.ShiftRight||f&&f.run)&&this.stamina>.05&&u>0,v=m?3.5:1.55,g=Math.sin(this.yaw),p=Math.cos(this.yaw);let _=-g*u+p*h,y=-p*u-g*h;const x=Math.max(1,Math.hypot(_,y));_/=x,y/=x;const A=d?10:8;this.vel.x+=((d?_*v:0)-this.vel.x)*Math.min(1,e*A),this.vel.z+=((d?y*v:0)-this.vel.z)*Math.min(1,e*A),this.stamina=ai.clamp(this.stamina+(m?-e/5.5:e/7),0,1);const[w,E]=this.collide(this.pos.x+this.vel.x*e,this.pos.z+this.vel.z*e),L=Math.hypot(w-this.pos.x,E-this.pos.z)/Math.max(e,1e-4);this.pos.x=w,this.pos.z=E;const M=s.floorY(this.pos.x,this.pos.z);this.pos.y+=(M-this.pos.y)*Math.min(1,e*12);const S=Math.min(L,4);if(this.stepPhase+=e*S*1.85,S>.3){const ne=Math.floor(this.stepPhase/Math.PI);ne!==this.lastStep&&(this.lastStep=ne,i.footstep(s.surface(this.pos.x,this.pos.z),this.pos.clone().setY(this.pos.y+.05),m?.9:.55,m))}const C=Math.min(1,S/3.5),F=Math.abs(Math.sin(this.stepPhase))*.045*C+Math.sin(t.time*1.3)*.004,B=Math.cos(this.stepPhase)*.025*C,O=Math.sin(t.time*(1.4+this.fear*2))*.003*(1+this.fear*2);this.shakeAmt=Math.max(0,this.shakeAmt-e*1.6);const z=this.shakeAmt*this.shakeAmt,G=(Math.random()-.5)*z*.08,Y=(Math.random()-.5)*z*.08;n.position.set(this.pos.x+p*B,this.pos.y+this.height-.04+F+O,this.pos.z-g*B),n.rotation.order="YXZ",n.rotation.y=this.yaw+G,n.rotation.x=this.pitch+Y+this.recoil*.02,n.rotation.z=-this.yawV*.6-h*.008*C+Math.cos(this.stepPhase)*.004*C,n.updateMatrixWorld(),n.getWorldDirection(n.userData.fwd),n.userData.up.set(0,1,0).applyQuaternion(n.quaternion),this.recoil=Math.max(0,this.recoil-e*5);const W=this.gun.position,Q=this.gunBase,ce=this.reloading>0?Math.sin(Math.min(1,(2.4-this.reloading)/2.4)*Math.PI):0,ve=t.noteOpen||this.frozen?1:0;this.sinceShot+=e;const Oe=(t.combat||this.sinceShot<2.5)&&!ve?1:0;this.aimK+=(Oe-this.aimK)*Math.min(1,e*(Oe?7:2.5));const Je=this.aimK,J=this.gunLow,fe=J.x+(Q.x-J.x)*Je,Ce=J.y+(Q.y-J.y)*Je,de=J.z+(Q.z-J.z)*Je;if(W.x+=(fe+this.yawV*.3+B*.4-W.x)*Math.min(1,e*12),W.y+=(Ce-this.pitchV*.3-F*.3-ce*.1-ve*.25-this.recoil*.01-W.y)*Math.min(1,e*12),W.z=de+this.recoil*.05,this.gun.rotation.x=this.recoil*.35+ce*.9-(1-Je)*.55,this.gun.rotation.y=(1-Je)*.25,this.gun.rotation.z=ce*.6,this.cyl.position.x=ce*.03,this.reloading>0&&(this.reloading-=e,this.reloadStage===0&&this.reloading<1.6&&(this.reloadStage=1,i.reloadClick(1)),this.reloadStage===1&&this.reloading<.5&&(this.reloadStage=2,i.reloadClick(2)),this.reloading<=0)){const ne=Math.min(6-this.ammo,this.reserve);this.ammo+=ne,this.reserve-=ne}this.muzzle.intensity*=Math.pow(5e-4,e),this.muzzle.position.copy(n.position).addScaledVector(n.userData.fwd,.6),this.muzzleSprite.material.opacity*=Math.pow(1e-4,e);const De=n.userData.fwd.clone();this.lightDir.lerp(De,Math.min(1,e*14)).normalize();const He=new D(-.1,-.17,-.2).applyQuaternion(n.quaternion).add(n.position);this.flashlight.position.copy(He),this.flashTarget.position.copy(He).addScaledVector(this.lightDir,6);let Fe=this.flashlightOn?1:0;t.flicker>0&&(Fe*=Math.random()<.55?.03:.6+Math.random()*.4),this.flashlight.intensity=30*Fe,this.bounceRay.set(He,this.lightDir);const et=this.bounceRay.intersectObjects(t.level.bounceList,!1)[0];if(et&&Fe>0){const ne=et.face?et.face.normal.clone().transformDirection(et.object.matrixWorld):cr(0,1,0);ne.dot(this.lightDir)>0&&ne.negate(),this.bouncePos.copy(et.point).addScaledVector(ne,.35),this.bounce.position.lerp(this.bouncePos,Math.min(1,e*20));const ue=Math.max(1,et.distance);this.bounce.intensity=Fe*Math.min(4,20/(ue*ue))}else this.bounce.intensity=0;this.lens.material.emissiveIntensity=2*Fe,this.fill.position.copy(n.position),this.g.gunHolder.position.copy(n.position),this.g.gunHolder.quaternion.copy(n.quaternion),this.gunLight.intensity=.25*Fe+(t.lightsOn?.5:0)+this.muzzle.intensity*.05+(t.flashT>0?6:0),this.gunAmb.intensity=t.lightsOn?.5:.12,this.fill.intensity=t.lightsOn?.1:.6,this.flashCharge=Math.min(1,this.flashCharge+e/3.2),this.flashPoint.position.copy(n.position).addScaledVector(n.userData.fwd,.3),this.flashPoint.intensity=t.flashT>0?900*(t.flashT/.18):0,this.hurtT>4&&(this.health=Math.min(100,this.health+e*10)),this.damageFx=Math.max(this.damageFx-e*1.2,(100-this.health)/100*.6)}deathUpdate(e){const t=this.g.camera;this.deathT+=e;const n=Math.min(1,this.deathT/.7);t.position.y+=(this.pos.y+.12-t.position.y)*Math.min(1,e*6),t.rotation.z+=(1.35-t.rotation.z)*Math.min(1,e*5);const i=this.deathFrom,s=Math.atan2(-(i.x-this.pos.x),-(i.z-this.pos.z));t.rotation.y+=(s-t.rotation.y)*e*2*n,t.rotation.x+=(.15-t.rotation.x)*e*2,t.updateMatrixWorld(),t.getWorldDirection(t.userData.fwd),this.gun.visible=!1,this.flashlight.intensity=Math.random()<.2?0:30}respawn(e,t){this.pos.copy(e),this.yaw=t,this.pitch=0,this.vel.set(0,0,0),this.health=100,this.dead=!1,this.gun.visible=!0,this.damageFx=0,this.reloading=0,this.stamina=1,this.flashlightOn=!0,this.flashCharge=1}}const Ke=(r=0,e=0,t=0)=>new D(r,e,t),Ts=-3,By=`
<p class="date">12 de agosto de 1961</p>
<p>O doutor de Curvelo disse que o menino não passa desta semana. O Antônio tem seis anos e já não abre os olhos. Fui na encruzilhada do jeito que a minha mãe ensinou.</p>
<p class="date">13 de agosto de 1961</p>
<p>Ele veio. É alto e não tem rosto. Disse que cura o menino se eu der outro em troca. Eu prometi o primeiro neto, que nem existia ainda. Deus me perdoe, eu escolhi.</p>
<p class="date">1978</p>
<p>O Tiago nasceu e não chorou. Nunca chorou. O moço disse que vem buscar quando ele fizer vinte e cinco anos. Disse que dívida não morre. Passa.</p>
<p class="date">1998 (letra tremida)</p>
<p>Estou indo e ele ainda vem toda noite. Diz que paguei pouco. Que agora quer os juros, a família inteira. Se alguém achar isto: queima o altar. O fogo fecha a porta. Mas ele vai querer quem acender.</p>
<p class="blood">QUEM ACENDE, PAGA.</p>`;class zy{constructor(e){this.G=e,this.flags={},this.timers=[],this.gen=0,this.cur=null,this.t=0,this.hasFuse=!1,this.hasKey=!1;const t=this.steps={},n=e,i=()=>n.level,s=()=>n.player,o=()=>n.audio;t.arrive={cp:{pos:Ke(7.2,0,-9),yaw:Math.PI},enter:a=>{e.lightsOn=!1,i().props.car.sirenOn=!0,i().props.doors.front.target=.12,i().props.doors.front.locked=!1,e.mother.show(!1),e.mother.setState("hidden"),this.placeFather(),e.tensionBase=.05,this.after(1.5,()=>e.objective("Verificar a residência dos Vasconcelos")),this.after(3,()=>e.say("SD SILVA","Duarte, a central confirmou. Ninguém atende nesse endereço desde sábado.",4.2,"radio")),this.after(8,()=>e.say("SD SILVA","O vizinho disse que ouviu gritaria... e uma menina cantando a noite inteira.",4.5,"radio")),this.after(13.5,()=>e.say("SD SILVA","Vou ficar aqui na viatura esperando o reforço. Qualquer coisa, chama.",4,"radio")),this.after(26,()=>{this.cur==="arrive"&&(o().thunder(.7),e.lightning())})},update:a=>{const l=s().pos;!this.flags.calledOut&&l.z>-3&&(this.flags.calledOut=!0,e.say("VOCÊ","Polícia Militar! Dona Lúcia? Seu Antônio?",2.8,"self"),this.after(3.2,()=>o().creak(Ke(4,2.6,3),1.2,.6,.7))),!this.flags.passer&&l.z<-5.4&&l.z>-8.5&&(this.flags.passer=!0,this.after(2+Math.random()*2,()=>{if(this.cur!=="arrive")return;const c=this.passFig||(this.passFig=_i(e.cmats,{h:1.8,thin:.9,skin:e.cmats.ghost,top:e.cmats.ghost,bottom:e.cmats.ghost}));e.scene.add(c.root),c.root.visible=!0,c.root.position.set(4.4,0,1.9),c.root.rotation.y=-Math.PI/2,c.spine.rotation.x=.1,c.legL.rotation.x=0,c.legR.rotation.x=0,o().footstep("wood",Ke(4.4,.05,1.9),.5);let h=0;const u=()=>{h+=.016,c.root.position.x=4.4+h*1.9,c.root.rotation.z=Math.sin(h*22)*.03,h<1.1?requestAnimationFrame(u):(c.root.visible=!1,o().sting&&o().sting(!1),o().doorClose&&o().play("doorClose",Ke(7,1.4,1.9),{vol:.7,verb:.8}))};u(),this.after(1.2,()=>e.say("VOCÊ","...Tem alguém andando aí dentro.",2.4,"self"))})),i().room(l.x,l.z)==="sala"&&this.go("sala")}},t.sala={enter:()=>{e.objective("Procurar os moradores"),e.tensionBase=.12,this.after(2.5,()=>e.say("VOCÊ","Meu Deus... que cheiro é esse.",2.6,"self")),this.after(25,()=>{this.flags.needPower||(e.objective("Encontrar o quadro de luz"),this.flags.needPower=!0)}),this.after(9,()=>{if(this.cur!=="sala")return;const a=i().props.tv;a.on=!1,a.tvLight.intensity=0,o().noiseBurst(o().dest(Ke(3.1,.8,2.2)),{dur:.25,f:2600,q:3,peak:.9}),o().tone(o().dest(Ke(3.1,.8,2.2)),{f:90,fEnd:40,dur:.3,peak:.8}),e.flickerT=.4,this.after(2.4,()=>{this.cur==="sala"&&(a.on=!0,o().whisper(Ke(3.1,1.6,2.2),1.6,.8),o().sting(!1))})})},update:()=>{}},t.phone={cp:{pos:Ke(12.5,0,1.6),yaw:Math.PI/2},enter:a=>{e.lightsOn=!1,this.hasFuse=!1,e.mother.show(!1),e.mother.hp=3,e.mother.setState("hidden"),this.placeFather(),e.tensionBase=.2,e.objective("Atender o telefone (sala)"),this.ring&&this.ring.stop(),this.ring=o().loop("phone",i().props.phone.pos,1.3),this.flags.phoneAnswered=!1},update:()=>{const a=i().props.phone;if(this.ring&&a.handset){const l=e.time%3.6<1.1;a.handset.position.y=.145+(l?Math.random()*.004:0),a.handset.rotation.z=l?(Math.random()-.5)*.04:0}}},t.fuse={cp:{pos:Ke(1.6,0,3.4),yaw:-Math.PI/2},enter:a=>{e.lightsOn=!1,this.hasFuse=!1,e.mother.show(!1),e.mother.setState("hidden"),e.mother.hp=3,this.placeFather(),i().props.fuseItem.visible=!0,i().props.fuseI.enabled=!0,e.tensionBase=.32,this.flags.ghostReady=!0,e.camera.position,o().duck(.25,1.5),this.after(a?.5:2.2,()=>{const l=s().pos;o().creak(Ke(l.x,2.75,l.z),1.6,.9,.6),e.ceilingDust(l.x+.3,l.z-.2,60)}),this.after(a?2:4.2,()=>{const l=s().pos;e.bloodDrip(l.x+.45,l.z+.25)}),this.after(7,()=>{o().duck(1,4),e.say("VOCÊ","Tem alguém no forro...",2.4,"self")}),this.after(10,()=>e.say("VOCÊ","O fusível. O Seu Antônio deve ter guardado no quarto.",3.4,"self")),this.after(10.5,()=>e.objective("Procurar um fusível no quarto do casal")),this.after(14,()=>{for(let l=0;l<10;l++)setTimeout(()=>o().skitter(Ke(4-l*.2,2.85,3+l*.45),.3,.55),l*220);e.ceilingDust(3.5,4.5,30)})},update:a=>{const l=s().pos,c=i().room(l.x,l.z),h=e.camera.userData.fwd;if(c==="hall"&&!this.flags.mimic){this.flags.mimic=!0;let m=0;const v=()=>{if(this.cur!=="fuse"||m++>5)return;const g=s().pos;if(Math.hypot(s().vel.x,s().vel.z)>.4){const _=e.camera.userData.fwd;o().footstep("wood",Ke(g.x-_.x*2.6,.05,g.z-_.z*2.6),.6)}setTimeout(v,560)};setTimeout(v,900)}if(c==="hall"&&!this.flags.glimpse&&this.flags.mimic&&l.x>7&&h.x<-.85&&Math.abs(h.y)<.4&&(this.flags.glimpse=!0,this.glimpse={t:0},e.mother.toCeiling(1,6.5,"ceiling"),e.mother.yaw=0,o().skitter(Ke(1.2,2.6,7),.8,.9)),this.glimpse){this.glimpse.t+=a;const m=this.glimpse.t;e.mother.pos.set(1+m*.5,2.68,6.4+m*3.2),e.mother.yaw=.2,e.mother.pose(e.time,1),e.mother.sync(),m>.6&&(e.mother.show(!1),e.mother.setState("hidden"),this.glimpse=null,this.after(1.2,()=>e.say("VOCÊ","Que porra foi essa...",2,"self")))}const u=e.father,f=u.P,d=u.pos.clone().setY(1.7);if(u.active&&u.state==="idle"&&!this.flags.fatherTurned){if(this.knockT=(this.knockT??1)-a,this.knockT<=0){this.knockT=1.9+Math.random()*.3,this.knockAnim=0;const m=o().dest(Ke(5.75,1.75,11.75),{verb:.7,gain:1.1});o().tone(m,{f:95,fEnd:55,dur:.18,peak:1}),o().noiseBurst(m,{dur:.06,type:"lowpass",f:900,peak:.7,buf:o().brown})}if(this.knockAnim!==void 0){this.knockAnim+=a;const m=this.knockAnim;f.spine.rotation.x=.12+(m<.12?m/.12:Math.max(0,1-(m-.12)/.6))*.22,f.neck.rotation.x=.35+(m<.12?m/.12:Math.max(0,1-(m-.12)/.6))*.35}}if(!this.flags.sawFather&&c==="casal"&&u.isSeen()&&(this.flags.sawFather=!0,e.tensionBase=.45,this.after(.6,()=>e.say("VOCÊ","Seu Antônio? ...O senhor tá ferido?",3,"self"))),this.flags.sawFather&&!this.flags.fatherTurned&&Math.hypot(l.x-u.pos.x,l.z-u.pos.z)<3.1&&(this.flags.fatherTurned=!0,this.headTurn=0,f.spine.rotation.x=.12,f.neck.rotation.x=.35,this.after(1.4,()=>{o().boneCrack(d,3),o().play("groanM",d,{vol:1.2,verb:.5})})),this.headTurn!==void 0&&this.headTurn<1){(this.headTurn>0||this.stepT>0)&&(this.headTurn=Math.min(1,this.headTurn+a/3.2));const m=Math.max(0,(this.headTurn-.35)/.65);f.head.rotation.y=Math.PI*(m<1?m*m*(3-2*m):1)*.98,m>.45&&!this.flags.turnCrack&&(this.flags.turnCrack=!0,o().boneCrack(d,2)),this.headTurn>=1&&o().whisper(d,2.5,.8)}if(this.hasFuse&&!this.flags.scared){this.fuseT=(this.fuseT||0)+a;const m=Ke(4.35,1.2,11.65),v=e.camera.position,g=m.clone().sub(v).normalize();this.fuseT>.9&&h.dot(g)<-.1&&(this.flags.scared=!0,e.father.show(!1),e.father.setState("idle"),this.faceScare(()=>this.go("fight1")))}}},t.fight1={cp:{pos:Ke(3,0,9.3),yaw:0},enter:a=>{if(e.lightsOn=!1,this.hasFuse=!0,i().props.fuseItem.visible=!1,i().props.fuseI.enabled=!1,e.father.show(!1),e.father.setState("idle"),e.objective("SOBREVIVA. Leve o fusível até o quadro de luz",!0),e.tensionBase=.55,e.mother.fleeTo=Ke(15.3,0,7),a)e.mother.hunt(14.5,7);else{const l=s().pos;e.mother.hunt(l.x,l.z),e.mother.retreatTo=Ke(13,0,7),e.mother.setState("ceilRetreat"),e.mother.atkCD=3}e.mother.onFlee=()=>{e.tensionBase=.25,this.after(1.5,()=>e.say("SD SILVA","Duarte! Ouvi disparos! Duarte, responde!",3.2,"radio")),this.after(5,()=>e.say("VOCÊ","Uma mulher... andando no teto, Silva. No teto.",3.6,"self")),this.after(9,()=>e.say("SD SILVA","Sai daí. Eu tô chamando o reforço de novo.",3,"radio")),this.after(10,()=>{this.cur==="fight1"&&e.objective("Recolocar o fusível no quadro de luz (cozinha)")})}},update:()=>{}},t.power={cp:{pos:Ke(13,0,1.4),yaw:Math.PI},enter:a=>{e.lightsOn=!0,this.hasFuse=!1,i().props.fuse.led.material.emissiveIntensity=3,e.father.show(!1),e.father.setState("idle"),e.mother.show(!1),e.mother.setState("hidden"),i().props.doors.front.locked=!1,i().props.doors.front.target=.12,e.tensionBase=.1,a||o().powerOn(Ke(13.5,1.5,.2)),e.objective("Sair da casa"),this.after(2.5,()=>e.say("SD SILVA","Duarte, a ponte do Ribeirão caiu. O reforço só chega de manhã.",3.8,"radio")),this.after(6.8,()=>e.say("SD SILVA","Sai dessa casa. Agora.",2.2,"radio")),this.flags.doorSlammed=!1},update:a=>{const l=s().pos;if(this.flags.doorSlammed&&(this.popT=(this.popT??10)-a,this.popT<=0)){this.popT=7+Math.random()*8;const c=i().bulbs.filter(h=>!h.dead);if(c.length>2){const h=c[Math.floor(Math.random()*c.length)];h.dead=!0,e.flickerBulbs(.7),o().noiseBurst(o().dest(h.pos),{dur:.12,f:3400,q:4,peak:.7}),o().tone(o().dest(h.pos),{f:300,fEnd:90,dur:.15,peak:.4})}}if(!this.flags.doorSlammed&&l.z<2.2&&l.z>0&&l.x>4.3&&l.x<7.6){this.flags.doorSlammed=!0;const c=i().props.doors.front;c.slam(),c.locked=!0,c.lockLabel="Não abre",c.onLocked=()=>e.say("VOCÊ","Tem alguma coisa segurando do outro lado.",2.6,"self"),o().sting(),e.flickerBulbs(1.5),this.after(1.8,()=>e.say("VOCÊ","Não... não, não, não.",2.2,"self")),this.after(5,()=>o().knock(Ke(5.9,1.3,-.5),3)),this.after(7.5,()=>e.say("SD SILVA","Duarte... eu tô vendo você pela janela da cozinha. Por que você tá parada aí, olhando pra mim?",5.5,"radio")),this.after(13.5,()=>{e.objective("Encontrar outra saída"),i().props.underDoor.visible=!0,this.drip=o().loop("drip",Ke(8,.5,10.5),1),this.hum=o().loop("hum",Ke(15,1,10.8),.9),this.showClara(!0)}),this.after(14,()=>{e.tensionBase=.3})}if(this.flags.doorSlammed&&!this.flags.tub&&Math.hypot(l.x-7.05,l.z-11.2)<1.7&&(this.flags.tub=!0,this.tubScare()),this.flags.doorSlammed&&!this.flags.mirror&&i().room(l.x,l.z)==="banheiro"&&l.x>8.6&&e.camera.userData.fwd.x>.75&&(this.flags.mirror=!0,this.mirrorScare()),this.clara&&this.clara.root.visible&&!this.flags.claraTalk&&Math.hypot(l.x-15.2,l.z-10.6)<2.6&&i().room(l.x,l.z)==="kid"){this.flags.claraTalk=!0,this.hum&&(this.hum.stop(),this.hum=null);const c=Ke(15.1,.9,10.8);e.tensionBase=.4,this.after(1.2,()=>e.say("CLARA","Você demorou, tia.",2.2,"girl",c)),this.after(3.8,()=>e.say("CLARA","A vó prometeu o tio Tiago pro moço. Pra curar o papai, quando ele era pequeno.",5,"girl",c)),this.after(9.2,()=>e.say("CLARA","Mas o moço cobra juros. Agora ele quer todo mundo.",3.6,"girl",c)),this.after(13.2,()=>e.say("CLARA","A chave do porão tá no chão. Queima as coisas da vó.",3.6,"girl",c)),this.after(14.5,()=>{i().props.key.visible=!0,i().props.keyI.enabled=!0,e.objective("Pegar a chave do porão"),o().pickup()})}}},t.blackout={cp:{pos:Ke(13,0,7.2),yaw:0},enter:a=>{this.hasKey=!0,i().props.key.visible=!1,i().props.keyI.enabled=!1,e.lightsOn=!1,i().props.ceilingHands.visible=!0,i().props.underDoor.visible=!0,i().props.doors.front.locked=!0;const l=i().props.doors.dBase;if(l.lockLabel="Destrancar com a chave",l.onLocked=()=>{l.locked=!1,l.set(1),o().pickup(),e.objective("Descer ao porão")},e.objective("Abrir o porão (fim do corredor)"),e.tensionBase=.45,a)this.showClara(!1);else{o().powerOff(),e.flickerBulbs(.4);const c=this.clara;c&&(c.yank=.001,o().scream(Ke(15.2,1.2,10.8),{pitch:1.9,dur:1.6,vol:1})),o().sting()}e.mother.hp=3,e.mother.fleeTo=Ke(1,0,7),e.mother.onFlee=()=>this.after(14,()=>{this.cur==="blackout"&&this.motherReturn()}),this.after(a?3:4.5,()=>{this.cur==="blackout"&&this.motherReturn()}),e.father.show(!0),e.father.headTurned=!0,e.father.idlePose(),e.father.place(1.2,0,7,Math.PI/2),e.father.setState("hunt")},update:()=>{s().pos.x>16.4&&this.go("basement")}},t.basement={cp:{pos:Ke(20.6,Ts,7),yaw:-Math.PI/2},enter:a=>{e.mother.show(!1),e.mother.setState("hidden"),e.father.show(!1),e.father.setState("idle"),e.lightsOn=!1;const l=i().props.doors.dBase;l.locked=!1,a?(l.target=0,l.open=0,l.locked=!0,l.lockLabel="Emperrada",l.onLocked=null):this.after(.6,()=>{l.slam(),l.locked=!0,l.lockLabel="Emperrada",l.onLocked=null,o().sting(!1)}),e.objective("Investigar o porão"),e.tensionBase=.35,i().props.diaryI.enabled=!0,i().props.burnI.enabled=!1,this.flags.diaryRead=!1,this.basementLoops()},update:()=>{const a=s().pos;!i().props.altar.lit&&a.x>21.2&&(i().props.altar.lit=!0,o().noiseBurst(o().dest(Ke(27,Ts+1,6)),{dur:.6,type:"lowpass",f:800,peak:.6,buf:o().pink}),this.after(.8,()=>e.say("VOCÊ","Quem acendeu essas velas...?",2.6,"self")),this.after(4,()=>{this.flags.diaryRead||e.objective("Examinar o altar")}))}},t.ritual={enter:()=>{const a=i().props.fire;a.g.visible=!0,a.level=0,i().props.altar.lit=!1,this.fire=o().loop("fire",Ke(27.3,Ts+1,6),1.3),e.objective("SOBREVIVA ATÉ O ALTAR QUEIMAR",!0),e.tensionBase=.7,o().riser(2.5),this.after(2.6,()=>{e.credor.emerge(21.6,11.2),e.shake(.8),o().sting(),e.flickerT=3}),i().props.wrapped.forEach(l=>l.userData.spin=0)},update:a=>{const l=i().props.fire;l.level=Math.min(1,l.level+a/38),e.credor.speed=1.4+l.level*1.1,i().props.wrapped.forEach((c,h)=>{c.userData.spin+=a*(.4+l.level*2)*(h%2?1:-1)}),l.level>=1&&e.credor.state!=="die"&&(e.credor.die(),e.shake(1.2),o().sting(),this.after(4.2,()=>this.go("escape")))}},t.escape={cp:{pos:Ke(24.5,Ts,6.5),yaw:-Math.PI/2+Math.PI},enter:a=>{e.credor.show(!1);const l=i().props.fire;l.g.visible=!0,l.level=.6,a&&(this.fire=o().loop("fire",Ke(27.3,Ts+1,6),1.1));const c=i().props.doors.dBase;c.locked=!1,c.set(1,!1),o().doorSlam(c.pos);const h=i().props.doors.front;h.locked=!1,h.set(1,!1),e.objective("SAIA DA CASA",!0),e.tensionBase=.55,this.quakeT=2,e.mother.hp=99,e.mother.show(!0),e.mother.place(2,0,7,Math.PI/2),e.mother.setState("chase"),e.mother.onFlee=null,e.father.show(!0),e.father.place(10.5,0,3,0),e.father.setState("hunt"),this.after(1,()=>e.say("VOCÊ","Silva! Silva, liga a viatura!",2.4,"self"))},update:a=>{if(this.quakeT-=a,this.quakeT<=0){this.quakeT=3+Math.random()*3,e.shake(.5),o().growl(s().pos.clone().setY(-1),2.5,.8),e.flickerT=.8;const c=i().doors[Math.floor(Math.random()*i().doors.length)];!c.locked&&c!==i().props.doors.front&&c!==i().props.doors.dBase&&(c.target>.5?c.slam():c.set(1))}e.mother.hp<96&&(e.mother.hp=99,e.mother.stun=1.6),s().pos.z<-4.5&&this.go("ending")}},t.ending={enter:()=>{e.objective(""),e.mother.show(!1),e.father.show(!1),e.mother.setState("hidden"),e.father.setState("idle"),s().frozen=!0,e.tensionBase=.2,i().props.car.sirenOn=!1,i().props.doors.front.slam(),o().radioBeep(),this.after(1.5,()=>e.say("SD SILVA","Duarte? Duarte, se você tiver ouvindo, responde.",3.6,"radio")),this.after(5.5,()=>e.say("SD SILVA","Você entrou nessa casa na sexta-feira. Hoje é segunda.",4,"radio")),this.after(10,()=>e.say("SD SILVA","A gente achou a viatura. Não tem ninguém aqui fora, Duarte.",4,"radio")),this.after(10.5,()=>{this.turnBack=!0}),this.after(13.5,()=>{e.endingFigures(),e.lightning(),o().thunder(.4),o().sting()}),this.after(17.5,()=>{e.lightning(),o().thunder(.6)}),this.after(19.5,()=>e.finish())},update:a=>{if(this.turnBack){const l=s();let c=Math.PI-l.yaw;for(;c>Math.PI;)c-=Math.PI*2;for(;c<-Math.PI;)c+=Math.PI*2;l.yaw+=c*a*1.2,l.pitch+=(.05-l.pitch)*a}}}}after(e,t){this.timers.push({t:e,fn:t,gen:this.gen})}go(e,t=!1){this.cur=e,this.stepT=0;const n=this.steps[e];n.cp&&(this.checkpoint=e),n.enter(t)}restore(){this.gen++,this.timers=[],this.flags.waitLook=!1;const e=this.G;e.audio.stopAllLoops(),e.startWorldLoops(),this.ring=null,this.fire=null,this.drip=null,this.hum=null;const t=this.steps[this.checkpoint].cp;if(e.player.respawn(t.pos,t.yaw),e.player.ammo=6,e.player.reserve=Math.max(e.player.reserve,12),e.credor.show(!1),e.credor.setState("idle"),this.checkpoint!=="escape"&&this.checkpoint!=="ritual"){const n=e.level.props.fire;n.g.visible=!1}this.checkpoint==="power"&&(this.flags.doorSlammed=!1,this.flags.claraTalk=!1,this.flags.tub=!1,this.flags.mirror=!1,this.clara&&(this.clara.root.visible=!1),e.level.props.key.visible=!1,e.level.props.keyI.enabled=!1),this.go(this.checkpoint,!0)}update(e){this.stepT+=e;for(const n of[...this.timers]){if(n.gen!==this.gen){this.timers.splice(this.timers.indexOf(n),1);continue}n.t-=e,n.t<=0&&(this.timers.splice(this.timers.indexOf(n),1),n.fn())}const t=this.steps[this.cur];if(t&&t.update&&t.update(e),this.updateScare(e),this.ambTick(e),this.clara&&this.clara.yank){this.clara.yank+=e;const n=this.clara.root;n.position.y+=e*(2+this.clara.yank*14),this.clara.armL.rotation.x=-2.9,this.clara.armR.rotation.x=-2.9,n.position.y>3&&(n.visible=!1,this.clara.yank=0,this.G.audio.bodyFall(Ke(15,2.7,10.8)))}}ambTick(e){if(!["sala","phone","power","blackout","basement"].includes(this.cur))return;const t=this.G;if(t.level.insideAt(t.player.pos.x,t.player.pos.z)<.5||(this.ambT=(this.ambT??8)-e,this.ambT>0))return;this.ambT=10+Math.random()*12;const n=t.audio,i=t.player.pos,s=t.camera.userData.fwd,o=Ke(i.x-s.x*2.6,1.5,i.z-s.z*2.6),a=l=>Ke(i.x+(Math.random()-.5)*l,1.3,i.z+(Math.random()-.5)*l);switch(Math.floor(Math.random()*6)){case 0:n.whisper(o,2.2,.7);break;case 1:n.knock(a(4),2+Math.floor(Math.random()*2));break;case 2:n.skitter(Ke(i.x+(Math.random()-.5)*3,2.6,i.z+(Math.random()-.5)*3),.9,.8),t.ceilingDust(i.x+(Math.random()-.5)*2,i.z+(Math.random()-.5)*2,22);break;case 3:n.creak(a(5),1.4,.6,.8);break;case 4:n.scream(Ke(i.x-s.x*9,1.2,i.z-s.z*9),{pitch:1.6,dur:.5,vol:.3});break;case 5:n.boneCrack(o,2);break}}placeFather(){const e=this.G.father;this.headTurn=void 0,this.knockAnim=void 0,this.flags.fatherTurned=!1,this.flags.turnCrack=!1,e.show(!0),e.headTurned=!1,e.idlePose(),e.setState("idle"),e.place(5.5,0,11.5,Math.PI/4)}showClara(e){const t=this.G;if(!this.clara){this.clara=_i(t.cmats,{h:1.1,skin:t.cmats.childSkin,dress:t.cmats.childDress,hair:!0,hairLen:.45,mouthOpen:.3}),t.scene.add(this.clara.root);const n=this.clara;n.root.position.set(15.15,0,10.8),n.root.rotation.y=Math.PI/2,n.hips.position.y=.48,n.legL.rotation.x=-1.5,n.legR.rotation.x=-1.5,n.shinL.rotation.x=1.5,n.shinR.rotation.x=1.5,n.armL.rotation.set(-.4,0,.1),n.armR.rotation.set(-.4,0,-.1),n.foreL.rotation.x=-.6,n.foreR.rotation.x=-.6,n.neck.rotation.x=.35}this.clara.root.visible=e,this.clara.root.position.y=0,this.clara.yank=0}dropMother(){const e=this.G;e.mother.drop(),e.audio.scream(e.mother.pos.clone(),{pitch:1.2,dur:1.4,vol:1.3}),e.audio.sting(),e.shake(.4),this.go("fight1")}motherReturn(){const e=this.G,t=e.player.pos,n=[Ke(2,0,7),Ke(8,0,7),Ke(14,0,7),Ke(4,0,3),Ke(12,0,3)],i=n.filter(s=>Math.hypot(s.x-t.x,s.z-t.z)>5)[0]||n[0];e.mother.hunt(i.x,i.z),e.audio.skitter(Ke(i.x,2.6,i.z),1.2,.9)}faceScare(e){const t=this.G,n=t.audio,i=t.camera,s=this.scareBody||(this.scareBody=_i(t.cmats,{h:1.62,thin:.72,armK:1.45,fingerK:2,skin:t.cmats.greySkin,dress:t.cmats.gown,dressLen:.72,hair:!0,hairLen:.8,face:"scare",barelegs:!0}));s.root.rotation.set(0,0,Math.PI),i.add(s.root),s.root.traverse(o=>{o.isMesh&&(o.frustumCulled=!1)}),s.armL.rotation.set(-.5,0,-1.1),s.armR.rotation.set(-.5,0,1.1),s.foreL.rotation.set(-1.2,0,0),s.foreR.rotation.set(-1.2,0,0),s.legL.rotation.set(.2,0,-.3),s.legR.rotation.set(-.1,0,.3),s.hair&&(s.hair.visible=!1),t.player.frozen=!0,n.duck(0,.05),this.scare={t:0,B:s,done:e,hit:!1},n.scream(i.position.clone(),{pitch:1.55,dur:1.4,vol:1.8,rough:1}),n.sting(!0),n.boneCrack(i.position.clone(),4),t.shake(1.3),t.scareFx=1}updateScare(e){const t=this.scare;if(!t)return;const n=this.G,i=n.audio;t.t+=e;const s=t.t,o=t.B;let a=s<.08?(1-s/.08)*1.2:-.06*Math.sin((s-.08)*22)*Math.exp(-(s-.08)*5);s>1.05&&(a=(s-1.05)*(s-1.05)*40),o.root.position.set(.015,1.56+a,-.31),o.neck.rotation.set(Math.sin(s*47)*.12,Math.sin(s*31)*.2,Math.sin(s*59)*.22),o.head.rotation.set(0,Math.sin(s*23)*.15,Math.sin(s*71)*.1),o.armL.rotation.x=-.5+Math.sin(s*40)*.15,o.armR.rotation.x=-.5-Math.sin(s*37)*.15,n.scareFx=s<.1?1:s>1?.7:.12,n.scareExposure=.42,!t.hit&&s>.3&&(t.hit=!0,n.player.damage(14,n.camera.position.clone().add(n.camera.userData.fwd))),s>1.3&&(n.camera.remove(o.root),this.scare=null,n.player.frozen=!1,n.flickerT=1.8,n.scareFx=0,n.scareExposure=0,i.duck(1,2),i.skitter(n.camera.position.clone().setY(2.7),1,1),t.done&&t.done())}tubScare(){const e=this.G,t=e.audio,n=this.tiago||(this.tiago=_i(e.cmats,{h:1.75,skin:e.cmats.greySkin,top:e.cmats.greySkin,face:"tiago"}));e.scene.add(n.root),n.root.position.set(7.05,-.2,11.5),n.root.rotation.y=0,n.root.visible=!0,n.hips.position.y=.3,n.legL.rotation.x=-1.57,n.legR.rotation.x=-1.57,n.spine.rotation.x=-1.2,n.armL.rotation.set(-.3,0,-.5),n.armR.rotation.set(-.3,0,.5),n.neck.rotation.x=.4;const i=new Re({color:3801088,roughness:.15});n.root.traverse(a=>{a.isMesh&&!a.userData.bloodied&&(a.material=a.material===e.cmats.hole||a.material.vertexColors?a.material:i,a.userData.bloodied=!0)});let s=0;t.splash(Ke(7.05,.5,11.5),!0),t.sting(),e.shake(.3);const o=()=>{if(s+=.016,n.spine.rotation.x=-1.2+Math.min(1,s*4)*1.25,n.armR.rotation.x=-.3-Math.min(1,s*3)*1.5,n.head.rotation.z=Math.sin(s*40)*.2,s<1.4)requestAnimationFrame(o);else{t.splash(Ke(7.05,.5,11.5));const a=()=>{n.root.position.y-=.03,n.spine.rotation.x-=.04,n.root.position.y>-1.2?requestAnimationFrame(a):n.root.visible=!1};a()}};o()}mirrorScare(){const e=this.G,t=e.audio,n=this.mirrorFig||(this.mirrorFig=_i(e.cmats,{h:1.92,thin:.9,armK:1.35,skin:e.cmats.paleSkin,top:e.cmats.shirt,bottom:e.cmats.pants,face:"father"}));e.scene.add(n.root),n.root.traverse(s=>s.layers.set(2));const i=e.player.pos;n.root.position.set(i.x-.75,0,i.z+.1),n.root.rotation.y=Math.PI/2,n.neck.rotation.z=.5,n.root.visible=!0,t.whisper(Ke(i.x-.6,1.6,i.z),1.5,.9),setTimeout(()=>{n.root.visible=!1},1400),setTimeout(()=>t.boneCrack(Ke(i.x-.5,1.7,i.z),2),300)}basementLoops(){const e=this.G.audio;this.breath=e.loop("breathing",Ke(22.3,Ts+1,2.4),.6),e.loop("swing",Ke(24.6,Ts+1.5,10.6),.8)}event(e){const t=this.G,n=t.audio,i=t.level,s=t.player;switch(e){case"teeth":t.say("VOCÊ","...São dentes. Dentes de gente.",2.8,"self"),this.flags.teeth||(this.flags.teeth=!0,n.sting(!1));break;case"granny":t.say("VOCÊ","Dona Benedita, a avó. Falecida em 98, segundo o vizinho. Quem queimou os olhos da foto?",4.4,"self");break;case"drawings":t.say("VOCÊ",'"O moço." Tem um homem alto em todos os desenhos.',3.4,"self");break;case"switch":if(n.switchClick(Ke(4.8,1.2,.1)),t.lightsOn){t.say("VOCÊ","Melhor deixar acesa.",1.8,"self");break}t.say("VOCÊ","Sem energia.",1.6,"self"),this.flags.needPower||(this.flags.needPower=!0,t.objective("Encontrar o quadro de luz"));break;case"fridge":{const o=i.props.fridge;if(o.target>.5){o.target=0,n.latch(Ke(8.7,1,.9));break}o.target=1,n.latch(Ke(8.7,1,.9)),n.creak(Ke(8.7,1,.9),.4,.3,1.3),this.flags.fridge||(this.flags.fridge=!0,setTimeout(()=>{n.sting(!1),t.say("VOCÊ","Ai, meu Deus...",1.8,"self")},600));break}case"drawer":if(this.flags.drawer){t.say("VOCÊ","Vazia.",1.2,"self");break}this.flags.drawer=!0,s.reserve+=12,n.pickup(),t.say("VOCÊ","Munição .38... o Seu Antônio tinha um revólver.",3,"self");break;case"ammoBox":if(this.flags.ammoBox){t.say("VOCÊ","Vazia.",1.2,"self");break}this.flags.ammoBox=!0,s.reserve+=18,n.pickup(),t.say("VOCÊ","Mais munição.",1.6,"self");break;case"fusebox":if(this.hasFuse&&["fuse","fight1"].includes(this.cur)){n.switchClick(Ke(13.5,1.5,.2)),t.mother.active&&t.mother.state!=="hidden"&&(t.mother.onFlee=null,t.mother.flee()),this.go("power");break}if(t.lightsOn){t.say("VOCÊ","Funcionando.",1.4,"self");break}this.cur==="sala"||this.cur==="arrive"?(n.latch(Ke(13.5,1.5,.2)),t.say("VOCÊ","Tiraram o fusível principal. Alguém queria essa casa no escuro.",3.6,"self"),this.flags.phoneQueued||(this.flags.phoneQueued=!0,this.after(4.5,()=>{(this.cur==="sala"||this.cur==="arrive")&&this.go("phone")}))):t.say("VOCÊ","Falta o fusível.",1.6,"self");break;case"phone":{if(this.cur!=="phone"||this.flags.phoneAnswered){t.say("VOCÊ","Linha muda.",1.4,"self");break}this.flags.phoneAnswered=!0,this.ring&&this.ring.stop(),this.ring=null;const o=i.props.phone;n.latch(o.pos),o.handset&&(o.handset.position.y=.145,o.handset.visible=!1),t.objective(""),this.after(.8,()=>t.say("VOCÊ","Alô? Polícia Militar.",2,"self")),this.after(3.2,()=>t.say("CLARA (telefone)","Tia... é a polícia? Você veio buscar a gente?",3.8,"phone")),this.after(7.4,()=>t.say("VOCÊ","Clara? Clara, onde você tá?",2.4,"self")),this.after(10.2,()=>t.say("CLARA (telefone)","Escondida. A mamãe não gosta quando tem visita.",3.6,"phone")),this.after(14.2,()=>t.say("CLARA (telefone)","Ela tá bem em cima de você agora, tia.",3.2,"phone")),this.after(17.6,()=>t.say("CLARA (telefone)","Não olha.",1.6,"phone")),this.after(19.6,()=>{n.latch(o.pos),n.noiseBurst(n.dest(null),{dur:2.5,f:425,q:30,peak:.12}),o.handset&&(o.handset.visible=!0),this.go("fuse")});break}case"takeFuse":this.hasFuse=!0,i.props.fuseItem.visible=!1,i.props.fuseI.enabled=!1,n.pickup(),t.say("VOCÊ","Um fusível de 30 amperes. Tá ótimo.",2.4,"self");break;case"takeKey":i.props.keyI.enabled=!1,n.pickup(),this.go("blackout");break;case"diary":t.showNote(By,()=>{!this.flags.diaryRead&&this.cur==="basement"&&(this.flags.diaryRead=!0,i.props.burnI.enabled=!0,i.props.diaryI.enabled=!1,t.objective("Queimar o altar (segure E)"),this.after(1,()=>t.say("VOCÊ","Eu tenho um isqueiro. Que Deus me perdoe também.",3.2,"self")))});break;case"burn":i.props.burnI.enabled=!1,this.go("ritual");break;case"carRadio":{n.radioBeep(),["arrive","sala"].includes(this.cur)?t.say("SD SILVA","Fala, Duarte. Tô aqui. Vai lá dar uma olhada.",2.8,"radio"):t.say("RÁDIO","(estática)",1.5,"radio");break}case"flash":this.flags.ghostReady&&!this.flags.ghostSeen&&t.revealedGhost&&(this.flags.ghostSeen=!0,n.sting(!1),n.whisper(Ke(15.3,1.5,7),2,1));break}}}const dt=r=>document.querySelector(r),Cn=new URLSearchParams(location.search),on=(r=0,e=0,t=0)=>new D(r,e,t),Cr=dt("#c"),fi=new $x({canvas:Cr,antialias:!1,powerPreference:"high-performance",preserveDrawingBuffer:Cn.has("shot")});fi.shadowMap.enabled=!0;fi.shadowMap.type=_f;fi.toneMapping=Yc;fi.toneMappingExposure=1;fi.outputColorSpace=Ft;const Kt=new ed;Kt.background=new Xe(131846);Kt.fog=new ah(197638,.05);const sn=new An(80,innerWidth/innerHeight,.05,140);sn.userData.fwd=on(0,0,-1);sn.userData.up=on(0,1,0);Kt.add(sn);const yh=new ed,Pd=new We;yh.add(Pd);const Ld=new yd(2238522,723206,.3);Kt.add(Ld);const I=window.G={scene:Kt,camera:sn,renderer:fi,gunScene:yh,gunHolder:Pd,time:0,dt:0,lightsOn:!1,flashT:0,flicker:0,flickerT:0,sens:Number(Cn.get("sens")||1),tensionBase:0,noteOpen:!1,paused:!0,started:!1,godMode:Cn.has("god"),exposure:1.4,shakeV:0};I.audio=new b_;I.brightness=1;I.volume=1;I.post=S_(fi,Kt,sn);{const r=new bd(yh,sn);r.clear=!1,r.clearDepth=!0,I.post.composer.insertPass(r,2)}I.ready=(async()=>{I.assets=await Cy(fi,e=>{const t=document.querySelector("#loading em");t&&(t.style.width=(e*100).toFixed(0)+"%")}),B_(I.assets),I.assets.env&&(Kt.environment=I.assets.env,Kt.environmentIntensity=.25),I.cmats=z_(),I.level=Fy(I),I.player=new ky(I),I.mother=new V_(I,I.cmats),I.father=new H_(I,I.cmats),I.credor=new G_(I,I.cmats),I.creatures=[I.mother,I.father,I.credor],I.story=new zy(I),I.player.setInput(wo),fi.compile(Kt,sn),I.post.composer.render(1/60),document.querySelector("#loading").classList.add("hidden");const r=document.querySelector("#start");r.disabled=!1,r.focus()})();I.quality=Cn.get("q")||(matchMedia("(pointer: coarse)").matches?"baixa":"alta");let Gc=1;function Dd(r){I.quality=r,Gc=Math.min(devicePixelRatio,r==="alta"?2:r==="media"?1.5:1.1)*Number(Cn.get("scale")||1),I.post.ao&&(I.post.ao.enabled=r==="alta"),Id()}function Id(){const r=innerWidth,e=innerHeight;fi.setPixelRatio(Gc),fi.setSize(r,e,!1),sn.aspect=r/e,sn.fov=r/e<1?95:80,sn.updateProjectionMatrix(),I.post.setSize(r,e,Gc)}addEventListener("resize",Id);Dd(I.quality);const Mh=700,Sh=new Ht,yn=new Float32Array(Mh*3);for(let r=0;r<Mh;r++)yn[r*3]=(Math.random()-.5)*10,yn[r*3+1]=Math.random()*3,yn[r*3+2]=(Math.random()-.5)*10;Sh.setAttribute("position",new Wt(yn,3));const so=new Bt({transparent:!0,depthWrite:!1,blending:as,uniforms:{lp:{value:on()},ld:{value:on()},on:{value:1},t:{value:0}},vertexShader:`uniform vec3 lp, ld; uniform float on, t; varying float a;
    void main(){ vec3 p = position; p.x += sin(t*0.3 + position.y*3.0)*0.08; p.y += sin(t*0.2 + position.x*2.0)*0.05;
      vec3 d = p - lp; float dist = length(d); float c = dot(d/dist, ld);
      a = smoothstep(0.86, 0.97, c) * smoothstep(9.0, 0.6, dist) * on;
      vec4 mv = modelViewMatrix * vec4(p,1.0); gl_Position = projectionMatrix * mv; gl_PointSize = clamp(1.6 / -mv.z, 0.8, 2.6); }`,fragmentShader:"varying float a; void main(){ vec2 c = gl_PointCoord-0.5; float r = 1.0 - smoothstep(0.2, 0.5, length(c)); gl_FragColor = vec4(vec3(0.9,0.85,0.75), a*r*0.32); }"}),Nd=new od(Sh,so);Nd.frustumCulled=!1;Kt.add(Nd);const Gl=[],Vy=(()=>{const r=document.createElement("canvas");r.width=r.height=64;const e=r.getContext("2d"),t=e.createRadialGradient(32,32,1,32,32,30);t.addColorStop(0,"rgba(0,0,0,1)"),t.addColorStop(.25,"rgba(10,8,6,0.9)"),t.addColorStop(.5,"rgba(40,36,30,0.4)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const n=new Ki(r);return n.colorSpace=Ft,n})();function bh(r,e,t,n,i={}){const s=new ie(new Zn(e,e),new Re({map:r,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,roughness:i.rough??.8,color:i.color??16777215}));if(s.position.copy(t).addScaledVector(n,.004),s.lookAt(t.clone().add(n)),s.rotateZ(Math.random()*6.28),Kt.add(s),Gl.push(s),Gl.length>60){const o=Gl.shift();Kt.remove(o),o.geometry.dispose(),o.material.dispose()}}I.bulletHole=r=>{const e=r.face?r.face.normal.clone().transformDirection(r.object.matrixWorld):on(0,1,0);bh(Vy,.06,r.point,e),Ud(r.point,e,10127984,10,1.5)};const Fa=new gr({map:fo(),transparent:!0,depthWrite:!1}),Ds=[];function Ud(r,e,t,n,i){for(let s=0;s<n;s++){const o=new cs(Fa.clone());o.material.color.set(t),o.scale.setScalar(.03+Math.random()*.03),o.position.copy(r),Kt.add(o);const a=e.clone().multiplyScalar(i*(.3+Math.random())).add(on((Math.random()-.5)*i,(Math.random()-.2)*i,(Math.random()-.5)*i));Ds.push({s:o,v:a,life:.5+Math.random()*.5})}}I.spawnBlood=(r,e,t=5898240)=>{Ud(r,e||on(0,1,0),t,16,2.2);const n=I.level.floorY(r.x,r.z);bh(Un(Math.floor(Math.random()*30),"splat"),.5+Math.random()*.4,on(r.x+(Math.random()-.5)*.4,n+.008,r.z+(Math.random()-.5)*.4),on(0,1,0),{rough:.2,color:t===5898240?16777215:2236962})};I.ceilingDust=(r,e,t=40)=>{for(let i=0;i<t;i++){const s=Math.random()<.18,o=new cs(Fa.clone());o.material.color.set(s?10129536:9076848),o.material.opacity=s?.7:.5,o.scale.setScalar(s?.03+Math.random()*.04:.014+Math.random()*.022);const a=Math.random()*6.28,l=Math.random()*.55;o.position.set(r+Math.cos(a)*l,2.66-Math.random()*.06,e+Math.sin(a)*l),Kt.add(o),Ds.push({s:o,v:on(Math.cos(a)*(.1+Math.random()*.3),-.25-Math.random()*.55,Math.sin(a)*(.1+Math.random()*.3)),life:1.8+Math.random()*2.2,g:s?.55:.15})}const n=new cs(Fa.clone());n.material.color.set(9077362),n.material.opacity=.26,n.scale.setScalar(.35),n.position.set(r,2.58,e),Kt.add(n),Ds.push({s:n,v:on(0,-.12,0),life:1.1,g:0,grow:1.6}),I.audio.noiseBurst(I.audio.dest(on(r,2.6,e)),{dur:.6,type:"highpass",f:3e3,peak:.12,buf:I.audio.pink})};I.bloodDrip=(r,e)=>{const t=new cs(Fa.clone());t.material.color.set(5898240),t.scale.set(.02,.035,1),t.position.set(r,2.65,e),Kt.add(t),Ds.push({s:t,v:on(0,0,0),life:.72,g:1}),setTimeout(()=>{bh(Un(77,"splat"),.18,on(r,I.level.floorY(r,e)+.008,e),on(0,1,0),{rough:.15});const n=I.audio.dest(on(r,.1,e));I.audio.tone(n,{f:700,fEnd:1400,dur:.06,peak:.5}),I.audio.noiseBurst(n,{dur:.05,f:2500,q:2,peak:.25})},720)};I.scareFx=0;I.hitMarker=()=>{const r=dt("#cross");r.classList.remove("hit"),r.offsetWidth,r.classList.add("hit")};I.shake=r=>{I.player.shakeAmt=Math.min(1.5,I.player.shakeAmt+r)};I.alertAll=()=>{};I.flickerBulbs=r=>I.level.bulbs.forEach(e=>e.flicker=r*(.6+Math.random()*.6));let Ra=0,Wl=18;I.lightning=()=>{Ra=.6,I.level.props.lightning.shadow.needsUpdate=!0,setTimeout(()=>I.audio.thunder(.6+Math.random()*.8),300+Math.random()*1200)};I.onFlash=()=>{I.exposureKick=.35;const r=sn,e=r.userData.fwd;I.revealedGhost=!1;for(const t of I.level.reveal){const n=t.getWorldPosition(on());t.isGroup&&(n.y+=1.2);const i=n.distanceTo(r.position),s=n.clone().sub(r.position).normalize();i<13&&s.dot(e)>.7&&I.level.los(r.position,n)&&(t.visible=!0,t.userData.revealT=.35,t===I.level.props.ghost&&(I.revealedGhost=!0))}for(const t of I.creatures){if(!t.active)continue;const n=t.aimPoint().clone(),i=n.distanceTo(r.position),s=n.clone().sub(r.position).normalize();i<11&&s.dot(e)>.5&&I.level.los(r.position,n)&&t.flashed()}I.story.event("flash")};const pt={hud:dt("#hud"),obj:dt("#objective"),objT:dt("#objective span"),subs:dt("#subs"),prompt:dt("#prompt"),ammo:dt("#ammo b"),reserve:dt("#ammo span"),flashBar:dt("#flashc em"),stamp:dt("#stamp"),hold:dt("#hold"),holdBar:dt("#hold i"),note:dt("#note"),noteTxt:dt("#note .txt"),pause:dt("#pause"),dead:dt("#dead"),cards:dt("#cards"),cardsP:dt("#cards p"),title:dt("#title"),black:dt("#black")};let vf=0;I.objective=(r,e=!1)=>{const t=++vf;pt.obj.classList.remove("show"),r&&(setTimeout(()=>{t===vf&&(pt.objT.textContent=r,pt.obj.classList.toggle("urgent",e),pt.obj.classList.add("show"))},400),I.currentObjective=r)};const Cs=[];let Es=null;I.say=(r,e,t,n="radio",i=null)=>Cs.push({who:r,text:e,dur:t,kind:n,pos:i,at:I.time});function Hy(r){for(Es&&(Es.t-=r,Es.t<=0&&(Es.el.remove(),Es=null));Cs.length&&I.time-Cs[0].at>7&&Cs.length>1;)Cs.shift();if(!Es&&Cs.length){const e=Cs.shift(),t=document.createElement("div");t.className={radio:"radio",girl:"girl",phone:"girl",self:"self"}[e.kind]||"",t.innerHTML=`<span class="line"><span class="who">${e.who}</span>${e.text}</span>`,pt.subs.appendChild(t),Es={el:t,t:e.dur};const n=I.audio,i=e.dur*.82;e.kind==="radio"?(n.radioBeep(),n.voice(null,i,{radio:!0,pitch:105,vol:.5})):e.kind==="phone"?n.voice(I.level.props.phone.pos,i,{radio:!0,child:!0,vol:.5}):e.kind==="girl"?n.voice(e.pos,i,{child:!0,vol:.45}):e.kind==="self"&&n.voice(null,i,{pitch:195,vol:.16})}}let Wc=null;I.showNote=(r,e)=>{pt.noteTxt.innerHTML=r,pt.note.classList.remove("hidden"),I.noteOpen=!0,Wc=e,I.audio.pickup()};I.closeNote=()=>ja();function ja(){pt.note.classList.add("hidden"),I.noteOpen=!1;const r=Wc;Wc=null,r&&r()}function Od(r,e,t=4.2){pt.cards.classList.remove("hidden");let n=0;const i=()=>{if(n>=r.length){pt.cardsP.classList.remove("on"),setTimeout(()=>{pt.cards.classList.add("hidden"),e&&e()},1400);return}pt.cardsP.classList.remove("on"),setTimeout(()=>{pt.cardsP.textContent=r[n++],pt.cardsP.classList.add("on"),setTimeout(i,t*1e3)},900)};i()}const wo={};let ri=null,Ca=0,Ei=null;const Gy={w:"KeyW",a:"KeyA",s:"KeyS",d:"KeyD",e:"KeyE",r:"KeyR",f:"KeyF",q:"KeyQ",t:"KeyT",shift:"ShiftLeft",arrowup:"ArrowUp",arrowdown:"ArrowDown",arrowleft:"ArrowLeft",arrowright:"ArrowRight"},Fd=r=>{const e=Gy[(r.key||"").toLowerCase()];return e&&e!==r.code?[r.code,e]:[r.code]},Ka=!Cn.has("desktop")&&(matchMedia("(pointer: coarse)").matches||Cn.has("touch"));I.touch=Ka;document.body.classList.toggle("touch",Ka);const ro=r=>{if(I.noteOpen){(r==="KeyE"||r==="Escape"||r==="Space")&&ja();return}if(r==="KeyT"){zd();return}I.paused||I.player.dead||(r==="KeyE"&&Ei&&(Ei.hold?(ri=Ei,Ca=0):Ei.use()),r==="KeyR"&&I.player.reload(),r==="KeyF"&&I.player.toggleFlashlight(),r==="KeyQ"&&I.player.cameraFlash())};addEventListener("keydown",r=>{if(!I.started)return;const e=Fd(r);e.forEach(t=>wo[t]=!0),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","Tab"].includes(r.code)&&r.preventDefault(),!r.repeat&&ro(e[e.length-1])});addEventListener("keyup",r=>{Fd(r).forEach(e=>wo[e]=!1),(r.code==="KeyE"||(r.key||"").toLowerCase()==="e")&&(ri=null)});addEventListener("blur",()=>{for(const r in wo)wo[r]=!1});addEventListener("mousemove",r=>{document.pointerLockElement===Cr&&!I.paused&&I.player.look(r.movementX,r.movementY)});Cr.addEventListener("mousedown",r=>{if(!(!I.started||I.touch)){if(document.pointerLockElement!==Cr){Pr();return}if(I.noteOpen){ja();return}r.button===0&&I.player.shoot(),r.button===2&&I.player.cameraFlash()}});addEventListener("contextmenu",r=>r.preventDefault());function Pr(){if(!(I.touch||Cn.has("nolock")))try{const r=Cr.requestPointerLock();r&&r.catch&&r.catch(()=>Xc())}catch{Xc()}}function Xc(){!I.started||I.finished||I.touch||(I.paused=!0,pt.pause.classList.toggle("hidden",I.player.dead),I.audio.suspend(!0))}document.addEventListener("pointerlockerror",Xc);document.addEventListener("pointerlockchange",()=>{if(!I.started||I.finished||I.touch||Cn.has("nolock"))return;const r=document.pointerLockElement===Cr;I.paused=!r,pt.pause.classList.toggle("hidden",r||I.player.dead),I.audio.suspend(!r)});const Wy=()=>{pt.pause.classList.add("hidden"),I.touch?(I.paused=!1,I.audio.suspend(!1)):Pr()};dt("#btnResume").addEventListener("click",Wy);const po=document.documentElement,wh=!!(po.requestFullscreen||po.webkitRequestFullscreen),kd=()=>!!(document.fullscreenElement||document.webkitFullscreenElement);function Bd(){const r=po.requestFullscreen||po.webkitRequestFullscreen;try{const e=r.call(po,{navigationUI:"hide"});e&&e.catch&&e.catch(()=>{})}catch{}}function Xy(){const r=document.exitFullscreen||document.webkitExitFullscreen;try{const e=r&&r.call(document);e&&e.catch&&e.catch(()=>{})}catch{}}function zd(){wh&&(kd()?Xy():Bd(),I.started&&!I.touch&&!I.paused&&Pr())}const Vd=()=>document.querySelectorAll(".fsState").forEach(r=>r.textContent=kd()?"SAIR DA TELA CHEIA":"ENTRAR EM TELA CHEIA");document.addEventListener("fullscreenchange",Vd);document.addEventListener("webkitfullscreenchange",Vd);dt("#btnFull2").addEventListener("click",()=>{zd()});let mo=!Ka&&wh;dt("#btnFull").addEventListener("click",()=>{mo=!mo,dt("#btnFull b").textContent=mo?"LIGADA":"DESLIGADA"});dt("#btnFull b").textContent=mo?"LIGADA":"DESLIGADA";wh||document.body.classList.add("nofs");const Hd=()=>dt("#controls").classList.remove("hidden");dt("#btnControls").addEventListener("click",Hd);dt("#btnControls2").addEventListener("click",Hd);dt("#btnCloseControls").addEventListener("click",()=>dt("#controls").classList.add("hidden"));const Th=(r,e)=>{const t=r.map(n=>dt(n));t.forEach(n=>n.addEventListener("input",()=>{t.forEach(i=>i.value=n.value),e(Number(n.value))}))};Th(["#optSens","#optSens2"],r=>I.sens=r);Th(["#optBright","#optBright2"],r=>I.brightness=r);Th(["#optVol","#optVol2"],r=>{I.volume=r,I.audio.master&&(I.audio.master.gain.value=.9*r)});document.querySelectorAll(".optQ").forEach(r=>{r.value=I.quality,r.addEventListener("change",()=>{Dd(r.value),document.querySelectorAll(".optQ").forEach(e=>e.value=r.value)})});pt.dead.addEventListener("click",()=>{pt.dead.classList.add("hidden"),I.story.restore(),I.post.u.blackout.value=0,Pr()});if(Ka){const r=dt("#stick"),e=dt("#stick i");let t=null,n=null,i=0,s=0,o=0,a=0;const l=I.touchState={x:0,y:0,run:!1},c=dt("#touch");c.addEventListener("touchstart",f=>{for(const d of f.changedTouches)d.target.closest(".tb")||(d.clientX<innerWidth*.42&&t===null?(t=d.identifier,i=d.clientX,s=d.clientY,r.style.left=i+"px",r.style.top=s+"px",r.classList.add("on")):n===null&&(n=d.identifier,o=d.clientX,a=d.clientY));f.preventDefault()},{passive:!1}),c.addEventListener("touchmove",f=>{for(const d of f.changedTouches)if(d.identifier===t){let m=d.clientX-i,v=d.clientY-s;const g=Math.hypot(m,v),p=55;g>p&&(m*=p/g,v*=p/g),l.x=m/p,l.y=v/p,e.style.transform=`translate(${m}px, ${v}px)`}else d.identifier===n&&!I.paused&&(I.player.look((d.clientX-o)*2.2,(d.clientY-a)*2.2),o=d.clientX,a=d.clientY);f.preventDefault()},{passive:!1});const h=f=>{for(const d of f.changedTouches)d.identifier===t&&(t=null,l.x=l.y=0,e.style.transform="",r.classList.remove("on")),d.identifier===n&&(n=null)};c.addEventListener("touchend",h),c.addEventListener("touchcancel",h);const u=(f,d,m)=>{const v=dt(f);v.addEventListener("touchstart",g=>{g.preventDefault(),g.stopPropagation(),v.classList.add("down"),d()},{passive:!1}),v.addEventListener("touchend",g=>{g.preventDefault(),v.classList.remove("down"),m&&m()})};u("#tShoot",()=>{I.paused||I.player.shoot()}),u("#tFlash",()=>ro("KeyQ")),u("#tUse",()=>ro("KeyE"),()=>ri=null),u("#tLight",()=>ro("KeyF")),u("#tReload",()=>ro("KeyR")),u("#tRun",()=>{l.run=!l.run,dt("#tRun").classList.toggle("active",l.run)}),u("#tPause",()=>{I.started&&(I.paused=!0,pt.pause.classList.remove("hidden"),I.audio.suspend(!0))}),dt("#note").addEventListener("touchstart",()=>I.noteOpen&&ja())}I.startWorldLoops=()=>{const r=I.audio;r.loop("flies",on(5.5,.9,4.2),.9),I.level.props.tv.on&&r.loop("tv",on(3.1,.75,2.2),.7)};I.onDeath=()=>{I.audio.sting(),I.objective(""),setTimeout(()=>{I.audio.bodyFall(I.player.pos)},500),setTimeout(()=>{pt.dead.classList.remove("hidden")},3200)};I.endingFigures=()=>{const r=new zn(16719888,14,9,1.5);r.position.set(6,1.6,3),Kt.add(r),I.lightsOn=!1;const e=(t,n,i)=>{const s=_i(I.cmats,{skin:I.cmats.ghost,top:I.cmats.ghost,bottom:I.cmats.ghost,...i});return s.root.position.set(t,0,n),s.root.rotation.y=Math.PI,Kt.add(s.root),s};e(2.4,.7,{h:1.62,dress:I.cmats.ghost,hair:!0,hairLen:.7}),e(3,.8,{h:1.92}).neck.rotation.z=.5,e(10.6,.7,{h:1.1,dress:I.cmats.ghost,hair:!0,hairLen:.4}),e(11.2,.75,{h:1.75}),e(5.9,.4,{h:1.68,hair:!0,hairLen:.25}),e(5.9,1.6,{h:2.1,thin:.6,armK:1.75,faceless:!0,longHead:1.6,longNeck:1.6}),I.level.props.doors.front.set(1,!0)};I.finish=()=>{I.finished=!0,pt.black.classList.remove("hidden"),pt.black.style.opacity=1,I.audio.stopAllLoops(),setTimeout(()=>{pt.hud.classList.add("hidden"),Od(["Em 17 de março de 2003, a viatura 2207 foi encontrada vazia em frente à residência dos Vasconcelos.",`Nenhum membro da família foi localizado.
O Soldado Silva e a Cabo Inês Duarte também não.`,`A câmera corporal foi encontrada no porão, sob as cinzas do altar.

Ainda estava gravando.`],()=>{document.exitPointerLock(),pt.title.classList.remove("hidden"),pt.title.querySelector(".file").textContent="FIM DA GRAVAÇÃO · OBRIGADO POR JOGAR",pt.title.querySelector(".warn").textContent="Texturas e modelos: Poly Haven e ambientCG (CC0). Cabeça escaneada: Lee Perry-Smith por Infinite-Realities (CC BY 3.0). Sons: Oculus Audio Pack 01 por Oculus VR, LLC (CC BY 4.0). Corpo: Reallusion iClone (3D Warehouse). Motor: three.js.",pt.title.querySelector("button").textContent="JOGAR NOVAMENTE",pt.title.querySelector("button").onclick=()=>location.reload()},5)},1600)};dt("#start").addEventListener("click",Gd);function Gd(){if(!I.player)return;I.audio.init(),I.audio.master&&(I.audio.master.gain.value=.9*I.volume),I.assets.sfxRaw&&!I.samplesLoading&&(I.samplesLoading=!0,I.audio.loadSamples(I.assets.sfxRaw)),pt.title.classList.add("hidden"),mo&&!Cn.has("nolock")?(Bd(),setTimeout(Pr,380)):Pr();const r=Cn.get("step"),e=()=>{I.started=!0,I.paused=!1,pt.pause.classList.add("hidden"),pt.hud.classList.remove("hidden"),I.touch&&dt("#touch").classList.remove("hidden"),I.startWorldLoops(),r&&I.story.steps[r]?(I.story.checkpoint=r,I.story.restore()):I.story.go("arrive")};r||Cn.has("skip")?e():Od([`Zona rural de Santa Luzia do Paraopeba, Minas Gerais.
14 de março de 2003 — 02:47`,"A família Vasconcelos — Antônio, Lúcia, o filho Tiago e a pequena Clara — não é vista há três dias.",`A Cabo Inês Duarte, da Polícia Militar, foi enviada para verificar a residência.

Esta é a gravação da câmera corporal dela.`],e)}Cn.has("auto")&&I.ready.then(Gd);const qy=new Sd,Yy=new Date(2003,2,14,2,47,13).getTime();let _a=0,Xl=0;function Wd(){requestAnimationFrame(Wd);let r=Math.min(qy.getDelta(),.05);Cn.has("fixeddt")&&(r=1/30),r*=Number(Cn.get("speed")||1),I.started&&!I.paused&&!I.noteOpen?Ky(r):I.started?I.player&&I.player.syncCam():jy(r),I.started&&Zy(r)}function jy(r){I.time+=r,I.player&&I.player.syncCam()}function Ky(r){I.time+=r,I.dt=r;const e=I.player,t=I.level,n=I.audio,i=I.post.u;e.update(r),I.story.update(r);for(const p of I.creatures)p.update(r);t.update(r,I.time),I.flashT>0&&(I.flashT-=r);for(const p of t.reveal)p.userData.revealT>0?(p.userData.revealT-=r,p.visible=p.userData.revealT>0):p.visible=!1;let s=99;for(const p of I.creatures)p.active&&p.state!=="idle"&&p.state!=="hidden"&&p.state!=="die"&&(s=Math.min(s,p.pos.distanceTo(e.pos)));const o=ai.clamp(1-s/4.5,0,1);I.combat=I.creatures.some(p=>p.active&&["chase","hunt","drop","emerge","flee"].includes(p.state)&&p.pos.distanceTo(e.pos)<14)||I.mother.state==="ceiling"&&I.mother.active,I.flickerT=Math.max(0,I.flickerT-r),I.flicker=o>.75&&Math.random()<o*r*.8?.12:Math.max(0,I.flicker-r),I.flickerT>0&&(I.flicker=.2),I.scareFx>.5&&(I.flicker=.3);const a=I.player;I.scareExposure&&(a.flashlight.intensity*=.5);const l=Math.min(1,I.tensionBase+o*.6);e.fear+=(Math.max(l,(100-e.health)/100)*.9-e.fear)*Math.min(1,r*1.5);const c=t.room(e.pos.x,e.pos.z);n.update(r,{inside:t.insideAt(e.pos.x,e.pos.z),tension:l,fear:e.fear,exertion:1-e.stamina,lights:I.lightsOn,basement:c==="porao"||c==="escada"}),n.setListener(sn),Wl-=r,Wl<=0&&!["porao","escada"].includes(c)&&(Wl=25+Math.random()*30,I.lightning());const h=t.props.lightning;if(Ra>0){Ra-=r;const p=Ra;h.intensity=(p>.45||p>.2&&p<.3?6:0)*(Math.random()*.5+.5)}else h.intensity=0;const u=t.insideAt(e.pos.x,e.pos.z);let f=I.lightsOn&&u>.5?.95:e.flashlightOn?1.3:2.1;const d=e.bounce.intensity>0?e.bounce.position.distanceTo(sn.position):9;e.flashlightOn&&(f*=ai.lerp(I.lightsOn&&u>.5?.6:.45,1,ai.clamp((d-.5)/2.5,0,1)));for(const p of I.creatures)if(p.active&&p.state!=="hidden"){const _=p.aimPoint().distanceTo(sn.position);_<2.2&&(f*=ai.lerp(.42,1,ai.clamp((_-.5)/1.7,0,1)))}I.exposure+=(f-I.exposure)*Math.min(1,r*(I.exposure>f?4:1.1)),I.flashT>0&&(I.exposure=.45),I.scareExposure&&(I.exposure=I.scareExposure),i.exposure.value=I.exposure*I.brightness,i.grain.value=.045+(I.exposure-.9)*.05,i.flash.value=Math.max(0,I.flashT/.18)*.85,i.damage.value=e.damageFx,i.interference.value=I.scareExposure?I.scareFx:Math.max(s<2.5?(2.5-s)*.09:0,e.dead?.8:0,I.flickerT>0?.2:0,I.scareFx*.9),Kt.environmentIntensity=u>.5?I.lightsOn?.35:.12:.5,i.saturation.value=I.lightsOn?.8:.6,Ld.intensity=u>.5?.12:.3,Kt.fog.density=c==="porao"?.07:u>.5?.045:.035,so.uniforms.t.value=I.time,so.uniforms.on.value=e.flashlightOn&&!I.lightsOn?1:.25,so.uniforms.lp.value.copy(e.flashlight.position),so.uniforms.ld.value.copy(e.lightDir);const m=sn.position;for(let p=0;p<Mh;p++){const _=p*3;yn[_]-m.x>5?yn[_]-=10:yn[_]-m.x<-5&&(yn[_]+=10),yn[_+2]-m.z>5?yn[_+2]-=10:yn[_+2]-m.z<-5&&(yn[_+2]+=10),yn[_+1]-m.y>2?yn[_+1]-=3.5:yn[_+1]-m.y<-1.5&&(yn[_+1]+=3.5),yn[_+1]-=r*.02}Sh.attributes.position.needsUpdate=!0;for(let p=Ds.length-1;p>=0;p--){const _=Ds[p];if(_.life-=r,_.v.y-=9.8*(_.g??1)*r,_.s.position.addScaledVector(_.v,r),_.grow){const y=_.s.scale.x+_.grow*r;_.s.scale.set(y,y,1)}_.s.material.opacity=Math.min(_.s.material.opacity,Math.max(0,_.life*2)),_.life<=0&&(Kt.remove(_.s),_.s.material.dispose(),Ds.splice(p,1))}if(t.props.mirror.visible=c==="banheiro"||c==="casal"&&!1,Ei=null,!e.dead&&!e.frozen){let p=0;for(const _ of t.interact){if(_.enabled===!1||_.pos.distanceTo(sn.position)>(_.range||1.9))continue;const A=_.pos.clone().sub(sn.position).normalize().dot(sn.userData.fwd);A<.86||A<p||t.los(sn.position,_.pos)&&(p=A,Ei=_)}}if(ri){if(ri!==Ei)ri=null;else if(Ca+=r,Ca>=ri.hold){const p=ri;ri=null,p.use()}}pt.prompt.textContent=Ei?I.touch?`[USAR] ${Ei.label}`:`[E] ${Ei.label}`:"",pt.hold.style.display=ri?"block":"none",ri&&(pt.holdBar.style.width=Ca/ri.hold*100+"%"),pt.ammo.textContent=e.reloading>0?"—":e.ammo,pt.reserve.textContent="/ "+e.reserve,pt.flashBar.style.width=e.flashCharge*100+"%";const v=new Date(Yy+I.time*1e3),g=p=>String(p).padStart(2,"0");pt.stamp.textContent=`${g(v.getDate())}/${g(v.getMonth()+1)}/${v.getFullYear()} ${g(v.getHours())}:${g(v.getMinutes())}:${g(v.getSeconds())}`,Hy(r)}function Zy(r){I.player.dead&&(I.post.u.blackout.value=Math.min(1,Math.max(0,(I.player.deathT-1.8)/1.2))),I.post.render(r,I.time),Cn.has("fps")&&(_a+=r,Xl++,_a>1&&(console.log("fps",(Xl/_a).toFixed(1),fi.info.render.calls),_a=0,Xl=0))}Wd();I.lookAt=(r,e,t)=>{const n=I.player.pos,i=n.y+I.player.height;I.player.yaw=Math.atan2(-(r-n.x),-(t-n.z)),I.player.pitch=Math.atan2(e-i,Math.hypot(r-n.x,t-n.z))};
