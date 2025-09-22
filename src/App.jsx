import './App.css'
import FloatingBlob from "./components/also/FloatingBlob.jsx";
import ResponsiveNav from "./components/HeaderComponent.jsx";
import FirstSectionComponent from "./components/section1/FirstSectionComponent.jsx";

function App() {
  return (
      <>
          <FloatingBlob
              size={420}
              blur={120}
              color="rgba(130,160,255,1)"
              minSec={18}
              maxSec={32}
          />
          <FirstSectionComponent/>
      </>
  )
}

export default App
