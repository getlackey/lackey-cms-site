namespace :nginx do
  desc "Setup nginx vhost"
  task :setup do
    template "vhost.conf.erb", "#{release_path}/capistrano/config/vhost.conf"
  end
  before "deploy:create_symlink", "nginx:setup"
end

namespace :deploy do
  desc "Restart nginx"
  task :restart do
    run "#{sudo} service nginx reload"
  end
end
