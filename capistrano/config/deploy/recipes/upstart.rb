namespace :upstart do
  desc "Setup upstart job"
  task :setup do
    template "upstart.conf.erb", "#{release_path}/capistrano/config/upstart.conf"
  end
  before "deploy:create_symlink", "upstart:setup"

  desc "Start the node application"
  task :start do
    run "#{sudo} initctl reload-configuration"
    run "#{sudo} start #{application_stage}"
  end
  after "deploy:start", "upstart:start"

  desc "Stop the node application"
  task :stop do
    run "#{sudo} stop #{application_stage}"
  end

  desc "Restart the node application"
  task :restart do
    run "#{sudo} initctl reload-configuration"
    run "#{sudo} stop #{application_stage} || true"
    run "#{sudo} start #{application_stage}"
  end
  after "deploy:restart", "upstart:restart"
end
