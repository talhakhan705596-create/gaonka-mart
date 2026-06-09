import { ShoppingBag, Phone, MessageCircle, ShoppingCart } from 'lucide-react';
import { PremiumCard } from '../../components/ui/PremiumCard';
import { PremiumButton } from '../../components/ui/PremiumButton';

const Marketplace: React.FC = () => {
  const products = [
    {
      id: '1',
      name: 'Fresh Tamatar',
      price: '₹40 per kg',
      img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d',
      shop: 'Gaon Shop'
    },
    {
      id: '2',
      name: 'Organic Wheat',
      price: '₹2,100 per quintal',
      img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b',
      shop: 'Farmer Direct'
    }
  ];

  const callShop = () => {
    window.location.href = "tel:+966512345678";
  };

  const orderWhatsApp = (productName: string) => {
    const message = `Hello, I want to order ${productName}.`;
    window.open(`https://wa.me/966512345678?text=${encodeURIComponent(message)}`);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black">Village Marketplace</h1>
          <p className="text-white/50">Support local farmers and businesses.</p>
        </div>
        <div className="p-3 bg-white/5 rounded-2xl relative">
          <ShoppingCart size={24} className="text-primary" />
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full text-[10px] flex items-center justify-center font-bold">2</span>
        </div>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <PremiumCard key={product.id} className="overflow-hidden group flex flex-col h-full border-white/5">
            <div className="aspect-square overflow-hidden relative">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 px-3 py-1 bg-bg-deep/80 backdrop-blur-md rounded-full text-[10px] font-bold text-primary uppercase tracking-widest">
                Fresh
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <ShoppingBag size={14} className="text-white/30" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">{product.shop}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-2xl font-black text-primary mb-6">{product.price}</p>
              </div>
              <div className="space-y-3">
                <PremiumButton
                  onClick={callShop}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white border-none rounded-xl py-3"
                >
                  <Phone size={18} /> Call Shop
                </PremiumButton>
                <PremiumButton
                  onClick={() => orderWhatsApp(product.name)}
                  className="w-full bg-[#25D366] hover:opacity-90 text-white border-none rounded-xl py-3"
                >
                  <MessageCircle size={18} /> WhatsApp Order
                </PremiumButton>
              </div>
            </div>
          </PremiumCard>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
