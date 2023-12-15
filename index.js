var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor:true,
  loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    grabCursor:true,
  loop:true,
 
  autoplay:{
    delay:4500,
    disableOnInteraction:false,
  },
  breakpoints:{
    0:{
      slidesPerView:1,
    },
    600:{
      slidesPerView:2,
    }
  }
  
  });



  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is <= 576px
      480: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  // const arr=[
  //   {
  //     img1:'C:\\Users\\lenovo\\Desktop\\html css js project\\fitness website\\images\\man.jpg',
  //     i:"C:\\Users\\lenovo\\Desktop\\html css js project\\fitness website\\images\\muscle.jpg",
  //     title:"body building",
  //     desc:"Lorem ipsum dolor sit amet consectetur."
  //   },
  //   {
      
  //     i:"C:\\Users\\lenovo\\Desktop\\html css js project\\fitness website\\images\\muscle.jpg",
  //     title:"Gym for men",
  //     desc:"Lorem ipsum dolor sit amet consectetur.",
  //     img1:'C:\\Users\\lenovo\\Desktop\\html css js project\\fitness website\\images\\man2.jpg'
  //   },
  //   {
  //     img1:'C:\\Users\\lenovo\\Desktop\\html css js project\\fitness website\\images\\man3.jpg',
  //     i:"C:\\Users\\lenovo\\Desktop\\html css js project\\fitness website\\images\\muscle.jpg",
  //     title:"Gym for woman",
  //     desc:"Lorem ipsum dolor sit amet consectetur."
  //   },
  // ];


  // var parent=document.getElementById('row1');

  // for(let i=0;i<arr.length;i++){
  //   var img=document.createElement("img");
    
  //   var font=document.createElement("img");
  //   // font.classList.add('spimg');
  //   var title=document.createElement("h3");
  //   var para=document.createElement("p");
  //   img.src=arr[i].img1;
  //   font.src=arr[i].i;
  //   title.innerHTML=arr[i].title;
  //   para.innerHTML=arr[i].desc;
  //   parent.appendChild(img);
  //   parent.appendChild(font);
  //   parent.appendChild(title);
  //   parent.appendChild(para);
  // }






  // var traine1=document.getElementById('traine1');
  // traine1.addEventListener("mouseenter",function(){
  //   document.getElementById('coni').style.marginBottom='5rem';
  // })
//   var traine1 = document.getElementById('traine1');
// traine1.addEventListener("mouseenter", function(){
    
//       document.getElementById('hide').style.display= 'block';
   
// });