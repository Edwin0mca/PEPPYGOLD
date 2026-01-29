import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="py-20 px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-yellow-500 mb-4">
          About PeppyGold
        </h1>
        <p className="text-gray-700 leading-relaxed">
          PeppyGold is a modern gold aggregation platform that simplifies
          gold investment through secure, transparent, and technology-driven
          solutions.
        </p>
      </section>
      <Footer />
    </>
  );
}
