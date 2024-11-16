const Education = () => {
    return (
        <div id="education" className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <div className="mx-auto mt-2 max-w-lg text-center sm:text-5xl">
                    <h2 className="flex items-center justify-center text-4xl font-medium tracking-tight text-gray-950">
                        <svg
                            className="mr-2 text-indigo-600"
                            fill="#6E07F3"
                            width="30px"
                            height="30px"
                            viewBox="0 0 14 14"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="m 12.499079,12.25525 c 0.0968,0 0.188377,-0.0436 0.249339,-0.11884 0.06096,-0.0752 0.08473,-0.17385 0.06473,-0.26853 l -0.202146,-0.95662 c 0.115125,-0.11137 0.187491,-0.26686 0.187491,-0.43975 0,-0.182 -0.08106,-0.34343 -0.206876,-0.45558 l 0,-3.32202 -0.810333,0.50146 0,2.82056 c -0.125815,0.11215 -0.2069,0.27358 -0.2069,0.45558 0,0.17291 0.07239,0.32841 0.187515,0.43975 l -0.20217,0.95662 c -0.02,0.0947 0.0038,0.19335 0.06473,0.26853 0.06096,0.0752 0.152539,0.11884 0.249339,0.11884 l 0.625281,0 z M 12.773741,4.75539 7.5021019,1.49209 C 7.3477151,1.39699 7.1736728,1.34925 6.9996305,1.34925 c -0.1740423,0 -0.3482077,0.0477 -0.5016586,0.14284 l -5.271713,3.2633 C 1.0854931,4.84249 0.99999905,4.99633 0.99999905,5.1619 c 0,0.1656 0.085494,0.31949 0.22625985,0.40673 l 5.2716883,3.26333 c 0.153451,0.0952 0.3276163,0.14284 0.5016586,0.14284 0.1740423,0 0.3481092,-0.0477 0.5024714,-0.14284 L 12.773741,5.56863 c 0.140766,-0.0872 0.22626,-0.24113 0.22626,-0.40673 0,-0.16557 -0.08549,-0.31946 -0.22626,-0.40651 z M 6.9996059,9.78508 c -0.3283798,0 -0.6488777,-0.0912 -0.928242,-0.26411 l -3.0750017,-1.90368 0,3.27796 c 0,0.97016 1.7931578,1.7555 4.0032436,1.7555 2.2108742,0 4.0038842,-0.78536 4.0038842,-1.7555 l 0,-3.27796 -3.0748786,1.90368 C 7.6492472,9.69388 7.3279857,9.78508 6.9996059,9.78508 Z"
                            ></path>
                        </svg>
                        My Education
                    </h2>
                </div>

                <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-2 lg:grid-rows-2">
                    {/* First card (Image) */}
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-lg lg:rounded-l-[2rem]">
                            <img
                                className="h-full w-full object-contain"
                                src="/education.png"
                                alt="Education"
                            />
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
                    </div>

                    {/* Second card (B.Tech) */}
                    <div className="relative">
                        <div className="absolute inset-px rounded-lg bg-white"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-lg">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 text-center">B.Tech</p>
                                <p className="mt-2 text-sm text-gray-600 text-center">Parul University (2020-2024)</p>
                                <p className="mt-2 text-sm text-gray-600 text-center">Location - Vadodara, Gujarat</p>
                                <p className="mt-2 text-sm text-gray-600 text-center">CGPA - 8.01</p>
                            </div>
                            <div className="flex flex-1 items-center justify-center px-8 sm:px-10 pb-12 pt-10">
                                <img className="w-full max-w-xs" src="grad.png" alt="Graduation" />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                    </div>

                    {/* Third card (12th) */}
                    <div className="relative">
                        <div className="absolute inset-px rounded-lg bg-white"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-lg">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 text-center">12th</p>
                                <p className="mt-2 text-sm text-gray-600 text-center">J.J College (2018-2020)</p>
                                <p className="mt-2 text-sm text-gray-600 text-center">Location - Ara, Bihar</p>
                                <p className="mt-2 text-sm text-gray-600 text-center">Percentage - 80%</p>
                            </div>
                            <div className="flex flex-1 items-center justify-center px-8 sm:px-10 pb-12 pt-10">
                                <img className="w-full max-w-xs" src="grad.png" alt="Graduation" />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
