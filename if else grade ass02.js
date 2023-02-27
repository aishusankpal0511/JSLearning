function tcsInterviewEligibility(gradScore,hscScore,sscScore,candidateName){
    if (gradScore>=70 || hscScore>=80 || sscScore>=90) {
        console.log(`Congrates ${candidateName} you are eligible for TCS interview`);
        
    } else {
        console.log(`Else unfortunately you are not eligible for interview`);
        
    }
    

}
tcsInterviewEligibility(80,86,90,"Aishwarya");
tcsInterviewEligibility(70,65,55,"Komal");
tcsInterviewEligibility(60,79,88,"Advait");





