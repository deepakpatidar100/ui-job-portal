
import { Formik, Form, Field, } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import '../Login-Component/login.css'
import { useCookies } from "react-cookie"



export function Login() {
    const [cookie, setCookies, removeCookies] = useCookies()
    const navigate = useNavigate()
    return (
        <div >
            <Formik
                initialValues={{
                    "Email": "",
                    "Password": "",
                    "Role": ""
                }}
                onSubmit={
                    (values) => {
                        axios({
                            method: "post",
                            url: "http://127.0.0.1:2000/Login",
                            data: values
                        })
                            .then((result) => {
                                // console.log(result)
                                if (result.data.success != true) {
                                    alert(result.data.massage)

                                }
                                setCookies("userData", ...result.data.result)
                                // console.log(result.data.result[0].Role, "result.data.result[0].Role");
                                // console.log(result.data.result[0].Role === "Employer", "result.data.result[0].Role");
                                // navigate("/user-main")
                                if (result.data.result[0].Role === "Employer") {
                                    navigate("/emp-main-page")
                                }
                                else if (result.data.result[0].Role === "Candidate") {
                                    // alert("Login Success 22")
                                    navigate("/can-main-page")
                                }
                                else {
                                    navigate("/")
                                }
                            })
                    }
                }
            >
                {
                    <Form>

                        <div className=" home">
                            <div className="home-m">
                                <h3 className="text-center">Login</h3>
                                <div className="mb-2">
                                    <label>Email address</label>
                                    <Field    type="email"  name="Email" className="form-control" placeholder="Enter email"/>
                                </div>
                                <div className="mb-2">
                                    <label>Password</label>
                                    <Field type="password" name="Password" className="form-control" placeholder="Enter password" />
                                </div>
                                <div className="mb-2">
                                    <label>Role</label>
                                    <Field as="select" name="Role" className="form-control">
                                        <option value="-1">--Choose--</option>
                                        <option value="Employer">Employer</option>
                                        <option value="Candidate">Candidate</option>

                                    </Field >

                                </div>



                                <div className="d-grid mt-3">
                                    <button type="submit" className="btn btn-primary">
                                        Login
                                    </button>
                                </div>
                                <p className=" text-right mt-2">
                                    <a href="#"> <b>Forgot Password?</b></a>
                                </p>
                                <p> If You Don't have an Account ? <Link to="/register"><b> Register Here</b> </Link></p>



                            </div>
                        </div>
                    </Form>
                }
            </Formik>
        </div >
    )
}

