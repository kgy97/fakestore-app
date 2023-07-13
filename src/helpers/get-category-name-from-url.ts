// Return the name of the product category from the web url
const getCategoryNameFromURL = (pathname: string) => {
    return decodeURIComponent(pathname?.split('/')?.[1]) ?? '';
};

export default getCategoryNameFromURL;