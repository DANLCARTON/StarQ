<template>
    <p>{{ author }}</p>
</template>

<script>

export default {
    name: "AnswerDisplayer",
    props: {
        author: String
    },
}

</script>

<style scoped>
p {
    background-color: #ffff88;
    border-radius: 50px;
    max-width: 25vw;
    min-width: 300px;
    margin: 10px auto;
    padding: 10px;
    filter: drop-shadow(0 0 5px #00000088);
    font-size: 26px;
    cursor: pointer;
    transition: ease-in-out .1s;
}

p:hover {
    background-color: #ffffff;
}
</style>