import '../App.css';
import { Link } from 'react-router-dom';
import logo from '../assest/LOGOISMAIL.png';
import { Fragment, useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

// const products = [
//   { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
//   { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
//   { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
//   { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
//   { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
// ]
// const callsToAction = [
//   { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
//   { name: 'Contact sales', href: '#', icon: PhoneIcon },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

  return (
    <header className="fixed w-full bg-slate-950 z-10 border-b border-slate-800">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => {setMobileMenuOpen(true)}}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {/* <Popover className="relative">
            {/* <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
              Product
            </PopoverButton>

            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                {/* <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-900"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-900 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-white">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div> 
                {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-900">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-white hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </PopoverPanel>
            </Transition>
          </Popover> */}
          <a className="text-sm font-semibold leading-6 text-slate-600">
          {`كورسات (قريبا)`}
          </a>
          <a href="#chanels" className="text-sm font-semibold leading-6 text-white">
          قنوات و مراجع 
          </a>
          <Link to={"/FinalQuestions"} className="text-sm font-semibold leading-6 text-white" onClick={() => {scrollToTop()}}>
          أسئلة امتحانات
          </Link>
          <Link to={`/Lectures`} className="text-sm font-semibold leading-6 text-white"  onClick={() => {scrollToTop()}}>
          محاضرات
          </Link>
          <Link to={`/`} className="text-sm font-semibold leading-6 text-white" onClick={() => {scrollToTop()}}>
          الصفحة الرئيسية
          </Link>
        </PopoverGroup>
        <div className="flex lg:flex-1 justify-end">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Ismail Altabbal</span>
            <img className="h-8 w-auto" src={logo} alt="" />
          </a>
        </div>
      </nav>

      {/* ########################################################### */}

      <Dialog className="lg:hidden z-60" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-slate-950 px-6 py-6 sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Ismail Altabbal</span>
              <img
                className="h-8 w-auto"
                src={logo} alt=""/>
            </a>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {/*<Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-gray-900">
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                        Product
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-gray-900"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>*/}
                <Link to={`/`} className="-mx-3 block rounded-lg px-3 py-2 text-base text-right font-semibold leading-7 text-white hover:bg-gray-900"
                onClick={() => {setMobileMenuOpen(false);scrollToTop()}}>
                    الصفحة الرئيسية
                </Link>
                <Link
                  to={"/Lectures"}
                  onClick={() => {setMobileMenuOpen(false);scrollToTop()}}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base text-right font-semibold leading-7 text-white hover:bg-gray-900"
                >
                  محاضرات
                </Link>
                <Link
                  to={"/FinalQuestions"}
                  onClick={() => {setMobileMenuOpen(false);scrollToTop()}}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base text-right font-semibold leading-7 text-white hover:bg-gray-900"
                >
                أسئلة امتحانات
                </Link>
                <a
                  href="#chanels" onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base text-right font-semibold leading-7 text-white hover:bg-gray-900"
                >
                قنوات و مراجع</a>
                <a
                  className="-mx-3 block rounded-lg px-3 py-2 text-base text-right font-semibold leading-7 text-slate-600"
                >
                  {`كورسات (قريبا)`}
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
