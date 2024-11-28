// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}

		// A single portfolio piece icon
		interface PieceLink {
			title: string,
			description: string,
			//imagePath: string
		}
	}
}

export {};
