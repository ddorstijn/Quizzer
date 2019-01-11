<template>
  <v-layout>
    <v-flex>
      <quill-editor v-model="editorContent" ref="textEditor" :options="editorOption"></quill-editor>
    </v-flex>
  </v-layout>
</template>

<style>
@import "~/node_modules/katex/dist/katex.min.css";
</style>


<script>
export default {
  head: {
    // Include external js files
    script: [
      {
        type: "text/javascript",
        src: "https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.js"
      }
    ]
  },
  data() {
    return {
      editorContent: "",
      editorOption: {
        placeholder: "What’s on your mind?",
        theme: "snow",
        modules: {
          markdownShortcuts: {},
          toolbar: [["formula"]]
        }
      }
    };
  }
};
</script>