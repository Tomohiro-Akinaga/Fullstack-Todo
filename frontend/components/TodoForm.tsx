"use client";

import { Input } from "./ui/Input";
import { Button } from "./ui/Button";

export function TodoForm() {
  return (
    <div className="flex gap-2">
      <Button className="cursor-pointer">+</Button>
      <Input />
    </div>
  );
}
