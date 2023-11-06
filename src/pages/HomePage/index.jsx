import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, List, PagerIndicator, RatingBar, Text } from "components";
import FreetoWatch from "components/FreetoWatch";
import TopTen from "components/TopTen";
import Action from "components/Action/Index";
import Adventure from "components/Adventure";
import Talk from "components/Talk";
import SciFi from "components/SciFi";
import NewsUpdates from "components/NewsUpdates";
import Music from "components/Music";
import Religious from "components/Religious";
import Emotinal from "components/Emotinal";
import Banners from "components/Banners";
import { useLocation } from "react-router-dom";
import Header1 from "components/Header1";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-opensans items-center justify-start mx-auto py-2 shadow-bs1 w-full">
        <Header1 className=" flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full"
         />

        <div className="h-[514px] md:h-[526px] mt-3 md:px-5 relative w-full">
          <Banners />
        </div>
        <div className="flex flex-col gap-8 items-start justify-start max-w-[1432px] mb-2 mt-8 mx-auto overflow-auto md:px-5 w-full">
          <FreetoWatch />
          <TopTen />
          <Action />
          <Adventure />
          <Talk />
          <SciFi />
          <NewsUpdates />
          <Music />
          <Religious />
          <Emotinal />
          <List
            className="flex flex-col gap-8 items-center w-full"
            orientation="vertical"
          ></List>

          <div className="flex sm:flex-col flex-row gap-8 items-start justify-start md:ml-[0] pl-[54px] w-[100%] md:w-full pt-3" style={{borderTop:"1px solid #2d2d2d"}}>
            <a
              href="javascript:"
              className="text-base text-white-A700"
              style={{ fontSize: "13px" }}
            >
              <Text
                size="txtOpenSansRomanRegular16"
                onClick={() => navigate("/desktop180")}
              >
                Privacy Policy
              </Text>
            </a>
            <a
              href="javascript:"
              className="text-base text-white-A700"
              style={{ fontSize: "13px" }}
            >
              <Text
                size="txtOpenSansRomanRegular16"
                onClick={() => navigate("/desktop181")}
              >
                Disclaimer
              </Text>
            </a>

            <a
              href="javascript:"
              className="text-base text-white-A700"
              style={{ fontSize: "13px" }}
            >
              <Text
                size="txtOpenSansRomanRegular16"
                onClick={() => navigate("/desktop179")}
              >
                Terms and Conditions
              </Text>
            </a>
            <a
              href="javascript:"
              className="text-base text-white-A700"
              style={{ fontSize: "13px" }}
            >
              <Text
                size="txtOpenSansRomanRegular16"
                onClick={() => navigate("/desktop178")}
              >
                Terms Of Use
              </Text>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
