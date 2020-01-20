let Person = {}
Object.defineProperty(Person,'name',{
    // name:'Jack',
    writable:true,
    value:'Jack',
    get:function(){
        return Object.name
    },
    set:function(val){
        Object.name = val
    }
})
Person.name = 'Rose'
console.log(Person.name)
