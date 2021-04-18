<template>
  <div :key="componentKey">
    <div class="c-tabs">
      <div class="l-grid ">
        <div
            :class="`l-grid__col-xs-12 l-grid__col-sm-${tabWidthInGrid}`"
            v-for="(user, index) in users"
            :key="index"
        >
          <button class="c-tab-button"
                  @click="select(index)"
                  :class="{'c-tab--active': index === selectedIndex}"
          >{{user.username}}</button>
        </div>
      </div>

      <div v-if="selectedUser && selectedUser.name" class="c-tab-content l-flex-positioning u-padding--1bu">
        <div  class="u-width-100-pc">
          <div><span class="u-text--bold-font">Username: </span>{{selectedUser.username}}</div>
          <div><span class="u-text--bold-font">Name: </span>{{selectedUser.name}}</div>
          <div><span class="u-text--bold-font">E-mail: </span>{{selectedUser.email}}</div>
          <div><span class="u-text--bold-font">Phone: </span>{{selectedUser.phone}}</div>
          <div><span class="u-text--bold-font">Website: </span>{{selectedUser.website}}</div>
          <div><span class="u-text--bold-font">Company: </span>{{selectedUser.company.name}}</div>

          <div class="u-padding--1bu">
            <div class="u-text--bold-font u-margin--top-1bu u-margin--bottom-1bu">Recent posts</div>
            <accordion v-for="(post, index) in selectedUser.recentPosts"
                       :key="index"
                       :title="post.title"
                       :content="post.body"
            ></accordion>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Accordion from "./Accordion";
export default {
  name: "UsersTabs",
  components: {Accordion},
  props: {
    amount: {
      type: Number,
      required: true,
    },
    initialSelectedTab: {
      type: Number,
      required: false,
      default: 0,
    }
  },
  data() {
    return {
      componentKey: 0,
      users: [],
      selectedIndex: this.initialSelectedTab,
      selectedUser: {},
    }
  },
  computed: {
    tabWidthInGrid() {
      return this.amount ? ((this.amount > 4) ? 3 : (12 / this.amount)) : 12;
    },
  },
  watch: {
    amount: {
      handler(curValue, oldValue) {
        if (curValue !== oldValue) {
          this.loadContent();
        }
      },
    },
  },
  created() {
    this.loadContent();
  },
  methods: {
    loadContent() {
      this.users = [];
      this.selectedUser = {};

      // load users
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(users => {
          if (users) {
            this.users = users.slice(0, this.amount); // filter users
          }
        })
        .catch(error => console.log(error))
        .finally(() => {
          this.users.forEach(user => {

            // load posts for user
            if (user && user.name) {
              user.recentPosts = [];
              fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
                .then(response => response.json())
                .then(posts => {
                  user.recentPosts = posts.slice(0, 3); // take only 3
                })
                .catch(error => console.log(error))
                .finally(() => {
                  this.selectedUser = this.users[this.initialSelectedTab]; // assign initial selected user
                  this.forceRerender(); // rerender
                });
            }
          })
        });

    },
    select(index) {
      this.selectedIndex = index
      this.selectedUser = this.users[index];
    },
    forceRerender() {
      this.componentKey += 1;
    }
  }
}
</script>
