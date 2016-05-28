/**
 * Created by suti on 16/5/3.
 */
$(document).ready(function(){
    //document.getElementById("content").innerHTML='<div class="con-img"><img src="img/img'+1+'.jpg" width="20%"></div>';
    for(var i=1; i<12;i++){
        $("#content").append('<div class="con-img"><img src="img/img'+i+'.jpg"></div>');
    }
    for(var i=1; i<12;i++){
        $("#content").append('<div class="con-img"><img src="img/img'+i+'.jpg"></div>');
    }
});

window.onload=function () {
    ConImg("content",null);
};
// console.log(checkScroll());
window.onscroll=function () {
    if(checkScroll()){
        for(var i=1; i<12;i++){
            $("#content").append('<div class="con-img"><img src="img/img'+i+'.jpg"></div>');
        }
    }
    ConImg("content",null);
}

function checkScroll(){
    var list=[];
    list=getTag(document.getElementById("content"),"con-img");
    var lastH=list[list.length-1].offsetTop;
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    var documentH=document.documentElement.clientHeight;
    return (lastH<scrollTop+documentH)?true:false;
}

function ConImg(parent,pin) {
    var parents = document.getElementById(parent);
    var list = getTag(parents,"con-img");
    var count= Math.floor(document.documentElement.clientWidth/list[0].offsetWidth);
    parents.style.cssText="width:"+list[0].offsetWidth*count+"px;margin:0 auto;"
    var heightArr = [];
    for(var i=0;i<list.length;i++){
        if(i<count) {
            heightArr[i]= list[i].offsetHeight;
        }else{
            var minheight = Math.min.apply(null,heightArr);
            list[i].style.position="absolute";
            list[i].style.top=minheight+5+"px";
            var num=getMinImg(heightArr,minheight);
            list[i].style.left=list[num].offsetLeft+"px";
            // console.log("     "+minheight+"     "+num);
            heightArr[num]+=list[i].offsetHeight;
        }
    }
}

function getTag(a,b) {
    var obj=a.getElementsByTagName('*');
    var list=[];
    for (var i= 0;i<obj.length;i++){
        if (obj[i].className==b){
            list.push(obj[i]);
        }
    }
    return list;
}

function getMinImg(list,min){
    var temp=0;
    for(var i=0;i<list.length;i++){
        if(min==list[i]){
            temp=i;
        }
    }
    return temp;
}


