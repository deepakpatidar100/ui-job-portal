import { Field, Formik, Form } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react"

import { useCookies } from "react-cookie";
import { CandidateHeader } from "./can-header";



export function CandidateProfile() {
    const [cookies] = useCookies()
    const navigate = useNavigate()
    const { _id } = cookies['userData']

    return (
        <div >
            <Formik
                initialValues={{



                    _id,
                    Mobile: "",
                    Qualification: "",
                    Prefer_Work_location: "",
                    Expected_CTC: "",
                    Current_CTC: "",
                    Primary_Skill: "",
                    Work_Exprence: "",
                
                    // Resume: ""

                }}


                onSubmit={
                    (values) => {
                        // alert(_id)


                        axios({
                            method: "post",
                            url: "http://127.0.0.1:2000/updateProfile",
                            data: values

                        }).then(() => {
                            alert("profile updated")
                            navigate("/can-main-page")
                        })
                    }
                }

            >

                <Form>
                    <div>
                        <CandidateHeader />


                        <div className="w-50 border border-2 p-4 mt-3">
                            <h2>Update Your profile</h2>

                            <div className="form-floating mt-2">
                                <Field type="text" className="form-control" name="Mobile" placeholder="Mobile" />
                                <label >Mobile</label>
                            </div>
                            <div className="form-floating mt-2">
                                <Field type="text" className="form-control" name="Qualification" placeholder="Qualification" />
                                <label >Qualification</label>
                            </div>
                            <div className="form-floating mt-2">
                                <Field type="text" className="form-control" name="Prefer_Work_location" placeholder="Prefer_Work_location" />
                                <label >Prefer_Work_location</label>
                            </div>
                            <div className="form-floating mt-2">
                                <Field type="text" className="form-control" name="Expected_CTC" placeholder="Expected_CTC" />
                                <label >Expected_CTC</label>
                            </div>
                            <div className="form-floating mt-2">
                                <Field type="text" className="form-control" name="Current_CTC" placeholder="Current_CTC" />
                                <label >Current_CTC</label>
                            </div>
                            <div className="form-floating mt-2">
                                <Field type="text" className="form-control" name="Primary_Skill" placeholder="Primary_Skill" />
                                <label >Primary_Skill</label>
                            </div>
                            <div className="form-floating mt-2">
                                <Field type="text" className="form-control" name="Work_Exprence" placeholder="Work_Exprence" />
                                <label >Work_Exprence</label>
                            </div>

                        
                           
                            {/* 
                            <div className="input-group mt-4">
                                <label className="input-group-text bg-primary" >Resume</label>
                                <Field type="file" name="Resume" className="form-control" placeholder="Resume" />
                            </div> */}


                            <button className="btn btn-primary mt-2">Update</button>
                        </div>
                    </div>
                </Form>
            </Formik>

        </div>
    )
}