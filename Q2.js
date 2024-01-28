/*Create complete marksheet using user Input and if else and elseif.*/


var name = prompt("Dear Student Enter Your Name", "Areeb");
var reg = +prompt("Enter your registeration number", "786");
var cls = +prompt("Enter Your Class", "11");

alert("Enter Subject Marks between 0 to 100");
var math = +prompt("Enter Math Marks", "100");
var phys = +prompt("Enter Physics Marks", "100");
var chem = +prompt("Enter Chemistry Marks", "100");
var urdu = +prompt("Enter Urdu Marks", "100");
var eng =  +prompt("Enter English Marks", "100");
alert("Thanks for Submitting Marks");

var marks = math + phys + chem + urdu + eng ;

var perc;

function percentage(marks){
     perc = (marks/500)*100;
}
 percentage(marks);

 function grades(){
    if(perc >= 90 ){
        grade = "A";
        cmnt = "Wonderful Performance";
    }
    
    else if(perc >= 80){
        grade = "A";
        cmnt = "Great Performance";
    }
    
    else if(perc >= 70 ){
        grade = "B+";
        cmnt = "Good Performance ";
    }
    
    else if(perc >= 60){
        grade = "B";
        cmnt = "Average Performance";
    }
    
    else if(perc >= 50 ){
        grade = "C";
        cmnt = "More effort is required";
    }
    
    else if(perc >= 40){
        grade = "D+";
        cmnt = "Great Effort is Required";
    }
    
    else if(perc >= 33 ){
        grade = "D";
        cmnt = "Great Effort with consistency is needed";
    }
    
    else{
        grade = "F"
        cmnt = "Next time try your best";
    }
    
}

grades();


console.log("\n","                                           SM SCIENCE GOVT. SCIENCE COLLEGE");
console.log("\n","                                                  Student Marksheet");

console.log("\n","\n","\n","        Name: ", name,  "                               Reg. no: ", reg, "                      Class: ", cls );


console.log("\n","\n","\n", "        SUBJECTS                                           MARKS  ");

console.log("\n","        MATH                                              ", math  );
console.log("\n","        PHYSISCS                                          ", phys );
console.log("\n","        CHEMISITRY                                        ", chem);
console.log("\n","        URDU                                              ", urdu );
console.log("\n","        ENGLISH                                           ", eng);
console.log("\n","        Total Marks: ", marks, "/ 500" );


console.log("\n","\n","\n", "        Percentage:", perc, "%", "                            Grade:", grade , "                     Remarks:", cmnt);







