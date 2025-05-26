import { useState } from "react";

const ContactForm = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/meogbrow", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSuccess(true);
        form.reset();

        // Ocultar el mensaje después de 2 segundos
        setTimeout(() => setSuccess(false), 2000);
      } else {
        alert("Ocurrió un error al enviar el formulario.");
      }
    } catch (error) {
      alert("Error al conectar con el servidor.", error);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center backgroundContact p-4"
      id="contacto"
    >
      <form
        onSubmit={handleSubmit}
        className="w-full my-10 relative z-10 max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 uppercase">
          Contáctanos
        </h2>

        {success && (
          <div className="text-green-600 bg-green-100 text-center py-2 px-4 rounded-lg font-medium shadow">
            ¡Mensaje enviado con éxito!
          </div>
        )}

        <div>
          <label className="sr-only" htmlFor="username">
            Nombres
          </label>
          <input
            type="text"
            id="username"
            name="nombres"
            placeholder="Nombres"
            required
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
            name="email"
            placeholder="E-mail"
            required
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
            name="teléfono"
            placeholder="Teléfono"
            required
            className="w-full px-4 py-3 rounded-full bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="sr-only" htmlFor="message">
            Mensaje
          </label>
          <textarea
            id="message"
            name="mensaje"
            placeholder="Mensaje"
            rows="4"
            required
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
