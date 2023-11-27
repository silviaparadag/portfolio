import '../styles/layout/Contact.scss';
import { useForm, ValidationError } from '@formspree/react';
import PropTypes from 'prop-types';

const ContactForm = (props) => {
  const [state, handleSubmit] = useForm('myyqadpb');

  if (state.succeeded) {
    return (
      <section className="section">
        <div className="section__container2">
          <p className="section__container2--succeeded">
            Thank you for contacting me. <br />I will try to get back to you as
            soon as possible.
          </p>
        </div>
      </section>
    );
  }
  return (
    <>
      <section className="section" id="contact" ref={props.contactRef}>
        <div className="section__container">
          <h2 className="section__container--title">Contact me</h2>
          <form
            className="form"
            onSubmit={handleSubmit}
            action="https://formspree.io/f/myyqadpb"
            method="POST"
          >
            <label htmlFor="name" className="form__label">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Paquita Salas"
              className="form__field"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <label htmlFor="email" className="form__label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="paquita@psmanagemenet.com"
              className="form__field"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label htmlFor="message" className="form__label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              className="form__textarea"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              className="form__button"
              disabled={state.submitting}
            >
              {' '}
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  contactRef: PropTypes.object,
};
