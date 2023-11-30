import Slider from 'react-slick';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderOldProjects = (props) => {
  //   const pictures = [
  //     'https://silviaparadag.github.io/api-sp/projects-portfolio/images-timeline/ap-cc.jpg',
  //     'https://silviaparadag.github.io/api-sp/projects-portfolio/images-timeline/rta-hl.jpg',
  //     'https://silviaparadag.github.io/api-sp/projects-portfolio/images-timeline/ap-cc.jpg',
  //     'https://silviaparadag.github.io/api-sp/projects-portfolio/images-timeline/rta-hl.jpg',
  //     'https://silviaparadag.github.io/api-sp/projects-portfolio/images-timeline/ap-cc.jpg',
  //     'https://silviaparadag.github.io/api-sp/projects-portfolio/images-timeline/rta-hl.jpg',
  //     'https://silviaparadag.github.io/api-sp/projects-portfolio/images-timeline/ap-cc.jpg',
  //     'https://silviaparadag.github.io/api-sp/projects-portfolio/images-timeline/ap-cc.jpg',
  //   ];
  const pictures = props.jobsList.flatMap((eachJob) =>
    eachJob.pictures.map((eachImg) => eachImg.img)
  );

  console.log(pictures);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {pictures.map((eachPic, index) => (
        <div key={index} className="sectionResume3__container2">
          <img
            src={eachPic}
            alt={`Picture number ${index + 1}`}
            className="sectionResume3__container2--img"
          />
        </div>
      ))}
    </Slider>
  );
};

export default SliderOldProjects;

SliderOldProjects.propTypes = {
  jobsList: PropTypes.array.isRequired,
};
