$(document).ready(function () {
  $(".number").click(function () {
     let number = $(this).text();
     let currentInputtedNumber = $(".display").val();
     $(".display").val(currentInputtedNumber + number);
  });
 
  // Display the value of the operator
  $(".operator").click(function () {
     let operator = $(this).text();
     let currentInputtedNumber = $(".display").val();
     $(".display").val(currentInputtedNumber + operator);
  });
  //clear the whole input
  $(".reset").click(function(){
    $(".display").val("");
  })
  //clear the last inputted number
  $(".clear").click(function(){
    let currentInputtedNumber = $(".display").val();
    $(".display").val(currentInputtedNumber.slice(0, -1));
  })
  //display the value of the result
  $("#equalsTo").click(function(){
    try {
      let inputtedNumberAndOperator = $(".display").val();
      let result = eval(inputtedNumberAndOperator);
      $(".display").val(result);
  } catch (error) {
      $(".display").val("Error");
  }
  })
 });