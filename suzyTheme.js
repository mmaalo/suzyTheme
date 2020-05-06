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

    .site-logo {
        filter: ${darkColors.invert};
    }

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
   
    .tb-megamenu-item a,
    .tb-megamenu-column-inner {
        background-color: ${darkColors.background1};
        color: ${darkColors.text1};
    }
    .tb-megamenu .tb-megamenu-item.level-1 a {
        background-color: ${darkColors.background1};
        color: ${darkColors.text2};
    }

    #offcanvas-sidebar,
    #offcanvas-sidebar .menu .menu-item{
        background-color: ${darkColors.background2};
        color: ${darkColors.text2};
        box-shadow: none;
        webkit-box-shadow: none;
    }

    .block--region-content-header.block--page-title-block .page-title, .block--layout-builder.block--page-title-block .page-title {
        background-color: ${darkColors.background2};
        color: ${darkColors.text2};
    }
    .channel__label a {
        color: ${darkColors.text1};
    }
    .byline__author-name a {
        color: ${darkColors.text4};
    }
    .teaser__headline a {
        color: ${darkColors.text2};
    }
    .teaser__content {
        color: ${darkColors.background2}
    }
    .fa-twitter .fa-facebook {
        color: ${darkColors.text2};
    }
    .share_text {
        color: ${darkColors.text2};
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
    .teaser__authored span {
        color: ${darkColors.text3};
    }
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
    .user__info-wrapper {
        background-color: ${darkColors.background2};
    }
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

    .password-strength__title,
    .password-confirm,
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
    }

    .article-header__content {
        background-color: ${darkColors.background2};
    }
    .comment-user-name a {
        color: ${darkColors.text4};
    }
    .comment-user-info {
        border-left: 3px solid ${darkColors.text3};
    }
    .comment-date {
        color: ${darkColors.text3}
    }
    .comment-content-wrapper .content {
        color: ${darkColors.text2}
    }
    .comment__links li {
        color: ${darkColors.text4};
    }
    .comment__links a {
        color: ${darkColors.text1};
    }
    .footer-wrapper {
        background-color: ${darkColors.background1};
    }
    .footer-wrapper p {
        color: ${darkColors.text3};
    }
    .tag-list a {
        background-color: ${darkColors.background2};
        color: ${darkColors.text2};
    }
    .tag-list a:hover {
        color: ${darkColors.text1};
    }
    .footer-bottom-wrapper p,
    .footer-bottom-wrapper .menu .menu-item a {
        color: ${darkColors.text3};
    }
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

function setDarkModeFromCookie() {
    // If themeCookie exists set the darkmode to the cookie value and renew the cookie
    if (getCookie('suzyTheme') != undefined) {
        if (getCookie('suzyTheme') == '1') {
            darkmode = true;
            document.getElementById('themeStyles').innerHTML = darkStyles;
            setColors(darkmode);
            console.log('changed to dark theme');
            setCookie('suzyTheme', 1, 14);
        } else {
            darkmode = false;
            setCookieFromDarkmode();
            document.getElementById('themeStyles').innerHTML = '';
            setColors(darkmode);
            setCookie('suzyTheme', 0, 14);
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
                setColors(darkmode);
                console.log('changed to light theme');
            } else {
                icon.classList = 'fas fa-sun';
                darkmode = true;
                setCookieFromDarkmode();
                document.getElementById('themeStyles').innerHTML = darkStyles;
                setColors(darkmode);
                console.log('changed to dark theme');
            }
        }
        
        // add button to document
        let rightNavMenu = document.getElementsByClassName('header')[0]
                                   .getElementsByClassName('header__main_right')[0]
                                   .getElementsByClassName('d-flex')[0];
        rightNavMenu.insertBefore(themeToggleButton, rightNavMenu.childNodes[0]);
    }
}

let elements = {
    byline: document.getElementsByClassName('byline')[0],
    video: document.getElementsByTagName('video'),
    supportBox: document.getElementsByClassName('field--type-text-with-summary')[0],
    supportBoxATags: undefined, 
    commentField: document.getElementsByClassName('field--name-field-comment'),
    commentFieldTitle: undefined,
    pagerItem: document.getElementsByClassName('pager__item'),
    pagerItemActive: undefined,
    footerWrapper: document.getElementsByClassName('footer-wrapper')
}

if (elements.commentField != undefined && elements.commentField.length > 0) {
    elements.commentFieldTitle = document.getElementsByClassName('field--name-field-comment')[0].getElementsByClassName('title')[0];
}

if (elements.supportBox != undefined && elements.commentField.length > 0) {
    elements.supportBoxATags = document.getElementsByClassName('field--type-text-with-summary')[0].getElementsByTagName('a');
}

if (elements.pagerItem[0] != undefined && elements.pagerItem.length > 0) {
    elements.pagerItemActive = elements.pagerItem[0].getElementsByClassName('is-active')[0];
}

function setColors(darkBoolean) {

    if (elements.byline != undefined && elements.byline.children.length > 0) {
        if (darkBoolean === true) {
            elements.byline.children[1].style.color = darkColors.text3;
        } else {
            elements.byline.children[1].style.color = '#90a4ae';
        }
    }

    if (elements.video != undefined && elements.video.length > 0) {
        if (darkBoolean === true) {
            elements.supportBox.children[0].children[0].children[1].children[0].style.color = darkColors.text1;
            for (let i = 0; i < elements.supportBoxATags.length; i++) {
                elements.supportBoxATags[i].style.color = darkColors.text1;
            }
        } else {
            elements.supportBox.children[0].children[0].children[1].children[0].style.color = 'black';
            for (let i = 0; i < elements.supportBoxATags.length; i++) {
                elements.supportBoxATags[i].style.color = 'black';
            }
        }
    }

    if (elements.commentField != undefined && elements.commentField.length > 0) {
        if (darkBoolean === true) {
            elements.commentField[0].style.backgroundColor = darkColors.background1;
            elements.commentFieldTitle.style.color = darkColors.text2;            
        } else {
            elements.commentField[0].style.backgroundColor = '#f2f4f5';            
            elements.commentFieldTitle.style.color = 'black';            
        }
    }

    if (elements.pagerItem != undefined && elements.pagerItem.length > 0) {
        if (darkBoolean === true) {
            for (let i = 0; i < elements.pagerItem.length; i++) {
                elements.pagerItem[i].children[0].style.color = darkColors.text1;
            }
            if (elements.pagerItemActive != undefined) {
                elements.pagerItemActive.style.backgroundColor = darkColors.background2;
            }
        } else {
            for (let i = 0; i < elements.pagerItem.length; i++) {
                elements.pagerItem[i].children[0].style.color = '#607d8b';
            }
            if (elements.pagerItemActive != undefined) {
                elements.pagerItemActive.style.backgroundColor = '#90a4ae';
                elements.pagerItemActive.style.color = '#fff';
            }
        }
    }

    
    if (elements.footerWrapper != undefined && elements.footerWrapper.length > 0) {
        if (darkBoolean === true) {
            elements.footerWrapper[0].style.backgroundColor = darkColors.background1;
        } else {
            elements.footerWrapper[0].style.backgroundColor = '#eceff1';
        }
    }

}
createStyleSheet();
createToggleButton();
checkCookieAgree();
setDarkModeFromCookie();




