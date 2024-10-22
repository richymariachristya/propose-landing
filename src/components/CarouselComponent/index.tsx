import { useState } from "react"
import Image from "next/image"

interface CarouselImageProp {
    CarouselImage: string[]
}

const CarouselComponent = ({ CarouselImage }: CarouselImageProp) => {
    const [CurrentIndex, setCurrentIndex] = useState(0)

    const goToPrevSlide = (): void => {
        setCurrentIndex(prevIndex => (prevIndex - 1) % CarouselImage.length)
    }
    const goToNextSlide = (): void => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % CarouselImage.length)
    }
    const goToSlide = (index: number): void => {
        setCurrentIndex(index)
    }
    return (
        <div className="relative mx-auto overflow-hidden container py-6">
            <h5 className="text-grey-300 font-farro font-bold px-[16px] md:px-[0px]">
                Why choose this course?
            </h5>
            <div
                className="flex transition-transform duration-500 ease-in-out mt-4"
                style={{ transform: `translateX(-${CurrentIndex * 100}%)` }}>
                {CarouselImage.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        <Image
                            src={image}
                            alt={`Slide ${index}`}
                            width={1200}
                            height={250}
                            className="w-full object-cover h-[250px]"
                        />
                    </div>
                ))}
            </div>
            {
                <button
                    className="absolute left-0 top-1/2"
                    onClick={goToPrevSlide}>
                    Prev
                </button>
            }
            {
                <button
                    className="absolute right-0 top-1/2"
                    onClick={goToNextSlide}>
                    Next
                </button>
            }
            <div className="flex justify-center space-x-2 mt-4">
                {CarouselImage.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-[8px] w-[8px] rounded-full ${
                            CurrentIndex === index
                                ? "bg-primary-400"
                                : "bg-primary-200"
                        }`}></button>
                ))}
            </div>
        </div>
    )
}

export default CarouselComponent
