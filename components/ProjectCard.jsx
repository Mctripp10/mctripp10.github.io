import React from 'react';
import Link from 'next/link';
import TagSection from './TagSection';

const ProjectCard = ({ title, description, imgUrl, srcUrl, tags }) => {
    return (
        <div className="w-[400px] rounded-3xl bg-gray-900 transition-all duration-300 hover:border-to hover:bg-gradient-to-br hover:from-violet-950 hover:via-violet-950 via-65% hover:to-pink-500 hover:scale-105 bg-size-200 bg-pos-0 hover:bg-pos-100
        shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]
        ">
            <Link href={`${srcUrl}`} target="_blank">
            <div
                className="h-48 md:h-52 rounded-t-3xl"
                style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
            ></div>
            <div className='flex h-24 mx-5 text-centertext-white'>
                <div className='m-auto'>
                    <h5 className='text-lg font-semibold'>{title}</h5>
                    <div className='text-sm'>{description}</div>
                </div>
            </div>
            </Link>
            <TagSection projectTags={tags} />
        </div>
    )
}

export default ProjectCard;