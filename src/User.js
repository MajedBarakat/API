import React from 'react'
import {Card} from 'react-bootstrap'


const User = ({user}) => {
  return (
    <Card style={{ width: '18rem',margin:'10px' }}>
      <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/219/219969.png" style={{ height:'50px'}} />
      <Card.Body>
        <Card.Title>{user.name+" "+user.username}</Card.Title>
        <Card.Text>
          {user.email}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default User