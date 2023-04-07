import Link from "next/link";
export default function Navbar() {
  return (
    <div className="border-[1px] flex items-center justify-around sm:justify-between sm:px-72 h-16">
      <div>Left</div>
      <div className="flex gap-4">
        <Link href="#">First</Link>
        <Link href="#">Second</Link>
        <Link href="#">Third</Link>
      </div>
    </div>
  );
}
