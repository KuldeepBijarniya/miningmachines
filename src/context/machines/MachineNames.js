import machineContext from "./machineContext";

const MachineNames = (props) => {
    const a = [{
        img: require('./images/bwe.webp'),
        title: "Bucket Wheel Excavator",
        type: "both",
        url:"https://drive.google.com/file/d/1LvwrnVk5KsYF7l2R6UR6o_LWxjMWaHEY/view?usp=share_link",
        description: "The bucket-wheel excavator (BWE) is a continuous excavation machine capable of removing up to 12,000 cubic metres per hour. The most favourable soil and strata conditions for BWE operation are soft, unconsolidated overburden materials without large boulders."
    },
    {
        img: require('./images/Drilling.jpg'),
        title: "Drilling Machine",
        type: "both",
        url:"https://crmining.com/mining-drill/",
        description: "Drilling machinery, equipment used to drill holes in the ground for such activities as prospecting, well sinking (petroleum, natural gas, water, and salt), and scientific explorations. Drilling holes in rock to receive blasting charges is an operation in tunneling, mining, and other excavating."
    },
    {
        img: require('./images/Grader.jpg'),
        title: "Grader",
        type: "both",
        url:"https://en.wikipedia.org/wiki/Grader",
        description: "Graders or Motor Graders as they are usually referred to as are heavy duty robust construction equipment used for creating a flat surface for the grading process. At the focus of this machine is the blade positioned between the front of the grader and the axle."
    },
    {
        img: require('./images/Dozer.jpg'),
        title: "Dozer",
        type: "both",
        url:"https://drive.google.com/file/d/1wKKmAxaEgioiF1xl9-XzqX9TD69gtRjG/view?usp=share_link",
        description: "Dozers are strong machines that mainly assist with pushing, digging, excavating, and leveling materials like soil and debris at a work site. They come with large, heavy blades in the front that push material. Some come with other modifications like rippers in the rear to help break down tough ground"
    },
    {
        img: require('./images/Shovel.webp'),
        title: "Shovel",
        type: "both",
        url:"https://drive.google.com/file/d/1Zi9tqY-jRGR6YYPUBoPNkAigW7QtQs0p/view?usp=share_link",
        description: "Shovel(mechanical shovel) is a machine that moves along wheels or tracks and has a structure that can rotate at least 360 degrees. It can be used to excavate land or to load, lift, rotate, and unload materials using a spoon that is fixed to a set of boom and arms or rocker’s arms without the supporting chassis moving."
    },
    {
        img: require('./images/Dragline.png'),
        title: "Dragline",
        type: "both",
        url:"https://drive.google.com/file/d/1jU4gMHAbVhFD75jeSqRnGMsJ7G_9wxNc/view?usp=share_link",
        description: "A dragline excavator is a piece of heavy equipment used in civil engineering and surface mining.A dragline bucket system consists of a large bucket which is suspended from a boom (a large truss-like structure) with wire ropes. The bucket is maneuvered by means of a number of ropes and chains."
    },
    {
        img: require('./images/LHD.jpg'),
        title: "LHD (Load Haul Dumper)",
        type: "both",
        url:"https://en.wikipedia.org/wiki/LHD_(load,_haul,_dump_machine)",
        description: "LHD loaders are similar to conventional front end loaders but developed for the toughest of hard rock mining applications, keeping overall production economy, safety, and reliability in consideration. They are extremely rugged, highly maneuverable, and exceptionally productive. More than 75% of the world's underground metal mines use LHD for handling the muck of their excavations."
    },
    {
        img: require('./images/SDL.png'),
        title: "SDL (Side Discharge Loaders)",
        type: "both",
        url:"https://www.miningpapa.com/2020/05/side-discharge-loader-work-parts-safety-devices-specification-by-mining-papa.html",
        description: "Side Discharge Loaders (SDL) is now used as a dominant loading machine for intermediate face mechanization in underground coal mines.After the cut coal is loaded onto haulage vehicles, the operator then backs the continuous miner out of the partially formed room, repositions the machine, and reenters to begin removing an additional 3 m section of coal to produce a wider entry."
    },
    {
        img: require('./images/SurfaceMiner.jpg'),
        title: "Surface Miner",
        type: "both",
        url:"https://drive.google.com/file/d/1KbcAYv9u39LnfA1TiGXcqPMyXrrPrYZN/view?usp=share_link",
        description: "The surface miner is a mobile milling machine with a mechanically driven cutting drum. The drum is located between two sets of individual height adjustable crawler tracks, and a two-stage conveyor system is used to directly load trucks. Surface miners cut, crush and load the material in one single pass.The surface miner is driven via four steerable and height-adjustable track units"
    }
    ]
    return (
        <machineContext.Provider value={a}>
            {props.children}
        </machineContext.Provider>
    );
}

export default MachineNames;