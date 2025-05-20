<template>
    <main id="main">
        <div class="destination-container">
            <h1 class="destination-title barlow-condensed">
                <span>01</span> Pick your destination
            </h1>
            <div class="destination-content">
                <div class="destination-left">
                    <img class="destination-image" :src="destinations[currentDestination].image"
                        :alt="`Destination ${destinations[currentDestination].name}`" />
                </div>
                <div class="destination-right">
                    <div class="destination-right-content">
                        <ul class="nav-links" id="destination-nav">
                            <li v-for="(destination, index) in destinations" :key="destination.name" class="nav-link"
                                :class="{ 'active': currentDestination === index }" @click="currentDestination = index">
                                <a href="javascript:void(0)">{{ destination.name }}</a>
                            </li>
                        </ul>

                        <DestinationDetails :destination="destinations[currentDestination]" />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import DestinationDetails from '@/components/DestinationDetails.vue';

export default {
    name: 'DestinationView',
    components: {
        DestinationDetails
    },
    data() {
        return {
            currentDestination: 0,
            destinations: [
                {
                    name: 'Moon',
                    image: '/destination/image-moon.png',
                    description: "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
                    distance: '384,400 km',
                    travelTime: '3 days'
                },
                {
                    name: 'Mars',
                    image: '/destination/image-mars.png',
                    description: "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
                    distance: '225 mil. km',
                    travelTime: '9 months'
                },
                {
                    name: 'Europa',
                    image: '/destination/image-europa.png',
                    description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
                    distance: '628 mil. km',
                    travelTime: '3 years'
                },
                {
                    name: 'Titan',
                    image: '/destination/image-titan.png',
                    description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
                    distance: '1.6 bil. km',
                    travelTime: '7 years'
                }
            ]
        }
    },
    mounted() {
        document.body.style.backgroundImage = "url('/destination/background-destination-desktop.jpg')";
        window.addEventListener('resize', this.setResponsiveBackground);
        this.setResponsiveBackground();
    },
    methods: {
        setResponsiveBackground() {
            const windowWidth = window.innerWidth;
            let bgImage;

            if (windowWidth <= 570) {
                bgImage = "url('/destination/background-destination-mobile.jpg')";
            } else if (windowWidth <= 940) {
                bgImage = "url('/destination/background-destination-tablet.jpg')";
            } else {
                bgImage = "url('/destination/background-destination-desktop.jpg')";
            }

            document.body.style.backgroundImage = bgImage;
        }
    },
    beforeUnmount() {
        document.body.style.backgroundImage = "";
        window.removeEventListener('resize', this.setResponsiveBackground);
    }
}
</script>

<style scoped>
main {
    padding: 2em 2em 1em;
}

.destination-container {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.destination-title {
    font-weight: 400;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0em 2em;
    z-index: 10;
}

.destination-title span {
    color: #ffffff81;
}

.destination-content {
    display: flex;
    justify-content: center;
    align-items: end;
    height: 100%;
    padding: 0em 2em;
}

.destination-left {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: end;
}

.destination-left img {
    width: 400px;
    height: 400px;
    padding: 0em;
    position: relative;
    z-index: -40;
}

.destination-right {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
}

.destination-right-content {
    max-width: 445px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5em;
}

#destination-nav {
    display: flex;
    list-style-type: none;
    background-color: transparent;
    backdrop-filter: none;
    padding: 0em 0em;
    justify-content: unset;
    gap: 1em;
}

#destination-nav .nav-link {
    padding: 0.5em 0em;
    cursor: pointer;
    text-transform: uppercase;
}



.nav-link a {
    text-decoration: none;
    color: white;
}

.nav-link.active {
    border-bottom: 3px solid #fff;
}

.nav-link:hover:not(.active) {
    border-bottom: 3px solid rgba(255, 255, 255, 0.36);
}

/* Tablet Responsiveness */
@media (max-width: 940px) {
    .destination-title {
        padding: 0em 0em;
        font-size: 1.3em;
    }

    .destination-content {
        flex-direction: column;
        justify-content: end;
        align-items: center;
    }

    .destination-left {
        width: 100%;
        align-items: center;
        padding: 2em 0em;
    }

    .destination-left img {
        width: 300px;
        height: 300px;
    }

    .destination-right-content {
        max-width: 414px;
        flex-direction: column;
    }

    #destination-nav {
        width: 100%;
        justify-content: center;
    }

}

/* Mobile Responsiveness */
@media (max-width: 570px) {
    main {
        padding: 1em 1em 0em;
        height: 100%;
    }

    .destination-container {
        height: 100%;
    }

    .destination-content {
        justify-content: center;
    }

    .destination-title {
        margin-top: 2em;
        font-size: 1.2em;
        text-align: center;
    }

    .destination-main-title {
        font-size: 2.5em;
    }

    .destination-description {
        line-height: 100%;
        font-size: 0.8em;
    }

    .destination-right-content {
        max-width: 327px;
        gap: 1em;
    }

    #destination-nav {
        display: flex;
        margin-top: -2em;
    }

    #destination-nav .nav-link {
        padding: 0.3em 0em;
    }

    #destination-nav .nav-link.active {
        border-right: none;
        border-bottom: 1px solid #ffffff;
    }

    .stats {
        flex-direction: column;
        gap: 0.5em;
    }

    .stats div {
        width: 100%;
    }

    .stats-title {
        font-size: 0.8em;
    }

    .stats-details {
        font-size: 1.5em;
    }
}
</style>