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