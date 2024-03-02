import { useState } from "react"
import { LuCopy, LuCheck } from "react-icons/lu"
import Gradients from "../data/Gradients"

const Main = () => {
  const [isCopy, setIsCopy] = useState<boolean>(false)

  const Content = Gradients.map((el) => {
    const CopyHandler = () => {
      setIsCopy(true)
      navigator.clipboard.writeText(el.text)
      setTimeout(() => { setIsCopy(false) }, 500)
    }

    return(
      <div className="main__gradient" key={el.id} style={{background: el.gradient}}>
        <div className="main__gradient-copy" onClick={ CopyHandler }>{ isCopy ? <LuCheck /> : <LuCopy /> }</div>
      </div>
    )
  })

  return(
    <main className="main">
      { Content }
    </main>
  )
}

export default Main