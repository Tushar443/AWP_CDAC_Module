function getDayName(dateString) {
    let dayName;
    // dateString=toString(dateString);
    dayName=new Date(dateString).getDay(); 
    let arr=['Sunday','Monday','Tuesday','Thursday','Friday','Saturday'];
    return arr[dayName];
}

let date = getDayName(new Date("10-03-1995"));
console.log(date);