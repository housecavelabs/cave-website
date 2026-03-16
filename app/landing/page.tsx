import Link from "next/link";

export default function LandingPage() {
    return (
        <section className="bg-[#0A0A0A] text-white">

            <section className="relative min-h-screen flex items-center px-6 md:px-10 py-20 bg-[#0A0A0A] overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 -right-20 w-[800px] h-[800px] bg-[#E8C858]/10 rounded-full blur-[150px]" />

                </div>

                <div className="relative z-10 max-w-7xl mx-auto w-full">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-7xl font-serif font-medium leading-[1.05] tracking-tight text-white mb-8">
                            A growth partner for<br />
                            <span className="text-[#E8C858]">cultural</span> and<br />
                            <span className="text-[#E8C858]">impact-driven</span><br />
                            organisations
                        </h1>

                        <p className="text-white text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
                            We help ventures scale, reach new audiences, and build lasting influence.
                        </p>

                        <div className="flex flex-wrap gap-5">
                            <button className="bg-[#E8C858] text-black px-10 py-5 font-bold text-xs uppercase tracking-[0.2em] transition-transform active:scale-95">
                                Start a Conversation
                            </button>
                            <button className="border border-white/20 text-white px-10 py-5 font-bold text-xs uppercase tracking-[0.2em] hover:bg-white/5 transition-colors">
                                Learn more
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            <section className="relative px-6 md:px-10 py-32 bg-[#0A0A0A] overflow-hidden">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    <div className="z-10">
                        <p className="text-[10px] tracking-[0.3em] font-bold text-gray-500 uppercase mb-6">
                            Who we are
                        </p>

                        <h2 className="text-5xl md:text-6xl font-serif font-medium leading-[1.1] mb-10 text-white">
                            Rooted in <span className="text-[#E8C858]">Africa</span><br />
                            Built for the world
                        </h2>

                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed max-w-xl mb-12">
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

                        <div className="flex flex-wrap gap-5">
                            <button className="bg-[#E8C858] text-black px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-[#d4b64d] transition-colors">
                                Start a Conversation
                            </button>
                            <button className="border border-white/20 text-white px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-colors">
                                Learn more
                            </button>
                        </div>
                    </div>

                    <div className="relative">
                        <img
                            src="/path-to-your-africa-pattern-map.png"
                            alt="map Illustration"
                            className="w-full h-auto scale-110 translate-x-10"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-white py-24 border-t border-gray-100">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

                    <div className="space-y-2">
                        <h2 className="font-serif text-4xl text-[#E8C858]">Global</h2>
                        <p className="text-[10px] tracking-[0.2em] font-bold text-black uppercase">
                            Reach and Distribution
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="font-serif text-4xl text-[#E8C858]">Deep</h2>
                        <p className="text-[10px] tracking-[0.2em] font-bold text-black uppercase">
                            Embedded Partnerships
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="font-serif text-4xl text-[#E8C858]">Long-Term</h2>
                        <p className="text-[10px] tracking-[0.2em] font-bold text-black uppercase">
                            Sustainable Growth
                        </p>
                    </div>

                </div>
            </section>

            <section className="relative px-6 md:px-10 py-40 bg-[#0A0A0A] overflow-hidden">
                <div className="absolute right-[-10%] top-0 h-full flex items-center pointer-events-none select-none">
                    <span className="text-[25vw] font-bold text-white/[0.02] leading-none uppercase tracking-tighter rotate-90 origin-center">
                        Venture
                    </span>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto">
                    <p className="text-[10px] tracking-[0.3em] font-bold text-gray-500 uppercase mb-6">
                        What we do
                    </p>

                    <h2 className="text-5xl md:text-6xl font-serif font-medium leading-[1.1] mb-12 text-white">
                        Growth through <span className="text-[#E8C858]">partnership</span>,<br />
                        not prescription
                    </h2>

                    <p className="text-gray-400 max-w-2xl mb-20 text-lg leading-relaxed">
                        Through growth and distribution partnerships, we work with organisations
                        to strengthen the mechanisms that drive visibility, access, and strategic expansion.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white/[0.03] backdrop-blur-md border border-white/5 p-10 rounded-sm flex flex-col min-h-[400px]">
                            <div className="w-10 h-10 bg-[#1A1A1A] flex items-center justify-center mb-10 border border-white/10">
                                <div className="w-4 h-4 bg-white rotate-45" />
                            </div>
                            <h3 className="text-2xl font-serif text-white mb-6">Amplify Reach</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                We expand the visibility of organisations into audiences and markets that would otherwise remain inaccessible, using embedded strategy and distribution capacity.
                            </p>
                        </div>

                        <div className="bg-white/[0.03] backdrop-blur-md border border-white/5 p-10 rounded-sm flex flex-col min-h-[400px]">
                            <div className="w-10 h-10 bg-[#1A1A1A] flex items-center justify-center mb-10 border border-white/10">
                                <div className="w-4 h-4 rounded-full bg-[#E8C858]" />
                            </div>
                            <h3 className="text-2xl font-serif text-white mb-6">Support Execution</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Beyond strategy, we engage directly in execution. Our team works alongside yours to implement, iterate, and deliver against defined growth objectives.
                            </p>
                        </div>

                        <div className="bg-white/[0.03] backdrop-blur-md border border-white/5 p-10 rounded-sm flex flex-col min-h-[400px]">
                            <div className="w-10 h-10 bg-[#1A1A1A] flex items-center justify-center mb-10 border border-white/10">
                                <div className="w-1h-4 border-t border-r border-white" />
                            </div>
                            <h3 className="text-2xl font-serif text-white mb-6">Unlock Opportunity</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                We help ventures access strategic partnerships, funding pathways, and ecosystem connections that accelerate the conditions for durable, purposeful growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-20 text-center px-6">
                <h3 className="text-3xl md:text-5xl font-serif leading-tight max-w-4xl mx-auto">
                    <span className="text-black">Growth</span> <span className="text-gray-400">that is</span><br />
                    <span className="text-[#E8C858]">responsible</span> <span className="text-gray-400">and</span> <span className="text-[#E8C858]">sustainable</span><br />
                    <span className="text-gray-400">requires</span> <span className="text-[#E8C858]">proximity.</span>
                </h3>
            </section>

            <section className="relative px-6 md:px-10 py-32 bg-[#0A0A0A] overflow-hidden">
                <div className="absolute right-[-5%] bottom-0 pointer-events-none select-none">
                    <span className="text-[18vw] font-bold text-white/[0.02] leading-none uppercase tracking-tighter">
                        Fit & Form
                    </span>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-12 gap-16">
                    <div className="md:col-span-7">
                        <p className="text-[10px] tracking-[0.3em] font-bold text-[#E8C858] uppercase mb-6">
                            Our approach
                        </p>

                        <h2 className="text-5xl md:text-6xl font-serif font-medium leading-tight mb-10 text-white">
                            No <span className="text-[#E8C858]">Formula</span><br />
                            Only Fit
                        </h2>

                        <div className="space-y-6 text-gray-400 text-lg max-w-md">
                            <p>
                                Every organisation operates within its own context, constraints, and ambitions.
                                Scale cannot be standardised.
                            </p>
                            <p>
                                We work closely with founders and teams to identify where strategic support
                                creates the greatest leverage — and design each partnership around those realities.
                            </p>
                        </div>
                    </div>
                    <div className="md:col-span-5 flex flex-col justify-center">
                        <p className="text-[10px] tracking-[0.3em] font-bold text-[#E8C858] uppercase mb-8 md:text-right">
                            Principles
                        </p>

                        <div className="space-y-8">
                            {["Clarity", "Alignment", "Measurable Progress", "Responsible Growth"].map((item) => (
                                <div key={item} className="group border-b border-white/10 pb-4 flex justify-between items-end">
                                    <span className="text-xs tracking-[0.2em] uppercase text-gray-500 group-hover:text-white transition-colors">
                                        {item}
                                    </span>
                                    <div className="w-1 h-1 bg-[#E8C858] opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            <section className="relative px-6 md:px-10 py-32 bg-[#0A0A0A] overflow-hidden">
                <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-[#E8C858]/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute right-[-5%] top-0 h-full flex items-center pointer-events-none select-none">
                    <span className="text-[20vw] font-bold text-white/[0.02] leading-none uppercase tracking-tighter rotate-90 origin-center">
                        Impact
                    </span>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto">
                    <p className="text-[10px] tracking-[0.3em] font-bold text-gray-500 uppercase mb-6">
                        Why work with us
                    </p>

                    <h2 className="text-5xl md:text-6xl font-serif font-medium leading-[1.1] mb-12 text-white">
                        More than guidance,<br />
                        <span className="text-[#E8C858]">Capacity.</span>
                    </h2>

                    <p className="text-gray-400 max-w-2xl mb-20 text-lg leading-relaxed">
                        Meaningful growth rarely happens through advice alone. It emerges through proximity,
                        alignment, and execution. Our model is built on working from within systems, not around them.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                num: "01",
                                title: "ECOSYSTEM INSIGHT",
                                desc: "Deep knowledge of cultural, creative, and impact-driven landscapes across Africa and global markets and how they connect."
                            },
                            {
                                num: "02",
                                title: "OPERATIONAL CAPABILITY",
                                desc: "Deep knowledge of cultural, creative, and impact-driven landscapes across Africa and global markets and how they connect."
                            },
                            {
                                num: "03",
                                title: "DISTRIBUTION STRATEGY",
                                desc: "Deep knowledge of cultural, creative, and impact-driven landscapes across Africa and global markets and how they connect."
                            }
                        ].map((card, index) => (
                            <div
                                key={index}
                                className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/5 p-10 transition-all duration-500 hover:border-[#E8C858]/30 hover:bg-white/[0.05]"
                            >
                                <div className="text-4xl font-serif mb-8 text-transparent bg-clip-text" style={{ WebkitTextStroke: '1px #E8C858' }}>
                                    {card.num}
                                </div>

                                <h3 className="text-lg font-serif tracking-wider text-white mb-6 uppercase">
                                    {card.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {card.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative px-6 md:px-10 py-24 bg-[#121212] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 relative z-10">

                    <div className="flex flex-col justify-center">
                        <p className="text-[10px] tracking-[0.2em] font-bold uppercase text-gray-400 mb-8">
                            Start a Conversation
                        </p>

                        <h2 className="text-5xl md:text-6xl font-serif font-medium leading-[1.1] mb-12">
                            Every meaningful <br />
                            partnership <br />
                            begins with a <br />
                            <span className="text-[#E8C858]">Conversation</span>
                        </h2>

                        <p className="text-gray-300 text-lg mb-12 max-w-sm">
                            Reach us via the contact form or email us directly
                        </p>

                        <div>
                            <p className="text-[10px] tracking-[0.2em] font-bold text-gray-400 uppercase mb-2">
                                Direct Email
                            </p>
                            <a href="mailto:thecavecalls@gmail.com" className="text-xl text-[#E8C858] hover:underline decoration-1 underline-offset-4">
                                thecavecalls@gmail.com
                            </a>
                        </div>
                    </div>

                    <form className="space-y-10">
                        <div className="grid grid-cols-2 gap-8">
                            <div className="flex flex-col border-b border-gray-800 pb-2 focus-within:border-[#E8C858] transition-colors">
                                <label className="text-[10px] uppercase tracking-widest text-[#E8C858] font-bold mb-1">First Name</label>
                                <input type="text" placeholder="Your name" className="bg-transparent outline-none text-gray-400 placeholder-gray-600 py-1" />
                            </div>
                            <div className="flex flex-col border-b border-gray-800 pb-2 focus-within:border-[#E8C858] transition-colors">
                                <label className="text-[10px] uppercase tracking-widest text-[#E8C858] font-bold mb-1">Email Address</label>
                                <input type="email" placeholder="you@organisation.com" className="bg-transparent outline-none text-gray-400 placeholder-gray-600 py-1" />
                            </div>
                        </div>

                        <div className="flex flex-col border-b border-gray-800 pb-2 focus-within:border-[#E8C858] transition-colors">
                            <label className="text-[10px] uppercase tracking-widest text-[#E8C858] font-bold mb-1">You are a...</label>
                            <select className="bg-transparent outline-none text-gray-400 appearance-none py-1 cursor-pointer">
                                <option>Select one</option>
                                <option>Executive</option>
                                <option>Director</option>
                            </select>
                        </div>

                        <div className="flex flex-col border-b border-gray-800 pb-2 focus-within:border-[#E8C858] transition-colors">
                            <label className="text-[10px] uppercase tracking-widest text-[#E8C858] font-bold mb-1">Organisation</label>
                            <input type="text" placeholder="Organisation name" className="bg-transparent outline-none text-gray-400 placeholder-gray-600 py-1" />
                        </div>

                        <div className="flex flex-col border-b border-gray-800 pb-2 focus-within:border-[#E8C858] transition-colors">
                            <label className="text-[10px] uppercase tracking-widest text-[#E8C858] font-bold mb-1">Your Message</label>
                            <textarea

                                placeholder="Tell us about your organisation and what you want to build..."
                                className="bg-transparent outline-none text-gray-400 placeholder-gray-600 py-1 resize-none"
                            />
                        </div>

                        <div className="pt-4">
                            <button className="bg-[#E8C858] text-black px-10 py-4 font-bold rounded-md hover:bg-[#d4b64d] transition-all transform active:scale-95">
                                Send Message
                            </button>
                        </div>
                    </form>

                </div>
            </section>

        </section>
    );
}