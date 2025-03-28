/* eslint-disable react/no-unescaped-entities */

import InfinityNav from "../components/InfinityNav";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

/* eslint-disable react/jsx-no-target-blank */
// eslint-disable-next-line no-shadow-restricted-names
const Infinity = () => {
  return (
    <div className="bg-black">
      <div className="h-screen flex flex-col relative">
        <Helmet>
          <title>Infinity 2k25 - Coding Contest</title>
          <meta
            name="description"
            content="Infinity is IIIT Pune’s 2-hour Annual Flagship coding contest on CodeChef, featuring ACM style scoring. Showcase your top-tier problem-solving skills and data structure and algorithm efficiency for a thrilling coding experience."
          />
          <script type="application/ld+json">
            {`
              {
                "@context": "http://schema.org",
                "@type": "Event",
                "name": "Infinity 2k25 - Coding Contest",
                "description": "Infinity is IIIT Pune’s 2-hour Annual Flagship coding contest on CodeChef, featuring ACM style scoring. Showcase your top-tier problem-solving skills and data structure and algorithm efficiency for a thrilling coding experience.",
                "startDate": "2023-03-26T20:00:00Z",
                "endDate": "2023-03-26T22:00:00Z",
                "location": {
                  "@type": "Place",
                  "name": "IIIT Pune",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Ambegoan bk",
                  "addressLocality": "Pune",
                  "addressRegion": "Maharashtra",
                  "postalCode": "411041",
                  "addressCountry": "India"
                }
              },
              "performer": {
                "@type": "Organization",
                "name": "Bit Legion - IIIT Pune"
              }
            }
          `}
          </script>
        </Helmet>

        <InfinityNav />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex-col">
            {/* <div className="flex justify-center pt-24 pb-14 mx-3 lg:mx-0 lg:p-8 items-center "> */}
            <div className="flex justify-center mt-6 mb-6 lg:mb-2 scale-125 sm:scale-120 md:scale-100">
              {/* <img
                src="/images/logo27.jpg"
                alt="Infinity Logo"
                className="w-full scale-125 sm:scale-110  md:scale-100"
              /> */}
              <h1 className="text-white  py-6 md:py-12 lg:py-18 text-6xl sm:text-8xl md:text-9xl lg:text-103xl flex justify-center font-nightcore tracking-wider">
            <span className="text-red-600">I</span>NFINIT<span className="text-red-600">Y</span>
            </h1>
            </div>
            {/* <div className="text-white flex flex-col items-center gap-2 -p-10 justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-miso"> */}
            <div className="text-white flex flex-col items-center gap-2 justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-miso">
              <span className="">HOSTED ON</span>
              {/* <span className="font-nightcore text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"> */}
              <span className="font-nightcore text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                <a
                  target="_blank"
                  href="https://www.codechef.com/"
                  rel="noopener"
                >
                  CODE <span className="text-red-600">CHEF</span>
                </a>
              </span>
              <span>
                <a
                  target="_blank"
                  href="https://www.codechef.com/START179"
                  rel="noopener"
                >
                  ( AS STARTERS 179 )
                </a>
              </span>
            </div>

            {/* <div className="text-white flex justify-center pr-5 md:pr-0 text-xl sm:text-2xl lg:text-3xl font-miso"> */}
            <div className="text-white flex justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-miso">
              <div className="flex flex-col md:flex-row gap-2 my-2 md:mt-5">
                {/* <div className="flex items-center -mb-3 lg:-mt-8"> */}
                <div className="flex items-center justify-center">
                  <div className="flex items-center justify-center -ml-1">
                    <img
                      src="/images/cal-26.jpg"
                      alt="26 MAR"
                      width={50}
                      className="w-5/12 md:w-2/3"
                    />
                  </div>
                  MAR 26’ 2025
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex items-center justify-center">
                    <img
                      src="/images/Alarm.png"
                      alt="26 Apr"
                      width={50}
                      className="w-5/12 md:w-2/3"
                    />
                  </div>
                  20:00 - 22:00
                </div>
                {/* <div className="font-miso text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-400">
                  COMING &nbsp;
                  <span className="text-gray-400">SOON</span>
                </div> */}
              </div>
            </div>
            {/* <div className="text-white flex justify-center pt-5 lg:pt-0 lg:-mt-4"> */}
{/*             <div className="text-white flex items-center mt-4 justify-center">
              <a
                href="https://forms.gle/jSfd6d27ZLL58rix8"
                target="_blank"
                rel="noopener"
              >
                <h1 className="border border-1 border-white px-5 md:px-8 lg:px-14 py-2 md:py-4 lg:py-6 rounded-2xl sm:text-3xl md:text-4xl lg:text-5xl font-nightcore">
                  Register &nbsp; <span className="text-red-600">Now</span>
                </h1>
              </a>
            </div> */}
          </div>
        </div>
      </div>

      <div className="h-full text-white py-8" id="about">
        <h1 className="flex justify-center font-nightcore text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-widest py-4 sm:py-8 md:py-12 lg:py-16">
          ABOUT THE CO<span className="text-red-600">N</span>TEST
        </h1>
        <div className="text-white text-base sm:text-xl md:text-2xl lg:text-3xl space-y-6  text-justify leading-relaxed px-10 sm:px-20 py-10 lg:py-12 font-miso">
          <p className="font-miso text-xl lg:text-3xl text-justify">
            Welcome to InfInITy 2k25, the{" "}
            <span className="text-red-600">eighth installment</span> of IIIT
            Pune's flagship annual coding contest! If you have a passion for
            coding and a competitive spirit, this event is tailor-made for you.
          </p>
          <p className="font-miso text-xl lg:text-3xl text-justify">
            InfInITy made its debut in 2017 and has since evolved into a
            thrilling coding contest that attracts participants from all over
            globe. Initially limited to IIIT Pune, it has now become a
            prestigious event open to coding enthusiasts everywhere.
          </p>
          <p className="font-miso text-xl lg:text-3xl text-justify">
            InfInITy is a <span className="text-red-600">2-hour coding</span>{" "}
            challenge that promises to keep you on the edge of your seat.
            Whether you're a beginner taking your first steps in the world of
            coding or an experienced coder looking for a new challenge, we have
            problems designed to test and elevate your coding skills.
          </p>
          <p className="font-miso text-xl lg:text-3xl text-justify">
            Whether you're a student, a professional, or simply someone who
            loves to solve problems through code, you're welcome to join us for
            InfInITy 2k25.
          </p>
          <p className="font-miso text-xl lg:text-3xl text-justify">
            Mark your calendars and get ready for an adrenaline-pumping coding
            experience at <span className="text-red-600">InfInITy 2k25!</span>
          </p>
        </div>
        <div className="text-center text-white mb-20">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-miso">
            PRIZE POOL
          </h3>
          <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-8xl xl:text-9xl py-2 text-center text-white font-normal font-miso">
            INR 30K
          </h1>
        </div>
        {/* <div className="text-center text-white">
          <h3 className="text-5xl font-miso">PRIZE POOL</h3>
          <h1 className="text-center text-5xl text-white lg:text-9xl font-miso">
            INR 35K
          </h1>
        </div> */}
      </div>

      <div className="bg-black">
        
      </div>
    </div>
  );
};

export default Infinity;
