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
                <p class="title">What we do</p>
                <p class="description">Our vision is a world where everyone benefits from <br> digital - we want people to
                    be digitally able, equal <br> and safe, so they can be happier, healthier and better off.</p>
            </div>
        </div>

        <div class="row" style="padding: 50px; border-bottom: 1px solid #ccc;">
            <div class="container">
                <div class="col">
                    <img src="../assets/img/pic5.jpeg" alt="Image 1">
                    <h2>Title 1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua.</p>
                    <button>Find out more</button>
                </div>
                <div class="col">
                    <img src="../assets/img/pic6.jpeg" alt="Image 2">
                    <h2>Title 2</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua.</p>
                    <button>Find out more</button>
                </div>
                <div class="col">
                    <img src="../assets/img/pic7.jpeg" alt="Image 3">
                    <h2>Title 3</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua.</p>
                    <button>Find out more</button>
                </div>
            </div>
        </div>

        <div class="cta">
            <h1>We inspire people and shape the future so we can all thrive in a changing digital world</h1>
            <div class="row">
                <div class="column">
                    <div class="second-intro"></div>
                </div>
                <div class="column second-intro-half">
                    <div style=" margin: 0; position: absolute; top: 50%; transform: translateY(-50%);  padding: 40px;">
                        <p class="title">Our partnerships</p>
                        <p class="description">We're collaborators. Since 2010, we've built innovative digital social change programmes in partnership with global philanthropy, corporates, and government.</p>
                        <button class="btn">Take a look at our programmes</button>
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
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(../assets/img/pic4.jpg);
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

.cta .row{
    margin-top: 50px;
}

.cta .second-intro {
    width: 100%;
    height: 350px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(../assets/img/pic8.jpeg);
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

</style>