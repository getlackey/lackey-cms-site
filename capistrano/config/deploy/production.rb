server '162.13.81.123', :app, :web, :db, :primary => true

# node environment
set :node_env, "production"
set :domain, "lackey.io"

set :branch, "master"
set(:application_stage) { "#{application}-production" }
