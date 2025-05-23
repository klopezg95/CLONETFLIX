"use client";

import { Button } from "@/components/ui/button";
import { ProfileProps } from "./Profiles.types";
import { AddProfile } from "./AddProfile";

export function Profiles(props: ProfileProps) {
  const { users } = props;
  console.log({ users });

  return (
    <div>
      <div className="flex gap-7">
        <p>Usuarios de perfiles...</p>
        <AddProfile />
      </div>
      <div className="mt-16 flex items-center justify-center">
        <Button
          variant="outline"
          size="lg"
          className="text-gray-500 border-gray-500"
          onClick={() => console.log("click")}
        >
          Administrar perfiles
        </Button>
      </div>
    </div>
  );
}
