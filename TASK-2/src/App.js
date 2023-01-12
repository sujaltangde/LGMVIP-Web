
import Navbar from './components/Navbar';
import UsersCard from './components/UsersCard';
import React,{useState} from 'react';
import './components/style.css'

function App() {
    

const [users, setUsers] = useState([]);
const [isLoading, setIsLoading] = useState(false);

// async format
const getData = async () => {
  setIsLoading(true);
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  

  setUsers(data);
  setIsLoading(false);
  console.log(data)
};



 


  return (
    <>
    
    <Navbar handleClick={getData} isLoading={isLoading} />

    <div className="load">
    {isLoading && 
                          
    <div className='loader' ></div>
    }
</div>
      <UsersCard  users={users}/>

    
    </>
  );
}

export default App;




















