import '../styles/Header.css';
import { ReactComponent as DataComLogo } from '../assets/datacom-primary.svg'
import { ReactComponent as SearchIcon } from '../assets/search.svg'
import { toSentenceCase } from '../utils';

const Header = ({ navigationItems }) => {

   return (
      <header>
         <div className="innerHeader">
            {/* LOGO */}
            <aside>
               <a href="/">
                  <DataComLogo id="logo" />
               </a>
            </aside>
            {/* NAVIGATION */}
            <nav>
               <ul>{navigationItems.map((item) => <li>{toSentenceCase(item)}</li>)}</ul>
            </nav>
            {/* LOGIN AND SEARCH */}
            <aside>
               <a href="/admin">
                  <button>Sign in</button>
               </a>
               <SearchIcon className="search" />
            </aside>
         </div>
      </header>
   )
}

export default Header;