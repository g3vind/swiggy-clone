import getData from "../utils/getData";
import { useState, useEffect } from "react";
import { HELP_API } from "../utils/constants";
import { FAQCard } from "../components/FAQCard";

export default function Help() {
  const [openHelp, setOpenHelp] = useState(-1);

  function handleActiveCardHelp(index) {
    setOpenHelp(openHelp === index ? -1 : index);
  }

  const [faqs, setFaqs] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getData(HELP_API);
      setFaqs(data?.data?.issues?.data);
    }

    fetchData();
  }, []);

  return (
    <div className="w-full bg-[#37718E] p-14 pt-14 sm:px-8 xs:px-5">
      <div>
        <div className="px-10 xs:px-5">
          <h2 className="mb-1 text-3xl font-bold text-white xs:text-2xl">
            Help & Support
          </h2>
          <p className="text-light text-white xs:text-sm">
            Let's take a step ahead and help you better.
          </p>
        </div>

        <div className="mt-8 bg-white p-10">
          <h3 className="text-2xl font-bold sm:text-lg">FAQs</h3>

          <div className="flex flex-col gap-6 py-3 xs:gap-4">
            {faqs?.map((item, index) => (
              <FAQCard
                item={item}
                key={item.id}
                openHelp={openHelp}
                handleActiveCardHelp={handleActiveCardHelp}
                id={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
