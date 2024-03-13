let search5;
search5 = ["천 척의 배", "미세 좌절의 시대", "마음 해방", "행복한 푸바오", "폴링 인 폴", "공정의 파수꾼", "블랙 쇼맨과 운명의 바퀴", "손을 잡은 채, 버찌관에서", "무의식적 편견", "컬처, 컬처,문화로 쓴", "남겨진 것들의", "누굴 죽였을까"]

for (let i = 0; i< search5.length; i++){

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: search5[i], size:15 },
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

    const new1 = $('.newslide li');

    for(let j=0; j < 1; j++){

        $(".newslide li").eq(i).append('<a href="#">' + "<img src='" + data[j].thumbnail + "'/>" + "</a>");

        $('.newslide li').eq(i).append('<a href="#">' + "<h4>" + data[j].title + "</h4>" + "</a>");

        $('.newslide li').eq(i).append('<a href="#">' + "<p>" + data[j].authors + "</p>" + "</a>");
    }

});
}

// 슬라이드

$(function(){

    var page = 0;

    $('.newprev').click(function(){

        page--;

        if(page < 0) {
            page = 0;
            return;
        }
        $('.newslide').stop().animate({marginLeft: -1158 * page},500);
    });
    $('.newnext').click(function(){

        page++;

        if(page > $('.newslide li').length-11){
            page = $('.newslide li').length-11;
            return;
        }
        $('.newslide').stop().animate({marginLeft: -1158 * page},500);
    });
})