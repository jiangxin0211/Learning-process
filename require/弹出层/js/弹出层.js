requirejs.config({
    paths : {
        jquery: "jquery-1.11.2"//������jquery
    }
});

require(["jquery","dialog1"],function($,dialog){//function里的参数是require里的返回值���ֵ
    $("#btn").on('click',function(){
        var settings = {
            width: 400,
            height: 400,
            title: "我的弹出层",
            content: "login.html"
        };
        //var dialog = new Dialog(settings);
        dialog.open(settings);
    });

});
