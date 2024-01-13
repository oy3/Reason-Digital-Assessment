<script  setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import Search from "../assets/icon/Search.vue";
import FingerPrint from "../assets/icon/FingerPrint.vue";


const store = useStore();

const menuItems = computed(() => store.state.menuItems);
</script>


<template>
    <main>
        <ul class="topnav">
            <li class=""><a class="border-lr" href="">
                    <Search /> Search
                </a></li>
            <div class="right">
                <li class="link">
                    <RouterLink class="border-lr" to="/learn">Learn</RouterLink>
                </li>
                <li class="">
                    <RouterLink class="act" to="/">Donate</RouterLink>
                </li>
            </div>
        </ul>
        <ul class="bottomnav">
            <li class="logo">
                <RouterLink to="/">
                    <div class="center">
                        <FingerPrint class="icon" />
                        <div>
                            <span class="top">GoodThings</span>
                            <br>
                            <span class="bottom">Foundaton</span>
                        </div>
                    </div>
                </RouterLink>
            </li>
            <div class="right center">
                <li v-for="menuItem in menuItems" :key="menuItem.label">
                    <RouterLink :to="menuItem.to">{{ menuItem.label }}</RouterLink>
                </li>
            </div>

        </ul>
    </main>
</template>

<style scoped>
.logo {
    display: flex;
}

.logo .icon {
    font-size: 30px !important;
    color: #527b72 !important;
    transform: rotate(-25deg);
    margin-right: 5px;
}

.logo .top {
    font-size: 25px;
    font-weight: 500;
}

.logo .bottom {
    font-size: 18px;
    font-weight: lighter;
}

/* Top Nav */
ul.topnav {
    list-style-type: none;
    margin: 0;
    padding: 0;
    padding-left: 100px;
    padding-right: 100px;
    overflow: hidden;
    background-color: #fff;
}

ul.topnav li {
    float: left;
}

ul.topnav li a {
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

ul.topnav li a:hover:not(.active) {
    border-bottom: 3px solid #527b72;
}

ul.topnav li a.border-lr {
    border-left: 1px solid #bbb;
    border-right: 1px solid #bbb;
}

ul.topnav li a.active {
    border-bottom: 3px solid #527b72;
}

ul.topnav li a.act {
    color: white;
    background-color: #be3148;
}

ul.topnav .right {
    float: right;
}

@media screen and (max-width: 600px) {

    ul.topnav li.right,
    ul.topnav li {
        float: none;
    }
}

/* Bottom Nav */
ul.bottomnav {
    border-top: 1px solid #bbb;
    list-style-type: none;
    margin: 0;
    padding: 0;
    padding-left: 100px;
    padding-right: 100px;
    overflow: hidden;
    background-color: #fff;
}

ul.bottomnav li {
    float: left;
}

ul.bottomnav li a {
    display: block;
    color: black;
    padding: 14px 16px;
    text-decoration: none;
    font-weight: bold;
}

ul.bottomnav li a:hover:not(.active) {
    color: #04AA6D;
}

ul.bottomnav li a.active {
    border-bottom: 3px solid #04AA6D;
}

ul.bottomnav .right {
    float: right;
}

@media screen and (max-width: 600px) {

    ul.bottomnav li.right,
    ul.bottomnav li {
        float: none;
    }
}
</style>


