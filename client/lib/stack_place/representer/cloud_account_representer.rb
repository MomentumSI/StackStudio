module StackPlace::CloudAccountRepresenter
  include Roar::Representer::JSON

  # wrap the fields e.g. { "model_name" : { ...fields... }
  self.representation_wrap = true

  property :id
  property :cloud_id
  property :cloud_name
  property :cloud_provider
  property :name
  property :description
  property :access_key
  property :secret_key
  property :cloud_attributes
  property :stack_preferences
  property :topstack_id
  property :topstack_enabled
  property :topstack_configured
  collection :audit_logs, :class=>StackPlace::AuditLog, :extend => StackPlace::AuditLogRepresenter
  collection :cloud_resources, :class=>StackPlace::CloudResource, :extend => StackPlace::CloudResourceRepresenter
end
