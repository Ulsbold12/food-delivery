"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const AdminAvatar = () => {
  return (
    <div>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};
