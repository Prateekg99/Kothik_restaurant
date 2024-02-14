var img=document.querySelector(".img video");
var images=["img/Dubrovnik - 12866.mp4","img/Night - 4371.mp4","img/video.mp4"]
var num=0;
var bt1=document.querySelector("#bt1");
var bt2=document.querySelector("#bt2");

bt1.addEventListener("click",function(){
    num++;
    if(num>=images.length){
        num=0;
        img.scr=images[num]
    }else{
        img.src=images[num]
    }
});


bt2.addEventListener("click",function(){
    num--;
    if(num<0){
        num=images.length-1;
        img.scr=images[num]
    }else{
        img.src=images[num]
    }
});


var icon = document.querySelector("#nav-bar i")
var sidevar = document.querySelector("#side-var")
var flag = 0;
icon.addEventListener("click", function(){
    if(flag == 0){
        sidevar.style.right = "2%"
        flag = 1;
    }
    else {
        sidevar.style.right = "-30%"
        flag = 0;
    }
    
})
var part1 = document.querySelector(".part1");
var cd = document.querySelector(".checkout-details");
var check = 0;


//===============================
//     animation



gsap.registerPlugin(ScrollTrigger);



gsap.from("#nav-bar #part1 ",{
    x:700,
    y:400,
    scale:9,
    duration:2
})
gsap.from("#nav-bar ",{
    opacity:0,
    y:-20,
    duration:1,
    delay:1
})
gsap.from("#nav-bar a",{
    opacity:0,
    y:30,
    stagger:0.5,
    delay:1
})

gsap.from("#text h1",{
   
    scrollTrigger:{
        trigger:"#text h1",
        scroller:"body",
        start:"top 90%",
        end:"top 30%",
        scrub:1,
    
    },
    opacity:0,
    y:200,
    duration:2,
   
})

gsap.from("#booking-section",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#booking-section",
        start:"top 90%",
        end:"top 30%",
        scrub:2,    
    },
    opacity:0,
    x:200,
    duration:8,
   
})

gsap.from("#image",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#image",
        start:"top 100%",
        end:"top -50%",
        scrub:1,    
    },
    opacity:0,
    x:-200,
    duration:2,
   
})
gsap.from("#contain h2",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#contain h2",
        start:"top 90%",
        end:"top 10%",
        scrub:2,    
    },
    opacity:0,
    x:200,
    duration:1,
   
})
gsap.from("#contain p",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#contain p",
        start:"top 80%",
        end:"top 10%",
        scrub:1,    
    },
    opacity:0,
    x:200,
    duration:1,
   
})
gsap.from(".text-part h1",{
    scrollTrigger:{
        scroller:"body",
        trigger:".text-part h1",
        start:"top 70%",
        end:"top 40%",
        scrub:3,    
    },
    opacity:0,
    scale:1.3,
    duration:1,
   
})

gsap.from(".text-part button",{
    scrollTrigger:{
        scroller:"body",
        trigger:".text-part button",
        start:"top 70%",
        end:"top 30%",
        scrub:3,    
    },
    opacity:0,
    duration:1,
})
gsap.from(".booking-section",{
    scrollTrigger:{
        scroller:"body",
        trigger:".booking-section",
        start:"top 100%",
        end:"top 30%",
        scrub:2   
    },
    opacity:0,
    duration:1,
    x:300
})
gsap.from("#h2",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#h2",
        start:"top 80%",
        end:"top 30%",
        scrub:2   
    },
    opacity:0,
    duration:1,
    x:-300
})
gsap.from("#mid-part span h2",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#mid-part span h2",
        start:"top 70%",
        end:"top 20%",
        scrub:2   
    },
    opacity:0,
    duration:1,
    scale:2
})

gsap.from("#box-1",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#box-1",
        start:"top 100%",
        end:"top 20%",
        scrub:1
    },
    opacity:0,
    duration:1,
    x:-200
})
gsap.from("#h1",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#h1",
        start:"top 80%",
        end:"top 20%",
        scrub:1
    },
    opacity:0,
    duration:1,
    y:-100
})

gsap.from("#sright-1 span h1",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#sright-1 span h1",
        start:"top 80%",
        end:"top 20%",
        scrub:1
    },
    opacity:0,
    duration:1,
    scale:2
})
gsap.from("#sright-1 p",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#sright-1 p",
        start:"top 80%",
        end:"top 20%",
        scrub:1
    },
    opacity:0,
    duration:1,
    x:200
})
gsap.from("#one",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#one",
        start:"top 120%",
        end:"top 20%",
        scrub:1
    },
    opacity:0,
    duration:1,
    x:200
})
gsap.from("#two",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#two",
        start:"top 300%",
        end:"top 20%",
        scrub:1
    },
    opacity:0,
    duration:1,
    y:200,
})
var bc=gsap.timeline()


bc.from("#text1 h3",{
    opacity:0,
    y:-90,
    duration:2,
    scrollTrigger:{
        scroller:"body",
        trigger:"#text1 h3",
        start:"top 90%",
        end:"top 20%",
        scrub:1
    },
})
bc.from("#text1 h1",{
    opacity:0,
    y:100,
    duration:2,
    scrollTrigger:{
        scroller:"body",
        trigger:"#text1 h1",
        start:"top 90%",
        end:"top 20%",
        scrub:1
    },
})
bc.from("#text1 button",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#text1 button",
        start:"top 90%",
        end:"top 20%",
        scrub:1
    },
    opacity:0,
    x:100,
    rotate:360,
    duration:2,
    markers:true    
})
bc.from("#form",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#two",
        start:"top 100%",
        end:"top 30%",
        scrub:1
    },
    opacity:0.1,
    x:-700,
    duration:2
})

bc.form("#text1>button",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#two",
        start:"top 80%",
        end:"top -30%",
        scrub:3
    },
    y:50,
    rotation:90,
    transformOrigin:"left 50%",
    duretion:3,
    
})

gsap.from("#form h1",{
    scrollTrigger:{
        scroller:"body",
        trigger:" #form h1",
        start:"top 80%",
        end:"top 20%",
        scrub:1
    },
    //  body:"#form input",
    //  ease:"back.in",
    //  paused:true,
    opacity:0,
     y:50,
     duration:3
})

gsap.from("#home8>h1",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#home8>h1",
        start:"top 90%",
        end:"top 20%",
        scrub:1
    },
    opacity:0,
    duration:1,
    x:-100,
})
gsap.from("#hotel",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#hotel",
        start:"top 90%",
        end:"top 20%",
        scrub:1
    },
    opacity:0,
    duration:1,
    x:-100,
})




  var btn=document.querySelector("#i button");
  var h1=document.querySelector("#i button h1");
  var flag=0
  btn.addEventListener("click",function(val){
    if(flag==0){
        h1.innerHTML="..."
     val.setTimeout(() => {
        h1.innerHTML="Done"
     }, 2000);
     flag=1
    }else{
        h1.innerHTML="Submit"
        flag=0

    }
  })


// var waypoint = new Waypoint({
//     element: document.getElementById('px-offset-waypoint'),
//     handler: function(direction) {
//       notify('I am 20px from the top of the window')
//     },
//     offset: 20 
//   })

//   $(document).ready(function(){
//     $('#text1').waypoint(function(direction){
//         $('#text1').addClass('animated fadeInUp')
//     },{
//         offset: '0px'
//     })
//   });