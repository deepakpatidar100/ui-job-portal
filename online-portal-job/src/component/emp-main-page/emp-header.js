import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import '../../component/emp-main-page/emp-main.css'
import { useNavigate } from "react-router-dom";

export function Employerheader() {

    const [cookies, removeCookies] = useCookies()
    const navigate = useNavigate();


    useEffect(() => {
        const { _id } = cookies['userData']
        // console.log(_id["userData"])
        if (_id == undefined) {
            navigate("/")
        }
    }, [])


    function SignoutClick() {
        removeCookies('userData')
        navigate("/")
    }

    return (

        <div className="container-fluid">
            <header className="nav">
                <div className="d-flex">
                    <img src="job.logo.jpg" width="60px" height="60px" alt="logojob" />
                    <p className="pp page">Employer Page</p>
                </div>
                <div className="mt-2">
                    <span><Link to="/emp-main-page" className="page">Home</Link></span>
                    <span><Link to="/job-post" className="page">Post Jobs</Link></span>
                    <span><Link to="/emp-postedjob" className="page">Posted job</Link></span>
                    <span><Link to="/profile-update" className="page">ProfileUpdate</Link></span>
                    <span><Link to="/applied-can" className="page">Applied Jobs</Link></span>




                    <button className="btn btn-danger" onClick={SignoutClick}>Logout</button>
                </div>
            </header>

        </div>

    )
}