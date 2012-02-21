set :application, "ton.katsuma.tv"
set :user, "katsumatv"

role :www, "katsuma.tv"

desc "deploy www files"
task :deploy, :roles => [:www] do
  source = "public/"
  target = "www/ton/"

  find_servers_for_task(current_task).each do |server|
    `rsync -avz #{source} #{user}@#{server.host}:#{target}`
  end
end
