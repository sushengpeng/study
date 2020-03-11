let Person = {}
Object.defineProperty(Person,'name',{
    // name:'Jack',
    writable:true,
    value:'Jack',
    configurable:true,//能不能配置，是否可删除
    enumerable:true,//是否能出现在对象的遍历中
})
Person.name = 'Rose'
console.log(Person.name)
