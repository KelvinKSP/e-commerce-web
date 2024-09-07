'use client'
import React from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./styles.css"
import Image from 'next/image';
import img1 from '../../images/img-1.jpeg'
import img2 from '../../images/img-2.jpeg'
import img3 from '../../images/img-3.jpeg'

export default function Carousel() {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout: any
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
        <>
            <div ref={sliderRef} className="keen-slider">
                <Image
                    width={0}
                    height={1000}
                    src={img1}
                    alt='slider-01'
                    className="keen-slider__slide number-slide1"
                />
                <Image
                    width={0}
                    height={1000}
                    src={img2}
                    alt='slider-02'
                    className="keen-slider__slide number-slide2"
                />
                <Image
                    width={0}
                    height={1000}
                    src={img3}
                    alt='slider-03'
                    className="keen-slider__slide number-slide3"
                />
            </div>
        </>
    )
}