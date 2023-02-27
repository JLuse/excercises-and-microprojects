# require 
class SentryController < ApplicationController
  def index
    Sentry.capture_message("test message")
  end
end
