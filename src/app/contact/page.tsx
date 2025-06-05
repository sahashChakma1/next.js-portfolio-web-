'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        setStatus("Thank you for your message! We'll get back to you soon.");
        e.currentTarget.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center px-6 md:px-12">
      <main className="max-w-lg w-full bg-zinc-800 rounded-2xl p-10 shadow-2xl text-zinc-200 space-y-10">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold text-white">Get in Touch</h1>
          <p className="text-lg text-zinc-400 leading-relaxed">
            Whether you have a project in mind, want to collaborate, or just want to say hello — feel free to reach out.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
  <div className="flex items-start gap-3 sm:gap-4">
    <span className="text-teal-400 text-xl sm:text-2xl select-none">📧</span>
    <div>
      <p className="text-xs sm:text-sm text-zinc-400">Email me at</p>
      <a
        href="mailto:sahashchakma85@gmail.com"
        className="text-teal-400 hover:text-teal-300 underline text-sm sm:text-lg break-all"
      >
        sahashchakma85@gmail.com
      </a>
    </div>
  </div>

  <div className="flex items-start gap-3 sm:gap-4">
    <span className="text-teal-400 text-xl sm:text-2xl select-none">🔗</span>
    <div>
      <p className="text-xs sm:text-sm text-zinc-400">Connect on LinkedIn</p>
      <a
        href="https://www.linkedin.com/in/sahash-chakma/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-teal-400 hover:text-teal-300 underline text-sm sm:text-lg break-all"
      >
        linkedin.com/in/sahash-chakma
      </a>
    </div>
  </div>
</div>


        <div className="border-t border-zinc-700 pt-6">
          <p className="text-sm text-zinc-400 text-center">
            I usually respond within 24–48 hours. Looking forward to hearing from you!
          </p>
        </div>

        {/* Form */}
<section>
  <form onSubmit={handleSubmit} className="space-y-6">
    {/* Name fields */}
    <div className="flex flex-col sm:flex-row gap-4 max-w-full w-full px-4 sm:px-0">
      <input
        type="text"
        name="firstName"
        placeholder="First name"
        className="flex-1 min-w-0 px-3 py-2 rounded-lg border border-zinc-600 bg-zinc-700 text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition text-sm sm:text-base"
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last name"
        className="flex-1 min-w-0 px-3 py-2 rounded-lg border border-zinc-600 bg-zinc-700 text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition text-sm sm:text-base"
        required
      />
    </div>

    {/* Email field */}
    <div className="px-4 sm:px-0">
      <div className="flex items-center gap-3 px-3 py-2 rounded-lg border border-zinc-600 bg-zinc-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-zinc-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m0 0l-4-4m4 4l-4 4" />
        </svg>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          className="w-full bg-transparent outline-none text-zinc-100 placeholder-zinc-400 text-sm sm:text-base"
          required
        />
      </div>
    </div>

    {/* Country code + phone */}
    <div className="flex flex-col sm:flex-row gap-4 px-4 sm:px-0">
      <select
        name="countryCode"
        className="px-3 py-2 rounded-lg border border-zinc-600 bg-zinc-700 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-teal-400 transition w-full sm:w-36 text-sm sm:text-base"
        defaultValue="+91"
      >
        {/* Country codes */}
        <option value="+1">+1 (USA/Canada)</option>
        <option value="+44">+44 (UK)</option>
        <option value="+61">+61 (Australia)</option>
        <option value="+81">+81 (Japan)</option>
        <option value="+49">+49 (Germany)</option>
        <option value="+33">+33 (France)</option>
        <option value="+34">+34 (Spain)</option>
        <option value="+91">+91 (India)</option>
        <option value="+92">+92 (Pakistan)</option>
        <option value="+86">+86 (China)</option>
        <option value="+971">+971 (UAE)</option>
        <option value="+974">+974 (Qatar)</option>
        <option value="+966">+966 (Saudi Arabia)</option>
        <option value="+880">+880 (Bangladesh)</option>
        <option value="+94">+94 (Sri Lanka)</option>
        <option value="+7">+7 (Russia)</option>
        <option value="+82">+82 (South Korea)</option>
        <option value="+351">+351 (Portugal)</option>
        <option value="+48">+48 (Poland)</option>
        <option value="+55">+55 (Brazil)</option>
        <option value="+52">+52 (Mexico)</option>
        <option value="+39">+39 (Italy)</option>
        <option value="+20">+20 (Egypt)</option>
        <option value="+27">+27 (South Africa)</option>
      </select>

      <input
        type="tel"
        name="phone"
        placeholder="Phone number"
        className="flex-1 px-3 py-2 rounded-lg border border-zinc-600 bg-zinc-700 text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition text-sm sm:text-base"
        required
      />
    </div>

    {/* Submit button */}
    <div className="px-4 sm:px-0 text-center">
      <button
        type="submit"
        className="bg-teal-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-teal-600 transition text-sm sm:text-base"
      >
        Submit
      </button>
    </div>

    {/* Status message */}
    {status && <p className="text-center text-teal-400 text-sm px-4 sm:px-0">{status}</p>}
  </form>
</section>

      </main>
    </div>
  );
}
