import { BrowserRouter } from 'react-router-dom'

import{ About, Contact, Experience, Feedbacks, Hero, Navbar,
Tech, Works,StarsCanvas} from './components';
import './index.css'

const App = ()=> {
  return (
    <BrowserRouter>
      <div className= "relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover 
        bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>

        </div>
        <About/>
        <Experience/>
        <Tech />
        <Works/>
        <Feedbacks/>
        <div>
          <Contact/>
          <StarsCanvas/>

        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
