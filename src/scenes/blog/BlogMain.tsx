import { motion, AnimatePresence } from "framer-motion";
import { ButtonIcon } from "@/components/ButtonIcon";
import arrowGray from "@/assets/icons/arrow-down_gray.svg";
import { BlogMainProps } from "@/shared/types";

export const BlogMain = ({mainTitle,mainInfo,subMainTitle,subMainInfo,isExpanded,onToggle,}:BlogMainProps) => {
  
  return (
    <div
    className={`blog-details__main expandable-content ${
        isExpanded ? "expanded" : ""
      }`}
    >
      <h2 className="h4">{mainTitle}</h2>
      {Object.values(mainInfo).map((info, infoIndex) => (
        <p key={`main-info-${infoIndex}`}>{info}</p>
      ))}

      <h2 className="h4">{subMainTitle}</h2>
      <AnimatePresence initial={false}>
        <>
          {/* Immer sichtbare Vorschau */}
          {Object.values(subMainInfo)
            .slice(0, 1)
            .map((subInfo, subInfoIndex) => (
              <p key={`preview-info-${subInfoIndex}`}>{subInfo}</p>
            ))}

          {/* Animierter Inhalt (restliche Zeilen) */}
          {isExpanded && (
            <>
              {Object.values(subMainInfo)
                .slice(1)
                .map((subInfo, subInfoIndex) => (
                  <motion.p
                    key={`sub-info-${subInfoIndex}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {subInfo}
                  </motion.p>
                ))}
            </>
          )}
        </>
      </AnimatePresence>
      <ButtonIcon
        buttonClassName="blog-details__read-full-button button expandable-content__button"
        onClick={onToggle}
        text="Read Full Blog"
        imgClassName="icon--gray-arrow-down"
        src={arrowGray}
      />
    </div>
  );
};
