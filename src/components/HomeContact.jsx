import '../styles/layout/Main.scss';

const HomeContact = () => {
  return (
    <>
      <section className="section">
        <div className="section__container">
          <h2 className="section__container--title">Contact me</h2>
          <form className="form" action="">
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
            <input type="submit" value="Submit" className="form__button" />
          </form>
        </div>
      </section>
    </>
  );
};

export default HomeContact;
