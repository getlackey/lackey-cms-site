after "deploy:setup", "deploy:create_release_dir"
namespace :deploy do
  task :create_release_dir, :except => {:no_release => true} do
    run "mkdir -p #{fetch :releases_path}"

    run "mkdir -p #{fetch :shared_path}/uploads"

    run "sudo ln -s /srv/websites/#{application_stage}/current/capistrano/config/upstart.conf /etc/init/#{application_stage}.conf"
    run "sudo ln -s /srv/websites/#{application_stage}/current/capistrano/config/vhost.conf /etc/nginx/sites-enabled/#{application_stage}"
  end
end
