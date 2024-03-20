let hotevent;
hotevent = ["마트료시카의 밤", "국회의원 이방원","구름에 달 가리운", "블랙쇼맨과 운명의 바퀴", "퇴마록", "7인 1역", "직장 상사 악령", "커넥팅", "로기완을 만났다"]

for (let i = 0; i< hotevent.length; i++){

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: hotevent[i], size:15 },
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

    const boxs = $('.eventslide li');

    for(let j = 0; j < 1; j++){

        $(".eventslide li").eq(i).append('<a href="#">' + "<img src='" + data[j].thumbnail + "'/>" + "</a>");
    }

});

}

// 슬라이드
$(function(){

    var page = 0;

    $('.evprev').click(function(){

        page--;

        if(page < 0) {
            page = 0;
        
            return;
        }
        $('.eventslide').stop().animate({marginLeft: -772 * page},400);
        
    });
    $('.evnext').click(function(){

        page++;

        if(page > $('.eventslide li').length-6){
            page = $('.eventslide li').length-6;
            

            return;
        }
        $('.eventslide').stop().animate({marginLeft: -772 * page},400);
       
    });
})