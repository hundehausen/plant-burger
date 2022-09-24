import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const schema = z.object({
  name: z
    .string({
      required_error: 'Bitte geben Sie Ihren Namen an',
      invalid_type_error: 'Name muss eine Zeichenkette sein',
    })
    .min(4, { message: 'Ihr Name sollte mehr als vier Zeichen haben' }),
  subject: z
    .string({
      required_error: 'Bitte geben Sie einen Betreff an',
      invalid_type_error: 'Betreff muss eine Zeichenkette sein',
    })
    .min(4, {
      message: 'Bitte nutzen Sie midnestens vier Zeichen für den Betreff',
    }),
  email: z
    .string({
      required_error: 'Bitte geben Sie Ihren E-Mail-Adresse an',
      invalid_type_error: 'E-Mail-Adresse muss eine Zeichenkette sein',
    })
    .trim()
    .email('Bitte geben Sie eine gültige E-Mail-Adresse an'),
  message: z.string().min(20, {
    message:
      'Bitte geben Sie in mindestens 20 Zeichen an, was Sie uns mitteilen möchten',
  }),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = handleSubmit(
    async (data) => await axios.post('/api/sendgrid', data)
  );

  return (
    <form onSubmit={onSubmit} className="max-w-lg mx-auto px-4">
      <p className="text-2xl font-bold">Kontaktieren Sie Plant-Burger 💬</p>
      <label
        htmlFor="name"
        className="block mb-2 font-medium text-gray-900 mt-4"
      >
        Name
      </label>
      <input
        id="name"
        {...register('name')}
        className="block p-2.5 w-full text-sm max-w-lg border-2 border-gray-900 rounded-md"
      />
      {errors.name?.message && (
        <p className="text-sm">{errors.name?.message.toString()}</p>
      )}
      <label
        htmlFor="subject"
        className="block mb-2 font-medium text-gray-900 mt-4"
      >
        Betreff
      </label>
      <input
        id="subject"
        {...register('subject')}
        className="block p-2.5 w-full text-sm max-w-lg border-2 border-gray-900 rounded-md"
      />
      {errors.subject?.message && (
        <p className="text-sm">{errors.subject.message?.toString()}</p>
      )}
      <label
        htmlFor="email"
        className="block mb-2 font-medium text-gray-900 mt-4"
      >
        E-Mail-Adresse
      </label>
      <input
        id="email"
        {...register('email')}
        className="block p-2.5 w-full text-sm max-w-lg border-2 border-gray-900 rounded-md"
      />
      {errors.email?.message && (
        <p className="text-sm">{errors.email.message.toString()}</p>
      )}
      <label
        htmlFor="message"
        className="block mb-2 font-medium text-gray-900 mt-4"
      >
        Ihre Nachricht
      </label>
      <textarea
        id="message"
        {...register('message')}
        rows={4}
        className="block p-2.5 w-full text-sm max-w-lg border-2 border-gray-900 rounded-md min-h-[100]"
      ></textarea>
      {errors.message?.message && (
        <p className="text-sm">{errors.message.message.toString()}</p>
      )}
      <input
        type="submit"
        value="Nachricht versenden"
        className="text-gray-900 hover:text-white border-2 border-gray-900 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-4 cursor-pointer"
        disabled={formState.isSubmitting}
      />
      {formState.isSubmitSuccessful && (
        <p className="text-sm">Nachricht erfolgreich gesendet ✅</p>
      )}
    </form>
  );
};

export default ContactForm;
