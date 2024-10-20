export default function Logos() {
    const logosData = [
        { src: "imagesNew/logos/dbt.png", link: "#", height: "h-50px" },
        { src: "imagesNew/logos/elev8.webp", link: "#", height: "h-45px" },
        { src: "imagesNew/logos/gigabyte.svg", link: "#", height: "h-30px" },
        { src: "imagesNew/logos/icps.png", link: "#", height: "h-45px" },
        { src: "imagesNew/logos/met.svg", link: "#", height: "h-25px" }
    ];

    return (
        <section className="pb-0 bg-white">
            <div className="container">
                <div className="row row-cols-1 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 clients-style-06 justify-content-center" data-anime='{ "el": "childs", "translateY": [-15, 0], "scale": [1.1, 1], "opacity": [0,1], "duration": 500, "delay": 100, "staggervalue": 300, "easing": "easeOutQuad" }'>
                    {logosData.map((logo, index) => (
                        <div key={index} className="col client-box text-center md-mb-40px">
                            <a href={logo.link}>
                                <img 
                                src={logo.src}
                                style={{ filter: 'brightness(0) saturate(100%)' }}
                                className={logo.height} 
                                alt="" 
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}