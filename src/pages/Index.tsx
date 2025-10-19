import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ForCreators from "@/components/ForCreators";
import ForBusinesses from "@/components/ForBusinesses";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <ForCreators />
        <ForBusinesses />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
