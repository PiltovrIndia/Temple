import React from 'react';
import Image from 'next/image';
import GreenGod from '../../public/GreenGod.png';
import Link from '../../public/Link.jpg'; // Assuming Link.jpg is an image
import Link2 from '../../public/Link2.jpg';
import Container from '../../public/Container.jpg'; // Assuming Container.jpg is an image
const donations: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="relative w-full h-[600px] sm:h-[600px] lg:h-[900px]">
                <div className="relative w-full h-full overflow-hidden" style={{ clipPath: 'url(#curveClipPath)' }}>
                    <Image
                        src={GreenGod}
                        alt="Green God"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>
                <svg className="absolute bottom-0 left-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#fff" fill-opacity="1" d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,192C672,203,768,181,864,176C960,171,1056,181,1152,186.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
            <div>
                <div>
                    <h1 className='mb-8px' style={{ fontWeight: 'bold', color: 'maroon' }}>Devotees can donate here</h1>
                </div>

            </div>
        </div>
    );
};

export default donations;