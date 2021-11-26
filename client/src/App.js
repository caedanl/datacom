
//  ██████╗ ███████╗ █████╗  ██████╗████████╗
//  ██╔══██╗██╔════╝██╔══██╗██╔════╝╚══██╔══╝
//  ██████╔╝█████╗  ███████║██║        ██║   
//  ██╔══██╗██╔══╝  ██╔══██║██║        ██║   
//  ██║  ██║███████╗██║  ██║╚██████╗   ██║   
//  ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝   ╚═╝   
//                                     

import './App.css';
import axios from 'axios';
import { ReactComponent as DataComLogo } from './assets/datacom-primary.svg'

function App() {

   const handlReq = () => {
      axios.post("/api/contact")
         .then(res => console.log(res.data))
   }

   const toSentenceCase = (word) => {
      return word[0].toUpperCase() + word.substr(1, word.length-1)
   }

   const navArray = ['solutions', 'industries', 'discover', 'about us', 'careers']

   return (
      <div className="App">
         <header>
            <div className="innerHeader">
               <DataComLogo height="24px" />
               <nav>
                  <ul>
                     {
                        navArray.map((item) => (
                           <li>{toSentenceCase(item)}</li>
                        ))
                     }
                  </ul>
               </nav>
               <aside>aside</aside>
            </div>
         </header>
      </div>
   );
}

export default App;
