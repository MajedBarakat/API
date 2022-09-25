import React from 'react'
import {Spinner} from 'react-bootstrap'
import User from './User'

const UserList = ({user,loadUser}) => {
  return (
    <div style={{display:'flex'}}>
      {
        loadUser?(
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ):(user.map((el)=> <User user={el} key={el.id}/>))
      }
    </div>
  )
}

export default UserList