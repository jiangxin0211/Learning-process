JSON:
JSON.parse()		用于将一个 JSON 字符串转换为 JavaScript 对象。
JSON.stringify()	用于将 JavaScript 值转换为 JSON 字符串。

可以将数组转化成JSON字符串

JSON对象：
key 必须是字符串，value 可以是合法的 JSON 数据类型（字符串, 数字, 对象, 数组, 布尔值或 null）。
key 和 value 中使用冒号(:)分割。
每个 key/value 对使用逗号(,)分割。

JSON数组：
JSON 中数组值必须是合法的 JSON 数据类型（字符串, 数字, 对象, 数组, 布尔值或 null）。
JavaScript 中，数组值可以是以上的 JSON 数据类型，也可以是 JavaScript 的表达式，包括函数，日期，及 undefined。

JSON中的异常

1.解析数据
JSON 不能存储 Date 对象。
JSON.stringify() 会将所有日期转换为字符串

2.解析函数
JSON 不允许包含函数，JSON.stringify() 会 *删除* JavaScript 对象的函数，包括 key 和 value。
不建议在 JSON 中使用函数。


JSON应用：
1.JSON的输出美化
JSON.stringify() 方法，stringify还有个可选参数space，可以指定缩进用的空白字符串，用于美化输出（pretty-print）；
space参数是个数字，它代表有多少的空格；上限为10。该值若小于1，则意味着没有空格；
如果该参数没有提供（或者为null）将没有空格。

2.JSON字符串的替换
用JS实现replaceAll的功能

3.遍历JSON对象和JSON数组
遍历JSON对象
var packJson  = {"name":"Liza", "password":"123"} ;  
  
for(var k in packJson ){//遍历packJson 对象的每个key/value对,k为key  
   alert(k + " " + packJson[k]);  
}
遍历JSON数组代码如下
var packJson = [{"name":"Liza", "password":"123"}, {"name":"Mike", "password":"456"}];  
  
for(var i in packJson){//遍历packJson 数组时，i为索引  
   alert(packJson[i].name + " " + packJson[i].password);  
}  