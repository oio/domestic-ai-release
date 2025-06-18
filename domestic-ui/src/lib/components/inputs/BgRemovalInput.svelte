<script>
	let { handleSubmit } = $props()

	let url = $state('https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/11/Pokemon-Ditto.jpg'),
		b64 = $state(null),
		disabled = $derived(url.length === 0 && !uploadedFile),
		isDragging = $state(false),
		fileInput = $state(null),
		uploadedFile = $state(null)  // Changed from array to single file

	function handleDragOver(e) {
		e.preventDefault()
		isDragging = true
	}

	function handleDragLeave(e) {
		e.preventDefault()
		isDragging = false
	}

	function handleDrop(e) {
		e.preventDefault()
		isDragging = false
		
		const files = Array.from(e.dataTransfer.files)
		if (files.length > 0) {
			handleFiles([files[0]]) // Only take the first file
		}
	}

	function handleFileSelect(e) {
		const files = Array.from(e.target.files)
		if (files.length > 0) {
			handleFiles([files[0]]) // Only take the first file
		}
	}

	function handleFiles(files) {
		// Filter for PNG and JPEG images only
		const supportedFiles = files.filter(file => 
			file.type === 'image/png' || 
			file.type === 'image/jpeg' || 
			file.type === 'image/jpg'
		)
		
		if (supportedFiles.length > 0) {
			uploadedFile = supportedFiles[0] // Set single file instead of array
			url = '' // Clear the URL when a file is uploaded
		}
	}

	function removeFile() {
		uploadedFile = null
		// Clear the file input
		if (fileInput) {
			fileInput.value = ''
		}
	}

	function triggerFileInput() {
		fileInput?.click()
	}

	async function convertFileToBase64(file) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader()
			reader.onload = () => resolve(reader.result)
			reader.onerror = reject
			reader.readAsDataURL(file)
		})
	}
</script>

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
	
	<!-- File Upload Area -->
	<div class="mb-4">
		<div 
			class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center transition-colors duration-200 cursor-pointer hover:border-gray-400 {isDragging ? 'border-blue-400 bg-blue-50' : ''}"
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
					class="w-full p-2 border border-gray-300 rounded mt-2"
					onclick={e => e.stopPropagation()}
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
	</div>

	<!-- Display uploaded file -->
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

	<!-- Submit Button -->
	<div class="relative">
		<button 
			type="submit" 
			class="absolute bottom-3 right-2 bg-black/20 text-white p-1 aspect-square rounded-full disabled:opacity-30 disabled:cursor-not-allowed" 
			disabled={disabled}
		>
			<img src="/assets/arrow.svg" alt="arrow" class="w-4 h-4">
		</button>
	</div>
</form>