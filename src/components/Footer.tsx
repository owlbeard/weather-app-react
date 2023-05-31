import GitHub from '../assets/github.svg';
export default function Footer() {
  return (
    <div className="container flex justify-center items-center gap-4">
      <img className="sm:h-12 h-8" src={GitHub} alt="Github Logo" />
      <p className="sm:text-lg text-xs">Copyright © 2023 || owlbeard</p>
    </div>
  );
}
