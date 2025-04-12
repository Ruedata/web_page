import Image from "next/image";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation'
import { Button } from "./ui/Button";
import { CheckIcon } from '@/components/Icons/checkIcon';
import React from "react";
interface LeftRightSectionProps {
  title: string;
  subtitle: string;
  ul: string[];
  image: string;
  left?: boolean;
  button?: boolean;
  link?: string;
  height?: string;
  objectCover?: boolean;
  centerContent?: boolean;
  Icons?: React.FC<{ className?: string }>[];
}

const LeftRightSection = ({
  title,
  subtitle,
  ul,
  image,
  left=false,
  button=false,
  link,
  height='h-[300px] sm:h-[400px]',
  objectCover=true,
  centerContent=false,
  Icons=[],
}: LeftRightSectionProps) => {
  const t = useTranslations();

  return (
    <section className="w-full">
      <div className="container px-4 w-full md:py-8 sm:py-4 mx-auto grid lg:grid-cols-2 sm:grid-cols-1 gap-16 mt-4">
        <div className={`${left ? "order-1 lg:order-2" : ""} ${centerContent ? 'flex justify-center flex-col' : '' }`}>
          <h3 className="text-2xl lg:text-4xl font-bold text-navy-blue mb-2 lg:mb-4">{t(title)}</h3>
          <p className="text-gray-600 text-lg/relaxed lg:text-xl/relaxed mb-4 lg:mb-8">{t(subtitle)}</p>
          <ul className="text-gray-600 text-lg space-y-2">
            {
              ul.map((li, index) => (
                <li className='flex items-center' key={index}>
                  {
                    Icons.length > 0 && Icons?.[index]
                    ? (React.createElement(Icons[index], { className: 'h-[32px] w-[32px] mr-2' }))
                    : (<CheckIcon className="h-[32px] w-[32px] mr-2" />)
                  }
                  {/* <CheckIcon className="h-[32px] w-[32px] mr-2" /> */}
                  {t(li)}
                </li>
              ))
            }
          </ul>
          {button && link && (
            <Link href={link}>
              <Button className="bg-primary text-white mb-8 lg:mb-8">{t("nav.get-started")}</Button>
            </Link>
          )}
        </div>
        <div className={`relative ${height} w-full ${left ? "order-2 lg:order-1" : ""}`}>
          <Image
            src={image}
            alt="Tire management with AI visualization"
            fill
            className={`rounded-2xl ${objectCover ? "object-cover" : ""}`}
            priority
          />
        </div>
      </div>
    </section>
  )
};
export default LeftRightSection;