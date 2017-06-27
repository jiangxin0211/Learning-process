(function(){
    var aClose = document.getElementsByClassName("close");
    var aCartDetail = document.getElementsByClassName("cart-detail");
    var oCartMine = document.getElementById("cart-mine");
    for(var i=0; i<aClose.length; i++){
        aClose[i].index = i;//0  1
        aClose[i].onclick = function(){
            //aCartDetail[this.index].style.display = "none";

            oCartMine.removeChild(aCartDetail[this.index]);
            for(var i = 0; i<aClose.length; i++){
                aClose[i].index =i;
            }
        };

    }
})();

/*
* 创建DOM对象：document.creatElement("div");
* 删除DOM对象：父元素.removeChlid(子元素)；
* 追加元素：父元素、appendChild(子元素)；
*           改变父元素的innerHTML
*           */