<script lang="ts">
    import PieceLink from "../components/PieceLink.svelte";

    let pieces: App.PieceLink[] = [
        { title: "Piece 1", description: "Description 1" },
        { title: "Piece 2", description: "Description 2" },
        { title: "Piece 3", description: "Description 3" },
        { title: "Piece 4", description: "Description 4" },
        { title: "Piece 5", description: "Description 5" },
        { title: "Piece 6", description: "Description 6" },
        { title: "Piece 7", description: "Description 7" }
    ];
</script>

<h1 class="text-center">My Game Development Portfolio</h1>
<div id="portfolio-grid">
    {#each pieces as piece (piece.title)}
        <PieceLink title={piece.title} description={piece.description} />
    {/each}
</div>

<style>
    #portfolio-grid {
        display: grid;
        width: 80%;
        margin: auto;
        grid-template-columns: 20% 20% 20% 20%;
        row-gap: 1rem;
        column-gap: 5rem;
    }
</style>
