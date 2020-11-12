import editor from './codesnippet-editor.vue';

function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.editor('CodesnippetEditor', editor);
}

const plugin = {
    install
};

let GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.vue;
}

if (GlobalVue) {
    GlobalVue.use(plugin)
}

editor.install = install;

export default editor
