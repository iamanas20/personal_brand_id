
function onLoad() {
    var btns = document.getElementsByClassName("real-link");
    var sections = document.getElementsByClassName("section");
    
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {

            var current = document.getElementsByClassName("active-nav-link");
            current[0].className = current[0].className.replace(" active-nav-link", "");
            this.className += " active-nav-link";

            var current_section = document.getElementsByClassName("show-section");
            
            var num;

            if (this.className.includes('1')) {
                num = 1;
            }
            if (this.className.includes('2')) {
                num = 2;
            }
            if (this.className.includes('3')) {
                num = 3;
            }
            if (this.className.includes('4')) {
                num = 4;
            }
            
            current_section[0].className.replace(" show-section", "");
            
            current_section[0].className = current_section[0].className.replace(" show-section", "");
            
            sections[num - 1].className += " show-section";
            
        });
    }
}



var $circle = $('.mouse-follower');

function moveCircle(e) {
    TweenLite.to($circle, 0.3, {
        css: {
            opacity: 1,
            left: e.pageX - 14,
            top: e.pageY - 14
        }
    });
}

function disappearCircle(e) {
    TweenLite.to($circle, 0.3, {
        css: {
            opacity: 0,
        }
    });
}

$(window).on('mousemove', moveCircle);
$(document).on('mouseleave', disappearCircle);


var link_stripe = $('active-border');


