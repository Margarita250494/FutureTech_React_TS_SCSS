import { tabsButton } from "@/components/section/data";

export const MOBILE_MEDIA_QUERY = "(max-width: 767px)";

export const classNames = (...classes: (string | undefined)[]) =>
    classes.filter(Boolean).join(" ");

export const getPageButtons = (page: string) => {
    const pageData = tabsButton.find((item) => item.page === page);
    return pageData ? pageData.buttons : [];
  };