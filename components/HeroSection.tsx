import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import previewImage from '@/assets/images/chrome-window.png'
import Image from 'next/image'
import BackgroundPattern from '@/components/BackgroundPattern'

const navigation = [
  { name: 'Features', href: '#' },
  { name: 'Development', href: '#' },
]

const imageUrl =
  'https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg'

const Header = () => (
  <div className="mx-auto max-w-7xl px-4 sm:px-6">
    <nav className="relative flex items-center justify-end sm:h-10" aria-label="Global">
      <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-1/2">
        <div className="flex w-full items-center justify-between md:w-auto">
          <a href="#">
            <span className="sr-only">Your Company</span>
            <svg
              className="h-8 w-auto lg:h-10"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_346_6903)">
                <path
                  d="M20.0888 9.46089C20.2917 10.8892 20.4807 12.2527 20.6782 13.6152C21.1402 16.7968 21.5979 19.9795 22.0789 23.1589C22.132 23.5136 21.9207 23.5795 21.7104 23.6974L12.5915 28.7873L9.62549 30.4481C10.3073 30.771 10.9136 31.0513 11.5147 31.3434C17.3108 34.1628 23.1111 36.9759 28.8988 39.8124C30.5065 40.6004 31.3561 41.9458 31.3147 43.7331C31.2743 45.4938 30.3791 46.7724 28.7777 47.5264C28.2299 47.7786 27.6328 47.9055 27.0297 47.8981C19.1745 47.8959 11.3182 47.8938 3.46301 47.9055C3.09239 47.9055 3 47.8174 3 47.4435C3.01062 31.8212 3.01062 16.1989 3 0.576644C3 0.216644 3.07009 0.106201 3.45451 0.106201C12.5841 0.117883 21.7136 0.0977056 30.8432 0.12213C37.1278 0.139122 41.9894 5.38195 41.5519 11.6453C41.3819 14.0751 40.4156 16.182 38.7919 17.9968C38.5232 18.2974 38.3172 18.3409 37.9476 18.1593C32.1908 15.3366 26.4265 12.531 20.6634 9.72213C20.4935 9.6393 20.3204 9.56496 20.0888 9.45983V9.46089Z"
                  fill="black"
                />
                <path
                  d="M24.4065 15.309C26.0069 16.0874 27.5616 16.8425 29.1152 17.5996C31.975 18.9929 34.8444 20.3681 37.6926 21.7848C42.0688 23.9628 44.7492 27.4598 45.448 32.3055C46.4281 39.0977 42.1697 45.4832 35.5442 47.3639C34.9177 47.5412 34.2827 47.6825 33.6338 47.7557C33.5595 47.5752 33.6965 47.4786 33.7581 47.366C35.8703 43.4803 34.4451 38.8046 30.4777 36.8262C26.1757 34.6811 21.8419 32.6018 17.523 30.4938C17.3669 30.4173 17.214 30.3334 17.0547 30.2506C17.1577 30.0552 17.3403 30.0159 17.488 29.9331C20.1099 28.4644 22.7287 26.9904 25.3612 25.5419C25.7212 25.3434 25.8009 25.1352 25.7425 24.7476C25.289 21.6881 24.8568 18.6265 24.4193 15.565C24.4097 15.5002 24.4119 15.4333 24.4065 15.3101V15.309Z"
                  fill="#E57E83"
                />
              </g>
              <defs>
                <clipPath id="clip0_346_6903">
                  <rect
                    width="42.5883"
                    height="47.7982"
                    fill="white"
                    transform="translate(3 0.106201)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
      <div className="hidden md:flex md:space-x-10">
        {navigation.map(item => (
          <a
            key={item.name}
            href={item.href}
            className="font-medium text-gray-500 hover:text-gray-900"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  </div>
)
const HeroSection = () => (
  <div className="background-animate bg-gradient-to-t from-amber-500">
    <div className="relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-y-0 h-full  w-full" aria-hidden="true">
        <div className="relative h-full">
          <BackgroundPattern classNames="absolute text-orange-600 top-[318px] w-[864px]" />

          <BackgroundPattern classNames="absolute text-orange-600 top-[535px] right-[-221px] w-[864px]" />
        </div>
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24">
        <Header />
        <div className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-600 opacity-75 ">
              It&apos;s not hording if you remember it
            </h2>
            <h1 className="mt-1 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Collect knowledge</span>
              <span className="block text-orange-600">remember you backlog</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base text-gray-700 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
              Open a new tab and get a clean, organized dashboard that not only manages your
              bookmarks but intelligenly surfaces aging ones. Designed for students, learners and
              horders alike
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        {/*<div className="absolute inset-0 flex flex-col" aria-hidden="true">*/}
        {/*  <div className="flex-1" />*/}
        {/*  <div className="w-full flex-1 bg-gray-800" />*/}
        {/*</div>*/}
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Image
            className="relative rounded-lg shadow-lg"
            src={imageUrl}
            width={1232}
            height={892}
            layout="fixed"
            alt="App screenshot"
          />
        </div>
      </div>
    </div>
  </div>
)
export default HeroSection
