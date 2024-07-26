import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { TextArea } from "@/components/ui/Text-Area";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Button size="icon" variant='ok'>Click Me</Button>
      <TextArea variant='light' placeholder='Type here' />
    </div>
  );
}
