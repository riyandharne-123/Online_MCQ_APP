//declaring important variables
var marks=0;
var total_marks=10;
var percentage=marks/total_marks*100;

var question_counter=1;
$(document).ready(function(){
   //select box option value
    var select_box_option=$('#MCQ-options').val();
    //submit button click
$('#submit-mcq-option').click(function(){
    //with every click the question changes as well as the question counter


//logic for getting correct mcq answers
if(question_counter==1 && select_box_option=="A")
{
    marks=marks+1;
    alert('YO'+marks);
}
else{
    marks=0;
}

//now changing the image after the question 1 and its answer has been verified
//incrementing question counter for Q2
question_counter+=1;
$('#question-change-image').attr('src','Q2.png');
});


//CHANGING THE BUTTONS ID
$("#submit-mcq-option").attr('id', '#submit-mcq-option2'); 
$('#submit-mcq-option2').click(function(){
//logic for question 2
if(question_counter==2 && select_box_option=="B")
{
    marks=marks+1;
   
}
else{
    marks=0;
  
}
//
});
});
