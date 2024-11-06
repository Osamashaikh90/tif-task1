import './App.css'
import { Home, About, LatestArticles, Footer } from './sections'

function App() {

  return (
    <>
      <div className='flex flex-col gap-16 md:gap-28'>
        <Home />
        <About />
        <LatestArticles />
        <Footer />
      </div>
    </>
  )
}

export default App
