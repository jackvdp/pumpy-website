import Image from "next/image";

const logosData = [
    {src: "/imagesNew/logos/dbt.webp", link: "#", height: 50},
    {src: "/imagesNew/logos/elev8.webp", link: "#", height: 45},
    {src: "/imagesNew/logos/gigabyte.svg", link: "#", height: 30},
    {src: "/imagesNew/logos/icps.webp", link: "#", height: 45},
    {src: "/imagesNew/logos/met.svg", link: "#", height: 25}
];

export default function Logos() {
    return (
        <section className="pb-0 bg-white">
            <div className="container">
                <LogosNoContainer/>
            </div>
        </section>
    );
}

export function LogosNoContainer() {
    return (
        <div
            className="row row-cols-1 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 clients-style-06 justify-content-center"
            data-anime='{ "el": "childs", "translateY": [-15, 0], "scale": [1.1, 1], "opacity": [0,1], "duration": 500, "delay": 100, "staggervalue": 300, "easing": "easeOutQuad" }'>
            {logosData.map((logo, index) => (
                <div key={index} className="col client-box text-center md-mb-40px">
                    <a href={logo.link}>
                        <Image
                            src={logo.src}
                            alt=""
                            width={100}
                            height={logo.height}
                            style={{
                                filter: 'brightness(0) saturate(100%)',
                                width: 'auto',
                                height: `${logo.height}px`
                            }}
                            className="object-contain"
                        />
                    </a>
                </div>
            ))}
        </div>
    )
}