export interface Bundle {
  id: string;
  shopId: string;
  title: string;
  description?: string;
  imageUrl?: string;
  originalPrice: number;
  discountedPrice: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  bundleProducts: BundleProduct[];
}

export interface BundleProduct {
  id: string;
  bundleId: string;
  productId: string;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateBundleInput {
  title: string;
  description?: string;
  imageUrl?: string;
  originalPrice: number;
  discountedPrice: number;
  bundleProducts: {
    productId: string;
    quantity: number;
  }[];
}

export interface BundleResponse {
  success: boolean;
  data?: Bundle | Bundle[];
  error?: string;
} 