<script setup>
import { RouterLink } from "vue-router";
import ArrowDown from "../assets/icon/ArrowDown.vue";
import { useSinglePrismicDocument, PrismicText, PrismicImage, PrismicRichText } from '@prismicio/vue';

const divide = useSinglePrismicDocument("divide").data;

</script>

<template>
    <div>
        <div class="banner">
            <PrismicImage :field="divide.data.intro_img" fallback="" />
            <div class="overlay">
                <PrismicText class="title bg-black-transparent" :field="divide.data.intro_title" fallback="" />
                <PrismicText class="content bg-secondary" :field="divide.data.intro_content" fallback="" />
            </div>
        </div>

        <div class="content">
            <PrismicRichText :field="divide.data.content" :htmlSerializer="optionalHtmlSerializer" />
        </div>

        <!-- Second Section -->
        <div class="row">
            <div class="column">
                <PrismicImage class="second-intro" :field="divide.data.cta_img" fallback="" />
            </div>
            <div class="column second-intro-half">
                <div style=" margin: 0; position: absolute; top: 50%; transform: translateY(-50%);  padding: 40px;">
                    <p class="title">
                        <PrismicText :field="divide.data.cta_title" fallback="" />
                    </p>
                    <p class="description">
                        <PrismicText :field="divide.data.cta_content" fallback="" />
                    </p>
                    <button class="btn">
                        <PrismicText :field="divide.data.cta_btn" fallback="" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
.content {
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 150px;
    padding-right: 150px;
}

.second-intro {
    width: 100%;
    height: 350px;
    object-fit: cover;
    object-position: bottom;
}

.second-intro-half {
    color: white;
    height: 350px;
    background-color: #478077;
    position: relative;
}

.second-intro-half .title {
    width: fit-content;
    padding: 15px;
    margin: 0;
    font-size: 30px;
}

.second-intro-half .description {
    width: fit-content;
    padding: 15px;
    margin: 0px;
    font-size: 20px;
}

.second-intro-half .btn {
    background-color: #478077;
    border: none;
    color: white;
    padding: 10px 24px;
    text-align: center;
    border: 2px solid #fff;
    border-radius: 20px;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    transition-duration: 0.4s;
}

.second-intro-half .btn:hover {
    background-color: #fff;
    color: #478077;
}

@media (max-width: 768px) {
    .content {
        padding: 50px;
    }

    .second-intro {
        height: 250px;
    }

    .second-intro-half {
        height: 250px;
    }

    .second-intro-half .title {
        font-size: 20px;
    }

    .second-intro-half .description {
        font-size: 14px;
    }

    .second-intro-half .btn {
        font-size: 14px;
        padding: 5px 10px;
    }
}
</style>
  