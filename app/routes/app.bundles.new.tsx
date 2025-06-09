import { json, type ActionFunctionArgs, redirect } from "@remix-run/node";
import { useActionData, useNavigation } from "@remix-run/react";
import { BundleForm } from "~/components/bundles/BundleForm";
import { createBundle } from "~/models/bundle.server";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const discountedPrice = parseFloat(formData.get("discountedPrice") as string);
  const isActive = formData.get("isActive") === "true";

  if (!title || !discountedPrice) {
    return json(
      { error: "Title and discounted price are required" },
      { status: 400 }
    );
  }

  try {
    const bundle = await createBundle({
      title,
      description,
      discountedPrice,
      isActive,
    });
    return redirect(`/app/bundles/${bundle.id}`);
  } catch (error) {
    return json(
      { error: "Failed to create bundle" },
      { status: 500 }
    );
  }
}

export default function NewBundle() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <BundleForm
      onSubmit={async (data) => {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
          formData.append(key, value.toString());
        });
        await fetch("/app/bundles/new", {
          method: "POST",
          body: formData,
        });
      }}
      onCancel={() => window.history.back()}
      isSubmitting={isSubmitting}
      error={actionData?.error}
    />
  );
} 