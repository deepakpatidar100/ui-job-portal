import axios from "axios"
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom";
import { Employerheader } from "./emp-header";

export function EmpPosted() {
    const [posted, setPosted] = useState([])
    const [cookies] = useCookies();
    const navigate = useNavigate()

    const { _id } = cookies['userData']
    // console.log(["userdata"])
    if (_id == undefined) {
        navigate("/")
    }


    useEffect(() => {


        axios({
            method: "get",
            url: `http://127.0.0.1:2000/getemployerJob?id=${_id}`
        })
            .then((response) => {
                console.log(...response.data.result, "Set Data")
                setPosted(...response.data.result);
            })

    }, [])
    console.log(posted, "get data")
    return (
        <div>
            <Employerheader />
            <div>
                <h2>All Posted Job</h2>
                {
                    posted.map(List =>
                        <div className="border border-3 p-3 w-50 mt-4" key={List._id} >

                            <dl className="row" key={List._id}>
                                <dt className="col-4">job_Title</dt>
                                <dd className="col-8">{List.Job_Title}</dd>

                                <dt className="col-4">Job_Discription</dt>
                                <dd className="col-8">{List.Job_Discription}</dd>
                                <dt className="col-4">Vacancy</dt>
                                <dd className="col-8">{List.Vacancy}</dd>
                                <dt className="col-4">Experience</dt>
                                <dd className="col-8">{List.Experience}</dd>
                                <dt className="col-4">Job_Location</dt>
                                <dd className="col-8">{List.Job_Location}</dd>
                                <dt className="col-4">Primary_Skill</dt>
                                <dd className="col-8">{List.Primary_Skill}</dd>
                                <dt className="col-4">Secondary_Skill</dt>
                                <dd className="col-8">{List.Secondary_Skill}</dd>
                                <dt className="col-4">Mandatory_Skill</dt>
                                <dd className="col-8">{List.Mandatory_Skill}</dd>
                                <dt className="col-4">High_Qulificatin</dt>
                                <dd className="col-8">{List.High_Qulificatin}</dd>
                                <dt className="col-4">Minimum_CTC</dt>
                                <dd className="col-8">{List.Minimum_CTC}</dd>
                                <dt className="col-4">Maximum_CTC</dt>
                                <dd className="col-8">{List.Maximum_CTC}</dd>
                            </dl>
                        </div>

                    )
                }
            </div>
        </div>
    )
}