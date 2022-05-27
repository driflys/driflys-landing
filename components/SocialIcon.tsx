// next
import Image from "next/image";
import Link from "next/link";

const SocialIcon = ({
  id,
  src,
  alt,
  href,
}: {
  id?: string;
  src: string;
  alt: string;
  href: string;
}) => {
  return (
    <Link href={href}>
      <a id={id || "social-icon"} target="_blank">
        <div className="bg-gray-900 hover:bg-gray-800 w-14 h-14 rounded-lg flex justify-center items-center">
          <Image
            src={src}
            alt={alt}
            width={25}
            height={25}
            objectFit="contain"
          />
        </div>
      </a>
    </Link>
  );
};

export default SocialIcon;
