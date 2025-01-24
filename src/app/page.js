import Link from "next/link";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div className="p-4 w-11/12 mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center mt-6">Blog Posts</h1>
      <ul className="space-y-2 grid md:grid-cols-3 lg:grid-cols-4 gap-5">
        {posts.map((post) => (
          <div key={post.id} className="card bg-base-100 shadow-xl border border-cyan-400">
            <div className="card-body">
              <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline">
                {post.title}
              </Link>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

        