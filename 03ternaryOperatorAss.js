console.log("<<<<<<<<<<<<<<<<<<<<<<<Step1<<<<<<<<<<<<<<<");
function tcsInterviewEligibility(gradScore,hscScore,sscScore,candidateName){
    var result = gradScore >= 70  || hscScore >= 80 || sscScore >= 90  ? `Congrates ${candidateName} you are eligible for TCS interview`: `Else unfortunately you are not eligible for interview`;
        console.log(`${result}`);
}
tcsInterviewEligibility( 80, 86, 90, "Aishwarya");
tcsInterviewEligibility( 70, 65, 55, "Komal");
tcsInterviewEligibility( 60, 79, 88, "Megha");
