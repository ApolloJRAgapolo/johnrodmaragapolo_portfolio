"use client";

import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Eye, ExternalLink } from "lucide-react";
import GlowingCard from "@/components/shared/GlowingCard";
import type { Credential, IconComponent, PreviewDocument } from "@/lib/types";

export default function CredentialCard({ credential, icon: Icon = ShieldCheck, onPreview }: { credential: Credential; icon?: IconComponent; onPreview: (document: PreviewDocument) => void }) {
  const { title, issuer, logoSrc } = credential;
  const kind = credential.action === "viewer" ? credential.viewerMetadata?.documentType ?? "Supporting document" : credential.verificationUrl.includes("/skill-verification/") ? "Professional certification" : "Course completion";
  return (
    <GlowingCard className="group flex flex-col justify-between p-6 border border-border/40 hover:border-foreground/20 transition-colors bg-secondary/5 h-full">
      <div>
        <Icon className="w-4 h-4 stroke-[1.5] text-muted-foreground mb-4" />
        <h3 className="text-[13px] font-medium text-foreground leading-snug mb-2">{title}</h3>
        
        <p className="mb-3 text-[11px] text-muted-foreground">{kind}</p>
        <div className="flex items-center gap-2">
          {logoSrc && (
            <div className="relative w-4 h-4 opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all">
              <Image 
                src={logoSrc} 
                alt={`${issuer} logo`} 
                fill 
                className="object-contain"
              />
            </div>
          )}
          <p className="text-[11px] text-muted-foreground font-mono uppercase tracking-wider">{issuer}</p>
        </div>
      </div>
      <div className="mt-6 pt-4 border-t border-border/40">
        {credential.action === "viewer" ? (
          <button type="button" onClick={() => onPreview({ title, fileUrl: credential.pdfPath, metadata: credential.viewerMetadata, aspectRatio: credential.aspectRatio, viewerOptions: credential.viewerOptions })} className="flex min-h-11 items-center gap-2 text-[10px] uppercase tracking-widest text-foreground transition-colors hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
            View Credential <Eye className="w-3 h-3 stroke-[1.5]" />
          </button>
        ) : (
          <Link href={credential.verificationUrl} target="_blank" className="flex min-h-11 items-center gap-2 text-[10px] uppercase tracking-widest text-foreground transition-colors hover:text-muted-foreground">
            Verify Credential <ExternalLink className="w-3 h-3 stroke-[1.5]" />
          </Link>
        )}
      </div>
    </GlowingCard>
  );
}
