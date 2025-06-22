import { ContactForm } from "@/components/ContactForm";
import { ExtraServices } from "@/components/ExtraServices";
import { FAQ } from "@/components/FAQ";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import { Pricing } from "@/components/Pricing";

export default function Home() {
    return (
        <div>
            <Hero />
            <Features />
            <Portfolio />
            <Pricing />
            <ExtraServices />
            <FAQ />
            <ContactForm />
        </div>
    );
}
