import {Link} from 'react-router-dom'


function Header(){
  return (
    <nav id='header'>
        
        <Link id='link-nav' to={"/"}>Horizon</Link>
        <Link id='link-nav' to={"/artwork"}>Artwork</Link>
        <Link id='link-nav' to={"/about"}>About</Link>
        <Link id='link-nav' to={"/contact"}>Contact</Link>
    </nav>
  )
}

export default Header
