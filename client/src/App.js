
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


function App() {

   // const handlReq = () => {
   //    axios.post("/api/contact")
   //       .then(res => console.log(res.data))
   // }

   const navigationItems = ['solutions', 'industries', 'discover', 'about us', 'careers']

   return (
      <div className="App">
         <Header navigationItems={navigationItems}/>
         <Body />
      </div>
   );
}

export default App;
