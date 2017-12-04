/**
 * Created by Administrator on 2017/12/4 0004.
 */
function testAsync(){
    var temp;
    $.ajax({
        async: false,
        type: "GET",
        url: 'test.php',
        complete: function(msg){
            alert('complete');
        },
        success: function(data){
            alert('success');
            temp=data;
        }
    });
    alert(temp + 'end');
}
/*async:false,(默认是true)；
如上：false为同步，这个testAsync（）方法中Ajax请求将整个浏览器锁死，
只有test.php执行结束后，才可以执行其他操作。

当async:true时，ajax请求时异步的。但是其中有个问题：
testAsunc()中的ajax请求和其后面的操作是异步执行的，
那么当test.php还未执行完，就可能已经执行了Ajax请求后面的操作，
如：alert(temp +'end');
然而，temp这个数据是在ajax请求success后才肤质的，结果，输出是会为空。

*/








