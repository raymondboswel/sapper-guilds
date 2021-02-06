<script lang="ts">
	import Nav from '../../components/Nav.svelte';
	// import { writable } from "svelte/store";
	// import { goto } from '@sapper/app';
	// import { authStore } from './stores/auth-store';
	export let segment: string;
	
	

  // let storedToken;
	// try{
	// storedToken = localStorage.getItem("token");
	// authStore.set(storedToken)
	// authStore.subscribe((value) => {
	// 	(localStorage as any).setItem("token", value);
	// });
	// console.log("Got token",  storedToken);
	// if(!storedToken || storedToken.length === 0 ) {
  //     goto("/login")
  //   }} catch(e) {
	// 		console.log("error", e);
	// 	}
	
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>