// content.js
var firstHref = $("a[href^='http']").eq(0).attr("href");

console.log(firstHref);

chrome.runtime.sendMessage({"message": "opened_amazon", "url": firstHref});
