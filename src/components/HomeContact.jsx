import '../styles/layout/Main.scss';
import ContactForm from '../components/ContactForm';
import PropTypes from 'prop-types';

const HomeContact = (props) => {
  return (
    <>
      <section className="section" id="contact" ref={props.contactRef}>
        <div className="section__container">
          <h2 className="section__container--title">Contact me</h2>
          <ContactForm contactRef={props.contactRef} />
        </div>
      </section>
    </>
  );
};

export default HomeContact;

HomeContact.propTypes = {
  contactRef: PropTypes.object,
};
