import { AlertCircle } from "lucide-react";

export const FormError = ({ message }: { message?: string }) => {
  if (!message) return null;
  return (
    <div className="flex items-center gap-2 my-2 text-xs font-medium bg-destructive/25 text-secondary-foreground p-3">
      <AlertCircle className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
};
