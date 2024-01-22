import Image from 'next/image';

type Props = { src: string; alt: string };

const HeroImage = ({ src, alt }: Props) => {
  return (
    <div className="relative group w-64 h-64 sm:w-auto sm:h-auto hidden sm:block">
      <Image
        src={src}
        alt={alt}
        width={300}
        height={300}
        className="rounded shadow-xl "
        priority
      />
      <div className="absolute inset-0 border-[3px] z-[-1] rounded border-amber-900 translate-x-6 translate-y-6 group-hover:translate-x-4 group-hover:translate-y-4 duration-150 hidden sm:block"></div>
    </div>
  );
};

export default HeroImage;
