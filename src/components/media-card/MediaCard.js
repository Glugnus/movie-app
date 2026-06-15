import Image from "next/image";
import Link from "next/link";

export default function MediaCard({ mediaId }) {
  return (
    <div className="font-montserrat min-w-52 rounded-xl shadow-md">
      <Link href={`/movies/${mediaId}`}>
        <div className="relative h-80 w-full">
          <Image
            className="rounded-xl"
            src="https://www.mamp.one/wp-content/uploads/2024/09/image-resources2.jpg"
            alt="media title"
            fill
          />
        </div>
        <div className="px-1.5 py-2.5">
          <h2 className="mx-1 text-base font-bold">Creed III</h2>
          <p className="text-xs font-light"> le 01/03/2023</p>
        </div>
      </Link>
    </div>
  );
}
