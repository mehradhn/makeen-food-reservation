import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Image from "next/image";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
function LoginAdmin() {
  const [isShowPassword, setIsShowPassword] = useState(false);

  type formData = {
    username: string;
    password: string;
  };

  const schema: ZodType<formData> = z.object({
    username: z.string().min(5).max(30),
    password: z.string().min(5).max(20),
  });

  //connect zod with react-hook form
  const { register, handleSubmit } = useForm<formData>({
    resolver: zodResolver(schema),
  });
  const submitData = (data: formData) => {
    console.log("data", data);
  };
  return (
    <main className="bg-gray-100 flex-col sm:flex-row min-h-screen  flex justify-center px-4 sm:px-0 items-center">
      <div className="relative sm:flex-1 sm:bg-slate-200 sm:min-h-screen flex justify-center items-center px-1  rounded-lg">
        <Image
          width={600}
          height={600}
          src={"/logo-makeen.png"}
          alt="makeen-logo"
        />
      </div>
      <form
        onSubmit={handleSubmit(submitData)}
        className="w-full flex flex-col sm:flex-1 sm:mr-8  gap-7 px-1"
      >
        <div className="flex relative justify-center sm:p-14  flex-col gap-7 sm:flex-1 max-w-3xl">
          <Input
            type="text"
            id="username"
            autoComplete="off"
            placeholder="نام کاربری"
            {...register("username")}
          />
          <div className="relative">
            <Input
              type={isShowPassword ? "password" : "text"}
              id="password"
              placeholder="رمز عبور"
              className="border border-gray-300"
              {...register("password", { required: true })}
            />
            {isShowPassword === true ? (
              <BsEye
                onClick={() => setIsShowPassword(!isShowPassword)}
                className="left-8 absolute top-[24px]"
              />
            ) : (
              <BsEyeSlash
                onClick={() => setIsShowPassword(!isShowPassword)}
                className="left-8 absolute top-[24px]"
              />
            )}
          </div>
          <Button />
        </div>
      </form>
    </main>
  );
}

export default LoginAdmin;
