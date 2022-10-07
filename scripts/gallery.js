// David's fluid image gallery column script

var gal, kids;

document.addEventListener('DOMContentLoaded', function() {
    assign();
    makeGrid();

    var images = document.querySelectorAll(".gallery img");

    images.forEach( (e) => {
        if (e.complete) {
            e.classList.add("loaded");
        } else {
            e.addEventListener("load", (event) => {
                e.classList.add("loaded");
            });
        }
    });

    window.addEventListener("load", makeGrid);
    window.addEventListener("resize", makeGrid);
    window.addEventListener("orientationChange", makeGrid);

});

function assign() {
    gal = document.querySelector(".gallery");
    kids = document.querySelectorAll(".gallery a img");
}

function makeGrid() {
    var mx=my=bw=5;

    if(gal.offsetWidth > 895) {
        var widthCalc = 300 - bw * 2 / 3;

        for(let i=0; i < kids.length;i++) {

           if (i%3 == 0) mx=0;

           kids[i].style.position = "absolute";
           kids[i].style.width = widthCalc + "px";
           
           kids[i].style.left = mx + "px";

           if (i > 2) {
               my = kids[i-3].offsetTop + kids[i-3].height + bw;
           }
           
           kids[i].style.top = my + "px";
           

           mx = mx + kids[i].width + bw;
        }
    }

    else if(gal.offsetWidth > 550) {
        var widthCalc = gal.offsetWidth / 2 - bw / 2;

        for(let i=0; i < kids.length;i++) {

           if (i%2 == 0) mx=0;

           kids[i].style.position = "absolute";
           kids[i].style.width = widthCalc + "px";
           
           kids[i].style.left = mx + "px";

           if (i > 1) {
               my = kids[i-2].offsetTop + kids[i-2].height + bw;
           }
           
           kids[i].style.top = my + "px";
           

           mx = mx + kids[i].width + bw;
        }
    }

    else {
        for(let i=0; i < kids.length;i++) {

           kids[i].style.position = "relative";
           kids[i].style.width = "100%";
           
           kids[i].style.left = "0px";
           kids[i].style.top = "0px";
        }
    }
}
