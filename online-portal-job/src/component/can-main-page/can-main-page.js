import "../../component/can-main-page/can-main.css"
import { useEffect, useState } from "react"
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie"
import { CandidateHeader } from './can-header';

export function CandidateHome() {
    const [post, setPost] = useState([])
    const navigate = useNavigate();
    const [cookies] = useCookies();

    useEffect(() => {
        const { _id } = cookies['userData']
        // console.log(_id["userData"])
        if (_id == undefined) {
            navigate("/")
        }

        axios({
            method: "get",
            url: "http://127.0.0.1:2000/candidateJobs",

        }).then((response) => {
            // console.log(response.data, "daaaaa")
            setPost(response.data)
            // console.log(setPost, "set data")
        })
    }, [])

    const handleSubmit = (value) => {

        const { _id } = cookies['userData']
        value.Candidate_ID = _id


        axios({

            method: "post",
            url: "http://127.0.0.1:2000/applyJob",
            data: value
        })
            .then(() => {
                alert("job applyed successfully")
            })

    }
    // console.log(post, "get data")
    return (





        <div>
            <CandidateHeader />

            <div >
                <h2>All Jobs </h2>
                {
                    post.map(posted =>


                        <div className="card  mb-3" key={posted.Job_Title}>

                            <div>
                                <div className="title">{posted.Job_Title}</div>
                                <div className="c_name">{posted.Employer_ID.Emp_Company_Name}</div>
                            </div>
                            <div>
                                <div className="c_name bi bi-geo-alt">&nbsp; {posted.Employer_ID.Emp_Company_Address}</div>
                                <div className="c_name">&#8377;{posted.Minimum_CTC} - &#8377;{posted.Maximum_CTC}</div>
                            </div>
                            <div>
                                <div className="c_name bi bi-briefcase-fill">&nbsp; {posted.Employer_ID.Job_Type}</div>
                                <div className="c_name">{posted.Mandatory_Skill}</div>
                            </div>
                            {/* <a href="#"> <span className="float-end top bi bi-bookmark "></span></a> */}
                            <div className='d-flex'>
                                <Link to={`/joblisted/${posted._id}`} className='btn btn-primary' id="more">More Details</Link>
                                <button onClick={() => handleSubmit({ Employer_ID: posted.Employer_ID, Job_ID: posted._id })} className="btn btn-success ms-4">Apply</button>

                            </div>

                        </div>



                    )
                }
            </div>
        </div>

    )
}