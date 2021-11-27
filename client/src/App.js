
//  ██████╗ ███████╗ █████╗  ██████╗████████╗
//  ██╔══██╗██╔════╝██╔══██╗██╔════╝╚══██╔══╝
//  ██████╔╝█████╗  ███████║██║        ██║   
//  ██╔══██╗██╔══╝  ██╔══██║██║        ██║   
//  ██║  ██║███████╗██║  ██║╚██████╗   ██║   
//  ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝   ╚═╝   
//                                     

import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import {
   Routes,
   Route,
   BrowserRouter
} from 'react-router-dom';
import Admin from './components/Admin';

function App() {

   const navigationItems = ['solutions', 'industries', 'discover', 'about us', 'careers']

   return (
      <div className="App">
         <Header navigationItems={navigationItems} />
         <BrowserRouter>
            <Routes>
               <Route exact path="/" element={ <Body /> } />
               <Route path="/admin" element={ <Admin /> } />
            </Routes>
         </BrowserRouter>
         <Footer />
      </div>
   );
}

export default App;
