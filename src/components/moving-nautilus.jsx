'use client';
import  AnimateCC  from "react-adobe-animate";
import Script from "next/script";
import { useState, useEffect } from "react";

const MovingNautilus = ( ) => {
  const [areScriptsLoaded, setAreScriptsLoaded] = useState(false);
  const [isCreateJSLoaded, setIsCreateJSLoaded] = useState(false);
  const [animationObject, setAnimationObject] = useState(null); 

  const onScriptLoad = () => {
    setAreScriptsLoaded(true);
  };

  useEffect(() => {
    if (areScriptsLoaded) {
      console.log(animationObject);
      // You can now interact with the Adobe Animate composition via window.exportRoot
    }
  }, [areScriptsLoaded]);


  return  (
    <div>
      <Script
        src="https://code.createjs.com/1.0.0/createjs.min.js"
        type="text/javascript"
        onReady={() => setIsCreateJSLoaded(true)}
      />
       {isCreateJSLoaded && (
        <>
        <Script
            src="animate/nautilusAnimation.js"
            type="text/javascript"
            onReady={onScriptLoad}
          />
        </>  
        )}
    
  {!areScriptsLoaded && 'Loading scripts...'}
  {areScriptsLoaded && (
    <iframe
      src="animate/nautilusAnimation.html" 
      width="800" 
      height="600" 
    >
      <AnimateCC 
        animationName="458CC700D7C947CD9A3D5F42EBD6A1B0" 
        getAnimationObject={setAnimationObject} 
      />
    </iframe>
  )}
  </div>
);
}
export default MovingNautilus