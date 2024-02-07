<script>
    import "../app.css";
    import Header from "../lib/components/Header.svelte"
</script>
  
<div class="app">
	
    <Header />

	<main>
		<slot />
	</main>

	<!-- <footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer> -->
</div>
<style>
    .app {
        min-height: 100vh;
        background-color: #E8F3D6;
    }
</style>