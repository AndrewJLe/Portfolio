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
          about="Hi, I'm Andrew. I graduated Washington State University with a Computer Science degree. I have experience creating mobile and web applications. However, my passion lies in creating dynamic visual simulations for people to experience and interact with."
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
