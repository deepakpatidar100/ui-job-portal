import axios from "axios"
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom";
import { CandidateHeader } from "./can-header";

export function CandidateApplied() {
    const [posted, setPosted] = useState([])
    const [cookies] = useCookies();
    const navigate = useNavigate()

    const { _id } = cookies['userData']
    // console.log(["userData"])
    if (_id == undefined) {
        navigate("/")
    }


    useEffect(() => {

        axios({
            method: "get",
            url: `http://127.0.0.1:2000/jobApplied?id=${_id}`
        })
            .then((response) => {
                // console.log(...response.data.result, "set all data")
                setPosted(...response.data.result);
            })

    }, [])
    // console.log(posted, "get data")
    return (
        <div >
            <CandidateHeader/>
            <h2 className="mt-3">All Applied Job</h2>
            <div className=" p-4 m-4 ">
                {
                    posted.map(List =>
                        <div className="border border-3 p-3 m-3 w-50" key={List._id}>

                            <dl className="row" key={List._id}>
                                <dt className="col-4">job_Title:</dt>
                                <dd className="col-8">{List.Job_ID.Job_Title}</dd>
                                <dt className="col-4">Company_Name:</dt>
                                <dd className="col-8">{List.Employer_ID.Emp_Company_Name}</dd>
                                <dt className="col-4">Company_Address:</dt>
                                <dd className="col-8">{List.Employer_ID.Emp_Company_Address}</dd>


                                <dt className="col-4">Job_Location:</dt>
                                <dd className="col-8">{List.Employer_ID.Job_Location}</dd>
                                <dt className="col-4">Minimum_CTC:</dt>
                                <dd className="col-8">{List.Job_ID.Minimum_CTC}</dd>
                                <dt className="col-4">Maximum_CTC:</dt>
                                <dd className="col-8">{List.Job_ID.Maximum_CTC}</dd>
                            </dl>

                        </div>

                    )
                }
            </div>
        </div>
    )
}