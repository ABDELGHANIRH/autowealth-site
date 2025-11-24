import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="rounded-xl border p-4 hover:shadow-xl transition">
        <img src={post.thumbnail} className="w-full rounded-lg mb-4" alt="" />
        <h2 className="text-2xl font-semibold">{post.title}</h2>
        <p className="text-gray-600 mt-2">{post.description}</p>
        <p className="text-gray-400 text-sm mt-1">{post.date}</p>
      </div>
    </Link>
  );
}
