/**
 * Created by hp on 2016/4/23.
 */
$(function(){
    var $main=$('.main');
    var $head=$('.head');
    var $hbg=$(".hbg");
    var $maxNav=$(" .max-nav");
    var $fas=$(".fa ul");
    var $h3=$(".foota h3");
    console.log( $fas);
    var flag=false;
    var fl=false;
    var w=$('.footerBox').width();
    $hbg.click(function(){
        if(!flag){
            $head.css("background","#000");
            //$maxNav.css({display:"block"});
            $maxNav.fadeToggle();
            //$main.css({display:"none"});
            $main.hide();
            flag=true;
        }
        else{
            $head.css("background","#000)");
            //$maxNav.css({display:"none"});
            $maxNav.hide();
            //$main.css({display:"block"});
            $main.show();
            flag=false;
        }
    })

        $h3.each(function (i, obj) {
            if(w<760) {
                $(this).click(function () {
                    if (!fl) {
                        $fas.eq(i).show();
                        fl = true;
                    }
                    else {
                        $fas.eq(i).hide();
                        fl = false;
                    }

                })
            }else{
                return false;
            }
        })



})