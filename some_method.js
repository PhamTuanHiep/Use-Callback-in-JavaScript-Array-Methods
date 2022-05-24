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
Array.prototype.some2=function(callback){
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result=callback(this[index],index,this)
            if(result){
                return true;
            }
        }
    }
    return false
}
// Bài toán tìm kiếm xem đã có học viên nào hoàn thành khoá học chưa ?
var result=courses.some2(function(element,index,array){
    return element.isFinish;
})
console.log(result)