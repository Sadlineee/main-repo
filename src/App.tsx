import { useState } from "react"
import { VscRuby, VscChevronRight, VscChevronLeft, VscAccount, VscSettingsGear } from "react-icons/vsc"

const App: React.FC = () => {
  const [sidebarShow, setSidebarShow] = useState<boolean>(false)

  const sidebarShowHide = () => {
    setSidebarShow(true)
    if (sidebarShow) {
      setSidebarShow(false)
    }
  }

  return(
    <article className="sidebar" style={{width: sidebarShow ? '11rem' : '3.5rem'}}>
      <VscRuby className="sidebar__logo" />
      <div className="sidebar__toggle" onClick={ sidebarShowHide }>{sidebarShow ? <VscChevronLeft /> : <VscChevronRight />}</div>
      {sidebarShow ? <div className="sidebar__account-open"><VscAccount /><h1>Account</h1></div> : <div className="sidebar__account"><VscAccount /></div>}
      {sidebarShow ? <div className="sidebar__settings-open"><VscSettingsGear /><h1>Settings</h1></div> : <div className="sidebar__settings"><VscSettingsGear /></div>}
    </article>
  )
}

export default App
