import React from "react";
import { Button } from "@/components/landing/ui/Button";
import { ArrowRight, Contact } from "lucide-react";
import Link from "next/link";

const ContactCTA: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
          <Contact className="w-8 h-8 text-white fill-current" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Ready to Make an Impact?
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mb-8">
          Join our community of changemakers and help build a better Kenya.
        </p>
        <Link href={"/contact-us"}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white hover:bg-gray-100 text-emerald-600 px-6 py-3 inline-flex items-center space-x-2 group font-semibold">
              <Contact className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ContactCTA;
