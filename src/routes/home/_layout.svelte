<script lang="ts">
	import Nav from '../../components/Nav.svelte';
	export let segment: string;

</script>

<style>

</style>

<Nav {segment}/>

<main class="my-20 w-4/5 mx-auto">

		<slot></slot>	

	
</main>