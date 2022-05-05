import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Exit(props) {

    
    let navigate = useNavigate();
    useEffect(() => {
    if (props.auth){
        props.setAuth(false)
        return navigate("/auth");
    }
    },[props.setAuth]);
}

export default Exit;