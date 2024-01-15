<script  setup>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import { RouterLink } from 'vue-router';
import Search from '../assets/icon/Search.vue';
import FingerPrint from '../assets/icon/FingerPrint.vue';
import Bars from '../assets/icon/Bars.vue';

const store = useStore();

const menuItems = computed(() => store.state.menuItems);

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
</script>


<template>
    <main>
        <nav>
            <div class="topnav">
                <div class="left">
                    <RouterLink class="border-lr center" to="/">
                        <Search /> Search
                    </RouterLink>
                </div>
                <div class="right">
                    <RouterLink class="border-lr" style="border-bottom: 3px solid #367d91;" to="/learn">Learn</RouterLink>
                    <RouterLink class="colored-menu" to="/">Donate</RouterLink>
                </div>
            </div>

            <div class="bottomnav">
                <div class="left">
                    <div class="logo">
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
                    </div>
                    <button class="menu-btn" @click="toggleMenu">
                        <Bars />
                    </button>
                </div>

                <div class="right" :class="{ 'responsive-menu': isMenuOpen }">
                    <p v-for="menuItem in menuItems" :key="menuItem.label">
                        <RouterLink :to="menuItem.to">{{ menuItem.label }}</RouterLink>
                    </p>
                </div>

            </div>
        </nav>
    </main>
</template>

<style scoped>
nav a {
    color: black !important;
    text-decoration: none !important;
}

.colored-menu {
    background-color: #cf1b46;
    color: white !important;
}

.colored-menu:hover {
    background-color: #367d91 !important;
    color: white !important;
}

/* Logo */
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

.border-lr {
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
}

.menu-btn {
    padding: 10px 30px;
    border-radius: 20px;
    background-color: #cf1b46;
    display: none;
    border: none;
    cursor: pointer;
}

/* Top Navbar */
.topnav {
    overflow: hidden;
    background-color: white;
    color: #333;
    display: flex;
    justify-content: space-between;
    padding: 0px 5%;
    border-bottom: 1px solid #ddd;
}

.topnav .left {
    display: flex;
    align-items: center;
}

.topnav .right {
    display: flex;
    align-items: center;
}

.topnav a {
    text-decoration: none !important;
    padding: 14px 16px;
    font-size: 16px;
}

.topnav a:hover {
    background-color: #ddd;
    color: black;
}

/* Bottom Navbar */
.bottomnav {
    color: #333;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 5%;
}

.bottomnav .left {
    display: flex;
    align-items: center;
}

.bottomnav .left a:hover {
    background-color: transparent;
    color: black;
}

.bottomnav .left .logo a:hover {
    color: black !important;
}

.bottomnav .right {
    display: flex;
    align-items: center;
}

.bottomnav img {
    height: 40px;
}

.bottomnav a {
    text-decoration: none;
    padding: 14px 16px;
    font-size: 16px;
    font-weight: bold !important;
}

.bottomnav a:hover {
    color: #367d91 !important;
}

@media screen and (min-width: 768px) {
    #bottomnav {
        display: block;
    }
}

/* Responsive Design */
@media screen and (max-width: 768px) {
    .topnav {
        padding: 0px 10px;
        flex-direction: flex-direction;
    }

    .bottomnav {
        padding: 0px 10px;
        flex-direction: column;
    }

    .bottomnav .left {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }


    .bottomnav .right {
        display: none;
        text-align: center;
    }

    .bottomnav .right.responsive-menu {
        display: grid;
    }

    .topnav a.icon {
        display: block;
        order: -1;
    }

    .bottomnav .left img {
        order: -1;
    }

    .menu-btn {
        display: block;
        margin-top: 10px;
    }
}
</style>
