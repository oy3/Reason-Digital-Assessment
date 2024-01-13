<script setup>
import { ref, defineProps } from 'vue';

const { data } = defineProps(['data']);
</script>
<template>
    <div class="row space-evenly">
        <div v-for="item in data" :key="item.id" class="column center">
            <div>
                <h2>{{ item.title }}</h2>
                <p>{{ item.description }}</p>
                <button class="btn">Read more</button>
            </div>
        </div>
    </div>
</template>
<style scoped>
@media (max-width: 768px) {
    .about .column {
        width: 100% !important;
        margin-bottom: 20px !important;
        margin-right: 10px !important;
        padding: 5px !important;
    }

    .about .column h2 {
        font-size: 15px;
    }

    .about .column p {
        font-size: 12px !important;
    }

}


.about .row {
    color: black;
    margin-bottom: 70px;
}

.about .column {
    float: left;
    width: 20%;
    height: 200px;
    text-align: center;
    background-color: white;
    color: rgb(6, 5, 5);
}

.about .btn {
    background-color: white;
    border: none;
    color: #be3148;
    padding: 10px 24px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 20px;
    font-size: 14px;
    font-weight: bold;
}

.about .row .btn {
    border: 2px solid black;
}

.about .row .btn:hover {
    background-color: #04AA6D;
    color: white;
}
</style>