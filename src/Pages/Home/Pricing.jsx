import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import logo from "../../assets/images/price.png"
import useUser from "../../hooks/useUser";

const Pricing = () => {
const [isUser] = useUser();

  return (
    <div className="">

<Helmet>
        <link rel="icon" type="image/svg+xml" href={logo} />
        <title>SurveySeeker || price</title>
      </Helmet>

      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <span className="font-bold tracking-wider uppercase text-orange-500">
              Pricing
            </span>
            <h2 className="text-4xl font-bold lg:text-5xl">
              Choose your best plan
            </h2>
          </div>
          <div className="flex flex-wrap items-stretch -mx-4">
            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
              <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-violet-400 dark:bg-orange-500 text-gray-900 dark:text-gray-50">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold">Pro User</h4>
                  <span className="text-6xl font-bold">
                    $20
                    <span className="text-sm tracking-wide">/Lifetime</span>
                  </span>
                </div>
                <p className="leading-relaxed">
                  If you purchase this membership you will instantly become a
                  user to pro user.
                </p>
                <ul className="flex-1 space-y-2">
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Only pro user commented on surveys</span>
                  </li>
                </ul>
     { isUser ?           <Link
                to={`/payments`}
                  rel="noopener noreferrer"
                  href="#"
                  
                >
                  <button className="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded bg-gray-800 dark:bg-gray-100 text-violet-400 dark:text-orange-500">BUY MEMBERSHIP</button>
                </Link>
                
                : 
                
                <Link
               
                  rel="noopener noreferrer"
                  href="#"
                  
                >
                  <button className="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded bg-[#f0faf4] text-violet-400 dark:text-orange-500 uppercase" disabled>only user buy this membership</button>
                </Link>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
