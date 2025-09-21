import React from 'react'
import { AboutMe, Contact, Headers, HeroSection, Projects, Footer, Skills} from './components'

const App = () => {
    return (
        <>
            {/* <Headers></Headers> */}
            <main className='flex flex-col items-center justify-center w-[85%] mx-auto'>
                <HeroSection></HeroSection>
                <AboutMe></AboutMe>
                <Skills></Skills>
                <Projects></Projects>
                <Contact></Contact>
            </main>
            <footer className='absolute left-0 right-0'>
                <Footer></Footer>
            </footer>
        </>
    )
}

export default App