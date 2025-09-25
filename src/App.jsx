import './App.css'
import FloatingBlob from "./components/also/FloatingBlob.jsx";
import FirstSectionComponent from "./components/section1/FirstSectionComponent.jsx";
import SecondSectionComponent from "./components/section2/SecondSectionComponent.jsx";
import ThirdSectionComponent from "./components/section3/ThirdSectionComponent.jsx";

import ShowcaseSection from "./components/section4/FouthSectionComponent.jsx";
import FiveSectionComponent from "./components/section5/FiveSectionComponent.jsx";
import SixthSectionComponent from "./components/section6/SixthSectionComponent.jsx";
import FooterSectionComponent from "./components/FooterSectionComponent/FooterSectionComponent.jsx";

function App() {
  return (
      <>
          <FloatingBlob
              size={420}
              blur={120}
              color="rgba(130,160,255,0.5)"
              minSec={18}
              maxSec={32}
          />
          <FirstSectionComponent/>
          <SecondSectionComponent/>
          <ThirdSectionComponent/>
          <ShowcaseSection/>
          <FiveSectionComponent/>
          <SixthSectionComponent/>
          <FooterSectionComponent/>
      </>
  )
}

export default App
