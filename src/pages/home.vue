<template>
  <div>
    <h2 class="text-2xl font-bold py-2">Home</h2>

    <nav aria-label="breadcrumb" class="w-full p-2 rounded-md bg-gray-100 text-gray-900">
      <ol class="flex flex-wrap items-center text-sm">
        <li class="cursor-pointer flex items-center transition-colors duration-300 hover:text-pink-500">
          <a class="opacity-60" href="#"><span>Docs</span></a>
          <span class="pointer-events-none mx-2 select-none text-gray-500 antialiased">
            /
          </span>
        </li>
        <li class="cursor-pointer flex items-center transition-colors duration-300 hover:text-pink-500">
          <a class="opacity-60" href="#"><span>Components</span></a>
          <span class="pointer-events-none mx-2 select-none text-gray-500 antialiased">
            /
          </span>
        </li>
        <li class="cursor-pointer flex items-center transition-colors duration-300 hover:text-pink-500">
          <a class="transition-colors hover:text-pink-500" href="#">
            Breadcrumbs
          </a>
        </li>
      </ol>
    </nav>

    <!--https://tailwindcomponents.com/component/customers-table-->
    <div class="flex justify-between items-center py-4">
      <h3 class="text-xl font-bold">Table title</h3>
      <div class="flex flex-wrap space-x-1">
        <button type="button" class="flex items-center rounded-md bg-blue-700 px-2 pt-1 pb-2 text-sm font-semibold leading-none text-white
        hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-colors">
          <svg class="w-4 h-4 mr-1.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
          Button
        </button>
        <button type="button" class="flex items-center rounded-md bg-blue-700 px-2 pt-1 pb-2 text-sm font-semibold leading-none text-white
        hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-colors">
          <svg class="w-4 h-4 mr-1.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
          Button
        </button>
        <button type="button" class="flex items-center rounded-md bg-blue-700 px-2 pt-1 pb-2 text-sm font-semibold leading-none text-white
        hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-colors">
          <svg class="w-4 h-4 mr-1.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
          Button
        </button>
      </div>
    </div>
    <!-- antialiased -->
    <div class="overflow-x-auto relative">
      <table class="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            <th class="cursor-pointer p-2 border-y border-gray-100 bg-gray-50 text-gray-600 text-sm font-bold leading-none transition-colors hover:text-gray-800">
              <p class="flex items-center justify-between gap-2 opacity-70">Project
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                </svg>
              </p>
            </th>
            <th class="cursor-pointer p-2 border-y border-gray-100 bg-gray-50 text-gray-600 text-sm font-bold leading-none transition-colors hover:text-gray-800">
              <p class="flex items-center justify-between gap-2 opacity-70">Teamlead
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                </svg>
              </p>
            </th>
            <th class="cursor-pointer p-2 border-y border-gray-100 bg-gray-50 text-gray-600 text-sm font-bold leading-none transition-colors hover:text-gray-800">
              <p class="flex items-center justify-between gap-2 opacity-70">Function
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                </svg>
              </p>
            </th>
            <th class="cursor-pointer p-2 border-y border-gray-100 bg-gray-50 text-gray-600 text-sm font-bold leading-none transition-colors hover:text-gray-800">
              <p class="flex items-center justify-between gap-2 opacity-70">Status
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                </svg>
              </p>
            </th>
            <th class="cursor-pointer p-2 border-y border-gray-100 bg-gray-50 text-gray-600 text-sm font-bold leading-none transition-colors hover:text-gray-800">
              <p class="flex items-center justify-between gap-2 opacity-70">Deadline
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                </svg>
              </p>
            </th>
            <th class="cursor-pointer p-2 border-y border-gray-100 bg-gray-50 text-gray-600 text-sm font-bold leading-none transition-colors hover:text-gray-800">
              <p class="flex items-center justify-between gap-2 opacity-70">Actions</p>
            </th>
          </tr>
        </thead>
        <tbody class="bg-white">
          <tr class="hover:bg-gray-50">
            <td class="p-2 border-b border-gray-100">
              <div class="flex items-center gap-3">
                <div class="flex flex-col text-sm leading-normal text-gray-900 font-normal">
                  <p class="">React Project</p>
                  <p class="opacity-70">Start date: 10 Dec 2023</p>
                </div>
              </div>
            </td>
            <td class="p-2 border-b border-gray-100">
              <div class="flex items-center gap-3">
                <img src="https://picsum.photos/id/996/50/50" alt="John Michael" class="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md">
                <div class="flex flex-col text-sm leading-normal text-gray-900 font-normal">
                  <p class="">John Michael</p>
                  <p class="text-sm leading-normal text-gray-900 font-normal opacity-70">john@example.com</p>
                </div>
              </div>
            </td>
            <td class="p-2 border-b border-gray-100">
              <div class="flex flex-col text-sm leading-normal text-gray-900 font-normal">
                <p class="">Manager</p>
                <p class="text-sm leading-normal text-gray-900 font-normal opacity-70">Organization</p>
              </div>
            </td>
            <td class="p-2 border-b border-gray-100">
              <div class="w-max">
                <div class="relative grid items-center font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-600 py-1 px-2 text-xs rounded-md">
                  <span class="">Completed</span>
                </div>
              </div>
            </td>
            <td class="p-2 border-b border-gray-100">
              <p class="text-sm leading-normal text-gray-900 font-normal">23/04/18</p>
            </td>
            <td class="p-2 border-b border-gray-100">
              <button class="relative align-middle select-none font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-gray-500/10 active:bg-gray-500/30" type="button">
                <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-4 w-4">
                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                  </svg>
                </span>
              </button>
            </td>
          </tr>
          <tr class="hover:bg-gray-50">
            <td class="p-2 border-b border-gray-100">
              <div class="flex items-center gap-3">
                <div class="flex flex-col">
                  <p class="text-sm leading-normal text-gray-900 font-normal">Angular Project</p>
                  <p class="text-sm leading-normal text-gray-900 font-normal opacity-70">Start date: 10 Dec 2023</p>
                </div>
              </div>
            </td>
            <td class="p-2 border-b border-gray-100">
              <div class="flex items-center gap-3">
                <img src="https://picsum.photos/id/365/50/50" alt="Alexa Liras" class="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md">
                <div class="flex flex-col">
                  <p class="text-sm leading-normal text-gray-900 font-normal">Alexa Liras</p>
                  <p class="text-sm leading-normal text-gray-900 font-normal opacity-70">alexa@example.com</p>
                </div>
              </div>
            </td>
            <td class="p-2 border-b border-gray-100">
              <div class="flex flex-col">
                <p class="text-sm leading-normal text-gray-900 font-normal">Programator</p>
                <p class="text-sm leading-normal text-gray-900 font-normal opacity-70">Developer</p>
              </div>
            </td>
            <td class="p-2 border-b border-gray-100">
              <div class="w-max">
                <div class="relative grid items-center font-bold uppercase whitespace-nowrap select-none bg-purple-500/20 text-purple-600 py-1 px-2 text-xs rounded-md">
                  <span class="">active</span>
                </div>
              </div>
            </td>
            <td class="p-2 border-b border-gray-100">
              <p class="text-sm leading-normal text-gray-900 font-normal">23/04/18</p>
            </td>
            <td class="p-2 border-b border-gray-100">
              <button class="relative align-middle select-none font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-gray-500/10 active:bg-gray-500/30" type="button">
                <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-4 w-4">
                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                  </svg>
                </span>
              </button>
            </td>
          </tr>
          <tr class="hover:bg-gray-50">
            <td class="p-2 border-b border-gray-100">
              <div class="flex items-center gap-3">
                <div class="flex flex-col">
                  <p class="text-sm leading-normal text-gray-900 font-normal">Tailwind Project</p>
                  <p class="text-sm leading-normal text-gray-900 font-normal opacity-70">Start date: 10 Dec 2023</p>
                </div>
              </div>
            </td>
            <td class="p-2 border-b border-gray-100">
              <div class="flex items-center gap-3">
                <img src="https://picsum.photos/id/129/50/50" alt="Laurent Perrier" class="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md">
                <div class="flex flex-col">
                  <p class="text-sm leading-normal text-gray-900 font-normal">Laurent Perrier</p>
                  <p class="text-sm leading-normal text-gray-900 font-normal opacity-70">laurent@example.com</p>
                </div>
              </div>
            </td>
            <td class="p-2 border-b border-gray-100">
              <div class="flex flex-col">
                <p class="text-sm leading-normal text-gray-900 font-normal">Executive</p>
                <p class="text-sm leading-normal text-gray-900 font-normal opacity-70">Projects</p>
              </div>
            </td>
            <td class="p-2 border-b border-gray-100">
              <div class="w-max">
                <div class="relative grid items-center font-bold uppercase whitespace-nowrap select-none bg-yellow-500/20 text-yellow-600 py-1 px-2 text-xs rounded-md">
                  <span class="">Scheduled
                  </span>
                </div>
              </div>
            </td>
            <td class="p-2 border-b border-gray-100">
              <p class="text-sm leading-normal text-gray-900 font-normal">19/09/17</p>
            </td>
            <td class="p-2 border-b border-gray-100">
              <button class="relative align-middle select-none font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-gray-500/10 active:bg-gray-500/30" type="button">
                <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-4 w-4">
                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                  </svg>
                </span>
              </button>
            </td>
          </tr>
          <tr class="hover:bg-gray-50">
            <td class="p-2 border-b border-gray-100">
              <div class="flex items-center gap-3">
                <div class="flex flex-col">
                  <p class="text-sm leading-normal text-gray-900 font-normal">Laravel Project</p>
                  <p class="text-sm leading-normal text-gray-900 font-normal opacity-70">Start date: 10 Dec 2023</p>
                </div>
              </div>
            </td>
            <td class="p-2 border-b border-gray-100">
              <div class="flex items-center gap-3">
                <img src="https://picsum.photos/id/223/50/50" alt="Michael Levi" class="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md">
                <div class="flex flex-col">
                  <p class="text-sm leading-normal text-gray-900 font-normal">Michael Levi</p>
                  <p class="text-sm leading-normal text-gray-900 font-normal opacity-70">michael@example.com</p>
                </div>
              </div>
            </td>
            <td class="p-2 border-b border-gray-100">
              <div class="flex flex-col">
                <p class="text-sm leading-normal text-gray-900 font-normal">Programator</p>
                <p class="text-sm leading-normal text-gray-900 font-normal opacity-70">Developer</p>
              </div>
            </td>
            <td class="p-2 border-b border-gray-100">
              <div class="w-max">
                <div class="relative grid items-center font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-600 py-1 px-2 text-xs rounded-md">
                  <span class="">Completed</span>
                </div>
              </div>
            </td>
            <td class="p-2 border-b border-gray-100">
              <p class="text-sm leading-normal text-gray-900 font-normal">24/12/08</p>
            </td>
            <td class="p-2 border-b border-gray-100">
              <button class="relative align-middle select-none font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-gray-500/10 active:bg-gray-500/30" type="button">
                <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-4 w-4">
                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                  </svg>
                </span>
              </button>
            </td>
          </tr>
          <tr class="hover:bg-gray-50">
            <td class="p-2 border-b border-gray-100">
              <div class="flex items-center gap-3">
                <div class="flex flex-col">
                  <p class="text-sm leading-normal text-gray-900 font-normal">Astro Project</p>
                  <p class="text-sm leading-normal text-gray-900 font-normal opacity-70">Start date: 10 Dec 2023</p>
                </div>
              </div>
            </td>
            <td class="p-2 border-b border-gray-100">
              <div class="flex items-center gap-3">
                <img src="https://picsum.photos/id/192/50/50" alt="Richard Gran" class="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md">
                <div class="flex flex-col">
                  <p class="text-sm leading-normal text-gray-900 font-normal">Richard Gran</p>
                  <p class="text-sm leading-normal text-gray-900 font-normal opacity-70">richard@example.com</p>
                </div>
              </div>
            </td>
            <td class="p-2 border-b border-gray-100">
              <div class="flex flex-col">
                <p class="text-sm leading-normal text-gray-900 font-normal">Manager</p>
                <p class="text-sm leading-normal text-gray-900 font-normal opacity-70">Executive</p>
              </div>
            </td>
            <td class="p-2 border-b border-gray-100">
              <div class="w-max">
                <div class="relative grid items-center font-bold uppercase whitespace-nowrap select-none bg-red-500/20 text-red-700 py-1 px-2 text-xs rounded-md">
                  <span class="">Pending</span>
                </div>
              </div>
            </td>
            <td class="p-2 border-b border-gray-100">
              <p class="text-sm leading-normal text-gray-900 font-normal">04/10/21</p>
            </td>
            <td class="p-2 border-b border-gray-100">
              <button class="relative align-middle select-none font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-gray-500/10 active:bg-gray-500/30" type="button">
                <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-4 w-4">
                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                  </svg>
                </span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>



    <div class="overflow-x-auto relative hidden">
      <table class="items-center bg-transparent w-full border-collapse ">
        <thead>
          <tr>
            <th class="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              Page name
            </th>
            <th class="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              Visitors
            </th>
            <th class="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              Unique users
            </th>
            <th class="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              Bounce rate
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2 text-left text-gray-700 ">
              /argon/
            </th>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2 ">
              4,569
            </td>
            <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
              340
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
              <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>
              46,53%
            </td>
          </tr>
          <tr>
            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2 text-left text-gray-700">
              /argon/index.html
            </th>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
              3,985
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
              319
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
              <i class="fas fa-arrow-down text-orange-500 mr-4"></i>
              46,53%
            </td>
          </tr>
          <tr>
            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2 text-left text-gray-700">
              /argon/charts.html
            </th>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
              3,513
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
              294
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
              <i class="fas fa-arrow-down text-orange-500 mr-4"></i>
              36,49%
            </td>
          </tr>
          <tr>
            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2 text-left text-gray-700">
              /argon/tables.html
            </th>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
              2,050
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
              147
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
              <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>
              50,87%
            </td>
          </tr>
          <tr>
            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2 text-left text-gray-700">
              /argon/profile.html
            </th>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
              1,795
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
              190
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
              <i class="fas fa-arrow-down text-red-500 mr-4"></i>
              46,53%
            </td>
          </tr>
        </tbody>

      </table>

    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style></style>