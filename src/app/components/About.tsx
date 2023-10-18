"use client";
import React from 'react';
import { useInView } from 'react-intersection-observer'


interface AboutProps {
    title: string
    about: string
}

const About: React.FC<AboutProps> = ({ title, about }) => {
    // Observer, used to 'fade-in' objects in view
    const { ref: titleRef, inView: titleVisibility } = useInView();
    const { ref: aboutRef, inView: aboutVisibility } = useInView();

    return (
        <div className="flex flex-col justify-center h-full w-full font-light overflow-visible">
            <div className="py-24 text-center font-redHatDisplay bg-secondary text-white ">
                <h2 id='About' ref={titleRef} className={`pb-12 text-5xl opacity-0 ${titleVisibility ? 'animate-appear opacity-100' : 'animate-disappear'} `}>{title}</h2>
                <p ref={aboutRef} className={`px-40 opacity-0 ${aboutVisibility ? 'animate-appear opacity-100' : 'animate-disappear'}`}>{about}</p>
            </div>
        </div>
    );
};

export default About;