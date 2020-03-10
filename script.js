var marks=0;
var total_marks=10;
var percentage=marks/total_marks*100;
 //select box option value
 var select_box_option=$('#MCQ-options').val();
 var A="A";
 var B="B";
 var C="C";
 var D="D";
//AS THE PAGE STARTS WITH QUESTION 1
var question_counter=0;
//refresh page
function refresh1(){
    window.location.replace("index.html");
}
//upcoming option selected
function upcoming()
{
    alert("this website is still in development more papers will be added later,sorry for your inconvinience -Riyan Dharne");
}
//declaring important variables


$(document).ready(function(){
  
    //--------------------------------------------------------------------------------
    //Introduction
    //start the test
  $('#start_test_bttn').click(function(){
   //incrementing question counter
   question_counter=question_counter+1;
    //hiding this button
   $('#start_test_bttn').hide();
 
   //elements for question 1
   $('#question-change-image').attr('src','Q1.png');
   $('#MCQ-options').show();
   $('#mcq1').show();
   $('#option-header').show();
   $('#table_of_contents').show();
   
});
//question 1
$('#mcq1').click(function(){
    if(select_box_option==null){
        alert("choose only A,B,C or D");
    }
if(select_box_option==A && question_counter==1){
    marks=marks+1;
}
//hiding elements and preparing for question 2
$('#mcq1').hide();
$('#mcq2').show();
//changing image for question 2
$('#question-change-image').attr('src','Q2.png');
question_counter=question_counter+1;
//test
select_box_option=$('#MCQ-options').val();
});

//question 2
$('#mcq2').click(function(){
    if(select_box_option==""){
        alert("choose only A,B,C or D");
    }
if(select_box_option==B && question_counter==2){
    marks=marks+1;
}
$('#mcq2').hide();
$('#mcq3').show();
$('#question-change-image').attr('src','Q3.png');
question_counter=question_counter+1;
});

//question  3
$('#mcq3').click(function(){
    if(select_box_option==""){
        alert("choose only A,B,C or D");
    }
if(select_box_option==B && question_counter==3){
    marks=marks+1;
}
$('#mcq3').hide();
$('#mcq4').show();
$('#question-change-image').attr('src','Q4.png');
question_counter=question_counter+1;
});

//question 4
$('#mcq4').click(function(){
    if(select_box_option==""){
        alert("choose only A,B,C or D");
    }
if(select_box_option==C && question_counter==4){
    marks=marks+1;
}
$('#mcq4').hide();
$('#mcq5').show();
$('#question-change-image').attr('src','Q5.png');
question_counter=question_counter+1;
});

//question 5
$('#mcq5').click(function(){
    if(select_box_option==""){
        alert("choose only A,B,C or D");
    }
if(select_box_option==B && question_counter==5){
    marks=marks+1;
}
$('#mcq5').hide();
$('#mcq6').show();
$('#question-change-image').attr('src','Q6.png');
question_counter=question_counter+1;
});

//question 6
$('#mcq6').click(function(){
    if(select_box_option==""){
        alert("choose only A,B,C or D");
    }
if(select_box_option==B && question_counter==6){
    marks=marks+1;
}
$('#mcq6').hide();
$('#mcq7').show();
$('#question-change-image').attr('src','Q7.png');
question_counter=question_counter+1;
});

//question 7

$('#mcq7').click(function(){
    if(select_box_option==""){
        alert("choose only A,B,C or D");
    }
if(select_box_option==B && question_counter==7){
    marks=marks+1;
}
$('#mcq7').hide();
$('#mcq8').show();
$('#question-change-image').attr('src','Q8.png');
question_counter=question_counter+1;
});

//question 8
$('#mcq8').click(function(){
    if(select_box_option==""){
        alert("choose only A,B,C or D");
    }
if(select_box_option==C && question_counter==8){
    marks=marks+1;
}
$('#mcq8').hide();
$('#mcq9').show();
$('#question-change-image').attr('src','Q9.png');
question_counter=question_counter+1;
});

//question 9
$('#mcq9').click(function(){
    if(select_box_option==""){
        alert("choose only A,B,C or D");
    }
if(select_box_option==A && question_counter==9){
    marks=marks+1;
}
$('#mcq9').hide();
$('#mcq10').show();
$('#question-change-image').attr('src','Q10.png');
question_counter=question_counter+1;
});

//last question question 10
$('#mcq10').click(function(){
    if(select_box_option==""){
        alert("choose only A,B,C or D");
    }
if(select_box_option==C && question_counter==10){
    marks=marks+1;
}
//hiding elements
$('#mcq10').hide();
$('#MCQ-options').hide();
$('#submit-mcq-option').hide();
$('#option-header').hide();
$('#table_of_contents').hide();
question_counter=question_counter+1;
if(question_counter>10){
//end text image 
$('#question-change-image').hide();
$('#exams_over').show();
$('#hidden-header').show();//see results

}
});
//results
$('#hidden-header').click(function(){
    $('#hidden-header').hide();
    $('#exams_over').hide();
    $('#hidden-results').show();
document.getElementById('MYmarks').innerHTML=marks;
document.getElementById('total_marks').innerHTML=total_marks;
document.getElementById('percentage').innerHTML=marks/total_marks*100;
});

});
