<script lang="js">
import { RouterLink } from "vue-router";
import ArrowDown from "../assets/icon/ArrowDown.vue";

export default {
    props: {},
    data() {
        return {};
    },
    methods: {},
    computed: {
    },
    created: function () { },
    mounted: function () { },
    components: { RouterLink, ArrowDown },
}
</script>

<template>
    <div>
        <div class="intro-bg">
            <div class="bg-text">
                <p class="title">Learn</p>
                <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing <br> elit, sed do eiusmod tempor
                    incididunt ut labore et <br> dolore magna aliqua.</p>
            </div>
        </div>

        <div class="row" style=" margin: 50px;">
            <div class="column">
                <div class="second-intro">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/M3mKVegrEus?si=JSn2Efa-eczeQzza"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>
            </div>
            <div class="column second-intro-half">
                <div style=" margin: 0; position: absolute; top: 50%; transform: translateY(-50%);  padding: 40px;">
                    <p class="title">We can help you get online and make the most of the internet</p>
                    <p class="description">The internet can save you time and money and allow you to do more of the things
                        you like doing best.
                        <br>
                        <br>
                        Learn My Way is a website of free online courses for beginners, helping people develop digital
                        skills to make the most of their online world.
                    </p>
                    <button class="btn">Find the help and support you need with Learn My Way</button>
                </div>

            </div>
        </div>

        <div class="cta">
            <h1> Find Good Things near you</h1>
            <p>We work with thousands of organisations across the UK that specialise in digital skills support. So if you're
                looking for free and friendly help to get you started, or a digital inclusion partner for a new project, our
                network will offer you the support you need.</p>

                <button class="btn">Find out what support is offered in your area</button>
        </div>
    </div>
</template>

<style scoped>
.intro-bg {
    width: 100%;
    height: 500px;
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(../assets/img/pic3.jpg);
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
    font-size: 50px;
    background-color: #497c8f;
    color: white;
}

.bg-text .description {
    width: fit-content;
    font-size: 20px;
    padding: 15px;
    margin: 0px;
    margin-bottom: 20px;
    margin-left: 50px;
    background-color: white;
    /* color: #478077; */
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
    /* margin-bottom: 10px; */
    font-size: 30px;
}

.second-intro-half .description {
    width: fit-content;
    padding: 15px;
    margin: 0px;
    /* margin-bottom: 10px; */
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
</style>