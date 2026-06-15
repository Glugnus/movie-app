export default async function MoviePage({ params }) {
  const resolvedParams = await params;

  return (
    <div>
      <h1>Movie page with id : {resolvedParams.id}</h1>
    </div>
  );
}
