(function(){
    var oChoose = document.getElementById("choose");
    var aClassify = oChoose.getElementsByClassName("classify");
    var aSubmenu = aClassify.getElementsByClassName("submenu");
    for(var i=0; i<aClassify.length; i++){
        aClassify[i].index = i;
        aClassify[i].bFlag = false;//false��ʾ�رգ�true��ʾ��
        aClassify[i].addEventListener("click",function(){
            if(this.bFlag){
                //aSubmenu[this.index].style.display = "none";
               aSubmenu[this.index] && animate(aSubmenu[this.index],{
                    height: 0
                });
            }else{
                //aSubmenu[this.index].style.display = "block";
                aSubmenu[this.index] && animate(aSubmenu[this.index],{
                    height: 230
                });
            }
            this.bFlag = !this.bFlag;
        },false);
    }
})();
