"use client";
import React, { ChangeEvent, useState } from "react";
import { Input } from "@/ui/Input/Input";
import { TextArea } from "@/ui/TextArea/TextArea";

interface FormValueType {
  email: string;
  phone: string;
  message: string;
  consent: boolean;
}

const ContactForm = () => {
  const [formValue, setFormValue] = useState<FormValueType>({
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const handleChangeForm = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValue((prev) => ({
      ...prev,
      ["consent"]: e.target.checked,
    }));
  };

  const handleSubmitForm = (e: any) => {
    e.preventDefault();

    console.log(formValue);
  };

  return (
    <form
      onSubmit={handleSubmitForm}
      className="flex flex-col gap-2 justify-center h-full"
    >
      <h3 className="text-[#FF3E27] text-3xl mb-4">
        Masz pytanie? Napisz do nas
      </h3>
      <Input
        onChange={(e) => handleChangeForm(e)}
        value={formValue.email}
        name="email"
        label="Twój email"
        placeholder="Twój adres email"
      />
      <Input
        onChange={(e) => handleChangeForm(e)}
        value={formValue.phone}
        name="phone"
        label="Twój numer telefonu"
        placeholder="Twój numer telefonu"
      />
      <TextArea
        onChange={(e) => handleChangeForm(e)}
        value={formValue.message}
        label="Twoja wiadomość"
        placeholder="Twoja wiadomość"
        name="message"
      />
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          className="accent-[#FF3061] w-4 h-4 rounded-lg"
          onChange={handleChangeCheckbox}
          checked={formValue.consent}
        />{" "}
        Akceptuje polityke prywatności
      </label>
      <button className="bg-gradient-to-r from-[#FF3E27] to-[#FF3061] py-2 px-10 rounded-2xl text-white w-full md:w-32 ">
        Wyślij
      </button>
    </form>
  );
};

export default ContactForm;
