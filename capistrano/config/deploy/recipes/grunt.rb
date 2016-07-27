set :grunt_tasks, "build"

before "deploy:create_symlink", "grunt"