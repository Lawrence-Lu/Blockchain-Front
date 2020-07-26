<template>
    <div>
        <router-link class="router-link" :to="path">
            <slot name="item-text"></slot>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "NavigationItem",
        props: {
            path: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>
    .router-link {
        text-decoration: none;
        color: #0b0b0b;
    }
    .router-link:hover {
        color: #5679ff;

    }
</style>
