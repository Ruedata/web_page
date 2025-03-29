import Link from "next/link"
import { Button } from "@/components/ui/Button"
import Image from "next/image"
import { useLanguage } from "@/components/Language-provider";

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
}
const Hero  = ({title, subtitle, image}: HeroProps) => {
  const { t } = useLanguage()

  return (
    <section className="container px-4 w-full md:py-8 sm:py-4 mx-auto grid lg:grid-cols-2 sm:grid-cols-1 gap-4 mt-4">
      <div className="flex justify-center flex-col">
        <h1 className="text-2xl sm:text-4xl text-2xl sm:text-4xl md:text-5xl font-bold text-navy-blue mb-2 lg:mb-8 self-start">{t(title)}</h1>
        <p className="max-w-[600px] text-gray-600 text-lg/relaxed lg:text-xl/relaxed mb-4 lg:mb-8">{t(subtitle)}</p>
        <Link href="/get-started/">
          <Button className="bg-navy-blue hover:bg-cyan-500 text-white mb-8 lg:mb-8">{t("nav.get-started")}</Button>
        </Link>
      </div>
      <div className="relative h-[300px] sm:h-[400px]">
        <Image
          src={image}
          alt="Tire management with AI visualization"
          fill
          className="rounded-2xl object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;