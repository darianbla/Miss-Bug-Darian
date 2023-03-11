import { showErrorMsg } from "../services/event-bus.service.js"
import { userService } from "../services/user.service.js"

import LoginSignup from './LoginSignup.js'

export default {
    template: `
        <header>
            <h1>Miss Bug</h1>
            <!-- <nav>    -->
                <RouterLink to="/">Home</RouterLink> 
                <RouterLink to="/bug">Our bugs</RouterLink> 
                <!-- <RouterLink to="/about">About</RouterLink>  -->
            <!-- </nav> -->
            <!-- <hr /> -->
            <section v-if="loggedinUser">
                <RouterLink :to="'/user/' + loggedinUser._id">
                    {{ loggedinUser.fullname }}
                    <span v-if="isAdmin">Admin <i class="fa-solid fa-lock-open"></i></span>
                </RouterLink>
                <button @click="logout">Logout</button>
            </section>

            <section v-else>
                <LoginSignup @onChangeLoginStatus="changeLoginStatus" />
            </section>
        </header>
    `,
    data() {
        return {
            loggedinUser: userService.getLoggedInUser(),
            isAdmin: false
        }
    },
    methods: {
        changeLoginStatus() {
            this.loggedinUser = userService.getLoggedInUser()
            this.isAdmin = this.loggedinUser.isAdmin
        },
        logout() {
            userService.logout()
                .then(() => {
                    this.loggedinUser = null
                })
        },
    },
    components: {
        LoginSignup
    }
}
