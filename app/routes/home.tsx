import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "~/constants";
import ResumeCard from "~/components/ResumeCard";
import {usePuterStore} from "~/lib/puter";
import {useLocation, useNavigate} from "react-router";
import {useEffect} from "react";



export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job" },
  ];
}

export default function Home() {
    const { auth} = usePuterStore();
    const navigate = useNavigate();

    useEffect(()=>{
        if(!auth.isAuthenticated) navigate("/auth?next=/");
    },[auth.isAuthenticated])

  return <main className="bg-[url('/images/bg-main.svg')] bg-cover items-center">
      <Navbar/>
    <section className='main-section py-16'>
        <div className='page-heading'>
            <h1>Track your application & Resume Ratings!</h1>
            <h2>Review your submission and check AI_Powered feedback!</h2>
        </div>
        {resumes.length > 0 && (
            <div className="resumes-section">
                {resumes.map((resume)=>{
                    return <ResumeCard key={resume.id} resume={resume}/>
                })}
            </div>
        )}
    </section>


  </main>;
}
