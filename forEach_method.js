
var courses =[
    {
        id:1,
        name:'JS',
        coin:150
    },
    {
        id:2,
        name:'HTML',
        coin:450
    },
    {
        id:3,
        name:'CSS',
        coin:270
    },
    {
        id:4,
        name:'Node JS',
        coin:320
    },
    {
        id:5,
        name:'CSS',
        coin:170
    },
]
// Ở đây định nghĩa là forEach2 
Array.prototype.forEach2=function(callback){
    for(var index in this){
        if(this.hasOwnProperty(index))
        callback(this[index],index,this)
    }
}
courses_str.forEach2(function(element,index,initialArray){
    console.log(element,index,initialArray)
})