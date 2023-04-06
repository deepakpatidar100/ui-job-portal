import axios from "axios"
import { useEffect, useState } from "react"


export function GetJob() {
    const [jobget, seeJob] = useState([]);
    useEffect(() => {

        axios({
            method: "get",
            url: "http://127.0.0.1:2000/candidateJobs",
        }).then((response) => {
            // console.log(response, "data")
            seeJob(response.data)
        }, [])
    })
    return (
        <div>
            <h2>All Job </h2>
            <div>
                {
                    jobget.map(Get =>
                        <div className="border border-3 w-50 p-4" key={Get.id}>
                            <dl className="row" key={Get.id}>
                                <dt className="col-4">job_Title</dt>
                                <dd className="col-8">{Get.Job_Title}</dd>
                                <dt className="col-4">Emp_Company_Name</dt>
                                <dd className="col-8">{Get.Emp_Company_Name}</dd>
                                <dt className="col-4">Emp_Company_Address</dt>
                                <dd className="col-8">{Get.Emp_Company_Address}</dd>
                                <dt className="col-4">Job_Type</dt>
                                <dd className="col-8">{Get.Job_Type}</dd>
                                <dt className="col-4">Job_Discription</dt>
                                <dd className="col-8">{Get.Job_Discription}</dd>
                                <dt className="col-4">Vacancy</dt>
                                <dd className="col-8">{Get.Vacancy}</dd>
                                <dt className="col-4">Experience</dt>
                                <dd className="col-8">{Get.Experience}</dd>
                                <dt className="col-4">Position</dt>
                                <dd className="col-8">{Get.Position}</dd>
                                <dt className="col-4">Job_Location</dt>
                                <dd className="col-8">{Get.Job_Loaction}</dd>
                                <dt className="col-4">Primary_Skill</dt>
                                <dd className="col-8">{Get.Primary_Skill}</dd>
                                <dt className="col-4">Secondary_Skill</dt>
                                <dd className="col-8">{Get.Secondary_Skill}</dd>
                                <dt className="col-4">Mandatory_Skill</dt>
                                <dd className="col-8">{Get.Mandatory_Skill}</dd>
                                <dt className="col-4" >High_Qulificatin</dt>
                                <dd className="col-8">{Get.High_Qulificatin}</dd>
                                <dt className="col-4">Minimum_CTC</dt>
                                <dd className="col-8">{Get.Minimum_CTC}</dd>
                                <dt className="col-4">Maximum_CTC</dt>
                                <dd className="col-8">{Get.Maximum_CTC}</dd>
                            </dl>
                            <button className="btn btn-info">Apply</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}