class CkeditorHooks < Spree::ThemeSupport::Hook::ViewListener

  render_on :admin_head, 'admin/shared/ckeditor'

end
