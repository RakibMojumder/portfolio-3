import { navItems } from "../utils/data";

const handleScrollActiveLink = (setActiveSection, scrollPosition) => {
    const sectionOffsets = navItems.map((section) => {
        const element = document.getElementById(section.href);
        return {
            href: section.href,
            offset: element.offsetTop,
            height: element.offsetHeight,
        };
    });

    const currentSection = sectionOffsets.find(
        ({ offset, height }) =>
            scrollPosition >= offset - 50 && scrollPosition < offset + height - 50
    );

    if (currentSection) {
        setActiveSection(currentSection.href);
    }
};

export default handleScrollActiveLink;