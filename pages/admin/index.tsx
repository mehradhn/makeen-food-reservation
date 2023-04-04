import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Input from "@/components/Input";
import Button from "@/components/Button";
function LoginAdmin() {
  return (
    <main className="bg-gray-100 flex-col sm:flex-row min-h-screen flex justify-center px-4 sm:px-0 items-center">
      <div className="relative sm:flex-1 sm:bg-slate-200 sm:min-h-screen flex items-center">
        <img src="./logo-makeen.png" alt="makeen" />
      </div>
      <form className="w-full flex flex-col sm:flex-row sm:flex-1 sm:mr-8  gap-7 px-1">
        <div className="flex relative flex-col gap-7 sm:flex-1">
          <Input
            type="text"
            name="username"
            id="username"
            autoComplete="off"
            placeholder="نام کاربری"
          />
          <BsEye className="left-5 absolute top-[110px]" />
          <Input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            placeholder="رمز عبور"
          />

          <Button />
        </div>
      </form>
    </main>
  );
}

export default LoginAdmin;
