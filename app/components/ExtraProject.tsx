
function ExtraProject({name,description,live_link,github_link,tools}: {name: string, description: string, live_link?: string, github_link?: string, tools?: string[]}) {
    
    return (
        <div className="bg-[#152026] p-5 md:p-6 flex flex-col min-w-[280px] xphones:min-w-[310px] max-w-[320px] lg:min-h-[300px] rounded" >
            <div className="flex justify-between items-center mb-3" >
                {/* <img src="/javascript-js.svg" alt="JS Icon" className="w-[35px] h-[35px] rounded " /> */}
                <div className="flex items-center gap-3" >
                    {
                        github_link &&
                        <a href={github_link} target="_blank" >
                            <img src="/github.svg" alt="github icon" className="w-6 h-6" />
                        </a>
                    }
                    {
                        live_link &&
                        <a href={live_link} target="_blank" >
                            <img src="/live.svg" alt="Live link" className="w-6 h-6" />
                        </a>
                    }
                    
                </div>
            </div>
            <div className="flex flex-wrap gap-3 mb-8" >
                {
                    tools?.map((tool, index) => (
                        <span key={index} className="text-[#1679AB] text-sm " >{tool}</span>
                    ))
                }
            </div>

            <div>
                <h4 className="text-[#bfc3ca] text-xl md:text-2xl mb-2" >
                    {name}
                </h4>
                <p className="text-[#8f9195] text-sm md:text-base " >
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ExtraProject;