/*"use client";

import * as React from "react";

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {}
interface AlertDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className = "", ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={`relative w-full rounded-lg border p-4 ${className}`}
      {...props}
    />
  )
);
Alert.displayName = "Alert";

export const AlertDescription = React.forwardRef<HTMLParagraphElement, AlertDescriptionProps>(
  ({ className = "", ...props }, ref) => (
    <p
      ref={ref}
      className={`text-sm [&_p]:leading-relaxed ${className}`}
      {...props}
    />
  )
);
AlertDescription.displayName = "AlertDescription";*/