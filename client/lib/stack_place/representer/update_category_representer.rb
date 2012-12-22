module StackPlace
  module UpdateCategoryRepresenter
    include Roar::Representer::JSON

    # wrap the fields e.g. { "model_name" : { ...fields... }
    self.representation_wrap = true

    property :name
    property :description
  end
end
