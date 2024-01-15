<script setup>
import { RouterLink } from 'vue-router';
import ArrowDown from '../assets/icon/ArrowDown.vue';
import { useSinglePrismicDocument, PrismicText, PrismicImage } from '@prismicio/vue';
import Items from '../components/HomeItem.vue';

const home = useSinglePrismicDocument("home").data;

const items = [
    { id: 1, title: 'Get online week', description: 'Lorem ipsum dolor sit amet' },
    { id: 2, title: 'Get online week', description: 'Lorem ipsum dolor sit amet' },
    { id: 3, title: 'Get online week', description: 'Lorem ipsum dolor sit amet' },
    { id: 4, title: 'Get online week', description: 'Lorem ipsum dolor sit amet' },
];
</script>
<template>
    <div class="container">
        <div class="banner1">
            <PrismicImage :field="home.data.intro_img" fallback="" />
            <div class="overlay">
                <PrismicText class="title" :field="home.data.intro_title" fallback="" />
                <PrismicText class="content" :field="home.data.intro_content" fallback="" />
                <button class="button">
                    <PrismicText :field="home.data.intro_btn" fallback="" />
                </button>
            </div>
        </div>

        <div class="banner2">
            <div class="column">
                <PrismicImage :field="home.data.banner_img" />
            </div>
            <div class="column">
                <div class="content">
                    <h1>
                        <PrismicText :field="home.data.banner_title" fallback="" />
                    </h1>
                    <p>
                        <PrismicText :field="home.data.banner_content" fallback="Error" />
                    </p>
                    <RouterLink to="/learn">
                        <button class="button">
                            <PrismicText :field="home.data.banner_btn" fallback="Error" />
                        </button>
                    </RouterLink>
                </div>
            </div>
        </div>

        <div class="cta">
            <h1>
                <PrismicText :field="home.data.cta_title" fallback="" />
            </h1>
            <p>
                <PrismicText :field="home.data.cta_content" fallback="" />
            </p>

            <div class="inner">
                <span>
                    I am <a href="">an Individual
                        <ArrowDown />
                    </a> and I <a href="">want to learn
                        <ArrowDown />
                    </a>
                </span>
                <button>
                    <PrismicText :field="home.data.cta_btn" fallback="" />
                </button>
            </div>
        </div>

        <div class="banner3">
            <h1>
                <PrismicText :field="home.data.content_title" fallback="" />
            </h1>
            <p>
                <PrismicText :field="home.data.content" fallback="" />
            </p>

            <Items :data="items" />

            <div class="center">
                <RouterLink to="/about">
                    <button>
                        <PrismicText :field="home.data.content_btn" fallback="" />
                    </button>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
.banner1 {
    width: 100%;
    height: 50vh;
    background-color: #657f90;
    position: relative;
    overflow: hidden;
}

.banner1 img {
    width: 100%;
    height: 100%;
    object-fit: contain;
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
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 15px;
}

.banner1 .overlay .content {
    font-size: 1.2em;
    margin-bottom: 20px;
    background-color: white;
    color: rgb(105, 105, 105);
    padding: 15px;
}

.banner1 .overlay .button {
    background-color: #fff;
    color: #be3148;
    padding: 10px 24px;
    border: none;
    text-align: center;
    border-radius: 20px;
    text-decoration: none;
    display: inline-block;
    font-size: 1.2em;
    font-weight: bold;
    cursor: pointer;
}

.banner2 {
    width: 100%;
    height: 35vh;
    display: flex;
    background-color: #478077;
}

.banner2 .column {
    flex: 1;
}

.banner2 .column img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.banner2 .content {
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

.banner2 .content .button {
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
    cursor: pointer;
}

.banner2 .content .button:hover {
    background-color: #fff;
    color: #478077;
}

.cta {
    background-color: #ececec;
    padding: 50px 80px;
}

.cta h1 {
    margin: 0;
}

.cta p {
    font-size: 20px;
    margin-bottom: 20px;
}

.cta .inner {
    background-color: white;
    padding: 30px;
    text-align: center;
    font-size: 25px;
}

.cta .inner a {
    text-decoration: none;
    color: #497c8f;
    font-weight: bold;
    border-bottom: 2px solid #497c8f;
}

.cta button {
    background-color: #be3148;
    color: #fff;
    padding: 8px 20px;
    border: none;
    text-align: center;
    border-radius: 20px;
    text-decoration: none;
    display: inline-block;
    font-weight: bold;
    margin-left: 15px;
}

.banner3 {
    background-color: #497c8f;
    color: white;
    padding: 50px 80px;
}

.banner3 h1 {
    font-size: 1.5em;
    margin: 0px 0px 10px 0px;
}

.banner3 p {
    font-size: 1.2em;
    margin: 0px 0px 20px 0px;
}

.banner3 button {
    background-color: white;
    border: none;
    color: #be3148;
    padding: 10px 24px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 20px;
    font-size: 1.2em;
    font-weight: bold;
    margin-top: 30px;
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

    .banner1 .overlay .button {
        font-size: 1em;
    }

    .banner2 {
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
        margin: 20px 0px;
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
        padding: 30px !important;
    }

    .cta h1 {
        font-size: 1.5em;
    }

    .cta p {
        font-size: 1em;
    }

    .cta .inner {
        padding: 20px;
        display: grid;
        justify-items: center;
    }

    .cta .inner span {
        font-size: 20px;
    }

    .cta button {
        font-size: 16px;
        margin: 20px 0px 0px 0px;
        width: fit-content;
    }

    .banner3 {
        text-align: center;
    }

    .banner3 h1 {
        font-size: 1.5em;
    }

    .banner3 p {
        font-size: 1em;
    }

    .banner3 .center button {
        font-size: 16px;
    }

}
</style>