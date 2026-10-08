"use client";

import Image from "next/image";
import { useState } from "react";
import { FileText } from "lucide-react";
import type { IconComponent } from "@/lib/types";
import type { DocumentThumbnail } from "@/lib/data/document-previews";

/** Decorative image: its surrounding button supplies the document's name. */
export default function DocumentThumbnailImage({ thumbnail, icon: Icon = FileText, compact = true, sizes }: { thumbnail?: DocumentThumbnail; icon?: IconComponent; compact?: boolean; sizes?: string }) {
  const [failed, setFailed] = useState(false);
  if (!thumbnail || failed) {
    return <span aria-hidden="true" className={`flex items-center justify-center text-muted-foreground ${compact ? "h-full" : "aspect-[1.414]"}`}><Icon aria-hidden="true" className="h-6 w-6 stroke-[1.5]" /></span>;
  }
  return compact ? (
    <Image src={thumbnail.src} alt="" fill sizes={sizes ?? "88px"} className="object-contain" loading="lazy" onError={() => setFailed(true)} />
  ) : (
    <Image src={thumbnail.src} alt="" width={thumbnail.width} height={thumbnail.height} sizes={sizes ?? "(max-width: 639px) calc(100vw - 80px), (max-width: 1023px) calc((100vw - 128px) / 2), 400px"} className="block h-auto w-full" loading="lazy" onError={() => setFailed(true)} />
  );
}
