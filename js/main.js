$(".panel__questionWrapper").click(function(){
  $(this).closest(".panel__wrapper").toggleClass("active");
  $(this).siblings(".panel__arrow").toggleClass("rotated");
  $(this).children(".panel__counter").toggleClass("red");
});

$(".panel__arrow").click(function(){
  $(this).closest(".panel__wrapper").toggleClass("active");
  $(this).toggleClass("rotated");
  $(this).siblings(".panel__questionWrapper").children(".panel__counter").toggleClass("red");
});

$(".panel__questionWrapper").hover(function(){
  if ($(this).not(".active")){
      $(this).closest(".panel__wrapper").toggleClass("hovered");
  }
});
