import { userService } from "./../services/user.service.js"

export default {
  props: ['bug'],
  template: `<article className="bug-preview">
                <span>🐛</span>
                <h4>{{bug.title}}</h4>
                <span :class='"severity" + bug.severity'>Severity: {{bug.severity}}</span>
                <div class="actions">
                  <router-link :to="'/bug/' + bug._id">Details</router-link>
                 
                  <h4>
                    <RouterLink :to="'/user/' + bug.creator?._id">
                    Creator: {{ bug.creator?.fullname }}
                    </RouterLink>
                  </h4>
                  <router-link v-if="isCreatorOrAdmin(bug)" :to="'/bug/edit/' + bug._id"> Edit</router-link>
                </div>
                <button v-if="isCreatorOrAdmin(bug)" @click="onRemove(bug._id)">X</button>
              </article>`,

  methods: {
    onRemove(bugId) {
      this.$emit('removeBug', bugId)
    },
    isCreatorOrAdmin(bug) {
      const user = userService.getLoggedInUser()
      if (!user) return false
      if (user.isAdmin) return true
      if (user._id === bug.creator._id) return true
      return false
    },
    // isAdmin() {
    //   const user = userService.getLoggedInUser()
    //   if (!user) return false
    //   if (user.isAdmin) return true
    //   return false
    // },
  },
}
