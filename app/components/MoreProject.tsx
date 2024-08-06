
function MoreProject() {
    
    return (
        <div className="bg-[#152026] p-5 md:p-6 flex flex-col min-w-[280px] xphones:min-w-[310px] max-w-[320px] lg:min-h-[300px] rounded" >
            <div className="flex justify-between items-center mb-2" >
                <img src="/javascript-js.svg" alt="JS Icon" className="w-[35px] h-[35px] rounded " />
                <div className="flex items-center gap-3" >
                    <img src="/github.svg" alt="github icon" className="w-6 h-6" />
                    <img src="/live.svg" alt="Live link" className="w-6 h-6" />
                </div>
            </div>
            <div className="flex gap-3 mb-8 md:mb-12" >
                <span className="text-[#1679AB] text-sm " >Webpack</span>
                <span className="text-[#1679AB] text-sm" >Javascript</span>
            </div>

            <div>
                <h4 className="text-[#bfc3ca] text-xl md:text-2xl mb-2" >
                    Palbucks
                </h4>
                <p className="text-[#8f9195] text-sm md:text-base " >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum perspiciatis ea ratione repellendus porro facilis sint quos est, ipsum vel.
                </p>
            </div>
        </div>
    )
}

export default MoreProject;