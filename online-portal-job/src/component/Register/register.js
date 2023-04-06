import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import '../Register/register.css'
import * as yup from "yup"

export function Register() {
    const navigate = useNavigate();
    return (
        <div>
            <Formik
                initialValues={{
                    Fullname: "",
                    Email: "",
                    Password: "",
                    Mobile: "",
                    Role: ""

                }}
                validationSchema={
                    yup.object({
                        Fullname: yup.string().required("Name Required"),
                        Email: yup.string().required("Email Required").email("Invalid Email"),
                        Password: yup.string().required("Password Required").matches(/(?=.*[A-Z])\w{4,15}/, "Password 4 to 15 chars with atleast one uppercase letter"),
                        Mobile: yup.string().required("Mobile Required").matches(/\+91\d{10}/, "Invalid Mobile +91 and 10 digits"),
                        // Role: yup.object().shape({ select: yup.string().required("Role Required") })
                    })
                }
                onSubmit={
                    (values) => {
                        axios({
                            method: "post",
                            url: "http://127.0.0.1:2000/Register",
                            data: values
                        })
                            .then(() => {
                                alert("Register Success");
                                navigate("/");


                            })
                    }
                }
            >

                {<Form>

                    <div className=" register-form ">
                        <div className="register">
                            <h1 align="center" className="mb-3"><b>Register here</b></h1>

                            <div >
                                <label >Fullname</label>
                                <Field type="text" className="form-control" name="Fullname" placeholder="Fullname" />
                                <p className="text-danger"><ErrorMessage name="Fullname" /></p>
                            </div>

                            <div>
                                <label >Email address</label>
                                <Field type="email" className="form-control" name="Email" placeholder="Email" />
                                <p className="text-danger"><ErrorMessage name="Email" /></p>

                            </div>


                            <div className="mb-2">
                                <label >Password</label>
                                <Field type="password" name="Password" className="form-control" placeholder="Password" />
                                <p className="text-danger" ><ErrorMessage name="Password" /> </p>

                            </div>
                            <div className="mb-2">
                                <label >Mobile</label>
                                <Field type="text" name="Mobile" className="form-control" placeholder="Mobile" />
                                <p className="text-danger"><ErrorMessage name="Mobile" /></p>

                            </div>

                            <div className="mb-2">

                                <label>Role</label>
                                <Field className="form-select" as="select" name="Role">
                                    <option value="-1">--Choose--</option>
                                    <option value="Candidate">Candidate</option>
                                    <option value="Employer">Employer</option>
                                </Field>
                                {/* <p className="text-danger"><ErrorMessage name="Role" /></p> */}
                            </div>

                            <div className="mt-3">
                                <button
                                    className="btn btn-info  w-100">Register</button>
                            </div>

                            <p className="text-center mt-3">You Have already an account?
                                <Link to="/" ><b>  Login here</b></Link></p>


                        </div>
                    </div>
                </Form>}
            </Formik>
        </div>
    )
}