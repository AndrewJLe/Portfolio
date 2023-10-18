"use client";
import { useInView } from 'react-intersection-observer'
import { FaPython, FaHtml5, FaCss3Alt, FaJava, FaGitAlt } from 'react-icons/fa'
import { DiJavascript1 } from 'react-icons/di'
import { SiTypescript, SiReact, SiNodedotjs } from 'react-icons/si'
import { VscGithub } from 'react-icons/vsc'

interface SkillsProps {
    title: string
}

const Skills: React.FC<SkillsProps> = ({ title }) => {
    // observer stuff
    const { ref: titleRef, inView: titleVisibility } = useInView();
    const { ref: pythonIconRef, inView: pythonIconVisibility } = useInView();
    const { ref: javaIconRef, inView: javaIconVisibility } = useInView();
    const { ref: javascriptIconRef, inView: javascriptIconVisibility } = useInView();
    const { ref: typescriptIconRef, inView: typescriptIconVisibility } = useInView();
    const { ref: htmlIconRef, inView: htmlIconVisibility } = useInView();
    const { ref: cssIconRef, inView: cssIconVisibility } = useInView();
    const { ref: reactIconRef, inView: reactIconVisibility } = useInView();
    const { ref: nodeIconRef, inView: nodeIconVisibility } = useInView();
    const { ref: gitHubIconRef, inView: gitHubIconVisibility } = useInView();
    const { ref: gitIconRef, inView: gitIconVisibility } = useInView();

    return (
        <div className="flex flex-col justify-center h-full w-full font-light">

            {/* Skills */}
            <div className="pt-40 text-center font-redHatDisplay bg-secondary ">
                <h2 id='Skills' ref={titleRef} className={`pb-20 text-5xl text-white opacity-0 ${titleVisibility ? 'animate-appear opacity-100' : 'animate-disappear'} `}>{title}</h2>

                <ul className={`first-letter:p-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-7xl bg-secondary font-mono`}>
                    <li ref={pythonIconRef} className={`flex flex-col items-center justify-center opacity-0 ${pythonIconVisibility ? 'animate-appear opacity-100' : 'animate-disappear'}`}>
                        <div className="hover:cursor-pointer hover:text-yellow-300 duration-300"><FaPython /></div>
                        <div className="pt-4 text-xl">Python</div>
                    </li>

                    <li ref={javaIconRef} className={`flex flex-col items-center justify-center opacity-0 ${javaIconVisibility ? 'animate-appear opacity-100' : 'animate-disappear'}`}>
                        <div className="hover:cursor-pointer hover:text-orange-400 duration-300"><FaJava /></div>
                        <div className="pt-4 text-xl">Java</div>
                    </li>

                    <li ref={javascriptIconRef} className={`flex flex-col items-center justify-center opacity-0 ${javascriptIconVisibility ? 'animate-appear opacity-100' : 'animate-disappear'}`}>
                        <div className="hover:cursor-pointer hover:text-black duration-300"><DiJavascript1 /> </div>
                        <div className="pt-4 text-xl">JavaScript</div>
                    </li>

                    <li ref={typescriptIconRef} className={`flex flex-col items-center justify-center opacity-0 ${typescriptIconVisibility ? 'animate-appear opacity-100' : 'animate-disappear'}`}>
                        <div className="hover:cursor-pointer hover:text-black duration-300"><SiTypescript /></div>
                        <div className="pt-4 text-xl">TypeScript</div>
                    </li>

                    <li ref={htmlIconRef} className={`flex flex-col items-center justify-center opacity-0 ${htmlIconVisibility ? 'animate-appear opacity-100' : 'animate-disappear'}`}>
                        <div className="hover:cursor-pointer hover:text-orange-400 duration-300"><FaHtml5 /></div>
                        <div className="pt-4 text-xl">Html</div>
                    </li>

                    <li ref={cssIconRef} className={`flex flex-col items-center justify-center opacity-0 ${cssIconVisibility ? 'animate-appear opacity-100' : 'animate-disappear'}`}>
                        <div className="hover:cursor-pointer hover:text-blue-500 duration-300"><FaCss3Alt /></div>
                        <div className="pt-4 text-xl">CSS</div>
                    </li>

                    <li ref={reactIconRef} className={`flex flex-col items-center justify-center opacity-0 ${reactIconVisibility ? 'animate-appear opacity-100' : 'animate-disappear'}`}>
                        <div className="hover:cursor-pointer hover:text-black duration-300"><SiReact /></div>
                        <div className="pt-4 text-xl">React</div>
                    </li>

                    <li ref={nodeIconRef} className={`flex flex-col items-center justify-center opacity-0 ${nodeIconVisibility ? 'animate-appear opacity-100' : 'animate-disappear'}`}>
                        <div className="hover:cursor-pointer hover:text-green-600 duration-300"><SiNodedotjs /></div>
                        <div className="pt-4 text-xl">Node.js</div>
                    </li>

                    <li ref={gitIconRef} className={`flex flex-col items-center justify-center opacity-0 ${gitIconVisibility ? 'animate-appear opacity-100' : 'animate-disappear'}`}>
                        <div className="hover:cursor-pointer hover:text-orange-600 duration-500"><FaGitAlt /></div>
                        <div className="pt-4 text-xl">Git</div>
                    </li>

                    <li ref={gitHubIconRef} className={`flex flex-col items-center justify-center opacity-0 ${gitHubIconVisibility ? 'animate-appear opacity-100' : 'animate-disappear'}`}>
                        <div className="hover:cursor-pointer hover:text-black duration-500"><VscGithub /></div>
                        <div className="pt-4 text-xl">Github</div>
                    </li>
                </ul>
            </div>
        </div>
    );
};


export default Skills;