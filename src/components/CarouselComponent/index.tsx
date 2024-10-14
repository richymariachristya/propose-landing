import { useState } from "react";
import Image from "next/image";

interface CarouselImageProp {
  CarouselImage: string[]
}

const CarouselComponent = ({CarouselImage}:CarouselImageProp) => {

  const [CurrentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index:number):void => {
    setCurrentIndex(index);
  }
  return (
    <div className="relative mx-auto overflow-hidden container py-6">
      <h5 className="text-grey-300 font-farro font-bold">Why choose this course?</h5>
      <div className="flex transition-transform duration-500 ease-in-out mt-4"
      style={{ transform: `translateX(-${CurrentIndex * 100}%)` }}>
        {CarouselImage.map((image, index)=>(
          <div key={index} className="w-full flex-shrink-0">
            <Image
              src={image}
              alt={`Slide ${index}`}
              width={1200}
              height={250}
              className="w-full object-cover h-[250px]" />
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-2 mt-4">
        {CarouselImage.map((_,index)=>(
            <button key={index} 
            onClick={()=>goToSlide(index)}
            className={`h-2 w-2 rounded-full ${CurrentIndex === index ? "bg-primary-400" : "bg-primary-200"}`}></button>
        ))}
      </div>

    </div>
  )
}

export default CarouselComponent