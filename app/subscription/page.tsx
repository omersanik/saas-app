import { PricingTable } from "@clerk/nextjs";
import React from "react";

const Subscriptions = () => {
  return (
    <main className="flex flex-col justify-center gap-4">
      <PricingTable />
    </main>
  );
};

export default Subscriptions;
