var courses =[
    {
        id:1,
        name:'JS',
        coin:150,
        isFinish:false
    },
    {
        id:2,
        name:'HTML',
        coin:450,
        isFinish:false
    },
    {
        id:3,
        name:'CSS',
        coin:270,
        isFinish:false
    },
    {
        id:4,
        name:'Node JS',
        coin:320,
        isFinish:true
    },
    {
        id:5,
        name:'CSS',
        coin:170,
        isFinish:false
    },
]

Array.prototype.every2=function(callback){
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result=callback(this[index],index,this)
            if(!result){
                return false
            }
        }
    }
    return true;
}
var result=courses.every(function(element,index,array){
    return element.isFinish;
})
console.log(result);