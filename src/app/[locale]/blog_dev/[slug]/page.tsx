import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { getBlogPostBySlug } from "../../../../lib/firebase"

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
    <main className="flex-1">
      <article className="container max-w-4xl px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="mb-8">
          <Link
            href="/blog_dev/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al blog
          </Link>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">{post.title}</h1>
        </div>

        <div className="relative aspect-video w-full mb-10 overflow-hidden rounded-lg">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        </div>
        <div className="prose prose-sky max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>

      {/* <section className="w-full py-12 md:py-24 bg-sky-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">¿Quieres optimizar tu flota?</h2>
              <p className="text-sky-100 md:text-xl/relaxed">
                Únete a líderes de la industria que confían en Ruedata para reducir costos, mejorar la sostenibilidad
                y aumentar la seguridad.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-end">
              <Button size="lg" className="bg-white text-sky-600 hover:bg-sky-50">
                Comenzar <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-sky-700">
                Contactar ventas
              </Button>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  )
}

