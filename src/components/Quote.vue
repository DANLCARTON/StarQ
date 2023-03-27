<template>
    <div>
        <p>{{ quote }}</p>
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