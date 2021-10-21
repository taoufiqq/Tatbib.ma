
// $(document).ready(function(){
//     var slide =  $('.card')
//     $(slide).first().addClass('active-img');
//     $(slide).last().addClass('small').addClass('prev');
//     $(slide).last().prev('.card').addClass('smaller prevSmall');
//     $(slide).first().next('.card').addClass('small next');
//     $(slide).first().next('.card').next('.card').addClass('smaller nextSmall');
   
   
 
//  $('.next-btn').click(function(e){
//      e.preventDefault();
//          var Active = $('.active-img'), Prev = $('.prev'), Next = $('.next'), SmallPrev = $('.prevSmall'), SmallNext = $('.nextSmall');
   
//      $(Active).addClass('small prev ').removeClass('active-img');
//      $(Next).addClass('active-img').removeClass('small next');
//      $(Prev).addClass('smaller prevSmall ').removeClass('small prev ');
//      $(SmallNext).addClass('small next').removeClass('smaller nextSmall ');
//      $(SmallPrev).removeClass('prevSmall').addClass('nextSmall');
    
//  });
//  $('.prev-btn').click(function(e){
//      e.preventDefault();
//      var Active = $('.active-img'), Prev = $('.prev'), Next = $('.next'), SmallPrev = $('.prevSmall'), SmallNext = $('.nextSmall');
   
//      $(Active).removeClass('active-img').addClass('small next');
//      $(Prev).removeClass('small prev').addClass('active-img');
//      $(Next).removeClass('small next').addClass('smaller nextSmall');
//      $(SmallPrev).addClass('small prev').removeClass('smaller prevSmall');
//      $(SmallNext).removeClass('nextSmall').addClass('prevSmall');
     
//  });
//  });
//  const loadMyScript = () => window.addEventListener('load', () => loadCall());

// export default loadMyScript;