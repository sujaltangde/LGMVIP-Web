import React from 'react'

const UsersCard = (prop) => {


   
    
    return (

        <>

            <div className="container">

{
    prop.users.map((e)=>{
        return(


            <div className="UserBox">
                    <img src="/" alt="" />
                    <div className="UserData">
                        <p className='UserName'  >Name = {e.name}</p>
                        <p className='UserName' >Email = {e.email}</p>
                        <p className='UserName' >Phone = {e.phone}</p>
                        <p className='UserName' >City = {e.address.city}</p>
                        <p className='UserName' >Website = {e.website}</p>
                        <p className='UserName' >Company = {e.company.name}</p>
                    </div>
                </div>


        )
    })

                

}


            </div>


        </>
    )
}

export default UsersCard