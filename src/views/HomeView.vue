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
    <div>
        <div class="intro-bg">
            <PrismicImage class="intro-bg" :field="home.data.intro_img" fallback="" />
            <div class="bg-text">
                <p class="title">
                    <PrismicText :field="home.data.intro_title" fallback="" />
                </p>
                <p class="description">
                    <PrismicText :field="home.data.intro_content" fallback="" />
                </p>
                <button class="btn">
                    <PrismicText :field="home.data.intro_btn" fallback="" />
                </button>
            </div>
        </div>

        <div class="row">
            <div class="column">
                <PrismicImage class="second-intro" :field="home.data.banner_img" />
            </div>
            <div class="column second-intro-half">
                <div style=" margin: 0; position: absolute; top: 50%; transform: translateY(-50%);  padding: 40px;">
                    <p class="title">
                        <PrismicText :field="home.data.banner_title" fallback="" />
                    </p>
                    <p class="description">
                        <PrismicText :field="home.data.banner_content" fallback="Error" />
                    </p>
                    <button class="btn">
                        <PrismicText :field="home.data.banner_btn" fallback="Error" />
                    </button>
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

            <div class="action">
                I am <a href="">an Individual
                    <ArrowDown />
                </a> and I <a href="">want to learn
                    <ArrowDown />
                </a>
                <button class="btn">
                    <PrismicText :field="home.data.cta_btn" fallback="" />
                </button>
            </div>
        </div>

        <div class="about">
            <h3>
                <PrismicText :field="home.data.content_title" fallback="" />
            </h3>
            <p>
                <PrismicText :field="home.data.content" fallback="" />
            </p>

            <Items :data="items" />

            <!-- <div class="row space-evenly">
                <div v-for="item in items" :key="item.id" class="column center">
                    <div>
                        <h2>{{ item.title }}</h2>
                        <p>{{ item.description }}</p>
                        <button class="btn">Read more</button>
                    </div>
                </div>
            </div> -->

            <div class="center">
                <button class="btn">
                    <PrismicText :field="home.data.content_btn" fallback="" />
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
@media (max-width: 768px) {
    .intro-bg {
        width: 100% !important;
        height: 300px !important;
    }

    .bg-text .title {
        font-size: 36px !important;
        width: fit-content !important;
        margin-left: 10px !important;
        margin-right: 10px !important;
    }

    .bg-text .description {
        width: fit-content !important;
        margin-left: 10px !important;
        margin-right: 10px !important;
        font-size: 16px !important;
    }

    .bg-text .btn {
        margin-left: 10px !important;
    }

    .second-intro,
    .second-intro-half {
        height: 250px !important;
    }

    .second-intro-half .title {
        font-size: 16px !important;
        font-weight: bold;
        margin-left: 0px !important;
        margin-bottom: 10px !important;
        padding: 0px !important;
    }

    .second-intro-half .description {
        font-size: 14px !important;
        margin-left: 0px !important;
        margin-bottom: 10px !important;
        padding: 0px !important;
    }

    .second-intro-half .btn {
        font-size: 14px !important;
        margin-left: 0px !important;
        padding: 5px 10px !important;
    }

    .cta {
        padding: 30px !important;
    }

    .cta h1 {
        font-size: 24px !important;
    }

    .cta p {
        font-size: 16px !important;
    }

    .cta .action {
        padding: 20px !important;
    }

    .cta .btn {
        font-size: 14px !important;
        margin-top: 20px !important;
    }

    .about {
        padding: 30px !important;
    }

    .about h3 {
        font-size: 24px !important;
    }

    .about p {
        font-size: 14px !important;
    }

    .about .btn {
        font-size: 12px !important;
        padding: 5px 10px !important;
    }
}

.intro-bg {
    width: 100%;
    height: 500px;
    position: relative;
    background-color: #657f90;
    object-fit: contain;
    object-position: center;
}

.bg-text {
    width: 100%;
    height: auto;
    position: absolute;
    /* left: 5%; */
    top: 25%;
}


.bg-text .title {
    width: fit-content;
    padding: 15px;
    margin: 0px;
    margin-bottom: 20px;
    margin-left: 50px;
    font-size: 60px;
    background-color: rgba(0, 0, 0, 0.5);
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
    /* color: #478077; */
    color: rgb(105, 105, 105);
}

.bg-text .btn {
    background-color: #fff;
    color: #be3148;
    padding: 10px 24px;
    border: none;
    text-align: center;
    border-radius: 20px;
    margin-left: 50px;
    text-decoration: none;
    display: inline-block;
    font-weight: bold;
}

.second-intro {
    width: 100%;
    height: 350px;
    object-fit: cover;
    object-position: center;
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

.cta .action {
    background-color: white;
    padding: 30px;
    text-align: center;
    font-size: 25px;
    margin-top: 20px;
}

.cta .action a {
    text-decoration: none;
    color: #497c8f;
    font-weight: bold;
    border-bottom: 2px solid #497c8f;
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
    margin-left: 15px;
}

.about {
    padding: 80px;
    background-color: #497c8f;
    color: white;
}

.about h3 {
    font-size: 30px;

}

.about p {
    font-size: 16px;
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



.space-evenly {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>