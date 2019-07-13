alert("hello from your chrome extension");

// grabs the first URL we access
var firstHref = $("a[href^='http']").eq(0).attr("href");

console.log(firstHref);
