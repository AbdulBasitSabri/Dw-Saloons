import heroBridalImg from '../assets/images/hero_bridal_portrait_1792042033260.jpg';
import salonInteriorImg from '../assets/images/salon_interior_luxury_1792042031585.jpg';
import skincareImg from '../assets/images/skincare_treatment_1792042030785.jpg';
import partyGlamImg from '../assets/images/party_glam_look_1792042079848.jpg';
import mehndiImg from '../assets/images/mehndi_henna_look_1792042079827.jpg';

// Distinct Team Member Faces
import daniaFaceImg from '../assets/images/team_artist_dania_1792073402298.jpg';
import sanaFaceImg from '../assets/images/team_artist_sana_1792073403171.jpg';
import hiraFaceImg from '../assets/images/team_artist_hira_1792073404504.jpg';
import mahnoorFaceImg from '../assets/images/team_artist_mahnoor_1792073499376.jpg';
import zaraFaceImg from '../assets/images/team_artist_zara_1792073499885.jpg';

// Distinct Catalogue & Bridal Looks
import baratRegalImg from '../assets/images/look_barat_regal_1792073600308.jpg';
import engagementPeachImg from '../assets/images/look_engagement_peach_1792073500342.jpg';
import anniversaryRadianceImg from '../assets/images/look_anniversary_radiance_1792073598611.jpg';
import photoshootEditorialImg from '../assets/images/look_photoshoot_editorial_1792073598880.jpg';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  duration?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  bio: string;
  image: string;
}

export interface CataloguePackage {
  id: string;
  title: string;
  badge: string;
  badgeColor?: string;
  description: string;
  price: string;
  image: string;
  features?: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Bridal' | 'Party Glam' | 'Hair & Mehndi' | 'Skincare & Spa';
  image: string;
  likes: number;
}

export interface VideoReelItem {
  id: string;
  title: string;
  handle: string;
  videoUrl: string;
  poster: string;
  durationSeconds: number;
  tags: string[];
}

export const SALON_INFO = {
  name: 'DW Saloons',
  tagline: 'Enhance Your Beauty with DW Saloons',
  address: 'Select One Plaza, Hassan Ali Afandi Road, Near Sindh Bank, F-11 Markaz, Islamabad, Pakistan 46000',
  city: 'Islamabad',
  phone: '0334-3777040',
  whatsapp: '+923343777040',
  email: 'appointments@dwsaloons.com',
  hours: 'Tue - Sun, 11:00 AM - 8:00 PM',
  closedDays: 'Closed Mondays',
  experienceYears: '10+',
  happyClients: '1,000+',
  bridesCount: '2,500+',
  expertArtists: '5',
};

export const EXPLORE_SERVICES: ServiceItem[] = [
  {
    id: 'bridal-makeup',
    title: 'Bridal Makeup',
    description: 'High-definition airbrush and traditional bridal artistry curated for your unforgettable celebration.',
    image: heroBridalImg,
    duration: '3 - 4 hours',
  },
  {
    id: 'party-makeup',
    title: 'Party Makeup',
    description: 'Luminous skin, sharp contoured definition, and long-wear pigments suited for any grand soiree.',
    image: partyGlamImg,
    duration: '1.5 - 2 hours',
  },
  {
    id: 'skin-care',
    title: 'Skin Care',
    description: 'Bespoke deep cleansing, hydration facials, and anti-aging treatments using organic luxury actives.',
    image: skincareImg,
    duration: '60 - 90 mins',
  },
  {
    id: 'body-waxing',
    title: 'Body Waxing',
    description: 'Gentle, sterile depilatory treatments leaving skin velvety smooth, supple, and radiant.',
    image: salonInteriorImg,
    duration: '45 - 60 mins',
  },
];

export const PROUD_SERVICES: ServiceItem[] = [
  {
    id: 'proud-skincare',
    title: 'Skin Care',
    description: 'Healthy skin starts with proper care—cleanse, hydrate, and protect daily for a natural glow.',
    image: skincareImg,
  },
  {
    id: 'proud-royal-bridal',
    title: 'Royal Bridal Package',
    description: 'Healthy skin starts with proper care—cleanse, hydrate, and protect daily for a natural glow.',
    image: baratRegalImg,
  },
  {
    id: 'proud-body-waxing',
    title: 'Body Waxing',
    description: 'Healthy skin starts with proper care—cleanse, hydrate, and protect daily for a natural glow.',
    image: salonInteriorImg,
  },
  {
    id: 'proud-mehndi',
    title: 'Mehndi',
    description: 'Healthy skin starts with proper care—cleanse, hydrate, and protect daily for a natural glow.',
    image: mehndiImg,
  },
  {
    id: 'proud-hair-styling',
    title: 'Hair Styling',
    description: 'Healthy skin starts with proper care—cleanse, hydrate, and protect daily for a natural glow.',
    image: mahnoorFaceImg,
  },
];

// Completely SEPARATE and UNIQUE face portraits for each artist!
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'lead-artist',
    name: 'Dania W. Khan',
    role: 'FOUNDER & LEAD ARTIST',
    experience: '12 yrs experience',
    bio: 'Specialises in bridal and barat looks. Trained in HD and airbrush makeup, with a portfolio of over 800 brides.',
    image: daniaFaceImg,
  },
  {
    id: 'sana-malik',
    name: 'Sana Malik',
    role: 'SENIOR MAKEUP ARTIST',
    experience: '8 yrs experience',
    bio: 'Known for flawless party and photoshoot makeup, with an eye for contouring that holds up under studio lights.',
    image: sanaFaceImg,
  },
  {
    id: 'hira-fatima',
    name: 'Hira Fatima',
    role: 'BRIDAL SPECIALIST',
    experience: '8 yrs experience',
    bio: 'Focuses on soft-glam and dewy bridal finishes, and leads all engagement and anniversary bookings.',
    image: hiraFaceImg,
  },
  {
    id: 'mahnoor-ali',
    name: 'Mahnoor Ali',
    role: 'HAIR & STYLING EXPERT',
    experience: '7 yrs experience',
    bio: 'Handles all bridal hairstyling, dupatta setting, and hair accents to complete every finished look.',
    image: mahnoorFaceImg,
  },
  {
    id: 'zara-ahmed',
    name: 'Zara Ahmed',
    role: 'MAKEUP ARTIST',
    experience: '4 yrs experience',
    bio: 'Our go-to for mehndi and birthday looks — bold colour work and a steady hand with graphic liner.',
    image: zaraFaceImg,
  },
];

// Completely SEPARATE pictures and looks for each package!
export const CATALOGUE_PACKAGES: CataloguePackage[] = [
  {
    id: 'bridal-makeup-pkg',
    title: 'Bridal Makeup',
    badge: 'Signature',
    description: 'HD/Airbrush base, dramatic eyes, long-wear finish, hair styling and dupatta setting included for your big day.',
    price: 'Rs. 55,000',
    image: heroBridalImg,
    features: ['Airbrush Base', 'Mink Lashes', 'Dupatta Drapery', 'Hair Extensions Setting'],
  },
  {
    id: 'barat-special',
    title: 'Barat Special',
    badge: 'Wedding Day',
    description: 'Bold, camera-ready glam built to last through the whole event — photography-tested finish with false lashes and contouring.',
    price: 'Rs. 35,000',
    image: baratRegalImg,
    features: ['Sweat-proof Seal', 'HD Contour', 'Lip Sculpting', 'Jewellery Fixing'],
  },
  {
    id: 'mehndi-makeup',
    title: 'Mehndi Makeup',
    badge: 'Festive',
    description: 'Vibrant, dewy look with bold colour pops on eyes and lips to match your festive outfit and jewellery.',
    price: 'Rs. 30,500',
    image: mehndiImg,
    features: ['Dewy Glow', 'Lash Accents', 'Gotta Patti Hair Prep', 'Teeka Setting'],
  },
  {
    id: 'engagement-makeup',
    title: 'Engagement Makeup',
    badge: 'Special Day',
    description: 'Soft-glam finish with a touch of shimmer — polished and elegant for ring ceremony photos and speeches.',
    price: 'Rs. 20,000',
    image: engagementPeachImg,
    features: ['Soft Glam Eyes', 'Hydrating Base', 'Blown-out Curls', 'Glossy Finish'],
  },
  {
    id: 'anniversary-special',
    title: 'Anniversary Special',
    badge: 'Celebration',
    description: 'Romantic, refined glam — warm tones and a radiant glow finish for your celebration night out.',
    price: 'Rs. 15,500',
    image: anniversaryRadianceImg,
    features: ['Candlelight Radiance', 'Smokey Wing', 'Blowdry & Waves'],
  },
  {
    id: 'birthday-makeup',
    title: 'Birthday Makeup',
    badge: 'Party',
    description: 'Fresh, playful glam with a customizable colour palette to match your outfit and party theme.',
    price: 'Rs. 15,000',
    image: partyGlamImg,
    features: ['Custom Lip Shade', 'Defined Brows', 'Voluminous Styling'],
  },
  {
    id: 'party-makeup-pkg',
    title: 'Party Makeup',
    badge: 'Night Out',
    description: 'Sharp, statement eyes and a flawless base built for flash photography and late-night dancing.',
    price: 'Rs. 17,500',
    image: photoshootEditorialImg,
    features: ['Flash-Proof Powder', 'Waterproof Eye Work', 'Glam Waves'],
  },
  {
    id: 'new-year-special',
    title: 'New Year Special',
    badge: 'Limited Edition',
    description: 'Glittery, high-shine glam with metallic accents — our seasonal look for ringing in the new year.',
    price: 'Rs. 16,000',
    image: baratRegalImg,
    features: ['Golden Shimmer Veil', 'High Impact Liner', 'Velvet Matte Pout'],
  },
  {
    id: 'photoshoot-makeup',
    title: 'Photoshoot Makeup',
    badge: 'Camera Ready',
    description: 'Matte, HD-camera-friendly base with precision contouring, made to hold up under studio lighting.',
    price: 'Rs. 18,000',
    image: photoshootEditorialImg,
    features: ['Non-reflective Powder', 'Micro-contouring', 'Hair Texture Hold'],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g1', title: 'Signature Crimson Bridal Look', category: 'Bridal', image: heroBridalImg, likes: 248 },
  { id: 'g2', title: 'Luxury Studio Vanity Stations', category: 'Skincare & Spa', image: salonInteriorImg, likes: 192 },
  { id: 'g3', title: 'Emerald Silk Soft Glam', category: 'Party Glam', image: partyGlamImg, likes: 310 },
  { id: 'g4', title: 'Traditional Floral Bridal Henna', category: 'Hair & Mehndi', image: mehndiImg, likes: 184 },
  { id: 'g5', title: 'Radiance Botanical Facial', category: 'Skincare & Spa', image: skincareImg, likes: 145 },
  { id: 'g6', title: 'Regal Velvet Barat Portrait', category: 'Bridal', image: baratRegalImg, likes: 420 },
  { id: 'g7', title: 'Engagement Peach Soft Glam', category: 'Party Glam', image: engagementPeachImg, likes: 295 },
  { id: 'g8', title: 'Anniversary Candlelight Radiance', category: 'Party Glam', image: anniversaryRadianceImg, likes: 330 },
  { id: 'g9', title: 'Editorial High Fashion Contour', category: 'Bridal', image: photoshootEditorialImg, likes: 375 },
];

// Interactive Signature Aesthetic Video Reels (As requested: "signature asthetics use in videos not a pictures")
export const SIGNATURE_VIDEOS: VideoReelItem[] = [
  {
    id: 'vid-1',
    title: 'Barat Bridal Crown Setting & Glow',
    handle: '@dwsaloons.official',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-applying-eyeshadow-on-a-woman-41484-large.mp4',
    poster: baratRegalImg,
    durationSeconds: 19,
    tags: ['BridalReel', 'BaratMajesty', 'HDGlaze'],
  },
  {
    id: 'vid-2',
    title: 'Emerald Silk Soft Glam Transformation',
    handle: '@dwsaloons.official',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-woman-applying-makeup-to-another-woman-41486-large.mp4',
    poster: partyGlamImg,
    durationSeconds: 24,
    tags: ['SoftGlam', 'DewySkin', 'LuxeStudio'],
  },
  {
    id: 'vid-3',
    title: 'Festive Mehndi Art & Jewellery Reveal',
    handle: '@dwsaloons.official',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-doing-her-eyebrows-in-the-mirror-41487-large.mp4',
    poster: mehndiImg,
    durationSeconds: 18,
    tags: ['MehndiVibes', 'HennaArt', 'FestiveGlow'],
  },
];

export interface FaqItemData {
  question: string;
  answer: string;
}

export const GENERAL_FAQS: FaqItemData[] = [
  {
    question: 'How far in advance should I book my bridal appointment?',
    answer: 'We recommend reserving your bridal slot at least 4 to 8 weeks in advance, especially during the peak wedding season (October to March). This guarantees your preferred senior artist and consultation slot.',
  },
  {
    question: 'Which cosmetic brands and products are used at DW Saloons?',
    answer: 'We use exclusively luxury, hypoallergenic, and studio-grade brands including Charlotte Tilbury, NARS, Dior Beauty, Huda Beauty, MAC, and Temptu Airbrush formulations tested for 12+ hour sweat-proof wear.',
  },
  {
    question: 'Are dupatta setting, jewelry placement, and hair extensions included?',
    answer: 'Yes! All signature bridal and party packages include precision dupatta draping, teeka/jhumar fixing, safety anchoring, and premium hair extension styling.',
  },
  {
    question: 'Can I request a trial session before my main wedding event?',
    answer: 'Absolutely. Bridal makeup trials can be scheduled with our lead artists on weekdays to test custom base formulations, eye palettes, and hair volume contouring.',
  },
  {
    question: 'What is your rescheduling or cancellation policy?',
    answer: 'Appointments can be easily rescheduled through our online booking manager or via WhatsApp up to 48 hours prior to your slot without penalty.',
  },
];

export const SERVICES_FAQS: FaqItemData[] = [
  {
    question: 'What should I do to prep my skin before a facial or makeup appointment?',
    answer: 'Avoid harsh scrubs or chemical peeling 48 hours prior. Arrive with freshly cleansed skin and moisturized lips. Our aestheticians begin every service with tailored skin hydration.',
  },
  {
    question: 'How long does a bridal or signature makeover take?',
    answer: 'A complete bridal session takes approximately 3 to 3.5 hours, including base prep, airbrush finish, intricate eye styling, hairstyling, and royal dupatta fixation.',
  },
  {
    question: 'Is allergy and patch testing available for sensitive skin?',
    answer: 'Yes, if you have allergies or hypersensitive skin, please inform us when booking. We carry dermatologically approved organic botanical lines.',
  },
  {
    question: 'Do you offer hair styling for bridal parties and bridesmaids?',
    answer: 'Yes! We have dedicated styling stations with expert stylists for blowout waves, traditional braid weaves, floral hair accents, and modern textured updos.',
  },
];

export const CATALOGUE_FAQS: FaqItemData[] = [
  {
    question: 'Can package prices vary depending on customized requirements?',
    answer: 'Starting prices represent our standard signature packages. Customizations such as specialized airbrush bases, premium 3D mink lashes, or exotic floral hair accessories can be tailored upon consultation.',
  },
  {
    question: 'Do you offer discounts for multi-event bridal packages (Mehndi + Barat + Walima)?',
    answer: 'Yes! We offer exclusive bespoke combo privileges for brides booking 2 or more festive functions. Please reach out to our team on WhatsApp for a personalized quotation.',
  },
  {
    question: 'What payment methods do you accept at the studio?',
    answer: 'We accept Cash, all major Credit/Debit Cards, Bank Transfer, and direct digital wallet payments (JazzCash / EasyPaisa).',
  },
];

export const BOOKING_FAQS: FaqItemData[] = [
  {
    question: 'How will I receive confirmation after booking online?',
    answer: 'Once you submit your slot, your appointment is instantly saved in our system and persisted in your browser. Our concierge will send a WhatsApp confirmation within a few hours.',
  },
  {
    question: 'Can I modify or cancel my saved appointment?',
    answer: 'Yes, click "View Saved Bookings" at the top of the booking page to view, cancel, or reactivate any of your appointments stored in LocalStorage.',
  },
  {
    question: 'Where is DW Saloons studio located?',
    answer: 'We are located at Select One Plaza, Hassan Ali Afandi Road, Near Sindh Bank, F-11 Markaz, Islamabad. Detailed Google Maps navigation is embedded directly on our booking page.',
  },
];

