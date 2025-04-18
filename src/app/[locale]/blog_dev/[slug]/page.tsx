import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
// import { Button } from "@/components/ui/Button"

// Esta función simularía la obtención de datos del post desde una base de datos o CMS
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getBlogPost(slug: string) {
  // Datos de ejemplo para demostración
  return {
    title: "Data-Driven Tire Management: How AI is Transforming Fleet Operations",
    image: "/images/fleet_manager.jpg",
    content: `
      <p class="lead">Discover how artificial intelligence is revolutionizing tire management for commercial fleets, leading to significant cost savings and improved safety.</p>

      <p>In the competitive world of fleet management, every operational efficiency counts. Tire management, often overlooked, represents a significant portion of operational costs for commercial fleets. Traditional approaches to tire management have relied on manufacturer recommendations and scheduled maintenance, but these methods fail to account for the unique operational conditions each fleet faces.</p>

      <h2>The Evolution of Tire Management</h2>

      <p>Historically, fleet managers have relied on general guidelines provided by tire manufacturers. These recommendations, while useful as a baseline, don't account for the myriad of variables that affect tire wear in real-world conditions:</p>

      <ul>
        <li>Route characteristics (urban vs. highway)</li>
        <li>Loading patterns</li>
        <li>Driver behavior</li>
        <li>Weather conditions</li>
        <li>Vehicle specifications</li>
      </ul>

      <p>Our research has shown that these variables can cause tire wear rates to vary by as much as 30% from manufacturer predictions, leading to either premature replacements or dangerous over-use.</p>

      <h2>The AI Revolution in Tire Management</h2>

      <p>Artificial intelligence and machine learning have transformed how we approach tire management. By analyzing millions of data points from real-world operations, AI algorithms can identify patterns and correlations that would be impossible for humans to detect.</p>

      <p>For example, our analysis of urban transit fleets revealed that tires on the exit-door side of buses wore out approximately 20% faster than those on the entrance side. This unexpected finding was traced back to passenger weight distribution – more passengers tend to gather near the exit doors as they prepare to disembark, creating uneven weight distribution.</p>

      <h2>Real-World Impact</h2>

      <p>The implementation of AI-driven tire management systems has delivered remarkable results for our clients:</p>

      <ul>
        <li>23% reduction in tire-related costs</li>
        <li>18% increase in tire lifespan</li>
        <li>15% reduction in unplanned downtime</li>
        <li>Significant improvements in safety metrics</li>
      </ul>

      <p>These improvements translate directly to the bottom line while also enhancing safety and reducing environmental impact through decreased tire consumption.</p>

      <h2>Looking Ahead</h2>

      <p>As AI technology continues to evolve, we anticipate even greater advances in predictive maintenance capabilities. The integration of real-time data from IoT sensors, weather forecasts, and traffic patterns will further enhance the accuracy of wear predictions and maintenance recommendations.</p>

      <p>For fleet managers looking to stay competitive in an increasingly challenging market, embracing data-driven tire management isn't just an option – it's becoming a necessity.</p>
    `,
    tags: ["AI", "Fleet Management", "Tire Optimization", "Cost Reduction", "Sustainability"],
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

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

