import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useForm,Controller,control} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object({
  name: yup.string().required(),
  age: yup.number().positive().integer().required(),
  address: yup.string().required()
}).required();
const Addform = (props) => {

  let { register, handleSubmit,control, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  //const onSubmit = data => console.log(data);


  return (
    <div>
        <h1 style={{color:"red"}}>Addform</h1>
        <Form onSubmit={handleSubmit(props.additem)}>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Age</Form.Label>
      
        <Controller
        name="name"
        control={control}
        render={({ field }) => <Form.Control {...register=("age")} type="number" placeholder="enter age"/>}
      />
      <p >{errors.age?.message}</p>




      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        
        <Controller
        name="name"
        control={control}
        render={({ field }) => <Form.Control {...register=("name")} type="text" placeholder="enter name"/>}
      />
      <p >{errors.name?.message}</p>

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Address</Form.Label>
        <Controller
        name="name"
        control={control}
        render={({ field }) => <Form.Control {...register=("address")} type="text" placeholder="enter address"/>}
      />
      <p >{errors.address?.message}</p>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Addform