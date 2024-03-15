let search4;
search4 = ["듄 1권", "돈의 심리학", "가여운 것들", "총,균,쇠", "다윈 영의", "직장 상사 악령", "블랙 쇼맨과", "퇴마록", "효기심","쇼펜하우어", "프로젝트 헤일메리", "자바스크립트", "구의 증명", "컨셉수업", "7인 1역", "거인의 시간", "철학은 날씨를", "마션"]

for (let i = 0; i< search4.length; i++){

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: search4[i], size:15 },
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

    const lis = $('.bestslide ol li');

    

    for(let j=0; j < 1; j++){

        $(".bestslide ol li").eq(i).append('<a href="#">' + "<img src='" + data[j].thumbnail + "'/>" + "</a>");

        $('.bestslide ol li').eq(i).append( "<h5>" + (i+1) + "</h5>")

        $('.bestslide ol li').eq(i).append('<a href="#">' + "<h4>" + data[j].title + "</h4>" + "</a>");

        $('.bestslide ol li').eq(i).append('<a href="#">' + "<p>" + data[j].authors + "</p>" + "</a>");
    }

});
}


// 슬라이드

$(function(){

    var page = 0;

    $('.bestprev').click(function(){

        page--;

        if(page < 0) {
            page = 0;
            return;
        }
        $('.bestslide').stop().animate({marginLeft: -1170 * page},500);
    });
    $('.bestnext').click(function(){

        page++;

        if(page > $('.bestslide ol').length-5){
            page = $('.bestslide ol').length-5;
            return;
        }
        $('.bestslide').stop().animate({marginLeft: -1170 * page},500);
    });
})