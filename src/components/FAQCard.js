// FAQCard.jsx

import HorizontalRollar from "./HorizontalRollar";
import openMenuIcon from "../images/open_menu.svg";
import closeMenuIcon from "../images/close_menu.svg";

export function FAQCard({ item, id, openHelp, handleActiveCardHelp }) {
  const { title, description } = item;

  if (!title || !description) return null;

  return (
    <>
      <div
        onClick={() => handleActiveCardHelp(id)}
        className="flex cursor-pointer flex-col gap-3"
      >
        <div className="flex items-center justify-between">
          <h4 className="text-gray-600 hover:text-orange-500 xs:text-sm">
            {title}
          </h4>
          <img
            className="w-5 xs:w-3"
            src={openHelp === id ? openMenuIcon : closeMenuIcon}
            alt=""
          />
        </div>
        {openHelp === id && (
          <p className="text-light text-sm text-orange-600 xs:text-xs">
            {description}
          </p>
        )}
      </div>
      <HorizontalRollar />
    </>
  );
}
