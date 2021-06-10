import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

// import {numberThing} from "./demo-this"

import { logoTL } from "./logo"



gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

mainTL.add(logoTL);