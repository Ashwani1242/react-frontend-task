import BottomWidget from "./BottomWidget"
import Margin from "./Margin"
import TopWidget from "./TopWidget"

function SectionRight() {
  return (
    <section className="flex flex-col items-center justify-center h-full flex-1 bg-indigo-40 p-8">
      <TopWidget />
      <Margin />
      <BottomWidget />  
      <Margin />
    </section>
  )
}

export default SectionRight
