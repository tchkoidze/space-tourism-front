import axios from "axios";
import { useEffect, useState } from "react";
interface Crew {
  _id: string;
  name: string;
  images: { png: string; webp: string };
  role: string;
  bio: string;
}

const url = import.meta.env.VITE_BACK_URL;

function Crew() {
  const [crew, setCrew] = useState<Crew[] | null>(null);
  const [crewMember, setCrewMember] = useState<Crew[] | null>();

  useEffect(() => {
    const getCrewData = async () => {
      const response = await axios.get(
        "https://space-tours.herokuapp.com/api/crew"
      );
      setCrew(response.data);
      console.log(response.data);

      const crewMemberData = await response.data.filter(
        (c: Crew) => c.role === "Commander"
      );
      setCrewMember(crewMemberData);
    };

    getCrewData();
  }, []);
  console.log(crewMember);
  return (
    <div className="h-[100%] bg-[url('./assets/crew/background-crew-mobile.jpg')] bg-no-repeat bg-cover px-[24px] text-white md:bg-[url('./assets/crew/background-crew-tablet.jpg')] lg:bg-[url('./assets/crew/background-crew-desktop.jpg')] lg:pl-[166px] lg:pr-[137px]">
      <div className="flex gap-[18px] justify-center  pt-[88px] font-barlow font-normal text-base/[19px] tracking-[2.7px] uppercase md:pt-[136px] md:justify-start md:text-xl/[24px] md:tracking-[3.75px] lg:hidden">
        <span className="text-white/[0.25] ">02</span>
        <h2 className="inline-block">Pick your destination</h2>
      </div>
      {/*crewMember && crewMember.length > 0 && (
        <img
          className="w-[177px] h-[222px] mx-auto mt-[32px]"
          //src={crewMember[0].images.png}
          src={`${url}${crewMember[0].images["png"]}`}
          alt=""
        />
      )*/}

      {crewMember && crewMember.length > 0 && (
        <div className="md:flex md:flex-col-reverse md:mt-[60px] lg:flex-row-reverse lg:mt-0 lg:pt-[198px] lg:gap-[81px]">
          <img
            className="w-[177px] h-[222px] mx-auto mt-[32px] md:hidden"
            //src={crewMember[0].images.png}
            src={`${url}${crewMember[0].images["png"]}`}
            alt=""
          />
          <div
            style={{
              backgroundImage: `url(${url}${crewMember[0].images["webp"]}`,
              backgroundRepeat: "no-repeat",
              /*backgroundSize: "456px 572px",*/
              backgroundPosition: "top center",
            }}
            className="hidden md:bg-[length:456px_572px] md:w-[63.4%] md:h-[532px] md:flex md:self-center lg:bg-[length:568px_702px] lg:w-[50%] lg:h-[702px]"
          ></div>
          <div className="border-t border-[#383B4B] md:flex md:flex-col-reverse md:border-none lg:w-[43%]">
            <div className="flex gap-4 justify-center my-[32px] md:my-[40px] lg:my-0 lg:mt-[120px] lg:mb-[94px] lg:justify-start lg:gap-[24px]">
              {crew?.map((c) => {
                return (
                  <button
                    key={c.name}
                    className={`w-[10px] h-[10px] rounded-[50%] bg-white/[0.17] ${
                      crewMember &&
                      crewMember.length > 0 &&
                      c.name === crewMember[0].name
                        ? "bg-white/[1]"
                        : undefined
                    }`}
                    onClick={() => {
                      const newMember = crew.filter((n) => n.name === c.name);
                      setCrewMember(newMember);
                    }}
                  ></button>
                );
              })}{" "}
            </div>
            <div>
              <div className="hidden lg:flex gap-[18px] justify-center  uppercase md:justify-start  lg:text-[28px] lg:leading-[34px] lg:tracking-[4.725px] lg:mb-[154px]">
                <span className="text-white/[0.25] ">02</span>
                <h2 className="inline-block">Pick your destination</h2>
              </div>
              <h3 className="font-bellefair font-normal text-base/[18px] text-white/[0.5] text-center  uppercase mb-[8px] md:text-2xl/[28px] lg:text-[32px] lg:leading-[37px] lg:mb-[15px] lg:text-left">
                {crewMember[0].role}
              </h3>
              <h1 className="font-bellefair font-normal text-[24px] leading-[28px] text-center uppercase md:text-[40px] md:leading-[46px] lg:text-[56px] lg:leading-[64px] lg:text-left">
                {crewMember[0].name}
              </h1>
              <p className="font-barlow font-normal text-[15px] leading-[25px] text-light-blue text-center mt-[16px] mb-[104px] md:text-base/[28px] md:mb-0 md:px-[131px] lg:text-lg/[32px] lg:mt-[27px] lg:px-0 lg:text-left">
                {crewMember[0].bio}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Crew;
