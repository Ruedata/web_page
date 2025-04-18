import Link from "next/link"

export default function BlogNotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
      <p className="text-xl text-muted-foreground mb-8">
        The blog post you're looking for doesn't exist or has been moved.
      </p>
      <Link href="/blog_dev/" className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors">
        Return to Blog
      </Link>
    </div>
  )
}
