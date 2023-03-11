'use strict'

// import { userService } from "./../services/user.service.js"
import bugPreview from './BugPreview.js'

export default {
	props: ['bugs'],
	template: `
    <section v-if="bugs.length" className="bug-list">                    
      <bug-preview v-for="bug in bugs" :bug="bug" :key="bug._id" @removeBug="$emit('removeBug', $event)" />
	  <!-- <button v-if="isOwner(bug)" @click="onRemove(bug._id)">X</button> -->
	  <!-- <router-link v-if="isOwner(bug)" :to="'/bug/edit/' + bug._id"> Edit</router-link> -->
	</section>
    <section v-else class="bug-list">Yay! No Bugs!</section>
    `,
	methods: {
		// isOwner(bug) {
		// 	const user = userService.getLoggedInUser()
		// 	if (!user) return false
		// 	if (user._id !== bug.owner._id) return false
		// 	return true
		// }
	},
	components: {
		bugPreview,
	},
}
