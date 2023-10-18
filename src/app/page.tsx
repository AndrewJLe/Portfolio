import Intro from './components/Intro'
import Skills from './components/Skills'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import logo from './assets/logo.png'

export default function Home() {
  return (
    <div>
      <head>
        <title>Andrew Le Porfolio</title>
        <meta name="description" />
        <link rel="icon" href="./assets/logo.png" />
      </head>

      <div>
        <main>
          {/* Your page content goes here */}
        </main>
      </div>

      <div>
        <Intro
          greeting="Hi, I'm"
          myName="Andrew"
          subtitle="I'm a Software Engineer"
        />
        <main>
          {/* Your page content goes here */}
        </main>
      </div>

      <div>
        <Skills
          title='Skills'
        />
      </div>

      {/* Wave Splash */}
      <div className="flex flex-col justify-center h-screen w-screen font-light">
        <div className='w-full h-full overflow-hidden'>
          <div className="w-full h-full flex flex-col justify-center items-center bg-[url(./assets/stacked-waves-haikei-1.svg)] bg-no-repeat bg-cover">
          </div>
        </div>
      </div>

      <div>
        <Projects />
      </div>

      <div>
        <About
          title='About'
          about='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        />
      </div>

      <div>
        <Contact
          title='Contact'
          email='andrewjacksonle@gmail.com'
          emailLink='andrewjacksonle@gmail.com'
          linkedin='linkedin.com/in/andrewjle'
          linkedinLink='https://www.linkedin.com/in/andrewjle'
        />
      </div>

    </div >
  )
}
