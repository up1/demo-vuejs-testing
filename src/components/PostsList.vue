<template>
  <div class="posts--list">
    <div
      class="p-4 shadow-md bg-white rounded border bg-white mb-2 list--item"
      v-for="post in posts"
      v-bind="{post}"
      :key="post.id"
    >
      <slot v-bind="post"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'posts-list',
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>