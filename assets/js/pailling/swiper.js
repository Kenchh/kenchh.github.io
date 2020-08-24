(function($) {
    $(function() {

        /* Swiper services */

        var agSwiper = $('.swiper-services');

        if (agSwiper.length > 0) {

            var sliderView = 3;
            var ww = $(window).width();
            /* Desktop */
            if (ww >= 1700) sliderView = 3;
            if (ww <= 1700) sliderView = 3;
            /* End Desktop */
            if (ww <= 1560) sliderView = 6;
            if (ww <= 1400) sliderView = 5;
            if (ww <= 1060) sliderView = 4;
            if (ww <= 1199) sliderView = 3;
            if (ww <= 992) sliderView = 3;
            if (ww <= 991) sliderView = 2;
            if (ww <= 768) sliderView = 2;
            if (ww <= 767) sliderView = 2;
            if (ww <= 600) sliderView = 1;
            if (ww <= 480) sliderView = 1;
            if (ww <= 320) sliderView = 1;

            var swiper = new Swiper('.swiper-services', {
                /*  slidesPerView: 3, */
                slidesPerView: sliderView,
                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });

            $(window).resize(function() {
                var ww = $(window).width();
                if (ww >= 1700) swiper.params.slidesPerView = 3;
                if (ww <= 1700) swiper.params.slidesPerView = 3;
                if (ww <= 1560) swiper.params.slidesPerView = 3;
                if (ww <= 1400) swiper.params.slidesPerView = 3;
                if (ww <= 1024) swiper.params.slidesPerView = 2;
                if (ww <= 992) swiper.params.slidesPerView = 2;
                if (ww <= 991) swiper.params.slidesPerView = 2;
                if (ww <= 800) swiper.params.slidesPerView = 2;
                if (ww <= 768) swiper.params.slidesPerView = 2;
                if (ww <= 767) swiper.params.slidesPerView = 2;
                if (ww <= 600) swiper.params.slidesPerView = 2;
                if (ww <= 560) swiper.params.slidesPerView = 1;
                if (ww <= 480) swiper.params.slidesPerView = 1;
                if (ww <= 375) swiper.params.slidesPerView = 1;
                if (ww <= 320) swiper.params.slidesPerView = 1;
            });

            $(window).trigger('resize');

            var mySwiper = document.querySelector('.swiper-services').swiper;

            agSwiper.mouseenter(function() {
                mySwiper.autoplay.stop();
                console.log('slider stopped');
            });

            agSwiper.mouseleave(function() {
                mySwiper.autoplay.start();
                console.log('slider started again');
            });
        }


        /* Swiper Portfolio */

        var agSwiperOne = $('.swiper-portfolio');

        if (agSwiperOne.length > 0) {

            var sliderView = 3;
            var ww = $(window).width();
            /* Desktop */
            if (ww >= 1700) sliderView = 3;
            if (ww <= 1700) sliderView = 3;
            /* End Desktop */
            if (ww <= 1560) sliderView = 6;
            if (ww <= 1400) sliderView = 5;
            if (ww <= 1060) sliderView = 4;
            if (ww <= 1199) sliderView = 3;
            if (ww <= 992) sliderView = 3;
            if (ww <= 991) sliderView = 2;
            if (ww <= 768) sliderView = 2;
            if (ww <= 767) sliderView = 2;
            if (ww <= 600) sliderView = 1;
            if (ww <= 480) sliderView = 1;
            if (ww <= 320) sliderView = 1;

            var swiper = new Swiper('.swiper-portfolio', {
                /*  slidesPerView: 3, */
                slidesPerView: sliderView,
                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });

            $(window).resize(function() {
                var ww = $(window).width();
                if (ww >= 1700) swiper.params.slidesPerView = 3;
                if (ww <= 1700) swiper.params.slidesPerView = 3;
                if (ww <= 1560) swiper.params.slidesPerView = 3;
                if (ww <= 1400) swiper.params.slidesPerView = 3;
                if (ww <= 1024) swiper.params.slidesPerView = 2;
                if (ww <= 992) swiper.params.slidesPerView = 2;
                if (ww <= 991) swiper.params.slidesPerView = 2;
                if (ww <= 800) swiper.params.slidesPerView = 2;
                if (ww <= 768) swiper.params.slidesPerView = 2;
                if (ww <= 767) swiper.params.slidesPerView = 2;
                if (ww <= 600) swiper.params.slidesPerView = 2;
                if (ww <= 560) swiper.params.slidesPerView = 1;
                if (ww <= 480) swiper.params.slidesPerView = 1;
                if (ww <= 375) swiper.params.slidesPerView = 1;
                if (ww <= 320) swiper.params.slidesPerView = 1;
            });

            $(window).trigger('resize');

            var mySwiper = document.querySelector('.swiper-portfolio').swiper;

            agSwiperOne.mouseenter(function() {
                mySwiper.autoplay.stop();
                console.log('slider stopped');
            });

            agSwiperOne.mouseleave(function() {
                mySwiper.autoplay.start();
                console.log('slider started again');
            });
        }

    });
})(jQuery);