"use client";

import { useForm } from "react-hook-form";
import { useRegisterForm } from "./registerForm.hook";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import cls from "./registerForm.module.scss";
import { Button } from "@shared/ui";
import clsx from "clsx";
import Image from "next/image";
import warningIcon from "@assets/icons/warning.svg";
import React from "react";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { register: onSubmit, loading } = useRegisterForm();

  return (
    <div className={cls.registerForm}>
      <h2 className={cls.title}>
        To register, enter the mail to which our news is sent and set your
        password
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          className={clsx(
            cls.inputContainer,
            !!errors.email?.message && cls.withError
          )}
        >
          <input
            className={cls.input}
            placeholder={"Example@email.com"}
            {...register("email")}
          />
          <p className={cls.errorMessage}>{errors.email?.message}</p>
          <Image
            className={cls.errorIcon}
            src={warningIcon}
            alt={"cross icon"}
            width={21}
            height={21}
          />
        </div>

        <div
          className={clsx(
            cls.inputContainer,
            !!errors.password?.message && cls.withError
          )}
        >
          <input
            className={cls.input}
            placeholder={"Password"}
            {...register("password")}
          />
          <p className={cls.errorMessage}>{errors.password?.message}</p>
          <Image
            className={cls.errorIcon}
            src={warningIcon}
            alt={"cross icon"}
            width={21}
            height={21}
          />
        </div>

        <Button
          type="submit"
          disabled={loading}
          title={loading ? "Loading" : "Submit"}
        />
      </form>
    </div>
  );
};
