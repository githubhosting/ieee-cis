import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper'

import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import img1 from '@/images/heroimages/1 (1).jpg'
import img2 from '@/images/heroimages/1 (2).jpg'
import img3 from '@/images/heroimages/1 (3).jpg'
import img4 from '@/images/heroimages/1 (4).jpg'
import img5 from '@/images/heroimages/1 (5).jpg'
import img6 from '@/images/heroimages/1 (6).jpg'
import img7 from '@/images/heroimages/1 (7).jpg'
import img8 from '@/images/heroimages/1 (8).jpg'

const images = [
  {
    link: img4,
  },
  {
    link: img2,
  },
  {
    link: img3,
  },

  {
    link: img5,
  },
  {
    link: img6,
  },
  {
    link: img7,
  },
  {
    link: img8,
  },
  {
    link: img1,
  },
]

export function Hero() {
  return (
    <>
      <section className=" text-gray-800">
        <div className="container mx-auto flex flex-col items-center px-4 pt-10 text-center  md:px-10 md:pt-10 lg:px-10 ">
          <h1 className="text-3xl font-bold leading-none sm:text-5xl">
            IEEE{' '}
            <span className="text-sky-600">
              Computational Intelligence Society
            </span>
            <br></br>
            Bangalore Chapter
          </h1>
        </div>
      </section>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        loop={true}
        autoHeight={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              className="lg:h-128 h-96 w-full object-fill"
              src={image.link}
              alt={index}
              width={1745}
              height={636}
              objectFit="cover"
              border-radius="10px"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Container className="pt-5 pb-16 text-center lg:pt-8">
        <p class="mx-auto mt-5 max-w-3xl rounded-xl bg-slate-100 p-2 text-xl tracking-tight text-slate-800">
          <b>IEEE Computational Intelligence Society (CIS)</b> is a professional
          society of IEEE focusing on “the theory, design, application, and
          development of biologically and linguistically motivated computational
          paradigms emphasising neural networks, connectionist systems, genetic
          algorithms, evolutionary programming, fuzzy systems, and hybrid
          intelligent systems in which these paradigms are contained.
        </p>
        <div className="flex flex-wrap justify-center">
          <ButtonLink
            href="https://cis.ieee.org/"
            className="text-md mt-10 rounded bg-sky-600 px-4 py-1.5 font-semibold text-gray-50"
          >
            Know more
          </ButtonLink>
        </div>
      </Container>
    </>
  )
}
