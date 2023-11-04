import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Product from "@/components/Product";
import Steps from "@/components/Steps";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <AnnouncementBar />
      <Header />
      <div className="flex-1">
        <Hero />
        <Steps />
        <Product />
      </div>
      <Footer />
    </div>
  )
}

