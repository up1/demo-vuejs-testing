<template>
  <div id="app" class="px-8 py-8 min-h-screen">
    <ParentComponent/>
  </div>
</template>

<script>
import ParentComponent from "./components/ParentComponent";

export default {
  name: "App",
  components: {
    ParentComponent
  }
};
</script>

<style>
body {
  background: #43cea2;
  background: linear-gradient(to bottom, #185a9d, #43cea2);
}
</style>
