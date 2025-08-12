import { useState } from "react";

const Section = ({ title, description, isVisible, isToggle }) => {
  return (
    <>
      <div className="border border-black p-2 m-2">
        <div className="flex">
          <h1 className="text-xl font-bold p-2">{title}</h1>
          <button className="border border-black p-1 py-0 " onClick={isToggle}>
            {isVisible ? "Hide Description" : "Show Description"}
          </button>
        </div>

        {isVisible ? <h2>{description}</h2> : ""}
      </div>
    </>
  );
};

const Instamart = () => {
  const [openSection, setOpenSection] = useState(null);

  return (
    <>
      <h1 className="p-2 m-2 font-bold text-2xl">Intsmart page</h1>

      <Section
        title="Fresh Groceries, Faster"
        description="Why wait for fresh groceries when you can have them in minutes? Instamart is your personal express lane from farm to fork. We handpick farm-fresh fruits, crunchy vegetables, and pantry staples you love, then rush them straight to your door before you can even find your shopping bag. No traffic, no checkout lines, no “out of stock” heartbreak. Whether you’re whipping up a quick breakfast, preparing a fancy dinner, or just topping up your fridge, we’ve got everything you need — fresher, faster, and fuss-free. Our delivery heroes zoom through the city with care, making sure every tomato stays plump and every loaf of bread stays warm. We’ve partnered with trusted farmers and suppliers, so every bite bursts with quality and flavor. Think of us as your magical fridge refill button — one tap and, voilà, groceries appear! Plus, our eco-friendly packaging keeps things green while keeping your food safe. Freshness shouldn’t be a luxury, and time shouldn’t be wasted. So put your feet up, sip your tea, and let Instamart take care of the boring stuff. You focus on the cooking, the eating, and the living — we’ll handle the fresh delivery magic."
        isVisible={openSection === "groceries"}
        isToggle={() => {
          setOpenSection(openSection === "groceries" ? null : "groceries");
        }}
      />

      <Section
        title="Your Midnight Snack Partner"
        description="It’s 12:07 a.m. Your stomach growls. Your mind says “sleep,” but your taste buds scream “pizza!” Don’t panic — Instamart’s got you. We’re the friend who never judges your midnight cravings, whether it’s chips, chocolate, instant noodles, or a tub of ice cream you swear you’ll share (but won’t). Our shelves are stocked with snacks, drinks, and ready-to-eat meals that arrive in minutes — no pajama change required. Hosting a spontaneous Netflix marathon? We’ve got the popcorn. Studying late for an exam? We’ve got energy drinks. Gaming with friends? We’ve got sodas and munchies to keep the squad going. And the best part? We’re always open. That’s right — when every store’s shutters are down, Instamart is wide awake, ready to deliver happiness to your door. Our snack squad moves fast, so your treats stay fresh, crunchy, or gooey, just the way you like them. So go ahead, embrace your inner night owl. We’ll keep your cravings company, one delicious bite at a time. Instamart: your midnight snack dealer — but, you know, the legal kind."
        isVisible={openSection === "snack"}
        isToggle={() => {
          setOpenSection(openSection === "snack" ? null : "snack");
        }}
      />

      <Section
        title="Daily Essentials, Anytime"
        description="Life doesn’t wait for you to run errands, so why should you wait for your essentials? Instamart delivers everything you need to keep your day running — breakfast cereals, milk, bread, cleaning supplies, toiletries, and more — anytime you need them. Out of shampoo right before a meeting? We’ll fix it. No sugar for your morning coffee? We’re on it. Our app turns grocery shopping into a two-minute task, so you can order while lying in bed, riding in a cab, or binge-watching your favorite show. And because we know you’ve got better things to do than stare at an empty fridge or shelf, we’ve built a delivery network that’s fast, reliable, and friendly. We restock daily with your favorite brands, seasonal goodies, and must-have household products, so you never run out of the good stuff. Plus, our secure packaging and speedy service mean everything arrives safe and fresh. Whether it’s early morning, mid-afternoon, or just before midnight, Instamart is your go-to helper for the things you can’t live without. Think of us as your invisible butler — always ready, always quick, and always making life a little easier."
        isVisible={openSection === "essentials"}
        isToggle={() => {
          setOpenSection(openSection === "essentials" ? null : "essentials");
        }}
      />
    </>
  );
};

export default Instamart;
