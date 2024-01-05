export default function ResOfferCard({ offers }) {
  const { header, couponCode, description } = offers;
  return (
    <div className="inline-block rounded-md border p-3 text-xs">
      <div className="text-sm xs:text-xs font-bold text-zinc-600 whitespace-nowrap mb-1 flex items-center gap-2">
        <span>{header}</span>
      </div>
      <div className="whitespace-nowrap xs:text-xs font-bold text-gray-400">
        {couponCode} | {description}
      </div>
    </div>
  );
}
