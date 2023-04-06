import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"
import { Employerheader } from "./emp-header"


export function AppliedCandidate() {
    const [posted, setPosted] = useState([])
    const [cookies] = useCookies()
    const navigate = useNavigate()

    const { _id } = cookies['userData']
    if (_id == undefined) {
        navigate("/")
    }




    useEffect(() => {
        axios({
            method: "get",
            url: `http://127.0.0.1:2000/empApplied?id=${_id}`

        }).then((response) => {
            console.log(...response.data.result, "set all data")
            setPosted(...response.data.result)

        })

    }, [])
    console.log(posted, "get all data")
    

        return (
            <div>
                <Employerheader />
                <div className="table table-border-hover border border-3 w-75 p-4">
                    <thead>
                        <th>Fullname</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Current_CTC</th>
                        <th>Prefer_Work-location</th>
                        <th>Work_Exprence</th>
                    </thead>
                    <tbody>
                        {
                            posted.map(post =>
                                <tr key={post._id}>
                                    <td>{post.Candidate_ID.Fullname}</td>
                                    <td>{post.Candidate_ID.Email}</td>
                                    <td>{post.Candidate_ID.Mobile}</td>
                                    <td>{post.Candidate_ID.Current_CTC}</td>
                                    <td>{post.Candidate_ID.Prefer_Work_location}</td>
                                    <td>{post.Candidate_ID.Work_Exprence}</td>

                                </tr>

                            )
                        }
                    </tbody>

                </div>
            </div>
        )
   
}


