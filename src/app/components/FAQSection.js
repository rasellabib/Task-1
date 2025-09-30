import FAQItem from "./FAQItem";
import faqItems from "./faqItems";

export default function FAQSection() {
  return (
    <section className="bg-gradient-to-b container">
      <div className="max-w-screen-xl mx-auto px-5 bg-white ">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <h2 className="mtb-120 tracking-tight">Frequently asked questions</h2>
        </div>

        {/* FAQ Items */}
        <div className="grid divide-y divide-neutral-200 max-w-md sm:max-w-2xl lg:max-w-4xl mb-120 mx-auto">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
