import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useCookies } from "react-cookie"
import "../can-main-page/can-main.css"


export function JobList() {
    const param = useParams()
    // console.log(param, "paramdata")
    const [listed, setListed] = useState([])

    const [cookies] = useCookies();

    const handleSubmit = (value) => {
        // console.log(value, "onSubmit")

        // const [cookies] = useCookies
        // console.log(cookies['userData'])
        const { _id } = cookies['userData']
        value.Candidate_ID = _id
        axios({
            method: "post",
            url: `http://127.0.0.1:2000/applyJob`,
            data: value
        })
            .then(() => {
                alert("job applyed successfully")
            })
    }

    useEffect(() => {
        axios({
            method: "get",
            url: `http://127.0.0.1:2000/JobFetch/${param.id}`

        }).then((response) => {
            console.log(...response.data.result, "result all data")
            setListed(...response.data.result)

        })

    }, [])




    // console.log(listed.Employer_ID, "daaaaa")
    if (listed.Employer_ID) {

        return (
            <div>



                <div key={listed}>
                    <div className="cardd mb-3">

                        <div className="title">{listed.Job_Title}</div>
                        <div className="c_name">{listed.Employer_ID.Emp_Company_Name}</div>
                        <div className="c_name bi bi-geo-alt">&nbsp; {listed.Employer_ID.Emp_Company_Address}</div>
                        <div className="d-flex">
                            <button onClick={() => handleSubmit({ Employer_ID: listed.Employer_ID, Job_ID: listed._id })} className="btn btn-primary w-25 mt-2">Apply</button>
                            <div className="heart bi bi-heart ms-4 mt-2"></div>
                        </div>
                        <hr></hr>
                        <h3>Job details</h3>
                        <div>CTC - &#8377;{listed.Minimum_CTC} - &#8377;{listed.Maximum_CTC}</div>
                        <div>Job Type -<span className="bi bi-briefcase-fill"></span> &nbsp; {listed.Employer_ID.Job_Type}</div>
                        <div>Mandatory Skill -- {listed.Mandatory_Skill}</div>
                        <div>Qualification -- {listed.High_Qulificatin}</div>
                        <div>Job Discription -- {listed.Job_Discription}</div>
                        <div>vacancy -- {listed.Vacancy}</div>
                        <div>Experience -- {listed.Experience}</div>
                        <div>Location -- {listed.Employer_ID.Job_Location}</div>
                        <a href="#"> <span className="float-end top bi bi-bookmark "></span></a>
                        <div>Secondary Skill -- {listed.Secondary_Skill}</div>
                        <div> Primary Skill -- {listed.Primary_Skill}</div>



                    </div>

                </div>



            </div>
        )
    }


}