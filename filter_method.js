
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
Array.prototype.filter2=function(callback){
    var output=[]
    for(var index in this){
        //vì filter2 được khởi tạo nên nó được hiển thị trong phần element của prototype
        //Và nó có kiểu là function nên dùng hasOwnProperty để loại nó ra khỏi
        if(this.hasOwnProperty(index)){
            var result=callback(this[index],index,this);
            if(result){
                output.push(this[index]);
            }
        }
    }
    return output
}
var filterCourses= courses.filter2(function(element,index,array){
    // console.log(index,element,array)
    return element.coin >200;
})
console.log(filterCourses);