import Info from './components/Info'
import About from './components/About'
import Skills from './components/Skills'
import Social from './components/Social'
import Footer from './components/Footer'
import './styles.css'

function App() {
  return (
    <div>
      <div className="main-container">
        <Info/>
        <About/>
        <Skills/>
        <Social/>
      </div>
      <footer className="footer">
        <Footer/>
      </footer>
    </div>
  )
}

export default App
