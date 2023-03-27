<template>
    <div id="quote">
        <Quote :quote="quote"></Quote>
    </div>
    <div id="answers">
        <Answer v-for="answer in answers" :key="answer" :author="answer"></Answer>
    </div>
</template>

<script>
import { getQuote } from "../utils/api.js";
import Quote from "./Quote.vue";
import Answer from "./Answer.vue";
export default {
    name: "QuizDisplayer",
    components: {
        Quote,
        Answer
    },
    data() {
        return {
            quoteData: [],
            quote: String,
            answers: []
        }
    },
    methods: {
        async retrieveQuoteData() {
            this.quoteData = await getQuote()
            this.quote = this.quoteData[0].quote
            this.answers.push(this.quoteData[0].author)
            
            this.quoteData = await getQuote()
            this.answers.push(this.quoteData[0].author)
            this.quoteData = await getQuote()
            this.answers.push(this.quoteData[0].author)
            this.quoteData = await getQuote()
            this.answers.push(this.quoteData[0].author)
            console.log(this.answers)
        }
    },
    mounted() {
        this.retrieveQuoteData()

    }
}
</script>