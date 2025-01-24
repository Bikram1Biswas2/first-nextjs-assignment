

export default async function BlogDetails({ params }) {
  const { id } = params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  if (!post.id) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold text-red-600">Post Not Found</h1>
      </div>
    );
  }

  return (
    <div className="p-4 w-11/12 mx-auto">
      <div className="card bg-base-100 shadow-xl border-t-2 border">
        <div className="card-body">
          <p className="text-xl font-bold text-center">{post.id}</p>
          <h1 className="text-3xl font-bold mb-4 text-center mt-6">
            Title : {post.title}
          </h1>
          <p className="text-gray-700 text-lg">Body : {post.body}</p>
         
        </div>
      </div>
    </div>
  );
}
