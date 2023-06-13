import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_BACK_URL;

interface Technology {
  _id?: string;
  name: string;
  images: { portrait: string; landscape: string };
  description: string;
}

function Technology() {
  const [techs, setTechs] = useState<Technology[] | null>(null);
  const [tech, setTech] = useState<Technology[] | null>(null);

  useEffect(() => {
    const getTechnologyData = async () => {
      const response = await axios.get(
        "https://space-tours.herokuapp.com/api/technology"
      );
      setTechs(response.data);
      console.log(response.data);
      const techData = await response.data.filter(
        (x: Technology) => x.name === "Launch vehicle"
      );
      setTech(techData);
    };
    getTechnologyData();
  }, []);
  console.log(tech);
  return (
    <div className="min-h-full bg-[url('./assets/technology/background-technology-mobile.jpg')] bg-no-repeat bg-cover text-white md:bg-[url('./assets/technology/background-technology-tablet.jpg')]">
      <div className="flex gap-[18px] justify-center  pt-[88px] font-barlow font-normal text-base/[19px] tracking-[2.7px] md:justify-start md:pt-[136px] md:ml-[39px] md:text-xl/[24px] md:tracking-[3.75px] md:pt[136px] lg:pt-[212px] lg:text-[28px] lg:leading-[34px] lg:ml-[166px] lg:mb-[26px]">
        <span className="text-white/[0.25] ">03</span>
        <h2 className="inline-block">SPACE LAUNCH 101</h2>
      </div>
      {tech && tech.length > 0 && (
        <div className="lg:flex lg:flex-row-reverse lg:gap-[130px] items-center">
          <img
            className="w-[100%] h-[170px]  mt-[32px] mb-[34px] md:mt-[60px] md:mb-[57px] md:h-[310px] lg:m-0 lg:hidden"
            src={`${BASE_URL}${tech[0].images["portrait"]}`}
            //src={tech[0].images.portrait}
            alt=""
          />
          <img
            className="hidden lg:inline lg:w-[35.76%] lg:h-[527px]"
            //src={tech[0].images.portrait}
            src={`${BASE_URL}${tech[0].images["portrait"]}`}
            alt=""
          />
          <div className="lg:flex lg:flex-row lg:ml-[165px] gap-[80px]">
            <div className="flex gap-4 justify-center lg:flex-col lg:gap-8">
              {techs?.map((t, index) => {
                const btnTxt = index + 1;
                return (
                  <button
                    className={`font-bellefair font-normal text-[16px]/[18px] tracking-[1px] w-[40px] h-[40px] border border-white rounded-[50%] ${
                      tech && tech.length > 0 && t.name === tech[0].name
                        ? "bg-white text-[#0B0D17]"
                        : undefined
                    } md:w-[60px] md:h-[60px]`}
                    key={t.name}
                    onClick={() => {
                      const nextTech = techs.filter((z) => z.name === t.name);
                      setTech(nextTech);
                    }}
                  >
                    {btnTxt}
                  </button>
                );
              })}
            </div>

            <div>
              <p className="font-barlow font-normal text-sm/[17px] tracking-[2.36px] text-light-blue text-center mt-[26px] mb-[9px] md:text-[16px] md:leading-[19px] md:tracking-[2.7px] md:mt-[44px] md:mb-[16px] lg:mt-0 lg:mb-[11px] lg:text-left">
                THE TERMINOLOGY…
              </p>
              <h1 className="font-bellefair font-normal text-2xl/[28px] text-center uppercase md:text-[40px] md:leading-[46px] lg:text-[56px] lg:leading-[64px] lg:text-left">
                {tech[0].name}
              </h1>
              <p className="font-barlow font-normal text-[15px] leading-[25px] text-light-blue text-center mt-[16px] mb-[56px] px-6 h-[150px] md:mb-[97px] md:px-[155px] md:h-[140px] md:text-[15px] md:leading-[25px] lg:mt-[17px] lg:mb-0 lg:p-0 lg:text-left lg:mr-[46px]">
                {tech[0].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Technology;
