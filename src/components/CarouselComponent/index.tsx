// components/CardCarousel.tsx
import React, { useState, useEffect } from 'react';

interface Card {
  id: number;
  title: string;
  content: string;
}

interface CardCarouselProps {
  cards: Card[];
}

const CardCarouselComponent: React.FC<CardCarouselProps> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  const updateCardsPerView = () => {
    if (window.innerWidth >= 1024) {
      setCardsPerView(3);
    } else if (window.innerWidth >= 768) {
      setCardsPerView(2);
    } else {
      setCardsPerView(1);
    }
  };

  useEffect(() => {
    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    
    return () => {
      window.removeEventListener('resize', updateCardsPerView);
    };
  }, []);

  const nextSlide = () => {
    if (currentIndex < cards.length - cardsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const getVisibleCards = () => {
    return cards.slice(currentIndex, currentIndex + cardsPerView);
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= cards.length - cardsPerView;

  return (
    <div className="relative w-full max-w-screen-lg mx-auto">
      <div className="flex overflow-hidden">
        {getVisibleCards().map((card) => (
          <div key={card.id} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-2">
            <div className="border rounded-lg p-4 bg-white shadow">
              <h3 className="text-lg font-bold">{card.title}</h3>
              <p>{card.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 left-0">
        <button
          onClick={prevSlide}
          disabled={isPrevDisabled}
          className={`p-2 rounded-l ${isPrevDisabled ? 'bg-gray-400' : 'bg-gray-800 text-white'}`}
        >
          Prev
        </button>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
        <button
          onClick={nextSlide}
          disabled={isNextDisabled}
          className={`p-2 rounded-r ${isNextDisabled ? 'bg-gray-400' : 'bg-gray-800 text-white'}`}
        >
          Next
        </button>
      </div>
      <div className="flex justify-center space-x-2 mt-2">
        {Array.from({ length: Math.ceil(cards.length / cardsPerView) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * cardsPerView)}
            className={`h-2 w-2 rounded-full ${Math.floor(currentIndex / cardsPerView) === index ? 'bg-blue-600' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CardCarouselComponent;
