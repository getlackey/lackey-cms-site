server '172.99.68.139', :app, :web, :db, :primary => true

# node environment
set :node_env, "staging"
set :domain, "staging.lackey.io"

set :branch, "master"
set(:application_stage) { "#{application}-staging" }
