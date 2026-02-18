import { cn } from "@/lib/utils";
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  Info,
  Lightbulb,
} from "lucide-react";
import type { ReactNode } from "react";

type CalloutType = "info" | "warning" | "danger" | "tip" | "success";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
  className?: string;
}

const calloutConfig: Record<
  CalloutType,
  {
    icon: typeof Info;
    bgClass: string;
    borderClass: string;
    iconClass: string;
    titleClass: string;
  }
> = {
  info: {
    icon: Info,
    bgClass: "bg-blue-50/50 dark:bg-blue-950/20",
    borderClass: "border-blue-200 dark:border-blue-800",
    iconClass: "text-blue-500",
    titleClass: "text-blue-700 dark:text-blue-300",
  },
  warning: {
    icon: AlertTriangle,
    bgClass: "bg-yellow-50/50 dark:bg-yellow-950/20",
    borderClass: "border-yellow-200 dark:border-yellow-800",
    iconClass: "text-yellow-500",
    titleClass: "text-yellow-700 dark:text-yellow-300",
  },
  danger: {
    icon: AlertCircle,
    bgClass: "bg-red-50/50 dark:bg-red-950/20",
    borderClass: "border-red-200 dark:border-red-800",
    iconClass: "text-red-500",
    titleClass: "text-red-700 dark:text-red-300",
  },
  tip: {
    icon: Lightbulb,
    bgClass: "bg-emerald-50/50 dark:bg-emerald-950/20",
    borderClass: "border-emerald-200 dark:border-emerald-800",
    iconClass: "text-emerald-500",
    titleClass: "text-emerald-700 dark:text-emerald-300",
  },
  success: {
    icon: CheckCircle,
    bgClass: "bg-green-50/50 dark:bg-green-950/20",
    borderClass: "border-green-200 dark:border-green-800",
    iconClass: "text-green-500",
    titleClass: "text-green-700 dark:text-green-300",
  },
};

export function Callout({
  type = "info",
  title,
  children,
  className,
}: CalloutProps) {
  const config = calloutConfig[type];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "my-6 rounded-lg border p-4",
        config.bgClass,
        config.borderClass,
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <Icon className={cn("mt-0.5 size-5 shrink-0", config.iconClass)} />
        <div className="flex-1 min-w-0">
          {title && (
            <p className={cn("mb-1 font-semibold", config.titleClass)}>
              {title}
            </p>
          )}
          <div className="text-sm text-muted-foreground [&>p]:mb-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export function InfoBox({
  title,
  children,
  className,
}: Omit<CalloutProps, "type">) {
  return (
    <Callout type="info" title={title} className={className}>
      {children}
    </Callout>
  );
}

export function WarningBox({
  title,
  children,
  className,
}: Omit<CalloutProps, "type">) {
  return (
    <Callout type="warning" title={title} className={className}>
      {children}
    </Callout>
  );
}
