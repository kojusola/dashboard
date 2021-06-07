<template>
    <div class="block md:flex lg:flex">
        <div class="md:w-4/6 min-h-screen border border-transparent md:border-r md:border-gray-300 lg:flex lg:w-8/12 lg:w-full">
            <div class="py-5 border-b -px-6 border-gray-300 sm:pt-5 lg:block lg:w-4/12 lg:border-r lg:border-b-0">
                    <div class="px-6 sm:flex sm:items-center sm:justify-between lg:block">
                    <div class="flex items-center">
                        <img  class="h-10 w-10 object-cover rounded-full" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80" alt="">
                        <div class="pl-3">
                            <p class="text-sm font-bold text-gray-800">Debbie Lewis</p>
                            <div class="flex items-center text-gray-500 ">
                                <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                <p class="pl-2 tracking-tight">debbielewis</p>
                            </div>
                        </div>
                    </div>
                    <div class=" flex flex-col items-center py-5 text-sm font-semibold sm:flex-row sm:items-center lg:flex-col">
                        <button class="leading-3 py-3 bg-lilac-light focus:outline-none w-full rounded-lg border border-transparent text-white hover:bg-white hover:text-black hover:border hover:border-gray-300 sm:w-32 lg:w-full">New Project</button>
                        <button class="leading-3 mt-2 py-3 border border-gray-300 focus:outline-none w-full rounded-lg hover:bg-lilac-light hover:text-white hover:border-transparent sm:w-32 sm:ml-4 lg:ml-0 sm:mt-0 lg:w-full lg:mt-2">Invite Team</button>
                    </div>
                </div>
                <div class="px-6 text-sm text-gray-500 sm:flex sm:items-center sm:pt-3 lg:block">
                    <div class="flex items-center">
                        <svg 
                            class="w-5 h-5 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <p class="pl-2 leading-3">Pro Member</p>
                    </div>
                    <div class="flex items-center pt-4 sm:pt-0 sm:pl-3 lg:pl-0 lg:pt-4">
                        <svg 
                            class="w-5 h-5 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                        </svg>
                        <p class="pl-2 leading-3">8 Projects</p>
                    </div>
                </div>
            </div>
                <div class="w-full lg:w-8/12">
                     <div class="border-b border-gray-300 text-sm py-5">
                        <div class="px-6 flex justify-between items-center">
                            <p class="font-bold text-lg text-gray-800">Projects</p>
                            <button class="rounded-lg flex items-center border border-gray-300 text-gray-500 py-2 px-4">
                                <svg 
                                    class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"></path>
                                </svg>
                                <span class="text-gray-600 px-3 font-bold leading-3">Sort</span>
                                <svg 
                                    class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                        <div class="border-b border-gray-300 lg:w-4/6 lg:w-full">
                        <div class="px-6 py-5 flex justify-between items-center">
                            <div class="">
                                <div class="pl-1 flex items-center">
                                    <div class="h-3 w-3 bg-green-400 border-2 border-green-100 rounded-full"></div>
                                    <span class="px-4 text-sm font-bold text-gray-800">Workation</span>
                                </div>
                                <div class="pt-3 flex items-center text-gray-500">
                                    <svg class="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                    <p class="pl-3 leading-3 tracking-tight">debbielewis/workation</p>
                                </div>
                            </div>
                            <div class="text-gray-500">
                                <svg class="w-6 h-6 fill-current sm:hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                </svg>
                                <div class="hidden sm:block">
                                    <div class="flex items-center justify-end">
                                        <span class="px-4 leading-3">Visit site</span>
                                        <svg 
                                            class="w-6 h-6 fill-current text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex items-center pt-2 md:justify-end">
                                        <span class="p-2 leading-3">Laravel</span>
                                        <div class="h-0.5 w-0.5 rounded-full bg-gray-500"></div>
                                        <span class="p-2 leading-3">Last Deploy 3h ago</span>
                                        <div class="h-0.5 w-0.5 rounded-full bg-gray-500"></div>
                                        <span class="p-2 md:pr-0 leading-3">United states</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div class="border-b border-gray-300 lg:w-4/6 lg:w-full">
                        <div class="px-6 py-5 flex justify-between items-center">
                            <div class="">
                                <div class="pl-1 flex items-center">
                                    <div class="h-3 w-3 bg-green-400 border-2 border-green-100 rounded-full"></div>
                                    <span class="px-4 text-sm font-bold text-gray-800">Workation</span>
                                </div>
                                <div class="pt-3 flex items-center text-gray-500">
                                    <svg class="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                    <p class="pl-3 leading-3 tracking-tight">debbielewis/workation</p>
                                </div>
                            </div>
                            <div class="text-gray-500">
                                <svg class="w-6 h-6 fill-current sm:hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                </svg>
                                <div class="hidden sm:block">
                                    <div class="flex items-center justify-end">
                                        <span class="px-4 leading-3">Visit site</span>
                                        <svg 
                                            class="w-6 h-6 fill-current text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex items-center pt-2 md:justify-end">
                                        <span class="p-2 leading-3">Laravel</span>
                                        <div class="h-0.5 w-0.5 rounded-full bg-gray-500"></div>
                                        <span class="p-2 leading-3">Last Deploy 3h ago</span>
                                        <div class="h-0.5 w-0.5 rounded-full bg-gray-500"></div>
                                        <span class="p-2 md:pr-0 leading-3">United states</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div class="border-b border-gray-300 lg:w-4/6 lg:w-full">
                        <div class="px-6 py-5 flex justify-between items-center">
                            <div class="">
                                <div class="pl-1 flex items-center">
                                    <div class="h-3 w-3 bg-green-400 border-2 border-green-100 rounded-full"></div>
                                    <span class="px-4 text-sm font-bold text-gray-800">Workation</span>
                                </div>
                                <div class="pt-3 flex items-center text-gray-500">
                                    <svg class="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                    <p class="pl-3 leading-3 tracking-tight">debbielewis/workation</p>
                                </div>
                            </div>
                            <div class="text-gray-500">
                                <svg class="w-6 h-6 fill-current sm:hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                </svg>
                                <div class="hidden sm:block">
                                    <div class="flex items-center justify-end">
                                        <span class="px-4 leading-3">Visit site</span>
                                        <svg 
                                            class="w-6 h-6 fill-current text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex items-center pt-2 md:justify-end">
                                        <span class="p-2 leading-3">Laravel</span>
                                        <div class="h-0.5 w-0.5 rounded-full bg-gray-500"></div>
                                        <span class="p-2 leading-3">Last Deploy 3h ago</span>
                                        <div class="h-0.5 w-0.5 rounded-full bg-gray-500"></div>
                                        <span class="p-2 md:pr-0 leading-3">United states</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="border-b border-gray-300 lg:w-4/6 lg:w-full">
                        <div class="px-6 py-5 flex justify-between items-center">
                            <div class="">
                                <div class="pl-1 flex items-center">
                                    <div class="h-3 w-3 bg-green-400 border-2 border-green-100 rounded-full"></div>
                                    <span class="px-4 text-sm font-bold text-gray-800">Workation</span>
                                </div>
                                <div class="pt-3 flex items-center text-gray-500">
                                    <svg class="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                    <p class="pl-3 leading-3 tracking-tight">debbielewis/workation</p>
                                </div>
                            </div>
                            <div class="text-gray-500">
                                <svg class="w-6 h-6 fill-current sm:hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                </svg>
                                <div class="hidden sm:block">
                                    <div class="flex items-center justify-end">
                                        <span class="px-4 leading-3">Visit site</span>
                                        <svg 
                                            class="w-6 h-6 fill-current text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex items-center pt-2 md:justify-end">
                                        <span class="p-2 leading-3">Laravel</span>
                                        <div class="h-0.5 w-0.5 rounded-full bg-gray-500"></div>
                                        <span class="p-2 leading-3">Last Deploy 3h ago</span>
                                        <div class="h-0.5 w-0.5 rounded-full bg-gray-500"></div>
                                        <span class="p-2 md:pr-0 leading-3">United states</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <div class="hidden py-5 px-6 md:block md:w-2/6 bg-gray-100 lg:w-4/12">
                <p class="text-sm font-bold text-gray-800">Activity</p>
                <div class="flex justify-between py-5 border-b border-gray-300 lg:w-full">
                    <img  class="h-7 w-7 object-cover rounded-full" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80" alt="">
                    <div class=" text-sm pl-3 lg:w-9/12">
                        <p class="font-bold text-gray-800">You</p>
                        <p class="leading-3 tracking-tight text-xs text-gray-500">Deployed Workation (2d89f0c8 in master) to production</p>
                    </div>
                    <span class="text-gray-500 lg:w-2/12">1h</span>
                </div>
                <div class="flex justify-between py-5 border-b border-gray-300 lg:w-full">
                    <img  class="h-7 w-7 object-cover rounded-full" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80" alt="">
                    <div class=" text-sm pl-3 lg:w-9/12">
                        <p class="font-bold text-gray-800">You</p>
                        <p class="leading-3 tracking-tight text-xs text-gray-500">Deployed Workation (2d89f0c8 in master) to production</p>
                    </div>
                    <span class="text-gray-500 lg:w-2/12">1h</span>
                </div>
                <div class="flex justify-between py-5 border-b border-gray-300 lg:w-full">
                    <img  class="h-7 w-7 object-cover rounded-full" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80" alt="">
                    <div class=" text-sm pl-3 lg:w-9/12">
                        <p class="font-bold text-gray-800">You</p>
                        <p class="leading-3 tracking-tight text-xs text-gray-500">Deployed Workation (2d89f0c8 in master) to production</p>
                    </div>
                    <span class="text-gray-500 lg:w-2/12">1h</span>
                </div>
                <div class="flex justify-between py-5 border-b border-gray-300 lg:w-full">
                    <img  class="h-7 w-7 object-cover rounded-full" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80" alt="">
                    <div class=" text-sm pl-3 lg:w-9/12">
                        <p class="font-bold text-gray-800">You</p>
                        <p class="leading-3 tracking-tight text-xs text-gray-500">Deployed Workation (2d89f0c8 in master) to production</p>
                    </div>
                    <span class="text-gray-500 lg:w-2/12">1h</span>
                </div>
        </div>
    </div>
</template>