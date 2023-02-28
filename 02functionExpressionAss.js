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
checkLeapYear (2020);
checkLeapYear (1999);
checkLeapYear (1600);
checkLeapYear (2022);
checkLeapYear (1945);
checkLeapYear (null);
checkLeapYear ("Twenty Twenty");
checkLeapYear (undefined);
checkLeapYear (NaN);7;
checkLeapYear (1750);



