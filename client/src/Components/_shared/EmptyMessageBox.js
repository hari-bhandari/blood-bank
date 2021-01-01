import React from 'react';
import {NavLink} from "../Navbar/NavbarElements";

const EmptyMessageBox = ({toBeShown,message}) => {
    if(toBeShown){
        return (
            <>
                {toBeShown&&(<h3>{message} <NavLink color={"blue"} to='/login'>Click here to signup</NavLink></h3>)}
            </>

        )
    }
    return (
        <div>

        </div>
    );
};

export default EmptyMessageBox;