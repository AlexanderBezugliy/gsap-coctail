import React from 'react'
import { navLinks } from '../../constants';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';



const Navbar = () => {

    useGSAP(() => {
        const navTween = gsap.timeline({
            // Триггер прокрутки
            scrollTrigger: {
                trigger: 'nav', // ЗА ЧЕМ СЛЕДИТЬ? За тегом <nav>
                start: 'bottom top', // "начало" и "конец" анимации
            }
        });

        navTween.fromTo("nav", 
            {backgroundColor: 'transparent'}, // ОТКУДА (Начальное состояние)
            {   
                background: '#00000050',    // КУДА (Конечное состояние)
                backdropFilter: 'blur(10px)',
                duration: 1,
                ease: 'power1.inOut'
            }
        )
    })


    return (
        <nav>
            <div>
                <a href="#home" className='flex items-center gap-2'>
                    <img src="/images/logo.png" alt="logo" /><p>Valvet Pour</p>
                </a>

                <ul>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar