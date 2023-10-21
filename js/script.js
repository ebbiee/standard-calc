$(document).ready(function(){
  $(".number").click(function(){
    let number = $(this).text();
    let operator = "";
    let currentInputtedNumber = $(".display").val();
    $(".display").val(currentInputtedNumber + number);
    $(".operator").click(function(){
      operator = $(this).text()
      
    })
  })
})