/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-languages version: 1.3.1(1119ababe841a89731059c9bd9522fc59d70f6cb)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-languages/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define("vs/basic-languages/markdown/markdown",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s="keyword",n="string",o="variable.source",c="delimiter.html",a="attribute.name.html",d="string.html";t.conf={comments:{blockComment:["\x3c!--","--\x3e"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"<",close:">",notIn:["string"]}],surroundingPairs:[{open:"(",close:")"},{open:"[",close:"]"},{open:"`",close:"`"}],folding:{markers:{start:new RegExp("^\\s*\x3c!--\\s*#?region\\b.*--\x3e"),end:new RegExp("^\\s*\x3c!--\\s*#?endregion\\b.*--\x3e")}}},t.language={defaultToken:"",tokenPostfix:".md",control:/[\\`*_\[\]{}()#+\-\.!]/,noncontrol:/[^\\`*_\[\]{}()#+\-\.!]/,escapes:/\\(?:@control)/,jsescapes:/\\(?:[btnfr\\"']|[0-7][0-7]?|[0-3][0-7]{2})/,empty:["area","base","basefont","br","col","frame","hr","img","input","isindex","link","meta","param"],tokenizer:{root:[[/^(\s{0,3})(#+)((?:[^\\#]|@escapes)+)((?:#+)?)/,["white","keyword",s,s]],[/^\s*(=+|\-+)\s*$/,"keyword"],[/^\s*((\*[ ]?)+)\s*$/,"meta.separator"],[/^\s*>+/,"comment"],[/^\s*([\*\-+:]|\d+\.)\s/,"keyword"],[/^(\t|[ ]{4})[^ ].*$/,n],[/^\s*~~~\s*((?:\w|[\/\-#])+)?\s*$/,{token:n,next:"@codeblock"}],[/^\s*```\s*((?:\w|[\/\-#])+)\s*$/,{token:n,next:"@codeblockgh",nextEmbedded:"$1"}],[/^\s*```\s*$/,{token:n,next:"@codeblock"}],{include:"@linecontent"}],codeblock:[[/^\s*~~~\s*$/,{token:n,next:"@pop"}],[/^\s*```\s*$/,{token:n,next:"@pop"}],[/.*$/,o]],codeblockgh:[[/```\s*$/,{token:o,next:"@pop",nextEmbedded:"@pop"}],[/[^`]+/,o]],linecontent:[[/&\w+;/,"string.escape"],[/@escapes/,"escape"],[/\b__([^\\_]|@escapes|_(?!_))+__\b/,"strong"],[/\*\*([^\\*]|@escapes|\*(?!\*))+\*\*/,"strong"],[/\b_[^_]+_\b/,"emphasis"],[/\*([^\\*]|@escapes)+\*/,"emphasis"],[/`([^\\`]|@escapes)+`/,"variable"],[/\{[^}]+\}/,"string.target"],[/(!?\[)((?:[^\]\\]|@escapes)*)(\]\([^\)]+\))/,["string.link","","string.link"]],[/(!?\[)((?:[^\]\\]|@escapes)*)(\])/,"string.link"],{include:"html"}],html:[[/<(\w+)\/>/,"tag"],[/<(\w+)/,{cases:{"@empty":{token:"tag",next:"@tag.$1"},"@default":{token:"tag",next:"@tag.$1"}}}],[/<\/(\w+)\s*>/,{token:"tag"}],[/<!--/,"comment","@comment"]],comment:[[/[^<\-]+/,"comment.content"],[/-->/,"comment","@pop"],[/<!--/,"comment.content.invalid"],[/[<\-]/,"comment.content"]],tag:[[/[ \t\r\n]+/,"white"],[/(type)(\s*=\s*)(")([^"]+)(")/,[a,c,d,{token:d,switchTo:"@tag.$S2.$4"},d]],[/(type)(\s*=\s*)(')([^']+)(')/,[a,c,d,{token:d,switchTo:"@tag.$S2.$4"},d]],[/(\w+)(\s*=\s*)("[^"]*"|'[^']*')/,[a,c,d]],[/\w+/,a],[/\/>/,"tag","@pop"],[/>/,{cases:{"$S2==style":{token:"tag",switchTo:"embeddedStyle",nextEmbedded:"text/css"},"$S2==script":{cases:{$S3:{token:"tag",switchTo:"embeddedScript",nextEmbedded:"$S3"},"@default":{token:"tag",switchTo:"embeddedScript",nextEmbedded:"text/javascript"}}},"@default":{token:"tag",next:"@pop"}}}]],embeddedStyle:[[/[^<]+/,""],[/<\/style\s*>/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}],[/</,""]],embeddedScript:[[/[^<]+/,""],[/<\/script\s*>/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}],[/</,""]]}}});