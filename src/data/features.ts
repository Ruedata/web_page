import { ArrowIcon } from "@/components/Icons/arrowIcon";
import { EyeIcon } from "@/components/Icons/eyeIcon";
import { PowerBiIcon } from "@/components/Icons/PowerBi";
import { RotateTopIcon } from "@/components/Icons/rotateTopIcon";
import { TrashIcon } from "@/components/Icons/TrashIcon";

export const features = [
  {
    title: 'features.title1',
    subtitle: 'features.p1',
    height: 'h-[300px] sm:h-[600px]',
    ul: [
      'features.inspectionUnderOneMinute',
      'features.noManualEntry',
      'features.makeRotationsEasily',
      'features.workOfflineMode',
      'features.smartErrorsAlert',
    ],
    image: '/images/home/group1.svg',
    objectCover: true,
    Icons: [],
    centerContent: true,
  },
  {
    title: 'features.title2',
    subtitle: 'features.p2',
    height: 'h-[300px] sm:h-[600px]',
    centerContent: true,
    icons: [],
    ul: [
      'features.compliance',
      'features.prevent',
      'features.minimize',
      'features.powerBi',
      'features.lower',
    ],
    image: '/images/flat.png',
  },
  {
    title: 'features.title3',
    subtitle: 'features.p3',
    height: 'h-[300px] sm:h-[600px]',
    centerContent: true,
    ul: [
      'features.fulloperation',
      'features.realtime',
      'features.makeRotationsEasily',
      'features.powerBi',
      'features.monitorTireDisposal',
    ],
    Icons: [
      ArrowIcon,
      EyeIcon,
      PowerBiIcon,
      RotateTopIcon,
      TrashIcon,
    ],
    image: '/images/home/group2.svg',
  },
  {
    title: 'features.title4',
    subtitle: 'features.p4',
    height: 'h-[300px] sm:h-[600px]',
    centerContent: true,
    ul: [
      'features.aiBased',
      'features.automated',
      'features.detechMechanicalFailures',
      'features.trackWorstPerformance',
    ],
    Icons: [],
    image: '/images/home/group2.svg',
  },
  {
    title: 'features.title5',
    subtitle: 'features.p5',
    height: 'h-[300px] sm:h-[600px]',
    centerContent: true,
    ul: [
      'features.LowerCostMilage',
      'features.increaseLifeSpam',
      'features.retreadingRates',
      'features.extendLife',
    ],
    Icons: [],
    image: '/images/home/group3.svg',
  },
  {
    title: 'features.title6',
    subtitle: 'features.p6',
    height: 'h-[300px] sm:h-[600px]',
    centerContent: true,
    ul: [],
    image: '/images/manager.jpg',
    button: true,
    Icons: [],
    link: '/demo/',
  },
];

export const images: string[] = [
  '/images/logos_mono/1.png',
  '/images/logos_mono/2.png',
  '/images/logos_mono/3.png',
  '/images/logos_mono/4.png',
  '/images/logos_mono/5.png',
  '/images/logos_mono/6.png',
  '/images/logos_mono/7.png',
  '/images/logos_mono/8.png',
  '/images/logos_mono/9.png',
  '/images/logos_mono/10.png',
];

export const partnersImages = [
  {img: '/images/logos_partners/1.png', alt: 'AON'},
  {img: '/images/logos_partners/2.png', alt: 'Gallagher'},
  {img: '/images/logos_partners/3.png', alt: 'Geotab'},
  {img: '/images/logos_partners/4.png', alt: 'Volkswagen'},
];

export const backedByImages = [
  {img: '/images/logos_backedby/1.png', alt:''},
  {img: '/images/logos_backedby/2.png', alt:''},
  {img: '/images/logos_backedby/3.png', alt:''},
];

export const carouselItems = [
  {
    id: 1,
    image: "/images/cemex.jpg",
    title: "case.cemex.title",
    description: "case.cemex.description",
  },
  {
    id: 2,
    image: "/images/logistics.jpg",
    title: "case.logistics.title",
    description: "case.logistics.description",
  },
  {
    id: 3,
    image: "/images/emsula.jpg",
    title: "case.emsula.title",
    description: "case.emsula.description",
  },
  {
    id: 4,
    image: "/images/green.jpg",
    title: "case.green.title",
    description: "case.green.description",
  },
  {
    id: 5,
    image: "/images/traxion.webp",
    title: "case.traxion.title",
    description: "case.traxion.description",
  },
]