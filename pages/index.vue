<template>
    <div class="mt-[40px]">
        <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-y-5 bg-[#FBFADA]"
        >
            <Card
                v-for="post in data"
                :title="post.title"
                :image="post.image.asset._ref"
                :time="post.publishedAt"
                :slug="post.slug.current"
            />
        </div>
    </div>
</template>

<script setup>
const query = `*[_type == 'post']{title, image, publishedAt,body,slug}`;
const { data } = await useSanityQuery(query);
</script>

<style lang="scss" scoped></style>
