import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Award, 
  Target, 
  Eye,
  ArrowRight,
  Droplets,
  Layers,
  Construction,
  CheckCircle2,
  Factory
} from 'lucide-react';
import { products, Product } from './data';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const reveal = {
  initial: { clipPath: 'inset(0 100% 0 0)' },
  animate: { clipPath: 'inset(0 0% 0 0)' },
  transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-2xl py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-4 group cursor-pointer"
        >
          <div className="relative">
            <img 
              src="https://res.cloudinary.com/dxcb0ihjo/image/upload/v1772392398/WhatsApp_Image_2026-03-01_at_6.25.33_PM_aw8e9t.jpg" 
              alt="Strong Bond Chem Logo" 
              className="h-12 w-auto transition-transform duration-500 group-hover:scale-110 rounded-lg"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -inset-2 bg-brand-orange/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 -z-10" />
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-xl leading-none tracking-tight ${isScrolled ? 'text-brand-navy' : 'text-white'}`}>Strong Bond Chem</span>
            <span className={`text-[9px] tracking-[0.05em] font-bold uppercase ${isScrolled ? 'text-stone-400' : 'text-white/60'}`}>Premium Construction Materials</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {['Home', 'Products', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className={`text-xs uppercase tracking-[0.2em] font-bold transition-all hover:text-brand-orange relative group ${isScrolled ? 'text-brand-navy' : 'text-white'}`}
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-brand-orange transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-brand-navy text-white px-8 py-3 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-brand-orange transition-all duration-500 shadow-xl shadow-brand-navy/10"
          >
            Get Quote
          </button>
        </div>

        <button className={`md:hidden p-2 rounded-xl ${isScrolled ? 'text-brand-navy bg-stone-100' : 'text-white bg-white/10'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl overflow-hidden md:hidden border-t border-stone-100"
          >
            <div className="p-8 flex flex-col gap-6">
              {['Home', 'Products', 'About', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-2xl font-bold text-brand-navy hover:text-brand-orange transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-brand-orange text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-brand-orange/20"
              >
                Get Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center bg-stone-50 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-navy/5 -skew-x-12 translate-x-1/4 z-0" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl z-0" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
            <div className="w-10 h-[1px] bg-brand-orange" />
            <span className="text-brand-orange font-bold tracking-[0.2em] uppercase text-xs">Premium Construction Solutions</span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-bold text-brand-navy mb-8 leading-[0.9] tracking-tight">
            Building <br />
            <span className="text-brand-orange italic font-serif">Stronger</span> <br />
            Foundations.
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-stone-600 mb-12 max-w-lg leading-relaxed font-medium">
            Strong Bond Chem delivers high-performance adhesives, grouts, and waterproofing solutions engineered for the most demanding construction projects.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-6 items-center">
            <a 
              href="https://drive.google.com/file/d/1z_3muz0afC0rxNKu495BW1FTPml5bJiu/view?usp=sharing" 
              className="bg-brand-navy text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 hover:bg-brand-orange transition-all duration-500 group shadow-2xl shadow-brand-navy/20"
            >
              Explore Catalog 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-brand-navy font-bold flex items-center gap-2 hover:text-brand-orange transition-colors group"
            >
              Our Vision
              <div className="w-0 group-hover:w-8 h-[2px] bg-brand-orange transition-all duration-500" />
            </button>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-20 flex items-center gap-8">
            <div className="flex -space-x-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/user${i}/100/100`} 
                    alt="User" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <div className="font-bold text-brand-navy">25000+ Happy Customers</div>
              <div className="text-stone-500">Contractors & Architects</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5]">
            <img 
              src="https://res.cloudinary.com/dxcb0ihjo/image/upload/v1772422614/Gemini_Generated_Image_pffngfpffngfpffn_45_rpupoz.png" 
              className="w-full h-full object-cover"
              alt="Modern double-height hotel entrance with massive tiled flooring"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent" />
          </div>
          
          {/* Floating Badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl z-20 hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange">
                <ShieldCheck size={32} />
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-navy">100%</div>
                <div className="text-xs text-stone-500 uppercase tracking-widest font-bold">Quality Assured</div>
              </div>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border-[20px] border-brand-orange/10 rounded-full -z-10" />
          <div className="absolute bottom-20 -right-10 w-20 h-20 bg-brand-orange rounded-full -z-10 blur-2xl opacity-30" />
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-stone-300 hidden lg:block">
        <div className="w-[1px] h-20 bg-stone-300 mx-auto mb-4" />
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold vertical-text">Scroll</span>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: 'Solutions', value: '50+', icon: Layers },
    { label: 'Global Reach', value: '10+', icon: MapPin },
    { label: 'Happy Clients', value: '25K+', icon: ShieldCheck },
    { label: 'Years of Trust', value: '23', icon: Award },
  ];

  return (
    <section className="bg-brand-navy py-32 relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-orange/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-orange/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              variants={fadeInUp}
              className="group relative p-10 rounded-[40px] bg-white/5 border border-white/10 hover:border-brand-orange/30 transition-all duration-700 backdrop-blur-sm overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute -inset-px bg-gradient-to-br from-brand-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform duration-500 mb-8 border border-white/10">
                  <stat.icon size={28} />
                </div>
                <div className="text-5xl font-bold text-white mb-3 tracking-tighter group-hover:translate-x-1 transition-transform duration-500">
                  {stat.value}
                </div>
                <div className="text-stone-400 uppercase tracking-[0.2em] text-[10px] font-bold group-hover:text-brand-orange transition-colors duration-500">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface ProductCardProps {
  product: Product;
  onSelect: (p: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-stone-200 hover:shadow-2xl transition-all duration-500"
    >
      <div className="aspect-[4/5] overflow-hidden relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-brand-orange text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-brand-orange transition-colors">{product.name}</h3>
        <p className="text-stone-500 text-sm line-clamp-2 mb-4">{product.description}</p>
        
        <div className="space-y-2 mb-6">
          {product.features.slice(0, 2).map((feature, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-stone-600">
              <CheckCircle2 size={14} className="text-brand-orange" />
              {feature}
            </div>
          ))}
        </div>

        <button 
          onClick={() => onSelect(product)}
          className="w-full py-3 border border-brand-orange text-brand-orange rounded-xl font-bold text-sm hover:bg-brand-orange hover:text-white transition-all"
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
};

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
    >
      <div className="absolute inset-0 bg-brand-navy/80 backdrop-blur-sm" onClick={onClose} />
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 bg-stone-100 hover:bg-stone-200 rounded-full text-brand-navy transition-colors"
        >
          <X size={24} />
        </button>

        <div className="grid md:grid-cols-2">
          <div className="h-64 md:h-auto">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-brand-orange" />
              <span className="text-brand-orange font-bold tracking-widest uppercase text-xs">{product.category}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{product.name}</h2>
            <p className="text-stone-600 mb-8 leading-relaxed">{product.description}</p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="p-4 bg-stone-50 rounded-2xl">
                <div className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-1">Packing</div>
                <div className="font-bold">{product.packing}</div>
              </div>
              <div className="p-4 bg-stone-50 rounded-2xl">
                <div className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-1">Shelf Life</div>
                <div className="font-bold">{product.shelfLife}</div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <Target size={18} className="text-brand-orange" />
                  Application
                </h4>
                <p className="text-sm text-stone-600">{product.application}</p>
              </div>
              <div>
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <ShieldCheck size={18} className="text-brand-orange" />
                  Key Features
                </h4>
                <ul className="grid grid-cols-1 gap-2">
                  {product.features.map((f, i) => (
                    <li key={i} className="text-sm text-stone-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <Layers size={18} className="text-brand-orange" />
                  Coverage
                </h4>
                <p className="text-sm text-stone-600">{product.coverage}</p>
              </div>
            </div>

            <button 
              onClick={() => {
                onClose();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full mt-10 bg-brand-orange text-white py-4 rounded-xl font-bold hover:bg-brand-orange/90 transition-all shadow-lg shadow-brand-orange/20"
            >
              Inquire Now
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Products = () => {
  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-brand-orange" />
              <span className="text-brand-orange font-bold tracking-widest uppercase text-xs">Our Catalog</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Premium Solutions</h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === cat ? 'bg-brand-orange text-white' : 'bg-white text-stone-600 hover:bg-stone-100'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map(product => (
            <motion.div key={product.id} variants={fadeInUp}>
              <ProductCard product={product} onSelect={(p) => setSelectedProduct(p)} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

const VisionMission = () => {
  return (
    <section id="about" className="py-32 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[1px] bg-brand-orange" />
            <span className="text-brand-orange font-bold tracking-[0.2em] uppercase text-xs">About Strong Bond Chem</span>
            <div className="w-10 h-[1px] bg-brand-orange" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-brand-navy tracking-tight leading-none">
            Innovation in <br />
            <span className="text-brand-orange italic font-serif">Every Bond.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Story Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-white p-12 rounded-[40px] shadow-sm border border-stone-100 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6 text-brand-navy">Our Story</h3>
              <p className="text-lg text-stone-600 leading-relaxed font-medium max-w-2xl">
                Founded on the principles of integrity and excellence, Strong Bond Chem has grown into a leading provider of high-performance construction chemicals. We specialize in engineering solutions that don't just bond materials, but build legacies of strength and durability.
              </p>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-stone-200">
                    <img 
                      src={`https://picsum.photos/seed/about-user${i}/100/100`} 
                      alt="User" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
              <span className="text-sm font-bold text-brand-navy">25000+ Happy Customers</span>
            </div>
          </motion.div>

          {/* ISO Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 bg-brand-navy p-10 rounded-[40px] text-white flex flex-col justify-center items-center text-center"
          >
            <div className="w-20 h-20 bg-brand-orange/20 rounded-3xl flex items-center justify-center text-brand-orange mb-6">
              <Award size={48} />
            </div>
            <h3 className="text-2xl font-bold mb-2">ISO Certified</h3>
            <p className="text-stone-400 text-sm font-medium">9001:2015 Quality Management System</p>
          </motion.div>

          {/* Mission Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 bg-brand-orange p-10 rounded-[40px] text-white"
          >
            <Target size={40} className="mb-6" />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-white/90 text-sm font-medium leading-relaxed">
              To empower the construction industry with innovative chemical solutions that enhance the structural integrity and aesthetic value of every project.
            </p>
          </motion.div>

          {/* Image Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-4 rounded-[40px] overflow-hidden relative group"
          >
            <img 
              src="https://res.cloudinary.com/dxcb0ihjo/image/upload/v1772422314/Gemini_Generated_Image_wyc9dcwyc9dcwyc9_3_rej9ik.png" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Construction" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-brand-navy/40 transition-colors" />
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-4 bg-white p-10 rounded-[40px] shadow-sm border border-stone-100"
          >
            <Eye size={40} className="mb-6 text-brand-orange" />
            <h3 className="text-2xl font-bold mb-4 text-brand-navy">Our Vision</h3>
            <p className="text-stone-500 text-sm font-medium leading-relaxed">
              To be the global benchmark for excellence in construction chemicals, recognized for our commitment to quality, sustainability, and customer success.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Product Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Using the provided Formspree endpoint directly
    const endpoint = "https://formspree.io/f/meelwbpe";
    
    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('subject', formData.subject);
      data.append('message', formData.message);
      data.append('_replyto', formData.email);
      data.append('_subject', `New Website Inquiry: ${formData.subject}`);

      const response = await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSent(true);
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSent(false);
          setFormData({ name: '', email: '', subject: 'Product Inquiry', message: '' });
        }, 5000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }
    } catch (error: any) {
      console.error("Error submitting form:", error);
      alert(`Something went wrong: ${error.message || "Please try again later."}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-brand-orange" />
              <span className="text-brand-orange font-bold tracking-widest uppercase text-xs">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's Build Something Great Together</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-orange">
                  <Factory size={24} />
                </div>
                <div>
                  <div className="font-bold mb-1">Manufactured by</div>
                  <p className="text-stone-400">Tirupati Minerals</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-orange">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="font-bold mb-1">Office Address</div>
                  <p className="text-stone-400">Plot No. 2, Latur Road, Dhanegaon, Nanded 431603</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-orange">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="font-bold mb-1">Customer Care</div>
                  <p className="text-stone-400">+91 70793 17655</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-orange">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="font-bold mb-1">Email Us</div>
                  <p className="text-stone-400">contact@strongbondchem.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-10 rounded-3xl backdrop-blur-sm border border-white/10 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {isSent ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-stone-400">Thank you for reaching out. We will get back to you on WhatsApp shortly.</p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  name="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6" 
                  onSubmit={handleSubmit}
                  action="https://formspree.io/f/meelwbpe"
                  method="POST"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        disabled={isSubmitting}
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors disabled:opacity-50" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        disabled={isSubmitting}
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors disabled:opacity-50" 
                        placeholder="john@example.com" 
                      />
                    </div>
                  </div>
                    <div className="space-y-2 relative">
                      <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Subject</label>
                      <select 
                        name="subject"
                        disabled={isSubmitting}
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors disabled:opacity-50"
                      >
                        <option className="bg-brand-navy" value="Product Inquiry">Product Inquiry</option>
                        <option className="bg-brand-navy" value="Distributorship">Distributorship</option>
                        <option className="bg-brand-navy" value="Technical Support">Technical Support</option>
                      </select>
                    </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Message</label>
                    <textarea 
                      name="message"
                      rows={4} 
                      required
                      disabled={isSubmitting}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors disabled:opacity-50" 
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-brand-orange py-4 rounded-xl font-bold hover:bg-brand-orange/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-navy border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <img 
              src="https://res.cloudinary.com/dxcb0ihjo/image/upload/v1772392398/WhatsApp_Image_2026-03-01_at_6.25.33_PM_aw8e9t.jpg" 
              alt="Strong Bond Chem Logo" 
              className="h-12 w-auto rounded-lg"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="font-bold text-white">Strong Bond Chem</span>
              <span className="text-[9px] tracking-[0.05em] font-medium text-stone-400">Premium Construction Materials</span>
            </div>
          </div>
          
          <div className="flex gap-8 text-stone-500 text-sm">
            <a 
              href="https://drive.google.com/file/d/1z_3muz0afC0rxNKu495BW1FTPml5bJiu/view?usp=sharing" 
              className="hover:text-white transition-colors"
            >
              Download Catalog
            </a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>

          <div className="text-stone-500 text-sm">
            © {new Date().getFullYear()} Tirupati Minerals. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

const DirectionOfUse = () => {
  const steps = [
    { title: "Surface Prep", desc: "Ensure the surface is clean, dry, and free from oil, dust, or grease for maximum adhesion.", icon: ShieldCheck },
    { title: "Mixing", desc: "Add powder to clean water in a bucket and mix thoroughly until a smooth, lump-free paste is formed.", icon: Layers },
    { title: "Application", desc: "Apply a thin layer of the adhesive to the substrate using the flat side of a notched trowel.", icon: Construction },
    { title: "Spreading", desc: "Comb the adhesive with the notched side of the trowel to create uniform ridges for better bonding.", icon: ArrowRight },
    { title: "Fixing", desc: "Press the tiles firmly into the adhesive bed and tap with a rubber mallet to ensure full contact.", icon: Target },
    { title: "Grouting", desc: "Allow the installation to set for at least 24 hours before applying grout to the joints.", icon: CheckCircle2 },
  ];

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[1px] bg-brand-orange" />
            <span className="text-brand-orange font-bold tracking-[0.2em] uppercase text-xs">Application Guide</span>
            <div className="w-10 h-[1px] bg-brand-orange" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-brand-navy tracking-tight">
            How to <span className="text-brand-orange italic font-serif">Apply</span> Properly.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 rounded-[40px] bg-stone-50 hover:bg-brand-navy transition-all duration-500 border border-stone-100 hover:border-brand-navy shadow-sm hover:shadow-2xl"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 shadow-sm">
                  <step.icon size={32} />
                </div>
                <span className="text-4xl font-black text-stone-200 group-hover:text-white/10 transition-colors duration-500">0{i + 1}</span>
              </div>
              <h3 className="text-2xl font-bold text-brand-navy group-hover:text-white mb-4 transition-colors duration-500">{step.title}</h3>
              <p className="text-stone-500 group-hover:text-stone-400 text-sm leading-relaxed font-medium transition-colors duration-500">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://res.cloudinary.com/dxcb0ihjo/image/upload/v1772386574/WhatsApp_Image_2026-03-01_at_6.25.29_PM_1_nj0u5c.jpg",
    "https://res.cloudinary.com/dxcb0ihjo/image/upload/v1772387744/WhatsApp_Image_2026-03-01_at_6.25.30_PM_1_vtezib.jpg",
    "https://res.cloudinary.com/dxcb0ihjo/image/upload/v1772387743/WhatsApp_Image_2026-03-01_at_6.25.32_PM_mirudh.jpg",
    "https://res.cloudinary.com/dxcb0ihjo/image/upload/v1772387743/WhatsApp_Image_2026-03-01_at_6.25.32_PM_1_kfprde.jpg",
    "https://res.cloudinary.com/dxcb0ihjo/image/upload/v1772389352/WhatsApp_Image_2026-03-01_at_6.25.31_PM_k9deda.jpg",
    "https://res.cloudinary.com/dxcb0ihjo/image/upload/v1772389417/WhatsApp_Image_2026-03-01_at_6.25.31_PM_2_yskne5.jpg",
  ];

  return (
    <section className="py-32 bg-brand-navy overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-10" />
      
      <div className="max-w-7xl mx-auto px-6 mb-20 relative z-20">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[1px] bg-brand-orange" />
            <span className="text-brand-orange font-bold tracking-[0.2em] uppercase text-xs">Visual Showcase</span>
            <div className="w-10 h-[1px] bg-brand-orange" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">Project Gallery</h2>
        </div>
      </div>

      <div className="flex gap-8 animate-marquee whitespace-nowrap w-max">
        {[...images, ...images].map((img, i) => (
          <motion.div 
            key={i} 
            whileHover={{ scale: 1.05 }}
            className="w-[400px] h-[500px] flex-shrink-0 rounded-[40px] overflow-hidden shadow-2xl relative group cursor-pointer"
          >
            <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={`Gallery ${i}`} referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
              <div>
                <div className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-2">Construction Site</div>
                <div className="text-white text-2xl font-bold">Premium Installation</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-navy to-transparent z-10" />
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <Hero />
      <Stats />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center p-8 rounded-3xl hover:bg-stone-50 transition-colors">
              <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange mb-6">
                <Layers size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Advanced Polymers</h3>
              <p className="text-stone-600 text-sm">Our products use cutting-edge polymer technology for superior bonding and flexibility.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 rounded-3xl hover:bg-stone-50 transition-colors">
              <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange mb-6">
                <Droplets size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Water Resistance</h3>
              <p className="text-stone-600 text-sm">Engineered to withstand moisture and provide long-lasting protection in all environments.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 rounded-3xl hover:bg-stone-50 transition-colors">
              <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange mb-6">
                <Construction size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Easy Application</h3>
              <p className="text-stone-600 text-sm">Designed for professionals to ensure fast, efficient, and high-quality installation.</p>
            </div>
          </div>
        </div>
      </section>

      <Products />
      <DirectionOfUse />
      <Gallery />
      <VisionMission />
      <Contact />
      <Footer />
    </div>
  );
}
