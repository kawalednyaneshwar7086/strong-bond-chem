export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  application: string;
  features: string[];
  coverage: string;
  shelfLife: string;
  packing: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "tile-adhesive-gold",
    name: "Tile Adhesive Gold",
    category: "Tile Adhesive",
    description: "Polymer modified grey cement based tile adhesive for fixing ceramic tiles, natural stone & vitrified tiles in interior area.",
    application: "Interior area tile fixing.",
    features: ["Single component just add water", "Polymer modified", "Better Work ability", "Cost Efficient"],
    coverage: "35-40 Sq.Feet per 20 kg. Bag (3mm bed thickness)",
    shelfLife: "12 Months",
    packing: "20 kg.",
    image: "https://res.cloudinary.com/dxcb0ihjo/image/upload/v1772386574/WhatsApp_Image_2026-03-01_at_6.25.29_PM_1_nj0u5c.jpg"
  },
  {
    id: "tile-adhesive-gold-plus",
    name: "Tile Adhesive Gold Plus",
    category: "Tile Adhesive",
    description: "Polymer modified tile adhesive for fixing tiles internal and externally. It gives excellent bond on concrete and plaster like surface.",
    application: "Internal and external tile fixing.",
    features: ["Water Resistant", "Excellent Adhesion & strength", "Ensure permanent fixing", "Easy to use"],
    coverage: "35-40 Sq.Feet per 20 kg. Bag (3mm bed thickness)",
    shelfLife: "12 Months",
    packing: "20 kg.",
    image: "https://res.cloudinary.com/dxcb0ihjo/image/upload/v1772387744/WhatsApp_Image_2026-03-01_at_6.25.30_PM_1_vtezib.jpg"
  },
  {
    id: "tile-adhesive-platinum",
    name: "Tile Adhesive Platinum",
    category: "Tile Adhesive",
    description: "Cement based adhesive for wall and floor tiles. Suitable for fixing tiles and natural stones in interior and exterior situations which includes swimming pools.",
    application: "Interior, exterior, and swimming pools.",
    features: ["High bond strength", "Economical & easy to use", "Polymer modified", "Single component"],
    coverage: "35-40 Sq.Feet per 20 kg. Bag (3mm bed thickness)",
    shelfLife: "12 Months",
    packing: "20 kg.",
    image: "https://res.cloudinary.com/dxcb0ihjo/image/upload/v1772387743/WhatsApp_Image_2026-03-01_at_6.25.32_PM_mirudh.jpg"
  },
  {
    id: "tile-adhesive-diamond",
    name: "Tile Adhesive Diamond",
    category: "Tile Adhesive",
    description: "High Polymer modified tile adhesive for fixing tiles internal and externally. Gives excellent bond on concrete and plaster. Ideal for large format tiles.",
    application: "Large format tiles (800x1600, 1200x1200mm etc), Marble & Granites.",
    features: ["Bonds to various substrates", "Excellent Adhesion & flexural strength", "Water and sock resistant", "Ensure permanent installation"],
    coverage: "35-40 Sq.Feet per 20 kg. Bag (3mm bed thickness)",
    shelfLife: "12 Months",
    packing: "20 kg.",
    image: "https://res.cloudinary.com/dxcb0ihjo/image/upload/v1772387743/WhatsApp_Image_2026-03-01_at_6.25.32_PM_1_kfprde.jpg"
  },
  {
    id: "block-adhesive",
    name: "Block Adhesive",
    category: "Adhesives",
    description: "Factory prepared blend of carefully selected raw materials for laying aerated light weight concrete, fly ash bricks, cement hollow blocks, etc.",
    application: "Laying AAC blocks, fly ash bricks, cement blocks.",
    features: ["Strong Bonding", "No curing required", "Improved adhesion between blocks", "Fast & economical"],
    coverage: "100-130 sq.ft. per 40kg bag",
    shelfLife: "12 Months",
    packing: "40 kg.",
    image: "https://res.cloudinary.com/dxcb0ihjo/image/upload/v1772387743/WhatsApp_Image_2026-03-01_at_6.25.30_PM_avhivp.jpg"
  },
  {
    id: "ready-mix-plaster",
    name: "Ready Mix Plaster",
    category: "Plaster",
    description: "Polymer modified premixed cement based plaster for interior and exterior wall surfaces. Cost-effective and easy to use.",
    application: "Interior and exterior walls.",
    features: ["High Strength", "Cracks free wall", "Faster Application", "Excellent Coverage"],
    coverage: "15-20 sq. ft. at 10-12 mm thickness per 40kg bag",
    shelfLife: "12 Months",
    packing: "40 kg.",
    image: "https://res.cloudinary.com/dxcb0ihjo/image/upload/v1772388966/WhatsApp_Image_2026-03-01_at_6.25.29_PM_2_ie3gwp.jpg"
  },
  {
    id: "wall-putty",
    name: "Wall Putty",
    category: "Surface Prep",
    description: "Cement based premium quality putty in powder form. Excellent filling and surfacing characteristics, strong bonding and minimal dust.",
    application: "Wall surfacing before painting.",
    features: ["Low Dusting", "Quick Drying", "Water Resistant", "Smooth Finish"],
    coverage: "Depends on substrate",
    shelfLife: "12 Months",
    packing: "40 kg.",
    image: "https://res.cloudinary.com/dxcb0ihjo/image/upload/v1772425625/Gemini_Generated_Image_k2gxssk2gxssk2gx_qio5fb.png"
  },
  {
    id: "tile-grout",
    name: "Tile Grout",
    category: "Grout",
    description: "High quality fine, polymer-modified, water-resistant, cement-based powder grout for glazed wall tiles, mosaics, vitrified tiles, etc.",
    application: "Grouting tile joints.",
    features: ["Water Repellent", "Good compressive strength", "Available in range of colours", "Eco friendly mineral grout"],
    coverage: "Depends on joint size",
    shelfLife: "12 Months",
    packing: "1 kg.",
    image: "https://res.cloudinary.com/dxcb0ihjo/image/upload/v1772389086/WhatsApp_Image_2026-03-01_at_6.25.28_PM_pfsyjr.jpg"
  },
  {
    id: "epoxy-grout",
    name: "Epoxy Grout (3 Part)",
    category: "Grout",
    description: "Three-part system comprising of PART A, PART B and PART C for ease of application. Resistant to chemicals, abrasion and higher impact.",
    application: "Industrial floor tiles, food labs, hospitals.",
    features: ["Stain less and easy to clean", "Excellent chemical resistance", "Non-Toxic & restricts entry of bacteria", "30+ Colours Available"],
    coverage: "Depends on joint size",
    shelfLife: "12 Months",
    packing: "1 kg & 5 kg",
    image: "https://res.cloudinary.com/dxcb0ihjo/image/upload/v1772389088/WhatsApp_Image_2026-03-01_at_6.25.27_PM_pudphz.jpg"
  },
  {
    id: "sbr",
    name: "SBR Latex",
    category: "Waterproofing",
    description: "Highly potent and versatile SBR based liquid for high performance applications in waterproofing and repairs.",
    application: "Waterproofing and concrete repairs.",
    features: ["Styrene Butadiene Polymer Liquid", "White Color", "Solid Content - 44 + 1%", "Technical grade performance"],
    coverage: "70-80sq. ft. area in 2 coats for 1:4:7 mix",
    shelfLife: "1 year",
    packing: "1 Ltr. & 5 Ltr.",
    image: "https://res.cloudinary.com/dxcb0ihjo/image/upload/v1772389274/WhatsApp_Image_2026-03-01_at_6.25.31_PM_1_b348ci.jpg"
  },
  {
    id: "iwp",
    name: "IWP (Internal Water Proofing)",
    category: "Waterproofing",
    description: "Specially formulated integral liquid waterproofing compound of surface active plasticising agents, polymers & additives.",
    application: "Additive for cement concrete, mortar & plasters.",
    features: ["Corrosion resistant", "Reduces permeability of water", "Increases durability", "Reduces shrinkage crack"],
    coverage: "200ml per 50kg bag of cement",
    shelfLife: "12 Months",
    packing: "1 Ltr. & 5 Ltr.",
    image: "https://res.cloudinary.com/dxcb0ihjo/image/upload/v1772389352/WhatsApp_Image_2026-03-01_at_6.25.31_PM_k9deda.jpg"
  },
  {
    id: "tiles-cleaner",
    name: "Tiles Cleaner",
    category: "Cleaning",
    description: "Fast acting acid based cleaner for regular cleaning of dirt stains on tile surface. Ideal for interior and exterior use.",
    application: "Unglazed Ceramic Tiles, Glazed Ceramic Tiles, Vitrified Tiles, Porcelain tiles & Glass.",
    features: ["Fast acting", "Acid based", "Removes tough stains", "Easy to apply"],
    coverage: "Varies as per application",
    shelfLife: "12 Months",
    packing: "1 Ltr. & 5 Ltr.",
    image: "https://res.cloudinary.com/dxcb0ihjo/image/upload/v1772389417/WhatsApp_Image_2026-03-01_at_6.25.31_PM_2_yskne5.jpg"
  },
  {
    id: "primer",
    name: "Primer",
    category: "Surface Prep",
    description: "White cement based water thinnable liquid primer that provides more adhesion and higher coverage than pure water based acrylic wall primers.",
    application: "Interior and exterior walls before painting.",
    features: ["Acrylic Base", "Great Adhesion", "Excellent Holdout", "Quick Drying"],
    coverage: "INTERIOR - 200-230sq.ft/Ltr, EXTERIOR - 110-140sq.ft/Ltr",
    shelfLife: "12 Months",
    packing: "1 Ltr. & 5 Ltr.",
    image: "https://res.cloudinary.com/dxcb0ihjo/image/upload/v1772390373/WhatsApp_Image_2026-03-01_at_6.25.29_PM_er8zev.jpg"
  },
  {
    id: "aac-block",
    name: "AAC Block",
    category: "Blocks",
    description: "High Strength AAC Block available in all sizes. Light weight and easy to carry with excellent thermal and sound insulation.",
    application: "Wall construction.",
    features: ["Light Weight", "Easy to Carry", "Faster Construction Time", "Fire Resistance"],
    coverage: "Depends on Block Size",
    shelfLife: "N/A",
    packing: "Per Piece / Cubic Meter",
    image: "https://res.cloudinary.com/dxcb0ihjo/image/upload/v1772391859/Gemini_Generated_Image_kollqokollqokoll_ev8md4.png"
  },
  {
    id: "tile-accessories",
    name: "Tile Accessories",
    category: "Tools",
    description: "Professional grade tile installation tools including spacers, levellers, trowels, and lifters.",
    application: "Tile installation process.",
    features: ["Tile Spacers", "Wedge & Screw Levellers", "Trowels (6, 8, 10mm)", "Tile Lifter"],
    coverage: "N/A",
    shelfLife: "N/A",
    packing: "Various",
    image: "https://res.cloudinary.com/dxcb0ihjo/image/upload/v1772391297/Gemini_Generated_Image_c188jkc188jkc188_idoopa.png"
  }
];
