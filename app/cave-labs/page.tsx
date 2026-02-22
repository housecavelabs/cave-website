import Image from "next/image";

const CaveLabsPage = () => {
  return (
    <>
      <section className="bg-black px-6 md:px-8 py-16 md:py-24 pt-32 md:pt-40 text-white flex flex-col lg:flex-row items-center justify-center gap-12">
        <h1 className="flex-1 text-3xl md:text-5xl text-center lg:text-left font-bold uppercase tracking-tight leading-[1.1] max-w-4xl">
          This is where
          <br />
          <span className="text-5xl md:text-7xl text-yellow-400">ideas</span>
          <br />
          are stress-tested
        </h1>
        <Image
          src="/cave-labs-hero.jpg"
          height={1080}
          width={1080}
          alt="Cave labs hero"
          className="flex-1 w-full lg:w-xl"
        />
      </section>

      <section className="px-6 md:px-8 py-16 md:py-24">
        <h2 className="text-center mb-8 font-bold text-2xl md:text-4xl lg:text-5xl max-w-[40ch] mx-auto">
          We build <span className="bg-yellow-400 px-2">IDEAS</span> into tools,
          systems and frameworks that can be used, tested, taught and improved.
        </h2>
        <p className="text-center max-w-[60ch] mx-auto font-semibold text-lg md:text-xl text-black/80">
          Understanding is proven through creation. If it doesn&apos;t teach, it
          doesn&apos;t matter. If it doesn&apos;t build, it doesn&apos;t last.
        </p>
      </section>

      <section className="px-6 md:px-8 py-16 md:py-24">
        <h2 className="mb-8 font-bold text-2xl md:text-4xl lg:text-5xl">
          What we do
        </h2>

        <div className="border border-black p-8">
          <div className="flex justify-between">
            <div className="max-w-lg">
              <h3 className="font-bold text-xl md:text-3xl mb-2">Research</h3>
              <p className="text-black/80">
                We synthesize insights across disciplines and translate
                complexity into clarity through: Intelligence briefs, Analytical
                frameworks and Structured research document
              </p>
            </div>
            <div className="max-w-lg text-right">
              <h3 className="font-bold text-xl md:text-3xl mb-2">
                Product Development
              </h3>
              <p className="text-black/80">
                We convert ideas into working systems. Outputs include:
                GPT-based tools, Dashboards and internal platforms, Simulators
                and structured workflows
              </p>
            </div>
          </div>
          <Image
            src="/atom.svg"
            height={64}
            width={64}
            alt="Atom"
            className="w-xs mx-auto opacity-80"
          />
          <div className="flex justify-between">
            <div className="max-w-lg">
              <h3 className="font-bold text-xl md:text-3xl mb-2">Innovate</h3>
              <p className="text-black/80">
                We test, prototype, iterate without fear and obsessively
              </p>
            </div>
            <div className="max-w-lg text-right">
              <h3 className="font-bold text-xl md:text-3xl mb-2">Educate</h3>
              <p className="text-black/80">
                Every product is built to teach. Our standard is simple: every
                artifact must elevate capability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 py-16 md:py-24 bg-black bg-obsessed-text h-screen grid place-content-center">
        <div className="bg-black text-white p-8">
          <h2 className="mb-4 font-bold text-xl md:text-3xl">
            Top Coin Earners
          </h2>
          <p>Here are those who earned the most amount of coins this month</p>
        </div>
      </section>
    </>
  );
};

export default CaveLabsPage;
