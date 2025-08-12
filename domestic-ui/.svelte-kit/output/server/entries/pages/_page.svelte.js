import { D as store_get, J as attr_class, K as attr, I as escape_html, M as stringify, E as unsubscribe_stores, B as pop, z as push, N as ensure_array_like } from "../../chunks/index2.js";
import { s as status } from "../../chunks/stores.js";
import "clsx";
function MidButton($$payload, $$props) {
  push();
  var $$store_subs;
  let { name = "Mid button" } = $$props;
  let disabled = store_get($$store_subs ??= {}, "$status", status).input == null;
  $$payload.out.push(`<div class="w-full"><button${attr_class(`w-full px-4 py-2 rounded-full ${stringify(disabled && !store_get($$store_subs ??= {}, "$status", status).loading ? "opacity-50" : "")} disabled:cursor-not-allowed transition-all duration-200 relative overflow-hidden text-black`, void 0, {
    "cursor-not-allowed": disabled || store_get($$store_subs ??= {}, "$status", status).loading,
    "bg-oio-cyan": !store_get($$store_subs ??= {}, "$status", status).loading,
    "animate-gradient": store_get($$store_subs ??= {}, "$status", status).loading,
    "bg-gradient-to-r": store_get($$store_subs ??= {}, "$status", status).loading,
    "from-oio-cyan": store_get($$store_subs ??= {}, "$status", status).loading,
    "via-white": store_get($$store_subs ??= {}, "$status", status).loading,
    "to-oio-cyan": store_get($$store_subs ??= {}, "$status", status).loading,
    "bg-[length:200%_100%]": store_get($$store_subs ??= {}, "$status", status).loading
  })}${attr("disabled", disabled || store_get($$store_subs ??= {}, "$status", status).loading, true)}>${escape_html(name)}</button></div>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function GenericPromptInput($$payload, $$props) {
  push();
  let prompt = "Write a poem";
  $$payload.out.push(`<div class="input-output-slot svelte-1tcjj8y"><h4 class="input-title">Generic Prompt</h4> <form><input type="text"${attr("value", prompt)} placeholder="Write a poem"/> <div><h5 class="text-xs text-gray-ultralight">Advanced Settings <button class="text-xs text-oio-cyan pt-2 pb-1">${escape_html("Show")}</button></h5> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div></form></div>`);
  pop();
}
function ImageGenerationInput($$payload, $$props) {
  push();
  let prompt = "a frog with a blue wizard hat with stars";
  $$payload.out.push(`<div class="input-output-slot svelte-zf21om"><h4 class="input-title">Image Generation</h4> <form><input type="text"${attr("value", prompt)} placeholder="A frog with a magician hat"/> <div><h5 class="text-xs text-gray-ultralight">Advanced Settings <button class="text-xs text-oio-cyan pt-2 pb-1">${escape_html("Show")}</button></h5> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div></form></div>`);
  pop();
}
function BackgroundRemovalInput($$payload, $$props) {
  push();
  var $$store_subs;
  let url = "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/11/Pokemon-Ditto.jpg", disabled = url.length === 0 && !uploadedFile || store_get($$store_subs ??= {}, "$status", status).input && !store_get($$store_subs ??= {}, "$status", status).output, uploadedFile = null;
  $$payload.out.push(`<div class="input-background-removal"><h4 class="input-title">Background Removal</h4> <form class="relative"><div class="mb-4 relative"><div${attr_class(`border-2 border-dashed border-gray-300 rounded-lg p-8 text-center transition-colors duration-200 cursor-pointer hover:border-gray-400 ${stringify(
    //handleSubmit({image_url: url, image_b64: b64})
    ""
  )} ${stringify(disabled ? "bg-gray-dark" : "")}`)}><div class="text-gray-500"><div class="mb-2">📁</div> <div class="mb-2"><span class="font-medium">Drag an image or</span> <span class="text-blue-500 underline cursor-pointer">upload it</span></div> <div class="text-sm">PNG or JPEG only</div> <input${attr("value", url)} type="url" placeholder="paste a url"${attr_class(`w-full p-2 border border-gray-300 rounded my-2 ${stringify(disabled ? "bg-gray-dark" : "bg-white")}`)}${attr("disabled", disabled, true)}/></div></div> <input type="file" accept=".png,.jpg,.jpeg,image/png,image/jpeg" class="hidden"/></div> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></form></div>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function HaikuInput($$payload, $$props) {
  push();
  let topic = "The sand";
  $$payload.out.push(`<div class="input-haiku"><h4 class="input-title">Topic</h4> <input type="text"${attr("value", topic)} placeholder="The sand"/></div>`);
  pop();
}
function PokemonInput($$payload, $$props) {
  push();
  pop();
}
function Input($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out.push(`<div class="w-full"><div${attr_class(`${stringify(store_get($$store_subs ??= {}, "$status", status).modality != "pokemon" ? "input-output w-full mb-4" : "")} `)}>`);
  if (store_get($$store_subs ??= {}, "$status", status).modality == "generic-prompt") {
    $$payload.out.push("<!--[-->");
    GenericPromptInput($$payload);
  } else {
    $$payload.out.push("<!--[!-->");
    if (store_get($$store_subs ??= {}, "$status", status).modality == "image-generation") {
      $$payload.out.push("<!--[-->");
      ImageGenerationInput($$payload);
    } else {
      $$payload.out.push("<!--[!-->");
      if (store_get($$store_subs ??= {}, "$status", status).modality == "background-removal") {
        $$payload.out.push("<!--[-->");
        BackgroundRemovalInput($$payload);
      } else {
        $$payload.out.push("<!--[!-->");
        if (store_get($$store_subs ??= {}, "$status", status).modality == "haiku") {
          $$payload.out.push("<!--[-->");
          HaikuInput($$payload);
        } else {
          $$payload.out.push("<!--[!-->");
          if (store_get($$store_subs ??= {}, "$status", status).modality == "pokemon") {
            $$payload.out.push("<!--[-->");
            PokemonInput();
          } else {
            $$payload.out.push("<!--[!-->");
          }
          $$payload.out.push(`<!--]-->`);
        }
        $$payload.out.push(`<!--]-->`);
      }
      $$payload.out.push(`<!--]-->`);
    }
    $$payload.out.push(`<!--]-->`);
  }
  $$payload.out.push(`<!--]--></div> `);
  MidButton($$payload, {
    name: store_get($$store_subs ??= {}, "$status", status).modality || "generate"
  });
  $$payload.out.push(`<!----> <div class="w-full"></div></div>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function TextOutput($$payload, $$props) {
  let { text } = $$props;
  $$payload.out.push(`<div${attr_class(`relative w-full ${stringify("")}`, "svelte-6l9m1x")}><div class="bg-gray-light p-2 rounded-lg min-h-20 max-h-40 overflow-y-scroll svelte-6l9m1x"><p class="text-sm svelte-6l9m1x">${escape_html(text)}</p></div> <button class="absolute bottom-2 right-2 bg-gray-light text-white p-1 aspect-square rounded-full disabled:cursor-not-allowed svelte-6l9m1x"><img src="/assets/copy.svg" alt="copy" class="w-4 h-4 svelte-6l9m1x"/></button></div>`);
}
function ImageOutput($$payload, $$props) {
  let { image } = $$props;
  $$payload.out.push(`<div${attr_class(`relative w-full ${stringify("")}`, "svelte-1mg75xr")}><div class="h-fit max-h-96 svelte-1mg75xr"><img${attr("src", image)} alt="generation" class="w-full h-full object-cover rounded-xl svelte-1mg75xr"/></div> <button class="absolute bottom-2 right-2 bg-gray-light text-white p-1 aspect-square rounded-full disabled:cursor-not-allowed svelte-1mg75xr"><img src="/assets/download.svg" alt="download" class="w-4 h-4 svelte-1mg75xr"/></button></div>`);
}
function PokemonOutput($$payload, $$props) {
  push();
  let { output } = $$props;
  $$payload.out.push(`<div class="output-pokemon flex flex-col items-center justify-center"><div><p>${escape_html(output.msg)}</p></div> <div><img${attr("src", output.image)} alt="pokemon"/></div></div>`);
  pop();
}
function Output($$payload, $$props) {
  push();
  var $$store_subs;
  let { visible = false } = $$props;
  if (visible) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<div class="input-output"><h5 class="text-sm font-monosten mb-2">Result</h5> `);
    if (store_get($$store_subs ??= {}, "$status", status).modality == "generic-prompt" || store_get($$store_subs ??= {}, "$status", status).modality == "haiku") {
      $$payload.out.push("<!--[-->");
      TextOutput($$payload, {
        text: store_get($$store_subs ??= {}, "$status", status).output
      });
    } else {
      $$payload.out.push("<!--[!-->");
      if (store_get($$store_subs ??= {}, "$status", status).modality == "image-generation" || store_get($$store_subs ??= {}, "$status", status).modality == "background-removal") {
        $$payload.out.push("<!--[-->");
        ImageOutput($$payload, {
          image: store_get($$store_subs ??= {}, "$status", status).output
        });
      } else {
        $$payload.out.push("<!--[!-->");
        if (store_get($$store_subs ??= {}, "$status", status).modality == "pokemon") {
          $$payload.out.push("<!--[-->");
          PokemonOutput($$payload, {
            output: store_get($$store_subs ??= {}, "$status", status).output
          });
        } else {
          $$payload.out.push("<!--[!-->");
        }
        $$payload.out.push(`<!--]-->`);
      }
      $$payload.out.push(`<!--]-->`);
    }
    $$payload.out.push(`<!--]--></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function ModalityMenu($$payload, $$props) {
  push();
  const modalities = [
    {
      name: "generic-prompt",
      label: "Generic Prompt",
      emoji: "💭",
      description: "All purpose text-based command",
      full: true
    },
    {
      name: "image-generation",
      label: "Image Generation",
      emoji: "🎨",
      description: "I generate an image from text description",
      full: false
    },
    {
      name: "background-removal",
      label: "Background Removal",
      emoji: "✂️",
      description: "I remove the background of a given image",
      full: false
    },
    {
      name: "pokemon",
      label: "Pokemon",
      emoji: "🐉",
      description: "...A wild Roby appeared!",
      full: false
    },
    {
      name: "haiku",
      label: "Haiku",
      emoji: "🌸",
      description: "I write a haiku about a subject of your choice",
      full: false
    }
  ];
  const each_array = ensure_array_like(modalities);
  $$payload.out.push(`<div class="w-full flex flex-wrap items-start justify-start"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let modality = each_array[$$index];
    if (modality.full) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<div class="w-full p-1"><button class="w-full bg-gray-light hover:bg-gray-light/80 rounded-lg p-2 py-4 flex flex-col items-start justify-start transition-colors duration-300"><div><div class="text-left uppercase text-oio-cyan"><p class="flex items-center gap-2">${escape_html(modality.emoji)} ${escape_html(modality.label)}</p></div> <div class="w-full text-left"><p class="text-xs text-gray-ultralight">${escape_html(modality.description)}</p></div></div></button></div>`);
    } else {
      $$payload.out.push("<!--[!-->");
      $$payload.out.push(`<div class="w-1/2 p-1"><button class="w-full aspect-square bg-black hover:bg-[#0d0d0d] rounded-lg p-2 flex flex-col items-start justify-start transition-colors duration-300"><div><div class="text-left uppercase text-oio-cyan"><p class="flex items-center gap-2">${escape_html(modality.emoji)} ${escape_html(modality.label)}</p></div> <div class="w-full text-left"><p class="text-xs text-gray-ultralight">${escape_html(modality.description)}</p></div></div></button></div>`);
    }
    $$payload.out.push(`<!--]-->`);
  }
  $$payload.out.push(`<!--]--></div>`);
  pop();
}
function Flow($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out.push(`<div class="w-full max-w-sm flex flex-col"><div${attr_class(`w-full flex items-center justify-center h-12 min-h-12 ${stringify(store_get($$store_subs ??= {}, "$status", status).modality == null ? "rounded-t-xl bg-gray-dark" : "")}`)}><button${attr("disabled", store_get($$store_subs ??= {}, "$status", status).modality == null, true)} class="bg-gray-light rounded-full p-2 border-oio-cyan border-2 disabled:bg-transparent disabled:border-none"><img src="/assets/home.svg" alt="home" class="w-4 h-4"/></button></div> <div${attr_class(`w-full flex flex-col items-center justify-center gap-4 p-6 rounded-xl bg-gray-dark ${stringify(store_get($$store_subs ??= {}, "$status", status).modality ? "border-2 border-oio-cyan" : "rounded-t-none")} transition-all duration-300`)}>`);
  if (store_get($$store_subs ??= {}, "$status", status).modality == null) {
    $$payload.out.push("<!--[-->");
    ModalityMenu($$payload);
  } else {
    $$payload.out.push("<!--[!-->");
    Input($$payload);
    $$payload.out.push(`<!----> `);
    Output($$payload, {
      visible: store_get($$store_subs ??= {}, "$status", status).output
    });
    $$payload.out.push(`<!---->`);
  }
  $$payload.out.push(`<!--]--></div></div>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Settings($$payload, $$props) {
  push();
  $$payload.out.push(`<div${attr_class(`w-screen h-screen fixed top-0 left-0 z-50 ${stringify("pointer-events-none")}`)}><div${attr_class(`settings-container ${stringify("")} fixed top-4 right-4 z-50 flex flex-col items-end gap-2 bg-gray-dark rounded-lg p-4 pointer-events-auto`, "svelte-1hl2cnr")}><button class="flex items-center gap-4">Settings <span class="w-6 h-6 flex items-center justify-center bg-gray-light rounded-full"><img src="/assets/menu-toggle.svg" alt="settings"${attr_class(`w-4 h-4 ${stringify("")} transition-all duration-400`)}/></span></button> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div></div>`);
  pop();
}
function WelcomeModal($$payload, $$props) {
  push();
  let name = "", stylePrompt = "", nextDisabled = name.length > 0 || stylePrompt.length > 0 ? false : true;
  $$payload.out.push(`<div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-sm bg-gray-dark rounded-xl p-4 flex flex-col items-center justify-center"><div class="w-full h-4 flex items-center justify-center mb-4"><img src="/assets/intro.svg" alt="intro" class="h-full"/></div> <div class="w-full">`);
  {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<div class="w-full mb-2 flex flex-col gap-1"><p class="text-sm mb-1">I’m Roby, your new creative buddy!<br/>Wanna be friends?</p> <form><input${attr("value", name)} type="text" placeholder="Your name, or nickname, or whatever…" class="w-full bg-gray-light rounded-xl p-2"/></form> <p class="text-xs text-gray-light">You can change it later</p></div>`);
  }
  $$payload.out.push(`<!--]--></div> <div class="w-full flex items-center justify-center my-2"><button${attr("disabled", nextDisabled, true)} class="w-1/2 bg-oio-cyan text-black px-4 py-2 text-sm rounded-full disabled:opacity-50 disabled:cursor-not-allowed">next</button></div> <div><button class="text-sm text-gray-ultralight">skip</button></div></div>`);
  pop();
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out.push(`<section class="w-full flex items-center justify-center">`);
  if (store_get($$store_subs ??= {}, "$status", status).firstTime) {
    $$payload.out.push("<!--[-->");
    WelcomeModal($$payload);
  } else {
    $$payload.out.push("<!--[!-->");
    Flow($$payload);
    $$payload.out.push(`<!----> `);
    Settings($$payload);
    $$payload.out.push(`<!---->`);
  }
  $$payload.out.push(`<!--]--></section>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
