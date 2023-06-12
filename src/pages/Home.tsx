function Home() {
  return (
    <div className="flex flex-col items-center gap-[81px] h-[100%] bg-[url('./assets/home/background-home-mobile.jpg')] bg-no-repeat bg-cover md:bg-[url('./assets/home/background-home-tablet.jpg')] lg:bg-[url('./assets/home/background-home-desktop.jpg')] lg:flex-row lg:px-[165px] lg:justify-between">
      <div className="flex flex-col gap-4 justify-center pt-[112px] px-6 md:px-0 md:pt-[202px] lg:w-[40%] lg:pt-0">
        <h2 className="text-light-blue text-center font-barlow font-normal text-base/[19px] tracking-[2.7px] md:text-xl/[24px] lg:tracking-[3.375px] lg:text-left">
          SO, YOU WANT TO TRAVEL TO
        </h2>
        <h1 className="text-white text-center font-bellefair font-normal text-[80px] leading-[100px] md:text-[150px] md:leading-[150px] lg:text-left">
          SPACE
        </h1>
        <p className="text-light-blue text-center font-barlow font-normal text-[15px] leading-[25px] md:text-[16px] md:leading-[28px] md:px-[162px] lg:px-0 lg:text-left">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <button className="w-[150px] h-[150px] bg-[#fff] rounded-[50%] text-center text=[#0B0D17] font-bellefair font-normal text-[20px] leading-[23px] tracking-[1.25px] md:w-[242px] md:h-[242px] md:text-[32px] md:leading-[37px] md:tracking-[2px]">
        EXPLORE
      </button>
    </div>
  );
}

export default Home;
