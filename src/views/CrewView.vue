<template>
    <main class="crew-container" id="main">
        <h1 class="crew-title barlow-condensed">
            <span>02</span> Meet your crew
        </h1>
        <div class="crew-content">
            <div class="crew-text">
                <h3 class="bellefair fw-normal crew-subtitle">{{ crewMembers[currentCrewMember].role }}</h3>
                <h1 class="bellefair crew-main-title fw-normal">{{ crewMembers[currentCrewMember].name }}</h1>
                <p class="crew-description">
                    {{ crewMembers[currentCrewMember].bio }}
                </p>
            </div>

            <div class="carousel-controllers">
                <ul class="nav-links" id="crew-nav">
                    <li v-for="(member, index) in crewMembers" :key="index" class="nav-link crew-nav-link"
                        :class="{ 'active': currentCrewMember === index }" @click="currentCrewMember = index"></li>
                </ul>
            </div>

            <div class="crew-right">
                <img :src="crewMembers[currentCrewMember].image"
                    :alt="`image-${crewMembers[currentCrewMember].name.toLowerCase().replace(' ', '-')}`"
                    class="crew-image" />
            </div>
        </div>
    </main>
</template>

<script>
import crewMembers from "@/assets/data/crewMembers";
import { useBackgroundStore } from "@/stores/backgroundStore";

export default {
    name: 'CrewView',
    data() {
        return {
            currentCrewMember: 0,
            crewMembers
        };
    },
    mounted() {
        const backgroundStore = useBackgroundStore();
        backgroundStore.setBackgroundImages({
            desktop: '/crew/background-crew-desktop.jpg',
            tablet: '/crew/background-crew-tablet.jpg',
            mobile: '/crew/background-crew-mobile.jpg'
        })
        this.backgroundStore = backgroundStore;
    },
    beforeUnmount() {
        this.backgroundStore.clearBackground();
    }
}
</script>

<style scoped>
main {
    padding: 2em 2em 1em;
}

.crew-container {
    display: flex;
    flex-direction: column;
}

.crew-title {
    font-weight: 400;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0em 2em;
    z-index: 10;
}

.crew-title span {
    color: #ffffff81;
}

.crew-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0em 5em;
}

.crew-text {
    height: 100%;
    max-width: 539px;
    display: flex;
    flex-direction: column;
    justify-content: end;
}

.crew-main-title {
    font-size: 3.3em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
}

.crew-subtitle {
    font-size: 2.5em;
    margin-bottom: 0.3em;
    text-transform: uppercase;
    opacity: 0.5;
}

.crew-description {
    line-height: 180%;
}

.crew-right img {
    width: 540px;
    height: 75vh;
    max-height: 676px;
}

.carousel-controllers {
    position: absolute;
    bottom: 0;
    height: 20vh;
    display: flex;
    align-items: center;
    width: calc(100vw - 10em);
    background: linear-gradient(#0b0e1705 0%, #0b0e17 54%);
}

#crew-nav {
    display: flex;
    list-style-type: none;
    background-color: transparent;
    backdrop-filter: none;
    padding: 0em 0em;
    justify-content: unset;
    gap: 1em;
}

#crew-nav .nav-link {
    padding: 0em;
    background-color: #ffffff50;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    border: none;
    cursor: pointer;
}

#crew-nav .nav-link:hover {
    background-color: #ffffff81;
}

#crew-nav .nav-link.active {
    border-bottom: none;
    background-color: #fff;
}

.mobile-crew-nav {
    display: none;
}

/* Tablet Responsiveness */
@media (max-width: 940px) {
    .crew-container {
        padding: 2em 2em;
        height: 90%;
        justify-content: center;
    }

    .crew-content {
        padding: 2em 0em;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;
        flex-direction: column;
    }

    .crew-text {
        justify-content: start;
        height: fit-content;
    }

    .crew-title {
        padding: 0em 2em;
        font-size: 1.3em;
    }

    .crew-text {
        max-width: 512px;
        gap: 2.5em;
    }

    .crew-subtitle {
        font-size: 1.5em;
    }

    .crew-main-title {
        font-size: 2.5em;
    }

    .crew-description {
        line-height: 150%;
    }

    .crew-left {
        width: 100%;
        max-width: 512px;
        align-items: center;
        padding: 0em 0em;
    }

    .crew-right img {
        max-width: 501px;
        max-height: 400px;
        height: 100%;
    }

    .destination-main-title {
        font-size: 1.3em;
    }

    .carousel-controllers {
        width: calc(100vw - 4em);
        height: auto;
        position: relative;
        background: none;
    }

    #crew-nav {
        justify-content: center;
    }
}

/* Mobile Responsiveness */
@media (max-width: 570px) {
    main {
        padding: 1em 1em 0em;
        height: 100%;
    }

    .crew-container {
        height: 100%;
        padding: 4em 0em;
    }

    .crew-content {
        padding: 2em 2em;
    }

    .crew-text {
        gap: 1em;
    }

    .crew-title {
        text-align: center;
    }

    .crew-description {
        line-height: 100%;
    }

    .crew-main-title {
        font-size: 1.5em;
    }

    .crew-right img {
        max-width: 271px;
        max-height: 350px;
    }

    #crew-nav {
        display: flex;
        padding: 1em;
    }
}
</style>