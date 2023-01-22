const getIsLoggedIn = state => state.auth.isLoggedIn
const getUsername = state => state.auth.user.name
const getIsFechingCurrent =state => state.auth.isFechingCurrentUser

const authSelectors = {
    getIsLoggedIn,
    getUsername,
    getIsFechingCurrent
}

export default authSelectors