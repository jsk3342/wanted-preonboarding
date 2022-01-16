const CarouselContent = ({ content }) => {
  return (
    <div
      className="carousel-banner"
      style={{ backgroundImage: `url(${content.img})` }}
    >
      <div className="banner-text">
        <h2>{content.title}</h2>
        <div>{content.description}</div>
        <button type="button" onClick={() => window.open(`${content.link}`)}>
          바로가기
          <svg viewBox="0 0 18 18">
            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
export default CarouselContent;
