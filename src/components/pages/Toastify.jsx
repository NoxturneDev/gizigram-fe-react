"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

function Toastify() {
  const { toast } = useToast();
  return (
    <Button
      onClick={() => {
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
      }}
    >
      Show Toast
    </Button>
  );
}

export default Toastify;
