<template>
    <div>
        <p><i>{{ quote }}</i></p>
    </div>
</template>

<script>
export default {
    name: "QuoteDisplayer",
    props: {
        quote: String
    },
}
</script>

<style scoped>
div {
    background-color: #88ffff;
    border-radius: 50px;
    max-width: 50vw;
    min-width: 300px;
    margin: auto;
    padding: 50px;
    filter: drop-shadow(0 0 5px #00000088);
    font-size: 26px;
}
</style>