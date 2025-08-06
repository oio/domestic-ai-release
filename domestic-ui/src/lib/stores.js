import { writable } from "svelte/store"

export const storeVar = writable('writable prompt')

export const status = writable({
	modality: null,
	input: null,
	output: null, 
	error: null,
	loading: false,
	firstTime: true
})