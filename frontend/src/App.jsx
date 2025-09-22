import React from 'react'
import { AboutMe, Contact, Headers, HeroSection, Projects, Footer, Skills} from './components'

const App = () => {
    return (
        <>
            {/* <Headers></Headers> */}
            <main>
                <HeroSection></HeroSection>
                <AboutMe id="about"></AboutMe>
                <Skills id="skills"></Skills>
                <Projects id="projects"></Projects>
                <Contact id="contact"></Contact>
            </main>
            <footer className='absolute left-0 right-0'>
                <Footer></Footer>
            </footer>
        </>
    )
}

export default App