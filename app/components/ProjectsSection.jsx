import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
    {
        id: 1,
        title: 'React Portfolio Website',
        description: 'Project 1 description',
        image: '/images/projects/1.png',
        tag: ['All', 'Web']
    }
]

const ProjectsSection = () => {
    return (
        <>
            <h2 className='text-center text-4xl font-bold text-white mt-4'>
                My Projects
            </h2>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {projectsData.map((project) => (
                    <ProjectCard 
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        imgUrl={project.image} 
                    />
                ))}
            </div>
        </>
    )
}

export default ProjectsSection;