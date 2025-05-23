"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { FormAddProfileProps } from "./FormAddProfile.types";
import { formSchema } from "./FormAddProfile.form";
import { dataProfilesImages } from "./FormAddProfile.data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function FormAddProfile(props: FormAddProfileProps) {
  const { setOpen } = props;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      profileName: "",
      avatarUrl: undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="profileName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de Perfil</FormLabel>
              <FormControl>
                <Input placeholder="Anderson" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="avatarUrl"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Seleccion tu imagen de perfil</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex  space-y-1"
                >
                  {dataProfilesImages.map((data) => (
                    <FormItem
                      key={data.urlImage}
                      className="flex flex-col-reverse justify-center items-center space-x-5 space-y-0 cursor-pointer"
                    >
                      <FormControl className="text-white ml-3 mt-1">
                        <RadioGroupItem value={data.urlImage} />
                      </FormControl>
                      <FormLabel className="font-normal flex justify-center w-full">
                        <Image
                          src={data.urlImage}
                          alt="Profile"
                          width={50}
                          height={50}
                          className={
                            field.value === data.urlImage
                              ? "border-white border"
                              : "cursor-pointer"
                          }
                        />
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading}>
          Crear Usuario
        </Button>
      </form>
    </Form>
  );
}
