function carousel() {
  const carouselContent = [
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
  ];

  return (
    <div className="carousel">
      {carouselContent.map(content => {
        return (
          <div
            key="`content-${content.id}`"
            className="carousel-banner"
            style="background-image: url('')"
          >
            dd
          </div>
        );
      })}
    </div>
  );
}
export default carousel;
