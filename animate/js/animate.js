/*
    02
    * 解析matrix矩阵，0°-360°，返回旋转角度
    03
    * 当a=b||-a=b,0<=deg<=180
    04
    * 当-a+b=180,180<=deg<=270
    05
    * 当a+b=180,270<=deg<=360
    06
    *
    07
    * 当0<=deg<=180,deg=d;
    08
    * 当180<deg<=270,deg=180+c;
    09
    * 当270<deg<=360,deg=360-(c||d);
    10
* */ 

function getmatrix(a,b,c,d) { 
    var aa=Math.round(180*Math.asin(a)/ Math.PI); 
    var bb=Math.round(180*Math.acos(b)/ Math.PI); 
    var cc=Math.round(180*Math.asin(c)/ Math.PI); 
    var dd=Math.round(180*Math.acos(d)/ Math.PI); 
    var deg=0; 
    if(aa==bb||-aa==bb){ 
        deg=dd; 
    }else if(-aa+bb==180){ 
        deg=180+cc; 
    }else if(aa+bb==180){ 
        deg=360-cc||360-dd; 
    } 
    return deg>=360?0:deg; 
    //return (aa+','+bb+','+cc+','+dd); 
}

$(()=>{
    var currentYear=2004,currentMonth=04,currentDate=01;
    // 旋转方法
    function rotate(elem,$target) {
        var $elem = $(elem);
        if($target.is(elem+' span')) {
            var nowDeg = String($target.css('transform'))
            var values = nowDeg.split('(')[1].split(')')[0].split(',');
            var a = values[0];
            var b = values[1];
            var c = values[2];
            var d = values[3];
            nowDeg = getmatrix(a,b,c,d);
            $(elem+' .active').removeClass('active')
            if(elem=='#date'){
                currentDate = $target.html()
            }else if(elem=='#year'){
                currentYear = $target.html()
            }else{
                currentMonth = parseInt($target.html())+1
            }
            
            if(nowDeg>0&&nowDeg<=180) {
                $elem.css({'transform':'rotate('+(0-nowDeg)+'deg)'});
            }else if(nowDeg>180&&nowDeg<270) {
                $elem.css({'transform':'rotate('+(0-nowDeg)+'deg)'});
                console.log(nowDeg-360)
            }else if(nowDeg>270&&nowDeg<360) {
                $elem.css({'transform':'rotate('+(0-nowDeg)+'deg)'});
            }else {
                $elem.css({'transform':'rotate('+(0)+'deg)'});
            }
            $target.addClass('active')
            console.log(nowDeg)
        }
    }

    //旋转年份
    $('#year').on('click',function(e) {
        var $target = $(e.target)
        rotate('#year',$target)
    })

    //旋转月份
    $('#month').on('click',function(e) {
        var $target = $(e.target)
        console.log(currentMonth)
        switch(currentMonth){
            case 1:
            createDate(31);
            break;
            case 3:
            createDate(31);
            break;
            case 5:
            createDate(31);
            break;
            case 7:
            createDate(31);
            break;
            case 8:
            createDate(31);
            break;
            case 10:
            createDate(31);
            break;
            case 12:
            createDate(31);
            break;
            case 4:
            createDate(30);
            break;
            case 6:
            createDate(30);
            break;
            case 9:
            createDate(30);
            break;
            case 11:
            createDate(30);
            break;
            case 2:
            createDate(28);
            break;
            default:
            createDate(30);

        }
        rotate('#month',$target)
    })

    // 生成日期
    function createDate(date) {
        $('#date').empty()
        for ( let i=1;i <= date;i++ ){
            i <= 9&&( i = '0' + i )
            var $span = $(`<span class="date_span">${i}</span>`)
            $span.css({'transform':'rotate('+parseInt((360/date)*(i-1))+'deg)'})
            $('#date').append($span);
        }
    }
    createDate(30)

    //旋转日期
    $('#date').on('click',function(e) {
        var $target = $(e.target)
        rotate('#date',$target)
    })

    // 点击OK事件
    $('.ok').on('click',function(e) {
        $('.box').addClass('hide')
        $('.ball').addClass('ball_animation').show()
        $('#year').removeClass('year_anima')
        $('#month').removeClass('month_anima')
        $('#date').removeClass('date_anima')
        $(this).removeClass('ok_anima')
    })

    // 点击小球事件
    $('.ball').on('click',function(e) {
        $('.box').removeClass('hide')
        $(this).removeClass('ball_animation').hide();
        $('#year').addClass('year_anima')
        $('#month').addClass('month_anima')
        $('#date').addClass('date_anima')
        $('.ok').addClass('ok_anima')
    })
})