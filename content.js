alert("hello from your chrome extension");

var firstHref = $("a[href^='http']").eq(0).attr("href");

console.log(firstHref);