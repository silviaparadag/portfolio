import Slider from 'react-slick';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderOldProjects = (props) => {
  const pictures = props.jobsList.flatMap((eachJob) =>
    eachJob.pictures.map((eachImg, index) => (
      <div key={index} className="sectionResume3__container2">
        <img
          src={eachImg.img}
          alt={`Picture of ${eachImg.name}`}
          className="sectionResume3__container2--img"
        />
      </div>
    ))
  );
  const settings = {
    // arrows: false,
    dots: true,
    centerMode: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
    // fade: true,
    // adaptiveHeight: true,
    centerPadding: '40px',
    pauseOnHover: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return <Slider {...settings}>{pictures}</Slider>;
};

export default SliderOldProjects;

SliderOldProjects.propTypes = {
  jobsList: PropTypes.array.isRequired,
};
