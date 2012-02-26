set :application, "ton.katsuma.tv"
set :user, "katsumatv"

set :cache_dir, "~/var/cache/ton.katsuma.tv"
set :source_dir, "public/"
set :target_dir, "www/ton/"


role :web, "katsuma.tv"

namespace :deploy do
  task :start, :roles => :web do
    find_servers_for_task(current_task).each do |server|
      `cd #{cache_dir} && git pull origin master && echo "#{Time.now.to_s}" >> #{cache_dir}/revision`
      `rsync -avz #{ cache_dir}/#{source_dir} #{user}@#{server.host}:#{target_dir}`
    end
  end
end
