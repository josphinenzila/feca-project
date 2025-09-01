import React from "react";
import { Button } from "@/components/landing/ui/Button";
import { Heart, ArrowRight } from "lucide-react";

const DonateCTA: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
          <Heart className="w-8 h-8 text-white fill-current" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Help Us Build Stronger Communities
        </h2>
        <p className="text-base sm:text-lg text-emerald-100 mb-8">
          Your donation directly supports our programs and creates lasting
          change across Kenya. Every contribution makes a difference.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white hover:bg-gray-100 text-emerald-600 px-6 py-3 inline-flex items-center space-x-2 group font-semibold">
            <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>Donate Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DonateCTA;
