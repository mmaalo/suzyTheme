let darkmode;

let darkColors = {
    background1: '#303030',
    background2: '#1a1a1a',
    border1: '#555',
    text1: '#959595',
    text2: '#f5f5f5',
    text3: '#7d8285',
    text4: '#8ab8cf',
    button: '#f44336',
    invert: 'invert(100%)'
}

let darkStyles = `
    /* Set default colors */
        body {
            background-color: ${darkColors.background2};
        }
        h1, h2, h3, h4, h5, h6 {
            color: ${darkColors.text2};
        }
        span, td, a, div {
            color: ${darkColors.text1};
        }
        li a {
            color: ${darkColors.text3};
        }

        /* Make 'Suzy Lu' logo white */
        .site-logo {
            filter: ${darkColors.invert};
        }

    /* Header */
        .header .header__container-wrapper--header__top{
            background: ${darkColors.background1};
            border-bottom: solid 1px ${darkColors.border1};
        }
        .header .js-sticky-header-element {
            background: ${darkColors.background1};
        }
        .header .js-sticky-header-placeholder {
            background: ${darkColors.background2};
        }
        .header .header__social-menu i,
        .header .header__user-nav i {
            color: ${darkColors.text2};
        }

        /* Header user button */
            .header__toggleable-account-menu ul.menu li:first-child {
                border-top: 4px solid ${darkColors.text4};
            }
            .header__toggleable-account-menu ul.menu li {
                background-color: ${darkColors.background1};
            }
            .header__toggleable-account-menu ul.menu li a {
                color: ${darkColors.text2};
            }

        /* Header menu */
            .tb-megamenu-item a,
            .tb-megamenu-column-inner {
                background-color: ${darkColors.background1};
                color: ${darkColors.text1};
            }
            .tb-megamenu .tb-megamenu-item.level-1 a {
                background-color: ${darkColors.background1};
                color: ${darkColors.text2};
            }
            .tb-megamenu .tb-megamenu-item.level-1.active-trail>a {
                background-color: ${darkColors.background1};
                color: ${darkColors.text2};
            }
            .tb-megamenu .nav>.dropdown>.dropdown-toggle .caret {
                color: ${darkColors.text2};
            }

    /* Sidebar menu*/
        #offcanvas-sidebar,
        #offcanvas-sidebar .menu .menu-item {
            background-color: ${darkColors.background2};
            color: ${darkColors.text2};
            -webkit-box-shadow: none;
            box-shadow: none;
        }
        #offcanvas-sidebar .menu .menu-item:hover {
            background-color: ${darkColors.text2};
            color: ${darkColors.background1};
        }
        #offcanvas-sidebar ul.menu a {
            border-bottom: 1px solid ${darkColors.text1};
        }
        #offcanvas-sidebar ul.menu a:hover,
        #offcanvas-sidebar ul.menu a:focus {
            color: ${darkColors.background1};
        }
        #offcanvas-sidebar ul.menu li.menu-item--expanded ul a {
            color: ${darkColors.text2};
            border-bottom: 1px solid ${darkColors.border1};
        }
        #offcanvas-sidebar ul.menu li.menu-item--expanded ul a:hover {
            color: ${darkColors.background1};
        }

    /* Page Title */
        .block--region-content-header.block--page-title-block .page-title,
        .block--layout-builder.block--page-title-block .page-title {
            background-color: ${darkColors.background2};
            color: ${darkColors.text2};
        }

    /* Channel Label */
        .channel__label a {
            color: ${darkColors.text1};
        }

    /* Byline */
        .byline__author-name a {
            color: ${darkColors.text4};
        }

    /* Breadcrumbs */
        .simple-breadcrumb li a,
        .simple-breadcrumb li:after {
            color: ${darkColors.text3};
        }
        .simple-breadcrumb li {
            color: ${darkColors.text4};
        }

    /* Teaser */
        .teaser__headline a {
            color: ${darkColors.text2};
        }
        .teaser__content {
            color: ${darkColors.background2}
        }
        .teaser__authored span {
            color: ${darkColors.text3};
        }

    /* Share links */
        .fa-twitter,
        .fa-facebook-f,
        .share_text {
            color: ${darkColors.text2};
        }

    /* Support links */
        .field--name-body td,
        .field--name-body td a,
        .field--name-body td a i {
            color: ${darkColors.text1} !important;
        }

        .field__item a {
            color: ${darkColors.text1};
        }
        .field .field--name-type-comment {
            background-color: ${darkColors.background2} !important;
        }
        span.field--name-title {
            color: ${darkColors.text2};
        }

    /* Video tag list */
        .field__label {
            color: ${darkColors.text4};
        }

    /* Login & user section */
        label {
            color: ${darkColors.text4};
        }
        .description {
            color: ${darkColors.text3};
        }
        .button {
            background-color: ${darkColors.button};
            color: ${darkColors.text2};
            border: none;
        }

        /* Tabs menu */
            ul.tabs.primary>li a {
                background-color: ${darkColors.background1};
                color: ${darkColors.text1};
            }
            ul.tabs.primary>li a:hover {
                color: ${darkColors.text2};
            }
            ul.tabs.primary>li a.is-active {
                background-color: ${darkColors.background2};
                color: ${darkColors.text2};
                border: 1px solid ${darkColors.border1};
            }
            ul.tabs.primary>li a:hover {
                color: ${darkColors.background1};
                background-color: ${darkColors.text2};
            }

        /* View tab */
            .user__info-wrapper {
                background-color: ${darkColors.background2};
            }

        /* Edit tab */
            .horizontal-tabs ul.horizontal-tabs-list {
                border-bottom: 1px solid ${darkColors.text4};
            }
            .horizontal-tabs ul.horizontal-tabs-list .horizontal-tab-button.selected a {
                color: ${darkColors.text1};
                border-bottom: 6px solid ${darkColors.text1};
            }
            .horizontal-tabs ul.horizontal-tabs-list .horizontal-tab-button.selected a:hover {
                color: ${darkColors.text2};
                border-bottom: 6px solid ${darkColors.text2};
            }
            .horizontal-tabs ul.horizontal-tabs-list .horizontal-tab-button a:hover {
                color: ${darkColors.text2};
                border-bottom: 1px solid ${darkColors.text2};
            }
            .password-strength__title,
            .password-confirm {
                color: ${darkColors.text1};
                border-bottom: 6px solid ${darkColors.text1};
            }


    /* Article header*/
        .article-header__content {
            background-color: ${darkColors.background2};
        }


    /* Comment Section */
        .field--name-field-comment {
            background-color: ${darkColors.background1};
        }
        .field--name-field-comment h2.title {
            color: ${darkColors.text2};
        }
        .comment-content-wrapper .content {
            color: ${darkColors.text2}
        }
        .comment-user-name a,
        .comment__links li {
            color: ${darkColors.text4};
        }
        footer.comment-user-info {
            border-left: 3px solid ${darkColors.text4};
        }
        .comment-date {
            color: ${darkColors.text3}
        }
        .comment__links a {
            color: ${darkColors.text1};
        }

    /* Pager */
        ul.pager__items li.is-active, 
        ul.pager__items li.is-active a {
            color: ${darkColors.text2};
            background-color: ${darkColors.background2};
        }
        ul.pager__items li {
            
        }
        ul.pager__items li a {
            color: ${darkColors.text1};
            background-color: ${darkColors.background1};
            border: 1px solid ${darkColors.text1};
        }
        ul.pager__items li:hover,
        ul.pager__items li a:hover {
            color: ${darkColors.background2};
            background-color: ${darkColors.text2};
        }


    /* Footer */
        .footer-wrapper {
            background-color: ${darkColors.background1};
        }
        .footer-bottom-wrapper p,
        .footer-bottom-wrapper .menu .menu-item a {
            color: ${darkColors.text3};
        }
        .field--name-body p {
            color: ${darkColors.text1};
        }

        /* Tag list*/
            .tag-list a {
                background-color: ${darkColors.background2};
                color: ${darkColors.text2};
            }
            .tag-list a:hover {
                color: ${darkColors.text1};
            }

            /* Scroll to top*/
            .scroll-to-top-button {
                border: 1px solid ${darkColors.text1};
            }

`;


// General functions to get and set cookies
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return undefined;
    }

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }


function checkCookieAgree() {
    // Check if user has agreed to cookies, if the user has agreed create a cookie for the theme
    if(getCookie('cookie-agreed') == undefined) {
        console.log('not agreed yet');
    } else if (getCookie('cookie-agreed') == 0) {
        console.log('disagreed');
    } else {
        let darkmodeValue;
        if (darkmode === true) {
            darkmodeValue = 1;
        } else {
            darkmodeValue = 0
        }
        if (getCookie('suzyTheme') == undefined) {
            console.log('suzytheme cookie');
            setCookie('suzyTheme', darkmodeValue.toString, 14);
        }
    }

}

function setCookieFromDarkmode() {
    if (getCookie('suzyTheme') != undefined) {
        if (darkmode === true) {
            setCookie('suzyTheme', 1, 14);
        } else {
            setCookie('suzyTheme', 0, 14);
        }
    }

}

function setDarkModeFromCookie() {
    // If themeCookie exists set the darkmode to the cookie value and renew the cookie
    if (getCookie('suzyTheme') != undefined) {
        if (getCookie('suzyTheme') == '1') {
            darkmode = true;
            document.getElementById('themeStyles').innerHTML = darkStyles;
            console.log('changed to dark theme');
            setCookie('suzyTheme', 1, 14);
        } else {
            darkmode = false;
            setCookieFromDarkmode();
            document.getElementById('themeStyles').innerHTML = '';
            console.log('set to light theme');
            setCookie('suzyTheme', 0, 14);
        }
    }
}



function createStyleSheet() {
    // Create stylesheet for the theme if it does not exist
    if (document.getElementById('themeStyles') == undefined) {
        let themeStyles = document.createElement('style');
        themeStyles.id = 'themeStyles';
        document.head.appendChild(themeStyles);
    }
    
}

function createToggleButton() {
    if (document.getElementById('themeToggleButton') == undefined) {
        // create button
        let themeToggleButton = document.createElement('button');
        themeToggleButton.classList = ['header__toggleable-button'];
        themeToggleButton.id = 'themeToggleButton';

        // create font-awesome icon inside of button
        let icon = document.createElement('i');
        if (darkmode === true) {
            icon.classList = 'fas fa-sun';
        } else {
            icon.classList = 'fas fa-moon';
        }

        // add icon to button
        themeToggleButton.appendChild(icon);

        // add onclick function to change theme to button
        themeToggleButton.onclick = function() {
            if (darkmode === true) {
                icon.classList = 'fas fa-moon';
                darkmode = false;
                setCookieFromDarkmode();
                document.getElementById('themeStyles').innerHTML = '';
                console.log('changed to light theme');
            } else {
                icon.classList = 'fas fa-sun';
                darkmode = true;
                setCookieFromDarkmode();
                document.getElementById('themeStyles').innerHTML = darkStyles;
                console.log('changed to dark theme');
            }
        }
        
        // add button to document
        let rightNavMenu = document.getElementsByClassName('header')[0].getElementsByClassName('header__main_right')[0].getElementsByClassName('d-flex')[0];

        rightNavMenu.insertBefore(themeToggleButton, rightNavMenu.childNodes[0]);
    }
}


checkCookieAgree();
createStyleSheet();
setDarkModeFromCookie();
createToggleButton();