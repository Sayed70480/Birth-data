import React, { useState, useEffect } from 'react'
import FormList from './FormList'
import ShowDataC from './ShowDataC.css'
import Button from 'react-bootstrap/Button';
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

function ShowData() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem('userData')) || []);
const [editstate , setEditState] = useState(null)
// console.log(data)

  const submitData = (obj) => {
    if (!obj.text || /^\s*$/.test(obj.text)) {
      return 
        } else {
      const newData = [obj, ...data]
      setData(newData);
      localStorage.setItem('userData', JSON.stringify(newData))
    }
    
  };



 const clear = () => {
    setData([]);
    localStorage.removeItem('userData')
    setEditState(null)

  };

  useEffect(() => {
    
    const storeData = JSON.parse(localStorage.getItem('userData'));
    if (storeData) {
      setData(storeData);
    }
  }, []);

  
  

  const agecal = (birth) => {
  
    const newDate = new Date(birth)
    const current = new Date()

    const dateinyear = current - newDate ;
    const total =  dateinyear / (1000 * 60 * 60 * 24 * 365.25);
    return Math.floor(total)  
  }

 
  const removeTodo = removeInex => {
    
    const removeArr = [...data].filter((data , ind) => {
      return ind !== removeInex;
      

    })
    setData(removeArr)
  }

  const editbtn = (index) =>{
    const edit = data.filter((dataforEdit , editIndex)=>{
       if(editIndex == index){
        return dataforEdit
       };
    })
    // edit[0].id = index
    console.log("edit : " + edit[0]);
    setEditState(edit)
    
  }
  // console.log(data);


  return (
    <> <div className='showData'>
      <FormList onSubmit={submitData} edit={editstate}  />
     
      <div className='Data-Card'>
     
      <h3 className='data-heading'>User All Data</h3>
      <div className='data-List'>
        {data ? data.map((result, index) => (
          <div className='data' key={index}>
            <div className='info-area'>
            <img className='image' src={result.img}/>
              <div className='info'>
                <h3>{result.text}</h3>
                <p>{agecal(result.DOB)} Year</p>
              </div>
            </div>
            <div className='icons'>
              <RiCloseCircleLine className="crose"  onClick={()=>removeTodo(index)} />
              <TiEdit className="edit" onClick={()=>editbtn(index)}  />
            </div>
          </div>
        )) : []}
      </div>
        <Button className='clearButton' variant="primary w-100" type="submit" onClick={clear}> Clear Data </Button>
      </div>
      

    </div>
    </>
  )
}



export default ShowData