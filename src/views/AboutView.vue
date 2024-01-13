<script setup>
import { RouterLink } from "vue-router";
import ArrowDown from "../assets/icon/ArrowDown.vue";
import { useSinglePrismicDocument, PrismicText } from '@prismicio/vue';
import TypeSection from '../components/TypeSection.vue';


const about = useSinglePrismicDocument("about").data;

</script>

<template>
    <div>
        <div>
            <PrismicImage class="intro-bg" :field="about.data.intro_img" fallback="" />
            <div class="bg-text">
                <p class="title">
                    <PrismicText :field="about.data.intro_title" fallback="" />
                </p>
                <p class="description">
                    <PrismicText :field="about.data.intro_content" fallback="" />
                </p>
            </div>
        </div>

        <div class="row" style="padding: 50px; border-bottom: 1px solid #ccc;">
            <div class="container">
                <TypeSection :section="about.data" />
            </div>
        </div>

        <div class="cta">
            <h1>
                <PrismicText :field="about.data.cta_heading" fallback="" />
            </h1>
            <div class="row">
                <div class="column">
                    <div class="">
                        <PrismicImage class="second-intro" :field="about.data.cta_img" fallback="" />
                    </div>
                </div>
                <div class="column second-intro-half">
                    <div style=" margin: 0; position: absolute; top: 50%; transform: translateY(-50%);  padding: 40px;">
                        <p class="title">
                            <PrismicText :field="about.data.cta_title" fallback="" />
                        </p>
                        <p class="description">
                            <PrismicText :field="about.data.cta_content" fallback="" />
                        </p>
                        <button class="btn">
                            <PrismicText :field="about.data.cta_btn" fallback="" />
                        </button>
                    </div>

                </div>
            </div>
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
    font-size: 25px;
    padding: 15px;
    margin: 0px;
    margin-bottom: 20px;
    margin-left: 50px;
    background-color: rgba(0, 0, 0, 0.667);
    color: white;
}

.container {
    display: flex;
    justify-content: space-between;
    padding: 20px;
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

.cta .row {
    margin-top: 50px;
}

.cta .second-intro {
    width: 100%;
    height: 350px;
    object-fit: cover;
    object-position: center;
}

.cta .second-intro-half {
    color: white;
    height: 350px;
    background-color: #497c8f;
    position: relative;
}

.cta .second-intro-half .title {
    width: fit-content;
    padding: 15px;
    margin: 0;
    font-weight: bold;
    font-size: 35px;
}

.cta .second-intro-half .description {
    width: fit-content;
    padding: 15px;
    margin: 0px;
    font-size: 25px;
}

.cta .second-intro-half .btn {
    background-color: #497c8f;
    border: none;
    color: white;
    padding: 10px 24px;
    text-align: center;
    border: 2px solid #fff;
    border-radius: 20px;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    transition-duration: 0.4s;
    margin-top: 10px;
}

.cta .second-intro-half .btn:hover {
    background-color: #fff;
    color: #be3148;
}

@media (max-width: 768px) {
    .intro-bg {
        height: 300px !important;
    }

    .bg-text .title {
        margin: 0px !important;
        margin-bottom: 10px !important;
        padding: 10px !important;
        margin-left: 20px !important;
        font-size: 30px !important;
    }

    .bg-text .description {
        width: fit-content !important;
        font-size: 16px !important;
        margin: 15px !important;
    }

    .container {
        flex-direction: column;
    }

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

    .cta {
        padding-left: 20px;
        padding-right: 20px;
    }

    .cta h1 {
        font-size: 24px;
    }

    .cta .second-intro {
        height: 200px !important;
    }

    .cta .second-intro-half {
        height: 200px !important;
    }

    .cta .second-intro-half .title {
        font-size: 20px;
        padding: 0px;
        margin-bottom: 10px;
    }

    .cta .second-intro-half .description {
        font-size: 14px;
        padding: 0px;
        margin-bottom: 15px;
    }

    .cta .second-intro-half .btn {
        margin-top: 0px;
        font-size: 16px;
        padding: 5px 10px;
    }
}
</style>