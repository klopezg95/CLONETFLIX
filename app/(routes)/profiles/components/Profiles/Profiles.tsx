"use client";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { Trash2 } from "lucide-react";

import { cn } from "@/lib/utils";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { ProfileProps } from "./Profiles.types";
import { AddProfile } from "./AddProfile";
import { useRouter } from "next/navigation";

export function Profiles(props: ProfileProps) {
  const { users } = props;
  const [manageProfiles, setManageProfiles] = useState(false);
  const router = useRouter();

  const deleteUser = async (userIdNetflix: string) => {
    try {
      axios.delete("/api/userNetflix", { data: { userIdNetflix } });
      setManageProfiles(false);
      router.refresh();
    } catch (error) {
      console.log(error);
      toast("Ops! Ha ocurrido un error", {
        description: "Error",
        className: "toast-error",
      });
    }
  };

  return (
    <div>
      <div className="flex gap-7">
        {users.map((user) => (
          <div key={user.id} className="text-center relative cursor-pointer">
            <Image
              src={user.avatarUrl || ""}
              alt={`Profile Image ${user.profileName}`}
              width={140}
              height={140}
              className={cn(
                manageProfiles ? "blur-md" : "",
                "border-transparent hover:border-2 hover:border-white rounded-md"
              )}
            />
            <p className="mt-2 text-gray-500 uppercase text-lg">
              {user.profileName}
            </p>
            <div
              className={cn(
                "top-14 cursor-pointer w-full flex gap-4 items-center justify-center z-20",
                manageProfiles ? "absolute" : "hidden"
              )}
            >
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <div className="bg-white rounded-full hover:bg-red-100 p-1">
                    <Trash2 className="w-6 h-6 text-red-500" />
                  </div>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-zinc-900">
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      ¿Seguro que Quieres eliminar este perfil?
                    </AlertDialogTitle>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Volver</AlertDialogCancel>
                    <AlertDialogAction
                      className="text-red-500 border-red-500 border"
                      onClick={() => deleteUser(user.id)}
                    >
                      Eliminar
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        ))}
        <AddProfile />
      </div>
      <div className="mt-16 flex items-center justify-center">
        <Button
          variant="outline"
          size="lg"
          className="text-gray-500 border-gray-500"
          onClick={() => setManageProfiles(!manageProfiles)}
        >
          Administrar perfiles
        </Button>
      </div>
    </div>
  );
}
