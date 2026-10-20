async function getGitHubProfile() {
    const response = await fetch('https://api.github.com/users/PVu23')

    if (!response.ok) {
        throw new Error('GitHub request failed')
    }

    const data = await response.json()
    return data
}

export default getGitHubProfile