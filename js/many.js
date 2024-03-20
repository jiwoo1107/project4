
let search1;
search1 = ["우주복있음", "세이노의 가르침", "내가 행복한 이유", "아르테미스", "메리골드 마음", "지적 대화", "바다가 들리는", "살인자의 쇼핑몰", "물고기는 존재하지 않는다", "유목민의", "이토록 완벽한 실종", "직장 상사 악령", "프로젝트 헤일메리", "쇼펜하우어 인생론 에세이", "블랙 쇼맨과 운명의 바퀴", "퇴마록", "컨셉 수업", "철학은 날씨"]

for (let i = 0; i< search1.length; i++){

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: search1[i], size:15 },
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


    const many = $('.manyslide ol li');
    
  

    for(let j=0; j < 1; j++){

        $(".manyslide ol li").eq(i).append('<a href="#">' + "<img src='" + data[j].thumbnail + "'/>" + "</a>");

        $('.manyslide ol li').eq(i).append( "<h5>" + (i+1) + "</h5>")

        $('.manyslide ol li').eq(i).append('<a href="#">' + "<h4>" + data[j].title + "</h4>" + "</a>");

        $('.manyslide ol li').eq(i).append('<a href="#">' + "<p>" + data[j].authors + "</p>" + "</a>");

    }
})
}

// 슬라이드

$(function(){

    var page = 0;

    $('.manyprev').click(function(){

        page--;

        if(page < 0) {
            page = 0;


            return;
        }
        $('.manyslide').stop().animate({marginLeft: -1170 * page},500);
        $('.manyprev').fadeOut(100)
        $('.manynext').fadeIn(100)
    });
    $('.manynext').click(function(){

        page++;


        if(page > $('.manyslide ol').length-5){
            page = $('.manyslide ol').length-5;
            return;
        }
        $('.manyslide').stop().animate({marginLeft: -1170 * page},500);
        $('.manynext').fadeOut(100)
        $('.manyprev').fadeIn(100)
    });

})

   

   
