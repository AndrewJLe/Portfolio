"use client";
import React from 'react';
import { useInView } from 'react-intersection-observer'
import BoidsPreview from '../assets/BoidsPreview.gif'
import ProjectZPreview from '../assets/ProjectZPreview2.gif'
import GraphSketchpadPreview from '../assets/GraphSketchpadPreview.gif'
import Button from './Button';

const Projects: React.FC = () => {
    const { ref: titleRef, inView: titleVisibility } = useInView();
    const { ref: boidRef, inView: boidVisibility } = useInView();
    const { ref: projectZRef, inView: projectZVisibility } = useInView();
    const { ref: graphRef, inView: graphVisibility } = useInView();

    const projects = [
        {
            title: 'Boids',
            summary: 'Boids is an artificial life program that simulates the behaviour of birds, fish, and swarms. The boids follow a set of rules that demonstrate complex emergence behaviour when interacting with other boids within their field of view.',
            liveLink: 'https://andrewjle.github.io/BoidProject/',
            sourceCodeLink: 'https://github.com/AndrewJLe/BoidProject',
            preview: BoidsPreview,
            ref: boidRef,
            view: boidVisibility
        },
        {
            title: 'Project Z',
            summary: 'Project Z is a human and zombie interaction simulator. In this simulator, white dots represent humans while the green dots represent zombies. Humans and zombies both have variable speeds, vision, and movement patterns.',
            liveLink: 'https://github.com/AHV-Studios/project-z-new',
            sourceCodeLink: 'https://github.com/AHV-Studios/project-z-new',
            preview: ProjectZPreview,
            ref: projectZRef,
            view: projectZVisibility
        },
        {
            title: 'Graph Sketchpad',
            summary: 'Graph Sketchpad is a web application designed for sketching graph vertices and edges.',
            liveLink: 'https://andrewjle.github.io/Graph-Sketchpad/',
            sourceCodeLink: 'https://github.com/AndrewJLe/Graph-Sketchpad',
            preview: GraphSketchpadPreview,
            ref: graphRef,
            view: graphVisibility
        },
    ];

    return (
        <div className='bg-white flex flex-col items-center font-redHatDisplay'>

            <h1 id="Projects" ref={titleRef} className={`my-24 text-5xl font-semibold text-center text-black opacity-0 ${titleVisibility ? 'animate-appear opacity-100' : 'animate-disappear'}`}>Projects</h1>

            {projects.map((project, index) => (
                <div key={index} ref={project.ref} className={`max-w-4xl px-40 mx-20 mb-40 text-black opacity-0 ${project.view ? 'animate-appear opacity-100' : 'animate-disappear'}`}>
                    <h2 className="pb-12 text-4xl text-center">{project.title}</h2>
                    <div className="h-full w-full border-solid border-2 shadow-xl border-black object-fill rounded-xl hover:scale-110 duration-500"><img src={project.preview.src} className='h-full w-full rounded-xl hover:cursor-pointer'></img></div>

                    <p className=" pt-12 text-xl mb-4 font-redHatDisplay">{project.summary}</p>
                    <div className="flex space-x-8 justify-center">
                        <Button text="See Live" link={project.liveLink} />
                        <Button text="Source Code" link={project.sourceCodeLink} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
