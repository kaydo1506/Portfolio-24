import SocialLinks from './SocialLinks';
import { footerSection } from '../utils/portfolio';

const Footer = () => {
  return (
    <footer className="max-w-lg mx-auto text-center font-mono mb-5 text-xs">
      <SocialLinks className="flex md:hidden justify-center gap-3 mb-3" />
     
        {footerSection.title}
    </footer>
  );
};

export default Footer;
