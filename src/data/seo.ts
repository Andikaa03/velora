export const siteUrl = "https://velorastudio.com";

export const keywordClusters = {
  primary: [
    "jasa pembuatan website",
    "jasa website profesional",
    "jasa buat website",
    "jasa website Indonesia",
    "jasa pembuatan website profesional",
  ],
  services: [
    "jasa landing page",
    "jasa website company profile",
    "jasa website bisnis",
    "jasa redesign website",
    "jasa website WordPress",
    "jasa website Webflow",
    "jasa website Framer",
    "jasa toko online",
    "jasa website ecommerce",
    "jasa website SaaS",
    "website SEO friendly",
    "website mobile friendly",
  ],
  local: [
    "jasa pembuatan website Cianjur",
    "jasa pembuatan website Bandung",
    "jasa pembuatan website Jakarta",
    "jasa pembuatan website Bogor",
    "jasa pembuatan website Sukabumi",
    "jasa pembuatan website Bekasi",
    "jasa pembuatan website Tangerang",
    "jasa pembuatan website Depok",
    "jasa pembuatan website Surabaya",
    "jasa pembuatan website Bali",
  ],
};

export const priorityCities = [
  {
    city: "Cianjur",
    province: "Jawa Barat",
    slug: "jasa-pembuatan-website-cianjur",
    angle:
      "untuk UMKM, brand lokal, bisnis jasa, properti, kuliner, sekolah, dan perusahaan yang ingin tampil lebih profesional online.",
  },
  {
    city: "Bandung",
    province: "Jawa Barat",
    slug: "jasa-pembuatan-website-bandung",
    angle:
      "untuk brand kreatif, startup, bisnis kuliner, fashion, edukasi, dan company profile yang butuh tampilan premium.",
  },
  {
    city: "Jakarta",
    province: "DKI Jakarta",
    slug: "jasa-pembuatan-website-jakarta",
    angle:
      "untuk perusahaan, konsultan, startup, SaaS, ecommerce, dan bisnis profesional yang butuh website kredibel.",
  },
  {
    city: "Bogor",
    province: "Jawa Barat",
    slug: "jasa-pembuatan-website-bogor",
    angle:
      "untuk bisnis lokal, hospitality, edukasi, jasa profesional, dan brand yang ingin menaikkan kepercayaan pelanggan.",
  },
  {
    city: "Sukabumi",
    province: "Jawa Barat",
    slug: "jasa-pembuatan-website-sukabumi",
    angle:
      "untuk UMKM, bisnis jasa, travel, properti, dan company profile yang ingin mulai serius di digital.",
  },
  {
    city: "Bekasi",
    province: "Jawa Barat",
    slug: "jasa-pembuatan-website-bekasi",
    angle:
      "untuk bisnis B2B, manufaktur, jasa, klinik, sekolah, dan toko online yang butuh website cepat dan rapi.",
  },
  {
    city: "Tangerang",
    province: "Banten",
    slug: "jasa-pembuatan-website-tangerang",
    angle:
      "untuk brand retail, ecommerce, company profile, bisnis jasa, dan startup yang ingin terlihat lebih premium.",
  },
  {
    city: "Depok",
    province: "Jawa Barat",
    slug: "jasa-pembuatan-website-depok",
    angle:
      "untuk bisnis lokal, edukasi, klinik, personal brand, dan layanan profesional yang butuh website mobile-friendly.",
  },
  {
    city: "Surabaya",
    province: "Jawa Timur",
    slug: "jasa-pembuatan-website-surabaya",
    angle:
      "untuk perusahaan, brand jasa, ecommerce, dan bisnis skala menengah yang ingin memperkuat kehadiran digital.",
  },
  {
    city: "Bali",
    province: "Bali",
    slug: "jasa-pembuatan-website-bali",
    angle:
      "untuk villa, hospitality, travel, wellness, creative brand, dan bisnis internasional yang butuh website premium.",
  },
];

export const baseServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Velora Studio",
  url: siteUrl,
  image: `${siteUrl}/assets/unsplash-desk-monitor.jpg`,
  logo: `${siteUrl}/assets/velora-logo-transparent.png`,
  priceRange: "Rp1.000.000+",
  areaServed: ["Indonesia", ...priorityCities.map((item) => item.city)],
  serviceType: [
    "Jasa pembuatan website",
    "Jasa landing page",
    "Jasa website company profile",
    "Jasa redesign website",
    "Jasa website WordPress",
    "Jasa website Webflow",
    "Jasa website Framer",
    "Jasa website ecommerce",
    "Jasa website SaaS",
  ],
  sameAs: [],
};
