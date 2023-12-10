
import {headerLogo} from '../assets/images'
// import {hamburger} from '../assets/icons'

function Nav() {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between'>
        <a href="/">
          <img src={headerLogo} 
          alt="logo"
          height={29}
          width={130} 
          />
        </a>
        
      </nav>
    </header>
  );
}

export default Nav;
