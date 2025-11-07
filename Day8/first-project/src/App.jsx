import './App.css'
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Hero from "./components/Hero.jsx"
import Card from "./components/Card.jsx"

function App() {

  return (
   <div className='p-2'>
    {/* <Header title="Krish's website" home="Home page" about="about us page" contact="Contact page" borderColor="red" bgColor="blue"/>
    <Hero /> */}
    <div className="flex justify-center">
      <Card title="Need a help in Claim?" description="Go to this step by step guideline process on how to certify for your weekly benefits:" cta="See our guideline" url="#" />
      <Card title="How's Life, anyt issues?" description="Refer this book for mental clairty." cta="buy now" url="https://youtube.com" />
      <Card title="Need a help in Claim?" description="Go to this step by step guideline process on how to certify for your weekly benefits:" cta="See our guideline" url="#" />
    </div>
    
    {/* <Footer /> */}
   </div>
  )
}

export default App
