import Link from "next/link";
export default function Navbar() {
  return (
    <div className="flex items-center justify-around sm:justify-between sm:px-72 h-16">
      <Link href="/">БОНСАЙ</Link>
      <div className="flex gap-4">
        <Link legacyBehavior href="/">
          <a>
            <h1>Главная</h1>
          </a>
        </Link>
        <Link href="profile">Профиль</Link>
        <Link href="auth">Войти</Link>
      </div>
    </div>
  );
}
