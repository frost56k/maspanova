(function() {
    var defaults = {
      list_type: 'ul',
      class_name: 'gallery',
      tag_type: 'div'
    };
  
    window.md_gallery = function(options) {
      var settings = Object.assign({}, defaults, options);
  
      var lists = document.querySelectorAll(settings.list_type + '.markdown-gallery > li');
      if (lists.length === 0) return;
  
      var gallery = document.createElement(settings.tag_type);
      gallery.classList.add(settings.class_name);
      gallery.classList.add('gallery-cols-' + lists.length);
  
      for (var i = 0; i < lists.length; i++) {
        var item = lists[i];
        var img = item.querySelector('img');
        if (!img) continue;
  
        var figure = document.createElement('figure');
        figure.appendChild(img.cloneNode());
  
        var link = item.querySelector('a');
        if (link) {
          link.appendChild(figure);
          gallery.appendChild(link.cloneNode(true));
        } else {
          gallery.appendChild(figure);
        }
      }
  
      lists[0].parentNode.parentNode.replaceChild(gallery, lists[0].parentNode);
    };
  })();
  