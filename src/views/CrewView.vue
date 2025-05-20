<template>
    <main class="crew-container" id="main">
        <h1 class="crew-title barlow-condensed">
            <span>02</span> Meet your crew
        </h1>
        <div class="crew-content">
            <div class="crew-left">
                <div class="crew-text">
                    <h3 class="bellefair fw-normal crew-subtitle">{{ crewMembers[currentCrewMember].role }}</h3>
                    <h1 class="bellefair crew-main-title fw-normal">{{ crewMembers[currentCrewMember].name }}</h1>
                    <p class="crew-description">
                        {{ crewMembers[currentCrewMember].bio }}
                    </p>
                </div>

                <div class="carousel-controllers">
                    <ul class="nav-links" id="crew-nav">
                        <li 
                            v-for="(member, index) in crewMembers" 
                            :key="index" 
                            class="nav-link crew-nav-link"
                            :class="{ 'active': currentCrewMember === index }" 
                            @click="currentCrewMember = index">
                        </li>
                    </ul>
                </div>
            </div>

            <div class="crew-right">
                <img 
                    :src="crewMembers[currentCrewMember].image"
                    :alt="`image-${crewMembers[currentCrewMember].name.toLowerCase().replace(' ', '-')}`"
                    class="crew-image" 
                />
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
        });
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
    box-sizing: border-box;
    width: 100%;
    overflow-x: hidden;
}

.crew-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    overflow-y: hidden;
}

.crew-title {
    font-weight: 400;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0 2em;
    z-index: 10;
}

.crew-title span {
    color: #ffffff81;
}

.crew-content {
    display: flex;
    align-items: flex-end;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 0 2em;
    position: relative;
}

.crew-left {
    width: 50%;
    position: relative;
}

.crew-text {
    max-width: 539px;
    display: flex;
    flex-direction: column;
    margin-bottom: 7em;
}

.crew-main-title {
    font-size: 3.3em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin: 0.2em 0;
}

.crew-subtitle {
    font-size: 2.5em;
    text-transform: uppercase;
    opacity: 0.5;
    margin: 0;
}

.crew-description {
    line-height: 180%;
    margin-top: 1em;
}

.crew-right {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.crew-right img {
    max-width: 100%;
    height: auto;
    max-height: 70vh;
    object-fit: contain;
}

.carousel-controllers {
    position: absolute;
    bottom: 0;
    left: 0;
    height: auto;
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 2em;
}

#crew-nav {
    display: flex;
    list-style-type: none;
    background-color: transparent;
    padding: 0;
    gap: 1em;
    margin: 0;
}

#crew-nav .nav-link {
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
    background-color: #fff;
}

/* Tablet Responsiveness */
@media (max-width: 940px) {
    .crew-content {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .crew-left {
        width: 100%;
        order: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .crew-text {
        margin-bottom: 3em;
        align-items: center;
        max-width: 512px;
    }

    .crew-title {
        font-size: 1.3em;
        text-align: left;
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

    .crew-right {
        width: 100%;
        order: 1;
    }

    .crew-right img {
        max-width: 501px;
        max-height: 400px;
    }

    .carousel-controllers {
        position: relative;
        margin: 2em 0;
    }

    #crew-nav {
        justify-content: center;
    }
}

/* Mobile Responsiveness */
@media (max-width: 570px) {
    main {
        padding: 1em 1em 0;
    }

    .crew-content {
        padding: 0;
        flex-direction: column-reverse;
    }

    .crew-title {
        text-align: center;
        font-size: 1.2em;
        padding: 0;
        margin-bottom: 2em;
    }

    .crew-text {
        gap: 0.5em;
        margin-bottom: 2em;
    }

    .crew-subtitle {
        font-size: 1.2em;
    }

    .crew-main-title {
        font-size: 1.5em;
        margin: 0;
    }

    .crew-description {
        font-size: 0.9em;
        line-height: 140%;
    }

    .crew-right {
        height: 40vh;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        margin-bottom: 1.5em;
    }

    .crew-right img {
        max-width: 271px;
        max-height: 100%;
    }

    .carousel-controllers {
        margin: 0;
        order: -1;
        margin-bottom: 1.5em;
        justify-content: center;
    }

    .crew-left {
        display: flex;
        flex-direction: column-reverse;
    }
}
</style>