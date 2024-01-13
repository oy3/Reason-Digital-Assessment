<script setup>
import { ref, defineProps } from 'vue';

const { section } = defineProps(['section']);
</script>
<template>
    <div v-if="section.type1_title" class="col">
        <img :src="section.type1_img.url" :alt="section.type1_img.alt">
        <h1>{{ section.type1_title[0].text }}</h1>
        <p>{{ section.type1_content[0].text }}</p>
        <button>Find out more</button>
    </div>

    <div v-if="section.type2_title" class="col">
        <img :src="section.type2_img.url" :alt="section.type2_img.alt">
        <h1>{{ section.type2_title[0].text }}</h1>
        <p>{{ section.type2_content[0].text }}</p>
        <button>Find out more</button>
    </div>

    <div v-if="section.type3_title" class="col">
        <img :src="section.type3_img.url" :alt="section.type3_img.alt">
        <h1>{{ section.type3_title[0].text }}</h1>
        <p>{{ section.type3_content[0].text }}</p>
        <button>Find out more</button>
    </div>
</template>
<style scoped>
.col {
    flex: 1;
    max-width: 30%;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-right: 10px;
    background-color: #fff;
}

.col img {
    width: 100%;
    height: 300px;
    border-radius: 4px;
    object-fit: cover;
}

.col h2 {
    margin-top: 10px;
    font-size: 1.5rem;
}

.col p {
    margin-top: 10px;
    color: #666;
}

.col button {
    margin-top: 10px;
    padding: 10px 15px;
    background-color: #be3148;
    color: #fff;
    border: none;
    border-radius: 20px;
    cursor: pointer;
}


@media (max-width: 768px) {

    .col {
        max-width: 100%;
        margin-right: 0;
        margin-bottom: 20px;
    }

    .col img {
        height: 250px;
    }

    .col h2 {
        font-size: 1.2rem;
    }

    .col p {
        font-size: 14px;
    }

}
</style>
  
  