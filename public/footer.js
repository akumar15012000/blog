

 var x = $(".footer").offset();
 x.top=x.top+50;
// alert("Top: " + Number(x.top) + "   " +window.innerHeight);

function foo()
{
    if (x.top<window.innerHeight)
   {
    $(".footer").addClass("fixed");
    
    }
    else
    {
        $(".footer").removeClass("fixed"); 
    }
  
   
   
   
}

 

