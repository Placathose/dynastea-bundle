import { prisma } from "../db.server";
import type { Bundle, CreateBundleInput } from "~/types/bundle";

export async function createBundle(shopId: string, input: CreateBundleInput): Promise<Bundle> {
  return prisma.bundle.create({
    data: {
      shopId,
      title: input.title,
      description: input.description,
      imageUrl: input.imageUrl,
      originalPrice: input.originalPrice,
      discountedPrice: input.discountedPrice,
      bundleProducts: {
        create: input.bundleProducts.map(product => ({
          productId: product.productId,
          quantity: product.quantity,
        })),
      },
    },
    include: {
      bundleProducts: true,
    },
  });
}

export async function listBundles(shopId: string): Promise<Bundle[]> {
  return prisma.bundle.findMany({
    where: {
      shopId,
    },
    include: {
      bundleProducts: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
} 