<script setup>
import { ref, defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const { data } = defineProps(['data']);
</script>
<template>
    <div class="items">
        <div v-for="item in data" :key="item.id" class="item">
            <div>
                <h2>{{ item.title }}</h2>
                <p>{{ item.description }}</p>
                <RouterLink to="/about">
                    <button>Read more</button>
                </RouterLink>
            </div>
        </div>
    </div>
</template>
<style scoped>
.items {
    display: flex;
    justify-content: space-between;
}

.item {
    background-color: white;
    color: black;
    padding: 30px;
    display: grid;
    text-align: center;
    width: fit-content;
}

.item button {
    background-color: white;
    border: none;
    color: #be3148;
    padding: 10px 24px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border: 2px solid black;
    border-radius: 20px;
    font-size: 14px;
    font-weight: bold;
}

.item button:hover {
    background-color: #04AA6D;
    color: white;
}

@media screen and (max-width: 768px) {
    .items {
        display: grid;
        justify-content: center;
    }

    .item {
        margin-bottom: 20px;
        padding: 20px 30px;
    }
}
</style>