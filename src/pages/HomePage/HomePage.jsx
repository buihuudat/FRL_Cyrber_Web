// File HomePage.js
import React from "react";
import Carousel from "./Carousel/Carousel";
import HomeIntro from "./Carousel/HomeIntro";
import Banner from "./Banner";
import TopTech from "./TopTech";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomePage = () => {
  return (
    <div className="bg-white">
      <Carousel />
      <HomeIntro />
      <Banner />
      <TopTech />

      <div className="flex flex-row justify-center p-5 h-[500px] gap-5 md:gap-10 md:max-w-[1000px] mx-auto">
        <div className="w-[40%] md:w-[50%] h-[120px] md:h-[300px] flex flex-row justify-end">
          <img
            style={{
              background: "pink",
              borderRadius: "5px 50% 50% 50%",
              objectFit: "cover",
            }}
            className="w-[100px] md:w-[200px] xl:[300px]"
            src="https://demo2.cybersoft.edu.vn/static/media/avatarReview.2f5a1f3c.png"
            alt="center"
          />
        </div>

        <div className="w-[50%]">
          <p className="text-neutral-900">
            Chương trình giảng dạy được biên soạn dành riêng cho các bạn Lập
            trình từ trái ngành hoặc đã có kiến thức theo cường độ cao, luôn
            được tinh chỉnh và tối ưu hóa theo thời gian bởi các thành viên sáng
            lập và giảng viên dày kinh nghiệm.Thực sự rất hay và hấp dẫn
            <p style={{ color: "pink" }}>Nhi Dev</p>
            Học viên xuất sắc
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;