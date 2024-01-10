<script>
import { RouterLink } from "vue-router";
import ArrowDown from "../assets/icon/ArrowDown.vue";

export default {
    components: { RouterLink, ArrowDown },
};
</script>

<template>
    <div>
        <!-- Header Section -->
        <div class="intro-bg">
            <div class="bg-text">
                <p class="title">How to Fix the Digital Divide – for Good</p>
                <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br>
                    sed do eiusmod tempor incididunt ut labore et dolore<br>
                    magna aliqua.
                </p>
            </div>
        </div>

        <div class="content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
            </p>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/yD0AysMDXhQ?si=LD884v1azomZ8rds"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>

        <!-- Second Section -->
        <div class="row">
            <div class="column">
                <div class="second-intro"></div>
            </div>
            <div class="column second-intro-half">
                <div style=" margin: 0; position: absolute; top: 50%; transform: translateY(-50%);  padding: 40px;">
                    <p class="title">Can you donate devices?</p>
                    <p class="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore
                        magna aliqua.
                    </p>
                    <button class="btn">Fill in our application form</button>
                </div>
            </div>
        </div>

        <!-- About Section -->
        <div class="about">
            <h3>Our Initiatives</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut arcu fermentum, aliquet odio at, vehicula
                nulla.
            </p>

            <div class="row space-evenly">
                <div class="column center">
                    <div>
                        <h2>Digital Literacy Programs</h2>
                        <p>Lorem ipsum dolor sit amet</p>
                        <button class="btn">Read more</button>
                    </div>
                </div>
                <div class="column center">
                    <div>
                        <h2>Community Connectivity Projects</h2>
                        <p>Lorem ipsum dolor sit amet</p>
                        <button class="btn">Read more</button>
                    </div>
                </div>
                <div class="column center">
                    <div>
                        <h2>Accessible Technology Initiatives</h2>
                        <p>Lorem ipsum dolor sit amet</p>
                        <button class="btn">Read more</button>
                    </div>
                </div>
            </div>

            <div class="center">
                <button class="btn">Explore All Initiatives</button>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
.intro-bg {
    width: 100%;
    height: 500px;
    position: relative;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(../assets/img/pic9.jpeg);
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
    background-color: #04AA6D;
    color: white;
}

.content {
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 150px;
    padding-right: 150px;
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
  