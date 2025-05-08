import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function TodoForm() {
  return (
    <div className="flex gap-2">
      <Button className="cursor-pointer">+</Button>
      <Input />
    </div>
  );
}
