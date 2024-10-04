import Image from "next/image";

function Project({name,image,description,link,favImg}: {name: string, image: string, description: string, link: string,favImg?: string}) {
    
    return (
        <div className="w-full h-[400px] md:h-[500px] max-w-full lg:max-w-[90%] mx-auto bg-[#1f1f1f] 
            flex flex-col-reverse gap-3 md:gap-4 p-3 md:p-5 md:px-[20px] rounded-xl "
        >
            <div className="flex-1 text-white flex flex-col justify-between gap-4 ">
                <div className="">                    
                    <h4 className="font-bold text-white text-xl md:text-2xl lg:text-[28px] mb-[5px] md:mb-[10px] " >
                        {name} 
                    </h4>
                    <p className="text-sm md:text-base" >                        
                        {description}
                    </p>
                </div>

                <a href={link} target="_blank">
                    <button className="flex gap-2 text-sm md:text-base text-[#37b1da] " >
                        <span>Visit Site</span>
                        <img src="/arrowright2.svg" alt="Right arrow" className="w-5 h-5 " />                        
                    </button>
                </a>
            </div>
            <div className="flex-1 lg:max-h-[60%]">
                <img
                    src={image}
                    alt="Project"
                    className="rounded-md md:rounded-lg w-full h-full max-h-[300px]  object-cover "
                />
            </div>
        </div>
    );
}

export default Project;