

let search3;
search3 = ["기억을 먹는 아이","조각난 마음을 치유합니다","오펜하이머","미세 좌절의 시대"]

for (let i = 0; i< search3.length; i++){

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: search3[i], size:15 },
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

    const boxs = $('.mdslide li');

    for(let j = 0; j < 1; j++){

        $(".mdbbox").eq(i).append('<a href="#">' + "<img src='" + data[j].thumbnail + "'/>" + "</a>");
        $(".litbox").eq(i).append("<p>" + '<a href="sub_book13.html">' + data[j].title + "</a>" + "</p>");
    }

});

}



// 슬라이드
$(function(){

    var page = 0;

    $('.mdprev').click(function(){

        page--;

        if(page < 0) {
            page = 0;
            return;
        }
        $('.mdslide').stop().animate({marginLeft: -387 * page},400);
        $('.mdprev').fadeOut(100)
        $('.mdnext').fadeIn(100)
    });
    $('.mdnext').click(function(){

        page++;

        if(page > $('.mdslide li').length-3){
            page = $('.mdslide li').length-3;
            return;
        }
        $('.mdslide').stop().animate({marginLeft: -387 * page},400);
        $('.mdnext').fadeOut(100)
        $('.mdprev').fadeIn(100)
    });
})