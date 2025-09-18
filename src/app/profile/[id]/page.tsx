export default function UserProfile({ params }: any) {
  return (
    <div>
      <h1>Profile</h1>
      <hr />
      <p className="text-4xl">
        Profile Page
        <span className="p-2 rounded-2xl bg-orange-500 text-black">
          {params.id}
        </span>
      </p>
    </div>
  );
}
