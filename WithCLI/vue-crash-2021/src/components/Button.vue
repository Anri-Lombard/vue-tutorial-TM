<template>
  <button
    :style="{ background: color }"
    @click="$emit('btn-click')"
    class="btn"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    color: String,
  },
};
</script>