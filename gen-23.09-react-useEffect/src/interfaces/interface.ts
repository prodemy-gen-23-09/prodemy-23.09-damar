export interface ProductCardProps {
  product: Product;
  onClick?: (productId: number) => void;
}

export interface ProductDetailProps {
  productDetail: Product;
}

export interface ProductFilterProps {
  filters: {
    category: string;
    name: string[];
  }[];
}

export interface ProductMediaProps {
  productName: string;
  imageUrls: string[];
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string[];
  description: string;
  stock: number;
  toko: Toko;
  createdAt: Date;
}

interface Toko {
  name: string;
  rating: number;
  location: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}
