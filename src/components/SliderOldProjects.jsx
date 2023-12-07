import ImageGallery from 'react-image-gallery';
import '../styles/layout/Resume.scss';
import PropTypes from 'prop-types';
import 'react-image-gallery/styles/scss/image-gallery.scss';

const SliderOldProjects = (props) => {
  const pictures = props.jobsList.flatMap((eachJob) =>
    eachJob.pictures.map((eachImg) => ({
      original: eachImg.img,
      renderItem: (item) => (
        <div className="image-gallery-image">
          <img
            src={item.original}
            alt={item.description}
            style={{ width: '300px' }}
          />
          {item.description && (
            <span className="image-gallery-description">
              {item.description}
            </span>
          )}
        </div>
      ),
      renderLeftNav: (onClick, disabled) => (
        <button
          className={`image-gallery-left-nav ${disabled ? 'disabled' : ''}`}
          onClick={onClick}
        >
          &lt;
        </button>
      ),
      renderRightNav: (onClick, disabled) => (
        <button
          className={`image-gallery-right-nav ${disabled ? 'disabled' : ''}`}
          onClick={onClick}
        >
          &gt;
        </button>
      ),
    }))
  );

  const options = {
    showFullscreenButton: false,
    showPlayButton: false,
    showNav: true,
    showThumbnails: false,
  };

  return <ImageGallery {...options} items={pictures} />;
};

export default SliderOldProjects;

SliderOldProjects.propTypes = {
  jobsList: PropTypes.array,
};
