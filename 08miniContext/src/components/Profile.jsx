import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div>please login</div>

    return <div className="bg-red-500 text-pink-500 my-5" >Welcome {user.username}</div>
}

export default Profile