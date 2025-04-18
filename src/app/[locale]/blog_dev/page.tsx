import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/Button"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-primary/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ruedata Blog</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Insights on tire optimization, fleet management, and data analytics
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col gap-4 md:gap-8">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Featured Articles</h2>
                <p className="text-muted-foreground">Our latest insights and success stories</p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <article className="group space-y-4">
                  <Link href="/blog/data-driven-tire-management" className="block overflow-hidden rounded-lg">
                    <Image
                      src="/images/home/truck-drives-fast-highway-bright-sun-with-sunbeams-blue-sky.jpg"
                      alt="Fleet of trucks with optimized tires"
                      width={600}
                      height={400}
                      className="aspect-video object-cover transition-transform group-hover:scale-105"
                    />
                  </Link>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <time dateTime="2025-04-01">April 1, 2025</time>
                      <span>•</span>
                      <Clock className="h-4 w-4" />
                      <span>5 min read</span>
                    </div>
                    <h3 className="text-xl font-bold">
                      <Link href="/blog/data-driven-tire-management" className="hover:underline">
                        Data-Driven Tire Management: How AI is Transforming Fleet Operations
                      </Link>
                    </h3>
                    <p className="text-muted-foreground">
                      Discover how artificial intelligence is revolutionizing tire management for commercial fleets,
                      leading to significant cost savings and improved safety.
                    </p>
                    <Link
                      href="/blog/data-driven-tire-management"
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                    >
                      Read more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
                <article className="group space-y-4">
                  <Link href="/blog/case-study-heineken" className="block overflow-hidden rounded-lg">
                    <Image
                      src="/images/home/truck-drives-fast-highway-bright-sun-with-sunbeams-blue-sky.jpg"
                      alt="Heineken delivery trucks"
                      width={600}
                      height={400}
                      className="aspect-video object-cover transition-transform group-hover:scale-105"
                    />
                  </Link>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <time dateTime="2025-03-15">March 15, 2025</time>
                      <span>•</span>
                      <Clock className="h-4 w-4" />
                      <span>8 min read</span>
                    </div>
                    <h3 className="text-xl font-bold">
                      <Link href="/blog/case-study-heineken" className="hover:underline">
                        Case Study: How Heineken Reduced Tire Costs by 23% with Ruedata
                      </Link>
                    </h3>
                    <p className="text-muted-foreground">
                      {`Learn how Heineken implemented Ruedata's AI-powered platform to optimize their fleet operations
                      and achieve significant cost savings.`}
                    </p>
                    <Link
                      href="/blog/case-study-heineken"
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                    >
                      Read more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
                <article className="group space-y-4">
                  <Link href="/blog/sustainability-through-optimization" className="block overflow-hidden rounded-lg">
                    <Image
                      src="/images/home/truck-drives-fast-highway-bright-sun-with-sunbeams-blue-sky.jpg"
                      alt="Sustainable fleet management"
                      width={600}
                      height={400}
                      className="aspect-video object-cover transition-transform group-hover:scale-105"
                    />
                  </Link>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <time dateTime="2025-02-28">February 28, 2025</time>
                      <span>•</span>
                      <Clock className="h-4 w-4" />
                      <span>6 min read</span>
                    </div>
                    <h3 className="text-xl font-bold">
                      <Link href="/blog/sustainability-through-optimization" className="hover:underline">
                        Sustainability Through Optimization: Reducing Carbon Footprint with Smart Tire Management
                      </Link>
                    </h3>
                    <p className="text-muted-foreground">
                      Explore how optimizing tire usage not only reduces costs but also contributes to environmental
                      sustainability by minimizing waste and emissions.
                    </p>
                    <Link
                      href="/blog/sustainability-through-optimization"
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                    >
                      Read more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col gap-4 md:gap-8">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Recent Articles</h2>
                <p className="text-muted-foreground">Stay up to date with our latest insights</p>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                <article className="flex flex-col md:flex-row gap-4 items-start">
                  <Link href="/blog/urban-transit-insights" className="block md:w-1/3 overflow-hidden rounded-lg">
                    <Image
                      src="/images/home/truck-drives-fast-highway-bright-sun-with-sunbeams-blue-sky.jpg"
                      alt="Urban transit bus"
                      width={300}
                      height={200}
                      className="aspect-video object-cover transition-transform hover:scale-105"
                    />
                  </Link>
                  <div className="space-y-2 md:w-2/3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <time dateTime="2025-02-15">February 15, 2025</time>
                      <span>•</span>
                      <span>4 min read</span>
                    </div>
                    <h3 className="text-lg font-bold">
                      <Link href="/blog/urban-transit-insights" className="hover:underline">
                        Urban Transit Insights: Why Exit-Door Tires Wear Faster
                      </Link>
                    </h3>
                    <p className="text-muted-foreground">
                      A deep dive into our discovery about passenger weight distribution affecting tire wear in urban
                      transit fleets.
                    </p>
                  </div>
                </article>
                <article className="flex flex-col md:flex-row gap-4 items-start">
                  <Link href="/blog/predictive-maintenance" className="block md:w-1/3 overflow-hidden rounded-lg">
                    <Image
                      src="/images/home/truck-drives-fast-highway-bright-sun-with-sunbeams-blue-sky.jpg"
                      alt="Predictive maintenance dashboard"
                      width={300}
                      height={200}
                      className="aspect-video object-cover transition-transform hover:scale-105"
                    />
                  </Link>
                  <div className="space-y-2 md:w-2/3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <time dateTime="2025-02-01">February 1, 2025</time>
                      <span>•</span>
                      <span>7 min read</span>
                    </div>
                    <h3 className="text-lg font-bold">
                      <Link href="/blog/predictive-maintenance" className="hover:underline">
                        Predictive Maintenance: Preventing Tire Failures Before They Happen
                      </Link>
                    </h3>
                    <p className="text-muted-foreground">
                      How our AI algorithms can predict tire failures weeks in advance, allowing for proactive
                      maintenance and preventing costly downtime.
                    </p>
                  </div>
                </article>
                <article className="flex flex-col md:flex-row gap-4 items-start">
                  <Link href="/blog/case-study-cemex" className="block md:w-1/3 overflow-hidden rounded-lg">
                    <Image
                      src="/images/home/truck-drives-fast-highway-bright-sun-with-sunbeams-blue-sky.jpg"
                      alt="Cemex concrete mixer truck"
                      width={300}
                      height={200}
                      className="aspect-video object-cover transition-transform hover:scale-105"
                    />
                  </Link>
                  <div className="space-y-2 md:w-2/3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <time dateTime="2025-01-20">January 20, 2025</time>
                      <span>•</span>
                      <span>6 min read</span>
                    </div>
                    <h3 className="text-lg font-bold">
                      <Link href="/blog/case-study-cemex" className="hover:underline">
                        Case Study: CEMEX Improves Safety and Reduces Downtime with Ruedata
                      </Link>
                    </h3>
                    <p className="text-muted-foreground">
                      {`How CEMEX implemented Ruedata's platform to enhance safety measures and minimize vehicle downtime
                      in their concrete mixer fleet.`}
                    </p>
                  </div>
                </article>
                <article className="flex flex-col md:flex-row gap-4 items-start">
                  <Link href="/blog/roi-tire-management" className="block md:w-1/3 overflow-hidden rounded-lg">
                    <Image
                      src="/images/home/truck-drives-fast-highway-bright-sun-with-sunbeams-blue-sky.jpg"
                      alt="ROI chart for tire management"
                      width={300}
                      height={200}
                      className="aspect-video object-cover transition-transform hover:scale-105"
                    />
                  </Link>
                  <div className="space-y-2 md:w-2/3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <time dateTime="2025-01-10">January 10, 2025</time>
                      <span>•</span>
                      <span>5 min read</span>
                    </div>
                    <h3 className="text-lg font-bold">
                      <Link href="/blog/roi-tire-management" className="hover:underline">
                        The ROI of Smart Tire Management: Calculating Your Potential Savings
                      </Link>
                    </h3>
                    <p className="text-muted-foreground">
                      A comprehensive guide to calculating the return on investment for implementing data-driven tire
                      management in your fleet.
                    </p>
                  </div>
                </article>
              </div>
              <div className="flex justify-center mt-8">
                <Button variant="outline" size="lg" className="gap-2">
                  Load more articles <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
