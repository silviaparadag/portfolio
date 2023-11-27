import '../styles/layout/Contact.scss';
import ContactForm from '../components/ContactForm';
import PropTypes from 'prop-types';

const Contact = (props) => {
  return (
    <main className="mainContact">
      <ContactForm contactRef={props.contactRef} />
    </main>
  );
};

export default Contact;

Contact.propTypes = {
  contactRef: PropTypes.object,
};
