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
        className="rounded shadow-xl transition-transform  duration-150 ease-in-out group-hover:scale-75"
      />
      <div className="absolute inset-0 border-[3px] z-[-1] rounded border-amber-900 duration-150 sm:block"></div>
    </div>
  );
};

export default HeroImage;
