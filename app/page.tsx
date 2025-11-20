import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-dvw h-dvh container mx-auto py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-extrabold text-primary">Ventory</h1>
        <Button variant="secondary" className="cursor-pointer">
          Ventory
        </Button>
      </div>
    </div>
  );
}
