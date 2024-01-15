<script setup>
import { RouterLink } from "vue-router";
import ArrowDown from "../assets/icon/ArrowDown.vue";
import { useSinglePrismicDocument, PrismicText, PrismicImage, PrismicRichText, PrismicEmbed } from '@prismicio/vue';

const learn = useSinglePrismicDocument("learn").data;

</script>

<template>
    <div class="container">
        <div class="banner1">
            <PrismicImage :field="learn.data.intro_img" fallback="" />
            <div class="overlay">
                <PrismicText class="title" :field="learn.data.intro_title" fallback="" />
                <PrismicText class="content" :field="learn.data.intro_content" fallback="" />
            </div>
        </div>

        <div class="banner2">
            <div class="column">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/M3mKVegrEus?si=JSn2Efa-eczeQzza"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>
            <div class="column">
                <div class="content">
                    <h1>
                        <PrismicText :field="learn.data.banner_title" fallback="" />
                    </h1>
                    <p>
                        <PrismicText :field="learn.data.banner_content" fallback="" />
                    </p>
                    <button>
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
.banner1 {
    width: 100%;
    height: 50vh;
    position: relative;
    overflow: hidden;
}

.banner1 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.banner1 .overlay {
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
    text-align: left;
    padding: 20px;
    color: #fff;
    width: 30%;
}

.banner1 .overlay .title {
    width: fit-content;
    font-size: 2em;
    margin-bottom: 10px;
    background-color: #497c8f;
    color: white;
    padding: 15px;
}

.banner1 .overlay .content {
    font-size: 1.2em;
    margin-bottom: 20px;
    background-color: rgba(0, 0, 0, 0.667);
    color: white;
    padding: 15px;
}

.banner2 {
    width: 100%;
    height: 35vh;
    display: flex;
    background-color: white;
    padding: 50px;
}

.banner2 .column {
    flex: 1;
}

.banner2 .content {
    background-color: #497c8f;
    height: 100%;
    text-align: left;
    color: #fff;
    max-width: 70%;
    padding: 0px 50px;
    display: grid;
    justify-content: center;
    justify-items: start;
    align-items: center;
    align-content: center;
}

.banner2 .content h1 {
    font-size: 1.5em;
    margin: 0px 0px 10px 0px;
}

.banner2 .content p {
    font-size: 1em;
    margin: 0px 0px 20px 0px;
}

.banner2 .content button {
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
    cursor: pointer;
}

.banner2 .content button:hover {
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
    .banner1 {
        height: 30vh;
    }

    .banner1 .overlay {
        width: 80%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        color: #fff;
        display: grid;
        justify-items: center;
    }

    .banner1 .overlay .title {
        padding: 5px;
        font-size: 1.5em;
    }

    .banner1 .overlay .content {
        font-size: 1em;
        padding: 5px;
    }

    .banner2 {
        padding: 30px 0px 0px 0px;
        flex-direction: column;
        height: fit-content;
    }

    .banner2 .column {
        width: 100%;
        height: fit-content;
        margin: 0;
    }

    .banner2 .column .content {
        max-width: 100%;
        padding: 20px;
    }

    .banner2 .column h1 {
        padding: 5px;
        font-size: 1.5em;
    }

    .banner2 .column p {
        font-size: 1em;
        padding: 5px;
    }

    .banner2 .column button {
        font-size: 1em;
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