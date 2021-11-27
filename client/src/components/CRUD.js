import axios from "axios";
import { useState } from "react";
import '../styles/CRUD.css';

const CRUD = () => {
   const [messageData, setMessageData] = useState([  {
      _id: 'testID',
      firstName: 'Caedan',
      lastName: 'Lavender',
      email: 'test@test.com',
      subject: 'Sed ut perspiciatis',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      __v: 0
    }]);

   const getMessages = () => {
      axios.get('/api/message/all')
         .then(res => {
            console.log(res.data);
            setMessageData(res.data);
         })
         .catch(() => console.log("There was a catch error"));
   }

   return (
      <>
         <div>Messages: {messageData.length}</div>
         <button onClick={getMessages}>Refresh</button>
         {
            messageData.map((item) => (
               <div className='crudCard'>
                  <div className='crudContent'>
                  <span className='subtitle'>From:</span>
                  <h1>{item.firstName} {item.lastName}</h1>
                  <span className='subtitle'>Subject:</span>
                  <div className='subject'>{item.subject}</div>
                  <div className='message'>{item.message}</div>
                  </div>
                  <div className='crudControls'>
                     <button className='crudButton' id="open">Open</button>
                     <button className='crudButton' id="resolve">Resolve</button>
                     <button className='crudButton' id="edit">Edit</button>
                     <button className='crudButton' id="delete">Delete</button>
                  </div>
               </div>
            ))
         }

      </>
   )
}

export default CRUD;