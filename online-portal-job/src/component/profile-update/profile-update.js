import { Field, Formik, Form, ErrorMessage } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie"
import { Employerheader } from "../emp-main-page/emp-header";
import * as yup from "yup";



export function ProfileUpdate() {
    const navigate = useNavigate();
    const [cookies] = useCookies()
    const { _id } = cookies['userData']






    return (


        <Formik

            initialValues={{
                _id,
                Emp_Company_Address: "",
                Emp_Company_Name: "",
                Skill: "",
                Work_Exprence: "",
                Qualification: "",
                Organisation: "",
                Job_Location: "",
                Country_id: "",
                State_id: "",




            }}
            validationSchema={
                yup.object({
                    Emp_Company_Address: yup.string().required("Emp_Company_Address required"),
                    Emp_Company_Name: yup.string().required("Emp_Company_Name required"),
                    Work_Exprence: yup.string().required("Work_Exprence required"),
                    Qualification: yup.string().required("Qualification required"),
                    Organisation: yup.string().required("Organisation required"),
                    Job_Location: yup.string().required("Job_Location required"),
                    Country_id: yup.string().required("Country_id required"),
                    State_id: yup.string().required("State_id required"),






                })
            }

            onSubmit={
                (values) => {
                    // alert(_id)
                    axios({
                        method: "post",
                        url: "http://127.0.0.1:2000/updateProfile",
                        data: values
                    })
                        .then(() => {
                            alert("update Successfully ");
                            navigate("/emp-main-page");


                        })
                }
            }

        >

            {
                <Form>


                    <div>
                        <Employerheader />
                        <div className="w-50 border border-2 p-4 mt-3">
                            <h2>Update Your profile</h2>


                            <div className="form-floating mt-2">
                                <Field type="text" className="form-control" name="Emp_Company_Address" placeholder="Emp_Company_Address" />
                                <label >Emp_Company_Address</label>
                                <p className="text-danger"><ErrorMessage name="Emp_Company_Address" /></p>
                            </div>
                            <div className="form-floating mt-2">
                                <Field type="text" className="form-control" name="Emp_Company_Name" placeholder="Emp_Company_Name" />
                                <label >Emp_Company_Name</label>
                                <p className="text-danger"><ErrorMessage name="Emp_Company_Name" /></p>

                            </div>

                            <div className="form-floating mt-2">
                                <Field type="text" className="form-control" name="Job_Location" placeholder="Job_Location" />
                                <label >Job_Location</label>
                                <p className="text-danger"><ErrorMessage name="Job_Location" /></p>

                            </div>
                            <div className="form-floating mt-2">
                                <Field type="text" className="form-control" name="Skill" placeholder="Skill" />
                                <label >Skill</label>
                                <p className="text-danger"><ErrorMessage name="Skill" /></p>

                            </div>
                            <div className="form-floating mt-2">
                                <Field type="text" className="form-control" name="Work_Exprence" placeholder="Work_Exprence" />
                                <label >Work_Exprence</label>
                                <p className="text-danger"><ErrorMessage name="Work_Exprence" /></p>

                            </div>
                            <div className="form-floating mt-2">
                                <Field type="text" className="form-control" name="Qualification" placeholder="Qualification" />
                                <label >Qualification</label>
                                <p className="text-danger"><ErrorMessage name="Qualification" /></p>

                            </div>
                            <div className="form-floating mt-2">
                                <Field type="text" className="form-control" name="Organisation" placeholder="Organisation" />
                                <label >Organisation</label>
                                <p className="text-danger"><ErrorMessage name="Organisation" /></p>

                            </div>
                            <div className="form-floating mt-2">
                                <Field type="text" className="form-control" name="Country_id" placeholder="Country_id" />
                                <label >Country_id</label>
                                <p className="text-danger"><ErrorMessage name="Country_id" /></p>

                            </div>
                            <div className="form-floating mt-2">
                                <Field type="text" className="form-control" name="State_id" placeholder="State_id" />
                                <label >State_id</label>
                                <p className="text-danger"><ErrorMessage name="State_id" /></p>

                            </div>


                            <div>
                                <button className="btn btn-primary mt-3 w-50">Update</button>
                            </div>



                        </div>



                    </div>
                </Form>
            }
        </Formik >
    )
}