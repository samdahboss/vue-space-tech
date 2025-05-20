<template>
    <main id="main-technology">
        <div class="technology-container">
            <h1 class="technology-title barlow-condensed"><span>03</span> Space launch 101</h1>
            <div class="technology-content">
                <div class="technology-left">
                    <ul class="nav-links bellefair" id="technology-nav">
                        <li v-for="(tech, index) in technologies" :key="index" class="nav-link"
                            :class="{ 'active': currentTechnology === index }" @click="currentTechnology = index">
                            {{ index + 1 }}
                        </li>
                    </ul>
                    <div class="technology-text">
                        <h3 class="technology-subtitle bellefair fw-normal">
                            The terminology...
                        </h3>
                        <h1 class="technology-main-title bellefair fw-normal">
                            {{ technologies[currentTechnology].name }}
                        </h1>
                        <p class="technology-description">
                            {{ technologies[currentTechnology].description }}
                        </p>
                    </div>
                </div>

                <div class="technology-right">
                    <div class="technology-image" :style="{
                        backgroundImage: isDesktop
                            ? `url('${technologies[currentTechnology].portraitImage}')`
                            : `url('${technologies[currentTechnology].landscapeImage}')`
                    }"></div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import technologies from '@/assets/data/technologies';
import { useBackgroundStore } from '@/stores/backgroundStore';

export default {
    name: 'TechnologyView',
    data() {
        return {
            currentTechnology: 0,
            isDesktop: window.innerWidth > 940,
            technologies
        };
    },
    mounted() {
        const backgroundStore = useBackgroundStore();
        backgroundStore.setBackgroundImages({
            desktop: '/technology/background-technology-desktop.jpg',
            tablet: '/technology/background-technology-tablet.jpg',
            mobile: '/technology/background-technology-mobile.jpg'
        })
        this.backgroundStore = backgroundStore;
    },
    beforeUnmount() {
        this.backgroundStore.clearBackground();
    }
}
</script>

<style scoped>
main#main-technology {
    padding: 2em 0em 4em 6em;
    height: 80%;
}

.technology-container {
    display: flex;
    flex-direction: column;
}

.technology-title {
    font-weight: 400;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    z-index: 10;
}

.technology-title span {
    color: #ffffff81;
}

.technology-content {
    display: flex;
    gap: 2em;
}

.technology-left {
    width: 50%;
    display: flex;
    gap: 2em;
    position: relative;
    padding-left: 6em;
}

#technology-nav {
    background: none;
    backdrop-filter: blur(0px);
    flex-direction: column;
    width: fit-content;
    justify-content: space-between;
    padding: 0em;
    position: absolute;
    left: 0;
    height: 100%;
}

#technology-nav .nav-link {
    width: 3em;
    height: 3em;
    border-radius: 50%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    cursor: pointer;
}

#technology-nav .nav-link.active {
    background-color: #fff;
    color: #000;
}

.technology-text {
    height: 100%;
    max-width: 539px;
    display: flex;
    gap: 0.5em;
    flex-direction: column;
    justify-content: center;
}

.technology-subtitle {
    font-size: 2em;
    margin-bottom: 0.3em;
    text-transform: uppercase;
    opacity: 0.5;
}

.technology-main-title {
    font-size: 3em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
}

.technology-description {
    line-height: 180%;
}

.technology-right {
    width: 50%;
}

.technology-image {
    background-size: cover;
    background-position: center;
    height: 65vh;
    max-height: 600px;
    width: 100%;
    transition: background-image 0.5s ease-in-out;
}

@media (max-width: 940px) {
    main#main-technology {
        padding: 2em 0em 4em;
        height: 90%;
    }

    .technology-container {
        padding: 3em 0em;
        height: 100%;
        justify-content: space-between;
    }

    .technology-title {
        padding-left: 2em;
    }

    .technology-content {
        flex-direction: column-reverse;
        width: 100%;
        gap: 2em;
    }

    .technology-left {
        width: 100%;
        padding: 0em 6em;
        flex-direction: column;
    }

    #technology-nav {
        position: relative;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        max-width: 512px;
        margin: auto;
    }

    .technology-text {
        text-align: center;
        max-width: 512px;
        margin: auto;
    }

    .technology-subtitle {
        font-size: 1.5em;
    }

    .technology-main-title {
        font-size: 2.5em;
    }

    .technology-description {
        line-height: 150%;
    }

    .technology-right {
        width: 100%;
    }

    .technology-image {
        max-height: 357px;
    }
}

@media (max-width: 570px) {
    main#main-technology {
        padding: 2em 0em;
        height: 90%;
    }

    .technology-title {
        padding-left: 2em;
        font-size: 1.5em;
    }

    .technology-container {
        height: 100%;
        gap: 1em;
    }

    .technology-left {
        padding: 0em 2em;
        gap: 0.5em;
    }

    .technology-subtitle {
        font-size: 1em;
    }

    .technology-main-title {
        font-size: 2em;
    }

    .technology-description {
        line-height: 100%;
    }

    #technology-nav {
        display: flex;
    }

    #technology-nav .nav-link {
        padding: 0em 0em;
        width: 2em;
        height: 2em;
    }

    #technology-nav .nav-link.active {
        border-right: none;
        border-bottom: 1px solid #ffffff;
    }
}
</style>