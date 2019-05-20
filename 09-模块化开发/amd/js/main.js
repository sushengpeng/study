// require(["module/a"],function(a){      //如果路径比较长的画，比较麻烦
//     a();
// })


require.config({
    baseUrl:"js/module",      //路径相对于html
    paths:{
        "a":"a",
        "b":"b",
        "jquery":"../jquery.1.11.3.min"
    }
})

require(["a","jquery"],function(a,$){
    console.log($);
    $("#add").click(function(){
        $("ul li").html("li");
    })
    a();
})