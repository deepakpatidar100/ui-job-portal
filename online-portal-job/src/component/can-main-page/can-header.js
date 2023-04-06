import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
export function CandidateHeader() {

    const [cookies, removeCookies] = useCookies()
    const navigate = useNavigate();
    const { _id } = cookies['userData']
    // console.log(_id["userData"])
    if (_id == undefined) {
        navigate("/")
    }


    function SignoutClick() {
        removeCookies("userData")
        navigate("/")
    }

    return (
        <div className="container-fluid">
            <header className="nav">

                <div>
                    <img src="job.logo.jpg" width="60px" height="60px" alt='joblogo' />

                </div>
                <div className='mt-2'>
                    <span><Link className="page" to="/can-main-page">Home</Link></span>
                    <span><Link className="page" to="/can-profile-update">ProfileUpdate</Link></span>
                    <span><Link className="page" to="/can-applied">AppliedJob</Link></span>


                    <button className="btn btn-danger ms-4 log" onClick={SignoutClick}>Logout</button>

                </div>

            </header>
        </div>
    )
}