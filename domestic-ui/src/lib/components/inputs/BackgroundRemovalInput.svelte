<script>
	import { status } from '$lib/stores'
	import { slide } from 'svelte/transition'

	let url = $state('https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/11/Pokemon-Ditto.jpg'),
		b64 = $state(null),
		disabled = $derived(url.length === 0 && !uploadedFile || ($status.input && !$status.output)),
		isDragging = $state(false),
		fileInput = $state(null),
		uploadedFile = $state(null)  

	//{image_url: url ? url : b64, is_b64: b64 ? true : false}

	$effect(() => {
		if (url || b64) {
			$status.input = {image_url: url ? url : b64, is_b64: b64 ? true : false}
		}
	})

	const handleDragOver = (e) => {
		e.preventDefault()
		isDragging = true
	}

	const handleDragLeave = (e) => {
		e.preventDefault()
		isDragging = false
	}

	const handleDrop = (e) => {
		e.preventDefault()
		isDragging = false
		
		const files = Array.from(e.dataTransfer.files)
		if (files.length > 0) {
			handleFiles([files[0]]) 
		}
	}

	const handleFileSelect = (e) => {
		const files = Array.from(e.target.files)
		if (files.length > 0) {
			handleFiles([files[0]]) 
		}
	}

	const handleFiles = (files) => {
		const supportedFiles = files.filter(file => 
			file.type === 'image/png' || 
			file.type === 'image/jpeg' || 
			file.type === 'image/jpg'
		)
		
		if (supportedFiles.length > 0) {
			uploadedFile = supportedFiles[0] 
			url = '' 
		}
	}

	const removeFile = () => {
		uploadedFile = null
		if (fileInput) {
			fileInput.value = ''
		}
	}

	const triggerFileInput = () => {
		fileInput?.click()
	}

	const convertFileToBase64 = async (file) => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader()
			reader.onload = () => resolve(reader.result)
			reader.onerror = reject
			reader.readAsDataURL(file)
		})
	}
</script>

<div class="input-background-removal" transition:slide>
	<h4 class="input-title">Background Removal</h4>
	<form onsubmit={async e => {
		e.preventDefault()
		
		let fileData = null
		if (uploadedFile) {
			fileData = await convertFileToBase64(uploadedFile)
			b64 = fileData.split(',')[1]
		}
		
		//handleSubmit({image_url: url, image_b64: b64})
		handleSubmit({image_url: url ? url : b64, is_b64: b64 ? true : false})
	}} class='relative'>
		<div class="mb-4 relative">
			<div 
				class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center transition-colors duration-200 cursor-pointer hover:border-gray-400 {isDragging ? 'border-blue-400 ' : ''} {disabled ? 'bg-gray-dark' : ''}"
				ondragover={handleDragOver}
				ondragleave={handleDragLeave}
				ondrop={handleDrop}
				onclick={triggerFileInput}
			>
				<div class="text-gray-500">
					<div class="mb-2">📁</div>
					<div class="mb-2">
						<span class="font-medium">Drag an image or </span>
						<span class="text-blue-500 underline cursor-pointer">upload it</span>
					</div>
					<div class="text-sm">PNG or JPEG only</div>
					<input
						bind:value={url}
						type="url" 
						placeholder="paste a url" 
						class="w-full p-2 border border-gray-300 rounded my-2 {disabled ? 'bg-gray-dark' : 'bg-white'}"
						onclick={e => e.stopPropagation()}
						disabled={disabled}
					/>
				</div>
			</div>
			
			<input 
				bind:this={fileInput}
				type="file" 
				accept=".png,.jpg,.jpeg,image/png,image/jpeg"
				onchange={handleFileSelect}
				class="hidden"
			/>
	
			<!-- <button 
					type="submit" 
					class="absolute bottom-3 right-2 bg-black/66 text-white p-1 aspect-square rounded-full disabled:opacity-30 disabled:cursor-not-allowed" 
					disabled={disabled}
				>
					<img src="/assets/arrow.svg" alt="arrow" class="w-4 h-4">
				</button> -->
		</div>
		{#if uploadedFile}
			<div class="mb-4">
				<div class="text-sm font-medium mb-2">Uploaded file:</div>
				<div class="flex items-center justify-between bg-gray-100 p-2 rounded">
					<span class="text-sm truncate">{uploadedFile.name}</span>
					<button 
						type="button" 
						onclick={removeFile}
						class="text-red-500 hover:text-red-700 ml-2"
					>
						×
					</button>
				</div>
			</div>
		{/if}
	</form>
</div>