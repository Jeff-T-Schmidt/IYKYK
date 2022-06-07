import Email from '../../components/Email';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MyInvites = (props) => {
    const navigate = useNavigate()
    useEffect(()=>{
        if(!props.isLoggedIn){
          navigate("/")
         }
       })
    return (
        <>
        <Email/>
        </>
    )
}

export default MyInvites