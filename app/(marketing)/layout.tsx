import { Navbar } from "@/features/navigation/components/navbar";
import { Footer } from "@/features/navigation/components/footer";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
