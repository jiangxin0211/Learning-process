//require.js
require(["sort"],function(sort){
    var arr = [2,6,23,1,9,45];
    console.log(sort(arr));

});

//sea.js
define(function(require){
    var arr = [4,7,12,6];
    var sort = require("sort");
    console.log(sort(arr));//require2.0以后的版本也支持了seajs写法
});