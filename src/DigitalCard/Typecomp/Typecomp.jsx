import React from 'react'
import Typewriter from "typewriter-effect";

const Typecomp = () => {
  return (
    <>

      <Typewriter
        options={{
          autoStart: true,
          loop: true,
          delay: 30,
          strings: [
            "CLICK ON THE ICONS TO CONTACT WITH ME !"
          ],
        }} />

    </>
  )
}

export default Typecomp;
