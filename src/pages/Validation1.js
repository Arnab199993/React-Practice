import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
const Validation1 = () => {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const schema = yup.object({
        
        firstName: yup.string().required(),
        // firstName: yup.string().required().min(5).max(10),
        address: yup.string().required(),
        // address: yup.num().positive().integer().required(),   //for numbers
        phone: yup.string().matches(phoneRegExp, 'Phone number is not valid')
      }).required();


      


      const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
    


  return (
    <div>
        <h3>Login Form</h3>
        <form onSubmit={handleSubmit(onsubmit)}>
  <div className="mb-3">
    
    <input type="text"  {...register("firstName")}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    <p style={{color:"red"}}>{errors.firstName?.message}</p>
    
  </div>
  <div className="mb-3">
    <input  {...register("address")} type="address" className="form-control" id="exampleInputPassword1"></input>
    <p>{errors.address?.message}</p>
  </div>
  <div className="mb-3">
    <input  {...register("phone")} type="phone" className="form-control" id="exampleInputPassword1"></input>
    <p>{errors.phone?.message}</p>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Validation1