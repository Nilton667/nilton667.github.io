"use client"
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useSwiper } from "swiper/react";

export default function WorkSliderBtns(
    {containerStyle, btnStyle, iconsStyle}
    :{containerStyle: string, btnStyle: string, iconsStyle: string}) {
    const swiper = useSwiper();
    return (
        <div className={containerStyle}>
            <button className={btnStyle} onClick={()=>swiper.slidePrev()}>
                <PiCaretLeftBold className={iconsStyle}/>
            </button>
            <button className={btnStyle} onClick={()=>swiper.slideNext()}>
                <PiCaretRightBold className={iconsStyle}/>
            </button>
        </div>
    );
}
