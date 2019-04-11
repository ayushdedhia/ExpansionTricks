var img = ["images/doggy.jpg",
"images/forest.jpg",
"images/lake.jpg",
"images/pexels.jpg",
"images/pexels2.jpg",
"images/pexels3.jpg",
"images/water.jpg",
"images/water2.jpg",
"images/water3.jpg" ];

var i = 0;

function createSlide(){
    document.getElementById('slide').src = img[i];

    if (i < (img.length - 1)) {

        i++;

    } else {

        i = 0;

    }

}

setInterval(createSlide, 3000);