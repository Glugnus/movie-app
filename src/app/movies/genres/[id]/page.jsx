export default async function GenreId({ params }) {
  const resolvedParams = await params;

  return (
    <div>
      <p>Genre id : {resolvedParams.id}</p>
    </div>
  );
}
