module Api
  module Version1
    class SortingController < ApplicationController

      def sort_by_name
        @users = User.all.order(:name)

        render json: @users
      end

      def sort_by_birthdate
        @users = User.all.order(:birthdate)

        render json: @users
      end
    end
  end
end
