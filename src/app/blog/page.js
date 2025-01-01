import Link from "next/link";
import posts from "../data/posts.json"; 

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 rounded-lg  my-32">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Blog Posts</h1>
      <div className="flex flex-wrap -mx-4">
        {posts.map((post) => (
          <div key={post.id} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <Link href={`/blog/${post.id}`} className="text-lg font-semibold text-blue-600 hover:underline">
                {post.title}
              </Link>
              <p className="mt-2 text-gray-600">{post.content.substring(0, 100)}...</p> {/* Display a snippet of the content */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}