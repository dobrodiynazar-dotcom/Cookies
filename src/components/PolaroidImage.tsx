import Image from "next/image";

type PolaroidImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

export function PolaroidImage({
  src,
  alt,
  priority = false,
  className = "",
}: PolaroidImageProps) {
  return (
    <figure className={`polaroid ${className}`.trim()}>
      <div className="polaroid__image-wrap">
        <Image
          alt={alt}
          className="polaroid__image"
          fill
          fetchPriority={priority ? "high" : "auto"}
          loading={priority ? "eager" : "lazy"}
          sizes="(max-width: 720px) 78vw, (max-width: 1100px) 46vw, 36rem"
          src={src}
        />
      </div>
    </figure>
  );
}
