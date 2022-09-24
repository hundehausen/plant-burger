import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const schema = z.object({
  name: z.string().min(4, { message: 'Bitte geben Sie Ihren Namen an' }),
  subject: z.string().min(4, {
    message: 'Bitte geben Sie den Grund für Ihren Kontaktaufnahme an',
  }),
  email: z.string().trim().email('Bitte geben Sie Ihre E-Mail-Adresse an'),
  message: z.string().min(20, {
    message:
      'Bitte geben Sie in mindestens 20 Zeichen an, was Sie uns mitteilen möchten',
  }),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = handleSubmit((data) => console.log(data));

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
      />
    </form>
  );
};

export default ContactForm;
