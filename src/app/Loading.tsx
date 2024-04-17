import { LoaderCircle } from "lucide-react";
import React from "react";

export default function loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex items-center gap-4">
        <LoaderCircle className="animate-spin" size={30} />
        <h2>Loading...</h2>
      </div>
    </div>
  );
}
