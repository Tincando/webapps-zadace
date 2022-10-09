
function cammel(str){
    return str
    .replace(/\s(.)/g, function(x) { return x.toUpperCase(); })
    .replace(/\s/g, '')
    .replace(/^(.)/, function(x) { return x.toLowerCase(); });
}

console.log(cammel("web apps vjezbe"))