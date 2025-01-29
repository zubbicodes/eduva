"use client";

import { PricingCard } from "./pricing-card";

export function PricingCardBasic() {
  return (
    <PricingCard
      title="Ultimate Plan"
      description="Access everything you need to grow your business."
      price={99}
      originalPrice={199}
      features={[
        {
          title: "Features",
          items: [
            "Unlimited Projects",
            "Advanced Analytics",
            "Team Collaboration",
            "Custom Branding",
          ],
        },
        {
          title: "Perks",
          items: [
            "24/7 Support",
            "Priority Assistance",
            "Exclusive Webinars",
            "Early Feature Access",
          ],
        },
      ]}
      buttonText="Get Started"
      onButtonClick={() => console.log("Button clicked")}
    />
  );
}