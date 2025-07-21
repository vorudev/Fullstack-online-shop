'use client';
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useRef, useState } from 'react';
import SwiperCore from 'swiper';
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
interface ImageSliderProps { 
    image: string;
    bgImage: string;
    alt: string;
} 
export default function ImageSlider ({ image, bgImage, alt }: ImageSliderProps)  {
   const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperCore | null>(null);
    const slideColors = ['#231916', '#ffffff']; // color for each slide
  const [textColor, setTextColor] = useState<string>(slideColors[0]);
    const handleSlideChange = () => {
    const index = swiperRef.current?.realIndex || 0;
    setTextColor(slideColors[index]);
  };
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,   // Animate only the first time it appears
    threshold: 0.2,      // Percentage of element visibility to trigger
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return ( 
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 0, filter: "blur(10px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } },
      }}
      
    >
  <div className="relative w-full aspect-[1/1.15] lg:aspect-[1/1.15] mx-auto bg-[rgb(228,224,212)]">
      <Swiper
        modules={[Navigation, Pagination, ]}
        loop
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
  
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // подтягиваем рефы до инициализации
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="h-full"
      >
        <SwiperSlide>
          <img
            src={image}
            alt={alt}
            className="w-full h-full  aspect-[1/1.15] lg:aspect-[1/1.35] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={bgImage}
            alt={alt}
            className="w-full h-full  aspect-[1/1.15] lg:aspect-[1/1.35] object-cover"
          />
        </SwiperSlide>
      </Swiper>

      {/* Наши кнопки поверх слайдера */}
      <button
        ref={prevRef}
        style={{ borderColor: textColor }}
        className={`absolute bottom-[24px] z-10 left-6 transform 
                   w-[24px] h-[24px]  border rounded-full shadow-md
                   flex items-center justify-center
                     transition`}
      >
        {/* Вставь свою SVG-иконку */}
      <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill={textColor }><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
      </button>
      <button
        ref={nextRef}
        style={{ borderColor: textColor }}
        className="absolute bottom-[24px] z-10 left-14 transform 
                   w-[24px] h-[24px] border e rounded-full shadow-md
                   flex items-center justify-center
                     transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill={textColor }><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
      </button>
    </div>
    </motion.div>
  )
}