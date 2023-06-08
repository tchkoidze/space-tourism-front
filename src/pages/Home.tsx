function Home() {
  return (
    <div className="flex flex-col items-center gap-[81px] h-[100%] bg-[url('./assets/home/background-home-mobile.jpg')] bg-no-repeat bg-cover">
      <div className="flex flex-col gap-4 justify-center pt-[112px] px-6">
        <h2 className="text-light-blue text-center font-barlow font-normal text-base/[19px] tracking-[2.7px]">
          SO, YOU WANT TO TRAVEL TO
        </h2>
        <h1 className="text-white text-center font-bellefair font-normal text-[80px] leading-[100px] ">
          SPACE
        </h1>
        <p className="text-light-blue text-center font-barlow font-normal text-[15px] leading-[25px]">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <button className="w-[150px] h-[150px] bg-[#fff] rounded-[50%] text-center text=[#0B0D17] font-bellefair font-normal text-[20px] leading-[23px] tracking-[1.25px]">
        EXPLORE
      </button>
    </div>
  );
}

export default Home;
