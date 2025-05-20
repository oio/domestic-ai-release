# Domestic AI Tools
Welcome to the Domestic AI Tools' repo. Here are stored all the snippets accessible by the [Domestic AI](https://github.com/oio/domestic-ai) universe. 
The tools are self-sustaining apps running locally on your computer. They expose an API on a port so that the [Domestic AI API](https://github.com/oio/domestic-API) can call them. The general principle about deciding whether to use a tool or not is to check if the operation is too complex in terms of code to be included in the API: in this case it's better to create a tool. Examples of tools are:
- AI tools that don't rely on Ollama and need to be implemented from scratch
- tools that can't rely on an API and by consequence need a complex implementation
Examples of tools you can directly implement in the API are:
- an 8ball command that generates answers with Ollama
- a weather command relying on a weather API
- a standard answer command, like a help command
See the [Domestic API repo](https://github.com/oio/domestic-API) for more details.

<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWtjeHlrcmR4eXdla2xqbHZvcjI0NzZpcTQ1dXdxbjJodXF3OTlzOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nW3Vuux6RdX94v1IWo/giphy.gif"/>

## Contributing
Domestic Tools is a container of submodules. You can add yours or update existing ones. 

### Add a new tool
A tool is an independent applet that runs on a specific port in your computer. Please check the ports that are already taken in order to avoid conflicts. You can find the list of busy ports in the [Domestic AI repo](https://github.com/oio/domestic-ai). Here are the steps to follow to create a new tool.
1. Create a new repository 
1. Push your code to it 
1. Document the API
1. Move to the Domestic AI Tools repo via ```cd [PATH_TO_YOUR_oio-domestic-ai-tools]```
1. ```git submodule add [GITHUB_LINK_OF_THE_REPO_YOU_JUST_CREATED]```
1. ```git add .```
1. ```git commit -m 'added new tool with name [NAME_OF_THE_SUBMODULE]'```
1. ```git push```

### Update an existing tool
If you just need to update an existing tool, you can just  edit it from its folder inside this repo, and then update this repo with the pushed changes. Here's how to do it.

1. Make your edits within the submodule's folder.
1. Move to the Domestic Tools repo via `cd [PATH_TO_YOUR_oio-domestic-ai-tools]`
1. ```
	git add .
	git commit -m 'added new submodule with name [NAME_OF_THE_SUBMODULE]'
	git push -u origin HEAD:main
	```
1. Lastly, go to your clone of the Domestic AI universe and update remote so that your tool is accessible for all. Follow the instructions to `Update existing submodules or pool new tools` in the [Domestic AI repo](https://github.com/oio/domestic-ai).