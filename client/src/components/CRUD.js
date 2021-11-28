import axios from "axios";
import { useState, useEffect } from "react";
import '../styles/CRUD.css';

const CRUD = () => {
   const [messageData, setMessageData] = useState([]);

   const getMessages = () => {
      axios.get('/api/message/all')
         .then(res => {
            console.log(res.data);
            setMessageData(res.data);
         })
         .catch(() => console.log("There was a catch error"));
   }

   const resolveMessage = (id) => {
      axios.post('/api/message/resolve/' + id)
         .then(res => {
            console.log(res.data);
         })
         .catch(() => console.log("There was a catch error"));
      getMessages()
   }

   const deleteMessage = (id) => {
      axios.post('/api/message/delete/' + id)
         .then(res => {
            console.log(res.data);
            getMessages();
         })
         .catch(() => console.log("There was a catch error"));
   }

   useEffect(() => {
      getMessages();
   }, []);

   return (
      <>
         <div className="crudHeader">
            <h3 className='bottomHeavy'>Messages: {messageData.length}</h3>
            <button className='crudButton margin-0-2' onClick={getMessages}>Refresh</button>
         </div>
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
                     <div className='crudControlsInner'>
                        <button className='crudButton' id="open">Open</button>
                        <button className='crudButton' id="resolve" onClick={() => resolveMessage(item._id)}>Resolve</button>
                     </div>
                     <div className='crudControlsInner'>
                        <button className='crudButton' id="edit">Edit</button>
                        <button className='crudButton' id="delete" onClick={() => deleteMessage(item._id)}>Delete</button>
                     </div>
                  </div>
               </div>
            ))
         }

      </>
   )
}

export default CRUD;