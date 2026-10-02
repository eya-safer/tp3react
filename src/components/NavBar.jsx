import { MenuIcon } from './Icon.jsx'

export default function NavBar() {
  return (
    <>
      <aside className="sidebar">
        <div className="wordmark">Instagram</div>
        <div className="main-nav">
          <div className="nav-item"><img className="nav-avatar" src="/myprofil.avif" alt="" /><span>Profil</span></div>
        </div>
        <div className="nav-item more-link"><MenuIcon /><span>Plus</span></div>
      </aside>
      <div className="mobile-nav"><img src="/myprofil.avif" alt="" /><span>Profil</span></div>
    </>
  )
}