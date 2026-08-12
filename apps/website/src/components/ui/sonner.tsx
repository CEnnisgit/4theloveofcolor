"use client";

import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-[#211711] group-[.toaster]:border group-[.toaster]:border-[#211711]/10 group-[.toaster]:shadow-lg group-[.toaster]:rounded-[var(--radius)] font-sans p-4",
          description: "group-[.toast]:text-[#6a594c] text-xs mt-1",
          actionButton:
            "group-[.toast]:bg-[#c2592e] group-[.toast]:text-white text-xs font-bold rounded-[var(--radius)]",
          cancelButton:
            "group-[.toast]:bg-neutral-100 group-[.toast]:text-[#6a594c] text-xs rounded-[var(--radius)]",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
