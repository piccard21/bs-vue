<template>
	<div>
		<b-navbar toggleable="md" type="dark" variant="info">

			<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

			<b-navbar-brand href="#">{{ brand }}</b-navbar-brand>

			<b-collapse is-nav id="nav_collapse">

				<b-navbar-nav>
					<b-nav-item v-for="(item, index) in linksLeft"
					            :key="index"
					            :href="item.link"
					            :disabled="item.disabled"
					            :active="index==0">
						{{item.display}}
					</b-nav-item>
				</b-navbar-nav>

				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">

					<b-nav-item-dropdown :text="DDHeaderInc.display" right>
						<b-dropdown-item v-for="(item, index) in DDHeaderInc.sub" :key="index" :href="item.link"
						                 :disabled="item.disabled">{{item.display}}
						</b-dropdown-item>
					</b-nav-item-dropdown>

				</b-navbar-nav>

			</b-collapse>
		</b-navbar>
	</div>
</template>

<script>
	export default {
		name: 'ix-navbar',
		data() {
			return {
				'brand': 'AutoDNS',
				'linksLeft': [{
					'display': 'Link',
					'target': '#',
					'disabled': false
				}, {
					'display': 'Something',
					'target': '#',
					'disabled': false
				}, {
					'display': 'Disabled',
					'target': '#',
					'disabled': true
				}],
				'DDHeaderInc': {
					'display': 'Header Inc',
					'sub': [{
						'display': 'Sub 1',
						'target': '#',
						'disabled': false
					}, {
						'display': 'Sub 2',
						'target': '#',
						'disabled': false
					}]
				}
			};
		},
		computed: {},
		methods: {}
	}
</script>

<style scoped>
</style>