webpackJsonp([44888171697908],{610:function(a,n){a.exports={data:{markdownRemark:{tableOfContents:'<ul>\n<li><a href="#%E5%8E%9F%E5%9B%A0">原因</a></li>\n<li><a href="#%E8%A7%A3%E6%B1%BA%E6%96%B9%E6%B3%95">解決方法</a></li>\n</ul>',internal:{content:"---\ntitle: JavaScript Array.map(parseInt) 錯誤解決方案\nheaderImage: KMksHxZ.png\ntags:\n  - JavaScript\ndate: 2017-05-31 11:06:00\n---\n\n如果我想轉換數組裡面的字符串為數字的話，很自然就會想到 `map` 和 `parseInt` 這兩個方法。但是用起來的時候卻不是我想要的結果。。。\n\n```JavaScript\nvar a = [\"1\", \"2\", \"3\", \"4\", \"5\"];\n\nvar b = a.map(parseInt);\n\nconsole.log(b); // [1, NaN, NaN, NaN, NaN]\n```\n\n## 原因\n\n如果我們細看 map 的參數，就會發現它的 callback 會有三個 arguments：`currentValue`, `index` 和 `array`。\n\n對於 `parseInt` 來說， 它會接收`currentValue`和 `index`，並用 index 作為 index 進制。。。\n```JavaScript\nparseInt('1', 0); // OK => 1\nparseInt('2', 1); // 不合法的進制。。。\nparseInt('3', 2); // NaN, 二進制沒有 3\nparseInt('4', 3); // NaN, 三進制沒有 4\nparseInt('5', 4); // NaN, 四進制沒有 5\n```\n\n## 解決方法\n\n1. 用`.map(parseFloat)`，因為它只接收一個參數。\n  ```JavaScript\n  var c = a.map(parseFloat);\n  ```\n\n1. 用`.map(Number)`\n  ```JavaScript\n  var d = a.map(Number);\n  ```\n\n1. 用`.map(num => parseInt(num))`\n  ```JavaScript\n  var e = a.map(num => parseInt(num));\n  ```\n"},frontmatter:{title:"JavaScript Array.map(parseInt) 錯誤解決方案"}}},pathContext:{slug:"/javascript-array-map-parseint-solutions/"}}}});
//# sourceMappingURL=path---2017-05-31-javascript-array-map-parseint-solutions-ddd3a1d4c6f000c93540.js.map