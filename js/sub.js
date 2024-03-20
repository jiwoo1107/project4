
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "프로젝트 헤일메리" },
    headers: { Authorization: "KakaoAK 78195119a3fc01f033fad541dfd6ce7f" }
})
.done(function(msg){

    $(".bookimgbox").append("<img src='" + msg.documents[0].thumbnail + "'/>");

    $(".booktitle").append("<h1>" + msg.documents[0].title + "</h3>")
    $(".bookauthor").append("<h5>" + msg.documents[0].authors[0] + "</h5>" )
    $(".bookauthor").append("<h5>" + "알에이치코리아(RHK)"+ "</h5>" )
    $(".price .sale").append("<p>" +msg.documents[0].price + "원"+ "</p>");

    
        });

       
    