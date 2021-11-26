import '../styles/Header.css';
import { ReactComponent as DataComLogo } from '../assets/datacom-primary.svg'
import { ReactComponent as SearchIcon } from '../assets/search.svg'
import { toSentenceCase } from '../utils';

const Header = ({ navigationItems }) => {

   return (
   <header>
      <div className="innerHeader">
         {/* LOGO */}
         <DataComLogo height="24px" />
         {/* NAVIGATION */}
         <nav>
            <ul>{navigationItems.map((item) => <li>{toSentenceCase(item)}</li>)}</ul>
         </nav>
         {/* LOGIN AND SEARCH */}
         <aside>
            <button onClick="">Sign in</button>
            <SearchIcon className="search" />
         </aside>
      </div>
   </header>
   )
}

export default Header;