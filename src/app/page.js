import MediaCard from "@/components/media-card/MediaCard";

export default function Home() {
  return (
    <div className="mt-10 flex min-h-screen flex-col items-center justify-between p-24">
      <MediaCard mediaId={10} />
    </div>
  );
}
