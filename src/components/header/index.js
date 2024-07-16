import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";

const tabs = [
    { name: 'All', href: '#', current: true },
    { name: 'Manpower Supply', href: '#', current: false },
    { name: 'Mobile App/Websites', href: '#', current: false },
    { name: 'UI/UX Design', href: '#', current: false }
];

const articles = {
    'Manpower Supply': [
        { title: 'Dsoft', image: 'https://tekup.vn/wp-content/uploads/2022/09/doitac-dsoft.jpg' },
        { title: 'MITC', image: 'https://tekup.vn/wp-content/uploads/2022/09/doitac-mitc.jpg' },
        { title: 'Tego', image: 'https://tekup.vn/wp-content/uploads/2022/09/doitac-tego.jpg' },
        { title: 'MOR', image: 'https://tekup.vn/wp-content/uploads/2022/09/doitac-mor.jpg' },
        { title: 'Code Complete', image: 'https://tekup.vn/wp-content/uploads/2022/09/doitac-code-complete.jpg' },
        { title: 'Smart Dev', image: 'https://tekup.vn/wp-content/uploads/2022/09/doitac-smart-dev.jpg' },
    ],
    'Mobile App/Websites': [
        { title: 'TOI 3D Customize E-commerce', image: 'https://tekup.vn/wp-content/uploads/2022/09/image-1.png' },
        { title: 'E-learning - Internal training platform', image: 'https://tekup.vn/wp-content/uploads/2022/09/image.png' },
        { title: 'Summer 21 Cosmetic E-commerce Platform', image: 'https://tekup.vn/wp-content/uploads/2022/08/summer21-thumbnail.png' },
        { title: 'Kiva - Ambition to digital transformation in the brokerage assiduity', image: 'https://tekup.vn/wp-content/uploads/2022/08/kiva-thumbnail.png' },
        { title: 'Boxgo - Professional Warehouse Management', image: 'https://tekup.vn/wp-content/uploads/2022/08/boxgo-thumbnail.png' },
    ],
    'UI/UX Design': [
    ],
};

const Header = () => {
    const [currentTab, setCurrentTab] = useState('All');

    const getArticlesForTab = (tab) => {
        if (tab === 'All') {
            return [
                ...articles['Mobile App/Websites'],
                ...articles['UI/UX Design']
            ];
        } else if (tab === 'UI/UX Design') {
            return [
                ...articles['Mobile App/Websites'].slice(1, 5)
            ];
        } else {
            return articles[tab] || [];
        }
    };

    const currentArticles = getArticlesForTab(currentTab);

    return (
        <div>
            <header className="bg-white ">
                <div className="container mx-auto px-4 py-4">
                    <nav className="flex justify-center space-x-4 border-none ">
                        {tabs.map((tab) => (
                            <a
                                key={tab.name}
                                href={tab.href}
                                className={`px-3 py-2 rounded-md text-medium font-medium text-black ${
                                    currentTab === tab.name ? 'bg-[#f8d000]' : 'bg-[#ffffff]'
                                }`}
                                onClick={() => setCurrentTab(tab.name)}
                            >
                                {tab.name}
                            </a>
                        ))}
                    </nav>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8 cursor-pointer">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentArticles.map((article, index) => (
                        <div key={index} className="p-6 bg-[#f8f8f8] rounded-lg shadow-custom transform transition-transform hover:scale-105 hover:shadow-lg">
                            <img src={article.image} alt={article.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                            <div className="bg-white p-4 rounded-lg border border-gray-300 relative border-none shadow-custom">
                                <h2 className="text-gray-700 font-medium mr-8">{article.title}</h2>
                                <IoIosArrowForward className="text-gray-700 absolute top-1/2 right-4 transform -translate-y-1/2" />
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Header;
