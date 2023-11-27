import '../styles/layout/Main.scss';
import ContactForm from '../components/ContactForm';
import PropTypes from 'prop-types';

const HomeContact = (props) => {
  return (
    <>
      <ContactForm contactRef={props.contactRef} />
    </>
  );
};

export default HomeContact;

HomeContact.propTypes = {
  contactRef: PropTypes.object,
};
