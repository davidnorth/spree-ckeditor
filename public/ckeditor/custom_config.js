CKEDITOR.addStylesSet( 'custom_styles',
[
    // Inline Styles
    { name : 'Deleted Text', element : 'del' },
    { name : 'Inserted Text', element : 'ins' },
    { name : 'Small', element : 'small' },

    // Object Styles
    { name : 'Image Left', element : 'img', attributes : { 'class' : 'left' } },
    { name : 'Image Right', element : 'img', attributes : { 'class' : 'right' } },

    { name : 'Alphabetical', element : 'ol', attributes : { 'type' : 'a' } },
    { name : 'Numeric', element : 'ol', attributes : { 'type' : '1' } },
    { name : 'Roman', element : 'ol', attributes : { 'type' : 'I' } },

]);


CKEDITOR.editorConfig = function( config )
{

  config.startupMode = 'source';
  
  config.toolbar_custom =
  [
      ['Format','Styles'],
     	['Cut','Copy','Paste','PasteText','PasteWord'],
     	['Undo','Redo','-','SelectAll','RemoveFormat'],
     	['FontFormat','Style'],
     	['Bold','Italic'],
     	['NumberedList','BulletedList'],
     	['Image','Table','SpecialChar'],
     	['Link','Unlink','Anchor'],
     	['FitWindow','ShowBlocks','Source'],
  ];

  config.toolbar = 'custom';

  config.stylesCombo_stylesSet = 'custom_styles';
  config.format_tags = 'h2;h3;h4;p';

};
