define("a",["b"],function(b){
    function f2(){
        console.log("a_f2");
        b();
    }

    return f2;
})