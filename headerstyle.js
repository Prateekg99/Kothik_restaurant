
var text=gsap.timeline()
text.from("#maintext1 h1",{
    opacity:0,
    x:-200,
    duration:1,
    delay:1

})
text.from("#maintext1 p",{
    opacity:0,
    x:200,
    duration:1  
})

gsap.from("#b1",{
    opacity:0,
    x:-70,
    duration:1,  
    delay:2
})
gsap.from("#b2",{
    opacity:0,
    x:70,
    duration:1,
    delay:2
})