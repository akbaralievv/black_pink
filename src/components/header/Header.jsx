import { useState } from 'react';
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import logo from '../../../public/logo.png';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-black">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img className="w-12" src={logo} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="#home" className="text-sm text-white font-semibold leading-6 text-gray-900">
            Главная
          </a>
          <a href="#group" className="text-sm text-white font-semibold leading-6 text-gray-900">
            Группа
          </a>
          <a href="#songs" className="text-sm text-white font-semibold leading-6 text-gray-900">
            Песни
          </a>
          <a href="#gastrols" className="text-sm text-white font-semibold leading-6 text-gray-900">
            Гастроли
          </a>
          <a href="#contacts" className="text-sm text-white font-semibold leading-6 text-gray-900">
            Контакты
          </a>
        </PopoverGroup>
      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <img className="w-12" src={logo} alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#home"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 text-white block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-pink-500">
                  Главная
                </a>
                <a
                  href="#group"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 text-white block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-pink-500">
                  Группа
                </a>
                <a
                  href="#songs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 text-white block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-pink-500">
                  Песни
                </a>
                <a
                  href="#gastrols"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 text-white block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-pink-500">
                  Гастроли
                </a>
                <a
                  href="#contacts"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 text-white block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-pink-500">
                  Контакты
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export default Header;
