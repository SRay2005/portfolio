import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold">
            Sannidhya Ray
          </h1>

          <p className="mt-6 text-gray-400">
            ECE + Physics • Machine Learning • Systems • Space & Hardware
          </p>
        </div>
      </Container>
    </section>
  );
}
