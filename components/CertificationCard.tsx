import React from "react";

type CertificationCardProps = {
  title: string;
  issuer: string;
  date: string;
  status: string;
};

export default function CertificationCard({
  title,
  issuer,
  date,
  status,
}: CertificationCardProps) {
  // We will use your custom colors to show if a certificate is done or ongoing
  const isCompleted = status === "Completed";

  return (
    <div className="mb-4 flex items-center justify-between rounded-lg border border-slate-200 p-4 transition-colors hover:border-blue-500">
      <div>
        <h3 className="font-medium text-slate-900">{title}</h3>
        <p className="text-sm text-slate-500">
          {issuer} • {date}
        </p>
      </div>

      {/* This section uses your emerald and blue tokens */}
      <div className="flex items-center gap-2">
        <span
          className={`h-2 w-2 rounded-full ${isCompleted ? "bg-emerald-500" : "bg-blue-500"}`}
        ></span>
        <span className="text-sm text-slate-600">{status}</span>
      </div>
    </div>
  );
}