import { D as store_get, E as unsubscribe_stores, B as pop, z as push } from "../../chunks/index2.js";
import { s as status } from "../../chunks/stores.js";
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  let { children } = $$props;
  $$payload.out.push(`<div class="w-screen h-screen fixed top-0 left-0 -z-10 bg-black">`);
  if (!store_get($$store_subs ??= {}, "$status", status).modality) {
    $$payload.out.push("<!--[-->");
    if (store_get($$store_subs ??= {}, "$status", status).firstTime) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<img src="/screens/roby-start.png" alt="background" class="w-full h-full object-cover"/>`);
    } else {
      $$payload.out.push("<!--[!-->");
      $$payload.out.push(`<img src="/screens/roby-idle.png" alt="background" class="bg-image svelte-154cgno"/>`);
    }
    $$payload.out.push(`<!--]-->`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<img src="/screens/roby-prompt.png" alt="background" class="bg-image svelte-154cgno"/>`);
  }
  $$payload.out.push(`<!--]--></div> <div class="w-screen h-screen overflow-y-scroll"><header class="w-full"><h1 class="text-center">OPEN ROBY</h1> `);
  if (!store_get($$store_subs ??= {}, "$status", status).firstTime) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<div class="w-full h-full flex justify-center items-center"><p class="text-center max-w-2xl mx-auto text-sm text-gray-ultralight">A creative assistant, a fun mate, and an amazingly powerful pokemon finder. <br/> All from a local intelligence that lives in your machine :)</p></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></header> <main class="pt-8 pb-12 max-w-7xl mx-auto"><div class="w-full">`);
  children($$payload);
  $$payload.out.push(`<!----></div></main> <footer class="fixed bottom-0 p-2 w-full flex items-center justify-center gap-4"><div class="footer-pill svelte-154cgno"><a href="https://discord.gg/Gjgm9w8x" target="_blank" class="svelte-154cgno">Join our Discord<span><img src="/assets/link-arrow.svg" alt="oio logo" class="w-3 h-3"/></span></a></div> <div class="footer-pill svelte-154cgno"><a href="https://github.com/oio/" target="_blank" class="svelte-154cgno">Go to GitHub repo<span><img src="/assets/link-arrow.svg" alt="oio logo" class="w-3 h-3"/></span></a></div></footer></div> <div class="fixed bottom-0 right-0 p-4"><a href="https://www.oio.studio" target="_blank"><img src="/assets/attribution.svg" alt="oio logo" class="h-5"/></a></div>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _layout as default
};
