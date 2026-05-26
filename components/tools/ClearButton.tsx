"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ClearButtonProps {
  onClear: () => void;
  className?: string;
}

export function ClearButton({ onClear, className = "" }: ClearButtonProps) {
  return (
    <Button
      onClick={onClear}
      variant="ghost"
      size="sm"
      className={`gap-1.5 ${className}`}
    >
      <X className="h-3.5 w-3.5" />
      Clear
    </Button>
  );
}
