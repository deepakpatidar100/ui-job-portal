import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../Login-Component/Login";
import { Register } from "../Register/register";
import { EmployerHome } from "../emp-main-page/emp-main-page";
import { CandidateHome } from "../can-main-page/can-main-page";
import { ProfileUpdate } from "../profile-update/profile-update";
import { GetJob } from "../can-main-page/getjob";
import { CandidateProfile } from "../can-main-page/can-profile-update";
import { JobPost } from "../post-job/job-post";
import { JobList } from "../can-main-page/joblisted";
import { EmpPosted } from "../emp-main-page/emp-postedjob";
import { CandidateApplied } from "../can-main-page/can-applied";
import { AppliedCandidate } from "../emp-main-page/applied-can";






export function HomePage() {
    return (
        <BrowserRouter>
            <div >
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile-update" element={<ProfileUpdate />} />
                    <Route path="/emp-main-page" element={<EmployerHome />} />
                    <Route path="/can-main-page" element={<CandidateHome />} />
                    <Route path="/getjob" element={<GetJob />} />
                    <Route path="/can-profile-update" element={<CandidateProfile />} />
                    <Route path="job-post" element={<JobPost />} />
                    <Route path="joblisted/:id" element={<JobList />} />
                    <Route path="/emp-postedjob" element={<EmpPosted />} />
                    <Route path="/can-applied" element={<CandidateApplied />} />
                    <Route path="/applied-can" element={<AppliedCandidate />} />     {/*applied by candidate and see job by Employer */ }

                </Routes>

            </div>
        </BrowserRouter>
    )
}