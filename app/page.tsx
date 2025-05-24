import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { recentSessions } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the brainy explorer"
          topic="Neural network of the brain"
          subject="science"
          duration={45}
          color="#FFE99A"
        />
        <CompanionCard
          id="456"
          name="Countsy the number wizard"
          topic="Derivatives and Integrals"
          subject="maths"
          duration={30}
          color="#FFD586"
        />
        <CompanionCard
          id="789"
          name="Verba the vocabulary builder"
          topic="Language"
          subject="English Literature"
          duration={30}
          color="#FF9898"
        />
      </section>
      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
