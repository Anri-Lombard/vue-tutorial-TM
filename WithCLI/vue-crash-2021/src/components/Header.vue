<template>
  <header>
    <h1>{{ title }}</h1>
    <Button text="Add Task"></Button>
  </header>
</template>

<script>
import Button from "./Button";

export default {
  name: "Header",
  components: {
    Button,
  },
  props: {
    title: String,
  },
};
</script>

<style>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
</style>
