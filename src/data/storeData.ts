import type { Product, Fabric, Saree, Testimonial, HeritageMilestone } from '../types';

export const STORE_INFO = {
  name: 'RS SINCE - 1977',
  companyName: 'AMRUTA APPAREL PVT LTD',
  tagline: 'Gents Readymades • Royal Sarees • Premium Fabrics • Custom Tailoring & Institutional Uniforms',
  description: 'Complete apparel & textile hub specializing in Gents Readymades, Royal Sarees, and 60" unstitched Fabrics. Providing custom stitching, in-house designer guidance, and bulk uniform manufacturing for schools, colleges, and industrial enterprises.',
  phone: '9246999508',
  phoneFormatted: '+91 92469 99508',
  whatsapp: '919246999508',
  email: 'contact@rssince1977.com',
  address: '4-57 R.S. COMPOUND, REDDYGUNTA, KARAKAMBADI ROAD',
  cityState: 'TIRUPATI - 517507, ANDHRA PRADESH',
  fullAddress: 'AMRUTA APPAREL PVT LTD, 4-57 R.S. COMPOUND, REDDYGUNTA, KARAKAMBADI ROAD, TIRUPATI 517507',
  timing: '10:00 AM – 9:30 PM (Open 7 Days a Week)',
  establishedYear: 1977,
  googleMapsUrl: 'https://maps.google.com/?q=Amruta+Apparel+Pvt+Ltd+Karakambadi+Road+Tirupati+517507',
};

export const GENTS_PRODUCTS: Product[] = [
  {
    id: 'g-1',
    name: 'FORMAL SHIRTS',
    price: '₹700 – ₹3,000/-',
    sizes: '38, 40, 42, 44, 46, 48',
    category: 'Formal Shirts',
    badge: 'Showroom Bestseller',
    fabricType: '100% Breathable Giza Cotton',
    description: '100% Breathable Giza Cotton & Micro-twill structured fit formal shirts crafted for executive elegance and day-long comfort.',
    features: ['100% Giza/Egyptian Cotton options', 'Wrinkle-resistant finish', 'Single & Double Cuff designs'],
    image: '/gents_suit_teal.jpg'
  },
  {
    id: 'g-1a',
    name: 'CASUAL SHIRTS',
    price: '₹600 – ₹2,500/-',
    sizes: '38, 40, 42, 44, 46, 48',
    category: 'Casual Shirts',
    badge: 'Trending Casuals',
    fabricType: 'Cotton Linen & Printed Washes',
    description: 'Stylish printed, checkered, and solid linen-cotton casual shirts engineered for relaxed weekend comfort and effortless style.',
    features: ['Pure Cotton & Linen Blends', 'Spread & Button-down collars', 'Pre-washed soft feel'],
    image: '/shirt_product.jpg'
  },
  {
    id: 'g-2',
    name: 'FORMAL TROUSERS',
    price: '₹1,000 – ₹4,000/-',
    sizes: '28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48',
    category: 'Formal Trousers',
    badge: 'Popular',
    fabricType: 'Poly-Viscose Stretch Weave',
    description: 'Tailored slim and regular fit formal trousers featuring expandable comfort waistband and wrinkle-free stretch weave.',
    features: ['Poly-Viscose & Wool blend options', 'Flat front & Pleated styles', 'Durable pocket lining'],
    image: '/gents_trousers_formal.jpg'
  },
  {
    id: 'g-2a',
    name: 'CASUAL TROUSERS',
    price: '₹900 – ₹3,000/-',
    sizes: '28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48',
    category: 'Casual Trousers',
    badge: 'Comfort Fit',
    fabricType: 'Cotton Stretch Flex Weave',
    description: 'Comfort-fit casual trousers and utility stretch pants designed for relaxed daily movement and effortless smart-casual pairing.',
    features: ['Breathable Cotton Stretch', 'Flex Waistband', 'Wrinkle-resistant fabric'],
    image: '/gents_trousers_casual.jpg'
  },
  {
    id: 'g-3',
    name: 'JEANS',
    price: '₹1,000 – ₹3,000/-',
    sizes: '28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48',
    category: 'Stretch Denim Collection',
    badge: 'Trending',
    fabricType: 'Heavyweight Flex Denim',
    description: 'High-grade jeans available in slim tapered, regular straight, and dark indigo washes.',
    features: ['4-way stretch denim', 'Riveted stress points', 'Color-lock wash process'],
    image: '/gents_jeans_blue.jpg'
  },
  {
    id: 'g-4',
    name: 'COTTON TROUSERS',
    price: '₹1,000 – ₹2,500/-',
    sizes: '28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48',
    category: 'Smart Twill Chinos',
    fabricType: 'Peached Cotton Twill',
    description: 'Versatile cotton twill trousers designed for smart casual workday meetings and weekend wear in classic earthy tones.',
    features: ['Peached cotton finish', 'Flex waistband', 'Machine washable'],
    image: '/gents_trousers_cotton.jpg'
  },
  {
    id: 'g-5',
    name: 'T-SHIRTS',
    price: '₹395 – ₹1,500/-',
    sizes: '38, 40, 42, 44',
    category: 'T-Shirts',
    fabricType: 'Combed Pique Cotton',
    description: 'Matte-finish pique cotton polo shirts and crew neck tees crafted with anti-pilling fabric.',
    features: ['100% Combed pique cotton', 'Ribbed collar & cuffs', 'Vibrant fast colors'],
    image: '/gents_tshirt_black.jpg'
  },
  {
    id: 'g-6',
    name: 'SHORTS ',
    price: '₹500 – ₹900/-',
    sizes: '38, 40, 42, 44',
    category: 'Shorts',
    fabricType: 'Combed Pique Cotton',
    description: 'Matte-finish pique cotton polo shirts and crew neck tees crafted with anti-pilling fabric.',
    features: ['100% Combed pique cotton', 'Ribbed collar & cuffs', 'Vibrant fast colors'],
    image: '/hero_gents.jpg'
  },
  {
    id: 'g-7',
    name: 'TRACK PANTS',
    price: '₹700 – ₹1,100/-',
    sizes: '30, 32, 34, 36, 38',
    category: 'Track Pants',
    fabricType: 'Dry-Flex Spandex',
    description: 'Ultra-flexible track pants engineered with moisture-wicking tech for workout routines and everyday loungewear.',
    features: ['Zippered pockets', 'Elasticated ankle cuffs', '4-way flex weave'],
    image: '/gents_trackpants_grey.jpg'
  },
  {
    id: 'g-8',
    name: 'INNERWEAR',
    price: '₹199 – ₹699/-',
    sizes: 'S, M, L, XL, XXL',
    category: 'Vests, Briefs & Trunks',
    fabricType: 'Ultra-Soft Micro Modal',
    description: 'Soft combed cotton undershirts, trunks, and briefs ensuring skin-friendly comfort and shape retention.',
    features: ['Antibacterial finish', 'Microfiber elastic waistband', 'Tagless comfort'],
    image: '/gents_innerwear.jpg'
  },
  {
    id: 'g-9',
    name: 'DESIGNER SUITS',
    price: '₹8,000 – ₹20,000/-',
    sizes: '36, 38, 40, 42, 44, 46',
    category: 'Wedding & Royal Tuxedos',
    badge: 'Luxury Edition',
    fabricType: 'Superfine Italian Cut Wool Blend',
    description: 'Opulent 3-piece wedding suits and tuxedos adorned with satin lapels, fine inner lining, and regal cuts.',
    features: ['Includes Vest & Jacket', 'Premium Italian cut pattern', 'Hand-stitched detailing'],
    image: '/gents_bandhgala_maroon.jpg'
  },
  {
    id: 'g-10',
    name: 'SUITS ',
    price: '₹3,000 – ₹12,000/-',
    sizes: '36, 38, 40, 42, 44, 46',
    category: 'SUITS',
    badge: 'Corporate Choice',
    fabricType: 'Crease-Resistant Poly Wool',
    description: 'Crisp 2-piece suiting combinations ideal for boardroom presentations, corporate events, and formal dinners.',
    features: ['Wrinkle-resistant poly wool', 'Double vent back', 'Interior passport pockets'],
    image: '/suit_product.jpg'
  },
  {
    id: 'g-11',
    name: 'BLAZERS',
    price: '₹2,500 – ₹7,000/-',
    sizes: '36, 38, 40, 42, 44, 46',
    category: 'BLAZERS',
    fabricType: 'Structured Linen & Houndstooth',
    description: 'Structured smart blazers in houndstooth, solid linen, and subtle check motifs for semi-formal styling.',
    features: ['Lightweight shoulder padding', 'Contrast inner lining', 'Hand-pressed finish'],
    image: '/gents_suit_olive.jpg'
  }
];

export const FABRICS_DATA: Fabric[] = [
  {
    id: 'f-1',
    name: 'POLY VISCOSE SUITING',
    price: '₹398 – ₹798/-',
    type: 'Suiting Fabric',
    width: '60" Width (150 cm)',
    composition: '65% Polyester / 35% Viscose blend',
    badge: 'Durable Standard',
    weavePattern: 'Smooth Twill Weave',
    description: 'Durable, crease-resistant suiting fabric suitable for daily formal trousers, school uniforms, and corporate suits.',
    colorOptions: ['Navy Blue', 'Charcoal Grey', 'Jet Black', 'Beige', 'Olive Green'],
    image: '/fabric_poly_viscose.jpg'
  },
  {
    id: 'f-2',
    name: 'POLY WOOL SUITING',
    price: '₹1,498 – ₹4,998/-',
    type: 'Suiting Fabric',
    width: '60" Width (150 cm)',
    composition: '55% Wool / 45% Polyester blend',
    badge: 'Executive Roll',
    weavePattern: 'Tropical Gabardine',
    description: 'Rich feel and natural drape suiting material designed for high-end corporate jackets and winter tuxedos.',
    colorOptions: ['Midnight Black', 'Oxford Blue', 'Camel Tan', 'Burgundy'],
    image: '/fabric_poly_wool.jpg'
  },
  {
    id: 'f-3',
    name: 'MERINO WOOL SUITING',
    price: '₹3,998 – ₹7,998/-',
    type: 'Suiting Fabric',
    width: '60" Width (150 cm)',
    composition: '100% Superfine Australian Merino Wool',
    badge: 'Ultra Luxury Swatch',
    weavePattern: 'Super 120s Fine Weave',
    description: 'Ultra-fine breathable Australian merino wool with silky touch, unmatched drape, and immaculate crease recovery.',
    colorOptions: ['Royal Navy', 'Graphite Grey', 'Classic Black', 'Espresso'],
    image: '/fabric_merino_wool.jpg'
  },
  {
    id: 'f-4',
    name: 'TERRY RAYON SUITING',
    price: '₹698 – ₹998/-',
    type: 'Suiting Fabric',
    width: '60" Width (150 cm)',
    composition: 'Terry Rayon Comfort Weave',
    badge: 'Luster Finish',
    weavePattern: 'Matte Luster Weave',
    description: 'Smooth, lustrous suiting material offering excellent breathability for tropical weather trouser tailoring.',
    colorOptions: ['Slate Grey', 'Khaki', 'Dark Chocolate', 'Steel Blue'],
    image: '/fabric_terry_rayon.jpg'
  },
  {
    id: 'f-5',
    name: 'POLY COTTON SHIRTINGS',
    price: '₹498 – ₹898/-',
    type: 'Shirting Fabric',
    width: '60" Width (150 cm)',
    composition: '60% Cotton / 40% Polyester fine weave',
    badge: 'Easy Iron',
    weavePattern: 'Easy-Care Poplin',
    description: 'Easy-iron daily wear shirting cloth with long color retention and smooth softness on skin.',
    colorOptions: ['Sky Blue', 'White', 'Soft Pink', 'Mint Green', 'Lavender'],
    image: '/fabric_poly_cotton.jpg'
  },
  {
    id: 'f-6',
    name: 'GIZA COTTON',
    price: '₹698 – ₹1,498/-',
    type: 'Shirting Fabric',
    width: '60" Width (150 cm)',
    composition: '100% Long-Staple Egyptian Giza Cotton',
    badge: 'Textile Best Choice',
    weavePattern: 'Hereditary Herringbone & Fine Twill',
    description: 'Authentic Giza Egyptian cotton with exceptional sheen, silk-like feel, and ultra-high thread count density.',
    colorOptions: ['Pure White', 'Executive Blue', 'Lilac', 'Cream', 'Sky Stripe'],
    image: '/fabric_giza_cotton.jpg'
  },
  {
    id: 'f-7',
    name: 'PREMIUM GIZA COTTON',
    price: '₹1,698 – ₹3,998/-',
    type: 'Shirting Fabric',
    width: '60" Width (150 cm)',
    composition: '100% Two-Ply 120s Compact Giza Cotton',
    badge: 'Royal Mill Grade',
    weavePattern: 'Pinpoint Oxford & Satin Stripe',
    description: 'Masterpiece 120s 2-ply super combed Giza cotton woven in Europe-standard mills for wedding guest shirts.',
    colorOptions: ['Ivory', 'Sky Stripe', 'Pearl White', 'Royal Navy'],
    image: '/fabric_premium_giza.jpg'
  },
  {
    id: 'f-8',
    name: 'PURE LINENS',
    price: '₹1,498 – ₹2,998/-',
    type: 'Shirting Fabric',
    width: '60" Width (150 cm)',
    composition: '100% European Pure Flax Linen',
    badge: 'Natural Flax',
    weavePattern: 'Open Breathable Weave',
    description: 'Natural pure flax linen unstitched fabric allowing maximum ventilation and distinct luxurious texture.',
    colorOptions: ['Natural Sand', 'Optical White', 'Coral', 'Teal', 'Pistachio Green'],
    image: '/fabric_pure_linen.jpg'
  }
];

export const SAREES_DATA: Saree[] = [
  {
    id: 's-1',
    name: 'PURE PATTU SAREES',
    desc: 'Handcrafted authentic Silk Mark certified Kanchipuram silk sarees embellished with pure gold zari borders, heavy pallu, and traditional peacock motifs.',
    material: '100% Pure Mulberry Silk & Gold Zari',
    zariType: 'Pure tested Gold/Silver Zari',
    occasion: 'Bridal & Grand Wedding Celebrations',
    badge: 'Silk Mark Certified',
    image: '/saree_pattu_sq.jpg'
  },
  {
    id: 's-2',
    name: 'HALF PATTU SAREES',
    desc: 'Lightweight traditional half-pattu silk sarees featuring vibrant temple borders, dual-tone body shades, and easy drape convenience.',
    material: 'Fine Silk Blend',
    zariType: 'High Grade Zari Weave',
    occasion: 'Pooja, Festivals & Family Gatherings',
    badge: 'Popular Drape',
    image: '/saree_halfpattu_sq.jpg'
  },
  {
    id: 's-3',
    name: 'DESIGNER SAREES',
    desc: 'Exquisite partywear sarees adorned with hand cutwork, intricate zardozi, sequin highlights, and designer blouse fabrics included.',
    material: 'Georgette, Net & Silk Satin',
    occasion: 'Receptions, Cocktail Evenings & Parties',
    badge: 'Designer Edition',
    image: '/saree_designer_sq.jpg'
  },
  {
    id: 's-4',
    name: 'HI-FANCY SAREES',
    desc: 'Ultra-modern translucent organza and metallic tissue silk sarees with delicate hand-painted floral motifs and scalloped borders.',
    material: 'Pure Shimmer Organza & Metallic Tissue',
    occasion: 'Modern Festive & Day Events',
    badge: 'Trending Soft Drape',
    image: '/saree_organza_sq.jpg'
  },
  {
    id: 's-5',
    name: 'DIGITAL PRINTED SAREES',
    desc: 'Artistic botanical, paisley, and contemporary geometric digital artwork on buttery smooth silk crepe that drapes effortlessly.',
    material: 'Pure Silk Crepe',
    occasion: 'Executive Workwear & Semi-Formal Dinners',
    badge: 'Artistic Print',
    image: '/saree_printed_sq.jpg'
  },
  {
    id: 's-6',
    name: 'CRAPE SAREES',
    desc: 'Flowy soft satin crape silk sarees with high luster finish and deep rich jewel tones for a slim, flattering silhouette.',
    material: 'Smooth Satin Crape',
    occasion: 'Evening Celebrations & Anniversaries',
    badge: 'Luster Finish',
    image: '/saree_crape_sq.jpg'
  },
  {
    id: 's-7',
    name: 'CHIFFON SAREES',
    desc: 'Breezy pastel everyday & special event sarees crafted with featherlight chiffon and subtle gold foil accents.',
    material: 'Pure Chiffon & Soft Georgette',
    occasion: 'Daily Elegance & Kitty Gatherings',
    badge: 'Featherlight',
    image: '/saree_kanchipuram.jpg'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Rajesh Kumar Rao',
    role: 'Loyal Customer (20+ Years)',
    comment: 'RS SINCE 1977 has been our family clothing store for over two decades. Their Giza Cotton shirting rolls and pure wool suiting quality is unmatched anywhere!',
    rating: 5,
    location: 'Hyderabad'
  },
  {
    id: 't-2',
    name: 'Lakshmi Narayana',
    role: 'Bridal Shopper',
    comment: 'We selected pure Kanchipuram Pattu sarees for my daughter’s wedding here. The gold zari weave quality and silk touch were genuine Silk Mark certified.',
    rating: 5,
    location: 'Secunderabad'
  },
  {
    id: 't-3',
    name: 'Venkatesh V.',
    role: 'Corporate Executive',
    comment: 'The fit on their readymade suit blazers and trousers is spot on. They have exact size availability right up to size 48.',
    rating: 5,
    location: 'Cyberabad'
  }
];

export const HERITAGE_MILESTONES: HeritageMilestone[] = [
  {
    year: '1977',
    title: 'The Foundation',
    description: 'Founded as a dedicated textile house bringing premium unstitched suiting & shirting cloth to discerning gentlemen.'
  },
  {
    year: '1995',
    title: 'Gents Readymade Expansion',
    description: 'Introduced ready-to-wear formal shirts, executive trousers, and tailored suit blazers with precision sizing.'
  },
  {
    year: '2010',
    title: 'Royal Silk Sarees Pavilion',
    description: 'Launched the exclusive Silk Mark certified Kanchipuram and festive saree showroom section.'
  },
  {
    year: '2026',
    title: 'Digital Experience & Modern Catalog',
    description: 'Celebrating 49 years of craftsmanship with digital catalog accessibility and instant showroom consultation.'
  }
];
