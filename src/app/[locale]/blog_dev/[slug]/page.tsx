import React from "react";
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { getBlogPostBySlug } from "../../../../lib/firebase"
import "./styles.css";

export async function generateMetadata({
  params
}: {
  params: { slug: string, locale: string }
}): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug, params.locale)

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found'
    }
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    }
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string, locale: string } }) {
  const post = await getBlogPostBySlug(params.slug, params.locale)

  if (!post) {
    notFound()
  }

  return (
    <article className="container px-4 w-full md:py-8 sm:py-4 mx-auto max-w-screen-lg rue-content">
      <div className="mb-8">
        <Link
          href="/blog_dev/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al blog
        </Link>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">{post.title}</h1>
        <div className="relative aspect-video w-full mb-10 overflow-hidden rounded-lg">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>

    </article>
  )
}

