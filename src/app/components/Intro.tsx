'use client';
import React from 'react';
import { useInView } from 'react-intersection-observer'
import Button from './Button';

interface IntroProps {
    greeting: string;
    myName: string;
    subtitle: string;
}

const Intro: React.FC<IntroProps> = ({ greeting, myName, subtitle }) => {
    // observer stuff
    const { ref: greetingRef, inView: greetingVisibility } = useInView();
    const { ref: subtitleRef, inView: subtitleVisibility } = useInView();
    const { ref: navRef, inView: navVisibility } = useInView();

    return (
        <div className="flex justify-center h-screen w-screen font-light">
            <div className="w-full h-full flex flex-col justify-center items-center bg-[url(./assets/layered-peaks-haikei.svg)] bg-no-repeat bg-cover text-black">
                <div ref={greetingRef} className={`flex flex-row justify-center opacity-0 ${greetingVisibility ? 'animate-appear opacity-100' : 'animate-disappear'}`}>
                    <h1 className="text-5xl font-redHatDisplay pr-2">{greeting}</h1>
                    <h1 className="text-5xl font-redHatDisplay animate-text bg-gradient-to-r from-highlight via-secondary to to-highlight bg-clip-text text-transparent">{myName}</h1>
                </div>
                <p ref={subtitleRef} className={`text-2xl opacity-0 ${subtitleVisibility ? 'animate-appear opacity-100' : 'animate-disappear'}`}>{subtitle}</p>

                <ul ref={navRef} className={`p-5 flex space-x-8 opacity-0 ${navVisibility ? 'animate-appear opacity-100' : 'animate-disappear'}`}>
                    <li>
                        <Button text="Skills" link='#Skills' />
                    </li>

                    <li>
                        <Button text="Projects" link='#Projects' />
                    </li>

                    <li>
                        <Button text="About" link='#About' />
                    </li>

                    <li>
                        <Button text="Contact" link='#Contact' />
                    </li>
                </ul>

            </div>
        </div>
    );
};


export default Intro;
