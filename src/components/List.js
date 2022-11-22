import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
const List = (props) => {
    const handleclick=(id)=>{
        props.deleteitem(id)
    }
  return (
    <div>
        <h4>List Group</h4>
        {
            props.data.map(ele=>{
               return <ListGroup.Item key={ele._id}>{ele.name}<Button onClick={()=>handleclick(ele._id)} variant="primary">Delete</Button></ListGroup.Item>
                
            })
        }


        * <ListGroup>
       {/* <ListGroup.Item >Cras justo odio</ListGroup.Item> 
       <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>   */}
       {/* <Button onClick={()=>handleclick(ele._id)} variant="primary">Delete</Button> * */}
    </ListGroup>
    </div>
  )
}

export default List