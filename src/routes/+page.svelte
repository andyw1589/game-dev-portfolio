<script lang="ts">
    import PieceLink from "../components/PieceLink.svelte";

    let pieces: App.PieceLink[] = [
        {
            title: "Skippy the Swimmer",
            description: "Help Skippy get home!",
            imageSrc: "/icons/skippy.png",
        },
        {
            title: "The Green Revolution",
            description:
                "Learn about the impacts of technology on global food production.",
            imageSrc: "/icons/greenrevolution.png",
        },
        {
            title: "Guess the Coaster",
            description: "Guess the coaster from a random image.",
            imageSrc: "/icons/coaster.JPG",
        },
        {
            title: "Biggy's Big Lunch",
            description: "Help Biggy catch some flies!",
            imageSrc: "/icons/biggy.png",
        },
        {
            title: "Skippy the Wizard",
            description: "Vanquish the evil vampires!",
            imageSrc: "/icons/skippywizard.png",
        },
        {
            title: "Frosty's Head",
            description: "Help Frosty get his head back!",
            imageSrc: "/icons/frosty.png",
        },
        {
            title: "The Quest for the Legendary Bloxy Cola",
            description:
                "A Roblox turn-based RPG. Find the legendary artifact!",
            imageSrc: "/icons/bloxy.png",
        },
    ];
</script>

<h1 class="text-center my-4 px-4">My Game Development Portfolio</h1>
<main id="portfolio-grid">
    {#each pieces as piece (piece.title)}
        <PieceLink
            title={piece.title}
            description={piece.description}
            imageSrc={piece.imageSrc}
        />
    {/each}
</main>

<style>
    #portfolio-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, 15vw);
        grid-gap: 2rem;
        justify-content: space-around;
        width: 80%;
        margin: auto;
    }

    @media only screen and (max-width: 750px) {
        #portfolio-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, 30vw);
            grid-gap: 2rem;
            justify-content: space-around;
            width: 80%;
            margin: auto;
        }
    }
</style>
