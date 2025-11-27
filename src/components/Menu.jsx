import React, { useRef, useState } from 'react'
import { allCocktails } from '../../constants'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



const Menu = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const contentRef = useRef();

    const totalCocktails = allCocktails.length;

    const goToSlide = (index) => {
        const newIndex = (index + totalCocktails) % totalCocktails;

        setCurrentIndex(newIndex)
    }

    const getCocktailAt = (indexOffset) => {
        return allCocktails[(currentIndex + indexOffset + totalCocktails) % totalCocktails]
    }

    const currentCocktail = getCocktailAt(0);

    const prevCocktail = getCocktailAt(-1);
    const nextCocktail = getCocktailAt(1);

    // gsap
    useGSAP(() => {
        // menu
        gsap.fromTo('#title', { opacity: 0 }, { opacity: 1, duration: 1 });
        gsap.fromTo('.cocktail img', { opacity: 0, xPercent: -100 }, { opacity: 1, xPercent: 0, duration: 1, ease: 'power1.inOut' });
        gsap.fromTo('.details h2', { opacity: 0, yPercent: 100 }, { opacity: 100, yPercent: 0, ease: 'power1.inOut'});
        gsap.fromTo('.details p', { opacity: 0, yPercent: 100 }, { opacity: 100, yPercent: 0, ease: 'power1.inOut'});

    }, [currentIndex])


    return (
        <section id="menu" aria-labelledby='menu-heading'>
            {/* leaf */}
            <img id='m-left-leaf' src="/images/slider-left-leaf.png" alt="leaf-left" />
            <img id='m-right-leaf' src="/images/slider-right-leaf.png" alt="leaf-right" />

            <h2 id='menu-heading' className='sr-only'>Cocktail Menu</h2>

            <nav className='cocktail-tabs'>
                {allCocktails.map((cocktail, index) => {
                    const isActive = index === currentIndex;

                    return (
                        <button 
                            key={cocktail.id}
                            onClick={() => goToSlide(index)}
                            className={`${isActive ? "text-white border-white" : "text-white/50 border-white/50"}`}    
                        >
                            {cocktail.name}
                        </button>
                    )
                })}
            </nav>

            <div className='content'>
                <div className='arrows'>
                    {/* left arrow */}
                    <button 
                        onClick={() => goToSlide(currentIndex - 1)} 
                        className='text-left'
                    >
                        <span>{prevCocktail.name}</span><img src="/images/right-arrow.png" alt="right-arrow" />
                    </button>
                    {/* right arrow */}
                    <button 
                        onClick={() => goToSlide(currentIndex + 1)} 
                        className='text-left'
                    >
                        <span>{nextCocktail.name}</span><img src="/images/left-arrow.png" alt="left-arrow" />
                    </button>
                </div>

                <div className='cocktail'>
                    <img 
                        src={currentCocktail.image} 
                        alt="coctail-img" 
                        className='object-contain' 
                    />
                </div>

                <div className='recipe'>
                    <div ref={contentRef} className='info'>
                        <p>Recipe for:</p>
                        <p id="title">{currentCocktail.name}</p>
                    </div>

                    <div className='details'>
                        <h2>{currentCocktail.title}</h2>
                        <p>{currentCocktail.description}</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Menu
