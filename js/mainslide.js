

function prev(){
    $(".slide li:last").prependTo(".slide").css({ "flex-grow": "0", "flex-basis": "45px", "display": "block" });
    $(".slide li:first").stop().animate({ "flex-grow": "1", "flex-basis": "0", "display": "block" }, "slow", "linear");
    $(".slide li").eq(2).stop().animate({ "flex-grow": "0", "flex-basis": "45px", "display": "block" }, "slow", "linear");
    $(".slide li").eq(1).stop().animate({ "flex-grow": "0", "flex-basis": "45px", "display": "block" }, "slow", "linear");
    $(".slide li").eq(3).css({ "flex-grow": "0", "flex-basis": "0", "display": "none"});
    $(".slide li .slidetext").not(":first").hide();
    $(".slide li .slidetext").eq(0).fadeIn(300)
}

function next() {
    $(".slide li:first").stop().animate({ "flex-grow": "0", "flex-basis": "0", "display": "none" }, "slow", "linear");
    $(".slide li").eq(1).stop().animate({ "flex-grow": "1", "flex-basis": "0", "display": "block" }, "slow", "linear", function () {
        $(".slide li:first").appendTo(".slide");
        $(".slide li").eq(1).css({ "flex-grow": "0", "flex-basis": "45px", "display": "block" }, 700);
        $(".slide li").eq(2).css({ "flex-grow": "0", "flex-basis": "45px", "display": "block" }, 700);
        $(".slide li:gt(3)").css({ "flex-grow": "0", "flex-basis": "0", "display": "none" });
        $(".slide li .slidetext").not(":first").fadeOut(100),
        $(".slide li .slidetext").eq(0).fadeIn(400)
    });
}
setInterval(next, 7000);

$(".mainprev").on("click", function () {
    prev();
});

$(".mainnext").on("click", function () {
    next();
});
