$(document).ready(function(){
    $(document).scroll(function(){
        let trackPosition = $(document).scrollTop();
        console.log(trackPosition);

        if ((trackPosition > 10) && (trackPosition < 50)) {
            const content1 = $('#image');
            const content2 = $('#para1');
            const content3 = $('#quest-1');
            content1.addClass('animated jackInTheBox');
            content2.addClass('animated fadeInDown');
            content3.addClass('animated fadeInDown');
        }

        if ((trackPosition > 300) && (trackPosition < 390)) {
            const content1 = $('#image-1');
            const content2 = $('#para2');
            const content3 = $('#quest-2');
            content1.addClass('animated jackInTheBox');
            content2.addClass('animated fadeInDown');
            content3.addClass('animated fadeInDown');
        }

        if((trackPosition > 1438) && (trackPosition < 1538)) {
            const form = $('#form');
            form.addClass('animated jello');
        }

        if ((trackPosition > 2147) && (trackPosition < 2200)) {
            const anim = $('#imageHolder');
            anim.addClass('animated flipInX');
        }

        if ((trackPosition > 2519) && (trackPosition < 2500)) {
            const link1 = $('#link1');
            const link2 = $('#link2');
            const link3 = $('#link3');
            link1.addClass('animated bounce');
            link2.addClass('animated bounce');
            link3.addClass('animated bounce');
        }

        if ((trackPosition > 2762) && (trackPosition < 2800)) {
            const link4 = $('#link4');
            const link5 = $('#link5');
            const link6 = $('#link6');
            link4.addClass('animated bounce');
            link5.addClass('animated bounce');
            link6.addClass('animated bounce');
        }

        if ((trackPosition > 2838) && (trackPosition < 2951)) {
            const link7 = $('#link7');
            const link8 = $('#link8');
            const link9 = $('#link9');
            link7.addClass('animated bounce');
            link8.addClass('animated bounce');
            link9.addClass('animated bounce');
        }

        if ((trackPosition > 3367) && (trackPosition < 3567)) {
            const svg = $('#mobile')
            svg.addClass('animated zoomIn')
        }

        if((trackPosition > 3889) && (trackPosition < 4093)){
            const api = $('#api-image');
            const label = $('#label');
            const heading = $('#name');
            const txt = $('#fornow');
            api.addClass('animated bounce');
            label.addClass('animated slideInRight');
            heading.addClass('animated slideInLeft');
            txt.addClass('animated slideInUp');
        }
    });
});