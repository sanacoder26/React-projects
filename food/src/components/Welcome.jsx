import React from 'react';
import { useEffect,useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

function Welcome(props) {

    const [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#EB0029");
    useEffect(() => {

       
        const timer = setTimeout(() => {
          setLoading(false);
        }, 7000); 
    
        return () => clearTimeout(timer);
      }, []);
      if (loading) {
        return (
          <div className="flex justify-center items-center h-screen bg-gray-900">
            <div className="h-24 w-24 ">
            <ClipLoader
              color={color}
       size={150}
       
       data-testid="loader"
     />

            </div>
       
          </div>
        );
      }    
    return (
        <div>
            
            
        </div>
    );
}

export default Welcome;