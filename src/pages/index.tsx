import Link from "next/link";

export default function IndexPage() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex gap-5">
        <Link href="https://blog.hoojun.kim/">
          <button className="btn btn-neutral">Blog</button>
        </Link>
        <Link href="https://gallery.hoojun.kim/">
          <button className="btn btn-neutral">Gallery</button>
        </Link>
      </div>
    </div>
  );
}
