import React from "react";

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                               src="https://media.istockphoto.com/id/1221442369/photo/famous-places-of-india-in-the-collage-of-photos.webp?b=1&s=170667a&w=0&k=20&c=VHldoJGwNvkxdDcIoVqvBnyUx8a0bZxAC4QaWCat4sU="
                            // src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        “Can we just skip to the part of my life where I travel the world?”
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Raj travel agency is a private retailer or public service that provides travel and tourism-related services to the general public on behalf of accommodation or travel suppliers to offer different kinds of travelling packages for each destination. </p>
                        <p className="mt-4 text-gray-600">
                        Man cannot discover new oceans unless he has the courage to lose sight of the shore.A person susceptible to ‘wanderlust’ is not so much addicted to movement as committed to transformation </p>
                    </div>
                </div>
            </div>
        </div>
    );
  }