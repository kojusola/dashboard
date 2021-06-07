<template>
    <div class="bg-lilac-dark">
        <div class="px-5 py-1 flex justify-between w-full items-center">
            <div class="flex lg:w-1/4">
                 <svg
                    class="h-7 w-7 my-2"
                    viewBox="0 0 520 520"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M187.432 271c-29.538 0-53.568 24.03-53.568 53.568v133.863c0 29.538 24.03 53.568 53.568 53.568C216.97 512 241 487.97 241 458.432V324.568C241 295.03 216.97 271 187.432 271z"
                        fill="#cacaf0"
                    />
                    <path
                        d="M103.863 271h-51.86c-28.596 0-51.86 23.265-51.86 51.86 0 28.596 23.265 51.86 51.86 51.86s51.86-23.265 51.86-51.86z"
                        fill="#cacaf0"
                    />
                    <path
                        d="M0 187.432C0 216.97 24.03 241 53.568 241h133.863C216.97 241 241 216.97 241 187.432s-24.03-53.568-53.568-53.568H53.568C24.03 133.863 0 157.894 0 187.432z"
                        fill="#cacaf0"
                    />
                    <path
                        d="M189.14 103.863H241v-51.86c0-28.596-23.265-51.86-51.86-51.86-28.596 0-51.86 23.265-51.86 51.86s23.264 51.86 51.86 51.86z"
                        fill="#cacaf0"
                    />
                    <path
                        d="M324.568 241c29.538 0 53.568-24.03 53.568-53.568V53.568C378.137 24.03 354.106 0 324.568 0S271 24.03 271 53.568v133.863C271 216.97 295.03 241 324.568 241z"
                        fill="#cacaf0"
                    />
                    <path
                        d="M408.137 241h51.86c28.596 0 51.86-23.265 51.86-51.86 0-28.596-23.265-51.86-51.86-51.86s-51.86 23.265-51.86 51.86z"
                        fill="#cacaf0"
                    />
                    <g fill="#cacaf0">
                        <path
                        d="M512 324.568C512 295.03 487.97 271 458.432 271H324.568C295.03 271 271 295.03 271 324.568s24.03 53.568 53.568 53.568h133.863c29.539.001 53.569-24.03 53.569-53.568z"
                        />
                        <path
                        d="M322.86 408.137H271v51.86c0 28.596 23.265 51.86 51.86 51.86 28.596 0 51.86-23.265 51.86-51.86s-23.264-51.86-51.86-51.86z"
                        />
                    </g>
                </svg>
            </div>
                <div class="pl-2 relative w-3/4 md:w-7/12 lg:w-2/4 lg:mr-6">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-4">
                        <svg class="w-5 h-5 absolute stroke-current text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                     <input type="text" class="w-full  bg-lilac-default pl-7 text-sm font-medium p-2 rounded-sm focus:outline-none focus:bg-white" placeholder="Search Projects">
                </div>
                <div class="flex">
                     <button @click="toggle" class="flex focus:outline-none md:hidden hover:text-gray-500">
                        <svg class="w-7 h-7 stroke-current text-gray-300" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path>
                        </svg>
                    </button>
                </div>
                <div class="hidden md:flex justify-end items-center text-gray-300 font-medium text-sm lg:w-1/4 ml-3">
                    <p class=" px-3">Documentation</p>
                    <p class="px-3 ">Support</p>
                    <button @click="toggleDropdown" type="button" :class="[dropdownOpen ? 'sm:border-gray-700' : 'sm:border-gray-400']" class="ml-3 rounded-full h-8 w-8 overflow-hidden items-center focus:outline-none border-2 border-gray-400 focus:border-gray-700">
                         <img  class="h-full w-full object-cover rounded-full" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80" alt="">
                    </button>
                    <div :class="dropdownOpen ? 'sm:block': 'sm:hidden'" class="xl:z-50 mt-4">
                     <button @click="dropdownOpen = false" class=" hidden sm:block sm:fixed sm:opacity-0 sm:inset-0 sm:h-full sm:w-full sm:cursor-default"></button>
                    <div 
                        class="mt-7 mr-4 sm:rounded-lg sm:bg-white sm:absolute sm:right-0 sm:w-48 sm:mt-3 sm:py-2 sm:shadow-xl xl:z-50">
                        <a href="#" class=" block text-gray-400 hover:text-white sm:text-gray-800 sm:px-4 sm:py-2 sm:hover:bg-lilac-dark">View Profile</a>
                        <a href="#" class="mt-3 block text-gray-400 hover:text-white sm:text-gray-800 sm:mt-0 sm:px-4 sm:py-2 sm:hover:bg-lilac-dark">Settings</a>
                        <a href="#" class="mt-3 block text-gray-400 hover:text-white sm:text-gray-800 sm:mt-0 sm:px-4 sm:py-2 sm:hover:bg-lilac-dark">Log out</a>
                    </div>
                </div>
                </div>
            </div>
        <div :class="{'hidden':!isOpen, 'block': isOpen}" class="text-gray-300 font-medium text-sm py-2 px-5 lg:hidden">
            <div class="border-b pb-2 border-lilac-black -mx-5">
                <div class="bg-lilac-black">
                    <p class="py-2 px-5">Dashboard</p>
                </div>
                <div class="hover:bg-lilac-black">
                    <p class="py-2 px-5">Support</p>
                </div>
            </div>
            <div class="py-2 -mx-5">
                <div class="hover:bg-lilac-black">
                    <p class="py-2 px-5">Your Profile</p>
                </div>
                <div class="hover:bg-lilac-black">
                    <p class="py-2 px-5">Settings</p>
                </div>
                <div class="hover:bg-lilac-black">
                    <p class="py-2 px-5">Sign out</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data (){
        return{
            isOpen:false,
            dropdownOpen:false
        }
    },
    methods: {
        toggle(){
            this.isOpen = !this.isOpen
        },
        toggleDropdown(){
            this.dropdownOpen = !this.dropdownOpen
        }
    }
}
</script>