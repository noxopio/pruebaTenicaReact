import { useEffect, useState } from "react"

export const UsuariosComponent = () => {


const [users,setUsers ]=  useState  ([])



const fetchUsers = async ( )=>{
try{

    const response =await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await response.json()
    setUsers(data)
    
}catch(error){
    console.error(error)
}

}
useEffect(()=>{},[])
fetchUsers()
  return (
<>
<h1> Lista de usuarios</h1>

<table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">website</th>
    </tr>
  </thead>
  <tbody>
     {users.map(user =>{
return(

  <tr key={user.id}>
  <th scope="row">{user.id}</th>
  <td>{user.name}</td>
  <td>{user.email}</td>
  <td>{user.website}</td>
</tr>


)




     })}

   

  </tbody>
</table>


</>
)
}