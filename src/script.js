(function($) {
    "use strict";

    // Spinner
    var spinner = function() {
        setTimeout(function() {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function() {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top shadow-sm');
        } else {
            $('.nav-bar').removeClass('sticky-top shadow-sm');
        }
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


    // Modal Video
    $(document).ready(function() {
        var $videoSrc;
        $('.btn-play').click(function() {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function(e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function(e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonial-carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });



    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });




    // Dark mode toggle
    function applyTheme(theme) {
        if (theme === 'dark') {
            $('body').addClass('dark-mode');
            $('.theme-toggle-btn i').removeClass('fa-moon').addClass('fa-sun');
        } else {
            $('body').removeClass('dark-mode');
            $('.theme-toggle-btn i').removeClass('fa-sun').addClass('fa-moon');
        }
    }

    var savedTheme = localStorage.getItem('siteTheme') || 'light';
    applyTheme(savedTheme);

    $('.theme-toggle-btn').click(function() {
        var theme = $('body').hasClass('dark-mode') ? 'light' : 'dark';
        applyTheme(theme);
        localStorage.setItem('siteTheme', theme);
    });

    // Search modal helper
    function highlightSearch(term) {
        var results = $('h1, h2, h3, h4, h5, p, a').filter(function() {
            return $(this).text().toLowerCase().indexOf(term) !== -1;
        });
        if (results.length > 0) {
            var target = results.first();
            var offset = target.offset().top - 90;
            $('html, body').animate({ scrollTop: offset }, 800);
            return true;
        }
        return false;
    }

    $('#pageSearchButton').click(function() {
        var term = $('#pageSearchInput').val().trim().toLowerCase();
        if (!term) {
            return;
        }
        if (highlightSearch(term)) {
            var modalEl = document.getElementById('searchModal');
            if (modalEl) {
                var modal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
                if (modal) {
                    modal.hide();
                }
            }
        } else {
            alert('No matching content found. Try a different keyword.');
        }
    });

    $('#pageSearchInput').keypress(function(e) {
        if (e.which === 13) {
            $('#pageSearchButton').click();
            return false;
        }
    });

    // Chatbot widget
    function addChatMessage(text, sender) {
        var bubble = $('<div class="chatbot-message ' + sender + '"><div class="message-bubble"></div></div>');
        bubble.find('.message-bubble').text(text);
        $('.chatbot-body').append(bubble);
        $('.chatbot-body').scrollTop($('.chatbot-body')[0].scrollHeight);
    }

    function getChatbotReply(message) {
        message = message.toLowerCase();
        if (message.indexOf('free') !== -1 || message.indexOf('promotion') !== -1 || message.indexOf('announcement') !== -1) {
            return 'Currently, we are promoting government free-of-charge visa programs for select quick visa countries, and up to 70% scholarships for students and trained nurses. Contact us to learn more!';
        }
        if (message.indexOf('visa') !== -1) {
            return 'We can help with Canada, Australia, New Zealand, UK, US, and European visas. Which destination are you interested in?';
        }
        if (message.indexOf('scholarship') !== -1 || message.indexOf('study') !== -1 || message.indexOf('nurse') !== -1 || message.indexOf('a/l') !== -1) {
            return 'We offer up to 70% scholarship opportunities for after-A/L students, trained nurses, MSc/PhD candidates, and short-term diploma programs in Canada, Australia, and the UK.';
        }
        if (message.indexOf('contact') !== -1 || message.indexOf('office') !== -1 || message.indexOf('location') !== -1) {
            return 'We operate through three major offices: our Head Office in Kollupitiya (Colombo), our regional office in Atlantic Canada, and our branch office in Galle.';
        }
        if (message.indexOf('legal') !== -1 || message.indexOf('appeal') !== -1 || message.indexOf('refusal') !== -1) {
            return 'Our legal services cover visa refusals, immigration appeals, refugee law, and citizenship/residency representation. You can upload refusal letters for review on our Legal page.';
        }
        return 'Hello! I am the Gen-Ardent AI Assistant. Ask me about our free visa promotions, 70% scholarships, office locations, or legal appeals!';
    }

    $('.chatbot-toggle').click(function() {
        $('.chatbot-widget').toggleClass('show');
    });

    $('.chatbot-close').click(function() {
        $('.chatbot-widget').removeClass('show');
    });

    $('#chatbotSend').click(function() {
        var message = $('#chatbotInput').val().trim();
        if (!message) {
            return;
        }
        addChatMessage(message, 'user');
        $('#chatbotInput').val('');
        setTimeout(function() {
            addChatMessage(getChatbotReply(message), 'bot');
        }, 600);
    });

    $('#chatbotInput').keypress(function(e) {
        if (e.which === 13) {
            $('#chatbotSend').click();
            return false;
        }
    });

    // Newsletter signup (stores locally and shows confirmation)
    $('.footer').on('click', 'button:contains("SignUp")', function() {
        var $btn = $(this);
        var $input = $btn.closest('.position-relative').find('input[placeholder="Enter your email"]');
        if ($input.length === 0) return;
        var email = $input.val().trim();
        if (!email) {
            showFormError($input, 'Please enter your email to subscribe.');
            return;
        }
        if (!isValidEmail(email)) {
            showFormError($input, 'Please enter a valid email address.');
            return;
        }
        var key = 'newsletter_' + Date.now();
        try {
            localStorage.setItem(key, email);
        } catch (e) {
            console.warn('Could not save newsletter email locally', e);
        }
        $input.val('');
        showConfirmation('Newsletter Subscribed', 'Thanks â€” you are subscribed to our newsletter.');
    });

    // Create a reusable confirmation modal and form helpers
    function createConfirmationModal() {
        if ($('#siteConfirmModal').length) return;
        var modalHtml = '\n<div class="modal fade" id="siteConfirmModal" tabindex="-1" aria-hidden="true">\n  <div class="modal-dialog modal-dialog-centered">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h5 class="modal-title" id="siteConfirmTitle"></h5>\n        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n      </div>\n      <div class="modal-body" id="siteConfirmBody"></div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\n        <button type="button" class="btn btn-primary" id="siteConfirmOk">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n';
        $('body').append(modalHtml);
    }

    function showConfirmation(title, message, onOk) {
        createConfirmationModal();
        $('#siteConfirmTitle').text(title || 'Confirmation');
        $('#siteConfirmBody').html(message || 'Done.');
        var modalEl = document.getElementById('siteConfirmModal');
        var modal = new bootstrap.Modal(modalEl);
        $('#siteConfirmOk').off('click').on('click', function() {
            modal.hide();
            if (typeof onOk === 'function') onOk();
        });
        modal.show();
    }

    function isValidEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }

    function showFormError($el, message) {
        $el.addClass('is-invalid');
        var $fb = $el.next('.invalid-feedback');
        if ($fb.length === 0) {
            $fb = $('<div class="invalid-feedback"></div>');
            $el.after($fb);
        }
        $fb.text(message);
    }

    function clearFormErrors($form) {
        $form.find('.is-invalid').removeClass('is-invalid');
        $form.find('.invalid-feedback').remove();
    }

    function validateForm($form) {
        clearFormErrors($form);
        var valid = true;
        var firstInvalid = null;

        // native required fields
        $form.find('input[required], textarea[required], select[required]').each(function() {
            var $el = $(this);
            if (!$el.val() || $el.val().trim() === '') {
                valid = false;
                if (!firstInvalid) firstInvalid = $el;
                showFormError($el, 'This field is required.');
            }
        });

        // fallback: common field names
        $form.find('input, textarea').each(function() {
            var $el = $(this);
            var id = ($el.attr('id') || '').toLowerCase();
            var name = ($el.attr('name') || '').toLowerCase();
            var val = $el.val() || '';
            if ((id.indexOf('name') !== -1 || name.indexOf('name') !== -1) && val.trim() === '') {
                if (!$el.hasClass('is-invalid')) {
                    valid = false;
                    if (!firstInvalid) firstInvalid = $el;
                    showFormError($el, 'Please enter your name.');
                }
            }
            if ((id.indexOf('email') !== -1 || name.indexOf('email') !== -1) && val.trim() === '') {
                if (!$el.hasClass('is-invalid')) {
                    valid = false;
                    if (!firstInvalid) firstInvalid = $el;
                    showFormError($el, 'Please enter your email.');
                }
            }
            if ((id.indexOf('email') !== -1 || name.indexOf('email') !== -1) && val.trim() !== '' && !isValidEmail(val)) {
                valid = false;
                if (!firstInvalid) firstInvalid = $el;
                showFormError($el, 'Please enter a valid email address.');
            }
            if ((id.indexOf('message') !== -1 || name.indexOf('message') !== -1 || id.indexOf('subject') !== -1) && val.trim() === '') {
                if (!$el.hasClass('is-invalid')) {
                    valid = false;
                    if (!firstInvalid) firstInvalid = $el;
                    showFormError($el, 'Please enter a message.');
                }
            }
        });

        if (firstInvalid) firstInvalid.focus();
        return valid;
    }

    // Contact and consultation form handlers (client-side only) with validation and modals
    $(document).on('submit', '#contactForm, #consultForm, #careerForm', function(e) {
        e.preventDefault();
        var $form = $(this);
        if (!validateForm($form)) return;

        var formData = {};
        $form.find('input, textarea, select').each(function() {
            var name = $(this).attr('name') || $(this).attr('id');
            if (!name) return;
            if ($(this).attr('type') === 'file') {
                var file = $(this)[0].files[0];
                formData[name] = file ? file.name : '';
            } else {
                formData[name] = $(this).val();
            }
        });
        // Save a local record for demo purposes
        try {
            var storageKey = ($form.attr('id') || 'form') + '_' + Date.now();
            localStorage.setItem(storageKey, JSON.stringify(formData));
        } catch (e) {
            console.warn('Could not save form locally', e);
        }
        $form.trigger('reset');
        showConfirmation('Request Received', 'Thank you. Your request has been recorded. Our team will contact you shortly.');
    });

    // Show chosen CV filename when a file is selected
    $(document).on('change', 'input[type=file]', function() {
        var file = this.files[0];
        if (!file) return;
        var $label = $(this).closest('.col-12').find('.form-label');
        if ($label.length) {
            $label.text('Upload CV (selected: ' + file.name + ')');
        }
    });

    // Career page Apply button handling
    $(document).on('click', '.apply-job-btn', function() {
        var jobName = $(this).data('job');
        $('#positionInput').val(jobName);
        var $applySec = $('#applySection');
        if ($applySec.length) {
            $('html, body').animate({
                scrollTop: $applySec.offset().top - 100
            }, 600);
        }
    });

    // More destinations button logic on homepage
    $(document).on('click', '#moreDestinationsBtn', function(e) {
        if ($('.country-more').hasClass('d-none')) {
            e.preventDefault();
            $('.country-more').removeClass('d-none').hide().fadeIn(800);
            $(this).text('View All Countries Details');
            $(this).attr('href', 'countries.html');
        }
    });

    // Pathway Finder Widget Handler
    $(document).on('click', '.finder-btn', function() {
        var nextStep = $(this).data('next');
        var val = $(this).data('val');

        // Hide current step
        $(this).closest('.finder-step').addClass('d-none');

        if (nextStep === 'step2-study') {
            $('#finderStep2Study').removeClass('d-none').hide().fadeIn(400);
        } else if (nextStep === 'step2-migrate') {
            $('#finderStep2Migrate').removeClass('d-none').hide().fadeIn(400);
        } else {
            // Result step
            var title = "";
            var desc = "";
            var link = "";

            if (nextStep === 'result-legal') {
                title = "Legal Services & Appeals";
                desc = "We recommend our specialized legal advisory for visa rejections, administrative reviews, and refugee appeals. Work directly with our registered legal advocates.";
                link = "legal.html";
            } else if (nextStep === 'result-canada-study') {
                title = "Canada Study Pathway";
                desc = "We recommend pursuing a study permit in Canada. Academic programs lead directly to Post-Graduation Work Permits (PGWP) and permanent residency pathways.";
                link = "canada.html";
            } else if (nextStep === 'result-other-study') {
                title = "Global Study Programs";
                desc = "We recommend student visas or 70% scholarship opportunities for Australia, the United Kingdom, New Zealand, USA, and Europe.";
                link = "countries.html";
            } else if (nextStep === 'result-skilled-worker') {
                title = "Canada Express Entry & Skilled Migration";
                desc = "Based on your professional credentials, you may qualify for the Federal Skilled Worker Program or Provincial Nominee Programs (PNP).";
                link = "canada.html";
            } else if (nextStep === 'result-other-migrate') {
                title = "General Relocation & Sponsorships";
                desc = "We suggest exploring family sponsorship or regional relocation pathways for Australia, NZ, UK, or Europe.";
                link = "countries.html";
            }

            $('#recommendationTitle').text(title);
            $('#recommendationDesc').text(desc);
            $('#recommendationLink').attr('href', link);
            $('#finderResult').removeClass('d-none').hide().fadeIn(400);
        }
    });

    $(document).on('click', '.finder-back', function() {
        var prevStep = $(this).data('prev');
        $(this).closest('.finder-step').addClass('d-none');
        if (prevStep == 1) {
            $('#finderStep1').removeClass('d-none').hide().fadeIn(400);
        }
    });

    $(document).on('click', '.finder-reset', function() {
        $('.finder-step').addClass('d-none');
        $('#finderStep1').removeClass('d-none').hide().fadeIn(400);
    });

})(jQuery);
