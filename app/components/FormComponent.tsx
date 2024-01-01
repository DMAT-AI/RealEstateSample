// components/FormComponent.js
import React from 'react';

const FormComponent = () => {
  return (
    <div className="form-container bg-gray-100 p-8 shadow-2xl mb-11">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
      <form action="#" method="post" className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-semibold mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-semibold mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-semibold mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm font-semibold mb-1">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="p-2 border border-gray-300 rounded-md"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-black text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
