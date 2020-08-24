/*global $*/
$(function() {

    // ========================================================================= //
    //   pagepiling
    // ========================================================================= //

    'use strict';
    $('#pagepiling').pagepiling({

        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9'],
        keyboardScrolling: false,
        normalScrollElements: true


    });

    $.fn.pagepiling.setAllowScrolling(false);

    $('#pp-nav li').eq(0).find("a").addClass("one");
    $('#pp-nav li').eq(1).find("a").addClass("two");
    $('#pp-nav li').eq(2).find("a").addClass("three");
    $('#pp-nav li').eq(3).find("a").addClass("four");
    $('#pp-nav li').eq(4).find("a").addClass("five");
    $('#pp-nav li').eq(5).find("a").addClass("six");
    $('#pp-nav li').eq(6).find("a").addClass("seven");
    $('#pp-nav li').eq(7).find("a").addClass("eight");
    $('#pp-nav li').eq(8).find("a").addClass("nine");


    $('#pp-nav li a').on('click', function() {
        var anchor = $(this).attr("class");
        if (anchor === "one") {
            $('#callbacksDiv').text("01");
        } else if (anchor === "two") {
            $('#callbacksDiv').text("02");
        } else if (anchor === "three") {
            $('#callbacksDiv').text("03");
        } else if (anchor === "four") {
            $('#callbacksDiv').text("04");
        } else if (anchor === "five") {
            $('#callbacksDiv').text("05");
        } else if (anchor === "six") {
            $('#callbacksDiv').text("06");
        } else if (anchor === "seven") {
            $('#callbacksDiv').text("07");
        } else if (anchor === "eight") {
            $('#callbacksDiv').text("08");
        } else if (anchor === "nine") {
            $('#callbacksDiv').text("09");
        }
    });


    // ========================================================================= //
    //   pagepiling Fix Number Navbar Menu
    // ========================================================================= //


    $('.navbar-wrapper .mainmenunav .navbar .navbar-collapse li .nav-link').on('click', function() {
        var data_text = $(this).attr("data-text");
        if (data_text === "about") {
            $('#callbacksDiv').text("02");
        } else if (data_text === "Services") {
            $('#callbacksDiv').text("03");
        } else if (data_text === "Portfolio") {
            $('#callbacksDiv').text("05");
        } else if (data_text === "team") {
            $('#callbacksDiv').text("07");
        } else if (data_text === "news") {
            $('#callbacksDiv').text("08");
        } else if (data_text === "Contact") {
            $('#callbacksDiv').text("09");
        }
    });


    // ========================================================================= //
    //   Counters
    // ========================================================================= //

    $('a[href="#page4"]').on('click', function() {
        $('.counter-value').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },

                {
                    duration: 9000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }

                });
        });

    });


});