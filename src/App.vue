<template>
	<div id="app">

		<!--navbar-->
		<ix-navbar></ix-navbar>

		<!--<router-link to="/">Home</router-link>-->

		<b-container>
			<router-view></router-view>
		</b-container>


		<div>
			<b-button disabled variant="primary" @click="goBack">Back</b-button>
			<b-button variant="primary" @click="goForward">Forward</b-button>
		</div>
	</div>
</template>

<script>

	import History from './mixins/History';
	import Navbar from './components/Navbar.vue';


	export default {
		name: 'app',
		mixins: [History],
		components: {
			'ix-navbar': Navbar
		},
		data() {
			return {
				url: 'https://router.vuejs.org/en/'
			}
		},
		computed: {
			count() {
				return "increment (" + this.$store.getters.count + ")";
			},
			simpleString() {
				return this.$store.getters.simpleString;
			}
		},
		methods: {
			increment() {
				this.$store.commit('increment');
			},
			incrementThree() {
				this.$store.dispatch('incrementAsync', {
					add: 3
				});
			}
		},
		watch: {
			'$route' (to, from) {
				console.info("from", from);
				console.info("to", to);
			}
		},
	}
</script>

<style lang="scss">
</style>
