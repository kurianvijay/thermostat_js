require 'sinatra'
require 'pg'
require 'json'

enable :sessions

  get '/saved-setting' do
    headers 'Access-Control-Allow-Origin' => '*'
    (get_temp).to_json
  end

  post '/collect' do
    headers 'Access-Control-Allow-Origin' => '*'
    saved_temp(params[:temperature])
  end

  def saved_temp(sentTemp)
  connection = PG.connect(dbname: 'thermostat')
  connection.exec("TRUNCATE TABLE settings;")
  connection.exec("INSERT INTO settings (temperature) VALUES(#{sentTemp});")
  end

  def get_temp
    connection = PG.connect(dbname: 'thermostat')
    temp_saved = connection.exec("SELECT temperature FROM settings;").first
    temp_saved["temperature"].to_i
  end
