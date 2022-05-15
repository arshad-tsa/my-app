import React from 'react'
import { Table } from 'react-bootstrap'

export default function Dtable() {
    const users = [
        { name: "Arshad", email: "arshad@gmail.com", contact: "9876543210" },
        { name: "Naufil", email: "naufil@gmail.com", contact: "1234567890" },
        { name: "Aaquib ", email: "aaquibk@gmail.com", contact: "7852963741" },
        
      ];
  return (
    <div>
    <h1 className='text-center'> list Of Data</h1>
   
       <Table striped className="text-center">
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Contact</td>
            <td>Action </td>
          </tr>
          {users.map((item, i) => (
            <tr key={i}>
              <td> {item.name}</td>
              <td> {item.email}</td>
              <td> {item.contact}</td>
              <td> <button className='btn btn-danger'>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </Table>
     
    
    </div>
  )
}
