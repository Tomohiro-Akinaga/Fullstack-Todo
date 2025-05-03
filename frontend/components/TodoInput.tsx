"use client";

import { Input } from "./ui/Input";
import { Button } from "./ui/Button";

export function TodoInput() {
  return (
    <div className="flex gap-2">
      <Input />
      <Button className="cursor-pointer">+</Button>
    </div>
  );
}
