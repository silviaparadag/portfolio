import '../styles/layout/Contact.scss';
import ContactForm from '../components/ContactForm';
import PropTypes from 'prop-types';

const Contact = (props) => {
  return (
    <main className="mainContact">
      <section className="sectionContact" id="contact" ref={props.contactRef}>
        <div className="sectionContact__container">
          <h2 className="sectionContact__container--title">Contact me</h2>
          <h4 className="sectionContact__container--subtitle">Ideas matter</h4>
          <p className="sectionContact__container--text">
            Feel free to contact me if you have any questions, want to talk
            about interesting projects or just share your ideas. I welcome
            questions, comments and suggestions with open arms. <br />
            Let's collaborate and turn ideas into reality.
          </p>
        </div>
        <ContactForm contactRef={props.contactRef} />
      </section>
    </main>
  );
};

export default Contact;

Contact.propTypes = {
  contactRef: PropTypes.object,
};
