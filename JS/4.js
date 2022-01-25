var year = prompt("Enter any Year");
var counter = 20;
var result=true;
LeapYear(year,counter,result);


function LeapYear(year, counter, result) {
    while (counter >= 0) {

        if ((year % 4 === 0) && (year % 100 !== 0)||(year % 400 === 0))
        {
            result = true;
            document.write(year,"\n", "<br>"); 
            year++;
            counter--;
        } 
        else
        {
        year++;
        }    
    }
}