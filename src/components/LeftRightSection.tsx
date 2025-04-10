import Image from "next/image";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation'
import { Button } from "./ui/Button";
interface LeftRightSectionProps {
  title: string;
  subtitle: string;
  ul: string[];
  image: string;
  left?: boolean;
  button?: boolean;
  link?: string;
}

const LeftRightSection = ({ title, subtitle, ul, image, left=false, button=false, link }: LeftRightSectionProps) => {
  const t = useTranslations();

  return (
    <section className="odd:bg-gray-200 w-full">
      <div className="container px-4 w-full md:py-8 sm:py-4 mx-auto grid lg:grid-cols-2 sm:grid-cols-1 gap-16 mt-4">
        <div className={left ? "order-1 lg:order-2" : ""}>
          <h3 className="text-2xl lg:text-4xl font-bold text-navy-blue mb-2 lg:mb-4">{t(title)}</h3>
          <p className="text-gray-600 text-lg/relaxed lg:text-xl/relaxed mb-4 lg:mb-8">{t(subtitle)}</p>
          <ul className="list-disc pl-5 text-gray-600 text-lg space-y-2">
            {
              ul.map((li, index) => (
                <li key={index}>{t(li)}</li>
              ))
            }
          </ul>
          {button && link && (
            <Link href={link}>
              <Button className="bg-primary text-white mb-8 lg:mb-8">{t("nav.get-started")}</Button>
            </Link>
          )}
        </div>
        <div className={`relative h-[300px] sm:h-[400px] ${left ? "order-2 lg:order-1" : ""}`}>
          <Image
            src={image}
            alt="Tire management with AI visualization"
            fill
            className="rounded-2xl object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
};
export default LeftRightSection;