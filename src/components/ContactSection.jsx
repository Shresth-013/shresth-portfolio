
import { Mail, Phone, Linkedin, Instagram, Twitter, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon.",
            });
            setIsSubmitting(false);
        }, 1500);
    };




    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Let's <span className="text-primary"> Connect</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Always learning and seeking hands-on experience. Happy to connect for internships,
                    projects, or early-career opportunities..
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="flex flex-col h-full" >
                        <h3 className="text-2xl font-semibold mb-6">
                            {" "}
                            Contact Information
                        </h3>
                        <div className="space-y-6 mt-12">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Email</h4>
                                    <a
                                        href="mailto:shresthraj12004@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        shresthraj12004@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-14">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Phone</h4>
                                    <a
                                        href="tel: +91 8340784264"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +91 8340784264
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div className="pt-8 mt-auto">
                            <h4 className="font-medium mb-4"> Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/shresthraj13/" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="#" target="_blank">
                                    <Instagram />
                                </a>
                                <a href="#" target="_blank">
                                    <Twitter />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs"
                        onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name"
                                    className="block text-sm font-medium mb-2"> {" "}Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                                    placeholder="Shresth Raj..."
                                />
                            </div>

                            <div>
                                <label htmlFor="email"
                                    className="block text-sm font-medium mb-2"> {" "} Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                                    placeholder="xyz@gmail.com"
                                />
                            </div>


                            <div>
                                <label htmlFor="message"
                                    className="block text-sm font-medium mb-2"> {" "} Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                />
                            </div>
                            <button type="submit" disabled={isSubmitting} className={cn(
                                "stellar-button w-full flex items-center justify-center gap-2"
                            )}>{isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
