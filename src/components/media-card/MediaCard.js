import Image from "next/image";

export default function MediaCard() {
  return (
    <div className="font-montserrat rounded-xl shadow-md">
      <div className="">
        <Image
          className=""
          src="https://image.tmdb.org/t/p/w500/hYQsSRPHiWctoYqvI8baHiIqdd8.jpg"
          alt="media title"
          fill
        />
      </div>
      <div className="">
        <h2>Creed III</h2>
        <p> le 01/03/2023</p>
      </div>
    </div>
  );
}
