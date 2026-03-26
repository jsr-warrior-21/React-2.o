import React from 'react'
import { useContext } from 'react'
import {UserContext} from '../App'
// i am supposing this is last child which is getting prop from first root node using UseContext Hooks.

const UserContext2 = () => {
    const user = useContext(UserContext);
  return (
    <div>
        "Yep {user}"
    </div>
  )
}

export default UserContext2