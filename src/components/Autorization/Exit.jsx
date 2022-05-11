import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Exit(props) {

    
    let navigate = useNavigate();
    useEffect(() => {
    if (props.auth){
        props.setAuth(false)
        return navigate("/auth");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.setAuth]);
}

export default Exit;