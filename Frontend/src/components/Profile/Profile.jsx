import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import RightSide from '../RightSide/RightSide'


const Profile = () => {
    return (

        <div className="App">
            <div className="AppGlass">
                <Sidebar />
                <div>HI Profile Page</div>
                <RightSide />


            </div>
        </div>
    )
}

export default Profile