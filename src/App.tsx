import Navbar from "./components/Navbar"
import SectionMain from "./components/sectionMain"
import SectionPontos from "./components/sectionPontos"
import SectionConquiste from "./components/sectionConquiste"
import Feedbacks from "./components/feedbacks"
import SectionContato from "./components/sectionContato"
import SectionFaq from "./components/sectionFaq" 
import Footer from "./components/footer"

function App() {
  return (
    <div className="grid gap-16 lg:gap-36 select-none">
        <Navbar/>
        <SectionMain/>
        <SectionPontos/>
        <SectionConquiste/>
        <Feedbacks/>
        <SectionContato/>
        <SectionFaq/>
        <Footer/>
    </div>
  )
}

export default App
