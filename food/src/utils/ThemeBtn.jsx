import React from 'react';
import './Btn.css'
import { FaCircleArrowDown } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function ThemeBtn({title}) {
    return (
        <div>
          <button className='custom-btn btn-orange'>
           <span>
          {title}  <FaArrowRight class="inline-block theme-arr" />
          </span>
          </button>
           
        </div>
    );
}

export default ThemeBtn;