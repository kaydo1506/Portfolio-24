type Props = { children: React.ReactNode; className?: string };

const ListItem = ({ children, className = '' }: Props) => {
  return (
    <li
      className={`before:content-['▹'] flex before:mr-3 before:text-amber-900 before:block ${className}`}
    >
      {children}
    </li>
  );
};

export default ListItem;
