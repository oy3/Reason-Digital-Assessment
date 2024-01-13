<script setup>
import { RouterLink } from "vue-router";
import ArrowDown from "../assets/icon/ArrowDown.vue";
import { useSinglePrismicDocument, PrismicText, PrismicImage, PrismicRichText, PrismicEmbed } from '@prismicio/vue';

const learn = useSinglePrismicDocument("learn").data;

</script>

<template>
    <div>
        <div>
            <PrismicImage class="intro-bg" :field="learn.data.intro_img" fallback="" />
            <div class="bg-text">
                <p class="title">
                    <PrismicText :field="learn.data.intro_title" fallback="" />
                </p>
                <p class="description">
                    <PrismicText :field="learn.data.intro_content" fallback="" />
                </p>
            </div>
        </div>

        <div class="row" style=" margin: 50px;">
            <div class="column">
                <div class="second-intro">

                    <!-- <PrismicEmbed :field="learn.data.banner_embed" /> -->

                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/M3mKVegrEus?si=JSn2Efa-eczeQzza"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>
            </div>
            <div class="column second-intro-half">
                <div style=" margin: 0; position: absolute; top: 50%; transform: translateY(-50%);  padding: 40px;">
                    <p class="title">
                        <PrismicText :field="learn.data.banner_title" fallback="" />
                    </p>
                    <p class="description">
                        <PrismicText :field="learn.data.banner_content" fallback="" />
                    </p>
                    <button class="btn">
                        <PrismicText :field="learn.data.banner_btn" fallback="" />
                    </button>
                </div>

            </div>
        </div>

        <div class="cta">
            <h1>
                <PrismicText :field="learn.data.cta_title" fallback="" />
            </h1>
            <p>
                <PrismicText :field="learn.data.cta_content" fallback="" />
            </p>

            <button class="btn">
                <PrismicText :field="learn.data.cta_btn" fallback="" />
            </button>
        </div>
    </div>
</template>

<style scoped>
.intro-bg {
    width: 100%;
    height: 500px;
    position: relative;
    object-fit: cover;
    object-position: center;
}

.bg-text {
    width: 100%;
    height: auto;
    position: absolute;
    top: 25%;
}


.bg-text .title {
    width: fit-content;
    padding: 15px;
    margin: 0px;
    margin-bottom: 20px;
    margin-left: 50px;
    font-size: 50px;
    background-color: #497c8f;
    color: white;
}

.bg-text .description {
    width: 40%;
    font-size: 20px;
    padding: 15px;
    margin: 0px;
    margin-bottom: 20px;
    margin-left: 50px;
    background-color: white;
    color: rgb(105, 105, 105);
}

.second-intro {
    width: 100%;
    height: 350px;
}

.second-intro-half {
    color: white;
    height: 350px;
    background-color: #497c8f;
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
    background-color: #497c8f;
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
    color: #be3148;
}

.cta {
    background-color: #ececec;
    padding-left: 80px;
    padding-right: 80px;
    padding-top: 50px;
    padding-bottom: 50px;
}

.cta h1 {
    margin: 0;
}

.cta p {
    font-size: 20px;
}

.cta .btn {
    background-color: #be3148;
    color: #fff;
    padding: 8px 20px;
    border: none;
    text-align: center;
    border-radius: 20px;
    text-decoration: none;
    display: inline-block;
    font-weight: bold;
}

@media (max-width: 768px) {
    .intro-bg {
        height: 300px;
    }

    .bg-text .title {
        padding: 15px;
        margin: 0px;
        margin-bottom: 20px;
        margin-left: 50px;
        font-size: 30px;
    }

    .bg-text .description {
        width: fit-content;
        font-size: 18px;
        padding: 15px;
        margin: 0px 50px;
    }

    .second-intro-half .title {
        margin: 0px 0px 15px 0px;
        padding: 0px;
        font-size: 20px;
        font-weight: bold
    }

    .second-intro-half .description {
        padding: 0px;
        margin: 0px 0px 15px 0px;
        font-size: 16px;
    }

    .second-intro-half .btn {
        font-size: 14px;
        padding: 5px 10px;
    }

    .cta {
        padding: 50px;
    }

    .cta h1 {
        font-size: 25px;
    }

    .cta p {
        font-size: 18px;
    }

}
</style>