import ServiceAreaCard from "./ServiceAreaCard";
import serviceAreasData from "../../../data/serviceAreas.json";

// Import all images to use with the data from the JSON file
import Escondido from "../../../images/cities/escondido2.png";
//import MiraMesa from "../../../images/cities/mira-mesa1.jpg";
//import Miramar from "../../../images/cities/miramar1.jpg";
import Oceanside from "../../../images/cities/oceanside2.jpg";
import Poway from "../../../images/cities/poway2.jpeg";
import RanchoBernardo from "../../../images/cities/ranchobernardo2.jpg";
import Vista from "../../../images/cities/vista2.png";
import SanMarcos from "../../../images/cities/sanmarcos2.png";
import SanDiego from "../../../images/cities/sandiego2.jpg";
import Carlsbad from "../../../images/cities/carlsbad2.jpg";
import Temecula from "../../../images/cities/temecula2.jpg";

// Map of image imports to use with the data
const imageMap = {
    "../images/cities/escondido2.png": Escondido,
    "../images/cities/oceanside2.jpg": Oceanside,
    "../images/cities/poway2.jpeg": Poway,
    "../images/cities/ranchobernardo2.jpg": RanchoBernardo,
    "../images/cities/vista2.png": Vista,
    "../images/cities/sanmarcos2.png": SanMarcos,
    "../images/cities/sandiego2.jpg": SanDiego,
    "../images/cities/carlsbad2.jpg": Carlsbad,
    "../images/cities/temecula2.jpg": Temecula
};


function AllServiceAreas2() {
    // Get service areas by group for the layout
    const firstRowServiceAreas = serviceAreasData.slice(0, 3);
    const secondRowServiceAreas = serviceAreasData.slice(3, 6);
    const thirdRowServiceAreas = serviceAreasData.slice(6);

    // Function to determine the appropriate className based on the index position
    const getClassName = (index) => {
        let className = "";
        
        // First item in each row
        if (index === 0) {
            className = "mt-16 md:mt-0 xl:w-1/3 sm:w-1/2";
        }
        // Second item in each row
        else if (index === 1) {
            className = "mt-48 md:mt-0 xl:w-1/3 sm:w-1/2 xl:-mb-48";
        }
        // Third item in each row
        else if (index === 2) {
            className = "mt-48 xl:mt-0 lg:mt-48 xl:w-1/3 sm:w-1/2";
        }
        
        return className;
    };

    return (
        <>
            <div className="pt-10 pb-32">
                <div className="container w-full px-8 mx-auto 2xl:px-0 xl:px-4">
                    <div className="mt-40 md:mt-48">
                        <div className="flex flex-col flex-wrap items-center justify-center md:flex-row xl:justify-between">
                            {firstRowServiceAreas.map((area, index) => (
                                <ServiceAreaCard 
                                    key={area.id}
                                    to={area.to}
                                    image={imageMap[area.image]}
                                    name={area.name}
                                    className={getClassName(index)}
                                />
                            ))}
                        </div>
                        <div className="mt-48 ">
                            <div className="flex flex-col flex-wrap items-center justify-center md:flex-row xl:justify-between">
                                {secondRowServiceAreas.map((area, index) => (
                                    <ServiceAreaCard 
                                        key={area.id}
                                        to={area.to}
                                        image={imageMap[area.image]}
                                        name={area.name}
                                        className={getClassName(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mt-40 md:mt-48">
                        <div className="flex flex-col flex-wrap items-center justify-center md:flex-row xl:justify-between">
                            {thirdRowServiceAreas.map((area, index) => (
                                <ServiceAreaCard 
                                    key={area.id}
                                    to={area.to}
                                    image={imageMap[area.image]}
                                    name={area.name}
                                    className={getClassName(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default AllServiceAreas2
