////////////////////
//// page slide
///////////////////
  $('.sunslide').animate({left:0});

  ////////////////////
  //// page slide end
  ///////////////////

  ////////////////////
  //// page slid from keybord
  ///////////////////
    $(document).ready(function(){
      $(this).keyup(function(e){
        if(e.which==37){
          $('.backpp').click();
        }
        if(e.which==39){
          $('.nextpp').click();
        }
      });

      // Just to console.log something here...
      $(".backpp").on("click",function(){
        console.log("Left clicked.");
      });
      $(".nextpp").on("click",function(){
        console.log("Right clicked.");
      });
    });

////////////////////
//// page slid from keybord end
///////////////////
