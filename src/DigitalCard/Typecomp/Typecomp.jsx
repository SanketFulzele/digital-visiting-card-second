import React from 'react'
import Typewriter from "typewriter-effect";
import "./typeComp.css";

const Typecomp = () => {
  return (
    <div className='typewriter-box'>

      <Typewriter
        options={{
          autoStart: true,
          loop: true,
          delay: 30,
          strings: [
            "CLICK ON THE ICONS TO CONTACT WITH ME !"
          ],
        }} />

    </div>
  )
}

export default Typecomp;
