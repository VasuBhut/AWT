class Github {
  constructor() {
    this.client_id = "cf0d333f57abe0450b4c";
    this.client_secret = "3b4bf04f61638b6a8dd3a9cd42173c2049eea529";
    this.repos_count = 5;
    this.repos_sort = "create: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
