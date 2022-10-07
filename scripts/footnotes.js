   // David's footnotes script 
        let superscriptList = document.getElementsByClassName('superscript');

        for (let i=0; i < superscriptList.length;i++) {
            superscriptList[i].addEventListener("click",loadNote);
        }
        
        function loadNote(e) {
            e.preventDefault();
            let fnClass = e.target.classList[1];
            let pair = document.getElementsByClassName(fnClass);
            var element=document.getElementById("fn-area-content");
                document.getElementById('fn-area').style.visibility="visible";
                document.getElementById('fn-area').style.transform="translateY(0%)";
            element.innerHTML = pair[1].outerHTML;

            element.insertAdjacentHTML('beforeend', "<a href=\"#\" class=\"close\"><div class=\"arr\"></div></a>");

            document.getElementsByClassName('close')[0].addEventListener("click", function(e) {
                e.preventDefault();
                document.getElementById('fn-area').style.visibility="hidden";
                document.getElementById('fn-area').style.transform="translateY(150%)";
            });
        }

