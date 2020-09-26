var zipper = require('zip-local');
console.log("Packing ./build contents to ./apacheBuild/build.zip")
zipper.sync.zip("./build/").compress().save("./apacheBuild/build.zip");
console.log("Apache build successful.")
console.log("Usage: -- You can upload ./apacheBuild/build.zip to your apache webserver hosting")