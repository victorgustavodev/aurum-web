import Navbar from "./components/Navbar";
import SectionMain from "./components/sectionMain";
import SectionPontos from "./components/sectionPontos";
import SectionConquiste from "./components/sectionConquiste";
import Feedbacks from "./components/feedbacks";
import SectionContato from "./components/sectionContato";
import SectionFaq from "./components/sectionFaq";
import Footer from "./components/footer";
import Discord from "./components/discord";

function App() {
  return (
    <div className="grid gap-16 lg:gap-24 bg-strong-Blue text-white">
      <div>
        <Navbar />
        <SectionMain />
      </div>
      <SectionPontos />
      <SectionConquiste />
      <Feedbacks />
      <SectionContato />
      <div>
        <SectionFaq />
        <Footer />
      </div>
      <Discord />
    </div>
  );
}

export default App;
