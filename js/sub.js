
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


        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=authors",
            data: { query: "앤디 위어" },
            headers: { Authorization: "KakaoAK 78195119a3fc01f033fad541dfd6ce7f" }
        })
        .done(function(msg){

            const divs = $('.mplist li');

            for(let i=0; i < divs.length; i++){

            
            $(".mplist li").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
        
            $(".mplist li").eq(i).append("<p>" + msg.documents[i].title + "</p>")
        
            }
            });

    //    텍스트 가져오기
        $(function(){
            $.get("./sub_text/txt1.txt", function(data){
             $('.worktext').html(data);
            })
        })

        $(function(){
            $.get("./sub_text/txt2.txt", function(data){
             $('.worktext2').html(data);
            })
        })

        $(function(){
            $.get("./sub_text/br.txt", function(data){
             $('.pbtext').html(data);
            })
        })

        $(function(){
            $.get("./sub_text/br2.txt", function(data){
             $('.pbtext2').html(data);
            })
        })

        $(function(){
            $.get("./sub_text/at.txt", function(data){
             $('.attext').html(data);
            })
        })

        $(function(){
            $.get("./sub_text/at2.txt", function(data){
             $('.attext2').html(data);
            })
        })

        // 접기, 펼쳐보기
        $(function(){
            $('.textbox').click(function(){
                $('.worktext2').stop().slideToggle();
            })
        
        })


        $(function(){
            $('.pbtextbox').click(function(){
                $('.pbtext2').stop().slideToggle();
            })
        })

        $(function(){
            $('.attextbox').click(function(){
                $('.attext2').stop().slideToggle(200);
            })
        })


        // 리뷰창
        