
export default function HowItWorks() {
    return (
        <div className="container px-4 md:px-6">
          <div className="space-y-6 text-left">
            <div className="flex items-center">
                <h2 className="text-3xl font-light tracking-tighter sm:text-4xl md:text-5xl">We just love Love</h2>
                <div class="w-[150px] h-[3px] bg-[#ffabab] ml-[20px]"></div>
            </div>
            <p className="mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Discover a refined way to date, prioritizing calm and simplicity over the usual noisy and elaborate setups. Our events are designed to be comfortable and inviting, where finding a special connection is a serene experience..
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            <div>
                <div className="p-4 pl-0 pb-10">
                    <p className="text-gray-400 dark:text-gray-400 md:text-left sm:text-left">01</p>
                    <p className="text-gray-500 dark:text-gray-400 md:text-left sm:text-left text-3xl text-light">Signup</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-950">
                    <div className="relative">
                        {/* <div className="absolute top-4 left-4 bg-gray-900 text-white px-3 py-1 rounded-md text-sm font-medium dark:bg-gray-50 dark:text-gray-900">
                        01
                        </div> */}
                        <img
                        src="/marketing/signup.jpg"
                        width={400}
                        height={300}
                        alt="Product 1"
                        className="w-full h-56 object-cover object-center"
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className="p-4 pl-0 pb-10">
                    <p className="text-gray-400 dark:text-gray-400 md:text-left sm:text-left">02</p>
                    <p className="text-gray-500 dark:text-gray-400 md:text-left sm:text-left text-3xl text-light">Participate</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-950">
                    <div className="relative">
                        {/* <div className="absolute top-4 left-4 bg-gray-900 text-white px-3 py-1 rounded-md text-sm font-medium dark:bg-gray-50 dark:text-gray-900">
                        02
                        </div> */}
                        <img
                        src="/marketing/participate.jpg"
                        width={400}
                        height={300}
                        alt="Product 2"
                        className="w-full h-56 object-cover object-center"
                        />
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className="p-4 pl-0 pb-10">
                        <p className="text-gray-400 dark:text-gray-400 md:text-left sm:text-left">03</p>
                        <p className="text-gray-500 dark:text-gray-400 md:text-left sm:text-left text-3xl text-light">Match</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-950">
                        <div className="relative">
                            {/* <div className="absolute top-4 left-4 bg-gray-900 text-white px-3 py-1 rounded-md text-sm font-medium dark:bg-gray-50 dark:text-gray-900">
                            03
                            </div> */}
                            <img
                            src="/marketing/match.jpg"
                            width={400}
                            height={300}
                            alt="Product 3"
                            className="w-full h-56 object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
  }