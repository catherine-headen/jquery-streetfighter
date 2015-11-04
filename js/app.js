$(document).ready(function() {

    var coolSound = false;

    function playCool() {
        coolSound = !coolSound;
        if (coolSound) {
            // $('#cool')[0].load()
            $('#cool')[0].play();
        }
    }


    $('.ryu-action').hide();
    $('.ryu-still').show();

    $('.ryu').mouseenter(function() {
            $('.ryu-action').hide();
            $('.ryu-ready').show();
        })
        .mouseleave(function() {
            $('.ryu-action').hide();
            $('.ryu-still').show();
        })

    .mousedown(function() {
            playHadouken();
            $('.ryu-action').hide();
            $('.ryu-throwing').show();
            $('.hadouken').finish().show().animate({
                    'left': '1020px'
                },
                500,
                function() {
                    $(this).hide();
                    $(this).css('left', '520px');
                });
        })
        .mouseup(function() {
            $('.ryu-action').hide();
            $('.ryu-still').show();
        });

    /*on key press 
    		—> keydown —> display ryu-cool (and hide verifying else)*/
    $(document).keydown(function(key) {
        //console.log(key);
        if (key.keyCode == 88) {
            playCool();
            $('.ryu-action').hide(); //(this line means hide all 4 divs)
            $('.ryu-cool').show();
        }
    });

    /*	—> keyup —> display the default state --> ryu-still (and hide verifying else)*/
    $(document).keyup(function(key) {
        if (key.keyCode == 88) {
            $('#cool')[0].pause();
            $('#cool')[0].load();
            $('.ryu-action').hide(); //(this line means hide all 4 divs)
            $('.ryu-still').show();
        }
    });


});



function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}