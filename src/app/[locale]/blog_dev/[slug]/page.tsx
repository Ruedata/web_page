import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { Metadata } from "next"

const mockPosts = {
  'data-driven-tire-management': {
    'en': {
      title: 'Data-Driven Tire Management: How AI is Transforming Fleet Operations',
      image: '/images/fleet_manager.jpg',
      description: 'Discover how artificial intelligence is revolutionizing tire management for commercial fleets, leading to significant cost savings and improved safety.',
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
      `
    },
    'es': {
      title: 'Gestión de Neumáticos Basada en Datos: Cómo la IA está Transformando las Operaciones de Flotas',
      image: '/images/fleet_manager.jpg',
      description: 'Descubre cómo la inteligencia artificial está revolucionando la gestión de neumáticos para flotas comerciales, generando ahorros significativos y mejorando la seguridad.',
      content: `
        <p class="lead">Descubre cómo la inteligencia artificial está revolucionando la gestión de neumáticos para flotas comerciales, generando ahorros significativos y mejorando la seguridad.</p>

        <p>En el competitivo mundo de la gestión de flotas, cada eficiencia operativa cuenta. La gestión de neumáticos, a menudo pasada por alto, representa una parte significativa de los costos operativos de las flotas comerciales. Los enfoques tradicionales de gestión de neumáticos se han basado en recomendaciones de fabricantes y mantenimiento programado, pero estos métodos no tienen en cuenta las condiciones operativas únicas que enfrenta cada flota.</p>

        <h2>La Evolución de la Gestión de Neumáticos</h2>

        <p>Históricamente, los gestores de flotas han confiado en pautas generales proporcionadas por los fabricantes de neumáticos. Estas recomendaciones, aunque útiles como base, no tienen en cuenta la miríada de variables que afectan el desgaste de los neumáticos en condiciones del mundo real:</p>

        <ul>
          <li>Características de la ruta (urbana vs. autopista)</li>
          <li>Patrones de carga</li>
          <li>Comportamiento del conductor</li>
          <li>Condiciones climáticas</li>
          <li>Especificaciones del vehículo</li>
        </ul>
      `
    },
    'pt': {
      title: 'Gestão de Pneus Baseada em Dados: Como a IA está Transformando Operações de Frotas',
      image: '/images/fleet_manager.jpg',
      description: 'Descubra como a inteligência artificial está revolucionando a gestão de pneus para frotas comerciais, levando a economias significativas de custos e melhorando a segurança.',
      content: `
        <p class="lead">Descubra como a inteligência artificial está revolucionando a gestão de pneus para frotas comerciais, levando a economias significativas de custos e melhorando a segurança.</p>

        <p>No mundo competitivo da gestão de frotas, cada eficiência operacional conta. A gestão de pneus, frequentemente negligenciada, representa uma parte significativa dos custos operacionais de frotas comerciais. Abordagens tradicionais à gestão de pneus dependeram de recomendações do fabricante e manutenção programada, mas esses métodos não levam em conta as condições operacionais únicas que cada frota enfrenta.</p>

        <h2>A Evolução da Gestão de Pneus</h2>

        <p>Historicamente, os gestores de frotas dependeram de diretrizes gerais fornecidas pelos fabricantes de pneus. Essas recomendações, embora úteis como linha de base, não levam em conta a miríade de variáveis que afetam o desgaste dos pneus em condições do mundo real:</p>

        <ul>
          <li>Características da rota (urbana vs. rodovia)</li>
          <li>Padrões de carregamento</li>
          <li>Comportamento do motorista</li>
          <li>Condições climáticas</li>
          <li>Especificações do veículo</li>
        </ul>
      `
    }
  }
};

async function getBlogPost(slug: string, locale: string) {
  return mockPosts[slug]?.[locale] || null;
}

export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string, locale: string } 
}): Promise<Metadata> {
  const post = await getBlogPost(params.slug, params.locale)
  
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
  const post = await getBlogPost(params.slug, params.locale)
  
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

