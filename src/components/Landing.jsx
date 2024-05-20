import { useEffect, useState } from "react"   
import bgImg from "../assets/images/background.jpg"
import firstImg from "../assets/images/first.png"
import secondImg from "../assets/images/second.png"
import thirdImg from "../assets/images/third.jpg"
import fourthImg from "../assets/images/fourth.jpg"
import fifthImg from "../assets/images/fifth.png"
import sixthImg from "../assets/images/sixth.jpg"

export default function Landing(){
        
    return (
        
        <div className="landing">

            <div className="container">
                    <div className="image-container">
                        <img src={firstImg} alt="Background Image"  height="600" />
                    </div>


                    <div className="text-container">
                        <p className="txt">
                            The sugar industry in Negros Occidental is one of the most dynamic industries in the Philippine, whose richness and diversity dates back to the middle of the 19th century. What started out as insignificant cultivation of sugarcane from Negros Occidental by small-scale Filipino farmers would be dramatically transformed with the onrush of Spanish and Filipino migrant entrepreneurs, coherent to the potential stature of becoming one of the largest suppliers of sugar for native and export consumption because of the fertile soil and favorable climatic conditions in the region. 
                        </p>
                    </div>
            </div>


            <div className="container">
                    
                    <div className="text-container-right">
                        <p className="txt">
                        Indeed, from thereon, the economy of the region was anchored on sugar. The abuse developed into immense sugar estates in Negros Occidental, as the demand for sugar deepened, especially from the markets of America and Europe in the closing years of the 19th century. The system, known as the hacienda system, under which the land is controlled by the landlords, who are known as hacenderos, further fueled the increase in production.

                        </p>
                    </div>
                    <div className="image-container-right">
                        <img src={secondImg} alt="Background Image" width="700px" height="600" />
                    </div>
            </div>

            <div className="container">
                    <div className="image-container">
                        <img src={thirdImg} alt="Background Image"  width="700px" height="600" />
                    </div>
                    <div className="text-container">
                        <p className="txt">
                        The hacienda system changed not only the landscape of Negros Occidental but also its social formation since a resource of that extent with a huge workforce of tenured farmers, also known as sacadas, toiled under harsh labor conditions that were imposed. The American period of colonization, which began in 1898, chalked up numerous ups and downs in the sugar industry in Negros Occidental. 
                        </p>
                    </div>
            </div>

            <div className="container">
                    <div className="text-container-right">
                        <p className="txt">
                        The steady market supply of the United States and its technological advancement and capital infusion modernized the production of sugar in Negros Occidental. It is during this period that the introduction of railroads and steam-powered mills increased the efficiency of production. The period also saw increased economic disparities and labor unrest, as the wealth from the sugar industry was concentrated among a few. The middle of the 20th century proved to be a turbulent time for the sugar industry in Negros Occidental. 
                        </p>
                    </div>
                    <div className="image-container-right">
                        <img src={fourthImg} alt="Background Image"  width="700px" height="600" />
                    </div>
            </div>

            <div className="container">
                    <div className="image-container">
                        <img src={fifthImg} alt="Background Image"  width="700px" height="600" />
                    </div>
                    <div className="text-container">
                        <p className="txt">
                        World War II with wholesale disruption left many mills destroyed, and production halted. The post-war years and the necessary rebuilding were a challenge. The 1970s and 1980s have seen world sugar prices hit rock bottom, impacting the industry in a big way. The late 1980s brought more changes in the industry, reshaped by newly enacted agrarian reform laws. Most of the land was to be transferred from the wealthy hacienderos to the workers. The late 20th, early 21st centuries have seen the sugar industry of Negros Occidental proactively reinvigorate. Main strategies are modernization and diversification. Some are irrigation and milling technologies to improve techniques in yield and efficiency, moving to high-value-added by-products to stabilize the industry and reduce dependency on traditional sugar markets. 
                        </p>
                    </div>
            </div>

            <div className="container">
                    <div className="text-container-right">
                        <p className="txt">
                        Up to now, Negros Occidental is one of the key players in the sugar industry of the Philippines, contributing an ample percentage share of the country's total sugar production. Thus far, the industry has known many challenges — from labor issues, the fight for market share against other sugar nations, and, of course, the heart-breaking effects of climate change. The sugarcane industry in Negros Occidental is part of their history and culture, still defining the economic and social environment.
                        </p>
                    </div>
                    <div className="image-container-right">
                        <img src={sixthImg} alt="Background Image"  width="700px" height="600" />
                    </div>
            </div>

        </div>
    )
}