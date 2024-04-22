import React, { useState, useEffect } from "react";
import woman from "../public/woman-8490191_1280-removebg-preview 1 (1).png"
import imageinsidecard from "../public/c382fe5109bc1f9c3db19d47e295a8ac-removebg-preview 1.png"
import lovegift from "../public/Objects.png"


function Partherosect() {
    const [words] = useState([
        'Happy Anniversary to our 5 years of friendship. I hope you love what i got for. I will also be expecting mine from you.'
        ]);
        const [part, setPart] = useState('');
        const [i, setI] = useState(0);
        const [offset, setOffset] = useState(0);
        const [forwards, setForwards] = useState(true);
        const [skipCount, setSkipCount] = useState(0);
        const [speed] = useState(70);

        useEffect(() => {
            const wordflick = setInterval(() => {
              if (forwards) {
                if (offset >= words[i].length) {
                  setSkipCount(prevSkipCount => prevSkipCount + 1);
                  if (skipCount === 15) {
                    setForwards(false);
                    setSkipCount(0);
                  }
                }
              } else {
                if (offset === 0) {
                  setForwards(true);
                  setI(prevI => (prevI + 1) % words.length);
                  setOffset(0);
                }
              }
              const currentPart = words[i].substr(0, offset);
              if (skipCount === 0) {
                if (forwards) {
                  setOffset(prevOffset => prevOffset + 1);
                } else {
                  setOffset(prevOffset => prevOffset - 1);
                }
              }
              setPart(currentPart);
            }, speed);
            
            return () => clearInterval(wordflick);
          }, [i, forwards, offset, skipCount, words]);

          return (
    <div className='bordercurve womanside bg-[#FFF2D9] ml-7 max-sm:ml-0 drop-shadow-xl'>
              <img src={woman} alt='woman' className=' w-80 ml-16 max-sm:w-72 max-sm:ml-20  ' style={{height: "560px"}}/>


              <div class="  w-44 bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 relative right-20 bottom-96 max-sm:right-0" style={{zIndex: "999"}}>
               <p className=' pb-1 text-xs flex'>
                <img src={lovegift} alt='' className='w-3 h-3 mt-0.5'/>
                A gift has been sent to you</p>
              </div>

              <div class="  w-40 max-sm:w-32 max-sm:h-36 bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 relative bottom-72 right-20 max-sm:bottom-40 max-sm:right-0 max-sm:left-3" style={{zIndex: "999"}}>
                <img src={imageinsidecard} alt="" className=' rounded-full ml-10 max-sm:ml-9 max-sm:w-12 relative bottom-8' style={{zIndex: "999"}}/>
                <p className='px-3 pb-1 text-xs max-sm:px-0'>{part}</p>

              </div>



          </div>
  )
}

export default Partherosect