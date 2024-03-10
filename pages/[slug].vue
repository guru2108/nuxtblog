<template>
    <div class="main">
        <div class="layout">
            <div class="text-[22px] md:text-[45px]">{{ data.title }}</div>
            <div
                class="flex items-start justify-start text-left flex-col mt-[10px]"
            >
                <div>Author : Guru</div>
                <ClientOnly>{{
                    new Date(data.publishedAt).toLocaleDateString()
                }}</ClientOnly>
            </div>
            <SanityImage
                :asset-id="data.image.asset._ref"
                auto="format"
                class="image"
            />
        </div>
        <div class="p-[5px] md:grid md:grid-cols-6 bg-[#FBFADA]">
            <div class="col-start-2 col-span-4">
                <SanityBlocks :blocks="data.body" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { SanityBlocks } from 'sanity-blocks-vue-component';
const route = useRoute();
const slug = route.params.slug;
const query = `*[_type =="post" && slug.current == "${slug}"][0]`;
const { data } = await useSanityQuery(query);
console.log(data);
</script>

<style>
h2 {
    @apply text-2xl;
}
p {
    @apply my-[20px] text-sm md:text-base;
}
.main {
    @apply h-[screen] bg-[#FBFADA] p-[4px];
}
.layout {
    @apply flex flex-col items-center justify-center mt-[30px] bg-[#FBFADA];
}
.image {
    @apply mt-[10px] rounded-md w-[400px] md:w-[600px] flex p-[20px];
}
</style>
