function animateValue(id, start, end, duration,cnt,item) {
    var range = end - start;
    var current = start;
    var increment = end > start? cnt : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current >= end) {
            clearInterval(timer);
        }
    obj.innerHTML += item 
    }, stepTime);
}
$("#counter").waypoint(function() {
    if($("#count1").is(":empty")){
        
        animateValue("count1", 0, 19 , 1000,1,"Y/O");
        animateValue("count2",0,6944,4,14,"D");
        animateValue("count3",0,992 ,100,4,"W");
        animateValue("count4",0,228,300,2,"M");
       
    }
    
}, {
    offset: '95%'
});