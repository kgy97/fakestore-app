const getCategoryNameFromURL = (pathname: string) => {
    return decodeURIComponent(pathname?.split('/')?.[1]) ?? '';
};

export default getCategoryNameFromURL;