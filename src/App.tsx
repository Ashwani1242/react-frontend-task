import SectionLeft from "./components/SectionLeft"
import SectionRight from "./components/SectionRight"

function App() {

  return (
    <div className="flex h-screen bg-gradient-to-b bg-blend-multiply from-[#373E44] to-[#191B1F] shadow-inner">
      <SectionLeft />
      <SectionRight />
    </div>
  )
}

export default App
