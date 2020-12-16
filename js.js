$(document).ready(function () {
    $(".col-sm-4").hover(function () {
            // $(this).animate({
            //   		  opacity: '0.3',
            //   	});
            let x = $(this).attr("id")
            $(this).attr("id", "backgr_" + x)

            //	alert($(this).attr("id"))
        },
        function () {
            // $(this).animate({
            // 	backgroundColor:'red',
            //     opacity: '1',

            // });
            let x = $(this).attr("id")
            $(this).attr("id", (x.substr(7)))
        });

    $(".col-sm-4").click(function () {
        let x = $(this).attr("id");
        $(".desc_" + x.substr(7)).css("display", "block");
        $(".description").slideToggle();

////////// перемотка к след диву с блоками 
        let top = $('#yak1').offset().top;
        $('body,html').animate({scrollTop: top + 10}, 200);
//////////
        $("body").css("overflow-y", "hidden");
        $(".off").slideToggle();


    });

    $(".off").click(function () {

        for (let i = 0; i <= mass.length; i++) {
            $(".desc_" + mass[i]).css("display", "none");
        }
        $("body").css("overflow-y", "");
        $(".off").slideToggle();
        $(".description").slideToggle();
    })


});
/////flip cards btn_flip_second
$(document).ready(function () {
    $("#btn_flip_one").click(function () {

       let back_card = document.getElementById("second_card")
       let front_card = document.getElementById("first_card")
        if (back_card.className== "back_card_one_Off" || back_card.className== "off_card" ){
            back_card.className= "back_card_one"
            front_card.className= "back_card_one_Off"


        }else{
            front_card.className= "back_card_one"
            back_card.className= "back_card_one_Off"
        }
    })
    $("#btn_flip_second").click(function () {

       let back_card = document.getElementById("second_card_right")
       let front_card = document.getElementById("first_card_right")
        if (back_card.className== "back_card_one_Off" || back_card.className== "off_card"){
            back_card.className= "back_card_one"
            front_card.className= "back_card_one_Off"


        }else{
            front_card.className= "back_card_one"
            back_card.className= "back_card_one_Off"
        }
    })
})

////About me

$(document).ready(function () {

    $("#about").click(function () {

        $(".card_of_me").animate({
            width: 'toggle',
            height: 'toggle',
        });
        $('#btn_off').click(function () {
            $(".card_of_me").hide(500);
        });
    });


    $("#zhen").children("span").hover(function () {
            $(this).css("position", "relative")
            $(this).animate({
                opacity: '0.5',
                top: '-15px',
            }, 300);
        },

        function () {
            $(this).animate({
                opacity: '1',
                top: '0px',

            }, 300)

        });


});

$("#cursor_shot").hover(function () {

        $("#cursor_shot").mousemove(function (event) {
            var x, y;
            $(".cursor").css('display', 'block')
            $(".cursor2").css('display', 'block')
            $(".cursor3").css('display', 'block')
            $(".cursor4").css('display', 'block')
            $(".cursor5").css('display', 'block')
            $(".cursor6").css('display', 'block')
            $(".cursor7").css('display', 'block')
            x = event.clientX;
            y = event.clientY;
            $(".cursor").css('left', function () {
                return x - 5;
            });
            $(".cursor").css('top', function () {

                return y - 5;
            });
            for (let i = 2; i <= 7; i++) {
                setTimeout(function () {
                    $(".cursor" + i).css('left', function () {
                        return x - 2;
                    });
                    $(".cursor" + i).css('top', function () {

                        return y - 5;
                    });
                }, (i * 50))
            }
// setTimeout(function() {
// $( ".cursor2" ).css( 'left', function( ) {
//       return x-2;
// });
// $( ".cursor2" ).css( 'top', function() {

//   return y-5;
// });	
// },100)


        });
    },
    function () {
        $(".cursor").css('display', 'none')
        $(".cursor2").css('display', 'none')
        $(".cursor3").css('display', 'none')
        $(".cursor4").css('display', 'none')
        $(".cursor5").css('display', 'none')
        $(".cursor6").css('display', 'none')
        $(".cursor7").css('display', 'none')

    });


let mass = ['one', "two", "tree", "four", "five", "six"]


let arr = document.getElementsByClassName('col-sm-4')

let btn_descr = document.getElementById('btn_descr')
btn_descr.addEventListener('click', animateTextOn);

function animateTextOn() {
    let x = "There was once a baby crocodile. He had a beautiful shiny tail. All the other crocodiles were jealous of him." +
        "One day the little baby crocodile counted all his beautiful shiny scales and there were a thousand. A lot more than he thought." +
        "He counted all the other crocodiles and there were twenty. He decided that he had many scales and could spare forty from his tummy." +
        "He wished for forty of his scales to be on his pillow by morning, but there weren’t any. Even three weeks later there weren’t any" +
        "Then one day a magic crocodile granted him a wish. He wished for forty of his scales to be on his pillow." +
        "He woke up. There were forty beautiful shiny scales on his pillow! He gave all twenty crocodiles, two scales each. From then on everybody was kind to the little baby crocodile."



    animateText("fast", x, 0);
}

/////////// спаны в каждую букву
let arch = document.getElementById('archit');
let mass_arch = "!Architectural visualization"

for (let i = 1; i < mass_arch.length; i++) {
    arch.innerHTML += "<span>" + mass_arch[i] + "</span>";
}

/////////

function animateText(id, text, i) {
    document.getElementById(id).innerHTML = text.substring(0, i);
    i++;
    if (i > text.length) return;
    setTimeout("animateText('" + id + "','" + text + "'," + i + ")", 10);
}

(function () {
    $("#zhen").children("span").css("position", "relative")
    $("#zhen").children("span").animate({

        opacity: '0.5',
        top: '-10px',
    }, 100)
    $("#zhen").children("span").animate({
        opacity: '1',
        top: '0px',
    }, 1000)


})()
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});

//alert(arr.length);

// btnOn.addEventListener('click', blockOn);

// document.addEventListerner('onmouse',back_gr)
