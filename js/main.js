$(".panel__questionWrapper").click(function(){
  $(this).closest(".panel__wrapper").toggleClass("active");
  $(this).siblings(".panel__arrow").toggleClass("rotated");
  $(this).children(".panel__counter").toggleClass("red");
  $(this).parents().eq(3).removeClass("hovered");
});

$(".panel__arrow").click(function(){
  $(this).closest(".panel__wrapper").toggleClass("active");
  $(this).toggleClass("rotated");
  $(this).siblings(".panel__questionWrapper").children(".panel__counter").toggleClass("red");
});

$(".panel__questionWrapper").mouseenter(function(){
  if ($(this).parents(".panel__wrapper").hasClass("active")){
    return;
  } else{
    $(this).parents().eq(3).addClass("hovered");
  }
});

$(".panel__questionWrapper").mouseleave(function(){
  $(this).parents().eq(3).removeClass("hovered");
});



