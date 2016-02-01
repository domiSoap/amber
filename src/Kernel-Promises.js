define("amber_core/Kernel-Promises", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Kernel-Infrastructure"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Kernel-Promises');
$core.packages["Kernel-Promises"].innerEval = function (expr) { return eval(expr); };
$core.packages["Kernel-Promises"].transport = {"type":"amd","amdNamespace":"amber_core"};

$core.addClass('Thenable', $globals.Object, [], 'Kernel-Promises');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Thenable.comment="I am the abstract base class for Promises.\x0a\x0aMy subclasses should wrap existing JS implementations.\x0a\x0aI contain methods that wrap Promises/A+ `.then` behaviour.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "catch:",
protocol: 'promises',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.then(null, function (err) {
    return aBlock._value_(err);
});
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"catch:",{aBlock:aBlock},$globals.Thenable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "catch: aBlock\x0a<return self.then(null, function (err) {\x0a    return aBlock._value_(err);\x0a})>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Thenable);

$core.addMethod(
$core.method({
selector: "on:do:",
protocol: 'promises',
fn: function (aClass,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.then(null, function (err) {
    if (err._isKindOf_(aClass)) return aBlock._value_(err);
    else throw err;
});
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:do:",{aClass:aClass,aBlock:aBlock},$globals.Thenable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aBlock"],
source: "on: aClass do: aBlock\x0a<return self.then(null, function (err) {\x0a    if (err._isKindOf_(aClass)) return aBlock._value_(err);\x0a    else throw err;\x0a})>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Thenable);

$core.addMethod(
$core.method({
selector: "on:do:catch:",
protocol: 'promises',
fn: function (aClass,aBlock,anotherBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self.then(null, function (err) {
    try { if (err._isKindOf_(aClass)) return aBlock._value_(err); } catch (e) { err = e; }
    return anotherBlock._value_(err);
});
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:do:catch:",{aClass:aClass,aBlock:aBlock,anotherBlock:anotherBlock},$globals.Thenable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aBlock", "anotherBlock"],
source: "on: aClass do: aBlock catch: anotherBlock\x0a<return self.then(null, function (err) {\x0a    try { if (err._isKindOf_(aClass)) return aBlock._value_(err); } catch (e) { err = e; }\x0a    return anotherBlock._value_(err);\x0a})>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Thenable);

$core.addMethod(
$core.method({
selector: "then:",
protocol: 'promises',
fn: function (aBlockOrArray){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

var array = Array.isArray(aBlockOrArray) ? aBlockOrArray : [aBlockOrArray];
return array.reduce(function (soFar, aBlock) {
    return soFar.then(typeof aBlock === "function" && aBlock.length > 1 ?
        function (result) {
            if (Array.isArray(result)) {
                return aBlock._valueWithPossibleArguments_([result].concat(result.slice(0, aBlock.length-1)));
            } else {
                return aBlock._value_(result);
            }
        } :
        function (result) {
            return aBlock._value_(result);
        }
    );
}, self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"then:",{aBlockOrArray:aBlockOrArray},$globals.Thenable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlockOrArray"],
source: "then: aBlockOrArray\x0a\x22Accepts a block or array of blocks.\x0aEach of blocks in the array or the singleton one is\x0aused in .then call to a promise, to accept a result\x0aand transform it to the result for the next one.\x0aIn case a block has more than one argument\x0aand result is an array, first n-1 elements of the array\x0aare put into additional arguments beyond the first.\x0aThe first argument always contains the result as-is.\x22\x0a<\x0avar array = Array.isArray(aBlockOrArray) ? aBlockOrArray : [aBlockOrArray];\x0areturn array.reduce(function (soFar, aBlock) {\x0a    return soFar.then(typeof aBlock === \x22function\x22 && aBlock.length >> 1 ?\x0a        function (result) {\x0a            if (Array.isArray(result)) {\x0a                return aBlock._valueWithPossibleArguments_([result].concat(result.slice(0, aBlock.length-1)));\x0a            } else {\x0a                return aBlock._value_(result);\x0a            }\x0a        } :\x0a        function (result) {\x0a            return aBlock._value_(result);\x0a        }\x0a    );\x0a}, self)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Thenable);

$core.addMethod(
$core.method({
selector: "then:catch:",
protocol: 'promises',
fn: function (aBlockOrArray,anotherBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self._then_(aBlockOrArray))._catch_(anotherBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"then:catch:",{aBlockOrArray:aBlockOrArray,anotherBlock:anotherBlock},$globals.Thenable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlockOrArray", "anotherBlock"],
source: "then: aBlockOrArray catch: anotherBlock\x0a\x09^ (self then: aBlockOrArray) catch: anotherBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["catch:", "then:"]
}),
$globals.Thenable);

$core.addMethod(
$core.method({
selector: "then:on:do:",
protocol: 'promises',
fn: function (aBlockOrArray,aClass,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self._then_(aBlockOrArray))._on_do_(aClass,aBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"then:on:do:",{aBlockOrArray:aBlockOrArray,aClass:aClass,aBlock:aBlock},$globals.Thenable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlockOrArray", "aClass", "aBlock"],
source: "then: aBlockOrArray on: aClass do: aBlock\x0a\x09^ (self then: aBlockOrArray) on: aClass do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["on:do:", "then:"]
}),
$globals.Thenable);

$core.addMethod(
$core.method({
selector: "then:on:do:catch:",
protocol: 'promises',
fn: function (aBlockOrArray,aClass,aBlock,anotherBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv(self._then_(aBlockOrArray))._on_do_(aClass,aBlock))._catch_(anotherBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"then:on:do:catch:",{aBlockOrArray:aBlockOrArray,aClass:aClass,aBlock:aBlock,anotherBlock:anotherBlock},$globals.Thenable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlockOrArray", "aClass", "aBlock", "anotherBlock"],
source: "then: aBlockOrArray on: aClass do: aBlock catch: anotherBlock\x0a\x09^ ((self then: aBlockOrArray) on: aClass do: aBlock) catch: anotherBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["catch:", "on:do:", "then:"]
}),
$globals.Thenable);



$core.addClass('Promise', $globals.Thenable, [], 'Kernel-Promises');

$core.addMethod(
$core.method({
selector: "all:",
protocol: '*Kernel-Promises',
fn: function (nadicBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var js = self["@jsObject"];
if (typeof js.then === "function")
    return $globals.Thenable.fn.prototype._all_.call(js, nadicBlock);
else
    return self._doesNotUnderstand_(
        $globals.Message._new()
            ._selector_("all:")
            ._arguments_([nadicBlock])
    );
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"all:",{nadicBlock:nadicBlock},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["nadicBlock"],
source: "all: nadicBlock\x0a<var js = self[\x22@jsObject\x22];\x0aif (typeof js.then === \x22function\x22)\x0a    return $globals.Thenable.fn.prototype._all_.call(js, nadicBlock);\x0aelse\x0a    return self._doesNotUnderstand_(\x0a        $globals.Message._new()\x0a            ._selector_(\x22all:\x22)\x0a            ._arguments_([nadicBlock])\x0a    )>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "catch:",
protocol: '*Kernel-Promises',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var js = self["@jsObject"];
if (typeof js.then === "function")
    return $globals.Thenable.fn.prototype._catch_.call(js, aBlock);
else
    return self._doesNotUnderstand_(
        $globals.Message._new()
            ._selector_("catch:")
            ._arguments_([aBlock])
    );
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"catch:",{aBlock:aBlock},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "catch: aBlock\x0a<var js = self[\x22@jsObject\x22];\x0aif (typeof js.then === \x22function\x22)\x0a    return $globals.Thenable.fn.prototype._catch_.call(js, aBlock);\x0aelse\x0a    return self._doesNotUnderstand_(\x0a        $globals.Message._new()\x0a            ._selector_(\x22catch:\x22)\x0a            ._arguments_([aBlock])\x0a    )>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "on:do:",
protocol: '*Kernel-Promises',
fn: function (aClass,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var js = self["@jsObject"];
if (typeof js.then === "function")
    return $globals.Thenable.fn.prototype._on_do_.call(js, aClass, aBlock);
else
    return self._doesNotUnderstand_(
        $globals.Message._new()
            ._selector_("on:do:")
            ._arguments_([aClass, aBlock])
    );
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:do:",{aClass:aClass,aBlock:aBlock},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aBlock"],
source: "on: aClass do: aBlock\x0a<var js = self[\x22@jsObject\x22];\x0aif (typeof js.then === \x22function\x22)\x0a    return $globals.Thenable.fn.prototype._on_do_.call(js, aClass, aBlock);\x0aelse\x0a    return self._doesNotUnderstand_(\x0a        $globals.Message._new()\x0a            ._selector_(\x22on:do:\x22)\x0a            ._arguments_([aClass, aBlock])\x0a    )>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "on:do:catch:",
protocol: '*Kernel-Promises',
fn: function (aClass,aBlock,anotherBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var js = self["@jsObject"];
if (typeof js.then === "function")
    return $globals.Thenable.fn.prototype._on_do_catch_.call(js, aClass, aBlock, anotherBlock);
else
    return self._doesNotUnderstand_(
        $globals.Message._new()
            ._selector_("on:do:catch:")
            ._arguments_([aClass, aBlock, anotherBlock])
    );
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:do:catch:",{aClass:aClass,aBlock:aBlock,anotherBlock:anotherBlock},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass", "aBlock", "anotherBlock"],
source: "on: aClass do: aBlock catch: anotherBlock\x0a<var js = self[\x22@jsObject\x22];\x0aif (typeof js.then === \x22function\x22)\x0a    return $globals.Thenable.fn.prototype._on_do_catch_.call(js, aClass, aBlock, anotherBlock);\x0aelse\x0a    return self._doesNotUnderstand_(\x0a        $globals.Message._new()\x0a            ._selector_(\x22on:do:catch:\x22)\x0a            ._arguments_([aClass, aBlock, anotherBlock])\x0a    )>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "then:",
protocol: '*Kernel-Promises',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var js = self["@jsObject"];
if (typeof js.then === "function")
    return $globals.Thenable.fn.prototype._then_.call(js, aBlock);
else
    return self._doesNotUnderstand_(
        $globals.Message._new()
            ._selector_("then:")
            ._arguments_([aBlock])
    );
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"then:",{aBlock:aBlock},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "then: aBlock\x0a<var js = self[\x22@jsObject\x22];\x0aif (typeof js.then === \x22function\x22)\x0a    return $globals.Thenable.fn.prototype._then_.call(js, aBlock);\x0aelse\x0a    return self._doesNotUnderstand_(\x0a        $globals.Message._new()\x0a            ._selector_(\x22then:\x22)\x0a            ._arguments_([aBlock])\x0a    )>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSObjectProxy);

});
