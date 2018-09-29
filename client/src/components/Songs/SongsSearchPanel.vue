<template>
<div class="wrapper">
<panel title="Search">
  <v-text-field   class="ml-1 mr-1 mt-2"
      placeholder="Search here by song name, artist, album" 
      solo
      autofocus
        v-model="search"
        ></v-text-field>
    </panel>

    </div>
</template>

<script>
import _ from 'lodash'
import Panel from '@/components/Panel'
export default 
{
      components: {
      Panel
    },
    data () 
    {
        return {
            search:''
        }
    },
     watch: {
        search: _.debounce(async function (value) {
            const route = {
                name: 'songs'
            }
          if (this.search !== '') {
              route.query = {
                  search: this.search
              }
          }
          this.$router.push(route)
        }, 700),
        '$route.query.search': {
            immediate: true,
            handler (value) {
                this.search = value
            }
        }
    }  
}
</script>

<style scoped>
  .wrapper {
    position: relative;
  
    width: 300px;
    left: 50%;
    transform: translate(-50%);
  }

</style>
