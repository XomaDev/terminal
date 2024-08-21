"use strict";
(function(root,module){if(typeof define==='function'&&define.amd){define(['exports'],function(exports){module(root,exports);});}else if(typeof exports==='object'&&exports!==null&&typeof exports.nodeName!=='string'){module(global,exports);}else{module(root,root);}}(typeof self!=='undefined'?self:this,function($rt_globals,$rt_exports){var $rt_seed=2463534242;function $rt_nextId(){var x=$rt_seed;x^=x<<13;x^=x>>>17;x^=x<<5;$rt_seed=x;return x;}function $rt_compare(a,b){return a>b?1:a<b? -1:a===b?0:1;}function $rt_isInstance(obj,
cls){return obj instanceof $rt_objcls()&&!!obj.constructor.$meta&&$rt_isAssignable(obj.constructor,cls);}function $rt_isAssignable(from,to){if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&$rt_isAssignable(from.$meta.item,to.$meta.item);}var supertypes=from.$meta.supertypes;for(var i=0;i<supertypes.length;i=i+1|0){if($rt_isAssignable(supertypes[i],to)){return true;}}return false;}function $rt_castToInterface(obj,cls){if(obj!==null&&!$rt_isInstance(obj,cls)){$rt_throwCCE();}return obj;}function $rt_castToClass(obj,
cls){if(obj!==null&&!(obj instanceof cls)){$rt_throwCCE();}return obj;}$rt_globals.Array.prototype.fill=$rt_globals.Array.prototype.fill||function(value,start,end){var len=this.length;if(!len)return this;start=start|0;var i=start<0?$rt_globals.Math.max(len+start,0):$rt_globals.Math.min(start,len);end=end===$rt_globals.undefined?len:end|0;end=end<0?$rt_globals.Math.max(len+end,0):$rt_globals.Math.min(end,len);for(;i<end;i++){this[i]=value;}return this;};function $rt_createArray(cls,sz){var data=new $rt_globals.Array(sz);data.fill(null);return new $rt_array(cls,
data);}function $rt_createArrayFromData(cls,init){return $rt_wrapArray(cls,init);}function $rt_wrapArray(cls,data){return new $rt_array(cls,data);}function $rt_createUnfilledArray(cls,sz){return new $rt_array(cls,new $rt_globals.Array(sz));}function $rt_createNumericArray(cls,nativeArray){return new $rt_array(cls,nativeArray);}var $rt_createLongArray;var $rt_createLongArrayFromData;if(typeof $rt_globals.BigInt64Array!=='function'){$rt_createLongArray=function(sz){var data=new $rt_globals.Array(sz);var arr=new $rt_array($rt_longcls(),
data);data.fill(Long_ZERO);return arr;};$rt_createLongArrayFromData=function(init){return new $rt_array($rt_longcls(),init);};}else {$rt_createLongArray=function(sz){return $rt_createNumericArray($rt_longcls(),new $rt_globals.BigInt64Array(sz));};$rt_createLongArrayFromData=function(data){var buffer=new $rt_globals.BigInt64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_longcls(),buffer);};}function $rt_createCharArray(sz){return $rt_createNumericArray($rt_charcls(),new $rt_globals.Uint16Array(sz));}function $rt_createCharArrayFromData(data)
{var buffer=new $rt_globals.Uint16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_charcls(),buffer);}function $rt_createByteArray(sz){return $rt_createNumericArray($rt_bytecls(),new $rt_globals.Int8Array(sz));}function $rt_createByteArrayFromData(data){var buffer=new $rt_globals.Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_bytecls(),buffer);}function $rt_createShortArray(sz){return $rt_createNumericArray($rt_shortcls(),new $rt_globals.Int16Array(sz));}function $rt_createShortArrayFromData(data)
{var buffer=new $rt_globals.Int16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_shortcls(),buffer);}function $rt_createIntArray(sz){return $rt_createNumericArray($rt_intcls(),new $rt_globals.Int32Array(sz));}function $rt_createIntArrayFromData(data){var buffer=new $rt_globals.Int32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_intcls(),buffer);}function $rt_createBooleanArray(sz){return $rt_createNumericArray($rt_booleancls(),new $rt_globals.Int8Array(sz));}function $rt_createBooleanArrayFromData(data)
{var buffer=new $rt_globals.Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_booleancls(),buffer);}function $rt_createFloatArray(sz){return $rt_createNumericArray($rt_floatcls(),new $rt_globals.Float32Array(sz));}function $rt_createFloatArrayFromData(data){var buffer=new $rt_globals.Float32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_floatcls(),buffer);}function $rt_createDoubleArray(sz){return $rt_createNumericArray($rt_doublecls(),new $rt_globals.Float64Array(sz));}function $rt_createDoubleArrayFromData(data)
{var buffer=new $rt_globals.Float64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_doublecls(),buffer);}function $rt_arraycls(cls){var result=cls.$array;if(result===null){var arraycls={};var name="["+cls.$meta.binaryName;arraycls.$meta={item:cls,supertypes:[$rt_objcls()],primitive:false,superclass:$rt_objcls(),name:name,binaryName:name,enum:false,simpleName:null,declaringClass:null,enclosingClass:null};arraycls.classObject=null;arraycls.$array=null;result=arraycls;cls.$array=arraycls;}return result;}function $rt_createcls()
{return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};}function $rt_createPrimitiveCls(name,binaryName){var cls=$rt_createcls();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;cls.$meta.simpleName=null;cls.$meta.declaringClass=null;cls.$meta.enclosingClass=null;return cls;}var $rt_booleanclsCache=null;function $rt_booleancls(){if($rt_booleanclsCache===null){$rt_booleanclsCache=$rt_createPrimitiveCls("boolean","Z");}return $rt_booleanclsCache;}var $rt_charclsCache
=null;function $rt_charcls(){if($rt_charclsCache===null){$rt_charclsCache=$rt_createPrimitiveCls("char","C");}return $rt_charclsCache;}var $rt_byteclsCache=null;function $rt_bytecls(){if($rt_byteclsCache===null){$rt_byteclsCache=$rt_createPrimitiveCls("byte","B");}return $rt_byteclsCache;}var $rt_shortclsCache=null;function $rt_shortcls(){if($rt_shortclsCache===null){$rt_shortclsCache=$rt_createPrimitiveCls("short","S");}return $rt_shortclsCache;}var $rt_intclsCache=null;function $rt_intcls(){if($rt_intclsCache
===null){$rt_intclsCache=$rt_createPrimitiveCls("int","I");}return $rt_intclsCache;}var $rt_longclsCache=null;function $rt_longcls(){if($rt_longclsCache===null){$rt_longclsCache=$rt_createPrimitiveCls("long","J");}return $rt_longclsCache;}var $rt_floatclsCache=null;function $rt_floatcls(){if($rt_floatclsCache===null){$rt_floatclsCache=$rt_createPrimitiveCls("float","F");}return $rt_floatclsCache;}var $rt_doubleclsCache=null;function $rt_doublecls(){if($rt_doubleclsCache===null){$rt_doubleclsCache=$rt_createPrimitiveCls("double",
"D");}return $rt_doubleclsCache;}var $rt_voidclsCache=null;function $rt_voidcls(){if($rt_voidclsCache===null){$rt_voidclsCache=$rt_createPrimitiveCls("void","V");}return $rt_voidclsCache;}function $rt_throw(ex){throw $rt_exception(ex);}var $rt_javaExceptionProp=$rt_globals.Symbol("javaException");function $rt_exception(ex){var err=ex.$jsException;if(!err){var javaCause=$rt_throwableCause(ex);var jsCause=javaCause!==null?javaCause.$jsException:$rt_globals.undefined;var cause=typeof jsCause==="object"?{cause:
jsCause}:$rt_globals.undefined;err=new JavaError("Java exception thrown",cause);if(typeof $rt_globals.Error.captureStackTrace==="function"){$rt_globals.Error.captureStackTrace(err);}err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return err;}function $rt_fillStack(err,ex){if(typeof $rt_decodeStack==="function"&&err.stack){var stack=$rt_decodeStack(err.stack);var javaStack=$rt_createArray($rt_stecls(),stack.length);var elem;var noStack=false;for(var i=0;i<stack.length;++i){var element
=stack[i];elem=$rt_createStackElement($rt_str(element.className),$rt_str(element.methodName),$rt_str(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){$rt_setStack(ex,javaStack);}}}function $rt_createMultiArray(cls,dimensions){var first=0;for(var i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(i=0;i<first;i=i+1|0){cls=$rt_arraycls(cls);}if(first===dimensions.length -1){return $rt_createArray(cls,dimensions[first]);}}var arrays
=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,first));var firstDim=dimensions[first]|0;for(i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createArray(cls,firstDim);}return $rt_createMultiArrayImpl(cls,arrays,dimensions,first);}function $rt_createByteMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_bytecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createByteArray(firstDim);}return $rt_createMultiArrayImpl($rt_bytecls(),
arrays,dimensions);}function $rt_createCharMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_charcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createCharArray(firstDim);}return $rt_createMultiArrayImpl($rt_charcls(),arrays,dimensions,0);}function $rt_createBooleanMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if
(arrays.length===0){return $rt_createMultiArray($rt_booleancls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createBooleanArray(firstDim);}return $rt_createMultiArrayImpl($rt_booleancls(),arrays,dimensions,0);}function $rt_createShortMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_shortcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i
=i+1|0){arrays[i]=$rt_createShortArray(firstDim);}return $rt_createMultiArrayImpl($rt_shortcls(),arrays,dimensions,0);}function $rt_createIntMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_intcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createIntArray(firstDim);}return $rt_createMultiArrayImpl($rt_intcls(),arrays,dimensions,0);}function $rt_createLongMultiArray(dimensions)
{var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_longcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createLongArray(firstDim);}return $rt_createMultiArrayImpl($rt_longcls(),arrays,dimensions,0);}function $rt_createFloatMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_floatcls(),dimensions);}var firstDim
=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createFloatArray(firstDim);}return $rt_createMultiArrayImpl($rt_floatcls(),arrays,dimensions,0);}function $rt_createDoubleMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_doublecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createDoubleArray(firstDim);}return $rt_createMultiArrayImpl($rt_doublecls(),
arrays,dimensions,0);}function $rt_primitiveArrayCount(dimensions,start){var val=dimensions[start+1]|0;for(var i=start+2;i<dimensions.length;i=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;}function $rt_createMultiArrayImpl(cls,arrays,dimensions,start){var limit=arrays.length;for(var i=start+1|0;i<dimensions.length;i=i+1|0){cls=$rt_arraycls(cls);var dim=dimensions[i];var index=0;var packedIndex=0;while(index<limit){var arr=$rt_createUnfilledArray(cls,dim);for(var j=0;j<dim;j=j+1|0){arr.data[j]
=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];}function $rt_assertNotNaN(value){if(typeof value==='number'&&$rt_globals.isNaN(value)){throw "NaN";}return value;}function $rt_createOutputFunction(printFunction){var buffer="";var utf8Buffer=0;var utf8Remaining=0;function putCodePoint(ch){if(ch===0xA){printFunction(buffer);buffer="";}else if(ch<0x10000){buffer+=$rt_globals.String.fromCharCode(ch);}else {ch=ch -0x10000|0;var hi=(ch>>10)+
0xD800;var lo=(ch&0x3FF)+0xDC00;buffer+=$rt_globals.String.fromCharCode(hi,lo);}}return function(ch){if((ch&0x80)===0){putCodePoint(ch);}else if((ch&0xC0)===0x80){if(utf8Buffer>0){utf8Remaining<<=6;utf8Remaining|=ch&0x3F;if( --utf8Buffer===0){putCodePoint(utf8Remaining);}}}else if((ch&0xE0)===0xC0){utf8Remaining=ch&0x1F;utf8Buffer=1;}else if((ch&0xF0)===0xE0){utf8Remaining=ch&0x0F;utf8Buffer=2;}else if((ch&0xF8)===0xF0){utf8Remaining=ch&0x07;utf8Buffer=3;}};}var $rt_putStdout=typeof $rt_putStdoutCustom==="function"
?$rt_putStdoutCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.info(msg);}):function(){};var $rt_putStderr=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.error(msg);}):function(){};var $rt_packageData=null;function $rt_packages(data){var i=0;var packages=new $rt_globals.Array(data.length);for(var j=0;j<data.length;++j){var prefixIndex=data[i++];var prefix
=prefixIndex>=0?packages[prefixIndex]:"";packages[j]=prefix+data[i++]+".";}$rt_packageData=packages;}function $rt_metadata(data){var packages=$rt_packageData;var i=0;while(i<data.length){var cls=data[i++];cls.$meta={};var m=cls.$meta;var className=data[i++];m.name=className!==0?className:null;if(m.name!==null){var packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";var superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if
(m.superclass){m.supertypes.push(m.superclass);cls.prototype=$rt_globals.Object.create(m.superclass.prototype);}else {cls.prototype={};}var flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];var innerClassInfo=data[i++];if(innerClassInfo===0){m.simpleName=null;m.declaringClass=null;m.enclosingClass=null;}else {var enclosingClass=innerClassInfo[0];m.enclosingClass=enclosingClass!==0?enclosingClass:null;var declaringClass
=innerClassInfo[1];m.declaringClass=declaringClass!==0?declaringClass:null;var simpleName=innerClassInfo[2];m.simpleName=simpleName!==0?simpleName:null;}var clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};var virtualMethods=data[i++];if(virtualMethods!==0){for(var j=0;j<virtualMethods.length;j+=2){var name=virtualMethods[j];var func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(var k=0;k<name.length;++k){cls.prototype[name[k]]=func;}}}cls.$array=null;}}function $rt_wrapFunction0(f)
{return function(){return f(this);};}function $rt_wrapFunction1(f){return function(p1){return f(this,p1);};}function $rt_wrapFunction2(f){return function(p1,p2){return f(this,p1,p2);};}function $rt_wrapFunction3(f){return function(p1,p2,p3){return f(this,p1,p2,p3,p3);};}function $rt_wrapFunction4(f){return function(p1,p2,p3,p4){return f(this,p1,p2,p3,p4);};}function $rt_threadStarter(f){return function(){var args=$rt_globals.Array.prototype.slice.apply(arguments);$rt_startThread(function(){f.apply(this,args);});};}function $rt_mainStarter(f)
{return function(args,callback){if(!args){args=[];}var javaArgs=$rt_createArray($rt_objcls(),args.length);for(var i=0;i<args.length;++i){javaArgs.data[i]=$rt_str(args[i]);}$rt_startThread(function(){f.call(null,javaArgs);},callback);};}var $rt_stringPool_instance;function $rt_stringPool(strings){$rt_stringPool_instance=new $rt_globals.Array(strings.length);for(var i=0;i<strings.length;++i){$rt_stringPool_instance[i]=$rt_intern($rt_str(strings[i]));}}function $rt_s(index){return $rt_stringPool_instance[index];}function $rt_eraseClinit(target)
{return target.$clinit=function(){};}var $rt_numberConversionBuffer=new $rt_globals.ArrayBuffer(16);var $rt_numberConversionView=new $rt_globals.DataView($rt_numberConversionBuffer);var $rt_numberConversionFloatArray=new $rt_globals.Float32Array($rt_numberConversionBuffer);var $rt_numberConversionDoubleArray=new $rt_globals.Float64Array($rt_numberConversionBuffer);var $rt_numberConversionIntArray=new $rt_globals.Int32Array($rt_numberConversionBuffer);var $rt_doubleToRawLongBits;var $rt_longBitsToDouble;if(typeof $rt_globals.BigInt
!=='function'){$rt_doubleToRawLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,true);return new Long($rt_numberConversionView.getInt32(0,true),$rt_numberConversionView.getInt32(4,true));};$rt_longBitsToDouble=function(n){$rt_numberConversionView.setInt32(0,n.lo,true);$rt_numberConversionView.setInt32(4,n.hi,true);return $rt_numberConversionView.getFloat64(0,true);};}else if(typeof $rt_globals.BigInt64Array!=='function'){$rt_doubleToRawLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,
true);var lo=$rt_numberConversionView.getInt32(0,true);var hi=$rt_numberConversionView.getInt32(4,true);return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)<<$rt_globals.BigInt(32));};$rt_longBitsToDouble=function(n){$rt_numberConversionView.setFloat64(0,n,true);var lo=$rt_numberConversionView.getInt32(0,true);var hi=$rt_numberConversionView.getInt32(4,true);return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)
<<$rt_globals.BigInt(32));};}else {var $rt_numberConversionLongArray=new $rt_globals.BigInt64Array($rt_numberConversionBuffer);$rt_doubleToRawLongBits=function(n){$rt_numberConversionDoubleArray[0]=n;return $rt_numberConversionLongArray[0];};$rt_longBitsToDouble=function(n){$rt_numberConversionLongArray[0]=n;return $rt_numberConversionDoubleArray[0];};}function $rt_floatToRawIntBits(n){$rt_numberConversionFloatArray[0]=n;return $rt_numberConversionIntArray[0];}function $rt_intBitsToFloat(n){$rt_numberConversionIntArray[0]
=n;return $rt_numberConversionFloatArray[0];}function $rt_equalDoubles(a,b){if(a!==a){return b!==b;}$rt_numberConversionDoubleArray[0]=a;$rt_numberConversionDoubleArray[1]=b;return $rt_numberConversionIntArray[0]===$rt_numberConversionIntArray[2]&&$rt_numberConversionIntArray[1]===$rt_numberConversionIntArray[3];}var JavaError;if(typeof $rt_globals.Reflect==='object'){var defaultMessage=$rt_globals.Symbol("defaultMessage");JavaError=function JavaError(message,cause){var self=$rt_globals.Reflect.construct($rt_globals.Error,
[$rt_globals.undefined,cause],JavaError);$rt_globals.Object.setPrototypeOf(self,JavaError.prototype);self[defaultMessage]=message;return self;};JavaError.prototype=$rt_globals.Object.create($rt_globals.Error.prototype,{constructor:{configurable:true,writable:true,value:JavaError},message:{get:function(){try {var javaException=this[$rt_javaExceptionProp];if(typeof javaException==='object'){var javaMessage=$rt_throwableMessage(javaException);if(typeof javaMessage==="object"){return javaMessage!==null?javaMessage.toString()
:null;}}return this[defaultMessage];}catch(e){return "Exception occurred trying to extract Java exception message: "+e;}}}});}else {JavaError=$rt_globals.Error;}function $rt_javaException(e){return e instanceof $rt_globals.Error&&typeof e[$rt_javaExceptionProp]==='object'?e[$rt_javaExceptionProp]:null;}function $rt_jsException(e){return typeof e.$jsException==='object'?e.$jsException:null;}function $rt_wrapException(err){var ex=err[$rt_javaExceptionProp];if(!ex){ex=$rt_createException($rt_str("(JavaScript) "
+err.toString()));err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return ex;}function $dbg_class(obj){var cls=obj.constructor;var arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}var clsName="";if(cls===$rt_booleancls()){clsName="boolean";}else if(cls===$rt_bytecls()){clsName="byte";}else if(cls===$rt_shortcls()){clsName="short";}else if(cls===$rt_charcls()){clsName="char";}else if(cls===$rt_intcls()){clsName="int";}else if(cls===$rt_longcls()){clsName
="long";}else if(cls===$rt_floatcls()){clsName="float";}else if(cls===$rt_doublecls()){clsName="double";}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;}function Long(lo,hi){this.lo=lo|0;this.hi=hi|0;}Long.prototype.__teavm_class__=function(){return "long";};function Long_isPositive(a){return (a.hi&0x80000000)===0;}function Long_isNegative(a){return (a.hi&0x80000000)!==0;}var Long_MAX_NORMAL=1<<18;var Long_ZERO;var Long_create;var Long_fromInt;var Long_fromNumber;var Long_toNumber;var Long_hi;var Long_lo;if
(typeof $rt_globals.BigInt!=="function"){Long.prototype.toString=function(){var result=[];var n=this;var positive=Long_isPositive(n);if(!positive){n=Long_neg(n);}var radix=new Long(10,0);do {var divRem=Long_divRem(n,radix);result.push($rt_globals.String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};Long.prototype.valueOf=function(){return Long_toNumber(this);};Long_ZERO=new Long(0,0);Long_fromInt=function(val){return new Long(val,
 -(val<0)|0);};Long_fromNumber=function(val){if(val>=0){return new Long(val|0,val/0x100000000|0);}else {return Long_neg(new Long( -val|0, -val/0x100000000|0));}};Long_create=function(lo,hi){return new Long(lo,hi);};Long_toNumber=function(val){return 0x100000000*val.hi+(val.lo>>>0);};Long_hi=function(val){return val.hi;};Long_lo=function(val){return val.lo;};}else {Long_ZERO=$rt_globals.BigInt(0);Long_create=function(lo,hi){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,$rt_globals.BigInt(lo))
|$rt_globals.BigInt.asUintN(64,$rt_globals.BigInt(hi)<<$rt_globals.BigInt(32)));};Long_fromInt=function(val){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt(val|0));};Long_fromNumber=function(val){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt(val>=0?$rt_globals.Math.floor(val):$rt_globals.Math.ceil(val)));};Long_toNumber=function(val){return $rt_globals.Number(val);};Long_hi=function(val){return $rt_globals.Number($rt_globals.BigInt.asIntN(64,val>>$rt_globals.BigInt(32)))|0;};Long_lo=function(val)
{return $rt_globals.Number($rt_globals.BigInt.asIntN(32,val))|0;};}var $rt_imul=$rt_globals.Math.imul||function(a,b){var ah=a>>>16&0xFFFF;var al=a&0xFFFF;var bh=b>>>16&0xFFFF;var bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};var $rt_udiv=function(a,b){return (a>>>0)/(b>>>0)>>>0;};var $rt_umod=function(a,b){return (a>>>0)%(b>>>0)>>>0;};var $rt_ucmp=function(a,b){a>>>=0;b>>>=0;return a<b? -1:a>b?1:0;};function $rt_checkBounds(index,array){if(index<0||index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkUpperBound(index,
array){if(index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.M=f;}
function $rt_cls(cls){return CX(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return DH(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.g.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return Dy(t);}
function $rt_throwableCause(t){return DB(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(DN());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return DO(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){}
var A=Object.create(null);
var E=$rt_throw;var DP=$rt_compare;var DQ=$rt_nullCheck;var BR=$rt_cls;var Di=$rt_createArray;var DM=$rt_isInstance;var DR=$rt_nativeThread;var DS=$rt_suspending;var DT=$rt_resuming;var DU=$rt_invalidPointer;var D=$rt_s;var V=$rt_eraseClinit;var DV=$rt_imul;var De=$rt_wrapException;var DW=$rt_checkBounds;var DX=$rt_checkUpperBound;var DY=$rt_checkLowerBound;var DZ=$rt_wrapFunction0;var D0=$rt_wrapFunction1;var D1=$rt_wrapFunction2;var D2=$rt_wrapFunction3;var D3=$rt_wrapFunction4;var C=$rt_classWithoutFields;var D4
=$rt_createArrayFromData;var D5=$rt_createCharArrayFromData;var D6=$rt_createByteArrayFromData;var D7=$rt_createShortArrayFromData;var D8=$rt_createIntArrayFromData;var D9=$rt_createBooleanArrayFromData;var D$=$rt_createFloatArrayFromData;var D_=$rt_createDoubleArrayFromData;var Ea=$rt_createLongArrayFromData;var Eb=$rt_createBooleanArray;var B3=$rt_createByteArray;var Ec=$rt_createShortArray;var W=$rt_createCharArray;var Ed=$rt_createIntArray;var Ee=$rt_createLongArray;var Ef=$rt_createFloatArray;var Eg=$rt_createDoubleArray;var DP
=$rt_compare;var Eh=$rt_castToClass;var Ei=$rt_castToInterface;var Ej=$rt_equalDoubles;var Ek=Long_toNumber;var El=Long_fromInt;var Em=Long_fromNumber;var En=Long_create;var Eo=Long_ZERO;var Ep=Long_hi;var Eq=Long_lo;
function B(){this.$id$=0;}
function BV(a){return CX(a.constructor);}
function Du(a){var b,c,d,e,f,g,h,i,j,k,l;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}d=a.$id$;if(!d)e=D(0);else{if(!d)f=32;else{g=0;f=d>>>16|0;if(f)g=16;else f=d;h=f>>>8|0;if(!h)h=f;else g=g|8;i=h>>>4|0;if(!i)i=h;else g=g|4;f=i>>>2|0;if(!f)f=i;else g=g|2;if(f>>>1|0)g=g|1;f=(32-g|0)-1|0;}j=(((32-f|0)+4|0)-1|0)/4|0;k=W(j);l=k.data;j=(j-1|0)*4|0;f=0;while(j>=0){i=f+1|0;l[f]=Bz((d>>>j|0)&15,16);j=j-4|0;f=i;}e=DH(k);}b=P();H(H(b,D(1)),e);return O(b);}
function Do(a){var b,c,d;if(!DM(a,Ch)&&a.constructor.$meta.item===null){b=new BZ;I(b);E(b);}b=Dm(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
var CW=C();
function DD(b){CT();CK();Cx();CL();Dv(Dl(new B5,"executeEia"));}
function Dv(b){$rt_globals.main.eia=b;}
var BO=C(0);
var B1=C(0);
function B0(){B.call(this);this.n=null;}
function CX(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new B0;c.n=b;d=c;b.classObject=d;}return c;}
function Bm(a){return a.n.$meta.primitive?1:0;}
function B$(a){return CX(a.n.$meta.item);}
var CO=C();
function Dl(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
var C4=C();
function Dm(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function C3(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(C3(d[e],c))return 1;e=e+1|0;}return 0;}
function Y(){var a=this;B.call(a);a.I=null;a.D=null;a.t=0;a.s=0;}
function Er(a){var b=new Y();K(b,a);return b;}
function Es(a){var b=new Y();CV(b,a);return b;}
function K(a,b){a.t=1;a.s=1;a.I=b;}
function CV(a,b){a.t=1;a.s=1;a.D=b;}
function Dx(a){return a;}
function Dy(a){return a.I;}
function DB(a){var b;b=a.D;if(b===a)b=null;return b;}
var T=C(Y);
function Et(){var a=new T();I(a);return a;}
function Eu(a){var b=new T();Cb(b,a);return b;}
function I(a){a.t=1;a.s=1;}
function Cb(a,b){K(a,b);}
var F=C(T);
function Ev(){var a=new F();Cy(a);return a;}
function DO(a){var b=new F();Df(b,a);return b;}
function Cy(a){I(a);}
function Df(a,b){K(a,b);}
var C$=C(F);
var Bh=C(0);
var S=C(0);
var Bk=C(0);
function R(){var a=this;B.call(a);a.g=null;a.j=0;}
var Ew=null;var Ex=null;var Ey=null;function C1(){C1=V(R);Dq();}
function DH(a){var b=new R();CA(b,a);return b;}
function DE(a,b,c){var d=new R();Co(d,a,b,c);return d;}
function CA(a,b){C1();Co(a,b,0,b.data.length);}
function Co(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;C1();e=W(d);a.g=e;if(b===null){f=new B_;K(f,D(2));E(f);}if(c>=0&&d>=0&&(c+d|0)<=BJ(b)&&(0+d|0)<=BJ(e)){a:{b:{c:{if(b!==e){g=B$(BV(b));f=B$(BV(e));if(g!==null&&f!==null){if(g===f)break c;if(!Bm(g)&&!Bm(f)){h=b;i=0;j=c;while(i<d){k=h.data;l=j+1|0;m=k[j];n=f.n;if(!(m!==null&&!(typeof m.constructor.$meta==='undefined'?1:0)&&C3(m.constructor,n)?1:0)){Bt(b,c,e,0,i);g=new Bn;I(g);E(g);}i=i+1|0;j=l;}Bt(b,c,e,0,d);break a;}if(!Bm(g))break b;if(Bm(f))break c;else break b;}g
=new Bn;I(g);E(g);}}Bt(b,c,e,0,d);break a;}g=new Bn;I(g);E(g);}return;}g=new M;I(g);E(g);}
function Be(a,b){var c,d;if(b>=0){c=a.g.data;if(b<c.length)return c[b];}d=new BI;I(d);E(d);}
function N(a){return a.g.data.length;}
function BP(a){return a.g.data.length?0:1;}
function DC(a,b){var c;if(a===b)return 1;if(!(b instanceof R))return 0;if(N(b)!=N(a))return 0;c=0;while(c<N(b)){if(Be(a,c)!=Be(b,c))return 0;c=c+1|0;}return 1;}
function Ds(a){var b,c,d,e;a:{if(!a.j){b=a.g.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.j=(31*a.j|0)+e|0;d=d+1|0;}}}return a.j;}
function Dq(){var b,c;b=W(0);Ew=b;c=new R;C1();c.g=b;Ex=c;Ey=new Cu;}
var Bd=C(Y);
var Bc=C(Bd);
var CB=C(Bc);
var Bx=C();
var Ce=C(Bx);
var Ez=null;function CT(){Ez=BR($rt_intcls());}
function BF(){var a=this;B.call(a);a.a=null;a.b=0;}
function Bj(a,b,c){var d,e,f,g;d=a.b;e=d-b|0;Cc(a,(d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.a.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.b=a.b+(c-b|0)|0;}
var BM=C(0);
var CR=C(BF);
function P(){var a=new CR();Dt(a);return a;}
function Dt(a){a.a=W(16);}
function H(a,b){var c;c=a.b;if(b===null)b=D(3);Ci(a,c,b);return a;}
function L(a,b){var c,d,e,f,g,h,i,j;c=a.b;d=1;if(b<0){d=0;b= -b|0;}a:{if($rt_ucmp(b,10)<0){if(d)Bj(a,c,c+1|0);else{Bj(a,c,c+2|0);e=a.a.data;f=c+1|0;e[c]=45;c=f;}a.a.data[c]=Bz(b,10);}else{g=1;h=1;f=$rt_udiv((-1),10);b:{while(true){i=g*10|0;if($rt_ucmp(i,b)>0){i=g;break b;}h=h+1|0;if($rt_ucmp(i,f)>0)break;g=i;}}if(!d)h=h+1|0;Bj(a,c,c+h|0);if(d)f=c;else{e=a.a.data;f=c+1|0;e[c]=45;}while(true){if(!i)break a;e=a.a.data;j=f+1|0;e[f]=Bz($rt_udiv(b,i),10);b=$rt_umod(b,i);i=$rt_udiv(i,10);f=j;}}}return a;}
function Bl(a,b){var c;c=a.b;Bj(a,c,c+1|0);a.a.data[c]=b;return a;}
function O(a){return DE(a.a,0,a.b);}
function Cc(a,b){var c,d,e,f;c=a.a.data.length;if(c<b){b=c>=1073741823?2147483647:Cd(b,Cd(c*2|0,5));d=a.a.data;e=W(b);f=e.data;b=By(b,d.length);c=0;while(c<b){f[c]=d[c];c=c+1|0;}a.a=e;}}
function Ci(a,b,c){var d,e,f;if(b>=0&&b<=a.b){a:{if(c===null)c=D(3);else if(BP(c))break a;Cc(a,a.b+N(c)|0);d=a.b-1|0;while(d>=b){a.a.data[d+N(c)|0]=a.a.data[d];d=d+(-1)|0;}a.b=a.b+N(c)|0;d=0;while(d<N(c)){e=a.a.data;f=b+1|0;e[b]=Be(c,d);d=d+1|0;b=f;}}return a;}c=new BI;I(c);E(c);}
var Z=C(Bc);
var C8=C(Z);
function EA(a){var b=new C8();Dz(b,a);return b;}
function Dz(a,b){K(a,b);}
var CN=C(Z);
function EB(a){var b=new CN();Dg(b,a);return b;}
function Dg(a,b){K(a,b);}
var BQ=C(0);
var BU=C(0);
var B5=C();
function Dr(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,$$je;b=$rt_str(b);if(EC===null){c=new B6;c.U=ED;c.k=P();c.V=W(32);c.bj=0;Dc();c.K=EE;EC=c;}c=EC;d=c.k;Ci(d,d.b,b);Bl(d,10);b=c.k;e=b.b;f=c.V;if(e>f.data.length)f=W(e);g=0;h=0;if(g>e){b=new M;Cb(b,D(4));E(b);}while(g<e){i=f.data;j=h+1|0;k=b.a.data;l=g+1|0;i[h]=k[g];h=j;g=l;}k=f.data;g=e-0|0;m=new B7;CI(m,k.length,0,0+g|0);m.x=0;m.Z=0;m.O=f;f=B3(Cd(16,By(g,1024)));g=f.data.length;n=new Cs;C0(n,0,g,f,0,0+g|0);n.bi=0;n.A=0;b=c.K;o=new Cn;CS(o,b,2.0,4.0);o.w=W(512);o.H
=B3(512);CE();b=EF;if(b===null){d=new U;Cb(d,D(5));E(d);}o.o=b;o.p=b;a:while(true){if(o.m==3){b=new Br;I(b);E(b);}o.m=2;b:{while(true){try{b=Cw(o,m,n);}catch($$e){$$je=De($$e);if($$je instanceof F){b=$$je;d=new BS;CV(d,b);E(d);}else{throw $$e;}}if(b.i?0:1){h=Q(m);if(h<=0)break b;b=BN(h);}else if(BH(b))break;d=!Cq(b)?o.o:o.p;c:{if(d!==EF){if(d===EG)break c;else break b;}h=Q(n);k=o.y;g=k.data.length;if(h<g){b=EH;break b;}Cv(n,k,0,g);}g=m.c;if(!(!C5(b)&&!Cq(b)?0:1))break a;BT(m,g+b.N|0);}}h=BH(b);Ca(c,f,0,n.c);B2(n);if
(!h){while(true){g=o.m;if(g!=2&&g!=4)break;b=EI;if(b===b)o.m=3;h=BH(b);Ca(c,f,0,n.c);B2(n);if(!h){c.k.b=0;return "<meow_eia>";}}b=new Br;I(b);E(b);}}b=new Bi;Cy(b);E(b);}
var B8=C();
var EC=null;function DI(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=BJ(b)&&(e+f|0)<=BJ(d)){Bt(b,c,d,e,f);return;}b=new M;I(b);E(b);}
function Bt(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
var C7=C();
var Cj=C(0);
var Cu=C();
var M=C(F);
var CF=C();
function BJ(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(EJ());}return b.data.length;}
var B_=C(F);
var Bn=C(F);
var Bo=C();
var EK=null;var EL=null;function Cf(b){return (b&64512)!=55296?0:1;}
function B4(b){return (b&64512)!=56320?0:1;}
function Bz(b,c){if(c>=2&&c<=36&&b>=0&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function CK(){EK=BR($rt_charcls());EL=Di(Bo,128);}
var BI=C(M);
var BY=C(0);
var BX=C(0);
var Ct=C(0);
var Ba=C();
function BC(){Ba.call(this);this.U=null;}
function B6(){var a=this;BC.call(a);a.bj=0;a.u=0;a.k=null;a.V=null;a.K=null;}
function Ca(a,b,c,d){var e,$$je;e=a.U;if(e===null)a.u=1;if(!(a.u?0:1))return;a:{try{Cz(e,b,c,d);break a;}catch($$e){$$je=De($$e);if($$je instanceof Cg){}else{throw $$e;}}a.u=1;}}
function Bq(){Ba.call(this);this.Y=null;}
var BA=C(Bq);
var ED=null;function Cz(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function Cx(){var b;b=new BA;b.Y=B3(1);ED=b;}
function Bs(){var a=this;B.call(a);a.bh=null;a.bf=null;}
function CZ(b){var c,d;if(BP(b))E(CD(b));if(!C2(Be(b,0)))E(CD(b));c=1;while(c<N(b)){a:{d=Be(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(C2(d))break a;else E(CD(b));}}c=c+1|0;}}
function C2(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var BD=C(Bs);
var EE=null;function Dc(){Dc=V(BD);Dk();}
function Dk(){var b,c,d,e,f;b=new BD;Dc();c=Di(R,0);d=c.data;CZ(D(6));e=d.length;f=0;while(f<e){CZ(d[f]);f=f+1|0;}b.bh=D(6);b.bf=c.M();EE=b;}
var U=C(F);
function C6(){U.call(this);this.X=null;}
function CD(a){var b=new C6();Dd(b,a);return b;}
function Dd(a,b){I(a);a.X=b;}
var Ch=C(0);
var BZ=C(T);
function Bb(){var a=this;B.call(a);a.G=0;a.c=0;a.d=0;a.l=0;}
function Cl(a,b){a.l=(-1);a.G=b;a.d=b;}
function Q(a){return a.d-a.c|0;}
function X(a){return a.c>=a.d?0:1;}
var Cm=C(0);
var BL=C(Bb);
function CI(a,b,c,d){Cl(a,b);a.c=c;a.d=d;}
function BT(a,b){var c,d,e;if(b>=0&&b<=a.d){a.c=b;if(b<a.l)a.l=0;return a;}c=new U;d=a.d;e=P();Bl(L(H(L(H(e,D(7)),b),D(8)),d),93);K(c,O(e));E(c);}
var CJ=C();
function By(b,c){if(b<c)c=b;return c;}
function Cd(b,c){if(b>c)c=b;return c;}
function Bv(){var a=this;Bb.call(a);a.P=0;a.z=null;a.bq=null;}
function C0(a,b,c,d,e,f){Cl(a,c);Dw();a.bq=EM;a.P=b;a.z=d;a.c=e;a.d=f;}
function Cv(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.A){e=new B9;I(e);E(e);}if(Q(a)<d){e=new Cr;I(e);E(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new M;j=P();L(H(L(H(j,D(9)),h),D(10)),g);K(i,O(j));E(i);}if(d<0){e=new M;i=P();H(L(H(i,D(11)),d),D(12));K(e,O(i));E(e);}h=a.c;k=h+a.P|0;l=0;while(l<d){b=a.z.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.c=h+d|0;return a;}}b=b.data;e=new M;d=b.length;i=P();Bl(L(H(L(H(i,D(13)),c),D(8)),d),41);K(e,O(i));E(e);}
function B2(a){a.c=0;a.d=a.G;a.l=(-1);return a;}
function Bg(){B.call(this);this.bc=null;}
var EG=null;var EF=null;var EN=null;function CE(){CE=V(Bg);Dj();}
function CG(a){var b=new Bg();CQ(b,a);return b;}
function CQ(a,b){CE();a.bc=b;}
function Dj(){EG=CG(D(14));EF=CG(D(15));EN=CG(D(16));}
var Bw=C(BL);
function B7(){var a=this;Bw.call(a);a.Z=0;a.x=0;a.O=null;}
function Bp(){var a=this;B.call(a);a.bl=null;a.y=null;a.W=0.0;a.v=0.0;a.o=null;a.p=null;a.m=0;}
function CS(a,b,c,d){var e,f,g,h;e=B3(1);f=e.data;f[0]=63;CE();g=EN;a.o=g;a.p=g;h=f.length;if(h&&h>=a.v){a.bl=b;a.y=e.M();a.W=c;a.v=d;return;}g=new U;K(g,D(17));E(g);}
function BE(){var a=this;B.call(a);a.i=0;a.N=0;}
var EI=null;var EH=null;function CM(a,b){var c=new BE();CY(c,a,b);return c;}
function CY(a,b,c){a.i=b;a.N=c;}
function BH(a){return a.i!=1?0:1;}
function C5(a){return a.i!=2?0:1;}
function Cq(a){return a.i!=3?0:1;}
function BN(b){return CM(2,b);}
function CL(){EI=CM(0,0);EH=CM(1,0);}
function Cs(){var a=this;Bv.call(a);a.bi=0;a.A=0;}
function Bu(){B.call(this);this.be=null;}
var EM=null;var EO=null;function Dw(){Dw=V(Bu);Dn();}
function Dh(a){var b=new Bu();CC(b,a);return b;}
function CC(a,b){Dw();a.be=b;}
function Dn(){EM=Dh(D(18));EO=Dh(D(19));}
function BK(){var a=this;Bp.call(a);a.w=null;a.H=null;}
function Cw(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.w;e=0;f=0;g=a.H;a:{b:{while(true){if((e+32|0)>f&&X(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;k=Q(b)+j|0;h=i.length;f=By(k,h);e=f-j|0;if(j<0)break b;if(j>h)break b;k=j+e|0;if(k>h){l=new M;b=P();L(H(L(H(b,D(20)),k),D(10)),h);K(l,O(b));E(l);}if(Q(b)<e)break;if(e<0){b=new M;c=P();H(L(H(c,D(11)),e),D(12));K(b,O(c));E(b);}h=b.c;m=0;n=h;while(m<e){o=j+1|0;k=n+1|0;i[j]=b.O.data[n+b.x|0];m=m+1|0;j=o;n=k;}b.c=h+e|0;e=0;}if(!X(c)){l=!X(b)&&
e>=f?EI:EH;break a;}i=g.data;k=By(Q(c),i.length);p=new Ck;p.R=b;p.E=c;l=CP(a,d,e,f,g,0,k,p);e=p.Q;j=p.L;if(l===null){if(!X(b)&&e>=f)l=EI;else if(!X(c)&&e>=f)l=EH;}Cv(c,g,0,j);if(l!==null)break a;}b=new BW;I(b);E(b);}p=new M;l=P();Bl(L(H(L(H(l,D(13)),j),D(8)),h),41);K(p,O(l));E(p);}BT(b,b.c-(f-e|0)|0);return l;}
var Cn=C(BK);
function CP(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(BB(h,2))break a;i=EH;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!(!Cf(l)&&!B4(l)?0:1)){if((f+3|0)>g){j=j+(-1)|0;if(BB(h,3))break a;i=EH;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!Cf(l))
{i=BN(1);break a;}if(j>=d){if(X(h.R))break a;i=EI;break a;}c=j+1|0;n=k[j];if(!B4(n)){j=c+(-2)|0;i=BN(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(BB(h,4))break a;i=EH;break a;}k=e.data;o=((l&1023)<<10|n&1023)+65536|0;n=f+1|0;k[f]=(240|o>>18)<<24>>24;f=n+1|0;k[n]=(128|o>>12&63)<<24>>24;n=f+1|0;k[f]=(128|o>>6&63)<<24>>24;m=n+1|0;k[n]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.Q=j;h.L=f;return i;}
var Cg=C(T);
var C9=C();
var Da=C();
var Br=C(F);
var BS=C(Bd);
var Bi=C(F);
function Ck(){var a=this;B.call(a);a.R=null;a.E=null;a.Q=0;a.L=0;}
function BB(a,b){return Q(a.E)<b?0:1;}
var B9=C(Bi);
var Cr=C(F);
var BW=C(F);
$rt_packages([]);
$rt_metadata([B,0,0,[],0,3,0,0,0,CW,0,B,[],0,3,0,0,0,BO,0,B,[],3,3,0,0,0,B1,0,B,[],3,3,0,0,0,B0,0,B,[BO,B1],0,3,0,0,0,CO,0,B,[],4,0,0,0,0,C4,0,B,[],4,3,0,0,0,Y,0,B,[],0,3,0,0,0,T,0,Y,[],0,3,0,0,0,F,0,T,[],0,3,0,0,0,C$,0,F,[],0,3,0,0,0,Bh,0,B,[],3,3,0,0,0,S,0,B,[],3,3,0,0,0,Bk,0,B,[],3,3,0,0,0,R,0,B,[Bh,S,Bk],0,3,0,C1,0,Bd,0,Y,[],0,3,0,0,0,Bc,0,Bd,[],0,3,0,0,0,CB,0,Bc,[],0,3,0,0,0,Bx,0,B,[Bh],1,3,0,0,0,Ce,0,Bx,[S],0,3,0,0,0,BF,0,B,[Bh,Bk],0,0,0,0,0,BM,0,B,[],3,3,0,0,0,CR,0,BF,[BM],0,3,0,0,0,Z,0,Bc,[],0,3,0,0,
0,C8,0,Z,[],0,3,0,0,0,CN,0,Z,[],0,3,0,0,0,BQ,0,B,[],3,3,0,0,0,BU,0,B,[BQ],3,0,0,0,0,B5,0,B,[BU],0,3,0,0,["bx",D0(Dr)],B8,0,B,[],4,3,0,0,0,C7,0,B,[],4,3,0,0,0,Cj,0,B,[],3,3,0,0,0,Cu,0,B,[Cj],0,3,0,0,0,M,0,F,[],0,3,0,0,0,CF,0,B,[],4,3,0,0,0,B_,0,F,[],0,3,0,0,0,Bn,0,F,[],0,3,0,0,0,Bo,0,B,[S],0,3,0,0,0,BI,0,M,[],0,3,0,0,0,BY,0,B,[],3,3,0,0,0,BX,0,B,[BY],3,3,0,0,0,Ct,0,B,[],3,3,0,0,0,Ba,0,B,[BX,Ct],1,3,0,0,0,BC,0,Ba,[],0,3,0,0,0,B6,0,BC,[],0,3,0,0,0,Bq,0,Ba,[],1,3,0,0,0,BA,0,Bq,[],0,3,0,0,0,Bs,0,B,[S],1,3,0,0,0,BD,
0,Bs,[],0,3,0,Dc,0,U,0,F,[],0,3,0,0,0]);
$rt_metadata([C6,0,U,[],0,3,0,0,0,Ch,0,B,[],3,3,0,0,0,BZ,0,T,[],0,3,0,0,0,Bb,0,B,[],1,3,0,0,0,Cm,0,B,[],3,3,0,0,0,BL,0,Bb,[S,BM,Bk,Cm],1,3,0,0,0,CJ,0,B,[],4,3,0,0,0,Bv,0,Bb,[S],1,3,0,0,0,Bg,0,B,[],0,3,0,CE,0,Bw,0,BL,[],1,0,0,0,0,B7,0,Bw,[],0,0,0,0,0,Bp,0,B,[],1,3,0,0,0,BE,0,B,[],0,3,0,0,0,Cs,0,Bv,[],0,0,0,0,0,Bu,0,B,[],4,3,0,Dw,0,BK,0,Bp,[],1,3,0,0,0,Cn,0,BK,[],0,3,0,0,0,Cg,0,T,[],0,3,0,0,0,C9,0,B,[],4,3,0,0,0,Da,0,B,[],0,3,0,0,0,Br,0,F,[],0,3,0,0,0,BS,0,Bd,[],0,3,0,0,0,Bi,0,F,[],0,3,0,0,0,Ck,0,B,[],0,3,0,0,
0,B9,0,Bi,[],0,3,0,0,0,Cr,0,F,[],0,3,0,0,0,BW,0,F,[],0,3,0,0,0]);
function $rt_array(cls,data){this.cg=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","Either src or dest is null","null","Index out of bounds","Action must be non-null","UTF-8","New position "," is outside of range [0;","The last byte in src "," is outside of array of size ","Length "," must be non-negative","Offset ","IGNORE","REPLACE","REPORT","Replacement preconditions do not hold","BIG_ENDIAN","LITTLE_ENDIAN","The last char in dst "]);
R.prototype.toString=function(){return $rt_ustr(this);};
R.prototype.valueOf=R.prototype.toString;B.prototype.toString=function(){return $rt_ustr(Du(this));};
B.prototype.__teavm_class__=function(){return $dbg_class(this);};
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(DD);
$rt_exports.main.javaException=$rt_javaException;
let EP=$rt_globals.Symbol('jsoClass');
(function(){var c;c=B5.prototype;c[EP]=true;c.executeEia=c.bx;})();
}));
