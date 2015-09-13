! function($hx_exports) {
  "use strict";

  function $extend(from, fields) {
    function Inherit() {}
    Inherit.prototype = from;
    var proto = new Inherit;
    for (var name in fields) proto[name] = fields[name];
    return fields.toString !== Object.prototype.toString && (proto.toString = fields.toString), proto
  }

  function $iterator(o) {
    return o instanceof Array ? function() {
      return HxOverrides.iter(o)
    } : "function" == typeof o.iterator ? $bind(o, o.iterator) : o.iterator
  }

  function $bind(o, m) {
    if (null == m) return null;
    null == m.__id__ && (m.__id__ = $fid++);
    var f;
    return null == o.hx__closures__ ? o.hx__closures__ = {} : f = o.hx__closures__[m.__id__], null == f && (f = function() {
      return f.method.apply(f.scope, arguments)
    }, f.scope = o, f.method = m, o.hx__closures__[m.__id__] = f), f
  }
  $hx_exports.openfl = $hx_exports.openfl || {};
  var $hxClasses = {},
    $estr = function() {
      return js.Boot.__string_rec(this, "")
    },
    ApplicationMain = function() {};
  $hxClasses.ApplicationMain = ApplicationMain, ApplicationMain.__name__ = ["ApplicationMain"], ApplicationMain.preloader = null, ApplicationMain.embed = $hx_exports.openfl.embed = function(elementName, width, height, background) {
    var element = null;
    null != elementName && (element = window.document.getElementById(elementName));
    var color = null;
    null != background && (background = StringTools.replace(background, "#", ""), color = Std.parseInt(background.indexOf("0x") > -1 ? background : "0x" + background)), openfl.Lib.create(element, width, height, color), ApplicationMain.preloader = new com.haxepunk.Preloader, openfl.Lib.current.addChild(ApplicationMain.preloader), ApplicationMain.preloader.onInit();
    var id, sounds = [],
      image = new Image;
    id = "graphics/debug/console_debug.png", ApplicationMain.images.set(id, image), image.onload = ApplicationMain.image_onLoad, image.src = id, ApplicationMain.total++;
    var image1 = new Image;
    id = "graphics/debug/console_hidden.png", ApplicationMain.images.set(id, image1), image1.onload = ApplicationMain.image_onLoad, image1.src = id, ApplicationMain.total++;
    var image2 = new Image;
    id = "graphics/debug/console_logo.png", ApplicationMain.images.set(id, image2), image2.onload = ApplicationMain.image_onLoad, image2.src = id, ApplicationMain.total++;
    var image3 = new Image;
    id = "graphics/debug/console_output.png", ApplicationMain.images.set(id, image3), image3.onload = ApplicationMain.image_onLoad, image3.src = id, ApplicationMain.total++;
    var image4 = new Image;
    id = "graphics/debug/console_pause.png", ApplicationMain.images.set(id, image4), image4.onload = ApplicationMain.image_onLoad, image4.src = id, ApplicationMain.total++;
    var image5 = new Image;
    id = "graphics/debug/console_play.png", ApplicationMain.images.set(id, image5), image5.onload = ApplicationMain.image_onLoad, image5.src = id, ApplicationMain.total++;
    var image6 = new Image;
    id = "graphics/debug/console_step.png", ApplicationMain.images.set(id, image6), image6.onload = ApplicationMain.image_onLoad, image6.src = id, ApplicationMain.total++;
    var image7 = new Image;
    id = "graphics/debug/console_visible.png", ApplicationMain.images.set(id, image7), image7.onload = ApplicationMain.image_onLoad, image7.src = id, ApplicationMain.total++;
    var image8 = new Image;
    id = "graphics/preloader/haxepunk.png", ApplicationMain.images.set(id, image8), image8.onload = ApplicationMain.image_onLoad, image8.src = id, ApplicationMain.total++;
    var image9 = new Image;
    id = "font/04B_03__.ttf.png", ApplicationMain.images.set(id, image9), image9.onload = ApplicationMain.image_onLoad, image9.src = id, ApplicationMain.total++;
    var image10 = new Image;
    id = "graphics/clinic.png", ApplicationMain.images.set(id, image10), image10.onload = ApplicationMain.image_onLoad, image10.src = id, ApplicationMain.total++;
    var image11 = new Image;
    if (id = "graphics/persons_72x72.png", ApplicationMain.images.set(id, image11), image11.onload = ApplicationMain.image_onLoad, image11.src = id, ApplicationMain.total++, 0 == ApplicationMain.total) ApplicationMain.start();
    else {
      for (var $it0 = ApplicationMain.urlLoaders.keys(); $it0.hasNext();) {
        var path = $it0.next(),
          urlLoader = ApplicationMain.urlLoaders.get(path);
        urlLoader.addEventListener("complete", ApplicationMain.loader_onComplete), urlLoader.load(new openfl.net.URLRequest(path))
      }
      for (var _g = 0; _g < sounds.length;) {
        var soundName = sounds[_g];
        ++_g;
        var sound = new openfl.media.Sound;
        sound.addEventListener(openfl.events.Event.COMPLETE, ApplicationMain.sound_onComplete), sound.addEventListener(openfl.events.IOErrorEvent.IO_ERROR, ApplicationMain.sound_onIOError), sound.load(new openfl.net.URLRequest(soundName + ".ogg"))
      }
    }
  }, ApplicationMain.main = function() {}, ApplicationMain.start = function() {
    ApplicationMain.preloader.addEventListener(openfl.events.Event.COMPLETE, ApplicationMain.preloader_onComplete), ApplicationMain.preloader.onLoaded()
  }, ApplicationMain.image_onLoad = function() {
    ApplicationMain.assetsLoaded++, ApplicationMain.preloader.onUpdate(ApplicationMain.assetsLoaded, ApplicationMain.total), ApplicationMain.assetsLoaded == ApplicationMain.total && ApplicationMain.start()
  }, ApplicationMain.loader_onComplete = function() {
    ApplicationMain.assetsLoaded++, ApplicationMain.preloader.onUpdate(ApplicationMain.assetsLoaded, ApplicationMain.total), ApplicationMain.assetsLoaded == ApplicationMain.total && ApplicationMain.start()
  }, ApplicationMain.preloader_onComplete = function() {
    ApplicationMain.preloader.removeEventListener(openfl.events.Event.COMPLETE, ApplicationMain.preloader_onComplete), openfl.Lib.current.removeChild(ApplicationMain.preloader), ApplicationMain.preloader = null;
    for (var hasMain = !1, _g = 0, _g1 = Type.getClassFields(Main); _g < _g1.length;) {
      var methodName = _g1[_g];
      if (++_g, "main" == methodName) {
        hasMain = !0;
        break
      }
    }
    if (hasMain) Reflect.callMethod(Main, Reflect.field(Main, "main"), []);
    else {
      var instance = Type.createInstance(DocumentClass, []);
      js.Boot.__instanceof(instance, openfl.display.DisplayObject) ? openfl.Lib.current.addChild(instance) : (haxe.Log.trace("Error: No entry point found", {
        fileName: "ApplicationMain.hx",
        lineNumber: 316,
        className: "ApplicationMain",
        methodName: "preloader_onComplete"
      }), haxe.Log.trace("If you are using DCE with a static main, you may need to @:keep the function", {
        fileName: "ApplicationMain.hx",
        lineNumber: 317,
        className: "ApplicationMain",
        methodName: "preloader_onComplete"
      }))
    }
  }, ApplicationMain.sound_onComplete = function() {
    ApplicationMain.assetsLoaded++, ApplicationMain.preloader.onUpdate(ApplicationMain.assetsLoaded, ApplicationMain.total), ApplicationMain.assetsLoaded == ApplicationMain.total && ApplicationMain.start()
  }, ApplicationMain.sound_onIOError = function() {
    ApplicationMain.assetsLoaded++, ApplicationMain.preloader.onUpdate(ApplicationMain.assetsLoaded, ApplicationMain.total), ApplicationMain.assetsLoaded == ApplicationMain.total && ApplicationMain.start()
  };
  var openfl = {};
  openfl.events = {}, openfl.events.IEventDispatcher = function() {}, $hxClasses["openfl.events.IEventDispatcher"] = openfl.events.IEventDispatcher, openfl.events.IEventDispatcher.__name__ = ["openfl", "events", "IEventDispatcher"], openfl.events.IEventDispatcher.prototype = {
    addEventListener: null,
    dispatchEvent: null,
    hasEventListener: null,
    removeEventListener: null,
    willTrigger: null,
    __class__: openfl.events.IEventDispatcher
  }, openfl.events.EventDispatcher = function(target) {
    null != target && (this.__targetDispatcher = target)
  }, $hxClasses["openfl.events.EventDispatcher"] = openfl.events.EventDispatcher, openfl.events.EventDispatcher.__name__ = ["openfl", "events", "EventDispatcher"], openfl.events.EventDispatcher.__interfaces__ = [openfl.events.IEventDispatcher], openfl.events.EventDispatcher.__sortByPriority = function(l1, l2) {
    return l1.priority == l2.priority ? 0 : l1.priority > l2.priority ? -1 : 1
  }, openfl.events.EventDispatcher.prototype = {
    __targetDispatcher: null,
    __eventMap: null,
    addEventListener: function(type, listener, useCapture, priority, useWeakReference) {
      if (null == useWeakReference && (useWeakReference = !1), null == priority && (priority = 0), null == useCapture && (useCapture = !1), null == this.__eventMap && (this.__eventMap = new haxe.ds.StringMap), this.__eventMap.exists(type)) {
        var list1 = this.__eventMap.get(type);
        list1.push(new openfl.events._EventDispatcher.Listener(listener, useCapture, priority)), list1.sort(openfl.events.EventDispatcher.__sortByPriority)
      } else {
        var list = new Array;
        list.push(new openfl.events._EventDispatcher.Listener(listener, useCapture, priority)), this.__eventMap.set(type, list)
      }
    },
    dispatchEvent: function(event) {
      if (null == this.__eventMap || null == event) return !1;
      var list = this.__eventMap.get(event.type);
      if (null == list) return !1;
      null == event.target && (event.target = null != this.__targetDispatcher ? this.__targetDispatcher : this), event.currentTarget = this;
      for (var listener, capture = 0 == event.eventPhase, index = 0; index < list.length;) {
        if (listener = list[index], listener.useCapture == capture && (listener.callback(event), event.__isCancelledNow)) return !0;
        listener == list[index] && index++
      }
      return !0
    },
    hasEventListener: function(type) {
      return null == this.__eventMap ? !1 : this.__eventMap.exists(type)
    },
    removeEventListener: function(type, listener, capture) {
      if (null == capture && (capture = !1), null != this.__eventMap) {
        var list = this.__eventMap.get(type);
        if (null != list) {
          for (var _g1 = 0, _g = list.length; _g > _g1;) {
            var i = _g1++;
            if (list[i].match(listener, capture)) {
              list.splice(i, 1);
              break
            }
          }
          0 == list.length && this.__eventMap.remove(type), this.__eventMap.iterator().hasNext() || (this.__eventMap = null)
        }
      }
    },
    toString: function() {
      var full = Type.getClassName(Type.getClass(this)),
        $short = full.split(".").pop();
      return "[object " + $short + "]"
    },
    willTrigger: function(type) {
      return this.hasEventListener(type)
    },
    __class__: openfl.events.EventDispatcher
  }, openfl.display = {}, openfl.display.IBitmapDrawable = function() {}, $hxClasses["openfl.display.IBitmapDrawable"] = openfl.display.IBitmapDrawable, openfl.display.IBitmapDrawable.__name__ = ["openfl", "display", "IBitmapDrawable"], openfl.display.IBitmapDrawable.prototype = {
    __worldTransform: null,
    __renderCanvas: null,
    __renderMask: null,
    __updateChildren: null,
    __class__: openfl.display.IBitmapDrawable
  }, openfl.display.DisplayObject = function() {
    openfl.events.EventDispatcher.call(this), this.set_alpha(1), this.set_rotation(0), this.set_scaleX(1), this.set_scaleY(1), this.set_visible(!0), this.set_x(0), this.set_y(0), this.__worldAlpha = 1, this.__worldTransform = new openfl.geom.Matrix, this.set_name("instance" + ++openfl.display.DisplayObject.__instanceCount)
  }, $hxClasses["openfl.display.DisplayObject"] = openfl.display.DisplayObject, openfl.display.DisplayObject.__name__ = ["openfl", "display", "DisplayObject"], openfl.display.DisplayObject.__interfaces__ = [openfl.display.IBitmapDrawable], openfl.display.DisplayObject.__super__ = openfl.events.EventDispatcher, openfl.display.DisplayObject.prototype = $extend(openfl.events.EventDispatcher.prototype, {
    blendMode: null,
    cacheAsBitmap: null,
    loaderInfo: null,
    mouseX: null,
    mouseY: null,
    opaqueBackground: null,
    parent: null,
    root: null,
    scale9Grid: null,
    stage: null,
    __worldTransform: null,
    __alpha: null,
    __filters: null,
    __interactive: null,
    __isMask: null,
    __mask: null,
    __name: null,
    __renderable: null,
    __renderDirty: null,
    __rotation: null,
    __rotationCache: null,
    __rotationCosine: null,
    __rotationSine: null,
    __scaleX: null,
    __scaleY: null,
    __scrollRect: null,
    __style: null,
    __transform: null,
    __transformDirty: null,
    __visible: null,
    __worldAlpha: null,
    __worldAlphaChanged: null,
    __worldClip: null,
    __worldClipChanged: null,
    __worldTransformCache: null,
    __worldTransformChanged: null,
    __worldVisible: null,
    __worldVisibleChanged: null,
    __worldZ: null,
    __x: null,
    __y: null,
    dispatchEvent: function(event) {
      var result = openfl.events.EventDispatcher.prototype.dispatchEvent.call(this, event);
      return event.__isCancelled ? !0 : (event.bubbles && null != this.parent && this.parent != this && (event.eventPhase = 2, this.parent.dispatchEvent(event)), result)
    },
    getBounds: function(targetCoordinateSpace) {
      var matrix = this.__getTransform();
      null != targetCoordinateSpace && (matrix = new openfl.geom.Matrix(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty), matrix.concat(targetCoordinateSpace.__worldTransform.clone().invert()));
      var bounds = new openfl.geom.Rectangle;
      return this.__getBounds(bounds, matrix), bounds
    },
    getRect: function(targetCoordinateSpace) {
      return this.getBounds(targetCoordinateSpace)
    },
    globalToLocal: function(pos) {
      return this.__getTransform().clone().invert().transformPoint(pos)
    },
    hitTestObject: function() {
      return !1
    },
    hitTestPoint: function(x, y, shapeFlag) {
      return null == shapeFlag && (shapeFlag = !1), !1
    },
    localToGlobal: function(point) {
      return this.__getTransform().transformPoint(point)
    },
    __applyStyle: function(renderSession, setTransform, setAlpha, setClip) {
      if (setTransform && this.__worldTransformChanged && this.__style.setProperty(renderSession.transformProperty, this.__worldTransform.to3DString(renderSession.roundPixels), null), this.__worldZ != ++renderSession.z && (this.__worldZ = renderSession.z, this.__style.setProperty("z-index", Std.string(this.__worldZ), null)), setAlpha && this.__worldAlphaChanged && (this.__worldAlpha < 1 ? this.__style.setProperty("opacity", Std.string(this.__worldAlpha), null) : this.__style.removeProperty("opacity")), setClip && this.__worldClipChanged)
        if (null == this.__worldClip) this.__style.removeProperty("clip");
        else {
          var clip = this.__worldClip.transform(this.__worldTransform.clone().invert());
          this.__style.setProperty("clip", "rect(" + clip.y + "px, " + clip.get_right() + "px, " + clip.get_bottom() + "px, " + clip.x + "px)", null)
        }
    },
    __broadcast: function(event) {
      if (null != this.__eventMap && this.hasEventListener(event.type)) {
        var result = openfl.events.EventDispatcher.prototype.dispatchEvent.call(this, event);
        return event.__isCancelled ? !0 : result
      }
      return !1
    },
    __getBounds: function() {},
    __getInteractive: function() {},
    __getLocalBounds: function(rect) {
      this.__getTransform(), this.__getBounds(rect, new openfl.geom.Matrix)
    },
    __getTransform: function() {
      if (openfl.display.DisplayObject.__worldTransformDirty > 0) {
        for (var list = [], current = this, transformDirty = this.__transformDirty; null != current.parent;) list.push(current), current = current.parent, current.__transformDirty && (transformDirty = !0);
        if (transformDirty)
          for (var i = list.length; --i >= 0;) list[i].__update(!0, !1)
      }
      return this.__worldTransform
    },
    __hitTest: function() {
      return !1
    },
    __initializeElement: function(element, renderSession) {
      this.__style = element.style, this.__style.setProperty("position", "absolute", null), this.__style.setProperty("top", "0", null), this.__style.setProperty("left", "0", null), this.__style.setProperty(renderSession.transformOriginProperty, "0 0 0", null), renderSession.element.appendChild(element), this.__worldAlphaChanged = !0, this.__worldClipChanged = !0, this.__worldTransformChanged = !0, this.__worldVisibleChanged = !0, this.__worldZ = -1
    },
    __renderCanvas: function() {},
    __renderDOM: function() {},
    __renderGL: function() {},
    __renderMask: function() {},
    __setStageReference: function(stage) {
      this.stage != stage && (null != this.stage && this.dispatchEvent(new openfl.events.Event(openfl.events.Event.REMOVED_FROM_STAGE, !1, !1)), this.stage = stage, null != stage && this.dispatchEvent(new openfl.events.Event(openfl.events.Event.ADDED_TO_STAGE, !1, !1)))
    },
    __setRenderDirty: function() {
      this.__renderDirty || (this.__renderDirty = !0, openfl.display.DisplayObject.__worldRenderDirty++)
    },
    __setTransformDirty: function() {
      this.__transformDirty || (this.__transformDirty = !0, openfl.display.DisplayObject.__worldTransformDirty++)
    },
    __update: function(transformOnly, updateChildren) {
      if (this.__renderable = this.get_visible() && 0 != this.get_scaleX() && 0 != this.get_scaleY() && !this.__isMask, this.get_rotation() != this.__rotationCache) {
        this.__rotationCache = this.get_rotation();
        var radians = this.get_rotation() * (Math.PI / 180);
        this.__rotationSine = Math.sin(radians), this.__rotationCosine = Math.cos(radians)
      }
      if (null != this.parent) {
        var parentTransform = this.parent.__worldTransform,
          a00 = this.__rotationCosine * this.get_scaleX(),
          a01 = this.__rotationSine * this.get_scaleX(),
          a10 = -this.__rotationSine * this.get_scaleY(),
          a11 = this.__rotationCosine * this.get_scaleY(),
          b00 = parentTransform.a,
          b01 = parentTransform.b,
          b10 = parentTransform.c,
          b11 = parentTransform.d;
        this.__worldTransform.a = a00 * b00 + a01 * b10, this.__worldTransform.b = a00 * b01 + a01 * b11, this.__worldTransform.c = a10 * b00 + a11 * b10, this.__worldTransform.d = a10 * b01 + a11 * b11, null == this.get_scrollRect() ? (this.__worldTransform.tx = this.get_x() * b00 + this.get_y() * b10 + parentTransform.tx, this.__worldTransform.ty = this.get_x() * b01 + this.get_y() * b11 + parentTransform.ty) : (this.__worldTransform.tx = (this.get_x() - this.get_scrollRect().x) * b00 + (this.get_y() - this.get_scrollRect().y) * b10 + parentTransform.tx, this.__worldTransform.ty = (this.get_x() - this.get_scrollRect().x) * b01 + (this.get_y() - this.get_scrollRect().y) * b11 + parentTransform.ty)
      } else this.__worldTransform.a = this.__rotationCosine * this.get_scaleX(), this.__worldTransform.c = -this.__rotationSine * this.get_scaleY(), this.__worldTransform.b = this.__rotationSine * this.get_scaleX(), this.__worldTransform.d = this.__rotationCosine * this.get_scaleY(), null == this.get_scrollRect() ? (this.__worldTransform.tx = this.get_x(), this.__worldTransform.ty = this.get_y()) : (this.__worldTransform.tx = this.get_y() - this.get_scrollRect().x, this.__worldTransform.ty = this.get_y() - this.get_scrollRect().y);
      updateChildren && this.__transformDirty && (this.__transformDirty = !1, openfl.display.DisplayObject.__worldTransformDirty--), transformOnly || (this.__worldAlpha = null != this.parent ? this.get_alpha() * this.parent.__worldAlpha : this.get_alpha(), updateChildren && this.__renderDirty && (this.__renderDirty = !1))
    },
    __updateChildren: function() {
      this.__renderable = this.get_visible() && 0 != this.get_scaleX() && 0 != this.get_scaleY() && !this.__isMask, (this.__renderable || this.__isMask) && (this.__worldAlpha = this.get_alpha(), this.__transformDirty && (this.__transformDirty = !1, openfl.display.DisplayObject.__worldTransformDirty--))
    },
    get_alpha: function() {
      return this.__alpha
    },
    set_alpha: function(value) {
      return value != this.__alpha && (this.__renderDirty || (this.__renderDirty = !0, openfl.display.DisplayObject.__worldRenderDirty++)), this.__alpha = value
    },
    get_filters: function() {
      return null == this.__filters ? new Array : this.__filters.slice()
    },
    set_filters: function(value) {
      return value
    },
    get_height: function() {
      var bounds = new openfl.geom.Rectangle;
      return this.__getTransform(), this.__getBounds(bounds, new openfl.geom.Matrix), bounds.height * this.get_scaleY()
    },
    set_height: function(value) {
      var bounds = new openfl.geom.Rectangle;
      return this.__getTransform(), this.__getBounds(bounds, new openfl.geom.Matrix), this.set_scaleY(value != bounds.height ? value / bounds.height : 1), value
    },
    get_mask: function() {
      return this.__mask
    },
    set_mask: function(value) {
      return value != this.__mask && (this.__renderDirty || (this.__renderDirty = !0, openfl.display.DisplayObject.__worldRenderDirty++)), null != this.__mask && (this.__mask.__isMask = !1), null != value && (value.__isMask = !0), this.__mask = value
    },
    get_mouseX: function() {
      return null != this.stage ? this.globalToLocal(new openfl.geom.Point(this.stage.__mouseX, 0)).x : 0
    },
    get_mouseY: function() {
      return null != this.stage ? this.globalToLocal(new openfl.geom.Point(0, this.stage.__mouseY)).y : 0
    },
    get_name: function() {
      return this.__name
    },
    set_name: function(value) {
      return this.__name = value
    },
    get_root: function() {
      return null != this.stage ? openfl.Lib.current : null
    },
    get_rotation: function() {
      return this.__rotation
    },
    set_rotation: function(value) {
      return value != this.__rotation && (this.__transformDirty || (this.__transformDirty = !0, openfl.display.DisplayObject.__worldTransformDirty++)), this.__rotation = value
    },
    get_scaleX: function() {
      return this.__scaleX
    },
    set_scaleX: function(value) {
      return value != this.__scaleX && (this.__transformDirty || (this.__transformDirty = !0, openfl.display.DisplayObject.__worldTransformDirty++)), this.__scaleX = value
    },
    get_scaleY: function() {
      return this.__scaleY
    },
    set_scaleY: function(value) {
      return this.__scaleY != value && (this.__transformDirty || (this.__transformDirty = !0, openfl.display.DisplayObject.__worldTransformDirty++)), this.__scaleY = value
    },
    get_scrollRect: function() {
      return this.__scrollRect
    },
    set_scrollRect: function(value) {
      return value != this.__scrollRect && (this.__transformDirty || (this.__transformDirty = !0, openfl.display.DisplayObject.__worldTransformDirty++)), this.__scrollRect = value
    },
    get_transform: function() {
      return null == this.__transform && (this.__transform = new openfl.geom.Transform(this)), this.__transform
    },
    set_transform: function(value) {
      if (null == value) throw new openfl.errors.TypeError("Parameter transform must be non-null.");
      return null == this.__transform && (this.__transform = new openfl.geom.Transform(this)), this.__transformDirty || (this.__transformDirty = !0, openfl.display.DisplayObject.__worldTransformDirty++), this.__transform.set_matrix(value.get_matrix().clone()), this.__transform.colorTransform = new openfl.geom.ColorTransform(value.colorTransform.redMultiplier, value.colorTransform.greenMultiplier, value.colorTransform.blueMultiplier, value.colorTransform.alphaMultiplier, value.colorTransform.redOffset, value.colorTransform.greenOffset, value.colorTransform.blueOffset, value.colorTransform.alphaOffset), this.__transform
    },
    get_visible: function() {
      return this.__visible
    },
    set_visible: function(value) {
      return value != this.__visible && (this.__renderDirty || (this.__renderDirty = !0, openfl.display.DisplayObject.__worldRenderDirty++)), this.__visible = value
    },
    get_width: function() {
      var bounds = new openfl.geom.Rectangle;
      return this.__getTransform(), this.__getBounds(bounds, new openfl.geom.Matrix), bounds.width * this.get_scaleX()
    },
    set_width: function(value) {
      var bounds = new openfl.geom.Rectangle;
      return this.__getTransform(), this.__getBounds(bounds, new openfl.geom.Matrix), this.set_scaleX(value != bounds.width ? value / bounds.width : 1), value
    },
    get_x: function() {
      return this.__x
    },
    set_x: function(value) {
      return value != this.__x && (this.__transformDirty || (this.__transformDirty = !0, openfl.display.DisplayObject.__worldTransformDirty++)), this.__x = value
    },
    get_y: function() {
      return this.__y
    },
    set_y: function(value) {
      return value != this.__y && (this.__transformDirty || (this.__transformDirty = !0, openfl.display.DisplayObject.__worldTransformDirty++)), this.__y = value
    },
    __class__: openfl.display.DisplayObject,
    __properties__: {
      set_y: "set_y",
      get_y: "get_y",
      set_x: "set_x",
      get_x: "get_x",
      set_width: "set_width",
      get_width: "get_width",
      set_visible: "set_visible",
      get_visible: "get_visible",
      set_transform: "set_transform",
      get_transform: "get_transform",
      set_scrollRect: "set_scrollRect",
      get_scrollRect: "get_scrollRect",
      set_scaleY: "set_scaleY",
      get_scaleY: "get_scaleY",
      set_scaleX: "set_scaleX",
      get_scaleX: "get_scaleX",
      set_rotation: "set_rotation",
      get_rotation: "get_rotation",
      get_root: "get_root",
      set_name: "set_name",
      get_name: "get_name",
      get_mouseY: "get_mouseY",
      get_mouseX: "get_mouseX",
      set_mask: "set_mask",
      get_mask: "get_mask",
      set_height: "set_height",
      get_height: "get_height",
      set_filters: "set_filters",
      get_filters: "get_filters",
      set_alpha: "set_alpha",
      get_alpha: "get_alpha"
    }
  }), openfl.display.InteractiveObject = function() {
    openfl.display.DisplayObject.call(this), this.doubleClickEnabled = !1, this.mouseEnabled = !0, this.needsSoftKeyboard = !1, this.tabEnabled = !0, this.tabIndex = -1
  }, $hxClasses["openfl.display.InteractiveObject"] = openfl.display.InteractiveObject, openfl.display.InteractiveObject.__name__ = ["openfl", "display", "InteractiveObject"], openfl.display.InteractiveObject.__super__ = openfl.display.DisplayObject, openfl.display.InteractiveObject.prototype = $extend(openfl.display.DisplayObject.prototype, {
    doubleClickEnabled: null,
    focusRect: null,
    mouseEnabled: null,
    needsSoftKeyboard: null,
    softKeyboardInputAreaOfInterest: null,
    tabEnabled: null,
    tabIndex: null,
    requestSoftKeyboard: function() {
      return openfl.Lib.notImplemented("InteractiveObject.requestSoftKeyboard"), !1
    },
    __getInteractive: function(stack) {
      stack.push(this), null != this.parent && this.parent.__getInteractive(stack)
    },
    __class__: openfl.display.InteractiveObject
  }), openfl.display.DisplayObjectContainer = function() {
    openfl.display.InteractiveObject.call(this), this.mouseChildren = !0, this.__children = new Array, this.__removedChildren = new Array
  }, $hxClasses["openfl.display.DisplayObjectContainer"] = openfl.display.DisplayObjectContainer, openfl.display.DisplayObjectContainer.__name__ = ["openfl", "display", "DisplayObjectContainer"], openfl.display.DisplayObjectContainer.__super__ = openfl.display.InteractiveObject, openfl.display.DisplayObjectContainer.prototype = $extend(openfl.display.InteractiveObject.prototype, {
    mouseChildren: null,
    numChildren: null,
    tabChildren: null,
    __children: null,
    __removedChildren: null,
    addChild: function(child) {
      return null != child && (null != child.parent && child.parent.removeChild(child), this.__children.push(child), child.parent = this, null != this.stage && child.__setStageReference(this.stage), child.__transformDirty || (child.__transformDirty = !0, openfl.display.DisplayObject.__worldTransformDirty++), child.__renderDirty || (child.__renderDirty = !0, openfl.display.DisplayObject.__worldRenderDirty++), child.dispatchEvent(new openfl.events.Event(openfl.events.Event.ADDED, !0))), child
    },
    addChildAt: function(child, index) {
      if (index > this.__children.length || 0 > index) throw "Invalid index position " + index;
      return child.parent == this ? HxOverrides.remove(this.__children, child) : (null != child.parent && child.parent.removeChild(child), child.parent = this, null != this.stage && child.__setStageReference(this.stage), child.__transformDirty || (child.__transformDirty = !0, openfl.display.DisplayObject.__worldTransformDirty++), child.__renderDirty || (child.__renderDirty = !0, openfl.display.DisplayObject.__worldRenderDirty++), child.dispatchEvent(new openfl.events.Event(openfl.events.Event.ADDED, !0))), this.__children.splice(index, 0, child), child
    },
    areInaccessibleObjectsUnderPoint: function() {
      return !1
    },
    contains: function(child) {
      return HxOverrides.indexOf(this.__children, child, 0) > -1
    },
    getChildAt: function(index) {
      return index >= 0 && index < this.__children.length ? this.__children[index] : null
    },
    getChildByName: function(name) {
      for (var _g = 0, _g1 = this.__children; _g < _g1.length;) {
        var child = _g1[_g];
        if (++_g, child.get_name() == name) return child
      }
      return null
    },
    getChildIndex: function(child) {
      for (var _g1 = 0, _g = this.__children.length; _g > _g1;) {
        var i = _g1++;
        if (this.__children[i] == child) return i
      }
      return -1
    },
    getObjectsUnderPoint: function(point) {
      point = this.localToGlobal(point);
      var stack = new Array;
      return this.__hitTest(point.x, point.y, !1, stack, !1), stack.shift(), stack
    },
    removeChild: function(child) {
      return null != child && child.parent == this && (null != this.stage && child.__setStageReference(null), child.parent = null, HxOverrides.remove(this.__children, child), this.__removedChildren.push(child), child.__transformDirty || (child.__transformDirty = !0, openfl.display.DisplayObject.__worldTransformDirty++), child.__renderDirty || (child.__renderDirty = !0, openfl.display.DisplayObject.__worldRenderDirty++), child.dispatchEvent(new openfl.events.Event(openfl.events.Event.REMOVED, !0))), child
    },
    removeChildAt: function(index) {
      return index >= 0 && index < this.__children.length ? this.removeChild(this.__children[index]) : null
    },
    removeChildren: function(beginIndex, endIndex) {
      if (null == endIndex && (endIndex = 2147483647), null == beginIndex && (beginIndex = 0), !(2147483647 == endIndex && (endIndex = this.__children.length - 1, 0 > endIndex) || beginIndex > this.__children.length - 1)) {
        if (beginIndex > endIndex || 0 > beginIndex || endIndex > this.__children.length) throw new openfl.errors.RangeError("The supplied index is out of bounds.");
        for (var numRemovals = endIndex - beginIndex; numRemovals >= 0;) this.removeChildAt(beginIndex), numRemovals--
      }
    },
    setChildIndex: function(child, index) {
      index >= 0 && index <= this.__children.length && child.parent == this && (HxOverrides.remove(this.__children, child), this.__children.splice(index, 0, child))
    },
    swapChildren: function(child1, child2) {
      if (child1.parent == this && child2.parent == this) {
        var index1 = HxOverrides.indexOf(this.__children, child1, 0),
          index2 = HxOverrides.indexOf(this.__children, child2, 0);
        this.__children[index1] = child2, this.__children[index2] = child1
      }
    },
    swapChildrenAt: function(child1, child2) {
      var swap = this.__children[child1];
      this.__children[child1] = this.__children[child2], this.__children[child2] = swap, swap = null
    },
    __broadcast: function(event, notifyChilden) {
      if (null == event.target && (event.target = this), notifyChilden)
        for (var _g = 0, _g1 = this.__children; _g < _g1.length;) {
          var child = _g1[_g];
          if (++_g, child.__broadcast(event, !0), event.__isCancelled) return !0
        }
      return openfl.display.InteractiveObject.prototype.__broadcast.call(this, event, notifyChilden)
    },
    __getBounds: function(rect, matrix) {
      if (0 != this.__children.length) {
        var matrixCache = null;
        null != matrix && (matrixCache = this.__worldTransform, this.__worldTransform = matrix, this.__updateChildren(!0));
        for (var _g = 0, _g1 = this.__children; _g < _g1.length;) {
          var child = _g1[_g];
          ++_g, child.__renderable && child.__getBounds(rect, null)
        }
        null != matrix && (this.__worldTransform = matrixCache, this.__updateChildren(!0))
      }
    },
    __hitTest: function(x, y, shapeFlag, stack, interactiveOnly) {
      if (!this.get_visible() || interactiveOnly && !this.mouseEnabled) return !1;
      var i = this.__children.length;
      if (!interactiveOnly || null != stack && this.mouseChildren) {
        if (null != stack)
          for (var length = stack.length; --i >= 0;)
            if (this.__children[i].__hitTest(x, y, shapeFlag, stack, interactiveOnly)) return stack.splice(length, 0, this), !0
      } else
        for (; --i >= 0;)
          if (this.__children[i].__hitTest(x, y, shapeFlag, null, interactiveOnly)) return null != stack && stack.push(this), !0;
      return !1
    },
    __renderCanvas: function(renderSession) {
      if (this.__renderable && !(this.__worldAlpha <= 0)) {
        null != this.get_scrollRect() && renderSession.maskManager.pushRect(this.get_scrollRect(), this.__worldTransform), null != this.__mask && renderSession.maskManager.pushMask(this.__mask);
        for (var _g = 0, _g1 = this.__children; _g < _g1.length;) {
          var child = _g1[_g];
          ++_g, child.__renderCanvas(renderSession)
        }
        this.__removedChildren = [], null != this.__mask && renderSession.maskManager.popMask(), null != this.get_scrollRect() && renderSession.maskManager.popMask()
      }
    },
    __renderDOM: function(renderSession) {
      for (var _g = 0, _g1 = this.__children; _g < _g1.length;) {
        var child = _g1[_g];
        ++_g, child.__renderDOM(renderSession)
      }
      for (var _g2 = 0, _g11 = this.__removedChildren; _g2 < _g11.length;) {
        var orphan = _g11[_g2];
        ++_g2, null == orphan.stage && orphan.__renderDOM(renderSession)
      }
      this.__removedChildren = []
    },
    __renderGL: function(renderSession) {
      if (this.__renderable && !(this.__worldAlpha <= 0)) {
        for (var _g = 0, _g1 = this.__children; _g < _g1.length;) {
          var child = _g1[_g];
          ++_g, child.__renderGL(renderSession)
        }
        this.__removedChildren = []
      }
    },
    __renderMask: function(renderSession) {
      var bounds = new openfl.geom.Rectangle;
      this.__getTransform(), this.__getBounds(bounds, new openfl.geom.Matrix), renderSession.context.rect(0, 0, bounds.width, bounds.height)
    },
    __setStageReference: function(stage) {
      if (this.stage != stage) {
        null != this.stage && this.dispatchEvent(new openfl.events.Event(openfl.events.Event.REMOVED_FROM_STAGE, !1, !1)), this.stage = stage, null != stage && this.dispatchEvent(new openfl.events.Event(openfl.events.Event.ADDED_TO_STAGE, !1, !1));
        for (var _g = 0, _g1 = this.__children; _g < _g1.length;) {
          var child = _g1[_g];
          ++_g, child.__setStageReference(stage)
        }
      }
    },
    __update: function(transformOnly, updateChildren) {
      if (openfl.display.InteractiveObject.prototype.__update.call(this, transformOnly, updateChildren), this.__renderable && updateChildren)
        for (var _g = 0, _g1 = this.__children; _g < _g1.length;) {
          var child = _g1[_g];
          ++_g, child.__update(transformOnly, !0)
        }
    },
    __updateChildren: function(transformOnly) {
      openfl.display.InteractiveObject.prototype.__updateChildren.call(this, transformOnly);
      for (var _g = 0, _g1 = this.__children; _g < _g1.length;) {
        var child = _g1[_g];
        ++_g, child.__update(transformOnly, !0)
      }
    },
    get_numChildren: function() {
      return this.__children.length
    },
    __class__: openfl.display.DisplayObjectContainer,
    __properties__: $extend(openfl.display.InteractiveObject.prototype.__properties__, {
      get_numChildren: "get_numChildren"
    })
  }), openfl.display.Sprite = function() {
    openfl.display.DisplayObjectContainer.call(this), this.buttonMode = !1, this.useHandCursor = !0
  }, $hxClasses["openfl.display.Sprite"] = openfl.display.Sprite, openfl.display.Sprite.__name__ = ["openfl", "display", "Sprite"], openfl.display.Sprite.__super__ = openfl.display.DisplayObjectContainer, openfl.display.Sprite.prototype = $extend(openfl.display.DisplayObjectContainer.prototype, {
    buttonMode: null,
    graphics: null,
    useHandCursor: null,
    __canvas: null,
    __canvasContext: null,
    __graphics: null,
    startDrag: function(lockCenter, bounds) {
      null == lockCenter && (lockCenter = !1), null != this.stage && this.stage.__startDrag(this, lockCenter, bounds)
    },
    stopDrag: function() {
      null != this.stage && this.stage.__stopDrag(this)
    },
    __getBounds: function(rect, matrix) {
      openfl.display.DisplayObjectContainer.prototype.__getBounds.call(this, rect, matrix), null != this.__graphics && this.__graphics.__getBounds(rect, null != matrix ? matrix : this.__worldTransform)
    },
    __hitTest: function(x, y, shapeFlag, stack, interactiveOnly) {
      if (!this.get_visible() || interactiveOnly && !this.mouseEnabled) return !1;
      var length = 0;
      return null != stack && (length = stack.length), openfl.display.DisplayObjectContainer.prototype.__hitTest.call(this, x, y, shapeFlag, stack, interactiveOnly) ? !0 : null != this.__graphics && this.__graphics.__hitTest(x, y, shapeFlag, this.__worldTransform) ? (null != stack && stack.splice(length, 0, this), !0) : !1
    },
    __renderCanvas: function(renderSession) {
      if (this.__renderable && !(this.__worldAlpha <= 0)) {
        if (null != this.__graphics && (this.__graphics.__render(), null != this.__graphics.__canvas)) {
          null != this.__mask && renderSession.maskManager.pushMask(this.__mask);
          var context = renderSession.context;
          context.globalAlpha = this.__worldAlpha;
          var transform = this.__worldTransform;
          renderSession.roundPixels ? context.setTransform(transform.a, transform.b, transform.c, transform.d, 0 | transform.tx, 0 | transform.ty) : context.setTransform(transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty), null == this.get_scrollRect() ? context.drawImage(this.__graphics.__canvas, this.__graphics.__bounds.x, this.__graphics.__bounds.y) : context.drawImage(this.__graphics.__canvas, this.get_scrollRect().x - this.__graphics.__bounds.x, this.get_scrollRect().y - this.__graphics.__bounds.y, this.get_scrollRect().width, this.get_scrollRect().height, this.__graphics.__bounds.x + this.get_scrollRect().x, this.__graphics.__bounds.y + this.get_scrollRect().y, this.get_scrollRect().width, this.get_scrollRect().height), null != this.__mask && renderSession.maskManager.popMask()
        }
        openfl.display.DisplayObjectContainer.prototype.__renderCanvas.call(this, renderSession)
      }
    },
    __renderDOM: function(renderSession) {
      if (null != this.stage && this.__worldVisible && this.__renderable && null != this.__graphics) {
        if ((this.__graphics.__dirty || this.__worldAlphaChanged || null == this.__canvas && null != this.__graphics.__canvas) && (this.__graphics.__render(), null != this.__graphics.__canvas ? (null == this.__canvas && (this.__canvas = window.document.createElement("canvas"), this.__canvasContext = this.__canvas.getContext("2d"), this.__initializeElement(this.__canvas, renderSession)), this.__canvas.width = this.__graphics.__canvas.width, this.__canvas.height = this.__graphics.__canvas.height, this.__canvasContext.globalAlpha = this.__worldAlpha, this.__canvasContext.drawImage(this.__graphics.__canvas, 0, 0)) : null != this.__canvas && (renderSession.element.removeChild(this.__canvas), this.__canvas = null, this.__style = null)), null != this.__canvas) {
          if (this.__worldTransformChanged) {
            var transform = new openfl.geom.Matrix;
            transform.translate(this.__graphics.__bounds.x, this.__graphics.__bounds.y), transform = transform.mult(this.__worldTransform), this.__style.setProperty(renderSession.transformProperty, renderSession.roundPixels ? "matrix3d(" + transform.a + ", " + transform.b + ", 0, 0, " + transform.c + ", " + transform.d + ", 0, 0, 0, 0, 1, 0, " + (0 | transform.tx) + ", " + (0 | transform.ty) + ", 0, 1)" : "matrix3d(" + transform.a + ", " + transform.b + ", 0, 0, " + transform.c + ", " + transform.d + ", 0, 0, 0, 0, 1, 0, " + transform.tx + ", " + transform.ty + ", 0, 1)", null)
          }
          this.__applyStyle(renderSession, !1, !1, !0)
        }
      } else null != this.__canvas && (renderSession.element.removeChild(this.__canvas), this.__canvas = null, this.__style = null);
      openfl.display.DisplayObjectContainer.prototype.__renderDOM.call(this, renderSession)
    },
    __renderMask: function(renderSession) {
      null != this.__graphics ? this.__graphics.__renderMask(renderSession) : openfl.display.DisplayObjectContainer.prototype.__renderMask.call(this, renderSession)
    },
    get_graphics: function() {
      return null == this.__graphics && (this.__graphics = new openfl.display.Graphics), this.__graphics
    },
    __class__: openfl.display.Sprite,
    __properties__: $extend(openfl.display.DisplayObjectContainer.prototype.__properties__, {
      get_graphics: "get_graphics"
    })
  });
  var com = {};
  com.haxepunk = {}, com.haxepunk.Engine = function(width, height, frameRate, fixed, renderMode) {
    null == fixed && (fixed = !1), null == frameRate && (frameRate = 60), null == height && (height = 0), null == width && (width = 0), this._scenes = new List, this._scene = new com.haxepunk.Scene, openfl.display.Sprite.call(this), com.haxepunk.HXP.bounds = new openfl.geom.Rectangle(0, 0, width, height), com.haxepunk.HXP.assignedFrameRate = frameRate, com.haxepunk.HXP.fixed = fixed, com.haxepunk.HXP.engine = this, com.haxepunk.HXP.width = width, com.haxepunk.HXP.height = height, null != renderMode ? (com.haxepunk.HXP.renderMode = renderMode, null == com.haxepunk.HXP.screen ? com.haxepunk.HXP.screen = new com.haxepunk.Screen : com.haxepunk.HXP.screen.init()) : com.haxepunk.HXP.set_renderMode(com.haxepunk.RenderMode.BUFFER), 0 == com.haxepunk.HXP.randomSeed && com.haxepunk.HXP.set_randomSeed(Std["int"](2147483647 * Math.random())), com.haxepunk.HXP.entity = new com.haxepunk.Entity, com.haxepunk.HXP.set_time(openfl.Lib.getTimer()), this.paused = !1, this.maxElapsed = .0333, this.maxFrameSkip = 5, this.tickRate = 4, this._frameList = new Array, this._systemTime = this._delta = this._frameListSum = 0, this._frameLast = 0, this.addEventListener(openfl.events.Event.ADDED_TO_STAGE, $bind(this, this.onStage)), openfl.Lib.current.addChild(this)
  }, $hxClasses["com.haxepunk.Engine"] = com.haxepunk.Engine, com.haxepunk.Engine.__name__ = ["com", "haxepunk", "Engine"], com.haxepunk.Engine.__super__ = openfl.display.Sprite, com.haxepunk.Engine.prototype = $extend(openfl.display.Sprite.prototype, {
    paused: null,
    maxElapsed: null,
    maxFrameSkip: null,
    tickRate: null,
    init: function() {},
    focusGained: function() {},
    focusLost: function() {},
    update: function() {
      this._scene.updateLists(), null == this._scene || this._scenes.isEmpty() || this._scenes.first() == this._scene || (this._scene.end(), this._scene.updateLists(), this._scene.autoClear && this._scene.get_hasTween() && this._scene.clearTweens(), this.contains(this._scene.sprite) && this.removeChild(this._scene.sprite), this._scene = this._scenes.first(), this.addChild(this._scene.sprite), com.haxepunk.HXP.camera = this._scene.camera, this._scene.updateLists(), this._scene.begin(), this._scene.updateLists()), com.haxepunk.HXP.tweener.active && com.haxepunk.HXP.tweener.get_hasTween() && com.haxepunk.HXP.tweener.updateTweens(), this._scene.active && (this._scene.get_hasTween() && this._scene.updateTweens(), this._scene.update()), this._scene.updateLists(!1), com.haxepunk.HXP.screen.update()
    },
    render: function() {
      com.haxepunk.HXP.screen.needsResize && com.haxepunk.HXP.resize(com.haxepunk.HXP.windowWidth, com.haxepunk.HXP.windowHeight);
      var t = openfl.Lib.getTimer();
      0 == this._frameLast && (this._frameLast = 0 | t), com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.BUFFER && (com.haxepunk.HXP.screen.swap(), com.haxepunk.HXP.screen.refresh()), com.haxepunk.utils.Draw.resetTarget(), this._scene.visible && this._scene.render(), com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.BUFFER && com.haxepunk.HXP.screen.redraw(), t = openfl.Lib.getTimer(), this._frameListSum += this._frameList[this._frameList.length] = t - this._frameLast | 0, this._frameList.length > 10 && (this._frameListSum -= this._frameList.shift()), com.haxepunk.HXP.frameRate = 1e3 / (this._frameListSum / this._frameList.length), this._frameLast = t
    },
    setStageProperties: function() {
      var _g = this;
      com.haxepunk.HXP.stage.frameRate = com.haxepunk.HXP.assignedFrameRate, com.haxepunk.HXP.stage.align = openfl.display.StageAlign.TOP_LEFT, com.haxepunk.HXP.stage.scaleMode = openfl.display.StageScaleMode.NO_SCALE, com.haxepunk.HXP.stage.set_displayState(openfl.display.StageDisplayState.NORMAL), com.haxepunk.HXP.windowWidth = com.haxepunk.HXP.stage.stageWidth, com.haxepunk.HXP.windowHeight = com.haxepunk.HXP.stage.stageHeight, this.resize(), com.haxepunk.HXP.stage.addEventListener(openfl.events.Event.RESIZE, function() {
        _g.resize()
      }), com.haxepunk.HXP.stage.addEventListener(openfl.events.Event.ACTIVATE, function() {
        com.haxepunk.HXP.focused = !0, _g.focusGained(), _g._scene.focusGained()
      }), com.haxepunk.HXP.stage.addEventListener(openfl.events.Event.DEACTIVATE, function() {
        com.haxepunk.HXP.focused = !1, _g.focusLost(), _g._scene.focusLost()
      })
    },
    resize: function() {
      0 == com.haxepunk.HXP.width && (com.haxepunk.HXP.width = com.haxepunk.HXP.stage.stageWidth), 0 == com.haxepunk.HXP.height && (com.haxepunk.HXP.height = com.haxepunk.HXP.stage.stageHeight), com.haxepunk.HXP.windowWidth = com.haxepunk.HXP.stage.stageWidth, com.haxepunk.HXP.windowHeight = com.haxepunk.HXP.stage.stageHeight, com.haxepunk.HXP.screen.set_scaleX(com.haxepunk.HXP.stage.stageWidth / com.haxepunk.HXP.width), com.haxepunk.HXP.screen.set_scaleY(com.haxepunk.HXP.stage.stageHeight / com.haxepunk.HXP.height), com.haxepunk.HXP.resize(com.haxepunk.HXP.stage.stageWidth, com.haxepunk.HXP.stage.stageHeight)
    },
    onStage: function() {
      this.removeEventListener(openfl.events.Event.ADDED_TO_STAGE, $bind(this, this.onStage)), com.haxepunk.HXP.stage = this.stage, this.setStageProperties(), com.haxepunk.utils.Input.enable(), null == this._scene || this._scenes.isEmpty() || this._scenes.first() == this._scene || (this._scene.end(), this._scene.updateLists(), this._scene.autoClear && this._scene.get_hasTween() && this._scene.clearTweens(), this.contains(this._scene.sprite) && this.removeChild(this._scene.sprite), this._scene = this._scenes.first(), this.addChild(this._scene.sprite), com.haxepunk.HXP.camera = this._scene.camera, this._scene.updateLists(), this._scene.begin(), this._scene.updateLists()), com.haxepunk.utils.Draw.init(), this.init(), this._rate = 1e3 / com.haxepunk.HXP.assignedFrameRate, com.haxepunk.HXP.fixed ? (this._skip = this._rate * (this.maxFrameSkip + 1), this._last = this._prev = openfl.Lib.getTimer(), this._timer = new haxe.Timer(this.tickRate), this._timer.run = $bind(this, this.onTimer)) : (this._last = openfl.Lib.getTimer(), this.addEventListener(openfl.events.Event.ENTER_FRAME, $bind(this, this.onEnterFrame))), com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.BUFFER || function() {
          var $r;
          return null == com.haxepunk.HXP._console && (com.haxepunk.HXP._console = new com.haxepunk.debug.Console), $r = com.haxepunk.HXP._console
        }(this).log(["Warning: Using RenderMode.HARDWARE on flash/html5 target may result in corrupt graphics"]),
        function() {
          var $r;
          return null == com.haxepunk.HXP._console && (com.haxepunk.HXP._console = new com.haxepunk.debug.Console), $r = com.haxepunk.HXP._console
        }(this).log(["Warning: the HTML 5 target is currently experimental"])
    },
    onEnterFrame: function() {
      this._time = this._gameTime = openfl.Lib.getTimer(), com.haxepunk.HXP._systemTime = this._time - this._systemTime, this._updateTime = this._time, com.haxepunk.HXP.elapsed = (this._time - this._last) / 1e3, com.haxepunk.HXP.elapsed > this.maxElapsed && (com.haxepunk.HXP.elapsed = this.maxElapsed), com.haxepunk.HXP.elapsed *= com.haxepunk.HXP.rate, this._last = this._time, this.paused || this.update(), com.haxepunk.HXP.consoleEnabled() && function() {
        var $r;
        return null == com.haxepunk.HXP._console && (com.haxepunk.HXP._console = new com.haxepunk.debug.Console), $r = com.haxepunk.HXP._console
      }(this).update(), com.haxepunk.utils.Input.update(), this._time = this._renderTime = openfl.Lib.getTimer(), com.haxepunk.HXP._updateTime = this._time - this._updateTime, this.paused ? this._frameLast = this._time : this.render(), this._time = this._systemTime = openfl.Lib.getTimer(), com.haxepunk.HXP._renderTime = this._time - this._renderTime, com.haxepunk.HXP._gameTime = this._time - this._gameTime
    },
    onTimer: function() {
      if (this._time = openfl.Lib.getTimer(), this._delta += this._time - this._last, this._last = this._time, !(this._delta < this._rate)) {
        for (this._gameTime = 0 | this._time, com.haxepunk.HXP._systemTime = this._time - this._systemTime, this._delta > this._skip && (this._delta = this._skip); this._delta >= this._rate;) com.haxepunk.HXP.elapsed = this._rate * com.haxepunk.HXP.rate * .001, this._updateTime = this._time, this._delta -= this._rate, this._prev = this._time, this.paused || this.update(), com.haxepunk.HXP.consoleEnabled() && function() {
          var $r;
          return null == com.haxepunk.HXP._console && (com.haxepunk.HXP._console = new com.haxepunk.debug.Console), $r = com.haxepunk.HXP._console
        }(this).update(), com.haxepunk.utils.Input.update(), this._time = openfl.Lib.getTimer(), com.haxepunk.HXP._updateTime = this._time - this._updateTime;
        this._renderTime = this._time, this.paused || this.render(), this._time = this._systemTime = openfl.Lib.getTimer(), com.haxepunk.HXP._renderTime = this._time - this._renderTime, com.haxepunk.HXP._gameTime = this._time - this._gameTime
      }
    },
    checkScene: function() {
      null == this._scene || this._scenes.isEmpty() || this._scenes.first() == this._scene || (this._scene.end(), this._scene.updateLists(), this._scene.autoClear && this._scene.get_hasTween() && this._scene.clearTweens(), this.contains(this._scene.sprite) && this.removeChild(this._scene.sprite), this._scene = this._scenes.first(), this.addChild(this._scene.sprite), com.haxepunk.HXP.camera = this._scene.camera, this._scene.updateLists(), this._scene.begin(), this._scene.updateLists())
    },
    pushScene: function(value) {
      this._scenes.push(value)
    },
    popScene: function() {
      return this._scenes.pop()
    },
    get_scene: function() {
      return this._scene
    },
    set_scene: function(value) {
      return this._scene == value ? value : (this._scenes.length > 0 && this._scenes.pop(), this._scenes.push(value), this._scene)
    },
    _scene: null,
    _scenes: null,
    _delta: null,
    _time: null,
    _last: null,
    _timer: null,
    _rate: null,
    _skip: null,
    _prev: null,
    _updateTime: null,
    _renderTime: null,
    _gameTime: null,
    _systemTime: null,
    _frameLast: null,
    _frameListSum: null,
    _frameList: null,
    __class__: com.haxepunk.Engine,
    __properties__: $extend(openfl.display.Sprite.prototype.__properties__, {
      set_scene: "set_scene",
      get_scene: "get_scene"
    })
  });
  var Main = function(width, height, frameRate, fixed, renderMode) {
    com.haxepunk.Engine.call(this, width, height, frameRate, fixed, renderMode)
  };
  $hxClasses.Main = Main, Main.__name__ = ["Main"], Main.main = function() {
    new Main
  }, Main.__super__ = com.haxepunk.Engine, Main.prototype = $extend(com.haxepunk.Engine.prototype, {
    init: function() {
      com.haxepunk.HXP.set_scene(new MainScene)
    },
    __class__: Main
  });
  var DocumentClass = function() {
    this.stage = openfl.Lib.current.stage, Main.call(this), this.dispatchEvent(new openfl.events.Event(openfl.events.Event.ADDED_TO_STAGE, !1, !1))
  };
  $hxClasses.DocumentClass = DocumentClass, DocumentClass.__name__ = ["DocumentClass"], DocumentClass.__super__ = Main, DocumentClass.prototype = $extend(Main.prototype, {
    __class__: DocumentClass
  });
  var BloodType = $hxClasses.BloodType = {
    __ename__: !0,
    __constructs__: ["AB_POS", "AB_NEG", "A_POS", "A_NEG", "B_POS", "B_NEG", "O_POS", "O_NEG"]
  };
  BloodType.AB_POS = ["AB_POS", 0], BloodType.AB_POS.toString = $estr, BloodType.AB_POS.__enum__ = BloodType, BloodType.AB_NEG = ["AB_NEG", 1], BloodType.AB_NEG.toString = $estr, BloodType.AB_NEG.__enum__ = BloodType, BloodType.A_POS = ["A_POS", 2], BloodType.A_POS.toString = $estr, BloodType.A_POS.__enum__ = BloodType, BloodType.A_NEG = ["A_NEG", 3], BloodType.A_NEG.toString = $estr, BloodType.A_NEG.__enum__ = BloodType, BloodType.B_POS = ["B_POS", 4], BloodType.B_POS.toString = $estr, BloodType.B_POS.__enum__ = BloodType, BloodType.B_NEG = ["B_NEG", 5], BloodType.B_NEG.toString = $estr, BloodType.B_NEG.__enum__ = BloodType, BloodType.O_POS = ["O_POS", 6], BloodType.O_POS.toString = $estr, BloodType.O_POS.__enum__ = BloodType, BloodType.O_NEG = ["O_NEG", 7], BloodType.O_NEG.toString = $estr, BloodType.O_NEG.__enum__ = BloodType, BloodType.__empty_constructs__ = [BloodType.AB_POS, BloodType.AB_NEG, BloodType.A_POS, BloodType.A_NEG, BloodType.B_POS, BloodType.B_NEG, BloodType.O_POS, BloodType.O_NEG];
  var BloodTypeTools = function() {};
  $hxClasses.BloodTypeTools = BloodTypeTools, BloodTypeTools.__name__ = ["BloodTypeTools"], BloodTypeTools.__properties__ = {
    get_blood_map: "get_blood_map"
  }, BloodTypeTools.toLabel = function(blood_type) {
    switch (blood_type[1]) {
      case 0:
        return "ab+";
      case 1:
        return "ab-";
      case 2:
        return "a+";
      case 3:
        return "a-";
      case 4:
        return "b+";
      case 5:
        return "b-";
      case 6:
        return "o+";
      case 7:
        return "o-"
    }
  }, BloodTypeTools.blood_map = null, BloodTypeTools.map = null, BloodTypeTools.get_blood_map = function() {
    if (null == BloodTypeTools.map) {
      BloodTypeTools.map = new haxe.ds.EnumValueMap;
      var v = new haxe.ds.EnumValueMap;
      BloodTypeTools.map.set(BloodType.AB_POS, v);
      var v1 = new haxe.ds.EnumValueMap;
      BloodTypeTools.map.set(BloodType.AB_NEG, v1);
      var v2 = new haxe.ds.EnumValueMap;
      BloodTypeTools.map.set(BloodType.A_POS, v2);
      var v3 = new haxe.ds.EnumValueMap;
      BloodTypeTools.map.set(BloodType.A_NEG, v3);
      var v4 = new haxe.ds.EnumValueMap;
      BloodTypeTools.map.set(BloodType.B_POS, v4);
      var v5 = new haxe.ds.EnumValueMap;
      BloodTypeTools.map.set(BloodType.B_NEG, v5);
      var v6 = new haxe.ds.EnumValueMap;
      BloodTypeTools.map.set(BloodType.O_POS, v6);
      var v7 = new haxe.ds.EnumValueMap;
      BloodTypeTools.map.set(BloodType.O_NEG, v7);
      var this1 = BloodTypeTools.map.get(BloodType.AB_POS);
      this1.set(BloodType.AB_POS, !0);
      var this2 = BloodTypeTools.map.get(BloodType.AB_POS);
      this2.set(BloodType.AB_NEG, !0);
      var this3 = BloodTypeTools.map.get(BloodType.AB_POS);
      this3.set(BloodType.A_POS, !0);
      var this4 = BloodTypeTools.map.get(BloodType.AB_POS);
      this4.set(BloodType.A_NEG, !0);
      var this5 = BloodTypeTools.map.get(BloodType.AB_POS);
      this5.set(BloodType.B_POS, !0);
      var this6 = BloodTypeTools.map.get(BloodType.AB_POS);
      this6.set(BloodType.B_NEG, !0);
      var this7 = BloodTypeTools.map.get(BloodType.AB_POS);
      this7.set(BloodType.O_POS, !0);
      var this8 = BloodTypeTools.map.get(BloodType.AB_POS);
      this8.set(BloodType.O_NEG, !0);
      var this9 = BloodTypeTools.map.get(BloodType.AB_NEG);
      this9.set(BloodType.AB_POS, !1);
      var this10 = BloodTypeTools.map.get(BloodType.AB_NEG);
      this10.set(BloodType.AB_NEG, !0);
      var this11 = BloodTypeTools.map.get(BloodType.AB_NEG);
      this11.set(BloodType.A_POS, !1);
      var this12 = BloodTypeTools.map.get(BloodType.AB_NEG);
      this12.set(BloodType.A_NEG, !0);
      var this13 = BloodTypeTools.map.get(BloodType.AB_NEG);
      this13.set(BloodType.B_POS, !1);
      var this14 = BloodTypeTools.map.get(BloodType.AB_NEG);
      this14.set(BloodType.B_NEG, !0);
      var this15 = BloodTypeTools.map.get(BloodType.AB_NEG);
      this15.set(BloodType.O_POS, !1);
      var this16 = BloodTypeTools.map.get(BloodType.AB_NEG);
      this16.set(BloodType.O_NEG, !0);
      var this17 = BloodTypeTools.map.get(BloodType.A_POS);
      this17.set(BloodType.AB_POS, !1);
      var this18 = BloodTypeTools.map.get(BloodType.A_POS);
      this18.set(BloodType.AB_NEG, !1);
      var this19 = BloodTypeTools.map.get(BloodType.A_POS);
      this19.set(BloodType.A_POS, !0);
      var this20 = BloodTypeTools.map.get(BloodType.A_POS);
      this20.set(BloodType.A_NEG, !0);
      var this21 = BloodTypeTools.map.get(BloodType.A_POS);
      this21.set(BloodType.B_POS, !1);
      var this22 = BloodTypeTools.map.get(BloodType.A_POS);
      this22.set(BloodType.B_NEG, !1);
      var this23 = BloodTypeTools.map.get(BloodType.A_POS);
      this23.set(BloodType.O_POS, !0);
      var this24 = BloodTypeTools.map.get(BloodType.A_POS);
      this24.set(BloodType.O_NEG, !0);
      var this25 = BloodTypeTools.map.get(BloodType.A_NEG);
      this25.set(BloodType.AB_POS, !1);
      var this26 = BloodTypeTools.map.get(BloodType.A_NEG);
      this26.set(BloodType.AB_NEG, !1);
      var this27 = BloodTypeTools.map.get(BloodType.A_NEG);
      this27.set(BloodType.A_POS, !1);
      var this28 = BloodTypeTools.map.get(BloodType.A_NEG);
      this28.set(BloodType.A_NEG, !0);
      var this29 = BloodTypeTools.map.get(BloodType.A_NEG);
      this29.set(BloodType.B_POS, !1);
      var this30 = BloodTypeTools.map.get(BloodType.A_NEG);
      this30.set(BloodType.B_NEG, !1);
      var this31 = BloodTypeTools.map.get(BloodType.A_NEG);
      this31.set(BloodType.O_POS, !1);
      var this32 = BloodTypeTools.map.get(BloodType.A_NEG);
      this32.set(BloodType.O_NEG, !0);
      var this33 = BloodTypeTools.map.get(BloodType.B_POS);
      this33.set(BloodType.AB_POS, !1);
      var this34 = BloodTypeTools.map.get(BloodType.B_POS);
      this34.set(BloodType.AB_NEG, !1);
      var this35 = BloodTypeTools.map.get(BloodType.B_POS);
      this35.set(BloodType.A_POS, !1);
      var this36 = BloodTypeTools.map.get(BloodType.B_POS);
      this36.set(BloodType.A_NEG, !1);
      var this37 = BloodTypeTools.map.get(BloodType.B_POS);
      this37.set(BloodType.B_POS, !0);
      var this38 = BloodTypeTools.map.get(BloodType.B_POS);
      this38.set(BloodType.B_NEG, !0);
      var this39 = BloodTypeTools.map.get(BloodType.B_POS);
      this39.set(BloodType.O_POS, !0);
      var this40 = BloodTypeTools.map.get(BloodType.B_POS);
      this40.set(BloodType.O_NEG, !0);
      var this41 = BloodTypeTools.map.get(BloodType.B_NEG);
      this41.set(BloodType.AB_POS, !1);
      var this42 = BloodTypeTools.map.get(BloodType.B_NEG);
      this42.set(BloodType.AB_NEG, !1);
      var this43 = BloodTypeTools.map.get(BloodType.B_NEG);
      this43.set(BloodType.A_POS, !1);
      var this44 = BloodTypeTools.map.get(BloodType.B_NEG);
      this44.set(BloodType.A_NEG, !1);
      var this45 = BloodTypeTools.map.get(BloodType.B_NEG);
      this45.set(BloodType.B_POS, !1);
      var this46 = BloodTypeTools.map.get(BloodType.B_NEG);
      this46.set(BloodType.B_NEG, !0);
      var this47 = BloodTypeTools.map.get(BloodType.B_NEG);
      this47.set(BloodType.O_POS, !1);
      var this48 = BloodTypeTools.map.get(BloodType.B_NEG);
      this48.set(BloodType.O_NEG, !0);
      var this49 = BloodTypeTools.map.get(BloodType.O_POS);
      this49.set(BloodType.AB_POS, !1);
      var this50 = BloodTypeTools.map.get(BloodType.O_POS);
      this50.set(BloodType.AB_NEG, !1);
      var this51 = BloodTypeTools.map.get(BloodType.O_POS);
      this51.set(BloodType.A_POS, !1);
      var this52 = BloodTypeTools.map.get(BloodType.O_POS);
      this52.set(BloodType.A_NEG, !1);
      var this53 = BloodTypeTools.map.get(BloodType.O_POS);
      this53.set(BloodType.B_POS, !1);
      var this54 = BloodTypeTools.map.get(BloodType.O_POS);
      this54.set(BloodType.B_NEG, !1);
      var this55 = BloodTypeTools.map.get(BloodType.O_POS);
      this55.set(BloodType.O_POS, !0);
      var this56 = BloodTypeTools.map.get(BloodType.O_POS);
      this56.set(BloodType.O_NEG, !0);
      var this57 = BloodTypeTools.map.get(BloodType.O_NEG);
      this57.set(BloodType.AB_POS, !1);
      var this58 = BloodTypeTools.map.get(BloodType.O_NEG);
      this58.set(BloodType.AB_NEG, !1);
      var this59 = BloodTypeTools.map.get(BloodType.O_NEG);
      this59.set(BloodType.A_POS, !1);
      var this60 = BloodTypeTools.map.get(BloodType.O_NEG);
      this60.set(BloodType.A_NEG, !1);
      var this61 = BloodTypeTools.map.get(BloodType.O_NEG);
      this61.set(BloodType.B_POS, !1);
      var this62 = BloodTypeTools.map.get(BloodType.O_NEG);
      this62.set(BloodType.B_NEG, !1);
      var this63 = BloodTypeTools.map.get(BloodType.O_NEG);
      this63.set(BloodType.O_POS, !1);
      var this64 = BloodTypeTools.map.get(BloodType.O_NEG);
      this64.set(BloodType.O_NEG, !0)
    }
    return BloodTypeTools.map
  }, com.haxepunk.Tweener = function() {
    this.active = !0, this.autoClear = !1
  }, $hxClasses["com.haxepunk.Tweener"] = com.haxepunk.Tweener, com.haxepunk.Tweener.__name__ = ["com", "haxepunk", "Tweener"], com.haxepunk.Tweener.prototype = {
    active: null,
    autoClear: null,
    update: function() {},
    addTween: function(t, start) {
      null == start && (start = !1);
      var ft = t;
      if (null != ft._parent) throw "Cannot add a Tween object more than once.";
      ft._parent = this, ft._next = this._tween;
      var friendTween = this._tween;
      return null != this._tween && (friendTween._prev = t), this._tween = t, start && this._tween.start(), t
    },
    removeTween: function(t) {
      var ft = t;
      if (ft._parent != this) throw "Core object does not contain Tween.";
      return null != ft._next && (ft._next._prev = ft._prev), null != ft._prev ? ft._prev._next = ft._next : this._tween = null == ft._next ? null : js.Boot.__cast(ft._next, com.haxepunk.Tween), ft._next = ft._prev = null, ft._parent = null, t.active = !1, t
    },
    clearTweens: function() {
      for (var fn, ft = this._tween; null != ft;) fn = ft._next, this.removeTween(js.Boot.__cast(ft, com.haxepunk.Tween)), ft = fn
    },
    updateTweens: function() {
      for (var t, ft = this._tween; null != ft;) t = js.Boot.__cast(ft, com.haxepunk.Tween), t.active && (t.update(), ft._finish && ft.finish()), ft = ft._next
    },
    get_hasTween: function() {
      return null != this._tween
    },
    _tween: null,
    __class__: com.haxepunk.Tweener,
    __properties__: {
      get_hasTween: "get_hasTween"
    }
  }, com.haxepunk.Mask = function() {
    this._parent = com.haxepunk.Entity._EMPTY, this._class = Type.getClassName(Type.getClass(this)), this._check = new haxe.ds.StringMap;
    var key = Type.getClassName(com.haxepunk.Mask);
    this._check.set(key, $bind(this, this.collideMask));
    var key1 = Type.getClassName(com.haxepunk.masks.Masklist);
    this._check.set(key1, $bind(this, this.collideMasklist))
  }, $hxClasses["com.haxepunk.Mask"] = com.haxepunk.Mask, com.haxepunk.Mask.__name__ = ["com", "haxepunk", "Mask"], com.haxepunk.Mask.prototype = {
    get_parent: function() {
      return this._parent != com.haxepunk.Entity._EMPTY ? this._parent : null
    },
    set_parent: function(value) {
      return null == value ? this._parent = com.haxepunk.Entity._EMPTY : (this._parent = value, this.update()), value
    },
    list: null,
    collide: function(mask) {
      var cbFunc = this._check.get(mask._class);
      return null != cbFunc ? cbFunc(mask) : (cbFunc = mask._check.get(this._class), null != cbFunc ? cbFunc(this) : !1)
    },
    collideMask: function(other) {
      return this._parent.get_x() - this._parent.originX + this._parent.width > other._parent.get_x() - other._parent.originX && this._parent.get_y() - this._parent.originY + this._parent.height > other._parent.get_y() - other._parent.originY && this._parent.get_x() - this._parent.originX < other._parent.get_x() - other._parent.originX + other._parent.width && this._parent.get_y() - this._parent.originY < other._parent.get_y() - other._parent.originY + other._parent.height
    },
    collideMasklist: function(other) {
      return other.collide(this)
    },
    debugDraw: function() {},
    update: function() {},
    project: function(axis, projection) {
      var cur, max = -1 / 0,
        min = 1 / 0;
      cur = -this._parent.originX * axis.x - this._parent.originY * axis.y, min > cur && (min = cur), cur > max && (max = cur), cur = (-this._parent.originX + this._parent.width) * axis.x - this._parent.originY * axis.y, min > cur && (min = cur), cur > max && (max = cur), cur = -this._parent.originX * axis.x + (-this._parent.originY + this._parent.height) * axis.y, min > cur && (min = cur), cur > max && (max = cur), cur = (-this._parent.originX + this._parent.width) * axis.x + (-this._parent.originY + this._parent.height) * axis.y, min > cur && (min = cur), cur > max && (max = cur), projection.min = min, projection.max = max
    },
    _class: null,
    _check: null,
    _parent: null,
    __class__: com.haxepunk.Mask,
    __properties__: {
      set_parent: "set_parent",
      get_parent: "get_parent"
    }
  };
  var Type = function() {};
  $hxClasses.Type = Type, Type.__name__ = ["Type"], Type.getClass = function(o) {
    return null == o ? null : o instanceof Array && null == o.__enum__ ? Array : o.__class__
  }, Type.getClassName = function(c) {
    var a = c.__name__;
    return a.join(".")
  }, Type.resolveClass = function(name) {
    var cl = $hxClasses[name];
    return null != cl && cl.__name__ ? cl : null
  }, Type.resolveEnum = function(name) {
    var e = $hxClasses[name];
    return null != e && e.__ename__ ? e : null
  }, Type.createInstance = function(cl, args) {
    var _g = args.length;
    switch (_g) {
      case 0:
        return new cl;
      case 1:
        return new cl(args[0]);
      case 2:
        return new cl(args[0], args[1]);
      case 3:
        return new cl(args[0], args[1], args[2]);
      case 4:
        return new cl(args[0], args[1], args[2], args[3]);
      case 5:
        return new cl(args[0], args[1], args[2], args[3], args[4]);
      case 6:
        return new cl(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7:
        return new cl(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
      case 8:
        return new cl(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
      default:
        throw "Too many arguments"
    }
    return null
  }, Type.createEmptyInstance = function(cl) {
    function empty() {}
    return empty.prototype = cl.prototype, new empty
  }, Type.createEnum = function(e, constr, params) {
    var f = Reflect.field(e, constr);
    if (null == f) throw "No such constructor " + constr;
    if (Reflect.isFunction(f)) {
      if (null == params) throw "Constructor " + constr + " need parameters";
      return f.apply(e, params)
    }
    if (null != params && 0 != params.length) throw "Constructor " + constr + " does not need parameters";
    return f
  }, Type.getInstanceFields = function(c) {
    var a = [];
    for (var i in c.prototype) a.push(i);
    return HxOverrides.remove(a, "__class__"), HxOverrides.remove(a, "__properties__"), a
  }, Type.getClassFields = function(c) {
    var a = Reflect.fields(c);
    return HxOverrides.remove(a, "__name__"), HxOverrides.remove(a, "__interfaces__"), HxOverrides.remove(a, "__properties__"), HxOverrides.remove(a, "__super__"), HxOverrides.remove(a, "prototype"), a
  }, Type.getEnumConstructs = function(e) {
    var a = e.__constructs__;
    return a.slice()
  }, Type.allEnums = function(e) {
    return e.__empty_constructs__
  }, com.haxepunk.masks = {}, com.haxepunk.masks.Hitbox = function(width, height, x, y) {
    null == y && (y = 0), null == x && (x = 0), null == height && (height = 1), null == width && (width = 1), this._y = 0, this._x = 0, this._height = 0, this._width = 0, com.haxepunk.Mask.call(this), this._width = width, this._height = height, this._x = x, this._y = y;
    var key = Type.getClassName(com.haxepunk.masks.Hitbox);
    this._check.set(key, $bind(this, this.collideHitbox))
  }, $hxClasses["com.haxepunk.masks.Hitbox"] = com.haxepunk.masks.Hitbox, com.haxepunk.masks.Hitbox.__name__ = ["com", "haxepunk", "masks", "Hitbox"], com.haxepunk.masks.Hitbox.__super__ = com.haxepunk.Mask, com.haxepunk.masks.Hitbox.prototype = $extend(com.haxepunk.Mask.prototype, {
    collideMask: function(other) {
      var px = this._x + this._parent.get_x(),
        py = this._y + this._parent.get_y(),
        ox = other._parent.originX + other._parent.get_x(),
        oy = other._parent.originY + other._parent.get_y();
      return px + this._width > ox && py + this._height > oy && px < ox + other._parent.width && py < oy + other._parent.height
    },
    collideHitbox: function(other) {
      var px = this._x + this._parent.get_x(),
        py = this._y + this._parent.get_y(),
        ox = other._x + other._parent.get_x(),
        oy = other._y + other._parent.get_x();
      return px + this._width > ox && py + this._height > oy && px < ox + other._width && py < oy + other._height
    },
    get_x: function() {
      return this._x
    },
    set_x: function(value) {
      return this._x == value ? value : (this._x = value, null != this.list ? this.list.update() : null != (this._parent != com.haxepunk.Entity._EMPTY ? this._parent : null) && this.update(), this._x)
    },
    get_y: function() {
      return this._y
    },
    set_y: function(value) {
      return this._y == value ? value : (this._y = value, null != this.list ? this.list.update() : null != (this._parent != com.haxepunk.Entity._EMPTY ? this._parent : null) && this.update(), this._y)
    },
    get_width: function() {
      return this._width
    },
    set_width: function(value) {
      return this._width == value ? value : (this._width = value, null != this.list ? this.list.update() : null != (this._parent != com.haxepunk.Entity._EMPTY ? this._parent : null) && this.update(), this._width)
    },
    get_height: function() {
      return this._height
    },
    set_height: function(value) {
      return this._height == value ? value : (this._height = value, null != this.list ? this.list.update() : null != (this._parent != com.haxepunk.Entity._EMPTY ? this._parent : null) && this.update(), this._height)
    },
    update: function() {
      null != (this._parent != com.haxepunk.Entity._EMPTY ? this._parent : null) && (this._parent.originX = -this._x, this._parent.originY = -this._y, this._parent.width = this._width, this._parent.height = this._height, null != this.list && this.list.update())
    },
    debugDraw: function(graphics, scaleX, scaleY) {
      null != this.list && null != (this._parent != com.haxepunk.Entity._EMPTY ? this._parent : null) && this.list.get_count() > 1 && graphics.drawRect(((this._parent != com.haxepunk.Entity._EMPTY ? this._parent : null).get_x() - com.haxepunk.HXP.camera.x + this.get_x()) * scaleX, ((this._parent != com.haxepunk.Entity._EMPTY ? this._parent : null).get_y() - com.haxepunk.HXP.camera.y + this.get_y()) * scaleY, this.get_width() * scaleX, this.get_height() * scaleY)
    },
    project: function(axis, projection) {
      var cur, px = this._x,
        py = this._y,
        max = -1 / 0,
        min = 1 / 0;
      cur = px * axis.x + py * axis.y, min > cur && (min = cur), cur > max && (max = cur), cur = (px + this._width) * axis.x + py * axis.y, min > cur && (min = cur), cur > max && (max = cur), cur = px * axis.x + (py + this._height) * axis.y, min > cur && (min = cur), cur > max && (max = cur), cur = (px + this._width) * axis.x + (py + this._height) * axis.y, min > cur && (min = cur), cur > max && (max = cur), projection.min = min, projection.max = max
    },
    _width: null,
    _height: null,
    _x: null,
    _y: null,
    __class__: com.haxepunk.masks.Hitbox,
    __properties__: $extend(com.haxepunk.Mask.prototype.__properties__, {
      set_height: "set_height",
      get_height: "get_height",
      set_width: "set_width",
      get_width: "get_width",
      set_y: "set_y",
      get_y: "get_y",
      set_x: "set_x",
      get_x: "get_x"
    })
  }), com.haxepunk.masks.Masklist = function(masks) {
    com.haxepunk.masks.Hitbox.call(this), this._masks = new Array, this._temp = new Array, this._count = 0;
    for (var _g = 0; _g < masks.length;) {
      var m = masks[_g];
      ++_g, this.add(m)
    }
  }, $hxClasses["com.haxepunk.masks.Masklist"] = com.haxepunk.masks.Masklist, com.haxepunk.masks.Masklist.__name__ = ["com", "haxepunk", "masks", "Masklist"], com.haxepunk.masks.Masklist.__super__ = com.haxepunk.masks.Hitbox, com.haxepunk.masks.Masklist.prototype = $extend(com.haxepunk.masks.Hitbox.prototype, {
    collide: function(mask) {
      for (var _g = 0, _g1 = this._masks; _g < _g1.length;) {
        var m = _g1[_g];
        if (++_g, m.collide(mask)) return !0
      }
      return !1
    },
    collideMasklist: function(other) {
      for (var _g = 0, _g1 = this._masks; _g < _g1.length;) {
        var a = _g1[_g];
        ++_g;
        for (var _g2 = 0, _g3 = other._masks; _g2 < _g3.length;) {
          var b = _g3[_g2];
          if (++_g2, a.collide(b)) return !0
        }
      }
      return !0
    },
    add: function(mask) {
      return this._masks[this._count++] = mask, mask.list = this, mask.set_parent(this._parent != com.haxepunk.Entity._EMPTY ? this._parent : null), this.update(), mask
    },
    remove: function(mask) {
      if (HxOverrides.indexOf(this._masks, mask, 0) < 0) return mask;
      this._temp.length = 0;
      for (var _g = 0, _g1 = this._masks; _g < _g1.length;) {
        var m = _g1[_g];
        ++_g, m == mask ? (mask.list = null, mask.set_parent(null), this._count--, this.update()) : this._temp[this._temp.length] = m
      }
      var temp = this._masks;
      return this._masks = this._temp, this._temp = temp, mask
    },
    removeAt: function(index) {
      null == index && (index = 0), this._temp.length = 0;
      var i = this._masks.length;
      for (index %= i; i-- > 0;) i == index ? (this._masks[index].list = null, this._count--, this.update()) : this._temp[this._temp.length] = this._masks[index];
      var temp = this._masks;
      this._masks = this._temp, this._temp = temp
    },
    removeAll: function() {
      for (var _g = 0, _g1 = this._masks; _g < _g1.length;) {
        var m = _g1[_g];
        ++_g, m.list = null
      }
      this._count = 0, this._masks.length = 0, this._temp.length = 0, this.update()
    },
    getMask: function(index) {
      return null == index && (index = 0), this._masks[index % this._masks.length]
    },
    set_parent: function(parent) {
      for (var _g = 0, _g1 = this._masks; _g < _g1.length;) {
        var m = _g1[_g];
        ++_g, m.set_parent(parent)
      }
      return com.haxepunk.masks.Hitbox.prototype.set_parent.call(this, parent)
    },
    update: function() {
      var t, l, r, b;
      t = l = 2147483647, r = b = -2147483648;
      for (var h1, p, _g = 0, _g1 = this._masks; _g < _g1.length;) {
        var m = _g1[_g];
        ++_g, js.Boot.__instanceof(m, com.haxepunk.masks.Polygon) ? (p = m, null != p && (p.minX < l && (l = p.minX), p.minY < t && (t = p.minY), p.maxX > r && (r = p.maxX), p.maxY > b && (b = p.maxY))) : null != (h1 = js.Boot.__cast(m, com.haxepunk.masks.Hitbox)) && (h1.get_x() < l && (l = h1.get_x()), h1.get_y() < t && (t = h1.get_y()), h1.get_x() + h1.get_width() > r && (r = h1.get_x() + h1.get_width()), h1.get_y() + h1.get_height() > b && (b = h1.get_y() + h1.get_height()))
      }
      this._x = l, this._y = t, this._width = r - l, this._height = b - t, com.haxepunk.masks.Hitbox.prototype.update.call(this)
    },
    debugDraw: function(graphics, scaleX, scaleY) {
      for (var _g = 0, _g1 = this._masks; _g < _g1.length;) {
        var m = _g1[_g];
        ++_g, m.debugDraw(graphics, scaleX, scaleY)
      }
    },
    count: null,
    get_count: function() {
      return this._count
    },
    _masks: null,
    _temp: null,
    _count: null,
    __class__: com.haxepunk.masks.Masklist,
    __properties__: $extend(com.haxepunk.masks.Hitbox.prototype.__properties__, {
      get_count: "get_count"
    })
  }), openfl.media = {}, openfl.media.SoundTransform = function(vol, panning) {
    null == panning && (panning = 0), null == vol && (vol = 1), this.volume = vol, this.pan = panning, this.leftToLeft = 0, this.leftToRight = 0, this.rightToLeft = 0, this.rightToRight = 0
  }, $hxClasses["openfl.media.SoundTransform"] = openfl.media.SoundTransform, openfl.media.SoundTransform.__name__ = ["openfl", "media", "SoundTransform"], openfl.media.SoundTransform.prototype = {
    leftToLeft: null,
    leftToRight: null,
    pan: null,
    rightToLeft: null,
    rightToRight: null,
    volume: null,
    __class__: openfl.media.SoundTransform
  }, openfl.geom = {}, openfl.geom.Point = function(x, y) {
    null == y && (y = 0), null == x && (x = 0), this.x = x, this.y = y
  }, $hxClasses["openfl.geom.Point"] = openfl.geom.Point, openfl.geom.Point.__name__ = ["openfl", "geom", "Point"], openfl.geom.Point.distance = function(pt1, pt2) {
    var dx = pt1.x - pt2.x,
      dy = pt1.y - pt2.y;
    return Math.sqrt(dx * dx + dy * dy)
  }, openfl.geom.Point.interpolate = function(pt1, pt2, f) {
    return new openfl.geom.Point(pt2.x + f * (pt1.x - pt2.x), pt2.y + f * (pt1.y - pt2.y))
  }, openfl.geom.Point.polar = function(len, angle) {
    return new openfl.geom.Point(len * Math.cos(angle), len * Math.sin(angle))
  }, openfl.geom.Point.prototype = {
    length: null,
    x: null,
    y: null,
    add: function(v) {
      return new openfl.geom.Point(v.x + this.x, v.y + this.y)
    },
    clone: function() {
      return new openfl.geom.Point(this.x, this.y)
    },
    equals: function(toCompare) {
      return null != toCompare && toCompare.x == this.x && toCompare.y == this.y
    },
    normalize: function(thickness) {
      if (0 != this.x || 0 != this.y) {
        var norm = thickness / Math.sqrt(this.x * this.x + this.y * this.y);
        this.x *= norm, this.y *= norm
      }
    },
    offset: function(dx, dy) {
      this.x += dx, this.y += dy
    },
    setTo: function(xa, ya) {
      this.x = xa, this.y = ya
    },
    subtract: function(v) {
      return new openfl.geom.Point(this.x - v.x, this.y - v.y)
    },
    get_length: function() {
      return Math.sqrt(this.x * this.x + this.y * this.y)
    },
    __class__: openfl.geom.Point,
    __properties__: {
      get_length: "get_length"
    }
  };
  var Reflect = function() {};
  $hxClasses.Reflect = Reflect, Reflect.__name__ = ["Reflect"], Reflect.hasField = function(o, field) {
    return Object.prototype.hasOwnProperty.call(o, field)
  }, Reflect.field = function(o, field) {
    try {
      return o[field]
    } catch (e) {
      return null
    }
  }, Reflect.setField = function(o, field, value) {
    o[field] = value
  }, Reflect.getProperty = function(o, field) {
    var tmp;
    return null == o ? null : o.__properties__ && (tmp = o.__properties__["get_" + field]) ? o[tmp]() : o[field]
  }, Reflect.setProperty = function(o, field, value) {
    var tmp;
    o.__properties__ && (tmp = o.__properties__["set_" + field]) ? o[tmp](value) : o[field] = value
  }, Reflect.callMethod = function(o, func, args) {
    return func.apply(o, args)
  }, Reflect.fields = function(o) {
    var a = [];
    if (null != o) {
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      for (var f in o) "__id__" != f && "hx__closures__" != f && hasOwnProperty.call(o, f) && a.push(f)
    }
    return a
  }, Reflect.isFunction = function(f) {
    return "function" == typeof f && !(f.__name__ || f.__ename__)
  }, Reflect.compare = function(a, b) {
    return a == b ? 0 : a > b ? 1 : -1
  }, Reflect.isObject = function(v) {
    if (null == v) return !1;
    var t = typeof v;
    return "string" == t || "object" == t && null == v.__enum__ || "function" == t && null != (v.__name__ || v.__ename__)
  }, Reflect.isEnumValue = function(v) {
    return null != v && null != v.__enum__
  }, Reflect.deleteField = function(o, field) {
    return Object.prototype.hasOwnProperty.call(o, field) ? (delete o[field], !0) : !1
  }, Reflect.copy = function(o) {
    for (var o2 = {}, _g = 0, _g1 = Reflect.fields(o); _g < _g1.length;) {
      var f = _g1[_g];
      ++_g, Reflect.setField(o2, f, Reflect.field(o, f))
    }
    return o2
  }, Reflect.makeVarArgs = function(f) {
    return function() {
      var a = Array.prototype.slice.call(arguments);
      return f(a)
    }
  }, openfl.geom.Matrix = function(a, b, c, d, tx, ty) {
    null == ty && (ty = 0), null == tx && (tx = 0), null == d && (d = 1), null == c && (c = 0), null == b && (b = 0), null == a && (a = 1), this.a = a, this.b = b, this.c = c, this.d = d, this.tx = tx, this.ty = ty
  }, $hxClasses["openfl.geom.Matrix"] = openfl.geom.Matrix, openfl.geom.Matrix.__name__ = ["openfl", "geom", "Matrix"], openfl.geom.Matrix.prototype = {
    a: null,
    b: null,
    c: null,
    d: null,
    tx: null,
    ty: null,
    clone: function() {
      return new openfl.geom.Matrix(this.a, this.b, this.c, this.d, this.tx, this.ty)
    },
    concat: function(m) {
      var a1 = this.a * m.a + this.b * m.c;
      this.b = this.a * m.b + this.b * m.d, this.a = a1;
      var c1 = this.c * m.a + this.d * m.c;
      this.d = this.c * m.b + this.d * m.d, this.c = c1;
      var tx1 = this.tx * m.a + this.ty * m.c + m.tx;
      this.ty = this.tx * m.b + this.ty * m.d + m.ty, this.tx = tx1
    },
    copyColumnFrom: function(column, vector3D) {
      if (column > 2) throw "Column " + column + " out of bounds (2)";
      0 == column ? (this.a = vector3D.x, this.c = vector3D.y) : 1 == column ? (this.b = vector3D.x, this.d = vector3D.y) : (this.tx = vector3D.x, this.ty = vector3D.y)
    },
    copyColumnTo: function(column, vector3D) {
      if (column > 2) throw "Column " + column + " out of bounds (2)";
      0 == column ? (vector3D.x = this.a, vector3D.y = this.c, vector3D.z = 0) : 1 == column ? (vector3D.x = this.b, vector3D.y = this.d, vector3D.z = 0) : (vector3D.x = this.tx, vector3D.y = this.ty, vector3D.z = 1)
    },
    copyFrom: function(sourceMatrix) {
      this.a = sourceMatrix.a, this.b = sourceMatrix.b, this.c = sourceMatrix.c, this.d = sourceMatrix.d, this.tx = sourceMatrix.tx, this.ty = sourceMatrix.ty
    },
    copyRowFrom: function(row, vector3D) {
      if (row > 2) throw "Row " + row + " out of bounds (2)";
      0 == row ? (this.a = vector3D.x, this.c = vector3D.y) : 1 == row ? (this.b = vector3D.x, this.d = vector3D.y) : (this.tx = vector3D.x, this.ty = vector3D.y)
    },
    copyRowTo: function(row, vector3D) {
      if (row > 2) throw "Row " + row + " out of bounds (2)";
      0 == row ? (vector3D.x = this.a, vector3D.y = this.b, vector3D.z = this.tx) : 1 == row ? (vector3D.x = this.c, vector3D.y = this.d, vector3D.z = this.ty) : (vector3D.x = 0, vector3D.y = 0, vector3D.z = 1)
    },
    createBox: function(scaleX, scaleY, rotation, tx, ty) {
      null == ty && (ty = 0), null == tx && (tx = 0), null == rotation && (rotation = 0), this.a = scaleX, this.d = scaleY, this.b = rotation, this.tx = tx, this.ty = ty
    },
    createGradientBox: function(width, height, rotation, tx, ty) {
      if (null == ty && (ty = 0), null == tx && (tx = 0), null == rotation && (rotation = 0), this.a = width / 1638.4, this.d = height / 1638.4, 0 != rotation) {
        var cos = Math.cos(rotation),
          sin = Math.sin(rotation);
        this.b = sin * this.d, this.c = -sin * this.a, this.a *= cos, this.d *= cos
      } else this.b = 0, this.c = 0;
      this.tx = tx + width / 2, this.ty = ty + height / 2
    },
    equals: function(matrix) {
      return null != matrix && this.tx == matrix.tx && this.ty == matrix.ty && this.a == matrix.a && this.b == matrix.b && this.c == matrix.c && this.d == matrix.d
    },
    deltaTransformPoint: function(point) {
      return new openfl.geom.Point(point.x * this.a + point.y * this.c, point.x * this.b + point.y * this.d)
    },
    identity: function() {
      this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0
    },
    invert: function() {
      var norm = this.a * this.d - this.b * this.c;
      if (0 == norm) this.a = this.b = this.c = this.d = 0, this.tx = -this.tx, this.ty = -this.ty;
      else {
        norm = 1 / norm;
        var a1 = this.d * norm;
        this.d = this.a * norm, this.a = a1, this.b *= -norm, this.c *= -norm;
        var tx1 = -this.a * this.tx - this.c * this.ty;
        this.ty = -this.b * this.tx - this.d * this.ty, this.tx = tx1
      }
      return this
    },
    mult: function(m) {
      var result = new openfl.geom.Matrix(this.a, this.b, this.c, this.d, this.tx, this.ty);
      return result.concat(m), result
    },
    rotate: function(theta) {
      var cos = Math.cos(theta),
        sin = Math.sin(theta),
        a1 = this.a * cos - this.b * sin;
      this.b = this.a * sin + this.b * cos, this.a = a1;
      var c1 = this.c * cos - this.d * sin;
      this.d = this.c * sin + this.d * cos, this.c = c1;
      var tx1 = this.tx * cos - this.ty * sin;
      this.ty = this.tx * sin + this.ty * cos, this.tx = tx1
    },
    scale: function(sx, sy) {
      this.a *= sx, this.b *= sy, this.c *= sx, this.d *= sy, this.tx *= sx, this.ty *= sy
    },
    setRotation: function(theta, scale) {
      null == scale && (scale = 1), this.a = Math.cos(theta) * scale, this.c = Math.sin(theta) * scale, this.b = -this.c, this.d = this.a
    },
    setTo: function(a, b, c, d, tx, ty) {
      this.a = a, this.b = b, this.c = c, this.d = d, this.tx = tx, this.ty = ty
    },
    to3DString: function(roundPixels) {
      return null == roundPixels && (roundPixels = !1), roundPixels ? "matrix3d(" + this.a + ", " + this.b + ", 0, 0, " + this.c + ", " + this.d + ", 0, 0, 0, 0, 1, 0, " + (0 | this.tx) + ", " + (0 | this.ty) + ", 0, 1)" : "matrix3d(" + this.a + ", " + this.b + ", 0, 0, " + this.c + ", " + this.d + ", 0, 0, 0, 0, 1, 0, " + this.tx + ", " + this.ty + ", 0, 1)"
    },
    toMozString: function() {
      return "matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + "px, " + this.ty + "px)"
    },
    toString: function() {
      return "matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + ", " + this.ty + ")"
    },
    transformPoint: function(pos) {
      return new openfl.geom.Point(pos.x * this.a + pos.y * this.c + this.tx, pos.x * this.b + pos.y * this.d + this.ty)
    },
    translate: function(dx, dy) {
      var m = new openfl.geom.Matrix;
      m.tx = dx, m.ty = dy, this.concat(m)
    },
    __cleanValues: function() {
      this.a = Math.round(1e3 * this.a) / 1e3, this.b = Math.round(1e3 * this.b) / 1e3, this.c = Math.round(1e3 * this.c) / 1e3, this.d = Math.round(1e3 * this.d) / 1e3, this.tx = Math.round(10 * this.tx) / 10, this.ty = Math.round(10 * this.ty) / 10
    },
    __transformX: function(pos) {
      return pos.x * this.a + pos.y * this.c + this.tx
    },
    __transformY: function(pos) {
      return pos.x * this.b + pos.y * this.d + this.ty
    },
    __translateTransformed: function(pos) {
      this.tx = pos.x * this.a + pos.y * this.c + this.tx, this.ty = pos.x * this.b + pos.y * this.d + this.ty
    },
    __class__: openfl.geom.Matrix
  }, openfl.geom.Rectangle = function(x, y, width, height) {
    null == height && (height = 0), null == width && (width = 0), null == y && (y = 0), null == x && (x = 0), this.x = x, this.y = y, this.width = width, this.height = height
  }, $hxClasses["openfl.geom.Rectangle"] = openfl.geom.Rectangle, openfl.geom.Rectangle.__name__ = ["openfl", "geom", "Rectangle"], openfl.geom.Rectangle.prototype = {
    height: null,
    width: null,
    x: null,
    y: null,
    clone: function() {
      return new openfl.geom.Rectangle(this.x, this.y, this.width, this.height)
    },
    contains: function(x, y) {
      return x >= this.x && y >= this.y && x < this.get_right() && y < this.get_bottom()
    },
    containsPoint: function(point) {
      return this.contains(point.x, point.y)
    },
    containsRect: function(rect) {
      return rect.width <= 0 || rect.height <= 0 ? rect.x > this.x && rect.y > this.y && rect.get_right() < this.get_right() && rect.get_bottom() < this.get_bottom() : rect.x >= this.x && rect.y >= this.y && rect.get_right() <= this.get_right() && rect.get_bottom() <= this.get_bottom()
    },
    copyFrom: function(sourceRect) {
      this.x = sourceRect.x, this.y = sourceRect.y, this.width = sourceRect.width, this.height = sourceRect.height
    },
    equals: function(toCompare) {
      return null != toCompare && this.x == toCompare.x && this.y == toCompare.y && this.width == toCompare.width && this.height == toCompare.height
    },
    inflate: function(dx, dy) {
      this.x -= dx, this.width += 2 * dx, this.y -= dy, this.height += 2 * dy
    },
    inflatePoint: function(point) {
      this.inflate(point.x, point.y)
    },
    intersection: function(toIntersect) {
      var x0;
      x0 = this.x < toIntersect.x ? toIntersect.x : this.x;
      var x1;
      if (x1 = this.get_right() > toIntersect.get_right() ? toIntersect.get_right() : this.get_right(), x0 >= x1) return new openfl.geom.Rectangle;
      var y0;
      y0 = this.y < toIntersect.y ? toIntersect.y : this.y;
      var y1;
      return y1 = this.get_bottom() > toIntersect.get_bottom() ? toIntersect.get_bottom() : this.get_bottom(), y0 >= y1 ? new openfl.geom.Rectangle : new openfl.geom.Rectangle(x0, y0, x1 - x0, y1 - y0)
    },
    intersects: function(toIntersect) {
      var x0;
      x0 = this.x < toIntersect.x ? toIntersect.x : this.x;
      var x1;
      if (x1 = this.get_right() > toIntersect.get_right() ? toIntersect.get_right() : this.get_right(), x0 >= x1) return !1;
      var y0;
      y0 = this.y < toIntersect.y ? toIntersect.y : this.y;
      var y1;
      return y1 = this.get_bottom() > toIntersect.get_bottom() ? toIntersect.get_bottom() : this.get_bottom(), y1 > y0
    },
    isEmpty: function() {
      return this.width <= 0 || this.height <= 0
    },
    offset: function(dx, dy) {
      this.x += dx, this.y += dy
    },
    offsetPoint: function(point) {
      this.x += point.x, this.y += point.y
    },
    setEmpty: function() {
      this.x = this.y = this.width = this.height = 0
    },
    setTo: function(xa, ya, widtha, heighta) {
      this.x = xa, this.y = ya, this.width = widtha, this.height = heighta
    },
    transform: function(m) {
      var tx0 = m.a * this.x + m.c * this.y,
        tx1 = tx0,
        ty0 = m.b * this.x + m.d * this.y,
        ty1 = tx0,
        tx = m.a * (this.x + this.width) + m.c * this.y,
        ty = m.b * (this.x + this.width) + m.d * this.y;
      return tx0 > tx && (tx0 = tx), ty0 > ty && (ty0 = ty), tx > tx1 && (tx1 = tx), ty > ty1 && (ty1 = ty), tx = m.a * (this.x + this.width) + m.c * (this.y + this.height), ty = m.b * (this.x + this.width) + m.d * (this.y + this.height), tx0 > tx && (tx0 = tx), ty0 > ty && (ty0 = ty), tx > tx1 && (tx1 = tx), ty > ty1 && (ty1 = ty), tx = m.a * this.x + m.c * (this.y + this.height), ty = m.b * this.x + m.d * (this.y + this.height), tx0 > tx && (tx0 = tx), ty0 > ty && (ty0 = ty), tx > tx1 && (tx1 = tx), ty > ty1 && (ty1 = ty), new openfl.geom.Rectangle(tx0 + m.tx, ty0 + m.ty, tx1 - tx0, ty1 - ty0)
    },
    union: function(toUnion) {
      if (0 == this.width || 0 == this.height) return toUnion.clone();
      if (0 == toUnion.width || 0 == toUnion.height) return this.clone();
      var x0;
      x0 = this.x > toUnion.x ? toUnion.x : this.x;
      var x1;
      x1 = this.get_right() < toUnion.get_right() ? toUnion.get_right() : this.get_right();
      var y0;
      y0 = this.y > toUnion.y ? toUnion.y : this.y;
      var y1;
      return y1 = this.get_bottom() < toUnion.get_bottom() ? toUnion.get_bottom() : this.get_bottom(), new openfl.geom.Rectangle(x0, y0, x1 - x0, y1 - y0)
    },
    __contract: function(x, y, width, height) {
      if (0 != this.width || 0 != this.height) {
        {
          this.get_right(), this.get_bottom()
        }
        this.x < x && (this.x = x), this.y < y && (this.y = y), this.get_right() > x + width && (this.width = x + width - this.x), this.get_bottom() > y + height && (this.height = y + height - this.y)
      }
    },
    __expand: function(x, y, width, height) {
      if (0 == this.width && 0 == this.height) return this.x = x, this.y = y, this.width = width, void(this.height = height);
      var cacheRight = this.get_right(),
        cacheBottom = this.get_bottom();
      this.x > x && (this.x = x), this.y > y && (this.y = y), x + width > cacheRight && (this.width = x + width - this.x), y + height > cacheBottom && (this.height = y + height - this.y)
    },
    get_bottom: function() {
      return this.y + this.height
    },
    set_bottom: function(b) {
      return this.height = b - this.y, b
    },
    get_bottomRight: function() {
      return new openfl.geom.Point(this.x + this.width, this.y + this.height)
    },
    set_bottomRight: function(p) {
      return this.width = p.x - this.x, this.height = p.y - this.y, p.clone()
    },
    get_left: function() {
      return this.x
    },
    set_left: function(l) {
      return this.width -= l - this.x, this.x = l, l
    },
    get_right: function() {
      return this.x + this.width
    },
    set_right: function(r) {
      return this.width = r - this.x, r
    },
    get_size: function() {
      return new openfl.geom.Point(this.width, this.height)
    },
    set_size: function(p) {
      return this.width = p.x, this.height = p.y, p.clone()
    },
    get_top: function() {
      return this.y
    },
    set_top: function(t) {
      return this.height -= t - this.y, this.y = t, t
    },
    get_topLeft: function() {
      return new openfl.geom.Point(this.x, this.y)
    },
    set_topLeft: function(p) {
      return this.x = p.x, this.y = p.y, p.clone()
    },
    __class__: openfl.geom.Rectangle,
    __properties__: {
      set_topLeft: "set_topLeft",
      get_topLeft: "get_topLeft",
      set_top: "set_top",
      get_top: "get_top",
      set_size: "set_size",
      get_size: "get_size",
      set_right: "set_right",
      get_right: "get_right",
      set_left: "set_left",
      get_left: "get_left",
      set_bottomRight: "set_bottomRight",
      get_bottomRight: "get_bottomRight",
      set_bottom: "set_bottom",
      get_bottom: "get_bottom"
    }
  }, com.haxepunk.HXP = function() {}, $hxClasses["com.haxepunk.HXP"] = com.haxepunk.HXP, com.haxepunk.HXP.__name__ = ["com", "haxepunk", "HXP"], com.haxepunk.HXP.__properties__ = {
    get_RAD: "get_RAD",
    get_DEG: "get_DEG",
    set_time: "set_time",
    get_console: "get_console",
    get_random: "get_random",
    set_randomSeed: "set_randomSeed",
    set_pan: "set_pan",
    get_pan: "get_pan",
    set_volume: "set_volume",
    get_volume: "get_volume",
    set_fullscreen: "set_fullscreen",
    get_fullscreen: "get_fullscreen",
    set_scene: "set_scene",
    get_scene: "get_scene",
    set_world: "set_world",
    get_world: "get_world",
    set_renderMode: "set_renderMode",
    get_NUMBER_MAX_VALUE: "get_NUMBER_MAX_VALUE"
  }, com.haxepunk.HXP.get_NUMBER_MAX_VALUE = function() {
    return 179 * Math.pow(10, 306)
  }, com.haxepunk.HXP.width = null, com.haxepunk.HXP.height = null, com.haxepunk.HXP.windowWidth = null, com.haxepunk.HXP.windowHeight = null, com.haxepunk.HXP.fixed = null, com.haxepunk.HXP.assignedFrameRate = null, com.haxepunk.HXP.elapsed = null, com.haxepunk.HXP.screen = null, com.haxepunk.HXP.buffer = null, com.haxepunk.HXP.bounds = null, com.haxepunk.HXP.halfWidth = null, com.haxepunk.HXP.halfHeight = null, com.haxepunk.HXP.renderMode = null, com.haxepunk.HXP.set_renderMode = function(value) {
    return com.haxepunk.HXP.renderMode = value, null == com.haxepunk.HXP.screen ? com.haxepunk.HXP.screen = new com.haxepunk.Screen : com.haxepunk.HXP.screen.init(), value
  }, com.haxepunk.HXP.get_world = function() {
    return com.haxepunk.HXP.engine._scene
  }, com.haxepunk.HXP.set_world = function(value) {
    return com.haxepunk.HXP.engine.set_scene(value)
  }, com.haxepunk.HXP.get_scene = function() {
    return com.haxepunk.HXP.engine._scene
  }, com.haxepunk.HXP.set_scene = function(value) {
    return com.haxepunk.HXP.engine.set_scene(value)
  }, com.haxepunk.HXP.resize = function(width, height) {
    width = width / com.haxepunk.HXP.screen.fullScaleX | 0, height = height / com.haxepunk.HXP.screen.fullScaleY | 0, com.haxepunk.HXP.width = width, com.haxepunk.HXP.height = height, com.haxepunk.HXP.halfWidth = width / 2, com.haxepunk.HXP.halfHeight = height / 2, com.haxepunk.HXP.bounds.width = width, com.haxepunk.HXP.bounds.height = height, com.haxepunk.HXP.screen.resize()
  }, com.haxepunk.HXP.clear = function(array) {
    array.length = 0
  }, com.haxepunk.HXP.setCamera = function(x, y) {
    null == y && (y = 0), null == x && (x = 0), com.haxepunk.HXP.camera.x = x, com.haxepunk.HXP.camera.y = y
  }, com.haxepunk.HXP.resetCamera = function() {
    com.haxepunk.HXP.camera.x = com.haxepunk.HXP.camera.y = 0
  }, com.haxepunk.HXP.get_fullscreen = function() {
    return com.haxepunk.HXP.stage.displayState == openfl.display.StageDisplayState.FULL_SCREEN
  }, com.haxepunk.HXP.set_fullscreen = function(value) {
    return com.haxepunk.HXP.stage.set_displayState(value ? openfl.display.StageDisplayState.FULL_SCREEN : openfl.display.StageDisplayState.NORMAL), value
  }, com.haxepunk.HXP.get_volume = function() {
    return com.haxepunk.HXP._volume
  }, com.haxepunk.HXP.set_volume = function(value) {
    return 0 > value && (value = 0), com.haxepunk.HXP._volume == value ? value : (com.haxepunk.HXP._soundTransform.volume = com.haxepunk.HXP._volume = value, com.haxepunk.HXP._volume)
  }, com.haxepunk.HXP.get_pan = function() {
    return com.haxepunk.HXP._pan
  }, com.haxepunk.HXP.set_pan = function(value) {
    return -1 > value && (value = -1), value > 1 && (value = 1), com.haxepunk.HXP._pan == value ? value : (com.haxepunk.HXP._soundTransform.pan = com.haxepunk.HXP._pan = value, com.haxepunk.HXP._pan)
  }, com.haxepunk.HXP.sign = function(value) {
    return 0 > value ? -1 : value > 0 ? 1 : 0
  }, com.haxepunk.HXP.approach = function(value, target, amount) {
    return target - amount > value ? value + amount : value > target + amount ? value - amount : target
  }, com.haxepunk.HXP.lerp = function(a, b, t) {
    return null == t && (t = 1), a + (b - a) * t
  }, com.haxepunk.HXP.colorLerp = function(fromColor, toColor, t) {
    if (null == t && (t = 1), 0 >= t) return fromColor;
    if (t >= 1) return toColor;
    var a = fromColor >> 24 & 255,
      r = fromColor >> 16 & 255,
      g = fromColor >> 8 & 255,
      b = 255 & fromColor,
      dA = (toColor >> 24 & 255) - a,
      dR = (toColor >> 16 & 255) - r,
      dG = (toColor >> 8 & 255) - g,
      dB = (255 & toColor) - b;
    return a += dA * t | 0, r += dR * t | 0, g += dG * t | 0, b += dB * t | 0, a << 24 | r << 16 | g << 8 | b
  }, com.haxepunk.HXP.stepTowards = function(object, x, y, distance) {
    if (null == distance && (distance = 1), com.haxepunk.HXP.point.x = x - object.x, com.haxepunk.HXP.point.y = y - object.y, com.haxepunk.HXP.point.get_length() <= distance) return object.x = x, void(object.y = y);
    com.haxepunk.HXP.point.normalize(distance);
    var _g = object;
    _g.x = _g.x + com.haxepunk.HXP.point.x;
    var _g1 = object;
    _g1.y = _g1.y + com.haxepunk.HXP.point.y
  }, com.haxepunk.HXP.anchorTo = function(object, anchor, distance) {
    null == distance && (distance = 0), com.haxepunk.HXP.point.x = object.x - anchor.x, com.haxepunk.HXP.point.y = object.y - anchor.y, com.haxepunk.HXP.point.get_length() > distance && com.haxepunk.HXP.point.normalize(distance), object.x = anchor.x + com.haxepunk.HXP.point.x, object.y = anchor.y + com.haxepunk.HXP.point.y
  }, com.haxepunk.HXP.angle = function(x1, y1, x2, y2) {
    var a = Math.atan2(y2 - y1, x2 - x1) * (-180 / Math.PI);
    return 0 > a ? a + 360 : a
  }, com.haxepunk.HXP.angleXY = function(object, angle, length, x, y) {
    null == y && (y = 0), null == x && (x = 0), null == length && (length = 1), angle *= Math.PI / -180;
    var value = Math.cos(angle) * length + x;
    object.x = value;
    var value1 = Math.sin(angle) * length + y;
    object.y = value1
  }, com.haxepunk.HXP.angleDifference = function(angle1, angle2) {
    for (var diff = angle2 - angle1; - 180 > diff;) diff += 360;
    for (; diff > 180;) diff -= 360;
    return diff
  }, com.haxepunk.HXP.rotateAround = function(object, anchor, angle, relative) {
    null == relative && (relative = !0), null == angle && (angle = 0), relative && (angle += com.haxepunk.HXP.angle(anchor.x, anchor.y, object.x, object.y)), com.haxepunk.HXP.angleXY(object, angle, com.haxepunk.HXP.distance(anchor.x, anchor.y, object.x, object.y), anchor.x, anchor.y)
  }, com.haxepunk.HXP.round = function(num, precision) {
    var exp = Math.pow(10, precision);
    return Math.round(num * exp) / exp
  }, com.haxepunk.HXP.distance = function(x1, y1, x2, y2) {
    return null == y2 && (y2 = 0), null == x2 && (x2 = 0), Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1))
  }, com.haxepunk.HXP.distanceSquared = function(x1, y1, x2, y2) {
    return null == y2 && (y2 = 0), null == x2 && (x2 = 0), (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)
  }, com.haxepunk.HXP.distanceRects = function(x1, y1, w1, h1, x2, y2, w2, h2) {
    return x2 + w2 > x1 && x1 + w1 > x2 ? y2 + h2 > y1 && y1 + h1 > y2 ? 0 : y1 > y2 ? y1 - (y2 + h2) : y2 - (y1 + h1) : y2 + h2 > y1 && y1 + h1 > y2 ? x1 > x2 ? x1 - (x2 + w2) : x2 - (x1 + w1) : x1 > x2 ? y1 > y2 ? com.haxepunk.HXP.distance(x1, y1, x2 + w2, y2 + h2) : com.haxepunk.HXP.distance(x1, y1 + h1, x2 + w2, y2) : y1 > y2 ? com.haxepunk.HXP.distance(x1 + w1, y1, x2, y2 + h2) : com.haxepunk.HXP.distance(x1 + w1, y1 + h1, x2, y2)
  }, com.haxepunk.HXP.distanceRectPoint = function(px, py, rx, ry, rw, rh) {
    return px >= rx && rx + rw >= px ? py >= ry && ry + rh >= py ? 0 : py > ry ? py - (ry + rh) : ry - py : py >= ry && ry + rh >= py ? px > rx ? px - (rx + rw) : rx - px : px > rx ? py > ry ? com.haxepunk.HXP.distance(px, py, rx + rw, ry + rh) : com.haxepunk.HXP.distance(px, py, rx + rw, ry) : py > ry ? com.haxepunk.HXP.distance(px, py, rx, ry + rh) : Math.sqrt((rx - px) * (rx - px) + (ry - py) * (ry - py))
  }, com.haxepunk.HXP.clamp = function(value, min, max) {
    return max > min ? min > value ? min : value > max ? max : value : max > value ? max : value > min ? min : value
  }, com.haxepunk.HXP.clampInRect = function(object, x, y, width, height, padding) {
    null == padding && (padding = 0);
    var value = com.haxepunk.HXP.clamp(object.x, x + padding, x + width - padding);
    object.x = value;
    var value1 = com.haxepunk.HXP.clamp(object.y, y + padding, y + height - padding);
    object.y = value1
  }, com.haxepunk.HXP.scale = function(value, min, max, min2, max2) {
    return min2 + (value - min) / (max - min) * (max2 - min2)
  }, com.haxepunk.HXP.scaleClamp = function(value, min, max, min2, max2) {
    return value = min2 + (value - min) / (max - min) * (max2 - min2), max2 > min2 ? (value = max2 > value ? value : max2, value > min2 ? value : min2) : (value = min2 > value ? value : min2, value > max2 ? value : max2)
  }, com.haxepunk.HXP.set_randomSeed = function(value) {
    return com.haxepunk.HXP._seed = Std["int"](com.haxepunk.HXP.clamp(value, 1, 2147483646)), com.haxepunk.HXP.randomSeed = com.haxepunk.HXP._seed, com.haxepunk.HXP._seed
  }, com.haxepunk.HXP.randomizeSeed = function() {
    com.haxepunk.HXP.set_randomSeed(Std["int"](2147483647 * Math.random()))
  }, com.haxepunk.HXP.random = null, com.haxepunk.HXP.get_random = function() {
    return com.haxepunk.HXP._seed = 16807 * com.haxepunk.HXP._seed % 2147483647 | 0, com.haxepunk.HXP._seed / 2147483647
  }, com.haxepunk.HXP.rand = function(amount) {
    return com.haxepunk.HXP._seed = 16807 * com.haxepunk.HXP._seed % 2147483647 | 0, com.haxepunk.HXP._seed / 2147483647 * amount | 0
  }, com.haxepunk.HXP.indexOf = function(arr, v) {
    return HxOverrides.indexOf(arr, v, 0)
  }, com.haxepunk.HXP.next = function(current, options, loop) {
    return null == loop && (loop = !0), loop ? options[(HxOverrides.indexOf(options, current, 0) + 1) % options.length] : options[Std["int"](Math.max(HxOverrides.indexOf(options, current, 0) + 1, options.length - 1))]
  }, com.haxepunk.HXP.prev = function(current, options, loop) {
    return null == loop && (loop = !0), loop ? options[(HxOverrides.indexOf(options, current, 0) - 1 + options.length) % options.length] : options[Std["int"](Math.max(HxOverrides.indexOf(options, current, 0) - 1, 0))]
  }, com.haxepunk.HXP.swap = function(current, a, b) {
    return current == a ? b : a
  }, com.haxepunk.HXP.insertSortedKey = function(list, key, compare) {
    for (var result = 0, mid = 0, min = 0, max = list.length - 1; max >= min;)
      if (mid = min + ((max - min) / 2 | 0), result = compare(list[mid], key), result > 0) max = mid - 1;
      else {
        if (!(0 > result)) return;
        min = mid + 1
      }
    list.splice(result > 0 ? mid : mid + 1, 0, key)
  }, com.haxepunk.HXP.getColorRGB = function(R, G, B) {
    return null == B && (B = 0), null == G && (G = 0), null == R && (R = 0), R << 16 | G << 8 | B
  }, com.haxepunk.HXP.getColorHSV = function(h, s, v) {
    h = 360 * h | 0;
    var hi = Math.floor(h / 60) % 6,
      f = h / 60 - Math.floor(h / 60),
      p = v * (1 - s),
      q = v * (1 - f * s),
      t = v * (1 - (1 - f) * s);
    switch (hi) {
      case 0:
        return (255 * v | 0) << 16 | (255 * t | 0) << 8 | (255 * p | 0);
      case 1:
        return (255 * q | 0) << 16 | (255 * v | 0) << 8 | (255 * p | 0);
      case 2:
        return (255 * p | 0) << 16 | (255 * v | 0) << 8 | (255 * t | 0);
      case 3:
        return (255 * p | 0) << 16 | (255 * q | 0) << 8 | (255 * v | 0);
      case 4:
        return (255 * t | 0) << 16 | (255 * p | 0) << 8 | (255 * v | 0);
      case 5:
        return (255 * v | 0) << 16 | (255 * p | 0) << 8 | (255 * q | 0);
      default:
        return 0
    }
    return 0
  }, com.haxepunk.HXP.getColorHue = function(color) {
    var h = color >> 16 & 255,
      s = color >> 8 & 255,
      v = 255 & color,
      max = Std["int"](Math.max(h, Math.max(s, v))),
      min = Std["int"](Math.min(h, Math.min(s, v))),
      hue = 0;
    return max == min ? hue = 0 : max == h ? hue = (60 * (s - v) / (max - min) + 360) % 360 : max == s ? hue = 60 * (v - h) / (max - min) + 120 : max == v && (hue = 60 * (h - s) / (max - min) + 240), hue / 360
  }, com.haxepunk.HXP.getColorSaturation = function(color) {
    var h = color >> 16 & 255,
      s = color >> 8 & 255,
      v = 255 & color,
      max = Std["int"](Math.max(h, Math.max(s, v)));
    if (0 == max) return 0;
    var min = Std["int"](Math.min(h, Math.min(s, v)));
    return (max - min) / max
  }, com.haxepunk.HXP.getColorValue = function(color) {
    var h = color >> 16 & 255,
      s = color >> 8 & 255,
      v = 255 & color;
    return Std["int"](Math.max(h, Math.max(s, v))) / 255
  }, com.haxepunk.HXP.getRed = function(color) {
    return color >> 16 & 255
  }, com.haxepunk.HXP.getGreen = function(color) {
    return color >> 8 & 255
  }, com.haxepunk.HXP.getBlue = function(color) {
    return 255 & color
  }, com.haxepunk.HXP.getBitmap = function(name) {
    if (com.haxepunk.HXP._bitmap.exists(name)) return com.haxepunk.HXP._bitmap.get(name);
    var data = openfl.Assets.getBitmapData(name, !1);
    return null != data && com.haxepunk.HXP._bitmap.set(name, data), data
  }, com.haxepunk.HXP.overwriteBitmapCache = function(name, data) {
    com.haxepunk.HXP.removeBitmap(name), com.haxepunk.HXP._bitmap.set(name, data)
  }, com.haxepunk.HXP.removeBitmap = function(name) {
    if (com.haxepunk.HXP._bitmap.exists(name)) {
      var bitmap = com.haxepunk.HXP._bitmap.get(name);
      return bitmap.dispose(), bitmap = null, com.haxepunk.HXP._bitmap.remove(name)
    }
    return !1
  }, com.haxepunk.HXP.createBitmap = function(width, height, transparent, color) {
    return null == color && (color = 0), null == transparent && (transparent = !1), new openfl.display.BitmapData(width, height, transparent, color)
  }, com.haxepunk.HXP.timeFlag = function() {
    var t = haxe.Timer.stamp(),
      e = t - com.haxepunk.HXP._time;
    return com.haxepunk.HXP._time = t, e
  }, com.haxepunk.HXP.get_console = function() {
    return null == com.haxepunk.HXP._console && (com.haxepunk.HXP._console = new com.haxepunk.debug.Console), com.haxepunk.HXP._console
  }, com.haxepunk.HXP.consoleEnabled = function() {
    return null != com.haxepunk.HXP._console
  }, com.haxepunk.HXP.tween = function(object, values, duration, options) {
    if (null != options && Object.prototype.hasOwnProperty.call(options, "delay")) {
      var delay = options.delay;
      return Reflect.deleteField(options, "delay"), com.haxepunk.HXP.alarm(delay, function() {
        com.haxepunk.HXP.tween(object, values, duration, options)
      }), null
    }
    var type = com.haxepunk.TweenType.OneShot,
      complete = null,
      ease = null,
      tweener = com.haxepunk.HXP.tweener;
    js.Boot.__instanceof(object, com.haxepunk.Tweener) && (tweener = js.Boot.__cast(object, com.haxepunk.Tweener)), null != options && (Object.prototype.hasOwnProperty.call(options, "type") && (type = options.type), Object.prototype.hasOwnProperty.call(options, "complete") && (complete = options.complete), Object.prototype.hasOwnProperty.call(options, "ease") && (ease = options.ease), Object.prototype.hasOwnProperty.call(options, "tweener") && (tweener = options.tweener));
    var tween = new com.haxepunk.tweens.misc.MultiVarTween(complete, type);
    return tween.tween(object, values, duration, ease), tweener.addTween(tween), tween
  }, com.haxepunk.HXP.alarm = function(delay, complete, type, tweener) {
    null == type && (type = com.haxepunk.TweenType.OneShot), null == tweener && (tweener = com.haxepunk.HXP.tweener);
    var alarm = new com.haxepunk.tweens.misc.Alarm(delay, complete, type);
    return tweener.addTween(alarm, !0), alarm
  }, com.haxepunk.HXP.frames = function(from, to, skip) {
    null == skip && (skip = 0);
    var a = new Array;
    if (skip++, to > from)
      for (; to >= from;) a.push(from), from += skip;
    else
      for (; from >= to;) a.push(from), from -= skip;
    return a
  }, com.haxepunk.HXP.shuffle = function(a) {
    for (var j, t, i = a.length; --i > 0;) t = a[i], a[i] = a[function() {
      var $r;
      return com.haxepunk.HXP._seed = 16807 * com.haxepunk.HXP._seed % 2147483647 | 0, $r = j = com.haxepunk.HXP._seed / 2147483647 * (i + 1) | 0
    }(this)], a[j] = t
  }, com.haxepunk.HXP.resizeStage = function() {
    haxe.Log.trace("Can only resize the stage in cpp or neko targets.", {
      fileName: "HXP.hx",
      lineNumber: 1220,
      className: "com.haxepunk.HXP",
      methodName: "resizeStage"
    })
  }, com.haxepunk.HXP.time = null, com.haxepunk.HXP.set_time = function(value) {
    return com.haxepunk.HXP._time = value, com.haxepunk.HXP._time
  }, com.haxepunk.HXP._console = null, com.haxepunk.HXP._time = null, com.haxepunk.HXP._updateTime = null, com.haxepunk.HXP._renderTime = null, com.haxepunk.HXP._gameTime = null, com.haxepunk.HXP._systemTime = null, com.haxepunk.HXP.get_DEG = function() {
    return -180 / Math.PI
  }, com.haxepunk.HXP.get_RAD = function() {
    return Math.PI / -180
  }, com.haxepunk.HXP.stage = null, com.haxepunk.HXP.engine = null, com.haxepunk.HXP.entity = null, com.haxepunk.Entity = function(x, y, graphic, mask) {
    null == y && (y = 0), null == x && (x = 0), com.haxepunk.Tweener.call(this), this.visible = !0, this.collidable = !0, this.followCamera = !1, this.x = x, this.y = y, this.originX = this.originY = 0, this.width = this.height = 0, this._moveX = this._moveY = 0, this._type = "", this._name = "", this.HITBOX = new com.haxepunk.Mask, this._point = com.haxepunk.HXP.point, this._camera = com.haxepunk.HXP.point2, this.set_layer(0), null != graphic && this.set_graphic(graphic), null != mask && this.set_mask(mask), this.HITBOX.set_parent(this), this._class = Type.getClassName(Type.getClass(this))
  }, $hxClasses["com.haxepunk.Entity"] = com.haxepunk.Entity, com.haxepunk.Entity.__name__ = ["com", "haxepunk", "Entity"], com.haxepunk.Entity.__super__ = com.haxepunk.Tweener, com.haxepunk.Entity.prototype = $extend(com.haxepunk.Tweener.prototype, {
    visible: null,
    collidable: null,
    x: null,
    get_x: function() {
      return this.followCamera ? this.x + com.haxepunk.HXP.camera.x : this.x
    },
    set_x: function(v) {
      return this.x = v
    },
    y: null,
    get_y: function() {
      return this.followCamera ? this.y + com.haxepunk.HXP.camera.y : this.y
    },
    set_y: function(v) {
      return this.y = v
    },
    followCamera: null,
    width: null,
    height: null,
    originX: null,
    originY: null,
    renderTarget: null,
    added: function() {},
    removed: function() {},
    update: function() {},
    render: function() {
      null != this._graphic && this._graphic._visible && (this._graphic.relative ? (this._point.x = this.followCamera ? this.x + com.haxepunk.HXP.camera.x : this.x, this._point.y = this.followCamera ? this.y + com.haxepunk.HXP.camera.y : this.y) : this._point.x = this._point.y = 0, this._camera.x = null == this._scene ? com.haxepunk.HXP.camera.x : this._scene.camera.x, this._camera.y = null == this._scene ? com.haxepunk.HXP.camera.y : this._scene.camera.y, this._graphic.blit ? this._graphic.render(null != this.renderTarget ? this.renderTarget : com.haxepunk.HXP.buffer, this._point, this._camera) : this._graphic.renderAtlas(this._layer, this._point, this._camera))
    },
    collide: function(type, x, y) {
      if (null == this._scene) return null;
      var entities = this._scene.entitiesForType(type);
      if (!this.collidable || null == entities) return null;
      if (this._x = this.followCamera ? this.x + com.haxepunk.HXP.camera.x : this.x, this._y = this.followCamera ? this.y + com.haxepunk.HXP.camera.y : this.y, this.x = x, this.y = y, null == this._mask)
        for (var $it0 = entities.iterator(); $it0.hasNext();) {
          var e = $it0.next();
          if (e.collidable && e != this && x - this.originX + this.width > (e.followCamera ? e.x + com.haxepunk.HXP.camera.x : e.x) - e.originX && y - this.originY + this.height > (e.followCamera ? e.y + com.haxepunk.HXP.camera.y : e.y) - e.originY && x - this.originX < (e.followCamera ? e.x + com.haxepunk.HXP.camera.x : e.x) - e.originX + e.width && y - this.originY < (e.followCamera ? e.y + com.haxepunk.HXP.camera.y : e.y) - e.originY + e.height && (null == e._mask || e._mask.collide(this.HITBOX))) return this.x = this._x, this.y = this._y, e
        } else
          for (var $it1 = entities.iterator(); $it1.hasNext();) {
            var e1 = $it1.next();
            if (e1.collidable && e1 != this && x - this.originX + this.width > (e1.followCamera ? e1.x + com.haxepunk.HXP.camera.x : e1.x) - e1.originX && y - this.originY + this.height > (e1.followCamera ? e1.y + com.haxepunk.HXP.camera.y : e1.y) - e1.originY && x - this.originX < (e1.followCamera ? e1.x + com.haxepunk.HXP.camera.x : e1.x) - e1.originX + e1.width && y - this.originY < (e1.followCamera ? e1.y + com.haxepunk.HXP.camera.y : e1.y) - e1.originY + e1.height && this._mask.collide(null != e1._mask ? e1._mask : e1.HITBOX)) return this.x = this._x, this.y = this._y, e1
          }
      return this.x = this._x, this.y = this._y, null
    },
    collideTypes: function(types, x, y) {
      if (null == this._scene) return null;
      var _g = types;
      switch (_g[1]) {
        case 0:
          var s = _g[2];
          return this.collide(s, x, y);
        case 1:
          for (var e, a = _g[2], _g1 = 0; _g1 < a.length;) {
            var type = a[_g1];
            if (++_g1, e = this.collide(type, x, y), null != e) return e
          }
      }
      return null
    },
    collideWith: function(e, x, y) {
      if (this._x = this.followCamera ? this.x + com.haxepunk.HXP.camera.x : this.x, this._y = this.followCamera ? this.y + com.haxepunk.HXP.camera.y : this.y, this.x = x, this.y = y, this.collidable && e.collidable && x - this.originX + this.width > (e.followCamera ? e.x + com.haxepunk.HXP.camera.x : e.x) - e.originX && y - this.originY + this.height > (e.followCamera ? e.y + com.haxepunk.HXP.camera.y : e.y) - e.originY && x - this.originX < (e.followCamera ? e.x + com.haxepunk.HXP.camera.x : e.x) - e.originX + e.width && y - this.originY < (e.followCamera ? e.y + com.haxepunk.HXP.camera.y : e.y) - e.originY + e.height) {
        if (null == this._mask) return null == e._mask || e._mask.collide(this.HITBOX) ? (this.x = this._x, this.y = this._y, e) : (this.x = this._x, this.y = this._y, null);
        if (this._mask.collide(null != e._mask ? e._mask : e.HITBOX)) return this.x = this._x, this.y = this._y, e
      }
      return this.x = this._x, this.y = this._y, null
    },
    collideRect: function(x, y, rX, rY, rWidth, rHeight) {
      return x - this.originX + this.width >= rX && y - this.originY + this.height >= rY && x - this.originX <= rX + rWidth && y - this.originY <= rY + rHeight ? null == this._mask ? !0 : (this._x = this.followCamera ? this.x + com.haxepunk.HXP.camera.x : this.x, this._y = this.followCamera ? this.y + com.haxepunk.HXP.camera.y : this.y, this.x = x, this.y = y, com.haxepunk.HXP.entity.x = rX, com.haxepunk.HXP.entity.y = rY, com.haxepunk.HXP.entity.width = 0 | rWidth, com.haxepunk.HXP.entity.height = 0 | rHeight, this._mask.collide(com.haxepunk.HXP.entity.HITBOX) ? (this.x = this._x, this.y = this._y, !0) : (this.x = this._x, this.y = this._y, !1)) : !1
    },
    collidePoint: function(x, y, pX, pY) {
      return pX >= x - this.originX && pY >= y - this.originY && pX < x - this.originX + this.width && pY < y - this.originY + this.height ? null == this._mask ? !0 : (this._x = this.followCamera ? this.x + com.haxepunk.HXP.camera.x : this.x, this._y = this.followCamera ? this.y + com.haxepunk.HXP.camera.y : this.y, this.x = x, this.y = y, com.haxepunk.HXP.entity.x = pX, com.haxepunk.HXP.entity.y = pY, com.haxepunk.HXP.entity.width = 1, com.haxepunk.HXP.entity.height = 1, this._mask.collide(com.haxepunk.HXP.entity.HITBOX) ? (this.x = this._x, this.y = this._y, !0) : (this.x = this._x, this.y = this._y, !1)) : !1
    },
    collideInto: function(type, x, y, array) {
      if (null != this._scene) {
        var entities = this._scene.entitiesForType(type);
        if (this.collidable && null != entities) {
          this._x = this.followCamera ? this.x + com.haxepunk.HXP.camera.x : this.x, this._y = this.followCamera ? this.y + com.haxepunk.HXP.camera.y : this.y, this.x = x, this.y = y;
          var n = array.length;
          if (null == this._mask)
            for (var $it0 = entities.iterator(); $it0.hasNext();) {
              var e = $it0.next();
              e = e, e.collidable && e != this && x - this.originX + this.width > (e.followCamera ? e.x + com.haxepunk.HXP.camera.x : e.x) - e.originX && y - this.originY + this.height > (e.followCamera ? e.y + com.haxepunk.HXP.camera.y : e.y) - e.originY && x - this.originX < (e.followCamera ? e.x + com.haxepunk.HXP.camera.x : e.x) - e.originX + e.width && y - this.originY < (e.followCamera ? e.y + com.haxepunk.HXP.camera.y : e.y) - e.originY + e.height && (null == e._mask || e._mask.collide(this.HITBOX)) && (array[n++] = e)
            } else
              for (var $it1 = entities.iterator(); $it1.hasNext();) {
                var e1 = $it1.next();
                e1 = e1, e1.collidable && e1 != this && x - this.originX + this.width > (e1.followCamera ? e1.x + com.haxepunk.HXP.camera.x : e1.x) - e1.originX && y - this.originY + this.height > (e1.followCamera ? e1.y + com.haxepunk.HXP.camera.y : e1.y) - e1.originY && x - this.originX < (e1.followCamera ? e1.x + com.haxepunk.HXP.camera.x : e1.x) - e1.originX + e1.width && y - this.originY < (e1.followCamera ? e1.y + com.haxepunk.HXP.camera.y : e1.y) - e1.originY + e1.height && this._mask.collide(null != e1._mask ? e1._mask : e1.HITBOX) && (array[n++] = e1)
              }
          this.x = this._x, this.y = this._y
        }
      }
    },
    collideTypesInto: function(types, x, y, array) {
      if (null != this._scene)
        for (var _g = 0; _g < types.length;) {
          var type = types[_g];
          ++_g, this.collideInto(type, x, y, array)
        }
    },
    onCamera: null,
    get_onCamera: function() {
      return null == this._scene ? !1 : this.collideRect(this.followCamera ? this.x + com.haxepunk.HXP.camera.x : this.x, this.followCamera ? this.y + com.haxepunk.HXP.camera.y : this.y, this._scene.camera.x, this._scene.camera.y, com.haxepunk.HXP.width, com.haxepunk.HXP.height)
    },
    get_world: function() {
      return this._scene
    },
    get_scene: function() {
      return this._scene
    },
    halfWidth: null,
    get_halfWidth: function() {
      return this.width / 2
    },
    halfHeight: null,
    get_halfHeight: function() {
      return this.height / 2
    },
    centerX: null,
    get_centerX: function() {
      return (this.followCamera ? this.x + com.haxepunk.HXP.camera.x : this.x) - this.originX + this.width / 2
    },
    centerY: null,
    get_centerY: function() {
      return (this.followCamera ? this.y + com.haxepunk.HXP.camera.y : this.y) - this.originY + this.height / 2
    },
    left: null,
    get_left: function() {
      return (this.followCamera ? this.x + com.haxepunk.HXP.camera.x : this.x) - this.originX
    },
    right: null,
    get_right: function() {
      return (this.followCamera ? this.x + com.haxepunk.HXP.camera.x : this.x) - this.originX + this.width
    },
    top: null,
    get_top: function() {
      return (this.followCamera ? this.y + com.haxepunk.HXP.camera.y : this.y) - this.originY
    },
    bottom: null,
    get_bottom: function() {
      return (this.followCamera ? this.y + com.haxepunk.HXP.camera.y : this.y) - this.originY + this.height
    },
    get_layer: function() {
      return this._layer
    },
    set_layer: function(value) {
      return this._layer == value ? this._layer : null == this._scene ? (this._layer = value, this._layer) : (this._scene.removeRender(this), this._layer = value, this._scene.addRender(this), this._layer)
    },
    get_type: function() {
      return this._type
    },
    set_type: function(value) {
      return this._type == value ? this._type : null == this._scene ? (this._type = value, this._type) : ("" != this._type && this._scene.removeType(this), this._type = value, "" != value && this._scene.addType(this), this._type)
    },
    get_mask: function() {
      return this._mask
    },
    set_mask: function(value) {
      return this._mask == value ? value : (null != this._mask && this._mask.set_parent(null), this._mask = value, null != value && this._mask.set_parent(this), this._mask)
    },
    get_graphic: function() {
      return this._graphic
    },
    set_graphic: function(value) {
      return this._graphic == value ? value : (this._graphic = value, this._graphic)
    },
    get_name: function() {
      return this._name
    },
    set_name: function(value) {
      return this._name == value ? this._name : null == this._scene ? (this._name = value, this._name) : ("" != this._name && this._scene._entityNames.remove(this._name), this._name = value, "" != value && this._scene._entityNames.set(this._name, this), this._name)
    },
    addGraphic: function(g) {
      if (null == this._graphic) this.set_graphic(g);
      else if (js.Boot.__instanceof(this._graphic, com.haxepunk.graphics.Graphiclist)) js.Boot.__cast(this._graphic, com.haxepunk.graphics.Graphiclist).add(g);
      else {
        var list = new com.haxepunk.graphics.Graphiclist;
        list.add(this._graphic), list.add(g), this.set_graphic(list)
      }
      return g
    },
    setHitbox: function(width, height, originX, originY) {
      null == originY && (originY = 0), null == originX && (originX = 0), null == height && (height = 0), null == width && (width = 0), this.width = width, this.height = height, this.originX = originX, this.originY = originY
    },
    setHitboxTo: function(o) {
      this.width = Reflect.getProperty(o, "width"), this.height = Reflect.getProperty(o, "height"), Object.prototype.hasOwnProperty.call(o, "originX") && Object.prototype.hasOwnProperty.call(o, "originY") ? (this.originX = Reflect.getProperty(o, "originX"), this.originY = Reflect.getProperty(o, "originY")) : (this.originX = Reflect.getProperty(o, "x"), this.originY = Reflect.getProperty(o, "y"), this.originX = -this.originX, this.originY = -this.originY)
    },
    setOrigin: function(x, y) {
      null == y && (y = 0), null == x && (x = 0), this.originX = x, this.originY = y
    },
    centerOrigin: function() {
      this.originX = this.width / 2 | 0, this.originY = this.height / 2 | 0
    },
    distanceFrom: function(e, useHitboxes) {
      return null == useHitboxes && (useHitboxes = !1), useHitboxes ? com.haxepunk.HXP.distanceRects((this.followCamera ? this.x + com.haxepunk.HXP.camera.x : this.x) - this.originX, (this.followCamera ? this.y + com.haxepunk.HXP.camera.y : this.y) - this.originY, this.width, this.height, (e.followCamera ? e.x + com.haxepunk.HXP.camera.x : e.x) - e.originX, (e.followCamera ? e.y + com.haxepunk.HXP.camera.y : e.y) - e.originY, e.width, e.height) : Math.sqrt(((this.followCamera ? this.x + com.haxepunk.HXP.camera.x : this.x) - (e.followCamera ? e.x + com.haxepunk.HXP.camera.x : e.x)) * ((this.followCamera ? this.x + com.haxepunk.HXP.camera.x : this.x) - (e.followCamera ? e.x + com.haxepunk.HXP.camera.x : e.x)) + ((this.followCamera ? this.y + com.haxepunk.HXP.camera.y : this.y) - (e.followCamera ? e.y + com.haxepunk.HXP.camera.y : e.y)) * ((this.followCamera ? this.y + com.haxepunk.HXP.camera.y : this.y) - (e.followCamera ? e.y + com.haxepunk.HXP.camera.y : e.y)))
    },
    distanceToPoint: function(px, py, useHitbox) {
      return null == useHitbox && (useHitbox = !1), useHitbox ? com.haxepunk.HXP.distanceRectPoint(px, py, (this.followCamera ? this.x + com.haxepunk.HXP.camera.x : this.x) - this.originX, (this.followCamera ? this.y + com.haxepunk.HXP.camera.y : this.y) - this.originY, this.width, this.height) : Math.sqrt(((this.followCamera ? this.x + com.haxepunk.HXP.camera.x : this.x) - px) * ((this.followCamera ? this.x + com.haxepunk.HXP.camera.x : this.x) - px) + ((this.followCamera ? this.y + com.haxepunk.HXP.camera.y : this.y) - py) * ((this.followCamera ? this.y + com.haxepunk.HXP.camera.y : this.y) - py))
    },
    distanceToRect: function(rx, ry, rwidth, rheight) {
      return com.haxepunk.HXP.distanceRects(rx, ry, rwidth, rheight, (this.followCamera ? this.x + com.haxepunk.HXP.camera.x : this.x) - this.originX, (this.followCamera ? this.y + com.haxepunk.HXP.camera.y : this.y) - this.originY, this.width, this.height)
    },
    toString: function() {
      return this._class
    },
    moveBy: function(x, y, solidType, sweep) {
      if (null == sweep && (sweep = !1), this._moveX += x, this._moveY += y, x = Math.round(this._moveX), y = Math.round(this._moveY), this._moveX -= x, this._moveY -= y, null != solidType) {
        var sign, e;
        if (0 != x)
          if (this.collidable && (sweep || null != this.collideTypes(solidType, (this.followCamera ? this.x + com.haxepunk.HXP.camera.x : this.x) + x, this.followCamera ? this.y + com.haxepunk.HXP.camera.y : this.y)))
            for (sign = x > 0 ? 1 : -1; 0 != x;) {
              if (null != (e = this.collideTypes(solidType, (this.followCamera ? this.x + com.haxepunk.HXP.camera.x : this.x) + sign, this.followCamera ? this.y + com.haxepunk.HXP.camera.y : this.y))) {
                if (this.moveCollideX(e)) break;
                var _g = this;
                _g.x = (_g.followCamera ? _g.x + com.haxepunk.HXP.camera.x : _g.x) + sign
              } else {
                var _g1 = this;
                _g1.x = (_g1.followCamera ? _g1.x + com.haxepunk.HXP.camera.x : _g1.x) + sign
              }
              x -= sign
            } else {
              var _g2 = this;
              _g2.x = (_g2.followCamera ? _g2.x + com.haxepunk.HXP.camera.x : _g2.x) + x
            }
          if (0 != y)
            if (this.collidable && (sweep || null != this.collideTypes(solidType, this.followCamera ? this.x + com.haxepunk.HXP.camera.x : this.x, (this.followCamera ? this.y + com.haxepunk.HXP.camera.y : this.y) + y)))
              for (sign = y > 0 ? 1 : -1; 0 != y;) {
                if (null != (e = this.collideTypes(solidType, this.followCamera ? this.x + com.haxepunk.HXP.camera.x : this.x, (this.followCamera ? this.y + com.haxepunk.HXP.camera.y : this.y) + sign))) {
                  if (this.moveCollideY(e)) break;
                  var _g3 = this;
                  _g3.y = (_g3.followCamera ? _g3.y + com.haxepunk.HXP.camera.y : _g3.y) + sign
                } else {
                  var _g4 = this;
                  _g4.y = (_g4.followCamera ? _g4.y + com.haxepunk.HXP.camera.y : _g4.y) + sign
                }
                y -= sign
              } else {
                var _g5 = this;
                _g5.y = (_g5.followCamera ? _g5.y + com.haxepunk.HXP.camera.y : _g5.y) + y
              }
      } else {
        var _g6 = this;
        _g6.x = (_g6.followCamera ? _g6.x + com.haxepunk.HXP.camera.x : _g6.x) + x;
        var _g7 = this;
        _g7.y = (_g7.followCamera ? _g7.y + com.haxepunk.HXP.camera.y : _g7.y) + y
      }
    },
    moveTo: function(x, y, solidType, sweep) {
      null == sweep && (sweep = !1), this.moveBy(x - (this.followCamera ? this.x + com.haxepunk.HXP.camera.x : this.x), y - (this.followCamera ? this.y + com.haxepunk.HXP.camera.y : this.y), solidType, sweep)
    },
    moveTowards: function(x, y, amount, solidType, sweep) {
      null == sweep && (sweep = !1), this._point.x = x - (this.followCamera ? this.x + com.haxepunk.HXP.camera.x : this.x), this._point.y = y - (this.followCamera ? this.y + com.haxepunk.HXP.camera.y : this.y), this._point.x * this._point.x + this._point.y * this._point.y > amount * amount && this._point.normalize(amount), this.moveBy(this._point.x, this._point.y, solidType, sweep)
    },
    moveAtAngle: function(angle, amount, solidType, sweep) {
      null == sweep && (sweep = !1), angle *= Math.PI / -180, this.moveBy(Math.cos(angle) * amount, Math.sin(angle) * amount, solidType, sweep)
    },
    moveCollideX: function() {
      return !0
    },
    moveCollideY: function() {
      return !0
    },
    clampHorizontal: function(left, right, padding) {
      null == padding && (padding = 0), (this.followCamera ? this.x + com.haxepunk.HXP.camera.x : this.x) - this.originX < left + padding && (this.x = left + this.originX + padding), (this.followCamera ? this.x + com.haxepunk.HXP.camera.x : this.x) - this.originX + this.width > right - padding && (this.x = right - this.width + this.originX - padding)
    },
    clampVertical: function(top, bottom, padding) {
      null == padding && (padding = 0), (this.followCamera ? this.y + com.haxepunk.HXP.camera.y : this.y) - this.originY < top + padding && (this.y = top + this.originY + padding), (this.followCamera ? this.y + com.haxepunk.HXP.camera.y : this.y) - this.originY + this.height > bottom - padding && (this.y = bottom - this.height + this.originY - padding)
    },
    centerGraphicInRect: function() {
      null != this._graphic && (this._graphic.x = this.width / 2, this._graphic.y = this.height / 2)
    },
    _class: null,
    _scene: null,
    _type: null,
    _layer: null,
    _name: null,
    _recycleNext: null,
    HITBOX: null,
    _mask: null,
    _x: null,
    _y: null,
    _moveX: null,
    _moveY: null,
    _graphic: null,
    _point: null,
    _camera: null,
    __class__: com.haxepunk.Entity,
    __properties__: $extend(com.haxepunk.Tweener.prototype.__properties__, {
      set_name: "set_name",
      get_name: "get_name",
      set_graphic: "set_graphic",
      get_graphic: "get_graphic",
      set_mask: "set_mask",
      get_mask: "get_mask",
      set_type: "set_type",
      get_type: "get_type",
      set_layer: "set_layer",
      get_layer: "get_layer",
      get_bottom: "get_bottom",
      get_top: "get_top",
      get_right: "get_right",
      get_left: "get_left",
      get_centerY: "get_centerY",
      get_centerX: "get_centerX",
      get_halfHeight: "get_halfHeight",
      get_halfWidth: "get_halfWidth",
      get_scene: "get_scene",
      get_world: "get_world",
      get_onCamera: "get_onCamera",
      set_y: "set_y",
      get_y: "get_y",
      set_x: "set_x",
      get_x: "get_x"
    })
  });
  var Clinic = function(main) {
    this.main = main, this.bank = {
      AB_POS: 5,
      AB_NEG: 5,
      A_POS: 5,
      A_NEG: 5,
      B_POS: 5,
      B_NEG: 5,
      O_POS: 5,
      O_NEG: 5
    }, com.haxepunk.Entity.call(this, 450, 200, new com.haxepunk.graphics.Image(com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.HARDWARE ? function($this) {
      var $r, e = com.haxepunk.ds.Either.Right(com.haxepunk.graphics.atlas.Atlas.loadImageAsRegion(function() {
        var $r, data = com.haxepunk.graphics.atlas.AtlasData.getAtlasDataByName("graphics/clinic.png", !0);
        return $r = data
      }($this)));
      return $r = e
    }(this) : function() {
      var $r, e1 = com.haxepunk.ds.Either.Left(com.haxepunk.HXP.getBitmap("graphics/clinic.png"));
      return $r = e1
    }(this)));
    var label_text_options = {
      size: 16
    };
    this.ab_pos_label_text = new com.haxepunk.graphics.Text("" + function() {
      var $r;
      switch (BloodType.AB_POS[1]) {
        case 0:
          $r = "ab+";
          break;
        case 1:
          $r = "ab-";
          break;
        case 2:
          $r = "a+";
          break;
        case 3:
          $r = "a-";
          break;
        case 4:
          $r = "b+";
          break;
        case 5:
          $r = "b-";
          break;
        case 6:
          $r = "o+";
          break;
        case 7:
          $r = "o-"
      }
      return $r
    }(this) + " " + this.bank.AB_POS, 0, 0, null, null, label_text_options), this.ab_neg_label_text = new com.haxepunk.graphics.Text("" + function() {
      var $r;
      switch (BloodType.AB_NEG[1]) {
        case 0:
          $r = "ab+";
          break;
        case 1:
          $r = "ab-";
          break;
        case 2:
          $r = "a+";
          break;
        case 3:
          $r = "a-";
          break;
        case 4:
          $r = "b+";
          break;
        case 5:
          $r = "b-";
          break;
        case 6:
          $r = "o+";
          break;
        case 7:
          $r = "o-"
      }
      return $r
    }(this) + " " + this.bank.AB_NEG, 0, 0, null, null, label_text_options), this.a_pos_label_text = new com.haxepunk.graphics.Text("" + function() {
      var $r;
      switch (BloodType.A_POS[1]) {
        case 0:
          $r = "ab+";
          break;
        case 1:
          $r = "ab-";
          break;
        case 2:
          $r = "a+";
          break;
        case 3:
          $r = "a-";
          break;
        case 4:
          $r = "b+";
          break;
        case 5:
          $r = "b-";
          break;
        case 6:
          $r = "o+";
          break;
        case 7:
          $r = "o-"
      }
      return $r
    }(this) + " " + this.bank.A_POS, 0, 0, null, null, label_text_options), this.a_neg_label_text = new com.haxepunk.graphics.Text("" + function() {
      var $r;
      switch (BloodType.A_NEG[1]) {
        case 0:
          $r = "ab+";
          break;
        case 1:
          $r = "ab-";
          break;
        case 2:
          $r = "a+";
          break;
        case 3:
          $r = "a-";
          break;
        case 4:
          $r = "b+";
          break;
        case 5:
          $r = "b-";
          break;
        case 6:
          $r = "o+";
          break;
        case 7:
          $r = "o-"
      }
      return $r
    }(this) + " " + this.bank.A_NEG, 0, 0, null, null, label_text_options), this.b_pos_label_text = new com.haxepunk.graphics.Text("" + function() {
      var $r;
      switch (BloodType.B_POS[1]) {
        case 0:
          $r = "ab+";
          break;
        case 1:
          $r = "ab-";
          break;
        case 2:
          $r = "a+";
          break;
        case 3:
          $r = "a-";
          break;
        case 4:
          $r = "b+";
          break;
        case 5:
          $r = "b-";
          break;
        case 6:
          $r = "o+";
          break;
        case 7:
          $r = "o-"
      }
      return $r
    }(this) + " " + this.bank.B_POS, 0, 0, null, null, label_text_options), this.b_neg_label_text = new com.haxepunk.graphics.Text("" + function() {
      var $r;
      switch (BloodType.B_NEG[1]) {
        case 0:
          $r = "ab+";
          break;
        case 1:
          $r = "ab-";
          break;
        case 2:
          $r = "a+";
          break;
        case 3:
          $r = "a-";
          break;
        case 4:
          $r = "b+";
          break;
        case 5:
          $r = "b-";
          break;
        case 6:
          $r = "o+";
          break;
        case 7:
          $r = "o-"
      }
      return $r
    }(this) + " " + this.bank.B_NEG, 0, 0, null, null, label_text_options), this.o_pos_label_text = new com.haxepunk.graphics.Text("" + function() {
      var $r;
      switch (BloodType.O_POS[1]) {
        case 0:
          $r = "ab+";
          break;
        case 1:
          $r = "ab-";
          break;
        case 2:
          $r = "a+";
          break;
        case 3:
          $r = "a-";
          break;
        case 4:
          $r = "b+";
          break;
        case 5:
          $r = "b-";
          break;
        case 6:
          $r = "o+";
          break;
        case 7:
          $r = "o-"
      }
      return $r
    }(this) + " " + this.bank.O_POS, 0, 0, null, null, label_text_options), this.o_neg_label_text = new com.haxepunk.graphics.Text("" + function() {
      var $r;
      switch (BloodType.O_NEG[1]) {
        case 0:
          $r = "ab+";
          break;
        case 1:
          $r = "ab-";
          break;
        case 2:
          $r = "a+";
          break;
        case 3:
          $r = "a-";
          break;
        case 4:
          $r = "b+";
          break;
        case 5:
          $r = "b-";
          break;
        case 6:
          $r = "o+";
          break;
        case 7:
          $r = "o-"
      }
      return $r
    }(this) + " " + this.bank.O_NEG, 0, 0, null, null, label_text_options), this.ab_pos_label = new com.haxepunk.Entity(520, 330, this.ab_pos_label_text), this.ab_neg_label = new com.haxepunk.Entity(520, 345, this.ab_neg_label_text), this.a_pos_label = new com.haxepunk.Entity(520, 360, this.a_pos_label_text), this.a_neg_label = new com.haxepunk.Entity(520, 375, this.a_neg_label_text), this.b_pos_label = new com.haxepunk.Entity(520, 390, this.b_pos_label_text), this.b_neg_label = new com.haxepunk.Entity(520, 405, this.b_neg_label_text), this.o_pos_label = new com.haxepunk.Entity(520, 420, this.o_pos_label_text), this.o_neg_label = new com.haxepunk.Entity(520, 435, this.o_neg_label_text), main.add(this.ab_pos_label), main.add(this.ab_neg_label), main.add(this.a_pos_label), main.add(this.a_neg_label), main.add(this.b_pos_label), main.add(this.b_neg_label), main.add(this.o_pos_label), main.add(this.o_neg_label)
  };
  $hxClasses.Clinic = Clinic, Clinic.__name__ = ["Clinic"], Clinic.__super__ = com.haxepunk.Entity, Clinic.prototype = $extend(com.haxepunk.Entity.prototype, {
    main: null,
    bank: null,
    ab_pos_label: null,
    ab_neg_label: null,
    a_pos_label: null,
    a_neg_label: null,
    b_pos_label: null,
    b_neg_label: null,
    o_pos_label: null,
    o_neg_label: null,
    ab_pos_label_text: null,
    ab_neg_label_text: null,
    a_pos_label_text: null,
    a_neg_label_text: null,
    b_pos_label_text: null,
    b_neg_label_text: null,
    o_pos_label_text: null,
    o_neg_label_text: null,
    set_bank_inventory_count: function(blood_type, count) {
      Reflect.setField(this.bank, Std.string(blood_type), count);
      var text_graphic;
      switch (blood_type[1]) {
        case 0:
          text_graphic = this.ab_pos_label_text;
          break;
        case 1:
          text_graphic = this.ab_neg_label_text;
          break;
        case 2:
          text_graphic = this.a_pos_label_text;
          break;
        case 3:
          text_graphic = this.a_neg_label_text;
          break;
        case 4:
          text_graphic = this.b_pos_label_text;
          break;
        case 5:
          text_graphic = this.b_neg_label_text;
          break;
        case 6:
          text_graphic = this.o_pos_label_text;
          break;
        case 7:
          text_graphic = this.o_neg_label_text
      }
      text_graphic.set_text("" + function() {
        var $r;
        switch (blood_type[1]) {
          case 0:
            $r = "ab+";
            break;
          case 1:
            $r = "ab-";
            break;
          case 2:
            $r = "a+";
            break;
          case 3:
            $r = "a-";
            break;
          case 4:
            $r = "b+";
            break;
          case 5:
            $r = "b-";
            break;
          case 6:
            $r = "o+";
            break;
          case 7:
            $r = "o-"
        }
        return $r
      }(this) + " " + Std.string(Reflect.field(this.bank, Std.string(blood_type))))
    },
    get_blood_count: function(blood_type) {
      return Reflect.field(this.bank, Std.string(blood_type))
    },
    increase_blood_inventory: function(blood_type) {
      this.set_bank_inventory_count(blood_type, Reflect.field(this.bank, Std.string(blood_type)) + 1)
    },
    decrease_blood_inventory: function(blood_type) {
      return Reflect.field(this.bank, Std.string(blood_type)) > 0 ? (this.set_bank_inventory_count(blood_type, Reflect.field(this.bank, Std.string(blood_type)) - 1), !0) : !1
    },
    patient_transfusion: function(patient) {
      var blood_to_inject_str = BloodTransfusionRules.receive_patient(Reflect.copy(this.bank), {
        gender: Std.string(patient.gender),
        blood_type: Std.string(patient.blood_type)
      });
      if ("false" != blood_to_inject_str) {
        var blood_to_inject = Reflect.field(BloodType, blood_to_inject_str);
        Reflect.field(this.bank, Std.string(blood_to_inject)) > 0 ? (Reflect.field(this.bank, Std.string(blood_to_inject)) > 0 ? function($this) {
          var $r;
          return $this.set_bank_inventory_count(blood_to_inject, Reflect.field($this.bank, Std.string(blood_to_inject)) - 1), $r = !0
        }(this) : !1) ? patient.receive_blood(blood_to_inject) : haxe.Log.trace("[[[ERROR]]] blood was about to go below 0.", {
          fileName: "Clinic.hx",
          lineNumber: 151,
          className: "Clinic",
          methodName: "patient_transfusion"
        }) : haxe.Log.trace("[[[WARNING]]] your rules allowed clinic to give " + blood_to_inject_str + " without the clinic having sufficient stock. The patient was not given any blood.", {
          fileName: "Clinic.hx",
          lineNumber: 156,
          className: "Clinic",
          methodName: "patient_transfusion"
        })
      }
    },
    donor_transfusion: function(donor) {
      this.increase_blood_inventory(donor.blood_type)
    },
    __class__: Clinic
  }), openfl.AssetLibrary = function() {}, $hxClasses["openfl.AssetLibrary"] = openfl.AssetLibrary, openfl.AssetLibrary.__name__ = ["openfl", "AssetLibrary"], openfl.AssetLibrary.prototype = {
    eventCallback: null,
    exists: function() {
      return !1
    },
    getBitmapData: function() {
      return null
    },
    getBytes: function() {
      return null
    },
    getFont: function() {
      return null
    },
    getMovieClip: function() {
      return null
    },
    getMusic: function(id) {
      return this.getSound(id)
    },
    getPath: function() {
      return null
    },
    getSound: function() {
      return null
    },
    getText: function(id) {
      var bytes = this.getBytes(id);
      return null == bytes ? null : bytes.readUTFBytes(bytes.length)
    },
    isLocal: function() {
      return !0
    },
    list: function() {
      return null
    },
    load: function(handler) {
      handler(this)
    },
    loadBitmapData: function(id, handler) {
      handler(this.getBitmapData(id))
    },
    loadBytes: function(id, handler) {
      handler(this.getBytes(id))
    },
    loadFont: function(id, handler) {
      handler(this.getFont(id))
    },
    loadMovieClip: function(id, handler) {
      handler(this.getMovieClip(id))
    },
    loadMusic: function(id, handler) {
      handler(this.getMusic(id))
    },
    loadSound: function(id, handler) {
      handler(this.getSound(id))
    },
    loadText: function(id, handler) {
      var callback = function(bytes) {
        handler(null == bytes ? null : bytes.readUTFBytes(bytes.length))
      };
      this.loadBytes(id, callback)
    },
    __class__: openfl.AssetLibrary
  };
  var DefaultAssetLibrary = function() {
    this.type = new haxe.ds.StringMap, this.path = new haxe.ds.StringMap, this.className = new haxe.ds.StringMap, openfl.AssetLibrary.call(this);
    var id;
    id = "graphics/debug/console_debug.png", this.path.set(id, id), this.type.set(id, openfl.AssetType.IMAGE), id = "graphics/debug/console_hidden.png", this.path.set(id, id), this.type.set(id, openfl.AssetType.IMAGE), id = "graphics/debug/console_logo.png", this.path.set(id, id), this.type.set(id, openfl.AssetType.IMAGE), id = "graphics/debug/console_output.png", this.path.set(id, id), this.type.set(id, openfl.AssetType.IMAGE), id = "graphics/debug/console_pause.png", this.path.set(id, id), this.type.set(id, openfl.AssetType.IMAGE), id = "graphics/debug/console_play.png", this.path.set(id, id), this.type.set(id, openfl.AssetType.IMAGE), id = "graphics/debug/console_step.png", this.path.set(id, id), this.type.set(id, openfl.AssetType.IMAGE), id = "graphics/debug/console_visible.png", this.path.set(id, id), this.type.set(id, openfl.AssetType.IMAGE), id = "graphics/preloader/haxepunk.png", this.path.set(id, id), this.type.set(id, openfl.AssetType.IMAGE), id = "font/04B_03__.ttf", this.className.set(id, __ASSET__font_04b_03___ttf), this.type.set(id, openfl.AssetType.FONT), id = "font/04B_03__.ttf.png", this.path.set(id, id), this.type.set(id, openfl.AssetType.IMAGE), id = "graphics/clinic.png", this.path.set(id, id), this.type.set(id, openfl.AssetType.IMAGE), id = "graphics/persons_72x72.png", this.path.set(id, id), this.type.set(id, openfl.AssetType.IMAGE), id = "font/04B_03__.ttf", this.className.set(id, __ASSET__font_5), this.type.set(id, openfl.AssetType.FONT)
  };
  $hxClasses.DefaultAssetLibrary = DefaultAssetLibrary, DefaultAssetLibrary.__name__ = ["DefaultAssetLibrary"], DefaultAssetLibrary.__super__ = openfl.AssetLibrary, DefaultAssetLibrary.prototype = $extend(openfl.AssetLibrary.prototype, {
    className: null,
    path: null,
    type: null,
    lastModified: null,
    timer: null,
    exists: function(id, type) {
      var assetType = this.type.get(id);
      if (null != assetType) {
        if (assetType == type || (type == openfl.AssetType.SOUND || type == openfl.AssetType.MUSIC) && (assetType == openfl.AssetType.MUSIC || assetType == openfl.AssetType.SOUND)) return !0;
        if (type == openfl.AssetType.BINARY || null == type) return !0
      }
      return !1
    },
    getBitmapData: function(id) {
      return openfl.display.BitmapData.fromImage(function($this) {
        var $r, key = $this.path.get(id);
        return $r = ApplicationMain.images.get(key)
      }(this))
    },
    getBytes: function(id) {
      var bytes = null,
        data = function($this) {
          var $r, key = $this.path.get(id);
          return $r = ApplicationMain.urlLoaders.get(key)
        }(this).data;
      return "string" == typeof data ? (bytes = new openfl.utils.ByteArray, bytes.writeUTFBytes(data)) : bytes = js.Boot.__instanceof(data, openfl.utils.ByteArray) ? data : null, null != bytes ? (bytes.position = 0, bytes) : null
    },
    getFont: function(id) {
      return js.Boot.__cast(Type.createInstance(this.className.get(id), []), openfl.text.Font)
    },
    getMusic: function(id) {
      var sound = new openfl.media.Sound;
      return sound.__buffer = !0, sound.load(new openfl.net.URLRequest(this.path.get(id))), sound
    },
    getPath: function(id) {
      return this.path.get(id)
    },
    getSound: function(id) {
      return new openfl.media.Sound(new openfl.net.URLRequest(this.path.get(id)))
    },
    getText: function(id) {
      var bytes = null,
        data = function($this) {
          var $r, key = $this.path.get(id);
          return $r = ApplicationMain.urlLoaders.get(key)
        }(this).data;
      return "string" == typeof data ? data : (bytes = js.Boot.__instanceof(data, openfl.utils.ByteArray) ? data : null, null != bytes ? (bytes.position = 0, bytes.readUTFBytes(bytes.length)) : null)
    },
    isLocal: function() {
      return !0
    },
    list: function(type) {
      for (var items = [], $it0 = this.type.keys(); $it0.hasNext();) {
        var id = $it0.next();
        (null == type || this.exists(id, type)) && items.push(id)
      }
      return items
    },
    loadBitmapData: function(id, handler) {
      if (this.path.exists(id)) {
        var loader = new openfl.display.Loader;
        loader.contentLoaderInfo.addEventListener(openfl.events.Event.COMPLETE, function(event) {
          handler(js.Boot.__cast(event.currentTarget.content, openfl.display.Bitmap).bitmapData)
        }), loader.load(new openfl.net.URLRequest(this.path.get(id)))
      } else handler(this.getBitmapData(id))
    },
    loadBytes: function(id, handler) {
      if (this.path.exists(id)) {
        var loader = new openfl.net.URLLoader;
        loader.addEventListener(openfl.events.Event.COMPLETE, function(event) {
          var bytes = new openfl.utils.ByteArray;
          bytes.writeUTFBytes(event.currentTarget.data), bytes.position = 0, handler(bytes)
        }), loader.load(new openfl.net.URLRequest(this.path.get(id)))
      } else handler(this.getBytes(id))
    },
    loadFont: function(id, handler) {
      handler(this.getFont(id))
    },
    loadMusic: function(id, handler) {
      handler(this.getMusic(id))
    },
    loadSound: function(id, handler) {
      handler(this.getSound(id))
    },
    loadText: function(id, handler) {
      if (this.path.exists(id)) {
        var loader = new openfl.net.URLLoader;
        loader.addEventListener(openfl.events.Event.COMPLETE, function(event) {
          handler(event.currentTarget.data)
        }), loader.load(new openfl.net.URLRequest(this.path.get(id)))
      } else handler(this.getText(id))
    },
    __class__: DefaultAssetLibrary
  }), openfl.text = {}, openfl.text.Font = function() {}, $hxClasses["openfl.text.Font"] = openfl.text.Font, openfl.text.Font.__name__ = ["openfl", "text", "Font"], openfl.text.Font.enumerateFonts = function(enumerateDeviceFonts) {
    return null == enumerateDeviceFonts && (enumerateDeviceFonts = !1), []
  }, openfl.text.Font.registerFont = function() {}, openfl.text.Font.prototype = {
    fontName: null,
    fontStyle: null,
    fontType: null,
    __class__: openfl.text.Font
  };
  var __ASSET__font_04b_03___ttf = function() {
    openfl.text.Font.call(this), this.fontName = "font/04B_03__.ttf"
  };
  $hxClasses.__ASSET__font_04b_03___ttf = __ASSET__font_04b_03___ttf, __ASSET__font_04b_03___ttf.__name__ = ["__ASSET__font_04b_03___ttf"], __ASSET__font_04b_03___ttf.__super__ = openfl.text.Font, __ASSET__font_04b_03___ttf.prototype = $extend(openfl.text.Font.prototype, {
    __class__: __ASSET__font_04b_03___ttf
  });
  var __ASSET__font_5 = function() {
    openfl.text.Font.call(this), this.fontName = "font/04B_03__.ttf"
  };
  $hxClasses.__ASSET__font_5 = __ASSET__font_5, __ASSET__font_5.__name__ = ["__ASSET__font_5"], __ASSET__font_5.__super__ = openfl.text.Font, __ASSET__font_5.prototype = $extend(openfl.text.Font.prototype, {
    __class__: __ASSET__font_5
  });
  var Person = function(main) {
    this.main = main, this.gender = 0 == Std.random(2) ? Gender.MALE : Gender.FEMALE, this.move_speed = 3.9, this.blood_type = Type.allEnums(BloodType)[Std.random(Type.allEnums(BloodType).length)], this.sprite = new com.haxepunk.graphics.Spritemap(com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.HARDWARE ? function($this) {
      var $r, e = com.haxepunk.ds.Either.Right(new com.haxepunk.graphics.atlas.TileAtlas(function() {
        var $r, data = com.haxepunk.graphics.atlas.AtlasData.getAtlasDataByName("graphics/persons_72x72.png", !0);
        return $r = data
      }($this)));
      return $r = e
    }(this) : function() {
      var $r, e1 = com.haxepunk.ds.Either.Left(com.haxepunk.HXP.getBitmap("graphics/persons_72x72.png"));
      return $r = e1
    }(this), 72, 72, $bind(this, this.sprite_loaded)), this.blood_badge_text = new com.haxepunk.graphics.Text(Person.badge_text(this.blood_type), 0, 0, null, null, {
      size: 16
    }), this.blood_badge = new com.haxepunk.Entity(0, 0, this.blood_badge_text), this.main.add(this.blood_badge), com.haxepunk.Entity.call(this, -80, Std.random(480))
  };
  $hxClasses.Person = Person, Person.__name__ = ["Person"], Person.badge_text = function(bt) {
    var str = Std.string(bt);
    return str = StringTools.replace(str, "_POS", "+"), str = StringTools.replace(str, "_NEG", "-")
  }, Person.__super__ = com.haxepunk.Entity, Person.prototype = $extend(com.haxepunk.Entity.prototype, {
    main: null,
    blood_type: null,
    sprite: null,
    gender: null,
    destination: null,
    move_speed: null,
    blood_badge_text: null,
    blood_badge: null,
    update: function() {
      this.blood_badge.visible = this.visible, this.blood_badge.x = (this.followCamera ? this.x + com.haxepunk.HXP.camera.x : this.x) + 26, this.blood_badge.y = (this.followCamera ? this.y + com.haxepunk.HXP.camera.y : this.y) + -11, null != this.destination && (this.distanceToPoint(this.destination.x, this.destination.y, null) < 1 ? this.arrive() : this.moveTowards(this.destination.x, this.destination.y, this.move_speed, null, null))
    },
    removed: function() {
      this.main.remove(this.blood_badge)
    },
    sprite_loaded: function() {},
    arrive: function() {
      this.destination = null
    },
    as_jso: function() {
      return {
        gender: Std.string(this.gender),
        blood_type: Std.string(this.blood_type)
      }
    },
    toGenderGFX: function(frames) {
      return this.gender == Gender.FEMALE ? frames.map(function(frame) {
        return frame + 6
      }) : frames
    },
    __class__: Person
  });
  var Donor = function(main) {
    Person.call(this, main), this.sprite.add("IDLE", this.toGenderGFX([0])), this.sprite.add("YAY", this.toGenderGFX([1])), this.sprite.play("IDLE"), this.addGraphic(this.sprite), this.blood_badge_text.setTextProperty("color", 13788455), this.destination = com.haxepunk._HXP.Position_Impl_._new({
      x: 470,
      y: 230
    })
  };
  $hxClasses.Donor = Donor, Donor.__name__ = ["Donor"], Donor.__super__ = Person, Donor.prototype = $extend(Person.prototype, {
    arrive: function() {
      470 == this.destination.x && 230 == this.destination.y ? (this.visible = !1, haxe.Timer.delay($bind(this, this.donation_complete), 1e4)) : this.main.despawn(this), this.destination = null
    },
    donation_complete: function() {
      this.visible = !0, this.sprite.play("YAY"), this.main.clinic.increase_blood_inventory(this.blood_type);
      var obj = {
        x: 640,
        y: Std.random(480)
      };
      this.destination = com.haxepunk._HXP.Position_Impl_._new(obj)
    },
    __class__: Donor
  });
  var EReg = function(r, opt) {
    opt = opt.split("u").join(""), this.r = new RegExp(r, opt)
  };
  $hxClasses.EReg = EReg, EReg.__name__ = ["EReg"], EReg.prototype = {
    r: null,
    match: function(s) {
      return this.r.global && (this.r.lastIndex = 0), this.r.m = this.r.exec(s), this.r.s = s, null != this.r.m
    },
    matched: function(n) {
      if (null != this.r.m && n >= 0 && n < this.r.m.length) return this.r.m[n];
      throw "EReg::matched"
    },
    matchedPos: function() {
      if (null == this.r.m) throw "No string matched";
      return {
        pos: this.r.m.index,
        len: this.r.m[0].length
      }
    },
    replace: function(s, by) {
      return s.replace(this.r, by)
    },
    __class__: EReg
  };
  var HxOverrides = function() {};
  $hxClasses.HxOverrides = HxOverrides, HxOverrides.__name__ = ["HxOverrides"], HxOverrides.strDate = function(s) {
    var _g = s.length;
    switch (_g) {
      case 8:
        var k = s.split(":"),
          d = new Date;
        return d.setTime(0), d.setUTCHours(k[0]), d.setUTCMinutes(k[1]), d.setUTCSeconds(k[2]), d;
      case 10:
        var k1 = s.split("-");
        return new Date(k1[0], k1[1] - 1, k1[2], 0, 0, 0);
      case 19:
        var k2 = s.split(" "),
          y = k2[0].split("-"),
          t = k2[1].split(":");
        return new Date(y[0], y[1] - 1, y[2], t[0], t[1], t[2]);
      default:
        throw "Invalid date format : " + s
    }
  }, HxOverrides.cca = function(s, index) {
    var x = s.charCodeAt(index);
    return x != x ? void 0 : x
  }, HxOverrides.substr = function(s, pos, len) {
    return null != pos && 0 != pos && null != len && 0 > len ? "" : (null == len && (len = s.length), 0 > pos ? (pos = s.length + pos, 0 > pos && (pos = 0)) : 0 > len && (len = s.length + len - pos), s.substr(pos, len))
  }, HxOverrides.indexOf = function(a, obj, i) {
    var len = a.length;
    for (0 > i && (i += len, 0 > i && (i = 0)); len > i;) {
      if (a[i] === obj) return i;
      i++
    }
    return -1
  }, HxOverrides.remove = function(a, obj) {
    var i = HxOverrides.indexOf(a, obj, 0);
    return -1 == i ? !1 : (a.splice(i, 1), !0)
  }, HxOverrides.iter = function(a) {
    return {
      cur: 0,
      arr: a,
      hasNext: function() {
        return this.cur < this.arr.length
      },
      next: function() {
        return this.arr[this.cur++]
      }
    }
  };
  var List = function() {
    this.length = 0
  };
  $hxClasses.List = List, List.__name__ = ["List"], List.prototype = {
    h: null,
    q: null,
    length: null,
    add: function(item) {
      var x = [item];
      null == this.h ? this.h = x : this.q[1] = x, this.q = x, this.length++
    },
    push: function(item) {
      var x = [item, this.h];
      this.h = x, null == this.q && (this.q = x), this.length++
    },
    first: function() {
      return null == this.h ? null : this.h[0]
    },
    last: function() {
      return null == this.q ? null : this.q[0]
    },
    pop: function() {
      if (null == this.h) return null;
      var x = this.h[0];
      return this.h = this.h[1], null == this.h && (this.q = null), this.length--, x
    },
    isEmpty: function() {
      return null == this.h
    },
    remove: function(v) {
      for (var prev = null, l = this.h; null != l;) {
        if (l[0] == v) return null == prev ? this.h = l[1] : prev[1] = l[1], this.q == l && (this.q = prev), this.length--, !0;
        prev = l, l = l[1]
      }
      return !1
    },
    iterator: function() {
      return {
        h: this.h,
        hasNext: function() {
          return null != this.h
        },
        next: function() {
          if (null == this.h) return null;
          var x = this.h[0];
          return this.h = this.h[1], x
        }
      }
    },
    __class__: List
  }, com.haxepunk.Scene = function() {
    com.haxepunk.Tweener.call(this), this.visible = !0, this.camera = new openfl.geom.Point, this.sprite = new openfl.display.Sprite, this._layerList = new Array, this._add = new Array, this._remove = new Array, this._recycle = new Array, this._update = new List, this._layerDisplay = new haxe.ds.IntMap, this._layers = new haxe.ds.IntMap, this._types = new haxe.ds.StringMap, this._classCount = new haxe.ds.StringMap, this._recycled = new haxe.ds.StringMap, this._entityNames = new haxe.ds.StringMap
  }, $hxClasses["com.haxepunk.Scene"] = com.haxepunk.Scene, com.haxepunk.Scene.__name__ = ["com", "haxepunk", "Scene"], com.haxepunk.Scene.squareRects = function(x1, y1, w1, h1, x2, y2, w2, h2) {
    return x2 + w2 > x1 && x1 + w1 > x2 ? y2 + h2 > y1 && y1 + h1 > y2 ? 0 : y1 > y2 ? (y1 - (y2 + h2)) * (y1 - (y2 + h2)) : (y2 - (y1 + h1)) * (y2 - (y1 + h1)) : y2 + h2 > y1 && y1 + h1 > y2 ? x1 > x2 ? (x1 - (x2 + w2)) * (x1 - (x2 + w2)) : (x2 - (x1 + w1)) * (x2 - (x1 + w1)) : x1 > x2 ? y1 > y2 ? com.haxepunk.HXP.distanceSquared(x2 + w2, y2 + h2, x1, y1) : com.haxepunk.HXP.distanceSquared(x2 + w2, y2, x1, y1 + h1) : y1 > y2 ? com.haxepunk.HXP.distanceSquared(x2, y2 + h2, x1 + w1, y1) : com.haxepunk.HXP.distanceSquared(x2, y2, x1 + w1, y1 + h1)
  }, com.haxepunk.Scene.squarePointRect = function(px, py, rx, ry, rw, rh) {
    return px >= rx && rx + rw >= px ? py >= ry && ry + rh >= py ? 0 : py > ry ? (py - (ry + rh)) * (py - (ry + rh)) : (ry - py) * (ry - py) : py >= ry && ry + rh >= py ? px > rx ? (px - (rx + rw)) * (px - (rx + rw)) : (rx - px) * (rx - px) : px > rx ? py > ry ? com.haxepunk.HXP.distanceSquared(rx + rw, ry + rh, px, py) : com.haxepunk.HXP.distanceSquared(rx + rw, ry, px, py) : py > ry ? com.haxepunk.HXP.distanceSquared(rx, ry + rh, px, py) : (px - rx) * (px - rx) + (py - ry) * (py - ry)
  }, com.haxepunk.Scene.__super__ = com.haxepunk.Tweener, com.haxepunk.Scene.prototype = $extend(com.haxepunk.Tweener.prototype, {
    visible: null,
    camera: null,
    begin: function() {},
    end: function() {},
    focusGained: function() {},
    focusLost: function() {},
    update: function() {
      for (var $it0 = this._update.iterator(); $it0.hasNext();) {
        var e = $it0.next();
        e.active && (e.get_hasTween() && e.updateTweens(), e.update()), null != e._graphic && e._graphic.active && e._graphic.update()
      }
    },
    showLayer: function(layer, show) {
      null == show && (show = !0), this._layerDisplay.set(layer, show)
    },
    layerVisible: function(layer) {
      return !this._layerDisplay.exists(layer) || this._layerDisplay.get(layer)
    },
    layerSort: function(a, b) {
      return b - a
    },
    render: function() {
      com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.HARDWARE && (com.haxepunk.graphics.atlas.AtlasData._scene = this, com.haxepunk.graphics.atlas.AtlasData._scene.sprite.get_graphics().clear());
      for (var _g = 0, _g1 = this._layerList; _g < _g1.length;) {
        var layer = _g1[_g];
        if (++_g, !this._layerDisplay.exists(layer) || this._layerDisplay.get(layer))
          for (var $it0 = this._layers.get(layer).iterator(); $it0.hasNext();) {
            var e = $it0.next();
            e.visible && e.render()
          }
      }
      com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.HARDWARE && null != com.haxepunk.graphics.atlas.AtlasData.active && (null != com.haxepunk.graphics.atlas.AtlasData.active && com.haxepunk.graphics.atlas.AtlasData.active.flush(), com.haxepunk.graphics.atlas.AtlasData.active = null)
    },
    mouseX: null,
    get_mouseX: function() {
      return Std["int"](com.haxepunk.HXP.screen.get_mouseX() + this.camera.x)
    },
    mouseY: null,
    get_mouseY: function() {
      return Std["int"](com.haxepunk.HXP.screen.get_mouseY() + this.camera.y)
    },
    sprite: null,
    add: function(e) {
      return this._add[this._add.length] = e, e
    },
    remove: function(e) {
      return this._remove[this._remove.length] = e, e
    },
    removeAll: function() {
      for (var $it0 = this._update.iterator(); $it0.hasNext();) {
        var e = $it0.next();
        this._remove[this._remove.length] = e
      }
    },
    addList: function(list) {
      for (var $it0 = $iterator(list)(); $it0.hasNext();) {
        var e = $it0.next();
        this.add(e)
      }
    },
    removeList: function(list) {
      for (var $it0 = $iterator(list)(); $it0.hasNext();) {
        var e = $it0.next();
        this.remove(e)
      }
    },
    addGraphic: function(graphic, layer, x, y) {
      null == y && (y = 0), null == x && (x = 0), null == layer && (layer = 0);
      var e = new com.haxepunk.Entity(x, y, graphic);
      return e.set_layer(layer), e.active = !1, this.add(e)
    },
    addMask: function(mask, type, x, y) {
      null == y && (y = 0), null == x && (x = 0);
      var e = new com.haxepunk.Entity(x, y, null, mask);
      return "" != type && e.set_type(type), e.active = e.visible = !1, this.add(e)
    },
    create: function(classType, addToScene, constructorsArgs) {
      null == addToScene && (addToScene = !0);
      var className = Type.getClassName(classType),
        e = this._recycled.get(className);
      return null != e ? (this._recycled.set(className, e._recycleNext), e._recycleNext = null) : e = null != constructorsArgs ? Type.createInstance(classType, constructorsArgs) : Type.createInstance(classType, []), addToScene ? this.add(e) : e
    },
    recycle: function(e) {
      return this._recycle[this._recycle.length] = e, this.remove(e)
    },
    clearRecycled: function(classType) {
      for (var n, className = Type.getClassName(classType), e = this._recycled.get(className); null != e;) n = e._recycleNext, e._recycleNext = null, e = n;
      this._recycled.remove(className)
    },
    clearRecycledAll: function() {
      for (var $it0 = this._recycled.iterator(); $it0.hasNext();) {
        var e1 = $it0.next();
        this.clearRecycled(Type.getClass(e1))
      }
    },
    bringToFront: function(e) {
      if (e._scene != this) return !1;
      var list = this._layers.get(e._layer);
      return list.remove(e), list.push(e), !0
    },
    sendToBack: function(e) {
      if (e._scene != this) return !1;
      var list = this._layers.get(e._layer);
      return list.remove(e), list.add(e), !0
    },
    bringForward: function(e) {
      return e._scene != this ? !1 : !0
    },
    sendBackward: function(e) {
      return e._scene != this ? !1 : !0
    },
    isAtFront: function(e) {
      return e == this._layers.get(e._layer).first()
    },
    isAtBack: function(e) {
      return e == this._layers.get(e._layer).last()
    },
    collideRect: function(type, rX, rY, rWidth, rHeight) {
      if (this._types.exists(type))
        for (var $it0 = this._types.get(type).iterator(); $it0.hasNext();) {
          var e = $it0.next();
          if (e.collidable && e.collideRect(e.followCamera ? e.x + com.haxepunk.HXP.camera.x : e.x, e.followCamera ? e.y + com.haxepunk.HXP.camera.y : e.y, rX, rY, rWidth, rHeight)) return e
        }
      return null
    },
    collidePoint: function(type, pX, pY) {
      var result = null;
      if (this._types.exists(type))
        for (var $it0 = this._types.get(type).iterator(); $it0.hasNext();) {
          var e = $it0.next();
          e.collidable && e.collidePoint(e.followCamera ? e.x + com.haxepunk.HXP.camera.x : e.x, e.followCamera ? e.y + com.haxepunk.HXP.camera.y : e.y, pX, pY) && (null == result ? result = e : e._layer < result._layer && (result = e))
        }
      return result
    },
    collideLine: function(type, fromX, fromY, toX, toY, precision, p) {
      if (null == precision && (precision = 1), 1 > precision && (precision = 1), Math.sqrt((toX - fromX) * (toX - fromX) + (toY - fromY) * (toY - fromY)) < precision) return null != p ? fromX == toX && fromY == toY ? (p.x = toX, p.y = toY, this.collidePoint(type, toX, toY)) : this.collideLine(type, fromX, fromY, toX, toY, 1, p) : this.collidePoint(type, fromX, toY);
      var xSign, xDelta = Std["int"](Math.abs(toX - fromX)),
        yDelta = Std["int"](Math.abs(toY - fromY));
      xSign = toX > fromX ? precision : -precision;
      var ySign;
      ySign = toY > fromY ? precision : -precision;
      var e, x = fromX,
        y = fromY;
      if (xDelta > yDelta)
        if (ySign *= yDelta / xDelta, xSign > 0)
          for (; toX > x;) {
            if (null != (e = this.collidePoint(type, x, y))) return null == p ? e : 2 > precision ? (p.x = x - xSign, p.y = y - ySign, e) : this.collideLine(type, x - xSign | 0, y - ySign | 0, toX, toY, 1, p);
            x += xSign, y += ySign
          } else
            for (; x > toX;) {
              if (null != (e = this.collidePoint(type, x, y))) return null == p ? e : 2 > precision ? (p.x = x - xSign, p.y = y - ySign, e) : this.collideLine(type, x - xSign | 0, y - ySign | 0, toX, toY, 1, p);
              x += xSign, y += ySign
            } else if (xSign *= xDelta / yDelta, ySign > 0)
              for (; toY > y;) {
                if (null != (e = this.collidePoint(type, x, y))) return null == p ? e : 2 > precision ? (p.x = x - xSign, p.y = y - ySign, e) : this.collideLine(type, x - xSign | 0, y - ySign | 0, toX, toY, 1, p);
                x += xSign, y += ySign
              } else
                for (; y > toY;) {
                  if (null != (e = this.collidePoint(type, x, y))) return null == p ? e : 2 > precision ? (p.x = x - xSign, p.y = y - ySign, e) : this.collideLine(type, x - xSign | 0, y - ySign | 0, toX, toY, 1, p);
                  x += xSign, y += ySign
                }
            if (precision > 1) {
              if (null == p) return this.collidePoint(type, toX, toY);
              if (null != this.collidePoint(type, toX, toY)) return this.collideLine(type, x - xSign | 0, y - ySign | 0, toX, toY, 1, p)
            }
      return null != p && (p.x = toX, p.y = toY), null
    },
    collideRectInto: function(type, rX, rY, rWidth, rHeight, into) {
      var n = into.length;
      if (this._types.exists(type))
        for (var $it0 = this._types.get(type).iterator(); $it0.hasNext();) {
          var e = $it0.next();
          e.collidable && e.collideRect(e.followCamera ? e.x + com.haxepunk.HXP.camera.x : e.x, e.followCamera ? e.y + com.haxepunk.HXP.camera.y : e.y, rX, rY, rWidth, rHeight) && (into[n++] = e)
        }
    },
    collideCircleInto: function(type, circleX, circleY, radius, into) {
      if (this._types.exists(type)) {
        var n = into.length;
        radius *= radius;
        for (var $it0 = this._types.get(type).iterator(); $it0.hasNext();) {
          var e = $it0.next();
          com.haxepunk.HXP.distanceSquared(circleX, circleY, e.followCamera ? e.x + com.haxepunk.HXP.camera.x : e.x, e.followCamera ? e.y + com.haxepunk.HXP.camera.y : e.y) < radius && (into[n++] = e)
        }
      }
    },
    collidePointInto: function(type, pX, pY, into) {
      if (this._types.exists(type))
        for (var n = into.length, $it0 = this._types.get(type).iterator(); $it0.hasNext();) {
          var e = $it0.next();
          e.collidable && e.collidePoint(e.followCamera ? e.x + com.haxepunk.HXP.camera.x : e.x, e.followCamera ? e.y + com.haxepunk.HXP.camera.y : e.y, pX, pY) && (into[n++] = e)
        }
    },
    nearestToRect: function(type, x, y, width, height) {
      if (!this._types.exists(type)) return null;
      for (var dist, nearDist = 179 * Math.pow(10, 306), near = null, $it0 = this._types.get(type).iterator(); $it0.hasNext();) {
        var e = $it0.next();
        dist = com.haxepunk.Scene.squareRects(x, y, width, height, (e.followCamera ? e.x + com.haxepunk.HXP.camera.x : e.x) - e.originX, (e.followCamera ? e.y + com.haxepunk.HXP.camera.y : e.y) - e.originY, e.width, e.height), nearDist > dist && (nearDist = dist, near = e)
      }
      return near
    },
    nearestToEntity: function(type, e, useHitboxes) {
      if (null == useHitboxes && (useHitboxes = !1), !this._types.exists(type)) return null;
      if (useHitboxes) return this.nearestToRect(type, (e.followCamera ? e.x + com.haxepunk.HXP.camera.x : e.x) - e.originX, (e.followCamera ? e.y + com.haxepunk.HXP.camera.y : e.y) - e.originY, e.width, e.height);
      var dist, x, nearDist = 179 * Math.pow(10, 306),
        near = null;
      x = (e.followCamera ? e.x + com.haxepunk.HXP.camera.x : e.x) - e.originX;
      var y;
      y = (e.followCamera ? e.y + com.haxepunk.HXP.camera.y : e.y) - e.originY;
      for (var $it0 = this._types.get(type).iterator(); $it0.hasNext();) {
        var n = $it0.next();
        dist = (x - (n.followCamera ? n.x + com.haxepunk.HXP.camera.x : n.x)) * (x - (n.followCamera ? n.x + com.haxepunk.HXP.camera.x : n.x)) + (y - (n.followCamera ? n.y + com.haxepunk.HXP.camera.y : n.y)) * (y - (n.followCamera ? n.y + com.haxepunk.HXP.camera.y : n.y)), nearDist > dist && (nearDist = dist, near = n)
      }
      return near
    },
    nearestToClass: function(type, e, classType, useHitboxes) {
      if (null == useHitboxes && (useHitboxes = !1), !this._types.exists(type)) return null;
      if (useHitboxes) return this.nearestToRect(type, (e.followCamera ? e.x + com.haxepunk.HXP.camera.x : e.x) - e.originX, (e.followCamera ? e.y + com.haxepunk.HXP.camera.y : e.y) - e.originY, e.width, e.height);
      var dist, x, nearDist = 179 * Math.pow(10, 306),
        near = null;
      x = (e.followCamera ? e.x + com.haxepunk.HXP.camera.x : e.x) - e.originX;
      var y;
      y = (e.followCamera ? e.y + com.haxepunk.HXP.camera.y : e.y) - e.originY;
      for (var $it0 = this._types.get(type).iterator(); $it0.hasNext();) {
        var n = $it0.next();
        dist = (x - (n.followCamera ? n.x + com.haxepunk.HXP.camera.x : n.x)) * (x - (n.followCamera ? n.x + com.haxepunk.HXP.camera.x : n.x)) + (y - (n.followCamera ? n.y + com.haxepunk.HXP.camera.y : n.y)) * (y - (n.followCamera ? n.y + com.haxepunk.HXP.camera.y : n.y)), nearDist > dist && js.Boot.__instanceof(e, classType) && (nearDist = dist, near = n)
      }
      return near
    },
    nearestToPoint: function(type, x, y, useHitboxes) {
      if (null == useHitboxes && (useHitboxes = !1), !this._types.exists(type)) return null;
      var dist, nearDist = 179 * Math.pow(10, 306),
        near = null;
      if (useHitboxes)
        for (var $it0 = this._types.get(type).iterator(); $it0.hasNext();) {
          var n = $it0.next();
          dist = com.haxepunk.Scene.squarePointRect(x, y, (n.followCamera ? n.x + com.haxepunk.HXP.camera.x : n.x) - n.originX, (n.followCamera ? n.y + com.haxepunk.HXP.camera.y : n.y) - n.originY, n.width, n.height), nearDist > dist && (nearDist = dist, near = n)
        } else
          for (var $it1 = this._types.get(type).iterator(); $it1.hasNext();) {
            var n1 = $it1.next();
            dist = (x - (n1.followCamera ? n1.x + com.haxepunk.HXP.camera.x : n1.x)) * (x - (n1.followCamera ? n1.x + com.haxepunk.HXP.camera.x : n1.x)) + (y - (n1.followCamera ? n1.y + com.haxepunk.HXP.camera.y : n1.y)) * (y - (n1.followCamera ? n1.y + com.haxepunk.HXP.camera.y : n1.y)), nearDist > dist && (nearDist = dist, near = n1)
          }
      return near
    },
    get_count: function() {
      return this._update.length
    },
    typeCount: function(type) {
      return this._types.exists(type) ? this._types.get(type).length : 0
    },
    classCount: function(c) {
      return this._classCount.exists(c) ? this._classCount.get(c) : 0
    },
    layerCount: function(layer) {
      return this._layers.exists(layer) ? this._layers.get(layer).length : 0
    },
    first: null,
    get_first: function() {
      return this._update.first()
    },
    layers: null,
    get_layers: function() {
      return this._layerList.length
    },
    entitiesForType: function(type) {
      return this._types.exists(type) ? this._types.get(type) : null
    },
    classFirst: function(c) {
      for (var $it0 = this._update.iterator(); $it0.hasNext();) {
        var e = $it0.next();
        if (js.Boot.__instanceof(e, c)) return e
      }
      return null
    },
    layerFirst: function(layer) {
      return this._layers.exists(layer) ? this._layers.get(layer).first() : null
    },
    layerLast: function(layer) {
      return this._layers.exists(layer) ? this._layers.get(layer).last() : null
    },
    farthest: null,
    get_farthest: function() {
      return 0 == this._layerList.length ? null : this._layers.get(this._layerList[this._layerList.length - 1]).last()
    },
    nearest: null,
    get_nearest: function() {
      return 0 == this._layerList.length ? null : this._layers.get(this._layerList[0]).first()
    },
    layerFarthest: null,
    get_layerFarthest: function() {
      return 0 == this._layerList.length ? 0 : this._layerList[this._layerList.length - 1]
    },
    layerNearest: null,
    get_layerNearest: function() {
      return 0 == this._layerList.length ? 0 : this._layerList[0]
    },
    uniqueTypes: null,
    get_uniqueTypes: function() {
      for (var i = 0, $it0 = this._types.iterator(); $it0.hasNext();) {
        {
          $it0.next()
        }
        i++
      }
      return i
    },
    getType: function(type, into) {
      if (this._types.exists(type))
        for (var n = into.length, $it0 = this._types.get(type).iterator(); $it0.hasNext();) {
          var e = $it0.next();
          into[n++] = e
        }
    },
    getClass: function(c, into) {
      for (var n = into.length, $it0 = this._update.iterator(); $it0.hasNext();) {
        var e = $it0.next();
        js.Boot.__instanceof(e, c) && (into[n++] = e)
      }
    },
    getLayer: function(layer, into) {
      for (var n = into.length, $it0 = this._layers.get(layer).iterator(); $it0.hasNext();) {
        var e = $it0.next();
        into[n++] = e
      }
    },
    getAll: function(into) {
      for (var n = into.length, $it0 = this._update.iterator(); $it0.hasNext();) {
        var e = $it0.next();
        into[n++] = e
      }
    },
    getInstance: function(name) {
      return this._entityNames.get(name)
    },
    updateLists: function(shouldAdd) {
      null == shouldAdd && (shouldAdd = !0);
      if (this._remove.length > 0) {
        for (var _g = 0, _g1 = this._remove; _g < _g1.length;) {
          var e1 = _g1[_g];
          if (++_g, null != e1._scene) e1._scene == this && (e1.removed(), e1._scene = null, this.removeUpdate(e1), this.removeRender(e1), "" != e1._type && this.removeType(e1), "" != e1._name && this._entityNames.remove(e1._name), e1.autoClear && e1.get_hasTween() && e1.clearTweens());
          else {
            var idx = HxOverrides.indexOf(this._add, e1, 0);
            idx >= 0 && this._add.splice(idx, 1)
          }
        }
        this._remove.length = 0
      }
      if (shouldAdd && this._add.length > 0) {
        for (var _g2 = 0, _g11 = this._add; _g2 < _g11.length;) {
          var e2 = _g11[_g2];
          ++_g2, null == e2._scene && (e2._scene = this, this.addUpdate(e2), this.addRender(e2), "" != e2._type && this.addType(e2), "" != e2._name && this._entityNames.set(e2._name, e2), e2.added())
        }
        this._add.length = 0
      }
      if (this._recycle.length > 0) {
        for (var _g3 = 0, _g12 = this._recycle; _g3 < _g12.length;) {
          var e3 = _g12[_g3];
          ++_g3, null == e3._scene && null == e3._recycleNext && (e3._recycleNext = this._recycled.get(e3._class), this._recycled.set(e3._class, e3))
        }
        this._recycle.length = 0
      }
    },
    addUpdate: function(e) {
      this._update.add(e), 0 != this._classCount.get(e._class) && this._classCount.set(e._class, 0);
      var value = this._classCount.get(e._class) + 1;
      this._classCount.set(e._class, value)
    },
    removeUpdate: function(e) {
      this._update.remove(e);
      var value = this._classCount.get(e._class) - 1;
      this._classCount.set(e._class, value)
    },
    addRender: function(e) {
      var list;
      this._layers.exists(e._layer) ? list = this._layers.get(e._layer) : (list = new List, this._layers.set(e._layer, list), 0 == this._layerList.length ? this._layerList[0] = e._layer : com.haxepunk.HXP.insertSortedKey(this._layerList, e._layer, $bind(this, this.layerSort))), list.add(e)
    },
    removeRender: function(e) {
      var list = this._layers.get(e._layer);
      list.remove(e), 0 == list.length && (HxOverrides.remove(this._layerList, e._layer), this._layers.remove(e._layer))
    },
    addType: function(e) {
      var list;
      this._types.exists(e._type) ? list = this._types.get(e._type) : (list = new List, this._types.set(e._type, list)), list.push(e)
    },
    removeType: function(e) {
      if (this._types.exists(e._type)) {
        var list = this._types.get(e._type);
        list.remove(e), 0 == list.length && this._types.remove(e._type)
      }
    },
    registerName: function(e) {
      this._entityNames.set(e._name, e)
    },
    unregisterName: function(e) {
      this._entityNames.remove(e._name)
    },
    _add: null,
    _remove: null,
    _recycle: null,
    _update: null,
    _layerList: null,
    _layerDisplay: null,
    _layers: null,
    _classCount: null,
    _types: null,
    _recycled: null,
    _entityNames: null,
    __class__: com.haxepunk.Scene,
    __properties__: $extend(com.haxepunk.Tweener.prototype.__properties__, {
      get_uniqueTypes: "get_uniqueTypes",
      get_layerNearest: "get_layerNearest",
      get_layerFarthest: "get_layerFarthest",
      get_nearest: "get_nearest",
      get_farthest: "get_farthest",
      get_layers: "get_layers",
      get_first: "get_first",
      get_count: "get_count",
      get_mouseY: "get_mouseY",
      get_mouseX: "get_mouseX"
    })
  });
  var MainScene = function() {
    this.patients = new List, this.donors = new List, com.haxepunk.Scene.call(this)
  };
  $hxClasses.MainScene = MainScene, MainScene.__name__ = ["MainScene"], MainScene.__super__ = com.haxepunk.Scene, MainScene.prototype = $extend(com.haxepunk.Scene.prototype, {
    simulator: null,
    patients: null,
    donors: null,
    clinic: null,
    begin: function() {
      this.simulator = new Simulator(this), this.clinic = new Clinic(this), this.add(this.clinic)
    },
    spawn: function(t) {
      switch (t) {
        case Patient:
          var patient = new Patient(this);
          this.add(patient), this.patients.add(patient);
          break;
        case Donor:
          var donor = new Donor(this);
          this.add(donor), this.donors.add(donor)
      }
    },
    spawner: function() {
      0 == Std.random(100) ? this.spawn(Patient) : 0 == Std.random(100) && this.spawn(Donor)
    },
    despawn: function(person) {
      var _g = Type.getClass(person);
      switch (_g) {
        case Patient:
          this.remove(js.Boot.__cast(person, Patient)), this.patients.remove(js.Boot.__cast(person, Patient));
          break;
        case Donor:
          this.remove(js.Boot.__cast(person, Donor)), this.donors.remove(js.Boot.__cast(person, Donor))
      }
    },
    __class__: MainScene
  });
  var IMap = function() {};
  $hxClasses.IMap = IMap, IMap.__name__ = ["IMap"], IMap.prototype = {
    get: null,
    set: null,
    __class__: IMap
  }, Math.__name__ = ["Math"];
  var NMEPreloader = function() {
    openfl.display.Sprite.call(this);
    var backgroundColor = this.getBackgroundColor(),
      r = backgroundColor >> 16 & 255,
      g = backgroundColor >> 8 & 255,
      b = 255 & backgroundColor,
      perceivedLuminosity = .299 * r + .587 * g + .114 * b,
      color = 0;
    70 > perceivedLuminosity && (color = 16777215);
    var x = 30,
      height = 9,
      y = this.getHeight() / 2 - height / 2,
      width = this.getWidth() - 2 * x,
      padding = 3;
    this.outline = new openfl.display.Sprite, this.outline.get_graphics().lineStyle(1, color, .15, !0), this.outline.get_graphics().drawRoundRect(0, 0, width, height, 2 * padding, 2 * padding), this.outline.set_x(x), this.outline.set_y(y), this.addChild(this.outline), this.progress = new openfl.display.Sprite, this.progress.get_graphics().beginFill(color, .35), this.progress.get_graphics().drawRect(0, 0, width - 2 * padding, height - 2 * padding), this.progress.set_x(x + padding), this.progress.set_y(y + padding), this.progress.set_scaleX(0), this.addChild(this.progress)
  };
  $hxClasses.NMEPreloader = NMEPreloader, NMEPreloader.__name__ = ["NMEPreloader"], NMEPreloader.__super__ = openfl.display.Sprite, NMEPreloader.prototype = $extend(openfl.display.Sprite.prototype, {
    outline: null,
    progress: null,
    getBackgroundColor: function() {
      return 226446
    },
    getHeight: function() {
      var height = 480;
      return height > 0 ? height : openfl.Lib.current.stage.stageHeight
    },
    getWidth: function() {
      var width = 640;
      return width > 0 ? width : openfl.Lib.current.stage.stageWidth
    },
    onInit: function() {},
    onLoaded: function() {
      this.dispatchEvent(new openfl.events.Event(openfl.events.Event.COMPLETE))
    },
    onUpdate: function(bytesLoaded, bytesTotal) {
      var percentLoaded = bytesLoaded / bytesTotal;
      this.progress.set_scaleX(percentLoaded)
    },
    __class__: NMEPreloader
  });
  var Patient = function(main) {
    Person.call(this, main), this.sprite.add("SICK_BEFORE", this.toGenderGFX([2])), this.sprite.add("HEALTHY_AFTER", this.toGenderGFX([3])), this.sprite.add("SICK_AFTER", this.toGenderGFX([4])), this.sprite.add("DEAD", this.toGenderGFX([5])), this.sprite.play("SICK_BEFORE"), this.addGraphic(this.sprite), this.blood_badge_text.setTextProperty("color", 6868465), this.destination = com.haxepunk._HXP.Position_Impl_._new({
      x: 470,
      y: 230
    })
  };
  $hxClasses.Patient = Patient, Patient.__name__ = ["Patient"], Patient.__super__ = Person, Patient.prototype = $extend(Person.prototype, {
    recently_got_blood: null,
    blood_received: null,
    arrive: function() {
      470 == this.destination.x && 230 == this.destination.y ? (this.visible = !1, haxe.Timer.delay($bind(this, this.transfusion_complete), 6e3)) : this.recently_got_blood ? haxe.Timer.delay($bind(this, this.resolve_blood_transfusion), Std.random(5e3)) : "HEALTHY_AFTER" == this.sprite.get_currentAnim() ? this.main.despawn(this) : this.sprite.play("DEAD"), this.destination = null
    },
    receive_blood: function(new_blood) {
      this.blood_received = new_blood, this.blood_badge_text.set_text(Person.badge_text(this.blood_type) + " < " + Person.badge_text(this.blood_received)), this.blood_badge_text.x = -26
    },
    transfusion_complete: function() {
      this.visible = !0, this.sprite.play("SICK_AFTER"), this.recently_got_blood = !0, this.main.clinic.patient_transfusion(this);
      var obj = {
        x: .75 * Std.random(640),
        y: .75 * Std.random(480)
      };
      this.destination = com.haxepunk._HXP.Position_Impl_._new(obj)
    },
    resolve_blood_transfusion: function() {
      var _g = this;
      if (null != this.blood_received)
        if (function($this) {
            var $r, this1, this2 = BloodTypeTools.get_blood_map();
            return this1 = this2.get($this.blood_type), $r = this1.get($this.blood_received)
          }(this)) {
          this.sprite.play("HEALTHY_AFTER");
          var obj = {
            x: -100,
            y: 1.35 * Std.random(480)
          };
          this.destination = com.haxepunk._HXP.Position_Impl_._new(obj)
        } else {
          this.move_speed = .7;
          var obj1 = {
            x: .95 * Std.random(640),
            y: .86 * Std.random(480)
          };
          this.destination = com.haxepunk._HXP.Position_Impl_._new(obj1)
        } else haxe.Timer.delay(function() {
        _g.destination = com.haxepunk._HXP.Position_Impl_._new({
          x: 470,
          y: 230
        })
      }, Std.random(1e4));
      this.recently_got_blood = !1
    },
    __class__: Patient
  });
  var Gender = $hxClasses.Gender = {
    __ename__: !0,
    __constructs__: ["MALE", "FEMALE"]
  };
  Gender.MALE = ["MALE", 0], Gender.MALE.toString = $estr, Gender.MALE.__enum__ = Gender, Gender.FEMALE = ["FEMALE", 1], Gender.FEMALE.toString = $estr, Gender.FEMALE.__enum__ = Gender, Gender.__empty_constructs__ = [Gender.MALE, Gender.FEMALE];
  var Simulator = function(main) {
    this.main = main, this.age = 0;
    try {
      this.simulation_speed = BloodTransfusionRules.simulation_speed
    } catch (e) {
      this.simulation_speed = 50
    }
    this.change_simulation_speed(this.simulation_speed)
  };
  $hxClasses.Simulator = Simulator, Simulator.__name__ = ["Simulator"], Simulator.prototype = {
    simulation_speed: null,
    main: null,
    ticker: null,
    age: null,
    change_simulation_speed: function(new_speed) {
      null != this.ticker && this.ticker.stop(), new_speed > 20000 ? (haxe.Log.trace("Warning! capped speed " + new_speed + " down to max: 200.0", {
        fileName: "Simulator.hx",
        lineNumber: 46,
        className: "Simulator",
        methodName: "change_simulation_speed"
      }), new_speed = 20000) : 1 > new_speed && (haxe.Log.trace("Warning! capped speed " + new_speed + " up to min: 1.0", {
        fileName: "Simulator.hx",
        lineNumber: 49,
        className: "Simulator",
        methodName: "change_simulation_speed"
      }), new_speed = 1), this.simulation_speed = new_speed, this.ticker = new haxe.Timer(1e4 / this.simulation_speed | 0), this.ticker.run = $bind(this, this.tick)
    },
    tick: function() {
      this.age++, this.main.spawner(this.age)
    },
    __class__: Simulator
  };
  var Std = function() {};
  $hxClasses.Std = Std, Std.__name__ = ["Std"], Std.string = function(s) {
    return js.Boot.__string_rec(s, "")
  }, Std["int"] = function(x) {
    return 0 | x
  }, Std.parseInt = function(x) {
    var v = parseInt(x, 10);
    return 0 != v || 120 != HxOverrides.cca(x, 1) && 88 != HxOverrides.cca(x, 1) || (v = parseInt(x)), isNaN(v) ? null : v
  }, Std.parseFloat = function(x) {
    return parseFloat(x)
  }, Std.random = function(x) {
    return 0 >= x ? 0 : Math.floor(Math.random() * x)
  };
  var StringBuf = function() {
    this.b = ""
  };
  $hxClasses.StringBuf = StringBuf, StringBuf.__name__ = ["StringBuf"], StringBuf.prototype = {
    b: null,
    add: function(x) {
      this.b += Std.string(x)
    },
    addSub: function(s, pos, len) {
      this.b += null == len ? HxOverrides.substr(s, pos, null) : HxOverrides.substr(s, pos, len)
    },
    __class__: StringBuf
  };
  var StringTools = function() {};
  $hxClasses.StringTools = StringTools, StringTools.__name__ = ["StringTools"], StringTools.urlEncode = function(s) {
    return encodeURIComponent(s)
  }, StringTools.urlDecode = function(s) {
    return decodeURIComponent(s.split("+").join(" "))
  }, StringTools.startsWith = function(s, start) {
    return s.length >= start.length && HxOverrides.substr(s, 0, start.length) == start
  }, StringTools.replace = function(s, sub, by) {
    return s.split(sub).join(by)
  }, StringTools.hex = function(n, digits) {
    var s = "",
      hexChars = "0123456789ABCDEF";
    do s = hexChars.charAt(15 & n) + s, n >>>= 4; while (n > 0);
    if (null != digits)
      for (; s.length < digits;) s = "0" + s;
    return s
  }, StringTools.fastCodeAt = function(s, index) {
    return s.charCodeAt(index)
  };
  var XmlType = $hxClasses.XmlType = {
    __ename__: !0,
    __constructs__: []
  };
  XmlType.__empty_constructs__ = [];
  var Xml = function() {};
  $hxClasses.Xml = Xml, Xml.__name__ = ["Xml"], Xml.Element = null, Xml.PCData = null, Xml.CData = null, Xml.Comment = null, Xml.DocType = null, Xml.ProcessingInstruction = null, Xml.Document = null, Xml.parse = function(str) {
    return haxe.xml.Parser.parse(str)
  }, Xml.createElement = function(name) {
    var r = new Xml;
    return r.nodeType = Xml.Element, r._children = new Array, r._attributes = new haxe.ds.StringMap, r.set_nodeName(name), r
  }, Xml.createPCData = function(data) {
    var r = new Xml;
    return r.nodeType = Xml.PCData, r.set_nodeValue(data), r
  }, Xml.createCData = function(data) {
    var r = new Xml;
    return r.nodeType = Xml.CData, r.set_nodeValue(data), r
  }, Xml.createComment = function(data) {
    var r = new Xml;
    return r.nodeType = Xml.Comment, r.set_nodeValue(data), r
  }, Xml.createDocType = function(data) {
    var r = new Xml;
    return r.nodeType = Xml.DocType, r.set_nodeValue(data), r
  }, Xml.createProcessingInstruction = function(data) {
    var r = new Xml;
    return r.nodeType = Xml.ProcessingInstruction, r.set_nodeValue(data), r
  }, Xml.createDocument = function() {
    var r = new Xml;
    return r.nodeType = Xml.Document, r._children = new Array, r
  }, Xml.prototype = {
    nodeType: null,
    _nodeName: null,
    _nodeValue: null,
    _attributes: null,
    _children: null,
    _parent: null,
    get_nodeName: function() {
      if (this.nodeType != Xml.Element) throw "bad nodeType";
      return this._nodeName
    },
    set_nodeName: function(n) {
      if (this.nodeType != Xml.Element) throw "bad nodeType";
      return this._nodeName = n
    },
    set_nodeValue: function(v) {
      if (this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
      return this._nodeValue = v
    },
    get: function(att) {
      if (this.nodeType != Xml.Element) throw "bad nodeType";
      return this._attributes.get(att)
    },
    set: function(att, value) {
      if (this.nodeType != Xml.Element) throw "bad nodeType";
      this._attributes.set(att, value)
    },
    exists: function(att) {
      if (this.nodeType != Xml.Element) throw "bad nodeType";
      return this._attributes.exists(att)
    },
    elements: function() {
      if (null == this._children) throw "bad nodetype";
      return {
        cur: 0,
        x: this._children,
        hasNext: function() {
          for (var k = this.cur, l = this.x.length; l > k && this.x[k].nodeType != Xml.Element;) k += 1;
          return this.cur = k, l > k
        },
        next: function() {
          for (var k1 = this.cur, l1 = this.x.length; l1 > k1;) {
            var n = this.x[k1];
            if (k1 += 1, n.nodeType == Xml.Element) return this.cur = k1, n
          }
          return null
        }
      }
    },
    firstElement: function() {
      if (null == this._children) throw "bad nodetype";
      for (var cur = 0, l = this._children.length; l > cur;) {
        var n = this._children[cur];
        if (n.nodeType == Xml.Element) return n;
        cur++
      }
      return null
    },
    addChild: function(x) {
      if (null == this._children) throw "bad nodetype";
      null != x._parent && HxOverrides.remove(x._parent._children, x), x._parent = this, this._children.push(x)
    },
    __class__: Xml,
    __properties__: {
      set_nodeValue: "set_nodeValue",
      set_nodeName: "set_nodeName",
      get_nodeName: "get_nodeName"
    }
  }, com.haxepunk._Entity = {}, com.haxepunk._Entity.SolidType_Impl_ = function() {}, $hxClasses["com.haxepunk._Entity.SolidType_Impl_"] = com.haxepunk._Entity.SolidType_Impl_, com.haxepunk._Entity.SolidType_Impl_.__name__ = ["com", "haxepunk", "_Entity", "SolidType_Impl_"], com.haxepunk._Entity.SolidType_Impl_.__properties__ = {
    get_type: "get_type"
  }, com.haxepunk._Entity.SolidType_Impl_._new = function(e) {
    return e
  }, com.haxepunk._Entity.SolidType_Impl_.get_type = function(this1) {
    return this1
  }, com.haxepunk._Entity.SolidType_Impl_.fromLeft = function(v) {
    var e = com.haxepunk.ds.Either.Left(v);
    return e
  }, com.haxepunk._Entity.SolidType_Impl_.fromRight = function(v) {
    var e = com.haxepunk.ds.Either.Right(v);
    return e
  }, com.haxepunk._Graphic = {}, com.haxepunk._Graphic.TileType_Impl_ = function() {}, $hxClasses["com.haxepunk._Graphic.TileType_Impl_"] = com.haxepunk._Graphic.TileType_Impl_, com.haxepunk._Graphic.TileType_Impl_.__name__ = ["com", "haxepunk", "_Graphic", "TileType_Impl_"], com.haxepunk._Graphic.TileType_Impl_.__properties__ = {
    get_type: "get_type"
  }, com.haxepunk._Graphic.TileType_Impl_._new = function(e) {
    return e
  }, com.haxepunk._Graphic.TileType_Impl_.get_type = function(this1) {
    return this1
  }, com.haxepunk._Graphic.TileType_Impl_.fromString = function(tileset) {
    if (com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.HARDWARE) {
      var e = com.haxepunk.ds.Either.Right(new com.haxepunk.graphics.atlas.TileAtlas(function() {
        var $r, data = com.haxepunk.graphics.atlas.AtlasData.getAtlasDataByName(tileset, !0);
        return $r = data
      }(this)));
      return e
    }
    var e1 = com.haxepunk.ds.Either.Left(com.haxepunk.HXP.getBitmap(tileset));
    return e1
  }, com.haxepunk._Graphic.TileType_Impl_.fromTileAtlas = function(atlas) {
    var e = com.haxepunk.ds.Either.Right(atlas);
    return e
  }, com.haxepunk._Graphic.TileType_Impl_.fromBitmapData = function(bd) {
    if (com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.HARDWARE) {
      var e = com.haxepunk.ds.Either.Right(new com.haxepunk.graphics.atlas.TileAtlas(function() {
        var $r, data = new com.haxepunk.graphics.atlas.AtlasData(bd);
        return $r = data
      }(this)));
      return e
    }
    var e1 = com.haxepunk.ds.Either.Left(bd);
    return e1
  }, com.haxepunk._Graphic.ImageType_Impl_ = function() {}, $hxClasses["com.haxepunk._Graphic.ImageType_Impl_"] = com.haxepunk._Graphic.ImageType_Impl_, com.haxepunk._Graphic.ImageType_Impl_.__name__ = ["com", "haxepunk", "_Graphic", "ImageType_Impl_"], com.haxepunk._Graphic.ImageType_Impl_.__properties__ = {
    get_type: "get_type"
  }, com.haxepunk._Graphic.ImageType_Impl_._new = function(e) {
    return e
  }, com.haxepunk._Graphic.ImageType_Impl_.get_type = function(this1) {
    return this1
  }, com.haxepunk._Graphic.ImageType_Impl_.fromString = function(s) {
    if (com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.HARDWARE) {
      var e = com.haxepunk.ds.Either.Right(com.haxepunk.graphics.atlas.Atlas.loadImageAsRegion(function() {
        var $r, data = com.haxepunk.graphics.atlas.AtlasData.getAtlasDataByName(s, !0);
        return $r = data
      }(this)));
      return e
    }
    var e1 = com.haxepunk.ds.Either.Left(com.haxepunk.HXP.getBitmap(s));
    return e1
  }, com.haxepunk._Graphic.ImageType_Impl_.fromTileAtlas = function(atlas) {
    var e = com.haxepunk.ds.Either.Right(atlas.getRegion(0));
    return e
  }, com.haxepunk._Graphic.ImageType_Impl_.fromAtlasRegion = function(region) {
    var e = com.haxepunk.ds.Either.Right(region);
    return e
  }, com.haxepunk._Graphic.ImageType_Impl_.fromBitmapData = function(bd) {
    if (com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.HARDWARE) {
      var e = com.haxepunk.ds.Either.Right(com.haxepunk.graphics.atlas.Atlas.loadImageAsRegion(function() {
        var $r, data = new com.haxepunk.graphics.atlas.AtlasData(bd);
        return $r = data
      }(this)));
      return e
    }
    var e1 = com.haxepunk.ds.Either.Left(bd);
    return e1
  }, com.haxepunk.Graphic = function() {
    this.active = !1, this._visible = !0, this.set_x(this.y = 0), this.scrollX = this.scrollY = 1, this.relative = !0, this._scroll = !0, this._point = new openfl.geom.Point
  }, $hxClasses["com.haxepunk.Graphic"] = com.haxepunk.Graphic, com.haxepunk.Graphic.__name__ = ["com", "haxepunk", "Graphic"], com.haxepunk.Graphic.prototype = {
    active: null,
    get_visible: function() {
      return this._visible
    },
    set_visible: function(value) {
      return this._visible = value
    },
    x: null,
    get_x: function() {
      return this.x
    },
    set_x: function(value) {
      return this.x = value
    },
    y: null,
    get_y: function() {
      return this.y
    },
    set_y: function(value) {
      return this.y = value
    },
    scrollX: null,
    scrollY: null,
    relative: null,
    blit: null,
    update: function() {},
    destroy: function() {},
    render: function() {},
    renderAtlas: function() {},
    pause: function() {
      this.active = !1
    },
    resume: function() {
      this.active = !0
    },
    _scroll: null,
    _point: null,
    _entity: null,
    _visible: null,
    __class__: com.haxepunk.Graphic,
    __properties__: {
      set_y: "set_y",
      get_y: "get_y",
      set_x: "set_x",
      get_x: "get_x",
      set_visible: "set_visible",
      get_visible: "get_visible"
    }
  }, com.haxepunk._HXP = {}, com.haxepunk._HXP.Position_Impl_ = function() {}, $hxClasses["com.haxepunk._HXP.Position_Impl_"] = com.haxepunk._HXP.Position_Impl_, com.haxepunk._HXP.Position_Impl_.__name__ = ["com", "haxepunk", "_HXP", "Position_Impl_"], com.haxepunk._HXP.Position_Impl_.__properties__ = {
    set_y: "set_y",
    get_y: "get_y",
    set_x: "set_x",
    get_x: "get_x"
  }, com.haxepunk._HXP.Position_Impl_._new = function(obj) {
    return obj
  }, com.haxepunk._HXP.Position_Impl_.get_x = function(this1) {
    return this1.x
  }, com.haxepunk._HXP.Position_Impl_.set_x = function(this1, value) {
    return this1.x = value
  }, com.haxepunk._HXP.Position_Impl_.get_y = function(this1) {
    return this1.y
  }, com.haxepunk._HXP.Position_Impl_.set_y = function(this1, value) {
    return this1.y = value
  }, com.haxepunk._HXP.Position_Impl_.fromObject = function(obj) {
    return com.haxepunk._HXP.Position_Impl_._new(obj)
  }, com.haxepunk._HXP.Position_Impl_.fromEntity = function(entity) {
    return com.haxepunk._HXP.Position_Impl_._new(entity)
  }, com.haxepunk.Preloader = function() {
    NMEPreloader.call(this)
  }, $hxClasses["com.haxepunk.Preloader"] = com.haxepunk.Preloader, com.haxepunk.Preloader.__name__ = ["com", "haxepunk", "Preloader"], com.haxepunk.Preloader.__super__ = NMEPreloader, com.haxepunk.Preloader.prototype = $extend(NMEPreloader.prototype, {
    __class__: com.haxepunk.Preloader
  }), com.haxepunk.RenderMode = $hxClasses["com.haxepunk.RenderMode"] = {
    __ename__: !0,
    __constructs__: ["BUFFER", "HARDWARE"]
  }, com.haxepunk.RenderMode.BUFFER = ["BUFFER", 0], com.haxepunk.RenderMode.BUFFER.toString = $estr, com.haxepunk.RenderMode.BUFFER.__enum__ = com.haxepunk.RenderMode, com.haxepunk.RenderMode.HARDWARE = ["HARDWARE", 1], com.haxepunk.RenderMode.HARDWARE.toString = $estr, com.haxepunk.RenderMode.HARDWARE.__enum__ = com.haxepunk.RenderMode, com.haxepunk.RenderMode.__empty_constructs__ = [com.haxepunk.RenderMode.BUFFER, com.haxepunk.RenderMode.HARDWARE], com.haxepunk.Screen = function() {
    this._shakeY = 0, this._shakeX = 0, this._shakeMagnitude = 0, this._shakeTime = 0, this.needsResize = !1, this.fullScaleY = 1, this.fullScaleX = 1, this.scale = 1, this.scaleY = 1, this.scaleX = 1, this.originY = 0, this.originX = 0, this.y = 0, this.x = 0, this._sprite = new openfl.display.Sprite, this._bitmap = new Array, this.init()
  }, $hxClasses["com.haxepunk.Screen"] = com.haxepunk.Screen, com.haxepunk.Screen.__name__ = ["com", "haxepunk", "Screen"], com.haxepunk.Screen.prototype = {
    init: function() {
      this.set_x(this.set_y(this.set_originX(this.set_originY(0)))), this._angle = this._current = 0, this.set_scale(this.set_scaleX(this.set_scaleY(1))), this.updateTransformation(), com.haxepunk.HXP.engine.contains(this._sprite) && com.haxepunk.HXP.engine.removeChild(this._sprite), com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.BUFFER && com.haxepunk.HXP.engine.addChild(this._sprite)
    },
    disposeBitmap: function(bd) {
      null != bd && (this._sprite.removeChild(bd), bd.bitmapData.dispose())
    },
    resize: function() {
      this.width = com.haxepunk.HXP.width, this.height = com.haxepunk.HXP.height, com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.BUFFER && (this.disposeBitmap(this._bitmap[0]), this.disposeBitmap(this._bitmap[1]), this._bitmap[0] = new openfl.display.Bitmap(com.haxepunk.HXP.createBitmap(this.width, this.height, !0), openfl.display.PixelSnapping.NEVER), this._bitmap[1] = new openfl.display.Bitmap(com.haxepunk.HXP.createBitmap(this.width, this.height, !0), openfl.display.PixelSnapping.NEVER), this._sprite.addChild(this._bitmap[0]).set_visible(!0), this._sprite.addChild(this._bitmap[1]).set_visible(!1), com.haxepunk.HXP.buffer = this._bitmap[0].bitmapData), this._current = 0, this.needsResize = !1
    },
    swap: function() {
      com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.BUFFER && (this._current = 1 - this._current, com.haxepunk.HXP.buffer = this._bitmap[this._current].bitmapData)
    },
    addFilter: function(filter) {
      this._sprite.set_filters(filter)
    },
    refresh: function() {
      com.haxepunk.HXP.buffer.fillRect(com.haxepunk.HXP.bounds, com.haxepunk.HXP.stage.get_color())
    },
    redraw: function() {
      com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.BUFFER && (this._bitmap[this._current].set_visible(!0), this._bitmap[1 - this._current].set_visible(!1))
    },
    updateTransformation: function() {
      null == this._matrix && (this._matrix = new openfl.geom.Matrix), this._matrix.b = this._matrix.c = 0, this._matrix.a = this.fullScaleX, this._matrix.d = this.fullScaleY, this._matrix.tx = -this.originX * this._matrix.a, this._matrix.ty = -this.originY * this._matrix.d, 0 != this._angle && this._matrix.rotate(this._angle), this._matrix.tx += this.originX * this.fullScaleX + this.x, this._matrix.ty += this.originY * this.fullScaleY + this.y, this._sprite.get_transform().set_matrix(this._matrix)
    },
    update: function() {
      if (this._shakeTime > 0) {
        var sx = Std.random(2 * this._shakeMagnitude + 1) - this._shakeMagnitude,
          sy = Std.random(2 * this._shakeMagnitude + 1) - this._shakeMagnitude,
          _g = this;
        _g.set_x(_g.x + (sx - this._shakeX));
        var _g1 = this;
        _g1.set_y(_g1.y + (sy - this._shakeY)), this._shakeX = sx, this._shakeY = sy, this._shakeTime -= com.haxepunk.HXP.elapsed, this._shakeTime < 0 && (this._shakeTime = 0)
      } else if (0 != this._shakeX || 0 != this._shakeY) {
        var _g2 = this;
        _g2.set_x(_g2.x - this._shakeX);
        var _g3 = this;
        _g3.set_y(_g3.y - this._shakeY), this._shakeX = this._shakeY = 0
      }
    },
    get_color: function() {
      return com.haxepunk.HXP.stage.get_color()
    },
    set_color: function(value) {
      return com.haxepunk.HXP.stage.set_color(value), value
    },
    x: null,
    set_x: function(value) {
      return this.x == value ? value : (com.haxepunk.HXP.engine.set_x(this.x = value), this.updateTransformation(), this.x)
    },
    y: null,
    set_y: function(value) {
      return this.y == value ? value : (com.haxepunk.HXP.engine.set_y(this.y = value), this.updateTransformation(), this.y)
    },
    originX: null,
    set_originX: function(value) {
      return this.originX == value ? value : (this.originX = value, this.updateTransformation(), this.originX)
    },
    originY: null,
    set_originY: function(value) {
      return this.originY == value ? value : (this.originY = value, this.updateTransformation(), this.originY)
    },
    scaleX: null,
    set_scaleX: function(value) {
      return this.scaleX == value ? value : (this.scaleX = value, this.fullScaleX = this.scaleX * this.scale, this.updateTransformation(), this.needsResize = !0, this.scaleX)
    },
    scaleY: null,
    set_scaleY: function(value) {
      return this.scaleY == value ? value : (this.scaleY = value, this.fullScaleY = this.scaleY * this.scale, this.updateTransformation(), this.needsResize = !0, this.scaleY)
    },
    scale: null,
    set_scale: function(value) {
      return this.scale == value ? value : (this.scale = value, this.fullScaleX = this.scaleX * this.scale, this.fullScaleY = this.scaleY * this.scale, this.updateTransformation(), this.needsResize = !0, this.scale)
    },
    fullScaleX: null,
    fullScaleY: null,
    needsResize: null,
    get_angle: function() {
      return this._angle * (-180 / Math.PI)
    },
    set_angle: function(value) {
      return this._angle == value * (Math.PI / -180) ? value : (this._angle = value * (Math.PI / -180), this.updateTransformation(), this._angle)
    },
    get_smoothing: function() {
      return com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.BUFFER ? this._bitmap[0].smoothing : com.haxepunk.graphics.atlas.Atlas.smooth
    },
    set_smoothing: function(value) {
      return com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.BUFFER ? this._bitmap[0].smoothing = this._bitmap[1].smoothing = value : com.haxepunk.graphics.atlas.Atlas.smooth = value, value
    },
    width: null,
    height: null,
    mouseX: null,
    get_mouseX: function() {
      return Std["int"](this._sprite.get_mouseX())
    },
    mouseY: null,
    get_mouseY: function() {
      return Std["int"](this._sprite.get_mouseY())
    },
    capture: function() {
      if (com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.BUFFER) return new com.haxepunk.graphics.Image(function($this) {
        var $r, bd = $this._bitmap[$this._current].bitmapData.clone();
        return $r = com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.HARDWARE ? function($this) {
          var $r, e = com.haxepunk.ds.Either.Right(com.haxepunk.graphics.atlas.Atlas.loadImageAsRegion(function() {
            var $r, data = new com.haxepunk.graphics.atlas.AtlasData(bd);
            return $r = data
          }($this)));
          return $r = e
        }($this) : function() {
          var $r, e1 = com.haxepunk.ds.Either.Left(bd);
          return $r = e1
        }($this)
      }(this));
      throw "Screen.capture only supported with buffer rendering"
    },
    shake: function(magnitude, duration) {
      this._shakeTime < duration && (this._shakeTime = duration), this._shakeMagnitude = magnitude
    },
    shakeStop: function() {
      this._shakeTime = 0
    },
    _sprite: null,
    _bitmap: null,
    _current: null,
    _matrix: null,
    _angle: null,
    _shakeTime: null,
    _shakeMagnitude: null,
    _shakeX: null,
    _shakeY: null,
    __class__: com.haxepunk.Screen,
    __properties__: {
      get_mouseY: "get_mouseY",
      get_mouseX: "get_mouseX",
      set_smoothing: "set_smoothing",
      get_smoothing: "get_smoothing",
      set_angle: "set_angle",
      get_angle: "get_angle",
      set_scale: "set_scale",
      set_scaleY: "set_scaleY",
      set_scaleX: "set_scaleX",
      set_originY: "set_originY",
      set_originX: "set_originX",
      set_y: "set_y",
      set_x: "set_x",
      set_color: "set_color",
      get_color: "get_color"
    }
  }, com.haxepunk.TweenType = $hxClasses["com.haxepunk.TweenType"] = {
    __ename__: !0,
    __constructs__: ["Persist", "Looping", "OneShot"]
  }, com.haxepunk.TweenType.Persist = ["Persist", 0], com.haxepunk.TweenType.Persist.toString = $estr, com.haxepunk.TweenType.Persist.__enum__ = com.haxepunk.TweenType, com.haxepunk.TweenType.Looping = ["Looping", 1], com.haxepunk.TweenType.Looping.toString = $estr, com.haxepunk.TweenType.Looping.__enum__ = com.haxepunk.TweenType, com.haxepunk.TweenType.OneShot = ["OneShot", 2], com.haxepunk.TweenType.OneShot.toString = $estr, com.haxepunk.TweenType.OneShot.__enum__ = com.haxepunk.TweenType, com.haxepunk.TweenType.__empty_constructs__ = [com.haxepunk.TweenType.Persist, com.haxepunk.TweenType.Looping, com.haxepunk.TweenType.OneShot], com.haxepunk.Tween = function(duration, type, complete, ease) {
    this._target = duration, null == type && (type = com.haxepunk.TweenType.Persist), this._type = type, this._ease = ease, this._t = 0, this._callback = complete, openfl.events.EventDispatcher.call(this), null != this._callback && this.addEventListener(com.haxepunk.tweens.TweenEvent.FINISH, this._callback)
  }, $hxClasses["com.haxepunk.Tween"] = com.haxepunk.Tween, com.haxepunk.Tween.__name__ = ["com", "haxepunk", "Tween"], com.haxepunk.Tween.__super__ = openfl.events.EventDispatcher, com.haxepunk.Tween.prototype = $extend(openfl.events.EventDispatcher.prototype, {
    active: null,
    update: function() {
      this._time += com.haxepunk.HXP.fixed ? 1 : com.haxepunk.HXP.elapsed, this._t = this._time / this._target, null != this._ease && this._t > 0 && this._t < 1 && (this._t = this._ease(this._t)), this._time >= this._target && (this._t = 1, this._finish = !0), this.dispatchEvent(new com.haxepunk.tweens.TweenEvent(com.haxepunk.tweens.TweenEvent.UPDATE))
    },
    start: function() {
      this._time = 0, 0 == this._target ? (this.active = !1, this.dispatchEvent(new com.haxepunk.tweens.TweenEvent(com.haxepunk.tweens.TweenEvent.FINISH))) : (this.active = !0, this.dispatchEvent(new com.haxepunk.tweens.TweenEvent(com.haxepunk.tweens.TweenEvent.START)))
    },
    finish: function() {
      var _g = this._type;
      switch (_g[1]) {
        case 0:
          this._time = this._target, this.active = !1;
          break;
        case 1:
          this._time %= this._target, this._t = this._time / this._target, null != this._ease && this._t > 0 && this._t < 1 && (this._t = this._ease(this._t)), this.start();
          break;
        case 2:
          this._time = this._target, this.active = !1, this._parent.removeTween(this)
      }
      this._finish = !1, this.dispatchEvent(new com.haxepunk.tweens.TweenEvent(com.haxepunk.tweens.TweenEvent.FINISH)), this._type == com.haxepunk.TweenType.OneShot && null != this._callback && this.removeEventListener(com.haxepunk.tweens.TweenEvent.FINISH, this._callback)
    },
    cancel: function() {
      this.active = !1, null != this._parent && this._parent.removeTween(this)
    },
    get_percent: function() {
      return this._time / this._target
    },
    set_percent: function(value) {
      return this._time = this._target * value, this._time
    },
    scale: null,
    get_scale: function() {
      return this._t
    },
    _type: null,
    _ease: null,
    _t: null,
    _time: null,
    _target: null,
    _callback: null,
    _finish: null,
    _parent: null,
    _prev: null,
    _next: null,
    __class__: com.haxepunk.Tween,
    __properties__: {
      get_scale: "get_scale",
      set_percent: "set_percent",
      get_percent: "get_percent"
    }
  }), com.haxepunk.debug = {}, com.haxepunk.debug.TraceCapture = $hxClasses["com.haxepunk.debug.TraceCapture"] = {
    __ename__: !0,
    __constructs__: ["No", "Yes"]
  }, com.haxepunk.debug.TraceCapture.No = ["No", 0], com.haxepunk.debug.TraceCapture.No.toString = $estr, com.haxepunk.debug.TraceCapture.No.__enum__ = com.haxepunk.debug.TraceCapture, com.haxepunk.debug.TraceCapture.Yes = ["Yes", 1], com.haxepunk.debug.TraceCapture.Yes.toString = $estr, com.haxepunk.debug.TraceCapture.Yes.__enum__ = com.haxepunk.debug.TraceCapture, com.haxepunk.debug.TraceCapture.__empty_constructs__ = [com.haxepunk.debug.TraceCapture.No, com.haxepunk.debug.TraceCapture.Yes], com.haxepunk.debug.Console = function() {
    this.debugDraw = !0, this.init(), com.haxepunk.utils.Input.define("_ARROWS", [39, 37, 40, 38])
  }, $hxClasses["com.haxepunk.debug.Console"] = com.haxepunk.debug.Console, com.haxepunk.debug.Console.__name__ = ["com", "haxepunk", "debug", "Console"], com.haxepunk.debug.Console.prototype = {
    toggleKey: null,
    init: function() {
      this._sprite = new openfl.display.Sprite;
      var font = openfl.Assets.getFont("font/04B_03__.ttf");
      null == font && (font = openfl.Assets.getFont(com.haxepunk.HXP.defaultFont)), this._format = new openfl.text.TextFormat(font.fontName, 8, 16777215), this._back = new openfl.display.Bitmap, this._fpsRead = new openfl.display.Sprite, this._fpsReadText = new openfl.text.TextField, this._fpsInfo = new openfl.display.Sprite, this._fpsInfoText0 = new openfl.text.TextField, this._fpsInfoText1 = new openfl.text.TextField, this._memReadText = new openfl.text.TextField, this._layerList = new com.haxepunk.debug.LayerList, this._logRead = new openfl.display.Sprite, this._logReadText0 = new openfl.text.TextField, this._logReadText1 = new openfl.text.TextField, this._logScroll = 0, this._logLines = 33, this._entRead = new openfl.display.Sprite, this._entReadText = new openfl.text.TextField, this._debRead = new openfl.display.Sprite, this._debReadText0 = new openfl.text.TextField, this._debReadText1 = new openfl.text.TextField, this._butRead = new openfl.display.Sprite, this._entScreen = new openfl.display.Sprite, this._entSelect = new openfl.display.Sprite, this._entRect = new openfl.geom.Rectangle, this.LOG = new Array, this.LAYER_LIST = new haxe.ds.IntMap, this.ENTITY_LIST = new Array, this.SCREEN_LIST = new Array, this.SELECT_LIST = new Array, this.WATCH_LIST = ["x", "y"]
    },
    traceLog: function(v, infos) {
      var log = infos.className + "(" + infos.lineNumber + "): " + Std.string(v);
      this.LOG.push(log), this._enabled && this._sprite.get_visible() && this.updateLog()
    },
    log: function(data) {
      for (var s = "", _g1 = 0, _g = data.length; _g > _g1;) {
        var i = _g1++;
        i > 0 && (s += " "), s += null != data[i] ? Std.string(data[i]) : "null"
      }
      if (s.indexOf("\n") >= 0)
        for (var a = s.split("\n"), _g2 = 0; _g2 < a.length;) {
          var s1 = a[_g2];
          ++_g2, this.LOG.push(s1)
        } else this.LOG.push(s);
      this._enabled && this._sprite.get_visible() && this.updateLog()
    },
    watch: function(properties) {
      if (properties.length > 1)
        for (var _g = 0; _g < properties.length;) {
          var i1 = properties[_g];
          ++_g, this.WATCH_LIST.push(i1)
        } else this.WATCH_LIST.push(properties[0])
    },
    show: function() {
      this._visible || (com.haxepunk.HXP.stage.addChild(this._sprite), this._visible = !0)
    },
    hide: function() {
      this._visible && (com.haxepunk.HXP.stage.removeChild(this._sprite), this._visible = !1)
    },
    enable: function(trace_capture, toggleKey) {
      if (null == toggleKey && (toggleKey = 192), this.toggleKey = toggleKey, !this._enabled) {
        try {
          this._bmpLogo = new openfl.display.Bitmap(openfl.Assets.getBitmapData("graphics/debug/console_logo.png")), this._butDebug = new openfl.display.Bitmap(openfl.Assets.getBitmapData("graphics/debug/console_debug.png")), this._butOutput = new openfl.display.Bitmap(openfl.Assets.getBitmapData("graphics/debug/console_output.png")), this._butPlay = new openfl.display.Bitmap(openfl.Assets.getBitmapData("graphics/debug/console_play.png")), this._butPause = new openfl.display.Bitmap(openfl.Assets.getBitmapData("graphics/debug/console_pause.png")), this._butStep = new openfl.display.Bitmap(openfl.Assets.getBitmapData("graphics/debug/console_step.png"))
        } catch (e) {
          return
        }
        this._enabled = !0, this._visible = !0, com.haxepunk.HXP.stage.addChild(this._sprite);
        var big = this.get_width() >= 420;
        this._sprite.addChild(this._back), this._sprite.addChild(this._entScreen), this._entScreen.addChild(this._entSelect), this._sprite.addChild(this._entRead), this._entRead.addChild(this._entReadText), this._entReadText.set_defaultTextFormat(this.format(16, 16777215, "right")), this._entReadText.set_width(100), this._entReadText.set_height(20), this._entRead.set_x(this.get_width() - this._entReadText.get_width()), this._entRead.get_graphics().clear(), this._entRead.get_graphics().beginFill(0, .5), this._entRead.get_graphics().drawRoundRect(0, -20, this._entReadText.get_width() + 20, 40, 40, 40), this._sprite.addChild(this._fpsRead), this._fpsRead.addChild(this._fpsReadText), this._fpsReadText.set_defaultTextFormat(this.format(16)), this._fpsReadText.set_width(70), this._fpsReadText.set_height(20), this._fpsReadText.set_x(2), this._fpsReadText.set_y(1), this._fpsRead.get_graphics().clear(), this._fpsRead.get_graphics().beginFill(0, .75), this._fpsRead.get_graphics().drawRoundRect(-20, -20, big ? 340 : 180, 40, 40, 40), this._sprite.addChild(this._layerList), big && this._sprite.addChild(this._fpsInfo), this._fpsInfo.addChild(this._fpsInfoText0), this._fpsInfo.addChild(this._fpsInfoText1), this._fpsInfoText0.set_defaultTextFormat(this.format(8, 11184810)), this._fpsInfoText1.set_defaultTextFormat(this.format(8, 11184810)), this._fpsInfoText0.set_width(this._fpsInfoText1.set_width(60)), this._fpsInfoText0.set_height(this._fpsInfoText1.set_height(20)), this._fpsInfo.set_x(75), this._fpsInfoText1.set_x(60), this._fpsInfo.set_width(this._fpsInfoText0.get_width() + this._fpsInfoText1.get_width()), this._sprite.addChild(this._logRead), this._logRead.addChild(this._logReadText0), this._logRead.addChild(this._logReadText1), this._logReadText0.set_defaultTextFormat(this.format(16, 16777215)), this._logReadText1.set_defaultTextFormat(this.format(big ? 16 : 8, 16777215)), this._logReadText0.selectable = !1, this._logReadText0.set_width(80), this._logReadText0.set_height(20), this._logReadText1.set_width(this.get_width()), this._logReadText0.set_x(2), this._logReadText0.set_y(3), this._logReadText0.set_text("OUTPUT:"), this._logHeight = this.get_height() - 60, this._logBar = new openfl.geom.Rectangle(8, 24, 16, this._logHeight - 8), this._logBarGlobal = this._logBar.clone(), this._logBarGlobal.y += 40, this._logLines = big ? this._logHeight / 16.5 | 0 : this._logHeight / 8.5 | 0, this._sprite.addChild(this._debRead), this._debRead.addChild(this._debReadText0), this._debRead.addChild(this._debReadText1), this._debReadText0.set_defaultTextFormat(this.format(16, 16777215)), this._debReadText1.set_defaultTextFormat(this.format(8, 16777215)), this._debReadText0.selectable = !1, this._debReadText0.set_width(80), this._debReadText0.set_height(20), this._debReadText1.set_width(160), this._debReadText1.set_height(Std["int"](this.get_height() / 4)), this._debReadText0.set_x(2), this._debReadText0.set_y(3), this._debReadText1.set_x(2), this._debReadText1.set_y(24), this._debReadText0.set_text("DEBUG:"), this._debRead.set_y(this.get_height() - (this._debReadText1.get_y() + this._debReadText1.get_height())), this._sprite.addChild(this._butRead), this._butRead.addChild(this._butDebug), this._butRead.addChild(this._butOutput), this._butRead.addChild(this._butPlay).set_x(20), this._butRead.addChild(this._butPause).set_x(20), this._butRead.addChild(this._butStep).set_x(40), this.updateButtons(), this._butRead.get_graphics().clear(), this._butRead.get_graphics().beginFill(0, .75), this._butRead.get_graphics().drawRoundRect(-20, -20, 100, 40, 40, 40), this.set_debug(!0), com.haxepunk.HXP.stage.addEventListener(openfl.events.Event.RESIZE, $bind(this, this.onResize)), this.onResize(null), this.set_paused(!1), trace_capture == com.haxepunk.debug.TraceCapture.Yes && (haxe.Log.trace = $bind(this, this.traceLog)), this.LOG.push("-- HaxePunk v2.5.3 --"), this._enabled && this._sprite.get_visible() && this.updateLog()
      }
    },
    onResize: function() {
      null != this._back.bitmapData && this._back.bitmapData.dispose(), this._back.bitmapData = com.haxepunk.HXP.createBitmap(this.get_width(), this.get_height(), !0, -1), com.haxepunk.HXP.matrix.identity(), com.haxepunk.HXP.matrix.tx = Math.max((this._back.bitmapData.width - this._bmpLogo.get_width()) / 2, 0), com.haxepunk.HXP.matrix.ty = Math.max((this._back.bitmapData.height - this._bmpLogo.get_height()) / 2, 0), com.haxepunk.HXP.matrix.scale(Math.min(this.get_width() / this._back.bitmapData.width, 1), Math.min(this.get_height() / this._back.bitmapData.height, 1)), this._back.bitmapData.draw(this._bmpLogo, com.haxepunk.HXP.matrix, null, openfl.display.BlendMode.MULTIPLY), this._back.bitmapData.draw(this._back.bitmapData, null, null, openfl.display.BlendMode.INVERT), this._back.bitmapData.colorTransform(this._back.bitmapData.rect, new openfl.geom.ColorTransform(1, 1, 1, .5)), this.updateLog()
    },
    get_visible: function() {
      return this._sprite.get_visible()
    },
    set_visible: function(value) {
      return this._sprite.set_visible(value), this._enabled && value && this.updateLog(), this._sprite.get_visible()
    },
    debugDraw: null,
    set_debugDraw: function(value) {
      return this.debugDraw = value, this.updateEntityLists(!1), this.renderEntities(), value
    },
    update: function() {
      this._enabled && this._visible && (this._entRead.set_x(this.get_width() - this._entReadText.get_width()), this._layerList.set_x(this.get_width() - this._layerList.get_width() - 20), this._layerList.set_y((this.get_height() - this._layerList.get_height()) / 2), this._layerList.set_visible(com.haxepunk.HXP.engine.paused && this._debug), this._butRead.get_visible() && this.updateButtons(), this._paused ? this._debug ? (this.updateEntityLists(com.haxepunk.HXP.engine._scene._update.length != this.ENTITY_LIST.length), com.haxepunk.HXP.engine.paused ? (com.haxepunk.utils.Input.mousePressed ? com.haxepunk.utils.Input.get_mouseFlashY() > 20 && (com.haxepunk.utils.Input.get_mouseFlashX() > this._debReadText1.get_width() || com.haxepunk.utils.Input.get_mouseFlashY() < this._debRead.get_y()) && (com.haxepunk.utils.Input.check(com.haxepunk.utils._Input.InputType_Impl_.fromRight(16)) ? 0 != this.SELECT_LIST.length ? this.startDragging() : this.startPanning() : this.startSelection()) : (this._selecting && this.updateSelection(), this._dragging && this.updateDragging(), this._panning && this.updatePanning()), com.haxepunk.utils.Input.pressed(com.haxepunk.utils._Input.InputType_Impl_.fromRight(65)) && this.selectAll(), com.haxepunk.utils.Input.check(com.haxepunk.utils._Input.InputType_Impl_.fromRight(16)) && (0 != this.SELECT_LIST.length ? com.haxepunk.utils.Input.pressed(com.haxepunk.utils._Input.InputType_Impl_.fromLeft("_ARROWS")) && this.updateKeyMoving() : com.haxepunk.utils.Input.check(com.haxepunk.utils._Input.InputType_Impl_.fromLeft("_ARROWS")) && this.updateKeyPanning())) : (this.renderEntities(), this.updateFPSRead(), this.updateEntityCount()), this.updateDebugRead()) : this._scrolling ? this.updateScrolling() : com.haxepunk.utils.Input.mousePressed && this.startScrolling() : (this.updateFPSRead(), this.updateEntityCount()), com.haxepunk.utils.Input.pressed(com.haxepunk.utils._Input.InputType_Impl_.fromRight(this.toggleKey)) && this.set_paused(!this._paused))
    },
    get_paused: function() {
      return this._paused
    },
    set_paused: function(value) {
      return this._enabled ? (this._paused = value, com.haxepunk.HXP.engine.paused = value, this._back.set_visible(value), this._entScreen.set_visible(value), this._butRead.set_visible(value), value ? this._debug ? this.set_debug(!0) : this.updateLog() : (this._debRead.set_visible(!1), this._logRead.set_visible(!0), this.updateLog(), this.ENTITY_LIST.length = 0, this.SCREEN_LIST.length = 0, this.SELECT_LIST.length = 0), this._paused) : !1
    },
    get_debug: function() {
      return this._debug
    },
    set_debug: function(value) {
      return this._enabled ? (this._debug = value, this._debRead.set_visible(value), this._logRead.set_visible(!value), value ? this.updateEntityLists() : this.updateLog(), this.renderEntities(), this._debug) : !1
    },
    stepFrame: function() {
      com.haxepunk.HXP.engine.update(), com.haxepunk.HXP.engine.render(), this.updateEntityCount(), this.updateEntityLists(), this.renderEntities()
    },
    startDragging: function() {
      this._dragging = !0, this._entRect.x = com.haxepunk.utils.Input.get_mouseX(), this._entRect.y = com.haxepunk.utils.Input.get_mouseY()
    },
    updateDragging: function() {
      this.moveSelected(Std["int"](com.haxepunk.utils.Input.get_mouseX() - this._entRect.x), Std["int"](com.haxepunk.utils.Input.get_mouseY() - this._entRect.y)), this._entRect.x = com.haxepunk.utils.Input.get_mouseX(), this._entRect.y = com.haxepunk.utils.Input.get_mouseY(), com.haxepunk.utils.Input.mouseReleased && (this._dragging = !1)
    },
    moveSelected: function(xDelta, yDelta) {
      for (var _g = 0, _g1 = this.SELECT_LIST; _g < _g1.length;) {
        var e = _g1[_g];
        ++_g;
        var _g2 = e;
        _g2.x = (_g2.followCamera ? _g2.x + com.haxepunk.HXP.camera.x : _g2.x) + xDelta;
        var _g21 = e;
        _g21.y = (_g21.followCamera ? _g21.y + com.haxepunk.HXP.camera.y : _g21.y) + yDelta
      }
      com.haxepunk.HXP.engine.render(), this.renderEntities(), this.updateEntityLists(!0)
    },
    startPanning: function() {
      this._panning = !0, this._entRect.x = com.haxepunk.utils.Input.get_mouseX(), this._entRect.y = com.haxepunk.utils.Input.get_mouseY()
    },
    updatePanning: function() {
      com.haxepunk.utils.Input.mouseReleased && (this._panning = !1), this.panCamera(Std["int"](this._entRect.x - com.haxepunk.utils.Input.get_mouseX()), Std["int"](this._entRect.y - com.haxepunk.utils.Input.get_mouseY())), this._entRect.x = com.haxepunk.utils.Input.get_mouseX(), this._entRect.y = com.haxepunk.utils.Input.get_mouseY()
    },
    panCamera: function(xDelta, yDelta) {
      com.haxepunk.HXP.camera.x += xDelta, com.haxepunk.HXP.camera.y += yDelta, com.haxepunk.HXP.engine.render(), this.updateEntityLists(!0), this.renderEntities()
    },
    setCamera: function(x, y) {
      com.haxepunk.HXP.camera.x = x, com.haxepunk.HXP.camera.y = y, com.haxepunk.HXP.engine.render(), this.updateEntityLists(!0), this.renderEntities()
    },
    startSelection: function() {
      this._selecting = !0, this._entRect.x = com.haxepunk.utils.Input.get_mouseFlashX(), this._entRect.y = com.haxepunk.utils.Input.get_mouseFlashY(), this._entRect.width = 0, this._entRect.height = 0
    },
    updateSelection: function() {
      this._entRect.width = com.haxepunk.utils.Input.get_mouseFlashX() - this._entRect.x, this._entRect.height = com.haxepunk.utils.Input.get_mouseFlashY() - this._entRect.y, com.haxepunk.utils.Input.mouseReleased ? (this.selectEntities(this._entRect), this.renderEntities(), this._selecting = !1, this._entSelect.get_graphics().clear()) : (this._entSelect.get_graphics().clear(), this._entSelect.get_graphics().lineStyle(1, 16777215), this._entSelect.get_graphics().drawRect(this._entRect.x, this._entRect.y, this._entRect.width, this._entRect.height))
    },
    selectEntities: function(rect) {
      rect.width < 0 ? rect.x -= rect.width = -rect.width : 0 == rect.width && (rect.width = 1), rect.height < 0 ? rect.y -= rect.height = -rect.height : 0 == rect.height && (rect.height = 1), com.haxepunk.HXP.rect.width = com.haxepunk.HXP.rect.height = 6;
      var sx = com.haxepunk.HXP.screen.fullScaleX,
        sy = com.haxepunk.HXP.screen.fullScaleY;
      com.haxepunk.utils.Input.check(com.haxepunk.utils._Input.InputType_Impl_.fromRight(17)) || (this.SELECT_LIST.length = 0);
      for (var _g = 0, _g1 = this.SCREEN_LIST; _g < _g1.length;) {
        var e1 = _g1[_g];
        ++_g, com.haxepunk.HXP.rect.x = ((e1.followCamera ? e1.x + com.haxepunk.HXP.camera.x : e1.x) - com.haxepunk.HXP.camera.x) * sx - 3, com.haxepunk.HXP.rect.y = ((e1.followCamera ? e1.y + com.haxepunk.HXP.camera.y : e1.y) - com.haxepunk.HXP.camera.y) * sy - 3, rect.intersects(com.haxepunk.HXP.rect) && (HxOverrides.indexOf(this.SELECT_LIST, e1, 0) < 0 ? this.SELECT_LIST.push(e1) : HxOverrides.remove(this.SELECT_LIST, e1))
      }
    },
    selectAll: function() {
      var numSelected = this.SELECT_LIST.length;
      if (this.SELECT_LIST.length = 0, numSelected != this.SCREEN_LIST.length)
        for (var _g = 0, _g1 = this.SCREEN_LIST; _g < _g1.length;) {
          var e = _g1[_g];
          ++_g, this.SELECT_LIST.push(e)
        }
      this.renderEntities()
    },
    startScrolling: function() {
      this.LOG.length > this._logLines && (this._scrolling = this._logBarGlobal.contains(com.haxepunk.utils.Input.get_mouseFlashX(), com.haxepunk.utils.Input.get_mouseFlashY()))
    },
    updateScrolling: function() {
      this._scrolling = com.haxepunk.utils.Input.mouseDown, this._logScroll = com.haxepunk.HXP.scaleClamp(com.haxepunk.utils.Input.get_mouseFlashY(), this._logBarGlobal.y, this._logBarGlobal.get_bottom(), 0, 1), this.updateLog()
    },
    updateKeyMoving: function() {
      com.haxepunk.HXP.point.x = (com.haxepunk.utils.Input.pressed(com.haxepunk.utils._Input.InputType_Impl_.fromRight(39)) ? 1 : 0) - (com.haxepunk.utils.Input.pressed(com.haxepunk.utils._Input.InputType_Impl_.fromRight(37)) ? 1 : 0), com.haxepunk.HXP.point.y = (com.haxepunk.utils.Input.pressed(com.haxepunk.utils._Input.InputType_Impl_.fromRight(40)) ? 1 : 0) - (com.haxepunk.utils.Input.pressed(com.haxepunk.utils._Input.InputType_Impl_.fromRight(38)) ? 1 : 0), (0 != com.haxepunk.HXP.point.x || 0 != com.haxepunk.HXP.point.y) && this.moveSelected(0 | com.haxepunk.HXP.point.x, 0 | com.haxepunk.HXP.point.y)
    },
    updateKeyPanning: function() {
      com.haxepunk.HXP.point.x = (com.haxepunk.utils.Input.check(com.haxepunk.utils._Input.InputType_Impl_.fromRight(39)) ? 1 : 0) - (com.haxepunk.utils.Input.check(com.haxepunk.utils._Input.InputType_Impl_.fromRight(37)) ? 1 : 0), com.haxepunk.HXP.point.y = (com.haxepunk.utils.Input.check(com.haxepunk.utils._Input.InputType_Impl_.fromRight(40)) ? 1 : 0) - (com.haxepunk.utils.Input.check(com.haxepunk.utils._Input.InputType_Impl_.fromRight(38)) ? 1 : 0), (0 != com.haxepunk.HXP.point.x || 0 != com.haxepunk.HXP.point.y) && this.panCamera(0 | com.haxepunk.HXP.point.x, 0 | com.haxepunk.HXP.point.y)
    },
    updateEntityLists: function(fetchList) {
      if (null == fetchList && (fetchList = !0), fetchList) {
        this.ENTITY_LIST.length = 0, com.haxepunk.HXP.engine._scene.getAll(this.ENTITY_LIST);
        for (var $it0 = this.LAYER_LIST.keys(); $it0.hasNext();) {
          var key = $it0.next();
          this.LAYER_LIST.set(key, 0)
        }
      }
      this.SCREEN_LIST.length = 0;
      for (var _g = 0, _g1 = this.ENTITY_LIST; _g < _g1.length;) {
        var e = _g1[_g];
        ++_g;
        var layer = e._layer;
        (null == e._scene ? !1 : e.collideRect(e.followCamera ? e.x + com.haxepunk.HXP.camera.x : e.x, e.followCamera ? e.y + com.haxepunk.HXP.camera.y : e.y, e._scene.camera.x, e._scene.camera.y, com.haxepunk.HXP.width, com.haxepunk.HXP.height)) && com.haxepunk.HXP.engine._scene.layerVisible(layer) && this.SCREEN_LIST.push(e), fetchList && this.LAYER_LIST.set(layer, this.LAYER_LIST.exists(layer) ? this.LAYER_LIST.get(layer) + 1 : 1)
      }
      fetchList && this._layerList.set(this.LAYER_LIST)
    },
    renderEntities: function() {
      if (this._entScreen.set_visible(this._debug), this._entScreen.set_x(com.haxepunk.HXP.screen.x), this._entScreen.set_y(com.haxepunk.HXP.screen.y), this._debug) {
        var g = this._entScreen.get_graphics(),
          sx = com.haxepunk.HXP.screen.fullScaleX,
          sy = com.haxepunk.HXP.screen.fullScaleY,
          colorHitbox = 16777215,
          colorPosition = 16777215;
        g.clear();
        for (var _g = 0, _g1 = this.SCREEN_LIST; _g < _g1.length;) {
          var e1 = _g1[_g];
          ++_g;
          var graphicScrollX;
          graphicScrollX = null != e1._graphic ? e1._graphic.scrollX : 1;
          var graphicScrollY;
          graphicScrollY = null != e1._graphic ? e1._graphic.scrollY : 1, HxOverrides.indexOf(this.SELECT_LIST, e1, 0) < 0 ? (colorHitbox = 16711680, colorPosition = 65280) : (colorHitbox = 16777215, colorPosition = 16777215), 0 != e1.width && 0 != e1.height && (g.lineStyle(1, colorHitbox), g.drawRect(((e1.followCamera ? e1.x + com.haxepunk.HXP.camera.x : e1.x) - e1.originX - com.haxepunk.HXP.camera.x * graphicScrollX) * sx, ((e1.followCamera ? e1.y + com.haxepunk.HXP.camera.y : e1.y) - e1.originY - com.haxepunk.HXP.camera.y * graphicScrollY) * sy, e1.width * sx, e1.height * sy), this.debugDraw && null != e1._mask && (g.lineStyle(1, 255), e1._mask.debugDraw(g, sx, sy))), g.lineStyle(1, colorPosition), g.drawCircle(((e1.followCamera ? e1.x + com.haxepunk.HXP.camera.x : e1.x) - com.haxepunk.HXP.camera.x * graphicScrollX) * sx, ((e1.followCamera ? e1.y + com.haxepunk.HXP.camera.y : e1.y) - com.haxepunk.HXP.camera.y * graphicScrollY) * sy, 3)
        }
      }
    },
    updateLog: function() {
      if (this._logHeight = this.get_height() - 60, this._logBar.height = this._logHeight - 8, this._paused) {
        if (this._logRead.set_y(40), this._logRead.get_graphics().clear(), this._logRead.get_graphics().beginFill(0, .75), this._logRead.get_graphics().drawRect(0, 0, this._logReadText0.get_width() - 20, 20), this._logRead.get_graphics().moveTo(this._logReadText0.get_width(), 20), this._logRead.get_graphics().lineTo(this._logReadText0.get_width() - 20, 20), this._logRead.get_graphics().lineTo(this._logReadText0.get_width() - 20, 0), this._logRead.get_graphics().curveTo(this._logReadText0.get_width(), 0, this._logReadText0.get_width(), 20), this._logRead.get_graphics().drawRect(0, 20, this.get_width(), this._logHeight), this._logRead.get_graphics().beginFill(2105376, 1), this._logRead.get_graphics().drawRoundRect(this._logBar.x, this._logBar.y, this._logBar.width, this._logBar.height, 16, 16), this.LOG.length > this._logLines) {
          this._logRead.get_graphics().beginFill(16777215, 1);
          var y = this._logBar.y + 2 + (this._logBar.height - 16) * this._logScroll | 0;
          this._logRead.get_graphics().drawRoundRect(this._logBar.x + 2, y, 12, 12, 12, 12)
        }
        if (0 != this.LOG.length) {
          var i;
          i = this.LOG.length > this._logLines ? Std["int"](Math.round((this.LOG.length - this._logLines) * this._logScroll)) : 0;
          for (var n = Std["int"](i + Math.min(this._logLines, this.LOG.length)), s = ""; n > i;) s += this.LOG[i++] + "\n";
          this._logReadText1.set_text(s)
        } else this._logReadText1.set_text("");
        this._logReadText1.set_height(this._logHeight), this._logReadText1.set_x(32), this._logReadText1.set_y(24), this._fpsReadText.selectable = !0, this._fpsInfoText0.selectable = !0, this._fpsInfoText1.selectable = !0, this._memReadText.selectable = !0, this._entReadText.selectable = !0, this._debReadText1.selectable = !0
      } else this._logRead.set_y(this.get_height() - 40), this._logReadText1.set_height(20), this._logRead.get_graphics().clear(), this._logRead.get_graphics().beginFill(0, .75), this._logRead.get_graphics().drawRect(0, 0, this._logReadText0.get_width() - 20, 20), this._logRead.get_graphics().moveTo(this._logReadText0.get_width(), 20), this._logRead.get_graphics().lineTo(this._logReadText0.get_width() - 20, 20), this._logRead.get_graphics().lineTo(this._logReadText0.get_width() - 20, 0), this._logRead.get_graphics().curveTo(this._logReadText0.get_width(), 0, this._logReadText0.get_width(), 20), this._logRead.get_graphics().drawRect(0, 20, this.get_width(), 20), this._logReadText1.set_text(0 != this.LOG.length ? this.LOG[this.LOG.length - 1] : ""), this._logReadText1.set_x(2), this._logReadText1.set_y(21), this._logReadText1.selectable = !1, this._fpsReadText.selectable = !1, this._fpsInfoText0.selectable = !1, this._fpsInfoText1.selectable = !1, this._memReadText.selectable = !1, this._entReadText.selectable = !1, this._debReadText0.selectable = !1, this._debReadText1.selectable = !1
    },
    updateFPSRead: function() {
      this._fpsReadText.set_text("FPS: " + (0 | com.haxepunk.HXP.frameRate)), this._fpsInfoText0.set_text("Update: " + Std.string(com.haxepunk.HXP._updateTime) + "ms\nRender: " + Std.string(com.haxepunk.HXP._renderTime) + "ms"), this._fpsInfoText1.set_text("System: " + Std.string(com.haxepunk.HXP._systemTime) + "ms\nGame: " + Std.string(com.haxepunk.HXP._gameTime) + "ms")
    },
    updateDebugRead: function() {
      var big = this.get_width() >= 420,
        s = "Mouse: " + Std.string(Std["int"](com.haxepunk.HXP.screen.get_mouseX() + com.haxepunk.HXP.engine._scene.camera.x)) + ", " + Std.string(Std["int"](com.haxepunk.HXP.screen.get_mouseY() + com.haxepunk.HXP.engine._scene.camera.y)) + "\nCamera: " + Std.string(com.haxepunk.HXP.camera.x) + ", " + Std.string(com.haxepunk.HXP.camera.y);
      if (0 != this.SELECT_LIST.length)
        if (this.SELECT_LIST.length > 1) s += "\n\nSelected: " + Std.string(this.SELECT_LIST.length);
        else {
          var e = this.SELECT_LIST[0];
          s += "\n\n- " + Type.getClassName(Type.getClass(e)) + " -\n";
          for (var _g = 0, _g1 = this.WATCH_LIST; _g < _g1.length;) {
            var str1 = _g1[_g];
            ++_g;
            var field = Reflect.field(e, str1);
            null != field && (s += "\n" + str1 + ": " + Std.string(field))
          }
        }
      this._debReadText1.set_text(s), this._debReadText1.setTextFormat(this.format(big ? 16 : 8)), this._debReadText1.set_width(Math.max(this._debReadText1.get_textWidth() + 4, this._debReadText0.get_width())), this._debReadText1.set_height(this._debReadText1.get_y() + this._debReadText1.get_textHeight() + 4), this._debRead.set_y(Std["int"](this.get_height() - this._debReadText1.get_height())), this._debRead.get_graphics().clear(), this._debRead.get_graphics().beginFill(0, .75), this._debRead.get_graphics().drawRect(0, 0, this._debReadText0.get_width() - 20, 20), this._debRead.get_graphics().moveTo(this._debReadText0.get_width(), 20), this._debRead.get_graphics().lineTo(this._debReadText0.get_width() - 20, 20), this._debRead.get_graphics().lineTo(this._debReadText0.get_width() - 20, 0), this._debRead.get_graphics().curveTo(this._debReadText0.get_width(), 0, this._debReadText0.get_width(), 20), this._debRead.get_graphics().drawRoundRect(-20, 20, this._debReadText1.get_width() + 40, this.get_height() - this._debRead.get_y(), 40, 40)
    },
    updateEntityCount: function() {
      this._entReadText.set_text(Std.string(com.haxepunk.HXP.engine._scene._update.length) + " Entities")
    },
    updateButtons: function() {
      this._butRead.set_x(this.get_width() >= 420 ? this._fpsInfo.get_x() + this._fpsInfoText0.get_width() + this._fpsInfoText1.get_width() + Std["int"]((this._entRead.get_x() - (this._fpsInfo.get_x() + this._fpsInfoText0.get_width() + this._fpsInfoText1.get_width())) / 2) - 30 : 180), this._butDebug.set_visible(this._paused && !this._debug), this._butOutput.set_visible(this._paused && this._debug), this._butPlay.set_visible(com.haxepunk.HXP.engine.paused), this._butPause.set_visible(!com.haxepunk.HXP.engine.paused), this._butStep.set_visible(this._paused), this._butDebug.bitmapData.rect.contains(this._butDebug.get_mouseX(), this._butDebug.get_mouseY()) ? (this._butDebug.set_alpha(this._butOutput.set_alpha(1)), com.haxepunk.utils.Input.mousePressed && this.set_debug(!this._debug)) : this._butDebug.set_alpha(this._butOutput.set_alpha(.5)), this._butPlay.bitmapData.rect.contains(this._butPlay.get_mouseX(), this._butPlay.get_mouseY()) ? (this._butPlay.set_alpha(this._butPause.set_alpha(1)), com.haxepunk.utils.Input.mousePressed && (com.haxepunk.HXP.engine.paused = !com.haxepunk.HXP.engine.paused, this.renderEntities())) : this._butPlay.set_alpha(this._butPause.set_alpha(.5)), this._butStep.bitmapData.rect.contains(this._butStep.get_mouseX(), this._butStep.get_mouseY()) ? (this._butStep.set_alpha(1), com.haxepunk.utils.Input.mousePressed && this.stepFrame()) : this._butStep.set_alpha(.5)
    },
    format: function(size, color, align) {
      switch (null == align && (align = "left"), null == color && (color = 16777215), null == size && (size = 16), this._format.size = size, this._format.color = color, align) {
        case "left":
          this._format.align = openfl.text.TextFormatAlign.LEFT;
          break;
        case "right":
          this._format.align = openfl.text.TextFormatAlign.RIGHT;
          break;
        case "center":
          this._format.align = openfl.text.TextFormatAlign.CENTER;
          break;
        case "justify":
          this._format.align = openfl.text.TextFormatAlign.JUSTIFY
      }
      return this._format
    },
    get_width: function() {
      return com.haxepunk.HXP.windowWidth
    },
    get_height: function() {
      return com.haxepunk.HXP.windowHeight
    },
    _enabled: null,
    _visible: null,
    _paused: null,
    _debug: null,
    _scrolling: null,
    _selecting: null,
    _dragging: null,
    _panning: null,
    _sprite: null,
    _format: null,
    _back: null,
    _fpsRead: null,
    _fpsReadText: null,
    _fpsInfo: null,
    _fpsInfoText0: null,
    _fpsInfoText1: null,
    _memReadText: null,
    _layerList: null,
    _logRead: null,
    _logReadText0: null,
    _logReadText1: null,
    _logHeight: null,
    _logBar: null,
    _logBarGlobal: null,
    _logScroll: null,
    _entRead: null,
    _entReadText: null,
    _debRead: null,
    _debReadText0: null,
    _debReadText1: null,
    _butRead: null,
    _butDebug: null,
    _butOutput: null,
    _butPlay: null,
    _butPause: null,
    _butStep: null,
    _bmpLogo: null,
    _entScreen: null,
    _entSelect: null,
    _entRect: null,
    _logLines: null,
    LOG: null,
    LAYER_LIST: null,
    ENTITY_LIST: null,
    SCREEN_LIST: null,
    SELECT_LIST: null,
    WATCH_LIST: null,
    __class__: com.haxepunk.debug.Console,
    __properties__: {
      get_height: "get_height",
      get_width: "get_width",
      set_debug: "set_debug",
      get_debug: "get_debug",
      set_paused: "set_paused",
      get_paused: "get_paused",
      set_debugDraw: "set_debugDraw",
      set_visible: "set_visible",
      get_visible: "get_visible"
    }
  }, com.haxepunk.debug.VisibleLabel = function(textFormat) {
    this.display = !0, openfl.display.Sprite.call(this), this.active = new openfl.display.Bitmap(openfl.Assets.getBitmapData("graphics/debug/console_visible.png")), this.inactive = new openfl.display.Bitmap(openfl.Assets.getBitmapData("graphics/debug/console_hidden.png")), this.label = new openfl.text.TextField, this.label.set_defaultTextFormat(textFormat), this.label.selectable = !1, this.label.set_width(150), this.label.set_height(14), this.label.set_x(24), this.label.set_y(2), this.set_x(6), this.addChild(this.active), this.addChild(this.label), this.addEventListener("click", $bind(this, this.onClick), !0)
  }, $hxClasses["com.haxepunk.debug.VisibleLabel"] = com.haxepunk.debug.VisibleLabel, com.haxepunk.debug.VisibleLabel.__name__ = ["com", "haxepunk", "debug", "VisibleLabel"], com.haxepunk.debug.VisibleLabel.__super__ = openfl.display.Sprite, com.haxepunk.debug.VisibleLabel.prototype = $extend(openfl.display.Sprite.prototype, {
    display: null,
    set_display: function(value) {
      return value != this.display && (this.display = value, value ? (this.removeChild(this.inactive), this.addChild(this.active)) : (this.removeChild(this.active), this.addChild(this.inactive))), value
    },
    onClick: function() {
      this.set_display(!this.display)
    },
    active: null,
    inactive: null,
    label: null,
    __class__: com.haxepunk.debug.VisibleLabel,
    __properties__: $extend(openfl.display.Sprite.prototype.__properties__, {
      set_display: "set_display"
    })
  }), com.haxepunk.debug.MaskLabel = function(textFormat) {
    com.haxepunk.debug.VisibleLabel.call(this, textFormat), this.label.set_text("Masks")
  }, $hxClasses["com.haxepunk.debug.MaskLabel"] = com.haxepunk.debug.MaskLabel, com.haxepunk.debug.MaskLabel.__name__ = ["com", "haxepunk", "debug", "MaskLabel"], com.haxepunk.debug.MaskLabel.__super__ = com.haxepunk.debug.VisibleLabel, com.haxepunk.debug.MaskLabel.prototype = $extend(com.haxepunk.debug.VisibleLabel.prototype, {
    onClick: function(e) {
      com.haxepunk.debug.VisibleLabel.prototype.onClick.call(this, e),
        function() {
          var $r;
          return null == com.haxepunk.HXP._console && (com.haxepunk.HXP._console = new com.haxepunk.debug.Console), $r = com.haxepunk.HXP._console
        }(this).set_debugDraw(this.display),
        function() {
          var $r;
          return null == com.haxepunk.HXP._console && (com.haxepunk.HXP._console = new com.haxepunk.debug.Console), $r = com.haxepunk.HXP._console
        }(this).update()
    },
    __class__: com.haxepunk.debug.MaskLabel
  }), com.haxepunk.debug.LayerLabel = function(layer, textFormat) {
    com.haxepunk.debug.VisibleLabel.call(this, textFormat), this.layer = layer, this.set_count(0)
  }, $hxClasses["com.haxepunk.debug.LayerLabel"] = com.haxepunk.debug.LayerLabel, com.haxepunk.debug.LayerLabel.__name__ = ["com", "haxepunk", "debug", "LayerLabel"], com.haxepunk.debug.LayerLabel.__super__ = com.haxepunk.debug.VisibleLabel, com.haxepunk.debug.LayerLabel.prototype = $extend(com.haxepunk.debug.VisibleLabel.prototype, {
    layer: null,
    set_count: function(value) {
      return this.label.set_text("Layer " + this.layer + " [" + value + "]"), value
    },
    onClick: function(e) {
      com.haxepunk.debug.VisibleLabel.prototype.onClick.call(this, e), com.haxepunk.HXP.engine._scene._layerDisplay.set(this.layer, this.display), com.haxepunk.HXP.engine.render(),
        function() {
          var $r;
          return null == com.haxepunk.HXP._console && (com.haxepunk.HXP._console = new com.haxepunk.debug.Console), $r = com.haxepunk.HXP._console
        }(this).set_debugDraw(function() {
          var $r;
          return null == com.haxepunk.HXP._console && (com.haxepunk.HXP._console = new com.haxepunk.debug.Console), $r = com.haxepunk.HXP._console
        }(this).debugDraw)
    },
    __class__: com.haxepunk.debug.LayerLabel,
    __properties__: $extend(com.haxepunk.debug.VisibleLabel.prototype.__properties__, {
      set_count: "set_count"
    })
  }), com.haxepunk.debug.LayerList = function(width, height) {
    null == height && (height = 400), null == width && (width = 250), openfl.display.Sprite.call(this);
    var mask = new openfl.display.Sprite;
    mask.get_graphics().beginFill(0), mask.get_graphics().drawRect(0, 0, width, height), mask.get_graphics().endFill(), this.addChild(mask), this.set_mask(mask), this.get_graphics().beginFill(0, .15), this.get_graphics().drawRect(0, 0, width, height), this.get_graphics().endFill();
    var font = openfl.Assets.getFont("font/04B_03__.ttf");
    null == font && (font = openfl.Assets.getFont(com.haxepunk.HXP.defaultFont)), this._textFormat = new openfl.text.TextFormat(font.fontName, 16, 16777215), this._labels = new haxe.ds.IntMap
  }, $hxClasses["com.haxepunk.debug.LayerList"] = com.haxepunk.debug.LayerList, com.haxepunk.debug.LayerList.__name__ = ["com", "haxepunk", "debug", "LayerList"], com.haxepunk.debug.LayerList.__super__ = openfl.display.Sprite, com.haxepunk.debug.LayerList.prototype = $extend(openfl.display.Sprite.prototype, {
    layerSort: function(a, b) {
      return a - b
    },
    set: function(list) {
      for (var $it0 = this._labels.keys(); $it0.hasNext();) {
        var key = $it0.next();
        this.removeChild(this._labels.get(key)), this._labels.remove(key)
      }
      for (var keys = new Array, $it1 = list.keys(); $it1.hasNext();) {
        var key1 = $it1.next();
        list.get(key1) > 0 && keys.push(key1)
      }
      keys.sort($bind(this, this.layerSort));
      for (var i = 0, scene = com.haxepunk.HXP.engine._scene, _g = 0; _g < keys.length;) {
        var layer = keys[_g];
        ++_g;
        var label;
        this._labels.exists(layer) ? label = this._labels.get(layer) : (label = new com.haxepunk.debug.LayerLabel(layer, this._textFormat), this._labels.set(layer, label)), label.set_count(list.get(layer)), label.set_display(!scene._layerDisplay.exists(layer) || scene._layerDisplay.get(layer)), label.set_y(20 * i++ + 5), this.addChild(label)
      }
      null == this._maskLabel && (this._maskLabel = new com.haxepunk.debug.MaskLabel(this._textFormat), this.addChild(this._maskLabel)), this._maskLabel.set_y(20 * i++ + 5)
    },
    _labels: null,
    _maskLabel: null,
    _textFormat: null,
    __class__: com.haxepunk.debug.LayerList
  }), com.haxepunk.ds = {}, com.haxepunk.ds.Either = $hxClasses["com.haxepunk.ds.Either"] = {
    __ename__: !0,
    __constructs__: ["Left", "Right"]
  }, com.haxepunk.ds.Either.Left = function(v) {
    var $x = ["Left", 0, v];
    return $x.__enum__ = com.haxepunk.ds.Either, $x.toString = $estr, $x
  }, com.haxepunk.ds.Either.Right = function(v) {
    var $x = ["Right", 1, v];
    return $x.__enum__ = com.haxepunk.ds.Either, $x.toString = $estr, $x
  }, com.haxepunk.ds.Either.__empty_constructs__ = [], com.haxepunk.graphics = {}, com.haxepunk.graphics.Animation = function(name, frames, frameRate, loop, parent) {
    null == loop && (loop = !0), null == frameRate && (frameRate = 0), this.name = name, this.frames = frames, this.frameRate = 0 == frameRate ? com.haxepunk.HXP.assignedFrameRate : frameRate, this.loop = loop, this.frameCount = frames.length, this.set_parent(parent)
  }, $hxClasses["com.haxepunk.graphics.Animation"] = com.haxepunk.graphics.Animation, com.haxepunk.graphics.Animation.__name__ = ["com", "haxepunk", "graphics", "Animation"], com.haxepunk.graphics.Animation.prototype = {
    play: function(reset, reverse) {
      null == reverse && (reverse = !1), null == reset && (reset = !1), null == this.name ? this._parent.playAnimation(this, reset, reverse) : this._parent.play(this.name, reset, reverse)
    },
    parent: null,
    set_parent: function(value) {
      return this._parent = value, this._parent
    },
    name: null,
    frames: null,
    frameRate: null,
    frameCount: null,
    loop: null,
    _parent: null,
    __class__: com.haxepunk.graphics.Animation,
    __properties__: {
      set_parent: "set_parent"
    }
  }, com.haxepunk.graphics.Graphiclist = function(graphic) {
    if (this._graphics = new Array, this._temp = new Array, this._camera = new openfl.geom.Point, this._count = 0, com.haxepunk.Graphic.call(this), null != graphic)
      for (var _g = 0; _g < graphic.length;) {
        var g = graphic[_g];
        ++_g, this.add(g)
      }
  }, $hxClasses["com.haxepunk.graphics.Graphiclist"] = com.haxepunk.graphics.Graphiclist, com.haxepunk.graphics.Graphiclist.__name__ = ["com", "haxepunk", "graphics", "Graphiclist"], com.haxepunk.graphics.Graphiclist.__super__ = com.haxepunk.Graphic, com.haxepunk.graphics.Graphiclist.prototype = $extend(com.haxepunk.Graphic.prototype, {
    update: function() {
      for (var _g = 0, _g1 = this._graphics; _g < _g1.length;) {
        var g = _g1[_g];
        ++_g, g.active && g.update()
      }
    },
    renderList: function(renderFunc, point, camera) {
      point.x += this.x, point.y += this.y, camera.x *= this.scrollX, camera.y *= this.scrollY;
      for (var _g = 0, _g1 = this._graphics; _g < _g1.length;) {
        var g = _g1[_g];
        ++_g, g._visible && (g.relative ? (this._point.x = point.x, this._point.y = point.y) : this._point.x = this._point.y = 0, this._camera.x = camera.x, this._camera.y = camera.y, renderFunc(g))
      }
    },
    render: function(target, point, camera) {
      var _g = this;
      this.renderList(function(g) {
        g.render(target, _g._point, _g._camera)
      }, point, camera)
    },
    renderAtlas: function(layer, point, camera) {
      var _g = this;
      this.renderList(function(g) {
        g.renderAtlas(layer, _g._point, _g._camera)
      }, point, camera)
    },
    destroy: function() {
      for (var _g = 0, _g1 = this._graphics; _g < _g1.length;) {
        var g = _g1[_g];
        ++_g, g.destroy()
      }
    },
    add: function(graphic) {
      if (null == graphic) return graphic;
      if (0 == this._count) this.blit = graphic.blit;
      else if (this.blit != graphic.blit) throw "Can't add graphic objects with different render methods.";
      return this._graphics[this._count++] = graphic, this.active || (this.active = graphic.active), graphic
    },
    remove: function(graphic) {
      if (HxOverrides.indexOf(this._graphics, graphic, 0) < 0) return graphic;
      this._temp.length = 0;
      for (var _g = 0, _g1 = this._graphics; _g < _g1.length;) {
        var g = _g1[_g];
        ++_g, g == graphic ? this._count-- : this._temp[this._temp.length] = g
      }
      var temp = this._graphics;
      return this._graphics = this._temp, this._temp = temp, this.updateCheck(), graphic
    },
    removeAt: function(index) {
      null == index && (index = 0), 0 != this._graphics.length && (index %= this._graphics.length, this.remove(this._graphics[index % this._graphics.length]), this.updateCheck())
    },
    removeAll: function() {
      this._graphics.length = 0, this._temp.length = 0, this._count = 0, this.active = !1
    },
    children: null,
    get_children: function() {
      return this._graphics
    },
    count: null,
    get_count: function() {
      return this._count
    },
    updateCheck: function() {
      this.active = !1;
      for (var _g = 0, _g1 = this._graphics; _g < _g1.length;) {
        var g = _g1[_g];
        if (++_g, g.active) return void(this.active = !0)
      }
    },
    _graphics: null,
    _temp: null,
    _count: null,
    _camera: null,
    __class__: com.haxepunk.graphics.Graphiclist,
    __properties__: $extend(com.haxepunk.Graphic.prototype.__properties__, {
      get_count: "get_count",
      get_children: "get_children"
    })
  }), com.haxepunk.graphics.Image = function(source, clipRect) {
    if (this.smooth = !0, com.haxepunk.Graphic.call(this), this.angle = 0, this.set_scale(this.scaleX = this.scaleY = 1), this.originX = this.originY = 0, this._alpha = 1, this._flipped = !1, this._color = 16777215, this._red = this._green = this._blue = 1, this._matrix = com.haxepunk.HXP.matrix, null != source) {
      var _g = source;
      switch (_g[1]) {
        case 0:
          var bitmap = _g[2];
          this.blit = !0, this._source = bitmap, this._sourceRect = bitmap.rect;
          break;
        case 1:
          var region = _g[2];
          this.blit = !1, this._region = region, this._sourceRect = new openfl.geom.Rectangle(0, 0, this._region._rect.width, this._region._rect.height)
      }
    }
    null != clipRect && (0 == clipRect.width && (clipRect.width = this._sourceRect.width), 0 == clipRect.height && (clipRect.height = this._sourceRect.height), this.blit || (this._region = this._region.clip(clipRect)), this._sourceRect = clipRect), this.blit && (this._bitmap = new openfl.display.Bitmap, this._colorTransform = new openfl.geom.ColorTransform, this.createBuffer(), this.updateBuffer())
  }, $hxClasses["com.haxepunk.graphics.Image"] = com.haxepunk.graphics.Image, com.haxepunk.graphics.Image.__name__ = ["com", "haxepunk", "graphics", "Image"], com.haxepunk.graphics.Image.createRect = function(width, height, color, alpha) {
    if (null == alpha && (alpha = 1), null == color && (color = 16777215), 0 == width || 0 == height) throw "Illegal rect, sizes cannot be 0.";
    var image, source = com.haxepunk.HXP.createBitmap(width, height, !0, -1);
    return image = new com.haxepunk.graphics.Image(com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.HARDWARE ? function($this) {
      var $r, region = com.haxepunk.graphics.atlas.Atlas.loadImageAsRegion(function() {
        var $r, data = new com.haxepunk.graphics.atlas.AtlasData(source);
        return $r = data
      }($this));
      return $r = function() {
        var $r, e = com.haxepunk.ds.Either.Right(region);
        return $r = e
      }($this)
    }(this) : com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.HARDWARE ? function($this) {
      var $r, e1 = com.haxepunk.ds.Either.Right(com.haxepunk.graphics.atlas.Atlas.loadImageAsRegion(function() {
        var $r, data1 = new com.haxepunk.graphics.atlas.AtlasData(source);
        return $r = data1
      }($this)));
      return $r = e1
    }(this) : function() {
      var $r, e2 = com.haxepunk.ds.Either.Left(source);
      return $r = e2
    }(this)), image.set_color(color), image.set_alpha(alpha), image
  }, com.haxepunk.graphics.Image.createCircle = function(radius, color, alpha) {
    if (null == alpha && (alpha = 1), null == color && (color = 16777215), 0 == radius) throw "Illegal circle, radius cannot be 0.";
    com.haxepunk.HXP.sprite.get_graphics().clear(), com.haxepunk.HXP.sprite.get_graphics().beginFill(16777215), com.haxepunk.HXP.sprite.get_graphics().drawCircle(radius, radius, radius);
    var data = com.haxepunk.HXP.createBitmap(2 * radius, 2 * radius, !0, 0);
    data.draw(com.haxepunk.HXP.sprite);
    var image;
    return image = new com.haxepunk.graphics.Image(com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.HARDWARE ? function($this) {
      var $r, region = com.haxepunk.graphics.atlas.Atlas.loadImageAsRegion(function() {
        var $r, data1 = new com.haxepunk.graphics.atlas.AtlasData(data);
        return $r = data1
      }($this));
      return $r = function() {
        var $r, e = com.haxepunk.ds.Either.Right(region);
        return $r = e
      }($this)
    }(this) : com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.HARDWARE ? function($this) {
      var $r, e1 = com.haxepunk.ds.Either.Right(com.haxepunk.graphics.atlas.Atlas.loadImageAsRegion(function() {
        var $r, data2 = new com.haxepunk.graphics.atlas.AtlasData(data);
        return $r = data2
      }($this)));
      return $r = e1
    }(this) : function() {
      var $r, e2 = com.haxepunk.ds.Either.Left(data);
      return $r = e2
    }(this)), image.set_color(color), image.set_alpha(alpha), image
  }, com.haxepunk.graphics.Image.createPolygon = function(polygon, color, alpha, fill, thick) {
    null == thick && (thick = 1), null == fill && (fill = !0), null == alpha && (alpha = 1), null == color && (color = 16777215);
    var minX, maxX, minY, maxY, graphics = com.haxepunk.HXP.sprite.get_graphics(),
      points = polygon._points,
      originalAngle = polygon._angle;
    polygon.set_angle(0), minX = minY = 179 * Math.pow(10, 306), maxX = maxY = -(179 * Math.pow(10, 306));
    for (var _g = 0; _g < points.length;) {
      var p1 = points[_g];
      ++_g, p1.x < minX && (minX = p1.x), p1.x > maxX && (maxX = p1.x), p1.y < minY && (minY = p1.y), p1.y > maxY && (maxY = p1.y)
    }
    var w = Math.ceil(maxX - minX),
      h = Math.ceil(maxY - minY);
    color > 16777215 && (color = 16777215 & color), graphics.clear(), fill ? graphics.beginFill(color, alpha) : graphics.lineStyle(thick, color, alpha, !1, openfl.display.LineScaleMode.NORMAL, null, "miter"), graphics.moveTo(points[points.length - 1].x, points[points.length - 1].y);
    for (var _g1 = 0; _g1 < points.length;) {
      var p2 = points[_g1];
      ++_g1, graphics.lineTo(p2.x, p2.y)
    }
    graphics.endFill(), com.haxepunk.HXP.matrix.identity(), com.haxepunk.HXP.matrix.translate(-minX, -minY);
    var data = com.haxepunk.HXP.createBitmap(w, h, !0, 0);
    data.draw(com.haxepunk.HXP.sprite, com.haxepunk.HXP.matrix);
    var image;
    return image = new com.haxepunk.graphics.Image(com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.HARDWARE ? function($this) {
      var $r, region = com.haxepunk.graphics.atlas.Atlas.loadImageAsRegion(function() {
        var $r, data1 = new com.haxepunk.graphics.atlas.AtlasData(data);
        return $r = data1
      }($this));
      return $r = function() {
        var $r, e = com.haxepunk.ds.Either.Right(region);
        return $r = e
      }($this)
    }(this) : com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.HARDWARE ? function($this) {
      var $r, e1 = com.haxepunk.ds.Either.Right(com.haxepunk.graphics.atlas.Atlas.loadImageAsRegion(function() {
        var $r, data2 = new com.haxepunk.graphics.atlas.AtlasData(data);
        return $r = data2
      }($this)));
      return $r = e1
    }(this) : function() {
      var $r, e2 = com.haxepunk.ds.Either.Left(data);
      return $r = e2
    }(this)), image.set_x(polygon.get_x() + polygon.origin.x), image.set_y(polygon.get_y() + polygon.origin.y), image.originX = image.x - polygon.minX, image.originY = image.y - polygon.minY, image.angle = originalAngle, polygon.set_angle(originalAngle), image
  }, com.haxepunk.graphics.Image.__super__ = com.haxepunk.Graphic, com.haxepunk.graphics.Image.prototype = $extend(com.haxepunk.Graphic.prototype, {
    angle: null,
    get_scale: function() {
      return this._scale
    },
    set_scale: function(value) {
      return this._scale = value
    },
    scaleX: null,
    scaleY: null,
    originX: null,
    originY: null,
    blend: null,
    init: function() {
      this.angle = 0, this.set_scale(this.scaleX = this.scaleY = 1), this.originX = this.originY = 0, this._alpha = 1, this._flipped = !1, this._color = 16777215, this._red = this._green = this._blue = 1, this._matrix = com.haxepunk.HXP.matrix
    },
    createBuffer: function() {
      this._buffer = com.haxepunk.HXP.createBitmap(0 | this._sourceRect.width, 0 | this._sourceRect.height, !0), this._bufferRect = this._buffer.rect, this._bitmap.bitmapData = this._buffer
    },
    render: function(target, point, camera) {
      var sx = this._scale * this.scaleX,
        sy = this._scale * this.scaleY;
      this._point.x = point.x + this.x - this.originX - camera.x * this.scrollX, this._point.y = point.y + this.y - this.originY - camera.y * this.scrollY, null != this._buffer && (0 == this.angle && 1 == sx && 1 == sy && null == this.blend ? target.copyPixels(this._buffer, this._bufferRect, this._point, null, null, !0) : (this._matrix.b = this._matrix.c = 0, this._matrix.a = sx, this._matrix.d = sy, this._matrix.tx = -this.originX * sx, this._matrix.ty = -this.originY * sy, 0 != this.angle && this._matrix.rotate(this.angle * (Math.PI / -180)), this._matrix.tx += this.originX + this._point.x, this._matrix.ty += this.originY + this._point.y, target.draw(this._bitmap, this._matrix, null, this.blend, null, this._bitmap.smoothing)))
    },
    renderAtlas: function(layer, point, camera) {
      var sx = this._scale * this.scaleX,
        sy = this._scale * this.scaleY,
        fsx = com.haxepunk.HXP.screen.fullScaleX,
        fsy = com.haxepunk.HXP.screen.fullScaleY;
      if (this._point.x = point.x + this.x - this.originX - camera.x * this.scrollX, this._point.y = point.y + this.y - this.originY - camera.y * this.scrollY, 0 == this.angle)(1 != sx || 1 != sy) && (this._point.x = point.x + this.x - this.originX * sx - camera.x * this.scrollX, this._point.y = point.y + this.y - this.originY * sy - camera.y * this.scrollY), this._flipped && (this._point.x += this._sourceRect.width * sx), this._point.x = this._point.x * fsx, this._point.y = this._point.y * fsy, this._region.draw(this._point.x, this._point.y, layer, sx * fsx * (this._flipped ? -1 : 1), sy * fsy, this.angle, this._red, this._green, this._blue, this._alpha, this.smooth);
      else {
        this._flipped && (sx *= -1);
        var angle = this.angle * (Math.PI / -180),
          cos = Math.cos(angle),
          sin = Math.sin(angle),
          a = sx * cos * fsx,
          b = sx * sin * fsy,
          c = -sy * sin * fsx,
          d = sy * cos * fsy,
          tx = (-this.originX * sx * cos + this.originY * sy * sin + this.originX + this._point.x) * fsx,
          ty = (-this.originX * sx * sin - this.originY * sy * cos + this.originY + this._point.y) * fsy;
        this._region.drawMatrix(tx, ty, a, b, c, d, layer, this._red, this._green, this._blue, this._alpha, this.smooth)
      }
    },
    updateBuffer: function(clearBefore) {
      null == clearBefore && (clearBefore = !1), null != this._source && (clearBefore && this._buffer.fillRect(this._bufferRect, 0), this._buffer.copyPixels(this._source, this._sourceRect, com.haxepunk.HXP.zero), null != this._tint && this._buffer.colorTransform(this._bufferRect, this._tint))
    },
    updateColorTransform: function() {
      1 == this._alpha && 16777215 == this._color ? this._tint = null : (this._tint = this._colorTransform, this._tint.redMultiplier = this._red, this._tint.greenMultiplier = this._green, this._tint.blueMultiplier = this._blue, this._tint.alphaMultiplier = this._alpha), this.updateBuffer()
    },
    clear: function() {
      null != this._buffer && this._buffer.fillRect(this._bufferRect, 0)
    },
    get_alpha: function() {
      return this._alpha
    },
    set_alpha: function(value) {
      return value = 0 > value ? 0 : value > 1 ? 1 : value, this._alpha == value ? value : (this._alpha = value, this.blit && this.updateColorTransform(), this._alpha)
    },
    get_color: function() {
      return this._color
    },
    set_color: function(value) {
      return value &= 16777215, this._color == value ? value : (this._color = value, this._red = (this._color >> 16 & 255) / 255, this._green = (this._color >> 8 & 255) / 255, this._blue = (255 & this._color) / 255, this.blit && this.updateColorTransform(), this._color)
    },
    get_flipped: function() {
      return this._flipped
    },
    set_flipped: function(value) {
      if (this._flipped == value) return value;
      if (this.blit) {
        var temp = this._source;
        value && null == this._flip ? null != com.haxepunk.graphics.Image._flips.h.__keys__[temp.__id__] ? this._source = com.haxepunk.graphics.Image._flips.h[temp.__id__] : (this._source = com.haxepunk.HXP.createBitmap(this._source.width, this._source.height, !0), com.haxepunk.graphics.Image._flips.set(temp, this._source), com.haxepunk.HXP.matrix.identity(), com.haxepunk.HXP.matrix.a = -1, com.haxepunk.HXP.matrix.tx = this._source.width, this._source.draw(temp, com.haxepunk.HXP.matrix)) : this._source = this._flip, this._flip = temp, this.updateBuffer()
      }
      return this._flipped = value, this._flipped
    },
    centerOrigin: function() {
      this.originX = Std["int"](this.get_width() / 2), this.originY = Std["int"](this.get_height() / 2)
    },
    centerOO: function() {
      var _g = this;
      _g.x = _g.x + this.originX;
      var _g1 = this;
      _g1.y = _g1.y + this.originY, this.centerOrigin();
      var _g2 = this;
      _g2.x = _g2.x - this.originX;
      var _g3 = this;
      _g3.y = _g3.y - this.originY
    },
    smooth: null,
    get_width: function() {
      return 0 | (this.blit ? this._bufferRect.width : this._region.rotated ? this._region._rect.height : this._region._rect.width)
    },
    get_height: function() {
      return 0 | (this.blit ? this._bufferRect.height : this._region.rotated ? this._region._rect.width : this._region._rect.height)
    },
    get_scaledWidth: function() {
      return this.get_width() * this.scaleX * this._scale
    },
    set_scaledWidth: function(w) {
      return this.scaleX = w / this._scale / this.get_width()
    },
    get_scaledHeight: function() {
      return this.get_height() * this.scaleY * this._scale
    },
    set_scaledHeight: function(h) {
      return this.scaleY = h / this._scale / this.get_height()
    },
    clipRect: null,
    get_clipRect: function() {
      return this._sourceRect
    },
    _source: null,
    _sourceRect: null,
    _buffer: null,
    _bufferRect: null,
    _bitmap: null,
    _region: null,
    _alpha: null,
    _color: null,
    _tint: null,
    _colorTransform: null,
    _matrix: null,
    _red: null,
    _green: null,
    _blue: null,
    _flipped: null,
    _flip: null,
    _scale: null,
    __class__: com.haxepunk.graphics.Image,
    __properties__: $extend(com.haxepunk.Graphic.prototype.__properties__, {
      get_clipRect: "get_clipRect",
      set_scaledHeight: "set_scaledHeight",
      get_scaledHeight: "get_scaledHeight",
      set_scaledWidth: "set_scaledWidth",
      get_scaledWidth: "get_scaledWidth",
      get_height: "get_height",
      get_width: "get_width",
      set_flipped: "set_flipped",
      get_flipped: "get_flipped",
      set_color: "set_color",
      get_color: "get_color",
      set_alpha: "set_alpha",
      get_alpha: "get_alpha",
      set_scale: "set_scale",
      get_scale: "get_scale"
    })
  }), com.haxepunk.graphics.Spritemap = function(source, frameWidth, frameHeight, cbFunc) {
    null == frameHeight && (frameHeight = 0), null == frameWidth && (frameWidth = 0), this.complete = !0, this.rate = 1, this._anims = new haxe.ds.StringMap, this._timer = this._frame = 0, this._rect = new openfl.geom.Rectangle(0, 0, frameWidth, frameHeight);
    var _g = source;
    switch (_g[1]) {
      case 0:
        var bd = _g[2];
        com.haxepunk.graphics.Image.call(this, com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.HARDWARE ? function($this) {
          var $r, e = com.haxepunk.ds.Either.Right(com.haxepunk.graphics.atlas.Atlas.loadImageAsRegion(function() {
            var $r, data = new com.haxepunk.graphics.atlas.AtlasData(bd);
            return $r = data
          }($this)));
          return $r = e
        }(this) : function() {
          var $r, e1 = com.haxepunk.ds.Either.Left(bd);
          return $r = e1
        }(this), this._rect);
        break;
      case 1:
        var atlas = _g[2];
        this._atlas = atlas, this._atlas.prepare(frameWidth, frameHeight), com.haxepunk.graphics.Image.call(this, function($this) {
          var $r, region = atlas.getRegion($this._frame);
          return $r = function() {
            var $r, e2 = com.haxepunk.ds.Either.Right(region);
            return $r = e2
          }($this)
        }(this), this._rect)
    }
    if (this.blit ? (this._width = this._source.width, this._height = this._source.height) : (this._width = Std["int"](this._atlas.get_width()), this._height = Std["int"](this._atlas.get_height())), 0 == frameWidth && (this._rect.width = this._width), 0 == frameHeight && (this._rect.height = this._height), this._width % this._rect.width != 0 || this._height % this._rect.height != 0) throw "Source image width and height should be multiples of the frame width and height.";
    this._columns = Math.ceil(this._width / this._rect.width), this._rows = Math.ceil(this._height / this._rect.height), this._frameCount = this._columns * this._rows, this.callbackFunc = cbFunc, this.updateBuffer(), this.active = !0
  }, $hxClasses["com.haxepunk.graphics.Spritemap"] = com.haxepunk.graphics.Spritemap, com.haxepunk.graphics.Spritemap.__name__ = ["com", "haxepunk", "graphics", "Spritemap"], com.haxepunk.graphics.Spritemap.__super__ = com.haxepunk.graphics.Image, com.haxepunk.graphics.Spritemap.prototype = $extend(com.haxepunk.graphics.Image.prototype, {
    complete: null,
    callbackFunc: null,
    rate: null,
    updateBuffer: function(clearBefore) {
      null == clearBefore && (clearBefore = !1), this.blit ? (this._width > 0 && this._height > 0 && (this._rect.x = this._rect.width * this._frame, this._rect.y = (this._rect.x / this._width | 0) * this._rect.height, this._rect.x = this._rect.x % this._width, this._flipped && (this._rect.x = this._width - this._rect.width - this._rect.x)), com.haxepunk.graphics.Image.prototype.updateBuffer.call(this, clearBefore)) : this._region = this._atlas.getRegion(this._frame)
    },
    update: function() {
      if (null != this._anim && !this.complete && (this._timer += (com.haxepunk.HXP.fixed ? this._anim.frameRate / com.haxepunk.HXP.assignedFrameRate : this._anim.frameRate * com.haxepunk.HXP.elapsed) * this.rate, this._timer >= 1)) {
        for (; this._timer >= 1;)
          if (this._timer--, this._index += this.reverse ? -1 : 1, this.reverse && -1 == this._index || !this.reverse && this._index == this._anim.frameCount) {
            if (!this._anim.loop) {
              this._index = this.reverse ? 0 : this._anim.frameCount - 1, this.complete = !0, null != this.callbackFunc && this.callbackFunc();
              break
            }
            this._index = this.reverse ? this._anim.frameCount - 1 : 0, null != this.callbackFunc && this.callbackFunc()
          }
        null != this._anim && (this._frame = 0 | this._anim.frames[this._index]), this.updateBuffer()
      }
    },
    add: function(name, frames, frameRate, loop) {
      if (null == loop && (loop = !0), null == frameRate && (frameRate = 0), null != this._anims.get(name)) throw "Cannot have multiple animations with the same name";
      for (var _g1 = 0, _g = frames.length; _g > _g1;) {
        var i = _g1++;
        frames[i] %= this._frameCount, frames[i] < 0 && (frames[i] += this._frameCount)
      }
      var anim = new com.haxepunk.graphics.Animation(name, frames, frameRate, loop);
      return this._anims.set(name, anim), anim.set_parent(this), anim
    },
    play: function(name, reset, reverse) {
      return null == reverse && (reverse = !1), null == reset && (reset = !1), null == name && (name = ""), reset || null == this._anim || this._anim.name != name ? this._anims.exists(name) ? (this._anim = this._anims.get(name), this.reverse = reverse, this.restart(), this._anim) : (this.stop(reset), null) : this._anim
    },
    playFrames: function(frames, frameRate, loop, reset, reverse) {
      return null == reverse && (reverse = !1), null == reset && (reset = !1), null == loop && (loop = !0), null == frameRate && (frameRate = 0), null == frames || 0 == frames.length ? (this.stop(reset), null) : 0 == reset && null != this._anim && this._anim.frames == frames ? this._anim : this.playAnimation(new com.haxepunk.graphics.Animation(null, frames, frameRate, loop), reset, reverse)
    },
    playAnimation: function(anim, reset, reverse) {
      if (null == reverse && (reverse = !1), null == reset && (reset = !1), null == anim) throw "No animation supplied";
      return 0 == reset && this._anim == anim ? anim : (this._anim = anim, this.reverse = reverse, this.restart(), anim)
    },
    restart: function() {
      this._timer = this._index = this.reverse ? this._anim.frames.length - 1 : 0, this._frame = this._anim.frames[this._index], this.complete = !1, this.updateBuffer()
    },
    stop: function(reset) {
      null == reset && (reset = !1), this._anim = null, reset && (this._frame = this._index = this.reverse ? this._anim.frames.length - 1 : 0), this.complete = !0, this.updateBuffer()
    },
    getFrame: function(column, row) {
      return null == row && (row = 0), null == column && (column = 0), row % this._rows * this._columns + column % this._columns
    },
    setFrame: function(column, row) {
      null == row && (row = 0), null == column && (column = 0), this._anim = null;
      var frame = row % this._rows * this._columns + column % this._columns;
      this._frame != frame && (this._frame = frame, this.updateBuffer())
    },
    randFrame: function() {
      this.set_frame(function($this) {
        var $r;
        return com.haxepunk.HXP._seed = 16807 * com.haxepunk.HXP._seed % 2147483647 | 0, $r = com.haxepunk.HXP._seed / 2147483647 * $this._frameCount | 0
      }(this))
    },
    setAnimFrame: function(name, index) {
      var frames = this._anims.get(name).frames;
      index %= frames.length, 0 > index && (index += frames.length), this.set_frame(frames[index])
    },
    get_frame: function() {
      return this._frame
    },
    set_frame: function(value) {
      return this._anim = null, value %= this._frameCount, 0 > value && (value = this._frameCount + value), this._frame == value ? this._frame : (this._frame = value, this.updateBuffer(), this._frame)
    },
    get_index: function() {
      return null != this._anim ? this._index : 0
    },
    set_index: function(value) {
      return null == this._anim ? 0 : (value %= this._anim.frameCount, this._index == value ? this._index : (this._index = value, this._frame = this._anim.frames[this._index], this.updateBuffer(), this._index))
    },
    reverse: null,
    frameCount: null,
    get_frameCount: function() {
      return this._frameCount
    },
    columns: null,
    get_columns: function() {
      return this._columns
    },
    rows: null,
    get_rows: function() {
      return this._rows
    },
    currentAnim: null,
    get_currentAnim: function() {
      return null != this._anim ? this._anim.name : ""
    },
    _rect: null,
    _width: null,
    _height: null,
    _columns: null,
    _rows: null,
    _frameCount: null,
    _anims: null,
    _anim: null,
    _index: null,
    _frame: null,
    _timer: null,
    _atlas: null,
    __class__: com.haxepunk.graphics.Spritemap,
    __properties__: $extend(com.haxepunk.graphics.Image.prototype.__properties__, {
      get_currentAnim: "get_currentAnim",
      get_rows: "get_rows",
      get_columns: "get_columns",
      get_frameCount: "get_frameCount",
      set_index: "set_index",
      get_index: "get_index",
      set_frame: "set_frame",
      get_frame: "get_frame"
    })
  }), com.haxepunk.graphics._Text = {}, com.haxepunk.graphics._Text.StyleType_Impl_ = function() {}, $hxClasses["com.haxepunk.graphics._Text.StyleType_Impl_"] = com.haxepunk.graphics._Text.StyleType_Impl_, com.haxepunk.graphics._Text.StyleType_Impl_.__name__ = ["com", "haxepunk", "graphics", "_Text", "StyleType_Impl_"], com.haxepunk.graphics._Text.StyleType_Impl_._new = function(format) {
    return format
  }, com.haxepunk.graphics._Text.StyleType_Impl_.toTextformat = function(this1) {
    return this1
  }, com.haxepunk.graphics._Text.StyleType_Impl_.fromTextFormat = function(format) {
    return com.haxepunk.graphics._Text.StyleType_Impl_._new(format)
  }, com.haxepunk.graphics._Text.StyleType_Impl_.fromTextOptions = function(object) {
    for (var format = new openfl.text.TextFormat, fields = Type.getInstanceFields(openfl.text.TextFormat), _g = 0, _g1 = Reflect.fields(object); _g < _g1.length;) {
      var key = _g1[_g];
      if (++_g, !(HxOverrides.indexOf(fields, key, 0) > -1)) throw '"' + key + '" is not a TextFormat property';
      Reflect.setField(format, key, Reflect.field(object, key))
    }
    return com.haxepunk.graphics._Text.StyleType_Impl_._new(format)
  }, com.haxepunk.graphics._Text.StyleType_Impl_.fromDynamic = function(object) {
    for (var format = new openfl.text.TextFormat, fields = Type.getInstanceFields(openfl.text.TextFormat), _g = 0, _g1 = Reflect.fields(object); _g < _g1.length;) {
      var key = _g1[_g];
      if (++_g, !(HxOverrides.indexOf(fields, key, 0) > -1)) throw '"' + key + '" is not a TextFormat property';
      Reflect.setField(format, key, Reflect.field(object, key))
    }
    return com.haxepunk.graphics._Text.StyleType_Impl_._new(format)
  }, com.haxepunk.graphics.Text = function(text, x, y, width, height, options) {
    null == height && (height = 0), null == width && (width = 0), null == y && (y = 0), null == x && (x = 0), this.resizable = !0, null == options && (options = {}), null == text && (text = ""), Object.prototype.hasOwnProperty.call(options, "font") || (options.font = com.haxepunk.HXP.defaultFont), Object.prototype.hasOwnProperty.call(options, "size") || (options.size = 16), Object.prototype.hasOwnProperty.call(options, "align") || (options.align = openfl.text.TextFormatAlign.LEFT), Object.prototype.hasOwnProperty.call(options, "color") || (options.color = 16777215), Object.prototype.hasOwnProperty.call(options, "resizable") || (options.resizable = !0), Object.prototype.hasOwnProperty.call(options, "wordWrap") || (options.wordWrap = !1), Object.prototype.hasOwnProperty.call(options, "leading") || (options.leading = 0);
    var fontObj = openfl.Assets.getFont(options.font);
    this._format = new openfl.text.TextFormat(fontObj.fontName, options.size, 16777215), this._format.align = options.align, this._format.leading = options.leading, this._field = new openfl.text.TextField, this._field.set_wordWrap(options.wordWrap), this._field.set_defaultTextFormat(this._format), this._field.set_text(this._text = text), this._field.selectable = !1, this.resizable = options.resizable, this._styles = new haxe.ds.StringMap, this._width = 0 == width ? Std["int"](this._field.get_textWidth() + 4) : width, this._height = 0 == height ? Std["int"](this._field.get_textHeight() + 4) : height;
    var source = com.haxepunk.HXP.createBitmap(this._width, this._height, !0);
    com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.HARDWARE ? (this._source = source, this._sourceRect = source.rect, this._region = com.haxepunk.graphics.atlas.Atlas.loadImageAsRegion(function($this) {
      var $r, data = new com.haxepunk.graphics.atlas.AtlasData($this._source);
      return $r = data
    }(this)), this.blit = !0, com.haxepunk.graphics.Image.call(this)) : com.haxepunk.graphics.Image.call(this, com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.HARDWARE ? function($this) {
      var $r, e = com.haxepunk.ds.Either.Right(com.haxepunk.graphics.atlas.Atlas.loadImageAsRegion(function() {
        var $r, data1 = new com.haxepunk.graphics.atlas.AtlasData(source);
        return $r = data1
      }($this)));
      return $r = e
    }(this) : function() {
      var $r, e1 = com.haxepunk.ds.Either.Left(source);
      return $r = e1
    }(this)), this.blit = com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.BUFFER, this.updateTextBuffer(), this.set_size(options.size), this.set_color(options.color), this.x = x, this.y = y
  }, $hxClasses["com.haxepunk.graphics.Text"] = com.haxepunk.graphics.Text, com.haxepunk.graphics.Text.__name__ = ["com", "haxepunk", "graphics", "Text"], com.haxepunk.graphics.Text.__super__ = com.haxepunk.graphics.Image, com.haxepunk.graphics.Text.prototype = $extend(com.haxepunk.graphics.Image.prototype, {
    resizable: null,
    textWidth: null,
    textHeight: null,
    addStyle: function(tagName, params) {
      this._styles.set(tagName, com.haxepunk.graphics._Text.StyleType_Impl_.toTextformat(params)), null != this._richText && this.updateTextBuffer()
    },
    updateColorTransform: function() {
      null != this._richText ? (1 == this._alpha ? this._tint = null : (this._tint = this._colorTransform, this._tint.redMultiplier = 1, this._tint.greenMultiplier = 1, this._tint.blueMultiplier = 1, this._tint.redOffset = 0, this._tint.greenOffset = 0, this._tint.blueOffset = 0, this._tint.alphaMultiplier = this._alpha), this._format.color != this._color ? this.updateTextBuffer() : this.updateBuffer()) : com.haxepunk.graphics.Image.prototype.updateColorTransform.call(this)
    },
    matchStyles: function() {
      for (this._text = this._richText, this._field.set_text(com.haxepunk.graphics.Text.tag_re.replace(this._text, "$2")), this._field.setTextFormat(this._format); com.haxepunk.graphics.Text.tag_re.match(this._text);) {
        var tagName = com.haxepunk.graphics.Text.tag_re.matched(1),
          text = com.haxepunk.graphics.Text.tag_re.matched(2),
          p = com.haxepunk.graphics.Text.tag_re.matchedPos();
        this._text = HxOverrides.substr(this._text, 0, p.pos) + text + HxOverrides.substr(this._text, p.pos + p.len, null), this._styles.exists(tagName) ? this._field.setTextFormat(this._styles.get(tagName), p.pos, p.pos + text.length) : com.haxepunk.HXP.log("Could not found text style '" + tagName + "'")
      }
      this._field.get_text() != this._text && com.haxepunk.HXP.log("Text field and _text do not match!")
    },
    updateTextBuffer: function() {
      null == this._richText ? (this._format.color = 16777215, this._field.setTextFormat(this._format)) : (this._format.color = this._color, this.matchStyles()), this._field.set_width(this._width), this._field.set_width(this.textWidth = Math.ceil(this._field.get_textWidth() + 4)), this._field.set_height(this.textHeight = Math.ceil(this._field.get_textHeight() + 4)), this.resizable && (this.textWidth > this._width || this.textHeight > this._height) && (this._width < this.textWidth && (this._width = this.textWidth), this._height < this.textHeight && (this._height = this.textHeight)), this._width > this._source.width || this._height > this._source.height ? (this._source = com.haxepunk.HXP.createBitmap(Std["int"](Math.max(this._width, this._source.width)), Std["int"](Math.max(this._height, this._source.height)), !0), this._sourceRect = this._source.rect, this.createBuffer(), this.blit || (null != this._region && this._region.destroy(), this._region = com.haxepunk.graphics.atlas.Atlas.loadImageAsRegion(function($this) {
        var $r, data = new com.haxepunk.graphics.atlas.AtlasData($this._source);
        return $r = data
      }(this)))) : this._source.fillRect(this._sourceRect, 0), this._field.set_width(this._width), this._field.set_height(this._height), this._source.draw(this._field), com.haxepunk.graphics.Image.prototype.updateBuffer.call(this)
    },
    destroy: function() {
      null != this._region && this._region.destroy()
    },
    get_text: function() {
      return this._text
    },
    set_text: function(value) {
      return this._text == value && null == this._richText ? value : (this._field.set_text(this._text = value), null == this._richText ? this.updateTextBuffer() : this.updateColorTransform(), value)
    },
    get_richText: function() {
      return null == this._richText ? this._text : this._richText
    },
    set_richText: function(value) {
      if (this._richText == value) return value;
      var fromPlain = null == this._richText;
      return this._richText = value, "" == this._richText && this._field.set_text(this._text = ""), fromPlain && null != this._richText ? (this._format.color = 16777215, this._red = this._green = this._blue = 1, this.updateColorTransform()) : this.updateTextBuffer(), value
    },
    getTextProperty: function(name) {
      var value = Reflect.getProperty(this, name);
      return null == value && (value = Reflect.getProperty(this._field, name)), null == value && (value = Reflect.getProperty(this._format, name)), value
    },
    setTextProperty: function(name, value) {
      var propertyFound = !1;
      try {
        return Reflect.setProperty(this, name, value), !0
      } catch (e) {
        try {
          Reflect.setProperty(this._field, name, value), propertyFound = !0
        } catch (e1) {
          try {
            Reflect.setProperty(this._format, name, value), propertyFound = !0
          } catch (e2) {}
        }
      }
      return propertyFound ? (this.updateTextBuffer(), !0) : !1
    },
    font: null,
    set_font: function(value) {
      return this.font == value ? value : (value = openfl.Assets.getFont(value).fontName, this._format.font = this.font = value, this.updateTextBuffer(), value)
    },
    size: null,
    set_size: function(value) {
      return this.size == value ? value : (this._format.size = this.size = value, this.updateTextBuffer(), value)
    },
    align: null,
    set_align: function(value) {
      return this.align == value ? value : (this._format.align = value, this.updateTextBuffer(), value)
    },
    leading: null,
    set_leading: function(value) {
      return this.leading == value ? value : (this._format.leading = this.leading = value, this.updateTextBuffer(), value)
    },
    wordWrap: null,
    set_wordWrap: function(value) {
      return this.wordWrap == value ? value : (this._field.set_wordWrap(this.wordWrap = value), this.updateTextBuffer(), value)
    },
    get_width: function() {
      return 0 | this._width
    },
    get_height: function() {
      return 0 | this._height
    },
    _width: null,
    _height: null,
    _text: null,
    _richText: null,
    _field: null,
    _format: null,
    _styles: null,
    __class__: com.haxepunk.graphics.Text,
    __properties__: $extend(com.haxepunk.graphics.Image.prototype.__properties__, {
      set_wordWrap: "set_wordWrap",
      set_leading: "set_leading",
      set_align: "set_align",
      set_size: "set_size",
      set_font: "set_font",
      set_richText: "set_richText",
      get_richText: "get_richText",
      set_text: "set_text",
      get_text: "get_text"
    })
  }), com.haxepunk.graphics.atlas = {}, com.haxepunk.graphics.atlas.Atlas = function(source) {
    this._data = source
  }, $hxClasses["com.haxepunk.graphics.atlas.Atlas"] = com.haxepunk.graphics.atlas.Atlas, com.haxepunk.graphics.atlas.Atlas.__name__ = ["com", "haxepunk", "graphics", "atlas", "Atlas"], com.haxepunk.graphics.atlas.Atlas.loadImageAsRegion = function(source) {
    var data = source;
    return data.createRegion(new openfl.geom.Rectangle(0, 0, data.width, data.height), null)
  }, com.haxepunk.graphics.atlas.Atlas.prototype = {
    get_width: function() {
      return this._data.width
    },
    get_height: function() {
      return this._data.height
    },
    destroy: function() {
      this._data.destroy()
    },
    prepareTile: function(tile, x, y, layer, scaleX, scaleY, angle, red, green, blue, alpha, smooth) {
      this._data.prepareTile(tile, x, y, layer, scaleX, scaleY, angle, red, green, blue, alpha, smooth)
    },
    _data: null,
    __class__: com.haxepunk.graphics.atlas.Atlas,
    __properties__: {
      get_height: "get_height",
      get_width: "get_width"
    }
  }, com.haxepunk.graphics.atlas._AtlasData = {}, com.haxepunk.graphics.atlas._AtlasData.AtlasDataType_Impl_ = function() {}, $hxClasses["com.haxepunk.graphics.atlas._AtlasData.AtlasDataType_Impl_"] = com.haxepunk.graphics.atlas._AtlasData.AtlasDataType_Impl_, com.haxepunk.graphics.atlas._AtlasData.AtlasDataType_Impl_.__name__ = ["com", "haxepunk", "graphics", "atlas", "_AtlasData", "AtlasDataType_Impl_"], com.haxepunk.graphics.atlas._AtlasData.AtlasDataType_Impl_._new = function(data) {
    return data
  }, com.haxepunk.graphics.atlas._AtlasData.AtlasDataType_Impl_.toAtlasData = function(this1) {
    return this1
  }, com.haxepunk.graphics.atlas._AtlasData.AtlasDataType_Impl_.fromString = function(s) {
    var data = com.haxepunk.graphics.atlas.AtlasData.getAtlasDataByName(s, !0);
    return data
  }, com.haxepunk.graphics.atlas._AtlasData.AtlasDataType_Impl_.fromBitmapData = function(bd) {
    var data = new com.haxepunk.graphics.atlas.AtlasData(bd);
    return data
  }, com.haxepunk.graphics.atlas._AtlasData.AtlasDataType_Impl_.fromAtlasData = function(data) {
    return data
  }, com.haxepunk.graphics.atlas.AtlasData = function(bd, name) {
    if (this._layerIndex = 0, this._rects = new Array, this._data = new Array, this._smoothData = new Array, this._dataIndex = this._smoothDataIndex = 0, this._tilesheet = new openfl.display.Tilesheet(bd), null == name && (name = "bitmapData_" + com.haxepunk.graphics.atlas.AtlasData._uniqueId++), this._name = name, com.haxepunk.graphics.atlas.AtlasData._dataPool.exists(this._name)) throw "There should never be a duplicate AtlasData instance!";
    com.haxepunk.graphics.atlas.AtlasData._dataPool.set(this._name, this), this._renderFlags = 28, this._flagAlpha = !0, this._flagRGB = !0, this.width = bd.width, this.height = bd.height
  }, $hxClasses["com.haxepunk.graphics.atlas.AtlasData"] = com.haxepunk.graphics.atlas.AtlasData, com.haxepunk.graphics.atlas.AtlasData.__name__ = ["com", "haxepunk", "graphics", "atlas", "AtlasData"], com.haxepunk.graphics.atlas.AtlasData.__properties__ = {
    set_active: "set_active"
  }, com.haxepunk.graphics.atlas.AtlasData.getAtlasDataByName = function(name, create) {
    null == create && (create = !1);
    var data = null;
    if (com.haxepunk.graphics.atlas.AtlasData._dataPool.exists(name)) data = com.haxepunk.graphics.atlas.AtlasData._dataPool.get(name);
    else if (create) {
      var bitmap = com.haxepunk.HXP.getBitmap(name);
      null != bitmap && (data = new com.haxepunk.graphics.atlas.AtlasData(bitmap, name))
    }
    return data
  }, com.haxepunk.graphics.atlas.AtlasData.startScene = function(scene) {
    com.haxepunk.graphics.atlas.AtlasData._scene = scene, com.haxepunk.graphics.atlas.AtlasData._scene.sprite.get_graphics().clear()
  }, com.haxepunk.graphics.atlas.AtlasData.active = null, com.haxepunk.graphics.atlas.AtlasData.set_active = function(value) {
    return com.haxepunk.graphics.atlas.AtlasData.active != value && (null != com.haxepunk.graphics.atlas.AtlasData.active && com.haxepunk.graphics.atlas.AtlasData.active.flush(), com.haxepunk.graphics.atlas.AtlasData.active = value), value
  }, com.haxepunk.graphics.atlas.AtlasData.destroyAll = function() {
    for (var $it0 = com.haxepunk.graphics.atlas.AtlasData._dataPool.iterator(); $it0.hasNext();) {
      var atlas = $it0.next();
      atlas.destroy()
    }
  }, com.haxepunk.graphics.atlas.AtlasData._scene = null, com.haxepunk.graphics.atlas.AtlasData.prototype = {
    width: null,
    height: null,
    toString: function() {
      return this._name
    },
    reload: function(bd) {
      com.haxepunk.HXP.overwriteBitmapCache(this._name, bd), this._tilesheet = new openfl.display.Tilesheet(bd);
      for (var _g = 0, _g1 = this._rects; _g < _g1.length;) {
        var r = _g1[_g];
        ++_g, this._tilesheet.addTileRect(r)
      }
    },
    destroy: function() {
      com.haxepunk.HXP.removeBitmap(this._name), com.haxepunk.graphics.atlas.AtlasData._dataPool.remove(this._name)
    },
    createRegion: function(rect) {
      var r = rect.clone();
      this._rects.push(r);
      var tileIndex = this._tilesheet.addTileRect(r, null);
      return new com.haxepunk.graphics.atlas.AtlasRegion(this, tileIndex, r)
    },
    flush: function() {
      0 != this._dataIndex && (this._tilesheet.drawTiles(com.haxepunk.graphics.atlas.AtlasData._scene.sprite.get_graphics(), this._data, !1, this._renderFlags, this._dataIndex), this._dataIndex = 0), 0 != this._smoothDataIndex && (this._tilesheet.drawTiles(com.haxepunk.graphics.atlas.AtlasData._scene.sprite.get_graphics(), this._smoothData, !0, this._renderFlags, this._smoothDataIndex), this._smoothDataIndex = 0)
    },
    prepareTileMatrix: function(tile, layer, tx, ty, a, b, c, d, red, green, blue, alpha, smooth) {
      com.haxepunk.graphics.atlas.AtlasData.active != this && (null != com.haxepunk.graphics.atlas.AtlasData.active && com.haxepunk.graphics.atlas.AtlasData.active.flush(), com.haxepunk.graphics.atlas.AtlasData.active = this), null == smooth && (smooth = com.haxepunk.graphics.atlas.Atlas.smooth);
      var _data;
      _data = smooth ? this._smoothData : this._data;
      var _dataIndex;
      _dataIndex = smooth ? this._smoothDataIndex : this._dataIndex, _data[_dataIndex++] = tx, _data[_dataIndex++] = ty, _data[_dataIndex++] = tile, _data[_dataIndex++] = a, _data[_dataIndex++] = b, _data[_dataIndex++] = c, _data[_dataIndex++] = d, this._flagRGB && (_data[_dataIndex++] = red, _data[_dataIndex++] = green, _data[_dataIndex++] = blue), this._flagAlpha && (_data[_dataIndex++] = alpha), smooth ? this._smoothDataIndex = _dataIndex : this._dataIndex = _dataIndex
    },
    prepareTile: function(tile, x, y, layer, scaleX, scaleY, angle, red, green, blue, alpha, smooth) {
      com.haxepunk.graphics.atlas.AtlasData.active != this && (null != com.haxepunk.graphics.atlas.AtlasData.active && com.haxepunk.graphics.atlas.AtlasData.active.flush(), com.haxepunk.graphics.atlas.AtlasData.active = this), null == smooth && (smooth = com.haxepunk.graphics.atlas.Atlas.smooth);
      var _data;
      _data = smooth ? this._smoothData : this._data;
      var _dataIndex;
      if (_dataIndex = smooth ? this._smoothDataIndex : this._dataIndex, _data[_dataIndex++] = x, _data[_dataIndex++] = y, _data[_dataIndex++] = tile, 0 == angle) _data[_dataIndex++] = scaleX, _data[_dataIndex++] = 0, _data[_dataIndex++] = 0, _data[_dataIndex++] = scaleY;
      else {
        var cos = Math.cos(-angle * (Math.PI / -180)),
          sin = Math.sin(-angle * (Math.PI / -180));
        _data[_dataIndex++] = cos * scaleX, _data[_dataIndex++] = -sin * scaleY, _data[_dataIndex++] = sin * scaleX, _data[_dataIndex++] = cos * scaleY
      }
      this._flagRGB && (_data[_dataIndex++] = red, _data[_dataIndex++] = green, _data[_dataIndex++] = blue), this._flagAlpha && (_data[_dataIndex++] = alpha), smooth ? this._smoothDataIndex = _dataIndex : this._dataIndex = _dataIndex
    },
    get_alpha: function() {
      return 0 != (8 & this._renderFlags)
    },
    set_alpha: function(value) {
      return value ? this._renderFlags |= 8 : this._renderFlags &= -9, this._flagAlpha = value, value
    },
    get_rgb: function() {
      return 0 != (4 & this._renderFlags)
    },
    set_rgb: function(value) {
      return value ? this._renderFlags |= 4 : this._renderFlags &= -5, this._flagRGB = value, value
    },
    get_blend: function() {
      return 0 != (0 & this._renderFlags) ? 0 : 0 != (65536 & this._renderFlags) ? 65536 : 0 != (131072 & this._renderFlags) ? 131072 : 0 != (262144 & this._renderFlags) ? 262144 : 0
    },
    set_blend: function(value) {
      return this._renderFlags &= -458753, 65536 == value || 131072 == value || 262144 == value || 0 == value ? (this._renderFlags |= value, value) : 0
    },
    _name: null,
    _layerIndex: null,
    _renderFlags: null,
    _flagRGB: null,
    _flagAlpha: null,
    _tilesheet: null,
    _data: null,
    _dataIndex: null,
    _smoothData: null,
    _smoothDataIndex: null,
    _rects: null,
    __class__: com.haxepunk.graphics.atlas.AtlasData,
    __properties__: {
      set_blend: "set_blend",
      get_blend: "get_blend",
      set_rgb: "set_rgb",
      get_rgb: "get_rgb",
      set_alpha: "set_alpha",
      get_alpha: "get_alpha"
    }
  }, com.haxepunk.graphics.atlas.AtlasRegion = function(parent, tileIndex, rect) {
    this._parent = parent, this.tileIndex = tileIndex, this._rect = rect, this.rotated = !1
  }, $hxClasses["com.haxepunk.graphics.atlas.AtlasRegion"] = com.haxepunk.graphics.atlas.AtlasRegion, com.haxepunk.graphics.atlas.AtlasRegion.__name__ = ["com", "haxepunk", "graphics", "atlas", "AtlasRegion"], com.haxepunk.graphics.atlas.AtlasRegion.prototype = {
    rotated: null,
    tileIndex: null,
    clip: function(clipRect, center) {
      var clipRectCopy = new openfl.geom.Rectangle(clipRect.x, clipRect.y, clipRect.width, clipRect.height);
      return clipRectCopy.x + clipRectCopy.width > this._rect.width && (clipRectCopy.width = this._rect.width - clipRectCopy.x), clipRectCopy.y + clipRectCopy.height > this._rect.height && (clipRectCopy.height = this._rect.height - clipRectCopy.y), clipRectCopy.width < 0 && (clipRectCopy.width = 0), clipRectCopy.height < 0 && (clipRectCopy.height = 0), clipRectCopy.x += this._rect.x, clipRectCopy.y += this._rect.y, this._parent.createRegion(clipRectCopy, center)
    },
    draw: function(x, y, layer, scaleX, scaleY, angle, red, green, blue, alpha, smooth) {
      null == alpha && (alpha = 1), null == blue && (blue = 1), null == green && (green = 1), null == red && (red = 1), null == angle && (angle = 0), null == scaleY && (scaleY = 1), null == scaleX && (scaleX = 1), null == smooth && (smooth = com.haxepunk.graphics.atlas.Atlas.smooth), this.rotated && (angle += 90), this._parent.prepareTile(this.tileIndex, x, y, layer, scaleX, scaleY, angle, red, green, blue, alpha, smooth)
    },
    drawMatrix: function(tx, ty, a, b, c, d, layer, red, green, blue, alpha, smooth) {
      if (null == alpha && (alpha = 1), null == blue && (blue = 1), null == green && (green = 1), null == red && (red = 1), null == smooth && (smooth = com.haxepunk.graphics.atlas.Atlas.smooth), this.rotated) {
        var matrix = new openfl.geom.Matrix(a, b, c, d, tx, ty);
        matrix.rotate(90 * (Math.PI / -180)), this._parent.prepareTileMatrix(this.tileIndex, layer, matrix.tx, matrix.ty, matrix.a, matrix.b, matrix.c, matrix.d, red, green, blue, alpha, smooth)
      } else this._parent.prepareTileMatrix(this.tileIndex, layer, tx, ty, a, b, c, d, red, green, blue, alpha, smooth)
    },
    destroy: function() {
      null != this._parent && (this._parent.destroy(), this._parent = null)
    },
    toString: function() {
      return "[AtlasRegion " + this._rect.width + ", " + this._rect.height + " " + this.tileIndex + "]"
    },
    get_width: function() {
      return this._rect.width
    },
    get_height: function() {
      return this._rect.height
    },
    _rect: null,
    _parent: null,
    __class__: com.haxepunk.graphics.atlas.AtlasRegion,
    __properties__: {
      get_height: "get_height",
      get_width: "get_width"
    }
  }, com.haxepunk.graphics.atlas.TextureAtlas = function(source) {
    this._regions = new haxe.ds.StringMap, com.haxepunk.graphics.atlas.Atlas.call(this, source)
  }, $hxClasses["com.haxepunk.graphics.atlas.TextureAtlas"] = com.haxepunk.graphics.atlas.TextureAtlas, com.haxepunk.graphics.atlas.TextureAtlas.__name__ = ["com", "haxepunk", "graphics", "atlas", "TextureAtlas"], com.haxepunk.graphics.atlas.TextureAtlas.loadTexturePacker = function(file) {
    for (var xml = Xml.parse(openfl.Assets.getText(file)), root = xml.firstElement(), atlas = new com.haxepunk.graphics.atlas.TextureAtlas(function($this) {
        var $r, s = root.get("imagePath");
        return $r = function() {
          var $r, data = com.haxepunk.graphics.atlas.AtlasData.getAtlasDataByName(s, !0);
          return $r = data
        }($this)
      }(this)), $it0 = root.elements(); $it0.hasNext();) {
      var sprite = $it0.next();
      com.haxepunk.HXP.rect.x = Std.parseInt(sprite.get("x")), com.haxepunk.HXP.rect.y = Std.parseInt(sprite.get("y")), sprite.exists("w") && (com.haxepunk.HXP.rect.width = Std.parseInt(sprite.get("w"))), sprite.exists("h") && (com.haxepunk.HXP.rect.height = Std.parseInt(sprite.get("h")));
      var region = atlas.defineRegion(sprite.get("n"), com.haxepunk.HXP.rect);
      sprite.exists("r") && "y" == sprite.get("r") && (region.rotated = !0)
    }
    return atlas
  }, com.haxepunk.graphics.atlas.TextureAtlas.__super__ = com.haxepunk.graphics.atlas.Atlas, com.haxepunk.graphics.atlas.TextureAtlas.prototype = $extend(com.haxepunk.graphics.atlas.Atlas.prototype, {
    getRegion: function(name) {
      if (this._regions.exists(name)) return this._regions.get(name);
      throw 'Region has not been defined yet "' + name + '".'
    },
    defineRegion: function(name, rect, center) {
      var region = this._data.createRegion(rect, center);
      return this._regions.set(name, region), region
    },
    _regions: null,
    __class__: com.haxepunk.graphics.atlas.TextureAtlas
  }), com.haxepunk.graphics.atlas.TileAtlas = function(source) {
    com.haxepunk.graphics.atlas.Atlas.call(this, source), this._regions = new Array
  }, $hxClasses["com.haxepunk.graphics.atlas.TileAtlas"] = com.haxepunk.graphics.atlas.TileAtlas, com.haxepunk.graphics.atlas.TileAtlas.__name__ = ["com", "haxepunk", "graphics", "atlas", "TileAtlas"], com.haxepunk.graphics.atlas.TileAtlas.__super__ = com.haxepunk.graphics.atlas.Atlas, com.haxepunk.graphics.atlas.TileAtlas.prototype = $extend(com.haxepunk.graphics.atlas.Atlas.prototype, {
    getRegion: function(index) {
      return this._regions[index]
    },
    prepare: function(tileWidth, tileHeight, tileMarginWidth, tileMarginHeight) {
      if (null == tileMarginHeight && (tileMarginHeight = 0), null == tileMarginWidth && (tileMarginWidth = 0), !(this._regions.length > 0)) {
        var cols = Math.floor(this._data.width / tileWidth),
          rows = Math.floor(this._data.height / tileHeight);
        com.haxepunk.HXP.rect.width = tileWidth, com.haxepunk.HXP.rect.height = tileHeight, com.haxepunk.HXP.point.x = com.haxepunk.HXP.point.y = 0;
        for (var _g = 0; rows > _g;) {
          var y = _g++;
          com.haxepunk.HXP.rect.y = y * (tileHeight + tileMarginHeight);
          for (var _g1 = 0; cols > _g1;) {
            var x = _g1++;
            com.haxepunk.HXP.rect.x = x * (tileWidth + tileMarginWidth), this._regions.push(this._data.createRegion(com.haxepunk.HXP.rect, com.haxepunk.HXP.point))
          }
        }
      }
    },
    _regions: null,
    __class__: com.haxepunk.graphics.atlas.TileAtlas
  }), com.haxepunk.masks.Circle = function(radius, x, y) {
    null == y && (y = 0), null == x && (x = 0), null == radius && (radius = 1), com.haxepunk.masks.Hitbox.call(this), this.set_radius(radius), this._x = x + radius, this._y = y + radius;
    var key = Type.getClassName(com.haxepunk.Mask);
    this._check.set(key, $bind(this, this.collideMask));
    var key1 = Type.getClassName(com.haxepunk.masks.Circle);
    this._check.set(key1, $bind(this, this.collideCircle));
    var key2 = Type.getClassName(com.haxepunk.masks.Hitbox);
    this._check.set(key2, $bind(this, this.collideHitbox));
    var key3 = Type.getClassName(com.haxepunk.masks.Grid);
    this._check.set(key3, $bind(this, this.collideGrid));
    var key4 = Type.getClassName(com.haxepunk.masks.SlopedGrid);
    this._check.set(key4, $bind(this, this.collideSlopedGrid))
  }, $hxClasses["com.haxepunk.masks.Circle"] = com.haxepunk.masks.Circle, com.haxepunk.masks.Circle.__name__ = ["com", "haxepunk", "masks", "Circle"], com.haxepunk.masks.Circle.__super__ = com.haxepunk.masks.Hitbox, com.haxepunk.masks.Circle.prototype = $extend(com.haxepunk.masks.Hitbox.prototype, {
    collideMask: function(other) {
      var distanceX = Math.abs(this._parent.get_x() + this._x - other._parent.get_x() - .5 * other._parent.width),
        distanceY = Math.abs(this._parent.get_y() + this._y - other._parent.get_y() - .5 * other._parent.height);
      if (distanceX > .5 * other._parent.width + this._radius || distanceY > .5 * other._parent.height + this._radius) return !1;
      if (distanceX <= .5 * other._parent.width || distanceY <= .5 * other._parent.height) return !0;
      var distanceToCorner = (distanceX - .5 * other._parent.width) * (distanceX - .5 * other._parent.width) + (distanceY - .5 * other._parent.height) * (distanceY - .5 * other._parent.height);
      return distanceToCorner <= this._squaredRadius
    },
    collideCircle: function(other) {
      var dx = this._parent.get_x() + this._x - (other._parent.get_x() + other._x),
        dy = this._parent.get_y() + this._y - (other._parent.get_y() + other._y);
      return dx * dx + dy * dy < Math.pow(this._radius + other._radius, 2)
    },
    collideGridTile: function(mx, my, hTileWidth, hTileHeight, thisX, thisY) {
      var collide = !1,
        dx = Math.abs(thisX - mx);
      if (dx <= hTileWidth + this._radius) {
        var dy = Math.abs(thisY - my);
        if (dy <= hTileHeight + this._radius)
          if (hTileWidth >= dx || hTileHeight >= dy) collide = !0;
          else {
            var xCornerDist = dx - hTileWidth,
              yCornerDist = dy - hTileHeight;
            xCornerDist * xCornerDist + yCornerDist * yCornerDist <= this._squaredRadius && (collide = !0)
          }
      }
      return collide
    },
    collideGrid: function(other) {
      var thisX = this._x + this._parent.get_x(),
        thisY = this._y + this._parent.get_y(),
        otherX = other.get_x() + other._parent.get_x(),
        otherY = other.get_y() + other._parent.get_y(),
        entityDistX = thisX - otherX,
        entityDistY = thisY - otherY,
        minx = Math.floor((entityDistX - this._radius) / (0 | other._tile.width)),
        miny = Math.floor((entityDistY - this._radius) / (0 | other._tile.height)),
        maxx = Math.ceil((entityDistX + this._radius) / (0 | other._tile.width)),
        maxy = Math.ceil((entityDistY + this._radius) / (0 | other._tile.height));
      0 > minx && (minx = 0), 0 > miny && (miny = 0), maxx > other.columns && (maxx = other.columns), maxy > other.rows && (maxy = other.rows);
      for (var dx, hTileWidth = .5 * (0 | other._tile.width), hTileHeight = .5 * (0 | other._tile.height), dy = otherY + miny * (0 | other._tile.height), _g = miny; maxy > _g;) {
        var yy = _g++;
        dx = otherX + minx * (0 | other._tile.width);
        for (var _g1 = minx; maxx > _g1;) {
          var xx = _g1++;
          if (other.getTile(xx, yy) && this.collideGridTile(dx + hTileWidth, dy + hTileHeight, hTileWidth, hTileHeight, thisX, thisY)) return !0;
          dx += 0 | other._tile.width
        }
        dy += 0 | other._tile.height
      }
      return !1
    },
    collideSlopedGrid: function(other) {
      var thisX = this._x + this._parent.get_x(),
        thisY = this._y + this._parent.get_y(),
        otherX = other.get_x() + other._parent.get_x(),
        otherY = other.get_y() + other._parent.get_y(),
        entityDistX = thisX - otherX,
        entityDistY = thisY - otherY,
        minx = Math.floor((entityDistX - this._radius) / (0 | other._tile.width)),
        miny = Math.floor((entityDistY - this._radius) / (0 | other._tile.height)),
        maxx = Math.ceil((entityDistX + this._radius) / (0 | other._tile.width)),
        maxy = Math.ceil((entityDistY + this._radius) / (0 | other._tile.height));
      0 > minx && (minx = 0), 0 > miny && (miny = 0), maxx > other.columns && (maxx = other.columns), maxy > other.rows && (maxy = other.rows);
      for (var dx, hTileWidth = .5 * (0 | other._tile.width), hTileHeight = .5 * (0 | other._tile.height), dy = otherY + miny * (0 | other._tile.height), _g = miny; maxy > _g;) {
        var yy = _g++;
        dx = otherX + minx * (0 | other._tile.width);
        for (var _g1 = minx; maxx > _g1;) {
          var xx = _g1++,
            tile = other.getTile(xx, yy);
          if (tile.type == com.haxepunk.masks.TileType.Solid) {
            if (this.collideGridTile(dx + hTileWidth, dy + hTileHeight, hTileWidth, hTileHeight, thisX, thisY)) return !0
          } else if (tile.type == com.haxepunk.masks.TileType.AboveSlope || tile.type == com.haxepunk.masks.TileType.BelowSlope) {
            if (other.collidePointInSlope(dx, dy, thisX, thisY, tile)) return !0;
            var x1 = dx,
              y1 = dy + tile.yOffset,
              yoff = tile.slope * (0 | other._tile.width),
              x2 = x1 + yoff / tile.slope,
              y2 = y1 + yoff,
              dx1 = x2 - x1,
              dy1 = y2 - y1,
              fx = x1 - thisX,
              fy = y1 - thisY,
              a = dx1 * dx1 + dy1 * dy1,
              b = 2 * (fx * dx1 + fy * dy1),
              c = fx * fx + fy * fy - this._radius * this._radius,
              discriminant = b * b - 4 * a * c;
            if (discriminant >= 0) {
              discriminant = Math.sqrt(discriminant);
              var t1 = (-b - discriminant) / (2 * a),
                t2 = (-b + discriminant) / (2 * a);
              if (t1 >= 0 && 1 >= t1 || t2 >= 0 && 1 >= t2 || 0 > t1 && t2 > 1) return !0
            }
          }
          dx += 0 | other._tile.width
        }
        dy += 0 | other._tile.height
      }
      return !1
    },
    collideHitbox: function(other) {
      var _otherHalfWidth = .5 * other._width,
        _otherHalfHeight = .5 * other._height,
        px = this._x + this._parent.get_x(),
        py = this._y + this._parent.get_y(),
        ox = other._x,
        oy = other._y;
      null != (other._parent != com.haxepunk.Entity._EMPTY ? other._parent : null) && (ox += (other._parent != com.haxepunk.Entity._EMPTY ? other._parent : null).get_x(), oy += (other._parent != com.haxepunk.Entity._EMPTY ? other._parent : null).get_y());
      var distanceX = Math.abs(px - ox - _otherHalfWidth),
        distanceY = Math.abs(py - oy - _otherHalfHeight);
      if (distanceX > _otherHalfWidth + this._radius || distanceY > _otherHalfHeight + this._radius) return !1;
      if (_otherHalfWidth >= distanceX || _otherHalfHeight >= distanceY) return !0;
      var distanceToCorner = (distanceX - _otherHalfWidth) * (distanceX - _otherHalfWidth) + (distanceY - _otherHalfHeight) * (distanceY - _otherHalfHeight);
      return distanceToCorner <= this._squaredRadius
    },
    project: function(axis, projection) {
      projection.min = -this._radius, projection.max = this._radius
    },
    debugDraw: function(graphics, scaleX, scaleY) {
      graphics.drawCircle((this._parent.get_x() + this._x - com.haxepunk.HXP.camera.x) * scaleX, (this._parent.get_y() + this._y - com.haxepunk.HXP.camera.y) * scaleY, this._radius * scaleX)
    },
    get_x: function() {
      return this._x - this._radius
    },
    get_y: function() {
      return this._y - this._radius
    },
    get_radius: function() {
      return this._radius
    },
    set_radius: function(value) {
      return this._radius == value ? value : (this._radius = value, this._squaredRadius = value * value, this.set_height(this.set_width(this._radius + this._radius)), null != this.list ? this.list.update() : null != (this._parent != com.haxepunk.Entity._EMPTY ? this._parent : null) && this.update(), this._radius)
    },
    update: function() {
      null != (this._parent != com.haxepunk.Entity._EMPTY ? this._parent : null) && (this._parent.originX = -this._x + this._radius, this._parent.originY = -this._y + this._radius, this._parent.height = this._parent.width = this._radius + this._radius, null != this.list && this.list.update())
    },
    _radius: null,
    _squaredRadius: null,
    __class__: com.haxepunk.masks.Circle,
    __properties__: $extend(com.haxepunk.masks.Hitbox.prototype.__properties__, {
      set_radius: "set_radius",
      get_radius: "get_radius"
    })
  }), com.haxepunk.masks.Grid = function(width, height, tileWidth, tileHeight, x, y) {
    if (null == y && (y = 0), null == x && (x = 0), com.haxepunk.masks.Hitbox.call(this), 0 == width || 0 == height || 0 == tileWidth || 0 == tileHeight) throw "Illegal Grid, sizes cannot be 0.";
    this._rect = com.haxepunk.HXP.rect, this._point = com.haxepunk.HXP.point, this._point2 = com.haxepunk.HXP.point2, this.columns = width / tileWidth | 0, this.rows = height / tileHeight | 0, this._tile = new openfl.geom.Rectangle(0, 0, tileWidth, tileHeight), this._x = x, this._y = y, this._width = width, this._height = height, this.usePositions = !1;
    var key = Type.getClassName(com.haxepunk.Mask);
    this._check.set(key, $bind(this, this.collideMask));
    var key1 = Type.getClassName(com.haxepunk.masks.Hitbox);
    this._check.set(key1, $bind(this, this.collideHitbox));
    var key2 = Type.getClassName(com.haxepunk.masks.Pixelmask);
    this._check.set(key2, $bind(this, this.collidePixelmask));
    var key3 = Type.getClassName(com.haxepunk.masks.Grid);
    this._check.set(key3, $bind(this, this.collideGrid)), this.data = new Array;
    for (var _g1 = 0, _g = this.rows; _g > _g1;) {
      {
        _g1++
      }
      this.data.push(new Array)
    }
  }, $hxClasses["com.haxepunk.masks.Grid"] = com.haxepunk.masks.Grid, com.haxepunk.masks.Grid.__name__ = ["com", "haxepunk", "masks", "Grid"], com.haxepunk.masks.Grid.__super__ = com.haxepunk.masks.Hitbox, com.haxepunk.masks.Grid.prototype = $extend(com.haxepunk.masks.Hitbox.prototype, {
    usePositions: null,
    setTile: function(column, row, solid) {
      null == solid && (solid = !0), null == row && (row = 0), null == column && (column = 0), this.usePositions && (column = column / this._tile.width | 0, row = row / this._tile.height | 0), this.setTileXY(column, row, solid)
    },
    setTileXY: function(x, y, solid) {
      null == solid && (solid = !0), null == y && (y = 0), null == x && (x = 0), (0 > x || x > this.columns - 1 || 0 > y || y > this.rows - 1 ? 1 : 0) || (this.data[y][x] = solid)
    },
    clearTile: function(column, row) {
      null == row && (row = 0), null == column && (column = 0), this.setTile(column, row, !1)
    },
    checkTile: function(column, row) {
      return 0 > column || column > this.columns - 1 || 0 > row || row > this.rows - 1 ? !1 : !0
    },
    getTile: function(column, row) {
      return null == row && (row = 0), null == column && (column = 0), this.usePositions && (column = column / this._tile.width | 0, row = row / this._tile.height | 0), this.getTileXY(column, row)
    },
    getTileXY: function(x, y) {
      return null == y && (y = 0), null == x && (x = 0), (0 > x || x > this.columns - 1 || 0 > y || y > this.rows - 1 ? 1 : 0) ? !1 : this.data[y][x]
    },
    setRect: function(column, row, width, height, solid) {
      null == solid && (solid = !0), null == height && (height = 1), null == width && (width = 1), null == row && (row = 0), null == column && (column = 0), this.usePositions && (column = column / this._tile.width | 0, row = row / this._tile.height | 0, width = width / this._tile.width | 0, height = height / this._tile.height | 0);
      for (var _g1 = row, _g = row + height; _g > _g1;)
        for (var yy = _g1++, _g3 = column, _g2 = column + width; _g2 > _g3;) {
          var xx = _g3++;
          this.setTileXY(xx, yy, solid)
        }
    },
    clearRect: function(column, row, width, height) {
      null == height && (height = 1), null == width && (width = 1), null == row && (row = 0), null == column && (column = 0), this.setRect(column, row, width, height, !1)
    },
    loadFromString: function(str, columnSep, rowSep) {
      null == rowSep && (rowSep = "\n"), null == columnSep && (columnSep = ",");
      for (var col, cols, row = str.split(rowSep), rows = row.length, _g = 0; rows > _g;) {
        var y1 = _g++;
        if ("" != row[y1]) {
          col = row[y1].split(columnSep), cols = col.length;
          for (var _g1 = 0; cols > _g1;) {
            var x1 = _g1++;
            "" != col[x1] && this.setTile(x1, y1, Std.parseInt(col[x1]) > 0)
          }
        }
      }
    },
    loadFrom2DArray: function(array) {
      for (var _g1 = 0, _g = array.length; _g > _g1;)
        for (var y = _g1++, _g3 = 0, _g2 = array[0].length; _g2 > _g3;) {
          var x = _g3++;
          this.setTile(x, y, array[y][x] > 0)
        }
    },
    saveToString: function(columnSep, rowSep, solid, empty) {
      null == empty && (empty = "false"), null == solid && (solid = "true"), null == rowSep && (rowSep = "\n"), null == columnSep && (columnSep = ",");
      for (var s = "", _g1 = 0, _g = this.rows; _g > _g1;) {
        for (var y1 = _g1++, _g3 = 0, _g2 = this.columns; _g2 > _g3;) {
          var x1 = _g3++;
          s += Std.string(this.getTileXY(x1, y1) ? solid : empty), x1 != this.columns - 1 && (s += columnSep)
        }
        y1 != this.rows - 1 && (s += rowSep)
      }
      return s
    },
    clone: function() {
      for (var cloneGrid = new com.haxepunk.masks.Grid(this._width, this._height, 0 | this._tile.width, 0 | this._tile.height, this._x, this._y), _g1 = 0, _g = this.rows; _g > _g1;)
        for (var y = _g1++, _g3 = 0, _g2 = this.columns; _g2 > _g3;) {
          var x = _g3++;
          cloneGrid.setTile(x, y, this.getTile(x, y))
        }
      return cloneGrid
    },
    get_tileWidth: function() {
      return 0 | this._tile.width
    },
    get_tileHeight: function() {
      return 0 | this._tile.height
    },
    columns: null,
    rows: null,
    data: null,
    collideMask: function(other) {
      var rectX, rectY, pointX, pointY;
      this._rect.x = other._parent.get_x() - other._parent.originX - this._parent.get_x() + this._parent.originX, this._rect.y = other._parent.get_y() - other._parent.originY - this._parent.get_y() + this._parent.originY, pointX = ((this._rect.x + other._parent.width - 1) / this._tile.width | 0) + 1, pointY = ((this._rect.y + other._parent.height - 1) / this._tile.height | 0) + 1, rectX = this._rect.x / this._tile.width | 0, rectY = this._rect.y / this._tile.height | 0;
      for (var _g = rectY; pointY > _g;)
        for (var dy = _g++, _g1 = rectX; pointX > _g1;) {
          var dx = _g1++;
          if (this.getTile(dx, dy)) return !0
        }
      return !1
    },
    collideHitbox: function(other) {
      var rectX, rectY, pointX, pointY;
      this._rect.x = other._parent.get_x() - other._x - this._parent.get_x() + this._x, this._rect.y = other._parent.get_y() - other._y - this._parent.get_y() + this._y, pointX = ((this._rect.x + other._width - 1) / this._tile.width | 0) + 1, pointY = ((this._rect.y + other._height - 1) / this._tile.height | 0) + 1, rectX = this._rect.x / this._tile.width | 0, rectY = this._rect.y / this._tile.height | 0;
      for (var _g = rectY; pointY > _g;)
        for (var dy = _g++, _g1 = rectX; pointX > _g1;) {
          var dx = _g1++;
          if (this.getTile(dx, dy)) return !0
        }
      return !1
    },
    collidePixelmask: function() {
      return haxe.Log.trace("Pixelmasks will not work in targets other than flash due to hittest not being implemented in OpenFL.", {
        fileName: "Grid.hx",
        lineNumber: 399,
        className: "com.haxepunk.masks.Grid",
        methodName: "collidePixelmask"
      }), !1
    },
    collideGrid: function(other) {
      var ax1 = this._parent.get_x() + this._x,
        ax2 = ax1 + this._width,
        bx1 = other._parent.get_x() + other._x,
        bx2 = bx1 + other._width;
      if (bx1 > ax2 || ax1 > bx2) return !1;
      var ay1 = this._parent.get_y() + this._y,
        ay2 = ay1 + this._height,
        by1 = other._parent.get_y() + other._y,
        by2 = by1 + other._height;
      if (by1 > ay2 || ay1 > by2) return !1;
      var ox1;
      ox1 = ax1 > bx1 ? ax1 : bx1;
      var oy1;
      oy1 = ay1 > by1 ? ay1 : by1;
      var ox2;
      ox2 = bx2 > ax2 ? ax2 : bx2;
      var oy2;
      oy2 = by2 > ay2 ? ay2 : by2;
      var tw, th;
      this._tile.width < other._tile.width ? (tw = this._tile.width, ox1 -= this._parent.get_x() + this._x, ox1 = (ox1 / tw | 0) * tw, ox1 += this._parent.get_x() + this._x) : (tw = other._tile.width, ox1 -= other._parent.get_x() + other._x, ox1 = (ox1 / tw | 0) * tw, ox1 += other._parent.get_x() + other._x), this._tile.height < other._tile.height ? (th = this._tile.height, oy1 -= this._parent.get_y() + this._y, oy1 = (oy1 / th | 0) * th, oy1 += this._parent.get_y() + this._y) : (th = other._tile.height, oy1 -= other._parent.get_y() + other._y, oy1 = (oy1 / th | 0) * th, oy1 += other._parent.get_y() + other._y);
      for (var y = oy1, x = 0; oy2 > y;) {
        var ar1 = Std["int"]((y - this._parent.get_y() - this._y) / this._tile.height),
          br1 = Std["int"]((y - other._parent.get_y() - other._y) / other._tile.height),
          ar2 = Std["int"]((y - this._parent.get_y() - this._y + (th - 1)) / this._tile.height),
          br2 = Std["int"]((y - other._parent.get_y() - other._y + (th - 1)) / other._tile.height);
        for (x = ox1; ox2 > x;) {
          var ac1 = Std["int"]((x - this._parent.get_x() - this._x) / this._tile.width),
            bc1 = Std["int"]((x - other._parent.get_x() - other._x) / other._tile.width),
            ac2 = Std["int"]((x - this._parent.get_x() - this._x + (tw - 1)) / this._tile.width),
            bc2 = Std["int"]((x - other._parent.get_x() - other._x + (tw - 1)) / other._tile.width);
          if (this.getTile(ac1, ar1) && other.getTile(bc1, br1) || this.getTile(ac2, ar1) && other.getTile(bc2, br1) || this.getTile(ac1, ar2) && other.getTile(bc1, br2) || this.getTile(ac2, ar2) && other.getTile(bc2, br2)) return !0;
          x += tw
        }
        y += th
      }
      return !1
    },
    debugDraw: function(graphics, scaleX, scaleY) {
      var cellX, cellY, stepX = (0 | this._tile.width) * scaleX,
        stepY = (0 | this._tile.height) * scaleY,
        px = this._x + this._parent.get_x() - com.haxepunk.HXP.camera.x,
        py = this._y + this._parent.get_y() - com.haxepunk.HXP.camera.y,
        startx = Math.floor(-px / (0 | this._tile.width)),
        starty = Math.floor(-py / (0 | this._tile.height)),
        destx = startx + 1 + Math.ceil(com.haxepunk.HXP.width / (0 | this._tile.width)),
        desty = starty + 1 + Math.ceil(com.haxepunk.HXP.height / (0 | this._tile.height));
      if (!(startx > this.columns || starty > this.rows || 0 > destx || 0 > desty)) {
        0 > startx && (startx = 0), destx > this.columns && (destx = this.columns), 0 > starty && (starty = 0), desty > this.rows && (desty = this.rows), px = (px + startx * (0 | this._tile.width)) * scaleX, py = (py + starty * (0 | this._tile.height)) * scaleY;
        var row;
        cellY = py;
        for (var _g = starty; desty > _g;) {
          var y = _g++;
          cellX = px, row = this.data[y];
          for (var _g1 = startx; destx > _g1;) {
            var x = _g1++;
            row[x] && (graphics.lineStyle(1, 16777215, .3), graphics.drawRect(cellX, cellY, stepX, stepY), x < this.columns - 1 && !row[x + 1] && (graphics.lineStyle(1, 255), graphics.moveTo(cellX + stepX, cellY), graphics.lineTo(cellX + stepX, cellY + stepY)), x > 0 && !row[x - 1] && (graphics.lineStyle(1, 255), graphics.moveTo(cellX, cellY), graphics.lineTo(cellX, cellY + stepY)), y < this.rows - 1 && !this.data[y + 1][x] && (graphics.lineStyle(1, 255), graphics.moveTo(cellX, cellY + stepY), graphics.lineTo(cellX + stepX, cellY + stepY)), y > 0 && !this.data[y - 1][x] && (graphics.lineStyle(1, 255), graphics.moveTo(cellX, cellY), graphics.lineTo(cellX + stepX, cellY))), cellX += stepX
          }
          cellY += stepY
        }
      }
    },
    squareProjection: function(axis, point) {
      axis.x < axis.y ? (point.x = axis.x, point.y = axis.y) : (point.y = axis.x, point.x = axis.y)
    },
    _tile: null,
    _rect: null,
    _point: null,
    _point2: null,
    __class__: com.haxepunk.masks.Grid,
    __properties__: $extend(com.haxepunk.masks.Hitbox.prototype.__properties__, {
      get_tileHeight: "get_tileHeight",
      get_tileWidth: "get_tileWidth"
    })
  }), com.haxepunk.masks.Pixelmask = function(source, x, y) {
    if (null == y && (y = 0), null == x && (x = 0), com.haxepunk.masks.Hitbox.call(this), this._data = js.Boot.__instanceof(source, openfl.display.BitmapData) ? source : com.haxepunk.HXP.getBitmap(source), null == this._data) throw "Invalid Pixelmask source image.";
    this.threshold = 1, this._rect = com.haxepunk.HXP.rect, this._point = com.haxepunk.HXP.point, this._point2 = com.haxepunk.HXP.point2, this._width = this.get_data().width, this._height = this.get_data().height, this._x = x, this._y = y;
    var key = Type.getClassName(com.haxepunk.Mask);
    this._check.set(key, $bind(this, this.collideMask));
    var key1 = Type.getClassName(com.haxepunk.masks.Pixelmask);
    this._check.set(key1, $bind(this, this.collidePixelmask));
    var key2 = Type.getClassName(com.haxepunk.masks.Hitbox);
    this._check.set(key2, $bind(this, this.collideHitbox))
  }, $hxClasses["com.haxepunk.masks.Pixelmask"] = com.haxepunk.masks.Pixelmask, com.haxepunk.masks.Pixelmask.__name__ = ["com", "haxepunk", "masks", "Pixelmask"], com.haxepunk.masks.Pixelmask.__super__ = com.haxepunk.masks.Hitbox, com.haxepunk.masks.Pixelmask.prototype = $extend(com.haxepunk.masks.Hitbox.prototype, {
    threshold: null,
    collideMask: function(other) {
      return this._point.x = this._parent.get_x() + this._x, this._point.y = this._parent.get_y() + this._y, this._rect.x = other._parent.get_x() - other._parent.originX, this._rect.y = other._parent.get_y() - other._parent.originY, this._rect.width = other._parent.width, this._rect.height = other._parent.height, !1
    },
    collideHitbox: function(other) {
      return this._point.x = this._parent.get_x() + this._x, this._point.y = this._parent.get_y() + this._y, this._rect.x = other._parent.get_x() + other._x, this._rect.y = other._parent.get_y() + other._y, this._rect.width = other._width, this._rect.height = other._height, !1
    },
    collidePixelmask: function(other) {
      this._point.x = other._parent.get_x() + other._x - (this._parent.get_x() + this._x), this._point.y = other._parent.get_y() + other._y - (this._parent.get_y() + this._y);
      var r1 = new openfl.geom.Rectangle(0, 0, this._data.width, this._data.height),
        r2 = new openfl.geom.Rectangle(this._point.x, this._point.y, other._data.width, other._data.height),
        intersect = r1.intersection(r2);
      if (intersect.isEmpty()) return !1;
      for (var _g1 = Math.floor(intersect.x), _g = Math.floor(intersect.x + intersect.width + 1); _g > _g1;)
        for (var dx = _g1++, _g3 = Math.floor(intersect.y), _g2 = Math.floor(intersect.y + intersect.height + 1); _g2 > _g3;) {
          var dy = _g3++,
            p1 = this._data.getPixel32(dx, dy) >> 24 & 255,
            p2 = other._data.getPixel32(Math.floor(dx - this._point.x), Math.floor(dy - this._point.y)) >> 24 & 255;
          if (p1 > 0 && p2 > 0) return !0
        }
      return !1
    },
    get_data: function() {
      return this._data
    },
    set_data: function(value) {
      return this._data = value, this._width = value.width, this._height = value.height, this.update(), this._data
    },
    _data: null,
    _rect: null,
    _point: null,
    _point2: null,
    __class__: com.haxepunk.masks.Pixelmask,
    __properties__: $extend(com.haxepunk.masks.Hitbox.prototype.__properties__, {
      set_data: "set_data",
      get_data: "get_data"
    })
  }), com.haxepunk.math = {}, com.haxepunk.math.Projection = function() {
    this.max = this.min = 0
  }, $hxClasses["com.haxepunk.math.Projection"] = com.haxepunk.math.Projection, com.haxepunk.math.Projection.__name__ = ["com", "haxepunk", "math", "Projection"], com.haxepunk.math.Projection.prototype = {
    max: null,
    min: null,
    overlaps: function(other) {
      return !(this.min > other.max || this.max < other.min)
    },
    getOverlap: function(other) {
      return this.max > other.max ? this.max - other.min : other.max - this.min
    },
    toString: function() {
      return "[ " + this.min + ", " + this.max + " ]"
    },
    __class__: com.haxepunk.math.Projection
  }, com.haxepunk.masks.Polygon = function(points, origin) {
    if (this.maxY = 0, this.maxX = 0, this.minY = 0, this.minX = 0, com.haxepunk.masks.Hitbox.call(this), points.length < 3) throw "The polygon needs at least 3 sides.";
    this._points = points, this._fakeEntity = new com.haxepunk.Entity, this._fakeTileHitbox = new com.haxepunk.masks.Hitbox;
    var key = Type.getClassName(com.haxepunk.Mask);
    this._check.set(key, $bind(this, this.collideMask));
    var key1 = Type.getClassName(com.haxepunk.masks.Hitbox);
    this._check.set(key1, $bind(this, this.collideHitbox));
    var key2 = Type.getClassName(com.haxepunk.masks.Grid);
    this._check.set(key2, $bind(this, this.collideGrid));
    var key3 = Type.getClassName(com.haxepunk.masks.Circle);
    this._check.set(key3, $bind(this, this.collideCircle));
    var key4 = Type.getClassName(com.haxepunk.masks.Polygon);
    this._check.set(key4, $bind(this, this.collidePolygon)), this.origin = null != origin ? origin : new openfl.geom.Point, this._angle = 0, this.updateAxes()
  }, $hxClasses["com.haxepunk.masks.Polygon"] = com.haxepunk.masks.Polygon, com.haxepunk.masks.Polygon.__name__ = ["com", "haxepunk", "masks", "Polygon"], com.haxepunk.masks.Polygon.createPolygon = function(sides, radius, angle) {
    if (null == angle && (angle = 0), null == radius && (radius = 100), null == sides && (sides = 3), 3 > sides) throw "The polygon needs at least 3 sides.";
    for (var rotationAngle = 2 * Math.PI / sides, points = new Array, _g = 0; sides > _g;) {
      var i = _g++,
        tempAngle = Math.PI + i * rotationAngle,
        p = new openfl.geom.Point(0, 0),
        value = Math.cos(tempAngle) * radius + radius;
      p.x = value;
      var value1 = Math.sin(tempAngle) * radius + radius;
      p.y = value1, points.push(p)
    }
    var poly = new com.haxepunk.masks.Polygon(points);
    return poly.origin.x = radius, poly.origin.y = radius, poly.set_angle(angle), poly
  }, com.haxepunk.masks.Polygon.createFromArray = function(points) {
    for (var p = new Array, i = 0; i < points.length;) p.push(function() {
      var $r, x = points[i++],
        y = points[i++];
      return $r = new openfl.geom.Point(x, y)
    }(this));
    return new com.haxepunk.masks.Polygon(p)
  }, com.haxepunk.masks.Polygon.__super__ = com.haxepunk.masks.Hitbox, com.haxepunk.masks.Polygon.prototype = $extend(com.haxepunk.masks.Hitbox.prototype, {
    origin: null,
    minX: null,
    minY: null,
    maxX: null,
    maxY: null,
    collideMask: function(other) {
      var offset, offsetX = this._parent.get_x() + this._x - other._parent.get_x(),
        offsetY = this._parent.get_y() + this._y - other._parent.get_y();
      if (this.project(com.haxepunk.masks.Polygon.vertical, com.haxepunk.masks.Polygon.firstProj), other.project(com.haxepunk.masks.Polygon.vertical, com.haxepunk.masks.Polygon.secondProj), com.haxepunk.masks.Polygon.firstProj.min += offsetY, com.haxepunk.masks.Polygon.firstProj.max += offsetY, !com.haxepunk.masks.Polygon.firstProj.overlaps(com.haxepunk.masks.Polygon.secondProj)) return !1;
      if (this.project(com.haxepunk.masks.Polygon.horizontal, com.haxepunk.masks.Polygon.firstProj), other.project(com.haxepunk.masks.Polygon.horizontal, com.haxepunk.masks.Polygon.secondProj), com.haxepunk.masks.Polygon.firstProj.min += offsetX, com.haxepunk.masks.Polygon.firstProj.max += offsetX, !com.haxepunk.masks.Polygon.firstProj.overlaps(com.haxepunk.masks.Polygon.secondProj)) return !1;
      for (var _g = 0, _g1 = this._axes; _g < _g1.length;) {
        var a = _g1[_g];
        if (++_g, this.project(a, com.haxepunk.masks.Polygon.firstProj), other.project(a, com.haxepunk.masks.Polygon.secondProj), offset = offsetX * a.x + offsetY * a.y, com.haxepunk.masks.Polygon.firstProj.min += offset, com.haxepunk.masks.Polygon.firstProj.max += offset, !com.haxepunk.masks.Polygon.firstProj.overlaps(com.haxepunk.masks.Polygon.secondProj)) return !1
      }
      return !0
    },
    collideHitbox: function(hitbox) {
      var offset, offsetX = this._parent.get_x() + this._x - hitbox._parent.get_x(),
        offsetY = this._parent.get_y() + this._y - hitbox._parent.get_y();
      if (this.project(com.haxepunk.masks.Polygon.vertical, com.haxepunk.masks.Polygon.firstProj), hitbox.project(com.haxepunk.masks.Polygon.vertical, com.haxepunk.masks.Polygon.secondProj), com.haxepunk.masks.Polygon.firstProj.min += offsetY, com.haxepunk.masks.Polygon.firstProj.max += offsetY, !com.haxepunk.masks.Polygon.firstProj.overlaps(com.haxepunk.masks.Polygon.secondProj)) return !1;
      if (this.project(com.haxepunk.masks.Polygon.horizontal, com.haxepunk.masks.Polygon.firstProj), hitbox.project(com.haxepunk.masks.Polygon.horizontal, com.haxepunk.masks.Polygon.secondProj), com.haxepunk.masks.Polygon.firstProj.min += offsetX, com.haxepunk.masks.Polygon.firstProj.max += offsetX, !com.haxepunk.masks.Polygon.firstProj.overlaps(com.haxepunk.masks.Polygon.secondProj)) return !1;
      for (var _g = 0, _g1 = this._axes; _g < _g1.length;) {
        var a = _g1[_g];
        if (++_g, this.project(a, com.haxepunk.masks.Polygon.firstProj), hitbox.project(a, com.haxepunk.masks.Polygon.secondProj), offset = offsetX * a.x + offsetY * a.y, com.haxepunk.masks.Polygon.firstProj.min += offset, com.haxepunk.masks.Polygon.firstProj.max += offset, !com.haxepunk.masks.Polygon.firstProj.overlaps(com.haxepunk.masks.Polygon.secondProj)) return !1
      }
      return !0
    },
    collideGrid: function(grid) {
      var solidTile, tileW = 0 | grid._tile.width,
        tileH = 0 | grid._tile.height;
      this._fakeEntity.width = tileW, this._fakeEntity.height = tileH, this._fakeEntity.set_x(this._parent.get_x()), this._fakeEntity.set_y(this._parent.get_y()), this._fakeEntity.originX = grid._parent.originX + grid._x, this._fakeEntity.originY = grid._parent.originY + grid._y, this._fakeTileHitbox._width = tileW, this._fakeTileHitbox._height = tileH, this._fakeTileHitbox.set_parent(this._fakeEntity);
      for (var _g1 = 0, _g = grid.rows; _g > _g1;)
        for (var r = _g1++, _g3 = 0, _g2 = grid.columns; _g2 > _g3;) {
          var c = _g3++;
          if (this._fakeEntity.set_x(grid._parent.get_x() + grid._x + c * tileW), this._fakeEntity.set_y(grid._parent.get_y() + grid._y + r * tileH), solidTile = grid.getTile(c, r), solidTile && this.collideHitbox(this._fakeTileHitbox)) return !0
        }
      return !1
    },
    collideCircle: function(circle) {
      var p1, p2, i, j, edgesCrossed = 0,
        nPoints = this._points.length,
        offsetX = this._parent.get_x() + this._x,
        offsetY = this._parent.get_y() + this._y;
      for (i = 0, j = nPoints - 1; nPoints > i;) {
        p1 = this._points[i], p2 = this._points[j];
        var distFromCenter = (p2.x - p1.x) * (circle._y + circle._parent.get_y() - p1.y - offsetY) / (p2.y - p1.y) + p1.x + offsetX;
        p1.y + offsetY > circle._y + circle._parent.get_y() != p2.y + offsetY > circle._y + circle._parent.get_y() && circle._x + circle._parent.get_x() < distFromCenter && edgesCrossed++, j = i, i++
      }
      if ((1 & edgesCrossed) > 0) return !0;
      var closestX, closestY, radiusSqr = circle._radius * circle._radius,
        cx = circle._x + circle._parent.get_x(),
        cy = circle._y + circle._parent.get_y(),
        minDistanceSqr = 0;
      for (i = 0, j = nPoints - 1; nPoints > i;) {
        p1 = this._points[i], p2 = this._points[j];
        var segmentLenSqr = (p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y),
          t = ((cx - p1.x - offsetX) * (p2.x - p1.x) + (cy - p1.y - offsetY) * (p2.y - p1.y)) / segmentLenSqr;
        if (0 > t ? (closestX = p1.x, closestY = p1.y) : t > 1 ? (closestX = p2.x, closestY = p2.y) : (closestX = p1.x + t * (p2.x - p1.x), closestY = p1.y + t * (p2.y - p1.y)), closestX += offsetX, closestY += offsetY, minDistanceSqr = (cx - closestX) * (cx - closestX) + (cy - closestY) * (cy - closestY), radiusSqr >= minDistanceSqr) return !0;
        j = i, i++
      }
      return !1
    },
    collidePolygon: function(other) {
      for (var offset, offsetX = this._parent.get_x() + this._x - other._parent.get_x() - other._x, offsetY = this._parent.get_y() + this._y - other._parent.get_y() - other._y, _g = 0, _g1 = this._axes; _g < _g1.length;) {
        var a = _g1[_g];
        if (++_g, this.project(a, com.haxepunk.masks.Polygon.firstProj), other.project(a, com.haxepunk.masks.Polygon.secondProj), offset = offsetX * a.x + offsetY * a.y, com.haxepunk.masks.Polygon.firstProj.min += offset, com.haxepunk.masks.Polygon.firstProj.max += offset, !com.haxepunk.masks.Polygon.firstProj.overlaps(com.haxepunk.masks.Polygon.secondProj)) return !1
      }
      for (var _g2 = 0, _g11 = other._axes; _g2 < _g11.length;) {
        var a1 = _g11[_g2];
        if (++_g2, this.project(a1, com.haxepunk.masks.Polygon.firstProj), other.project(a1, com.haxepunk.masks.Polygon.secondProj), offset = offsetX * a1.x + offsetY * a1.y, com.haxepunk.masks.Polygon.firstProj.min += offset, com.haxepunk.masks.Polygon.firstProj.max += offset, !com.haxepunk.masks.Polygon.firstProj.overlaps(com.haxepunk.masks.Polygon.secondProj)) return !1
      }
      return !0
    },
    project: function(axis, projection) {
      for (var p = this._points[0], min = axis.x * p.x + axis.y * p.y, max = min, _g1 = 1, _g = this._points.length; _g > _g1;) {
        var i = _g1++;
        p = this._points[i];
        var cur = axis.x * p.x + axis.y * p.y;
        min > cur ? min = cur : cur > max && (max = cur)
      }
      projection.min = min, projection.max = max
    },
    debugDraw: function(graphics, scaleX, scaleY) {
      var offsetX = this._parent.get_x() + this._x - com.haxepunk.HXP.camera.x,
        offsetY = this._parent.get_y() + this._y - com.haxepunk.HXP.camera.y;
      graphics.beginFill(255, .3), graphics.moveTo((this._points[this._points.length - 1].x + offsetX) * scaleX, (this._points[this._points.length - 1].y + offsetY) * scaleY);
      for (var _g1 = 0, _g = this._points.length; _g > _g1;) {
        var i = _g1++;
        graphics.lineTo((this._points[i].x + offsetX) * scaleX, (this._points[i].y + offsetY) * scaleY)
      }
      graphics.endFill(), graphics.drawCircle((offsetX + this.origin.x) * scaleX, (offsetY + this.origin.y) * scaleY, 2)
    },
    get_angle: function() {
      return this._angle
    },
    set_angle: function(value) {
      return value != this._angle && (this.rotate(value - this._angle), (null != this.list || null != (this._parent != com.haxepunk.Entity._EMPTY ? this._parent : null)) && this.update()), value
    },
    get_points: function() {
      return this._points
    },
    set_points: function(value) {
      return this._points != value && (this._points = value, (null != this.list || null != (this._parent != com.haxepunk.Entity._EMPTY ? this._parent : null)) && this.updateAxes()), value
    },
    update: function() {
      this.project(com.haxepunk.masks.Polygon.horizontal, com.haxepunk.masks.Polygon.firstProj);
      var projX = Math.round(com.haxepunk.masks.Polygon.firstProj.min);
      this._width = Math.round(com.haxepunk.masks.Polygon.firstProj.max - com.haxepunk.masks.Polygon.firstProj.min), this.project(com.haxepunk.masks.Polygon.vertical, com.haxepunk.masks.Polygon.secondProj);
      var projY = Math.round(com.haxepunk.masks.Polygon.secondProj.min);
      this._height = Math.round(com.haxepunk.masks.Polygon.secondProj.max - com.haxepunk.masks.Polygon.secondProj.min), this.minX = this._x + projX, this.minY = this._y + projY, this.maxX = Math.round(this.minX + this._width), this.maxY = Math.round(this.minY + this._height), null != this.list ? this.list.update() : null != (this._parent != com.haxepunk.Entity._EMPTY ? this._parent : null) && (this._parent.originX = -this._x - projX, this._parent.originY = -this._y - projY, this._parent.width = this._width, this._parent.height = this._height)
    },
    rotate: function(angleDelta) {
      this._angle += angleDelta, angleDelta *= Math.PI / -180;
      for (var p, _g1 = 0, _g = this._points.length; _g > _g1;) {
        var i = _g1++;
        p = this._points[i];
        var dx = p.x - this.origin.x,
          dy = p.y - this.origin.y,
          pointAngle = Math.atan2(dy, dx),
          length = Math.sqrt(dx * dx + dy * dy),
          value = Math.cos(pointAngle + angleDelta) * length + this.origin.x;
        p.x = value;
        var value1 = Math.sin(pointAngle + angleDelta) * length + this.origin.y;
        p.y = value1
      }
      for (var _g2 = 0, _g11 = this._axes; _g2 < _g11.length;) {
        var a = _g11[_g2];
        ++_g2;
        var axisAngle = Math.atan2(a.y, a.x),
          value2 = Math.cos(axisAngle + angleDelta);
        a.x = value2;
        var value3 = Math.sin(axisAngle + angleDelta);
        a.y = value3
      }
    },
    generateAxes: function() {
      this._axes = new Array;
      var temp, edge, i, j, nPoints = this._points.length;
      for (i = 0, j = nPoints - 1; nPoints > i;) edge = new openfl.geom.Point(0, 0), edge.x = this._points[i].x - this._points[j].x, edge.y = this._points[i].y - this._points[j].y, temp = edge.y, edge.y = -edge.x, edge.x = temp, com.haxepunk.math._Vector.Vector_Impl_.normalize(edge, 1), this._axes.push(edge), j = i, i++
    },
    removeDuplicateAxes: function() {
      for (var i = this._axes.length - 1, j = i - 1; i > 0;)(Math.abs(this._axes[i].x - this._axes[j].x) < com.haxepunk.masks.Polygon.EPSILON && Math.abs(this._axes[i].y - this._axes[j].y) < com.haxepunk.masks.Polygon.EPSILON || Math.abs(this._axes[j].x + this._axes[i].x) < com.haxepunk.masks.Polygon.EPSILON && Math.abs(this._axes[i].y + this._axes[j].y) < com.haxepunk.masks.Polygon.EPSILON) && (this._axes.splice(i, 1), i--), j--, 0 > j && (i--, j = i - 1)
    },
    updateAxes: function() {
      this.generateAxes(), this.removeDuplicateAxes(), this.update()
    },
    _angle: null,
    _points: null,
    _axes: null,
    _fakeEntity: null,
    _fakeTileHitbox: null,
    __class__: com.haxepunk.masks.Polygon,
    __properties__: $extend(com.haxepunk.masks.Hitbox.prototype.__properties__, {
      set_points: "set_points",
      get_points: "get_points",
      set_angle: "set_angle",
      get_angle: "get_angle"
    })
  }), com.haxepunk.masks.TileType = $hxClasses["com.haxepunk.masks.TileType"] = {
    __ename__: !0,
    __constructs__: ["Empty", "Solid", "AboveSlope", "BelowSlope", "TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  }, com.haxepunk.masks.TileType.Empty = ["Empty", 0], com.haxepunk.masks.TileType.Empty.toString = $estr, com.haxepunk.masks.TileType.Empty.__enum__ = com.haxepunk.masks.TileType, com.haxepunk.masks.TileType.Solid = ["Solid", 1], com.haxepunk.masks.TileType.Solid.toString = $estr, com.haxepunk.masks.TileType.Solid.__enum__ = com.haxepunk.masks.TileType, com.haxepunk.masks.TileType.AboveSlope = ["AboveSlope", 2], com.haxepunk.masks.TileType.AboveSlope.toString = $estr, com.haxepunk.masks.TileType.AboveSlope.__enum__ = com.haxepunk.masks.TileType, com.haxepunk.masks.TileType.BelowSlope = ["BelowSlope", 3], com.haxepunk.masks.TileType.BelowSlope.toString = $estr, com.haxepunk.masks.TileType.BelowSlope.__enum__ = com.haxepunk.masks.TileType, com.haxepunk.masks.TileType.TopLeft = ["TopLeft", 4], com.haxepunk.masks.TileType.TopLeft.toString = $estr, com.haxepunk.masks.TileType.TopLeft.__enum__ = com.haxepunk.masks.TileType, com.haxepunk.masks.TileType.TopRight = ["TopRight", 5], com.haxepunk.masks.TileType.TopRight.toString = $estr, com.haxepunk.masks.TileType.TopRight.__enum__ = com.haxepunk.masks.TileType, com.haxepunk.masks.TileType.BottomLeft = ["BottomLeft", 6], com.haxepunk.masks.TileType.BottomLeft.toString = $estr, com.haxepunk.masks.TileType.BottomLeft.__enum__ = com.haxepunk.masks.TileType, com.haxepunk.masks.TileType.BottomRight = ["BottomRight", 7], com.haxepunk.masks.TileType.BottomRight.toString = $estr, com.haxepunk.masks.TileType.BottomRight.__enum__ = com.haxepunk.masks.TileType, com.haxepunk.masks.TileType.__empty_constructs__ = [com.haxepunk.masks.TileType.Empty, com.haxepunk.masks.TileType.Solid, com.haxepunk.masks.TileType.AboveSlope, com.haxepunk.masks.TileType.BelowSlope, com.haxepunk.masks.TileType.TopLeft, com.haxepunk.masks.TileType.TopRight, com.haxepunk.masks.TileType.BottomLeft, com.haxepunk.masks.TileType.BottomRight], com.haxepunk.masks.SlopedGrid = function(width, height, tileWidth, tileHeight, x, y) {
    if (null == y && (y = 0), null == x && (x = 0), com.haxepunk.masks.Hitbox.call(this), 0 == width || 0 == height || 0 == tileWidth || 0 == tileHeight) throw "Illegal Grid, sizes cannot be 0.";
    this._rect = com.haxepunk.HXP.rect, this._point = com.haxepunk.HXP.point, this._point2 = com.haxepunk.HXP.point2, this.columns = width / tileWidth | 0, this.rows = height / tileHeight | 0, this._tile = new openfl.geom.Rectangle(0, 0, tileWidth, tileHeight), this._x = x, this._y = y, this._width = width, this._height = height, this.usePositions = !1;
    var key = Type.getClassName(com.haxepunk.Mask);
    this._check.set(key, $bind(this, this.collideMask));
    var key1 = Type.getClassName(com.haxepunk.masks.Hitbox);
    this._check.set(key1, $bind(this, this.collideHitbox)), this.data = new Array;
    for (var _g1 = 0, _g = this.rows; _g > _g1;) {
      {
        _g1++
      }
      this.data.push(new Array)
    }
  }, $hxClasses["com.haxepunk.masks.SlopedGrid"] = com.haxepunk.masks.SlopedGrid, com.haxepunk.masks.SlopedGrid.__name__ = ["com", "haxepunk", "masks", "SlopedGrid"], com.haxepunk.masks.SlopedGrid.__super__ = com.haxepunk.masks.Hitbox, com.haxepunk.masks.SlopedGrid.prototype = $extend(com.haxepunk.masks.Hitbox.prototype, {
    usePositions: null,
    collidePoint: function(cx, cy) {
      var px = this._x + this._parent.get_x(),
        py = this._y + this._parent.get_y(),
        column = (cx - px) / this._tile.width | 0,
        row = (cy - py) / this._tile.height | 0,
        x = px + column * this._tile.width,
        y = py + row * this._tile.height,
        tile = this.getTile(column, row);
      if (null != tile) {
        if (tile.type == com.haxepunk.masks.TileType.Solid) return !0;
        if ((tile.type == com.haxepunk.masks.TileType.AboveSlope || tile.type == com.haxepunk.masks.TileType.BelowSlope) && this.collidePointInSlope(x, y, cx, cy, tile)) return !0
      }
      return !1
    },
    collidePointInSlope: function(x1, y1, px, py, tile) {
      y1 += tile.yOffset;
      var yoff = tile.slope * this._tile.width,
        x2 = x1 + yoff / tile.slope,
        y2 = y1 + yoff,
        left = (x2 - x1) * (py - y1) > (y2 - y1) * (px - x1);
      return tile.type == com.haxepunk.masks.TileType.AboveSlope && !left || tile.type == com.haxepunk.masks.TileType.BelowSlope && left
    },
    setTile: function(column, row, type, slope, yOffset) {
      if (null == yOffset && (yOffset = 0), null == slope && (slope = 0), null == row && (row = 0), null == column && (column = 0), column >= 0 && column < this.columns && row >= 0 && row < this.rows) switch (null == type && (type = com.haxepunk.masks.TileType.Solid), this.usePositions && (column = column / this._tile.width | 0, row = row / this._tile.height | 0), type[1]) {
        case 4:
          this.data[row][column] = {
            type: com.haxepunk.masks.TileType.AboveSlope,
            slope: -1,
            yOffset: this._tile.height
          };
          break;
        case 5:
          this.data[row][column] = {
            type: com.haxepunk.masks.TileType.AboveSlope,
            slope: 1,
            yOffset: 0
          };
          break;
        case 6:
          this.data[row][column] = {
            type: com.haxepunk.masks.TileType.BelowSlope,
            slope: 1,
            yOffset: 0
          };
          break;
        case 7:
          this.data[row][column] = {
            type: com.haxepunk.masks.TileType.BelowSlope,
            slope: -1,
            yOffset: this._tile.height
          };
          break;
        default:
          this.data[row][column] = {
            type: type,
            slope: slope,
            yOffset: yOffset * this._tile.height
          }
      }
    },
    clearTile: function(column, row) {
      null == row && (row = 0), null == column && (column = 0), this.setTile(column, row, com.haxepunk.masks.TileType.Empty)
    },
    checkTile: function(column, row) {
      return column >= 0 && column < this.columns && row >= 0 && row < this.rows
    },
    getTile: function(column, row) {
      return null == row && (row = 0), null == column && (column = 0), column >= 0 && column < this.columns && row >= 0 && row < this.rows ? (this.usePositions && (column = column / this._tile.width | 0, row = row / this._tile.height | 0), this.data[row][column]) : com.haxepunk.masks.SlopedGrid._emptyTile
    },
    setRect: function(column, row, width, height, type, slope, yOffset) {
      null == yOffset && (yOffset = 0), null == slope && (slope = 0), null == height && (height = 1), null == width && (width = 1), null == row && (row = 0), null == column && (column = 0), null == type && (type = com.haxepunk.masks.TileType.Solid), this.usePositions && (column = column / this._tile.width | 0, row = row / this._tile.height | 0, width = width / this._tile.width | 0, height = height / this._tile.height | 0);
      for (var _g1 = row, _g = row + height; _g > _g1;)
        for (var yy = _g1++, _g3 = column, _g2 = column + width; _g2 > _g3;) {
          var xx = _g3++;
          this.setTile(xx, yy, type, slope, yOffset)
        }
    },
    clearRect: function(column, row, width, height) {
      null == height && (height = 1), null == width && (width = 1), null == row && (row = 0), null == column && (column = 0), this.setRect(column, row, width, height, com.haxepunk.masks.TileType.Empty)
    },
    get_tileWidth: function() {
      return 0 | this._tile.width
    },
    get_tileHeight: function() {
      return 0 | this._tile.height
    },
    columns: null,
    rows: null,
    data: null,
    collideBox: function(opx, opy, opw, oph, px, py) {
      this._rect.x = opx - px, this._rect.y = opy - py;
      for (var startx = this._rect.x / this._tile.width | 0, starty = this._rect.y / this._tile.height | 0, endx = ((this._rect.x + opw - 1) / this._tile.width | 0) + 1, endy = ((this._rect.y + oph - 1) / this._tile.height | 0) + 1, yy = py + starty * this._tile.height, _g = starty; endy > _g;) {
        for (var dy = _g++, xx = px + startx * this._tile.width, _g1 = startx; endx > _g1;) {
          var dx = _g1++,
            tile = this.getTile(dx, dy);
          if (null != tile) {
            var _g2 = tile.type;
            switch (_g2[1]) {
              case 1:
                return !0;
              case 3:
                var x = opx,
                  y = opy + oph;
                if (tile.slope < 0 && (x += opw), x = com.haxepunk.HXP.clamp(x, xx, xx + (0 | this._tile.width)), y = com.haxepunk.HXP.clamp(y, yy, yy + (0 | this._tile.height)), this.collidePointInSlope(xx, yy, x, y, tile)) return !0;
                break;
              case 2:
                var x1 = opx,
                  y1 = opy;
                if (tile.slope > 0 && (x1 += opw), x1 = com.haxepunk.HXP.clamp(x1, xx, xx + (0 | this._tile.width)), y1 = com.haxepunk.HXP.clamp(y1, yy, yy + (0 | this._tile.height)), this.collidePointInSlope(xx, yy, x1, y1, tile)) return !0
            }
            xx += this._tile.width
          }
        }
        yy += this._tile.height
      }
      return !1
    },
    collideMask: function(other) {
      this._x + this._parent.get_x(), this._y + this._parent.get_y();
      return this.collideBox(other._parent.get_x() - other._parent.originX, other._parent.get_y() - other._parent.originY, other._parent.width, other._parent.height, this._parent.get_x() + this._parent.originX, this._parent.get_y() + this._parent.originY)
    },
    collideHitbox: function(other) {
      var x = this._x + this._parent.get_x(),
        y = this._y + this._parent.get_y(),
        ox = other._x + other._parent.get_x(),
        oy = other._y + other._parent.get_y();
      return this.collideBox(ox, oy, other._width, other._height, x, y)
    },
    debugDraw: function(graphics, scaleX, scaleY) {
      var cellX, cellY, stepX = (0 | this._tile.width) * scaleX,
        stepY = (0 | this._tile.height) * scaleY,
        px = this._x + this._parent.get_x() - com.haxepunk.HXP.camera.x,
        py = this._y + this._parent.get_y() - com.haxepunk.HXP.camera.y,
        startx = Math.floor(-px / (0 | this._tile.width)),
        starty = Math.floor(-py / (0 | this._tile.height)),
        destx = startx + 1 + Math.ceil(com.haxepunk.HXP.width / (0 | this._tile.width)),
        desty = starty + 1 + Math.ceil(com.haxepunk.HXP.height / (0 | this._tile.height));
      if (!(startx > this.columns || starty > this.rows || 0 > destx || 0 > desty)) {
        0 > startx && (startx = 0), destx > this.columns && (destx = this.columns), 0 > starty && (starty = 0), desty > this.rows && (desty = this.rows), px = (px + startx * (0 | this._tile.width)) * scaleX, py = (py + starty * (0 | this._tile.height)) * scaleY;
        var row;
        cellY = py;
        for (var _g = starty; desty > _g;) {
          var y = _g++;
          cellX = px, row = this.data[y];
          for (var _g1 = startx; destx > _g1;) {
            var x = _g1++,
              tile = row[x];
            if (null == tile || null == tile.type);
            else if (tile.type == com.haxepunk.masks.TileType.Solid) graphics.lineStyle(1, 16777215, .3), graphics.drawRect(cellX, cellY, stepX, stepY), x < this.columns - 1 && row[x + 1].type == com.haxepunk.masks.TileType.Empty && (graphics.lineStyle(1, 255), graphics.moveTo(cellX + stepX, cellY), graphics.lineTo(cellX + stepX, cellY + stepY)), x > 0 && row[x - 1].type == com.haxepunk.masks.TileType.Empty && (graphics.lineStyle(1, 255), graphics.moveTo(cellX, cellY), graphics.lineTo(cellX, cellY + stepY)), y < this.rows - 1 && this.data[y + 1][x].type == com.haxepunk.masks.TileType.Empty && (graphics.lineStyle(1, 255), graphics.moveTo(cellX, cellY + stepY), graphics.lineTo(cellX + stepX, cellY + stepY)), y > 0 && this.data[y - 1][x].type == com.haxepunk.masks.TileType.Empty && (graphics.lineStyle(1, 255), graphics.moveTo(cellX, cellY), graphics.lineTo(cellX + stepX, cellY));
            else if (tile.type == com.haxepunk.masks.TileType.BelowSlope || tile.type == com.haxepunk.masks.TileType.AboveSlope) {
              var offset = tile.yOffset * scaleY,
                xpos = cellX,
                endx = stepX,
                ypos = cellY + offset,
                endy = tile.slope * endx;
              if (0 > offset) {
                var fx = -offset / tile.slope;
                endx = stepX - fx, xpos = cellX + fx, ypos = cellY, (0 >= y || this.data[y - 1][x].type == com.haxepunk.masks.TileType.Solid) && (graphics.moveTo(cellX, ypos), graphics.lineTo(xpos, ypos))
              } else if (offset > (0 | this._tile.height)) {
                var fx1 = -(offset - (0 | this._tile.width)) / tile.slope;
                endx = stepX - fx1, xpos = cellX + fx1, ypos = cellY + stepY, (y >= this.rows - 1 || this.data[y + 1][x].type == com.haxepunk.masks.TileType.Solid) && (graphics.moveTo(cellX, ypos), graphics.lineTo(xpos, ypos))
              } else if (0 > offset + endy) {
                var fx2 = -offset / tile.slope;
                endx = fx2, (0 >= y || this.data[y - 1][x].type == com.haxepunk.masks.TileType.Solid) && (graphics.moveTo(cellX + fx2, cellY), graphics.lineTo(cellX + stepX, cellY))
              } else if (offset + endy > (0 | this._tile.height)) {
                var fx3 = -(offset - (0 | this._tile.width)) / tile.slope;
                endx = fx3, (y >= this.rows - 1 || this.data[y + 1][x].type == com.haxepunk.masks.TileType.Solid) && (graphics.moveTo(cellX + fx3, cellY + stepY), graphics.lineTo(cellX + stepX, cellY + stepY))
              }
              endy = tile.slope * endx, graphics.lineStyle(1, 255), graphics.moveTo(xpos, ypos), graphics.lineTo(xpos + endx, ypos + endy)
            }
            cellX += stepX
          }
          cellY += stepY
        }
      }
    },
    _tile: null,
    _rect: null,
    _point: null,
    _point2: null,
    __class__: com.haxepunk.masks.SlopedGrid,
    __properties__: $extend(com.haxepunk.masks.Hitbox.prototype.__properties__, {
      get_tileHeight: "get_tileHeight",
      get_tileWidth: "get_tileWidth"
    })
  }), com.haxepunk.math._Vector = {}, com.haxepunk.math._Vector.Vector_Impl_ = function() {}, $hxClasses["com.haxepunk.math._Vector.Vector_Impl_"] = com.haxepunk.math._Vector.Vector_Impl_, com.haxepunk.math._Vector.Vector_Impl_.__name__ = ["com", "haxepunk", "math", "_Vector", "Vector_Impl_"], com.haxepunk.math._Vector.Vector_Impl_.__properties__ = {
    get_unit: "get_unit",
    get_angle: "get_angle",
    get_length: "get_length",
    get_squareLength: "get_squareLength",
    set_y: "set_y",
    get_y: "get_y",
    set_x: "set_x",
    get_x: "get_x"
  }, com.haxepunk.math._Vector.Vector_Impl_._new = function(x, y) {
    return null == y && (y = 0), null == x && (x = 0), new openfl.geom.Point(x, y)
  }, com.haxepunk.math._Vector.Vector_Impl_.toPoint = function(this1) {
    return this1
  }, com.haxepunk.math._Vector.Vector_Impl_.fromPoint = function(point) {
    return new openfl.geom.Point(point.x, point.y)
  }, com.haxepunk.math._Vector.Vector_Impl_.get_x = function(this1) {
    return this1.x
  }, com.haxepunk.math._Vector.Vector_Impl_.set_x = function(this1, value) {
    return this1.x = value
  }, com.haxepunk.math._Vector.Vector_Impl_.get_y = function(this1) {
    return this1.y
  }, com.haxepunk.math._Vector.Vector_Impl_.set_y = function(this1, value) {
    return this1.y = value
  }, com.haxepunk.math._Vector.Vector_Impl_.dot = function(this1, b) {
    return this1.x * b.x + this1.y * b.y
  }, com.haxepunk.math._Vector.Vector_Impl_.cross = function(this1, b) {
    return this1.x * b.x - this1.y * b.y
  }, com.haxepunk.math._Vector.Vector_Impl_.invert = function(this1) {
    this1.x = -this1.x, this1.y = -this1.y
  }, com.haxepunk.math._Vector.Vector_Impl_.rotate = function(this1, angle) {
    var sin = Math.sin(angle),
      cos = Math.cos(angle);
    return new openfl.geom.Point(this1.x * cos - this1.y * sin, this1.x * sin + this1.y * cos)
  }, com.haxepunk.math._Vector.Vector_Impl_.normalize = function(this1, size) {
    null == size && (size = 1);
    var len = Math.sqrt(this1.x * this1.x + this1.y * this1.y);
    if (0 == len) {
      var value = this1.y = 0;
      this1.x = value
    } else this1.x = this1.x / len * size, this1.y = this1.y / len * size
  }, com.haxepunk.math._Vector.Vector_Impl_.get_squareLength = function(this1) {
    return this1.x * this1.x + this1.y * this1.y
  }, com.haxepunk.math._Vector.Vector_Impl_.get_length = function(this1) {
    return Math.sqrt(this1.x * this1.x + this1.y * this1.y)
  }, com.haxepunk.math._Vector.Vector_Impl_.get_angle = function(this1) {
    return Math.atan2(this1.y, this1.x)
  }, com.haxepunk.math._Vector.Vector_Impl_.get_unit = function(this1) {
    var len = Math.sqrt(this1.x * this1.x + this1.y * this1.y);
    return new openfl.geom.Point(this1.x / len, this1.y / len)
  }, com.haxepunk.math._Vector.Vector_Impl_.add = function(a, b) {
    return new openfl.geom.Point(a.x + b.x, a.y + b.y)
  }, com.haxepunk.math._Vector.Vector_Impl_.sub = function(a, b) {
    return new openfl.geom.Point(a.x - b.x, a.y - b.y)
  }, com.haxepunk.math._Vector.Vector_Impl_.scalar_mult = function(a, b) {
    return new openfl.geom.Point(a.x * b, a.y * b)
  }, com.haxepunk.math._Vector.Vector_Impl_.scalar_divide = function(a, b) {
    return new openfl.geom.Point(a.x / b, a.y / b)
  }, openfl.events.Event = function(type, bubbles, cancelable) {
    null == cancelable && (cancelable = !1), null == bubbles && (bubbles = !1), this.type = type, this.bubbles = bubbles, this.cancelable = cancelable, this.eventPhase = 1
  }, $hxClasses["openfl.events.Event"] = openfl.events.Event, openfl.events.Event.__name__ = ["openfl", "events", "Event"], openfl.events.Event.prototype = {
    bubbles: null,
    cancelable: null,
    currentTarget: null,
    eventPhase: null,
    target: null,
    type: null,
    __isCancelled: null,
    __isCancelledNow: null,
    clone: function() {
      var event = new openfl.events.Event(this.type, this.bubbles, this.cancelable);
      return event.eventPhase = this.eventPhase, event.target = this.target, event.currentTarget = this.currentTarget, event
    },
    isDefaultPrevented: function() {
      return this.__isCancelled || this.__isCancelledNow
    },
    stopImmediatePropagation: function() {
      this.__isCancelled = !0, this.__isCancelledNow = !0
    },
    stopPropagation: function() {
      this.__isCancelled = !0
    },
    toString: function() {
      return "[Event type=" + this.type + " bubbles=" + Std.string(this.bubbles) + " cancelable=" + Std.string(this.cancelable) + "]"
    },
    __class__: openfl.events.Event
  }, com.haxepunk.tweens = {}, com.haxepunk.tweens.TweenEvent = function(type, bubbles, cancelable) {
    openfl.events.Event.call(this, type, bubbles, cancelable)
  }, $hxClasses["com.haxepunk.tweens.TweenEvent"] = com.haxepunk.tweens.TweenEvent, com.haxepunk.tweens.TweenEvent.__name__ = ["com", "haxepunk", "tweens", "TweenEvent"], com.haxepunk.tweens.TweenEvent.__super__ = openfl.events.Event, com.haxepunk.tweens.TweenEvent.prototype = $extend(openfl.events.Event.prototype, {
    __class__: com.haxepunk.tweens.TweenEvent
  }), com.haxepunk.tweens.misc = {}, com.haxepunk.tweens.misc.Alarm = function(duration, complete, type) {
    com.haxepunk.Tween.call(this, duration, type, complete, null)
  }, $hxClasses["com.haxepunk.tweens.misc.Alarm"] = com.haxepunk.tweens.misc.Alarm, com.haxepunk.tweens.misc.Alarm.__name__ = ["com", "haxepunk", "tweens", "misc", "Alarm"], com.haxepunk.tweens.misc.Alarm.__super__ = com.haxepunk.Tween, com.haxepunk.tweens.misc.Alarm.prototype = $extend(com.haxepunk.Tween.prototype, {
    reset: function(duration) {
      this._target = duration, this.start()
    },
    get_elapsed: function() {
      return this._time
    },
    get_duration: function() {
      return this._target
    },
    get_remaining: function() {
      return this._target - this._time
    },
    __class__: com.haxepunk.tweens.misc.Alarm,
    __properties__: $extend(com.haxepunk.Tween.prototype.__properties__, {
      get_remaining: "get_remaining",
      get_duration: "get_duration",
      get_elapsed: "get_elapsed"
    })
  }), com.haxepunk.tweens.misc.MultiVarTween = function(complete, type) {
    this._vars = new Array, this._start = new Array, this._range = new Array, com.haxepunk.Tween.call(this, 0, type, complete)
  }, $hxClasses["com.haxepunk.tweens.misc.MultiVarTween"] = com.haxepunk.tweens.misc.MultiVarTween, com.haxepunk.tweens.misc.MultiVarTween.__name__ = ["com", "haxepunk", "tweens", "misc", "MultiVarTween"], com.haxepunk.tweens.misc.MultiVarTween.__super__ = com.haxepunk.Tween, com.haxepunk.tweens.misc.MultiVarTween.prototype = $extend(com.haxepunk.Tween.prototype, {
    tween: function(object, properties, duration, ease) {
      this._object = object, this._vars.length = 0, this._start.length = 0, this._range.length = 0, this._target = duration, this._ease = ease;
      var fields = null;
      if (!Reflect.isObject(properties)) throw "Unsupported MultiVar properties container - use Object containing key/value pairs.";
      fields = Reflect.fields(properties);
      for (var _g = 0; _g < fields.length;) {
        var p1 = fields[_g];
        ++_g;
        var a = Reflect.getProperty(object, p1);
        if (isNaN(a)) throw 'The property "' + p1 + '" is not numeric.';
        this._vars.push(p1), this._start.push(a), this._range.push(Reflect.field(properties, p1) - a)
      }
      this.start()
    },
    update: function() {
      com.haxepunk.Tween.prototype.update.call(this);
      for (var i = this._vars.length; i-- > 0;) Reflect.setProperty(this._object, this._vars[i], this._start[i] + this._range[i] * this._t)
    },
    _object: null,
    _vars: null,
    _start: null,
    _range: null,
    __class__: com.haxepunk.tweens.misc.MultiVarTween
  }), com.haxepunk.utils = {}, com.haxepunk.utils.Draw = function() {}, $hxClasses["com.haxepunk.utils.Draw"] = com.haxepunk.utils.Draw, com.haxepunk.utils.Draw.__name__ = ["com", "haxepunk", "utils", "Draw"], com.haxepunk.utils.Draw.blend = null, com.haxepunk.utils.Draw.init = function() {
    if (com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.HARDWARE) {
      var sprite = new openfl.display.Sprite;
      com.haxepunk.HXP.stage.addChild(sprite), com.haxepunk.utils.Draw._graphics = sprite.get_graphics()
    } else com.haxepunk.utils.Draw._graphics = com.haxepunk.HXP.sprite.get_graphics();
    com.haxepunk.utils.Draw._rect = com.haxepunk.HXP.rect
  }, com.haxepunk.utils.Draw.setTarget = function(target, camera, blend) {
    com.haxepunk.utils.Draw._target = target, com.haxepunk.utils.Draw._camera = null != camera ? camera : com.haxepunk.HXP.zero, com.haxepunk.utils.Draw.blend = blend
  }, com.haxepunk.utils.Draw.resetTarget = function() {
    com.haxepunk.utils.Draw._target = com.haxepunk.HXP.buffer, com.haxepunk.utils.Draw._camera = com.haxepunk.HXP.camera, com.haxepunk.utils.Draw.blend = null, com.haxepunk.utils.Draw._graphics.clear()
  }, com.haxepunk.utils.Draw.drawToScreen = function() {
    null == com.haxepunk.utils.Draw.blend ? com.haxepunk.utils.Draw._target.draw(com.haxepunk.HXP.sprite) : com.haxepunk.utils.Draw._target.draw(com.haxepunk.HXP.sprite, null, null, com.haxepunk.utils.Draw.blend)
  }, com.haxepunk.utils.Draw.line = function(x1, y1, x2, y2, color) {
    if (null == color && (color = 16777215), com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.BUFFER) {
      color = -16777216 | 16777215 & color;
      var xx, yy, screen = com.haxepunk.utils.Draw._target,
        X = Math.abs(x2 - x1),
        Y = Math.abs(y2 - y1);
      if (x1 -= 0 | com.haxepunk.utils.Draw._camera.x, y1 -= 0 | com.haxepunk.utils.Draw._camera.y, x2 -= 0 | com.haxepunk.utils.Draw._camera.x, y2 -= 0 | com.haxepunk.utils.Draw._camera.y, 0 == X) {
        if (0 == Y) return void screen.setPixel32(x1, y1, color);
        for (yy = y2 > y1 ? 1 : -1; y1 != y2;) screen.setPixel32(x1, y1, color), y1 += yy;
        return void screen.setPixel32(x2, y2, color)
      }
      if (0 == Y) {
        for (xx = x2 > x1 ? 1 : -1; x1 != x2;) screen.setPixel32(x1, y1, color), x1 += xx;
        return void screen.setPixel32(x2, y2, color)
      }
      xx = x2 > x1 ? 1 : -1, yy = y2 > y1 ? 1 : -1;
      var slope, c = 0;
      if (X > Y) {
        for (slope = Y / X, c = .5; x1 != x2;) screen.setPixel32(x1, y1, color), x1 += xx, c += slope, c >= 1 && (y1 += yy, c -= 1);
        screen.setPixel32(x2, y2, color)
      } else {
        for (slope = X / Y, c = .5; y1 != y2;) screen.setPixel32(x1, y1, color), y1 += yy, c += slope, c >= 1 && (x1 += xx, c -= 1);
        screen.setPixel32(x2, y2, color)
      }
    } else com.haxepunk.utils.Draw.linePlus(x1, y1, x2, y2, color)
  }, com.haxepunk.utils.Draw.linePlus = function(x1, y1, x2, y2, color, alpha, thick) {
    null == thick && (thick = 1), null == alpha && (alpha = 1), null == color && (color = -16777216), com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.BUFFER ? (com.haxepunk.utils.Draw._graphics.clear(), com.haxepunk.utils.Draw._graphics.lineStyle(thick, color, alpha, !1, openfl.display.LineScaleMode.NONE), com.haxepunk.utils.Draw._graphics.moveTo(x1 - com.haxepunk.utils.Draw._camera.x, y1 - com.haxepunk.utils.Draw._camera.y), com.haxepunk.utils.Draw._graphics.lineTo(x2 - com.haxepunk.utils.Draw._camera.x, y2 - com.haxepunk.utils.Draw._camera.y), null == com.haxepunk.utils.Draw.blend ? com.haxepunk.utils.Draw._target.draw(com.haxepunk.HXP.sprite) : com.haxepunk.utils.Draw._target.draw(com.haxepunk.HXP.sprite, null, null, com.haxepunk.utils.Draw.blend)) : (com.haxepunk.utils.Draw._graphics.lineStyle(thick, color, alpha, !1, openfl.display.LineScaleMode.NONE), com.haxepunk.utils.Draw._graphics.moveTo(x1 - com.haxepunk.utils.Draw._camera.x, y1 - com.haxepunk.utils.Draw._camera.y), com.haxepunk.utils.Draw._graphics.lineTo(x2 - com.haxepunk.utils.Draw._camera.x, y2 - com.haxepunk.utils.Draw._camera.y), com.haxepunk.utils.Draw._graphics.lineStyle(0))
  }, com.haxepunk.utils.Draw.rect = function(x, y, width, height, color, alpha) {
    if (null == alpha && (alpha = 1), null == color && (color = 16777215), com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.BUFFER) {
      if (alpha >= 1 && null == com.haxepunk.utils.Draw.blend) return color = -16777216 | 16777215 & color, com.haxepunk.utils.Draw._rect.x = x - com.haxepunk.utils.Draw._camera.x, com.haxepunk.utils.Draw._rect.y = y - com.haxepunk.utils.Draw._camera.y, com.haxepunk.utils.Draw._rect.width = width, com.haxepunk.utils.Draw._rect.height = height, void com.haxepunk.utils.Draw._target.fillRect(com.haxepunk.utils.Draw._rect, color);
      com.haxepunk.utils.Draw._graphics.clear(), com.haxepunk.utils.Draw._graphics.beginFill(color, alpha), com.haxepunk.utils.Draw._graphics.drawRect(x - com.haxepunk.utils.Draw._camera.x, y - com.haxepunk.utils.Draw._camera.y, width, height), null == com.haxepunk.utils.Draw.blend ? com.haxepunk.utils.Draw._target.draw(com.haxepunk.HXP.sprite) : com.haxepunk.utils.Draw._target.draw(com.haxepunk.HXP.sprite, null, null, com.haxepunk.utils.Draw.blend)
    } else com.haxepunk.utils.Draw._graphics.beginFill(color, alpha), com.haxepunk.utils.Draw._graphics.drawRect(x - com.haxepunk.utils.Draw._camera.x, y - com.haxepunk.utils.Draw._camera.y, width, height), com.haxepunk.utils.Draw._graphics.endFill()
  }, com.haxepunk.utils.Draw.rectPlus = function(x, y, width, height, color, alpha, fill, thick) {
    null == thick && (thick = 1), null == fill && (fill = !0), null == alpha && (alpha = 1), null == color && (color = 16777215), color = 16777215 & color, com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.BUFFER && com.haxepunk.utils.Draw._graphics.clear(), fill ? com.haxepunk.utils.Draw._graphics.beginFill(color, alpha) : com.haxepunk.utils.Draw._graphics.lineStyle(thick, color, alpha), com.haxepunk.utils.Draw._graphics.drawRect(x - com.haxepunk.utils.Draw._camera.x, y - com.haxepunk.utils.Draw._camera.y, width, height), com.haxepunk.utils.Draw._graphics.endFill(), com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.BUFFER ? null == com.haxepunk.utils.Draw.blend ? com.haxepunk.utils.Draw._target.draw(com.haxepunk.HXP.sprite) : com.haxepunk.utils.Draw._target.draw(com.haxepunk.HXP.sprite, null, null, com.haxepunk.utils.Draw.blend) : com.haxepunk.utils.Draw._graphics.lineStyle(0)
  }, com.haxepunk.utils.Draw.circle = function(x, y, radius, color) {
    if (null == color && (color = 16777215), com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.BUFFER) {
      color = -16777216 | 16777215 & color, x -= 0 | com.haxepunk.utils.Draw._camera.x, y -= 0 | com.haxepunk.utils.Draw._camera.y;
      var f = 1 - radius,
        fx = 1,
        fy = -2 * radius,
        xx = 0,
        yy = radius;
      for (com.haxepunk.utils.Draw._target.setPixel32(x, y + radius, color), com.haxepunk.utils.Draw._target.setPixel32(x, y - radius, color), com.haxepunk.utils.Draw._target.setPixel32(x + radius, y, color), com.haxepunk.utils.Draw._target.setPixel32(x - radius, y, color); yy > xx;) f >= 0 && (yy--, fy += 2, f += fy), xx++, fx += 2, f += fx, com.haxepunk.utils.Draw._target.setPixel32(x + xx, y + yy, color), com.haxepunk.utils.Draw._target.setPixel32(x - xx, y + yy, color), com.haxepunk.utils.Draw._target.setPixel32(x + xx, y - yy, color), com.haxepunk.utils.Draw._target.setPixel32(x - xx, y - yy, color), com.haxepunk.utils.Draw._target.setPixel32(x + yy, y + xx, color), com.haxepunk.utils.Draw._target.setPixel32(x - yy, y + xx, color), com.haxepunk.utils.Draw._target.setPixel32(x + yy, y - xx, color), com.haxepunk.utils.Draw._target.setPixel32(x - yy, y - xx, color)
    } else com.haxepunk.utils.Draw.circlePlus(x, y, radius, color, 1, !1)
  }, com.haxepunk.utils.Draw.circlePlus = function(x, y, radius, color, alpha, fill, thick) {
    null == thick && (thick = 1), null == fill && (fill = !0), null == alpha && (alpha = 1), null == color && (color = 16777215), com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.BUFFER ? (com.haxepunk.utils.Draw._graphics.clear(), fill ? (com.haxepunk.utils.Draw._graphics.beginFill(16777215 & color, alpha), com.haxepunk.utils.Draw._graphics.drawCircle(x - com.haxepunk.utils.Draw._camera.x, y - com.haxepunk.utils.Draw._camera.y, radius), com.haxepunk.utils.Draw._graphics.endFill()) : (com.haxepunk.utils.Draw._graphics.lineStyle(thick, 16777215 & color, alpha), com.haxepunk.utils.Draw._graphics.drawCircle(x - com.haxepunk.utils.Draw._camera.x, y - com.haxepunk.utils.Draw._camera.y, radius)), null == com.haxepunk.utils.Draw.blend ? com.haxepunk.utils.Draw._target.draw(com.haxepunk.HXP.sprite) : com.haxepunk.utils.Draw._target.draw(com.haxepunk.HXP.sprite, null, null, com.haxepunk.utils.Draw.blend)) : fill ? (com.haxepunk.utils.Draw._graphics.beginFill(16777215 & color, alpha), com.haxepunk.utils.Draw._graphics.drawCircle(x - com.haxepunk.utils.Draw._camera.x, y - com.haxepunk.utils.Draw._camera.y, radius), com.haxepunk.utils.Draw._graphics.endFill()) : (com.haxepunk.utils.Draw._graphics.lineStyle(thick, 16777215 & color, alpha), com.haxepunk.utils.Draw._graphics.drawCircle(x - com.haxepunk.utils.Draw._camera.x, y - com.haxepunk.utils.Draw._camera.y, radius), com.haxepunk.utils.Draw._graphics.lineStyle(0))
  }, com.haxepunk.utils.Draw.hitbox = function(e, outline, color, alpha) {
    if (null == alpha && (alpha = 1), null == color && (color = 16777215), null == outline && (outline = !0), com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.BUFFER) {
      if (outline) {
        color = -16777216 | 16777215 & color;
        var x;
        x = (e.followCamera ? e.x + com.haxepunk.HXP.camera.x : e.x) - e.originX - com.haxepunk.utils.Draw._camera.x | 0;
        var y;
        return y = (e.followCamera ? e.y + com.haxepunk.HXP.camera.y : e.y) - e.originY - com.haxepunk.utils.Draw._camera.y | 0, com.haxepunk.utils.Draw._rect.x = x, com.haxepunk.utils.Draw._rect.y = y, com.haxepunk.utils.Draw._rect.width = e.width, com.haxepunk.utils.Draw._rect.height = 1, com.haxepunk.utils.Draw._target.fillRect(com.haxepunk.utils.Draw._rect, color), com.haxepunk.utils.Draw._rect.y += e.height - 1, com.haxepunk.utils.Draw._target.fillRect(com.haxepunk.utils.Draw._rect, color), com.haxepunk.utils.Draw._rect.y = y, com.haxepunk.utils.Draw._rect.width = 1, com.haxepunk.utils.Draw._rect.height = e.height, com.haxepunk.utils.Draw._target.fillRect(com.haxepunk.utils.Draw._rect, color), com.haxepunk.utils.Draw._rect.x += e.width - 1, void com.haxepunk.utils.Draw._target.fillRect(com.haxepunk.utils.Draw._rect, color)
      }
      if (alpha >= 1 && null == com.haxepunk.utils.Draw.blend) return color = -16777216 | 16777215 & color, com.haxepunk.utils.Draw._rect.x = (e.followCamera ? e.x + com.haxepunk.HXP.camera.x : e.x) - e.originX - com.haxepunk.utils.Draw._camera.x, com.haxepunk.utils.Draw._rect.y = (e.followCamera ? e.y + com.haxepunk.HXP.camera.y : e.y) - e.originY - com.haxepunk.utils.Draw._camera.y, com.haxepunk.utils.Draw._rect.width = e.width, com.haxepunk.utils.Draw._rect.height = e.height, void com.haxepunk.utils.Draw._target.fillRect(com.haxepunk.utils.Draw._rect, color);
      com.haxepunk.utils.Draw._graphics.clear(), com.haxepunk.utils.Draw._graphics.beginFill(color, alpha), com.haxepunk.utils.Draw._graphics.drawRect((e.followCamera ? e.x + com.haxepunk.HXP.camera.x : e.x) - e.originX - com.haxepunk.utils.Draw._camera.x, (e.followCamera ? e.y + com.haxepunk.HXP.camera.y : e.y) - e.originY - com.haxepunk.utils.Draw._camera.y, e.width, e.height), null == com.haxepunk.utils.Draw.blend ? com.haxepunk.utils.Draw._target.draw(com.haxepunk.HXP.sprite) : com.haxepunk.utils.Draw._target.draw(com.haxepunk.HXP.sprite, null, null, com.haxepunk.utils.Draw.blend)
    } else com.haxepunk.utils.Draw._graphics.beginFill(color, alpha), com.haxepunk.utils.Draw._graphics.drawRect((e.followCamera ? e.x + com.haxepunk.HXP.camera.x : e.x) - e.originX - com.haxepunk.utils.Draw._camera.x, (e.followCamera ? e.y + com.haxepunk.HXP.camera.y : e.y) - e.originY - com.haxepunk.utils.Draw._camera.y, e.width, e.height), com.haxepunk.utils.Draw._graphics.endFill()
  }, com.haxepunk.utils.Draw.curve = function(x1, y1, x2, y2, x3, y3, thick, color, alpha) {
    null == alpha && (alpha = 1), null == color && (color = 0), null == thick && (thick = 1), com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.BUFFER ? (com.haxepunk.utils.Draw._graphics.clear(), com.haxepunk.utils.Draw._graphics.lineStyle(thick, color, alpha), com.haxepunk.utils.Draw._graphics.moveTo(x1 - com.haxepunk.utils.Draw._camera.x, y1 - com.haxepunk.utils.Draw._camera.y), com.haxepunk.utils.Draw._graphics.curveTo(x2 - com.haxepunk.utils.Draw._camera.x, y2 - com.haxepunk.utils.Draw._camera.y, x3 - com.haxepunk.utils.Draw._camera.x, y3 - com.haxepunk.utils.Draw._camera.y), null == com.haxepunk.utils.Draw.blend ? com.haxepunk.utils.Draw._target.draw(com.haxepunk.HXP.sprite) : com.haxepunk.utils.Draw._target.draw(com.haxepunk.HXP.sprite, null, null, com.haxepunk.utils.Draw.blend)) : (com.haxepunk.utils.Draw._graphics.lineStyle(thick, color, alpha), com.haxepunk.utils.Draw._graphics.moveTo(x1 - com.haxepunk.utils.Draw._camera.x, y1 - com.haxepunk.utils.Draw._camera.y), com.haxepunk.utils.Draw._graphics.curveTo(x2 - com.haxepunk.utils.Draw._camera.x, y2 - com.haxepunk.utils.Draw._camera.y, x3 - com.haxepunk.utils.Draw._camera.x, y3 - com.haxepunk.utils.Draw._camera.y), com.haxepunk.utils.Draw._graphics.lineStyle(0))
  }, com.haxepunk.utils.Draw.graphic = function(g, x, y, layer) {
    null == layer && (layer = 0), null == y && (y = 0), null == x && (x = 0), g._visible && (g.relative ? (com.haxepunk.HXP.point.x = x, com.haxepunk.HXP.point.y = y) : com.haxepunk.HXP.point.x = com.haxepunk.HXP.point.y = 0, com.haxepunk.HXP.point2.x = com.haxepunk.HXP.camera.x, com.haxepunk.HXP.point2.y = com.haxepunk.HXP.camera.y, com.haxepunk.HXP.renderMode == com.haxepunk.RenderMode.BUFFER ? g.render(com.haxepunk.utils.Draw._target, com.haxepunk.HXP.point, com.haxepunk.HXP.point2) : g.renderAtlas(layer, com.haxepunk.HXP.point, com.haxepunk.HXP.point2))
  }, com.haxepunk.utils.Draw.entity = function(e, x, y, addEntityPosition) {
    null == addEntityPosition && (addEntityPosition = !1), null == y && (y = 0), null == x && (x = 0), e.visible && null != e._graphic && (addEntityPosition ? com.haxepunk.utils.Draw.graphic(e._graphic, x + (e.followCamera ? e.x + com.haxepunk.HXP.camera.x : e.x) | 0, y + (e.followCamera ? e.y + com.haxepunk.HXP.camera.y : e.y) | 0) : com.haxepunk.utils.Draw.graphic(e._graphic, x, y))
  }, com.haxepunk.utils.Draw.text = function(text, x, y, options) {
    null == y && (y = 0), null == x && (x = 0);
    var textGfx = new com.haxepunk.graphics.Text(text, x, y, 0, 0, options);
    textGfx.render(com.haxepunk.utils.Draw._target, com.haxepunk.HXP.zero, com.haxepunk.utils.Draw._camera)
  }, com.haxepunk.utils.Draw._target = null, com.haxepunk.utils.Draw._camera = null, com.haxepunk.utils.Draw._graphics = null, com.haxepunk.utils.Draw._rect = null, com.haxepunk.utils.Ease = function() {}, $hxClasses["com.haxepunk.utils.Ease"] = com.haxepunk.utils.Ease, com.haxepunk.utils.Ease.__name__ = ["com", "haxepunk", "utils", "Ease"], com.haxepunk.utils.Ease.__properties__ = {
    get_EL: "get_EL",
    get_PI2: "get_PI2",
    get_PI: "get_PI"
  }, com.haxepunk.utils.Ease.quadIn = function(t) {
    return t * t
  }, com.haxepunk.utils.Ease.quadOut = function(t) {
    return -t * (t - 2)
  }, com.haxepunk.utils.Ease.quadInOut = function(t) {
    return .5 >= t ? t * t * 2 : 1 - --t * t * 2
  }, com.haxepunk.utils.Ease.cubeIn = function(t) {
    return t * t * t
  }, com.haxepunk.utils.Ease.cubeOut = function(t) {
    return 1 + --t * t * t
  }, com.haxepunk.utils.Ease.cubeInOut = function(t) {
    return .5 >= t ? t * t * t * 4 : 1 + --t * t * t * 4
  }, com.haxepunk.utils.Ease.quartIn = function(t) {
    return t * t * t * t
  }, com.haxepunk.utils.Ease.quartOut = function(t) {
    return 1 - (t -= 1) * t * t * t
  }, com.haxepunk.utils.Ease.quartInOut = function(t) {
    return .5 >= t ? t * t * t * t * 8 : (1 - (t = 2 * t - 2) * t * t * t) / 2 + .5
  }, com.haxepunk.utils.Ease.quintIn = function(t) {
    return t * t * t * t * t
  }, com.haxepunk.utils.Ease.quintOut = function(t) {
    return (t -= 1) * t * t * t * t + 1
  }, com.haxepunk.utils.Ease.quintInOut = function(t) {
    return (t *= 2) < 1 ? t * t * t * t * t / 2 : ((t -= 2) * t * t * t * t + 2) / 2
  }, com.haxepunk.utils.Ease.sineIn = function(t) {
    return -Math.cos(com.haxepunk.utils.Ease.get_PI2() * t) + 1
  }, com.haxepunk.utils.Ease.sineOut = function(t) {
    return Math.sin(com.haxepunk.utils.Ease.get_PI2() * t)
  }, com.haxepunk.utils.Ease.sineInOut = function(t) {
    return -Math.cos(com.haxepunk.utils.Ease.get_PI() * t) / 2 + .5
  }, com.haxepunk.utils.Ease.bounceIn = function(t) {
    return t = 1 - t, .36363636363636365 > t ? 1 - 7.5625 * t * t : .7272727272727273 > t ? 1 - (7.5625 * (t - .5454545454545454) * (t - .5454545454545454) + .75) : .9090909090909091 > t ? 1 - (7.5625 * (t - .8181818181818182) * (t - .8181818181818182) + .9375) : 1 - (7.5625 * (t - .9545454545454546) * (t - .9545454545454546) + .984375)
  }, com.haxepunk.utils.Ease.bounceOut = function(t) {
    return .36363636363636365 > t ? 7.5625 * t * t : .7272727272727273 > t ? 7.5625 * (t - .5454545454545454) * (t - .5454545454545454) + .75 : .9090909090909091 > t ? 7.5625 * (t - .8181818181818182) * (t - .8181818181818182) + .9375 : 7.5625 * (t - .9545454545454546) * (t - .9545454545454546) + .984375
  }, com.haxepunk.utils.Ease.bounceInOut = function(t) {
    return .5 > t ? (t = 1 - 2 * t, .36363636363636365 > t ? (1 - 7.5625 * t * t) / 2 : .7272727272727273 > t ? (1 - (7.5625 * (t - .5454545454545454) * (t - .5454545454545454) + .75)) / 2 : .9090909090909091 > t ? (1 - (7.5625 * (t - .8181818181818182) * (t - .8181818181818182) + .9375)) / 2 : (1 - (7.5625 * (t - .9545454545454546) * (t - .9545454545454546) + .984375)) / 2) : (t = 2 * t - 1, .36363636363636365 > t ? 7.5625 * t * t / 2 + .5 : .7272727272727273 > t ? (7.5625 * (t - .5454545454545454) * (t - .5454545454545454) + .75) / 2 + .5 : .9090909090909091 > t ? (7.5625 * (t - .8181818181818182) * (t - .8181818181818182) + .9375) / 2 + .5 : (7.5625 * (t - .9545454545454546) * (t - .9545454545454546) + .984375) / 2 + .5)
  }, com.haxepunk.utils.Ease.circIn = function(t) {
    return -(Math.sqrt(1 - t * t) - 1)
  }, com.haxepunk.utils.Ease.circOut = function(t) {
    return Math.sqrt(1 - (t - 1) * (t - 1))
  }, com.haxepunk.utils.Ease.circInOut = function(t) {
    return .5 >= t ? (Math.sqrt(1 - t * t * 4) - 1) / -2 : (Math.sqrt(1 - (2 * t - 2) * (2 * t - 2)) + 1) / 2
  }, com.haxepunk.utils.Ease.expoIn = function(t) {
    return Math.pow(2, 10 * (t - 1))
  }, com.haxepunk.utils.Ease.expoOut = function(t) {
    return -Math.pow(2, -10 * t) + 1
  }, com.haxepunk.utils.Ease.expoInOut = function(t) {
    return .5 > t ? Math.pow(2, 10 * (2 * t - 1)) / 2 : (-Math.pow(2, -10 * (2 * t - 1)) + 2) / 2
  }, com.haxepunk.utils.Ease.backIn = function(t) {
    return t * t * (2.70158 * t - 1.70158)
  }, com.haxepunk.utils.Ease.backOut = function(t) {
    return 1 - --t * t * (-2.70158 * t - 1.70158)
  }, com.haxepunk.utils.Ease.backInOut = function(t) {
    return t *= 2, 1 > t ? t * t * (2.70158 * t - 1.70158) / 2 : (t--, (1 - --t * t * (-2.70158 * t - 1.70158)) / 2 + .5)
  }, com.haxepunk.utils.Ease.get_PI = function() {
    return Math.PI
  }, com.haxepunk.utils.Ease.get_PI2 = function() {
    return Math.PI / 2
  }, com.haxepunk.utils.Ease.get_EL = function() {
    return 2 * com.haxepunk.utils.Ease.get_PI() / .45
  }, com.haxepunk.utils.GestureType = function() {
    this.released = !1, this.pressed = !1, this.active = !1, this.time = 0, this.magnitude = 0, this.y2 = 0, this.x2 = 0, this.y = 0, this.x = 0, this.reset()
  }, $hxClasses["com.haxepunk.utils.GestureType"] = com.haxepunk.utils.GestureType, com.haxepunk.utils.GestureType.__name__ = ["com", "haxepunk", "utils", "GestureType"], com.haxepunk.utils.GestureType.prototype = {
    x: null,
    y: null,
    x2: null,
    y2: null,
    magnitude: null,
    time: null,
    active: null,
    pressed: null,
    released: null,
    reset: function() {
      this.x = this.y = this.x2 = this.y2 = this.time = 0, this.active = this.pressed = this.released = !1
    },
    start: function(x, y) {
      null == y && (y = 0), null == x && (x = 0), this.active = this.pressed = !0, this.x = x, this.y = y, this.x2 = this.y2 = this.magnitude = 0, this.time = 0
    },
    get_distance: function() {
      return com.haxepunk.HXP.distance(this.x, this.y, this.x2, this.y2)
    },
    get_velocity: function() {
      return 0 == this.time ? 0 : this.get_distance() / this.time
    },
    get_angle: function() {
      return 0
    },
    release: function() {
      this.released = !0
    },
    update: function() {
      this.pressed ? this.pressed = !1 : this.released ? this.reset() : this.active && (this.time += com.haxepunk.HXP.elapsed)
    },
    __class__: com.haxepunk.utils.GestureType,
    __properties__: {
      get_angle: "get_angle",
      get_velocity: "get_velocity",
      get_distance: "get_distance"
    }
  }, com.haxepunk.utils.GestureMode = $hxClasses["com.haxepunk.utils.GestureMode"] = {
    __ename__: !0,
    __constructs__: ["READY", "SINGLE_TOUCH", "SINGLE_MOVE", "MULTI_TOUCH", "MULTI_MOVE", "FINISHED"]
  }, com.haxepunk.utils.GestureMode.READY = ["READY", 0], com.haxepunk.utils.GestureMode.READY.toString = $estr, com.haxepunk.utils.GestureMode.READY.__enum__ = com.haxepunk.utils.GestureMode, com.haxepunk.utils.GestureMode.SINGLE_TOUCH = ["SINGLE_TOUCH", 1], com.haxepunk.utils.GestureMode.SINGLE_TOUCH.toString = $estr, com.haxepunk.utils.GestureMode.SINGLE_TOUCH.__enum__ = com.haxepunk.utils.GestureMode, com.haxepunk.utils.GestureMode.SINGLE_MOVE = ["SINGLE_MOVE", 2], com.haxepunk.utils.GestureMode.SINGLE_MOVE.toString = $estr, com.haxepunk.utils.GestureMode.SINGLE_MOVE.__enum__ = com.haxepunk.utils.GestureMode, com.haxepunk.utils.GestureMode.MULTI_TOUCH = ["MULTI_TOUCH", 3], com.haxepunk.utils.GestureMode.MULTI_TOUCH.toString = $estr, com.haxepunk.utils.GestureMode.MULTI_TOUCH.__enum__ = com.haxepunk.utils.GestureMode, com.haxepunk.utils.GestureMode.MULTI_MOVE = ["MULTI_MOVE", 4], com.haxepunk.utils.GestureMode.MULTI_MOVE.toString = $estr, com.haxepunk.utils.GestureMode.MULTI_MOVE.__enum__ = com.haxepunk.utils.GestureMode, com.haxepunk.utils.GestureMode.FINISHED = ["FINISHED", 5], com.haxepunk.utils.GestureMode.FINISHED.toString = $estr, com.haxepunk.utils.GestureMode.FINISHED.__enum__ = com.haxepunk.utils.GestureMode, com.haxepunk.utils.GestureMode.__empty_constructs__ = [com.haxepunk.utils.GestureMode.READY, com.haxepunk.utils.GestureMode.SINGLE_TOUCH, com.haxepunk.utils.GestureMode.SINGLE_MOVE, com.haxepunk.utils.GestureMode.MULTI_TOUCH, com.haxepunk.utils.GestureMode.MULTI_MOVE, com.haxepunk.utils.GestureMode.FINISHED], com.haxepunk.utils.Gesture = function() {}, $hxClasses["com.haxepunk.utils.Gesture"] = com.haxepunk.utils.Gesture, com.haxepunk.utils.Gesture.__name__ = ["com", "haxepunk", "utils", "Gesture"], com.haxepunk.utils.Gesture.mode = null, com.haxepunk.utils.Gesture.enable = function() {
    com.haxepunk.utils.Gesture.enabled = !0, com.haxepunk.utils.Gesture.mode = com.haxepunk.utils.GestureMode.READY
  }, com.haxepunk.utils.Gesture.disable = function() {
    com.haxepunk.utils.Gesture.enabled = !1
  }, com.haxepunk.utils.Gesture.getTouch = function(touches, touchOrder, n) {
    return n >= touchOrder.length ? null : touches.get(touchOrder[n])
  }, com.haxepunk.utils.Gesture.check = function(gestureType) {
    return com.haxepunk.utils.Gesture.gestures.exists(gestureType) ? com.haxepunk.utils.Gesture.gestures.get(gestureType).active : !1
  }, com.haxepunk.utils.Gesture.pressed = function(gestureType) {
    return com.haxepunk.utils.Gesture.gestures.exists(gestureType) ? com.haxepunk.utils.Gesture.gestures.get(gestureType).pressed : !1
  }, com.haxepunk.utils.Gesture.released = function(gestureType) {
    return com.haxepunk.utils.Gesture.gestures.exists(gestureType) ? com.haxepunk.utils.Gesture.gestures.get(gestureType).released : !1
  }, com.haxepunk.utils.Gesture.get = function(gestureType) {
    return com.haxepunk.utils.Gesture.check(gestureType) ? com.haxepunk.utils.Gesture.gestures.get(gestureType) : null
  }, com.haxepunk.utils.Gesture.start = function(gestureType, x, y) {
    if (null == y && (y = 0), null == x && (x = 0), !com.haxepunk.utils.Gesture.gestures.exists(gestureType)) {
      var v = new com.haxepunk.utils.GestureType;
      com.haxepunk.utils.Gesture.gestures.set(gestureType, v)
    }
    com.haxepunk.utils.Gesture.gestures.get(gestureType).active || com.haxepunk.utils.Gesture.gestures.get(gestureType).start(x, y)
  }, com.haxepunk.utils.Gesture.finish = function(gestureType) {
    if (!com.haxepunk.utils.Gesture.gestures.exists(gestureType)) {
      var v = new com.haxepunk.utils.GestureType;
      com.haxepunk.utils.Gesture.gestures.set(gestureType, v)
    }
    com.haxepunk.utils.Gesture.gestures.get(gestureType).release()
  }, com.haxepunk.utils.Gesture.finishAll = function() {
    for (var $it0 = com.haxepunk.utils.Gesture.gestures.iterator(); $it0.hasNext();) {
      var gesture = $it0.next();
      gesture.active && gesture.release()
    }
  }, com.haxepunk.utils.Gesture.update = function() {
    for (var $it0 = com.haxepunk.utils.Gesture.gestures.iterator(); $it0.hasNext();) {
      var gesture = $it0.next();
      gesture.update()
    }
    for (var touches = com.haxepunk.utils.Input._touches, touchOrder = com.haxepunk.utils.Input._touchOrder, touchCount = 0, _g = 0; _g < touchOrder.length;) {
      var touch = touchOrder[_g];
      ++_g, touches.exists(touch) ? (touches.get(touch).get_pressed() || !touches.get(touch).released) && (touchCount += 1) : HxOverrides.remove(touchOrder, touch)
    }
    com.haxepunk.utils.Gesture._lastTap > 0 && (com.haxepunk.utils.Gesture._lastTap = Math.max(0, com.haxepunk.utils.Gesture._lastTap - com.haxepunk.HXP.elapsed / com.haxepunk.utils.Gesture.doubleTapTime));
    var _g1 = com.haxepunk.utils.Gesture.mode;
    switch (_g1[1]) {
      case 0:
        touchCount > 0 && (com.haxepunk.utils.Gesture.mode = 1 == touchCount ? com.haxepunk.utils.GestureMode.SINGLE_TOUCH : com.haxepunk.utils.GestureMode.MULTI_TOUCH);
        break;
      case 1:
        if (0 == touchCount) {
          com.haxepunk.utils.Gesture.mode = com.haxepunk.utils.GestureMode.READY;
          var touch1;
          touch1 = 0 >= touchOrder.length ? null : touches.get(touchOrder[0]);
          var t;
          t = touch1.time < com.haxepunk.utils.Gesture.longPressTime ? 1 : 3, 1 == t && com.haxepunk.utils.Gesture._lastTap > 0 && (t = 2), com.haxepunk.utils.Gesture.check(t) || (com.haxepunk.utils.Gesture.start(t, touch1.x, touch1.y), 1 == t && (com.haxepunk.utils.Gesture._lastTap = 1))
        } else if (1 == touchCount) {
          var touch2;
          touch2 = 0 >= touchOrder.length ? null : touches.get(touchOrder[0]);
          var dist = com.haxepunk.HXP.distance(touch2.startX, touch2.startY, touch2.x, touch2.y);
          dist > com.haxepunk.utils.Gesture.deadZone ? com.haxepunk.utils.Gesture.mode = com.haxepunk.utils.GestureMode.SINGLE_MOVE : touch2.time >= com.haxepunk.utils.Gesture.longPressTime && !com.haxepunk.utils.Gesture.check(3) && com.haxepunk.utils.Gesture.start(3, touch2.x, touch2.y)
        } else touchCount > 1 && (com.haxepunk.utils.Gesture.mode = com.haxepunk.utils.GestureMode.MULTI_TOUCH);
        break;
      case 2:
        if (0 == touchCount) com.haxepunk.utils.Gesture.mode = com.haxepunk.utils.GestureMode.READY;
        else {
          var touch3;
          touch3 = 0 >= touchOrder.length ? null : touches.get(touchOrder[0]);
          var dist1 = com.haxepunk.HXP.distance(touch3.startX, touch3.startY, touch3.x, touch3.y);
          com.haxepunk.utils.Gesture.check(4) || com.haxepunk.utils.Gesture.start(4, touch3.startX, touch3.startY);
          var g = com.haxepunk.utils.Gesture.get(4);
          g.x2 = touch3.x, g.y2 = touch3.y, g.magnitude = dist1
        }
        if (touchCount > 1) {
          var touch4;
          touch4 = 1 >= touchOrder.length ? null : touches.get(touchOrder[1]), com.haxepunk.utils.Gesture.start(6, touch4.x, touch4.y)
        } else com.haxepunk.utils.Gesture.check(6) && com.haxepunk.utils.Gesture.finish(6);
        break;
      case 3:
        if (2 > touchCount) {
          if (com.haxepunk.utils.Gesture.mode = 0 == touchCount ? com.haxepunk.utils.GestureMode.READY : com.haxepunk.utils.GestureMode.FINISHED, !com.haxepunk.utils.Gesture.check(5)) {
            var t1;
            t1 = 0 >= touchOrder.length ? null : touches.get(touchOrder[0]);
            var t2;
            if (t2 = 1 >= touchOrder.length ? null : touches.get(touchOrder[1]), null != t2) {
              var mx = (t1.startX - t2.startX) / 2,
                my = (t1.startY - t2.startY) / 2;
              com.haxepunk.utils.Gesture.start(6, mx, my)
            }
          }
          com.haxepunk.utils.Gesture.finishAll()
        } else {
          var t11;
          t11 = 0 >= touchOrder.length ? null : touches.get(touchOrder[0]);
          var t21;
          if (t21 = 1 >= touchOrder.length ? null : touches.get(touchOrder[1]), null != t11 && null != t21) {
            var d1 = com.haxepunk.HXP.distance(t11.startX, t11.startY, t11.x, t11.y),
              d2 = com.haxepunk.HXP.distance(t21.startX, t21.startY, t21.x, t21.y);
            if (d1 > com.haxepunk.utils.Gesture.deadZone && d2 > com.haxepunk.utils.Gesture.deadZone) {
              if (!com.haxepunk.utils.Gesture.check(5)) {
                var mx1 = (t11.startX - t21.startX) / 2,
                  my1 = (t11.startY - t21.startY) / 2;
                com.haxepunk.utils.Gesture.start(5, mx1, my1)
              }
              var inner = com.haxepunk.HXP.distance(t11.startX, t11.startY, t21.startX, t21.startY),
                outer = com.haxepunk.HXP.distance(t11.x, t11.y, t21.x, t21.y);
              com.haxepunk.utils.Gesture.get(5).magnitude = inner / outer
            }
          }
        }
        break;
      default:
        0 == touchCount && (com.haxepunk.utils.Gesture.mode = com.haxepunk.utils.GestureMode.READY)
    }
    0 == touchCount && com.haxepunk.utils.Gesture.finishAll()
  }, com.haxepunk.utils.HaxelibInfoBuilder = function() {}, $hxClasses["com.haxepunk.utils.HaxelibInfoBuilder"] = com.haxepunk.utils.HaxelibInfoBuilder, com.haxepunk.utils.HaxelibInfoBuilder.__name__ = ["com", "haxepunk", "utils", "HaxelibInfoBuilder"], com.haxepunk.utils.HaxelibInfo = function() {}, $hxClasses["com.haxepunk.utils.HaxelibInfo"] = com.haxepunk.utils.HaxelibInfo, com.haxepunk.utils.HaxelibInfo.__name__ = ["com", "haxepunk", "utils", "HaxelibInfo"], com.haxepunk.utils._Input = {}, com.haxepunk.utils._Input.InputType_Impl_ = function() {}, $hxClasses["com.haxepunk.utils._Input.InputType_Impl_"] = com.haxepunk.utils._Input.InputType_Impl_, com.haxepunk.utils._Input.InputType_Impl_.__name__ = ["com", "haxepunk", "utils", "_Input", "InputType_Impl_"], com.haxepunk.utils._Input.InputType_Impl_.__properties__ = {
    get_type: "get_type"
  }, com.haxepunk.utils._Input.InputType_Impl_._new = function(e) {
    return e
  }, com.haxepunk.utils._Input.InputType_Impl_.get_type = function(this1) {
    return this1
  }, com.haxepunk.utils._Input.InputType_Impl_.fromLeft = function(v) {
    var e = com.haxepunk.ds.Either.Left(v);
    return e
  }, com.haxepunk.utils._Input.InputType_Impl_.fromRight = function(v) {
    var e = com.haxepunk.ds.Either.Right(v);
    return e
  }, com.haxepunk.utils.Input = function() {}, $hxClasses["com.haxepunk.utils.Input"] = com.haxepunk.utils.Input, com.haxepunk.utils.Input.__name__ = ["com", "haxepunk", "utils", "Input"], com.haxepunk.utils.Input.__properties__ = {
    get_joysticks: "get_joysticks",
    get_touchOrder: "get_touchOrder",
    get_touches: "get_touches",
    get_mouseFlashY: "get_mouseFlashY",
    get_mouseFlashX: "get_mouseFlashX",
    get_mouseY: "get_mouseY",
    get_mouseX: "get_mouseX",
    get_mouseWheelDelta: "get_mouseWheelDelta"
  }, com.haxepunk.utils.Input.lastKey = null, com.haxepunk.utils.Input.mouseDown = null, com.haxepunk.utils.Input.mouseUp = null, com.haxepunk.utils.Input.mousePressed = null, com.haxepunk.utils.Input.mouseReleased = null, com.haxepunk.utils.Input.mouseWheel = null, com.haxepunk.utils.Input.get_mouseWheelDelta = function() {
    return com.haxepunk.utils.Input.mouseWheel ? (com.haxepunk.utils.Input.mouseWheel = !1, com.haxepunk.utils.Input._mouseWheelDelta) : 0
  }, com.haxepunk.utils.Input.get_mouseX = function() {
    return com.haxepunk.HXP.screen.get_mouseX()
  }, com.haxepunk.utils.Input.get_mouseY = function() {
    return com.haxepunk.HXP.screen.get_mouseY()
  }, com.haxepunk.utils.Input.get_mouseFlashX = function() {
    return Std["int"](com.haxepunk.HXP.stage.get_mouseX() - com.haxepunk.HXP.screen.x)
  }, com.haxepunk.utils.Input.get_mouseFlashY = function() {
    return Std["int"](com.haxepunk.HXP.stage.get_mouseY() - com.haxepunk.HXP.screen.y)
  }, com.haxepunk.utils.Input.define = function(name, keys) {
    com.haxepunk.utils.Input._control.set(name, keys)
  }, com.haxepunk.utils.Input.check = function(input) {
    var _g = input;
    switch (_g[1]) {
      case 0:
        var s = _g[2];
        if (!com.haxepunk.utils.Input._control.exists(s)) return com.haxepunk.HXP.log("Input '" + s + "' not defined"), !1;
        for (var _g1 = 0, _g2 = com.haxepunk.utils.Input._control.get(s); _g1 < _g2.length;) {
          var key = _g2[_g1];
          if (++_g1, 0 > key) {
            if (com.haxepunk.utils.Input._keyNum > 0) return !0
          } else if (1 == com.haxepunk.utils.Input._key.get(key)) return !0
        }
        return !1;
      case 1:
        var i = _g[2];
        return 0 > i ? com.haxepunk.utils.Input._keyNum > 0 : com.haxepunk.utils.Input._key.get(i)
    }
    return !1
  }, com.haxepunk.utils.Input.pressed = function(input) {
    var _g = input;
    switch (_g[1]) {
      case 0:
        var s = _g[2];
        if (com.haxepunk.utils.Input._control.exists(s))
          for (var _g1 = 0, _g2 = com.haxepunk.utils.Input._control.get(s); _g1 < _g2.length;) {
            var key = _g2[_g1];
            if (++_g1, 0 > key ? 0 != com.haxepunk.utils.Input._pressNum : HxOverrides.indexOf(com.haxepunk.utils.Input._press, key, 0) >= 0) return !0
          }
        break;
      case 1:
        var i = _g[2];
        return 0 > i ? 0 != com.haxepunk.utils.Input._pressNum : HxOverrides.indexOf(com.haxepunk.utils.Input._press, i, 0) >= 0
    }
    return !1
  }, com.haxepunk.utils.Input.released = function(input) {
    var _g = input;
    switch (_g[1]) {
      case 0:
        for (var s = _g[2], _g1 = 0, _g2 = com.haxepunk.utils.Input._control.get(s); _g1 < _g2.length;) {
          var key = _g2[_g1];
          if (++_g1, 0 > key ? 0 != com.haxepunk.utils.Input._releaseNum : HxOverrides.indexOf(com.haxepunk.utils.Input._release, key, 0) >= 0) return !0
        }
        return !1;
      case 1:
        var i = _g[2];
        return 0 > i ? 0 != com.haxepunk.utils.Input._releaseNum : HxOverrides.indexOf(com.haxepunk.utils.Input._release, i, 0) >= 0
    }
  }, com.haxepunk.utils.Input.touchPoints = function(touchCallback) {
    for (var $it0 = com.haxepunk.utils.Input._touches.iterator(); $it0.hasNext();) {
      var touch = $it0.next();
      touchCallback(touch)
    }
  }, com.haxepunk.utils.Input.get_touches = function() {
    return com.haxepunk.utils.Input._touches
  }, com.haxepunk.utils.Input.get_touchOrder = function() {
    return com.haxepunk.utils.Input._touchOrder
  }, com.haxepunk.utils.Input.joystick = function(id) {
    var joy = com.haxepunk.utils.Input._joysticks.get(id);
    return null == joy && (joy = new com.haxepunk.utils.Joystick, com.haxepunk.utils.Input._joysticks.set(id, joy)), joy
  }, com.haxepunk.utils.Input.get_joysticks = function() {
    for (var count = 0, $it0 = com.haxepunk.utils.Input._joysticks.iterator(); $it0.hasNext();) {
      var joystick = $it0.next();
      joystick.get_connected() && (count += 1)
    }
    return count
  }, com.haxepunk.utils.Input.enable = function() {
    com.haxepunk.utils.Input._enabled || null == com.haxepunk.HXP.stage || (com.haxepunk.HXP.stage.addEventListener(openfl.events.KeyboardEvent.KEY_DOWN, com.haxepunk.utils.Input.onKeyDown, !1, 2), com.haxepunk.HXP.stage.addEventListener(openfl.events.KeyboardEvent.KEY_UP, com.haxepunk.utils.Input.onKeyUp, !1, 2), com.haxepunk.HXP.stage.addEventListener(openfl.events.MouseEvent.MOUSE_DOWN, com.haxepunk.utils.Input.onMouseDown, !1, 2), com.haxepunk.HXP.stage.addEventListener(openfl.events.MouseEvent.MOUSE_UP, com.haxepunk.utils.Input.onMouseUp, !1, 2), com.haxepunk.HXP.stage.addEventListener(openfl.events.MouseEvent.MOUSE_WHEEL, com.haxepunk.utils.Input.onMouseWheel, !1, 2), com.haxepunk.utils.Input.multiTouchSupported = openfl.ui.Multitouch.get_supportsTouchEvents(), com.haxepunk.utils.Input.multiTouchSupported && (openfl.ui.Multitouch.set_inputMode(openfl.ui.MultitouchInputMode.TOUCH_POINT), com.haxepunk.HXP.stage.addEventListener("touchBegin", com.haxepunk.utils.Input.onTouchBegin), com.haxepunk.HXP.stage.addEventListener("touchMove", com.haxepunk.utils.Input.onTouchMove), com.haxepunk.HXP.stage.addEventListener("touchEnd", com.haxepunk.utils.Input.onTouchEnd)))
  }, com.haxepunk.utils.Input.update = function() {
    for (; com.haxepunk.utils.Input._pressNum-- > -1;) com.haxepunk.utils.Input._press[com.haxepunk.utils.Input._pressNum] = -1;
    for (com.haxepunk.utils.Input._pressNum = 0; com.haxepunk.utils.Input._releaseNum-- > -1;) com.haxepunk.utils.Input._release[com.haxepunk.utils.Input._releaseNum] = -1;
    if (com.haxepunk.utils.Input._releaseNum = 0, com.haxepunk.utils.Input.mousePressed && (com.haxepunk.utils.Input.mousePressed = !1), com.haxepunk.utils.Input.mouseReleased && (com.haxepunk.utils.Input.mouseReleased = !1), com.haxepunk.utils.Input.multiTouchSupported) {
      for (var $it0 = com.haxepunk.utils.Input._touches.iterator(); $it0.hasNext();) {
        var touch = $it0.next();
        touch.update()
      }
      com.haxepunk.utils.Gesture.enabled && com.haxepunk.utils.Gesture.update();
      for (var $it1 = com.haxepunk.utils.Input._touches.iterator(); $it1.hasNext();) {
        var touch1 = $it1.next();
        touch1.released && 0 != touch1.time && (com.haxepunk.utils.Input._touches.remove(touch1.id), HxOverrides.remove(com.haxepunk.utils.Input._touchOrder, touch1.id))
      }
    }
  }, com.haxepunk.utils.Input.onKeyDown = function(e) {
    var code = com.haxepunk.utils.Input.keyCode(e);
    if (-1 != code) {
      if (com.haxepunk.utils.Input.lastKey = code, 8 == code) com.haxepunk.utils.Input.keyString = HxOverrides.substr(com.haxepunk.utils.Input.keyString, 0, com.haxepunk.utils.Input.keyString.length - 1);
      else if (code > 47 && 58 > code || code > 64 && 91 > code || 32 == code) {
        com.haxepunk.utils.Input.keyString.length > 100 && (com.haxepunk.utils.Input.keyString = HxOverrides.substr(com.haxepunk.utils.Input.keyString, 1, null));
        var $char = String.fromCharCode(code);
        $char = e.shiftKey != com.haxepunk.utils.Input.check(com.haxepunk.utils._Input.InputType_Impl_.fromRight(20)) ? $char.toUpperCase() : $char.toLowerCase(), com.haxepunk.utils.Input.keyString += $char
      }
      com.haxepunk.utils.Input._key.get(code) || (com.haxepunk.utils.Input._key.set(code, !0), com.haxepunk.utils.Input._keyNum++, com.haxepunk.utils.Input._press[com.haxepunk.utils.Input._pressNum++] = code)
    }
  }, com.haxepunk.utils.Input.onKeyUp = function(e) {
    var code = com.haxepunk.utils.Input.keyCode(e); - 1 != code && com.haxepunk.utils.Input._key.get(code) && (com.haxepunk.utils.Input._key.set(code, !1), com.haxepunk.utils.Input._keyNum--, com.haxepunk.utils.Input._release[com.haxepunk.utils.Input._releaseNum++] = code)
  }, com.haxepunk.utils.Input.keyCode = function(e) {
    return e.keyCode
  }, com.haxepunk.utils.Input.onMouseDown = function() {
    com.haxepunk.utils.Input.mouseDown || (com.haxepunk.utils.Input.mouseDown = !0, com.haxepunk.utils.Input.mouseUp = !1, com.haxepunk.utils.Input.mousePressed = !0)
  }, com.haxepunk.utils.Input.onMouseUp = function() {
    com.haxepunk.utils.Input.mouseDown = !1, com.haxepunk.utils.Input.mouseUp = !0, com.haxepunk.utils.Input.mouseReleased = !0
  }, com.haxepunk.utils.Input.onMouseWheel = function(e) {
    com.haxepunk.utils.Input.mouseWheel = !0, com.haxepunk.utils.Input._mouseWheelDelta = e.delta
  }, com.haxepunk.utils.Input.onTouchBegin = function(e) {
    var touchPoint = new com.haxepunk.utils.Touch(e.stageX / com.haxepunk.HXP.screen.fullScaleX, e.stageY / com.haxepunk.HXP.screen.fullScaleY, e.touchPointID);
    com.haxepunk.utils.Input._touches.set(e.touchPointID, touchPoint), com.haxepunk.utils.Input._touchOrder.push(e.touchPointID)
  }, com.haxepunk.utils.Input.onTouchMove = function(e) {
    var point = com.haxepunk.utils.Input._touches.get(e.touchPointID);
    point.x = e.stageX / com.haxepunk.HXP.screen.fullScaleX, point.y = e.stageY / com.haxepunk.HXP.screen.fullScaleY
  }, com.haxepunk.utils.Input.onTouchEnd = function(e) {
    com.haxepunk.utils.Input._touches.get(e.touchPointID).released = !0
  }, com.haxepunk.utils.JoyButtonState = $hxClasses["com.haxepunk.utils.JoyButtonState"] = {
    __ename__: !0,
    __constructs__: ["BUTTON_ON", "BUTTON_OFF", "BUTTON_PRESSED", "BUTTON_RELEASED"]
  }, com.haxepunk.utils.JoyButtonState.BUTTON_ON = ["BUTTON_ON", 0], com.haxepunk.utils.JoyButtonState.BUTTON_ON.toString = $estr, com.haxepunk.utils.JoyButtonState.BUTTON_ON.__enum__ = com.haxepunk.utils.JoyButtonState, com.haxepunk.utils.JoyButtonState.BUTTON_OFF = ["BUTTON_OFF", 1], com.haxepunk.utils.JoyButtonState.BUTTON_OFF.toString = $estr, com.haxepunk.utils.JoyButtonState.BUTTON_OFF.__enum__ = com.haxepunk.utils.JoyButtonState, com.haxepunk.utils.JoyButtonState.BUTTON_PRESSED = ["BUTTON_PRESSED", 2], com.haxepunk.utils.JoyButtonState.BUTTON_PRESSED.toString = $estr, com.haxepunk.utils.JoyButtonState.BUTTON_PRESSED.__enum__ = com.haxepunk.utils.JoyButtonState, com.haxepunk.utils.JoyButtonState.BUTTON_RELEASED = ["BUTTON_RELEASED", 3], com.haxepunk.utils.JoyButtonState.BUTTON_RELEASED.toString = $estr, com.haxepunk.utils.JoyButtonState.BUTTON_RELEASED.__enum__ = com.haxepunk.utils.JoyButtonState, com.haxepunk.utils.JoyButtonState.__empty_constructs__ = [com.haxepunk.utils.JoyButtonState.BUTTON_ON, com.haxepunk.utils.JoyButtonState.BUTTON_OFF, com.haxepunk.utils.JoyButtonState.BUTTON_PRESSED, com.haxepunk.utils.JoyButtonState.BUTTON_RELEASED], com.haxepunk.utils.Joystick = function() {
    this.buttons = new haxe.ds.IntMap, this.ball = new openfl.geom.Point(0, 0), this.axis = new Array, this.hat = new openfl.geom.Point(0, 0), this.set_connected(!1), this._timeout = 0
  }, $hxClasses["com.haxepunk.utils.Joystick"] = com.haxepunk.utils.Joystick, com.haxepunk.utils.Joystick.__name__ = ["com", "haxepunk", "utils", "Joystick"], com.haxepunk.utils.Joystick.prototype = {
    buttons: null,
    axis: null,
    hat: null,
    ball: null,
    update: function() {
      this._timeout -= com.haxepunk.HXP.elapsed;
      for (var $it0 = this.buttons.keys(); $it0.hasNext();) {
        var button = $it0.next(),
          _g = this.buttons.get(button);
        if (null != _g) switch (_g[1]) {
          case 2:
            this.buttons.set(button, com.haxepunk.utils.JoyButtonState.BUTTON_ON);
            break;
          case 3:
            this.buttons.set(button, com.haxepunk.utils.JoyButtonState.BUTTON_OFF)
        }
      }
    },
    pressed: function(button) {
      if (null == button)
        for (var $it0 = this.buttons.keys(); $it0.hasNext();) {
          var k = $it0.next();
          if (this.buttons.get(k) == com.haxepunk.utils.JoyButtonState.BUTTON_PRESSED) return !0
        } else if (this.buttons.exists(button)) return this.buttons.get(button) == com.haxepunk.utils.JoyButtonState.BUTTON_PRESSED;
      return !1
    },
    released: function(button) {
      if (null == button)
        for (var $it0 = this.buttons.keys(); $it0.hasNext();) {
          var k = $it0.next();
          if (this.buttons.get(k) == com.haxepunk.utils.JoyButtonState.BUTTON_RELEASED) return !0
        } else if (this.buttons.exists(button)) return this.buttons.get(button) == com.haxepunk.utils.JoyButtonState.BUTTON_RELEASED;
      return !1
    },
    check: function(button) {
      if (null == button)
        for (var $it0 = this.buttons.keys(); $it0.hasNext();) {
          var k = $it0.next(),
            b = this.buttons.get(k);
          if (b != com.haxepunk.utils.JoyButtonState.BUTTON_OFF && b != com.haxepunk.utils.JoyButtonState.BUTTON_RELEASED) return !0
        } else if (this.buttons.exists(button)) {
          var b1 = this.buttons.get(button);
          return b1 != com.haxepunk.utils.JoyButtonState.BUTTON_OFF && b1 != com.haxepunk.utils.JoyButtonState.BUTTON_RELEASED
        }
      return !1
    },
    getAxis: function(a) {
      return 0 > a || a >= this.axis.length ? 0 : Math.abs(this.axis[a]) < .15 ? 0 : this.axis[a]
    },
    get_connected: function() {
      return this._timeout > 0
    },
    set_connected: function(value) {
      return this._timeout = value ? 3 : 0, value
    },
    _timeout: null,
    __class__: com.haxepunk.utils.Joystick,
    __properties__: {
      set_connected: "set_connected",
      get_connected: "get_connected"
    }
  }, com.haxepunk.utils.OUYA_GAMEPAD = function() {}, $hxClasses["com.haxepunk.utils.OUYA_GAMEPAD"] = com.haxepunk.utils.OUYA_GAMEPAD, com.haxepunk.utils.OUYA_GAMEPAD.__name__ = ["com", "haxepunk", "utils", "OUYA_GAMEPAD"], com.haxepunk.utils.XBOX_GAMEPAD = function() {}, $hxClasses["com.haxepunk.utils.XBOX_GAMEPAD"] = com.haxepunk.utils.XBOX_GAMEPAD, com.haxepunk.utils.XBOX_GAMEPAD.__name__ = ["com", "haxepunk", "utils", "XBOX_GAMEPAD"], com.haxepunk.utils.PS3_GAMEPAD = function() {}, $hxClasses["com.haxepunk.utils.PS3_GAMEPAD"] = com.haxepunk.utils.PS3_GAMEPAD, com.haxepunk.utils.PS3_GAMEPAD.__name__ = ["com", "haxepunk", "utils", "PS3_GAMEPAD"], com.haxepunk.utils.Key = function() {}, $hxClasses["com.haxepunk.utils.Key"] = com.haxepunk.utils.Key, com.haxepunk.utils.Key.__name__ = ["com", "haxepunk", "utils", "Key"], com.haxepunk.utils.Key.nameOfKey = function($char) {
    if (-1 == $char) return "";
    if ($char >= 65 && 90 >= $char) return String.fromCharCode($char);
    if ($char >= 112 && 126 >= $char) return "F" + Std.string($char - 111);
    if ($char >= 96 && 105 >= $char) return "NUMPAD " + Std.string($char - 96);
    switch ($char) {
      case 37:
        return "LEFT";
      case 38:
        return "UP";
      case 39:
        return "RIGHT";
      case 40:
        return "DOWN";
      case 219:
        return "{";
      case 221:
        return "}";
      case 192:
        return "~";
      case 13:
        return "ENTER";
      case 17:
        return "CONTROL";
      case 32:
        return "SPACE";
      case 16:
        return "SHIFT";
      case 8:
        return "BACKSPACE";
      case 20:
        return "CAPS LOCK";
      case 46:
        return "DELETE";
      case 35:
        return "END";
      case 27:
        return "ESCAPE";
      case 36:
        return "HOME";
      case 45:
        return "INSERT";
      case 9:
        return "TAB";
      case 34:
        return "PAGE DOWN";
      case 33:
        return "PAGE UP";
      case 107:
        return "NUMPAD ADD";
      case 110:
        return "NUMPAD DECIMAL";
      case 111:
        return "NUMPAD DIVIDE";
      case 108:
        return "NUMPAD ENTER";
      case 106:
        return "NUMPAD MULTIPLY";
      case 109:
        return "NUMPAD SUBTRACT"
    }
    return String.fromCharCode($char)
  }, com.haxepunk.utils.Touch = function(x, y, id) {
    this.released = !1, this.startX = this.x = x, this.startY = this.y = y, this.id = id, this.time = 0
  }, $hxClasses["com.haxepunk.utils.Touch"] = com.haxepunk.utils.Touch, com.haxepunk.utils.Touch.__name__ = ["com", "haxepunk", "utils", "Touch"], com.haxepunk.utils.Touch.prototype = {
    id: null,
    x: null,
    y: null,
    startX: null,
    startY: null,
    time: null,
    get_sceneX: function() {
      return this.x + com.haxepunk.HXP.camera.x
    },
    get_sceneY: function() {
      return this.y + com.haxepunk.HXP.camera.y
    },
    get_pressed: function() {
      return 0 == this.time
    },
    released: null,
    update: function() {
      this.time += com.haxepunk.HXP.elapsed
    },
    __class__: com.haxepunk.utils.Touch,
    __properties__: {
      get_pressed: "get_pressed",
      get_sceneY: "get_sceneY",
      get_sceneX: "get_sceneX"
    }
  };
  var haxe = {};
  haxe.StackItem = $hxClasses["haxe.StackItem"] = {
    __ename__: !0,
    __constructs__: ["CFunction", "Module", "FilePos", "Method", "LocalFunction"]
  }, haxe.StackItem.CFunction = ["CFunction", 0], haxe.StackItem.CFunction.toString = $estr, haxe.StackItem.CFunction.__enum__ = haxe.StackItem, haxe.StackItem.Module = function(m) {
    var $x = ["Module", 1, m];
    return $x.__enum__ = haxe.StackItem, $x.toString = $estr, $x
  }, haxe.StackItem.FilePos = function(s, file, line) {
    var $x = ["FilePos", 2, s, file, line];
    return $x.__enum__ = haxe.StackItem, $x.toString = $estr, $x
  }, haxe.StackItem.Method = function(classname, method) {
    var $x = ["Method", 3, classname, method];
    return $x.__enum__ = haxe.StackItem, $x.toString = $estr, $x
  }, haxe.StackItem.LocalFunction = function(v) {
    var $x = ["LocalFunction", 4, v];
    return $x.__enum__ = haxe.StackItem, $x.toString = $estr, $x
  }, haxe.StackItem.__empty_constructs__ = [haxe.StackItem.CFunction], haxe.CallStack = function() {}, $hxClasses["haxe.CallStack"] = haxe.CallStack, haxe.CallStack.__name__ = ["haxe", "CallStack"], haxe.CallStack.exceptionStack = function() {
    return []
  }, haxe.CallStack.toString = function(stack) {
    for (var b = new StringBuf, _g = 0; _g < stack.length;) {
      var s = stack[_g];
      ++_g, b.b += "\nCalled from ", haxe.CallStack.itemToString(b, s)
    }
    return b.b
  }, haxe.CallStack.itemToString = function(b, s) {
    switch (s[1]) {
      case 0:
        b.b += "a C function";
        break;
      case 1:
        var m = s[2];
        b.b += "module ", b.b += null == m ? "null" : "" + m;
        break;
      case 2:
        var line = s[4],
          file = s[3],
          s1 = s[2];
        null != s1 && (haxe.CallStack.itemToString(b, s1), b.b += " ("), b.b += null == file ? "null" : "" + file, b.b += " line ", b.b += null == line ? "null" : "" + line, null != s1 && (b.b += ")");
        break;
      case 3:
        var meth = s[3],
          cname = s[2];
        b.b += null == cname ? "null" : "" + cname, b.b += ".", b.b += null == meth ? "null" : "" + meth;
        break;
      case 4:
        var n = s[2];
        b.b += "local function #", b.b += null == n ? "null" : "" + n
    }
  }, haxe.Log = function() {}, $hxClasses["haxe.Log"] = haxe.Log, haxe.Log.__name__ = ["haxe", "Log"], haxe.Log.trace = function(v, infos) {
    js.Boot.__trace(v, infos)
  }, haxe.Timer = function(time_ms) {
    var me = this;
    this.id = window.setInterval(function() {
      me.run()
    }, time_ms)
  }, $hxClasses["haxe.Timer"] = haxe.Timer, haxe.Timer.__name__ = ["haxe", "Timer"], haxe.Timer.delay = function(f, time_ms) {
    var t = new haxe.Timer(time_ms);
    return t.run = function() {
      t.stop(), f()
    }, t
  }, haxe.Timer.measure = function(f, pos) {
    var t0 = haxe.Timer.stamp(),
      r = f();
    return haxe.Log.trace(haxe.Timer.stamp() - t0 + "s", pos), r
  }, haxe.Timer.stamp = function() {
    return (new Date).getTime() / 1e3
  }, haxe.Timer.prototype = {
    id: null,
    stop: function() {
      null != this.id && (window.clearInterval(this.id), this.id = null)
    },
    run: function() {},
    __class__: haxe.Timer
  }, haxe.Unserializer = function(buf) {
    this.buf = buf, this.length = buf.length, this.pos = 0, this.scache = new Array, this.cache = new Array;
    var r = haxe.Unserializer.DEFAULT_RESOLVER;
    null == r && (r = Type, haxe.Unserializer.DEFAULT_RESOLVER = r), this.setResolver(r)
  }, $hxClasses["haxe.Unserializer"] = haxe.Unserializer, haxe.Unserializer.__name__ = ["haxe", "Unserializer"], haxe.Unserializer.initCodes = function() {
    for (var codes = new Array, _g1 = 0, _g = haxe.Unserializer.BASE64.length; _g > _g1;) {
      var i = _g1++;
      codes[haxe.Unserializer.BASE64.charCodeAt(i)] = i
    }
    return codes
  }, haxe.Unserializer.prototype = {
    buf: null,
    pos: null,
    length: null,
    cache: null,
    scache: null,
    resolver: null,
    setResolver: function(r) {
      this.resolver = null == r ? {
        resolveClass: function() {
          return null
        },
        resolveEnum: function() {
          return null
        }
      } : r
    },
    get: function(p) {
      return this.buf.charCodeAt(p)
    },
    readDigits: function() {
      for (var k = 0, s = !1, fpos = this.pos;;) {
        var c = this.buf.charCodeAt(this.pos);
        if (c != c) break;
        if (45 != c) {
          if (48 > c || c > 57) break;
          k = 10 * k + (c - 48), this.pos++
        } else {
          if (this.pos != fpos) break;
          s = !0, this.pos++
        }
      }
      return s && (k *= -1), k
    },
    unserializeObject: function(o) {
      for (;;) {
        if (this.pos >= this.length) throw "Invalid object";
        if (103 == this.buf.charCodeAt(this.pos)) break;
        var k = this.unserialize();
        if ("string" != typeof k) throw "Invalid object key";
        var v = this.unserialize();
        o[k] = v
      }
      this.pos++
    },
    unserializeEnum: function(edecl, tag) {
      if (58 != this.get(this.pos++)) throw "Invalid enum format";
      var nargs = this.readDigits();
      if (0 == nargs) return Type.createEnum(edecl, tag);
      for (var args = new Array; nargs-- > 0;) args.push(this.unserialize());
      return Type.createEnum(edecl, tag, args)
    },
    unserialize: function() {
      var _g = this.get(this.pos++);
      switch (_g) {
        case 110:
          return null;
        case 116:
          return !0;
        case 102:
          return !1;
        case 122:
          return 0;
        case 105:
          return this.readDigits();
        case 100:
          for (var p1 = this.pos;;) {
            var c = this.buf.charCodeAt(this.pos);
            if (!(c >= 43 && 58 > c || 101 == c || 69 == c)) break;
            this.pos++
          }
          return Std.parseFloat(HxOverrides.substr(this.buf, p1, this.pos - p1));
        case 121:
          var len = this.readDigits();
          if (58 != this.get(this.pos++) || this.length - this.pos < len) throw "Invalid string length";
          var s = HxOverrides.substr(this.buf, this.pos, len);
          return this.pos += len, s = decodeURIComponent(s.split("+").join(" ")), this.scache.push(s), s;
        case 107:
          return 0 / 0;
        case 109:
          return -1 / 0;
        case 112:
          return 1 / 0;
        case 97:
          var a = (this.buf, new Array);
          for (this.cache.push(a);;) {
            var c1 = this.buf.charCodeAt(this.pos);
            if (104 == c1) {
              this.pos++;
              break
            }
            if (117 == c1) {
              this.pos++;
              var n = this.readDigits();
              a[a.length + n - 1] = null
            } else a.push(this.unserialize())
          }
          return a;
        case 111:
          var o = {};
          return this.cache.push(o), this.unserializeObject(o), o;
        case 114:
          var n1 = this.readDigits();
          if (0 > n1 || n1 >= this.cache.length) throw "Invalid reference";
          return this.cache[n1];
        case 82:
          var n2 = this.readDigits();
          if (0 > n2 || n2 >= this.scache.length) throw "Invalid string reference";
          return this.scache[n2];
        case 120:
          throw this.unserialize();
        case 99:
          var name = this.unserialize(),
            cl = this.resolver.resolveClass(name);
          if (null == cl) throw "Class not found " + name;
          var o1 = Type.createEmptyInstance(cl);
          return this.cache.push(o1), this.unserializeObject(o1), o1;
        case 119:
          var name1 = this.unserialize(),
            edecl = this.resolver.resolveEnum(name1);
          if (null == edecl) throw "Enum not found " + name1;
          var e = this.unserializeEnum(edecl, this.unserialize());
          return this.cache.push(e), e;
        case 106:
          var name2 = this.unserialize(),
            edecl1 = this.resolver.resolveEnum(name2);
          if (null == edecl1) throw "Enum not found " + name2;
          this.pos++;
          var index = this.readDigits(),
            tag = Type.getEnumConstructs(edecl1)[index];
          if (null == tag) throw "Unknown enum index " + name2 + "@" + index;
          var e1 = this.unserializeEnum(edecl1, tag);
          return this.cache.push(e1), e1;
        case 108:
          var l = new List;
          this.cache.push(l);
          for (this.buf; 104 != this.buf.charCodeAt(this.pos);) l.add(this.unserialize());
          return this.pos++, l;
        case 98:
          var h = new haxe.ds.StringMap;
          this.cache.push(h);
          for (this.buf; 104 != this.buf.charCodeAt(this.pos);) {
            var s1 = this.unserialize();
            h.set(s1, this.unserialize())
          }
          return this.pos++, h;
        case 113:
          var h1 = new haxe.ds.IntMap;
          this.cache.push(h1);
          for (var c2 = (this.buf, this.get(this.pos++)); 58 == c2;) {
            var i = this.readDigits();
            h1.set(i, this.unserialize()), c2 = this.get(this.pos++)
          }
          if (104 != c2) throw "Invalid IntMap format";
          return h1;
        case 77:
          var h2 = new haxe.ds.ObjectMap;
          this.cache.push(h2);
          for (this.buf; 104 != this.buf.charCodeAt(this.pos);) {
            var s2 = this.unserialize();
            h2.set(s2, this.unserialize())
          }
          return this.pos++, h2;
        case 118:
          var d, s3 = HxOverrides.substr(this.buf, this.pos, 19);
          return d = HxOverrides.strDate(s3), this.cache.push(d), this.pos += 19, d;
        case 115:
          var len1 = this.readDigits(),
            buf5 = this.buf;
          if (58 != this.get(this.pos++) || this.length - this.pos < len1) throw "Invalid bytes length";
          var codes = haxe.Unserializer.CODES;
          null == codes && (codes = haxe.Unserializer.initCodes(), haxe.Unserializer.CODES = codes);
          var size, i1 = this.pos,
            rest = 3 & len1;
          size = 3 * (len1 >> 2) + (rest >= 2 ? rest - 1 : 0);
          for (var max = i1 + (len1 - rest), bytes = haxe.io.Bytes.alloc(size), bpos = 0; max > i1;) {
            var c11 = codes[StringTools.fastCodeAt(buf5, i1++)],
              c21 = codes[StringTools.fastCodeAt(buf5, i1++)];
            bytes.set(bpos++, c11 << 2 | c21 >> 4);
            var c3 = codes[StringTools.fastCodeAt(buf5, i1++)];
            bytes.set(bpos++, c21 << 4 | c3 >> 2);
            var c4 = codes[StringTools.fastCodeAt(buf5, i1++)];
            bytes.set(bpos++, c3 << 6 | c4)
          }
          if (rest >= 2) {
            var c12 = codes[StringTools.fastCodeAt(buf5, i1++)],
              c22 = codes[StringTools.fastCodeAt(buf5, i1++)];
            if (bytes.set(bpos++, c12 << 2 | c22 >> 4), 3 == rest) {
              var c31 = codes[StringTools.fastCodeAt(buf5, i1++)];
              bytes.set(bpos++, c22 << 4 | c31 >> 2)
            }
          }
          return this.pos += len1, this.cache.push(bytes), bytes;
        case 67:
          var name3 = this.unserialize(),
            cl1 = this.resolver.resolveClass(name3);
          if (null == cl1) throw "Class not found " + name3;
          var o2 = Type.createEmptyInstance(cl1);
          if (this.cache.push(o2), o2.hxUnserialize(this), 103 != this.get(this.pos++)) throw "Invalid custom data";
          return o2
      }
      throw this.pos--, "Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos
    },
    __class__: haxe.Unserializer
  }, haxe.crypto = {}, haxe.crypto.BaseCode = function(base) {
    for (var len = base.length, nbits = 1; len > 1 << nbits;) nbits++;
    if (nbits > 8 || len != 1 << nbits) throw "BaseCode : base length must be a power of two.";
    this.base = base, this.nbits = nbits
  }, $hxClasses["haxe.crypto.BaseCode"] = haxe.crypto.BaseCode, haxe.crypto.BaseCode.__name__ = ["haxe", "crypto", "BaseCode"], haxe.crypto.BaseCode.prototype = {
    base: null,
    nbits: null,
    encodeBytes: function(b) {
      for (var nbits = this.nbits, base = this.base, size = 8 * b.length / nbits | 0, out = haxe.io.Bytes.alloc(size + (8 * b.length % nbits == 0 ? 0 : 1)), buf = 0, curbits = 0, mask = (1 << nbits) - 1, pin = 0, pout = 0; size > pout;) {
        for (; nbits > curbits;) curbits += 8, buf <<= 8, buf |= b.get(pin++);
        curbits -= nbits, out.set(pout++, base.b[buf >> curbits & mask])
      }
      return curbits > 0 && out.set(pout++, base.b[buf << nbits - curbits & mask]), out
    },
    __class__: haxe.crypto.BaseCode
  }, haxe.ds = {}, haxe.ds.BalancedTree = function() {}, $hxClasses["haxe.ds.BalancedTree"] = haxe.ds.BalancedTree, haxe.ds.BalancedTree.__name__ = ["haxe", "ds", "BalancedTree"], haxe.ds.BalancedTree.prototype = {
    root: null,
    set: function(key, value) {
      this.root = this.setLoop(key, value, this.root)
    },
    get: function(key) {
      for (var node = this.root; null != node;) {
        var c = this.compare(key, node.key);
        if (0 == c) return node.value;
        node = 0 > c ? node.left : node.right
      }
      return null
    },
    setLoop: function(k, v, node) {
      if (null == node) return new haxe.ds.TreeNode(null, k, v, null);
      var c = this.compare(k, node.key);
      if (0 == c) return new haxe.ds.TreeNode(node.left, k, v, node.right, null == node ? 0 : node._height);
      if (0 > c) {
        var nl = this.setLoop(k, v, node.left);
        return this.balance(nl, node.key, node.value, node.right)
      }
      var nr = this.setLoop(k, v, node.right);
      return this.balance(node.left, node.key, node.value, nr)
    },
    balance: function(l, k, v, r) {
      var hl;
      hl = null == l ? 0 : l._height;
      var hr;
      return hr = null == r ? 0 : r._height, hl > hr + 2 ? function() {
        var $r, _this = l.left;
        return $r = null == _this ? 0 : _this._height
      }(this) >= function() {
        var $r, _this1 = l.right;
        return $r = null == _this1 ? 0 : _this1._height
      }(this) ? new haxe.ds.TreeNode(l.left, l.key, l.value, new haxe.ds.TreeNode(l.right, k, v, r)) : new haxe.ds.TreeNode(new haxe.ds.TreeNode(l.left, l.key, l.value, l.right.left), l.right.key, l.right.value, new haxe.ds.TreeNode(l.right.right, k, v, r)) : hr > hl + 2 ? function() {
        var $r, _this2 = r.right;
        return $r = null == _this2 ? 0 : _this2._height
      }(this) > function() {
        var $r, _this3 = r.left;
        return $r = null == _this3 ? 0 : _this3._height
      }(this) ? new haxe.ds.TreeNode(new haxe.ds.TreeNode(l, k, v, r.left), r.key, r.value, r.right) : new haxe.ds.TreeNode(new haxe.ds.TreeNode(l, k, v, r.left.left), r.left.key, r.left.value, new haxe.ds.TreeNode(r.left.right, r.key, r.value, r.right)) : new haxe.ds.TreeNode(l, k, v, r, (hl > hr ? hl : hr) + 1)
    },
    compare: function(k1, k2) {
      return Reflect.compare(k1, k2)
    },
    __class__: haxe.ds.BalancedTree
  }, haxe.ds.TreeNode = function(l, k, v, r, h) {
    null == h && (h = -1), this.left = l, this.key = k, this.value = v, this.right = r, this._height = -1 == h ? (function($this) {
      var $r, _this = $this.left;
      return $r = null == _this ? 0 : _this._height
    }(this) > function($this) {
      var $r, _this1 = $this.right;
      return $r = null == _this1 ? 0 : _this1._height
    }(this) ? function($this) {
      var $r, _this2 = $this.left;
      return $r = null == _this2 ? 0 : _this2._height
    }(this) : function($this) {
      var $r, _this3 = $this.right;
      return $r = null == _this3 ? 0 : _this3._height
    }(this)) + 1 : h
  }, $hxClasses["haxe.ds.TreeNode"] = haxe.ds.TreeNode, haxe.ds.TreeNode.__name__ = ["haxe", "ds", "TreeNode"], haxe.ds.TreeNode.prototype = {
    left: null,
    right: null,
    key: null,
    value: null,
    _height: null,
    __class__: haxe.ds.TreeNode
  }, haxe.ds.EnumValueMap = function() {
    haxe.ds.BalancedTree.call(this)
  }, $hxClasses["haxe.ds.EnumValueMap"] = haxe.ds.EnumValueMap, haxe.ds.EnumValueMap.__name__ = ["haxe", "ds", "EnumValueMap"], haxe.ds.EnumValueMap.__interfaces__ = [IMap], haxe.ds.EnumValueMap.__super__ = haxe.ds.BalancedTree, haxe.ds.EnumValueMap.prototype = $extend(haxe.ds.BalancedTree.prototype, {
    compare: function(k1, k2) {
      var d = k1[1] - k2[1];
      if (0 != d) return d;
      var p1 = k1.slice(2),
        p2 = k2.slice(2);
      return 0 == p1.length && 0 == p2.length ? 0 : this.compareArgs(p1, p2)
    },
    compareArgs: function(a1, a2) {
      var ld = a1.length - a2.length;
      if (0 != ld) return ld;
      for (var _g1 = 0, _g = a1.length; _g > _g1;) {
        var i = _g1++,
          d = this.compareArg(a1[i], a2[i]);
        if (0 != d) return d
      }
      return 0
    },
    compareArg: function(v1, v2) {
      return Reflect.isEnumValue(v1) && Reflect.isEnumValue(v2) ? this.compare(v1, v2) : v1 instanceof Array && null == v1.__enum__ && v2 instanceof Array && null == v2.__enum__ ? this.compareArgs(v1, v2) : Reflect.compare(v1, v2)
    },
    __class__: haxe.ds.EnumValueMap
  }), haxe.ds.IntMap = function() {
    this.h = {}
  }, $hxClasses["haxe.ds.IntMap"] = haxe.ds.IntMap, haxe.ds.IntMap.__name__ = ["haxe", "ds", "IntMap"], haxe.ds.IntMap.__interfaces__ = [IMap], haxe.ds.IntMap.prototype = {
    h: null,
    set: function(key, value) {
      this.h[key] = value
    },
    get: function(key) {
      return this.h[key]
    },
    exists: function(key) {
      return this.h.hasOwnProperty(key)
    },
    remove: function(key) {
      return this.h.hasOwnProperty(key) ? (delete this.h[key], !0) : !1
    },
    keys: function() {
      var a = [];
      for (var key in this.h) this.h.hasOwnProperty(key) && a.push(0 | key);
      return HxOverrides.iter(a)
    },
    iterator: function() {
      return {
        ref: this.h,
        it: this.keys(),
        hasNext: function() {
          return this.it.hasNext()
        },
        next: function() {
          var i = this.it.next();
          return this.ref[i]
        }
      }
    },
    __class__: haxe.ds.IntMap
  }, haxe.ds.ObjectMap = function() {
    this.h = {}, this.h.__keys__ = {}
  }, $hxClasses["haxe.ds.ObjectMap"] = haxe.ds.ObjectMap, haxe.ds.ObjectMap.__name__ = ["haxe", "ds", "ObjectMap"], haxe.ds.ObjectMap.__interfaces__ = [IMap], haxe.ds.ObjectMap.prototype = {
    h: null,
    set: function(key, value) {
      var id = key.__id__ || (key.__id__ = ++haxe.ds.ObjectMap.count);
      this.h[id] = value, this.h.__keys__[id] = key
    },
    get: function(key) {
      return this.h[key.__id__]
    },
    __class__: haxe.ds.ObjectMap
  }, haxe.ds.StringMap = function() {
    this.h = {}
  }, $hxClasses["haxe.ds.StringMap"] = haxe.ds.StringMap, haxe.ds.StringMap.__name__ = ["haxe", "ds", "StringMap"], haxe.ds.StringMap.__interfaces__ = [IMap], haxe.ds.StringMap.prototype = {
    h: null,
    set: function(key, value) {
      this.h["$" + key] = value
    },
    get: function(key) {
      return this.h["$" + key]
    },
    exists: function(key) {
      return this.h.hasOwnProperty("$" + key)
    },
    remove: function(key) {
      return key = "$" + key, this.h.hasOwnProperty(key) ? (delete this.h[key], !0) : !1
    },
    keys: function() {
      var a = [];
      for (var key in this.h) this.h.hasOwnProperty(key) && a.push(key.substr(1));
      return HxOverrides.iter(a)
    },
    iterator: function() {
      return {
        ref: this.h,
        it: this.keys(),
        hasNext: function() {
          return this.it.hasNext()
        },
        next: function() {
          var i = this.it.next();
          return this.ref["$" + i]
        }
      }
    },
    __class__: haxe.ds.StringMap
  }, haxe.ds._Vector = {}, haxe.ds._Vector.Vector_Impl_ = function() {}, $hxClasses["haxe.ds._Vector.Vector_Impl_"] = haxe.ds._Vector.Vector_Impl_, haxe.ds._Vector.Vector_Impl_.__name__ = ["haxe", "ds", "_Vector", "Vector_Impl_"], haxe.ds._Vector.Vector_Impl_.blit = function(src, srcPos, dest, destPos, len) {
    for (var _g = 0; len > _g;) {
      var i = _g++;
      dest[destPos + i] = src[srcPos + i]
    }
  }, haxe.ds._Vector.Vector_Impl_.toArray = function(this1) {
    for (var a = new Array, len = this1.length, _g = 0; len > _g;) {
      var i = _g++;
      a[i] = this1[i]
    }
    return a
  }, haxe.io = {}, haxe.io.Bytes = function(length, b) {
    this.length = length, this.b = b
  }, $hxClasses["haxe.io.Bytes"] = haxe.io.Bytes, haxe.io.Bytes.__name__ = ["haxe", "io", "Bytes"], haxe.io.Bytes.alloc = function(length) {
    for (var a = new Array, _g = 0; length > _g;) {
      {
        _g++
      }
      a.push(0)
    }
    return new haxe.io.Bytes(length, a)
  }, haxe.io.Bytes.ofString = function(s) {
    for (var a = new Array, i = 0; i < s.length;) {
      var c = StringTools.fastCodeAt(s, i++);
      c >= 55296 && 56319 >= c && (c = c - 55232 << 10 | 1023 & StringTools.fastCodeAt(s, i++)), 127 >= c ? a.push(c) : 2047 >= c ? (a.push(192 | c >> 6), a.push(128 | 63 & c)) : 65535 >= c ? (a.push(224 | c >> 12), a.push(128 | c >> 6 & 63), a.push(128 | 63 & c)) : (a.push(240 | c >> 18), a.push(128 | c >> 12 & 63), a.push(128 | c >> 6 & 63), a.push(128 | 63 & c))
    }
    return new haxe.io.Bytes(a.length, a)
  }, haxe.io.Bytes.ofData = function(b) {
    return new haxe.io.Bytes(b.length, b)
  }, haxe.io.Bytes.prototype = {
    length: null,
    b: null,
    get: function(pos) {
      return this.b[pos]
    },
    set: function(pos, v) {
      this.b[pos] = 255 & v
    },
    getString: function(pos, len) {
      if (0 > pos || 0 > len || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
      for (var s = "", b = this.b, fcc = String.fromCharCode, i = pos, max = pos + len; max > i;) {
        var c = b[i++];
        if (128 > c) {
          if (0 == c) break;
          s += fcc(c)
        } else if (224 > c) s += fcc((63 & c) << 6 | 127 & b[i++]);
        else if (240 > c) {
          var c2 = b[i++];
          s += fcc((31 & c) << 12 | (127 & c2) << 6 | 127 & b[i++])
        } else {
          var c21 = b[i++],
            c3 = b[i++],
            u = (15 & c) << 18 | (127 & c21) << 12 | (127 & c3) << 6 | 127 & b[i++];
          s += fcc((u >> 10) + 55232), s += fcc(1023 & u | 56320)
        }
      }
      return s
    },
    toString: function() {
      return this.getString(0, this.length)
    },
    __class__: haxe.io.Bytes
  }, haxe.io.Eof = function() {}, $hxClasses["haxe.io.Eof"] = haxe.io.Eof, haxe.io.Eof.__name__ = ["haxe", "io", "Eof"], haxe.io.Eof.prototype = {
    toString: function() {
      return "Eof"
    },
    __class__: haxe.io.Eof
  }, haxe.io.Error = $hxClasses["haxe.io.Error"] = {
    __ename__: !0,
    __constructs__: ["Blocked", "Overflow", "OutsideBounds", "Custom"]
  }, haxe.io.Error.Blocked = ["Blocked", 0], haxe.io.Error.Blocked.toString = $estr, haxe.io.Error.Blocked.__enum__ = haxe.io.Error, haxe.io.Error.Overflow = ["Overflow", 1], haxe.io.Error.Overflow.toString = $estr, haxe.io.Error.Overflow.__enum__ = haxe.io.Error, haxe.io.Error.OutsideBounds = ["OutsideBounds", 2], haxe.io.Error.OutsideBounds.toString = $estr, haxe.io.Error.OutsideBounds.__enum__ = haxe.io.Error, haxe.io.Error.Custom = function(e) {
    var $x = ["Custom", 3, e];
    return $x.__enum__ = haxe.io.Error, $x.toString = $estr, $x
  }, haxe.io.Error.__empty_constructs__ = [haxe.io.Error.Blocked, haxe.io.Error.Overflow, haxe.io.Error.OutsideBounds], haxe.io.Path = function(path) {
    switch (path) {
      case ".":
      case "..":
        return this.dir = path, void(this.file = "")
    }
    var c1 = path.lastIndexOf("/"),
      c2 = path.lastIndexOf("\\");
    c2 > c1 ? (this.dir = HxOverrides.substr(path, 0, c2), path = HxOverrides.substr(path, c2 + 1, null), this.backslash = !0) : c1 > c2 ? (this.dir = HxOverrides.substr(path, 0, c1), path = HxOverrides.substr(path, c1 + 1, null)) : this.dir = null;
    var cp = path.lastIndexOf("."); - 1 != cp ? (this.ext = HxOverrides.substr(path, cp + 1, null), this.file = HxOverrides.substr(path, 0, cp)) : (this.ext = null, this.file = path)
  }, $hxClasses["haxe.io.Path"] = haxe.io.Path, haxe.io.Path.__name__ = ["haxe", "io", "Path"], haxe.io.Path.withoutExtension = function(path) {
    var s = new haxe.io.Path(path);
    return s.ext = null, s.toString()
  }, haxe.io.Path.prototype = {
    dir: null,
    file: null,
    ext: null,
    backslash: null,
    toString: function() {
      return (null == this.dir ? "" : this.dir + (this.backslash ? "\\" : "/")) + this.file + (null == this.ext ? "" : "." + this.ext)
    },
    __class__: haxe.io.Path
  }, haxe.xml = {}, haxe.xml.Parser = function() {}, $hxClasses["haxe.xml.Parser"] = haxe.xml.Parser, haxe.xml.Parser.__name__ = ["haxe", "xml", "Parser"], haxe.xml.Parser.parse = function(str) {
    var doc = Xml.createDocument();
    return haxe.xml.Parser.doParse(str, 0, doc), doc
  }, haxe.xml.Parser.doParse = function(str, p, parent) {
    null == p && (p = 0);
    for (var xml = null, state = 1, next = 1, aname = null, start = 0, nsubs = 0, nbrackets = 0, c = str.charCodeAt(p), buf = new StringBuf; c == c;) {
      switch (state) {
        case 0:
          switch (c) {
            case 10:
            case 13:
            case 9:
            case 32:
              break;
            default:
              state = next;
              continue
          }
          break;
        case 1:
          switch (c) {
            case 60:
              state = 0, next = 2;
              break;
            default:
              start = p, state = 13;
              continue
          }
          break;
        case 13:
          if (60 == c) {
            var child = Xml.createPCData(buf.b + HxOverrides.substr(str, start, p - start));
            buf = new StringBuf, parent.addChild(child), nsubs++, state = 0, next = 2
          } else 38 == c && (buf.addSub(str, start, p - start), state = 18, next = 13, start = p + 1);
          break;
        case 17:
          if (93 == c && 93 == str.charCodeAt(p + 1) && 62 == str.charCodeAt(p + 2)) {
            var child1 = Xml.createCData(HxOverrides.substr(str, start, p - start));
            parent.addChild(child1), nsubs++, p += 2, state = 1
          }
          break;
        case 2:
          switch (c) {
            case 33:
              if (91 == str.charCodeAt(p + 1)) {
                if (p += 2, "CDATA[" != HxOverrides.substr(str, p, 6).toUpperCase()) throw "Expected <![CDATA[";
                p += 5, state = 17, start = p + 1
              } else if (68 == str.charCodeAt(p + 1) || 100 == str.charCodeAt(p + 1)) {
                if ("OCTYPE" != HxOverrides.substr(str, p + 2, 6).toUpperCase()) throw "Expected <!DOCTYPE";
                p += 8, state = 16, start = p + 1
              } else {
                if (45 != str.charCodeAt(p + 1) || 45 != str.charCodeAt(p + 2)) throw "Expected <!--";
                p += 2, state = 15, start = p + 1
              }
              break;
            case 63:
              state = 14, start = p;
              break;
            case 47:
              if (null == parent) throw "Expected node name";
              start = p + 1, state = 0, next = 10;
              break;
            default:
              state = 3, start = p;
              continue
          }
          break;
        case 3:
          if (!(c >= 97 && 122 >= c || c >= 65 && 90 >= c || c >= 48 && 57 >= c || 58 == c || 46 == c || 95 == c || 45 == c)) {
            if (p == start) throw "Expected node name";
            xml = Xml.createElement(HxOverrides.substr(str, start, p - start)), parent.addChild(xml), state = 0, next = 4;
            continue
          }
          break;
        case 4:
          switch (c) {
            case 47:
              state = 11, nsubs++;
              break;
            case 62:
              state = 9, nsubs++;
              break;
            default:
              state = 5, start = p;
              continue
          }
          break;
        case 5:
          if (!(c >= 97 && 122 >= c || c >= 65 && 90 >= c || c >= 48 && 57 >= c || 58 == c || 46 == c || 95 == c || 45 == c)) {
            var tmp;
            if (start == p) throw "Expected attribute name";
            if (tmp = HxOverrides.substr(str, start, p - start), aname = tmp, xml.exists(aname)) throw "Duplicate attribute";
            state = 0, next = 6;
            continue
          }
          break;
        case 6:
          switch (c) {
            case 61:
              state = 0, next = 7;
              break;
            default:
              throw "Expected ="
          }
          break;
        case 7:
          switch (c) {
            case 34:
            case 39:
              state = 8, start = p;
              break;
            default:
              throw 'Expected "'
          }
          break;
        case 8:
          if (c == str.charCodeAt(start)) {
            var val = HxOverrides.substr(str, start + 1, p - start - 1);
            xml.set(aname, val), state = 0, next = 4
          }
          break;
        case 9:
          p = haxe.xml.Parser.doParse(str, p, xml), start = p, state = 1;
          break;
        case 11:
          switch (c) {
            case 62:
              state = 1;
              break;
            default:
              throw "Expected >"
          }
          break;
        case 12:
          switch (c) {
            case 62:
              return 0 == nsubs && parent.addChild(Xml.createPCData("")), p;
            default:
              throw "Expected >"
          }
          break;
        case 10:
          if (!(c >= 97 && 122 >= c || c >= 65 && 90 >= c || c >= 48 && 57 >= c || 58 == c || 46 == c || 95 == c || 45 == c)) {
            if (start == p) throw "Expected node name";
            var v = HxOverrides.substr(str, start, p - start);
            if (v != parent.get_nodeName()) throw "Expected </" + parent.get_nodeName() + ">";
            state = 0, next = 12;
            continue
          }
          break;
        case 15:
          45 == c && 45 == str.charCodeAt(p + 1) && 62 == str.charCodeAt(p + 2) && (parent.addChild(Xml.createComment(HxOverrides.substr(str, start, p - start))), p += 2, state = 1);
          break;
        case 16:
          91 == c ? nbrackets++ : 93 == c ? nbrackets-- : 62 == c && 0 == nbrackets && (parent.addChild(Xml.createDocType(HxOverrides.substr(str, start, p - start))), state = 1);
          break;
        case 14:
          if (63 == c && 62 == str.charCodeAt(p + 1)) {
            p++;
            var str1 = HxOverrides.substr(str, start + 1, p - start - 2);
            parent.addChild(Xml.createProcessingInstruction(str1)), state = 1
          }
          break;
        case 18:
          if (59 == c) {
            var s = HxOverrides.substr(str, start, p - start);
            if (35 == s.charCodeAt(0)) {
              var i;
              i = Std.parseInt(120 == s.charCodeAt(1) ? "0" + HxOverrides.substr(s, 1, s.length - 1) : HxOverrides.substr(s, 1, s.length - 1)), buf.add(String.fromCharCode(i))
            } else haxe.xml.Parser.escapes.exists(s) ? buf.add(haxe.xml.Parser.escapes.get(s)) : buf.b += Std.string("&" + s + ";");
            start = p + 1, state = next
          }
      }
      c = StringTools.fastCodeAt(str, ++p)
    }
    if (1 == state && (start = p, state = 13), 13 == state) return (p != start || 0 == nsubs) && parent.addChild(Xml.createPCData(buf.b + HxOverrides.substr(str, start, p - start))), p;
    throw "Unexpected end"
  };
  var js = {};
  js.Boot = function() {}, $hxClasses["js.Boot"] = js.Boot, js.Boot.__name__ = ["js", "Boot"], js.Boot.__unhtml = function(s) {
    return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;")
  }, js.Boot.__trace = function(v, i) {
    var msg;
    if (msg = null != i ? i.fileName + ":" + i.lineNumber + ": " : "", msg += js.Boot.__string_rec(v, ""), null != i && null != i.customParams)
      for (var _g = 0, _g1 = i.customParams; _g < _g1.length;) {
        var v1 = _g1[_g];
        ++_g, msg += "," + js.Boot.__string_rec(v1, "")
      }
    var d;
    "undefined" != typeof document && null != (d = document.getElementById("haxe:trace")) ? d.innerHTML += js.Boot.__unhtml(msg) + "<br/>" : "undefined" != typeof console && null != console.log && console.log(msg)
  }, js.Boot.getClass = function(o) {
    return o instanceof Array && null == o.__enum__ ? Array : o.__class__
  }, js.Boot.__string_rec = function(o, s) {
    if (null == o) return "null";
    if (s.length >= 5) return "<...>";
    var t = typeof o;
    switch ("function" == t && (o.__name__ || o.__ename__) && (t = "object"), t) {
      case "object":
        if (o instanceof Array) {
          if (o.__enum__) {
            if (2 == o.length) return o[0];
            var str = o[0] + "(";
            s += "	";
            for (var _g1 = 2, _g = o.length; _g > _g1;) {
              var i = _g1++;
              str += 2 != i ? "," + js.Boot.__string_rec(o[i], s) : js.Boot.__string_rec(o[i], s)
            }
            return str + ")"
          }
          var l = o.length,
            str1 = "[";
          s += "	";
          for (var _g2 = 0; l > _g2;) {
            var i2 = _g2++;
            str1 += (i2 > 0 ? "," : "") + js.Boot.__string_rec(o[i2], s)
          }
          return str1 += "]"
        }
        var tostr;
        try {
          tostr = o.toString
        } catch (e) {
          return "???"
        }
        if (null != tostr && tostr != Object.toString) {
          var s2 = o.toString();
          if ("[object Object]" != s2) return s2
        }
        var k = null,
          str2 = "{\n";
        s += "	";
        var hasp = null != o.hasOwnProperty;
        for (var k in o)(!hasp || o.hasOwnProperty(k)) && "prototype" != k && "__class__" != k && "__super__" != k && "__interfaces__" != k && "__properties__" != k && (2 != str2.length && (str2 += ", \n"), str2 += s + k + " : " + js.Boot.__string_rec(o[k], s));
        return s = s.substring(1), str2 += "\n" + s + "}";
      case "function":
        return "<function>";
      case "string":
        return o;
      default:
        return String(o)
    }
  }, js.Boot.__interfLoop = function(cc, cl) {
    if (null == cc) return !1;
    if (cc == cl) return !0;
    var intf = cc.__interfaces__;
    if (null != intf)
      for (var _g1 = 0, _g = intf.length; _g > _g1;) {
        var i = _g1++,
          i1 = intf[i];
        if (i1 == cl || js.Boot.__interfLoop(i1, cl)) return !0
      }
    return js.Boot.__interfLoop(cc.__super__, cl)
  }, js.Boot.__instanceof = function(o, cl) {
    if (null == cl) return !1;
    switch (cl) {
      case Int:
        return (0 | o) === o;
      case Float:
        return "number" == typeof o;
      case Bool:
        return "boolean" == typeof o;
      case String:
        return "string" == typeof o;
      case Array:
        return o instanceof Array && null == o.__enum__;
      case Dynamic:
        return !0;
      default:
        if (null == o) return !1;
        if ("function" == typeof cl) {
          if (o instanceof cl) return !0;
          if (js.Boot.__interfLoop(js.Boot.getClass(o), cl)) return !0
        }
        return cl == Class && null != o.__name__ ? !0 : cl == Enum && null != o.__ename__ ? !0 : o.__enum__ == cl
    }
  }, js.Boot.__cast = function(o, t) {
    if (js.Boot.__instanceof(o, t)) return o;
    throw "Cannot cast " + Std.string(o) + " to " + Std.string(t)
  }, openfl.AssetCache = function() {
    this.enabled = !0, this.bitmapData = new haxe.ds.StringMap, this.font = new haxe.ds.StringMap, this.sound = new haxe.ds.StringMap
  }, $hxClasses["openfl.AssetCache"] = openfl.AssetCache, openfl.AssetCache.__name__ = ["openfl", "AssetCache"], openfl.AssetCache.prototype = {
    bitmapData: null,
    enabled: null,
    font: null,
    sound: null,
    clear: function(prefix) {
      if (null == prefix) this.bitmapData = new haxe.ds.StringMap, this.font = new haxe.ds.StringMap, this.sound = new haxe.ds.StringMap;
      else {
        for (var keys = this.bitmapData.keys(); keys.hasNext();) {
          var key = keys.next();
          StringTools.startsWith(key, prefix) && this.bitmapData.remove(key)
        }
        for (var keys1 = this.font.keys(); keys1.hasNext();) {
          var key1 = keys1.next();
          StringTools.startsWith(key1, prefix) && this.font.remove(key1)
        }
        for (var keys2 = this.sound.keys(); keys2.hasNext();) {
          var key2 = keys2.next();
          StringTools.startsWith(key2, prefix) && this.sound.remove(key2)
        }
      }
    },
    __class__: openfl.AssetCache
  }, openfl.Assets = function() {}, $hxClasses["openfl.Assets"] = openfl.Assets, openfl.Assets.__name__ = ["openfl", "Assets"], openfl.Assets.addEventListener = function(type, listener, useCapture, priority, useWeakReference) {
    null == useWeakReference && (useWeakReference = !1), null == priority && (priority = 0), null == useCapture && (useCapture = !1), openfl.Assets.initialize(), openfl.Assets.dispatcher.addEventListener(type, listener, useCapture, priority, useWeakReference)
  }, openfl.Assets.dispatchEvent = function(event) {
    return openfl.Assets.initialize(), openfl.Assets.dispatcher.dispatchEvent(event)
  }, openfl.Assets.exists = function(id, type) {
    openfl.Assets.initialize(), null == type && (type = openfl.AssetType.BINARY);
    var symbolName, libraryName = id.substring(0, id.indexOf(":")),
      pos = id.indexOf(":") + 1;
    symbolName = HxOverrides.substr(id, pos, null);
    var library = openfl.Assets.getLibrary(libraryName);
    return null != library ? library.exists(symbolName, type) : !1
  }, openfl.Assets.getBitmapData = function(id, useCache) {
    if (null == useCache && (useCache = !0), openfl.Assets.initialize(), useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.bitmapData.exists(id)) {
      var bitmapData = openfl.Assets.cache.bitmapData.get(id);
      if (openfl.Assets.isValidBitmapData(bitmapData)) return bitmapData
    }
    var symbolName, libraryName = id.substring(0, id.indexOf(":")),
      pos = id.indexOf(":") + 1;
    symbolName = HxOverrides.substr(id, pos, null);
    var library = openfl.Assets.getLibrary(libraryName);
    if (null != library)
      if (library.exists(symbolName, openfl.AssetType.IMAGE)) {
        if (library.isLocal(symbolName, openfl.AssetType.IMAGE)) {
          var bitmapData1 = library.getBitmapData(symbolName);
          return useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.bitmapData.set(id, bitmapData1), bitmapData1
        }
        haxe.Log.trace('[openfl.Assets] BitmapData asset "' + id + '" exists, but only asynchronously', {
          fileName: "Assets.hx",
          lineNumber: 139,
          className: "openfl.Assets",
          methodName: "getBitmapData"
        })
      } else haxe.Log.trace('[openfl.Assets] There is no BitmapData asset with an ID of "' + id + '"', {
        fileName: "Assets.hx",
        lineNumber: 145,
        className: "openfl.Assets",
        methodName: "getBitmapData"
      });
    else haxe.Log.trace('[openfl.Assets] There is no asset library named "' + libraryName + '"', {
      fileName: "Assets.hx",
      lineNumber: 151,
      className: "openfl.Assets",
      methodName: "getBitmapData"
    });
    return null
  }, openfl.Assets.getBytes = function(id) {
    openfl.Assets.initialize();
    var symbolName, libraryName = id.substring(0, id.indexOf(":")),
      pos = id.indexOf(":") + 1;
    symbolName = HxOverrides.substr(id, pos, null);
    var library = openfl.Assets.getLibrary(libraryName);
    if (null != library)
      if (library.exists(symbolName, openfl.AssetType.BINARY)) {
        if (library.isLocal(symbolName, openfl.AssetType.BINARY)) return library.getBytes(symbolName);
        haxe.Log.trace('[openfl.Assets] String or ByteArray asset "' + id + '" exists, but only asynchronously', {
          fileName: "Assets.hx",
          lineNumber: 188,
          className: "openfl.Assets",
          methodName: "getBytes"
        })
      } else haxe.Log.trace('[openfl.Assets] There is no String or ByteArray asset with an ID of "' + id + '"', {
        fileName: "Assets.hx",
        lineNumber: 194,
        className: "openfl.Assets",
        methodName: "getBytes"
      });
    else haxe.Log.trace('[openfl.Assets] There is no asset library named "' + libraryName + '"', {
      fileName: "Assets.hx",
      lineNumber: 200,
      className: "openfl.Assets",
      methodName: "getBytes"
    });
    return null
  }, openfl.Assets.getFont = function(id, useCache) {
    if (null == useCache && (useCache = !0), openfl.Assets.initialize(), useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.font.exists(id)) return openfl.Assets.cache.font.get(id);
    var symbolName, libraryName = id.substring(0, id.indexOf(":")),
      pos = id.indexOf(":") + 1;
    symbolName = HxOverrides.substr(id, pos, null);
    var library = openfl.Assets.getLibrary(libraryName);
    if (null != library)
      if (library.exists(symbolName, openfl.AssetType.FONT)) {
        if (library.isLocal(symbolName, openfl.AssetType.FONT)) {
          var font = library.getFont(symbolName);
          return useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.font.set(id, font), font
        }
        haxe.Log.trace('[openfl.Assets] Font asset "' + id + '" exists, but only asynchronously', {
          fileName: "Assets.hx",
          lineNumber: 251,
          className: "openfl.Assets",
          methodName: "getFont"
        })
      } else haxe.Log.trace('[openfl.Assets] There is no Font asset with an ID of "' + id + '"', {
        fileName: "Assets.hx",
        lineNumber: 257,
        className: "openfl.Assets",
        methodName: "getFont"
      });
    else haxe.Log.trace('[openfl.Assets] There is no asset library named "' + libraryName + '"', {
      fileName: "Assets.hx",
      lineNumber: 263,
      className: "openfl.Assets",
      methodName: "getFont"
    });
    return null
  }, openfl.Assets.getLibrary = function(name) {
    return (null == name || "" == name) && (name = "default"), openfl.Assets.libraries.get(name)
  }, openfl.Assets.getMovieClip = function(id) {
    openfl.Assets.initialize();
    var symbolName, libraryName = id.substring(0, id.indexOf(":")),
      pos = id.indexOf(":") + 1;
    symbolName = HxOverrides.substr(id, pos, null);
    var library = openfl.Assets.getLibrary(libraryName);
    if (null != library)
      if (library.exists(symbolName, openfl.AssetType.MOVIE_CLIP)) {
        if (library.isLocal(symbolName, openfl.AssetType.MOVIE_CLIP)) return library.getMovieClip(symbolName);
        haxe.Log.trace('[openfl.Assets] MovieClip asset "' + id + '" exists, but only asynchronously', {
          fileName: "Assets.hx",
          lineNumber: 313,
          className: "openfl.Assets",
          methodName: "getMovieClip"
        })
      } else haxe.Log.trace('[openfl.Assets] There is no MovieClip asset with an ID of "' + id + '"', {
        fileName: "Assets.hx",
        lineNumber: 319,
        className: "openfl.Assets",
        methodName: "getMovieClip"
      });
    else haxe.Log.trace('[openfl.Assets] There is no asset library named "' + libraryName + '"', {
      fileName: "Assets.hx",
      lineNumber: 325,
      className: "openfl.Assets",
      methodName: "getMovieClip"
    });
    return null
  }, openfl.Assets.getMusic = function(id, useCache) {
    if (null == useCache && (useCache = !0), openfl.Assets.initialize(), useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
      var sound = openfl.Assets.cache.sound.get(id);
      if (openfl.Assets.isValidSound(sound)) return sound
    }
    var symbolName, libraryName = id.substring(0, id.indexOf(":")),
      pos = id.indexOf(":") + 1;
    symbolName = HxOverrides.substr(id, pos, null);
    var library = openfl.Assets.getLibrary(libraryName);
    if (null != library)
      if (library.exists(symbolName, openfl.AssetType.MUSIC)) {
        if (library.isLocal(symbolName, openfl.AssetType.MUSIC)) {
          var sound1 = library.getMusic(symbolName);
          return useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.set(id, sound1), sound1
        }
        haxe.Log.trace('[openfl.Assets] Sound asset "' + id + '" exists, but only asynchronously', {
          fileName: "Assets.hx",
          lineNumber: 382,
          className: "openfl.Assets",
          methodName: "getMusic"
        })
      } else haxe.Log.trace('[openfl.Assets] There is no Sound asset with an ID of "' + id + '"', {
        fileName: "Assets.hx",
        lineNumber: 388,
        className: "openfl.Assets",
        methodName: "getMusic"
      });
    else haxe.Log.trace('[openfl.Assets] There is no asset library named "' + libraryName + '"', {
      fileName: "Assets.hx",
      lineNumber: 394,
      className: "openfl.Assets",
      methodName: "getMusic"
    });
    return null
  }, openfl.Assets.getPath = function(id) {
    openfl.Assets.initialize();
    var symbolName, libraryName = id.substring(0, id.indexOf(":")),
      pos = id.indexOf(":") + 1;
    symbolName = HxOverrides.substr(id, pos, null);
    var library = openfl.Assets.getLibrary(libraryName);
    if (null != library) {
      if (library.exists(symbolName, null)) return library.getPath(symbolName);
      haxe.Log.trace('[openfl.Assets] There is no asset with an ID of "' + id + '"', {
        fileName: "Assets.hx",
        lineNumber: 429,
        className: "openfl.Assets",
        methodName: "getPath"
      })
    } else haxe.Log.trace('[openfl.Assets] There is no asset library named "' + libraryName + '"', {
      fileName: "Assets.hx",
      lineNumber: 435,
      className: "openfl.Assets",
      methodName: "getPath"
    });
    return null
  }, openfl.Assets.getSound = function(id, useCache) {
    if (null == useCache && (useCache = !0), openfl.Assets.initialize(), useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
      var sound = openfl.Assets.cache.sound.get(id);
      if (openfl.Assets.isValidSound(sound)) return sound
    }
    var symbolName, libraryName = id.substring(0, id.indexOf(":")),
      pos = id.indexOf(":") + 1;
    symbolName = HxOverrides.substr(id, pos, null);
    var library = openfl.Assets.getLibrary(libraryName);
    if (null != library)
      if (library.exists(symbolName, openfl.AssetType.SOUND)) {
        if (library.isLocal(symbolName, openfl.AssetType.SOUND)) {
          var sound1 = library.getSound(symbolName);
          return useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.set(id, sound1), sound1
        }
        haxe.Log.trace('[openfl.Assets] Sound asset "' + id + '" exists, but only asynchronously', {
          fileName: "Assets.hx",
          lineNumber: 492,
          className: "openfl.Assets",
          methodName: "getSound"
        })
      } else haxe.Log.trace('[openfl.Assets] There is no Sound asset with an ID of "' + id + '"', {
        fileName: "Assets.hx",
        lineNumber: 498,
        className: "openfl.Assets",
        methodName: "getSound"
      });
    else haxe.Log.trace('[openfl.Assets] There is no asset library named "' + libraryName + '"', {
      fileName: "Assets.hx",
      lineNumber: 504,
      className: "openfl.Assets",
      methodName: "getSound"
    });
    return null
  }, openfl.Assets.getText = function(id) {
    openfl.Assets.initialize();
    var symbolName, libraryName = id.substring(0, id.indexOf(":")),
      pos = id.indexOf(":") + 1;
    symbolName = HxOverrides.substr(id, pos, null);
    var library = openfl.Assets.getLibrary(libraryName);
    if (null != library)
      if (library.exists(symbolName, openfl.AssetType.TEXT)) {
        if (library.isLocal(symbolName, openfl.AssetType.TEXT)) return library.getText(symbolName);
        haxe.Log.trace('[openfl.Assets] String asset "' + id + '" exists, but only asynchronously', {
          fileName: "Assets.hx",
          lineNumber: 541,
          className: "openfl.Assets",
          methodName: "getText"
        })
      } else haxe.Log.trace('[openfl.Assets] There is no String asset with an ID of "' + id + '"', {
        fileName: "Assets.hx",
        lineNumber: 547,
        className: "openfl.Assets",
        methodName: "getText"
      });
    else haxe.Log.trace('[openfl.Assets] There is no asset library named "' + libraryName + '"', {
      fileName: "Assets.hx",
      lineNumber: 553,
      className: "openfl.Assets",
      methodName: "getText"
    });
    return null
  }, openfl.Assets.hasEventListener = function(type) {
    return openfl.Assets.initialize(), openfl.Assets.dispatcher.hasEventListener(type)
  }, openfl.Assets.initialize = function() {
    openfl.Assets.initialized || (openfl.Assets.registerLibrary("default", new DefaultAssetLibrary), openfl.Assets.initialized = !0)
  }, openfl.Assets.isLocal = function(id, type, useCache) {
    if (null == useCache && (useCache = !0), openfl.Assets.initialize(), useCache && openfl.Assets.cache.enabled) {
      if ((type == openfl.AssetType.IMAGE || null == type) && openfl.Assets.cache.bitmapData.exists(id)) return !0;
      if ((type == openfl.AssetType.FONT || null == type) && openfl.Assets.cache.font.exists(id)) return !0;
      if ((type == openfl.AssetType.SOUND || type == openfl.AssetType.MUSIC || null == type) && openfl.Assets.cache.sound.exists(id)) return !0
    }
    var symbolName, libraryName = id.substring(0, id.indexOf(":")),
      pos = id.indexOf(":") + 1;
    symbolName = HxOverrides.substr(id, pos, null);
    var library = openfl.Assets.getLibrary(libraryName);
    return null != library ? library.isLocal(symbolName, type) : !1
  }, openfl.Assets.isValidBitmapData = function(bitmapData) {
    return null != bitmapData.__sourceImage || null != bitmapData.__sourceCanvas
  }, openfl.Assets.isValidSound = function() {
    return !0
  }, openfl.Assets.list = function(type) {
    openfl.Assets.initialize();
    for (var items = [], $it0 = openfl.Assets.libraries.iterator(); $it0.hasNext();) {
      var library = $it0.next(),
        libraryItems = library.list(type);
      null != libraryItems && (items = items.concat(libraryItems))
    }
    return items
  }, openfl.Assets.loadBitmapData = function(id, handler, useCache) {
    if (null == useCache && (useCache = !0), openfl.Assets.initialize(), useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.bitmapData.exists(id)) {
      var bitmapData = openfl.Assets.cache.bitmapData.get(id);
      if (openfl.Assets.isValidBitmapData(bitmapData)) return void handler(bitmapData)
    }
    var symbolName, libraryName = id.substring(0, id.indexOf(":")),
      pos = id.indexOf(":") + 1;
    symbolName = HxOverrides.substr(id, pos, null);
    var library = openfl.Assets.getLibrary(libraryName);
    if (null != library) {
      if (library.exists(symbolName, openfl.AssetType.IMAGE)) return void(useCache && openfl.Assets.cache.enabled ? library.loadBitmapData(symbolName, function(bitmapData1) {
        openfl.Assets.cache.bitmapData.set(id, bitmapData1), handler(bitmapData1)
      }) : library.loadBitmapData(symbolName, handler));
      haxe.Log.trace('[openfl.Assets] There is no BitmapData asset with an ID of "' + id + '"', {
        fileName: "Assets.hx",
        lineNumber: 750,
        className: "openfl.Assets",
        methodName: "loadBitmapData"
      })
    } else haxe.Log.trace('[openfl.Assets] There is no asset library named "' + libraryName + '"', {
      fileName: "Assets.hx",
      lineNumber: 756,
      className: "openfl.Assets",
      methodName: "loadBitmapData"
    });
    handler(null)
  }, openfl.Assets.loadBytes = function(id, handler) {
    openfl.Assets.initialize();
    var symbolName, libraryName = id.substring(0, id.indexOf(":")),
      pos = id.indexOf(":") + 1;
    symbolName = HxOverrides.substr(id, pos, null);
    var library = openfl.Assets.getLibrary(libraryName);
    if (null != library) {
      if (library.exists(symbolName, openfl.AssetType.BINARY)) return void library.loadBytes(symbolName, handler);
      haxe.Log.trace('[openfl.Assets] There is no String or ByteArray asset with an ID of "' + id + '"', {
        fileName: "Assets.hx",
        lineNumber: 786,
        className: "openfl.Assets",
        methodName: "loadBytes"
      })
    } else haxe.Log.trace('[openfl.Assets] There is no asset library named "' + libraryName + '"', {
      fileName: "Assets.hx",
      lineNumber: 792,
      className: "openfl.Assets",
      methodName: "loadBytes"
    });
    handler(null)
  }, openfl.Assets.loadFont = function(id, handler, useCache) {
    if (null == useCache && (useCache = !0), openfl.Assets.initialize(), useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.font.exists(id)) return void handler(openfl.Assets.cache.font.get(id));
    var symbolName, libraryName = id.substring(0, id.indexOf(":")),
      pos = id.indexOf(":") + 1;
    symbolName = HxOverrides.substr(id, pos, null);
    var library = openfl.Assets.getLibrary(libraryName);
    if (null != library) {
      if (library.exists(symbolName, openfl.AssetType.FONT)) return void(useCache && openfl.Assets.cache.enabled ? library.loadFont(symbolName, function(font) {
        openfl.Assets.cache.font.set(id, font), handler(font)
      }) : library.loadFont(symbolName, handler));
      haxe.Log.trace('[openfl.Assets] There is no Font asset with an ID of "' + id + '"', {
        fileName: "Assets.hx",
        lineNumber: 843,
        className: "openfl.Assets",
        methodName: "loadFont"
      })
    } else haxe.Log.trace('[openfl.Assets] There is no asset library named "' + libraryName + '"', {
      fileName: "Assets.hx",
      lineNumber: 849,
      className: "openfl.Assets",
      methodName: "loadFont"
    });
    handler(null)
  }, openfl.Assets.loadLibrary = function(name, handler) {
    openfl.Assets.initialize();
    var data = openfl.Assets.getText("libraries/" + name + ".dat");
    if (null != data && "" != data) {
      var unserializer = new haxe.Unserializer(data);
      unserializer.setResolver({
        resolveEnum: openfl.Assets.resolveEnum,
        resolveClass: openfl.Assets.resolveClass
      });
      var library = unserializer.unserialize();
      openfl.Assets.libraries.set(name, library), library.eventCallback = openfl.Assets.library_onEvent, library.load(handler)
    } else haxe.Log.trace('[openfl.Assets] There is no asset library named "' + name + '"', {
      fileName: "Assets.hx",
      lineNumber: 880,
      className: "openfl.Assets",
      methodName: "loadLibrary"
    })
  }, openfl.Assets.loadMusic = function(id, handler, useCache) {
    if (null == useCache && (useCache = !0), openfl.Assets.initialize(), useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
      var sound = openfl.Assets.cache.sound.get(id);
      if (openfl.Assets.isValidSound(sound)) return void handler(sound)
    }
    var symbolName, libraryName = id.substring(0, id.indexOf(":")),
      pos = id.indexOf(":") + 1;
    symbolName = HxOverrides.substr(id, pos, null);
    var library = openfl.Assets.getLibrary(libraryName);
    if (null != library) {
      if (library.exists(symbolName, openfl.AssetType.MUSIC)) return void(useCache && openfl.Assets.cache.enabled ? library.loadMusic(symbolName, function(sound1) {
        openfl.Assets.cache.sound.set(id, sound1), handler(sound1)
      }) : library.loadMusic(symbolName, handler));
      haxe.Log.trace('[openfl.Assets] There is no Sound asset with an ID of "' + id + '"', {
        fileName: "Assets.hx",
        lineNumber: 935,
        className: "openfl.Assets",
        methodName: "loadMusic"
      })
    } else haxe.Log.trace('[openfl.Assets] There is no asset library named "' + libraryName + '"', {
      fileName: "Assets.hx",
      lineNumber: 941,
      className: "openfl.Assets",
      methodName: "loadMusic"
    });
    handler(null)
  }, openfl.Assets.loadMovieClip = function(id, handler) {
    openfl.Assets.initialize();
    var symbolName, libraryName = id.substring(0, id.indexOf(":")),
      pos = id.indexOf(":") + 1;
    symbolName = HxOverrides.substr(id, pos, null);
    var library = openfl.Assets.getLibrary(libraryName);
    if (null != library) {
      if (library.exists(symbolName, openfl.AssetType.MOVIE_CLIP)) return void library.loadMovieClip(symbolName, handler);
      haxe.Log.trace('[openfl.Assets] There is no MovieClip asset with an ID of "' + id + '"', {
        fileName: "Assets.hx",
        lineNumber: 971,
        className: "openfl.Assets",
        methodName: "loadMovieClip"
      })
    } else haxe.Log.trace('[openfl.Assets] There is no asset library named "' + libraryName + '"', {
      fileName: "Assets.hx",
      lineNumber: 977,
      className: "openfl.Assets",
      methodName: "loadMovieClip"
    });
    handler(null)
  }, openfl.Assets.loadSound = function(id, handler, useCache) {
    if (null == useCache && (useCache = !0), openfl.Assets.initialize(), useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
      var sound = openfl.Assets.cache.sound.get(id);
      if (openfl.Assets.isValidSound(sound)) return void handler(sound)
    }
    var symbolName, libraryName = id.substring(0, id.indexOf(":")),
      pos = id.indexOf(":") + 1;
    symbolName = HxOverrides.substr(id, pos, null);
    var library = openfl.Assets.getLibrary(libraryName);
    if (null != library) {
      if (library.exists(symbolName, openfl.AssetType.SOUND)) return void(useCache && openfl.Assets.cache.enabled ? library.loadSound(symbolName, function(sound1) {
        openfl.Assets.cache.sound.set(id, sound1), handler(sound1)
      }) : library.loadSound(symbolName, handler));
      haxe.Log.trace('[openfl.Assets] There is no Sound asset with an ID of "' + id + '"', {
        fileName: "Assets.hx",
        lineNumber: 1034,
        className: "openfl.Assets",
        methodName: "loadSound"
      })
    } else haxe.Log.trace('[openfl.Assets] There is no asset library named "' + libraryName + '"', {
      fileName: "Assets.hx",
      lineNumber: 1040,
      className: "openfl.Assets",
      methodName: "loadSound"
    });
    handler(null)
  }, openfl.Assets.loadText = function(id, handler) {
    openfl.Assets.initialize();
    var symbolName, libraryName = id.substring(0, id.indexOf(":")),
      pos = id.indexOf(":") + 1;
    symbolName = HxOverrides.substr(id, pos, null);
    var library = openfl.Assets.getLibrary(libraryName);
    if (null != library) {
      if (library.exists(symbolName, openfl.AssetType.TEXT)) return void library.loadText(symbolName, handler);
      haxe.Log.trace('[openfl.Assets] There is no String asset with an ID of "' + id + '"', {
        fileName: "Assets.hx",
        lineNumber: 1070,
        className: "openfl.Assets",
        methodName: "loadText"
      })
    } else haxe.Log.trace('[openfl.Assets] There is no asset library named "' + libraryName + '"', {
      fileName: "Assets.hx",
      lineNumber: 1076,
      className: "openfl.Assets",
      methodName: "loadText"
    });
    handler(null)
  }, openfl.Assets.registerLibrary = function(name, library) {
    openfl.Assets.libraries.exists(name) && openfl.Assets.unloadLibrary(name), null != library && (library.eventCallback = openfl.Assets.library_onEvent), openfl.Assets.libraries.set(name, library)
  }, openfl.Assets.removeEventListener = function(type, listener, capture) {
    null == capture && (capture = !1), openfl.Assets.initialize(), openfl.Assets.dispatcher.removeEventListener(type, listener, capture)
  }, openfl.Assets.resolveClass = function(name) {
    return Type.resolveClass(name)
  }, openfl.Assets.resolveEnum = function(name) {
    var value = Type.resolveEnum(name);
    return value
  }, openfl.Assets.unloadLibrary = function(name) {
    openfl.Assets.initialize();
    var library = openfl.Assets.libraries.get(name);
    null != library && (openfl.Assets.cache.clear(name + ":"), library.eventCallback = null), openfl.Assets.libraries.remove(name)
  }, openfl.Assets.library_onEvent = function(library, type) {
    "change" == type && (openfl.Assets.cache.clear(), openfl.Assets.dispatchEvent(new openfl.events.Event(openfl.events.Event.CHANGE)))
  }, openfl.AssetData = function() {}, $hxClasses["openfl.AssetData"] = openfl.AssetData, openfl.AssetData.__name__ = ["openfl", "AssetData"], openfl.AssetData.prototype = {
    id: null,
    path: null,
    type: null,
    __class__: openfl.AssetData
  }, openfl.AssetType = $hxClasses["openfl.AssetType"] = {
    __ename__: !0,
    __constructs__: ["BINARY", "FONT", "IMAGE", "MOVIE_CLIP", "MUSIC", "SOUND", "TEMPLATE", "TEXT"]
  }, openfl.AssetType.BINARY = ["BINARY", 0], openfl.AssetType.BINARY.toString = $estr, openfl.AssetType.BINARY.__enum__ = openfl.AssetType, openfl.AssetType.FONT = ["FONT", 1], openfl.AssetType.FONT.toString = $estr, openfl.AssetType.FONT.__enum__ = openfl.AssetType, openfl.AssetType.IMAGE = ["IMAGE", 2], openfl.AssetType.IMAGE.toString = $estr, openfl.AssetType.IMAGE.__enum__ = openfl.AssetType, openfl.AssetType.MOVIE_CLIP = ["MOVIE_CLIP", 3], openfl.AssetType.MOVIE_CLIP.toString = $estr, openfl.AssetType.MOVIE_CLIP.__enum__ = openfl.AssetType, openfl.AssetType.MUSIC = ["MUSIC", 4], openfl.AssetType.MUSIC.toString = $estr, openfl.AssetType.MUSIC.__enum__ = openfl.AssetType, openfl.AssetType.SOUND = ["SOUND", 5], openfl.AssetType.SOUND.toString = $estr, openfl.AssetType.SOUND.__enum__ = openfl.AssetType, openfl.AssetType.TEMPLATE = ["TEMPLATE", 6], openfl.AssetType.TEMPLATE.toString = $estr, openfl.AssetType.TEMPLATE.__enum__ = openfl.AssetType, openfl.AssetType.TEXT = ["TEXT", 7], openfl.AssetType.TEXT.toString = $estr, openfl.AssetType.TEXT.__enum__ = openfl.AssetType, openfl.AssetType.__empty_constructs__ = [openfl.AssetType.BINARY, openfl.AssetType.FONT, openfl.AssetType.IMAGE, openfl.AssetType.MOVIE_CLIP, openfl.AssetType.MUSIC, openfl.AssetType.SOUND, openfl.AssetType.TEMPLATE, openfl.AssetType.TEXT], openfl.Lib = function() {}, $hxClasses["openfl.Lib"] = openfl.Lib, openfl.Lib.__name__ = ["openfl", "Lib"], openfl.Lib.current = null, openfl.Lib.as = function(v, c) {
    return js.Boot.__instanceof(v, c) ? v : null
  }, openfl.Lib.attach = function() {
    return new openfl.display.MovieClip
  }, openfl.Lib.create = function(element, width, height, backgroundColor) {
    null == width && (width = 0), null == height && (height = 0);
    for (var lastTime = 0, vendors = ["ms", "moz", "webkit", "o"], x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[vendors[x] + "CancelAnimationFrame"] || window[vendors[x] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(callback) {
      var currTime = (new Date).getTime(),
        timeToCall = Math.max(0, 16 - (currTime - lastTime)),
        id = window.setTimeout(function() {
          callback(currTime + timeToCall)
        }, timeToCall);
      return lastTime = currTime + timeToCall, id
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(id) {
      clearTimeout(id)
    }), window.requestAnimFrame = window.requestAnimationFrame;
    var stage = new openfl.display.Stage(width, height, element, backgroundColor);
    null == openfl.Lib.current && (openfl.Lib.current = new openfl.display.MovieClip, stage.addChild(openfl.Lib.current))
  }, openfl.Lib.getTimer = function() {
    return Std["int"](1e3 * (haxe.Timer.stamp() - openfl.Lib.__startTime))
  }, openfl.Lib.getURL = function(request, target) {
    null == target && (target = "_blank"), window.open(request.url, target)
  }, openfl.Lib.notImplemented = function(api) {
    openfl.Lib.__sentWarnings.exists(api) || (openfl.Lib.__sentWarnings.set(api, !0), haxe.Log.trace("Warning: " + api + " is not implemented", {
      fileName: "Lib.hx",
      lineNumber: 114,
      className: "openfl.Lib",
      methodName: "notImplemented"
    }))
  }, openfl.Lib.preventDefaultTouchMove = function() {
    window.document.addEventListener("touchmove", function(evt) {
      evt.preventDefault()
    }, !1)
  }, openfl.Lib.trace = function(arg) {
    haxe.Log.trace(arg, {
      fileName: "Lib.hx",
      lineNumber: 134,
      className: "openfl.Lib",
      methodName: "trace"
    })
  }, openfl.Memory = function() {}, $hxClasses["openfl.Memory"] = openfl.Memory, openfl.Memory.__name__ = ["openfl", "Memory"], openfl.Memory.gcRef = null, openfl.Memory.len = null, openfl.Memory._setPositionTemporarily = function(position, action) {
    var oldPosition = openfl.Memory.gcRef.position;
    openfl.Memory.gcRef.position = position;
    var value = action();
    return openfl.Memory.gcRef.position = oldPosition, value
  }, openfl.Memory.getByte = function(addr) {
    if (0 > addr || addr + 1 > openfl.Memory.len) throw "Bad address";
    return openfl.Memory.gcRef.__get(addr)
  }, openfl.Memory.getDouble = function(addr) {
    if (0 > addr || addr + 8 > openfl.Memory.len) throw "Bad address";
    return openfl.Memory._setPositionTemporarily(addr, function() {
      return openfl.Memory.gcRef.readDouble()
    })
  }, openfl.Memory.getFloat = function(addr) {
    if (0 > addr || addr + 4 > openfl.Memory.len) throw "Bad address";
    return openfl.Memory._setPositionTemporarily(addr, function() {
      return openfl.Memory.gcRef.readFloat()
    })
  }, openfl.Memory.getI32 = function(addr) {
    if (0 > addr || addr + 4 > openfl.Memory.len) throw "Bad address";
    return openfl.Memory._setPositionTemporarily(addr, function() {
      return openfl.Memory.gcRef.readInt()
    })
  }, openfl.Memory.getUI16 = function(addr) {
    if (0 > addr || addr + 2 > openfl.Memory.len) throw "Bad address";
    return openfl.Memory._setPositionTemporarily(addr, function() {
      return openfl.Memory.gcRef.readUnsignedShort()
    })
  }, openfl.Memory.select = function(inBytes) {
    openfl.Memory.gcRef = inBytes, openfl.Memory.len = null != inBytes ? inBytes.length : 0
  }, openfl.Memory.setByte = function(addr, v) {
    if (0 > addr || addr + 1 > openfl.Memory.len) throw "Bad address";
    openfl.Memory.gcRef.__set(addr, v)
  }, openfl.Memory.setDouble = function(addr, v) {
    if (0 > addr || addr + 8 > openfl.Memory.len) throw "Bad address";
    openfl.Memory._setPositionTemporarily(addr, function() {
      openfl.Memory.gcRef.writeDouble(v)
    })
  }, openfl.Memory.setFloat = function(addr, v) {
    if (0 > addr || addr + 4 > openfl.Memory.len) throw "Bad address";
    openfl.Memory._setPositionTemporarily(addr, function() {
      openfl.Memory.gcRef.writeFloat(v)
    })
  }, openfl.Memory.setI16 = function(addr, v) {
    if (0 > addr || addr + 2 > openfl.Memory.len) throw "Bad address";
    openfl.Memory._setPositionTemporarily(addr, function() {
      openfl.Memory.gcRef.writeUnsignedShort(v)
    })
  }, openfl.Memory.setI32 = function(addr, v) {
    if (0 > addr || addr + 4 > openfl.Memory.len) throw "Bad address";
    openfl.Memory._setPositionTemporarily(addr, function() {
      openfl.Memory.gcRef.writeInt(v)
    })
  }, openfl._Vector = {}, openfl._Vector.Vector_Impl_ = function() {}, $hxClasses["openfl._Vector.Vector_Impl_"] = openfl._Vector.Vector_Impl_, openfl._Vector.Vector_Impl_.__name__ = ["openfl", "_Vector", "Vector_Impl_"], openfl._Vector.Vector_Impl_.__properties__ = {
    set_fixed: "set_fixed",
    get_fixed: "get_fixed",
    set_length: "set_length",
    get_length: "get_length"
  }, openfl._Vector.Vector_Impl_._new = function(length, fixed) {
    null == fixed && (fixed = !1), null == length && (length = 0);
    var this1;
    this1 = new openfl.VectorData;
    var this2;
    return this2 = new Array(length), this1.data = this2, this1.length = length, this1.fixed = fixed, this1
  }, openfl._Vector.Vector_Impl_.concat = function(this1, a) {
    var vectorData = new openfl.VectorData;
    vectorData.length = null != a ? this1.length + a.length : this1.length, vectorData.fixed = !1;
    var this2;
    return this2 = new Array(vectorData.length), vectorData.data = this2, haxe.ds._Vector.Vector_Impl_.blit(this1.data, 0, vectorData.data, 0, this1.length), null != a && haxe.ds._Vector.Vector_Impl_.blit(a.data, 0, vectorData.data, this1.length, a.length), vectorData
  }, openfl._Vector.Vector_Impl_.copy = function(this1) {
    var vectorData = new openfl.VectorData;
    vectorData.length = this1.length, vectorData.fixed = this1.fixed;
    var this2;
    return this2 = new Array(this1.length), vectorData.data = this2, haxe.ds._Vector.Vector_Impl_.blit(this1.data, 0, vectorData.data, 0, this1.length), vectorData
  }, openfl._Vector.Vector_Impl_.iterator = function(this1) {
    return new openfl.VectorDataIterator(this1)
  }, openfl._Vector.Vector_Impl_.join = function(this1, sep) {
    for (var output = "", _g1 = 0, _g = this1.length; _g > _g1;) {
      var i = _g1++;
      i > 0 && (output += sep), output += Std.string(this1.data[i])
    }
    return output
  }, openfl._Vector.Vector_Impl_.pop = function(this1) {
    return !this1.fixed && this1.length > 0 ? (this1.length--, this1.data[this1.length]) : null
  }, openfl._Vector.Vector_Impl_.push = function(this1, x) {
    if (!this1.fixed) {
      if (this1.length++, this1.data.length < this1.length) {
        var data, this2;
        this2 = new Array(this1.data.length + 10), data = this2, haxe.ds._Vector.Vector_Impl_.blit(this1.data, 0, data, 0, this1.data.length), this1.data = data
      }
      this1.data[this1.length - 1] = x
    }
    return this1.length
  }, openfl._Vector.Vector_Impl_.reverse = function(this1) {
    var data, this2;
    this2 = new Array(this1.length), data = this2;
    for (var _g1 = 0, _g = this1.length; _g > _g1;) {
      var i = _g1++;
      data[this1.length - 1 - i] = this1.data[i]
    }
    this1.data = data
  }, openfl._Vector.Vector_Impl_.shift = function(this1) {
    if (!this1.fixed && this1.length > 0) {
      var value = this1.data[0];
      return this1.length--, haxe.ds._Vector.Vector_Impl_.blit(this1.data, 1, this1.data, 0, this1.length), value
    }
    return null
  }, openfl._Vector.Vector_Impl_.unshift = function(this1, x) {
    if (!this1.fixed) {
      if (this1.length++, this1.data.length < this1.length) {
        var data, this2;
        this2 = new Array(this1.length + 10), data = this2, haxe.ds._Vector.Vector_Impl_.blit(this1.data, 0, data, 1, this1.data.length), this1.data = data
      } else haxe.ds._Vector.Vector_Impl_.blit(this1.data, 0, this1.data, 1, this1.length - 1);
      this1.data[0] = x
    }
  }, openfl._Vector.Vector_Impl_.slice = function(this1, pos, end) {
    null == end && (end = 0), null == pos && (pos = 0), 0 > pos && (pos += this1.length), 0 >= end && (end += this1.length), end > this1.length && (end = this1.length);
    var length = end - pos;
    (0 >= length || length > this1.length) && (length = this1.length);
    var vectorData = new openfl.VectorData;
    vectorData.length = end - pos, vectorData.fixed = !0;
    var this2;
    return this2 = new Array(length), vectorData.data = this2, haxe.ds._Vector.Vector_Impl_.blit(this1.data, pos, vectorData.data, 0, length), vectorData
  }, openfl._Vector.Vector_Impl_.sort = function(this1, f) {
    var array = haxe.ds._Vector.Vector_Impl_.toArray(this1.data);
    array.sort(f);
    var vec, this2;
    this2 = new Array(array.length), vec = this2;
    for (var _g1 = 0, _g = array.length; _g > _g1;) {
      var i = _g1++;
      vec[i] = array[i]
    }
    this1.data = vec
  }, openfl._Vector.Vector_Impl_.splice = function(this1, pos, len) {
    0 > pos && (pos += this1.length), pos + len > this1.length && (len = this1.length - pos), 0 > len && (len = 0);
    var vectorData = new openfl.VectorData;
    vectorData.length = len, vectorData.fixed = !1;
    var this2;
    return this2 = new Array(len), vectorData.data = this2, haxe.ds._Vector.Vector_Impl_.blit(this1.data, pos, vectorData.data, 0, len), len > 0 && (this1.length -= len, haxe.ds._Vector.Vector_Impl_.blit(this1.data, pos + len, this1.data, pos, this1.length - pos)), vectorData
  }, openfl._Vector.Vector_Impl_.toString = function() {
    return ""
  }, openfl._Vector.Vector_Impl_.indexOf = function(this1, x, from) {
    null == from && (from = 0);
    for (var _g1 = from, _g = this1.length; _g > _g1;) {
      var i = _g1++;
      if (this1.data[i] == x) return i
    }
    return -1
  }, openfl._Vector.Vector_Impl_.lastIndexOf = function(this1, x, from) {
    null == from && (from = 0);
    for (var i = this1.length - 1; i >= from;) {
      if (this1.data[i] == x) return i;
      i--
    }
    return -1
  }, openfl._Vector.Vector_Impl_.ofArray = function(a) {
    var vectorData = new openfl.VectorData;
    vectorData.length = a.length, vectorData.fixed = !0;
    var vec, this1;
    this1 = new Array(a.length), vec = this1;
    for (var _g1 = 0, _g = a.length; _g > _g1;) {
      var i = _g1++;
      vec[i] = a[i]
    }
    return vectorData.data = vec, vectorData
  }, openfl._Vector.Vector_Impl_.convert = function(v) {
    return v
  }, openfl._Vector.Vector_Impl_.arrayAccess = function(this1, key) {
    return this1.data[key]
  }, openfl._Vector.Vector_Impl_.arrayWrite = function(this1, key, value) {
    return key >= this1.length && !this1.fixed && (this1.length = key + 1), this1.data[key] = value
  }, openfl._Vector.Vector_Impl_.fromArray = function(value) {
    var vectorData = new openfl.VectorData;
    vectorData.length = value.length, vectorData.fixed = !0;
    var vec, this1;
    this1 = new Array(value.length), vec = this1;
    for (var _g1 = 0, _g = value.length; _g > _g1;) {
      var i = _g1++;
      vec[i] = value[i]
    }
    return vectorData.data = vec, vectorData
  }, openfl._Vector.Vector_Impl_.toArray = function(this1) {
    for (var value = new Array, _g1 = 0, _g = this1.data.length; _g > _g1;) {
      var i = _g1++;
      value.push(this1.data[i])
    }
    return value
  }, openfl._Vector.Vector_Impl_.fromHaxeVector = function(value) {
    var vectorData = new openfl.VectorData;
    return vectorData.length = value.length, vectorData.fixed = !0, vectorData.data = value, vectorData
  }, openfl._Vector.Vector_Impl_.toHaxeVector = function(this1) {
    return this1.data
  }, openfl._Vector.Vector_Impl_.fromVectorData = function(value) {
    return value
  }, openfl._Vector.Vector_Impl_.toVectorData = function(this1) {
    return this1
  }, openfl._Vector.Vector_Impl_.get_length = function(this1) {
    return this1.length
  }, openfl._Vector.Vector_Impl_.set_length = function(this1, value) {
    if (!this1.fixed) {
      if (value > this1.length) {
        var data, this2;
        this2 = new Array(value), data = this2, haxe.ds._Vector.Vector_Impl_.blit(this1.data, 0, data, 0, Std["int"](Math.min(this1.data.length, value))), this1.data = data
      }
      this1.length = value
    }
    return value
  }, openfl._Vector.Vector_Impl_.get_fixed = function(this1) {
    return this1.fixed
  }, openfl._Vector.Vector_Impl_.set_fixed = function(this1, value) {
    return this1.fixed = value
  }, openfl.VectorData = function() {
    this.length = 0
  }, $hxClasses["openfl.VectorData"] = openfl.VectorData, openfl.VectorData.__name__ = ["openfl", "VectorData"], openfl.VectorData.prototype = {
    data: null,
    fixed: null,
    length: null,
    __class__: openfl.VectorData
  }, openfl.VectorDataIterator = function(data) {
    this.index = 0, this.vectorData = data
  }, $hxClasses["openfl.VectorDataIterator"] = openfl.VectorDataIterator, openfl.VectorDataIterator.__name__ = ["openfl", "VectorDataIterator"], openfl.VectorDataIterator.prototype = {
    index: null,
    vectorData: null,
    hasNext: function() {
      return this.index < this.vectorData.length
    },
    next: function() {
      var index = this.index++;
      return this.vectorData.data[index]
    },
    __class__: openfl.VectorDataIterator
  }, openfl.display.Bitmap = function(bitmapData, pixelSnapping, smoothing) {
    null == smoothing && (smoothing = !1), openfl.display.DisplayObjectContainer.call(this), this.bitmapData = bitmapData, this.pixelSnapping = pixelSnapping, this.smoothing = smoothing, null == pixelSnapping && (this.pixelSnapping = openfl.display.PixelSnapping.AUTO)
  }, $hxClasses["openfl.display.Bitmap"] = openfl.display.Bitmap, openfl.display.Bitmap.__name__ = ["openfl", "display", "Bitmap"], openfl.display.Bitmap.__super__ = openfl.display.DisplayObjectContainer, openfl.display.Bitmap.prototype = $extend(openfl.display.DisplayObjectContainer.prototype, {
    bitmapData: null,
    pixelSnapping: null,
    smoothing: null,
    __canvas: null,
    __canvasContext: null,
    __image: null,
    __getBounds: function(rect) {
      if (null != this.bitmapData) {
        var bounds = new openfl.geom.Rectangle(0, 0, this.bitmapData.width, this.bitmapData.height);
        bounds = bounds.transform(this.__worldTransform), rect.__expand(bounds.x, bounds.y, bounds.width, bounds.height)
      }
    },
    __hitTest: function(x, y, shapeFlag, stack) {
      if (!this.get_visible() || null == this.bitmapData) return !1;
      var point = this.globalToLocal(new openfl.geom.Point(x, y));
      return point.x > 0 && point.y > 0 && point.x <= this.bitmapData.width && point.y <= this.bitmapData.height ? (null != stack && stack.push(this), !0) : !1
    },
    __renderCanvas: function(renderSession) {
      if (this.__renderable && !(this.__worldAlpha <= 0)) {
        var context = renderSession.context;
        if (null != this.bitmapData && this.bitmapData.__valid) {
          null != this.__mask && renderSession.maskManager.pushMask(this.__mask), this.bitmapData.__syncImageData(), context.globalAlpha = this.__worldAlpha;
          var transform = this.__worldTransform;
          renderSession.roundPixels ? context.setTransform(transform.a, transform.b, transform.c, transform.d, 0 | transform.tx, 0 | transform.ty) : context.setTransform(transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty), this.smoothing || (context.mozImageSmoothingEnabled = !1, context.webkitImageSmoothingEnabled = !1, context.imageSmoothingEnabled = !1), null == this.get_scrollRect() ? null != this.bitmapData.__sourceImage ? context.drawImage(this.bitmapData.__sourceImage, 0, 0) : context.drawImage(this.bitmapData.__sourceCanvas, 0, 0) : null != this.bitmapData.__sourceImage ? context.drawImage(this.bitmapData.__sourceImage, this.get_scrollRect().x, this.get_scrollRect().y, this.get_scrollRect().width, this.get_scrollRect().height, this.get_scrollRect().x, this.get_scrollRect().y, this.get_scrollRect().width, this.get_scrollRect().height) : context.drawImage(this.bitmapData.__sourceCanvas, this.get_scrollRect().x, this.get_scrollRect().y, this.get_scrollRect().width, this.get_scrollRect().height, this.get_scrollRect().x, this.get_scrollRect().y, this.get_scrollRect().width, this.get_scrollRect().height), this.smoothing || (context.mozImageSmoothingEnabled = !0, context.webkitImageSmoothingEnabled = !0, context.imageSmoothingEnabled = !0), null != this.__mask && renderSession.maskManager.popMask()
        }
      }
    },
    __renderDOM: function(renderSession) {
      null != this.stage && this.__worldVisible && this.__renderable && null != this.bitmapData && this.bitmapData.__valid ? null != this.bitmapData.__sourceImage ? this.__renderDOMImage(renderSession) : this.__renderDOMCanvas(renderSession) : (null != this.__image && (renderSession.element.removeChild(this.__image), this.__image = null, this.__style = null), null != this.__canvas && (renderSession.element.removeChild(this.__canvas), this.__canvas = null, this.__style = null))
    },
    __renderDOMCanvas: function(renderSession) {
      null != this.__image && (renderSession.element.removeChild(this.__image), this.__image = null), null == this.__canvas && (this.__canvas = window.document.createElement("canvas"), this.__canvasContext = this.__canvas.getContext("2d"), this.smoothing || (this.__canvasContext.mozImageSmoothingEnabled = !1, this.__canvasContext.webkitImageSmoothingEnabled = !1, this.__canvasContext.imageSmoothingEnabled = !1), this.__initializeElement(this.__canvas, renderSession)), this.bitmapData.__syncImageData(), this.__canvas.width = this.bitmapData.width, this.__canvas.height = this.bitmapData.height, this.__canvasContext.globalAlpha = this.__worldAlpha, this.__canvasContext.drawImage(this.bitmapData.__sourceCanvas, 0, 0), this.__applyStyle(renderSession, !0, !1, !0)
    },
    __renderDOMImage: function(renderSession) {
      null != this.__canvas && (renderSession.element.removeChild(this.__canvas), this.__canvas = null), null == this.__image && (this.__image = window.document.createElement("img"), this.__image.src = this.bitmapData.__sourceImage.src, this.__initializeElement(this.__image, renderSession)), this.__applyStyle(renderSession, !0, !0, !0)
    },
    __renderMask: function(renderSession) {
      renderSession.context.rect(0, 0, this.get_width(), this.get_height())
    },
    get_height: function() {
      return null != this.bitmapData ? this.bitmapData.height * this.get_scaleY() : 0
    },
    set_height: function(value) {
      return null != this.bitmapData ? (value != this.bitmapData.height && (this.__transformDirty || (this.__transformDirty = !0, openfl.display.DisplayObject.__worldTransformDirty++), this.set_scaleY(value / this.bitmapData.height)), value) : 0
    },
    get_width: function() {
      return null != this.bitmapData ? this.bitmapData.width * this.get_scaleX() : 0
    },
    set_width: function(value) {
      return null != this.bitmapData ? (value != this.bitmapData.width && (this.__transformDirty || (this.__transformDirty = !0, openfl.display.DisplayObject.__worldTransformDirty++), this.set_scaleX(value / this.bitmapData.width)), value) : 0
    },
    __class__: openfl.display.Bitmap
  }), openfl.display.BitmapData = function(width, height, transparent, fillColor) {
    null == fillColor && (fillColor = -1), null == transparent && (transparent = !0), this.transparent = transparent, width > 0 && height > 0 && (this.width = width, this.height = height, this.rect = new openfl.geom.Rectangle(0, 0, width, height), this.__createCanvas(width, height), transparent || (fillColor = -16777216 | 16777215 & fillColor), this.__fillRect(new openfl.geom.Rectangle(0, 0, width, height), fillColor))
  }, $hxClasses["openfl.display.BitmapData"] = openfl.display.BitmapData, openfl.display.BitmapData.__name__ = ["openfl", "display", "BitmapData"], openfl.display.BitmapData.__interfaces__ = [openfl.display.IBitmapDrawable], openfl.display.BitmapData.__base64Encoder = null, openfl.display.BitmapData.fromBase64 = function(base64, type, onload) {
    var bitmapData = new openfl.display.BitmapData(0, 0, !0);
    return bitmapData.__loadFromBase64(base64, type, onload), bitmapData
  }, openfl.display.BitmapData.fromBytes = function(bytes, rawAlpha, onload) {
    var bitmapData = new openfl.display.BitmapData(0, 0, !0);
    return bitmapData.__loadFromBytes(bytes, rawAlpha, onload), bitmapData
  }, openfl.display.BitmapData.fromFile = function(path, onload, onfail) {
    var bitmapData = new openfl.display.BitmapData(0, 0, !0);
    return bitmapData.__sourceImage = new Image, bitmapData.__sourceImage.onload = function() {
      bitmapData.width = bitmapData.__sourceImage.width, bitmapData.height = bitmapData.__sourceImage.height, bitmapData.rect = new openfl.geom.Rectangle(0, 0, bitmapData.__sourceImage.width, bitmapData.__sourceImage.height), bitmapData.__valid = !0, null != onload && onload(bitmapData)
    }, bitmapData.__sourceImage.onerror = function() {
      bitmapData.__valid = !1, null != onfail && onfail()
    }, bitmapData.__sourceImage.src = path, bitmapData.__sourceImage.complete, bitmapData
  }, openfl.display.BitmapData.fromImage = function(image, transparent) {
    null == transparent && (transparent = !0);
    var bitmapData = new openfl.display.BitmapData(0, 0, transparent);
    return bitmapData.__sourceImage = image, bitmapData.width = image.width, bitmapData.height = image.height, bitmapData.rect = new openfl.geom.Rectangle(0, 0, image.width, image.height), bitmapData.__valid = !0, bitmapData
  }, openfl.display.BitmapData.fromCanvas = function(canvas, transparent) {
    null == transparent && (transparent = !0);
    var bitmapData = new openfl.display.BitmapData(0, 0, transparent);
    return bitmapData.width = canvas.width, bitmapData.height = canvas.height, bitmapData.rect = new openfl.geom.Rectangle(0, 0, canvas.width, canvas.height), bitmapData.__createCanvas(canvas.width, canvas.height), bitmapData.__sourceContext.drawImage(canvas, 0, 0), bitmapData
  }, openfl.display.BitmapData.__base64Encode = function(bytes) {
    var extension, _g = bytes.length % 3;
    switch (_g) {
      case 1:
        extension = "==";
        break;
      case 2:
        extension = "=";
        break;
      default:
        extension = ""
    }
    return null == openfl.display.BitmapData.__base64Encoder && (openfl.display.BitmapData.__base64Encoder = new haxe.crypto.BaseCode(haxe.io.Bytes.ofString(openfl.display.BitmapData.__base64Chars))), openfl.display.BitmapData.__base64Encoder.encodeBytes(haxe.io.Bytes.ofData(bytes.byteView)).toString() + extension
  }, openfl.display.BitmapData.__flipPixel = function(pixel) {
    return (255 & pixel) << 24 | (pixel >> 8 & 255) << 16 | (pixel >> 16 & 255) << 8 | pixel >> 24 & 255
  }, openfl.display.BitmapData.__isJPG = function(bytes) {
    return bytes.position = 0, 255 == bytes.readByte() && 216 == bytes.readByte()
  }, openfl.display.BitmapData.__isPNG = function(bytes) {
    return bytes.position = 0, 137 == bytes.readByte() && 80 == bytes.readByte() && 78 == bytes.readByte() && 71 == bytes.readByte() && 13 == bytes.readByte() && 10 == bytes.readByte() && 26 == bytes.readByte() && 10 == bytes.readByte()
  }, openfl.display.BitmapData.__isGIF = function(bytes) {
    if (bytes.position = 0, 71 == bytes.readByte() && 73 == bytes.readByte() && 70 == bytes.readByte() && 38 == bytes.readByte()) {
      var b = bytes.readByte();
      return (7 == b || 9 == b) && 97 == bytes.readByte()
    }
    return !1
  }, openfl.display.BitmapData.__ucompare = function(n1, n2) {
    var tmp1, tmp2;
    return tmp1 = n1 >> 24 & 255, tmp2 = n2 >> 24 & 255, tmp1 != tmp2 ? tmp1 > tmp2 ? 1 : -1 : (tmp1 = n1 >> 16 & 255, tmp2 = n2 >> 16 & 255, tmp1 != tmp2 ? tmp1 > tmp2 ? 1 : -1 : (tmp1 = n1 >> 8 & 255, tmp2 = n2 >> 8 & 255, tmp1 != tmp2 ? tmp1 > tmp2 ? 1 : -1 : (tmp1 = 255 & n1, tmp2 = 255 & n2, tmp1 != tmp2 ? tmp1 > tmp2 ? 1 : -1 : 0)))
  }, openfl.display.BitmapData.prototype = {
    height: null,
    rect: null,
    transparent: null,
    width: null,
    __glTexture: null,
    __worldTransform: null,
    __loading: null,
    __sourceCanvas: null,
    __sourceContext: null,
    __sourceImage: null,
    __sourceImageData: null,
    __sourceImageDataChanged: null,
    __valid: null,
    applyFilter: function(sourceBitmapData, sourceRect, destPoint, filter) {
      this.__valid && null != sourceBitmapData && sourceBitmapData.__valid && (this.__convertToCanvas(), this.__createImageData(), sourceBitmapData.__convertToCanvas(), sourceBitmapData.__createImageData(), filter.__applyFilter(this.__sourceImageData, sourceBitmapData.__sourceImageData, sourceRect, destPoint), this.__sourceImageDataChanged = !0)
    },
    clone: function() {
      return this.__syncImageData(), this.__valid ? null != this.__sourceImage ? openfl.display.BitmapData.fromImage(this.__sourceImage, this.transparent) : openfl.display.BitmapData.fromCanvas(this.__sourceCanvas, this.transparent) : new openfl.display.BitmapData(this.width, this.height, this.transparent)
    },
    colorTransform: function(rect, colorTransform) {
      if (rect = this.__clipRect(rect), this.__valid && null != rect) {
        this.__convertToCanvas(), this.__createImageData();
        for (var offset, data = this.__sourceImageData.data, stride = 4 * this.width, _g1 = 0 | rect.y, _g = 0 | rect.height; _g > _g1;)
          for (var row = _g1++, _g3 = 0 | rect.x, _g2 = 0 | rect.width; _g2 > _g3;) {
            var column = _g3++;
            offset = row * stride + 4 * column, data[offset] = data[offset] * colorTransform.redMultiplier + colorTransform.redOffset | 0, data[offset + 1] = data[offset + 1] * colorTransform.greenMultiplier + colorTransform.greenOffset | 0, data[offset + 2] = data[offset + 2] * colorTransform.blueMultiplier + colorTransform.blueOffset | 0, data[offset + 3] = data[offset + 3] * colorTransform.alphaMultiplier + colorTransform.alphaOffset | 0
          }
        this.__sourceImageDataChanged = !0
      }
    },
    copyChannel: function(sourceBitmapData, sourceRect, destPoint, sourceChannel, destChannel) {
      if (sourceRect = this.__clipRect(sourceRect), this.__valid && null != sourceRect && (8 != destChannel || this.transparent) && !(sourceRect.width <= 0 || sourceRect.height <= 0)) {
        sourceRect.x + sourceRect.width > sourceBitmapData.width && (sourceRect.width = sourceBitmapData.width - sourceRect.x), sourceRect.y + sourceRect.height > sourceBitmapData.height && (sourceRect.height = sourceBitmapData.height - sourceRect.y);
        var destIdx = -1;
        if (8 == destChannel) destIdx = 3;
        else if (4 == destChannel) destIdx = 2;
        else if (2 == destChannel) destIdx = 1;
        else {
          if (1 != destChannel) throw "Invalid destination BitmapDataChannel passed to BitmapData::copyChannel.";
          destIdx = 0
        }
        var srcIdx = -1;
        if (8 == sourceChannel) srcIdx = 3;
        else if (4 == sourceChannel) srcIdx = 2;
        else if (2 == sourceChannel) srcIdx = 1;
        else {
          if (1 != sourceChannel) throw "Invalid source BitmapDataChannel passed to BitmapData::copyChannel.";
          srcIdx = 0
        }
        sourceBitmapData.__convertToCanvas(), sourceBitmapData.__createImageData();
        var srcData = sourceBitmapData.__sourceImageData.data,
          srcStride = 4 * sourceBitmapData.width | 0,
          srcPosition = 4 * sourceRect.x + srcStride * sourceRect.y + srcIdx | 0,
          srcRowOffset = srcStride - (4 * sourceRect.width | 0),
          srcRowEnd = 4 * (sourceRect.x + sourceRect.width) | 0;
        this.__convertToCanvas(), this.__createImageData();
        for (var destData = this.__sourceImageData.data, destStride = 4 * this.width | 0, destPosition = 4 * destPoint.x + destStride * destPoint.y + destIdx | 0, destRowOffset = destStride - (4 * sourceRect.width | 0), destRowEnd = 4 * (destPoint.x + sourceRect.width) | 0, length = sourceRect.width * sourceRect.height | 0, _g = 0; length > _g;) {
          {
            _g++
          }
          destData[destPosition] = srcData[srcPosition], srcPosition += 4, destPosition += 4, srcPosition % srcStride > srcRowEnd && (srcPosition += srcRowOffset), destPosition % destStride > destRowEnd && (destPosition += destRowOffset)
        }
        this.__sourceImageDataChanged = !0
      }
    },
    copyPixels: function(sourceBitmapData, sourceRect, destPoint, alphaBitmapData, alphaPoint, mergeAlpha) {
      if (null == mergeAlpha && (mergeAlpha = !1), this.__valid && null != sourceBitmapData && (sourceRect.x + sourceRect.width > sourceBitmapData.width && (sourceRect.width = sourceBitmapData.width - sourceRect.x), sourceRect.y + sourceRect.height > sourceBitmapData.height && (sourceRect.height = sourceBitmapData.height - sourceRect.y), !(sourceRect.width <= 0 || sourceRect.height <= 0))) {
        if (null != alphaBitmapData && alphaBitmapData.transparent) {
          null == alphaPoint && (alphaPoint = new openfl.geom.Point);
          var tempData = this.clone();
          tempData.copyChannel(alphaBitmapData, new openfl.geom.Rectangle(alphaPoint.x, alphaPoint.y, sourceRect.width, sourceRect.height), new openfl.geom.Point(sourceRect.x, sourceRect.y), 8, 8), sourceBitmapData = tempData
        }
        this.__syncImageData(), mergeAlpha || this.transparent && sourceBitmapData.transparent && this.__sourceContext.clearRect(destPoint.x, destPoint.y, sourceRect.width, sourceRect.height), sourceBitmapData.__syncImageData(), null != sourceBitmapData.__sourceImage ? this.__sourceContext.drawImage(sourceBitmapData.__sourceImage, 0 | sourceRect.x, 0 | sourceRect.y, 0 | sourceRect.width, 0 | sourceRect.height, 0 | destPoint.x, 0 | destPoint.y, 0 | sourceRect.width, 0 | sourceRect.height) : null != sourceBitmapData.__sourceCanvas && this.__sourceContext.drawImage(sourceBitmapData.__sourceCanvas, 0 | sourceRect.x, 0 | sourceRect.y, 0 | sourceRect.width, 0 | sourceRect.height, 0 | destPoint.x, 0 | destPoint.y, 0 | sourceRect.width, 0 | sourceRect.height)
      }
    },
    dispose: function() {
      this.__sourceImage = null, this.__sourceCanvas = null, this.__sourceContext = null, this.width = 0, this.height = 0, this.rect = null, this.__valid = !1
    },
    draw: function(source, matrix, colorTransform, blendMode, clipRect, smoothing) {
      if (null == smoothing && (smoothing = !1), this.__valid) {
        this.__convertToCanvas(), this.__syncImageData();
        var renderSession = new openfl.display.RenderSession;
        renderSession.context = this.__sourceContext, renderSession.roundPixels = !0, smoothing || (this.__sourceContext.mozImageSmoothingEnabled = !1, this.__sourceContext.webkitImageSmoothingEnabled = !1, this.__sourceContext.imageSmoothingEnabled = !1);
        var matrixCache = source.__worldTransform;
        source.__worldTransform = null != matrix ? matrix : new openfl.geom.Matrix, source.__updateChildren(!1), source.__renderCanvas(renderSession), source.__worldTransform = matrixCache, source.__updateChildren(!0), smoothing || (this.__sourceContext.mozImageSmoothingEnabled = !0, this.__sourceContext.webkitImageSmoothingEnabled = !0, this.__sourceContext.imageSmoothingEnabled = !0), this.__sourceContext.setTransform(1, 0, 0, 1, 0, 0)
      }
    },
    encode: function() {
      return openfl.Lib.notImplemented("BitmapData.encode"), null
    },
    fillRect: function(rect, color) {
      return rect = this.__clipRect(rect), this.__valid && null != rect ? (this.__convertToCanvas(), this.__syncImageData(), 0 == rect.x && 0 == rect.y && rect.width == this.width && rect.height == this.height && this.transparent && 0 == (-16777216 & color) ? void(this.__sourceCanvas.width = this.width) : void this.__fillRect(rect, color)) : void 0
    },
    floodFill: function(x, y, color) {
      if (this.__valid) {
        this.__convertToCanvas(), this.__createImageData();
        var hitColorA, data = this.__sourceImageData.data,
          offset = 4 * y * this.width + 4 * x,
          hitColorR = data[offset],
          hitColorG = data[offset + 1],
          hitColorB = data[offset + 2];
        hitColorA = this.transparent ? data[offset + 3] : 255;
        var a, r = (16711680 & color) >>> 16,
          g = (65280 & color) >>> 8,
          b = 255 & color;
        if (a = this.transparent ? (-16777216 & color) >>> 24 : 255, hitColorR != r || hitColorG != g || hitColorB != b || hitColorA != a) {
          var dx = [0, -1, 1, 0],
            dy = [-1, 0, 0, 1],
            queue = new Array;
          for (queue.push(x), queue.push(y); queue.length > 0;)
            for (var curPointY = queue.pop(), curPointX = queue.pop(), _g = 0; 4 > _g;) {
              var i = _g++,
                nextPointX = curPointX + dx[i],
                nextPointY = curPointY + dy[i];
              if (!(0 > nextPointX || 0 > nextPointY || nextPointX >= this.width || nextPointY >= this.height)) {
                var nextPointOffset = 4 * (nextPointY * this.width + nextPointX);
                data[nextPointOffset] == hitColorR && data[nextPointOffset + 1] == hitColorG && data[nextPointOffset + 2] == hitColorB && data[nextPointOffset + 3] == hitColorA && (data[nextPointOffset] = r, data[nextPointOffset + 1] = g, data[nextPointOffset + 2] = b, data[nextPointOffset + 3] = a, queue.push(nextPointX), queue.push(nextPointY))
              }
            }
          this.__sourceImageDataChanged = !0
        }
      }
    },
    generateFilterRect: function(sourceRect) {
      return sourceRect.clone()
    },
    getColorBoundsRect: function(mask, color, findColor) {
      return null == findColor && (findColor = !0), this.rect.clone()
    },
    getPixel: function(x, y) {
      if (!this.__valid || 0 > x || 0 > y || x >= this.width || y >= this.height) return 0;
      this.__convertToCanvas(), this.__createImageData();
      var offset = 4 * y * this.width + 4 * x;
      return this.__sourceImageData.data[offset] << 16 | this.__sourceImageData.data[offset + 1] << 8 | this.__sourceImageData.data[offset + 2]
    },
    getPixel32: function(x, y) {
      return !this.__valid || 0 > x || 0 > y || x >= this.width || y >= this.height ? 0 : (this.__convertToCanvas(), this.__createImageData(), this.__getInt32(4 * y * this.width + 4 * x, this.__sourceImageData.data))
    },
    getPixels: function(rect) {
      if (!this.__valid) return null;
      this.__convertToCanvas(), this.__createImageData();
      var byteArray = new openfl.utils.ByteArray;
      if (null == rect || rect.equals(this.rect)) byteArray.set_length(this.__sourceImageData.data.length), byteArray.byteView.set(this.__sourceImageData.data);
      else {
        var srcData = this.__sourceImageData.data,
          srcStride = 4 * this.width | 0,
          srcPosition = 4 * rect.x + srcStride * rect.y | 0,
          srcRowOffset = srcStride - (4 * rect.width | 0),
          srcRowEnd = 4 * (rect.x + rect.width) | 0,
          length = 4 * rect.width * rect.height | 0;
        byteArray.allocated < length ? byteArray.___resizeBuffer(byteArray.allocated = Std["int"](Math.max(length, 2 * byteArray.allocated))) : byteArray.allocated > length && byteArray.___resizeBuffer(byteArray.allocated = length), byteArray.length = length;
        for (var _g = 0; length > _g;) {
          var i = _g++;
          byteArray.__set(i, srcData[srcPosition++]), srcPosition % srcStride > srcRowEnd && (srcPosition += srcRowOffset)
        }
      }
      return byteArray.position = 0, byteArray
    },
    getVector: function(rect) {
      for (var pixels = this.getPixels(rect), result = openfl._Vector.Vector_Impl_._new(), _g1 = 0, _g = pixels.length / 4 | 0; _g > _g1;) {
        var x = (_g1++, pixels.readUnsignedInt());
        if (!result.fixed) {
          if (result.length++, result.data.length < result.length) {
            var data, this1;
            this1 = new Array(result.data.length + 10), data = this1, haxe.ds._Vector.Vector_Impl_.blit(result.data, 0, data, 0, result.data.length), result.data = data
          }
          result.data[result.length - 1] = x
        }
        result.length
      }
      return result
    },
    histogram: function(hRect) {
      var rect;
      rect = null != hRect ? hRect : new openfl.geom.Rectangle(0, 0, this.width, this.height);
      for (var result, pixels = this.getPixels(rect), _g = [], _g1 = 0; 4 > _g1;) {
        {
          _g1++
        }
        _g.push(function() {
          for (var $r, _g2 = [], _g3 = 0; 256 > _g3;) {
            {
              _g3++
            }
            _g2.push(0)
          }
          return $r = _g2
        }(this))
      }
      result = _g;
      for (var _g21 = 0, _g11 = pixels.length; _g11 > _g21;) {
        var i1 = _g21++;
        ++result[i1 % 4][pixels.readUnsignedByte()]
      }
      return result
    },
    hitTest: function(firstPoint, firstAlphaThreshold, secondObject, secondBitmapDataPoint, secondAlphaThreshold) {
      return null == secondAlphaThreshold && (secondAlphaThreshold = 1), this.__valid ? (openfl.Lib.notImplemented("BitmapData.hitTest"), !1) : !1
    },
    lock: function() {},
    noise: function(randomSeed, low, high, channelOptions, grayScale) {
      null == grayScale && (grayScale = !1), null == channelOptions && (channelOptions = 7), null == high && (high = 255), null == low && (low = 0), this.__valid && openfl.Lib.notImplemented("BitmapData.noise")
    },
    paletteMap: function(sourceBitmapData, sourceRect, destPoint, redArray, greenArray, blueArray) {
      var memory = new openfl.utils.ByteArray,
        sw = 0 | sourceRect.width,
        sh = 0 | sourceRect.height;
      memory.set_length(sw * sh * 4), memory = this.getPixels(sourceRect), memory.position = 0, openfl.Memory.select(memory);
      for (var position, pixelValue, r, g, b, color, _g1 = 0, _g = sh * sw; _g > _g1;) {
        var i = _g1++;
        position = 4 * i, pixelValue = openfl.Memory.getI32(position), r = pixelValue >> 8 & 255, g = pixelValue >> 16 & 255, b = pixelValue >> 24 & 255, color = openfl.display.BitmapData.__flipPixel(-16777216 | redArray[r] | greenArray[g] | blueArray[b]), openfl.Memory.setI32(position, color)
      }
      memory.position = 0;
      var destRect = new openfl.geom.Rectangle(destPoint.x, destPoint.y, sw, sh);
      this.setPixels(destRect, memory), openfl.Memory.select(null)
    },
    perlinNoise: function(baseX, baseY, numOctaves, randomSeed, stitch, fractalNoise, channelOptions, grayScale) {
      null == grayScale && (grayScale = !1), null == channelOptions && (channelOptions = 7), openfl.Lib.notImplemented("BitmapData.perlinNoise")
    },
    scroll: function() {
      openfl.Lib.notImplemented("BitmapData.scroll")
    },
    setVector: function(rect, inputVector) {
      var byteArray = new openfl.utils.ByteArray;
      byteArray.set_length(4 * inputVector.length);
      for (var _g = 0; _g < inputVector.length;) {
        var color = inputVector.data[_g];
        ++_g, byteArray.writeUnsignedInt(color)
      }
      byteArray.position = 0, this.setPixels(rect, byteArray)
    },
    setPixel: function(x, y, color) {
      if (!(!this.__valid || 0 > x || 0 > y || x >= this.width || y >= this.height)) {
        this.__convertToCanvas(), this.__createImageData();
        var offset = 4 * y * this.width + 4 * x;
        this.__sourceImageData.data[offset] = (16711680 & color) >>> 16, this.__sourceImageData.data[offset + 1] = (65280 & color) >>> 8, this.__sourceImageData.data[offset + 2] = 255 & color, this.transparent && (this.__sourceImageData.data[offset + 3] = 255), this.__sourceImageDataChanged = !0
      }
    },
    setPixel32: function(x, y, color) {
      if (!(!this.__valid || 0 > x || 0 > y || x >= this.width || y >= this.height)) {
        this.__convertToCanvas(), this.__createImageData();
        var offset = 4 * y * this.width + 4 * x;
        this.__sourceImageData.data[offset] = (16711680 & color) >>> 16, this.__sourceImageData.data[offset + 1] = (65280 & color) >>> 8, this.__sourceImageData.data[offset + 2] = 255 & color, this.__sourceImageData.data[offset + 3] = this.transparent ? (-16777216 & color) >>> 24 : 255, this.__sourceImageDataChanged = !0
      }
    },
    setPixels: function(rect, byteArray) {
      if (rect = this.__clipRect(rect), this.__valid && null != rect) {
        this.__convertToCanvas();
        var len = Math.round(4 * rect.width * rect.height);
        if (0 == rect.x && 0 == rect.y && rect.width == this.width && rect.height == this.height) null == this.__sourceImageData && (this.__sourceImageData = this.__sourceContext.createImageData(this.width, this.height)), this.__sourceImageData.data.set(byteArray.byteView);
        else {
          this.__createImageData();
          for (var offset = Math.round(4 * this.width * rect.y + 4 * rect.x), pos = offset, boundR = Math.round(4 * (rect.x + rect.width)), data = this.__sourceImageData.data, _g = 0; len > _g;) {
            {
              _g++
            }
            pos % (4 * this.width) > boundR - 1 && (pos += 4 * this.width - boundR), data[pos] = byteArray.readByte(), pos++
          }
        }
        this.__sourceImageDataChanged = !0
      }
    },
    threshold: function(sourceBitmapData, sourceRect, destPoint, operation, threshold, color, mask, copySource) {
      if (null == copySource && (copySource = !1), null == mask && (mask = -1), null == color && (color = 0), sourceBitmapData == this && sourceRect.equals(this.rect) && 0 == destPoint.x && 0 == destPoint.y) {
        var hits = 0;
        threshold = (255 & threshold) << 24 | (threshold >> 8 & 255) << 16 | (threshold >> 16 & 255) << 8 | threshold >> 24 & 255, color = (255 & color) << 24 | (color >> 8 & 255) << 16 | (color >> 16 & 255) << 8 | color >> 24 & 255;
        var memory = new openfl.utils.ByteArray;
        memory.set_length(this.width * this.height * 4), memory = this.getPixels(this.rect), memory.position = 0, openfl.Memory.select(memory);
        for (var width_yy, position, pixelMask, pixelValue, i, test, thresholdMask = threshold & mask, _g1 = 0, _g = this.height; _g > _g1;) {
          var yy = _g1++;
          width_yy = this.width * yy;
          for (var _g3 = 0, _g2 = this.width; _g2 > _g3;) {
            var xx = _g3++;
            position = 4 * (width_yy + xx), pixelValue = openfl.Memory.getI32(position), pixelMask = pixelValue & mask, i = openfl.display.BitmapData.__ucompare(pixelMask, thresholdMask), test = !1, "==" == operation ? test = 0 == i : "<" == operation ? test = -1 == i : ">" == operation ? test = 1 == i : "!=" == operation ? test = 0 != i : "<=" == operation ? test = 0 == i || -1 == i : ">=" == operation && (test = 0 == i || 1 == i), test && (openfl.Memory.setI32(position, color), hits++)
          }
        }
        return memory.position = 0, this.setPixels(this.rect, memory), openfl.Memory.select(null), hits
      } {
        var dw, sx = 0 | sourceRect.x,
          sy = 0 | sourceRect.y,
          sw = 0 | sourceBitmapData.width,
          sh = 0 | sourceBitmapData.height,
          dx = 0 | destPoint.x,
          dy = 0 | destPoint.y,
          bw = this.width - sw - dx;
        this.height - sh - dy
      }
      dw = 0 > bw ? sw + (this.width - sw - dx) : sw;
      var dh;
      dh = 0 > bw ? sh + (this.height - sh - dy) : sh;
      var hits1 = 0;
      threshold = (255 & threshold) << 24 | (threshold >> 8 & 255) << 16 | (threshold >> 16 & 255) << 8 | threshold >> 24 & 255, color = (255 & color) << 24 | (color >> 8 & 255) << 16 | (color >> 16 & 255) << 8 | color >> 24 & 255;
      var canvasMemory = sw * sh * 4,
        sourceMemory = 0;
      copySource && (sourceMemory = sw * sh * 4);
      var totalMemory = canvasMemory + sourceMemory,
        memory1 = new openfl.utils.ByteArray;
      memory1.allocated < totalMemory ? memory1.___resizeBuffer(memory1.allocated = Std["int"](Math.max(totalMemory, 2 * memory1.allocated))) : memory1.allocated > totalMemory && memory1.___resizeBuffer(memory1.allocated = totalMemory), memory1.length = totalMemory, memory1.position = 0;
      var bitmapData = sourceBitmapData.clone(),
        pixels = bitmapData.getPixels(sourceRect);
      memory1.writeBytes(pixels), memory1.position = canvasMemory, copySource && memory1.writeBytes(pixels), memory1.position = 0, openfl.Memory.select(memory1);
      for (var position1, pixelMask1, pixelValue1, i1, test1, thresholdMask1 = threshold & mask, _g4 = 0; dh > _g4;)
        for (var yy1 = _g4++, _g11 = 0; dw > _g11;) {
          var xx1 = _g11++;
          position1 = 4 * (xx1 + sx + (yy1 + sy) * sw), pixelValue1 = openfl.Memory.getI32(position1), pixelMask1 = pixelValue1 & mask, i1 = openfl.display.BitmapData.__ucompare(pixelMask1, thresholdMask1), test1 = !1, "==" == operation ? test1 = 0 == i1 : "<" == operation ? test1 = -1 == i1 : ">" == operation ? test1 = 1 == i1 : "!=" == operation ? test1 = 0 != i1 : "<=" == operation ? test1 = 0 == i1 || -1 == i1 : ">=" == operation && (test1 = 0 == i1 || 1 == i1), test1 ? (openfl.Memory.setI32(position1, color), hits1++) : copySource && openfl.Memory.setI32(position1, openfl.Memory.getI32(canvasMemory + position1))
        }
      return memory1.position = 0, bitmapData.setPixels(sourceRect, memory1), this.copyPixels(bitmapData, bitmapData.rect, destPoint), openfl.Memory.select(null), hits1
    },
    unlock: function() {},
    __clipRect: function(r) {
      return null == r ? null : r.x < 0 && (r.width -= -r.x, r.x = 0, r.x + r.width <= 0) ? null : r.y < 0 && (r.height -= -r.y, r.y = 0, r.y + r.height <= 0) ? null : r.x + r.width >= this.width && (r.width -= r.x + r.width - this.width, r.width <= 0) ? null : r.y + r.height >= this.height && (r.height -= r.y + r.height - this.height, r.height <= 0) ? null : r
    },
    __convertToCanvas: function() {
      this.__loading || null != this.__sourceImage && (null == this.__sourceCanvas && (this.__createCanvas(this.__sourceImage.width, this.__sourceImage.height), this.__sourceContext.drawImage(this.__sourceImage, 0, 0)), this.__sourceImage = null)
    },
    __createCanvas: function(width, height) {
      null == this.__sourceCanvas && (this.__sourceCanvas = window.document.createElement("canvas"), this.__sourceCanvas.width = width, this.__sourceCanvas.height = height, this.transparent ? this.__sourceContext = this.__sourceCanvas.getContext("2d") : (this.transparent || this.__sourceCanvas.setAttribute("moz-opaque", "true"), this.__sourceContext = this.__sourceCanvas.getContext("2d", {
        alpha: !1
      })), this.__sourceContext.mozImageSmoothingEnabled = !1, this.__sourceContext.webkitImageSmoothingEnabled = !1, this.__sourceContext.imageSmoothingEnabled = !1, this.__valid = !0)
    },
    __createImageData: function() {
      null == this.__sourceImageData && (this.__sourceImageData = this.__sourceContext.getImageData(0, 0, this.width, this.height))
    },
    __fillRect: function(rect, color) {
      var a;
      a = this.transparent ? (-16777216 & color) >>> 24 : 255;
      var r = (16711680 & color) >>> 16,
        g = (65280 & color) >>> 8,
        b = 255 & color;
      this.__sourceContext.fillStyle = "rgba(" + r + ", " + g + ", " + b + ", " + a / 255 + ")", this.__sourceContext.fillRect(rect.x, rect.y, rect.width, rect.height)
    },
    __getInt32: function(offset, data) {
      return (this.transparent ? data[offset + 3] : 255) << 24 | data[offset] << 16 | data[offset + 1] << 8 | data[offset + 2]
    },
    __loadFromBase64: function(base64, type, onload) {
      var _g = this;
      this.__sourceImage = window.document.createElement("img");
      var image_onLoaded = function(event) {
        null == _g.__sourceImage && (_g.__sourceImage = event.target), _g.width = _g.__sourceImage.width, _g.height = _g.__sourceImage.height, _g.rect = new openfl.geom.Rectangle(0, 0, _g.width, _g.height), _g.__valid = !0, null != onload && onload(_g)
      };
      this.__sourceImage.addEventListener("load", image_onLoaded, !1), this.__sourceImage.src = "data:" + type + ";base64," + base64
    },
    __loadFromBytes: function(bytes, rawAlpha, onload) {
      var _g = this,
        type = "";
      if (openfl.display.BitmapData.__isPNG(bytes)) type = "image/png";
      else if (openfl.display.BitmapData.__isJPG(bytes)) type = "image/jpeg";
      else {
        if (!openfl.display.BitmapData.__isGIF(bytes)) throw new openfl.errors.IOError("BitmapData tried to read a PNG/JPG ByteArray, but found an invalid header.");
        type = "image/gif"
      }
      null != rawAlpha ? this.__loadFromBase64(openfl.display.BitmapData.__base64Encode(bytes), type, function() {
        _g.__convertToCanvas(), _g.__createImageData();
        for (var data = _g.__sourceImageData.data, _g2 = 0, _g1 = rawAlpha.length; _g1 > _g2;) {
          var i = _g2++;
          data[4 * i + 3] = rawAlpha.readUnsignedByte()
        }
        _g.__sourceImageDataChanged = !0, null != onload && onload(_g)
      }) : this.__loadFromBase64(openfl.display.BitmapData.__base64Encode(bytes), type, onload)
    },
    __renderCanvas: function(renderSession) {
      if (this.__valid) {
        this.__syncImageData();
        var context = renderSession.context;
        null == this.__worldTransform && (this.__worldTransform = new openfl.geom.Matrix), context.globalAlpha = 1;
        var transform = this.__worldTransform;
        renderSession.roundPixels ? context.setTransform(transform.a, transform.b, transform.c, transform.d, 0 | transform.tx, 0 | transform.ty) : context.setTransform(transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty), null != this.__sourceImage ? context.drawImage(this.__sourceImage, 0, 0) : context.drawImage(this.__sourceCanvas, 0, 0)
      }
    },
    __renderMask: function() {},
    __syncImageData: function() {
      this.__sourceImageDataChanged && (this.__sourceContext.putImageData(this.__sourceImageData, 0, 0), this.__sourceImageData = null, this.__sourceImageDataChanged = !1)
    },
    __updateChildren: function() {},
    __class__: openfl.display.BitmapData
  }, openfl.display.BitmapDataChannel = function() {}, $hxClasses["openfl.display.BitmapDataChannel"] = openfl.display.BitmapDataChannel, openfl.display.BitmapDataChannel.__name__ = ["openfl", "display", "BitmapDataChannel"], openfl.display.BlendMode = $hxClasses["openfl.display.BlendMode"] = {
    __ename__: !0,
    __constructs__: ["ADD", "ALPHA", "DARKEN", "DIFFERENCE", "ERASE", "HARDLIGHT", "INVERT", "LAYER", "LIGHTEN", "MULTIPLY", "NORMAL", "OVERLAY", "SCREEN", "SUBTRACT"]
  }, openfl.display.BlendMode.ADD = ["ADD", 0], openfl.display.BlendMode.ADD.toString = $estr, openfl.display.BlendMode.ADD.__enum__ = openfl.display.BlendMode, openfl.display.BlendMode.ALPHA = ["ALPHA", 1], openfl.display.BlendMode.ALPHA.toString = $estr, openfl.display.BlendMode.ALPHA.__enum__ = openfl.display.BlendMode, openfl.display.BlendMode.DARKEN = ["DARKEN", 2], openfl.display.BlendMode.DARKEN.toString = $estr, openfl.display.BlendMode.DARKEN.__enum__ = openfl.display.BlendMode, openfl.display.BlendMode.DIFFERENCE = ["DIFFERENCE", 3], openfl.display.BlendMode.DIFFERENCE.toString = $estr, openfl.display.BlendMode.DIFFERENCE.__enum__ = openfl.display.BlendMode, openfl.display.BlendMode.ERASE = ["ERASE", 4], openfl.display.BlendMode.ERASE.toString = $estr, openfl.display.BlendMode.ERASE.__enum__ = openfl.display.BlendMode, openfl.display.BlendMode.HARDLIGHT = ["HARDLIGHT", 5], openfl.display.BlendMode.HARDLIGHT.toString = $estr, openfl.display.BlendMode.HARDLIGHT.__enum__ = openfl.display.BlendMode, openfl.display.BlendMode.INVERT = ["INVERT", 6], openfl.display.BlendMode.INVERT.toString = $estr, openfl.display.BlendMode.INVERT.__enum__ = openfl.display.BlendMode, openfl.display.BlendMode.LAYER = ["LAYER", 7], openfl.display.BlendMode.LAYER.toString = $estr, openfl.display.BlendMode.LAYER.__enum__ = openfl.display.BlendMode, openfl.display.BlendMode.LIGHTEN = ["LIGHTEN", 8], openfl.display.BlendMode.LIGHTEN.toString = $estr, openfl.display.BlendMode.LIGHTEN.__enum__ = openfl.display.BlendMode, openfl.display.BlendMode.MULTIPLY = ["MULTIPLY", 9], openfl.display.BlendMode.MULTIPLY.toString = $estr, openfl.display.BlendMode.MULTIPLY.__enum__ = openfl.display.BlendMode, openfl.display.BlendMode.NORMAL = ["NORMAL", 10], openfl.display.BlendMode.NORMAL.toString = $estr, openfl.display.BlendMode.NORMAL.__enum__ = openfl.display.BlendMode, openfl.display.BlendMode.OVERLAY = ["OVERLAY", 11], openfl.display.BlendMode.OVERLAY.toString = $estr, openfl.display.BlendMode.OVERLAY.__enum__ = openfl.display.BlendMode, openfl.display.BlendMode.SCREEN = ["SCREEN", 12], openfl.display.BlendMode.SCREEN.toString = $estr, openfl.display.BlendMode.SCREEN.__enum__ = openfl.display.BlendMode, openfl.display.BlendMode.SUBTRACT = ["SUBTRACT", 13], openfl.display.BlendMode.SUBTRACT.toString = $estr, openfl.display.BlendMode.SUBTRACT.__enum__ = openfl.display.BlendMode, openfl.display.BlendMode.__empty_constructs__ = [openfl.display.BlendMode.ADD, openfl.display.BlendMode.ALPHA, openfl.display.BlendMode.DARKEN, openfl.display.BlendMode.DIFFERENCE, openfl.display.BlendMode.ERASE, openfl.display.BlendMode.HARDLIGHT, openfl.display.BlendMode.INVERT, openfl.display.BlendMode.LAYER, openfl.display.BlendMode.LIGHTEN, openfl.display.BlendMode.MULTIPLY, openfl.display.BlendMode.NORMAL, openfl.display.BlendMode.OVERLAY, openfl.display.BlendMode.SCREEN, openfl.display.BlendMode.SUBTRACT], openfl.display.FrameLabel = function(name, frame) {
    openfl.events.EventDispatcher.call(this), this.__name = name, this.__frame = frame
  }, $hxClasses["openfl.display.FrameLabel"] = openfl.display.FrameLabel, openfl.display.FrameLabel.__name__ = ["openfl", "display", "FrameLabel"], openfl.display.FrameLabel.__super__ = openfl.events.EventDispatcher, openfl.display.FrameLabel.prototype = $extend(openfl.events.EventDispatcher.prototype, {
    frame: null,
    name: null,
    __frame: null,
    __name: null,
    get_frame: function() {
      return this.__frame
    },
    get_name: function() {
      return this.__name
    },
    __class__: openfl.display.FrameLabel,
    __properties__: {
      get_name: "get_name",
      get_frame: "get_frame"
    }
  }), openfl.display.GradientType = $hxClasses["openfl.display.GradientType"] = {
    __ename__: !0,
    __constructs__: ["RADIAL", "LINEAR"]
  }, openfl.display.GradientType.RADIAL = ["RADIAL", 0], openfl.display.GradientType.RADIAL.toString = $estr, openfl.display.GradientType.RADIAL.__enum__ = openfl.display.GradientType, openfl.display.GradientType.LINEAR = ["LINEAR", 1], openfl.display.GradientType.LINEAR.toString = $estr, openfl.display.GradientType.LINEAR.__enum__ = openfl.display.GradientType, openfl.display.GradientType.__empty_constructs__ = [openfl.display.GradientType.RADIAL, openfl.display.GradientType.LINEAR], openfl.display.Graphics = function() {
    this.__commands = new Array, this.__halfStrokeWidth = 0, this.__positionX = 0, this.__positionY = 0
  }, $hxClasses["openfl.display.Graphics"] = openfl.display.Graphics, openfl.display.Graphics.__name__ = ["openfl", "display", "Graphics"], openfl.display.Graphics.prototype = {
    __bounds: null,
    __canvas: null,
    __commands: null,
    __context: null,
    __dirty: null,
    __halfStrokeWidth: null,
    __hasFill: null,
    __hasStroke: null,
    __inPath: null,
    __inversePendingMatrix: null,
    __pattern: null,
    __pendingMatrix: null,
    __positionX: null,
    __positionY: null,
    __setFill: null,
    __visible: null,
    beginBitmapFill: function(bitmap, matrix, repeat, smooth) {
      null == smooth && (smooth = !1), null == repeat && (repeat = !0), this.__commands.push(openfl.display.DrawCommand.BeginBitmapFill(bitmap, matrix, repeat, smooth)), this.__visible = !0
    },
    beginFill: function(rgb, alpha) {
      null == alpha && (alpha = 1), this.__commands.push(openfl.display.DrawCommand.BeginFill(16777215 & rgb, alpha)), alpha > 0 && (this.__visible = !0)
    },
    beginGradientFill: function() {
      openfl.Lib.notImplemented("Graphics.beginGradientFill")
    },
    clear: function() {
      this.__commands = new Array, this.__halfStrokeWidth = 0, null != this.__bounds && (this.__dirty = !0, this.__bounds = null), this.__visible = !1
    },
    curveTo: function(cx, cy, x, y) {
      this.__inflateBounds(this.__positionX - this.__halfStrokeWidth, this.__positionY - this.__halfStrokeWidth), this.__inflateBounds(this.__positionX + this.__halfStrokeWidth, this.__positionY + this.__halfStrokeWidth), this.__inflateBounds(cx, cy), this.__positionX = x, this.__positionY = y, this.__inflateBounds(this.__positionX - this.__halfStrokeWidth, this.__positionY - this.__halfStrokeWidth), this.__inflateBounds(this.__positionX + this.__halfStrokeWidth, this.__positionY + this.__halfStrokeWidth), this.__commands.push(openfl.display.DrawCommand.CurveTo(cx, cy, x, y)), this.__dirty = !0
    },
    drawCircle: function(x, y, radius) {
      0 >= radius || (this.__inflateBounds(x - radius - this.__halfStrokeWidth, y - radius - this.__halfStrokeWidth), this.__inflateBounds(x + radius + this.__halfStrokeWidth, y + radius + this.__halfStrokeWidth), this.__commands.push(openfl.display.DrawCommand.DrawCircle(x, y, radius)), this.__dirty = !0)
    },
    drawEllipse: function(x, y, width, height) {
      0 >= width || 0 >= height || (this.__inflateBounds(x - this.__halfStrokeWidth, y - this.__halfStrokeWidth), this.__inflateBounds(x + width + this.__halfStrokeWidth, y + height + this.__halfStrokeWidth), this.__commands.push(openfl.display.DrawCommand.DrawEllipse(x, y, width, height)), this.__dirty = !0)
    },
    drawGraphicsData: function() {
      openfl.Lib.notImplemented("Graphics.drawGraphicsData")
    },
    drawPath: function() {
      openfl.Lib.notImplemented("Graphics.drawPath")
    },
    drawRect: function(x, y, width, height) {
      0 >= width || 0 >= height || (this.__inflateBounds(x - this.__halfStrokeWidth, y - this.__halfStrokeWidth), this.__inflateBounds(x + width + this.__halfStrokeWidth, y + height + this.__halfStrokeWidth), this.__commands.push(openfl.display.DrawCommand.DrawRect(x, y, width, height)), this.__dirty = !0)
    },
    drawRoundRect: function(x, y, width, height, rx, ry) {
      null == ry && (ry = -1), openfl.Lib.notImplemented("Graphics.drawRoundRect")
    },
    drawRoundRectComplex: function() {
      openfl.Lib.notImplemented("Graphics.drawRoundRectComplex")
    },
    drawTiles: function(sheet, tileData, smooth, flags, count) {
      null == count && (count = -1), null == flags && (flags = 0), null == smooth && (smooth = !1), this.__inflateBounds(0, 0), this.__inflateBounds(openfl.Lib.current.stage.stageWidth, openfl.Lib.current.stage.stageHeight), this.__commands.push(openfl.display.DrawCommand.DrawTiles(sheet, tileData, smooth, flags, count)), this.__dirty = !0, this.__visible = !0
    },
    drawTriangles: function() {
      openfl.Lib.notImplemented("Graphics.drawTriangles")
    },
    endFill: function() {
      this.__commands.push(openfl.display.DrawCommand.EndFill)
    },
    lineBitmapStyle: function(bitmap, matrix, repeat, smooth) {
      null == smooth && (smooth = !1), null == repeat && (repeat = !0), openfl.Lib.notImplemented("Graphics.lineBitmapStyle")
    },
    lineGradientStyle: function() {
      openfl.Lib.notImplemented("Graphics.lineGradientStyle")
    },
    lineStyle: function(thickness, color, alpha, pixelHinting, scaleMode, caps, joints, miterLimit) {
      this.__halfStrokeWidth = null != thickness ? thickness / 2 : 0, this.__commands.push(openfl.display.DrawCommand.LineStyle(thickness, color, alpha, pixelHinting, scaleMode, caps, joints, miterLimit)), null != thickness && (this.__visible = !0)
    },
    lineTo: function(x, y) {
      this.__inflateBounds(this.__positionX - this.__halfStrokeWidth, this.__positionY - this.__halfStrokeWidth), this.__inflateBounds(this.__positionX + this.__halfStrokeWidth, this.__positionY + this.__halfStrokeWidth), this.__positionX = x, this.__positionY = y, this.__inflateBounds(this.__positionX - this.__halfStrokeWidth, this.__positionY - this.__halfStrokeWidth), this.__inflateBounds(this.__positionX + this.__halfStrokeWidth, this.__positionY + this.__halfStrokeWidth), this.__commands.push(openfl.display.DrawCommand.LineTo(x, y)), this.__dirty = !0
    },
    moveTo: function(x, y) {
      this.__commands.push(openfl.display.DrawCommand.MoveTo(x, y)), this.__positionX = x, this.__positionY = y
    },
    __beginPath: function() {
      this.__inPath || (this.__context.beginPath(), this.__inPath = !0)
    },
    __beginPatternFill: function(bitmapFill, bitmapRepeat) {
      this.__setFill || null == bitmapFill || (null == this.__pattern && (this.__pattern = null != bitmapFill.__sourceImage ? this.__context.createPattern(bitmapFill.__sourceImage, bitmapRepeat ? "repeat" : "no-repeat") : this.__context.createPattern(bitmapFill.__sourceCanvas, bitmapRepeat ? "repeat" : "no-repeat")), this.__context.fillStyle = this.__pattern, this.__setFill = !0)
    },
    __closePath: function(closeFill) {
      this.__inPath && (this.__hasFill && (this.__context.translate(-this.__bounds.x, -this.__bounds.y), null != this.__pendingMatrix ? (this.__context.transform(this.__pendingMatrix.a, this.__pendingMatrix.b, this.__pendingMatrix.c, this.__pendingMatrix.d, this.__pendingMatrix.tx, this.__pendingMatrix.ty), this.__context.fill(), this.__context.transform(this.__inversePendingMatrix.a, this.__inversePendingMatrix.b, this.__inversePendingMatrix.c, this.__inversePendingMatrix.d, this.__inversePendingMatrix.tx, this.__inversePendingMatrix.ty)) : this.__context.fill(), this.__context.translate(this.__bounds.x, this.__bounds.y)), this.__context.closePath(), this.__hasStroke && this.__context.stroke()), this.__inPath = !1, closeFill && (this.__hasFill = !1, this.__hasStroke = !1, this.__pendingMatrix = null, this.__inversePendingMatrix = null)
    },
    __getBounds: function(rect, matrix) {
      if (null != this.__bounds) {
        var bounds = this.__bounds.clone().transform(matrix);
        rect.__expand(bounds.x, bounds.y, bounds.width, bounds.height)
      }
    },
    __hitTest: function(x, y, shapeFlag, matrix) {
      if (null == this.__bounds) return !1;
      var bounds = this.__bounds.clone().transform(matrix);
      return x > bounds.x && y > bounds.y && x <= bounds.get_right() && y <= bounds.get_bottom()
    },
    __inflateBounds: function(x, y) {
      return null == this.__bounds ? void(this.__bounds = new openfl.geom.Rectangle(x, y, 0, 0)) : (x < this.__bounds.x && (this.__bounds.width += this.__bounds.x - x, this.__bounds.x = x), y < this.__bounds.y && (this.__bounds.height += this.__bounds.y - y, this.__bounds.y = y), x > this.__bounds.x + this.__bounds.width && (this.__bounds.width = x - this.__bounds.x), void(y > this.__bounds.y + this.__bounds.height && (this.__bounds.height = y - this.__bounds.y)))
    },
    __render: function() {
      if (this.__dirty) {
        if (this.__hasFill = !1, this.__hasStroke = !1, this.__inPath = !1, this.__positionX = 0, this.__positionY = 0, this.__visible && 0 != this.__commands.length && null != this.__bounds && 0 != this.__bounds.width && 0 != this.__bounds.height) {
          null == this.__canvas && (this.__canvas = window.document.createElement("canvas"), this.__context = this.__canvas.getContext("2d")), this.__canvas.width = Math.ceil(this.__bounds.width), this.__canvas.height = Math.ceil(this.__bounds.height);
          for (var offsetX = this.__bounds.x, offsetY = this.__bounds.y, bitmapFill = null, bitmapRepeat = !1, _g = 0, _g1 = this.__commands; _g < _g1.length;) {
            var command = _g1[_g];
            switch (++_g, command[1]) {
              case 0:
                var repeat = (command[5], command[4]),
                  matrix = command[3],
                  bitmap = command[2];
                this.__closePath(!1), (bitmap != bitmapFill || repeat != bitmapRepeat) && (bitmapFill = bitmap, bitmapRepeat = repeat, this.__pattern = null, this.__setFill = !1, bitmap.__syncImageData()), null != matrix ? (this.__pendingMatrix = matrix, this.__inversePendingMatrix = new openfl.geom.Matrix(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty), this.__inversePendingMatrix.invert()) : (this.__pendingMatrix = null, this.__inversePendingMatrix = null), this.__hasFill = !0;
                break;
              case 1:
                var alpha = command[3],
                  rgb = command[2];
                if (this.__closePath(!1), 1 == alpha) this.__context.fillStyle = "#" + StringTools.hex(rgb, 6);
                else {
                  var r = (16711680 & rgb) >>> 16,
                    g = (65280 & rgb) >>> 8,
                    b = 255 & rgb;
                  this.__context.fillStyle = "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")"
                }
                bitmapFill = null, this.__setFill = !0, this.__hasFill = !0;
                break;
              case 2:
                var y = command[5],
                  x = command[4],
                  cy = command[3],
                  cx = command[2];
                this.__beginPatternFill(bitmapFill, bitmapRepeat), this.__beginPath(), this.__context.quadraticCurveTo(cx - offsetX, cy - offsetY, x - offsetX, y - offsetY), this.__positionX = x, this.__positionY = y;
                break;
              case 3:
                var radius = command[4],
                  y1 = command[3],
                  x1 = command[2];
                this.__beginPatternFill(bitmapFill, bitmapRepeat), this.__beginPath(), this.__context.moveTo(x1 - offsetX + radius, y1 - offsetY), this.__context.arc(x1 - offsetX, y1 - offsetY, radius, 0, 2 * Math.PI, !0);
                break;
              case 4:
                var height = command[5],
                  width = command[4],
                  y2 = command[3],
                  x2 = command[2];
                x2 -= offsetX, y2 -= offsetY;
                var kappa = .5522848,
                  ox = width / 2 * kappa,
                  oy = height / 2 * kappa,
                  xe = x2 + width,
                  ye = y2 + height,
                  xm = x2 + width / 2,
                  ym = y2 + height / 2;
                this.__beginPatternFill(bitmapFill, bitmapRepeat), this.__beginPath(), this.__context.moveTo(x2, ym), this.__context.bezierCurveTo(x2, ym - oy, xm - ox, y2, xm, y2), this.__context.bezierCurveTo(xm + ox, y2, xe, ym - oy, xe, ym), this.__context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye), this.__context.bezierCurveTo(xm - ox, ye, x2, ym + oy, x2, ym);
                break;
              case 5:
                var height1 = command[5],
                  width1 = command[4],
                  y3 = command[3],
                  x3 = command[2],
                  optimizationUsed = !1;
                if (null != bitmapFill) {
                  var st = 0,
                    sr = 0,
                    sb = 0,
                    sl = 0,
                    canOptimizeMatrix = !0;
                  if (null != this.__pendingMatrix)
                    if (0 != this.__pendingMatrix.b || 0 != this.__pendingMatrix.c) canOptimizeMatrix = !1;
                    else {
                      var stl = this.__inversePendingMatrix.transformPoint(new openfl.geom.Point(x3, y3)),
                        sbr = this.__inversePendingMatrix.transformPoint(new openfl.geom.Point(x3 + width1, y3 + height1));
                      st = stl.y, sl = stl.x, sb = sbr.y, sr = sbr.x
                    } else st = y3, sl = x3, sb = y3 + height1, sr = x3 + width1;
                  canOptimizeMatrix && st >= 0 && sl >= 0 && sr <= bitmapFill.width && sb <= bitmapFill.height && (optimizationUsed = !0, null != bitmapFill.__sourceImage ? this.__context.drawImage(bitmapFill.__sourceImage, sl, st, sr - sl, sb - st, x3, y3, width1, height1) : this.__context.drawImage(bitmapFill.__sourceCanvas, sl, st, sr - sl, sb - st, x3, y3, width1, height1))
                }
                optimizationUsed || (this.__beginPatternFill(bitmapFill, bitmapRepeat), this.__beginPath(), this.__context.rect(x3 - offsetX, y3 - offsetY, width1, height1));
                break;
              case 6:
                var count = command[6],
                  flags = command[5],
                  tileData = (command[4], command[3]),
                  sheet = command[2];
                this.__closePath(!1);
                var useScale = (1 & flags) > 0,
                  useRotation = (2 & flags) > 0,
                  useTransform = (16 & flags) > 0,
                  useRGB = (4 & flags) > 0,
                  useAlpha = (8 & flags) > 0;
                useTransform && (useScale = !1, useRotation = !1);
                var scaleIndex = 0,
                  rotationIndex = 0,
                  rgbIndex = 0,
                  alphaIndex = 0,
                  transformIndex = 0,
                  numValues = 3;
                useScale && (scaleIndex = numValues, numValues++), useRotation && (rotationIndex = numValues, numValues++), useTransform && (transformIndex = numValues, numValues += 4), useRGB && (rgbIndex = numValues, numValues += 3), useAlpha && (alphaIndex = numValues, numValues++);
                var totalCount = tileData.length;
                count >= 0 && totalCount > count && (totalCount = count);
                var surface, index = 0,
                  rect = null,
                  center = null,
                  previousTileID = -1;
                for (sheet.__bitmap.__syncImageData(), surface = null != sheet.__bitmap.__sourceImage ? sheet.__bitmap.__sourceImage : sheet.__bitmap.__sourceCanvas; totalCount > index;) {
                  var tileID = 0 | tileData[index + 2];
                  if (tileID != previousTileID && (rect = sheet.__tileRects[tileID], center = sheet.__centerPoints[tileID], previousTileID = tileID), null != rect && rect.width > 0 && rect.height > 0 && null != center) {
                    this.__context.save(), this.__context.translate(tileData[index], tileData[index + 1]), useRotation && this.__context.rotate(tileData[index + rotationIndex]);
                    var scale = 1;
                    useScale && (scale = tileData[index + scaleIndex]), useTransform && this.__context.transform(tileData[index + transformIndex], tileData[index + transformIndex + 1], tileData[index + transformIndex + 2], tileData[index + transformIndex + 3], 0, 0), useAlpha && (this.__context.globalAlpha = tileData[index + alphaIndex]), this.__context.drawImage(surface, rect.x, rect.y, rect.width, rect.height, -center.x * scale, -center.y * scale, rect.width * scale, rect.height * scale), this.__context.restore()
                  }
                  index += numValues
                }
                break;
              case 7:
                this.__closePath(!0);
                break;
              case 8:
                var miterLimit = command[9],
                  joints = command[8],
                  caps = command[7],
                  color = (command[6], command[5], command[4], command[3]),
                  thickness = command[2];
                this.__closePath(!1), null == thickness ? this.__hasStroke = !1 : (this.__context.lineWidth = thickness, this.__context.lineJoin = joints, this.__context.lineCap = caps, this.__context.miterLimit = miterLimit, this.__context.strokeStyle = "#" + StringTools.hex(color, 6), this.__hasStroke = !0);
                break;
              case 9:
                var y4 = command[3],
                  x4 = command[2];
                this.__beginPatternFill(bitmapFill, bitmapRepeat), this.__beginPath(), this.__context.lineTo(x4 - offsetX, y4 - offsetY), this.__positionX = x4, this.__positionY = y4;
                break;
              case 10:
                var y5 = command[3],
                  x5 = command[2];
                this.__beginPath(), this.__context.moveTo(x5 - offsetX, y5 - offsetY), this.__positionX = x5, this.__positionY = y5
            }
          }
        } else this.__canvas = null, this.__context = null;
        this.__dirty = !1, this.__closePath(!1)
      }
    },
    __renderMask: function(renderSession) {
      if (0 != this.__commands.length)
        for (var __context = renderSession.context, __positionX = 0, __positionY = 0, offsetX = 0, offsetY = 0, _g = 0, _g1 = this.__commands; _g < _g1.length;) {
          var command = _g1[_g];
          switch (++_g, command[1]) {
            case 2:
              var y = command[5],
                x = command[4],
                cy = command[3],
                cx = command[2];
              __context.quadraticCurveTo(cx, cy, x, y), __positionX = x, __positionY = y;
              break;
            case 3:
              var radius = command[4],
                y1 = command[3],
                x1 = command[2];
              __context.arc(x1 - offsetX, y1 - offsetY, radius, 0, 2 * Math.PI, !0);
              break;
            case 4:
              var height = command[5],
                width = command[4],
                y2 = command[3],
                x2 = command[2];
              x2 -= offsetX, y2 -= offsetY;
              var kappa = .5522848,
                ox = width / 2 * kappa,
                oy = height / 2 * kappa,
                xe = x2 + width,
                ye = y2 + height,
                xm = x2 + width / 2,
                ym = y2 + height / 2;
              __context.moveTo(x2, ym), __context.bezierCurveTo(x2, ym - oy, xm - ox, y2, xm, y2), __context.bezierCurveTo(xm + ox, y2, xe, ym - oy, xe, ym), __context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye), __context.bezierCurveTo(xm - ox, ye, x2, ym + oy, x2, ym);
              break;
            case 5:
              var height1 = command[5],
                width1 = command[4],
                y3 = command[3],
                x3 = command[2];
              __context.rect(x3 - offsetX, y3 - offsetY, width1, height1);
              break;
            case 9:
              var y4 = command[3],
                x4 = command[2];
              __context.lineTo(x4 - offsetX, y4 - offsetY), __positionX = x4, __positionY = y4;
              break;
            case 10:
              var y5 = command[3],
                x5 = command[2];
              __context.moveTo(x5 - offsetX, y5 - offsetY), __positionX = x5, __positionY = y5
          }
        }
    },
    __class__: openfl.display.Graphics
  }, openfl.display.DrawCommand = $hxClasses["openfl.display.DrawCommand"] = {
    __ename__: !0,
    __constructs__: ["BeginBitmapFill", "BeginFill", "CurveTo", "DrawCircle", "DrawEllipse", "DrawRect", "DrawTiles", "EndFill", "LineStyle", "LineTo", "MoveTo"]
  }, openfl.display.DrawCommand.BeginBitmapFill = function(bitmap, matrix, repeat, smooth) {
    var $x = ["BeginBitmapFill", 0, bitmap, matrix, repeat, smooth];
    return $x.__enum__ = openfl.display.DrawCommand, $x.toString = $estr, $x
  }, openfl.display.DrawCommand.BeginFill = function(rgb, alpha) {
    var $x = ["BeginFill", 1, rgb, alpha];
    return $x.__enum__ = openfl.display.DrawCommand, $x.toString = $estr, $x
  }, openfl.display.DrawCommand.CurveTo = function(cx, cy, x, y) {
    var $x = ["CurveTo", 2, cx, cy, x, y];
    return $x.__enum__ = openfl.display.DrawCommand, $x.toString = $estr, $x
  }, openfl.display.DrawCommand.DrawCircle = function(x, y, radius) {
    var $x = ["DrawCircle", 3, x, y, radius];
    return $x.__enum__ = openfl.display.DrawCommand, $x.toString = $estr, $x
  }, openfl.display.DrawCommand.DrawEllipse = function(x, y, width, height) {
    var $x = ["DrawEllipse", 4, x, y, width, height];
    return $x.__enum__ = openfl.display.DrawCommand, $x.toString = $estr, $x
  }, openfl.display.DrawCommand.DrawRect = function(x, y, width, height) {
    var $x = ["DrawRect", 5, x, y, width, height];
    return $x.__enum__ = openfl.display.DrawCommand, $x.toString = $estr, $x
  }, openfl.display.DrawCommand.DrawTiles = function(sheet, tileData, smooth, flags, count) {
    var $x = ["DrawTiles", 6, sheet, tileData, smooth, flags, count];
    return $x.__enum__ = openfl.display.DrawCommand, $x.toString = $estr, $x
  }, openfl.display.DrawCommand.EndFill = ["EndFill", 7], openfl.display.DrawCommand.EndFill.toString = $estr, openfl.display.DrawCommand.EndFill.__enum__ = openfl.display.DrawCommand, openfl.display.DrawCommand.LineStyle = function(thickness, color, alpha, pixelHinting, scaleMode, caps, joints, miterLimit) {
    var $x = ["LineStyle", 8, thickness, color, alpha, pixelHinting, scaleMode, caps, joints, miterLimit];
    return $x.__enum__ = openfl.display.DrawCommand, $x.toString = $estr, $x
  }, openfl.display.DrawCommand.LineTo = function(x, y) {
    var $x = ["LineTo", 9, x, y];
    return $x.__enum__ = openfl.display.DrawCommand, $x.toString = $estr, $x
  }, openfl.display.DrawCommand.MoveTo = function(x, y) {
    var $x = ["MoveTo", 10, x, y];
    return $x.__enum__ = openfl.display.DrawCommand, $x.toString = $estr, $x
  }, openfl.display.DrawCommand.__empty_constructs__ = [openfl.display.DrawCommand.EndFill], openfl.display.GraphicsPathWinding = $hxClasses["openfl.display.GraphicsPathWinding"] = {
    __ename__: !0,
    __constructs__: ["EVEN_ODD", "NON_ZERO"]
  }, openfl.display.GraphicsPathWinding.EVEN_ODD = ["EVEN_ODD", 0], openfl.display.GraphicsPathWinding.EVEN_ODD.toString = $estr, openfl.display.GraphicsPathWinding.EVEN_ODD.__enum__ = openfl.display.GraphicsPathWinding, openfl.display.GraphicsPathWinding.NON_ZERO = ["NON_ZERO", 1], openfl.display.GraphicsPathWinding.NON_ZERO.toString = $estr, openfl.display.GraphicsPathWinding.NON_ZERO.__enum__ = openfl.display.GraphicsPathWinding, openfl.display.GraphicsPathWinding.__empty_constructs__ = [openfl.display.GraphicsPathWinding.EVEN_ODD, openfl.display.GraphicsPathWinding.NON_ZERO], openfl.display.IGraphicsData = function() {}, $hxClasses["openfl.display.IGraphicsData"] = openfl.display.IGraphicsData, openfl.display.IGraphicsData.__name__ = ["openfl", "display", "IGraphicsData"], openfl.display.IGraphicsData.prototype = {
    __graphicsDataType: null,
    __class__: openfl.display.IGraphicsData
  }, openfl.display.GraphicsDataType = $hxClasses["openfl.display.GraphicsDataType"] = {
    __ename__: !0,
    __constructs__: ["STROKE", "SOLID", "GRADIENT", "PATH", "BITMAP", "END"]
  }, openfl.display.GraphicsDataType.STROKE = ["STROKE", 0], openfl.display.GraphicsDataType.STROKE.toString = $estr, openfl.display.GraphicsDataType.STROKE.__enum__ = openfl.display.GraphicsDataType, openfl.display.GraphicsDataType.SOLID = ["SOLID", 1], openfl.display.GraphicsDataType.SOLID.toString = $estr, openfl.display.GraphicsDataType.SOLID.__enum__ = openfl.display.GraphicsDataType, openfl.display.GraphicsDataType.GRADIENT = ["GRADIENT", 2], openfl.display.GraphicsDataType.GRADIENT.toString = $estr, openfl.display.GraphicsDataType.GRADIENT.__enum__ = openfl.display.GraphicsDataType, openfl.display.GraphicsDataType.PATH = ["PATH", 3], openfl.display.GraphicsDataType.PATH.toString = $estr, openfl.display.GraphicsDataType.PATH.__enum__ = openfl.display.GraphicsDataType, openfl.display.GraphicsDataType.BITMAP = ["BITMAP", 4], openfl.display.GraphicsDataType.BITMAP.toString = $estr, openfl.display.GraphicsDataType.BITMAP.__enum__ = openfl.display.GraphicsDataType, openfl.display.GraphicsDataType.END = ["END", 5], openfl.display.GraphicsDataType.END.toString = $estr, openfl.display.GraphicsDataType.END.__enum__ = openfl.display.GraphicsDataType, openfl.display.GraphicsDataType.__empty_constructs__ = [openfl.display.GraphicsDataType.STROKE, openfl.display.GraphicsDataType.SOLID, openfl.display.GraphicsDataType.GRADIENT, openfl.display.GraphicsDataType.PATH, openfl.display.GraphicsDataType.BITMAP, openfl.display.GraphicsDataType.END], openfl.display.InterpolationMethod = $hxClasses["openfl.display.InterpolationMethod"] = {
    __ename__: !0,
    __constructs__: ["RGB", "LINEAR_RGB"]
  }, openfl.display.InterpolationMethod.RGB = ["RGB", 0], openfl.display.InterpolationMethod.RGB.toString = $estr, openfl.display.InterpolationMethod.RGB.__enum__ = openfl.display.InterpolationMethod, openfl.display.InterpolationMethod.LINEAR_RGB = ["LINEAR_RGB", 1], openfl.display.InterpolationMethod.LINEAR_RGB.toString = $estr, openfl.display.InterpolationMethod.LINEAR_RGB.__enum__ = openfl.display.InterpolationMethod, openfl.display.InterpolationMethod.__empty_constructs__ = [openfl.display.InterpolationMethod.RGB, openfl.display.InterpolationMethod.LINEAR_RGB], openfl.display.LineScaleMode = $hxClasses["openfl.display.LineScaleMode"] = {
    __ename__: !0,
    __constructs__: ["HORIZONTAL", "NONE", "NORMAL", "VERTICAL"]
  }, openfl.display.LineScaleMode.HORIZONTAL = ["HORIZONTAL", 0], openfl.display.LineScaleMode.HORIZONTAL.toString = $estr, openfl.display.LineScaleMode.HORIZONTAL.__enum__ = openfl.display.LineScaleMode, openfl.display.LineScaleMode.NONE = ["NONE", 1], openfl.display.LineScaleMode.NONE.toString = $estr, openfl.display.LineScaleMode.NONE.__enum__ = openfl.display.LineScaleMode, openfl.display.LineScaleMode.NORMAL = ["NORMAL", 2], openfl.display.LineScaleMode.NORMAL.toString = $estr, openfl.display.LineScaleMode.NORMAL.__enum__ = openfl.display.LineScaleMode, openfl.display.LineScaleMode.VERTICAL = ["VERTICAL", 3], openfl.display.LineScaleMode.VERTICAL.toString = $estr, openfl.display.LineScaleMode.VERTICAL.__enum__ = openfl.display.LineScaleMode, openfl.display.LineScaleMode.__empty_constructs__ = [openfl.display.LineScaleMode.HORIZONTAL, openfl.display.LineScaleMode.NONE, openfl.display.LineScaleMode.NORMAL, openfl.display.LineScaleMode.VERTICAL], openfl.display.Loader = function() {
    openfl.display.Sprite.call(this), this.contentLoaderInfo = openfl.display.LoaderInfo.create(this)
  }, $hxClasses["openfl.display.Loader"] = openfl.display.Loader, openfl.display.Loader.__name__ = ["openfl", "display", "Loader"], openfl.display.Loader.__super__ = openfl.display.Sprite, openfl.display.Loader.prototype = $extend(openfl.display.Sprite.prototype, {
    content: null,
    contentLoaderInfo: null,
    mImage: null,
    mShape: null,
    load: function(request) {
      var extension = "",
        parts = request.url.split(".");
      parts.length > 0 && (extension = parts[parts.length - 1].toLowerCase());
      var transparent = !0;
      if (this.contentLoaderInfo.url = request.url, null == request.contentType && "" != request.contentType) switch (extension) {
        case "swf":
          this.contentLoaderInfo.contentType = "application/x-shockwave-flash";
          break;
        case "jpg":
        case "jpeg":
          transparent = !1, this.contentLoaderInfo.contentType = "image/jpeg";
          break;
        case "png":
          this.contentLoaderInfo.contentType = "image/png";
          break;
        case "gif":
          this.contentLoaderInfo.contentType = "image/gif";
          break;
        default:
          this.contentLoaderInfo.contentType = "application/x-www-form-urlencoded"
      } else this.contentLoaderInfo.contentType = request.contentType;
      openfl.display.BitmapData.fromFile(request.url, $bind(this, this.BitmapData_onLoad), $bind(this, this.BitmapData_onError))
    },
    loadBytes: function(buffer) {
      openfl.display.BitmapData.fromBytes(buffer, null, $bind(this, this.BitmapData_onLoad))
    },
    unload: function() {
      if (this.get_numChildren() > 0) {
        for (; this.get_numChildren() > 0;) this.removeChildAt(0);
        this.content = null, this.contentLoaderInfo.url = null, this.contentLoaderInfo.contentType = null, this.contentLoaderInfo.content = null, this.contentLoaderInfo.bytesLoaded = 0, this.contentLoaderInfo.bytesTotal = 0, this.contentLoaderInfo.width = 0, this.contentLoaderInfo.height = 0;
        var event = new openfl.events.Event(openfl.events.Event.UNLOAD);
        event.currentTarget = this, this.dispatchEvent(event)
      }
    },
    BitmapData_onLoad: function(bitmapData) {
      this.contentLoaderInfo.content = new openfl.display.Bitmap(bitmapData), this.content = this.contentLoaderInfo.content, this.addChild(this.contentLoaderInfo.content);
      var event = new openfl.events.Event(openfl.events.Event.COMPLETE);
      event.target = this.contentLoaderInfo, event.currentTarget = this.contentLoaderInfo, this.contentLoaderInfo.dispatchEvent(event)
    },
    BitmapData_onError: function() {
      var event = new openfl.events.IOErrorEvent(openfl.events.IOErrorEvent.IO_ERROR);
      event.target = this.contentLoaderInfo, event.currentTarget = this.contentLoaderInfo, this.contentLoaderInfo.dispatchEvent(event)
    },
    __class__: openfl.display.Loader
  }), openfl.display.LoaderInfo = function() {
    openfl.events.EventDispatcher.call(this), this.applicationDomain = openfl.system.ApplicationDomain.currentDomain, this.bytesLoaded = 0, this.bytesTotal = 0, this.childAllowsParent = !0, this.parameters = {}
  }, $hxClasses["openfl.display.LoaderInfo"] = openfl.display.LoaderInfo, openfl.display.LoaderInfo.__name__ = ["openfl", "display", "LoaderInfo"], openfl.display.LoaderInfo.create = function(ldr) {
    var li = new openfl.display.LoaderInfo;
    return null != ldr ? li.loader = ldr : li.url = "", li
  }, openfl.display.LoaderInfo.__super__ = openfl.events.EventDispatcher, openfl.display.LoaderInfo.prototype = $extend(openfl.events.EventDispatcher.prototype, {
    applicationDomain: null,
    bytes: null,
    bytesLoaded: null,
    bytesTotal: null,
    childAllowsParent: null,
    content: null,
    contentType: null,
    frameRate: null,
    height: null,
    loader: null,
    loaderURL: null,
    parameters: null,
    parentAllowsChild: null,
    sameDomain: null,
    sharedEvents: null,
    url: null,
    width: null,
    __class__: openfl.display.LoaderInfo
  }), openfl.display.MovieClip = function() {
    openfl.display.Sprite.call(this), this.__currentFrame = 0, this.__currentLabels = [], this.__totalFrames = 0, this.enabled = !0, this.loaderInfo = openfl.display.LoaderInfo.create(null)
  }, $hxClasses["openfl.display.MovieClip"] = openfl.display.MovieClip, openfl.display.MovieClip.__name__ = ["openfl", "display", "MovieClip"], openfl.display.MovieClip.__super__ = openfl.display.Sprite, openfl.display.MovieClip.prototype = $extend(openfl.display.Sprite.prototype, {
    currentFrame: null,
    currentFrameLabel: null,
    currentLabel: null,
    currentLabels: null,
    enabled: null,
    framesLoaded: null,
    totalFrames: null,
    __currentFrame: null,
    __currentFrameLabel: null,
    __currentLabel: null,
    __currentLabels: null,
    __totalFrames: null,
    gotoAndPlay: function() {},
    gotoAndStop: function() {},
    nextFrame: function() {},
    play: function() {},
    prevFrame: function() {},
    stop: function() {},
    get_currentFrame: function() {
      return this.__currentFrame
    },
    get_currentFrameLabel: function() {
      return this.__currentFrameLabel
    },
    get_currentLabel: function() {
      return this.__currentLabel
    },
    get_currentLabels: function() {
      return this.__currentLabels
    },
    get_framesLoaded: function() {
      return this.__totalFrames
    },
    get_totalFrames: function() {
      return this.__totalFrames
    },
    __class__: openfl.display.MovieClip,
    __properties__: $extend(openfl.display.Sprite.prototype.__properties__, {
      get_totalFrames: "get_totalFrames",
      get_framesLoaded: "get_framesLoaded",
      get_currentLabels: "get_currentLabels",
      get_currentLabel: "get_currentLabel",
      get_currentFrameLabel: "get_currentFrameLabel",
      get_currentFrame: "get_currentFrame"
    })
  }), openfl.display.PixelSnapping = $hxClasses["openfl.display.PixelSnapping"] = {
    __ename__: !0,
    __constructs__: ["NEVER", "AUTO", "ALWAYS"]
  }, openfl.display.PixelSnapping.NEVER = ["NEVER", 0], openfl.display.PixelSnapping.NEVER.toString = $estr, openfl.display.PixelSnapping.NEVER.__enum__ = openfl.display.PixelSnapping, openfl.display.PixelSnapping.AUTO = ["AUTO", 1], openfl.display.PixelSnapping.AUTO.toString = $estr, openfl.display.PixelSnapping.AUTO.__enum__ = openfl.display.PixelSnapping, openfl.display.PixelSnapping.ALWAYS = ["ALWAYS", 2], openfl.display.PixelSnapping.ALWAYS.toString = $estr, openfl.display.PixelSnapping.ALWAYS.__enum__ = openfl.display.PixelSnapping, openfl.display.PixelSnapping.__empty_constructs__ = [openfl.display.PixelSnapping.NEVER, openfl.display.PixelSnapping.AUTO, openfl.display.PixelSnapping.ALWAYS], openfl.display.Shape = function() {
    openfl.display.DisplayObject.call(this)
  }, $hxClasses["openfl.display.Shape"] = openfl.display.Shape, openfl.display.Shape.__name__ = ["openfl", "display", "Shape"], openfl.display.Shape.__super__ = openfl.display.DisplayObject, openfl.display.Shape.prototype = $extend(openfl.display.DisplayObject.prototype, {
    graphics: null,
    __canvas: null,
    __canvasContext: null,
    __graphics: null,
    __getBounds: function(rect) {
      null != this.__graphics && this.__graphics.__getBounds(rect, this.__worldTransform)
    },
    __hitTest: function(x, y, shapeFlag, stack, interactiveOnly) {
      return this.get_visible() && null != this.__graphics && this.__graphics.__hitTest(x, y, shapeFlag, this.__worldTransform) ? (interactiveOnly || stack.push(this), !0) : !1
    },
    __renderCanvas: function(renderSession) {
      if (this.__renderable && !(this.__worldAlpha <= 0) && null != this.__graphics && (this.__graphics.__render(), null != this.__graphics.__canvas)) {
        var context = renderSession.context;
        context.globalAlpha = this.__worldAlpha;
        var transform = this.__worldTransform;
        renderSession.roundPixels ? context.setTransform(transform.a, transform.b, transform.c, transform.d, 0 | transform.tx, 0 | transform.ty) : context.setTransform(transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty), null == this.get_scrollRect() ? context.drawImage(this.__graphics.__canvas, this.__graphics.__bounds.x, this.__graphics.__bounds.y) : context.drawImage(this.__graphics.__canvas, this.get_scrollRect().x - this.__graphics.__bounds.x, this.get_scrollRect().y - this.__graphics.__bounds.y, this.get_scrollRect().width, this.get_scrollRect().height, this.__graphics.__bounds.x + this.get_scrollRect().x, this.__graphics.__bounds.y + this.get_scrollRect().y, this.get_scrollRect().width, this.get_scrollRect().height)
      }
    },
    __renderDOM: function(renderSession) {
      if (null != this.stage && this.__worldVisible && this.__renderable && null != this.__graphics) {
        if ((this.__graphics.__dirty || this.__worldAlphaChanged || null == this.__canvas && null != this.__graphics.__canvas) && (this.__graphics.__render(), null != this.__graphics.__canvas ? (null == this.__canvas && (this.__canvas = window.document.createElement("canvas"), this.__canvasContext = this.__canvas.getContext("2d"), this.__initializeElement(this.__canvas, renderSession)), this.__canvas.width = this.__graphics.__canvas.width, this.__canvas.height = this.__graphics.__canvas.height, this.__canvasContext.globalAlpha = this.__worldAlpha, this.__canvasContext.drawImage(this.__graphics.__canvas, 0, 0)) : null != this.__canvas && (renderSession.element.removeChild(this.__canvas), this.__canvas = null, this.__style = null)), null != this.__canvas) {
          if (this.__worldTransformChanged) {
            var transform = new openfl.geom.Matrix;
            transform.translate(this.__graphics.__bounds.x, this.__graphics.__bounds.y), transform = transform.mult(this.__worldTransform), this.__style.setProperty(renderSession.transformProperty, renderSession.roundPixels ? "matrix3d(" + transform.a + ", " + transform.b + ", 0, 0, " + transform.c + ", " + transform.d + ", 0, 0, 0, 0, 1, 0, " + (0 | transform.tx) + ", " + (0 | transform.ty) + ", 0, 1)" : "matrix3d(" + transform.a + ", " + transform.b + ", 0, 0, " + transform.c + ", " + transform.d + ", 0, 0, 0, 0, 1, 0, " + transform.tx + ", " + transform.ty + ", 0, 1)", null)
          }
          this.__applyStyle(renderSession, !1, !1, !0)
        }
      } else null != this.__canvas && (renderSession.element.removeChild(this.__canvas), this.__canvas = null, this.__style = null)
    },
    get_graphics: function() {
      return null == this.__graphics && (this.__graphics = new openfl.display.Graphics), this.__graphics
    },
    __class__: openfl.display.Shape,
    __properties__: $extend(openfl.display.DisplayObject.prototype.__properties__, {
      get_graphics: "get_graphics"
    })
  }), openfl.display.SpreadMethod = $hxClasses["openfl.display.SpreadMethod"] = {
    __ename__: !0,
    __constructs__: ["REPEAT", "REFLECT", "PAD"]
  }, openfl.display.SpreadMethod.REPEAT = ["REPEAT", 0], openfl.display.SpreadMethod.REPEAT.toString = $estr, openfl.display.SpreadMethod.REPEAT.__enum__ = openfl.display.SpreadMethod, openfl.display.SpreadMethod.REFLECT = ["REFLECT", 1], openfl.display.SpreadMethod.REFLECT.toString = $estr, openfl.display.SpreadMethod.REFLECT.__enum__ = openfl.display.SpreadMethod, openfl.display.SpreadMethod.PAD = ["PAD", 2], openfl.display.SpreadMethod.PAD.toString = $estr, openfl.display.SpreadMethod.PAD.__enum__ = openfl.display.SpreadMethod, openfl.display.SpreadMethod.__empty_constructs__ = [openfl.display.SpreadMethod.REPEAT, openfl.display.SpreadMethod.REFLECT, openfl.display.SpreadMethod.PAD], openfl.display.Stage = function(width, height, element, color) {
    this.__mouseY = 0, this.__mouseX = 0, openfl.display.Sprite.call(this), this.__element = element, null == color ? (this.__transparent = !0, this.set_color(0)) : this.set_color(color), this.set_name(null), this.__mouseX = 0, this.__mouseY = 0, this.__initializeGL() || this.__initializeCanvas(), this.__originalWidth = width, this.__originalHeight = height, 0 == width && 0 == height && (null != element ? (width = element.clientWidth, height = element.clientHeight) : (width = window.innerWidth, height = window.innerHeight), this.__fullscreen = !0), this.stageWidth = width, this.stageHeight = height, null != this.__canvas ? (this.__canvas.width = width, this.__canvas.height = height) : (this.__div.style.width = width + "px", this.__div.style.height = height + "px"), this.__resize(), window.addEventListener("resize", $bind(this, this.window_onResize)), window.addEventListener("focus", $bind(this, this.window_onFocus)), window.addEventListener("blur", $bind(this, this.window_onBlur)), null != element && (null != this.__canvas ? element != this.__canvas && element.appendChild(this.__canvas) : element.appendChild(this.__div)), this.stage = this, this.align = openfl.display.StageAlign.TOP_LEFT, this.allowsFullScreen = !1, this.set_displayState(openfl.display.StageDisplayState.NORMAL), this.frameRate = 60, this.quality = "high", this.scaleMode = openfl.display.StageScaleMode.NO_SCALE, this.stageFocusRect = !0, this.__clearBeforeRender = !0, this.__stack = [];
    var element1, keyEvents = ["keydown", "keyup"],
      touchEvents = ["touchstart", "touchmove", "touchend"],
      mouseEvents = ["mousedown", "mousemove", "mouseup", "dblclick", "mousewheel"],
      focusEvents = ["focus", "blur"];
    element1 = null != this.__canvas ? this.__canvas : this.__div;
    for (var _g = 0; _g < keyEvents.length;) {
      var type = keyEvents[_g];
      ++_g, window.addEventListener(type, $bind(this, this.window_onKey), !1)
    }
    for (var _g1 = 0; _g1 < touchEvents.length;) {
      var type1 = touchEvents[_g1];
      ++_g1, element1.addEventListener(type1, $bind(this, this.element_onTouch), !0)
    }
    for (var _g2 = 0; _g2 < mouseEvents.length;) {
      var type2 = mouseEvents[_g2];
      ++_g2, element1.addEventListener(type2, $bind(this, this.element_onMouse), !0)
    }
    for (var _g3 = 0; _g3 < focusEvents.length;) {
      var type3 = focusEvents[_g3];
      ++_g3, element1.addEventListener(type3, $bind(this, this.element_onFocus), !0)
    }
    window.requestAnimationFrame($bind(this, this.__render))
  }, $hxClasses["openfl.display.Stage"] = openfl.display.Stage, openfl.display.Stage.__name__ = ["openfl", "display", "Stage"], openfl.display.Stage.__super__ = openfl.display.Sprite, openfl.display.Stage.prototype = $extend(openfl.display.Sprite.prototype, {
    align: null,
    allowsFullScreen: null,
    displayState: null,
    frameRate: null,
    quality: null,
    stageFocusRect: null,
    scaleMode: null,
    stageHeight: null,
    stageWidth: null,
    __clearBeforeRender: null,
    __color: null,
    __colorSplit: null,
    __colorString: null,
    __context: null,
    __cursor: null,
    __cursorHidden: null,
    __dirty: null,
    __div: null,
    __dragBounds: null,
    __dragObject: null,
    __dragOffsetX: null,
    __dragOffsetY: null,
    __element: null,
    __focus: null,
    __fullscreen: null,
    __gl: null,
    __glContextID: null,
    __glContextLost: null,
    __glOptions: null,
    __invalidated: null,
    __mouseX: null,
    __mouseY: null,
    __originalWidth: null,
    __originalHeight: null,
    __renderSession: null,
    __stack: null,
    __transparent: null,
    __wasDirty: null,
    globalToLocal: function(pos) {
      return pos
    },
    invalidate: function() {
      this.__invalidated = !0
    },
    localToGlobal: function(pos) {
      return pos
    },
    __drag: function(mouse) {
      var parent = this.__dragObject.parent;
      null != parent && (mouse = parent.globalToLocal(mouse));
      var x = mouse.x + this.__dragOffsetX,
        y = mouse.y + this.__dragOffsetY;
      null != this.__dragBounds && (x < this.__dragBounds.x ? x = this.__dragBounds.x : x > this.__dragBounds.get_right() && (x = this.__dragBounds.get_right()), y < this.__dragBounds.y ? y = this.__dragBounds.y : y > this.__dragBounds.get_bottom() && (y = this.__dragBounds.get_bottom())), this.__dragObject.set_x(x), this.__dragObject.set_y(y)
    },
    __fireEvent: function(event, stack) {
      var length = stack.length;
      if (0 == length) event.eventPhase = 1, event.target.__broadcast(event, !1);
      else {
        event.eventPhase = 0, event.target = stack[stack.length - 1];
        for (var _g1 = 0, _g = length - 1; _g > _g1;) {
          var i = _g1++;
          if (stack[i].__broadcast(event, !1), event.__isCancelled) return
        }
        if (event.eventPhase = 1, event.target.__broadcast(event, !1), event.__isCancelled) return;
        if (event.bubbles) {
          event.eventPhase = 2;
          for (var i1 = length - 2; i1 >= 0;) {
            if (stack[i1].__broadcast(event, !1), event.__isCancelled) return;
            i1--
          }
        }
      }
    },
    __getInteractive: function(stack) {
      stack.push(this)
    },
    __initializeCanvas: function() {
      this.__canvas = js.Boot.__instanceof(this.__element, HTMLCanvasElement) ? this.__element : window.document.createElement("canvas"), this.__transparent ? this.__context = this.__canvas.getContext("2d") : (this.__canvas.setAttribute("moz-opaque", "true"), this.__context = this.__canvas.getContext("2d", {
        alpha: !1
      }));
      var style = this.__canvas.style;
      style.setProperty("-webkit-transform", "translateZ(0)", null), style.setProperty("transform", "translateZ(0)", null), this.__renderSession = new openfl.display.RenderSession, this.__renderSession.context = this.__context, this.__renderSession.roundPixels = !0
    },
    __initializeDOM: function() {
      this.__div = window.document.createElement("div");
      var style = this.__div.style;
      this.__transparent || (style.backgroundColor = this.__colorString), style.setProperty("-webkit-transform", "translate3D(0,0,0)", null), style.setProperty("transform", "translate3D(0,0,0)", null), style.position = "relative", style.overflow = "hidden", style.setProperty("-webkit-user-select", "none", null), style.setProperty("-moz-user-select", "none", null), style.setProperty("-ms-user-select", "none", null), style.setProperty("-o-user-select", "none", null), window.document.addEventListener("dragstart", function(e) {
        return "img" == e.target.nodeName.toLowerCase() ? (e.preventDefault(), !1) : !0
      }, !1), this.__renderSession = new openfl.display.RenderSession, this.__renderSession.element = this.__div, this.__renderSession.roundPixels = !0;
      var prefix = function() {
        var styles = window.getComputedStyle(document.documentElement, ""),
          pre = (Array.prototype.slice.call(styles).join("").match(/-(moz|webkit|ms)-/) || "" === styles.OLink && ["", "o"])[1],
          dom = "WebKit|Moz|MS|O".match(new RegExp("(" + pre + ")", "i"))[1];
        return {
          dom: dom,
          lowercase: pre,
          css: "-" + pre + "-",
          js: pre[0].toUpperCase() + pre.substr(1)
        }
      }();
      this.__renderSession.vendorPrefix = prefix.lowercase, this.__renderSession.transformProperty = "webkit" == prefix.lowercase ? "-webkit-transform" : "transform", this.__renderSession.transformOriginProperty = "webkit" == prefix.lowercase ? "-webkit-transform-origin" : "transform-origin"
    },
    __initializeGL: function() {
      return !1
    },
    __render: function() {
      this.__broadcast(new openfl.events.Event(openfl.events.Event.ENTER_FRAME), !0), this.__invalidated && (this.__invalidated = !1, this.__broadcast(new openfl.events.Event(openfl.events.Event.RENDER), !0)), this.__renderable = !0, this.__update(!1, !0), null != this.__canvas ? (this.__fullscreen && this.__element == this.__canvas ? (this.stageWidth = this.__canvas.width, this.stageHeight = this.__canvas.height) : (this.stageWidth != this.__canvas.width || this.stageHeight != this.__canvas.height) && (this.__canvas.width = this.stageWidth, this.__canvas.height = this.stageHeight), null != this.__gl ? this.__glContextLost || (this.__gl.viewport(0, 0, this.stageWidth, this.stageHeight), this.__gl.bindFramebuffer(36160, null), this.__transparent ? this.__gl.clearColor(0, 0, 0, 0) : this.__gl.clearColor(this.__colorSplit[0], this.__colorSplit[1], this.__colorSplit[2], 1), this.__gl.clear(16384), this.__renderGL(this.__renderSession)) : (this.__context.setTransform(1, 0, 0, 1, 0, 0), this.__context.globalAlpha = 1, !this.__transparent && this.__clearBeforeRender ? (this.__context.fillStyle = this.__colorString, this.__context.fillRect(0, 0, this.stageWidth, this.stageHeight)) : this.__transparent && this.__clearBeforeRender && this.__context.clearRect(0, 0, this.stageWidth, this.stageHeight), this.__renderCanvas(this.__renderSession))) : (this.__renderSession.z = 1, this.__renderDOM(this.__renderSession)), window.requestAnimationFrame($bind(this, this.__render))
    },
    __resize: function() {
      if (null != this.__element && (null == this.__div || null != this.__div && this.__fullscreen))
        if (this.__fullscreen) this.stageWidth = this.__element.clientWidth, this.stageHeight = this.__element.clientHeight, null != this.__canvas ? this.__element != this.__canvas && (this.__canvas.width = this.stageWidth, this.__canvas.height = this.stageHeight) : (this.__div.style.width = this.stageWidth + "px", this.__div.style.height = this.stageHeight + "px");
        else {
          var scaleX = this.__element.clientWidth / this.__originalWidth,
            scaleY = this.__element.clientHeight / this.__originalHeight,
            targetRatio = Math.min(scaleX, scaleY);
          null != this.__canvas ? this.__element != this.__canvas && (this.__canvas.style.width = this.__originalWidth * targetRatio + "px", this.__canvas.style.height = this.__originalHeight * targetRatio + "px", this.__canvas.style.marginLeft = (this.__element.clientWidth - this.__originalWidth * targetRatio) / 2 + "px", this.__canvas.style.marginTop = (this.__element.clientHeight - this.__originalHeight * targetRatio) / 2 + "px") : (this.__div.style.width = this.__originalWidth * targetRatio + "px", this.__div.style.height = this.__originalHeight * targetRatio + "px", this.__div.style.marginLeft = (this.__element.clientWidth - this.__originalWidth * targetRatio) / 2 + "px", this.__div.style.marginTop = (this.__element.clientHeight - this.__originalHeight * targetRatio) / 2 + "px")
        }
    },
    __setCursor: function(cursor) {
      if (this.__cursor != cursor && (this.__cursor = cursor, !this.__cursorHidden)) {
        var element;
        element = null != this.__canvas ? this.__canvas : this.__div, element.style.cursor = cursor
      }
    },
    __setCursorHidden: function(value) {
      if (this.__cursorHidden != value) {
        this.__cursorHidden = value;
        var element;
        element = null != this.__canvas ? this.__canvas : this.__div, element.style.cursor = value ? "none" : this.__cursor
      }
    },
    __startDrag: function(sprite, lockCenter, bounds) {
      if (this.__dragBounds = null == bounds ? null : bounds.clone(), this.__dragObject = sprite, null != this.__dragObject)
        if (lockCenter) this.__dragOffsetX = -this.__dragObject.get_width() / 2, this.__dragOffsetY = -this.__dragObject.get_height() / 2;
        else {
          var mouse = new openfl.geom.Point(this.get_mouseX(), this.get_mouseY()),
            parent = this.__dragObject.parent;
          null != parent && (mouse = parent.globalToLocal(mouse)), this.__dragOffsetX = this.__dragObject.get_x() - mouse.x, this.__dragOffsetY = this.__dragObject.get_y() - mouse.y
        }
    },
    __stopDrag: function() {
      this.__dragBounds = null, this.__dragObject = null
    },
    __update: function(transformOnly, updateChildren) {
      transformOnly ? openfl.display.DisplayObject.__worldTransformDirty > 0 && (openfl.display.Sprite.prototype.__update.call(this, !0, updateChildren), updateChildren && (openfl.display.DisplayObject.__worldTransformDirty = 0, this.__dirty = !0)) : (openfl.display.DisplayObject.__worldTransformDirty > 0 || this.__dirty || openfl.display.DisplayObject.__worldRenderDirty > 0) && (openfl.display.Sprite.prototype.__update.call(this, !1, updateChildren), updateChildren && (openfl.display.DisplayObject.__worldTransformDirty = 0, openfl.display.DisplayObject.__worldRenderDirty = 0, this.__dirty = !1))
    },
    get_mouseX: function() {
      return this.__mouseX
    },
    get_mouseY: function() {
      return this.__mouseY
    },
    canvas_onContextLost: function() {
      this.__glContextLost = !0
    },
    canvas_onContextRestored: function() {
      this.__glContextLost = !1
    },
    element_onFocus: function() {},
    element_onTouch: function(event) {
      event.preventDefault();
      var rect;
      rect = null != this.__canvas ? this.__canvas.getBoundingClientRect() : this.__div.getBoundingClientRect();
      var touch = event.changedTouches[0],
        point = new openfl.geom.Point((touch.pageX - rect.left) * (this.stageWidth / rect.width), (touch.pageY - rect.top) * (this.stageHeight / rect.height));
      this.__mouseX = point.x, this.__mouseY = point.y, this.__stack = [];
      var type = null,
        mouseType = null,
        _g = event.type;
      switch (_g) {
        case "touchstart":
          type = "touchBegin", mouseType = openfl.events.MouseEvent.MOUSE_DOWN;
          break;
        case "touchmove":
          type = "touchMove", mouseType = openfl.events.MouseEvent.MOUSE_MOVE;
          break;
        case "touchend":
          type = "touchEnd", mouseType = openfl.events.MouseEvent.MOUSE_UP
      }
      if (this.__hitTest(this.get_mouseX(), this.get_mouseY(), !1, this.__stack, !0)) {
        var target = this.__stack[this.__stack.length - 1],
          localPoint = target.globalToLocal(point),
          touchEvent = openfl.events.TouchEvent.__create(type, event, touch, localPoint, target);
        touchEvent.touchPointID = touch.identifier, touchEvent.isPrimaryTouchPoint = !0;
        var mouseEvent = openfl.events.MouseEvent.__create(mouseType, event, localPoint, target);
        mouseEvent.buttonDown = "touchEnd" != type, this.__fireEvent(touchEvent, this.__stack), this.__fireEvent(mouseEvent, this.__stack)
      } else {
        var touchEvent1 = openfl.events.TouchEvent.__create(type, event, touch, point, this);
        touchEvent1.touchPointID = touch.identifier, touchEvent1.isPrimaryTouchPoint = !0;
        var mouseEvent1 = openfl.events.MouseEvent.__create(mouseType, event, point, this);
        mouseEvent1.buttonDown = "touchEnd" != type, this.__fireEvent(touchEvent1, [this]), this.__fireEvent(mouseEvent1, [this])
      }
      "touchMove" == type && null != this.__dragObject && this.__drag(point)
    },
    element_onMouse: function(event) {
      var rect;
      null != this.__canvas ? (rect = this.__canvas.getBoundingClientRect(), this.__mouseX = (event.clientX - rect.left) * (this.stageWidth / rect.width), this.__mouseY = (event.clientY - rect.top) * (this.stageHeight / rect.height)) : (rect = this.__div.getBoundingClientRect(), this.__mouseX = event.clientX - rect.left, this.__mouseY = event.clientY - rect.top), this.__stack = [];
      var type, _g = event.type;
      switch (_g) {
        case "mousedown":
          type = openfl.events.MouseEvent.MOUSE_DOWN;
          break;
        case "mouseup":
          type = openfl.events.MouseEvent.MOUSE_UP;
          break;
        case "mousemove":
          type = openfl.events.MouseEvent.MOUSE_MOVE;
          break;
        case "dblclick":
          type = openfl.events.MouseEvent.DOUBLE_CLICK;
          break;
        case "mousewheel":
          type = openfl.events.MouseEvent.MOUSE_WHEEL;
          break;
        default:
          type = null
      }
      if (this.__hitTest(this.get_mouseX(), this.get_mouseY(), !1, this.__stack, !0)) {
        var target = this.__stack[this.__stack.length - 1];
        this.__setCursor(target.buttonMode ? "pointer" : "default"), this.__fireEvent(openfl.events.MouseEvent.__create(type, event, target.globalToLocal(new openfl.geom.Point(this.get_mouseX(), this.get_mouseY())), target), this.__stack), type == openfl.events.MouseEvent.MOUSE_UP && this.__fireEvent(openfl.events.MouseEvent.__create(openfl.events.MouseEvent.CLICK, event, target.globalToLocal(new openfl.geom.Point(this.get_mouseX(), this.get_mouseY())), target), this.__stack)
      } else this.__setCursor(this.buttonMode ? "pointer" : "default"), this.__fireEvent(openfl.events.MouseEvent.__create(type, event, new openfl.geom.Point(this.get_mouseX(), this.get_mouseY()), this), [this]), type == openfl.events.MouseEvent.MOUSE_UP && this.__fireEvent(openfl.events.MouseEvent.__create(openfl.events.MouseEvent.CLICK, event, new openfl.geom.Point(this.get_mouseX(), this.get_mouseY()), this), [this]);
      null != this.__dragObject && this.__drag(new openfl.geom.Point(this.get_mouseX(), this.get_mouseY()))
    },
    window_onKey: function(event) {
      var keyCode;
      keyCode = null != event.keyCode ? event.keyCode : event.which, keyCode = openfl.ui.Keyboard.__convertMozillaCode(keyCode);
      var location;
      location = null != event.location ? event.location : event.keyLocation;
      var keyLocation;
      keyLocation = js.Boot.__cast(location, Int);
      var stack = new Array;
      null == this.__focus ? this.__getInteractive(stack) : this.__focus.__getInteractive(stack), stack.length > 0 && (stack.reverse(), this.__fireEvent(new openfl.events.KeyboardEvent("keydown" == event.type ? openfl.events.KeyboardEvent.KEY_DOWN : openfl.events.KeyboardEvent.KEY_UP, !0, !1, event.charCode, keyCode, keyLocation, event.ctrlKey, event.altKey, event.shiftKey), stack))
    },
    window_onResize: function() {
      this.__resize();
      var event1 = new openfl.events.Event(openfl.events.Event.RESIZE);
      this.__broadcast(event1, !1)
    },
    window_onFocus: function() {
      var event1 = new openfl.events.Event(openfl.events.Event.ACTIVATE);
      this.__broadcast(event1, !0)
    },
    window_onBlur: function() {
      var event1 = new openfl.events.Event(openfl.events.Event.DEACTIVATE);
      this.__broadcast(event1, !0)
    },
    get_color: function() {
      return this.__color
    },
    set_color: function(value) {
      var r = (16711680 & value) >>> 16,
        g = (65280 & value) >>> 8,
        b = 255 & value;
      return this.__colorSplit = [r / 255, g / 255, b / 255], this.__colorString = "#" + StringTools.hex(value, 6), this.__color = value
    },
    get_focus: function() {
      return this.__focus
    },
    set_focus: function(value) {
      if (value != this.__focus) {
        if (null != this.__focus) {
          var event = new openfl.events.FocusEvent(openfl.events.FocusEvent.FOCUS_OUT, !0, !1, value, !1, 0);
          this.__stack = [], this.__focus.__getInteractive(this.__stack), this.__stack.reverse(), this.__fireEvent(event, this.__stack)
        }
        if (null != value) {
          var event1 = new openfl.events.FocusEvent(openfl.events.FocusEvent.FOCUS_IN, !0, !1, this.__focus, !1, 0);
          this.__stack = [], value.__getInteractive(this.__stack), this.__stack.reverse(), this.__fireEvent(event1, this.__stack)
        }
        this.__focus = value
      }
      return this.__focus
    },
    set_displayState: function(value) {
      switch (value[1]) {
        case 0:
          var fs_exit_function = function() {
            document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
          };
          fs_exit_function();
          break;
        case 1:
        case 2:
          var fsfunction = function(elem) {
            elem.requestFullscreen ? elem.requestFullscreen() : elem.msRequestFullscreen ? elem.msRequestFullscreen() : elem.mozRequestFullScreen ? elem.mozRequestFullScreen() : elem.webkitRequestFullscreen && elem.webkitRequestFullscreen()
          };
          fsfunction(this.__element)
      }
      return this.displayState = value, value
    },
    __class__: openfl.display.Stage,
    __properties__: $extend(openfl.display.Sprite.prototype.__properties__, {
      set_focus: "set_focus",
      get_focus: "get_focus",
      set_displayState: "set_displayState",
      set_color: "set_color",
      get_color: "get_color"
    })
  }), openfl.display.RenderSession = function() {
    this.maskManager = new openfl.display.MaskManager(this)
  }, $hxClasses["openfl.display.RenderSession"] = openfl.display.RenderSession, openfl.display.RenderSession.__name__ = ["openfl", "display", "RenderSession"], openfl.display.RenderSession.prototype = {
    context: null,
    element: null,
    gl: null,
    maskManager: null,
    roundPixels: null,
    transformProperty: null,
    transformOriginProperty: null,
    vendorPrefix: null,
    z: null,
    __class__: openfl.display.RenderSession
  }, openfl.display.MaskManager = function(renderSession) {
    this.renderSession = renderSession
  }, $hxClasses["openfl.display.MaskManager"] = openfl.display.MaskManager, openfl.display.MaskManager.__name__ = ["openfl", "display", "MaskManager"], openfl.display.MaskManager.prototype = {
    renderSession: null,
    pushMask: function(mask) {
      var context = this.renderSession.context;
      context.save();
      var transform = mask.__worldTransform;
      null == transform && (transform = new openfl.geom.Matrix), context.setTransform(transform.a, transform.c, transform.b, transform.d, transform.tx, transform.ty), context.beginPath(), mask.__renderMask(this.renderSession), context.clip()
    },
    pushRect: function(rect, transform) {
      var context = this.renderSession.context;
      context.save(), context.setTransform(transform.a, transform.c, transform.b, transform.d, transform.tx, transform.ty), context.beginPath(), context.rect(rect.x, rect.y, rect.width, rect.height), context.clip()
    },
    popMask: function() {
      this.renderSession.context.restore()
    },
    __class__: openfl.display.MaskManager
  }, openfl.display.StageAlign = $hxClasses["openfl.display.StageAlign"] = {
    __ename__: !0,
    __constructs__: ["TOP_RIGHT", "TOP_LEFT", "TOP", "RIGHT", "LEFT", "BOTTOM_RIGHT", "BOTTOM_LEFT", "BOTTOM"]
  }, openfl.display.StageAlign.TOP_RIGHT = ["TOP_RIGHT", 0], openfl.display.StageAlign.TOP_RIGHT.toString = $estr, openfl.display.StageAlign.TOP_RIGHT.__enum__ = openfl.display.StageAlign, openfl.display.StageAlign.TOP_LEFT = ["TOP_LEFT", 1], openfl.display.StageAlign.TOP_LEFT.toString = $estr, openfl.display.StageAlign.TOP_LEFT.__enum__ = openfl.display.StageAlign, openfl.display.StageAlign.TOP = ["TOP", 2], openfl.display.StageAlign.TOP.toString = $estr, openfl.display.StageAlign.TOP.__enum__ = openfl.display.StageAlign, openfl.display.StageAlign.RIGHT = ["RIGHT", 3], openfl.display.StageAlign.RIGHT.toString = $estr, openfl.display.StageAlign.RIGHT.__enum__ = openfl.display.StageAlign, openfl.display.StageAlign.LEFT = ["LEFT", 4], openfl.display.StageAlign.LEFT.toString = $estr, openfl.display.StageAlign.LEFT.__enum__ = openfl.display.StageAlign, openfl.display.StageAlign.BOTTOM_RIGHT = ["BOTTOM_RIGHT", 5], openfl.display.StageAlign.BOTTOM_RIGHT.toString = $estr, openfl.display.StageAlign.BOTTOM_RIGHT.__enum__ = openfl.display.StageAlign, openfl.display.StageAlign.BOTTOM_LEFT = ["BOTTOM_LEFT", 6], openfl.display.StageAlign.BOTTOM_LEFT.toString = $estr, openfl.display.StageAlign.BOTTOM_LEFT.__enum__ = openfl.display.StageAlign, openfl.display.StageAlign.BOTTOM = ["BOTTOM", 7], openfl.display.StageAlign.BOTTOM.toString = $estr, openfl.display.StageAlign.BOTTOM.__enum__ = openfl.display.StageAlign, openfl.display.StageAlign.__empty_constructs__ = [openfl.display.StageAlign.TOP_RIGHT, openfl.display.StageAlign.TOP_LEFT, openfl.display.StageAlign.TOP, openfl.display.StageAlign.RIGHT, openfl.display.StageAlign.LEFT, openfl.display.StageAlign.BOTTOM_RIGHT, openfl.display.StageAlign.BOTTOM_LEFT, openfl.display.StageAlign.BOTTOM], openfl.display.StageDisplayState = $hxClasses["openfl.display.StageDisplayState"] = {
    __ename__: !0,
    __constructs__: ["NORMAL", "FULL_SCREEN", "FULL_SCREEN_INTERACTIVE"]
  }, openfl.display.StageDisplayState.NORMAL = ["NORMAL", 0], openfl.display.StageDisplayState.NORMAL.toString = $estr, openfl.display.StageDisplayState.NORMAL.__enum__ = openfl.display.StageDisplayState, openfl.display.StageDisplayState.FULL_SCREEN = ["FULL_SCREEN", 1], openfl.display.StageDisplayState.FULL_SCREEN.toString = $estr, openfl.display.StageDisplayState.FULL_SCREEN.__enum__ = openfl.display.StageDisplayState, openfl.display.StageDisplayState.FULL_SCREEN_INTERACTIVE = ["FULL_SCREEN_INTERACTIVE", 2], openfl.display.StageDisplayState.FULL_SCREEN_INTERACTIVE.toString = $estr, openfl.display.StageDisplayState.FULL_SCREEN_INTERACTIVE.__enum__ = openfl.display.StageDisplayState, openfl.display.StageDisplayState.__empty_constructs__ = [openfl.display.StageDisplayState.NORMAL, openfl.display.StageDisplayState.FULL_SCREEN, openfl.display.StageDisplayState.FULL_SCREEN_INTERACTIVE], openfl.display.StageScaleMode = $hxClasses["openfl.display.StageScaleMode"] = {
    __ename__: !0,
    __constructs__: ["SHOW_ALL", "NO_SCALE", "NO_BORDER", "EXACT_FIT"]
  }, openfl.display.StageScaleMode.SHOW_ALL = ["SHOW_ALL", 0], openfl.display.StageScaleMode.SHOW_ALL.toString = $estr, openfl.display.StageScaleMode.SHOW_ALL.__enum__ = openfl.display.StageScaleMode, openfl.display.StageScaleMode.NO_SCALE = ["NO_SCALE", 1], openfl.display.StageScaleMode.NO_SCALE.toString = $estr, openfl.display.StageScaleMode.NO_SCALE.__enum__ = openfl.display.StageScaleMode, openfl.display.StageScaleMode.NO_BORDER = ["NO_BORDER", 2], openfl.display.StageScaleMode.NO_BORDER.toString = $estr, openfl.display.StageScaleMode.NO_BORDER.__enum__ = openfl.display.StageScaleMode, openfl.display.StageScaleMode.EXACT_FIT = ["EXACT_FIT", 3], openfl.display.StageScaleMode.EXACT_FIT.toString = $estr, openfl.display.StageScaleMode.EXACT_FIT.__enum__ = openfl.display.StageScaleMode, openfl.display.StageScaleMode.__empty_constructs__ = [openfl.display.StageScaleMode.SHOW_ALL, openfl.display.StageScaleMode.NO_SCALE, openfl.display.StageScaleMode.NO_BORDER, openfl.display.StageScaleMode.EXACT_FIT], openfl.display.Tilesheet = function(image) {
    this.__bitmap = image, this.__centerPoints = new Array, this.__tileRects = new Array, this.__tileUVs = new Array
  }, $hxClasses["openfl.display.Tilesheet"] = openfl.display.Tilesheet, openfl.display.Tilesheet.__name__ = ["openfl", "display", "Tilesheet"], openfl.display.Tilesheet.prototype = {
    __bitmap: null,
    __centerPoints: null,
    __tileRects: null,
    __tileUVs: null,
    addTileRect: function(rectangle, centerPoint) {
      return this.__tileRects.push(rectangle), null == centerPoint && (centerPoint = new openfl.geom.Point), this.__centerPoints.push(centerPoint), this.__tileUVs.push(new openfl.geom.Rectangle(rectangle.get_left() / this.__bitmap.width, rectangle.get_top() / this.__bitmap.height, rectangle.get_right() / this.__bitmap.width, rectangle.get_bottom() / this.__bitmap.height)), this.__tileRects.length - 1
    },
    drawTiles: function(graphics, tileData, smooth, flags, count) {
      null == count && (count = -1), null == flags && (flags = 0), null == smooth && (smooth = !1), graphics.drawTiles(this, tileData, smooth, flags, count)
    },
    getTileCenter: function(index) {
      return this.__centerPoints[index]
    },
    getTileRect: function(index) {
      return this.__tileRects[index]
    },
    getTileUVs: function(index) {
      return this.__tileUVs[index]
    },
    __class__: openfl.display.Tilesheet
  }, openfl.display.TriangleCulling = $hxClasses["openfl.display.TriangleCulling"] = {
    __ename__: !0,
    __constructs__: ["NEGATIVE", "NONE", "POSITIVE"]
  }, openfl.display.TriangleCulling.NEGATIVE = ["NEGATIVE", 0], openfl.display.TriangleCulling.NEGATIVE.toString = $estr, openfl.display.TriangleCulling.NEGATIVE.__enum__ = openfl.display.TriangleCulling, openfl.display.TriangleCulling.NONE = ["NONE", 1], openfl.display.TriangleCulling.NONE.toString = $estr, openfl.display.TriangleCulling.NONE.__enum__ = openfl.display.TriangleCulling, openfl.display.TriangleCulling.POSITIVE = ["POSITIVE", 2], openfl.display.TriangleCulling.POSITIVE.toString = $estr, openfl.display.TriangleCulling.POSITIVE.__enum__ = openfl.display.TriangleCulling, openfl.display.TriangleCulling.__empty_constructs__ = [openfl.display.TriangleCulling.NEGATIVE, openfl.display.TriangleCulling.NONE, openfl.display.TriangleCulling.POSITIVE], openfl.errors = {}, openfl.errors.Error = function(message, id) {
    null == id && (id = 0), null == message && (message = ""), this.message = message, this.errorID = id, this.name = "Error"
  }, $hxClasses["openfl.errors.Error"] = openfl.errors.Error, openfl.errors.Error.__name__ = ["openfl", "errors", "Error"], openfl.errors.Error.prototype = {
    errorID: null,
    message: null,
    name: null,
    getStackTrace: function() {
      return haxe.CallStack.toString(haxe.CallStack.exceptionStack())
    },
    toString: function() {
      return null != this.message ? this.message : "Error"
    },
    __class__: openfl.errors.Error
  }, openfl.errors.IOError = function(message) {
    null == message && (message = ""), openfl.errors.Error.call(this, message)
  }, $hxClasses["openfl.errors.IOError"] = openfl.errors.IOError, openfl.errors.IOError.__name__ = ["openfl", "errors", "IOError"], openfl.errors.IOError.__super__ = openfl.errors.Error, openfl.errors.IOError.prototype = $extend(openfl.errors.Error.prototype, {
    __class__: openfl.errors.IOError
  }), openfl.errors.RangeError = function(inMessage) {
    null == inMessage && (inMessage = ""), openfl.errors.Error.call(this, inMessage, 0)
  }, $hxClasses["openfl.errors.RangeError"] = openfl.errors.RangeError, openfl.errors.RangeError.__name__ = ["openfl", "errors", "RangeError"], openfl.errors.RangeError.__super__ = openfl.errors.Error, openfl.errors.RangeError.prototype = $extend(openfl.errors.Error.prototype, {
    __class__: openfl.errors.RangeError
  }), openfl.errors.TypeError = function(inMessage) {
    null == inMessage && (inMessage = ""), openfl.errors.Error.call(this, inMessage, 0)
  }, $hxClasses["openfl.errors.TypeError"] = openfl.errors.TypeError, openfl.errors.TypeError.__name__ = ["openfl", "errors", "TypeError"], openfl.errors.TypeError.__super__ = openfl.errors.Error, openfl.errors.TypeError.prototype = $extend(openfl.errors.Error.prototype, {
    __class__: openfl.errors.TypeError
  }), openfl.events.TextEvent = function(type, bubbles, cancelable, text) {
    null == text && (text = ""), null == cancelable && (cancelable = !1), null == bubbles && (bubbles = !1), openfl.events.Event.call(this, type, bubbles, cancelable), this.text = text
  }, $hxClasses["openfl.events.TextEvent"] = openfl.events.TextEvent, openfl.events.TextEvent.__name__ = ["openfl", "events", "TextEvent"], openfl.events.TextEvent.__super__ = openfl.events.Event, openfl.events.TextEvent.prototype = $extend(openfl.events.Event.prototype, {
    text: null,
    __class__: openfl.events.TextEvent
  }), openfl.events.ErrorEvent = function(type, bubbles, cancelable, text, id) {
    null == id && (id = 0), null == text && (text = ""), null == cancelable && (cancelable = !1), null == bubbles && (bubbles = !1), openfl.events.TextEvent.call(this, type, bubbles, cancelable), this.text = text, this.errorID = id
  }, $hxClasses["openfl.events.ErrorEvent"] = openfl.events.ErrorEvent, openfl.events.ErrorEvent.__name__ = ["openfl", "events", "ErrorEvent"], openfl.events.ErrorEvent.__super__ = openfl.events.TextEvent, openfl.events.ErrorEvent.prototype = $extend(openfl.events.TextEvent.prototype, {
    errorID: null,
    __class__: openfl.events.ErrorEvent
  }), openfl.events._EventDispatcher = {}, openfl.events._EventDispatcher.Listener = function(callback, useCapture, priority) {
    this.callback = callback, this.useCapture = useCapture, this.priority = priority
  }, $hxClasses["openfl.events._EventDispatcher.Listener"] = openfl.events._EventDispatcher.Listener, openfl.events._EventDispatcher.Listener.__name__ = ["openfl", "events", "_EventDispatcher", "Listener"], openfl.events._EventDispatcher.Listener.prototype = {
    callback: null,
    priority: null,
    useCapture: null,
    match: function(callback, useCapture) {
      return this.callback == callback && this.useCapture == useCapture
    },
    __class__: openfl.events._EventDispatcher.Listener
  }, openfl.events.FocusEvent = function(type, bubbles, cancelable, relatedObject, shiftKey, keyCode) {
    null == keyCode && (keyCode = 0), null == shiftKey && (shiftKey = !1), null == cancelable && (cancelable = !1), null == bubbles && (bubbles = !1), openfl.events.Event.call(this, type, bubbles, cancelable), this.keyCode = keyCode, this.shiftKey = null == shiftKey ? !1 : shiftKey, this.relatedObject = relatedObject
  }, $hxClasses["openfl.events.FocusEvent"] = openfl.events.FocusEvent, openfl.events.FocusEvent.__name__ = ["openfl", "events", "FocusEvent"], openfl.events.FocusEvent.__super__ = openfl.events.Event, openfl.events.FocusEvent.prototype = $extend(openfl.events.Event.prototype, {
    keyCode: null,
    relatedObject: null,
    shiftKey: null,
    clone: function() {
      var event = new openfl.events.FocusEvent(this.type, this.bubbles, this.cancelable, this.relatedObject, this.shiftKey, this.keyCode);
      return event.target = this.target, event.currentTarget = this.currentTarget, event.eventPhase = this.eventPhase, event
    },
    __class__: openfl.events.FocusEvent
  }), openfl.events.HTTPStatusEvent = function(type, bubbles, cancelable, status) {
    null == status && (status = 0), null == cancelable && (cancelable = !1), null == bubbles && (bubbles = !1), this.status = status, openfl.events.Event.call(this, type, bubbles, cancelable)
  }, $hxClasses["openfl.events.HTTPStatusEvent"] = openfl.events.HTTPStatusEvent, openfl.events.HTTPStatusEvent.__name__ = ["openfl", "events", "HTTPStatusEvent"], openfl.events.HTTPStatusEvent.__super__ = openfl.events.Event, openfl.events.HTTPStatusEvent.prototype = $extend(openfl.events.Event.prototype, {
    responseHeaders: null,
    responseURL: null,
    status: null,
    __class__: openfl.events.HTTPStatusEvent
  }), openfl.events.IOErrorEvent = function(type, bubbles, cancelable, text, id) {
    null == id && (id = 0), null == text && (text = ""), null == cancelable && (cancelable = !1), null == bubbles && (bubbles = !0), openfl.events.ErrorEvent.call(this, type, bubbles, cancelable, text, id)
  }, $hxClasses["openfl.events.IOErrorEvent"] = openfl.events.IOErrorEvent, openfl.events.IOErrorEvent.__name__ = ["openfl", "events", "IOErrorEvent"], openfl.events.IOErrorEvent.__super__ = openfl.events.ErrorEvent, openfl.events.IOErrorEvent.prototype = $extend(openfl.events.ErrorEvent.prototype, {
    clone: function() {
      return new openfl.events.IOErrorEvent(this.type, this.bubbles, this.cancelable, this.text, this.errorID)
    },
    toString: function() {
      return "[IOErrorEvent type=" + this.type + " bubbles=" + Std.string(this.bubbles) + " cancelable=" + Std.string(this.cancelable) + " text=" + this.text + " errorID=" + this.errorID + "]"
    },
    __class__: openfl.events.IOErrorEvent
  }), openfl.events.KeyboardEvent = function(type, bubbles, cancelable, charCodeValue, keyCodeValue, keyLocationValue, ctrlKeyValue, altKeyValue, shiftKeyValue, controlKeyValue, commandKeyValue) {
    null == commandKeyValue && (commandKeyValue = !1), null == controlKeyValue && (controlKeyValue = !1), null == shiftKeyValue && (shiftKeyValue = !1), null == altKeyValue && (altKeyValue = !1), null == ctrlKeyValue && (ctrlKeyValue = !1), null == keyCodeValue && (keyCodeValue = 0), null == charCodeValue && (charCodeValue = 0), null == cancelable && (cancelable = !1), null == bubbles && (bubbles = !1), openfl.events.Event.call(this, type, bubbles, cancelable), this.charCode = charCodeValue, this.keyCode = keyCodeValue, this.keyLocation = null != keyLocationValue ? keyLocationValue : 0, this.ctrlKey = ctrlKeyValue, this.altKey = altKeyValue, this.shiftKey = shiftKeyValue, this.controlKey = controlKeyValue, this.commandKey = commandKeyValue
  }, $hxClasses["openfl.events.KeyboardEvent"] = openfl.events.KeyboardEvent, openfl.events.KeyboardEvent.__name__ = ["openfl", "events", "KeyboardEvent"], openfl.events.KeyboardEvent.__super__ = openfl.events.Event, openfl.events.KeyboardEvent.prototype = $extend(openfl.events.Event.prototype, {
    altKey: null,
    charCode: null,
    ctrlKey: null,
    commandKey: null,
    controlKey: null,
    keyCode: null,
    keyLocation: null,
    shiftKey: null,
    __class__: openfl.events.KeyboardEvent
  }), openfl.events.MouseEvent = function(type, bubbles, cancelable, localX, localY, relatedObject, ctrlKey, altKey, shiftKey, buttonDown, delta, commandKey, clickCount) {
    null == clickCount && (clickCount = 0), null == commandKey && (commandKey = !1), null == delta && (delta = 0), null == buttonDown && (buttonDown = !1), null == shiftKey && (shiftKey = !1), null == altKey && (altKey = !1), null == ctrlKey && (ctrlKey = !1), null == localY && (localY = 0), null == localX && (localX = 0), null == cancelable && (cancelable = !1), null == bubbles && (bubbles = !0), openfl.events.Event.call(this, type, bubbles, cancelable), this.shiftKey = shiftKey, this.altKey = altKey, this.ctrlKey = ctrlKey, this.bubbles = bubbles, this.relatedObject = relatedObject, this.delta = delta, this.localX = localX, this.localY = localY, this.buttonDown = buttonDown, this.commandKey = commandKey, this.clickCount = clickCount
  }, $hxClasses["openfl.events.MouseEvent"] = openfl.events.MouseEvent, openfl.events.MouseEvent.__name__ = ["openfl", "events", "MouseEvent"], openfl.events.MouseEvent.__buttonDown = null, openfl.events.MouseEvent.__create = function(type, event, local, target) {
    var delta = 2;
    if (type == openfl.events.MouseEvent.MOUSE_WHEEL) {
      var mouseEvent = event;
      mouseEvent.wheelDelta ? delta = mouseEvent.wheelDelta / 120 | 0 : mouseEvent.detail && 0 | -mouseEvent.detail
    }
    type == openfl.events.MouseEvent.MOUSE_DOWN ? openfl.events.MouseEvent.__buttonDown = !0 : type == openfl.events.MouseEvent.MOUSE_UP && (openfl.events.MouseEvent.__buttonDown = !1);
    var pseudoEvent = new openfl.events.MouseEvent(type, !0, !1, local.x, local.y, null, event.ctrlKey, event.altKey, event.shiftKey, openfl.events.MouseEvent.__buttonDown, delta);
    return pseudoEvent.stageX = openfl.Lib.current.stage.get_mouseX(), pseudoEvent.stageY = openfl.Lib.current.stage.get_mouseY(), pseudoEvent.target = target, pseudoEvent
  }, openfl.events.MouseEvent.__super__ = openfl.events.Event, openfl.events.MouseEvent.prototype = $extend(openfl.events.Event.prototype, {
    altKey: null,
    buttonDown: null,
    commandKey: null,
    clickCount: null,
    ctrlKey: null,
    delta: null,
    localX: null,
    localY: null,
    relatedObject: null,
    shiftKey: null,
    stageX: null,
    stageY: null,
    updateAfterEvent: function() {},
    __class__: openfl.events.MouseEvent
  }), openfl.events.ProgressEvent = function(type, bubbles, cancelable, bytesLoaded, bytesTotal) {
    null == bytesTotal && (bytesTotal = 0), null == bytesLoaded && (bytesLoaded = 0), null == cancelable && (cancelable = !1), null == bubbles && (bubbles = !1), openfl.events.Event.call(this, type, bubbles, cancelable), this.bytesLoaded = bytesLoaded, this.bytesTotal = bytesTotal
  }, $hxClasses["openfl.events.ProgressEvent"] = openfl.events.ProgressEvent, openfl.events.ProgressEvent.__name__ = ["openfl", "events", "ProgressEvent"], openfl.events.ProgressEvent.__super__ = openfl.events.Event, openfl.events.ProgressEvent.prototype = $extend(openfl.events.Event.prototype, {
    bytesLoaded: null,
    bytesTotal: null,
    __class__: openfl.events.ProgressEvent
  }), openfl.events.SecurityErrorEvent = function(type, bubbles, cancelable, text) {
    null == text && (text = ""), null == cancelable && (cancelable = !1), null == bubbles && (bubbles = !1), openfl.events.ErrorEvent.call(this, type, bubbles, cancelable), this.text = text
  }, $hxClasses["openfl.events.SecurityErrorEvent"] = openfl.events.SecurityErrorEvent, openfl.events.SecurityErrorEvent.__name__ = ["openfl", "events", "SecurityErrorEvent"], openfl.events.SecurityErrorEvent.__super__ = openfl.events.ErrorEvent, openfl.events.SecurityErrorEvent.prototype = $extend(openfl.events.ErrorEvent.prototype, {
    __class__: openfl.events.SecurityErrorEvent
  }), openfl.events.TouchEvent = function(type, bubbles, cancelable, localX, localY, sizeX, sizeY, relatedObject, ctrlKey, altKey, shiftKey, buttonDown, delta, commandKey, clickCount) {
    null == clickCount && (clickCount = 0), null == commandKey && (commandKey = !1), null == delta && (delta = 0), null == buttonDown && (buttonDown = !1), null == shiftKey && (shiftKey = !1), null == altKey && (altKey = !1), null == ctrlKey && (ctrlKey = !1), null == sizeY && (sizeY = 1), null == sizeX && (sizeX = 1), null == localY && (localY = 0), null == localX && (localX = 0), null == cancelable && (cancelable = !1), null == bubbles && (bubbles = !0), openfl.events.Event.call(this, type, bubbles, cancelable), this.shiftKey = shiftKey, this.altKey = altKey, this.ctrlKey = ctrlKey, this.bubbles = bubbles, this.relatedObject = relatedObject, this.delta = delta, this.localX = localX, this.localY = localY, this.sizeX = sizeX, this.sizeY = sizeY, this.buttonDown = buttonDown, this.commandKey = commandKey, this.pressure = 1, this.touchPointID = 0, this.isPrimaryTouchPoint = !0
  }, $hxClasses["openfl.events.TouchEvent"] = openfl.events.TouchEvent, openfl.events.TouchEvent.__name__ = ["openfl", "events", "TouchEvent"], openfl.events.TouchEvent.__create = function(type, event, touch, local, target) {
    var evt = new openfl.events.TouchEvent(type, !0, !1, local.x, local.y, null, null, null, event.ctrlKey, event.altKey, event.shiftKey, !1, 0, null, 0);
    return evt.stageX = openfl.Lib.current.stage.get_mouseX(), evt.stageY = openfl.Lib.current.stage.get_mouseY(), evt.target = target, evt
  }, openfl.events.TouchEvent.__super__ = openfl.events.Event, openfl.events.TouchEvent.prototype = $extend(openfl.events.Event.prototype, {
    altKey: null,
    buttonDown: null,
    commandKey: null,
    ctrlKey: null,
    delta: null,
    isPrimaryTouchPoint: null,
    localX: null,
    localY: null,
    pressure: null,
    relatedObject: null,
    shiftKey: null,
    sizeX: null,
    sizeY: null,
    stageX: null,
    stageY: null,
    touchPointID: null,
    updateAfterEvent: function() {},
    __class__: openfl.events.TouchEvent
  }), openfl.filters = {}, openfl.filters.BitmapFilter = function() {}, $hxClasses["openfl.filters.BitmapFilter"] = openfl.filters.BitmapFilter, openfl.filters.BitmapFilter.__name__ = ["openfl", "filters", "BitmapFilter"], openfl.filters.BitmapFilter.prototype = {
    clone: function() {
      return new openfl.filters.BitmapFilter
    },
    __applyFilter: function() {},
    __class__: openfl.filters.BitmapFilter
  }, openfl.geom.ColorTransform = function(redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier, redOffset, greenOffset, blueOffset, alphaOffset) {
    null == alphaOffset && (alphaOffset = 0), null == blueOffset && (blueOffset = 0), null == greenOffset && (greenOffset = 0), null == redOffset && (redOffset = 0), null == alphaMultiplier && (alphaMultiplier = 1), null == blueMultiplier && (blueMultiplier = 1), null == greenMultiplier && (greenMultiplier = 1), null == redMultiplier && (redMultiplier = 1), this.redMultiplier = redMultiplier, this.greenMultiplier = greenMultiplier, this.blueMultiplier = blueMultiplier, this.alphaMultiplier = alphaMultiplier, this.redOffset = redOffset, this.greenOffset = greenOffset, this.blueOffset = blueOffset, this.alphaOffset = alphaOffset
  }, $hxClasses["openfl.geom.ColorTransform"] = openfl.geom.ColorTransform, openfl.geom.ColorTransform.__name__ = ["openfl", "geom", "ColorTransform"], openfl.geom.ColorTransform.prototype = {
    alphaMultiplier: null,
    alphaOffset: null,
    blueMultiplier: null,
    blueOffset: null,
    greenMultiplier: null,
    greenOffset: null,
    redMultiplier: null,
    redOffset: null,
    concat: function(second) {
      this.redMultiplier += second.redMultiplier, this.greenMultiplier += second.greenMultiplier, this.blueMultiplier += second.blueMultiplier, this.alphaMultiplier += second.alphaMultiplier
    },
    get_color: function() {
      return (0 | this.redOffset) << 16 | (0 | this.greenOffset) << 8 | (0 | this.blueOffset)
    },
    set_color: function(value) {
      return this.redOffset = value >> 16 & 255, this.greenOffset = value >> 8 & 255, this.blueOffset = 255 & value, this.redMultiplier = 0, this.greenMultiplier = 0, this.blueMultiplier = 0, this.get_color()
    },
    __class__: openfl.geom.ColorTransform,
    __properties__: {
      set_color: "set_color",
      get_color: "get_color"
    }
  }, openfl.geom.Transform = function(displayObject) {
    this.colorTransform = new openfl.geom.ColorTransform, this.concatenatedColorTransform = new openfl.geom.ColorTransform, this.concatenatedMatrix = new openfl.geom.Matrix, this.pixelBounds = new openfl.geom.Rectangle, this.__displayObject = displayObject, this.__matrix = new openfl.geom.Matrix
  }, $hxClasses["openfl.geom.Transform"] = openfl.geom.Transform, openfl.geom.Transform.__name__ = ["openfl", "geom", "Transform"], openfl.geom.Transform.prototype = {
    colorTransform: null,
    concatenatedColorTransform: null,
    concatenatedMatrix: null,
    pixelBounds: null,
    __displayObject: null,
    __matrix: null,
    get_matrix: function() {
      return null != this.__matrix ? (this.__matrix.identity(), this.__matrix.scale(this.__displayObject.get_scaleX(), this.__displayObject.get_scaleY()), this.__matrix.rotate(this.__displayObject.get_rotation() * (Math.PI / 180)), this.__matrix.translate(this.__displayObject.get_x(), this.__displayObject.get_y()), this.__matrix.clone()) : null
    },
    set_matrix: function(value) {
      return null == value ? this.__matrix = null : (null != this.__displayObject && (this.__displayObject.set_x(value.tx), this.__displayObject.set_y(value.ty), this.__displayObject.set_scaleX(Math.sqrt(value.a * value.a + value.b * value.b)), this.__displayObject.set_scaleY(Math.sqrt(value.c * value.c + value.d * value.d)), this.__displayObject.set_rotation(Math.atan2(value.b, value.a) * (180 / Math.PI))), value)
    },
    __class__: openfl.geom.Transform,
    __properties__: {
      set_matrix: "set_matrix",
      get_matrix: "get_matrix"
    }
  }, openfl.geom.Vector3D = function(x, y, z, w) {
    null == w && (w = 0), null == z && (z = 0), null == y && (y = 0), null == x && (x = 0), this.w = w, this.x = x, this.y = y, this.z = z
  }, $hxClasses["openfl.geom.Vector3D"] = openfl.geom.Vector3D, openfl.geom.Vector3D.__name__ = ["openfl", "geom", "Vector3D"], openfl.geom.Vector3D.__properties__ = {
    get_Z_AXIS: "get_Z_AXIS",
    get_Y_AXIS: "get_Y_AXIS",
    get_X_AXIS: "get_X_AXIS"
  }, openfl.geom.Vector3D.X_AXIS = null, openfl.geom.Vector3D.Y_AXIS = null, openfl.geom.Vector3D.Z_AXIS = null, openfl.geom.Vector3D.angleBetween = function(a, b) {
    var a0 = new openfl.geom.Vector3D(a.x, a.y, a.z, a.w);
    a0.normalize();
    var b0 = new openfl.geom.Vector3D(b.x, b.y, b.z, b.w);
    return b0.normalize(), Math.acos(a0.x * b0.x + a0.y * b0.y + a0.z * b0.z)
  }, openfl.geom.Vector3D.distance = function(pt1, pt2) {
    var x = pt2.x - pt1.x,
      y = pt2.y - pt1.y,
      z = pt2.z - pt1.z;
    return Math.sqrt(x * x + y * y + z * z)
  }, openfl.geom.Vector3D.get_X_AXIS = function() {
    return new openfl.geom.Vector3D(1, 0, 0)
  }, openfl.geom.Vector3D.get_Y_AXIS = function() {
    return new openfl.geom.Vector3D(0, 1, 0)
  }, openfl.geom.Vector3D.get_Z_AXIS = function() {
    return new openfl.geom.Vector3D(0, 0, 1)
  }, openfl.geom.Vector3D.prototype = {
    length: null,
    lengthSquared: null,
    w: null,
    x: null,
    y: null,
    z: null,
    add: function(a) {
      return new openfl.geom.Vector3D(this.x + a.x, this.y + a.y, this.z + a.z)
    },
    clone: function() {
      return new openfl.geom.Vector3D(this.x, this.y, this.z, this.w)
    },
    copyFrom: function(sourceVector3D) {
      this.x = sourceVector3D.x, this.y = sourceVector3D.y, this.z = sourceVector3D.z
    },
    crossProduct: function(a) {
      return new openfl.geom.Vector3D(this.y * a.z - this.z * a.y, this.z * a.x - this.x * a.z, this.x * a.y - this.y * a.x, 1)
    },
    decrementBy: function(a) {
      this.x -= a.x, this.y -= a.y, this.z -= a.z
    },
    dotProduct: function(a) {
      return this.x * a.x + this.y * a.y + this.z * a.z
    },
    equals: function(toCompare, allFour) {
      return null == allFour && (allFour = !1), this.x == toCompare.x && this.y == toCompare.y && this.z == toCompare.z && (!allFour || this.w == toCompare.w)
    },
    incrementBy: function(a) {
      this.x += a.x, this.y += a.y, this.z += a.z
    },
    nearEquals: function(toCompare, tolerance, allFour) {
      return null == allFour && (allFour = !1), Math.abs(this.x - toCompare.x) < tolerance && Math.abs(this.y - toCompare.y) < tolerance && Math.abs(this.z - toCompare.z) < tolerance && (!allFour || Math.abs(this.w - toCompare.w) < tolerance)
    },
    negate: function() {
      this.x *= -1, this.y *= -1, this.z *= -1
    },
    normalize: function() {
      var l = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
      return 0 != l && (this.x /= l, this.y /= l, this.z /= l), l
    },
    project: function() {
      this.x /= this.w, this.y /= this.w, this.z /= this.w
    },
    scaleBy: function(s) {
      this.x *= s, this.y *= s, this.z *= s
    },
    setTo: function(xa, ya, za) {
      this.x = xa, this.y = ya, this.z = za
    },
    subtract: function(a) {
      return new openfl.geom.Vector3D(this.x - a.x, this.y - a.y, this.z - a.z)
    },
    toString: function() {
      return "Vector3D(" + this.x + ", " + this.y + ", " + this.z + ")"
    },
    get_length: function() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    },
    get_lengthSquared: function() {
      return this.x * this.x + this.y * this.y + this.z * this.z
    },
    __class__: openfl.geom.Vector3D,
    __properties__: {
      get_lengthSquared: "get_lengthSquared",
      get_length: "get_length"
    }
  }, openfl.media.ID3Info = function() {}, $hxClasses["openfl.media.ID3Info"] = openfl.media.ID3Info, openfl.media.ID3Info.__name__ = ["openfl", "media", "ID3Info"], openfl.media.ID3Info.prototype = {
    album: null,
    artist: null,
    comment: null,
    genre: null,
    songName: null,
    track: null,
    year: null,
    __class__: openfl.media.ID3Info
  }, openfl.media.Sound = function(stream, context) {
    openfl.events.EventDispatcher.call(this, this), this.bytesLoaded = 0, this.bytesTotal = 0, this.id3 = null, this.isBuffering = !1, this.length = 0, this.url = null, null != stream && this.load(stream, context)
  }, $hxClasses["openfl.media.Sound"] = openfl.media.Sound, openfl.media.Sound.__name__ = ["openfl", "media", "Sound"], openfl.media.Sound.__super__ = openfl.events.EventDispatcher, openfl.media.Sound.prototype = $extend(openfl.events.EventDispatcher.prototype, {
    bytesLoaded: null,
    bytesTotal: null,
    id3: null,
    isBuffering: null,
    length: null,
    url: null,
    __buffer: null,
    __sound: null,
    __soundID: null,
    close: function() {
      openfl.media.Sound.__registeredSounds.exists(this.__soundID) && createjs.Sound.removeSound(this.__soundID)
    },
    load: function(stream) {
      this.url = stream.url, this.__soundID = haxe.io.Path.withoutExtension(stream.url), openfl.media.Sound.__registeredSounds.exists(this.__soundID) ? this.dispatchEvent(new openfl.events.Event(openfl.events.Event.COMPLETE)) : (openfl.media.Sound.__registeredSounds.set(this.__soundID, !0), createjs.Sound.addEventListener("fileload", $bind(this, this.SoundJS_onFileLoad)), createjs.Sound.registerSound(this.url, this.__soundID))
    },
    loadCompressedDataFromByteArray: function() {
      openfl.Lib.notImplemented("Sound.loadCompressedDataFromByteArray")
    },
    loadPCMFromByteArray: function(bytes, samples, format, stereo, sampleRate) {
      null == sampleRate && (sampleRate = 44100), null == stereo && (stereo = !0), openfl.Lib.notImplemented("Sound.loadPCMFromByteArray")
    },
    play: function(startTime, loops, sndTransform) {
      null == loops && (loops = 0), null == startTime && (startTime = 0), null == sndTransform && (sndTransform = new openfl.media.SoundTransform(1, 0));
      var instance = createjs.Sound.play(this.__soundID, "any", 0, 0 | startTime, loops, sndTransform.volume, sndTransform.pan);
      return new openfl.media.SoundChannel(instance)
    },
    get_id3: function() {
      return new openfl.media.ID3Info
    },
    SoundJS_onFileLoad: function(event) {
      event.id == this.__soundID && (createjs.Sound.removeEventListener("fileload", $bind(this, this.SoundJS_onFileLoad)), this.dispatchEvent(new openfl.events.Event(openfl.events.Event.COMPLETE)))
    },
    __class__: openfl.media.Sound,
    __properties__: {
      get_id3: "get_id3"
    }
  }), openfl.media.SoundChannel = function(soundInstance) {
    openfl.events.EventDispatcher.call(this, this), this.__soundInstance = soundInstance, this.__soundInstance.addEventListener("complete", $bind(this, this.soundInstance_onComplete))
  }, $hxClasses["openfl.media.SoundChannel"] = openfl.media.SoundChannel, openfl.media.SoundChannel.__name__ = ["openfl", "media", "SoundChannel"], openfl.media.SoundChannel.__super__ = openfl.events.EventDispatcher, openfl.media.SoundChannel.prototype = $extend(openfl.events.EventDispatcher.prototype, {
    leftPeak: null,
    rightPeak: null,
    __soundInstance: null,
    stop: function() {
      this.__soundInstance.stop()
    },
    __dispose: function() {
      this.__soundInstance.stop(), this.__soundInstance = null
    },
    get_position: function() {
      return this.__soundInstance.getPosition()
    },
    set_position: function(value) {
      return this.__soundInstance.setPosition(0 | value), this.__soundInstance.getPosition()
    },
    get_soundTransform: function() {
      return new openfl.media.SoundTransform(this.__soundInstance.getVolume(), this.__soundInstance.getPan())
    },
    set_soundTransform: function(value) {
      return this.__soundInstance.setVolume(value.volume), this.__soundInstance.setPan(value.pan), value
    },
    soundInstance_onComplete: function() {
      this.dispatchEvent(new openfl.events.Event(openfl.events.Event.SOUND_COMPLETE))
    },
    __class__: openfl.media.SoundChannel,
    __properties__: {
      set_soundTransform: "set_soundTransform",
      get_soundTransform: "get_soundTransform",
      set_position: "set_position",
      get_position: "get_position"
    }
  }), openfl.media.SoundLoaderContext = function(bufferTime, checkPolicyFile) {
    null == checkPolicyFile && (checkPolicyFile = !1), null == bufferTime && (bufferTime = 0), this.bufferTime = bufferTime, this.checkPolicyFile = checkPolicyFile
  }, $hxClasses["openfl.media.SoundLoaderContext"] = openfl.media.SoundLoaderContext, openfl.media.SoundLoaderContext.__name__ = ["openfl", "media", "SoundLoaderContext"], openfl.media.SoundLoaderContext.prototype = {
    bufferTime: null,
    checkPolicyFile: null,
    __class__: openfl.media.SoundLoaderContext
  }, openfl.net = {}, openfl.net.URLLoader = function(request) {
    openfl.events.EventDispatcher.call(this), this.bytesLoaded = 0, this.bytesTotal = 0, this.set_dataFormat(openfl.net.URLLoaderDataFormat.TEXT), null != request && this.load(request)
  }, $hxClasses["openfl.net.URLLoader"] = openfl.net.URLLoader, openfl.net.URLLoader.__name__ = ["openfl", "net", "URLLoader"], openfl.net.URLLoader.__super__ = openfl.events.EventDispatcher, openfl.net.URLLoader.prototype = $extend(openfl.events.EventDispatcher.prototype, {
    bytesLoaded: null,
    bytesTotal: null,
    data: null,
    dataFormat: null,
    close: function() {},
    getData: function() {
      return null
    },
    load: function(request) {
      this.requestUrl(request.url, request.method, request.data, request.formatRequestHeaders())
    },
    registerEvents: function(subject) {
      var self = this;
      "undefined" != typeof XMLHttpRequestProgressEvent && subject.addEventListener("progress", $bind(this, this.onProgress), !1), subject.onreadystatechange = function() {
        if (4 == subject.readyState) {
          var s;
          try {
            s = subject.status
          } catch (e) {
            s = null
          }
          void 0 == s && (s = null), null != s && self.onStatus(s), null != s && s >= 200 && 400 > s ? self.onData(subject.response) : null == s ? self.onError("Failed to connect or resolve host") : 12029 == s ? self.onError("Failed to connect to host") : 12007 == s ? self.onError("Unknown host") : 0 == s ? (self.onError("Unable to make request (may be blocked due to cross-domain permissions)"), self.onSecurityError("Unable to make request (may be blocked due to cross-domain permissions)")) : self.onError("Http Error #" + subject.status)
        }
      }
    },
    requestUrl: function(url, method, data, requestHeaders) {
      var xmlHttpRequest = new XMLHttpRequest;
      this.registerEvents(xmlHttpRequest);
      var uri = "";
      if (js.Boot.__instanceof(data, openfl.utils.ByteArray)) {
        var data1 = data,
          _g = this.dataFormat;
        switch (_g[1]) {
          case 0:
            uri = data1.data.buffer;
            break;
          default:
            uri = data1.readUTFBytes(data1.length)
        }
      } else if (js.Boot.__instanceof(data, openfl.net.URLVariables))
        for (var data2 = data, _g1 = 0, _g11 = Reflect.fields(data2); _g1 < _g11.length;) {
          var p = _g11[_g1];
          ++_g1, 0 != uri.length && (uri += "&"), uri += encodeURIComponent(p) + "=" + StringTools.urlEncode(Reflect.field(data2, p))
        } else null != data && (uri = data.toString());
      try {
        if ("GET" == method && null != uri && "" != uri) {
          var question = url.split("?").length <= 1;
          xmlHttpRequest.open(method, url + (question ? "?" : "&") + Std.string(uri), !0), uri = ""
        } else xmlHttpRequest.open(method, url, !0)
      } catch (e) {
        return void this.onError(e.toString())
      }
      var _g2 = this.dataFormat;
      switch (_g2[1]) {
        case 0:
          xmlHttpRequest.responseType = "arraybuffer"
      }
      for (var _g3 = 0; _g3 < requestHeaders.length;) {
        var header = requestHeaders[_g3];
        ++_g3, xmlHttpRequest.setRequestHeader(header.name, header.value)
      }
      xmlHttpRequest.send(uri), this.onOpen(), this.getData = function() {
        return null != xmlHttpRequest.response ? xmlHttpRequest.response : xmlHttpRequest.responseText
      }
    },
    onData: function() {
      var content = this.getData(),
        _g = this.dataFormat;
      switch (_g[1]) {
        case 0:
          this.data = openfl.utils.ByteArray.__ofBuffer(content);
          break;
        default:
          this.data = Std.string(content)
      }
      var evt = new openfl.events.Event(openfl.events.Event.COMPLETE);
      evt.currentTarget = this, this.dispatchEvent(evt)
    },
    onError: function(msg) {
      var evt = new openfl.events.IOErrorEvent(openfl.events.IOErrorEvent.IO_ERROR);
      evt.text = msg, evt.currentTarget = this, this.dispatchEvent(evt)
    },
    onOpen: function() {
      var evt = new openfl.events.Event(openfl.events.Event.OPEN);
      evt.currentTarget = this, this.dispatchEvent(evt)
    },
    onProgress: function(event) {
      var evt = new openfl.events.ProgressEvent(openfl.events.ProgressEvent.PROGRESS);
      evt.currentTarget = this, evt.bytesLoaded = event.loaded, evt.bytesTotal = event.total, this.dispatchEvent(evt)
    },
    onSecurityError: function(msg) {
      var evt = new openfl.events.SecurityErrorEvent(openfl.events.SecurityErrorEvent.SECURITY_ERROR);
      evt.text = msg, evt.currentTarget = this, this.dispatchEvent(evt)
    },
    onStatus: function(status) {
      var evt = new openfl.events.HTTPStatusEvent(openfl.events.HTTPStatusEvent.HTTP_STATUS, !1, !1, status);
      evt.currentTarget = this, this.dispatchEvent(evt)
    },
    set_dataFormat: function(inputVal) {
      return this.dataFormat = inputVal != openfl.net.URLLoaderDataFormat.BINARY || Reflect.hasField(window, "ArrayBuffer") ? inputVal : openfl.net.URLLoaderDataFormat.TEXT, this.dataFormat
    },
    __class__: openfl.net.URLLoader,
    __properties__: {
      set_dataFormat: "set_dataFormat"
    }
  }), openfl.net.URLLoaderDataFormat = $hxClasses["openfl.net.URLLoaderDataFormat"] = {
    __ename__: !0,
    __constructs__: ["BINARY", "TEXT", "VARIABLES"]
  }, openfl.net.URLLoaderDataFormat.BINARY = ["BINARY", 0], openfl.net.URLLoaderDataFormat.BINARY.toString = $estr, openfl.net.URLLoaderDataFormat.BINARY.__enum__ = openfl.net.URLLoaderDataFormat, openfl.net.URLLoaderDataFormat.TEXT = ["TEXT", 1], openfl.net.URLLoaderDataFormat.TEXT.toString = $estr, openfl.net.URLLoaderDataFormat.TEXT.__enum__ = openfl.net.URLLoaderDataFormat, openfl.net.URLLoaderDataFormat.VARIABLES = ["VARIABLES", 2], openfl.net.URLLoaderDataFormat.VARIABLES.toString = $estr, openfl.net.URLLoaderDataFormat.VARIABLES.__enum__ = openfl.net.URLLoaderDataFormat, openfl.net.URLLoaderDataFormat.__empty_constructs__ = [openfl.net.URLLoaderDataFormat.BINARY, openfl.net.URLLoaderDataFormat.TEXT, openfl.net.URLLoaderDataFormat.VARIABLES], openfl.net.URLRequest = function(inURL) {
    null != inURL && (this.url = inURL), this.requestHeaders = [], this.method = openfl.net.URLRequestMethod.GET, this.contentType = null
  }, $hxClasses["openfl.net.URLRequest"] = openfl.net.URLRequest, openfl.net.URLRequest.__name__ = ["openfl", "net", "URLRequest"], openfl.net.URLRequest.prototype = {
    contentType: null,
    data: null,
    method: null,
    requestHeaders: null,
    url: null,
    userAgent: null,
    formatRequestHeaders: function() {
      var res = this.requestHeaders;
      return null == res && (res = []), this.method == openfl.net.URLRequestMethod.GET || null == this.data ? res : (("string" == typeof this.data || js.Boot.__instanceof(this.data, openfl.utils.ByteArray)) && (res = res.slice(), res.push(new openfl.net.URLRequestHeader("Content-Type", null != this.contentType ? this.contentType : "application/x-www-form-urlencoded"))), res)
    },
    __class__: openfl.net.URLRequest
  }, openfl.net.URLRequestHeader = function(name, value) {
    null == value && (value = ""), null == name && (name = ""), this.name = name, this.value = value
  }, $hxClasses["openfl.net.URLRequestHeader"] = openfl.net.URLRequestHeader, openfl.net.URLRequestHeader.__name__ = ["openfl", "net", "URLRequestHeader"], openfl.net.URLRequestHeader.prototype = {
    name: null,
    value: null,
    __class__: openfl.net.URLRequestHeader
  }, openfl.net.URLRequestMethod = function() {}, $hxClasses["openfl.net.URLRequestMethod"] = openfl.net.URLRequestMethod, openfl.net.URLRequestMethod.__name__ = ["openfl", "net", "URLRequestMethod"], openfl.net.URLVariables = function(inEncoded) {
    null != inEncoded && this.decode(inEncoded)
  }, $hxClasses["openfl.net.URLVariables"] = openfl.net.URLVariables, openfl.net.URLVariables.__name__ = ["openfl", "net", "URLVariables"], openfl.net.URLVariables.prototype = {
    decode: function(inVars) {
      for (var fields = Reflect.fields(this), _g = 0; _g < fields.length;) {
        var f = fields[_g];
        ++_g, Reflect.deleteField(this, f)
      }
      for (var fields1 = inVars.split(";").join("&").split("&"), _g1 = 0; _g1 < fields1.length;) {
        var f1 = fields1[_g1];
        ++_g1;
        var eq = f1.indexOf("=");
        eq > 0 ? Reflect.setField(this, StringTools.urlDecode(HxOverrides.substr(f1, 0, eq)), StringTools.urlDecode(HxOverrides.substr(f1, eq + 1, null))) : 0 != eq && Reflect.setField(this, decodeURIComponent(f1.split("+").join(" ")), "")
      }
    },
    toString: function() {
      for (var result = new Array, fields = Reflect.fields(this), _g = 0; _g < fields.length;) {
        var f = fields[_g];
        ++_g, result.push(encodeURIComponent(f) + "=" + StringTools.urlEncode(Reflect.field(this, f)))
      }
      return result.join("&")
    },
    __class__: openfl.net.URLVariables
  }, openfl.system = {}, openfl.system.ApplicationDomain = function(parentDomain) {
    this.parentDomain = null != parentDomain ? parentDomain : openfl.system.ApplicationDomain.currentDomain
  }, $hxClasses["openfl.system.ApplicationDomain"] = openfl.system.ApplicationDomain, openfl.system.ApplicationDomain.__name__ = ["openfl", "system", "ApplicationDomain"], openfl.system.ApplicationDomain.prototype = {
    parentDomain: null,
    getDefinition: function(name) {
      return Type.resolveClass(name)
    },
    hasDefinition: function(name) {
      return null != Type.resolveClass(name)
    },
    __class__: openfl.system.ApplicationDomain
  }, openfl.system.LoaderContext = function(checkPolicyFile, applicationDomain, securityDomain) {
    null == checkPolicyFile && (checkPolicyFile = !1), this.checkPolicyFile = checkPolicyFile, this.securityDomain = securityDomain, this.applicationDomain = applicationDomain, this.allowCodeImport = !0, this.allowLoadBytesCodeExecution = !0
  }, $hxClasses["openfl.system.LoaderContext"] = openfl.system.LoaderContext, openfl.system.LoaderContext.__name__ = ["openfl", "system", "LoaderContext"], openfl.system.LoaderContext.prototype = {
    allowCodeImport: null,
    allowLoadBytesCodeExecution: null,
    applicationDomain: null,
    checkPolicyFile: null,
    securityDomain: null,
    __class__: openfl.system.LoaderContext
  }, openfl.system.SecurityDomain = function() {}, $hxClasses["openfl.system.SecurityDomain"] = openfl.system.SecurityDomain, openfl.system.SecurityDomain.__name__ = ["openfl", "system", "SecurityDomain"], openfl.system.SecurityDomain.prototype = {
    __class__: openfl.system.SecurityDomain
  }, openfl.system.System = function() {}, $hxClasses["openfl.system.System"] = openfl.system.System, openfl.system.System.__name__ = ["openfl", "system", "System"], openfl.system.System.__properties__ = {
    get_vmVersion: "get_vmVersion",
    get_totalMemory: "get_totalMemory"
  }, openfl.system.System.totalMemory = null, openfl.system.System.vmVersion = null, openfl.system.System.exit = function() {
    throw "System.exit is currently not supported for HTML5"
  }, openfl.system.System.gc = function() {}, openfl.system.System.pause = function() {
    throw "System.pause is currently not supported for HTML5"
  }, openfl.system.System.resume = function() {
    throw "System.resume is currently not supported for HTML5"
  }, openfl.system.System.setClipboard = function() {
    throw "System.setClipboard is currently not supported for HTML5"
  }, openfl.system.System.get_totalMemory = function() {
    return 0
  }, openfl.system.System.get_vmVersion = function() {
    return "1.0.0"
  }, openfl.text.FontStyle = $hxClasses["openfl.text.FontStyle"] = {
    __ename__: !0,
    __constructs__: ["REGULAR", "ITALIC", "BOLD_ITALIC", "BOLD"]
  }, openfl.text.FontStyle.REGULAR = ["REGULAR", 0], openfl.text.FontStyle.REGULAR.toString = $estr, openfl.text.FontStyle.REGULAR.__enum__ = openfl.text.FontStyle, openfl.text.FontStyle.ITALIC = ["ITALIC", 1], openfl.text.FontStyle.ITALIC.toString = $estr, openfl.text.FontStyle.ITALIC.__enum__ = openfl.text.FontStyle, openfl.text.FontStyle.BOLD_ITALIC = ["BOLD_ITALIC", 2], openfl.text.FontStyle.BOLD_ITALIC.toString = $estr, openfl.text.FontStyle.BOLD_ITALIC.__enum__ = openfl.text.FontStyle, openfl.text.FontStyle.BOLD = ["BOLD", 3], openfl.text.FontStyle.BOLD.toString = $estr, openfl.text.FontStyle.BOLD.__enum__ = openfl.text.FontStyle, openfl.text.FontStyle.__empty_constructs__ = [openfl.text.FontStyle.REGULAR, openfl.text.FontStyle.ITALIC, openfl.text.FontStyle.BOLD_ITALIC, openfl.text.FontStyle.BOLD], openfl.text.FontType = $hxClasses["openfl.text.FontType"] = {
    __ename__: !0,
    __constructs__: ["DEVICE", "EMBEDDED", "EMBEDDED_CFF"]
  }, openfl.text.FontType.DEVICE = ["DEVICE", 0], openfl.text.FontType.DEVICE.toString = $estr, openfl.text.FontType.DEVICE.__enum__ = openfl.text.FontType, openfl.text.FontType.EMBEDDED = ["EMBEDDED", 1], openfl.text.FontType.EMBEDDED.toString = $estr, openfl.text.FontType.EMBEDDED.__enum__ = openfl.text.FontType, openfl.text.FontType.EMBEDDED_CFF = ["EMBEDDED_CFF", 2], openfl.text.FontType.EMBEDDED_CFF.toString = $estr, openfl.text.FontType.EMBEDDED_CFF.__enum__ = openfl.text.FontType, openfl.text.FontType.__empty_constructs__ = [openfl.text.FontType.DEVICE, openfl.text.FontType.EMBEDDED, openfl.text.FontType.EMBEDDED_CFF], openfl.text.GridFitType = $hxClasses["openfl.text.GridFitType"] = {
    __ename__: !0,
    __constructs__: ["NONE", "PIXEL", "SUBPIXEL"]
  }, openfl.text.GridFitType.NONE = ["NONE", 0], openfl.text.GridFitType.NONE.toString = $estr, openfl.text.GridFitType.NONE.__enum__ = openfl.text.GridFitType, openfl.text.GridFitType.PIXEL = ["PIXEL", 1], openfl.text.GridFitType.PIXEL.toString = $estr, openfl.text.GridFitType.PIXEL.__enum__ = openfl.text.GridFitType, openfl.text.GridFitType.SUBPIXEL = ["SUBPIXEL", 2], openfl.text.GridFitType.SUBPIXEL.toString = $estr, openfl.text.GridFitType.SUBPIXEL.__enum__ = openfl.text.GridFitType, openfl.text.GridFitType.__empty_constructs__ = [openfl.text.GridFitType.NONE, openfl.text.GridFitType.PIXEL, openfl.text.GridFitType.SUBPIXEL], openfl.text.TextField = function() {
    openfl.display.InteractiveObject.call(this), this.__width = 100, this.__height = 100, this.__text = "", this.set_type(openfl.text.TextFieldType.DYNAMIC), this.set_autoSize(openfl.text.TextFieldAutoSize.NONE), this.displayAsPassword = !1, this.embedFonts = !1, this.selectable = !0, this.set_borderColor(0), this.set_border(!1), this.set_backgroundColor(16777215), this.set_background(!1), this.gridFitType = openfl.text.GridFitType.PIXEL, this.maxChars = 0, this.multiline = !1, this.sharpness = 0, this.scrollH = 0, this.scrollV = 1, this.set_wordWrap(!1), null == openfl.text.TextField.__defaultTextFormat && (openfl.text.TextField.__defaultTextFormat = new openfl.text.TextFormat("Times New Roman", 12, 0, !1, !1, !1, "", "", openfl.text.TextFormatAlign.LEFT, 0, 0, 0, 0), openfl.text.TextField.__defaultTextFormat.blockIndent = 0, openfl.text.TextField.__defaultTextFormat.bullet = !1, openfl.text.TextField.__defaultTextFormat.letterSpacing = 0, openfl.text.TextField.__defaultTextFormat.kerning = !1), this.__textFormat = openfl.text.TextField.__defaultTextFormat.clone()
  }, $hxClasses["openfl.text.TextField"] = openfl.text.TextField, openfl.text.TextField.__name__ = ["openfl", "text", "TextField"], openfl.text.TextField.__defaultTextFormat = null, openfl.text.TextField.__super__ = openfl.display.InteractiveObject, openfl.text.TextField.prototype = $extend(openfl.display.InteractiveObject.prototype, {
    antiAliasType: null,
    autoSize: null,
    background: null,
    backgroundColor: null,
    border: null,
    borderColor: null,
    bottomScrollV: null,
    caretIndex: null,
    caretPos: null,
    displayAsPassword: null,
    embedFonts: null,
    gridFitType: null,
    length: null,
    maxChars: null,
    maxScrollH: null,
    maxScrollV: null,
    multiline: null,
    numLines: null,
    restrict: null,
    scrollH: null,
    scrollV: null,
    selectable: null,
    selectionBeginIndex: null,
    selectionEndIndex: null,
    sharpness: null,
    textHeight: null,
    textWidth: null,
    type: null,
    wordWrap: null,
    __canvas: null,
    __context: null,
    __dirty: null,
    __div: null,
    __height: null,
    __isHTML: null,
    __measuredHeight: null,
    __measuredWidth: null,
    __ranges: null,
    __text: null,
    __textFormat: null,
    __width: null,
    appendText: function(text) {
      var _g = this;
      _g.set_text(_g.get_text() + text)
    },
    getCharBoundaries: function() {
      return openfl.Lib.notImplemented("TextField.getCharBoundaries"), null
    },
    getCharIndexAtPoint: function() {
      return openfl.Lib.notImplemented("TextField.getCharIndexAtPoint"), 0
    },
    getLineIndexAtPoint: function() {
      return openfl.Lib.notImplemented("TextField.getLineIndexAtPoint"), 0
    },
    getLineMetrics: function() {
      return openfl.Lib.notImplemented("TextField.getLineMetrics"), null
    },
    getLineOffset: function() {
      return openfl.Lib.notImplemented("TextField.getLineOffset"), 0
    },
    getLineText: function() {
      return openfl.Lib.notImplemented("TextField.getLineText"), ""
    },
    getTextFormat: function(beginIndex, endIndex) {
      return null == endIndex && (endIndex = 0), null == beginIndex && (beginIndex = 0), this.__textFormat.clone()
    },
    setSelection: function() {
      openfl.Lib.notImplemented("TextField.setSelection")
    },
    setTextFormat: function(format, beginIndex, endIndex) {
      null == endIndex && (endIndex = 0), null == beginIndex && (beginIndex = 0), null != format.font && (this.__textFormat.font = format.font), null != format.size && (this.__textFormat.size = format.size), null != format.color && (this.__textFormat.color = format.color), null != format.bold && (this.__textFormat.bold = format.bold), null != format.italic && (this.__textFormat.italic = format.italic), null != format.underline && (this.__textFormat.underline = format.underline), null != format.url && (this.__textFormat.url = format.url), null != format.target && (this.__textFormat.target = format.target), null != format.align && (this.__textFormat.align = format.align), null != format.leftMargin && (this.__textFormat.leftMargin = format.leftMargin), null != format.rightMargin && (this.__textFormat.rightMargin = format.rightMargin), null != format.indent && (this.__textFormat.indent = format.indent), null != format.leading && (this.__textFormat.leading = format.leading), null != format.blockIndent && (this.__textFormat.blockIndent = format.blockIndent), null != format.bullet && (this.__textFormat.bullet = format.bullet), null != format.kerning && (this.__textFormat.kerning = format.kerning), null != format.letterSpacing && (this.__textFormat.letterSpacing = format.letterSpacing), null != format.tabStops && (this.__textFormat.tabStops = format.tabStops), this.__dirty = !0
    },
    __getBounds: function(rect) {
      var bounds = new openfl.geom.Rectangle(0, 0, this.__width, this.__height);
      bounds.transform(this.__worldTransform), rect.__expand(bounds.x, bounds.y, bounds.width, bounds.height)
    },
    __getFont: function(format) {
      var font;
      return font = format.italic ? "italic " : "normal ", font += "normal ", font += format.bold ? "bold " : "normal ", font += format.size + "px", font += "/" + (format.size + format.leading + 4) + "px ", font += "'" + function($this) {
        var $r, _g = format.font;
        return $r = function() {
          var $r;
          switch (_g) {
            case "_sans":
              $r = "sans-serif";
              break;
            case "_serif":
              $r = "serif";
              break;
            case "_typewriter":
              $r = "monospace";
              break;
            default:
              $r = format.font
          }
          return $r
        }($this)
      }(this), font += "'"
    },
    __hitTest: function(x, y, shapeFlag, stack, interactiveOnly) {
      if (!this.get_visible() || interactiveOnly && !this.mouseEnabled) return !1;
      var point = this.globalToLocal(new openfl.geom.Point(x, y));
      return point.x > 0 && point.y > 0 && point.x <= this.__width && point.y <= this.__height ? (null != stack && stack.push(this), !0) : !1
    },
    __measureText: function() {
      if (null == this.__ranges) return this.__context.font = this.__getFont(this.__textFormat), [this.__context.measureText(this.__text).width];
      for (var measurements = [], _g = 0, _g1 = this.__ranges; _g < _g1.length;) {
        var range = _g1[_g];
        ++_g, this.__context.font = this.__getFont(range.format), measurements.push(this.__context.measureText(this.get_text().substring(range.start, range.end)).width)
      }
      return measurements
    },
    __measureTextWithDOM: function() {
      var div = this.__div;
      null == this.__div && (div = window.document.createElement("div"), div.innerHTML = this.__text, div.style.setProperty("font", this.__getFont(this.__textFormat), null), div.style.position = "absolute", div.style.top = "110%", window.document.body.appendChild(div)), this.__measuredWidth = div.clientWidth, null == this.__div && (div.style.width = Std.string(this.__width) + "px"), this.__measuredHeight = div.clientHeight, null == this.__div && window.document.body.removeChild(div)
    },
    __renderCanvas: function(renderSession) {
      if (this.__renderable && !(this.__worldAlpha <= 0)) {
        if (this.__dirty) {
          if ((null == this.__text || "" == this.__text) && !this.background && !this.border || (this.get_width() <= 0 || this.get_height() <= 0) && this.autoSize != openfl.text.TextFieldAutoSize.LEFT) this.__canvas = null, this.__context = null;
          else if (null == this.__canvas && (this.__canvas = window.document.createElement("canvas"), this.__context = this.__canvas.getContext("2d")), null != this.__text && "" != this.__text) {
            for (var measurements = this.__measureText(), textWidth = 0, _g = 0; _g < measurements.length;) {
              var measurement = measurements[_g];
              ++_g, textWidth += measurement
            }
            if (this.autoSize == openfl.text.TextFieldAutoSize.LEFT && (this.__width = textWidth + 4), this.__canvas.width = Math.ceil(this.__width), this.__canvas.height = Math.ceil(this.__height), (this.border || this.background) && (this.__context.rect(.5, .5, this.__width - 1, this.__height - 1), this.background && (this.__context.fillStyle = "#" + StringTools.hex(this.backgroundColor, 6), this.__context.fill()), this.border && (this.__context.lineWidth = 1, this.__context.strokeStyle = "#" + StringTools.hex(this.borderColor, 6), this.__context.stroke())), null == this.__ranges) this.__renderText(this.get_text(), this.__textFormat, 0);
            else
              for (var range, offsetX = 0, _g1 = 0, _g2 = this.__ranges.length; _g2 > _g1;) {
                var i = _g1++;
                range = this.__ranges[i], this.__renderText(this.get_text().substring(range.start, range.end), range.format, offsetX), offsetX += measurements[i]
              }
          } else this.autoSize == openfl.text.TextFieldAutoSize.LEFT && (this.__width = 4), this.__canvas.width = Math.ceil(this.__width), this.__canvas.height = Math.ceil(this.__height), (this.border || this.background) && (this.border ? this.__context.rect(.5, .5, this.__width - 1, this.__height - 1) : this.__context.rect(0, 0, this.__width, this.__height), this.background && (this.__context.fillStyle = "#" + StringTools.hex(this.backgroundColor, 6), this.__context.fill()), this.border && (this.__context.lineWidth = 1, this.__context.lineCap = "square", this.__context.strokeStyle = "#" + StringTools.hex(this.borderColor, 6), this.__context.stroke()));
          this.__dirty = !1
        }
        if (null != this.__canvas) {
          var context = renderSession.context;
          context.globalAlpha = this.__worldAlpha;
          var transform = this.__worldTransform;
          renderSession.roundPixels ? context.setTransform(transform.a, transform.b, transform.c, transform.d, 0 | transform.tx, 0 | transform.ty) : context.setTransform(transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty), null == this.get_scrollRect() ? context.drawImage(this.__canvas, 0, 0) : context.drawImage(this.__canvas, this.get_scrollRect().x, this.get_scrollRect().y, this.get_scrollRect().width, this.get_scrollRect().height, this.get_scrollRect().x, this.get_scrollRect().y, this.get_scrollRect().width, this.get_scrollRect().height)
        }
      }
    },
    __renderDOM: function(renderSession) {
      if (null != this.stage && this.__worldVisible && this.__renderable) {
        if (this.__dirty || null == this.__div)
          if ("" != this.__text || this.background || this.border) {
            null == this.__div && (this.__div = window.document.createElement("div"), this.__initializeElement(this.__div, renderSession), this.__style.setProperty("cursor", "inherit", null)), this.__div.innerHTML = this.__text, this.background ? this.__style.setProperty("background-color", "#" + StringTools.hex(this.backgroundColor, 6), null) : this.__style.removeProperty("background-color"), this.border ? this.__style.setProperty("border", "solid 1px #" + StringTools.hex(this.borderColor, 6), null) : this.__style.removeProperty("border"), this.__style.setProperty("font", this.__getFont(this.__textFormat), null), this.__style.setProperty("color", "#" + StringTools.hex(this.__textFormat.color, 6), null), this.autoSize != openfl.text.TextFieldAutoSize.NONE ? this.__style.setProperty("width", "auto", null) : this.__style.setProperty("width", this.__width + "px", null), this.__style.setProperty("height", this.__height + "px", null);
            var _g = this.__textFormat.align;
            switch (_g[1]) {
              case 3:
                this.__style.setProperty("text-align", "center", null);
                break;
              case 1:
                this.__style.setProperty("text-align", "right", null);
                break;
              default:
                this.__style.setProperty("text-align", "left", null)
            }
            this.__dirty = !1
          } else null != this.__div && (renderSession.element.removeChild(this.__div), this.__div = null);
        null != this.__div && this.__applyStyle(renderSession, !0, !0, !1)
      } else null != this.__div && (renderSession.element.removeChild(this.__div), this.__div = null, this.__style = null)
    },
    __renderText: function(text, format, offsetX) {
      this.__context.font = this.__getFont(format), this.__context.textBaseline = "top", this.__context.fillStyle = "#" + StringTools.hex(format.color, 6);
      for (var lines = text.split("\n"), yOffset = 0, _g = 0; _g < lines.length;) {
        var line = lines[_g];
        ++_g;
        var _g1 = format.align;
        switch (_g1[1]) {
          case 3:
            this.__context.textAlign = "center", this.__context.fillText(line, this.__width / 2, 2 + yOffset, this.__width - 4);
            break;
          case 1:
            this.__context.textAlign = "end", this.__context.fillText(line, this.__width - 2, 2 + yOffset, this.__width - 4);
            break;
          default:
            this.__context.textAlign = "start", this.__context.fillText(line, 2 + offsetX, 2 + yOffset, this.__width - 4)
        }
        yOffset += this.get_textHeight()
      }
    },
    set_autoSize: function(value) {
      return value != this.autoSize && (this.__dirty = !0), this.autoSize = value
    },
    set_background: function(value) {
      return value != this.background && (this.__dirty = !0), this.background = value
    },
    set_backgroundColor: function(value) {
      return value != this.backgroundColor && (this.__dirty = !0), this.backgroundColor = value
    },
    set_border: function(value) {
      return value != this.border && (this.__dirty = !0), this.border = value
    },
    set_borderColor: function(value) {
      return value != this.borderColor && (this.__dirty = !0), this.borderColor = value
    },
    get_bottomScrollV: function() {
      return this.get_numLines()
    },
    get_caretPos: function() {
      return 0
    },
    get_defaultTextFormat: function() {
      return this.__textFormat.clone()
    },
    set_defaultTextFormat: function(value) {
      return this.__textFormat.__merge(value), value
    },
    get_height: function() {
      return this.__height * this.get_scaleY()
    },
    set_height: function(value) {
      return (1 != this.get_scaleY() || value != this.__height) && (this.__transformDirty || (this.__transformDirty = !0, openfl.display.DisplayObject.__worldTransformDirty++), this.__dirty = !0), this.set_scaleY(1), this.__height = value
    },
    get_htmlText: function() {
      return this.__text
    },
    set_htmlText: function(value) {
      if (this.__isHTML && this.__text == value || (this.__dirty = !0), this.__ranges = null, this.__isHTML = !0, null == this.__div) {
        value = new EReg("<br>", "g").replace(value, "\n"), value = new EReg("<br/>", "g").replace(value, "\n");
        var segments = value.split("<font");
        if (1 == segments.length) return value = new EReg("<.*?>", "g").replace(value, ""), this.__text = value;
        value = "", this.__ranges = [];
        for (var _g = 0; _g < segments.length;) {
          var segment = segments[_g];
          if (++_g, "" != segment) {
            var closeFontIndex = segment.indexOf("</font>");
            if (closeFontIndex > -1) {
              var start = segment.indexOf(">") + 1,
                end = closeFontIndex,
                format = this.__textFormat.clone(),
                faceIndex = segment.indexOf("face="),
                colorIndex = segment.indexOf("color="),
                sizeIndex = segment.indexOf("size=");
              if (faceIndex > -1 && start > faceIndex) {
                var len = segment.indexOf('"', faceIndex);
                format.font = HxOverrides.substr(segment, faceIndex + 6, len)
              }
              colorIndex > -1 && start > colorIndex && (format.color = Std.parseInt("0x" + HxOverrides.substr(segment, colorIndex + 8, 6))), sizeIndex > -1 && start > sizeIndex && (format.size = Std.parseInt(function() {
                var $r, len1 = segment.indexOf('"', sizeIndex);
                return $r = HxOverrides.substr(segment, sizeIndex + 6, len1)
              }(this)));
              var sub = segment.substring(start, end);
              sub = new EReg("<.*?>", "g").replace(sub, ""), this.__ranges.push(new openfl.text.TextFormatRange(format, value.length, value.length + sub.length)), value += sub, closeFontIndex + 7 < segment.length && (sub = HxOverrides.substr(segment, closeFontIndex + 7, null), this.__ranges.push(new openfl.text.TextFormatRange(this.__textFormat, value.length, value.length + sub.length)), value += sub)
            } else this.__ranges.push(new openfl.text.TextFormatRange(this.__textFormat, value.length, value.length + segment.length)), value += segment
          }
        }
      }
      return this.__text = value
    },
    get_maxScrollH: function() {
      return 0
    },
    get_maxScrollV: function() {
      return 1
    },
    get_numLines: function() {
      if ("" != this.get_text() && null != this.get_text()) {
        var count = this.get_text().split("\n").length;
        return this.__isHTML && (count += this.get_text().split("<br>").length - 1), count
      }
      return 1
    },
    get_text: function() {
      return this.__isHTML, this.__text
    },
    set_text: function(value) {
      return (this.__isHTML || this.__text != value) && (this.__dirty = !0), this.__ranges = null, this.__isHTML = !1, this.__text = value
    },
    get_textColor: function() {
      return this.__textFormat.color
    },
    set_textColor: function(value) {
      if (value != this.__textFormat.color && (this.__dirty = !0), null != this.__ranges)
        for (var _g = 0, _g1 = this.__ranges; _g < _g1.length;) {
          var range = _g1[_g];
          ++_g, range.format.color = value
        }
      return this.__textFormat.color = value
    },
    get_textWidth: function() {
      if (null != this.__canvas) {
        for (var sizes = this.__measureText(), total = 0, _g = 0; _g < sizes.length;) {
          var size = sizes[_g];
          ++_g, total += size
        }
        return total
      }
      return null != this.__div ? this.__div.clientWidth : (this.__measureTextWithDOM(), this.__measuredWidth)
    },
    get_textHeight: function() {
      return null != this.__canvas ? 1.185 * this.__textFormat.size : null != this.__div ? this.__div.clientHeight : (this.__measureTextWithDOM(), this.__measuredHeight + .185 * this.__textFormat.size)
    },
    set_type: function(value) {
      return this.type = value
    },
    get_width: function() {
      return this.autoSize == openfl.text.TextFieldAutoSize.LEFT ? (this.get_textWidth() + 4) * this.get_scaleX() : this.__width * this.get_scaleX()
    },
    set_width: function(value) {
      return (1 != this.get_scaleX() || this.__width != value) && (this.__transformDirty || (this.__transformDirty = !0, openfl.display.DisplayObject.__worldTransformDirty++), this.__dirty = !0), this.set_scaleX(1), this.__width = value
    },
    get_wordWrap: function() {
      return this.wordWrap
    },
    set_wordWrap: function(value) {
      return this.wordWrap = value
    },
    __class__: openfl.text.TextField,
    __properties__: $extend(openfl.display.InteractiveObject.prototype.__properties__, {
      set_wordWrap: "set_wordWrap",
      get_wordWrap: "get_wordWrap",
      set_type: "set_type",
      get_textWidth: "get_textWidth",
      get_textHeight: "get_textHeight",
      set_textColor: "set_textColor",
      get_textColor: "get_textColor",
      set_text: "set_text",
      get_text: "get_text",
      get_numLines: "get_numLines",
      get_maxScrollV: "get_maxScrollV",
      get_maxScrollH: "get_maxScrollH",
      set_htmlText: "set_htmlText",
      get_htmlText: "get_htmlText",
      set_defaultTextFormat: "set_defaultTextFormat",
      get_defaultTextFormat: "get_defaultTextFormat",
      get_caretPos: "get_caretPos",
      get_bottomScrollV: "get_bottomScrollV",
      set_borderColor: "set_borderColor",
      set_border: "set_border",
      set_backgroundColor: "set_backgroundColor",
      set_background: "set_background",
      set_autoSize: "set_autoSize"
    })
  }), openfl.text.TextFormatRange = function(format, start, end) {
    this.format = format, this.start = start, this.end = end
  }, $hxClasses["openfl.text.TextFormatRange"] = openfl.text.TextFormatRange, openfl.text.TextFormatRange.__name__ = ["openfl", "text", "TextFormatRange"], openfl.text.TextFormatRange.prototype = {
    end: null,
    format: null,
    start: null,
    __class__: openfl.text.TextFormatRange
  }, openfl.text.TextFieldAutoSize = $hxClasses["openfl.text.TextFieldAutoSize"] = {
    __ename__: !0,
    __constructs__: ["CENTER", "LEFT", "NONE", "RIGHT"]
  }, openfl.text.TextFieldAutoSize.CENTER = ["CENTER", 0], openfl.text.TextFieldAutoSize.CENTER.toString = $estr, openfl.text.TextFieldAutoSize.CENTER.__enum__ = openfl.text.TextFieldAutoSize, openfl.text.TextFieldAutoSize.LEFT = ["LEFT", 1], openfl.text.TextFieldAutoSize.LEFT.toString = $estr, openfl.text.TextFieldAutoSize.LEFT.__enum__ = openfl.text.TextFieldAutoSize, openfl.text.TextFieldAutoSize.NONE = ["NONE", 2], openfl.text.TextFieldAutoSize.NONE.toString = $estr, openfl.text.TextFieldAutoSize.NONE.__enum__ = openfl.text.TextFieldAutoSize, openfl.text.TextFieldAutoSize.RIGHT = ["RIGHT", 3], openfl.text.TextFieldAutoSize.RIGHT.toString = $estr, openfl.text.TextFieldAutoSize.RIGHT.__enum__ = openfl.text.TextFieldAutoSize, openfl.text.TextFieldAutoSize.__empty_constructs__ = [openfl.text.TextFieldAutoSize.CENTER, openfl.text.TextFieldAutoSize.LEFT, openfl.text.TextFieldAutoSize.NONE, openfl.text.TextFieldAutoSize.RIGHT], openfl.text.TextFieldType = $hxClasses["openfl.text.TextFieldType"] = {
    __ename__: !0,
    __constructs__: ["DYNAMIC", "INPUT"]
  }, openfl.text.TextFieldType.DYNAMIC = ["DYNAMIC", 0], openfl.text.TextFieldType.DYNAMIC.toString = $estr, openfl.text.TextFieldType.DYNAMIC.__enum__ = openfl.text.TextFieldType, openfl.text.TextFieldType.INPUT = ["INPUT", 1], openfl.text.TextFieldType.INPUT.toString = $estr, openfl.text.TextFieldType.INPUT.__enum__ = openfl.text.TextFieldType, openfl.text.TextFieldType.__empty_constructs__ = [openfl.text.TextFieldType.DYNAMIC, openfl.text.TextFieldType.INPUT], openfl.text.TextFormat = function(font, size, color, bold, italic, underline, url, target, align, leftMargin, rightMargin, indent, leading) {
    this.font = font, this.size = size, this.color = color, this.bold = bold, this.italic = italic, this.underline = underline, this.url = url, this.target = target, this.align = align, this.leftMargin = leftMargin, this.rightMargin = rightMargin, this.indent = indent, this.leading = leading
  }, $hxClasses["openfl.text.TextFormat"] = openfl.text.TextFormat, openfl.text.TextFormat.__name__ = ["openfl", "text", "TextFormat"], openfl.text.TextFormat.prototype = {
    align: null,
    blockIndent: null,
    bold: null,
    bullet: null,
    color: null,
    font: null,
    indent: null,
    italic: null,
    kerning: null,
    leading: null,
    leftMargin: null,
    letterSpacing: null,
    rightMargin: null,
    size: null,
    tabStops: null,
    target: null,
    underline: null,
    url: null,
    clone: function() {
      var newFormat = new openfl.text.TextFormat(this.font, this.size, this.color, this.bold, this.italic, this.underline, this.url, this.target);
      return newFormat.align = this.align, newFormat.leftMargin = this.leftMargin, newFormat.rightMargin = this.rightMargin, newFormat.indent = this.indent, newFormat.leading = this.leading, newFormat.blockIndent = this.blockIndent, newFormat.bullet = this.bullet, newFormat.kerning = this.kerning, newFormat.letterSpacing = this.letterSpacing, newFormat.tabStops = this.tabStops, newFormat
    },
    __merge: function(format) {
      null != format.font && (this.font = format.font), null != format.size && (this.size = format.size), null != format.color && (this.color = format.color), null != format.bold && (this.bold = format.bold), null != format.italic && (this.italic = format.italic), null != format.underline && (this.underline = format.underline), null != format.url && (this.url = format.url), null != format.target && (this.target = format.target), null != format.align && (this.align = format.align), null != format.leftMargin && (this.leftMargin = format.leftMargin), null != format.rightMargin && (this.rightMargin = format.rightMargin), null != format.indent && (this.indent = format.indent), null != format.leading && (this.leading = format.leading), null != format.blockIndent && (this.blockIndent = format.blockIndent), null != format.bullet && (this.bullet = format.bullet), null != format.kerning && (this.kerning = format.kerning), null != format.letterSpacing && (this.letterSpacing = format.letterSpacing), null != format.tabStops && (this.tabStops = format.tabStops)
    },
    __class__: openfl.text.TextFormat
  }, openfl.text.TextFormatAlign = $hxClasses["openfl.text.TextFormatAlign"] = {
    __ename__: !0,
    __constructs__: ["LEFT", "RIGHT", "JUSTIFY", "CENTER"]
  }, openfl.text.TextFormatAlign.LEFT = ["LEFT", 0], openfl.text.TextFormatAlign.LEFT.toString = $estr, openfl.text.TextFormatAlign.LEFT.__enum__ = openfl.text.TextFormatAlign, openfl.text.TextFormatAlign.RIGHT = ["RIGHT", 1], openfl.text.TextFormatAlign.RIGHT.toString = $estr, openfl.text.TextFormatAlign.RIGHT.__enum__ = openfl.text.TextFormatAlign, openfl.text.TextFormatAlign.JUSTIFY = ["JUSTIFY", 2], openfl.text.TextFormatAlign.JUSTIFY.toString = $estr, openfl.text.TextFormatAlign.JUSTIFY.__enum__ = openfl.text.TextFormatAlign, openfl.text.TextFormatAlign.CENTER = ["CENTER", 3], openfl.text.TextFormatAlign.CENTER.toString = $estr, openfl.text.TextFormatAlign.CENTER.__enum__ = openfl.text.TextFormatAlign, openfl.text.TextFormatAlign.__empty_constructs__ = [openfl.text.TextFormatAlign.LEFT, openfl.text.TextFormatAlign.RIGHT, openfl.text.TextFormatAlign.JUSTIFY, openfl.text.TextFormatAlign.CENTER], openfl.text.TextLineMetrics = function(x, width, height, ascent, descent, leading) {
    this.x = x, this.width = width, this.height = height, this.ascent = ascent, this.descent = descent, this.leading = leading
  }, $hxClasses["openfl.text.TextLineMetrics"] = openfl.text.TextLineMetrics, openfl.text.TextLineMetrics.__name__ = ["openfl", "text", "TextLineMetrics"], openfl.text.TextLineMetrics.prototype = {
    ascent: null,
    descent: null,
    height: null,
    leading: null,
    width: null,
    x: null,
    __class__: openfl.text.TextLineMetrics
  }, openfl.ui = {}, openfl.ui.Keyboard = function() {}, $hxClasses["openfl.ui.Keyboard"] = openfl.ui.Keyboard, openfl.ui.Keyboard.__name__ = ["openfl", "ui", "Keyboard"], openfl.ui.Keyboard.capsLock = null, openfl.ui.Keyboard.numLock = null, openfl.ui.Keyboard.isAccessible = function() {
    return !1
  }, openfl.ui.Keyboard.__convertMozillaCode = function(code) {
    switch (code) {
      case 8:
        return 8;
      case 9:
        return 9;
      case 13:
        return 13;
      case 14:
        return 13;
      case 16:
        return 16;
      case 17:
        return 17;
      case 20:
        return 20;
      case 27:
        return 27;
      case 32:
        return 32;
      case 33:
        return 33;
      case 34:
        return 34;
      case 35:
        return 35;
      case 36:
        return 36;
      case 37:
        return 37;
      case 39:
        return 39;
      case 38:
        return 38;
      case 40:
        return 40;
      case 45:
        return 45;
      case 46:
        return 46;
      case 144:
        return 144;
      default:
        return code
    }
  }, openfl.ui.Keyboard.__convertWebkitCode = function(code) {
    var _g = code.toLowerCase();
    switch (_g) {
      case "backspace":
        return 8;
      case "tab":
        return 9;
      case "enter":
        return 13;
      case "shift":
        return 16;
      case "control":
        return 17;
      case "capslock":
        return 20;
      case "escape":
        return 27;
      case "space":
        return 32;
      case "pageup":
        return 33;
      case "pagedown":
        return 34;
      case "end":
        return 35;
      case "home":
        return 36;
      case "left":
        return 37;
      case "right":
        return 39;
      case "up":
        return 38;
      case "down":
        return 40;
      case "insert":
        return 45;
      case "delete":
        return 46;
      case "numlock":
        return 144;
      case "break":
        return 19
    }
    if (0 == code.indexOf("U+")) return Std.parseInt("0x" + HxOverrides.substr(code, 3, null));
    throw "Unrecognized key code: " + code
  }, openfl.ui.Multitouch = function() {}, $hxClasses["openfl.ui.Multitouch"] = openfl.ui.Multitouch, openfl.ui.Multitouch.__name__ = ["openfl", "ui", "Multitouch"], openfl.ui.Multitouch.__properties__ = {
    get_supportsTouchEvents: "get_supportsTouchEvents",
    set_inputMode: "set_inputMode",
    get_inputMode: "get_inputMode"
  }, openfl.ui.Multitouch.maxTouchPoints = null, openfl.ui.Multitouch.supportedGestures = null, openfl.ui.Multitouch.supportsGestureEvents = null, openfl.ui.Multitouch.supportsTouchEvents = null, openfl.ui.Multitouch.get_inputMode = function() {
    return openfl.ui.MultitouchInputMode.TOUCH_POINT
  }, openfl.ui.Multitouch.set_inputMode = function(inMode) {
    return inMode == openfl.ui.MultitouchInputMode.GESTURE ? openfl.ui.Multitouch.get_inputMode() : inMode
  }, openfl.ui.Multitouch.get_supportsTouchEvents = function() {
    return "ontouchstart" in document.documentElement || window.DocumentTouch && document instanceof DocumentTouch ? !0 : !1
  }, openfl.ui.MultitouchInputMode = $hxClasses["openfl.ui.MultitouchInputMode"] = {
    __ename__: !0,
    __constructs__: ["NONE", "TOUCH_POINT", "GESTURE"]
  }, openfl.ui.MultitouchInputMode.NONE = ["NONE", 0], openfl.ui.MultitouchInputMode.NONE.toString = $estr, openfl.ui.MultitouchInputMode.NONE.__enum__ = openfl.ui.MultitouchInputMode, openfl.ui.MultitouchInputMode.TOUCH_POINT = ["TOUCH_POINT", 1], openfl.ui.MultitouchInputMode.TOUCH_POINT.toString = $estr, openfl.ui.MultitouchInputMode.TOUCH_POINT.__enum__ = openfl.ui.MultitouchInputMode, openfl.ui.MultitouchInputMode.GESTURE = ["GESTURE", 2], openfl.ui.MultitouchInputMode.GESTURE.toString = $estr, openfl.ui.MultitouchInputMode.GESTURE.__enum__ = openfl.ui.MultitouchInputMode, openfl.ui.MultitouchInputMode.__empty_constructs__ = [openfl.ui.MultitouchInputMode.NONE, openfl.ui.MultitouchInputMode.TOUCH_POINT, openfl.ui.MultitouchInputMode.GESTURE], openfl.utils = {}, openfl.utils.ByteArray = function() {
    this.littleEndian = !1, this.allocated = 0, this.position = 0, this.length = 0, this.___resizeBuffer(this.allocated)
  }, $hxClasses["openfl.utils.ByteArray"] = openfl.utils.ByteArray, openfl.utils.ByteArray.__name__ = ["openfl", "utils", "ByteArray"], openfl.utils.ByteArray.fromBytes = function(inBytes) {
    var result = new openfl.utils.ByteArray;
    return result.byteView = new Uint8Array(inBytes.b), result.set_length(result.byteView.length), result.allocated = result.length, result
  }, openfl.utils.ByteArray.__ofBuffer = function(buffer) {
    var bytes = new openfl.utils.ByteArray;
    return bytes.set_length(bytes.allocated = buffer.byteLength), bytes.data = new DataView(buffer), bytes.byteView = new Uint8Array(buffer), bytes
  }, openfl.utils.ByteArray.prototype = {
    bytesAvailable: null,
    length: null,
    objectEncoding: null,
    position: null,
    allocated: null,
    byteView: null,
    data: null,
    littleEndian: null,
    clear: function() {
      this.allocated < 0 ? this.___resizeBuffer(this.allocated = Std["int"](Math.max(0, 2 * this.allocated))) : this.allocated > 0 && this.___resizeBuffer(this.allocated = 0), this.length = 0, this.position = 0
    },
    readBoolean: function() {
      return 0 != this.readByte()
    },
    readByte: function() {
      var data = this.data;
      return data.getInt8(this.position++)
    },
    readBytes: function(bytes, offset, length) {
      if (null == length && (length = 0), null == offset && (offset = 0), 0 > offset || 0 > length) throw new openfl.errors.IOError("Read error - Out of bounds");
      0 == length && (length = this.length - this.position);
      var lengthToEnsure = offset + length;
      bytes.length < lengthToEnsure && (bytes.allocated < lengthToEnsure ? bytes.___resizeBuffer(bytes.allocated = Std["int"](Math.max(lengthToEnsure, 2 * bytes.allocated))) : bytes.allocated > lengthToEnsure && bytes.___resizeBuffer(bytes.allocated = lengthToEnsure), bytes.length = lengthToEnsure), bytes.byteView.set(this.byteView.subarray(this.position, this.position + length), offset), bytes.position = offset, this.position += length, bytes.position + length > bytes.length && bytes.set_length(bytes.position + length)
    },
    readDouble: function() {
      var $double = this.data.getFloat64(this.position, this.littleEndian);
      return this.position += 8, $double
    },
    readFloat: function() {
      var $float = this.data.getFloat32(this.position, this.littleEndian);
      return this.position += 4, $float
    },
    readFullBytes: function(bytes, pos, len) {
      this.length < len && (this.allocated < len ? this.___resizeBuffer(this.allocated = Std["int"](Math.max(len, 2 * this.allocated))) : this.allocated > len && this.___resizeBuffer(this.allocated = len), this.length = len);
      for (var _g1 = pos, _g = pos + len; _g > _g1;) {
        var i = _g1++,
          data = this.data;
        data.setInt8(this.position++, bytes.b[i])
      }
    },
    readInt: function() {
      var $int = this.data.getInt32(this.position, this.littleEndian);
      return this.position += 4, $int
    },
    readMultiByte: function(length) {
      return this.readUTFBytes(length)
    },
    readShort: function() {
      var $short = this.data.getInt16(this.position, this.littleEndian);
      return this.position += 2, $short
    },
    readUnsignedByte: function() {
      var data = this.data;
      return data.getUint8(this.position++)
    },
    readUnsignedInt: function() {
      var uInt = this.data.getUint32(this.position, this.littleEndian);
      return this.position += 4, uInt
    },
    readUnsignedShort: function() {
      var uShort = this.data.getUint16(this.position, this.littleEndian);
      return this.position += 2, uShort
    },
    readUTF: function() {
      var bytesCount = this.readUnsignedShort();
      return this.readUTFBytes(bytesCount)
    },
    readUTFBytes: function(len) {
      for (var value = "", max = this.position + len; this.position < max;) {
        var data = this.data,
          c = data.getUint8(this.position++);
        if (128 > c) {
          if (0 == c) break;
          value += String.fromCharCode(c)
        } else if (224 > c) value += String.fromCharCode((63 & c) << 6 | 127 & data.getUint8(this.position++));
        else if (240 > c) {
          var c2 = data.getUint8(this.position++);
          value += String.fromCharCode((31 & c) << 12 | (127 & c2) << 6 | 127 & data.getUint8(this.position++))
        } else {
          var c21 = data.getUint8(this.position++),
            c3 = data.getUint8(this.position++);
          value += String.fromCharCode((15 & c) << 18 | (127 & c21) << 12 | c3 << 6 & 127 | 127 & data.getUint8(this.position++))
        }
      }
      return value
    },
    toString: function() {
      var cachePosition = this.position;
      this.position = 0;
      var value = this.readUTFBytes(this.length);
      return this.position = cachePosition, value
    },
    writeBoolean: function(value) {
      this.writeByte(value ? 1 : 0)
    },
    writeByte: function(value) {
      var lengthToEnsure = this.position + 1;
      this.length < lengthToEnsure && (this.allocated < lengthToEnsure ? this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure, 2 * this.allocated))) : this.allocated > lengthToEnsure && this.___resizeBuffer(this.allocated = lengthToEnsure), this.length = lengthToEnsure);
      var data = this.data;
      data.setInt8(this.position, value), this.position += 1
    },
    writeBytes: function(bytes, offset, length) {
      if (null == length && (length = 0), null == offset && (offset = 0), 0 > offset || 0 > length) throw new openfl.errors.IOError("Write error - Out of bounds");
      0 == length && (length = bytes.length);
      var lengthToEnsure = this.position + length;
      this.length < lengthToEnsure && (this.allocated < lengthToEnsure ? this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure, 2 * this.allocated))) : this.allocated > lengthToEnsure && this.___resizeBuffer(this.allocated = lengthToEnsure), this.length = lengthToEnsure), this.byteView.set(bytes.byteView.subarray(offset, offset + length), this.position), this.position += length
    },
    writeDouble: function(x) {
      var lengthToEnsure = this.position + 8;
      this.length < lengthToEnsure && (this.allocated < lengthToEnsure ? this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure, 2 * this.allocated))) : this.allocated > lengthToEnsure && this.___resizeBuffer(this.allocated = lengthToEnsure), this.length = lengthToEnsure), this.data.setFloat64(this.position, x, this.littleEndian), this.position += 8
    },
    writeFloat: function(x) {
      var lengthToEnsure = this.position + 4;
      this.length < lengthToEnsure && (this.allocated < lengthToEnsure ? this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure, 2 * this.allocated))) : this.allocated > lengthToEnsure && this.___resizeBuffer(this.allocated = lengthToEnsure), this.length = lengthToEnsure), this.data.setFloat32(this.position, x, this.littleEndian), this.position += 4
    },
    writeInt: function(value) {
      var lengthToEnsure = this.position + 4;
      this.length < lengthToEnsure && (this.allocated < lengthToEnsure ? this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure, 2 * this.allocated))) : this.allocated > lengthToEnsure && this.___resizeBuffer(this.allocated = lengthToEnsure), this.length = lengthToEnsure), this.data.setInt32(this.position, value, this.littleEndian), this.position += 4
    },
    writeShort: function(value) {
      var lengthToEnsure = this.position + 2;
      this.length < lengthToEnsure && (this.allocated < lengthToEnsure ? this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure, 2 * this.allocated))) : this.allocated > lengthToEnsure && this.___resizeBuffer(this.allocated = lengthToEnsure), this.length = lengthToEnsure), this.data.setInt16(this.position, value, this.littleEndian), this.position += 2
    },
    writeUnsignedInt: function(value) {
      var lengthToEnsure = this.position + 4;
      this.length < lengthToEnsure && (this.allocated < lengthToEnsure ? this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure, 2 * this.allocated))) : this.allocated > lengthToEnsure && this.___resizeBuffer(this.allocated = lengthToEnsure), this.length = lengthToEnsure), this.data.setUint32(this.position, value, this.littleEndian), this.position += 4
    },
    writeUnsignedShort: function(value) {
      var lengthToEnsure = this.position + 2;
      this.length < lengthToEnsure && (this.allocated < lengthToEnsure ? this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure, 2 * this.allocated))) : this.allocated > lengthToEnsure && this.___resizeBuffer(this.allocated = lengthToEnsure), this.length = lengthToEnsure), this.data.setUint16(this.position, value, this.littleEndian), this.position += 2
    },
    writeUTF: function(value) {
      this.writeUnsignedShort(this._getUTFBytesCount(value)), this.writeUTFBytes(value)
    },
    writeUTFBytes: function(value) {
      for (var _g1 = 0, _g = value.length; _g > _g1;) {
        var i = _g1++,
          c = value.charCodeAt(i);
        127 >= c ? this.writeByte(c) : 2047 >= c ? (this.writeByte(192 | c >> 6), this.writeByte(128 | 63 & c)) : 65535 >= c ? (this.writeByte(224 | c >> 12), this.writeByte(128 | c >> 6 & 63), this.writeByte(128 | 63 & c)) : (this.writeByte(240 | c >> 18), this.writeByte(128 | c >> 12 & 63), this.writeByte(128 | c >> 6 & 63), this.writeByte(128 | 63 & c))
      }
    },
    __fromBytes: function(inBytes) {
      this.byteView = new Uint8Array(inBytes.b), this.set_length(this.byteView.length), this.allocated = this.length
    },
    __get: function(pos) {
      return this.data.getInt8(pos)
    },
    _getUTFBytesCount: function(value) {
      for (var count = 0, _g1 = 0, _g = value.length; _g > _g1;) {
        var i = _g1++,
          c = value.charCodeAt(i);
        count += 127 >= c ? 1 : 2047 >= c ? 2 : 65535 >= c ? 3 : 4
      }
      return count
    },
    ___resizeBuffer: function(len) {
      var oldByteView = this.byteView,
        newByteView = new Uint8Array(len);
      null != oldByteView && newByteView.set(oldByteView.length <= len ? oldByteView : oldByteView.subarray(0, len)), this.byteView = newByteView, this.data = new DataView(newByteView.buffer)
    },
    __getBuffer: function() {
      return this.data.buffer
    },
    __set: function(pos, v) {
      this.data.setUint8(pos, v)
    },
    get_bytesAvailable: function() {
      return this.length - this.position
    },
    get_endian: function() {
      return this.littleEndian ? "littleEndian" : "bigEndian"
    },
    set_endian: function(endian) {
      return this.littleEndian = "littleEndian" == endian, endian
    },
    set_length: function(value) {
      return this.allocated < value ? this.___resizeBuffer(this.allocated = Std["int"](Math.max(value, 2 * this.allocated))) : this.allocated > value && this.___resizeBuffer(this.allocated = value), this.length = value, value
    },
    __class__: openfl.utils.ByteArray,
    __properties__: {
      set_length: "set_length",
      set_endian: "set_endian",
      get_endian: "get_endian",
      get_bytesAvailable: "get_bytesAvailable"
    }
  }, openfl.utils.Endian = function() {}, $hxClasses["openfl.utils.Endian"] = openfl.utils.Endian, openfl.utils.Endian.__name__ = ["openfl", "utils", "Endian"];
  var $fid = 0;
  Array.prototype.indexOf && (HxOverrides.indexOf = function(a, o, i) {
    return Array.prototype.indexOf.call(a, o, i)
  }), $hxClasses.Math = Math, String.prototype.__class__ = $hxClasses.String = String, String.__name__ = ["String"], $hxClasses.Array = Array, Array.__name__ = ["Array"], Date.prototype.__class__ = $hxClasses.Date = Date, Date.__name__ = ["Date"];
  var Int = $hxClasses.Int = {
      __name__: ["Int"]
    },
    Dynamic = $hxClasses.Dynamic = {
      __name__: ["Dynamic"]
    },
    Float = $hxClasses.Float = Number;
  Float.__name__ = ["Float"];
  var Bool = $hxClasses.Bool = Boolean;
  Bool.__ename__ = ["Bool"];
  var Class = $hxClasses.Class = {
      __name__: ["Class"]
    },
    Enum = {};
  null == Array.prototype.map && (Array.prototype.map = function(f) {
    for (var a = [], _g1 = 0, _g = this.length; _g > _g1;) {
      var i = _g1++;
      a[i] = f(this[i])
    }
    return a
  }), Xml.Element = "element", Xml.PCData = "pcdata", Xml.CData = "cdata", Xml.Comment = "comment", Xml.DocType = "doctype", Xml.ProcessingInstruction = "processingInstruction", Xml.Document = "document", null != window.createjs && (createjs.Sound.alternateExtensions = ["ogg", "mp3", "wav"]), openfl.ui.Multitouch.maxTouchPoints = 2, openfl.ui.Multitouch.supportedGestures = null, openfl.ui.Multitouch.supportsGestureEvents = !1, ApplicationMain.images = new haxe.ds.StringMap, ApplicationMain.urlLoaders = new haxe.ds.StringMap, ApplicationMain.assetsLoaded = 0, ApplicationMain.total = 0, openfl.display.DisplayObject.__instanceCount = 0, openfl.display.DisplayObject.__worldRenderDirty = 0, openfl.display.DisplayObject.__worldTransformDirty = 0, openfl.geom.Matrix.__identity = new openfl.geom.Matrix, com.haxepunk.HXP.VERSION = "2.5.3", com.haxepunk.HXP.INT_MIN_VALUE = -2147483648, com.haxepunk.HXP.INT_MAX_VALUE = 2147483647, com.haxepunk.HXP.blackColor = 0, com.haxepunk.HXP.frameRate = 0, com.haxepunk.HXP.rate = 1, com.haxepunk.HXP.defaultFont = "font/04B_03__.ttf", com.haxepunk.HXP.camera = new openfl.geom.Point, com.haxepunk.HXP.tweener = new com.haxepunk.Tweener, com.haxepunk.HXP.focused = !1, com.haxepunk.HXP.orientations = [], com.haxepunk.HXP.choose = Reflect.makeVarArgs(function(objs) {
    if (null == objs || 0 == objs.length) throw "Can't choose a random element on an empty array";
    if (objs[0] instanceof Array && null == objs[0].__enum__) {
      var c;
      if (c = js.Boot.__cast(objs[0], Array), 0 != c.length) return c[function() {
        var $r;
        return com.haxepunk.HXP._seed = 16807 * com.haxepunk.HXP._seed % 2147483647 | 0, $r = com.haxepunk.HXP._seed / 2147483647 * c.length | 0
      }(this)];
      throw "Can't choose a random element on an empty array"
    }
    return objs[function() {
      var $r;
      return com.haxepunk.HXP._seed = 16807 * com.haxepunk.HXP._seed % 2147483647 | 0, $r = com.haxepunk.HXP._seed / 2147483647 * objs.length | 0
    }(this)]
  }), com.haxepunk.HXP.randomSeed = 0, com.haxepunk.HXP.log = Reflect.makeVarArgs(function(data) {
    null != com.haxepunk.HXP._console && com.haxepunk.HXP._console.log(data)
  }), com.haxepunk.HXP.watch = Reflect.makeVarArgs(function(properties) {
    null != com.haxepunk.HXP._console && com.haxepunk.HXP._console.watch(properties)
  }), com.haxepunk.HXP._bitmap = new haxe.ds.StringMap, com.haxepunk.HXP._seed = 0, com.haxepunk.HXP._volume = 1, com.haxepunk.HXP._pan = 0, com.haxepunk.HXP._soundTransform = new openfl.media.SoundTransform, com.haxepunk.HXP.point = new openfl.geom.Point, com.haxepunk.HXP.point2 = new openfl.geom.Point, com.haxepunk.HXP.zero = new openfl.geom.Point, com.haxepunk.HXP.rect = new openfl.geom.Rectangle, com.haxepunk.HXP.matrix = new openfl.geom.Matrix, com.haxepunk.HXP.sprite = new openfl.display.Sprite, com.haxepunk.Entity._EMPTY = new com.haxepunk.Entity, Clinic.X = 450, Clinic.Y = 200, Clinic.DOOR_X = 470, Clinic.DOOR_Y = 230, Clinic.DEFAULT_INITIAL_STOCK = 5, Clinic.GFX_PATH = "graphics/clinic.png", Person.GFX_OFFSET = 6, Person.GFX_PATH = "graphics/persons_72x72.png", Person.DEFAULT_MOVESPEED = 3.9, Person.BLOOD_BADGE_OFFSET_X = 26, Person.BLOOD_BADGE_OFFSET_Y = -11, Donor.IDLE = "IDLE", Donor.YAY = "YAY", Donor.GFX_IDLE = 0, Donor.GFX_YAY = 1, Donor.DONATION_TIME = 1e4, MainScene.SPAWN_PATIENT_RATE = 100, MainScene.SPAWN_DONOR_RATE = 100, MainScene.SCREEN_WIDTH = 640, MainScene.SCREEN_HEIGHT = 480, Patient.SICK_BEFORE = "SICK_BEFORE", Patient.HEALTHY_AFTER = "HEALTHY_AFTER", Patient.SICK_AFTER = "SICK_AFTER", Patient.DEAD = "DEAD", Patient.GFX_SICK_BEFORE = 2, Patient.GFX_HEALTHY_AFTER = 3, Patient.GFX_SICK_AFTER = 4, Patient.GFX_DEAD = 5, Patient.TRANSFUSION_TIME = 6e3, Patient.RANDOM_WAIT_TO_REVISIT_CLINIC_MS = 1e4, Patient.RANDOM_WAIT_TO_RESOLVE_BLOOD = 5e3, Patient.REALLY_SICK_MOVESPEED = .7, Simulator.MAX_SIMULATION_SPEED = 1e4, Simulator.DEFAULT_SIMULATION_SPEED = 50, com.haxepunk.debug.Console.BIG_WIDTH_THRESHOLD = 420, com.haxepunk.graphics.Image._flips = new haxe.ds.ObjectMap, com.haxepunk.graphics.Text.tag_re = new EReg("<([^>]+)>([^(?:</)]+)</[^>]+>", "g"), com.haxepunk.graphics.atlas.Atlas.smooth = !1, com.haxepunk.graphics.atlas.AtlasData.BLEND_NONE = 0, com.haxepunk.graphics.atlas.AtlasData.BLEND_ADD = 65536, com.haxepunk.graphics.atlas.AtlasData.BLEND_NORMAL = 0, com.haxepunk.graphics.atlas.AtlasData.BLEND_MULTIPLY = 131072, com.haxepunk.graphics.atlas.AtlasData.BLEND_SCREEN = 262144, com.haxepunk.graphics.atlas.AtlasData._dataPool = new haxe.ds.StringMap, com.haxepunk.graphics.atlas.AtlasData._uniqueId = 0, com.haxepunk.masks.Polygon.EPSILON = 1e-9, com.haxepunk.masks.Polygon.firstProj = new com.haxepunk.math.Projection, com.haxepunk.masks.Polygon.secondProj = new com.haxepunk.math.Projection, com.haxepunk.masks.Polygon.vertical = new openfl.geom.Point(0, 1), com.haxepunk.masks.Polygon.horizontal = new openfl.geom.Point(1, 0), com.haxepunk.masks.SlopedGrid._emptyTile = {
    type: com.haxepunk.masks.TileType.Empty
  }, openfl.events.Event.ACTIVATE = "activate", openfl.events.Event.ADDED = "added", openfl.events.Event.ADDED_TO_STAGE = "addedToStage", openfl.events.Event.CANCEL = "cancel", openfl.events.Event.CHANGE = "change", openfl.events.Event.CLOSE = "close", openfl.events.Event.COMPLETE = "complete", openfl.events.Event.CONNECT = "connect", openfl.events.Event.CONTEXT3D_CREATE = "context3DCreate", openfl.events.Event.DEACTIVATE = "deactivate", openfl.events.Event.ENTER_FRAME = "enterFrame", openfl.events.Event.ID3 = "id3", openfl.events.Event.INIT = "init", openfl.events.Event.MOUSE_LEAVE = "mouseLeave", openfl.events.Event.OPEN = "open", openfl.events.Event.REMOVED = "removed", openfl.events.Event.REMOVED_FROM_STAGE = "removedFromStage", openfl.events.Event.RENDER = "render", openfl.events.Event.RESIZE = "resize", openfl.events.Event.SCROLL = "scroll", openfl.events.Event.SELECT = "select", openfl.events.Event.TAB_CHILDREN_CHANGE = "tabChildrenChange", openfl.events.Event.TAB_ENABLED_CHANGE = "tabEnabledChange", openfl.events.Event.TAB_INDEX_CHANGE = "tabIndexChange", openfl.events.Event.UNLOAD = "unload", openfl.events.Event.SOUND_COMPLETE = "soundComplete", com.haxepunk.tweens.TweenEvent.START = "start", com.haxepunk.tweens.TweenEvent.UPDATE = "update", com.haxepunk.tweens.TweenEvent.FINISH = "finish", com.haxepunk.utils.Draw._matrix = new openfl.geom.Matrix, com.haxepunk.utils.Ease.B1 = .36363636363636365, com.haxepunk.utils.Ease.B2 = .7272727272727273, com.haxepunk.utils.Ease.B3 = .5454545454545454, com.haxepunk.utils.Ease.B4 = .9090909090909091, com.haxepunk.utils.Ease.B5 = .8181818181818182, com.haxepunk.utils.Ease.B6 = .9545454545454546, com.haxepunk.utils.Gesture.TAP = 1, com.haxepunk.utils.Gesture.DOUBLE_TAP = 2, com.haxepunk.utils.Gesture.LONG_PRESS = 3, com.haxepunk.utils.Gesture.MOVE = 4, com.haxepunk.utils.Gesture.PINCH = 5, com.haxepunk.utils.Gesture.TWO_FINGER_TAP = 6, com.haxepunk.utils.Gesture.longPressTime = .5, com.haxepunk.utils.Gesture.doubleTapTime = .5, com.haxepunk.utils.Gesture.deadZone = 5, com.haxepunk.utils.Gesture.enabled = !1, com.haxepunk.utils.Gesture.gestures = new haxe.ds.IntMap, com.haxepunk.utils.Gesture._lastTap = 0, com.haxepunk.utils.HaxelibInfo.$name = "HaxePunk", com.haxepunk.utils.HaxelibInfo.license = "MIT", com.haxepunk.utils.HaxelibInfo.tags = ["flash", "game", "cpp", "openfl"], com.haxepunk.utils.HaxelibInfo.description = "A Haxe port of the FlashPunk AS3 engine.", com.haxepunk.utils.HaxelibInfo.contributors = ["heardtheword", "_ibilon"], com.haxepunk.utils.HaxelibInfo.releasenote = "See CHANGELOG", com.haxepunk.utils.HaxelibInfo.version = "2.5.3", com.haxepunk.utils.HaxelibInfo.url = "http://haxepunk.com", com.haxepunk.utils.HaxelibInfo.install = {
    "lime-tools": "",
    "openfl-ouya": ""
  }, com.haxepunk.utils.HaxelibInfo.dependencies = {
    openfl: "",
    lime: ""
  }, com.haxepunk.utils.Input.keyString = "", com.haxepunk.utils.Input.multiTouchSupported = !1, com.haxepunk.utils.Input.kKeyStringMax = 100, com.haxepunk.utils.Input._enabled = !1, com.haxepunk.utils.Input._key = new haxe.ds.IntMap, com.haxepunk.utils.Input._keyNum = 0, com.haxepunk.utils.Input._press = new Array, com.haxepunk.utils.Input._pressNum = 0, com.haxepunk.utils.Input._release = new Array, com.haxepunk.utils.Input._releaseNum = 0, com.haxepunk.utils.Input._mouseWheelDelta = 0, com.haxepunk.utils.Input._touches = new haxe.ds.IntMap, com.haxepunk.utils.Input._touchOrder = new Array, com.haxepunk.utils.Input._joysticks = new haxe.ds.IntMap, com.haxepunk.utils.Input._control = new haxe.ds.StringMap, com.haxepunk.utils.Input._nativeCorrection = new haxe.ds.StringMap, com.haxepunk.utils.Joystick.deadZone = .15, com.haxepunk.utils.OUYA_GAMEPAD.O_BUTTON = 0, com.haxepunk.utils.OUYA_GAMEPAD.U_BUTTON = 1, com.haxepunk.utils.OUYA_GAMEPAD.Y_BUTTON = 2, com.haxepunk.utils.OUYA_GAMEPAD.A_BUTTON = 3, com.haxepunk.utils.OUYA_GAMEPAD.LB_BUTTON = 4, com.haxepunk.utils.OUYA_GAMEPAD.RB_BUTTON = 5, com.haxepunk.utils.OUYA_GAMEPAD.BACK_BUTTON = 20, com.haxepunk.utils.OUYA_GAMEPAD.START_BUTTON = 20, com.haxepunk.utils.OUYA_GAMEPAD.LEFT_ANALOGUE_BUTTON = 6, com.haxepunk.utils.OUYA_GAMEPAD.RIGHT_ANALOGUE_BUTTON = 7, com.haxepunk.utils.OUYA_GAMEPAD.LEFT_TRIGGER_BUTTON = 12, com.haxepunk.utils.OUYA_GAMEPAD.RIGHT_TRIGGER_BUTTON = 13, com.haxepunk.utils.OUYA_GAMEPAD.DPAD_UP = 8, com.haxepunk.utils.OUYA_GAMEPAD.DPAD_DOWN = 9, com.haxepunk.utils.OUYA_GAMEPAD.DPAD_LEFT = 10, com.haxepunk.utils.OUYA_GAMEPAD.DPAD_RIGHT = 11, com.haxepunk.utils.OUYA_GAMEPAD.HOME_BUTTON = 16777234, com.haxepunk.utils.OUYA_GAMEPAD.LEFT_ANALOGUE_X = 0, com.haxepunk.utils.OUYA_GAMEPAD.LEFT_ANALOGUE_Y = 1, com.haxepunk.utils.OUYA_GAMEPAD.RIGHT_ANALOGUE_X = 5, com.haxepunk.utils.OUYA_GAMEPAD.RIGHT_ANALOGUE_Y = 4, com.haxepunk.utils.OUYA_GAMEPAD.LEFT_TRIGGER = 2, com.haxepunk.utils.OUYA_GAMEPAD.RIGHT_TRIGGER = 3, com.haxepunk.utils.XBOX_GAMEPAD.A_BUTTON = 10, com.haxepunk.utils.XBOX_GAMEPAD.B_BUTTON = 11, com.haxepunk.utils.XBOX_GAMEPAD.X_BUTTON = 12, com.haxepunk.utils.XBOX_GAMEPAD.Y_BUTTON = 13, com.haxepunk.utils.XBOX_GAMEPAD.LB_BUTTON = 8, com.haxepunk.utils.XBOX_GAMEPAD.RB_BUTTON = 9, com.haxepunk.utils.XBOX_GAMEPAD.BACK_BUTTON = 5, com.haxepunk.utils.XBOX_GAMEPAD.START_BUTTON = 4, com.haxepunk.utils.XBOX_GAMEPAD.LEFT_ANALOGUE_BUTTON = 6, com.haxepunk.utils.XBOX_GAMEPAD.RIGHT_ANALOGUE_BUTTON = 7, com.haxepunk.utils.XBOX_GAMEPAD.XBOX_BUTTON = 14, com.haxepunk.utils.XBOX_GAMEPAD.DPAD_UP = 0, com.haxepunk.utils.XBOX_GAMEPAD.DPAD_DOWN = 1, com.haxepunk.utils.XBOX_GAMEPAD.DPAD_LEFT = 2, com.haxepunk.utils.XBOX_GAMEPAD.DPAD_RIGHT = 3, com.haxepunk.utils.XBOX_GAMEPAD.LEFT_ANALOGUE_X = 0, com.haxepunk.utils.XBOX_GAMEPAD.LEFT_ANALOGUE_Y = 1, com.haxepunk.utils.XBOX_GAMEPAD.RIGHT_ANALOGUE_X = 2, com.haxepunk.utils.XBOX_GAMEPAD.RIGHT_ANALOGUE_Y = 3, com.haxepunk.utils.XBOX_GAMEPAD.LEFT_TRIGGER = 4, com.haxepunk.utils.XBOX_GAMEPAD.RIGHT_TRIGGER = 5, com.haxepunk.utils.PS3_GAMEPAD.TRIANGLE_BUTTON = 12, com.haxepunk.utils.PS3_GAMEPAD.CIRCLE_BUTTON = 13, com.haxepunk.utils.PS3_GAMEPAD.X_BUTTON = 14, com.haxepunk.utils.PS3_GAMEPAD.SQUARE_BUTTON = 15, com.haxepunk.utils.PS3_GAMEPAD.L1_BUTTON = 10, com.haxepunk.utils.PS3_GAMEPAD.R1_BUTTON = 11, com.haxepunk.utils.PS3_GAMEPAD.L2_BUTTON = 8, com.haxepunk.utils.PS3_GAMEPAD.R2_BUTTON = 9, com.haxepunk.utils.PS3_GAMEPAD.SELECT_BUTTON = 0, com.haxepunk.utils.PS3_GAMEPAD.START_BUTTON = 3, com.haxepunk.utils.PS3_GAMEPAD.PS_BUTTON = 16, com.haxepunk.utils.PS3_GAMEPAD.LEFT_ANALOGUE_BUTTON = 1, com.haxepunk.utils.PS3_GAMEPAD.RIGHT_ANALOGUE_BUTTON = 2, com.haxepunk.utils.PS3_GAMEPAD.DPAD_UP = 4, com.haxepunk.utils.PS3_GAMEPAD.DPAD_DOWN = 6, com.haxepunk.utils.PS3_GAMEPAD.DPAD_LEFT = 7, com.haxepunk.utils.PS3_GAMEPAD.DPAD_RIGHT = 5, com.haxepunk.utils.PS3_GAMEPAD.LEFT_ANALOGUE_X = 0, com.haxepunk.utils.PS3_GAMEPAD.LEFT_ANALOGUE_Y = 1, com.haxepunk.utils.PS3_GAMEPAD.TRIANGLE_BUTTON_PRESSURE = 16, com.haxepunk.utils.PS3_GAMEPAD.CIRCLE_BUTTON_PRESSURE = 17, com.haxepunk.utils.PS3_GAMEPAD.X_BUTTON_PRESSURE = 18, com.haxepunk.utils.PS3_GAMEPAD.SQUARE_BUTTON_PRESSURE = 19, com.haxepunk.utils.Key.ANY = -1, com.haxepunk.utils.Key.LEFT = 37, com.haxepunk.utils.Key.UP = 38, com.haxepunk.utils.Key.RIGHT = 39, com.haxepunk.utils.Key.DOWN = 40, com.haxepunk.utils.Key.ENTER = 13, com.haxepunk.utils.Key.COMMAND = 15, com.haxepunk.utils.Key.CONTROL = 17, com.haxepunk.utils.Key.SPACE = 32, com.haxepunk.utils.Key.SHIFT = 16, com.haxepunk.utils.Key.BACKSPACE = 8, com.haxepunk.utils.Key.CAPS_LOCK = 20, com.haxepunk.utils.Key.DELETE = 46, com.haxepunk.utils.Key.END = 35, com.haxepunk.utils.Key.ESCAPE = 27, com.haxepunk.utils.Key.HOME = 36, com.haxepunk.utils.Key.INSERT = 45, com.haxepunk.utils.Key.TAB = 9, com.haxepunk.utils.Key.PAGE_DOWN = 34, com.haxepunk.utils.Key.PAGE_UP = 33, com.haxepunk.utils.Key.LEFT_SQUARE_BRACKET = 219, com.haxepunk.utils.Key.RIGHT_SQUARE_BRACKET = 221, com.haxepunk.utils.Key.TILDE = 192, com.haxepunk.utils.Key.A = 65, com.haxepunk.utils.Key.B = 66, com.haxepunk.utils.Key.C = 67, com.haxepunk.utils.Key.D = 68, com.haxepunk.utils.Key.E = 69, com.haxepunk.utils.Key.F = 70, com.haxepunk.utils.Key.G = 71, com.haxepunk.utils.Key.H = 72, com.haxepunk.utils.Key.I = 73, com.haxepunk.utils.Key.J = 74, com.haxepunk.utils.Key.K = 75, com.haxepunk.utils.Key.L = 76, com.haxepunk.utils.Key.M = 77, com.haxepunk.utils.Key.N = 78, com.haxepunk.utils.Key.O = 79, com.haxepunk.utils.Key.P = 80, com.haxepunk.utils.Key.Q = 81, com.haxepunk.utils.Key.R = 82, com.haxepunk.utils.Key.S = 83, com.haxepunk.utils.Key.T = 84, com.haxepunk.utils.Key.U = 85, com.haxepunk.utils.Key.V = 86, com.haxepunk.utils.Key.W = 87, com.haxepunk.utils.Key.X = 88, com.haxepunk.utils.Key.Y = 89, com.haxepunk.utils.Key.Z = 90, com.haxepunk.utils.Key.F1 = 112, com.haxepunk.utils.Key.F2 = 113, com.haxepunk.utils.Key.F3 = 114, com.haxepunk.utils.Key.F4 = 115, com.haxepunk.utils.Key.F5 = 116, com.haxepunk.utils.Key.F6 = 117, com.haxepunk.utils.Key.F7 = 118, com.haxepunk.utils.Key.F8 = 119, com.haxepunk.utils.Key.F9 = 120, com.haxepunk.utils.Key.F10 = 121, com.haxepunk.utils.Key.F11 = 122, com.haxepunk.utils.Key.F12 = 123, com.haxepunk.utils.Key.F13 = 124, com.haxepunk.utils.Key.F14 = 125, com.haxepunk.utils.Key.F15 = 126, com.haxepunk.utils.Key.DIGIT_0 = 48, com.haxepunk.utils.Key.DIGIT_1 = 49, com.haxepunk.utils.Key.DIGIT_2 = 50, com.haxepunk.utils.Key.DIGIT_3 = 51, com.haxepunk.utils.Key.DIGIT_4 = 52, com.haxepunk.utils.Key.DIGIT_5 = 53, com.haxepunk.utils.Key.DIGIT_6 = 54, com.haxepunk.utils.Key.DIGIT_7 = 55, com.haxepunk.utils.Key.DIGIT_8 = 56, com.haxepunk.utils.Key.DIGIT_9 = 57, com.haxepunk.utils.Key.NUMPAD_0 = 96, com.haxepunk.utils.Key.NUMPAD_1 = 97, com.haxepunk.utils.Key.NUMPAD_2 = 98, com.haxepunk.utils.Key.NUMPAD_3 = 99, com.haxepunk.utils.Key.NUMPAD_4 = 100, com.haxepunk.utils.Key.NUMPAD_5 = 101, com.haxepunk.utils.Key.NUMPAD_6 = 102, com.haxepunk.utils.Key.NUMPAD_7 = 103, com.haxepunk.utils.Key.NUMPAD_8 = 104, com.haxepunk.utils.Key.NUMPAD_9 = 105, com.haxepunk.utils.Key.NUMPAD_ADD = 107, com.haxepunk.utils.Key.NUMPAD_DECIMAL = 110, com.haxepunk.utils.Key.NUMPAD_DIVIDE = 111, com.haxepunk.utils.Key.NUMPAD_ENTER = 108, com.haxepunk.utils.Key.NUMPAD_MULTIPLY = 106, com.haxepunk.utils.Key.NUMPAD_SUBTRACT = 109, haxe.Unserializer.DEFAULT_RESOLVER = Type, haxe.Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:", haxe.Unserializer.CODES = null, haxe.ds.ObjectMap.count = 0, haxe.xml.Parser.escapes = function() {
    var $r, h = new haxe.ds.StringMap;
    return h.set("lt", "<"), h.set("gt", ">"), h.set("amp", "&"), h.set("quot", '"'), h.set("apos", "'"), h.set("nbsp", String.fromCharCode(160)), $r = h
  }(this), openfl.Assets.cache = new openfl.AssetCache, openfl.Assets.libraries = new haxe.ds.StringMap, openfl.Assets.dispatcher = new openfl.events.EventDispatcher, openfl.Assets.initialized = !1, openfl.Lib.__sentWarnings = new haxe.ds.StringMap, openfl.Lib.__startTime = haxe.Timer.stamp(), openfl.display.BitmapData.__base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", openfl.display.BitmapDataChannel.ALPHA = 8, openfl.display.BitmapDataChannel.BLUE = 4, openfl.display.BitmapDataChannel.GREEN = 2, openfl.display.BitmapDataChannel.RED = 1, openfl.display.Graphics.TILE_SCALE = 1, openfl.display.Graphics.TILE_ROTATION = 2, openfl.display.Graphics.TILE_RGB = 4, openfl.display.Graphics.TILE_ALPHA = 8, openfl.display.Graphics.TILE_TRANS_2x2 = 16, openfl.display.Graphics.TILE_BLEND_NORMAL = 0, openfl.display.Graphics.TILE_BLEND_ADD = 65536, openfl.display.Tilesheet.TILE_SCALE = 1, openfl.display.Tilesheet.TILE_ROTATION = 2, openfl.display.Tilesheet.TILE_RGB = 4, openfl.display.Tilesheet.TILE_ALPHA = 8, openfl.display.Tilesheet.TILE_TRANS_2x2 = 16, openfl.display.Tilesheet.TILE_BLEND_NORMAL = 0, openfl.display.Tilesheet.TILE_BLEND_ADD = 65536, openfl.display.Tilesheet.TILE_BLEND_MULTIPLY = 131072, openfl.display.Tilesheet.TILE_BLEND_SCREEN = 262144, openfl.errors.Error.DEFAULT_TO_STRING = "Error", openfl.events.TextEvent.LINK = "link", openfl.events.TextEvent.TEXT_INPUT = "textInput", openfl.events.ErrorEvent.ERROR = "error", openfl.events.FocusEvent.FOCUS_IN = "focusIn", openfl.events.FocusEvent.FOCUS_OUT = "focusOut", openfl.events.FocusEvent.KEY_FOCUS_CHANGE = "keyFocusChange", openfl.events.FocusEvent.MOUSE_FOCUS_CHANGE = "mouseFocusChange", openfl.events.HTTPStatusEvent.HTTP_RESPONSE_STATUS = "httpResponseStatus", openfl.events.HTTPStatusEvent.HTTP_STATUS = "httpStatus", openfl.events.IOErrorEvent.IO_ERROR = "ioError", openfl.events.KeyboardEvent.KEY_DOWN = "keyDown", openfl.events.KeyboardEvent.KEY_UP = "keyUp", openfl.events.MouseEvent.CLICK = "click", openfl.events.MouseEvent.DOUBLE_CLICK = "doubleClick", openfl.events.MouseEvent.MIDDLE_CLICK = "middleClick", openfl.events.MouseEvent.MIDDLE_MOUSE_DOWN = "middleMouseDown", openfl.events.MouseEvent.MIDDLE_MOUSE_UP = "middleMouseUp", openfl.events.MouseEvent.MOUSE_DOWN = "mouseDown", openfl.events.MouseEvent.MOUSE_MOVE = "mouseMove", openfl.events.MouseEvent.MOUSE_OUT = "mouseOut", openfl.events.MouseEvent.MOUSE_OVER = "mouseOver", openfl.events.MouseEvent.MOUSE_UP = "mouseUp", openfl.events.MouseEvent.MOUSE_WHEEL = "mouseWheel", openfl.events.MouseEvent.RIGHT_CLICK = "rightClick", openfl.events.MouseEvent.RIGHT_MOUSE_DOWN = "rightMouseDown", openfl.events.MouseEvent.RIGHT_MOUSE_UP = "rightMouseUp", openfl.events.MouseEvent.ROLL_OUT = "rollOut", openfl.events.MouseEvent.ROLL_OVER = "rollOver", openfl.events.ProgressEvent.PROGRESS = "progress", openfl.events.ProgressEvent.SOCKET_DATA = "socketData", openfl.events.SecurityErrorEvent.SECURITY_ERROR = "securityError", openfl.events.TouchEvent.TOUCH_BEGIN = "touchBegin", openfl.events.TouchEvent.TOUCH_END = "touchEnd", openfl.events.TouchEvent.TOUCH_MOVE = "touchMove", openfl.events.TouchEvent.TOUCH_OUT = "touchOut", openfl.events.TouchEvent.TOUCH_OVER = "touchOver", openfl.events.TouchEvent.TOUCH_ROLL_OUT = "touchRollOut", openfl.events.TouchEvent.TOUCH_ROLL_OVER = "touchRollOver", openfl.events.TouchEvent.TOUCH_TAP = "touchTap", openfl.media.Sound.__registeredSounds = new haxe.ds.StringMap, openfl.net.URLRequestMethod.DELETE = "DELETE", openfl.net.URLRequestMethod.GET = "GET", openfl.net.URLRequestMethod.HEAD = "HEAD", openfl.net.URLRequestMethod.OPTIONS = "OPTIONS", openfl.net.URLRequestMethod.POST = "POST", openfl.net.URLRequestMethod.PUT = "PUT", openfl.system.ApplicationDomain.currentDomain = new openfl.system.ApplicationDomain(null), openfl.system.SecurityDomain.currentDomain = new openfl.system.SecurityDomain, openfl.system.System.useCodePage = !1, openfl.ui.Keyboard.NUMBER_0 = 48, openfl.ui.Keyboard.NUMBER_1 = 49, openfl.ui.Keyboard.NUMBER_2 = 50, openfl.ui.Keyboard.NUMBER_3 = 51, openfl.ui.Keyboard.NUMBER_4 = 52, openfl.ui.Keyboard.NUMBER_5 = 53, openfl.ui.Keyboard.NUMBER_6 = 54, openfl.ui.Keyboard.NUMBER_7 = 55, openfl.ui.Keyboard.NUMBER_8 = 56, openfl.ui.Keyboard.NUMBER_9 = 57, openfl.ui.Keyboard.A = 65, openfl.ui.Keyboard.B = 66, openfl.ui.Keyboard.C = 67, openfl.ui.Keyboard.D = 68, openfl.ui.Keyboard.E = 69, openfl.ui.Keyboard.F = 70, openfl.ui.Keyboard.G = 71, openfl.ui.Keyboard.H = 72, openfl.ui.Keyboard.I = 73, openfl.ui.Keyboard.J = 74, openfl.ui.Keyboard.K = 75, openfl.ui.Keyboard.L = 76, openfl.ui.Keyboard.M = 77, openfl.ui.Keyboard.N = 78, openfl.ui.Keyboard.O = 79, openfl.ui.Keyboard.P = 80, openfl.ui.Keyboard.Q = 81, openfl.ui.Keyboard.R = 82, openfl.ui.Keyboard.S = 83, openfl.ui.Keyboard.T = 84, openfl.ui.Keyboard.U = 85, openfl.ui.Keyboard.V = 86, openfl.ui.Keyboard.W = 87, openfl.ui.Keyboard.X = 88, openfl.ui.Keyboard.Y = 89, openfl.ui.Keyboard.Z = 90, openfl.ui.Keyboard.NUMPAD_0 = 96, openfl.ui.Keyboard.NUMPAD_1 = 97, openfl.ui.Keyboard.NUMPAD_2 = 98, openfl.ui.Keyboard.NUMPAD_3 = 99, openfl.ui.Keyboard.NUMPAD_4 = 100, openfl.ui.Keyboard.NUMPAD_5 = 101, openfl.ui.Keyboard.NUMPAD_6 = 102, openfl.ui.Keyboard.NUMPAD_7 = 103, openfl.ui.Keyboard.NUMPAD_8 = 104, openfl.ui.Keyboard.NUMPAD_9 = 105, openfl.ui.Keyboard.NUMPAD_MULTIPLY = 106, openfl.ui.Keyboard.NUMPAD_ADD = 107, openfl.ui.Keyboard.NUMPAD_ENTER = 108, openfl.ui.Keyboard.NUMPAD_SUBTRACT = 109, openfl.ui.Keyboard.NUMPAD_DECIMAL = 110, openfl.ui.Keyboard.NUMPAD_DIVIDE = 111, openfl.ui.Keyboard.F1 = 112, openfl.ui.Keyboard.F2 = 113, openfl.ui.Keyboard.F3 = 114, openfl.ui.Keyboard.F4 = 115, openfl.ui.Keyboard.F5 = 116, openfl.ui.Keyboard.F6 = 117, openfl.ui.Keyboard.F7 = 118, openfl.ui.Keyboard.F8 = 119, openfl.ui.Keyboard.F9 = 120, openfl.ui.Keyboard.F10 = 121, openfl.ui.Keyboard.F11 = 122, openfl.ui.Keyboard.F12 = 123, openfl.ui.Keyboard.F13 = 124, openfl.ui.Keyboard.F14 = 125, openfl.ui.Keyboard.F15 = 126, openfl.ui.Keyboard.BACKSPACE = 8, openfl.ui.Keyboard.TAB = 9, openfl.ui.Keyboard.ALTERNATE = 18, openfl.ui.Keyboard.ENTER = 13, openfl.ui.Keyboard.COMMAND = 15, openfl.ui.Keyboard.SHIFT = 16, openfl.ui.Keyboard.CONTROL = 17, openfl.ui.Keyboard.CAPS_LOCK = 20, openfl.ui.Keyboard.NUMPAD = 21, openfl.ui.Keyboard.ESCAPE = 27, openfl.ui.Keyboard.SPACE = 32, openfl.ui.Keyboard.PAGE_UP = 33, openfl.ui.Keyboard.PAGE_DOWN = 34, openfl.ui.Keyboard.END = 35, openfl.ui.Keyboard.HOME = 36, openfl.ui.Keyboard.LEFT = 37, openfl.ui.Keyboard.RIGHT = 39, openfl.ui.Keyboard.UP = 38, openfl.ui.Keyboard.DOWN = 40, openfl.ui.Keyboard.INSERT = 45, openfl.ui.Keyboard.DELETE = 46, openfl.ui.Keyboard.NUMLOCK = 144, openfl.ui.Keyboard.BREAK = 19, openfl.ui.Keyboard.SEMICOLON = 186, openfl.ui.Keyboard.EQUAL = 187, openfl.ui.Keyboard.COMMA = 188, openfl.ui.Keyboard.MINUS = 189, openfl.ui.Keyboard.PERIOD = 190, openfl.ui.Keyboard.SLASH = 191, openfl.ui.Keyboard.BACKQUOTE = 192, openfl.ui.Keyboard.LEFTBRACKET = 219, openfl.ui.Keyboard.BACKSLASH = 220, openfl.ui.Keyboard.RIGHTBRACKET = 221, openfl.ui.Keyboard.QUOTE = 222, openfl.ui.Keyboard.DOM_VK_CANCEL = 3, openfl.ui.Keyboard.DOM_VK_HELP = 6, openfl.ui.Keyboard.DOM_VK_BACK_SPACE = 8, openfl.ui.Keyboard.DOM_VK_TAB = 9, openfl.ui.Keyboard.DOM_VK_CLEAR = 12, openfl.ui.Keyboard.DOM_VK_RETURN = 13, openfl.ui.Keyboard.DOM_VK_ENTER = 14, openfl.ui.Keyboard.DOM_VK_SHIFT = 16, openfl.ui.Keyboard.DOM_VK_CONTROL = 17, openfl.ui.Keyboard.DOM_VK_ALT = 18, openfl.ui.Keyboard.DOM_VK_PAUSE = 19, openfl.ui.Keyboard.DOM_VK_CAPS_LOCK = 20, openfl.ui.Keyboard.DOM_VK_ESCAPE = 27, openfl.ui.Keyboard.DOM_VK_SPACE = 32, openfl.ui.Keyboard.DOM_VK_PAGE_UP = 33, openfl.ui.Keyboard.DOM_VK_PAGE_DOWN = 34, openfl.ui.Keyboard.DOM_VK_END = 35, openfl.ui.Keyboard.DOM_VK_HOME = 36, openfl.ui.Keyboard.DOM_VK_LEFT = 37, openfl.ui.Keyboard.DOM_VK_UP = 38, openfl.ui.Keyboard.DOM_VK_RIGHT = 39, openfl.ui.Keyboard.DOM_VK_DOWN = 40, openfl.ui.Keyboard.DOM_VK_PRINTSCREEN = 44, openfl.ui.Keyboard.DOM_VK_INSERT = 45, openfl.ui.Keyboard.DOM_VK_DELETE = 46, openfl.ui.Keyboard.DOM_VK_0 = 48, openfl.ui.Keyboard.DOM_VK_1 = 49, openfl.ui.Keyboard.DOM_VK_2 = 50, openfl.ui.Keyboard.DOM_VK_3 = 51, openfl.ui.Keyboard.DOM_VK_4 = 52, openfl.ui.Keyboard.DOM_VK_5 = 53, openfl.ui.Keyboard.DOM_VK_6 = 54, openfl.ui.Keyboard.DOM_VK_7 = 55, openfl.ui.Keyboard.DOM_VK_8 = 56, openfl.ui.Keyboard.DOM_VK_9 = 57, openfl.ui.Keyboard.DOM_VK_SEMICOLON = 59, openfl.ui.Keyboard.DOM_VK_EQUALS = 61, openfl.ui.Keyboard.DOM_VK_A = 65, openfl.ui.Keyboard.DOM_VK_B = 66, openfl.ui.Keyboard.DOM_VK_C = 67, openfl.ui.Keyboard.DOM_VK_D = 68, openfl.ui.Keyboard.DOM_VK_E = 69, openfl.ui.Keyboard.DOM_VK_F = 70, openfl.ui.Keyboard.DOM_VK_G = 71, openfl.ui.Keyboard.DOM_VK_H = 72, openfl.ui.Keyboard.DOM_VK_I = 73, openfl.ui.Keyboard.DOM_VK_J = 74, openfl.ui.Keyboard.DOM_VK_K = 75, openfl.ui.Keyboard.DOM_VK_L = 76, openfl.ui.Keyboard.DOM_VK_M = 77, openfl.ui.Keyboard.DOM_VK_N = 78, openfl.ui.Keyboard.DOM_VK_O = 79, openfl.ui.Keyboard.DOM_VK_P = 80, openfl.ui.Keyboard.DOM_VK_Q = 81, openfl.ui.Keyboard.DOM_VK_R = 82, openfl.ui.Keyboard.DOM_VK_S = 83, openfl.ui.Keyboard.DOM_VK_T = 84, openfl.ui.Keyboard.DOM_VK_U = 85, openfl.ui.Keyboard.DOM_VK_V = 86, openfl.ui.Keyboard.DOM_VK_W = 87, openfl.ui.Keyboard.DOM_VK_X = 88, openfl.ui.Keyboard.DOM_VK_Y = 89, openfl.ui.Keyboard.DOM_VK_Z = 90, openfl.ui.Keyboard.DOM_VK_CONTEXT_MENU = 93, openfl.ui.Keyboard.DOM_VK_NUMPAD0 = 96, openfl.ui.Keyboard.DOM_VK_NUMPAD1 = 97, openfl.ui.Keyboard.DOM_VK_NUMPAD2 = 98, openfl.ui.Keyboard.DOM_VK_NUMPAD3 = 99, openfl.ui.Keyboard.DOM_VK_NUMPAD4 = 100, openfl.ui.Keyboard.DOM_VK_NUMPAD5 = 101, openfl.ui.Keyboard.DOM_VK_NUMPAD6 = 102, openfl.ui.Keyboard.DOM_VK_NUMPAD7 = 103, openfl.ui.Keyboard.DOM_VK_NUMPAD8 = 104, openfl.ui.Keyboard.DOM_VK_NUMPAD9 = 105, openfl.ui.Keyboard.DOM_VK_MULTIPLY = 106, openfl.ui.Keyboard.DOM_VK_ADD = 107, openfl.ui.Keyboard.DOM_VK_SEPARATOR = 108, openfl.ui.Keyboard.DOM_VK_SUBTRACT = 109, openfl.ui.Keyboard.DOM_VK_DECIMAL = 110, openfl.ui.Keyboard.DOM_VK_DIVIDE = 111, openfl.ui.Keyboard.DOM_VK_F1 = 112, openfl.ui.Keyboard.DOM_VK_F2 = 113, openfl.ui.Keyboard.DOM_VK_F3 = 114, openfl.ui.Keyboard.DOM_VK_F4 = 115, openfl.ui.Keyboard.DOM_VK_F5 = 116, openfl.ui.Keyboard.DOM_VK_F6 = 117, openfl.ui.Keyboard.DOM_VK_F7 = 118, openfl.ui.Keyboard.DOM_VK_F8 = 119, openfl.ui.Keyboard.DOM_VK_F9 = 120, openfl.ui.Keyboard.DOM_VK_F10 = 121, openfl.ui.Keyboard.DOM_VK_F11 = 122, openfl.ui.Keyboard.DOM_VK_F12 = 123, openfl.ui.Keyboard.DOM_VK_F13 = 124, openfl.ui.Keyboard.DOM_VK_F14 = 125, openfl.ui.Keyboard.DOM_VK_F15 = 126, openfl.ui.Keyboard.DOM_VK_F16 = 127, openfl.ui.Keyboard.DOM_VK_F17 = 128, openfl.ui.Keyboard.DOM_VK_F18 = 129, openfl.ui.Keyboard.DOM_VK_F19 = 130, openfl.ui.Keyboard.DOM_VK_F20 = 131, openfl.ui.Keyboard.DOM_VK_F21 = 132, openfl.ui.Keyboard.DOM_VK_F22 = 133, openfl.ui.Keyboard.DOM_VK_F23 = 134, openfl.ui.Keyboard.DOM_VK_F24 = 135, openfl.ui.Keyboard.DOM_VK_NUM_LOCK = 144, openfl.ui.Keyboard.DOM_VK_SCROLL_LOCK = 145, openfl.ui.Keyboard.DOM_VK_COMMA = 188, openfl.ui.Keyboard.DOM_VK_PERIOD = 190, openfl.ui.Keyboard.DOM_VK_SLASH = 191, openfl.ui.Keyboard.DOM_VK_BACK_QUOTE = 192, openfl.ui.Keyboard.DOM_VK_OPEN_BRACKET = 219, openfl.ui.Keyboard.DOM_VK_BACK_SLASH = 220, openfl.ui.Keyboard.DOM_VK_CLOSE_BRACKET = 221, openfl.ui.Keyboard.DOM_VK_QUOTE = 222, openfl.ui.Keyboard.DOM_VK_META = 224, openfl.ui.Keyboard.DOM_VK_KANA = 21, openfl.ui.Keyboard.DOM_VK_HANGUL = 21, openfl.ui.Keyboard.DOM_VK_JUNJA = 23, openfl.ui.Keyboard.DOM_VK_FINAL = 24, openfl.ui.Keyboard.DOM_VK_HANJA = 25, openfl.ui.Keyboard.DOM_VK_KANJI = 25, openfl.ui.Keyboard.DOM_VK_CONVERT = 28, openfl.ui.Keyboard.DOM_VK_NONCONVERT = 29, openfl.ui.Keyboard.DOM_VK_ACEPT = 30, openfl.ui.Keyboard.DOM_VK_MODECHANGE = 31, openfl.ui.Keyboard.DOM_VK_SELECT = 41, openfl.ui.Keyboard.DOM_VK_PRINT = 42, openfl.ui.Keyboard.DOM_VK_EXECUTE = 43, openfl.ui.Keyboard.DOM_VK_SLEEP = 95, openfl.utils.Endian.BIG_ENDIAN = "bigEndian", openfl.utils.Endian.LITTLE_ENDIAN = "littleEndian", ApplicationMain.main()
}("undefined" != typeof window ? window : exports);