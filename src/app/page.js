import HomeHeader from "./components/HomeHeader.jsx";
import GoogleLogo from "./asset/Google_2015_logo.png";
import HomeSearch from "./components/HomeSearch.jsx";
import Image from "next/image";

const page = () => {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center  mt-24 ">
        <Image src={GoogleLogo} alt="Google Logo" width={300} height={100} />
        <HomeSearch />
      </div>
    </>
  );
};

export default page;
