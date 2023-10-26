$(document).ready(function () {
  $(".number").click(function () {
     let number = $(this).text();
     let currentInputtedNumber = $(".display").val();
     $(".display").val(currentInputtedNumber + number);
  });
 

  // $(".reset").click(function(){
  //   $(".display").val("");
  // })
  // $("#equalsTo").click
 });