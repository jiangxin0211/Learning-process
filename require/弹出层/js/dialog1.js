requirejs.config({
    paths:{
        jquery: "jquery-1.11.2"
    }
});

define(["jquery"],function($){

    return{
        open : function(settings){
            var defaultSettings = {
                width: 500,
                height: 300,
                title: "弹出层",
                content: ""
            };

            $.extend(defaultSettings, settings);
            var html = '<div class="dialog-container">'
                + '<div class="dialog-mask"></div>'
                + '<div class="dialog-box">'
                + '<div class="dialog-title">'
                + '<div class="dialog-title-item">' + defaultSettings.title + '</div>'
                + '<div class="dialog-title-close">[X]</div>'
                + '</div>'
                + '<div class="dialog-content"></div>'
                + '</div>'
                + '</div>';


            $(document.body).append(html);
            $(".dialog-box").css({
                width: defaultSettings.width,
                height: defaultSettings.height
            });
            if(defaultSettings.content.indexOf(".html") != -1){
                $(".dialog-content").load(defaultSettings.content);//解析是否是html文件，若html文件为空就会加载自己
            }else{
                $(".dialog-content").html(defaultSettings.content);//如果不是html文件，内容为空字符串
            }

            $(".dialog-title-close").on('click',function(){
                $(this).parents(".dialog-container").remove();
                //$(".dialog-container").remove();//会全部关闭
            });

        }
    }

});
