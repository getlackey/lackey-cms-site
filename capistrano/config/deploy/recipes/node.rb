namespace :node do
  desc "Check required packages and install if packages are not installed"
  task :install_app_packages do
    run "ulimit -n 4000"

    run "rm -rf #{release_path}/uploads"
    run "ln -s #{shared_path}/uploads #{release_path}/uploads"

    run "cd #{release_path}/ && npm-cache install #{(node_env == 'staging') ? '--loglevel warn' : ''}"
    run "cd #{release_path}/ && gulp lackey.build"
  end

  desc "Fix ACL masks"
  task :updateAcl do
    # fix ACL masks
    run "sudo setfacl -R -m m:rwx #{release_path}/"
    run "sudo setfacl -R -m m:rwx #{shared_path}"
  end

  desc "Fix new ACL masks"
  task :updateAcl2 do
    # fix ACL masks
    run "ls -1dt #{releases_path}/* | tail -n +6 | xargs sudo setfacl -R -m m:rwx || true"
  end

  before "deploy:create_symlink", "node:install_app_packages"
  after "deploy:create_symlink", "node:updateAcl"
  before "deploy:cleanup", "node:updateAcl2"
end
