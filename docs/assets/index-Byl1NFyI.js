(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zc="170",kd=0,bh=1,Bd=2,uf=1,ff=2,Oi=3,Hi=0,On=1,xn=2,hn=0,or=1,As=2,wh=3,Th=4,df=5,fi=100,zd=101,Vd=102,Hd=103,Gd=104,jr=200,Wd=201,Xd=202,qd=203,zl=204,Vl=205,Hl=206,Yd=207,Gl=208,jd=209,Kd=210,Zd=211,$d=212,Jd=213,Qd=214,Wl=0,Xl=1,ql=2,fr=3,Yl=4,jl=5,Kl=6,Zl=7,pf=0,ep=1,tp=2,ns=0,mf=1,gf=2,vf=3,Vc=4,np=5,xf=6,_f=7,Eh="attached",ip="detached",yf=300,dr=301,pr=302,ba=303,$l=304,La=306,Xn=1e3,Qi=1001,wa=1002,Zt=1003,Mf=1004,Kr=1005,Gn=1006,da=1007,Bi=1008,wi=1009,Sf=1010,bf=1011,lo=1012,Hc=1013,Rs=1014,mi=1015,Fn=1016,Gc=1017,Wc=1018,Cs=1020,wf=35902,Tf=1021,Ef=1022,Wn=1023,Af=1024,Rf=1025,ar=1026,Ps=1027,Xc=1028,qc=1029,Cf=1030,Yc=1031,jc=1033,pa=33776,ma=33777,ga=33778,va=33779,Jl=35840,Ql=35841,ec=35842,tc=35843,nc=36196,ic=37492,sc=37496,rc=37808,oc=37809,ac=37810,lc=37811,cc=37812,hc=37813,uc=37814,fc=37815,dc=37816,pc=37817,mc=37818,gc=37819,vc=37820,xc=37821,xa=36492,_c=36494,yc=36495,Pf=36283,Mc=36284,Sc=36285,bc=36286,co=2300,ho=2301,Ya=2302,Ah=2400,Rh=2401,Ch=2402,sp=2500,rp=0,Lf=1,wc=2,op=3200,ap=3201,Kc=0,lp=1,ki="",Ot="srgb",Pn="srgb-linear",Da="linear",Ct="srgb",Fs=7680,Ph=519,cp=512,hp=513,up=514,Df=515,fp=516,dp=517,pp=518,mp=519,Tc=35044,Lh="300 es",zi=2e3,Ta=2001;class br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dh=1234567;const eo=Math.PI/180,mr=180/Math.PI;function ti(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sn[r&255]+Sn[r>>8&255]+Sn[r>>16&255]+Sn[r>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]).toLowerCase()}function tn(r,e,t){return Math.max(e,Math.min(t,r))}function Zc(r,e){return(r%e+e)%e}function gp(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function vp(r,e,t){return r!==e?(t-r)/(e-r):0}function to(r,e,t){return(1-t)*r+t*e}function xp(r,e,t,n){return to(r,e,1-Math.exp(-t*n))}function _p(r,e=1){return e-Math.abs(Zc(r,e*2)-e)}function yp(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Mp(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Sp(r,e){return r+Math.floor(Math.random()*(e-r+1))}function bp(r,e){return r+Math.random()*(e-r)}function wp(r){return r*(.5-Math.random())}function Tp(r){r!==void 0&&(Dh=r);let e=Dh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ep(r){return r*eo}function Ap(r){return r*mr}function Rp(r){return(r&r-1)===0&&r!==0}function Cp(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Pp(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Lp(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*m,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*m,a*c);break;case"ZYZ":r.set(l*m,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function di(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Pt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const pi={DEG2RAD:eo,RAD2DEG:mr,generateUUID:ti,clamp:tn,euclideanModulo:Zc,mapLinear:gp,inverseLerp:vp,lerp:to,damp:xp,pingpong:_p,smoothstep:yp,smootherstep:Mp,randInt:Sp,randFloat:bp,randFloatSpread:wp,seededRandom:Tp,degToRad:Ep,radToDeg:Ap,isPowerOfTwo:Rp,ceilPowerOfTwo:Cp,floorPowerOfTwo:Pp,setQuaternionFromProperEuler:Lp,normalize:Pt,denormalize:di};class re{constructor(e=0,t=0){re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,t,n,i,s,o,a,l,c){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],v=i[0],g=i[3],p=i[6],x=i[1],M=i[4],_=i[7],C=i[2],w=i[5],E=i[8];return s[0]=o*v+a*x+l*C,s[3]=o*g+a*M+l*w,s[6]=o*p+a*_+l*E,s[1]=c*v+u*x+h*C,s[4]=c*g+u*M+h*w,s[7]=c*p+u*_+h*E,s[2]=f*v+d*x+m*C,s[5]=f*g+d*M+m*w,s[8]=f*p+d*_+m*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,m=t*h+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=h*v,e[1]=(i*c-u*n)*v,e[2]=(a*n-i*o)*v,e[3]=f*v,e[4]=(u*t-i*l)*v,e[5]=(i*s-a*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ja.makeScale(e,t)),this}rotate(e){return this.premultiply(ja.makeRotation(-e)),this}translate(e,t){return this.premultiply(ja.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ja=new ut;function If(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function uo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Dp(){const r=uo("canvas");return r.style.display="block",r}const Ih={};function Zr(r){r in Ih||(Ih[r]=!0,console.warn(r))}function Ip(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Np(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Up(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Mt={enabled:!0,workingColorSpace:Pn,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ct&&(r.r=Vi(r.r),r.g=Vi(r.g),r.b=Vi(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ct&&(r.r=lr(r.r),r.g=lr(r.g),r.b=lr(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ki?Da:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Vi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function lr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Nh=[.64,.33,.3,.6,.15,.06],Uh=[.2126,.7152,.0722],Oh=[.3127,.329],Fh=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kh=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Mt.define({[Pn]:{primaries:Nh,whitePoint:Oh,transfer:Da,toXYZ:Fh,fromXYZ:kh,luminanceCoefficients:Uh,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:Nh,whitePoint:Oh,transfer:Ct,toXYZ:Fh,fromXYZ:kh,luminanceCoefficients:Uh,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}});let ks;class Op{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ks===void 0&&(ks=uo("canvas")),ks.width=e.width,ks.height=e.height;const n=ks.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ks}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=uo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Vi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vi(t[n]/255)*255):t[n]=Vi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fp=0;class Nf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=ti(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Ka(i[o].image)):s.push(Ka(i[o]))}else s=Ka(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ka(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Op.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kp=0;class nn extends br{constructor(e=nn.DEFAULT_IMAGE,t=nn.DEFAULT_MAPPING,n=Qi,i=Qi,s=Gn,o=Bi,a=Wn,l=wi,c=nn.DEFAULT_ANISOTROPY,u=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=ti(),this.name="",this.source=new Nf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xn:e.x=e.x-Math.floor(e.x);break;case Qi:e.x=e.x<0?0:1;break;case wa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xn:e.y=e.y-Math.floor(e.y);break;case Qi:e.y=e.y<0?0:1;break;case wa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=yf;nn.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,n=0,i=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,_=(d+1)/2,C=(p+1)/2,w=(u+f)/4,E=(h+v)/4,P=(m+g)/4;return M>_&&M>C?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=w/n,s=E/n):_>C?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=w/i,s=P/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=E/s,i=P/s),this.set(n,i,s,t),this}let x=Math.sqrt((g-m)*(g-m)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(h-v)/x,this.z=(f-u)/x,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bp extends br{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new nn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Nf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tn extends Bp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Uf extends nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zp extends nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],m=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=v;return}if(h!==v||l!==f||c!==d||u!==m){let g=1-a;const p=l*f+c*d+u*m+h*v,x=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const C=Math.sqrt(M),w=Math.atan2(C,p*x);g=Math.sin(g*w)/C,a=Math.sin(a*w)/C}const _=a*x;if(l=l*g+f*_,c=c*g+d*_,u=u*g+m*_,h=h*g+v*_,g===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],m=s[o+3];return e[t]=a*m+u*h+l*d-c*f,e[t+1]=l*m+u*f+c*h-a*d,e[t+2]=c*m+u*d+a*f-l*h,e[t+3]=u*m-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Za.copy(this).projectOnVector(e),this.sub(Za)}reflect(e){return this.sub(Za.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Za=new D,Bh=new gi;class si{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,li):li.fromBufferAttribute(s,o),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),To.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),To.copy(n.boundingBox)),To.applyMatrix4(e.matrixWorld),this.union(To)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ir),Eo.subVectors(this.max,Ir),Bs.subVectors(e.a,Ir),zs.subVectors(e.b,Ir),Vs.subVectors(e.c,Ir),Xi.subVectors(zs,Bs),qi.subVectors(Vs,zs),hs.subVectors(Bs,Vs);let t=[0,-Xi.z,Xi.y,0,-qi.z,qi.y,0,-hs.z,hs.y,Xi.z,0,-Xi.x,qi.z,0,-qi.x,hs.z,0,-hs.x,-Xi.y,Xi.x,0,-qi.y,qi.x,0,-hs.y,hs.x,0];return!$a(t,Bs,zs,Vs,Eo)||(t=[1,0,0,0,1,0,0,0,1],!$a(t,Bs,zs,Vs,Eo))?!1:(Ao.crossVectors(Xi,qi),t=[Ao.x,Ao.y,Ao.z],$a(t,Bs,zs,Vs,Eo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ci=[new D,new D,new D,new D,new D,new D,new D,new D],li=new D,To=new si,Bs=new D,zs=new D,Vs=new D,Xi=new D,qi=new D,hs=new D,Ir=new D,Eo=new D,Ao=new D,us=new D;function $a(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){us.fromArray(r,s);const a=i.x*Math.abs(us.x)+i.y*Math.abs(us.y)+i.z*Math.abs(us.z),l=e.dot(us),c=t.dot(us),u=n.dot(us);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Vp=new si,Nr=new D,Ja=new D;class vi{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Vp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Nr.subVectors(e,this.center);const t=Nr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Nr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ja.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Nr.copy(e.center).add(Ja)),this.expandByPoint(Nr.copy(e.center).sub(Ja))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pi=new D,Qa=new D,Ro=new D,Yi=new D,el=new D,Co=new D,tl=new D;class wr{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,t),Pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Qa.copy(e).add(t).multiplyScalar(.5),Ro.copy(t).sub(e).normalize(),Yi.copy(this.origin).sub(Qa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ro),a=Yi.dot(this.direction),l=-Yi.dot(Ro),c=Yi.lengthSq(),u=Math.abs(1-o*o);let h,f,d,m;if(u>0)if(h=o*l-a,f=o*a-l,m=s*u,h>=0)if(f>=-m)if(f<=m){const v=1/u;h*=v,f*=v,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Qa).addScaledVector(Ro,f),d}intersectSphere(e,t){Pi.subVectors(e.center,this.origin);const n=Pi.dot(this.direction),i=Pi.dot(Pi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,t,n,i,s){el.subVectors(t,e),Co.subVectors(n,e),tl.crossVectors(el,Co);let o=this.direction.dot(tl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yi.subVectors(this.origin,e);const l=a*this.direction.dot(Co.crossVectors(Yi,Co));if(l<0)return null;const c=a*this.direction.dot(el.cross(Yi));if(c<0||l+c>o)return null;const u=-a*Yi.dot(tl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,t,n,i,s,o,a,l,c,u,h,f,d,m,v,g){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,d,m,v,g)}set(e,t,n,i,s,o,a,l,c,u,h,f,d,m,v,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Hs.setFromMatrixColumn(e,0).length(),s=1/Hs.setFromMatrixColumn(e,1).length(),o=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,m=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+m*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,m=c*u,v=c*h;t[0]=f+v*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-m,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,m=c*u,v=c*h;t[0]=f-v*a,t[4]=-o*h,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,m=a*u,v=a*h;t[0]=l*u,t[4]=m*c-d,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,m=a*l,v=a*c;t[0]=l*u,t[4]=v-f*h,t[8]=m*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+m,t[10]=f-v*h}else if(e.order==="XZY"){const f=o*l,d=o*c,m=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=o*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=a*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hp,e,Gp)}lookAt(e,t,n){const i=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),ji.crossVectors(n,Bn),ji.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),ji.crossVectors(n,Bn)),ji.normalize(),Po.crossVectors(Bn,ji),i[0]=ji.x,i[4]=Po.x,i[8]=Bn.x,i[1]=ji.y,i[5]=Po.y,i[9]=Bn.y,i[2]=ji.z,i[6]=Po.z,i[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],v=n[6],g=n[10],p=n[14],x=n[3],M=n[7],_=n[11],C=n[15],w=i[0],E=i[4],P=i[8],y=i[12],S=i[1],R=i[5],F=i[9],B=i[13],O=i[2],V=i[6],G=i[10],j=i[14],W=i[3],J=i[7],le=i[11],ve=i[15];return s[0]=o*w+a*S+l*O+c*W,s[4]=o*E+a*R+l*V+c*J,s[8]=o*P+a*F+l*G+c*le,s[12]=o*y+a*B+l*j+c*ve,s[1]=u*w+h*S+f*O+d*W,s[5]=u*E+h*R+f*V+d*J,s[9]=u*P+h*F+f*G+d*le,s[13]=u*y+h*B+f*j+d*ve,s[2]=m*w+v*S+g*O+p*W,s[6]=m*E+v*R+g*V+p*J,s[10]=m*P+v*F+g*G+p*le,s[14]=m*y+v*B+g*j+p*ve,s[3]=x*w+M*S+_*O+C*W,s[7]=x*E+M*R+_*V+C*J,s[11]=x*P+M*F+_*G+C*le,s[15]=x*y+M*B+_*j+C*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],v=e[7],g=e[11],p=e[15];return m*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*d-n*l*d)+v*(+t*l*d-t*c*f+s*o*f-i*o*d+i*c*u-s*l*u)+g*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],v=e[13],g=e[14],p=e[15],x=h*g*c-v*f*c+v*l*d-a*g*d-h*l*p+a*f*p,M=m*f*c-u*g*c-m*l*d+o*g*d+u*l*p-o*f*p,_=u*v*c-m*h*c+m*a*d-o*v*d-u*a*p+o*h*p,C=m*h*l-u*v*l-m*a*f+o*v*f+u*a*g-o*h*g,w=t*x+n*M+i*_+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=x*E,e[1]=(v*f*s-h*g*s-v*i*d+n*g*d+h*i*p-n*f*p)*E,e[2]=(a*g*s-v*l*s+v*i*c-n*g*c-a*i*p+n*l*p)*E,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*E,e[4]=M*E,e[5]=(u*g*s-m*f*s+m*i*d-t*g*d-u*i*p+t*f*p)*E,e[6]=(m*l*s-o*g*s-m*i*c+t*g*c+o*i*p-t*l*p)*E,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*d+t*l*d)*E,e[8]=_*E,e[9]=(m*h*s-u*v*s-m*n*d+t*v*d+u*n*p-t*h*p)*E,e[10]=(o*v*s-m*a*s+m*n*c-t*v*c-o*n*p+t*a*p)*E,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*E,e[12]=C*E,e[13]=(u*v*i-m*h*i+m*n*f-t*v*f-u*n*g+t*h*g)*E,e[14]=(m*a*i-o*v*i-m*n*l+t*v*l+o*n*g-t*a*g)*E,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,m=s*h,v=o*u,g=o*h,p=a*h,x=l*c,M=l*u,_=l*h,C=n.x,w=n.y,E=n.z;return i[0]=(1-(v+p))*C,i[1]=(d+_)*C,i[2]=(m-M)*C,i[3]=0,i[4]=(d-_)*w,i[5]=(1-(f+p))*w,i[6]=(g+x)*w,i[7]=0,i[8]=(m+M)*E,i[9]=(g-x)*E,i[10]=(1-(f+v))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Hs.set(i[0],i[1],i[2]).length();const o=Hs.set(i[4],i[5],i[6]).length(),a=Hs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ci.copy(this);const c=1/s,u=1/o,h=1/a;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=u,ci.elements[5]*=u,ci.elements[6]*=u,ci.elements[8]*=h,ci.elements[9]*=h,ci.elements[10]*=h,t.setFromRotationMatrix(ci),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=zi){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,m;if(a===zi)d=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===Ta)d=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=zi){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),f=(t+e)*c,d=(n+i)*u;let m,v;if(a===zi)m=(o+s)*h,v=-2*h;else if(a===Ta)m=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Hs=new D,ci=new Qe,Hp=new D(0,0,0),Gp=new D(1,1,1),ji=new D,Po=new D,Bn=new D,zh=new Qe,Vh=new gi;class Ti{constructor(e=0,t=0,n=0,i=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vh.setFromEuler(this),this.setFromQuaternion(Vh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class $c{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Wp=0;const Hh=new D,Gs=new gi,Li=new Qe,Lo=new D,Ur=new D,Xp=new D,qp=new gi,Gh=new D(1,0,0),Wh=new D(0,1,0),Xh=new D(0,0,1),qh={type:"added"},Yp={type:"removed"},Ws={type:"childadded",child:null},nl={type:"childremoved",child:null};class Ut extends br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new D,t=new Ti,n=new gi,i=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Qe},normalMatrix:{value:new ut}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $c,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(Gh,e)}rotateY(e){return this.rotateOnAxis(Wh,e)}rotateZ(e){return this.rotateOnAxis(Xh,e)}translateOnAxis(e,t){return Hh.copy(e).applyQuaternion(this.quaternion),this.position.add(Hh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gh,e)}translateY(e){return this.translateOnAxis(Wh,e)}translateZ(e){return this.translateOnAxis(Xh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Lo.copy(e):Lo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Ur,Lo,this.up):Li.lookAt(Lo,Ur,this.up),this.quaternion.setFromRotationMatrix(Li),i&&(Li.extractRotation(i.matrixWorld),Gs.setFromRotationMatrix(Li),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qh),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yp),nl.child=e,this.dispatchEvent(nl),nl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qh),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,e,Xp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,qp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ut.DEFAULT_UP=new D(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new D,Di=new D,il=new D,Ii=new D,Xs=new D,qs=new D,Yh=new D,sl=new D,rl=new D,ol=new D,al=new bt,ll=new bt,cl=new bt;class ei{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),hi.subVectors(e,t),i.cross(hi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){hi.subVectors(i,t),Di.subVectors(n,t),il.subVectors(e,t);const o=hi.dot(hi),a=hi.dot(Di),l=hi.dot(il),c=Di.dot(Di),u=Di.dot(il),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,m=(o*u-a*l)*f;return s.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ii.x),l.addScaledVector(o,Ii.y),l.addScaledVector(a,Ii.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return al.setScalar(0),ll.setScalar(0),cl.setScalar(0),al.fromBufferAttribute(e,t),ll.fromBufferAttribute(e,n),cl.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(al,s.x),o.addScaledVector(ll,s.y),o.addScaledVector(cl,s.z),o}static isFrontFacing(e,t,n,i){return hi.subVectors(n,t),Di.subVectors(e,t),hi.cross(Di).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),hi.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return ei.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Xs.subVectors(i,n),qs.subVectors(s,n),sl.subVectors(e,n);const l=Xs.dot(sl),c=qs.dot(sl);if(l<=0&&c<=0)return t.copy(n);rl.subVectors(e,i);const u=Xs.dot(rl),h=qs.dot(rl);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Xs,o);ol.subVectors(e,s);const d=Xs.dot(ol),m=qs.dot(ol);if(m>=0&&d<=m)return t.copy(s);const v=d*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(qs,a);const g=u*m-d*h;if(g<=0&&h-u>=0&&d-m>=0)return Yh.subVectors(s,i),a=(h-u)/(h-u+(d-m)),t.copy(i).addScaledVector(Yh,a);const p=1/(g+v+f);return o=v*p,a=f*p,t.copy(n).addScaledVector(Xs,o).addScaledVector(qs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Of={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},Do={h:0,s:0,l:0};function hl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Mt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Mt.workingColorSpace){if(e=Zc(e,1),t=tn(t,0,1),n=tn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=hl(o,s,e+1/3),this.g=hl(o,s,e),this.b=hl(o,s,e-1/3)}return Mt.toWorkingColorSpace(this,i),this}setStyle(e,t=Ot){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const n=Of[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return Mt.fromWorkingColorSpace(bn.copy(this),e),Math.round(tn(bn.r*255,0,255))*65536+Math.round(tn(bn.g*255,0,255))*256+Math.round(tn(bn.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.fromWorkingColorSpace(bn.copy(this),t);const n=bn.r,i=bn.g,s=bn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=Ot){Mt.fromWorkingColorSpace(bn.copy(this),e);const t=bn.r,n=bn.g,i=bn.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+t,Ki.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ki),e.getHSL(Do);const n=to(Ki.h,Do.h,t),i=to(Ki.s,Do.s,t),s=to(Ki.l,Do.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new Xe;Xe.NAMES=Of;let jp=0;class ni extends br{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=ti(),this.name="",this.blending=or,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zl,this.blendDst=Vl,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==or&&(n.blending=this.blending),this.side!==Hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zl&&(n.blendSrc=this.blendSrc),this.blendDst!==Vl&&(n.blendDst=this.blendDst),this.blendEquation!==fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ph&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Si extends ni{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=pf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new D,Io=new re;class Gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Tc,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Io.fromBufferAttribute(this,t),Io.applyMatrix3(e),this.setXY(t,Io.x,Io.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=di(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=di(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=di(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=di(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tc&&(e.usage=this.usage),e}}class Ff extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class kf extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class _t extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Kp=0;const Kn=new Qe,ul=new Ut,Ys=new D,zn=new si,Or=new si,cn=new D;class Vt extends br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(If(e)?kf:Ff)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ut().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,n){return Kn.makeTranslation(e,t,n),this.applyMatrix4(Kn),this}scale(e,t,n){return Kn.makeScale(e,t,n),this.applyMatrix4(Kn),this}lookAt(e){return ul.lookAt(e),ul.updateMatrix(),this.applyMatrix4(ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _t(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];zn.setFromBufferAttribute(s),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Or.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(zn.min,Or.min),zn.expandByPoint(cn),cn.addVectors(zn.max,Or.max),zn.expandByPoint(cn)):(zn.expandByPoint(Or.min),zn.expandByPoint(Or.max))}zn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)cn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(cn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)cn.fromBufferAttribute(a,c),l&&(Ys.fromBufferAttribute(e,c),cn.add(Ys)),i=Math.max(i,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new D,l[P]=new D;const c=new D,u=new D,h=new D,f=new re,d=new re,m=new re,v=new D,g=new D;function p(P,y,S){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,S),f.fromBufferAttribute(s,P),d.fromBufferAttribute(s,y),m.fromBufferAttribute(s,S),u.sub(c),h.sub(c),d.sub(f),m.sub(f);const R=1/(d.x*m.y-m.x*d.y);isFinite(R)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(R),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(R),a[P].add(v),a[y].add(v),a[S].add(v),l[P].add(g),l[y].add(g),l[S].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,y=x.length;P<y;++P){const S=x[P],R=S.start,F=S.count;for(let B=R,O=R+F;B<O;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const M=new D,_=new D,C=new D,w=new D;function E(P){C.fromBufferAttribute(i,P),w.copy(C);const y=a[P];M.copy(y),M.sub(C.multiplyScalar(C.dot(y))).normalize(),_.crossVectors(w,y);const R=_.dot(l[P])<0?-1:1;o.setXYZW(P,M.x,M.y,M.z,R)}for(let P=0,y=x.length;P<y;++P){const S=x[P],R=S.start,F=S.count;for(let B=R,O=R+F;B<O;B+=3)E(e.getX(B+0)),E(e.getX(B+1)),E(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new D,s=new D,o=new D,a=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){const m=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,m=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*u;for(let p=0;p<u;p++)f[m++]=c[d++]}return new Gt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jh=new Qe,fs=new wr,No=new vi,Kh=new D,Uo=new D,Oo=new D,Fo=new D,fl=new D,ko=new D,Zh=new D,Bo=new D;class oe extends Ut{constructor(e=new Vt,t=new Si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){ko.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(fl.fromBufferAttribute(h,e),o?ko.addScaledVector(fl,u):ko.addScaledVector(fl.sub(t),u))}t.add(ko)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(s),fs.copy(e.ray).recast(e.near),!(No.containsPoint(fs.origin)===!1&&(fs.intersectSphere(No,Kh)===null||fs.origin.distanceToSquared(Kh)>(e.far-e.near)**2))&&(jh.copy(s).invert(),fs.copy(e.ray).applyMatrix4(jh),!(n.boundingBox!==null&&fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fs)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=f.length;m<v;m++){const g=f[m],p=o[g.materialIndex],x=Math.max(g.start,d.start),M=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let _=x,C=M;_<C;_+=3){const w=a.getX(_),E=a.getX(_+1),P=a.getX(_+2);i=zo(this,p,e,n,c,u,h,w,E,P),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){const x=a.getX(g),M=a.getX(g+1),_=a.getX(g+2);i=zo(this,o,e,n,c,u,h,x,M,_),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=f.length;m<v;m++){const g=f[m],p=o[g.materialIndex],x=Math.max(g.start,d.start),M=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let _=x,C=M;_<C;_+=3){const w=_,E=_+1,P=_+2;i=zo(this,p,e,n,c,u,h,w,E,P),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){const x=g,M=g+1,_=g+2;i=zo(this,o,e,n,c,u,h,x,M,_),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function Zp(r,e,t,n,i,s,o,a){let l;if(e.side===On?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Hi,a),l===null)return null;Bo.copy(a),Bo.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Bo);return c<t.near||c>t.far?null:{distance:c,point:Bo.clone(),object:r}}function zo(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Uo),r.getVertexPosition(l,Oo),r.getVertexPosition(c,Fo);const u=Zp(r,e,t,n,Uo,Oo,Fo,Zh);if(u){const h=new D;ei.getBarycoord(Zh,Uo,Oo,Fo,h),i&&(u.uv=ei.getInterpolatedAttribute(i,a,l,c,h,new re)),s&&(u.uv1=ei.getInterpolatedAttribute(s,a,l,c,h,new re)),o&&(u.normal=ei.getInterpolatedAttribute(o,a,l,c,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new D,materialIndex:0};ei.getNormal(Uo,Oo,Fo,f.normal),u.face=f,u.barycoord=h}return u}class Bt extends Vt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(h,2));function m(v,g,p,x,M,_,C,w,E,P,y){const S=_/E,R=C/P,F=_/2,B=C/2,O=w/2,V=E+1,G=P+1;let j=0,W=0;const J=new D;for(let le=0;le<G;le++){const ve=le*R-B;for(let Ne=0;Ne<V;Ne++){const Ze=Ne*S-F;J[v]=Ze*x,J[g]=ve*M,J[p]=O,c.push(J.x,J.y,J.z),J[v]=0,J[g]=0,J[p]=w>0?1:-1,u.push(J.x,J.y,J.z),h.push(Ne/E),h.push(1-le/P),j+=1}}for(let le=0;le<P;le++)for(let ve=0;ve<E;ve++){const Ne=f+ve+V*le,Ze=f+ve+V*(le+1),$=f+(ve+1)+V*(le+1),fe=f+(ve+1)+V*le;l.push(Ne,Ze,fe),l.push(Ze,$,fe),W+=6}a.addGroup(d,W,y),d+=W,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Rn(r){const e={};for(let t=0;t<r.length;t++){const n=gr(r[t]);for(const i in n)e[i]=n[i]}return e}function $p(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Bf(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const Hn={clone:gr,merge:Rn};var Jp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zt extends ni{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jp,this.fragmentShader=Qp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gr(e.uniforms),this.uniformsGroups=$p(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class zf extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new D,$h=new re,Jh=new re;class wn extends zf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(eo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mr*2*Math.atan(Math.tan(eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,t){return this.getViewBounds(e,$h,Jh),t.subVectors(Jh,$h)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(eo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const js=-90,Ks=1;class e0 extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new wn(js,Ks,e,t);i.layers=this.layers,this.add(i);const s=new wn(js,Ks,e,t);s.layers=this.layers,this.add(s);const o=new wn(js,Ks,e,t);o.layers=this.layers,this.add(o);const a=new wn(js,Ks,e,t);a.layers=this.layers,this.add(a);const l=new wn(js,Ks,e,t);l.layers=this.layers,this.add(l);const c=new wn(js,Ks,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===zi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ta)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Vf extends nn{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:dr,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class t0 extends Tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Vf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Bt(5,5,5),s=new zt({name:"CubemapFromEquirect",uniforms:gr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:On,blending:hn});s.uniforms.tEquirect.value=t;const o=new oe(i,s),a=t.minFilter;return t.minFilter===Bi&&(t.minFilter=Gn),new e0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const dl=new D,n0=new D,i0=new ut;class Ji{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=dl.subVectors(n,t).cross(n0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(dl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||i0.getNormalMatrix(e),i=this.coplanarPoint(dl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ds=new vi,Vo=new D;class Jc{constructor(e=new Ji,t=new Ji,n=new Ji,i=new Ji,s=new Ji,o=new Ji){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zi){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],m=i[9],v=i[10],g=i[11],p=i[12],x=i[13],M=i[14],_=i[15];if(n[0].setComponents(l-s,f-c,g-d,_-p).normalize(),n[1].setComponents(l+s,f+c,g+d,_+p).normalize(),n[2].setComponents(l+o,f+u,g+m,_+x).normalize(),n[3].setComponents(l-o,f-u,g-m,_-x).normalize(),n[4].setComponents(l-a,f-h,g-v,_-M).normalize(),t===zi)n[5].setComponents(l+a,f+h,g+v,_+M).normalize();else if(t===Ta)n[5].setComponents(a,h,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){return ds.center.set(0,0,0),ds.radius=.7071067811865476,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Vo.x=i.normal.x>0?e.max.x:e.min.x,Vo.y=i.normal.y>0?e.max.y:e.min.y,Vo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Vo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hf(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function s0(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){const m=h[f],v=h[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++f,h[f]=v)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){const v=h[d];r.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class ii extends Vt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],m=[],v=[],g=[];for(let p=0;p<u;p++){const x=p*f-o;for(let M=0;M<c;M++){const _=M*h-s;m.push(_,-x,0),v.push(0,0,1),g.push(M/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const M=x+c*p,_=x+c*(p+1),C=x+1+c*(p+1),w=x+1+c*p;d.push(M,_,w),d.push(_,C,w)}this.setIndex(d),this.setAttribute("position",new _t(m,3)),this.setAttribute("normal",new _t(v,3)),this.setAttribute("uv",new _t(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ii(e.width,e.height,e.widthSegments,e.heightSegments)}}var r0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,o0=`#ifdef USE_ALPHAHASH
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
#endif`,a0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,l0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,h0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,u0=`#ifdef USE_AOMAP
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
#endif`,f0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,d0=`#ifdef USE_BATCHING
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
#endif`,p0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,m0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,g0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,v0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,x0=`#ifdef USE_IRIDESCENCE
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
#endif`,_0=`#ifdef USE_BUMPMAP
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
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,w0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,T0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,A0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,R0=`#define PI 3.141592653589793
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
} // validated`,C0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,P0=`vec3 transformedNormal = objectNormal;
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
#endif`,L0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,D0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,I0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,N0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,U0="gl_FragColor = linearToOutputTexel( gl_FragColor );",O0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,F0=`#ifdef USE_ENVMAP
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
#endif`,k0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,B0=`#ifdef USE_ENVMAP
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
#endif`,z0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V0=`#ifdef USE_ENVMAP
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
#endif`,H0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,G0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,W0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,X0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,q0=`#ifdef USE_GRADIENTMAP
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
}`,Y0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,K0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Z0=`uniform bool receiveShadow;
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
#endif`,$0=`#ifdef USE_ENVMAP
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
#endif`,J0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nm=`PhysicalMaterial material;
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
#endif`,im=`struct PhysicalMaterial {
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
}`,sm=`
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
#endif`,rm=`#if defined( RE_IndirectDiffuse )
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
#endif`,om=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,am=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,um=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pm=`#if defined( USE_POINTS_UV )
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
#endif`,mm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_m=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ym=`#ifdef USE_MORPHTARGETS
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
#endif`,Mm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Em=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Am=`#ifdef USE_NORMALMAP
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
#endif`,Rm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Im=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Nm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Um=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Om=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,km=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gm=`float getShadowMask() {
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
}`,Wm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xm=`#ifdef USE_SKINNING
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
#endif`,qm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ym=`#ifdef USE_SKINNING
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
#endif`,jm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Km=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$m=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jm=`#ifdef USE_TRANSMISSION
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
#endif`,Qm=`#ifdef USE_TRANSMISSION
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
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ig=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rg=`uniform sampler2D t2D;
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
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ag=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`#include <common>
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
}`,ug=`#if DEPTH_PACKING == 3200
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
}`,fg=`#define DISTANCE
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
}`,dg=`#define DISTANCE
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
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`uniform float scale;
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
}`,vg=`uniform vec3 diffuse;
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
}`,xg=`#include <common>
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
}`,_g=`uniform vec3 diffuse;
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
}`,yg=`#define LAMBERT
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
}`,Mg=`#define LAMBERT
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
}`,Sg=`#define MATCAP
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
}`,bg=`#define MATCAP
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
}`,wg=`#define NORMAL
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
}`,Tg=`#define NORMAL
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
}`,Eg=`#define PHONG
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
}`,Ag=`#define PHONG
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
}`,Rg=`#define STANDARD
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
}`,Cg=`#define STANDARD
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
}`,Pg=`#define TOON
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
}`,Lg=`#define TOON
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
}`,Dg=`uniform float size;
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
}`,Ig=`uniform vec3 diffuse;
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
}`,Ng=`#include <common>
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
}`,Ug=`uniform vec3 color;
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
}`,Og=`uniform float rotation;
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
}`,Fg=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:r0,alphahash_pars_fragment:o0,alphamap_fragment:a0,alphamap_pars_fragment:l0,alphatest_fragment:c0,alphatest_pars_fragment:h0,aomap_fragment:u0,aomap_pars_fragment:f0,batching_pars_vertex:d0,batching_vertex:p0,begin_vertex:m0,beginnormal_vertex:g0,bsdfs:v0,iridescence_fragment:x0,bumpmap_pars_fragment:_0,clipping_planes_fragment:y0,clipping_planes_pars_fragment:M0,clipping_planes_pars_vertex:S0,clipping_planes_vertex:b0,color_fragment:w0,color_pars_fragment:T0,color_pars_vertex:E0,color_vertex:A0,common:R0,cube_uv_reflection_fragment:C0,defaultnormal_vertex:P0,displacementmap_pars_vertex:L0,displacementmap_vertex:D0,emissivemap_fragment:I0,emissivemap_pars_fragment:N0,colorspace_fragment:U0,colorspace_pars_fragment:O0,envmap_fragment:F0,envmap_common_pars_fragment:k0,envmap_pars_fragment:B0,envmap_pars_vertex:z0,envmap_physical_pars_fragment:$0,envmap_vertex:V0,fog_vertex:H0,fog_pars_vertex:G0,fog_fragment:W0,fog_pars_fragment:X0,gradientmap_pars_fragment:q0,lightmap_pars_fragment:Y0,lights_lambert_fragment:j0,lights_lambert_pars_fragment:K0,lights_pars_begin:Z0,lights_toon_fragment:J0,lights_toon_pars_fragment:Q0,lights_phong_fragment:em,lights_phong_pars_fragment:tm,lights_physical_fragment:nm,lights_physical_pars_fragment:im,lights_fragment_begin:sm,lights_fragment_maps:rm,lights_fragment_end:om,logdepthbuf_fragment:am,logdepthbuf_pars_fragment:lm,logdepthbuf_pars_vertex:cm,logdepthbuf_vertex:hm,map_fragment:um,map_pars_fragment:fm,map_particle_fragment:dm,map_particle_pars_fragment:pm,metalnessmap_fragment:mm,metalnessmap_pars_fragment:gm,morphinstance_vertex:vm,morphcolor_vertex:xm,morphnormal_vertex:_m,morphtarget_pars_vertex:ym,morphtarget_vertex:Mm,normal_fragment_begin:Sm,normal_fragment_maps:bm,normal_pars_fragment:wm,normal_pars_vertex:Tm,normal_vertex:Em,normalmap_pars_fragment:Am,clearcoat_normal_fragment_begin:Rm,clearcoat_normal_fragment_maps:Cm,clearcoat_pars_fragment:Pm,iridescence_pars_fragment:Lm,opaque_fragment:Dm,packing:Im,premultiplied_alpha_fragment:Nm,project_vertex:Um,dithering_fragment:Om,dithering_pars_fragment:Fm,roughnessmap_fragment:km,roughnessmap_pars_fragment:Bm,shadowmap_pars_fragment:zm,shadowmap_pars_vertex:Vm,shadowmap_vertex:Hm,shadowmask_pars_fragment:Gm,skinbase_vertex:Wm,skinning_pars_vertex:Xm,skinning_vertex:qm,skinnormal_vertex:Ym,specularmap_fragment:jm,specularmap_pars_fragment:Km,tonemapping_fragment:Zm,tonemapping_pars_fragment:$m,transmission_fragment:Jm,transmission_pars_fragment:Qm,uv_pars_fragment:eg,uv_pars_vertex:tg,uv_vertex:ng,worldpos_vertex:ig,background_vert:sg,background_frag:rg,backgroundCube_vert:og,backgroundCube_frag:ag,cube_vert:lg,cube_frag:cg,depth_vert:hg,depth_frag:ug,distanceRGBA_vert:fg,distanceRGBA_frag:dg,equirect_vert:pg,equirect_frag:mg,linedashed_vert:gg,linedashed_frag:vg,meshbasic_vert:xg,meshbasic_frag:_g,meshlambert_vert:yg,meshlambert_frag:Mg,meshmatcap_vert:Sg,meshmatcap_frag:bg,meshnormal_vert:wg,meshnormal_frag:Tg,meshphong_vert:Eg,meshphong_frag:Ag,meshphysical_vert:Rg,meshphysical_frag:Cg,meshtoon_vert:Pg,meshtoon_frag:Lg,points_vert:Dg,points_frag:Ig,shadow_vert:Ng,shadow_frag:Ug,sprite_vert:Og,sprite_frag:Fg},Te={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},yi={basic:{uniforms:Rn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Rn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Xe(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Rn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Rn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Rn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Xe(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Rn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Rn([Te.points,Te.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Rn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Rn([Te.common,Te.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Rn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Rn([Te.sprite,Te.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:Rn([Te.common,Te.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:Rn([Te.lights,Te.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};yi.physical={uniforms:Rn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Ho={r:0,b:0,g:0},ps=new Ti,kg=new Qe;function Bg(r,e,t,n,i,s,o){const a=new Xe(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function m(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?t:e).get(M)),M}function v(x){let M=!1;const _=m(x);_===null?p(a,l):_&&_.isColor&&(p(_,1),M=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(x,M){const _=m(M);_&&(_.isCubeTexture||_.mapping===La)?(u===void 0&&(u=new oe(new Bt(1,1,1),new zt({name:"BackgroundCubeMaterial",uniforms:gr(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),ps.copy(M.backgroundRotation),ps.x*=-1,ps.y*=-1,ps.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(kg.makeRotationFromEuler(ps)),u.material.toneMapped=Mt.getTransfer(_.colorSpace)!==Ct,(h!==_||f!==_.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,d=r.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new oe(new ii(2,2),new zt({name:"BackgroundMaterial",uniforms:gr(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Mt.getTransfer(_.colorSpace)!==Ct,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,d=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,M){x.getRGB(Ho,Bf(r)),n.buffers.color.setClear(Ho.r,Ho.g,Ho.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:v,addToRenderList:g}}function zg(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(S,R,F,B,O){let V=!1;const G=h(B,F,R);s!==G&&(s=G,c(s.object)),V=d(S,B,F,O),V&&m(S,B,F,O),O!==null&&e.update(O,r.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,_(S,R,F,B),O!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function u(S){return r.deleteVertexArray(S)}function h(S,R,F){const B=F.wireframe===!0;let O=n[S.id];O===void 0&&(O={},n[S.id]=O);let V=O[R.id];V===void 0&&(V={},O[R.id]=V);let G=V[B];return G===void 0&&(G=f(l()),V[B]=G),G}function f(S){const R=[],F=[],B=[];for(let O=0;O<t;O++)R[O]=0,F[O]=0,B[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:B,object:S,attributes:{},index:null}}function d(S,R,F,B){const O=s.attributes,V=R.attributes;let G=0;const j=F.getAttributes();for(const W in j)if(j[W].location>=0){const le=O[W];let ve=V[W];if(ve===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(ve=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(ve=S.instanceColor)),le===void 0||le.attribute!==ve||ve&&le.data!==ve.data)return!0;G++}return s.attributesNum!==G||s.index!==B}function m(S,R,F,B){const O={},V=R.attributes;let G=0;const j=F.getAttributes();for(const W in j)if(j[W].location>=0){let le=V[W];le===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(le=S.instanceColor));const ve={};ve.attribute=le,le&&le.data&&(ve.data=le.data),O[W]=ve,G++}s.attributes=O,s.attributesNum=G,s.index=B}function v(){const S=s.newAttributes;for(let R=0,F=S.length;R<F;R++)S[R]=0}function g(S){p(S,0)}function p(S,R){const F=s.newAttributes,B=s.enabledAttributes,O=s.attributeDivisors;F[S]=1,B[S]===0&&(r.enableVertexAttribArray(S),B[S]=1),O[S]!==R&&(r.vertexAttribDivisor(S,R),O[S]=R)}function x(){const S=s.newAttributes,R=s.enabledAttributes;for(let F=0,B=R.length;F<B;F++)R[F]!==S[F]&&(r.disableVertexAttribArray(F),R[F]=0)}function M(S,R,F,B,O,V,G){G===!0?r.vertexAttribIPointer(S,R,F,O,V):r.vertexAttribPointer(S,R,F,B,O,V)}function _(S,R,F,B){v();const O=B.attributes,V=F.getAttributes(),G=R.defaultAttributeValues;for(const j in V){const W=V[j];if(W.location>=0){let J=O[j];if(J===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(J=S.instanceColor)),J!==void 0){const le=J.normalized,ve=J.itemSize,Ne=e.get(J);if(Ne===void 0)continue;const Ze=Ne.buffer,$=Ne.type,fe=Ne.bytesPerElement,Re=$===r.INT||$===r.UNSIGNED_INT||J.gpuType===Hc;if(J.isInterleavedBufferAttribute){const de=J.data,De=de.stride,Ve=J.offset;if(de.isInstancedInterleavedBuffer){for(let ke=0;ke<W.locationSize;ke++)p(W.location+ke,de.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ke=0;ke<W.locationSize;ke++)g(W.location+ke);r.bindBuffer(r.ARRAY_BUFFER,Ze);for(let ke=0;ke<W.locationSize;ke++)M(W.location+ke,ve/W.locationSize,$,le,De*fe,(Ve+ve/W.locationSize*ke)*fe,Re)}else{if(J.isInstancedBufferAttribute){for(let de=0;de<W.locationSize;de++)p(W.location+de,J.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let de=0;de<W.locationSize;de++)g(W.location+de);r.bindBuffer(r.ARRAY_BUFFER,Ze);for(let de=0;de<W.locationSize;de++)M(W.location+de,ve/W.locationSize,$,le,ve*fe,ve/W.locationSize*de*fe,Re)}}else if(G!==void 0){const le=G[j];if(le!==void 0)switch(le.length){case 2:r.vertexAttrib2fv(W.location,le);break;case 3:r.vertexAttrib3fv(W.location,le);break;case 4:r.vertexAttrib4fv(W.location,le);break;default:r.vertexAttrib1fv(W.location,le)}}}}x()}function C(){P();for(const S in n){const R=n[S];for(const F in R){const B=R[F];for(const O in B)u(B[O].object),delete B[O];delete R[F]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;const R=n[S.id];for(const F in R){const B=R[F];for(const O in B)u(B[O].object),delete B[O];delete R[F]}delete n[S.id]}function E(S){for(const R in n){const F=n[R];if(F[S.id]===void 0)continue;const B=F[S.id];for(const O in B)u(B[O].object),delete B[O];delete F[S.id]}}function P(){y(),o=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:y,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:g,disableUnusedAttributes:x}}function Vg(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let m=0;m<h;m++)d+=u[m];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],u[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let m=0;for(let v=0;v<h;v++)m+=u[v]*f[v];t.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Hg(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==Wn&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const P=E===Fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==wi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==mi&&!P)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:C,maxSamples:w}}function Gg(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Ji,a=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const m=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,p=r.get(h);if(!i||m===null||m.length===0||s&&!g)s?u(null):c();else{const x=s?0:n,M=x*4;let _=p.clippingState||null;l.value=_,_=u(m,f,M,d);for(let C=0;C!==M;++C)_[C]=t[C];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,m){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const p=d+v*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,_=d;M!==v;++M,_+=4)o.copy(h[M]).applyMatrix4(x,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function Wg(r){let e=new WeakMap;function t(o,a){return a===ba?o.mapping=dr:a===$l&&(o.mapping=pr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ba||a===$l)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new t0(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ia extends zf{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ir=4,Qh=[.125,.215,.35,.446,.526,.582],ws=20,pl=new Ia,eu=new Xe;let ml=null,gl=0,vl=0,xl=!1;const Ms=(1+Math.sqrt(5))/2,Zs=1/Ms,tu=[new D(-Ms,Zs,0),new D(Ms,Zs,0),new D(-Zs,0,Ms),new D(Zs,0,Ms),new D(0,Ms,-Zs),new D(0,Ms,Zs),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Ec{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),vl=this._renderer.getActiveMipmapLevel(),xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=su(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ml,gl,vl),this._renderer.xr.enabled=xl,e.scissorTest=!1,Go(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),vl=this._renderer.getActiveMipmapLevel(),xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Fn,format:Wn,colorSpace:Pn,depthBuffer:!1},i=nu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xg(s)),this._blurMaterial=qg(s,e,t)}return i}_compileMaterial(e){const t=new oe(this._lodPlanes[0],e);this._renderer.compile(t,pl)}_sceneToCubeUV(e,t,n,i){const a=new wn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(eu),u.toneMapping=ns,u.autoClear=!1;const d=new Si({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),m=new oe(new Bt,d);let v=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,v=!0):(d.color.copy(eu),v=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const M=this._cubeSize;Go(i,x*M,p>2?M:0,M,M),u.setRenderTarget(i),v&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===dr||e.mapping===pr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=su()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iu());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new oe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Go(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,pl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=tu[(i-s-1)%tu.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new oe(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ws-1),v=s/m,g=isFinite(s)?1+Math.floor(u*v):ws;g>ws&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ws}`);const p=[];let x=0;for(let E=0;E<ws;++E){const P=E/v,y=Math.exp(-P*P/2);p.push(y),E===0?x+=y:E<g&&(x+=2*y)}for(let E=0;E<p.length;E++)p[E]=p[E]/x;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=m,f.mipInt.value=M-n;const _=this._sizeLods[i],C=3*_*(i>M-ir?i-M+ir:0),w=4*(this._cubeSize-_);Go(t,C,w,3*_,2*_),l.setRenderTarget(t),l.render(h,pl)}}function Xg(r){const e=[],t=[],n=[];let i=r;const s=r-ir+1+Qh.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-ir?l=Qh[o-r+ir-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,m=6,v=3,g=2,p=1,x=new Float32Array(v*m*d),M=new Float32Array(g*m*d),_=new Float32Array(p*m*d);for(let w=0;w<d;w++){const E=w%3*2/3-1,P=w>2?0:-1,y=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];x.set(y,v*m*w),M.set(f,g*m*w);const S=[w,w,w,w,w,w];_.set(S,p*m*w)}const C=new Vt;C.setAttribute("position",new Gt(x,v)),C.setAttribute("uv",new Gt(M,g)),C.setAttribute("faceIndex",new Gt(_,p)),e.push(C),i>ir&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function nu(r,e,t){const n=new Tn(r,e,t);return n.texture.mapping=La,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Go(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function qg(r,e,t){const n=new Float32Array(ws),i=new D(0,1,0);return new zt({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:hn,depthTest:!1,depthWrite:!1})}function iu(){return new zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:hn,depthTest:!1,depthWrite:!1})}function su(){return new zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function Qc(){return`

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
	`}function Yg(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ba||l===$l,u=l===dr||l===pr;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Ec(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new Ec(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function jg(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Zr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Kg(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);for(const m in f.morphAttributes){const v=f.morphAttributes[m];for(let g=0,p=v.length;g<p;g++)e.remove(v[g])}f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const m in f)e.update(f[m],r.ARRAY_BUFFER);const d=h.morphAttributes;for(const m in d){const v=d[m];for(let g=0,p=v.length;g<p;g++)e.update(v[g],r.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,m=h.attributes.position;let v=0;if(d!==null){const x=d.array;v=d.version;for(let M=0,_=x.length;M<_;M+=3){const C=x[M+0],w=x[M+1],E=x[M+2];f.push(C,w,w,E,E,C)}}else if(m!==void 0){const x=m.array;v=m.version;for(let M=0,_=x.length/3-1;M<_;M+=3){const C=M+0,w=M+1,E=M+2;f.push(C,w,w,E,E,C)}}else return;const g=new(If(f)?kf:Ff)(f,1);g.version=v;const p=s.get(h);p&&e.remove(p),s.set(h,g)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Zg(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),t.update(d,n,1)}function c(f,d,m){m!==0&&(r.drawElementsInstanced(n,d,s,f*o,m),t.update(d,n,m))}function u(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,n,1)}function h(f,d,m,v){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,v,0,m);let p=0;for(let x=0;x<m;x++)p+=d[x]*v[x];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function $g(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Jg(r,e,t){const n=new WeakMap,i=new bt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let S=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var d=S;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let _=0;m===!0&&(_=1),v===!0&&(_=2),g===!0&&(_=3);let C=a.attributes.position.count*_,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const E=new Float32Array(C*w*4*h),P=new Uf(E,C,w,h);P.type=mi,P.needsUpdate=!0;const y=_*4;for(let R=0;R<h;R++){const F=p[R],B=x[R],O=M[R],V=C*w*4*R;for(let G=0;G<F.count;G++){const j=G*y;m===!0&&(i.fromBufferAttribute(F,G),E[V+j+0]=i.x,E[V+j+1]=i.y,E[V+j+2]=i.z,E[V+j+3]=0),v===!0&&(i.fromBufferAttribute(B,G),E[V+j+4]=i.x,E[V+j+5]=i.y,E[V+j+6]=i.z,E[V+j+7]=0),g===!0&&(i.fromBufferAttribute(O,G),E[V+j+8]=i.x,E[V+j+9]=i.y,E[V+j+10]=i.z,E[V+j+11]=O.itemSize===4?i.w:1)}}f={count:h,texture:P,size:new re(C,w)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",v),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Qg(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class eh extends nn{constructor(e,t,n,i,s,o,a,l,c,u=ar){if(u!==ar&&u!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ar&&(n=Rs),n===void 0&&u===Ps&&(n=Cs),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Zt,this.minFilter=l!==void 0?l:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Gf=new nn,ru=new eh(1,1),Wf=new Uf,Xf=new zp,qf=new Vf,ou=[],au=[],lu=new Float32Array(16),cu=new Float32Array(9),hu=new Float32Array(4);function Tr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=ou[i];if(s===void 0&&(s=new Float32Array(i),ou[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function sn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function rn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Na(r,e){let t=au[e];t===void 0&&(t=new Int32Array(e),au[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function ev(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function tv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2fv(this.addr,e),rn(t,e)}}function nv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;r.uniform3fv(this.addr,e),rn(t,e)}}function iv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4fv(this.addr,e),rn(t,e)}}function sv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;hu.set(n),r.uniformMatrix2fv(this.addr,!1,hu),rn(t,n)}}function rv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;cu.set(n),r.uniformMatrix3fv(this.addr,!1,cu),rn(t,n)}}function ov(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;lu.set(n),r.uniformMatrix4fv(this.addr,!1,lu),rn(t,n)}}function av(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function lv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2iv(this.addr,e),rn(t,e)}}function cv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;r.uniform3iv(this.addr,e),rn(t,e)}}function hv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4iv(this.addr,e),rn(t,e)}}function uv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function fv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2uiv(this.addr,e),rn(t,e)}}function dv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;r.uniform3uiv(this.addr,e),rn(t,e)}}function pv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4uiv(this.addr,e),rn(t,e)}}function mv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(ru.compareFunction=Df,s=ru):s=Gf,t.setTexture2D(e||s,i)}function gv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Xf,i)}function vv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||qf,i)}function xv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Wf,i)}function _v(r){switch(r){case 5126:return ev;case 35664:return tv;case 35665:return nv;case 35666:return iv;case 35674:return sv;case 35675:return rv;case 35676:return ov;case 5124:case 35670:return av;case 35667:case 35671:return lv;case 35668:case 35672:return cv;case 35669:case 35673:return hv;case 5125:return uv;case 36294:return fv;case 36295:return dv;case 36296:return pv;case 35678:case 36198:case 36298:case 36306:case 35682:return mv;case 35679:case 36299:case 36307:return gv;case 35680:case 36300:case 36308:case 36293:return vv;case 36289:case 36303:case 36311:case 36292:return xv}}function yv(r,e){r.uniform1fv(this.addr,e)}function Mv(r,e){const t=Tr(e,this.size,2);r.uniform2fv(this.addr,t)}function Sv(r,e){const t=Tr(e,this.size,3);r.uniform3fv(this.addr,t)}function bv(r,e){const t=Tr(e,this.size,4);r.uniform4fv(this.addr,t)}function wv(r,e){const t=Tr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Tv(r,e){const t=Tr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Ev(r,e){const t=Tr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Av(r,e){r.uniform1iv(this.addr,e)}function Rv(r,e){r.uniform2iv(this.addr,e)}function Cv(r,e){r.uniform3iv(this.addr,e)}function Pv(r,e){r.uniform4iv(this.addr,e)}function Lv(r,e){r.uniform1uiv(this.addr,e)}function Dv(r,e){r.uniform2uiv(this.addr,e)}function Iv(r,e){r.uniform3uiv(this.addr,e)}function Nv(r,e){r.uniform4uiv(this.addr,e)}function Uv(r,e,t){const n=this.cache,i=e.length,s=Na(t,i);sn(n,s)||(r.uniform1iv(this.addr,s),rn(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Gf,s[o])}function Ov(r,e,t){const n=this.cache,i=e.length,s=Na(t,i);sn(n,s)||(r.uniform1iv(this.addr,s),rn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Xf,s[o])}function Fv(r,e,t){const n=this.cache,i=e.length,s=Na(t,i);sn(n,s)||(r.uniform1iv(this.addr,s),rn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||qf,s[o])}function kv(r,e,t){const n=this.cache,i=e.length,s=Na(t,i);sn(n,s)||(r.uniform1iv(this.addr,s),rn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Wf,s[o])}function Bv(r){switch(r){case 5126:return yv;case 35664:return Mv;case 35665:return Sv;case 35666:return bv;case 35674:return wv;case 35675:return Tv;case 35676:return Ev;case 5124:case 35670:return Av;case 35667:case 35671:return Rv;case 35668:case 35672:return Cv;case 35669:case 35673:return Pv;case 5125:return Lv;case 36294:return Dv;case 36295:return Iv;case 36296:return Nv;case 35678:case 36198:case 36298:case 36306:case 35682:return Uv;case 35679:case 36299:case 36307:return Ov;case 35680:case 36300:case 36308:case 36293:return Fv;case 36289:case 36303:case 36311:case 36292:return kv}}class zv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_v(t.type)}}class Vv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bv(t.type)}}class Hv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const _l=/(\w+)(\])?(\[|\.)?/g;function uu(r,e){r.seq.push(e),r.map[e.id]=e}function Gv(r,e,t){const n=r.name,i=n.length;for(_l.lastIndex=0;;){const s=_l.exec(n),o=_l.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){uu(t,c===void 0?new zv(a,r,e):new Vv(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new Hv(a),uu(t,h)),t=h}}}class _a{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Gv(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function fu(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Wv=37297;let Xv=0;function qv(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const du=new ut;function Yv(r){Mt._getMatrix(du,Mt.workingColorSpace,r);const e=`mat3( ${du.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(r)){case Da:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function pu(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+qv(r.getShaderSource(e),o)}else return i}function jv(r,e){const t=Yv(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Kv(r,e){let t;switch(e){case mf:t="Linear";break;case gf:t="Reinhard";break;case vf:t="Cineon";break;case Vc:t="ACESFilmic";break;case xf:t="AgX";break;case _f:t="Neutral";break;case np:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wo=new D;function Zv(){Mt.getLuminanceCoefficients(Wo);const r=Wo.x.toFixed(4),e=Wo.y.toFixed(4),t=Wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $v(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($r).join(`
`)}function Jv(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Qv(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function $r(r){return r!==""}function mu(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ex=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ac(r){return r.replace(ex,nx)}const tx=new Map;function nx(r,e){let t=ft[e];if(t===void 0){const n=tx.get(e);if(n!==void 0)t=ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ac(t)}const ix=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vu(r){return r.replace(ix,sx)}function sx(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function xu(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function rx(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===uf?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===ff?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function ox(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case dr:case pr:e="ENVMAP_TYPE_CUBE";break;case La:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ax(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case pr:e="ENVMAP_MODE_REFRACTION";break}return e}function lx(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case pf:e="ENVMAP_BLENDING_MULTIPLY";break;case ep:e="ENVMAP_BLENDING_MIX";break;case tp:e="ENVMAP_BLENDING_ADD";break}return e}function cx(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function hx(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=rx(t),c=ox(t),u=ax(t),h=lx(t),f=cx(t),d=$v(t),m=Jv(s),v=i.createProgram();let g,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter($r).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter($r).join(`
`),p.length>0&&(p+=`
`)):(g=[xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),p=[xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ns?"#define TONE_MAPPING":"",t.toneMapping!==ns?ft.tonemapping_pars_fragment:"",t.toneMapping!==ns?Kv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,jv("linearToOutputTexel",t.outputColorSpace),Zv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($r).join(`
`)),o=Ac(o),o=mu(o,t),o=gu(o,t),a=Ac(a),a=mu(a,t),a=gu(a,t),o=vu(o),a=vu(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=x+g+o,_=x+p+a,C=fu(i,i.VERTEX_SHADER,M),w=fu(i,i.FRAGMENT_SHADER,_);i.attachShader(v,C),i.attachShader(v,w),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function E(R){if(r.debug.checkShaderErrors){const F=i.getProgramInfoLog(v).trim(),B=i.getShaderInfoLog(C).trim(),O=i.getShaderInfoLog(w).trim();let V=!0,G=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,C,w);else{const j=pu(i,C,"vertex"),W=pu(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+F+`
`+j+`
`+W)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(B===""||O==="")&&(G=!1);G&&(R.diagnostics={runnable:V,programLog:F,vertexShader:{log:B,prefix:g},fragmentShader:{log:O,prefix:p}})}i.deleteShader(C),i.deleteShader(w),P=new _a(i,v),y=Qv(i,v)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(v,Wv)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=w,this}let ux=0;class fx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new dx(e),t.set(e,n)),n}}class dx{constructor(e){this.id=ux++,this.code=e,this.usedTimes=0}}function px(r,e,t,n,i,s,o){const a=new $c,l=new fx,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function g(y,S,R,F,B){const O=F.fog,V=B.geometry,G=y.isMeshStandardMaterial?F.environment:null,j=(y.isMeshStandardMaterial?t:e).get(y.envMap||G),W=j&&j.mapping===La?j.image.height:null,J=m[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const le=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ve=le!==void 0?le.length:0;let Ne=0;V.morphAttributes.position!==void 0&&(Ne=1),V.morphAttributes.normal!==void 0&&(Ne=2),V.morphAttributes.color!==void 0&&(Ne=3);let Ze,$,fe,Re;if(J){const gt=yi[J];Ze=gt.vertexShader,$=gt.fragmentShader}else Ze=y.vertexShader,$=y.fragmentShader,l.update(y),fe=l.getVertexShaderID(y),Re=l.getFragmentShaderID(y);const de=r.getRenderTarget(),De=r.state.buffers.depth.getReversed(),Ve=B.isInstancedMesh===!0,ke=B.isBatchedMesh===!0,nt=!!y.map,ie=!!y.matcap,he=!!j,I=!!y.aoMap,Be=!!y.lightMap,ce=!!y.bumpMap,Pe=!!y.normalMap,ge=!!y.displacementMap,We=!!y.emissiveMap,be=!!y.metalnessMap,L=!!y.roughnessMap,b=y.anisotropy>0,X=y.clearcoat>0,ne=y.dispersion>0,se=y.iridescence>0,Q=y.sheen>0,ze=y.transmission>0,xe=b&&!!y.anisotropyMap,Se=X&&!!y.clearcoatMap,at=X&&!!y.clearcoatNormalMap,ue=X&&!!y.clearcoatRoughnessMap,Le=se&&!!y.iridescenceMap,qe=se&&!!y.iridescenceThicknessMap,Ke=Q&&!!y.sheenColorMap,Oe=Q&&!!y.sheenRoughnessMap,mt=!!y.specularMap,et=!!y.specularColorMap,St=!!y.specularIntensityMap,k=ze&&!!y.transmissionMap,ye=ze&&!!y.thicknessMap,Z=!!y.gradientMap,ae=!!y.alphaMap,we=y.alphaTest>0,Ee=!!y.alphaHash,lt=!!y.extensions;let Dt=ns;y.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Dt=r.toneMapping);const Xt={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:Ze,fragmentShader:$,defines:y.defines,customVertexShaderID:fe,customFragmentShaderID:Re,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:ke,batchingColor:ke&&B._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&B.instanceColor!==null,instancingMorph:Ve&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:de===null?r.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Pn,alphaToCoverage:!!y.alphaToCoverage,map:nt,matcap:ie,envMap:he,envMapMode:he&&j.mapping,envMapCubeUVHeight:W,aoMap:I,lightMap:Be,bumpMap:ce,normalMap:Pe,displacementMap:f&&ge,emissiveMap:We,normalMapObjectSpace:Pe&&y.normalMapType===lp,normalMapTangentSpace:Pe&&y.normalMapType===Kc,metalnessMap:be,roughnessMap:L,anisotropy:b,anisotropyMap:xe,clearcoat:X,clearcoatMap:Se,clearcoatNormalMap:at,clearcoatRoughnessMap:ue,dispersion:ne,iridescence:se,iridescenceMap:Le,iridescenceThicknessMap:qe,sheen:Q,sheenColorMap:Ke,sheenRoughnessMap:Oe,specularMap:mt,specularColorMap:et,specularIntensityMap:St,transmission:ze,transmissionMap:k,thicknessMap:ye,gradientMap:Z,opaque:y.transparent===!1&&y.blending===or&&y.alphaToCoverage===!1,alphaMap:ae,alphaTest:we,alphaHash:Ee,combine:y.combine,mapUv:nt&&v(y.map.channel),aoMapUv:I&&v(y.aoMap.channel),lightMapUv:Be&&v(y.lightMap.channel),bumpMapUv:ce&&v(y.bumpMap.channel),normalMapUv:Pe&&v(y.normalMap.channel),displacementMapUv:ge&&v(y.displacementMap.channel),emissiveMapUv:We&&v(y.emissiveMap.channel),metalnessMapUv:be&&v(y.metalnessMap.channel),roughnessMapUv:L&&v(y.roughnessMap.channel),anisotropyMapUv:xe&&v(y.anisotropyMap.channel),clearcoatMapUv:Se&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:at&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&v(y.sheenRoughnessMap.channel),specularMapUv:mt&&v(y.specularMap.channel),specularColorMapUv:et&&v(y.specularColorMap.channel),specularIntensityMapUv:St&&v(y.specularIntensityMap.channel),transmissionMapUv:k&&v(y.transmissionMap.channel),thicknessMapUv:ye&&v(y.thicknessMap.channel),alphaMapUv:ae&&v(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Pe||b),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!V.attributes.uv&&(nt||ae),fog:!!O,useFog:y.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:De,skinning:B.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Ne,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:Dt,decodeVideoTexture:nt&&y.map.isVideoTexture===!0&&Mt.getTransfer(y.map.colorSpace)===Ct,decodeVideoTextureEmissive:We&&y.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(y.emissiveMap.colorSpace)===Ct,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===xn,flipSided:y.side===On,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:lt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&y.extensions.multiDraw===!0||ke)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Xt.vertexUv1s=c.has(1),Xt.vertexUv2s=c.has(2),Xt.vertexUv3s=c.has(3),c.clear(),Xt}function p(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)S.push(R),S.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(x(S,y),M(S,y),S.push(r.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function x(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function M(y,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),y.push(a.mask)}function _(y){const S=m[y.type];let R;if(S){const F=yi[S];R=Hn.clone(F.uniforms)}else R=y.uniforms;return R}function C(y,S){let R;for(let F=0,B=u.length;F<B;F++){const O=u[F];if(O.cacheKey===S){R=O,++R.usedTimes;break}}return R===void 0&&(R=new hx(r,S,y,s),u.push(R)),R}function w(y){if(--y.usedTimes===0){const S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),y.destroy()}}function E(y){l.remove(y)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:C,releaseProgram:w,releaseShaderCache:E,programs:u,dispose:P}}function mx(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function gx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function _u(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function yu(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,m,v,g){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:m,renderOrder:h.renderOrder,z:v,group:g},r[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=v,p.group=g),e++,p}function a(h,f,d,m,v,g){const p=o(h,f,d,m,v,g);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,m,v,g){const p=o(h,f,d,m,v,g);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||gx),n.length>1&&n.sort(f||_u),i.length>1&&i.sort(f||_u)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function vx(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new yu,r.set(n,[o])):i>=s.length?(o=new yu,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function xx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Xe};break;case"SpotLight":t={position:new D,direction:new D,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new D,halfWidth:new D,halfHeight:new D};break}return r[e.id]=t,t}}}function _x(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let yx=0;function Mx(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Sx(r){const e=new xx,t=_x(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,s=new Qe,o=new Qe;function a(c){let u=0,h=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,m=0,v=0,g=0,p=0,x=0,M=0,_=0,C=0,w=0,E=0;c.sort(Mx);for(let y=0,S=c.length;y<S;y++){const R=c[y],F=R.color,B=R.intensity,O=R.distance,V=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=F.r*B,h+=F.g*B,f+=F.b*B;else if(R.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(R.sh.coefficients[G],B);E++}else if(R.isDirectionalLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const j=R.shadow,W=t.get(R);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=V,n.directionalShadowMatrix[d]=R.shadow.matrix,x++}n.directional[d]=G,d++}else if(R.isSpotLight){const G=e.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(F).multiplyScalar(B),G.distance=O,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,n.spot[v]=G;const j=R.shadow;if(R.map&&(n.spotLightMap[C]=R.map,C++,j.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[v]=j.matrix,R.castShadow){const W=t.get(R);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=V,_++}v++}else if(R.isRectAreaLight){const G=e.get(R);G.color.copy(F).multiplyScalar(B),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=G,g++}else if(R.isPointLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){const j=R.shadow,W=t.get(R);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,n.pointShadow[m]=W,n.pointShadowMap[m]=V,n.pointShadowMatrix[m]=R.shadow.matrix,M++}n.point[m]=G,m++}else if(R.isHemisphereLight){const G=e.get(R);G.skyColor.copy(R.color).multiplyScalar(B),G.groundColor.copy(R.groundColor).multiplyScalar(B),n.hemi[p]=G,p++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==d||P.pointLength!==m||P.spotLength!==v||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==x||P.numPointShadows!==M||P.numSpotShadows!==_||P.numSpotMaps!==C||P.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,P.directionalLength=d,P.pointLength=m,P.spotLength=v,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=x,P.numPointShadows=M,P.numSpotShadows=_,P.numSpotMaps=C,P.numLightProbes=E,n.version=yx++)}function l(c,u){let h=0,f=0,d=0,m=0,v=0;const g=u.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const M=c[p];if(M.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),h++}else if(M.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),d++}else if(M.isRectAreaLight){const _=n.rectArea[m];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),o.identity(),s.copy(M.matrixWorld),s.premultiply(g),o.extractRotation(s),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:n}}function Mu(r){const e=new Sx(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function bx(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Mu(r),e.set(i,[a])):s>=o.length?(a=new Mu(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class wx extends ni{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=op,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tx extends ni{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ax=`uniform sampler2D shadow_pass;
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
}`;function Rx(r,e,t){let n=new Jc;const i=new re,s=new re,o=new bt,a=new wx({depthPacking:ap}),l=new Tx,c={},u=t.maxTextureSize,h={[Hi]:On,[On]:Hi,[xn]:xn},f=new zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:Ex,fragmentShader:Ax}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new Vt;m.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new oe(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uf;let p=this.type;this.render=function(w,E,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const y=r.getRenderTarget(),S=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),F=r.state;F.setBlending(hn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=p!==Oi&&this.type===Oi,O=p===Oi&&this.type!==Oi;for(let V=0,G=w.length;V<G;V++){const j=w[V],W=j.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const J=W.getFrameExtents();if(i.multiply(J),s.copy(W.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/J.x),i.x=s.x*J.x,W.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/J.y),i.y=s.y*J.y,W.mapSize.y=s.y)),W.map===null||B===!0||O===!0){const ve=this.type!==Oi?{minFilter:Zt,magFilter:Zt}:{};W.map!==null&&W.map.dispose(),W.map=new Tn(i.x,i.y,ve),W.map.texture.name=j.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const le=W.getViewportCount();for(let ve=0;ve<le;ve++){const Ne=W.getViewport(ve);o.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),F.viewport(o),W.updateMatrices(j,ve),n=W.getFrustum(),_(E,P,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===Oi&&x(W,P),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(y,S,R)};function x(w,E){const P=e.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Tn(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(E,null,P,f,v,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(E,null,P,d,v,null)}function M(w,E,P,y){let S=null;const R=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)S=R;else if(S=P.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const F=S.uuid,B=E.uuid;let O=c[F];O===void 0&&(O={},c[F]=O);let V=O[B];V===void 0&&(V=S.clone(),O[B]=V,E.addEventListener("dispose",C)),S=V}if(S.visible=E.visible,S.wireframe=E.wireframe,y===Oi?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:h[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=r.properties.get(S);F.light=P}return S}function _(w,E,P,y,S){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Oi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const B=e.update(w),O=w.material;if(Array.isArray(O)){const V=B.groups;for(let G=0,j=V.length;G<j;G++){const W=V[G],J=O[W.materialIndex];if(J&&J.visible){const le=M(w,J,y,S);w.onBeforeShadow(r,w,E,P,B,le,W),r.renderBufferDirect(P,null,B,le,w,W),w.onAfterShadow(r,w,E,P,B,le,W)}}}else if(O.visible){const V=M(w,O,y,S);w.onBeforeShadow(r,w,E,P,B,V,null),r.renderBufferDirect(P,null,B,V,w,null),w.onAfterShadow(r,w,E,P,B,V,null)}}const F=w.children;for(let B=0,O=F.length;B<O;B++)_(F[B],E,P,y,S)}function C(w){w.target.removeEventListener("dispose",C);for(const P in c){const y=c[P],S=w.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const Cx={[Wl]:Xl,[ql]:Kl,[Yl]:Zl,[fr]:jl,[Xl]:Wl,[Kl]:ql,[Zl]:Yl,[jl]:fr};function Px(r,e){function t(){let k=!1;const ye=new bt;let Z=null;const ae=new bt(0,0,0,0);return{setMask:function(we){Z!==we&&!k&&(r.colorMask(we,we,we,we),Z=we)},setLocked:function(we){k=we},setClear:function(we,Ee,lt,Dt,Xt){Xt===!0&&(we*=Dt,Ee*=Dt,lt*=Dt),ye.set(we,Ee,lt,Dt),ae.equals(ye)===!1&&(r.clearColor(we,Ee,lt,Dt),ae.copy(ye))},reset:function(){k=!1,Z=null,ae.set(-1,0,0,0)}}}function n(){let k=!1,ye=!1,Z=null,ae=null,we=null;return{setReversed:function(Ee){if(ye!==Ee){const lt=e.get("EXT_clip_control");ye?lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.ZERO_TO_ONE_EXT):lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.NEGATIVE_ONE_TO_ONE_EXT);const Dt=we;we=null,this.setClear(Dt)}ye=Ee},getReversed:function(){return ye},setTest:function(Ee){Ee?de(r.DEPTH_TEST):De(r.DEPTH_TEST)},setMask:function(Ee){Z!==Ee&&!k&&(r.depthMask(Ee),Z=Ee)},setFunc:function(Ee){if(ye&&(Ee=Cx[Ee]),ae!==Ee){switch(Ee){case Wl:r.depthFunc(r.NEVER);break;case Xl:r.depthFunc(r.ALWAYS);break;case ql:r.depthFunc(r.LESS);break;case fr:r.depthFunc(r.LEQUAL);break;case Yl:r.depthFunc(r.EQUAL);break;case jl:r.depthFunc(r.GEQUAL);break;case Kl:r.depthFunc(r.GREATER);break;case Zl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ae=Ee}},setLocked:function(Ee){k=Ee},setClear:function(Ee){we!==Ee&&(ye&&(Ee=1-Ee),r.clearDepth(Ee),we=Ee)},reset:function(){k=!1,Z=null,ae=null,we=null,ye=!1}}}function i(){let k=!1,ye=null,Z=null,ae=null,we=null,Ee=null,lt=null,Dt=null,Xt=null;return{setTest:function(gt){k||(gt?de(r.STENCIL_TEST):De(r.STENCIL_TEST))},setMask:function(gt){ye!==gt&&!k&&(r.stencilMask(gt),ye=gt)},setFunc:function(gt,Ln,oi){(Z!==gt||ae!==Ln||we!==oi)&&(r.stencilFunc(gt,Ln,oi),Z=gt,ae=Ln,we=oi)},setOp:function(gt,Ln,oi){(Ee!==gt||lt!==Ln||Dt!==oi)&&(r.stencilOp(gt,Ln,oi),Ee=gt,lt=Ln,Dt=oi)},setLocked:function(gt){k=gt},setClear:function(gt){Xt!==gt&&(r.clearStencil(gt),Xt=gt)},reset:function(){k=!1,ye=null,Z=null,ae=null,we=null,Ee=null,lt=null,Dt=null,Xt=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],m=null,v=!1,g=null,p=null,x=null,M=null,_=null,C=null,w=null,E=new Xe(0,0,0),P=0,y=!1,S=null,R=null,F=null,B=null,O=null;const V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,j=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=j>=2);let J=null,le={};const ve=r.getParameter(r.SCISSOR_BOX),Ne=r.getParameter(r.VIEWPORT),Ze=new bt().fromArray(ve),$=new bt().fromArray(Ne);function fe(k,ye,Z,ae){const we=new Uint8Array(4),Ee=r.createTexture();r.bindTexture(k,Ee),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let lt=0;lt<Z;lt++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(ye,0,r.RGBA,1,1,ae,0,r.RGBA,r.UNSIGNED_BYTE,we):r.texImage2D(ye+lt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,we);return Ee}const Re={};Re[r.TEXTURE_2D]=fe(r.TEXTURE_2D,r.TEXTURE_2D,1),Re[r.TEXTURE_CUBE_MAP]=fe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[r.TEXTURE_2D_ARRAY]=fe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Re[r.TEXTURE_3D]=fe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(r.DEPTH_TEST),o.setFunc(fr),ce(!1),Pe(bh),de(r.CULL_FACE),I(hn);function de(k){u[k]!==!0&&(r.enable(k),u[k]=!0)}function De(k){u[k]!==!1&&(r.disable(k),u[k]=!1)}function Ve(k,ye){return h[k]!==ye?(r.bindFramebuffer(k,ye),h[k]=ye,k===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ye),k===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ye),!0):!1}function ke(k,ye){let Z=d,ae=!1;if(k){Z=f.get(ye),Z===void 0&&(Z=[],f.set(ye,Z));const we=k.textures;if(Z.length!==we.length||Z[0]!==r.COLOR_ATTACHMENT0){for(let Ee=0,lt=we.length;Ee<lt;Ee++)Z[Ee]=r.COLOR_ATTACHMENT0+Ee;Z.length=we.length,ae=!0}}else Z[0]!==r.BACK&&(Z[0]=r.BACK,ae=!0);ae&&r.drawBuffers(Z)}function nt(k){return m!==k?(r.useProgram(k),m=k,!0):!1}const ie={[fi]:r.FUNC_ADD,[zd]:r.FUNC_SUBTRACT,[Vd]:r.FUNC_REVERSE_SUBTRACT};ie[Hd]=r.MIN,ie[Gd]=r.MAX;const he={[jr]:r.ZERO,[Wd]:r.ONE,[Xd]:r.SRC_COLOR,[zl]:r.SRC_ALPHA,[Kd]:r.SRC_ALPHA_SATURATE,[Gl]:r.DST_COLOR,[Hl]:r.DST_ALPHA,[qd]:r.ONE_MINUS_SRC_COLOR,[Vl]:r.ONE_MINUS_SRC_ALPHA,[jd]:r.ONE_MINUS_DST_COLOR,[Yd]:r.ONE_MINUS_DST_ALPHA,[Zd]:r.CONSTANT_COLOR,[$d]:r.ONE_MINUS_CONSTANT_COLOR,[Jd]:r.CONSTANT_ALPHA,[Qd]:r.ONE_MINUS_CONSTANT_ALPHA};function I(k,ye,Z,ae,we,Ee,lt,Dt,Xt,gt){if(k===hn){v===!0&&(De(r.BLEND),v=!1);return}if(v===!1&&(de(r.BLEND),v=!0),k!==df){if(k!==g||gt!==y){if((p!==fi||_!==fi)&&(r.blendEquation(r.FUNC_ADD),p=fi,_=fi),gt)switch(k){case or:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case As:r.blendFunc(r.ONE,r.ONE);break;case wh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Th:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case or:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case As:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case wh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Th:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}x=null,M=null,C=null,w=null,E.set(0,0,0),P=0,g=k,y=gt}return}we=we||ye,Ee=Ee||Z,lt=lt||ae,(ye!==p||we!==_)&&(r.blendEquationSeparate(ie[ye],ie[we]),p=ye,_=we),(Z!==x||ae!==M||Ee!==C||lt!==w)&&(r.blendFuncSeparate(he[Z],he[ae],he[Ee],he[lt]),x=Z,M=ae,C=Ee,w=lt),(Dt.equals(E)===!1||Xt!==P)&&(r.blendColor(Dt.r,Dt.g,Dt.b,Xt),E.copy(Dt),P=Xt),g=k,y=!1}function Be(k,ye){k.side===xn?De(r.CULL_FACE):de(r.CULL_FACE);let Z=k.side===On;ye&&(Z=!Z),ce(Z),k.blending===or&&k.transparent===!1?I(hn):I(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);const ae=k.stencilWrite;a.setTest(ae),ae&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),We(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?de(r.SAMPLE_ALPHA_TO_COVERAGE):De(r.SAMPLE_ALPHA_TO_COVERAGE)}function ce(k){S!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),S=k)}function Pe(k){k!==kd?(de(r.CULL_FACE),k!==R&&(k===bh?r.cullFace(r.BACK):k===Bd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):De(r.CULL_FACE),R=k}function ge(k){k!==F&&(G&&r.lineWidth(k),F=k)}function We(k,ye,Z){k?(de(r.POLYGON_OFFSET_FILL),(B!==ye||O!==Z)&&(r.polygonOffset(ye,Z),B=ye,O=Z)):De(r.POLYGON_OFFSET_FILL)}function be(k){k?de(r.SCISSOR_TEST):De(r.SCISSOR_TEST)}function L(k){k===void 0&&(k=r.TEXTURE0+V-1),J!==k&&(r.activeTexture(k),J=k)}function b(k,ye,Z){Z===void 0&&(J===null?Z=r.TEXTURE0+V-1:Z=J);let ae=le[Z];ae===void 0&&(ae={type:void 0,texture:void 0},le[Z]=ae),(ae.type!==k||ae.texture!==ye)&&(J!==Z&&(r.activeTexture(Z),J=Z),r.bindTexture(k,ye||Re[k]),ae.type=k,ae.texture=ye)}function X(){const k=le[J];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ne(){try{r.compressedTexImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function se(){try{r.compressedTexImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Q(){try{r.texSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ze(){try{r.texSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Se(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function at(){try{r.texStorage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ue(){try{r.texStorage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Le(){try{r.texImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function qe(){try{r.texImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ke(k){Ze.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),Ze.copy(k))}function Oe(k){$.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),$.copy(k))}function mt(k,ye){let Z=c.get(ye);Z===void 0&&(Z=new WeakMap,c.set(ye,Z));let ae=Z.get(k);ae===void 0&&(ae=r.getUniformBlockIndex(ye,k.name),Z.set(k,ae))}function et(k,ye){const ae=c.get(ye).get(k);l.get(ye)!==ae&&(r.uniformBlockBinding(ye,ae,k.__bindingPointIndex),l.set(ye,ae))}function St(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},J=null,le={},h={},f=new WeakMap,d=[],m=null,v=!1,g=null,p=null,x=null,M=null,_=null,C=null,w=null,E=new Xe(0,0,0),P=0,y=!1,S=null,R=null,F=null,B=null,O=null,Ze.set(0,0,r.canvas.width,r.canvas.height),$.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:de,disable:De,bindFramebuffer:Ve,drawBuffers:ke,useProgram:nt,setBlending:I,setMaterial:Be,setFlipSided:ce,setCullFace:Pe,setLineWidth:ge,setPolygonOffset:We,setScissorTest:be,activeTexture:L,bindTexture:b,unbindTexture:X,compressedTexImage2D:ne,compressedTexImage3D:se,texImage2D:Le,texImage3D:qe,updateUBOMapping:mt,uniformBlockBinding:et,texStorage2D:at,texStorage3D:ue,texSubImage2D:Q,texSubImage3D:ze,compressedTexSubImage2D:xe,compressedTexSubImage3D:Se,scissor:Ke,viewport:Oe,reset:St}}function Su(r,e,t,n){const i=Lx(n);switch(t){case Tf:return r*e;case Af:return r*e;case Rf:return r*e*2;case Xc:return r*e/i.components*i.byteLength;case qc:return r*e/i.components*i.byteLength;case Cf:return r*e*2/i.components*i.byteLength;case Yc:return r*e*2/i.components*i.byteLength;case Ef:return r*e*3/i.components*i.byteLength;case Wn:return r*e*4/i.components*i.byteLength;case jc:return r*e*4/i.components*i.byteLength;case pa:case ma:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ga:case va:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ql:case tc:return Math.max(r,16)*Math.max(e,8)/4;case Jl:case ec:return Math.max(r,8)*Math.max(e,8)/2;case nc:case ic:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case sc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case rc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case oc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case ac:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case lc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case cc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case hc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case uc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case fc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case dc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case pc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case mc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case gc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case vc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case xc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case xa:case _c:case yc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Pf:case Mc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Sc:case bc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Lx(r){switch(r){case wi:case Sf:return{byteLength:1,components:1};case lo:case bf:case Fn:return{byteLength:2,components:1};case Gc:case Wc:return{byteLength:2,components:4};case Rs:case Hc:case mi:return{byteLength:4,components:1};case wf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Dx(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,b){return d?new OffscreenCanvas(L,b):uo("canvas")}function v(L,b,X){let ne=1;const se=be(L);if((se.width>X||se.height>X)&&(ne=X/Math.max(se.width,se.height)),ne<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Q=Math.floor(ne*se.width),ze=Math.floor(ne*se.height);h===void 0&&(h=m(Q,ze));const xe=b?m(Q,ze):h;return xe.width=Q,xe.height=ze,xe.getContext("2d").drawImage(L,0,0,Q,ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Q+"x"+ze+")."),xe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),L;return L}function g(L){return L.generateMipmaps}function p(L){r.generateMipmap(L)}function x(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(L,b,X,ne,se=!1){if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Q=b;if(b===r.RED&&(X===r.FLOAT&&(Q=r.R32F),X===r.HALF_FLOAT&&(Q=r.R16F),X===r.UNSIGNED_BYTE&&(Q=r.R8)),b===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(Q=r.R8UI),X===r.UNSIGNED_SHORT&&(Q=r.R16UI),X===r.UNSIGNED_INT&&(Q=r.R32UI),X===r.BYTE&&(Q=r.R8I),X===r.SHORT&&(Q=r.R16I),X===r.INT&&(Q=r.R32I)),b===r.RG&&(X===r.FLOAT&&(Q=r.RG32F),X===r.HALF_FLOAT&&(Q=r.RG16F),X===r.UNSIGNED_BYTE&&(Q=r.RG8)),b===r.RG_INTEGER&&(X===r.UNSIGNED_BYTE&&(Q=r.RG8UI),X===r.UNSIGNED_SHORT&&(Q=r.RG16UI),X===r.UNSIGNED_INT&&(Q=r.RG32UI),X===r.BYTE&&(Q=r.RG8I),X===r.SHORT&&(Q=r.RG16I),X===r.INT&&(Q=r.RG32I)),b===r.RGB_INTEGER&&(X===r.UNSIGNED_BYTE&&(Q=r.RGB8UI),X===r.UNSIGNED_SHORT&&(Q=r.RGB16UI),X===r.UNSIGNED_INT&&(Q=r.RGB32UI),X===r.BYTE&&(Q=r.RGB8I),X===r.SHORT&&(Q=r.RGB16I),X===r.INT&&(Q=r.RGB32I)),b===r.RGBA_INTEGER&&(X===r.UNSIGNED_BYTE&&(Q=r.RGBA8UI),X===r.UNSIGNED_SHORT&&(Q=r.RGBA16UI),X===r.UNSIGNED_INT&&(Q=r.RGBA32UI),X===r.BYTE&&(Q=r.RGBA8I),X===r.SHORT&&(Q=r.RGBA16I),X===r.INT&&(Q=r.RGBA32I)),b===r.RGB&&X===r.UNSIGNED_INT_5_9_9_9_REV&&(Q=r.RGB9_E5),b===r.RGBA){const ze=se?Da:Mt.getTransfer(ne);X===r.FLOAT&&(Q=r.RGBA32F),X===r.HALF_FLOAT&&(Q=r.RGBA16F),X===r.UNSIGNED_BYTE&&(Q=ze===Ct?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function _(L,b){let X;return L?b===null||b===Rs||b===Cs?X=r.DEPTH24_STENCIL8:b===mi?X=r.DEPTH32F_STENCIL8:b===lo&&(X=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Rs||b===Cs?X=r.DEPTH_COMPONENT24:b===mi?X=r.DEPTH_COMPONENT32F:b===lo&&(X=r.DEPTH_COMPONENT16),X}function C(L,b){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==Zt&&L.minFilter!==Gn?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function w(L){const b=L.target;b.removeEventListener("dispose",w),P(b),b.isVideoTexture&&u.delete(b)}function E(L){const b=L.target;b.removeEventListener("dispose",E),S(b)}function P(L){const b=n.get(L);if(b.__webglInit===void 0)return;const X=L.source,ne=f.get(X);if(ne){const se=ne[b.__cacheKey];se.usedTimes--,se.usedTimes===0&&y(L),Object.keys(ne).length===0&&f.delete(X)}n.remove(L)}function y(L){const b=n.get(L);r.deleteTexture(b.__webglTexture);const X=L.source,ne=f.get(X);delete ne[b.__cacheKey],o.memory.textures--}function S(L){const b=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(b.__webglFramebuffer[ne]))for(let se=0;se<b.__webglFramebuffer[ne].length;se++)r.deleteFramebuffer(b.__webglFramebuffer[ne][se]);else r.deleteFramebuffer(b.__webglFramebuffer[ne]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[ne])}else{if(Array.isArray(b.__webglFramebuffer))for(let ne=0;ne<b.__webglFramebuffer.length;ne++)r.deleteFramebuffer(b.__webglFramebuffer[ne]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ne=0;ne<b.__webglColorRenderbuffer.length;ne++)b.__webglColorRenderbuffer[ne]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[ne]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const X=L.textures;for(let ne=0,se=X.length;ne<se;ne++){const Q=n.get(X[ne]);Q.__webglTexture&&(r.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(X[ne])}n.remove(L)}let R=0;function F(){R=0}function B(){const L=R;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),R+=1,L}function O(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function V(L,b){const X=n.get(L);if(L.isVideoTexture&&ge(L),L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){const ne=L.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(X,L,b);return}}t.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+b)}function G(L,b){const X=n.get(L);if(L.version>0&&X.__version!==L.version){$(X,L,b);return}t.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+b)}function j(L,b){const X=n.get(L);if(L.version>0&&X.__version!==L.version){$(X,L,b);return}t.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+b)}function W(L,b){const X=n.get(L);if(L.version>0&&X.__version!==L.version){fe(X,L,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+b)}const J={[Xn]:r.REPEAT,[Qi]:r.CLAMP_TO_EDGE,[wa]:r.MIRRORED_REPEAT},le={[Zt]:r.NEAREST,[Mf]:r.NEAREST_MIPMAP_NEAREST,[Kr]:r.NEAREST_MIPMAP_LINEAR,[Gn]:r.LINEAR,[da]:r.LINEAR_MIPMAP_NEAREST,[Bi]:r.LINEAR_MIPMAP_LINEAR},ve={[cp]:r.NEVER,[mp]:r.ALWAYS,[hp]:r.LESS,[Df]:r.LEQUAL,[up]:r.EQUAL,[pp]:r.GEQUAL,[fp]:r.GREATER,[dp]:r.NOTEQUAL};function Ne(L,b){if(b.type===mi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Gn||b.magFilter===da||b.magFilter===Kr||b.magFilter===Bi||b.minFilter===Gn||b.minFilter===da||b.minFilter===Kr||b.minFilter===Bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,J[b.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,J[b.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,J[b.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,le[b.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,le[b.minFilter]),b.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,ve[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Zt||b.minFilter!==Kr&&b.minFilter!==Bi||b.type===mi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");r.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ze(L,b){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",w));const ne=b.source;let se=f.get(ne);se===void 0&&(se={},f.set(ne,se));const Q=O(b);if(Q!==L.__cacheKey){se[Q]===void 0&&(se[Q]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,X=!0),se[Q].usedTimes++;const ze=se[L.__cacheKey];ze!==void 0&&(se[L.__cacheKey].usedTimes--,ze.usedTimes===0&&y(b)),L.__cacheKey=Q,L.__webglTexture=se[Q].texture}return X}function $(L,b,X){let ne=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ne=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ne=r.TEXTURE_3D);const se=Ze(L,b),Q=b.source;t.bindTexture(ne,L.__webglTexture,r.TEXTURE0+X);const ze=n.get(Q);if(Q.version!==ze.__version||se===!0){t.activeTexture(r.TEXTURE0+X);const xe=Mt.getPrimaries(Mt.workingColorSpace),Se=b.colorSpace===ki?null:Mt.getPrimaries(b.colorSpace),at=b.colorSpace===ki||xe===Se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let ue=v(b.image,!1,i.maxTextureSize);ue=We(b,ue);const Le=s.convert(b.format,b.colorSpace),qe=s.convert(b.type);let Ke=M(b.internalFormat,Le,qe,b.colorSpace,b.isVideoTexture);Ne(ne,b);let Oe;const mt=b.mipmaps,et=b.isVideoTexture!==!0,St=ze.__version===void 0||se===!0,k=Q.dataReady,ye=C(b,ue);if(b.isDepthTexture)Ke=_(b.format===Ps,b.type),St&&(et?t.texStorage2D(r.TEXTURE_2D,1,Ke,ue.width,ue.height):t.texImage2D(r.TEXTURE_2D,0,Ke,ue.width,ue.height,0,Le,qe,null));else if(b.isDataTexture)if(mt.length>0){et&&St&&t.texStorage2D(r.TEXTURE_2D,ye,Ke,mt[0].width,mt[0].height);for(let Z=0,ae=mt.length;Z<ae;Z++)Oe=mt[Z],et?k&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,Oe.width,Oe.height,Le,qe,Oe.data):t.texImage2D(r.TEXTURE_2D,Z,Ke,Oe.width,Oe.height,0,Le,qe,Oe.data);b.generateMipmaps=!1}else et?(St&&t.texStorage2D(r.TEXTURE_2D,ye,Ke,ue.width,ue.height),k&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ue.width,ue.height,Le,qe,ue.data)):t.texImage2D(r.TEXTURE_2D,0,Ke,ue.width,ue.height,0,Le,qe,ue.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){et&&St&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ye,Ke,mt[0].width,mt[0].height,ue.depth);for(let Z=0,ae=mt.length;Z<ae;Z++)if(Oe=mt[Z],b.format!==Wn)if(Le!==null)if(et){if(k)if(b.layerUpdates.size>0){const we=Su(Oe.width,Oe.height,b.format,b.type);for(const Ee of b.layerUpdates){const lt=Oe.data.subarray(Ee*we/Oe.data.BYTES_PER_ELEMENT,(Ee+1)*we/Oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,Ee,Oe.width,Oe.height,1,Le,lt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,Oe.width,Oe.height,ue.depth,Le,Oe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Z,Ke,Oe.width,Oe.height,ue.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?k&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,Oe.width,Oe.height,ue.depth,Le,qe,Oe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Z,Ke,Oe.width,Oe.height,ue.depth,0,Le,qe,Oe.data)}else{et&&St&&t.texStorage2D(r.TEXTURE_2D,ye,Ke,mt[0].width,mt[0].height);for(let Z=0,ae=mt.length;Z<ae;Z++)Oe=mt[Z],b.format!==Wn?Le!==null?et?k&&t.compressedTexSubImage2D(r.TEXTURE_2D,Z,0,0,Oe.width,Oe.height,Le,Oe.data):t.compressedTexImage2D(r.TEXTURE_2D,Z,Ke,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?k&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,Oe.width,Oe.height,Le,qe,Oe.data):t.texImage2D(r.TEXTURE_2D,Z,Ke,Oe.width,Oe.height,0,Le,qe,Oe.data)}else if(b.isDataArrayTexture)if(et){if(St&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ye,Ke,ue.width,ue.height,ue.depth),k)if(b.layerUpdates.size>0){const Z=Su(ue.width,ue.height,b.format,b.type);for(const ae of b.layerUpdates){const we=ue.data.subarray(ae*Z/ue.data.BYTES_PER_ELEMENT,(ae+1)*Z/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ae,ue.width,ue.height,1,Le,qe,we)}b.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Le,qe,ue.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ke,ue.width,ue.height,ue.depth,0,Le,qe,ue.data);else if(b.isData3DTexture)et?(St&&t.texStorage3D(r.TEXTURE_3D,ye,Ke,ue.width,ue.height,ue.depth),k&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Le,qe,ue.data)):t.texImage3D(r.TEXTURE_3D,0,Ke,ue.width,ue.height,ue.depth,0,Le,qe,ue.data);else if(b.isFramebufferTexture){if(St)if(et)t.texStorage2D(r.TEXTURE_2D,ye,Ke,ue.width,ue.height);else{let Z=ue.width,ae=ue.height;for(let we=0;we<ye;we++)t.texImage2D(r.TEXTURE_2D,we,Ke,Z,ae,0,Le,qe,null),Z>>=1,ae>>=1}}else if(mt.length>0){if(et&&St){const Z=be(mt[0]);t.texStorage2D(r.TEXTURE_2D,ye,Ke,Z.width,Z.height)}for(let Z=0,ae=mt.length;Z<ae;Z++)Oe=mt[Z],et?k&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,Le,qe,Oe):t.texImage2D(r.TEXTURE_2D,Z,Ke,Le,qe,Oe);b.generateMipmaps=!1}else if(et){if(St){const Z=be(ue);t.texStorage2D(r.TEXTURE_2D,ye,Ke,Z.width,Z.height)}k&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Le,qe,ue)}else t.texImage2D(r.TEXTURE_2D,0,Ke,Le,qe,ue);g(b)&&p(ne),ze.__version=Q.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function fe(L,b,X){if(b.image.length!==6)return;const ne=Ze(L,b),se=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+X);const Q=n.get(se);if(se.version!==Q.__version||ne===!0){t.activeTexture(r.TEXTURE0+X);const ze=Mt.getPrimaries(Mt.workingColorSpace),xe=b.colorSpace===ki?null:Mt.getPrimaries(b.colorSpace),Se=b.colorSpace===ki||ze===xe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const at=b.isCompressedTexture||b.image[0].isCompressedTexture,ue=b.image[0]&&b.image[0].isDataTexture,Le=[];for(let ae=0;ae<6;ae++)!at&&!ue?Le[ae]=v(b.image[ae],!0,i.maxCubemapSize):Le[ae]=ue?b.image[ae].image:b.image[ae],Le[ae]=We(b,Le[ae]);const qe=Le[0],Ke=s.convert(b.format,b.colorSpace),Oe=s.convert(b.type),mt=M(b.internalFormat,Ke,Oe,b.colorSpace),et=b.isVideoTexture!==!0,St=Q.__version===void 0||ne===!0,k=se.dataReady;let ye=C(b,qe);Ne(r.TEXTURE_CUBE_MAP,b);let Z;if(at){et&&St&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ye,mt,qe.width,qe.height);for(let ae=0;ae<6;ae++){Z=Le[ae].mipmaps;for(let we=0;we<Z.length;we++){const Ee=Z[we];b.format!==Wn?Ke!==null?et?k&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we,0,0,Ee.width,Ee.height,Ke,Ee.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we,mt,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we,0,0,Ee.width,Ee.height,Ke,Oe,Ee.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we,mt,Ee.width,Ee.height,0,Ke,Oe,Ee.data)}}}else{if(Z=b.mipmaps,et&&St){Z.length>0&&ye++;const ae=be(Le[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ye,mt,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(ue){et?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Le[ae].width,Le[ae].height,Ke,Oe,Le[ae].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,mt,Le[ae].width,Le[ae].height,0,Ke,Oe,Le[ae].data);for(let we=0;we<Z.length;we++){const lt=Z[we].image[ae].image;et?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we+1,0,0,lt.width,lt.height,Ke,Oe,lt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we+1,mt,lt.width,lt.height,0,Ke,Oe,lt.data)}}else{et?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ke,Oe,Le[ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,mt,Ke,Oe,Le[ae]);for(let we=0;we<Z.length;we++){const Ee=Z[we];et?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we+1,0,0,Ke,Oe,Ee.image[ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we+1,mt,Ke,Oe,Ee.image[ae])}}}g(b)&&p(r.TEXTURE_CUBE_MAP),Q.__version=se.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Re(L,b,X,ne,se,Q){const ze=s.convert(X.format,X.colorSpace),xe=s.convert(X.type),Se=M(X.internalFormat,ze,xe,X.colorSpace),at=n.get(b),ue=n.get(X);if(ue.__renderTarget=b,!at.__hasExternalTextures){const Le=Math.max(1,b.width>>Q),qe=Math.max(1,b.height>>Q);se===r.TEXTURE_3D||se===r.TEXTURE_2D_ARRAY?t.texImage3D(se,Q,Se,Le,qe,b.depth,0,ze,xe,null):t.texImage2D(se,Q,Se,Le,qe,0,ze,xe,null)}t.bindFramebuffer(r.FRAMEBUFFER,L),Pe(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ne,se,ue.__webglTexture,0,ce(b)):(se===r.TEXTURE_2D||se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ne,se,ue.__webglTexture,Q),t.bindFramebuffer(r.FRAMEBUFFER,null)}function de(L,b,X){if(r.bindRenderbuffer(r.RENDERBUFFER,L),b.depthBuffer){const ne=b.depthTexture,se=ne&&ne.isDepthTexture?ne.type:null,Q=_(b.stencilBuffer,se),ze=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xe=ce(b);Pe(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,xe,Q,b.width,b.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,xe,Q,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Q,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ze,r.RENDERBUFFER,L)}else{const ne=b.textures;for(let se=0;se<ne.length;se++){const Q=ne[se],ze=s.convert(Q.format,Q.colorSpace),xe=s.convert(Q.type),Se=M(Q.internalFormat,ze,xe,Q.colorSpace),at=ce(b);X&&Pe(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,at,Se,b.width,b.height):Pe(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,at,Se,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Se,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function De(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=n.get(b.depthTexture);ne.__renderTarget=b,(!ne.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),V(b.depthTexture,0);const se=ne.__webglTexture,Q=ce(b);if(b.depthTexture.format===ar)Pe(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,se,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,se,0);else if(b.depthTexture.format===Ps)Pe(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,se,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Ve(L){const b=n.get(L),X=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const ne=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ne){const se=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ne.removeEventListener("dispose",se)};ne.addEventListener("dispose",se),b.__depthDisposeCallback=se}b.__boundDepthTexture=ne}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");De(b.__webglFramebuffer,L)}else if(X){b.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[ne]),b.__webglDepthbuffer[ne]===void 0)b.__webglDepthbuffer[ne]=r.createRenderbuffer(),de(b.__webglDepthbuffer[ne],L,!1);else{const se=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer[ne];r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,se,r.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),de(b.__webglDepthbuffer,L,!1);else{const ne=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,se),r.framebufferRenderbuffer(r.FRAMEBUFFER,ne,r.RENDERBUFFER,se)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ke(L,b,X){const ne=n.get(L);b!==void 0&&Re(ne.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&Ve(L)}function nt(L){const b=L.texture,X=n.get(L),ne=n.get(b);L.addEventListener("dispose",E);const se=L.textures,Q=L.isWebGLCubeRenderTarget===!0,ze=se.length>1;if(ze||(ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture()),ne.__version=b.version,o.memory.textures++),Q){X.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer[xe]=[];for(let Se=0;Se<b.mipmaps.length;Se++)X.__webglFramebuffer[xe][Se]=r.createFramebuffer()}else X.__webglFramebuffer[xe]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer=[];for(let xe=0;xe<b.mipmaps.length;xe++)X.__webglFramebuffer[xe]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(ze)for(let xe=0,Se=se.length;xe<Se;xe++){const at=n.get(se[xe]);at.__webglTexture===void 0&&(at.__webglTexture=r.createTexture(),o.memory.textures++)}if(L.samples>0&&Pe(L)===!1){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let xe=0;xe<se.length;xe++){const Se=se[xe];X.__webglColorRenderbuffer[xe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[xe]);const at=s.convert(Se.format,Se.colorSpace),ue=s.convert(Se.type),Le=M(Se.internalFormat,at,ue,Se.colorSpace,L.isXRRenderTarget===!0),qe=ce(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,qe,Le,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,X.__webglColorRenderbuffer[xe])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),de(X.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){t.bindTexture(r.TEXTURE_CUBE_MAP,ne.__webglTexture),Ne(r.TEXTURE_CUBE_MAP,b);for(let xe=0;xe<6;xe++)if(b.mipmaps&&b.mipmaps.length>0)for(let Se=0;Se<b.mipmaps.length;Se++)Re(X.__webglFramebuffer[xe][Se],L,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Se);else Re(X.__webglFramebuffer[xe],L,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);g(b)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ze){for(let xe=0,Se=se.length;xe<Se;xe++){const at=se[xe],ue=n.get(at);t.bindTexture(r.TEXTURE_2D,ue.__webglTexture),Ne(r.TEXTURE_2D,at),Re(X.__webglFramebuffer,L,at,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,0),g(at)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let xe=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(xe=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(xe,ne.__webglTexture),Ne(xe,b),b.mipmaps&&b.mipmaps.length>0)for(let Se=0;Se<b.mipmaps.length;Se++)Re(X.__webglFramebuffer[Se],L,b,r.COLOR_ATTACHMENT0,xe,Se);else Re(X.__webglFramebuffer,L,b,r.COLOR_ATTACHMENT0,xe,0);g(b)&&p(xe),t.unbindTexture()}L.depthBuffer&&Ve(L)}function ie(L){const b=L.textures;for(let X=0,ne=b.length;X<ne;X++){const se=b[X];if(g(se)){const Q=x(L),ze=n.get(se).__webglTexture;t.bindTexture(Q,ze),p(Q),t.unbindTexture()}}}const he=[],I=[];function Be(L){if(L.samples>0){if(Pe(L)===!1){const b=L.textures,X=L.width,ne=L.height;let se=r.COLOR_BUFFER_BIT;const Q=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ze=n.get(L),xe=b.length>1;if(xe)for(let Se=0;Se<b.length;Se++)t.bindFramebuffer(r.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ze.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let Se=0;Se<b.length;Se++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(se|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(se|=r.STENCIL_BUFFER_BIT)),xe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ze.__webglColorRenderbuffer[Se]);const at=n.get(b[Se]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,at,0)}r.blitFramebuffer(0,0,X,ne,0,0,X,ne,se,r.NEAREST),l===!0&&(he.length=0,I.length=0,he.push(r.COLOR_ATTACHMENT0+Se),L.depthBuffer&&L.resolveDepthBuffer===!1&&(he.push(Q),I.push(Q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,I)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),xe)for(let Se=0;Se<b.length;Se++){t.bindFramebuffer(r.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.RENDERBUFFER,ze.__webglColorRenderbuffer[Se]);const at=n.get(b[Se]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ze.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.TEXTURE_2D,at,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const b=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function ce(L){return Math.min(i.maxSamples,L.samples)}function Pe(L){const b=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ge(L){const b=o.render.frame;u.get(L)!==b&&(u.set(L,b),L.update())}function We(L,b){const X=L.colorSpace,ne=L.format,se=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==Pn&&X!==ki&&(Mt.getTransfer(X)===Ct?(ne!==Wn||se!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),b}function be(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=V,this.setTexture2DArray=G,this.setTexture3D=j,this.setTextureCube=W,this.rebindTextures=ke,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=Pe}function Ix(r,e){function t(n,i=ki){let s;const o=Mt.getTransfer(i);if(n===wi)return r.UNSIGNED_BYTE;if(n===Gc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Wc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===wf)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Sf)return r.BYTE;if(n===bf)return r.SHORT;if(n===lo)return r.UNSIGNED_SHORT;if(n===Hc)return r.INT;if(n===Rs)return r.UNSIGNED_INT;if(n===mi)return r.FLOAT;if(n===Fn)return r.HALF_FLOAT;if(n===Tf)return r.ALPHA;if(n===Ef)return r.RGB;if(n===Wn)return r.RGBA;if(n===Af)return r.LUMINANCE;if(n===Rf)return r.LUMINANCE_ALPHA;if(n===ar)return r.DEPTH_COMPONENT;if(n===Ps)return r.DEPTH_STENCIL;if(n===Xc)return r.RED;if(n===qc)return r.RED_INTEGER;if(n===Cf)return r.RG;if(n===Yc)return r.RG_INTEGER;if(n===jc)return r.RGBA_INTEGER;if(n===pa||n===ma||n===ga||n===va)if(o===Ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===pa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===pa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ma)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ga)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===va)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jl||n===Ql||n===ec||n===tc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Jl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ql)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ec)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nc||n===ic||n===sc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===nc||n===ic)return o===Ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===sc)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===rc||n===oc||n===ac||n===lc||n===cc||n===hc||n===uc||n===fc||n===dc||n===pc||n===mc||n===gc||n===vc||n===xc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===rc)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oc)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ac)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===lc)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cc)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===hc)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===uc)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fc)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===dc)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pc)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mc)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gc)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vc)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xc)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xa||n===_c||n===yc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===xa)return o===Ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_c)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pf||n===Mc||n===Sc||n===bc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===xa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Mc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class Nx extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ye extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ux={type:"move"};class yl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ux)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ye;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ox=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fx=`
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

}`;class kx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new nn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new zt({vertexShader:Ox,fragmentShader:Fx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new oe(new ii(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bx extends br{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null;const v=new kx,g=t.getContextAttributes();let p=null,x=null;const M=[],_=[],C=new re;let w=null;const E=new wn;E.viewport=new bt;const P=new wn;P.viewport=new bt;const y=[E,P],S=new Nx;let R=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let fe=M[$];return fe===void 0&&(fe=new yl,M[$]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function($){let fe=M[$];return fe===void 0&&(fe=new yl,M[$]=fe),fe.getGripSpace()},this.getHand=function($){let fe=M[$];return fe===void 0&&(fe=new yl,M[$]=fe),fe.getHandSpace()};function B($){const fe=_.indexOf($.inputSource);if(fe===-1)return;const Re=M[fe];Re!==void 0&&(Re.update($.inputSource,$.frame,c||o),Re.dispatchEvent({type:$.type,data:$.inputSource}))}function O(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",V);for(let $=0;$<M.length;$++){const fe=_[$];fe!==null&&(_[$]=null,M[$].disconnect(fe))}R=null,F=null,v.reset(),e.setRenderTarget(p),d=null,f=null,h=null,i=null,x=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",O),i.addEventListener("inputsourceschange",V),g.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0){const fe={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,fe),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Tn(d.framebufferWidth,d.framebufferHeight,{format:Wn,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let fe=null,Re=null,de=null;g.depth&&(de=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=g.stencil?Ps:ar,Re=g.stencil?Cs:Rs);const De={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(De),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Tn(f.textureWidth,f.textureHeight,{format:Wn,type:wi,depthTexture:new eh(f.textureWidth,f.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ze.setContext(i),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function V($){for(let fe=0;fe<$.removed.length;fe++){const Re=$.removed[fe],de=_.indexOf(Re);de>=0&&(_[de]=null,M[de].disconnect(Re))}for(let fe=0;fe<$.added.length;fe++){const Re=$.added[fe];let de=_.indexOf(Re);if(de===-1){for(let Ve=0;Ve<M.length;Ve++)if(Ve>=_.length){_.push(Re),de=Ve;break}else if(_[Ve]===null){_[Ve]=Re,de=Ve;break}if(de===-1)break}const De=M[de];De&&De.connect(Re)}}const G=new D,j=new D;function W($,fe,Re){G.setFromMatrixPosition(fe.matrixWorld),j.setFromMatrixPosition(Re.matrixWorld);const de=G.distanceTo(j),De=fe.projectionMatrix.elements,Ve=Re.projectionMatrix.elements,ke=De[14]/(De[10]-1),nt=De[14]/(De[10]+1),ie=(De[9]+1)/De[5],he=(De[9]-1)/De[5],I=(De[8]-1)/De[0],Be=(Ve[8]+1)/Ve[0],ce=ke*I,Pe=ke*Be,ge=de/(-I+Be),We=ge*-I;if(fe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(We),$.translateZ(ge),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),De[10]===-1)$.projectionMatrix.copy(fe.projectionMatrix),$.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const be=ke+ge,L=nt+ge,b=ce-We,X=Pe+(de-We),ne=ie*nt/L*be,se=he*nt/L*be;$.projectionMatrix.makePerspective(b,X,ne,se,be,L),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function J($,fe){fe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(fe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let fe=$.near,Re=$.far;v.texture!==null&&(v.depthNear>0&&(fe=v.depthNear),v.depthFar>0&&(Re=v.depthFar)),S.near=P.near=E.near=fe,S.far=P.far=E.far=Re,(R!==S.near||F!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,F=S.far),E.layers.mask=$.layers.mask|2,P.layers.mask=$.layers.mask|4,S.layers.mask=E.layers.mask|P.layers.mask;const de=$.parent,De=S.cameras;J(S,de);for(let Ve=0;Ve<De.length;Ve++)J(De[Ve],de);De.length===2?W(S,E,P):S.projectionMatrix.copy(E.projectionMatrix),le($,S,de)};function le($,fe,Re){Re===null?$.matrix.copy(fe.matrixWorld):($.matrix.copy(Re.matrixWorld),$.matrix.invert(),$.matrix.multiply(fe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(fe.projectionMatrix),$.projectionMatrixInverse.copy(fe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=mr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let ve=null;function Ne($,fe){if(u=fe.getViewerPose(c||o),m=fe,u!==null){const Re=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let de=!1;Re.length!==S.cameras.length&&(S.cameras.length=0,de=!0);for(let Ve=0;Ve<Re.length;Ve++){const ke=Re[Ve];let nt=null;if(d!==null)nt=d.getViewport(ke);else{const he=h.getViewSubImage(f,ke);nt=he.viewport,Ve===0&&(e.setRenderTargetTextures(x,he.colorTexture,f.ignoreDepthValues?void 0:he.depthStencilTexture),e.setRenderTarget(x))}let ie=y[Ve];ie===void 0&&(ie=new wn,ie.layers.enable(Ve),ie.viewport=new bt,y[Ve]=ie),ie.matrix.fromArray(ke.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(ke.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(nt.x,nt.y,nt.width,nt.height),Ve===0&&(S.matrix.copy(ie.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),de===!0&&S.cameras.push(ie)}const De=i.enabledFeatures;if(De&&De.includes("depth-sensing")){const Ve=h.getDepthInformation(Re[0]);Ve&&Ve.isValid&&Ve.texture&&v.init(e,Ve,i.renderState)}}for(let Re=0;Re<M.length;Re++){const de=_[Re],De=M[Re];de!==null&&De!==void 0&&De.update(de,fe,c||o)}ve&&ve($,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),m=null}const Ze=new Hf;Ze.setAnimationLoop(Ne),this.setAnimationLoop=function($){ve=$},this.dispose=function(){}}}const ms=new Ti,zx=new Qe;function Vx(r,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Bf(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,x,M,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,_)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),v(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,x,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===On&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===On&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=e.get(p),M=x.envMap,_=x.envMapRotation;M&&(g.envMap.value=M,ms.copy(_),ms.x*=-1,ms.y*=-1,ms.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),g.envMapRotation.value.setFromMatrix4(zx.makeRotationFromEuler(ms)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=M*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===On&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Hx(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const _=M.program;n.uniformBlockBinding(x,_)}function c(x,M){let _=i[x.id];_===void 0&&(m(x),_=u(x),i[x.id]=_,x.addEventListener("dispose",g));const C=M.program;n.updateUBOMapping(x,C);const w=e.render.frame;s[x.id]!==w&&(f(x),s[x.id]=w)}function u(x){const M=h();x.__bindingPointIndex=M;const _=r.createBuffer(),C=x.__size,w=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,C,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,_),_}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const M=i[x.id],_=x.uniforms,C=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let w=0,E=_.length;w<E;w++){const P=Array.isArray(_[w])?_[w]:[_[w]];for(let y=0,S=P.length;y<S;y++){const R=P[y];if(d(R,w,y,C)===!0){const F=R.__offset,B=Array.isArray(R.value)?R.value:[R.value];let O=0;for(let V=0;V<B.length;V++){const G=B[V],j=v(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,F+O,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,O),O+=j.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(x,M,_,C){const w=x.value,E=M+"_"+_;if(C[E]===void 0)return typeof w=="number"||typeof w=="boolean"?C[E]=w:C[E]=w.clone(),!0;{const P=C[E];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return C[E]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function m(x){const M=x.uniforms;let _=0;const C=16;for(let E=0,P=M.length;E<P;E++){const y=Array.isArray(M[E])?M[E]:[M[E]];for(let S=0,R=y.length;S<R;S++){const F=y[S],B=Array.isArray(F.value)?F.value:[F.value];for(let O=0,V=B.length;O<V;O++){const G=B[O],j=v(G),W=_%C,J=W%j.boundary,le=W+J;_+=J,le!==0&&C-le<j.storage&&(_+=C-le),F.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=j.storage}}}const w=_%C;return w>0&&(_+=C-w),x.__size=_,x.__cache={},this}function v(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function g(x){const M=x.target;M.removeEventListener("dispose",g);const _=o.indexOf(M.__bindingPointIndex);o.splice(_,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function p(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Gx{constructor(e={}){const{canvas:t=Dp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const x=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this.toneMapping=ns,this.toneMappingExposure=1;const _=this;let C=!1,w=0,E=0,P=null,y=-1,S=null;const R=new bt,F=new bt;let B=null;const O=new Xe(0);let V=0,G=t.width,j=t.height,W=1,J=null,le=null;const ve=new bt(0,0,G,j),Ne=new bt(0,0,G,j);let Ze=!1;const $=new Jc;let fe=!1,Re=!1;const de=new Qe,De=new Qe,Ve=new D,ke=new bt,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ie=!1;function he(){return P===null?W:1}let I=n;function Be(T,z){return t.getContext(T,z)}try{const T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zc}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),I===null){const z="webgl2";if(I=Be(z,T),I===null)throw Be(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ce,Pe,ge,We,be,L,b,X,ne,se,Q,ze,xe,Se,at,ue,Le,qe,Ke,Oe,mt,et,St,k;function ye(){ce=new jg(I),ce.init(),et=new Ix(I,ce),Pe=new Hg(I,ce,e,et),ge=new Px(I,ce),Pe.reverseDepthBuffer&&f&&ge.buffers.depth.setReversed(!0),We=new $g(I),be=new mx,L=new Dx(I,ce,ge,be,Pe,et,We),b=new Wg(_),X=new Yg(_),ne=new s0(I),St=new zg(I,ne),se=new Kg(I,ne,We,St),Q=new Qg(I,se,ne,We),Ke=new Jg(I,Pe,L),ue=new Gg(be),ze=new px(_,b,X,ce,Pe,St,ue),xe=new Vx(_,be),Se=new vx,at=new bx(ce),qe=new Bg(_,b,X,ge,Q,d,l),Le=new Rx(_,Q,Pe),k=new Hx(I,We,Pe,ge),Oe=new Vg(I,ce,We),mt=new Zg(I,ce,We),We.programs=ze.programs,_.capabilities=Pe,_.extensions=ce,_.properties=be,_.renderLists=Se,_.shadowMap=Le,_.state=ge,_.info=We}ye();const Z=new Bx(_,I);this.xr=Z,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=ce.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ce.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(G,j,!1))},this.getSize=function(T){return T.set(G,j)},this.setSize=function(T,z,Y=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,j=z,t.width=Math.floor(T*W),t.height=Math.floor(z*W),Y===!0&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(G*W,j*W).floor()},this.setDrawingBufferSize=function(T,z,Y){G=T,j=z,W=Y,t.width=Math.floor(T*Y),t.height=Math.floor(z*Y),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(R)},this.getViewport=function(T){return T.copy(ve)},this.setViewport=function(T,z,Y,q){T.isVector4?ve.set(T.x,T.y,T.z,T.w):ve.set(T,z,Y,q),ge.viewport(R.copy(ve).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(Ne)},this.setScissor=function(T,z,Y,q){T.isVector4?Ne.set(T.x,T.y,T.z,T.w):Ne.set(T,z,Y,q),ge.scissor(F.copy(Ne).multiplyScalar(W).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(T){ge.setScissorTest(Ze=T)},this.setOpaqueSort=function(T){J=T},this.setTransparentSort=function(T){le=T},this.getClearColor=function(T){return T.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(T=!0,z=!0,Y=!0){let q=0;if(T){let H=!1;if(P!==null){const me=P.texture.format;H=me===jc||me===Yc||me===qc}if(H){const me=P.texture.type,Ae=me===wi||me===Rs||me===lo||me===Cs||me===Gc||me===Wc,He=qe.getClearColor(),Ie=qe.getClearAlpha(),tt=He.r,ot=He.g,Ue=He.b;Ae?(m[0]=tt,m[1]=ot,m[2]=Ue,m[3]=Ie,I.clearBufferuiv(I.COLOR,0,m)):(v[0]=tt,v[1]=ot,v[2]=Ue,v[3]=Ie,I.clearBufferiv(I.COLOR,0,v))}else q|=I.COLOR_BUFFER_BIT}z&&(q|=I.DEPTH_BUFFER_BIT),Y&&(q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Se.dispose(),at.dispose(),be.dispose(),b.dispose(),X.dispose(),Q.dispose(),St.dispose(),k.dispose(),ze.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Cr),Z.removeEventListener("sessionend",Je),xi.stop()};function ae(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const T=We.autoReset,z=Le.enabled,Y=Le.autoUpdate,q=Le.needsUpdate,H=Le.type;ye(),We.autoReset=T,Le.enabled=z,Le.autoUpdate=Y,Le.needsUpdate=q,Le.type=H}function Ee(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function lt(T){const z=T.target;z.removeEventListener("dispose",lt),Dt(z)}function Dt(T){Xt(T),be.remove(T)}function Xt(T){const z=be.get(T).programs;z!==void 0&&(z.forEach(function(Y){ze.releaseProgram(Y)}),T.isShaderMaterial&&ze.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,Y,q,H,me){z===null&&(z=nt);const Ae=H.isMesh&&H.matrixWorld.determinant()<0,He=Ga(T,z,Y,q,H);ge.setMaterial(q,Ae);let Ie=Y.index,tt=1;if(q.wireframe===!0){if(Ie=se.getWireframeAttribute(Y),Ie===void 0)return;tt=2}const ot=Y.drawRange,Ue=Y.attributes.position;let it=ot.start*tt,wt=(ot.start+ot.count)*tt;me!==null&&(it=Math.max(it,me.start*tt),wt=Math.min(wt,(me.start+me.count)*tt)),Ie!==null?(it=Math.max(it,0),wt=Math.min(wt,Ie.count)):Ue!=null&&(it=Math.max(it,0),wt=Math.min(wt,Ue.count));const Rt=wt-it;if(Rt<0||Rt===1/0)return;St.setup(H,q,He,Y,Ie);let an,vt=Oe;if(Ie!==null&&(an=ne.get(Ie),vt=mt,vt.setIndex(an)),H.isMesh)q.wireframe===!0?(ge.setLineWidth(q.wireframeLinewidth*he()),vt.setMode(I.LINES)):vt.setMode(I.TRIANGLES);else if(H.isLine){let Ge=q.linewidth;Ge===void 0&&(Ge=1),ge.setLineWidth(Ge*he()),H.isLineSegments?vt.setMode(I.LINES):H.isLineLoop?vt.setMode(I.LINE_LOOP):vt.setMode(I.LINE_STRIP)}else H.isPoints?vt.setMode(I.POINTS):H.isSprite&&vt.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)vt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))vt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ge=H._multiDrawStarts,A=H._multiDrawCounts,U=H._multiDrawCount,K=Ie?ne.get(Ie).bytesPerElement:1,ee=be.get(q).currentProgram.getUniforms();for(let te=0;te<U;te++)ee.setValue(I,"_gl_DrawID",te),vt.render(Ge[te]/K,A[te])}else if(H.isInstancedMesh)vt.renderInstances(it,Rt,H.count);else if(Y.isInstancedBufferGeometry){const Ge=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,A=Math.min(Y.instanceCount,Ge);vt.renderInstances(it,Rt,A)}else vt.render(it,Rt)};function gt(T,z,Y){T.transparent===!0&&T.side===xn&&T.forceSinglePass===!1?(T.side=On,T.needsUpdate=!0,Wi(T,z,Y),T.side=Hi,T.needsUpdate=!0,Wi(T,z,Y),T.side=xn):Wi(T,z,Y)}this.compile=function(T,z,Y=null){Y===null&&(Y=T),p=at.get(Y),p.init(z),M.push(p),Y.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),T!==Y&&T.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const q=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const me=H.material;if(me)if(Array.isArray(me))for(let Ae=0;Ae<me.length;Ae++){const He=me[Ae];gt(He,Y,H),q.add(He)}else gt(me,Y,H),q.add(me)}),M.pop(),p=null,q},this.compileAsync=function(T,z,Y=null){const q=this.compile(T,z,Y);return new Promise(H=>{function me(){if(q.forEach(function(Ae){be.get(Ae).currentProgram.isReady()&&q.delete(Ae)}),q.size===0){H(T);return}setTimeout(me,10)}ce.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Ln=null;function oi(T){Ln&&Ln(T)}function Cr(){xi.stop()}function Je(){xi.start()}const xi=new Hf;xi.setAnimationLoop(oi),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(T){Ln=T,Z.setAnimationLoop(T),T===null?xi.stop():xi.start()},Z.addEventListener("sessionstart",Cr),Z.addEventListener("sessionend",Je),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(z),z=Z.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,z,P),p=at.get(T,M.length),p.init(z),M.push(p),De.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),$.setFromProjectionMatrix(De),Re=this.localClippingEnabled,fe=ue.init(this.clippingPlanes,Re),g=Se.get(T,x.length),g.init(),x.push(g),Z.enabled===!0&&Z.isPresenting===!0){const me=_.xr.getDepthSensingMesh();me!==null&&Pr(me,z,-1/0,_.sortObjects)}Pr(T,z,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(J,le),ie=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,ie&&qe.addToRenderList(g,T),this.info.render.frame++,fe===!0&&ue.beginShadows();const Y=p.state.shadowsArray;Le.render(Y,T,z),fe===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=g.opaque,H=g.transmissive;if(p.setupLights(),z.isArrayCamera){const me=z.cameras;if(H.length>0)for(let Ae=0,He=me.length;Ae<He;Ae++){const Ie=me[Ae];Dn(q,H,T,Ie)}ie&&qe.render(T);for(let Ae=0,He=me.length;Ae<He;Ae++){const Ie=me[Ae];os(g,T,Ie,Ie.viewport)}}else H.length>0&&Dn(q,H,T,z),ie&&qe.render(T),os(g,T,z);P!==null&&(L.updateMultisampleRenderTarget(P),L.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(_,T,z),St.resetDefaultState(),y=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],fe===!0&&ue.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function Pr(T,z,Y,q){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$.intersectsSprite(T)){q&&ke.setFromMatrixPosition(T.matrixWorld).applyMatrix4(De);const Ae=Q.update(T),He=T.material;He.visible&&g.push(T,Ae,He,Y,ke.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||$.intersectsObject(T))){const Ae=Q.update(T),He=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ke.copy(T.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),ke.copy(Ae.boundingSphere.center)),ke.applyMatrix4(T.matrixWorld).applyMatrix4(De)),Array.isArray(He)){const Ie=Ae.groups;for(let tt=0,ot=Ie.length;tt<ot;tt++){const Ue=Ie[tt],it=He[Ue.materialIndex];it&&it.visible&&g.push(T,Ae,it,Y,ke.z,Ue)}}else He.visible&&g.push(T,Ae,He,Y,ke.z,null)}}const me=T.children;for(let Ae=0,He=me.length;Ae<He;Ae++)Pr(me[Ae],z,Y,q)}function os(T,z,Y,q){const H=T.opaque,me=T.transmissive,Ae=T.transparent;p.setupLightsView(Y),fe===!0&&ue.setGlobalState(_.clippingPlanes,Y),q&&ge.viewport(R.copy(q)),H.length>0&&ai(H,z,Y),me.length>0&&ai(me,z,Y),Ae.length>0&&ai(Ae,z,Y),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Dn(T,z,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Tn(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?Fn:wi,minFilter:Bi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const me=p.state.transmissionRenderTarget[q.id],Ae=q.viewport||R;me.setSize(Ae.z,Ae.w);const He=_.getRenderTarget();_.setRenderTarget(me),_.getClearColor(O),V=_.getClearAlpha(),V<1&&_.setClearColor(16777215,.5),_.clear(),ie&&qe.render(Y);const Ie=_.toneMapping;_.toneMapping=ns;const tt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),fe===!0&&ue.setGlobalState(_.clippingPlanes,q),ai(T,Y,q),L.updateMultisampleRenderTarget(me),L.updateRenderTargetMipmap(me),ce.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Ue=0,it=z.length;Ue<it;Ue++){const wt=z[Ue],Rt=wt.object,an=wt.geometry,vt=wt.material,Ge=wt.group;if(vt.side===xn&&Rt.layers.test(q.layers)){const A=vt.side;vt.side=On,vt.needsUpdate=!0,Lr(Rt,Y,q,an,vt,Ge),vt.side=A,vt.needsUpdate=!0,ot=!0}}ot===!0&&(L.updateMultisampleRenderTarget(me),L.updateRenderTargetMipmap(me))}_.setRenderTarget(He),_.setClearColor(O,V),tt!==void 0&&(q.viewport=tt),_.toneMapping=Ie}function ai(T,z,Y){const q=z.isScene===!0?z.overrideMaterial:null;for(let H=0,me=T.length;H<me;H++){const Ae=T[H],He=Ae.object,Ie=Ae.geometry,tt=q===null?Ae.material:q,ot=Ae.group;He.layers.test(Y.layers)&&Lr(He,z,Y,Ie,tt,ot)}}function Lr(T,z,Y,q,H,me){T.onBeforeRender(_,z,Y,q,H,me),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(_,z,Y,q,T,me),H.transparent===!0&&H.side===xn&&H.forceSinglePass===!1?(H.side=On,H.needsUpdate=!0,_.renderBufferDirect(Y,z,q,H,T,me),H.side=Hi,H.needsUpdate=!0,_.renderBufferDirect(Y,z,q,H,T,me),H.side=xn):_.renderBufferDirect(Y,z,q,H,T,me),T.onAfterRender(_,z,Y,q,H,me)}function Wi(T,z,Y){z.isScene!==!0&&(z=nt);const q=be.get(T),H=p.state.lights,me=p.state.shadowsArray,Ae=H.state.version,He=ze.getParameters(T,H.state,me,z,Y),Ie=ze.getProgramCacheKey(He);let tt=q.programs;q.environment=T.isMeshStandardMaterial?z.environment:null,q.fog=z.fog,q.envMap=(T.isMeshStandardMaterial?X:b).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,tt===void 0&&(T.addEventListener("dispose",lt),tt=new Map,q.programs=tt);let ot=tt.get(Ie);if(ot!==void 0){if(q.currentProgram===ot&&q.lightsStateVersion===Ae)return as(T,He),ot}else He.uniforms=ze.getUniforms(T),T.onBeforeCompile(He,_),ot=ze.acquireProgram(He,Ie),tt.set(Ie,ot),q.uniforms=He.uniforms;const Ue=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ue.clippingPlanes=ue.uniform),as(T,He),q.needsLights=Wa(T),q.lightsStateVersion=Ae,q.needsLights&&(Ue.ambientLightColor.value=H.state.ambient,Ue.lightProbe.value=H.state.probe,Ue.directionalLights.value=H.state.directional,Ue.directionalLightShadows.value=H.state.directionalShadow,Ue.spotLights.value=H.state.spot,Ue.spotLightShadows.value=H.state.spotShadow,Ue.rectAreaLights.value=H.state.rectArea,Ue.ltc_1.value=H.state.rectAreaLTC1,Ue.ltc_2.value=H.state.rectAreaLTC2,Ue.pointLights.value=H.state.point,Ue.pointLightShadows.value=H.state.pointShadow,Ue.hemisphereLights.value=H.state.hemi,Ue.directionalShadowMap.value=H.state.directionalShadowMap,Ue.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ue.spotShadowMap.value=H.state.spotShadowMap,Ue.spotLightMatrix.value=H.state.spotLightMatrix,Ue.spotLightMap.value=H.state.spotLightMap,Ue.pointShadowMap.value=H.state.pointShadowMap,Ue.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=ot,q.uniformsList=null,ot}function bo(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=_a.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function as(T,z){const Y=be.get(T);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.batchingColor=z.batchingColor,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.instancingMorph=z.instancingMorph,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function Ga(T,z,Y,q,H){z.isScene!==!0&&(z=nt),L.resetTextureUnits();const me=z.fog,Ae=q.isMeshStandardMaterial?z.environment:null,He=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Pn,Ie=(q.isMeshStandardMaterial?X:b).get(q.envMap||Ae),tt=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ot=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ue=!!Y.morphAttributes.position,it=!!Y.morphAttributes.normal,wt=!!Y.morphAttributes.color;let Rt=ns;q.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Rt=_.toneMapping);const an=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,vt=an!==void 0?an.length:0,Ge=be.get(q),A=p.state.lights;if(fe===!0&&(Re===!0||T!==S)){const $e=T===S&&q.id===y;ue.setState(q,T,$e)}let U=!1;q.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==A.state.version||Ge.outputColorSpace!==He||H.isBatchedMesh&&Ge.batching===!1||!H.isBatchedMesh&&Ge.batching===!0||H.isBatchedMesh&&Ge.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ge.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ge.instancing===!1||!H.isInstancedMesh&&Ge.instancing===!0||H.isSkinnedMesh&&Ge.skinning===!1||!H.isSkinnedMesh&&Ge.skinning===!0||H.isInstancedMesh&&Ge.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ge.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ge.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ge.instancingMorph===!1&&H.morphTexture!==null||Ge.envMap!==Ie||q.fog===!0&&Ge.fog!==me||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==ue.numPlanes||Ge.numIntersection!==ue.numIntersection)||Ge.vertexAlphas!==tt||Ge.vertexTangents!==ot||Ge.morphTargets!==Ue||Ge.morphNormals!==it||Ge.morphColors!==wt||Ge.toneMapping!==Rt||Ge.morphTargetsCount!==vt)&&(U=!0):(U=!0,Ge.__version=q.version);let K=Ge.currentProgram;U===!0&&(K=Wi(q,z,H));let ee=!1,te=!1,Me=!1;const _e=K.getUniforms(),pe=Ge.uniforms;if(ge.useProgram(K.program)&&(ee=!0,te=!0,Me=!0),q.id!==y&&(y=q.id,te=!0),ee||S!==T){ge.buffers.depth.getReversed()?(de.copy(T.projectionMatrix),Np(de),Up(de),_e.setValue(I,"projectionMatrix",de)):_e.setValue(I,"projectionMatrix",T.projectionMatrix),_e.setValue(I,"viewMatrix",T.matrixWorldInverse);const ct=_e.map.cameraPosition;ct!==void 0&&ct.setValue(I,Ve.setFromMatrixPosition(T.matrixWorld)),Pe.logarithmicDepthBuffer&&_e.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&_e.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,te=!0,Me=!0)}if(H.isSkinnedMesh){_e.setOptional(I,H,"bindMatrix"),_e.setOptional(I,H,"bindMatrixInverse");const $e=H.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),_e.setValue(I,"boneTexture",$e.boneTexture,L))}H.isBatchedMesh&&(_e.setOptional(I,H,"batchingTexture"),_e.setValue(I,"batchingTexture",H._matricesTexture,L),_e.setOptional(I,H,"batchingIdTexture"),_e.setValue(I,"batchingIdTexture",H._indirectTexture,L),_e.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&_e.setValue(I,"batchingColorTexture",H._colorsTexture,L));const st=Y.morphAttributes;if((st.position!==void 0||st.normal!==void 0||st.color!==void 0)&&Ke.update(H,Y,K),(te||Ge.receiveShadow!==H.receiveShadow)&&(Ge.receiveShadow=H.receiveShadow,_e.setValue(I,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(pe.envMap.value=Ie,pe.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&z.environment!==null&&(pe.envMapIntensity.value=z.environmentIntensity),te&&(_e.setValue(I,"toneMappingExposure",_.toneMappingExposure),Ge.needsLights&&ls(pe,Me),me&&q.fog===!0&&xe.refreshFogUniforms(pe,me),xe.refreshMaterialUniforms(pe,q,W,j,p.state.transmissionRenderTarget[T.id]),_a.upload(I,bo(Ge),pe,L)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(_a.upload(I,bo(Ge),pe,L),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&_e.setValue(I,"center",H.center),_e.setValue(I,"modelViewMatrix",H.modelViewMatrix),_e.setValue(I,"normalMatrix",H.normalMatrix),_e.setValue(I,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const $e=q.uniformsGroups;for(let ct=0,yt=$e.length;ct<yt;ct++){const je=$e[ct];k.update(je,K),k.bind(je,K)}}return K}function ls(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function Wa(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,z,Y){be.get(T.texture).__webglTexture=z,be.get(T.depthTexture).__webglTexture=Y;const q=be.get(T);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=Y===void 0,q.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,z){const Y=be.get(T);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,Y=0){P=T,w=z,E=Y;let q=!0,H=null,me=!1,Ae=!1;if(T){const Ie=be.get(T);if(Ie.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(I.FRAMEBUFFER,null),q=!1;else if(Ie.__webglFramebuffer===void 0)L.setupRenderTarget(T);else if(Ie.__hasExternalTextures)L.rebindTextures(T,be.get(T.texture).__webglTexture,be.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ue=T.depthTexture;if(Ie.__boundDepthTexture!==Ue){if(Ue!==null&&be.has(Ue)&&(T.width!==Ue.image.width||T.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(T)}}const tt=T.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ae=!0);const ot=be.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ot[z])?H=ot[z][Y]:H=ot[z],me=!0):T.samples>0&&L.useMultisampledRTT(T)===!1?H=be.get(T).__webglMultisampledFramebuffer:Array.isArray(ot)?H=ot[Y]:H=ot,R.copy(T.viewport),F.copy(T.scissor),B=T.scissorTest}else R.copy(ve).multiplyScalar(W).floor(),F.copy(Ne).multiplyScalar(W).floor(),B=Ze;if(ge.bindFramebuffer(I.FRAMEBUFFER,H)&&q&&ge.drawBuffers(T,H),ge.viewport(R),ge.scissor(F),ge.setScissorTest(B),me){const Ie=be.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ie.__webglTexture,Y)}else if(Ae){const Ie=be.get(T.texture),tt=z||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ie.__webglTexture,Y||0,tt)}y=-1},this.readRenderTargetPixels=function(T,z,Y,q,H,me,Ae){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(He=He[Ae]),He){ge.bindFramebuffer(I.FRAMEBUFFER,He);try{const Ie=T.texture,tt=Ie.format,ot=Ie.type;if(!Pe.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-q&&Y>=0&&Y<=T.height-H&&I.readPixels(z,Y,q,H,et.convert(tt),et.convert(ot),me)}finally{const Ie=P!==null?be.get(P).__webglFramebuffer:null;ge.bindFramebuffer(I.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(T,z,Y,q,H,me,Ae){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(He=He[Ae]),He){const Ie=T.texture,tt=Ie.format,ot=Ie.type;if(!Pe.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=T.width-q&&Y>=0&&Y<=T.height-H){ge.bindFramebuffer(I.FRAMEBUFFER,He);const Ue=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ue),I.bufferData(I.PIXEL_PACK_BUFFER,me.byteLength,I.STREAM_READ),I.readPixels(z,Y,q,H,et.convert(tt),et.convert(ot),0);const it=P!==null?be.get(P).__webglFramebuffer:null;ge.bindFramebuffer(I.FRAMEBUFFER,it);const wt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Ip(I,wt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ue),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,me),I.deleteBuffer(Ue),I.deleteSync(wt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,z=null,Y=0){T.isTexture!==!0&&(Zr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,T=arguments[1]);const q=Math.pow(2,-Y),H=Math.floor(T.image.width*q),me=Math.floor(T.image.height*q),Ae=z!==null?z.x:0,He=z!==null?z.y:0;L.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,Y,0,0,Ae,He,H,me),ge.unbindTexture()},this.copyTextureToTexture=function(T,z,Y=null,q=null,H=0){T.isTexture!==!0&&(Zr("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,T=arguments[1],z=arguments[2],H=arguments[3]||0,Y=null);let me,Ae,He,Ie,tt,ot,Ue,it,wt;const Rt=T.isCompressedTexture?T.mipmaps[H]:T.image;Y!==null?(me=Y.max.x-Y.min.x,Ae=Y.max.y-Y.min.y,He=Y.isBox3?Y.max.z-Y.min.z:1,Ie=Y.min.x,tt=Y.min.y,ot=Y.isBox3?Y.min.z:0):(me=Rt.width,Ae=Rt.height,He=Rt.depth||1,Ie=0,tt=0,ot=0),q!==null?(Ue=q.x,it=q.y,wt=q.z):(Ue=0,it=0,wt=0);const an=et.convert(z.format),vt=et.convert(z.type);let Ge;z.isData3DTexture?(L.setTexture3D(z,0),Ge=I.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(L.setTexture2DArray(z,0),Ge=I.TEXTURE_2D_ARRAY):(L.setTexture2D(z,0),Ge=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,z.unpackAlignment);const A=I.getParameter(I.UNPACK_ROW_LENGTH),U=I.getParameter(I.UNPACK_IMAGE_HEIGHT),K=I.getParameter(I.UNPACK_SKIP_PIXELS),ee=I.getParameter(I.UNPACK_SKIP_ROWS),te=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Rt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Rt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ie),I.pixelStorei(I.UNPACK_SKIP_ROWS,tt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ot);const Me=T.isDataArrayTexture||T.isData3DTexture,_e=z.isDataArrayTexture||z.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const pe=be.get(T),st=be.get(z),$e=be.get(pe.__renderTarget),ct=be.get(st.__renderTarget);ge.bindFramebuffer(I.READ_FRAMEBUFFER,$e.__webglFramebuffer),ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let yt=0;yt<He;yt++)Me&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,be.get(T).__webglTexture,H,ot+yt),T.isDepthTexture?(_e&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,be.get(z).__webglTexture,H,wt+yt),I.blitFramebuffer(Ie,tt,me,Ae,Ue,it,me,Ae,I.DEPTH_BUFFER_BIT,I.NEAREST)):_e?I.copyTexSubImage3D(Ge,H,Ue,it,wt+yt,Ie,tt,me,Ae):I.copyTexSubImage2D(Ge,H,Ue,it,wt+yt,Ie,tt,me,Ae);ge.bindFramebuffer(I.READ_FRAMEBUFFER,null),ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else _e?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(Ge,H,Ue,it,wt,me,Ae,He,an,vt,Rt.data):z.isCompressedArrayTexture?I.compressedTexSubImage3D(Ge,H,Ue,it,wt,me,Ae,He,an,Rt.data):I.texSubImage3D(Ge,H,Ue,it,wt,me,Ae,He,an,vt,Rt):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,H,Ue,it,me,Ae,an,vt,Rt.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,H,Ue,it,Rt.width,Rt.height,an,Rt.data):I.texSubImage2D(I.TEXTURE_2D,H,Ue,it,me,Ae,an,vt,Rt);I.pixelStorei(I.UNPACK_ROW_LENGTH,A),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,U),I.pixelStorei(I.UNPACK_SKIP_PIXELS,K),I.pixelStorei(I.UNPACK_SKIP_ROWS,ee),I.pixelStorei(I.UNPACK_SKIP_IMAGES,te),H===0&&z.generateMipmaps&&I.generateMipmap(Ge),ge.unbindTexture()},this.copyTextureToTexture3D=function(T,z,Y=null,q=null,H=0){return T.isTexture!==!0&&(Zr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,q=arguments[1]||null,T=arguments[2],z=arguments[3],H=arguments[4]||0),Zr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,z,Y,q,H)},this.initRenderTarget=function(T){be.get(T).__webglFramebuffer===void 0&&L.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?L.setTextureCube(T,0):T.isData3DTexture?L.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?L.setTexture2DArray(T,0):L.setTexture2D(T,0),ge.unbindTexture()},this.resetState=function(){w=0,E=0,P=null,ge.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}class th{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xe(e),this.density=t}clone(){return new th(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Yf extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class jf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Tc,this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const En=new D;class fo{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=di(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=di(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=di(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=di(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=di(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array),s=Pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class po extends ni{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let $s;const Fr=new D,Js=new D,Qs=new D,er=new re,kr=new re,Kf=new Qe,Xo=new D,Br=new D,qo=new D,bu=new re,Ml=new re,wu=new re;class vr extends Ut{constructor(e=new po){if(super(),this.isSprite=!0,this.type="Sprite",$s===void 0){$s=new Vt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new jf(t,5);$s.setIndex([0,1,2,0,2,3]),$s.setAttribute("position",new fo(n,3,0,!1)),$s.setAttribute("uv",new fo(n,2,3,!1))}this.geometry=$s,this.material=e,this.center=new re(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Js.setFromMatrixScale(this.matrixWorld),Kf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Qs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Js.multiplyScalar(-Qs.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;Yo(Xo.set(-.5,-.5,0),Qs,o,Js,i,s),Yo(Br.set(.5,-.5,0),Qs,o,Js,i,s),Yo(qo.set(.5,.5,0),Qs,o,Js,i,s),bu.set(0,0),Ml.set(1,0),wu.set(1,1);let a=e.ray.intersectTriangle(Xo,Br,qo,!1,Fr);if(a===null&&(Yo(Br.set(-.5,.5,0),Qs,o,Js,i,s),Ml.set(0,1),a=e.ray.intersectTriangle(Xo,qo,Br,!1,Fr),a===null))return;const l=e.ray.origin.distanceTo(Fr);l<e.near||l>e.far||t.push({distance:l,point:Fr.clone(),uv:ei.getInterpolation(Fr,Xo,Br,qo,bu,Ml,wu,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Yo(r,e,t,n,i,s){er.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(kr.x=s*er.x-i*er.y,kr.y=i*er.x+s*er.y):kr.copy(er),r.copy(e),r.x+=kr.x,r.y+=kr.y,r.applyMatrix4(Kf)}const Tu=new D,Eu=new bt,Au=new bt,Wx=new D,Ru=new Qe,jo=new D,Sl=new vi,Cu=new Qe,bl=new wr;class Zf extends oe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Eh,this.bindMatrix=new Qe,this.bindMatrixInverse=new Qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new si),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jo),this.boundingBox.expandByPoint(jo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new vi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jo),this.boundingSphere.expandByPoint(jo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sl.copy(this.boundingSphere),Sl.applyMatrix4(i),e.ray.intersectsSphere(Sl)!==!1&&(Cu.copy(i).invert(),bl.copy(e.ray).applyMatrix4(Cu),!(this.boundingBox!==null&&bl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,bl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new bt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Eh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ip?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Eu.fromBufferAttribute(i.attributes.skinIndex,e),Au.fromBufferAttribute(i.attributes.skinWeight,e),Tu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Au.getComponent(s);if(o!==0){const a=Eu.getComponent(s);Ru.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Wx.copy(Tu).applyMatrix4(Ru),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class nh extends Ut{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ua extends nn{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Zt,u=Zt,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pu=new Qe,Xx=new Qe;class Oa{constructor(e=[],t=[]){this.uuid=ti(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Xx;Pu.multiplyMatrices(a,t[s]),Pu.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Oa(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ua(t,e,e,Wn,mi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new nh),this.bones.push(o),this.boneInverses.push(new Qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Rc extends Gt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const tr=new Qe,Lu=new Qe,Ko=[],Du=new si,qx=new Qe,zr=new oe,Vr=new vi;class Yx extends oe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,qx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,tr),Du.copy(e.boundingBox).applyMatrix4(tr),this.boundingBox.union(Du)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,tr),Vr.copy(e.boundingSphere).applyMatrix4(tr),this.boundingSphere.union(Vr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(zr.geometry=this.geometry,zr.material=this.material,zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vr.copy(this.boundingSphere),Vr.applyMatrix4(n),e.ray.intersectsSphere(Vr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,tr),Lu.multiplyMatrices(n,tr),zr.matrixWorld=Lu,zr.raycast(e,Ko);for(let o=0,a=Ko.length;o<a;o++){const l=Ko[o];l.instanceId=s,l.object=this,t.push(l)}Ko.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Rc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ua(new Float32Array(i*this.count),i,this.count,Xc,mi));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ih extends ni{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ea=new D,Aa=new D,Iu=new Qe,Hr=new wr,Zo=new vi,wl=new D,Nu=new D;class sh extends Ut{constructor(e=new Vt,t=new ih){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ea.fromBufferAttribute(t,i-1),Aa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ea.distanceTo(Aa);e.setAttribute("lineDistance",new _t(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(i),Zo.radius+=s,e.ray.intersectsSphere(Zo)===!1)return;Iu.copy(i).invert(),Hr.copy(e.ray).applyMatrix4(Iu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let v=d,g=m-1;v<g;v+=c){const p=u.getX(v),x=u.getX(v+1),M=$o(this,e,Hr,l,p,x);M&&t.push(M)}if(this.isLineLoop){const v=u.getX(m-1),g=u.getX(d),p=$o(this,e,Hr,l,v,g);p&&t.push(p)}}else{const d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let v=d,g=m-1;v<g;v+=c){const p=$o(this,e,Hr,l,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=$o(this,e,Hr,l,m-1,d);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function $o(r,e,t,n,i,s){const o=r.geometry.attributes.position;if(Ea.fromBufferAttribute(o,i),Aa.fromBufferAttribute(o,s),t.distanceSqToSegment(Ea,Aa,wl,Nu)>n)return;wl.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(wl);if(!(l<e.near||l>e.far))return{distance:l,point:Nu.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const Uu=new D,Ou=new D;class $f extends sh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Uu.fromBufferAttribute(t,i),Ou.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Uu.distanceTo(Ou);e.setAttribute("lineDistance",new _t(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jx extends sh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Jf extends ni{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fu=new Qe,Cc=new wr,Jo=new vi,Qo=new D;class Qf extends Ut{constructor(e=new Vt,t=new Jf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jo.copy(n.boundingSphere),Jo.applyMatrix4(i),Jo.radius+=s,e.ray.intersectsSphere(Jo)===!1)return;Fu.copy(i).invert(),Cc.copy(e.ray).applyMatrix4(Fu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,v=d;m<v;m++){const g=c.getX(m);Qo.fromBufferAttribute(h,g),ku(Qo,g,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=f,v=d;m<v;m++)Qo.fromBufferAttribute(h,m),ku(Qo,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ku(r,e,t,n,i,s,o){const a=Cc.distanceSqToPoint(r);if(a<t){const l=new D;Cc.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Gi extends nn{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ei{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new re:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new D,i=[],s=[],o=[],a=new D,l=new Qe;for(let d=0;d<=e;d++){const m=d/e;i[d]=this.getTangentAt(m,new D)}s[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(tn(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(tn(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class rh extends Ei{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new re){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Kx extends rh{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function oh(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const ea=new D,Tl=new oh,El=new oh,Al=new oh;class ya extends Ei{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new D){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(ea.subVectors(i[0],i[1]).add(i[0]),c=ea);const h=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(ea.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=ea),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(h),d),v=Math.pow(h.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(u),d);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),Tl.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,m,v,g),El.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,m,v,g),Al.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,m,v,g)}else this.curveType==="catmullrom"&&(Tl.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),El.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Al.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Tl.calc(l),El.calc(l),Al.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new D().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Bu(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function Zx(r,e){const t=1-r;return t*t*e}function $x(r,e){return 2*(1-r)*r*e}function Jx(r,e){return r*r*e}function no(r,e,t,n){return Zx(r,e)+$x(r,t)+Jx(r,n)}function Qx(r,e){const t=1-r;return t*t*t*e}function e_(r,e){const t=1-r;return 3*t*t*r*e}function t_(r,e){return 3*(1-r)*r*r*e}function n_(r,e){return r*r*r*e}function io(r,e,t,n,i){return Qx(r,e)+e_(r,t)+t_(r,n)+n_(r,i)}class ed extends Ei{constructor(e=new re,t=new re,n=new re,i=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new re){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(io(e,i.x,s.x,o.x,a.x),io(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class i_ extends Ei{constructor(e=new D,t=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new D){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(io(e,i.x,s.x,o.x,a.x),io(e,i.y,s.y,o.y,a.y),io(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class td extends Ei{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class s_ extends Ei{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nd extends Ei{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(no(e,i.x,s.x,o.x),no(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class id extends Ei{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(no(e,i.x,s.x,o.x),no(e,i.y,s.y,o.y),no(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sd extends Ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Bu(a,l.x,c.x,u.x,h.x),Bu(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new re().fromArray(i))}return this}}var Ra=Object.freeze({__proto__:null,ArcCurve:Kx,CatmullRomCurve3:ya,CubicBezierCurve:ed,CubicBezierCurve3:i_,EllipseCurve:rh,LineCurve:td,LineCurve3:s_,QuadraticBezierCurve:nd,QuadraticBezierCurve3:id,SplineCurve:sd});class r_ extends Ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ra[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Ra[i.type]().fromJSON(i))}return this}}class Pc extends r_{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new td(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new nd(this.currentPoint.clone(),new re(e,t),new re(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new ed(this.currentPoint.clone(),new re(e,t),new re(n,i),new re(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new sd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const c=new rh(e,t,n,i,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ns extends Vt{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=tn(i,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],u=1/t,h=new D,f=new re,d=new D,m=new D,v=new D;let g=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,d.x=p*1,d.y=-g,d.z=p*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(m)}for(let x=0;x<=t;x++){const M=n+x*u*i,_=Math.sin(M),C=Math.cos(M);for(let w=0;w<=e.length-1;w++){h.x=e[w].x*_,h.y=e[w].y,h.z=e[w].x*C,o.push(h.x,h.y,h.z),f.x=x/t,f.y=w/(e.length-1),a.push(f.x,f.y);const E=l[3*w+0]*_,P=l[3*w+1],y=l[3*w+0]*C;c.push(E,P,y)}}for(let x=0;x<t;x++)for(let M=0;M<e.length-1;M++){const _=M+x*e.length,C=_,w=_+e.length,E=_+e.length+1,P=_+1;s.push(C,w,P),s.push(E,P,w)}this.setIndex(s),this.setAttribute("position",new _t(o,3)),this.setAttribute("uv",new _t(a,2)),this.setAttribute("normal",new _t(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.points,e.segments,e.phiStart,e.phiLength)}}class Ts extends Ns{constructor(e=1,t=1,n=4,i=8){const s=new Pc;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Ts(e.radius,e.length,e.capSegments,e.radialSegments)}}class es extends Vt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new D,u=new re;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=n+h/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new _t(o,3)),this.setAttribute("normal",new _t(a,3)),this.setAttribute("uv",new _t(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class kt extends Vt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],f=[],d=[];let m=0;const v=[],g=n/2;let p=0;x(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new _t(h,3)),this.setAttribute("normal",new _t(f,3)),this.setAttribute("uv",new _t(d,2));function x(){const _=new D,C=new D;let w=0;const E=(t-e)/n;for(let P=0;P<=s;P++){const y=[],S=P/s,R=S*(t-e)+e;for(let F=0;F<=i;F++){const B=F/i,O=B*l+a,V=Math.sin(O),G=Math.cos(O);C.x=R*V,C.y=-S*n+g,C.z=R*G,h.push(C.x,C.y,C.z),_.set(V,E,G).normalize(),f.push(_.x,_.y,_.z),d.push(B,1-S),y.push(m++)}v.push(y)}for(let P=0;P<i;P++)for(let y=0;y<s;y++){const S=v[y][P],R=v[y+1][P],F=v[y+1][P+1],B=v[y][P+1];(e>0||y!==0)&&(u.push(S,R,B),w+=3),(t>0||y!==s-1)&&(u.push(R,F,B),w+=3)}c.addGroup(p,w,0),p+=w}function M(_){const C=m,w=new re,E=new D;let P=0;const y=_===!0?e:t,S=_===!0?1:-1;for(let F=1;F<=i;F++)h.push(0,g*S,0),f.push(0,S,0),d.push(.5,.5),m++;const R=m;for(let F=0;F<=i;F++){const O=F/i*l+a,V=Math.cos(O),G=Math.sin(O);E.x=y*G,E.y=g*S,E.z=y*V,h.push(E.x,E.y,E.z),f.push(0,S,0),w.x=V*.5+.5,w.y=G*.5*S+.5,d.push(w.x,w.y),m++}for(let F=0;F<i;F++){const B=C+F,O=R+F;_===!0?u.push(O,O+1,B):u.push(O+1,O,B),P+=3}c.addGroup(p,P,_===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _o extends kt{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new _o(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yo extends Pc{constructor(e){super(e),this.uuid=ti(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Pc().fromJSON(i))}return this}}const o_={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=rd(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,d;if(n&&(s=u_(r,e,s,t)),r.length>80*t){a=c=r[0],l=u=r[1];for(let m=t;m<i;m+=t)h=r[m],f=r[m+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return mo(s,o,t,a,l,d,0),o}};function rd(r,e,t,n,i){let s,o;if(i===S_(r,e,t,n)>0)for(s=e;s<t;s+=n)o=zu(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=zu(s,r[s],r[s+1],o);return o&&Fa(o,o.next)&&(vo(o),o=o.next),o}function Ls(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Fa(t,t.next)||Wt(t.prev,t,t.next)===0)){if(vo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function mo(r,e,t,n,i,s,o){if(!r)return;!o&&s&&g_(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?l_(r,n,i,s):a_(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),vo(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=c_(Ls(r),e,t),mo(r,e,t,n,i,s,2)):o===2&&h_(r,e,t,n,i,s):mo(Ls(r),e,t,n,i,s,1);break}}}function a_(r){const e=r.prev,t=r,n=r.next;if(Wt(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=i<s?i<o?i:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=i>s?i>o?i:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c;let m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=d&&sr(i,a,s,l,o,c,m.x,m.y)&&Wt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function l_(r,e,t,n){const i=r.prev,s=r,o=r.next;if(Wt(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,u=i.y,h=s.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,m=u<h?u<f?u:f:h<f?h:f,v=a>l?a>c?a:c:l>c?l:c,g=u>h?u>f?u:f:h>f?h:f,p=Lc(d,m,e,t,n),x=Lc(v,g,e,t,n);let M=r.prevZ,_=r.nextZ;for(;M&&M.z>=p&&_&&_.z<=x;){if(M.x>=d&&M.x<=v&&M.y>=m&&M.y<=g&&M!==i&&M!==o&&sr(a,u,l,h,c,f,M.x,M.y)&&Wt(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=d&&_.x<=v&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&sr(a,u,l,h,c,f,_.x,_.y)&&Wt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=v&&M.y>=m&&M.y<=g&&M!==i&&M!==o&&sr(a,u,l,h,c,f,M.x,M.y)&&Wt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=x;){if(_.x>=d&&_.x<=v&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&sr(a,u,l,h,c,f,_.x,_.y)&&Wt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function c_(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!Fa(i,s)&&od(i,n,n.next,s)&&go(i,s)&&go(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),vo(n),vo(n.next),n=r=s),n=n.next}while(n!==r);return Ls(n)}function h_(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&__(o,a)){let l=ad(o,a);o=Ls(o,o.next),l=Ls(l,l.next),mo(o,e,t,n,i,s,0),mo(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function u_(r,e,t,n){const i=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=rd(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(x_(c));for(i.sort(f_),s=0;s<i.length;s++)t=d_(i[s],t);return t}function f_(r,e){return r.x-e.x}function d_(r,e){const t=p_(r,e);if(!t)return e;const n=ad(t,r);return Ls(n,n.next),Ls(t,t.next)}function p_(r,e){let t=e,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===s))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,h;t=i;do s>=t.x&&t.x>=l&&s!==t.x&&sr(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),go(t,r)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&m_(i,t)))&&(i=t,u=h)),t=t.next;while(t!==a);return i}function m_(r,e){return Wt(r.prev,r,e.prev)<0&&Wt(e.next,r,r.next)<0}function g_(r,e,t,n){let i=r;do i.z===0&&(i.z=Lc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,v_(i)}function v_(r){let e,t,n,i,s,o,a,l,c=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(o>1);return r}function Lc(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function x_(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function sr(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function __(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!y_(r,e)&&(go(r,e)&&go(e,r)&&M_(r,e)&&(Wt(r.prev,r,e.prev)||Wt(r,e.prev,e))||Fa(r,e)&&Wt(r.prev,r,r.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Fa(r,e){return r.x===e.x&&r.y===e.y}function od(r,e,t,n){const i=na(Wt(r,e,t)),s=na(Wt(r,e,n)),o=na(Wt(t,n,r)),a=na(Wt(t,n,e));return!!(i!==s&&o!==a||i===0&&ta(r,t,e)||s===0&&ta(r,n,e)||o===0&&ta(t,r,n)||a===0&&ta(t,e,n))}function ta(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function na(r){return r>0?1:r<0?-1:0}function y_(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&od(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function go(r,e){return Wt(r.prev,r,r.next)<0?Wt(r,e,r.next)>=0&&Wt(r,r.prev,e)>=0:Wt(r,e,r.prev)<0||Wt(r,r.next,e)<0}function M_(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function ad(r,e){const t=new Dc(r.i,r.x,r.y),n=new Dc(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function zu(r,e,t,n){const i=new Dc(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function vo(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Dc(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function S_(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class is{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return is.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Vu(e),Hu(n,e);let o=e.length;t.forEach(Vu);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Hu(n,t[l]);const a=o_.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Vu(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Hu(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class ka extends Vt{constructor(e=new yo([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new _t(i,3)),this.setAttribute("uv",new _t(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:b_;let M,_=!1,C,w,E,P;p&&(M=p.getSpacedPoints(u),_=!0,f=!1,C=p.computeFrenetFrames(u,!1),w=new D,E=new D,P=new D),f||(g=0,d=0,m=0,v=0);const y=a.extractPoints(c);let S=y.shape;const R=y.holes;if(!is.isClockWise(S)){S=S.reverse();for(let ie=0,he=R.length;ie<he;ie++){const I=R[ie];is.isClockWise(I)&&(R[ie]=I.reverse())}}const B=is.triangulateShape(S,R),O=S;for(let ie=0,he=R.length;ie<he;ie++){const I=R[ie];S=S.concat(I)}function V(ie,he,I){return he||console.error("THREE.ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(he,I)}const G=S.length,j=B.length;function W(ie,he,I){let Be,ce,Pe;const ge=ie.x-he.x,We=ie.y-he.y,be=I.x-ie.x,L=I.y-ie.y,b=ge*ge+We*We,X=ge*L-We*be;if(Math.abs(X)>Number.EPSILON){const ne=Math.sqrt(b),se=Math.sqrt(be*be+L*L),Q=he.x-We/ne,ze=he.y+ge/ne,xe=I.x-L/se,Se=I.y+be/se,at=((xe-Q)*L-(Se-ze)*be)/(ge*L-We*be);Be=Q+ge*at-ie.x,ce=ze+We*at-ie.y;const ue=Be*Be+ce*ce;if(ue<=2)return new re(Be,ce);Pe=Math.sqrt(ue/2)}else{let ne=!1;ge>Number.EPSILON?be>Number.EPSILON&&(ne=!0):ge<-Number.EPSILON?be<-Number.EPSILON&&(ne=!0):Math.sign(We)===Math.sign(L)&&(ne=!0),ne?(Be=-We,ce=ge,Pe=Math.sqrt(b)):(Be=ge,ce=We,Pe=Math.sqrt(b/2))}return new re(Be/Pe,ce/Pe)}const J=[];for(let ie=0,he=O.length,I=he-1,Be=ie+1;ie<he;ie++,I++,Be++)I===he&&(I=0),Be===he&&(Be=0),J[ie]=W(O[ie],O[I],O[Be]);const le=[];let ve,Ne=J.concat();for(let ie=0,he=R.length;ie<he;ie++){const I=R[ie];ve=[];for(let Be=0,ce=I.length,Pe=ce-1,ge=Be+1;Be<ce;Be++,Pe++,ge++)Pe===ce&&(Pe=0),ge===ce&&(ge=0),ve[Be]=W(I[Be],I[Pe],I[ge]);le.push(ve),Ne=Ne.concat(ve)}for(let ie=0;ie<g;ie++){const he=ie/g,I=d*Math.cos(he*Math.PI/2),Be=m*Math.sin(he*Math.PI/2)+v;for(let ce=0,Pe=O.length;ce<Pe;ce++){const ge=V(O[ce],J[ce],Be);de(ge.x,ge.y,-I)}for(let ce=0,Pe=R.length;ce<Pe;ce++){const ge=R[ce];ve=le[ce];for(let We=0,be=ge.length;We<be;We++){const L=V(ge[We],ve[We],Be);de(L.x,L.y,-I)}}}const Ze=m+v;for(let ie=0;ie<G;ie++){const he=f?V(S[ie],Ne[ie],Ze):S[ie];_?(E.copy(C.normals[0]).multiplyScalar(he.x),w.copy(C.binormals[0]).multiplyScalar(he.y),P.copy(M[0]).add(E).add(w),de(P.x,P.y,P.z)):de(he.x,he.y,0)}for(let ie=1;ie<=u;ie++)for(let he=0;he<G;he++){const I=f?V(S[he],Ne[he],Ze):S[he];_?(E.copy(C.normals[ie]).multiplyScalar(I.x),w.copy(C.binormals[ie]).multiplyScalar(I.y),P.copy(M[ie]).add(E).add(w),de(P.x,P.y,P.z)):de(I.x,I.y,h/u*ie)}for(let ie=g-1;ie>=0;ie--){const he=ie/g,I=d*Math.cos(he*Math.PI/2),Be=m*Math.sin(he*Math.PI/2)+v;for(let ce=0,Pe=O.length;ce<Pe;ce++){const ge=V(O[ce],J[ce],Be);de(ge.x,ge.y,h+I)}for(let ce=0,Pe=R.length;ce<Pe;ce++){const ge=R[ce];ve=le[ce];for(let We=0,be=ge.length;We<be;We++){const L=V(ge[We],ve[We],Be);_?de(L.x,L.y+M[u-1].y,M[u-1].x+I):de(L.x,L.y,h+I)}}}$(),fe();function $(){const ie=i.length/3;if(f){let he=0,I=G*he;for(let Be=0;Be<j;Be++){const ce=B[Be];De(ce[2]+I,ce[1]+I,ce[0]+I)}he=u+g*2,I=G*he;for(let Be=0;Be<j;Be++){const ce=B[Be];De(ce[0]+I,ce[1]+I,ce[2]+I)}}else{for(let he=0;he<j;he++){const I=B[he];De(I[2],I[1],I[0])}for(let he=0;he<j;he++){const I=B[he];De(I[0]+G*u,I[1]+G*u,I[2]+G*u)}}n.addGroup(ie,i.length/3-ie,0)}function fe(){const ie=i.length/3;let he=0;Re(O,he),he+=O.length;for(let I=0,Be=R.length;I<Be;I++){const ce=R[I];Re(ce,he),he+=ce.length}n.addGroup(ie,i.length/3-ie,1)}function Re(ie,he){let I=ie.length;for(;--I>=0;){const Be=I;let ce=I-1;ce<0&&(ce=ie.length-1);for(let Pe=0,ge=u+g*2;Pe<ge;Pe++){const We=G*Pe,be=G*(Pe+1),L=he+Be+We,b=he+ce+We,X=he+ce+be,ne=he+Be+be;Ve(L,b,X,ne)}}}function de(ie,he,I){l.push(ie),l.push(he),l.push(I)}function De(ie,he,I){ke(ie),ke(he),ke(I);const Be=i.length/3,ce=x.generateTopUV(n,i,Be-3,Be-2,Be-1);nt(ce[0]),nt(ce[1]),nt(ce[2])}function Ve(ie,he,I,Be){ke(ie),ke(he),ke(Be),ke(he),ke(I),ke(Be);const ce=i.length/3,Pe=x.generateSideWallUV(n,i,ce-6,ce-3,ce-2,ce-1);nt(Pe[0]),nt(Pe[1]),nt(Pe[3]),nt(Pe[1]),nt(Pe[2]),nt(Pe[3])}function ke(ie){i.push(l[ie*3+0]),i.push(l[ie*3+1]),i.push(l[ie*3+2])}function nt(ie){s.push(ie.x),s.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return w_(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Ra[i.type]().fromJSON(i)),new ka(n,e.options)}}const b_={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new re(s,o),new re(a,l),new re(c,u)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[i*3],d=e[i*3+1],m=e[i*3+2],v=e[s*3],g=e[s*3+1],p=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new re(o,1-l),new re(c,1-h),new re(f,1-m),new re(v,1-p)]:[new re(a,1-l),new re(u,1-h),new re(d,1-m),new re(g,1-p)]}};function w_(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ah extends Vt{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],u=[];let h=e;const f=(t-e)/i,d=new D,m=new re;for(let v=0;v<=i;v++){for(let g=0;g<=n;g++){const p=s+g/n*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,u.push(m.x,m.y)}h+=f}for(let v=0;v<i;v++){const g=v*(n+1);for(let p=0;p<n;p++){const x=p+g,M=x,_=x+n+1,C=x+n+2,w=x+1;a.push(M,_,w),a.push(_,C,w)}}this.setIndex(a),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(c,3)),this.setAttribute("uv",new _t(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ah(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class lh extends Vt{constructor(e=new yo([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new _t(i,3)),this.setAttribute("normal",new _t(s,3)),this.setAttribute("uv",new _t(o,2));function c(u){const h=i.length/3,f=u.extractPoints(t);let d=f.shape;const m=f.holes;is.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){const x=m[g];is.isClockWise(x)===!0&&(m[g]=x.reverse())}const v=is.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){const x=m[g];d=d.concat(x)}for(let g=0,p=d.length;g<p;g++){const x=d[g];i.push(x.x,x.y,0),s.push(0,0,1),o.push(x.x,x.y)}for(let g=0,p=v.length;g<p;g++){const x=v[g],M=x[0]+h,_=x[1]+h,C=x[2]+h;n.push(M,_,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return T_(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const o=t[e.shapes[i]];n.push(o)}return new lh(n,e.curveSegments)}}function T_(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class Vn extends Vt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new D,f=new D,d=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){const x=[],M=p/n;let _=0;p===0&&o===0?_=.5/t:p===n&&l===Math.PI&&(_=-.5/t);for(let C=0;C<=t;C++){const w=C/t;h.x=-e*Math.cos(i+w*s)*Math.sin(o+M*a),h.y=e*Math.cos(o+M*a),h.z=e*Math.sin(i+w*s)*Math.sin(o+M*a),m.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),g.push(w+_,1-M),x.push(c++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const M=u[p][x+1],_=u[p][x],C=u[p+1][x],w=u[p+1][x+1];(p!==0||o>0)&&d.push(M,_,w),(p!==n-1||l<Math.PI)&&d.push(_,C,w)}this.setIndex(d),this.setAttribute("position",new _t(m,3)),this.setAttribute("normal",new _t(v,3)),this.setAttribute("uv",new _t(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ss extends Vt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new D,h=new D,f=new D;for(let d=0;d<=n;d++)for(let m=0;m<=i;m++){const v=m/i*s,g=d/n*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(v),h.y=(e+t*Math.cos(g))*Math.sin(v),h.z=t*Math.sin(g),a.push(h.x,h.y,h.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(m/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=i;m++){const v=(i+1)*d+m-1,g=(i+1)*(d-1)+m-1,p=(i+1)*(d-1)+m,x=(i+1)*d+m;o.push(v,g,x),o.push(g,p,x)}this.setIndex(o),this.setAttribute("position",new _t(a,3)),this.setAttribute("normal",new _t(l,3)),this.setAttribute("uv",new _t(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ss(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class so extends Vt{constructor(e=new id(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new D,l=new D,c=new re;let u=new D;const h=[],f=[],d=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new _t(h,3)),this.setAttribute("normal",new _t(f,3)),this.setAttribute("uv",new _t(d,2));function v(){for(let M=0;M<t;M++)g(M);g(s===!1?t:0),x(),p()}function g(M){u=e.getPointAt(M/t,u);const _=o.normals[M],C=o.binormals[M];for(let w=0;w<=i;w++){const E=w/i*Math.PI*2,P=Math.sin(E),y=-Math.cos(E);l.x=y*_.x+P*C.x,l.y=y*_.y+P*C.y,l.z=y*_.z+P*C.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=t;M++)for(let _=1;_<=i;_++){const C=(i+1)*(M-1)+(_-1),w=(i+1)*M+(_-1),E=(i+1)*M+_,P=(i+1)*(M-1)+_;m.push(C,w,P),m.push(w,E,P)}}function x(){for(let M=0;M<=t;M++)for(let _=0;_<=i;_++)c.x=M/t,c.y=_/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new so(new Ra[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class E_ extends zt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class Ce extends ni{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kc,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class At extends Ce{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class A_ extends ni{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kc,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}function ia(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function R_(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function C_(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Gu(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function ld(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Mo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class P_ extends Mo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ah,endingEnd:Ah}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Rh:s=e,a=2*t-n;break;case Ch:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Rh:o=e,l=2*n-t;break;case Ch:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),v=m*m,g=v*m,p=-f*g+2*f*v-f*m,x=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*m+1,M=(-1-d)*g+(1.5+d)*v+.5*m,_=d*g-d*v;for(let C=0;C!==a;++C)s[C]=p*o[u+C]+x*o[c+C]+M*o[l+C]+_*o[h+C];return s}}class L_ extends Mo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class D_ extends Mo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ai{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ia(t,this.TimeBufferType),this.values=ia(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ia(e.times,Array),values:ia(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new D_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new L_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new P_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case co:t=this.InterpolantFactoryMethodDiscrete;break;case ho:t=this.InterpolantFactoryMethodLinear;break;case Ya:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return co;case this.InterpolantFactoryMethodLinear:return ho;case this.InterpolantFactoryMethodSmooth:return Ya}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&R_(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ya,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let m=0;m!==n;++m){const v=t[h+m];if(v!==t[f+m]||v!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ai.prototype.TimeBufferType=Float32Array;Ai.prototype.ValueBufferType=Float32Array;Ai.prototype.DefaultInterpolation=ho;class Er extends Ai{constructor(e,t,n){super(e,t,n)}}Er.prototype.ValueTypeName="bool";Er.prototype.ValueBufferType=Array;Er.prototype.DefaultInterpolation=co;Er.prototype.InterpolantFactoryMethodLinear=void 0;Er.prototype.InterpolantFactoryMethodSmooth=void 0;class cd extends Ai{}cd.prototype.ValueTypeName="color";class xr extends Ai{}xr.prototype.ValueTypeName="number";class I_ extends Mo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)gi.slerpFlat(s,0,o,c-a,o,c,l);return s}}class _r extends Ai{InterpolantFactoryMethodLinear(e){return new I_(this.times,this.values,this.getValueSize(),e)}}_r.prototype.ValueTypeName="quaternion";_r.prototype.InterpolantFactoryMethodSmooth=void 0;class Ar extends Ai{constructor(e,t,n){super(e,t,n)}}Ar.prototype.ValueTypeName="string";Ar.prototype.ValueBufferType=Array;Ar.prototype.DefaultInterpolation=co;Ar.prototype.InterpolantFactoryMethodLinear=void 0;Ar.prototype.InterpolantFactoryMethodSmooth=void 0;class yr extends Ai{}yr.prototype.ValueTypeName="vector";class N_{constructor(e="",t=-1,n=[],i=sp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ti(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(O_(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Ai.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=C_(l);l=Gu(l,1,u),c=Gu(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new xr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,m,v){if(d.length!==0){const g=[],p=[];ld(d,g,p,m),g.length!==0&&v.push(new h(f,g,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let v=0;v<f[m].morphTargets.length;v++)d[f[m].morphTargets[v]]=-1;for(const v in d){const g=[],p=[];for(let x=0;x!==f[m].morphTargets.length;++x){const M=f[m];g.push(M.time),p.push(M.morphTarget===v?1:0)}i.push(new xr(".morphTargetInfluence["+v+"]",g,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(yr,d+".position",f,"pos",i),n(_r,d+".quaternion",f,"rot",i),n(yr,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function U_(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xr;case"vector":case"vector2":case"vector3":case"vector4":return yr;case"color":return cd;case"quaternion":return _r;case"bool":case"boolean":return Er;case"string":return Ar}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function O_(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=U_(r.type);if(r.times===void 0){const t=[],n=[];ld(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const ts={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class hd{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null}}}const F_=new hd;class Rr{constructor(e){this.manager=e!==void 0?e:F_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Rr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ni={};class k_ extends Error{constructor(e,t){super(e),this.response=t}}class ud extends Rr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ts.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ni[e]!==void 0){Ni[e].push({onLoad:t,onProgress:n,onError:i});return}Ni[e]=[],Ni[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ni[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0;let v=0;const g=new ReadableStream({start(p){x();function x(){h.read().then(({done:M,value:_})=>{if(M)p.close();else{v+=_.byteLength;const C=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:d});for(let w=0,E=u.length;w<E;w++){const P=u[w];P.onProgress&&P.onProgress(C)}p.enqueue(_),x()}},M=>{p.error(M)})}}});return new Response(g)}else throw new k_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{ts.add(e,c);const u=Ni[e];delete Ni[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Ni[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ni[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class B_ extends Rr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ts.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=uo("img");function l(){u(),ts.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class fd extends Rr{constructor(e){super(e)}load(e,t,n,i){const s=new nn,o=new B_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Ba extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class dd extends Ba{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Rl=new Qe,Wu=new D,Xu=new D;class ch{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jc,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Wu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wu),Xu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xu),t.updateMatrixWorld(),Rl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class z_ extends ch{constructor(){super(new wn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=mr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class hh extends Ba{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new z_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const qu=new Qe,Gr=new D,Cl=new D;class V_ extends ch{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new bt(2,1,1,1),new bt(0,1,1,1),new bt(3,1,1,1),new bt(1,1,1,1),new bt(3,0,1,1),new bt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Gr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gr),Cl.copy(n.position),Cl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Cl),n.updateMatrixWorld(),i.makeTranslation(-Gr.x,-Gr.y,-Gr.z),qu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qu)}}class Un extends Ba{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new V_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class H_ extends ch{constructor(){super(new Ia(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pd extends Ba{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new H_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ro{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class G_ extends Rr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ts.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return ts.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ts.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});ts.add(e,l),s.manager.itemStart(e)}}class md{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Yu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Yu(){return performance.now()}const uh="\\[\\]\\.:\\/",W_=new RegExp("["+uh+"]","g"),fh="[^"+uh+"]",X_="[^"+uh.replace("\\.","")+"]",q_=/((?:WC+[\/:])*)/.source.replace("WC",fh),Y_=/(WCOD+)?/.source.replace("WCOD",X_),j_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fh),K_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fh),Z_=new RegExp("^"+q_+Y_+j_+K_+"$"),$_=["material","materials","bones","map"];class J_{constructor(e,t,n){const i=n||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Lt{constructor(e,t,n){this.path=t,this.parsedPath=n||Lt.parseTrackName(t),this.node=Lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Lt.Composite(e,t,n):new Lt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(W_,"")}static parseTrackName(e){const t=Z_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);$_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Lt.Composite=J_;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const ju=new Qe;class Ca{constructor(e,t,n=0,i=1/0){this.ray=new wr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new $c,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ju.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ju),this}intersectObject(e,t=!0,n=[]){return Ic(e,this,n,t),n.sort(Ku),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Ic(e[i],this,n,t);return n.sort(Ku),n}}function Ku(r,e){return r.distance-e.distance}function Ic(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)Ic(s[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zc);class rs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Q_=new Ia(-1,1,1,-1,0,1);class e1 extends Vt{constructor(){super(),this.setAttribute("position",new _t([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new _t([0,2,0,0,2,0],2))}}const t1=new e1;class Mr{constructor(e){this._mesh=new oe(t1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Q_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class gd extends rs{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Xe}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const cr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class vd extends rs{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof zt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Hn.clone(e.uniforms),this.material=new zt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Mr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Zu extends rs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class n1 extends rs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class i1{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new re);this._width=n.width,this._height=n.height,t=new Tn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Fn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new vd(cr),this.copyPass.material.blending=hn,this.clock=new md}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Zu!==void 0&&(o instanceof Zu?n=!0:o instanceof n1&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const s1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Xe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Sr extends rs{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new re(e.x,e.y):new re(256,256),this.clearColor=new Xe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Tn(s,o,{type:Fn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new Tn(s,o,{type:Fn});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new Tn(s,o,{type:Fn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}const a=s1;this.highPassUniforms=Hn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new zt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new re(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=cr;this.copyUniforms=Hn.clone(u.uniforms),this.blendMaterial=new zt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:As,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Xe,this.oldClearAlpha=1,this.basic=new Si,this.fsQuad=new Mr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new re(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Sr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Sr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new zt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new re(.5,.5)},direction:{value:new re(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new zt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Sr.BlurDirectionX=new re(1,0);Sr.BlurDirectionY=new re(0,1);const r1={name:"AfterimageShader",uniforms:{damp:{value:.96},tOld:{value:null},tNew:{value:null}},vertexShader:`

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

		}`};class o1 extends rs{constructor(e=.96){super(),this.shader=r1,this.uniforms=Hn.clone(this.shader.uniforms),this.uniforms.damp.value=e,this.textureComp=new Tn(window.innerWidth,window.innerHeight,{magFilter:Zt,type:Fn}),this.textureOld=new Tn(window.innerWidth,window.innerHeight,{magFilter:Zt,type:Fn}),this.compFsMaterial=new zt({uniforms:this.uniforms,vertexShader:this.shader.vertexShader,fragmentShader:this.shader.fragmentShader}),this.compFsQuad=new Mr(this.compFsMaterial);const t=cr;this.copyFsMaterial=new zt({uniforms:Hn.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,blending:hn,depthTest:!1,depthWrite:!1}),this.copyFsQuad=new Mr(this.copyFsMaterial)}render(e,t,n){this.uniforms.tOld.value=this.textureOld.texture,this.uniforms.tNew.value=n.texture,e.setRenderTarget(this.textureComp),this.compFsQuad.render(e),this.copyFsQuad.material.uniforms.tDiffuse.value=this.textureComp.texture,this.renderToScreen?(e.setRenderTarget(null),this.copyFsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.copyFsQuad.render(e));const i=this.textureOld;this.textureOld=this.textureComp,this.textureComp=i}setSize(e,t){this.textureComp.setSize(e,t),this.textureOld.setSize(e,t)}dispose(){this.textureComp.dispose(),this.textureOld.dispose(),this.compFsMaterial.dispose(),this.copyFsMaterial.dispose(),this.compFsQuad.dispose(),this.copyFsQuad.dispose()}}const a1={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class l1 extends rs{constructor(){super();const e=a1;this.uniforms=Hn.clone(e.uniforms),this.material=new E_({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Mr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Mt.getTransfer(this._outputColorSpace)===Ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===mf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===gf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===vf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Vc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===xf?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===_f&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const sa={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new re},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Qe},cameraProjectionMatrixInverse:{value:new Qe},cameraWorldMatrix:{value:new Qe},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new D(-1,-1,-1)},sceneBoxMax:{value:new D(1,1,1)}},vertexShader:`

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
		}`},ra={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Pl={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function c1(r=5){const e=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),t=h1(e),n=t.length,i=new Uint8Array(n*4);for(let o=0;o<n;++o){const a=t[o],l=2*Math.PI*a/n,c=new D(Math.cos(l),Math.sin(l),0).normalize();i[o*4]=(c.x*.5+.5)*255,i[o*4+1]=(c.y*.5+.5)*255,i[o*4+2]=127,i[o*4+3]=255}const s=new Ua(i,e,e);return s.wrapS=Xn,s.wrapT=Xn,s.needsUpdate=!0,s}function h1(r){const e=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),t=e*e,n=Array(t).fill(0);let i=Math.floor(e/2),s=e-1;for(let o=1;o<=t;){if(i===-1&&s===e?(s=e-2,i=0):(s===e&&(s=0),i<0&&(i=e-1)),n[i*e+s]!==0){s-=2,i++;continue}else n[i*e+s]=o++;s++,i--}return n}const oa={defines:{SAMPLES:16,SAMPLE_VECTORS:xd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new re},cameraProjectionMatrixInverse:{value:new Qe},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function xd(r,e,t){const n=u1(r,e,t);let i="vec3[SAMPLES](";for(let s=0;s<r;s++){const o=n[s];i+=`vec3(${o.x}, ${o.y}, ${o.z})${s<r-1?",":")"}`}return i}function u1(r,e,t){const n=[];for(let i=0;i<r;i++){const s=2*Math.PI*e*i/r,o=Math.pow(i/(r-1),t);n.push(new D(Math.cos(s),Math.sin(s),o))}return n}class f1{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}dot4(e,t,n,i,s){return e[0]*t+e[1]*n+e[2]*i+e[3]*s}noise(e,t){let n,i,s;const o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),u=(3-Math.sqrt(3))/6,h=(l+c)*u,f=l-h,d=c-h,m=e-f,v=t-d;let g,p;m>v?(g=1,p=0):(g=0,p=1);const x=m-g+u,M=v-p+u,_=m-1+2*u,C=v-1+2*u,w=l&255,E=c&255,P=this.perm[w+this.perm[E]]%12,y=this.perm[w+g+this.perm[E+p]]%12,S=this.perm[w+1+this.perm[E+1]]%12;let R=.5-m*m-v*v;R<0?n=0:(R*=R,n=R*R*this.dot(this.grad3[P],m,v));let F=.5-x*x-M*M;F<0?i=0:(F*=F,i=F*F*this.dot(this.grad3[y],x,M));let B=.5-_*_-C*C;return B<0?s=0:(B*=B,s=B*B*this.dot(this.grad3[S],_,C)),70*(n+i+s)}noise3d(e,t,n){let i,s,o,a;const c=(e+t+n)*.3333333333333333,u=Math.floor(e+c),h=Math.floor(t+c),f=Math.floor(n+c),d=1/6,m=(u+h+f)*d,v=u-m,g=h-m,p=f-m,x=e-v,M=t-g,_=n-p;let C,w,E,P,y,S;x>=M?M>=_?(C=1,w=0,E=0,P=1,y=1,S=0):x>=_?(C=1,w=0,E=0,P=1,y=0,S=1):(C=0,w=0,E=1,P=1,y=0,S=1):M<_?(C=0,w=0,E=1,P=0,y=1,S=1):x<_?(C=0,w=1,E=0,P=0,y=1,S=1):(C=0,w=1,E=0,P=1,y=1,S=0);const R=x-C+d,F=M-w+d,B=_-E+d,O=x-P+2*d,V=M-y+2*d,G=_-S+2*d,j=x-1+3*d,W=M-1+3*d,J=_-1+3*d,le=u&255,ve=h&255,Ne=f&255,Ze=this.perm[le+this.perm[ve+this.perm[Ne]]]%12,$=this.perm[le+C+this.perm[ve+w+this.perm[Ne+E]]]%12,fe=this.perm[le+P+this.perm[ve+y+this.perm[Ne+S]]]%12,Re=this.perm[le+1+this.perm[ve+1+this.perm[Ne+1]]]%12;let de=.6-x*x-M*M-_*_;de<0?i=0:(de*=de,i=de*de*this.dot3(this.grad3[Ze],x,M,_));let De=.6-R*R-F*F-B*B;De<0?s=0:(De*=De,s=De*De*this.dot3(this.grad3[$],R,F,B));let Ve=.6-O*O-V*V-G*G;Ve<0?o=0:(Ve*=Ve,o=Ve*Ve*this.dot3(this.grad3[fe],O,V,G));let ke=.6-j*j-W*W-J*J;return ke<0?a=0:(ke*=ke,a=ke*ke*this.dot3(this.grad3[Re],j,W,J)),32*(i+s+o+a)}noise4d(e,t,n,i){const s=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let u,h,f,d,m;const v=(e+t+n+i)*l,g=Math.floor(e+v),p=Math.floor(t+v),x=Math.floor(n+v),M=Math.floor(i+v),_=(g+p+x+M)*c,C=g-_,w=p-_,E=x-_,P=M-_,y=e-C,S=t-w,R=n-E,F=i-P,B=y>S?32:0,O=y>R?16:0,V=S>R?8:0,G=y>F?4:0,j=S>F?2:0,W=R>F?1:0,J=B+O+V+G+j+W,le=o[J][0]>=3?1:0,ve=o[J][1]>=3?1:0,Ne=o[J][2]>=3?1:0,Ze=o[J][3]>=3?1:0,$=o[J][0]>=2?1:0,fe=o[J][1]>=2?1:0,Re=o[J][2]>=2?1:0,de=o[J][3]>=2?1:0,De=o[J][0]>=1?1:0,Ve=o[J][1]>=1?1:0,ke=o[J][2]>=1?1:0,nt=o[J][3]>=1?1:0,ie=y-le+c,he=S-ve+c,I=R-Ne+c,Be=F-Ze+c,ce=y-$+2*c,Pe=S-fe+2*c,ge=R-Re+2*c,We=F-de+2*c,be=y-De+3*c,L=S-Ve+3*c,b=R-ke+3*c,X=F-nt+3*c,ne=y-1+4*c,se=S-1+4*c,Q=R-1+4*c,ze=F-1+4*c,xe=g&255,Se=p&255,at=x&255,ue=M&255,Le=a[xe+a[Se+a[at+a[ue]]]]%32,qe=a[xe+le+a[Se+ve+a[at+Ne+a[ue+Ze]]]]%32,Ke=a[xe+$+a[Se+fe+a[at+Re+a[ue+de]]]]%32,Oe=a[xe+De+a[Se+Ve+a[at+ke+a[ue+nt]]]]%32,mt=a[xe+1+a[Se+1+a[at+1+a[ue+1]]]]%32;let et=.6-y*y-S*S-R*R-F*F;et<0?u=0:(et*=et,u=et*et*this.dot4(s[Le],y,S,R,F));let St=.6-ie*ie-he*he-I*I-Be*Be;St<0?h=0:(St*=St,h=St*St*this.dot4(s[qe],ie,he,I,Be));let k=.6-ce*ce-Pe*Pe-ge*ge-We*We;k<0?f=0:(k*=k,f=k*k*this.dot4(s[Ke],ce,Pe,ge,We));let ye=.6-be*be-L*L-b*b-X*X;ye<0?d=0:(ye*=ye,d=ye*ye*this.dot4(s[Oe],be,L,b,X));let Z=.6-ne*ne-se*se-Q*Q-ze*ze;return Z<0?m=0:(Z*=Z,m=Z*Z*this.dot4(s[mt],ne,se,Q,ze)),27*(u+h+f+d+m)}}class _i extends rs{constructor(e,t,n,i,s,o,a){super(),this.width=n!==void 0?n:512,this.height=i!==void 0?i:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=c1(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Tn(this.width,this.height,{type:Fn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new zt({defines:Object.assign({},sa.defines),uniforms:Hn.clone(sa.uniforms),vertexShader:sa.vertexShader,fragmentShader:sa.fragmentShader,blending:hn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new A_,this.normalMaterial.blending=hn,this.pdMaterial=new zt({defines:Object.assign({},oa.defines),uniforms:Hn.clone(oa.uniforms),vertexShader:oa.vertexShader,fragmentShader:oa.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new zt({defines:Object.assign({},ra.defines),uniforms:Hn.clone(ra.uniforms),vertexShader:ra.vertexShader,fragmentShader:ra.fragmentShader,blending:hn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new zt({uniforms:Hn.clone(cr.uniforms),vertexShader:cr.vertexShader,fragmentShader:cr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Gl,blendDst:jr,blendEquation:fi,blendSrcAlpha:Hl,blendDstAlpha:jr,blendEquationAlpha:fi}),this.blendMaterial=new zt({uniforms:Hn.clone(Pl.uniforms),vertexShader:Pl.vertexShader,fragmentShader:Pl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:df,blendSrc:Gl,blendDst:jr,blendEquation:fi,blendSrcAlpha:Hl,blendDstAlpha:jr,blendEquationAlpha:fi}),this.fsQuad=new Mr(null),this.originalClearColor=new Xe,this.setGBuffer(s?s.depthTexture:void 0,s?s.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new eh,this.depthTexture.format=Ps,this.depthTexture.type=Cs,this.normalRenderTarget=new Tn(this.width,this.height,{minFilter:Zt,magFilter:Zt,type:Fn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=xd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case _i.OUTPUT.Off:break;case _i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=hn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case _i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=hn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case _i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=hn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case _i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case _i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=hn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case _i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=hn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,i,s){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(s||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,n,i,s){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,s=t.clearAlpha||s,i!=null&&(e.setClearColor(i),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){const i=t.get(n);n.visible=i}),t.clear()}generateNoise(e=64){const t=new f1,n=e*e*4,i=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){const l=o,c=a;i[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,i[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,i[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,i[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}const s=new Ua(i,e,e,Wn,wi);return s.wrapS=Xn,s.wrapT=Xn,s.needsUpdate=!0,s}}_i.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const d1={uniforms:{tDiffuse:{value:null},time:{value:0},res:{value:new re(1,1)},distort:{value:.1},chroma:{value:.0045},grain:{value:.07},flash:{value:0},damage:{value:0},interference:{value:0},exposure:{value:1},blackout:{value:0},saturation:{value:.75},sharpen:{value:.35}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
    }`};function p1(r,e,t){const n=r.getSize(new re),i=new i1(r);i.addPass(new gd(e,t));const s=new _i(e,t,n.x,n.y);s.updateGtaoMaterial({radius:.45,distanceExponent:1.4,thickness:1.2,scale:1.1,samples:12}),s.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),s.blendIntensity=1,i.addPass(s);const o=new o1(0);o.enabled=!1;const a=new Sr(new re(n.x/2,n.y/2),.4,.55,.85);i.addPass(a),i.addPass(new l1);const l=new vd(d1);i.addPass(l);const c=l.uniforms;return{composer:i,u:c,after:o,bloom:a,ao:s,setSize(h,f,d){i.setPixelRatio(d),i.setSize(h,f),c.res.value.set(h*d,f*d)},render(h,f){c.time.value=f,i.render(h)}}}class m1{constructor(){this.ctx=null,this.loops=new Set}init(){if(this.ctx)return;const e=this.ctx=new(window.AudioContext||window.webkitAudioContext);this.out=e.createDynamicsCompressor(),this.out.threshold.value=-14,this.out.ratio.value=4,this.out.attack.value=.003,this.out.release.value=.25,this.out.connect(e.destination),this.master=e.createGain(),this.master.gain.value=.9,this.deaf=e.createBiquadFilter(),this.deaf.type="lowpass",this.deaf.frequency.value=2e4,this.master.connect(this.deaf),this.deaf.connect(this.out),this.sfx=e.createGain(),this.sfx.connect(this.master),this.amb=e.createGain(),this.amb.connect(this.master),this.verb=e.createConvolver(),this.verb.buffer=this.impulse(2.2,2.6),this.verbIn=e.createGain(),this.verbIn.gain.value=.35,this.verbIn.connect(this.verb),this.verb.connect(this.master),this.white=this.noise("white"),this.pink=this.noise("pink"),this.brown=this.noise("brown"),this.curveSoft=this.shaper(3),this.curveHard=this.shaper(30),this.startAmbience()}impulse(e,t){const n=this.ctx,i=n.sampleRate*e,s=n.createBuffer(2,i,n.sampleRate);for(let o=0;o<2;o++){const a=s.getChannelData(o);for(let l=0;l<i;l++)a[l]=(Math.random()*2-1)*Math.pow(1-l/i,t)*(l<60?l/60:1)}return s}noise(e){const t=this.ctx,n=t.sampleRate*3,i=t.createBuffer(1,n,t.sampleRate),s=i.getChannelData(0);let o=0,a=0,l=0,c=0,u=0,h=0,f=0,d=0;for(let m=0;m<n;m++){const v=Math.random()*2-1;e==="white"?s[m]=v:e==="pink"?(o=.99886*o+v*.0555179,a=.99332*a+v*.0750759,l=.969*l+v*.153852,c=.8665*c+v*.3104856,u=.55*u+v*.5329522,h=-.7616*h-v*.016898,s[m]=(o+a+l+c+u+h+f+v*.5362)*.11,f=v*.115926):(d=(d+.02*v)/1.02,s[m]=d*3.5)}return i}shaper(e){const n=new Float32Array(2048);for(let i=0;i<2048;i++){const s=i*2/2048-1;n[i]=(1+e)*s/(1+e*Math.abs(s))}return n}get t(){return this.ctx.currentTime}async loadSamples(e){this.buf=this.buf||{};const t=[];for(const[n,i]of Object.entries(e||{})){this.buf[n]=[];for(const s of i)t.push(this.ctx.decodeAudioData(s.slice(0)).then(o=>this.buf[n].push(o)).catch(()=>{}))}await Promise.all(t),this.startBeds()}has(e){return this.buf&&this.buf[e]&&this.buf[e].length>0}play(e,t,{vol:n=1,rate:i=1,verb:s=.35,offset:o=0,ref:a,rolloff:l,jitter:c=.06,t:u=this.t,bus:h}={}){if(!this.ctx||!this.has(e))return null;const f=this.buf[e],d=f[Math.floor(Math.random()*f.length)],m=this.ctx.createBufferSource();m.buffer=d,m.playbackRate.value=i*(1+(Math.random()-.5)*c);const v=this.dest(t,{gain:n,verb:s,ref:a,rolloff:l,bus:h});return m.connect(v),m.start(u,o),{src:m,out:v}}bed(e,t=0,n=1){if(!this.has(e))return null;const i=this.ctx.createBufferSource();i.buffer=this.buf[e][0],i.loop=!0,i.playbackRate.value=n;const s=this.ctx.createGain();return s.gain.value=t,i.connect(s),s.connect(this.amb),i.start(this.t,Math.random()*i.buffer.duration),s}startBeds(){this.beds||(this.beds={rainIn:this.bed("rainIn"),rainOut:this.bed("rainOut"),room:this.bed("room"),drone:this.bed("drone")})}dest(e,t={}){const n=this.ctx,i=n.createGain();if(i.gain.value=t.gain??1,e){const o=n.createPanner();o.panningModel="HRTF",o.distanceModel="inverse",o.refDistance=t.ref??1.2,o.rolloffFactor=t.rolloff??1.3,o.maxDistance=60,o.positionX.value=e.x,o.positionY.value=e.y,o.positionZ.value=e.z,i.connect(o),o.connect(t.bus||this.sfx),i.panner=o}else i.connect(t.bus||this.sfx);const s=n.createGain();return s.gain.value=t.verb??.5,i.connect(s),s.connect(this.verbIn),i}src(e,t=!1,n=1){const i=this.ctx.createBufferSource();return i.buffer=e,i.loop=t,i.playbackRate.value=n,t||(i.loopStart=0),i}filt(e,t,n=1){const i=this.ctx.createBiquadFilter();return i.type=e,i.frequency.value=t,i.Q.value=n,i}gainEnv(e,t,n,i,s,o=0){const a=e.gain;a.cancelScheduledValues(t),a.setValueAtTime(1e-4,t),a.linearRampToValueAtTime(i,t+n),a.exponentialRampToValueAtTime(Math.max(1e-4,o||1e-4),t+n+s)}noiseBurst(e,{t=this.t,dur:n=.1,a:i=.002,peak:s=1,type:o="bandpass",f:a=1e3,q:l=1,buf:c=this.white,rate:u=1,fEnd:h}={}){const f=this.src(c,!1,u),d=this.filt(o,a,l),m=this.ctx.createGain();return h&&d.frequency.exponentialRampToValueAtTime(h,t+n),f.connect(d),d.connect(m),m.connect(e),this.gainEnv(m,t,i,s,n),f.start(t,Math.random()*2),f.stop(t+i+n+.05),m}tone(e,{t=this.t,type:n="sine",f:i=100,fEnd:s,dur:o=.2,a=.005,peak:l=.5}={}){const c=this.ctx.createOscillator(),u=this.ctx.createGain();return c.type=n,c.frequency.setValueAtTime(i,t),s&&c.frequency.exponentialRampToValueAtTime(s,t+o),c.connect(u),u.connect(e),this.gainEnv(u,t,a,l,o),c.start(t),c.stop(t+a+o+.05),c}setListener(e){if(!this.ctx)return;const t=this.ctx.listener,n=e.position,i=this.t,s=e.userData.fwd,o=e.userData.up;t.positionX?(t.positionX.setTargetAtTime(n.x,i,.02),t.positionY.setTargetAtTime(n.y,i,.02),t.positionZ.setTargetAtTime(n.z,i,.02),t.forwardX.setTargetAtTime(s.x,i,.02),t.forwardY.setTargetAtTime(s.y,i,.02),t.forwardZ.setTargetAtTime(s.z,i,.02),t.upX.setTargetAtTime(o.x,i,.02),t.upY.setTargetAtTime(o.y,i,.02),t.upZ.setTargetAtTime(o.z,i,.02)):(t.setPosition(n.x,n.y,n.z),t.setOrientation(s.x,s.y,s.z,o.x,o.y,o.z))}startAmbience(){const e=this.ctx,t=this.src(this.pink,!0);this.rainLP=this.filt("lowpass",9e3,.3);const n=this.filt("highpass",400,.5);this.rainGain=e.createGain(),this.rainGain.gain.value=.35,t.connect(n),n.connect(this.rainLP),this.rainLP.connect(this.rainGain),this.rainGain.connect(this.amb),t.start();const i=this.src(this.white,!0,.7),s=this.filt("bandpass",2600,.9);this.roofGain=e.createGain(),this.roofGain.gain.value=0,i.connect(s),s.connect(this.roofGain),this.roofGain.connect(this.amb),i.start();const o=this.src(this.brown,!0),a=this.filt("bandpass",300,.6);this.windGain=e.createGain(),this.windGain.gain.value=.25;const l=e.createOscillator(),c=e.createGain();l.frequency.value=.07,c.gain.value=180,l.connect(c),c.connect(a.frequency),l.start(),o.connect(a),a.connect(this.windGain),this.windGain.connect(this.amb),o.start(),this.drone=e.createGain(),this.drone.gain.value=0;const u=this.filt("lowpass",220,.7);this.drone.connect(u),u.connect(this.amb);for(const g of[41.2,43.65,61.7,82.4]){const p=e.createOscillator();p.type="sawtooth",p.frequency.value=g,p.detune.value=(Math.random()-.5)*14;const x=e.createGain();x.gain.value=.12,p.connect(x),x.connect(this.drone),p.start()}this.whine=e.createGain(),this.whine.gain.value=0;const h=this.src(this.white,!0),f=this.filt("bandpass",3100,30),d=e.createOscillator();d.frequency.value=2960;const m=e.createGain();m.gain.value=.02,d.connect(m),m.connect(this.whine),d.start(),h.connect(f),f.connect(this.whine),this.whine.connect(this.amb),h.start(),this.hum=e.createGain(),this.hum.gain.value=0;for(const g of[60,120,180]){const p=e.createOscillator();p.frequency.value=g;const x=e.createGain();x.gain.value=.05/(g/60),p.connect(x),x.connect(this.hum),p.start()}this.hum.connect(this.amb);const v=this.src(this.white,!0);this.breathF=this.filt("bandpass",1100,.8),this.breathG=e.createGain(),this.breathG.gain.value=0,v.connect(this.breathF),this.breathF.connect(this.breathG),this.breathG.connect(this.sfx),v.start(),this.breathPhase=0,this.heartT=0}update(e,{inside:t=0,tension:n=0,fear:i=0,exertion:s=0,lights:o=!1,basement:a=!1}){if(!this.ctx)return;const l=this.t,c=this.beds;c&&(c.rainOut&&c.rainOut.gain.setTargetAtTime(a?0:(1-t)*.9,l,.5),c.rainIn&&c.rainIn.gain.setTargetAtTime(a?.06:t*.65,l,.5),c.room&&c.room.gain.setTargetAtTime(t*.35,l,.5),c.drone&&c.drone.gain.setTargetAtTime(.04+n*.75,l,1.2));const u=c?0:a?.04:(1-t)*.42+t*.08;this.rainGain.gain.setTargetAtTime(u,l,.4),this.rainLP.frequency.setTargetAtTime(a?300:9e3-t*7800,l,.4),this.roofGain.gain.setTargetAtTime(c?0:a?.004:t*.03,l,.4),this.windGain.gain.setTargetAtTime(a?.05:.22-t*.12,l,.5),this.drone.gain.setTargetAtTime(c?n*.15:.05+n*.55,l,.8),this.whine.gain.setTargetAtTime(Math.max(0,n-.55)*.18,l,.5),this.hum.gain.setTargetAtTime(o?.35:0,l,.1);const h=.25+s*.55+i*.45;this.breathPhase+=e*h;const f=this.breathPhase%1,d=f<.38,m=.015+s*.09+i*.06,v=d?Math.sin(f/.38*Math.PI):Math.sin((f-.38)/.62*Math.PI)*.8;this.breathG.gain.setTargetAtTime(Math.max(0,v)*m,l,.05),this.breathF.frequency.setTargetAtTime(d?1500:900,l,.1);const g=62+i*90+s*40;if(this.heartT-=e,this.heartT<=0){this.heartT=60/g;const p=Math.max(0,i-.25)*.9+s*.15;if(p>.03){const x=this.dest(null,{verb:0});this.tone(x,{f:52,fEnd:38,dur:.12,peak:p}),this.tone(x,{t:l+.18,f:48,fEnd:36,dur:.1,peak:p*.6})}}}footstep(e,t,n=1,i=!1){if(!this.ctx)return;const s=e==="mud"?"stepDirt":e==="concrete"||e==="tile"?"stepConc":i?"runWood":"stepWood";if(this.has(s)){this.play(s,t,{vol:n*(e==="tile"?.8:1.2),rate:e==="tile"?1.15:1,verb:e==="concrete"?.6:.25}),(e==="wood"||e==="porch")&&Math.random()<.08&&this.play("creak",t,{vol:.12,rate:1.4,offset:Math.random()*2});return}const o=this.dest(t,{verb:e==="concrete"?.7:.35,gain:n}),a=this.t,l={wood:{f:500,q:1.2,thump:110,dur:.09},tile:{f:2400,q:.8,thump:160,dur:.05},concrete:{f:1500,q:.6,thump:90,dur:.07},mud:{f:350,q:.7,thump:70,dur:.16},porch:{f:420,q:1.5,thump:95,dur:.11}}[e]||{f:800,q:1,thump:100,dur:.07},c=i?1.5:1;this.noiseBurst(o,{t:a,dur:l.dur,f:l.f*(.85+Math.random()*.3),q:l.q,peak:.35*c}),this.noiseBurst(o,{t:a+.03,dur:l.dur*.7,f:l.f*1.6,q:1,peak:.12*c}),this.tone(o,{t:a,f:l.thump,fEnd:l.thump*.5,dur:.08,peak:.35*c}),e==="mud"&&this.noiseBurst(o,{t:a+.06,dur:.12,type:"lowpass",f:900,peak:.25}),(e==="wood"||e==="porch")&&Math.random()<.18&&this.creak(t,.25+Math.random()*.3,.25)}creak(e,t=.6,n=.5,i=1){if(!this.ctx)return;if(t>=.8&&this.has("creak")){this.play(Math.random()<.5?"creak":"creakVerb",e,{vol:n*1.3,rate:i,verb:.3});return}const s=this.ctx,o=this.t,a=this.dest(e,{verb:.6,gain:n}),l=s.createOscillator();l.type="sawtooth";const c=(90+Math.random()*90)*i;l.frequency.setValueAtTime(c,o);for(let g=1;g<8;g++)l.frequency.linearRampToValueAtTime(c*(.7+Math.random()*.8),o+t*g/8);const u=s.createOscillator();u.type="square",u.frequency.value=18+Math.random()*30;const h=s.createGain();h.gain.value=.5;const f=s.createGain();f.gain.value=.5,u.connect(h),h.connect(f.gain);const d=this.filt("bandpass",900*i,3),m=this.filt("bandpass",2200*i,5),v=s.createGain();l.connect(f),f.connect(d),f.connect(m),d.connect(v),m.connect(v),v.connect(a),v.gain.setValueAtTime(1e-4,o),v.gain.linearRampToValueAtTime(.5,o+.05),v.gain.setValueAtTime(.5,o+t*.8),v.gain.exponentialRampToValueAtTime(1e-4,o+t),l.start(o),u.start(o),l.stop(o+t+.1),u.stop(o+t+.1)}doorOpen(e){if(this.has("doorOpen")){this.play("knob",e,{vol:.8}),this.play("doorOpen",e,{vol:1,t:this.t+.12}),Math.random()<.6&&this.play("creak",e,{vol:.35,rate:.9,t:this.t+.2});return}this.latch(e),this.creak(e,1.1,.55,.8)}latch(e){if(this.has("knob")){this.play(Math.random()<.5?"knob":"lock",e,{vol:.9});return}const t=this.dest(e,{verb:.4}),n=this.t;this.noiseBurst(t,{t:n,dur:.03,f:3500,q:2,peak:.6}),this.noiseBurst(t,{t:n+.06,dur:.04,f:2500,q:3,peak:.4})}doorSlam(e,t=1){if(this.has("doorClose")){this.play("doorClose",e,{vol:1.8*t,verb:.8,rate:.85}),this.play("woodDrop",e,{vol:.5*t,verb:.6});return}const n=this.dest(e,{verb:1,gain:t}),i=this.t;this.noiseBurst(n,{t:i,dur:.35,type:"lowpass",f:1800,fEnd:200,peak:1.2,buf:this.brown}),this.tone(n,{t:i,f:70,fEnd:35,dur:.4,peak:.9}),this.noiseBurst(n,{t:i,dur:.05,f:3e3,q:1,peak:.6})}knock(e,t=3){if(this.has("knock")){this.play("knock",e,{vol:1.6,verb:.7,rate:.85});return}for(let n=0;n<t;n++){const i=this.t+n*.28+Math.random()*.05,s=this.dest(e,{verb:.8});this.tone(s,{t:i,f:140,fEnd:70,dur:.12,peak:.9}),this.noiseBurst(s,{t:i,dur:.05,f:700,q:2,peak:.6})}}gunshot(e){const t=this.ctx,n=this.t;this.roomIR||(this.roomIR=this.impulse(.9,3.2));const i=t.createGain();i.gain.value=1.6,i.connect(this.sfx);const s=t.createConvolver();s.buffer=this.roomIR;const o=t.createGain();o.gain.value=.9,i.connect(s),s.connect(o),o.connect(this.master);const a=t.createWaveShaper();a.curve=this.curveHard,a.connect(i);const l=this.src(this.white),c=this.filt("highpass",2500,.7),u=t.createGain();l.connect(c),c.connect(u),u.connect(a),u.gain.setValueAtTime(1.4,n),u.gain.exponentialRampToValueAtTime(.001,n+.006),l.start(n,Math.random()),l.stop(n+.02);const h=this.src(this.white),f=this.filt("lowpass",7e3,.5),d=t.createGain();f.frequency.setValueAtTime(7e3,n),f.frequency.exponentialRampToValueAtTime(500,n+.16),h.connect(f),f.connect(d),d.connect(a),d.gain.setValueAtTime(1e-4,n),d.gain.exponentialRampToValueAtTime(1.3,n+.002),d.gain.exponentialRampToValueAtTime(.001,n+.22),h.start(n,Math.random()),h.stop(n+.3);const m=t.createOscillator(),v=t.createGain();m.type="sine",m.frequency.setValueAtTime(140,n),m.frequency.exponentialRampToValueAtTime(38,n+.18),m.connect(v),v.connect(a),v.gain.setValueAtTime(1e-4,n),v.gain.exponentialRampToValueAtTime(1.6,n+.004),v.gain.exponentialRampToValueAtTime(.001,n+.3),m.start(n),m.stop(n+.35);const g=this.src(this.brown),p=this.filt("lowpass",400,.5),x=t.createGain();g.connect(p),p.connect(x),x.connect(i),x.gain.setValueAtTime(1e-4,n),x.gain.exponentialRampToValueAtTime(.5,n+.02),x.gain.exponentialRampToValueAtTime(.001,n+.9),g.start(n,Math.random()),g.stop(n+1),this.deaf.frequency.cancelScheduledValues(n),this.deaf.frequency.setValueAtTime(1400,n+.06),this.deaf.frequency.exponentialRampToValueAtTime(2e4,n+1.6);const M=this.dest(null,{verb:0});this.tone(M,{t:n+.08,f:3900+Math.random()*600,dur:1.4,a:.05,peak:.025})}dryFire(){const e=this.dest(null,{verb:.2});this.noiseBurst(e,{dur:.03,f:4e3,q:3,peak:.5})}reloadClick(e){if(e===1&&this.has("shells"))for(let i=0;i<3;i++)this.play("shells",null,{vol:.5,t:this.t+.25+i*.09,verb:.2});const t=this.dest(null,{verb:.2}),n=this.t;if(e===0)this.noiseBurst(t,{t:n,dur:.05,f:2e3,q:2,peak:.6}),this.tone(t,{t:n,f:900,dur:.05,peak:.1});else if(e===1)for(let i=0;i<6;i++)this.noiseBurst(t,{t:n+i*.04,dur:.02,f:5e3,q:4,peak:.25});else this.noiseBurst(t,{t:n,dur:.04,f:1800,q:2,peak:.7}),this.noiseBurst(t,{t:n+.12,dur:.03,f:3500,q:3,peak:.4})}cameraFlash(){const e=this.dest(null,{verb:.1}),t=this.t;this.noiseBurst(e,{t,dur:.02,f:6e3,q:2,peak:.6}),this.tone(e,{t,f:1200,dur:.06,peak:.08,type:"square"})}flashCharge(e){const t=this.dest(null,{verb:0}),n=this.t;this.tone(t,{t:n+.1,f:1800,fEnd:9500,dur:e,a:.2,peak:.018})}keyDrop(e){this.play("keyDrop",e,{vol:1})||this.pickup()}pages(){this.play("pages",null,{vol:.7,verb:.1})||this.pickup()}drawer(e){this.play("drawer",e,{vol:.9})||this.pickup()}pickup(){const e=this.dest(null,{verb:.2});this.noiseBurst(e,{dur:.12,f:1800,q:.7,peak:.3})}switchClick(e){this.play("switch",e,{vol:.9,verb:.2})||this.switchSynth(e)}switchSynth(e){const t=this.dest(e,{verb:.3});this.noiseBurst(t,{dur:.02,f:3e3,q:3,peak:.6})}flashlightClick(){const e=this.dest(null,{verb:.1});this.noiseBurst(e,{dur:.015,f:4500,q:4,peak:.35})}powerOn(e){this.play("box",e,{vol:1});const t=this.dest(e,{verb:1}),n=this.t;this.noiseBurst(t,{t:n,dur:.2,type:"lowpass",f:600,peak:1,buf:this.brown}),this.tone(t,{t:n,f:60,dur:1.5,peak:.25,type:"sawtooth"});for(let i=0;i<5;i++)this.noiseBurst(t,{t:n+.1+i*.09,dur:.02,f:5e3,q:2,peak:.3})}powerOff(){const e=this.dest(null,{verb:1}),t=this.t;this.tone(e,{t,f:120,fEnd:20,dur:1.2,peak:.4,type:"sawtooth"}),this.noiseBurst(e,{t,dur:.3,f:3e3,q:1,peak:.5})}bulbPop(e){const t=this.dest(e,{verb:.7});this.noiseBurst(t,{dur:.08,f:5e3,q:.5,peak:1}),this.noiseBurst(t,{t:this.t+.05,dur:.4,f:7e3,q:1,peak:.2})}glass(e){const t=this.dest(e,{verb:1}),n=this.t;this.noiseBurst(t,{t:n,dur:.15,type:"highpass",f:3e3,peak:1});for(let i=0;i<14;i++)this.tone(t,{t:n+Math.random()*.6,f:3e3+Math.random()*5e3,dur:.05+Math.random()*.1,peak:.08})}scream(e,{pitch:t=1,dur:n=1.4,vol:i=1,rough:s=1}={}){if(!this.ctx)return;if(this.has("scream")){if(t<.7){this.play("creatureVerb",e,{vol:i*1.6,rate:.75+t*.3,verb:.8,ref:2.5});return}const g=n>1.1?"scream":"screamShort";this.play(this.has(g)?g:"scream",e,{vol:i*1.5,rate:Math.min(1.25,Math.max(.75,.55+t*.4)),verb:.6,ref:2});return}const o=this.ctx,a=this.t,l=this.dest(e,{verb:1.1,gain:i,ref:2}),c=o.createGain();c.gain.value=.5;const u=o.createWaveShaper();u.curve=s>.5?this.curveHard:this.curveSoft;const h=o.createOscillator(),f=o.createGain();h.frequency.value=7+Math.random()*5,f.gain.value=25*t,h.connect(f);for(let g=0;g<3;g++){const p=o.createOscillator();p.type="sawtooth",p.frequency.setValueAtTime(300*t,a),p.frequency.exponentialRampToValueAtTime((700+g*13)*t,a+.12),p.frequency.exponentialRampToValueAtTime(520*t,a+n),p.detune.value=(g-1)*25,f.connect(p.frequency),p.connect(c),p.start(a),p.stop(a+n+.1)}const d=this.src(this.white),m=o.createGain();m.gain.value=.35,d.connect(m),m.connect(c),d.start(a,Math.random()),d.stop(a+n+.1);const v=o.createGain();c.connect(u);for(const[g,p,x]of[[850,6,1],[1250,8,.7],[2700,10,.4],[3500,10,.25]]){const M=this.filt("bandpass",g*(.9+t*.1),p),_=o.createGain();_.gain.value=x,u.connect(M),M.connect(_),_.connect(v)}v.connect(l),v.gain.setValueAtTime(1e-4,a),v.gain.exponentialRampToValueAtTime(1.6,a+.06),v.gain.setValueAtTime(1.6,a+n*.6),v.gain.exponentialRampToValueAtTime(1e-4,a+n),h.start(a),h.stop(a+n+.1)}growl(e,t=2,n=1){if(this.has("creature")){this.play(t>2?"creatureVerb":"creature",e,{vol:n*1.6,rate:.7,verb:.9,ref:2.5,rolloff:.9});return}const i=this.ctx,s=this.t,o=this.dest(e,{verb:1.2,gain:n,ref:2.5,rolloff:.9}),a=i.createWaveShaper();a.curve=this.curveHard;const l=this.filt("lowpass",700,2),c=i.createGain();for(const h of[38,55.5,77]){const f=i.createOscillator();f.type="sawtooth",f.frequency.setValueAtTime(h,s),f.frequency.linearRampToValueAtTime(h*.8,s+t);const d=i.createOscillator();d.frequency.value=9+Math.random()*6;const m=i.createGain();m.gain.value=.6;const v=i.createGain();v.gain.value=.4,d.connect(m),m.connect(v.gain),f.connect(v),v.connect(a),f.start(s),d.start(s),f.stop(s+t+.1),d.stop(s+t+.1)}const u=this.src(this.brown);u.connect(a),u.start(s),u.stop(s+t+.1),a.connect(l),l.connect(c),c.connect(o),c.gain.setValueAtTime(1e-4,s),c.gain.exponentialRampToValueAtTime(.9,s+.3),c.gain.exponentialRampToValueAtTime(1e-4,s+t)}boneCrack(e,t=3){if(this.has("bones")){this.play(t>2?"bones":"skull",e,{vol:1.3,verb:.3});return}for(let n=0;n<t;n++){const i=this.dest(e,{verb:.4,gain:1.2}),s=this.t+n*(.06+Math.random()*.12);this.noiseBurst(i,{t:s,dur:.025,a:5e-4,f:1600+Math.random()*1500,q:1.5,peak:1.2}),this.tone(i,{t:s,f:220,fEnd:90,dur:.04,peak:.4})}}skitter(e,t=.8,n=.8){const i=this.t,s=this.dest(e,{verb:.5,gain:n});let o=0;for(;o<t;)this.noiseBurst(s,{t:i+o,dur:.02,f:900+Math.random()*2500,q:2,peak:.5+Math.random()*.5}),Math.random()<.3&&this.tone(s,{t:i+o,f:120,fEnd:60,dur:.05,peak:.4}),o+=.04+Math.random()*.09}heavyStep(e,t=1){const n=this.dest(e,{verb:1,gain:t,ref:2}),i=this.t;this.tone(n,{t:i,f:55,fEnd:28,dur:.35,peak:1.2}),this.noiseBurst(n,{t:i,dur:.18,type:"lowpass",f:500,peak:.8,buf:this.brown}),this.noiseBurst(n,{t:i+.02,dur:.08,f:1200,q:1,peak:.2})}bodyFall(e){if(this.has("woodDrop")){this.play("woodDrop",e,{vol:1.3,rate:.8,verb:.6}),this.play("bones",e,{vol:.6});return}const t=this.dest(e,{verb:.9}),n=this.t;this.tone(t,{t:n,f:80,fEnd:30,dur:.4,peak:1.2}),this.noiseBurst(t,{t:n,dur:.3,type:"lowpass",f:900,peak:1,buf:this.brown}),this.boneCrack(e,2)}splash(e,t=!1){const n=this.dest(e,{verb:.7,gain:t?1.4:.6}),i=this.t;this.noiseBurst(n,{t:i,dur:t?.8:.25,type:"lowpass",f:2500,fEnd:400,peak:1,buf:this.pink});for(let s=0;s<(t?12:4);s++)this.tone(n,{t:i+Math.random()*.6,f:600+Math.random()*900,fEnd:1400,dur:.04,peak:.12})}whisper(e,t=2.5,n=.6){if(this.has("whisper")){this.play(Math.random()<.5?"whisper":"whisperVerb",e,{vol:n*1.8,ref:.8});return}const i=this.ctx,s=this.t,o=this.dest(e,{verb:.9,gain:n,ref:.6}),a=this.src(this.white),l=i.createGain();l.gain.value=0;const c=this.filt("bandpass",1500,6),u=this.filt("bandpass",3e3,8);a.connect(c),a.connect(u),c.connect(l),u.connect(l),l.connect(o);let h=0;for(;h<t;){const f=.08+Math.random()*.16;c.frequency.setValueAtTime(700+Math.random()*1800,s+h),u.frequency.setValueAtTime(2200+Math.random()*2400,s+h),l.gain.setValueAtTime(0,s+h),l.gain.linearRampToValueAtTime(.6+Math.random()*.4,s+h+f*.3),l.gain.linearRampToValueAtTime(0,s+h+f),h+=f+(Math.random()<.2?.25:.02)}a.start(s,Math.random()),a.stop(s+t+.2)}voice(e,t,{pitch:n=120,radio:i=!1,child:s=!1,demonic:o=!1,vol:a=.6}={}){if(!this.ctx)return;if(this.buf){if(i){const E=this.dest(e,{verb:.05,gain:.5}),P=this.t;this.noiseBurst(E,{t:P,dur:.12,f:2e3,q:.5,peak:.4});const y=this.src(this.white),S=this.filt("bandpass",1800,.6),R=this.ctx.createGain();R.gain.value=.035,y.connect(S),S.connect(R),R.connect(E),y.start(P,Math.random()),y.stop(P+t),this.noiseBurst(E,{t:P+t,dur:.15,f:2e3,q:.5,peak:.35})}return}const l=this.ctx,c=this.t,u=this.dest(e,{verb:i?.1:.6,gain:a,ref:1}),h=l.createOscillator();h.type="sawtooth";const f=this.src(this.white),d=l.createGain();d.gain.value=.08;const m=l.createGain();h.connect(m),f.connect(d),d.connect(m);const v=this.filt("bandpass",600,5),g=this.filt("bandpass",1400,7),p=this.filt("bandpass",2600,9),x=l.createGain();x.gain.value=0,m.connect(v),m.connect(g),m.connect(p);const M=l.createGain();M.gain.value=.4,p.connect(M),v.connect(x),g.connect(x),M.connect(x);let _=x;if(i){const E=this.filt("highpass",400,.7),P=this.filt("lowpass",2800,.7),y=l.createWaveShaper();y.curve=this.curveSoft,x.connect(E),E.connect(P),P.connect(y),_=y;const S=this.src(this.white),R=this.filt("bandpass",2e3,.5),F=l.createGain();F.gain.value=.05,S.connect(R),R.connect(F),F.connect(u),S.start(c,Math.random()),S.stop(c+t+.3),this.noiseBurst(u,{t:c,dur:.12,f:2e3,q:.5,peak:.4}),this.noiseBurst(u,{t:c+t,dur:.15,f:2e3,q:.5,peak:.4})}if(o){const E=l.createWaveShaper();E.curve=this.curveHard,_.connect(E),_=E}_.connect(u);const C=s?290:n;let w=.05;for(;w<t;){const E=.09+Math.random()*.13,P=[[700,1200],[400,2200],[300,900],[650,1700],[500,1e3]][Math.floor(Math.random()*5)],y=s?1.35:1;v.frequency.setTargetAtTime(P[0]*y,c+w,.02),g.frequency.setTargetAtTime(P[1]*y,c+w,.02),h.frequency.setTargetAtTime(C*(.88+Math.random()*.25)*(o?.5:1),c+w,.03),x.gain.setTargetAtTime(.7+Math.random()*.3,c+w,.015),x.gain.setTargetAtTime(.05,c+w+E*.75,.02),w+=E+(Math.random()<.12?.22:.01)}x.gain.setTargetAtTime(0,c+t,.03),h.start(c),h.stop(c+t+.3),f.start(c,Math.random()),f.stop(c+t+.3)}radioBeep(){const e=this.dest(null,{verb:0}),t=this.t;this.noiseBurst(e,{t,dur:.18,f:1800,q:.4,peak:.25}),this.tone(e,{t,f:1750,dur:.07,peak:.08,type:"square"})}thunder(e=1){if(!this.ctx)return;const t=this.t+e*.8,n=this.dest(null,{verb:.8,bus:this.amb,gain:1.4});this.noiseBurst(n,{t,dur:.25,type:"lowpass",f:3e3,peak:.8/e,buf:this.brown});for(let i=0;i<5;i++)this.noiseBurst(n,{t:t+.2+i*(.3+Math.random()*.5),a:.15,dur:1.6+Math.random(),type:"lowpass",f:160+Math.random()*200,peak:1.5/e,buf:this.brown})}sting(e=!0){if(this.has("impact")){this.play("impact",null,{vol:e?1.6:.9,verb:.2,jitter:0}),e&&this.has("strings")&&this.play("strings",null,{vol:.8,verb:.2,jitter:0});return}const t=this.ctx,n=this.t,i=this.dest(null,{verb:1,gain:e?1:.55}),s=t.createWaveShaper();s.curve=this.curveSoft,s.connect(i);for(const o of[92.5,98,138.6,185,196,277,554,587,1108]){const a=t.createOscillator();a.type="sawtooth",a.frequency.value=o*(1+(Math.random()-.5)*.01);const l=t.createGain();a.connect(l),l.connect(s),this.gainEnv(l,n,.01,.07,1.8),a.start(n),a.stop(n+2)}this.noiseBurst(i,{t:n,dur:1.2,type:"highpass",f:2e3,peak:.6}),this.tone(i,{t:n,f:60,fEnd:25,dur:1.2,peak:1.5})}riser(e=2){const t=this.dest(null,{verb:.8}),n=this.t,i=this.src(this.white),s=this.filt("bandpass",300,3),o=this.ctx.createGain();s.frequency.exponentialRampToValueAtTime(6e3,n+e),o.gain.setValueAtTime(1e-4,n),o.gain.exponentialRampToValueAtTime(.5,n+e),o.gain.setValueAtTime(0,n+e+.01),i.connect(s),s.connect(o),o.connect(t),i.start(n),i.stop(n+e+.05)}hit(){this.play("punch",null,{vol:1.2,verb:.1});const e=this.dest(null,{verb:.3}),t=this.t;this.tone(e,{t,f:120,fEnd:40,dur:.25,peak:1.4}),this.noiseBurst(e,{t,dur:.2,type:"lowpass",f:1500,peak:1,buf:this.brown}),this.deaf.frequency.cancelScheduledValues(t),this.deaf.frequency.setValueAtTime(500,t),this.deaf.frequency.exponentialRampToValueAtTime(2e4,t+1.2)}fleshHit(e){this.play("squish",e,{vol:1,rate:1.3,verb:.2})||this.fleshSynth(e)}fleshSynth(e){const t=this.dest(e,{verb:.3});this.noiseBurst(t,{dur:.08,type:"lowpass",f:900,peak:1,buf:this.pink}),this.tone(t,{f:100,fEnd:50,dur:.1,peak:.6})}loop(e,t,n=1){if(!this.ctx)return{stop(){},set(){}};const i=this.ctx,s=this.dest(t,{verb:.5,gain:n,ref:e==="flies"?.6:1.2}),o=[];let a=null,l=!0;const c=this.t;if(e.startsWith("sample:")){const h=e.slice(7);if(this.has(h)){const f=this.ctx.createBufferSource();f.buffer=this.buf[h][0],f.loop=!0,f.connect(s),f.start(c,Math.random()*f.buffer.duration),o.push(f)}}if(e==="flies")for(let h=0;h<4;h++){const f=i.createOscillator();f.type="sawtooth",f.frequency.value=170+h*23;const d=i.createOscillator(),m=i.createGain();d.frequency.value=.3+Math.random(),m.gain.value=25,d.connect(m),m.connect(f.frequency);const v=i.createOscillator(),g=i.createGain(),p=i.createGain();v.frequency.value=.5+Math.random()*2,g.gain.value=.04,p.gain.value=.04,v.connect(g),g.connect(p.gain);const x=this.filt("bandpass",400,1);f.connect(x),x.connect(p),p.connect(s),f.start(),d.start(),v.start(),o.push(f,d,v)}else if(e==="tv"){const h=this.src(this.white,!0),f=this.filt("bandpass",3500,.4),d=i.createGain();d.gain.value=.12,h.connect(f),f.connect(d),d.connect(s),h.start(),o.push(h);const m=i.createOscillator();m.frequency.value=15734;const v=i.createGain();v.gain.value=.004,m.connect(v),v.connect(s),m.start(),o.push(m)}else if(e==="phone"){const h=()=>{if(!l)return;const f=this.t;for(let d=0;d<28;d++){const m=f+d*.04,v=d%2?1:1.18;for(const[g,p,x]of[[1,.25,.09],[2.76,.12,.06],[5.4,.06,.04],[8.9,.03,.03]]){const M=i.createOscillator();M.type="sine",M.frequency.value=760*v*g;const _=i.createGain();_.gain.setValueAtTime(p,m),_.gain.exponentialRampToValueAtTime(5e-4,m+x+.03),M.connect(_),_.connect(s),M.start(m),M.stop(m+x+.05)}}a=setTimeout(h,3600)};h()}else if(e==="hum"){const h=[64,67,69,67,64,62,64,0,64,67,71,69,67,64,62,0];let f=0;const d=()=>{if(!l)return;const m=h[f++%h.length],v=this.t;if(m){const g=440*Math.pow(2,(m-69)/12),p=i.createOscillator();p.type="triangle",p.frequency.value=g;const x=i.createOscillator(),M=i.createGain();x.frequency.value=5.5,M.gain.value=g*.012,x.connect(M),M.connect(p.frequency);const _=this.filt("lowpass",1400,.5),C=this.filt("bandpass",500,3),w=i.createGain();p.connect(_),_.connect(w),p.connect(C),C.connect(w),w.connect(s),w.gain.setValueAtTime(0,v),w.gain.linearRampToValueAtTime(.25,v+.08),w.gain.setTargetAtTime(0,v+.5,.1),p.start(v),x.start(v),p.stop(v+.9),x.stop(v+.9)}a=setTimeout(d,520+Math.random()*40)};d()}else if(e==="fire"){const h=this.src(this.brown,!0),f=this.filt("lowpass",900,.5),d=i.createGain();d.gain.value=.5,h.connect(f),f.connect(d),d.connect(s),h.start(),o.push(h);const m=()=>{l&&(this.noiseBurst(s,{dur:.02,f:2e3+Math.random()*3e3,q:2,peak:.3+Math.random()*.5}),a=setTimeout(m,40+Math.random()*200))};m()}else if(e==="drip"){const h=()=>{l&&(this.tone(s,{f:900+Math.random()*600,fEnd:1800,dur:.05,peak:.25}),a=setTimeout(h,300+Math.random()*900))};h()}else if(e==="fridge"){const h=i.createOscillator();h.type="sawtooth",h.frequency.value=50;const f=this.filt("lowpass",200,1),d=i.createGain();d.gain.value=.06,h.connect(f),f.connect(d),d.connect(s),h.start(),o.push(h)}else if(e==="breathing"){const h=()=>{if(!l)return;const f=this.t;this.noiseBurst(s,{t:f,a:.5,dur:.6,f:700,q:2,peak:.5,buf:this.pink}),this.noiseBurst(s,{t:f+1.2,a:.2,dur:1,f:450,q:2,peak:.6,buf:this.pink}),a=setTimeout(h,2600)};h()}else if(e==="swing"){const h=()=>{l&&(this.creak(t,1.4,.18,.6),a=setTimeout(h,2400+Math.random()*600))};h()}const u={stop:()=>{l=!1,clearTimeout(a),s.gain.setTargetAtTime(0,this.t,.05),setTimeout(()=>{o.forEach(h=>{try{h.stop()}catch{}}),s.disconnect()},400),this.loops.delete(u)},set:h=>s.gain.setTargetAtTime(h,this.t,.1),move:h=>{s.panner&&(s.panner.positionX.value=h.x,s.panner.positionY.value=h.y,s.panner.positionZ.value=h.z)}};return this.loops.add(u),u}duck(e,t=.5){this.ctx&&this.amb.gain.setTargetAtTime(e,this.t,t)}stopAllLoops(){[...this.loops].forEach(e=>e.stop())}suspend(e){this.ctx&&(e?this.ctx.suspend():this.ctx.resume())}}class za extends oe{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new wn;const n=this,i=t.color!==void 0?new Xe(t.color):new Xe(8355711),s=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||za.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new Ji,h=new D,f=new D,d=new D,m=new Qe,v=new D(0,0,-1),g=new bt,p=new D,x=new D,M=new bt,_=new Qe,C=this.camera,w=new Tn(s,o,{samples:c,type:Fn}),E=new zt({name:l.name!==void 0?l.name:"unspecified",uniforms:Hn.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});E.uniforms.tDiffuse.value=w.texture,E.uniforms.color.value=i,E.uniforms.textureMatrix.value=_,this.material=E,this.onBeforeRender=function(P,y,S){if(f.setFromMatrixPosition(n.matrixWorld),d.setFromMatrixPosition(S.matrixWorld),m.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(m),p.subVectors(f,d),p.dot(h)>0)return;p.reflect(h).negate(),p.add(f),m.extractRotation(S.matrixWorld),v.set(0,0,-1),v.applyMatrix4(m),v.add(d),x.subVectors(f,v),x.reflect(h).negate(),x.add(f),C.position.copy(p),C.up.set(0,1,0),C.up.applyMatrix4(m),C.up.reflect(h),C.lookAt(x),C.far=S.far,C.updateMatrixWorld(),C.projectionMatrix.copy(S.projectionMatrix),_.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),_.multiply(C.projectionMatrix),_.multiply(C.matrixWorldInverse),_.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(h,f),u.applyMatrix4(C.matrixWorldInverse),g.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const R=C.projectionMatrix;M.x=(Math.sign(g.x)+R.elements[8])/R.elements[0],M.y=(Math.sign(g.y)+R.elements[9])/R.elements[5],M.z=-1,M.w=(1+R.elements[10])/R.elements[14],g.multiplyScalar(2/g.dot(M)),R.elements[2]=g.x,R.elements[6]=g.y,R.elements[10]=g.z+1-a,R.elements[14]=g.w,n.visible=!1;const F=P.getRenderTarget(),B=P.xr.enabled,O=P.shadowMap.autoUpdate;P.xr.enabled=!1,P.shadowMap.autoUpdate=!1,P.setRenderTarget(w),P.state.buffers.depth.setMask(!0),P.autoClear===!1&&P.clear(),P.render(y,C),P.xr.enabled=B,P.shadowMap.autoUpdate=O,P.setRenderTarget(F);const V=S.viewport;V!==void 0&&P.state.viewport(V),n.visible=!0},this.getRenderTarget=function(){return w},this.dispose=function(){w.dispose(),n.material.dispose()}}}za.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};function Us(r){let e=r%2147483647;return e<=0&&(e+=2147483646),()=>(e=e*16807%2147483647,(e-1)/2147483646)}function Ri(r=1){const e=Us(r),t=new Float32Array(256*256);for(let o=0;o<t.length;o++)t[o]=e();const n=(o,a,l)=>{const c=Math.floor(o),u=Math.floor(a),h=o-c,f=a-u,d=h*h*(3-2*h),m=f*f*(3-2*f),v=(c%l+l)%l,g=(u%l+l)%l,p=(v+1)%l,x=(g+1)%l,M=t[g*256+v],_=t[g*256+p],C=t[x*256+v],w=t[x*256+p];return M+(_-M)*d+(C-M)*m+(M-_-C+w)*d*m};return{n,fbm:(o,a,l=4,c=5,u=1,h=1)=>{let f=0,d=.5,m=l,v=0;for(let g=0;g<c;g++)f+=n(o*m*u,a*m*h,256)*d,v+=d,d*=.5,m*=2;return f/v},fbmP:(o,a,l=4,c=5)=>{let u=0,h=.5,f=l,d=0;for(let m=0;m<c;m++)u+=n(o*f,a*f,f)*h,d+=h,h*=.5,f*=2;return u/d},r:e}}function on(r,e=r){const t=document.createElement("canvas");return t.width=r,t.height=e,[t,t.getContext("2d")]}function yn(r,{repeat:e=!0,srgb:t=!0}={}){const n=new Gi(r);return e&&(n.wrapS=n.wrapT=Xn),n.anisotropy=8,t&&(n.colorSpace=Ot),n}function qn(r,e,t,n){const i=r.getImageData(0,0,e,t),s=i.data;for(let o=0;o<t;o++)for(let a=0;a<e;a++){const l=(o*e+a)*4,c=n(a/e,o/t,s[l],s[l+1],s[l+2],s[l+3]);s[l]=c[0],s[l+1]=c[1],s[l+2]=c[2],s[l+3]=c.length>3?c[3]:255}r.putImageData(i,0,0)}const $u={},Mn=(r,e)=>$u[r]||($u[r]=e());function aa(r=3,e=[148,138,104]){return Mn("wp"+r+e,()=>{const n=Ri(r),[i,s]=on(512);s.fillStyle=`rgb(${e})`,s.fillRect(0,0,512,512);for(let o=0;o<8;o++)s.fillStyle=o%2?"rgba(0,0,0,0.06)":"rgba(255,240,200,0.05)",s.fillRect(o*64,0,64,512);s.strokeStyle="rgba(70,60,40,0.22)",s.lineWidth=2;for(let o=0;o<4;o++)for(let a=0;a<4;a++){const l=o*128+64+a%2*0,c=a*128+64;s.beginPath(),s.ellipse(l,c,14,26,0,0,Math.PI*2),s.stroke(),s.beginPath(),s.moveTo(l,c-40),s.quadraticCurveTo(l+24,c,l,c+40),s.quadraticCurveTo(l-24,c,l,c-40),s.stroke(),s.beginPath(),s.arc(l,c,4,0,7),s.fill()}qn(s,512,512,(o,a,l,c,u)=>{const h=n.fbmP(o,a,4,5),f=Math.max(0,n.fbmP(o+.3,a,2,4)-.52)*3.2,d=Math.max(0,n.fbmP(o,a+.7,8,4)-.6)*4*(a>.7?(a-.7)*3.3:0),m=.72+h*.45-f*.35;return[l*m-d*40+f*8,c*m-d*25,u*m-d*45-f*18]});for(let o=0;o<18;o++){const a=n.r()*512,l=60+n.r()*300,c=s.createLinearGradient(0,0,0,l);c.addColorStop(0,"rgba(60,40,15,0.25)"),c.addColorStop(1,"rgba(60,40,15,0)"),s.fillStyle=c,s.fillRect(a,0,2+n.r()*7,l)}return yn(i)})}function Ss(r=5){return Mn("wood"+r,()=>{const t=Ri(r),[n,i]=on(512),s=[];for(let o=0;o<8;o++)s.push(.75+t.r()*.4);return qn(i,512,512,(o,a)=>{const l=Math.floor(o*8),c=s[l],u=t.fbm(o*1,a,2,4,8,1),h=Math.sin(o*8*30+u*18)*.5+.5,f=c*(.6+u*.5+h*.12),d=l%2*.5+l*.13,m=Math.abs((a+d)%.5-0)<.004?.35:1,v=o*8%1<.025?.25:1,g=.85+t.fbmP(o,a,3,4)*.3;return[120*f*m*v*g,78*f*m*v*g,48*f*m*v*g]}),yn(n)})}function la(r=7,e=[196,204,192],t=8){return Mn("tile"+r+e+t,()=>{const i=Ri(r),[s,o]=on(512),a=[];for(let l=0;l<t*t;l++)a.push(.88+i.r()*.16);qn(o,512,512,(l,c)=>{const u=l*t,h=c*t,f=u%1,d=h%1,m=f<.04||d<.04,v=i.fbmP(l,c,6,4);if(m){const x=70+v*50;return[x,x*.95,x*.85]}const g=a[Math.floor(h)*t+Math.floor(u)]*(.85+v*.2),p=Math.min(f,d,1-f,1-d)<.08?.93:1;return[e[0]*g*p,e[1]*g*p,e[2]*g*p]}),o.strokeStyle="rgba(40,40,35,0.6)",o.lineWidth=1;for(let l=0;l<6;l++){let c=i.r()*512,u=i.r()*512;o.beginPath(),o.moveTo(c,u);for(let h=0;h<8;h++)c+=(i.r()-.5)*30,u+=(i.r()-.3)*20,o.lineTo(c,u);o.stroke()}return yn(s)})}function Wr(r=11){return Mn("conc"+r,()=>{const t=Ri(r),[n,i]=on(512);return qn(i,512,512,(s,o)=>{const a=t.fbmP(s,o,4,6),l=t.fbmP(s+.5,o,16,3),c=Math.max(0,t.fbmP(s,o+.2,2,3)-.55)*2.5,u=l>.78?.6:1,h=(.45+a*.45)*u*(1-c*.5);return[112*h,108*h,100*h]}),yn(n)})}function ca(r=13){return Mn("pl"+r,()=>{const t=Ri(r),[n,i]=on(256);return qn(i,256,256,(s,o)=>{const a=t.fbmP(s,o,4,5),l=t.fbmP(s,o,2,3),c=1-Math.max(0,l-.55)*1.6-Math.exp(-Math.pow((l-.58)*40,2))*.12,u=.72+a*.28;return[190*u*c,182*u*c,160*u*(c*c)]}),yn(n)})}function g1(r=17){return Mn("mud"+r,()=>{const t=Ri(r),[n,i]=on(512),[s,o]=on(512),a=[];qn(i,512,512,(c,u)=>{const h=t.fbmP(c,u,4,6),d=t.fbmP(c+.37,u+.11,2,4)>.58;a.push(d?30:200+h*55);const m=(.35+h*.5)*(d?.45:1),v=Math.max(0,t.fbmP(c,u,8,3)-.6)*2;return[70*m-v*20,52*m+v*18,36*m-v*10]});let l=0;return qn(o,512,512,()=>{const c=a[l++];return[c,c,c]}),{map:yn(n),rough:yn(s,{srgb:!1})}})}function Cn(r=1,e="splat"){return Mn("blood"+r+e,()=>{const n=Us(r*97+3),[i,s]=on(256),o=a=>`rgba(${60+n()*30},${n()*6},${n()*6},${a})`;if(e==="splat"||e==="pool"){const a=e==="pool";for(let l=0;l<(a?70:40);l++){const c=n()*6.28,u=n()*(a?70:50);s.fillStyle=o(.85),s.beginPath(),s.arc(128+Math.cos(c)*u,128+Math.sin(c)*u,(a?18:6)+n()*(a?30:22),0,7),s.fill()}if(!a)for(let l=0;l<80;l++){const c=n()*6.28,u=60+n()*60;s.fillStyle=o(.9),s.beginPath(),s.arc(128+Math.cos(c)*u,128+Math.sin(c)*u,.8+n()*3.5,0,7),s.fill()}}else if(e==="drip"){for(let a=0;a<30;a++)s.fillStyle=o(.9),s.beginPath(),s.arc(128+(n()-.5)*120,30+n()*30,6+n()*16,0,7),s.fill();for(let a=0;a<14;a++){const l=128+(n()-.5)*130,c=40+n()*180,u=2+n()*5;s.fillStyle=o(.85),s.fillRect(l-u/2,40,u,c),s.beginPath(),s.arc(l,40+c,u*.9,0,7),s.fill()}}else if(e==="hand"){s.fillStyle=o(.8),s.beginPath(),s.ellipse(128,150,42,50,0,0,7),s.fill();const a=[[-46,-40,-.5,34],[-20,-88,-.12,50],[6,-96,0,54],[30,-86,.12,48],[50,-56,.35,36]];for(const[l,c,u,h]of a)s.save(),s.translate(128+l,150+c+h/2+20),s.rotate(u),s.beginPath(),s.ellipse(0,-h/2,10,h/2+6,0,0,7),s.fill(),s.restore();s.globalCompositeOperation="destination-out";for(let l=0;l<160;l++)s.fillStyle=`rgba(0,0,0,${n()*.8})`,s.beginPath(),s.arc(70+n()*120,40+n()*180,1+n()*4,0,7),s.fill();s.globalCompositeOperation="source-over"}else if(e==="smear")for(let a=0;a<26;a++){s.strokeStyle=o(.25+n()*.4),s.lineWidth=4+n()*14,s.lineCap="round",s.beginPath();const l=60+n()*140;s.moveTo(10+n()*30,l),s.bezierCurveTo(90,l+(n()-.5)*30,160,l+(n()-.5)*30,246-n()*40,l+(n()-.5)*20),s.stroke()}return yn(i,{repeat:!1})})}function Ll(r,e=1024,t=256,n=120){return Mn("bt"+r,()=>{const i=Us(r.length*131+7),[s,o]=on(e,t);o.font=`bold ${n}px Georgia, serif`,o.textBaseline="middle";const a=o.measureText(r).width;let l=(e-a)/2;for(const c of r){o.save(),o.translate(l,t*.42+(i()-.5)*16),o.rotate((i()-.5)*.18),o.fillStyle=`rgba(${70+i()*25},0,0,0.92)`,o.fillText(c,0,0),o.restore();const u=o.measureText(c).width;if(c!==" "&&i()<.6){const h=l+u*(.2+i()*.6),f=20+i()*90,d=2+i()*4;o.fillStyle="rgba(80,0,0,0.85)",o.fillRect(h,t*.5,d,f),o.beginPath(),o.arc(h+d/2,t*.5+f,d,0,7),o.fill()}l+=u}return yn(s,{repeat:!1})})}function Dl(r=2,e=4,t=!0,n=!0){return Mn("fp"+r+e+t,()=>{const o=Us(r),[a,l]=on(256,200),c=l.createLinearGradient(0,0,0,200);c.addColorStop(0,n?"#8c7a5c":"#6d7480"),c.addColorStop(1,n?"#4a3c2a":"#30343a"),l.fillStyle=c,l.fillRect(0,0,256,200);const u=[];for(let h=0;h<e;h++){const f=256*(h+1)/(e+1),d=h===e-1&&e>2,m=d?95:70+o()*10,v=d?13:17;l.fillStyle=n?"#2e2418":"#20242a",l.beginPath(),l.ellipse(f,m+v+55,v*1.9,60,0,0,7),l.fill(),l.fillStyle=n?"#c4a983":"#b9a99a",l.beginPath(),l.ellipse(f,m,v*.85,v,0,0,7),l.fill(),l.fillStyle="#1a120a",l.beginPath(),l.ellipse(f,m-v*.6,v*.9,v*.5,0,Math.PI,0),l.fill(),l.fillStyle="rgba(0,0,0,0.6)",l.fillRect(f-6,m-2,3,3),l.fillRect(f+3,m-2,3,3),u.push([f,m,v])}if(t)for(const[h,f,d]of u){l.strokeStyle="rgba(235,225,205,0.9)",l.lineWidth=1.5;for(let m=0;m<26;m++)l.beginPath(),l.moveTo(h+(o()-.5)*d*2.4,f+(o()-.5)*d*2.4),l.lineTo(h+(o()-.5)*d*2.4,f+(o()-.5)*d*2.4),l.stroke()}return qn(l,256,200,(h,f,d,m,v)=>{const g=o()*30-15,p=Math.min(h,f,1-h,1-f)<.04?.6:1;return[(d+g)*p,(m+g)*p,(v+g)*p]}),yn(a,{repeat:!1})})}function Il(){return Mn("granny",()=>{const t=Us(99),[n,i]=on(200,260);i.fillStyle="#3a2e20",i.fillRect(0,0,200,260);const s=i.createRadialGradient(100,120,10,100,130,130);s.addColorStop(0,"#9a8463"),s.addColorStop(1,"#2a2015"),i.fillStyle=s,i.beginPath(),i.ellipse(100,130,88,118,0,0,7),i.fill(),i.fillStyle="#1c150d",i.beginPath(),i.ellipse(100,250,80,90,0,0,7),i.fill(),i.fillStyle="#b8a07c",i.beginPath(),i.ellipse(100,115,34,44,0,0,7),i.fill(),i.fillStyle="#d8d0c0",i.beginPath(),i.ellipse(100,80,40,22,0,Math.PI,0),i.fill();for(const o of[86,114]){const a=i.createRadialGradient(o,110,1,o,110,10);a.addColorStop(0,"#000"),a.addColorStop(.6,"#140800"),a.addColorStop(1,"rgba(60,30,0,0)"),i.fillStyle=a,i.beginPath(),i.arc(o,110,10,0,7),i.fill()}return i.strokeStyle="#3a2516",i.lineWidth=2,i.beginPath(),i.moveTo(88,138),i.quadraticCurveTo(100,134,112,138),i.stroke(),qn(i,200,260,(o,a,l,c,u)=>{const h=t()*24-12;return[l+h,c+h,u+h]}),yn(n,{repeat:!1})})}function v1(r=4){return Mn("cd"+r,()=>{const n=Us(r),[i,s]=on(256,200);s.fillStyle="#efeae0",s.fillRect(0,0,256,200),s.lineWidth=3,s.lineCap="round";const o=(a,l,c,u)=>{s.strokeStyle=u,s.beginPath(),s.arc(a,l-c,c*.15,0,7),s.moveTo(a,l-c*.85),s.lineTo(a,l-c*.4),s.moveTo(a-c*.2,l-c*.7),s.lineTo(a+c*.2,l-c*.7),s.moveTo(a,l-c*.4),s.lineTo(a-c*.15,l),s.moveTo(a,l-c*.4),s.lineTo(a+c*.15,l),s.stroke()};o(40,180,70,"#2a4fb0"),o(80,180,64,"#c03070"),o(115,180,40,"#d08020"),s.strokeStyle="#111",s.lineWidth=5,o(200,185,170,"#111"),s.lineWidth=3,s.beginPath(),s.moveTo(170,60),s.lineTo(130,120),s.stroke(),s.fillStyle="#b00",s.beginPath(),s.arc(196,22,3,0,7),s.arc(205,22,3,0,7),s.fill(),s.strokeStyle="rgba(10,10,10,0.8)",s.lineWidth=2,s.beginPath();for(let a=0;a<40;a++)s.lineTo(150+n()*100,10+n()*180);return s.stroke(),s.fillStyle="#222",s.font="18px Comic Sans MS, cursive",s.fillText("o moço",12,24),yn(i,{repeat:!1})})}function Ju(r=21,e=[168,160,140]){return Mn("skin"+r+e,()=>{const n=Ri(r),[i,s]=on(256);qn(s,256,256,(o,a)=>{const l=n.fbmP(o,a,4,5),c=Math.max(0,n.fbmP(o+.4,a,2,3)-.56)*4,u=.8+l*.3;return[e[0]*u-c*40,e[1]*u-c*60,e[2]*u-c*20]}),s.strokeStyle="rgba(60,40,80,0.35)",s.lineWidth=1.2;for(let o=0;o<18;o++){let a=n.r()*256,l=n.r()*256;s.beginPath(),s.moveTo(a,l);for(let c=0;c<12;c++)a+=(n.r()-.5)*18,l+=n.r()*14,s.lineTo(a,l);s.stroke()}return yn(i)})}function vn(r=23,e=[200,195,180],t=.4){return Mn("cl"+r+e+t,()=>{const i=Ri(r),[s,o]=on(256);return qn(o,256,256,(a,l)=>{const c=(Math.floor(a*128)+Math.floor(l*128))%2*.04,u=i.fbmP(a,l,4,5),h=Math.max(0,i.fbmP(a+.2,l+.6,2,4)-(.62-t*.15))*5,f=.6+u*.45+c;return[e[0]*f*(1-h*.2)+h*30,e[1]*f*(1-h*.9),e[2]*f*(1-h*.9)]}),yn(s)})}function x1(){return Mn("cookie",()=>{const e=Ri(31),[t,n]=on(256);qn(n,256,256,(s,o)=>{const a=s-.5,l=o-.5,c=Math.sqrt(a*a+l*l)*2,u=Math.exp(-c*c*14)*.55,h=Math.exp(-Math.pow((c-.42)*9,2))*.22,f=Math.pow(Math.max(0,1-c),.8)*.5,d=.85+e.fbmP(s,o,8,3)*.3,m=Math.min(1,(u+h+f)*d)*255;return[m,m*.97,m*.9]});const i=new Gi(t);return i.colorSpace=Ot,i})}function _1(){return Mn("glass",()=>{const e=Ri(41),[t,n]=on(256);return qn(n,256,256,(i,s)=>{const o=e.fbmP(i,s,4,5),a=e.fbm(i,s,2,3,6,.5);return[90,95,85,40+o*70+a*40]}),yn(t)})}function y1(){const[t,n]=on(96,72),i=new Gi(t);i.colorSpace=Ot,i.magFilter=Zt;const s=n.createImageData(96,72);return i.userData.update=o=>{const a=s.data,l=o*40%72;for(let c=0;c<72;c++){const u=Math.abs(c-l)<6?1.4:1;for(let h=0;h<96;h++){const f=Math.random()*200*u,d=(c*96+h)*4;a[d]=f,a[d+1]=f,a[d+2]=f*1.05,a[d+3]=255}}n.putImageData(s,0,0),i.needsUpdate=!0},i.userData.update(0),i}function Pa(){return Mn("dot",()=>{const[r,e]=on(64),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,0.5)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),yn(r,{repeat:!1})})}function M1(){return Mn("hair",()=>{const t=Us(77),[n,i]=on(128,256);for(let s=0;s<90;s++){i.strokeStyle=`rgba(${10+t()*15},${8+t()*10},${6+t()*8},${.6+t()*.4})`,i.lineWidth=.5+t()*1.1;const o=t()*128;i.beginPath(),i.moveTo(o,0),i.bezierCurveTo(o+(t()-.5)*20,256*.3,o+(t()-.5)*30,256*.6,o+(t()-.5)*40,256*(.6+t()*.4)),i.stroke()}return yn(n,{repeat:!1})})}const Qu=[[-.77,1.62,1.8],[.77,1.62,1.8]],Ui=.47;function S1(r,e){const t=document.createElement("canvas");t.width=t.height=1024;const n=t.getContext("2d");n.drawImage(r,0,0,1024,1024);const i=n.getImageData(0,0,1024,1024),s=i.data,o=e==="father"?[.92,.9,.86]:e==="tiago"?[.86,.88,.92]:[.8,.86,.82];for(let h=0;h<s.length;h+=4){const f=s[h]*.3+s[h+1]*.59+s[h+2]*.11,d=e==="father"?.35:.15;s[h]=(f+(s[h]-f)*d)*o[0],s[h+1]=(f+(s[h+1]-f)*d)*o[1],s[h+2]=(f+(s[h+2]-f)*d)*o[2]}n.putImageData(i,0,0);let a=11;const l=()=>(a=a*16807%2147483647)/2147483647;n.lineCap="round";for(let h=0;h<90;h++){let f=100+l()*820,d=120+l()*700;n.strokeStyle=`rgba(${40+l()*30},${30+l()*30},${70+l()*40},${.12+l()*.22})`,n.lineWidth=.8+l()*2.2,n.beginPath(),n.moveTo(f,d);for(let m=0;m<10;m++)f+=(l()-.5)*34,d+=(l()-.3)*26,n.lineTo(f,d);n.stroke()}for(const[h,f]of[[440,300],[584,300]]){const d=n.createRadialGradient(h,f,4,h,f,90);if(d.addColorStop(0,"rgba(10,0,0,0.95)"),d.addColorStop(.35,"rgba(40,10,30,0.7)"),d.addColorStop(1,"rgba(60,30,60,0)"),n.fillStyle=d,n.beginPath(),n.arc(h,f,90,0,7),n.fill(),e!=="tiago")for(let m=0;m<3;m++){const v=h-14+m*13+l()*6,g=90+l()*170,p=n.createLinearGradient(0,f,0,f+g);p.addColorStop(0,"rgba(50,0,0,0.95)"),p.addColorStop(1,"rgba(70,0,0,0)"),n.strokeStyle=p,n.lineWidth=3+l()*5,n.beginPath(),n.moveTo(v,f+10),n.bezierCurveTo(v+(l()-.5)*12,f+g*.4,v+(l()-.5)*18,f+g*.7,v+(l()-.5)*20,f+g),n.stroke()}}const c=n.createRadialGradient(512,478,4,512,478,80);if(c.addColorStop(0,"rgba(10,0,0,0.95)"),c.addColorStop(.6,"rgba(50,5,10,0.6)"),c.addColorStop(1,"rgba(60,10,20,0)"),n.fillStyle=c,n.beginPath(),n.ellipse(512,478,90,60,0,0,7),n.fill(),e!=="father")for(let h=0;h<5;h++){const f=470+l()*85,d=80+l()*220;n.strokeStyle=`rgba(${55+l()*30},0,0,0.85)`,n.lineWidth=3+l()*6,n.beginPath(),n.moveTo(f,500),n.quadraticCurveTo(f+(l()-.5)*20,500+d/2,f+(l()-.5)*30,500+d),n.stroke()}const u=new Gi(t);return u.colorSpace=Ot,u.anisotropy=4,u}const gs=(r,e,t)=>{const n=Math.min(1,Math.max(0,(t-r)/(e-r)));return n*n*(3-2*n)};function _d(r,e="mother"){if(!r||!r.head)return null;const n=r.head.geometry.clone(),i=n.attributes.position;n.attributes.uv;const s=i.count,o=new Float32Array(s*3).fill(1),a=e==="scare"?1.35:e==="mother"?1.1:e==="father"?.55:.25,l=new D;for(let m=0;m<s;m++){l.fromBufferAttribute(i,m);const v=gs(-.2,1.4,l.z);if(l.y<Ui){const _=Ui-l.y,C=v*gs(2.6,.6,Math.abs(l.x));l.y-=Math.min(_,.35)/.35*a*C+_*.22*a*C,l.z-=_*.06*a*C}const g=gs(.95,.2,Math.abs(l.x))*v*gs(Ui+.25,Ui,l.y)*gs(Ui-.45,Ui-.05,l.y);let p=0;for(const[_,C,w]of Qu){const E=Math.hypot(l.x-_,(l.y-C)*1.25);if(l.z>.8){const P=gs(.62,.15,E);p=Math.max(p,P),l.z-=P*.42}}const x=v*gs(1.6,.9,Math.abs(Math.abs(l.x)-1.25)+Math.abs(l.y-.75));l.x-=Math.sign(l.x)*x*.12,i.setXYZ(m,l.x,l.y,l.z);const M=Math.max(p*.97,g*(e==="father"?.75:.96));o[m*3]=o[m*3+1]=o[m*3+2]=1-M}n.setAttribute("color",new Gt(o,3)),n.computeVertexNormals();const c="skin_"+e;r[c]=r[c]||(r.headMaps.map&&r.headMaps.map.image?S1(r.headMaps.map.image,e):null);const u=new At({map:r[c],normalMap:r.headMaps.normalMap||null,vertexColors:!0,roughness:e==="father"?.62:.42,metalness:0,sheen:.4,sheenRoughness:.6,sheenColor:new Xe(6978160),clearcoat:e==="mother"||e==="scare"?.35:.1,clearcoatRoughness:.4});u.normalScale.set(1.2,1.2);const h=new oe(n,u);h.castShadow=!0,h.receiveShadow=!0;const f=new Ye;f.add(h);const d=new oe(new Vn(1,16,12),new Ce({color:393216,roughness:.3}));if(d.scale.set(.85,.5+a*.6,.6),d.position.set(0,Ui-.25-a*.55,1.55),f.add(d),a>.5){const m=new Ce({color:12102026,roughness:.35});for(let v=0;v<9;v++){const g=new oe(new _o(.06+Math.random()*.03,.22+Math.random()*.12,5),m),p=(v/8-.5)*1.6;g.position.set(Math.sin(p)*.6,Ui-.08,1.85+Math.cos(p)*.25-.25),g.rotation.x=Math.PI,f.add(g);const x=g.clone();x.position.y=Ui-.3-a*1.1,x.rotation.x=0,x.position.z-=.12,f.add(x)}}if(e!=="tiago")for(const[m,v]of Qu){const g=new oe(new Vn(.2,12,10),new At({color:131586,roughness:.05,clearcoat:1}));g.position.set(m*.96,v,1.42),f.add(g)}return f.scale.setScalar(.033),f}let vs=null;function b1(){if(vs)return vs;const r=256,e=document.createElement("canvas");e.width=e.height=r;const t=e.getContext("2d"),n=new Float32Array(r*r);let i=5;const s=()=>(i=i*16807%2147483647)/2147483647;for(let a=0;a<r*r;a++)n[a]=s()*.25;for(let a=0;a<300;a++){const l=s()*r,c=s()*r,u=10+s()*50;for(let h=0;h<u;h++){const f=Math.floor(l+h)%r,d=Math.floor(c+Math.sin(h*.2)*3+r)%r;n[d*r+f]-=.6}}const o=t.createImageData(r,r);for(let a=0;a<r;a++)for(let l=0;l<r;l++){const c=a*r+l,u=n[a*r+(l+1)%r]-n[c],h=n[(a+1)%r*r+l]-n[c],f=-u*2,d=-h*2,m=1,v=Math.hypot(f,d,m);o.data[c*4]=(f/v*.5+.5)*255,o.data[c*4+1]=(d/v*.5+.5)*255,o.data[c*4+2]=(m/v*.5+.5)*255,o.data[c*4+3]=255}return t.putImageData(o,0,0),vs=new Gi(e),vs.wrapS=vs.wrapT=Xn,vs.repeat.set(3,3),vs}function w1(){const r=b1(),e=(t,n,i={})=>{const s=new At({map:Ju(t,n),normalMap:r,roughness:i.rough??.5,sheen:.35,sheenRoughness:.7,sheenColor:new Xe(i.sheen??8030848),clearcoat:i.wet??.2,clearcoatRoughness:.45});return s.normalScale.set(.6,.6),s};return{deadSkin:e(22,[104,108,98],{wet:.4}),paleSkin:e(21,[138,128,112],{rough:.6,wet:.08}),childSkin:e(25,[186,168,154],{rough:.65,wet:0}),demonSkin:e(29,[30,27,26],{rough:.25,wet:.9,sheen:3153952}),gown:new Ce({map:vn(23,[140,132,114],2),roughness:.95,side:xn,alphaMap:ef(),alphaTest:.5}),shirt:new Ce({map:vn(24,[92,96,84],1.9),roughness:.95,side:xn}),pants:new Ce({map:vn(26,[52,48,42],.4),roughness:.95}),childDress:new Ce({map:vn(27,[170,120,138],.4),roughness:.95,side:xn,alphaMap:ef(3),alphaTest:.5}),hair:new Ce({map:M1(),alphaTest:.32,side:xn,roughness:.42,color:2761760}),nail:new Ce({color:2760728,roughness:.3}),hole:new Si({color:0}),ghost:new Ce({color:723723,roughness:1}),horn:new Ce({map:Ju(30,[70,62,52]),roughness:.75}),demonMouth:new Ce({color:1048576,emissive:5244928,emissiveIntensity:1.5})}}function ef(r=1){const n=document.createElement("canvas");n.width=256,n.height=256;const i=n.getContext("2d");i.fillStyle="#fff",i.fillRect(0,0,256,256);let s=r*77+1;const o=()=>(s=s*16807%2147483647)/2147483647;i.fillStyle="#000",i.beginPath(),i.moveTo(0,256);for(let l=0;l<=40;l++)i.lineTo(l/40*256,252-o()*40*(o()<.25?2:1));i.lineTo(256,256),i.fill();for(let l=0;l<18;l++)i.beginPath(),i.ellipse(o()*256,256*.45+o()*256*.45,2+o()*8,3+o()*12,o()*3,0,7),i.fill();return new Gi(n)}function ui(r,e,t,n=12){const i=[];for(let l=0;l<=16;l++){const c=l/16;let u=e[0][1];for(let h=1;h<e.length;h++)if(c<=e[h][0]){const f=e[h-1],d=e[h],m=(c-f[0])/(d[0]-f[0]);u=f[1]+(d[1]-f[1])*(m*m*(3-2*m));break}i.push(new re(Math.max(.002,u),-c*r))}i.unshift(new re(.001,0)),i.push(new re(.001,-r));const s=new Ns(i,n),o=new Ye,a=new oe(s,t);return a.castShadow=!0,a.receiveShadow=!0,o.add(a),o.userData.mesh=a,o}function T1(r,e,t,n=9,i=1){const s=[];for(let u=0;u<=24;u++){const h=u/24;let f=r(h);s.push(new re(f,-h*e))}const o=new Ns(s,40),a=o.attributes.position,l=new D;for(let u=0;u<a.count;u++){l.fromBufferAttribute(a,u);const h=Math.atan2(l.z,l.x),f=-l.y/e,d=Math.hypot(l.x,l.z),m=1+(Math.sin(h*n+i+f*2.5)*.06+Math.sin(h*n*2.3+i*3)*.025)*(.3+f);a.setXYZ(u,Math.cos(h)*d*m,l.y,Math.sin(h)*d*m)}o.computeVertexNormals();const c=new oe(o,t);return c.castShadow=!0,c.receiveShadow=!0,c}function E1(r,e={},t=null){const n=e.h??1.7,i=n/1.7,s=e.thin??1,o=e.armK??1,a=e.skin||r.deadSkin,l=e.top||a,c=e.bottom||a,u={};u.root=new Ye,u.hips=new Ye,u.hips.position.y=.95*i,u.root.add(u.hips);const h=ui(.62*i,[[0,.07],[.1,.13],[.35,.115],[.55,.135],[.78,.15],[.9,.12],[1,.05]].map(([m,v])=>[m,v*s*i]),l,20);if(h.rotation.x=Math.PI,h.position.y=-.1*i,h.userData.mesh.scale.set(1.15,1,.72),u.spine=new Ye,u.spine.position.y=0,u.hips.add(u.spine),u.spine.add(h),e.ribs)for(let m=0;m<6;m++){const v=new oe(new ss(.135*s*i,.006*i,4,16,Math.PI*.9),a);v.position.set(0,(.3+m*.035)*i,0),v.rotation.set(Math.PI/2,0,Math.PI*.05-Math.PI*.45),v.scale.set(1.05,.62,1),u.spine.add(v)}u.neck=new Ye,u.neck.position.y=.5*i,u.spine.add(u.neck);const f=ui(.13*i*(e.longNeck??1),[[0,.05],[.5,.042],[1,.05]].map(([m,v])=>[m,v*i*s]),a,12);f.rotation.x=Math.PI,f.position.y=-.02*i,u.neck.add(f),u.head=new Ye,u.head.position.y=.11*i*(e.longNeck??1),u.neck.add(u.head);const d=e.face&&t?_d(t,e.face):null;if(d)d.scale.multiplyScalar(i*(e.headK??1)*1.28),d.position.set(0,.03*i,-.012*i),u.head.add(d),u.face=d,u.mouth=d.children[1];else{const m=new oe(new Vn(.105*i,24,18),a);m.scale.set(.86,1.15*(e.longHead??1),.98),m.position.y=.09*i*(e.longHead??1),m.castShadow=!0,u.head.add(m);const v=new oe(new Vn(.03*i,10,8),e.mouthMat||r.hole);v.position.set(0,.07*i,.092*i),v.scale.set(.35,3.2,.5),u.head.add(v),u.mouth=v}for(const m of[-1,1]){const v=m<0?"L":"R",g=new Ye;g.position.set(m*.19*s*i,.43*i,0),u.spine.add(g);const p=.29*i*o,x=.27*i*o,M=ui(p,[[0,.055],[.25,.05],[.8,.036],[1,.034]].map(([O,V])=>[O,V*i*s]),e.sleeves?l:a);g.add(M);const _=new Ye;_.position.y=-p,M.add(_),_.add(ui(x,[[0,.034],[.25,.038],[.85,.024],[1,.022]].map(([O,V])=>[O,V*i*s]),a));const C=new Ye;C.position.y=-x,_.add(C);const w=ui(.085*i,[[0,.022],[.5,.03],[1,.026]].map(([O,V])=>[O,V*i]),a,8);w.userData.mesh.scale.set(1.2,1,.45),C.add(w);const E=e.fingerK??1;for(let O=0;O<4;O++){const V=new Ye;V.position.set((O-1.5)*.017*i,-.08*i,0),V.rotation.set(.12+O*.04,0,(O-1.5)*.06),C.add(V);const G=.045*i*E,j=.04*i*E;V.add(ui(G,[[0,.0085*i],[1,.007*i]],a,6));const W=new Ye;W.position.y=-G,W.rotation.x=.35,V.add(W),W.add(ui(j,[[0,.007*i],[1,.0045*i]],a,6));const J=new oe(new _o(.004*i,.014*i*E,5),r.nail);J.position.y=-j-.005*i,J.rotation.x=Math.PI,W.add(J)}const P=ui(.05*i*E,[[0,.01*i],[1,.006*i]],a,6);P.position.set(m*-.025*i,-.035*i,.01*i),P.rotation.z=m*-.7,C.add(P),u["arm"+v]=M,u["fore"+v]=_,u["hand"+v]=C,u["shoulder"+v]=g;const y=.45*i,S=.44*i,R=ui(y,[[0,.085],[.2,.08],[.85,.048],[1,.045]].map(([O,V])=>[O,V*i*s]),c);R.position.set(m*.09*i,0,0),u.hips.add(R);const F=new Ye;F.position.y=-y,R.add(F),F.add(ui(S,[[0,.045],[.25,.05],[.85,.03],[1,.028]].map(([O,V])=>[O,V*i*s]),e.barelegs?a:c));const B=ui(.21*i,[[0,.03],[.3,.035],[1,.022]].map(([O,V])=>[O,V*i]),a,8);B.rotation.x=-Math.PI/2,B.position.set(0,-S,-.04*i),B.userData.mesh.scale.set(1.25,1,.6),F.add(B),u["leg"+v]=R,u["shin"+v]=F}if(e.dress){const m=.95*i*(e.dressLen??1),v=T1(g=>(.17+g*.13+Math.sin(g*Math.PI)*.02)*i*s,m,e.dress,9,e.seed??1);v.position.y=.52*i,u.spine.add(v),u.dress=v}if(e.hair){const m=new Ye;u.head.add(m),u.hair=m;const v=(e.hairLen??.6)*i,g=26;for(let x=0;x<g;x++){const M=x/g*Math.PI*2,_=Math.cos(M)>.55;if(_&&!e.hairFace)continue;const C=(.06+Math.random()*.05)*i,w=new ii(C,v*(.8+Math.random()*.35),1,6),E=w.attributes.position;for(let S=0;S<E.count;S++){const F=.5-E.getY(S)/v;E.setZ(S,Math.max(0,.35-F)*.06*i+F*.01*i)}w.translate(0,-v/2*.95,0);const P=new oe(w,r.hair),y=.085*i;P.position.set(Math.sin(M)*y,.19*i,Math.cos(M)*y*.95),P.rotation.y=M,P.rotation.x=_?-.12:.08,P.castShadow=!0,m.add(P)}const p=new oe(new Vn(.105*i,16,10,0,Math.PI*2,0,Math.PI*.55),new Ce({color:920329,roughness:.55}));p.position.set(0,.105*i,-.012*i),p.scale.set(1,1.05,1.12),m.add(p)}return u.root.traverse(m=>{m.isMesh&&(m.userData.creature=!0)}),u}const Ft=(r,e,t)=>new D(r,e,t),A1=Ft(0,-1,0),ht={hips:Ft(.5,92,5.5),chest:Ft(.5,125,6),neck:Ft(1,141,4),headJ:Ft(3,148,5),top:Ft(3,168,4),shL:Ft(-13.5,136,2),elL:Ft(-14.5,108.5,-.5),wrL:Ft(-21,86,6.6),tipL:Ft(-22.5,71,8),shR:Ft(16,136,2),elR:Ft(23,115,-9),wrR:Ft(17.5,99,12),tipR:Ft(14,94,15),hipL:Ft(-5.5,87,5),knL:Ft(-3.2,50,4),anL:Ft(-.5,13,-10),toeL:Ft(.5,2,4),hipR:Ft(5,87,6),knR:Ft(5.5,50,8),anR:Ft(4.7,9,-2),toeR:Ft(5,2,15)};function R1(r,e){const t=document.createElement("canvas");t.width=t.height=1024;const n=t.getContext("2d");n.drawImage(r,0,0,1024,1024);const i=n.getImageData(0,0,1024,1024),s=i.data;for(let c=0;c<s.length;c+=4){const u=s[c]*.3+s[c+1]*.59+s[c+2]*.11,h=e==="hair"?.2:.12,f=e==="hair"?.4:.6;s[c]=(u+(s[c]-u)*h)*f*.95,s[c+1]=(u+(s[c+1]-u)*h)*f,s[c+2]=(u+(s[c+2]-u)*h)*f*.96}n.putImageData(i,0,0);let o=e.length*77+5;const a=()=>(o=o*16807%2147483647)/2147483647;if(e==="face"){for(const[f,d]of[[.322,.392],[.49,.392]]){const m=f*1024,v=d*1024,g=n.createRadialGradient(m,v,2,m,v,70);g.addColorStop(0,"rgba(0,0,0,1)"),g.addColorStop(.35,"rgba(5,0,0,0.95)"),g.addColorStop(.7,"rgba(40,10,30,0.5)"),g.addColorStop(1,"rgba(40,20,40,0)"),n.fillStyle=g,n.beginPath(),n.ellipse(m,v,70,52,0,0,7),n.fill();for(let p=0;p<3;p++){const x=m-18+p*16,M=120+a()*220,_=n.createLinearGradient(0,v,0,v+M);_.addColorStop(0,"rgba(60,0,0,0.95)"),_.addColorStop(1,"rgba(60,0,0,0)"),n.strokeStyle=_,n.lineWidth=6+a()*8,n.beginPath(),n.moveTo(x,v+20),n.quadraticCurveTo(x+(a()-.5)*20,v+M/2,x+(a()-.5)*26,v+M),n.stroke()}}const c=.405*1024,u=.6*1024,h=n.createRadialGradient(c,u,2,c,u,80);h.addColorStop(0,"rgba(0,0,0,0.95)"),h.addColorStop(.5,"rgba(30,0,5,0.7)"),h.addColorStop(1,"rgba(30,0,5,0)"),n.fillStyle=h,n.beginPath(),n.ellipse(c,u,80,50,0,0,7),n.fill()}n.lineCap="round";for(let c=0;c<(e==="hair"?0:120);c++){let u=a()*1024,h=a()*1024;n.strokeStyle=`rgba(40,30,60,${.08+a()*.15})`,n.lineWidth=1+a()*2,n.beginPath(),n.moveTo(u,h);for(let f=0;f<8;f++)u+=(a()-.5)*30,h+=(a()-.3)*24,n.lineTo(u,h);n.stroke()}for(let c=0;c<(e==="body"?45:8);c++){const u=a()*1024,h=a()*1024,f=10+a()*60,d=n.createRadialGradient(u,h,1,u,h,f);d.addColorStop(0,`rgba(${50+a()*30},0,0,${.5+a()*.4})`),d.addColorStop(1,"rgba(40,0,0,0)"),n.fillStyle=d,n.beginPath(),n.arc(u,h,f,0,7),n.fill()}const l=new Gi(t);return l.colorSpace=Ot,l.anisotropy=4,l.flipY=!0,l}function C1(r,e,t,n){const i=t.clone().sub(e),s=pi.clamp(r.clone().sub(e).dot(i)/i.lengthSq(),0,1);return r.distanceTo(e.clone().addScaledVector(i,s))/n}function P1(r,e,t={}){const n=t.h??1.62,i=n/168,s=Ft(-.5,0,-5.5),o=y=>y.clone().add(s).multiplyScalar(i),a={};a.root=new Ye,a.hips=new Ye,a.hips.position.copy(o(ht.hips)).setX(0).setZ(0),a.root.add(a.hips),a.spine=new Ye,a.hips.add(a.spine),a.neck=new Ye,a.neck.position.copy(ht.neck.clone().sub(ht.hips).multiplyScalar(i)),a.spine.add(a.neck),a.head=new Ye,a.head.position.copy(ht.headJ.clone().sub(ht.neck).multiplyScalar(i)),a.neck.add(a.head),a.hair=new Ye,a.head.add(a.hair),a.mouth=new Ut,a.mouth.scale.set(1,1,1),a.head.add(a.mouth);const l={L:["shL","elL","wrL","tipL","hipL","knL","anL","toeL"],R:["shR","elR","wrR","tipR","hipR","knR","anR","toeR"]};for(const y of["L","R"]){const[S,R,F,B,O,V,G]=l[y],j=new Ye;j.position.copy(ht[S].clone().sub(ht.hips).multiplyScalar(i)),a.spine.add(j);const W=new Ye;j.add(W);const J=new Ye;J.position.y=-ht[R].distanceTo(ht[S])*i,W.add(J);const le=new Ye;le.position.y=-ht[F].distanceTo(ht[R])*i,J.add(le);const ve=new Ye;ve.position.copy(ht[O].clone().sub(ht.hips).multiplyScalar(i)),a.hips.add(ve);const Ne=new Ye;Ne.position.y=-ht[V].distanceTo(ht[O])*i,ve.add(Ne),Object.assign(a,{["shoulder"+y]:j,["arm"+y]:W,["fore"+y]:J,["hand"+y]:le,["leg"+y]:ve,["shin"+y]:Ne})}const c={},u=[],h=(y,S,R)=>{const F=new nh;return F.name=y,F.position.copy(R),S&&S.add(F),c[y]=F,u.push(F),F},f=(y,S)=>ht[y].clone().sub(ht[S]).multiplyScalar(i),d=h("hips",null,o(ht.hips));h("spine",d,Ft(0,0,0)),h("neck",c.spine,f("neck","hips")),h("head",c.neck,f("headJ","neck"));const m={};for(const y of["L","R"]){const[S,R,F,B,O,V,G,j]=l[y];h("shoulder"+y,c.spine,f(S,"hips")),h("arm"+y,c["shoulder"+y],Ft(0,0,0)),h("fore"+y,c["arm"+y],f(R,S)),h("hand"+y,c["fore"+y],f(F,R)),h("leg"+y,d,f(O,"hips")),h("shin"+y,c["leg"+y],f(V,O));const W=(J,le)=>new gi().setFromUnitVectors(A1,ht[le].clone().sub(ht[J]).normalize());m["arm"+y]=W(S,R),m["fore"+y]=W(R,F),m["hand"+y]=W(F,B),m["leg"+y]=W(O,V),m["shin"+y]=W(V,G)}const v=new Oa(u),g=[["hips",ht.hips.clone().setY(76),ht.hips.clone().setY(104),15],["spine",ht.hips.clone().setY(104),ht.neck,14],["neck",ht.neck,ht.headJ,6],["head",ht.headJ,ht.top,11]];for(const y of["L","R"]){const[S,R,F,B,O,V,G,j]=l[y];g.push(["arm"+y,ht[S],ht[R],4.8],["fore"+y,ht[R],ht[F],4.2],["hand"+y,ht[F],ht[B],4.5],["leg"+y,ht[O],ht[V],8.5],["shin"+y,ht[V],ht[G],6],["shin"+y,ht[G],ht[j],5.5])}const p=new Set(["hips|spine","spine|neck","neck|head","spine|armL","spine|armR","armL|foreL","armR|foreR","foreL|handL","foreR|handR","hips|legL","hips|legR","legL|shinL","legR|shinR"]),x=(y,S)=>p.has(y+"|"+S)||p.has(S+"|"+y),M=Object.fromEntries(u.map((y,S)=>[y.name,S])),_={},C=[];for(const[y,S]of Object.entries(r)){const R=S.p.length/3,F=new Float32Array(R*3),B=new Uint16Array(R*4),O=new Float32Array(R*4),V=new D;for(let J=0;J<R;J++){V.set(S.p[J*3],S.p[J*3+1],S.p[J*3+2]);let le=[["head",0]];if(y==="01"||y==="02")le=[[V.y<ht.neck.y+2?"neck":"head",0]];else{const Ne=g.map(([$,fe,Re,de])=>[$,C1(V,fe,Re,de)]).sort(($,fe)=>$[1]-fe[1]);le=[Ne[0]];const Ze=Ne.find($=>$[0]!==Ne[0][0]);Ze&&x(Ne[0][0],Ze[0])&&Ze[1]<Ne[0][1]*1.8+.25&&le.push(Ze)}if(le.length===2){const Ne=1/Math.pow(le[0][1]+.05,3),Ze=1/Math.pow(le[1][1]+.05,3),$=Ne+Ze;B[J*4]=M[le[0][0]],O[J*4]=Ne/$,B[J*4+1]=M[le[1][0]],O[J*4+1]=Ze/$}else B[J*4]=M[le[0][0]],O[J*4]=1;const ve=o(V);F[J*3]=ve.x,F[J*3+1]=ve.y,F[J*3+2]=ve.z}const G=new Vt;G.setAttribute("position",new Gt(F,3)),G.setAttribute("uv",new Gt(new Float32Array(S.u),2)),G.setAttribute("normal",new Gt(new Float32Array(S.n),3)),G.setAttribute("skinIndex",new Gt(B,4)),G.setAttribute("skinWeight",new Gt(O,4));const j=y==="01"?"hair":y==="02"?"face":"body";_[j]=_[j]||new At({map:e[j]?R1(e[j],j):null,roughness:j==="hair"?.6:.62,side:xn,sheen:j==="hair"?0:.12,sheenColor:new Xe(5925472),clearcoat:.08,clearcoatRoughness:.6});const W=new Zf(G,_[j]);W.castShadow=!0,W.receiveShadow=!0,W.frustumCulled=!1,W.userData.creature=!0,C.push(W)}a.root.add(d),a.root.updateMatrixWorld(!0);for(const y of C)a.root.add(y),y.bind(v);const w=new gi,E=new gi,P=(y,S,R)=>{const F=c[y],B=m[y]||E;w.copy(R||E).multiply(S.quaternion).multiply(B.clone().invert()),F.quaternion.copy(w)};return a.drive=()=>{d.position.set(a.hips.position.x,a.hips.position.y,a.hips.position.z).add(o(ht.hips).setY(0)),d.quaternion.copy(a.hips.quaternion),c.spine.quaternion.copy(a.spine.quaternion),c.neck.quaternion.copy(a.neck.quaternion),c.head.quaternion.copy(a.head.quaternion);for(const y of["L","R"])c["shoulder"+y].quaternion.copy(a["shoulder"+y].quaternion),P("arm"+y,a["arm"+y],null),P("fore"+y,a["fore"+y],m["arm"+y]),P("hand"+y,a["hand"+y],m["fore"+y]),P("leg"+y,a["leg"+y],null),P("shin"+y,a["shin"+y],m["leg"+y])},a.real=!0,a.meshes=C,a.mats=_,a.drive(),a}const Es=(r=0,e=0,t=0)=>new D(r,e,t),Nc=Es(),ha=Es();let rr=null;function L1(r){rr=r}function D1(){const r=w1();return{...r,greySkin:r.deadSkin,nightgown:r.gown,eyeShine:r.hole}}function bi(r,e={}){const t={...e};return t.dress===void 0&&t.top===r.nightgown&&(t.dress=r.gown,t.top=t.skin),t.faceless&&(t.face=null),E1(r,t,rr)}class dh{constructor(e,t,n={}){this.g=e,this.P=t,this.root=t.root,this.pos=Es(),this.yaw=0,this.vel=Es(),this.active=!1,this.state="idle",this.t=0,this.stateT=0,this.hp=n.hp??3,this.maxHp=this.hp,this.stun=0,this.path=[],this.repath=0,this.atkCD=0,this.stepT=0,this.poseClock=0,this.radius=n.radius??.35,this.root.visible=!1,e.scene.add(this.root)}setState(e){this.state=e,this.stateT=0}show(e){this.active=e,this.root.visible=e}place(e,t,n,i=0){this.pos.set(e,t,n),this.yaw=i,this.sync()}sync(){this.root.position.copy(this.pos),this.root.rotation.y=this.yaw,this.P.drive&&this.P.drive()}chest(){return Nc.copy(this.pos).setY(this.pos.y+1.2)}dist(){const e=this.g.player.pos;return Math.hypot(e.x-this.pos.x,e.z-this.pos.z)}faceTo(e,t,n=1){let s=Math.atan2(e-this.pos.x,t-this.pos.z)-this.yaw;for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;this.yaw+=s*Math.min(1,n)}moveToward(e,t,n,i=!0){const s=this.g.level;this.repath-=n,this.repath<=0&&(this.repath=.3+Math.random()*.15,s.clearLine(this.pos.x,this.pos.z,e.x,e.z)?this.path=[Es(e.x,0,e.z)]:this.path=s.findPath(this.pos.x,this.pos.z,e.x,e.z)||[]);let o=this.path[0];for(;o&&Math.hypot(o.x-this.pos.x,o.z-this.pos.z)<.25&&this.path.length>1;)this.path.shift(),o=this.path[0];if(!o)return 0;const a=o.x-this.pos.x,l=o.z-this.pos.z,c=Math.hypot(a,l);if(c<.01)return 0;const u=Math.min(c,t*n);return this.pos.x+=a/c*u,this.pos.z+=l/c*u,i&&(this.pos.y=s.floorY(this.pos.x,this.pos.z)),this.faceTo(o.x,o.z,n*8),s.pushDoors(this.pos,this.g.audio),u}isSeen(e){const t=this.g,n=t.camera,i=e||this.chest();ha.copy(i).sub(n.position);const s=ha.length();ha.divideScalar(s);const o=n.userData.fwd,a=ha.dot(o);return a<Math.cos(pi.degToRad(48))||!t.level.los(n.position,i)?!1:t.lightsOn||s<2.2||t.player.flashlightOn&&a>Math.cos(.55)&&s<16||t.flashT>0}aimPoint(){return Nc.copy(this.pos).setY(this.pos.y+(this.aimH??1.2))}hitBy(e,t=0){if(!this.active||this.state==="hidden"||this.state==="idle")return null;const i=new Ca(e.origin,e.direction,0,40).intersectObject(this.root,!0);if(i.length)return i[0];const s=this.aimPoint().clone(),o=s.distanceTo(e.origin),a=(this.hitR??.42)+o*t,l=new D;return e.intersectSphere(new vi(s,a),l)?{point:l,distance:l.distanceTo(e.origin),face:null}:null}attack(e){this.g.player.damage(e,this.pos),this.atkCD=1.2}pushPlayerApart(){const e=this.g.player.pos,t=e.x-this.pos.x,n=e.z-this.pos.z,i=Math.hypot(t,n),s=this.radius+.3;if(i<s&&i>.001){const o=s-i;this.pos.x-=t/i*o,this.pos.z-=n/i*o}}}const ua=2.68;class I1 extends dh{constructor(e,t){const n=rr&&rr.female?P1(rr.female.data,rr.female.imgs,{h:1.64}):bi(t,{h:1.62,thin:.72,armK:1.45,fingerK:1.9,skin:t.greySkin,dress:t.gown,dressLen:.72,hair:!0,hairFace:!1,hairLen:.8,face:"mother",barelegs:!0});super(e,n,{hp:3,radius:.42}),this.hitR=.5,this.onCeiling=!1,this.fleeTo=null,this.onFlee=null,this.skT=0,this.retreatT=0,this.flip=0}pose(e,t){const n=this.P,i=e*9,s=Math.sin(i)*t,o=Math.sin(i+Math.PI)*t;n.hips.position.y=.52+Math.abs(Math.sin(i))*.04*t,n.hips.rotation.set(1.42,0,Math.sin(i)*.08*t),n.spine.rotation.set(-.12,0,-Math.sin(i)*.1*t),n.neck.rotation.set(-.9,0,Math.sin(e*13)*.06),n.head.rotation.set(-.7,this.onCeiling?Math.PI*.92:0,.35+Math.sin(e*17)*.05),n.armL.rotation.set(-2.15+s*.45,0,-.55),n.armR.rotation.set(-2.15+o*.45,0,.55),n.foreL.rotation.set(.95-s*.3,0,.25),n.foreR.rotation.set(.95-o*.3,0,-.25),n.handL.rotation.set(.8,0,0),n.handR.rotation.set(.8,0,0),n.legL.rotation.set(-.75+o*.35,0,-1),n.legR.rotation.set(-.75+s*.35,0,1),n.shinL.rotation.set(-1.9,0,0),n.shinR.rotation.set(-1.9,0,0),n.hair&&(n.hair.rotation.x=this.onCeiling?-1.4:1.2)}stunPose(e){const t=this.P;t.hips.position.y=.35,t.hips.rotation.set(1.2,0,Math.sin(e*23)*.2),t.spine.rotation.set(-.6+Math.sin(e*40)*.15,0,0),t.armL.rotation.set(-2.9,0,-.3+Math.sin(e*31)*.4),t.armR.rotation.set(-2.9,0,.3+Math.sin(e*29)*.4),t.foreL.rotation.set(-1.8,0,0),t.foreR.rotation.set(-1.8,0,0),t.neck.rotation.x=-.2+Math.sin(e*50)*.3,t.head.rotation.set(0,Math.sin(e*37)*.8,Math.sin(e*19)*.5),t.legL.rotation.set(-.4+Math.sin(e*27)*.4,0,-.6),t.legR.rotation.set(-.4-Math.sin(e*25)*.4,0,.6)}setCeiling(e){this.onCeiling=e,this.root.rotation.z=e?Math.PI:0}toCeiling(e,t,n="ceiling"){this.show(!0),this.setCeiling(!0),this.pos.set(e,ua,t),this.setState(n),this.stun=0}hunt(e,t){this.hp=this.maxHp,this.toCeiling(e,t,"ceilHunt")}drop(){this.setCeiling(!1),this.setState("drop"),this.pos.y=2.1,this.dropV=0}hurt(e){if(!["flee","hidden"].includes(this.state)){if(this.hp--,this.g.audio.scream(this.pos.clone().setY(this.pos.y>1.5?2.2:.8),{pitch:1.3,dur:.7}),this.g.spawnBlood(e.point,e.face?e.face.normal:null),this.hp<=0){this.flee();return}if(this.onCeiling||this.state==="poise"){this.fall();return}this.stun=Math.max(this.stun,.8)}}flashed(){["flee","hidden","ceiling","climb"].includes(this.state)||(this.g.audio.scream(this.pos.clone().setY(this.onCeiling?2.2:.8),{pitch:1.6,dur:1.2,vol:.9}),this.onCeiling||this.state==="poise"?this.fall():(this.stun=3.2,this.setState("floor")))}fall(){this.setCeiling(!1),this.setState("fall"),this.pos.y=2.2,this.dropV=0}flee(){this.setState("flee"),this.stun=0,this.g.audio.scream(this.pos.clone().setY(1),{pitch:1.1,dur:2.2,vol:1.2})}poseUpright(e,t){const n=this.P,i=e*6.5,s=Math.sin(e*31)*.05;n.hips.position.y=.88+Math.abs(Math.sin(i))*.03*t,n.hips.rotation.set(0,0,Math.sin(i)*.06+s),n.spine.rotation.set(.32+s,0,-.08),n.neck.rotation.set(.25,.1,.75+Math.sin(e*9)*.06),n.head.rotation.set(-.35,0,.25+s*2),n.armL.rotation.set(-1.35+Math.sin(i)*.2*t,0,-.18),n.armR.rotation.set(-1.5-Math.sin(i)*.2*t,0,.22),n.foreL.rotation.set(-.25,0,0),n.foreR.rotation.set(-.15,0,0),n.handL.rotation.set(.5,0,0),n.handR.rotation.set(.5,0,0),n.legL.rotation.set(Math.sin(i)*.45*t,0,-.06),n.legR.rotation.set(-Math.sin(i)*.45*t,0,.06),n.shinL.rotation.set(Math.max(0,-Math.sin(i))*.7*t+.08,0,0),n.shinR.rotation.set(Math.max(0,Math.sin(i))*.7*t+.08,0,0),n.hair&&(n.hair.rotation.x=.1)}update(e){if(!this.active)return;this.t+=e,this.stateT+=e,this.atkCD-=e;const t=this.g,n=t.audio,i=t.level;this.poseClock-=e;const s=this.poseClock<=0;s&&(this.poseClock=1/18);const o=this.state;if(o!=="hidden"){if(this.aimH=this.onCeiling?-.42:o==="floor"?1.15:.45,o==="ceiling"){s&&this.pose(this.t*.2,.15),this.sync();return}if(o==="ceilHunt"||o==="ceilRetreat"){let a=t.player.pos;o==="ceilRetreat"&&(a=this.retreatTo||a,this.stateT>5&&this.setState("ceilHunt"));const l=o==="ceilRetreat"?3.2:this.dist()>6?2.6:1.9,c=this.moveToward(a,l,e,!1);this.pos.y=ua,s&&this.pose(this.t,c>0?1:0),this.skT-=e,this.skT<=0&&c>0&&(this.skT=.2+Math.random()*.12,n.skitter(this.pos.clone(),.14,.6)),Math.random()<e*.25&&n.creak(this.pos.clone(),1.2,.5,1.1),o==="ceilHunt"&&this.dist()<2.2&&this.atkCD<=0&&i.los(t.camera.position,this.pos.clone().setY(2.3))&&(this.setState("poise"),n.scream(this.pos.clone().setY(2.3),{pitch:1.3,dur:.8,vol:1.1}),t.flickerT=.6),this.sync();return}if(o==="poise"){s&&(this.pose(this.t*3,.3),this.P.neck.rotation.z=Math.sin(this.t*40)*.3),this.faceTo(t.player.pos.x,t.player.pos.z,e*6),this.stateT>.9&&(this.drop(),this.lunge=this.dist()<2.6),this.sync();return}if(o==="drop"||o==="fall"){if(this.dropV-=11*e,this.pos.y+=this.dropV*e,this.lunge){const l=t.player.pos,c=l.x-this.pos.x,u=l.z-this.pos.z,h=Math.hypot(c,u)||1,f=Math.max(0,Math.min(h-.7,2.5*e));this.pos.x+=c/h*f,this.pos.z+=u/h*f,this.faceTo(l.x,l.z,1)}const a=i.floorY(this.pos.x,this.pos.z);this.pos.y<=a&&(this.pos.y=a,n.bodyFall(this.pos.clone()),t.shake(.25),this.setState("floor"),o==="fall"?this.stun=3.3:(this.stun=.5,this.lunge&&this.dist()<1.4&&(this.attack(16),n.scream(this.pos.clone().setY(1.4),{pitch:1.35,dur:.6}),this.atkCD=1.4)),this.lunge=!1),s&&this.stunPose(this.t),this.sync();return}if(this.stun>0){this.stun-=e,this.aimH=.4,s&&this.stunPose(this.t),this.pushPlayerApart(),this.sync();return}if(o==="floor"){const a=this.moveToward(t.player.pos,2.3,e);s&&this.poseUpright(this.t,a>0?1:0),this.stepT-=e,this.stepT<=0&&a>0&&(this.stepT=.42,n.footstep("wood",this.pos,.5),Math.random()<.3&&n.boneCrack(this.pos.clone().setY(1.5),1)),this.dist()<1.1&&this.atkCD<=0?(this.attack(16),n.scream(this.pos.clone().setY(1.4),{pitch:1.4,dur:.5}),this.climb()):this.stateT>4.5&&this.climb(),this.pushPlayerApart(),this.sync();return}if(o==="climb"){if(this.pos.y+=e*5,s&&this.stunPose(this.t),this.pos.y>=ua-.5){this.setCeiling(!0),this.pos.y=ua,n.skitter(this.pos.clone(),.5,.8);const a=t.player.pos,l=i.stalkerSpots.filter(c=>Math.hypot(c.x-a.x,c.z-a.z)>4.5&&i.floorY(c.x,c.z)===0);this.retreatTo=l[Math.floor(Math.random()*l.length)]||i.stalkerSpots[0],this.setState("ceilRetreat"),this.atkCD=3}this.sync();return}if(o==="flee"){this.onCeiling&&this.setCeiling(!1);const a=this.fleeTo||Es(15,0,7),l=this.moveToward(a,5.5,e);s&&this.pose(this.t,1),(Math.hypot(a.x-this.pos.x,a.z-this.pos.z)<.6||this.stateT>5)&&(this.show(!1),this.setState("hidden"),this.onFlee&&this.onFlee()),l&&Math.random()<e*6&&n.skitter(this.pos,.3,.5),this.sync();return}o==="chase"&&this.climb(),this.sync()}}climb(){this.setState("climb"),this.stun=0}}class N1 extends dh{constructor(e,t){const n=bi(t,{h:1.88,thin:.95,armK:1.25,fingerK:1.4,skin:t.paleSkin,top:t.shirt,bottom:t.pants,face:"father",sleeves:!0,hair:!0,hairLen:.14});super(e,n,{hp:3,radius:.35}),this.seen=!1,this.unseenT=0,this.creakT=0,this.headTurned=!1,this.idlePose()}idlePose(){const e=this.P;e.spine.rotation.x=.12,e.neck.rotation.x=.35,e.neck.rotation.z=.42,e.armL.rotation.set(.05,0,.06),e.armR.rotation.set(.05,0,-.06),e.foreL.rotation.set(-.08,0,0),e.foreR.rotation.set(-.1,0,0),e.legL.rotation.set(0,0,0),e.legR.rotation.set(0,0,0),e.shinL.rotation.set(0,0,0),e.shinR.rotation.set(0,0,0),e.head.rotation.y=this.headTurned?Math.PI:0}approachPose(e){const t=this.P;t.armL.rotation.set(-1.2*e,0,.1),t.armR.rotation.set(-1.3*e,0,-.1),t.foreL.rotation.set(-.2,0,0),t.foreR.rotation.set(-.3,0,0),t.neck.rotation.z=.42+e*.4}hurt(e){this.hp--,this.g.audio.boneCrack(this.chest().clone(),3),this.g.spawnBlood(e.point,e.face?e.face.normal:null),this.stun=.5,this.hp<=0&&(this.hp=this.maxHp,this.vanish())}flashed(){this.state==="hunt"&&this.dist()<9&&this.vanish()}vanish(){this.g.audio.whisper(this.chest().clone(),1.2,.8);const t=this.g.level.stalkerSpots,n=this.g.player.pos,i=t.filter(o=>Math.hypot(o.x-n.x,o.z-n.z)>7),s=i[Math.floor(Math.random()*i.length)]||t[0];this.place(s.x,this.g.level.floorY(s.x,s.z),s.z,Math.random()*6),this.relocated=1.5}update(e){if(!this.active)return;this.t+=e,this.stateT+=e,this.atkCD-=e;const t=this.g,n=t.audio;if(this.state==="idle"){this.sync();return}if(this.relocated>0&&(this.relocated-=e),this.stun>0){this.stun-=e,this.sync();return}this.seen=this.isSeen()||this.isSeen(Nc.copy(this.pos).setY(this.pos.y+1.75));const i=this.dist();if(this.state==="hunt"){if(this.seen)this.unseenT=0,Math.random()<e*.25&&(n.boneCrack(this.chest().clone().setY(this.pos.y+1.7),1),this.P.neck.rotation.z+=.15);else{this.unseenT+=e;const s=i>9?4.2:2.8;this.moveToward(t.player.pos,s,e),this.approachPose(pi.clamp(1-(i-1)/6,0,1)),this.creakT-=e,this.creakT<=0&&i<10&&(this.creakT=.55,n.footstep("wood",this.pos,.55),Math.random()<.35&&n.creak(this.pos,.5,.35,.7))}i<1.15&&this.atkCD<=0&&this.relocated<=0&&(this.attack(34),n.scream(this.chest().clone(),{pitch:.75,dur:.9,vol:1.2}),this.atkCD=2.5,setTimeout(()=>{this.state==="hunt"&&this.vanish()},350)),this.pushPlayerApart()}this.sync()}}class U1 extends dh{constructor(e,t){const n=bi(t,{h:3,thin:.7,armK:1.75,fingerK:2.6,skin:t.demonSkin,faceless:!0,longHead:1.9,longNeck:1.9,mouthMat:t.demonMouth,ribs:!0});super(e,n,{hp:999,radius:.55}),this.speed=1.4,this.stepT=0,this.growlT=3;let i=7;const s=()=>(i=(i*9301+49297)%233280)/233280,o=(a,l,c,u,h)=>{const f=new Ye;f.rotation.set(...h),a.add(f);const d=new oe(new kt(c*.55,c,l,6),t.horn);if(d.position.y=l/2,d.castShadow=!0,f.add(d),u>0)for(let m=0;m<2;m++){const v=new Ye;v.position.y=l,f.add(v),o(v,l*.7,c*.6,u-1,[(s()-.5)*1.2,s()*3,(m?1:-1)*(.3+s()*.5)])}};for(const a of[-1,1]){const l=new Ye;l.position.set(a*.05,.38,-.02),n.head.add(l),o(l,.22,.022,3,[-.3,0,a*.7])}}walkPose(e,t){const n=this.P,i=e*3.2;n.spine.rotation.x=.35+Math.sin(i*2)*.03,n.neck.rotation.x=.4,n.neck.rotation.z=Math.sin(e*.7)*.25,n.legL.rotation.x=Math.sin(i)*.45*t,n.legR.rotation.x=Math.sin(i+Math.PI)*.45*t,n.shinL.rotation.x=Math.max(0,-Math.sin(i))*.8*t,n.shinR.rotation.x=Math.max(0,Math.sin(i))*.8*t,n.armL.rotation.set(Math.sin(i+Math.PI)*.25*t-.2,0,.12),n.armR.rotation.set(Math.sin(i)*.25*t-.2,0,-.12),n.foreL.rotation.x=-.3,n.foreR.rotation.x=-.3,n.hips.position.y=.95*(3/1.7)+Math.abs(Math.sin(i))*.06,n.mouth.scale.y=3.2+Math.sin(e*2)*.6}emerge(e,t){this.show(!0),this.place(e,this.g.level.floorY(e,t)-3.2,t,0),this.setState("emerge"),this.g.audio.growl(Es(e,-2,t),4,1.4)}hurt(e){this.stun=Math.max(this.stun,.7),this.g.audio.growl(this.chest().clone(),.8,.8),this.g.spawnBlood(e.point,null,657930)}flashed(){this.state==="hunt"&&this.dist()<10&&(this.recoil=2.5,this.g.audio.scream(this.chest().clone().setY(this.pos.y+2.6),{pitch:.45,dur:1.6,vol:1.3}))}die(){this.setState("die"),this.g.audio.scream(this.chest().clone().setY(this.pos.y+2.5),{pitch:.35,dur:3.5,vol:1.6}),this.g.audio.growl(this.pos,4,1.5)}update(e){if(!this.active)return;this.t+=e,this.stateT+=e,this.atkCD-=e;const t=this.g,n=t.audio,i=t.level.floorY(this.pos.x,this.pos.z);if(this.state==="emerge"){this.pos.y=Math.min(i,i-3.2+this.stateT*1.1),this.walkPose(this.t*.3,.2),this.P.armL.rotation.x=-2.8+this.stateT*.5,this.P.armR.rotation.x=-2.9+this.stateT*.5,this.stateT>3.2&&(this.setState("hunt"),n.scream(this.chest().clone().setY(i+2.6),{pitch:.4,dur:2.2,vol:1.5})),this.sync();return}if(this.state==="die"){this.pos.y-=e*.9,this.P.spine.rotation.x+=e*.3,this.P.armL.rotation.x-=e,this.P.armR.rotation.x-=e*1.2,this.P.neck.rotation.z=Math.sin(this.t*30)*.5,this.stateT>4&&this.show(!1),this.sync();return}if(this.stun>0){this.stun-=e,this.P.spine.rotation.x=.7,this.P.neck.rotation.x=1,this.sync();return}if(this.recoil>0){this.recoil-=e;const s=t.player.pos,o=this.pos.x-s.x,a=this.pos.z-s.z,l=Math.hypot(o,a)||1,c=this.pos.x+o/l*1.6*e,u=this.pos.z+a/l*1.6*e;t.level.walkable(c,u)&&(this.pos.x=c,this.pos.z=u),this.P.armL.rotation.set(-2.4,0,.4),this.P.armR.rotation.set(-2.5,0,-.4),this.P.neck.rotation.x=-.6+Math.sin(this.t*40)*.2,this.sync();return}if(this.state==="hunt"){const s=this.moveToward(t.player.pos,this.speed,e);this.walkPose(this.t,s>0?1:0),this.stepT-=e*this.speed/1.4,this.stepT<=0&&(this.stepT=.98,n.heavyStep(this.pos,1),t.shake(.05)),this.growlT-=e,this.growlT<=0&&(this.growlT=3+Math.random()*3,n.growl(this.chest().clone().setY(this.pos.y+2.5),1.8,.9)),this.dist()<1.7&&this.atkCD<=0&&(this.attack(48),n.scream(this.chest().clone().setY(this.pos.y+2.5),{pitch:.5,dur:.9,vol:1.4}),this.atkCD=1.8,this.P.armR.rotation.x=-1.8),this.pushPlayerApart()}this.sync()}}function tf(r,e){if(e===rp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===wc||e===Lf){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===wc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class O1 extends Rr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new V1(t)}),this.register(function(t){return new H1(t)}),this.register(function(t){return new $1(t)}),this.register(function(t){return new J1(t)}),this.register(function(t){return new Q1(t)}),this.register(function(t){return new W1(t)}),this.register(function(t){return new X1(t)}),this.register(function(t){return new q1(t)}),this.register(function(t){return new Y1(t)}),this.register(function(t){return new z1(t)}),this.register(function(t){return new j1(t)}),this.register(function(t){return new G1(t)}),this.register(function(t){return new Z1(t)}),this.register(function(t){return new K1(t)}),this.register(function(t){return new k1(t)}),this.register(function(t){return new ey(t)}),this.register(function(t){return new ty(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=ro.extractUrlBase(e);o=ro.resolveURL(c,this.path)}else o=ro.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new ud(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===yd){try{o[xt.KHR_BINARY_GLTF]=new ny(e)}catch(h){i&&i(h);return}s=JSON.parse(o[xt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new my(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case xt.KHR_MATERIALS_UNLIT:o[h]=new B1;break;case xt.KHR_DRACO_MESH_COMPRESSION:o[h]=new iy(s,this.dracoLoader);break;case xt.KHR_TEXTURE_TRANSFORM:o[h]=new sy;break;case xt.KHR_MESH_QUANTIZATION:o[h]=new ry;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function F1(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const xt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class k1{constructor(e){this.parser=e,this.name=xt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Xe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Pn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new pd(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Un(u),c.distance=h;break;case"spot":c=new hh(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Fi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class B1{constructor(){this.name=xt.KHR_MATERIALS_UNLIT}getMaterialType(){return Si}extendParams(e,t,n){const i=[];e.color=new Xe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Pn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ot))}return Promise.all(i)}}class z1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class V1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:At}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new re(a,a)}return Promise.all(s)}}class H1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:At}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class G1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:At}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class W1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:At}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Xe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Pn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ot)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class X1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:At}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class q1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:At}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Xe().setRGB(a[0],a[1],a[2],Pn),Promise.all(s)}}class Y1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:At}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class j1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:At}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Xe().setRGB(a[0],a[1],a[2],Pn),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ot)),Promise.all(s)}}class K1{constructor(e){this.parser=e,this.name=xt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:At}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class Z1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:At}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class $1{constructor(e){this.parser=e,this.name=xt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class J1{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Q1{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ey{constructor(e){this.name=xt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class ty{constructor(e){this.name=xt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==$n.TRIANGLES&&c.mode!==$n.TRIANGLE_STRIP&&c.mode!==$n.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const m of h){const v=new Qe,g=new D,p=new gi,x=new D(1,1,1),M=new Yx(m.geometry,m.material,f);for(let _=0;_<f;_++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,_),l.SCALE&&x.fromBufferAttribute(l.SCALE,_),M.setMatrixAt(_,v.compose(g,p,x));for(const _ in l)if(_==="_COLOR_0"){const C=l[_];M.instanceColor=new Rc(C.array,C.itemSize,C.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&m.geometry.setAttribute(_,l[_]);Ut.prototype.copy.call(M,m),this.parser.assignFinalMaterial(M),d.push(M)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const yd="glTF",Xr=12,nf={JSON:1313821514,BIN:5130562};class ny{constructor(e){this.name=xt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Xr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==yd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Xr,s=new DataView(e,Xr);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===nf.JSON){const c=new Uint8Array(e,Xr+o,a);this.content=n.decode(c)}else if(l===nf.BIN){const c=Xr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class iy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=xt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Uc[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Uc[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=hr[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const m in d.attributes){const v=d.attributes[m],g=l[m];g!==void 0&&(v.normalized=g)}h(d)},a,c,Pn,f)})})}}class sy{constructor(){this.name=xt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ry{constructor(){this.name=xt.KHR_MESH_QUANTIZATION}}class Md extends Mo{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,m=e*c,v=m-c,g=-2*d+3*f,p=d-f,x=1-g,M=p-f+h;for(let _=0;_!==a;_++){const C=o[v+_+a],w=o[v+_+l]*u,E=o[m+_+a],P=o[m+_]*u;s[_]=x*C+M*w+g*E+p*P}return s}}const oy=new gi;class ay extends Md{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return oy.fromArray(s).normalize().toArray(s),s}}const $n={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},hr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},sf={9728:Zt,9729:Gn,9984:Mf,9985:da,9986:Kr,9987:Bi},rf={33071:Qi,33648:wa,10497:Xn},Nl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Uc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},$i={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ly={CUBICSPLINE:void 0,LINEAR:ho,STEP:co},Ul={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function cy(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Ce({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Hi})),r.DefaultMaterial}function xs(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Fi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function hy(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function uy(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function fy(r){let e;const t=r.extensions&&r.extensions[xt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ol(t.attributes):e=r.indices+":"+Ol(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Ol(r.targets[n]);return e}function Ol(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Oc(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function dy(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const py=new Qe;class my{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new F1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new fd(this.options.manager):this.textureLoader=new G_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ud(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return xs(s,a,i),Fi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[xt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(ro.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Nl[i.type],a=hr[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Gt(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Nl[i.type],c=hr[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let v,g;if(d&&d!==h){const p=Math.floor(f/d),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let M=t.cache.get(x);M||(v=new c(a,p*d,i.count*d/u),M=new jf(v,d/u),t.cache.add(x,M)),g=new fo(M,l,f%d/u,m)}else a===null?v=new c(i.count*l):v=new c(a,f,i.count*l),g=new Gt(v,l,m);if(i.sparse!==void 0){const p=Nl.SCALAR,x=hr[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,C=new x(o[1],M,i.sparse.count*p),w=new c(o[2],_,i.sparse.count*l);a!==null&&(g=new Gt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let E=0,P=C.length;E<P;E++){const y=C[E];if(g.setX(y,w[E*l]),l>=2&&g.setY(y,w[E*l+1]),l>=3&&g.setZ(y,w[E*l+2]),l>=4&&g.setW(y,w[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=sf[f.magFilter]||Gn,u.minFilter=sf[f.minFilter]||Bi,u.wrapS=rf[f.wrapS]||Xn,u.wrapT=rf[f.wrapT]||Xn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Zt&&u.minFilter!==Gn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let m=f;t.isImageBitmapLoader===!0&&(m=function(v){const g=new nn(v);g.needsUpdate=!0,f(g)}),t.load(ro.resolveURL(h,s.path),m,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Fi(h,o),h.userData.mimeType=o.mimeType||dy(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[xt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[xt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[xt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Jf,ni.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ih,ni.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ce}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[xt.KHR_MATERIALS_UNLIT]){const h=i[xt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Xe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Pn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Ot)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=xn);const u=s.alphaMode||Ul.OPAQUE;if(u===Ul.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Ul.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Si&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new re(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==Si&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Si){const h=s.emissiveFactor;a.emissive=new Xe().setRGB(h[0],h[1],h[2],Pn)}return s.emissiveTexture!==void 0&&o!==Si&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Ot)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),Fi(h,s),t.associations.set(h,{materials:e}),s.extensions&&xs(i,h,s),h})}createUniqueName(e){const t=Lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[xt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return of(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=fy(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[xt.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=of(new Vt,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?cy(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,m=u.length;d<m;d++){const v=u[d],g=o[d];let p;const x=c[d];if(g.mode===$n.TRIANGLES||g.mode===$n.TRIANGLE_STRIP||g.mode===$n.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new Zf(v,x):new oe(v,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===$n.TRIANGLE_STRIP?p.geometry=tf(p.geometry,Lf):g.mode===$n.TRIANGLE_FAN&&(p.geometry=tf(p.geometry,wc));else if(g.mode===$n.LINES)p=new $f(v,x);else if(g.mode===$n.LINE_STRIP)p=new sh(v,x);else if(g.mode===$n.LINE_LOOP)p=new jx(v,x);else if(g.mode===$n.POINTS)p=new Qf(v,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&uy(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Fi(p,s),g.extensions&&xs(i,p,g),t.assignFinalMaterial(p),h.push(p)}for(let d=0,m=h.length;d<m;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&xs(i,h[0],s),h[0];const f=new Ye;s.extensions&&xs(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,m=h.length;d<m;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new wn(pi.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ia(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Fi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new Qe;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Oa(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],m=i.samplers[d.sampler],v=d.target,g=v.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,x=i.parameters!==void 0?i.parameters[m.output]:m.output;v.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",x)),c.push(m),u.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],m=h[2],v=h[3],g=h[4],p=[];for(let x=0,M=f.length;x<M;x++){const _=f[x],C=d[x],w=m[x],E=v[x],P=g[x];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();const y=n._createAnimationTracks(_,C,w,E,P);if(y)for(let S=0;S<y.length;S++)p.push(y[S])}return new N_(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,py)});for(let d=0,m=h.length;d<m;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new nh:c.length>1?u=new Ye:c.length===1?u=c[0]:u=new Ut,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),Fi(u,s),s.extensions&&xs(n,u,s),s.matrix!==void 0){const h=new Qe;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Ye;n.name&&(s.name=i.createUniqueName(n.name)),Fi(s,n),n.extensions&&xs(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof ni||f instanceof nn)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];$i[s.path]===$i.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch($i[s.path]){case $i.weights:c=xr;break;case $i.rotation:c=_r;break;case $i.position:case $i.scale:c=yr;break;default:switch(n.itemSize){case 1:c=xr;break;case 2:case 3:default:c=yr;break}break}const u=i.interpolation!==void 0?ly[i.interpolation]:ho,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const m=new c(l[f]+"."+$i[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Oc(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof _r?ay:Md;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function gy(r,e,t){const n=e.attributes,i=new si;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),a.normalized){const u=Oc(hr[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new D,l=new D;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){const v=Oc(hr[f.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new vi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function of(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=Uc[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return Mt.workingColorSpace!==Pn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Mt.workingColorSpace}" not supported.`),Fi(r,e),gy(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?hy(r,e.targets,t):r})}const af="./assets/",vy=["decrepit_wallpaper","peeling_painted_wall","worn_plaster_wall","plastered_wall_03","long_white_tiles","interior_tiles","worn_tile_floor","terracotta_floor_tiles","old_wood_floor","wood_floor_worn","concrete_floor_worn_001","concrete_wall_003","brown_mud_leaves_01","weathered_planks","clay_roof_tiles","rough_pine_door","wood_cabinet_worn_long","dirty_carpet","damaged_plaster"],xy=["Sofa_01","Television_01","dining_table","dining_chair_02","old_bed_frame","ClassicNightstand_01","vintage_cabinet_01","power_box_01","lightbulb_01","wooden_bookshelf_worn","wooden_crate_01","Barrel_01","trashbag","ammo_box","hanging_picture_frame_01","dead_tree_trunk","dead_tree_trunk_02","plastic_monobloc_chair_01","rubber_boots","mantel_clock_01","drawer_cabinet","painted_wooden_cabinet","wooden_bowl_01","pot_enamel_01"],mn=(r,e)=>Array.from({length:e},(t,n)=>`${r}_0${n+1}`),_y={rainIn:["RAINInt_ForestCabinRain_L01"],rainOut:["RAINVege_ForestRain_L01"],room:["AMBHome_RoomTone_L01"],drone:["DSGNDron_DroneCreepy_02"],stepWood:mn("FEETHmn_ShoeWoodWalk",5),runWood:mn("FEETHmn_ShoeWoodRun",5),stepDirt:mn("FEETHmn_ShoeDirtWalk",5),stepConc:mn("FEETHmn_ShoeConcreteWalk",5),doorOpen:["DOORWood_FrontDoorOpen_01"],doorClose:["DOORWood_FrontDoorClose_01","DOORWood_OfficeDoorClose_01"],knob:["DOORHdwr_FrontDoorKnob_01"],lock:["DOORHdwr_FrontDoorLock_01"],knock:["DOORKnck_OfficeDoorKnock_01"],unlock:["MECHLock_DoorUnlockKey_01"],drawer:["DRWRWood_DrawerOpen_01"],switch:["MECHSwtch_SwitchSmallOn_01","MECHSwtch_SwitchSmallOn_02","MECHSwtch_SwitchSmallOff_01","MECHSwtch_SwitchSmallOff_02"],box:["METLHndl_ElectricBoxOpen_01"],keyDrop:mn("OBJKey_KeyDrop",2),pages:["PAPRHndl_BookPageTurns_01"],shells:mn("BLLTShel_ShellCasingConcrete",3),scream:["VOXScrm_FemaleScream_01","VOXFem_Female01DeathScream_01"],screamShort:["VOXFem_Female02DeathScream_01"],groanF:["VOXFem_GroanCreepy_01"],groanM:["VOXMale_GroanCreepy_01"],whisper:["VOXWhsp_WhispersCreepy_01"],whisperVerb:["VOXWhsp_WhispersCreepyReverb_01"],creak:mn("WOODFric_CreaksCreepy",2),creakVerb:mn("WOODFric_CreaksCreepyReverb",2),bones:mn("GOREBone_BonesBreaking",3),skull:mn("GOREBone_SkullCracking",2),squish:mn("GORESqsh_BloodSquishSlimy",2),impact:mn("DSGNImpt_ImpactCreepyReverb",3),strings:mn("MUSCStr_StringsCreepy",2),creature:mn("CREAMnstr_CreatureCreepy",3),creatureVerb:mn("CREAMnstr_CreatureCreepyReverb",3),chains:mn("CHAINMvmt_ChainsCreepy",2),clock:["CLOCKTick_ClockCreepy_01"],organ:["MUSCKeyd_PipeOrganCreepy_01"],scratch:mn("METLFric_ScratchCreepy",2),punch:["FGHTImpt_PunchHardest_01"],woodDrop:["WOODImpt_LargeWoodDrop_01"],glass:["GLASBrk_WindowPaneSmallBreak_01"],breathF:["HMNBrth_FemaleBreathing_01"]};async function yy(r,e){const t=new hd;let n=0,i=0;const s=()=>{i++,e&&e(i/Math.max(1,n))},o=new fd(t),a=new O1(t),l=Math.min(8,r.capabilities.getMaxAnisotropy()),c={tex:{},models:{},env:null,head:null,headMaps:{},sfxRaw:{}},u=window.__EMBED,h=v=>u&&u.files[v]||af+v,f=(v,g,p)=>u&&u.models[v]?a.parse(u.models[v],"",g,p):a.load(af+v,g,void 0,p),d=(v,g)=>(n++,new Promise(p=>o.load(v,x=>{x.colorSpace=g?Ot:ki,x.wrapS=x.wrapT=Xn,x.anisotropy=l,s(),p(x)},void 0,()=>{s(),p(null)}))),m=[];for(const v of vy)m.push(Promise.all([d(h(`tex/${v}/diff.jpg`),!0),d(h(`tex/${v}/nor_gl.jpg`),!1),d(h(`tex/${v}/rough.jpg`),!1)]).then(([g,p,x])=>{c.tex[v]={map:g,normalMap:p,roughnessMap:x}}));for(const v of xy)n++,m.push(new Promise(g=>f(`models/${v}/${v}.json`,p=>{p.scene.traverse(x=>{x.isMesh&&(x.castShadow=!0,x.receiveShadow=!0,x.material.map&&(x.material.map.anisotropy=l))}),c.models[v]=p.scene,s(),g()},p=>{console.warn("modelo",v,p),s(),g()})));n++,m.push(new Promise(v=>f("human/LeePerrySmith.json",g=>{g.scene.traverse(p=>{p.isMesh&&!c.head&&(c.head=p)}),s(),v()},()=>{s(),v()}))),m.push(d(h("human/head_col.jpg"),!0).then(v=>c.headMaps.map=v)),m.push(d(h("human/head_nor.jpg"),!1).then(v=>c.headMaps.normalMap=v)),m.push(d(h("human/head_spec.jpg"),!1).then(v=>c.headMaps.spec=v)),n++,m.push(d(h("hdr/night.jpg"),!0).then(v=>{if(!v)return;v.mapping=ba;const g=new Ec(r);c.env=g.fromEquirectangular(v).texture,v.dispose(),g.dispose()})),n++,m.push((async()=>{try{const g=await(await fetch(h("human/female02/body.json"))).json(),[p,x,M]=await Promise.all(["hair","face","body"].map(_=>d(h(`human/female02/${_}.jpg`),!0)));c.female={data:g,imgs:{hair:p&&p.image,face:x&&x.image,body:M&&M.image}}}catch(v){console.warn("corpo",v)}s()})());for(const[v,g]of Object.entries(_y)){c.sfxRaw[v]=[];for(const p of g)n++,m.push(fetch(h(`sfx/${p}.mp3`)).then(x=>x.ok?x.arrayBuffer():null).then(x=>{x&&c.sfxRaw[v].push(x),s()}).catch(()=>s()))}return await Promise.all(m),c}function My(r,e,t={}){const n=r.tex[e]||{},i=new Ce({map:n.map||null,normalMap:n.normalMap||null,roughnessMap:n.roughnessMap||null,roughness:t.rough??1,metalness:t.metal??0,color:t.color??16777215,envMapIntensity:t.env??.35});return i.normalMap&&i.normalScale.set(t.nscale??1,t.nscale??1),i}function Sy(r,e,t,n,i,s,o=0,a={}){const l=r.models[e];if(!l)return null;const c=l.clone(!0);a.scale&&c.scale.setScalar(a.scale),c.rotation.y=o,c.position.set(0,0,0),c.updateMatrixWorld(!0);const u=new si().setFromObject(c);return c.position.set(n,i-u.min.y,s),a.tint&&c.traverse(h=>{h.isMesh&&(h.material=h.material.clone(),h.material.color.multiply(new Xe(a.tint)))}),a.dirty&&c.traverse(h=>{h.isMesh&&(h.material=h.material.clone(),h.material.color.multiplyScalar(a.dirty))}),t.add(c),c.updateMatrixWorld(!0),c.userData.box=new si().setFromObject(c),c}const qr=new D;function Zn(r,e,t,n,i,s){const o=2*Math.PI*i/4,a=Math.max(s-2*i,0),l=Math.PI/4;qr.copy(e),qr[n]=0,qr.normalize();const c=.5*o/(o+a),u=1-qr.angleTo(r)/l;return Math.sign(qr[t])===1?u*c:a/(o+a)+c+c*(1-u)}class Qn extends Bt{constructor(e=1,t=1,n=1,i=2,s=.1){if(i=i*2+1,s=Math.min(e/2,t/2,n/2,s),super(1,1,1,i,i,i),i===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new D,l=new D,c=new D(e,t,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,d=u.length/6,m=new D,v=.5/i;for(let g=0,p=0;g<u.length;g+=3,p+=2)switch(a.fromArray(u,g),l.copy(a),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),u[g+0]=c.x*Math.sign(a.x)+l.x*s,u[g+1]=c.y*Math.sign(a.y)+l.y*s,u[g+2]=c.z*Math.sign(a.z)+l.z*s,h[g+0]=l.x,h[g+1]=l.y,h[g+2]=l.z,Math.floor(g/d)){case 0:m.set(1,0,0),f[p+0]=Zn(m,l,"z","y",s,n),f[p+1]=1-Zn(m,l,"y","z",s,t);break;case 1:m.set(-1,0,0),f[p+0]=1-Zn(m,l,"z","y",s,n),f[p+1]=1-Zn(m,l,"y","z",s,t);break;case 2:m.set(0,1,0),f[p+0]=1-Zn(m,l,"x","z",s,e),f[p+1]=Zn(m,l,"z","x",s,n);break;case 3:m.set(0,-1,0),f[p+0]=1-Zn(m,l,"x","z",s,e),f[p+1]=1-Zn(m,l,"z","x",s,n);break;case 4:m.set(0,0,1),f[p+0]=1-Zn(m,l,"x","y",s,e),f[p+1]=1-Zn(m,l,"y","x",s,t);break;case 5:m.set(0,0,-1),f[p+0]=Zn(m,l,"x","y",s,e),f[p+1]=1-Zn(m,l,"y","x",s,t);break}}}const An=(r=0,e=0,t=0)=>new D(r,e,t);function Ds(r,e,t,n=!0){const i=document.createElement("canvas");i.width=r,i.height=e,t(i.getContext("2d"),r,e);const s=new Gi(i);return n&&(s.colorSpace=Ot),s.anisotropy=8,s}function lf(r=3,e="#e6e0cf"){return Ds(512,512,(t,n,i)=>{t.fillStyle=e,t.fillRect(0,0,n,i);let s=r;const o=()=>(s=s*16807%2147483647)/2147483647;for(let a=0;a<60;a++){const l=t.createRadialGradient(o()*n,o()*i,1,o()*n,o()*i,20+o()*80);l.addColorStop(0,"rgba(120,100,60,0.12)"),l.addColorStop(1,"rgba(120,100,60,0)"),t.fillStyle=l,t.fillRect(0,0,n,i)}for(let a=0;a<26;a++){const l=o()*n,c=o()*i*.7,u=20+o()*120,h=t.createLinearGradient(0,c,0,c+u);h.addColorStop(0,"rgba(110,50,15,0.55)"),h.addColorStop(1,"rgba(110,50,15,0)"),t.fillStyle=h,t.fillRect(l,c,1+o()*3,u),t.fillStyle="rgba(90,40,12,0.6)",t.beginPath(),t.arc(l,c,1+o()*3,0,7),t.fill()}for(let a=0;a<2e3;a++)t.fillStyle=`rgba(60,50,30,${o()*.08})`,t.fillRect(o()*n,o()*i,1,1);for(let a=0;a<4;a++)t.fillStyle="rgba(80,0,0,0.5)",t.beginPath(),t.ellipse(n*.12+o()*30,i*.45+o()*80,5,9,o(),0,7),t.fill()})}function by(r){const e=new Ye,t=new At({color:13483934,roughness:.38,clearcoat:.5,clearcoatRoughness:.5,envMap:r,envMapIntensity:.6}),n=new Ce({color:1709844,roughness:.6}),i=new Ce({color:12105904,roughness:.25,metalness:.9,envMap:r}),s=new yo;s.moveTo(-.105,0),s.lineTo(.105,0),s.lineTo(.095,.05),s.lineTo(.055,.095),s.lineTo(-.075,.1),s.lineTo(-.1,.06),s.lineTo(-.105,0);const o=new ka(s,{depth:.19,bevelEnabled:!0,bevelThickness:.012,bevelSize:.01,bevelSegments:4,curveSegments:6});o.translate(0,0,-.095),o.rotateY(-Math.PI/2);const a=new oe(o,t);a.castShadow=a.receiveShadow=!0,e.add(a);const l=new Ye;l.position.set(0,.078,.072),l.rotation.x=-.83,e.add(l);const c=new oe(new kt(.047,.049,.006,32),new Ce({color:15525590,roughness:.5}));c.rotation.x=Math.PI/2,l.add(c);const u=Ds(256,256,(w,E,P)=>{w.fillStyle="#f0ead8",w.fillRect(0,0,E,P),w.fillStyle="#222",w.font="bold 22px Arial",w.textAlign="center",w.textBaseline="middle";for(let y=0;y<10;y++){const S=-Math.PI*.3+y*(Math.PI*1.5/9);w.fillText(String((y+1)%10),E/2+Math.cos(S)*92,P/2+Math.sin(S)*92)}}),h=new oe(new es(.046,32),new Ce({map:u,roughness:.5}));h.position.z=.0035,l.add(h);const f=new oe(new ah(.026,.046,40),new At({color:2762274,roughness:.3,clearcoat:.8,transparent:!0,opacity:.88}));f.position.z=.006,l.add(f);for(let w=0;w<10;w++){const E=-Math.PI*.3+w*(Math.PI*1.5/9),P=new oe(new es(.0075,16),new Ce({color:15788760}));P.position.set(Math.cos(E)*.036,-Math.sin(E)*.036,.0068),l.add(P)}const d=new oe(new Bt(.004,.012,.006),i);d.position.set(.04,-.03,.009),d.rotation.z=.6,l.add(d);const m=new oe(new es(.016,20),new Ce({color:16777215,roughness:.4}));m.position.z=.0072,l.add(m);for(const w of[-.068,.068]){const E=new oe(new Qn(.03,.03,.05,2,.008),t);E.position.set(w,.112,-.02),e.add(E);const P=new oe(new kt(.006,.006,.02,10),n);P.position.set(w,.125,-.02),e.add(P)}const v=new Ye;v.position.set(0,.145,-.02),e.add(v);const g=new ya([An(-.1,-.01,0),An(-.05,.012,0),An(.05,.012,0),An(.1,-.01,0)]),p=new oe(new so(g,24,.014,12),t);p.scale.set(1,1,1.25),v.add(p);const x=[An(0,0),An(.024,0),An(.03,.01),An(.032,.026),An(.028,.032),An(0,.034)].map(w=>new re(w.x,w.y));for(const w of[-1,1]){const E=new oe(new Ns(x,24),t);E.position.set(w*.1,-.012,0),E.rotation.x=Math.PI,v.add(E);const P=new oe(new es(.02,20),n);P.position.set(w*.1,-.047,0),P.rotation.x=Math.PI/2,v.add(P)}v.traverse(w=>{w.isMesh&&(w.castShadow=!0)});const M=[];for(let w=0;w<=400;w++){const E=w/400,P=E*Math.PI*2*26,y=An(-.1-E*.06,-.02-Math.sin(E*Math.PI)*.07,0-E*.02);y.x+=Math.cos(P)*.006,y.y+=Math.sin(P)*.006,M.push(y)}const _=new oe(new so(new ya(M),800,.0022,5),new Ce({color:12562835,roughness:.5}));v.add(_);const C=[An(0,.01,-.105),An(0,.005,-.2),An(.05,0,-.3),An(0,0,-.5)];return e.add(new oe(new so(new ya(C),20,.003,5),n)),e.userData.handset=v,e.userData.hsBase=v.position.clone(),e}function wy(r){const i=new At({map:lf(3,"#c8c2b0"),roughness:.32,clearcoat:.6,clearcoatRoughness:.35,envMap:r,envMapIntensity:.35}),s=new Ce({map:lf(9,"#8e8a7c"),roughness:.55,envMap:r,envMapIntensity:.15}),o=new Ce({color:13684944,roughness:.12,metalness:1,envMap:r,envMapIntensity:1}),a=new Ce({color:2762018,roughness:.8}),l=new Ye,c=.04,u=(_,C,w,E,P,y,S=i,R=.015)=>{const F=new oe(new Qn(_,C,w,3,R),S);return F.position.set(E,P,y),F.castShadow=F.receiveShadow=!0,l.add(F),F};u(.72,1.62,c,0,1.62/2,-.66/2+c/2,i,.02),u(c,1.62,.66,-.72/2+c/2,1.62/2,0,i,.03),u(c,1.62,.66,.72/2-c/2,1.62/2,0,i,.03),u(.72,c*1.5,.66,0,1.62-c*.75,0,i,.05),u(.72,.12,.66,0,.06,0,i,.02),u(.72-2*c,1.62-.2,.01,0,1.62/2+.03,-.66/2+c+.005,s,.004),u(.01,1.62-.2,.66-c,-.72/2+c+.005,1.62/2+.03,.02,s,.004),u(.01,1.62-.2,.66-c,.72/2-c-.005,1.62/2+.03,.02,s,.004),u(.72-2*c-.04,.22,.66-.12,0,1.62-.26,-.03,new Ce({color:11055284,roughness:.2,metalness:.7,envMap:r}),.01);const h=new Ce({color:10066329,roughness:.35,metalness:.8,envMap:r});for(const _ of[.42,.78,1.1]){for(let w=0;w<13;w++){const E=new oe(new kt(.003,.003,.56,5),h);E.rotation.x=Math.PI/2,E.position.set(-.72/2+c+.03+w*((.72-2*c-.06)/12),_,0),l.add(E)}const C=new oe(new Bt(.72-2*c-.02,.006,.006),h);C.position.set(0,_,(.66-.1)/2),l.add(C)}u(.72-2*c-.04,.2,.66-.12,0,.24,-.02,new At({color:13623520,roughness:.1,transparent:!0,opacity:.35,transmission:.2}),.01);const f=new Ye;f.position.set(-.72/2,0,.66/2),l.add(f);const d=new oe(new Qn(.72,1.62-.12,.07,3,.03),i);d.position.set(.72/2,.12+(1.62-.12)/2,.035),d.castShadow=!0,f.add(d);const m=new oe(new Bt(.72-.06,1.62-.2,.012),a);m.position.set(.72/2,.12+(1.62-.12)/2,-.004),f.add(m);const v=new oe(new Qn(.72-.08,1.62-.24,.03,2,.01),s);v.position.set(.72/2,.12+(1.62-.12)/2,-.02),f.add(v);for(const _ of[.5,.85,1.2]){const C=new oe(new Bt(.58,.09,.06),s);C.position.set(.72/2,_,-.06),f.add(C)}const g=new At({color:3820074,roughness:.05,transmission:.6,transparent:!0,opacity:.7,envMap:r});for(let _=0;_<3;_++){const C=new oe(new kt(.028,.03,.22,12),g);C.position.set(.16+_*.15,.97,-.06),f.add(C)}const p=new oe(new Ts(.012,.22,4,10),o);p.position.set(.72-.06,1,.1),f.add(p);for(const _ of[.88,1.12]){const C=new oe(new kt(.01,.012,.04,8),o);C.rotation.x=Math.PI/2,C.position.set(.72-.06,_,.08),f.add(C)}const x=new oe(new ii(.16,.035),new Ce({map:Ds(256,56,(_,C,w)=>{_.fillStyle="#b8b8b0",_.fillRect(0,0,C,w),_.fillStyle="#4a1010",_.font="italic bold 34px Georgia",_.textAlign="center",_.fillText("Gelomatic",C/2,40)}),metalness:.8,roughness:.3,envMap:r}));x.position.set(.72/2,1.42,.072),f.add(x);const M=new Un(15266047,0,1.6,2);return M.position.set(0,1.62-.42,.05),l.add(M),{group:l,pivot:f,bulb:M,W:.72,D:.66,H:1.62}}function Ty(r){const e=new Ye,t=new At({map:Ey(),color:15921902,roughness:.32,metalness:.15,clearcoat:1,clearcoatRoughness:.08,envMap:r,envMapIntensity:1.2}),n=new Ce({color:1118740,roughness:.55,envMap:r,envMapIntensity:.4}),i=new At({color:658704,roughness:.03,metalness:.2,clearcoat:1,envMap:r,envMapIntensity:1.6}),s=new Ce({color:13421772,roughness:.15,metalness:1,envMap:r}),o=3.9,a=1.64,l=new yo,c=.33,u=1.25,h=-1.22;l.moveTo(-o/2,.3),l.lineTo(h-c-.05,.3),l.absarc(h,.3,c+.05,Math.PI,0,!0),l.lineTo(u-c-.05,.3),l.absarc(u,.3,c+.05,Math.PI,0,!0),l.lineTo(o/2-.02,.3),l.bezierCurveTo(o/2+.04,.42,o/2+.05,.62,o/2-.02,.72),l.bezierCurveTo(1.6,.78,1.1,.84,.75,.86),l.lineTo(.05,1.33),l.bezierCurveTo(-.3,1.38,-1.05,1.38,-1.4,1.32),l.bezierCurveTo(-1.7,1.15,-1.9,.98,-o/2+.02,.9),l.bezierCurveTo(-o/2-.03,.6,-o/2-.02,.4,-o/2,.3);const f=new ka(l,{depth:a-.12,bevelEnabled:!0,bevelThickness:.06,bevelSize:.06,bevelSegments:5,curveSegments:24});f.translate(0,0,-1.52/2),f.rotateY(-Math.PI/2);const d=f.attributes.position;for(let O=0;O<d.count;O++){const V=d.getY(O);V>.86&&d.setX(O,d.getX(O)*(1-(V-.86)*.32))}f.computeVertexNormals();const m=new oe(f,t);m.castShadow=m.receiveShadow=!0,e.add(m);const v=f.clone(),g=v.attributes.position;for(let O=0;O<g.count;O++)g.getY(O)<.9&&g.setY(O,.9),g.setX(O,g.getX(O)*1.006);v.computeVertexNormals();const p=new oe(v,i);p.scale.set(1,1,1),p.position.y=.005,e.add(p);for(const O of[0,-.75])for(const V of[-1,1]){const G=new oe(new Bt(.02,.42,.07),t);G.position.set(V*.73,1.12,O-.1),G.rotation.z=V*.16,e.add(G)}for(const O of[o/2+.02,-o/2-.02]){const V=new oe(new Qn(a+.04,.16,.12,3,.04),n);V.position.set(0,.36,O),e.add(V)}const x=new oe(new ii(.8,.1),new Ce({map:Ds(128,16,(O,V,G)=>{O.fillStyle="#111",O.fillRect(0,0,V,G),O.fillStyle="#333";for(let j=0;j<V;j+=6)O.fillRect(j,0,3,G)}),roughness:.6}));x.position.set(0,.6,o/2+.07),e.add(x);const M=new Ce({color:16777215,emissive:16773840,emissiveIntensity:4,roughness:.1}),_=new Ce({color:4194304,emissive:16715776,emissiveIntensity:1.2,roughness:.2});for(const O of[-.58,.58]){const V=new oe(new Qn(.36,.13,.05,2,.02),M);V.position.set(O,.64,o/2+.05),e.add(V);const G=new oe(new Qn(.14,.26,.05,2,.02),_);G.position.set(O*1.18,.72,-o/2-.02),e.add(G)}const C=new Ce({color:1381653,roughness:.92}),w=new Ce({color:9079434,roughness:.35,metalness:.9,envMap:r});for(const[O,V]of[[-.72,u],[.72,u],[-.72,h],[.72,h]]){const G=new Ye;G.position.set(O,c,V),e.add(G);const j=new oe(new ss(c-.08,.085,12,32),C);j.rotation.y=Math.PI/2,j.scale.set(1,1,1.4),j.castShadow=!0,G.add(j);const W=new oe(new kt(c-.12,c-.12,.18,24),w);W.rotation.z=Math.PI/2,G.add(W);for(let J=0;J<5;J++){const le=new oe(new Bt(.02,.14,.03),n);le.position.x=Math.sign(O)*.095,le.rotation.x=J*Math.PI*2/5,le.translateY(.07),G.add(le)}}for(const O of[-1,1]){const V=new oe(new Qn(.06,.09,.14,2,.02),n);V.position.set(O*.86,1,.55),e.add(V);for(const G of[.05,-.85]){const j=new oe(new Qn(.02,.025,.12,2,.008),s);j.position.set(O*.81,.9,G),e.add(j)}}const E=new Ye;E.position.set(0,1.4,-.45),e.add(E);const P=new oe(new Qn(1.15,.1,.26,3,.04),n);E.add(P);const y=new At({color:5242880,emissive:16714240,emissiveIntensity:0,roughness:.15,transmission:.3,clearcoat:1}),S=new At({color:64,emissive:12543,emissiveIntensity:0,roughness:.15,transmission:.3,clearcoat:1}),R=new oe(new Qn(.52,.11,.24,3,.05),y);R.position.set(-.29,.04,0),E.add(R);const F=new oe(new Qn(.52,.11,.24,3,.05),S);F.position.set(.29,.04,0),E.add(F);const B=new oe(new kt(.003,.004,.6,5),n);return B.position.set(.4,1.65,-1.3),B.rotation.x=-.15,e.add(B),e.traverse(O=>{O.isMesh&&(O.castShadow=!0,O.receiveShadow=!0)}),{group:e,lensR:y,lensB:S,hlMat:M}}function Ey(){return Ds(1024,256,(r,e,t)=>{r.fillStyle="#f4f4f0",r.fillRect(0,0,e,t),r.fillStyle="#16324f",r.fillRect(0,t*.58,e,t*.1),r.fillStyle="#a01818",r.fillRect(0,t*.68,e,t*.025);let n=7;const i=()=>(n=n*16807%2147483647)/2147483647;for(let s=0;s<300;s++)r.fillStyle=`rgba(90,70,40,${i()*.1})`,r.fillRect(i()*e,t*.75+i()*t*.25,2+i()*8,1+i()*3)})}function Ay(r,e){const t=Ds(1024,160,(s,o,a)=>{s.clearRect(0,0,o,a),s.fillStyle="#16324f",s.font="bold 86px Arial Black, Arial",s.textAlign="center",s.textBaseline="middle",s.fillText("POLÍCIA MILITAR",o/2,a/2+4)}),n=Ds(256,128,(s,o,a)=>{s.fillStyle="#16324f",s.font="bold 90px Arial",s.textAlign="center",s.textBaseline="middle",s.fillText("2207",o/2,a/2)}),i=(s,o,a)=>new oe(new ii(o,a),new At({map:s,transparent:!0,roughness:.3,clearcoat:1,envMap:e,polygonOffset:!0,polygonOffsetFactor:-2}));for(const s of[-1,1]){const o=i(t,1.5,.23);o.position.set(s*.885,.7,-.1),o.rotation.y=s*Math.PI/2,r.add(o);const a=i(n,.4,.2);a.position.set(s*.86,1.18,-1.15),a.rotation.y=s*Math.PI/2,r.add(a)}}const Nn=2.7,Yr=.15,Tt=(r=0,e=0,t=0)=>new D(r,e,t);function Et(r,e={}){const t=new Ce({map:r,roughness:e.rough??.88,metalness:e.metal??0,color:e.color??16777215});return e.bump!==!1&&r&&(t.bumpMap=r,t.bumpScale=e.bump??1.5),e.roughMap&&(t.roughnessMap=e.roughMap),t}function cf(r,e,t,n,i){const s=r.attributes.uv,o=[[n,t],[n,t],[e,n],[e,n],[e,t],[e,t]];for(let a=0;a<6;a++)for(let l=0;l<4;l++){const c=a*4+l;s.setXY(c,s.getX(c)*o[a][0]/i,s.getY(c)*o[a][1]/i)}s.needsUpdate=!0}function Ry(r){const e=r.scene,t={colliders:[],occluders:[],bounce:[],interact:[],doors:[],bulbs:[],reveal:[],props:{},updaters:[],stalkerSpots:[Tt(1,0,7),Tt(15,0,6.8),Tt(1,0,11),Tt(14.5,0,5),Tt(9,0,7),Tt(4.5,0,1)]},n=new Ye;e.add(n);const i=(A,U,K,ee,te,Me,_e)=>{const pe={x0:A,x1:U,y0:K,y1:ee,z0:te,z1:Me,on:!0,tag:_e};return t.colliders.push(pe),pe},s={wpSala:Et(aa(3,[150,138,102])),wpHall:Et(aa(5,[138,118,92])),wpCasal:Et(aa(8,[118,134,126])),wpKid:Et(aa(9,[176,146,146])),tileK:Et(la(7,[188,198,182],8),{rough:.35,bump:2}),tileB:Et(la(12,[170,196,202],10),{rough:.3,bump:2}),floorK:Et(la(15,[138,62,48],6),{rough:.5,bump:2}),floorB:Et(la(16,[200,200,196],12),{rough:.35,bump:2}),wood:Et(Ss(5),{rough:.6,bump:2}),porch:Et(Ss(6),{rough:.8,color:9079434}),ext:Et(ca(14),{color:13286808,rough:.95,bump:.6}),ceil:Et(ca(13),{rough:.95}),conc:Et(Wr(11),{rough:.92,bump:3}),darkWood:Et(Ss(9),{color:6965813,rough:.6}),paintWood:Et(Ss(10),{color:14209216,rough:.7}),metal:new Ce({color:7829367,roughness:.45,metalness:.7}),rust:Et(Wr(31),{color:9067066,rough:.8,metal:.4}),white:Et(ca(22),{color:15131352,rough:.4}),fabric:Et(vn(40,[110,80,60],.15)),blanket:Et(vn(41,[120,60,70],.9)),sheet:Et(vn(42,[205,200,190],1)),redCloth:Et(vn(43,[120,10,12],0)),black:new Ce({color:657930,roughness:.6}),plastic:new Ce({color:1973790,roughness:.35}),food:new Ce({color:2759694,roughness:.9}),bone:new Ce({color:14209208,roughness:.5}),bloodPool:new Ce({color:2752512,roughness:.08,metalness:.1}),candle:new Ce({color:15261640,roughness:.6}),glass:new Ce({map:_1(),transparent:!0,roughness:.1,metalness:.3,depthWrite:!1}),car:new Ce({color:14606046,roughness:.25,metalness:.4}),carDark:new Ce({color:1119256,roughness:.2,metalness:.6}),tire:new Ce({color:1118481,roughness:.9}),bark:Et(Wr(51),{color:4864556,rough:1})},o=g1(17);s.mud=Et(o.map,{roughMap:o.rough,rough:1,bump:3}),t.M=s;const a=r.assets,l=a&&a.env,c=(A,U,K,ee={})=>{if(!a||!a.tex[A]||!a.tex[A].map)return null;const te=My(a,A,ee),Me=K/U;for(const _e of["map","normalMap","roughnessMap"])te[_e]&&(te[_e]=te[_e].clone(),te[_e].repeat.set(Me,Me),te[_e].needsUpdate=!0);return te},u=(A,U)=>{U&&(s[A]=U)};u("wpSala",c("decrepit_wallpaper",1.7,1.2,{color:14866108})),u("wpHall",c("decrepit_wallpaper",1.7,1.2,{color:13154464})),u("wpCasal",c("peeling_painted_wall",2,1.2,{color:12898500})),u("wpKid",c("plastered_wall_03",2,1.2,{color:15779008})),u("tileK",c("long_white_tiles",1,1.2,{env:.5,color:14210244})),u("tileB",c("interior_tiles",1.3,1.2,{env:.5,color:13156520})),u("floorK",c("terracotta_floor_tiles",1.8,1.6,{env:.4})),u("floorB",c("worn_tile_floor",1.3,1.2,{env:.5})),u("wood",c("old_wood_floor",2.4,2.2,{env:.45})),u("porch",c("weathered_planks",2.2,2,{color:11051152})),u("ext",c("worn_plaster_wall",2.6,1.2,{color:14208176})),u("ceil",c("damaged_plaster",2.5,2,{color:14210248})),u("conc",c("concrete_wall_003",2.5,1.5,{})),s.concFloor=c("concrete_floor_worn_001",2.5,2.5,{})||s.conc,u("darkWood",c("wood_cabinet_worn_long",1,1.2,{color:10518632})),s.cabinet=c("wood_cabinet_worn_long",1,1.2,{color:14998731})||s.white,s.door=c("rough_pine_door",1,1,{color:11573894}),u("mud",c("brown_mud_leaves_01",3.2,5,{rough:.7,env:.6})),s.roof=c("clay_roof_tiles",2,2,{color:10128e3}),s.carpet=c("dirty_carpet",1.4,1.3,{color:10119770}),s.trim=s.darkWood,s.curtain=new Ce({map:vn(52,[150,128,100],.25),roughness:.95,side:xn,color:13154464}),s.shade=new Ce({map:vn(53,[190,170,130],.15),roughness:.9,side:xn,emissive:0}),s.ceramic=new At({map:ca(23),color:15789798,roughness:.15,clearcoat:.8,clearcoatRoughness:.2,envMap:l,envMapIntensity:.6});const h=(A,U,K,ee,te=0,Me={})=>{const _e=a?Sy(a,A,n,U,K,ee,te,Me):null;if(_e&&Me.col){const pe=_e.userData.box;i(pe.min.x,pe.max.x,pe.min.y,pe.max.y,pe.min.z,pe.max.z)}return _e};function f(A,U,K,ee,te,Me,_e,pe={}){const st=new Bt(A,U,K);cf(st,A,U,K,pe.tile??1.2);const $e=new oe(st,ee);if($e.position.set(te,Me+U/2,_e),pe.ry&&($e.rotation.y=pe.ry),$e.castShadow=pe.cast??!0,$e.receiveShadow=!0,(pe.parent||n).add($e),pe.col)if(pe.ry){const ct=Math.abs(Math.cos(pe.ry)),yt=Math.abs(Math.sin(pe.ry)),je=A*ct+K*yt,It=A*yt+K*ct;i(te-je/2,te+je/2,Me,Me+U,_e-It/2,_e+It/2)}else i(te-A/2,te+A/2,Me,Me+U,_e-K/2,_e+K/2);return pe.occ!==!1&&pe.col&&t.occluders.push($e),$e}function d(A,U,K,ee,te,Me,_e,pe=16,st={}){const $e=new oe(new kt(A,U,K,pe),ee);return $e.position.set(te,Me+K/2,_e),$e.castShadow=st.cast??!0,$e.receiveShadow=!0,(st.parent||n).add($e),$e}function m(A,U,K,ee,te,Me,_e=0,pe=0,st=1.2,$e={}){const ct=new ii(A,U);if(st){const je=ct.attributes.uv;for(let It=0;It<je.count;It++)je.setXY(It,je.getX(It)*A/st,je.getY(It)*U/st)}const yt=new oe(ct,K);return yt.position.set(ee,te,Me),yt.rotation.set(_e,pe,0),yt.receiveShadow=!0,yt.castShadow=$e.cast??!1,($e.parent||n).add(yt),st&&A*U>3&&t.bounce.push(yt),yt}function v(A,U,K,ee,te,Me,_e,pe,st={}){const $e=new Ce({map:A,transparent:!0,depthWrite:!1,roughness:st.rough??.25,polygonOffset:!0,polygonOffsetFactor:-2,opacity:st.opacity??1}),ct=m(U,K,$e,ee,te,Me,_e,pe,0,st);return ct.renderOrder=2,st.rz&&(ct.rotation.z=st.rz),ct}const g=(A,U,K,ee,te=.006,Me=0,_e)=>v(A,U,U,K,te,ee,-Math.PI/2,0,{rz:Me,..._e});function p(A,U,K,ee,te=[],Me,_e,pe=0,st=Nn,$e={}){const ct=[];let yt=K;const je=[...te].sort((Fe,Ht)=>Fe.a-Ht.a);for(const Fe of je)Fe.a>yt&&ct.push({a:yt,b:Fe.a,lo:0,hi:st}),Fe.bottom>0&&ct.push({a:Fe.a,b:Fe.b,lo:0,hi:Fe.bottom}),Fe.top<st&&ct.push({a:Fe.a,b:Fe.b,lo:Fe.top,hi:st}),yt=Fe.b;yt<ee&&ct.push({a:yt,b:ee,lo:0,hi:st});const It=_e||Me,In=A==="x"?[It,It,Me,Me,Me,It]:[Me,It,Me,Me,Me,Me];for(const Fe of ct){const Ht=Fe.b-Fe.a,Jt=(Fe.a+Fe.b)/2,jt=Fe.hi-Fe.lo,fn=A==="x"?Ht:Yr,qt=A==="x"?Yr:Ht,dn=new Bt(fn,jt,qt);cf(dn,fn,jt,qt,$e.tile??1.2);const Yt=dn.attributes.uv;for(let ln=0;ln<Yt.count;ln++)Yt.setY(ln,Yt.getY(ln)+(pe+Fe.lo)/($e.tile??1.2));const Qt=new oe(dn,In),Nt=A==="x"?Jt:U,pn=A==="x"?U:Jt;if(Qt.position.set(Nt,pe+Fe.lo+jt/2,pn),Qt.castShadow=!0,Qt.receiveShadow=!0,n.add(Qt),pe===0&&Fe.lo===0&&!$e.noTrim)for(const[ln,Yn]of[[1,In[A==="x"?4:0]],[-1,In[A==="x"?5:1]]]){if(Yn===s.ext||Yn===s.conc)continue;const kn=A==="x"?Ht:.016,jn=A==="x"?.016:Ht,Os=new oe(new Bt(kn,.095,jn),s.trim);Os.position.set(A==="x"?Nt:Nt+ln*(Yr/2+.008),.048,A==="x"?pn+ln*(Yr/2+.008):pn),Os.receiveShadow=!0,n.add(Os)}i(Nt-fn/2,Nt+fn/2,pe+Fe.lo,pe+Fe.hi,pn-qt/2,pn+qt/2),t.occluders.push(Qt)}for(const Fe of je)if(Fe.window){const Ht=(Fe.a+Fe.b)/2,Jt=Fe.b-Fe.a,jt=Fe.top-Fe.bottom,fn=A==="x"?Ht:U,qt=A==="x"?U:Ht,dn=m(Jt,jt,s.glass,fn,pe+Fe.bottom+jt/2,qt,0,A==="x"?0:Math.PI/2,0);dn.renderOrder=3,dn.receiveShadow=!1;const Yt=.05,Qt=(Nt,pn,ln,Yn,kn,jn)=>f(Nt,pn,ln,s.paintWood,Yn,kn,jn,{tile:.6});if(A==="x"?(Qt(Jt+.1,Yt,.2,Ht,pe+Fe.bottom-Yt,U),Qt(Jt+.1,Yt,.2,Ht,pe+Fe.top,U),Qt(Yt,jt,.2,Fe.a,pe+Fe.bottom,U),Qt(Yt,jt,.2,Fe.b,pe+Fe.bottom,U),Qt(Yt*.6,jt,.06,Ht,pe+Fe.bottom,U),i(Fe.a,Fe.b,pe,pe+Fe.top,U-.1,U+.1)):(Qt(.2,Yt,Jt+.1,U,pe+Fe.bottom-Yt,Ht),Qt(.2,Yt,Jt+.1,U,pe+Fe.top,Ht),Qt(.2,jt,Yt,U,pe+Fe.bottom,Fe.a),Qt(.2,jt,Yt,U,pe+Fe.bottom,Fe.b),Qt(.06,jt,Yt*.6,U,pe+Fe.bottom,Ht),i(U-.1,U+.1,pe,pe+Fe.top,Fe.a,Fe.b)),t.windows=t.windows||[],t.windows.push(dn),pe===0)for(const[Nt,pn]of[[1,In[A==="x"?4:0]],[-1,In[A==="x"?5:1]]]){if(pn===s.ext)continue;const ln=Yr/2+.07,Yn=pe+Fe.top+.14,kn=Fe.top-Fe.bottom+.45,jn=new oe(new kt(.012,.012,Jt+.5,8),s.metal);jn.rotation.z=Math.PI/2,A==="z"&&jn.rotation.set(Math.PI/2,0,0),jn.position.set(A==="x"?Ht:U+Nt*ln,Yn+.02,A==="x"?U+Nt*ln:Ht),n.add(jn);for(const Os of[-1,1]){const Xa=Jt*(.32+Math.random()*.12),qa=new ii(Xa,kn,18,6),wo=qa.attributes.position;for(let Dr=0;Dr<wo.count;Dr++){const Sh=wo.getX(Dr)/Xa+.5,Fd=wo.getY(Dr)/kn+.5;wo.setZ(Dr,Math.sin(Sh*Math.PI*7)*.035+Math.sin(Sh*23)*.006-(1-Fd)*.02*Os)}qa.computeVertexNormals();const cs=new oe(qa,s.curtain),Mh=Ht+Os*(Jt/2+.25-Xa/2);A==="x"?(cs.position.set(Mh,Yn-kn/2,U+Nt*ln),cs.rotation.y=Nt>0?0:Math.PI):(cs.position.set(U+Nt*ln,Yn-kn/2,Mh),cs.rotation.y=Nt>0?Math.PI/2:-Math.PI/2),cs.castShadow=!0,cs.receiveShadow=!0,n.add(cs)}}}}const x=(A,U)=>({a:A,b:U,bottom:.95,top:2.1,window:!0}),M=(A,U)=>({a:A,b:U,bottom:0,top:2.1});function _(A,U,K,ee,te={}){const Me=ee-K,_e=new Ye;A==="x"?_e.position.set(K,0,U):_e.position.set(U,0,K);const pe=new oe(new Bt(A==="x"?Me-.02:.045,2.08,A==="x"?.045:Me-.02),te.mat||s.door||s.darkWood);A==="x"?pe.position.set(Me/2,1.04,0):pe.position.set(0,1.04,Me/2),pe.castShadow=!0,pe.receiveShadow=!0,_e.add(pe);const st=new oe(new Vn(.03,10,8),s.metal);A==="x"?st.position.set(Me-.1,1,.05):st.position.set(.05,1,Me-.1),_e.add(st);const $e=st.clone();A==="x"?$e.position.z=-.05:$e.position.x=-.05,_e.add($e);const ct=(It,In,Fe,Ht,Jt,jt)=>f(It,In,Fe,s.paintWood,Ht,Jt,jt,{tile:.6});A==="x"?(ct(.06,2.12,.2,K-.03,0,U),ct(.06,2.12,.2,ee+.03,0,U),ct(Me+.12,.06,.2,(K+ee)/2,2.1,U)):(ct(.2,2.12,.06,U,0,K-.03),ct(.2,2.12,.06,U,0,ee+.03),ct(.2,.06,Me+.12,U,2.1,(K+ee)/2)),n.add(_e);const yt=A==="x"?i(K,ee,0,2.1,U-.06,U+.06,"door"):i(U-.06,U+.06,0,2.1,K,ee,"door"),je={pivot:_e,panel:pe,col:yt,axis:A,open:te.open??0,target:te.open??0,dir:te.dir??1,locked:!!te.locked,name:te.name||"Porta",pos:A==="x"?Tt((K+ee)/2,1.1,U):Tt(U,1.1,(K+ee)/2),jammed:!1};return je.set=(It,In=!0)=>{je.target=It,In&&r.audio.ctx&&r.audio.doorOpen(je.pos)},je.slam=()=>{je.target=0,je.open=Math.min(je.open,.05),r.audio.doorSlam(je.pos),r.shake(.15)},t.doors.push(je),t.interact.push({pos:je.pos,door:je,get label(){return je.locked?je.lockLabel||"Trancada":je.target>.5?"Fechar":"Abrir"},use:()=>{if(je.locked){r.audio.latch(je.pos),r.audio.creak(je.pos,.2,.3),je.onLocked&&je.onLocked();return}je.set(je.target>.5?0:1)}}),je}function C(A,U,K,ee={}){const te={pos:A,label:U,use:K,enabled:ee.enabled??!0,range:ee.range??1.9,hold:ee.hold};return t.interact.push(te),te}function w(A,U,K,ee={}){const te=ee.y??Nn,Me=new oe(new kt(.006,.006,.4,4),s.black);Me.position.set(A,te-.2,U),n.add(Me),d(.025,.03,.06,s.black,A,te-.46,U,8,{cast:!1});const _e=new At({color:9076848,emissive:16761994,emissiveIntensity:0,roughness:.05,transmission:.4,transparent:!0,opacity:.85,envMap:l}),pe=[[.012,0],[.014,.02],[.03,.05],[.034,.075],[.028,.1],[0,.112]].map(([je,It])=>new re(je,-It)),st=new oe(new Ns(pe,16),_e);st.position.set(A,te-.46,U),n.add(st);const $e=new oe(new ss(.008,.0012,4,12,Math.PI),new Si({color:3348992}));$e.position.set(A,te-.535,U),n.add($e);const ct=new Un(16763024,0,ee.dist??7,2);if(ct.position.set(A,te-.55,U),n.add(ct),!ee.noShade){const je=new oe(new kt(.09,.2,.2,20,1,!0),s.shade.clone());je.position.set(A,te-.52,U),je.castShadow=!1,n.add(je),_e.userData.shade=je}const yt={light:ct,mat:_e,base:(ee.power??7)*2.6,room:K,flicker:0,dead:!1,pos:Tt(A,te-.5,U)};return t.bulbs.push(yt),yt}const E=(A,U,K,ee)=>m(U-A,ee-K,s.mud,(A+U)/2,-.01,(K+ee)/2,-Math.PI/2,0,5);E(-45,45,-45,0),E(-45,0,0,40),E(0,45,12,40),E(16,45,0,6),E(16,45,8,12),E(20,45,6,8),i(-3.2,-3,-2,3,-16.5,.2),i(19,19.2,-2,3,-16.5,.2),i(-3.2,19.2,-2,3,-16.6,-16.4),i(-3.2,0,-2,3,-.1,.1),i(16,19.2,-2,3,-.1,.1);const P=(A,U)=>f(.1,1.2,.1,s.bark,A,0,U,{tile:.5});for(let A=-16.5;A<=0;A+=2)P(-3.1,A),P(19.1,A);for(let A=-3;A<=19;A+=2)(A<5||A>9)&&P(A,-16.5);f(.04,.08,16.5,s.bark,-3.1,.9,-8.25,{tile:.5}),f(.04,.08,16.5,s.bark,19.1,.9,-8.25,{tile:.5}),f(.04,.08,16.5,s.bark,-3.1,.45,-8.25,{tile:.5}),f(.04,.08,16.5,s.bark,19.1,.45,-8.25,{tile:.5}),f(8,.08,.04,s.bark,1,.9,-16.5,{tile:.5}),f(10,.08,.04,s.bark,14,.9,-16.5,{tile:.5});function y(A,U,K,ee){let te=ee;const Me=()=>(te=(te*9301+49297)%233280)/233280,_e=(pe,st,$e,ct,yt)=>{const je=pe.clone().addScaledVector(st,$e),It=new oe(new kt(ct*.7,ct,$e,6),s.bark);if(It.position.copy(pe).lerp(je,.5),It.quaternion.setFromUnitVectors(Tt(0,1,0),st.clone().normalize()),It.castShadow=!0,n.add(It),yt>0)for(let In=0;In<3;In++){const Fe=st.clone().add(Tt((Me()-.5)*1.4,Me()*.5,(Me()-.5)*1.4)).normalize();_e(je,Fe,$e*(.55+Me()*.2),ct*.6,yt-1)}};_e(Tt(A,0,U),Tt(0,1,0),K*.4,.18,4)}h("dead_tree_trunk",-1.6,0,-7.5,.7),h("dead_tree_trunk_02",15.8,0,-13.2,2.2),h("dead_tree_trunk",13.5,0,-4.2,-.4),y(-7,-6,7,3),y(-9,-14,8,7),y(23,-10,9,11),y(24,3,7,5),y(-6,6,8,13),y(10,-22,9,17),y(-1,-20,6,19);const S=Ty(l),R=S.group;R.position.set(7.5,0,-12),R.rotation.y=-.15,n.add(R),Ay(R,l),i(6.4,8.6,0,1.5,-14.1,-9.9);const F=new Un(16715792,0,12,2);F.position.set(7.2,1.75,-12.4),n.add(F);const B=new Un(1065215,0,12,2);B.position.set(7.9,1.75,-12.4),n.add(B);const O=new hh(16773336,220,32,.42,.5,1.6);O.position.set(7.8,.7,-9.9),O.target.position.set(6.2,1,2),n.add(O,O.target),O.castShadow=!0,O.shadow.mapSize.set(1024,1024),O.shadow.camera.near=.5,O.shadow.camera.far=30,O.shadow.bias=-4e-4;const V={material:S.lensR},G={material:S.lensB},j=S.hlMat;t.props.car={car:R,redL:F,blueL:B,barR:V,barB:G,head:O,hlMat:j},t.updaters.push((A,U)=>{if(!t.props.car.sirenOn){F.intensity=B.intensity=0,V.material.emissiveIntensity=G.material.emissiveIntensity=0;return}const K=U*2.2%1,ee=K<.5&&K*8%1<.6?1:0,te=K>=.5&&K*8%1<.6?1:0;F.intensity=ee*30,B.intensity=te*40,V.material.emissiveIntensity=ee*8,G.material.emissiveIntensity=te*8}),C(Tt(7.5,1,-9.6),"Rádio da viatura",()=>r.story.event("carRadio"),{range:2.4}),m(8,6,s.wood,4,0,3,-Math.PI/2,0,2.2),m(8,6,s.floorK,12,0,3,-Math.PI/2,0,1.6),m(16,2,s.wood,8,0,7,-Math.PI/2,0,2.2),m(6,4,s.wood,3,0,10,-Math.PI/2,0,2.2),m(4,4,s.floorB,8,0,10,-Math.PI/2,0,1.2),m(6,4,s.wood,13,0,10,-Math.PI/2,0,2.2),m(16,12,s.ceil,8,Nn,6,Math.PI/2,0,2);const W=s.roof||Et(Wr(61),{color:5910560,rough:.9}),J=Math.atan2(1.6,6.8),le=f(17.2,.1,7.1,W,8,0,0,{tile:2});le.position.set(8,Nn+.85,2.8),le.rotation.x=J;const ve=f(17.2,.1,7.1,W,8,0,0,{tile:2});ve.position.set(8,Nn+.85,9.2),ve.rotation.x=-J,f(16,.2,12,s.ext,8,Nn,6,{tile:3});for(const A of[0,16]){const U=new yo;U.moveTo(-6,0),U.lineTo(6,0),U.lineTo(0,1.65),U.lineTo(-6,0);const K=new oe(new lh(U),s.ext);K.position.set(A,Nn,6),K.rotation.y=Math.PI/2,n.add(K);const ee=K.clone();ee.rotation.y=-Math.PI/2,n.add(ee)}p("x",0,0,16,[x(1.8,3.4),M(5.4,6.4),x(10,11.6)],s.wpSala,s.ext),p("x",12,0,16,[x(1,2.2),x(4.4,5.4),x(11,12.4)],s.ext,s.wpCasal),p("z",0,0,12,[x(1.5,3),x(10.4,11.6)],s.wpSala,s.ext),p("z",16,0,12,[x(2.2,3.6),M(6.5,7.5)],s.ext,s.tileK),p("z",8,0,6,[M(2.5,3.5)],s.tileK,s.wpSala),p("x",6,0,16,[M(3.5,4.5),M(11.5,12.5)],s.wpHall,s.wpSala),p("x",8,0,16,[M(2.5,3.5),M(7.5,8.5),M(12.5,13.5)],s.wpCasal,s.wpHall),p("z",6,8,12,[],s.tileB,s.wpCasal),p("z",10,8,12,[],s.wpKid,s.tileB);const Ne=_("x",0,5.4,6.4,{name:"Porta da frente",open:.12});_("x",6,11.5,12.5,{open:1,dir:1});const Ze=_("x",8,2.5,3.5,{open:0}),$=_("x",8,7.5,8.5,{open:0}),fe=_("x",8,12.5,13.5,{open:0}),Re=_("z",16,6.5,7.5,{open:0,locked:!0,name:"Porão",mat:Et(Ss(33),{color:4861984})});Re.lockLabel="Trancada com cadeado",t.props.doors={front:Ne,dCasal:Ze,dBath:$,dKid:fe,dBase:Re},m(10,2.6,s.porch,8,.01,-1.3,-Math.PI/2,0,2),f(10.4,.12,2.9,s.darkWood,8,2.55,-1.35,{tile:2});for(const A of[3.1,6.9,9.1,12.9])f(.12,2.55,.12,s.paintWood,A,0,-2.5,{col:!0,tile:.6});h("plastic_monobloc_chair_01",11.5,0,-1.1,2.6,{col:!0,dirty:.75})||f(.6,.45,.6,s.darkWood,11.5,0,-1,{col:!0,tile:.6}),h("rubber_boots",4.6,0,-.35,.4),h("rubber_boots",4.85,0,-.3,-.2),h("trashbag",13.6,0,-.6,1,{dirty:.7});const de=w(6,-1.2,"porch",{y:2.55,power:0,noShade:!0});de.dead=!0,h("Sofa_01",.42,0,2.2,Math.PI/2,{col:!0,dirty:.8})||f(.9,.42,2.1,s.fabric,.55,0,2.2,{col:!0}),f(.45,.5,1,s.darkWood,3.35,0,2.2,{col:!0,tile:.8});const De=h("Television_01",3.35,.5,2.2,-Math.PI/2),Ve=De?De.userData.box.min.x-.004:3.065,ke=De?(De.userData.box.min.y+De.userData.box.max.y)/2+.01:.73;De||f(.5,.46,.58,s.plastic,3.32,.5,2.2),h("mantel_clock_01",3.4,.5,2.62,-Math.PI/2);const nt=y1(),ie=m(.36,.27,new Ce({map:nt,emissive:16777215,emissiveMap:nt,emissiveIntensity:1.1,roughness:.1}),Ve,ke,2.2,0,-Math.PI/2,0),he=new Un(11059455,1.2,4,2);he.position.set(Ve-.3,ke,2.2),n.add(he),t.props.tv={tvTex:nt,tvScreen:ie,tvLight:he,on:!0},t.updaters.push((A,U)=>{t.props.tv.on?(Math.random()<.5&&nt.userData.update(U),he.intensity=.7+Math.random()*.6):he.intensity=0});const I=h("ClassicNightstand_01",.33,0,3.75,Math.PI/2,{col:!0}),Be=I?I.userData.box.max.y:.6;I||f(.45,.6,.45,s.darkWood,.33,0,3.75,{col:!0});const ce=by(l);ce.position.set(.36,Be,3.72),ce.rotation.y=Math.PI/2+.25,n.add(ce),t.props.phone={pos:Tt(.4,Be+.1,3.72),handset:ce.userData.handset,obj:ce,base:ce.position.clone()};const Pe=C(Tt(.4,Be+.1,3.72),"Telefone",()=>r.story.event("phone"),{range:2.3});Object.defineProperty(Pe,"label",{get:()=>r.story&&r.story.ring?"Atender o telefone":"Telefone"});const ge=h("dining_table",5.6,0,4.2,0,{col:!0,dirty:.85}),We=ge?ge.userData.box.max.y:.78;ge||(f(1.7,.05,.95,s.darkWood,5.5,.73,4.2,{tile:.8}),i(4.65,6.35,0,.78,3.72,4.68));for(const[A,U,K]of[[5,3.25,0],[6.2,3.25,0],[5,5.15,Math.PI],[6.2,5.15,Math.PI]])h("dining_chair_02",A,0,U,K,{dirty:.8});const be=h("dining_chair_02",7.1,0,4.4,1.1,{dirty:.8});be&&(be.rotation.z=Math.PI/2,be.position.y=.22,be.position.x=7.25);const L=new At({color:15262938,roughness:.25,clearcoat:.8,envMap:l}),b=[[5,3.85],[6.2,3.85],[5,4.55],[6.2,4.55]];for(const[A,U]of b){d(.13,.1,.02,L,A,We,U,24);const K=new oe(new Vn(.07,10,8),s.food);K.scale.set(1,.32,.8),K.position.set(A+.02,We+.03,U),n.add(K);const ee=f(.02,.004,.18,s.metal,A+.17,We,U);ee.rotation.y=.1}for(let A=0;A<11;A++){const U=new oe(new Ts(.004,.01,2,5),s.bone);U.position.set(6.2+(Math.random()-.5)*.12,We+.026,4.55+(Math.random()-.5)*.12),U.rotation.set(Math.random()*3,Math.random()*3,0),n.add(U)}g(Cn(3,"splat"),.25,6.2,4.55,We+.022),C(Tt(6.2,We+.1,4.55),"Examinar prato",()=>r.story.event("teeth")),m(3,2,s.carpet||Et(vn(44,[110,40,35],.3),{bump:!1}),5.6,.004,4.2,-Math.PI/2,0,1.3);for(let A=0;A<7;A++)g(Cn(10+A,"smear"),.9,5.1-A*.18,4.9+A*.17,.007+A*5e-4,-.8+(Math.random()-.5)*.4);const X=a&&a.models.hanging_picture_frame_01?a.models.hanging_picture_frame_01.clone(!0):null;X?(X.traverse(A=>{A.isMesh&&A.material.name&&A.material.name.endsWith("artwork")&&(A.material=A.material.clone(),A.material.map=Il(),A.material.map.flipY=!1,A.material.map.needsUpdate=!0)}),X.position.set(.078,1.72,4.6),X.rotation.y=Math.PI/2,X.scale.setScalar(.82),n.add(X)):(m(.5,.65,new Ce({map:Il(),roughness:.4}),.115,1.75,4.6,0,Math.PI/2,0),f(.04,.72,.57,s.darkWood,.09,1.39,4.6)),C(Tt(.3,1.7,4.6),"Examinar retrato",()=>r.story.event("granny")),f(.04,.5,.04,s.darkWood,1.6,1.45,5.9),f(.3,.04,.04,s.darkWood,1.6,1.55,5.9),m(.5,.4,new Ce({map:Dl(2,4,!1),roughness:.4}),6.4,1.6,5.91,0,Math.PI,0);const ne=v(Ll("ELA NOS EMPRESTOU"),2.6,.65,7.91,1.6,4.7,0,-Math.PI/2,{rough:.6});t.reveal.push(ne),f(.08,.12,.02,s.white,4.8,1.2,.09),C(Tt(4.8,1.25,.1),"Interruptor",()=>r.story.event("switch")),w(4,3,"sala"),f(.62,.88,4.6,s.cabinet,15.6,0,2.6,{col:!0,tile:1});for(let A=0;A<6;A++)f(.02,.6,.7,s.cabinet,15.28,.12,.65+A*.75,{tile:.8});f(.66,.04,4.62,Et(Wr(71),{color:6974050,rough:.4}),15.58,.88,2.6),f(.45,.04,.6,s.metal,15.6,.89,3.1),f(.36,.7,4.6,s.cabinet,15.75,1.55,2.6,{tile:.8}),f(.62,.88,.62,s.ceramic,15.6,0,5.4,{col:!0}),h("pot_enamel_01",15.5,.9,5.3,.6);for(const[A,U]of[[15.45,5.25],[15.75,5.25],[15.45,5.55],[15.75,5.55]])d(.08,.08,.02,s.black,A,.88,U,12);const se=wy(l);se.group.position.set(8.72,0,.53),n.add(se.group),i(8.34,9.1,0,1.65,.18,.88);const Q=a?_d(a,"tiago"):null;if(Q){Q.scale.setScalar(.041),Q.position.set(0,.98,.02),Q.rotation.set(-.12,.25,.08),se.group.add(Q);const A=new oe(new kt(.05,.06,.015,16),new At({color:5900296,roughness:.25,clearcoat:1}));A.position.set(0,.8,.03),se.group.add(A);const U=new oe(new kt(.17,.13,.03,24),new At({color:14210248,roughness:.2,clearcoat:1,envMap:l}));U.position.set(0,.795,.02),se.group.add(U);const K=new oe(new es(.14,20),s.bloodPool);K.rotation.x=-Math.PI/2,K.position.set(0,.812,.02),se.group.add(K)}for(let A=0;A<4;A++)d(.045,.045,.14,new At({color:[5910544,6950928,3815952,5909024][A],roughness:.1,transmission:.3,transparent:!0,opacity:.85,envMap:l}),-.22+A*.14,1.11,-.1,12,{parent:se.group});g(Cn(21,"drip"),.5,0,0,.43,0,{parent:se.group}),t.props.fridge={pivot:se.pivot,light:se.bulb,open:0,target:0},C(Tt(8.95,1.1,1),"Abrir geladeira",()=>r.story.event("fridge")),g(Cn(22,"pool"),1.4,9.3,1.4,.006),f(1.1,.05,.8,s.darkWood,11.5,.75,3,{tile:.8}),h("wooden_bowl_01",11.75,.8,2.85,0);for(const[A,U,K]of[[11.2,2.35,0],[11.9,3.7,Math.PI]])h("dining_chair_02",A,0,U,K,{dirty:.75});h("painted_wooden_cabinet",9.4,0,5.62,Math.PI,{col:!0,dirty:.85}),h("trashbag",14.75,0,5.62,.4,{dirty:.7});for(const[A,U]of[[-.5,-.35],[.5,-.35],[-.5,.35],[.5,.35]])f(.05,.75,.05,s.darkWood,11.5+A,0,3+U);i(10.95,12.05,0,.8,2.6,3.4);const ze=f(.3,.005,.03,s.metal,11.3,.8,3.1);ze.rotation.y=.4,g(Cn(23,"splat"),.5,11.6,3,.776);const xe=h("power_box_01",13.5,1.15,.12,0);xe||f(.4,.5,.1,s.rust,13.5,1.3,.13);const Se=new oe(new Vn(.012,6,6),new Ce({color:2228224,emissive:16719872,emissiveIntensity:0}));Se.position.set(13.72,xe?xe.userData.box.max.y-.04:1.72,xe?xe.userData.box.max.z+.005:.19),n.add(Se),t.props.fuse={led:Se},C(Tt(13.5,1.55,.25),"Quadro de luz",()=>r.story.event("fusebox")),t.props.drawer=C(Tt(15.25,.8,1.4),"Abrir gaveta",()=>r.story.event("drawer")),w(12,3,"cozinha");for(let A=0;A<9;A++)g(Cn(60+A%2,"hand"),.22,9.6+A*.55,2+Math.sin(A)*.3+A%2*.25,.007,Math.PI+(A%2?.3:-.3),{opacity:.8});m(14,.9,s.carpet||Et(vn(45,[90,30,30],.2),{bump:!1}),8,.004,7,-Math.PI/2,0,1.2),[4.8,5.8,9.6,10.6,14.2].forEach((A,U)=>{m(.32,.26,new Ce({map:Dl(5+U,3+U%2,!0,U%2===0),roughness:.4}),A,1.55+U%2*.12,7.91,0,Math.PI,0),f(.36,.3,.02,s.darkWood,A,1.4+U%2*.12,7.92)}),f(.6,.9,.35,s.darkWood,9.5,0,6.27,{col:!0,tile:.6});for(let A=0;A<3;A++)d(.015,.015,.1+A*.03,s.candle,9.35+A*.15,.9,6.25,8);const ue=new oe(new Ts(.04,.16,3,8),new Ce({color:5925514,roughness:.5}));ue.position.set(9.5,1.03,6.2),n.add(ue),ue.rotation.z=Math.PI,w(4,7,"hall",{power:5}),w(12,7,"hall",{power:5});const Le=r.cmats,qe=bi(Le,{h:1.55,skin:Le.ghost,top:Le.ghost,bottom:Le.ghost,dress:Le.ghost,hair:!0,hairLen:.3,mouthOpen:2.5});qe.root.position.set(15.3,0,7),qe.root.rotation.y=-Math.PI/2,qe.neck.rotation.z=.5,n.add(qe.root),t.reveal.push(qe.root),t.props.ghost=qe.root;const Ke=h("old_bed_frame",3,0,10.9,Math.PI,{col:!0});if(Ke){Ke.scale.x=1.7,Ke.updateMatrixWorld(!0);const A=new si().setFromObject(Ke);t.colliders[t.colliders.length-1].x0=A.min.x,t.colliders[t.colliders.length-1].x1=A.max.x}else f(1.7,.42,2.1,s.darkWood,3,0,10.9,{col:!0});f(1.45,.18,1.9,s.sheet,3,.36,10.85);const Oe=f(1.5,.05,1.35,s.blanket,3,.54,10.6);Oe.rotation.z=.02;for(const A of[2.6,3.4]){const U=f(.55,.12,.35,s.sheet,A,.54,11.6);U.rotation.x=-.25}g(Cn(31,"pool"),1.1,3.3,10.6,.592,.5);const mt=h("ClassicNightstand_01",1.6,0,11.7,Math.PI,{col:!0}),et=h("ClassicNightstand_01",4.4,0,11.7,Math.PI,{col:!0}),St=et?et.userData.box.max.y:.55;mt||(f(.45,.55,.4,s.darkWood,1.75,0,11.7,{col:!0}),f(.45,.55,.4,s.darkWood,4.25,0,11.7,{col:!0})),h("vintage_cabinet_01",.36,0,9.15,Math.PI/2,{col:!0,dirty:.8})||f(.6,2,1.5,s.darkWood,.38,0,9,{col:!0});const k=new oe(new kt(.015,.015,.07,8),new Ce({color:14207120,roughness:.3,metalness:.4}));k.rotation.z=Math.PI/2,k.position.set(4.35,St+.016,11.65),n.add(k),t.props.fuseItem=k,t.props.fuseI=C(Tt(4.35,St+.05,11.65),"Pegar fusível",()=>r.story.event("takeFuse"),{enabled:!1}),w(3,10,"casal"),v(Ll("NÃO OLHE PRA CIMA"),2.2,.55,3,Nn-.01,9.4,Math.PI/2,0,{rz:Math.PI});const ye=7.05,Z=11.5;f(1.7,.55,.08,s.ceramic,ye,0,11.08,{col:!0}),f(.08,.55,.8,s.ceramic,6.2,0,Z),f(.08,.55,.8,s.ceramic,7.9,0,Z,{col:!0}),f(1.7,.06,.8,s.ceramic,ye,0,Z),i(6.15,7.95,0,.6,11.05,11.95);const ae=m(1.6,.74,s.bloodPool,ye,.47,Z,-Math.PI/2,0,0);t.props.tub={surf:ae,pos:Tt(ye,.5,Z)},v(Cn(41,"drip"),.6,.6,7.4,.3,11.035,0,Math.PI),f(.38,.4,.5,s.ceramic,9.6,0,9,{col:!0}),f(.4,.35,.18,s.ceramic,9.75,.4,9),f(.45,.12,.38,s.ceramic,9.7,.78,10.7,{col:!0}),d(.05,.07,.78,s.ceramic,9.75,0,10.7,10);const we=new za(new ii(.55,.75),{textureWidth:512,textureHeight:680,color:10132122,clipBias:.003});we.position.set(9.9,1.55,10.7),we.rotation.y=-Math.PI/2,n.add(we),we.camera.layers.enable(2),f(.03,.82,.62,s.darkWood,9.93,1.14,10.7),t.props.mirror=we,w(8,10,"banheiro",{power:4}),g(Cn(42,"pool"),.9,7.6,10.2,.006);const Ee=g(Cn(43,"pool"),1.4,8,7.5,.008);Ee.visible=!1,t.props.underDoor=Ee,h("old_bed_frame",15.42,0,10.85,Math.PI,{col:!0,tint:15784152})||f(.95,.38,1.9,Et(Ss(12),{color:11569776}),15.42,0,10.85,{col:!0}),f(.84,.14,1.85,Et(vn(46,[200,170,190],.1)),15.42,.34,10.85);const lt=[11546672,3166384,13672480,3186768];for(let A=0;A<6;A++){const U=f(.08,.08,.08,new Ce({color:lt[A%4],roughness:.6}),11.5+Math.random()*1.5,0,9+Math.random()*2);U.rotation.y=Math.random()*3}const Dt=bi(r.cmats,{h:.35,skin:r.cmats.childSkin,dress:r.cmats.childDress,hair:!0,hairLen:.2});Dt.root.position.set(12.2,.05,11.4),Dt.root.rotation.set(-Math.PI/2,0,.6),n.add(Dt.root),Dt.head.rotation.y=Math.PI,[9,9.7,10.4].forEach((A,U)=>m(.4,.31,new Ce({map:v1(4+U),roughness:.8}),10.085,1.25+U%2*.15,A,0,Math.PI/2,0)),C(Tt(10.3,1.3,9.7),"Examinar desenhos",()=>r.story.event("drawings")),w(13,10,"kid",{power:5});const Xt=new Ye;n.add(Xt),Xt.visible=!1;for(let A=0;A<26;A++)v(Cn(80+A%4,"hand"),.24,.24,10.6+Math.random()*5,Nn-.008,8.5+Math.random()*3.3,Math.PI/2,0,{rz:Math.random()*6.28,parent:Xt});t.props.ceilingHands=Xt;const gt=new Ye,Ln=new Ce({color:10127962,metalness:.8,roughness:.35}),oi=new oe(new ss(.018,.005,6,12),Ln);gt.add(oi);const Cr=new oe(new Bt(.008,.06,.004),Ln);Cr.position.y=-.045,gt.add(Cr),gt.rotation.x=-Math.PI/2,gt.position.set(14.7,.01,10.6),gt.visible=!1,n.add(gt),t.props.key=gt,t.props.keyI=C(Tt(14.7,.2,10.6),"Pegar chave",()=>r.story.event("takeKey"),{enabled:!1});const Je=-3;p("x",6,16,20,[],s.conc,s.ext,Je,Nn-Je,{tile:1.5}),p("x",8,16,20,[],s.ext,s.conc,Je,Nn-Je,{tile:1.5}),f(4.2,.2,2.3,s.ext,18,Nn,7,{tile:2}),f(4,.1,2,s.conc,18,Nn-.1,7,{tile:2,cast:!1}),p("z",20,6,8,[{a:6,b:8,bottom:0,top:2.4}],s.conc,s.conc,Je,Nn-Je);for(let A=0;A<12;A++){const U=16+A*.3333333333333333,K=-A*(3/12);f(4/12,.08,2,s.darkWood,U+2/12,K-.08-3/12,7,{tile:.8})}const xi=f(4.6,.05,.05,s.darkWood,18,0,6.2);xi.position.y=-.6,xi.rotation.z=-Math.atan2(3,4),m(8,12,s.concFloor,24,Je+.005,6,-Math.PI/2,0,2.5),m(8,12,s.conc,24,-.6,6,Math.PI/2,0,2.5);for(let A=.5;A<12;A+=1.4)f(8,.18,.12,s.darkWood,24,-.78,A,{tile:1});p("z",20,0,6,[],s.conc,s.conc,Je,2.4,{tile:1.5}),p("z",20,8,12,[],s.conc,s.conc,Je,2.4,{tile:1.5}),p("z",28,0,12,[],s.conc,s.conc,Je,2.4,{tile:1.5}),p("x",0,20,28,[],s.conc,s.conc,Je,2.4,{tile:1.5}),p("x",12,20,28,[],s.conc,s.conc,Je,2.4,{tile:1.5});for(const[A,U]of[[23,3.6],[23.2,9],[25.8,6.4]])f(.35,2.4,.35,s.conc,A,Je,U,{col:!0,tile:1});const Pr=h("wooden_bookshelf_worn",22.6,Je,.38,0,{col:!0,dirty:.75});if(h("wooden_bookshelf_worn",24.1,Je,.38,0,{col:!0,dirty:.75}),!Pr){for(let A=0;A<3;A++)f(2.4,.04,.45,s.darkWood,23.8,Je+.4+A*.6,.35,{tile:.8});i(22.6,25,Je,Je+2,.1,.6)}for(let A=0;A<10;A++)d(.045,.045,.16,new At({color:[4860432,3813392,5246992][A%3],roughness:.1,transmission:.3,transparent:!0,opacity:.85,envMap:l}),22.1+A%5*.22+Math.floor(A/5)*1.5,Je+.43+A%2*.68,.38,10);h("ammo_box",24.7,Je+1.12,.4,.2),h("wooden_crate_01",21.1,Je,3.6,.3,{col:!0}),h("wooden_crate_01",21.1,Je+.35,3.6,.5),h("wooden_crate_01",26.8,Je,9.8,1.4,{col:!0}),h("Barrel_01",27.2,Je,11.3,0,{col:!0,dirty:.8}),h("Barrel_01",26.5,Je,11.45,1,{col:!0,dirty:.8}),h("trashbag",21.4,Je,.8,2,{dirty:.6}),t.props.ammoBox=C(Tt(24.8,Je+1.1,.5),"Caixa de munição",()=>r.story.event("ammoBox"));const os=[];for(const[A,U]of[[22.3,2.4],[24.6,10.6],[26.4,2.8],[21.6,10.2]]){const K=new Ye;K.position.set(A,-.6,U),n.add(K);const ee=new oe(new kt(.01,.01,.5,4),s.bark);ee.position.y=-.25,K.add(ee);const te=new oe(new Ts(.2,1.1,6,12),s.sheet);te.position.y=-1.25,te.scale.set(1,1,.8),te.castShadow=!0,K.add(te),te.scale.set(1,1,.75),te.rotation.z=(Math.random()-.5)*.15;const Me=new oe(new Vn(.15,12,10),Et(vn(47,[120,40,35],1.8)));Me.position.y=-1.95,Me.scale.set(1,1.15,.9),K.add(Me);for(const pe of[-.7,-1.1,-1.5,-1.8]){const st=new oe(new ss(.2-Math.abs(pe+1.25)*.05,.012,5,16),s.bark);st.rotation.x=Math.PI/2+(Math.random()-.5)*.3,st.position.y=pe,st.scale.set(1,.78,1),K.add(st)}const _e=new oe(new kt(.004,.002,.35,4),s.bloodPool);_e.position.y=-2.25,K.add(_e),os.push(K),g(Cn(90+os.length,"pool"),.7,A,U,Je+.007)}t.props.wrapped=os,t.updaters.push((A,U)=>os.forEach((K,ee)=>{K.rotation.z=Math.sin(U*.7+ee*2)*.05,K.rotation.y=Math.sin(U*.3+ee)*.4+(K.userData.spin||0)}));const Dn=new Ye;n.add(Dn),f(.8,.9,1.8,s.darkWood,27.4,Je,6,{col:!0,parent:Dn}),f(.84,.5,1.84,s.redCloth,27.4,Je+.5,6,{parent:Dn}),m(.4,.52,new Ce({map:Il(),roughness:.4}),27.88,Je+1.35,6,0,-Math.PI/2,0,{parent:Dn}),m(.4,.31,new Ce({map:Dl(9,5,!0),roughness:.4}),27.86,Je+1.15,5.4,0,-Math.PI/2,0,{parent:Dn});const ai=new Ye;ai.position.set(27.45,Je+1,6.45),Dn.add(ai);const Lr=new oe(new Vn(.11,12,10),s.bone);Lr.scale.set(.8,.9,1.3),ai.add(Lr);for(const A of[-1,1]){const U=new oe(new _o(.03,.3,8),s.bone);U.position.set(A*.06,.12,-.05),U.rotation.set(-.6,0,A*.5),ai.add(U)}for(const A of[-1,1]){const U=new oe(new Vn(.025,8,6),s.black);U.position.set(A*.04,.02,.12),ai.add(U)}ai.rotation.y=-Math.PI/2,d(.12,.08,.08,s.metal,27.3,Je+.9,5.6,14,{parent:Dn}),m(.18,.18,s.bloodPool,27.3,Je+.985,5.6,-Math.PI/2,0,0,{parent:Dn});const Wi=[],bo=new po({map:Pa(),color:16752704,blending:As,depthWrite:!1});for(let A=0;A<9;A++){const U=27.15+A%3*.17,K=5.3+Math.floor(A/3)*.7+(Math.random()-.5)*.2,ee=.08+Math.random()*.15;d(.02,.022,ee,s.candle,U,Je+.9,K,8,{parent:Dn});const te=new vr(bo);te.scale.set(.05,.09,1),te.position.set(U,Je+.93+ee,K),Dn.add(te),Wi.push(te)}const as=new Un(16747056,0,10,1.7);as.position.set(27.2,Je+1.3,6),n.add(as),t.props.altar={group:Dn,candles:Wi,candleL:as,lit:!1,pos:Tt(27.2,Je+1,6)},t.updaters.push((A,U)=>{const K=t.props.altar;Wi.forEach((ee,te)=>{ee.visible=K.lit,ee.scale.y=.08+Math.sin(U*17+te*3)*.015+Math.random()*.01}),as.intensity=K.lit?9+Math.sin(U*13)*1.5+Math.random()*2:0}),v(Ll("A DÍVIDA FICA NA FAMÍLIA",1400,256,110),3.4,.62,27.91,Je+1.85,6,0,-Math.PI/2,{rough:.5});for(let A=0;A<6;A++)v(Cn(100+A,"hand"),.25,.25,27.91,Je+.9+Math.random()*1.2,4.2+Math.random()*3.6,0,-Math.PI/2,{rz:Math.random()*6});t.props.diaryI=C(Tt(27.1,Je+1,6.6),"Ler diário",()=>r.story.event("diary")),t.props.burnI=C(Tt(27.1,Je+1,6),"Queimar o altar",()=>r.story.event("burn"),{enabled:!1,hold:2.2});const Ga=f(.16,.04,.22,Et(vn(48,[70,40,30],.3)),27.1,Je+.9,6.6);t.props.diary=Ga;const ls=new Ye;n.add(ls),ls.visible=!1;const Wa=new po({map:Pa(),color:16738848,blending:As,depthWrite:!1,transparent:!0}),T=[];for(let A=0;A<60;A++){const U=new vr(Wa.clone());ls.add(U),T.push({s:U,life:Math.random()})}const z=new Un(16740384,0,14,1.6);z.position.set(27,Je+1.4,6),n.add(z),t.props.fire={g:ls,sprites:T,light:z,level:0},t.updaters.push((A,U)=>{const K=t.props.fire;if(!ls.visible){z.intensity=0;return}const ee=K.level;for(const te of T){te.life+=A*(1.2+Math.random()),te.life>1&&(te.life=0,te.x=27.4+(Math.random()-.5)*.7,te.z=6+(Math.random()-.5)*1.7*Math.min(1,.3+ee));const Me=Je+.95+te.life*(.4+ee*1.3);te.s.position.set(te.x+Math.sin(U*5+te.life*6)*.05,Me,te.z);const _e=(.15+ee*.5)*(1-te.life*.7);te.s.scale.set(_e,_e*1.6,1),te.s.material.opacity=(1-te.life)*.8,te.s.material.color.setHSL(.06-te.life*.05,1,.5-te.life*.25)}z.intensity=(5+ee*30)*(.8+Math.random()*.4)});const Y=2200,q=new Float32Array(Y*6),H=new Vt;H.setAttribute("position",new Gt(q,3));const me=new $f(H,new ih({color:6318708,transparent:!0,opacity:.16}));me.frustumCulled=!1,e.add(me);const Ae=[];for(let A=0;A<Y;A++)Ae.push({x:0,y:-100,z:0,v:9+Math.random()*3});const He=(A,U)=>A>-.2&&A<16.2&&U>-.2&&U<12.2||A>2.8&&A<13.2&&U>-2.8&&U<0||A>15.8&&A<20.2&&U>5.8&&U<8.2;t.updaters.push(A=>{const U=r.camera.position;for(let K=0;K<Y;K++){const ee=Ae[K];ee.y-=ee.v*A,ee.y<0&&(ee.x=U.x+(Math.random()-.5)*24,ee.z=U.z+(Math.random()-.5)*24,ee.y=4+Math.random()*6,He(ee.x,ee.z)&&(ee.y=-100-Math.random()));const te=K*6;q[te]=ee.x,q[te+1]=ee.y,q[te+2]=ee.z,q[te+3]=ee.x+.01,q[te+4]=ee.y+.32,q[te+5]=ee.z}H.attributes.position.needsUpdate=!0});const Ie=new pd(12110079,0);Ie.position.set(-14,22,-20),Ie.target.position.set(8,0,4),e.add(Ie,Ie.target),Ie.castShadow=!0,Ie.shadow.mapSize.set(1024,1024),Object.assign(Ie.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:1,far:70}),Ie.shadow.autoUpdate=!1,Ie.shadow.needsUpdate=!0,t.props.lightning=Ie,t.floorY=(A,U)=>A>16&&A<20&&U>5.9&&U<8.1?-3*Math.min(1,Math.max(0,(A-16)/4)):A>=20?Je:0,t.surface=(A,U)=>A>=16&&U>5.9&&U<8.1&&A<20?"wood":A>=20?"concrete":U<0?A>3&&A<13&&U>-2.6?"porch":"mud":A>8&&A<16&&U<6||A>6&&A<10&&U>8?"tile":"wood",t.insideAt=(A,U)=>A>=0&&A<=16&&U>=0&&U<=12||A>16&&U>5.9&&U<8.1||A>=20?1:U>-2.6&&U<0&&A>3&&A<13?.4:0,t.room=(A,U)=>A>=20?"porao":A>16?"escada":U<0?"fora":U<6?A<8?"sala":"cozinha":U<8?"hall":A<6?"casal":A<10?"banheiro":"kid";const tt=-4,ot=-17,Ue=.4,it=Math.ceil((30-tt)/Ue),wt=Math.ceil((14-ot)/Ue);let Rt=new Uint8Array(it*wt);t.buildGrid=()=>{Rt=new Uint8Array(it*wt);for(let A=0;A<wt;A++)for(let U=0;U<it;U++){const K=tt+(U+.5)*Ue,ee=ot+(A+.5)*Ue,te=t.floorY(K,ee),Me=.22;let _e=!1;for(const pe of t.colliders)if(!(pe.tag==="door"||!pe.on)&&!(pe.y1<te+.25||pe.y0>te+1.6)&&K+Me>pe.x0&&K-Me<pe.x1&&ee+Me>pe.z0&&ee-Me<pe.z1){_e=!0;break}Rt[A*it+U]=_e?1:0}};const an=(A,U)=>[Math.floor((A-tt)/Ue),Math.floor((U-ot)/Ue)],vt=(A,U)=>A>=0&&U>=0&&A<it&&U<wt&&Rt[U*it+A]===0;t.walkable=(A,U)=>{const[K,ee]=an(A,U);return vt(K,ee)},t.clearLine=(A,U,K,ee)=>{const te=Math.hypot(K-A,ee-U),Me=Math.ceil(te/(Ue*.5));for(let _e=0;_e<=Me;_e++){const pe=_e/Math.max(1,Me);if(!t.walkable(A+(K-A)*pe,U+(ee-U)*pe))return!1}return!0},t.findPath=(A,U,K,ee)=>{let[te,Me]=an(A,U);const[_e,pe]=an(K,ee);if(!vt(te,Me)){e:for(let fn=1;fn<4;fn++)for(let qt=-fn;qt<=fn;qt++)for(let dn=-fn;dn<=fn;dn++)if(vt(te+dn,Me+qt)){te+=dn,Me+=qt;break e}}const st=it*wt,$e=new Float32Array(st).fill(1/0),ct=new Int32Array(st).fill(-1),yt=new Uint8Array(st),je=[[0,Me*it+te]];$e[Me*it+te]=0;const It=pe*it+_e;let In=0,Fe=-1,Ht=1/0;for(;je.length&&In++<6e3;){let fn=0;for(let Nt=1;Nt<je.length;Nt++)je[Nt][0]<je[fn][0]&&(fn=Nt);const[,qt]=je.splice(fn,1)[0];if(yt[qt])continue;yt[qt]=1;const dn=qt%it,Yt=qt/it|0,Qt=Math.hypot(dn-_e,Yt-pe);if(Qt<Ht&&(Ht=Qt,Fe=qt),qt===It){Fe=qt;break}for(let Nt=-1;Nt<=1;Nt++)for(let pn=-1;pn<=1;pn++){if(!pn&&!Nt)continue;const ln=dn+pn,Yn=Yt+Nt;if(!vt(ln,Yn)||pn&&Nt&&(!vt(dn+pn,Yt)||!vt(dn,Yt+Nt)))continue;const kn=Yn*it+ln,jn=$e[qt]+(pn&&Nt?1.414:1);jn<$e[kn]&&($e[kn]=jn,ct[kn]=qt,je.push([jn+Math.hypot(ln-_e,Yn-pe),kn]))}}if(Fe<0)return null;const Jt=[];let jt=Fe;for(;jt>=0;)Jt.push(Tt(tt+(jt%it+.5)*Ue,0,ot+((jt/it|0)+.5)*Ue)),jt=ct[jt];return Jt.reverse(),Jt.shift(),Fe===It&&Jt.push(Tt(K,0,ee)),Jt};const Ge=new Ca;return t.los=(A,U)=>{const K=U.clone().sub(A),ee=K.length();K.divideScalar(ee),Ge.set(A,K),Ge.far=ee-.15;const te=t.doors.filter(Me=>Me.open<.3).map(Me=>Me.panel);return Ge.intersectObjects([...t.occluders,...te],!1).length===0},t.pushDoors=(A,U)=>{for(const K of t.doors)K.locked||K.target>.5||Math.hypot(K.pos.x-A.x,K.pos.z-A.z)<1&&Math.abs(t.floorY(K.pos.x,K.pos.z)-A.y)<1&&(K.target=1,K.open=Math.max(K.open,.3),U.doorSlam(K.pos,.8))},t.update=(A,U)=>{for(const ee of t.doors)ee.open+=(ee.target-ee.open)*Math.min(1,A*4),ee.pivot.rotation.y=-ee.dir*ee.open*1.75,ee.col.on=ee.open<.35;const K=t.props.fridge;K.open+=(K.target-K.open)*Math.min(1,A*3),K.pivot.rotation.y=-K.open*1.9;for(const ee of t.bulbs){let te=r.lightsOn&&!ee.dead?1:0;ee.flicker>0&&(ee.flicker-=A,te*=Math.random()<.5?.05:1),ee.light.intensity=ee.base*te,ee.mat.emissiveIntensity=te*6,ee.mat.userData.shade&&ee.mat.userData.shade.material.emissive.setRGB(.5*te,.38*te,.22*te)}t.updaters.forEach(ee=>ee(A,U))},t.bounceList=[...t.occluders,...t.bounce],t.buildGrid(),t}const nr=(r=0,e=0,t=0)=>new D(r,e,t);class Cy{constructor(e){this.g=e,this.pos=nr(7,0,-9.3),this.vel=nr(),this.yaw=Math.PI,this.pitch=0,this.yawV=0,this.pitchV=0,this.height=1.6,this.radius=.3,this.health=100,this.stamina=1,this.fear=0,this.ammo=6,this.reserve=12,this.reloading=0,this.flashCharge=1,this.flashlightOn=!0,this.bob=0,this.stepPhase=0,this.lastStep=0,this.keys={},this.locked=!1,this.frozen=!1,this.shakeAmt=0,this.recoil=0,this.dead=!1,this.deathT=0,this.hurtT=10,this.damageFx=0,this.buildRig()}buildRig(){const e=this.g.camera;this.rig=new Ye,e.add(this.rig),this.flashlight=new hh(16773596,20,26,.5,.6,1.7),this.flashlight.map=x1(),this.flashlight.castShadow=!0,this.flashlight.shadow.mapSize.set(1024,1024),this.flashlight.shadow.camera.near=.15,this.flashlight.shadow.camera.far=26,this.flashlight.shadow.bias=-6e-4,this.flashlight.shadow.normalBias=.02,this.flashlight.position.set(-.12,-.16,-.25),this.flashTarget=new Ut,this.flashTarget.position.set(0,0,-6),this.flashlight.target=this.flashTarget,this.g.scene.add(this.flashlight,this.flashTarget),this.lightDir=nr(0,0,-1),this.flashPoint=new Un(16054015,0,18,1.4),this.g.scene.add(this.flashPoint),this.muzzle=new Un(16756832,0,10,2),this.g.scene.add(this.muzzle),this.fill=new Un(10465472,.6,5,2),this.g.scene.add(this.fill),this.bounce=new Un(14206634,0,7,2),this.g.scene.add(this.bounce),this.bounceRay=new Ca,this.bounceRay.far=16,this.bouncePos=nr();const t=this.gun=new Ye,n=new Ce({color:2303274,metalness:.9,roughness:.28}),i=new Ce({color:921361,metalness:.8,roughness:.4}),s=new Ce({map:vn(70,[34,34,36],0),roughness:.9}),o=new Ce({map:vn(72,[52,58,66],0),roughness:.95}),a=new Ce({map:Ss(71),color:6963248,roughness:.45}),l=(p,x,M,_,C,w=0,E=0,P=0,y)=>{const S=new oe(p,x);return S.position.set(M,_,C),S.rotation.set(w,E,P),y&&S.scale.set(...y),t.add(S),S},c=(p,x)=>new Ts(p,x,4,10);l(new Bt(.024,.042,.08),n,0,.018,-.028),l(new Bt(.017,.01,.07),n,0,.043,-.05),this.cyl=l(new kt(.0195,.0195,.042,18),n,0,.022,-.048,Math.PI/2);for(let p=0;p<6;p++){const x=p/6*Math.PI*2;l(new Bt(.004,.004,.03),i,Math.cos(x)*.0195,.022+Math.sin(x)*.0195,-.048)}l(new kt(.0082,.0085,.11,14),n,0,.031,-.125,Math.PI/2),l(new Bt(.011,.013,.1),n,0,.018,-.12),l(new Bt(.003,.009,.006),n,0,.043,-.176),l(new Bt(.008,.02,.012),i,0,.046,.016,-.5),l(new ss(.015,.0026,5,12,Math.PI),n,0,-.004,-.018,0,Math.PI/2,Math.PI),l(new Bt(.004,.016,.004),i,0,-.006,-.018,.3),l(c(.015,.06),a,0,-.038,.024,-.32,0,0,[.85,1,1.3]),l(c(.024,.045),s,.004,-.04,.034,-.32,0,0,[1.25,1,1.15]);for(let p=0;p<3;p++)l(c(.0098,.026),s,-.002,-.017-p*.017,.002,0,0,Math.PI/2);l(c(.009,.038),s,-.016,.004,-.03,Math.PI/2),l(c(.0095,.034),s,-.017,.028,-.005,Math.PI/2+.2),l(c(.033,.16),o,.02,-.085,.12,1.05,0,-.15);const u=this.flGroup=new Ye;u.position.set(-.03,-.062,-.01),t.add(u);const h=new oe(new kt(.017,.014,.12,14),new Ce({color:1250067,metalness:.6,roughness:.35}));h.rotation.x=Math.PI/2,u.add(h);const f=new oe(new kt(.02,.018,.02,14),h.material);f.rotation.x=Math.PI/2,f.position.z=-.065,u.add(f);const d=new oe(new es(.016,14),new Ce({color:3355443,emissive:16773328,emissiveIntensity:2}));d.position.z=-.0755,d.rotation.y=Math.PI,u.add(d),this.lens=d;const m=new oe(c(.025,.04),s);m.rotation.z=Math.PI/2,m.position.set(.004,-.006,.01),m.scale.set(1,1.2,1.3),u.add(m);const v=new oe(c(.033,.16),o);v.position.set(-.05,-.04,.1),v.rotation.set(1.1,0,.35),u.add(v),t.traverse(p=>{p.isMesh&&(p.castShadow=!1,p.receiveShadow=!1)}),t.position.set(.085,-.145,-.36),this.gunBase=t.position.clone(),this.gunLow=nr(.11,-.27,-.32),this.aimK=0,this.sinceShot=99,this.g.gunHolder.add(t),this.gunLight=new Un(16773340,0,2,1.5),this.gunLight.position.set(.05,.15,-.1),this.g.gunHolder.add(this.gunLight),this.gunAmb=new dd(8425632,2103312,.15),this.g.gunScene.add(this.gunAmb);const g=new po({map:Pa(),color:16760944,blending:As,depthWrite:!1,transparent:!0,opacity:0});this.muzzleSprite=new vr(g),this.muzzleSprite.scale.set(.12,.12,1),this.muzzleSprite.position.set(0,.032,-.23),t.add(this.muzzleSprite)}setInput(e){this.keys=e}look(e,t){if(this.frozen||this.dead)return;const n=.0022*this.g.sens;this.yawV-=e*n,this.pitchV-=t*n}damage(e,t){if(this.dead||this.g.godMode)return;this.health-=e,this.hurtT=0,this.damageFx=1,this.g.audio.hit(),this.g.shake(.6);const n=this.pos.x-t.x,i=this.pos.z-t.z,s=Math.hypot(n,i)||1;this.vel.x+=n/s*4,this.vel.z+=i/s*4,this.yawV+=(Math.random()-.5)*.25,this.pitchV+=.08,this.health<=0&&this.die(t)}die(e){this.dead=!0,this.deathT=0,this.health=0,this.deathFrom=e.clone(),this.g.onDeath()}shoot(){if(this.dead||this.frozen||this.reloading>0||this.g.noteOpen||this.fireCD>0)return;if(this.ammo<=0){this.g.audio.dryFire(),this.fireCD=.3;return}this.ammo--,this.fireCD=.42,this.sinceShot=0,this.aimK=Math.max(this.aimK,.85);const e=this.g.camera;this.g.audio.gunshot(e.position),this.recoil=1,this.pitchV+=.045,this.yawV+=(Math.random()-.5)*.02,this.muzzle.intensity=60,this.muzzleSprite.material.opacity=1,this.muzzleSprite.material.rotation=Math.random()*6,this.g.shake(.25),this.g.alertAll();const n=new wr(e.position.clone(),e.userData.fwd.clone());n.direction.x+=(Math.random()-.5)*.012,n.direction.y+=(Math.random()-.5)*.012,n.direction.normalize();let i=null,s=null;for(const a of this.g.creatures){const l=a.hitBy(n,.05);l&&(!i||l.distance<i.distance)&&(i=l,s=a)}const o=new Ca(n.origin,n.direction,0,60).intersectObjects(this.g.level.occluders,!1)[0];i&&(!o||i.distance<o.distance+.3)?(s.hurt(i),this.g.audio.fleshHit(i.point),this.g.hitMarker&&this.g.hitMarker()):o&&this.g.bulletHole(o)}reload(){this.reloading>0||this.ammo>=6||this.reserve<=0||this.dead||(this.reloading=2.4,this.reloadStage=0,this.g.audio.reloadClick(0))}cameraFlash(){this.dead||this.frozen||this.flashCharge<1||this.g.noteOpen||(this.flashCharge=0,this.g.flashT=.18,this.g.audio.cameraFlash(),this.g.audio.flashCharge(3.2),this.g.onFlash())}toggleFlashlight(){this.flashlightOn=!this.flashlightOn,this.g.audio.flashlightClick()}collide(e,t){const n=this.g.level,i=this.radius,s=n.floorY(e,t);let o=e,a=t;for(let l=0;l<2;l++)for(const c of n.colliders)if(c.on&&!(c.y1<s+.3||c.y0>s+1.75)&&o+i>c.x0&&o-i<c.x1&&a+i>c.z0&&a-i<c.z1){const u=Math.min(o+i-c.x0,c.x1-(o-i)),h=Math.min(a+i-c.z0,c.z1-(a-i));u<h?o+=o<(c.x0+c.x1)/2?-u:u:a+=a<(c.z0+c.z1)/2?-h:h}return[o,a]}update(e){const t=this.g,n=t.camera,i=t.audio,s=t.level;if(this.fireCD=(this.fireCD||0)-e,this.hurtT+=e,this.dead){this.deathUpdate(e);return}const o=Math.min(1,e*22),a=this.yawV*o,l=this.pitchV*o;this.yaw+=a,this.pitch=pi.clamp(this.pitch+l,-1.35,1.35),this.yawV-=a,this.pitchV-=l;const c=this.keys;let u=0,h=0;!this.frozen&&!t.noteOpen&&((c.KeyW||c.ArrowUp)&&(h+=1),(c.KeyS||c.ArrowDown)&&(h-=1),(c.KeyA||c.ArrowLeft)&&(u-=1),(c.KeyD||c.ArrowRight)&&(u+=1));const f=t.touchState;f&&!this.frozen&&!t.noteOpen&&(u+=f.x,h-=f.y);const d=Math.hypot(u,h)>.15,m=d&&(c.ShiftLeft||c.ShiftRight||f&&f.run)&&this.stamina>.05&&h>0,v=m?3.5:1.55,g=Math.sin(this.yaw),p=Math.cos(this.yaw);let x=-g*h+p*u,M=-p*h-g*u;const _=Math.max(1,Math.hypot(x,M));x/=_,M/=_;const C=d?10:8;this.vel.x+=((d?x*v:0)-this.vel.x)*Math.min(1,e*C),this.vel.z+=((d?M*v:0)-this.vel.z)*Math.min(1,e*C),this.stamina=pi.clamp(this.stamina+(m?-e/5.5:e/7),0,1);const[w,E]=this.collide(this.pos.x+this.vel.x*e,this.pos.z+this.vel.z*e),P=Math.hypot(w-this.pos.x,E-this.pos.z)/Math.max(e,1e-4);this.pos.x=w,this.pos.z=E;const y=s.floorY(this.pos.x,this.pos.z);this.pos.y+=(y-this.pos.y)*Math.min(1,e*12);const S=Math.min(P,4);if(this.stepPhase+=e*S*1.85,S>.3){const ie=Math.floor(this.stepPhase/Math.PI);ie!==this.lastStep&&(this.lastStep=ie,i.footstep(s.surface(this.pos.x,this.pos.z),this.pos.clone().setY(this.pos.y+.05),m?.9:.55,m))}const R=Math.min(1,S/3.5),F=Math.abs(Math.sin(this.stepPhase))*.045*R+Math.sin(t.time*1.3)*.004,B=Math.cos(this.stepPhase)*.025*R,O=Math.sin(t.time*(1.4+this.fear*2))*.003*(1+this.fear*2);this.shakeAmt=Math.max(0,this.shakeAmt-e*1.6);const V=this.shakeAmt*this.shakeAmt,G=(Math.random()-.5)*V*.08,j=(Math.random()-.5)*V*.08;n.position.set(this.pos.x+p*B,this.pos.y+this.height-.04+F+O,this.pos.z-g*B),n.rotation.order="YXZ",n.rotation.y=this.yaw+G,n.rotation.x=this.pitch+j+this.recoil*.02,n.rotation.z=-this.yawV*.6-u*.008*R+Math.cos(this.stepPhase)*.004*R,n.updateMatrixWorld(),n.getWorldDirection(n.userData.fwd),n.userData.up.set(0,1,0).applyQuaternion(n.quaternion),this.recoil=Math.max(0,this.recoil-e*5);const W=this.gun.position,J=this.gunBase,le=this.reloading>0?Math.sin(Math.min(1,(2.4-this.reloading)/2.4)*Math.PI):0,ve=t.noteOpen||this.frozen?1:0;this.sinceShot+=e;const Ne=(t.combat||this.sinceShot<2.5)&&!ve?1:0;this.aimK+=(Ne-this.aimK)*Math.min(1,e*(Ne?7:2.5));const Ze=this.aimK,$=this.gunLow,fe=$.x+(J.x-$.x)*Ze,Re=$.y+(J.y-$.y)*Ze,de=$.z+(J.z-$.z)*Ze;if(W.x+=(fe+this.yawV*.3+B*.4-W.x)*Math.min(1,e*12),W.y+=(Re-this.pitchV*.3-F*.3-le*.1-ve*.25-this.recoil*.01-W.y)*Math.min(1,e*12),W.z=de+this.recoil*.05,this.gun.rotation.x=this.recoil*.35+le*.9-(1-Ze)*.55,this.gun.rotation.y=(1-Ze)*.25,this.gun.rotation.z=le*.6,this.cyl.position.x=le*.03,this.reloading>0&&(this.reloading-=e,this.reloadStage===0&&this.reloading<1.6&&(this.reloadStage=1,i.reloadClick(1)),this.reloadStage===1&&this.reloading<.5&&(this.reloadStage=2,i.reloadClick(2)),this.reloading<=0)){const ie=Math.min(6-this.ammo,this.reserve);this.ammo+=ie,this.reserve-=ie}this.muzzle.intensity*=Math.pow(5e-4,e),this.muzzle.position.copy(n.position).addScaledVector(n.userData.fwd,.6),this.muzzleSprite.material.opacity*=Math.pow(1e-4,e);const De=n.userData.fwd.clone();this.lightDir.lerp(De,Math.min(1,e*14)).normalize();const Ve=new D(-.1,-.17,-.2).applyQuaternion(n.quaternion).add(n.position);this.flashlight.position.copy(Ve),this.flashTarget.position.copy(Ve).addScaledVector(this.lightDir,6);let ke=this.flashlightOn?1:0;t.flicker>0&&(ke*=Math.random()<.55?.03:.6+Math.random()*.4),this.flashlight.intensity=30*ke,this.bounceRay.set(Ve,this.lightDir);const nt=this.bounceRay.intersectObjects(t.level.bounceList,!1)[0];if(nt&&ke>0){const ie=nt.face?nt.face.normal.clone().transformDirection(nt.object.matrixWorld):nr(0,1,0);ie.dot(this.lightDir)>0&&ie.negate(),this.bouncePos.copy(nt.point).addScaledVector(ie,.35),this.bounce.position.lerp(this.bouncePos,Math.min(1,e*20));const he=Math.max(1,nt.distance);this.bounce.intensity=ke*Math.min(4,20/(he*he))}else this.bounce.intensity=0;this.lens.material.emissiveIntensity=2*ke,this.fill.position.copy(n.position),this.g.gunHolder.position.copy(n.position),this.g.gunHolder.quaternion.copy(n.quaternion),this.gunLight.intensity=.25*ke+(t.lightsOn?.5:0)+this.muzzle.intensity*.05+(t.flashT>0?6:0),this.gunAmb.intensity=t.lightsOn?.5:.12,this.fill.intensity=t.lightsOn?.1:.6,this.flashCharge=Math.min(1,this.flashCharge+e/3.2),this.flashPoint.position.copy(n.position).addScaledVector(n.userData.fwd,.3),this.flashPoint.intensity=t.flashT>0?900*(t.flashT/.18):0,this.hurtT>4&&(this.health=Math.min(100,this.health+e*10)),this.damageFx=Math.max(this.damageFx-e*1.2,(100-this.health)/100*.6)}deathUpdate(e){const t=this.g.camera;this.deathT+=e;const n=Math.min(1,this.deathT/.7);t.position.y+=(this.pos.y+.12-t.position.y)*Math.min(1,e*6),t.rotation.z+=(1.35-t.rotation.z)*Math.min(1,e*5);const i=this.deathFrom,s=Math.atan2(-(i.x-this.pos.x),-(i.z-this.pos.z));t.rotation.y+=(s-t.rotation.y)*e*2*n,t.rotation.x+=(.15-t.rotation.x)*e*2,t.updateMatrixWorld(),t.getWorldDirection(t.userData.fwd),this.gun.visible=!1,this.flashlight.intensity=Math.random()<.2?0:30}respawn(e,t){this.pos.copy(e),this.yaw=t,this.pitch=0,this.vel.set(0,0,0),this.health=100,this.dead=!1,this.gun.visible=!0,this.damageFx=0,this.reloading=0,this.stamina=1,this.flashlightOn=!0,this.flashCharge=1}}const rt=(r=0,e=0,t=0)=>new D(r,e,t),_s=-3,Py=`
<p class="date">12 de agosto de 1961</p>
<p>O doutor de Curvelo disse que o menino não passa desta semana. O Antônio tem seis anos e já não abre os olhos. Fui na encruzilhada do jeito que a minha mãe ensinou.</p>
<p class="date">13 de agosto de 1961</p>
<p>Ele veio. É alto e não tem rosto. Disse que cura o menino se eu der outro em troca. Eu prometi o primeiro neto, que nem existia ainda. Deus me perdoe, eu escolhi.</p>
<p class="date">1978</p>
<p>O Tiago nasceu e não chorou. Nunca chorou. O moço disse que vem buscar quando ele fizer vinte e cinco anos. Disse que dívida não morre. Passa.</p>
<p class="date">1998 (letra tremida)</p>
<p>Estou indo e ele ainda vem toda noite. Diz que paguei pouco. Que agora quer os juros, a família inteira. Se alguém achar isto: queima o altar. O fogo fecha a porta. Mas ele vai querer quem acender.</p>
<p class="blood">QUEM ACENDE, PAGA.</p>`;class Ly{constructor(e){this.G=e,this.flags={},this.timers=[],this.gen=0,this.cur=null,this.t=0,this.hasFuse=!1,this.hasKey=!1;const t=this.steps={},n=e,i=()=>n.level,s=()=>n.player,o=()=>n.audio;t.arrive={cp:{pos:rt(7.2,0,-9),yaw:Math.PI},enter:a=>{e.lightsOn=!1,i().props.car.sirenOn=!0,i().props.doors.front.target=.12,i().props.doors.front.locked=!1,e.mother.show(!1),e.mother.setState("hidden"),this.placeFather(),e.tensionBase=.05,this.after(1.5,()=>e.objective("Verificar a residência dos Vasconcelos")),this.after(3,()=>e.say("SD SILVA","Duarte, a central confirmou. Ninguém atende nesse endereço desde sábado.",4.2,"radio")),this.after(8,()=>e.say("SD SILVA","O vizinho disse que ouviu gritaria... e uma menina cantando a noite inteira.",4.5,"radio")),this.after(13.5,()=>e.say("SD SILVA","Vou ficar aqui na viatura esperando o reforço. Qualquer coisa, chama.",4,"radio")),this.after(26,()=>{this.cur==="arrive"&&(o().thunder(.7),e.lightning())})},update:()=>{const a=s().pos;!this.flags.calledOut&&a.z>-3&&(this.flags.calledOut=!0,e.say("VOCÊ","Polícia Militar! Dona Lúcia? Seu Antônio?",2.8,"self"),this.after(3.2,()=>o().creak(rt(4,2.6,3),1.2,.6,.7))),i().room(a.x,a.z)==="sala"&&this.go("sala")}},t.sala={enter:()=>{e.objective("Procurar os moradores"),e.tensionBase=.12,this.after(2.5,()=>e.say("VOCÊ","Meu Deus... que cheiro é esse.",2.6,"self")),this.after(25,()=>{this.flags.needPower||(e.objective("Encontrar o quadro de luz"),this.flags.needPower=!0)})},update:()=>{}},t.phone={cp:{pos:rt(12.5,0,1.6),yaw:Math.PI/2},enter:a=>{e.lightsOn=!1,this.hasFuse=!1,e.mother.show(!1),e.mother.hp=3,e.mother.setState("hidden"),this.placeFather(),e.tensionBase=.2,e.objective("Atender o telefone (sala)"),this.ring&&this.ring.stop(),this.ring=o().loop("phone",i().props.phone.pos,1.3),this.flags.phoneAnswered=!1},update:()=>{const a=i().props.phone;if(this.ring&&a.handset){const l=e.time%3.6<1.1;a.handset.position.y=.145+(l?Math.random()*.004:0),a.handset.rotation.z=l?(Math.random()-.5)*.04:0}}},t.fuse={cp:{pos:rt(1.6,0,3.4),yaw:-Math.PI/2},enter:a=>{e.lightsOn=!1,this.hasFuse=!1,e.mother.show(!1),e.mother.setState("hidden"),e.mother.hp=3,this.placeFather(),i().props.fuseItem.visible=!0,i().props.fuseI.enabled=!0,e.tensionBase=.32,this.flags.ghostReady=!0,e.camera.position,o().duck(.25,1.5),this.after(a?.5:2.2,()=>{const l=s().pos;o().creak(rt(l.x,2.75,l.z),1.6,.9,.6),e.ceilingDust(l.x+.3,l.z-.2,60)}),this.after(a?2:4.2,()=>{const l=s().pos;e.bloodDrip(l.x+.45,l.z+.25)}),this.after(7,()=>{o().duck(1,4),e.say("VOCÊ","Tem alguém no forro...",2.4,"self")}),this.after(10,()=>e.say("VOCÊ","O fusível. O Seu Antônio deve ter guardado no quarto.",3.4,"self")),this.after(10.5,()=>e.objective("Procurar um fusível no quarto do casal")),this.after(14,()=>{for(let l=0;l<10;l++)setTimeout(()=>o().skitter(rt(4-l*.2,2.85,3+l*.45),.3,.55),l*220);e.ceilingDust(3.5,4.5,30)})},update:a=>{const l=s().pos,c=i().room(l.x,l.z),u=e.camera.userData.fwd;if(c==="hall"&&!this.flags.mimic){this.flags.mimic=!0;let m=0;const v=()=>{if(this.cur!=="fuse"||m++>5)return;const g=s().pos;if(Math.hypot(s().vel.x,s().vel.z)>.4){const x=e.camera.userData.fwd;o().footstep("wood",rt(g.x-x.x*2.6,.05,g.z-x.z*2.6),.6)}setTimeout(v,560)};setTimeout(v,900)}if(c==="hall"&&!this.flags.glimpse&&this.flags.mimic&&l.x>7&&u.x<-.85&&Math.abs(u.y)<.4&&(this.flags.glimpse=!0,this.glimpse={t:0},e.mother.toCeiling(1,6.5,"ceiling"),e.mother.yaw=0,o().skitter(rt(1.2,2.6,7),.8,.9)),this.glimpse){this.glimpse.t+=a;const m=this.glimpse.t;e.mother.pos.set(1+m*.5,2.68,6.4+m*3.2),e.mother.yaw=.2,e.mother.pose(e.time,1),e.mother.sync(),m>.6&&(e.mother.show(!1),e.mother.setState("hidden"),this.glimpse=null,this.after(1.2,()=>e.say("VOCÊ","Que porra foi essa...",2,"self")))}const h=e.father,f=h.P,d=h.pos.clone().setY(1.7);if(h.active&&h.state==="idle"&&!this.flags.fatherTurned){if(this.knockT=(this.knockT??1)-a,this.knockT<=0){this.knockT=1.9+Math.random()*.3,this.knockAnim=0;const m=o().dest(rt(5.75,1.75,11.75),{verb:.7,gain:1.1});o().tone(m,{f:95,fEnd:55,dur:.18,peak:1}),o().noiseBurst(m,{dur:.06,type:"lowpass",f:900,peak:.7,buf:o().brown})}if(this.knockAnim!==void 0){this.knockAnim+=a;const m=this.knockAnim;f.spine.rotation.x=.12+(m<.12?m/.12:Math.max(0,1-(m-.12)/.6))*.22,f.neck.rotation.x=.35+(m<.12?m/.12:Math.max(0,1-(m-.12)/.6))*.35}}if(!this.flags.sawFather&&c==="casal"&&h.isSeen()&&(this.flags.sawFather=!0,e.tensionBase=.45,this.after(.6,()=>e.say("VOCÊ","Seu Antônio? ...O senhor tá ferido?",3,"self"))),this.flags.sawFather&&!this.flags.fatherTurned&&Math.hypot(l.x-h.pos.x,l.z-h.pos.z)<3.1&&(this.flags.fatherTurned=!0,this.headTurn=0,f.spine.rotation.x=.12,f.neck.rotation.x=.35,this.after(1.4,()=>{o().boneCrack(d,3),o().play("groanM",d,{vol:1.2,verb:.5})})),this.headTurn!==void 0&&this.headTurn<1){(this.headTurn>0||this.stepT>0)&&(this.headTurn=Math.min(1,this.headTurn+a/3.2));const m=Math.max(0,(this.headTurn-.35)/.65);f.head.rotation.y=Math.PI*(m<1?m*m*(3-2*m):1)*.98,m>.45&&!this.flags.turnCrack&&(this.flags.turnCrack=!0,o().boneCrack(d,2)),this.headTurn>=1&&o().whisper(d,2.5,.8)}if(this.hasFuse&&!this.flags.scared){this.fuseT=(this.fuseT||0)+a;const m=rt(4.35,1.2,11.65),v=e.camera.position,g=m.clone().sub(v).normalize();this.fuseT>.9&&u.dot(g)<-.1&&(this.flags.scared=!0,e.father.show(!1),e.father.setState("idle"),this.faceScare(()=>this.go("fight1")))}}},t.fight1={cp:{pos:rt(3,0,9.3),yaw:0},enter:a=>{if(e.lightsOn=!1,this.hasFuse=!0,i().props.fuseItem.visible=!1,i().props.fuseI.enabled=!1,e.father.show(!1),e.father.setState("idle"),e.objective("SOBREVIVA. Leve o fusível até o quadro de luz",!0),e.tensionBase=.55,e.mother.fleeTo=rt(15.3,0,7),a)e.mother.hunt(14.5,7);else{const l=s().pos;e.mother.hunt(l.x,l.z),e.mother.retreatTo=rt(13,0,7),e.mother.setState("ceilRetreat"),e.mother.atkCD=3}e.mother.onFlee=()=>{e.tensionBase=.25,this.after(1.5,()=>e.say("SD SILVA","Duarte! Ouvi disparos! Duarte, responde!",3.2,"radio")),this.after(5,()=>e.say("VOCÊ","Uma mulher... andando no teto, Silva. No teto.",3.6,"self")),this.after(9,()=>e.say("SD SILVA","Sai daí. Eu tô chamando o reforço de novo.",3,"radio")),this.after(10,()=>{this.cur==="fight1"&&e.objective("Recolocar o fusível no quadro de luz (cozinha)")})}},update:()=>{}},t.power={cp:{pos:rt(13,0,1.4),yaw:Math.PI},enter:a=>{e.lightsOn=!0,this.hasFuse=!1,i().props.fuse.led.material.emissiveIntensity=3,e.father.show(!1),e.father.setState("idle"),e.mother.show(!1),e.mother.setState("hidden"),i().props.doors.front.locked=!1,i().props.doors.front.target=.12,e.tensionBase=.1,a||o().powerOn(rt(13.5,1.5,.2)),e.objective("Sair da casa"),this.after(2.5,()=>e.say("SD SILVA","Duarte, a ponte do Ribeirão caiu. O reforço só chega de manhã.",3.8,"radio")),this.after(6.8,()=>e.say("SD SILVA","Sai dessa casa. Agora.",2.2,"radio")),this.flags.doorSlammed=!1},update:()=>{const a=s().pos;if(!this.flags.doorSlammed&&a.z<2.2&&a.z>0&&a.x>4.3&&a.x<7.6){this.flags.doorSlammed=!0;const l=i().props.doors.front;l.slam(),l.locked=!0,l.lockLabel="Não abre",l.onLocked=()=>e.say("VOCÊ","Tem alguma coisa segurando do outro lado.",2.6,"self"),o().sting(),e.flickerBulbs(1.5),this.after(1.8,()=>e.say("VOCÊ","Não... não, não, não.",2.2,"self")),this.after(5,()=>o().knock(rt(5.9,1.3,-.5),3)),this.after(7.5,()=>e.say("SD SILVA","Duarte... eu tô vendo você pela janela da cozinha. Por que você tá parada aí, olhando pra mim?",5.5,"radio")),this.after(13.5,()=>{e.objective("Encontrar outra saída"),i().props.underDoor.visible=!0,this.drip=o().loop("drip",rt(8,.5,10.5),1),this.hum=o().loop("hum",rt(15,1,10.8),.9),this.showClara(!0)}),this.after(14,()=>{e.tensionBase=.3})}if(this.flags.doorSlammed&&!this.flags.tub&&Math.hypot(a.x-7.05,a.z-11.2)<1.7&&(this.flags.tub=!0,this.tubScare()),this.flags.doorSlammed&&!this.flags.mirror&&i().room(a.x,a.z)==="banheiro"&&a.x>8.6&&e.camera.userData.fwd.x>.75&&(this.flags.mirror=!0,this.mirrorScare()),this.clara&&this.clara.root.visible&&!this.flags.claraTalk&&Math.hypot(a.x-15.2,a.z-10.6)<2.6&&i().room(a.x,a.z)==="kid"){this.flags.claraTalk=!0,this.hum&&(this.hum.stop(),this.hum=null);const l=rt(15.1,.9,10.8);e.tensionBase=.4,this.after(1.2,()=>e.say("CLARA","Você demorou, tia.",2.2,"girl",l)),this.after(3.8,()=>e.say("CLARA","A vó prometeu o tio Tiago pro moço. Pra curar o papai, quando ele era pequeno.",5,"girl",l)),this.after(9.2,()=>e.say("CLARA","Mas o moço cobra juros. Agora ele quer todo mundo.",3.6,"girl",l)),this.after(13.2,()=>e.say("CLARA","A chave do porão tá no chão. Queima as coisas da vó.",3.6,"girl",l)),this.after(14.5,()=>{i().props.key.visible=!0,i().props.keyI.enabled=!0,e.objective("Pegar a chave do porão"),o().pickup()})}}},t.blackout={cp:{pos:rt(13,0,7.2),yaw:0},enter:a=>{this.hasKey=!0,i().props.key.visible=!1,i().props.keyI.enabled=!1,e.lightsOn=!1,i().props.ceilingHands.visible=!0,i().props.underDoor.visible=!0,i().props.doors.front.locked=!0;const l=i().props.doors.dBase;if(l.lockLabel="Destrancar com a chave",l.onLocked=()=>{l.locked=!1,l.set(1),o().pickup(),e.objective("Descer ao porão")},e.objective("Abrir o porão (fim do corredor)"),e.tensionBase=.45,a)this.showClara(!1);else{o().powerOff(),e.flickerBulbs(.4);const c=this.clara;c&&(c.yank=.001,o().scream(rt(15.2,1.2,10.8),{pitch:1.9,dur:1.6,vol:1})),o().sting()}e.mother.hp=3,e.mother.fleeTo=rt(1,0,7),e.mother.onFlee=()=>this.after(14,()=>{this.cur==="blackout"&&this.motherReturn()}),this.after(a?3:4.5,()=>{this.cur==="blackout"&&this.motherReturn()}),e.father.show(!0),e.father.headTurned=!0,e.father.idlePose(),e.father.place(1.2,0,7,Math.PI/2),e.father.setState("hunt")},update:()=>{s().pos.x>16.4&&this.go("basement")}},t.basement={cp:{pos:rt(20.6,_s,7),yaw:-Math.PI/2},enter:a=>{e.mother.show(!1),e.mother.setState("hidden"),e.father.show(!1),e.father.setState("idle"),e.lightsOn=!1;const l=i().props.doors.dBase;l.locked=!1,a?(l.target=0,l.open=0,l.locked=!0,l.lockLabel="Emperrada",l.onLocked=null):this.after(.6,()=>{l.slam(),l.locked=!0,l.lockLabel="Emperrada",l.onLocked=null,o().sting(!1)}),e.objective("Investigar o porão"),e.tensionBase=.35,i().props.diaryI.enabled=!0,i().props.burnI.enabled=!1,this.flags.diaryRead=!1,this.basementLoops()},update:()=>{const a=s().pos;!i().props.altar.lit&&a.x>21.2&&(i().props.altar.lit=!0,o().noiseBurst(o().dest(rt(27,_s+1,6)),{dur:.6,type:"lowpass",f:800,peak:.6,buf:o().pink}),this.after(.8,()=>e.say("VOCÊ","Quem acendeu essas velas...?",2.6,"self")),this.after(4,()=>{this.flags.diaryRead||e.objective("Examinar o altar")}))}},t.ritual={enter:()=>{const a=i().props.fire;a.g.visible=!0,a.level=0,i().props.altar.lit=!1,this.fire=o().loop("fire",rt(27.3,_s+1,6),1.3),e.objective("SOBREVIVA ATÉ O ALTAR QUEIMAR",!0),e.tensionBase=.7,o().riser(2.5),this.after(2.6,()=>{e.credor.emerge(21.6,11.2),e.shake(.8),o().sting(),e.flickerT=3}),i().props.wrapped.forEach(l=>l.userData.spin=0)},update:a=>{const l=i().props.fire;l.level=Math.min(1,l.level+a/38),e.credor.speed=1.4+l.level*1.1,i().props.wrapped.forEach((c,u)=>{c.userData.spin+=a*(.4+l.level*2)*(u%2?1:-1)}),l.level>=1&&e.credor.state!=="die"&&(e.credor.die(),e.shake(1.2),o().sting(),this.after(4.2,()=>this.go("escape")))}},t.escape={cp:{pos:rt(24.5,_s,6.5),yaw:-Math.PI/2+Math.PI},enter:a=>{e.credor.show(!1);const l=i().props.fire;l.g.visible=!0,l.level=.6,a&&(this.fire=o().loop("fire",rt(27.3,_s+1,6),1.1));const c=i().props.doors.dBase;c.locked=!1,c.set(1,!1),o().doorSlam(c.pos);const u=i().props.doors.front;u.locked=!1,u.set(1,!1),e.objective("SAIA DA CASA",!0),e.tensionBase=.55,this.quakeT=2,e.mother.hp=99,e.mother.show(!0),e.mother.place(2,0,7,Math.PI/2),e.mother.setState("chase"),e.mother.onFlee=null,e.father.show(!0),e.father.place(10.5,0,3,0),e.father.setState("hunt"),this.after(1,()=>e.say("VOCÊ","Silva! Silva, liga a viatura!",2.4,"self"))},update:a=>{if(this.quakeT-=a,this.quakeT<=0){this.quakeT=3+Math.random()*3,e.shake(.5),o().growl(s().pos.clone().setY(-1),2.5,.8),e.flickerT=.8;const c=i().doors[Math.floor(Math.random()*i().doors.length)];!c.locked&&c!==i().props.doors.front&&c!==i().props.doors.dBase&&(c.target>.5?c.slam():c.set(1))}e.mother.hp<96&&(e.mother.hp=99,e.mother.stun=1.6),s().pos.z<-4.5&&this.go("ending")}},t.ending={enter:()=>{e.objective(""),e.mother.show(!1),e.father.show(!1),e.mother.setState("hidden"),e.father.setState("idle"),s().frozen=!0,e.tensionBase=.2,i().props.car.sirenOn=!1,i().props.doors.front.slam(),o().radioBeep(),this.after(1.5,()=>e.say("SD SILVA","Duarte? Duarte, se você tiver ouvindo, responde.",3.6,"radio")),this.after(5.5,()=>e.say("SD SILVA","Você entrou nessa casa na sexta-feira. Hoje é segunda.",4,"radio")),this.after(10,()=>e.say("SD SILVA","A gente achou a viatura. Não tem ninguém aqui fora, Duarte.",4,"radio")),this.after(10.5,()=>{this.turnBack=!0}),this.after(13.5,()=>{e.endingFigures(),e.lightning(),o().thunder(.4),o().sting()}),this.after(17.5,()=>{e.lightning(),o().thunder(.6)}),this.after(19.5,()=>e.finish())},update:a=>{if(this.turnBack){const l=s();let c=Math.PI-l.yaw;for(;c>Math.PI;)c-=Math.PI*2;for(;c<-Math.PI;)c+=Math.PI*2;l.yaw+=c*a*1.2,l.pitch+=(.05-l.pitch)*a}}}}after(e,t){this.timers.push({t:e,fn:t,gen:this.gen})}go(e,t=!1){this.cur=e,this.stepT=0;const n=this.steps[e];n.cp&&(this.checkpoint=e),n.enter(t)}restore(){this.gen++,this.timers=[],this.flags.waitLook=!1;const e=this.G;e.audio.stopAllLoops(),e.startWorldLoops(),this.ring=null,this.fire=null,this.drip=null,this.hum=null;const t=this.steps[this.checkpoint].cp;if(e.player.respawn(t.pos,t.yaw),e.player.ammo=6,e.player.reserve=Math.max(e.player.reserve,12),e.credor.show(!1),e.credor.setState("idle"),this.checkpoint!=="escape"&&this.checkpoint!=="ritual"){const n=e.level.props.fire;n.g.visible=!1}this.checkpoint==="power"&&(this.flags.doorSlammed=!1,this.flags.claraTalk=!1,this.flags.tub=!1,this.flags.mirror=!1,this.clara&&(this.clara.root.visible=!1),e.level.props.key.visible=!1,e.level.props.keyI.enabled=!1),this.go(this.checkpoint,!0)}update(e){this.stepT+=e;for(const n of[...this.timers]){if(n.gen!==this.gen){this.timers.splice(this.timers.indexOf(n),1);continue}n.t-=e,n.t<=0&&(this.timers.splice(this.timers.indexOf(n),1),n.fn())}const t=this.steps[this.cur];if(t&&t.update&&t.update(e),this.updateScare(e),this.clara&&this.clara.yank){this.clara.yank+=e;const n=this.clara.root;n.position.y+=e*(2+this.clara.yank*14),this.clara.armL.rotation.x=-2.9,this.clara.armR.rotation.x=-2.9,n.position.y>3&&(n.visible=!1,this.clara.yank=0,this.G.audio.bodyFall(rt(15,2.7,10.8)))}}placeFather(){const e=this.G.father;this.headTurn=void 0,this.knockAnim=void 0,this.flags.fatherTurned=!1,this.flags.turnCrack=!1,e.show(!0),e.headTurned=!1,e.idlePose(),e.setState("idle"),e.place(5.5,0,11.5,Math.PI/4)}showClara(e){const t=this.G;if(!this.clara){this.clara=bi(t.cmats,{h:1.1,skin:t.cmats.childSkin,dress:t.cmats.childDress,hair:!0,hairLen:.45,mouthOpen:.3}),t.scene.add(this.clara.root);const n=this.clara;n.root.position.set(15.15,0,10.8),n.root.rotation.y=Math.PI/2,n.hips.position.y=.48,n.legL.rotation.x=-1.5,n.legR.rotation.x=-1.5,n.shinL.rotation.x=1.5,n.shinR.rotation.x=1.5,n.armL.rotation.set(-.4,0,.1),n.armR.rotation.set(-.4,0,-.1),n.foreL.rotation.x=-.6,n.foreR.rotation.x=-.6,n.neck.rotation.x=.35}this.clara.root.visible=e,this.clara.root.position.y=0,this.clara.yank=0}dropMother(){const e=this.G;e.mother.drop(),e.audio.scream(e.mother.pos.clone(),{pitch:1.2,dur:1.4,vol:1.3}),e.audio.sting(),e.shake(.4),this.go("fight1")}motherReturn(){const e=this.G,t=e.player.pos,n=[rt(2,0,7),rt(8,0,7),rt(14,0,7),rt(4,0,3),rt(12,0,3)],i=n.filter(s=>Math.hypot(s.x-t.x,s.z-t.z)>5)[0]||n[0];e.mother.hunt(i.x,i.z),e.audio.skitter(rt(i.x,2.6,i.z),1.2,.9)}faceScare(e){const t=this.G,n=t.audio,i=t.camera,s=this.scareBody||(this.scareBody=bi(t.cmats,{h:1.62,thin:.72,armK:1.45,fingerK:2,skin:t.cmats.greySkin,dress:t.cmats.gown,dressLen:.72,hair:!0,hairLen:.8,face:"scare",barelegs:!0}));s.root.rotation.set(0,0,Math.PI),i.add(s.root),s.root.traverse(o=>{o.isMesh&&(o.frustumCulled=!1)}),s.armL.rotation.set(-.5,0,-1.1),s.armR.rotation.set(-.5,0,1.1),s.foreL.rotation.set(-1.2,0,0),s.foreR.rotation.set(-1.2,0,0),s.legL.rotation.set(.2,0,-.3),s.legR.rotation.set(-.1,0,.3),s.hair&&(s.hair.visible=!1),t.player.frozen=!0,n.duck(0,.05),this.scare={t:0,B:s,done:e,hit:!1},n.scream(i.position.clone(),{pitch:1.55,dur:1.4,vol:1.8,rough:1}),n.sting(!0),n.boneCrack(i.position.clone(),4),t.shake(1.3),t.scareFx=1}updateScare(e){const t=this.scare;if(!t)return;const n=this.G,i=n.audio;t.t+=e;const s=t.t,o=t.B;let a=s<.08?(1-s/.08)*1.2:-.06*Math.sin((s-.08)*22)*Math.exp(-(s-.08)*5);s>1.05&&(a=(s-1.05)*(s-1.05)*40),o.root.position.set(.015,1.56+a,-.31),o.neck.rotation.set(Math.sin(s*47)*.12,Math.sin(s*31)*.2,Math.sin(s*59)*.22),o.head.rotation.set(0,Math.sin(s*23)*.15,Math.sin(s*71)*.1),o.armL.rotation.x=-.5+Math.sin(s*40)*.15,o.armR.rotation.x=-.5-Math.sin(s*37)*.15,n.scareFx=s<.1?1:s>1?.7:.12,n.scareExposure=.42,!t.hit&&s>.3&&(t.hit=!0,n.player.damage(14,n.camera.position.clone().add(n.camera.userData.fwd))),s>1.3&&(n.camera.remove(o.root),this.scare=null,n.player.frozen=!1,n.flickerT=1.8,n.scareFx=0,n.scareExposure=0,i.duck(1,2),i.skitter(n.camera.position.clone().setY(2.7),1,1),t.done&&t.done())}tubScare(){const e=this.G,t=e.audio,n=this.tiago||(this.tiago=bi(e.cmats,{h:1.75,skin:e.cmats.greySkin,top:e.cmats.greySkin,face:"tiago"}));e.scene.add(n.root),n.root.position.set(7.05,-.2,11.5),n.root.rotation.y=0,n.root.visible=!0,n.hips.position.y=.3,n.legL.rotation.x=-1.57,n.legR.rotation.x=-1.57,n.spine.rotation.x=-1.2,n.armL.rotation.set(-.3,0,-.5),n.armR.rotation.set(-.3,0,.5),n.neck.rotation.x=.4;const i=new Ce({color:3801088,roughness:.15});n.root.traverse(a=>{a.isMesh&&!a.userData.bloodied&&(a.material=a.material===e.cmats.hole||a.material.vertexColors?a.material:i,a.userData.bloodied=!0)});let s=0;t.splash(rt(7.05,.5,11.5),!0),t.sting(),e.shake(.3);const o=()=>{if(s+=.016,n.spine.rotation.x=-1.2+Math.min(1,s*4)*1.25,n.armR.rotation.x=-.3-Math.min(1,s*3)*1.5,n.head.rotation.z=Math.sin(s*40)*.2,s<1.4)requestAnimationFrame(o);else{t.splash(rt(7.05,.5,11.5));const a=()=>{n.root.position.y-=.03,n.spine.rotation.x-=.04,n.root.position.y>-1.2?requestAnimationFrame(a):n.root.visible=!1};a()}};o()}mirrorScare(){const e=this.G,t=e.audio,n=this.mirrorFig||(this.mirrorFig=bi(e.cmats,{h:1.92,thin:.9,armK:1.35,skin:e.cmats.paleSkin,top:e.cmats.shirt,bottom:e.cmats.pants,face:"father"}));e.scene.add(n.root),n.root.traverse(s=>s.layers.set(2));const i=e.player.pos;n.root.position.set(i.x-.75,0,i.z+.1),n.root.rotation.y=Math.PI/2,n.neck.rotation.z=.5,n.root.visible=!0,t.whisper(rt(i.x-.6,1.6,i.z),1.5,.9),setTimeout(()=>{n.root.visible=!1},1400),setTimeout(()=>t.boneCrack(rt(i.x-.5,1.7,i.z),2),300)}basementLoops(){const e=this.G.audio;this.breath=e.loop("breathing",rt(22.3,_s+1,2.4),.6),e.loop("swing",rt(24.6,_s+1.5,10.6),.8)}event(e){const t=this.G,n=t.audio,i=t.level,s=t.player;switch(e){case"teeth":t.say("VOCÊ","...São dentes. Dentes de gente.",2.8,"self"),this.flags.teeth||(this.flags.teeth=!0,n.sting(!1));break;case"granny":t.say("VOCÊ","Dona Benedita, a avó. Falecida em 98, segundo o vizinho. Quem queimou os olhos da foto?",4.4,"self");break;case"drawings":t.say("VOCÊ",'"O moço." Tem um homem alto em todos os desenhos.',3.4,"self");break;case"switch":if(n.switchClick(rt(4.8,1.2,.1)),t.lightsOn){t.say("VOCÊ","Melhor deixar acesa.",1.8,"self");break}t.say("VOCÊ","Sem energia.",1.6,"self"),this.flags.needPower||(this.flags.needPower=!0,t.objective("Encontrar o quadro de luz"));break;case"fridge":{const o=i.props.fridge;if(o.target>.5){o.target=0,n.latch(rt(8.7,1,.9));break}o.target=1,n.latch(rt(8.7,1,.9)),n.creak(rt(8.7,1,.9),.4,.3,1.3),this.flags.fridge||(this.flags.fridge=!0,setTimeout(()=>{n.sting(!1),t.say("VOCÊ","Ai, meu Deus...",1.8,"self")},600));break}case"drawer":if(this.flags.drawer){t.say("VOCÊ","Vazia.",1.2,"self");break}this.flags.drawer=!0,s.reserve+=12,n.pickup(),t.say("VOCÊ","Munição .38... o Seu Antônio tinha um revólver.",3,"self");break;case"ammoBox":if(this.flags.ammoBox){t.say("VOCÊ","Vazia.",1.2,"self");break}this.flags.ammoBox=!0,s.reserve+=18,n.pickup(),t.say("VOCÊ","Mais munição.",1.6,"self");break;case"fusebox":if(this.hasFuse&&["fuse","fight1"].includes(this.cur)){n.switchClick(rt(13.5,1.5,.2)),t.mother.active&&t.mother.state!=="hidden"&&(t.mother.onFlee=null,t.mother.flee()),this.go("power");break}if(t.lightsOn){t.say("VOCÊ","Funcionando.",1.4,"self");break}this.cur==="sala"||this.cur==="arrive"?(n.latch(rt(13.5,1.5,.2)),t.say("VOCÊ","Tiraram o fusível principal. Alguém queria essa casa no escuro.",3.6,"self"),this.flags.phoneQueued||(this.flags.phoneQueued=!0,this.after(4.5,()=>{(this.cur==="sala"||this.cur==="arrive")&&this.go("phone")}))):t.say("VOCÊ","Falta o fusível.",1.6,"self");break;case"phone":{if(this.cur!=="phone"||this.flags.phoneAnswered){t.say("VOCÊ","Linha muda.",1.4,"self");break}this.flags.phoneAnswered=!0,this.ring&&this.ring.stop(),this.ring=null;const o=i.props.phone;n.latch(o.pos),o.handset&&(o.handset.position.y=.145,o.handset.visible=!1),t.objective(""),this.after(.8,()=>t.say("VOCÊ","Alô? Polícia Militar.",2,"self")),this.after(3.2,()=>t.say("CLARA (telefone)","Tia... é a polícia? Você veio buscar a gente?",3.8,"phone")),this.after(7.4,()=>t.say("VOCÊ","Clara? Clara, onde você tá?",2.4,"self")),this.after(10.2,()=>t.say("CLARA (telefone)","Escondida. A mamãe não gosta quando tem visita.",3.6,"phone")),this.after(14.2,()=>t.say("CLARA (telefone)","Ela tá bem em cima de você agora, tia.",3.2,"phone")),this.after(17.6,()=>t.say("CLARA (telefone)","Não olha.",1.6,"phone")),this.after(19.6,()=>{n.latch(o.pos),n.noiseBurst(n.dest(null),{dur:2.5,f:425,q:30,peak:.12}),o.handset&&(o.handset.visible=!0),this.go("fuse")});break}case"takeFuse":this.hasFuse=!0,i.props.fuseItem.visible=!1,i.props.fuseI.enabled=!1,n.pickup(),t.say("VOCÊ","Um fusível de 30 amperes. Tá ótimo.",2.4,"self");break;case"takeKey":i.props.keyI.enabled=!1,n.pickup(),this.go("blackout");break;case"diary":t.showNote(Py,()=>{!this.flags.diaryRead&&this.cur==="basement"&&(this.flags.diaryRead=!0,i.props.burnI.enabled=!0,i.props.diaryI.enabled=!1,t.objective("Queimar o altar (segure E)"),this.after(1,()=>t.say("VOCÊ","Eu tenho um isqueiro. Que Deus me perdoe também.",3.2,"self")))});break;case"burn":i.props.burnI.enabled=!1,this.go("ritual");break;case"carRadio":{n.radioBeep(),["arrive","sala"].includes(this.cur)?t.say("SD SILVA","Fala, Duarte. Tô aqui. Vai lá dar uma olhada.",2.8,"radio"):t.say("RÁDIO","(estática)",1.5,"radio");break}case"flash":this.flags.ghostReady&&!this.flags.ghostSeen&&t.revealedGhost&&(this.flags.ghostSeen=!0,n.sting(!1),n.whisper(rt(15.3,1.5,7),2,1));break}}}const dt=r=>document.querySelector(r),_n=new URLSearchParams(location.search),un=(r=0,e=0,t=0)=>new D(r,e,t),Is=dt("#c"),ri=new Gx({canvas:Is,antialias:!1,powerPreference:"high-performance",preserveDrawingBuffer:_n.has("shot")});ri.shadowMap.enabled=!0;ri.shadowMap.type=ff;ri.toneMapping=Vc;ri.toneMappingExposure=1;ri.outputColorSpace=Ot;const $t=new Yf;$t.background=new Xe(131846);$t.fog=new th(197638,.05);const en=new wn(80,innerWidth/innerHeight,.05,140);en.userData.fwd=un(0,0,-1);en.userData.up=un(0,1,0);$t.add(en);const ph=new Yf,Sd=new Ye;ph.add(Sd);const bd=new dd(2238522,723206,.3);$t.add(bd);const N=window.G={scene:$t,camera:en,renderer:ri,gunScene:ph,gunHolder:Sd,time:0,dt:0,lightsOn:!1,flashT:0,flicker:0,flickerT:0,sens:Number(_n.get("sens")||1),tensionBase:0,noteOpen:!1,paused:!0,started:!1,godMode:_n.has("god"),exposure:1.4,shakeV:0};N.audio=new m1;N.brightness=1;N.volume=1;N.post=p1(ri,$t,en);{const r=new gd(ph,en);r.clear=!1,r.clearDepth=!0,N.post.composer.insertPass(r,2)}N.ready=(async()=>{N.assets=await yy(ri,e=>{const t=document.querySelector("#loading em");t&&(t.style.width=(e*100).toFixed(0)+"%")}),L1(N.assets),N.assets.env&&($t.environment=N.assets.env,$t.environmentIntensity=.25),N.cmats=D1(),N.level=Ry(N),N.player=new Cy(N),N.mother=new I1(N,N.cmats),N.father=new N1(N,N.cmats),N.credor=new U1(N,N.cmats),N.creatures=[N.mother,N.father,N.credor],N.story=new Ly(N),N.player.setInput(xo),ri.compile($t,en),document.querySelector("#loading").classList.add("hidden");const r=document.querySelector("#start");r.disabled=!1,r.focus()})();N.quality=_n.get("q")||(matchMedia("(pointer: coarse)").matches?"baixa":"alta");let Fc=1;function wd(r){N.quality=r,Fc=Math.min(devicePixelRatio,r==="alta"?2:r==="media"?1.5:1.1)*Number(_n.get("scale")||1),N.post.ao&&(N.post.ao.enabled=r==="alta"),Td()}function Td(){const r=innerWidth,e=innerHeight;ri.setPixelRatio(Fc),ri.setSize(r,e,!1),en.aspect=r/e,en.fov=r/e<1?95:80,en.updateProjectionMatrix(),N.post.setSize(r,e,Fc)}addEventListener("resize",Td);wd(N.quality);const mh=700,gh=new Vt,gn=new Float32Array(mh*3);for(let r=0;r<mh;r++)gn[r*3]=(Math.random()-.5)*10,gn[r*3+1]=Math.random()*3,gn[r*3+2]=(Math.random()-.5)*10;gh.setAttribute("position",new Gt(gn,3));const Jr=new zt({transparent:!0,depthWrite:!1,blending:As,uniforms:{lp:{value:un()},ld:{value:un()},on:{value:1},t:{value:0}},vertexShader:`uniform vec3 lp, ld; uniform float on, t; varying float a;
    void main(){ vec3 p = position; p.x += sin(t*0.3 + position.y*3.0)*0.08; p.y += sin(t*0.2 + position.x*2.0)*0.05;
      vec3 d = p - lp; float dist = length(d); float c = dot(d/dist, ld);
      a = smoothstep(0.86, 0.97, c) * smoothstep(9.0, 0.6, dist) * on;
      vec4 mv = modelViewMatrix * vec4(p,1.0); gl_Position = projectionMatrix * mv; gl_PointSize = clamp(1.6 / -mv.z, 0.8, 2.6); }`,fragmentShader:"varying float a; void main(){ vec2 c = gl_PointCoord-0.5; float r = 1.0 - smoothstep(0.2, 0.5, length(c)); gl_FragColor = vec4(vec3(0.9,0.85,0.75), a*r*0.32); }"}),Ed=new Qf(gh,Jr);Ed.frustumCulled=!1;$t.add(Ed);const Fl=[],Dy=(()=>{const r=document.createElement("canvas");r.width=r.height=64;const e=r.getContext("2d"),t=e.createRadialGradient(32,32,1,32,32,30);t.addColorStop(0,"rgba(0,0,0,1)"),t.addColorStop(.25,"rgba(10,8,6,0.9)"),t.addColorStop(.5,"rgba(40,36,30,0.4)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const n=new Gi(r);return n.colorSpace=Ot,n})();function vh(r,e,t,n,i={}){const s=new oe(new ii(e,e),new Ce({map:r,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,roughness:i.rough??.8,color:i.color??16777215}));if(s.position.copy(t).addScaledVector(n,.004),s.lookAt(t.clone().add(n)),s.rotateZ(Math.random()*6.28),$t.add(s),Fl.push(s),Fl.length>60){const o=Fl.shift();$t.remove(o),o.geometry.dispose(),o.material.dispose()}}N.bulletHole=r=>{const e=r.face?r.face.normal.clone().transformDirection(r.object.matrixWorld):un(0,1,0);vh(Dy,.06,r.point,e),Ad(r.point,e,10127984,10,1.5)};const xh=new po({map:Pa(),transparent:!0,depthWrite:!1}),ur=[];function Ad(r,e,t,n,i){for(let s=0;s<n;s++){const o=new vr(xh.clone());o.material.color.set(t),o.scale.setScalar(.03+Math.random()*.03),o.position.copy(r),$t.add(o);const a=e.clone().multiplyScalar(i*(.3+Math.random())).add(un((Math.random()-.5)*i,(Math.random()-.2)*i,(Math.random()-.5)*i));ur.push({s:o,v:a,life:.5+Math.random()*.5})}}N.spawnBlood=(r,e,t=5898240)=>{Ad(r,e||un(0,1,0),t,16,2.2);const n=N.level.floorY(r.x,r.z);vh(Cn(Math.floor(Math.random()*30),"splat"),.5+Math.random()*.4,un(r.x+(Math.random()-.5)*.4,n+.008,r.z+(Math.random()-.5)*.4),un(0,1,0),{rough:.2,color:t===5898240?16777215:2236962})};N.ceilingDust=(r,e,t=40)=>{for(let n=0;n<t;n++){const i=new vr(xh.clone());i.material.color.set(9076848),i.material.opacity=.6,i.scale.setScalar(.012+Math.random()*.02),i.position.set(r+(Math.random()-.5)*.6,2.66,e+(Math.random()-.5)*.6),$t.add(i),ur.push({s:i,v:un((Math.random()-.5)*.1,-.2-Math.random()*.6,(Math.random()-.5)*.1),life:2.5+Math.random()*2,g:.08})}N.audio.noiseBurst(N.audio.dest(un(r,2.6,e)),{dur:.6,type:"highpass",f:3e3,peak:.12,buf:N.audio.pink})};N.bloodDrip=(r,e)=>{const t=new vr(xh.clone());t.material.color.set(5898240),t.scale.set(.02,.035,1),t.position.set(r,2.65,e),$t.add(t),ur.push({s:t,v:un(0,0,0),life:.72,g:1}),setTimeout(()=>{vh(Cn(77,"splat"),.18,un(r,N.level.floorY(r,e)+.008,e),un(0,1,0),{rough:.15});const n=N.audio.dest(un(r,.1,e));N.audio.tone(n,{f:700,fEnd:1400,dur:.06,peak:.5}),N.audio.noiseBurst(n,{dur:.05,f:2500,q:2,peak:.25})},720)};N.scareFx=0;N.hitMarker=()=>{const r=dt("#cross");r.classList.remove("hit"),r.offsetWidth,r.classList.add("hit")};N.shake=r=>{N.player.shakeAmt=Math.min(1.5,N.player.shakeAmt+r)};N.alertAll=()=>{};N.flickerBulbs=r=>N.level.bulbs.forEach(e=>e.flicker=r*(.6+Math.random()*.6));let Ma=0,kl=18;N.lightning=()=>{Ma=.6,N.level.props.lightning.shadow.needsUpdate=!0,setTimeout(()=>N.audio.thunder(.6+Math.random()*.8),300+Math.random()*1200)};N.onFlash=()=>{N.exposureKick=.35;const r=en,e=r.userData.fwd;N.revealedGhost=!1;for(const t of N.level.reveal){const n=t.getWorldPosition(un());t.isGroup&&(n.y+=1.2);const i=n.distanceTo(r.position),s=n.clone().sub(r.position).normalize();i<13&&s.dot(e)>.7&&N.level.los(r.position,n)&&(t.visible=!0,t.userData.revealT=.35,t===N.level.props.ghost&&(N.revealedGhost=!0))}for(const t of N.creatures){if(!t.active)continue;const n=t.aimPoint().clone(),i=n.distanceTo(r.position),s=n.clone().sub(r.position).normalize();i<11&&s.dot(e)>.5&&N.level.los(r.position,n)&&t.flashed()}N.story.event("flash")};const pt={hud:dt("#hud"),obj:dt("#objective"),objT:dt("#objective span"),subs:dt("#subs"),prompt:dt("#prompt"),ammo:dt("#ammo b"),reserve:dt("#ammo span"),flashBar:dt("#flashc em"),stamp:dt("#stamp"),hold:dt("#hold"),holdBar:dt("#hold i"),note:dt("#note"),noteTxt:dt("#note .txt"),pause:dt("#pause"),dead:dt("#dead"),cards:dt("#cards"),cardsP:dt("#cards p"),title:dt("#title"),black:dt("#black")};let hf=0;N.objective=(r,e=!1)=>{const t=++hf;pt.obj.classList.remove("show"),r&&(setTimeout(()=>{t===hf&&(pt.objT.textContent=r,pt.obj.classList.toggle("urgent",e),pt.obj.classList.add("show"))},400),N.currentObjective=r)};const bs=[];let ys=null;N.say=(r,e,t,n="radio",i=null)=>bs.push({who:r,text:e,dur:t,kind:n,pos:i,at:N.time});function Iy(r){for(ys&&(ys.t-=r,ys.t<=0&&(ys.el.remove(),ys=null));bs.length&&N.time-bs[0].at>7&&bs.length>1;)bs.shift();if(!ys&&bs.length){const e=bs.shift(),t=document.createElement("div");t.className={radio:"radio",girl:"girl",phone:"girl",self:"self"}[e.kind]||"",t.innerHTML=`<span class="line"><span class="who">${e.who}</span>${e.text}</span>`,pt.subs.appendChild(t),ys={el:t,t:e.dur};const n=N.audio,i=e.dur*.82;e.kind==="radio"?(n.radioBeep(),n.voice(null,i,{radio:!0,pitch:105,vol:.5})):e.kind==="phone"?n.voice(N.level.props.phone.pos,i,{radio:!0,child:!0,vol:.5}):e.kind==="girl"?n.voice(e.pos,i,{child:!0,vol:.45}):e.kind==="self"&&n.voice(null,i,{pitch:195,vol:.16})}}let kc=null;N.showNote=(r,e)=>{pt.noteTxt.innerHTML=r,pt.note.classList.remove("hidden"),N.noteOpen=!0,kc=e,N.audio.pickup()};N.closeNote=()=>Va();function Va(){pt.note.classList.add("hidden"),N.noteOpen=!1;const r=kc;kc=null,r&&r()}function Rd(r,e,t=4.2){pt.cards.classList.remove("hidden");let n=0;const i=()=>{if(n>=r.length){pt.cardsP.classList.remove("on"),setTimeout(()=>{pt.cards.classList.add("hidden"),e&&e()},1400);return}pt.cardsP.classList.remove("on"),setTimeout(()=>{pt.cardsP.textContent=r[n++],pt.cardsP.classList.add("on"),setTimeout(i,t*1e3)},900)};i()}const xo={};let Jn=null,Sa=0,Mi=null;const Ny={w:"KeyW",a:"KeyA",s:"KeyS",d:"KeyD",e:"KeyE",r:"KeyR",f:"KeyF",q:"KeyQ",t:"KeyT",shift:"ShiftLeft",arrowup:"ArrowUp",arrowdown:"ArrowDown",arrowleft:"ArrowLeft",arrowright:"ArrowRight"},Cd=r=>{const e=Ny[(r.key||"").toLowerCase()];return e&&e!==r.code?[r.code,e]:[r.code]},Ha=!_n.has("desktop")&&(matchMedia("(pointer: coarse)").matches||_n.has("touch"));N.touch=Ha;document.body.classList.toggle("touch",Ha);const Qr=r=>{if(N.noteOpen){(r==="KeyE"||r==="Escape"||r==="Space")&&Va();return}if(r==="KeyT"){Dd();return}N.paused||N.player.dead||(r==="KeyE"&&Mi&&(Mi.hold?(Jn=Mi,Sa=0):Mi.use()),r==="KeyR"&&N.player.reload(),r==="KeyF"&&N.player.toggleFlashlight(),r==="KeyQ"&&N.player.cameraFlash())};addEventListener("keydown",r=>{if(!N.started)return;const e=Cd(r);e.forEach(t=>xo[t]=!0),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","Tab"].includes(r.code)&&r.preventDefault(),!r.repeat&&Qr(e[e.length-1])});addEventListener("keyup",r=>{Cd(r).forEach(e=>xo[e]=!1),(r.code==="KeyE"||(r.key||"").toLowerCase()==="e")&&(Jn=null)});addEventListener("blur",()=>{for(const r in xo)xo[r]=!1});addEventListener("mousemove",r=>{document.pointerLockElement===Is&&!N.paused&&N.player.look(r.movementX,r.movementY)});Is.addEventListener("mousedown",r=>{if(!(!N.started||N.touch)){if(document.pointerLockElement!==Is){So();return}if(N.noteOpen){Va();return}r.button===0&&N.player.shoot(),r.button===2&&N.player.cameraFlash()}});addEventListener("contextmenu",r=>r.preventDefault());function So(){if(!(N.touch||_n.has("nolock")))try{const r=Is.requestPointerLock();r&&r.catch&&r.catch(()=>Bc())}catch{Bc()}}function Bc(){!N.started||N.finished||N.touch||(N.paused=!0,pt.pause.classList.toggle("hidden",N.player.dead),N.audio.suspend(!0))}document.addEventListener("pointerlockerror",Bc);document.addEventListener("pointerlockchange",()=>{if(!N.started||N.finished||N.touch||_n.has("nolock"))return;const r=document.pointerLockElement===Is;N.paused=!r,pt.pause.classList.toggle("hidden",r||N.player.dead),N.audio.suspend(!r)});const Uy=()=>{pt.pause.classList.add("hidden"),N.touch?(N.paused=!1,N.audio.suspend(!1)):So()};dt("#btnResume").addEventListener("click",Uy);const oo=document.documentElement,_h=!!(oo.requestFullscreen||oo.webkitRequestFullscreen),Pd=()=>!!(document.fullscreenElement||document.webkitFullscreenElement);function Ld(){const r=oo.requestFullscreen||oo.webkitRequestFullscreen;try{const e=r.call(oo,{navigationUI:"hide"});e&&e.catch&&e.catch(()=>{})}catch{}}function Oy(){const r=document.exitFullscreen||document.webkitExitFullscreen;try{const e=r&&r.call(document);e&&e.catch&&e.catch(()=>{})}catch{}}function Dd(){_h&&(Pd()?Oy():Ld(),N.started&&!N.touch&&!N.paused&&So())}const Id=()=>document.querySelectorAll(".fsState").forEach(r=>r.textContent=Pd()?"SAIR DA TELA CHEIA":"ENTRAR EM TELA CHEIA");document.addEventListener("fullscreenchange",Id);document.addEventListener("webkitfullscreenchange",Id);dt("#btnFull2").addEventListener("click",()=>{Dd()});let ao=!Ha&&_h;dt("#btnFull").addEventListener("click",()=>{ao=!ao,dt("#btnFull b").textContent=ao?"LIGADA":"DESLIGADA"});dt("#btnFull b").textContent=ao?"LIGADA":"DESLIGADA";_h||document.body.classList.add("nofs");const Nd=()=>dt("#controls").classList.remove("hidden");dt("#btnControls").addEventListener("click",Nd);dt("#btnControls2").addEventListener("click",Nd);dt("#btnCloseControls").addEventListener("click",()=>dt("#controls").classList.add("hidden"));const yh=(r,e)=>{const t=r.map(n=>dt(n));t.forEach(n=>n.addEventListener("input",()=>{t.forEach(i=>i.value=n.value),e(Number(n.value))}))};yh(["#optSens","#optSens2"],r=>N.sens=r);yh(["#optBright","#optBright2"],r=>N.brightness=r);yh(["#optVol","#optVol2"],r=>{N.volume=r,N.audio.master&&(N.audio.master.gain.value=.9*r)});document.querySelectorAll(".optQ").forEach(r=>{r.value=N.quality,r.addEventListener("change",()=>{wd(r.value),document.querySelectorAll(".optQ").forEach(e=>e.value=r.value)})});pt.dead.addEventListener("click",()=>{pt.dead.classList.add("hidden"),N.story.restore(),N.post.u.blackout.value=0,So()});if(Ha){const r=dt("#stick"),e=dt("#stick i");let t=null,n=null,i=0,s=0,o=0,a=0;const l=N.touchState={x:0,y:0,run:!1},c=dt("#touch");c.addEventListener("touchstart",f=>{for(const d of f.changedTouches)d.target.closest(".tb")||(d.clientX<innerWidth*.42&&t===null?(t=d.identifier,i=d.clientX,s=d.clientY,r.style.left=i+"px",r.style.top=s+"px",r.classList.add("on")):n===null&&(n=d.identifier,o=d.clientX,a=d.clientY));f.preventDefault()},{passive:!1}),c.addEventListener("touchmove",f=>{for(const d of f.changedTouches)if(d.identifier===t){let m=d.clientX-i,v=d.clientY-s;const g=Math.hypot(m,v),p=55;g>p&&(m*=p/g,v*=p/g),l.x=m/p,l.y=v/p,e.style.transform=`translate(${m}px, ${v}px)`}else d.identifier===n&&!N.paused&&(N.player.look((d.clientX-o)*2.2,(d.clientY-a)*2.2),o=d.clientX,a=d.clientY);f.preventDefault()},{passive:!1});const u=f=>{for(const d of f.changedTouches)d.identifier===t&&(t=null,l.x=l.y=0,e.style.transform="",r.classList.remove("on")),d.identifier===n&&(n=null)};c.addEventListener("touchend",u),c.addEventListener("touchcancel",u);const h=(f,d,m)=>{const v=dt(f);v.addEventListener("touchstart",g=>{g.preventDefault(),g.stopPropagation(),v.classList.add("down"),d()},{passive:!1}),v.addEventListener("touchend",g=>{g.preventDefault(),v.classList.remove("down"),m&&m()})};h("#tShoot",()=>{N.paused||N.player.shoot()}),h("#tFlash",()=>Qr("KeyQ")),h("#tUse",()=>Qr("KeyE"),()=>Jn=null),h("#tLight",()=>Qr("KeyF")),h("#tReload",()=>Qr("KeyR")),h("#tRun",()=>{l.run=!l.run,dt("#tRun").classList.toggle("active",l.run)}),h("#tPause",()=>{N.started&&(N.paused=!0,pt.pause.classList.remove("hidden"),N.audio.suspend(!0))}),dt("#note").addEventListener("touchstart",()=>N.noteOpen&&Va())}N.startWorldLoops=()=>{const r=N.audio;r.loop("flies",un(5.5,.9,4.2),.9),N.level.props.tv.on&&r.loop("tv",un(3.1,.75,2.2),.7)};N.onDeath=()=>{N.audio.sting(),N.objective(""),setTimeout(()=>{N.audio.bodyFall(N.player.pos)},500),setTimeout(()=>{pt.dead.classList.remove("hidden")},3200)};N.endingFigures=()=>{const r=new Un(16719888,14,9,1.5);r.position.set(6,1.6,3),$t.add(r),N.lightsOn=!1;const e=(t,n,i)=>{const s=bi(N.cmats,{skin:N.cmats.ghost,top:N.cmats.ghost,bottom:N.cmats.ghost,...i});return s.root.position.set(t,0,n),s.root.rotation.y=Math.PI,$t.add(s.root),s};e(2.4,.7,{h:1.62,dress:N.cmats.ghost,hair:!0,hairLen:.7}),e(3,.8,{h:1.92}).neck.rotation.z=.5,e(10.6,.7,{h:1.1,dress:N.cmats.ghost,hair:!0,hairLen:.4}),e(11.2,.75,{h:1.75}),e(5.9,.4,{h:1.68,hair:!0,hairLen:.25}),e(5.9,1.6,{h:3,thin:.6,armK:1.75,faceless:!0,longHead:1.9,longNeck:1.9}),N.level.props.doors.front.set(1,!0)};N.finish=()=>{N.finished=!0,pt.black.classList.remove("hidden"),pt.black.style.opacity=1,N.audio.stopAllLoops(),setTimeout(()=>{pt.hud.classList.add("hidden"),Rd(["Em 17 de março de 2003, a viatura 2207 foi encontrada vazia em frente à residência dos Vasconcelos.",`Nenhum membro da família foi localizado.
O Soldado Silva e a Cabo Inês Duarte também não.`,`A câmera corporal foi encontrada no porão, sob as cinzas do altar.

Ainda estava gravando.`],()=>{document.exitPointerLock(),pt.title.classList.remove("hidden"),pt.title.querySelector(".file").textContent="FIM DA GRAVAÇÃO · OBRIGADO POR JOGAR",pt.title.querySelector(".warn").textContent="Texturas e modelos: Poly Haven e ambientCG (CC0). Cabeça escaneada: Lee Perry-Smith por Infinite-Realities (CC BY 3.0). Sons: Oculus Audio Pack 01 por Oculus VR, LLC (CC BY 4.0). Corpo: Reallusion iClone (3D Warehouse). Motor: three.js.",pt.title.querySelector("button").textContent="JOGAR NOVAMENTE",pt.title.querySelector("button").onclick=()=>location.reload()},5)},1600)};dt("#start").addEventListener("click",Ud);function Ud(){if(!N.player)return;N.audio.init(),N.audio.master&&(N.audio.master.gain.value=.9*N.volume),N.assets.sfxRaw&&!N.samplesLoading&&(N.samplesLoading=!0,N.audio.loadSamples(N.assets.sfxRaw)),pt.title.classList.add("hidden"),ao&&!_n.has("nolock")&&Ld(),So();const r=_n.get("step"),e=()=>{N.started=!0,N.paused=!N.touch&&!_n.has("nolock")&&document.pointerLockElement!==Is,pt.hud.classList.remove("hidden"),N.touch&&dt("#touch").classList.remove("hidden"),N.startWorldLoops(),r&&N.story.steps[r]?(N.story.checkpoint=r,N.story.restore()):N.story.go("arrive"),N.paused&&pt.pause.classList.remove("hidden")};r||_n.has("skip")?e():Rd([`Zona rural de Santa Luzia do Paraopeba, Minas Gerais.
14 de março de 2003 — 02:47`,"A família Vasconcelos — Antônio, Lúcia, o filho Tiago e a pequena Clara — não é vista há três dias.",`A Cabo Inês Duarte, da Polícia Militar, foi enviada para verificar a residência.

Esta é a gravação da câmera corporal dela.`],e)}_n.has("auto")&&N.ready.then(Ud);const Fy=new md,ky=new Date(2003,2,14,2,47,13).getTime();let fa=0,Bl=0;function Od(){requestAnimationFrame(Od);let r=Math.min(Fy.getDelta(),.05);_n.has("fixeddt")&&(r=1/30),r*=Number(_n.get("speed")||1),N.started&&!N.paused&&!N.noteOpen?zy(r):N.started||By(r),N.started&&Vy(r)}function By(r){N.time+=r}function zy(r){N.time+=r,N.dt=r;const e=N.player,t=N.level,n=N.audio,i=N.post.u;e.update(r),N.story.update(r);for(const p of N.creatures)p.update(r);t.update(r,N.time),N.flashT>0&&(N.flashT-=r);for(const p of t.reveal)p.userData.revealT>0?(p.userData.revealT-=r,p.visible=p.userData.revealT>0):p.visible=!1;let s=99;for(const p of N.creatures)p.active&&p.state!=="idle"&&p.state!=="hidden"&&p.state!=="die"&&(s=Math.min(s,p.pos.distanceTo(e.pos)));const o=pi.clamp(1-s/4.5,0,1);N.combat=N.creatures.some(p=>p.active&&["chase","hunt","drop","emerge","flee"].includes(p.state)&&p.pos.distanceTo(e.pos)<14)||N.mother.state==="ceiling"&&N.mother.active,N.flickerT=Math.max(0,N.flickerT-r),N.flicker=o>.5&&Math.random()<o*r*1.5?.15:Math.max(0,N.flicker-r),N.flickerT>0&&(N.flicker=.2),N.scareFx>.5&&(N.flicker=.3);const a=N.player;N.scareExposure&&(a.flashlight.intensity*=.5);const l=Math.min(1,N.tensionBase+o*.6);e.fear+=(Math.max(l,(100-e.health)/100)*.9-e.fear)*Math.min(1,r*1.5);const c=t.room(e.pos.x,e.pos.z);n.update(r,{inside:t.insideAt(e.pos.x,e.pos.z),tension:l,fear:e.fear,exertion:1-e.stamina,lights:N.lightsOn,basement:c==="porao"||c==="escada"}),n.setListener(en),kl-=r,kl<=0&&!["porao","escada"].includes(c)&&(kl=25+Math.random()*30,N.lightning());const u=t.props.lightning;if(Ma>0){Ma-=r;const p=Ma;u.intensity=(p>.45||p>.2&&p<.3?6:0)*(Math.random()*.5+.5)}else u.intensity=0;const h=t.insideAt(e.pos.x,e.pos.z);let f=N.lightsOn&&h>.5?.95:e.flashlightOn?1.3:2.1;const d=e.bounce.intensity>0?e.bounce.position.distanceTo(en.position):9;e.flashlightOn&&(f*=pi.lerp(N.lightsOn&&h>.5?.6:.45,1,pi.clamp((d-.5)/2.5,0,1)));for(const p of N.creatures)if(p.active&&p.state!=="hidden"){const x=p.aimPoint().distanceTo(en.position);x<2.2&&(f*=pi.lerp(.42,1,pi.clamp((x-.5)/1.7,0,1)))}N.exposure+=(f-N.exposure)*Math.min(1,r*(N.exposure>f?4:1.1)),N.flashT>0&&(N.exposure=.45),N.scareExposure&&(N.exposure=N.scareExposure),i.exposure.value=N.exposure*N.brightness,i.grain.value=.045+(N.exposure-.9)*.05,i.flash.value=Math.max(0,N.flashT/.18)*.85,i.damage.value=e.damageFx,i.interference.value=N.scareExposure?N.scareFx:Math.max(o*o*.3,e.dead?.8:0,N.flickerT>0?.2:0,N.scareFx*.9),$t.environmentIntensity=h>.5?N.lightsOn?.35:.12:.5,i.saturation.value=N.lightsOn?.8:.6,bd.intensity=h>.5?.12:.3,$t.fog.density=c==="porao"?.07:h>.5?.045:.035,Jr.uniforms.t.value=N.time,Jr.uniforms.on.value=e.flashlightOn&&!N.lightsOn?1:.25,Jr.uniforms.lp.value.copy(e.flashlight.position),Jr.uniforms.ld.value.copy(e.lightDir);const m=en.position;for(let p=0;p<mh;p++){const x=p*3;gn[x]-m.x>5?gn[x]-=10:gn[x]-m.x<-5&&(gn[x]+=10),gn[x+2]-m.z>5?gn[x+2]-=10:gn[x+2]-m.z<-5&&(gn[x+2]+=10),gn[x+1]-m.y>2?gn[x+1]-=3.5:gn[x+1]-m.y<-1.5&&(gn[x+1]+=3.5),gn[x+1]-=r*.02}gh.attributes.position.needsUpdate=!0;for(let p=ur.length-1;p>=0;p--){const x=ur[p];x.life-=r,x.v.y-=9.8*(x.g??1)*r,x.s.position.addScaledVector(x.v,r),x.s.material.opacity=Math.min(x.s.material.opacity,Math.max(0,x.life*2)),x.life<=0&&($t.remove(x.s),x.s.material.dispose(),ur.splice(p,1))}if(t.props.mirror.visible=c==="banheiro"||c==="casal"&&!1,Mi=null,!e.dead&&!e.frozen){let p=0;for(const x of t.interact){if(x.enabled===!1||x.pos.distanceTo(en.position)>(x.range||1.9))continue;const C=x.pos.clone().sub(en.position).normalize().dot(en.userData.fwd);C<.86||C<p||t.los(en.position,x.pos)&&(p=C,Mi=x)}}if(Jn){if(Jn!==Mi)Jn=null;else if(Sa+=r,Sa>=Jn.hold){const p=Jn;Jn=null,p.use()}}pt.prompt.textContent=Mi?N.touch?`[USAR] ${Mi.label}`:`[E] ${Mi.label}`:"",pt.hold.style.display=Jn?"block":"none",Jn&&(pt.holdBar.style.width=Sa/Jn.hold*100+"%"),pt.ammo.textContent=e.reloading>0?"—":e.ammo,pt.reserve.textContent="/ "+e.reserve,pt.flashBar.style.width=e.flashCharge*100+"%";const v=new Date(ky+N.time*1e3),g=p=>String(p).padStart(2,"0");pt.stamp.textContent=`${g(v.getDate())}/${g(v.getMonth()+1)}/${v.getFullYear()} ${g(v.getHours())}:${g(v.getMinutes())}:${g(v.getSeconds())}`,Iy(r)}function Vy(r){N.player.dead&&(N.post.u.blackout.value=Math.min(1,Math.max(0,(N.player.deathT-1.8)/1.2))),N.post.render(r,N.time),_n.has("fps")&&(fa+=r,Bl++,fa>1&&(console.log("fps",(Bl/fa).toFixed(1),ri.info.render.calls),fa=0,Bl=0))}Od();N.lookAt=(r,e,t)=>{const n=N.player.pos,i=n.y+N.player.height;N.player.yaw=Math.atan2(-(r-n.x),-(t-n.z)),N.player.pitch=Math.atan2(e-i,Math.hypot(r-n.x,t-n.z))};
