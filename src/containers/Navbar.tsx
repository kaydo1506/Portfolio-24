import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button, DarkModeButton, Link, NavButton } from '../components';
import { fadeIn, slideIn } from '../animations';
import { author, navbarSection } from '../utils/portfolio';
import { getBreakpointsWidth, getId } from '../utils/helper';
import useWindowWidth from '../hooks/use-window-width';
type NavItemsProps = {
  href?: string;
  children: React.ReactNode;
  index: number;
  delay: number;
  onClick?: (event: React.MouseEvent) => void;
};

const NavItem = ({ href, children, onClick, index, delay }: NavItemsProps) => {
  return (
    <motion.li
      className="group"
      variants={slideIn({ delay: delay + index / 10, direction: 'down' })}
      initial="hidden"
      animate="show"
    >
      <Link
        href={href || `/#${children}`}
        className="p-2 hover:text-amber-900 duration-400 block"
        onClick={onClick}
        withPadding
      >
        {children}
      </Link>
    </motion.li>
  );
};

const Navbar = () => {
  const { navLinks } = navbarSection; // Assuming you have navbarSection and author defined somewhere
  const [navbarCollapsed, setNavbarCollapsed] = useState(false);

  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth('md');
  const ANIMATION_DELAY = windowWidth <= md ? 0 : 0.8;

  return (
    <motion.header
      variants={fadeIn(0.5)}
      initial="hidden"
      animate="show"
      id="navbar"
      className="px-8 md:px-6 xl:px-12 py-4 fixed inset-x-0 top-0 z-50 duration-500 backdrop-blur-lg flex justify-between"
    >
      <h1 className="font-signature capitalize text-2xl relative group top-1 text-amber-900">
        <a href="/#hero" className="block">
          {author.name}
          <div className="absolute bottom-1.5 left-0 h-[1px] w-0 group-hover:w-full bg-amber-900 duration-300"></div>
        </a>
      </h1>

      <NavButton
        onClick={() => {
          setNavbarCollapsed((prev) => !prev);
        }}
        navbarCollapsed={navbarCollapsed}
        className="md:hidden"
      />

      {(navbarCollapsed || windowWidth > md) && (
        <nav
          className={`capitalize text-sm md:bg-transparent z-50 w-full md:w-auto md:static md:p-0 md:h-auto`}
        >
          <ul
            className={`list-none flex flex-col md:flex-row gap-3 lg:gap-5 xl:gap-6 items-stretch md:items-center`}
          >
            {navLinks.map(({ name, url }, i) => (
              <NavItem
                key={i}
                href={url}
                index={i}
                delay={ANIMATION_DELAY}
                onClick={() => setNavbarCollapsed(false)}
              >
                {name}
              </NavItem>
            ))}

            <div className="flex justify-between gap-5 xl:gap-6 items-center">
              <DarkModeButton
                onClick={() => setNavbarCollapsed(false)}
                variants={slideIn({
                  delay: ANIMATION_DELAY + (navLinks.length + 1) / 10,
                  direction: 'down',
                })}
                initial="hidden"
                animate="show"
              />
            </div>
          </ul>
        </nav>
      )}
    </motion.header>
  );
};

export default Navbar;
