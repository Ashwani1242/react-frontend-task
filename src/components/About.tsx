import { useState } from "react";
import { Interweave } from 'interweave';
import Help from "../icons/Help";
import Grid from "../icons/Grid";

function About() {
    const [openTab, setOpenTab] = useState(0);

    const tabOptions = ["About Me", "Experiences", "Recommended"];
    const tabContent = [
        "Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now. \n\n I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a... .",
        "Experiences... blah blah blah blah..",
        "Recommended... blah blah blah blah.."
    ];

    return (
        <section className="flex justify-center h-full w-full rounded-[18.89px] max-w-[720px] max-h-[330px] px-3 py-5 bg-[#363C43] card-drop-shadow">
            <div className="h-[60%] flex flex-col justify-between pr-4">
                <button>
                    <Help />
                </button>
                <button>
                    <Grid />
                </button>
            </div>
            <div className="w-full h-full">
                <ul
                    className="flex bg-[#171717] rounded-[23px] min-h-[62px] h-[62px] justify-between items-center tab-drop-shadow py-[6px] px-[6px] mr-9"
                    role="tablist" >
                    {tabOptions.map((option, index) => (
                        <div key={index} className={"cursor-pointer rounded-2xl flex-1 h-full flex justify-center items-center transition-all duration-300" + " " +
                            (openTab === index
                                ? "bg-[#28292F] text-white tab-selected-drop-shadow"
                                : "bg-transparent text-[#A3ADB2]")}>
                            <a
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(index);
                                }}>
                                {option}
                            </a>
                        </div>
                    ))}
                </ul>
                <div className={
                    "relative flex flex-col h-[180px] pr-[35px] mt-[35px]" + " "
                    + "overflow-y-auto custom-scrollbar"
                } >
                    <div className="">
                        <div className="tab-content tab-space text-[#969696] text-[20px]">
                            <Interweave content={tabContent[openTab].replace(/\n/g, '<br>')} />
                        </div>
                    </div>
                </div>
            </div>

            {/* PLEASE READ THIS !!!!!!!
            
            I did not know what to do with the scrollbar you designed in the Figma file so I made this component below that uses the exact same styles that were in the Figma file and as well as a custom scrollbar that is attached to the content above.
            You can comment the component below and the styles above to see both of them. */}

            {/* <div className="h-full bg-indigo-40 w-6 flex justify-center items-center">
                <div className="w-2 h-16 rounded-lg bg-gradient-to-b from-[#888989] to-[#4A4E54]" />
            </div> */}
        </section>
    );
};

export default About;
