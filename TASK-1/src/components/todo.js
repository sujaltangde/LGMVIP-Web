import React, { useState} from 'react';
import "./todo.css"

const Todo = () => {

    const [activity, setActivity] = useState("")
    const [listData, setListData] = useState([])
    
    const e = (e) => {
        setActivity(e.target.value)
    }

    const AddActivity = () => {
        setListData((listData) => {
            const updatedList = [...listData, activity]
            setActivity(" ")
            return updatedList
        })
    }

   

    const removeActivity = (i)=>{

        const updatedListData = listData.filter((elem,id)=>{
            return i!==id
        })
        setListData(updatedListData)
    }

    const removeAll = ()=>{
        setListData([])
    }

    return (
        <>

            <div className="container">
                <div className="main">

                    <div className="title">
                        Add Your List Here
                    </div>
                    <div className="Add-Box-Cont">
                        <input className="AddBox" type="text" value={activity} onChange={e} />
                        <button onClick={AddActivity} className="AddBtn">Add</button>
                    </div>
                 
                    <div className="Item-List">

                        {listData !== [] && listData.map((data, i) => {
                            return (
                                <>
                                    <div className="Item" key={i}>
                                        <div className="list-text">{i+1}. {data}  </div>
                                        <button onClick={()=>{removeActivity(i)}} className="rmvItem">X</button>
                                    </div>

                                </>
                            )
                        })}



                    </div>

                    
                    <div className="button">
                    {listData.length>=1 &&
                        <button className="RmvBtn" onClick={removeAll} >  Remove All </button>
                    }
                    </div>
                    

                </div>
            </div>




        </>
    )
}

export default Todo