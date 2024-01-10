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
                <p class="title">Get online week 2021</p>
                <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing <br> elit, sed do eiusmod tempor
                    incididunt ut labore et <br> dolore magna aliqua.</p>
                <button class="btn">Get involved now!</button>
            </div>
        </div>

        <div class="row">
            <div class="column">
                <div class="second-intro"></div>
            </div>
            <div class="column second-intro-half">
                <div style=" margin: 0; position: absolute; top: 50%; transform: translateY(-50%);  padding: 40px;">
                    <p class="title">We are a social change charity, helping people to improve their lives through digital.
                    </p>
                    <p class="description">We tackle the most pressing issues of our time, working with partners in
                        thousands of
                        communities across
                        the UK and further afield.</p>
                    <button class="btn">Learn more about us</button>
                </div>

            </div>
        </div>

        <div class="cta">
            <h1>How can we help you?</h1>
            <p>Let us know who you are and what you're looking for, and we'll help get you to the right place.</p>

            <div class="action">
                I am <a href="">an Individual
                    <ArrowDown />
                </a> and I <a href="">want to learn
                    <ArrowDown />
                </a>
                <button class="btn">Start now</button>
            </div>
        </div>

        <div class="about">
            <h3>What do we do?</h3>
            <p>You might not have heard of us, bu we're the people behind the following impactful programmes.</p>

            <div class="row space-evenly">
                <div class="column center">
                    <div>
                        <h2>Get online week</h2>
                        <p>Lorem ipsum dolor sit amet</p>
                        <button class="btn">Read more</button>
                    </div>
                </div>
                <div class="column center">
                    <div>
                        <h2>Get online week</h2>
                        <p>Lorem ipsum dolor sit amet</p>
                        <button class="btn">Read more</button>
                    </div>
                </div>
                <div class="column center">
                    <div>
                        <h2>Get online week</h2>
                        <p>Lorem ipsum dolor sit amet</p>
                        <button class="btn">Read more</button>
                    </div>
                </div>
                <div class="column center">
                    <div>
                        <h2>Get online week</h2>
                        <p>Lorem ipsum dolor sit amet</p>
                        <button class="btn">Read more</button>
                    </div>
                </div>
            </div>

            <div class="center">
                <button class="btn">More about what we do</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.intro-bg {
    width: 100%;
    height: 500px;
    position: relative;
    background-color: #578092;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(../assets/img/pic1.jpg);
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
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(../assets/img/pic2.jpg);
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

.space-evenly {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>