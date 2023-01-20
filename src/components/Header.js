import me from "../me.png";

export default function Header() {
  return (
    <header id="/home/">
      <div>
        <h1 className="text-center">Rafael Vasconcelos</h1>
        <h2 className="text-center">Full Stack Web Developer</h2>
      </div>
      <div className="text-center">
        <a
          target="_blank"
          href="https://github.com/rafa-vasconcelos"
          rel="noreferrer"
        >
          <img src={me} className="image-me" alt="Rafael Vasconcelos"></img>
        </a>
      </div>
    </header>
  );
}
