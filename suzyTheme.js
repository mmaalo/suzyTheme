// GLOBAL DARKMODE VARIABLE //
// GLOBAL DARKMODE VARIABLE //
// GLOBAL DARKMODE VARIABLE //

let darkmode;

// GENERIC HELPER FUNCTIONS //
// GENERIC HELPER FUNCTIONS //
// GENERIC HELPER FUNCTIONS //

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

// Generic function to create a html elemet from a string
    function htmlToElement(html) {
        var template = document.createElement('template');
        html = html.trim(); // Never return a text node of whitespace as the result
        template.innerHTML = html;
        return template.content.firstChild;
    }

    
// COOKIE FUNCTIONS //
// COOKIE FUNCTIONS //
// COOKIE FUNCTIONS //

// Check if user has agreed to cookies, if the user has agreed create a cookie for the theme
    function checkCookieAgree() {
        if(getCookie('cookie-agreed') == undefined) {
            return false;
        } else if (getCookie('cookie-agreed') == 0) {
            return false;
        } else {
            return true;
        }
    }

// Set the cookie to the current value of darkmode
    function setCookieFromDarkmode() {
        if (checkCookieAgree() == true) {
            if (darkmode === true) {
                setCookie('suzyTheme', 1, 14);
            } else {
                setCookie('suzyTheme', 0, 14);
            }
        }
    }

// If themeCookie exists set the darkmode to the cookie value and renew the cookie
    function setDarkModeFromCookie() {
        if (getCookie('suzyTheme') != undefined) {
            if (getCookie('suzyTheme') == '1') {
                darkmode = true;
                setThemeToDark(darkmode);
                console.log('set to dark theme from cookie');
                setCookie('suzyTheme', 1, 14);
            } else {
                darkmode = false;
                setCookieFromDarkmode();
                setThemeToDark(darkmode);
                console.log('set to light theme from cookie');
                setCookie('suzyTheme', 0, 14);
            }
        }
    }

// TOGGLE THEMES //
// TOGGLE THEMES //
// TOGGLE THEMES //


// Set media attribute for activating/dectivating the darkmode
    function setThemeToDark(trueOrFalse) {
        if (trueOrFalse === true) {
            document.getElementById('themeStyles').removeAttribute('media');
        } else {
            document.getElementById('themeStyles').media = 'max-width: 1px';
        }
    }

// Set toggle button icon to moon or sun
    function setThemeButtonIconToMoon(trueOrFalse) {
        if (trueOrFalse === true) {
            document.getElementById('themeToggleButtonIcon').classList = 'fas fa-sun';
        } else {
            document.getElementById('themeToggleButtonIcon').classList = 'fas fa-moon';
        }

    }

// Toggle button is clicked
    function themeToggleClick() {
        if (darkmode === true) {
            darkmode = false;
            setCookieFromDarkmode();
            setThemeToDark(darkmode);
            setThemeButtonIconToMoon(darkmode);
            console.log('switched to light theme');
        } else {
            darkmode = true;
            setCookieFromDarkmode();
            setThemeToDark(darkmode);
            setThemeButtonIconToMoon(darkmode);
            console.log('switched to dark theme');

        }

    }

// CREATE STYLESHEET & TOGGLE BUTTON //
// CREATE STYLESHEET & TOGGLE BUTTON //
// CREATE STYLESHEET & TOGGLE BUTTON //
    
// Create stylesheet for the theme if it does not exist
    function createStyleSheet() {
        let stylesheet = `<style id="themeStyles" media="max-width: 1px">body{background-color:#1a1a1a}h1,h2,h3,h4,h5,h6{color:#f5f5f5}a,div,span,td{color:#959595}li a{color:#7d8285}.site-logo{filter:invert(100%)}.header .header__container-wrapper--header__top{background:#303030;border-bottom:solid 1px #555}.header .js-sticky-header-element{background:#303030}.header .js-sticky-header-placeholder{background:#1a1a1a}.header .header__social-menu i,.header .header__user-nav i{color:#f5f5f5}.header__toggleable-account-menu ul.menu li:first-child{border-top:4px solid #8ab8cf}.header__toggleable-account-menu ul.menu li{background-color:#303030}.header__toggleable-account-menu ul.menu li a{color:#f5f5f5}.tb-megamenu-column-inner,.tb-megamenu-item a{background-color:#303030;color:#959595}.tb-megamenu .tb-megamenu-item.level-1 a{background-color:#303030;color:#f5f5f5}.tb-megamenu .tb-megamenu-item.level-1.active-trail>a{background-color:#303030;color:#f5f5f5}.tb-megamenu .nav>.dropdown>.dropdown-toggle .caret{color:#f5f5f5}#offcanvas-sidebar,#offcanvas-sidebar .menu .menu-item{background-color:#1a1a1a;color:#f5f5f5;-webkit-box-shadow:none;box-shadow:none}#offcanvas-sidebar .menu .menu-item:hover{background-color:#f5f5f5;color:#303030}#offcanvas-sidebar ul.menu a{border-bottom:1px solid #959595}#offcanvas-sidebar ul.menu a:focus,#offcanvas-sidebar ul.menu a:hover{color:#303030}#offcanvas-sidebar ul.menu li.menu-item--expanded ul a{color:#f5f5f5;border-bottom:1px solid #555}#offcanvas-sidebar ul.menu li.menu-item--expanded ul a:hover{color:#303030}.block--layout-builder.block--page-title-block .page-title,.block--region-content-header.block--page-title-block .page-title{background-color:#1a1a1a;color:#f5f5f5}.channel__label a{color:#959595}.byline__author-name a{color:#8ab8cf}.simple-breadcrumb li a,.simple-breadcrumb li:after{color:#7d8285}.simple-breadcrumb li{color:#8ab8cf}.teaser__headline a{color:#f5f5f5}.teaser__content{color:#1a1a1a}.teaser__authored span{color:#7d8285}.fa-facebook-f,.fa-twitter,.share_text{color:#f5f5f5}.field--name-body td,.field--name-body td a,.field--name-body td a i{color:#959595!important}.field__item a{color:#959595}.field .field--name-type-comment{background-color:#1a1a1a!important}span.field--name-title{color:#f5f5f5}.field__label{color:#8ab8cf}label{color:#8ab8cf}.description{color:#7d8285}.button{background-color:#f44336;color:#f5f5f5;border:none}ul.tabs.primary>li a{background-color:#303030;color:#959595}ul.tabs.primary>li a:hover{color:#f5f5f5}ul.tabs.primary>li a.is-active{background-color:#1a1a1a;color:#f5f5f5;border:1px solid #555}ul.tabs.primary>li a:hover{color:#303030;background-color:#f5f5f5}.user__info-wrapper{background-color:#1a1a1a}.horizontal-tabs ul.horizontal-tabs-list{border-bottom:1px solid #8ab8cf}.horizontal-tabs ul.horizontal-tabs-list .horizontal-tab-button.selected a{color:#959595;border-bottom:6px solid #959595}.horizontal-tabs ul.horizontal-tabs-list .horizontal-tab-button.selected a:hover{color:#f5f5f5;border-bottom:6px solid #f5f5f5}.horizontal-tabs ul.horizontal-tabs-list .horizontal-tab-button a:hover{color:#f5f5f5;border-bottom:1px solid #f5f5f5}.password-confirm,.password-strength__title{color:#959595;border-bottom:6px solid #959595}.article-header__content{background-color:#1a1a1a}.field--name-field-comment{background-color:#303030}.field--name-field-comment h2.title{color:#f5f5f5}.comment-content-wrapper .content{color:#f5f5f5}.comment-user-name a,.comment__links li{color:#8ab8cf}footer.comment-user-info{border-left:3px solid #8ab8cf}.comment-date{color:#7d8285}.comment__links a{color:#959595}ul.pager__items li.is-active,ul.pager__items li.is-active a{color:#f5f5f5;background-color:#1a1a1a}ul.pager__items li a{color:#959595;background-color:#303030;border:1px solid #959595}ul.pager__items li a:hover,ul.pager__items li:hover{color:#1a1a1a;background-color:#f5f5f5}.footer-wrapper{background-color:#303030}.footer-bottom-wrapper .menu .menu-item a,.footer-bottom-wrapper p{color:#7d8285}.field--name-body p{color:#959595}.tag-list a{background-color:#1a1a1a;color:#f5f5f5}.tag-list a:hover{color:#959595}.scroll-to-top-button{border:1px solid #959595}</style>`;

        if (document.getElementById('themeStyles') == undefined) {
            document.head.appendChild(htmlToElement(stylesheet));
        }
    }


// Create the dark/light theme toggle button
    function createToggleButton() {
        if (document.getElementById('themeToggleButton') == undefined) {
            let themeToggleButton;
        
            if (darkmode === true) {
                themeToggleButton = `<button id="themeToggleButton" class="header__toggleable-button"><i id="themeToggleButtonIcon" onclick="themeToggleClick()" class="fas fa-sun"></i></button>`;
            } else {
                themeToggleButton = `<button id="themeToggleButton" class="header__toggleable-button"><i id="themeToggleButtonIcon" onclick="themeToggleClick()" class="fas fa-moon"></i></button>`;
            }
    
            // add button to document
            let rightNavMenu = document.getElementsByClassName('header')[0].getElementsByClassName('header__main_right')[0].getElementsByClassName('d-flex')[0];

            rightNavMenu.insertBefore(htmlToElement(themeToggleButton), rightNavMenu.childNodes[0]);
        }
    }

// RUN AT PAGE LOAD //
// RUN AT PAGE LOAD //
// RUN AT PAGE LOAD //

createStyleSheet();
setDarkModeFromCookie();
createToggleButton();