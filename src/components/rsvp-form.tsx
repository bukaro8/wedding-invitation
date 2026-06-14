"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm, type UseFormRegisterReturn } from "react-hook-form";
import { z } from "zod";

type RsvpFormText = {
  description: string;
  fullName: string;
  fullNamePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  phone: string;
  phonePlaceholder: string;
  attending: string;
  attendingYes: string;
  attendingNo: string;
  guestsCount: string;
  message: string;
  messagePlaceholder: string;
  submit: string;
  submitting: string;
  success: string;
  genericError: string;
  requiredName: string;
  invalidEmail: string;
  requiredAttendance: string;
  invalidGuests: string;
};

type RsvpFormProps = {
  language: "es" | "en";
  text: RsvpFormText;
};

function createRsvpSchema(text: RsvpFormText) {
  return z.object({
    fullName: z.string().trim().min(2, text.requiredName),
    email: z
      .string()
      .trim()
      .refine((value) => !value || z.email().safeParse(value).success, {
        message: text.invalidEmail,
      }),
    phone: z.string().trim(),
    attending: z.enum(["yes", "no"], {
      error: text.requiredAttendance,
    }),
    guestsCount: z.number().int().min(0, text.invalidGuests),
    message: z.string().trim(),
  });
}

export function RsvpForm({ language, text }: RsvpFormProps) {
  const [successMessage, setSuccessMessage] = useState("");
  const [submitError, setSubmitError] = useState("");
  const schema = createRsvpSchema(text);

  type RsvpFormValues = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RsvpFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      attending: undefined,
      guestsCount: 0,
      message: "",
    },
  });

  const onSubmit = async (values: RsvpFormValues) => {
    setSuccessMessage("");
    setSubmitError("");

    const response = await fetch("/api/rsvp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: values.fullName,
        email: values.email || undefined,
        phone: values.phone || undefined,
        attending: values.attending === "yes",
        guestsCount: values.guestsCount,
        message: values.message || undefined,
        language,
      }),
    });

    if (!response.ok) {
      setSubmitError(text.genericError);
      return;
    }

    setSuccessMessage(text.success);
    reset();
  };

  return (
    <form className="mx-auto max-w-3xl text-left" onSubmit={handleSubmit(onSubmit)}>
      <p className="mb-7 text-center text-[1.05rem] leading-8 text-[#42566f]">
        {text.description}
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label={text.fullName} error={errors.fullName?.message}>
          <input
            {...register("fullName")}
            className={inputClassName}
            placeholder={text.fullNamePlaceholder}
            type="text"
          />
        </Field>

        <Field label={text.email} error={errors.email?.message}>
          <input
            {...register("email")}
            className={inputClassName}
            placeholder={text.emailPlaceholder}
            type="email"
          />
        </Field>

        <Field label={text.phone} error={errors.phone?.message}>
          <input
            {...register("phone")}
            className={inputClassName}
            placeholder={text.phonePlaceholder}
            type="tel"
          />
        </Field>

        <Field label={text.guestsCount} error={errors.guestsCount?.message}>
          <input
            {...register("guestsCount", { valueAsNumber: true })}
            className={inputClassName}
            min={0}
            type="number"
          />
        </Field>
      </div>

      <fieldset className="mt-6">
        <legend className="mb-3 text-sm font-semibold text-[#173a5e]">
          {text.attending}
        </legend>
        <div className="grid gap-3 sm:grid-cols-2">
          <RadioOption
            label={text.attendingYes}
            value="yes"
            register={register("attending")}
          />
          <RadioOption
            label={text.attendingNo}
            value="no"
            register={register("attending")}
          />
        </div>
        {errors.attending?.message ? (
          <p className="mt-2 text-sm text-red-700">{errors.attending.message}</p>
        ) : null}
      </fieldset>

      <Field
        className="mt-6"
        label={text.message}
        error={errors.message?.message}
      >
        <textarea
          {...register("message")}
          className={`${inputClassName} min-h-32 resize-y py-3`}
          placeholder={text.messagePlaceholder}
        />
      </Field>

      {submitError ? (
        <p className="mt-5 rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
          {submitError}
        </p>
      ) : null}

      {successMessage ? (
        <p className="mt-5 rounded-2xl bg-[#eef6f0] px-4 py-3 text-sm font-medium text-[#1f5f3c]">
          {successMessage}
        </p>
      ) : null}

      <button
        className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#173a5e] px-7 text-sm font-semibold text-white shadow-lg shadow-[#173a5e]/20 transition hover:bg-[#244c73] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        disabled={isSubmitting}
        type="submit"
      >
        <Send className="size-4" aria-hidden="true" />
        {isSubmitting ? text.submitting : text.submit}
      </button>
    </form>
  );
}

const inputClassName =
  "mt-2 w-full rounded-2xl border border-[#eadcc2] bg-[#fffdf8] px-4 py-3 text-sm text-[#173a5e] outline-none transition placeholder:text-[#a89778] focus:border-[#c9a45c] focus:ring-4 focus:ring-[#c9a45c]/15";

function Field({
  children,
  className = "",
  error,
  label,
}: {
  children: React.ReactNode;
  className?: string;
  error?: string;
  label: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-semibold text-[#173a5e]">{label}</span>
      {children}
      {error ? <p className="mt-2 text-sm text-red-700">{error}</p> : null}
    </label>
  );
}

function RadioOption({
  label,
  register,
  value,
}: {
  label: string;
  register: UseFormRegisterReturn;
  value: "yes" | "no";
}) {
  return (
    <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#eadcc2] bg-[#fffdf8] px-4 py-3 text-sm font-semibold text-[#173a5e] transition has-[:checked]:border-[#c9a45c] has-[:checked]:bg-[#fbf8f1]">
      <input
        {...register}
        className="size-4 accent-[#173a5e]"
        type="radio"
        value={value}
      />
      {label}
    </label>
  );
}
