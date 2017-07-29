requirejs.config({
    paths:{
        jquery: "jquery-1.11.2"
    }
});

define(["jquery"],function($){
   //弹出层类�������
    function Dialog(settings){
        this.defaulstSettings = {
            width: 500,
            height: 400,
            title: "我的弹出层",
            content: "login.html"
        };

        $.extend(this.defaulstSettings,settings);
        this.$container = $('<div class="dialog-container"></div>');
        this.$mask = $('<div class="dialog-mask"></div>');
        this.$box = $('<div class="dialog-box"></div>');
        this.$title = $('<div class="dialog-title"></div>');
        this.$item = $('<div class="dialog-title-item"></div>');
        this.$close = $('<div class="dialog-title-close">[X]</div>');
        this.$content = $('<div class="dialog-content"></div>');

    }

    Dialog.prototype.open = function(){
        this.$container.append(this.$mask).append(this.$box).appendTo(document.body);
        this.$box.append(this.$title).append(this.$content);
        this.$title.append(this.$item).append(this.$close);
        this.$box.css({
            width: this.defaulstSettings.width,
            heught: this.defaulstSettings.height
        });
        this.$item.html(this.defaulstSettings.title);
        if(this.defaulstSettings.content.indexOf('.html') != -1){
            $(this.$content).load(this.defaulstSettings.content);
        }else{
            $(this.$content).html(this.defaulstSettings.content);
        }
        //var that = this;//保存$close外面的实例化对象
        this.$close.on('click',function(){
            //this.$container.remove;
            this.close();
        }.bind(this));//改变this的指向��
    };

    Dialog.prototype.close = function(){
        this.$container.remove();
    };

    return Dialog;
});
