export interface ProductCardProps {
  product: Product;
  onClick: (productId: number) => void;
}

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  stock: number;
  toko: Toko;
}

interface Toko {
  name: string;
  rating: number;
  location: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}
