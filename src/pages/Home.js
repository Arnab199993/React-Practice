import React, { useState } from 'react'
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import List from '../components/List';
import Config from '../Config';
import axios from 'axios';
import Addform from '../components/Addform';

const Home = () => {
  



    const [isdeleted,setisdeleted]=useState(false)
    const URL="rustycoder.live:8181/auth/signup"
    const deleteitem=(id)=>{
        //will make delete api call
        axios.delete(`${Config.URL}/delete/${id}`).then(response=>{
            console.log(response.data)
            setstate(response.data)
            setisdeleted(!isdeleted)
        }).catch(error=>{
            console.log(error)
        })
    }

    const [state,setstate]=useState([])
    const callapi=()=>{
        axios.get(`${Config.URL}/`).then(response=>{
            console.log(response.data)
            setstate(response.data)
        }).catch(error=>{
            console.log(error)
        })
    }
const additem=(data)=>{
    console.log(data)
    //just call the api
}

    useEffect(()=>{
        callapi()
    },[isdeleted])

  return (
    <div>
        <h2>Home</h2>
        <Container>
        <Row>
        <Col>
        1 of 2
        <List data={state} deleteitem={deleteitem}/>
        </Col>
        <Col>
        <h1>2 of 2</h1>
        <Addform additem={additem}/>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Home