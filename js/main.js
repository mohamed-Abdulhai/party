$(".boxToggle").click(function(){
    $('.content').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);

})

$(".openNav").click(function(){
    $(".sliderNav").animate({width:'toggle'});
    
})


function timer(){
    let counterDate =new Date ("10 october 2023 9:56:59");
    console.log(counterDate);
    let counter = setInterval(()=>{
        let dateNow =new Date().getTime();
        let dateDiff =counterDate - dateNow;
        

        let days =Math.floor( dateDiff / (1000*60*60*24));
    
        let hours = Math.floor((dateDiff % (1000*60*60*24) ) / (1000*60*60));
    
        let mins = Math.floor((dateDiff %(1000 *60*60)) /(1000 *60));
        let secs = Math.floor((dateDiff % (1000 *60)/1000));

        $(".days").html(days + ' D')
        $(".ho").html(hours + ' H')
        $(".m").html(mins + ' m')
        $(".s").html(secs + ' s')
    },1000)
}
timer()



var maxLength = 100;
$(document).ready(function(){
    $("#limit").on('keyup',function(){
        var len =$(this).val().length;
        var total = maxLength - len
        if($(this).val().length > 100){
            $('#limit_count').html();
        
        }else{
            $(".conmy").text(total)
        }
    })
});

    console.log(new Date());