let studentGroup = 'ARTS';

let scienceSubjects = 'Physics, Chemistry, Biology, Technical Drawing';
let socialScienceSubjects = 'Accounting, Commerce, Marketing, Geography';
let artsSubjects = 'Government, Economics, Literature, History';
let generalSubjects = 'English, Mathematics';


if (studentGroup == 'SCIENCE') 
{
console.log(generalSubjects + ' ' + scienceSubjects)  ;
}
else if (studentGroup == 'SOCIAL SCIENCES') 
{
 console.log('English, Mathematics, Accounting, Commerce, Marketing, Geography')   ;
}
else if (studentGroup == 'ARTS') 
{
 console.log('English, Mathematics,  Government, Economics, Literature, History')   ;
}
else
 {
 console.log('English, Mathematics')   ;
}




for (let i = 1; i < 20; i += 7) {
    console.log(i);
}
// Ques 5
console.log(" ASSIGNMENT 5");

let num = 1050;

let counter = 1;

let pwr = 0 ;

while (Math.pow(2, counter) < num ) {
  
pwr  = Math.pow(2, counter) ;

counter += 1;

}

console.log(" The number " + pwr + " is the power of 2 nearest to " + num ) ;


