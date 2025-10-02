import './App.css'
import FirstSectionComponent from "./components/section1/FirstSectionComponent.jsx";
import SecondSectionComponent from "./components/section2/SecondSectionComponent.jsx";
import ThirdSectionComponent from "./components/section3/ThirdSectionComponent.jsx";

import FiveSectionComponent from "./components/section5/FiveSectionComponent.jsx";
import SixthSectionComponent from "./components/section6/SixthSectionComponent.jsx";
import FooterSectionComponent from "./components/FooterSectionComponent/FooterSectionComponent.jsx";
import {lazy, Suspense} from "react";

const ShowcaseSection = lazy(() => import("./components/section4/FouthSectionComponent.jsx"));



function App() {
  return (
      <>
          <FirstSectionComponent/>
          <SecondSectionComponent/>
          <ThirdSectionComponent/>
          <Suspense fallback={null}>
              <ShowcaseSection/>
          </Suspense>
          <FiveSectionComponent/>
          <SixthSectionComponent/>
          <FooterSectionComponent/>
      </>
  )
}

export default App
