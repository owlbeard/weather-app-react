import GitHub from '../assets/github.svg';
export default function Footer() {
  return (
    <div className="bg-chan flex justify-center items-center gap-4">
      <a href="https://github.com/owlbeard">
        <img className="sm:h-12 h-8" src={GitHub} alt="Github Logo" />
      </a>
      <p className="sm:text-lg text-xs">Copyright © 2023 || owlbeard</p>
    </div>
  );
}
