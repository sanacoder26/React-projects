
import WelLoader from "../utils/WelLoader"
import { useState, useEffect } from 'react';

export default function Temlate({children}){
     
            useEffect(() => {
                const cursorDot = document.querySelector("[data-cursor-dot]");
                const cursorOutline = document.querySelector("[data-cursor-outline]");
                const hoverTargets = document.querySelectorAll(".cursor-hover"); 
            
                let mouseX = 0;
                let mouseY = 0;
                let outlineX = 0;
                let outlineY = 0;
                const delay = 0.4;
            
                
                window.addEventListener("mousemove", (e) => {
                  mouseX = e.clientX;
                  mouseY = e.clientY;
            
                  cursorDot.style.left = `${mouseX}px`;
                  cursorDot.style.top = `${mouseY}px`;
                });
            
                const animateOutline = () => {
                  outlineX += (mouseX - outlineX) * delay;
                  outlineY += (mouseY - outlineY) * delay;
            
                  cursorOutline.style.left = `${outlineX}px`;
                  cursorOutline.style.top = `${outlineY}px`;
            
                  requestAnimationFrame(animateOutline);
                };
                animateOutline();
            
                
                hoverTargets.forEach((target) => {
                  target.addEventListener("mouseenter", () => {
                    cursorDot.classList.add("hoveres");
                    cursorOutline.classList.add("hovered");
                  });
            
                  target.addEventListener("mouseleave", () => {
                    cursorDot.classList.remove("hoveres");
                    cursorOutline.classList.remove("hovered");
                  });
                });
            
                
                return () => {
                  hoverTargets.forEach((target) => {
                    target.removeEventListener("mouseenter", () => {});
                    target.removeEventListener("mouseleave", () => {});
                  });
                  window.removeEventListener("mousemove", () => {});
                };
              }, []);
    useEffect(()=>{
        WelLoader()
    },[])
    return(
        <>
        <div className="cursor-dot" data-cursor-dot></div>
            <div className="cursor-outline" data-cursor-outline></div>
        <div className="h-screen">
            <div id="banner1"  className="h-screen bg-black z-10 fixed top-0 left-0 w-1/4"></div>
            <div id="banner2" className="h-screen bg-black z-10 fixed top-0 left-1/4 w-1/4"></div>
            <div id="banner3" className="h-screen bg-black z-10 fixed top-0 left-2/4 w-1/4" ></div>
            <div id="banner4"  className="h-screen bg-black z-10 fixed top-0 left-3/4 w-1/4"></div>
            {children}
        </div>
         </>
    )
}