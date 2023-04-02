<template>
    <div>
        <div>
            <p class="points"><b>score : {{ points }}</b></p> 
        </div>
        <div id="quote">
            <Quote :quote="quote">...please wait until the quote is displayed...</Quote>
        </div>
        <div class="ans">
            <p class="answers" v-for="answer in answers" :key="answer" v-on:click="selectAnswer">{{ answer }}</p>
        </div>
    </div>
</template>

<script>
import { getQuote } from "../utils/api.js";
// import { randomizeArray } from "../utils/arrayManager.js";
import Quote from "./Quote.vue";
export default {
    name: "QuizDisplayer",
    components: {
        Quote,
    },
    data() {
        return {
            quoteData: [],
            quote: "...please wait until the quote is displayed...",
            rightAnswer: String,
            answers: [0, 1, 2, 3].sort( () => .5 - Math.random() ),
            points: 0
        }
    },
    methods: {
        async retrieveQuoteData() {
            this.quoteData = await getQuote()
            this.quote = this.quoteData[0].quote
            this.answers[this.answers.indexOf(0)] = this.quoteData[0].author
            this.rightAnswer = this.quoteData[0].author
            
            this.quoteData = await getQuote()
            this.answers[this.answers.indexOf(1)] = this.quoteData[0].author
            this.quoteData = await getQuote()
            this.answers[this.answers.indexOf(2)] = this.quoteData[0].author
            this.quoteData = await getQuote()
            this.answers[this.answers.indexOf(3)] = this.quoteData[0].author
            document.getElementsByClassName("ans")[0].classList.add("loaded");
        },
        reset: function() {
            this.quoteData = []
            this.quote = "...please wait until the quote is displayed..."
            this.rightAnswer = ""
            this.answers = [0, 1, 2, 3].sort( () => .5 - Math.random() )
            this.retrieveQuoteData()
            document.getElementsByClassName("ans")[0].classList.remove("loaded");
        },
        selectAnswer: function(event) {
            console.log(event.target.textContent, this.rightAnswer, event.target.textContent == this.rightAnswer)
            if (event.target.textContent == this.rightAnswer) {
                event.target.style.background  = "green"
                ++this.points
                setTimeout(() => {
                    this.reset()
                }, 2000)
            } else {
                event.target.style.background  = "red"
                --this.points
                setTimeout(() => {
                    this.reset()
                }, 2000)
            }
        } 
    },
    mounted() {
        this.retrieveQuoteData()
    }
}
</script>

<style scoped>

.right {
    background-color: green;
}
.wrong {
    background-color: red;
}
p.answers {
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

p.answers:hover {
    background-color: #ffffff;
}

p.points {
    color: white; 
    font-size: 26px;
}

.ans {
    display: none;
}

.loaded {
    display:block;
}
</style>