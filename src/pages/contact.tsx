import ContactForm from '../components/ContactForm';
import CustomHead from '../components/CustomHead';

const Contact = () => {
  return (
    <>
      <CustomHead title="Plant-Burger Kontakt" />
      <ContactForm className="max-w-md" />
    </>
  );
};

export default Contact;
