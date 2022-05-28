<template>
<div>

  
<Editor v-model="detail" :isClear="isClear" @change="change"></Editor>
</div>
</template>

<script>
/* import Editor from './Editor.vue' */
export default {
/* components: { Editor }, */
data() {
      return {
        isClear: false,
        detail:""
        }
      },  
methods: {
  change(val) {
      console.log(val)
      
    },
 }
}
</script>
 