import { useState, useMemo } from "react";
import CarouselContent from "./carouselContent";

function Carousel() {
  const carousel = useMemo(() => {
    const list = [
      {
        id: 1,
        img: "https://static.wanted.co.kr/images/banners/1490/0b775035.jpg",
        title: "마케팅 주니어를 찾습니다",
        description: "1월 17일(월) 설명회 신청하기",
        link: "https://www.wanted.co.kr/events/pre_onboarding_course_7",
      },
      {
        id: 2,
        img: "https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg",
        title: "개발자 되고싶은 분들!?",
        description: "프론트엔드 무료 교육과정 참여하기",
        link: "https://www.wanted.co.kr/events/pre_onboarding_course_6",
      },
      {
        id: 3,
        img: "https://static.wanted.co.kr/images/banners/1486/fba2df30.jpg",
        title: "성과를 내는 마케팅",
        description: "실제 사례를 공개합니다!",
        link: "https://www.wanted.co.kr/events/wantedcon24",
      },
      {
        id: 4,
        img: "https://static.wanted.co.kr/images/banners/1484/b2853456.jpg",
        title: "성장하는 개발자가 되려면?",
        description: "OOO 검색하지 말 것!",
        link: "https://www.wanted.co.kr/events/livetalk28",
      },
    ];

    const width = 1084;
    const returnList = [list[list.length - 1], ...list, list[0]];
    return {
      bannerWidth: width,
      totalWidth: returnList.lenght * width,
      firstBannerLeft: (window.innerWidth - width) / 2 - width,
      list: returnList,
    };
  }, []);

  const { list, bannerWidth, totalWidth, firstBannerLeft } = carousel;
  const [bannerLeft, setBannerLeft] = useState(firstBannerLeft);
  const [nowBannerId, setNowBannerId] = useState(1);

  const onClickLeft = () => {
    const newBannerLeft = bannerLeft + bannerWidth;
    const newBannerId = nowBannerId - 1 > 0 ? nowBannerId : list.length - 2;
    console.log(newBannerId);
    setNowBannerId(newBannerId);
    setBannerLeft(newBannerLeft);
  };

  const onClickRight = () => {
    const newBannerRight = bannerLeft - bannerWidth;
    console.log(newBannerRight);
    setBannerLeft(newBannerRight);
  };

  return (
    <div className="carousel">
      <div
        className="banner-wrapper"
        style={{
          width: `${totalWidth}px`,
          transform: `translateX(${bannerLeft}px)`,
        }}
      >
        {list.map((content, idx) => {
          return (
            <CarouselContent
              key={`content-${content.id}-${idx}`}
              content={content}
            />
          );
        })}
      </div>
      <button
        type="button"
        className="carousel-button left"
        onClick={onClickLeft}
      >
        <svg viewBox="0 0 18 18">
          <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
        </svg>
      </button>
      <button
        type="button"
        className="carousel-button right"
        onClick={onClickRight}
      >
        <svg viewBox="0 0 18 18">
          <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
        </svg>
      </button>
    </div>
  );
}
export default Carousel;
