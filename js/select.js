let select;
select = ["머니 트렌드 2024","나는 나로 살기로 했다", "쿼런틴", "뉴럴 링크", "에이징솔로", "부의 인문학"]

for (let i = 0; i< select.length; i++){

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: select[i], size:15 },
    async: false,
    headers: {Authorization: "KakaoAK 78195119a3fc01f033fad541dfd6ce7f"}
  })
  .done(function (msg) {

    console.log(msg);
    const origin = msg.documents;
    let data = origin.filter((val)=>{
        return val.thumbnail != ''&& val .contents !='';
    })
    console.log(data);

    const new1 = $('.slslide li');

    for(let j=0; j < 1; j++){


        $(".slslide li").eq(i).append('<a href="#">' + "<img src='" + data[j].thumbnail + "'/>" + "</a>");
        
    }

});
}

// 슬라이드
$('.slprev').click(function(){
    $('.slslide li:last').prependTo('.slslide');
    $('.slslide li').eq(0).not().css({"opacity" : "0.4"})
    $('.slslide li').eq(1).css({"opacity" : "1"})
    $('.slslide li').eq(2).css({"opacity" : "0.4"})
    $('.slslide').css('margin-left','-383px');
    $('.slslide').stop().animate({marginLeft:0},500);

})

$('.slnext').click(function(){
    $('.slslide').stop().animate({marginLeft: '-383px'},500, function(){
        $('.slslide li:first').appendTo('.slslide');
        $('.slslide li').eq(0).not().css({"opacity" : "0.4"})
        $('.slslide li').eq(1).css({"opacity" : "1"})
        $('.slslide li').eq(2).css({"opacity" : "0.4"})
        $('.slslide').css({marginLeft:0},300);
    });


});  
