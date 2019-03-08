$(() => {
    // RGB Circles
    // Add the css class 'bg-red' to the circle with the id #make-me-red
    // Now do the same for green and blue...
    $('#make-me-red').addClass("bg-red");
    $('#make-me-green').addClass("bg-green");
    $('#make-me-blue').addClass("bg-blue"); // no period before class, addClass already knows its looking for a class

    // CMYK
    // Do the same as above for CMYK circles
    // Note that the K in CYMK means black. Check the CSS file for the appropate background classes
    $('#make-me-cyan').addClass("bg-cyan");
    $('#make-me-yellow').addClass("bg-yellow");
    $('#make-me-magenta').addClass("bg-magenta");
    $('#make-me-black').addClass("bg-black");

    // extra credit loopage:
    // for (let circle of $('.circle')){
    //     let color = $(circle).attr('id').slice(8);
    //     console.log(color);
    //     $(cirlce).addClass(`bg-${color}`);
    // }  // this requires a lot of intentionality on name convention
    // $(".flex-container").css('background-color', 'grey').css('border-radius', '10px').css('padding', '30px');
    $(".flex-container").css({
        'background-color': 'grey',
        'border-radius': '10px',
        'padding': '30px'
    })
    $(".circle").hover(
             function(){
        $(this).css('opacity', '.3');  // styles on hover
        },   function(){
        $(this).css('opacity', '1'); // styles after hover
        });
    // $(".flex-container").fadeOut(3000).delay(1000).fadeIn(1000);
});