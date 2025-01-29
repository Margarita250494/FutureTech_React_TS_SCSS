import { tabsButton } from "@/components/section/data";

export const MOBILE_MEDIA_QUERY = "(max-width: 767px)";

export const classNames = (...classes: (string | undefined)[]) =>
    classes.filter(Boolean).join(" ");

export const getPageButtons = (page: string) => {
    const pageData = tabsButton.find((item) => item.page === page);
    return pageData ? pageData.buttons : [];
};
export const fadeAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 }
};