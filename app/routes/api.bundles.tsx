import { json, type ActionFunction, type LoaderFunction } from "@remix-run/node";
import { createBundle, listBundles } from "~/services/bundle.server";
import type { BundleResponse, CreateBundleInput } from "~/types/bundle";

// Helper to get shop ID from session (you'll need to implement this based on your auth setup)
async function getShopId(): Promise<string> {
  // TODO: Implement proper shop ID retrieval from session
  // This is a placeholder - you'll need to implement proper authentication
  return "test-shop-id";
}

export const loader: LoaderFunction = async () => {
  try {
    const shopId = await getShopId();
    const bundles = await listBundles(shopId);
    
    return json<BundleResponse>({
      success: true,
      data: bundles,
    });
  } catch (error) {
    console.error("Error listing bundles:", error);
    return json<BundleResponse>(
      {
        success: false,
        error: "Failed to list bundles",
      },
      { status: 500 }
    );
  }
};

export const action: ActionFunction = async ({ request }) => {
  if (request.method !== "POST") {
    return json<BundleResponse>(
      {
        success: false,
        error: "Method not allowed",
      },
      { status: 405 }
    );
  }

  try {
    const shopId = await getShopId();
    const input: CreateBundleInput = await request.json();

    // Basic validation
    if (!input.title || !input.originalPrice || !input.discountedPrice) {
      return json<BundleResponse>(
        {
          success: false,
          error: "Missing required fields",
        },
        { status: 400 }
      );
    }

    const bundle = await createBundle(shopId, input);
    
    return json<BundleResponse>({
      success: true,
      data: bundle,
    });
  } catch (error) {
    console.error("Error creating bundle:", error);
    return json<BundleResponse>(
      {
        success: false,
        error: "Failed to create bundle",
      },
      { status: 500 }
    );
  }
}; 