import Slider from 'react-slick';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderOldProjects = (props) => {
  const pictures = props.jobsList.flatMap((eachJob) =>
    eachJob.pictures.map((eachImg, index) => (
      <div key={index}>
        {' '}
        <div className="sectionResume3__container2">
          {' '}
          <img
            src={eachImg.img}
            alt={`Picture of ${eachImg.name}`}
            className="sectionResume3__container2--img"
          />
        </div>
      </div>
    ))
  );
  const settings = {
    // arrows: false,
    // autoplay: true,
    // autoplaySpeed: 3000,
    // fade: true,
    // adaptiveHeight: true,
    dots: true,
    centerMode: true,
    centerPadding: '40px',
    pauseOnHover: true,
    infinite: true,
    speed: 100,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return <Slider {...settings}>{pictures}</Slider>;
};

export default SliderOldProjects;

SliderOldProjects.propTypes = {
  jobsList: PropTypes.array.isRequired,
};
