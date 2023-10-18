"use client";
import React from 'react';
import { useInView } from 'react-intersection-observer'


interface ContactProps {
    title: string
    email: string
    emailLink: string
    linkedin: string
    linkedinLink: string
}

const Contact: React.FC<ContactProps> = ({ title, email, emailLink, linkedin, linkedinLink }) => {
    // observer stuff
    const { ref: titleRef, inView: titleVisibility } = useInView();
    const { ref: emailRef, inView: emailVisibility } = useInView();
    const { ref: linkedinRef, inView: linkedinVisibility } = useInView();

    return (
        <div className="flex flex-col justify-center h-full w-full font-light">
            <section className="py-24 bg-white font-redHatDisplay">
                <div className="lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 id='Contact' ref={titleRef} className={`pb-12 text-5xl text-center text-black opacity-0 ${titleVisibility ? 'animate-appear opacity-100' : 'animate-disappear'} `}>{title}</h2>
                    <a href={`mailto: ${emailLink}`}><p id='email' ref={emailRef} className={`pb-8 text-xl text-center text-secondary opacity-0 ${emailVisibility ? 'animate-appear opacity-100' : 'animate-disappear'} `}>{email}</p></a>
                    <a href={linkedinLink}><p id='linkedin' ref={linkedinRef} className={`pb-8 text-xl text-center text-secondary opacity-0 ${linkedinVisibility ? 'animate-appear opacity-100' : 'animate-disappear'} `}>{linkedin}</p></a>

                </div>
            </section>

        </div>
    );
};

export default Contact;