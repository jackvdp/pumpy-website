const caseStudies = [
    {
        id: 1,
        className: "selected digital",
        link: "demo-digital-agency-single-project-minimal.html",
        imgSrc: "https://via.placeholder.com/750x905",
        bgClass: "bg-nero-gray",
        title: "Tailoring",
        subtitle: "Brochure"
    },
    {
        id: 2,
        className: "selected branding",
        link: "demo-digital-agency-single-project-minimal.html",
        imgSrc: "https://via.placeholder.com/750x905",
        bgClass: "bg-dark-gray",
        title: "Violator",
        subtitle: "Branding"
    },
    {
        id: 3,
        className: "web branding",
        link: "demo-digital-agency-single-project-minimal.html",
        imgSrc: "https://via.placeholder.com/750x905",
        bgClass: "bg-dark-gray",
        title: "Gardner",
        subtitle: "Branding"
    },
    {
        id: 4,
        className: "selected digital",
        link: "demo-digital-agency-single-project-minimal.html",
        imgSrc: "https://via.placeholder.com/750x905",
        bgClass: "bg-dark-gray",
        title: "Identity",
        subtitle: "Poster"
    },
    {
        id: 5,
        className: "selected web digital branding",
        link: "demo-digital-agency-single-project-minimal.html",
        imgSrc: "https://via.placeholder.com/750x905",
        bgClass: "bg-dark-gray",
        title: "Educamp",
        subtitle: "Packaging"
    },
    {
        id: 6,
        className: "web digital branding",
        link: "demo-digital-agency-single-project-minimal.html",
        imgSrc: "https://via.placeholder.com/750x905",
        bgClass: "bg-dark-gray",
        title: "Designs",
        subtitle: "Graphic"
    },
    {
        id: 7,
        className: "selected web branding",
        link: "demo-digital-agency-single-project-minimal.html",
        imgSrc: "https://via.placeholder.com/750x905",
        bgClass: "bg-dark-gray",
        title: "Pixflow",
        subtitle: "Branding"
    },
    {
        id: 8,
        className: "selected web digital branding",
        link: "demo-digital-agency-single-project-minimal.html",
        imgSrc: "https://via.placeholder.com/750x905",
        bgClass: "bg-dark-gray",
        title: "Cropo",
        subtitle: "Branding"
    },
    {
        id: 9,
        className: "web digital",
        link: "demo-digital-agency-single-project-minimal.html",
        imgSrc: "https://via.placeholder.com/750x905",
        bgClass: "bg-dark-gray",
        title: "Herbal",
        subtitle: "Graphic"
    }
];

export default caseStudies;

function getSelectors() {
    const allValue = 'All'
    const classNames = caseStudies.map(item => item.className);
    const unique = [...new Set(classNames.flatMap(className => className.split(' ')))];
    const categories = [allValue, ...unique];
    return categories.map((item) => ({
        tagName: item.charAt(0).toUpperCase() + item.slice(1),
        selector: item === allValue ? "*" : `.${item.toLowerCase()}`
    }));
}

export { getSelectors };


