/**
 * Created by Administrator on 2017/6/18 0018.
 */
(function(){
    var oSmallPic = document.getElementById("small-pic");
    var aSmallImgs = document.getElementsByTagName("img");
    var oBigPic = document.getElementById("big-pic");
    var oBigImg = oBigPic.getElementById("img")[0];
    var oLeft = document.getElementById("left");
    var oRight = document.getElementById("right");
    var nowIndex =0;
    for(var i=0; i<=aSmallImgs.length; i++){
        aSmallImgs[i].index = i;//自定义属性
        aSmallImgs[i].onclick = function(){
            nowIndex = this.index;
            changeImg();
        };
    }
    oLeft.onclick = oRight.onclick = function(){
        if(this === oRight){
            nowIndex++;//0 1 2 3
            if(nowIndex == aSmallImgs.length){
                nowIndex = 0;
            }
        }else{
            nowIndex--;
            if(nowIndex == -1){
                nowIndex = aSmallImgs.length - 1;
            }
        }
         changeImg();
    };

    function changeImg(){
        oBigImg.src = aSmallImgs[noeIndex].src;
        for(var i=0; i<=aSmallImgs.length; i++){
            aSmallImgs[i].classname = "";
        }
        aSmallImgs[nowIndex].classname = "selected";
        //小图片移动
        var left = 0;
        if(nowIndex == 0){
            //oSmallOic.style.left = 0;
            left = 0;
            //animate(oSmallPic,{
            // left: 0
            // });
        }else{
            //oSmallPic.style.left = -(aSmallImgs[0].offsetWidth + 10) + "px";
            left = 1;
            /*animate(oSmallPic, {
             left: -(aSmallImgs[0].offsetWidth + 10)
             });*/
        }
        animate(oSmallPic,{
            left: -(aSmallImgs[0].offsetWidth + 10) * left
        });
        //小图片移动规则
    }
})();



















