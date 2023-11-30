import React, { useState ,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Formlist from './Formlist.css'


function FormList({edit , onSubmit}) {


  const [input, setInput] = useState({
    id : null,
    text: '',
    DOB: "", 
    img: null,
    btn :'ADD'
  });
 
  const [image , setImage] = useState(null)


  useEffect(() => { 
    
    if(edit){
      setInput({
        id : edit[0].id,
        text : edit[0].text,
        DOB : edit[0].DOB,
        img : edit[0].img,
        btn : "UPDATE"
        
      }
      )
      // setInput()
      setImage (edit.img)
      
    }
    else{
      setInput(
        {
          
          text: '',
          DOB: "",
          img: null,
          btn :'ADD'
        }
      )
       setImage(null);
    }
   
  }, [edit]);
  // console.log('INput feild '+edit)




  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    form.reset()
    onSubmit({
      id : input.id,
      text: input.text,
      DOB: input.DOB,
      img: image
    })

    setInput({
      
      text: '',
      DOB: '',
      img: null,
      btn :'ADD'
    });
  
    setImage(null);

    
  }


  const handChanges = (e) => {
    const { name, value, type } = e.target
    if (type === 'file') {
      setImage(URL.createObjectURL(e.target.files[0]))
    } else {
      setInput({
        ...input,
        [name]: value,
      })
    }
  }

  


  return (

  <Form onSubmit={handleSubmit} className='Form '>

<h1 className='Edit-Data'>{input.btn === "ADD" ? "ADD" :"Edit"}</h1>
<Form.Group className="mb-3 input" controlId="formBasicName">
  <Form.Label className='label'>Name</Form.Label>
  <Form.Control type="text"  name='text'  value={input.text} onChange={handChanges} />
</Form.Group>

<Form.Group className="mb-3 input" controlId="formBasicDOb">
  <Form.Label className='label'>Date of Birth</Form.Label>
  <Form.Control type="date"  name='DOB' value={input.DOB} onChange={handChanges} />
</Form.Group>

<Form.Group className="mb-3 input" controlId="formBasicImg">
  <Form.Label className='label'>Chose Image</Form.Label>
  <Form.Control type="file"  name='img' onChange={handChanges}/>
</Form.Group>
<Button className='btn' variant="primary w-100" type="submit">
  {input.btn}
</Button> 
 
 


</Form> 
  );
}

export default FormList;