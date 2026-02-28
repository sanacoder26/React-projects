import { gsap } from "gsap";

import React from 'react';

function WelLoader(props) {
    const banner1 = document.getElementById("banner1")
    const banner2 = document.getElementById("banner2")
    const banner3 = document.getElementById("banner3")
    const banner4 = document.getElementById("banner4")
    if(banner1 && banner2 && banner3 && banner4){

        const tl = gsap.timeline()
        tl.set([banner1,banner2],{
            xPercent :0,

        }).to([banner1,banner2],{
            xPercent:-200,
            opacity:0.2,
            stagger:0.1
        })
       
        tl.set([banner3,banner4],{
            xPercent :0,

        }).to([,banner3,banner4],{
            xPercent:200,
            opacity:0.1,
            stagger:0.1
        })
    }
    return (
        <div>
            
        </div>
    );
}

export default WelLoader;