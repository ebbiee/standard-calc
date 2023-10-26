$(document).ready(function () {
  $(".number").click(function () {
     let number = $(this).text();
     let currentInputtedNumber = $(".display").val();
     $(".display").val(currentInputtedNumber + number);
  });
 
  // Display the value of the operator
  // $(".operator").click(function () {
  //    let operator = $(this).text();
  //    let currentInputtedNumber = $(".display").val();
  //    $(".display").val(currentInputtedNumber + operator);
  // });
  // $(".reset").click(function(){
  //   $(".display").val("");
  // })
  // $("#equalsTo").click
 });