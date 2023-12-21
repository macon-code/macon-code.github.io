var $content = $('#imgsList'); // Cache your selectors!

$(".slide-control.left").hover( function loop() {
    $content.stop().animate({  marginLeft: '-=1600' }, 5000, 'linear', function(){
        $content.css({ marginLeft : "0px" });
        loop();
    });
}, function stop() {
    $content.stop();
});

$(".slide-control.right").hover( function loop() {
    $content.stop().animate({  marginLeft: '+=1600' }, 5000, 'linear', function(){
        $content.css({ marginLeft : -$content.outerWidth() });
        loop();
    });
}, function stop() {
    $content.stop();
});






// var $content = $('#imgsList'); // Cache your selectors!
// $(".cont").hover( function loop() {
//     $content.stop().animate({  marginLeft: '-=1600' }, 5000, 'linear', function(){
//         $content.css({ marginLeft : "0px" });
//         loop();
//     });
// }, function stop() {
//     $content.stop();
// });


// var $content = $('#imgsList');


// $(".slide-control.left").hover( function loop() {
//     $content.stop().animate({  marginLeft: '-=1600' }, 5000, 'linear', function(){
//         $content.css({ marginLeft : "0px" });
//         loop();
//     });
// }, function stop() {
//     $content.stop();
// });

// $(".slide-control.right").hover( function loop() {
//     $content.stop().animate({  marginLeft: '+=1600' }, 5000, 'linear', function(){
//         $content.css({ marginLeft : -$content.outerWidth() });
//         loop();
//     });
// }, function stop() {
//     $content.stop();
// });