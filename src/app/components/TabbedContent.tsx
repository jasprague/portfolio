'use client'
import { useState, useEffect } from 'react';
import ContentCard from './ContentCard';


const TabbedContent: React.FC = () => {
const tabs = ["Skills", "Experience", "References"]
const [activeTab, setActiveTab] = useState(0);

const handleTabClick = (index: number) => {
    setActiveTab(index);
  };


const [isMobileOrTablet, setIsMobileOrTablet] = useState(false)
useEffect(() => {
    const  checkWindowSize = () => {
        const width = window.innerWidth;
        setIsMobileOrTablet(width <= 768)
    }
    checkWindowSize()
    window.addEventListener('resize', checkWindowSize);
    return () => {
        window.removeEventListener('resize', checkWindowSize)
    }
  }, [])
  return (
    <section className="w-10/12 mx-auto mb-20">
      <div className="flex w-full justify-items-center flex:1">
        {tabs.map((tab, index) => (
          <a key={index} style={{borderCollapse: 'collapse'}}className={' p-2 md:p-10 w-6/12 text-center rounded-t-2xl  h-full hover:bg-teal-500 transition-all' + (index === activeTab ? ' active bg-teal-800' : '')} onClick={() => handleTabClick(index)}>
            {tab}
          </a>
        ))}
      </div>
      <div>
            {tabs[activeTab] === 'Skills' && <ContentCard forCard={'Skills'}/>}
            {tabs[activeTab] === 'Experience' && <ContentCard forCard={'Experience'}/>}
            {tabs[activeTab] === 'References' && <ContentCard forCard={'References'}/>}     
      </div>
    </section>
  );
};

export default TabbedContent;
