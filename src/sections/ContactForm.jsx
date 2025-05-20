const ContactForm = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center backgroundContact p-4"
      id="contacto"
    >
      <form className="w-full my-10 relative z-10 max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 uppercase">
          Contáctanos
        </h2>

        <p className=" text-center text-gray-500">
          Estamos aquí para ayudarte. Completa el formulario y nos pondremos en
          contacto contigo lo antes posible.
        </p>

        <div>
          <label className="sr-only" htmlFor="username">
            Nombres
          </label>
          <input
            type="text"
            id="username"
            placeholder="Nombres"
            className="w-full px-4 py-3 rounded-full bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="sr-only" htmlFor="email">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            placeholder="E-mail"
            className="w-full px-4 py-3 rounded-full bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="sr-only" htmlFor="phone">
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="Teléfono"
            className="w-full px-4 py-3 rounded-full bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="sr-only" htmlFor="message">
            Mensaje
          </label>
          <textarea
            id="message"
            placeholder="Mensaje"
            rows="4"
            className="w-full px-4 py-3 rounded-2xl bg-gray-100 placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-full bg-purple-500 text-white font-semibold tracking-wide hover:bg-purple-600 transition-colors"
        >
          ENVIAR →
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
