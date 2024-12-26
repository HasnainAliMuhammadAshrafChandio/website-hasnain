import Image from "next/image";

interface ImgProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function Img({ src, alt, width, height, className }: ImgProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority // Use `priority` if this is a critical image for LCP
    />
  );
}
