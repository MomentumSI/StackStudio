module StackPlace::VariantRepresenter
  include Roar::Representer::JSON

  # wrap the fields e.g. { "model_name" : { ...fields... }
  self.representation_wrap = true

  property :id
  property :environment
  property :rule_type
  hash :rules
end
