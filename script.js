// (function (d) {
//   var w = d.documentElement.offsetWidth,
//     t = d.createTreeWalker(d.body, NodeFilter.SHOW_ELEMENT),
//     b;
//   while (t.nextNode()) {
//     b = t.currentNode.getBoundingClientRect();
//     if (b.right > w || b.left < 0) {
//       t.currentNode.style.setProperty("outline", "1px dotted red", "important");
//       console.log(t.currentNode);
//     }
//   }
// })(document);


// //css-tricks.com/findingfixing-unintended-body-overflow/
// https: var docWidth = document.documentElement.offsetWidth;

// [].forEach.call(document.querySelectorAll("*"), function (el) {
//   if (el.offsetWidth > docWidth) {
//     console.log(el);
//   }
// });
