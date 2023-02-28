var checkLeapYear = function (leapYear){
    if (typeof leapYear != 'number' || leapYear== undefined||leapYear==null||isNaN(leapYear)) {
        console.log(`${leapYear} is not a leap year,please provide valid data`);

        
    }
     else if (leapYear % 100 == 0 && leapYear % 400==0 || leapYear %100!=0 && leapYear%4==0) {
        console.log(`${leapYear} is leap year`);
     } else {
        console.log(`${leapYear} is not leap year`);
        
        
    }
}
CheckLeap (2020);
CheckLeap (1999);
CheckLeap (1600);
CheckLeap (2022);
CheckLeap (1945);
CheckLeap (null);
CheckLeap ("Twenty Twenty");
CheckLeap (undefined);
CheckLeap (NaN);
CheckLeap (1750);



