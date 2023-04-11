import Link from "next/link";
export default function Navbar() {
  return (
    <div className="flex items-center justify-around px-8 sm:justify-between px-32 lg:px-72 h-16">
      <Link href="/">БОНСАЙ</Link>
      <div className="flex gap-4">
        <Link href="profile">Профиль</Link>
        <Link href="auth">Войти</Link>
      </div>
    </div>
  );
}
