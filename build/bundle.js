
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

var e = [],
  t = [];
function n(n, r) {
  if (n && "undefined" != typeof document) {
    var a,
      s = !0 === r.prepend ? "prepend" : "append",
      d = !0 === r.singleTag,
      i = "string" == typeof r.container ? document.querySelector(r.container) : document.getElementsByTagName("head")[0];
    if (d) {
      var u = e.indexOf(i);
      -1 === u && (u = e.push(i) - 1, t[u] = {}), a = t[u] && t[u][s] ? t[u][s] : t[u][s] = c();
    } else a = c();
    65279 === n.charCodeAt(0) && (n = n.substring(1)), a.styleSheet ? a.styleSheet.cssText += n : a.appendChild(document.createTextNode(n));
  }
  function c() {
    var e = document.createElement("style");
    if (e.setAttribute("type", "text/css"), r.attributes) for (var t = Object.keys(r.attributes), n = 0; n < t.length; n++) e.setAttribute(t[n], r.attributes[t[n]]);
    var a = "prepend" === s ? "afterbegin" : "beforeend";
    return i.insertAdjacentElement(a, e), e;
  }
}

var css = "body{\r\n    background: rgb(147, 156, 84);\r\n    margin: 50px;\r\n}\r\n\r\n.imgReact{\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n";
n(css,{});

var img$1 = "data:image/png;base64,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";

console.log('Hellow World');
const title = document.createElement('h1');
title.textContent = 'I love JavaScrpt';
console.log('title: ', title);
const img = document.createElement('img');
img.className = 'imgReact';
img.src = img$1;
document.body.append(title);
document.body.append(img);
