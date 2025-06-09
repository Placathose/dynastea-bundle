import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { BundleList } from "~/components/bundles/BundleList";
import { getBundles } from "~/models/bundle.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const bundles = await getBundles();
  return json({ bundles });
}

export default function BundlesIndex() {
  const { bundles } = useLoaderData<typeof loader>();
  const navigate = useNavigate();

  return (
    <BundleList
      bundles={bundles}
      onCreateBundle={() => navigate("new")}
      onViewBundle={(id) => navigate(id)}
    />
  );
} 