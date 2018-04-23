<template>
    <div>
        <b-card title="Card Title"
                img-src="https://lorempixel.com/600/300/food/5/"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2">
            <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
    </div>
</template>

<script>
    import { mapGetters, mapMutations , mapActions } from 'vuex';

    export default { 
        computed: { 
          name() {
              // return this.$store.getters['a/name']
          },  
        ...mapGetters({
            sex: 'b/sex'
          })
        },
        methods: {
            setName(user) { 
                // this.$store.commit('a/setName', user);
            }
        }
    }
</script>

<style scoped>
    #registration {
        box-shadow: 1px 1px 2px 1px #ccc;
        margin: 20px;
        padding: 20px;
        display: inline-block;
        width: 300px;
        vertical-align: top;
    }

    .row h4 {
        display: inline-block;
        width: 70%;
        text-align: left;
        margin: 0 0 10px 0;
    }

    button {
        background-color: lightgreen;
        border: none;
        box-shadow: 1px 1px 1px black;
        font-size: inherit;
        text-align: right;
        cursor: pointer;
    }

    button:hover {
        background-color: green;
    }
</style>