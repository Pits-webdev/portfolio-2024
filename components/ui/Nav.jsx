import Link from "next/link";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/",
  },
  {
    title: "Contact",
    path: "/",
  },
];

const Nav = () => {
  return (
    <ul className='hidden  items-center gap-14 md:flex'>
      {links.map(({ title, path }) => (
        <li key={title}>
          <Link href={path}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
