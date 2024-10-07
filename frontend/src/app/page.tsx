import { ToggleTheme } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex justify-center mt-[8rem]">
      <Button>Fire start</Button>
      <ToggleTheme />
    </div>
  );
}
