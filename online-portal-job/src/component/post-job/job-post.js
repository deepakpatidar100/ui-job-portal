import { Formik, Form, Field } from "formik";
import axios from "axios";
import '../post-job/job-post.css';
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom";
import { Employerheader } from "../emp-main-page/emp-header";
import * as yup from "yup";


export function JobPost() {

    const navigate = useNavigate()
    const [cookies] = useCookies()


    const { _id } = cookies['userData']
    console.log(_id, "jhgf")





    return (
        <div className="container-fluid">
            <Formik

                initialValues={{
                    Employer_ID: _id,
                    Job_Title: "",
                    Job_Type: "",
                    Job_Discription: "",
                    Vacancy: "",
                    Experience: "",
                    Primary_Skill: "",
                    Secondary_Skill: "",
                    Mandatory_Skill: "",
                    Position: "",
                    Job_Location: "",
                    High_Qualification: "",
                    Minimum_CTC: "",
                    Maximum_CTC: "",

                }}
                validationSchema={
                    yup.object({
                        Job_Title: yup.string().required("Job_Title Required"),
                        Job_Type: yup.string().required("Job_Description Required"),
                        Job_Discription: yup.string().required("Job_Discription Required"),
                        Vacancy: yup.string().required("Vacancy Required"),
                        Experience: yup.string().required("Experience Required"),
                        Primary_Skill: yup.string().required("Primary_Skill Required"),
                        Mandatory_Skill: yup.string().required("Secondary_Skill Required"),
                        Position: yup.string().required("Position Required"),
                        Job_Location: yup.string().required("Job_Location Required"),
                        High_Qualification: yup.string().required("High_Qualification Required"),
                        Minimum_CTC: yup.string().required("Minimum_CTC Required"),
                        Maximum_CTC: yup.string().required("Maximum_CTC Required"),

                    })
                }


                onSubmit={
                    (values) => {
                        // alert(_id)
                        console.log(values, "all valu")
                        axios({
                            method: "post",
                            url: `http://127.0.0.1:2000/employerJobs`,
                            data: values
                        })
                            .then(() => {
                                alert("Job Posted");
                                navigate("/emp-main-page")


                            })
                    }
                }


            >
                {
                    < Form >
                        <Employerheader />
                        <div className="job mt-3">
                            <div className="jobpost">
                                <h2> Post Job</h2>
                                <dl>

                                    <dt className="input-group">Job_Title</dt>
                                    <dd><Field type="text" name="Job_Title" className="form-control" placeholder="job_title" /></dd>
                                    <dt className="input-group">Job_Type</dt>
                                    <dd><Field type="text" name="Job_Type" className="form-control" placeholder="Job_Type" /></dd>
                                    <dt className="input-group">Job_Discription</dt>
                                    <dd><Field type="text" name="Job_Discription" className="form-control" placeholder="Job_Discription" /></dd>
                                    <dt className="input-group">Vacancy</dt>
                                    <dd><Field type="text" name="Vacancy" className="form-control" placeholder="Vacancy" /></dd>
                                    <dt className="input-group">Experience</dt>
                                    <dd><Field type="text" name="Experience" className="form-control" placeholder="Experience" /></dd>
                                    <dt className="input-group">Primary_Skill</dt>
                                    <dd><Field type="text" name="Primary_Skill" className="form-control" placeholder="Primary_Skill" /></dd>
                                    <dt className="input-group">Secondary_Skill</dt>
                                    <dd><Field type="text" name="Secondary_Skill" className="form-control" placeholder="Secondary_Skill" /></dd>
                                    <dt className="input-group">Mandatory_Skill</dt>
                                    <dd><Field type="text" name="Mandatory_Skill" className="form-control" placeholder="Mandatory_Skill" /></dd>
                                    <dt className="input-group">Position</dt>
                                    <dd><Field type="text" name="Position" className="form-control" placeholder="Position" /></dd>
                                    <dt className="input-group">Job_Location</dt>
                                    <dd><Field type="text" name="Job_Location" className="form-control" placeholder="Job_Location" /></dd>
                                    <dt className="input-group">High_Qualification</dt>
                                    <dd><Field type="text" name="High_Qualification" className="form-control" placeholder="High_Qualification" /></dd>
                                    <dt className="input-group">Minimum_CTC</dt>
                                    <dd><Field type="text" name="Minimum_CTC" className="form-control" placeholder="Minimum_CTC" /></dd>
                                    <dt className="input-group">Maximum_CTC</dt>
                                    <dd><Field type="text" name="Maximum_CTC" className="form-control" placeholder="Maximum_CTC" /></dd>

                                </dl>
                                <button className="btn btn-primary">Post Job</button>

                            </div>
                        </div>
                    </Form >
                }
            </Formik >
        </div>
    )
}