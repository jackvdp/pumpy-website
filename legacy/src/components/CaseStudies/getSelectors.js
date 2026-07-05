import caseStudies from "./caseStudies";

export default function getSelectors() {
    const allValue = 'All'
    const classNames = caseStudies.map(item => item.className);
    const unique = [...new Set(classNames.flatMap(className => className.split(' ')))];
    const categories = [allValue, ...unique];
    const selectors = categories.map((item) => ({
        tagName: item.charAt(0).toUpperCase() + item.slice(1),
        selector: item === allValue ? "*" : `.${item.toLowerCase()}`
    }));
    return selectors.filter(selector => selector.tagName !== '');
}