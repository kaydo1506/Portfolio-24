type Props = {
  children: React.ReactNode;
  className?: string;
  href: string;
};

const SocialLink = ({ href, children, className = '' }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      className={`block text-sm p-2.5 hover:text-amber-900 hover:-translate-y-1 focus:outline-none focus:text-amber-900 focus:-translate-y-1 duration-200 ${className}`}
    >
      {children}
    </a>
  );
};

export default SocialLink;
