"use client";
import React, { ChangeEvent, useState } from "react";
import { Input } from "@/ui/Input/Input";
import { TextArea } from "@/ui/TextArea/TextArea";
import { toast } from "@/components/ui/use-toast";
import Link from "next/link";
import { links } from "@/constants";

interface FormValueType {
  email: string;
  phone: string;
  message: string;
  consent: boolean;
}

const initFormValue = {
  email: "",
  phone: "",
  message: "",
  consent: false,
};

const initFieldErrors = {
  email: false,
  phone: false,
  message: false,
  consent: false,
};

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const messageRegex = /.{3,}/;

const ContactForm = () => {
  const [formValue, setFormValue] = useState<FormValueType>(initFormValue);

  const [formFieldsErrors, setFormFieldErrors] = useState(initFieldErrors);

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

  const validateData = () => {
    let isValidatePhone = true;
    let isValidateEmail = true;
    let isValidateMessage = true;
    let isValidConsent = true;

    if (!emailRegex.test(formValue.email)) {
      setFormFieldErrors((prev) => ({ ...prev, ["email"]: true }));

      isValidateEmail = false;
    } else {
      setFormFieldErrors((prev) => ({ ...prev, ["email"]: false }));

      isValidateEmail = true;
    }

    if (!phoneRegex.test(formValue.phone)) {
      setFormFieldErrors((prev) => ({ ...prev, ["phone"]: true }));

      isValidatePhone = false;
    } else {
      setFormFieldErrors((prev) => ({ ...prev, ["phone"]: false }));

      isValidatePhone = true;
    }

    if (!messageRegex.test(formValue.message)) {
      setFormFieldErrors((prev) => ({ ...prev, ["message"]: true }));

      isValidatePhone = false;
    } else {
      setFormFieldErrors((prev) => ({ ...prev, ["message"]: false }));

      isValidatePhone = true;
    }

    if (!formValue.consent) {
      setFormFieldErrors((prev) => ({ ...prev, ["consent"]: true }));

      isValidConsent = false;
    } else {
      setFormFieldErrors((prev) => ({ ...prev, ["consent"]: false }));

      isValidConsent = true;
    }

    return {
      isValidatePhone,
      isValidateEmail,
      isValidateMessage,
      isValidConsent,
    };
  };

  const handleSubmitForm = async (e: any) => {
    e.preventDefault();

    const {
      isValidateEmail,
      isValidateMessage,
      isValidatePhone,
      isValidConsent,
    } = validateData();

    if (
      !isValidateEmail ||
      !isValidatePhone ||
      !isValidateMessage ||
      !isValidConsent
    )
      return;

    const response = await fetch("/api/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "FormData",
      },
      body: JSON.stringify(formValue),
    });

    if (response.ok) {
      setFormValue(initFormValue);
      toast({
        description: "Dziękujemy za wysłanie wiadomości!",
      });
    } else {
      toast({
        description: "Ooops! Coś poszło nie tak!",
        variant: "destructive",
      });
    }
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
        type="email"
        onChange={(e) => handleChangeForm(e)}
        value={formValue.email}
        name="email"
        label="Twój email"
        placeholder="Twój adres email"
        error={formFieldsErrors.email && !emailRegex.test(formValue.email)}
      />
      <Input
        type="text"
        onChange={(e) => handleChangeForm(e)}
        value={formValue.phone}
        name="phone"
        label="Twój numer telefonu"
        placeholder="Twój numer telefonu"
        error={formFieldsErrors.phone && !phoneRegex.test(formValue.phone)}
      />
      <TextArea
        onChange={(e) => handleChangeForm(e)}
        value={formValue.message}
        label="Twoja wiadomość"
        placeholder="Twoja wiadomość"
        name="message"
        error={
          formFieldsErrors.message && !messageRegex.test(formValue.message)
        }
      />
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          className={`accent-[#FF3061] w-4 h-4 rounded-lg ${
            formFieldsErrors.consent ? "border-2 border-secondaryc" : ""
          }`}
          onChange={handleChangeCheckbox}
          checked={formValue.consent}
        />
        Akceptuje
        <Link className="underline" href={links.privacyPolicy}>
          polityke prywatności
        </Link>
      </label>
      <span className="h-5 text-secondaryc">
        {formFieldsErrors.consent &&
          !formValue.consent &&
          "Musisz zaakceptować politykę prywatności"}
      </span>
      <button className="bg-gradient-to-r from-[#FF3E27] to-[#FF3061] py-2 px-10 rounded-2xl text-white w-full md:w-32 ">
        Wyślij
      </button>
    </form>
  );
};

export default ContactForm;
