import NavBar from './NavBar'
import Search from './Search'
import Contact from './Contact'

function InfoBar() {
  return (
    <div className="info">
      <NavBar />
      <Search />
      <div className="contact-limiter">
        <Contact />
      </div>
    </div>
  )
}

export default InfoBar