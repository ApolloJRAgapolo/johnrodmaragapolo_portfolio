import React from 'react';
import Image from 'next/image';

interface VerificationCardProps {
  title: string;
  issuer: string;
  logoSrc: string; // New: Path to the issuer's logo
  verifyUrl?: string; // New: Verifiable link URL
}

export default function VerificationCard({ title, issuer, logoSrc, verifyUrl }: VerificationCardProps) {
  return (
    <div className="flex flex-col items-center p-6 text-center border border-slate-200 rounded-2xl transition-all hover:border-blue-500 hover:shadow-lg dark:border-slate-800 dark:hover:border-blue-500">
      {/* 1. Issuer Logo */}
      <div className="flex items-center justify-center w-12 h-12 p-1 mb-6 border border-slate-200 rounded-full dark:border-slate-800">
        <Image 
          src={logoSrc} 
          alt={`${issuer} logo`} 
          width={40} 
          height={40} 
          className="rounded-full" 
        />
      </div>

      {/* 2. Certificate Title (Bolded) */}
      <h3 className="font-semibold text-slate-900 mb-1 dark:text-white">{title}</h3>
      
      {/* 3. Issuer Name */}
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-10 flex-grow">{issuer}</p>
      
      {/* 4. Custom Verify Link (Styled like a modern tag) */}
      <a 
        href={verifyUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-xs font-mono text-slate-500 hover:text-blue-500 transition-colors uppercase tracking-wider dark:text-slate-400 dark:hover:text-blue-500"
      >
        <span className="text-sm">‹</span>
        <span className="opacity-80">VERIFY</span>
        <span className="text-sm">›</span>
      </a>
    </div>
  );
}