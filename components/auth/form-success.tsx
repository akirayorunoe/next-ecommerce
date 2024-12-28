import { CheckCircle2 } from "lucide-react";

export const FormSuccess = ({ message }: { message?: string }) => {
  if (!message) return null;
  return (
    <div className="flex items-center gap-2 my-2 text-xs font-medium bg-teal-400/25 text-secondary-foreground p-3">
      <CheckCircle2 className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
};
