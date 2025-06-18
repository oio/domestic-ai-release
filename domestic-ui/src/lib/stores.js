import { writable } from "svelte/store"

export const storeVar = writable('writable prompt')

export const status = writable({
	type: null,
	input: null,
	output: null, 
	error: null
})