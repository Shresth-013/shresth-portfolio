import { Navbar } from "../Components/Navbar";
import { ThemeToggle } from "../Components/ThemeToggle";
import{ NovaBackground } from "@/Components/NovaBackground";
import { PrimeDisplay } from "../Components/PrimeDisplay";
import { AboutSection } from "../Components/AboutSection";
import { SkillSection } from "../Components/SkillSection";
import { ProjectSection } from "../Components/ProjectSection";
import { ContactSection } from "../Components/ContactSection";
import { Footer } from "../Components/Footer";


export const Home =()=>{
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme toggle*/}
        <ThemeToggle/>

        {/*Background theme */}
        <NovaBackground/>

        {/*Navbar*/}
        <Navbar />

        {/*Main content  */}
        <main>
            <PrimeDisplay />
            <AboutSection />
            <SkillSection />
            <ProjectSection/>
            <ContactSection/>
        </main>

        {/* Footer */}
        <Footer/>
    </div>
};