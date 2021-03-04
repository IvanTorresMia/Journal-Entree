import React from 'react';



const Profile = ({ handleLogout }) => {

    return (
<div>
<h1>Logout</h1>


<button onClick={handleLogout}>LOGOUT</button>

</div>
    )
}

export default Profile;