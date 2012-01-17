/*
 *  /MathJax/jax/input/AsciiMath/jax.js
 *  
 *  Copyright (c) 2010 Design Science, Inc.
 *
 *  Part of the MathJax library.
 *  See http://www.mathjax.org for details.
 * 
 *  Licensed under the Apache License, Version 2.0;
 *  you may not use this file except in compliance with the License.
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 */

(function(ae){var j;var Z=MathJax.Object.Subclass({firstChild:null,lastChild:null,Init:function(){this.childNodes=[]},appendChild:function(ag){if(ag.parent){ag.parent.removeChild(ag)}if(this.lastChild){this.lastChild.nextSibling=ag}if(!this.firstChild){this.firstChild=ag}this.childNodes.push(ag);ag.parent=this;this.lastChild=ag;return ag},removeChild:function(ai){for(var ah=0,ag=this.childNodes.length;ah<ag;ah++){if(this.childNodes[ah]===ai){break}}if(ah===ag){return}this.childNodes.splice(ah,1);if(ai===this.firstChild){this.firstChild=ai.nextSibling}if(ai===this.lastChild){if(!this.childNodes.length){this.lastChild=null}else{this.lastChild=this.childNodes[this.childNodes.length-1]}}if(ah){this.childNodes[ah-1].nextSibling=ai.nextSibling}ai.nextSibling=ai.parent=null;return ai},replaceChild:function(aj,ah){for(var ai=0,ag=this.childNodes.length;ai<ag;ai++){if(this.childNodes[ai]===ah){break}}if(ai){this.childNodes[ai-1].nextSibling=aj}else{this.firstChild=aj}if(ai>=ag-1){this.lastChild=aj}this.childNodes[ai]=aj;aj.nextSibling=ah.nextSibling;ah.nextSibling=ah.parent=null;return ah}});var D=function(){j=MathJax.ElementJax.mml;var ag=j.mbase.prototype.Init;j.mbase.Augment({firstChild:null,lastChild:null,nodeValue:"",nextSibling:null,Init:function(){var ah=ag.apply(this,arguments)||this;ah.childNodes=ah.data;ah.nodeName=ah.type;return ah},appendChild:function(ak){if(ak.parent){ak.parent.removeChild(ak)}var ai=arguments;if(ak.isa(Z)){ai=ak.childNodes}for(var aj=0,ah=ai.length;aj<ah;aj++){ak=ai[aj];if(this.lastChild){this.lastChild.nextSibling=ak}if(!this.firstChild){this.firstChild=ak}this.Append(ak);this.lastChild=ak;this.nodeValue+=ak.nodeValue}return ak},removeChild:function(aj){for(var ai=0,ah=this.childNodes.length;ai<ah;ai++){if(this.childNodes[ai]===aj){break}}if(ai===ah){return}this.childNodes.splice(ai,1);if(aj===this.firstChild){this.firstChild=aj.nextSibling}if(aj===this.lastChild){if(!this.childNodes.length){this.lastChild=null}else{this.lastChild=this.childNodes[this.childNodes.length-1]}}if(ai){this.childNodes[ai-1].nextSibling=aj.nextSibling}this.nodeValue="";for(ai=0,ah=this.childNodes.length;ai<ah;ai++){this.nodeValue+=this.childNodes[ai].nodeValue}aj.nextSibling=aj.parent=null;return aj},replaceChild:function(ak,ai){for(var aj=0,ah=this.childNodes.length;aj<ah;aj++){if(this.childNodes[aj]===ai){break}}if(aj){this.childNodes[aj-1].nextSibling=ak}else{this.firstChild=ak}if(aj>=ah-1){this.lastChild=ak}this.SetData(aj,ak);ak.nextSibling=ai.nextSibling;this.nodeValue="";for(aj=0,ah=this.childNodes.length;aj<ah;aj++){this.nodeValue+=this.childNodes[aj].nodeValue}ai.nextSibling=ai.parent=null;return ai},setAttribute:function(ah,ai){this[ah]=ai}})};var R={};var g={getElementById:true,createElementNS:function(ah,ag){return j[ag]()},createTextNode:function(ag){return j.chars(ag).With({nodeValue:ag})},createDocumentFragment:function(){return Z()}};var N={appName:"MathJax"};var H="red";var ab="serif";var s=true;var B=true;var f=".";var p=g.createElementNS==null;function U(ag){if(p){return g.createElement(ag)}else{return g.createElementNS("http://www.w3.org/1999/xhtml",ag)}}var I=[61237,8492,61238,61239,8496,8497,61240,8459,8464,61241,61242,8466,8499,61243,61244,61245,61246,8475,61247,61248,61249,61250,61251,61252,61253,61254];var M=[61277,61278,8493,61279,61280,61281,61282,8460,8465,61283,61284,61285,61286,61287,61288,61289,61290,8476,61291,61292,61293,61294,61295,61296,61297,8488];var C=[61324,61325,8450,61326,61327,61328,61329,8461,61330,61331,61332,61333,61334,8469,61335,8473,8474,8477,61336,61337,61338,61339,61340,61341,61342,8484];var d=0,G=1,W=2,l=3,b=4,k=5,a=6,O=7,Y=8,q=9,aa=10;var i={input:"sqrt",tag:"msqrt",output:"sqrt",tex:null,ttype:G},ad={input:"root",tag:"mroot",output:"root",tex:null,ttype:W},z={input:"frac",tag:"mfrac",output:"/",tex:null,ttype:W},P={input:"/",tag:"mfrac",output:"/",tex:null,ttype:l},n={input:"stackrel",tag:"mover",output:"stackrel",tex:null,ttype:W},r={input:"_",tag:"msub",output:"_",tex:null,ttype:l},h={input:"^",tag:"msup",output:"^",tex:null,ttype:l},af={input:"text",tag:"mtext",output:"text",tex:null,ttype:aa},w={input:"mbox",tag:"mtext",output:"mbox",tex:null,ttype:aa},o={input:'"',tag:"mtext",output:"mbox",tex:null,ttype:aa};var F=[{input:"alpha",tag:"mi",output:"\u03B1",tex:null,ttype:d},{input:"beta",tag:"mi",output:"\u03B2",tex:null,ttype:d},{input:"chi",tag:"mi",output:"\u03C7",tex:null,ttype:d},{input:"delta",tag:"mi",output:"\u03B4",tex:null,ttype:d},{input:"Delta",tag:"mo",output:"\u0394",tex:null,ttype:d},{input:"epsi",tag:"mi",output:"\u03B5",tex:"epsilon",ttype:d},{input:"varepsilon",tag:"mi",output:"\u025B",tex:null,ttype:d},{input:"eta",tag:"mi",output:"\u03B7",tex:null,ttype:d},{input:"gamma",tag:"mi",output:"\u03B3",tex:null,ttype:d},{input:"Gamma",tag:"mo",output:"\u0393",tex:null,ttype:d},{input:"iota",tag:"mi",output:"\u03B9",tex:null,ttype:d},{input:"kappa",tag:"mi",output:"\u03BA",tex:null,ttype:d},{input:"lambda",tag:"mi",output:"\u03BB",tex:null,ttype:d},{input:"Lambda",tag:"mo",output:"\u039B",tex:null,ttype:d},{input:"mu",tag:"mi",output:"\u03BC",tex:null,ttype:d},{input:"nu",tag:"mi",output:"\u03BD",tex:null,ttype:d},{input:"omega",tag:"mi",output:"\u03C9",tex:null,ttype:d},{input:"Omega",tag:"mo",output:"\u03A9",tex:null,ttype:d},{input:"phi",tag:"mi",output:"\u03C6",tex:null,ttype:d},{input:"varphi",tag:"mi",output:"\u03D5",tex:null,ttype:d},{input:"Phi",tag:"mo",output:"\u03A6",tex:null,ttype:d},{input:"pi",tag:"mi",output:"\u03C0",tex:null,ttype:d},{input:"Pi",tag:"mo",output:"\u03A0",tex:null,ttype:d},{input:"psi",tag:"mi",output:"\u03C8",tex:null,ttype:d},{input:"Psi",tag:"mi",output:"\u03A8",tex:null,ttype:d},{input:"rho",tag:"mi",output:"\u03C1",tex:null,ttype:d},{input:"sigma",tag:"mi",output:"\u03C3",tex:null,ttype:d},{input:"Sigma",tag:"mo",output:"\u03A3",tex:null,ttype:d},{input:"tau",tag:"mi",output:"\u03C4",tex:null,ttype:d},{input:"theta",tag:"mi",output:"\u03B8",tex:null,ttype:d},{input:"vartheta",tag:"mi",output:"\u03D1",tex:null,ttype:d},{input:"Theta",tag:"mo",output:"\u0398",tex:null,ttype:d},{input:"upsilon",tag:"mi",output:"\u03C5",tex:null,ttype:d},{input:"xi",tag:"mi",output:"\u03BE",tex:null,ttype:d},{input:"Xi",tag:"mo",output:"\u039E",tex:null,ttype:d},{input:"zeta",tag:"mi",output:"\u03B6",tex:null,ttype:d},{input:"*",tag:"mo",output:"\u22C5",tex:"cdot",ttype:d},{input:"**",tag:"mo",output:"\u22C6",tex:"star",ttype:d},{input:"//",tag:"mo",output:"/",tex:null,ttype:d},{input:"\\\\",tag:"mo",output:"\\",tex:"backslash",ttype:d},{input:"setminus",tag:"mo",output:"\\",tex:null,ttype:d},{input:"xx",tag:"mo",output:"\u00D7",tex:"times",ttype:d},{input:"-:",tag:"mo",output:"\u00F7",tex:"divide",ttype:d},{input:"@",tag:"mo",output:"\u2218",tex:"circ",ttype:d},{input:"o+",tag:"mo",output:"\u2295",tex:"oplus",ttype:d},{input:"ox",tag:"mo",output:"\u2297",tex:"otimes",ttype:d},{input:"o.",tag:"mo",output:"\u2299",tex:"odot",ttype:d},{input:"sum",tag:"mo",output:"\u2211",tex:null,ttype:O},{input:"prod",tag:"mo",output:"\u220F",tex:null,ttype:O},{input:"^^",tag:"mo",output:"\u2227",tex:"wedge",ttype:d},{input:"^^^",tag:"mo",output:"\u22C0",tex:"bigwedge",ttype:O},{input:"vv",tag:"mo",output:"\u2228",tex:"vee",ttype:d},{input:"vvv",tag:"mo",output:"\u22C1",tex:"bigvee",ttype:O},{input:"nn",tag:"mo",output:"\u2229",tex:"cap",ttype:d},{input:"nnn",tag:"mo",output:"\u22C2",tex:"bigcap",ttype:O},{input:"uu",tag:"mo",output:"\u222A",tex:"cup",ttype:d},{input:"uuu",tag:"mo",output:"\u22C3",tex:"bigcup",ttype:O},{input:"!=",tag:"mo",output:"\u2260",tex:"ne",ttype:d},{input:":=",tag:"mo",output:":=",tex:null,ttype:d},{input:"lt",tag:"mo",output:"<",tex:null,ttype:d},{input:"<=",tag:"mo",output:"\u2264",tex:"le",ttype:d},{input:"lt=",tag:"mo",output:"\u2264",tex:"leq",ttype:d},{input:">=",tag:"mo",output:"\u2265",tex:"ge",ttype:d},{input:"geq",tag:"mo",output:"\u2265",tex:null,ttype:d},{input:"-<",tag:"mo",output:"\u227A",tex:"prec",ttype:d},{input:"-lt",tag:"mo",output:"\u227A",tex:null,ttype:d},{input:">-",tag:"mo",output:"\u227B",tex:"succ",ttype:d},{input:"in",tag:"mo",output:"\u2208",tex:null,ttype:d},{input:"!in",tag:"mo",output:"\u2209",tex:"notin",ttype:d},{input:"sub",tag:"mo",output:"\u2282",tex:"subset",ttype:d},{input:"sup",tag:"mo",output:"\u2283",tex:"supset",ttype:d},{input:"sube",tag:"mo",output:"\u2286",tex:"subseteq",ttype:d},{input:"supe",tag:"mo",output:"\u2287",tex:"supseteq",ttype:d},{input:"-=",tag:"mo",output:"\u2261",tex:"equiv",ttype:d},{input:"~=",tag:"mo",output:"\u2245",tex:"cong",ttype:d},{input:"~~",tag:"mo",output:"\u2248",tex:"approx",ttype:d},{input:"prop",tag:"mo",output:"\u221D",tex:"propto",ttype:d},{input:"and",tag:"mtext",output:"and",tex:null,ttype:a},{input:"or",tag:"mtext",output:"or",tex:null,ttype:a},{input:"not",tag:"mo",output:"\u00AC",tex:"neg",ttype:d},{input:"=>",tag:"mo",output:"\u21D2",tex:"implies",ttype:d},{input:"if",tag:"mo",output:"if",tex:null,ttype:a},{input:"<=>",tag:"mo",output:"\u21D4",tex:"iff",ttype:d},{input:"AA",tag:"mo",output:"\u2200",tex:"forall",ttype:d},{input:"EE",tag:"mo",output:"\u2203",tex:"exists",ttype:d},{input:"_|_",tag:"mo",output:"\u22A5",tex:"bot",ttype:d},{input:"TT",tag:"mo",output:"\u22A4",tex:"top",ttype:d},{input:"|--",tag:"mo",output:"\u22A2",tex:"vdash",ttype:d},{input:"|==",tag:"mo",output:"\u22A8",tex:"models",ttype:d},{input:"(",tag:"mo",output:"(",tex:null,ttype:b},{input:")",tag:"mo",output:")",tex:null,ttype:k},{input:"[",tag:"mo",output:"[",tex:null,ttype:b},{input:"]",tag:"mo",output:"]",tex:null,ttype:k},{input:"{",tag:"mo",output:"{",tex:null,ttype:b},{input:"}",tag:"mo",output:"}",tex:null,ttype:k},{input:"|",tag:"mo",output:"|",tex:null,ttype:q},{input:"(:",tag:"mo",output:"\u2329",tex:"langle",ttype:b},{input:":)",tag:"mo",output:"\u232A",tex:"rangle",ttype:k},{input:"<<",tag:"mo",output:"\u2329",tex:null,ttype:b},{input:">>",tag:"mo",output:"\u232A",tex:null,ttype:k},{input:"{:",tag:"mo",output:"{:",tex:null,ttype:b,invisible:true},{input:":}",tag:"mo",output:":}",tex:null,ttype:k,invisible:true},{input:"int",tag:"mo",output:"\u222B",tex:null,ttype:d},{input:"dx",tag:"mi",output:"{:d x:}",tex:null,ttype:Y},{input:"dy",tag:"mi",output:"{:d y:}",tex:null,ttype:Y},{input:"dz",tag:"mi",output:"{:d z:}",tex:null,ttype:Y},{input:"dt",tag:"mi",output:"{:d t:}",tex:null,ttype:Y},{input:"oint",tag:"mo",output:"\u222E",tex:null,ttype:d},{input:"del",tag:"mo",output:"\u2202",tex:"partial",ttype:d},{input:"grad",tag:"mo",output:"\u2207",tex:"nabla",ttype:d},{input:"+-",tag:"mo",output:"\u00B1",tex:"pm",ttype:d},{input:"O/",tag:"mo",output:"\u2205",tex:"emptyset",ttype:d},{input:"oo",tag:"mo",output:"\u221E",tex:"infty",ttype:d},{input:"aleph",tag:"mo",output:"\u2135",tex:null,ttype:d},{input:"...",tag:"mo",output:"...",tex:"ldots",ttype:d},{input:":.",tag:"mo",output:"\u2234",tex:"therefore",ttype:d},{input:"/_",tag:"mo",output:"\u2220",tex:"angle",ttype:d},{input:"\\ ",tag:"mo",output:"\u00A0",tex:null,ttype:d},{input:"quad",tag:"mo",output:"\u00A0\u00A0",tex:null,ttype:d},{input:"qquad",tag:"mo",output:"\u00A0\u00A0\u00A0\u00A0",tex:null,ttype:d},{input:"cdots",tag:"mo",output:"\u22EF",tex:null,ttype:d},{input:"vdots",tag:"mo",output:"\u22EE",tex:null,ttype:d},{input:"ddots",tag:"mo",output:"\u22F1",tex:null,ttype:d},{input:"diamond",tag:"mo",output:"\u22C4",tex:null,ttype:d},{input:"square",tag:"mo",output:"\u25A1",tex:null,ttype:d},{input:"|__",tag:"mo",output:"\u230A",tex:"lfloor",ttype:d},{input:"__|",tag:"mo",output:"\u230B",tex:"rfloor",ttype:d},{input:"|~",tag:"mo",output:"\u2308",tex:"lceiling",ttype:d},{input:"~|",tag:"mo",output:"\u2309",tex:"rceiling",ttype:d},{input:"CC",tag:"mo",output:"\u2102",tex:null,ttype:d},{input:"NN",tag:"mo",output:"\u2115",tex:null,ttype:d},{input:"QQ",tag:"mo",output:"\u211A",tex:null,ttype:d},{input:"RR",tag:"mo",output:"\u211D",tex:null,ttype:d},{input:"ZZ",tag:"mo",output:"\u2124",tex:null,ttype:d},{input:"f",tag:"mi",output:"f",tex:null,ttype:G,func:true},{input:"g",tag:"mi",output:"g",tex:null,ttype:G,func:true},{input:"lim",tag:"mo",output:"lim",tex:null,ttype:O},{input:"Lim",tag:"mo",output:"Lim",tex:null,ttype:O},{input:"sin",tag:"mo",output:"sin",tex:null,ttype:G,func:true},{input:"cos",tag:"mo",output:"cos",tex:null,ttype:G,func:true},{input:"tan",tag:"mo",output:"tan",tex:null,ttype:G,func:true},{input:"sinh",tag:"mo",output:"sinh",tex:null,ttype:G,func:true},{input:"cosh",tag:"mo",output:"cosh",tex:null,ttype:G,func:true},{input:"tanh",tag:"mo",output:"tanh",tex:null,ttype:G,func:true},{input:"cot",tag:"mo",output:"cot",tex:null,ttype:G,func:true},{input:"sec",tag:"mo",output:"sec",tex:null,ttype:G,func:true},{input:"csc",tag:"mo",output:"csc",tex:null,ttype:G,func:true},{input:"log",tag:"mo",output:"log",tex:null,ttype:G,func:true},{input:"ln",tag:"mo",output:"ln",tex:null,ttype:G,func:true},{input:"det",tag:"mo",output:"det",tex:null,ttype:G,func:true},{input:"dim",tag:"mo",output:"dim",tex:null,ttype:d},{input:"mod",tag:"mo",output:"mod",tex:null,ttype:d},{input:"gcd",tag:"mo",output:"gcd",tex:null,ttype:G,func:true},{input:"lcm",tag:"mo",output:"lcm",tex:null,ttype:G,func:true},{input:"lub",tag:"mo",output:"lub",tex:null,ttype:d},{input:"glb",tag:"mo",output:"glb",tex:null,ttype:d},{input:"min",tag:"mo",output:"min",tex:null,ttype:O},{input:"max",tag:"mo",output:"max",tex:null,ttype:O},{input:"uarr",tag:"mo",output:"\u2191",tex:"uparrow",ttype:d},{input:"darr",tag:"mo",output:"\u2193",tex:"downarrow",ttype:d},{input:"rarr",tag:"mo",output:"\u2192",tex:"rightarrow",ttype:d},{input:"->",tag:"mo",output:"\u2192",tex:"to",ttype:d},{input:"|->",tag:"mo",output:"\u21A6",tex:"mapsto",ttype:d},{input:"larr",tag:"mo",output:"\u2190",tex:"leftarrow",ttype:d},{input:"harr",tag:"mo",output:"\u2194",tex:"leftrightarrow",ttype:d},{input:"rArr",tag:"mo",output:"\u21D2",tex:"Rightarrow",ttype:d},{input:"lArr",tag:"mo",output:"\u21D0",tex:"Leftarrow",ttype:d},{input:"hArr",tag:"mo",output:"\u21D4",tex:"Leftrightarrow",ttype:d},i,ad,z,P,n,r,h,{input:"hat",tag:"mover",output:"\u005E",tex:null,ttype:G,acc:true},{input:"bar",tag:"mover",output:"\u00AF",tex:"overline",ttype:G,acc:true},{input:"vec",tag:"mover",output:"\u2192",tex:null,ttype:G,acc:true},{input:"dot",tag:"mover",output:".",tex:null,ttype:G,acc:true},{input:"ddot",tag:"mover",output:"..",tex:null,ttype:G,acc:true},{input:"ul",tag:"munder",output:"\u0332",tex:"underline",ttype:G,acc:true},af,w,o,{input:"bb",tag:"mstyle",atname:"fontweight",atval:"bold",output:"bb",tex:null,ttype:G},{input:"mathbf",tag:"mstyle",atname:"fontweight",atval:"bold",output:"mathbf",tex:null,ttype:G},{input:"sf",tag:"mstyle",atname:"fontfamily",atval:"sans-serif",output:"sf",tex:null,ttype:G},{input:"mathsf",tag:"mstyle",atname:"fontfamily",atval:"sans-serif",output:"mathsf",tex:null,ttype:G},{input:"bbb",tag:"mstyle",atname:"mathvariant",atval:"double-struck",output:"bbb",tex:null,ttype:G,codes:C},{input:"mathbb",tag:"mstyle",atname:"mathvariant",atval:"double-struck",output:"mathbb",tex:null,ttype:G,codes:C},{input:"cc",tag:"mstyle",atname:"mathvariant",atval:"script",output:"cc",tex:null,ttype:G,codes:I},{input:"mathcal",tag:"mstyle",atname:"mathvariant",atval:"script",output:"mathcal",tex:null,ttype:G,codes:I},{input:"tt",tag:"mstyle",atname:"fontfamily",atval:"monospace",output:"tt",tex:null,ttype:G},{input:"mathtt",tag:"mstyle",atname:"fontfamily",atval:"monospace",output:"mathtt",tex:null,ttype:G},{input:"fr",tag:"mstyle",atname:"mathvariant",atval:"fraktur",output:"fr",tex:null,ttype:G,codes:M},{input:"mathfrak",tag:"mstyle",atname:"mathvariant",atval:"fraktur",output:"mathfrak",tex:null,ttype:G,codes:M}];function V(ah,ag){if(ah.input>ag.input){return 1}else{return -1}}var T=[];function u(){var ah=[],ag;for(ag=0;ag<F.length;ag++){if(F[ag].tex){ah[ah.length]={input:F[ag].tex,tag:F[ag].tag,output:F[ag].output,ttype:F[ag].ttype}}}F=F.concat(ah);F.sort(V);for(ag=0;ag<F.length;ag++){T[ag]=F[ag].input}}var X="http://www.w3.org/1998/Math/MathML";function Q(ag){if(p){return g.createElement("m:"+ag)}else{return g.createElementNS(X,ag)}}function L(ag,ai){if(p){var ah=g.createElement("m:"+ag)}else{ah=g.createElementNS(X,ag)}ah.appendChild(ai);return ah}function A(ag,ah){F=F.concat([{input:ag,tag:"mo",output:ah,tex:null,ttype:Y}])}function t(ai,aj){var ag;if(ai.charAt(aj)=="\\"&&ai.charAt(aj+1)!="\\"&&ai.charAt(aj+1)!=" "){ag=ai.slice(aj+1)}else{ag=ai.slice(aj)}for(var ah=0;ah<ag.length&&ag.charCodeAt(ah)<=32;ah=ah+1){}return ag.slice(ah)}function c(ah,ak,al){if(al==0){var aj,ag;al=-1;aj=ah.length;while(al+1<aj){ag=(al+aj)>>1;if(ah[ag]<ak){al=ag}else{aj=ag}}return aj}else{for(var ai=al;ai<ah.length&&ah[ai]<ak;ai++){}}return ai}function m(am){var ag=0;var ah=0;var aj;var ap;var ao;var ak="";var al=true;for(var ai=1;ai<=am.length&&al;ai++){ap=am.slice(0,ai);ah=ag;ag=c(T,ap,ah);if(ag<T.length&&am.slice(0,T[ag].length)==T[ag]){ak=T[ag];aj=ag;ai=ak.length}al=ag<T.length&&am.slice(0,T[ag].length)>=T[ag]}x=E;if(ak!=""){E=F[aj].ttype;return F[aj]}E=d;ag=1;ap=am.slice(0,1);var an=true;while("0"<=ap&&ap<="9"&&ag<=am.length){ap=am.slice(ag,ag+1);ag++}if(ap==f){ap=am.slice(ag,ag+1);if("0"<=ap&&ap<="9"){an=false;ag++;while("0"<=ap&&ap<="9"&&ag<=am.length){ap=am.slice(ag,ag+1);ag++}}}if((an&&ag>1)||ag>2){ap=am.slice(0,ag-1);ao="mn"}else{ag=2;ap=am.slice(0,1);ao=(("A">ap||ap>"Z")&&("a">ap||ap>"z")?"mo":"mi")}if(ap=="-"&&x==l){return{input:ap,tag:ao,output:ap,ttype:G,func:true}}return{input:ap,tag:ao,output:ap,ttype:d}}function S(ah){var ag;if(ah.nodeName=="mrow"){ag=ah.firstChild.firstChild.nodeValue;if(ag=="("||ag=="["||ag=="{"){ah.removeChild(ah.firstChild)}}if(ah.nodeName=="mrow"){ag=ah.lastChild.firstChild.nodeValue;if(ag==")"||ag=="]"||ag=="}"){ah.removeChild(ah.lastChild)}}}var J,x,E;function K(am){var ai,ah,ap,ak,ao,al=g.createDocumentFragment();am=t(am,0);ai=m(am);if(ai==null||ai.ttype==k&&J>0){return[null,am]}if(ai.ttype==Y){am=ai.output+t(am,ai.input.length);ai=m(am)}switch(ai.ttype){case O:case d:am=t(am,ai.input.length);return[L(ai.tag,g.createTextNode(ai.output)),am];case b:J++;am=t(am,ai.input.length);ap=v(am,true);J--;if(typeof ai.invisible=="boolean"&&ai.invisible){ah=L("mrow",ap[0])}else{ah=L("mo",g.createTextNode(ai.output));ah=L("mrow",ah);ah.appendChild(ap[0])}return[ah,ap[1]];case aa:if(ai!=o){am=t(am,ai.input.length)}if(am.charAt(0)=="{"){ak=am.indexOf("}")}else{if(am.charAt(0)=="("){ak=am.indexOf(")")}else{if(am.charAt(0)=="["){ak=am.indexOf("]")}else{if(ai==o){ak=am.slice(1).indexOf('"')+1}else{ak=0}}}}if(ak==-1){ak=am.length}ao=am.slice(1,ak);if(ao.charAt(0)==" "){ah=Q("mspace");ah.setAttribute("width","1ex");al.appendChild(ah)}al.appendChild(L(ai.tag,g.createTextNode(ao)));if(ao.charAt(ao.length-1)==" "){ah=Q("mspace");ah.setAttribute("width","1ex");al.appendChild(ah)}am=t(am,ak+1);return[L("mrow",al),am];case G:am=t(am,ai.input.length);ap=K(am);if(ap[0]==null){return[L(ai.tag,g.createTextNode(ai.output)),am]}if(typeof ai.func=="boolean"&&ai.func){ao=am.charAt(0);if(ao=="^"||ao=="_"||ao=="/"||ao=="|"||ao==","){return[L(ai.tag,g.createTextNode(ai.output)),am]}else{ah=L("mrow",L(ai.tag,g.createTextNode(ai.output)));ah.appendChild(ap[0]);return[ah,ap[1]]}}S(ap[0]);if(ai.input=="sqrt"){return[L(ai.tag,ap[0]),ap[1]]}else{if(typeof ai.acc=="boolean"&&ai.acc){ah=L(ai.tag,ap[0]);ah.appendChild(L("mo",g.createTextNode(ai.output)));return[ah,ap[1]]}else{if(!p&&typeof ai.codes!="undefined"){for(ak=0;ak<ap[0].childNodes.length;ak++){if(ap[0].childNodes[ak].nodeName=="mi"||ap[0].nodeName=="mi"){ao=(ap[0].nodeName=="mi"?ap[0].firstChild.nodeValue:ap[0].childNodes[ak].firstChild.nodeValue);var an=[];for(var aj=0;aj<ao.length;aj++){if(ao.charCodeAt(aj)>64&&ao.charCodeAt(aj)<91){an=an+String.fromCharCode(ai.codes[ao.charCodeAt(aj)-65])}else{an=an+ao.charAt(aj)}}if(ap[0].nodeName=="mi"){ap[0]=Q("mo").appendChild(g.createTextNode(an))}else{ap[0].replaceChild(Q("mo").appendChild(g.createTextNode(an)),ap[0].childNodes[ak])}}}}ah=L(ai.tag,ap[0]);ah.setAttribute(ai.atname,ai.atval);return[ah,ap[1]]}}case W:am=t(am,ai.input.length);ap=K(am);if(ap[0]==null){return[L("mo",g.createTextNode(ai.input)),am]}S(ap[0]);var ag=K(ap[1]);if(ag[0]==null){return[L("mo",g.createTextNode(ai.input)),am]}S(ag[0]);if(ai.input=="root"||ai.input=="stackrel"){al.appendChild(ag[0])}al.appendChild(ap[0]);if(ai.input=="frac"){al.appendChild(ag[0])}return[L(ai.tag,al),ag[1]];case l:am=t(am,ai.input.length);return[L("mo",g.createTextNode(ai.output)),am];case a:am=t(am,ai.input.length);ah=Q("mspace");ah.setAttribute("width","1ex");al.appendChild(ah);al.appendChild(L(ai.tag,g.createTextNode(ai.output)));ah=Q("mspace");ah.setAttribute("width","1ex");al.appendChild(ah);return[L("mrow",al),am];case q:J++;am=t(am,ai.input.length);ap=v(am,false);J--;ao="";if(ap[0].lastChild!=null){ao=ap[0].lastChild.firstChild.nodeValue}if(ao=="|"){ah=L("mo",g.createTextNode(ai.output));ah=L("mrow",ah);ah.appendChild(ap[0]);return[ah,ap[1]]}else{ah=L("mo",g.createTextNode(ai.output));ah=L("mrow",ah);return[ah,am]}default:am=t(am,ai.input.length);return[L(ai.tag,g.createTextNode(ai.output)),am]}}function y(am){var ak,an,al,aj,ag,ai;am=t(am,0);an=m(am);ag=K(am);aj=ag[0];am=ag[1];ak=m(am);if(ak.ttype==l&&ak.input!="/"){am=t(am,ak.input.length);ag=K(am);if(ag[0]==null){ag[0]=L("mo",g.createTextNode("\u25A1"))}else{S(ag[0])}am=ag[1];if(ak.input=="_"){al=m(am);ai=(an.ttype==O);if(al.input=="^"){am=t(am,al.input.length);var ah=K(am);S(ah[0]);am=ah[1];aj=L((ai?"munderover":"msubsup"),aj);aj.appendChild(ag[0]);aj.appendChild(ah[0]);aj=L("mrow",aj)}else{aj=L((ai?"munder":"msub"),aj);aj.appendChild(ag[0])}}else{aj=L(ak.tag,aj);aj.appendChild(ag[0])}}return[aj,am]}function v(ao,an){var at,ap,ak,aw,al=g.createDocumentFragment();do{ao=t(ao,0);ak=y(ao);ap=ak[0];ao=ak[1];at=m(ao);if(at.ttype==l&&at.input=="/"){ao=t(ao,at.input.length);ak=y(ao);if(ak[0]==null){ak[0]=L("mo",g.createTextNode("\u25A1"))}else{S(ak[0])}ao=ak[1];S(ap);ap=L(at.tag,ap);ap.appendChild(ak[0]);al.appendChild(ap);at=m(ao)}else{if(ap!=undefined){al.appendChild(ap)}}}while((at.ttype!=k&&(at.ttype!=q||an)||J==0)&&at!=null&&at.output!="");if(at.ttype==k||at.ttype==q){var ax=al.childNodes.length;if(ax>0&&al.childNodes[ax-1].nodeName=="mrow"&&ax>1&&al.childNodes[ax-2].nodeName=="mo"&&al.childNodes[ax-2].firstChild.nodeValue==","){var az=al.childNodes[ax-1].lastChild.firstChild.nodeValue;if(az==")"||az=="]"){var ah=al.childNodes[ax-1].firstChild.firstChild.nodeValue;if(ah=="("&&az==")"&&at.output!="}"||ah=="["&&az=="]"){var ai=[];var au=true;var aq=al.childNodes.length;for(aw=0;au&&aw<aq;aw=aw+2){ai[aw]=[];ap=al.childNodes[aw];if(au){au=ap.nodeName=="mrow"&&(aw==aq-1||ap.nextSibling.nodeName=="mo"&&ap.nextSibling.firstChild.nodeValue==",")&&ap.firstChild.firstChild.nodeValue==ah&&ap.lastChild.firstChild.nodeValue==az}if(au){for(var av=0;av<ap.childNodes.length;av++){if(ap.childNodes[av].firstChild.nodeValue==","){ai[aw][ai[aw].length]=av}}}if(au&&aw>1){au=ai[aw].length==ai[aw-2].length}}if(au){var aj,ag,am,ar,ay=g.createDocumentFragment();for(aw=0;aw<aq;aw=aw+2){aj=g.createDocumentFragment();ag=g.createDocumentFragment();ap=al.firstChild;am=ap.childNodes.length;ar=0;ap.removeChild(ap.firstChild);for(av=1;av<am-1;av++){if(typeof ai[aw][ar]!="undefined"&&av==ai[aw][ar]){ap.removeChild(ap.firstChild);aj.appendChild(L("mtd",ag));ar++}else{ag.appendChild(ap.firstChild)}}aj.appendChild(L("mtd",ag));if(al.childNodes.length>2){al.removeChild(al.firstChild);al.removeChild(al.firstChild)}ay.appendChild(L("mtr",aj))}ap=L("mtable",ay);if(typeof at.invisible=="boolean"&&at.invisible){ap.setAttribute("columnalign","left")}al.replaceChild(ap,al.firstChild)}}}}ao=t(ao,at.input.length);if(typeof at.invisible!="boolean"||!at.invisible){ap=L("mo",g.createTextNode(at.output));al.appendChild(ap)}}return[al,ao]}function e(ai){var ah=Q("mstyle");if(H!=""){ah.setAttribute("mathcolor",H)}if(s){ah.setAttribute("displaystyle","true")}if(ab!=""){ah.setAttribute("fontfamily",ab)}J=0;ah.appendChild(v(ai.replace(/^\s+/g,""),false)[0]);ah=L("math",ah);if(B){ah.setAttribute("title",ai.replace(/\s+/g," "))}if(ab!=""&&(p||ab!="serif")){var ag=U("font");ag.setAttribute("face",ab);ag.appendChild(ah);return ag}return ah}B=false;ab="";H="";(function(){for(var ah=0,ag=F.length;ah<ag;ah++){if(F[ah].codes){delete F[ah].codes}if(F[ah].func){F[ah].tag="mi"}}})();F.push({input:"gt",tag:"mo",output:">",tex:null,ttype:d},{input:"gt=",tag:"mo",output:"\u2265",tex:"geq",ttype:d},{input:"-<=",tag:"mo",output:"\u2AAF",tex:"preceq",ttype:d},{input:">-=",tag:"mo",output:"\u2AB0",tex:"succeq",ttype:d},{input:"'",tag:"mo",output:"\u2032",tex:"prime",ttype:d},{input:"arcsin",tag:"mi",output:"arcsin",tex:null,ttype:G,func:true},{input:"arccos",tag:"mi",output:"arccos",tex:null,ttype:G,func:true},{input:"arctan",tag:"mi",output:"arctan",tex:null,ttype:G,func:true},{input:"coth",tag:"mi",output:"coth",tex:null,ttype:G,func:true},{input:"sech",tag:"mi",output:"sech",tex:null,ttype:G,func:true},{input:"csch",tag:"mi",output:"csch",tex:null,ttype:G,func:true},{input:"abs",tag:"mi",output:"abs",tex:null,ttype:G,func:true},{input:"exp",tag:"mi",output:"exp",tex:null,ttype:G,func:true},{input:"tilde",tag:"mover",output:"~",tex:null,ttype:G,acc:true});ae.Augment({AM:{Init:function(){s=ae.config.displaystyle;decimal=ae.config.decimal;D();u()},Augment:function(ag){for(var ah in ag){if(ag.hasOwnProperty(ah)){switch(ah){case"displaystyle":s=ag[ah];break;case"decimal":decimal=ag[ah];break;case"parseMath":e=ag[ah];break;case"parseExpr":v=ag[ah];break;case"parseIexpr":y=ag[ah];break;case"parseSexpr":K=ag[ah];break;case"removeBrackets":S=ag[ah];break;case"getSymbol":m=ag[ah];break;case"position":c=ag[ah];break;case"removeCharsAndBlanks":t=ag[ah];break;case"createMmlNode":L=ag[ah];break;case"createElementMathML":Q=ag[ah];break;case"createElementXHTML":U=ag[ah];break;case"initSymbols":u=ag[ah];break;case"compareNames":comareNames=ag[ah];break}this[ah]=ag[ah]}}},parseMath:e,parseExpr:v,parseIexpr:y,parseSexr:K,removeBrackets:S,getSymbol:m,position:c,removeCharsAndBlanks:t,createMmlNode:L,createElementMathML:Q,createElementXHTML:U,initSymbols:u,compareNames:V,createDocumentFragment:Z,document:g,define:A,symbols:F,names:T,TOKEN:{CONST:d,UNARY:G,BINARY:W,INFIX:l,LEFTBRACKET:b,RIGHTBRACKET:k,SPACE:a,UNDEROVER:O,DEFINITION:Y,LEFTRIGHT:q,TEXT:aa}}});var ac=[R,N];ac=null})(MathJax.InputJax.AsciiMath);(function(b){var a;b.Augment({sourceMenuTitle:"AsciiMath input",prefilterHooks:MathJax.Callback.Hooks(true),postfilterHooks:MathJax.Callback.Hooks(true),Translate:function(c){var d,f=c.innerHTML.replace(/^\s+/,"").replace(/\s+$/,"");var g={math:f,script:c};this.prefilterHooks.Execute(g);f=g.math;try{d=this.AM.parseMath(f)}catch(e){if(!e.asciimathError){throw e}d=this.formatError(e,f)}g.math=a(d);this.postfilterHooks.Execute(g);return g.math},formatError:function(f,e,c){var d=f.message.replace(/\n.*/,"");MathJax.Hub.signal.Post(["AsciiMath Jax - parse error",d,e,c]);return a.merror(d)},Error:function(c){throw MathJax.Hub.Insert(Error(c),{asciimathError:true})},Startup:function(){a=MathJax.ElementJax.mml;this.AM.Init()}});b.loadComplete("jax.js")})(MathJax.InputJax.AsciiMath);

