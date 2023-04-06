import { useNavigate } from "react-router-dom";
import '../emp-main-page/emp-main.css'
import { useEffect } from "react";
import { useCookies } from "react-cookie"
import { Employerheader } from "./emp-header";

export function EmployerHome() {
    const navigate = useNavigate();
    const [cookies] = useCookies();


    useEffect(() => {
        const { _id } = cookies['userData']
        console.log(_id,"hgvgfchh")
        if (_id == undefined) {
            navigate("/")
        }
    }, [])


    return (

        <div>
            <Employerheader/>
        </div>
    )
}