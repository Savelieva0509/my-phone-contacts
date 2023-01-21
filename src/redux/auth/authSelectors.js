const getIsLoggedIn = state => state.auth.getIsLoggedIn
const getUsername = state => state.auth.user.getUsername

const authSelectors = {
    getIsLoggedIn,
    getUsername,
}

export default authSelectors