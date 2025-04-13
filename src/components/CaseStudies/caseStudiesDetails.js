const caseStudiesDetails = [
    {
        id: 1,
        title: "Patch",
        description: "A modern digital presence for a hospitality consultancy firm specializing in operational excellence and business growth strategies.",
        website: "www.patchconsultancy.co.uk",
        images: {
            header: "https://placehold.co/705x430",
            fullWidth1: "https://placehold.co/1580x790",
            fullWidth2: "https://placehold.co/1580x700",
            sideBySide1: "https://placehold.co/770x830",
            sideBySide2: "https://placehold.co/770x830"
        },
        projectDetails: {
            description: "Patch required a professional website that showcased their hospitality expertise while providing an intuitive platform for potential clients to explore their services and approach.",
            technology: "Next JS, React, HTML, CSS",
            services: "Web Design, Development, Next.js",
            industry: "Hospitality, Consulting",
            client: "Patch Consultancy"
        },
        quotes: [
            {
                text: "Next.js delivers performance. The framework's server-side rendering capabilities ensure lightning-fast page loads and exceptional SEO optimization.",
                highlight: "Next.js delivers performance.",
                isHighlighted: true
            },
            {
                text: "This project focused on creating a clean, professional online presence that reflects Patch's expertise in the hospitality sector while making it easy for potential clients to understand their services and get in touch.",
                isHighlighted: false
            }
        ]
    },
    {
        id: 2,
        title: "Met Office",
        description: "Part of the development team for the Met Office's mobile applications, ensuring millions of UK citizens have reliable, real-time access to critical weather information.",
        website: "www.metoffice.gov.uk",
        images: {
            header: "https://placehold.co/705x430",
            fullWidth1: "https://placehold.co/1580x790",
            fullWidth2: "https://placehold.co/1580x700",
            sideBySide1: "https://placehold.co/770x830",
            sideBySide2: "https://placehold.co/770x830"
        },
        projectDetails: {
            description: "Working as a consultant for the Met Office, I spearheaded iOS development while supporting Android initiatives and spearheaded the transition to a unified React Native solution.",
            technology: "iOS, Swift, Android, Kotlin, React Native",
            services: "Mobile Development, Consulting",
            industry: "Government, Weather Services",
            client: "Met Office, UK Government"
        },
        quotes: [
            {
                text: "Cross-platform. The transition to React Native allowed for shared code across platforms while maintaining native performance and feel.",
                highlight: "Cross-platform.",
                isHighlighted: true
            },
            {
                text: "This project involved complex data visualization challenges, real-time updates, and strict government security protocols. The resulting applications provide millions of users with critical weather information in an accessible, intuitive format.",
                isHighlighted: false
            }
        ]
    },
    {
        id: 3,
        title: "Gigabyte Software",
        description: "A high-performance website for an innovative property technology company, utilising modern JavaScript frameworks for optimal user experience.",
        website: "www.gigabyte.software",
        images: {
            header: "https://placehold.co/705x430",
            fullWidth1: "https://placehold.co/1580x790",
            fullWidth2: "https://placehold.co/1580x700",
            sideBySide1: "https://placehold.co/770x830",
            sideBySide2: "https://placehold.co/770x830"
        },
        projectDetails: {
            description: "Gigabyte Software needed a sophisticated yet accessible website to showcase their property technology solutions and attract industry partnerships.",
            technology: "JavaScript, HTML, CSS, Webpack",
            services: "Web Development",
            industry: "Property Technology, Software",
            client: "Gigabyte Software"
        },
        quotes: [
            {
                text: "Modern tech for modern real estate. This website embodies the innovative approach Gigabyte brings to the property sector.",
                highlight: "Modern tech for modern real estate.",
                isHighlighted: true
            },
            {
                text: "The project required a careful balance between showcasing technical sophistication and maintaining accessibility for property professionals who may not have a technical background. The result is a clean, fast-loading site that effectively communicates Gigabyte's value proposition.",
                isHighlighted: false
            }
        ]
    },
    {
        id: 4,
        title: "Pumpy Music",
        description: "An innovative iOS application with a robust backend system delivering curated music solutions for businesses.",
        website: "music.vanderpump.tech",
        images: {
            header: "https://placehold.co/705x430",
            fullWidth1: "https://placehold.co/1580x790",
            fullWidth2: "https://placehold.co/1580x700",
            sideBySide1: "https://placehold.co/770x830",
            sideBySide2: "https://placehold.co/770x830"
        },
        projectDetails: {
            description: "Pumpy Music required a comprehensive solution including both an iOS application for business users and a sophisticated backend to manage music licensing, playlists, and playback systems.",
            technology: "iOS Development, Backend Development, Swift, TypeScript, Node.js",
            services: "Hospitality Consultancy & Music Tech",
            industry: "Music Technology, Hospitality",
            client: "Pumpy Music"
        },
        quotes: [
            {
                text: "Music transforms spaces. This application makes it simple for businesses to create the perfect atmosphere through technology.",
                highlight: "Music transforms spaces.",
                isHighlighted: true
            },
            {
                text: "This project involved intricate work with audio APIs, licensing systems, and real-time controls. The result is a seamless system that business owners can use to manage their establishment's musical atmosphere without requiring technical expertise.",
                isHighlighted: false
            }
        ]
    },
    {
        id: 5,
        title: "Electoral Network",
        description: "A secure, feature-rich platform connecting senior government officials working in elections worldwide, facilitating knowledge sharing and collaboration.",
        website: "www.electoralnetwork.org",
        images: {
            header: "https://placehold.co/705x430",
            fullWidth1: "https://placehold.co/1580x790",
            fullWidth2: "https://placehold.co/1580x700",
            sideBySide1: "https://placehold.co/770x830",
            sideBySide2: "https://placehold.co/770x830"
        },
        projectDetails: {
            description: "The Electoral Network required a comprehensive platform that could securely connect election officials globally, host webinars, manage membership, and provide access to specialized resources and articles.",
            technology: "Typescript, Next JS, Node.js, MongoDB, Supabase",
            services: "Web Development, Backend Systems, CMS Integration, Event Management",
            industry: "Government, Electoral Systems",
            client: "Electoral Network"
        },
        quotes: [
            {
                text: "Secure connections matter. This platform brings together global election experts while maintaining the security standards essential for governmental communications.",
                highlight: "Secure connections matter.",
                isHighlighted: true
            },
            {
                text: "The project required balancing sophisticated functionality with ease of use for officials from diverse technical backgrounds. Special attention was paid to security protocols, content management flexibility, and reliable webinar functionality across varying internet infrastructure qualities.",
                isHighlighted: false
            }
        ]
    },
    {
        id: 6,
        title: "Elev8 Exchange - FX",
        description: "Transformed an outdated WordPress site into a high-performance React application with multi-language support for a foreign exchange business, improving user experience and conversion rates globally.",
        website: "www.elev8exchange.com",
        images: {
            header: "https://placehold.co/705x430",
            fullWidth1: "https://placehold.co/1580x790",
            fullWidth2: "https://placehold.co/1580x700",
            sideBySide1: "https://placehold.co/770x830",
            sideBySide2: "https://placehold.co/770x830"
        },
        projectDetails: {
            description: "Elev8 Exchange needed to migrate from a slow, outdated WordPress platform to a modern, responsive, and high-performing website with comprehensive multi-language support. The new solution needed to better reflect their professional services, improve conversion rates, and serve their international client base effectively.",
            published: "October 2022",
            services: "Web Development, React, Multi-Language Implementation, Performance Optimization",
            industry: "Finance, Foreign Exchange",
            client: "Elev8 Exchange"
        },
        quotes: [
            {
                text: "Performance drives conversion. The transition to React dramatically improved site speed and user experience, directly impacting business metrics across all language markets.",
                highlight: "Performance drives conversion.",
                isHighlighted: true
            },
            {
                text: "This project involved carefully preserving SEO value and content while completely rebuilding the technical foundation with full internationalization support. The multi-language implementation allows Elev8 to serve clients in their native languages, expanding market reach while maintaining a consistent brand experience. The result is a website that loads in a fraction of the time, provides a superior user experience, and more effectively communicates Elev8's services and value proposition to a global audience.",
                isHighlighted: false
            }
        ]
    },
    {
        id: 7,
        title: "Xtra Loft Space",
        description: "A clean, professional website showcasing construction expertise in loft conversions, designed to build trust and generate qualified leads.",
        website: "www.xtraloftspace.com",
        images: {
            header: "https://placehold.co/705x430",
            fullWidth1: "https://placehold.co/1580x790",
            fullWidth2: "https://placehold.co/1580x700",
            sideBySide1: "https://placehold.co/770x830",
            sideBySide2: "https://placehold.co/770x830"
        },
        projectDetails: {
            description: "Xtra Loft Space needed a professional online presence that would showcase their construction expertise, portfolio of completed projects, and make it easy for potential clients to request consultations.",
            technology: "Next JS, Framer Animations",
            services: "Web Design, Development, Portfolio Showcase",
            industry: "Construction, Home Improvement",
            client: "Xtra Loft Space"
        },
        quotes: [
            {
                text: "Visual storytelling builds trust. For construction companies, showing the quality of work through compelling imagery is essential to converting site visitors into clients.",
                highlight: "Visual storytelling builds trust.",
                isHighlighted: true
            },
            {
                text: "This project focused on creating an intuitive portfolio showcase that highlights the quality of Xtra Loft Space's work while providing clear information about services, process, and consultation options. The site is optimized for local SEO to capture relevant traffic from homeowners in their service area.",
                isHighlighted: false
            }
        ]
    },
    {
        id: 8,
        title: "Vanderpump FX",
        description: "A sophisticated website for a foreign exchange business, combining professional aesthetics with clear communication of complex financial services.",
        website: "www.vanderpumpfx.com",
        images: {
            header: "https://placehold.co/705x430",
            fullWidth1: "https://placehold.co/1580x790",
            fullWidth2: "https://placehold.co/1580x700",
            sideBySide1: "https://placehold.co/770x830",
            sideBySide2: "https://placehold.co/770x830"
        },
        projectDetails: {
            description: "Vanderpump FX required a website that would effectively communicate their foreign exchange services while establishing trust and credibility in the competitive financial services market.",
            technology: "React",
            services: "Web Design, Development, Financial Services UX",
            industry: "Finance, Foreign Exchange",
            client: "Vanderpump FX"
        },
        quotes: [
            {
                text: "Financial clarity through design. Complex services require clear communication, achievable through thoughtful user experience design.",
                highlight: "Financial clarity through design.",
                isHighlighted: true
            },
            {
                text: "This project focused on creating a professional, trustworthy online presence that effectively explains foreign exchange services to potential clients. Special attention was paid to compliance requirements, clear service descriptions, and creating multiple pathways for visitors to engage with the company based on their specific needs.",
                isHighlighted: false
            }
        ]
    },
    {
        id: 9,
        title: "Department for Business & Trade",
        description: "Part of the development team of a unified platform to host all DBT services, improving accessibility and streamlining user experience for businesses and citizens.",
        website: "www.gov.uk/government/organisations/department-for-business-and-trade",
        images: {
            header: "https://placehold.co/705x430",
            fullWidth1: "https://placehold.co/1580x790",
            fullWidth2: "https://placehold.co/1580x700",
            sideBySide1: "https://placehold.co/770x830",
            sideBySide2: "https://placehold.co/770x830"
        },
        projectDetails: {
            description: "The Department for Business & Trade needed expert consultation on developing a comprehensive platform to unify their diverse service offerings, improve user experience, and meet stringent government accessibility and security standards.",
            technology: "AWS",
            services: "Technical Consultation, Platform Architecture, Government Digital Services",
            industry: "Government, Business Services",
            client: "Department for Business & Trade, UK Government"
        },
        quotes: [
            {
                text: "Digital transformation in government. Creating unified, accessible systems improves services for citizens while increasing operational efficiency.",
                highlight: "Digital transformation in government.",
                isHighlighted: true
            },
            {
                text: "This consultation project involved working with multiple stakeholders across government departments to understand diverse user needs, technical constraints, and compliance requirements. The resulting platform architecture provides a framework for bringing together previously siloed services into a cohesive, user-centered experience.",
                isHighlighted: false
            }
        ]
    }
];

export default caseStudiesDetails;