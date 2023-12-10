import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ProductCardProps {
  product: Product;
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
  images: string[];
  description: string;
  stock: number;
  category: string;
  toko: Toko;
  createdAt: string;
}

export interface ProductSchema {
  name: string;
  price: number;
  description: string;
  stock: number;
  category: string;
}

export interface ProductRequest {
  name: string;
  price: number;
  description: string;
  images: String[];
  toko: Toko;
  stock: number;
  category: string;
  createdAt: string;
}

interface Toko {
  name: string;
  rating: number;
  location: string;
}

export interface LayoutProps {
  children: ReactNode;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "link";
  h?: string;
  w?: string;
  onClick?: () => void;
}

export interface LinkButtonProps extends ButtonProps {
  to: string;
}

export interface ProductDataProps {
  name: string;
  price: number;
  images: string[];
  description: string;
  stock: number;
  category: string;
}
