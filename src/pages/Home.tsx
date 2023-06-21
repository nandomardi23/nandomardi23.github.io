import "@fontsource/poppins/800.css";
import denny from "../assets/png-transparent-youtube-ghost-drawing-nickelodeon-strength-hand-logo-sports-equipment.svg";

export default function Home() {
  return (
    <main className=" sm:px-0 sm:py-32  py-20 md:px-28">
      <div className="sm:grid sm:grid-cols-1 sm:gap-3 md:grid md:grid-cols-2 md:gap-5 w-full px-32">
        <div className="xs:px-0  md:py-8 text-left  content-center">
          <span className="text-4xl font-bold font-sans ">Hellow Guys</span>
          <p className=" text-4xl font-bold font-mono">Im Fernando Mardi N</p>
          <br />
          <p className="text-lg font-medium text-justify w-auto tracking-wide ">
            Im DevOps enginner & Web Developer, i have experience 1 years less,
            i'm so familiar for tools docker and kubernetes for
            containerlization & i have anthusies a IaC using terraform, ansible
            for management configuration and CI/CD pipeline using gitlab,
            familiar monitoring & logging using loki grafana & promethues.
          </p>
        </div>
        <div className="py-8 ml-20 sm:mt-5 md:grid  md:py-8 md:ml-52">
          <img
            src={denny}
            alt=""
            className=" bg-slate-300 rounded-full w-52 h-52 "
          />
        </div>
      </div>
      <div className=""></div>
    </main>
  );
}
