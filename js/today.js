
let search;
search = ["블랙 쇼맨", "프랭크 허버트 단편 걸작선", "왜 내 사랑은 이렇게 힘들까", "홍보의 신", "생각중독","코끼리는생각하지마" ]

for (let i = 0; i< search.length; i++){

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: search[i], size:15 },
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


    // for문 (6개)
    $('.bookbox').append('<div class="bookbox_wrap"></div>');    

    for (let j = 0; j < 1; j++) {
        $('.bookbox_wrap').eq(i).append('<div class="tobox'+ i +' tobox"></div>');

        $('.tobox' + i).eq(j).append('<a href="sub.html">' + "<img src='" + data[j].thumbnail + "'/>" + "</a>");
    
        
        let str = data[j].contents;
        let str2 = str.substring(0, 60);

    }

});

}