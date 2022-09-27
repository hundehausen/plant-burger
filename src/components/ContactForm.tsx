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
      message: 'Bitte nutzen Sie mindestens vier Zeichen für den Betreff',
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

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className, ...other }: ContactFormProps) => {
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
    <form onSubmit={onSubmit} className={`${className} mx-auto`} {...other}>
      <p className="text-2xl font-bold">Kontaktieren Sie Plant-Burger 💬</p>
      <p className="text-sm font-thin">
        Wir nutzen den Dienstleister SendGrid für das Kontaktformular.
      </p>
      <label
        htmlFor="name"
        className="mb-2 mt-4 font-medium text-gray-900 dark:text-gray-200"
      >
        Name
      </label>
      <input
        id="name"
        {...register('name')}
        className="mb-1 w-full rounded-md border-2 border-gray-900 p-2.5 text-sm"
      />
      {errors.name?.message && (
        <p className="text-sm text-gray-700 dark:text-gray-400">
          {errors.name?.message.toString()}
        </p>
      )}
      <label
        htmlFor="subject"
        className="mb-2 mt-4 font-medium text-gray-900 dark:text-gray-200"
      >
        Betreff
      </label>
      <input
        id="subject"
        {...register('subject')}
        className="mb-1 w-full rounded-md border-2 border-gray-900 p-2.5 text-sm"
      />
      {errors.subject?.message && (
        <p className="text-sm text-gray-700 dark:text-gray-400">
          {errors.subject.message?.toString()}
        </p>
      )}
      <label
        htmlFor="email"
        className="mb-2 mt-4 font-medium text-gray-900 dark:text-gray-200"
      >
        E-Mail-Adresse
      </label>
      <input
        id="email"
        {...register('email')}
        className="mb-1 w-full rounded-md border-2 border-gray-900 p-2.5 text-sm"
      />
      {errors.email?.message && (
        <p className="text-sm text-gray-700 dark:text-gray-400">
          {errors.email.message.toString()}
        </p>
      )}
      <label
        htmlFor="message"
        className="mb-2 mt-4 font-medium text-gray-900 dark:text-gray-200"
      >
        Ihre Nachricht
      </label>
      <textarea
        id="message"
        {...register('message')}
        rows={4}
        className="mb-1 min-h-[100] w-full rounded-md border-2 border-gray-900 p-2.5 text-sm"
      ></textarea>
      {errors.message?.message && (
        <p className="text-sm text-gray-700 dark:text-gray-400">
          {errors.message.message.toString()}
        </p>
      )}
      <input
        type="submit"
        value="Nachricht versenden"
        className="my-2 mr-2 cursor-pointer rounded-lg border-2 border-gray-800 px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-amber-800 dark:text-gray-200"
        disabled={formState.isSubmitting}
      />
      {formState.isSubmitSuccessful ? (
        <p className="text-sm">Nachricht erfolgreich gesendet ✅</p>
      ) : (
        formState.isSubmitted &&
        !formState.isSubmitSuccessful && (
          <p className="text-sm">
            Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten ❌
          </p>
        )
      )}
    </form>
  );
};

export default ContactForm;
