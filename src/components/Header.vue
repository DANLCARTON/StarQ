<template>
    <header>
        <h1>LPDADSM</h1>
        <nav>
            <a href="./index.html">Quizz</a>
            <a href="//about.html">About</a>
        </nav>
    </header>
</template>

<script>
export default {
    name: "HeaderDisplayer"
}
</script>

<style scoped>
    header {
        background-color: #ff88ff;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 50px;
        color: #252525;
        filter: drop-shadow(0 0 5px #00000088);
        border-radius: 0 0 50px 50px;
    }
    h1 {
        position: absolute;
        left: 5vw;
        top: 7px;
        margin: 0
    }
    nav {
        position: absolute;
        right: 5vw;
        top: 7px;
        display: flex;

    }
    a {
        margin: 10px 50px;
        text-decoration: none;
        color: #252525;
    }
</style>