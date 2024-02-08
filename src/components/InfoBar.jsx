import NavBar from './NavBar'
import Search from './Search'
import Contact from './Contact'

function InfoBar() {
  return (
    <div className="info">
      <NavBar />
      <Search />
      <Contact />
    </div>
  )
}

export default InfoBar