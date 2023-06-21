import Programming from "../assets/programming.svg";

function Experince() {
  // const;
  // const gambar1 = "../assets/engineering.jpg";
  return (
    <div className=" px-60 py-40">
      <div className="grid grid-cols-1 gap-4  md:grid-cols-2 ">
        <div className=" flex flex-1">
          <img src={Programming} alt="" className="bg-cover" />
        </div>
        <div className="text-center">
          <span className="text-2xl md:text-4xl text-blue-600  font-bold">
            Experience
          </span>
          <p className=" mt-5 text-base md:text-2xl font-serif font-semibold text-blue-800">
            <span>work,internship,and self project</span>
          </p>
          <p className="mt-5 text-xl font-mono font-semibold text-blue-900">
            <span>
              i've completed one internship.i've mostly done projects on my own
              and i am actively looking for internships. i love organizing
              workshops to share my knowledge with others
            </span>
          </p>
        </div>
      </div>
      {/* Schedule */}
      <div className=" mt-20">
        <ol className="relative border-l border-gray-200 ">
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-800 dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-3xl font-semibold text-gray-900">
              Internship, Network Administrator
            </h3>
            <h4 className=" flex items-center mb-1 text-base font-semibold text-gray-700">
              PT.Informasi Nusantara Teknologi
            </h4>
            <span className="block mb-2 text-sm font-normal text-gray-500 ">
              Jul-Nov 2020
            </span>
            <ul className="max-w-xl space-y-1 text-gray-500 list-disc list-outside font-normal text-base ">
              <li>Design & Create Topology with vision</li>
              <li>Config DHCP & Static using mikrotik</li>
              <li>New customer internet installation</li>
              <li>Monitoring & troubleshooting using the dude</li>
            </ul>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-800 dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-900">
              Freelance, PM & Front-end Developer
            </h3>
            <h4 className=" flex items-center mb-1 text-base font-semibold text-gray-700">
              Tangkas-Express (logistic)
            </h4>
            <span className="block mb-2 text-sm font-normal text-gray-500 ">
              Dec 2022 - Jan 2023
            </span>
            <ul className="max-w-2xl space-y-1 text-gray-500 list-disc list-outside font-normal text-base ">
              <li>Make a good relation to client and team </li>
              <li>Create landing page simply & responsive using react js </li>
              <li>Deploy to server using Gitlab CI/CD pipeline base shell</li>
              <li>And Make it Good Documentation for the next development</li>
            </ul>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-800 dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-900">
              Freelance, Fullstack Cashier For Coffe Shop
            </h3>
            <h4 className=" flex items-center mb-1 text-base font-semibold text-gray-700">
              Mini Coffe shop on Tanjungpinang
            </h4>
            <span className="block mb-2 text-sm font-normal text-gray-500 ">
              Jul-Nov 2020
            </span>

            <ul className="max-w-3xl space-y-1 text-gray-500 list-disc list-outside font-normal text-base ">
              <li>Design structure Data on Databases with relationship</li>
              <li>Create Admin dashboard using laravel for entry data</li>
              <li>Create Display point of sale for cashier using vite react</li>
              <li>and deploy to server using containerliztion with docker</li>
            </ul>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-800 dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-900">
              Bootcamp,DevOps Engineer
            </h3>
            <h4 className=" flex items-center mb-1 text-base font-semibold text-gray-700">
              Binar Academy
            </h4>
            <span className="block mb-2 text-sm font-normal text-gray-500 ">
              Oct 2022 - Marc 2023
            </span>

            <ul className="max-w-2xl space-y-1 text-gray-500 list-disc list-outside font-normal text-base ">
              <li>Learn & implemetation Linux Administration</li>
              <li>
                Learn & Implementation Docker to Virtual Mechine on GCP and
                Deploy with Gitlab CI/CD pipeline
              </li>
              <li>Learn & Impelementation Kubernetes Cluster on GCP </li>
              <li>
                Learn & Implementation Ansible For Instalation & management
                package on server
              </li>
              <li>
                Learn & Implementation terraform for make it architecure on
                cloud GCP
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Experince;
