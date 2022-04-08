import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../button";
import { Input } from "../input";
import { newsletterSchema } from "utils/validators";

const NewsletterForm = () => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { isValid, isDirty, errors, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(newsletterSchema),
  });
  const addToNewsletter = (data, e) => {
    e.preventDefault();
    alert(JSON.stringify(data));

    setTimeout(() => {
      resetField("email");
      resetField("name");
    }, 2000);
    // Send the data to backend
  };

  return (
    <div className="md:w-auto w-full">
      <form onSubmit={handleSubmit(addToNewsletter)}>
        <Input
          label="Your name"
          type="text"
          register={register("name")}
          error={errors.name?.message}
        />
        <Input
          label="Your email address"
          type="email"
          register={register("email")}
          error={errors.email?.message}
        />
        <Button
          disabled={!isDirty || !isValid}
          text="Join our community"
          size="xlarge"
          isLoading={isSubmitting}
        />
      </form>
    </div>
  );
};

export { NewsletterForm };
