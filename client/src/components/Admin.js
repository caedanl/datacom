import CRUD from "./CRUD"

const Admin = () => {

   return (
      <>
         <section>
            <h3>Datacom Admin Portal</h3>
            <h1>Manage messages</h1>
         </section>
         <section>
            <CRUD />
         </section>
      </>
   )
}

export default Admin