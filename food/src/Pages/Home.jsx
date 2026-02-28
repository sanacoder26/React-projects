import React from 'react';
import { FaCircleArrowDown } from "react-icons/fa6";
import { useState, useEffect } from 'react';
import ThemeBtn from '../utils/ThemeBtn';
import Hero from '../components/Hero';
import Offers from '../components/Offers';
import Fooditems from '../components/Fooditems';
import About from '../components/About';
import BestDishes from '../components/BestDishes';
import SpecialFood from '../components/SpecialFood';
import FoodMenu from '../components/FoodMenu';
import Footer from '../utils/Footer';
import '../App.css'



function Home(props) {
       
        // useEffect(() => {
        //     const cursorDot = document.querySelector("[data-cursor-dot]");
        //     const cursorOutline = document.querySelector("[data-cursor-outline]");
        //     const hoverTargets = document.querySelectorAll(".cursor-hover"); 
        
        //     let mouseX = 0;
        //     let mouseY = 0;
        //     let outlineX = 0;
        //     let outlineY = 0;
        //     const delay = 0.4;
        
            
        //     window.addEventListener("mousemove", (e) => {
        //       mouseX = e.clientX;
        //       mouseY = e.clientY;
        
        //       cursorDot.style.left = `${mouseX}px`;
        //       cursorDot.style.top = `${mouseY}px`;
        //     });
        
        //     const animateOutline = () => {
        //       outlineX += (mouseX - outlineX) * delay;
        //       outlineY += (mouseY - outlineY) * delay;
        
        //       cursorOutline.style.left = `${outlineX}px`;
        //       cursorOutline.style.top = `${outlineY}px`;
        
        //       requestAnimationFrame(animateOutline);
        //     };
        //     animateOutline();
        
            
        //     hoverTargets.forEach((target) => {
        //       target.addEventListener("mouseenter", () => {
        //         cursorDot.classList.add("hoveres");
        //         cursorOutline.classList.add("hovered");
        //       });
        
        //       target.addEventListener("mouseleave", () => {
        //         cursorDot.classList.remove("hoveres");
        //         cursorOutline.classList.remove("hovered");
        //       });
        //     });
        
            
        //     return () => {
        //       hoverTargets.forEach((target) => {
        //         target.removeEventListener("mouseenter", () => {});
        //         target.removeEventListener("mouseleave", () => {});
        //       });
        //       window.removeEventListener("mousemove", () => {});
        //     };
        //   }, []);


    return (

        <div>
           
            <div className=' '>
                <Hero />
            </div>
            <div>
                <Fooditems/>
            </div>

            <div>
             <Offers/>
            </div>
            <div>
                <About/>
            </div>
            <div>
               <BestDishes/>
            </div>
            <div>
               <SpecialFood/>
            </div>
            <div>
                <FoodMenu/>
            </div>
            <div>
                <Footer/>
            </div>


        </div>


    );
}

export default Home;