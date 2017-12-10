<template>
    <div>
        <v-expansion-panel expand>
          <v-expansion-panel-content v-for="(item,i) in 5" :key="i" v-bind:value="item === 2">
            <div slot="header">Item</div>
            <v-card>
              <v-card-text class="grey lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <div class="text-xs-center my-3">
          <v-pagination :length="6"></v-pagination>
        </div>
    </div>
</template>
<script>
  export default {
    data: () => {
      return {
        clipped: true,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'bubble_chart', title: 'Inspire'},
          { icon: 'bubble_chart', title: 'test' },
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Discussion Support System'
      }
    }
  }
</script>
