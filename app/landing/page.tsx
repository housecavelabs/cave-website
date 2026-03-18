import Link from "next/link";

export default function LandingPage() {
    return (
        <section className="bg-[#0A0A0A] text-white font-['Hepta_Slab']">

            <section className="relative min-h-screen flex items-center px-[72px] py-[165px] bg-[#0A0A0A] overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 -right-20 w-[800px] h-[800px] bg-[#E8C858]/10 rounded-full blur-[150px]" />
                </div>

                <div className="max-w-[713px] flex flex-col gap-[80px]">
                    <h1 className="text-[56px] font-['Hepta_Slab'] font-bold leading-[1.4] tracking-[-0.01em] text-white">
                        A growth partner for<br />
                        <span className="text-[#E8C858]">cultural</span> and<br />
                        <span className="text-[#E8C858]">impact-driven</span><br />
                        organisations
                    </h1>

                    <p className="font-sans font-medium text-[24px] leading-[1.5] text-white max-w-xl">
                        We help ventures scale, reach new audiences, and build lasting influence.
                    </p>

                    <div className="flex flex-wrap gap-5">
                        <button className="font-sans font-medium bg-[#EFC738] text-black px-6 py-1.5 w-[205px] h-[52px] rounded border border-[#EFC738] transition-transform active:scale-95">
                            Start a Conversation
                        </button>
                        <button className="font-sans font-medium border border-white/20 text-white px-6 py-1.5 w-[205px] h-[52px] rounded hover:bg-white/5 transition-colors">
                            Learn more
                        </button>
                    </div>
                </div>
            </section>

            {/* ── WHO WE ARE ── */}
            <section className="relative px-[80px] py-[134px] bg-[#060606] overflow-hidden" style={{ minHeight: '1220px' }}>
                <div className="max-w-[1440px] mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-start">

                        {/* Left content */}
                        <div className="flex flex-col gap-[48px] max-w-[586px]">

                            {/* Label + Heading */}
                            <div className="flex flex-col gap-[16px]">
                                <p className="font-sans font-bold text-[20px] leading-[1.5] text-white uppercase tracking-[0.3em]">
                                    Who we are
                                </p>
                                <h2 className="text-5xl md:text-6xl font-['Hepta_Slab'] font-bold leading-[1.1] text-white">
                                    Rooted in <span className="text-[#EFC738]">Africa</span><br />
                                    Built for the world
                                </h2>
                            </div>

                            <div className="space-y-6 text-white font-sans font-medium text-[24px] leading-[1.5] max-w-[586px]">
                                <p>
                                    The Cave Group is a globally-oriented venture and growth platform
                                    rooted in Africa, established to help organisations scale with
                                    clarity, structure, and long-term intention.
                                </p>
                                <p>
                                    Rather than operating at a distance, we embed alongside the ventures we
                                    support, contributing operational strength and distribution capacity where
                                    they create the greatest impact.
                                </p>
                            </div>

                            <div className="flex gap-[16px]">
                                <button className="font-sans font-medium bg-[#EFC738] text-black px-6 py-1.5 w-[205px] h-[52px] rounded border border-[#EFC738] transition-transform active:scale-95">
                                    Start a Conversation
                                </button>
                                <button className="font-sans font-bold text-[#FEFEFE] text-base leading-[1.5] hover:text-[#EFC738] transition-colors">
                                    Learn more
                                </button>
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src="/africa-map.png"
                                alt="map Illustration"
                                className="w-full h-auto scale-110 translate-x-10"
                            />
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-white py-[60px] px-[80px]">
                    <div className="max-w-[1280px] mx-auto">
                        <div className="flex gap-[80px] items-center">
                            <div className="flex gap-[60px] justify-center w-full">

                                <div className="w-[250px] flex flex-col gap-[10px] p-[16px] items-center">
                                    <h3 className="font-['Hepta_Slab'] font-bold text-[40px] leading-[1.5] text-[#A69500] text-center w-[218px]">
                                        Global
                                    </h3>
                                    <p className="font-sans font-semibold text-[20px] leading-[1.5] text-[#060606] text-center w-[218px]">
                                        Reach and Distribution
                                    </p>
                                </div>

                                <div className="w-[250px] flex flex-col gap-[10px] p-[16px] items-center">
                                    <h3 className="font-['Hepta_Slab'] font-bold text-[40px] leading-[1.5] text-[#A69500] text-center w-[250px]">
                                        Deep
                                    </h3>
                                    <p className="font-sans font-semibold text-[20px] leading-[1.5] text-[#060606] text-center w-[250px]">
                                        Embedded Partnerships
                                    </p>
                                </div>

                                <div className="w-[280px] flex flex-col gap-[10px] p-[16px] items-center">
                                    <h3 className="font-['Hepta_Slab'] font-bold text-[40px] leading-[1.5] text-[#A69500] text-center w-[280px]">
                                        Long-Term
                                    </h3>
                                    <p className="font-sans font-semibold text-[20px] leading-[1.5] text-[#060606] text-center w-[280px]">
                                        Sustainable Growth
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── THREE ARMS OF IMPACT ── */}
            <section className="bg-[#060606] px-[80px] py-[134px]">
                <div className="max-w-[1280px] mx-auto flex flex-col gap-[200px]">

                    {/* Section Header */}
                    <div className="flex flex-col gap-[16px]">
                        <p className="font-sans font-semibold text-[16px] leading-[1.5] text-white uppercase tracking-[0.3em]">
                            The Cave Group
                        </p>
                        <h2 className="font-['Hepta_Slab'] font-bold text-[48px] leading-[1.2] text-white">
                            Three <span className="text-[#EFC738]">Arms</span> of Impact
                        </h2>
                    </div>

                    {/* Arm 01 */}
                    <div className="flex justify-between items-center w-full">
                        <div className="flex flex-col gap-[48px] w-[593px]">
                            <div className="px-[32px] border-l-2 border-[#EFC738]">
                                <p className="font-['Hepta_Slab'] font-bold text-[100px] leading-[1.5] text-[#EFC738]">01</p>
                            </div>
                            <div className="flex flex-col gap-[48px] px-[32px]">
                                <div className="flex flex-col gap-[16px]">
                                    <h3 className="font-['Hepta_Slab'] font-bold text-[32px] leading-[1.2] text-[#F4F4F3]">
                                        The Cave Community
                                    </h3>
                                    <p className="font-sans font-semibold text-[20px] leading-[1.5] text-[#F4F4F3]">
                                        We listen deeply to your constraints, ambitions, and current position in the market.
                                    </p>
                                </div>
                                <div className="flex gap-[24px] items-center">
                                    <button className="font-sans font-bold text-[16px] w-[107px] h-[52px] px-6 py-1.5 rounded border border-[#EFC738] text-[#EFC738] hover:bg-[#EFC738] hover:text-black transition-colors">
                                        Explore
                                    </button>
                                    <button className="font-sans font-bold text-[16px] text-[#F4F4F3] flex items-center gap-2 hover:text-[#EFC738] transition-colors">
                                        Learn more <span>›</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-[688px] h-[688px] rounded-2xl overflow-hidden">
                            <img
                                src="/begin-img.jpg"
                                alt="The Cave Community"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Arm 02 */}
                    <div className="flex justify-between items-center w-full gap-[32px]">
                        <div className="w-[688px] h-[688px] rounded-2xl overflow-hidden">
                            <img
                                src="/cave-labs-hero.jpg"
                                alt="Cave Labs"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-[48px] w-[560px]">
                            <div className="px-[32px] border-l-2 border-[#EFC738]">
                                <p className="font-['Hepta_Slab'] font-bold text-[100px] leading-[1.5] text-[#EFC738]">02</p>
                            </div>
                            <div className="flex flex-col gap-[48px] px-[32px]">
                                <div className="flex flex-col gap-[16px]">
                                    <h3 className="font-['Hepta_Slab'] font-bold text-[32px] leading-[1.2] text-[#F4F4F3]">
                                        Cave Labs
                                    </h3>
                                    <p className="font-sans font-semibold text-[20px] leading-[1.5] text-[#F4F4F3]">
                                        We listen deeply to your constraints, ambitions, and current position in the market.
                                    </p>
                                </div>
                                <div className="flex gap-[24px] items-center">
                                    <button className="font-sans font-bold text-[16px] w-[107px] h-[52px] px-6 py-1.5 rounded border border-[#EFC738] text-[#EFC738] hover:bg-[#EFC738] hover:text-black transition-colors">
                                        Explore
                                    </button>
                                    <button className="font-sans font-bold text-[16px] text-[#F4F4F3] flex items-center gap-2 hover:text-[#EFC738] transition-colors">
                                        Learn more <span>›</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Arm 03 */}
                    <div className="flex justify-between items-center w-full">
                        <div className="flex flex-col gap-[48px] w-[593px]">
                            <div className="px-[32px] border-l-2 border-[#EFC738]">
                                <p className="font-['Hepta_Slab'] font-bold text-[100px] leading-[1.5] text-[#EFC738]">03</p>
                            </div>
                            <div className="flex flex-col gap-[48px] px-[32px]">
                                <div className="flex flex-col gap-[16px]">
                                    <h3 className="font-['Hepta_Slab'] font-bold text-[32px] leading-[1.2] text-[#F4F4F3]">
                                        Cave Media
                                    </h3>
                                    <p className="font-sans font-semibold text-[20px] leading-[1.5] text-[#F4F4F3]">
                                        We listen deeply to your constraints, ambitions, and current position in the market.
                                    </p>
                                </div>
                                <div className="flex gap-[24px] items-center">
                                    <button className="font-sans font-bold text-[16px] w-[107px] h-[52px] px-6 py-1.5 rounded border border-[#EFC738] text-[#EFC738] hover:bg-[#EFC738] hover:text-black transition-colors">
                                        Explore
                                    </button>
                                    <button className="font-sans font-bold text-[16px] text-[#F4F4F3] flex items-center gap-2 hover:text-[#EFC738] transition-colors">
                                        Learn more <span>›</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-[688px] h-[688px] rounded-2xl overflow-hidden">
                            <img
                                src="/sticky-man.jpeg"
                                alt="Cave Media"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* ── WHAT WE DO ── */}
            <section className="relative bg-[#060606] px-[80px] py-[134px] overflow-hidden">

                <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col gap-[48px]">
                    <div className="flex flex-col gap-[16px]">
                        <p className="font-sans font-semibold text-[16px] leading-[1.5] text-white uppercase">
                            What we do
                        </p>
                        <h2 className="font-['Hepta_Slab'] font-bold text-[48px] leading-[1.2] text-white">
                            Growth through <span className="text-[#EFC738]">partnership,</span><br />
                            not prescription
                        </h2>
                        <p className="font-sans font-bold text-[18px] leading-[1.5] text-white max-w-[820px]">
                            Through growth and distribution partnerships, we work with organisations to strengthen the mechanisms that drive visibility, access, and strategic expansion.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                        {[
                            {
                                num: "01",
                                title: "AMPLIFY REACH",
                                desc: "We expand the visibility of organisations into audiences and markets that would otherwise remain inaccessible, using embedded strategy and distribution capacity."
                            },
                            {
                                num: "02",
                                title: "SUPPORT EXECUTION",
                                desc: "Beyond strategy, we engage directly in execution. Our team works alongside yours to implement, iterate, and deliver against defined growth objectives."
                            },
                            {
                                num: "03",
                                title: "UNLOCK OPPORTUNITY",
                                desc: "We help ventures access strategic partnerships, funding pathways, and ecosystem connections that accelerate the conditions for durable, purposeful growth."
                            }
                        ].map((card) => (
                            <div key={card.num} className="bg-white/[0.03] border border-white/5 p-[32px] flex flex-col gap-[49px]">
                                <div className="w-[46px] h-[31px] border-[1.5px] border-[#EFC738] flex items-center justify-center">
                                    <span className="font-['Hepta_Slab'] font-bold text-[#EFC738] text-sm">{card.num}</span>
                                </div>
                                <div className="flex flex-col gap-[18px]">
                                    <h3 className="font-['Hepta_Slab'] font-bold text-[20px] leading-[1.5] text-white">
                                        {card.title}
                                    </h3>
                                    <p className="font-sans font-bold text-[16px] leading-[1.5] text-white">
                                        {card.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── QUOTE BREAK ── */}
            <section className="bg-white py-[60px] px-[80px] text-center relative overflow-hidden">
                <div className="max-w-[1280px] mx-auto relative z-10">
                    <h3 className="font-['Hepta_Slab'] font-bold text-[40px] leading-[1.5] text-center max-w-[659px] mx-auto">
                        <span className="text-black">Growth</span> <span className="text-gray-400">that is</span><br />
                        <span className="text-[#EFC738]">responsible</span> <span className="text-gray-400">and</span> <span className="text-[#EFC738]">sustainable</span><br />
                        <span className="text-gray-400">requires</span> <span className="text-[#EFC738]">proximity.</span>
                    </h3>
                </div>
            </section>

            {/* ── OUR APPROACH ── */}
            <section className="relative bg-[#060606] px-[80px] py-[138px] overflow-hidden">

                <div className="relative z-10 max-w-[1280px] mx-auto grid grid-cols-12 gap-16">
                    <div className="col-span-7 flex flex-col gap-[48px]">
                        <div className="flex flex-col gap-[16px]">
                            <p className="font-sans font-semibold text-[16px] leading-[1.5] text-[#EFC738] uppercase">
                                Our approach
                            </p>
                            <h2 className="font-['Hepta_Slab'] font-bold text-[48px] leading-[1.2] text-white">
                                No <span className="text-[#EFC738]">Formula</span><br />
                                Only Fit
                            </h2>
                        </div>
                        <div className="flex flex-col gap-[32px]">
                            <p className="font-sans font-bold text-[18px] leading-[1.5] text-white">
                                Every organisation operates within its own context, constraints, and ambitions. Scale cannot be standardised.
                            </p>
                            <p className="font-sans font-bold text-[18px] leading-[1.5] text-white">
                                We work closely with founders and teams to identify where strategic support creates the greatest leverage — and design each partnership around those realities.
                            </p>
                        </div>
                    </div>

                    <div className="col-span-5 flex flex-col justify-center">
                        <p className="font-sans font-semibold text-[16px] leading-[1.5] text-[#EFC738] uppercase text-right mb-8">
                            Principles
                        </p>
                        <div className="flex flex-col">
                            {["CLARITY", "ALIGNMENT", "MEASURABLE PROGRESS", "RESPONSIBLE GROWTH"].map((item) => (
                                <div key={item} className="py-[16px] border-b border-[#EFC738]/20 flex justify-between items-center">
                                    <span className="font-sans font-bold text-[16.75px] leading-[1.2] tracking-[-0.01em] text-white">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY WORK WITH US ── */}
            <section className="relative bg-[#060606] px-[80px] py-[134px] overflow-hidden">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[#D0BD21]/40 blur-[180px] pointer-events-none rounded-full" />

                <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col gap-[48px]">
                    <div className="flex flex-col gap-[16px] max-w-[820px]">
                        <p className="font-sans font-semibold text-[16px] leading-[1.5] text-white uppercase">
                            Why work with us
                        </p>
                        <h2 className="font-['Hepta_Slab'] font-bold text-[48px] leading-[1.2] text-white">
                            More than guidance,<br />
                            <span className="text-[#EFC738]">Capacity.</span>
                        </h2>
                        <p className="font-sans font-bold text-[18px] leading-[1.5] text-white">
                            Meaningful growth rarely happens through advice alone. It emerges through proximity, alignment, and execution. Our model is built on working from within systems, not around them
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-6 mt-[200px]">
                        {[
                            { num: "01", title: "ECOSYSTEM INSIGHT", desc: "Deep knowledge of cultural, creative, and impact-driven landscapes across Africa and global markets and how they connect." },
                            { num: "02", title: "OPERATIONAL CAPABILITY", desc: "Deep knowledge of cultural, creative, and impact-driven landscapes across Africa and global markets and how they connect." },
                            { num: "03", title: "DISTRIBUTION STRATEGY", desc: "Deep knowledge of cultural, creative, and impact-driven landscapes across Africa and global markets and how they connect." }
                        ].map((card) => (
                            <div key={card.num} className="bg-white/[0.15] px-[32px] pt-[60px] pb-[40px] flex flex-col gap-[49px]">
                                <div className="w-[46px] h-[31px] border-[1.5px] border-[#EFC738] flex items-center justify-center">
                                    <span className="font-['Hepta_Slab'] font-bold text-[#EFC738] text-sm">{card.num}</span>
                                </div>
                                <div className="flex flex-col gap-[18px]">
                                    <h3 className="font-['Hepta_Slab'] font-bold text-[20px] leading-[1.5] text-white">
                                        {card.title}
                                    </h3>
                                    <p className="font-sans font-bold text-[16px] leading-[1.5] text-white">
                                        {card.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CONTACT ── */}
            <section className="relative bg-[#0F0F0F] px-[80px] py-[152px] overflow-hidden">

                <div className="relative z-10 max-w-[1280px] mx-auto grid grid-cols-2 gap-20">

                    {/* Left */}
                    <div className="flex flex-col gap-[48px] max-w-[568px]">
                        <div className="flex flex-col gap-[16px]">
                            <p className="font-sans font-semibold text-[16px] leading-[1.5] text-white uppercase">
                                Start a Conversation
                            </p>
                            <h2 className="font-['Hepta_Slab'] font-bold text-[48px] leading-[1.2] text-white">
                                Every meaningful partnership<br />
                                begins with a <span className="text-[#EFC738]">Conversation</span>
                            </h2>
                            <p className="font-sans font-bold text-[18px] leading-[1.5] text-white">
                                Reach us via the contact form or email us directly
                            </p>
                        </div>
                        <div className="flex flex-col gap-[16px]">
                            <p className="font-sans font-bold text-[18px] leading-[1.5] text-white uppercase">
                                Direct Email
                            </p>
                            <a href="mailto:thecavecalls@gmail.com" className="font-sans font-bold text-[24px] leading-[1.5] text-[#EFC738] hover:underline">
                                thecavecalls@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Right - Form */}
                    <form className="flex flex-col gap-[59px] max-w-[590px]">
                        <div className="flex gap-[0px] justify-between">
                            <div className="flex flex-col gap-[33px] w-[295px]">
                                <div className="flex flex-col gap-[4px]">
                                    <label className="font-sans font-normal text-[14px] leading-[1.5] text-[#EFC738] uppercase">First Name</label>
                                    <input type="text" placeholder="Your name" className="bg-transparent font-sans font-normal text-[16px] text-white/50 placeholder-white/50 outline-none" />
                                </div>
                                <div className="border-b border-[#EFC738]/30" />
                            </div>
                            <div className="flex flex-col gap-[33px] w-[295px]">
                                <div className="flex flex-col gap-[4px]">
                                    <label className="font-sans font-normal text-[14px] leading-[1.5] text-[#EFC738] uppercase">Email Address</label>
                                    <input type="email" placeholder="you@organisation.com" className="bg-transparent font-sans font-normal text-[16px] text-white/50 placeholder-white/50 outline-none" />
                                </div>
                                <div className="border-b border-[#EFC738]/30" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-[33px]">
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col gap-[4px]">
                                    <label className="font-sans font-normal text-[14px] leading-[1.5] text-[#EFC738] uppercase">You are a...</label>
                                    <select className="bg-transparent font-sans font-semibold text-[16px] text-white outline-none appearance-none cursor-pointer">
                                        <option>Select one</option>
                                        <option>Executive</option>
                                        <option>Director</option>
                                    </select>
                                </div>
                                <div className="w-[12px] h-[6px] border-b-[2.5px] border-r-[2.5px] border-[#EFC738] rotate-45 mr-2" />
                            </div>
                            <div className="border-b border-[#EFC738]/30" />
                        </div>

                        <div className="flex flex-col gap-[33px]">
                            <div className="flex flex-col gap-[4px]">
                                <label className="font-sans font-normal text-[14px] leading-[1.5] text-[#EFC738] uppercase">Organisation</label>
                                <input type="text" placeholder="Organisation name" className="bg-transparent font-sans font-normal text-[16px] text-white/50 placeholder-white/50 outline-none" />
                            </div>
                            <div className="border-b border-[#EFC738]/30" />
                        </div>

                        <div className="flex flex-col gap-[52px]">
                            <div className="flex flex-col gap-[4px]">
                                <label className="font-sans font-normal text-[14px] leading-[1.5] text-[#EFC738] uppercase">Your Message</label>
                                <textarea placeholder="Tell us about your organisation and what you want to build..." className="bg-transparent font-sans font-normal text-[16px] text-white/50 placeholder-white/50 outline-none resize-none" />
                            </div>
                            <div className="border-b border-[#EFC738]/30" />
                        </div>

                        <button className="font-sans font-bold text-black bg-[#EFC738] border border-[#EFC738] rounded px-6 py-1.5 w-[159px] h-[52px] hover:bg-[#d4a820] transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

        </section>
    );
}