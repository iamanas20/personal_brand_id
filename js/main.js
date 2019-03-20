
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
