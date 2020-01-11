import PostsRepository from "./postsRepository";
import GitHubRepository from "./gitHubRepository";

const repositories = {
  posts: PostsRepository,
  gitHub: GitHubRepository
  // other repositories ...
};

export const RepositoryFactory = {
  get: name => repositories[name]
};