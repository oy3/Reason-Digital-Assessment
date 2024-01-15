<script setup>
import { RouterLink } from "vue-router";
import ArrowDown from "../assets/icon/ArrowDown.vue";
import { useSinglePrismicDocument, PrismicText, PrismicImage } from '@prismicio/vue';
import TypeSection from '../components/TypeSection.vue';


const about = useSinglePrismicDocument("about").data;

</script>

<template>
    <div class="container">
        <div class="banner1">
            <PrismicImage :field="about.data.intro_img" fallback="" />
            <div class="overlay">
                <PrismicText class="title" :field="about.data.intro_title" fallback="" />
                <PrismicText class="content" :field="about.data.intro_content" fallback="" />
            </div>
        </div>

        <div class="tiles">
            <TypeSection :section="about.data" />
        </div>

        <div class="cta">
            <h1>
                <PrismicText :field="about.data.cta_heading" fallback="" />
            </h1>

            <div class="row">
                <div class="column">
                    <PrismicImage :field="about.data.cta_img" fallback="" />
                </div>
                <div class="column">
                    <div class="content">
                        <h1>
                            <PrismicText :field="about.data.cta_title" fallback="" />
                        </h1>
                        <p>
                            <PrismicText :field="about.data.cta_content" fallback="" />
                        </p>
                        <button>
                            <PrismicText :field="about.data.cta_btn" fallback="" />
                        </button>
                    </div>
                </div>
            </div>
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

.tiles {
    height: fit-content;
    display: flex;
    justify-content: space-around;
    padding: 50px 5%;
}

.cta {
    background-color: #ececec;
    padding: 50px 80px;
}

.cta .row {
    width: 100%;
    height: auto;
    display: flex;
    background-color: #497c8f;
}

.cta .column {
    flex: 1;
}


.cta .column img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}



.cta .column .content {
    height: 100%;
    text-align: left;
    color: #fff;
    max-width: 80%;
    padding: 10px 50px;
    display: grid;
    justify-content: center;
    justify-items: start;
    align-items: center;
    align-content: center;
}

.cta .row .column .content h1 {
    font-size: 25px;
}

.cta .row .column .content p {
    font-size: 20px;
}

.cta .row .column .content button {
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

.cta .row .column .content button:hover {
    background-color: #fff;
    color: #be3148;
}


@media screen and (max-width: 768px) {

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

    .tiles {
        flex-direction: column;
        padding: 50px 10vw;
    }

    .cta {
        padding: 0px;
    }

    .cta .row {
        flex-direction: column;
        height: fit-content;
    }

    .cta .column {
        width: 100%;
        height: fit-content;
        margin: 0;
    }

    .cta h1 {
        font-size: 1.5em;
        padding: 20px 20px;
        margin: 0;
    }

    .cta .column .content {
        padding: 40px 20px;
        justify-items: center;
        max-width: 100%;
        text-align: center;
    }

    .cta .row .column .content h1 {
        font-size: 1.5em;
    }

    .cta .row .column .content p {
        font-size: 1em;
    }

    .cta .row .column .content button {
        font-size: 16px;
    }
}
</style>