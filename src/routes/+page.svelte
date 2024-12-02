<script lang="ts">
    import PieceLink from "../components/PieceLink.svelte";
    import { base } from '$app/paths';

    let pieces: App.PieceLink[] = [
        {
            title: "Skippy the Swimmer",
            description: "Help Skippy get home! (View the trailer on itch.io)",
            imageSrc: "/icons/skippy.png",
            link: "https://studioberry.itch.io/skippy-the-swimmer"
        },
        {
            title: "The Green Revolution",
            description:
                "Learn about the impacts of technology on global food production.",
            imageSrc: "/icons/greenrevolution.png",
            link: base + "/greenrevolution"
        },
        {
            title: "Guess the Coaster",
            description: "Guess the coaster from a random image. (View on my Github Pages)",
            imageSrc: "/icons/coaster.JPG",
            link: "https://andyw1589.github.io/guess-the-coaster/"
        },
        {
            title: "Biggy's Big Lunch",
            description: "Help Biggy catch some flies! (View on itch.io)",
            imageSrc: "/icons/biggy.png",
            link: "https://gator-gaming.itch.io/biggys-big-lunch"
        },
        {
            title: "Skippy the Wizard",
            description: "Vanquish the evil vampires! (View on itch.io)",
            imageSrc: "/icons/skippywizard.png",
            link: "https://studioberry.itch.io/skippy-the-wizard"
        },
        {
            title: "Frosty's Head",
            description: "Help Frosty get his head back! (View on itch.io)",
            imageSrc: "/icons/frosty.png",
            link: "https://gator-gaming.itch.io/frostys-head"
        },
        {
            title: "The Quest for the Legendary Bloxy Cola",
            description:
                "A turn-based RPG on Roblox. Find the legendary artifact!",
            imageSrc: "/icons/bloxy.png",
            link: base + "/bloxycola"
        },
    ];
</script>

<h1 class="text-center my-4 px-4">My Game Development Portfolio</h1>
<nav class="text-center mb-4">
    <a href="https://www.linkedin.com/in/andyw1589/" target="_blank" aria-label="my linkedin">
        <i class="fab fa-linkedin" style="font-size:36px; color:black"></i>
    </a>
    <a href="https://github.com/andyw1589/" target="_blank" aria-label="my github">
        <i class="fab fa-github" style="font-size:36px; color:black"></i>
    </a>
    <a href="https://gator-gaming.itch.io/" target="_blank" aria-label="my itch.io">
        <i class="fab fa-itch-io" style="font-size:36px; color:black"></i>
    </a>
</nav>
<main id="portfolio-grid">
    {#each pieces as piece (piece.title)}
        <PieceLink
            title={piece.title}
            description={piece.description}
            imageSrc={base + piece.imageSrc}
            link={piece.link}
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
