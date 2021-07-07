class LinebotsController < ApplicationController
  require 'line/bot'

  protect_from_forgery :except => [:callback]

  def callback
    @client ||= Line::Bot::Client.new { |config|
      config.channel_id = ENV["LINE_CHANNEL_ID"]
      config.channel_secret = ENV["LINE_CHANNEL_SECRET"]
      config.channel_token = ENV["LINE_CHANNEL_TOKEN"]
    }
    body = request.body.read
  
    signature = request.env['HTTP_X_LINE_SIGNATURE']
    unless client.validate_signature(body, signature)
      error 400 do 'Bad Request' end
    end
  
    events = client.parse_events_from(body)
    events.each { |event|
      if event.message['text'].include("公開予定")
        response = "公開予定の映画はまるまるです"
      elsif event.message['text'].include("評価が高い")
        response = "評価が高い映画はこちらです"
      elsif event.message['text'].include("こんにちは")
        response = "こんにちは"
      else
        response = "分かりません"
      end
      
      case event
      when Line::Bot::Event::Message
        case event.type
        when Line::Bot::Event::MessageType::Text
          message = {
            type: 'text',
            text: response
          }
          client.reply_message(event['replyToken'], message)
      end
    end
  }

    head :OK
  end
end
