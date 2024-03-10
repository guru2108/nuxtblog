<template>
    <div className="p-[5px]">
        <div
            class="transition ease-in-out delay-150 duration-300 flex flex-col items-center justify-center text-center bg-white rounded-md shadow-md p-[10px] bg-gradient-to-r from-[#284b2f] to-[#12372A] transform-gpu hover:scale-105"
        >
            <div class="relative w-[300px]">
                <SanityImage
                    :asset-id="image"
                    auto="format"
                    class="flex w-[300px] h-[200px]"
                />
                <div
                    class="absolute top-0 right-[2px] p-[2px] transparent shadow-md"
                >
                    {{ new Date(time).toLocaleDateString() }}
                </div>
            </div>
            <span class="pl-3 mt-[10px]">
                <h1 class="font-bold text-lg text-white">{{ title }}</h1>
            </span>
            <h1 class="italic text-sm text-white">Written by Guru</h1>
            <NuxtLink :to="`/${slug}`">
                <button
                    class="mt-[10px] py-[3px] px-[12px] items-center rounded-md shadow-lg bg-[#436850] text-white"
                >
                    Read
                </button>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    image: String,
    time: String,
    body: String,
    slug: String,
});
</script>

<style scoped>
.transparent {
    /* From https://css.glass */
    background: rgba(209, 209, 209, 0.42);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(209, 209, 209, 0.3);
}
.italic {
    font-style: italic;
}
</style>
