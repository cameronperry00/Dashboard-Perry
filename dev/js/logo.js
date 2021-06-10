import { gsap } from "gsap";

export let logoTL = gsap.timeline();

gsap.set("#background",{transformOrigin:"center"});


logoTL.to("#background",{duration:1,ease: "power4.out"})