var $ = Zepto;

function addListener() {
    // $('#cb').tab(function()e {
    //     e.preventDefault();
    //     showWebPage();
    // });
    $('#cb').bind('click', function(e) {
        e.preventDefault();
        showWebPage(this.href);
    });
}

function showWebPage(href) {
    var options = {
        showLocationBar: false
    };
    if (window.plugins && window.plugins.childBrowser) {
        window.plugins.childBrowser.showWebPage(href, options);
    }

}

// document.addEventListener('DOMContentLoaded', function() {
//     alert('DOMContentLoaded');
//     addListener();
// });
document.addEventListener('deviceready', function() {
    //alert('deviceready');

    if (window.ChildBrowser && ChildBrowser.install) {
       // alert('install child browser');
    }

    addListener();
    // 
}, false);
