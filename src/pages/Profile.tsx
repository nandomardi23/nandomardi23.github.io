// import React from "react";
import Profile1 from "../assets/profile.svg";

function Profile() {
  return (
    <div className="px-60 py-40">
      <div className=" grid sm:grid-cols-1 gap-20 md:grid-cols-2  ">
        <div>
          <img src={Profile1} className=" bg-cover" />
        </div>
        <div className=" space-y-5">
          <div className="text-center ">
            <span className="text-3xl font-extrabold font-sans text-blue-700">
              My Name Fernando Mardi Nurzaman
            </span>
          </div>
          <div className="indent-8 text-justify sm:mt-5 sm:ml-0 md:ml-20 max-w-lg text-xl font-sans font-semibold text-slate-500">
            <p>
              Im from Indonesia, Im DevOps Enginner & Web Developer, i have
              experience 1 years less, i'm so familiar for tools docker and
              kubernetes for containerlization & i have anthusies a IaC using
              terraform, ansible for management configuration and CI/CD pipeline
              using gitlab, familiar monitoring & logging using loki grafana &
              promethues.
            </p>
          </div>
        </div>
        <div className=" grid grid-cols-2 gap-5 mt-20">
          <div className="border max-w-xl h-80 text-start">
            <h2 className=" font-bold text-4xl font-sans underline underline-offset-4 decoration-blue-500 text-blue-700">
              Skills
            </h2>
            <p>
              <img src="" alt="" />
            </p>
          </div>
          <div className="border"> test</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
