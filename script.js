gsap.to("#navbar",{
    backgroundColor:"#000",
    duration:0.5,
    height:"80px",
    scrollTrigger:{
        trigger:"#navbar",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1

    }

})


gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{ 
        trigger:"#main",
        scroller:"body",
        //  markers:true,
         start:"top -30%",
         end:"top -80%",
         scrub:1
    }

})


gsap.from("#about-us img",{
    // x:90,
    y:80,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#about-us",
        start:"top 70%",
        end:"top 65%",
        scrub:2
     }

})
gsap.from("#about-us #about-us-in",{
    // x:90,
    y:80,
    opacity:0,
    duration:2,
     scrollTrigger:{
        trigger:"#about-us-in",
        
        start:"top 70%",
        end:"top 65%",
        scrub:2
     }

})

gsap.from(".card",{
    // x:90,
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        start:"top 65%",
        end:"top 60%",
        scrub:2
     }

})


gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        // markers:true,
        start:"top 50%",
        end:"top 45%",
        scrub:3
        }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        // markers:true,
        start:"top 50%",
        end:"top 45%",
        scrub:3
        }
})


gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{ 
        trigger: "#page4",
        scroller: "body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})


var cursr = document.querySelector("#cursor");
var blurcrsr = document.querySelector("#blur-cursor");

document.addEventListener("mousemove",function(vals){
    cursr.style.left= vals.x+30 +"px"
    cursr.style.top= vals.y + "px"
    blurcrsr.style.left= vals.x - 250 + "px"
    blurcrsr.style.top= vals.y - 250 + "px"
})

  
var h4all =document.querySelectorAll("#navbar h4")

h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cursr.style.scale=3;
        cursr.style.border="1px solid #fff";
        cursr.style.backgroundColor="transparent";
    })
})
h4all.forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        cursr.style.scale=1;
        cursr.style.border="0px solid #fff";
        cursr.style.backgroundColor="#95C11E";
     
    })
})





