import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const baseUrl = new URL(`${protocol}://${host}`);
  const title = "Enlightenment Reiki | Traditional Reiki with Sally Littleton";
  const description = "A future vision for Enlightenment Reiki: traditional Reiki therapy, training, and certification with Sally Littleton, PhD and Reiki Shihan.";
  const socialImage = new URL("/og.png", baseUrl).toString();

  return {
    metadataBase: baseUrl,
    title,
    description,
    icons: {
      icon: "https://enlightenmentreiki.com/wp-content/uploads/2025/11/cropped-icon-32x32.png",
      shortcut: "https://enlightenmentreiki.com/wp-content/uploads/2025/11/cropped-icon-32x32.png",
    },
    openGraph: {
      title,
      description,
      type: "website",
      images: [{ url: socialImage, width: 1731, height: 909, alt: "Enlightenment Reiki homepage preview" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [socialImage] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
