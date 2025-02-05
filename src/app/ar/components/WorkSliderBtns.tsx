"use client"

import React from 'react'

import { useSwiper } from 'swiper/react'
import { PiCaretLeftBold, PiCaretRightBold} from 'react-icons/pi'

const WorkSliderBtns = ({ containerStyles, btnStyles, iconStyles }: {
    containerStyles : string, btnStyles: string, iconStyles: string
}) => {
    const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button onClick={() => swiper.slidePrev()}
        className={btnStyles}>
            <PiCaretRightBold className={iconStyles} />
        </button>

        <button onClick={() => swiper.slideNext()}
         className={btnStyles}>
            <PiCaretLeftBold className={iconStyles} />
        </button>

        

      
    </div>
  )
}

export default WorkSliderBtns
