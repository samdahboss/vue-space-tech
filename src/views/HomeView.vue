<template>
    <main class="main" id="main">
        <div class="hero-container">
            <div class="hero-content">
                <div class="hero-text">
                    <h3 class="barlow-condensed fw-normal hero-subtitle">So, you want to travel to</h3>
                    <h1 class="bellefair hero-title fw-normal">Space</h1>
                    <p class="hero-description">
                        Let's face it; if you want to go to space, you might as well genuinely go to outer space
                        and not hover kind of on the edge of it. Well sit back, and relax because we'll give you
                        a truly out of this world experience!
                    </p>
                </div>

                <div class="right-hero">
                    <div class="explore-link bellefair fw-normal">
                        <RouterLink to="/destination">
                            <p>Explore</p>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { useBackgroundStore } from '@/stores/backgroundStore'

export default {
    name: 'HomeView',
    mounted() {
        const backgroundStore = useBackgroundStore();

        backgroundStore.setBackgroundImages({
            desktop: '/home/background-home-desktop.jpg',
            tablet: '/home/background-home-tablet.jpg',
            mobile: '/home/background-home-mobile.jpg'
        })

        this.backgroundStore = backgroundStore;
    },
    beforeUnmount() {
        // Remove the background and event listener when component is destroyed
        this.backgroundStore.clearBackground();
    }
}
</script>

<style scoped>
.hero-container {
    display: flex;
    height: 100%;
}

.hero-content {
    display: flex;
    justify-content: center;
    align-items: end;
}

.hero-text {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: end;
}

.hero-title {
    font-size: 8em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
}

.hero-subtitle {
    font-size: 2.5em;
    margin-bottom: 0.3em;
    text-transform: uppercase;
}

.hero-description {
    line-height: 180%;
}

.right-hero {
    width: 50%;
    padding: 0.8em 0em;
    display: flex;
    justify-content: end;
    align-items: center;
}

.explore-link {
    width: 272px;
    height: 272px;
    border-radius: 50%;
    background-color: #ffffff67;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.explore-link a {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    text-decoration: none;
    color: #000;
    transition: all 0.3s ease-in-out 0.3s;
}

.explore-link a:hover {
    border: 10px solid #ffffff14;
    cursor: pointer;
    width: 180px;
    height: 180px;
}

.explore-link p {
    width: 100%;
    text-align: center;
    font-size: 1.5em;
    text-transform: uppercase;
}

/* Tab Responsiveness */
@media (max-width: 768px) {
    .hero-content {
        flex-direction: column;
        gap: 1.5em;
        margin: auto;
    }

    .hero-text {
        width: 100%;
        align-items: center;
        text-align: center;
        gap: 2em;
    }

    .hero-title {
        font-size: 7em;
    }

    .hero-description {
        line-height: 150%;
        max-width: 512px;
    }

    .right-hero {
        width: 100%;
        padding: 0.8em 0em;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

/* Mobile Responsiveness */
@media (max-width: 570px) {
    main {
        padding: 2em 1.5em;
        height: 100%;
    }

    .hero-content {
        padding-top: 1em;
        gap: 3em;
    }

    .hero-text {
        gap: 1em;
    }

    .hero-subtitle {
        font-size: 1.6em;
        margin-bottom: 0;
    }

    .hero-title {
        font-size: 5em;
        margin: 0.1em 0;
    }

    .hero-description {
        font-size: 0.9em;
        line-height: 160%;
        max-width: 327px;
        margin: 0 auto;
    }

    /* Smaller explore button for mobile */
    .explore-link {
        width: 170px;
        height: 170px;
    }

    .explore-link a {
        transition: all 0.3s ease-in-out;
    }

    .explore-link a:hover {
        width: 140px;
        height: 140px;
        border-width: 5px;
    }

    .explore-link p {
        font-size: 1.25em;
    }
}

/* Extra small devices */
@media (max-width: 375px) {
    main {
        padding: 1.5em 1em;
    }

    .hero-subtitle {
        font-size: 1.4em;
    }

    .hero-title {
        font-size: 4em;
    }

    .hero-description {
        font-size: 0.85em;
        line-height: 150%;
    }

    .explore-link {
        width: 150px;
        height: 150px;
    }

    .explore-link a:hover {
        width: 120px;
        height: 120px;
    }
}
</style>
