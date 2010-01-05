class CkeditorHooks < Spree::ThemeSupport::HookListener

  insert_after :admin_inside_head, :partial => 'admin/shared/ckeditor'

end
