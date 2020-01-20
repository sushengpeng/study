require.config({
    baseUrl:"js/module",
    paths:{
        "tab":"tab",
        "jquery":"../jquery.1.11.3.min"
    }
})
define(['tab','jquery'], function(tab,$) {
    tab($('.list'),$('.content'))
});
