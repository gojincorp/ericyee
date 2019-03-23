$(function() {
    var $navbarToggle = $("#navbarToggle");
    var $topNavbar = $("#topNavbar");
    var $me = $("#me");
    var $ringBody = $("#ringBody");
    var $ringOfCharacters = $("#ringOfCharacters");
    var intervalId;
    var ringFrontIndex;

    // SHOWN EVENT FOR COLLAPSED NAVBAR
    // ================================
    $('#eyee-navbar').on('shown.bs.collapse', function(event) {
        // Open the active dropdown menu
        var $dropdown = $(".dropdown.active");
        if ($dropdown) {
            var $dropdownToggler = $dropdown.children().first();
            $dropdownToggler.dropdown('toggle');
        }
    })

    // SLIDEDOWN/SLIDEUP TRANSITION FOR DROPDOWN MENUS
    // ===============================================
    $('.dropdown').on('show.bs.dropdown', function(e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(250);
    });
    $('.dropdown').on('hide.bs.dropdown', function(e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(0);
    });

    // CLICK EVENT FOR DOCUMENT
    // ========================
    $(document).click(
            function(event) {
                var clickover = $(event.target);
                var _opened = $(".navbar-collapse").hasClass(
                        "navbar-collapse collapse in");
                if (_opened === true && !clickover.hasClass("navbar-toggle")) {
                    $("button.navbar-toggle").click();
                }
            });

    // VIEWPORT RESIZE CALLBACK
    // ========================
    var resizeCallback = function() {
        // console.log("resizeCallback: " + $(".device-xs").is(":visible") +
        // $(".device-sm").is(":visible") + $(".device-md").is(":visible") +
        // $(".device-lg").is(":visible"));
        if ($navbarToggle.is(":visible")) {
            $topNavbar.addClass('ibMobileCss');
            $topNavbar.removeClass('ibDefaultCss');
            $ringBody.addClass('ibMobileCss');
            $ringBody.removeClass('ibDefaultCss');
        } else {
            $topNavbar.removeClass('ibMobileCss');
            $topNavbar.addClass('ibDefaultCss');
            $ringBody.removeClass('ibMobileCss');
            $ringBody.addClass('ibDefaultCss');
        }

        if ($me.length) {
            $ringBody.height($me.height());
            $ringBody.css({
                top : -($me.height() * .27) + 'px'
            });
            $ringOfCharacters.css({
                fontSize : ($me.height() * .035) + 'px'
            });

            ringFrontIndex = (($(window).width() < 415) ? 52 : ($(".device-xs")
                    .is(":visible")) ? 51
                    : ($(".device-sm").is(":visible") ? 51 : ($(".device-md")
                            .is(":visible") ? 51 : 50)))
        }
    };
    resizeCallback();
    $(window).resize(function() {
        resizeCallback();
    });

    // BREAK WORD LIST INTO CHARACTER LIST
    // ===================================
    (function initializeRingOfCharacters() {
        var oldStr, newStr, count = 0;

        $('.ringWord').each(
                function() {
                    oldStr = $(this).text();
                    newStr = '';
                    for (var i = 0; i < oldStr.length; i++) {
                        count++;
                        newStr = newStr + '<li class="ringChar">'
                                + oldStr.charAt(i) + '</li>';
                    }
                    newStr = newStr + '<li class="ringChar"> </li>';
                    newStr = newStr + '<li class="ringChar"> </li>';
                    count += 2;
                    $(this).replaceWith(newStr);
                });
        // window.alert("initializeRingOfCharacters: count=" + count);
        // console.log("initializeRingOfCharacters: count=" + count);
    }());

    // MOUSEENTER EVENT FOR NAVBAR
    // ===========================
    $(".navbar-nav").on("mouseenter", ".dropdown", function(event) {
        var $dropdown = $(event.currentTarget);
        var $dropdownToggler = $dropdown.children().first();
        var $navbarToggle = $("#navbarToggle");
        if (!$navbarToggle.is(":visible")) {
            if (!$dropdown.hasClass("open")) {
                $dropdownToggler.dropdown('toggle');
            }
        }
    });

    // MOUSELEAVE EVENT FOR NAVBAR
    // ===========================
    $(".navbar-nav").on("mouseleave", ".dropdown", function(event) {
        var $dropdown = $(event.currentTarget);
        var $dropdownToggler = $dropdown.children().first();
        var $navbarToggle = $("#navbarToggle");
        if (!$navbarToggle.is(":visible")) {
            if ($dropdown.hasClass("open")) {
                $dropdownToggler.dropdown('toggle');
            }
        }
    });

    // Track navbar mouseenter event
    $(".dropdown-toggle").click(function(event) {
        // event.preventDefault();
        // event.stopPropagation();
        // console.log("click...");
        var $dropdownToggler = $(this);
        var $dropdown = $dropdownToggler.parent();
        var $navbarToggle = $("#navbarToggle");
        if (!$navbarToggle.is(":visible")) {
            event.stopImmediatePropagation();
            console.log("navbarToggle is hidden...");
            console.log($dropdown.hasClass("open"));
            if (!$dropdown.hasClass("open")) {
                console.log("toggle...");
                $dropdownToggler.dropdown('toggle');
            }
        }
    });

    var moveRing = function(event) {
        // event.stopPropagation();
        if (intervalId)
            window.clearInterval(intervalId);

        var li, liCount = 0;
        var breakCount = 2;

        for (var i = ringFrontIndex; breakCount > 0 && i < 97; i++) {
            li = $('.ringChar').eq(i).text();
            // console.log(li);
            if ((li == ' ') && ($('.ringChar').eq(i - 1).text() == ' ')) {
                breakCount--;
                i++;
                liCount += .5;
            }
            liCount = liCount + (breakCount == 2 ? 1 : .5);
        }
        // console.log("liCount = " + liCount);

        // Shift characters from end to start of set based on length of word
        /*
         * Deprecated while (liCount > 0) { li = $('.ringChar').last().detach();
         * $('.ringChar').first().before(li); liCount--; }
         */
        li = $('.ringChar:nth-child(-n+' + String(Math.round(liCount)) + ')')
                .detach();
        $('.ringChar').last().after(li);

        intervalId = window.setInterval(moveRing, 2000);
    };
    if ($me.length) {
        intervalId = window.setTimeout(resizeCallback, 500);
        intervalId = window.setInterval(moveRing, 0);
    }

    $('#ringBody').on("click", moveRing);

    $('#send_message').click(
            function(e) {
                e.preventDefault();
                var error = false;
                var topic = $('#topic').val();
                var name = $('#name').val();
                var email = $('#email').val();
                var subject = $('#subject').val();
                var message = $('#message').val();
                if (topic.length == 0) {
                    var error = true;
                    $('#topic_error').fadeIn(500);
                } else {
                    $('#topic_error').fadeOut(500);
                }
                if (name.length == 0) {
                    var error = true;
                    $('#name_error').fadeIn(500);
                } else {
                    $('#name_error').fadeOut(500);
                }
                if (email.length == 0 || email.indexOf('@') == '-1') {
                    var error = true;
                    $('#email_error').fadeIn(500);
                } else {
                    $('#email_error').fadeOut(500);
                }
                if (subject.length == 0) {
                    var error = true;
                    $('#subject_error').fadeIn(500);
                } else {
                    $('#subject_error').fadeOut(500);
                }
                if (message.length == 0) {
                    var error = true;
                    $('#message_error').fadeIn(500);
                } else {
                    $('#message_error').fadeOut(500);
                }
                if (!grecaptcha.getResponse()) {
                    var error = true;
                    $('#recaptcha_error').fadeIn(500);
                } else {
                    $('#recaptcha_error').fadeOut(500);
                }
                if (error == false) {
                    $('#send_message').attr({
                        'disabled' : 'true',
                        'value' : 'Sending...'
                    });
                    $.post("send_email.php", $("#contact_form").serialize(),
                            function(result) {
                                var r = result;
                                if (r == 'sent') {
                                    $('#cf_submit_p').remove();
                                    $('#mail_success').fadeIn(500);
                                } else if (r == 'robot') {
                                    $('#recaptcha_error').fadeIn(500);
                                    $('#send_message').removeAttr('disabled')
                                            .attr('value', 'Send Message');
                                } else {
                                    $('#mail_fail').fadeIn(500);
                                    $('#send_message').removeAttr('disabled')
                                            .attr('value', 'Send Message');
                                }
                            });
                }
            });

});