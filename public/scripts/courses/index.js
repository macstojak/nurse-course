/* global $ */
$(document).ready(function(){
     
         $("ul.course-list li").click(function(){
        if($("li.active-course").length<6){
        $(this).toggleClass("active-course");
        $("li.active-course span").append("<i class=\"fas fa-trash-alt right-x\"></i>");
     
        }else{
            alert("Nie możesz wybrać więcej szkoleń!")
        }
    });
          
        
})
