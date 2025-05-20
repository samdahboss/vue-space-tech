<!-- src/components/technology/TechnologyNav.vue -->
<template>
    <ul class="nav-links bellefair" id="technology-nav">
        <li v-for="(tech, index) in technologies" 
            :key="index" 
            class="nav-link"
            :class="{ 'active': modelValue === index }" 
            @click="updateTechnology(index)">
            {{ index + 1 }}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'TechnologyNav',
    props: {
        technologies: {
            type: Array,
            required: true
        },
        modelValue: {
            type: Number,
            required: true
        }
    },
    methods: {
        updateTechnology(index) {
            this.$emit('update:modelValue', index);
        }
    }
}
</script>

<style scoped>
#technology-nav {
    display: flex;
    background: none;
    backdrop-filter: blur(0px);
    flex-direction: column;
    width: fit-content;
    justify-content: center;
    gap: 1.5em;
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

@media (max-width: 940px) {
    #technology-nav {
        position: relative;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        max-width: 512px;
        margin: auto;
    }
}

@media (max-width: 570px) {
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