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
* ����DOM����document.creatElement("div");
* ɾ��DOM���󣺸�Ԫ��.removeChlid(��Ԫ��)��
* ׷��Ԫ�أ���Ԫ�ء�appendChild(��Ԫ��)��
*           �ı丸Ԫ�ص�innerHTML
*           */