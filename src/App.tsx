import './App.css'
import { Home, About, LatestArticles, Footer } from './sections'

function App() {

  return (
    <>
      <div className='flex flex-col gap-20'>
        <Home />
        <About />
        <LatestArticles />
        <Footer />
      </div>
    </>
  )
}

export default App
