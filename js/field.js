// 소설
let search_novel;
search_novel = ["직장 상사 악령", "오류가 발생", "홍학의 자리", "프로젝트 헤일메리", "구의 증명", "파과", "아주 희미한 빛으로도", "사라진 것들", "밝은 밤", "도시와 그 불확실한 벽", "불편한 편의점", "노르웨이의 숲"]

for (let i = 0; i< search_novel.length; i++){

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: search_novel[i], size:15 },
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

    const field = $('#list_a li');

    for(let j=0; j < 1; j++){

        $("#list_a li").eq(i).append('<a href="#">' + "<img src='" + data[j].thumbnail + "'/>" + "</a>");

        $('#list_a li').eq(i).append('<a href="#">' + "<h4>" + data[j].title + "</h4>" + "</a>");

        $('#list_a li').eq(i).append('<a href="#">' + "<p>" + data[j].authors + "</p>" + "</a>");
    }

});
}

// 심리학
let search_psychology;
search_psychology = ["허브 코헨 1", "마음 지구력", "나는 왜 사랑할수록", " 나는 왜 혼자가 편할까", "자존감 수업", "오은영의 화해", "나는 왜 눈치를 보는 걸까", "상처받지 않는 영혼", "사랑 수업", "이유 없는 편안함", "신경 끄기의 기술", "회복탄력성"]

for (let i = 0; i< search_psychology.length; i++){

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: search_psychology[i], size:15 },
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

    const field = $('#list_b li');

    for(let j=0; j < 1; j++){

        $("#list_b li").eq(i).append('<a href="#">' + "<img src='" + data[j].thumbnail + "'/>" + "</a>");

        $('#list_b li').eq(i).append('<a href="#">' + "<h4>" + data[j].title + "</h4>" + "</a>");

        $('#list_b li').eq(i).append('<a href="#">' + "<p>" + data[j].authors + "</p>" + "</a>");
    }

});
}

// 인문학
let search_;
search_humanities = ["도둑맞은 집중력", "세상은 이야기로 만들어졌다", "도파민네이션", "아비투스", "지루하면 죽는다", "가짜 노동", "문과 남자", "공정하다는 착각", "브레인포그", "정의란 무엇인가", "제정신이라는 착각", "명상록"]

for (let i = 0; i< search_humanities.length; i++){

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: search_humanities[i], size:15 },
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

    const field2 = $('#list_c li');

    for(let j=0; j < 1; j++){

        $("#list_c li").eq(i).append('<a href="#">' + "<img src='" + data[j].thumbnail + "'/>" + "</a>");

        $('#list_c li').eq(i).append('<a href="#">' + "<h4>" + data[j].title + "</h4>" + "</a>");

        $('#list_c li').eq(i).append('<a href="#">' + "<p>" + data[j].authors + "</p>" + "</a>");
    }

});
}

// 추리소설
let search_detective;
search_detective = ["살인자의 쇼핑몰", "명탐정의 창자", "살육에 이르는 병", "트러스트", "칵테일,러브,좀비", "나미야",
"방주", "명탐정의 제물", "이상한 집", "십각관의 살인", "이상한 그림", "잘린 머리처럼"]

for (let i = 0; i< search_detective.length; i++){

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: search_detective[i], size:15 },
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

    const field2 = $('#list_d li');

    for(let j=0; j < 1; j++){

        $("#list_d li").eq(i).append('<a href="#">' + "<img src='" + data[j].thumbnail + "'/>" + "</a>");

        $('#list_d li').eq(i).append('<a href="#">' + "<h4>" + data[j].title + "</h4>" + "</a>");

        $('#list_d li').eq(i).append('<a href="#">' + "<p>" + data[j].authors + "</p>" + "</a>");
    }

});
}

// 과학
let search_science;
search_science = ["물고기는 존재하지 않는다", "코스모스", "사이코패스 뇌과학자", "전쟁에서 살아남기", "한국전문소생술","문과 남자의 과학 공부", "이기적 유전자", "판타 레이", "운동의 뇌과학", "양자컴퓨터의 미래", "떨림과 울림", "우울할 땐 뇌 과학" ]

for (let i = 0; i< search_science.length; i++){

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: search_science[i], size:15 },
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

    const field2 = $('#list_e li');

    for(let j=0; j < 1; j++){

        $("#list_e li").eq(i).append('<a href="#">' + "<img src='" + data[j].thumbnail + "'/>" + "</a>");

        $('#list_e li').eq(i).append('<a href="#">' + "<h4>" + data[j].title + "</h4>" + "</a>");

        $('#list_e li').eq(i).append('<a href="#">' + "<p>" + data[j].authors + "</p>" + "</a>");
    }

});
}

// 자기계발서
let search_self;
search_self = ["아주 작은 습관의 힘", "퓨처 셀프", "마음 지구력", "거인의 노트", "놀라움의 힘", "원씽", "아주 세속적인 지혜", "타이탄의 도구들", "퀴팅", "인스타 브레인", "신경 끄기의 기술", "배불리 먹지 말 것"]

for (let i = 0; i< search_self.length; i++){

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: search_self[i], size:15 },
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

    const field2 = $('#list_f li');

    for(let j=0; j < 1; j++){

        $("#list_f li").eq(i).append('<a href="#">' + "<img src='" + data[j].thumbnail + "'/>" + "</a>");

        $('#list_f li').eq(i).append('<a href="#">' + "<h4>" + data[j].title + "</h4>" + "</a>");

        $('#list_f li').eq(i).append('<a href="#">' + "<p>" + data[j].authors + "</p>" + "</a>");
    }

});
}

// 슬라이드

$(function(){

    var page = 0;

    $('.fdprev').click(function(){

        page--;

        if(page < 0) {
            page = 0;
            return;
        }
        $('.fslide').stop().animate({marginLeft: -1158 * page},500);
        $('.fdprev').fadeOut(100)
        $('.fdnext').fadeIn(100)
    });
    $('.fdnext').click(function(){

        page++;

        if(page > $('.fslide').length-5){
            page = $('.fslide').length-5;
            return;
        }
        $('.fslide').stop().animate({marginLeft: -1158 * page},500);
        $('.fdnext').fadeOut(100)
        $('.fdprev').fadeIn(100)
    });
})

// 멀티페이지
$(function(){
    $('.booklist li').mouseover(function(){
        let i = $(this).index();

        $('.booklist li').removeClass("active")
        $(this).addClass("active")
        $('.fslide').eq(i).show().siblings('.fslide').hide();
        
    });
})