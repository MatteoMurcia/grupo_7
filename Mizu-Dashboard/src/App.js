import { useEffect } from 'react';
import { useState } from 'react';
import Label from './components/Label/Label'
import UserLabel from './components/Label/UserLabel'
import Table from './components/Table/Table'
import UsersTable from './components/Table/UsersTable'
import TotalCategories from './components/TotalCategories';
import './assets/css/App.css';
import SideBar from './components/SideBar/SideBar'

const App = () =>  {

  const[products, setProducts] = useState([]);
  const[loading, setLoading] = useState(false);
  const[users, setUsers] = useState([]);
  const[lastUser, setLastUser] = useState({})



  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      
      fetch('http://localhost:3000/api/products/listado')
      .then(response => response.json())
      .then(results => {
        const { data } = results
        setProducts(data.products.rows)

        setLoading(false)
      });
      

    }, 2000);
    

  },[])

  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      
      fetch('http://localhost:3000/api/users/listado?size=20&page=1')
      .then(response => response.json())
      .then(results => {
        const { data } = results
        setUsers(data.usuarios.rows)
        setLastUser(users.filter(user=> user.user_id == users.length))
        setLoading(false)
      });
      

    }, 2000);
    

  },[])

  useEffect(()=>{
    const userIds = users.map(user => user.user_id)
    const newUser = users.find(user => user.user_id == Math.max(...userIds))
    setLastUser(newUser);
  },[users])


  const tableColumns = ['Id', 'Nombre', 'Categoría', 'Descripción']
  const userTableColumns = ['Id', 'Nombre', 'Nombre de Usuario', 'Email']


  return (
    <main className="App">
      <SideBar/>
      <div className='contentWrapper'>
        <h1 className='titleMain'>Bienvenidos al MIZU - DASHBOARD</h1>
        {
          loading ? <p>Cargando...</p> : ''
        }
        
        <div className="control_label">
          <Label title="Productos" value={products.length}/>
          <TotalCategories />
        </div>
        <h2 className='titleTable'>Tabla de Productos</h2>
        <Table columns={tableColumns} products={products} />

        <Label title="Users" value={users.length}/>
        
        <h2 className='titleTable'>Tabla de Usuarios</h2>
        <UsersTable columns={userTableColumns} users={users}/>
        <UserLabel title="User" user={lastUser} />
      </div>
    </main>
  );
    }

export default App;